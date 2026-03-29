import { motion } from 'framer-motion';
import { useStore } from '../lib/store';
import { UtensilsCrossed, LayoutDashboard, Truck } from 'lucide-react';

export function PortalSelector() {
  const { currentPortal, setPortal } = useStore();
  
  const portals = [
    { id: 'customer' as const, label: 'Customer', icon: UtensilsCrossed },
    { id: 'admin' as const, label: 'Admin', icon: LayoutDashboard },
    { id: 'delivery' as const, label: 'Delivery', icon: Truck }
  ];
  
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-2 flex gap-2">
        {portals.map((portal) => {
          const Icon = portal.icon;
          const isActive = currentPortal === portal.id;
          return (
            <motion.button
              key={portal.id}
              onClick={() => setPortal(portal.id)}
              className={`relative px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'text-slate-400 hover:text-amber-400 hover:bg-amber-500/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{portal.label}</span>
              {isActive && (
                <motion.div
                  layoutId="portal-indicator"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
