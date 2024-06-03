// 변수(variable): 데이터를 기억하는 공간, 닉네임
//2015 const 이름 = 데이터 [기억 한번만]
//2015 let 이름 = 데이터 [기억 여러번]
//var 이름 = 데이터 [절대절대 쓰지말기]

// const a = 100;
// a = 200; (x)

// let b = 100;
// b = 200; (0)

// 인간: 연산[뇌] + 기억[뇌]
// 컴퓨터: 연산[CPU] + 기억[RAM]
// kakao.file[하드디스크]
// RAM[kakao/youtube/game/...] <=> CPU

// 변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 띄어쓰기 안됨 const mintchoco
// 4. 숫자로 시작안됨 ex) const 1a(x) a1(o)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용
// ex) const a(x), const button(x) white_button
// 2. 두단어 합칠때, 낙타표기법, 뱀표기법사용
//  - 낙타: milkCoffee
//  - 뱀: milk_coffee
// 3. 소문자로 시작하기

//유저에게 내용과 색깔을 두개 각각 입력받고,
//html에 h1~h3태그 각각 3개 만들기
const text = prompt("내용 입력");
const color = prompt("색깔 입력");

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");

h1.style.color = color;
h2.style.color = color;
h3.style.color = color;
h1.innerText = text;
h2.innerText = text;
h3.innerText = text;

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(h3);

//유저에게 만들고 싶은 태그 물어보고
//원하는 안의 내용도 물어보고
//원하는 폰트색깔 만들고,
//html에 만들기

const tag = prompt("태그 입력");
const text1 = prmopt("내용 입력");
const color1 = prmopt("폰트 색깔 입력");

const madeTag = document.createElement(tag);
madeTag.style.color = color1;
madeTag.innerText = text1;
document.body.appendChild(madeTag);
