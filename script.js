
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