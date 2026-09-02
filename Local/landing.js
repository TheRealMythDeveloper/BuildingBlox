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
    desc: "... Kindof just a text editor.",
    file: "GodotOS/index.html"
  },

  {
    name: "Mythos Client Board",
    desc: "Unblocked Minecraft and bloxd and more",
    file: "https://therealmythdeveloper.github.io/MythosClientBoard/"
  },

  {
    name: "MagmaHam ROMS Emulator",
    desc: "A website made by a friend, not my work. Also not my security so be careful IDK.",
    file: "https://magmarom.base44.app/"
  },

  {
    name: "Chrome Exploits",
    desc: "Dancing ducky gave me inspiration for life",
    file: "https://t3rm-exploit-dump.vercel.app/"
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

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelector(".container").style.transform =
    `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});