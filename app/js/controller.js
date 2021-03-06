angular.module('F1FeederApp.controllers', []).
controller('driversController', function($scope, ergastAPIservice, premierLeagueService) {

    $scope.nameFilter = null;
    $scope.driversList = [];

    $scope.driverSearchFilter = function (driver) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    });
    premierLeagueService.getTeamStanding().success(function (response) {
        $scope.standings = response.data.standings;
    });


}).
controller('CollapseDemoCtrl', function ($scope) {
    $scope.isCollapsed = false;
});