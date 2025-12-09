// 1. 언어 토글 기능
const buttons = document.querySelectorAll('.lang-btn');
const textEn = document.getElementById('text-en');
const textKo = document.getElementById('text-ko');

buttons.forEach(function(button){
  button.addEventListener('click', function(){
    const lang = button.getAttribute('data-lang');

    // 버튼 스타일
    buttons.forEach(function(b){
      b.classList.remove('active');
    });
    button.classList.add('active');

    // 텍스트 보이기/숨기기
    if(lang === 'en'){
      textEn.classList.add('active');
      textKo.classList.remove('active');
    } else {
      textEn.classList.remove('active');
      textKo.classList.add('active');
    }
  });
});

// 2. I 호버 → 랜덤 이미지 뜨기
// 사용할 이미지들 (엔트리 폴더 안에 파일 넣어두기)
const hoverImages = [
  '2272.jpg',
  '2808.jpg',
  '3907.jpg',
  '19892.jpg',
  '1797.jpg'
];

const hoverPhoto = document.getElementById('hoverPhoto');
const hoverImg = hoverPhoto.querySelector('img');
const iSpans = document.querySelectorAll('.letter-i');

iSpans.forEach(function(span){
  span.addEventListener('mouseenter', function(event){
    // 랜덤 이미지 선택
    const randomIndex = Math.floor(Math.random() * hoverImages.length);
    const src = hoverImages[randomIndex];
    hoverImg.src = src;

    // 위치 설정 (마우스 근처)
    hoverPhoto.style.left = event.pageX + 'px';
    hoverPhoto.style.top = event.pageY + 'px';

    hoverPhoto.classList.add('show');
  });

  span.addEventListener('mousemove', function(event){
    hoverPhoto.style.left = event.pageX + 'px';
    hoverPhoto.style.top = event.pageY + 'px';
  });

  span.addEventListener('mouseleave', function(){
    hoverPhoto.classList.remove('show');
  });
});
