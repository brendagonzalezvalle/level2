let namePicked = ["Mario", "Luigi"]



class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = ""
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = true

    }

    setName(){
        
        

        if(namePicked !== 0) {
            this.name = "Mario"
           
        } else if (namePicked === "Mario") {
            this.name = "Luigi"
           
           
        }

       
       
    }

    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        } 
        else if(this.status === "Big"){
            this.status = "Powered Up"

        } else if(this.status === "Powered Up"){
            this.hasStar = true
            console.log("You have gained a star!")
        }
        
    }

    goHit(){
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead"
            console.log("You have Died! Game Over")
            clearInterval(gameRun)

        }  else if (this.status === "Powered Up" && this.hasStar){
            this.hasStar = false;
        }
    }

    addCoin(){
        this.totalCoins ++
        `A coin has been added and your total coins are ${this.totalCoins}`
    }

    print(){
        console.log({
            Name: this.name,
            Total_Coins: this.totalCoins,
            Status: this.status,
            HasStar: this.hasStar
            
            
        })
    }
}





const character = new Player
character.setName()
character.gotPowerup()




const gameRun = setInterval(() => {
    character.print()
    let outcome = Math.floor(Math.random()* 3)
    if(outcome === 0){
        character.goHit()
    } else if( outcome === 1){
        character.gotPowerup()
    } else if(outcome === 2){
        character.addCoin()
    }
    
}, 1000)
