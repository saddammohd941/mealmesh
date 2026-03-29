import { useStore } from './lib/store';
import { PortalSelector } from './components/PortalSelector';
import { CustomerHeader } from './components/CustomerHeader';
import { CustomerPortal } from './pages/CustomerPortal';
import { AdminPanel } from './pages/AdminPanel';
import { DeliveryPortal } from './pages/DeliveryPortal';

function App() {
  const { currentPortal } = useStore();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PortalSelector />
      
      {currentPortal === 'customer' && (
        <>
          <CustomerHeader />
          <CustomerPortal />
        </>
      )}
      
      {currentPortal === 'admin' && <AdminPanel />}
      {currentPortal === 'delivery' && <DeliveryPortal />}
    </div>
  );
}

export default App;
