
  
  const cells = document.querySelectorAll('.grid div:not(.highlight)');

  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    cells.forEach(function (cell) {
      const rect = cell.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = centerX - mouseX;
      const dy = centerY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxDist = 320;
      const strength = 220;
  

      if (distance < maxDist) {
        const force = (maxDist - distance) / maxDist; 
        const moveX = (dx / distance) * force * strength;
        const moveY = (dy / distance) * force * strength;

        cell.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
      } else {
        cell.style.transform = 'translate(0px, 0px)';
      }
    });
  });
  window.addEventListener("click", () => {
    const audio = document.getElementById("bgm");
    audio.play();
  });



