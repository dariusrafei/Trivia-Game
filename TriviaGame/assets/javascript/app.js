$('#start').on('click', function() {
	game.start();
});

var questions = [{
	question: "The term wake, kettle, or committee refers to a group of what bird?",
	answers: ["Vulture", "Eagle", "Sparrow", "Hawk"],
	correctAnswer: "Vulture",
}, {
	question: "Which of the traditional five senses are dolphins believed not to possess?",
	answers: ["Touch", "Sight", "Taste", "Smell"],
	correctAnswer: "Smell",
}, {
	question: "A flamboyance is a group of what animal?",
	answers: ["Giraffe", "Rhino", "Flamingo", "Toucan"],
	correctAnswer: "Flamingo",
}, {
	question: "The Chihuahua is a breed of dog believed to originate from what country?",
	answers: ["Mexico", "Ecuador", "Nicaragua", "El Salvador"],
	correctAnswer: "Mexico",
}, {
	question:"What is a group of whales called?",
	answers: ["Squad", "Pod", "Flock", "Heard"],
	correctAnswer: "Pod",
}, {
	question: "What animal has the largest ears?",
	answers: ["African Elephant", "Asian Elephant"],
	correctAnswer: "African Elephant",
}, {
	question: "What is the national animal of Scotland?",
	answers: ["Unicorn", "Lockness Monster", "Tiger", "Donkey"],
	correctAnswer: "Unicorn",
}, {
	question: "In the United States, where can alligators and crocodiles be found together in the wild?",
	answers: ["Louisiana", "Alabama", "South Carolina", "Florida"],
	correctAnswer: "Florida",
}, {
	question: "What is the most popular breed of dog in the United States?",
	answers: ["Golden Retriever", "Labrador Retriever", "Beagle", "Rottweiler"],
	correctAnswer: "Labrador Retriever",
}];


var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function() {
		game.counter --;
		$('#counter').html(game.counter);
		if(game.counter<=0) {
			console.log("Time is up!");
			game.done();
		}
	},
	start: function() {
		timer = setInterval(game.countdown, 1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$('#start').remove();
		for ( var i = 0; i < questions.length; i++) {
			$('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
			for (var j=0; j < questions[i].answers.length; j++) {
				$('#subwrapper').append("<input type='radio' name='question- '" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
			}
		}
	},
	// This function checks whether the question was answered correctly.
	done: function() {
		$.each($('input[name="question-0"]:checked'), function() {
			if ($(this).val()==questions[0].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-1"]:checked'), function() {
			if ($(this).val()==questions[1].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2"]:checked'), function() {
			if ($(this).val()==questions[2].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3"]:checked'), function() {
			if ($(this).val()==questions[3].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4"]:checked'), function() {
			if ($(this).val()==questions[4].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5"]:checked'), function() {
			if ($(this).val()==questions[5].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-6"]:checked'), function() {
			if ($(this).val()==questions[6].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-7"]:checked'), function() {
			if ($(this).val()==questions[7].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-8"]:checked'), function() {
			if ($(this).val()==questions[8].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-9"]:checked'), function() {
			if ($(this).val()==questions[9].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
	
	this.result();
	},

	result: function() {
		clearInterval(timer);
		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		$('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>")
	}
}











