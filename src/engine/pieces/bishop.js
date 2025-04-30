import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;

        while (row<GameSettings.BOARD_SIZE-1 && col<GameSettings.BOARD_SIZE-1){
            row++;
            col++;
            moves.push(Square.at(row, col));
        }

        row = location.row;
        col = location.col;
        while (row<GameSettings.BOARD_SIZE-1 && col>0){
            row++;
            col--;
            moves.push(Square.at(row, col));
        }

        row = location.row;
        col = location.col;
        while (row>0 && col<GameSettings.BOARD_SIZE-1){
            row--;
            col++;
            moves.push(Square.at(row, col));
        }

        row = location.row;
        col = location.col;
        while (row>0 && col>0){
            row--;
            col--;
            moves.push(Square.at(row, col));
        }
        return moves;
    }
}
