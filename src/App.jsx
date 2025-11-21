import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero3D from './components/Hero3D';
import Stats from './components/Stats';
import Transactions from './components/Transactions';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* subtle radial background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(600px_circle_at_80%_0%,rgba(59,130,246,0.15),transparent_60%)]" />

      <Navbar />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          <Sidebar />

          <div className="flex-1 flex flex-col gap-6">
            <Hero3D />

            <Stats />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white/80 font-medium">Cards</div>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-white/80">Manage</button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10">
                    <div className="text-white/60 text-sm">Visa •••• 2450</div>
                    <div className="mt-6 text-3xl font-semibold">$8,420</div>
                    <div className="mt-2 text-white/60 text-sm">Available balance</div>
                  </div>
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10">
                    <div className="text-white/60 text-sm">Mastercard •••• 3112</div>
                    <div className="mt-6 text-3xl font-semibold">$3,120</div>
                    <div className="mt-2 text-white/60 text-sm">Available balance</div>
                  </div>
                </div>
              </div>

              <Transactions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
