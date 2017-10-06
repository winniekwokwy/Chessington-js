import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;
        let rowStart=location.row-1;
        let colStart=location.col-1;
        let rowEnd=location.row+1;
        let colEnd=location.col+1;

        if (location.row===0)
            rowStart = location.row;
        if (location.col===0)
            colStart = colStart.col;
        if (location.row===GameSettings.BOARD_SIZE-1)
            rowEnd = location.row;
        if (location.col===GameSettings.BOARD_SIZE-1)
            colEnd = location.col;

        for (row = rowStart; row <= rowEnd; row++) {
            for (col = colStart; col<= colEnd; col++){
                if (!(row===location.row && col===location.col)) {
                    square = Square.at(row, col);
                    piece = board.getPiece(square);
                    if (super.isValidMove(piece)&& !(piece instanceof King)) {
                        moves.push(square);
                        if (piece)
                            break;
                    }
                    else
                        break;
                }
            }
        }
        return moves;
    }
}
