
/*Two input parameters: arr and func
output: No final output, conolse while running*/

/*The code should take a functio when called implemnts another function on the input given in the paramenter. */




// Runnng the above code should look like this:
/*
 1 function () {}
 2 for loop
 3 console.log funtion to each element of the array
 4 
*/
// Example Output above (logger is run on each element):

function logger(value) {  // FUNCTION
    console.log(value);
  }
  
  var testArr = [1, 2, 3, 4]; // ARRAY


function forEach(array, func) { //create a function that has an array and a function as inputs.
    for(var i = 0; i < array.length; i++) {//Iterate over my array
                console.log(func(array[i]))//Console.log the function to each element in the array.
            }
    }//function should not return or have a final out put, logs while running.


forEach(testArr, logger); //Test set.

/* Expect to see
1
2
3
4
when testArr is ran.*/
