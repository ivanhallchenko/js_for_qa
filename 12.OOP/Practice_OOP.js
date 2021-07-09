
//------------ Simple object

// const dog = {
//     name:"Slim Shady",
//     legs: 4,
//     isAwesome: true
// };
//
// dog.name;
// dog['legs']
//
// dog.age = 6;
//
// dog;
//
// //------------- Add new methods
//
// dog.bark = function (){
//     console.log("Hi! My name is.. (what?) " + this.name + "!");
// }
//
// dog.bark();
//
// //------------- Use one method for different objects
//
// const speak = function (){
//     console.log(this.sound + "! My name is " + this.name + "!");
// };
//
// const cat = {
//     sound: "Meow",
//     name: "Kitty",
//     speak: speak
// };
//
// cat.speak();
//
// const pig = {
//     sound: "Hruy",
//     name: "Naf-Naf",
//     speak: speak
// };
//
// const hourse = {
//     sound: "Neigh",
//     name: "Spirit",
//     speak: speak
// };
//
// pig.speak();
// hourse.speak();


// ------------- Constructor

// let car = new Car(100,200);

// -------------- Another type to create methods
// const dog1 = {
//     name:"Slim Shady",
//     legs: 4,
//     isAwesome: true,
//     bark: function (){
//         console.log("Hi! My name is.. (what?) " + this.name + "!");
//     }
// };
//
// const dog2 = {
//     name:"Slim Shady",
//     legs: 4,
//     isAwesome: true,
//     bark(){
//         console.log("Hi! My name is.. (what?) " + this.name + "!");
//         return 1;
//     }
// };