import { Zap } from 'lucide-react';

const steps = [
  {
    step: '1',
    title: 'Create Solana Wallet',
    description: 'Download Phantom, Solflare, or Backpack wallet from the app store or browser extension store.',
  },
  {
    step: '2',
    title: 'Acquire SOL',
    description: 'Buy SOL on Coinbase, Binance, or Kraken and transfer it to your newly created wallet.',
  },
  {
    step: '3',
    title: 'Connect & Swap',
    description: 'Visit Jupiter or Raydium, paste the $FREMBER contract address, and swap your SOL.',
  },
  {
    step: '4',
    title: 'Hold & Vibe',
    description: 'Welcome to Ember Squad! Join our official Telegram and stay lit together.',
  },
];

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-12 sm:py-16 bg-zinc-950/80 border-b border-orange-500/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[11px] font-extrabold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>EASY ONBOARDING</span>
          </div>

          {/* Title sized identically to Tokenomics */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            HOW TO BUY $FREMBER
          </h2>

          <p className="text-zinc-400 font-normal text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Follow these simple steps to join the Ember Squad on Solana.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#120E10] backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-start relative overflow-hidden"
            >
              {/* Step Number Badge */}
              <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-black text-sm flex items-center justify-center mb-4 shadow-md shadow-orange-500/20">
                {item.step}
              </div>

              <h3 className="text-lg font-extrabold text-white mb-2 tracking-tight">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}