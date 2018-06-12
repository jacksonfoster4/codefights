/*
You have a string s that consists of English letters, punctuation marks,
whitespace characters, and brackets. It is guaranteed that the parentheses in s
form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching
parentheses, starting from the innermost pair. The results string should not
contain any parentheses.
*/
function reverseParentheses(s) {
    while (s.indexOf(")")>0) {
        var indexOfClosing = s.indexOf(")");
        var indexOfLastOpening = s.lastIndexOf('(', indexOfClosing);
        var b = s.slice(indexOfLastOpening + 1, indexOfClosing).split("").reverse().join("");
        var s = s.slice(0, indexOfLastOpening) + b + s.slice(indexOfClosing + 1);
    }
return s;
}
