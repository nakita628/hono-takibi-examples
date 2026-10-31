<h1 id="nhl-v3-play-by-play">NHL v3 Play-by-Play v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NHL play-by-play API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nhl/pbp">http://azure-api.sportsdata.io/v3/nhl/pbp</a>

* <a href="https://azure-api.sportsdata.io/v3/nhl/pbp">https://azure-api.sportsdata.io/v3/nhl/pbp</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nhl-v3-play-by-play-default">Default</h1>

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
|gameid|path|string|true|The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>|

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
  "Plays": [
    {
      "AwayTeamScore": 0,
      "Category": "string",
      "ClockMinutes": 0,
      "ClockSeconds": 0,
      "Created": "string",
      "Description": "string",
      "FirstAssistedByPlayerID": 0,
      "HomeTeamScore": 0,
      "Opponent": "string",
      "OpponentID": 0,
      "OpposingPlayerID": 0,
      "PeriodID": 0,
      "PeriodName": "string",
      "PlayID": 0,
      "PlayerID": 0,
      "PowerPlayTeam": "string",
      "PowerPlayTeamID": 0,
      "SecondAssistedByPlayerID": 0,
      "Sequence": 0,
      "Team": "string",
      "TeamID": 0,
      "Type": "string",
      "Updated": "string"
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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.|
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
    "Plays": [
      {
        "AwayTeamScore": 0,
        "Category": "string",
        "ClockMinutes": 0,
        "ClockSeconds": 0,
        "Created": "string",
        "Description": "string",
        "FirstAssistedByPlayerID": 0,
        "HomeTeamScore": 0,
        "Opponent": "string",
        "OpponentID": 0,
        "OpposingPlayerID": 0,
        "PeriodID": 0,
        "PeriodName": "string",
        "PlayID": 0,
        "PlayerID": 0,
        "PowerPlayTeam": "string",
        "PowerPlayTeamID": 0,
        "SecondAssistedByPlayerID": 0,
        "Sequence": 0,
        "Team": "string",
        "TeamID": 0,
        "Type": "string",
        "Updated": "string"
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

<h2 id="tocS_Play">Play</h2>
<!-- backwards compatibility -->
<a id="schemaplay"></a>
<a id="schema_Play"></a>
<a id="tocSplay"></a>
<a id="tocsplay"></a>

```json
{
  "AwayTeamScore": 0,
  "Category": "string",
  "ClockMinutes": 0,
  "ClockSeconds": 0,
  "Created": "string",
  "Description": "string",
  "FirstAssistedByPlayerID": 0,
  "HomeTeamScore": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpposingPlayerID": 0,
  "PeriodID": 0,
  "PeriodName": "string",
  "PlayID": 0,
  "PlayerID": 0,
  "PowerPlayTeam": "string",
  "PowerPlayTeamID": 0,
  "SecondAssistedByPlayerID": 0,
  "Sequence": 0,
  "Team": "string",
  "TeamID": 0,
  "Type": "string",
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayTeamScore|integer \| null|false|none|none|
|Category|string \| null|false|none|none|
|ClockMinutes|integer \| null|false|none|none|
|ClockSeconds|integer \| null|false|none|none|
|Created|string \| null|false|none|none|
|Description|string \| null|false|none|none|
|FirstAssistedByPlayerID|integer \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpposingPlayerID|integer \| null|false|none|none|
|PeriodID|integer|false|none|none|
|PeriodName|string \| null|false|none|none|
|PlayID|integer|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PowerPlayTeam|string \| null|false|none|none|
|PowerPlayTeamID|integer \| null|false|none|none|
|SecondAssistedByPlayerID|integer \| null|false|none|none|
|Sequence|integer|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Type|string \| null|false|none|none|
|Updated|string \| null|false|none|none|

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
  "Plays": [
    {
      "AwayTeamScore": 0,
      "Category": "string",
      "ClockMinutes": 0,
      "ClockSeconds": 0,
      "Created": "string",
      "Description": "string",
      "FirstAssistedByPlayerID": 0,
      "HomeTeamScore": 0,
      "Opponent": "string",
      "OpponentID": 0,
      "OpposingPlayerID": 0,
      "PeriodID": 0,
      "PeriodName": "string",
      "PlayID": 0,
      "PlayerID": 0,
      "PowerPlayTeam": "string",
      "PowerPlayTeamID": 0,
      "SecondAssistedByPlayerID": 0,
      "Sequence": 0,
      "Team": "string",
      "TeamID": 0,
      "Type": "string",
      "Updated": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Game|[Game](#schemagame)|false|none|none|
|Plays|[[Play](#schemaplay)]|false|none|none|

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
