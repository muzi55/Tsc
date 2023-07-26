// object
// primitive type이 아닌것을 나타내고 싶을때 사용하는 타입

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// 에러록목들. !
// create(43)
// create("muzi")
// create(undefined)
// create(false)
