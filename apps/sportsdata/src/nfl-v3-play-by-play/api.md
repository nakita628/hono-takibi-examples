<h1 id="nfl-v3-play-by-play">NFL v3 Play-by-Play v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NFL play-by-play API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nfl/pbp">http://azure-api.sportsdata.io/v3/nfl/pbp</a>

* <a href="https://azure-api.sportsdata.io/v3/nfl/pbp">https://azure-api.sportsdata.io/v3/nfl/pbp</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nfl-v3-play-by-play-default">Default</h1>

## Play By Play

<a id="opIdPlayByPlay"></a>

> Code samples

```bash
curl https://example.com/XML/PlayByPlay/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayByPlay/{season}/{week}/{hometeam}`

<h3 id="play-by-play-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |
|hometeam|path|string|true|Abbreviation of the home team. Example: <code>WAS</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Plays": [
    {
      "Created": "string",
      "Description": "string",
      "Distance": 0,
      "Down": 0,
      "IsScoringPlay": true,
      "Opponent": "string",
      "PlayID": 0,
      "PlayStats": [
        {
          "AssistedTackles": 0,
          "BlockedKickReturnTouchdowns": 0,
          "BlockedKickReturnYards": 0,
          "BlockedKickReturns": 0,
          "BlockedKicks": 0,
          "Created": "string",
          "Direction": "string",
          "ExtraPointsAttempted": 0,
          "ExtraPointsHadBlocked": 0,
          "ExtraPointsMade": 0,
          "FieldGoalReturnTouchdowns": 0,
          "FieldGoalReturnYards": 0,
          "FieldGoalReturns": 0,
          "FieldGoalsAttempted": 0,
          "FieldGoalsHadBlocked": 0,
          "FieldGoalsMade": 0,
          "FieldGoalsYards": 0,
          "FumbleReturnTouchdowns": 0,
          "FumbleReturnYards": 0,
          "Fumbles": 0,
          "FumblesForced": 0,
          "FumblesLost": 0,
          "FumblesRecovered": 0,
          "HomeOrAway": "string",
          "InterceptionReturnTouchdowns": 0,
          "InterceptionReturnYards": 0,
          "Interceptions": 0,
          "KickReturnTouchdowns": 0,
          "KickReturnYards": 0,
          "KickReturns": 0,
          "KickoffTouchbacks": 0,
          "KickoffYards": 0,
          "Kickoffs": 0,
          "Name": "string",
          "Opponent": "string",
          "PassesDefended": 0,
          "PassingAttempts": 0,
          "PassingCompletions": 0,
          "PassingInterceptions": 0,
          "PassingSackYards": 0,
          "PassingSacks": 0,
          "PassingTouchdowns": 0,
          "PassingYards": 0,
          "Penalties": 0,
          "PenaltyYards": 0,
          "PlayID": 0,
          "PlayStatID": 0,
          "PlayerID": 0,
          "PuntReturnTouchdowns": 0,
          "PuntReturnYards": 0,
          "PuntReturns": 0,
          "PuntTouchbacks": 0,
          "PuntYards": 0,
          "Punts": 0,
          "PuntsHadBlocked": 0,
          "ReceivingTargets": 0,
          "ReceivingTouchdowns": 0,
          "ReceivingYards": 0,
          "Receptions": 0,
          "RushingAttempts": 0,
          "RushingTouchdowns": 0,
          "RushingYards": 0,
          "SackYards": 0,
          "Sacks": 0,
          "Safeties": 0,
          "Sequence": 0,
          "SoloTackles": 0,
          "TacklesForLoss": 0,
          "Team": "string",
          "TwoPointConversionAttempts": 0,
          "TwoPointConversionPasses": 0,
          "TwoPointConversionReceptions": 0,
          "TwoPointConversionReturns": 0,
          "TwoPointConversionRuns": 0,
          "Updated": "string"
        }
      ],
      "PlayTime": "string",
      "QuarterID": 0,
      "QuarterName": "string",
      "ScoringPlay": {
        "AwayScore": 0,
        "AwayTeam": "string",
        "Date": "string",
        "GameKey": "string",
        "HomeScore": 0,
        "HomeTeam": "string",
        "PlayDescription": "string",
        "Quarter": "string",
        "ScoreID": 0,
        "ScoringPlayID": 0,
        "Season": 0,
        "SeasonType": 0,
        "Sequence": 0,
        "Team": "string",
        "TimeRemaining": "string",
        "Week": 0
      },
      "Sequence": 0,
      "Team": "string",
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0,
      "Type": "string",
      "Updated": "string",
      "YardLine": 0,
      "YardLineTerritory": "string",
      "YardsGained": 0,
      "YardsToEndZone": 0
    }
  ],
  "Quarters": [
    {
      "AwayTeamScore": 0,
      "Created": "string",
      "Description": "string",
      "HomeTeamScore": 0,
      "Name": "string",
      "Number": 0,
      "QuarterID": 0,
      "ScoreID": 0,
      "Updated": "string"
    }
  ],
  "Score": {
    "Attendance": 0,
    "AwayRotationNumber": 0,
    "AwayScore": 0,
    "AwayScoreOvertime": 0,
    "AwayScoreQuarter1": 0,
    "AwayScoreQuarter2": 0,
    "AwayScoreQuarter3": 0,
    "AwayScoreQuarter4": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTimeouts": 0,
    "Canceled": true,
    "Channel": "string",
    "Closed": true,
    "Date": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "Distance": "string",
    "Down": 0,
    "DownAndDistance": "string",
    "ForecastDescription": "string",
    "ForecastTempHigh": 0,
    "ForecastTempLow": 0,
    "ForecastWindChill": 0,
    "ForecastWindSpeed": 0,
    "GameEndDateTime": "string",
    "GameKey": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "Has1stQuarterStarted": true,
    "Has2ndQuarterStarted": true,
    "Has3rdQuarterStarted": true,
    "Has4thQuarterStarted": true,
    "HasStarted": true,
    "HomeRotationNumber": 0,
    "HomeScore": 0,
    "HomeScoreOvertime": 0,
    "HomeScoreQuarter1": 0,
    "HomeScoreQuarter2": 0,
    "HomeScoreQuarter3": 0,
    "HomeScoreQuarter4": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTimeouts": 0,
    "IsInProgress": true,
    "IsOver": true,
    "IsOvertime": true,
    "LastPlay": "string",
    "LastUpdated": "string",
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
    "Possession": "string",
    "Quarter": "string",
    "QuarterDescription": "string",
    "RedZone": "string",
    "RefereeID": 0,
    "ScoreID": 0,
    "Season": 0,
    "SeasonType": 0,
    "StadiumDetails": {
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "PlayingSurface": "string",
      "StadiumID": 0,
      "State": "string",
      "Type": "string"
    },
    "StadiumID": 0,
    "Status": "string",
    "TimeRemaining": "string",
    "UnderPayout": 0,
    "Week": 0,
    "YardLine": 0,
    "YardLineTerritory": "string"
  }
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
curl https://example.com/XML/PlayByPlayDelta/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayByPlayDelta/{season}/{week}/{minutes}`

<h3 id="play-by-play-delta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |
|minutes|path|string|true|Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br><br>          <code>1</code> or <code>2</code>.<br>        |

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
    "Plays": [
      {
        "Created": "string",
        "Description": "string",
        "Distance": 0,
        "Down": 0,
        "IsScoringPlay": true,
        "Opponent": "string",
        "PlayID": 0,
        "PlayStats": [
          {
            "AssistedTackles": 0,
            "BlockedKickReturnTouchdowns": 0,
            "BlockedKickReturnYards": 0,
            "BlockedKickReturns": 0,
            "BlockedKicks": 0,
            "Created": "string",
            "Direction": "string",
            "ExtraPointsAttempted": 0,
            "ExtraPointsHadBlocked": 0,
            "ExtraPointsMade": 0,
            "FieldGoalReturnTouchdowns": 0,
            "FieldGoalReturnYards": 0,
            "FieldGoalReturns": 0,
            "FieldGoalsAttempted": 0,
            "FieldGoalsHadBlocked": 0,
            "FieldGoalsMade": 0,
            "FieldGoalsYards": 0,
            "FumbleReturnTouchdowns": 0,
            "FumbleReturnYards": 0,
            "Fumbles": 0,
            "FumblesForced": 0,
            "FumblesLost": 0,
            "FumblesRecovered": 0,
            "HomeOrAway": "string",
            "InterceptionReturnTouchdowns": 0,
            "InterceptionReturnYards": 0,
            "Interceptions": 0,
            "KickReturnTouchdowns": 0,
            "KickReturnYards": 0,
            "KickReturns": 0,
            "KickoffTouchbacks": 0,
            "KickoffYards": 0,
            "Kickoffs": 0,
            "Name": "string",
            "Opponent": "string",
            "PassesDefended": 0,
            "PassingAttempts": 0,
            "PassingCompletions": 0,
            "PassingInterceptions": 0,
            "PassingSackYards": 0,
            "PassingSacks": 0,
            "PassingTouchdowns": 0,
            "PassingYards": 0,
            "Penalties": 0,
            "PenaltyYards": 0,
            "PlayID": 0,
            "PlayStatID": 0,
            "PlayerID": 0,
            "PuntReturnTouchdowns": 0,
            "PuntReturnYards": 0,
            "PuntReturns": 0,
            "PuntTouchbacks": 0,
            "PuntYards": 0,
            "Punts": 0,
            "PuntsHadBlocked": 0,
            "ReceivingTargets": 0,
            "ReceivingTouchdowns": 0,
            "ReceivingYards": 0,
            "Receptions": 0,
            "RushingAttempts": 0,
            "RushingTouchdowns": 0,
            "RushingYards": 0,
            "SackYards": 0,
            "Sacks": 0,
            "Safeties": 0,
            "Sequence": 0,
            "SoloTackles": 0,
            "TacklesForLoss": 0,
            "Team": "string",
            "TwoPointConversionAttempts": 0,
            "TwoPointConversionPasses": 0,
            "TwoPointConversionReceptions": 0,
            "TwoPointConversionReturns": 0,
            "TwoPointConversionRuns": 0,
            "Updated": "string"
          }
        ],
        "PlayTime": "string",
        "QuarterID": 0,
        "QuarterName": "string",
        "ScoringPlay": {
          "AwayScore": 0,
          "AwayTeam": "string",
          "Date": "string",
          "GameKey": "string",
          "HomeScore": 0,
          "HomeTeam": "string",
          "PlayDescription": "string",
          "Quarter": "string",
          "ScoreID": 0,
          "ScoringPlayID": 0,
          "Season": 0,
          "SeasonType": 0,
          "Sequence": 0,
          "Team": "string",
          "TimeRemaining": "string",
          "Week": 0
        },
        "Sequence": 0,
        "Team": "string",
        "TimeRemainingMinutes": 0,
        "TimeRemainingSeconds": 0,
        "Type": "string",
        "Updated": "string",
        "YardLine": 0,
        "YardLineTerritory": "string",
        "YardsGained": 0,
        "YardsToEndZone": 0
      }
    ],
    "Quarters": [
      {
        "AwayTeamScore": 0,
        "Created": "string",
        "Description": "string",
        "HomeTeamScore": 0,
        "Name": "string",
        "Number": 0,
        "QuarterID": 0,
        "ScoreID": 0,
        "Updated": "string"
      }
    ],
    "Score": {
      "Attendance": 0,
      "AwayRotationNumber": 0,
      "AwayScore": 0,
      "AwayScoreOvertime": 0,
      "AwayScoreQuarter1": 0,
      "AwayScoreQuarter2": 0,
      "AwayScoreQuarter3": 0,
      "AwayScoreQuarter4": 0,
      "AwayTeam": "string",
      "AwayTeamID": 0,
      "AwayTeamMoneyLine": 0,
      "AwayTimeouts": 0,
      "Canceled": true,
      "Channel": "string",
      "Closed": true,
      "Date": "string",
      "DateTime": "string",
      "DateTimeUTC": "string",
      "Day": "string",
      "Distance": "string",
      "Down": 0,
      "DownAndDistance": "string",
      "ForecastDescription": "string",
      "ForecastTempHigh": 0,
      "ForecastTempLow": 0,
      "ForecastWindChill": 0,
      "ForecastWindSpeed": 0,
      "GameEndDateTime": "string",
      "GameKey": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "GlobalAwayTeamID": 0,
      "GlobalGameID": 0,
      "GlobalHomeTeamID": 0,
      "Has1stQuarterStarted": true,
      "Has2ndQuarterStarted": true,
      "Has3rdQuarterStarted": true,
      "Has4thQuarterStarted": true,
      "HasStarted": true,
      "HomeRotationNumber": 0,
      "HomeScore": 0,
      "HomeScoreOvertime": 0,
      "HomeScoreQuarter1": 0,
      "HomeScoreQuarter2": 0,
      "HomeScoreQuarter3": 0,
      "HomeScoreQuarter4": 0,
      "HomeTeam": "string",
      "HomeTeamID": 0,
      "HomeTeamMoneyLine": 0,
      "HomeTimeouts": 0,
      "IsInProgress": true,
      "IsOver": true,
      "IsOvertime": true,
      "LastPlay": "string",
      "LastUpdated": "string",
      "NeutralVenue": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "PointSpread": 0,
      "PointSpreadAwayTeamMoneyLine": 0,
      "PointSpreadHomeTeamMoneyLine": 0,
      "Possession": "string",
      "Quarter": "string",
      "QuarterDescription": "string",
      "RedZone": "string",
      "RefereeID": 0,
      "ScoreID": 0,
      "Season": 0,
      "SeasonType": 0,
      "StadiumDetails": {
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "PlayingSurface": "string",
        "StadiumID": 0,
        "State": "string",
        "Type": "string"
      },
      "StadiumID": 0,
      "Status": "string",
      "TimeRemaining": "string",
      "UnderPayout": 0,
      "Week": 0,
      "YardLine": 0,
      "YardLineTerritory": "string"
    }
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

## Play By Play Simulation

<a id="opIdPlayByPlaySimulation"></a>

> Code samples

```bash
curl https://example.com/XML/SimulatedPlayByPlay/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/SimulatedPlayByPlay/{numberofplays}`

Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.

<h3 id="play-by-play-simulation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|numberofplays|path|string|true|The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.|

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
    "Plays": [
      {
        "Created": "string",
        "Description": "string",
        "Distance": 0,
        "Down": 0,
        "IsScoringPlay": true,
        "Opponent": "string",
        "PlayID": 0,
        "PlayStats": [
          {
            "AssistedTackles": 0,
            "BlockedKickReturnTouchdowns": 0,
            "BlockedKickReturnYards": 0,
            "BlockedKickReturns": 0,
            "BlockedKicks": 0,
            "Created": "string",
            "Direction": "string",
            "ExtraPointsAttempted": 0,
            "ExtraPointsHadBlocked": 0,
            "ExtraPointsMade": 0,
            "FieldGoalReturnTouchdowns": 0,
            "FieldGoalReturnYards": 0,
            "FieldGoalReturns": 0,
            "FieldGoalsAttempted": 0,
            "FieldGoalsHadBlocked": 0,
            "FieldGoalsMade": 0,
            "FieldGoalsYards": 0,
            "FumbleReturnTouchdowns": 0,
            "FumbleReturnYards": 0,
            "Fumbles": 0,
            "FumblesForced": 0,
            "FumblesLost": 0,
            "FumblesRecovered": 0,
            "HomeOrAway": "string",
            "InterceptionReturnTouchdowns": 0,
            "InterceptionReturnYards": 0,
            "Interceptions": 0,
            "KickReturnTouchdowns": 0,
            "KickReturnYards": 0,
            "KickReturns": 0,
            "KickoffTouchbacks": 0,
            "KickoffYards": 0,
            "Kickoffs": 0,
            "Name": "string",
            "Opponent": "string",
            "PassesDefended": 0,
            "PassingAttempts": 0,
            "PassingCompletions": 0,
            "PassingInterceptions": 0,
            "PassingSackYards": 0,
            "PassingSacks": 0,
            "PassingTouchdowns": 0,
            "PassingYards": 0,
            "Penalties": 0,
            "PenaltyYards": 0,
            "PlayID": 0,
            "PlayStatID": 0,
            "PlayerID": 0,
            "PuntReturnTouchdowns": 0,
            "PuntReturnYards": 0,
            "PuntReturns": 0,
            "PuntTouchbacks": 0,
            "PuntYards": 0,
            "Punts": 0,
            "PuntsHadBlocked": 0,
            "ReceivingTargets": 0,
            "ReceivingTouchdowns": 0,
            "ReceivingYards": 0,
            "Receptions": 0,
            "RushingAttempts": 0,
            "RushingTouchdowns": 0,
            "RushingYards": 0,
            "SackYards": 0,
            "Sacks": 0,
            "Safeties": 0,
            "Sequence": 0,
            "SoloTackles": 0,
            "TacklesForLoss": 0,
            "Team": "string",
            "TwoPointConversionAttempts": 0,
            "TwoPointConversionPasses": 0,
            "TwoPointConversionReceptions": 0,
            "TwoPointConversionReturns": 0,
            "TwoPointConversionRuns": 0,
            "Updated": "string"
          }
        ],
        "PlayTime": "string",
        "QuarterID": 0,
        "QuarterName": "string",
        "ScoringPlay": {
          "AwayScore": 0,
          "AwayTeam": "string",
          "Date": "string",
          "GameKey": "string",
          "HomeScore": 0,
          "HomeTeam": "string",
          "PlayDescription": "string",
          "Quarter": "string",
          "ScoreID": 0,
          "ScoringPlayID": 0,
          "Season": 0,
          "SeasonType": 0,
          "Sequence": 0,
          "Team": "string",
          "TimeRemaining": "string",
          "Week": 0
        },
        "Sequence": 0,
        "Team": "string",
        "TimeRemainingMinutes": 0,
        "TimeRemainingSeconds": 0,
        "Type": "string",
        "Updated": "string",
        "YardLine": 0,
        "YardLineTerritory": "string",
        "YardsGained": 0,
        "YardsToEndZone": 0
      }
    ],
    "Quarters": [
      {
        "AwayTeamScore": 0,
        "Created": "string",
        "Description": "string",
        "HomeTeamScore": 0,
        "Name": "string",
        "Number": 0,
        "QuarterID": 0,
        "ScoreID": 0,
        "Updated": "string"
      }
    ],
    "Score": {
      "Attendance": 0,
      "AwayRotationNumber": 0,
      "AwayScore": 0,
      "AwayScoreOvertime": 0,
      "AwayScoreQuarter1": 0,
      "AwayScoreQuarter2": 0,
      "AwayScoreQuarter3": 0,
      "AwayScoreQuarter4": 0,
      "AwayTeam": "string",
      "AwayTeamID": 0,
      "AwayTeamMoneyLine": 0,
      "AwayTimeouts": 0,
      "Canceled": true,
      "Channel": "string",
      "Closed": true,
      "Date": "string",
      "DateTime": "string",
      "DateTimeUTC": "string",
      "Day": "string",
      "Distance": "string",
      "Down": 0,
      "DownAndDistance": "string",
      "ForecastDescription": "string",
      "ForecastTempHigh": 0,
      "ForecastTempLow": 0,
      "ForecastWindChill": 0,
      "ForecastWindSpeed": 0,
      "GameEndDateTime": "string",
      "GameKey": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "GlobalAwayTeamID": 0,
      "GlobalGameID": 0,
      "GlobalHomeTeamID": 0,
      "Has1stQuarterStarted": true,
      "Has2ndQuarterStarted": true,
      "Has3rdQuarterStarted": true,
      "Has4thQuarterStarted": true,
      "HasStarted": true,
      "HomeRotationNumber": 0,
      "HomeScore": 0,
      "HomeScoreOvertime": 0,
      "HomeScoreQuarter1": 0,
      "HomeScoreQuarter2": 0,
      "HomeScoreQuarter3": 0,
      "HomeScoreQuarter4": 0,
      "HomeTeam": "string",
      "HomeTeamID": 0,
      "HomeTeamMoneyLine": 0,
      "HomeTimeouts": 0,
      "IsInProgress": true,
      "IsOver": true,
      "IsOvertime": true,
      "LastPlay": "string",
      "LastUpdated": "string",
      "NeutralVenue": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "PointSpread": 0,
      "PointSpreadAwayTeamMoneyLine": 0,
      "PointSpreadHomeTeamMoneyLine": 0,
      "Possession": "string",
      "Quarter": "string",
      "QuarterDescription": "string",
      "RedZone": "string",
      "RefereeID": 0,
      "ScoreID": 0,
      "Season": 0,
      "SeasonType": 0,
      "StadiumDetails": {
        "Capacity": 0,
        "City": "string",
        "Country": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "Name": "string",
        "PlayingSurface": "string",
        "StadiumID": 0,
        "State": "string",
        "Type": "string"
      },
      "StadiumID": 0,
      "Status": "string",
      "TimeRemaining": "string",
      "UnderPayout": 0,
      "Week": 0,
      "YardLine": 0,
      "YardLineTerritory": "string"
    }
  }
]
```

<h3 id="play-by-play-simulation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="play-by-play-simulation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayByPlay](#schemaplaybyplay)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_Play">Play</h2>
<!-- backwards compatibility -->
<a id="schemaplay"></a>
<a id="schema_Play"></a>
<a id="tocSplay"></a>
<a id="tocsplay"></a>

```json
{
  "Created": "string",
  "Description": "string",
  "Distance": 0,
  "Down": 0,
  "IsScoringPlay": true,
  "Opponent": "string",
  "PlayID": 0,
  "PlayStats": [
    {
      "AssistedTackles": 0,
      "BlockedKickReturnTouchdowns": 0,
      "BlockedKickReturnYards": 0,
      "BlockedKickReturns": 0,
      "BlockedKicks": 0,
      "Created": "string",
      "Direction": "string",
      "ExtraPointsAttempted": 0,
      "ExtraPointsHadBlocked": 0,
      "ExtraPointsMade": 0,
      "FieldGoalReturnTouchdowns": 0,
      "FieldGoalReturnYards": 0,
      "FieldGoalReturns": 0,
      "FieldGoalsAttempted": 0,
      "FieldGoalsHadBlocked": 0,
      "FieldGoalsMade": 0,
      "FieldGoalsYards": 0,
      "FumbleReturnTouchdowns": 0,
      "FumbleReturnYards": 0,
      "Fumbles": 0,
      "FumblesForced": 0,
      "FumblesLost": 0,
      "FumblesRecovered": 0,
      "HomeOrAway": "string",
      "InterceptionReturnTouchdowns": 0,
      "InterceptionReturnYards": 0,
      "Interceptions": 0,
      "KickReturnTouchdowns": 0,
      "KickReturnYards": 0,
      "KickReturns": 0,
      "KickoffTouchbacks": 0,
      "KickoffYards": 0,
      "Kickoffs": 0,
      "Name": "string",
      "Opponent": "string",
      "PassesDefended": 0,
      "PassingAttempts": 0,
      "PassingCompletions": 0,
      "PassingInterceptions": 0,
      "PassingSackYards": 0,
      "PassingSacks": 0,
      "PassingTouchdowns": 0,
      "PassingYards": 0,
      "Penalties": 0,
      "PenaltyYards": 0,
      "PlayID": 0,
      "PlayStatID": 0,
      "PlayerID": 0,
      "PuntReturnTouchdowns": 0,
      "PuntReturnYards": 0,
      "PuntReturns": 0,
      "PuntTouchbacks": 0,
      "PuntYards": 0,
      "Punts": 0,
      "PuntsHadBlocked": 0,
      "ReceivingTargets": 0,
      "ReceivingTouchdowns": 0,
      "ReceivingYards": 0,
      "Receptions": 0,
      "RushingAttempts": 0,
      "RushingTouchdowns": 0,
      "RushingYards": 0,
      "SackYards": 0,
      "Sacks": 0,
      "Safeties": 0,
      "Sequence": 0,
      "SoloTackles": 0,
      "TacklesForLoss": 0,
      "Team": "string",
      "TwoPointConversionAttempts": 0,
      "TwoPointConversionPasses": 0,
      "TwoPointConversionReceptions": 0,
      "TwoPointConversionReturns": 0,
      "TwoPointConversionRuns": 0,
      "Updated": "string"
    }
  ],
  "PlayTime": "string",
  "QuarterID": 0,
  "QuarterName": "string",
  "ScoringPlay": {
    "AwayScore": 0,
    "AwayTeam": "string",
    "Date": "string",
    "GameKey": "string",
    "HomeScore": 0,
    "HomeTeam": "string",
    "PlayDescription": "string",
    "Quarter": "string",
    "ScoreID": 0,
    "ScoringPlayID": 0,
    "Season": 0,
    "SeasonType": 0,
    "Sequence": 0,
    "Team": "string",
    "TimeRemaining": "string",
    "Week": 0
  },
  "Sequence": 0,
  "Team": "string",
  "TimeRemainingMinutes": 0,
  "TimeRemainingSeconds": 0,
  "Type": "string",
  "Updated": "string",
  "YardLine": 0,
  "YardLineTerritory": "string",
  "YardsGained": 0,
  "YardsToEndZone": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Created|string \| null|false|none|none|
|Description|string \| null|false|none|none|
|Distance|integer \| null|false|none|none|
|Down|integer \| null|false|none|none|
|IsScoringPlay|boolean \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|PlayID|integer|false|none|none|
|PlayStats|[[PlayStat](#schemaplaystat)]|false|none|none|
|PlayTime|string \| null|false|none|none|
|QuarterID|integer|false|none|none|
|QuarterName|string \| null|false|none|none|
|ScoringPlay|[ScoringPlay](#schemascoringplay)|false|none|none|
|Sequence|integer \| null|false|none|none|
|Team|string \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|
|Type|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|YardLine|integer \| null|false|none|none|
|YardLineTerritory|string \| null|false|none|none|
|YardsGained|integer \| null|false|none|none|
|YardsToEndZone|integer \| null|false|none|none|

<h2 id="tocS_PlayByPlay">PlayByPlay</h2>
<!-- backwards compatibility -->
<a id="schemaplaybyplay"></a>
<a id="schema_PlayByPlay"></a>
<a id="tocSplaybyplay"></a>
<a id="tocsplaybyplay"></a>

```json
{
  "Plays": [
    {
      "Created": "string",
      "Description": "string",
      "Distance": 0,
      "Down": 0,
      "IsScoringPlay": true,
      "Opponent": "string",
      "PlayID": 0,
      "PlayStats": [
        {
          "AssistedTackles": 0,
          "BlockedKickReturnTouchdowns": 0,
          "BlockedKickReturnYards": 0,
          "BlockedKickReturns": 0,
          "BlockedKicks": 0,
          "Created": "string",
          "Direction": "string",
          "ExtraPointsAttempted": 0,
          "ExtraPointsHadBlocked": 0,
          "ExtraPointsMade": 0,
          "FieldGoalReturnTouchdowns": 0,
          "FieldGoalReturnYards": 0,
          "FieldGoalReturns": 0,
          "FieldGoalsAttempted": 0,
          "FieldGoalsHadBlocked": 0,
          "FieldGoalsMade": 0,
          "FieldGoalsYards": 0,
          "FumbleReturnTouchdowns": 0,
          "FumbleReturnYards": 0,
          "Fumbles": 0,
          "FumblesForced": 0,
          "FumblesLost": 0,
          "FumblesRecovered": 0,
          "HomeOrAway": "string",
          "InterceptionReturnTouchdowns": 0,
          "InterceptionReturnYards": 0,
          "Interceptions": 0,
          "KickReturnTouchdowns": 0,
          "KickReturnYards": 0,
          "KickReturns": 0,
          "KickoffTouchbacks": 0,
          "KickoffYards": 0,
          "Kickoffs": 0,
          "Name": "string",
          "Opponent": "string",
          "PassesDefended": 0,
          "PassingAttempts": 0,
          "PassingCompletions": 0,
          "PassingInterceptions": 0,
          "PassingSackYards": 0,
          "PassingSacks": 0,
          "PassingTouchdowns": 0,
          "PassingYards": 0,
          "Penalties": 0,
          "PenaltyYards": 0,
          "PlayID": 0,
          "PlayStatID": 0,
          "PlayerID": 0,
          "PuntReturnTouchdowns": 0,
          "PuntReturnYards": 0,
          "PuntReturns": 0,
          "PuntTouchbacks": 0,
          "PuntYards": 0,
          "Punts": 0,
          "PuntsHadBlocked": 0,
          "ReceivingTargets": 0,
          "ReceivingTouchdowns": 0,
          "ReceivingYards": 0,
          "Receptions": 0,
          "RushingAttempts": 0,
          "RushingTouchdowns": 0,
          "RushingYards": 0,
          "SackYards": 0,
          "Sacks": 0,
          "Safeties": 0,
          "Sequence": 0,
          "SoloTackles": 0,
          "TacklesForLoss": 0,
          "Team": "string",
          "TwoPointConversionAttempts": 0,
          "TwoPointConversionPasses": 0,
          "TwoPointConversionReceptions": 0,
          "TwoPointConversionReturns": 0,
          "TwoPointConversionRuns": 0,
          "Updated": "string"
        }
      ],
      "PlayTime": "string",
      "QuarterID": 0,
      "QuarterName": "string",
      "ScoringPlay": {
        "AwayScore": 0,
        "AwayTeam": "string",
        "Date": "string",
        "GameKey": "string",
        "HomeScore": 0,
        "HomeTeam": "string",
        "PlayDescription": "string",
        "Quarter": "string",
        "ScoreID": 0,
        "ScoringPlayID": 0,
        "Season": 0,
        "SeasonType": 0,
        "Sequence": 0,
        "Team": "string",
        "TimeRemaining": "string",
        "Week": 0
      },
      "Sequence": 0,
      "Team": "string",
      "TimeRemainingMinutes": 0,
      "TimeRemainingSeconds": 0,
      "Type": "string",
      "Updated": "string",
      "YardLine": 0,
      "YardLineTerritory": "string",
      "YardsGained": 0,
      "YardsToEndZone": 0
    }
  ],
  "Quarters": [
    {
      "AwayTeamScore": 0,
      "Created": "string",
      "Description": "string",
      "HomeTeamScore": 0,
      "Name": "string",
      "Number": 0,
      "QuarterID": 0,
      "ScoreID": 0,
      "Updated": "string"
    }
  ],
  "Score": {
    "Attendance": 0,
    "AwayRotationNumber": 0,
    "AwayScore": 0,
    "AwayScoreOvertime": 0,
    "AwayScoreQuarter1": 0,
    "AwayScoreQuarter2": 0,
    "AwayScoreQuarter3": 0,
    "AwayScoreQuarter4": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTimeouts": 0,
    "Canceled": true,
    "Channel": "string",
    "Closed": true,
    "Date": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "Distance": "string",
    "Down": 0,
    "DownAndDistance": "string",
    "ForecastDescription": "string",
    "ForecastTempHigh": 0,
    "ForecastTempLow": 0,
    "ForecastWindChill": 0,
    "ForecastWindSpeed": 0,
    "GameEndDateTime": "string",
    "GameKey": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "Has1stQuarterStarted": true,
    "Has2ndQuarterStarted": true,
    "Has3rdQuarterStarted": true,
    "Has4thQuarterStarted": true,
    "HasStarted": true,
    "HomeRotationNumber": 0,
    "HomeScore": 0,
    "HomeScoreOvertime": 0,
    "HomeScoreQuarter1": 0,
    "HomeScoreQuarter2": 0,
    "HomeScoreQuarter3": 0,
    "HomeScoreQuarter4": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTimeouts": 0,
    "IsInProgress": true,
    "IsOver": true,
    "IsOvertime": true,
    "LastPlay": "string",
    "LastUpdated": "string",
    "NeutralVenue": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
    "Possession": "string",
    "Quarter": "string",
    "QuarterDescription": "string",
    "RedZone": "string",
    "RefereeID": 0,
    "ScoreID": 0,
    "Season": 0,
    "SeasonType": 0,
    "StadiumDetails": {
      "Capacity": 0,
      "City": "string",
      "Country": "string",
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "PlayingSurface": "string",
      "StadiumID": 0,
      "State": "string",
      "Type": "string"
    },
    "StadiumID": 0,
    "Status": "string",
    "TimeRemaining": "string",
    "UnderPayout": 0,
    "Week": 0,
    "YardLine": 0,
    "YardLineTerritory": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Plays|[[Play](#schemaplay)]|false|none|none|
|Quarters|[[Quarter](#schemaquarter)]|false|none|none|
|Score|[Score](#schemascore)|false|none|none|

<h2 id="tocS_PlayStat">PlayStat</h2>
<!-- backwards compatibility -->
<a id="schemaplaystat"></a>
<a id="schema_PlayStat"></a>
<a id="tocSplaystat"></a>
<a id="tocsplaystat"></a>

```json
{
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKickReturns": 0,
  "BlockedKicks": 0,
  "Created": "string",
  "Direction": "string",
  "ExtraPointsAttempted": 0,
  "ExtraPointsHadBlocked": 0,
  "ExtraPointsMade": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalReturns": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsYards": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesRecovered": 0,
  "HomeOrAway": "string",
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturns": 0,
  "KickoffTouchbacks": 0,
  "KickoffYards": 0,
  "Kickoffs": 0,
  "Name": "string",
  "Opponent": "string",
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingSackYards": 0,
  "PassingSacks": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "Penalties": 0,
  "PenaltyYards": 0,
  "PlayID": 0,
  "PlayStatID": 0,
  "PlayerID": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturns": 0,
  "PuntTouchbacks": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "ReceivingTargets": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "Sequence": 0,
  "SoloTackles": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TwoPointConversionAttempts": 0,
  "TwoPointConversionPasses": 0,
  "TwoPointConversionReceptions": 0,
  "TwoPointConversionReturns": 0,
  "TwoPointConversionRuns": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|integer \| null|false|none|none|
|BlockedKickReturnTouchdowns|integer \| null|false|none|none|
|BlockedKickReturnYards|integer \| null|false|none|none|
|BlockedKickReturns|integer \| null|false|none|none|
|BlockedKicks|integer \| null|false|none|none|
|Created|string \| null|false|none|none|
|Direction|string \| null|false|none|none|
|ExtraPointsAttempted|integer \| null|false|none|none|
|ExtraPointsHadBlocked|integer \| null|false|none|none|
|ExtraPointsMade|integer \| null|false|none|none|
|FieldGoalReturnTouchdowns|integer \| null|false|none|none|
|FieldGoalReturnYards|integer \| null|false|none|none|
|FieldGoalReturns|integer \| null|false|none|none|
|FieldGoalsAttempted|integer \| null|false|none|none|
|FieldGoalsHadBlocked|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FieldGoalsYards|integer \| null|false|none|none|
|FumbleReturnTouchdowns|integer \| null|false|none|none|
|FumbleReturnYards|integer \| null|false|none|none|
|Fumbles|integer \| null|false|none|none|
|FumblesForced|integer \| null|false|none|none|
|FumblesLost|integer \| null|false|none|none|
|FumblesRecovered|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|InterceptionReturnTouchdowns|integer \| null|false|none|none|
|InterceptionReturnYards|integer \| null|false|none|none|
|Interceptions|integer \| null|false|none|none|
|KickReturnTouchdowns|integer \| null|false|none|none|
|KickReturnYards|integer \| null|false|none|none|
|KickReturns|integer \| null|false|none|none|
|KickoffTouchbacks|integer \| null|false|none|none|
|KickoffYards|integer \| null|false|none|none|
|Kickoffs|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|PassesDefended|integer \| null|false|none|none|
|PassingAttempts|integer \| null|false|none|none|
|PassingCompletions|integer \| null|false|none|none|
|PassingInterceptions|integer \| null|false|none|none|
|PassingSackYards|integer \| null|false|none|none|
|PassingSacks|integer \| null|false|none|none|
|PassingTouchdowns|integer \| null|false|none|none|
|PassingYards|integer \| null|false|none|none|
|Penalties|integer \| null|false|none|none|
|PenaltyYards|integer \| null|false|none|none|
|PlayID|integer|false|none|none|
|PlayStatID|integer|false|none|none|
|PlayerID|integer|false|none|none|
|PuntReturnTouchdowns|integer \| null|false|none|none|
|PuntReturnYards|integer \| null|false|none|none|
|PuntReturns|integer \| null|false|none|none|
|PuntTouchbacks|integer \| null|false|none|none|
|PuntYards|integer \| null|false|none|none|
|Punts|integer \| null|false|none|none|
|PuntsHadBlocked|integer \| null|false|none|none|
|ReceivingTargets|integer \| null|false|none|none|
|ReceivingTouchdowns|integer \| null|false|none|none|
|ReceivingYards|integer \| null|false|none|none|
|Receptions|integer \| null|false|none|none|
|RushingAttempts|integer \| null|false|none|none|
|RushingTouchdowns|integer \| null|false|none|none|
|RushingYards|integer \| null|false|none|none|
|SackYards|number \| null|false|none|none|
|Sacks|number \| null|false|none|none|
|Safeties|integer \| null|false|none|none|
|Sequence|integer|false|none|none|
|SoloTackles|integer \| null|false|none|none|
|TacklesForLoss|integer \| null|false|none|none|
|Team|string \| null|false|none|none|
|TwoPointConversionAttempts|integer \| null|false|none|none|
|TwoPointConversionPasses|integer \| null|false|none|none|
|TwoPointConversionReceptions|integer \| null|false|none|none|
|TwoPointConversionReturns|integer \| null|false|none|none|
|TwoPointConversionRuns|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_Quarter">Quarter</h2>
<!-- backwards compatibility -->
<a id="schemaquarter"></a>
<a id="schema_Quarter"></a>
<a id="tocSquarter"></a>
<a id="tocsquarter"></a>

```json
{
  "AwayTeamScore": 0,
  "Created": "string",
  "Description": "string",
  "HomeTeamScore": 0,
  "Name": "string",
  "Number": 0,
  "QuarterID": 0,
  "ScoreID": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayTeamScore|integer \| null|false|none|none|
|Created|string \| null|false|none|none|
|Description|string \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer|false|none|none|
|QuarterID|integer|false|none|none|
|ScoreID|integer|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
{
  "Attendance": 0,
  "AwayRotationNumber": 0,
  "AwayScore": 0,
  "AwayScoreOvertime": 0,
  "AwayScoreQuarter1": 0,
  "AwayScoreQuarter2": 0,
  "AwayScoreQuarter3": 0,
  "AwayScoreQuarter4": 0,
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTimeouts": 0,
  "Canceled": true,
  "Channel": "string",
  "Closed": true,
  "Date": "string",
  "DateTime": "string",
  "DateTimeUTC": "string",
  "Day": "string",
  "Distance": "string",
  "Down": 0,
  "DownAndDistance": "string",
  "ForecastDescription": "string",
  "ForecastTempHigh": 0,
  "ForecastTempLow": 0,
  "ForecastWindChill": 0,
  "ForecastWindSpeed": 0,
  "GameEndDateTime": "string",
  "GameKey": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "GlobalAwayTeamID": 0,
  "GlobalGameID": 0,
  "GlobalHomeTeamID": 0,
  "Has1stQuarterStarted": true,
  "Has2ndQuarterStarted": true,
  "Has3rdQuarterStarted": true,
  "Has4thQuarterStarted": true,
  "HasStarted": true,
  "HomeRotationNumber": 0,
  "HomeScore": 0,
  "HomeScoreOvertime": 0,
  "HomeScoreQuarter1": 0,
  "HomeScoreQuarter2": 0,
  "HomeScoreQuarter3": 0,
  "HomeScoreQuarter4": 0,
  "HomeTeam": "string",
  "HomeTeamID": 0,
  "HomeTeamMoneyLine": 0,
  "HomeTimeouts": 0,
  "IsInProgress": true,
  "IsOver": true,
  "IsOvertime": true,
  "LastPlay": "string",
  "LastUpdated": "string",
  "NeutralVenue": true,
  "OverPayout": 0,
  "OverUnder": 0,
  "PointSpread": 0,
  "PointSpreadAwayTeamMoneyLine": 0,
  "PointSpreadHomeTeamMoneyLine": 0,
  "Possession": "string",
  "Quarter": "string",
  "QuarterDescription": "string",
  "RedZone": "string",
  "RefereeID": 0,
  "ScoreID": 0,
  "Season": 0,
  "SeasonType": 0,
  "StadiumDetails": {
    "Capacity": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "PlayingSurface": "string",
    "StadiumID": 0,
    "State": "string",
    "Type": "string"
  },
  "StadiumID": 0,
  "Status": "string",
  "TimeRemaining": "string",
  "UnderPayout": 0,
  "Week": 0,
  "YardLine": 0,
  "YardLineTerritory": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendance|integer|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayScore|integer \| null|false|none|none|
|AwayScoreOvertime|integer \| null|false|none|none|
|AwayScoreQuarter1|integer \| null|false|none|none|
|AwayScoreQuarter2|integer \| null|false|none|none|
|AwayScoreQuarter3|integer \| null|false|none|none|
|AwayScoreQuarter4|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer \| null|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTimeouts|integer \| null|false|none|none|
|Canceled|boolean \| null|false|none|none|
|Channel|string \| null|false|none|none|
|Closed|boolean \| null|false|none|none|
|Date|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|DateTimeUTC|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|Distance|string \| null|false|none|none|
|Down|integer \| null|false|none|none|
|DownAndDistance|string \| null|false|none|none|
|ForecastDescription|string \| null|false|none|none|
|ForecastTempHigh|integer \| null|false|none|none|
|ForecastTempLow|integer \| null|false|none|none|
|ForecastWindChill|integer \| null|false|none|none|
|ForecastWindSpeed|integer \| null|false|none|none|
|GameEndDateTime|string \| null|false|none|none|
|GameKey|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|GlobalAwayTeamID|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalHomeTeamID|integer \| null|false|none|none|
|Has1stQuarterStarted|boolean|false|none|none|
|Has2ndQuarterStarted|boolean|false|none|none|
|Has3rdQuarterStarted|boolean|false|none|none|
|Has4thQuarterStarted|boolean|false|none|none|
|HasStarted|boolean|false|none|none|
|HomeRotationNumber|integer \| null|false|none|none|
|HomeScore|integer \| null|false|none|none|
|HomeScoreOvertime|integer \| null|false|none|none|
|HomeScoreQuarter1|integer \| null|false|none|none|
|HomeScoreQuarter2|integer \| null|false|none|none|
|HomeScoreQuarter3|integer \| null|false|none|none|
|HomeScoreQuarter4|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamID|integer \| null|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTimeouts|integer \| null|false|none|none|
|IsInProgress|boolean|false|none|none|
|IsOver|boolean|false|none|none|
|IsOvertime|boolean|false|none|none|
|LastPlay|string \| null|false|none|none|
|LastUpdated|string \| null|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|PointSpreadAwayTeamMoneyLine|integer \| null|false|none|none|
|PointSpreadHomeTeamMoneyLine|integer \| null|false|none|none|
|Possession|string \| null|false|none|none|
|Quarter|string \| null|false|none|none|
|QuarterDescription|string \| null|false|none|none|
|RedZone|string \| null|false|none|none|
|RefereeID|integer \| null|false|none|none|
|ScoreID|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|StadiumDetails|[Stadium](#schemastadium)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|TimeRemaining|string \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Week|integer|false|none|none|
|YardLine|integer \| null|false|none|none|
|YardLineTerritory|string \| null|false|none|none|

<h2 id="tocS_ScoringPlay">ScoringPlay</h2>
<!-- backwards compatibility -->
<a id="schemascoringplay"></a>
<a id="schema_ScoringPlay"></a>
<a id="tocSscoringplay"></a>
<a id="tocsscoringplay"></a>

```json
{
  "AwayScore": 0,
  "AwayTeam": "string",
  "Date": "string",
  "GameKey": "string",
  "HomeScore": 0,
  "HomeTeam": "string",
  "PlayDescription": "string",
  "Quarter": "string",
  "ScoreID": 0,
  "ScoringPlayID": 0,
  "Season": 0,
  "SeasonType": 0,
  "Sequence": 0,
  "Team": "string",
  "TimeRemaining": "string",
  "Week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayScore|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|Date|string \| null|false|none|none|
|GameKey|string \| null|false|none|none|
|HomeScore|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|PlayDescription|string \| null|false|none|none|
|Quarter|string \| null|false|none|none|
|ScoreID|integer|false|none|none|
|ScoringPlayID|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Sequence|integer \| null|false|none|none|
|Team|string \| null|false|none|none|
|TimeRemaining|string \| null|false|none|none|
|Week|integer|false|none|none|

<h2 id="tocS_Stadium">Stadium</h2>
<!-- backwards compatibility -->
<a id="schemastadium"></a>
<a id="schema_Stadium"></a>
<a id="tocSstadium"></a>
<a id="tocsstadium"></a>

```json
{
  "Capacity": 0,
  "City": "string",
  "Country": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "Name": "string",
  "PlayingSurface": "string",
  "StadiumID": 0,
  "State": "string",
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Capacity|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|PlayingSurface|string \| null|false|none|none|
|StadiumID|integer|false|none|none|
|State|string \| null|false|none|none|
|Type|string \| null|false|none|none|
