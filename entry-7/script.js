let images = [
  "2152.jpg",
  "2037.JPG",
  "2160.JPG"
];


let randomIndex = Math.floor(Math.random() * images.length);


let previewImage = document.getElementById("previewImage");


previewImage.src = images[randomIndex];
