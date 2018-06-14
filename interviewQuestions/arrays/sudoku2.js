/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers 
in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that 
compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a 
valid Sudoku puzzle according to the layout rules described above. Note that the puzzle 
represented by grid does not have to be solvable.
*/

function sudoku2(grid){
    if(!checkVertical(grid)){
        return false
    }
    if(!checkHorizontal(grid)){
        return false
    }
    if(!checkSubGrids(grid)){
        return false
    }
   return true
}

function checkSubGrids(grid){
   // coordinates of sub-grid centers
   let targets = [1,4,7]
   
   for(let i = 1; i < grid.length-1; i++){
       for(let j = 1; j < grid[i].length-1; j++){
           if(targets.includes(j) && targets.includes(i)){ // if coordinates are a center
               // get the top row
               // get the middle row. middle[1] == one of the targets
               // get the bottom row
               let top = [grid[i-1][j-1], grid[i-1][j], grid[i-1][j+1]].filter(el => el != '.')
               let middle = [grid[i][j-1], grid[i][j], grid[i][j+1]].filter(el => el != '.')
               let bottom = [grid[i+1][j-1], grid[i+1][j], grid[i+1][j+1]].filter(el => el != '.')
               let collapsed = [...top, ...middle, ...bottom]
               
               // check if all values are unique
               if(new Set(collapsed).size != collapsed.length){
                   return false
               }
           }
       }
   }
   return true
}

function checkHorizontal(grid){
   for(let i = 0; i < grid.length; i++){
       let row = grid[i].filter(el => el != '.')
       let set = new Set(row)
       if(set.size != row.length) return false
   }
   return true
}
function checkVertical(grid){
   for(let row = 0; row < grid.length; row++){
       let vals = [];
       for(let col = 0; col < grid[row].length; col++){
           let val = grid[col][row]
           if(vals.includes(val) && val != '.'){
               return false
           }
           else {
               vals.push(val)
           }
       }
   }
   return true
}