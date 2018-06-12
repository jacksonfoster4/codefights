/*
You are given an n x n 2D matrix that represents an image. Rotate the image by
90 degrees (clockwise).

Example


a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

function rotateImage(data) {
    let N = data.length
    for(let row = N-1; row >= 0; row--){
      for(let col = 0; col < row; col++){
        [data[row][col], data[col][row]] = [data[col][row], data[row][col]]
      }
      data[row] = data[row].reverse()
    }
  return data
}
