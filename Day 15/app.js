// determine calc
const sum_btn = document.getElementById("sum-button");
const result = document.getElementById("calculated-sum");
const input = document.getElementById("user-number");
let sum = 0;

function addDetermine() {
  console.log(input.value);
  for (let i = 0; i <= input.value; i++) {
    sum = sum + i;
  }
  result.textContent = sum;
  result.style.display = "block";
  sum = 0;
}

sum_btn.addEventListener("click", addDetermine);

//highlight
const anchorElement = document.querySelectorAll("a");
const highlights = document.getElementById("calcbtn");
function highlight() {
  for (const anchor of anchorElement) {
    anchor.style.backgroundColor = "blue";
  }
}
highlights.addEventListener("click", highlight);

// display user information
const listdata = document.getElementById("output-user-data");
const outputButton = document.querySelector("#user-data button");

const userData = {
  Firstname: "Annie",
  SecondName: "Sherina",
  Age: 18,
};

function listofdata() {
  for (let data in userData) {
    let list = document.createElement("li");
    let output = data.toUpperCase() + ":" + userData[data];
    list.textContent = output;
    listdata.append(list);
  }
}

outputButton.addEventListener("click", listofdata);

//dice roll

const rollButton = document.querySelector("#statistics button");

function random() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  const userInput = document.getElementById("user-target-number");
  const outputElement = document.getElementById("dice-rolls");
  outputElement.innerHTML = " "
  let numberOfRolls = 0;
  let rolls = false;
  while (!rolls) {
    const rolledNumber = random();
    numberOfRolls = numberOfRolls + 1;
    let newRoleList = document.createElement("li");
    let output = "Rolls " + numberOfRolls + " : " + rolledNumber;
    newRoleList.textContent = output;
    outputElement.append(newRoleList);
    if (rolledNumber == userInput.value) {
      rolls = true;
    }
  }
  const totalElement = document.getElementById('output-total-rolls')
  const targetNumber = document.getElementById('output-target-number')
  totalElement.textContent = numberOfRolls
  targetNumber.textContent = userInput.value
}

rollButton.addEventListener("click", rollDice);
