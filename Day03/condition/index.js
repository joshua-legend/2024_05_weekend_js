//condition[조건]
// const a = Number(prompt("숫자입력:"));
// if (a > 0) {
//   alert("0보다 큽니다.");
// } else if (a == 0) {
//   alert("0입니다.");
// } else {
//   alert("0보다 작습니다.");
// }

// prompt로 영어 점수를 입력 받고
// const eng = Number(prompt("영어 점수 ㄱ:"));
// if (eng >= 90) {
//   alert("a");
// } else if (eng >= 80) {
//   alert("b");
// } else if (eng >= 70) {
//   alert("c");
// } else if (eng >= 60) {
//   alert("d");
// } else {
//   alert("나락");
// }

// 유저에게 비밀번호 설정을 물어보고,

const special = ["!", "#", "$"];
special.some((v) => {
  return v == "!";
});
special.every((v) => {
  return v != "@";
});

const number = [1, 2, 3, 4, 5];
number.some((v) => {
  return v % 2 == 1;
});
number.every((v) => {
  return v < 6;
});

const password = prompt("비밀번호 입력");
const isLengthOver8 = password.length >= 8;
const hasSpecialChar = ["!", "#", "$"].some((v) => {
  return password.includes(v);
});

const isValidIT = password.startsWith("I") && password.endsWith("T");

if (!isLengthOver8) {
  alert("비밀번호가 짧아용");
} else if (!hasSpecialChar) {
  alert("특수문자 !#$가 포함되어있지 않습니다.");
} else if (!isValidIT) {
  alert("I와T를 꼭 시작과 끝에 넣어야합니다.");
} else {
  alert("비밀번호 설정완료!😁");
}
