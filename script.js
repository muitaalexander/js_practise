
  //counting by increasing and decreasing.
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = function(){
       count--;
       countLabel.textContent = count;
}

increaseBtn.onclick = function(){
       count++;
       countLabel.textContent = count;
}
resetBtn.onclick = function(){
       count = 0;
       countLabel.textContent = count;
}


//random number generation
const randomBtn = document.getElementById("randomBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
let max = 100;
let min = 1;
let randomNum1;
let randomNum2;
let randomNum3;


randomBtn.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max)+ min;
  randomNum2 = Math.floor(Math.random() * max)+ min;
  randomNum3 = Math.floor(Math.random() * max)+ min;

  label1.textContent = `random number 1: ${randomNum1}`;
  label2.textContent = `random number 2: ${randomNum2}`;
  label3.textContent = `random number 3: ${randomNum3}`;
}

//If statements i.e in age.

const myAge = document.getElementById("myAge");
const ageBtn = document.getElementById("ageBtn");
const myText = document.getElementById("myText");
let age;

ageBtn.onclick = function(){
       age = myAge.value;
       age = Number(age);

       if(age == ""){
              myText.textContent = `Enter Your age`;
       }
       else if(age >= 100){
              myText.textContent = `You are too old to enter`;
       }
       else if(age >= 18){
              myText.textContent = `You are Old enough to enter`;
       }
       else if(age < 0){
              myText.textContent = `Enter a valid age`;
       }
       else{
              myText.textContent =`You must 18+ yeays old to enter`
       }
}

//checked property in checkbox, and radio buttons elements

const betaSquad = document.getElementById("betaSquad");
const sideMen = document.getElementById("sideMen");
const mrBeast = document.getElementById("mrBeast");
const subscBox = document.getElementById("subscBox");
const checkBtn = document.getElementById("checkBtn");
const checkText = document.getElementById("checkText");
const subsText = document.getElementById("subsText");

checkBtn.onclick = function(){
       if(betaSquad.checked){
             checkText.textContent = `You selected Beta Squad`;
       }
       else if(sideMen.checked){
             checkText.textContent = `You selected Side Men`;
       }
       else if(mrBeast.checked){
             checkText.textContent = `You selected Mr. Beast`;
       }
       else{
              checkText.textContent = `You did not select any`;
       }
       
       
       if(subscBox.checked){
              subsText.textContent = `You are Subscribed`;
       }
       else{
               subsText.textContent = `You are Not Subscribed`;
       }

}


/*
//ternary operator

let isStudent = false;
let message = isStudent ? "you are a student":"you are not a student";
console.log(message);


let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ?10 : 0 ;
console.log (`your total amount is $${purchaseAmount - purchaseAmount*(discount/100)}`);
*/



/*
//Switches

let testScore = 190;
let gradeScore;

switch(true){
       case testScore >= 90:
            gradeScore ="A";
            break;
       case testScore >= 70:
             gradeScore= "B";
             break;
       case testScore >= 50:
            gradeScore = "C";
            break;
       case testScore < 50 :
            gradeScore = "D";
            break;
}
 console.log(gradeScore);
*/



/*
 //string slicing
const email = "muitaalexander@gmail.com";

 let username = email.slice(0, email.indexOf("@"));
 let extra = email.slice(email.indexOf("@")+1);

 console.log(username);
 console.log(extra);
*/


/*
//method chaining

 let usersame = window.prompt("Enter your username: ");
 usersame = usersame.trim().charAt(0).toUpperCase() + usersame.trim().slice(1).toLowerCase();
 console.log(usersame);
 */



 //while
 //do while
 //for
 //break
 //continue

 //A NUMBER GUESSING GAME
/*
 let min_num = 1;
 let max_num = 100;
 let answer = Math.floor(Math.random() * (max_num)) + min_num;

 let attempts = 0;
 let guess;
 let running = true;
 console.log(answer);

 while(running){
       guess = window.prompt(`guess the number between ${min_num} - ${max_num}`);
       guess = Number(guess);

       if(isNaN(guess)){
              window.alert("enter a valid number");
       }
       else if(guess < min_num || guess >  max_num){
              window.alert(`Number must be between ${min_num}- ${max_num}`);
       }
       else {
              attempts++;
              if(guess < answer){
                     Window.alert("TOO LOW! Attempt again!");
              }
              else if(guess > answer){
                     Window.alert("TOO HIGH! Attempt again!");
              }
              else{
                     Window.alert(`CORRECT! the answer is ${answer}, after ${attempts} attempts`);
                     running = false;
              }
       }
       
 }
*/
//FUNCTIONS

function multiply(x, y){
       return x * y;
}
       console.log(multiply(2, 3));

       
function isEven(number){
       return number %2 === 0 ? true: false;
}
console.log(isEven(30));


function numValid(telephone){
       if(telephone.includes("254")){
              return true;
       }
       else{
              return false
       }
}
console.log(numValid("2547767"));

/*
function emailValid(email){
       if(email.includes("@gmail.com") || email.includes("@outlook.com")){
              return true;
       }
       else{
              return false;
       }
}
console.log(emailValid("muitaalexander@outlook.com"))
*/
//simpler of above
function emailValid(email){
       return email.includes("@gmail.com")|| email.includes("@outlook.com") ? true : false;
}
console.log(emailValid("alex@outlook.com"));
