import { useState } from 'react';
import { restaurants, menuItems } from '../data/mockData';
import { RestaurantCard } from '../components/RestaurantCard';
import { MenuItemCard } from '../components/MenuItemCard';
import { CartDrawer } from '../components/CartDrawer';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../lib/store';

export function CustomerPortal() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useStore();
  
  const filteredRestaurants = restaurants.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const selectedRestaurantData = restaurants.find(r => r.id === selectedRestaurant);
  const restaurantMenu = menuItems.filter(m => m.restaurantId === selectedRestaurant);
  
  const handleAddToCart = (itemId: string) => {
    const item = menuItems.find(m => m.id === itemId);
    if (item) {
      addToCart({ menuItem: item, quantity: 1 });
    }
  };
  
  if (selectedRestaurant && selectedRestaurantData) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="relative h-64 overflow-hidden">
          <img
            src={selectedRestaurantData.image}
            alt={selectedRestaurantData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          <button
            onClick={() => setSelectedRestaurant(null)}
            className="absolute top-20 left-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-slate-700 hover:border-amber-500/50 transition-all"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">{selectedRestaurantData.name}</h1>
            <p className="text-slate-400 mb-4">{selectedRestaurantData.cuisine}</p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-lg">
                <span className="text-green-400 font-semibold">★ {selectedRestaurantData.rating}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg text-slate-400">
                <span>⏱ {selectedRestaurantData.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg text-slate-400">
                <span>🚚 ${selectedRestaurantData.deliveryFee.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-6">Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
            {restaurantMenu.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAdd={() => handleAddToCart(item.id)}
              />
            ))}
          </div>
        </div>
        
        <CartDrawer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Delicious Food,
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {' '}Delivered Fast
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Order from the best restaurants in your city. Fast delivery, great prices, amazing taste.
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search for restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white font-semibold hover:from-amber-400 hover:to-orange-400 transition-all">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Featured Restaurants */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Restaurants</h2>
            <p className="text-slate-400">Handpicked for you</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all">
            <Filter size={18} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => setSelectedRestaurant(restaurant.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gradient-to-b from-slate-900/50 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose MealMesh?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Lightning Fast',
                description: 'Get your food delivered in 30 minutes or less'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Competitive pricing with no hidden fees'
              },
              {
                icon: '⭐',
                title: 'Top Quality',
                description: 'Only the best restaurants on our platform'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 text-center"
              >
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <CartDrawer />
    </div>
  );
}
