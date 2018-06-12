/*
Ticket numbers usually consist of an even number of digits. A ticket number is
considered lucky if the sum of the first half of the digits is equal to the sum
of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/
function isLucky(n) {
    n = String(n)
    let mid = n.length / 2
    let first = n.slice(0, mid).split("")
    let last = n.slice(mid).split("")
    let firstSum = first.map(el => Number(el)).reduce((a,b) => a + b)
    let lastSum = last.map(el => Number(el)).reduce((a,b) => a + b)
    return firstSum == lastSum
}
