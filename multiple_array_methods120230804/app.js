// You should use multiple array methods to solve these problems. Don't use `for` loops!

// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    const sortedNames = arr.sort(function(a, b){
        const nameA = a.lastName.toUpperCase();
        const nameB = b.lastName.toUpperCase();
        
        if(nameA < nameB){
            return -1;
            
        }
        
        if (nameA > nameB){
            return 1;
        } 
        
    })
    // console.log(sortedNames)
    const filteredAge = sortedNames.filter(function(ages){
        if(ages.age >= 18){
               return true 
            }

            
       
})
    return filteredAge.map(function(people){
    return people.innerHTML = "<li>" + people.firstName + " " + people.lastName + " is " + people.age + "</li>"

})

    
 }
 
 console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 