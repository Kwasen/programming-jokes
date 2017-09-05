var jokeDOM = document.getElementById("jokePanel");
var jokeGetterDOM = document.getElementById("getJokeBtn");
var myFooter = document.getElementById("myFooter");

jokeDOM.innerHTML = "Hello Foo";

const jokes = ['["Hip", "hip"] = array', 'why did the programmer leave his job? \n Because he could not get arrays','what is a programmers favourite hangout place? \n foo bar', 'what do you call a programmer from Finland? \n Nerdic'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getJoke (index){

	if(typeof jokes[index] === 'undefined') {
		return 'Jokes on you. I am undefined';
	} else {
		return jokes[index];
	}
}

// footer styling
var footerPaddingTop = Math.floor(window.innerHeight - (window.innerHeight * 0.10));
console.log('footerPaddingTop: ', footerPaddingTop);
myFooter.style.marginTop = footerPaddingTop + 'px';
// output

$(jokeGetterDOM).click(function(){
  $(this).toggleClass('animated tada');
  var randomIndex = getRandomInt(0, jokes.length);  
  jokeDOM.innerHTML  = getJoke(randomIndex);
  myFooter.style.backgroundColor = "red";
});

