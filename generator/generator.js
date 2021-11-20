/*
  원하는 만큼 코드 실행을 시작하거나 중지할 수 있는 함수이다.
  중지된 제너레이터 함수를 다시 시작할 때 데이터를 추가로 전달하면서 재시작할 수 있다.
 */
function* fruitList() {
  yield 'Banana';
  yield 'Apple';
  yield 'Orange';
}
const fruits = fruitList();

// 제너레이터
fruits.next();
// {value: 'Banana', done: false}
fruits.next();
// {value: 'Apple', done: false}
fruits.next();
// {value: 'Orange', done: false}
fruits.next();
// {value: 'undefined', done: true}
