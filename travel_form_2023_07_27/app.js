
const form = document.travelForm
console.log(form)



form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const formFirstName = form.firstName.value
    const formLastName = form.lastName.value
    const formAge = form.age.value
    const formGender = form.gender.value
    const formLocations = form.locations.value
    const formDietary = []
    
    form.firstName.value = " "
    form.lastName.value = ""
    form.age.value = ""
    
    
    
    console.log (formFirstName)
    console.log (formLastName)
    console.log (formAge)
    console.log(formGender)
    console.log(formLocations)

    for (let i = 0; i < form.dietRestrictions.length; i++){
        if(form.dietRestrictions[i].checked)
        formDietary .push(form.dietRestrictions[i].value)
    }

    console.log(formDietary )


    let formData = `

    First Name: ${formFirstName}
    Last Name: ${formLastName}
    Age: ${formAge}
    Gender: ${formGender}
    Location: ${formLocations}
    Dietary Restrictions: ${formDietary}
    
    
    
    
    
    `
    
    
   alert(formData)
   


})