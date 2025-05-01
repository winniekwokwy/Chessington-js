import GameSettings from '../gameSettings';
import Square from '../square';
//import King from './king';
//import Board from `../board`;

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    isValidMove(piece) {
        if (!piece)
            return true;
        else {
            if (piece.player!==this.player)
                return true;
        }
        return false;
    }

    diagonalMoves(board) {
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

    laterallyMoves(board) {
        const moves = [];
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;

        for (row = location.row + 1 ; row < GameSettings.BOARD_SIZE; row++) {
            square = Square.at(row, location.col);
            piece = board.getPiece(square);
            if (this.isValidMove(piece)) {
                moves.push(square);
                if (piece)
                    break;
            }
            else
                break;
        }
        if (location.row!=0){
            for (row = location.row - 1 ;row >= 0; row--) {
                square = Square.at(row, location.col);
                piece = board.getPiece(square);
                if (this.isValidMove(piece)) {
                    moves.push(square);
                    if (piece)
                        break;
                }
                else
                    break;
            }
        }
        for (col = location.col + 1 ; col < GameSettings.BOARD_SIZE; col++) {
            square = Square.at(location.row, col);
            piece = board.getPiece(square);
            if (this.isValidMove(piece)) {
                moves.push(square);
                if (piece)
                    break;
            }
            else
                break;
        }

        if (location.col!=0) {        
            for (col = location.col-1; col >= 0; col--) {
                square = Square.at(location.row, col);
                piece = board.getPiece(square);
                if (this.isValidMove(piece)) {
                    moves.push(square);
                    if (piece)
                        break;
                }
                else
                    break;
            }
        }
        return moves;
    }
}
