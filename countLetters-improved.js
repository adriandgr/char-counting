/* Better (DRY) solution to countLetters.js
 * after researching http://stackoverflow.com/questions/18690814/javascript-object-increment-item-if-not-exist
 */

var phrase = "Yay, only runs a for loop once!";

function countLetters(string) {
  var total = {};
  // run for loop to initialize object with 'number' types
  for (var letter in string) {
    total[string[letter]] = (total[string[letter]] || 0) + 1;
  }
  // remove spaces
  delete total[" "];
  return total;
}

console.log(countLetters(phrase));

