/*
프로미스의 성공 또는 실패 여부와 무관하게 이전 프로미스에서 반환된 것을
후속 프로미스의 기반으로 사용하여 프로미스를 계속 체이닝 할 수 있다.
원하는 만큼 많은 프로미스를 연결할 수 있으며,
그 코드는 위에서 봤던 콜백 지옥의 코드보다 더 읽기 쉽고 간결한다.
*/

const myPromise_1 = new Promise((resolve, reject) => {
  resolve();
});

myPromise_1
  .then((data) => {
    // 새로운 값을 반환
    return 'working...';
  })
  .then((data) => {
    // 이전 프로미스에서 받은 값을 출력
    console.log(data);
    throw 'failed';
  })
  .catch((err) => {
    // 프로미스 수행 중 발생한 오류를 받아서 출력
    console.log(err);
    // failed!
  });

/*
  예제를 보면 첫번째. then()이 두번째 .then()으로 값을 전달하여 해당 값이 로그로 출력되었고,
  두 번째 .then에서 발생시킨 오류는 .catch() 절로 전달되어서 오류 로그가 출력되었다.
  프로미스가 성공한 경우뿐만 아니라 실패한 경우에도 연쇄적으로 연결하여 사용하는 것이 가능하다.
*/

const myPromise_2 = new Promise((resolve, reject) => {
  resolve();
});

myPromise_2
  .then((data) => {
    throw new Error('ooops');
    console.log('first value');
  })
  .catch(() => {
    console.log('catched an error');
  })
  .then((data) => {
    console.log('second value');
  });

/*
  이 코드의 경우 첫번째 .then()에서 오류가 발생했기 때문에 'first value'는 출력되지 않고, 
  첫 번째 .catch()와 마지막 .then()을 수행하면서 로그가 출력된다.
  */
