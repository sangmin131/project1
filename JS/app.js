[js]

  function aaa(){
            const ccc = document.createElement("div");
            ccc.classList.add('snow'); //classList를 통해 클래스 목록에 접근, add 지정한 클래스를 추가하겠다
            ccc.style.marginLeft = bbb() + 'px'; 
            document.body.appendChild(ccc);
        }
        function bbb(){
            return Math.floor(Math.random() * window.innerWidth);
        }
        for(let i=0; i<300; i++){ //300개 무한대 함수
            aaa();
        }