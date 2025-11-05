interface User {
  name: string;
  age: number;
  email: string;
}

function greetUser(user: User): string {
  return `Hello ${user.name}, you are ${user.age} year old.`;
}

const newUser: User = {
  name: "Ajay Kumar",
  age: 31,
  email: "ajay@gmail.com",
};

console.log(greetUser(newUser));
