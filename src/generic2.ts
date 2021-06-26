// interface를 만들 때도 제네릭 쓸 수 있음.
interface DB<T> {
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> {
    add(v: T): void {
    }
    get(): T {
        return;
    }
}

// Type parameter의 범위를 특정한 type의 하위타입으로 고정할 수도 있음.
interface JSONSerializer {
    serialize(): string;
}

class LocalStorageData<T extends JSONSerializer> {
    constructor(private localStorageKey: string) {

    }
    add(v: T) {
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v): null;
    }
}

interface User { name: string; }

// 이게 되려면, User은 JSONSerializer의 하위타입이어야 함.
// const userData = new LocalStorageData<User>('user');
// userData.add({ name: 'jaeyoung' })
// const user2 = userData.get();
// user2.name;

interface Vegitable {
    v: string;
}

interface Meat {
    m: string;
}

// 다시 extends를 통해 type 범위를 제한
interface Cart2<T> {
    // 만약 T가 해당 interface일 경우에 따라 반환되는 type을 달리함
    getItem(): T extends Vegitable ? Vegitable : Meat
}

const cart1: Cart2<Vegitable> = {
    getItem() {
        return {
            //Vegitable을 generic으로 받았기 때문에 v는 필수.
            v: 'carrot',
            //해당 야채가 아니더라도 추가로 할 수 있음.
            c: 'hi'
        }
    }
}
const cartResult:Vegitable = cart1.getItem();
console.log(cartResult)