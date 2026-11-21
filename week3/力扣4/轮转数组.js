// const nums = [1, 2, 3, 4, 5, 6, 7];
const nums = [-1, -100, 3, 99];

function newnums(k){
    for(let i = 1 ;i <= k;i++){
       let last = nums[nums.length-1]
        nums.unshift(nums[nums.length-1])
       nums.pop([nums.length-1])

    }
    return nums
}
console.log(newnums(2))