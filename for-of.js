/*
for of
1. 배열에 대한 반복
배열의 각 원소에 대해 반복 하려면 보통 다음과 같이 구현하였다.
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

이것은 매 반복 시 i가 fruits.lenght보다 작은 한 i의 값을 1 씩 증가시키는 일반적인 루프이다.
i가 fruits.length와 같은 값이 되는 시점에서 루프가 중지된다.
다음과 같이 for of 루프를 사용하면 동일한 결과를 얻을 수 있다
*/
const newFruits = ['apple', 'banana', 'orange'];
for (const fruit of newFruits) {
  console.log(fruit);
}
/*
2. 객체에 대한 반복
객체는 이터러블이 아니다. 그러면 객체의 키/값 쌍에 대한 반복은 어떻게 구현할 수 있을까?
먼저 Object.keys()를 사용하여 객체의 모든 키를 가져온 후, 키에 대해 반복을 수행하면서 값에 접근하는 것이 가능하다.
*/
const car = {
  maker: 'BMW',
  color: 'red',
  year: '2010',
};
for (const prop of Object.keys(car)) {
  // for (const prop of Object.entries(car)) {
  // for (const prop of Object.values(car)) {
  const value = car[prop];
  console.log(prop, value);
  /*
  maker BMW
  color red
  year 2010
  */
}
