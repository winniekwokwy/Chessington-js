//import King from './king';

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
/*
    isValidMove(board, square) {
        if (!board.getPiece(square))
            return true;
        else {
            if (!(board.getPiece(square) instanceof King))
                return true;
        }
        return false;
    }
*/
}
