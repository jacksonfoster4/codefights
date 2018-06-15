/*
Given two cells on the standard chess board, determine whether they have the same color or not.
*/

function chessBoardCellColor(cell1, cell2){
    let map = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8
    }
    let isEven = num => num % 2 == 0
    let cell1Color; 
    let cell2Color; 
    // if both coordinates are even or both are odd, the cell is black
    // if the coordinates are the same the cell is black
    // else the cell is white
    if(isEven(map[cell1[0]]) && isEven(cell1[1])){
        cell1Color = 'black'
    }
    else if(map[cell1[0]] == cell1[1]){
        cell1Color = 'black'
    }
    else if(!isEven(map[cell1[0]]) && !isEven(cell1[1])){
        cell1Color = 'black'
    }
    else {
        cell1Color = 'white'
    }

    if(isEven(map[cell2[0]]) && isEven(cell2[1])){
        cell2Color = 'black'
    }
    else if(!isEven(map[cell2[0]]) && !isEven(cell2[1])){
        cell2Color = 'black'
    }
    else if(map[cell2[0]] == cell2[1]){
        cell2Color = 'black'
    }
    else {
        cell2Color = 'white'
    }
    
    return cell1Color == cell2Color
}