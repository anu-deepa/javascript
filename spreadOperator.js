const hobbies = ["Sports","Cooking"];
const newHobby = ["Reading"];

const mergeHobbies = [hobbies, newHobby]; //This will give array with nested array: [ [ 'Sports', 'Cooking' ], [ 'Reading' ] ]

console.log(mergeHobbies);

let mergeHobbiesUsingSpread = [...hobbies, newHobby]; // [ 'Sports', 'Cooking', [ 'Reading' ] ]

console.log(mergeHobbiesUsingSpread);

mergeHobbiesUsingSpread = [...hobbies, ...newHobby]; //[ 'Sports', 'Cooking', 'Reading' ]

console.log(mergeHobbiesUsingSpread);

const user = {
    name: "John",
    age: 34
};
let extendedUser = {
    isAdmin: true,
    user
}; 
console.log(extendedUser); // { isAdmin: true, user: { name: 'John', age: 34 } }

 extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser); // { isAdmin: true, name: 'John', age: 34 }