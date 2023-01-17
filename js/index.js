console.log("I'm ready")

// Iteration 1: Names and Input


let hacker1 = "Adrián"
console.log(`The drivers name is ${hacker1}`)

let hacker2 = "Carla"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

let lettersInHacker1 = hacker1.length
console.log(lettersInHacker1)

let lettersInHacker2 = hacker2.length
console.log(lettersInHacker2)

if (lettersInHacker1 > lettersInHacker2){
    console.log(`The driver has the longest name, it has  ${lettersInHacker1} characters`)
} else if (lettersInHacker1 < lettersInHacker2){
    console.log(`It seems that the navigator has the longest name, it has ${lettersInHacker2} characters`)
} else {
    console.log("Wow, you both have equally long names, XX characters")
}


// Iteration 3: Loops

let upperHacker1 = hacker1.toUpperCase();
let space = "";

for (let i = 0; i < hacker1.length; i++){
    let bothCharacters = upperHacker1 [i] + " ";
    space += bothCharacters
}
console.log(space)

let opposite = ""

for (let i = hacker1.length - 1; i >= 0; i--){
    let characters = hacker1 [i];
    opposite += characters
}
console.log (opposite)




let lowHacker1 = hacker1.toLowerCase();
let lowHacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.The driver's name goes first.")
} else if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
}



