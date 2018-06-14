/*
Given an array of integers, find the maximal absolute difference between any
two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = 0;
    for(let i = 1; i < inputArray.length; i++){
        let candidates = [inputArray[i-1], inputArray[i]].sort((a,b) => a-b)
        let diff = candidates[1] - candidates[0]
        if( diff > maxDiff){
            maxDiff = diff
        }
    }
    return maxDiff
}
