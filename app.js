const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}
function haddleMouseEnter() {
    console.log("mouse is here!")
}

title.addEventListener("click", handleTitleClick); //() 안 붙이는 이유 자바스크립트가 직접실행
title.addEventListener("mouseeneter", haddleMouseEnter);

TrackEvent