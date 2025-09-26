import { Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SkincareFooter() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-4 text-[rgba(0,71,159,1)]">dd.splendida</h3>
            <p className="text-muted-foreground mb-4">Tu destino para los mejores productos de skincare coreano</p>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4 text-center">Síguenos</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/dd.splendida?igsh=azNybGd2Z2lxanRt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="hover:text-gray">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4 text-center">Métodos de Pago</h4>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-12 h-6 rounded flex items-center justify-center bg-blue-800">
                <span className="text-xs font-bold text-white">Nequi</span>
              </div>
              <div className="w-12 h-6 rounded flex items-center justify-center bg-white">
                <span className="text-xs font-bold text-blue-700">PayPal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">© 2025 dd.splendida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
