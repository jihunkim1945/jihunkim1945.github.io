
  const images = [
    "(20).jpeg",
    "2037.JPG",
    "2152.jpg",
    "2160.JPG"
  ];

  const letters = document.querySelectorAll(".letter-i");
  const hoverPhoto = document.getElementById("hoverPhoto");
  const hoverImg = document.getElementById("hoverImg");

  function moveImg(e){
    hoverPhoto.style.left = e.pageX + "px";
    hoverPhoto.style.top = (e.pageY - 30) + "px";
  }

  letters.forEach(letter=>{
    letter.addEventListener("mouseenter", e=>{
      const r = Math.floor(Math.random() * images.length);
      hoverImg.src = images[r];
      moveImg(e);
      hoverPhoto.classList.add("show");
    });
    letter.addEventListener("mousemove", moveImg);
    letter.addEventListener("mouseleave", ()=>{
      hoverPhoto.classList.remove("show");
    });
  });
