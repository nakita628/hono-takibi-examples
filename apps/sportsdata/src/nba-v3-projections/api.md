<h1 id="nba-v3-projections">NBA v3 Projections v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nba/projections">http://azure-api.sportsdata.io/v3/nba/projections</a>

* <a href="https://azure-api.sportsdata.io/v3/nba/projections">https://azure-api.sportsdata.io/v3/nba/projections</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nba-v3-projections-default">Default</h1>

## Depth Charts

<a id="opIdDepthCharts"></a>

> Code samples

```bash
curl https://example.com/XML/DepthCharts \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DepthCharts`

This endpoint provides a depth chart for each NBA team.

<h3 id="depth-charts-parameters">Parameters</h3>

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
    "DepthCharts": [
      {
        "DepthChartID": 0,
        "DepthOrder": 0,
        "Name": "string",
        "PlayerID": 0,
        "Position": "string",
        "PositionCategory": "string",
        "TeamID": 0,
        "Updated": "string"
      }
    ],
    "TeamID": 0
  }
]
```

<h3 id="depth-charts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="depth-charts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamDepthChart](#schemateamdepthchart)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## DFS Slates by Date

<a id="opIdDfsSlatesByDate"></a>

> Code samples

```bash
curl https://example.com/XML/DfsSlatesByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DfsSlatesByDate/{date}`

<h3 id="dfs-slates-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.|

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
    "DfsSlateGames": [
      {
        "Game": {
          "AlternateID": 0,
          "Attendance": 0,
          "AwayRotationNumber": 0,
          "AwayTeam": "string",
          "AwayTeamID": 0,
          "AwayTeamMoneyLine": 0,
          "AwayTeamScore": 0,
          "Channel": "string",
          "CrewChiefID": 0,
          "DateTime": "string",
          "DateTimeUTC": "string",
          "Day": "string",
          "GameEndDateTime": "string",
          "GameID": 0,
          "GlobalAwayTeamID": 0,
          "GlobalGameID": 0,
          "GlobalHomeTeamID": 0,
          "HomeRotationNumber": 0,
          "HomeTeam": "string",
          "HomeTeamID": 0,
          "HomeTeamMoneyLine": 0,
          "HomeTeamScore": 0,
          "IsClosed": true,
          "LastPlay": "string",
          "NeutralVenue": true,
          "OverPayout": 0,
          "OverUnder": 0,
          "PointSpread": 0,
          "PointSpreadAwayTeamMoneyLine": 0,
          "PointSpreadHomeTeamMoneyLine": 0,
          "Quarter": "string",
          "Quarters": [
            {
              "AwayScore": 0,
              "GameID": 0,
              "HomeScore": 0,
              "Name": "string",
              "Number": 0,
              "QuarterID": 0
            }
          ],
          "RefereeID": 0,
          "Season": 0,
          "SeasonType": 0,
          "SeriesInfo": {
            "AwayTeamWins": 0,
            "GameNumber": 0,
            "HomeTeamWins": 0,
            "MaxLength": 0
          },
          "StadiumID": 0,
          "Status": "string",
          "TimeRemainingMinutes": 0,
          "TimeRemainingSeconds": 0,
          "UmpireID": 0,
          "UnderPayout": 0,
          "Updated": "string"
        },
        "GameID": 0,
        "OperatorGameID": 0,
        "RemovedByOperator": true,
        "SlateGameID": 0,
        "SlateID": 0
      }
    ],
    "DfsSlatePlayers": [
      {
        "OperatorPlayerID": "string",
        "OperatorPlayerName": "string",
        "OperatorPosition": "string",
        "OperatorRosterSlots": [
          "string"
        ],
        "OperatorSalary": 0,
        "OperatorSlatePlayerID": "string",
        "PlayerGameProjectionStatID": 0,
        "PlayerID": 0,
        "RemovedByOperator": true,
        "SlateGameID": 0,
        "SlateID": 0,
        "SlatePlayerID": 0,
        "Team": "string",
        "TeamID": 0
      }
    ],
    "IsMultiDaySlate": true,
    "NumberOfGames": 0,
    "Operator": "string",
    "OperatorDay": "string",
    "OperatorGameType": "string",
    "OperatorName": "string",
    "OperatorSlateID": 0,
    "OperatorStartTime": "string",
    "RemovedByOperator": true,
    "SalaryCap": 0,
    "SlateID": 0,
    "SlateRosterSlots": [
      "string"
    ]
  }
]
```

<h3 id="dfs-slates-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dfs-slates-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DfsSlate](#schemadfsslate)]|false|none|none|

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

This endpoint provides all currently injured NBA players, along with injury details.

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
    "BirthCountry": "string",
    "BirthDate": "string",
    "BirthState": "string",
    "College": "string",
    "DepthChartOrder": 0,
    "DepthChartPosition": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "Experience": 0,
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyAlarmPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
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
    "NbaDotComPlayerID": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "Salary": 0,
    "SportRadarPlayerID": "string",
    "SportsDataID": "string",
    "SportsDirectPlayerID": 0,
    "StatsPlayerID": 0,
    "Status": "string",
    "Team": "string",
    "TeamID": 0,
    "UsaTodayHeadshotNoBackgroundUpdated": "string",
    "UsaTodayHeadshotNoBackgroundUrl": "string",
    "UsaTodayHeadshotUpdated": "string",
    "UsaTodayHeadshotUrl": "string",
    "UsaTodayPlayerID": 0,
    "Weight": 0,
    "XmlTeamPlayerID": 0,
    "YahooName": "string",
    "YahooPlayerID": 0
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

## Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByDateWInjuriesDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByDate/{date}`

<h3 id="projected-player-game-stats-by-date-w-injuries-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.|

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
    "DoubleDoubles": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
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
    "IsClosed": true,
    "IsGameOver": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
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
    "PlusMinus": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "Started": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
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

<h3 id="projected-player-game-stats-by-date-w-injuries-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-date-w-injuries-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}`

<h3 id="projected-player-game-stats-by-player-w-injuries-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.|
|playerid|path|string|true|Unique FantasyData Player ID. Example:<code>20000571</code>.|

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
  "DoubleDoubles": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
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
  "IsClosed": true,
  "IsGameOver": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
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
  "PlusMinus": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "Started": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
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

<h3 id="projected-player-game-stats-by-player-w-injuries-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerGameProjection](#schemaplayergameprojection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats

<a id="opIdProjectedPlayerSeasonStats"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStats/{season}`

<h3 id="projected-player-season-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.|

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
    "DoubleDoubles": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "IsClosed": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "PlusMinus": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "Started": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
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

<h3 id="projected-player-season-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-season-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeasonProjection](#schemaplayerseasonprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats by Player

<a id="opIdProjectedPlayerSeasonStatsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStatsByPlayer/{season}/{playerid}`

<h3 id="projected-player-season-stats-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.|
|playerid|path|string|true|Unique FantasyData Player ID. Example:<code>20000571</code>.|

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
  "DoubleDoubles": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "IsClosed": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "PlusMinus": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "Started": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
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

<h3 id="projected-player-season-stats-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerSeasonProjection](#schemaplayerseasonprojection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats by Team

<a id="opIdProjectedPlayerSeasonStatsByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStatsByTeam/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}`

<h3 id="projected-player-season-stats-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.|
|team|path|string|true|The abbreviation of the requested team.<br><br>Examples: <code>MIA</code>, <code>PHI</code>.|

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
    "DoubleDoubles": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "IsClosed": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlayerID": 0,
    "PlusMinus": 0,
    "Points": 0,
    "Position": "string",
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "Started": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
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

<h3 id="projected-player-season-stats-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-season-stats-by-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeasonProjection](#schemaplayerseasonprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Starting Lineups by Date

<a id="opIdStartingLineupsByDate"></a>

> Code samples

```bash
curl https://example.com/XML/StartingLineupsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/StartingLineupsByDate/{date}`

This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.

<h3 id="starting-lineups-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s). <br> Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.|

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
    "AwayLineup": [
      {
        "Confirmed": true,
        "FirstName": "string",
        "LastName": "string",
        "PlayerID": 0,
        "Position": "string",
        "Starting": true,
        "Team": "string",
        "TeamID": 0
      }
    ],
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "DateTime": "string",
    "Day": "string",
    "GameID": 0,
    "HomeLineup": [
      {
        "Confirmed": true,
        "FirstName": "string",
        "LastName": "string",
        "PlayerID": 0,
        "Position": "string",
        "Starting": true,
        "Team": "string",
        "TeamID": 0
      }
    ],
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string"
  }
]
```

<h3 id="starting-lineups-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="starting-lineups-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StartingLineups](#schemastartinglineups)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_DepthChart">DepthChart</h2>
<!-- backwards compatibility -->
<a id="schemadepthchart"></a>
<a id="schema_DepthChart"></a>
<a id="tocSdepthchart"></a>
<a id="tocsdepthchart"></a>

```json
{
  "DepthChartID": 0,
  "DepthOrder": 0,
  "Name": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "TeamID": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DepthChartID|integer|false|none|none|
|DepthOrder|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|TeamID|integer|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_DfsSlate">DfsSlate</h2>
<!-- backwards compatibility -->
<a id="schemadfsslate"></a>
<a id="schema_DfsSlate"></a>
<a id="tocSdfsslate"></a>
<a id="tocsdfsslate"></a>

```json
{
  "DfsSlateGames": [
    {
      "Game": {
        "AlternateID": 0,
        "Attendance": 0,
        "AwayRotationNumber": 0,
        "AwayTeam": "string",
        "AwayTeamID": 0,
        "AwayTeamMoneyLine": 0,
        "AwayTeamScore": 0,
        "Channel": "string",
        "CrewChiefID": 0,
        "DateTime": "string",
        "DateTimeUTC": "string",
        "Day": "string",
        "GameEndDateTime": "string",
        "GameID": 0,
        "GlobalAwayTeamID": 0,
        "GlobalGameID": 0,
        "GlobalHomeTeamID": 0,
        "HomeRotationNumber": 0,
        "HomeTeam": "string",
        "HomeTeamID": 0,
        "HomeTeamMoneyLine": 0,
        "HomeTeamScore": 0,
        "IsClosed": true,
        "LastPlay": "string",
        "NeutralVenue": true,
        "OverPayout": 0,
        "OverUnder": 0,
        "PointSpread": 0,
        "PointSpreadAwayTeamMoneyLine": 0,
        "PointSpreadHomeTeamMoneyLine": 0,
        "Quarter": "string",
        "Quarters": [
          {
            "AwayScore": 0,
            "GameID": 0,
            "HomeScore": 0,
            "Name": "string",
            "Number": 0,
            "QuarterID": 0
          }
        ],
        "RefereeID": 0,
        "Season": 0,
        "SeasonType": 0,
        "SeriesInfo": {
          "AwayTeamWins": 0,
          "GameNumber": 0,
          "HomeTeamWins": 0,
          "MaxLength": 0
        },
        "StadiumID": 0,
        "Status": "string",
        "TimeRemainingMinutes": 0,
        "TimeRemainingSeconds": 0,
        "UmpireID": 0,
        "UnderPayout": 0,
        "Updated": "string"
      },
      "GameID": 0,
      "OperatorGameID": 0,
      "RemovedByOperator": true,
      "SlateGameID": 0,
      "SlateID": 0
    }
  ],
  "DfsSlatePlayers": [
    {
      "OperatorPlayerID": "string",
      "OperatorPlayerName": "string",
      "OperatorPosition": "string",
      "OperatorRosterSlots": [
        "string"
      ],
      "OperatorSalary": 0,
      "OperatorSlatePlayerID": "string",
      "PlayerGameProjectionStatID": 0,
      "PlayerID": 0,
      "RemovedByOperator": true,
      "SlateGameID": 0,
      "SlateID": 0,
      "SlatePlayerID": 0,
      "Team": "string",
      "TeamID": 0
    }
  ],
  "IsMultiDaySlate": true,
  "NumberOfGames": 0,
  "Operator": "string",
  "OperatorDay": "string",
  "OperatorGameType": "string",
  "OperatorName": "string",
  "OperatorSlateID": 0,
  "OperatorStartTime": "string",
  "RemovedByOperator": true,
  "SalaryCap": 0,
  "SlateID": 0,
  "SlateRosterSlots": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DfsSlateGames|[[DfsSlateGame](#schemadfsslategame)]|false|none|none|
|DfsSlatePlayers|[[DfsSlatePlayer](#schemadfsslateplayer)]|false|none|none|
|IsMultiDaySlate|boolean \| null|false|none|none|
|NumberOfGames|integer \| null|false|none|none|
|Operator|string \| null|false|none|none|
|OperatorDay|string \| null|false|none|none|
|OperatorGameType|string \| null|false|none|none|
|OperatorName|string \| null|false|none|none|
|OperatorSlateID|integer \| null|false|none|none|
|OperatorStartTime|string \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|SalaryCap|integer \| null|false|none|none|
|SlateID|integer|false|none|none|
|SlateRosterSlots|[string \| null]|false|none|none|

<h2 id="tocS_DfsSlateGame">DfsSlateGame</h2>
<!-- backwards compatibility -->
<a id="schemadfsslategame"></a>
<a id="schema_DfsSlateGame"></a>
<a id="tocSdfsslategame"></a>
<a id="tocsdfsslategame"></a>

```json
{
  "Game": {
    "AlternateID": 0,
    "Attendance": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamScore": 0,
    "Channel": "string",
    "CrewChiefID": 0,
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamScore": 0,
    "IsClosed": true,
    "LastPlay": "string",
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
    "Quarter": "string",
    "Quarters": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "QuarterID": 0
      }
    ],
    "RefereeID": 0,
    "Season": 0,
    "SeasonType": 0,
    "SeriesInfo": {
      "AwayTeamWins": 0,
      "GameNumber": 0,
      "HomeTeamWins": 0,
      "MaxLength": 0
    },
    "StadiumID": 0,
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "UmpireID": 0,
    "UnderPayout": 0,
    "Updated": "string"
  },
  "GameID": 0,
  "OperatorGameID": 0,
  "RemovedByOperator": true,
  "SlateGameID": 0,
  "SlateID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Game|[Game](#schemagame)|false|none|none|
|GameID|integer \| null|false|none|none|
|OperatorGameID|integer \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|SlateGameID|integer|false|none|none|
|SlateID|integer|false|none|none|

<h2 id="tocS_DfsSlatePlayer">DfsSlatePlayer</h2>
<!-- backwards compatibility -->
<a id="schemadfsslateplayer"></a>
<a id="schema_DfsSlatePlayer"></a>
<a id="tocSdfsslateplayer"></a>
<a id="tocsdfsslateplayer"></a>

```json
{
  "OperatorPlayerID": "string",
  "OperatorPlayerName": "string",
  "OperatorPosition": "string",
  "OperatorRosterSlots": [
    "string"
  ],
  "OperatorSalary": 0,
  "OperatorSlatePlayerID": "string",
  "PlayerGameProjectionStatID": 0,
  "PlayerID": 0,
  "RemovedByOperator": true,
  "SlateGameID": 0,
  "SlateID": 0,
  "SlatePlayerID": 0,
  "Team": "string",
  "TeamID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatorPlayerID|string \| null|false|none|none|
|OperatorPlayerName|string \| null|false|none|none|
|OperatorPosition|string \| null|false|none|none|
|OperatorRosterSlots|[string \| null]|false|none|none|
|OperatorSalary|integer \| null|false|none|none|
|OperatorSlatePlayerID|string \| null|false|none|none|
|PlayerGameProjectionStatID|integer \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|SlateGameID|integer \| null|false|none|none|
|SlateID|integer|false|none|none|
|SlatePlayerID|integer|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "AlternateID": 0,
  "Attendance": 0,
  "AwayRotationNumber": 0,
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTeamScore": 0,
  "Channel": "string",
  "CrewChiefID": 0,
  "DateTime": "string",
  "DateTimeUTC": "string",
  "Day": "string",
  "GameEndDateTime": "string",
  "GameID": 0,
  "GlobalAwayTeamID": 0,
  "GlobalGameID": 0,
  "GlobalHomeTeamID": 0,
  "HomeRotationNumber": 0,
  "HomeTeam": "string",
  "HomeTeamID": 0,
  "HomeTeamMoneyLine": 0,
  "HomeTeamScore": 0,
  "IsClosed": true,
  "LastPlay": "string",
  "NeutralVenue": true,
  "OverPayout": 0,
  "OverUnder": 0,
  "PointSpread": 0,
  "PointSpreadAwayTeamMoneyLine": 0,
  "PointSpreadHomeTeamMoneyLine": 0,
  "Quarter": "string",
  "Quarters": [
    {
      "AwayScore": 0,
      "GameID": 0,
      "HomeScore": 0,
      "Name": "string",
      "Number": 0,
      "QuarterID": 0
    }
  ],
  "RefereeID": 0,
  "Season": 0,
  "SeasonType": 0,
  "SeriesInfo": {
    "AwayTeamWins": 0,
    "GameNumber": 0,
    "HomeTeamWins": 0,
    "MaxLength": 0
  },
  "StadiumID": 0,
  "Status": "string",
  "TimeRemainingMinutes": 0,
  "TimeRemainingSeconds": 0,
  "UmpireID": 0,
  "UnderPayout": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlternateID|integer \| null|false|none|none|
|Attendance|integer \| null|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|Channel|string \| null|false|none|none|
|CrewChiefID|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|DateTimeUTC|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|GameEndDateTime|string \| null|false|none|none|
|GameID|integer|false|none|none|
|GlobalAwayTeamID|integer|false|none|none|
|GlobalGameID|integer|false|none|none|
|GlobalHomeTeamID|integer|false|none|none|
|HomeRotationNumber|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamID|integer|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|LastPlay|string \| null|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|PointSpreadAwayTeamMoneyLine|integer \| null|false|none|none|
|PointSpreadHomeTeamMoneyLine|integer \| null|false|none|none|
|Quarter|string \| null|false|none|none|
|Quarters|[[Quarter](#schemaquarter)]|false|none|none|
|RefereeID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SeriesInfo|[Series](#schemaseries)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|
|UmpireID|integer \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_Lineup">Lineup</h2>
<!-- backwards compatibility -->
<a id="schemalineup"></a>
<a id="schema_Lineup"></a>
<a id="tocSlineup"></a>
<a id="tocslineup"></a>

```json
{
  "Confirmed": true,
  "FirstName": "string",
  "LastName": "string",
  "PlayerID": 0,
  "Position": "string",
  "Starting": true,
  "Team": "string",
  "TeamID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Confirmed|boolean \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|LastName|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|Starting|boolean \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer|false|none|none|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "BirthCity": "string",
  "BirthCountry": "string",
  "BirthDate": "string",
  "BirthState": "string",
  "College": "string",
  "DepthChartOrder": 0,
  "DepthChartPosition": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "Experience": 0,
  "FanDuelName": "string",
  "FanDuelPlayerID": 0,
  "FantasyAlarmPlayerID": 0,
  "FantasyDraftName": "string",
  "FantasyDraftPlayerID": 0,
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
  "NbaDotComPlayerID": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "Salary": 0,
  "SportRadarPlayerID": "string",
  "SportsDataID": "string",
  "SportsDirectPlayerID": 0,
  "StatsPlayerID": 0,
  "Status": "string",
  "Team": "string",
  "TeamID": 0,
  "UsaTodayHeadshotNoBackgroundUpdated": "string",
  "UsaTodayHeadshotNoBackgroundUrl": "string",
  "UsaTodayHeadshotUpdated": "string",
  "UsaTodayHeadshotUrl": "string",
  "UsaTodayPlayerID": 0,
  "Weight": 0,
  "XmlTeamPlayerID": 0,
  "YahooName": "string",
  "YahooPlayerID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthCountry|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|College|string \| null|false|none|none|
|DepthChartOrder|integer \| null|false|none|none|
|DepthChartPosition|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|Experience|integer \| null|false|none|none|
|FanDuelName|string \| null|false|none|none|
|FanDuelPlayerID|integer \| null|false|none|none|
|FantasyAlarmPlayerID|integer \| null|false|none|none|
|FantasyDraftName|string \| null|false|none|none|
|FantasyDraftPlayerID|integer \| null|false|none|none|
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
|NbaDotComPlayerID|integer \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|RotoworldPlayerID|integer \| null|false|none|none|
|Salary|integer \| null|false|none|none|
|SportRadarPlayerID|string \| null|false|none|none|
|SportsDataID|string \| null|false|none|none|
|SportsDirectPlayerID|integer \| null|false|none|none|
|StatsPlayerID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUpdated|string \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUrl|string \| null|false|none|none|
|UsaTodayHeadshotUpdated|string \| null|false|none|none|
|UsaTodayHeadshotUrl|string \| null|false|none|none|
|UsaTodayPlayerID|integer \| null|false|none|none|
|Weight|integer \| null|false|none|none|
|XmlTeamPlayerID|integer \| null|false|none|none|
|YahooName|string \| null|false|none|none|
|YahooPlayerID|integer \| null|false|none|none|

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
  "DoubleDoubles": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
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
  "IsClosed": true,
  "IsGameOver": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
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
  "PlusMinus": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "Started": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
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
|Assists|number \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefensiveRebounds|number \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DoubleDoubles|number \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDataSalary|integer \| null|false|none|none|
|FantasyDraftPosition|string \| null|false|none|none|
|FantasyDraftSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|number \| null|false|none|none|
|FreeThrowsMade|number \| null|false|none|none|
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
|IsClosed|boolean|false|none|none|
|IsGameOver|boolean|false|none|none|
|LineupConfirmed|boolean \| null|false|none|none|
|LineupStatus|string \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|number \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|PersonalFouls|number \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PlusMinus|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|Position|string \| null|false|none|none|
|Rebounds|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Seconds|integer \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|number \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|number \| null|false|none|none|
|ThreePointersMade|number \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TripleDoubles|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|number \| null|false|none|none|
|TwoPointersAttempted|number \| null|false|none|none|
|TwoPointersMade|number \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|YahooPosition|string \| null|false|none|none|
|YahooSalary|integer \| null|false|none|none|

<h2 id="tocS_PlayerSeasonProjection">PlayerSeasonProjection</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseasonprojection"></a>
<a id="schema_PlayerSeasonProjection"></a>
<a id="tocSplayerseasonprojection"></a>
<a id="tocsplayerseasonprojection"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DoubleDoubles": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "IsClosed": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlayerID": 0,
  "PlusMinus": 0,
  "Points": 0,
  "Position": "string",
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "Started": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
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
|Assists|number \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DefensiveRebounds|number \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DoubleDoubles|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|number \| null|false|none|none|
|FreeThrowsMade|number \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|LineupConfirmed|boolean \| null|false|none|none|
|LineupStatus|string \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|number \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|PersonalFouls|number \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PlusMinus|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|Position|string \| null|false|none|none|
|Rebounds|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Seconds|integer \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|number \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|number \| null|false|none|none|
|ThreePointersMade|number \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TripleDoubles|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|number \| null|false|none|none|
|TwoPointersAttempted|number \| null|false|none|none|
|TwoPointersMade|number \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|

<h2 id="tocS_Quarter">Quarter</h2>
<!-- backwards compatibility -->
<a id="schemaquarter"></a>
<a id="schema_Quarter"></a>
<a id="tocSquarter"></a>
<a id="tocsquarter"></a>

```json
{
  "AwayScore": 0,
  "GameID": 0,
  "HomeScore": 0,
  "Name": "string",
  "Number": 0,
  "QuarterID": 0
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
|QuarterID|integer|false|none|none|

<h2 id="tocS_Series">Series</h2>
<!-- backwards compatibility -->
<a id="schemaseries"></a>
<a id="schema_Series"></a>
<a id="tocSseries"></a>
<a id="tocsseries"></a>

```json
{
  "AwayTeamWins": 0,
  "GameNumber": 0,
  "HomeTeamWins": 0,
  "MaxLength": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayTeamWins|integer|false|none|none|
|GameNumber|integer|false|none|none|
|HomeTeamWins|integer|false|none|none|
|MaxLength|integer|false|none|none|

<h2 id="tocS_StartingLineups">StartingLineups</h2>
<!-- backwards compatibility -->
<a id="schemastartinglineups"></a>
<a id="schema_StartingLineups"></a>
<a id="tocSstartinglineups"></a>
<a id="tocsstartinglineups"></a>

```json
{
  "AwayLineup": [
    {
      "Confirmed": true,
      "FirstName": "string",
      "LastName": "string",
      "PlayerID": 0,
      "Position": "string",
      "Starting": true,
      "Team": "string",
      "TeamID": 0
    }
  ],
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "DateTime": "string",
  "Day": "string",
  "GameID": 0,
  "HomeLineup": [
    {
      "Confirmed": true,
      "FirstName": "string",
      "LastName": "string",
      "PlayerID": 0,
      "Position": "string",
      "Starting": true,
      "Team": "string",
      "TeamID": 0
    }
  ],
  "HomeTeam": "string",
  "HomeTeamID": 0,
  "Season": 0,
  "SeasonType": 0,
  "Status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayLineup|[[Lineup](#schemalineup)]|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|GameID|integer|false|none|none|
|HomeLineup|[[Lineup](#schemalineup)]|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Status|string \| null|false|none|none|

<h2 id="tocS_TeamDepthChart">TeamDepthChart</h2>
<!-- backwards compatibility -->
<a id="schemateamdepthchart"></a>
<a id="schema_TeamDepthChart"></a>
<a id="tocSteamdepthchart"></a>
<a id="tocsteamdepthchart"></a>

```json
{
  "DepthCharts": [
    {
      "DepthChartID": 0,
      "DepthOrder": 0,
      "Name": "string",
      "PlayerID": 0,
      "Position": "string",
      "PositionCategory": "string",
      "TeamID": 0,
      "Updated": "string"
    }
  ],
  "TeamID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DepthCharts|[[DepthChart](#schemadepthchart)]|false|none|none|
|TeamID|integer|false|none|none|
