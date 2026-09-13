import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';
import { squadMembers } from '../data/squadMembers';

const Squad = ({ selectedSquadId, setSelectedSquadId }) => {
  const currentSquad =
    squadMembers.find((m) => m.id === selectedSquadId) || squadMembers[0];

  return (
    <section id="squad" className="py-12 sm:py-16 bg-zinc-950/60 border-y border-orange-500/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] font-extrabold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>THE CHARACTER UNIVERSE</span>
          </div>

          <p className="text-zinc-400 font-normal text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            One flame, five distinct personalities. Select a character below to inspect stats, lore, and traits.
          </p>
        </div>

        {/* Interactive Character Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {squadMembers.map((member) => {
            const IconComp = member.icon;
            const isSelected = member.id === selectedSquadId;
            return (
              <button
                key={member.id}
                onClick={() => setSelectedSquadId(member.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_20px_rgba(255,87,34,0.35)] scale-105'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 border border-zinc-800'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{member.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Squad Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSquad.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#120E10] backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden grid lg:grid-cols-12 gap-6 items-center"
          >
            {/* Left Column Character Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-lg">
                  <currentSquad.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-widest">
                    {currentSquad.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentSquad.title}
                  </h3>
                </div>
              </div>

              <p className="text-orange-500 font-bold text-xs uppercase tracking-wider">
                {currentSquad.tagline}
              </p>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {currentSquad.description}
              </p>

              {/* Character Quote */}
              <div className="p-3.5 rounded-xl bg-zinc-950/80 border-l-4 border-orange-500 italic text-zinc-300 text-xs font-serif">
                {currentSquad.quote}
              </div>

              {/* Character Stats Breakdown */}
              <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
                {Object.entries(currentSquad.stats).map(([key, val]) => (
                  <div key={key} className="p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                    <p className="text-[9px] text-zinc-500 uppercase tracking-wider">{key}</p>
                    <p className="text-xs sm:text-sm font-bold text-orange-500">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Cream Box displaying Transparent Character Images */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[300px] aspect-square rounded-3xl bg-[#FDF6E9] p-4 flex items-center justify-center shadow-2xl border border-orange-500/20 relative overflow-hidden">
                <img
                  src={currentSquad.image}
                  alt={currentSquad.title}
                  className="w-full h-full object-contain pointer-events-none drop-shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Squad;