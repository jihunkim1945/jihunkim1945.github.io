// 페이지가 준비되면 실행
document.addEventListener('DOMContentLoaded', function () {
  var textBody = document.getElementById('textBody');
  var assembleBtn = document.getElementById('assembleBtn');
  var hoverPhoto = document.getElementById('hoverPhoto');
  var hoverImg = document.getElementById('hoverImg');

  // 1) 원래 텍스트를 가져와서 단어 단위로 쪼갬
  var originalText = textBody.textContent;   // 태그 없이 순수 텍스트
  var parts = originalText.split(/(\s+)/);   // 공백도 같이 유지하려고 () 사용

  // 2) 각 단어를 <span class="piece">로 감싸서 다시 넣기
  var html = '';
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part.trim().length === 0) {
      // 공백은 그대로
      html += part;
    } else {
      html += '<span class="piece">' + part + '</span>';
    }
  }
  textBody.innerHTML = html;

  // 이제 모든 조각 span
  var pieces = document.querySelectorAll('.piece');

  // 3) 첫 번째 "I" 찾아서 letter-i 클래스 추가 (아웃라인용)
  var letterI = null;
  for (var j = 0; j < pieces.length; j++) {
    if (!letterI && pieces[j].textContent.trim() === 'I') {
      letterI = pieces[j];
      pieces[j].classList.add('letter-i');
      break;
    }
  }

  // 4) 처음 상태: 단어들을 랜덤 위치로 흩어뜨리기 (transform)
  for (var k = 0; k < pieces.length; k++) {
    var x = (Math.random() - 0.5) * 400; // -200 ~ 200px 사이
    var y = (Math.random() - 0.5) * 220; // -110 ~ 110px 사이
    pieces[k].style.transform = 'translate(' + x + 'px,' + y + 'px)';
  }

  // 5) 버튼 누르면: transform 0 으로 → 제자리로 돌아오면서 "문단"이 됨
  assembleBtn.addEventListener('click', function () {
    for (var i2 = 0; i2 < pieces.length; i2++) {
      pieces[i2].style.transform = 'translate(0,0)';
    }
  });

  // 6) I 위에 마우스를 올리면 작은 사진이 I 바로 아래에 뜨게
  if (letterI) {
    letterI.addEventListener('mouseenter', function () {
      var rect = letterI.getBoundingClientRect(); // 화면 기준 위치
      hoverPhoto.style.display = 'block';
      hoverPhoto.style.left = rect.left + 'px';
      hoverPhoto.style.top = (rect.bottom + 8) + 'px'; // I 밑에 8px 아래
    });

    letterI.addEventListener('mouseleave', function () {
      hoverPhoto.style.display = 'none';
    });
  }
});
