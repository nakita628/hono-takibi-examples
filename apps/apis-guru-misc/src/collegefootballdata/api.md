<h1 id="college-football-data-api">College Football Data API v4.4.12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with "Bearer " prepended (e.g. "Bearer your_key"). API keys can be acquired from the CollegeFootballData.com website.

Base URLs:

* <a href="https://api.collegefootballdata.com">https://api.collegefootballdata.com</a>

Email: <a href="mailto:admin@collegefootballdata.com">admin@collegefootballdata.com</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Authorization**, in: header.

<h1 id="college-football-data-api-games">games</h1>

Games scores and statistics

## Season calendar

<a id="opIdgetCalendar"></a>

> Code samples

```bash
curl 'https://example.com/calendar?year=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /calendar`

Get calendar of weeks by season

<h3 id="season-calendar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year filter|

> Example responses

> 200 Response

```json
[
  {
    "firstGameStart": "string",
    "lastGameStart": "string",
    "season": 0,
    "seasonType": "string",
    "week": 0
  }
]
```

<h3 id="season-calendar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="season-calendar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Week](#schemaweek)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Advanced box scores

<a id="opIdgetAdvancedBoxScore"></a>

> Code samples

```bash
curl 'https://example.com/game/box/advanced?gameId=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /game/box/advanced`

Get advanced box score data

<h3 id="advanced-box-scores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gameId|query|integer|true|Game id parameters|

> Example responses

> 200 Response

```json
{
  "players": {
    "ppa": [
      {
        "average": {
          "passing": 0,
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "rushing": 0,
          "total": 0
        },
        "cumulative": {
          "passing": 0,
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "rushing": 0,
          "total": 0
        },
        "player": "string",
        "position": "string",
        "team": "string"
      }
    ],
    "usage": [
      {
        "passing": 0,
        "player": "string",
        "position": "string",
        "quarter1": 0,
        "quarter2": 0,
        "quarter3": 0,
        "quarter4": 0,
        "rushing": 0,
        "team": "string",
        "total": 0
      }
    ]
  },
  "teams": {
    "cumulativePpa": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "passing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "plays": 0,
        "rushing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ],
    "explosiveness": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ],
    "fieldPosition": [
      {
        "averageStart": 0,
        "averageStartingPredictedPoints": 0,
        "team": "string"
      }
    ],
    "havoc": [
      {
        "db": 0,
        "frontSeven": 0,
        "team": "string",
        "total": 0
      }
    ],
    "ppa": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "passing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "plays": 0,
        "rushing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ],
    "rushing": [
      {
        "lineYards": 0,
        "lineYardsAverage": 0,
        "openFieldYards": 0,
        "openFieldYardsAverage": 0,
        "powerSuccess": 0,
        "secondLevelYards": 0,
        "secondLevelYardsAverage": 0,
        "stuffRate": 0,
        "team": "string"
      }
    ],
    "scoringOpportunities": [
      {
        "opportunities": 0,
        "points": 0,
        "pointsPerOpportunity": 0,
        "team": "string"
      }
    ],
    "successRates": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "passingDowns": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "standardDowns": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ]
  }
}
```

<h3 id="advanced-box-scores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BoxScore](#schemaboxscore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Games and results

<a id="opIdgetGames"></a>

> Code samples

```bash
curl 'https://example.com/games?year=1869' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /games`

Get game results

<h3 id="games-and-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year/season filter for games|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular or postseason)|
|team|query|string|false|Team|
|home|query|string|false|Home team filter|
|away|query|string|false|Away team filter|
|conference|query|string|false|Conference abbreviation filter|
|division|query|string|false|Division classification filter (fbs/fcs/ii/iii)|
|id|query|integer|false|id filter for querying a single game|

> Example responses

> 200 Response

```json
[
  {
    "attendance": 0,
    "away_conference": "string",
    "away_division": "string",
    "away_id": 0,
    "away_line_scores": [
      0
    ],
    "away_points": 0,
    "away_post_win_prob": 0,
    "away_postgame_elo": 0,
    "away_pregame_elo": 0,
    "away_team": "string",
    "completed": true,
    "conference_game": true,
    "excitement_index": 0,
    "highlights": "string",
    "home_conference": "string",
    "home_division": "string",
    "home_id": 0,
    "home_line_scores": [
      0
    ],
    "home_points": 0,
    "home_post_win_prob": 0,
    "home_postgame_elo": 0,
    "home_pregame_elo": 0,
    "home_team": "string",
    "id": 0,
    "neutral_site": true,
    "notes": "string",
    "season": 0,
    "season_type": "string",
    "start_date": "string",
    "start_time_tbd": true,
    "venue": "string",
    "venue_id": 0,
    "week": 0
  }
]
```

<h3 id="games-and-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="games-and-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Game media information and schedules

<a id="opIdgetGameMedia"></a>

> Code samples

```bash
curl 'https://example.com/games/media?year=2001' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /games/media`

Game media information (TV, radio, etc)

<h3 id="game-media-information-and-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year filter|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular, postseason, or both)|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference filter|
|mediaType|query|string|false|Media type filter (tv, radio, web, ppv, or mobile)|
|classification|query|string|false|Division classification filter (fbs/fcs/ii/iii)|

> Example responses

> 200 Response

```json
[
  {
    "awayConference": "string",
    "awayTeam": "string",
    "homeConference": "string",
    "homeTeam": "string",
    "id": 0,
    "isStartTimeTBD": true,
    "mediaType": "string",
    "outlet": "string",
    "season": 0,
    "seasonType": "string",
    "startTime": "string",
    "week": 0
  }
]
```

<h3 id="game-media-information-and-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="game-media-information-and-schedules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GameMedia](#schemagamemedia)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Player game stats

<a id="opIdgetPlayerGameStats"></a>

> Code samples

```bash
curl 'https://example.com/games/players?year=2001' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /games/players`

Player stats broken down by game

<h3 id="player-game-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year/season filter for games|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular or postseason)|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference abbreviation filter|
|category|query|string|false|Category filter (e.g defensive)|
|gameId|query|integer|false|Game id filter|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "teams": [
      {
        "categories": [
          {
            "name": "string",
            "types": [
              {
                "athletes": [
                  {
                    "id": 0,
                    "name": "string",
                    "stat": "string"
                  }
                ],
                "name": "string"
              }
            ]
          }
        ],
        "homeAway": true,
        "points": 0,
        "school": {
          "conference": "string",
          "name": "string"
        }
      }
    ]
  }
]
```

<h3 id="player-game-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="player-game-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGame](#schemaplayergame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team game stats

<a id="opIdgetTeamGameStats"></a>

> Code samples

```bash
curl 'https://example.com/games/teams?year=2001' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /games/teams`

Team stats broken down by game

<h3 id="team-game-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year/season filter for games|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular or postseason)|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference abbreviation filter|
|gameId|query|integer|false|Game id filter|
|classification|query|string|false|Division classification filter (fbs/fcs/ii/iii)|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "teams": [
      {
        "conference": "string",
        "homeAway": "string",
        "points": 0,
        "school": "string",
        "stats": [
          {
            "category": "string",
            "stat": "string"
          }
        ]
      }
    ]
  }
]
```

<h3 id="team-game-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-game-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamGame](#schemateamgame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Game weather information (Patreon only)

<a id="opIdgetGameWeather"></a>

> Code samples

```bash
curl https://example.com/games/weather \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /games/weather`

Weather information for the hour of kickoff

<h3 id="game-weather-information-patreon-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gameId|query|integer|false|Game id filter (required if no year)|
|year|query|integer|false|Year filter (required if no game id)|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular, postseason, or both)|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference filter|
|classification|query|string|false|Division classification filter (fbs/fcs/ii/iii)|

> Example responses

> 200 Response

```json
[
  {
    "awayConference": "string",
    "awayTeam": "string",
    "dewPoint": 0,
    "gameIndoors": true,
    "homeConference": "string",
    "homeTeam": "string",
    "humidity": 0,
    "id": 0,
    "precipitation": 0,
    "pressure": 0,
    "season": 0,
    "seasonType": "string",
    "snowfall": 0,
    "startTime": "string",
    "temperature": 0,
    "venue": "string",
    "venueId": 0,
    "weatherCondition": "string",
    "weatherConditionCode": 0,
    "week": 0,
    "windDirection": 0,
    "windSpeed": 0
  }
]
```

<h3 id="game-weather-information-patreon-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="game-weather-information-patreon-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GameWeather](#schemagameweather)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team records

<a id="opIdgetTeamRecords"></a>

> Code samples

```bash
curl https://example.com/records \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /records`

Get team records by year

<h3 id="team-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference filter|

> Example responses

> 200 Response

```json
[
  {
    "awayGames": {
      "games": 0,
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "conference": "string",
    "conferenceGames": {
      "games": 0,
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "division": "string",
    "expectedWins": 0,
    "homeGames": {
      "games": 0,
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "team": "string",
    "total": {
      "games": 0,
      "losses": 0,
      "ties": 0,
      "wins": 0
    },
    "year": 0
  }
]
```

<h3 id="team-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamRecord](#schemateamrecord)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Live game results (Patreon only)

<a id="opIdgetScoreboard"></a>

> Code samples

```bash
curl https://example.com/scoreboard \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /scoreboard`

Get live game results

<h3 id="live-game-results-patreon-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|classification|query|string|false|Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.|
|conference|query|string|false|Conference abbreviation filter.|

> Example responses

> 200 Response

```json
[
  {
    "awayTeam": {
      "classification": "string",
      "conference": "string",
      "id": 0,
      "name": "string",
      "points": 0
    },
    "betting": {
      "awayMoneyline": 0,
      "homeMoneyline": 0,
      "overUnder": 0,
      "spread": 0
    },
    "clock": "string",
    "conferenceGame": true,
    "homeTeam": {
      "classification": "string",
      "conference": "string",
      "id": 0,
      "name": "string",
      "points": 0
    },
    "id": 0,
    "neutralSite": true,
    "period": 0,
    "possession": "string",
    "situation": "string",
    "startDate": "string",
    "startTimeTBD": true,
    "status": "string",
    "tv": "string",
    "venue": {
      "city": "string",
      "name": "string",
      "state": "string"
    },
    "weather": {
      "description": "string",
      "temperature": 0,
      "windDirection": 0,
      "windSpeed": 0
    }
  }
]
```

<h3 id="live-game-results-patreon-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="live-game-results-patreon-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreboardGame](#schemascoreboardgame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-drives">drives</h1>

Drive data

## Drive data and results

<a id="opIdgetDrives"></a>

> Code samples

```bash
curl 'https://example.com/drives?year=2001' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /drives`

Get game drives

<h3 id="drive-data-and-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seasonType|query|string|false|Season type filter|
|year|query|integer|true|Year filter|
|week|query|integer|false|Week filter|
|team|query|string|false|Team filter|
|offense|query|string|false|Offensive team filter|
|defense|query|string|false|Defensive team filter|
|conference|query|string|false|Conference filter|
|offenseConference|query|string|false|Offensive conference filter|
|defenseConference|query|string|false|Defensive conference filter|
|classification|query|string|false|Division classification filter (fbs/fcs/ii/iii)|

> Example responses

> 200 Response

```json
[
  {
    "defense": "string",
    "defense_conference": "string",
    "drive_number": 0,
    "drive_result": "string",
    "end_defense_score": 0,
    "end_offense_score": 0,
    "end_period": 0,
    "end_time": {
      "minutes": 0,
      "seconds": 0
    },
    "end_yardline": 0,
    "end_yards_to_goal": 0,
    "game_id": 0,
    "id": 0,
    "is_home_offense": true,
    "offense": "string",
    "offense_conference": "string",
    "plays": 0,
    "scoring": true,
    "start_defense_score": 0,
    "start_offense_score": 0,
    "start_period": 0,
    "start_time": {
      "minutes": 0,
      "seconds": 0
    },
    "start_yardline": 0,
    "start_yards_to_goal": 0,
    "yards": 0
  }
]
```

<h3 id="drive-data-and-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="drive-data-and-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Drive](#schemadrive)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-plays">plays</h1>

Play by play data

## Live metrics and PBP (Patreon only)

<a id="opIdgetLivePlays"></a>

> Code samples

```bash
curl 'https://example.com/live/plays?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /live/plays`

Get live metrics and PBP

<h3 id="live-metrics-and-pbp-patreon-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|Game id|

> Example responses

> 200 Response

```json
{
  "clock": "string",
  "distance": 0,
  "down": 0,
  "drives": [
    {
      "defense": "string",
      "defenseId": 0,
      "duration": "string",
      "endClock": "string",
      "endPeriod": 0,
      "endYardsToGoal": 0,
      "id": 0,
      "offense": "string",
      "offenseId": 0,
      "playCount": 0,
      "plays": [
        {
          "awayScore": 0,
          "clock": "string",
          "distance": 0,
          "down": 0,
          "downType": "string",
          "epa": 0,
          "garbageTime": true,
          "homeScore": 0,
          "id": 0,
          "period": 0,
          "playText": "string",
          "playType": "string",
          "playTypeId": 0,
          "rushPass": "string",
          "success": true,
          "team": "string",
          "teamId": 0,
          "wallclock": "string",
          "yardsGained": 0,
          "yardsToGoal": 0
        }
      ],
      "scoringOpportunity": true,
      "startClock": "string",
      "startPeriod": 0,
      "startYardsToGoal": 0,
      "yards": 0
    }
  ],
  "id": 0,
  "period": 0,
  "possession": "string",
  "status": "string",
  "teams": [
    {
      "drives": 0,
      "epaPerPass": 0,
      "epaPerPlay": 0,
      "epaPerRush": 0,
      "explosiveness": 0,
      "homeAway": "string",
      "lineYards": 0,
      "lineYardsPerRush": 0,
      "openFieldYards": 0,
      "openFieldYardsPerRush": 0,
      "passingDownSuccessRate": 0,
      "passingEpa": 0,
      "plays": 0,
      "points": 0,
      "pointsPerOpportunity": 0,
      "rushingEpa": 0,
      "scoringOpportunities": 0,
      "secondLevelYards": 0,
      "secondLevelYardsPerRush": 0,
      "standardDownSuccessRate": 0,
      "successRate": 0,
      "team": "string",
      "teamId": 0,
      "totalEpa": 0
    }
  ],
  "yardsToGoal": 0
}
```

<h3 id="live-metrics-and-pbp-patreon-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[LivePlayByPlay](#schemaliveplaybyplay)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Types of player play stats

<a id="opIdgetPlayStatTypes"></a>

> Code samples

```bash
curl https://example.com/play/stat/types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /play/stat/types`

Type of play stats

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="types-of-player-play-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="types-of-player-play-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayStatType](#schemaplaystattype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Play stats by play

<a id="opIdgetPlayStats"></a>

> Code samples

```bash
curl https://example.com/play/stats \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /play/stats`

Gets player stats associated by play (limit 1000)

<h3 id="play-stats-by-play-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|week|query|integer|false|Week filter|
|team|query|string|false|Team filter|
|gameId|query|integer|false|gameId filter (from /games endpoint)|
|athleteId|query|integer|false|athleteId filter (from /roster endpoint)|
|statTypeId|query|integer|false|statTypeId filter (from /play/stat/types endpoint)|
|seasonType|query|string|false|regular, postseason, or both|
|conference|query|string|false|conference abbreviation filter|

> Example responses

> 200 Response

```json
[
  {
    "athleteId": 0,
    "athleteName": "string",
    "clock": {
      "minutes": 0,
      "seconds": 0
    },
    "conference": "string",
    "distance": 0,
    "down": 0,
    "driveId": 0,
    "gameId": 0,
    "opponent": "string",
    "opponentScore": 0,
    "period": 0,
    "playId": 0,
    "season": 0,
    "stat": 0,
    "statType": "string",
    "team": "string",
    "teamScore": 0,
    "week": 0,
    "yardsToGoal": 0
  }
]
```

<h3 id="play-stats-by-play-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="play-stats-by-play-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayStat](#schemaplaystat)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Play types

<a id="opIdgetPlayTypes"></a>

> Code samples

```bash
curl https://example.com/play/types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /play/types`

Types of plays

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "id": 0,
    "text": "string"
  }
]
```

<h3 id="play-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="play-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayType](#schemaplaytype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Play by play data

<a id="opIdgetPlays"></a>

> Code samples

```bash
curl 'https://example.com/plays?year=2001&week=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /plays`

Get play data and results

<h3 id="play-by-play-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seasonType|query|string|false|Season type filter|
|year|query|integer|true|Year filter|
|week|query|integer|true|Week filter (required if team, offense, or defense, not specified)|
|team|query|string|false|Team filter|
|offense|query|string|false|Offensive team filter|
|defense|query|string|false|Defensive team filter|
|conference|query|string|false|Conference filter|
|offenseConference|query|string|false|Offensive conference filter|
|defenseConference|query|string|false|Defensive conference filter|
|playType|query|integer|false|Play type filter|
|classification|query|string|false|Division classification filter (fbs/fcs/ii/iii)|

> Example responses

> 200 Response

```json
[
  {
    "away": "string",
    "clock": {
      "minutes": 0,
      "seconds": 0
    },
    "defense": "string",
    "defense_conference": "string",
    "defense_score": 0,
    "defense_timeouts": 0,
    "distance": 0,
    "down": 0,
    "drive_id": 0,
    "drive_number": 0,
    "game_id": 0,
    "home": "string",
    "id": 0,
    "offense": "string",
    "offense_conference": "string",
    "offense_score": 0,
    "offense_timeouts": 0,
    "period": 0,
    "play_number": 0,
    "play_text": "string",
    "play_type": "string",
    "ppa": 0,
    "scoring": true,
    "wallclock": "string",
    "yard_line": 0,
    "yards_gained": 0,
    "yards_to_goal": 0
  }
]
```

<h3 id="play-by-play-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="play-by-play-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Play](#schemaplay)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-teams">teams</h1>

Team information

## Team rosters

<a id="opIdgetRoster"></a>

> Code samples

```bash
curl https://example.com/roster \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /roster`

Roster data

<h3 id="team-rosters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team|query|string|false|Team name|
|year|query|integer|false|Season year|

> Example responses

> 200 Response

```json
[
  {
    "first_name": "string",
    "height": 0,
    "home_city": "string",
    "home_country": "string",
    "home_county_fips": "string",
    "home_latitude": 0,
    "home_longitude": 0,
    "home_state": "string",
    "id": 0,
    "jersey": 0,
    "last_name": "string",
    "position": "string",
    "recruit_ids": [
      0
    ],
    "team": "string",
    "weight": 0,
    "year": 0
  }
]
```

<h3 id="team-rosters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-rosters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team talent composite rankings

<a id="opIdgetTalent"></a>

> Code samples

```bash
curl https://example.com/talent \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /talent`

Team talent composite

<h3 id="team-talent-composite-rankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|

> Example responses

> 200 Response

```json
[
  {
    "school": "string",
    "talent": 0,
    "year": 0
  }
]
```

<h3 id="team-talent-composite-rankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-talent-composite-rankings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamTalent](#schemateamtalent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team information

<a id="opIdgetTeams"></a>

> Code samples

```bash
curl https://example.com/teams \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /teams`

Get team information

<h3 id="team-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conference|query|string|false|Conference abbreviation filter|

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "alt_color": "string",
    "alt_name_1": "string",
    "alt_name_2": "string",
    "alt_name_3": "string",
    "classification": "string",
    "color": "string",
    "conference": "string",
    "division": "string",
    "id": 0,
    "location": {
      "capacity": 0,
      "city": "string",
      "country_code": "string",
      "dome": true,
      "elevation": 0,
      "grass": true,
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "state": "string",
      "timezone": "string",
      "venue_id": 0,
      "year_constructed": 0,
      "zip": "string"
    },
    "logos": [
      "string"
    ],
    "mascot": "string",
    "school": "string",
    "twitter": "string"
  }
]
```

<h3 id="team-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## FBS team list

<a id="opIdgetFbsTeams"></a>

> Code samples

```bash
curl https://example.com/teams/fbs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /teams/fbs`

Information on major division teams

<h3 id="fbs-team-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "alt_color": "string",
    "alt_name_1": "string",
    "alt_name_2": "string",
    "alt_name_3": "string",
    "classification": "string",
    "color": "string",
    "conference": "string",
    "division": "string",
    "id": 0,
    "location": {
      "capacity": 0,
      "city": "string",
      "country_code": "string",
      "dome": true,
      "elevation": 0,
      "grass": true,
      "latitude": 0,
      "longitude": 0,
      "name": "string",
      "state": "string",
      "timezone": "string",
      "venue_id": 0,
      "year_constructed": 0,
      "zip": "string"
    },
    "logos": [
      "string"
    ],
    "mascot": "string",
    "school": "string",
    "twitter": "string"
  }
]
```

<h3 id="fbs-team-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="fbs-team-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team matchup history

<a id="opIdgetTeamMatchup"></a>

> Code samples

```bash
curl 'https://example.com/teams/matchup?team1=string&team2=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /teams/matchup`

Matchup history

<h3 id="team-matchup-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|team1|query|string|true|First team|
|team2|query|string|true|Second team|
|minYear|query|integer|false|Minimum year|
|maxYear|query|integer|false|Maximum year|

> Example responses

> 200 Response

```json
{
  "endYear": 0,
  "games": [
    {
      "awayScore": 0,
      "awayTeam": "string",
      "date": "string",
      "homeScore": 0,
      "homeTeam": "string",
      "neutralSite": true,
      "season": 0,
      "season_type": "string",
      "venue": "string",
      "week": 0,
      "winner": "string"
    }
  ],
  "startYear": 0,
  "team1": "string",
  "team1Wins": 0,
  "team2": "string",
  "team2Wins": 0,
  "ties": 0
}
```

<h3 id="team-matchup-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[TeamMatchup](#schemateammatchup)|
|400|Bad Request|error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-conferences">conferences</h1>

Conference information

## Conferences

<a id="opIdgetConferences"></a>

> Code samples

```bash
curl https://example.com/conferences \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /conferences`

Get conference list

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "classification": "string",
    "id": 0,
    "name": "string",
    "short_name": "string"
  }
]
```

<h3 id="conferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="conferences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conference](#schemaconference)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-venues">venues</h1>

Information about venues

## Arena and venue information

<a id="opIdgetVenues"></a>

> Code samples

```bash
curl https://example.com/venues \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /venues`

Venues

> Example responses

> 200 Response

```json
[
  {
    "capacity": 0,
    "city": "string",
    "country_code": "string",
    "dome": true,
    "elevation": 0,
    "grass": true,
    "id": 0,
    "location": {
      "x": 0,
      "y": 0
    },
    "name": "string",
    "state": "string",
    "timezone": "string",
    "year_constructed": 0,
    "zip": "string"
  }
]
```

<h3 id="arena-and-venue-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="arena-and-venue-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Venue](#schemavenue)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-coaches">coaches</h1>

Information about coaches

## Coaching records and history

<a id="opIdgetCoaches"></a>

> Code samples

```bash
curl https://example.com/coaches \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /coaches`

Coaching history

<h3 id="coaching-records-and-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|query|string|false|First name filter|
|lastName|query|string|false|Last name filter|
|team|query|string|false|Team name filter|
|year|query|integer|false|Year filter|
|minYear|query|integer|false|Minimum year filter (inclusive)|
|maxYear|query|integer|false|Maximum year filter (inclusive)|

> Example responses

> 200 Response

```json
[
  {
    "first_name": "string",
    "hire_date": "string",
    "last_name": "string",
    "seasons": [
      {
        "games": 0,
        "losses": 0,
        "postseason_rank": 0,
        "preseason_rank": 0,
        "school": "string",
        "sp_defense": 0,
        "sp_offense": 0,
        "sp_overall": 0,
        "srs": 0,
        "ties": 0,
        "wins": 0,
        "year": "string"
      }
    ]
  }
]
```

<h3 id="coaching-records-and-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="coaching-records-and-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Coach](#schemacoach)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-players">players</h1>

Player information and data

## Transfer portal by season

<a id="opIdgetTransferPortal"></a>

> Code samples

```bash
curl 'https://example.com/player/portal?year=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /player/portal`

Transfer portal by season

<h3 id="transfer-portal-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year filter|

> Example responses

> 200 Response

```json
[
  {
    "destination": "string",
    "eligibility": "string",
    "firstName": "string",
    "lastName": "string",
    "origin": "string",
    "position": "string",
    "rating": 0,
    "season": 0,
    "stars": 0,
    "transferDate": "string"
  }
]
```

<h3 id="transfer-portal-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="transfer-portal-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PortalPlayer](#schemaportalplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team returning production metrics

<a id="opIdgetReturningProduction"></a>

> Code samples

```bash
curl https://example.com/player/returning \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /player/returning`

Returning production metrics

<h3 id="team-returning-production-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference abbreviation filter|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "passingUsage": 0,
    "percentPPA": 0,
    "percentPassingPPA": 0,
    "percentReceivingPPA": 0,
    "percentRushingPPA": 0,
    "receivingUsage": 0,
    "rushingUsage": 0,
    "season": 0,
    "team": "string",
    "totalPPA": 0,
    "totalPassingPPA": 0,
    "totalReceivingPPA": 0,
    "totalRushingPPA": 0,
    "usage": 0
  }
]
```

<h3 id="team-returning-production-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-returning-production-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReturningProduction](#schemareturningproduction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Search for player information

<a id="opIdplayerSearch"></a>

> Code samples

```bash
curl 'https://example.com/player/search?searchTerm=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /player/search`

Search for players

<h3 id="search-for-player-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerm|query|string|true|Term to search on|
|position|query|string|false|Position abbreviation filter|
|team|query|string|false|Team filter|
|year|query|integer|false|Year filter|

> Example responses

> 200 Response

```json
[
  {
    "firstName": "string",
    "height": 0,
    "hometown": "string",
    "id": 0,
    "jersey": 0,
    "lastName": "string",
    "name": "string",
    "position": "string",
    "team": "string",
    "teamColor": "string",
    "teamColorSecondary": "string",
    "weight": 0
  }
]
```

<h3 id="search-for-player-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="search-for-player-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSearchResult](#schemaplayersearchresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Player usage metrics broken down by season

<a id="opIdgetPlayerUsage"></a>

> Code samples

```bash
curl 'https://example.com/player/usage?year=2022' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /player/usage`

Player usage metrics by season

<h3 id="player-usage-metrics-broken-down-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference abbreviation filter|
|position|query|string|false|Position abbreviation filter|
|playerId|query|integer|false|Player id filter|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "id": 0,
    "name": "string",
    "position": "string",
    "season": 0,
    "team": "string",
    "usage": {
      "firstDown": 0,
      "overall": 0,
      "pass": 0,
      "passingDowns": 0,
      "rush": 0,
      "secondDown": 0,
      "standardDowns": 0,
      "thirdDown": 0
    }
  }
]
```

<h3 id="player-usage-metrics-broken-down-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="player-usage-metrics-broken-down-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerUsage](#schemaplayerusage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Player stats by season

<a id="opIdgetPlayerSeasonStats"></a>

> Code samples

```bash
curl 'https://example.com/stats/player/season?year=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /stats/player/season`

Season player stats

<h3 id="player-stats-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference abbreviation filter|
|startWeek|query|integer|false|Start week filter|
|endWeek|query|integer|false|Start week filter|
|seasonType|query|string|false|Season type filter (regular, postseason, or both)|
|category|query|string|false|Stat category filter (e.g. passing)|

> Example responses

> 200 Response

```json
[
  {
    "category": "string",
    "conference": "string",
    "player": "string",
    "playerId": 0,
    "season": 0,
    "stat": 0,
    "statType": "string",
    "team": "string"
  }
]
```

<h3 id="player-stats-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="player-stats-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeasonStat](#schemaplayerseasonstat)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-rankings">rankings</h1>

Historical poll rankings

## Historical polls and rankings

<a id="opIdgetRankings"></a>

> Code samples

```bash
curl 'https://example.com/rankings?year=1936' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /rankings`

Poll rankings

<h3 id="historical-polls-and-rankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year/season filter for games|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular or postseason)|

> Example responses

> 200 Response

```json
[
  {
    "polls": [
      {
        "poll": "string",
        "ranks": [
          {
            "conference": "string",
            "firstPlaceVotes": 0,
            "points": 0,
            "rank": 0,
            "school": "string"
          }
        ]
      }
    ],
    "season": 0,
    "seasonType": "string",
    "week": 0
  }
]
```

<h3 id="historical-polls-and-rankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="historical-polls-and-rankings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RankingWeek](#schemarankingweek)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-betting">betting</h1>

Betting lines and data

## Betting lines

<a id="opIdgetLines"></a>

> Code samples

```bash
curl https://example.com/lines \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /lines`

Closing betting lines

<h3 id="betting-lines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gameId|query|integer|false|Game id filter|
|year|query|integer|false|Year/season filter for games|
|week|query|integer|false|Week filter|
|seasonType|query|string|false|Season type filter (regular or postseason)|
|team|query|string|false|Team|
|home|query|string|false|Home team filter|
|away|query|string|false|Away team filter|
|conference|query|string|false|Conference abbreviation filter|

> Example responses

> 200 Response

```json
[
  {
    "awayConference": "string",
    "awayScore": 0,
    "awayTeam": "string",
    "homeConference": "string",
    "homeScore": 0,
    "homeTeam": "string",
    "id": 0,
    "lines": [
      {
        "awayMoneyline": 0,
        "formattedSpread": "string",
        "homeMoneyline": 0,
        "overUnder": 0,
        "overUnderOpen": 0,
        "provider": "string",
        "spread": 0,
        "spreadOpen": 0
      }
    ],
    "season": 0,
    "seasonType": "string",
    "startDate": "string",
    "week": 0
  }
]
```

<h3 id="betting-lines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="betting-lines-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GameLines](#schemagamelines)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-recruiting">recruiting</h1>

Recruiting rankings and data

## Recruit position group ratings

<a id="opIdgetRecruitingGroups"></a>

> Code samples

```bash
curl https://example.com/recruiting/groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /recruiting/groups`

Gets a list of aggregated statistics by team and position grouping

<h3 id="recruit-position-group-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startYear|query|integer|false|Starting year|
|endYear|query|integer|false|Ending year|
|team|query|string|false|Team filter|
|conference|query|string|false|conference filter|

> Example responses

> 200 Response

```json
[
  {
    "averageRating": 0,
    "averageStars": 0,
    "commits": 0,
    "conference": "string",
    "positionGroup": "string",
    "team": "string",
    "totalRating": 0
  }
]
```

<h3 id="recruit-position-group-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="recruit-position-group-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PositionGroupRecruitingRating](#schemapositiongrouprecruitingrating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Player recruiting ratings and rankings

<a id="opIdgetRecruitingPlayers"></a>

> Code samples

```bash
curl https://example.com/recruiting/players \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /recruiting/players`

Get player recruiting rankings and data. Requires either a year or team to be specified.

<h3 id="player-recruiting-ratings-and-rankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Recruiting class year (required if team no specified)|
|classification|query|string|false|Type of recruit (HighSchool, JUCO, PrepSchool)|
|position|query|string|false|Position abbreviation filter|
|state|query|string|false|State or province abbreviation filter|
|team|query|string|false|Committed team filter (required if year not specified)|

> Example responses

> 200 Response

```json
[
  {
    "athleteId": 0,
    "city": "string",
    "committedTo": "string",
    "country": "string",
    "height": 0,
    "hometownInfo": {
      "countyFips": "string",
      "latitude": 0,
      "longitude": 0
    },
    "id": 0,
    "name": "string",
    "position": "string",
    "ranking": 0,
    "rating": 0,
    "recruitType": "string",
    "school": "string",
    "stars": 0,
    "stateProvince": "string",
    "weight": 0,
    "year": 0
  }
]
```

<h3 id="player-recruiting-ratings-and-rankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="player-recruiting-ratings-and-rankings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Recruit](#schemarecruit)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team recruiting rankings and ratings

<a id="opIdgetRecruitingTeams"></a>

> Code samples

```bash
curl https://example.com/recruiting/teams \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /recruiting/teams`

Team recruiting rankings

<h3 id="team-recruiting-rankings-and-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Recruiting class year|
|team|query|string|false|Team filter|

> Example responses

> 200 Response

```json
[
  {
    "points": 0,
    "rank": 0,
    "team": "string",
    "year": 0
  }
]
```

<h3 id="team-recruiting-rankings-and-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-recruiting-rankings-and-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamRecruitingRank](#schemateamrecruitingrank)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-ratings">ratings</h1>

Team rating data

## Historical Elo ratings

<a id="opIdgetEloRatings"></a>

> Code samples

```bash
curl https://example.com/ratings/elo \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ratings/elo`

Elo rating data

<h3 id="historical-elo-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Season filter|
|week|query|integer|false|Maximum week filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference filter|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "elo": 0,
    "team": "string",
    "year": 0
  }
]
```

<h3 id="historical-elo-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="historical-elo-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamEloRating](#schemateamelorating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Historical SP+ ratings

<a id="opIdgetSPRatings"></a>

> Code samples

```bash
curl https://example.com/ratings/sp \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ratings/sp`

SP+ rating data

<h3 id="historical-sp-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Season filter (required if team not specified)|
|team|query|string|false|Team filter (required if year not specified)|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "defense": {
      "explosiveness": 0,
      "havoc": {
        "db": 0,
        "frontSeven": 0,
        "total": 0
      },
      "pasing": 0,
      "passingDowns": 0,
      "ranking": 0,
      "rating": 0,
      "rushing": 0,
      "standardDowns": 0,
      "success": 0
    },
    "offense": {
      "explosiveness": 0,
      "pace": 0,
      "passing": 0,
      "passingDowns": 0,
      "ranking": 0,
      "rating": 0,
      "runRate": 0,
      "rushing": 0,
      "standardDowns": 0,
      "success": 0
    },
    "ranking": 0,
    "rating": 0,
    "secondOrderWins": 0,
    "sos": 0,
    "specialTeams": {
      "rating": 0
    },
    "team": "string",
    "year": 0
  }
]
```

<h3 id="historical-sp-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="historical-sp-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamSPRating](#schemateamsprating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Historical SP+ ratings by conference

<a id="opIdgetConferenceSPRatings"></a>

> Code samples

```bash
curl https://example.com/ratings/sp/conferences \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ratings/sp/conferences`

Get average SP+ historical rating data by conference

<h3 id="historical-sp-ratings-by-conference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Season filter|
|conference|query|string|false|Conference abbreviation filter|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "defense": {
      "explosiveness": 0,
      "havoc": {
        "db": 0,
        "frontSeven": 0,
        "total": 0
      },
      "pasing": 0,
      "passingDowns": 0,
      "rating": 0,
      "rushing": 0,
      "standardDowns": 0,
      "success": 0
    },
    "offense": {
      "explosiveness": 0,
      "pace": 0,
      "passing": 0,
      "passingDowns": 0,
      "rating": 0,
      "runRate": 0,
      "rushing": 0,
      "standardDowns": 0,
      "success": 0
    },
    "rating": 0,
    "secondOrderWins": 0,
    "sos": 0,
    "specialTeams": {
      "rating": 0
    },
    "year": 0
  }
]
```

<h3 id="historical-sp-ratings-by-conference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="historical-sp-ratings-by-conference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ConferenceSPRating](#schemaconferencesprating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Historical SRS ratings

<a id="opIdgetSRSRatings"></a>

> Code samples

```bash
curl https://example.com/ratings/srs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ratings/srs`

SRS rating data (requires either a year or team specified)

<h3 id="historical-srs-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Season filter (required if team not specified)|
|team|query|string|false|Team filter (required if year not specified)|
|conference|query|string|false|Conference filter|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "division": "string",
    "ranking": 0,
    "rating": 0,
    "team": "string",
    "year": 0
  }
]
```

<h3 id="historical-srs-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="historical-srs-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamSRSRating](#schemateamsrsrating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-metrics">metrics</h1>

Data relating to Predicted Points and other metrics

## Win probability chart data

<a id="opIdgetWinProbabilityData"></a>

> Code samples

```bash
curl 'https://example.com/metrics/wp?gameId=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /metrics/wp`

Win probability data

<h3 id="win-probability-chart-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gameId|query|integer|true|Game id filter|

> Example responses

> 200 Response

```json
[
  {
    "away": "string",
    "awayId": 0,
    "awayScore": 0,
    "distance": 0,
    "down": 0,
    "gamesId": 0,
    "home": "string",
    "homeBall": true,
    "homeId": 0,
    "homeScore": 0,
    "homeWinProb": 0,
    "playId": 0,
    "playNumber": 0,
    "playText": "string",
    "spread": 0,
    "timeRemaining": 0,
    "yardLine": 0
  }
]
```

<h3 id="win-probability-chart-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="win-probability-chart-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayWP](#schemaplaywp)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Pregame win probability data

<a id="opIdgetPregameWinProbabilities"></a>

> Code samples

```bash
curl https://example.com/metrics/wp/pregame \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /metrics/wp/pregame`

Pregame win probabilities

<h3 id="pregame-win-probability-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|week|query|integer|false|Week filter|
|team|query|string|false|Team filter|
|seasonType|query|string|false|regular or postseason|

> Example responses

> 200 Response

```json
[
  {
    "awayTeam": "string",
    "gameId": 0,
    "homeTeam": "string",
    "homeWinProb": 0,
    "season": 0,
    "seasonType": "string",
    "spread": 0,
    "week": 0
  }
]
```

<h3 id="pregame-win-probability-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="pregame-win-probability-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PregameWP](#schemapregamewp)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team Predicated Points Added (PPA/EPA) by game

<a id="opIdgetGamePPA"></a>

> Code samples

```bash
curl 'https://example.com/ppa/games?year=2001' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ppa/games`

Predicted Points Added (PPA) by game

<h3 id="team-predicated-points-added-ppaepa-by-game-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|true|Year filter|
|week|query|integer|false|Week filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference filter|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|
|seasonType|query|string|false|Season type filter (regular or postseason)|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "defense": {
      "firstDown": 0,
      "overall": 0,
      "passing": 0,
      "rushing": 0,
      "secondDown": 0,
      "thirdDown": 0
    },
    "gameId": 0,
    "offense": {
      "firstDown": 0,
      "overall": 0,
      "passing": 0,
      "rushing": 0,
      "secondDown": 0,
      "thirdDown": 0
    },
    "opponent": "string",
    "season": 0,
    "team": "string",
    "week": 0
  }
]
```

<h3 id="team-predicated-points-added-ppaepa-by-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-predicated-points-added-ppaepa-by-game-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GamePPA](#schemagameppa)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Player Predicated Points Added (PPA/EPA) broken down by game

<a id="opIdgetPlayerGamePPA"></a>

> Code samples

```bash
curl https://example.com/ppa/players/games \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ppa/players/games`

Predicted Points Added (PPA) by player game

<h3 id="player-predicated-points-added-ppaepa-broken-down-by-game-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|week|query|integer|false|Week filter|
|team|query|string|false|Team filter|
|position|query|string|false|Position abbreviation filter|
|playerId|query|integer|false|Player id filter|
|threshold|query|string|false|Minimum play threshold filter|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|
|seasonType|query|string|false|Season type filter (regular or postseason)|

> Example responses

> 200 Response

```json
[
  {
    "averagePPA": {
      "all": 0,
      "pass": 0,
      "rush": 0
    },
    "name": "string",
    "opponent": "string",
    "position": "string",
    "season": 0,
    "team": "string",
    "week": 0
  }
]
```

<h3 id="player-predicated-points-added-ppaepa-broken-down-by-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="player-predicated-points-added-ppaepa-broken-down-by-game-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGamePPA](#schemaplayergameppa)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Player Predicated Points Added (PPA/EPA) broken down by season

<a id="opIdgetPlayerSeasonPPA"></a>

> Code samples

```bash
curl https://example.com/ppa/players/season \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ppa/players/season`

Predicted Points Added (PPA) by player season

<h3 id="player-predicated-points-added-ppaepa-broken-down-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|team|query|string|false|Team filter|
|conference|query|string|false|Conference abbreviation filter|
|position|query|string|false|Position abbreviation filter|
|playerId|query|integer|false|Player id filter|
|threshold|query|string|false|Minimum play threshold filter|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|

> Example responses

> 200 Response

```json
[
  {
    "averagePPA": {
      "all": 0,
      "firstDown": 0,
      "pass": 0,
      "passingDowns": 0,
      "rush": 0,
      "secondDown": 0,
      "standardDowns": 0,
      "thirdDown": 0
    },
    "conference": "string",
    "id": 0,
    "name": "string",
    "position": "string",
    "season": 0,
    "team": "string",
    "totalPPA": {
      "all": 0,
      "firstDown": 0,
      "pass": 0,
      "passingDowns": 0,
      "rush": 0,
      "secondDown": 0,
      "standardDowns": 0,
      "thirdDown": 0
    }
  }
]
```

<h3 id="player-predicated-points-added-ppaepa-broken-down-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="player-predicated-points-added-ppaepa-broken-down-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeasonPPA](#schemaplayerseasonppa)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Predicted Points (i.e. Expected Points or EP)

<a id="opIdgetPredictedPoints"></a>

> Code samples

```bash
curl 'https://example.com/ppa/predicted?down=1&distance=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ppa/predicted`

Predicted Points

<h3 id="predicted-points-ie-expected-points-or-ep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|down|query|integer|true|Down filter|
|distance|query|integer|true|Distance filter|

> Example responses

> 200 Response

```json
[
  {
    "predictedPoints": 0,
    "yardLine": 0
  }
]
```

<h3 id="predicted-points-ie-expected-points-or-ep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="predicted-points-ie-expected-points-or-ep-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PredictedPoints](#schemapredictedpoints)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Predicted Points Added (PPA/EPA) data by team

<a id="opIdgetTeamPPA"></a>

> Code samples

```bash
curl https://example.com/ppa/teams \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /ppa/teams`

Predicted Points Added (PPA)

<h3 id="predicted-points-added-ppaepa-data-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter (required if team not specified)|
|team|query|string|false|Team filter (required if year not specified)|
|conference|query|string|false|Conference filter|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "defense": {
      "cumulative": {
        "passing": 0,
        "rushing": 0,
        "total": 0
      },
      "firstDown": 0,
      "overall": 0,
      "passing": 0,
      "rushing": 0,
      "secondDown": 0,
      "thirdDown": 0
    },
    "offense": {
      "cumulative": {
        "passing": 0,
        "rushing": 0,
        "total": 0
      },
      "firstDown": 0,
      "overall": 0,
      "passing": 0,
      "rushing": 0,
      "secondDown": 0,
      "thirdDown": 0
    },
    "season": 0,
    "team": "string"
  }
]
```

<h3 id="predicted-points-added-ppaepa-data-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="predicted-points-added-ppaepa-data-by-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamPPA](#schemateamppa)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-stats">stats</h1>

Statistical data

## Team stat categories

<a id="opIdgetStatCategories"></a>

> Code samples

```bash
curl https://example.com/stats/categories \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /stats/categories`

Stat category list

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="team-stat-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="team-stat-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Advanced team metrics by game

<a id="opIdgetAdvancedTeamGameStats"></a>

> Code samples

```bash
curl https://example.com/stats/game/advanced \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /stats/game/advanced`

Advanced team game stats

<h3 id="advanced-team-metrics-by-game-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter (required if no team specified)|
|week|query|integer|false|Week filter|
|team|query|string|false|Team filter (required if no year specified)|
|opponent|query|string|false|Opponent filter|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|
|seasonType|query|string|false|Season type filter (regular, postseason, or both)|

> Example responses

> 200 Response

```json
[
  {
    "defense": {
      "drives": 0,
      "explosiveness": 0,
      "lineYards": 0,
      "lineYardsTotal": 0,
      "openFieldYards": 0,
      "openFieldYardsTotal": 0,
      "passingDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0
      },
      "passingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "plays": 0,
      "powerSuccess": 0,
      "ppa": 0,
      "rushingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "secondLevelYards": 0,
      "secondLevelYardsTotal": 0,
      "standardDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0
      },
      "stuffRate": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "gameId": 0,
    "offense": {
      "drives": 0,
      "explosiveness": 0,
      "lineYards": 0,
      "lineYardsTotal": 0,
      "openFieldYards": 0,
      "openFieldYardsTotal": 0,
      "passingDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0
      },
      "passingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "plays": 0,
      "powerSuccess": 0,
      "ppa": 0,
      "rushingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "secondLevelYards": 0,
      "secondLevelYardsTotal": 0,
      "standardDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "successRate": 0
      },
      "stuffRate": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "opponent": "string",
    "season": 0,
    "team": "string",
    "week": 0
  }
]
```

<h3 id="advanced-team-metrics-by-game-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="advanced-team-metrics-by-game-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdvancedGameStat](#schemaadvancedgamestat)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Team statistics by season

<a id="opIdgetTeamSeasonStats"></a>

> Code samples

```bash
curl https://example.com/stats/season \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /stats/season`

Team season stats

<h3 id="team-statistics-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter (required if no team specified)|
|team|query|string|false|Team filter (required if no year specified)|
|conference|query|string|false|Conference abbreviation filter|
|startWeek|query|integer|false|Starting week filter|
|endWeek|query|integer|false|Starting week filter|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "season": 0,
    "statName": "string",
    "statValue": 0,
    "team": "string"
  }
]
```

<h3 id="team-statistics-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="team-statistics-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamSeasonStat](#schemateamseasonstat)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Advanced team metrics by season

<a id="opIdgetAdvancedTeamSeasonStats"></a>

> Code samples

```bash
curl https://example.com/stats/season/advanced \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /stats/season/advanced`

Advanced team season stats

<h3 id="advanced-team-metrics-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter (required if no team specified)|
|team|query|string|false|Team filter (required if no year specified)|
|excludeGarbageTime|query|boolean|false|Filter to remove garbage time plays from calculations|
|startWeek|query|integer|false|Starting week filter|
|endWeek|query|integer|false|Starting week filter|

> Example responses

> 200 Response

```json
[
  {
    "conference": "string",
    "defense": {
      "drives": 0,
      "explosiveness": 0,
      "fieldPosition": {
        "averagePredictedPoints": 0,
        "averageStart": 0
      },
      "havoc": {
        "db": 0,
        "frontSeven": 0,
        "total": 0
      },
      "lineYards": 0,
      "lineYardsTotal": 0,
      "openFieldYards": 0,
      "openFieldYardsTotal": 0,
      "passingDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0
      },
      "passingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "plays": 0,
      "pointsPerOpportunity": 0,
      "powerSuccess": 0,
      "ppa": 0,
      "rushingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "secondLevelYards": 0,
      "secondLevelYardsTotal": 0,
      "standardDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0
      },
      "stuffRate": 0,
      "successRate": 0,
      "totalOpportunies": 0,
      "totalPPA": 0
    },
    "offense": {
      "drives": 0,
      "explosiveness": 0,
      "fieldPosition": {
        "averagePredictedPoints": 0,
        "averageStart": 0
      },
      "havoc": {
        "db": 0,
        "frontSeven": 0,
        "total": 0
      },
      "lineYards": 0,
      "lineYardsTotal": 0,
      "openFieldYards": 0,
      "openFieldYardsTotal": 0,
      "passingDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0
      },
      "passingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "plays": 0,
      "pointsPerOpportunity": 0,
      "powerSuccess": 0,
      "ppa": 0,
      "rushingPlays": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0,
        "totalPPA": 0
      },
      "secondLevelYards": 0,
      "secondLevelYardsTotal": 0,
      "standardDowns": {
        "explosiveness": 0,
        "ppa": 0,
        "rate": 0,
        "successRate": 0
      },
      "stuffRate": 0,
      "successRate": 0,
      "totalOpportunies": 0,
      "totalPPA": 0
    },
    "season": 0,
    "team": "string"
  }
]
```

<h3 id="advanced-team-metrics-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="advanced-team-metrics-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdvancedSeasonStat](#schemaadvancedseasonstat)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="college-football-data-api-draft">draft</h1>

NFL Draft data

## List of NFL Draft picks

<a id="opIdgetDraftPicks"></a>

> Code samples

```bash
curl https://example.com/draft/picks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /draft/picks`

List of NFL Draft picks

<h3 id="list-of-nfl-draft-picks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|Year filter|
|nflTeam|query|string|false|NFL team filter|
|college|query|string|false|Player college filter|
|conference|query|string|false|College confrence abbreviation filter|
|position|query|string|false|NFL position filter|

> Example responses

> 200 Response

```json
[
  {
    "collegeAthleteId": 0,
    "collegeConference": "string",
    "collegeId": 0,
    "collegeTeam": "string",
    "height": 0,
    "hometownInfo": {
      "city": "string",
      "country": "string",
      "countryFips": 0,
      "latitude": 0,
      "longitude": 0,
      "state": "string"
    },
    "name": "string",
    "nflAthleteId": 0,
    "nflTeam": "string",
    "overall": 0,
    "pick": 0,
    "position": "string",
    "preDraftGrade": 0,
    "preDraftPositionRanking": 0,
    "preDraftRanking": 0,
    "round": 0,
    "weight": 0,
    "year": 0
  }
]
```

<h3 id="list-of-nfl-draft-picks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="list-of-nfl-draft-picks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DraftPick](#schemadraftpick)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List of NFL positions

<a id="opIdgetNFLPositions"></a>

> Code samples

```bash
curl https://example.com/draft/positions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /draft/positions`

List of NFL positions

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "string",
    "name": "string"
  }
]
```

<h3 id="list-of-nfl-positions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="list-of-nfl-positions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DraftPosition](#schemadraftposition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## List of NFL teams

<a id="opIdgetNFLTeams"></a>

> Code samples

```bash
curl https://example.com/draft/teams \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /draft/teams`

List of NFL teams

> Example responses

> 200 Response

```json
[
  {
    "displayName": "string",
    "location": "string",
    "logo": "string",
    "nickname": "string"
  }
]
```

<h3 id="list-of-nfl-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|error|None|

<h3 id="list-of-nfl-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DraftTeam](#schemadraftteam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_AdvancedGameStat">AdvancedGameStat</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedgamestat"></a>
<a id="schema_AdvancedGameStat"></a>
<a id="tocSadvancedgamestat"></a>
<a id="tocsadvancedgamestat"></a>

```json
{
  "defense": {
    "drives": 0,
    "explosiveness": 0,
    "lineYards": 0,
    "lineYardsTotal": 0,
    "openFieldYards": 0,
    "openFieldYardsTotal": 0,
    "passingDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0
    },
    "passingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "plays": 0,
    "powerSuccess": 0,
    "ppa": 0,
    "rushingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "secondLevelYards": 0,
    "secondLevelYardsTotal": 0,
    "standardDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0
    },
    "stuffRate": 0,
    "successRate": 0,
    "totalPPA": 0
  },
  "gameId": 0,
  "offense": {
    "drives": 0,
    "explosiveness": 0,
    "lineYards": 0,
    "lineYardsTotal": 0,
    "openFieldYards": 0,
    "openFieldYardsTotal": 0,
    "passingDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0
    },
    "passingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "plays": 0,
    "powerSuccess": 0,
    "ppa": 0,
    "rushingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "secondLevelYards": 0,
    "secondLevelYardsTotal": 0,
    "standardDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "successRate": 0
    },
    "stuffRate": 0,
    "successRate": 0,
    "totalPPA": 0
  },
  "opponent": "string",
  "season": 0,
  "team": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defense|object|false|none|none|
|gameId|integer|false|none|none|
|offense|object|false|none|none|
|opponent|string|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_AdvancedSeasonStat">AdvancedSeasonStat</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedseasonstat"></a>
<a id="schema_AdvancedSeasonStat"></a>
<a id="tocSadvancedseasonstat"></a>
<a id="tocsadvancedseasonstat"></a>

```json
{
  "conference": "string",
  "defense": {
    "drives": 0,
    "explosiveness": 0,
    "fieldPosition": {
      "averagePredictedPoints": 0,
      "averageStart": 0
    },
    "havoc": {
      "db": 0,
      "frontSeven": 0,
      "total": 0
    },
    "lineYards": 0,
    "lineYardsTotal": 0,
    "openFieldYards": 0,
    "openFieldYardsTotal": 0,
    "passingDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0
    },
    "passingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "plays": 0,
    "pointsPerOpportunity": 0,
    "powerSuccess": 0,
    "ppa": 0,
    "rushingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "secondLevelYards": 0,
    "secondLevelYardsTotal": 0,
    "standardDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0
    },
    "stuffRate": 0,
    "successRate": 0,
    "totalOpportunies": 0,
    "totalPPA": 0
  },
  "offense": {
    "drives": 0,
    "explosiveness": 0,
    "fieldPosition": {
      "averagePredictedPoints": 0,
      "averageStart": 0
    },
    "havoc": {
      "db": 0,
      "frontSeven": 0,
      "total": 0
    },
    "lineYards": 0,
    "lineYardsTotal": 0,
    "openFieldYards": 0,
    "openFieldYardsTotal": 0,
    "passingDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0
    },
    "passingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "plays": 0,
    "pointsPerOpportunity": 0,
    "powerSuccess": 0,
    "ppa": 0,
    "rushingPlays": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0,
      "totalPPA": 0
    },
    "secondLevelYards": 0,
    "secondLevelYardsTotal": 0,
    "standardDowns": {
      "explosiveness": 0,
      "ppa": 0,
      "rate": 0,
      "successRate": 0
    },
    "stuffRate": 0,
    "successRate": 0,
    "totalOpportunies": 0,
    "totalPPA": 0
  },
  "season": 0,
  "team": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|defense|object|false|none|none|
|offense|object|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|

<h2 id="tocS_BoxScore">BoxScore</h2>
<!-- backwards compatibility -->
<a id="schemaboxscore"></a>
<a id="schema_BoxScore"></a>
<a id="tocSboxscore"></a>
<a id="tocsboxscore"></a>

```json
{
  "players": {
    "ppa": [
      {
        "average": {
          "passing": 0,
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "rushing": 0,
          "total": 0
        },
        "cumulative": {
          "passing": 0,
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "rushing": 0,
          "total": 0
        },
        "player": "string",
        "position": "string",
        "team": "string"
      }
    ],
    "usage": [
      {
        "passing": 0,
        "player": "string",
        "position": "string",
        "quarter1": 0,
        "quarter2": 0,
        "quarter3": 0,
        "quarter4": 0,
        "rushing": 0,
        "team": "string",
        "total": 0
      }
    ]
  },
  "teams": {
    "cumulativePpa": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "passing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "plays": 0,
        "rushing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ],
    "explosiveness": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ],
    "fieldPosition": [
      {
        "averageStart": 0,
        "averageStartingPredictedPoints": 0,
        "team": "string"
      }
    ],
    "havoc": [
      {
        "db": 0,
        "frontSeven": 0,
        "team": "string",
        "total": 0
      }
    ],
    "ppa": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "passing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "plays": 0,
        "rushing": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ],
    "rushing": [
      {
        "lineYards": 0,
        "lineYardsAverage": 0,
        "openFieldYards": 0,
        "openFieldYardsAverage": 0,
        "powerSuccess": 0,
        "secondLevelYards": 0,
        "secondLevelYardsAverage": 0,
        "stuffRate": 0,
        "team": "string"
      }
    ],
    "scoringOpportunities": [
      {
        "opportunities": 0,
        "points": 0,
        "pointsPerOpportunity": 0,
        "team": "string"
      }
    ],
    "successRates": [
      {
        "overall": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "passingDowns": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "standardDowns": {
          "quarter1": 0,
          "quarter2": 0,
          "quarter3": 0,
          "quarter4": 0,
          "total": 0
        },
        "team": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|players|object|false|none|none|
|teams|object|false|none|none|

<h2 id="tocS_Coach">Coach</h2>
<!-- backwards compatibility -->
<a id="schemacoach"></a>
<a id="schema_Coach"></a>
<a id="tocScoach"></a>
<a id="tocscoach"></a>

```json
{
  "first_name": "string",
  "hire_date": "string",
  "last_name": "string",
  "seasons": [
    {
      "games": 0,
      "losses": 0,
      "postseason_rank": 0,
      "preseason_rank": 0,
      "school": "string",
      "sp_defense": 0,
      "sp_offense": 0,
      "sp_overall": 0,
      "srs": 0,
      "ties": 0,
      "wins": 0,
      "year": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|none|
|hire_date|string|false|none|none|
|last_name|string|false|none|none|
|seasons|[object]|false|none|none|

<h2 id="tocS_Conference">Conference</h2>
<!-- backwards compatibility -->
<a id="schemaconference"></a>
<a id="schema_Conference"></a>
<a id="tocSconference"></a>
<a id="tocsconference"></a>

```json
{
  "abbreviation": "string",
  "classification": "string",
  "id": 0,
  "name": "string",
  "short_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|none|
|classification|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|short_name|string|false|none|none|

<h2 id="tocS_ConferenceSPRating">ConferenceSPRating</h2>
<!-- backwards compatibility -->
<a id="schemaconferencesprating"></a>
<a id="schema_ConferenceSPRating"></a>
<a id="tocSconferencesprating"></a>
<a id="tocsconferencesprating"></a>

```json
{
  "conference": "string",
  "defense": {
    "explosiveness": 0,
    "havoc": {
      "db": 0,
      "frontSeven": 0,
      "total": 0
    },
    "pasing": 0,
    "passingDowns": 0,
    "rating": 0,
    "rushing": 0,
    "standardDowns": 0,
    "success": 0
  },
  "offense": {
    "explosiveness": 0,
    "pace": 0,
    "passing": 0,
    "passingDowns": 0,
    "rating": 0,
    "runRate": 0,
    "rushing": 0,
    "standardDowns": 0,
    "success": 0
  },
  "rating": 0,
  "secondOrderWins": 0,
  "sos": 0,
  "specialTeams": {
    "rating": 0
  },
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|defense|object|false|none|none|
|offense|object|false|none|none|
|rating|number|false|none|none|
|secondOrderWins|number|false|none|none|
|sos|number|false|none|none|
|specialTeams|object|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_DraftPick">DraftPick</h2>
<!-- backwards compatibility -->
<a id="schemadraftpick"></a>
<a id="schema_DraftPick"></a>
<a id="tocSdraftpick"></a>
<a id="tocsdraftpick"></a>

```json
{
  "collegeAthleteId": 0,
  "collegeConference": "string",
  "collegeId": 0,
  "collegeTeam": "string",
  "height": 0,
  "hometownInfo": {
    "city": "string",
    "country": "string",
    "countryFips": 0,
    "latitude": 0,
    "longitude": 0,
    "state": "string"
  },
  "name": "string",
  "nflAthleteId": 0,
  "nflTeam": "string",
  "overall": 0,
  "pick": 0,
  "position": "string",
  "preDraftGrade": 0,
  "preDraftPositionRanking": 0,
  "preDraftRanking": 0,
  "round": 0,
  "weight": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collegeAthleteId|integer|false|none|none|
|collegeConference|string|false|none|none|
|collegeId|integer|false|none|none|
|collegeTeam|string|false|none|none|
|height|integer|false|none|none|
|hometownInfo|object|false|none|none|
|name|string|false|none|none|
|nflAthleteId|integer|false|none|none|
|nflTeam|string|false|none|none|
|overall|integer|false|none|none|
|pick|integer|false|none|none|
|position|string|false|none|none|
|preDraftGrade|integer|false|none|none|
|preDraftPositionRanking|integer|false|none|none|
|preDraftRanking|integer|false|none|none|
|round|integer|false|none|none|
|weight|integer|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_DraftPosition">DraftPosition</h2>
<!-- backwards compatibility -->
<a id="schemadraftposition"></a>
<a id="schema_DraftPosition"></a>
<a id="tocSdraftposition"></a>
<a id="tocsdraftposition"></a>

```json
{
  "abbreviation": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_DraftTeam">DraftTeam</h2>
<!-- backwards compatibility -->
<a id="schemadraftteam"></a>
<a id="schema_DraftTeam"></a>
<a id="tocSdraftteam"></a>
<a id="tocsdraftteam"></a>

```json
{
  "displayName": "string",
  "location": "string",
  "logo": "string",
  "nickname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|
|location|string|false|none|none|
|logo|string|false|none|none|
|nickname|string|false|none|none|

<h2 id="tocS_Drive">Drive</h2>
<!-- backwards compatibility -->
<a id="schemadrive"></a>
<a id="schema_Drive"></a>
<a id="tocSdrive"></a>
<a id="tocsdrive"></a>

```json
{
  "defense": "string",
  "defense_conference": "string",
  "drive_number": 0,
  "drive_result": "string",
  "end_defense_score": 0,
  "end_offense_score": 0,
  "end_period": 0,
  "end_time": {
    "minutes": 0,
    "seconds": 0
  },
  "end_yardline": 0,
  "end_yards_to_goal": 0,
  "game_id": 0,
  "id": 0,
  "is_home_offense": true,
  "offense": "string",
  "offense_conference": "string",
  "plays": 0,
  "scoring": true,
  "start_defense_score": 0,
  "start_offense_score": 0,
  "start_period": 0,
  "start_time": {
    "minutes": 0,
    "seconds": 0
  },
  "start_yardline": 0,
  "start_yards_to_goal": 0,
  "yards": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defense|string|false|none|none|
|defense_conference|string|false|none|none|
|drive_number|integer|false|none|none|
|drive_result|string|false|none|none|
|end_defense_score|integer|false|none|none|
|end_offense_score|integer|false|none|none|
|end_period|integer|false|none|none|
|end_time|object|false|none|none|
|end_yardline|integer|false|none|none|
|end_yards_to_goal|integer|false|none|none|
|game_id|integer|false|none|none|
|id|integer|false|none|none|
|is_home_offense|boolean|false|none|none|
|offense|string|false|none|none|
|offense_conference|string|false|none|none|
|plays|integer|false|none|none|
|scoring|boolean|false|none|none|
|start_defense_score|integer|false|none|none|
|start_offense_score|integer|false|none|none|
|start_period|integer|false|none|none|
|start_time|object|false|none|none|
|start_yardline|integer|false|none|none|
|start_yards_to_goal|integer|false|none|none|
|yards|integer|false|none|none|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "attendance": 0,
  "away_conference": "string",
  "away_division": "string",
  "away_id": 0,
  "away_line_scores": [
    0
  ],
  "away_points": 0,
  "away_post_win_prob": 0,
  "away_postgame_elo": 0,
  "away_pregame_elo": 0,
  "away_team": "string",
  "completed": true,
  "conference_game": true,
  "excitement_index": 0,
  "highlights": "string",
  "home_conference": "string",
  "home_division": "string",
  "home_id": 0,
  "home_line_scores": [
    0
  ],
  "home_points": 0,
  "home_post_win_prob": 0,
  "home_postgame_elo": 0,
  "home_pregame_elo": 0,
  "home_team": "string",
  "id": 0,
  "neutral_site": true,
  "notes": "string",
  "season": 0,
  "season_type": "string",
  "start_date": "string",
  "start_time_tbd": true,
  "venue": "string",
  "venue_id": 0,
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attendance|integer|false|none|none|
|away_conference|string|false|none|none|
|away_division|string|false|none|none|
|away_id|integer|false|none|none|
|away_line_scores|[integer]|false|none|none|
|away_points|integer|false|none|none|
|away_post_win_prob|number|false|none|none|
|away_postgame_elo|integer|false|none|none|
|away_pregame_elo|integer|false|none|none|
|away_team|string|false|none|none|
|completed|boolean|false|none|none|
|conference_game|boolean|false|none|none|
|excitement_index|number|false|none|none|
|highlights|string|false|none|none|
|home_conference|string|false|none|none|
|home_division|string|false|none|none|
|home_id|integer|false|none|none|
|home_line_scores|[integer]|false|none|none|
|home_points|integer|false|none|none|
|home_post_win_prob|number|false|none|none|
|home_postgame_elo|integer|false|none|none|
|home_pregame_elo|integer|false|none|none|
|home_team|string|false|none|none|
|id|integer|false|none|none|
|neutral_site|boolean|false|none|none|
|notes|string|false|none|none|
|season|integer|false|none|none|
|season_type|string|false|none|none|
|start_date|string|false|none|none|
|start_time_tbd|boolean|false|none|none|
|venue|string|false|none|none|
|venue_id|integer|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_GameLines">GameLines</h2>
<!-- backwards compatibility -->
<a id="schemagamelines"></a>
<a id="schema_GameLines"></a>
<a id="tocSgamelines"></a>
<a id="tocsgamelines"></a>

```json
{
  "awayConference": "string",
  "awayScore": 0,
  "awayTeam": "string",
  "homeConference": "string",
  "homeScore": 0,
  "homeTeam": "string",
  "id": 0,
  "lines": [
    {
      "awayMoneyline": 0,
      "formattedSpread": "string",
      "homeMoneyline": 0,
      "overUnder": 0,
      "overUnderOpen": 0,
      "provider": "string",
      "spread": 0,
      "spreadOpen": 0
    }
  ],
  "season": 0,
  "seasonType": "string",
  "startDate": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awayConference|string|false|none|none|
|awayScore|integer|false|none|none|
|awayTeam|string|false|none|none|
|homeConference|string|false|none|none|
|homeScore|integer|false|none|none|
|homeTeam|string|false|none|none|
|id|integer|false|none|none|
|lines|[object]|false|none|none|
|season|integer|false|none|none|
|seasonType|string|false|none|none|
|startDate|string|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_GameMedia">GameMedia</h2>
<!-- backwards compatibility -->
<a id="schemagamemedia"></a>
<a id="schema_GameMedia"></a>
<a id="tocSgamemedia"></a>
<a id="tocsgamemedia"></a>

```json
{
  "awayConference": "string",
  "awayTeam": "string",
  "homeConference": "string",
  "homeTeam": "string",
  "id": 0,
  "isStartTimeTBD": true,
  "mediaType": "string",
  "outlet": "string",
  "season": 0,
  "seasonType": "string",
  "startTime": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awayConference|string|false|none|none|
|awayTeam|string|false|none|none|
|homeConference|string|false|none|none|
|homeTeam|string|false|none|none|
|id|integer|false|none|none|
|isStartTimeTBD|boolean|false|none|none|
|mediaType|string|false|none|none|
|outlet|string|false|none|none|
|season|integer|false|none|none|
|seasonType|string|false|none|none|
|startTime|string|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_GamePPA">GamePPA</h2>
<!-- backwards compatibility -->
<a id="schemagameppa"></a>
<a id="schema_GamePPA"></a>
<a id="tocSgameppa"></a>
<a id="tocsgameppa"></a>

```json
{
  "conference": "string",
  "defense": {
    "firstDown": 0,
    "overall": 0,
    "passing": 0,
    "rushing": 0,
    "secondDown": 0,
    "thirdDown": 0
  },
  "gameId": 0,
  "offense": {
    "firstDown": 0,
    "overall": 0,
    "passing": 0,
    "rushing": 0,
    "secondDown": 0,
    "thirdDown": 0
  },
  "opponent": "string",
  "season": 0,
  "team": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|defense|object|false|none|none|
|gameId|integer|false|none|none|
|offense|object|false|none|none|
|opponent|string|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_GameWeather">GameWeather</h2>
<!-- backwards compatibility -->
<a id="schemagameweather"></a>
<a id="schema_GameWeather"></a>
<a id="tocSgameweather"></a>
<a id="tocsgameweather"></a>

```json
{
  "awayConference": "string",
  "awayTeam": "string",
  "dewPoint": 0,
  "gameIndoors": true,
  "homeConference": "string",
  "homeTeam": "string",
  "humidity": 0,
  "id": 0,
  "precipitation": 0,
  "pressure": 0,
  "season": 0,
  "seasonType": "string",
  "snowfall": 0,
  "startTime": "string",
  "temperature": 0,
  "venue": "string",
  "venueId": 0,
  "weatherCondition": "string",
  "weatherConditionCode": 0,
  "week": 0,
  "windDirection": 0,
  "windSpeed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awayConference|string|false|none|none|
|awayTeam|string|false|none|none|
|dewPoint|number|false|none|none|
|gameIndoors|boolean|false|none|none|
|homeConference|string|false|none|none|
|homeTeam|string|false|none|none|
|humidity|number|false|none|none|
|id|integer|false|none|none|
|precipitation|number|false|none|none|
|pressure|number|false|none|none|
|season|integer|false|none|none|
|seasonType|string|false|none|none|
|snowfall|number|false|none|none|
|startTime|string|false|none|none|
|temperature|number|false|none|none|
|venue|string|false|none|none|
|venueId|integer|false|none|none|
|weatherCondition|string|false|none|none|
|weatherConditionCode|integer|false|none|none|
|week|integer|false|none|none|
|windDirection|number|false|none|none|
|windSpeed|number|false|none|none|

<h2 id="tocS_LivePlayByPlay">LivePlayByPlay</h2>
<!-- backwards compatibility -->
<a id="schemaliveplaybyplay"></a>
<a id="schema_LivePlayByPlay"></a>
<a id="tocSliveplaybyplay"></a>
<a id="tocsliveplaybyplay"></a>

```json
{
  "clock": "string",
  "distance": 0,
  "down": 0,
  "drives": [
    {
      "defense": "string",
      "defenseId": 0,
      "duration": "string",
      "endClock": "string",
      "endPeriod": 0,
      "endYardsToGoal": 0,
      "id": 0,
      "offense": "string",
      "offenseId": 0,
      "playCount": 0,
      "plays": [
        {
          "awayScore": 0,
          "clock": "string",
          "distance": 0,
          "down": 0,
          "downType": "string",
          "epa": 0,
          "garbageTime": true,
          "homeScore": 0,
          "id": 0,
          "period": 0,
          "playText": "string",
          "playType": "string",
          "playTypeId": 0,
          "rushPass": "string",
          "success": true,
          "team": "string",
          "teamId": 0,
          "wallclock": "string",
          "yardsGained": 0,
          "yardsToGoal": 0
        }
      ],
      "scoringOpportunity": true,
      "startClock": "string",
      "startPeriod": 0,
      "startYardsToGoal": 0,
      "yards": 0
    }
  ],
  "id": 0,
  "period": 0,
  "possession": "string",
  "status": "string",
  "teams": [
    {
      "drives": 0,
      "epaPerPass": 0,
      "epaPerPlay": 0,
      "epaPerRush": 0,
      "explosiveness": 0,
      "homeAway": "string",
      "lineYards": 0,
      "lineYardsPerRush": 0,
      "openFieldYards": 0,
      "openFieldYardsPerRush": 0,
      "passingDownSuccessRate": 0,
      "passingEpa": 0,
      "plays": 0,
      "points": 0,
      "pointsPerOpportunity": 0,
      "rushingEpa": 0,
      "scoringOpportunities": 0,
      "secondLevelYards": 0,
      "secondLevelYardsPerRush": 0,
      "standardDownSuccessRate": 0,
      "successRate": 0,
      "team": "string",
      "teamId": 0,
      "totalEpa": 0
    }
  ],
  "yardsToGoal": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clock|string|false|none|none|
|distance|integer|false|none|none|
|down|integer|false|none|none|
|drives|[object]|false|none|none|
|id|integer|false|none|none|
|period|integer|false|none|none|
|possession|string|false|none|none|
|status|string|false|none|none|
|teams|[object]|false|none|none|
|yardsToGoal|integer|false|none|none|

<h2 id="tocS_Play">Play</h2>
<!-- backwards compatibility -->
<a id="schemaplay"></a>
<a id="schema_Play"></a>
<a id="tocSplay"></a>
<a id="tocsplay"></a>

```json
{
  "away": "string",
  "clock": {
    "minutes": 0,
    "seconds": 0
  },
  "defense": "string",
  "defense_conference": "string",
  "defense_score": 0,
  "defense_timeouts": 0,
  "distance": 0,
  "down": 0,
  "drive_id": 0,
  "drive_number": 0,
  "game_id": 0,
  "home": "string",
  "id": 0,
  "offense": "string",
  "offense_conference": "string",
  "offense_score": 0,
  "offense_timeouts": 0,
  "period": 0,
  "play_number": 0,
  "play_text": "string",
  "play_type": "string",
  "ppa": 0,
  "scoring": true,
  "wallclock": "string",
  "yard_line": 0,
  "yards_gained": 0,
  "yards_to_goal": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|away|string|false|none|none|
|clock|object|false|none|none|
|defense|string|false|none|none|
|defense_conference|string|false|none|none|
|defense_score|integer|false|none|none|
|defense_timeouts|integer|false|none|none|
|distance|integer|false|none|none|
|down|integer|false|none|none|
|drive_id|integer|false|none|none|
|drive_number|integer|false|none|none|
|game_id|integer|false|none|none|
|home|string|false|none|none|
|id|integer|false|none|none|
|offense|string|false|none|none|
|offense_conference|string|false|none|none|
|offense_score|integer|false|none|none|
|offense_timeouts|integer|false|none|none|
|period|integer|false|none|none|
|play_number|integer|false|none|none|
|play_text|string|false|none|none|
|play_type|string|false|none|none|
|ppa|number|false|none|none|
|scoring|boolean|false|none|none|
|wallclock|string|false|none|none|
|yard_line|integer|false|none|none|
|yards_gained|integer|false|none|none|
|yards_to_goal|integer|false|none|none|

<h2 id="tocS_PlayStat">PlayStat</h2>
<!-- backwards compatibility -->
<a id="schemaplaystat"></a>
<a id="schema_PlayStat"></a>
<a id="tocSplaystat"></a>
<a id="tocsplaystat"></a>

```json
{
  "athleteId": 0,
  "athleteName": "string",
  "clock": {
    "minutes": 0,
    "seconds": 0
  },
  "conference": "string",
  "distance": 0,
  "down": 0,
  "driveId": 0,
  "gameId": 0,
  "opponent": "string",
  "opponentScore": 0,
  "period": 0,
  "playId": 0,
  "season": 0,
  "stat": 0,
  "statType": "string",
  "team": "string",
  "teamScore": 0,
  "week": 0,
  "yardsToGoal": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|athleteId|integer|false|none|none|
|athleteName|string|false|none|none|
|clock|object|false|none|none|
|conference|string|false|none|none|
|distance|integer|false|none|none|
|down|integer|false|none|none|
|driveId|integer|false|none|none|
|gameId|integer|false|none|none|
|opponent|string|false|none|none|
|opponentScore|integer|false|none|none|
|period|integer|false|none|none|
|playId|integer|false|none|none|
|season|integer|false|none|none|
|stat|integer|false|none|none|
|statType|string|false|none|none|
|team|string|false|none|none|
|teamScore|integer|false|none|none|
|week|integer|false|none|none|
|yardsToGoal|integer|false|none|none|

<h2 id="tocS_PlayStatType">PlayStatType</h2>
<!-- backwards compatibility -->
<a id="schemaplaystattype"></a>
<a id="schema_PlayStatType"></a>
<a id="tocSplaystattype"></a>
<a id="tocsplaystattype"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PlayType">PlayType</h2>
<!-- backwards compatibility -->
<a id="schemaplaytype"></a>
<a id="schema_PlayType"></a>
<a id="tocSplaytype"></a>
<a id="tocsplaytype"></a>

```json
{
  "abbreviation": "string",
  "id": 0,
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|none|
|id|integer|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_PlayWP">PlayWP</h2>
<!-- backwards compatibility -->
<a id="schemaplaywp"></a>
<a id="schema_PlayWP"></a>
<a id="tocSplaywp"></a>
<a id="tocsplaywp"></a>

```json
{
  "away": "string",
  "awayId": 0,
  "awayScore": 0,
  "distance": 0,
  "down": 0,
  "gamesId": 0,
  "home": "string",
  "homeBall": true,
  "homeId": 0,
  "homeScore": 0,
  "homeWinProb": 0,
  "playId": 0,
  "playNumber": 0,
  "playText": "string",
  "spread": 0,
  "timeRemaining": 0,
  "yardLine": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|away|string|false|none|none|
|awayId|integer|false|none|none|
|awayScore|integer|false|none|none|
|distance|integer|false|none|none|
|down|integer|false|none|none|
|gamesId|integer|false|none|none|
|home|string|false|none|none|
|homeBall|boolean|false|none|none|
|homeId|integer|false|none|none|
|homeScore|integer|false|none|none|
|homeWinProb|number|false|none|none|
|playId|integer|false|none|none|
|playNumber|integer|false|none|none|
|playText|string|false|none|none|
|spread|number|false|none|none|
|timeRemaining|integer|false|none|none|
|yardLine|integer|false|none|none|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "first_name": "string",
  "height": 0,
  "home_city": "string",
  "home_country": "string",
  "home_county_fips": "string",
  "home_latitude": 0,
  "home_longitude": 0,
  "home_state": "string",
  "id": 0,
  "jersey": 0,
  "last_name": "string",
  "position": "string",
  "recruit_ids": [
    0
  ],
  "team": "string",
  "weight": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|false|none|none|
|height|integer|false|none|none|
|home_city|string|false|none|none|
|home_country|string|false|none|none|
|home_county_fips|string|false|none|none|
|home_latitude|number|false|none|none|
|home_longitude|number|false|none|none|
|home_state|string|false|none|none|
|id|integer|false|none|none|
|jersey|integer|false|none|none|
|last_name|string|false|none|none|
|position|string|false|none|none|
|recruit_ids|[integer]|false|none|none|
|team|string|false|none|none|
|weight|integer|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_PlayerGame">PlayerGame</h2>
<!-- backwards compatibility -->
<a id="schemaplayergame"></a>
<a id="schema_PlayerGame"></a>
<a id="tocSplayergame"></a>
<a id="tocsplayergame"></a>

```json
{
  "id": 0,
  "teams": [
    {
      "categories": [
        {
          "name": "string",
          "types": [
            {
              "athletes": [
                {
                  "id": 0,
                  "name": "string",
                  "stat": "string"
                }
              ],
              "name": "string"
            }
          ]
        }
      ],
      "homeAway": true,
      "points": 0,
      "school": {
        "conference": "string",
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|teams|[object]|false|none|none|

<h2 id="tocS_PlayerGamePPA">PlayerGamePPA</h2>
<!-- backwards compatibility -->
<a id="schemaplayergameppa"></a>
<a id="schema_PlayerGamePPA"></a>
<a id="tocSplayergameppa"></a>
<a id="tocsplayergameppa"></a>

```json
{
  "averagePPA": {
    "all": 0,
    "pass": 0,
    "rush": 0
  },
  "name": "string",
  "opponent": "string",
  "position": "string",
  "season": 0,
  "team": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averagePPA|object|false|none|none|
|name|string|false|none|none|
|opponent|string|false|none|none|
|position|string|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_PlayerSearchResult">PlayerSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaplayersearchresult"></a>
<a id="schema_PlayerSearchResult"></a>
<a id="tocSplayersearchresult"></a>
<a id="tocsplayersearchresult"></a>

```json
{
  "firstName": "string",
  "height": 0,
  "hometown": "string",
  "id": 0,
  "jersey": 0,
  "lastName": "string",
  "name": "string",
  "position": "string",
  "team": "string",
  "teamColor": "string",
  "teamColorSecondary": "string",
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|none|
|height|integer|false|none|none|
|hometown|string|false|none|none|
|id|integer|false|none|none|
|jersey|integer|false|none|none|
|lastName|string|false|none|none|
|name|string|false|none|none|
|position|string|false|none|none|
|team|string|false|none|none|
|teamColor|string|false|none|none|
|teamColorSecondary|string|false|none|none|
|weight|integer|false|none|none|

<h2 id="tocS_PlayerSeasonPPA">PlayerSeasonPPA</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseasonppa"></a>
<a id="schema_PlayerSeasonPPA"></a>
<a id="tocSplayerseasonppa"></a>
<a id="tocsplayerseasonppa"></a>

```json
{
  "averagePPA": {
    "all": 0,
    "firstDown": 0,
    "pass": 0,
    "passingDowns": 0,
    "rush": 0,
    "secondDown": 0,
    "standardDowns": 0,
    "thirdDown": 0
  },
  "conference": "string",
  "id": 0,
  "name": "string",
  "position": "string",
  "season": 0,
  "team": "string",
  "totalPPA": {
    "all": 0,
    "firstDown": 0,
    "pass": 0,
    "passingDowns": 0,
    "rush": 0,
    "secondDown": 0,
    "standardDowns": 0,
    "thirdDown": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averagePPA|object|false|none|none|
|conference|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|position|string|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|
|totalPPA|object|false|none|none|

<h2 id="tocS_PlayerSeasonStat">PlayerSeasonStat</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseasonstat"></a>
<a id="schema_PlayerSeasonStat"></a>
<a id="tocSplayerseasonstat"></a>
<a id="tocsplayerseasonstat"></a>

```json
{
  "category": "string",
  "conference": "string",
  "player": "string",
  "playerId": 0,
  "season": 0,
  "stat": 0,
  "statType": "string",
  "team": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|conference|string|false|none|none|
|player|string|false|none|none|
|playerId|integer|false|none|none|
|season|integer|false|none|none|
|stat|number|false|none|none|
|statType|string|false|none|none|
|team|string|false|none|none|

<h2 id="tocS_PlayerUsage">PlayerUsage</h2>
<!-- backwards compatibility -->
<a id="schemaplayerusage"></a>
<a id="schema_PlayerUsage"></a>
<a id="tocSplayerusage"></a>
<a id="tocsplayerusage"></a>

```json
{
  "conference": "string",
  "id": 0,
  "name": "string",
  "position": "string",
  "season": 0,
  "team": "string",
  "usage": {
    "firstDown": 0,
    "overall": 0,
    "pass": 0,
    "passingDowns": 0,
    "rush": 0,
    "secondDown": 0,
    "standardDowns": 0,
    "thirdDown": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|position|string|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|
|usage|object|false|none|none|

<h2 id="tocS_PortalPlayer">PortalPlayer</h2>
<!-- backwards compatibility -->
<a id="schemaportalplayer"></a>
<a id="schema_PortalPlayer"></a>
<a id="tocSportalplayer"></a>
<a id="tocsportalplayer"></a>

```json
{
  "destination": "string",
  "eligibility": "string",
  "firstName": "string",
  "lastName": "string",
  "origin": "string",
  "position": "string",
  "rating": 0,
  "season": 0,
  "stars": 0,
  "transferDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|none|
|eligibility|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|origin|string|false|none|none|
|position|string|false|none|none|
|rating|number|false|none|none|
|season|integer|false|none|none|
|stars|integer|false|none|none|
|transferDate|string|false|none|none|

<h2 id="tocS_PositionGroupRecruitingRating">PositionGroupRecruitingRating</h2>
<!-- backwards compatibility -->
<a id="schemapositiongrouprecruitingrating"></a>
<a id="schema_PositionGroupRecruitingRating"></a>
<a id="tocSpositiongrouprecruitingrating"></a>
<a id="tocspositiongrouprecruitingrating"></a>

```json
{
  "averageRating": 0,
  "averageStars": 0,
  "commits": 0,
  "conference": "string",
  "positionGroup": "string",
  "team": "string",
  "totalRating": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageRating|number|false|none|none|
|averageStars|number|false|none|none|
|commits|number|false|none|none|
|conference|string|false|none|none|
|positionGroup|string|false|none|none|
|team|string|false|none|none|
|totalRating|number|false|none|none|

<h2 id="tocS_PredictedPoints">PredictedPoints</h2>
<!-- backwards compatibility -->
<a id="schemapredictedpoints"></a>
<a id="schema_PredictedPoints"></a>
<a id="tocSpredictedpoints"></a>
<a id="tocspredictedpoints"></a>

```json
{
  "predictedPoints": 0,
  "yardLine": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predictedPoints|number|false|none|none|
|yardLine|integer|false|none|none|

<h2 id="tocS_PregameWP">PregameWP</h2>
<!-- backwards compatibility -->
<a id="schemapregamewp"></a>
<a id="schema_PregameWP"></a>
<a id="tocSpregamewp"></a>
<a id="tocspregamewp"></a>

```json
{
  "awayTeam": "string",
  "gameId": 0,
  "homeTeam": "string",
  "homeWinProb": 0,
  "season": 0,
  "seasonType": "string",
  "spread": 0,
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awayTeam|string|false|none|none|
|gameId|integer|false|none|none|
|homeTeam|string|false|none|none|
|homeWinProb|number|false|none|none|
|season|integer|false|none|none|
|seasonType|string|false|none|none|
|spread|number|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_RankingWeek">RankingWeek</h2>
<!-- backwards compatibility -->
<a id="schemarankingweek"></a>
<a id="schema_RankingWeek"></a>
<a id="tocSrankingweek"></a>
<a id="tocsrankingweek"></a>

```json
{
  "polls": [
    {
      "poll": "string",
      "ranks": [
        {
          "conference": "string",
          "firstPlaceVotes": 0,
          "points": 0,
          "rank": 0,
          "school": "string"
        }
      ]
    }
  ],
  "season": 0,
  "seasonType": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|polls|[object]|false|none|none|
|season|integer|false|none|none|
|seasonType|string|false|none|none|
|week|integer|false|none|none|

<h2 id="tocS_Recruit">Recruit</h2>
<!-- backwards compatibility -->
<a id="schemarecruit"></a>
<a id="schema_Recruit"></a>
<a id="tocSrecruit"></a>
<a id="tocsrecruit"></a>

```json
{
  "athleteId": 0,
  "city": "string",
  "committedTo": "string",
  "country": "string",
  "height": 0,
  "hometownInfo": {
    "countyFips": "string",
    "latitude": 0,
    "longitude": 0
  },
  "id": 0,
  "name": "string",
  "position": "string",
  "ranking": 0,
  "rating": 0,
  "recruitType": "string",
  "school": "string",
  "stars": 0,
  "stateProvince": "string",
  "weight": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|athleteId|integer|false|none|none|
|city|string|false|none|none|
|committedTo|string|false|none|none|
|country|string|false|none|none|
|height|number|false|none|none|
|hometownInfo|object|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|position|string|false|none|none|
|ranking|integer|false|none|none|
|rating|number|false|none|none|
|recruitType|string|false|none|none|
|school|string|false|none|none|
|stars|integer|false|none|none|
|stateProvince|string|false|none|none|
|weight|integer|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_ReturningProduction">ReturningProduction</h2>
<!-- backwards compatibility -->
<a id="schemareturningproduction"></a>
<a id="schema_ReturningProduction"></a>
<a id="tocSreturningproduction"></a>
<a id="tocsreturningproduction"></a>

```json
{
  "conference": "string",
  "passingUsage": 0,
  "percentPPA": 0,
  "percentPassingPPA": 0,
  "percentReceivingPPA": 0,
  "percentRushingPPA": 0,
  "receivingUsage": 0,
  "rushingUsage": 0,
  "season": 0,
  "team": "string",
  "totalPPA": 0,
  "totalPassingPPA": 0,
  "totalReceivingPPA": 0,
  "totalRushingPPA": 0,
  "usage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|passingUsage|number|false|none|none|
|percentPPA|number|false|none|none|
|percentPassingPPA|number|false|none|none|
|percentReceivingPPA|number|false|none|none|
|percentRushingPPA|number|false|none|none|
|receivingUsage|number|false|none|none|
|rushingUsage|number|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|
|totalPPA|number|false|none|none|
|totalPassingPPA|number|false|none|none|
|totalReceivingPPA|number|false|none|none|
|totalRushingPPA|number|false|none|none|
|usage|number|false|none|none|

<h2 id="tocS_ScoreboardGame">ScoreboardGame</h2>
<!-- backwards compatibility -->
<a id="schemascoreboardgame"></a>
<a id="schema_ScoreboardGame"></a>
<a id="tocSscoreboardgame"></a>
<a id="tocsscoreboardgame"></a>

```json
{
  "awayTeam": {
    "classification": "string",
    "conference": "string",
    "id": 0,
    "name": "string",
    "points": 0
  },
  "betting": {
    "awayMoneyline": 0,
    "homeMoneyline": 0,
    "overUnder": 0,
    "spread": 0
  },
  "clock": "string",
  "conferenceGame": true,
  "homeTeam": {
    "classification": "string",
    "conference": "string",
    "id": 0,
    "name": "string",
    "points": 0
  },
  "id": 0,
  "neutralSite": true,
  "period": 0,
  "possession": "string",
  "situation": "string",
  "startDate": "string",
  "startTimeTBD": true,
  "status": "string",
  "tv": "string",
  "venue": {
    "city": "string",
    "name": "string",
    "state": "string"
  },
  "weather": {
    "description": "string",
    "temperature": 0,
    "windDirection": 0,
    "windSpeed": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awayTeam|object|false|none|none|
|betting|object|false|none|none|
|clock|string|false|none|none|
|conferenceGame|boolean|false|none|none|
|homeTeam|object|false|none|none|
|id|integer|false|none|none|
|neutralSite|boolean|false|none|none|
|period|integer|false|none|none|
|possession|string|false|none|none|
|situation|string|false|none|none|
|startDate|string|false|none|none|
|startTimeTBD|boolean|false|none|none|
|status|string|false|none|none|
|tv|string|false|none|none|
|venue|object|false|none|none|
|weather|object|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "abbreviation": "string",
  "alt_color": "string",
  "alt_name_1": "string",
  "alt_name_2": "string",
  "alt_name_3": "string",
  "classification": "string",
  "color": "string",
  "conference": "string",
  "division": "string",
  "id": 0,
  "location": {
    "capacity": 0,
    "city": "string",
    "country_code": "string",
    "dome": true,
    "elevation": 0,
    "grass": true,
    "latitude": 0,
    "longitude": 0,
    "name": "string",
    "state": "string",
    "timezone": "string",
    "venue_id": 0,
    "year_constructed": 0,
    "zip": "string"
  },
  "logos": [
    "string"
  ],
  "mascot": "string",
  "school": "string",
  "twitter": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|none|
|alt_color|string|false|none|none|
|alt_name_1|string|false|none|none|
|alt_name_2|string|false|none|none|
|alt_name_3|string|false|none|none|
|classification|string|false|none|none|
|color|string|false|none|none|
|conference|string|false|none|none|
|division|string|false|none|none|
|id|integer|false|none|none|
|location|object|false|none|none|
|logos|[string]|false|none|none|
|mascot|string|false|none|none|
|school|string|false|none|none|
|twitter|string|false|none|none|

<h2 id="tocS_TeamEloRating">TeamEloRating</h2>
<!-- backwards compatibility -->
<a id="schemateamelorating"></a>
<a id="schema_TeamEloRating"></a>
<a id="tocSteamelorating"></a>
<a id="tocsteamelorating"></a>

```json
{
  "conference": "string",
  "elo": 0,
  "team": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|elo|number|false|none|none|
|team|string|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "id": 0,
  "teams": [
    {
      "conference": "string",
      "homeAway": "string",
      "points": 0,
      "school": "string",
      "stats": [
        {
          "category": "string",
          "stat": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|teams|[object]|false|none|none|

<h2 id="tocS_TeamMatchup">TeamMatchup</h2>
<!-- backwards compatibility -->
<a id="schemateammatchup"></a>
<a id="schema_TeamMatchup"></a>
<a id="tocSteammatchup"></a>
<a id="tocsteammatchup"></a>

```json
{
  "endYear": 0,
  "games": [
    {
      "awayScore": 0,
      "awayTeam": "string",
      "date": "string",
      "homeScore": 0,
      "homeTeam": "string",
      "neutralSite": true,
      "season": 0,
      "season_type": "string",
      "venue": "string",
      "week": 0,
      "winner": "string"
    }
  ],
  "startYear": 0,
  "team1": "string",
  "team1Wins": 0,
  "team2": "string",
  "team2Wins": 0,
  "ties": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endYear|integer|false|none|none|
|games|[object]|false|none|none|
|startYear|integer|false|none|none|
|team1|string|false|none|none|
|team1Wins|integer|false|none|none|
|team2|string|false|none|none|
|team2Wins|integer|false|none|none|
|ties|integer|false|none|none|

<h2 id="tocS_TeamPPA">TeamPPA</h2>
<!-- backwards compatibility -->
<a id="schemateamppa"></a>
<a id="schema_TeamPPA"></a>
<a id="tocSteamppa"></a>
<a id="tocsteamppa"></a>

```json
{
  "conference": "string",
  "defense": {
    "cumulative": {
      "passing": 0,
      "rushing": 0,
      "total": 0
    },
    "firstDown": 0,
    "overall": 0,
    "passing": 0,
    "rushing": 0,
    "secondDown": 0,
    "thirdDown": 0
  },
  "offense": {
    "cumulative": {
      "passing": 0,
      "rushing": 0,
      "total": 0
    },
    "firstDown": 0,
    "overall": 0,
    "passing": 0,
    "rushing": 0,
    "secondDown": 0,
    "thirdDown": 0
  },
  "season": 0,
  "team": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|defense|object|false|none|none|
|offense|object|false|none|none|
|season|integer|false|none|none|
|team|string|false|none|none|

<h2 id="tocS_TeamRecord">TeamRecord</h2>
<!-- backwards compatibility -->
<a id="schemateamrecord"></a>
<a id="schema_TeamRecord"></a>
<a id="tocSteamrecord"></a>
<a id="tocsteamrecord"></a>

```json
{
  "awayGames": {
    "games": 0,
    "losses": 0,
    "ties": 0,
    "wins": 0
  },
  "conference": "string",
  "conferenceGames": {
    "games": 0,
    "losses": 0,
    "ties": 0,
    "wins": 0
  },
  "division": "string",
  "expectedWins": 0,
  "homeGames": {
    "games": 0,
    "losses": 0,
    "ties": 0,
    "wins": 0
  },
  "team": "string",
  "total": {
    "games": 0,
    "losses": 0,
    "ties": 0,
    "wins": 0
  },
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awayGames|object|false|none|none|
|conference|string|false|none|none|
|conferenceGames|object|false|none|none|
|division|string|false|none|none|
|expectedWins|number|false|none|none|
|homeGames|object|false|none|none|
|team|string|false|none|none|
|total|object|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_TeamRecruitingRank">TeamRecruitingRank</h2>
<!-- backwards compatibility -->
<a id="schemateamrecruitingrank"></a>
<a id="schema_TeamRecruitingRank"></a>
<a id="tocSteamrecruitingrank"></a>
<a id="tocsteamrecruitingrank"></a>

```json
{
  "points": 0,
  "rank": 0,
  "team": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|points|number|false|none|none|
|rank|integer|false|none|none|
|team|string|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_TeamSPRating">TeamSPRating</h2>
<!-- backwards compatibility -->
<a id="schemateamsprating"></a>
<a id="schema_TeamSPRating"></a>
<a id="tocSteamsprating"></a>
<a id="tocsteamsprating"></a>

```json
{
  "conference": "string",
  "defense": {
    "explosiveness": 0,
    "havoc": {
      "db": 0,
      "frontSeven": 0,
      "total": 0
    },
    "pasing": 0,
    "passingDowns": 0,
    "ranking": 0,
    "rating": 0,
    "rushing": 0,
    "standardDowns": 0,
    "success": 0
  },
  "offense": {
    "explosiveness": 0,
    "pace": 0,
    "passing": 0,
    "passingDowns": 0,
    "ranking": 0,
    "rating": 0,
    "runRate": 0,
    "rushing": 0,
    "standardDowns": 0,
    "success": 0
  },
  "ranking": 0,
  "rating": 0,
  "secondOrderWins": 0,
  "sos": 0,
  "specialTeams": {
    "rating": 0
  },
  "team": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|defense|object|false|none|none|
|offense|object|false|none|none|
|ranking|number|false|none|none|
|rating|number|false|none|none|
|secondOrderWins|number|false|none|none|
|sos|number|false|none|none|
|specialTeams|object|false|none|none|
|team|string|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_TeamSRSRating">TeamSRSRating</h2>
<!-- backwards compatibility -->
<a id="schemateamsrsrating"></a>
<a id="schema_TeamSRSRating"></a>
<a id="tocSteamsrsrating"></a>
<a id="tocsteamsrsrating"></a>

```json
{
  "conference": "string",
  "division": "string",
  "ranking": 0,
  "rating": 0,
  "team": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|division|string|false|none|none|
|ranking|number|false|none|none|
|rating|number|false|none|none|
|team|string|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "games": 0,
  "losses": 0,
  "postseason_rank": 0,
  "preseason_rank": 0,
  "school": "string",
  "sp_defense": 0,
  "sp_offense": 0,
  "sp_overall": 0,
  "srs": 0,
  "ties": 0,
  "wins": 0,
  "year": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|games|integer|false|none|none|
|losses|integer|false|none|none|
|postseason_rank|integer|false|none|Final ranking in the AP poll|
|preseason_rank|integer|false|none|Rank in the AP preseason poll|
|school|string|false|none|none|
|sp_defense|number|false|none|Final SP+ defensive rating|
|sp_offense|number|false|none|Final SP+ offensive rating|
|sp_overall|number|false|none|Final overall SP+ rating|
|srs|number|false|none|Final SRS rankings|
|ties|integer|false|none|none|
|wins|integer|false|none|none|
|year|string|false|none|none|

<h2 id="tocS_TeamSeasonStat">TeamSeasonStat</h2>
<!-- backwards compatibility -->
<a id="schemateamseasonstat"></a>
<a id="schema_TeamSeasonStat"></a>
<a id="tocSteamseasonstat"></a>
<a id="tocsteamseasonstat"></a>

```json
{
  "conference": "string",
  "season": 0,
  "statName": "string",
  "statValue": 0,
  "team": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conference|string|false|none|none|
|season|integer|false|none|none|
|statName|string|false|none|none|
|statValue|integer|false|none|none|
|team|string|false|none|none|

<h2 id="tocS_TeamTalent">TeamTalent</h2>
<!-- backwards compatibility -->
<a id="schemateamtalent"></a>
<a id="schema_TeamTalent"></a>
<a id="tocSteamtalent"></a>
<a id="tocsteamtalent"></a>

```json
{
  "school": "string",
  "talent": 0,
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|school|string|false|none|none|
|talent|number|false|none|none|
|year|integer|false|none|none|

<h2 id="tocS_Venue">Venue</h2>
<!-- backwards compatibility -->
<a id="schemavenue"></a>
<a id="schema_Venue"></a>
<a id="tocSvenue"></a>
<a id="tocsvenue"></a>

```json
{
  "capacity": 0,
  "city": "string",
  "country_code": "string",
  "dome": true,
  "elevation": 0,
  "grass": true,
  "id": 0,
  "location": {
    "x": 0,
    "y": 0
  },
  "name": "string",
  "state": "string",
  "timezone": "string",
  "year_constructed": 0,
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|integer|false|none|none|
|city|string|false|none|none|
|country_code|string|false|none|none|
|dome|boolean|false|none|none|
|elevation|number|false|none|none|
|grass|boolean|false|none|none|
|id|integer|false|none|none|
|location|object|false|none|none|
|name|string|false|none|none|
|state|string|false|none|none|
|timezone|string|false|none|none|
|year_constructed|integer|false|none|none|
|zip|string|false|none|none|

<h2 id="tocS_Week">Week</h2>
<!-- backwards compatibility -->
<a id="schemaweek"></a>
<a id="schema_Week"></a>
<a id="tocSweek"></a>
<a id="tocsweek"></a>

```json
{
  "firstGameStart": "string",
  "lastGameStart": "string",
  "season": 0,
  "seasonType": "string",
  "week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstGameStart|string|false|none|none|
|lastGameStart|string|false|none|none|
|season|integer|false|none|none|
|seasonType|string|false|none|none|
|week|integer|false|none|none|
