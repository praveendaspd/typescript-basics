let userInput: unknown;
let userName: string;

userName = 'praveen';
userInput = 5;

//need to explicitly check before assigning unknown type
if( typeof userInput === 'string'){
    userName = userInput;
}
