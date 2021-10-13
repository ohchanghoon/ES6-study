/*
for in 루프는 순서 없이 객체의 모든 열거 가능한 속성을 반복하기 때문에
for of 루프와 약간 다르다. 따라서 반복 중에는 객체의 속성을 추가, 수정, 삭제하지 않는 것이 좋다.
반복 중에 해당 속성을 거칠 것이라는 보장이 없고, 수정 전이나 수정 후에 거칠 것이라는 보장도 없다.
*/
const car = {
  maker: 'BMW',
  color: 'yellow',
  year: '2010',
};

for (const prop in car) {
  console.log(prop, car[prop]);
  // maker BMW
  // color yellow
  // year 2010
}

// for of와 for in의 차이
let list = [4, 5, 6];
// for ... in은 키의 목록을 반환한다.
for (let i in list) {
  console.log('for in :', i);
  // for in : 0
  // for in : 1
  // for in : 2
}

// for ... of는 키의 값을 반환한다.
for (let i of list) {
  console.log('for of :', i);
  // for of : 4
  // for of : 5
  // for of : 6
}
