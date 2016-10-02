angular
.constant(
    'EPL':{
        'NAME'          : 'Soccer - Sports Open Data',
        'LEAGUE_SLUG'   : 'premier-league',
        'SEASON_SLUG'   : '16-17',
        'URL'           : 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/' + EPL.LEAGUE_SLUG +
                           '/seasons/' + EPL.SEASON_SLUG + '/standings'
        'HEADERS':{
            "X-Mashape-Key": "r5xD9ZiKBgmshbOIBL7b5y4kqAq6p17PmXGjsnAU8j96hbWF43",
            "Accept": "application/json"
        }
    }
);