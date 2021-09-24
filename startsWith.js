// startsWith()
// 매개변수로 받는 값으로 문자열이 시작하는지 확인한다.

const code = 'ABCDEFG';
console.log(code.startsWith('ABB')); // false
console.log(code.startsWith('abc')); // false
console.log(code.startsWith('ABC')); // true
