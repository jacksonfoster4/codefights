/* 
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4. 
*/

function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a,b) => a-b)
    let greatestVal = inputArray[inputArray.length - 1] + 1
    for(let lengthOfJumps = 1; lengthOfJumps <= greatestVal; lengthOfJumps++){
        if(inputArray.every(el => el % lengthOfJumps != 0)){
            return lengthOfJumps
        }
    }
}
