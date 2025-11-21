import Spline from '@splinetool/react-spline';

function Hero3D() {
  return (
    <section className="relative h-[520px] sm:h-[560px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-950/80 pointer-events-none" />
      <div className="relative h-full p-6 sm:p-10 flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Real-time insights • Glassmorphic • Fintech ready
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Modern finance dashboard built for clarity
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            A minimalist, 3D-enhanced workspace for tracking cards, balances and transactions with style.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/25">
              Get Started
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white/80">
              Live demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero3D;
