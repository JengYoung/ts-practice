class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        return this.user;
    }
}
const cart2 = new PromotionCart({ name: 'john' });
const cartJohn = new Cart({ name: '' });
const cartJay = new Cart({ name: "Jay" });
cartJay.put('milk', { id: 'milk', price: 1500 });
const milk = cartJay.get('milk');
console.log(milk);
console.log(cartJay);
//# sourceMappingURL=class.js.map