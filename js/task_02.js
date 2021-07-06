// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 
// 2.1 Функция сложения 2-х объектов-дробей;
// 2.2 Функция вычитания 2-х объектов-дробей;
// 2.3 Функция умножения 2-х объектов-дробей;
// 2.4 Функция деления 2-х объектов-дробей;
// 2.5 Функция сокращения объекта-дроби

let fraction_1 = {
    nominator: 12,
    denominator: 4,
}

let fraction_2 = {
    nominator: 8,
    denominator: 4,
}

// Least common multiple = Наименьшее общее кратное
function nok(a,b){
    let x = a;
    let y = b;
    while(x != y){
        if (x > y) x = x - y;
        else y = y - x;
    }
    return Math.trunc((a * b)/x);
}

//Greatest common factor = Наибольший общий делитель
function nod(a,b){
    while (a != 0 && b != 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    return a+b;
}

function showFractions(frac1,frac2){
    console.log(`Fraction 1: ${frac1.nominator}/${frac1.denominator} Fraction 2: ${frac2.nominator}/${frac2.denominator}`)
}

function addFractions (frac1, frac2) {
    const lcm = nok(frac1.denominator,frac2.denominator)
    let newNom = ((lcm / frac1.denominator) * frac1.nominator  + (lcm / frac2.denominator) * frac2.nominator);
    console.log(`Sume of fractions : ${newNom} / ${lcm}`);
}

function subtractFractions (frac1, frac2) {
    // Least common multiple = lcm
    const lcm = nok(frac1.denominator,frac2.denominator)
    let newNom = ((lcm / frac1.denominator) * frac1.nominator  - (lcm / frac2.denominator) * frac2.nominator);
    console.log(`Subtraction of fractions : ${newNom} / ${lcm}`);
}

function mulFractions (frac1, frac2){
    let newNom = frac1.nominator * frac2.nominator;
    let newDenom = frac1.denominator * frac2.denominator;
    console.log(`Multiplication of fractions : ${newNom} / ${newDenom}`)
}

function divisionFractions (frac1, frac2){
    let newNom = frac1.nominator * frac2.denominator;
    let newDenom = frac1.denominator * frac2.nominator;
    console.log(`Division of fractions : ${newNom} / ${newDenom}`)
}

//Чтобы привести дробь к несократимому виду нужно ее числитель и знаменатель разделить на их НОД
function reductionFraction (frac){
    let nodAB = nod(frac.nominator,frac.denominator);
    let newNom = frac.nominator / nodAB;
    let newDenom = frac.denominator / nodAB;
    console.log(`Fraction reduction : ${newNom} / ${newDenom}`)
}

showFractions(fraction_1,fraction_2);
addFractions(fraction_1,fraction_2);
subtractFractions(fraction_1,fraction_2);
mulFractions(fraction_1,fraction_2);
divisionFractions(fraction_1,fraction_2);
reductionFraction(fraction_1);
reductionFraction(fraction_2);
