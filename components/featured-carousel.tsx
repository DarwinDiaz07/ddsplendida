"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

const featuredProducts = [
  {
    id: 1,
    name: "Madagascar Centella Light Cleansing Oil",
    brand: "SKIN1004",
    category: "Limpiador",
    description: "Aceite limpiador suave con extracto de centella asiática",
    size: "200ml",
    price: 98000,
    image: "/centella.png",
    stock: 15,
  },
  {
    id: 2,
    name: "1025 Dokdo Cleanser",
    brand: "Round Lab",
    category: "Limpiador",
    description: "Limpiador espumoso con agua de mar profundo",
    size: "150ml",
    price: 69900,
    image: "/dokdo.png",
    stock: 8,
  },
  {
    id: 3,
    name: "Relief Sun: Rice + Probiotics",
    brand: "Beauty of Joseon",
    category: "Bloqueador",
    description: "Protector solar con agua de arroz y probióticos",
    size: "50ml",
    price: 96900,
    image: "/sunscreen_boj.png",
    stock: 10,
  },
  {
    id: 4,
    name: "Calming Moisture Barrier Cream",
    brand: "Pyunkang Yul",
    category: "Crema",
    description: "Crema hidratante calmante para piel sensible",
    size: "50ml",
    price: 85000,
    image: "/pyunkang.png",
    stock: 12,
  },
  {
    id: 5,
    name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
    brand: "SKIN1004",
    category: "Bloqueador",
    description: "Sérum solar con ácido hialurónico y centella",
    size: "50ml",
    price: 95000,
    image: "/sunscreen_centella.png",
    stock: 20,
  },
  {
    id: 6,
    name: "Red Bean Water Gel",
    brand: "Beauty of Joseon",
    category: "Crema",
    description: "Gel hidratante con extracto de frijol rojo",
    size: "100ml",
    price: 99000,
    image: "/red_bean.png",
    stock: 5,
  },
]

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { dispatch } = useCart()

  const addToCart = (product: (typeof featuredProducts)[0]) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(featuredProducts.length / 3)) % Math.ceil(featuredProducts.length / 3),
    )
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProducts.slice(slideIndex * 3, slideIndex * 3 + 3).map((product) => {
                  const isOutOfStock = product.stock <= 0

                  return (
                    <motion.div
                      key={product.id}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur group overflow-hidden">
                        <CardContent className="p-6">
                          <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={`${product.brand} ${product.name}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                          <div className="space-y-3">
                            <p className="text-sm font-medium text-lime-700">{product.brand}</p>
                            <h3 className="font-semibold text-base leading-tight">{product.name}</h3>
                            {isOutOfStock && <p className="text-sm font-medium text-red-500">Agotado</p>}
                            <p className="text-xl font-bold text-gray-600">
                              ${product.price.toLocaleString("es-CO")} COP
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                size="sm"
                                className={`w-full rounded-md ${
                                  isOutOfStock
                                    ? "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400"
                                    : "bg-blue-400 hover:bg-blue-500 text-white"
                                }`}
                                onClick={() => addToCart(product)}
                                disabled={isOutOfStock}
                              >
                                {isOutOfStock ? "Agotado" : "Agregar al Carrito"}
                              </Button>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
