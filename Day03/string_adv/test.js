const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

fruits.forEach((v) => {
  console.log(`${v} a를 ${v.includes("a") ? "포함" : "미포함"}`);
});

fruits.forEach((v) => {
  const isSixOver = v.length >= 6;
  const result = isSixOver ? v.toUpperCase() : v.repeat(2);
  console.log(result);
});

fruits.forEach((v) => {
  console.log(v.toUpperCase().repeat(v.length))
});
