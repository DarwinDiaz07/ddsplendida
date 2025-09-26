import type { Product, SkinType } from "@/types/types"

export const products = [
  {
    id: 1,
    name: "Madagascar Centella Light Cleansing Oil",
    brand: "SKIN1004",
    category: 'Limpiador',
    skinTypes: ["normal", "seca", "sensible"] as SkinType[],
    description:
      "Limpiador en aceite que elimina maquillaje, protector solar e impurezas sin resecar la piel. Formulado con Centella Asiática, calma y regenera mientras mantiene la piel suave y fresca. Ideal para todo tipo de piel, incluso sensible.",
    miniDescription:
      "Aceite limpiador suave con extracto de centella para una limpieza profunda sin irritación.",
    size: "200ml",
    price: 98000,
    stock: 15,
    images: ["/centella.png", "/centella.png", "/centella.png", "/centella.png"],
    cartImage: "/centella.png",
    benefits: [
      "Limpieza profunda sin irritación",
      "Extracto de centella calmante",
      "Ideal para piel sensible",
      "Fórmula libre de sulfatos",
    ],
    ingredients: [
      "Centella Asiática",
      "Aceites vegetales (girasol, oliva, jojoba)",
      "Extractos botánicos",
    ],
    usage: [
      "Aplica 2-3 bombas sobre la piel seca del rostro",
      "Masajea suavemente con movimientos circulares por 30-60 segundos",
      "Añade un poco de agua tibia para emulsionar",
      "Enjuaga completamente con agua tibia",
      "Continúa con tu limpiador a base de agua favorito",
    ],
  },
  {
    id: 2,
    name: "1025 Dokdo Cleanser",
    brand: "Round Lab",
    category: "Limpiador",
    skinTypes: ["grasa", "mixta", "normal"] as SkinType[],
    description:
      "Limpiador en espuma suave que elimina impurezas, exceso de sebo y residuos de maquillaje sin irritar. Formulado con agua marina de la isla Dokdo, rica en minerales que hidratan y revitalizan la piel, dejándola fresca y equilibrada.",
    miniDescription:
      "Limpiador espumoso con agua marina profunda para una limpieza refrescante.",
    size: "150ml",
    price: 69900,
    stock: 8,
    images: ["/dokdo.png", "/dokdo.png", "/dokdo.png"],
    cartImage: "/dokdo.png",
    benefits: [
      "Agua marina profunda de Dokdo",
      "Limpieza refrescante",
      "Equilibra la piel grasa",
      "Textura espumosa suave",
    ],
    ingredients: [
      "Agua marina profunda",
      "Pantenol",
      "Extractos botánicos",
    ],
  },
  {
    id: 3,
    name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
    brand: "SKIN1004",
    category: "Protector Solar",
    skinTypes: ["normal", "seca", "sensible", "mixta"] as SkinType[],
    description:
      "Protector solar ligero con textura sérum que protege la piel de los rayos UVA/UVB mientras hidrata y calma. Su fórmula con Centella Asiática y el exclusivo complejo Hyalu-Cica (Ácido Hialurónico + Cica) fortalece la barrera cutánea y previene la resequedad. No deja sensación grasa ni rastro blanco.",
    miniDescription:
      "Protector solar ligero con ácido hialurónico y centella para protección diaria.",
    size: "50ml",
    price: 95000,
    stock: 12,
    images: ["/sunscreen_centella.png", "/sunscreen_centella.png", "/sunscreen_centella.png"],
    cartImage: "/sunscreen_centella.png",
    benefits: [
      "SPF 50+ PA++++",
      "Ácido hialurónico hidratante",
      "Centella calmante",
      "Textura ligera no grasa",
    ],
    ingredients: [
      "Centella Asiática",
      "Complejo Hyalu-Cica",
      "Niacinamida",
      "Adenosina",
    ],
  },
  {
    id: 4,
    name: "Calming Moisture Barrier Cream",
    brand: "Pyunkang Yul",
    category: "Hidratante",
    skinTypes: ["seca", "sensible", "normal"] as SkinType[],
    description:
      "Crema hidratante calmante que refuerza la barrera cutánea y mantiene la hidratación por más tiempo. Formulada con Centella Asiática, té verde y árbol de té, alivia rojeces e irritaciones, mientras que el ceramida NP y el ácido hialurónico ayudan a retener la humedad y fortalecer la piel. Perfecta para piel sensible, mixta y con tendencia al acné.",
    miniDescription:
      "Crema hidratante calmante que fortalece la barrera cutánea.",
    size: "50ml",
    price: 85000,
    stock: 6,
    images: ["/pyunkang.png", "/pyunkang.png"],
    cartImage: "/pyunkang.png",
    benefits: [
      "Fortalece la barrera cutánea",
      "Fórmula calmante",
      "Ingredientes minimalistas",
      "Ideal para piel sensible",
    ],
    ingredients: [
      "Centella Asiática",
      "Extracto de té verde y árbol de té",
      "Ácido hialurónico ",
      "Ceramida NP",
    ],
  },
  {
    id: 5,
    name: "Relief Sun: Rice + Probiotics",
    brand: "Beauty of Joseon",
    category: "Protector Solar",
    skinTypes: ["sensible", "normal", "seca"] as SkinType[],
    description:
      "Protector solar de textura ligera tipo crema que combina alta protección UVA/UVB con nutrición e hidratación. Formulado con extracto de arroz (30%) y fermentos/probióticos, fortalece la barrera cutánea, aporta luminosidad natural y mejora la elasticidad de la piel. Su acabado es fresco y sin sensación pegajosa ni rastro blanco.",
    miniDescription:
      "Protector solar con agua de arroz y probióticos para piel sensible.",
    size: "50ml",
    price: 96900,
    stock: 10,
    images: ["/sunscreen_boj.png", "/sunscreen_boj.png", "/sunscreen_boj.png"],
    cartImage: "/sunscreen_boj.png",
    benefits: [
      "Agua de arroz nutritiva",
      "Probióticos para piel sensible",
      "SPF 50+ PA++++",
      "Textura cremosa suave"
    ],
    ingredients: [
      "Extracto de arroz (30%)",
      "Fermentos/probióticos",
      "Niacinamida",
      "Adenosina",
    ],
  },
  {
    id: 6,
    name: "Red Bean Water Gel",
    brand: "Beauty of Joseon",
    category: "Hidratante",
    skinTypes: ["grasa", "mixta", "normal"] as SkinType[],
    description:
      "Gel hidratante ligero diseñado especialmente para pieles grasas y mixtas. Su fórmula con extracto de frijol rojo (red bean) ayuda a controlar el exceso de sebo y purificar los poros, mientras que la niacinamida ilumina y mejora la textura de la piel. Su acabado es fresco, sin sensación pegajosa, ideal para quienes buscan hidratación sin pesadez.",
    miniDescription:
      "Gel hidratante ligero con extracto de frijol rojo para piel grasa.",
    size: "100ml",
    price: 99000,
    stock: 10,
    images: ["/red_bean.png", "/red_bean.png", "/red_bean.png"],
    cartImage: "/red_bean.png",
    benefits: [
      "Extracto de frijol rojo",
      "Textura gel ligera",
      "Ideal para piel grasa",
      "Hidratación sin grasa"
    ],
    ingredients: [
      "Extracto de frijol rojo",
      "Péptidos",
      "Niacinamida",
      "Extractos botánicos",
    ],
  },
] satisfies Product[];
