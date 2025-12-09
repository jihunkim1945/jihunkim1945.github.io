// ===== 1) 스크롤에 따라 레이아웃 바꾸기 =====
const page = document.getElementById("page");

window.addEventListener("scroll", function () {
  // 화면 높이의 40% 정도 스크롤하면 compact 켜기
  const trigger = window.innerHeight * 0.4;

  if (window.scrollY > trigger) {
    page.classList.add("compact");
  } else {
    page.classList.remove("compact");
  }
});

// ===== 2) I 호버 시 랜덤 이미지 띄우기 =====

// 사진 파일 이름들 (entry-9 폴더 기준)
const images = [
  "8.PNG",
  "10.PNG",
  "11.PNG",
  "12.PNG",
  "13.PNG"
];

const letters = document.querySelectorAll(".letter-i");
const hoverPhoto = document.getElementById("hoverPhoto");
const hoverImg = document.getElementById("hoverImg");

// 마우스 위치에 맞게 이미지 위치 조정하는 함수
function positionPhoto(event) {
  const offsetY = 24; // 글자 조금 위에 뜨게
  hoverPhoto.style.left = event.pageX + "px";
  hoverPhoto.style.top = (event.pageY - offsetY) + "px";
}

// 각 I마다 이벤트 연결
letters.forEach(function(letter){
  letter.addEventListener("mouseenter", function(event){
    // 랜덤 이미지 선택
    const randomIndex = Math.floor(Math.random() * images.length);
    hoverImg.src = images[randomIndex];

    // 위치 잡고 보여주기
    positionPhoto(event);
    hoverPhoto.classList.add("show");
  });

  letter.addEventListener("mousemove", function(event){
    positionPhoto(event);  // 마우스 움직일 때 따라다니게
  });

  letter.addEventListener("mouseleave", function(){
    hoverPhoto.classList.remove("show");
  });
});
// 스크롤 위치에 따라 body에 'condensed' 클래스 붙였다 떼기

// 기준값: 화면 높이의 40% 정도 지났을 때 레이아웃 전환
let triggerPoint = window.innerHeight * 0.4;

window.addEventListener("scroll", function () {
  // 현재 스크롤된 양 (px)
  let scrollY = window.scrollY;

  if (scrollY > triggerPoint) {
    // 아래로 충분히 내렸으면 "읽기 모드"
    document.body.classList.add("condensed");
  } else {
    // 맨 위 근처면 다시 "텍스트 벽 모드"
    document.body.classList.remove("condensed");
  }
});

// 창 크기 바뀌면 기준점 다시 계산 (반응형)
window.addEventListener("resize", function () {
  triggerPoint = window.innerHeight * 0.4;
});
