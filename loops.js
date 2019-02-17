

function forLoop(array) {
  var hashBrown = [];
  for (var pen = 0; pen < 25; pen++) {
    if (pen === 1) {
      hashBrown.push("I am 1 strange loop.");
    }
    else {
      hashBrown.push("I am " + pen + " strange loops.");
    }
  }
  return hashBrown
}
