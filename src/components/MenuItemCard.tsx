import type { MenuItem } from '../types';
import { Plus, Leaf, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd: () => void;
}

export function MenuItemCard({ item, onAdd }: MenuItemCardProps) {
  return (
    <motion.div
      className="bg-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/30 transition-all"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {item.vegetarian && (
            <div className="px-2 py-1 bg-green-500/90 rounded-lg flex items-center gap-1">
              <Leaf size={12} className="text-white" />
              <span className="text-xs font-semibold text-white">Veg</span>
            </div>
          )}
          {item.popular && (
            <div className="px-2 py-1 bg-orange-500/90 rounded-lg flex items-center gap-1">
              <Flame size={12} className="text-white" />
              <span className="text-xs font-semibold text-white">Popular</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-bold text-white">{item.name}</h3>
            <p className="text-xs text-slate-400 line-clamp-2 mt-1">{item.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-amber-400">${item.price.toFixed(2)}</span>
          <motion.button
            onClick={onAdd}
            className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus size={20} className="text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
