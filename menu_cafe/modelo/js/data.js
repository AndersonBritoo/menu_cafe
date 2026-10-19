/* ============================================================
   EDITA AQUI: toda a informação do café e do menu.
   tags: "vegan", "sem glúten", "novo", "picante"...
   esgotado: true  → aparece riscado e meio apagado
   ============================================================ */
const CAFE = {
  nome: "Café Exemplo",
  info: "Lisboa · Seg–Sáb 07:30–19:00 · Wi-Fi: CafeExemplo / senha123",
  rodape: "Preços com IVA incluído. Informe-nos sobre alergias ou intolerâncias.",
  moeda: "€",
  categorias: [
    { nome: "Cafés", itens: [
      { nome: "Bica", desc: "Expresso curto e intenso", preco: 0.80 },
      { nome: "Café com cheirinho", desc: "Expresso com aguardente", preco: 1.20 },
      { nome: "Abatanado", desc: "Expresso longo", preco: 0.90 },
      { nome: "Pingado", desc: "Expresso com um pingo de leite", preco: 0.90 },
      { nome: "Meia de leite", desc: "Metade café, metade leite", preco: 1.50 },
      { nome: "Galão", desc: "Café longo com muito leite, em copo alto", preco: 1.60 },
      { nome: "Descafeinado", preco: 0.90 },
      { nome: "Cappuccino", desc: "Expresso, leite vaporizado e espuma", preco: 2.20 },
      { nome: "Leite de aveia / soja", desc: "Troca de leite", preco: 0.30, tags: ["vegan"] }
    ]},
    { nome: "Chás e outros", itens: [
      { nome: "Chá (vários sabores)", desc: "Preto, verde, camomila, menta, frutos vermelhos", preco: 1.60 },
      { nome: "Chocolate quente", desc: "Cremoso, com chocolate belga", preco: 2.50 },
      { nome: "Chá gelado caseiro", desc: "Limão e hortelã", preco: 2.20, tags: ["vegan"] }
    ]},
    { nome: "Bebidas frias", itens: [
      { nome: "Água 0,5L", preco: 1.00 },
      { nome: "Sumo de laranja natural", desc: "Espremido na hora", preco: 3.00, tags: ["vegan", "sem glúten"] },
      { nome: "Refrigerantes", desc: "Coca-Cola, Fanta, Sprite, Ice Tea", preco: 2.00 },
      { nome: "Imperial", preco: 1.50 }
    ]},
    { nome: "Pastelaria", itens: [
      { nome: "Pastel de nata", desc: "Folhado estaladiço, creme de ovos", preco: 1.30, tags: ["clássico"] },
      { nome: "Bola de Berlim", desc: "Com creme de ovos", preco: 1.80 },
      { nome: "Croissant simples", preco: 1.40 },
      { nome: "Bolo de cenoura", desc: "Fatia com cobertura de chocolate", preco: 2.50 },
      { nome: "Queque", preco: 1.20, esgotado: true }
    ]},
    { nome: "Snacks", itens: [
      { nome: "Tosta mista", desc: "Fiambre e queijo", preco: 2.80 },
      { nome: "Sandes de queijo fresco", desc: "Com tomate e orégãos", preco: 2.50 },
      { nome: "Torrada com manteiga", preco: 1.50 },
      { nome: "Tosta de abacate", desc: "Pão de forma, abacate, limão e sementes", preco: 4.50, tags: ["vegan", "novo"] }
    ]}
  ]
};