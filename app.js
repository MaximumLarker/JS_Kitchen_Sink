//I'm putting in the data required by tasks 4 and 5
const US_states = 50;
let Name = "Linas";
//I'm adding the data points together as requested by task 6
let my_name_plus_states = Name + US_states;
console.log(my_name_plus_states);
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
//Creating an array and printing out its contents using a loop
let favVegetables = ["Peas", "Radishes", "Cucumbers", "Tomatoes"];
for (let i = 0; i<favVegetables.length;i++){
    console.log(favVegetables[i]);
}
//Creating an object "pet" with two properties
let pet = {name: "Paulie", breed: "Parrot"};
console.log (pet.breed + "  " + pet.name);

//Creating an array of 5 objects with both a name and age argument

let obj1 = {name: 'name1', age: 15};
let obj2 = {name: "name2", age: 33};
let obj3 = {name: "name3", age: 28};
let obj4 = {name: "name4", age: 20};
let obj5 = {name: "name5", age: 27};
let objArray = [obj1, obj2, obj3, obj4, obj5];
//using the "checkAge" function in a loop to test all the items in the array
for (let i =0; i<objArray.length;i++){
    checkAge(objArray[i].name, objArray[i].age)
}
getLength("Hello World");
sayHello();
function sayHello (){
    console.log("Hello World!");
}
function checkAge (name, Age){
    if (Age<21){
        console.log("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
function getLength (word){
    if (word.length%2 == 0){
        console.log("The world is nice and even!");
    }else{
        console.log("The world in an odd place!");
    }
}