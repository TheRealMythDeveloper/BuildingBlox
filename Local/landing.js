const miniGames = [
  {
    name: "Frontend Proxy",
    desc: "Quick utility",
    file: "./Index.html"
  },
  {
    name: "URL Encoder",
    desc: "Recodes a URL so it isn't blocked.",
    file: "./index (1).html"
  },
   {
    name: "GodotOS",
    desc: "...  Kindof just a text editor.",
    file: "GodotOS/index.html"
  }
];

function renderMini() {
  const container = document.getElementById("miniContainer");
  if (!container) return;

  container.innerHTML = "";

  miniGames.forEach(item => {
    const card = document.createElement("div");
    card.className = "mini-card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <button class="open-btn">Open</button>
    `;

    card.querySelector(".open-btn").onclick = () => {
      window.location.href = item.file;
    };

    container.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderMini();
});