const promiseVariable = new Promise((resolve, reject2) => {
    const a = 2;

    if (a == 2) {
        resolve('Success');
    } else {
        reject2("Failed")
    }
});

console.log(promiseVariable);
//Result of above line
// Promise {<fulfilled>: 'Success'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]] 
// :  
// "fulfilled"
// [[PromiseResult]]
// : 
// "Success"

promiseVariable.then((result) => { //then gets the result from resolve
    console.log(result);
}).catch((value) => {
    console.log(value);
});
//Result of above line
//Success

