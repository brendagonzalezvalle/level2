// var input = "";

// try {
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }


// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
    //check data types first and throw error
    if(typeof(x) === 'number'  && typeof(y) === 'number'){
      return x + y
    } else {
      throw new Error("not a number")
    }
  } 


try {
   console.log(sum(2,3))
}

catch(err){
    console.log(err)
}

finally {
    console.log(" I will run no matter what")
}
      
// 2. 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"



// try {
//     var user = {username: "sam", password: "123abc"};
//     function login(username, password){
//       if(username === user.username && password === user.password){
//         console.log("Login Successful")
//       } else {
//         throw new Error("User information does not match")
        
//       }
//     }
//     login("sam", "123ac")


// }

// catch(err) {

//     console.log(err)

// }

