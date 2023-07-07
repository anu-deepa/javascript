const greetings = (name) => {
    console.log("Welcome from Greetings " + name);
}

const nameAge = (name, age, newgreetings) => {
    newgreetings(name);
    console.log (age);
}
nameAge('Anu', 123, greetings);


