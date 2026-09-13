import { ArrowRightLeft, Flame, ExternalLink } from 'lucide-react';

const SwapSimulator = ({ solAmount, setSolAmount, fremberPrice }) => {
  const fremberAmount = (
    parseFloat(solAmount || 0) / fremberPrice
  ).toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <section id="swap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>REAL-TIME ESTIMATOR</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              DEX SWAP SIMULATOR
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Test your prospective $FREMBER token bag size before making the transaction on Raydium or Jupiter.
            </p>
            <div className="space-y-4 pt-4 font-mono text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <span className="text-zinc-300">Enter your desired SOL investment amount.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <span className="text-zinc-300">View live estimated $FREMBER calculation.</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <span className="text-zinc-300">One click redirect directly to Raydium swap pool.</span>
              </div>
            </div>
          </div>

          {/* Swap Card Widget */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-900/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-orange-500/30 shadow-2xl space-y-6 max-w-md mx-auto relative">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-extrabold text-lg text-white">Quick Swap</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  Slippage: Auto 0.5%
                </span>
              </div>

              {/* You Pay Box */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-zinc-500 uppercase">
                  <span>You Pay</span>
                  <span>Balance: ~SOL</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={solAmount}
                    onChange={(e) => setSolAmount(e.target.value)}
                    placeholder="1.0"
                    className="w-full bg-transparent text-2xl font-black text-white focus:outline-none font-mono"
                  />
                  <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-700 font-bold text-sm shrink-0">
                    <span className="text-amber-400 font-bold">@</span>
                    <span>SOL</span>
                  </div>
                </div>
              </div>

              {/* Arrow Divider */}
              <div className="flex justify-center -my-3">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-2.5 rounded-full shadow-lg border-2 border-zinc-900">
                  <ArrowRightLeft className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* You Receive Box */}
              <div className="bg-orange-500/10 p-4 rounded-2xl border border-orange-500/30 space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-orange-400 uppercase truncate">
                  <span>You Receive (Est.)</span>
                  <span>Rate: ~23.8k / SOL</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-black text-amber-300 font-mono truncate">
                    {fremberAmount}
                  </span>
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-xl font-bold text-xs shrink-0 shadow-md uppercase">
                    <span></span>
                    <span>FREMBER</span>
                  </div>
                </div>
              </div>

              <a
                href="https://raydium.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:opacity-95 text-white font-black text-sm uppercase tracking-wider py-4 rounded-2xl shadow-[0_0_25px_rgba(255,87,34,0.4)] transition-all hover:scale-[1.02]"
              >
                <span>Execute Swap on Raydium</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapSimulator;