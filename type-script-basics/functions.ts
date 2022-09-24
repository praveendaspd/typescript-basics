function addNumbers(n1: number, n2: number){
    return n1 + n2;
}

//void function
function printMessage(num: number): void{
    console.log('Result - '+num);
}

printMessage(addNumbers(3423, 567567));

//point variable to function
let combineValues : Function;
combineValues = addNumbers;
console.log(combineValues(5,5));

//function type which accepts 2 numbers and returns a number
let numbers: (x1: number , x2: number) => number;
numbers = addNumbers;
console.log(numbers(3543,34563));
