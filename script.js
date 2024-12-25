console.log("Hello World. Thank you !!!");

// Displaying and closing the form
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// First Javascript function
function ageFact(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

const factAge = ageFact(1994);
console.log(factAge);
