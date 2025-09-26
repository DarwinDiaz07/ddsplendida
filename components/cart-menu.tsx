"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, X, ShoppingBag, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import { openWhatsAppCheckout } from "@/lib/whatsapp"
import { toast } from "sonner"

interface CartMenuProps {
  isOpen: boolean
  onClose: () => void
}



export function CartMenu({ isOpen, onClose }: CartMenuProps) {
  const { state, dispatch } = useCart()

  if (!isOpen) return null

    const updateQuantity = (id: number, quantity: number) => {
      const next = Math.max(1, quantity) // evita 0 o negativos
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: next } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const handleWhatsAppCheckout = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_STORE_PHONE
    if (!phoneNumber) {
      toast.error("Número de WhatsApp no configurado")
      return
    }

    try {
      openWhatsAppCheckout(state.items, phoneNumber)
      toast.success("Abriendo WhatsApp para finalizar tu pedido")
    } catch (error) {
      toast.error("Error al abrir WhatsApp")
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
            <CardTitle className="text-xl font-serif">Carrito de Compras</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Tu carrito está vacío</h3>
                <p className="text-muted-foreground">Agrega algunos productos para comenzar</p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-muted/30 rounded-lg p-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted">
                      <Image src={item.cartImage || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-primary">{item.brand}</p>
                      <p className="text-sm font-semibold">${item.price}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>

                      <Badge variant="secondary" className="min-w-[2rem] justify-center">
                        {item.quantity}
                      </Badge>

                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={handleWhatsAppCheckout}
                disabled={state.items.length === 0}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Finalizar por WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Vaciar Carrito
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
