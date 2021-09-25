// endsWith()
// 문자열이 우리가 전달한 갑승로 끝나는지 확인

const code = 'ABCDEF';
console.log(code.endsWith('DDD')); // false
console.log(code.endsWith('def')); // false
console.log(code.endsWith('DEF')); // true
