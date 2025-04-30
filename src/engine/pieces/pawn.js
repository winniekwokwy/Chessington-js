import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';

export default class Pawn extends Piece {
    constructor(player, location) {
        super(player);
        this.firstMove = true;
    }

    moveTo(board, square) {
        this.firstMove = false;
        super.moveTo(board, square);
    }

    getAvailableMoves(board) {

        let availableMoves = [];
        let location = board.findPiece(this);
        const firstSquareWhite = Square.at(location.row + 1, location.col)
        const secondSquareWhite = Square.at(location.row + 2, location.col)
        const firstSquareBlack = Square.at(location.row - 1, location.col)
        const secondSquareBlack = Square.at(location.row - 2, location.col)

        //console.log(board, "<<< board", location, "<<<<location");
    
        if (this.player === Player.WHITE) {
            if (location.row!=GameSettings.BOARD_SIZE-1) {
                if (this.checkIfEmpty(board, firstSquareWhite)) {
                    availableMoves.push(firstSquareWhite);
                }
                if (this.firstMove && this.checkIfEmpty(board, firstSquareWhite) && this.checkIfEmpty(board, secondSquareWhite)) {
                    availableMoves.push(secondSquareWhite);
                }
            }
        } else {
            if (location.row!=0){
                if (this.checkIfEmpty(board, firstSquareBlack)) {
                    availableMoves.push(firstSquareBlack);
                
                }
                if (this.firstMove && this.checkIfEmpty(board, firstSquareBlack) && this.checkIfEmpty(board, secondSquareBlack)) {
                    availableMoves.push(secondSquareBlack);
                }
            }
        }
        return availableMoves;
    }

    checkIfEmpty(board, square) {
        return !board.getPiece(square);
    }
}


//we need to check if there are any pieces already at that location

