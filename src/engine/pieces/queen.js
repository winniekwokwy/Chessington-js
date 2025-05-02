import Piece from './piece';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    removeOpposingKing(board, moves){
        let piece;
        moves = moves.filter((move)=>{
            piece = board.getPiece(move);
            if (piece) {
                if (!(piece instanceof King))
                    return move;
            }
            else 
                return move;
        });
        return moves;
    }

    getAvailableMoves(board) {
        let moves = [];

        moves= super.diagonalMoves(board);

        moves = moves.concat(super.laterallyMoves(board));
        
        return this.removeOpposingKing(board, moves);

    }
}
