const greetings = (name) => {
    console.log("Welcome from Greetings " + name);
}

const nameAge = (name, age, greetings) => {
    greetings(name);
    console.log (age);
}
nameAge('Anu', 123, greetings);


