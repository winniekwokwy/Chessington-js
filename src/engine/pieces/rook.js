import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //return new Array(0);
        const rookMoves = [];
        let location = board.findPiece(this);
        let b

        for (let row = location.row + 1 ; row < GameSettings.BOARD_SIZE; row++) {
            let square = Square.at(row, location.col);
            let piece = board.getPiece(square);
            if (!piece) {
                rookMoves.push(square);
            } else {
                if (piece.plyer !== this.player) rookMoves.push(square)
                    break;
                }
        }
        for (let row = location.row - 1 ;row >= 0; row--) {
            let square = Square.at(row, location.col);
            let piece = board.getPiece(square);
            if (!piece) {
                rookMoves.push(square);
            } else {
                if (piece.plyer !== this.player) rookMoves.push(square)
                    break;
                }
        }
        for (let col = location.col + 1 ; GameSettings.BOARD_SIZE; col++) {
            let square = Square.at(location.row, col);
            let piece = board.getPiece(square);
            if (!piece) {
                rookMoves.push(square);
            } else {
                if (piece.plyer !== this.player) rookMoves.push(square)
                    break;
                }
        }


        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            if (col !==location.col) {
                rookMoves.push(Square.at(location.row, col));
            }
        }
        return rookMoves;
    }
}

