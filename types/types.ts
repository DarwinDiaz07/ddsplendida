
export type SkinType = 'normal' | 'seca' | 'sensible' | 'grasa' | 'mixta';
export type ProductCategory = 'Limpiador' | 'Hidratante' | 'Protector Solar';

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: ProductCategory;
  skinTypes: SkinType[];
  description: string;
  miniDescription: string;
  size: string;
  price: number;
  stock: number;
  images: [string, ...string[]];
  cartImage: string;
  ingredients: string[];
  usage?: string[];
  benefits?: string[];
}
