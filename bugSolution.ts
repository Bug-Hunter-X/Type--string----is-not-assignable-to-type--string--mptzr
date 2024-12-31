function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Greet each element in the array
user.forEach(name => console.log(greeter(name)));

// Solution 2: Greet only the first element
console.log(greeter(user[0]));