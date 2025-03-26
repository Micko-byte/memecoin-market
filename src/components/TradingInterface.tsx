
import React, { useState } from 'react';
import { ArrowUpDown, ChevronDown, Info } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const TradingInterface = () => {
  const [amount, setAmount] = useState('0');
  const [slippageTolerance, setSlippageTolerance] = useState(0.5);
  const [fromToken, setFromToken] = useState({ name: 'ETH', balance: '1.45' });
  const [toToken, setToToken] = useState({ name: 'DOGE', balance: '0.00' });

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

  return (
    <div className="section-container">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Trade Memecoins Instantly</h2>
        
        <Card className="glass-panel shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl flex justify-between items-center">
              <span>Swap</span>
              <div className="flex items-center text-muted-foreground text-sm font-normal">
                <span>Gas: 12 Gwei</span>
                <Separator className="mx-2 h-4" orientation="vertical" />
                <span>$1.24</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="market" className="mb-6">
              <TabsList className="grid grid-cols-3 mb-4">
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
                    
                    <button className="flex items-center space-x-2 bg-secondary rounded-lg px-3 py-2">
                      <span className="font-medium">{fromToken.name}</span>
                      <ChevronDown size={18} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <Button variant="ghost" size="sm" className="rounded-lg text-xs" onClick={() => setAmount((parseFloat(fromToken.balance) * 0.25).toString())}>
                      25%
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-lg text-xs" onClick={() => setAmount((parseFloat(fromToken.balance) * 0.5).toString())}>
                      50%
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-lg text-xs" onClick={() => setAmount((parseFloat(fromToken.balance) * 0.75).toString())}>
                      75%
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-lg text-xs" onClick={() => setAmount(fromToken.balance)}>
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
                    
                    <button className="flex items-center space-x-2 bg-secondary rounded-lg px-3 py-2">
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
                </div>
                
                <Button className="w-full py-6 text-lg font-medium rounded-xl">
                  Swap
                </Button>
              </TabsContent>
              
              <TabsContent value="limit" className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">Limit orders coming soon</p>
              </TabsContent>
              
              <TabsContent value="stop" className="flex items-center justify-center h-32">
                <p className="text-muted-foreground">Stop orders coming soon</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TradingInterface;
