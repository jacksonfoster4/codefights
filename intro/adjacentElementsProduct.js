/*
Given an array of integers, find the pair of adjacent elements that has the
largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/
function adjacentElementsProduct(inputArray) {
    let greatest = inputArray[0] * inputArray[1]
    for(let i = 1; i < inputArray.length; i++){
        let product = inputArray[i] * inputArray[i+1]
        if(product > greatest){
            greatest = product
        }
    }
    return greatest
}
