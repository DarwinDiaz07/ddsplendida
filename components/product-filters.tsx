"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

interface FilterState {
  category: string
  skinTypes: string[]
  search: string
}

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "todos",
    skinTypes: [],
    search: "",
  })

  const categories = [
    { value: "todos", label: "Todos" },
    { value: "limpiador", label: "Limpiadores" },
    { value: "hidratante", label: "Hidratantes" },
    { value: "protector solar", label: "Protectores Solares" }, // Cambiando "Protector Solar" a "Protectores Solares"
  ]

  const skinTypes = [
    { id: "normal", label: "Normal" },
    { id: "seca", label: "Seca" },
    { id: "grasa", label: "Grasa" },
    { id: "mixta", label: "Mixta" },
    { id: "sensible", label: "Sensible" },
  ]

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleSkinTypeChange = (skinType: string, checked: boolean) => {
    const newSkinTypes = checked
      ? [...filters.skinTypes, skinType]
      : filters.skinTypes.filter((type) => type !== skinType)

    updateFilters({ skinTypes: newSkinTypes })
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search Bar */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Buscar</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar productos..."
              value={filters.search}
              onChange={(e) => updateFilters({ search: e.target.value })}
              className="pl-10 border-gray-200 focus:border-blue-300s focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
    
        {/* Category Filter */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Categoría</Label>
          <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value })}
            >
            <SelectTrigger className="border-gray-200 focus:border-blue-300 focus:blue-300">
              <SelectValue placeholder="Seleccionar categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>
    </div>
  )
}
