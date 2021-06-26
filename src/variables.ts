var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
    // score은 함수 레벨 스코프이므로 다 접근 가능
    if (true) {
        // type annotation. 해당 변수가 받을 타입을 설정.
        var score: number = 0;
    }
    // i는 이미 함수 블록 스코프 단위에서 존재하고 았음. 따라서 setTimeout가 실시된 0.1ms 이후에는 이미 처리가 완료되어 3이 3번 출력됨.
    for (var i: number = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }

    console.log(score);
}
outer()