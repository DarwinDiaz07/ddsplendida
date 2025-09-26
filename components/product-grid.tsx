"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { products } from "@/resources/products"
import { SkinType } from "@/types/types"

interface FilterState {
  category: string
  skinTypes: SkinType[]
  search: string
}

export function ProductGrid() {
  const [filters, setFilters] = useState<FilterState>({
    category: "todos",
    skinTypes: [],
    search: "",
  })

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter - Actualizando lógica para las 3 categorías solicitadas
      if (filters.category !== "todos") {
        const categoryMap: { [key: string]: string } = {
          limpiador: "Limpiador",
          hidratante: "Hidratante",
          "protector solar": "Protector Solar",
        }

        const expectedCategory = categoryMap[filters.category.toLowerCase()]
        if (product.category !== expectedCategory) {
          return false
        }
      }

      // Skin type filter - Activando funcionalidad de filtro por tipo de piel
      if (filters.skinTypes.length > 0) {
        const hasMatchingSkinType = filters.skinTypes.some((skinType) => product.skinTypes.includes(skinType))
        if (!hasMatchingSkinType) return false
      }

      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const matchesName = product.name.toLowerCase().includes(searchTerm)
        const matchesBrand = product.brand.toLowerCase().includes(searchTerm)
        if (!matchesName && !matchesBrand) return false
      }

      return true
    })
  }, [filters])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Nuestra Colección</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros productos cuidadosamente seleccionados de las mejores marcas coreanas
          </p>
        </div>

        <ProductFilters onFilterChange={setFilters} />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No se encontraron productos que coincidan con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
