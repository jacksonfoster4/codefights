/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/
function palindromeRearranging(inputString) {
    inputString = inputString.split("")
    let evenLength = inputString.length % 2 == 0
    let palindrome = false
    let count = (char) => {
        return inputString.filter(el => el == char).length
    }
    for(let char of inputString){
        if(evenLength && count(char) % 2 != 0) return false
        if(count(char) == 1){
            if(palindrome){
                return false
            }
            else {
                palindrome = true
            }
        }
    }
    return true
}
