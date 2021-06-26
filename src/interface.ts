// 마치 Java의 interface와 비슷.
interface TV {
    turnOn(): boolean; // boolean type의 return을 받는다.
    turnOff(): void; // return value가 없다.
}

const myTV: TV = {
    turnOn() {
        return true
    },
    turnOff(){

    }
}

function tryTurnOn(tv: TV) {
    tv.turnOn();
}

// 해당 변수의 리터럴이 TV의 interface를 구현했다면, 어떤 변수가 와도 상관 X
tryTurnOn(myTV);


/**
 * 행위가 아닌 속성만 기술할 수도 있다.
 * 구체적인 값은 정해져있지 않아도 큰 그림을 이해할 수 있게 함.
 */
// 보드게임에서의 cell
interface Cell { 
    row: number;
    col: number;
    piece?: Piece; // 어떤 data를 담고 있어야 함! (?: 갖지 않아도 상관 X)
}

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    // cells라는 변수는 Cell의 형식인 객체들을 배열로 갖고 있음.
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col })            
        }
    }
    return cells;
}


const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    }
}

/**
 * 이러한 전 과정은 개발 후 컴파일 할 때에만 체크가 됨.
 * 그렇기 때문에 js에서는 annotation, interface와 같은 것들이 사라져도 상관이 X 
 * (이미 한 줄씩 실행할 시점 전에 다 체킹했기 때문에)
 */

interface SignUp {
    email: string,
    id: string;
    password: string;
}

function ajaxSignUp(data: SignUp) {
    
}


ajaxSignUp({
    email:"jeng_young@naver.com",
    id:"jengyoung",
    password:"secret!",
})