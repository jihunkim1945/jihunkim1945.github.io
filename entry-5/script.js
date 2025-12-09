
 
  
    // 1) 아무 곳이나 한 번 클릭하면 한국어 레이어가 위로 날아가면서 사라짐
    document.body.addEventListener("click", function(){
      document.body.classList.add("ko-hidden");
    }, { once:true });

    // 2) I 호버 시 랜덤 이미지 띄우기 (엔트리 9 방식)

    // 사진 파일 이름들 (엔트리 5 폴더 기준으로 맞게 바꿔 써)
    const images = [
     "1773.jpg",
      "1777.jpg",
      "1786.jpg",
      "1823.jpg",
      "1824.jpg",
      "3802.jpg",
    ];

    const letters = document.querySelectorAll(".letter-i");
    const hoverPhoto = document.getElementById("hoverPhoto");
    const hoverImg = document.getElementById("hoverImg");

    function positionPhoto(event) {
      const offsetY = 24; // 글자 조금 위에 뜨게
      hoverPhoto.style.left = event.pageX + "px";
      hoverPhoto.style.top = (event.pageY - offsetY) + "px";
    }

    letters.forEach(function(letter){
      letter.addEventListener("mouseenter", function(event){
        const randomIndex = Math.floor(Math.random() * images.length);
        hoverImg.src = images[randomIndex];

        positionPhoto(event);
        hoverPhoto.classList.add("show");
      });

      letter.addEventListener("mousemove", function(event){
        positionPhoto(event);
      });

      letter.addEventListener("mouseleave", function(){
        hoverPhoto.classList.remove("show");
      });
    });
 