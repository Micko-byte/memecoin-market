
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Sample data for the price ticker
const tickerData = [
  { id: 1, name: 'DOGE', price: '$0.1375', change: '+2.45%', isPositive: true },
  { id: 2, name: 'SHIB', price: '$0.00002632', change: '+3.76%', isPositive: true },
  { id: 3, name: 'FLOKI', price: '$0.00017231', change: '-1.24%', isPositive: false },
  { id: 4, name: 'PEPE', price: '$0.00000142', change: '+15.62%', isPositive: true },
  { id: 5, name: 'BONK', price: '$0.00002752', change: '+8.14%', isPositive: true },
  { id: 6, name: 'WIF', price: '$0.22451', change: '-2.35%', isPositive: false },
  { id: 7, name: 'MEME', price: '$0.03475', change: '+5.71%', isPositive: true },
  { id: 8, name: 'CATE', price: '$0.00062', change: '+12.30%', isPositive: true },
];

const PriceTicker = () => {
  return (
    <div className="w-full bg-background/50 backdrop-blur-sm border-y border-border py-3">
      <div className="ticker-container">
        <div className="animate-ticker inline-block">
          {tickerData.map((coin) => (
            <div key={coin.id} className="ticker-item">
              <div className="flex items-center gap-2">
                <span className="font-medium">{coin.name}</span>
                <span>{coin.price}</span>
                <span className={`flex items-center ${coin.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {coin.change}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless looping */}
        <div className="animate-ticker inline-block">
          {tickerData.map((coin) => (
            <div key={`dup-${coin.id}`} className="ticker-item">
              <div className="flex items-center gap-2">
                <span className="font-medium">{coin.name}</span>
                <span>{coin.price}</span>
                <span className={`flex items-center ${coin.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {coin.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;
