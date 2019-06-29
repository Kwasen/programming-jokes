var jokeDOM = document.getElementById("jokePanel");
var jokeGetterDOM = document.getElementById("getJokeBtn");

jokeDOM.innerHTML = "Hello Foo";

const jokes = [
  '["Hip", "hip"] = array',
  'why did the programmer leave his job? \n Because he could not get arrays',
  'what is a programmers favourite hangout place? \n foo bar',
  'what do you call a programmer from Finland? \n Nerdic'
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getJoke(index) {

  if (typeof jokes[index] === 'undefined') {
    return 'Jokes on you. I am undefined';
  } else {
    return jokes[index];
  }
}

jokeGetterDOM.addEventListener('click', function (event) {
  if (this.classList) {
    this.classList.toggle('animated');
    this.classList.toggle('tada');
  } else {
    // probably an IE9 browser. TODO: TEST THIS
    var classes = this.className.split(" ");
    var i = classes.indexOf("animated tada");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("animated tada");
      this.className = classes.join(" ");
  }

  var randomIndex = getRandomInt(0, jokes.length);
  jokeDOM.innerHTML = getJoke(randomIndex);
});
