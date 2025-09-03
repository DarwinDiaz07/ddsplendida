"use client"

import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { CartMenu } from "./cart-menu"
import Link from "next/link"

export function SkincareHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useCart()

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-serif font-bold text-[rgba(0,71,159,1)] hover:opacity-80 transition-opacity">
                  dd.splendida
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-blue-300 transition-colors">
                Inicio
              </Link>
              <Link href="/products" className="text-foreground hover:text-blue-300 transition-colors">
                Productos
              </Link>
              
            </nav>

            {/* Shopping Cart */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full text-xs flex items-center justify-center bg-[rgba(172,0,0,1)] text-white">
                    {state.itemCount}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                  Productos
                </Link>
                <Link href="#contacto" className="text-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartMenu isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
