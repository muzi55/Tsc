// any => 모두 될 수 있다.! 하지만 잘 안씀
// 어떤 타입이어도 상관 없는 타입,
// 이걸 최대한 쓰지 않는게 핵심!
// 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이루어지지 않기 때문,
// 그래서 컴파일 옵션중에는 any를 써야하는데 쓰지 않으면 오류를 뱉는 옵션도 있음!! (nolmplicitAny)

// any를 계속해서 개체를 통해 전파됩니다.
// 결국 모든 편의는 타입 안정성을 잃는 대가로 온갇는것을 기억해야한다.
// 타입 안정성은 Ts를 사용하는 주요 동기 중 하나이며, 필요하지 않은 경우 any를 사용하면 절대 안된다. !

// console.log()로만 찍히는것인건 any를 쓸만하다.

function returnAny(message: any): any {
  console.log(message);
}
const any = returnAny("아무거나~");
any.toSrting();
