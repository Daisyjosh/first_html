var a=6;
console.log(a);
let object1 = {age:20};
let object2 = object1;
object1.age = 2;
console.log(object2.age);
let v = true;
let n = false;
if(v&&n){
    console.log("If block executed");
}
else{
    console.log("If block is not executed");
}
console.log(9^5);
//functions keyword: function syntax: function func_name(parameters){return}
function sum(a,b){
    console.log(a+b);
}
sum(11,9);

//arrow function mostly used in react
const sum2 = (a,b,c) =>{
    console.log(a+b+c);
}

sum2(98,9,8);