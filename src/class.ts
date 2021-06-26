/*
    es6에서 등장한 클래스
    클래스를 통해 특정 타입 객체 생성 가능
    함수의 new 키워드 뿐만이 아니라 클래스의 new 키워드로 객체 생성 가능.
*/ 

interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}

// index Signature을 통해 객체 문자열 인덱스 접근 가능하도록 함
interface Store {
    [index: string]: object;
}
class Cart {
    // 현재는 class property라는 스펙이 논의되어 진행되고 있다. 타입스크립트에서는 프로퍼티를 클래스의 body에서 정의해야 함.

    // protected 접근제한자: 자신과 상속받은 클래스에서만 접근가능
    // protected user: User;
    
    // 접근제한자를 통해 클래스 내부에서만 접근 가능하도록 함. (default: public)
    // private store: object;
    
    // es6에서는 constructor를 통해서만 프로퍼티를 정의할 수 있었음.

    // 접근제한자를 동시에 작성하면 일단 속성 정의를 여기서 하고, 동시에 전달받은 인자를 프로퍼티로 할당하는 것을 동시 수행 가능
    constructor(protected user: User, private store: Store = {} ) {
        // this.user = user;
        // this.store = {};
    }
    public put(id: string, product: Product) {
        this.store[id] = product;
    }
    get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        return this.user
    }
}


/*
* * 클래스를 통해 어떤 객체를 만들어내면, 이를 [해당 클래스]의 인스턴스라고 함.
*/
const cart2 = new PromotionCart({ name: 'john' });
const cartJohn = new Cart({ name: '' });
const cartJay = new Cart({ name: "Jay" });
cartJay.put('milk', { id: 'milk', price: 1500 })
const milk = cartJay.get('milk');
console.log(milk);
console.log(cartJay);
