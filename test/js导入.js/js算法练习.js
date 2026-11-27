// 变量
var myFriend = 10
//  数据类型
var myNum = 10  //数值类型
var mystr ='文本'   
var myName = "我" //字符串类型
var myBool = true //或者false 布尔类型
var myNull = null //用于清空变量内容 表示空
var myUn //undefind 容器的默认值 表示还没给变量赋值
//输出方式
console.log(myFriend)

//运算符
var sum = 1 - 2 * 3 % 4 //先算乘除取余再算加减
console.log(sum)
var resultStr = '你好' + 'js' //字符串也可用运算符 用于拼接
var isTrue = 2 > 1
console.log(isTrue)
console.log(2 === 2)
//语句 
// if ( ) {
//     console.log()
// }//如果小括号内条件为真 则大括号执行

// if () {

// } else {

// } //两种情况

// if () {

// } else if () {

// } else{

// }//多种情况
var sum = 0
for(var i = 0; i<10; i++) {
    sum = sum + i
}//小括号内 变量；进行条件；每次循环后执行动作 大括号里可以套if(){}
console.log(sum)

//函数
function getSum (start,end) {
    var sum = 0
    for(var i = start;i<=end;i++){
        sum = i + sum
    }
    console.log('结束')
    return sum //写完return函数就结束了
}
//函数需要调用
var result = getSum (2,100) 
console.log(result)
function getsumwithcondition (start,end,fn) {
    var sume = 0
    for (var i = start; i<=end;i++ ) {
        if(fn(i)) {
             sume += i
        }
    }
    return sume
}
var re = getsumwithcondition(50,100,function(n) {
    if (n % 2 !== 0) {
        return true
        }
        return false
})
console.log(re)
//数组
var myarr = [10,20,30,40,50]
console.log(myarr.length)
console.log(myarr[0])
myarr.push(100)
myarr.unshift(200)
console.log(myarr)
//对象
var obj = {
    name:'123',age:18
}
console.log(obj)
console.log(obj.name)
