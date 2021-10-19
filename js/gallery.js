const sectionGalleryInner = document.querySelector(".section-gallery__inner");
const sectionGalleryBody  = document.querySelector(".section-gallery__body");

function createArr() {
  let arr = [];
  while (arr.length < 15) {
    let num = Math.floor(((Math.random() * 100) % 15) + 1);
    if (!arr.includes(num)) arr.push(num);
  }
  return arr;
}

createArr().forEach((num, i) => {
   sectionGalleryInner.insertAdjacentHTML(
    "beforeend",
    `<img class="gallery-img" src="assets/img/galery/galery${num}.jpg" alt="Gallery picture">`
  );
});

function slideIn(entries, observer) {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      entry.intersectionRatio > observer.thresholds[0]
    )
      entry.target.classList.add("slide-up", "active");
  });
}

const imgObserver = new IntersectionObserver(slideIn, {
  root: null,
  threshold: 0.1,
});

const galleryImgs = sectionGalleryInner.querySelectorAll("img");

const galleryObserver = new IntersectionObserver(removeSlideIn, {
  root: null,
});

function removeSlideIn(entries) {
  if (!entries[0].isIntersecting && entries[0].boundingClientRect.y >= 0) {
    galleryImgs.forEach((img) => img.classList.remove("slide-up", "active"));
  }
}

galleryImgs.forEach((img) => {
  imgObserver.observe(img);
});

galleryObserver.observe(sectionGalleryBody);
