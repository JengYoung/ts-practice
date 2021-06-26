var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["WELCOME"] = 0] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade[StarbucksGrade["GOLD"] = 2] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
;
var StarbucksGrade2;
(function (StarbucksGrade2) {
    StarbucksGrade2["WELCOME"] = "WELCOME";
    StarbucksGrade2["GREEN"] = "GREEN";
    StarbucksGrade2["GOLD"] = "GOLD";
})(StarbucksGrade2 || (StarbucksGrade2 = {}));
;
console.log(StarbucksGrade);
function getDiscount(v) {
    console.log("inner: ", v);
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
//# sourceMappingURL=enum.js.map