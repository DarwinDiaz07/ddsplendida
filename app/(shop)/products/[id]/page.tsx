import { SkincareHeader } from "@/components/skincare-header"
import { SkincareFooter } from "@/components/skincare-footer"
import { ProductDetail } from "@/components/product-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { products } from "@/resources/products"

type RouteParams = { id: string}
interface ProductPageProps {
  params: Promise<RouteParams>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === Number.parseInt(id, 10))

  if (!product) {
    return {
      title: "Producto no encontrado",
    }
  }

  return {
    title: `${product.name} - ${product.brand} | dd.splendida`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === Number.parseInt(id, 10))

  if (!product) notFound()

  return (
    <div className="min-h-screen bg-background">
      <SkincareHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetail product={product} />
      </main>
      <SkincareFooter />
    </div>
  )
}
