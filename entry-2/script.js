
  const preview = document.createElement("img");
  preview.className = "preview-img";
  document.body.appendChild(preview);

  const items = document.querySelectorAll(".lat");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      preview.src = item.dataset.img;
      preview.style.opacity = 1;
    });

    item.addEventListener("mouseleave", () => {
      preview.style.opacity = 0;
    });

    item.addEventListener("mousemove", (e) => {
      preview.style.left = e.pageX + 20 + "px";
      preview.style.top = e.pageY + 20 + "px";
    });
  });

