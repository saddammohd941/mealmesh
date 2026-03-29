import { useStore } from '../lib/store';
import type { Order } from '../types';
import { 
  Package, MapPin, Clock, Navigation, CheckCircle, 
  Phone, User, LogOut, Bell
} from 'lucide-react';
import { motion } from 'framer-motion';

export function DeliveryPortal() {
  const { orders, updateOrderStatus } = useStore();
  
  // Simulate logged-in delivery partner
  const currentPartner = {
    id: '1',
    name: 'Rahul Sharma',
    status: 'available' as const,
    completedOrders: 156,
    rating: 4.8,
    earnings: 2340.50
  };
  
  // Filter orders assigned to this partner
  const myOrders = orders.filter(o => o.deliveryPartnerId === currentPartner.id);
  const availableOrders = orders.filter(o => o.status === 'ready' && !o.deliveryPartnerId);
  
  const activeOrder = myOrders.find(o => ['preparing', 'ready', 'picked_up'].includes(o.status));
  const completedOrders = myOrders.filter(o => o.status === 'delivered');
  
  const handleAcceptOrder = (order: Order) => {
    updateOrderStatus(order.id, 'picked_up');
  };
  
  const handleUpdateStatus = (orderId: string, status: Order['status']) => {
    updateOrderStatus(orderId, status);
  };
  
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <User size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{currentPartner.name}</h1>
              <div className="flex items-center gap-3 text-sm">
                <span className={`px-2 py-1 rounded-lg ${
                  activeOrder ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {activeOrder ? 'On Delivery' : 'Available'}
                </span>
                <span className="text-slate-400">★ {currentPartner.rating}</span>
                <span className="text-slate-400">${currentPartner.earnings.toFixed(2)} earned</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                {availableOrders.length}
              </span>
            </button>
            <button className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-red-500/20 hover:border-red-500/30">
              <LogOut size={20} className="text-slate-400" />
            </button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Package size={24} className="text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{currentPartner.completedOrders}</p>
                <p className="text-slate-400 text-sm">Completed Today</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Clock size={24} className="text-amber-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{activeOrder ? '1' : '0'}</p>
                <p className="text-slate-400 text-sm">Active Delivery</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">${currentPartner.earnings.toFixed(0)}</p>
                <p className="text-slate-400 text-sm">Today's Earnings</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Active Order */}
        {activeOrder && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/30 overflow-hidden"
          >
            <div className="p-6 border-b border-amber-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center animate-pulse">
                    <Package size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Active Delivery</h2>
                    <p className="text-amber-400">Order {activeOrder.id}</p>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                  activeOrder.status === 'picked_up' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {activeOrder.status === 'picked_up' ? 'On the way' : 'Preparing'}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              {/* Delivery Route */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-orange-500" />
                  <div className="w-0.5 h-16 bg-slate-700" />
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm">Pickup</p>
                    <p className="text-white font-semibold">{activeOrder.restaurantName}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Drop-off</p>
                    <p className="text-white font-semibold">{activeOrder.customerName}</p>
                    <p className="text-slate-500 text-sm">{activeOrder.customerAddress}</p>
                  </div>
                </div>
                <button className="p-3 rounded-xl bg-blue-500 hover:bg-blue-400 transition-colors">
                  <Navigation size={24} className="text-white" />
                </button>
              </div>
              
              {/* Order Details */}
              <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
                <p className="text-slate-400 text-sm mb-2">Order Items</p>
                <div className="flex flex-wrap gap-2">
                  {activeOrder.items.map((item: any, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">
                      {item.quantity}x {item.menuItem.name}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-white transition-colors">
                  <Phone size={20} />
                  Call Customer
                </button>
                {activeOrder.status === 'picked_up' ? (
                  <button
                    onClick={() => handleUpdateStatus(activeOrder.id, 'delivered')}
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl text-white font-semibold transition-all"
                  >
                    <CheckCircle size={20} />
                    Mark Delivered
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateStatus(activeOrder.id, 'picked_up')}
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-xl text-white font-semibold transition-all"
                  >
                    <Package size={20} />
                    Picked Up
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Available Orders */}
        {availableOrders.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              New Orders Available
            </h2>
            <div className="space-y-4">
              {availableOrders.map((order: Order) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{order.id}</h3>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                          Ready for pickup
                        </span>
                      </div>
                      <p className="text-slate-400">{order.restaurantName}</p>
                      <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                        <MapPin size={16} />
                        <span>{order.customerAddress}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber-400">${(order.grandTotal * 0.15).toFixed(2)}</p>
                      <p className="text-slate-500 text-sm">Your earning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div className="flex flex-wrap gap-2">
                      {order.items.slice(0, 3).map((item: any, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-slate-800 rounded-lg text-xs text-slate-400">
                          {item.quantity}x {item.menuItem.name}
                        </span>
                      ))}
                      {order.items.length > 3 && (
                        <span className="px-2 py-1 bg-slate-800 rounded-lg text-xs text-slate-400">
                          +{order.items.length - 3} more
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAcceptOrder(order)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-xl text-white font-semibold transition-all"
                    >
                      Accept Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Completed Orders */}
        {completedOrders.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Completed Deliveries</h2>
            <div className="space-y-4">
              {completedOrders.map((order: Order) => (
                <div key={order.id} className="bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-6 opacity-60">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{order.id}</h3>
                      <p className="text-slate-400">{order.restaurantName} → {order.customerName}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        Delivered
                      </span>
                      <p className="text-amber-400 font-semibold mt-1">${(order.grandTotal * 0.15).toFixed(2)} earned</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
