import { Board, Cell, DeadZone } from './Board';
import { Lion } from './Piece';
import { Player, PlayerType } from './Player';

/**
 * 전반적인 게임 기능을 담당하는 클래스
 */
export class Game {
    private selectedCell: Cell;
    private turn = 0;
    private currentPlayer: Player;
    private gameInfoEl = document.querySelector('.alert');
    private state: 'STARTED' | 'END' = 'STARTED';
    /**
     * 두 선수들 생성
     */
    readonly upperPlayer = new Player(PlayerType.UPPER);
    readonly lowerPlayer = new Player(PlayerType.LOWER);
    /**
     * board 클래스를 통해 생성.
     */ 
    readonly board = new Board(this.upperPlayer, this.lowerPlayer);
    /**
     * 죽은 말을 올려놓는 공간 2곳 생성(2명)
     */
    readonly upperDeadZone = new DeadZone('upper');
    readonly lowerDeadZone = new DeadZone('lower');


    /**
     * 게임의 생성자 부분
     */
    constructor() {
        // 보드 추가
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove(); // 보드가 있으면 지워버리고
        boardContainer.appendChild(this.board._el); // 새로 추가
        
        // 시작은 위 플레이어부터.
        this.currentPlayer = this.upperPlayer;

        this.board.render();
        // 게임 정보를 알려주는 함수 생성
        this.renderInfo();

        // board element 최상위에서 이벤트 위임을 실행.
        this.board._el.addEventListener('click', e => {
            if (this.state === 'END') {
                return false;
            }

            if (e.target instanceof HTMLElement) {
                let cellEl: HTMLElement;
                if (e.target.classList.contains('cell')) {
                    cellEl = e.target;
                } else if (e.target.classList.contains('piece')) {
                    cellEl = e.target.parentElement;
                } else {
                    return false;
                }
                const cell = this.board.map.get(cellEl);

                if (this.isCurrentUserPiece(cell)) {
                    this.select(cell);
                    return false;
                }

                // 자기 말이 선택될 시, selectedCell이 있는 상황.
                if (this.selectedCell) {
                    this.move(cell); // 클릭한 다른 셀로 움직이게 함.
                    this.changeTurn();
                }
            }
        })
    }

    isCurrentUserPiece(cell: Cell) {
        return cell.getPiece() !== null && cell.getPiece() !== undefined && cell.getPiece().ownerType === this.currentPlayer.type;
    }

    //셀 선택
    select(cell: Cell) {
        console.log("여기", cell.getPiece())
        // 피스가 없는 셀을 선택할 시 리턴 처리.
        if (cell.getPiece() === undefined) {
            return;
        }
        // 있긴 한데 자기 말이 아닌 경우
        if (cell.getPiece().ownerType !== this.currentPlayer.type) {
            return;
        }
        // 기존 선택된 셀의 active를 없앰.
        if (this.selectedCell) { 
            this.selectedCell.inactive();
            this.selectedCell.render();
        }

        //현재 셀 active 처리.
        this.selectedCell = cell;
        cell.active();
        cell.render();
    }
    
    move(cell: Cell) {
        this.selectedCell.inactive();
        const killed = this.selectedCell.getPiece().move(this.selectedCell, cell).getKilled();
        this.selectedCell = cell;

        if (killed) {
            if (killed.ownerType === PlayerType.UPPER) {
                this.lowerDeadZone.put(killed);
            } else {
                this.upperDeadZone.put(killed);
            }

            // 만약 사자를 잡으면 게임 종료
            if (killed instanceof Lion) {
                this.state = 'END'
            }
        }
    }
    // extraMessage: 부가적인 메세지
    renderInfo(extraMessage?: string) {
        this.gameInfoEl.innerHTML = `#${this.turn}턴 ${this.currentPlayer.type} 차례 ${(extraMessage) ? '| ' + extraMessage : ''}`;
    }

    changeTurn() {
        this.selectedCell.inactive();
        this.selectedCell = null;

        if(this.state === 'END') {
            this.renderInfo('END!');
        } else {
            this.turn += 1;
            this.currentPlayer = (this.currentPlayer === this.lowerPlayer) ? this.upperPlayer : this.lowerPlayer;
            this.renderInfo();
        }
        this.board.render();
    }
}
