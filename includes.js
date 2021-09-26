// includes
// 전달한 값이 문자열에 포함되어있는지 확인

const code = 'ABCDEF';
console.log(code.includes('c')); // false
console.log(code.includes('BCD')); // true
console.log(code.includes('abc')); // false
