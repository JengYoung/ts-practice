import { Chick, Elephant, Griff, Lion, Piece } from './Piece';

export enum PlayerType {
    UPPER = 'UPPER',
    LOWER = 'LOWER'
};

export class Player {
    private pieces: Piece[]

    getPieces() {
        return this.pieces;
    }

    // 플레이어 종류를 실제 속성으로써 가지도록 하기 위해 접근제한자를 같이 씀. 덮어씌지 않게 readonly로.
    constructor(public readonly type: PlayerType) {
        if (type === PlayerType.UPPER) {
            this.pieces = [
                new Griff(PlayerType.UPPER, { row: 0, col: 0 }),
                new Lion(PlayerType.UPPER, { row: 0, col: 1 }),
                new Elephant(PlayerType.UPPER, { row: 0, col: 2 }),
                new Chick(PlayerType.UPPER, { row: 1, col: 1 })
            ]
        } else {
            this.pieces = [
                new Elephant(PlayerType.LOWER, { row: 3, col: 0 }),
                new Lion(PlayerType.LOWER, { row: 3, col: 1 }),
                new Griff(PlayerType.LOWER, { row: 3, col: 2 }),
                new Chick(PlayerType.LOWER, { row: 2, col: 1 })
            ]            
        }
    }
};