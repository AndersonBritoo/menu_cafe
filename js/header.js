/* Cabeçalho, rodapé e etiqueta da mesa (?mesa=3) */

function renderHeader() {
  document.title = "Menu · " + CAFE.nome;
  $("#nome").textContent = CAFE.nome;
  $("#info").textContent = CAFE.info;
  $("#foot").textContent = CAFE.rodape;

  const mesa = new URLSearchParams(location.search).get("mesa");
  if (mesa) {
    const el = $("#mesa");
    el.textContent = "Mesa " + mesa;
    el.hidden = false;
  }
}