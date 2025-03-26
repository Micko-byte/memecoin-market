
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PriceTicker from '@/components/PriceTicker';
import TradingInterface from '@/components/TradingInterface';
import MarketOverview from '@/components/MarketOverview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <PriceTicker />
      <TradingInterface />
      <MarketOverview />
      <Footer />
    </div>
  );
};

export default Index;
