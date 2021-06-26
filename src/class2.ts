interface Person {
    name: string,
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}
/**
 * 클래스에서도 interface를 구현 가능하다.
 * Person이라는 interface가 있으면, 
 * Korean은 Person의 타입을 갖고 있는 클래스다!라고 정의 가능
 * 이는 implements [interface명]으로 가능
 * 
 * 다중 인터페이스 구현: [interface 1], [interface 2], ...
 */ 
class KoreanProgrammer implements Person, Programmer {
    constructor(public name: string) {
    }
    writeCode(requirement: string): string {
        throw new Error('Method not implemented.');
    }
    say(message: string): void {
        console.log(message)
    }

    loveKimchi() {
        console.log("I love Kimchi !")
    }
}

/* 
    abstract 클래스 : 완성되지 않은 클래스. 
    인스턴스를 바로 만들 수는 없지만, 이 클래스를 통해 상속을 하여 인스턴스를 만들 수 있음. 
*/
const jaeyoung = new KoreanProgrammer('jaeyoung');

// 특정 필드나 메서드에 abstract 키워드를 줘서, interface에서는 구현하지 않지만 abstact class에서는 구현함.
abstract class Korean implements Person {
    /* 
        프로퍼티나 메서드를 abstract 키워드를 이용하여 정의
        쉽게 말하자면, 
        "일단 이런 게 필요할 건데, 나중에 하위 타입들이 알아서 정해라!"
    */
    protected abstract rank: number;

    constructor(public name: string) {
    }

    say(msg: string) {
        console.log(msg);
    }

    abstract loveKimchi(): void;
}

//Korean을 상속한다.
class KoreanProgrammer2 extends Korean implements Programmer {
    // jumin의 경우, Korean으로부터 받았기에 private X!
    constructor(public name: string, protected rank: number) {
        super(name);
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        throw new Error('Method not implemented.');
    }
    say(message: string): void {
        console.log(message);
    }
    loveKimchi(): void {
        throw new Error('Method not implemented.');
    }
}


const jaeyoung2 = new KoreanProgrammer2('jaeyoung', 123456);
/*
    추상클래스는 인스턴스를 생성할 수 없다!
    단지 상속을 하여 구현하는 데 도움을 주는 기능을 수행.
*/ 
// const jay2 = new Korean('jay');