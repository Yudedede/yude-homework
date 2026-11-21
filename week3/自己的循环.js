function loop(a,b,c,d) {
    if (b(a) == true) {
        d(a);
        let m = c(a);
        loop(m,b,c,d);

    }
    return;
    }


loop(3,n=>n>0,n=>n-1,console.log);
