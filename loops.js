

function forLoop(array) {
  var arrayJoe = []
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      arrayJoe.push("I am 1 strange loop.");
    }
    else {
      arrayJoe.push("I am " + i + " strange loops.");
    }
  }
  return arrayJoe
}
