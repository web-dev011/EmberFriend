import { Copy, Check, TrendingUp, Send } from 'lucide-react';

export default function Hero({ handleCopy, copied, contractAddress }) {
  return (
    <section className="relative h-screen w-full pt-16 pb-6 flex items-center overflow-hidden">
      {/* Increased horizontal padding: px-6 sm:px-10 lg:px-16 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[0.92]">
            SAME FLAME. <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              DIFFERENT STORIES.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
            The most resilient, fiery community on Solana. Built for diamond holders, chart readers, chillers, and devs. Join the <span className="text-orange-500 font-bold">$FREMBER</span> universe today.
          </p>

          {/* Contract Address Pill Bar */}
          <div className="mt-6 w-full max-w-xl p-2 rounded-2xl bg-zinc-950/80 border border-orange-500/20 flex items-center justify-between gap-3">
            <span className="px-4 font-mono text-xs sm:text-sm text-zinc-300 truncate">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY CA</span>
                </>
              )}
            </button>
          </div>

          {/* Action Buttons Row */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                  href={`https://jup.ag/swap/SOL-${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white font-black text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-orange-500/30 hover:opacity-95 transition-opacity"
                >
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  BUY ON JUPITER
                </a>

            <a
              href="https://dexscreener.com/solana/G2YBMMjn3emVgzLFFFJ9JxCdWgAdU3JLYZRVu4VST4Bx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-white font-bold text-xs sm:text-sm hover:bg-zinc-800 transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              DexScreener
            </a>

            <a
              href="https://t.me/fremberember"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-orange-500 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/frembertoken?s=20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-orange-500 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md p-7 sm:p-9 rounded-3xl bg-[#120E10] border border-white/10 shadow-2xl flex flex-col items-center text-center">
            
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-b from-orange-500 to-amber-500 shadow-2xl shadow-orange-500/20 my-3 overflow-hidden">
              <img
                src="/RzfY1W20_400x400.jpg"
                alt="Ember Friend Avatar"
                className="w-full h-full object-cover rounded-full bg-zinc-950"
              />
            </div>

            <h2 className="text-3xl font-bold text-white tracking-wide mt-3">
              Ember Friend
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium">
              Headphones On • Sunglasses Ready • Pure Conviction
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}