
//Progress-bar Video

const progress = document.querySelector('.progress');
const progressVolume = document.querySelector('.progress-volume');

progress.addEventListener('input', function () {
   const value = this.value;
   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, grey 100%)`
})
progressVolume.addEventListener('input', function () {
   const value = this.value;
   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, grey 100%)`
})




//Burger
const iconMenu = document.querySelector(".icon__menu");
const nav = document.querySelector(".nav");
const displayNone = document.querySelector(".section-welcome__content");
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      nav.classList.toggle('_active');
      displayNone.classList.toggle('_display');
   });
}


//Smooth scrolling
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            nav.classList.remove('_active');
            displayNone.classList.remove('_display');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

//Сравнение фото в секции Explore
let active = false


document.querySelector('.explore__slider-scroller').addEventListener('mousedown', function () {
  active = true

  document.querySelector('.explore__slider-scroller').classList.add('scrolling')
})

document.body.addEventListener('mouseup', function () {
  active = false
  document.querySelector('.explore__slider-scroller').classList.remove('scrolling')
})
document.body.addEventListener('mouseleave', function () {
  active = false
  document.querySelector('.explore__slider-scroller').classList.remove('scrolling')
})

document.body.addEventListener('mousemove', function (e) {
  if (!active) return
  let x = e.pageX
  x -= document.querySelector('.explore__slider-wrapper').getBoundingClientRect().left
  scrollIt(x)
})


function scrollIt(x) {
  let transform = Math.max(0, (Math.min(x, document.querySelector('.explore__slider-wrapper').offsetWidth)))
  document.querySelector('.explore__slider-after').style.width = transform + "px"
  document.querySelector('.explore__slider-scroller').style.left = transform - 20 + "px"
}

//start position of slider
scrollIt(document.querySelector('.explore__slider-wrapper').offsetWidth * 0.4)


document.querySelector('.explore__slider-scroller').addEventListener('touchstart', function () {
  active = true
  document.querySelector('.explore__slider-scroller').classList.add('scrolling')
})
document.body.addEventListener('touchend', function () {
  active = false
  document.querySelector('.explore__slider-scroller').classList.remove('scrolling')
})
document.body.addEventListener('touchcancel', function () {
  active = false
  document.querySelector('.explore__slider-scroller').classList.remove('scrolling')
})

document.body.addEventListener('touchmove', function (e) {
  if (!active) {
    return
  }
  let x = e.touches[0].pageX
  x -= document.querySelector('.explore__slider-wrapper').getBoundingClientRect().left
  scrollIt(x)
})