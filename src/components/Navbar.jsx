import { Menu, Bell, Search, Settings, User } from "lucide-react";

function Navbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onMenu} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 text-white/80">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <div>
              <div className="text-white font-semibold leading-tight">FinBoard</div>
              <div className="text-xs text-white/60">Modern fintech dashboard</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 w-full max-w-md">
          <Search size={18} className="text-white/50" />
          <input
            placeholder="Search transactions, cards, accounts..."
            className="bg-transparent focus:outline-none text-white placeholder:text-white/50 w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 text-white/80">
            <Bell size={18} />
          </button>
          <button className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 text-white/80">
            <Settings size={18} />
          </button>
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-white/80">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
