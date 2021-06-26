/**
 * 반환되는 값까지 설정이 가능하다. 
 * *(parameter 뒤에 :type)
 */ 
function add (x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);

//** 아무 값이 전달되지 않아도 작동하게 하려면 ?을 붙인다. */
function buildUserInfo(name?: string, email?: string) {
    return { name, email };
}
buildUserInfo();

// ** 특정 값을 할당해줄 수도 있다 *
function buildUserInfo2(name = "-", email = "-") {
    return { name, email };
}
const user = buildUserInfo2();

//** 화살표 함수도 가능 */
const add2 = (a: number, b: number): number => a + b;


/*
    오버로드 가능. (함수 오버로드 시그니처)
*/ 

interface Storage {
    a: string
}
interface ColdStorage {
    b: string
}

function store(type: "통조림"): Storage 
function store(type: "아이스크림"): ColdStorage

// Union type를 통한 오버로드 시그니처 생성.
function store(type: "통조림" | "아이스크림") {
    if (type === "통조림") {
        return { a: "통조림"}
    } else if (type === "아이스크림") {
        return { b: "아이스크림" }
    } else {
        throw new Error("unsupported type");
    }
};

const s = store("통조림");
// s.를 했을 때 a가 자동 완성 목록에 생긴다.