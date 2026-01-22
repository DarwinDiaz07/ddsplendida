import type { Product, SkinType, ProductCategory} from "@/types/types"

export const products = [
  {
    id: 1,
    name: "Madagascar Centella Light Cleansing Oil",
    brand: "SKIN1004",
    category: "Limpiador" as ProductCategory,
    skinTypes: ["normal", "seca", "sensible"] as SkinType[],
    description:
      "Limpiador en aceite que elimina maquillaje, protector solar e impurezas sin resecar la piel. Formulado con Centella Asiática, calma y regenera mientras mantiene la piel suave y fresca. Ideal para todo tipo de piel, incluso sensible.",
    miniDescription:
      "Aceite limpiador suave con extracto de centella para una limpieza profunda sin irritación.",
    size: "200ml",
    price: 89900,
    stock: 1,
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
    category: "Limpiador" as ProductCategory,
    skinTypes: ["grasa", "mixta", "normal"] as SkinType[],
    description:
      "Limpiador en espuma suave que elimina impurezas, exceso de sebo y residuos de maquillaje sin irritar. Formulado con agua marina de la isla Dokdo, rica en minerales que hidratan y revitalizan la piel, dejándola fresca y equilibrada.",
    miniDescription:
      "Limpiador espumoso con agua marina profunda para una limpieza refrescante.",
    size: "150ml",
    price: 59900,
    stock: 10,
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
    name: "Twin Pack Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
    brand: "SKIN1004",
    category: ["Protector Solar", "Set"] as ProductCategory[],
    skinTypes: ["normal", "seca", "sensible", "mixta"] as SkinType[],
    description:
      "Protector solar ligero con textura sérum que protege la piel de los rayos UVA/UVB mientras hidrata y calma. Su fórmula con Centella Asiática y el exclusivo complejo Hyalu-Cica (Ácido Hialurónico + Cica) fortalece la barrera cutánea y previene la resequedad. No deja sensación grasa ni rastro blanco.",
    miniDescription:
      "Protector solar ligero con ácido hialurónico y centella para protección diaria.",
    size: "50ml + 50ml",
    price: 153000,
    stock: 1,
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
    category: "Hidratante" as ProductCategory,
    skinTypes: ["seca", "sensible", "normal"] as SkinType[],
    description:
      "Crema hidratante calmante que refuerza la barrera cutánea y mantiene la hidratación por más tiempo. Formulada con Centella Asiática, té verde y árbol de té, alivia rojeces e irritaciones, mientras que el ceramida NP y el ácido hialurónico ayudan a retener la humedad y fortalecer la piel. Perfecta para piel sensible, mixta y con tendencia al acné.",
    miniDescription:
      "Crema hidratante calmante que fortalece la barrera cutánea.",
    size: "50ml",
    price: 69900,
    stock: 2,
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
    category: "Protector Solar" as ProductCategory,
    skinTypes: ["sensible", "normal", "seca"] as SkinType[],
    description:
      "Protector solar de textura ligera tipo crema que combina alta protección UVA/UVB con nutrición e hidratación. Formulado con extracto de arroz (30%) y fermentos/probióticos, fortalece la barrera cutánea, aporta luminosidad natural y mejora la elasticidad de la piel. Su acabado es fresco y sin sensación pegajosa ni rastro blanco.",
    miniDescription:
      "Protector solar con agua de arroz y probióticos para piel sensible.",
    size: "50ml",
    price: 80900,
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
    category: "Hidratante" as ProductCategory,
    skinTypes: ["grasa", "mixta", "normal"] as SkinType[],
    description:
      "Gel hidratante ligero diseñado especialmente para pieles grasas y mixtas. Su fórmula con extracto de frijol rojo (red bean) ayuda a controlar el exceso de sebo y purificar los poros, mientras que la niacinamida ilumina y mejora la textura de la piel. Su acabado es fresco, sin sensación pegajosa, ideal para quienes buscan hidratación sin pesadez.",
    miniDescription:
      "Gel hidratante ligero con extracto de frijol rojo para piel grasa.",
    size: "100ml",
    price: 84900,
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
  {
    id: 7,
    name: "Vitamin C Booster Shot",
    brand: "Arencia",
    category: ["Aclarante", "Tratamiento"] as ProductCategory[],
    skinTypes: ["seca", "normal", "mixta", "grasa"] as SkinType[],
    description:
      "Sérum concentrado de alta potencia con Vitamina C pura y derivados estabilizados (50,000ppm de 3-O-Ethyl Ascorbic Acid) que ilumina visiblemente el tono de piel y combate las manchas oscuras. Enriquecido con Glutatión para proteger contra el estrés ambiental, Niacinamida para refinar la textura y Pantenol + Alantoína para calmar e hidratar. Su textura gel-crema ligera se absorbe rápidamente sin dejar sensación pegajosa.",
    miniDescription:
      "Sérum iluminador con Vitamina C pura y Glutatión para manchas oscuras.",
    size: "30ml",
    price: 76900,
    stock: 10,
    images: ["/arencia_vitc.png", "/arencia_vitc.png", "/arencia_vitc.png"],
    cartImage: "/arencia_vitc.png",
    benefits: [
      "Vitamina C pura + derivados estables",
      "Ilumina y unifica el tono",
      "Glutatión antioxidante",
      "Textura ligera no pegajosa"
    ],
    ingredients: [
      "3-O-Ethyl Ascorbic Acid",
      "Vitamina C pura",
      "Glutatión",
      "Niacinamida",
      "Pantenol",
      "Alantoína",
      "Vitamina E"
    ],
  },
  {
    id: 8,
    name: "Bio Watery Sun Cream SPF50+ PA++++",
    brand: "Tocobo",
    category: "Protector Solar" as ProductCategory,
    skinTypes: ["seca", "normal", "mixta", "grasa", "sensible"] as SkinType[],
    description:
      "Protector solar químico vegano con textura acuosa y ligera que ofrece alta protección UV (SPF50+ PA++++). Formulado con extracto de frijol mungo rico en antioxidantes, ácido hialurónico para hidratación profunda y niacinamida para iluminar. Su acabado no graso ni pegajoso lo hace ideal para uso diario, bajo maquillaje o como último paso del skincare. Certificación EWG Green Grade, hipoalergénico y apto para arrecifes.",
    miniDescription:
      "Protector solar acuoso SPF50+ con frijol mungo e hialurónico.",
    size: "19g",
    price: 80000,
    stock: 15,
    images: ["/tocobo_yellow.png", "/tocobo_yellow.png", "/tocobo_yellow.png"],
    cartImage: "/tocobo_yellow.png",
    benefits: [
      "SPF50+ PA++++ alta protección",
      "Textura acuosa ligera",
      "Sin white cast",
      "Vegano y reef-safe"
    ],
    ingredients: [
      "Extracto de frijol mungo",
      "Ácido hialurónico",
      "Niacinamida",
      "Extracto de algodón",
      "Vitamina E"
    ],
  },
  {
    id: 9,
    name: "The Real Noni Energy Ampoule",
    brand: "Celimax",
    category: ["Ampolla", "Aclarante"] as ProductCategory[],
    skinTypes: ["seca", "normal", "mixta", "sensible"] as SkinType[],
    description:
      "Ampolla best-seller con 71.77% de extracto de fruta Noni, un superalimento con más de 200 tipos de vitaminas y minerales que calma, hidrata y revitaliza la piel. Contiene Nano Pantenol para fortalecer la barrera cutánea, Colágeno Vegano Fermentado para firmeza, y Adenosina para combatir líneas finas. Su textura fresca y ligera se absorbe rápidamente, ideal para pieles irritadas, con rojeces o tono desigual. Dermatológicamente testado e hipoalergénico.",
    miniDescription:
      "Ampolla calmante con 71.77% de extracto de Noni para piel radiante.",
    size: "30ml",
    price: 89900,
    stock: 12,
    images: ["/celimax_noni.png", "/celimax_noni.png", "/celimax_noni.png"],
    cartImage: "/celimax_noni.png",
    benefits: [
      "71.77% extracto de Noni",
      "Calma rojeces e irritación",
      "Hidratación profunda",
      "Mejora luminosidad"
    ],
    ingredients: [
      "Extracto de Noni (71.77%)",
      "Aceite de semilla de Noni",
      "Pantenol",
      "Adenosina",
      "Aceite de romero",
      "Colágeno vegano"
    ],
  },
  {
    id: 10,
    name: "Vitamin Illuminating Serum",
    brand: "Eqqualberry",
    category: ["Aclarante", "Serum"] as ProductCategory[],
    skinTypes: ["seca", "normal", "mixta", "sensible"] as SkinType[],
    description:
      "Sérum iluminador formulado con 40% de agua de Acerola, conocida como 'el rey de la Vitamina C' con 8 veces más vitamina C que los limones. Sistema de Control de Melanina en 3 pasos que actúa sobre manchas potenciales, emergentes y visibles. Enriquecido con Niacinamida, Arbutina, Ácido Tranexámico, 5 tipos de ácido hialurónico y Ceramidas para una piel luminosa, hidratada y con barrera fortalecida. Apto incluso para pieles sensibles.",
    miniDescription:
      "Sérum con 40% Acerola y sistema anti-manchas de 3 pasos.",
    size: "30ml",
    price: 85000,
    stock: 8,
    images: ["/equalberry_vitc.png", "/equalberry_vitc.png", "/equalberry_vitc.png"],
    cartImage: "/equalberry_vitc.png",
    benefits: [
      "40% agua de Acerola",
      "Sistema anti-manchas 3 pasos",
      "5 tipos de ácido hialurónico",
      "Apto para piel sensible"
    ],
    ingredients: [
      "Agua de Acerola (40%)",
      "Niacinamida",
      "Arbutina",
      "Ácido tranexámico",
      "Ceramida NP",
      "5 tipos de ácido hialurónico",
      "Extracto de cúrcuma"
    ],
  },
  {
    id: 11,
    name: "Cotton Soft Sun Stick SPF50+ PA++++",
    brand: "Tocobo",
    category: "Protector Solar" as ProductCategory,
    skinTypes: ["grasa", "mixta", "normal"] as SkinType[],
    description:
      "Sun stick con acabado mate ultra-suave tipo algodón, diseñado especialmente para pieles grasas y propensas al acné. Contiene Silica para control de sebo, Herb AC Complex (4 hierbas antiinflamatorias) para calmar la piel, y extracto de algodón para hidratación sin grasa. Su formato en barra es perfecto para reaplicaciones durante el día, sin dejar white cast ni sensación pegajosa. Vegano, cruelty-free y alta protección UV.",
    miniDescription:
      "Sun stick mate con control de sebo para piel grasa.",
    size: "19g",
    price: 76900,
    stock: 20,
    images: ["/tocobo_blue.png", "/tocobo_blue.png", "/tocobo_blue.png"],
    cartImage: "/tocobo_blue.png",
    benefits: [
      "Acabado mate suave",
      "Control de sebo con Silica",
      "Herb AC Complex calmante",
      "Formato portátil"
    ],
    ingredients: [
      "Silica",
      "Extracto de algodón",
      "Herb AC Complex",
      "Vitamina E",
      "Extracto de cúrcuma",
      "Extracto de aloe"
    ],
  },
  {
    id: 12,
    name: "Niacinamide 20 Serum",
    brand: "Jumiso",
    category: ["Aclarante", "Serum"] as ProductCategory[],
    skinTypes: ["grasa", "mixta", "normal", "sensible"] as SkinType[],
    description:
      "Sérum de alta potencia con 20% Niacinamida, Ácido Tranexámico (TXA) y Glutatión para un tratamiento intensivo de hiperpigmentación y poros. Clínicamente probado: -27.7% en manchas y -20% en rojeces en 2 semanas. El Triple Complejo Centella (Asiaticoside, Madecassic Acid, Asiatic Acid) calma irritaciones y fortalece la barrera. Contiene ácido hialurónico para hidratación. Sin fragancia, sin colorantes artificiales, ideal para pieles sensibles y con acné.",
    miniDescription:
      "Sérum 20% Niacinamida + TXA + Glutatión para manchas y poros.",
    size: "40ml",
    price: 89900,
    stock: 14,
    images: ["/jumiso_niacin.png", "/jumiso_niacin.png", "/jumiso_niacin.png"],
    cartImage: "/jumiso_niacin.png",
    benefits: [
      "20% Niacinamida alta concentración",
      "TXA + Glutatión anti-manchas",
      "Triple Complejo Centella",
      "Sin fragancia, apto sensible"
    ],
    ingredients: [
      "Niacinamida (20%)",
      "Ácido tranexámico",
      "Glutatión",
      "Triple Centella Complex",
      "Ácido hialurónico",
      "Alantoína"
    ],
  },
  {
    id: 13,
    name: "345 Relief Cream",
    brand: "Dr. Althea",
    category: "Hidratante" as ProductCategory,
    skinTypes: ["grasa", "mixta", "sensible"] as SkinType[],
    description:
      "Crema gel regeneradora diseñada para el cuidado post-acné con la fórmula 345: 3 ingredientes para manchas (Niacinamida, Resveratrol, Hibisco), 4 para nutrición (Beta-glucano, Ácido hialurónico, Primrose, Coralina) y 5 para calmar (Centella, Gardenia, Heartleaf, Lavanda, Ceramida NP). Textura ligera tipo ungüento que no obstruye poros (no comedogénico testado). Ideal para pieles sensibles, propensas al acné y con barrera dañada. Vegano y libre de fragancias artificiales.",
    miniDescription:
      "Crema post-acné con fórmula 345 para calmar y reparar.",
    size: "50ml",
    price: 105000,
    stock: 10,
    images: ["/althea_345.png", "/althea_345.png", "/althea_345.png"],
    cartImage: "/althea_345.png",
    benefits: [
      "Fórmula 345 completa",
      "No comedogénico testado",
      "Repara barrera cutánea",
      "Textura ligera tipo gel"
    ],
    ingredients: [
      "Niacinamida",
      "Resveratrol",
      "Pantenol",
      "Ceramida NP",
      "Centella asiática",
      "Beta-glucano",
      "Ácido hialurónico"
    ],
  },
  {
    id: 14,
    name: "The Vita-A Retinal Shot Tightening Booster",
    brand: "Celimax",
    category: "Tratamiento" as ProductCategory,
    skinTypes: ["normal", "mixta", "grasa"] as SkinType[],
    description:
      "Booster anti-edad de alta potencia con 0.1% Retinal liposomizado (forma avanzada del retinol que actúa más rápido) y 3% Matrixyl (péptidos). La tecnología A-Shot™ con micropartículas 16 veces más pequeñas que los poros mejora la absorción profunda. Clínicamente probado para mejorar arrugas y reducir poros. Contiene 1% Pantenol y Niacinamida para minimizar irritación. Solo uso nocturno, requiere protector solar al día siguiente.",
    miniDescription:
      "Booster 0.1% Retinal + Matrixyl para arrugas y poros.",
    size: "15ml",
    price: 85000,
    stock: 6,
    images: ["/celimax_retinal_shot.png", "/celimax_retinal_shot.png", "/celimax_retinal_shot.png"],
    cartImage: "/celimax_retinal_shot.png",
    benefits: [
      "0.1% Retinal liposomizado",
      "3% Matrixyl péptidos",
      "Tecnología A-Shot™",
      "Mejora arrugas y poros"
    ],
    ingredients: [
      "Retinal (0.1%)",
      "Matrixyl 3000",
      "Niacinamida",
      "Pantenol (1%)",
      "Adenosina",
      "Vitamina E",
      "Complejo de péptidos"
    ],
  },
  {
    id: 15,
    name: "Glass Skin Duo",
    brand: "Axis-Y",
    category: "Set" as ProductCategory,
    skinTypes: ["seca", "normal", "mixta", "sensible"] as SkinType[],
    description:
      "Set dúo best-seller que incluye el Dark Spot Correcting Glow Serum (50ml) con 5% Niacinamida, Escualano y extracto de arroz para iluminar y atenuar manchas, más el Vegan Collagen Eye Serum (10ml) con colágeno vegetal, 5 péptidos y triple ácido hialurónico para el contorno de ojos. Vegano, cruelty-free, ideal para lograr el efecto 'glass skin' coreano.",
    miniDescription:
      "Set sérum iluminador + sérum de ojos para glass skin.",
    size: "50ml + 10ml",
    price: 110500,
    stock: 8,
    images: ["/axisY_duo.png", "/axisY_duo.png", "/axisY_duo.png"],
    cartImage: "/axisY_duo.png",
    benefits: [
      "2 productos best-seller",
      "5% Niacinamida iluminadora",
      "Colágeno vegano para ojos",
      "Efecto glass skin"
    ],
    ingredients: [
      "Niacinamida (5%)",
      "Escualano",
      "Extracto de arroz",
      "Colágeno vegano",
      "5 tipos de péptidos",
      "Triple ácido hialurónico",
      "Caléndula"
    ],
  },

] satisfies Product[];
