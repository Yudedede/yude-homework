function every (array,test) {
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]) == false) {
            return false;
        }
        if (test(array[i]) == true) {
            continue;
        }
    }
    return true;
}
console.log(every([1,3,5],n=>n<10));
console.log(every([2,4,16],n=>n<10));
console.log(every([],n=>n<10));

function every2 (array,test) {
   if (array.some(n => !test(n)) ) {
       return false;
   }
   return true;
}
console.log(every2([1,3,5],n=>n<10));
console.log(every2([2,4,16],n=>n<10));
console.log(every2([],n=>n<10));