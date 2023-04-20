const jokes = [
	"Why do chicken coops only have two doors? Because if they had four, they'd be a chicken sedan.",
	"I told my wife she was drawing her eyebrows too high. She looked surprised.",
	"Why did the tomato turn red? Because it saw the salad dressing!",
	"I'm reading a book on the history of glue. I just can't seem to put it down.",
	"I'm on a whiskey diet. I've lost three days already."
];

const generateJokeBtn = document.getElementById("generate-joke-btn");
const jokeText = document.getElementById("joke");

generateJokeBtn.addEventListener("click", function() {
	const randomIndex = Math.floor(Math.random() * jokes.length);
	jokeText.textContent = jokes[randomIndex];
});
