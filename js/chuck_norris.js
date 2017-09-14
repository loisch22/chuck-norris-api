let Joke = function() {

}

Joke.prototype.getJoke = function() {
  $.get(`https://api.chucknorris.io/jokes/random`).then(function(response) {
    $('.showJokes').text(`${response.value}`);
  }).fail(function(error) {
    $('.errors').text('There was an error while processing your joke. Please try again.');
  });

  // let promise = new Promise(function(resolve, reject) {
  //   let request = new XMLHttpRequest();
  //   let url = `https://api.chucknorris.io/jokes/random`;
  //   request.onload = function() {
  //     if (this.status === 200) {
  //       resolve(request.response);
  //     } else {
  //       reject();
  //     }
  //   }
  //   request.open("GET", url, true);
  //   request.send();
  // });
  //
  // promise.then(function(response) {
  //   let body = JSON.parse(response);
  //   $('.showJokes').text(`${body.value}`);
  // }, function(error) {
  //   $('.errors').text('Oh no. Something went wrong! Please try again.');
  // });
}

exports.jokeModule = Joke;
