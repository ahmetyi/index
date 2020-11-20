    console.log('-----EXERCISE 1---------')

    var a = "Anna";
    var b = 20;

    if (b < 25) {
        console.log("You are too young");
    }
    if (a != "Anna")
        console.log("Hello");

    function myFunction() {
        var input = [1, 2, 3, 4, 5];
        document.getElementById("demo").innerHTML = input;
        var firstelm = input.shift();
        console.log(firstelm)
        console.log(input)
        var output = input
        console.log(output.concat(firstelm))
    }


    console.log('-----EXERCISE 2---------')
    var input1 = [1, 2, "apple", 4, "banana"];
    console.log(input1.join(","))


    console.log('----EXERCISE 3---------')
    var input2 = ["a", "b", "c", "d", "e"];
    var i = 0;
    for (i = 0; i < input2.length; i++) {
        console.log(input2[i])
    }