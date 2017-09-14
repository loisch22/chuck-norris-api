var Joke = require('../js/chuck_norris.js').jokeModule;

$(function() {
  $('#getJoke').click(function(event) {
    event.preventDefault();
    let joke = new Joke();
    joke.getJoke();
 });
});
