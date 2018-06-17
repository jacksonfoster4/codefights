// Find the leftmost digit that occurs in a given string.

function firstDigit(inputString) {
    inputString = inputString.split('')
    for(char of inputString){
        if(char != ' ' && (Number(char) || Number(char)==0)) return char
    }
}
// Number(' ') = 0 wtf