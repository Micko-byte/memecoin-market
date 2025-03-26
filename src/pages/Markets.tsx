
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Search, Filter, SlidersHorizontal, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder data for market coins
const marketCoins = [
  { id: 1, name: 'Dogecoin', symbol: 'DOGE', price: 0.17, change: 7.23, marketCap: 2.5, volume: 1.2, favorited: true },
  { id: 2, name: 'Shiba Inu', symbol: 'SHIB', price: 0.00002, change: -3.51, marketCap: 1.1, volume: 0.8, favorited: false },
  { id: 3, name: 'Floki', symbol: 'FLOKI', price: 0.0002, change: 12.58, marketCap: 0.3, volume: 0.5, favorited: true },
  { id: 4, name: 'Pepe', symbol: 'PEPE', price: 0.000008, change: 5.72, marketCap: 0.9, volume: 0.7, favorited: false },
  { id: 5, name: 'Bonk', symbol: 'BONK', price: 0.000003, change: -2.11, marketCap: 0.2, volume: 0.3, favorited: false },
  { id: 6, name: 'Mav', symbol: 'MAV', price: 0.01, change: 32.4, marketCap: 0.6, volume: 1.5, favorited: false },
  { id: 7, name: 'Brett', symbol: 'BRETT', price: 0.005, change: -1.23, marketCap: 0.15, volume: 0.2, favorited: false },
  { id: 8, name: 'Turbo', symbol: 'TURBO', price: 0.023, change: 8.91, marketCap: 0.4, volume: 0.6, favorited: false },
  { id: 9, name: 'Popcat', symbol: 'POPCAT', price: 0.00012, change: 18.5, marketCap: 0.35, volume: 0.9, favorited: false },
  { id: 10, name: 'Doge Killer', symbol: 'LEASH', price: 242.6, change: -5.8, marketCap: 0.26, volume: 0.15, favorited: false },
  { id: 11, name: 'MonaCoin', symbol: 'MONA', price: 0.42, change: 1.2, marketCap: 0.28, volume: 0.11, favorited: false },
  { id: 12, name: 'Dogelon Mars', symbol: 'ELON', price: 0.0000002, change: 4.5, marketCap: 0.12, volume: 0.08, favorited: false },
];

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('24h');
  
  const filteredCoins = marketCoins.filter(coin => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to toggle favorite status (just for UI, doesn't persist)
  const toggleFavorite = (id: number) => {
    // In a real implementation, this would update state or call an API
    console.log('Toggle favorite for coin ID:', id);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="section-container pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Market Overview</h1>
              <p className="text-muted-foreground">
                Track and analyze memecoin prices, market cap, and trading volume.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link to="/trade">
                <Button>Start Trading</Button>
              </Link>
              <a href="/documentation">
                <Button variant="outline">View Market Guide</Button>
              </a>
            </div>
          </div>
          
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search coins..." 
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-2 border border-border rounded-md p-1">
                <Badge 
                  variant={timeFilter === '24h' ? 'default' : 'outline'} 
                  className={`cursor-pointer ${timeFilter === '24h' ? '' : 'hover:bg-secondary'}`}
                  onClick={() => setTimeFilter('24h')}
                >
                  24h
                </Badge>
                <Badge 
                  variant={timeFilter === '7d' ? 'default' : 'outline'} 
                  className={`cursor-pointer ${timeFilter === '7d' ? '' : 'hover:bg-secondary'}`}
                  onClick={() => setTimeFilter('7d')}
                >
                  7d
                </Badge>
                <Badge 
                  variant={timeFilter === '30d' ? 'default' : 'outline'} 
                  className={`cursor-pointer ${timeFilter === '30d' ? '' : 'hover:bg-secondary'}`}
                  onClick={() => setTimeFilter('30d')}
                >
                  30d
                </Badge>
              </div>
              
              <Button variant="outline" size="icon" className="hidden sm:flex">
                <SlidersHorizontal size={18} />
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-6 overflow-x-auto">
              <TabsList>
                <TabsTrigger value="all">All Assets</TabsTrigger>
                <TabsTrigger value="memecoins">Memecoins</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
                <TabsTrigger value="losers">Top Losers</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="w-full">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <CardTitle>All Cryptocurrencies</CardTitle>
                      <CardDescription>
                        {filteredCoins.length} assets
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="hidden sm:flex">
                        <Filter size={16} className="mr-2" />
                        Filter
                      </Button>
                      <Link to="/markets/watchlist">
                        <Button variant="ghost" size="sm" className="hidden sm:flex">
                          <Star size={16} className="mr-2" />
                          My Watchlist
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">#</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">{timeFilter} %</TableHead>
                          <TableHead className="text-right hidden md:table-cell">Market Cap</TableHead>
                          <TableHead className="text-right hidden md:table-cell">Volume (24h)</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCoins.length > 0 ? (
                          filteredCoins.map((coin, index) => (
                            <TableRow key={coin.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{index + 1}</TableCell>
                              <TableCell className="font-medium">
                                <Link to={`/trade?coin=${coin.symbol.toLowerCase()}`} className="flex items-center gap-2">
                                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-xs">
                                    {coin.symbol.slice(0, 1)}
                                  </div>
                                  <div>
                                    <div>{coin.name}</div>
                                    <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                                  </div>
                                </Link>
                              </TableCell>
                              <TableCell className="text-right font-medium">${coin.price.toFixed(coin.price < 0.001 ? 6 : 2)}</TableCell>
                              <TableCell className={`text-right ${coin.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                <div className="flex items-center justify-end gap-1">
                                  {coin.change > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                                  {Math.abs(coin.change).toFixed(2)}%
                                </div>
                              </TableCell>
                              <TableCell className="text-right hidden md:table-cell">${coin.marketCap}B</TableCell>
                              <TableCell className="text-right hidden md:table-cell">${coin.volume}B</TableCell>
                              <TableCell>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(coin.id);
                                  }}
                                  className={coin.favorited ? 'text-yellow-500' : 'text-muted-foreground'}
                                >
                                  <Star size={16} fill={coin.favorited ? 'currentColor' : 'none'} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center">
                              <div className="py-6 text-muted-foreground">
                                No coins found matching your search.
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-muted-foreground">
                      Showing <span className="font-medium">{filteredCoins.length}</span> of <span className="font-medium">{marketCoins.length}</span> results
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="memecoins">
              <Card>
                <CardHeader>
                  <CardTitle>Memecoins</CardTitle>
                  <CardDescription>All popular meme-based cryptocurrencies</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Detailed memecoin listing coming soon</p>
                    <Button variant="outline">Get notified</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="trending">
              <Card className="h-[500px]">
                <CardHeader>
                  <CardTitle>Trending Cryptocurrencies</CardTitle>
                  <CardDescription>Most viewed coins in the last 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Trending list coming soon</p>
                    <Button variant="outline">Get notified</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gainers">
              <Card>
                <CardHeader>
                  <CardTitle>Top Gainers</CardTitle>
                  <CardDescription>Best performing coins in the last {timeFilter}</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Top gainers coming soon</p>
                    <Button variant="outline">Get notified</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="losers">
              <Card>
                <CardHeader>
                  <CardTitle>Top Losers</CardTitle>
                  <CardDescription>Worst performing coins in the last {timeFilter}</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Top losers coming soon</p>
                    <Button variant="outline">Get notified</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Your Favorites</CardTitle>
                  <CardDescription>Coins you've marked as favorites</CardDescription>
                </CardHeader>
                <CardContent>
                  {filteredCoins.filter(coin => coin.favorited).length > 0 ? (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50px]">#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">{timeFilter} %</TableHead>
                            <TableHead className="text-right hidden md:table-cell">Market Cap</TableHead>
                            <TableHead className="text-right hidden md:table-cell">Volume (24h)</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredCoins.filter(coin => coin.favorited).map((coin, index) => (
                            <TableRow key={coin.id} className="cursor-pointer hover:bg-muted/50">
                              <TableCell className="font-medium">{index + 1}</TableCell>
                              <TableCell className="font-medium">
                                <Link to={`/trade?coin=${coin.symbol.toLowerCase()}`} className="flex items-center gap-2">
                                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-xs">
                                    {coin.symbol.slice(0, 1)}
                                  </div>
                                  <div>
                                    <div>{coin.name}</div>
                                    <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                                  </div>
                                </Link>
                              </TableCell>
                              <TableCell className="text-right font-medium">${coin.price.toFixed(coin.price < 0.001 ? 6 : 2)}</TableCell>
                              <TableCell className={`text-right ${coin.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                <div className="flex items-center justify-end gap-1">
                                  {coin.change > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                                  {Math.abs(coin.change).toFixed(2)}%
                                </div>
                              </TableCell>
                              <TableCell className="text-right hidden md:table-cell">${coin.marketCap}B</TableCell>
                              <TableCell className="text-right hidden md:table-cell">${coin.volume}B</TableCell>
                              <TableCell>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(coin.id);
                                  }}
                                  className="text-yellow-500"
                                >
                                  <Star size={16} fill="currentColor" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-muted-foreground mb-4">No favorites added yet</p>
                      <p className="text-sm text-muted-foreground mb-6">Click the star icon next to any coin to add it to your favorites</p>
                      <Button>Browse Markets</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn about cryptocurrency markets, trading, and technical analysis
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="/documentation">View Documentation</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">API Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get programmatic access to real-time market data and trading capabilities
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="/api">Explore API</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Market Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay updated with weekly market reports and memecoin analysis
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="/blog">View Reports</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Markets;
