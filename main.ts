// TypeScript👨🏻‍💻 is a statically-typed superset of ⭐JavaScript that can help you write
//  more robust and maintainable code.
// Here are some 🔥beginner-friendly programs to get started:⬇️

// 1.Hello world:
console.log("Hello World");


// 2.Variable Declaration:
let x:number=10;
console.log(x);


// Data Types:
let num:number=10;
let isTrue:boolean=true;
let text:String="hello world";


// Arrays:
let arr:String[]=["a","b","c"];
for(let a of arr){
    console.log(a);
}


// Functions:
function greet(name:String):String{
    return "hello "+name;
}
console.log(greet("Github"))


// Interfaces:
interface Person{
    name:String;
    age:number;
}
function displayPerson(person:Person){
    console.log(`Hello ${person.name}, glad you are ${person.age} years young`)
}
let newperson:Person={name:"Archit",age:20};
displayPerson(newperson)


// Classes:
class cars{
    constructor(public name:String){}
    DisplayName(){
        console.log(`Name: ${this.name.toUpperCase()}`)
    }
}
const car=new cars("porsche");
car.DisplayName();


// Type inference:
    // TypeScript can infer types, making it easier for beginners:
    let q=1;// TypeScript infers q as number
    let z="Github"; // TypeScript infers z as string


// Type Annotations:
    // Explicitly defining types can help catch errors:
    let n: number = 42;
    let istrue: boolean = true;


// Conditional Statements:
let numb:number=10;
if (numb>0){
    console.log("Positive");
}else{
    console.log("Negative");
}


// Loops:
for(let i=1;i<=3;i++){
    console.log(`count ${i}`)
}


// modules:
    // TypeScript allows you to work with modules.
    //  Create another file math.ts to demonstrate module usage:
    // see math.ts for reference

    import { add } from "./math";
    console.log(add(3, 4));