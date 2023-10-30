
// Part 1 - GET 
//  GET request to have all data appended to the DOM





function get(){
    console.log("test")
    axios.get("https://api.vschool.io/brendaholman/todo")
        .then(response => { display(response.data)})
        .catch(error => error)

}

// get()

function display(arr){

    clearList()
    
        
        for(let i = 0; i < arr.length; i++){
            
//create Elements
            
            const h3 = document.createElement("h3")
            const  div= document.createElement("div")
            const  testDiv= document.createElement("div")
            const checkbox = document.createElement("INPUT")
            const  deleteButton = document.createElement("button")
            const newImgUrl = document.createElement("img")

//adding to elements, methods(set attribute,) , properties, 

            h3.textContent = arr[i].title
            div.setAttribute("id", arr[i]._id )
            checkbox.setAttribute("type", "checkbox");
            deleteButton.setAttribute("id", arr[i]._id)
            deleteButton.innerHTML = "Delete"
            newImgUrl.src = arr[i].imgUrl
            // checkbox.checked = arr[i].completed
            if(arr[i].completed === true){
                checkbox.checked = true
                h3.style.textDecoration = "line-through"
            }
               


               
//Appending all elements to div who is adding them to my todolist id in my html page
            appendDiv.append( div, h3, checkbox, deleteButton, newImgUrl)

/// Stlying elements

h3.style.fontFamily= "cursive"


deleteButton.style.borderRadius = "0px"
deleteButton.style.margin = "15px"
deleteButton.style.cursor = "pointer"

newImgUrl.style.maxHeight = "150px"
newImgUrl.style.maxWidth = "150px"


         


 //Put Part 1 if the checkbox is checked axios is updating database with put request and flipping it when unchecked //

            checkbox.addEventListener("change", (event) => {
                event.preventDefault()
                console.log(event)

                if(event.target.checked){
                    axios.put("https://api.vschool.io/brendaholman/todo/" + arr[i]._id  , {completed: true})
                    .then(response => 
                        h3.style.setProperty("text-decoration", "line-through" )
                        
                        )
                    .catch(error => error)

                } else if(!event.target.checked){
                    axios.put("https://api.vschool.io/brendaholman/todo/" + arr[i]._id  , {completed: false})
                    .then(response => 
                        h3.style.setProperty("text-decoration", "none")
                        )
                    .catch(error => error)
                }

            })


//Part 4 delete: 1. A user will be able to delete todos (this is different from marking a todo as "completed") 

// 2. Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

        deleteButton.addEventListener("click", (e) => {
                e.preventDefault()

                div.remove()

                axios.delete("https://api.vschool.io/brendaholman/todo/" + arr[i]._id)
                .then(response => get()) 
                // console.log(response.data))
                .catch(error => console.log(error))



            })
            console.log("delete button clicked")


                
        }
    }

    get()
    let appendDiv = document.getElementById("todoList")
// created a clear list function to have list cleared before appending data being repulled when calling with get, the while loop is looking at the list element and if it has a first child it is removing the first child and repeating until there are no more first child. 

    function clearList(){
        const list = document.getElementById("todoList")
        while(list.firstChild){
            list.removeChild(list.firstChild)
        }
    }

   // Part 2  POST

   const form = document.myTodoForm
    

        form.addEventListener("submit", function(event){
            event.preventDefault()

            const newTodoSubmitted = form.newTodo.value
            const newPrice = form.price.value
            const newDescription = form.description.value
            const newImgUrl = form.imgUrl.value
            
            form.newTodo.value = ""
            form.price.value = ""
            form.description.value = ""
            form.imgUrl.value = ""
            
            const postNewToDo = {
                title: newTodoSubmitted,
                description: newDescription,
                price: newPrice,
                imgUrl: newImgUrl

            }
        
            axios.post("https://api.vschool.io/brendaholman/todo", postNewToDo)
                .then(response => get()) // get()
                .catch(error => error)
            
            

            console.log("You have clicked!")
            console.log(newTodoSubmitted)
            console.log(newPrice)
            console.log(newDescription)
            console.log(newImgUrl)


           



        })


        // Styling Title of Page

        const pageTitle =document.getElementById("titleOfTodo")

        pageTitle.style.color = "black"
        pageTitle.style.fontSize = "50px"
        pageTitle.style.textAlign = "center"

        


    
       

   
    



   







