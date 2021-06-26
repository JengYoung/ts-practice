function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: 'jaeyoung' }, {
    do() {
        return `I am studying Programming!`;
    }
});
function compare(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v = compare(1, 2);
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));
function isAction(v) {
    return v.do !== undefined;
}
function process(v) {
    if (isAction(v)) {
        return v.do();
    }
    else {
        return v.name;
    }
}
;
const processResult = process(u);
console.log(processResult);
//# sourceMappingURL=intersection-union.js.map