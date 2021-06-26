enum StarbucksGrade {
    WELCOME,
    GREEN,
    GOLD
};
/*
    enum의 경우, 만약 key에 value를 할당하지 않는다면
    {
        '0': 'WELCOME',
        '1': 'GREEN',
        '2': 'GOLD',
        WELCOME: 0,
        GREEN: 1,
        GOLD: 2
    }
    이렇게 인덱스와 key 값을 짝으로 지어줌.
    그리고 그 반대로도 생성
    {
        (index: key)
        (key: index)
    }
*/ 

enum StarbucksGrade2 {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
};
// { WELCOME: 'WELCOME', GREEN: 'GREEN', GOLD: 'GOLD' }

console.log(StarbucksGrade);
function getDiscount(v: StarbucksGrade): number;
function getDiscount(v: StarbucksGrade2): number;
function getDiscount(v: StarbucksGrade | StarbucksGrade2): number {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
        case StarbucksGrade2.WELCOME:
            return 0;
        case StarbucksGrade2.GREEN:
            return 5;
        case StarbucksGrade2.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade.GREEN);

console.log(StarbucksGrade2.GREEN === "GREEN");
console.log(getDiscount(StarbucksGrade2["GREEN"]));
console.log(StarbucksGrade2);