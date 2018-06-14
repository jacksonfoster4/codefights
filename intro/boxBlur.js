/* 
Last night you partied a little too hard. Now there's a black and white photo of 
you that's about to go viral! You can't let this ruin your reputation, so you want 
to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts 
the input image in the following way: Every pixel x in the output image has a value 
equal to the average value of the pixel values from the 3 × 3 square that has its 
center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down. 
*/
function boxBlur(image) {
    // gets all possible values that can have a 3x3 around them
    // it basically extracts all the values that arent on the border
    let targets = image.slice(1, image.length-1)
    .map(arr => {
        return arr.slice(1, arr.length-1)
    }) // selects all values not on the beginning or end
    .reduce((target, arr) => {
        target.push(...arr)
        return target
    }, []) // reduce to create one array with no nesting
    let final = []
    // image.length - 1 to avoid out of range
    for(let i = 1; i < image.length-1; i++){
        let row = []
        // image[i].length - 1 to avoid out of range
        for(let j = 1; j < image[i].length-1; j++){
            if(targets.includes(image[i][j])){
                // sum the top row
                // sum the middle row. row[1] == one of the targets
                // sum the bottom row
                let topTotal = image[i-1][j-1] + image[i-1][j] + image[i-1][j+1]
                let middleTotal = image[i][j-1] + image[i][j] + image[i][j+1]
                let bottomTotal = image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]
                let average = (topTotal + middleTotal + bottomTotal) / 9
                row.push(Math.trunc(average))
            }
        }
        if(row.length > 0){
            final.push(row)
        }
    }
    return final
}
