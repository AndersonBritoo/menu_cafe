/* Desenho do menu, filtro de pesquisa e destaque da categoria ativa */

let observer;

function itemHtml(it) {
  return `
    <div class="item${it.esgotado ? " out" : ""}">
      <div>
        <h3>${escapeHtml(it.nome)}</h3>
        ${it.desc ? `<p>${escapeHtml(it.desc)}</p>` : ""}
        ${it.esgotado ? `<span class="tag">esgotado</span>` : ""}
        ${(it.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
      <div class="price">${formatPrice(it.preco)}</div>
    </div>`;
}

function matchesFilter(it, filter) {
  if (!filter) return true;
  const text = it.nome + " " + (it.desc || "") + " " + (it.tags || []).join(" ");
  return normalize(text).includes(filter);
}

function renderMenu(rawFilter = "") {
  const filter = normalize(rawFilter.trim());
  let menuHtml = "";
  let navHtml = "";
  let total = 0;

  CAFE.categorias.forEach((cat, i) => {
    const items = cat.itens.filter((it) => matchesFilter(it, filter));
    if (!items.length) return;
    total += items.length;
    navHtml += `<button data-id="cat${i}">${escapeHtml(cat.nome)}</button>`;
    menuHtml += `<section id="cat${i}"><h2>${escapeHtml(cat.nome)}</h2>${items.map(itemHtml).join("")}</section>`;
  });

  $("#menu").innerHTML = menuHtml;
  $("#nav").innerHTML = navHtml;
  $("#empty").style.display = total ? "none" : "block";
  observeSections();
}

// Marca como ativo o botão da categoria que está visível ao fazer scroll
function observeSections() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        document.querySelectorAll("#nav button").forEach((b) =>
          b.classList.toggle("active", b.dataset.id === e.target.id)
        );
        const active = document.querySelector("#nav button.active");
        if (active) active.scrollIntoView({ inline: "center", block: "nearest" });
      });
    },
    { rootMargin: "-120px 0px -70% 0px" }
  );
  document.querySelectorAll("main section").forEach((s) => observer.observe(s));
}

function setupMenuEvents() {
  $("#nav").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) document.getElementById(b.dataset.id).scrollIntoView();
  });
  $("#q").addEventListener("input", (e) => renderMenu(e.target.value));
}