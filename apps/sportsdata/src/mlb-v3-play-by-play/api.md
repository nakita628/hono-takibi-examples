<h1 id="mlb-v3-play-by-play">MLB v3 Play-by-Play v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

MLB play-by-play API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/mlb/pbp">http://azure-api.sportsdata.io/v3/mlb/pbp</a>

* <a href="https://azure-api.sportsdata.io/v3/mlb/pbp">https://azure-api.sportsdata.io/v3/mlb/pbp</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="mlb-v3-play-by-play-default">Default</h1>

## Play By Play

<a id="opIdPlayByPlay"></a>

> Code samples

```bash
curl https://example.com/XML/PlayByPlay/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayByPlay/{gameid}`

<h3 id="play-by-play-parameters">Parameters</h3>

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
  "Plays": [
    {
      "AtBat": true,
      "AwayTeamRuns": 0,
      "Balls": 0,
      "Description": "string",
      "Error": true,
      "Hit": true,
      "HitterBatHand": "string",
      "HitterID": 0,
      "HitterName": "string",
      "HitterPosition": "string",
      "HitterTeamID": 0,
      "HomeTeamRuns": 0,
      "InningBatterNumber": 0,
      "InningHalf": "string",
      "InningID": 0,
      "InningNumber": 0,
      "NumberOfOutsOnPlay": 0,
      "Out": true,
      "Outs": 0,
      "PitchNumberThisAtBat": 0,
      "PitcherID": 0,
      "PitcherName": "string",
      "PitcherTeamID": 0,
      "PitcherThrowHand": "string",
      "Pitches": [
        {
          "Ball": true,
          "BallsBeforePitch": 0,
          "Foul": true,
          "HitterID": 0,
          "Looking": true,
          "Outs": 0,
          "PitchID": 0,
          "PitchNumberThisAtBat": 0,
          "PitcherID": 0,
          "PlayID": 0,
          "Strike": true,
          "StrikesBeforePitch": 0,
          "Swinging": true
        }
      ],
      "PlayID": 0,
      "PlayNumber": 0,
      "Result": "string",
      "Runner1ID": 0,
      "Runner2ID": 0,
      "Runner3ID": 0,
      "RunsBattedIn": 0,
      "Sacrifice": true,
      "Strikeout": true,
      "Strikes": 0,
      "Updated": "string",
      "Walk": true
    }
  ]
}
```

<h3 id="play-by-play-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayByPlay](#schemaplaybyplay)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Play By Play Delta

<a id="opIdPlayByPlayDelta"></a>

> Code samples

```bash
curl https://example.com/XML/PlayByPlayDelta/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayByPlayDelta/{date}/{minutes}`

<h3 id="play-by-play-delta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|
|minutes|path|string|true|Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br><code>1</code>, <code>2</code> ... <code>all</code>.|

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
    "Plays": [
      {
        "AtBat": true,
        "AwayTeamRuns": 0,
        "Balls": 0,
        "Description": "string",
        "Error": true,
        "Hit": true,
        "HitterBatHand": "string",
        "HitterID": 0,
        "HitterName": "string",
        "HitterPosition": "string",
        "HitterTeamID": 0,
        "HomeTeamRuns": 0,
        "InningBatterNumber": 0,
        "InningHalf": "string",
        "InningID": 0,
        "InningNumber": 0,
        "NumberOfOutsOnPlay": 0,
        "Out": true,
        "Outs": 0,
        "PitchNumberThisAtBat": 0,
        "PitcherID": 0,
        "PitcherName": "string",
        "PitcherTeamID": 0,
        "PitcherThrowHand": "string",
        "Pitches": [
          {
            "Ball": true,
            "BallsBeforePitch": 0,
            "Foul": true,
            "HitterID": 0,
            "Looking": true,
            "Outs": 0,
            "PitchID": 0,
            "PitchNumberThisAtBat": 0,
            "PitcherID": 0,
            "PlayID": 0,
            "Strike": true,
            "StrikesBeforePitch": 0,
            "Swinging": true
          }
        ],
        "PlayID": 0,
        "PlayNumber": 0,
        "Result": "string",
        "Runner1ID": 0,
        "Runner2ID": 0,
        "Runner3ID": 0,
        "RunsBattedIn": 0,
        "Sacrifice": true,
        "Strikeout": true,
        "Strikes": 0,
        "Updated": "string",
        "Walk": true
      }
    ]
  }
]
```

<h3 id="play-by-play-delta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="play-by-play-delta-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayByPlay](#schemaplaybyplay)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

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

<h2 id="tocS_Pitch">Pitch</h2>
<!-- backwards compatibility -->
<a id="schemapitch"></a>
<a id="schema_Pitch"></a>
<a id="tocSpitch"></a>
<a id="tocspitch"></a>

```json
{
  "Ball": true,
  "BallsBeforePitch": 0,
  "Foul": true,
  "HitterID": 0,
  "Looking": true,
  "Outs": 0,
  "PitchID": 0,
  "PitchNumberThisAtBat": 0,
  "PitcherID": 0,
  "PlayID": 0,
  "Strike": true,
  "StrikesBeforePitch": 0,
  "Swinging": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Ball|boolean \| null|false|none|none|
|BallsBeforePitch|integer \| null|false|none|none|
|Foul|boolean \| null|false|none|none|
|HitterID|integer \| null|false|none|none|
|Looking|boolean \| null|false|none|none|
|Outs|integer \| null|false|none|none|
|PitchID|integer|false|none|none|
|PitchNumberThisAtBat|integer \| null|false|none|none|
|PitcherID|integer \| null|false|none|none|
|PlayID|integer|false|none|none|
|Strike|boolean \| null|false|none|none|
|StrikesBeforePitch|integer \| null|false|none|none|
|Swinging|boolean \| null|false|none|none|

<h2 id="tocS_Play">Play</h2>
<!-- backwards compatibility -->
<a id="schemaplay"></a>
<a id="schema_Play"></a>
<a id="tocSplay"></a>
<a id="tocsplay"></a>

```json
{
  "AtBat": true,
  "AwayTeamRuns": 0,
  "Balls": 0,
  "Description": "string",
  "Error": true,
  "Hit": true,
  "HitterBatHand": "string",
  "HitterID": 0,
  "HitterName": "string",
  "HitterPosition": "string",
  "HitterTeamID": 0,
  "HomeTeamRuns": 0,
  "InningBatterNumber": 0,
  "InningHalf": "string",
  "InningID": 0,
  "InningNumber": 0,
  "NumberOfOutsOnPlay": 0,
  "Out": true,
  "Outs": 0,
  "PitchNumberThisAtBat": 0,
  "PitcherID": 0,
  "PitcherName": "string",
  "PitcherTeamID": 0,
  "PitcherThrowHand": "string",
  "Pitches": [
    {
      "Ball": true,
      "BallsBeforePitch": 0,
      "Foul": true,
      "HitterID": 0,
      "Looking": true,
      "Outs": 0,
      "PitchID": 0,
      "PitchNumberThisAtBat": 0,
      "PitcherID": 0,
      "PlayID": 0,
      "Strike": true,
      "StrikesBeforePitch": 0,
      "Swinging": true
    }
  ],
  "PlayID": 0,
  "PlayNumber": 0,
  "Result": "string",
  "Runner1ID": 0,
  "Runner2ID": 0,
  "Runner3ID": 0,
  "RunsBattedIn": 0,
  "Sacrifice": true,
  "Strikeout": true,
  "Strikes": 0,
  "Updated": "string",
  "Walk": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AtBat|boolean \| null|false|none|none|
|AwayTeamRuns|integer \| null|false|none|none|
|Balls|integer \| null|false|none|none|
|Description|string \| null|false|none|none|
|Error|boolean \| null|false|none|none|
|Hit|boolean \| null|false|none|none|
|HitterBatHand|string \| null|false|none|none|
|HitterID|integer \| null|false|none|none|
|HitterName|string \| null|false|none|none|
|HitterPosition|string \| null|false|none|none|
|HitterTeamID|integer \| null|false|none|none|
|HomeTeamRuns|integer \| null|false|none|none|
|InningBatterNumber|integer \| null|false|none|none|
|InningHalf|string \| null|false|none|none|
|InningID|integer|false|none|none|
|InningNumber|integer \| null|false|none|none|
|NumberOfOutsOnPlay|integer \| null|false|none|none|
|Out|boolean \| null|false|none|none|
|Outs|integer \| null|false|none|none|
|PitchNumberThisAtBat|integer \| null|false|none|none|
|PitcherID|integer \| null|false|none|none|
|PitcherName|string \| null|false|none|none|
|PitcherTeamID|integer \| null|false|none|none|
|PitcherThrowHand|string \| null|false|none|none|
|Pitches|[[Pitch](#schemapitch)]|false|none|none|
|PlayID|integer|false|none|none|
|PlayNumber|integer \| null|false|none|none|
|Result|string \| null|false|none|none|
|Runner1ID|integer \| null|false|none|none|
|Runner2ID|integer \| null|false|none|none|
|Runner3ID|integer \| null|false|none|none|
|RunsBattedIn|integer \| null|false|none|none|
|Sacrifice|boolean \| null|false|none|none|
|Strikeout|boolean \| null|false|none|none|
|Strikes|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Walk|boolean \| null|false|none|none|

<h2 id="tocS_PlayByPlay">PlayByPlay</h2>
<!-- backwards compatibility -->
<a id="schemaplaybyplay"></a>
<a id="schema_PlayByPlay"></a>
<a id="tocSplaybyplay"></a>
<a id="tocsplaybyplay"></a>

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
  "Plays": [
    {
      "AtBat": true,
      "AwayTeamRuns": 0,
      "Balls": 0,
      "Description": "string",
      "Error": true,
      "Hit": true,
      "HitterBatHand": "string",
      "HitterID": 0,
      "HitterName": "string",
      "HitterPosition": "string",
      "HitterTeamID": 0,
      "HomeTeamRuns": 0,
      "InningBatterNumber": 0,
      "InningHalf": "string",
      "InningID": 0,
      "InningNumber": 0,
      "NumberOfOutsOnPlay": 0,
      "Out": true,
      "Outs": 0,
      "PitchNumberThisAtBat": 0,
      "PitcherID": 0,
      "PitcherName": "string",
      "PitcherTeamID": 0,
      "PitcherThrowHand": "string",
      "Pitches": [
        {
          "Ball": true,
          "BallsBeforePitch": 0,
          "Foul": true,
          "HitterID": 0,
          "Looking": true,
          "Outs": 0,
          "PitchID": 0,
          "PitchNumberThisAtBat": 0,
          "PitcherID": 0,
          "PlayID": 0,
          "Strike": true,
          "StrikesBeforePitch": 0,
          "Swinging": true
        }
      ],
      "PlayID": 0,
      "PlayNumber": 0,
      "Result": "string",
      "Runner1ID": 0,
      "Runner2ID": 0,
      "Runner3ID": 0,
      "RunsBattedIn": 0,
      "Sacrifice": true,
      "Strikeout": true,
      "Strikes": 0,
      "Updated": "string",
      "Walk": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Game|[Game](#schemagame)|false|none|none|
|Plays|[[Play](#schemaplay)]|false|none|none|

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
