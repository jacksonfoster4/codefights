/*
Let's define digit degree of some positive integer as the number of times we need to 
replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.
*/

function digitDegree(n) {
    let final = 0
    let digit = String(n).split("")
    while(digit.length > 1){
        digit = String(digit.reduce((a,b)=>a+Number(b),0)).split('')
        final++
    }
    return final
}
