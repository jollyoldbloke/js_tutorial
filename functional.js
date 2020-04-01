const baseUrl = "https://example.com/";
let states = ["Kansas", 'Nebraska', "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach((element) => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// URLs: functional version
function fullUrls(elements) {
  return elements.map(element => baseUrl + urlify(element));
}
console.log(fullUrls(states));

// singles: imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// dakotas: includes version
function includesDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(includesDakota(states));

// dakotas: regex version
function regexDakota(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(regexDakota(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative version
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: functional version
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// sum: functional reduce version
function functionalReduceSum(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalReduceSum(numbers));

// lengths: imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: funcrtional solution
function functionalLengths(elements) {
  elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(functionalLengths(states));