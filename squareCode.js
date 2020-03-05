const squareCode = function(message) {
  const noSpaces = message.replace(/ /g, "");
  const sideLength = Math.ceil(Math.sqrt(noSpaces.length));

  let result = "";

  for (let j = 0; j < sideLength; j++) {
    for (let i = j; i < noSpaces.length; i = i + sideLength) {
      result += noSpaces[i];
    }
    result += " ";
  }
  
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));