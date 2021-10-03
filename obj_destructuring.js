// 객체 디스트럭처링
// 디스트럭처링 할당 문법은 배열의 값 또는 객체의 속성을 풀어서 별개의 변수로
// 쓸 수 있게 해주는 js 표현식이다

// 이전 방식
var person_1 = {
  first_1: 'Alberto',
  second_1: 'Motalesi',
};
var first_1 = person_1.first_1;
var second_1 = person_1.second_1;
console.log(first_1, second_1); // Alberto Motalesi

// ES6
// person_2가 가진 속성에 접근함과 동시에 해당 속성 이름으로 변수 선언이 가능함을 알 수 있다.
const person_2 = {
  first_2: 'Alberto',
  second_2: 'Motalesi',
};
const { first_2, second_2 } = person_2;
console.log(first_2, second_2); // Alberto Motalesi

// 중첩된 객체형태로 데이터가 주어진 경우
const person_3 = {
  name: 'Alberto',
  last: 'Montalesi',
  links: {
    social: {
      facebook: 'https://facebook.com/alberto.montalsi',
    },
    website: 'https://albertomontalsi.github.io/',
  },
};
// const { facebook } = person_3.links.social;
// console.log(facebook); // https://facebook.com/alberto.montalsi

// 변수명 변경 가능
// const { facebook: fb } = person_3.links.social;
// console.log(fb); // https://facebook.com/alberto.montalsi
// console.log(facebook); // facebook is not defined

// 기본값 전달 가능
// 변수를 fb로 다시 명명하고 기본값을 설정한다.
const { facebook: fb = 'https://www.facebook.com' } =
  person_3.links.social.facebook;

console.log(fb); // https:/ / www.facebook.com;
