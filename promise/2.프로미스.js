/*
프로미스는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체이다.

const myPromise = new Promise((resolve, reject) => {
  // 여기에 코드 작성
})
이런 방식으로 프로미스를 만든 후, 
프로미스의 성공을 알리기 위해서는 resolve를, 실패를 알리기 위해서는 reject를 호출하면 된다.

*/
// 프로미스 안에서 즉시 resolve를 호출하면 어떤 값이 반환되는지 확인해보자.
const myPromise_1 = new Promise((resolve, resject) => {
  resolve('The value we get from the promise');
});

myPromise_1.then((data) => {
  console.log(data); // The value we get from the promise
});

/*
resolve 함수의 첫 번째 매개변수로 전달된 값이 콘솔에 출력되는 것을 확인할 수 있다.
setTimeout()을 사용하면 resolve가 호출되기 전까지 일정 시간을 기다릴 수 있다.
*/
const myPromise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('The value we get from the promise');
  }, 1000);
});

myPromise_2.then((data) => {
  console.log(data);
});

// reject를 이요한 오류 처리 방법
const myPromise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('this is our error')); // new Error를 사용해서 오류 로그 확인가능
  }, 1000);
});

myPromise_3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
