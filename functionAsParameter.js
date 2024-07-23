const greetings = (name) => {
    console.log("Welcome from Greetings " + name);
}

const nameAge = (name, age, greetings) => {
    greetings(name);
    console.log (age);
}
nameAge('Anu', 123, greetings);

// 

function handleTimeout() {
    console.log("Timed out");
}

const handleTimeout2 = () => {
    console.log("Timed out... again");
};
setTimeout(handleTimeout);
// As there is no return value, we can ignore () and passing the parameter as a value
setTimeout(handleTimeout, 5000);
setTimeout(handleTimeout2, 3000);
// Below is same as previous one
setTimeout(() => {
    console.log('More Timing out .....');
}, 4000);
//setTimeout is a built-in functions