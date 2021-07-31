const bill = document.querySelector("#bill");
const inputBehavior = document.querySelector("input[type='number']");
const customTip = document.querySelector("#tipPercent");
const tipPercents = document.querySelectorAll(".tip-percent");
const numberPeople = document.querySelector("#people");
const reset = document.querySelector(".reset-btn");
const tipAmount = document.querySelector(".tip-number");
const totalAmount = document.querySelector(".total-amount");
let currentBill = 0;
let currentTip = 0;
let currentPeople = 1;
let boy = "";
//=============Helper function to round numbers to 2 decimals=================//

function roundNumber(decimalNumber) {
  return (Math.round(decimalNumber * 100) / 100).toFixed(2);
}

// ============Function to read the bill input as the total ammount ==============//
let addAmount = (e) => {
  currentBill = e.target.value || 0;

  if (e.target.value.length == 16) {
    e.target.value = "";
  } else {
    tipAmount.textContent = roundNumber(
      (parseFloat(currentTip) * parseFloat(currentBill)) / currentPeople
    );
    console.log(tipAmount.textContent);
    totalAmount.textContent = roundNumber(
      (parseFloat(currentBill) + parseFloat(currentBill * currentTip)) /
        currentPeople
    );
  }
};
bill.addEventListener("input", addAmount);

// else if (currentTip == 0 && currentPeople == 0) {
//   totalAmount.textContent = e.target.value;
//   currentBill = e.target.value;
//   // console.log(Math.round(parseFloat(e.target.value) * 100) / 100);
// } else if (currentPeople > 0) {
//   totalAmount.textContent =
//     (parseFloat(e.target.value) + parseFloat(currentTip)) / currentPeople;
//   tipAmount.textContent = parseFloat(currentTip) / currentPeople;
//   currentBill = e.target.value;
// } else {
//   totalAmount.textContent =
//     parseFloat(e.target.value) + parseFloat(currentTip);
//   tipAmount.textContent =
//     parseFloat(e.target.value) * parseFloat(currentTip / 100);
//   currentBill = e.target.value;
// }

//Function to clear input field//
function clearInput(e) {
  e.target.value = "";
}

bill.onfocus = clearInput;
numberPeople.onfocus = clearInput;
customTip.onfocus = clearInput;

// ==============================================================================//

// ============Function to calculate the tip amount ==============//

function tipCalculation(e) {
  // Converting the percentages to a decimal//
  currentTip = parseFloat(e.target.textContent) / 100;

  if (currentBill == "") {
    alert("Input a bill amount");
    return;
  } else {
    tipAmount.textContent = roundNumber(
      (currentTip * currentBill) / currentPeople
    );
    totalAmount.textContent = roundNumber(
      (parseFloat(currentBill) * currentTip + parseFloat(currentBill)) /
        currentPeople
    );
  }
}

tipPercents.forEach((button) => {
  button.addEventListener("click", tipCalculation);
});

// ==============================================================================//

// ============Function to calculate the tip custom amount ==============//

///ME QUEDE AQUI/////
function customTipCalculation(e) {
  currentTip = e.target.value / 100;

  if (e.target.value > 100) {
    e.target.value = "100";
  }
  if (currentBill == "") {
    alert("Enter a bill first");
    e.target.value = "";
  } else if (e.target.value == "") {
    return;
  } else {
    tipAmount.textContent = roundNumber(
      (currentBill * currentTip) / currentPeople
    );

    totalAmount.textContent = roundNumber(
      (parseFloat(currentBill) * currentTip + parseFloat(currentBill)) /
        currentPeople
    );
  }
}

customTip.addEventListener("input", customTipCalculation);

// ==============================================================================//

// ============Function to calculate the total amount divided by the number of people ==============//

function peopleCalculation(e) {
  if (e.target.value > 1000) {
    e.target.value = "1000";
  }
  if (e.target.value == 0) {
    return;
  } else {
    currentPeople = e.target.value;

    tipAmount.textContent = roundNumber(
      (currentTip * currentBill) / currentPeople
    );
    totalAmount.textContent = roundNumber(
      (parseFloat(currentBill) * currentTip + parseFloat(currentBill)) /
        currentPeople
    );
  }
}
// Math.round(parseFloat(currentTip) * 100) / 100

numberPeople.addEventListener("input", peopleCalculation);

// ==============================================================================//

// ==================================RESET====================================//

reset.addEventListener("click", function () {
  totalAmount.textContent = "0.00";
  tipAmount.textContent = "0.00";
  bill.value = 0;
  customTip.value = "";
  numberPeople.value = 0;
  currentTip = 0;
  currentBill = "";
  currentPeople = 1;
});

// ==============================================================================//
