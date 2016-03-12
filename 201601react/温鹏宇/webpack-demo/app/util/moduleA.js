'use strict';

export default function foo(x, y) {
  return x * y;
}

// 另外一种导出的方式，和上面完全一样
// function foo() {
//   console.log('foo');
// }
// export { foo as default };
//
// export var a = 1;
//
// export const PI = 3.14;

console.log( foo(2, 3) );
