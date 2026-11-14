function reverseArray(a)  {
    let result =[];
    for(let m of a) { 
        result.unshift(m)
    }   
    return result
}
let myArray = ["a","b","c"]
console.log(reverseArray(myArray))
let yu = [1,2,3,4,5]
function reverseArrayInplace(b) {
    for(let w = 0;b.length % 2 ==1 ? w <= Math.floor(b.length/2) : w<=b.length/2-1;w++){
       let m = b[w]
       let p = b[b.length-w-1]
        b[b.length-w-1] = m;
        b[w] = p;
    }
    return b
}
console.log(reverseArrayInplace(yu))