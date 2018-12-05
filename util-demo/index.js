const util = require('util');

// inherits： 对象原型继承

function Parent() {
    this.name = 'Lihua';
    this.age = 22;
    this.say = function() {
        console.log('hello');
    }
}

Parent.prototype.showName = function () {
    console.log(this.name);
};

function Son() {
    this.name = 'Lihua son';
}

util.inherits(Son, Parent);

const parent = new Parent();
const son = new Son();

parent.showName();
parent.say();
console.log(parent);

son.showName();
// 不会继承属性与方法，原型链机制
// son.say();
console.log(son);

// inspect： 将任意对象转化成字符串

console.log(util.inspect(son, true));