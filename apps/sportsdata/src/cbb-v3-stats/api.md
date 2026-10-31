<h1 id="cbb-v3-stats">CBB v3 Stats v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/cbb/stats">http://azure-api.sportsdata.io/v3/cbb/stats</a>

* <a href="https://azure-api.sportsdata.io/v3/cbb/stats">https://azure-api.sportsdata.io/v3/cbb/stats</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="cbb-v3-stats-default">Default</h1>

## Are Games In Progress

<a id="opIdAreGamesInProgress"></a>

> Code samples

```bash
curl https://example.com/XML/AreAnyGamesInProgress \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/AreAnyGamesInProgress`

Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.

<h3 id="are-games-in-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
true
```

<h3 id="are-games-in-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Box Score

<a id="opIdBoxScore"></a>

> Code samples

```bash
curl https://example.com/XML/BoxScore/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/BoxScore/{gameid}`

<h3 id="box-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|gameid|path|string|true|The GameID of an CBB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Game": {
    "Attendance": 0,
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamPreviousGameID": 0,
    "AwayTeamPreviousGlobalGameID": 0,
    "AwayTeamScore": 0,
    "AwayTeamSeed": 0,
    "BottomTeamPreviousGameId": 0,
    "Bracket": "string",
    "Channel": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamPreviousGameID": 0,
    "HomeTeamPreviousGlobalGameID": 0,
    "HomeTeamScore": 0,
    "HomeTeamSeed": 0,
    "IsClosed": true,
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "PeriodID": 0,
        "Type": "string"
      }
    ],
    "PointSpread": 0,
    "Round": 0,
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "Address": "string",
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string",
      "Zip": "string"
    },
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "TopTeamPreviousGameId": 0,
    "TournamentDisplayOrder": 0,
    "TournamentDisplayOrderForHomeTeam": "string",
    "TournamentID": 0,
    "UnderPayout": 0,
    "Updated": "string"
  },
  "Periods": [
    {
      "AwayScore": 0,
      "GameID": 0,
      "HomeScore": 0,
      "Name": "string",
      "Number": 0,
      "PeriodID": 0,
      "Type": "string"
    }
  ],
  "PlayerGames": [
    {
      "Assists": 0,
      "AssistsPercentage": 0,
      "BlockedShots": 0,
      "BlocksPercentage": 0,
      "DateTime": "string",
      "Day": "string",
      "DefensiveRebounds": 0,
      "DefensiveReboundsPercentage": 0,
      "DraftKingsPosition": "string",
      "DraftKingsSalary": 0,
      "EffectiveFieldGoalsPercentage": 0,
      "FanDuelPosition": "string",
      "FanDuelSalary": 0,
      "FantasyDataSalary": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsYahoo": 0,
      "FieldGoalsAttempted": 0,
      "FieldGoalsMade": 0,
      "FieldGoalsPercentage": 0,
      "FreeThrowsAttempted": 0,
      "FreeThrowsMade": 0,
      "FreeThrowsPercentage": 0,
      "GameID": 0,
      "Games": 0,
      "GlobalGameID": 0,
      "GlobalOpponentID": 0,
      "GlobalTeamID": 0,
      "HomeOrAway": "string",
      "InjuryBodyPart": "string",
      "InjuryNotes": "string",
      "InjuryStartDate": "string",
      "InjuryStatus": "string",
      "IsGameOver": true,
      "Minutes": 0,
      "Name": "string",
      "OffensiveRebounds": 0,
      "OffensiveReboundsPercentage": 0,
      "Opponent": "string",
      "OpponentID": 0,
      "OpponentPositionRank": 0,
      "OpponentRank": 0,
      "PersonalFouls": 0,
      "PlayerEfficiencyRating": 0,
      "PlayerID": 0,
      "Points": 0,
      "Position": "string",
      "Rebounds": 0,
      "Season": 0,
      "SeasonType": 0,
      "StatID": 0,
      "Steals": 0,
      "StealsPercentage": 0,
      "Team": "string",
      "TeamID": 0,
      "ThreePointersAttempted": 0,
      "ThreePointersMade": 0,
      "ThreePointersPercentage": 0,
      "TotalReboundsPercentage": 0,
      "TrueShootingAttempts": 0,
      "TrueShootingPercentage": 0,
      "TurnOversPercentage": 0,
      "Turnovers": 0,
      "TwoPointersAttempted": 0,
      "TwoPointersMade": 0,
      "TwoPointersPercentage": 0,
      "Updated": "string",
      "UsageRatePercentage": 0,
      "YahooPosition": "string",
      "YahooSalary": 0
    }
  ],
  "TeamGames": [
    {
      "Assists": 0,
      "AssistsPercentage": 0,
      "BlockedShots": 0,
      "BlocksPercentage": 0,
      "ConferenceLosses": 0,
      "ConferenceWins": 0,
      "DateTime": "string",
      "Day": "string",
      "DefensiveRebounds": 0,
      "DefensiveReboundsPercentage": 0,
      "EffectiveFieldGoalsPercentage": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsYahoo": 0,
      "FieldGoalsAttempted": 0,
      "FieldGoalsMade": 0,
      "FieldGoalsPercentage": 0,
      "FreeThrowsAttempted": 0,
      "FreeThrowsMade": 0,
      "FreeThrowsPercentage": 0,
      "GameID": 0,
      "Games": 0,
      "GlobalGameID": 0,
      "GlobalOpponentID": 0,
      "GlobalTeamID": 0,
      "HomeOrAway": "string",
      "IsGameOver": true,
      "Losses": 0,
      "Minutes": 0,
      "Name": "string",
      "OffensiveRebounds": 0,
      "OffensiveReboundsPercentage": 0,
      "Opponent": "string",
      "OpponentID": 0,
      "PersonalFouls": 0,
      "PlayerEfficiencyRating": 0,
      "Points": 0,
      "Possessions": 0,
      "Rebounds": 0,
      "Season": 0,
      "SeasonType": 0,
      "StatID": 0,
      "Steals": 0,
      "StealsPercentage": 0,
      "Team": "string",
      "TeamID": 0,
      "ThreePointersAttempted": 0,
      "ThreePointersMade": 0,
      "ThreePointersPercentage": 0,
      "TotalReboundsPercentage": 0,
      "TrueShootingAttempts": 0,
      "TrueShootingPercentage": 0,
      "TurnOversPercentage": 0,
      "Turnovers": 0,
      "TwoPointersAttempted": 0,
      "TwoPointersMade": 0,
      "TwoPointersPercentage": 0,
      "Updated": "string",
      "UsageRatePercentage": 0,
      "Wins": 0
    }
  ]
}
```

<h3 id="box-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BoxScore](#schemaboxscore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Box Scores by Date

<a id="opIdBoxScoresByDate"></a>

> Code samples

```bash
curl https://example.com/XML/BoxScores/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/BoxScores/{date}`

<h3 id="box-scores-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Game": {
      "Attendance": 0,
      "AwayPointSpreadPayout": 0,
      "AwayRotationNumber": 0,
      "AwayTeam": "string",
      "AwayTeamID": 0,
      "AwayTeamMoneyLine": 0,
      "AwayTeamPreviousGameID": 0,
      "AwayTeamPreviousGlobalGameID": 0,
      "AwayTeamScore": 0,
      "AwayTeamSeed": 0,
      "BottomTeamPreviousGameId": 0,
      "Bracket": "string",
      "Channel": "string",
      "DateTime": "string",
      "DateTimeUTC": "string",
      "Day": "string",
      "GameEndDateTime": "string",
      "GameID": 0,
      "GlobalAwayTeamID": 0,
      "GlobalGameID": 0,
      "GlobalHomeTeamID": 0,
      "HomePointSpreadPayout": 0,
      "HomeRotationNumber": 0,
      "HomeTeam": "string",
      "HomeTeamID": 0,
      "HomeTeamMoneyLine": 0,
      "HomeTeamPreviousGameID": 0,
      "HomeTeamPreviousGlobalGameID": 0,
      "HomeTeamScore": 0,
      "HomeTeamSeed": 0,
      "IsClosed": true,
      "NeutralVenue": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "Periods": [
        {
          "AwayScore": 0,
          "GameID": 0,
          "HomeScore": 0,
          "Name": "string",
          "Number": 0,
          "PeriodID": 0,
          "Type": "string"
        }
      ],
      "PointSpread": 0,
      "Round": 0,
      "Season": 0,
      "SeasonType": 0,
      "Stadium": {
        "Active": true,
        "Address": "string",
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "StadiumID": 0,
        "State": "string",
        "Zip": "string"
      },
      "Status": "string",
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0,
      "TopTeamPreviousGameId": 0,
      "TournamentDisplayOrder": 0,
      "TournamentDisplayOrderForHomeTeam": "string",
      "TournamentID": 0,
      "UnderPayout": 0,
      "Updated": "string"
    },
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "PeriodID": 0,
        "Type": "string"
      }
    ],
    "PlayerGames": [
      {
        "Assists": 0,
        "AssistsPercentage": 0,
        "BlockedShots": 0,
        "BlocksPercentage": 0,
        "DateTime": "string",
        "Day": "string",
        "DefensiveRebounds": 0,
        "DefensiveReboundsPercentage": 0,
        "DraftKingsPosition": "string",
        "DraftKingsSalary": 0,
        "EffectiveFieldGoalsPercentage": 0,
        "FanDuelPosition": "string",
        "FanDuelSalary": 0,
        "FantasyDataSalary": 0,
        "FantasyPoints": 0,
        "FantasyPointsDraftKings": 0,
        "FantasyPointsFanDuel": 0,
        "FantasyPointsYahoo": 0,
        "FieldGoalsAttempted": 0,
        "FieldGoalsMade": 0,
        "FieldGoalsPercentage": 0,
        "FreeThrowsAttempted": 0,
        "FreeThrowsMade": 0,
        "FreeThrowsPercentage": 0,
        "GameID": 0,
        "Games": 0,
        "GlobalGameID": 0,
        "GlobalOpponentID": 0,
        "GlobalTeamID": 0,
        "HomeOrAway": "string",
        "InjuryBodyPart": "string",
        "InjuryNotes": "string",
        "InjuryStartDate": "string",
        "InjuryStatus": "string",
        "IsGameOver": true,
        "Minutes": 0,
        "Name": "string",
        "OffensiveRebounds": 0,
        "OffensiveReboundsPercentage": 0,
        "Opponent": "string",
        "OpponentID": 0,
        "OpponentPositionRank": 0,
        "OpponentRank": 0,
        "PersonalFouls": 0,
        "PlayerEfficiencyRating": 0,
        "PlayerID": 0,
        "Points": 0,
        "Position": "string",
        "Rebounds": 0,
        "Season": 0,
        "SeasonType": 0,
        "StatID": 0,
        "Steals": 0,
        "StealsPercentage": 0,
        "Team": "string",
        "TeamID": 0,
        "ThreePointersAttempted": 0,
        "ThreePointersMade": 0,
        "ThreePointersPercentage": 0,
        "TotalReboundsPercentage": 0,
        "TrueShootingAttempts": 0,
        "TrueShootingPercentage": 0,
        "TurnOversPercentage": 0,
        "Turnovers": 0,
        "TwoPointersAttempted": 0,
        "TwoPointersMade": 0,
        "TwoPointersPercentage": 0,
        "Updated": "string",
        "UsageRatePercentage": 0,
        "YahooPosition": "string",
        "YahooSalary": 0
      }
    ],
    "TeamGames": [
      {
        "Assists": 0,
        "AssistsPercentage": 0,
        "BlockedShots": 0,
        "BlocksPercentage": 0,
        "ConferenceLosses": 0,
        "ConferenceWins": 0,
        "DateTime": "string",
        "Day": "string",
        "DefensiveRebounds": 0,
        "DefensiveReboundsPercentage": 0,
        "EffectiveFieldGoalsPercentage": 0,
        "FantasyPoints": 0,
        "FantasyPointsDraftKings": 0,
        "FantasyPointsFanDuel": 0,
        "FantasyPointsYahoo": 0,
        "FieldGoalsAttempted": 0,
        "FieldGoalsMade": 0,
        "FieldGoalsPercentage": 0,
        "FreeThrowsAttempted": 0,
        "FreeThrowsMade": 0,
        "FreeThrowsPercentage": 0,
        "GameID": 0,
        "Games": 0,
        "GlobalGameID": 0,
        "GlobalOpponentID": 0,
        "GlobalTeamID": 0,
        "HomeOrAway": "string",
        "IsGameOver": true,
        "Losses": 0,
        "Minutes": 0,
        "Name": "string",
        "OffensiveRebounds": 0,
        "OffensiveReboundsPercentage": 0,
        "Opponent": "string",
        "OpponentID": 0,
        "PersonalFouls": 0,
        "PlayerEfficiencyRating": 0,
        "Points": 0,
        "Possessions": 0,
        "Rebounds": 0,
        "Season": 0,
        "SeasonType": 0,
        "StatID": 0,
        "Steals": 0,
        "StealsPercentage": 0,
        "Team": "string",
        "TeamID": 0,
        "ThreePointersAttempted": 0,
        "ThreePointersMade": 0,
        "ThreePointersPercentage": 0,
        "TotalReboundsPercentage": 0,
        "TrueShootingAttempts": 0,
        "TrueShootingPercentage": 0,
        "TurnOversPercentage": 0,
        "Turnovers": 0,
        "TwoPointersAttempted": 0,
        "TwoPointersMade": 0,
        "TwoPointersPercentage": 0,
        "Updated": "string",
        "UsageRatePercentage": 0,
        "Wins": 0
      }
    ]
  }
]
```

<h3 id="box-scores-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="box-scores-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoxScore](#schemaboxscore)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Box Scores by Date Delta

<a id="opIdBoxScoresByDateDelta"></a>

> Code samples

```bash
curl https://example.com/XML/BoxScoresDelta/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/BoxScoresDelta/{date}/{minutes}`

<h3 id="box-scores-by-date-delta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|
|minutes|path|string|true|Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br><code>1</code> or <code>2</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Game": {
      "Attendance": 0,
      "AwayPointSpreadPayout": 0,
      "AwayRotationNumber": 0,
      "AwayTeam": "string",
      "AwayTeamID": 0,
      "AwayTeamMoneyLine": 0,
      "AwayTeamPreviousGameID": 0,
      "AwayTeamPreviousGlobalGameID": 0,
      "AwayTeamScore": 0,
      "AwayTeamSeed": 0,
      "BottomTeamPreviousGameId": 0,
      "Bracket": "string",
      "Channel": "string",
      "DateTime": "string",
      "DateTimeUTC": "string",
      "Day": "string",
      "GameEndDateTime": "string",
      "GameID": 0,
      "GlobalAwayTeamID": 0,
      "GlobalGameID": 0,
      "GlobalHomeTeamID": 0,
      "HomePointSpreadPayout": 0,
      "HomeRotationNumber": 0,
      "HomeTeam": "string",
      "HomeTeamID": 0,
      "HomeTeamMoneyLine": 0,
      "HomeTeamPreviousGameID": 0,
      "HomeTeamPreviousGlobalGameID": 0,
      "HomeTeamScore": 0,
      "HomeTeamSeed": 0,
      "IsClosed": true,
      "NeutralVenue": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "Periods": [
        {
          "AwayScore": 0,
          "GameID": 0,
          "HomeScore": 0,
          "Name": "string",
          "Number": 0,
          "PeriodID": 0,
          "Type": "string"
        }
      ],
      "PointSpread": 0,
      "Round": 0,
      "Season": 0,
      "SeasonType": 0,
      "Stadium": {
        "Active": true,
        "Address": "string",
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "StadiumID": 0,
        "State": "string",
        "Zip": "string"
      },
      "Status": "string",
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0,
      "TopTeamPreviousGameId": 0,
      "TournamentDisplayOrder": 0,
      "TournamentDisplayOrderForHomeTeam": "string",
      "TournamentID": 0,
      "UnderPayout": 0,
      "Updated": "string"
    },
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "PeriodID": 0,
        "Type": "string"
      }
    ],
    "PlayerGames": [
      {
        "Assists": 0,
        "AssistsPercentage": 0,
        "BlockedShots": 0,
        "BlocksPercentage": 0,
        "DateTime": "string",
        "Day": "string",
        "DefensiveRebounds": 0,
        "DefensiveReboundsPercentage": 0,
        "DraftKingsPosition": "string",
        "DraftKingsSalary": 0,
        "EffectiveFieldGoalsPercentage": 0,
        "FanDuelPosition": "string",
        "FanDuelSalary": 0,
        "FantasyDataSalary": 0,
        "FantasyPoints": 0,
        "FantasyPointsDraftKings": 0,
        "FantasyPointsFanDuel": 0,
        "FantasyPointsYahoo": 0,
        "FieldGoalsAttempted": 0,
        "FieldGoalsMade": 0,
        "FieldGoalsPercentage": 0,
        "FreeThrowsAttempted": 0,
        "FreeThrowsMade": 0,
        "FreeThrowsPercentage": 0,
        "GameID": 0,
        "Games": 0,
        "GlobalGameID": 0,
        "GlobalOpponentID": 0,
        "GlobalTeamID": 0,
        "HomeOrAway": "string",
        "InjuryBodyPart": "string",
        "InjuryNotes": "string",
        "InjuryStartDate": "string",
        "InjuryStatus": "string",
        "IsGameOver": true,
        "Minutes": 0,
        "Name": "string",
        "OffensiveRebounds": 0,
        "OffensiveReboundsPercentage": 0,
        "Opponent": "string",
        "OpponentID": 0,
        "OpponentPositionRank": 0,
        "OpponentRank": 0,
        "PersonalFouls": 0,
        "PlayerEfficiencyRating": 0,
        "PlayerID": 0,
        "Points": 0,
        "Position": "string",
        "Rebounds": 0,
        "Season": 0,
        "SeasonType": 0,
        "StatID": 0,
        "Steals": 0,
        "StealsPercentage": 0,
        "Team": "string",
        "TeamID": 0,
        "ThreePointersAttempted": 0,
        "ThreePointersMade": 0,
        "ThreePointersPercentage": 0,
        "TotalReboundsPercentage": 0,
        "TrueShootingAttempts": 0,
        "TrueShootingPercentage": 0,
        "TurnOversPercentage": 0,
        "Turnovers": 0,
        "TwoPointersAttempted": 0,
        "TwoPointersMade": 0,
        "TwoPointersPercentage": 0,
        "Updated": "string",
        "UsageRatePercentage": 0,
        "YahooPosition": "string",
        "YahooSalary": 0
      }
    ],
    "TeamGames": [
      {
        "Assists": 0,
        "AssistsPercentage": 0,
        "BlockedShots": 0,
        "BlocksPercentage": 0,
        "ConferenceLosses": 0,
        "ConferenceWins": 0,
        "DateTime": "string",
        "Day": "string",
        "DefensiveRebounds": 0,
        "DefensiveReboundsPercentage": 0,
        "EffectiveFieldGoalsPercentage": 0,
        "FantasyPoints": 0,
        "FantasyPointsDraftKings": 0,
        "FantasyPointsFanDuel": 0,
        "FantasyPointsYahoo": 0,
        "FieldGoalsAttempted": 0,
        "FieldGoalsMade": 0,
        "FieldGoalsPercentage": 0,
        "FreeThrowsAttempted": 0,
        "FreeThrowsMade": 0,
        "FreeThrowsPercentage": 0,
        "GameID": 0,
        "Games": 0,
        "GlobalGameID": 0,
        "GlobalOpponentID": 0,
        "GlobalTeamID": 0,
        "HomeOrAway": "string",
        "IsGameOver": true,
        "Losses": 0,
        "Minutes": 0,
        "Name": "string",
        "OffensiveRebounds": 0,
        "OffensiveReboundsPercentage": 0,
        "Opponent": "string",
        "OpponentID": 0,
        "PersonalFouls": 0,
        "PlayerEfficiencyRating": 0,
        "Points": 0,
        "Possessions": 0,
        "Rebounds": 0,
        "Season": 0,
        "SeasonType": 0,
        "StatID": 0,
        "Steals": 0,
        "StealsPercentage": 0,
        "Team": "string",
        "TeamID": 0,
        "ThreePointersAttempted": 0,
        "ThreePointersMade": 0,
        "ThreePointersPercentage": 0,
        "TotalReboundsPercentage": 0,
        "TrueShootingAttempts": 0,
        "TrueShootingPercentage": 0,
        "TurnOversPercentage": 0,
        "Turnovers": 0,
        "TwoPointersAttempted": 0,
        "TwoPointersMade": 0,
        "TwoPointersPercentage": 0,
        "Updated": "string",
        "UsageRatePercentage": 0,
        "Wins": 0
      }
    ]
  }
]
```

<h3 id="box-scores-by-date-delta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="box-scores-by-date-delta-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoxScore](#schemaboxscore)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Current Season

<a id="opIdCurrentSeason"></a>

> Code samples

```bash
curl https://example.com/XML/CurrentSeason \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CurrentSeason`

<h3 id="current-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "ApiSeason": "string",
  "Description": "string",
  "EndYear": 0,
  "PostSeasonStartDate": "string",
  "RegularSeasonStartDate": "string",
  "Season": 0,
  "StartYear": 0
}
```

<h3 id="current-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Season](#schemaseason)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Schedules

<a id="opIdSchedules"></a>

> Code samples

```bash
curl https://example.com/XML/Games/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Games/{season}`

<h3 id="schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Attendance": 0,
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamPreviousGameID": 0,
    "AwayTeamPreviousGlobalGameID": 0,
    "AwayTeamScore": 0,
    "AwayTeamSeed": 0,
    "BottomTeamPreviousGameId": 0,
    "Bracket": "string",
    "Channel": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamPreviousGameID": 0,
    "HomeTeamPreviousGlobalGameID": 0,
    "HomeTeamScore": 0,
    "HomeTeamSeed": 0,
    "IsClosed": true,
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "PeriodID": 0,
        "Type": "string"
      }
    ],
    "PointSpread": 0,
    "Round": 0,
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "Address": "string",
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string",
      "Zip": "string"
    },
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "TopTeamPreviousGameId": 0,
    "TournamentDisplayOrder": 0,
    "TournamentDisplayOrderForHomeTeam": "string",
    "TournamentID": 0,
    "UnderPayout": 0,
    "Updated": "string"
  }
]
```

<h3 id="schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="schedules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Games by Date

<a id="opIdGamesByDate"></a>

> Code samples

```bash
curl https://example.com/XML/GamesByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/GamesByDate/{date}`

<h3 id="games-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Attendance": 0,
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamPreviousGameID": 0,
    "AwayTeamPreviousGlobalGameID": 0,
    "AwayTeamScore": 0,
    "AwayTeamSeed": 0,
    "BottomTeamPreviousGameId": 0,
    "Bracket": "string",
    "Channel": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamPreviousGameID": 0,
    "HomeTeamPreviousGlobalGameID": 0,
    "HomeTeamScore": 0,
    "HomeTeamSeed": 0,
    "IsClosed": true,
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "PeriodID": 0,
        "Type": "string"
      }
    ],
    "PointSpread": 0,
    "Round": 0,
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "Address": "string",
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string",
      "Zip": "string"
    },
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "TopTeamPreviousGameId": 0,
    "TournamentDisplayOrder": 0,
    "TournamentDisplayOrderForHomeTeam": "string",
    "TournamentID": 0,
    "UnderPayout": 0,
    "Updated": "string"
  }
]
```

<h3 id="games-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="games-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Injured Players

<a id="opIdInjuredPlayers"></a>

> Code samples

```bash
curl https://example.com/XML/InjuredPlayers \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/InjuredPlayers`

This endpoint provides all currently injured college basketball players, along with injury details.

<h3 id="injured-players-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "BirthCity": "string",
    "BirthState": "string",
    "Class": "string",
    "FantasyAlarmPlayerID": 0,
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "HighSchool": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "SportRadarPlayerID": "string",
    "Team": "string",
    "TeamID": 0,
    "Weight": 0
  }
]
```

<h3 id="injured-players-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="injured-players-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## League Hierarchy

<a id="opIdLeagueHierarchy"></a>

> Code samples

```bash
curl https://example.com/XML/LeagueHierarchy \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/LeagueHierarchy`

<h3 id="league-hierarchy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "ConferenceID": 0,
    "Name": "string",
    "Teams": [
      {
        "Active": true,
        "ApRank": 0,
        "Conference": "string",
        "ConferenceID": 0,
        "ConferenceLosses": 0,
        "ConferenceWins": 0,
        "GlobalTeamID": 0,
        "Key": "string",
        "Losses": 0,
        "Name": "string",
        "School": "string",
        "ShortDisplayName": "string",
        "Stadium": {
          "Active": true,
          "Address": "string",
          "Capacity": 0,
          "City": "string",
          "Country": "string",
          "GeoLat": 0,
          "GeoLong": 0,
          "Name": "string",
          "StadiumID": 0,
          "State": "string",
          "Zip": "string"
        },
        "TeamID": 0,
        "TeamLogoUrl": "string",
        "Wins": 0
      }
    ]
  }
]
```

<h3 id="league-hierarchy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="league-hierarchy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conference](#schemaconference)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Details by Player

<a id="opIdPlayerDetailsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/Player/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Player/{playerid}`

<h3 id="player-details-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>60003802</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "BirthCity": "string",
  "BirthState": "string",
  "Class": "string",
  "FantasyAlarmPlayerID": 0,
  "FirstName": "string",
  "GlobalTeamID": 0,
  "Height": 0,
  "HighSchool": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "PlayerID": 0,
  "Position": "string",
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "SportRadarPlayerID": "string",
  "Team": "string",
  "TeamID": 0,
  "Weight": 0
}
```

<h3 id="player-details-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Player](#schemaplayer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Date

<a id="opIdProjectedPlayerGameStatsByDate"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByDate/{date}`

<h3 id="projected-player-game-stats-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "IsGameOver": true,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="projected-player-game-stats-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Player

<a id="opIdProjectedPlayerGameStatsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}`

<h3 id="projected-player-game-stats-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>60003802</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DateTime": "string",
  "Day": "string",
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsGameOver": true,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

<h3 id="projected-player-game-stats-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerGameProjection](#schemaplayergameprojection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Game Stats by Date

<a id="opIdPlayerGameStatsByDate"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameStatsByDate/{date}`

<h3 id="player-game-stats-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "IsGameOver": true,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="player-game-stats-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-game-stats-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGame](#schemaplayergame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Game Stats by Player

<a id="opIdPlayerGameStatsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameStatsByPlayer/{date}/{playerid}`

<h3 id="player-game-stats-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>60003802</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DateTime": "string",
  "Day": "string",
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsGameOver": true,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

<h3 id="player-game-stats-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerGame](#schemaplayergame)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Game Logs By Season

<a id="opIdPlayerGameLogsBySeason"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameStatsBySeason/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`

<h3 id="player-game-logs-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Season to get games from. Example <code>2019POST</code>, <code>2020</code>|
|playerid|path|string|true|Unique FantasyData Player ID.Example:<code>60008094</code>.|
|numberofgames|path|string|true|How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "IsGameOver": true,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="player-game-logs-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-game-logs-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGame](#schemaplayergame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Season Stats

<a id="opIdPlayerSeasonStats"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonStats/{season}`

<h3 id="player-season-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0
  }
]
```

<h3 id="player-season-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Season Stats By Player

<a id="opIdPlayerSeasonStatsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}`

<h3 id="player-season-stats-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>60003802</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0
}
```

<h3 id="player-season-stats-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerSeason](#schemaplayerseason)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Season Stats by Team

<a id="opIdPlayerSeasonStatsByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonStatsByTeam/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonStatsByTeam/{season}/{team}`

<h3 id="player-season-stats-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.|
|team|path|string|true|The abbreviation of the requested team.<br><br>Examples: <code>SF</code>, <code>NYY</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0
  }
]
```

<h3 id="player-season-stats-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-stats-by-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Details by Active

<a id="opIdPlayerDetailsByActive"></a>

> Code samples

```bash
curl https://example.com/XML/Players \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players`

<h3 id="player-details-by-active-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "BirthCity": "string",
    "BirthState": "string",
    "Class": "string",
    "FantasyAlarmPlayerID": 0,
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "HighSchool": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "SportRadarPlayerID": "string",
    "Team": "string",
    "TeamID": 0,
    "Weight": 0
  }
]
```

<h3 id="player-details-by-active-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-active-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Details by Team

<a id="opIdPlayerDetailsByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/Players/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players/{team}`

<h3 id="player-details-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|team|path|string|true|The abbreviation of the requested team.<br><br>Examples: <code>SF</code>, <code>NYY</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "BirthCity": "string",
    "BirthState": "string",
    "Class": "string",
    "FantasyAlarmPlayerID": 0,
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "HighSchool": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "SportRadarPlayerID": "string",
    "Team": "string",
    "TeamID": 0,
    "Weight": 0
  }
]
```

<h3 id="player-details-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Stadiums

<a id="opIdStadiums"></a>

> Code samples

```bash
curl https://example.com/XML/Stadiums \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Stadiums`

<h3 id="stadiums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Active": true,
    "Address": "string",
    "Capacity": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "StadiumID": 0,
    "State": "string",
    "Zip": "string"
  }
]
```

<h3 id="stadiums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="stadiums-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Stadium](#schemastadium)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Team Game Stats by Date

<a id="opIdTeamGameStatsByDate"></a>

> Code samples

```bash
curl https://example.com/XML/TeamGameStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamGameStatsByDate/{date}`

<h3 id="team-game-stats-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "ConferenceLosses": 0,
    "ConferenceWins": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "IsGameOver": true,
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "Wins": 0
  }
]
```

<h3 id="team-game-stats-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-game-stats-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamGame](#schemateamgame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Team Game Logs By Season

<a id="opIdTeamGameLogsBySeason"></a>

> Code samples

```bash
curl https://example.com/XML/TeamGameStatsBySeason/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`

Game by game log of total team statistics.

<h3 id="team-game-logs-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Season to get games from. Example <code>2019POST</code>, <code>2020</code>|
|teamid|path|string|true|Unique ID of team.  Example <code> 1 </code>|
|numberofgames|path|string|true|How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "ConferenceLosses": 0,
    "ConferenceWins": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "IsGameOver": true,
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "Wins": 0
  }
]
```

<h3 id="team-game-logs-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-game-logs-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamGame](#schemateamgame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Team Season Stats

<a id="opIdTeamSeasonStats"></a>

> Code samples

```bash
curl https://example.com/XML/TeamSeasonStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamSeasonStats/{season}`

<h3 id="team-season-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "ConferenceLosses": 0,
    "ConferenceWins": 0,
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "Wins": 0
  }
]
```

<h3 id="team-season-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-season-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamSeason](#schemateamseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Tournament Hierarchy

<a id="opIdTournamentHierarchy"></a>

> Code samples

```bash
curl https://example.com/XML/Tournament/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Tournament/{season}`

<h3 id="tournament-hierarchy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Games": [
    {
      "Attendance": 0,
      "AwayPointSpreadPayout": 0,
      "AwayRotationNumber": 0,
      "AwayTeam": "string",
      "AwayTeamID": 0,
      "AwayTeamMoneyLine": 0,
      "AwayTeamPreviousGameID": 0,
      "AwayTeamPreviousGlobalGameID": 0,
      "AwayTeamScore": 0,
      "AwayTeamSeed": 0,
      "BottomTeamPreviousGameId": 0,
      "Bracket": "string",
      "Channel": "string",
      "DateTime": "string",
      "DateTimeUTC": "string",
      "Day": "string",
      "GameEndDateTime": "string",
      "GameID": 0,
      "GlobalAwayTeamID": 0,
      "GlobalGameID": 0,
      "GlobalHomeTeamID": 0,
      "HomePointSpreadPayout": 0,
      "HomeRotationNumber": 0,
      "HomeTeam": "string",
      "HomeTeamID": 0,
      "HomeTeamMoneyLine": 0,
      "HomeTeamPreviousGameID": 0,
      "HomeTeamPreviousGlobalGameID": 0,
      "HomeTeamScore": 0,
      "HomeTeamSeed": 0,
      "IsClosed": true,
      "NeutralVenue": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "Periods": [
        {
          "AwayScore": 0,
          "GameID": 0,
          "HomeScore": 0,
          "Name": "string",
          "Number": 0,
          "PeriodID": 0,
          "Type": "string"
        }
      ],
      "PointSpread": 0,
      "Round": 0,
      "Season": 0,
      "SeasonType": 0,
      "Stadium": {
        "Active": true,
        "Address": "string",
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "StadiumID": 0,
        "State": "string",
        "Zip": "string"
      },
      "Status": "string",
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0,
      "TopTeamPreviousGameId": 0,
      "TournamentDisplayOrder": 0,
      "TournamentDisplayOrderForHomeTeam": "string",
      "TournamentID": 0,
      "UnderPayout": 0,
      "Updated": "string"
    }
  ],
  "LeftBottomBracketConference": "string",
  "LeftTopBracketConference": "string",
  "Location": "string",
  "Name": "string",
  "RightBottomBracketConference": "string",
  "RightTopBracketConference": "string",
  "Season": 0,
  "TournamentID": 0
}
```

<h3 id="tournament-hierarchy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Tournament](#schematournament)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Teams

<a id="opIdTeams"></a>

> Code samples

```bash
curl https://example.com/XML/teams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/teams`

<h3 id="teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
[
  {
    "Active": true,
    "ApRank": 0,
    "Conference": "string",
    "ConferenceID": 0,
    "ConferenceLosses": 0,
    "ConferenceWins": 0,
    "GlobalTeamID": 0,
    "Key": "string",
    "Losses": 0,
    "Name": "string",
    "School": "string",
    "ShortDisplayName": "string",
    "Stadium": {
      "Active": true,
      "Address": "string",
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string",
      "Zip": "string"
    },
    "TeamID": 0,
    "TeamLogoUrl": "string",
    "Wins": 0
  }
]
```

<h3 id="teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_BoxScore">BoxScore</h2>
<!-- backwards compatibility -->
<a id="schemaboxscore"></a>
<a id="schema_BoxScore"></a>
<a id="tocSboxscore"></a>
<a id="tocsboxscore"></a>

```json
{
  "Game": {
    "Attendance": 0,
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamPreviousGameID": 0,
    "AwayTeamPreviousGlobalGameID": 0,
    "AwayTeamScore": 0,
    "AwayTeamSeed": 0,
    "BottomTeamPreviousGameId": 0,
    "Bracket": "string",
    "Channel": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamPreviousGameID": 0,
    "HomeTeamPreviousGlobalGameID": 0,
    "HomeTeamScore": 0,
    "HomeTeamSeed": 0,
    "IsClosed": true,
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "PeriodID": 0,
        "Type": "string"
      }
    ],
    "PointSpread": 0,
    "Round": 0,
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "Address": "string",
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string",
      "Zip": "string"
    },
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "TopTeamPreviousGameId": 0,
    "TournamentDisplayOrder": 0,
    "TournamentDisplayOrderForHomeTeam": "string",
    "TournamentID": 0,
    "UnderPayout": 0,
    "Updated": "string"
  },
  "Periods": [
    {
      "AwayScore": 0,
      "GameID": 0,
      "HomeScore": 0,
      "Name": "string",
      "Number": 0,
      "PeriodID": 0,
      "Type": "string"
    }
  ],
  "PlayerGames": [
    {
      "Assists": 0,
      "AssistsPercentage": 0,
      "BlockedShots": 0,
      "BlocksPercentage": 0,
      "DateTime": "string",
      "Day": "string",
      "DefensiveRebounds": 0,
      "DefensiveReboundsPercentage": 0,
      "DraftKingsPosition": "string",
      "DraftKingsSalary": 0,
      "EffectiveFieldGoalsPercentage": 0,
      "FanDuelPosition": "string",
      "FanDuelSalary": 0,
      "FantasyDataSalary": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsYahoo": 0,
      "FieldGoalsAttempted": 0,
      "FieldGoalsMade": 0,
      "FieldGoalsPercentage": 0,
      "FreeThrowsAttempted": 0,
      "FreeThrowsMade": 0,
      "FreeThrowsPercentage": 0,
      "GameID": 0,
      "Games": 0,
      "GlobalGameID": 0,
      "GlobalOpponentID": 0,
      "GlobalTeamID": 0,
      "HomeOrAway": "string",
      "InjuryBodyPart": "string",
      "InjuryNotes": "string",
      "InjuryStartDate": "string",
      "InjuryStatus": "string",
      "IsGameOver": true,
      "Minutes": 0,
      "Name": "string",
      "OffensiveRebounds": 0,
      "OffensiveReboundsPercentage": 0,
      "Opponent": "string",
      "OpponentID": 0,
      "OpponentPositionRank": 0,
      "OpponentRank": 0,
      "PersonalFouls": 0,
      "PlayerEfficiencyRating": 0,
      "PlayerID": 0,
      "Points": 0,
      "Position": "string",
      "Rebounds": 0,
      "Season": 0,
      "SeasonType": 0,
      "StatID": 0,
      "Steals": 0,
      "StealsPercentage": 0,
      "Team": "string",
      "TeamID": 0,
      "ThreePointersAttempted": 0,
      "ThreePointersMade": 0,
      "ThreePointersPercentage": 0,
      "TotalReboundsPercentage": 0,
      "TrueShootingAttempts": 0,
      "TrueShootingPercentage": 0,
      "TurnOversPercentage": 0,
      "Turnovers": 0,
      "TwoPointersAttempted": 0,
      "TwoPointersMade": 0,
      "TwoPointersPercentage": 0,
      "Updated": "string",
      "UsageRatePercentage": 0,
      "YahooPosition": "string",
      "YahooSalary": 0
    }
  ],
  "TeamGames": [
    {
      "Assists": 0,
      "AssistsPercentage": 0,
      "BlockedShots": 0,
      "BlocksPercentage": 0,
      "ConferenceLosses": 0,
      "ConferenceWins": 0,
      "DateTime": "string",
      "Day": "string",
      "DefensiveRebounds": 0,
      "DefensiveReboundsPercentage": 0,
      "EffectiveFieldGoalsPercentage": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsYahoo": 0,
      "FieldGoalsAttempted": 0,
      "FieldGoalsMade": 0,
      "FieldGoalsPercentage": 0,
      "FreeThrowsAttempted": 0,
      "FreeThrowsMade": 0,
      "FreeThrowsPercentage": 0,
      "GameID": 0,
      "Games": 0,
      "GlobalGameID": 0,
      "GlobalOpponentID": 0,
      "GlobalTeamID": 0,
      "HomeOrAway": "string",
      "IsGameOver": true,
      "Losses": 0,
      "Minutes": 0,
      "Name": "string",
      "OffensiveRebounds": 0,
      "OffensiveReboundsPercentage": 0,
      "Opponent": "string",
      "OpponentID": 0,
      "PersonalFouls": 0,
      "PlayerEfficiencyRating": 0,
      "Points": 0,
      "Possessions": 0,
      "Rebounds": 0,
      "Season": 0,
      "SeasonType": 0,
      "StatID": 0,
      "Steals": 0,
      "StealsPercentage": 0,
      "Team": "string",
      "TeamID": 0,
      "ThreePointersAttempted": 0,
      "ThreePointersMade": 0,
      "ThreePointersPercentage": 0,
      "TotalReboundsPercentage": 0,
      "TrueShootingAttempts": 0,
      "TrueShootingPercentage": 0,
      "TurnOversPercentage": 0,
      "Turnovers": 0,
      "TwoPointersAttempted": 0,
      "TwoPointersMade": 0,
      "TwoPointersPercentage": 0,
      "Updated": "string",
      "UsageRatePercentage": 0,
      "Wins": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Game|[Game](#schemagame)|false|none|none|
|Periods|[[Period](#schemaperiod)]|false|none|none|
|PlayerGames|[[PlayerGame](#schemaplayergame)]|false|none|none|
|TeamGames|[[TeamGame](#schemateamgame)]|false|none|none|

<h2 id="tocS_Conference">Conference</h2>
<!-- backwards compatibility -->
<a id="schemaconference"></a>
<a id="schema_Conference"></a>
<a id="tocSconference"></a>
<a id="tocsconference"></a>

```json
{
  "ConferenceID": 0,
  "Name": "string",
  "Teams": [
    {
      "Active": true,
      "ApRank": 0,
      "Conference": "string",
      "ConferenceID": 0,
      "ConferenceLosses": 0,
      "ConferenceWins": 0,
      "GlobalTeamID": 0,
      "Key": "string",
      "Losses": 0,
      "Name": "string",
      "School": "string",
      "ShortDisplayName": "string",
      "Stadium": {
        "Active": true,
        "Address": "string",
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "StadiumID": 0,
        "State": "string",
        "Zip": "string"
      },
      "TeamID": 0,
      "TeamLogoUrl": "string",
      "Wins": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceID|integer|false|none|none|
|Name|string \| null|false|none|none|
|Teams|[[Team](#schemateam)]|false|none|none|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "Attendance": 0,
  "AwayPointSpreadPayout": 0,
  "AwayRotationNumber": 0,
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTeamPreviousGameID": 0,
  "AwayTeamPreviousGlobalGameID": 0,
  "AwayTeamScore": 0,
  "AwayTeamSeed": 0,
  "BottomTeamPreviousGameId": 0,
  "Bracket": "string",
  "Channel": "string",
  "DateTime": "string",
  "DateTimeUTC": "string",
  "Day": "string",
  "GameEndDateTime": "string",
  "GameID": 0,
  "GlobalAwayTeamID": 0,
  "GlobalGameID": 0,
  "GlobalHomeTeamID": 0,
  "HomePointSpreadPayout": 0,
  "HomeRotationNumber": 0,
  "HomeTeam": "string",
  "HomeTeamID": 0,
  "HomeTeamMoneyLine": 0,
  "HomeTeamPreviousGameID": 0,
  "HomeTeamPreviousGlobalGameID": 0,
  "HomeTeamScore": 0,
  "HomeTeamSeed": 0,
  "IsClosed": true,
  "NeutralVenue": true,
  "OverPayout": 0,
  "OverUnder": 0,
  "Period": "string",
  "Periods": [
    {
      "AwayScore": 0,
      "GameID": 0,
      "HomeScore": 0,
      "Name": "string",
      "Number": 0,
      "PeriodID": 0,
      "Type": "string"
    }
  ],
  "PointSpread": 0,
  "Round": 0,
  "Season": 0,
  "SeasonType": 0,
  "Stadium": {
    "Active": true,
    "Address": "string",
    "Capacity": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "StadiumID": 0,
    "State": "string",
    "Zip": "string"
  },
  "Status": "string",
  "TimeRemainingMinutes": 0,
  "TimeRemainingSeconds": 0,
  "TopTeamPreviousGameId": 0,
  "TournamentDisplayOrder": 0,
  "TournamentDisplayOrderForHomeTeam": "string",
  "TournamentID": 0,
  "UnderPayout": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendance|integer \| null|false|none|none|
|AwayPointSpreadPayout|integer \| null|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer \| null|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamPreviousGameID|integer \| null|false|none|none|
|AwayTeamPreviousGlobalGameID|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|AwayTeamSeed|integer \| null|false|none|none|
|BottomTeamPreviousGameId|integer \| null|false|none|none|
|Bracket|string \| null|false|none|none|
|Channel|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|DateTimeUTC|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|GameEndDateTime|string \| null|false|none|none|
|GameID|integer|false|none|none|
|GlobalAwayTeamID|integer \| null|false|none|none|
|GlobalGameID|integer|false|none|none|
|GlobalHomeTeamID|integer \| null|false|none|none|
|HomePointSpreadPayout|integer \| null|false|none|none|
|HomeRotationNumber|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamID|integer \| null|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTeamPreviousGameID|integer \| null|false|none|none|
|HomeTeamPreviousGlobalGameID|integer \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|HomeTeamSeed|integer \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|Period|string \| null|false|none|none|
|Periods|[[Period](#schemaperiod)]|false|none|none|
|PointSpread|number \| null|false|none|none|
|Round|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Stadium|[Stadium](#schemastadium)|false|none|none|
|Status|string \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|
|TopTeamPreviousGameId|integer \| null|false|none|none|
|TournamentDisplayOrder|integer \| null|false|none|none|
|TournamentDisplayOrderForHomeTeam|string \| null|false|none|none|
|TournamentID|integer \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_Period">Period</h2>
<!-- backwards compatibility -->
<a id="schemaperiod"></a>
<a id="schema_Period"></a>
<a id="tocSperiod"></a>
<a id="tocsperiod"></a>

```json
{
  "AwayScore": 0,
  "GameID": 0,
  "HomeScore": 0,
  "Name": "string",
  "Number": 0,
  "PeriodID": 0,
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayScore|integer \| null|false|none|none|
|GameID|integer|false|none|none|
|HomeScore|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer|false|none|none|
|PeriodID|integer|false|none|none|
|Type|string \| null|false|none|none|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "BirthCity": "string",
  "BirthState": "string",
  "Class": "string",
  "FantasyAlarmPlayerID": 0,
  "FirstName": "string",
  "GlobalTeamID": 0,
  "Height": 0,
  "HighSchool": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "PlayerID": 0,
  "Position": "string",
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "SportRadarPlayerID": "string",
  "Team": "string",
  "TeamID": 0,
  "Weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|Class|string \| null|false|none|none|
|FantasyAlarmPlayerID|integer \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Height|integer \| null|false|none|none|
|HighSchool|string \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|RotoworldPlayerID|integer \| null|false|none|none|
|SportRadarPlayerID|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Weight|integer \| null|false|none|none|

<h2 id="tocS_PlayerGame">PlayerGame</h2>
<!-- backwards compatibility -->
<a id="schemaplayergame"></a>
<a id="schema_PlayerGame"></a>
<a id="tocSplayergame"></a>
<a id="tocsplayergame"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DateTime": "string",
  "Day": "string",
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsGameOver": true,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|integer \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|integer \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefensiveRebounds|integer \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDataSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|integer \| null|false|none|none|
|FreeThrowsMade|integer \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|integer \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|PersonalFouls|integer \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|Points|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|Rebounds|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|integer \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|integer \| null|false|none|none|
|ThreePointersMade|integer \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|integer \| null|false|none|none|
|TwoPointersAttempted|integer \| null|false|none|none|
|TwoPointersMade|integer \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|YahooPosition|string \| null|false|none|none|
|YahooSalary|integer \| null|false|none|none|

<h2 id="tocS_PlayerGameProjection">PlayerGameProjection</h2>
<!-- backwards compatibility -->
<a id="schemaplayergameprojection"></a>
<a id="schema_PlayerGameProjection"></a>
<a id="tocSplayergameprojection"></a>
<a id="tocsplayergameprojection"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DateTime": "string",
  "Day": "string",
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsGameOver": true,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|integer \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|integer \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefensiveRebounds|integer \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDataSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|integer \| null|false|none|none|
|FreeThrowsMade|integer \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|integer \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|PersonalFouls|integer \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|Points|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|Rebounds|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|integer \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|integer \| null|false|none|none|
|ThreePointersMade|integer \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|integer \| null|false|none|none|
|TwoPointersAttempted|integer \| null|false|none|none|
|TwoPointersMade|integer \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|YahooPosition|string \| null|false|none|none|
|YahooSalary|integer \| null|false|none|none|

<h2 id="tocS_PlayerSeason">PlayerSeason</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseason"></a>
<a id="schema_PlayerSeason"></a>
<a id="tocSplayerseason"></a>
<a id="tocsplayerseason"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|integer \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|integer \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DefensiveRebounds|integer \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|integer \| null|false|none|none|
|FreeThrowsMade|integer \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|integer \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|PersonalFouls|integer \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|Points|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|Rebounds|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|integer \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|integer \| null|false|none|none|
|ThreePointersMade|integer \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|integer \| null|false|none|none|
|TwoPointersAttempted|integer \| null|false|none|none|
|TwoPointersMade|integer \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
{
  "ApiSeason": "string",
  "Description": "string",
  "EndYear": 0,
  "PostSeasonStartDate": "string",
  "RegularSeasonStartDate": "string",
  "Season": 0,
  "StartYear": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiSeason|string \| null|false|none|none|
|Description|string \| null|false|none|none|
|EndYear|integer|false|none|none|
|PostSeasonStartDate|string \| null|false|none|none|
|RegularSeasonStartDate|string \| null|false|none|none|
|Season|integer|false|none|none|
|StartYear|integer|false|none|none|

<h2 id="tocS_Stadium">Stadium</h2>
<!-- backwards compatibility -->
<a id="schemastadium"></a>
<a id="schema_Stadium"></a>
<a id="tocSstadium"></a>
<a id="tocsstadium"></a>

```json
{
  "Active": true,
  "Address": "string",
  "Capacity": 0,
  "City": "string",
  "Country": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "Name": "string",
  "StadiumID": 0,
  "State": "string",
  "Zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|Address|string \| null|false|none|none|
|Capacity|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|StadiumID|integer|false|none|none|
|State|string \| null|false|none|none|
|Zip|string \| null|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "Active": true,
  "ApRank": 0,
  "Conference": "string",
  "ConferenceID": 0,
  "ConferenceLosses": 0,
  "ConferenceWins": 0,
  "GlobalTeamID": 0,
  "Key": "string",
  "Losses": 0,
  "Name": "string",
  "School": "string",
  "ShortDisplayName": "string",
  "Stadium": {
    "Active": true,
    "Address": "string",
    "Capacity": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "StadiumID": 0,
    "State": "string",
    "Zip": "string"
  },
  "TeamID": 0,
  "TeamLogoUrl": "string",
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|ApRank|integer \| null|false|none|none|
|Conference|string \| null|false|none|none|
|ConferenceID|integer \| null|false|none|none|
|ConferenceLosses|integer \| null|false|none|none|
|ConferenceWins|integer \| null|false|none|none|
|GlobalTeamID|integer|false|none|none|
|Key|string \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|School|string \| null|false|none|none|
|ShortDisplayName|string \| null|false|none|none|
|Stadium|[Stadium](#schemastadium)|false|none|none|
|TeamID|integer|false|none|none|
|TeamLogoUrl|string \| null|false|none|none|
|Wins|integer \| null|false|none|none|

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "ConferenceLosses": 0,
  "ConferenceWins": 0,
  "DateTime": "string",
  "Day": "string",
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "IsGameOver": true,
  "Losses": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "Points": 0,
  "Possessions": 0,
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|integer \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|integer \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|ConferenceLosses|integer \| null|false|none|none|
|ConferenceWins|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefensiveRebounds|integer \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|integer \| null|false|none|none|
|FreeThrowsMade|integer \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|Losses|integer \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|integer \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|PersonalFouls|integer \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|Points|integer \| null|false|none|none|
|Possessions|number \| null|false|none|none|
|Rebounds|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|integer \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|integer \| null|false|none|none|
|ThreePointersMade|integer \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|integer \| null|false|none|none|
|TwoPointersAttempted|integer \| null|false|none|none|
|TwoPointersMade|integer \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|Wins|integer \| null|false|none|none|

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "ConferenceLosses": 0,
  "ConferenceWins": 0,
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "Losses": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "Points": 0,
  "Possessions": 0,
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|integer \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|integer \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|ConferenceLosses|integer \| null|false|none|none|
|ConferenceWins|integer \| null|false|none|none|
|DefensiveRebounds|integer \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|integer \| null|false|none|none|
|FreeThrowsMade|integer \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|integer \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|PersonalFouls|integer \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|Points|integer \| null|false|none|none|
|Possessions|number \| null|false|none|none|
|Rebounds|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|integer \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|integer \| null|false|none|none|
|ThreePointersMade|integer \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|integer \| null|false|none|none|
|TwoPointersAttempted|integer \| null|false|none|none|
|TwoPointersMade|integer \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|Wins|integer \| null|false|none|none|

<h2 id="tocS_Tournament">Tournament</h2>
<!-- backwards compatibility -->
<a id="schematournament"></a>
<a id="schema_Tournament"></a>
<a id="tocStournament"></a>
<a id="tocstournament"></a>

```json
{
  "Games": [
    {
      "Attendance": 0,
      "AwayPointSpreadPayout": 0,
      "AwayRotationNumber": 0,
      "AwayTeam": "string",
      "AwayTeamID": 0,
      "AwayTeamMoneyLine": 0,
      "AwayTeamPreviousGameID": 0,
      "AwayTeamPreviousGlobalGameID": 0,
      "AwayTeamScore": 0,
      "AwayTeamSeed": 0,
      "BottomTeamPreviousGameId": 0,
      "Bracket": "string",
      "Channel": "string",
      "DateTime": "string",
      "DateTimeUTC": "string",
      "Day": "string",
      "GameEndDateTime": "string",
      "GameID": 0,
      "GlobalAwayTeamID": 0,
      "GlobalGameID": 0,
      "GlobalHomeTeamID": 0,
      "HomePointSpreadPayout": 0,
      "HomeRotationNumber": 0,
      "HomeTeam": "string",
      "HomeTeamID": 0,
      "HomeTeamMoneyLine": 0,
      "HomeTeamPreviousGameID": 0,
      "HomeTeamPreviousGlobalGameID": 0,
      "HomeTeamScore": 0,
      "HomeTeamSeed": 0,
      "IsClosed": true,
      "NeutralVenue": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "Periods": [
        {
          "AwayScore": 0,
          "GameID": 0,
          "HomeScore": 0,
          "Name": "string",
          "Number": 0,
          "PeriodID": 0,
          "Type": "string"
        }
      ],
      "PointSpread": 0,
      "Round": 0,
      "Season": 0,
      "SeasonType": 0,
      "Stadium": {
        "Active": true,
        "Address": "string",
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "StadiumID": 0,
        "State": "string",
        "Zip": "string"
      },
      "Status": "string",
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0,
      "TopTeamPreviousGameId": 0,
      "TournamentDisplayOrder": 0,
      "TournamentDisplayOrderForHomeTeam": "string",
      "TournamentID": 0,
      "UnderPayout": 0,
      "Updated": "string"
    }
  ],
  "LeftBottomBracketConference": "string",
  "LeftTopBracketConference": "string",
  "Location": "string",
  "Name": "string",
  "RightBottomBracketConference": "string",
  "RightTopBracketConference": "string",
  "Season": 0,
  "TournamentID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Games|[[Game](#schemagame)]|false|none|none|
|LeftBottomBracketConference|string \| null|false|none|none|
|LeftTopBracketConference|string \| null|false|none|none|
|Location|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|RightBottomBracketConference|string \| null|false|none|none|
|RightTopBracketConference|string \| null|false|none|none|
|Season|integer|false|none|none|
|TournamentID|integer|false|none|none|
