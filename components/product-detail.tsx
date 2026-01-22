"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import { ArrowLeft, Heart, Share2, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Product } from "@/types/types"


interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const { dispatch } = useCart()
  const router = useRouter()

  const addToCart = () => {
    const cartPayload = {
      ...product,
      image: product.images[0] || "/placeholder.svg", // Use first image as main image for cart
    }
    dispatch({ type: "ADD_ITEM", payload: cartPayload })
  }

  const isOutOfStock = product.stock <= 0

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <motion.div
        className="flex items-center gap-2 mb-8 text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="p-0 h-auto font-normal hover:bg-transparent hover:text-blue-400 transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver a productos
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de imágenes */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Imagen principal */}
          <div className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-lg">
            <Image
              src={product.images[selectedImageIndex] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Miniaturas */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-blue-400 shadow-md"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} vista ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Información del producto */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Marca y categoría */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {(Array.isArray(product.category) ? product.category : [product.category]).map((cat) => (
                <Badge key={cat} variant="secondary" className="bg-accent text-accent-foreground">
                  {cat}
                </Badge>
              ))}
              <span className="text-sm text-muted-foreground">{product.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)} className="p-2">
                <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 cursor-pointer"
                onClick={() => {
                  navigator.clipboard
                    .writeText(window.location.href)
                    .then(() => {
                      alert("✅ Enlace copiado al portapapeles")
                    })
                    .catch(() => {
                      alert("❌ No se pudo copiar el enlace")
                    })
                }}
              >
                <Share2 className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* Marca */}
          <div>
            <p className="text-lg font-medium text-blue-400 mb-1">{product.brand}</p>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4 text-balance">{product.name}</h1>
          </div>

          {/* Precio */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-foreground">${product.price.toLocaleString("es-CO")} COP</span>
            {product.stock > 0 && product.stock <= 2 && (
              <Badge variant="destructive" className="bg-orange-100 text-orange-800">
                ¡Solo quedan {product.stock}!
              </Badge>
            )}
          </div>

          {/* Descripción */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Beneficios */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Beneficios clave</h3>
            <ul className="space-y-2">
              {product.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredientes principales */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3">Ingredientes principales</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Modo de uso */}
          {product.usage && product.usage.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-base mb-3 text-foreground">Modo de uso</h4>
              <ol className="space-y-2">
                {product.usage.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tipos de piel */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Ideal para</h3>
            <div className="flex flex-wrap gap-2">
              {product.skinTypes.map((skinType) => (
                <Badge key={skinType} variant="outline" className="capitalize">
                  Piel {skinType}
                </Badge>
              ))}
            </div>
          </div>

          {/* Botón de agregar al carrito */}
          <Card className="border-0 shadow-sm bg-muted/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Estado:</span>
                <span
                  className={`font-semibold flex items-center gap-2 ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {product.stock > 0 ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Disponible
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Agotado
                    </>
                  )}
                </span>
              </div>

              <Button
                className={`w-full rounded-full py-6 text-lg font-semibold cursor-pointer ${
                  isOutOfStock
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400"
                    : "bg-blue-400 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl"
                }`}
                onClick={addToCart}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? "Producto Agotado" : "Agregar al Carrito"}
              </Button>

              {!isOutOfStock && (
                <p className="text-sm text-muted-foreground text-center mt-3">
                  Envíos a Barranquilla • Entrega en 2-3 días hábiles
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
