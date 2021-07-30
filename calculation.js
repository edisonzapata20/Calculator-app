const bill = document.querySelector("#bill");
const customTip = document.querySelector("#tipPercent");
const tipPercents = document.querySelectorAll(".tip-percent");
const numberPeople = document.querySelector("#people");
const reset = document.querySelector(".reset-btn");
const tipAmount = document.querySelector(".tip-number");
const totalAmount = document.querySelector(".total-amount");
let originalBill = "";

// ============Function to read the bill input as the total ammount ==============//
let addAmount = (e) => {
  totalAmount.textContent = "$" + e.target.value;
  originalBill = e.target.value;
};

bill.addEventListener("input", addAmount);

// ==============================================================================//

// ============Function to calculate the total amount divided by the number of people ==============//

let peopleCalculation = (e) => {
  if (e.target.value == 0) {
    return;
  } else {
    totalAmount.textContent =
      "$" + totalAmount.textContent.substring(1) / e.target.value;

    tipAmount.textContent =
      "$" + tipAmount.textContent.substring(1) / e.target.value;
  }
};

numberPeople.addEventListener("input", peopleCalculation);

// ==============================================================================//

// ============Function to calculate the tip amount ==============//

let tipCalculation = (e) => {
  if (originalBill == "") {
    return;
  } else {
    tipAmount.textContent =
      "$" + (parseFloat(e.target.textContent) / 100.0) * originalBill;

    totalAmount.textContent =
      "$" +
      (parseInt(originalBill) + parseInt(tipAmount.textContent.substring(1)));
  }
};

tipPercents.forEach((button) => {
  button.addEventListener("click", tipCalculation);
});

// ==============================================================================//

// ============Function to calculate the tip custom amount ==============//

let customTipCalculation = (e) => {
  if (originalBill == "") {
    alert("Enter a bill first");
    e.target.value = "";
  } else if (e.target.value == "") {
    null;
  } else {
    tipAmount.textContent = "$" + (e.target.value / 100.0) * originalBill;

    totalAmount.textContent =
      "$" + (parseInt(originalBill) + parseInt(e.target.value));
  }
};

customTip.addEventListener("input", customTipCalculation);

// ==============================================================================//

// ==================================RESET====================================//

reset.addEventListener("click", function () {
  totalAmount.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
  bill.value = 0;
  customTip.value = 0;
  numberPeople.value = 0;
});

// ==============================================================================//
