// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  slides,
  prevBtn,
  nextBtn,
  backToTop,
  thumbnails1,
  thumbnails2,
  thumbnails3,
  image1,
  image2,
  image3,
] = [
  qsa(".slider-container"),
  _("prev"),
  _("next"),
  _("backToTop"),
  qsa("#thumbnails1 img"),
  qsa("#thumbnails2 img"),
  qsa("#thumbnails3 img"),
  _("image1"),
  _("image2"),
  _("image3"),
];

let index = 0;

const next = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};
const prev = () => {
  slides[index].classList.remove("active");
  index = (index - 1) % slides.length;
  slides[index].classList.add("active");
};

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", next);

// Back to top button
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("active", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Image change
function changeImage(imageThumbnails, image) {
  imageThumbnails.forEach((imageThumbnail) => {
    imageThumbnail.addEventListener("click", () => {
      let src = imageThumbnail.src;
      image.src = src;
    });
  });
}

changeImage(thumbnails1, image1);
changeImage(thumbnails2, image2);
changeImage(thumbnails3, image3);
