// 
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf8")

console.log(contents);

setTimeout(()=>{
    console.log("This is a timeout function");
},1000)

setTimeout(()=>{
    console.log("Hii my name is priyanshu")
},1000)

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This is a promise");
    },2000)
})


let animal = async () => {
    let response = await promise;
    console.log(response);
}

console.log("This is a console log");