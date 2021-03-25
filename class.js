"use strict";
// Object-oriented programming
// class : template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// -syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}
// this는 생성된 오브젝트
const och = new Person("och", 27);
console.log(och.name);
console.log(och.age);
och.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    //   if (value < 0) {
    //     throw Error("age can not be negative");
    //   }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public. private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance(상속)
// a way for one class to extend another class.
// shape이라는 클래스안에 3가지의 필드가있고, 드로우와 겟에어리어라는 메소드
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 원하는 메소드를 재정의해서 사용할 수 있고,
// super.메소드명 으로 원래 부모의 메소드를 그대로 사용할 수 있다.

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log(`🔺`);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽을 오른쪽의 인스턴스인지 아닌지 체크하는것
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
