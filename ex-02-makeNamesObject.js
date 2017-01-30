// Create a function that accepts 3 strings with first + last names as arguments
// The function should return an object with 3 properties:
// The first name will be a property-name and the last name will be the value

// EXAMPLE:
// makeNamesObject("George Washington", "John Adams", "Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }


// INPUT: 3 strings
// OUTPUT: object with 3 properties

var makeNamesObject = function (namesStr1, namesStr2, namesStr3){

  var namesObj = {};

    var namesArr1 = namesStr1.split(" ");
    var namesArr2 = namesStr2.split(" ");
    var namesArr3 = namesStr3.split(" ");
      //
      // console.log(namesArr);
      // console.log(namesArr[i]);
      // console.log('-----');
      namesObj = {
        [ namesArr1[0] ]: namesArr1[1],
        [ namesArr2[0] ]: namesArr2[1],
        [ namesArr3[0] ]: namesArr3[1],
      }

  return namesObj
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
