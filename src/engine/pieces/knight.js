import Piece from './piece';
import Square from '../square';
import gameSettings from '../gameSettings';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves = [];
        let location = board.findPiece(this);

        if (location.col<gameSettings.BOARD_SIZE-2 && location.col>1) {
            //move horizontally
            moves.push(Square.at(location.row+2, location.col+1));
            moves.push(Square.at(location.row-2, location.col+1));
            moves.push(Square.at(location.row+2, location.col-1));
            moves.push(Square.at(location.row-2, location.col-1));
            if (location.row<gameSettings.BOARD_SIZE-2 && location.row>1) {
                //move upward and downward
                moves.push(Square.at(location.row+1, location.col+2));
                moves.push(Square.at(location.row-1, location.col+2));
                moves.push(Square.at(location.row+1, location.col-2));
                moves.push(Square.at(location.row-1, location.col-2));
            }
            else if (location.row>=gameSettings.BOARD_SIZE-2){
                //move downward
                moves.push(Square.at(location.row+1, location.col-2));
                moves.push(Square.at(location.row-1, location.col-2));
            }
            else if (location.row<=1){
                //move upward
                moves.push(Square.at(location.row+1, location.col+2));
                moves.push(Square.at(location.row-1, location.col+2));
            }
        }
        else if (location.col>=gameSettings.BOARD_SIZE-2){
            //move to the left
            moves.push(Square.at(location.row-2, location.col-1));
            if (location.col!==gameSettings.BOARD_SIZE-1)
                moves.push(Square.at(location.row-2, location.col+1));
            if (location.row<gameSettings.BOARD_SIZE-2 && location.row>1) {
                //move upward and downward
                moves.push(Square.at(location.row+1, location.col+2));
                moves.push(Square.at(location.row-1, location.col+2));
                moves.push(Square.at(location.row+1, location.col-2));
                moves.push(Square.at(location.row-1, location.col-2));
            }
            else if (location.row>=gameSettings.BOARD_SIZE-2){
                //move downward
                moves.push(Square.at(location.row-1, location.col-2));
                if (location.row!==gameSettings.BOARD_SIZE-1)
                    moves.push(Square.at(location.row+1, location.col-2));
            }
            else if (location.row<=1){
                //move upward
                moves.push(Square.at(location.row+1, location.col+2));
                if (location.row!==0)
                    moves.push(Square.at(location.row-1, location.col+2));
            }
        }
        else if (location.col<=1){
            //move to the right
            moves.push(Square.at(location.row+2, location.col+1));
            if (location.col!==0)
                moves.push(Square.at(location.row+2, location.col-1));
            if (location.row<gameSettings.BOARD_SIZE-2 && location.row>1) {
                //move upward and downward
                moves.push(Square.at(location.row+1, location.col+2));
                moves.push(Square.at(location.row-1, location.col+2));
                moves.push(Square.at(location.row+1, location.col-2));
                moves.push(Square.at(location.row-1, location.col-2));
            }
            else if (location.row>=gameSettings.BOARD_SIZE-2){
                //move downward
                moves.push(Square.at(location.row-1, location.col-2));
                if (location.row!==gameSettings.BOARD_SIZE-1)
                    moves.push(Square.at(location.row+1, location.col-2));
            }
            else if (location.row<=1){
                //move upward
                moves.push(Square.at(location.row+1, location.col+2));
                if (location.row!==0)
                    moves.push(Square.at(location.row-1, location.col+2));
            }
        }

        return moves;
    }
}
