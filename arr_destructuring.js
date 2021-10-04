// 배열 디스트럭처링
// 배열을 디스트럭처링 할 때는 객체의 디스트럭처링과는 달리 {}가 아닌 []을 사용한다.

// const person_1 = ['Alberto', 'Montalesi', 25];
// const [name, surname, age] = person_1;

// 생성하려는 변수의 수가 배열의 원소보다 적다면 어떻게 할까 ?
// const person_1 = ['Alberto', 'Montalesi', 25];
// const [name, surname] = person_1;
// console.log(name, surname);

// 나머지 모든 값을 얻고 싶다면 레스트 연산자(rest operator)를 사용하면 된다.
const person_2 = ['Alberto', 'Montalesi', 'pizza', 'ice cream', 'cheese cake'];
const [name, surname, ...food] = person_2;
console.log(food); // [ 'pizza', 'ice cream', 'cheese cake' ]

// 디스트럭처링을 이용하여 변수 교체하기 (swap)
let hungry = 'yes';
let full = 'no';

[hungry, full] = [full, hungry];
console.log(hungry, full); // no yes
