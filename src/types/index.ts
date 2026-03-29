export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  featured: boolean;
  isOpen: boolean;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  vegetarian: boolean;
  popular: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  restaurantId: string;
  restaurantName: string;
  items: CartItem[];
  total: number;
  deliveryFee: number;
  grandTotal: number;
  status: 'pending' | 'preparing' | 'ready' | 'picked_up' | 'delivered' | 'cancelled';
  deliveryPartnerId?: string;
  deliveryPartnerName?: string;
  createdAt: Date;
  estimatedDelivery?: string;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  phone: string;
  vehicle: string;
  vehicleNumber: string;
  status: 'available' | 'busy' | 'offline';
  completedOrders: number;
  rating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}
