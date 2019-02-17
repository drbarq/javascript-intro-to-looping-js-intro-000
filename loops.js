

function forLoop(array) {
  var hashBrown = []
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      hashBrown.push("I am 1 strange loop.");
    }
    else {
      hashBrown.push("I am " + i + " strange loops.");
    }
  }
  return hashBrown
}
