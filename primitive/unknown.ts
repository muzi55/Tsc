// unknown
// 응용 프로그램을 작성할 떄 모르는 변수의 타입을 묘사해야 할 수 있습니다.
//  3.0 버전부터 지원
// any와 짝으로 any보다 type-safe한 타입
// any와 같이 아무거나 할당할 수 있다.
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해 주지 않으면 다른곳에 할당할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있다.
// 사용 전 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있다.

declare const maybe: unknown;

// const aNumber : number = maybe
if (maybe === true) {
  // 보면 타입이 boolean 으로 바뀌었다.
  const aBoolean: boolean = maybe;

  // const aString : string = maybe;
}

if (typeof maybe === "string") {
  // 보면 타입이 string 으로 바뀌었다.
  const aString: string = maybe;

  // const aBoolean : boolean = maybe
}
