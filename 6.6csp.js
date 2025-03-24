// Sai Vutukuri, 3/24/25, Seat Picker Program CSP 6.6 Project 

let seats=["1A","2B","3C","4D","5E","6F","7G","8H","9I","10J"]
console.log("Welcome to the Seat Selection for the Game");
console.log("Would you like to choose your seat or get a random one?");
let choice=prompt("Would you like to choose your seat or get a random one? (random/pick)");
let picked;

console.log("You Chose "+choice);

function picker(seats){
	let seat=Math.round((Math.random() * (seats.length -1))+0);
	console.log("Your Seat Is: "+ seats[seat]);
}

function choose(choice, seats){
if(choice=="random"){
	picker(seats);
} else {
	if(choice=="pick"){
	 picked=prompt("Please Choose a Seat");
	 let seatFound=false;
		for(let element of seats){
			if (picked==element){
			console.log("Your Seat Is: " +picked);
			seatFound=true;
			
			}
			
			
		}
		
	if(!seatFound){
			console.log("That Seat is unavailable");
			}
	}}
}

choose(choice, seats);
