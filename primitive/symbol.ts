// Symbol
// (1) ECMAScript 2015의 Symbol 입니다.
// (2) new Symbol 로 사용할 수 없습니다.
// (3) Symbol 을 함수로 사용해서 Symbol 타입을 만들어낼 수 있습니다.

// console.log(Symbol('foo')) // => 에러가남, Symbol을 사용할 수 없는 환경잉기때문

// "lib": [
// "ES2015",
// "DOM"
//   ],
// 추가해줘야함
console.log(Symbol("foo") === Symbol("foo"));

// Symbol
// (1) 프리미티브 타입의 값을 담아서 사용합니다.
// (2) 고유하고 수정불가능한 값으로 만들어줍니다.
// (3) 그래서 주로 접근을 제어하는데 쓰는 경웅가 많았습니다.

const sym = Symbol();
const obj = {
  // sym : 'valye'
  [sym]: "valye",
};

// 접근을 막거나 접근을 필요한 경우에만 허용할때,
// 함수로 사용할때는 대문자 심볼,  타입으로 사용할때는 소문자 심볼
// obj["sym"]
obj[sym];
