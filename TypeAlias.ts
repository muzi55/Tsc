// 타입별칭(별명)
// interface와 비슷해보입니다.
// primitive, inion TypeError, tuple, function
// 기타 직접 작성해야 하는 타입을 다른 이름을 지정할 수 있습니다.
// 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는것이 아닙니다.

// Aliasing Primitive
type MyStringType = string;
const str = "world";

let myStr: MyStringType = "hello";
myStr = str;

// 이것은 그냥 의 미없습니다. !

// Aliasing Union Type

let person2: string | number = 0;
person2 = "muzi";

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "con";
