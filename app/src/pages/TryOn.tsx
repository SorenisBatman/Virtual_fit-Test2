
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShirtIcon } from "@/components/clothes/ShirtIcon";
import { PantsIcon } from "@/components/clothes/PantsIcon";
import { Heart, Star, Filter, Sparkles, Crown } from "lucide-react";

export const TryOn = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const clothing = {
    shirts: [
      { id: "1", name: "Ethereal Silk Blouse", price: "$189", brand: "Maison Élégance", rating: 4.9, sizes: ["XS", "S", "M", "L"], luxury: true },
      { id: "2", name: "Cashmere Dreams Sweater", price: "$245", brand: "Luxe Atelier", rating: 4.8, sizes: ["S", "M", "L", "XL"], luxury: true },
      { id: "3", name: "Executive Power Shirt", price: "$156", brand: "Premium Couture", rating: 4.7, sizes: ["M", "L", "XL"], luxury: false },
      { id: "4", name: "Summer Breeze Polo", price: "$89", brand: "Elegant Casual", rating: 4.6, sizes: ["S", "M", "L", "XL"], luxury: false },
    ],
    pants: [
      { id: "5", name: "Midnight Denim Couture", price: "$298", brand: "Artisan Jeans Co", rating: 4.9, sizes: ["26", "28", "30", "32"], luxury: true },
      { id: "6", name: "Silk Touch Trousers", price: "$215", brand: "Sophisticated Style", rating: 4.8, sizes: ["28", "30", "32", "34"], luxury: true },
      { id: "7", name: "Executive Dress Pants", price: "$178", brand: "Business Elite", rating: 4.7, sizes: ["30", "32", "34"], luxury: false },
      { id: "8", name: "Weekend Luxury Shorts", price: "$126", brand: "Leisure Luxe", rating: 4.5, sizes: ["S", "M", "L", "XL"], luxury: false },
    ]
  };

  const toggleSelection = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const ClothingItem = ({ item, icon }: { item: any; icon: React.ReactNode }) => (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover-lift card-elegant ${
        selectedItems.includes(item.id) 
          ? 'ring-2 ring-primary shadow-2xl scale-105' 
          : 'hover:shadow-xl'
      }`}
      onClick={() => toggleSelection(item.id)}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="w-20 h-20 elegant-gradient rounded-2xl flex items-center justify-center shadow-lg">
            {icon}
            {item.luxury && (
              <Crown className="w-4 h-4 text-accent absolute -top-1 -right-1" />
            )}
          </div>
          <Button variant="ghost" size="sm" className="p-2 hover:bg-accent/20 rounded-xl">
            <Heart className="w-4 h-4 text-primary" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div>
            <h3 className="font-script font-semibold text-lg text-primary">{item.name}</h3>
            <p className="text-sm text-text/60 font-sans">{item.brand}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-sm text-text/70 ml-1 font-sans">{item.rating}</span>
              </div>
              {item.luxury && (
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white text-xs">
                  Luxury
                </Badge>
              )}
            </div>
            <span className="text-xl font-script font-bold text-primary">{item.price}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {item.sizes.map((size: string) => (
              <Badge key={size} variant="secondary" className="text-xs bg-accent/20 text-primary border-accent/30">
                {size}
              </Badge>
            ))}
          </div>
          
          {selectedItems.includes(item.id) && (
            <Badge className="w-full justify-center elegant-gradient text-white">
              <Sparkles className="w-3 h-3 mr-1" />
              Ready for Virtual Fitting
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-white to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-script font-bold text-primary mb-6">
            Virtual Couture Studio
          </h1>
          <p className="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed font-sans">
            Curate your perfect ensemble from our exquisite collection. Each piece has been 
            carefully selected to complement your unique style and measurements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Clothing Selection */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-script font-semibold text-primary">
                Discover Your Style
              </h2>
              <Button variant="outline" className="gap-2 rounded-xl border-primary/30 hover:bg-primary/5">
                <Filter className="w-4 h-4" />
                Refine Selection
              </Button>
            </div>

            <Tabs defaultValue="shirts" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-2">
                <TabsTrigger value="shirts" className="rounded-xl font-sans data-[state=active]:bg-primary data-[state=active]:text-white">
                  Tops & Blouses
                </TabsTrigger>
                <TabsTrigger value="pants" className="rounded-xl font-sans data-[state=active]:bg-primary data-[state=active]:text-white">
                  Bottoms & Trousers
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="shirts" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {clothing.shirts.map((item) => (
                    <ClothingItem 
                      key={item.id} 
                      item={item} 
                      icon={<ShirtIcon size={32} color="#5F4B8B" />}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="pants" className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {clothing.pants.map((item) => (
                    <ClothingItem 
                      key={item.id} 
                      item={item} 
                      icon={<PantsIcon size={32} color="#5F4B8B" />}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Avatar Preview Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 card-elegant border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-2xl">
                <CardTitle className="text-center font-script text-2xl text-primary">Your Virtual Self</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="aspect-square elegant-gradient rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <p className="font-script text-lg mb-1">3D Avatar Preview</p>
                    <p className="text-xs font-sans opacity-80">Your reflection awaits</p>
                  </div>
                </div>
                
                {selectedItems.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-script font-semibold text-lg text-primary text-center">
                      Selected Pieces ({selectedItems.length})
                    </h4>
                    <Button className="w-full elegant-gradient hover:shadow-xl transition-all duration-300 rounded-xl py-3 font-sans">
                      Begin Virtual Fitting
                    </Button>
                    <Button variant="outline" className="w-full rounded-xl border-primary/30 hover:bg-primary/5 font-sans">
                      Clear Selection
                    </Button>
                  </div>
                )}
                
                {selectedItems.length === 0 && (
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-text/60 font-sans leading-relaxed">
                      Select exquisite pieces to see them grace your virtual silhouette
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
