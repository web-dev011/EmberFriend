import { Copy, Menu, X } from 'lucide-react';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, handleCopy, contractAddress }) {
  return (
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
            {contractAddress.slice(0, 4)}...{contractAddress.slice(-4)}
            <Copy className="w-3 h-3 text-zinc-400" />
          </button>

          <a
  href={`https://jup.ag/swap/SOL-${contractAddress}`}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:opacity-90 transition-opacity"
>
  Buy $FREMBER
</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
}