// Adds a `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Processes the content for palindrome testing.
  this.process = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.process(this.content);
  }

  // Returns true for a palindrome, false otherwise
  this.palindrome = function () {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns the content in ALL CAPS.
  this.louder = function () {
    return content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns content processed for palindrome testing.
  this.processedContent = function() {
    return this.process(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();