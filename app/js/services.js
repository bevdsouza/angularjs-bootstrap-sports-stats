angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  }).
  factory('premierLeagueService', function($http){
    var plAPI = {}

    plAPI.getTeamStanding = function(){
        return $http.get('js/data.json')
    }

//    function(){
//        return $http({
//            method: 'GET',
//            url: 'http://api.football-data.org/v1/competitions/398/leagueTable',
//            headers: {
//               'X-Response-Control': 'minified',
//               'Access-Control-Allow-Origin' : '*',
//               'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
//            },
//        });
//    };

    return plAPI;
    })

//    'http://api.fantasy.nfl.com/v1/leaderboard?siteId=34&count=10'

//    factory('premierLeagueService', function($http){
//        var plAPI = {}
//        var league_slug = '';
//        var season_slug = '';
//
//        var epl_url = 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/premier-league/seasons/16-17/standings';
//
//        plAPI.getTeamStanding = function(){
//            return $http({
//                method: 'GET',
//                url: epl_url,
//                headers: {
//                     "X-Mashape-Key": "r5xD9ZiKBgmshbOIBL7b5y4kqAq6p17PmXGjsnAU8j96hbWF43",
//                     "Accept": "application/json",
//                 },
//            });
//        };
//
//    return plAPI;
//  })