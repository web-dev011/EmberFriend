import { Copy, Check, Menu, X } from 'lucide-react';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, handleCopy, copied, contractAddress }) {
  const targetAddress = contractAddress || 'G2YBMMjn3emVgzLFFFJ9JxCdWgAdU3JLYZRVu4VST4Bx';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0708]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
          
          {/* Logo Image & Titles */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img 
              src="/logo.png" 
              alt="Ember Friend Logo" 
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent leading-none">
                EMBER FRIEND
              </span>
              <span className="text-[10px] font-normal text-zinc-400 tracking-wide mt-0.5">
                $FREMBER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links & Action Items */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#squad" className="hover:text-orange-500 transition-colors">Ember Squad</a>
            <a href="#tokenomics" className="hover:text-orange-500 transition-colors">Tokenomics</a>
            <a href="#how-to-buy" className="hover:text-orange-500 transition-colors">How to Buy</a>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 hover:border-orange-500/50 transition-colors"
            >
              {targetAddress.slice(0, 4)}...{targetAddress.slice(-4)}
              <Copy className="w-3 h-3 text-zinc-400" />
            </button>

            <a
              href={`https://jup.ag/swap/SOL-${targetAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:opacity-90 transition-opacity"
            >
              Buy $FREMBER
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Background */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Slide-out Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[75%] max-w-xs z-40 bg-[#0A0708]/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Navigation Links with added top padding & vertical gap */}
        <div className="flex flex-col gap-7">
          <a
            href="#squad"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-200 hover:text-orange-500 transition-colors"
          >
            Ember Squad
          </a>
          <a
            href="#tokenomics"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-200 hover:text-orange-500 transition-colors"
          >
            Tokenomics
          </a>
          <a
            href="#how-to-buy"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-zinc-200 hover:text-orange-500 transition-colors"
          >
            How to Buy
          </a>

          <div className="h-px bg-white/10 my-2" />

          {/* Mobile Copy CA - Orange Gradient Pill Button */}
          <button
            onClick={() => {
              handleCopy();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
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

          {/* Buy $FREMBER Button - Directly below COPY CA */}
          <a
            href={`https://jup.ag/swap/SOL-${targetAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-3 text-center rounded-2xl bg-zinc-900 border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 active:scale-95 transition-all"
          >
            Buy $FREMBER
          </a>
        </div>
      </div>
    </>
  );
}