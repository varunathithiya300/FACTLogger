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

// if-elseif-else

let interestingVotes = 15;
let mindblowingVotes = 16;

if (interestingVotes === mindblowingVotes) {
  alert("This fact is equally mindblowing and interesting !!!");
} else if (interestingVotes > mindblowingVotes) {
  console.log("This fact is interesting, not mindblowing.");
} else {
  console.log("This fact is mindblowing.");
}

// ternary operator - 3 parts -> 1) condition 2) true 3) false
let votesFalse = 50;
const totalUpvotes = interestingVotes + mindblowingVotes;
const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources";
// alert(message);

// Working with strings
