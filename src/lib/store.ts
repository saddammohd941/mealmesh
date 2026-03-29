import { create } from 'zustand';
import type { CartItem, Order } from '../types';
import { initialOrders } from '../data/mockData';

interface AppState {
  // Cart
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (menuItemId: string) => void;
  updateQuantity: (menuItemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Orders
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  assignDeliveryPartner: (orderId: string, partnerId: string, partnerName: string) => void;
  
  // Current portal
  currentPortal: 'customer' | 'admin' | 'delivery';
  setPortal: (portal: 'customer' | 'admin' | 'delivery') => void;
}

export const useStore = create<AppState>((set) => ({
  cart: [],
  orders: initialOrders,
  currentPortal: 'customer',
  
  addToCart: (item) => set((state) => {
    const existingIndex = state.cart.findIndex(
      (i) => i.menuItem.id === item.menuItem.id
    );
    if (existingIndex >= 0) {
      const newCart = [...state.cart];
      newCart[existingIndex].quantity += item.quantity;
      return { cart: newCart };
    }
    return { cart: [...state.cart, item] };
  }),
  
  removeFromCart: (menuItemId) => set((state) => ({
    cart: state.cart.filter((item) => item.menuItem.id !== menuItemId)
  })),
  
  updateQuantity: (menuItemId, quantity) => set((state) => {
    if (quantity === 0) {
      return {
        cart: state.cart.filter((item) => item.menuItem.id !== menuItemId)
      };
    }
    return {
      cart: state.cart.map((item) =>
        item.menuItem.id === menuItemId
          ? { ...item, quantity }
          : item
      )
    };
  }),
  
  clearCart: () => set({ cart: [] }),
  
  addOrder: (order) => set((state) => ({
    orders: [order, ...state.orders]
  })),
  
  updateOrderStatus: (orderId, status) => set((state) => ({
    orders: state.orders.map((order) =>
      order.id === orderId ? { ...order, status } : order
    )
  })),
  
  assignDeliveryPartner: (orderId, partnerId, partnerName) => set((state) => ({
    orders: state.orders.map((order) =>
      order.id === orderId
        ? { ...order, deliveryPartnerId: partnerId, deliveryPartnerName: partnerName }
        : order
    )
  })),
  
  setPortal: (portal) => set({ currentPortal: portal })
}));
