import { Link2, Coins, ShieldCheck, Flame, Sparkles } from 'lucide-react';

const statsData = [
  {
    title: 'TOTAL SUPPLY',
    value: '1,000,000,000',
    subtext: '1 Billion $FREMBER',
    icon: Coins,
    accentColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    title: 'BUY / SELL TAX',
    value: '0% / 0%',
    subtext: 'Zero Tax Forever',
    icon: ShieldCheck,
    accentColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    title: 'LIQUIDITY POOL',
    value: '100% BURNED',
    subtext: 'Permanently Locked',
    icon: Flame,
    accentColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    title: 'CONTRACT STATUS',
    value: 'RENOUNCED',
    subtext: '100% Decentralized',
    icon: Sparkles,
    accentColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
  },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-12 sm:py-16 bg-zinc-950/80 border-b border-orange-500/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[11px] font-extrabold uppercase tracking-widest">
            <Link2 className="w-3.5 h-3.5" />
            <span>TRANSPARENT ARCHITECTURE</span>
          </div>

          {/* Reduced title size from 5xl/6xl to 3xl/4xl/5xl */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight">
            TOKENOMICS & STATS
          </h2>

          <p className="text-zinc-400 font-normal text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            100% fair launch, zero tax tricks, burned liquidity pool, and renounced contract.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-[#120E10] backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-center relative overflow-hidden"
              >
                {/* Icon Container */}
                <div className={`p-3 rounded-xl ${stat.bgColor} mb-4 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.accentColor}`} />
                </div>

                <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  {stat.title}
                </p>

                <p className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  {stat.value}
                </p>

                <p className={`text-xs font-mono font-bold ${stat.accentColor}`}>
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}