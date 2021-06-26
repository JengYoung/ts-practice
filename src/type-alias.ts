// interface User {
//     name: string;
// }

// interface Action {
//     do(): void;
// }

// 직접 type에 이름을 붙일 수 있다!!
// type UserAction = User & Action;
// function createUserAction(): UserAction {
//     return {
//         do(),
//         name: ''
//     }
// }

type StringOrNumber = string | number;

// 제네릭 이용 방법
type Arr<T> = T[]; // 어떤 T라는 type을 받는데, 그 type으로 이루어진 배열을 값으로 만들어낸다.
type P<T> = Promise<T>;

// 이름만 부여하는 게 아니라, 인터페이스처럼 특정 타입 정의 가능
type User2 = {
    name: string;
    login(): boolean;
}

class UserImpl implements User2 {
    login(): boolean {
        throw new Error('Method not implemented.');
    }
    name: string;
}

// 특정 값을 받을 수도 있다.
type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User2): UserState {
    if (user.login()) {
        return "APPROVED";
    } else {
        return "REJECTED";
    }
}