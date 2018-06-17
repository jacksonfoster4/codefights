// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    return String(n).split('').reduce((a,b)=>a+Number(b),0)
}
