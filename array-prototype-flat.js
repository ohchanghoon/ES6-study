// flat()은 지정한 깊이까지 배열을 재귀적으로 평면화 한다. 깊이 인수가 지정되지 않으면 1이 기본값이다.
// Infinit로 지정하면 모든 중첩 배열을 평면화할 수 있다.

const letters = ['a', 'b', ['c', 'd', ['e', 'f']]];
// 깊이 1 평면화
console.log(letters.flat()); // [ 'a', 'b', 'c', 'd', [ 'e', 'f' ] ]

// 깊이 2 평면화
console.log(letters.flat(2)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 깊이 1 평면화 2회 수행
console.log(letters.flat().flat()); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 중첩된 배열이 모두 없어질 때까지 평면화
console.log(letters.flat(Infinity)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Array.prototype.flatMap()은 .flat()과 동일한 방식으로 깊이 인수를 처리하지만 단순히 배열을 평면화하는 대신 새로운 값으로 매핑되어 생긴 배열을 평면화한다.
let greeting = ['Greeting from', '', 'Vietnam'];
// 일반 map함수
const a = greeting.map((el) => el.split(' '));
console.log(a);
// [ [ 'Greeting', 'from' ], [ '' ], [ 'Vietnam' ] ]

const b = greeting.flatMap((el) => el.split(' '));
console.log(b);
// [ 'Greeting', 'from', '', 'Vietnam' ]
