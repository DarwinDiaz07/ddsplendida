"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/resources/products"

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { dispatch } = useCart()

  const addToCart = (product: (typeof products)[0]) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(products.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3),
    )
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(products.length / 3) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(slideIndex * 3, slideIndex * 3 + 3).map((product) => {
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
                          <Link href={`/products/${product.id}`} className="block">
                            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg cursor-pointer">
                              <Image
                                src={product.cartImage || "/placeholder.svg"}
                                alt={`${product.brand} ${product.name}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            </div>
                          </Link>
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
