interface User {
    name: string;
}
interface Action {
    do(): string;
}

/*
    intersection을 통해 두 타입이 필수인 합쳐진 타입을 요구할 수 있다.
*/
function createUserAction(u: User, a: Action): User & Action {
    // 두 타입 합친 타입에 적합한 객체를 반환!
    return { ...u, ...a };
}

const u = createUserAction({ name: 'jaeyoung' }, { 
    do() {
        return `I am studying Programming!`
    }
});

// union : or 연산. 둘 중 하나.
function compare(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}

const v = compare(1,2);
console.log([3, 2, 1].sort(compare))
console.log(['c','b','a'].sort(compare));

// type guard를 통해 더욱 가독성 높게 코드를 짤 수 있다.
function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined;
}

function process(v: User | Action): string {
    // 특정 메소드가 어떤 interface안에 있다면, 이를 활용 가능!   
    if (isAction(v)) {
        return v.do()
    } else {
        return v.name;
    }
};

const processResult = process(u);
console.log(processResult);