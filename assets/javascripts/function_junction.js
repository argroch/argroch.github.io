// var myName = prompt("What is your name?");

// var nativeLang = prompt("What is your native language?");

// var welcomeSaying = prompt("How do you greet others?");

function greeting(name, language, saying) {
	console.log(saying + " " + name + ", nice to speak with someone who knows " + language + ".");
}

// greeting(myName, nativeLang, welcomeSaying);


function story() {

	var adj1 = prompt("Give me an adjective.");
	var adj2 = prompt("Give me another adjective.");
	var name = prompt("Give me a name.");
	var verb1 = prompt("Give me an -ing verb.");
	var sound = prompt("Give me a sound.");
	var adj3 = prompt("Give me a adjective.");
	var verb2 = prompt("Give me a past-tense verb.");
	var noun1 = prompt("Give me a noun.");
	var verb3 = prompt("Give me a past-tense verb.");
	var adj4 = prompt("Give me an adjective.");
	var noun2 = prompt("Give me a noun.");
	var place = prompt("Give me a geographic location.");

	console.log("It was a " + adj1 + " and " + adj2 + " night. Everyone but " + name + " was " + verb1 + ". There was a noise that went like, " + sound + "! And " + name + " sat up straight, they were so " + adj3 + ". They got out of bed, " + verb2 + " to the " + noun1 + " and " + verb3 + " outside. There they say it: the " + adj4 + " " + noun2 + " of " + place + "!");
}

story();
