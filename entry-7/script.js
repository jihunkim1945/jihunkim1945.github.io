let images = [
  "2152.jpg",
  "2037.JPG",
  "2160.JPG"
];

// 0, 1, 2 중에서 랜덤 숫자 하나 뽑기
let randomIndex = Math.floor(Math.random() * images.length);

// <img id="previewImage"> 찾기
let previewImage = document.getElementById("previewImage");

// 랜덤으로 고른 이미지 경로 넣기
previewImage.src = images[randomIndex];
