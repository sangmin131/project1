new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다 슬라이드 바뀜
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이비 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: { //이전 다음 슬라이드 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },

});
const btnHamburger = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('.lnb');
const btnGroup = document.querySelector('.gnd > div');

btnHamburger.addEventListener('click', function(){
    navEl.classList.toggle('active');
    btnGroup.classList.toggle('active');
});