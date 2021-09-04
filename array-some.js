// Array.some()
// 조건과 일치하는 원소가 있는지 검색하고
// 첫 번째 일치하는 원소를 찾으면 바로 중지한다.

const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];

let arrSome1 = arr.some((el) => el > 2);
let arrSome2 = arr.some((el) => el > 7);

console.log(arrSome1); // true
console.log(arrSome2); // fasle

// 2보다 큰 원소가 일부 있기 때문에 true를 반환
// 7보다 큰 원소가 하나도 없기 때문에 false를 반환
