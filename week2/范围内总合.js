function range(start, end,step = 1) {
    result=[];
    if (start <= end) {
    for (let i=start; i <= end; i= i+step) {
        result.push(i);
}
    }
    else {
        for(let a=start;a>=end;a= a+step)
        result.push(a)
    }
return result;
}
function sum(numbers){
    result = 0;
    for(let i of numbers) {
        result= result + i;
    }
    return result;
}
console.log(range(1,10))
console.log(sum(range(1,10)))
console.log(range(5,2,-1))
console.log(range(2,10,2))
