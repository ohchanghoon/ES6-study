/*
비동기 코드를 동기식으로 작동하는 것처럼 하기 위해 콜백으로 여러 코드블록을 차례로 연결해 작성할때
발생하는 상황을 콜백지옥이라고 부르기도한다.

A를 하고, A가 완료될 때까지 기다렸다가 B를 수행하고, B가 완료될 때까지 기다렸다가 C를 수행한다.
이런 코드에서는 기다리는 시점마다 콜백을 사용해야 하기 때문에 코드가 복잡해진다.

const makePizza = (ingredients, callback) => {
  mixIngredients(ingredients, function (mixedIngredients)) {
    bakePizza(mixedIngredients, function (bakedPizza)) {
      console.log('finished!');
    }
  }
}

이렇게 하면 시각적으로 위에서 아래로 코드가 실행되는것 처럼 보이게 작성할 수는 있지만,
그것 때문에 과도한 함수 중첩을 유발한다.
*/
