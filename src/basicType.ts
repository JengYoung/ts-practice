/* 
    undefined와 null은 모든 타입의 하위 타입 (정확히는 undefined가 null의 하위 타입이기도 함)
    any는 모든 타입의 상위 타입이다!
*/
let anyValue: any;
let undefinedValue: undefined;
let nullValue: null;


let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let objValue: object;
let symbolValue: symbol;


numValue = 3.3;
stringValue = "hello";
stringValue = 'hello';
stringValue = `
    hello
    ${1+1}
    hi
`

booleanValue = true;
undefinedValue = null;

objValue = { name: 'Jay' }
objValue = { };
objValue = new String(33); // 바로 33을 반환하지 않고, 객체로 생성

symbolValue = Symbol(); // 대체로 Symbol은 하나의 객체의 프로퍼티로 쓰임


// 배열 타입 정의
let nameList: string[];
// nameList = [1, 3]; //error!

/**
 * 특정 타입을 가져야 하는 키를 반드시 가지게 할 수도 있다!
 * 객체 리터럴이 아닌, 프로퍼티에 대한 리터럴을 한 것. 
 * (인라인 타입)
 */
let user1: { name: string, score: number };
user1 = {
    name: 'Jaeyoung',
    score: 28
}


/* number와 string으로만 구성된 튜플 생성 */ 
let tuple2: [number, string]; 
let tuple3: [number, number, number]
tuple2 = [1, "hello"]
tuple3 = [1,2,3];