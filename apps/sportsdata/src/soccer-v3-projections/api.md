<h1 id="soccer-v3-projections">Soccer v3 Projections v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/soccer/projections">http://azure-api.sportsdata.io/v3/soccer/projections</a>

* <a href="https://azure-api.sportsdata.io/v3/soccer/projections">https://azure-api.sportsdata.io/v3/soccer/projections</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="soccer-v3-projections-default">Default</h1>

## Dfs Slates By Date

<a id="opIdDfsSlatesByDate"></a>

> Code samples

```bash
curl https://example.com/json/DfsSlatesByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DfsSlatesByDate/{date}`

<h3 id="dfs-slates-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2020-02-18</code><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "CompetitionId": 0,
    "DfsSlateGames": [
      {
        "Game": {
          "Attendance": 0,
          "AwayTeamCountryCode": "string",
          "AwayTeamFormation": "string",
          "AwayTeamId": 0,
          "AwayTeamKey": "string",
          "AwayTeamMoneyLine": 0,
          "AwayTeamName": "string",
          "AwayTeamPointSpreadPayout": 0,
          "AwayTeamScore": 0,
          "AwayTeamScoreExtraTime": 0,
          "AwayTeamScorePenalty": 0,
          "AwayTeamScorePeriod1": 0,
          "AwayTeamScorePeriod2": 0,
          "Clock": 0,
          "ClockDisplay": "string",
          "ClockExtra": 0,
          "DateTime": "string",
          "Day": "string",
          "DrawMoneyLine": 0,
          "GameId": 0,
          "GlobalAwayTeamId": 0,
          "GlobalGameId": 0,
          "GlobalHomeTeamId": 0,
          "Group": "string",
          "HomeTeamCountryCode": "string",
          "HomeTeamFormation": "string",
          "HomeTeamId": 0,
          "HomeTeamKey": "string",
          "HomeTeamMoneyLine": 0,
          "HomeTeamName": "string",
          "HomeTeamPointSpreadPayout": 0,
          "HomeTeamScore": 0,
          "HomeTeamScoreExtraTime": 0,
          "HomeTeamScorePenalty": 0,
          "HomeTeamScorePeriod1": 0,
          "HomeTeamScorePeriod2": 0,
          "IsClosed": true,
          "OverPayout": 0,
          "OverUnder": 0,
          "Period": "string",
          "PlayoffAggregateScore": {
            "Created": "string",
            "TeamA_AggregateScore": 0,
            "TeamA_Id": 0,
            "TeamB_AggregateScore": 0,
            "TeamB_Id": 0,
            "Updated": "string",
            "WinningTeamId": 0
          },
          "PointSpread": 0,
          "RoundId": 0,
          "Season": 0,
          "SeasonType": 0,
          "Status": "string",
          "UnderPayout": 0,
          "Updated": "string",
          "UpdatedUtc": "string",
          "VenueId": 0,
          "VenueType": "string",
          "Week": 0,
          "Winner": "string"
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

## Injured Players By Competition

<a id="opIdInjuredPlayersByCompetition"></a>

> Code samples

```bash
curl https://example.com/xml/InjuredPlayers/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/InjuredPlayers/{competition}`

This endpoint provides all currently injured soccer players by competition, along with injury details.

<h3 id="injured-players-by-competition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competition|path|string|true|An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "BirthCity": "string",
    "BirthCountry": "string",
    "BirthDate": "string",
    "CommonName": "string",
    "DraftKingsPosition": "string",
    "FirstName": "string",
    "Foot": "string",
    "Gender": "string",
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "Nationality": "string",
    "PhotoUrl": "string",
    "PlayerId": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RotoWirePlayerID": 0,
    "ShortName": "string",
    "Updated": "string",
    "UsaTodayHeadshotNoBackgroundUpdated": "string",
    "UsaTodayHeadshotNoBackgroundUrl": "string",
    "UsaTodayHeadshotUpdated": "string",
    "UsaTodayHeadshotUrl": "string",
    "UsaTodayPlayerID": 0,
    "Weight": 0
  }
]
```

<h3 id="injured-players-by-competition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="injured-players-by-competition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Competition (w/ DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByCompetitionWDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/xml/PlayerGameProjectionStatsByCompetition/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}`

<h3 id="projected-player-game-stats-by-competition-w-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competition|path|string|true|An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "BlockedShots": 0,
    "Captain": true,
    "CornersWon": 0,
    "Crosses": 0,
    "DateTime": "string",
    "Day": "string",
    "DefenderCleanSheets": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsMondogoal": 0,
    "FantasyPointsYahoo": 0,
    "Fouled": 0,
    "Fouls": 0,
    "GameId": 0,
    "Games": 0,
    "GlobalGameId": 0,
    "GlobalOpponentId": 0,
    "GlobalTeamId": 0,
    "GoalkeeperCleanSheets": 0,
    "GoalkeeperGoalsAgainst": 0,
    "GoalkeeperSaves": 0,
    "GoalkeeperSingleGoalAgainst": 0,
    "GoalkeeperWins": 0,
    "Goals": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Interceptions": 0,
    "IsGameOver": true,
    "Jersey": 0,
    "LastManTackle": 0,
    "Minutes": 0,
    "MondogoalPosition": "string",
    "MondogoalSalary": 0,
    "Name": "string",
    "Offsides": 0,
    "Opponent": "string",
    "OpponentId": 0,
    "OpponentScore": 0,
    "OwnGoals": 0,
    "Passes": 0,
    "PassesCompleted": 0,
    "PenaltiesConceded": 0,
    "PenaltiesWon": 0,
    "PenaltyKickGoals": 0,
    "PenaltyKickMisses": 0,
    "PenaltyKickSaves": 0,
    "PlayerId": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RedCards": 0,
    "RoundId": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "Shots": 0,
    "ShotsOnGoal": 0,
    "Started": 0,
    "StatId": 0,
    "Suspension": true,
    "SuspensionReason": "string",
    "Tackles": 0,
    "TacklesWon": 0,
    "Team": "string",
    "TeamId": 0,
    "Touches": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "YahooPosition": "string",
    "YahooSalary": 0,
    "YellowCards": 0,
    "YellowRedCards": 0
  }
]
```

<h3 id="projected-player-game-stats-by-competition-w-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-competition-w-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Date (w/ DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByDateWDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/xml/PlayerGameProjectionStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByDate/{date}`

<h3 id="projected-player-game-stats-by-date-w-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "BlockedShots": 0,
    "Captain": true,
    "CornersWon": 0,
    "Crosses": 0,
    "DateTime": "string",
    "Day": "string",
    "DefenderCleanSheets": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsMondogoal": 0,
    "FantasyPointsYahoo": 0,
    "Fouled": 0,
    "Fouls": 0,
    "GameId": 0,
    "Games": 0,
    "GlobalGameId": 0,
    "GlobalOpponentId": 0,
    "GlobalTeamId": 0,
    "GoalkeeperCleanSheets": 0,
    "GoalkeeperGoalsAgainst": 0,
    "GoalkeeperSaves": 0,
    "GoalkeeperSingleGoalAgainst": 0,
    "GoalkeeperWins": 0,
    "Goals": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Interceptions": 0,
    "IsGameOver": true,
    "Jersey": 0,
    "LastManTackle": 0,
    "Minutes": 0,
    "MondogoalPosition": "string",
    "MondogoalSalary": 0,
    "Name": "string",
    "Offsides": 0,
    "Opponent": "string",
    "OpponentId": 0,
    "OpponentScore": 0,
    "OwnGoals": 0,
    "Passes": 0,
    "PassesCompleted": 0,
    "PenaltiesConceded": 0,
    "PenaltiesWon": 0,
    "PenaltyKickGoals": 0,
    "PenaltyKickMisses": 0,
    "PenaltyKickSaves": 0,
    "PlayerId": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RedCards": 0,
    "RoundId": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "Shots": 0,
    "ShotsOnGoal": 0,
    "Started": 0,
    "StatId": 0,
    "Suspension": true,
    "SuspensionReason": "string",
    "Tackles": 0,
    "TacklesWon": 0,
    "Team": "string",
    "TeamId": 0,
    "Touches": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "YahooPosition": "string",
    "YahooSalary": 0,
    "YellowCards": 0,
    "YellowRedCards": 0
  }
]
```

<h3 id="projected-player-game-stats-by-date-w-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-date-w-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Player (w/ DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByPlayerWDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/xml/PlayerGameProjectionStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}`

<h3 id="projected-player-game-stats-by-player-w-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>90026231</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "Assists": 0,
    "BlockedShots": 0,
    "Captain": true,
    "CornersWon": 0,
    "Crosses": 0,
    "DateTime": "string",
    "Day": "string",
    "DefenderCleanSheets": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsMondogoal": 0,
    "FantasyPointsYahoo": 0,
    "Fouled": 0,
    "Fouls": 0,
    "GameId": 0,
    "Games": 0,
    "GlobalGameId": 0,
    "GlobalOpponentId": 0,
    "GlobalTeamId": 0,
    "GoalkeeperCleanSheets": 0,
    "GoalkeeperGoalsAgainst": 0,
    "GoalkeeperSaves": 0,
    "GoalkeeperSingleGoalAgainst": 0,
    "GoalkeeperWins": 0,
    "Goals": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Interceptions": 0,
    "IsGameOver": true,
    "Jersey": 0,
    "LastManTackle": 0,
    "Minutes": 0,
    "MondogoalPosition": "string",
    "MondogoalSalary": 0,
    "Name": "string",
    "Offsides": 0,
    "Opponent": "string",
    "OpponentId": 0,
    "OpponentScore": 0,
    "OwnGoals": 0,
    "Passes": 0,
    "PassesCompleted": 0,
    "PenaltiesConceded": 0,
    "PenaltiesWon": 0,
    "PenaltyKickGoals": 0,
    "PenaltyKickMisses": 0,
    "PenaltyKickSaves": 0,
    "PlayerId": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RedCards": 0,
    "RoundId": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "Shots": 0,
    "ShotsOnGoal": 0,
    "Started": 0,
    "StatId": 0,
    "Suspension": true,
    "SuspensionReason": "string",
    "Tackles": 0,
    "TacklesWon": 0,
    "Team": "string",
    "TeamId": 0,
    "Touches": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "YahooPosition": "string",
    "YahooSalary": 0,
    "YellowCards": 0,
    "YellowRedCards": 0
  }
]
```

<h3 id="projected-player-game-stats-by-player-w-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-player-w-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Upcoming Dfs Slates By Competition

<a id="opIdUpcomingDfsSlatesByCompetition"></a>

> Code samples

```bash
curl https://example.com/json/UpcomingDfsSlatesByCompetition/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/UpcomingDfsSlatesByCompetition/{competitionId}`

<h3 id="upcoming-dfs-slates-by-competition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competitionId|path|string|true|The Competition Id.<br><br>Examples: <code>3</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
[
  {
    "CompetitionId": 0,
    "DfsSlateGames": [
      {
        "Game": {
          "Attendance": 0,
          "AwayTeamCountryCode": "string",
          "AwayTeamFormation": "string",
          "AwayTeamId": 0,
          "AwayTeamKey": "string",
          "AwayTeamMoneyLine": 0,
          "AwayTeamName": "string",
          "AwayTeamPointSpreadPayout": 0,
          "AwayTeamScore": 0,
          "AwayTeamScoreExtraTime": 0,
          "AwayTeamScorePenalty": 0,
          "AwayTeamScorePeriod1": 0,
          "AwayTeamScorePeriod2": 0,
          "Clock": 0,
          "ClockDisplay": "string",
          "ClockExtra": 0,
          "DateTime": "string",
          "Day": "string",
          "DrawMoneyLine": 0,
          "GameId": 0,
          "GlobalAwayTeamId": 0,
          "GlobalGameId": 0,
          "GlobalHomeTeamId": 0,
          "Group": "string",
          "HomeTeamCountryCode": "string",
          "HomeTeamFormation": "string",
          "HomeTeamId": 0,
          "HomeTeamKey": "string",
          "HomeTeamMoneyLine": 0,
          "HomeTeamName": "string",
          "HomeTeamPointSpreadPayout": 0,
          "HomeTeamScore": 0,
          "HomeTeamScoreExtraTime": 0,
          "HomeTeamScorePenalty": 0,
          "HomeTeamScorePeriod1": 0,
          "HomeTeamScorePeriod2": 0,
          "IsClosed": true,
          "OverPayout": 0,
          "OverUnder": 0,
          "Period": "string",
          "PlayoffAggregateScore": {
            "Created": "string",
            "TeamA_AggregateScore": 0,
            "TeamA_Id": 0,
            "TeamB_AggregateScore": 0,
            "TeamB_Id": 0,
            "Updated": "string",
            "WinningTeamId": 0
          },
          "PointSpread": 0,
          "RoundId": 0,
          "Season": 0,
          "SeasonType": 0,
          "Status": "string",
          "UnderPayout": 0,
          "Updated": "string",
          "UpdatedUtc": "string",
          "VenueId": 0,
          "VenueType": "string",
          "Week": 0,
          "Winner": "string"
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

<h3 id="upcoming-dfs-slates-by-competition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="upcoming-dfs-slates-by-competition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DfsSlate](#schemadfsslate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_DfsSlate">DfsSlate</h2>
<!-- backwards compatibility -->
<a id="schemadfsslate"></a>
<a id="schema_DfsSlate"></a>
<a id="tocSdfsslate"></a>
<a id="tocsdfsslate"></a>

```json
{
  "CompetitionId": 0,
  "DfsSlateGames": [
    {
      "Game": {
        "Attendance": 0,
        "AwayTeamCountryCode": "string",
        "AwayTeamFormation": "string",
        "AwayTeamId": 0,
        "AwayTeamKey": "string",
        "AwayTeamMoneyLine": 0,
        "AwayTeamName": "string",
        "AwayTeamPointSpreadPayout": 0,
        "AwayTeamScore": 0,
        "AwayTeamScoreExtraTime": 0,
        "AwayTeamScorePenalty": 0,
        "AwayTeamScorePeriod1": 0,
        "AwayTeamScorePeriod2": 0,
        "Clock": 0,
        "ClockDisplay": "string",
        "ClockExtra": 0,
        "DateTime": "string",
        "Day": "string",
        "DrawMoneyLine": 0,
        "GameId": 0,
        "GlobalAwayTeamId": 0,
        "GlobalGameId": 0,
        "GlobalHomeTeamId": 0,
        "Group": "string",
        "HomeTeamCountryCode": "string",
        "HomeTeamFormation": "string",
        "HomeTeamId": 0,
        "HomeTeamKey": "string",
        "HomeTeamMoneyLine": 0,
        "HomeTeamName": "string",
        "HomeTeamPointSpreadPayout": 0,
        "HomeTeamScore": 0,
        "HomeTeamScoreExtraTime": 0,
        "HomeTeamScorePenalty": 0,
        "HomeTeamScorePeriod1": 0,
        "HomeTeamScorePeriod2": 0,
        "IsClosed": true,
        "OverPayout": 0,
        "OverUnder": 0,
        "Period": "string",
        "PlayoffAggregateScore": {
          "Created": "string",
          "TeamA_AggregateScore": 0,
          "TeamA_Id": 0,
          "TeamB_AggregateScore": 0,
          "TeamB_Id": 0,
          "Updated": "string",
          "WinningTeamId": 0
        },
        "PointSpread": 0,
        "RoundId": 0,
        "Season": 0,
        "SeasonType": 0,
        "Status": "string",
        "UnderPayout": 0,
        "Updated": "string",
        "UpdatedUtc": "string",
        "VenueId": 0,
        "VenueType": "string",
        "Week": 0,
        "Winner": "string"
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
|CompetitionId|integer \| null|false|none|none|
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
    "Attendance": 0,
    "AwayTeamCountryCode": "string",
    "AwayTeamFormation": "string",
    "AwayTeamId": 0,
    "AwayTeamKey": "string",
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamPointSpreadPayout": 0,
    "AwayTeamScore": 0,
    "AwayTeamScoreExtraTime": 0,
    "AwayTeamScorePenalty": 0,
    "AwayTeamScorePeriod1": 0,
    "AwayTeamScorePeriod2": 0,
    "Clock": 0,
    "ClockDisplay": "string",
    "ClockExtra": 0,
    "DateTime": "string",
    "Day": "string",
    "DrawMoneyLine": 0,
    "GameId": 0,
    "GlobalAwayTeamId": 0,
    "GlobalGameId": 0,
    "GlobalHomeTeamId": 0,
    "Group": "string",
    "HomeTeamCountryCode": "string",
    "HomeTeamFormation": "string",
    "HomeTeamId": 0,
    "HomeTeamKey": "string",
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamPointSpreadPayout": 0,
    "HomeTeamScore": 0,
    "HomeTeamScoreExtraTime": 0,
    "HomeTeamScorePenalty": 0,
    "HomeTeamScorePeriod1": 0,
    "HomeTeamScorePeriod2": 0,
    "IsClosed": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "PlayoffAggregateScore": {
      "Created": "string",
      "TeamA_AggregateScore": 0,
      "TeamA_Id": 0,
      "TeamB_AggregateScore": 0,
      "TeamB_Id": 0,
      "Updated": "string",
      "WinningTeamId": 0
    },
    "PointSpread": 0,
    "RoundId": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string",
    "UnderPayout": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "VenueId": 0,
    "VenueType": "string",
    "Week": 0,
    "Winner": "string"
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
  "Attendance": 0,
  "AwayTeamCountryCode": "string",
  "AwayTeamFormation": "string",
  "AwayTeamId": 0,
  "AwayTeamKey": "string",
  "AwayTeamMoneyLine": 0,
  "AwayTeamName": "string",
  "AwayTeamPointSpreadPayout": 0,
  "AwayTeamScore": 0,
  "AwayTeamScoreExtraTime": 0,
  "AwayTeamScorePenalty": 0,
  "AwayTeamScorePeriod1": 0,
  "AwayTeamScorePeriod2": 0,
  "Clock": 0,
  "ClockDisplay": "string",
  "ClockExtra": 0,
  "DateTime": "string",
  "Day": "string",
  "DrawMoneyLine": 0,
  "GameId": 0,
  "GlobalAwayTeamId": 0,
  "GlobalGameId": 0,
  "GlobalHomeTeamId": 0,
  "Group": "string",
  "HomeTeamCountryCode": "string",
  "HomeTeamFormation": "string",
  "HomeTeamId": 0,
  "HomeTeamKey": "string",
  "HomeTeamMoneyLine": 0,
  "HomeTeamName": "string",
  "HomeTeamPointSpreadPayout": 0,
  "HomeTeamScore": 0,
  "HomeTeamScoreExtraTime": 0,
  "HomeTeamScorePenalty": 0,
  "HomeTeamScorePeriod1": 0,
  "HomeTeamScorePeriod2": 0,
  "IsClosed": true,
  "OverPayout": 0,
  "OverUnder": 0,
  "Period": "string",
  "PlayoffAggregateScore": {
    "Created": "string",
    "TeamA_AggregateScore": 0,
    "TeamA_Id": 0,
    "TeamB_AggregateScore": 0,
    "TeamB_Id": 0,
    "Updated": "string",
    "WinningTeamId": 0
  },
  "PointSpread": 0,
  "RoundId": 0,
  "Season": 0,
  "SeasonType": 0,
  "Status": "string",
  "UnderPayout": 0,
  "Updated": "string",
  "UpdatedUtc": "string",
  "VenueId": 0,
  "VenueType": "string",
  "Week": 0,
  "Winner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendance|integer \| null|false|none|none|
|AwayTeamCountryCode|string \| null|false|none|none|
|AwayTeamFormation|string \| null|false|none|none|
|AwayTeamId|integer \| null|false|none|none|
|AwayTeamKey|string \| null|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamName|string \| null|false|none|none|
|AwayTeamPointSpreadPayout|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|AwayTeamScoreExtraTime|integer \| null|false|none|none|
|AwayTeamScorePenalty|integer \| null|false|none|none|
|AwayTeamScorePeriod1|integer \| null|false|none|none|
|AwayTeamScorePeriod2|integer \| null|false|none|none|
|Clock|integer \| null|false|none|none|
|ClockDisplay|string \| null|false|none|none|
|ClockExtra|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DrawMoneyLine|integer \| null|false|none|none|
|GameId|integer|false|none|none|
|GlobalAwayTeamId|integer \| null|false|none|none|
|GlobalGameId|integer|false|none|none|
|GlobalHomeTeamId|integer \| null|false|none|none|
|Group|string \| null|false|none|none|
|HomeTeamCountryCode|string \| null|false|none|none|
|HomeTeamFormation|string \| null|false|none|none|
|HomeTeamId|integer \| null|false|none|none|
|HomeTeamKey|string \| null|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTeamName|string \| null|false|none|none|
|HomeTeamPointSpreadPayout|integer \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|HomeTeamScoreExtraTime|integer \| null|false|none|none|
|HomeTeamScorePenalty|integer \| null|false|none|none|
|HomeTeamScorePeriod1|integer \| null|false|none|none|
|HomeTeamScorePeriod2|integer \| null|false|none|none|
|IsClosed|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|Period|string \| null|false|none|none|
|PlayoffAggregateScore|[PlayoffAggregateScore](#schemaplayoffaggregatescore)|false|none|none|
|PointSpread|number \| null|false|none|none|
|RoundId|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Status|string \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UpdatedUtc|string \| null|false|none|none|
|VenueId|integer \| null|false|none|none|
|VenueType|string \| null|false|none|none|
|Week|integer \| null|false|none|none|
|Winner|string \| null|false|none|none|

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
  "CommonName": "string",
  "DraftKingsPosition": "string",
  "FirstName": "string",
  "Foot": "string",
  "Gender": "string",
  "Height": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "Nationality": "string",
  "PhotoUrl": "string",
  "PlayerId": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RotoWirePlayerID": 0,
  "ShortName": "string",
  "Updated": "string",
  "UsaTodayHeadshotNoBackgroundUpdated": "string",
  "UsaTodayHeadshotNoBackgroundUrl": "string",
  "UsaTodayHeadshotUpdated": "string",
  "UsaTodayHeadshotUrl": "string",
  "UsaTodayPlayerID": 0,
  "Weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthCountry|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|CommonName|string \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|Foot|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|Height|integer \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|Nationality|string \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerId|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|ShortName|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUpdated|string \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUrl|string \| null|false|none|none|
|UsaTodayHeadshotUpdated|string \| null|false|none|none|
|UsaTodayHeadshotUrl|string \| null|false|none|none|
|UsaTodayPlayerID|integer \| null|false|none|none|
|Weight|integer \| null|false|none|none|

<h2 id="tocS_PlayerGameProjection">PlayerGameProjection</h2>
<!-- backwards compatibility -->
<a id="schemaplayergameprojection"></a>
<a id="schema_PlayerGameProjection"></a>
<a id="tocSplayergameprojection"></a>
<a id="tocsplayergameprojection"></a>

```json
{
  "Assists": 0,
  "BlockedShots": 0,
  "Captain": true,
  "CornersWon": 0,
  "Crosses": 0,
  "DateTime": "string",
  "Day": "string",
  "DefenderCleanSheets": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsMondogoal": 0,
  "FantasyPointsYahoo": 0,
  "Fouled": 0,
  "Fouls": 0,
  "GameId": 0,
  "Games": 0,
  "GlobalGameId": 0,
  "GlobalOpponentId": 0,
  "GlobalTeamId": 0,
  "GoalkeeperCleanSheets": 0,
  "GoalkeeperGoalsAgainst": 0,
  "GoalkeeperSaves": 0,
  "GoalkeeperSingleGoalAgainst": 0,
  "GoalkeeperWins": 0,
  "Goals": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Interceptions": 0,
  "IsGameOver": true,
  "Jersey": 0,
  "LastManTackle": 0,
  "Minutes": 0,
  "MondogoalPosition": "string",
  "MondogoalSalary": 0,
  "Name": "string",
  "Offsides": 0,
  "Opponent": "string",
  "OpponentId": 0,
  "OpponentScore": 0,
  "OwnGoals": 0,
  "Passes": 0,
  "PassesCompleted": 0,
  "PenaltiesConceded": 0,
  "PenaltiesWon": 0,
  "PenaltyKickGoals": 0,
  "PenaltyKickMisses": 0,
  "PenaltyKickSaves": 0,
  "PlayerId": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RedCards": 0,
  "RoundId": 0,
  "Score": 0,
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "Shots": 0,
  "ShotsOnGoal": 0,
  "Started": 0,
  "StatId": 0,
  "Suspension": true,
  "SuspensionReason": "string",
  "Tackles": 0,
  "TacklesWon": 0,
  "Team": "string",
  "TeamId": 0,
  "Touches": 0,
  "Updated": "string",
  "UpdatedUtc": "string",
  "YahooPosition": "string",
  "YahooSalary": 0,
  "YellowCards": 0,
  "YellowRedCards": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|Captain|boolean \| null|false|none|none|
|CornersWon|number \| null|false|none|none|
|Crosses|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefenderCleanSheets|number \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsMondogoal|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|Fouled|number \| null|false|none|none|
|Fouls|number \| null|false|none|none|
|GameId|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameId|integer \| null|false|none|none|
|GlobalOpponentId|integer \| null|false|none|none|
|GlobalTeamId|integer \| null|false|none|none|
|GoalkeeperCleanSheets|number \| null|false|none|none|
|GoalkeeperGoalsAgainst|number \| null|false|none|none|
|GoalkeeperSaves|number \| null|false|none|none|
|GoalkeeperSingleGoalAgainst|number \| null|false|none|none|
|GoalkeeperWins|number \| null|false|none|none|
|Goals|number \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|Interceptions|number \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastManTackle|number \| null|false|none|none|
|Minutes|number \| null|false|none|none|
|MondogoalPosition|string \| null|false|none|none|
|MondogoalSalary|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Offsides|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentId|integer \| null|false|none|none|
|OpponentScore|number \| null|false|none|none|
|OwnGoals|number \| null|false|none|none|
|Passes|number \| null|false|none|none|
|PassesCompleted|number \| null|false|none|none|
|PenaltiesConceded|number \| null|false|none|none|
|PenaltiesWon|number \| null|false|none|none|
|PenaltyKickGoals|number \| null|false|none|none|
|PenaltyKickMisses|number \| null|false|none|none|
|PenaltyKickSaves|number \| null|false|none|none|
|PlayerId|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|RedCards|number \| null|false|none|none|
|RoundId|integer \| null|false|none|none|
|Score|number \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|ShortName|string \| null|false|none|none|
|Shots|number \| null|false|none|none|
|ShotsOnGoal|number \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatId|integer|false|none|none|
|Suspension|boolean \| null|false|none|none|
|SuspensionReason|string \| null|false|none|none|
|Tackles|number \| null|false|none|none|
|TacklesWon|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamId|integer \| null|false|none|none|
|Touches|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UpdatedUtc|string \| null|false|none|none|
|YahooPosition|string \| null|false|none|none|
|YahooSalary|integer \| null|false|none|none|
|YellowCards|number \| null|false|none|none|
|YellowRedCards|number \| null|false|none|none|

<h2 id="tocS_PlayoffAggregateScore">PlayoffAggregateScore</h2>
<!-- backwards compatibility -->
<a id="schemaplayoffaggregatescore"></a>
<a id="schema_PlayoffAggregateScore"></a>
<a id="tocSplayoffaggregatescore"></a>
<a id="tocsplayoffaggregatescore"></a>

```json
{
  "Created": "string",
  "TeamA_AggregateScore": 0,
  "TeamA_Id": 0,
  "TeamB_AggregateScore": 0,
  "TeamB_Id": 0,
  "Updated": "string",
  "WinningTeamId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Created|string \| null|false|none|none|
|TeamA_AggregateScore|integer|false|none|none|
|TeamA_Id|integer|false|none|none|
|TeamB_AggregateScore|integer|false|none|none|
|TeamB_Id|integer|false|none|none|
|Updated|string \| null|false|none|none|
|WinningTeamId|integer|false|none|none|
