function checkFruit(fruitName) {
    if (fruitName == "Kiwi") {
        alert('It is favorite fruit for John');
    } else if (fruitName == "Banana") {
        alert('It is favorite fruit for Jacke');
    } else if (fruitName == "Orange") {
        alert('It is favorite fruit for Jonathan');
    } else if (fruitName == "Apple") {
        console.log('It is favorite fruit for jessi');
    } else {
        alert('Invalid fruit');
    }
}

checkFruit("Orange");

var num = 0;
var sum = 0;

function number(a, b) {
    for (var i = 0; i < a; i++) {
        sum += b;
    }
    console.log('a' + " x " + 'b' + ' = ' + sum);
}
number(3, 4);

console.log('----Exercise 3----')

function number(num1, num2) {
    var num;
    var lcd = 1;
    var lcm;

    for (var i = 0; i <= num1 && i <= num2; i++) {

        if (num1 % i == 0 && num2 % i == 0)
            lcd = i;
    }
    lcm = (num1 * num2) / lcd;

    console.log(lcm);
}
number(20, 10)

console.log('----Exercise 3 / Method 2(Do-While)----')

function number(num1, num2) {
    var i = 0;
    var lcd = 1;
    var lcm;

    do {
        i++;
        if (num1 % i == 0 && num2 % i == 0)
            lcd = i;

    } while (i <= num1 && i <= num2);


    lcm = (num1 * num2) / lcd;

    console.log(lcm);
}
number(6, 18)