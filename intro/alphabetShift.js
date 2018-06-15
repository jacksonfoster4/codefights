/*
Given a string, replace each its character by the next one in the English alphabet 
(z would be replaced by a).
*/

function alphabeticShift(inputString) {
    inputString = inputString.split("")
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split("")
    for(let i = 0; i < inputString.length; i++){
        let j = ALPHABET.indexOf(inputString[i])
        if(j == ALPHABET.length-1) j = -1
        inputString.splice(i, 1, ALPHABET[j+1])
    }
    return inputString.join("")
}
