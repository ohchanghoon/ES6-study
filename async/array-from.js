// Array.from()
// 배열처럼 보이지만 배열이 아닌 객체를 받아서 실제 배열로 변환해 반환한다.

// HTML
<div class="fruits">
  <p>Apple</p>
  <p>Banana</p>
  <p>Orange</p>
</div>;

// JS
// fruits는 3개의 p태그를 포함한 노드 리스트이다
const fruits = document.querySelectorAll('.fruits p');
// 배열로 변환하기
const fruitArray = Array.from(fruits);
console.log(fruits); // [p, p, p]

// 배열을 취급하게 되었으므로 map()을 사용할 수 있다.
const fruitNames = fruitArray.map((fruit) => fruit.textContent);
console.log(fruitNames); // ['Apple', 'Banana', 'Orange']
