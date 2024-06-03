// 1. 두 수를 따로 각각 입력 받고, 합, 차, 곱을 html에
// h2태그로 3개 각각 나타내기, 폰트색깔은 하늘색

// const firstNum = Number(prompt("첫 번째 수 입력:"));
// const secondNum = Number(prompt("두 번째 수 입력"));

// const sumH2 = document.createElement("h2");
// const diffH2 = document.createElement("h2");
// const mulitH2 = document.createElement("h2");

// sumH2.innerText = `합:${firstNum + secondNum}`;
// diffH2.innerText = `차:${firstNum - secondNum}`;
// mulitH2.innerText = `곱:${firstNum * secondNum}`;

// document.body.appendChild(sumH2);
// document.body.appendChild(diffH2);
// document.body.appendChild(mulitH2);

// 2. 밑변과 높이를 각각 입력 받고, 정삼각형의 넓이를
// html에 div태그로 나타내기, 폰트사이즈는 20px,
// 폰트색깔은 초록색

// const base = Number(prompt("밑변 입력"));
// const height = Number(prompt("높이 입력"));

// const widthTriangle = document.createElement("div");
// widthTriangle.innerText = `넓이:${base * height * 0.5}`;
// document.body.appendChild(widthTriangle);

// - 0 + 형태의 Counter 만들기

const minusBtn = document.createElement("button");
const num = document.createElement("span");
const plusBtn = document.createElement("button");

minusBtn.innerText = `-`;
num.innerText = `0`;
plusBtn.innerText = `+`;

minusBtn.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});
plusBtn.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});

document.body.appendChild(minusBtn);
document.body.appendChild(num);
document.body.appendChild(plusBtn);
