interface Props {
    // 이 key는 string type (or number)이고, 그 value는 string이어야 한다!
    [key: string]: string;
    name: string;
}

const p: Props = {
    name: 'jaeyoung',
    a: 'd',
    b: '2',
    2: '3', // key에서는 숫자도 문자로 자동으로 쳐주는구나! (쉽게 생각하자. 배열은 인덱스로 숫자를 쓰지 않는가!)
}

// keyof 연산자를 이용하면 key에 대한 타입을 갖고 올 수 있다.
let keys: keyof Props;


//일반적인 인터페이스에 keyof를 쓸 경우.
interface User {
    name: string,
    age: number;
    say(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age" // key값들만 올 수 있다! (name, age, hello)

let sayMethod: User["say"];
// User 인터페이스에 hello 인덱스로 접근 후, hello 메서드에 함수를 할당한다!
sayMethod = function(msg: string) {
    console.log(msg)
}