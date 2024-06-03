//함수: input[str,num,bool,array,element,function] -> output
// 중1수학
// f(x) = x + 10;
// 10 -> 20, 20 -> 30

// 콜백함수
// 고1,2 수학[합성함수],
// f(g(x))
const getTen = () => 10;
const getOne = () => 1;
const abc = (x, y) => x() + y();
abc(getTen, getOne); // 11

const arr = [1, 10, "apple", "banana", 3];
const test = (x) => {
  console.log(`${x} 입니다.`);
};
arr.forEach(test);
arr.forEach((v) => {
  console.log(`${v} 입니다.`);
});
