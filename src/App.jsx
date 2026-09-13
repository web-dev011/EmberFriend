import { useState } from 'react';
import EmberCanvas from './components/EmberCanvas';
import Toast from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Squad from './components/Squad';
// import SwapSimulator from './components/SwapSimulator';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [selectedSquadId, setSelectedSquadId] = useState('base');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hypeLevel, setHypeLevel] = useState(88);

  // Swap Simulator State
  // const [solAmount, setSolAmount] = useState('1.5');
  // const [fremberPrice] = useState(0.000042); // 1 SOL = ~23,809 $FREMBER

  const contractAddress = "G2YBMMjn3emVgzLFFFJ9JxCdWgAdU3JLYZRVu4VST4Bx";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#0A0708] text-zinc-100 font-sans antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      {/* Dynamic Ember Canvas Background Layer */}
      <EmberCanvas />

      {/* Cyber Glowing Ambient Background Gradients */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-600/20 via-amber-600/10 to-transparent blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] pointer-events-none z-0"></div>

      {/* Toast Notification for CA Copy */}
      <Toast copied={copied} />

      {/* Navigation */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleCopy={handleCopy}
        contractAddress={contractAddress}
      />

      {/* Main Sections */}
      <Hero
        handleCopy={handleCopy}
        copied={copied}
        contractAddress={contractAddress}
      />

      <Squad
        selectedSquadId={selectedSquadId}
        setSelectedSquadId={setSelectedSquadId}
      />

      <Tokenomics
        hypeLevel={hypeLevel}
        setHypeLevel={setHypeLevel}
      />

      <HowToBuy />

      {/* Footer */}
      <Footer />
    </div>
  );
}