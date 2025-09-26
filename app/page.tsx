"use client"

import { SkincareHeader } from "@/components/skincare-header"
import { SkincareFooter } from "@/components/skincare-footer"
import { HeroBlobs } from "@/components/hero-blobs"
import { BrandMarquee } from "@/components/brand-marquee"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Shield, MessageCircle, ShieldCheck, CreditCard, Search, Heart } from "lucide-react"
import Link from "next/link"

const whatsappMessage = encodeURIComponent("Hola, quiero asesoría para mi rutina.")
const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_STORE_PHONE}?text=${whatsappMessage}`

const floatingBadges = [
  { text: "Hidratación", x: "10%", y: "20%" },
  { text: "Piel sensible", x: "85%", y: "15%" },
  { text: "SPF", x: "15%", y: "70%" },
  { text: "Dermatológico", x: "80%", y: "60%" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4F7] to-white">
      <SkincareHeader />

      {/* Animated Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <HeroBlobs />

        {/* Floating Badges */}
        {floatingBadges.map((badge, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-muted-foreground shadow-sm"
            style={{ left: badge.x, top: badge.y }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {badge.text}
          </motion.div>
        ))}

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skincare Coreano
            <motion.span
              className="block text-blue-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Auténtico
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Descubre los secretos de la belleza coreana con productos 100% originales y asesoría personalizada para tu
            rutina perfecta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-blue-400 hover:bg-blue-500 text-white">
                <Link href="/products">Ver Productos</Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                  "0 0 0 10px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Asesoría por WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Featured Carousel */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Productos Destacados</h2>
          <p className="text-muted-foreground">Los favoritos de nuestros clientes</p>
        </motion.div>
        <FeaturedCarousel />
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">¿Cómo realizar mi compra?</h2>
          <p className="text-muted-foreground">Tu rutina perfecta en 3 simples pasos</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "Elige tu rutina",
              description: "Explora nuestro catálogo y encuentra los productos perfectos para tu tipo de piel",
            },
            {
              icon: MessageCircle,
              title: "Escríbenos por WhatsApp",
              description: "Recibe asesoría personalizada de nuestros expertos en skincare coreano",
            },
            {
              icon: Heart,
              title: "Recíbelo en casa",
              description: "Disfruta de envíos rápidos y seguros a Barranquilla",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-sm bg-white/50 backdrop-blur text-center h-full">
                <CardContent className="p-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="h-8 w-8 text-red-400" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* USPs with Motion */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "100% Originales",
              description: "Importados directamente de Corea del Sur",
            },
            {
              icon: MessageCircle,
              title: "Asesoría WhatsApp",
              description: "Consulta personalizada para tu tipo de piel",
            },
            {
              icon: ShieldCheck,
              title: "Dermatológicamente probado",
              description: "Productos seguros y avalados para el cuidado de tu piel",
            },
            {
              icon: CreditCard,
              title: "Pagos Seguros",
              description: "Múltiples métodos de pago disponibles",
            },
          ].map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-0 shadow-sm bg-white/50 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    <usp.icon className="h-8 w-8 text-red-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{usp.title}</h3>
                  <p className="text-sm text-muted-foreground">{usp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      

      <SkincareFooter />
    </div>
  )
}
