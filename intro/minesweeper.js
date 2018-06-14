/*
In the popular Minesweeper game you have a board with some mines and those cells that 
don't contain a mine have a number in it that indicates the total number of mines in 
the neighboring cells. Starting off with some arrangement of mines we want to create a 
Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]    
*/

// not the best solution but i give myself points for readability
function minesweeper(matrix) {
    let final = []
    for(let i = 0; i < matrix.length; i++){
        final.push([]) 
        for(let j = 0; j < matrix[i].length; j++){
            final[i][j] = 0
            
            // left
            if(matrix[i][j-1] != undefined){
                if(matrix[i][j-1]){
                    final[i][j]++
                }
            }
            // right
            if(matrix[i][j+1] != undefined){
                if(matrix[i][j+1]){
                    final[i][j]++
                }
            }
            
            // above
            if(matrix[i-1] != undefined){
                // above middle
                if(matrix[i-1][j]){
                    final[i][j]++
                }
                // above left
                if(matrix[i-1][j-1] != undefined){
                    if(matrix[i-1][j-1]){
                        final[i][j]++
                    }
                }
                // above right
                if(matrix[i-1][j+1] != undefined){
                    if(matrix[i-1][j+1]){
                        final[i][j]++
                    }
                }
            }
            
            
            // bottom
            if(matrix[i+1] != undefined){
                // bottom middle
                if(matrix[i+1][j]){
                    final[i][j]++
                }
                // bottom left
                if(matrix[i+1][j-1] != undefined){
                    if(matrix[i+1][j-1]){
                        final[i][j]++
                    }
                }
                // bottom right
                if(matrix[i+1][j+1] != undefined){
                    if(matrix[i+1][j+1]){
                        final[i][j]++
                    }
                }
            }
            
        }
    }
    return final
}
