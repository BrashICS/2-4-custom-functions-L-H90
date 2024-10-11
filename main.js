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

function roll_d20() {
    let roll_d20 = Math.random() * 20
    roll_d20 = Math.round(Math.random() *20)
    console.log(`"You rolled ${roll_d20} ! `)
    alert(`"You rolled ${roll_d20} ! `)
 }
 
function meow() {
    alert(` Meow! `)
    }
 