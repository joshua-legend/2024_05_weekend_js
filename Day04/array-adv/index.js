const arr = [1, 3, 5, 7, 9];
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "tomato",
  "grape",
  "strawberry",
];
// forEach, every, some, map, filter

// map(바꾸기)
const a1 = arr.map((v) => v * 10);
const a2 = arr.map((v) => v ** v);
const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
const a4 = arr.map((v, i) => (i % 2 == 1 ? v * 3 : v * 2));
const a5 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));

// filter
const b1 = arr.filter((v) => v > 5);
const b2 = arr.filter((v, i) => !(i % 2));
const b3 = arr.filter((v) => v.length >= 6).map((v) => v.toUpperCase());

// 6글자만 걸러주고, 모든 요소들이 a 또는 o를 포함하는지 궁금쓰
//

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

const b4 = arr
  .filter((v) => v.length == 6)
  .every((v) => alpha.some((x) => v.include(x)));

// String(),Number(),Boolean(),
const c = Array(10); //
const c1 = Array(10).fill(0);
const c2 = Array(10)
  .fill(0)
  .map((v, i) => i);

// 0~100 홀수만 ㄱ
const c3 = Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2);

// str -> array
// 방법: split, Array.from
const d = "americano".split("");
const d1 = Array.from("americano");
const d2 = [..."americano"];
const d3 = [..."americano"].filter((v) => v != "a");

// array -> str
const e = ["coffee", "cookie"].join("");
const e1 = ["coffee", "cookie"].toString();

// str <-> array
//"cccCCC" -> "CCCccc"
//"abCdEfghIJ" -> "ABcDeFGHij"
const change = (word) =>
  [...word]
    .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");

// n	k	result
// 10	3	[3, 6, 9]
// 15	5	[5, 10, 15]
// 12 4 [4, 8, 12]
// const makeArr = (n,k) => Array(n).fill(0).map((v,i)=>i+1).filter((v)=> v % k == 0)

const a = [1, 2, 3, 4, 5];
const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];

const result = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, cur) => acc + cur);

console.log(result);
