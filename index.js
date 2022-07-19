//Your Code here

let response = window.prompt("You are alone on a path in a forest. Do you turn left or right?")
    console.log(response)

if(response === "left"){
    console.log("user submitted left")
}

    let response2 = window.prompt("You see a wolf ahead. Do you continue on this path or turn around?")

        if(response2 === "continue") {
            console.log("user submitted continue")

        let response3 = window.prompt("Approaching the wolf you: A) Offer a piece of steak or B) You do not make eye contact and walk past the wolf calmly.")
            if(response3=== "A") {
                console.log("user submitted A) offer a piece of steak")
            
            let response4 = window.prompt("The wolf bit your hand off when it took the steak and now you are sad :( GAME OVER.")
            }else if (response3==="B") {
                console.log("user submitted B)You do not make eye contact and walk past the wolf calmly.")
            }
            let response5 = window.prompt("The wolf allows you to pass and you continue on the path. You hear laughter in the distance. Do you A) go off path to find where the laughter is coming from or B) the laughter is creepy so you continue on path? ")
                if(response==="A"){
                    console.log("user submitted A)go off path to find where the laughter is coming from")
                }

        }else if (response2 === "turn around") {
            console.log("user submitted turn around")
            let response = window.prompt("You are on a path. Do you turn left or right?")
                console.log(response)
    
}else if (response === "right"){
    console.log("user submitted right")
}else {(response )
    console.log("follow instructions")
}
