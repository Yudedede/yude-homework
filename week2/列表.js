function deepequal(a, b) {
    let x = Object.keys(a);
    let y = Object.keys(b);
    function shuxing() {
         for (const n of x) {
            if (!y.includes(n)||!deepequal(a[n],b[n])) {
                return true
  }
}
  
  return false;
}
    if (a === b) {
        return true;
    }
    else if(x.length !== y.length){
        return false;
    }
    else if (shuxing()) {
        return false;
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepequal(obj, obj));
console.log(deepequal(obj, {here: 1, object: 2}));
console.log(deepequal(obj, {here: {is: "an"}, object: 2}));
console.log
let key in a
!(key in b)

