class KoreanProgrammer {
    constructor(name) {
        this.name = name;
    }
    writeCode(requirement) {
        throw new Error('Method not implemented.');
    }
    say(message) {
        console.log(message);
    }
    loveKimchi() {
        console.log("I love Kimchi !");
    }
}
const jaeyoung = new KoreanProgrammer('jaeyoung');
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(msg) {
        console.log(msg);
    }
}
class KoreanProgrammer2 extends Korean {
    constructor(name, rank) {
        super(name);
        this.name = name;
        this.rank = rank;
    }
    writeCode(requirement) {
        console.log(requirement);
        throw new Error('Method not implemented.');
    }
    say(message) {
        console.log(message);
    }
    loveKimchi() {
        throw new Error('Method not implemented.');
    }
}
const jaeyoung2 = new KoreanProgrammer2('jaeyoung', 123456);
//# sourceMappingURL=class2.js.map