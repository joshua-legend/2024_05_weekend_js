// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입:숫자, 문자
// 타입 변환

// -1.숫자 타입
// const a = 7(숫자)
// const b = 3.14(숫자)
// const c = 12903812903(숫자)

// -2.문자 타입
// const d = '1293129'
// const e = "바닐라라떼"
// const f = `민트초콜렛`

// const g = `내 최애 음료는: ${e}`
// console.log(g)

//프롬프트를 이용해서,
//1. 당신의 mbti?
// const mbti = prompt("mbti는?");
// const food = prompt("최애음식은?");
//2. 당신의 최애 음식?
// alert(`당신의 mbti는 ${mbti}, 최애 음식 ${food}이군요!`);

// 오늘의 날짜는 무엇인가요?
// const date = prompt("오늘의 날짜는 무엇인가요");
// // 오늘의 일정은 무엇인가요?
// const plan = prompt("오늘의 일정은 무엇인가요");
// alert(`오늘의 날짜는 ${date}이고, ${plan}을 하실 예정이시군요!`);

// const first = prompt("첫 번째 수 입력:");
// const second = prompt("두 번째 수 입력:");
// const numFirst = Number(first);
// const numSecond = Number(second);
// alert(`두 수의 합은 ${numFirst + numSecond} 입니다.`);

//1. 몇살이셈? -> 20
const age = prompt("몇살?");
const numAge = Number(age);
const ageTag = document.createElement("h1");
ageTag.innerText = `${2025 - numAge}년생 이군요`;
document.body.appendChild(ageTag);

//2. 정사각형의 한변의 길이 -> 120
0
const side = prompt("한변의 길이 입력");
const numSide = Number(side);
const widthTag = document.createElement("h1");
widthTag.innerText = `정사각형의 넓이는 ${numSide * numSide}`;
document.body.appendChild(widthTag);
