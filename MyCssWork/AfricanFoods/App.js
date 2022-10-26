// let a = window.prompt("What is your name ?") ;
// console.log(a);
// let username;
// document.getElementById("myButton").onclick = function (){
//      username = document.getElementById("myText").value;
//      console.log(username);
//      document.getElementById("myLabel").innerHTML = "Hello " + username;
// }
//  let age = window.prompt("how old are you");
//  age = Number(age);
//  console.log(typeof age);
//  age += 1;
//  console.log("Happy Birthday! You are ", age , "years old");
//  let x;
//  let y;
//  let z;
//  x = Nummber ("3.34");
//  y = String(3.14);
//  z = Boolean("pizza");
//  console.log(x, typeof x);
//  console.log(y, typeof y)
//  console.log(z, typeof z)
// let count = 0;
// document.getElementById("decreaseBtn").onclick = function(){
//         count -=1;
//         document.getElementById("countLabel").innerHTML = count;

// }

// document.getElementById("resetBtn").onclick = function(){
//         count = 0;
//         document.getElementById("countLabel").innerHTML = count; 

// }
// document.getElementById("increaseBtn").onclick = function(){
//     count +=1;
//     document.getElementById("countLabel").innerHTML = count; 
        

// }

 ///  useful string properties & methods

//  let username = "Bro code";
//  console.log(username.length);
//  console.log(username.charAt(0));
//  console.log(username.indexOf("o"));
//  console.log(username.lastIndexOf("o"));
// replace property
// username.toUpperCase();
// console.log(username);

// let fullName = "Bro code";
// let firstName ;
// let lastName;
// firstName = fullName.slice(0,3)
// lastName = fullName.slice(4);
// lastName = fullName.slice(fullName.indexOf(""));
// console.log(lastName);

// console.log(firstName);

document.getElementById("myButton").onclick = 

function(){
        const myCheckBox = document.getElementById("myCheckBox")
        if(myCheckBox.checked){
                console.log("You have subscribe");
        }
        else{
                console.log("you haven't subscribe")
        }
}