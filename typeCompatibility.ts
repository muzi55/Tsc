// 서브타입(1)
// sub1 타입은 sup1 타입의 서브 타입이다.

let sub1: 1 = 1;
let sup1: number = sub1;
// number => 1
// sub1 = sup1; // error! sup1이 더 크기 때문에!

let sub2: number[] = [1];
// array도 object에 하나이다.
let sup2: object = sub2;
// sub2 = sup2; // error sup2 가 더 크기때문에

let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
// sub3 = sup3// error  sup3이 더 크기때문에

let sub4: number = 1;
let sup4: any = sub4; // any => 나쁜녀석
sub4 = sup4; // 에러아님 => 곱창남

let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5; // error

class Animal {}
class Dog extends Animal {
  eat() {}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
// sub6 = sup6; // error

// 1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변

let sub7: string = "";
let sup7: string | number = sub7;

let sub8: { a: string; b: number } = { a: "", b: 1 };
let sup8: { a: string | number; b: number } = sub8;
