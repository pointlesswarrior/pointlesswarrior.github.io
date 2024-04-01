const nav_arrows = document.querySelectorAll(".nav-arrow");
nav_arrows.forEach((arrow) => {
  const nextSection = arrow.parentElement.nextElementSibling;
  arrow.addEventListener("click", () => {
    nextSection.scrollIntoView({ behavior: "smooth" });
  });
});
