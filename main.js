/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

function to_fahrenheit() {

let celsius = +prompt("whats the weathers degrees?")
let fahrenheit = (celsius * 9/5) + 32 
console.log(`${fahrenheit} Fahrenheit is equal to ${celsius} celsius`)

}

function roll_d10() {
        let roll_d10 = Math.random() * 10
        roll_d10 = Math.floor(Math.random() *10)
        console.log(`"You rolled ${roll_d10} ! `)
}