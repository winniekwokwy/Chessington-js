import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }
/*
    moveUpward(location){
        let moves = [];

        if (location.col<6 && location.col>0) {
            if (location.row<7 && location.row>0) {
                moves.push(Square(location.row+1, location.col+2));
                moves.push(Square(location.row-1, location.col+2));
            }
            else if (location.row<=0){
                return Square(location.row+1, location.col+2);
            }
            else if (location.row>=7){
                return Square(location.row-1, location.col+2);
            }
        }
        console.log(moves);
        return moves;
    }

    moveDownward(location){
        return Square(location.row+1, location.col-2);
    }
*/
    getAvailableMoves(board) {
/*
        const moves = [];
        let location = board.findPiece(this);
        let square;
        let piece;
        let row;
        let col;

        if (location.row<=1){
            if (location.col)

        }
        //move to right
        if (location.row>1){
            //to move ___|
            if (location.col>0) {
                square = Square.at(location.row+2, location.col+1);
                piece = board.getPiece(square);
                if (super.isValidMove(piece)&& !(piece instanceof King)) {
                    moves.push(square);
                    if (piece)
                        break;
                }
                else
                    break;
            }
            //to move |___
            if (location.col<7) {
                square = Square.at(location.row+2, location.col-1);
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
        //move to left
        if (location.row<6){
            //to move ___| or |___
            if (location.col>0&&location.col<7) {
                square = Square.at(location.row+2, location.col+1);
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
        */

       /*
        console.log(this.moveUpward(location));
       return this.moveUpward(location);
       */
      return new Array(0);
    }
}
