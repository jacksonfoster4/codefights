/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]


*/
function addBorder(picture) {
    picture = picture.map(word => "*"+word+"*")
    picture.unshift('*'.repeat(picture[0].length))
    picture.push('*'.repeat(picture[0].length))
    return picture
}
