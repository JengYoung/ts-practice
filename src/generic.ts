/*
    ! Type도 parameter화할 수 있다!
    " 이 x가 뭔지는 모르겠는데, 적어도 x타입이랑 같아야 해!"
*/ 
function createPromise<T>(x: T, timeout: number) {
    // Promise의 경우, generic이 type을 받게 이미 되어있음.
    // return new Promise((resolve: (v: T) => void, reject) 
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}

createPromise<string>('1', 100)
    .then(v => console.log(v));

// 생산성이 생각보다 매우 파워풀하긴 하다...!
function createTuple2<T, U>(v: T, v2: U): [T, U] {
    return [v, v2];
}

function createTuple3<T, U, D>(v: T, v2: U, v3: D): [T, U, D] {
    return [v, v2, v3];
}

const t1 = createTuple2("user1", 1000);
console.log(t1);