/*
promise.resolve()와 promise.reject()는 자동으로 성공하거나 실패하는 프로미스를 생성한다.
*/
// promise.resolve
Promise.resolve('Success').then(
  function (value) {
    console.log('Success');
  },
  function (value) {
    console.log('fail');
  }
);

// promise.reject
Promise.reject(new Error('fail')).then(
  function () {
    // not called
  },
  function (error) {
    console.log(error);
    // Error: fail
  }
);

/*
첫 번째 예제에서 볼 수 있듯이 .then()절에서 생성된 프로미스에는 두개의 인수가 있다.
하나의 프로미스가 성공할 때 호출되는 함수이고, 다른 하나는 프로미스가 실패할 때 호출되는 함수이다.
resolve()는 즉시 프로미스를 성공 처리하므로 첫 번째 함수가 호출된다.
한편, 두번째 예제에서는 Promise.reject()를 사용하여 프로미스를 즉시 실패 처리하므로
.then() 절의 두번째 인수가 호출된다.
*/
