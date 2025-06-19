// Declare an array
let fruits = ["Apple", "Banana", "Mango","cherry","kiwi"];

// Add an item at the end
fruits.push("Orange"); 
console.log("after pushing");
console.log(fruits);


fruits.pop(); 
console.log("after popping");
console.log(fruits)

console.log("access");
console.log(fruits[0]);
let size=fruits.length;
console.log(fruits[size-1]);
console.log("shift:");
console.log(fruits.shift());
console.log(fruits);
console.log("unshift:");
fruits.unshift("Pineapple");
console.log(fruits);
console.log("slice:");
let r = fruits.splice(1, 1);
console.log(fruits);
console.log("access using loop:");
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}