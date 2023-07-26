// void는 리턴부분에 달아서 아무것도 하지 않겠다.!

function returnVoid(message: string): void {
  console.log(message);

  return;
}

const r = returnVoid("리턴 안됨");
