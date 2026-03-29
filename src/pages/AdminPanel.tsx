import { useState } from 'react';
import { useStore } from '../lib/store';
import { restaurants, deliveryPartners } from '../data/mockData';
import type { Order } from '../types';
import { 
  LayoutDashboard, ShoppingBag, Users, MapPin, Clock, 
  CheckCircle, MoreVertical, Search, Plus,
  TrendingUp, DollarSign, Package
} from 'lucide-react';
import { motion } from 'framer-motion';

export function AdminPanel() {
  const { orders, updateOrderStatus, assignDeliveryPartner } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'restaurants' | 'delivery'>('overview');
  
  const stats = [
    { label: 'Total Orders', value: orders.length, icon: ShoppingBag, color: 'from-amber-500 to-orange-500' },
    { label: 'Revenue', value: `$${orders.reduce((sum, o) => sum + o.grandTotal, 0).toFixed(0)}`, icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Deliveries', value: orders.filter(o => ['preparing', 'ready', 'picked_up'].includes(o.status)).length, icon: Package, color: 'from-blue-500 to-cyan-500' },
    { label: 'Delivery Partners', value: deliveryPartners.filter(p => p.status === 'available').length, icon: Users, color: 'from-purple-500 to-pink-500' }
  ];
  
  const getStatusColor = (status: Order['status']) => {
    const colors = {
      pending: 'bg-yellow-500/20 text-yellow-400',
      preparing: 'bg-blue-500/20 text-blue-400',
      ready: 'bg-purple-500/20 text-purple-400',
      picked_up: 'bg-orange-500/20 text-orange-400',
      delivered: 'bg-green-500/20 text-green-400',
      cancelled: 'bg-red-500/20 text-red-400'
    };
    return colors[status];
  };
  
  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: LayoutDashboard },
    { id: 'orders' as const, label: 'Orders', icon: ShoppingBag },
    { id: 'restaurants' as const, label: 'Restaurants', icon: MapPin },
    { id: 'delivery' as const, label: 'Delivery Partners', icon: Users }
  ];
  
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-slate-400">Manage your food delivery platform</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white font-semibold hover:from-amber-400 hover:to-orange-400 transition-all">
            <Plus size={18} />
            Add Restaurant
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                    : 'bg-slate-900/50 text-slate-400 hover:text-amber-400 hover:bg-slate-800'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
        
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <TrendingUp size={20} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                    <p className="text-slate-400">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Recent Orders */}
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="p-6 border-b border-slate-800">
                <h2 className="text-xl font-bold text-white">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-slate-400 text-sm">
                      <th className="p-4 font-medium">Order ID</th>
                      <th className="p-4 font-medium">Customer</th>
                      <th className="p-4 font-medium">Restaurant</th>
                      <th className="p-4 font-medium">Total</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="border-t border-slate-800 hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 text-white font-medium">{order.id}</td>
                        <td className="p-4 text-slate-300">{order.customerName}</td>
                        <td className="p-4 text-slate-300">{order.restaurantName}</td>
                        <td className="p-4 text-amber-400 font-semibold">${order.grandTotal.toFixed(2)}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                            <MoreVertical size={18} className="text-slate-400" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                />
              </div>
            </div>
            
            <div className="grid gap-4">
              {orders.map((order) => (
                <motion.div
                  key={order.id}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white">{order.id}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-slate-400">{order.customerName} • {order.customerPhone}</p>
                        <p className="text-slate-500 text-sm">📍 {order.customerAddress}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-400">${order.grandTotal.toFixed(2)}</p>
                        <p className="text-slate-500 text-sm">{order.restaurantName}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-slate-800 pt-4">
                      <p className="text-sm text-slate-400 mb-3">Items:</p>
                      <div className="flex flex-wrap gap-2">
                        {order.items.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300">
                            {item.quantity}x {item.menuItem.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-800">
                      {order.status === 'pending' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'preparing')}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-medium transition-colors"
                        >
                          <Clock size={18} />
                          Start Preparing
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'ready')}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 rounded-xl text-white font-medium transition-colors"
                        >
                          <CheckCircle size={18} />
                          Mark Ready
                        </button>
                      )}
                      {order.status === 'ready' && !order.deliveryPartnerId && (
                        <select
                          onChange={(e) => {
                            const partner = deliveryPartners.find(p => p.id === e.target.value);
                            if (partner) assignDeliveryPartner(order.id, partner.id, partner.name);
                          }}
                          className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500/50"
                        >
                          <option value="">Assign Delivery Partner</option>
                          {deliveryPartners.filter(p => p.status === 'available').map((partner) => (
                            <option key={partner.id} value={partner.id}>{partner.name}</option>
                          ))}
                        </select>
                      )}
                      {order.deliveryPartnerId && (
                        <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl">
                          🚚 {order.deliveryPartnerName}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {activeTab === 'restaurants' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden">
                  <div className="relative h-40">
                    <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-slate-900/80 rounded-lg text-sm text-white">
                      ★ {restaurant.rating}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{restaurant.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">{restaurant.cuisine}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`px-2 py-1 rounded-lg ${restaurant.isOpen ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {restaurant.isOpen ? 'Open' : 'Closed'}
                      </span>
                      <span className="text-slate-400">${restaurant.deliveryFee} delivery</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {activeTab === 'delivery' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid gap-4">
              {deliveryPartners.map((partner) => (
                <div key={partner.id} className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        partner.status === 'available' ? 'bg-green-500/20' :
                        partner.status === 'busy' ? 'bg-orange-500/20' : 'bg-slate-800'
                      }`}>
                        <Users size={24} className={
                          partner.status === 'available' ? 'text-green-400' :
                          partner.status === 'busy' ? 'text-orange-400' : 'text-slate-400'
                        } />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                        <p className="text-slate-400 text-sm">{partner.vehicle} • {partner.vehicleNumber}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        partner.status === 'available' ? 'bg-green-500/20 text-green-400' :
                        partner.status === 'busy' ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-700 text-slate-400'
                      }`}>
                        {partner.status}
                      </span>
                      <p className="text-slate-400 text-sm mt-2">★ {partner.rating} • {partner.completedOrders} orders</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
