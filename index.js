
var quotes = [
    "I was raised by a mother who said to me all the time, 'Kamala, you may be the first to do many things — make sure you're not the last.' ",
    "Real leaders must be ready to sacrifice all for the freedom of their people.",
    "The future depends on what we do in the present.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Just be yourself, there is no one better.",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.",
    "Let us always meet each other with smile, for the smile is the beginning of love.",
    "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
    "It is our choices, that show what we truly are, far more than our abilities.",

]


var author = [
    " - Kamala Harris",
    " - Nelson Mandela",
    " - Mahatma Gandhi",
    " - Dalai Lama",
    " - Taylor Swift",
    " - Mark Twain",
    " - Audre Lorde",
    " - Abraham Lincoln",
    " - Mother Teresa",
    " - Leonardo Da Vinci",
    " - J.K.Rowling",


]


function newQuote(){

    var randomNumber = Math.floor(Math.random() *(quotes.length));
    document.getElementById("demo").innerHTML = quotes[randomNumber];
    document.getElementById("title").innerHTML = author[randomNumber];
}