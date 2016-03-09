'use strict';

// 1. class
export default class Point {
  // constructor 方法是类的默认方法
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }

  // 这里定义的都是类的公共方法
  // 等同于Point.prototype.toString
  toString() {
    return '('+this.x+','+this.y+')';
  }
}

var point = new Point(2,3);

console.log(point.toString());
console.log(point.hasOwnProperty('x'))
console.log(point.hasOwnProperty('y'))
console.log(point.hasOwnProperty('toString'))
console.log(point.__proto__.hasOwnProperty('toString'))


// 2.arrow function箭头函数
class Animal {
  constructor (name) {
    this.name = name;
  }

  //type = water 相当于type未传值时默认是'water'
  drink(type = 'water') {
    setInterval ( () => {
      console.log('${this.name} want to drink $(type)')
    },1000)
  }
}

let pig = new Animal('pig');
console.log(pig.drink('milk'));
export default Animal;

// 3. destructuring 解构
    // 数组的结构
    let [foo,[[bar],baz]] = [1,[[2],3]];
    console.log(foo); //1
    console.log(bar); //2
    console.log(baz); //3

    // 对象的解构
    // var { foo, bar } = { foo: "aaa", bar: "bbb"};
    // console.log(foo); //'aaa'
    // console.log(bar); //'bbb'

    //字符串的解构赋值
    const [a,b,c,d,e] = 'hello';
    console.log(a+b+c+d+e); //'hello'


//4. rest 剩余参数
  function restFunc(a,...rest) {
    console.log(a);
    console.log(rest);
  }
  restFunc(1);
  restFunc(1,2,3,4);


//5.spread扩展字符串
  var args = ["a", "b", "c"];
  console.log(...args); // "a" "b" "c"


// 6. let & const
  // demo 1
  function f1() {
    let n = 5;
    if (true) {
      let n = 10;
    }
    console.log(n); // 5
  }

  // demo 2
  const PI = 3.1415;
  console.log(PI); // 3.1415

  PI = 3;
  console.log(PI); // TypeError: "PI" is read-only



// 7. Object.assign 对象的合并
var target = {a: 1};
var source1 = {b: 2};
var source2 = {c: 3};

Object.assign( target, source1, source2);
console.log(target); // {a:1,b:2,c:3}


//8. Decorator 修饰器

// 官网提供了babel-plugin-transform-decorators这个插件来解析，但是我发现不work，就找了下面这个
// $ npm install babel-plugin-transform-decorators-legacy --save-dev
// {
//   "presets": ["es2015","react","stage-0"],
//   "plugins": ["transform-decorators-legacy"]
// }

function testable(target) {
  target.isTestable = true;
}
@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable)  //true






























//











  //




























//
