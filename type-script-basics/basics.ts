console.log("**Add two numbers**");

function add(n1: number, n2: number, printResult: boolean, message: string) {
  if (printResult) {
    let result = n1 + n2;
    console.log(message + result);
  } else {
    return n1 + n2;
  }
}

const n1 = 2.5;
const n2 = 5.7;
const showResult = true;
const message = "Result = ";

add(n1, n2, showResult, message);
enum Role {
    ADMIN=3 , READ_ONLY=4, AUTHOR=9
};

const person = {
  name: "Praveen Das",
  age: 34,
  hobbies: ["cricket" , "cooking"],
  role: Role.ADMIN
};
person.hobbies.pop();
console.log(person);

console.log('Hobbies -')
for (const hobby of person.hobbies){
    console.log(hobby);
}


