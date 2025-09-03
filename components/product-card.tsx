"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  brand: string
  category: string
  description: string
  size: string
  price: number
  image: string
  stock: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const isOutOfStock = product.stock <= 0

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            {product.category}
          </Badge>
          <span className="text-sm text-muted-foreground">{product.size}</span>
        </div>

        <h3 className="font-serif font-semibold text-lg text-card-foreground mb-1 line-clamp-2">{product.name}</h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-600">${product.price.toLocaleString("es-CO")} COP</span>
          <Button
            className={`rounded-full px-6 ${
              isOutOfStock
                ? "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400"
                : "bg-blue-400 hover:bg-blue-500 text-white"
            }`}
            size="sm"
            onClick={addToCart}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Agotado" : "Agregar al Carrito"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
