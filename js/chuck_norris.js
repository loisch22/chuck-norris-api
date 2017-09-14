let Joke = function() {

}

Joke.prototype.getJoke = function() {
  $.get(`https://api.chucknorris.io/jokes/random`).then(function(response) {
    $('.showJokes').text(`${response.value}`);
  }).fail(function(error) {
    $('.errors').text('There was an error while processing your joke. Please try again.');
  });
}

exports.jokeModule = Joke;
