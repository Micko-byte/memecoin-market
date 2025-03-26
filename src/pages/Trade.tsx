
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TradingInterface from '@/components/TradingInterface';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';

// Placeholder data for the price chart
const chartData = [
  { time: '12:00', price: 0.17 },
  { time: '13:00', price: 0.172 },
  { time: '14:00', price: 0.168 },
  { time: '15:00', price: 0.175 },
  { time: '16:00', price: 0.182 },
  { time: '17:00', price: 0.18 },
  { time: '18:00', price: 0.185 },
  { time: '19:00', price: 0.19 },
  { time: '20:00', price: 0.188 },
  { time: '21:00', price: 0.192 },
  { time: '22:00', price: 0.195 },
  { time: '23:00', price: 0.201 },
  { time: '00:00', price: 0.205 },
];

// Placeholder order book data
const asks = [
  { price: 0.207, size: 150000 },
  { price: 0.206, size: 120000 },
  { price: 0.205, size: 200000 },
  { price: 0.204, size: 80000 },
  { price: 0.203, size: 50000 },
];

const bids = [
  { price: 0.202, size: 70000 },
  { price: 0.201, size: 90000 },
  { price: 0.200, size: 180000 },
  { price: 0.199, size: 120000 },
  { price: 0.198, size: 230000 },
];

const Trade = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="section-container pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left section: Chart and Order Book */}
            <div className="w-full lg:w-2/3 space-y-6">
              <Card className="w-full">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>DOGE/USDC</CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-green-500">$0.205</div>
                      <div className="text-xs text-green-500">+3.2%</div>
                    </div>
                  </div>
                  <Tabs defaultValue="1d" className="w-full">
                    <TabsList className="mb-2">
                      <TabsTrigger value="1h">1H</TabsTrigger>
                      <TabsTrigger value="4h">4H</TabsTrigger>
                      <TabsTrigger value="1d">1D</TabsTrigger>
                      <TabsTrigger value="1w">1W</TabsTrigger>
                      <TabsTrigger value="1m">1M</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{
                          top: 5,
                          right: 20,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <defs>
                          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="time" tick={{fontSize: 12}} />
                        <YAxis 
                          domain={['auto', 'auto']} 
                          tick={{fontSize: 12}}
                          tickFormatter={(value) => `$${value.toFixed(3)}`}
                        />
                        <Tooltip 
                          formatter={(value) => [`$${value}`, 'Price']}
                          labelFormatter={(label) => `Time: ${label}`}
                          contentStyle={{
                            backgroundColor: 'rgba(17, 24, 39, 0.9)',
                            borderColor: 'rgba(107, 114, 128, 0.5)',
                            borderRadius: '6px',
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="price" 
                          stroke="#10b981" 
                          fillOpacity={1} 
                          fill="url(#colorPrice)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Order Book</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-red-500">Asks</h4>
                        <div className="space-y-1">
                          {asks.map((ask, i) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span className="text-red-500">${ask.price.toFixed(3)}</span>
                              <span>{ask.size.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Price</span>
                          <span className="text-sm font-medium text-green-500">$0.205</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-green-500">Bids</h4>
                        <div className="space-y-1">
                          {bids.map((bid, i) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span className="text-green-500">${bid.price.toFixed(3)}</span>
                              <span>{bid.size.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Recent Trades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Price</span>
                        <span>Size</span>
                        <span>Time</span>
                      </div>
                      {Array.from({length: 10}).map((_, i) => (
                        <div key={i} className="flex justify-between text-sm border-b border-border pb-2 last:border-0 last:pb-0">
                          <span className={i % 2 ? "text-green-500" : "text-red-500"}>
                            ${(0.2 + Math.random() * 0.01).toFixed(5)}
                          </span>
                          <span>
                            {Math.floor(Math.random() * 200000).toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">
                            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Right section: Trading interface */}
            <div className="w-full lg:w-1/3">
              <TradingInterface />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Trade;
