<h1 id="nhl-v3-projections">NHL v3 Projections v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nhl/projections">http://azure-api.sportsdata.io/v3/nhl/projections</a>

* <a href="https://azure-api.sportsdata.io/v3/nhl/projections">https://azure-api.sportsdata.io/v3/nhl/projections</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nhl-v3-projections-default">Default</h1>

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
          "Attendance": 0,
          "AwayRotationNumber": 0,
          "AwayTeam": "string",
          "AwayTeamID": 0,
          "AwayTeamMoneyLine": 0,
          "AwayTeamScore": 0,
          "Channel": "string",
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
          "Period": "string",
          "Periods": [
            {
              "AwayScore": 0,
              "GameID": 0,
              "HomeScore": 0,
              "Name": "string",
              "Penalties": [
                {
                  "BenchPenaltyServedByPlayerID": 0,
                  "Description": "string",
                  "DrawnByPlayerID": 0,
                  "DrawnByTeamID": 0,
                  "IsBenchPenalty": true,
                  "PenalizedPlayerID": 0,
                  "PenalizedTeamID": 0,
                  "PenaltyID": 0,
                  "PenaltyMinutes": 0,
                  "PeriodID": 0,
                  "Sequence": 0,
                  "TimeRemainingMinutes": 0,
                  "TimeRemainingSeconds": 0
                }
              ],
              "PeriodID": 0,
              "ScoringPlays": [
                {
                  "AllowedByTeamID": 0,
                  "AssistedByPlayerID1": 0,
                  "AssistedByPlayerID2": 0,
                  "AwayTeamScore": 0,
                  "EmptyNet": true,
                  "HomeTeamScore": 0,
                  "PeriodID": 0,
                  "PowerPlay": true,
                  "ScoredByPlayerID": 0,
                  "ScoredByTeamID": 0,
                  "ScoringPlayID": 0,
                  "Sequence": 0,
                  "ShortHanded": true,
                  "TimeRemainingMinutes": 0,
                  "TimeRemainingSeconds": 0
                }
              ]
            }
          ],
          "PointSpread": 0,
          "PointSpreadAwayTeamMoneyLine": 0,
          "PointSpreadHomeTeamMoneyLine": 0,
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

This endpoint provides all currently injured NHL players, along with injury details.

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
    "BirthDate": "string",
    "BirthState": "string",
    "Catches": "string",
    "DepthChartOrder": 0,
    "DepthChartPosition": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyAlarmPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "Shoots": "string",
    "SportRadarPlayerID": "string",
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
|date|path|string|true|The date of the game(s).<br> <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.<br> |

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
    "BenchPenaltyMinutes": 0,
    "Blocks": 0,
    "DateTime": "string",
    "Day": "string",
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EmptyNetGoals": 0,
    "FaceoffsLost": 0,
    "FaceoffsWon": 0,
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
    "GameID": 0,
    "Games": 0,
    "Giveaways": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "Goals": 0,
    "GoaltendingGoalsAgainst": 0,
    "GoaltendingLosses": 0,
    "GoaltendingMinutes": 0,
    "GoaltendingOvertimeLosses": 0,
    "GoaltendingSaves": 0,
    "GoaltendingSeconds": 0,
    "GoaltendingShotsAgainst": 0,
    "GoaltendingShutouts": 0,
    "GoaltendingWins": 0,
    "HatTricks": 0,
    "Hits": 0,
    "HomeOrAway": "string",
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "IsGameOver": true,
    "Minutes": 0,
    "Name": "string",
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PenaltyMinutes": 0,
    "PlayerID": 0,
    "PlusMinus": 0,
    "Position": "string",
    "PowerPlayAssists": 0,
    "PowerPlayGoals": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "Shifts": 0,
    "ShootoutGoals": 0,
    "ShortHandedAssists": 0,
    "ShortHandedGoals": 0,
    "ShotsOnGoal": 0,
    "Started": 0,
    "StatID": 0,
    "Takeaways": 0,
    "Team": "string",
    "TeamID": 0,
    "Updated": "string",
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
|date|path|string|true|The date of the game(s).<br> <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.<br> |
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>30000378</code>.|

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
  "BenchPenaltyMinutes": 0,
  "Blocks": 0,
  "DateTime": "string",
  "Day": "string",
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EmptyNetGoals": 0,
  "FaceoffsLost": 0,
  "FaceoffsWon": 0,
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
  "GameID": 0,
  "Games": 0,
  "Giveaways": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "Goals": 0,
  "GoaltendingGoalsAgainst": 0,
  "GoaltendingLosses": 0,
  "GoaltendingMinutes": 0,
  "GoaltendingOvertimeLosses": 0,
  "GoaltendingSaves": 0,
  "GoaltendingSeconds": 0,
  "GoaltendingShotsAgainst": 0,
  "GoaltendingShutouts": 0,
  "GoaltendingWins": 0,
  "HatTricks": 0,
  "Hits": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsGameOver": true,
  "Minutes": 0,
  "Name": "string",
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PenaltyMinutes": 0,
  "PlayerID": 0,
  "PlusMinus": 0,
  "Position": "string",
  "PowerPlayAssists": 0,
  "PowerPlayGoals": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "Shifts": 0,
  "ShootoutGoals": 0,
  "ShortHandedAssists": 0,
  "ShortHandedGoals": 0,
  "ShotsOnGoal": 0,
  "Started": 0,
  "StatID": 0,
  "Takeaways": 0,
  "Team": "string",
  "TeamID": 0,
  "Updated": "string",
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

## Starting Goaltenders by Date

<a id="opIdStartingGoaltendersByDate"></a>

> Code samples

```bash
curl https://example.com/XML/StartingGoaltendersByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/StartingGoaltendersByDate/{date}`

This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.

<h3 id="starting-goaltenders-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.|

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
    "AwayGoaltender": {
      "Confirmed": true,
      "FirstName": "string",
      "Jersey": 0,
      "LastName": "string",
      "PlayerID": 0,
      "Team": "string",
      "TeamID": 0
    },
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "DateTime": "string",
    "Day": "string",
    "GameID": 0,
    "HomeGoaltender": {
      "Confirmed": true,
      "FirstName": "string",
      "Jersey": 0,
      "LastName": "string",
      "PlayerID": 0,
      "Team": "string",
      "TeamID": 0
    },
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string"
  }
]
```

<h3 id="starting-goaltenders-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="starting-goaltenders-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StartingGoaltenders](#schemastartinggoaltenders)]|false|none|none|

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
  "DfsSlateGames": [
    {
      "Game": {
        "Attendance": 0,
        "AwayRotationNumber": 0,
        "AwayTeam": "string",
        "AwayTeamID": 0,
        "AwayTeamMoneyLine": 0,
        "AwayTeamScore": 0,
        "Channel": "string",
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
        "Period": "string",
        "Periods": [
          {
            "AwayScore": 0,
            "GameID": 0,
            "HomeScore": 0,
            "Name": "string",
            "Penalties": [
              {
                "BenchPenaltyServedByPlayerID": 0,
                "Description": "string",
                "DrawnByPlayerID": 0,
                "DrawnByTeamID": 0,
                "IsBenchPenalty": true,
                "PenalizedPlayerID": 0,
                "PenalizedTeamID": 0,
                "PenaltyID": 0,
                "PenaltyMinutes": 0,
                "PeriodID": 0,
                "Sequence": 0,
                "TimeRemainingMinutes": 0,
                "TimeRemainingSeconds": 0
              }
            ],
            "PeriodID": 0,
            "ScoringPlays": [
              {
                "AllowedByTeamID": 0,
                "AssistedByPlayerID1": 0,
                "AssistedByPlayerID2": 0,
                "AwayTeamScore": 0,
                "EmptyNet": true,
                "HomeTeamScore": 0,
                "PeriodID": 0,
                "PowerPlay": true,
                "ScoredByPlayerID": 0,
                "ScoredByTeamID": 0,
                "ScoringPlayID": 0,
                "Sequence": 0,
                "ShortHanded": true,
                "TimeRemainingMinutes": 0,
                "TimeRemainingSeconds": 0
              }
            ]
          }
        ],
        "PointSpread": 0,
        "PointSpreadAwayTeamMoneyLine": 0,
        "PointSpreadHomeTeamMoneyLine": 0,
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
    "Attendance": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamScore": 0,
    "Channel": "string",
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
    "Period": "string",
    "Periods": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Penalties": [
          {
            "BenchPenaltyServedByPlayerID": 0,
            "Description": "string",
            "DrawnByPlayerID": 0,
            "DrawnByTeamID": 0,
            "IsBenchPenalty": true,
            "PenalizedPlayerID": 0,
            "PenalizedTeamID": 0,
            "PenaltyID": 0,
            "PenaltyMinutes": 0,
            "PeriodID": 0,
            "Sequence": 0,
            "TimeRemainingMinutes": 0,
            "TimeRemainingSeconds": 0
          }
        ],
        "PeriodID": 0,
        "ScoringPlays": [
          {
            "AllowedByTeamID": 0,
            "AssistedByPlayerID1": 0,
            "AssistedByPlayerID2": 0,
            "AwayTeamScore": 0,
            "EmptyNet": true,
            "HomeTeamScore": 0,
            "PeriodID": 0,
            "PowerPlay": true,
            "ScoredByPlayerID": 0,
            "ScoredByTeamID": 0,
            "ScoringPlayID": 0,
            "Sequence": 0,
            "ShortHanded": true,
            "TimeRemainingMinutes": 0,
            "TimeRemainingSeconds": 0
          }
        ]
      }
    ],
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
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
  "Attendance": 0,
  "AwayRotationNumber": 0,
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTeamScore": 0,
  "Channel": "string",
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
  "Period": "string",
  "Periods": [
    {
      "AwayScore": 0,
      "GameID": 0,
      "HomeScore": 0,
      "Name": "string",
      "Penalties": [
        {
          "BenchPenaltyServedByPlayerID": 0,
          "Description": "string",
          "DrawnByPlayerID": 0,
          "DrawnByTeamID": 0,
          "IsBenchPenalty": true,
          "PenalizedPlayerID": 0,
          "PenalizedTeamID": 0,
          "PenaltyID": 0,
          "PenaltyMinutes": 0,
          "PeriodID": 0,
          "Sequence": 0,
          "TimeRemainingMinutes": 0,
          "TimeRemainingSeconds": 0
        }
      ],
      "PeriodID": 0,
      "ScoringPlays": [
        {
          "AllowedByTeamID": 0,
          "AssistedByPlayerID1": 0,
          "AssistedByPlayerID2": 0,
          "AwayTeamScore": 0,
          "EmptyNet": true,
          "HomeTeamScore": 0,
          "PeriodID": 0,
          "PowerPlay": true,
          "ScoredByPlayerID": 0,
          "ScoredByTeamID": 0,
          "ScoringPlayID": 0,
          "Sequence": 0,
          "ShortHanded": true,
          "TimeRemainingMinutes": 0,
          "TimeRemainingSeconds": 0
        }
      ]
    }
  ],
  "PointSpread": 0,
  "PointSpreadAwayTeamMoneyLine": 0,
  "PointSpreadHomeTeamMoneyLine": 0,
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
  "UnderPayout": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendance|integer \| null|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|Channel|string \| null|false|none|none|
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
|IsClosed|boolean \| null|false|none|none|
|LastPlay|string \| null|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|Period|string \| null|false|none|none|
|Periods|[[Period](#schemaperiod)]|false|none|none|
|PointSpread|number \| null|false|none|none|
|PointSpreadAwayTeamMoneyLine|integer \| null|false|none|none|
|PointSpreadHomeTeamMoneyLine|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SeriesInfo|[Series](#schemaseries)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_Goaltender">Goaltender</h2>
<!-- backwards compatibility -->
<a id="schemagoaltender"></a>
<a id="schema_Goaltender"></a>
<a id="tocSgoaltender"></a>
<a id="tocsgoaltender"></a>

```json
{
  "Confirmed": true,
  "FirstName": "string",
  "Jersey": 0,
  "LastName": "string",
  "PlayerID": 0,
  "Team": "string",
  "TeamID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Confirmed|boolean|false|none|none|
|FirstName|string \| null|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer|false|none|none|

<h2 id="tocS_Penalty">Penalty</h2>
<!-- backwards compatibility -->
<a id="schemapenalty"></a>
<a id="schema_Penalty"></a>
<a id="tocSpenalty"></a>
<a id="tocspenalty"></a>

```json
{
  "BenchPenaltyServedByPlayerID": 0,
  "Description": "string",
  "DrawnByPlayerID": 0,
  "DrawnByTeamID": 0,
  "IsBenchPenalty": true,
  "PenalizedPlayerID": 0,
  "PenalizedTeamID": 0,
  "PenaltyID": 0,
  "PenaltyMinutes": 0,
  "PeriodID": 0,
  "Sequence": 0,
  "TimeRemainingMinutes": 0,
  "TimeRemainingSeconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BenchPenaltyServedByPlayerID|integer \| null|false|none|none|
|Description|string \| null|false|none|none|
|DrawnByPlayerID|integer \| null|false|none|none|
|DrawnByTeamID|integer \| null|false|none|none|
|IsBenchPenalty|boolean \| null|false|none|none|
|PenalizedPlayerID|integer \| null|false|none|none|
|PenalizedTeamID|integer \| null|false|none|none|
|PenaltyID|integer|false|none|none|
|PenaltyMinutes|integer \| null|false|none|none|
|PeriodID|integer|false|none|none|
|Sequence|integer \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|

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
  "Penalties": [
    {
      "BenchPenaltyServedByPlayerID": 0,
      "Description": "string",
      "DrawnByPlayerID": 0,
      "DrawnByTeamID": 0,
      "IsBenchPenalty": true,
      "PenalizedPlayerID": 0,
      "PenalizedTeamID": 0,
      "PenaltyID": 0,
      "PenaltyMinutes": 0,
      "PeriodID": 0,
      "Sequence": 0,
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0
    }
  ],
  "PeriodID": 0,
  "ScoringPlays": [
    {
      "AllowedByTeamID": 0,
      "AssistedByPlayerID1": 0,
      "AssistedByPlayerID2": 0,
      "AwayTeamScore": 0,
      "EmptyNet": true,
      "HomeTeamScore": 0,
      "PeriodID": 0,
      "PowerPlay": true,
      "ScoredByPlayerID": 0,
      "ScoredByTeamID": 0,
      "ScoringPlayID": 0,
      "Sequence": 0,
      "ShortHanded": true,
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayScore|integer \| null|false|none|none|
|GameID|integer|false|none|none|
|HomeScore|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Penalties|[[Penalty](#schemapenalty)]|false|none|none|
|PeriodID|integer|false|none|none|
|ScoringPlays|[[ScoringPlay](#schemascoringplay)]|false|none|none|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "BirthCity": "string",
  "BirthDate": "string",
  "BirthState": "string",
  "Catches": "string",
  "DepthChartOrder": 0,
  "DepthChartPosition": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "FanDuelName": "string",
  "FanDuelPlayerID": 0,
  "FantasyAlarmPlayerID": 0,
  "FantasyDraftName": "string",
  "FantasyDraftPlayerID": 0,
  "FirstName": "string",
  "GlobalTeamID": 0,
  "Height": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "PhotoUrl": "string",
  "PlayerID": 0,
  "Position": "string",
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "Shoots": "string",
  "SportRadarPlayerID": "string",
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
|BirthDate|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|Catches|string \| null|false|none|none|
|DepthChartOrder|integer \| null|false|none|none|
|DepthChartPosition|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|FanDuelName|string \| null|false|none|none|
|FanDuelPlayerID|integer \| null|false|none|none|
|FantasyAlarmPlayerID|integer \| null|false|none|none|
|FantasyDraftName|string \| null|false|none|none|
|FantasyDraftPlayerID|integer \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Height|integer \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|RotoworldPlayerID|integer \| null|false|none|none|
|Shoots|string \| null|false|none|none|
|SportRadarPlayerID|string \| null|false|none|none|
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
  "BenchPenaltyMinutes": 0,
  "Blocks": 0,
  "DateTime": "string",
  "Day": "string",
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EmptyNetGoals": 0,
  "FaceoffsLost": 0,
  "FaceoffsWon": 0,
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
  "GameID": 0,
  "Games": 0,
  "Giveaways": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "Goals": 0,
  "GoaltendingGoalsAgainst": 0,
  "GoaltendingLosses": 0,
  "GoaltendingMinutes": 0,
  "GoaltendingOvertimeLosses": 0,
  "GoaltendingSaves": 0,
  "GoaltendingSeconds": 0,
  "GoaltendingShotsAgainst": 0,
  "GoaltendingShutouts": 0,
  "GoaltendingWins": 0,
  "HatTricks": 0,
  "Hits": 0,
  "HomeOrAway": "string",
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsGameOver": true,
  "Minutes": 0,
  "Name": "string",
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PenaltyMinutes": 0,
  "PlayerID": 0,
  "PlusMinus": 0,
  "Position": "string",
  "PowerPlayAssists": 0,
  "PowerPlayGoals": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "Shifts": 0,
  "ShootoutGoals": 0,
  "ShortHandedAssists": 0,
  "ShortHandedGoals": 0,
  "ShotsOnGoal": 0,
  "Started": 0,
  "StatID": 0,
  "Takeaways": 0,
  "Team": "string",
  "TeamID": 0,
  "Updated": "string",
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|BenchPenaltyMinutes|number \| null|false|none|none|
|Blocks|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|EmptyNetGoals|number \| null|false|none|none|
|FaceoffsLost|number \| null|false|none|none|
|FaceoffsWon|number \| null|false|none|none|
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
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|Giveaways|number \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Goals|number \| null|false|none|none|
|GoaltendingGoalsAgainst|number \| null|false|none|none|
|GoaltendingLosses|number \| null|false|none|none|
|GoaltendingMinutes|integer \| null|false|none|none|
|GoaltendingOvertimeLosses|number \| null|false|none|none|
|GoaltendingSaves|number \| null|false|none|none|
|GoaltendingSeconds|integer \| null|false|none|none|
|GoaltendingShotsAgainst|number \| null|false|none|none|
|GoaltendingShutouts|number \| null|false|none|none|
|GoaltendingWins|number \| null|false|none|none|
|HatTricks|number \| null|false|none|none|
|Hits|number \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|PenaltyMinutes|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PlusMinus|number \| null|false|none|none|
|Position|string \| null|false|none|none|
|PowerPlayAssists|number \| null|false|none|none|
|PowerPlayGoals|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Seconds|integer \| null|false|none|none|
|Shifts|number \| null|false|none|none|
|ShootoutGoals|number \| null|false|none|none|
|ShortHandedAssists|number \| null|false|none|none|
|ShortHandedGoals|number \| null|false|none|none|
|ShotsOnGoal|number \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Takeaways|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|YahooPosition|string \| null|false|none|none|
|YahooSalary|integer \| null|false|none|none|

<h2 id="tocS_ScoringPlay">ScoringPlay</h2>
<!-- backwards compatibility -->
<a id="schemascoringplay"></a>
<a id="schema_ScoringPlay"></a>
<a id="tocSscoringplay"></a>
<a id="tocsscoringplay"></a>

```json
{
  "AllowedByTeamID": 0,
  "AssistedByPlayerID1": 0,
  "AssistedByPlayerID2": 0,
  "AwayTeamScore": 0,
  "EmptyNet": true,
  "HomeTeamScore": 0,
  "PeriodID": 0,
  "PowerPlay": true,
  "ScoredByPlayerID": 0,
  "ScoredByTeamID": 0,
  "ScoringPlayID": 0,
  "Sequence": 0,
  "ShortHanded": true,
  "TimeRemainingMinutes": 0,
  "TimeRemainingSeconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedByTeamID|integer \| null|false|none|none|
|AssistedByPlayerID1|integer \| null|false|none|none|
|AssistedByPlayerID2|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|EmptyNet|boolean \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|PeriodID|integer|false|none|none|
|PowerPlay|boolean \| null|false|none|none|
|ScoredByPlayerID|integer \| null|false|none|none|
|ScoredByTeamID|integer \| null|false|none|none|
|ScoringPlayID|integer|false|none|none|
|Sequence|integer \| null|false|none|none|
|ShortHanded|boolean \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|

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

<h2 id="tocS_StartingGoaltenders">StartingGoaltenders</h2>
<!-- backwards compatibility -->
<a id="schemastartinggoaltenders"></a>
<a id="schema_StartingGoaltenders"></a>
<a id="tocSstartinggoaltenders"></a>
<a id="tocsstartinggoaltenders"></a>

```json
{
  "AwayGoaltender": {
    "Confirmed": true,
    "FirstName": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Team": "string",
    "TeamID": 0
  },
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "DateTime": "string",
  "Day": "string",
  "GameID": 0,
  "HomeGoaltender": {
    "Confirmed": true,
    "FirstName": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Team": "string",
    "TeamID": 0
  },
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
|AwayGoaltender|[Goaltender](#schemagoaltender)|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|GameID|integer|false|none|none|
|HomeGoaltender|[Goaltender](#schemagoaltender)|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Status|string \| null|false|none|none|
