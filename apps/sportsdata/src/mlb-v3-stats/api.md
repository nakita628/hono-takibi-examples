<h1 id="mlb-v3-stats">MLB v3 Stats v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

MLB scores, stats, and news API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/mlb/stats">http://azure-api.sportsdata.io/v3/mlb/stats</a>

* <a href="https://azure-api.sportsdata.io/v3/mlb/stats">https://azure-api.sportsdata.io/v3/mlb/stats</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="mlb-v3-stats-default">Default</h1>

## Teams (All)

<a id="opIdTeamsAll"></a>

> Code samples

```bash
curl https://example.com/XML/AllTeams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/AllTeams`

<h3 id="teams-all-parameters">Parameters</h3>

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
    "City": "string",
    "Division": "string",
    "GlobalTeamID": 0,
    "Key": "string",
    "League": "string",
    "Name": "string",
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "StadiumID": 0,
    "TeamID": 0,
    "TertiaryColor": "string",
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string"
  }
]
```

<h3 id="teams-all-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="teams-all-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

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
|gameid|path|string|true|The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>|

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
  "Innings": [
    {
      "AwayTeamRuns": 0,
      "GameID": 0,
      "HomeTeamRuns": 0,
      "InningID": 0,
      "InningNumber": 0
    }
  ],
  "PlayerGames": [
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
  ],
  "TeamGames": [
    {
      "AtBats": 0,
      "BallsInPlay": 0,
      "BattingAverage": 0,
      "BattingAverageOnBallsInPlay": 0,
      "BattingOrderConfirmed": true,
      "CaughtStealing": 0,
      "DateTime": "string",
      "Day": "string",
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
      "PopOuts": 0,
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
    "Innings": [
      {
        "AwayTeamRuns": 0,
        "GameID": 0,
        "HomeTeamRuns": 0,
        "InningID": 0,
        "InningNumber": 0
      }
    ],
    "PlayerGames": [
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
    ],
    "TeamGames": [
      {
        "AtBats": 0,
        "BallsInPlay": 0,
        "BattingAverage": 0,
        "BattingAverageOnBallsInPlay": 0,
        "BattingOrderConfirmed": true,
        "CaughtStealing": 0,
        "DateTime": "string",
        "Day": "string",
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
        "PopOuts": 0,
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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|
|minutes|path|string|true|Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:<br><code>1</code>, <code>2</code> ... <code>all</code>.|

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
    "Innings": [
      {
        "AwayTeamRuns": 0,
        "GameID": 0,
        "HomeTeamRuns": 0,
        "InningID": 0,
        "InningNumber": 0
      }
    ],
    "PlayerGames": [
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
    ],
    "TeamGames": [
      {
        "AtBats": 0,
        "BallsInPlay": 0,
        "BattingAverage": 0,
        "BattingAverageOnBallsInPlay": 0,
        "BattingOrderConfirmed": true,
        "CaughtStealing": 0,
        "DateTime": "string",
        "Day": "string",
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
        "PopOuts": 0,
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
  "PostSeasonStartDate": "string",
  "RegularSeasonStartDate": "string",
  "Season": 0,
  "SeasonType": "string"
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

## Player Details by Free Agents

<a id="opIdPlayerDetailsByFreeAgents"></a>

> Code samples

```bash
curl https://example.com/XML/FreeAgents \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/FreeAgents`

<h3 id="player-details-by-free-agents-parameters">Parameters</h3>

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

<h3 id="player-details-by-free-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-free-agents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

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

## Batter vs. Pitcher Stats

<a id="opIdBatterVsPitcherStats"></a>

> Code samples

```bash
curl https://example.com/XML/HitterVsPitcher/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/HitterVsPitcher/{hitterid}/{pitcherid}`

<h3 id="batter-vs-pitcher-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|hitterid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10000031</code>.|
|pitcherid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10000618</code>.|

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

<h3 id="batter-vs-pitcher-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="batter-vs-pitcher-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## News

<a id="opIdNews"></a>

> Code samples

```bash
curl https://example.com/XML/News \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/News`

<h3 id="news-parameters">Parameters</h3>

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
    "Author": "string",
    "Categories": "string",
    "Content": "string",
    "NewsID": 0,
    "OriginalSource": "string",
    "OriginalSourceUrl": "string",
    "PlayerID": 0,
    "PlayerID2": 0,
    "Source": "string",
    "Team": "string",
    "Team2": "string",
    "TeamID": 0,
    "TeamID2": 0,
    "TermsOfUse": "string",
    "TimeAgo": "string",
    "Title": "string",
    "Updated": "string",
    "Url": "string"
  }
]
```

<h3 id="news-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="news-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[News](#schemanews)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## News by Date

<a id="opIdNewsByDate"></a>

> Code samples

```bash
curl https://example.com/XML/NewsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/NewsByDate/{date}`

<h3 id="news-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the news.<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|

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
    "Author": "string",
    "Categories": "string",
    "Content": "string",
    "NewsID": 0,
    "OriginalSource": "string",
    "OriginalSourceUrl": "string",
    "PlayerID": 0,
    "PlayerID2": 0,
    "Source": "string",
    "Team": "string",
    "Team2": "string",
    "TeamID": 0,
    "TeamID2": 0,
    "TermsOfUse": "string",
    "TimeAgo": "string",
    "Title": "string",
    "Updated": "string",
    "Url": "string"
  }
]
```

<h3 id="news-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="news-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[News](#schemanews)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## News by Player

<a id="opIdNewsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/NewsByPlayerID/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/NewsByPlayerID/{playerid}`

<h3 id="news-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
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
    "Author": "string",
    "Categories": "string",
    "Content": "string",
    "NewsID": 0,
    "OriginalSource": "string",
    "OriginalSourceUrl": "string",
    "PlayerID": 0,
    "PlayerID2": 0,
    "Source": "string",
    "Team": "string",
    "Team2": "string",
    "TeamID": 0,
    "TeamID2": 0,
    "TermsOfUse": "string",
    "TimeAgo": "string",
    "Title": "string",
    "Updated": "string",
    "Url": "string"
  }
]
```

<h3 id="news-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="news-by-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[News](#schemanews)]|false|none|none|

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
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10000507</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

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

<h3 id="player-details-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Player](#schemaplayer)|

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
curl https://example.com/JSON/PlayerGameStatsBySeason/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`

<h3 id="player-game-logs-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Season to get games from. Example <code>2019POST</code>, <code>2020</code>|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10001365</code>.|
|numberofgames|path|string|true|How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|JSON|
|format|XML|

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

## Player Season Away Stats

<a id="opIdPlayerSeasonAwayStats"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonAwayStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonAwayStats/{season}`

<h3 id="player-season-away-stats-parameters">Parameters</h3>

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

<h3 id="player-season-away-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-away-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Season Home Stats

<a id="opIdPlayerSeasonHomeStats"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonHomeStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonHomeStats/{season}`

<h3 id="player-season-home-stats-parameters">Parameters</h3>

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

<h3 id="player-season-home-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-home-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Season Split Stats

<a id="opIdPlayerSeasonSplitStats"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonSplitStats/string/L \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonSplitStats/{season}/{split}`

<h3 id="player-season-split-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season.<br><br>Examples: <code>2017</code>, <code>2018</code>.|
|split|path|string|true|The desired split of stats. Currently, we support vs. Left/Right/Switch handed pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|
|split|L|
|split|R|
|split|S|

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

<h3 id="player-season-split-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-split-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

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
|season|path|string|true|Year of the season.<br><br>Examples: <code>2017</code>, <code>2018</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10000507</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

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
|season|path|string|true|Year of the season.<br><br>Examples: <code>2017</code>, <code>2018</code>.<br>|
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

## Player Season Stats Split By Team

<a id="opIdPlayerSeasonStatsSplitByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonStatsSplitByTeam/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonStatsSplitByTeam/{season}`

<h3 id="player-season-stats-split-by-team-parameters">Parameters</h3>

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

<h3 id="player-season-stats-split-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-stats-split-by-team-responseschema">Response Schema</h3>

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

## Players by Team

<a id="opIdPlayersByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/Players/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players/{team}`

<h3 id="players-by-team-parameters">Parameters</h3>

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

<h3 id="players-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="players-by-team-responseschema">Response Schema</h3>

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
curl https://example.com/xml/Stadiums \
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
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "Active": true,
    "Altitude": 0,
    "Capacity": 0,
    "CenterField": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "HomePlateDirection": 0,
    "LeftCenterField": 0,
    "LeftField": 0,
    "MidLeftCenterField": 0,
    "MidLeftField": 0,
    "MidRightCenterField": 0,
    "MidRightField": 0,
    "Name": "string",
    "RightCenterField": 0,
    "RightField": 0,
    "StadiumID": 0,
    "State": "string",
    "Surface": "string",
    "Type": "string"
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

## Standings

<a id="opIdStandings"></a>

> Code samples

```bash
curl https://example.com/XML/Standings/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Standings/{season}`

<h3 id="standings-parameters">Parameters</h3>

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
    "AwayLosses": 0,
    "AwayWins": 0,
    "City": "string",
    "DayLosses": 0,
    "DayWins": 0,
    "Division": "string",
    "DivisionLosses": 0,
    "DivisionRank": 0,
    "DivisionWins": 0,
    "GamesBehind": 0,
    "GlobalTeamID": 0,
    "HomeLosses": 0,
    "HomeWins": 0,
    "Key": "string",
    "LastTenGamesLosses": 0,
    "LastTenGamesWins": 0,
    "League": "string",
    "LeagueRank": 0,
    "Losses": 0,
    "Name": "string",
    "NightLosses": 0,
    "NightWins": 0,
    "Percentage": 0,
    "RunsAgainst": 0,
    "RunsScored": 0,
    "Season": 0,
    "SeasonType": 0,
    "Streak": "string",
    "TeamID": 0,
    "WildCardGamesBehind": 0,
    "WildCardRank": 0,
    "Wins": 0
  }
]
```

<h3 id="standings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="standings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Standing](#schemastanding)]|false|none|none|

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
    "BattingOrderConfirmed": true,
    "CaughtStealing": 0,
    "DateTime": "string",
    "Day": "string",
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
    "PopOuts": 0,
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
curl https://example.com/JSON/TeamGameStatsBySeason/string/string/string \
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
|teamid|path|string|true|Unique ID of team.  Example <code> 12 </code>|
|numberofgames|path|string|true|How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|JSON|
|format|XML|

> Example responses

> 200 Response

```json
[
  {
    "AtBats": 0,
    "BallsInPlay": 0,
    "BattingAverage": 0,
    "BattingAverageOnBallsInPlay": 0,
    "BattingOrderConfirmed": true,
    "CaughtStealing": 0,
    "DateTime": "string",
    "Day": "string",
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
    "PopOuts": 0,
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

## Team Hitting vs. Starting Pitcher

<a id="opIdTeamHittingVsStartingPitcher"></a>

> Code samples

```bash
curl https://example.com/XML/TeamHittersVsPitcher/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamHittersVsPitcher/{gameid}/{team}`

<h3 id="team-hitting-vs-starting-pitcher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|gameid|path|string|true|The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>|
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

<h3 id="team-hitting-vs-starting-pitcher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-hitting-vs-starting-pitcher-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

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
    "BallsInPlay": 0,
    "BattingAverage": 0,
    "BattingAverageOnBallsInPlay": 0,
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
    "PopOuts": 0,
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

## Teams (Active)

<a id="opIdTeamsActive"></a>

> Code samples

```bash
curl https://example.com/XML/teams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/teams`

<h3 id="teams-active-parameters">Parameters</h3>

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
    "City": "string",
    "Division": "string",
    "GlobalTeamID": 0,
    "Key": "string",
    "League": "string",
    "Name": "string",
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "StadiumID": 0,
    "TeamID": 0,
    "TertiaryColor": "string",
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string"
  }
]
```

<h3 id="teams-active-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="teams-active-responseschema">Response Schema</h3>

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
  "Innings": [
    {
      "AwayTeamRuns": 0,
      "GameID": 0,
      "HomeTeamRuns": 0,
      "InningID": 0,
      "InningNumber": 0
    }
  ],
  "PlayerGames": [
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
  ],
  "TeamGames": [
    {
      "AtBats": 0,
      "BallsInPlay": 0,
      "BattingAverage": 0,
      "BattingAverageOnBallsInPlay": 0,
      "BattingOrderConfirmed": true,
      "CaughtStealing": 0,
      "DateTime": "string",
      "Day": "string",
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
      "PopOuts": 0,
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
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Game|[Game](#schemagame)|false|none|none|
|Innings|[[Inning](#schemainning)]|false|none|none|
|PlayerGames|[[PlayerGame](#schemaplayergame)]|false|none|none|
|TeamGames|[[TeamGame](#schemateamgame)]|false|none|none|

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

<h2 id="tocS_News">News</h2>
<!-- backwards compatibility -->
<a id="schemanews"></a>
<a id="schema_News"></a>
<a id="tocSnews"></a>
<a id="tocsnews"></a>

```json
{
  "Author": "string",
  "Categories": "string",
  "Content": "string",
  "NewsID": 0,
  "OriginalSource": "string",
  "OriginalSourceUrl": "string",
  "PlayerID": 0,
  "PlayerID2": 0,
  "Source": "string",
  "Team": "string",
  "Team2": "string",
  "TeamID": 0,
  "TeamID2": 0,
  "TermsOfUse": "string",
  "TimeAgo": "string",
  "Title": "string",
  "Updated": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Author|string \| null|false|none|none|
|Categories|string \| null|false|none|none|
|Content|string \| null|false|none|none|
|NewsID|integer|false|none|none|
|OriginalSource|string \| null|false|none|none|
|OriginalSourceUrl|string \| null|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PlayerID2|integer \| null|false|none|none|
|Source|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|Team2|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|TeamID2|integer \| null|false|none|none|
|TermsOfUse|string \| null|false|none|none|
|TimeAgo|string \| null|false|none|none|
|Title|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Url|string \| null|false|none|none|

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

<h2 id="tocS_PlayerGame">PlayerGame</h2>
<!-- backwards compatibility -->
<a id="schemaplayergame"></a>
<a id="schema_PlayerGame"></a>
<a id="tocSplayergame"></a>
<a id="tocsplayergame"></a>

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

<h2 id="tocS_PlayerSeason">PlayerSeason</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseason"></a>
<a id="schema_PlayerSeason"></a>
<a id="tocSplayerseason"></a>
<a id="tocsplayerseason"></a>

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

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
{
  "ApiSeason": "string",
  "PostSeasonStartDate": "string",
  "RegularSeasonStartDate": "string",
  "Season": 0,
  "SeasonType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiSeason|string \| null|false|none|none|
|PostSeasonStartDate|string \| null|false|none|none|
|RegularSeasonStartDate|string \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|string \| null|false|none|none|

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

<h2 id="tocS_Stadium">Stadium</h2>
<!-- backwards compatibility -->
<a id="schemastadium"></a>
<a id="schema_Stadium"></a>
<a id="tocSstadium"></a>
<a id="tocsstadium"></a>

```json
{
  "Active": true,
  "Altitude": 0,
  "Capacity": 0,
  "CenterField": 0,
  "City": "string",
  "Country": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "HomePlateDirection": 0,
  "LeftCenterField": 0,
  "LeftField": 0,
  "MidLeftCenterField": 0,
  "MidLeftField": 0,
  "MidRightCenterField": 0,
  "MidRightField": 0,
  "Name": "string",
  "RightCenterField": 0,
  "RightField": 0,
  "StadiumID": 0,
  "State": "string",
  "Surface": "string",
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|Altitude|integer \| null|false|none|none|
|Capacity|integer \| null|false|none|none|
|CenterField|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|HomePlateDirection|integer \| null|false|none|none|
|LeftCenterField|integer \| null|false|none|none|
|LeftField|integer \| null|false|none|none|
|MidLeftCenterField|integer \| null|false|none|none|
|MidLeftField|integer \| null|false|none|none|
|MidRightCenterField|integer \| null|false|none|none|
|MidRightField|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|RightCenterField|integer \| null|false|none|none|
|RightField|integer \| null|false|none|none|
|StadiumID|integer|false|none|none|
|State|string \| null|false|none|none|
|Surface|string \| null|false|none|none|
|Type|string \| null|false|none|none|

<h2 id="tocS_Standing">Standing</h2>
<!-- backwards compatibility -->
<a id="schemastanding"></a>
<a id="schema_Standing"></a>
<a id="tocSstanding"></a>
<a id="tocsstanding"></a>

```json
{
  "AwayLosses": 0,
  "AwayWins": 0,
  "City": "string",
  "DayLosses": 0,
  "DayWins": 0,
  "Division": "string",
  "DivisionLosses": 0,
  "DivisionRank": 0,
  "DivisionWins": 0,
  "GamesBehind": 0,
  "GlobalTeamID": 0,
  "HomeLosses": 0,
  "HomeWins": 0,
  "Key": "string",
  "LastTenGamesLosses": 0,
  "LastTenGamesWins": 0,
  "League": "string",
  "LeagueRank": 0,
  "Losses": 0,
  "Name": "string",
  "NightLosses": 0,
  "NightWins": 0,
  "Percentage": 0,
  "RunsAgainst": 0,
  "RunsScored": 0,
  "Season": 0,
  "SeasonType": 0,
  "Streak": "string",
  "TeamID": 0,
  "WildCardGamesBehind": 0,
  "WildCardRank": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayLosses|integer \| null|false|none|none|
|AwayWins|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|DayLosses|integer \| null|false|none|none|
|DayWins|integer \| null|false|none|none|
|Division|string \| null|false|none|none|
|DivisionLosses|integer \| null|false|none|none|
|DivisionRank|integer \| null|false|none|none|
|DivisionWins|integer \| null|false|none|none|
|GamesBehind|number \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeLosses|integer \| null|false|none|none|
|HomeWins|integer \| null|false|none|none|
|Key|string \| null|false|none|none|
|LastTenGamesLosses|integer \| null|false|none|none|
|LastTenGamesWins|integer \| null|false|none|none|
|League|string \| null|false|none|none|
|LeagueRank|integer \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|NightLosses|integer \| null|false|none|none|
|NightWins|integer \| null|false|none|none|
|Percentage|number \| null|false|none|none|
|RunsAgainst|integer \| null|false|none|none|
|RunsScored|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Streak|string \| null|false|none|none|
|TeamID|integer|false|none|none|
|WildCardGamesBehind|number \| null|false|none|none|
|WildCardRank|integer \| null|false|none|none|
|Wins|integer \| null|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "Active": true,
  "City": "string",
  "Division": "string",
  "GlobalTeamID": 0,
  "Key": "string",
  "League": "string",
  "Name": "string",
  "PrimaryColor": "string",
  "QuaternaryColor": "string",
  "SecondaryColor": "string",
  "StadiumID": 0,
  "TeamID": 0,
  "TertiaryColor": "string",
  "WikipediaLogoUrl": "string",
  "WikipediaWordMarkUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|City|string \| null|false|none|none|
|Division|string \| null|false|none|none|
|GlobalTeamID|integer|false|none|none|
|Key|string \| null|false|none|none|
|League|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|PrimaryColor|string \| null|false|none|none|
|QuaternaryColor|string \| null|false|none|none|
|SecondaryColor|string \| null|false|none|none|
|StadiumID|integer \| null|false|none|none|
|TeamID|integer|false|none|none|
|TertiaryColor|string \| null|false|none|none|
|WikipediaLogoUrl|string \| null|false|none|none|
|WikipediaWordMarkUrl|string \| null|false|none|none|

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "AtBats": 0,
  "BallsInPlay": 0,
  "BattingAverage": 0,
  "BattingAverageOnBallsInPlay": 0,
  "BattingOrderConfirmed": true,
  "CaughtStealing": 0,
  "DateTime": "string",
  "Day": "string",
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
  "PopOuts": 0,
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
|BallsInPlay|number \| null|false|none|none|
|BattingAverage|number \| null|false|none|none|
|BattingAverageOnBallsInPlay|number \| null|false|none|none|
|BattingOrderConfirmed|boolean \| null|false|none|none|
|CaughtStealing|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
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
|PopOuts|number \| null|false|none|none|
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

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "AtBats": 0,
  "BallsInPlay": 0,
  "BattingAverage": 0,
  "BattingAverageOnBallsInPlay": 0,
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
  "PopOuts": 0,
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
|BallsInPlay|number \| null|false|none|none|
|BattingAverage|number \| null|false|none|none|
|BattingAverageOnBallsInPlay|number \| null|false|none|none|
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
|PopOuts|number \| null|false|none|none|
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
