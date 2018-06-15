/* Given a matrix (i.e. an array of arrays), find its submatrix obtained by deleting the 
specified rows and columns.

Example

For

matrix = [[1, 0, 0, 2], 
          [0, 5, 0, 1], 
          [0, 0, 3, 5]]
rowsToDelete = [1] and columnsToDelete = [0, 2], the output should be

constructSubmatrix(matrix, rowsToDelete, columnsToDelete) = [[0, 2],
                                                             [0, 5]] 
*/
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    for(let row of rowsToDelete){
        matrix.splice(row, 1)
    }
    for(let i = 0; i < matrix.length; i++){
        for(let col of columnsToDelete){
            matrix[i].splice(col, 1, null)
        }
    }
    return matrix.map(arr => arr.filter(el => el != null))
}
                                                            