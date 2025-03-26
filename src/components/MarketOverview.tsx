
import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown, ArrowRight, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

// Sample market data
const marketData = [
  { id: 1, name: 'Dogecoin', symbol: 'DOGE', price: '$0.1375', change24h: '+2.45%', volume24h: '$1.7B', marketCap: '$18.2B', isPositive: true },
  { id: 2, name: 'Shiba Inu', symbol: 'SHIB', price: '$0.00002632', change24h: '+3.76%', volume24h: '$983M', marketCap: '$12.4B', isPositive: true },
  { id: 3, name: 'Floki', symbol: 'FLOKI', price: '$0.00017231', change24h: '-1.24%', volume24h: '$452M', marketCap: '$1.6B', isPositive: false },
  { id: 4, name: 'Pepe', symbol: 'PEPE', price: '$0.00000142', change24h: '+15.62%', volume24h: '$782M', marketCap: '$592M', isPositive: true },
  { id: 5, name: 'Bonk', symbol: 'BONK', price: '$0.00002752', change24h: '+8.14%', volume24h: '$321M', marketCap: '$1.3B', isPositive: true },
  { id: 6, name: 'Dogwifhat', symbol: 'WIF', price: '$0.22451', change24h: '-2.35%', volume24h: '$217M', marketCap: '$2.2B', isPositive: false },
  { id: 7, name: 'Memecoin', symbol: 'MEME', price: '$0.03475', change24h: '+5.71%', volume24h: '$113M', marketCap: '$312M', isPositive: true },
  { id: 8, name: 'Catecoin', symbol: 'CATE', price: '$0.00062', change24h: '+12.30%', volume24h: '$92M', marketCap: '$187M', isPositive: true },
];

const MarketOverview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = marketData.filter(
    coin => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Market Overview</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track the latest prices and trends of the hottest memecoins in the market
          </p>
        </div>
        
        <Card className="glass-panel shadow-lg overflow-hidden animate-fade-in">
          <CardHeader className="border-b border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle>Top Memecoins</CardTitle>
                <CardDescription className="hidden sm:block mt-1">
                  Real-time market data for popular memecoins
                </CardDescription>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search coin..."
                    className="pl-10 w-full sm:w-72"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button variant="outline" size="icon" className="hidden sm:flex">
                  <Filter size={18} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <div className="border-b border-border overflow-x-auto">
                <TabsList className="h-12 p-0 bg-transparent border-b-0 rounded-none">
                  <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none h-12">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="gainers" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none h-12">
                    Top Gainers
                  </TabsTrigger>
                  <TabsTrigger value="losers" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none h-12">
                    Top Losers
                  </TabsTrigger>
                  <TabsTrigger value="volume" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none h-12">
                    High Volume
                  </TabsTrigger>
                  <TabsTrigger value="new" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none h-12">
                    New Listings
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left py-4 px-6 font-medium">#</th>
                        <th className="text-left py-4 px-6 font-medium">Coin</th>
                        <th className="text-right py-4 px-6 font-medium">Price</th>
                        <th className="text-right py-4 px-6 font-medium">24h Change</th>
                        <th className="text-right py-4 px-6 font-medium">24h Volume</th>
                        <th className="text-right py-4 px-6 font-medium">Market Cap</th>
                        <th className="text-right py-4 px-6 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.length > 0 ? (
                        filteredData.map((coin, index) => (
                          <tr key={coin.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                            <td className="py-4 px-6">{index + 1}</td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                  {coin.symbol[0]}
                                </div>
                                <div>
                                  <div className="font-medium">{coin.name}</div>
                                  <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                                </div>
                                {index < 3 && (
                                  <Badge variant="outline" className="ml-2 bg-secondary/50">
                                    Top {index + 1}
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="text-right py-4 px-6 font-medium">{coin.price}</td>
                            <td className={`text-right py-4 px-6 ${coin.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                              <div className="flex items-center justify-end gap-1">
                                {coin.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                {coin.change24h}
                              </div>
                            </td>
                            <td className="text-right py-4 px-6">{coin.volume24h}</td>
                            <td className="text-right py-4 px-6">{coin.marketCap}</td>
                            <td className="text-right py-4 px-6">
                              <Button variant="ghost" size="sm" asChild>
                                <Link to={`/trade?coin=${coin.symbol.toLowerCase()}`}>
                                  Trade <ArrowRight size={14} className="ml-1" />
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="text-center py-8 text-muted-foreground">No coins found matching your search.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-4 flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/markets">
                      View All Markets <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="gainers" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left py-4 px-6 font-medium">#</th>
                        <th className="text-left py-4 px-6 font-medium">Coin</th>
                        <th className="text-right py-4 px-6 font-medium">Price</th>
                        <th className="text-right py-4 px-6 font-medium">24h Change</th>
                        <th className="text-right py-4 px-6 font-medium">24h Volume</th>
                        <th className="text-right py-4 px-6 font-medium">Market Cap</th>
                        <th className="text-right py-4 px-6 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.filter(coin => coin.isPositive)
                        .sort((a, b) => parseFloat(b.change24h) - parseFloat(a.change24h))
                        .map((coin, index) => (
                        <tr key={coin.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                          <td className="py-4 px-6">{index + 1}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                {coin.symbol[0]}
                              </div>
                              <div>
                                <div className="font-medium">{coin.name}</div>
                                <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-4 px-6 font-medium">{coin.price}</td>
                          <td className="text-right py-4 px-6 text-green-500">
                            <div className="flex items-center justify-end gap-1">
                              <TrendingUp size={16} />
                              {coin.change24h}
                            </div>
                          </td>
                          <td className="text-right py-4 px-6">{coin.volume24h}</td>
                          <td className="text-right py-4 px-6">{coin.marketCap}</td>
                          <td className="text-right py-4 px-6">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/trade?coin=${coin.symbol.toLowerCase()}`}>
                                Trade <ArrowRight size={14} className="ml-1" />
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="losers" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left py-4 px-6 font-medium">#</th>
                        <th className="text-left py-4 px-6 font-medium">Coin</th>
                        <th className="text-right py-4 px-6 font-medium">Price</th>
                        <th className="text-right py-4 px-6 font-medium">24h Change</th>
                        <th className="text-right py-4 px-6 font-medium">24h Volume</th>
                        <th className="text-right py-4 px-6 font-medium">Market Cap</th>
                        <th className="text-right py-4 px-6 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.filter(coin => !coin.isPositive).map((coin, index) => (
                        <tr key={coin.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                          <td className="py-4 px-6">{index + 1}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                {coin.symbol[0]}
                              </div>
                              <div>
                                <div className="font-medium">{coin.name}</div>
                                <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-4 px-6 font-medium">{coin.price}</td>
                          <td className="text-right py-4 px-6 text-red-500">
                            <div className="flex items-center justify-end gap-1">
                              <TrendingDown size={16} />
                              {coin.change24h}
                            </div>
                          </td>
                          <td className="text-right py-4 px-6">{coin.volume24h}</td>
                          <td className="text-right py-4 px-6">{coin.marketCap}</td>
                          <td className="text-right py-4 px-6">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/trade?coin=${coin.symbol.toLowerCase()}`}>
                                Trade <ArrowRight size={14} className="ml-1" />
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="volume" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left py-4 px-6 font-medium">#</th>
                        <th className="text-left py-4 px-6 font-medium">Coin</th>
                        <th className="text-right py-4 px-6 font-medium">Price</th>
                        <th className="text-right py-4 px-6 font-medium">24h Change</th>
                        <th className="text-right py-4 px-6 font-medium">24h Volume</th>
                        <th className="text-right py-4 px-6 font-medium">Market Cap</th>
                        <th className="text-right py-4 px-6 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData
                        .sort((a, b) => parseFloat(b.volume24h.replace(/[^0-9.]/g, '')) - parseFloat(a.volume24h.replace(/[^0-9.]/g, '')))
                        .map((coin, index) => (
                        <tr key={coin.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                          <td className="py-4 px-6">{index + 1}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                {coin.symbol[0]}
                              </div>
                              <div>
                                <div className="font-medium">{coin.name}</div>
                                <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                              </div>
                              {index < 3 && (
                                <Badge variant="outline" className="ml-2 bg-primary/10">
                                  High Volume
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="text-right py-4 px-6 font-medium">{coin.price}</td>
                          <td className={`text-right py-4 px-6 ${coin.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            <div className="flex items-center justify-end gap-1">
                              {coin.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                              {coin.change24h}
                            </div>
                          </td>
                          <td className="text-right py-4 px-6 font-medium">{coin.volume24h}</td>
                          <td className="text-right py-4 px-6">{coin.marketCap}</td>
                          <td className="text-right py-4 px-6">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/trade?coin=${coin.symbol.toLowerCase()}`}>
                                Trade <ArrowRight size={14} className="ml-1" />
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="mt-0">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">New listings coming soon</p>
                    <Button variant="outline" size="sm">
                      Get notified
                    </Button>
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

export default MarketOverview;
