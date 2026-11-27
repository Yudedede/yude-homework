function hasStraightFlush(arr) {
    let a = arr.filter(n => 0<=n&&n<=12) 
    let b= arr.filter(n => 13<=n&&n<=25) 
    let c = arr.filter(n => 26<=n&&n<=38) 
    let d = arr.filter(n => 39<=n&&n<=51) 
    let count = 1;

    if(a.length>= 5){
        for(let i = 0;i<a.length;i++){
            a[i] = a[i]%13;
        }
        a.sort((m,n) =>m-n)
        if (a[0] === 0) a.push(13) ;
        for(let x = 0;x<a.length-1;x++){
            if(a[x]+1==a[x+1]){
                count++;
                if(count ==5){
                    return true
            }
            }
            else {count = 1;}
        }

        return false;
    }


    if(b.length>= 5){
        for(let i = 0;i<b.length;i++){
            b[i] = b[i]%13;
        }
        b.sort((m,n) =>m-n)
        if (b[0] === 0) b.push(13) ;
        for(let x = 0;x<b.length-1;x++){
            if(b[x]+1==b[x+1]){
                count++;
                if(count ==5){
                    return true
            }
            }
            else {count = 1;}
        }

        return false;
    }
    if(c.length>= 5){
        for(let i = 0;i<c.length;i++){
            c[i] = c[i]%13;
        }
        c.sort((m,n) =>m-n)
        if (c[0] === 0) c.push(13) ;
        for(let x = 0;x<c.length-1;x++){
            if(c[x]+1==c[x+1]){
                count++;
                if(count ==5){
                    return true
            }
            }
            else {count = 1;}
        }

        return false;
    }
    if(d.length>= 5){
        for(let i = 0;i<d.length;i++){
            d[i] = d[i]%13;
        }
        d.sort((m,n) =>m-n)
        if (d[0] === 0) d.push(13) ;
        for(let x = 0;x<d.length-1;x++){
            if(d[x]+1==d[x+1]){
                count++;
                if(count ==5){
                    return true
            }
            }
            else {count = 1;}
        }

        return false;
    }
return false;
}



// console.log(hasStraightFlush([9, 10, 11, 12, 0, 20, 33]))
// console.log(hasStraightFlush([26, 27, 29, 33, 5, 12, 41]))
// console.log(hasStraightFlush([0, 14, 28, 42, 9, 23, 45]))
// console.log(hasStraightFlush([8, 20, 4, 7, 33, 5, 6]))
// console.log(hasStraightFlush([18, 19, 20, 21, 22, 2, 46]))
// console.log(hasStraightFlush([26, 27, 28, 29, 30, 12, 45]))
// console.log(hasStraightFlush([1, 2, 5, 8, 12, 20, 33]))
console.log(hasStraightFlush([1, 2, 5, 8, 12, 20, 33])) // false：同花，但凑不出五连
console.log(hasStraightFlush([1, 4, 5, 6, 7, 8, 20]))  // true：跳过散牌后有五连
console.log(hasStraightFlush([0, 3, 6, 9, 10, 11, 12])) // true：10-J-Q-K-A


