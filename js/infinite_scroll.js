var infinie_scroll = new Swiper(".swiper-container", {
  loopedSlides: 4,
  loop: true,
  slidesPerView: 3,
  freeMode: true,
  autoplay: {
    delay: 1500,
  },
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: false,
  mousewheel: false,
});

var teams_swiper = new Swiper(".team-swiper ", {
  loopedSlides: 2,
  loop: true,
  slidesPerView: 1,
  freeMode: true,
  autoplay: {
    delay: 2500,
  },
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: false,
  mousewheel: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
  },

});