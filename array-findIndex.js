// Array.findIndex()
// 조건과 일치하는 첫번째 원소의 인덱스를 반환한다.

const greeting = ['hello', 'hi', 'byebye', 'goddbye', 'hi'];
const foundIndex = greeting.findIndex((el) => el === 'hi');
console.log(foundIndex); // 1

// hi는 1번째 자리와 4번째 자리에 존재하지만,
// findIndex는 첫번째 원소의 인덱스를 반환한다
