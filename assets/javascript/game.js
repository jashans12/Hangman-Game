// Javascript
// Array for answers used
var $ = function (id) {
    return document.getElementById(id);
}


var game = ["blue", "red", "yellow", "orange", "green", "purple", 
            "brown", "black", "white", "gold", "silver", "gray", 
            "tan", "burgundy", "violet"]

// Selects a random letter from the array
var choice = Math.floor(Math.random()*15);

// Set variable answer to the word picked
var answer = game[choice];

// Sets the length to length of the answer.
var myLength = answer.length;

// Sets display to equal length of answer.
var display = [myLength];

// Sets win condition
var win = myLength;

// Splits answer into separate characters
var letters = answer.split('');

// Set amount of maximum attempts to 12
var attemptsLeft = 12;

// Make blank output array for words to go into
var output = "";

// Make userLetter array for guesses to go into
var userLetter="";



var setup = function()
{
    for (var i=0; i < answer.length; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";
}

window.onload = function()
{
    setup();
}

console.log(answer.includes("a"));

document.getElementById("fname").addEventListener("keyup", myFunction);