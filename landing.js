function enterSite() {
  alert("Entering Mythos...");
  // Later we’ll change this to go to your main page
}
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelector(".container").style.transform =
    `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});