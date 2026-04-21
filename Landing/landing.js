function enterSite() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "../home.html";
  }, 800);
}
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