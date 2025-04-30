import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }
        
    isValidMove(piece) {
        //console.log(piece instanceof King);
        if (!piece)
            return true;
        else {
            if (piece.player!==this.player && !(piece instanceof King))
                return true;
        }
        return false;
    }

    getAvailableMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let row=location.row;
        let col=location.col;
        let square;
        let piece;

        while (row<GameSettings.BOARD_SIZE-1 && col<GameSettings.BOARD_SIZE-1){
            row++;
            col++;
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (this.isValidMove(piece)) {
                moves.push(square);
                if (piece)
                    break;
            }
            else
                break;
        }

        row = location.row;
        col = location.col;
        while (row<GameSettings.BOARD_SIZE-1 && col>0){
            row++;
            col--;
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (this.isValidMove(piece)) {
                moves.push(square);
                if (piece)
                    break;
            }
            else
                break;
        }

        row = location.row;
        col = location.col;
        while (row>0 && col<GameSettings.BOARD_SIZE-1){
            row--;
            col++;
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (this.isValidMove(piece)) {
                moves.push(square);
                if (piece)
                    break;
            }
            else
                break;
        }

        row = location.row;
        col = location.col;
        while (row>0 && col>0){
            row--;
            col--;
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if (this.isValidMove(piece)) {
                moves.push(square);
                if (piece)
                    break;
            }
            else
                break;
        }
        return moves;
    }
}
