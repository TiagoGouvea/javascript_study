// Constants
"use strict";

var PI = 3.141593;
var name = "tiago";
var age = 34;

var brothers = ["daniel", "simone"];

// Arrow functions
brothers.map(function (b) {
    return console.log(b);
});

brothers.forEach(function (b) {
    console.log(b);
});

// Parameter Handling - Default value
function sayHi(name) {
    var gender = arguments.length <= 1 || arguments[1] === undefined ? "male" : arguments[1];

    console.log("Hello " + name + ", you are a " + gender);
}
sayHi(brothers[0]);

// Rest parameters
function family() {
    for (var _len = arguments.length, z = Array(_len), _key = 0; _key < _len; _key++) {
        z[_key] = arguments[_key];
    }

    console.log(z);
}
family("tiago", "daniel", "simone", "beto", "regina");

// Template Literals
var person = { name: "Tiago" };
var location = { country: "Brazil", state: "MG", city: "Juiz de Fora" };
console.log("Hello " + person.name + " from " + location.country + "!");

// Unicode
console.log('é'.length);

// Object properties + method properties
person = {
    name: "Tiago",
    lastName: "Gouvea",
    fullName: [undefined.name + " " + undefined.lastName],
    fullname2: function fullname2() {
        return this.name + " " + this.lastName;
    }
};