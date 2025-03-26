
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Placeholder data for market coins
const marketCoins = [
  { id: 1, name: 'Dogecoin', symbol: 'DOGE', price: 0.17, change: 7.23, marketCap: 2.5, volume: 1.2 },
  { id: 2, name: 'Shiba Inu', symbol: 'SHIB', price: 0.00002, change: -3.51, marketCap: 1.1, volume: 0.8 },
  { id: 3, name: 'Floki', symbol: 'FLOKI', price: 0.0002, change: 12.58, marketCap: 0.3, volume: 0.5 },
  { id: 4, name: 'Pepe', symbol: 'PEPE', price: 0.000008, change: 5.72, marketCap: 0.9, volume: 0.7 },
  { id: 5, name: 'Bonk', symbol: 'BONK', price: 0.000003, change: -2.11, marketCap: 0.2, volume: 0.3 },
  { id: 6, name: 'Mav', symbol: 'MAV', price: 0.01, change: 32.4, marketCap: 0.6, volume: 1.5 },
  { id: 7, name: 'Brett', symbol: 'BRETT', price: 0.005, change: -1.23, marketCap: 0.15, volume: 0.2 },
  { id: 8, name: 'Turbo', symbol: 'TURBO', price: 0.023, change: 8.91, marketCap: 0.4, volume: 0.6 },
];

const Markets = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Market Overview</h1>
          
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search coins..." 
                className="pl-10 w-full"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-secondary hover:bg-secondary">
                24h
              </Badge>
              <Badge variant="outline">7d</Badge>
              <Badge variant="outline">30d</Badge>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Assets</TabsTrigger>
              <TabsTrigger value="memecoins">Memecoins</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
              <TabsTrigger value="losers">Top Losers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="w-full">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>All Cryptocurrencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50px]">#</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">24h %</TableHead>
                          <TableHead className="text-right hidden md:table-cell">Market Cap</TableHead>
                          <TableHead className="text-right hidden md:table-cell">Volume (24h)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {marketCoins.map((coin) => (
                          <TableRow key={coin.id} className="cursor-pointer hover:bg-muted/50">
                            <TableCell className="font-medium">{coin.id}</TableCell>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-xs">
                                  {coin.symbol.slice(0, 1)}
                                </div>
                                <div>
                                  <div>{coin.name}</div>
                                  <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                                </div>
                              </div>
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
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="memecoins">
              <Card className="h-[500px] flex items-center justify-center">
                <p className="text-muted-foreground">Memecoin listing coming soon</p>
              </Card>
            </TabsContent>
            
            <TabsContent value="trending">
              <Card className="h-[500px] flex items-center justify-center">
                <p className="text-muted-foreground">Trending list coming soon</p>
              </Card>
            </TabsContent>
            
            <TabsContent value="gainers">
              <Card className="h-[500px] flex items-center justify-center">
                <p className="text-muted-foreground">Top gainers coming soon</p>
              </Card>
            </TabsContent>
            
            <TabsContent value="losers">
              <Card className="h-[500px] flex items-center justify-center">
                <p className="text-muted-foreground">Top losers coming soon</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Markets;
