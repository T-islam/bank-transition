function inputValue(inputId) {
  const inputValue = document.querySelector(inputId);
  const value = parseFloat(inputValue.value);
  inputValue.value = "";
  return value;
}
function textValue(textId) {
  const textValue = document.querySelector(textId);
  const value = parseFloat(textValue.innerText);

  return value;
}

function setValue(id, amount) {
  document.querySelector(id).innerText = amount;
}
const depositBtn = document.querySelector("#deposit-btn");

const widthrowBtn = document.querySelector("#widthrow-btn");
// total Deposit Balance
depositBtn.addEventListener("click", function () {
  const inputvalue = inputValue("#deposit-value");
  const depositValue = textValue("#deposit-amount");
  const totalBalance = textValue("#Balance-amount");
  const totalDeposit = inputvalue + depositValue;
  setValue("#deposit-amount", totalDeposit); //added deposit Value
  setValue("#Balance-amount", inputvalue + totalBalance); // added total Balance
});

// widthrow balance
document.querySelector("#widthrow-btn").addEventListener("click", function () {
  const totalBalance = textValue("#Balance-amount");
  const inputvalue = inputValue("#widthrow-value");
  if (inputvalue > totalBalance) {
    alert("Insaficent balance");
  } else {
    const depositValue = textValue("#Withdraw-amount");

    const totalWidthrow = inputvalue + depositValue;
    setValue("#Withdraw-amount", totalWidthrow); //added Widthrow Value
    setValue("#Balance-amount", totalBalance - inputvalue); // added total Balance
  }
});
