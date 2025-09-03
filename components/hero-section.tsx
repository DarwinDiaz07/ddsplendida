import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-muted to-card py-20 px-4 sm:px-6 lg:px-8 bg-card border-border">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Descubre el Secreto de la
            <span className="block text-[rgba(0,71,159,1)]">Belleza Coreana</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Productos premium de skincare coreano cuidadosamente seleccionados para transformar tu rutina de cuidado facial
          </p>
          <Button
            size="lg"
            className="hover:bg-primary/90 px-8 py-3 text-lg rounded-full text-[rgba(172,0,0,1)] bg-white"
          >
            Explorar Productos
          </Button>
        </div>
      </div>
    </section>
  )
}
