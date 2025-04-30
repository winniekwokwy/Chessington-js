import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // return new Array(0);
        const bishopMoves = []
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;


        //diagonally right-down
        row = location.row + 1, col = location.col -1
        while (row < GameSettings.BOARD_SIZE && col >=0) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if(!piece) {
                bishopMoves.push(Square.at(row,col))
                row++,
                col--;
            }
            else {
                if(piece.player != this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row,col));
                row++,
                col--;
                break;
            
        }
        }
    
    
        //diagonally right-up
        row = location.row + 1, col = location.col +1
        while (row < GameSettings.BOARD_SIZE && col < GameSettings.BOARD_SIZE) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if(!piece) {
                bishopMoves.push(Square.at(row,col))
                row++,
                col++;
            }
        
        else {
        if(piece.player != this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row,col));
            row++,col++;
            break;
    
        }
    }
        //diagonally left-up
        row = location.row - 1, col = location.col +1
        while (row >= 0 && col < GameSettings.BOARD_SIZE) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if(!piece) {
                bishopMoves.push(Square.at(row,col))
                row--,
                col++;
            }
            else {
            if(piece.player != this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row,col))
                row--, col++;
                break;
                }
            }
        

        //diagonally left-down
        row = location.row - 1, col = location.col -1
        while (row >= 0 && col >=0) {
            square = Square.at(row, col);
            piece = board.getPiece(square);
            if(!piece) {
                bishopMoves.push(Square.at(row,col))
                row--, col--;
            }
            else {
           if (piece.player != this.player && !(piece instanceof King)) bishopMoves.push(Square.at(row,col));
                row--, col--;
                break;
            }
        }
            return bishopMoves;
    }



}