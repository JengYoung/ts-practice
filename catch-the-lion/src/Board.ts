import { Piece } from './Piece';
import { Player } from './Player';

/*
    게임보드의 행, 렬 위치 타입을 정의.
*/ 
export interface Position {
    row: number;
    col: number;
}

export class Cell {
    private isActive = false; // 선택된 셀
    readonly _el: HTMLElement = document.createElement('div');

    constructor(
        // 알아서 필드에 추가됨.
        public readonly position: Position,
        private piece: Piece
    ) {
        this._el.classList.add('cell');
    }

    put(piece: Piece) {
        this.piece = piece;
    }

    // 현재 올려진 말을 가져옴
    getPiece() {
        return this.piece;
    }

    active() {
        this.isActive = true;
    }
    
    inactive() {
        this.isActive = false;
    }

    render() {
        this._el.classList.toggle('active', this.isActive);
        // if (this.isActive) {
        //     this._el.classList.add('active');
        // } else {
        //     this._el.classList.remove('active');
        // }
        this._el.innerHTML = (this.piece) ? this.piece.render() : '';
    }
}

// 보드. 여러 셀들의 집합
export class Board {
    cells: Cell[] = [];
    _el: HTMLElement = document.createElement('div');
    // key가 HTMLElement인데, 만약 element가 사라지면 셀도 사라지도록 WeakMap 세팅.
    map: WeakMap<HTMLElement, Cell> = new WeakMap();

    constructor(upperPlayer: Player, lowerPlayer: Player) {
        this._el.className = 'board';

        for (let row = 0; row < 4; row++) {
            const rowEl = document.createElement('div');
            rowEl.className = 'row';``
            this._el.appendChild(rowEl);

            for (let col = 0; col < 3; col++) {
                const piece = upperPlayer.getPieces().find(({ currentPosition }) => {
                    return currentPosition.col === col && currentPosition.row === row
                }) || 
                lowerPlayer.getPieces().find(({ currentPosition }) => {
                    return currentPosition.col === col && currentPosition.row === row
                })
                const cell = new Cell({ row, col }, piece); // 행렬, 빈칸
                this.map.set(cell._el, cell); // 게임에서 셀 정보를 보드에서 맵을 통해 갖고 오도록 설정.
                this.cells.push(cell);
                rowEl.appendChild(cell._el);
            }
        }
    }

    render() {
        this.cells.forEach(v => v.render());
    }
}

export class DeadZone {
    private cells: Cell[] = []; // 여기도 셀로 이루어진 공간임. 따라서 cells 생성.
    readonly deadzoneEl = document.getElementById(`${this.type}_deadzone`).querySelector('.card-body');
    constructor (public readonly type: 'upper' | 'lower') {
        for (let col = 0; col < 4; col++) {
            const cell = new Cell({ col, row: 0 }, null); // 행은 1칸, 열은 4칸인 데드 존 생성
            this.cells.push(cell);
            this.deadzoneEl.appendChild(cell._el); // 칸에 대한 엘리먼트 생성.
        }
    }

    put(piece: Piece) {
        const emptyCell = this.cells.find(v => v.getPiece() === null); // 빈 공간인지 확인해서 그 값을 반환.
        emptyCell.put(piece);
        emptyCell.render();
    }

    render() {
        this.cells.forEach(v => v.render());
    }
}