let Phrase = require("mhartl-palindrome");

function palindromeTester() {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("#palindromeTester");
  form.addEventListener("submit", function() {
    palindromeTester(event);
  });
});