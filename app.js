angular
  .module("jokesApp", [])
  .controller("RandomJokeController", RandomJokeController);


RandomJokeController.$inject = ["$http"];
function RandomJokeController( $http ){
  var vm = this;
  vm.getRandomJoke = getRandomJoke;
  getRandomJoke();

  ////

  function getRandomJoke(){
    $http
      .get("http://api.icndb.com/jokes/random")
      .then(
        function onSuccess(responseObject){
          vm.random_joke = responseObject.data.value.joke;
        },
        function onError(responseObject){
          alert("API REQUEST FAILED")
        }
      );
  }


}
