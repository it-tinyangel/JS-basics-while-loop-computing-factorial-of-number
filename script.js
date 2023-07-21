let enterNumber = parseInt(prompt("Enter a natural number:"));

if (isNaN(enterNumber)) alert("Please, try again.");
else {
	if (enterNumber < 0) alert(`${enterNumber}! doesn't exist. Please, try again.`);
	else {
		let factorial = 1;
		let i = enterNumber;

		if (enterNumber > 0) // computing factorial count down from the entered number
			while (i > 1) {
				factorial *= i;
				i--;
			}
		document.write(`<h2>${enterNumber}! = ${factorial}</h2>`);
	} 
}
