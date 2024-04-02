const modalViewer = document.querySelector("#modal-viewer");
const modalCaption = modalViewer.querySelector("#modal-viewer_caption");
const modalClose = modalViewer.querySelector("#modal-viewer_close");
const modalNext = modalViewer.querySelector("#modal-viever_arrows-next");
const modalPrev = modalViewer.querySelector("#modal-viever_arrows-prev");
const modalViewerImage = modalViewer.querySelector("img");
const modalImages = Array.from(document.querySelectorAll(".modal-image"));

modalImages.forEach((modal) =>
  modal.addEventListener("click", () => {
    modalViewer.classList.add("visible");
    loadImage(modal.id);
    scrollLock.disablePageScroll();
  })
);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalViewer.classList.contains("visible")) {
    modalViewer.classList.remove("visible");
    scrollLock.enablePageScroll();
  }
});
modalClose.addEventListener("click", () => {
  modalViewer.classList.remove("visible");
  scrollLock.enablePageScroll();
});
function loadImage(id) {
  id = id === modalImages.length ? 0 : id == -1 ? modalImages.length : id;
  const img = modalImages[id];
  modalViewer.dataset.current = id;
  modalCaption.innerHTML = `${img.alt}<br/><br/>${img.dataset.description}`;
  modalViewerImage.classList.add("fade-out-from-top");
  modalViewerImage.src = img.src;
}
function loadNextImage() {
  loadImage(+modalViewer.dataset.current + 1);
}

function loadPreviousImage() {
  loadImage(+modalViewer.dataset.current - 1);
}
modalNext.addEventListener("click", loadNextImage);
modalPrev.addEventListener("click", loadPreviousImage);
document.addEventListener("keydown", function (event) {
  if (!modalViewer.classList.contains("visible")) return;
  if (event.key === "ArrowRight") {
    loadNextImage();
  } else if (event.key === "ArrowLeft") {
    loadPreviousImage();
  }
});
modalViewerImage.addEventListener("animationend", () => {
  modalViewerImage.classList.remove("fade-out-from-top");
});
