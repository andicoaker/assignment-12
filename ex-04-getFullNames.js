// ex-03 getFullNames

// Write a function called `getFullNames` that takes an array
// of objects with first and last names and returns an array
// of strings, where each string is a customer's full name.

//
// INPUT: array of objects
// OUTPUT: array of strings - customers full name

var getFullNames = function (inputArrOfObj){
  var outputArrofStr = [];


    for(var i = 0 ; i < inputArrOfObj.length ; i += 1 ){

      var nameObj = inputArrOfObj[i]
      outputArrofStr.push( nameObj.first + " " + nameObj.last);

    console.log(nameObj);

    }

    console.log(outputArrofStr);
  return outputArrofStr
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby'},
	{ first: 'Jen', last: 'Vin'},
	{ first: 'Dan', last: 'Theman'},
]

console.assert(getFullNames(customersList)[0] === "Joe Blogs")
console.assert(getFullNames(customersList)[1] === "John Smith")
console.assert(getFullNames(moreCustomersList)[0] === "Ruby Scooby")
console.assert(getFullNames(moreCustomersList)[2] === "Dan Theman")
