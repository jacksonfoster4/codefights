/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".
*/

function longestDigitsPrefix(inputString) {
    inputString= inputString.split('')
    let longest = ''
    let i = 0;
    if(inputString[0] ==' ') return longest // if first character is space. keeps while loop cleaner
    while(Number(inputString[i]) || Number(inputString[i])==0){
          longest += inputString[i]
          if(i==inputString.length) break; // just to keep the while loop cleaner
          i++
    }
    return longest
}

