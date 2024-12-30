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
console.log(text);
console.log(upperText);

const str = `The current fact "${text}" is ${calcFactAge(
  2015
)} years old. It is ${totalUpvotes > votesFalse ? "true" : "not true"}`;
console.log(str);

// Arrow functions
// Syntax -> declaration variable = (input) => expression
// These functions are extremely helpful when we need to use one function inside another function
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

const [countrycapital, createdDuring, yesorno, name, designation, achievedon] =
  fact;
console.log(countrycapital);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const newFact = [fact, "society"];
console.log(newFact);
console.log(...fact, "society");

// Working with objects
const factObject = {
  fact: "Buenos Aires is the capital of Argentina",
  createdIn: 2024,
  category: "society",
  isCorrect: true,
  createSummary: function () {
    return `This fact "${this.fact}" was created in ${
      this.createdIn
    }. It is classified as ${this.category.toUpperCase()}.`;
  },
};
console.log(factObject.createSummary());
console.log(factObject);

// Destructuring objects
const { category, createdIn } = factObject;
console.log(category);
console.log(createdIn);

// Looping through arrays
// .forEach() - This method executes a provided function once for each array element. It does not return anything. -> undefined. Chaining is not possible.
// .map() - This method creates a new array populated with the results of calling a provided function on every element in the calling array. Chaining is possible.

[2, 3, 4, 5].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 3, 4, 5].map((el) => el * 10);
console.log(times10);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const ageOfFacts = initialFacts.forEach(function (el) {
  console.log(calcFactAge(el.createdIn));
});

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const categoryNames = CATEGORIES.map((el) => el.name);
console.log(categoryNames);

const allCategoryNames = CATEGORIES.forEach(function (el) {
  console.log(el.name);
});

const allColorCodes = CATEGORIES.map((el) => el.color);
console.log(allColorCodes);
