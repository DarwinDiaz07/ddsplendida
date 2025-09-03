export interface CartItem {
  id: number
  name: string
  brand: string
  price: number
  quantity: number
  image?: string
}

const CURRENCY_LOCALE = "es-CO"

function formatMoney(n: number, currency = "COP") {
  return n.toLocaleString(CURRENCY_LOCALE, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  })
}

export function buildWhatsAppMessage(items: CartItem[], currency = "COP"): string {
  const header = " *Nuevo pedido — dd.splendida*\n\n"

  const itemsList = items
    .map((item) => {
      const subtotal = item.price * item.quantity
      return `• ${item.name} x${item.quantity} — ${formatMoney(subtotal, currency)}`
    })
    .join("\n")

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalLine = `\n\n*Total:* ${formatMoney(total, currency)}`

  return header + itemsList + totalLine
}

export function openWhatsAppCheckout(items: CartItem[], phoneNumber: string) {
  const phone = phoneNumber?.trim() || process.env.NEXT_PUBLIC_STORE_PHONE
  const message = buildWhatsAppMessage(items)
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`

  window.open(whatsappUrl, "_blank")
}
