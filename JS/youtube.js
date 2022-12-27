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
      videoId: '4K5ixHZzpnY',//최초 재생할 유튜브영상 ID
      playerVars:{//자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay:true,//자동 재생 유무
      loop:true, //반복 재생유무
      playlist:'4K5ixHZzpnY'//반복 재생할 유튜브영상 ID목록
      },
      events: {
      onReady:function(event){
      event.target.mute();//음소거!
      }
      }
      });
    };
