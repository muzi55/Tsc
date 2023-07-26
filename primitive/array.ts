// Array
// Js에서의 array는 객체입니다.
// 사용법 =>
// Array<type>
// 타입[]

// let list : number[] = [1,2,3];
// let list: Array<Number> = [1,2,3]

// 타입스크립트는 쓰지않아고 어느종도 유추하고 값을 지정해줍니다 => 하지만 우리는 배운사람들 이잖아여?
// let list = [1, 2, 3]
// let list: number[] = [1, 2, 3];
// 이건 사용 자제하라고 한다 충돌날 수 도 있댄다야
// let list: Array<number> = [1, 2, 3];

// 서로 다른 타입 이라면 ?
// uion 으로 묶어준다. !
let list: (number | string)[] = [1, 2, 3, "4"];
