// 1) 언어 토글 기능 (유지)
const buttons = document.querySelectorAll('.lang-btn');
const textEn = document.getElementById('text-en');
const textKo = document.getElementById('text-ko');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');

    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    if (lang === 'en') {
      textEn.classList.add('active');
      textKo.classList.remove('active');
    } else {
      textEn.classList.remove('active');
      textKo.classList.add('active');
    }
  });
});

// 2) 본문 속 I(.letter-i) 호버 → 랜덤 이미지 (제목 X)
const letters = document.querySelectorAll('.letter-i');
const hoverPhoto = document.getElementById('hoverPhoto');
const hoverImg = hoverPhoto.querySelector('img');

const images = [
  '2272.jpg',
  '2808.jpg',
  '3907.jpg',
  '19892.jpg',
  '1797.jpg'
];

function pickRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

letters.forEach((letter) => {
  letter.addEventListener('mouseenter', (e) => {
    hoverImg.src = pickRandom(images);
    hoverPhoto.classList.add('is-visible');
  });

  letter.addEventListener('mousemove', (e) => {
    hoverPhoto.style.left = (e.clientX + 20) + 'px';
    hoverPhoto.style.top  = (e.clientY + 20) + 'px';
  });

  letter.addEventListener('mouseleave', () => {
    hoverPhoto.classList.remove('is-visible');
  });
});
