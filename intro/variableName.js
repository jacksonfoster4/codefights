/*
Correct variable names consist only of English letters, digits and underscores and they 
can't start with a digit.

Check if the given string is a correct variable name.
*/

function variableName(name) {
    let regex = /^[a-z_]\w*$/i
    return regex.test(name)
}
