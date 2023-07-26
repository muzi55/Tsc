// 타입순서와, 길이가 맞아야함
let x: [string, number];

x = ["muzi", 55];
// x = [10, 'con'] //= > 왜 문자넣는곳에 숫자를넣냐? 왜 숫자넣는곳에 문자를 넣냐?
// x[2] = 'con' //=>  너 지금 3번째꺼를 넣으려는거 아니냐?

const person: [string, number] = ["muzi", 55];
// const [firse, second, third] = person; // => 너 지금 3번째 꺼는 없는대 왜 넣냐?
const [firse, second] = person;

// array = > 항상 공통요소의 모임
// tuple = > 길이가 정해져있고, 앞뒤의 타입이 정확한, 다를 수 있는 자료
