// //opdracht 1
function fibonacciCalc(number) {
    let fibonacci = 0,
        calculate = 1,
        count = 0;

    while (count <= number) {
        fibonacci = fibonacci + calculate;
        calculate = fibonacci - calculate;
        console.log(fibonacci)
        count++
    }
}
fibonacciCalc(5)

//opdracht 2
function countdownStart (year){
    let timer = 10;
    let interval = setInterval(countdown, 1000, year)


    function countdown(year) {
        if (timer > 0){
        console.log(timer)
        timer--
        }
        else if (timer == 0){
            console.log(`Happy ${year}!`)
            clearInterval(interval)
        }
    }
}

countdownStart(2018)

//opdracht 3
function hoisting() {
    console.log(declaration) //prints out undefined
    var declaration; //declaratie van 'declaration'

    console.log(expression) //prints out undefined
    var expression = 'hello'; //declaratie van 'expression', de string 'hello' wordt hieraan toegewezen
    console.log(expression) //prints out hello

    // var expression; wordt gehoist
    // expression = 'hello' niet
    // de line wordt als het ware opgesplitst in 2 delen
    // enkel var laat zich hoisten, een let niet
}

hoisting()