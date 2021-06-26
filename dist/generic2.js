class D {
    add(v) {
    }
    get() {
        return;
    }
}
class LocalStorageData {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const cart1 = {
    getItem() {
        return {
            v: 'carrot',
            c: 'hi'
        };
    }
};
const cartResult = cart1.getItem();
console.log(cartResult);
//# sourceMappingURL=generic2.js.map