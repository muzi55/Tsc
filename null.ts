// let MyName : string = null; // => 에러 !
// let u : undefined = null;

// let v : void = void // void에 void를 넣을 수 없다.!;
let v: void = undefined;

// 합집합 같은 의미
let union: string | null = null;

union = "muzi";

// null in Js
// null 이라는 값으로 할당된걸 null 이라하며,
// 무언가 있는데, 준비가 안된상태,
// null이라는 타입은 null이라는 값만 가질 수 있다.!!
// 런타임에서 typeof 연산자를 사용한다면 object가 나온다 !!

// undefiend in Js
// 값을 할당하지 않은 변수는 Undefined 라는 값을 가지며,
// 무언가가 아예 준비가 안된 상태,
// object의 property가 없을때도 undefined입니다.
// 런타임에서 typeof 연산자를 이용하면 object 입니다. !
