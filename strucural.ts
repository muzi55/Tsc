// Structural type system - 구조가 같으면, 같은 타입이다.

interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

// 구조가 같음으로 문제가 없다. !
personInterface = personType;
personType = personInterface;

// 이런게 있다.
// nominal type system - 구조가 같아도 이름이 다르면 다른 타입이다. ..
