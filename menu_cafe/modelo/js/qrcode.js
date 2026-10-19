/* Gerador de QR codes por mesa (usa a biblioteca qrcodejs) */

const grid = document.getElementById("grid");

function buildLink(base, tableNumber) {
  if (!tableNumber) return base;
  return base + (base.includes("?") ? "&" : "?") + "mesa=" + tableNumber;
}

function createCard(link, title, fileName) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = '<div class="qr"></div><h3></h3><p>Lê o QR code para ver o menu</p><a>Descarregar PNG</a>';
  card.querySelector("h3").textContent = title;
  grid.appendChild(card);

  const box = card.querySelector(".qr");
  new QRCode(box, { text: link, width: 180, height: 180, correctLevel: QRCode.CorrectLevel.M });

  card.querySelector("a").addEventListener("click", () => {
    const canvas = box.querySelector("canvas");
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = fileName;
    a.click();
  });
}

function generate() {
  const base = document.getElementById("url").value.trim();
  if (!/^https?:\/\//i.test(base)) {
    alert("Cola um endereço completo, a começar por https://");
    return;
  }
  const n = Math.max(0, parseInt(document.getElementById("n").value, 10) || 0);
  const nome = document.getElementById("nome").value.trim();
  grid.innerHTML = "";

  if (n === 0) {
    createCard(base, nome, "qr-menu.png");
    return;
  }
  for (let i = 1; i <= n; i++) {
    createCard(buildLink(base, i), nome + " · Mesa " + i, "qr-mesa-" + i + ".png");
  }
}

document.getElementById("go").addEventListener("click", generate);