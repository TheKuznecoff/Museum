const progressBar = document.querySelector(".progress");
const play = document.querySelector(".section-video__minplay");
const volume = document.querySelector(".section-video__sound");
const volumeInput = document.querySelector(".progress-volume");
const playBig = document.querySelector(".section-video__play");

const screenAll = document.querySelector(".section-video__fullscreen");

let volumeValue = 0; // от 0 до 1
let indVideo = 0;
let mapClick = {}; //для отслеживание нажатых клавиш
volumeInput.addEventListener("input", changeProgressBar);
progressBar.addEventListener("input", changeProgressBar);
//обработчик для увеличения/уменьшения звука
volumeInput.addEventListener("input", changeVolume);
//для клика по прогресс бар
progressBar.onclick = videoRewind;
volume.onclick = muted;

let video = document.querySelector("#video-player");
video.ontimeupdate = progressUpdate;
play.addEventListener("click", () => {
  if (video.classList.contains("play-pause")) {
    pauseVideo();
  } else {
    playVideo();
  }
});
video.addEventListener("click", () => {
  if (video.classList.contains("play-pause")) {
    pauseVideo();
  } else {
    playVideo();
  }
});
playBig.addEventListener("click", () => {
  if (video.classList.contains("play-pause")) {
    pauseVideo();
  } else {
    playVideo();
  }
});

//клик полный экран
screenAll.addEventListener("click", () => {
  console.log("djfsk");
  toggleFullScreen();
});

function playVideo() {
  video.classList.add("play-video");
  video.classList.add("play-pause");
  play.classList.add("pause");
  video.play();
  playBig.classList.add("_hidden");
}

function pauseVideo() {
  video.classList.remove("play-video");
  video.classList.remove("play-pause");
  play.classList.remove("pause");
  video.pause();
  playBig.classList.remove("_hidden");
}
function stopVideo() {
  video.classList.remove("play-video");
  video.pause();
  video.currentTime = 0;
}
function progressUpdate() {
  //currentTime сколько времени от начала видео прошло, duration длина видео
  let v = (video.currentTime * 100) / video.duration;
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${v}%, #c4c4c4 ${v}%, white 100%)`;
  progressBar.value = v;
}

//функция изменнения input type range
function changeProgressBar() {
  const value = this.value;
  this.style.background = `linear-gradient(to right,#710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, white 100%)`;
}

//функция для уменьшения/увеличения звука
function changeVolume() {
  let v = volumeInput.value;
  video.volume = v / 100;
}
//функция для перемотки видео
function videoRewind(e) {
  let w = this.offsetWidth;
  let o = e.offsetX;
  this.value = (100 * o) / w;
  pauseVideo();
  video.currentTime = video.duration * (o / w);
  playVideo();
}

//функция включения/ выключения звука по кнопке
function muted() {
  if (volume.classList.contains("mute")) {
    volumeInput.value = volumeValue * 100;
    video.volume = volumeValue;
    volumeInput.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeInput.value}%, #c4c4c4 ${volumeInput.value}%, white 100%)`;
    volume.classList.remove("mute");
  } else {
    volumeValue = volumeInput.value / 100;
    volumeInput.value = 0;
    video.volume = 0;
    volumeInput.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeInput.value}%, #c4c4c4 ${volumeInput.value}%, white 100%)`;
    volume.classList.add("mute");
  }
}

//обработчик по кнопкам клавиатуры
document.addEventListener("keydown", (e) => {
  //по кнопке m включение и выключение звука
  mapClick[e.key] = e.type == "keydown";
  if (e.key == "m") {
    muted();
  }
  //пауза-плей
  if (e.key == " " || e.key == "k") {
    if (video.classList.contains("play-video")) {
      //запускаем функцию остановки видео
      pauseVideo();
    } else {
      playVideo();
    }
  }

  if (e.key == "ArrowUp") {
    //запускает функция увеличение звука на 5%
    e.preventDefault();
    higeVolume();
  }
  if (e.key == "ArrowDown") {
    //запускает функуция уменьшение звука на 5%
    e.preventDefault();
    belowVolume();
  }
  if (e.key == "ArrowLeft") {
    //запускает функуция перемотки видео на 10сек назад
    goVideo10Back();
  }
  if (e.key == "ArrowRight") {
    //запускает функуция перемотки видео на 10сек назад
    goVideo25Next();
  }
  if (e.key == "f") {
    //запускает функцию полноэкранного режима
    toggleFullScreen();
  }
});

//функция которая передвигает видео на 10 секунд назад
function goVideo10Back() {
  if (video.currentTime < 10) {
    video.currentTime = 0;
  } else {
    video.currentTime -= 10;
  }
  playVideo();
}

//фцнкция которая передвигает видео на 25 секунд вперед
function goVideo25Next() {
  if (video.currentTime + 25 > video.duration) {
    video.currentTime = video.duration;
  } else {
    video.currentTime += 25;
  }
}
//функция полноэкранного режима
function toggleFullScreen() {
  console.log("djskf");
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

//функция для увеличения звука на 5 проц
function higeVolume() {
  volumeInput.value = +volumeInput.value + (volumeInput.value * 5) / 100;
  video.volume = volumeInput.value / 100;
  volumeInput.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeInput.value}%, #c4c4c4 ${volumeInput.value}%, white 100%)`;
}
//функция для уменьшения звука на 5 проц
function belowVolume() {
  volumeInput.value = +volumeInput.value - (volumeInput.value * 5) / 100;
  video.volume = volumeInput.value / 100;
  volumeInput.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeInput.value}%, #c4c4c4 ${volumeInput.value}%, white 100%)`;
}

