import type { Restaurant, MenuItem, Order, DeliveryPartner } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Spice Garden',
    cuisine: 'North Indian',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
    featured: true,
    isOpen: true
  },
  {
    id: '2',
    name: 'Dragon Wok',
    cuisine: 'Chinese',
    rating: 4.3,
    deliveryTime: '30-40 min',
    deliveryFee: 1.99,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    featured: true,
    isOpen: true
  },
  {
    id: '3',
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '20-30 min',
    deliveryFee: 3.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
    featured: true,
    isOpen: true
  },
  {
    id: '4',
    name: 'Burger Barn',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: '15-25 min',
    deliveryFee: 2.49,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    featured: false,
    isOpen: true
  },
  {
    id: '5',
    name: 'Green Bowl',
    cuisine: 'Healthy',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    featured: false,
    isOpen: true
  },
  {
    id: '6',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.4,
    deliveryTime: '25-35 min',
    deliveryFee: 2.49,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    featured: false,
    isOpen: false
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    restaurantId: '1',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400',
    category: 'Main Course',
    vegetarian: false,
    popular: true
  },
  {
    id: '2',
    restaurantId: '1',
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese in spiced tomato gravy',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400',
    category: 'Main Course',
    vegetarian: true,
    popular: true
  },
  {
    id: '3',
    restaurantId: '1',
    name: 'Garlic Naan',
    description: 'Soft Indian bread with garlic butter',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400',
    category: 'Breads',
    vegetarian: true,
    popular: false
  },
  {
    id: '4',
    restaurantId: '1',
    name: 'Biryani',
    description: 'Aromatic basmati rice with spices and your choice of meat',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
    category: 'Main Course',
    vegetarian: false,
    popular: true
  },
  {
    id: '5',
    restaurantId: '2',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fry with peanuts and vegetables',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400',
    category: 'Main Course',
    vegetarian: false,
    popular: true
  },
  {
    id: '6',
    restaurantId: '2',
    name: 'Vegetable Fried Rice',
    description: 'Wok-fried rice with mixed vegetables',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400',
    category: 'Rice & Noodles',
    vegetarian: true,
    popular: false
  },
  {
    id: '7',
    restaurantId: '3',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce and mozzarella',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    category: 'Pizza',
    vegetarian: true,
    popular: true
  },
  {
    id: '8',
    restaurantId: '3',
    name: 'Pepperoni Pizza',
    description: 'Loaded with pepperoni and cheese',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400',
    category: 'Pizza',
    vegetarian: false,
    popular: true
  },
  {
    id: '9',
    restaurantId: '4',
    name: 'Classic Burger',
    description: 'Beef patty with lettuce, tomato, and special sauce',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    category: 'Burgers',
    vegetarian: false,
    popular: true
  },
  {
    id: '10',
    restaurantId: '4',
    name: 'Veggie Burger',
    description: 'Plant-based patty with fresh vegetables',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400',
    category: 'Burgers',
    vegetarian: true,
    popular: false
  },
  {
    id: '11',
    restaurantId: '5',
    name: 'Buddha Bowl',
    description: 'Quinoa, roasted vegetables, and tahini dressing',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    category: 'Bowls',
    vegetarian: true,
    popular: true
  },
  {
    id: '12',
    restaurantId: '6',
    name: 'Beef Tacos',
    description: 'Three tacos with seasoned beef and fresh toppings',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
    category: 'Tacos',
    vegetarian: false,
    popular: true
  }
];

export const deliveryPartners: DeliveryPartner[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    vehicle: 'Bike',
    vehicleNumber: 'MH 01 AB 1234',
    status: 'available',
    completedOrders: 156,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Priya Patel',
    phone: '+91 98765 43211',
    vehicle: 'Scooter',
    vehicleNumber: 'MH 02 CD 5678',
    status: 'busy',
    completedOrders: 203,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Amit Kumar',
    phone: '+91 98765 43212',
    vehicle: 'Bike',
    vehicleNumber: 'MH 03 EF 9012',
    status: 'available',
    completedOrders: 89,
    rating: 4.6
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    phone: '+91 98765 43213',
    vehicle: 'Bike',
    vehicleNumber: 'MH 04 GH 3456',
    status: 'offline',
    completedOrders: 312,
    rating: 4.7
  }
];

export const initialOrders: Order[] = [
  {
    id: 'ORD-001',
    customerId: 'CUST-001',
    customerName: 'John Doe',
    customerPhone: '+91 98765 11111',
    customerAddress: '123 Main Street, Mumbai',
    restaurantId: '1',
    restaurantName: 'Spice Garden',
    items: [
      { menuItem: menuItems[0], quantity: 2 },
      { menuItem: menuItems[2], quantity: 3 }
    ],
    total: 43.95,
    deliveryFee: 2.99,
    grandTotal: 46.94,
    status: 'preparing',
    deliveryPartnerId: '2',
    deliveryPartnerName: 'Priya Patel',
    createdAt: new Date(Date.now() - 30 * 60000),
    estimatedDelivery: '25 min'
  },
  {
    id: 'ORD-002',
    customerId: 'CUST-002',
    customerName: 'Jane Smith',
    customerPhone: '+91 98765 22222',
    customerAddress: '456 Park Avenue, Delhi',
    restaurantId: '3',
    restaurantName: 'Pizza Paradise',
    items: [
      { menuItem: menuItems[7], quantity: 1 }
    ],
    total: 14.99,
    deliveryFee: 3.99,
    grandTotal: 18.98,
    status: 'pending',
    createdAt: new Date(Date.now() - 15 * 60000),
    estimatedDelivery: '30 min'
  },
  {
    id: 'ORD-003',
    customerId: 'CUST-003',
    customerName: 'Mike Johnson',
    customerPhone: '+91 98765 33333',
    customerAddress: '789 Oak Road, Bangalore',
    restaurantId: '2',
    restaurantName: 'Dragon Wok',
    items: [
      { menuItem: menuItems[4], quantity: 1 },
      { menuItem: menuItems[5], quantity: 2 }
    ],
    total: 29.97,
    deliveryFee: 1.99,
    grandTotal: 31.96,
    status: 'picked_up',
    deliveryPartnerId: '1',
    deliveryPartnerName: 'Rahul Sharma',
    createdAt: new Date(Date.now() - 45 * 60000),
    estimatedDelivery: '10 min'
  }
];
