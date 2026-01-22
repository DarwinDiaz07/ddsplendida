
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { SkinType, ProductCategory } from "@/types/types"

const SKIN_TYPE_LABELS: Record<SkinType, string> = {
  normal: "Normal",
  seca: "Seca",
  grasa: "Grasa",
  mixta: "Mixta",
  sensible: "Sensible",
};

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  Limpiador: "Limpiadores",
  Hidratante: "Hidratantes",
  "Protector Solar": "Protectores Solares",
  Serum: "Sérums",
  Ampolla: "Ampollas",
  Tratamiento: "Tratamientos",
  Set: "Sets",
  Aclarante: "Aclarantes",
};

const SKIN_TYPE_OPTIONS = Object.entries(SKIN_TYPE_LABELS) as [SkinType, string][];
const CATEGORY_OPTIONS = Object.entries(CATEGORY_LABELS) as [ProductCategory, string][];

interface FilterState {
  category: ProductCategory | "todos"
  skinTypes: SkinType[]
  search: string
}

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

const CONFIG = {
  showSkinFilter: false,
} as const;

const INITIAL_FILTERS: FilterState = {
  category: "todos",
  skinTypes: [],
  search: "",
};

// ============================================
// MAIN COMPONENT
// ============================================

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSkinTypeChange = (skinType: SkinType, checked: boolean) => {
    const updatedSkinTypes = checked
      ? [...filters.skinTypes, skinType]
      : filters.skinTypes.filter((type) => type !== skinType);

    updateFilters({ skinTypes: updatedSkinTypes });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Search */}
        <SearchFilter 
          value={filters.search} 
          onChange={(search) => updateFilters({ search })} 
        />

        {/* Category */}
        <CategoryFilter 
          value={filters.category} 
          onChange={(category) => updateFilters({ category })} 
        />

        {/* Skin Type */}
        {CONFIG.showSkinFilter && (
          <SkinTypeFilter
            selected={filters.skinTypes}
            onChange={handleSkinTypeChange}
          />
        )}
      </div>
    </div>
  );
}

// ============================================
// SUB-COMPONENTS
// ============================================

function SearchFilter({ value, onChange }: { 
  value: string; 
  onChange: (value: string) => void 
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">Buscar</Label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar productos..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 border-gray-200 focus:border-blue-300 focus:ring-blue-300 text-sky-500 bg-background"
        />
      </div>
    </div>
  );
}

function CategoryFilter({ value, onChange }: { 
  value: ProductCategory | "todos"; 
  onChange: (value: ProductCategory | "todos") => void 
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">Categoría</Label>
      <Select value={value} onValueChange={(val) => onChange(val as ProductCategory | "todos")}>
        <SelectTrigger className="border-gray-200 focus:border-blue-300 focus:ring-blue-300 text-foreground">
          <SelectValue placeholder="Seleccionar categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          {CATEGORY_OPTIONS.map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function SkinTypeFilter({ selected, onChange }: { 
  selected: SkinType[]; 
  onChange: (skinType: SkinType, checked: boolean) => void 
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">Tipo de Piel</Label>
      <div className="space-y-2">
        {SKIN_TYPE_OPTIONS.map(([id, label]) => (
          <div key={id} className="flex items-center space-x-2">
            <Checkbox
              id={id}
              checked={selected.includes(id)}
              onCheckedChange={(checked) => onChange(id, checked as boolean)}
              className="border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
            />
            <Label htmlFor={id} className="text-sm text-gray-600 cursor-pointer">
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}