// Array.every()
// 모든 원소가 주어진 조건과 일치하는지 여부를 확인한다.

const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];

let arrEvery = arr.every((el) => el > 2);
console.log(arrEvery); // false
