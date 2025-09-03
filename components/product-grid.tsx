"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"

const products = [
  {
    id: 1,
    name: "Madagascar Centella Light Cleansing Oil",
    brand: "SKIN1004",
    category: "Limpiador", // Manteniendo categoría Limpiador
    skinTypes: ["normal", "seca", "sensible"],
    description: "Aceite limpiador suave con extracto de centella para una limpieza profunda sin irritación",
    size: "200ml",
    price: 98000,
    stock: 15,
    image: "/centella.png",
  },
  {
    id: 2,
    name: "1025 Dokdo Cleanser",
    brand: "Round Lab",
    category: "Limpiador", // Manteniendo categoría Limpiador
    skinTypes: ["grasa", "mixta", "normal"],
    description: "Limpiador espumoso con agua marina profunda para una limpieza refrescante",
    size: "150ml",
    price: 69900,
    stock: 8,
    image: "/dokdo.png",
  },
  {
    id: 3,
    name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
    brand: "SKIN1004",
    category: "Protector Solar", // Manteniendo categoría Protector Solar
    skinTypes: ["normal", "seca", "sensible", "mixta"],
    description: "Protector solar ligero con ácido hialurónico y centella para protección diaria",
    size: "50ml",
    price: 95000,
    stock: 12,
    image: "/sunscreen_centella.png",
  },
  {
    id: 4,
    name: "Calming Moisture Barrier Cream",
    brand: "Pyunkang Yul",
    category: "Hidratante", // Cambiando de "Hidratante" a "Hidratante" para consistencia
    skinTypes: ["seca", "sensible", "normal"],
    description: "Crema hidratante calmante que fortalece la barrera cutánea",
    size: "50ml",
    price: 85000,
    stock: 6,
    image: "/pyunkang.png",
  },
  {
    id: 5,
    name: "Relief Sun: Rice + Probiotics",
    brand: "Beauty of Joseon",
    category: "Protector Solar", // Manteniendo categoría Protector Solar
    skinTypes: ["sensible", "normal", "seca"],
    description: "Protector solar con agua de arroz y probióticos para piel sensible",
    size: "50ml",
    price: 96900,
    stock: 10, // Producto agotado para demostrar funcionalidad
    image: "/sunscreen_boj.png",
  },
  {
    id: 6,
    name: "Red Bean Water Gel",
    brand: "Beauty of Joseon",
    category: "Hidratante", // Cambiando de "Hidratante" a "Hidratante" para consistencia
    skinTypes: ["grasa", "mixta", "normal"],
    description: "Gel hidratante ligero con extracto de frijol rojo para piel grasa",
    size: "100ml",
    price: 99000,
    stock: 10,
    image: "/red_bean.png",
  },
]

interface FilterState {
  category: string
  skinTypes: string[]
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
