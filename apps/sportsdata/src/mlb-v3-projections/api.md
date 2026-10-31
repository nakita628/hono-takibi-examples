<h1 id="mlb-v3-projections">MLB v3 Projections v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

MLB projections API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/mlb/projections">http://azure-api.sportsdata.io/v3/mlb/projections</a>

* <a href="https://azure-api.sportsdata.io/v3/mlb/projections">https://azure-api.sportsdata.io/v3/mlb/projections</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="mlb-v3-projections-default">Default</h1>

## Depth Charts

<a id="opIdDepthCharts"></a>

> Code samples

```bash
curl https://example.com/XML/DepthCharts \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DepthCharts`

Returns Depth Charts for all active MLB teams.

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
|date|path|string|true|The date of the slates.<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|

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
          "AwayTeamErrors": 0,
          "AwayTeamHits": 0,
          "AwayTeamID": 0,
          "AwayTeamMoneyLine": 0,
          "AwayTeamProbablePitcherID": 0,
          "AwayTeamRuns": 0,
          "AwayTeamStartingPitcher": "string",
          "AwayTeamStartingPitcherID": 0,
          "Balls": 0,
          "Channel": "string",
          "CurrentHitter": "string",
          "CurrentHitterID": 0,
          "CurrentHittingTeamID": 0,
          "CurrentPitcher": "string",
          "CurrentPitcherID": 0,
          "CurrentPitchingTeamID": 0,
          "DateTime": "string",
          "DateTimeUTC": "string",
          "Day": "string",
          "DueUpHitterID1": 0,
          "DueUpHitterID2": 0,
          "DueUpHitterID3": 0,
          "ForecastDescription": "string",
          "ForecastTempHigh": 0,
          "ForecastTempLow": 0,
          "ForecastWindChill": 0,
          "ForecastWindDirection": 0,
          "ForecastWindSpeed": 0,
          "GameEndDateTime": "string",
          "GameID": 0,
          "GlobalAwayTeamID": 0,
          "GlobalGameID": 0,
          "GlobalHomeTeamID": 0,
          "HomeRotationNumber": 0,
          "HomeTeam": "string",
          "HomeTeamErrors": 0,
          "HomeTeamHits": 0,
          "HomeTeamID": 0,
          "HomeTeamMoneyLine": 0,
          "HomeTeamProbablePitcherID": 0,
          "HomeTeamRuns": 0,
          "HomeTeamStartingPitcher": "string",
          "HomeTeamStartingPitcherID": 0,
          "Inning": 0,
          "InningDescription": "string",
          "InningHalf": "string",
          "Innings": [
            {
              "AwayTeamRuns": 0,
              "GameID": 0,
              "HomeTeamRuns": 0,
              "InningID": 0,
              "InningNumber": 0
            }
          ],
          "IsClosed": true,
          "LastPlay": "string",
          "LosingPitcher": "string",
          "LosingPitcherID": 0,
          "NeutralVenue": true,
          "Outs": 0,
          "OverPayout": 0,
          "OverUnder": 0,
          "PointSpread": 0,
          "PointSpreadAwayTeamMoneyLine": 0,
          "PointSpreadHomeTeamMoneyLine": 0,
          "RescheduledFromGameID": 0,
          "RescheduledGameID": 0,
          "RunnerOnFirst": true,
          "RunnerOnSecond": true,
          "RunnerOnThird": true,
          "SavingPitcher": "string",
          "SavingPitcherID": 0,
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
          "Strikes": 0,
          "UnderPayout": 0,
          "Updated": "string",
          "WinningPitcher": "string",
          "WinningPitcherID": 0
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

This endpoint provides all currently injured MLB players, along with injury details.

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
    "BatHand": "string",
    "BirthCity": "string",
    "BirthCountry": "string",
    "BirthDate": "string",
    "BirthState": "string",
    "College": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "Experience": "string",
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
    "MLBAMID": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "ProDebut": "string",
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
    "ThrowHand": "string",
    "UpcomingGameID": 0,
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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|

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
    "AtBats": 0,
    "BallsInPlay": 0,
    "BattingAverage": 0,
    "BattingAverageOnBallsInPlay": 0,
    "BattingOrder": 0,
    "BattingOrderConfirmed": true,
    "CaughtStealing": 0,
    "DateTime": "string",
    "Day": "string",
    "DoublePlays": 0,
    "Doubles": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EarnedRunAverage": 0,
    "Errors": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsBatting": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPitching": 0,
    "FantasyPointsYahoo": 0,
    "FieldingIndependentPitching": 0,
    "FlyOuts": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "GrandSlams": 0,
    "GroundIntoDoublePlay": 0,
    "GroundOuts": 0,
    "HitByPitch": 0,
    "Hits": 0,
    "HomeOrAway": "string",
    "HomeRuns": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "InningsPitchedDecimal": 0,
    "InningsPitchedFull": 0,
    "InningsPitchedOuts": 0,
    "IntentionalWalks": 0,
    "IsGameOver": true,
    "IsolatedPower": 0,
    "LeftOnBase": 0,
    "LineOuts": 0,
    "Losses": 0,
    "Name": "string",
    "OnBasePercentage": 0,
    "OnBasePlusSlugging": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "Outs": 0,
    "PitchesSeen": 0,
    "PitchesThrown": 0,
    "PitchesThrownStrikes": 0,
    "PitchingBallsInPlay": 0,
    "PitchingBattingAverageAgainst": 0,
    "PitchingBattingAverageOnBallsInPlay": 0,
    "PitchingBlownSaves": 0,
    "PitchingCatchersInterference": 0,
    "PitchingCompleteGames": 0,
    "PitchingDoublePlays": 0,
    "PitchingDoubles": 0,
    "PitchingEarnedRuns": 0,
    "PitchingFlyOuts": 0,
    "PitchingGrandSlams": 0,
    "PitchingGroundIntoDoublePlay": 0,
    "PitchingGroundOuts": 0,
    "PitchingHitByPitch": 0,
    "PitchingHits": 0,
    "PitchingHolds": 0,
    "PitchingHomeRuns": 0,
    "PitchingInningStarted": 0,
    "PitchingIntentionalWalks": 0,
    "PitchingLineOuts": 0,
    "PitchingNoHitters": 0,
    "PitchingOnBasePercentage": 0,
    "PitchingOnBasePlusSlugging": 0,
    "PitchingPerfectGames": 0,
    "PitchingPlateAppearances": 0,
    "PitchingPopOuts": 0,
    "PitchingQualityStarts": 0,
    "PitchingReachedOnError": 0,
    "PitchingRuns": 0,
    "PitchingSacrificeFlies": 0,
    "PitchingSacrifices": 0,
    "PitchingShutOuts": 0,
    "PitchingSingles": 0,
    "PitchingSluggingPercentage": 0,
    "PitchingStrikeouts": 0,
    "PitchingStrikeoutsPerNineInnings": 0,
    "PitchingTotalBases": 0,
    "PitchingTriples": 0,
    "PitchingWalks": 0,
    "PitchingWalksPerNineInnings": 0,
    "PitchingWeightedOnBasePercentage": 0,
    "PlateAppearances": 0,
    "PlayerID": 0,
    "PopOuts": 0,
    "Position": "string",
    "PositionCategory": "string",
    "ReachedOnError": 0,
    "Runs": 0,
    "RunsBattedIn": 0,
    "SacrificeFlies": 0,
    "Sacrifices": 0,
    "Saves": 0,
    "Season": 0,
    "SeasonType": 0,
    "Singles": 0,
    "SluggingPercentage": 0,
    "Started": 0,
    "StatID": 0,
    "StolenBases": 0,
    "Strikeouts": 0,
    "SubstituteBattingOrder": 0,
    "SubstituteBattingOrderSequence": 0,
    "Team": "string",
    "TeamID": 0,
    "TotalBases": 0,
    "TotalOutsPitched": 0,
    "Triples": 0,
    "Updated": "string",
    "Walks": 0,
    "WalksHitsPerInningsPitched": 0,
    "WeightedOnBasePercentage": 0,
    "Wins": 0,
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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10000507</code>.|

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
    "AtBats": 0,
    "BallsInPlay": 0,
    "BattingAverage": 0,
    "BattingAverageOnBallsInPlay": 0,
    "BattingOrder": 0,
    "BattingOrderConfirmed": true,
    "CaughtStealing": 0,
    "DateTime": "string",
    "Day": "string",
    "DoublePlays": 0,
    "Doubles": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "EarnedRunAverage": 0,
    "Errors": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsBatting": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPitching": 0,
    "FantasyPointsYahoo": 0,
    "FieldingIndependentPitching": 0,
    "FlyOuts": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "GrandSlams": 0,
    "GroundIntoDoublePlay": 0,
    "GroundOuts": 0,
    "HitByPitch": 0,
    "Hits": 0,
    "HomeOrAway": "string",
    "HomeRuns": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "InningsPitchedDecimal": 0,
    "InningsPitchedFull": 0,
    "InningsPitchedOuts": 0,
    "IntentionalWalks": 0,
    "IsGameOver": true,
    "IsolatedPower": 0,
    "LeftOnBase": 0,
    "LineOuts": 0,
    "Losses": 0,
    "Name": "string",
    "OnBasePercentage": 0,
    "OnBasePlusSlugging": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "Outs": 0,
    "PitchesSeen": 0,
    "PitchesThrown": 0,
    "PitchesThrownStrikes": 0,
    "PitchingBallsInPlay": 0,
    "PitchingBattingAverageAgainst": 0,
    "PitchingBattingAverageOnBallsInPlay": 0,
    "PitchingBlownSaves": 0,
    "PitchingCatchersInterference": 0,
    "PitchingCompleteGames": 0,
    "PitchingDoublePlays": 0,
    "PitchingDoubles": 0,
    "PitchingEarnedRuns": 0,
    "PitchingFlyOuts": 0,
    "PitchingGrandSlams": 0,
    "PitchingGroundIntoDoublePlay": 0,
    "PitchingGroundOuts": 0,
    "PitchingHitByPitch": 0,
    "PitchingHits": 0,
    "PitchingHolds": 0,
    "PitchingHomeRuns": 0,
    "PitchingInningStarted": 0,
    "PitchingIntentionalWalks": 0,
    "PitchingLineOuts": 0,
    "PitchingNoHitters": 0,
    "PitchingOnBasePercentage": 0,
    "PitchingOnBasePlusSlugging": 0,
    "PitchingPerfectGames": 0,
    "PitchingPlateAppearances": 0,
    "PitchingPopOuts": 0,
    "PitchingQualityStarts": 0,
    "PitchingReachedOnError": 0,
    "PitchingRuns": 0,
    "PitchingSacrificeFlies": 0,
    "PitchingSacrifices": 0,
    "PitchingShutOuts": 0,
    "PitchingSingles": 0,
    "PitchingSluggingPercentage": 0,
    "PitchingStrikeouts": 0,
    "PitchingStrikeoutsPerNineInnings": 0,
    "PitchingTotalBases": 0,
    "PitchingTriples": 0,
    "PitchingWalks": 0,
    "PitchingWalksPerNineInnings": 0,
    "PitchingWeightedOnBasePercentage": 0,
    "PlateAppearances": 0,
    "PlayerID": 0,
    "PopOuts": 0,
    "Position": "string",
    "PositionCategory": "string",
    "ReachedOnError": 0,
    "Runs": 0,
    "RunsBattedIn": 0,
    "SacrificeFlies": 0,
    "Sacrifices": 0,
    "Saves": 0,
    "Season": 0,
    "SeasonType": 0,
    "Singles": 0,
    "SluggingPercentage": 0,
    "Started": 0,
    "StatID": 0,
    "StolenBases": 0,
    "Strikeouts": 0,
    "SubstituteBattingOrder": 0,
    "SubstituteBattingOrderSequence": 0,
    "Team": "string",
    "TeamID": 0,
    "TotalBases": 0,
    "TotalOutsPitched": 0,
    "Triples": 0,
    "Updated": "string",
    "Walks": 0,
    "WalksHitsPerInningsPitched": 0,
    "WeightedOnBasePercentage": 0,
    "Wins": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="projected-player-game-stats-by-player-w-injuries-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-player-w-injuries-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats (with ADP)

<a id="opIdProjectedPlayerSeasonStatsWithAdp"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStats/{season}`

<h3 id="projected-player-season-stats-with-adp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season.<br><br>Examples: <code>2017</code>, <code>2018</code>.|

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
    "AtBats": 0,
    "AuctionValue": 0,
    "AverageDraftPosition": 0,
    "BallsInPlay": 0,
    "BattingAverage": 0,
    "BattingAverageOnBallsInPlay": 0,
    "BattingOrder": 0,
    "BattingOrderConfirmed": true,
    "CaughtStealing": 0,
    "DoublePlays": 0,
    "Doubles": 0,
    "EarnedRunAverage": 0,
    "Errors": 0,
    "FantasyPoints": 0,
    "FantasyPointsBatting": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPitching": 0,
    "FantasyPointsYahoo": 0,
    "FieldingIndependentPitching": 0,
    "FlyOuts": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "GrandSlams": 0,
    "GroundIntoDoublePlay": 0,
    "GroundOuts": 0,
    "HitByPitch": 0,
    "Hits": 0,
    "HomeRuns": 0,
    "InningsPitchedDecimal": 0,
    "InningsPitchedFull": 0,
    "InningsPitchedOuts": 0,
    "IntentionalWalks": 0,
    "IsolatedPower": 0,
    "LeftOnBase": 0,
    "LineOuts": 0,
    "Losses": 0,
    "Name": "string",
    "OnBasePercentage": 0,
    "OnBasePlusSlugging": 0,
    "Outs": 0,
    "PitchesSeen": 0,
    "PitchesThrown": 0,
    "PitchesThrownStrikes": 0,
    "PitchingBallsInPlay": 0,
    "PitchingBattingAverageAgainst": 0,
    "PitchingBattingAverageOnBallsInPlay": 0,
    "PitchingBlownSaves": 0,
    "PitchingCatchersInterference": 0,
    "PitchingCompleteGames": 0,
    "PitchingDoublePlays": 0,
    "PitchingDoubles": 0,
    "PitchingEarnedRuns": 0,
    "PitchingFlyOuts": 0,
    "PitchingGrandSlams": 0,
    "PitchingGroundIntoDoublePlay": 0,
    "PitchingGroundOuts": 0,
    "PitchingHitByPitch": 0,
    "PitchingHits": 0,
    "PitchingHolds": 0,
    "PitchingHomeRuns": 0,
    "PitchingInningStarted": 0,
    "PitchingIntentionalWalks": 0,
    "PitchingLineOuts": 0,
    "PitchingNoHitters": 0,
    "PitchingOnBasePercentage": 0,
    "PitchingOnBasePlusSlugging": 0,
    "PitchingPerfectGames": 0,
    "PitchingPlateAppearances": 0,
    "PitchingPopOuts": 0,
    "PitchingQualityStarts": 0,
    "PitchingReachedOnError": 0,
    "PitchingRuns": 0,
    "PitchingSacrificeFlies": 0,
    "PitchingSacrifices": 0,
    "PitchingShutOuts": 0,
    "PitchingSingles": 0,
    "PitchingSluggingPercentage": 0,
    "PitchingStrikeouts": 0,
    "PitchingStrikeoutsPerNineInnings": 0,
    "PitchingTotalBases": 0,
    "PitchingTriples": 0,
    "PitchingWalks": 0,
    "PitchingWalksPerNineInnings": 0,
    "PitchingWeightedOnBasePercentage": 0,
    "PlateAppearances": 0,
    "PlayerID": 0,
    "PopOuts": 0,
    "Position": "string",
    "PositionCategory": "string",
    "ReachedOnError": 0,
    "Runs": 0,
    "RunsBattedIn": 0,
    "SacrificeFlies": 0,
    "Sacrifices": 0,
    "Saves": 0,
    "Season": 0,
    "SeasonType": 0,
    "Singles": 0,
    "SluggingPercentage": 0,
    "Started": 0,
    "StatID": 0,
    "StolenBases": 0,
    "Strikeouts": 0,
    "SubstituteBattingOrder": 0,
    "SubstituteBattingOrderSequence": 0,
    "Team": "string",
    "TeamID": 0,
    "TotalBases": 0,
    "TotalOutsPitched": 0,
    "Triples": 0,
    "Updated": "string",
    "Walks": 0,
    "WalksHitsPerInningsPitched": 0,
    "WeightedOnBasePercentage": 0,
    "Wins": 0
  }
]
```

<h3 id="projected-player-season-stats-with-adp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-season-stats-with-adp-responseschema">Response Schema</h3>

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

<h3 id="starting-lineups-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the slates.<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|

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
    "AwayBattingLineup": [
      {
        "BattingOrder": 0,
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
    "AwayStartingPitcher": {
      "BattingOrder": 0,
      "Confirmed": true,
      "FirstName": "string",
      "LastName": "string",
      "PlayerID": 0,
      "Position": "string",
      "Starting": true,
      "Team": "string",
      "TeamID": 0
    },
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "DateTime": "string",
    "Day": "string",
    "GameID": 0,
    "HomeBattingLineup": [
      {
        "BattingOrder": 0,
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
    "HomeStartingPitcher": {
      "BattingOrder": 0,
      "Confirmed": true,
      "FirstName": "string",
      "LastName": "string",
      "PlayerID": 0,
      "Position": "string",
      "Starting": true,
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
        "Attendance": 0,
        "AwayRotationNumber": 0,
        "AwayTeam": "string",
        "AwayTeamErrors": 0,
        "AwayTeamHits": 0,
        "AwayTeamID": 0,
        "AwayTeamMoneyLine": 0,
        "AwayTeamProbablePitcherID": 0,
        "AwayTeamRuns": 0,
        "AwayTeamStartingPitcher": "string",
        "AwayTeamStartingPitcherID": 0,
        "Balls": 0,
        "Channel": "string",
        "CurrentHitter": "string",
        "CurrentHitterID": 0,
        "CurrentHittingTeamID": 0,
        "CurrentPitcher": "string",
        "CurrentPitcherID": 0,
        "CurrentPitchingTeamID": 0,
        "DateTime": "string",
        "DateTimeUTC": "string",
        "Day": "string",
        "DueUpHitterID1": 0,
        "DueUpHitterID2": 0,
        "DueUpHitterID3": 0,
        "ForecastDescription": "string",
        "ForecastTempHigh": 0,
        "ForecastTempLow": 0,
        "ForecastWindChill": 0,
        "ForecastWindDirection": 0,
        "ForecastWindSpeed": 0,
        "GameEndDateTime": "string",
        "GameID": 0,
        "GlobalAwayTeamID": 0,
        "GlobalGameID": 0,
        "GlobalHomeTeamID": 0,
        "HomeRotationNumber": 0,
        "HomeTeam": "string",
        "HomeTeamErrors": 0,
        "HomeTeamHits": 0,
        "HomeTeamID": 0,
        "HomeTeamMoneyLine": 0,
        "HomeTeamProbablePitcherID": 0,
        "HomeTeamRuns": 0,
        "HomeTeamStartingPitcher": "string",
        "HomeTeamStartingPitcherID": 0,
        "Inning": 0,
        "InningDescription": "string",
        "InningHalf": "string",
        "Innings": [
          {
            "AwayTeamRuns": 0,
            "GameID": 0,
            "HomeTeamRuns": 0,
            "InningID": 0,
            "InningNumber": 0
          }
        ],
        "IsClosed": true,
        "LastPlay": "string",
        "LosingPitcher": "string",
        "LosingPitcherID": 0,
        "NeutralVenue": true,
        "Outs": 0,
        "OverPayout": 0,
        "OverUnder": 0,
        "PointSpread": 0,
        "PointSpreadAwayTeamMoneyLine": 0,
        "PointSpreadHomeTeamMoneyLine": 0,
        "RescheduledFromGameID": 0,
        "RescheduledGameID": 0,
        "RunnerOnFirst": true,
        "RunnerOnSecond": true,
        "RunnerOnThird": true,
        "SavingPitcher": "string",
        "SavingPitcherID": 0,
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
        "Strikes": 0,
        "UnderPayout": 0,
        "Updated": "string",
        "WinningPitcher": "string",
        "WinningPitcherID": 0
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
    "AwayTeamErrors": 0,
    "AwayTeamHits": 0,
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamProbablePitcherID": 0,
    "AwayTeamRuns": 0,
    "AwayTeamStartingPitcher": "string",
    "AwayTeamStartingPitcherID": 0,
    "Balls": 0,
    "Channel": "string",
    "CurrentHitter": "string",
    "CurrentHitterID": 0,
    "CurrentHittingTeamID": 0,
    "CurrentPitcher": "string",
    "CurrentPitcherID": 0,
    "CurrentPitchingTeamID": 0,
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "DueUpHitterID1": 0,
    "DueUpHitterID2": 0,
    "DueUpHitterID3": 0,
    "ForecastDescription": "string",
    "ForecastTempHigh": 0,
    "ForecastTempLow": 0,
    "ForecastWindChill": 0,
    "ForecastWindDirection": 0,
    "ForecastWindSpeed": 0,
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamErrors": 0,
    "HomeTeamHits": 0,
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamProbablePitcherID": 0,
    "HomeTeamRuns": 0,
    "HomeTeamStartingPitcher": "string",
    "HomeTeamStartingPitcherID": 0,
    "Inning": 0,
    "InningDescription": "string",
    "InningHalf": "string",
    "Innings": [
      {
        "AwayTeamRuns": 0,
        "GameID": 0,
        "HomeTeamRuns": 0,
        "InningID": 0,
        "InningNumber": 0
      }
    ],
    "IsClosed": true,
    "LastPlay": "string",
    "LosingPitcher": "string",
    "LosingPitcherID": 0,
    "NeutralVenue": true,
    "Outs": 0,
    "OverPayout": 0,
    "OverUnder": 0,
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
    "RescheduledFromGameID": 0,
    "RescheduledGameID": 0,
    "RunnerOnFirst": true,
    "RunnerOnSecond": true,
    "RunnerOnThird": true,
    "SavingPitcher": "string",
    "SavingPitcherID": 0,
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
    "Strikes": 0,
    "UnderPayout": 0,
    "Updated": "string",
    "WinningPitcher": "string",
    "WinningPitcherID": 0
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
  "AwayTeamErrors": 0,
  "AwayTeamHits": 0,
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTeamProbablePitcherID": 0,
  "AwayTeamRuns": 0,
  "AwayTeamStartingPitcher": "string",
  "AwayTeamStartingPitcherID": 0,
  "Balls": 0,
  "Channel": "string",
  "CurrentHitter": "string",
  "CurrentHitterID": 0,
  "CurrentHittingTeamID": 0,
  "CurrentPitcher": "string",
  "CurrentPitcherID": 0,
  "CurrentPitchingTeamID": 0,
  "DateTime": "string",
  "DateTimeUTC": "string",
  "Day": "string",
  "DueUpHitterID1": 0,
  "DueUpHitterID2": 0,
  "DueUpHitterID3": 0,
  "ForecastDescription": "string",
  "ForecastTempHigh": 0,
  "ForecastTempLow": 0,
  "ForecastWindChill": 0,
  "ForecastWindDirection": 0,
  "ForecastWindSpeed": 0,
  "GameEndDateTime": "string",
  "GameID": 0,
  "GlobalAwayTeamID": 0,
  "GlobalGameID": 0,
  "GlobalHomeTeamID": 0,
  "HomeRotationNumber": 0,
  "HomeTeam": "string",
  "HomeTeamErrors": 0,
  "HomeTeamHits": 0,
  "HomeTeamID": 0,
  "HomeTeamMoneyLine": 0,
  "HomeTeamProbablePitcherID": 0,
  "HomeTeamRuns": 0,
  "HomeTeamStartingPitcher": "string",
  "HomeTeamStartingPitcherID": 0,
  "Inning": 0,
  "InningDescription": "string",
  "InningHalf": "string",
  "Innings": [
    {
      "AwayTeamRuns": 0,
      "GameID": 0,
      "HomeTeamRuns": 0,
      "InningID": 0,
      "InningNumber": 0
    }
  ],
  "IsClosed": true,
  "LastPlay": "string",
  "LosingPitcher": "string",
  "LosingPitcherID": 0,
  "NeutralVenue": true,
  "Outs": 0,
  "OverPayout": 0,
  "OverUnder": 0,
  "PointSpread": 0,
  "PointSpreadAwayTeamMoneyLine": 0,
  "PointSpreadHomeTeamMoneyLine": 0,
  "RescheduledFromGameID": 0,
  "RescheduledGameID": 0,
  "RunnerOnFirst": true,
  "RunnerOnSecond": true,
  "RunnerOnThird": true,
  "SavingPitcher": "string",
  "SavingPitcherID": 0,
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
  "Strikes": 0,
  "UnderPayout": 0,
  "Updated": "string",
  "WinningPitcher": "string",
  "WinningPitcherID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendance|integer \| null|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamErrors|integer \| null|false|none|none|
|AwayTeamHits|integer \| null|false|none|none|
|AwayTeamID|integer|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamProbablePitcherID|integer \| null|false|none|none|
|AwayTeamRuns|integer \| null|false|none|none|
|AwayTeamStartingPitcher|string \| null|false|none|none|
|AwayTeamStartingPitcherID|integer \| null|false|none|none|
|Balls|integer \| null|false|none|none|
|Channel|string \| null|false|none|none|
|CurrentHitter|string \| null|false|none|none|
|CurrentHitterID|integer \| null|false|none|none|
|CurrentHittingTeamID|integer \| null|false|none|none|
|CurrentPitcher|string \| null|false|none|none|
|CurrentPitcherID|integer \| null|false|none|none|
|CurrentPitchingTeamID|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|DateTimeUTC|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DueUpHitterID1|integer \| null|false|none|none|
|DueUpHitterID2|integer \| null|false|none|none|
|DueUpHitterID3|integer \| null|false|none|none|
|ForecastDescription|string \| null|false|none|none|
|ForecastTempHigh|integer \| null|false|none|none|
|ForecastTempLow|integer \| null|false|none|none|
|ForecastWindChill|integer \| null|false|none|none|
|ForecastWindDirection|integer \| null|false|none|none|
|ForecastWindSpeed|integer \| null|false|none|none|
|GameEndDateTime|string \| null|false|none|none|
|GameID|integer|false|none|none|
|GlobalAwayTeamID|integer|false|none|none|
|GlobalGameID|integer|false|none|none|
|GlobalHomeTeamID|integer|false|none|none|
|HomeRotationNumber|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamErrors|integer \| null|false|none|none|
|HomeTeamHits|integer \| null|false|none|none|
|HomeTeamID|integer|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTeamProbablePitcherID|integer \| null|false|none|none|
|HomeTeamRuns|integer \| null|false|none|none|
|HomeTeamStartingPitcher|string \| null|false|none|none|
|HomeTeamStartingPitcherID|integer \| null|false|none|none|
|Inning|integer \| null|false|none|none|
|InningDescription|string \| null|false|none|none|
|InningHalf|string \| null|false|none|none|
|Innings|[[Inning](#schemainning)]|false|none|none|
|IsClosed|boolean|false|none|none|
|LastPlay|string \| null|false|none|none|
|LosingPitcher|string \| null|false|none|none|
|LosingPitcherID|integer \| null|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|Outs|integer \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|PointSpreadAwayTeamMoneyLine|integer \| null|false|none|none|
|PointSpreadHomeTeamMoneyLine|integer \| null|false|none|none|
|RescheduledFromGameID|integer \| null|false|none|none|
|RescheduledGameID|integer \| null|false|none|none|
|RunnerOnFirst|boolean \| null|false|none|none|
|RunnerOnSecond|boolean \| null|false|none|none|
|RunnerOnThird|boolean \| null|false|none|none|
|SavingPitcher|string \| null|false|none|none|
|SavingPitcherID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SeriesInfo|[Series](#schemaseries)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|Strikes|integer \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|WinningPitcher|string \| null|false|none|none|
|WinningPitcherID|integer \| null|false|none|none|

<h2 id="tocS_Inning">Inning</h2>
<!-- backwards compatibility -->
<a id="schemainning"></a>
<a id="schema_Inning"></a>
<a id="tocSinning"></a>
<a id="tocsinning"></a>

```json
{
  "AwayTeamRuns": 0,
  "GameID": 0,
  "HomeTeamRuns": 0,
  "InningID": 0,
  "InningNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayTeamRuns|integer \| null|false|none|none|
|GameID|integer|false|none|none|
|HomeTeamRuns|integer \| null|false|none|none|
|InningID|integer|false|none|none|
|InningNumber|integer|false|none|none|

<h2 id="tocS_Lineup">Lineup</h2>
<!-- backwards compatibility -->
<a id="schemalineup"></a>
<a id="schema_Lineup"></a>
<a id="tocSlineup"></a>
<a id="tocslineup"></a>

```json
{
  "BattingOrder": 0,
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
|BattingOrder|integer \| null|false|none|none|
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
  "BatHand": "string",
  "BirthCity": "string",
  "BirthCountry": "string",
  "BirthDate": "string",
  "BirthState": "string",
  "College": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "Experience": "string",
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
  "MLBAMID": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "ProDebut": "string",
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
  "ThrowHand": "string",
  "UpcomingGameID": 0,
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
|BatHand|string \| null|false|none|none|
|BirthCity|string \| null|false|none|none|
|BirthCountry|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|College|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|Experience|string \| null|false|none|none|
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
|MLBAMID|integer \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|ProDebut|string \| null|false|none|none|
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
|ThrowHand|string \| null|false|none|none|
|UpcomingGameID|integer \| null|false|none|none|
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
  "AtBats": 0,
  "BallsInPlay": 0,
  "BattingAverage": 0,
  "BattingAverageOnBallsInPlay": 0,
  "BattingOrder": 0,
  "BattingOrderConfirmed": true,
  "CaughtStealing": 0,
  "DateTime": "string",
  "Day": "string",
  "DoublePlays": 0,
  "Doubles": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "EarnedRunAverage": 0,
  "Errors": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsBatting": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPitching": 0,
  "FantasyPointsYahoo": 0,
  "FieldingIndependentPitching": 0,
  "FlyOuts": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "GrandSlams": 0,
  "GroundIntoDoublePlay": 0,
  "GroundOuts": 0,
  "HitByPitch": 0,
  "Hits": 0,
  "HomeOrAway": "string",
  "HomeRuns": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "InningsPitchedDecimal": 0,
  "InningsPitchedFull": 0,
  "InningsPitchedOuts": 0,
  "IntentionalWalks": 0,
  "IsGameOver": true,
  "IsolatedPower": 0,
  "LeftOnBase": 0,
  "LineOuts": 0,
  "Losses": 0,
  "Name": "string",
  "OnBasePercentage": 0,
  "OnBasePlusSlugging": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "Outs": 0,
  "PitchesSeen": 0,
  "PitchesThrown": 0,
  "PitchesThrownStrikes": 0,
  "PitchingBallsInPlay": 0,
  "PitchingBattingAverageAgainst": 0,
  "PitchingBattingAverageOnBallsInPlay": 0,
  "PitchingBlownSaves": 0,
  "PitchingCatchersInterference": 0,
  "PitchingCompleteGames": 0,
  "PitchingDoublePlays": 0,
  "PitchingDoubles": 0,
  "PitchingEarnedRuns": 0,
  "PitchingFlyOuts": 0,
  "PitchingGrandSlams": 0,
  "PitchingGroundIntoDoublePlay": 0,
  "PitchingGroundOuts": 0,
  "PitchingHitByPitch": 0,
  "PitchingHits": 0,
  "PitchingHolds": 0,
  "PitchingHomeRuns": 0,
  "PitchingInningStarted": 0,
  "PitchingIntentionalWalks": 0,
  "PitchingLineOuts": 0,
  "PitchingNoHitters": 0,
  "PitchingOnBasePercentage": 0,
  "PitchingOnBasePlusSlugging": 0,
  "PitchingPerfectGames": 0,
  "PitchingPlateAppearances": 0,
  "PitchingPopOuts": 0,
  "PitchingQualityStarts": 0,
  "PitchingReachedOnError": 0,
  "PitchingRuns": 0,
  "PitchingSacrificeFlies": 0,
  "PitchingSacrifices": 0,
  "PitchingShutOuts": 0,
  "PitchingSingles": 0,
  "PitchingSluggingPercentage": 0,
  "PitchingStrikeouts": 0,
  "PitchingStrikeoutsPerNineInnings": 0,
  "PitchingTotalBases": 0,
  "PitchingTriples": 0,
  "PitchingWalks": 0,
  "PitchingWalksPerNineInnings": 0,
  "PitchingWeightedOnBasePercentage": 0,
  "PlateAppearances": 0,
  "PlayerID": 0,
  "PopOuts": 0,
  "Position": "string",
  "PositionCategory": "string",
  "ReachedOnError": 0,
  "Runs": 0,
  "RunsBattedIn": 0,
  "SacrificeFlies": 0,
  "Sacrifices": 0,
  "Saves": 0,
  "Season": 0,
  "SeasonType": 0,
  "Singles": 0,
  "SluggingPercentage": 0,
  "Started": 0,
  "StatID": 0,
  "StolenBases": 0,
  "Strikeouts": 0,
  "SubstituteBattingOrder": 0,
  "SubstituteBattingOrderSequence": 0,
  "Team": "string",
  "TeamID": 0,
  "TotalBases": 0,
  "TotalOutsPitched": 0,
  "Triples": 0,
  "Updated": "string",
  "Walks": 0,
  "WalksHitsPerInningsPitched": 0,
  "WeightedOnBasePercentage": 0,
  "Wins": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AtBats|number \| null|false|none|none|
|BallsInPlay|number \| null|false|none|none|
|BattingAverage|number \| null|false|none|none|
|BattingAverageOnBallsInPlay|number \| null|false|none|none|
|BattingOrder|integer \| null|false|none|none|
|BattingOrderConfirmed|boolean \| null|false|none|none|
|CaughtStealing|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DoublePlays|number \| null|false|none|none|
|Doubles|number \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|EarnedRunAverage|number \| null|false|none|none|
|Errors|number \| null|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDataSalary|integer \| null|false|none|none|
|FantasyDraftPosition|string \| null|false|none|none|
|FantasyDraftSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsBatting|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsPitching|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldingIndependentPitching|number \| null|false|none|none|
|FlyOuts|number \| null|false|none|none|
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|GrandSlams|number \| null|false|none|none|
|GroundIntoDoublePlay|number \| null|false|none|none|
|GroundOuts|number \| null|false|none|none|
|HitByPitch|number \| null|false|none|none|
|Hits|number \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|HomeRuns|number \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|InningsPitchedDecimal|number \| null|false|none|none|
|InningsPitchedFull|number \| null|false|none|none|
|InningsPitchedOuts|number \| null|false|none|none|
|IntentionalWalks|number \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|IsolatedPower|number \| null|false|none|none|
|LeftOnBase|number \| null|false|none|none|
|LineOuts|number \| null|false|none|none|
|Losses|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|OnBasePercentage|number \| null|false|none|none|
|OnBasePlusSlugging|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|Outs|number \| null|false|none|none|
|PitchesSeen|number \| null|false|none|none|
|PitchesThrown|number \| null|false|none|none|
|PitchesThrownStrikes|number \| null|false|none|none|
|PitchingBallsInPlay|number \| null|false|none|none|
|PitchingBattingAverageAgainst|number \| null|false|none|none|
|PitchingBattingAverageOnBallsInPlay|number \| null|false|none|none|
|PitchingBlownSaves|number \| null|false|none|none|
|PitchingCatchersInterference|number \| null|false|none|none|
|PitchingCompleteGames|number \| null|false|none|none|
|PitchingDoublePlays|number \| null|false|none|none|
|PitchingDoubles|number \| null|false|none|none|
|PitchingEarnedRuns|number \| null|false|none|none|
|PitchingFlyOuts|number \| null|false|none|none|
|PitchingGrandSlams|number \| null|false|none|none|
|PitchingGroundIntoDoublePlay|number \| null|false|none|none|
|PitchingGroundOuts|number \| null|false|none|none|
|PitchingHitByPitch|number \| null|false|none|none|
|PitchingHits|number \| null|false|none|none|
|PitchingHolds|number \| null|false|none|none|
|PitchingHomeRuns|number \| null|false|none|none|
|PitchingInningStarted|integer \| null|false|none|none|
|PitchingIntentionalWalks|number \| null|false|none|none|
|PitchingLineOuts|number \| null|false|none|none|
|PitchingNoHitters|number \| null|false|none|none|
|PitchingOnBasePercentage|number \| null|false|none|none|
|PitchingOnBasePlusSlugging|number \| null|false|none|none|
|PitchingPerfectGames|number \| null|false|none|none|
|PitchingPlateAppearances|number \| null|false|none|none|
|PitchingPopOuts|number \| null|false|none|none|
|PitchingQualityStarts|number \| null|false|none|none|
|PitchingReachedOnError|number \| null|false|none|none|
|PitchingRuns|number \| null|false|none|none|
|PitchingSacrificeFlies|number \| null|false|none|none|
|PitchingSacrifices|number \| null|false|none|none|
|PitchingShutOuts|number \| null|false|none|none|
|PitchingSingles|number \| null|false|none|none|
|PitchingSluggingPercentage|number \| null|false|none|none|
|PitchingStrikeouts|number \| null|false|none|none|
|PitchingStrikeoutsPerNineInnings|number \| null|false|none|none|
|PitchingTotalBases|number \| null|false|none|none|
|PitchingTriples|number \| null|false|none|none|
|PitchingWalks|number \| null|false|none|none|
|PitchingWalksPerNineInnings|number \| null|false|none|none|
|PitchingWeightedOnBasePercentage|number \| null|false|none|none|
|PlateAppearances|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PopOuts|number \| null|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|ReachedOnError|number \| null|false|none|none|
|Runs|number \| null|false|none|none|
|RunsBattedIn|number \| null|false|none|none|
|SacrificeFlies|number \| null|false|none|none|
|Sacrifices|number \| null|false|none|none|
|Saves|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Singles|number \| null|false|none|none|
|SluggingPercentage|number \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|StolenBases|number \| null|false|none|none|
|Strikeouts|number \| null|false|none|none|
|SubstituteBattingOrder|integer \| null|false|none|none|
|SubstituteBattingOrderSequence|integer \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|TotalBases|number \| null|false|none|none|
|TotalOutsPitched|number \| null|false|none|none|
|Triples|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Walks|number \| null|false|none|none|
|WalksHitsPerInningsPitched|number \| null|false|none|none|
|WeightedOnBasePercentage|number \| null|false|none|none|
|Wins|number \| null|false|none|none|
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
  "AtBats": 0,
  "AuctionValue": 0,
  "AverageDraftPosition": 0,
  "BallsInPlay": 0,
  "BattingAverage": 0,
  "BattingAverageOnBallsInPlay": 0,
  "BattingOrder": 0,
  "BattingOrderConfirmed": true,
  "CaughtStealing": 0,
  "DoublePlays": 0,
  "Doubles": 0,
  "EarnedRunAverage": 0,
  "Errors": 0,
  "FantasyPoints": 0,
  "FantasyPointsBatting": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPitching": 0,
  "FantasyPointsYahoo": 0,
  "FieldingIndependentPitching": 0,
  "FlyOuts": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "GrandSlams": 0,
  "GroundIntoDoublePlay": 0,
  "GroundOuts": 0,
  "HitByPitch": 0,
  "Hits": 0,
  "HomeRuns": 0,
  "InningsPitchedDecimal": 0,
  "InningsPitchedFull": 0,
  "InningsPitchedOuts": 0,
  "IntentionalWalks": 0,
  "IsolatedPower": 0,
  "LeftOnBase": 0,
  "LineOuts": 0,
  "Losses": 0,
  "Name": "string",
  "OnBasePercentage": 0,
  "OnBasePlusSlugging": 0,
  "Outs": 0,
  "PitchesSeen": 0,
  "PitchesThrown": 0,
  "PitchesThrownStrikes": 0,
  "PitchingBallsInPlay": 0,
  "PitchingBattingAverageAgainst": 0,
  "PitchingBattingAverageOnBallsInPlay": 0,
  "PitchingBlownSaves": 0,
  "PitchingCatchersInterference": 0,
  "PitchingCompleteGames": 0,
  "PitchingDoublePlays": 0,
  "PitchingDoubles": 0,
  "PitchingEarnedRuns": 0,
  "PitchingFlyOuts": 0,
  "PitchingGrandSlams": 0,
  "PitchingGroundIntoDoublePlay": 0,
  "PitchingGroundOuts": 0,
  "PitchingHitByPitch": 0,
  "PitchingHits": 0,
  "PitchingHolds": 0,
  "PitchingHomeRuns": 0,
  "PitchingInningStarted": 0,
  "PitchingIntentionalWalks": 0,
  "PitchingLineOuts": 0,
  "PitchingNoHitters": 0,
  "PitchingOnBasePercentage": 0,
  "PitchingOnBasePlusSlugging": 0,
  "PitchingPerfectGames": 0,
  "PitchingPlateAppearances": 0,
  "PitchingPopOuts": 0,
  "PitchingQualityStarts": 0,
  "PitchingReachedOnError": 0,
  "PitchingRuns": 0,
  "PitchingSacrificeFlies": 0,
  "PitchingSacrifices": 0,
  "PitchingShutOuts": 0,
  "PitchingSingles": 0,
  "PitchingSluggingPercentage": 0,
  "PitchingStrikeouts": 0,
  "PitchingStrikeoutsPerNineInnings": 0,
  "PitchingTotalBases": 0,
  "PitchingTriples": 0,
  "PitchingWalks": 0,
  "PitchingWalksPerNineInnings": 0,
  "PitchingWeightedOnBasePercentage": 0,
  "PlateAppearances": 0,
  "PlayerID": 0,
  "PopOuts": 0,
  "Position": "string",
  "PositionCategory": "string",
  "ReachedOnError": 0,
  "Runs": 0,
  "RunsBattedIn": 0,
  "SacrificeFlies": 0,
  "Sacrifices": 0,
  "Saves": 0,
  "Season": 0,
  "SeasonType": 0,
  "Singles": 0,
  "SluggingPercentage": 0,
  "Started": 0,
  "StatID": 0,
  "StolenBases": 0,
  "Strikeouts": 0,
  "SubstituteBattingOrder": 0,
  "SubstituteBattingOrderSequence": 0,
  "Team": "string",
  "TeamID": 0,
  "TotalBases": 0,
  "TotalOutsPitched": 0,
  "Triples": 0,
  "Updated": "string",
  "Walks": 0,
  "WalksHitsPerInningsPitched": 0,
  "WeightedOnBasePercentage": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AtBats|number \| null|false|none|none|
|AuctionValue|integer \| null|false|none|none|
|AverageDraftPosition|number \| null|false|none|none|
|BallsInPlay|number \| null|false|none|none|
|BattingAverage|number \| null|false|none|none|
|BattingAverageOnBallsInPlay|number \| null|false|none|none|
|BattingOrder|integer \| null|false|none|none|
|BattingOrderConfirmed|boolean \| null|false|none|none|
|CaughtStealing|number \| null|false|none|none|
|DoublePlays|number \| null|false|none|none|
|Doubles|number \| null|false|none|none|
|EarnedRunAverage|number \| null|false|none|none|
|Errors|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsBatting|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsPitching|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldingIndependentPitching|number \| null|false|none|none|
|FlyOuts|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|GrandSlams|number \| null|false|none|none|
|GroundIntoDoublePlay|number \| null|false|none|none|
|GroundOuts|number \| null|false|none|none|
|HitByPitch|number \| null|false|none|none|
|Hits|number \| null|false|none|none|
|HomeRuns|number \| null|false|none|none|
|InningsPitchedDecimal|number \| null|false|none|none|
|InningsPitchedFull|number \| null|false|none|none|
|InningsPitchedOuts|number \| null|false|none|none|
|IntentionalWalks|number \| null|false|none|none|
|IsolatedPower|number \| null|false|none|none|
|LeftOnBase|number \| null|false|none|none|
|LineOuts|number \| null|false|none|none|
|Losses|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|OnBasePercentage|number \| null|false|none|none|
|OnBasePlusSlugging|number \| null|false|none|none|
|Outs|number \| null|false|none|none|
|PitchesSeen|number \| null|false|none|none|
|PitchesThrown|number \| null|false|none|none|
|PitchesThrownStrikes|number \| null|false|none|none|
|PitchingBallsInPlay|number \| null|false|none|none|
|PitchingBattingAverageAgainst|number \| null|false|none|none|
|PitchingBattingAverageOnBallsInPlay|number \| null|false|none|none|
|PitchingBlownSaves|number \| null|false|none|none|
|PitchingCatchersInterference|number \| null|false|none|none|
|PitchingCompleteGames|number \| null|false|none|none|
|PitchingDoublePlays|number \| null|false|none|none|
|PitchingDoubles|number \| null|false|none|none|
|PitchingEarnedRuns|number \| null|false|none|none|
|PitchingFlyOuts|number \| null|false|none|none|
|PitchingGrandSlams|number \| null|false|none|none|
|PitchingGroundIntoDoublePlay|number \| null|false|none|none|
|PitchingGroundOuts|number \| null|false|none|none|
|PitchingHitByPitch|number \| null|false|none|none|
|PitchingHits|number \| null|false|none|none|
|PitchingHolds|number \| null|false|none|none|
|PitchingHomeRuns|number \| null|false|none|none|
|PitchingInningStarted|integer \| null|false|none|none|
|PitchingIntentionalWalks|number \| null|false|none|none|
|PitchingLineOuts|number \| null|false|none|none|
|PitchingNoHitters|number \| null|false|none|none|
|PitchingOnBasePercentage|number \| null|false|none|none|
|PitchingOnBasePlusSlugging|number \| null|false|none|none|
|PitchingPerfectGames|number \| null|false|none|none|
|PitchingPlateAppearances|number \| null|false|none|none|
|PitchingPopOuts|number \| null|false|none|none|
|PitchingQualityStarts|number \| null|false|none|none|
|PitchingReachedOnError|number \| null|false|none|none|
|PitchingRuns|number \| null|false|none|none|
|PitchingSacrificeFlies|number \| null|false|none|none|
|PitchingSacrifices|number \| null|false|none|none|
|PitchingShutOuts|number \| null|false|none|none|
|PitchingSingles|number \| null|false|none|none|
|PitchingSluggingPercentage|number \| null|false|none|none|
|PitchingStrikeouts|number \| null|false|none|none|
|PitchingStrikeoutsPerNineInnings|number \| null|false|none|none|
|PitchingTotalBases|number \| null|false|none|none|
|PitchingTriples|number \| null|false|none|none|
|PitchingWalks|number \| null|false|none|none|
|PitchingWalksPerNineInnings|number \| null|false|none|none|
|PitchingWeightedOnBasePercentage|number \| null|false|none|none|
|PlateAppearances|number \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PopOuts|number \| null|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|ReachedOnError|number \| null|false|none|none|
|Runs|number \| null|false|none|none|
|RunsBattedIn|number \| null|false|none|none|
|SacrificeFlies|number \| null|false|none|none|
|Sacrifices|number \| null|false|none|none|
|Saves|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Singles|number \| null|false|none|none|
|SluggingPercentage|number \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|StolenBases|number \| null|false|none|none|
|Strikeouts|number \| null|false|none|none|
|SubstituteBattingOrder|integer \| null|false|none|none|
|SubstituteBattingOrderSequence|integer \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|TotalBases|number \| null|false|none|none|
|TotalOutsPitched|number \| null|false|none|none|
|Triples|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Walks|number \| null|false|none|none|
|WalksHitsPerInningsPitched|number \| null|false|none|none|
|WeightedOnBasePercentage|number \| null|false|none|none|
|Wins|number \| null|false|none|none|

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
  "AwayBattingLineup": [
    {
      "BattingOrder": 0,
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
  "AwayStartingPitcher": {
    "BattingOrder": 0,
    "Confirmed": true,
    "FirstName": "string",
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "Starting": true,
    "Team": "string",
    "TeamID": 0
  },
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "DateTime": "string",
  "Day": "string",
  "GameID": 0,
  "HomeBattingLineup": [
    {
      "BattingOrder": 0,
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
  "HomeStartingPitcher": {
    "BattingOrder": 0,
    "Confirmed": true,
    "FirstName": "string",
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "Starting": true,
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
|AwayBattingLineup|[[Lineup](#schemalineup)]|false|none|none|
|AwayStartingPitcher|[Lineup](#schemalineup)|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|GameID|integer|false|none|none|
|HomeBattingLineup|[[Lineup](#schemalineup)]|false|none|none|
|HomeStartingPitcher|[Lineup](#schemalineup)|false|none|none|
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
