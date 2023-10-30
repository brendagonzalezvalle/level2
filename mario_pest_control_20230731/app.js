const form = document.myForm



form.addEventListener("submit", function(event){
    event.preventDefault()

    const goombas = form.formGoombas.value
    const bobombs = form.formBobombs.value
    const cheeps = form.formCheeps.value

    form.formGoombas.value = ""
    form.formBobombs.value = ""
    form.formCheeps.value = ""
    




    console.log(goombas)
    console.log(bobombs)
    console.log(cheeps)


    const sumTotal = goombas * 5 + bobombs * 7 + cheeps * 11

    const h3 = document.createElement("h3")
    h3.textContent= sumTotal
    document.getElementById("totalSum").append(h3)

    console.log(sumTotal)


})