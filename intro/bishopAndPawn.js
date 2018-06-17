/*
Given the positions of a white bishop and a black pawn on the standard 
chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal 
movement.
*/

// there is a mathematical pattern for the diagonal coordinates

function bishopAndPawn(bishop, pawn) {
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
    pawn = [map[pawn[0].toUpperCase()], Number(pawn[1])]
    bishop = [map[bishop[0].toUpperCase()], Number(bishop[1])]
    
    return Math.abs(pawn[0]-bishop[0]) == Math.abs(pawn[1]-bishop[1])
}
