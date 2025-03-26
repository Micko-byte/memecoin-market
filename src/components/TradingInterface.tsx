
import React, { useState } from 'react';
import { ArrowUpDown, ChevronDown, Info, Clock, History, Settings } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const TradingInterface = () => {
  const [amount, setAmount] = useState('0');
  const [slippageTolerance, setSlippageTolerance] = useState(0.5);
  const [fromToken, setFromToken] = useState({ name: 'ETH', balance: '1.45', logo: 'E' });
  const [toToken, setToToken] = useState({ name: 'DOGE', balance: '0.00', logo: 'D' });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setAmount(value);
    }
  };

  const handleSlippageChange = (value: number[]) => {
    setSlippageTolerance(value[0]);
  };

  const switchTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  // Recent trade history data
  const recentTrades = [
    { id: 1, type: 'Buy', amount: '500 DOGE', price: '0.170 USDC', time: '3 min ago' },
    { id: 2, type: 'Sell', amount: '200 DOGE', price: '0.175 USDC', time: '15 min ago' },
    { id: 3, type: 'Buy', amount: '1000 DOGE', price: '0.168 USDC', time: '1 hour ago' },
    { id: 4, type: 'Buy', amount: '750 DOGE', price: '0.165 USDC', time: '2 hours ago' },
  ];

  return (
    <div className="section-container">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Trade Memecoins Instantly</h2>
        
        <Card className="glass-panel shadow-lg animate-fade-in">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl">Swap</CardTitle>
                <CardDescription>Trade tokens in an instant</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <History size={18} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings size={18} />
                </Button>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>Gas: 12 Gwei</span>
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="market" className="mb-6">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="market">Market</TabsTrigger>
                <TabsTrigger value="limit">Limit</TabsTrigger>
                <TabsTrigger value="stop">Stop</TabsTrigger>
              </TabsList>
              
              <TabsContent value="market" className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>From</span>
                    <span>Balance: {fromToken.balance} {fromToken.name}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <Input
                        type="text"
                        value={amount}
                        onChange={handleAmountChange}
                        className="text-xl font-medium bg-transparent border-none h-12 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="0.00"
                      />
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-secondary hover:bg-secondary/80 transition-colors rounded-lg px-3 py-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                        {fromToken.logo}
                      </div>
                      <span className="font-medium">{fromToken.name}</span>
                      <ChevronDown size={18} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <Button variant="outline" size="sm" className="rounded-lg text-xs" onClick={() => setAmount((parseFloat(fromToken.balance) * 0.25).toString())}>
                      25%
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg text-xs" onClick={() => setAmount((parseFloat(fromToken.balance) * 0.5).toString())}>
                      50%
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg text-xs" onClick={() => setAmount((parseFloat(fromToken.balance) * 0.75).toString())}>
                      75%
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg text-xs" onClick={() => setAmount(fromToken.balance)}>
                      Max
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-center -my-2">
                  <button 
                    onClick={switchTokens}
                    className="bg-background rounded-full p-2 border border-border z-10 hover:bg-secondary transition-colors"
                  >
                    <ArrowUpDown size={16} />
                  </button>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>To</span>
                    <span>Balance: {toToken.balance} {toToken.name}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <Input
                        type="text"
                        value={(parseFloat(amount || '0') * 7650).toFixed(2)}
                        readOnly
                        className="text-xl font-medium bg-transparent border-none h-12 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="0.00"
                      />
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-secondary hover:bg-secondary/80 transition-colors rounded-lg px-3 py-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                        {toToken.logo}
                      </div>
                      <span className="font-medium">{toToken.name}</span>
                      <ChevronDown size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border p-3 text-sm">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1">
                      <span>Slippage Tolerance</span>
                      <Info size={14} className="text-muted-foreground" />
                    </div>
                    <span className="font-medium">{slippageTolerance}%</span>
                  </div>
                  
                  <Slider
                    defaultValue={[0.5]}
                    max={5}
                    step={0.1}
                    value={[slippageTolerance]}
                    onValueChange={handleSlippageChange}
                    className="my-3"
                  />
                  
                  <div className="flex justify-between text-muted-foreground text-xs">
                    <span>0.1%</span>
                    <span>5.0%</span>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rate</span>
                    <span>1 {fromToken.name} = 7,650 {toToken.name}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee</span>
                    <span>0.3%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Route</span>
                    <span>{fromToken.name} → USDC → {toToken.name}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minimum received</span>
                    <span>{((parseFloat(amount || '0') * 7650) * (1 - slippageTolerance / 100)).toFixed(2)} {toToken.name}</span>
                  </div>
                </div>
                
                <Button className="w-full py-6 text-lg font-medium rounded-xl">
                  {amount === '0' || amount === '' ? 'Enter an amount' : 'Swap'}
                </Button>
                
                {/* Recent trades section */}
                <div className="mt-6 border-t border-border pt-4">
                  <h3 className="font-medium mb-2 flex items-center gap-1">
                    <History size={16} />
                    Recent Trades
                  </h3>
                  <ScrollArea className="h-32">
                    <div className="space-y-2">
                      {recentTrades.map(trade => (
                        <div key={trade.id} className="flex justify-between items-center text-sm p-2 border-b border-border last:border-0">
                          <div className="flex items-center gap-2">
                            <Badge variant={trade.type === 'Buy' ? 'success' : 'destructive'} className="text-xs">
                              {trade.type}
                            </Badge>
                            <span>{trade.amount}</span>
                          </div>
                          <div className="flex flex-col items-end">
                            <span>{trade.price}</span>
                            <span className="text-xs text-muted-foreground">{trade.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              
              <TabsContent value="limit" className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Set Order</h3>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm mb-1">Price</div>
                      <div className="flex items-center">
                        <Input placeholder="Enter price" className="rounded-r-none" />
                        <Button variant="outline" className="rounded-l-none border-l-0">USDC</Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm mb-1">Amount</div>
                      <div className="flex items-center">
                        <Input placeholder="Enter amount" className="rounded-r-none" />
                        <Button variant="outline" className="rounded-l-none border-l-0">DOGE</Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm mb-1">Total</div>
                      <div className="flex items-center">
                        <Input placeholder="0.00" readOnly className="rounded-r-none bg-secondary/30" />
                        <Button variant="outline" className="rounded-l-none border-l-0">USDC</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      Buy DOGE
                    </Button>
                    <Button className="w-full bg-red-500 hover:bg-red-600">
                      Sell DOGE
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border p-3">
                  <h3 className="font-medium mb-3">Open Orders</h3>
                  <div className="text-center py-4 text-muted-foreground">
                    No open orders
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="stop" className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Stop Loss / Take Profit</h3>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm mb-1">Stop Price</div>
                      <div className="flex items-center">
                        <Input placeholder="Enter stop price" className="rounded-r-none" />
                        <Button variant="outline" className="rounded-l-none border-l-0">USDC</Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm mb-1">Limit Price</div>
                      <div className="flex items-center">
                        <Input placeholder="Enter limit price" className="rounded-r-none" />
                        <Button variant="outline" className="rounded-l-none border-l-0">USDC</Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm mb-1">Amount</div>
                      <div className="flex items-center">
                        <Input placeholder="Enter amount" className="rounded-r-none" />
                        <Button variant="outline" className="rounded-l-none border-l-0">DOGE</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <Button className="w-full">
                      Stop Buy
                    </Button>
                    <Button className="w-full">
                      Stop Sell
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border p-3">
                  <h3 className="font-medium mb-3">Active Stop Orders</h3>
                  <div className="text-center py-4 text-muted-foreground">
                    No active stop orders
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TradingInterface;
