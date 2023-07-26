// never
// never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당할 수 있습니다.
// 하지만 never 에는 그 어떤 것도 할당할 수 없음
// any조차 never에게 할당할 수 없음.
// 잘못된 타입을 넣는 실수를 막고자 할 떄 사용됨

// 아무것도 리턴되지 않는다.
function error(massage: string): never {
  throw new Error(massage);
}

function fail() {
  return error("failed");
}

// function infiniteLoop(): never {
//   while (true){
//   }
// }

// let a: string = "hello";
declare const a: string | number;
if (typeof a !== "string") {
  a;
}
