

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am " + i + " strange loops.");
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return "done";
}

function incrementVariable() {
  i = i - 1;
  return i;
}

do {
  console.log("I run once regardless.");
  function doWhileLoop(num){
    if (num === 10) {
      console.log("WEWEWEWE");
    }
  }
} while (incrementVariable() < num);
