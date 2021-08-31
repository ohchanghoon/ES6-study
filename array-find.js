// Array.find()
// 제공된 테스트 함수를 충족하는 배열의 첫 번째 원소를 반환한다.
// 충족하는 원소가 없으면 undefined를 반환한다.

const arr = [1, 2, 3, 4, 5];

const found = arr.find((el) => el >= 3);
console.log(found);
