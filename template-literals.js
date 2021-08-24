// Template Literals (Template String)
const person = {
  name: 'Julia',
  score: 4,
};
// ❌ Bad Code
console.log(
  'Hello ' + person.name + ', Your current score is: ' + person.score
);
// ✅ Good Code
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// ✅ Better Code
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// ✅ Better Code
function greeting(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}
