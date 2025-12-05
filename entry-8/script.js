// 1. 쓸 이미지들 파일 이름 (폴더에 실제로 넣어야 함!)
const imagePaths = [
  "9.JPG",
  "124.JPG",
  "e6a.JPG",
  "d.JPG"
  // 파일 이름은 네가 쓰는 걸로 바꿔도 됨
];

// 2. 필요한 요소들 가져오기
const blurSlider = document.getElementById("blurSlider");
const textBody  = document.getElementById("textBody") || document.querySelector("article");
const hoverPhoto = document.getElementById("hoverPhoto");
const hoverImg   = document.getElementById("hoverImg");
const lettersI   = document.querySelectorAll(".letter-i");

// ---------- A. 블러 슬라이더 (기존 8번 효과) ----------

if (blurSlider && textBody) {
  blurSlider.addEventListener("input", function () {
    const amount = blurSlider.value;      // 0 ~ 10
    textBody.style.filter = "blur(" + amount + "px)";
  });
}

// ---------- B. 'I' 위에 랜덤 사진 띄우기 ----------

// 랜덤 인덱스 뽑는 함수 (0 ~ imagePaths.length-1)
function getRandomIndex() {
  return Math.floor(Math.random() * imagePaths.length);
}

// 각 I 글자에 호버 이벤트 붙이기
lettersI.forEach(function (letter) {

  // 마우스 들어왔을 때
  letter.addEventListener("mouseenter", function () {
    // 1) 랜덤 이미지 선택
    const randomIndex = getRandomIndex();
    const imgSrc = imagePaths[randomIndex];
    hoverImg.src = imgSrc;

    // 2) 이 글자의 화면 위치 가져오기
    const rect = letter.getBoundingClientRect();

    // 3) 사진 위치를 글자 위 중앙으로 이동
    hoverPhoto.style.left = (rect.left + rect.width / 2) + "px";
    hoverPhoto.style.top  = rect.top + "px";

    // 4) 보이게 만들기
    hoverPhoto.style.display = "block";
  });

  // 마우스 나갔을 때
  letter.addEventListener("mouseleave", function () {
    hoverPhoto.style.display = "none";
  });
});
