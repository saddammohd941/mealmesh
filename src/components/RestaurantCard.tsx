import type { Restaurant } from '../types';
import { Star, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group bg-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 transition-all cursor-pointer"
      whileHover={{ y: -4, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        {restaurant.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-semibold text-white">
            Featured
          </div>
        )}
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="px-4 py-2 bg-slate-900/90 rounded-xl text-white font-medium">
              Currently Closed
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
              {restaurant.name}
            </h3>
            <p className="text-sm text-slate-400">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-lg">
            <Star size={14} className="fill-green-400 text-green-400" />
            <span className="text-sm font-semibold text-green-400">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-slate-400">
            <Clock size={16} className="text-amber-400" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <MapPin size={16} className="text-amber-400" />
            <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
