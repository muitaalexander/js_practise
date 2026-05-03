
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
