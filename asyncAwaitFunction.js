//async function
// const greetings = async (name) => {
//     // console.log("Welcome from Greetings " + name);
//     if (name == "Anu") {
//         return Promise.resolve(name);
//     }
//     else {
//         return Promise.reject("Failure");
//     } 
    
// }

// greetings("Anud").then((value1) => {
//     console.log(value1);
// }).catch((value2) => {
//     console.log(value2);
// });


// const afun = async () => {
//     console.log(("Start"));
//     const result = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
//     const json = await result.json();
//     console.log(json)
//     console.log(("End"));
// }
// afun();

const promiseAsyncFunc = () => {
    console.log(("Start **************"));
    fetch ("https://jsonplaceholder.typicode.com/todos/1")
    .then((apiResult) => {
        apiResult.json().then((jsonResult) => {
            console.log(jsonResult);
        });
    });
}

promiseAsyncFunc();