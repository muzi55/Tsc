// undefined & Null
// Ts에서 undefined 와, null 은 실제로 각각 undefined, null 의 타입을 가집니다.
// void 와 마찬가지로, 그 자체로는 그다지 유용하지 않습니다.
// 둘다 '소문자'만 존재합니다.

// 컨파일 설정을 한다면 =>
// number에 null 또는 undefined 를 할당할 수 있다는 의미입니다.
// 컨파일 옵션에서 `--strictNullChecks` 사용하면 null과, undefined는 void 나 자기 자신들에게 만 할당할 수 있습니다.
// 이경우, null과 undefined를 할당할 수 있게 하려면, uion type을 이용해야 합니다.
