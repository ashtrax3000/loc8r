(function () {
  angular
    .module('loc8rApp')
    .controller('navigationCtrl', ['$location', 'authentication', navigationCtrl]);

  function navigationCtrl($location, authentication) {
    var vm = this;

    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.logout = function () {
      authentication.logout();
      $location.path('/');
    };
  };
})();
