import { Send, TrendingUp } from 'lucide-react';

export default function Footer({ contractAddress }) {
  // Fallback address if contractAddress prop is not yet provided
  const targetAddress = contractAddress || 'G2YBMMjn3emVgzLFFFJ9JxCdWgAdU3JLYZRVu4VST4Bx';

  return (
    <footer className="py-10 bg-zinc-950 border-t border-orange-500/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF6E9] p-1.5 flex items-center justify-center shadow-md border border-orange-500/20 shrink-0">
              <img
                src="/RzfY1W20_400x400.jpg"
                alt="Ember Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-black text-white tracking-tight uppercase">
                EMBER FRIENDS
              </h3>
              <p className="text-[10px] font-mono font-bold text-orange-500 tracking-wider uppercase">
                $FREMBER • SAME FLAME. DIFFERENT STORIES.
              </p>
            </div>
          </div>

          {/* Social Links matching Hero Styling */}
          <div className="flex items-center gap-3">
            {/* Twitter / X Link */}
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

            {/* Telegram Link */}
            <a
              href="https://t.me/fremberember"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-orange-500 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>

            {/* Dynamic DexScreener Link */}
            <a
              href={`https://dexscreener.com/solana/${targetAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-orange-500 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="DexScreener"
            >
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-6 text-center space-y-2">
          <p className="text-[11px] font-mono text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold text-zinc-400">DISCLAIMER:</span> $FREMBER is a memecoin created for entertainment and community purposes with no intrinsic financial value or expectation of financial returns. Cryptocurrencies carry risk. Always do your own research (DYOR).
          </p>
          <p className="text-[11px] font-mono text-zinc-600">
            2026 Ember Friends ($FREMBER). All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}