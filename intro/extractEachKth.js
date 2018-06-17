// Given array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
    k--
    for(let i = k; i < inputArray.length; i += k){
        inputArray.splice(i, 1)
    }
    return inputArray
}
