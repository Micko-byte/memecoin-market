
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '0.1');
        const moveX = x * depth * 20;
        const moveY = y * depth * 20;
        
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl parallax" data-depth="0.1"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl parallax" data-depth="0.15"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl parallax" data-depth="0.2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
            Trade Memecoins with <span className="relative inline-block">
              Precision
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Experience the next generation of memecoin trading with our intuitive platform designed for both beginners and advanced traders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="button-primary flex items-center justify-center gap-2 group">
              Start Trading
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="button-secondary">
              Explore Markets
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="glass-panel rounded-2xl p-8 border-t border-l border-white/40 shadow-xl">
              <div className="flex flex-col">
                <div className="text-sm text-muted-foreground mb-2">Platform Statistics</div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground">Trading Volume</p>
                    <p className="text-3xl font-bold">$1.2B</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Memecoins</p>
                    <p className="text-3xl font-bold">437</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Traders</p>
                    <p className="text-3xl font-bold">82K</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Daily Trades</p>
                    <p className="text-3xl font-bold">543K</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">All systems operational</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Updated 2m ago</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-sm"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full glass-panel cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15L3 8L4.4 6.55L10 12.15L15.6 6.55L17 8L10 15Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
