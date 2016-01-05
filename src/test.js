// Constants
const PI = 3.141593;
let name = "tiago";
var age = 34;

let brothers = ["daniel","simone"];

// Arrow functions
brothers.map(b=>console.log(b));

brothers.forEach(b=>{
    console.log(b);
});

// Parameter Handling - Default value
function sayHi(name,gender="male"){
    console.log("Hello "+name+", you are a "+gender);
}
sayHi(brothers[0]);

// Rest parameters
function family (...z) {
    console.log(z);
}
family("tiago", "daniel", "simone", "beto", "regina");

// Template Literals
var person = { name: "Tiago" };
var location = { country: "Brazil", state: "MG", city:"Juiz de Fora"};
console.log("Hello " + person.name + " from " + location.country + "!");

// Unicode
console.log('é'.length);

// Object properties + method properties
person = {
    name: "Tiago",
    lastName: "Gouvea",
    fullName: [this.name + " " + this.lastName],
    fullname2: function () {
        return this.name + " " + this.lastName;
    }
};