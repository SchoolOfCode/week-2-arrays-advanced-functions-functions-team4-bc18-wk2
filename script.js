console.log("Hello World!");

// Create a greeting function

function greeting(name) {
    console.log(`Hello ${name}`);
}

//Create a higher order function
//Create a function that accepts:
//A callback function
//Three name parameters
//It should call the callback function (in this case, the greeting function we made), passing each name

let names = [
    "Ashton", "Connor", "Giuseppe"
];

names.map(greeting(names))
{
    return  `hello` + names
};