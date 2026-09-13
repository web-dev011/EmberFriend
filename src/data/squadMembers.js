import { Flame, TrendingUp, Coffee, Hammer, Rocket } from 'lucide-react';

export const squadMembers = [
  {
    id: 'base',
    title: 'Base Emberfriend',
    badge: 'OG FOUNDER',
    tagline: 'CLEAN • ICONIC • TIMELESS',
    icon: Flame,
    image: '/base.png', // <-- INSERT IMAGE PATH HERE
    description: 'The glowing cornerstone of the squad. Radiates pure positive energy, leading the movement with timeless warmth.',
    quote: '"Same flame, endless horizons. Keep it lit."',
    stats: {
      power: '99/100',
      vibe: 'Maximum',
      defense: 'Diamond',
    },
  },
  {
    id: 'trader',
    title: 'Trader Ember',
    badge: 'CHART SURFER',
    tagline: 'ANALYSIS • LEVERAGE • CONVICTION',
    icon: TrendingUp,
    image: '/trader.png', // <-- INSERT IMAGE PATH HERE
    description: 'Lives on 1-minute charts and spots breakouts before they happen. Always locked into live candle action.',
    quote: '"Trends change, conviction remains."',
    stats: {
      power: '92/100',
      vibe: 'Calculated',
      defense: 'High',
    },
  },
  {
    id: 'chill',
    title: 'Chill Ember',
    badge: 'ZEN HOLDER',
    tagline: 'UNSHAKEABLE • RELAXED • GROUNDED',
    icon: Coffee,
    image: '/chill.png', // <-- INSERT IMAGE PATH HERE
    description: 'Never bothered by market noise or short-term volatility. Keeps the squad cool through every dip.',
    quote: '"Sip coffee, hold strong, let time do the work."',
    stats: {
      power: '88/100',
      vibe: 'Ultra Zen',
      defense: 'Unbreakable',
    },
  },
  {
    id: 'builder',
    title: 'Builder Ember',
    badge: 'ARCHITECT',
    tagline: 'SOLANA DEVS • CODE • INFRASTRUCTURE',
    icon: Hammer,
    image: '/builder.png', // <-- INSERT IMAGE PATH HERE
    description: 'Constantly shipping features, refining smart contracts, and optimizing code for the whole ecosystem.',
    quote: '"Talk is cheap, show me the commits."',
    stats: {
      power: '95/100',
      vibe: 'Focused',
      defense: 'Solid',
    },
  },
  {
    id: 'degen',
    title: 'Degen Ember',
    badge: 'RISK TAKER',
    tagline: 'SPEED • MOMENTUM • MOONSHOTS',
    icon: Rocket,
    image: '/degenerate.png', // <-- INSERT IMAGE PATH HERE
    description: 'First into new liquidity pools and always hunting the next 100x setup across the chain.',
    quote: '"Full send or nothing at all."',
    stats: {
      power: '97/100',
      vibe: 'Wild',
      defense: 'Volatile',
    },
  },
];