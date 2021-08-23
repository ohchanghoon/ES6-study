//// Object Destructuring
const person = {
  name: 'julia',
  age: 20,
  phone: '01012341234',
};

// ❌ Bad Code
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// ❌ Bad Code
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// ✅ Good Code
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}
