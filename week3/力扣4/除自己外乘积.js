// let nums = [1,2,3,4];
let nums = [-1, 1, 0, -3, 3];
;

function cheng(i) {
            let chengji = 1;
            for(let x = 0;x <answer.length;x++) {
            if (x == i) {
                continue;
            }
            else chengji = chengji * nums[x];
}
return chengji;
}
let answer = new Array(nums.length);
for(let i = 0; i<nums.length;i++) {
    answer[i] = cheng(i)
}
console.log(answer)