// Spread Syntax - Array
let fruits = ['melon', 'orange', 'banana'];

fruits.push('grape'); // 기존 배열 뒤에추가
fruits = [...friuts, 'grape'];

fruits.unshift('grape'); // 기존 배열 앞에 추가
fruits = ['grape', ...fruits];
