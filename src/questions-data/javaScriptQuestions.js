export const JavaScriptQuestions = [{
    id: 1,
    questionCode: `
switch(1) {
case 2 : console.log(2); break;
default: console.log(3);
case 4: console.log(4)
}
    `,
    question: 'What is printed in the console ?',
    answer_a: 'error',
    answer_b: 'undefined',
    answer_c: '2, 3',
    answer_d: '3, 4',
    correct_answer: 'd',
},

{
    id: 2,
    questionCode: `
Promise.reject()
.then(() => {
console.log('then1')
})
.catch(() => {
console.log('catch')
})
.then(() => {
console.log('then2')
})
    `,
    question: ' What is printed in the console ?',
    answer_a: 'then1 then2',
    answer_b: 'then1 catch',
    answer_c: 'Error',
    answer_d: 'catch then2',
    correct_answer: 'd',
},

{
    id: 3,
    questionCode: `
Promise.resolve()
.then(() => {
setTimeout(() => {
    console.log('setTimeout 1')
}, 0)
})
.then(() => {
console.log('then')
})
setTimeout(() => {
console.log('setTimeout 2')
}, 0)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'then, setTimeout 2, setTimeout 1',
    answer_b: 'then, setTimeout 1, setTimeout 2',
    answer_c: 'setTimeout 2, setTimeout 1, then',
    answer_d: 'then, setTimeout 2, null',
    correct_answer: 'a',
},

{
    id: 4,
    questionCode: `
function foo() {
console.log(this)
}

function goo() {
return arguments[0]()
}   
goo(foo)
    `,
    question: ' What is printed in the console ?',
    answer_a: 'window',
    answer_b: 'undefined',
    answer_c: 'Arguments in goo',
    answer_d: 'error',
    correct_answer: 'c',
},

{
    id: 5,
    questionCode: `
const showCase = value => {
switch(value) {
case 'A':
    console.log('Case A');
    break;
case 'B':
    console.log('Case B');
    break;
case undefined:
    console.log('undefined');
    break;
default:
    console.log('Do not know!');
}
}
showCase(String('A'))
    `,
    question: ' What is printed in the console ?',
    answer_a: 'undefined',
    answer_b: 'Case B',
    answer_c: 'Case A',
    answer_d: 'Do not know!',
    correct_answer: 'c',
},
{
    id: 6,
    questionCode: `
Promise.resolve()
.then(() => {
console.log('then1')
})
.then(() => {
console.log('then2')
})
setTimeout(() => {
console.log('setTimeout')
})
console.log('last console')
    `,
    question: ' What is printed in the console',
    answer_a: 'then1, setTimeout, then2, last console',
    answer_b: 'setTimeout, last console, then1, then2',
    answer_c: 'last console, then1, then2, setTimeout',
    answer_d: 'then1, then2, setTimeout, last console',
    correct_answer: 'c',
},
{
    id: 7,
    questionCode: `
const a = [0];
if ([0]) {
console.log(a == true);
} else {
console.log("boom");
}
    `,
    question: 'What is printed in the console',
    answer_a: 'false',
    answer_b: 'true',
    answer_c: 'undefined',
    answer_d: 'error',
    correct_answer: 'a',
},
{
    id: 8,
    questionCode: `
[] === []
    `,
    question: 'What is the result of this expression?',
    answer_a: 'error',
    answer_b: 'true',
    answer_c: 'undefined',
    answer_d: 'false',
    correct_answer: 'd',
},
{
    id: 9,
    questionCode: `
const obj1 = {
x: 10
}
const obj2 = obj1;
obj1.x = 20;
console.log(obj2.x)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'undefined',
    answer_b: '10',
    answer_c: '20',
    answer_d: 'error',
    correct_answer: 'c',
},
{
    id: 10,
    questionCode: `
function foo(ary) {
ary[0] = ary[2];
}
function bar(a,b,c) {
c = 10
foo(arguments);
return a + b + c;
}
bar(1, 1, 1)
    `,
    question: 'What is the result of this expression?',
    answer_a: '10',
    answer_b: '21',
    answer_c: 'undefined',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 11,
    questionCode: `
const foo = () => {
return arguments
}
foo(10, 10, 50, 20)
    `,
    question: 'What is the result of this expression?',
    answer_a: '10, 10, 50, 20',
    answer_b: '10',
    answer_c: 'undefined',
    answer_d: 'error',
    correct_answer: 'd',
},
{
    id: 12,
    questionCode: `
function foo() {
return arguments.map(item => {
    return item + 10
}) 
}
foo(10, 10, 50, 20)
    `,
    question: 'What is the result of this expression?',
    answer_a: '[20, 20, 70, 40]',
    answer_b: 'error',
    answer_c: 'undefined',
    answer_d: 'NaN',
    correct_answer: 'b',
},
{
    id: 13,
    questionCode: `
const foo = function foo() {
return foo === foo;
}
console.log(foo())
    `,
    question: 'What is printed in the console ?',
    answer_a: 'false',
    answer_b: 'error',
    answer_c: 'undefined',
    answer_d: 'true',
    correct_answer: 'd',
},
{
    id: 14,
    questionCode: `
function foo() {
}
var foo = 10;

console.log(typeof foo)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'error',
    answer_b: 'number',
    answer_c: 'function',
    answer_d: 'null',
    correct_answer: 'b',
},
{
    id: 15,
    questionCode: `
const foo = (n) => {
for(var i = 0; i < n; i++) {
    setTimeout(() => {
    console.log(i)
    }, i * 100 )   
}
}
foo(5)
    `,
    question: 'What is printed in the console ?',
    answer_a: '5 item 5',
    answer_b: '1, 2, 3, 4',
    answer_c: 'error',
    answer_d: '1, 2, 3, 4, 5',
    correct_answer: 'a',
},
{
    id: 16,
    questionCode: `
const foo = () => {
let i = 0; 
return () => {
    return i++
}
}

const baz = foo();
console.log(baz(), 'baz');
console.log(baz(), 'baz');
console.log(baz(), 'baz');

const bar = foo();
console.log(bar(), 'bar');
console.log(bar(), 'bar');
console.log(baz(), 'baz');
    `,
    question: 'What is printed in the console ?',
    answer_a: '1 "baz", 1 "baz", 2 "baz", 0 "bar", 1 "bar", 0 "baz"',
    answer_b: '0 "baz", 1 "baz", 2 "baz", 0 "bar", 1 "bar", 0 "baz"',
    answer_c: '0 "baz", 1 "baz", 2 "baz", 0 "bar", 1 "bar", 3 "baz"',
    answer_d: 'error',
    correct_answer: 'c',
},
{
    id: 17,
    questionCode: `
(function(){
var x = y = 1;
})();
console.log(y);
console.log(x);
    
    `,
    question: 'What is printed in the console ?',
    answer_a: '1, 1',
    answer_b: 'error, error',
    answer_c: '1, error',
    answer_d: '1, undefined',
    correct_answer: 'c',
},
{
    id: 18,
    questionCode: `
const x = 20;

const boo = () => {
return x
}
const foo = () => {
const x = 10;
return boo()
}
foo()
    `,
    question: 'what will he return boo ?',
    answer_a: '20',
    answer_b: '10',
    answer_c: 'error',
    answer_d: 'undefined',
    correct_answer: 'a',
},
{
    id: 19,
    questionCode: `
const foo = a =>  {
var a;
return a;
}
const boo = a => {
var a = 'bye';
return a;
}
[foo('hello'), boo('hello')]
    `,
    question: 'What is the result of this expression? ',
    answer_a: '["hello", "hello"]',
    answer_b: '["hello", "bye"]',
    answer_c: '["bye", "bye"]',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 20,
    questionCode: `
(function(x, f = () => x) {
var x;
var y = x;
x = 2;
return [x, y, f()];
})(1)
    `,
    question: 'What is the result of this expression?',
    answer_a: '[2, 1, 1] ',
    answer_b: '[2, undefined, 1]',
    answer_c: '[2, 1, 2]',
    answer_d: '[2, undefined, 2]',
    correct_answer: 'a',
},
{
    id: 21,
    questionCode: `
if(!![]) {
console.log([] === false)
}else {
console.log(!!{} + !![])
}
    `,
    question: 'What is printed in the console ?',
    answer_a: 'false',
    answer_b: 'true',
    answer_c: 'undefined',
    answer_d: 'NaN',
    correct_answer: 'a',
},
{
    id: 22,
    questionCode: `
try {
console.log(1/0)
}catch {
console.log(1)
}finally {
console.log(2)
}
    `,
    question: 'What is printed in the console ?',
    answer_a: 'error',
    answer_b: 'Infinity',
    answer_c: '1',
    answer_d: 'Infinity 2',
    correct_answer: 'd',
},
{
    id: 23,
    questionCode: `
const foo = () =>  {
return
{
    test: 1
};
}
console.log(foo())
    `,
    question: 'What is printed in the console ?',
    answer_a: 'function',
    answer_b: 'number',
    answer_c: 'object',
    answer_d: 'undefined',
    correct_answer: 'd',
},
{
    id: 24,
    questionCode: `
Number("20") - 20 == 0
    `,
    question: 'What is the result?',
    answer_a: 'true',
    answer_b: 'false',
    answer_c: 'error',
    answer_d: 'undefined',
    correct_answer: 'a',
},
{
    id: 25,
    questionCode: `
const arr = [NaN, 4, 6, 9];
console.log(arr.indexOf(4));
console.log(arr.indexOf(NaN)) 
    `,
    question: 'What is printed in the console ?',
    answer_a: '1, 1',
    answer_b: 'NaN, 1',
    answer_c: '2, 1',
    answer_d: '1, -1',
    correct_answer: 'd',
},
{
    id: 26,
    questionCode: `
const foo = () => {
return boo;
boo = 10;
function boo() {};
var boo = 10
}
console.log(typeof foo())
    `,
    question: 'What is the result?',
    answer_a: 'number',
    answer_b: 'function',
    answer_c: 'undefined',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 27,
    questionCode: `
const obj1 = {
baz:'Hi!',
arr: [2, 5, 7, 8]
}
const obj2 = {...obj1};
obj1.baz = 'Hello',
obj1.arr.push(20, 59);

console.log(obj2.baz);
console.log(obj2.arr);
    `,
    question: 'What is printed in the consoles ?',
    answer_a: 'Hi!, [2, 5, 7, 8]',
    answer_b: 'Hello, [2, 5, 7, 8, 20, 59]',
    answer_c: 'Hi!, [2, 5, 7, 8, 20, 59]',
    answer_d: 'error',
    correct_answer: 'c',
},
{
    id: 28,
    questionCode: `
var x = 22;

const obj = {
x: 55,
bar: {
    x: 6,
    baz: function() {
        return this.x;
    }
}
}
const foo = obj.bar.baz;

alert(foo());
alert(obj.bar.baz());
    `,
    question: 'What is the order of values alerted?',
    answer_a: '22, 55',
    answer_b: '6, 55',
    answer_c: '22, 6',
    answer_d: 'error',
    correct_answer: 'c',
},
{
    id: 29,
    questionCode: `
[] + [] + 'foo'.split('');
    `,
    question: 'What is the result?',
    answer_a: '[]',
    answer_b: 'f, o, o',
    answer_c: '"[]"',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 30,
    questionCode: `
function foo(...args) {
console.log(typeof args);
}      
foo()
    `,
    question: 'What is printed in the consoles ?',
    answer_a: 'object',
    answer_b: 'number',
    answer_c: 'undefined',
    answer_d: 'error',
    correct_answer: 'a',
},
{
    id: 31,
    questionCode: `
var x = 1;
function foo(x) {
x = x + x
}
foo(x);
console.log(x)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'undefined',
    answer_b: '11',
    answer_c: '2',
    answer_d: '1',
    correct_answer: 'd',
},
{
    id: 32,
    questionCode: `
const ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });
    `,
    question: 'What is printed in the console ?',
    answer_a: '[2, 1, 1]',
    answer_b: '["1", empty * 2]',
    answer_c: '[2, "1", "1"]',
    answer_d: '["1", "1", "1"]',
    correct_answer: 'b',
},
{
    id: 33,
    questionCode: `
const arr = [1, 2, 3, 10, 11, 21];
arr.sort();
console.log(arr)
    `,
    question: 'What is printed in the console ?',
    answer_a: '[1, 10, 2, 11, 3, 21]',
    answer_b: '[1, 10, 11, 2, 21, 3]',
    answer_c: '[1, 2, 3, 10, 11, 21]',
    answer_d: '[1, 2, 3, 11, 10 21]',
    correct_answer: 'b',
},
{
    id: 34,
    questionCode: `
function foo() {
var y = {};
x = y = typeof x;
console.log(x)
}
foo()
    `,
    question: 'What is printed in the console ?',
    answer_a: 'undefined',
    answer_b: 'object',
    answer_c: 'error',
    answer_d: '?',
    correct_answer: 'a',
},
{
    id: 35,
    questionCode: `
const foo = (n) => {
for(let i = 0; i < n; i++) {
    setTimeout(() => {
    console.log(i)
    }, i * 100 )   
}
}
foo(10)
    `,
    question: 'What is printed in the consoles ?',
    answer_a: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    answer_b: '10 item 10',
    answer_c: 'error',
    answer_d: '1, 2, 3, 4, 5, 6, 7, 8, 10',
    correct_answer: 'a',
},
{
    id: 36,
    questionCode: `
var x = 10
const obj = {
x: 20,
foo: function() {
    setTimeout(() => {
        console.log(this.x)
    }, 0)
}
}
obj.foo()
    `,
    question: 'What is printed in the console ?',
    answer_a: '10',
    answer_b: 'undefined',
    answer_c: '20',
    answer_d: 'error',
    correct_answer: 'c',
},
{
    id: 37,
    questionCode: `
const arr = ['foo', 'bar', 'baz'];
console.log('2' in arr);
    `,
    question: 'What is printed in the console ?',
    answer_a: 'true',
    answer_b: 'false',
    answer_c: 'bar',
    answer_d: 'undefined',
    correct_answer: 'a',
},
{
    id: 38,
    questionCode: `
var x = 10
const obj = {
x: 20,
foo: function() {
setTimeout(function() {
    console.log(this.x)
}, 0)
}
}
obj.foo()
    `,
    question: 'What is printed in the consoles ?',
    answer_a: 'undefined',
    answer_b: '10',
    answer_c: '20',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 39,
    questionCode: `
const arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
console.log(arr.length);
    `,
    question: 'What is printed in the console ?',
    answer_a: '1',
    answer_b: 'undefined',
    answer_c: '2',
    answer_d: '3',
    correct_answer: 'c',
},
{
    id: 40,
    questionCode: `
const obj = {class: "Person", name: 'David'};
obj.class
    `,
    question: 'What is the result of this expression ?',
    answer_a: 'Animal',
    answer_b: 'Person',
    answer_c: 'Error',
    answer_d: 'undefined',
    correct_answer: 'b',
},
{
    id: 41,
    questionCode: `
typeof class{}
    `,
    question: 'What is the result ?',
    answer_a: 'function',
    answer_b: 'class',
    answer_c: 'object',
    answer_d: 'undefined',
    correct_answer: 'a',
},
{
    id: 42,
    questionCode: `
const x = [];
console.dir(x.__proto__.__proto__)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'null',
    answer_b: 'object',
    answer_c: 'Array',
    answer_d: 'Object',
    correct_answer: 'd',
},
{
    id: 43,
    questionCode: `
let obj = {};
console.log(obj.prototype)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'undefined',
    answer_b: 'null',
    answer_c: 'error',
    answer_d: 'object',
    correct_answer: 'a',
},
{
    id: 44,
    questionCode: `
const animal = {
jumps: null 
};

const rabbit = {
__proto__: animal,
jumps: true
}
console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
    `,
    question: 'What is printed in the console ?',
    answer_a: 'true, true',
    answer_b: 'true, null',
    answer_c: 'error',
    answer_d: 'true undefined',
    correct_answer: 'b',
},
{
    id: 45,
    questionCode: `
typeof Object
    `,
    question: 'What is the result?',
    answer_a: 'function',
    answer_b: 'null',
    answer_c: 'Object',
    answer_d: 'object',
    correct_answer: 'a',
},
{
    id: 46,
    questionCode: `
function A() {};
function B() {};

A.prototype = B.prototype = {};
let a = new A();
console.log(a instanceof A);
console.log(a instanceof B);
    `,
    question: 'What is printed in the consoles ?',
    answer_a: 'true, false',
    answer_b: 'false true',
    answer_c: 'true true',
    answer_d: 'error',
    correct_answer: 'c',
},
{
    id: 47,
    questionCode: `
function MyArray() { }
MyArray.prototype = [];

let arr = new MyArray();
arr.push(1, 2, 3);
console.log(arr.length);
    `,
    question: 'What is printed in the console ?',
    answer_a: '0',
    answer_b: '3',
    answer_c: 'undefined',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 48,
    questionCode: `
0 || "" || 2 || undefined || true || false

    `,
    question: 'What is the result ?',
    answer_a: 'undefined',
    answer_b: '0',
    answer_c: 'true',
    answer_d: '2',
    correct_answer: 'd',
},
{
    id: 49,
    questionCode: `
2 && 1 && null && 0 && undefined
    `,
    question: 'What is the result ?',
    answer_a: '2',
    answer_b: '1',
    answer_c: 'null',
    answer_d: 'undefined',
    correct_answer: 'c',
},
{
    id: 50,
    questionCode: `
null == undefined
    `,
    question: 'What is the result ?',
    answer_a: 'true',
    answer_b: 'false',
    answer_c: 'null',
    answer_d: 'undefined',
    correct_answer: 'a',
},
{
    id: 51,
    questionCode: `
class myClass {
static foo() {
    return this
}
}
console.log(typeof myClass.foo())
    `,
    question: 'What is printed in the console ?',
    answer_a: 'object',
    answer_b: 'function',
    answer_c: 'null',
    answer_d: 'window',
    correct_answer: 'b',
},
{
    id: 52,
    questionCode: `
let name = "lololoshka".replace("l", "d");
console.log(name)
    `,
    question: 'What is printed in the console ?',
    answer_a: 'dololoshka',
    answer_b: 'dododoshka',
    answer_c: 'lololoshka',
    answer_d: 'error',
    correct_answer: 'a',
},
{
    id: 53,
    questionCode: `
[] + false - null + true
    `,
    question: 'What is the result of this expression',
    answer_a: '"falsenulltrue"',
    answer_b: 'true',
    answer_c: 'false',
    answer_d: 'NaN',
    correct_answer: 'd',
},
{
    id: 54,
    questionCode: `
const name = 'Mark!';
(function () {
if (typeof name === 'undefined') {
    var name = 'Jonathan';
    console.log('Goodbye ' + name);
} else {
    console.log('Hello ' + name);
}
})();
    `,
    question: 'What is printed in the console ?',
    answer_a: 'Goodbye Mark',
    answer_b: 'Goodbye Jonathan',
    answer_c: 'Goodbye null',
    answer_d: 'error',
    correct_answer: 'b',
},
{
    id: 55,
    questionCode: `
[typeof null, null instanceof Object]
    `,
    question: 'What is the result of this expression',
    answer_a: 'error',
    answer_b: '[null, false]',
    answer_c: '["object", false]',
    answer_d: '["object", true]',
    correct_answer: 'c',
},
{
    id: 56,
    questionCode: `
Array.isArray( Array.prototype )
    `,
    question: 'What is the result?',
    answer_a: 'true',
    answer_b: 'false',
    answer_c: 'error',
    answer_d: 'undefined',
    correct_answer: 'a',
},
{
    id: 57,
    questionCode: `
const foo = (baz = 9) => {
var baz = 'HAPPY!';

function bar() {
    return 'HAPPY!'
}

function baz() {
    return 'HAPPY!'
}

var bar = 8
return [typeof baz, typeof bar]

}
foo()
    `,
    question: 'What is the result?',
    answer_a: '["number" "function"]',
    answer_b: '["function" "function"]',
    answer_c: '["string" "number"]',
    answer_d: '["string" "function"]',
    correct_answer: 'c',
},
{
    id: 58,
    questionCode: `
class DataBase {
constructor(data) {
    if(DataBase.exists) {
        return DataBase.demo
    }
    DataBase.demo = this;
    DataBase.exists = true;
    this.data = data;
}
}
const mongo = new DataBase('MongoDB');
const mysql = new DataBase('MySQL');
console.log(mysql)
    `,
    question: 'What is printed in the console ?',
    answer_a: '{data: "MongoDB"}',
    answer_b: '{data: "MySQL"}',
    answer_c: '{data: true}',
    answer_d: 'error',
    correct_answer: 'a',
}
];
