/* function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum); // call back function 
}

myCalculator(5, 5);
*/

/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {   //call back function in parameter
    let sum = num1 + num2;
    myCallback(sum); // Call back the provided callback function with the result
  }
  
  myCalculator(5, 5, myDisplayer);
  */

/*
function callback (num){
    console.log (num *10);
}


function myFunction (num,callback){

callback(num);
}


myFunction (5,callback);

/*
Note
When you pass a function as an argument, remember not to use parenthesis.
Right: myCalculator(5, 5, myDisplayer);
Wrong: myCalculator(5, 5, myDisplayer());
*/

/*
When to Use a Callback?
The examples above are not very exciting.

They are simplified to teach you the callback syntax.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

Asynchronous functions are covered in the next chapter.
*/

/*
function codeBlocker(){
    let i = 0;
  
    while (i < 1000000000) {
      i++;
    }
    return 'count to billion is complete';
  }
  
  console.log('Hello A'); 
  console.log(codeBlocker());
  console.log('Hello C');
*/


