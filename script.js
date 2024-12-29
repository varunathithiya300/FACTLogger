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
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) {
    return age;
  } else {
    alert(
      `Impossible year. Year should be less than or equal to ${currentYear}`
    );
  }
}

const factAge = calcFactAge(1994);
// console.log(factAge);

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

// Ternary operator - 3 parts -> 1) condition 2) true 3) false
// Syntax --> condition ? expression if true : expression if false
let votesFalse = 50;
const totalUpvotes = interestingVotes + mindblowingVotes;
const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources";
// alert(message);

// Working with strings
// Method -> A method is a function called on something
// `` - A template literal
const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
// console.log(text);
// console.log(upperText);

const str = `The current fact "${text}" is ${calcFactAge(
  2015
)} years old. It is ${totalUpvotes > votesFalse ? "true" : "not true"}`;
// console.log(str);

// Arrow functions
// Syntax -> declaration variable = (input) => expression
const calcFactAgeArrow = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. The input year must be less tham or equal to "${new Date().getFullYear()}"`;
console.log(calcFactAgeArrow(2001));

// Arrays
const fact = [
  "Buenos Aires is the capital of Argentina",
  2015,
  true,
  "Varun Athithiya",
  `Full Stack Developer`,
  `By April 2025`,
];

const [countrycapital, createdIn, yesorno, name, designation, achievedon] =
  fact;
console.log(countrycapital);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const newFact = [fact, "society"];
console.log(newFact);
console.log(...fact, "society");
