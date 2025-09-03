import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Madagascar Centella Light Cleansing Oil",
    brand: "SKIN1004",
    category: "Oil Cleanser",
    size: "200ml",
    price: "$98000",
    originalPrice: "$98000",
    rating: 4.8,
    image: "/korean-skincare-oil-cleanser-bottle-with-centella-.png",
    description:
      "Aceite limpiador premium con extracto de centella de Madagascar para una limpieza profunda sin irritación.",
    keyIngredient: "Centella Asiatica",
  },
  {
    id: 2,
    name: "1025 Dokdo Cleanser",
    brand: "Round Lab",
    category: "Foam Cleanser",
    size: "150ml",
    price: "$69900",
    originalPrice: "$69900",
    rating: 4.7,
    image: "/korean-foam-cleanser-tube-with-ocean-minerals-dokd.png",
    description: "Limpiador espumoso con agua marina de la isla Dokdo, rico en minerales para una piel equilibrada.",
    keyIngredient: "Agua Marina Dokdo",
  },
  {
    id: 3,
    name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
    brand: "SKIN1004",
    category: "Sunscreen",
    size: "50ml",
    price: "$95000",
    originalPrice: "$95000",
    rating: 4.9,
    image: "/korean-sunscreen-serum-bottle-with-centella-and-hy.png",
    description: "Protector solar en serum con centella y ácido hialurónico. SPF50+ PA++++",
    keyIngredient: "Ácido Hialurónico",
  },
  {
    id: 4,
    name: "Calming Moisture Barrier Cream",
    brand: "Pyunkang Yul",
    category: "Moisturizer",
    size: "50ml",
    price: "$85000",
    originalPrice: "$85000",
    rating: 4.6,
    image: "/korean-moisturizer-jar-with-calming-ingredients-ba.png",
    description: "Crema hidratante que fortalece la barrera cutánea con ingredientes calmantes naturales.",
    keyIngredient: "Ceramidas",
  },
  {
    id: 5,
    name: "Relief Sun: Rice + Probiotics",
    brand: "Beauty of Joseon",
    category: "Sunscreen",
    size: "50ml",
    price: "$96900",
    originalPrice: "$96900",
    rating: 4.8,
    image: "/korean-sunscreen-tube-with-rice-water-and-probioti.png",
    description: "Protector solar con agua de arroz y probióticos. SPF50+ PA++++",
    keyIngredient: "Agua de Arroz",
  },
  {
    id: 6,
    name: "Red Bean Water Gel",
    brand: "Beauty of Joseon",
    category: "Moisturizer",
    size: "100ml",
    price: "$99000",
    originalPrice: "$99000",
    rating: 4.7,
    image: "/korean-water-gel-moisturizer-with-red-bean-extract.png",
    description: "Gel hidratante con agua de frijol rojo para una hidratación refrescante y ligera.",
    keyIngredient: "Extracto de Frijol Rojo",
  },
]

export function ProductCatalog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-24">
        <div className="text-center mb-32">
          <h1 className="font-space-grotesk text-6xl font-bold text-foreground mb-8 tracking-tight">
            Skincare Coreano
          </h1>
          <div className="w-24 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Colección curada de productos premium de cuidado facial de Corea del Sur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group border-0 shadow-none bg-card hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden mb-8">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="px-2">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="font-dm-sans text-xs tracking-wider uppercase border-muted-foreground/20 text-muted-foreground"
                    >
                      {product.brand}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-dm-sans text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-space-grotesk text-xl font-semibold text-foreground mb-3 leading-tight">
                    {product.name}
                  </h3>

                  <p className="font-dm-sans text-muted-foreground mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-dm-sans text-xs uppercase tracking-wider text-muted-foreground">
                      Ingrediente clave
                    </span>
                    <p className="font-space-grotesk text-sm font-medium text-accent">{product.keyIngredient}</p>
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span className="font-space-grotesk text-2xl font-bold text-foreground">{product.price}</span>
                      <span className="font-dm-sans text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <span className="font-dm-sans text-xs text-muted-foreground">{product.size}</span>
                  </div>

                  <Button className="w-full font-dm-sans text-sm tracking-wide uppercase bg-primary hover:bg-primary/90 transition-all duration-300 py-6">
                    Agregar al carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-32 pt-16 border-t border-border">
          <h3 className="font-space-grotesk text-2xl font-semibold mb-8">La excelencia del cuidado coreano</h3>
          <p className="font-dm-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada producto ha sido cuidadosamente seleccionado por su calidad excepcional, ingredientes innovadores y
            resultados comprobados en el cuidado de la piel.
          </p>
        </div>
      </div>
    </div>
  )
}
