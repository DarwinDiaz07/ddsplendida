import { SkincareHeader } from "@/components/skincare-header"
import { ProductGrid } from "@/components/product-grid"
import { SkincareFooter } from "@/components/skincare-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos de Skincare Coreano | dd.splendida",
  description:
    "Descubre nuestra colección completa de productos de skincare coreano. Limpiadores, protectores solares, cremas hidratantes y más de las mejores marcas.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SkincareHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          
          
        </div>
        <ProductGrid />
      </main>
      <SkincareFooter />
    </div>
  )
}
