     // youtube Iframe API 비동기로 로드
    //  api를 사용하지 않고 Iframe 태그만 써서 영상 삽입이 가능한데 태그 속성만으로 커스텀하기에 한계가 있음
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
   //  var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
       //  height: '360',
       //  width: '640',
        videoId: 'LYgHoxsTuRA',//최초 재생할 유튜브영상 ID
       playerVars:{//자세한 옵션은 플레이어 매개변수 메뉴 확인
           autoplay:true,//자동 재생 유무
           loop:true, //반복 재생유무
           playlist:'LYgHoxsTuRA'//반복 재생할 유튜브영상 ID목록
       },
        events: {
           //영상 준비되었을 때
           onReady:function(event){
               event.target.mute();//음소거!
           }
        }
      });
    }



const topBtn = document.querySelector('#to-top');
  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  
    }
window.addEventListener('scroll', function(){
  if(window.scrollY > 1000){
    gsap.to(topBtn, 0.6, {
    opacity: 1,
    x:0
    });
  }
  else {
    gsap.to(topBtn, 0.6, {
    opacity: 0,
    x:100});
  }      
});


new Swiper('.main_sub .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  autoplay: { // 자동 재생 여부
  },
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
  navigation: { //이전 다음 슬라이드 버튼 사용
    nextEl: '.main_sub .swiper-button-next',
    prevEl: '.main_sub .swiper-button-prev',
  },

});