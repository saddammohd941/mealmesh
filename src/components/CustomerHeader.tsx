import { ShoppingCart, Search, User } from 'lucide-react';
import { useStore } from '../lib/store';
import { motion, AnimatePresence } from 'framer-motion';

export function CustomerHeader() {
  const { cart } = useStore();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <span className="text-xl">🍽️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                MealMesh
              </h1>
              <p className="text-xs text-slate-500">Food delivered fast</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-slate-900/50 rounded-xl px-4 py-2 border border-slate-800">
              <Search size={18} className="text-slate-500 mr-2" />
              <input
                type="text"
                placeholder="Search restaurants..."
                className="bg-transparent outline-none text-sm text-slate-300 w-48"
              />
            </div>
            
            <motion.button
              className="relative p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={20} className="text-slate-400" />
            </motion.button>
            
            <motion.button
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={20} className="text-white" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
