/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/
function allLongestStrings(inputArray) {
    let longest = 0;
    for(let el of inputArray){
        if(el.length > longest){
            longest = el.length
        }
    }
    return inputArray.filter(el => el.length == longest)
}
