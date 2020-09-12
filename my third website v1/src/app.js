(function () {

angular.module('RoutingApp',['ui.router']);

angular.module('RoutingApp')
  .controller('menuCrtl', menuCrtl)
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: 'src/home.html'
    })
   .state('outDoor', {
      url: '/outDoor',
      templateUrl: 'src/outDoor.html'
    })
    .state('inDoor', {
      url: '/inDoor',
      templateUrl: 'src/inDoor.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'src/contact.html'
    })

    .state('log-in', {
      url: '/loh-in',
      templateUrl: 'src/login.html'
    })
     .state('menu', {
      url: '/menu',
      templateUrl: 'src/menu.html'
    })
     ;
}



  function menuCrtl($scope) {
    $scope.name="ahmad";
    $scope.menus =[
      {
        type:"pizza",
        desc:"its pizaaaaaaaa"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      },
      {type:"sandwish",
        desc:"its sandwish"
      }
    ];
    var car = {type:"Ford", model:"Explorer", color:"White"};
    // body...
  }


})();
