/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
*/

function arrayMaxConsecutiveSum(inputArray, k) {
    let final = 0
    for(let i = 0; i < inputArray.length; i++){
        let temp = inputArray.slice(i, i+k).reduce((a,b)=>a+b,0)
        temp > final ? final = temp : null
    }
    return final
}
