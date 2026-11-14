function countBs(m) {
    let count = 0;
    for (let i = 0; i < m.length; i = i + 1) {
        if (m[i] == "B") {
            count = count + 1;
        }
    }
    return count;
}
console.log(countBs("B0B"));
function countChar(a,b) {
    let count = 0;
    for (let i = 0 ; i < a.length; i = i+1) {
        if (a[i] == b) {
            count = count + 1;
        }
    }
    return count;
}
console.log(countChar("kakkerlak", "k"));