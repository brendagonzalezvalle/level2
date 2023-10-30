// You are going to create a simple calculator that can Add, Subtract, and Multiply.

// **Requirements:**

// - You will have one section (`<div>`) for each math operation (so 3 sections) total
// - Each section has two inputs to take the first and second numbers
// - Each section will have a button to perform the operation
// - You will inject the result into the HTML (not an alert)
// - Your website will have 3 colors 11
// - Your website will have proper padding/spacing to lay things out nicely h

const form = document.myForm
const form2 = document.subtractForm
const form3 = document.multiForm

form.addEventListener("submit", function(event){
    event.preventDefault()

    const field1Adding = form.num1.value
    const field2Adding = form.num2.value
    console.log(field1Adding)
    console.log(field2Adding)
    

    form.num1.value = ""
    form.num2.value= ""

    const addResult = ((field1Adding*1)) + ((field2Adding*1))

    
    
    
   console.log( "Add result =" + addResult)

    const h1 = document.createElement("h1")
    h1.className = "result-display"
    h1.textContent = addResult
    document.getElementById("addSum").append(h1)
        
       

})

form2.addEventListener("submit", function(event){
    event.preventDefault()

    const subInput1 = form2.subtractNum1.value
    const subInput2 = form2.subtractNum2.value

    form2.subtractNum1.value = ""
    form2.subtractNum2.value = ""

    console.log( subInput1 )
    console.log(subInput2 )

    const subtractResult = subInput1 - subInput2
    console.log( "Subtract result =" + " " + subtractResult)

    subHeader1 = document.createElement("h1")
    subHeader1.className = "result-display"
    subHeader1.textContent = subtractResult
    document.getElementById("subSum").append(subHeader1)




    

})

form3.addEventListener("submit", function(event){
    event.preventDefault()


    const multiInput1 = form3.multiNum1.value
    const multiInput2 = form3.multiNum2.value

    form3.multiNum1.value = ""
    form3.multiNum2.value = ""



    const multiResult = multiInput1 * multiInput2
    console.log( "Multiply Result = " + " " + multiResult )


    const multiHeader1 = document.createElement("h1")
    multiHeader1.className = "result-display"
    multiHeader1.textContent = multiResult
    document.getElementById("multiSum").append(multiHeader1)


})

