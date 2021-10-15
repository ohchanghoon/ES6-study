// 1. 심벌의 고유성 : 심벌은 항상 고유하며 객체 속성의 식별자로 사용할 수 있다.
const me = Symbol('changhoon');
console.log(me); // Symbol(changhoon)

// 심벌은 항상 고유하다고 했는데 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까?
const clone = Symbol('changhoon');
console.log(clone); // Symbol(changhoon)

// 두 심벌의 값은 동일하지만, 각 심벌은 항상 고유하므로 다른 심벌과 겹치지 않는다.
console.log(me == clone); // false
console.log(me === clone); // false

// 2. 객체 속성에 대한 식별자 :
// const office = {
//   Tom: 'CEO',
//   Mark: 'CEO',
//   Mark: 'CIO',
// };
// for (person in office) {
//   console.log(person);
//   // Tom
//   // Mark
// }

// const office = {
//   [Symbol('Tom')]: 'CEO',
//   [Symbol('Mark')]: 'CEO',
//   [Symbol('Mark')]: 'CIO',
// };
// for (person in office) {
//   console.log(person); // undefiend
// }

// 객체의 속성의 배열을 얻기 위해서는 Object.getOwnPropertySymbols()를 사용한다
const office = {
  [Symbol('Tom')]: 'CEO',
  [Symbol('Mark')]: 'CEO',
  [Symbol('Mark')]: 'CIO',
};
const symbols = Object.getOwnPropertySymbols(office);
console.log(symbols); // [ Symbol(Tom), Symbol(Mark), Symbol(Mark) ]

// 배열을 얻은 후 속석에 접근하려면 map을 사용하면 된다.
const symbols_2 = Object.getOwnPropertySymbols(office);
const value = symbols_2.map((symbol) => office[symbol]);
console.log(value); // [ 'CEO', 'CEO', 'CIO' ]
