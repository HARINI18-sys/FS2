function add(a,b){
    console.log(a+b);
}
add(1,2);

function displayAnotherFunction(func){
    func(1,2)
}
displayAnotherFunction(add);

let va  =add;
console.log(va(1,4));
let n=function(){
    console.log("Variable Functions");
}
n();
let f = () =>{
    console.log("arrow function");
}
f();