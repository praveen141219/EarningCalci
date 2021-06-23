const price = document.querySelector("#price");
const sales = document.querySelector("#sales");
const revenue = document.querySelector("#revenue");
const days = document.querySelector("#days");
const inputs = document.querySelectorAll("input");
console.log(inputs);

for (const input of inputs) {
  input.addEventListener("keypress", () => {
    const resultDays = revenue.value / (price.value * sales.value);
    days.innerHTML = resultDays.toFixed(2);
  });
}
