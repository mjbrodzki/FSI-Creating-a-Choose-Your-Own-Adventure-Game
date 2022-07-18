//Your Code here

let response = window.prompt("Do you turn left or right?")


console.log(response)

if(response === "left"){
    console.log("user submitted left")

let response2 = window.prompt("Do you go up or down?")
if(repsonse2 === "up") {
    console.log("user submitted up")
}else if (response2 === "down") {
    console.log("user submitted down")
}

} else if (response === "right"){
    console.log("user submitted right")
} else {
    console.log("follow instructions")
}
