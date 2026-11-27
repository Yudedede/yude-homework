console.log('hello')
alert('弹窗测试')
// 变量声明
var x;
let y = 5;
const PI = 3.14;
// 其中常用let const用于声明一个不变的常量
console.log(x,y,PI)
let name = '文本测试';
console.log(name);
let empty = 'null';
console.log(empty)
let age = 19;
if (age > 18) {
    console.log('你已经成年了')
} else {
    console.log('未成年')
}
let time = 15;
if (time < 12){
    alert('现在是上午')
} else if (time < 18) {
    alert('现在是下午')
} else{
    alert('晚上好')
}
console.log('for循环测试');
for (let i = 0;i<=10;i++) {
    console.log(i);
}
console.log('while循环测试')
let count = 1;
while(count <= 10){
    console.log(count);
    count++;
}
for (let w = 1;w<7;w++) {
    if (w == 2) {
        continue;
    }
    if (w == 4) {
        break;
    }
    console.log(w)
}
// 函数练习
function hello() {
    console.log('hello world')
}
// 调用函数
hello();
// 有返回值的函数
function hello2() {
    return 'hello world2 返回值';
}
console.log(hello2());
let a=hello2();
console.log(a);
// 带参数函数
function hello3(name) {
    return 'hello ' + name;
}
console.log(hello3('Alice'));

function click111() {
    alert('点击事件处罚了');
}
function onfocus111() {
    console.log('输入框获取焦点了');
}
function onblur111() {
    console.log('输入框失去焦点了');
}