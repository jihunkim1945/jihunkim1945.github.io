let r = Math.random();
let hoverImg = "";


if(r < 0.33){
hoverImg = "images/entry-7-1.jpg";
}
else if(r < 0.66){
hoverImg = "images/entry-7-2.jpg";
}
else{
hoverImg = "images/entry-7-3.jpg";
}


let preview = document.getElementById("previewImage");
preview.src = hoverImg;


// 슬라이더: 값을 올릴수록 본문이 더 흐려짐
let slider = document.getElementById("blurSlider");
let text = document.querySelector("article");


slider.addEventListener("input", function(){
let amount = slider.value; // 0 ~ 10
text.style.filter = "blur(" + amount + "px)";
});