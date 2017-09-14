var Joke = require('../js/chuck_norris.js').jokeModule;

$(function() {
  $('#getJoke').click(function(event) {
    event.preventDefault();
    let joke = new Joke();
    joke.getJoke();


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
 });
});
