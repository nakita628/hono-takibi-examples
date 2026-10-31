<h1 id="nfl-v3-projections">NFL v3 Projections v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NFL projected stats API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nfl/projections">http://azure-api.sportsdata.io/v3/nfl/projections</a>

* <a href="https://azure-api.sportsdata.io/v3/nfl/projections">https://azure-api.sportsdata.io/v3/nfl/projections</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nfl-v3-projections-default">Default</h1>

## DFS Slate Ownership Projections by SlateID

<a id="opIdDfsSlateOwnershipProjectionsBySlateid"></a>

> Code samples

```bash
curl https://example.com/XML/DfsSlateOwnershipProjectionsBySlateID/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}`

Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.

<h3 id="dfs-slate-ownership-projections-by-slateid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|slateId|path|string|true|SlateID of the DFS Slate you wish to get ownership projections for. Will have an empty SlateOwnershipProjections if this slate was not projected|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Operator": "string",
  "OperatorDay": "string",
  "OperatorName": "string",
  "OperatorSlateID": 0,
  "OperatorStartTime": "string",
  "SlateID": 0,
  "SlateOwnershipProjections": [
    {
      "FantasyDefensePlayerID": 0,
      "IsCaptain": true,
      "PlayerID": 0,
      "ProjectedOwnershipPercentage": 0,
      "SlateID": 0
    }
  ]
}
```

<h3 id="dfs-slate-ownership-projections-by-slateid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DfsSlateWithOwnershipProjection](#schemadfsslatewithownershipprojection)|

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
|date|path|string|true|The date of the slates.<br><br>Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.|

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
          "AwayTeam": "string",
          "AwayTeamMoneyLine": 0,
          "Canceled": true,
          "Channel": "string",
          "Date": "string",
          "DateTime": "string",
          "Day": "string",
          "ForecastDescription": "string",
          "ForecastTempHigh": 0,
          "ForecastTempLow": 0,
          "ForecastWindChill": 0,
          "ForecastWindSpeed": 0,
          "GameKey": "string",
          "GeoLat": 0,
          "GeoLong": 0,
          "GlobalAwayTeamID": 0,
          "GlobalGameID": 0,
          "GlobalHomeTeamID": 0,
          "HomeTeam": "string",
          "HomeTeamMoneyLine": 0,
          "OverUnder": 0,
          "PointSpread": 0,
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
          "Week": 0
        },
        "GameID": 0,
        "OperatorGameID": 0,
        "RemovedByOperator": true,
        "ScoreID": 0,
        "SlateGameID": 0,
        "SlateID": 0
      }
    ],
    "DfsSlatePlayers": [
      {
        "FantasyDefenseProjectionStatID": 0,
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

## DFS Slates by Week

<a id="opIdDfsSlatesByWeek"></a>

> Code samples

```bash
curl https://example.com/XML/DfsSlatesByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DfsSlatesByWeek/{season}/{week}`

<h3 id="dfs-slates-by-week-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>|
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code>|

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
          "AwayTeam": "string",
          "AwayTeamMoneyLine": 0,
          "Canceled": true,
          "Channel": "string",
          "Date": "string",
          "DateTime": "string",
          "Day": "string",
          "ForecastDescription": "string",
          "ForecastTempHigh": 0,
          "ForecastTempLow": 0,
          "ForecastWindChill": 0,
          "ForecastWindSpeed": 0,
          "GameKey": "string",
          "GeoLat": 0,
          "GeoLong": 0,
          "GlobalAwayTeamID": 0,
          "GlobalGameID": 0,
          "GlobalHomeTeamID": 0,
          "HomeTeam": "string",
          "HomeTeamMoneyLine": 0,
          "OverUnder": 0,
          "PointSpread": 0,
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
          "Week": 0
        },
        "GameID": 0,
        "OperatorGameID": 0,
        "RemovedByOperator": true,
        "ScoreID": 0,
        "SlateGameID": 0,
        "SlateID": 0
      }
    ],
    "DfsSlatePlayers": [
      {
        "FantasyDefenseProjectionStatID": 0,
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

<h3 id="dfs-slates-by-week-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dfs-slates-by-week-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DfsSlate](#schemadfsslate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Fantasy Defense Game Stats (w/ DFS Salaries)

<a id="opIdProjectedFantasyDefenseGameStatsWDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/FantasyDefenseProjectionsByGame/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/FantasyDefenseProjectionsByGame/{season}/{week}`

<h3 id="projected-fantasy-defense-game-stats-w-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |

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
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "Date": "string",
    "DateTime": "string",
    "Day": "string",
    "DefensiveTouchdowns": 0,
    "DraftKingsFantasyPointsAllowed": 0,
    "DraftKingsKickerFantasyPointsAllowed": 0,
    "DraftKingsPosition": "string",
    "DraftKingsQuarterbackFantasyPointsAllowed": 0,
    "DraftKingsRunningbackFantasyPointsAllowed": 0,
    "DraftKingsSalary": 0,
    "DraftKingsTightEndFantasyPointsAllowed": 0,
    "DraftKingsWideReceiverFantasyPointsAllowed": 0,
    "FanDuelFantasyPointsAllowed": 0,
    "FanDuelKickerFantasyPointsAllowed": 0,
    "FanDuelPosition": "string",
    "FanDuelQuarterbackFantasyPointsAllowed": 0,
    "FanDuelRunningbackFantasyPointsAllowed": 0,
    "FanDuelSalary": 0,
    "FanDuelTightEndFantasyPointsAllowed": 0,
    "FanDuelWideReceiverFantasyPointsAllowed": 0,
    "FantasyDataSalary": 0,
    "FantasyDefenseID": 0,
    "FantasyDraftFantasyPointsAllowed": 0,
    "FantasyDraftKickerFantasyPointsAllowed": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftQuarterbackFantasyPointsAllowed": 0,
    "FantasyDraftRunningbackFantasyPointsAllowed": 0,
    "FantasyDraftSalary": 0,
    "FantasyDraftTightEndFantasyPointsAllowed": 0,
    "FantasyDraftWideReceiverFantasyPointsAllowed": 0,
    "FantasyPoints": 0,
    "FantasyPointsAllowed": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "FumblesForced": 0,
    "FumblesRecovered": 0,
    "GameKey": "string",
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturns": 0,
    "KickerFantasyPointsAllowed": 0,
    "OffensiveYardsAllowed": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PassesDefended": 0,
    "PlayerID": 0,
    "PointsAllowed": 0,
    "PointsAllowedByDefenseSpecialTeams": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturns": 0,
    "QuarterbackFantasyPointsAllowed": 0,
    "QuarterbackHits": 0,
    "RunningbackFantasyPointsAllowed": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "ScoreID": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "SpecialTeamsTouchdowns": 0,
    "Stadium": "string",
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "TightEndFantasyPointsAllowed": 0,
    "TouchdownsScored": 0,
    "TwoPointConversionReturns": 0,
    "VictivSalary": 0,
    "Week": 0,
    "WideReceiverFantasyPointsAllowed": 0,
    "WindSpeed": 0,
    "YahooFantasyPointsAllowed": 0,
    "YahooKickerFantasyPointsAllowed": 0,
    "YahooPosition": "string",
    "YahooQuarterbackFantasyPointsAllowed": 0,
    "YahooRunningbackFantasyPointsAllowed": 0,
    "YahooSalary": 0,
    "YahooTightEndFantasyPointsAllowed": 0,
    "YahooWideReceiverFantasyPointsAllowed": 0
  }
]
```

<h3 id="projected-fantasy-defense-game-stats-w-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-fantasy-defense-game-stats-w-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FantasyDefenseGameProjection](#schemafantasydefensegameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Fantasy Defense Season Stats (w/ ADP)

<a id="opIdProjectedFantasyDefenseSeasonStatsWAdp"></a>

> Code samples

```bash
curl https://example.com/XML/FantasyDefenseProjectionsBySeason/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/FantasyDefenseProjectionsBySeason/{season}`

<h3 id="projected-fantasy-defense-season-stats-w-adp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |

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
    "AssistedTackles": 0,
    "AuctionValue": 0,
    "AuctionValuePPR": 0,
    "AverageDraftPosition": 0,
    "AverageDraftPosition2QB": 0,
    "AverageDraftPositionDynasty": 0,
    "AverageDraftPositionPPR": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DefensiveTouchdowns": 0,
    "DraftKingsFantasyPointsAllowed": 0,
    "DraftKingsKickerFantasyPointsAllowed": 0,
    "DraftKingsQuarterbackFantasyPointsAllowed": 0,
    "DraftKingsRunningbackFantasyPointsAllowed": 0,
    "DraftKingsTightEndFantasyPointsAllowed": 0,
    "DraftKingsWideReceiverFantasyPointsAllowed": 0,
    "FanDuelFantasyPointsAllowed": 0,
    "FanDuelKickerFantasyPointsAllowed": 0,
    "FanDuelQuarterbackFantasyPointsAllowed": 0,
    "FanDuelRunningbackFantasyPointsAllowed": 0,
    "FanDuelTightEndFantasyPointsAllowed": 0,
    "FanDuelWideReceiverFantasyPointsAllowed": 0,
    "FantasyDraftFantasyPointsAllowed": 0,
    "FantasyDraftKickerFantasyPointsAllowed": 0,
    "FantasyDraftQuarterbackFantasyPointsAllowed": 0,
    "FantasyDraftRunningbackFantasyPointsAllowed": 0,
    "FantasyDraftTightEndFantasyPointsAllowed": 0,
    "FantasyDraftWideReceiverFantasyPointsAllowed": 0,
    "FantasyPoints": 0,
    "FantasyPointsAllowed": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "FumblesForced": 0,
    "FumblesRecovered": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturns": 0,
    "KickerFantasyPointsAllowed": 0,
    "OffensiveYardsAllowed": 0,
    "PassesDefended": 0,
    "PlayerID": 0,
    "PointsAllowed": 0,
    "PointsAllowedByDefenseSpecialTeams": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturns": 0,
    "QuarterbackFantasyPointsAllowed": 0,
    "QuarterbackHits": 0,
    "RunningbackFantasyPointsAllowed": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "SpecialTeamsTouchdowns": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "TightEndFantasyPointsAllowed": 0,
    "TouchdownsScored": 0,
    "TwoPointConversionReturns": 0,
    "WideReceiverFantasyPointsAllowed": 0,
    "WindSpeed": 0,
    "YahooFantasyPointsAllowed": 0,
    "YahooKickerFantasyPointsAllowed": 0,
    "YahooQuarterbackFantasyPointsAllowed": 0,
    "YahooRunningbackFantasyPointsAllowed": 0,
    "YahooTightEndFantasyPointsAllowed": 0,
    "YahooWideReceiverFantasyPointsAllowed": 0
  }
]
```

<h3 id="projected-fantasy-defense-season-stats-w-adp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-fantasy-defense-season-stats-w-adp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FantasyDefenseSeasonProjection](#schemafantasydefenseseasonprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

<a id="opIdIdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/IdpPlayerGameProjectionStatsByPlayerID/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}`

<h3 id="idp-projected-player-game-stats-by-player-w-injuries-lineups-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |
|playerid|path|string|true|Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Activated": 0,
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "DateTime": "string",
  "Day": "string",
  "DeclaredInactive": true,
  "DefensiveSnapsPlayed": 0,
  "DefensiveTeamSnaps": 0,
  "DefensiveTouchdowns": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "ExtraPointsAttempted": 0,
  "ExtraPointsHadBlocked": 0,
  "ExtraPointsMade": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPPR": 0,
  "FantasyPointsYahoo": 0,
  "FantasyPosition": "string",
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsMade0to19": 0,
  "FieldGoalsMade20to29": 0,
  "FieldGoalsMade30to39": 0,
  "FieldGoalsMade40to49": 0,
  "FieldGoalsMade50Plus": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesOutOfBounds": 0,
  "FumblesOwnRecoveries": 0,
  "FumblesRecovered": 0,
  "GameDate": "string",
  "GameKey": "string",
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "Humidity": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryPractice": "string",
  "InjuryPracticeDescription": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "IsGameOver": true,
  "KickReturnFairCatches": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "MiscAssistedTackles": 0,
  "MiscFumblesForced": 0,
  "MiscFumblesRecovered": 0,
  "MiscSoloTackles": 0,
  "Name": "string",
  "Number": 0,
  "OffensiveFumbleRecoveryTouchdowns": 0,
  "OffensiveSnapsPlayed": 0,
  "OffensiveTeamSnaps": 0,
  "OffensiveTouchdowns": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingLong": 0,
  "PassingRating": 0,
  "PassingSackYards": 0,
  "PassingSacks": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Played": 0,
  "PlayerGameID": 0,
  "PlayerID": 0,
  "PlayingSurface": "string",
  "Position": "string",
  "PositionCategory": "string",
  "PuntAverage": 0,
  "PuntInside20": 0,
  "PuntLong": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnFairCatches": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntTouchbacks": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "ReceivingLong": 0,
  "ReceivingTargets": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "ReceivingYardsPerTarget": 0,
  "ReceptionPercentage": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "SafetiesAllowed": 0,
  "ScoreID": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "SnapCountsConfirmed": true,
  "SoloTackles": 0,
  "SpecialTeamsAssistedTackles": 0,
  "SpecialTeamsFumblesForced": 0,
  "SpecialTeamsFumblesRecovered": 0,
  "SpecialTeamsSnapsPlayed": 0,
  "SpecialTeamsSoloTackles": 0,
  "SpecialTeamsTeamSnaps": 0,
  "SpecialTeamsTouchdowns": 0,
  "Stadium": "string",
  "Started": 0,
  "Tackles": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "Touchdowns": 0,
  "TwoPointConversionPasses": 0,
  "TwoPointConversionReceptions": 0,
  "TwoPointConversionReturns": 0,
  "TwoPointConversionRuns": 0,
  "VictivSalary": 0,
  "Week": 0,
  "WindSpeed": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

<h3 id="idp-projected-player-game-stats-by-player-w-injuries-lineups-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerGameProjection](#schemaplayergameprojection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

<a id="opIdIdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/IdpPlayerGameProjectionStatsByTeam/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}`

<h3 id="idp-projected-player-game-stats-by-team-w-injuries-lineups-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |
|team|path|string|true|Abbreviation of the team. Example: <code>WAS</code>.|

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
    "Activated": 0,
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DateTime": "string",
    "Day": "string",
    "DeclaredInactive": true,
    "DefensiveSnapsPlayed": 0,
    "DefensiveTeamSnaps": 0,
    "DefensiveTouchdowns": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsHadBlocked": 0,
    "ExtraPointsMade": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPPR": 0,
    "FantasyPointsYahoo": 0,
    "FantasyPosition": "string",
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsMade0to19": 0,
    "FieldGoalsMade20to29": 0,
    "FieldGoalsMade30to39": 0,
    "FieldGoalsMade40to49": 0,
    "FieldGoalsMade50Plus": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesOutOfBounds": 0,
    "FumblesOwnRecoveries": 0,
    "FumblesRecovered": 0,
    "GameDate": "string",
    "GameKey": "string",
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryPractice": "string",
    "InjuryPracticeDescription": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnFairCatches": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "MiscAssistedTackles": 0,
    "MiscFumblesForced": 0,
    "MiscFumblesRecovered": 0,
    "MiscSoloTackles": 0,
    "Name": "string",
    "Number": 0,
    "OffensiveFumbleRecoveryTouchdowns": 0,
    "OffensiveSnapsPlayed": 0,
    "OffensiveTeamSnaps": 0,
    "OffensiveTouchdowns": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingLong": 0,
    "PassingRating": 0,
    "PassingSackYards": 0,
    "PassingSacks": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Played": 0,
    "PlayerGameID": 0,
    "PlayerID": 0,
    "PlayingSurface": "string",
    "Position": "string",
    "PositionCategory": "string",
    "PuntAverage": 0,
    "PuntInside20": 0,
    "PuntLong": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnFairCatches": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntTouchbacks": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "ReceivingLong": 0,
    "ReceivingTargets": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "ReceivingYardsPerTarget": 0,
    "ReceptionPercentage": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "SafetiesAllowed": 0,
    "ScoreID": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "SnapCountsConfirmed": true,
    "SoloTackles": 0,
    "SpecialTeamsAssistedTackles": 0,
    "SpecialTeamsFumblesForced": 0,
    "SpecialTeamsFumblesRecovered": 0,
    "SpecialTeamsSnapsPlayed": 0,
    "SpecialTeamsSoloTackles": 0,
    "SpecialTeamsTeamSnaps": 0,
    "SpecialTeamsTouchdowns": 0,
    "Stadium": "string",
    "Started": 0,
    "Tackles": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "Touchdowns": 0,
    "TwoPointConversionPasses": 0,
    "TwoPointConversionReceptions": 0,
    "TwoPointConversionReturns": 0,
    "TwoPointConversionRuns": 0,
    "VictivSalary": 0,
    "Week": 0,
    "WindSpeed": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="idp-projected-player-game-stats-by-team-w-injuries-lineups-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="idp-projected-player-game-stats-by-team-w-injuries-lineups-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

<a id="opIdIdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/IdpPlayerGameProjectionStatsByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}`

<h3 id="idp-projected-player-game-stats-by-week-w-injuries-lineups-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |

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
    "Activated": 0,
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DateTime": "string",
    "Day": "string",
    "DeclaredInactive": true,
    "DefensiveSnapsPlayed": 0,
    "DefensiveTeamSnaps": 0,
    "DefensiveTouchdowns": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsHadBlocked": 0,
    "ExtraPointsMade": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPPR": 0,
    "FantasyPointsYahoo": 0,
    "FantasyPosition": "string",
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsMade0to19": 0,
    "FieldGoalsMade20to29": 0,
    "FieldGoalsMade30to39": 0,
    "FieldGoalsMade40to49": 0,
    "FieldGoalsMade50Plus": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesOutOfBounds": 0,
    "FumblesOwnRecoveries": 0,
    "FumblesRecovered": 0,
    "GameDate": "string",
    "GameKey": "string",
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryPractice": "string",
    "InjuryPracticeDescription": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnFairCatches": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "MiscAssistedTackles": 0,
    "MiscFumblesForced": 0,
    "MiscFumblesRecovered": 0,
    "MiscSoloTackles": 0,
    "Name": "string",
    "Number": 0,
    "OffensiveFumbleRecoveryTouchdowns": 0,
    "OffensiveSnapsPlayed": 0,
    "OffensiveTeamSnaps": 0,
    "OffensiveTouchdowns": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingLong": 0,
    "PassingRating": 0,
    "PassingSackYards": 0,
    "PassingSacks": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Played": 0,
    "PlayerGameID": 0,
    "PlayerID": 0,
    "PlayingSurface": "string",
    "Position": "string",
    "PositionCategory": "string",
    "PuntAverage": 0,
    "PuntInside20": 0,
    "PuntLong": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnFairCatches": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntTouchbacks": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "ReceivingLong": 0,
    "ReceivingTargets": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "ReceivingYardsPerTarget": 0,
    "ReceptionPercentage": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "SafetiesAllowed": 0,
    "ScoreID": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "SnapCountsConfirmed": true,
    "SoloTackles": 0,
    "SpecialTeamsAssistedTackles": 0,
    "SpecialTeamsFumblesForced": 0,
    "SpecialTeamsFumblesRecovered": 0,
    "SpecialTeamsSnapsPlayed": 0,
    "SpecialTeamsSoloTackles": 0,
    "SpecialTeamsTeamSnaps": 0,
    "SpecialTeamsTouchdowns": 0,
    "Stadium": "string",
    "Started": 0,
    "Tackles": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "Touchdowns": 0,
    "TwoPointConversionPasses": 0,
    "TwoPointConversionReceptions": 0,
    "TwoPointConversionReturns": 0,
    "TwoPointConversionRuns": 0,
    "VictivSalary": 0,
    "Week": 0,
    "WindSpeed": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="idp-projected-player-game-stats-by-week-w-injuries-lineups-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="idp-projected-player-game-stats-by-week-w-injuries-lineups-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

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

This endpoint provides all currently injured NFL players, along with injury details.

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
    "Active": true,
    "Age": 0,
    "AverageDraftPosition": 0,
    "BirthDate": "string",
    "BirthDateString": "string",
    "ByeWeek": 0,
    "College": "string",
    "CollegeDraftPick": 0,
    "CollegeDraftRound": 0,
    "CollegeDraftTeam": "string",
    "CollegeDraftYear": 0,
    "CurrentStatus": "string",
    "CurrentTeam": "string",
    "DeclaredInactive": true,
    "DepthDisplayOrder": 0,
    "DepthOrder": 0,
    "DepthPosition": "string",
    "DepthPositionCategory": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "Experience": 0,
    "ExperienceString": "string",
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyAlarmPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
    "FantasyPosition": "string",
    "FantasyPositionDepthOrder": 0,
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": "string",
    "HeightFeet": 0,
    "HeightInches": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryPractice": "string",
    "InjuryPracticeDescription": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "IsUndraftedFreeAgent": true,
    "LastName": "string",
    "Name": "string",
    "Number": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "ShortName": "string",
    "SportRadarPlayerID": "string",
    "SportsDirectPlayerID": 0,
    "StatsPlayerID": 0,
    "Status": "string",
    "Team": "string",
    "TeamID": 0,
    "UpcomingDraftKingsSalary": 0,
    "UpcomingFanDuelSalary": 0,
    "UpcomingGameOpponent": "string",
    "UpcomingGameWeek": 0,
    "UpcomingOpponentPositionRank": 0,
    "UpcomingOpponentRank": 0,
    "UpcomingSalary": 0,
    "UpcomingYahooSalary": 0,
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

## Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByPlayerID/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}`

<h3 id="projected-player-game-stats-by-player-w-injuries-lineups-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|<br>          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |
|playerid|path|string|true|Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Activated": 0,
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "DateTime": "string",
  "Day": "string",
  "DeclaredInactive": true,
  "DefensiveSnapsPlayed": 0,
  "DefensiveTeamSnaps": 0,
  "DefensiveTouchdowns": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "ExtraPointsAttempted": 0,
  "ExtraPointsHadBlocked": 0,
  "ExtraPointsMade": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPPR": 0,
  "FantasyPointsYahoo": 0,
  "FantasyPosition": "string",
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsMade0to19": 0,
  "FieldGoalsMade20to29": 0,
  "FieldGoalsMade30to39": 0,
  "FieldGoalsMade40to49": 0,
  "FieldGoalsMade50Plus": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesOutOfBounds": 0,
  "FumblesOwnRecoveries": 0,
  "FumblesRecovered": 0,
  "GameDate": "string",
  "GameKey": "string",
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "Humidity": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryPractice": "string",
  "InjuryPracticeDescription": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "IsGameOver": true,
  "KickReturnFairCatches": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "MiscAssistedTackles": 0,
  "MiscFumblesForced": 0,
  "MiscFumblesRecovered": 0,
  "MiscSoloTackles": 0,
  "Name": "string",
  "Number": 0,
  "OffensiveFumbleRecoveryTouchdowns": 0,
  "OffensiveSnapsPlayed": 0,
  "OffensiveTeamSnaps": 0,
  "OffensiveTouchdowns": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingLong": 0,
  "PassingRating": 0,
  "PassingSackYards": 0,
  "PassingSacks": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Played": 0,
  "PlayerGameID": 0,
  "PlayerID": 0,
  "PlayingSurface": "string",
  "Position": "string",
  "PositionCategory": "string",
  "PuntAverage": 0,
  "PuntInside20": 0,
  "PuntLong": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnFairCatches": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntTouchbacks": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "ReceivingLong": 0,
  "ReceivingTargets": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "ReceivingYardsPerTarget": 0,
  "ReceptionPercentage": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "SafetiesAllowed": 0,
  "ScoreID": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "SnapCountsConfirmed": true,
  "SoloTackles": 0,
  "SpecialTeamsAssistedTackles": 0,
  "SpecialTeamsFumblesForced": 0,
  "SpecialTeamsFumblesRecovered": 0,
  "SpecialTeamsSnapsPlayed": 0,
  "SpecialTeamsSoloTackles": 0,
  "SpecialTeamsTeamSnaps": 0,
  "SpecialTeamsTouchdowns": 0,
  "Stadium": "string",
  "Started": 0,
  "Tackles": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "Touchdowns": 0,
  "TwoPointConversionPasses": 0,
  "TwoPointConversionReceptions": 0,
  "TwoPointConversionReturns": 0,
  "TwoPointConversionRuns": 0,
  "VictivSalary": 0,
  "Week": 0,
  "WindSpeed": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

<h3 id="projected-player-game-stats-by-player-w-injuries-lineups-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerGameProjection](#schemaplayergameprojection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByTeam/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}`

<h3 id="projected-player-game-stats-by-team-w-injuries-lineups-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |
|team|path|string|true|Abbreviation of the team. Example: <code>WAS</code>.|

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
    "Activated": 0,
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DateTime": "string",
    "Day": "string",
    "DeclaredInactive": true,
    "DefensiveSnapsPlayed": 0,
    "DefensiveTeamSnaps": 0,
    "DefensiveTouchdowns": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsHadBlocked": 0,
    "ExtraPointsMade": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPPR": 0,
    "FantasyPointsYahoo": 0,
    "FantasyPosition": "string",
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsMade0to19": 0,
    "FieldGoalsMade20to29": 0,
    "FieldGoalsMade30to39": 0,
    "FieldGoalsMade40to49": 0,
    "FieldGoalsMade50Plus": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesOutOfBounds": 0,
    "FumblesOwnRecoveries": 0,
    "FumblesRecovered": 0,
    "GameDate": "string",
    "GameKey": "string",
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryPractice": "string",
    "InjuryPracticeDescription": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnFairCatches": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "MiscAssistedTackles": 0,
    "MiscFumblesForced": 0,
    "MiscFumblesRecovered": 0,
    "MiscSoloTackles": 0,
    "Name": "string",
    "Number": 0,
    "OffensiveFumbleRecoveryTouchdowns": 0,
    "OffensiveSnapsPlayed": 0,
    "OffensiveTeamSnaps": 0,
    "OffensiveTouchdowns": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingLong": 0,
    "PassingRating": 0,
    "PassingSackYards": 0,
    "PassingSacks": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Played": 0,
    "PlayerGameID": 0,
    "PlayerID": 0,
    "PlayingSurface": "string",
    "Position": "string",
    "PositionCategory": "string",
    "PuntAverage": 0,
    "PuntInside20": 0,
    "PuntLong": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnFairCatches": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntTouchbacks": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "ReceivingLong": 0,
    "ReceivingTargets": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "ReceivingYardsPerTarget": 0,
    "ReceptionPercentage": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "SafetiesAllowed": 0,
    "ScoreID": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "SnapCountsConfirmed": true,
    "SoloTackles": 0,
    "SpecialTeamsAssistedTackles": 0,
    "SpecialTeamsFumblesForced": 0,
    "SpecialTeamsFumblesRecovered": 0,
    "SpecialTeamsSnapsPlayed": 0,
    "SpecialTeamsSoloTackles": 0,
    "SpecialTeamsTeamSnaps": 0,
    "SpecialTeamsTouchdowns": 0,
    "Stadium": "string",
    "Started": 0,
    "Tackles": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "Touchdowns": 0,
    "TwoPointConversionPasses": 0,
    "TwoPointConversionReceptions": 0,
    "TwoPointConversionReturns": 0,
    "TwoPointConversionRuns": 0,
    "VictivSalary": 0,
    "Week": 0,
    "WindSpeed": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="projected-player-game-stats-by-team-w-injuries-lineups-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-team-w-injuries-lineups-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

<a id="opIdProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerGameProjectionStatsByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByWeek/{season}/{week}`

<h3 id="projected-player-game-stats-by-week-w-injuries-lineups-dfs-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|week|path|string|true|<br>          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.<br>          Example: <code>1</code><br>        |

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
    "Activated": 0,
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DateTime": "string",
    "Day": "string",
    "DeclaredInactive": true,
    "DefensiveSnapsPlayed": 0,
    "DefensiveTeamSnaps": 0,
    "DefensiveTouchdowns": 0,
    "DraftKingsPosition": "string",
    "DraftKingsSalary": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsHadBlocked": 0,
    "ExtraPointsMade": 0,
    "FanDuelPosition": "string",
    "FanDuelSalary": 0,
    "FantasyDataSalary": 0,
    "FantasyDraftPosition": "string",
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPPR": 0,
    "FantasyPointsYahoo": 0,
    "FantasyPosition": "string",
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsMade0to19": 0,
    "FieldGoalsMade20to29": 0,
    "FieldGoalsMade30to39": 0,
    "FieldGoalsMade40to49": 0,
    "FieldGoalsMade50Plus": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesOutOfBounds": 0,
    "FumblesOwnRecoveries": 0,
    "FumblesRecovered": 0,
    "GameDate": "string",
    "GameKey": "string",
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryPractice": "string",
    "InjuryPracticeDescription": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnFairCatches": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "MiscAssistedTackles": 0,
    "MiscFumblesForced": 0,
    "MiscFumblesRecovered": 0,
    "MiscSoloTackles": 0,
    "Name": "string",
    "Number": 0,
    "OffensiveFumbleRecoveryTouchdowns": 0,
    "OffensiveSnapsPlayed": 0,
    "OffensiveTeamSnaps": 0,
    "OffensiveTouchdowns": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentPositionRank": 0,
    "OpponentRank": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingLong": 0,
    "PassingRating": 0,
    "PassingSackYards": 0,
    "PassingSacks": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Played": 0,
    "PlayerGameID": 0,
    "PlayerID": 0,
    "PlayingSurface": "string",
    "Position": "string",
    "PositionCategory": "string",
    "PuntAverage": 0,
    "PuntInside20": 0,
    "PuntLong": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnFairCatches": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntTouchbacks": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "ReceivingLong": 0,
    "ReceivingTargets": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "ReceivingYardsPerTarget": 0,
    "ReceptionPercentage": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "SafetiesAllowed": 0,
    "ScoreID": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "SnapCountsConfirmed": true,
    "SoloTackles": 0,
    "SpecialTeamsAssistedTackles": 0,
    "SpecialTeamsFumblesForced": 0,
    "SpecialTeamsFumblesRecovered": 0,
    "SpecialTeamsSnapsPlayed": 0,
    "SpecialTeamsSoloTackles": 0,
    "SpecialTeamsTeamSnaps": 0,
    "SpecialTeamsTouchdowns": 0,
    "Stadium": "string",
    "Started": 0,
    "Tackles": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "Touchdowns": 0,
    "TwoPointConversionPasses": 0,
    "TwoPointConversionReceptions": 0,
    "TwoPointConversionReturns": 0,
    "TwoPointConversionRuns": 0,
    "VictivSalary": 0,
    "Week": 0,
    "WindSpeed": 0,
    "YahooPosition": "string",
    "YahooSalary": 0
  }
]
```

<h3 id="projected-player-game-stats-by-week-w-injuries-lineups-dfs-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-week-w-injuries-lineups-dfs-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats (w/ ADP)

<a id="opIdProjectedPlayerSeasonStatsWAdp"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStats/{season}`

<h3 id="projected-player-season-stats-w-adp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |

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
    "Activated": 0,
    "AssistedTackles": 0,
    "AuctionValue": 0,
    "AuctionValuePPR": 0,
    "AverageDraftPosition": 0,
    "AverageDraftPosition2QB": 0,
    "AverageDraftPositionDynasty": 0,
    "AverageDraftPositionPPR": 0,
    "AverageDraftPositionRookie": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DefensiveSnapsPlayed": 0,
    "DefensiveTeamSnaps": 0,
    "DefensiveTouchdowns": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsHadBlocked": 0,
    "ExtraPointsMade": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPPR": 0,
    "FantasyPointsYahoo": 0,
    "FantasyPosition": "string",
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsMade0to19": 0,
    "FieldGoalsMade20to29": 0,
    "FieldGoalsMade30to39": 0,
    "FieldGoalsMade40to49": 0,
    "FieldGoalsMade50Plus": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesOutOfBounds": 0,
    "FumblesOwnRecoveries": 0,
    "FumblesRecovered": 0,
    "GlobalTeamID": 0,
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "KickReturnFairCatches": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "MiscAssistedTackles": 0,
    "MiscFumblesForced": 0,
    "MiscFumblesRecovered": 0,
    "MiscSoloTackles": 0,
    "Name": "string",
    "Number": 0,
    "OffensiveFumbleRecoveryTouchdowns": 0,
    "OffensiveSnapsPlayed": 0,
    "OffensiveTeamSnaps": 0,
    "OffensiveTouchdowns": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingLong": 0,
    "PassingRating": 0,
    "PassingSackYards": 0,
    "PassingSacks": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Played": 0,
    "PlayerID": 0,
    "PlayerSeasonID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "PuntAverage": 0,
    "PuntInside20": 0,
    "PuntLong": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnFairCatches": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntTouchbacks": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "ReceivingLong": 0,
    "ReceivingTargets": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "ReceivingYardsPerTarget": 0,
    "ReceptionPercentage": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "SafetiesAllowed": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "SoloTackles": 0,
    "SpecialTeamsAssistedTackles": 0,
    "SpecialTeamsFumblesForced": 0,
    "SpecialTeamsFumblesRecovered": 0,
    "SpecialTeamsSnapsPlayed": 0,
    "SpecialTeamsSoloTackles": 0,
    "SpecialTeamsTeamSnaps": 0,
    "SpecialTeamsTouchdowns": 0,
    "Started": 0,
    "Tackles": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "Touchdowns": 0,
    "TwoPointConversionPasses": 0,
    "TwoPointConversionReceptions": 0,
    "TwoPointConversionReturns": 0,
    "TwoPointConversionRuns": 0,
    "WindSpeed": 0
  }
]
```

<h3 id="projected-player-season-stats-w-adp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-season-stats-w-adp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeasonProjection](#schemaplayerseasonprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats by Player (w/ ADP)

<a id="opIdProjectedPlayerSeasonStatsByPlayerWAdp"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStatsByPlayerID/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}`

<h3 id="projected-player-season-stats-by-player-w-adp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|playerid|path|string|true|Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Activated": 0,
  "AssistedTackles": 0,
  "AuctionValue": 0,
  "AuctionValuePPR": 0,
  "AverageDraftPosition": 0,
  "AverageDraftPosition2QB": 0,
  "AverageDraftPositionDynasty": 0,
  "AverageDraftPositionPPR": 0,
  "AverageDraftPositionRookie": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "DefensiveSnapsPlayed": 0,
  "DefensiveTeamSnaps": 0,
  "DefensiveTouchdowns": 0,
  "ExtraPointsAttempted": 0,
  "ExtraPointsHadBlocked": 0,
  "ExtraPointsMade": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPPR": 0,
  "FantasyPointsYahoo": 0,
  "FantasyPosition": "string",
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsMade0to19": 0,
  "FieldGoalsMade20to29": 0,
  "FieldGoalsMade30to39": 0,
  "FieldGoalsMade40to49": 0,
  "FieldGoalsMade50Plus": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesOutOfBounds": 0,
  "FumblesOwnRecoveries": 0,
  "FumblesRecovered": 0,
  "GlobalTeamID": 0,
  "Humidity": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "KickReturnFairCatches": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "MiscAssistedTackles": 0,
  "MiscFumblesForced": 0,
  "MiscFumblesRecovered": 0,
  "MiscSoloTackles": 0,
  "Name": "string",
  "Number": 0,
  "OffensiveFumbleRecoveryTouchdowns": 0,
  "OffensiveSnapsPlayed": 0,
  "OffensiveTeamSnaps": 0,
  "OffensiveTouchdowns": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingLong": 0,
  "PassingRating": 0,
  "PassingSackYards": 0,
  "PassingSacks": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Played": 0,
  "PlayerID": 0,
  "PlayerSeasonID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "PuntAverage": 0,
  "PuntInside20": 0,
  "PuntLong": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnFairCatches": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntTouchbacks": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "ReceivingLong": 0,
  "ReceivingTargets": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "ReceivingYardsPerTarget": 0,
  "ReceptionPercentage": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "SafetiesAllowed": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "SoloTackles": 0,
  "SpecialTeamsAssistedTackles": 0,
  "SpecialTeamsFumblesForced": 0,
  "SpecialTeamsFumblesRecovered": 0,
  "SpecialTeamsSnapsPlayed": 0,
  "SpecialTeamsSoloTackles": 0,
  "SpecialTeamsTeamSnaps": 0,
  "SpecialTeamsTouchdowns": 0,
  "Started": 0,
  "Tackles": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "Touchdowns": 0,
  "TwoPointConversionPasses": 0,
  "TwoPointConversionReceptions": 0,
  "TwoPointConversionReturns": 0,
  "TwoPointConversionRuns": 0,
  "WindSpeed": 0
}
```

<h3 id="projected-player-season-stats-by-player-w-adp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerSeasonProjection](#schemaplayerseasonprojection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Projected Player Season Stats by Team (w/ ADP)

<a id="opIdProjectedPlayerSeasonStatsByTeamWAdp"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonProjectionStatsByTeam/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}`

<h3 id="projected-player-season-stats-by-team-w-adp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
|team|path|string|true|Abbreviation of the team. Example: <code>WAS</code>.|

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
    "Activated": 0,
    "AssistedTackles": 0,
    "AuctionValue": 0,
    "AuctionValuePPR": 0,
    "AverageDraftPosition": 0,
    "AverageDraftPosition2QB": 0,
    "AverageDraftPositionDynasty": 0,
    "AverageDraftPositionPPR": 0,
    "AverageDraftPositionRookie": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "DefensiveSnapsPlayed": 0,
    "DefensiveTeamSnaps": 0,
    "DefensiveTouchdowns": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsHadBlocked": 0,
    "ExtraPointsMade": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsPPR": 0,
    "FantasyPointsYahoo": 0,
    "FantasyPosition": "string",
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsMade0to19": 0,
    "FieldGoalsMade20to29": 0,
    "FieldGoalsMade30to39": 0,
    "FieldGoalsMade40to49": 0,
    "FieldGoalsMade50Plus": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesOutOfBounds": 0,
    "FumblesOwnRecoveries": 0,
    "FumblesRecovered": 0,
    "GlobalTeamID": 0,
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "KickReturnFairCatches": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "MiscAssistedTackles": 0,
    "MiscFumblesForced": 0,
    "MiscFumblesRecovered": 0,
    "MiscSoloTackles": 0,
    "Name": "string",
    "Number": 0,
    "OffensiveFumbleRecoveryTouchdowns": 0,
    "OffensiveSnapsPlayed": 0,
    "OffensiveTeamSnaps": 0,
    "OffensiveTouchdowns": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingLong": 0,
    "PassingRating": 0,
    "PassingSackYards": 0,
    "PassingSacks": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Played": 0,
    "PlayerID": 0,
    "PlayerSeasonID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "PuntAverage": 0,
    "PuntInside20": 0,
    "PuntLong": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnFairCatches": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntTouchbacks": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "ReceivingLong": 0,
    "ReceivingTargets": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "ReceivingYardsPerTarget": 0,
    "ReceptionPercentage": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "SafetiesAllowed": 0,
    "ScoringDetails": [
      {
        "GameKey": "string",
        "Length": 0,
        "PlayerGameID": 0,
        "PlayerID": 0,
        "ScoreID": 0,
        "ScoringDetailID": 0,
        "ScoringPlayID": 0,
        "ScoringType": "string",
        "Season": 0,
        "SeasonType": 0,
        "Team": "string",
        "Week": 0
      }
    ],
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "SoloTackles": 0,
    "SpecialTeamsAssistedTackles": 0,
    "SpecialTeamsFumblesForced": 0,
    "SpecialTeamsFumblesRecovered": 0,
    "SpecialTeamsSnapsPlayed": 0,
    "SpecialTeamsSoloTackles": 0,
    "SpecialTeamsTeamSnaps": 0,
    "SpecialTeamsTouchdowns": 0,
    "Started": 0,
    "Tackles": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "Temperature": 0,
    "Touchdowns": 0,
    "TwoPointConversionPasses": 0,
    "TwoPointConversionReceptions": 0,
    "TwoPointConversionReturns": 0,
    "TwoPointConversionRuns": 0,
    "WindSpeed": 0
  }
]
```

<h3 id="projected-player-season-stats-by-team-w-adp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-season-stats-by-team-w-adp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeasonProjection](#schemaplayerseasonprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Upcoming DFS Slate Ownership Projections

<a id="opIdUpcomingDfsSlateOwnershipProjections"></a>

> Code samples

```bash
curl https://example.com/XML/UpcomingDfsSlateOwnershipProjections \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/UpcomingDfsSlateOwnershipProjections`

Grabs DFS Slates which have not yet started for which we have DFS Ownership projections. 

<h3 id="upcoming-dfs-slate-ownership-projections-parameters">Parameters</h3>

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
    "Operator": "string",
    "OperatorDay": "string",
    "OperatorName": "string",
    "OperatorSlateID": 0,
    "OperatorStartTime": "string",
    "SlateID": 0,
    "SlateOwnershipProjections": [
      {
        "FantasyDefensePlayerID": 0,
        "IsCaptain": true,
        "PlayerID": 0,
        "ProjectedOwnershipPercentage": 0,
        "SlateID": 0
      }
    ]
  }
]
```

<h3 id="upcoming-dfs-slate-ownership-projections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="upcoming-dfs-slate-ownership-projections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DfsSlateWithOwnershipProjection](#schemadfsslatewithownershipprojection)]|false|none|none|

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
        "AwayTeam": "string",
        "AwayTeamMoneyLine": 0,
        "Canceled": true,
        "Channel": "string",
        "Date": "string",
        "DateTime": "string",
        "Day": "string",
        "ForecastDescription": "string",
        "ForecastTempHigh": 0,
        "ForecastTempLow": 0,
        "ForecastWindChill": 0,
        "ForecastWindSpeed": 0,
        "GameKey": "string",
        "GeoLat": 0,
        "GeoLong": 0,
        "GlobalAwayTeamID": 0,
        "GlobalGameID": 0,
        "GlobalHomeTeamID": 0,
        "HomeTeam": "string",
        "HomeTeamMoneyLine": 0,
        "OverUnder": 0,
        "PointSpread": 0,
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
        "Week": 0
      },
      "GameID": 0,
      "OperatorGameID": 0,
      "RemovedByOperator": true,
      "ScoreID": 0,
      "SlateGameID": 0,
      "SlateID": 0
    }
  ],
  "DfsSlatePlayers": [
    {
      "FantasyDefenseProjectionStatID": 0,
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
    "AwayTeam": "string",
    "AwayTeamMoneyLine": 0,
    "Canceled": true,
    "Channel": "string",
    "Date": "string",
    "DateTime": "string",
    "Day": "string",
    "ForecastDescription": "string",
    "ForecastTempHigh": 0,
    "ForecastTempLow": 0,
    "ForecastWindChill": 0,
    "ForecastWindSpeed": 0,
    "GameKey": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomeTeam": "string",
    "HomeTeamMoneyLine": 0,
    "OverUnder": 0,
    "PointSpread": 0,
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
    "Week": 0
  },
  "GameID": 0,
  "OperatorGameID": 0,
  "RemovedByOperator": true,
  "ScoreID": 0,
  "SlateGameID": 0,
  "SlateID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Game|[Schedule](#schemaschedule)|false|none|none|
|GameID|integer \| null|false|none|none|
|OperatorGameID|integer \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|ScoreID|integer \| null|false|none|none|
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
  "FantasyDefenseProjectionStatID": 0,
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
|FantasyDefenseProjectionStatID|integer \| null|false|none|none|
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

<h2 id="tocS_DfsSlatePlayerOwnershipProjection">DfsSlatePlayerOwnershipProjection</h2>
<!-- backwards compatibility -->
<a id="schemadfsslateplayerownershipprojection"></a>
<a id="schema_DfsSlatePlayerOwnershipProjection"></a>
<a id="tocSdfsslateplayerownershipprojection"></a>
<a id="tocsdfsslateplayerownershipprojection"></a>

```json
{
  "FantasyDefensePlayerID": 0,
  "IsCaptain": true,
  "PlayerID": 0,
  "ProjectedOwnershipPercentage": 0,
  "SlateID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FantasyDefensePlayerID|integer \| null|false|none|none|
|IsCaptain|boolean|false|none|none|
|PlayerID|integer \| null|false|none|none|
|ProjectedOwnershipPercentage|number|false|none|none|
|SlateID|integer|false|none|none|

<h2 id="tocS_DfsSlateWithOwnershipProjection">DfsSlateWithOwnershipProjection</h2>
<!-- backwards compatibility -->
<a id="schemadfsslatewithownershipprojection"></a>
<a id="schema_DfsSlateWithOwnershipProjection"></a>
<a id="tocSdfsslatewithownershipprojection"></a>
<a id="tocsdfsslatewithownershipprojection"></a>

```json
{
  "Operator": "string",
  "OperatorDay": "string",
  "OperatorName": "string",
  "OperatorSlateID": 0,
  "OperatorStartTime": "string",
  "SlateID": 0,
  "SlateOwnershipProjections": [
    {
      "FantasyDefensePlayerID": 0,
      "IsCaptain": true,
      "PlayerID": 0,
      "ProjectedOwnershipPercentage": 0,
      "SlateID": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operator|string \| null|false|none|none|
|OperatorDay|string \| null|false|none|none|
|OperatorName|string \| null|false|none|none|
|OperatorSlateID|integer \| null|false|none|none|
|OperatorStartTime|string \| null|false|none|none|
|SlateID|integer|false|none|none|
|SlateOwnershipProjections|[[DfsSlatePlayerOwnershipProjection](#schemadfsslateplayerownershipprojection)]|false|none|none|

<h2 id="tocS_FantasyDefenseGameProjection">FantasyDefenseGameProjection</h2>
<!-- backwards compatibility -->
<a id="schemafantasydefensegameprojection"></a>
<a id="schema_FantasyDefenseGameProjection"></a>
<a id="tocSfantasydefensegameprojection"></a>
<a id="tocsfantasydefensegameprojection"></a>

```json
{
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "Date": "string",
  "DateTime": "string",
  "Day": "string",
  "DefensiveTouchdowns": 0,
  "DraftKingsFantasyPointsAllowed": 0,
  "DraftKingsKickerFantasyPointsAllowed": 0,
  "DraftKingsPosition": "string",
  "DraftKingsQuarterbackFantasyPointsAllowed": 0,
  "DraftKingsRunningbackFantasyPointsAllowed": 0,
  "DraftKingsSalary": 0,
  "DraftKingsTightEndFantasyPointsAllowed": 0,
  "DraftKingsWideReceiverFantasyPointsAllowed": 0,
  "FanDuelFantasyPointsAllowed": 0,
  "FanDuelKickerFantasyPointsAllowed": 0,
  "FanDuelPosition": "string",
  "FanDuelQuarterbackFantasyPointsAllowed": 0,
  "FanDuelRunningbackFantasyPointsAllowed": 0,
  "FanDuelSalary": 0,
  "FanDuelTightEndFantasyPointsAllowed": 0,
  "FanDuelWideReceiverFantasyPointsAllowed": 0,
  "FantasyDataSalary": 0,
  "FantasyDefenseID": 0,
  "FantasyDraftFantasyPointsAllowed": 0,
  "FantasyDraftKickerFantasyPointsAllowed": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftQuarterbackFantasyPointsAllowed": 0,
  "FantasyDraftRunningbackFantasyPointsAllowed": 0,
  "FantasyDraftSalary": 0,
  "FantasyDraftTightEndFantasyPointsAllowed": 0,
  "FantasyDraftWideReceiverFantasyPointsAllowed": 0,
  "FantasyPoints": 0,
  "FantasyPointsAllowed": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FourthDownAttempts": 0,
  "FourthDownConversions": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "FumblesForced": 0,
  "FumblesRecovered": 0,
  "GameKey": "string",
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "Humidity": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "IsGameOver": true,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturns": 0,
  "KickerFantasyPointsAllowed": 0,
  "OffensiveYardsAllowed": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PassesDefended": 0,
  "PlayerID": 0,
  "PointsAllowed": 0,
  "PointsAllowedByDefenseSpecialTeams": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturns": 0,
  "QuarterbackFantasyPointsAllowed": 0,
  "QuarterbackHits": 0,
  "RunningbackFantasyPointsAllowed": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "ScoreID": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "SoloTackles": 0,
  "SpecialTeamsTouchdowns": 0,
  "Stadium": "string",
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "ThirdDownAttempts": 0,
  "ThirdDownConversions": 0,
  "TightEndFantasyPointsAllowed": 0,
  "TouchdownsScored": 0,
  "TwoPointConversionReturns": 0,
  "VictivSalary": 0,
  "Week": 0,
  "WideReceiverFantasyPointsAllowed": 0,
  "WindSpeed": 0,
  "YahooFantasyPointsAllowed": 0,
  "YahooKickerFantasyPointsAllowed": 0,
  "YahooPosition": "string",
  "YahooQuarterbackFantasyPointsAllowed": 0,
  "YahooRunningbackFantasyPointsAllowed": 0,
  "YahooSalary": 0,
  "YahooTightEndFantasyPointsAllowed": 0,
  "YahooWideReceiverFantasyPointsAllowed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|number|false|none|none|
|BlockedKickReturnTouchdowns|number \| null|false|none|none|
|BlockedKickReturnYards|number \| null|false|none|none|
|BlockedKicks|number|false|none|none|
|Date|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefensiveTouchdowns|number \| null|false|none|none|
|DraftKingsFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsKickerFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|DraftKingsTightEndFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsWideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelKickerFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FanDuelTightEndFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelWideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDataSalary|integer \| null|false|none|none|
|FantasyDefenseID|integer \| null|false|none|none|
|FantasyDraftFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftKickerFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftPosition|string \| null|false|none|none|
|FantasyDraftQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftSalary|integer \| null|false|none|none|
|FantasyDraftTightEndFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftWideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsAllowed|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalReturnTouchdowns|number \| null|false|none|none|
|FieldGoalReturnYards|number \| null|false|none|none|
|FourthDownAttempts|number \| null|false|none|none|
|FourthDownConversions|number \| null|false|none|none|
|FumbleReturnTouchdowns|number|false|none|none|
|FumbleReturnYards|number|false|none|none|
|FumblesForced|number|false|none|none|
|FumblesRecovered|number|false|none|none|
|GameKey|string \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|InterceptionReturnTouchdowns|number|false|none|none|
|InterceptionReturnYards|number|false|none|none|
|Interceptions|number|false|none|none|
|IsGameOver|boolean \| null|false|none|none|
|KickReturnLong|number|false|none|none|
|KickReturnTouchdowns|number|false|none|none|
|KickReturnYards|number|false|none|none|
|KickReturns|number|false|none|none|
|KickerFantasyPointsAllowed|number \| null|false|none|none|
|OffensiveYardsAllowed|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|PassesDefended|number|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PointsAllowed|number|false|none|none|
|PointsAllowedByDefenseSpecialTeams|number \| null|false|none|none|
|PuntReturnLong|number|false|none|none|
|PuntReturnTouchdowns|number|false|none|none|
|PuntReturnYards|number|false|none|none|
|PuntReturns|number|false|none|none|
|QuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|QuarterbackHits|number \| null|false|none|none|
|RunningbackFantasyPointsAllowed|number \| null|false|none|none|
|SackYards|number|false|none|none|
|Sacks|number|false|none|none|
|Safeties|number|false|none|none|
|ScoreID|integer|false|none|none|
|ScoringDetails|[[ScoringDetail](#schemascoringdetail)]|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SoloTackles|number|false|none|none|
|SpecialTeamsTouchdowns|number \| null|false|none|none|
|Stadium|string \| null|false|none|none|
|TacklesForLoss|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Temperature|integer \| null|false|none|none|
|ThirdDownAttempts|number \| null|false|none|none|
|ThirdDownConversions|number \| null|false|none|none|
|TightEndFantasyPointsAllowed|number \| null|false|none|none|
|TouchdownsScored|number|false|none|none|
|TwoPointConversionReturns|number \| null|false|none|none|
|VictivSalary|integer \| null|false|none|none|
|Week|integer \| null|false|none|none|
|WideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|WindSpeed|integer \| null|false|none|none|
|YahooFantasyPointsAllowed|number \| null|false|none|none|
|YahooKickerFantasyPointsAllowed|number \| null|false|none|none|
|YahooPosition|string \| null|false|none|none|
|YahooQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|YahooRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|YahooSalary|integer \| null|false|none|none|
|YahooTightEndFantasyPointsAllowed|number \| null|false|none|none|
|YahooWideReceiverFantasyPointsAllowed|number \| null|false|none|none|

<h2 id="tocS_FantasyDefenseSeasonProjection">FantasyDefenseSeasonProjection</h2>
<!-- backwards compatibility -->
<a id="schemafantasydefenseseasonprojection"></a>
<a id="schema_FantasyDefenseSeasonProjection"></a>
<a id="tocSfantasydefenseseasonprojection"></a>
<a id="tocsfantasydefenseseasonprojection"></a>

```json
{
  "AssistedTackles": 0,
  "AuctionValue": 0,
  "AuctionValuePPR": 0,
  "AverageDraftPosition": 0,
  "AverageDraftPosition2QB": 0,
  "AverageDraftPositionDynasty": 0,
  "AverageDraftPositionPPR": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "DefensiveTouchdowns": 0,
  "DraftKingsFantasyPointsAllowed": 0,
  "DraftKingsKickerFantasyPointsAllowed": 0,
  "DraftKingsQuarterbackFantasyPointsAllowed": 0,
  "DraftKingsRunningbackFantasyPointsAllowed": 0,
  "DraftKingsTightEndFantasyPointsAllowed": 0,
  "DraftKingsWideReceiverFantasyPointsAllowed": 0,
  "FanDuelFantasyPointsAllowed": 0,
  "FanDuelKickerFantasyPointsAllowed": 0,
  "FanDuelQuarterbackFantasyPointsAllowed": 0,
  "FanDuelRunningbackFantasyPointsAllowed": 0,
  "FanDuelTightEndFantasyPointsAllowed": 0,
  "FanDuelWideReceiverFantasyPointsAllowed": 0,
  "FantasyDraftFantasyPointsAllowed": 0,
  "FantasyDraftKickerFantasyPointsAllowed": 0,
  "FantasyDraftQuarterbackFantasyPointsAllowed": 0,
  "FantasyDraftRunningbackFantasyPointsAllowed": 0,
  "FantasyDraftTightEndFantasyPointsAllowed": 0,
  "FantasyDraftWideReceiverFantasyPointsAllowed": 0,
  "FantasyPoints": 0,
  "FantasyPointsAllowed": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FourthDownAttempts": 0,
  "FourthDownConversions": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "FumblesForced": 0,
  "FumblesRecovered": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "Humidity": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturns": 0,
  "KickerFantasyPointsAllowed": 0,
  "OffensiveYardsAllowed": 0,
  "PassesDefended": 0,
  "PlayerID": 0,
  "PointsAllowed": 0,
  "PointsAllowedByDefenseSpecialTeams": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturns": 0,
  "QuarterbackFantasyPointsAllowed": 0,
  "QuarterbackHits": 0,
  "RunningbackFantasyPointsAllowed": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "SoloTackles": 0,
  "SpecialTeamsTouchdowns": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "ThirdDownAttempts": 0,
  "ThirdDownConversions": 0,
  "TightEndFantasyPointsAllowed": 0,
  "TouchdownsScored": 0,
  "TwoPointConversionReturns": 0,
  "WideReceiverFantasyPointsAllowed": 0,
  "WindSpeed": 0,
  "YahooFantasyPointsAllowed": 0,
  "YahooKickerFantasyPointsAllowed": 0,
  "YahooQuarterbackFantasyPointsAllowed": 0,
  "YahooRunningbackFantasyPointsAllowed": 0,
  "YahooTightEndFantasyPointsAllowed": 0,
  "YahooWideReceiverFantasyPointsAllowed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|number|false|none|none|
|AuctionValue|number \| null|false|none|none|
|AuctionValuePPR|number \| null|false|none|none|
|AverageDraftPosition|number \| null|false|none|none|
|AverageDraftPosition2QB|number \| null|false|none|none|
|AverageDraftPositionDynasty|number \| null|false|none|none|
|AverageDraftPositionPPR|number \| null|false|none|none|
|BlockedKickReturnTouchdowns|number \| null|false|none|none|
|BlockedKickReturnYards|number \| null|false|none|none|
|BlockedKicks|number|false|none|none|
|DefensiveTouchdowns|number \| null|false|none|none|
|DraftKingsFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsKickerFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsTightEndFantasyPointsAllowed|number \| null|false|none|none|
|DraftKingsWideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelKickerFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelTightEndFantasyPointsAllowed|number \| null|false|none|none|
|FanDuelWideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftKickerFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftTightEndFantasyPointsAllowed|number \| null|false|none|none|
|FantasyDraftWideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsAllowed|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalReturnTouchdowns|number \| null|false|none|none|
|FieldGoalReturnYards|number \| null|false|none|none|
|FourthDownAttempts|number \| null|false|none|none|
|FourthDownConversions|number \| null|false|none|none|
|FumbleReturnTouchdowns|number|false|none|none|
|FumbleReturnYards|number|false|none|none|
|FumblesForced|number|false|none|none|
|FumblesRecovered|number|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|InterceptionReturnTouchdowns|number|false|none|none|
|InterceptionReturnYards|number|false|none|none|
|Interceptions|number|false|none|none|
|KickReturnLong|number|false|none|none|
|KickReturnTouchdowns|number|false|none|none|
|KickReturnYards|number|false|none|none|
|KickReturns|number|false|none|none|
|KickerFantasyPointsAllowed|number \| null|false|none|none|
|OffensiveYardsAllowed|number \| null|false|none|none|
|PassesDefended|number|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PointsAllowed|number|false|none|none|
|PointsAllowedByDefenseSpecialTeams|number \| null|false|none|none|
|PuntReturnLong|number|false|none|none|
|PuntReturnTouchdowns|number|false|none|none|
|PuntReturnYards|number|false|none|none|
|PuntReturns|number|false|none|none|
|QuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|QuarterbackHits|number \| null|false|none|none|
|RunningbackFantasyPointsAllowed|number \| null|false|none|none|
|SackYards|number|false|none|none|
|Sacks|number|false|none|none|
|Safeties|number|false|none|none|
|ScoringDetails|[[ScoringDetail](#schemascoringdetail)]|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SoloTackles|number|false|none|none|
|SpecialTeamsTouchdowns|number \| null|false|none|none|
|TacklesForLoss|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Temperature|integer \| null|false|none|none|
|ThirdDownAttempts|number \| null|false|none|none|
|ThirdDownConversions|number \| null|false|none|none|
|TightEndFantasyPointsAllowed|number \| null|false|none|none|
|TouchdownsScored|number|false|none|none|
|TwoPointConversionReturns|number \| null|false|none|none|
|WideReceiverFantasyPointsAllowed|number \| null|false|none|none|
|WindSpeed|integer \| null|false|none|none|
|YahooFantasyPointsAllowed|number \| null|false|none|none|
|YahooKickerFantasyPointsAllowed|number \| null|false|none|none|
|YahooQuarterbackFantasyPointsAllowed|number \| null|false|none|none|
|YahooRunningbackFantasyPointsAllowed|number \| null|false|none|none|
|YahooTightEndFantasyPointsAllowed|number \| null|false|none|none|
|YahooWideReceiverFantasyPointsAllowed|number \| null|false|none|none|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "Active": true,
  "Age": 0,
  "AverageDraftPosition": 0,
  "BirthDate": "string",
  "BirthDateString": "string",
  "ByeWeek": 0,
  "College": "string",
  "CollegeDraftPick": 0,
  "CollegeDraftRound": 0,
  "CollegeDraftTeam": "string",
  "CollegeDraftYear": 0,
  "CurrentStatus": "string",
  "CurrentTeam": "string",
  "DeclaredInactive": true,
  "DepthDisplayOrder": 0,
  "DepthOrder": 0,
  "DepthPosition": "string",
  "DepthPositionCategory": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "Experience": 0,
  "ExperienceString": "string",
  "FanDuelName": "string",
  "FanDuelPlayerID": 0,
  "FantasyAlarmPlayerID": 0,
  "FantasyDraftName": "string",
  "FantasyDraftPlayerID": 0,
  "FantasyPosition": "string",
  "FantasyPositionDepthOrder": 0,
  "FirstName": "string",
  "GlobalTeamID": 0,
  "Height": "string",
  "HeightFeet": 0,
  "HeightInches": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryPractice": "string",
  "InjuryPracticeDescription": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "IsUndraftedFreeAgent": true,
  "LastName": "string",
  "Name": "string",
  "Number": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "ShortName": "string",
  "SportRadarPlayerID": "string",
  "SportsDirectPlayerID": 0,
  "StatsPlayerID": 0,
  "Status": "string",
  "Team": "string",
  "TeamID": 0,
  "UpcomingDraftKingsSalary": 0,
  "UpcomingFanDuelSalary": 0,
  "UpcomingGameOpponent": "string",
  "UpcomingGameWeek": 0,
  "UpcomingOpponentPositionRank": 0,
  "UpcomingOpponentRank": 0,
  "UpcomingSalary": 0,
  "UpcomingYahooSalary": 0,
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
|Active|boolean \| null|false|none|none|
|Age|integer \| null|false|none|none|
|AverageDraftPosition|number \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|BirthDateString|string \| null|false|none|none|
|ByeWeek|integer \| null|false|none|none|
|College|string \| null|false|none|none|
|CollegeDraftPick|integer \| null|false|none|none|
|CollegeDraftRound|integer \| null|false|none|none|
|CollegeDraftTeam|string \| null|false|none|none|
|CollegeDraftYear|integer \| null|false|none|none|
|CurrentStatus|string \| null|false|none|none|
|CurrentTeam|string \| null|false|none|none|
|DeclaredInactive|boolean|false|none|none|
|DepthDisplayOrder|integer \| null|false|none|none|
|DepthOrder|integer \| null|false|none|none|
|DepthPosition|string \| null|false|none|none|
|DepthPositionCategory|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|Experience|integer \| null|false|none|none|
|ExperienceString|string \| null|false|none|none|
|FanDuelName|string \| null|false|none|none|
|FanDuelPlayerID|integer \| null|false|none|none|
|FantasyAlarmPlayerID|integer \| null|false|none|none|
|FantasyDraftName|string \| null|false|none|none|
|FantasyDraftPlayerID|integer \| null|false|none|none|
|FantasyPosition|string \| null|false|none|none|
|FantasyPositionDepthOrder|integer \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Height|string \| null|false|none|none|
|HeightFeet|integer \| null|false|none|none|
|HeightInches|integer \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryPractice|string \| null|false|none|none|
|InjuryPracticeDescription|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|IsUndraftedFreeAgent|boolean|false|none|none|
|LastName|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|RotoworldPlayerID|integer \| null|false|none|none|
|ShortName|string \| null|false|none|none|
|SportRadarPlayerID|string \| null|false|none|none|
|SportsDirectPlayerID|integer \| null|false|none|none|
|StatsPlayerID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|UpcomingDraftKingsSalary|integer \| null|false|none|none|
|UpcomingFanDuelSalary|integer \| null|false|none|none|
|UpcomingGameOpponent|string \| null|false|none|none|
|UpcomingGameWeek|integer|false|none|none|
|UpcomingOpponentPositionRank|integer \| null|false|none|none|
|UpcomingOpponentRank|integer \| null|false|none|none|
|UpcomingSalary|integer \| null|false|none|none|
|UpcomingYahooSalary|integer \| null|false|none|none|
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
  "Activated": 0,
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "DateTime": "string",
  "Day": "string",
  "DeclaredInactive": true,
  "DefensiveSnapsPlayed": 0,
  "DefensiveTeamSnaps": 0,
  "DefensiveTouchdowns": 0,
  "DraftKingsPosition": "string",
  "DraftKingsSalary": 0,
  "ExtraPointsAttempted": 0,
  "ExtraPointsHadBlocked": 0,
  "ExtraPointsMade": 0,
  "FanDuelPosition": "string",
  "FanDuelSalary": 0,
  "FantasyDataSalary": 0,
  "FantasyDraftPosition": "string",
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPPR": 0,
  "FantasyPointsYahoo": 0,
  "FantasyPosition": "string",
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsMade0to19": 0,
  "FieldGoalsMade20to29": 0,
  "FieldGoalsMade30to39": 0,
  "FieldGoalsMade40to49": 0,
  "FieldGoalsMade50Plus": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesOutOfBounds": 0,
  "FumblesOwnRecoveries": 0,
  "FumblesRecovered": 0,
  "GameDate": "string",
  "GameKey": "string",
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "Humidity": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryPractice": "string",
  "InjuryPracticeDescription": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "IsGameOver": true,
  "KickReturnFairCatches": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "MiscAssistedTackles": 0,
  "MiscFumblesForced": 0,
  "MiscFumblesRecovered": 0,
  "MiscSoloTackles": 0,
  "Name": "string",
  "Number": 0,
  "OffensiveFumbleRecoveryTouchdowns": 0,
  "OffensiveSnapsPlayed": 0,
  "OffensiveTeamSnaps": 0,
  "OffensiveTouchdowns": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentPositionRank": 0,
  "OpponentRank": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingLong": 0,
  "PassingRating": 0,
  "PassingSackYards": 0,
  "PassingSacks": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Played": 0,
  "PlayerGameID": 0,
  "PlayerID": 0,
  "PlayingSurface": "string",
  "Position": "string",
  "PositionCategory": "string",
  "PuntAverage": 0,
  "PuntInside20": 0,
  "PuntLong": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnFairCatches": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntTouchbacks": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "ReceivingLong": 0,
  "ReceivingTargets": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "ReceivingYardsPerTarget": 0,
  "ReceptionPercentage": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "SafetiesAllowed": 0,
  "ScoreID": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "SnapCountsConfirmed": true,
  "SoloTackles": 0,
  "SpecialTeamsAssistedTackles": 0,
  "SpecialTeamsFumblesForced": 0,
  "SpecialTeamsFumblesRecovered": 0,
  "SpecialTeamsSnapsPlayed": 0,
  "SpecialTeamsSoloTackles": 0,
  "SpecialTeamsTeamSnaps": 0,
  "SpecialTeamsTouchdowns": 0,
  "Stadium": "string",
  "Started": 0,
  "Tackles": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "Touchdowns": 0,
  "TwoPointConversionPasses": 0,
  "TwoPointConversionReceptions": 0,
  "TwoPointConversionReturns": 0,
  "TwoPointConversionRuns": 0,
  "VictivSalary": 0,
  "Week": 0,
  "WindSpeed": 0,
  "YahooPosition": "string",
  "YahooSalary": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activated|integer|false|none|none|
|AssistedTackles|number|false|none|none|
|BlockedKickReturnTouchdowns|number \| null|false|none|none|
|BlockedKickReturnYards|number \| null|false|none|none|
|BlockedKicks|number|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DeclaredInactive|boolean|false|none|none|
|DefensiveSnapsPlayed|integer \| null|false|none|none|
|DefensiveTeamSnaps|integer \| null|false|none|none|
|DefensiveTouchdowns|number|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|ExtraPointsAttempted|number \| null|false|none|none|
|ExtraPointsHadBlocked|number \| null|false|none|none|
|ExtraPointsMade|number|false|none|none|
|FanDuelPosition|string \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDataSalary|integer \| null|false|none|none|
|FantasyDraftPosition|string \| null|false|none|none|
|FantasyDraftSalary|integer \| null|false|none|none|
|FantasyPoints|number|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsPPR|number|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FantasyPosition|string \| null|false|none|none|
|FieldGoalPercentage|number|false|none|none|
|FieldGoalReturnTouchdowns|number \| null|false|none|none|
|FieldGoalReturnYards|number \| null|false|none|none|
|FieldGoalsAttempted|number|false|none|none|
|FieldGoalsHadBlocked|number \| null|false|none|none|
|FieldGoalsLongestMade|number|false|none|none|
|FieldGoalsMade|number|false|none|none|
|FieldGoalsMade0to19|number \| null|false|none|none|
|FieldGoalsMade20to29|number \| null|false|none|none|
|FieldGoalsMade30to39|number \| null|false|none|none|
|FieldGoalsMade40to49|number \| null|false|none|none|
|FieldGoalsMade50Plus|number \| null|false|none|none|
|FumbleReturnTouchdowns|number|false|none|none|
|FumbleReturnYards|number|false|none|none|
|Fumbles|number|false|none|none|
|FumblesForced|number|false|none|none|
|FumblesLost|number \| null|false|none|none|
|FumblesOutOfBounds|number \| null|false|none|none|
|FumblesOwnRecoveries|number \| null|false|none|none|
|FumblesRecovered|number|false|none|none|
|GameDate|string \| null|false|none|none|
|GameKey|string \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryPractice|string \| null|false|none|none|
|InjuryPracticeDescription|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|InterceptionReturnTouchdowns|number|false|none|none|
|InterceptionReturnYards|number|false|none|none|
|Interceptions|number|false|none|none|
|IsGameOver|boolean \| null|false|none|none|
|KickReturnFairCatches|number \| null|false|none|none|
|KickReturnLong|number|false|none|none|
|KickReturnTouchdowns|number|false|none|none|
|KickReturnYards|number|false|none|none|
|KickReturnYardsPerAttempt|number|false|none|none|
|KickReturns|number|false|none|none|
|MiscAssistedTackles|number|false|none|none|
|MiscFumblesForced|number \| null|false|none|none|
|MiscFumblesRecovered|number \| null|false|none|none|
|MiscSoloTackles|number|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer|false|none|none|
|OffensiveFumbleRecoveryTouchdowns|number \| null|false|none|none|
|OffensiveSnapsPlayed|integer \| null|false|none|none|
|OffensiveTeamSnaps|integer \| null|false|none|none|
|OffensiveTouchdowns|number|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentPositionRank|integer \| null|false|none|none|
|OpponentRank|integer \| null|false|none|none|
|PassesDefended|number|false|none|none|
|PassingAttempts|number|false|none|none|
|PassingCompletionPercentage|number|false|none|none|
|PassingCompletions|number|false|none|none|
|PassingInterceptions|number|false|none|none|
|PassingLong|number|false|none|none|
|PassingRating|number|false|none|none|
|PassingSackYards|number|false|none|none|
|PassingSacks|number|false|none|none|
|PassingTouchdowns|number|false|none|none|
|PassingYards|number|false|none|none|
|PassingYardsPerAttempt|number|false|none|none|
|PassingYardsPerCompletion|number|false|none|none|
|Played|integer|false|none|none|
|PlayerGameID|integer|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PlayingSurface|string \| null|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|PuntAverage|number|false|none|none|
|PuntInside20|number \| null|false|none|none|
|PuntLong|number \| null|false|none|none|
|PuntNetAverage|number \| null|false|none|none|
|PuntNetYards|number \| null|false|none|none|
|PuntReturnFairCatches|number \| null|false|none|none|
|PuntReturnLong|number|false|none|none|
|PuntReturnTouchdowns|number|false|none|none|
|PuntReturnYards|number|false|none|none|
|PuntReturnYardsPerAttempt|number|false|none|none|
|PuntReturns|number|false|none|none|
|PuntTouchbacks|number \| null|false|none|none|
|PuntYards|number|false|none|none|
|Punts|number|false|none|none|
|PuntsHadBlocked|number \| null|false|none|none|
|QuarterbackHits|number \| null|false|none|none|
|ReceivingLong|number|false|none|none|
|ReceivingTargets|number \| null|false|none|none|
|ReceivingTouchdowns|number|false|none|none|
|ReceivingYards|number|false|none|none|
|ReceivingYardsPerReception|number|false|none|none|
|ReceivingYardsPerTarget|number|false|none|none|
|ReceptionPercentage|number|false|none|none|
|Receptions|number|false|none|none|
|RushingAttempts|number|false|none|none|
|RushingLong|number|false|none|none|
|RushingTouchdowns|number|false|none|none|
|RushingYards|number|false|none|none|
|RushingYardsPerAttempt|number|false|none|none|
|SackYards|number|false|none|none|
|Sacks|number|false|none|none|
|Safeties|number \| null|false|none|none|
|SafetiesAllowed|number \| null|false|none|none|
|ScoreID|integer|false|none|none|
|ScoringDetails|[[ScoringDetail](#schemascoringdetail)]|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|ShortName|string \| null|false|none|none|
|SnapCountsConfirmed|boolean \| null|false|none|none|
|SoloTackles|number|false|none|none|
|SpecialTeamsAssistedTackles|number|false|none|none|
|SpecialTeamsFumblesForced|number \| null|false|none|none|
|SpecialTeamsFumblesRecovered|number \| null|false|none|none|
|SpecialTeamsSnapsPlayed|integer \| null|false|none|none|
|SpecialTeamsSoloTackles|number|false|none|none|
|SpecialTeamsTeamSnaps|integer \| null|false|none|none|
|SpecialTeamsTouchdowns|number|false|none|none|
|Stadium|string \| null|false|none|none|
|Started|integer|false|none|none|
|Tackles|number|false|none|none|
|TacklesForLoss|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Temperature|integer \| null|false|none|none|
|Touchdowns|number|false|none|none|
|TwoPointConversionPasses|number|false|none|none|
|TwoPointConversionReceptions|number|false|none|none|
|TwoPointConversionReturns|number \| null|false|none|none|
|TwoPointConversionRuns|number|false|none|none|
|VictivSalary|integer \| null|false|none|none|
|Week|integer|false|none|none|
|WindSpeed|integer \| null|false|none|none|
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
  "Activated": 0,
  "AssistedTackles": 0,
  "AuctionValue": 0,
  "AuctionValuePPR": 0,
  "AverageDraftPosition": 0,
  "AverageDraftPosition2QB": 0,
  "AverageDraftPositionDynasty": 0,
  "AverageDraftPositionPPR": 0,
  "AverageDraftPositionRookie": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "DefensiveSnapsPlayed": 0,
  "DefensiveTeamSnaps": 0,
  "DefensiveTouchdowns": 0,
  "ExtraPointsAttempted": 0,
  "ExtraPointsHadBlocked": 0,
  "ExtraPointsMade": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsPPR": 0,
  "FantasyPointsYahoo": 0,
  "FantasyPosition": "string",
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsMade0to19": 0,
  "FieldGoalsMade20to29": 0,
  "FieldGoalsMade30to39": 0,
  "FieldGoalsMade40to49": 0,
  "FieldGoalsMade50Plus": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesOutOfBounds": 0,
  "FumblesOwnRecoveries": 0,
  "FumblesRecovered": 0,
  "GlobalTeamID": 0,
  "Humidity": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "KickReturnFairCatches": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "MiscAssistedTackles": 0,
  "MiscFumblesForced": 0,
  "MiscFumblesRecovered": 0,
  "MiscSoloTackles": 0,
  "Name": "string",
  "Number": 0,
  "OffensiveFumbleRecoveryTouchdowns": 0,
  "OffensiveSnapsPlayed": 0,
  "OffensiveTeamSnaps": 0,
  "OffensiveTouchdowns": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingLong": 0,
  "PassingRating": 0,
  "PassingSackYards": 0,
  "PassingSacks": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Played": 0,
  "PlayerID": 0,
  "PlayerSeasonID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "PuntAverage": 0,
  "PuntInside20": 0,
  "PuntLong": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnFairCatches": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntTouchbacks": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "ReceivingLong": 0,
  "ReceivingTargets": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "ReceivingYardsPerTarget": 0,
  "ReceptionPercentage": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "SafetiesAllowed": 0,
  "ScoringDetails": [
    {
      "GameKey": "string",
      "Length": 0,
      "PlayerGameID": 0,
      "PlayerID": 0,
      "ScoreID": 0,
      "ScoringDetailID": 0,
      "ScoringPlayID": 0,
      "ScoringType": "string",
      "Season": 0,
      "SeasonType": 0,
      "Team": "string",
      "Week": 0
    }
  ],
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "SoloTackles": 0,
  "SpecialTeamsAssistedTackles": 0,
  "SpecialTeamsFumblesForced": 0,
  "SpecialTeamsFumblesRecovered": 0,
  "SpecialTeamsSnapsPlayed": 0,
  "SpecialTeamsSoloTackles": 0,
  "SpecialTeamsTeamSnaps": 0,
  "SpecialTeamsTouchdowns": 0,
  "Started": 0,
  "Tackles": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "Temperature": 0,
  "Touchdowns": 0,
  "TwoPointConversionPasses": 0,
  "TwoPointConversionReceptions": 0,
  "TwoPointConversionReturns": 0,
  "TwoPointConversionRuns": 0,
  "WindSpeed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Activated|integer|false|none|none|
|AssistedTackles|number|false|none|none|
|AuctionValue|number \| null|false|none|none|
|AuctionValuePPR|number \| null|false|none|none|
|AverageDraftPosition|number \| null|false|none|none|
|AverageDraftPosition2QB|number \| null|false|none|none|
|AverageDraftPositionDynasty|number \| null|false|none|none|
|AverageDraftPositionPPR|number \| null|false|none|none|
|AverageDraftPositionRookie|number \| null|false|none|none|
|BlockedKickReturnTouchdowns|number \| null|false|none|none|
|BlockedKickReturnYards|number \| null|false|none|none|
|BlockedKicks|number|false|none|none|
|DefensiveSnapsPlayed|integer \| null|false|none|none|
|DefensiveTeamSnaps|integer \| null|false|none|none|
|DefensiveTouchdowns|number|false|none|none|
|ExtraPointsAttempted|number \| null|false|none|none|
|ExtraPointsHadBlocked|number \| null|false|none|none|
|ExtraPointsMade|number|false|none|none|
|FantasyPoints|number|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsPPR|number|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FantasyPosition|string \| null|false|none|none|
|FieldGoalPercentage|number|false|none|none|
|FieldGoalReturnTouchdowns|number \| null|false|none|none|
|FieldGoalReturnYards|number \| null|false|none|none|
|FieldGoalsAttempted|number|false|none|none|
|FieldGoalsHadBlocked|number \| null|false|none|none|
|FieldGoalsLongestMade|number|false|none|none|
|FieldGoalsMade|number|false|none|none|
|FieldGoalsMade0to19|number \| null|false|none|none|
|FieldGoalsMade20to29|number \| null|false|none|none|
|FieldGoalsMade30to39|number \| null|false|none|none|
|FieldGoalsMade40to49|number \| null|false|none|none|
|FieldGoalsMade50Plus|number \| null|false|none|none|
|FumbleReturnTouchdowns|number|false|none|none|
|FumbleReturnYards|number|false|none|none|
|Fumbles|number|false|none|none|
|FumblesForced|number|false|none|none|
|FumblesLost|number \| null|false|none|none|
|FumblesOutOfBounds|number \| null|false|none|none|
|FumblesOwnRecoveries|number \| null|false|none|none|
|FumblesRecovered|number|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|InterceptionReturnTouchdowns|number|false|none|none|
|InterceptionReturnYards|number|false|none|none|
|Interceptions|number|false|none|none|
|KickReturnFairCatches|number \| null|false|none|none|
|KickReturnLong|number|false|none|none|
|KickReturnTouchdowns|number|false|none|none|
|KickReturnYards|number|false|none|none|
|KickReturnYardsPerAttempt|number|false|none|none|
|KickReturns|number|false|none|none|
|MiscAssistedTackles|number|false|none|none|
|MiscFumblesForced|number \| null|false|none|none|
|MiscFumblesRecovered|number \| null|false|none|none|
|MiscSoloTackles|number|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer|false|none|none|
|OffensiveFumbleRecoveryTouchdowns|integer \| null|false|none|none|
|OffensiveSnapsPlayed|integer \| null|false|none|none|
|OffensiveTeamSnaps|integer \| null|false|none|none|
|OffensiveTouchdowns|number|false|none|none|
|PassesDefended|number|false|none|none|
|PassingAttempts|number|false|none|none|
|PassingCompletionPercentage|number|false|none|none|
|PassingCompletions|number|false|none|none|
|PassingInterceptions|number|false|none|none|
|PassingLong|number|false|none|none|
|PassingRating|number|false|none|none|
|PassingSackYards|number|false|none|none|
|PassingSacks|number|false|none|none|
|PassingTouchdowns|number|false|none|none|
|PassingYards|number|false|none|none|
|PassingYardsPerAttempt|number|false|none|none|
|PassingYardsPerCompletion|number|false|none|none|
|Played|integer|false|none|none|
|PlayerID|integer \| null|false|none|none|
|PlayerSeasonID|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|PuntAverage|number|false|none|none|
|PuntInside20|number \| null|false|none|none|
|PuntLong|number \| null|false|none|none|
|PuntNetAverage|number \| null|false|none|none|
|PuntNetYards|number \| null|false|none|none|
|PuntReturnFairCatches|number \| null|false|none|none|
|PuntReturnLong|number|false|none|none|
|PuntReturnTouchdowns|number|false|none|none|
|PuntReturnYards|number|false|none|none|
|PuntReturnYardsPerAttempt|number|false|none|none|
|PuntReturns|number|false|none|none|
|PuntTouchbacks|number \| null|false|none|none|
|PuntYards|number|false|none|none|
|Punts|number|false|none|none|
|PuntsHadBlocked|number \| null|false|none|none|
|QuarterbackHits|number \| null|false|none|none|
|ReceivingLong|number|false|none|none|
|ReceivingTargets|number \| null|false|none|none|
|ReceivingTouchdowns|number|false|none|none|
|ReceivingYards|number|false|none|none|
|ReceivingYardsPerReception|number|false|none|none|
|ReceivingYardsPerTarget|number|false|none|none|
|ReceptionPercentage|number|false|none|none|
|Receptions|number|false|none|none|
|RushingAttempts|number|false|none|none|
|RushingLong|number|false|none|none|
|RushingTouchdowns|number|false|none|none|
|RushingYards|number|false|none|none|
|RushingYardsPerAttempt|number|false|none|none|
|SackYards|number|false|none|none|
|Sacks|number|false|none|none|
|Safeties|number \| null|false|none|none|
|SafetiesAllowed|number \| null|false|none|none|
|ScoringDetails|[[ScoringDetail](#schemascoringdetail)]|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|ShortName|string \| null|false|none|none|
|SoloTackles|number|false|none|none|
|SpecialTeamsAssistedTackles|number|false|none|none|
|SpecialTeamsFumblesForced|number \| null|false|none|none|
|SpecialTeamsFumblesRecovered|number \| null|false|none|none|
|SpecialTeamsSnapsPlayed|integer \| null|false|none|none|
|SpecialTeamsSoloTackles|number|false|none|none|
|SpecialTeamsTeamSnaps|integer \| null|false|none|none|
|SpecialTeamsTouchdowns|number|false|none|none|
|Started|integer|false|none|none|
|Tackles|number|false|none|none|
|TacklesForLoss|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Temperature|integer \| null|false|none|none|
|Touchdowns|number|false|none|none|
|TwoPointConversionPasses|number|false|none|none|
|TwoPointConversionReceptions|number|false|none|none|
|TwoPointConversionReturns|number \| null|false|none|none|
|TwoPointConversionRuns|number|false|none|none|
|WindSpeed|integer \| null|false|none|none|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "AwayTeam": "string",
  "AwayTeamMoneyLine": 0,
  "Canceled": true,
  "Channel": "string",
  "Date": "string",
  "DateTime": "string",
  "Day": "string",
  "ForecastDescription": "string",
  "ForecastTempHigh": 0,
  "ForecastTempLow": 0,
  "ForecastWindChill": 0,
  "ForecastWindSpeed": 0,
  "GameKey": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "GlobalAwayTeamID": 0,
  "GlobalGameID": 0,
  "GlobalHomeTeamID": 0,
  "HomeTeam": "string",
  "HomeTeamMoneyLine": 0,
  "OverUnder": 0,
  "PointSpread": 0,
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
  "Week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayTeam|string \| null|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|Canceled|boolean \| null|false|none|none|
|Channel|string \| null|false|none|none|
|Date|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|ForecastDescription|string \| null|false|none|none|
|ForecastTempHigh|integer \| null|false|none|none|
|ForecastTempLow|integer \| null|false|none|none|
|ForecastWindChill|integer \| null|false|none|none|
|ForecastWindSpeed|integer \| null|false|none|none|
|GameKey|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|GlobalAwayTeamID|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalHomeTeamID|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|ScoreID|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|StadiumDetails|[Stadium](#schemastadium)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|Week|integer|false|none|none|

<h2 id="tocS_ScoringDetail">ScoringDetail</h2>
<!-- backwards compatibility -->
<a id="schemascoringdetail"></a>
<a id="schema_ScoringDetail"></a>
<a id="tocSscoringdetail"></a>
<a id="tocsscoringdetail"></a>

```json
{
  "GameKey": "string",
  "Length": 0,
  "PlayerGameID": 0,
  "PlayerID": 0,
  "ScoreID": 0,
  "ScoringDetailID": 0,
  "ScoringPlayID": 0,
  "ScoringType": "string",
  "Season": 0,
  "SeasonType": 0,
  "Team": "string",
  "Week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GameKey|string \| null|false|none|none|
|Length|integer|false|none|none|
|PlayerGameID|integer|false|none|none|
|PlayerID|integer \| null|false|none|none|
|ScoreID|integer \| null|false|none|none|
|ScoringDetailID|integer|false|none|none|
|ScoringPlayID|integer \| null|false|none|none|
|ScoringType|string \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Team|string \| null|false|none|none|
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
