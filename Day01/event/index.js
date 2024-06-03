// Event

// const button = document.createElement("button");
// button.innerText = "버튼임";

// button.addEventListener("mouseover", () => {
//   console.log("마우스 올라감");
// });

// document.body.appendChild(button);

// div태그 - width:100px, height:100px, bg: red
//         - 클릭을 하면, bg: blue

// const divTag = document.createElement("div");
// divTag.style.width = "100px";
// divTag.style.height = "100px";
// divTag.style.backgroundColor = "red";

// divTag.addEventListener("click", () => {
//   divTag.style.backgroundColor = "blue";
// });

// document.body.appendChild(divTag);

// button 태그 만들고, 글은 '파란상자'
// event 클릭을 하면, html div w:100,h:100, bg:blue 생김

// const button = document.createElement("button");
// button.innerText = "파란상자";
// button.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.margin = "10px";
//   div.style.backgroundColor = "blue";
//   document.body.appendChild(div);
// });
// document.body.appendChild(button);

// 버튼을 3가지 만들고, 각각 이름은 사이트 색깔 이름 넣기
// div: 100px 100px bg:black
// 각각 클릭을 하면, 위의 div태그의 bg가 클릭한 이름의 색깔로 변경하기

// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");

// btn1.innerText = "blue";
// btn2.innerText = "green";
// btn3.innerText = "pink";

// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";

// btn1.addEventListener("click", () => {
//   div.style.backgroundColor = "#0984e3";
// });
// btn2.addEventListener("click", () => {
//   div.style.backgroundColor = "#55efc4";
// });
// btn3.addEventListener("click", () => {
//   div.style.backgroundColor = "#ff7675";
// });

// document.body.appendChild(btn1);
// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
// document.body.appendChild(div);

// div => w:100 h:100 border:1px solid black bg: white
// button => 내용: 색깔 추가,
// button's event=> prompt로 물어봄 색깔 헥사코드 입력

// button[#123123]을 가진 색깔이 나타남 div의bg가 변경됨

const divTag = document.createElement("div");
divTag.style.width = "100px";
divTag.style.height = "100px";
divTag.style.border = "1px solid black";
document.body.appendChild(divTag);

const addBtn = document.createElement("button");
addBtn.innerText = "색깔 추가";
addBtn.addEventListener("click", () => {
  //헥사코드 입력 프롬프트 받기
  const hex = prompt("헥사코드 색깔 입력:");
  const btn = document.createElement("button");
  btn.innerText = hex;
  btn.addEventListener("click", () => {
    divTag.style.backgroundColor = hex;
  });
  document.body.appendChild(btn);
});
document.body.appendChild(addBtn);
