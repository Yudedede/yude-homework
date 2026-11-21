function maxSon(num){
let nowMax = num[0];
let finalMax = num[0];
for (let i = 1;i < num.length;i++){
    if(nowMax < 0){
        nowMax = num[i];
    }
    else {
        nowMax = nowMax+num[i];
    }
    finalMax = Math.max(nowMax,finalMax);
}
return finalMax;
}
console.log(maxSon([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSon([5,4,-1,7,8]));
