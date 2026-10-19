/* ============================================================
   EDITA AQUI: toda a informação do café e do menu.
   tags: "vegan", "sem glúten", "novo", "picante"...
   esgotado: true  → aparece riscado e meio apagado
   ============================================================ */
const CAFE = {
  nome: "Gelataria Tre Santi",
  info: "Av. Dr. António José de Almeida 7 · 3510-024 Viseu · 232 431 421",
  rodape: "Preços com IVA incluído. Informe-nos sobre alergias ou intolerâncias.",
  moeda: "€",
  categorias: [
    { nome: "Copas de gelado", itens: [
      { nome: "Copa Amarenas", desc: "Gelado, cerejas, chantili e toping", preco: 5.00 },
      { nome: "Banana Split", desc: "Gelado, banana, fruta, chantili e toping", preco: 4.50, tags: ["clássico"] },
      { nome: "Banana Split italiana", desc: "Gelado, banana, chantili, frutos secos, licor e toping", preco: 4.50 },
      { nome: "Copa Framboesa", desc: "Gelado, framboesas, chantili e toping", preco: 5.50 },
      { nome: "Copa Pizza", desc: "Gelado, fruta fresca e toping", preco: 4.50 },
      { nome: "Copa Lasanha", desc: "Gelado, fruta, chantili e raspas", preco: 4.00 },
      { nome: "Copa Come e Bebe", desc: "Gelado, fruta, chantili, sumo natural e licor", preco: 6.00 },
      { nome: "Raffaello", desc: "Gelado, raffaello, chantili, raspas e licor", preco: 8.00 }
    ]},
    { nome: "Copa Quente e Frio", itens: [
      { nome: "Chocolate", desc: "Gelado com chocolate quente", preco: 4.50 },
      { nome: "Framboesa", desc: "Gelado com framboesa quente", preco: 4.50 },
      { nome: "Frutos do bosque", desc: "Gelado com frutos do bosque quentes", preco: 4.50 }
    ]},
    { nome: "Iogurtes de gelado", itens: [
      { nome: "Iogurte frutos do bosque", desc: "Gelado, iogurte, frutos do bosque e toping", preco: 4.50 },
      { nome: "Iogurte morango", desc: "Gelado, iogurte, morangos e toping", preco: 4.00 },
      { nome: "Iogurte ananás", desc: "Gelado, iogurte, ananás e toping", preco: 4.00 },
      { nome: "Iogurte banana", desc: "Gelado, iogurte, banana e toping", preco: 4.00 },
      { nome: "Iogurte muesli", desc: "Gelado, iogurte, muesli e toping", preco: 4.00 },
      { nome: "Iogurte especial", desc: "Gelado, iogurte, frutas mistas e toping", preco: 4.00 },
      { nome: "Iogurte mirtilo", desc: "Gelado, mirtilo, iogurte e toping", preco: 5.00 },
      { nome: "Iogurte cerejas", desc: "Gelado, iogurte, cerejas e toping", preco: 5.00 },
      { nome: "Iogurte framboesa", desc: "Gelado, iogurte, framboesas e toping", preco: 5.00 }
    ]},
    { nome: "Frapes", itens: [
      { nome: "Frape de iogurte", desc: "Iogurte natural, gelado (sabor à escolha) e fruta fresca", preco: 3.50 },
      { nome: "Frape de iogurte grande", desc: "Iogurte natural, gelado (sabor à escolha) e fruta fresca", preco: 5.00 }
    ]},
    { nome: "Cafés", itens: [
      { nome: "Bica", desc: "Expresso curto e intenso", preco: 0.80 },
      { nome: "Abatanado", desc: "Expresso longo", preco: 0.90 },
      { nome: "Meia de leite", desc: "Metade café, metade leite", preco: 1.50 },
      { nome: "Galão", desc: "Café longo com muito leite, em copo alto", preco: 1.60 },
      { nome: "Cappuccino", desc: "Expresso, leite vaporizado e espuma", preco: 2.20 },
      { nome: "Chocolate quente", desc: "Cremoso, com chocolate belga", preco: 2.50 }
    ]},
    { nome: "Bebidas frias", itens: [
      { nome: "Água 0,5L", preco: 1.00 },
      { nome: "Sumo de laranja natural", desc: "Espremido na hora", preco: 3.00, tags: ["vegan", "sem glúten"] },
      { nome: "Refrigerantes", desc: "Coca-Cola, Fanta, Sprite, Ice Tea", preco: 2.00 },
      { nome: "Chá gelado caseiro", desc: "Limão e hortelã", preco: 2.20, tags: ["vegan"] }
    ]},
    { nome: "Pastelaria", itens: [
      { nome: "Pastel de nata", desc: "Folhado estaladiço, creme de ovos", preco: 1.30, tags: ["clássico"] },
      { nome: "Bola de Berlim", desc: "Com creme de ovos", preco: 1.80 },
      { nome: "Croissant simples", preco: 1.40 },
      { nome: "Bolo de cenoura", desc: "Fatia com cobertura de chocolate", preco: 2.50 }
    ]}
  ]
};