// js가 html을 만들기 위한 장소

// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 꿀잼각";
// document.body.appendChild(h1tag);

// 버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const button = document.createElement("button");
// button.style.backgroundColor = "skyblue";
// button.style.padding = "10px";
// button.style.fontSize = "20px";
// button.innerText = "클릭!";
// document.body.appendChild(button);

// prompt로 배경색깔을 물어보고 헥사코드,
// const color = prompt("배경색깔 무엇?");

// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color;

// document.body.appendChild(box);

// ex) red, #ffefed
// div -> width: 100px, height: 100px, background: red

// 폰트 색깔 물어보고
// const fontColor = prompt("폰트 색깔 무엇?");
// const text = prompt("버튼 내용 무엇?");

// const button = document.createElement("button");
// button.style.color = fontColor;
// button.innerText = text;
// document.body.appendChild(button);

// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기

const height = prompt("높이 얼마?");
const width = prompt("넓이 얼마?");
const bg = prmopt("배경색 무엇?");
const text = prmopt("들어갈 내용 무엇?");

const box = document.createElement("div");
box.style.width = width;
box.style.height = height;
box.style.backgroundColor = bg;
box.innerText = text;
document.body.appendChild(box);
