const greetings = (name) => {
    console.log("Welcome from Greetings " + name);
}

const nameAge = () => {
    return greetings;
}
nameAge()("Hi"); //nameAge() returns greetings and passing Hi to the greetings function
greetings("Welcome");

