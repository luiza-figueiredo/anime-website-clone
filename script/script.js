// Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // show video
  let playButton = document.querySelector(".play-anime");
  let video = document.querySelector(".video-container");
  let myvideo = document.querySelector("#myvideo");
  let closebtn = document.querySelector(".close-video");
  
  playButton.onclick = () => {
    video.classList.add("show-video");
    // auto play
    myvideo.play();
  }
  closebtn.onclick = () => {
    video.classList.remove("show-video");
    // pause
    myvideo.pause();
  }
