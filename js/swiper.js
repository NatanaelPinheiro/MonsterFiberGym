let isTablet = window.innerWidth < 600;
let isMobile = window.innerWidth < 400;

var infinie_scroll = new Swiper(".swiper-container", {
  loopedSlides: isTablet ? isMobile ? 3 : 4 : 5,
  loop: true,
  slidesPerView: isTablet ? isMobile ? 2 : 3 : 4,
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