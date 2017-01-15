function askQuestions () {

	var firstName = prompt('What is your first name?'),
		lastName = prompt('What is your last name?'), 
		fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	}else{

		console.log('User is a child');

	}	

	/*
		If the user's first name is 'General' and 
		their last name is NOT 'Assembly', then greet the general!
		(Hint: Use console.log) 
	*/

	if (firstName === 'General' && lastName !== 'Assembly') {

	    	console.log('Greetings General!'); 
		}
}

// When the page has loaded 

$(function () {

	//When the user clicks the image, run askQuestions
	$('img').on('click', askQuestions);

	// When the user clicks an h3 element
	$('h3').on('click', function () {

	// Toggle the next element
	$(this).next().slideToggle(9000);

	});

});

