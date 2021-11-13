/*
promise.all()은 모든 프로미스가 성공할 경우에만 성공하는 하나의 프로미스를 반환한다.
*/
const promise1 = new Promise((reslove, reject) => {
  setTimeout(reslove, 500, 'first value');
});
const promise2 = new Promise((reslove, reject) => {
  setTimeout(reslove, 1000, 'second value');
});

promise1.then((data) => {
  console.log(data);
});
