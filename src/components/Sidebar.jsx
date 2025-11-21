import { Home, CreditCard, Wallet, BarChart2, Receipt, Settings, LogOut } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm cursor-pointer transition-colors ${active ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
    <Icon size={18} />
    <span>{label}</span>
  </div>
);

function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 flex-col gap-2 p-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <div className="text-xs uppercase tracking-wide text-white/60 mb-2">Overview</div>
        <div className="flex flex-col gap-1">
          <NavItem icon={Home} label="Dashboard" active />
          <NavItem icon={CreditCard} label="Cards" />
          <NavItem icon={Wallet} label="Accounts" />
          <NavItem icon={BarChart2} label="Analytics" />
          <NavItem icon={Receipt} label="Invoices" />
        </div>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mt-auto">
        <div className="flex items-center justify-between">
          <div className="text-white/70 text-sm">Settings</div>
          <Settings size={18} className="text-white/60" />
        </div>
        <button className="mt-3 w-full px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white/80 flex items-center justify-center gap-2">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
