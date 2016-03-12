'use strcit';

export default class Point {
  // constructor方法是类的默认方法
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // 这里定义的都是类的公共方法
  // 等同于Point.prototype.toString
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var point = new Point(2, 3);

console.log(point.toString());
console.log(point.hasOwnProperty('x'))
console.log(point.hasOwnProperty('y'))
console.log(point.hasOwnProperty('toString'))
console.log(point.__proto__.hasOwnProperty('toString'))
