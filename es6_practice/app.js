
// # **`let` and `const`**

// 1. Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.

// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// console.log(runForLoop(["cat", "dog"]))

// # **ES6 Arrow Functions**

// ### **Task 1**

// . Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }))
// }
// console.log(mapVegetables(carrots))

// ### **Task 2**

// Re-write this `.filter()` ’s callback function using an arrow function:

// const people = [
//   {
//       name: "Princess Peach",
//       friendly: false
//   },
//   {
//       name: "Luigi",
//       friendly: true
//   },
//   {
//       name: "Mario",
//       friendly: true
//   },
//   {
//       name: "Bowser",
//       friendly: false
//   }
// ]

// function filterForFriendly(arr) {
//   return arr.filter(person => person.friendly)
// }
// console.log(filterForFriendly(people))

// ### **Task 3**

// Re-write the following functions to be arrow functions:

// let doMathSum = (a, b) => a + b


// console.log(doMathSum(4, 7))

// var produceProduct = (a, b) => a * b

// console.log(produceProduct(3, 3))


// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?

// const firstName = "Jane"
// const lastName = "Doe"
// const age = 100

// console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}? `)


// ### **Task 5**

// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.


// const animals = [
//   {
//       type: "dog",
//       name: "theodore"
//   },
//   {
//       type: "cat",
//       name: "whiskers"
//   },
//   {
//       type: "pig",
//       name: "piglette"
//   },
//   {
//       type: "dog",
//       name: "sparky"
//   }
// ];

// function filterForDogs(arr) {
//    return arr.filter(animal => animal.type === "dog")
// }

// console.log(filterForDogs(animals))

