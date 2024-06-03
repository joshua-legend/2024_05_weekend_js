// div: w 100 h 100 bg: 님들 좋아하는거
// -, +로 통해서
// div가 유동적으로 넓/높이가 변하도록 하는 프로그램 만드세요

const divTag = document.createElement("div");
divTag.style.height = "100px";
divTag.style.width = "100px";
divTag.style.backgroundColor = "#ee1231";
document.body.appendChild(divTag);

const minus = document.createElement("button");
minus.innerText = "-";
const plus = document.createElement("button");
plus.innerText = "+";

minus.addEventListener("click", () => {
  divTag.style.height = parseInt(divTag.style.height) - 1 + "px";
  divTag.style.width = parseInt(divTag.style.width) - 1 + "px";
});

plus.addEventListener("click", () => {
  divTag.style.height = parseInt(divTag.style.height) + 1 + "px";
  divTag.style.width = parseInt(divTag.style.width) + 1 + "px";
});

document.body.appendChild(minus);
document.body.appendChild(plus);
