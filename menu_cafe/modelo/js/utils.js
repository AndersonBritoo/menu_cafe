/* Funções auxiliares, sem dependências do resto da app */

const $ = (selector) => document.querySelector(selector);

// Formata 1.5 → "1,50 €"
const formatPrice = (n) => n.toFixed(2).replace(".", ",") + " " + CAFE.moeda;

// Escapa HTML para evitar injeção de código nos textos do menu
const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Minúsculas e sem acentos, para a pesquisa ("cafe" encontra "Café")
const normalize = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");