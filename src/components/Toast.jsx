import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Toast = ({ copied }) => {
  return (
    <AnimatePresence>
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 bg-zinc-900/90 backdrop-blur-xl border border-orange-500/50 shadow-[0_0_30px_rgba(255,87,34,0.4)] text-white px-6 py-4 rounded-2xl flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-bold shadow-md">
            <Check className="w-5 h-5 stroke-[3]" />
          </div>
          <div>
            <p className="font-extrabold text-sm text-orange-400">
              CA Copied to Clipboard!
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              Ready to swap on Raydium & Jupiter
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;