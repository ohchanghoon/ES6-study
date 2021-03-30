// number, string, booleanm null, undefined, symbol
// Object
// 함수를전달한다는 것은 래퍼런스를 전달하는것.

//  { ~~ } :코드블럭
// function add(num1, num2) {
//   return num1 + num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function surprise(operator) {
//   const result = operator(2, 3);
//   console.log(result);
// }

// surprise(divide);
//-------------------------------------------------------------------
// false : 0, -0, '', null, undefined
// true : -1, 'hello', 'false'

let num = 9; // undefined
if (num) {
  console.log('true!');
}
// if문과 같음
num && console.log(num);
//-------------------------------------------------------------------
class Counter {
  constructor() {
    this.counter = 0;
  }

  increase() {
    this.counter++;
    console.log(this.counter);

    this.counter % 5 === 0 && console.log('yo');
  }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
