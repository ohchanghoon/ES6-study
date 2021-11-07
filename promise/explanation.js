/*
자바스크립트는 동기적(synchronous)으로 작동한다. 즉, 각 코드 블록이 이전 블록 이후에 실행된다.

const data = fetch('your-api-url-goes-here');
console.log('Finished');
console.log(data);

이 예에서는 fetch를 사용하여 어떤 URL에서 데이터를 가져온다.
동기 코드의 경우, fetch 작업이 실제로 완료된 후에 다음 행이 호출되리라고 예상한다.
하지만, 실제로는 fetch가 호출된 바로 직후 바로 다음행의 두 console.log가 실행되므로, 
마지막 console.log(data)는 undefined를 출력한다. 

이러한 현상이 발생하는 이유는 fetch가 비동기적(asynchronous)으로 수행되기 때문이다.
즉, 해당 행에서 fetch가 완료될 때까지 코드 실행을 중지하는게 아니라 계속해서 다음 행을 실행한다.

이 문제를 해결하기 위해 콜백 또는 프로미스를 사용하면 fetch가 무언가를 반환하는 시점까지 기다리게 할 수 있다.
*/
