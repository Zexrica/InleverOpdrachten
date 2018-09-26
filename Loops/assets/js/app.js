//opdracht 1
let counter = 0;

while (counter<=25) {
    if (counter%4 == 0){
        console.log(`${counter} is deelbaar door 4`)
    }
    counter++
}

//opdracht 2
let fibonacci = 0,
    calculate = 1,
    count = 0;

while (count <= 25) {
    fibonacci = fibonacci + calculate;
    calculate = fibonacci - calculate;
    console.log(fibonacci)
    count++
}

//opdracht 3
const array = [2,4,8,9,12,13]
let sum = 0;
for (let count = 0; count < array.length; count++) {
    sum += array[count]
}
console.log(sum);