var sentence = prompt("Enter a sentence.");
console.log(sentence);

function firstAndLastCap(sentence) {
  var stringArray = sentence.split('');
  console.log(stringArray);

  return stringArray[0].toUpperCase() + stringArray[stringArray.length-1].toUpperCase();

}

var sentence2 = firstAndLastCap(sentence);

console.log(sentence2);
