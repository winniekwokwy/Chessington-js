import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // return new Array(0);
        let bishopMoves = []
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;


        //diagonally right-down
        row = location.row + 1, col = location.col -1
        while (row >= 0 && col >=0) {
            bishopMoves.push(Square.at(row,col))
            row++,
            col--;
        }
    
    
        //diagonally right-up
        row = location.row + 1, col = location.col +1
        while (row >= 0 && col < GameSettings.BOARD_SIZE) {
            bishopMoves.push(Square.at(row,col))
            row++,
            col++;
        }

        //diagonally left-up
        row = location.row - 1, col = location.col +1
        while (row >= 0 && col < GameSettings.BOARD_SIZE) {
            bishopMoves.push(Square.at(row,col))
            row--,
            col++;
        }

        //diagonally left-down
        row = location.row - 1, col = location.col -1
        while (row >= 0 && col >=0) {
            bishopMoves.push(Square.at(row,col))
            row--,
            col--;
        }
        return bishopMoves;
    
    }
}




