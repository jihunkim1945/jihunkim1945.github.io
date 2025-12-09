
  // ===== Typing Memory Effect =====
  // p.typing 안의 텍스트를 한 글자씩 천천히 보여줌

  const paragraphs = Array.from(document.querySelectorAll("p.typing"));

  // 원래 텍스트를 저장해두고, 화면에서는 일단 비우기
  const originalTexts = paragraphs.map(p => {
    const text = p.textContent;
    p.textContent = "";
    return text;
  });

  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function typeMemoryEffect(){
    const charDelay = 35;      // 글자 사이 간격 (ms)
    const paragraphDelay = 500; // 문단 사이 쉬는 시간 (ms)

    for(let i = 0; i < paragraphs.length; i++){
      const p = paragraphs[i];
      const text = originalTexts[i];

      for(let j = 0; j < text.length; j++){
        p.textContent += text[j];
        await sleep(charDelay);
      }

      // 문단 하나 끝나면 살짝 멈췄다가 다음 문단 시작
      await sleep(paragraphDelay);
    }
  }

  window.addEventListener("load", typeMemoryEffect);
