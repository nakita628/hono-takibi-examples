<h1 id="lol-v3-projections">LoL v3 Projections v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

LoL v3 Projections

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/lol/projections">http://azure-api.sportsdata.io/v3/lol/projections</a>

* <a href="https://azure-api.sportsdata.io/v3/lol/projections">https://azure-api.sportsdata.io/v3/lol/projections</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="lol-v3-projections-default">Default</h1>

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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.|

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
    "DfsSlateGames": [
      {
        "Game": {
          "BestOf": "string",
          "DateTime": "string",
          "Day": "string",
          "DrawMoneyLine": 0,
          "GameId": 0,
          "Group": "string",
          "IsClosed": true,
          "PointSpread": 0,
          "RoundId": 0,
          "Season": 0,
          "SeasonType": 0,
          "Status": "string",
          "TeamAId": 0,
          "TeamAKey": "string",
          "TeamAMoneyLine": 0,
          "TeamAName": "string",
          "TeamAPointSpreadPayout": 0,
          "TeamAScore": 0,
          "TeamBId": 0,
          "TeamBKey": "string",
          "TeamBMoneyLine": 0,
          "TeamBName": "string",
          "TeamBPointSpreadPayout": 0,
          "TeamBScore": 0,
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
    ],
    "VideoGameId": 0
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

## Projected Player Game Stats by Date

<a id="opIdProjectedPlayerGameStatsByDate"></a>

> Code samples

```bash
curl https://example.com/xml/PlayerGameProjectionStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByDate/{date}`

Projected Player Game Stats by Date

<h3 id="projected-player-game-stats-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Example: <code>2019-01-20</code>|

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
    "CombatPlayerScore": 0,
    "DateTime": "string",
    "Day": "string",
    "Deaths": 0,
    "DoubleKills": 0,
    "FantasyPoints": 0,
    "GameId": 0,
    "Games": 0,
    "GoldEarned": 0,
    "GoldSpent": 0,
    "InhibitorKills": 0,
    "IsClosed": true,
    "KillingSpree": 0,
    "Kills": 0,
    "LargestCriticalStrike": 0,
    "LargestKillingSpree": 0,
    "LargestMultiKill": 0,
    "LongestTimeSpentLiving": 0,
    "MagicDamageDealt": 0,
    "MagicDamageDealtToChampions": 0,
    "MagicDamageTaken": 0,
    "MatchName": "string",
    "Matches": 0,
    "Name": "string",
    "NeutralMinionsKIlled": 0,
    "NeutralMinionsKIlledTeamJungle": 0,
    "NeutralMinionsKilledEnemyJungle": 0,
    "ObjectivePlayerScore": 0,
    "Opponent": "string",
    "OpponentId": 0,
    "PentaKills": 0,
    "PhysicalDamageDealt": 0,
    "PhysicalDamageDealtToChampions": 0,
    "PhysicalDamageTaken": 0,
    "PlayerId": 0,
    "Position": "string",
    "QuadraKills": 0,
    "SightWardsBoughtInGame": 0,
    "Team": "string",
    "TeamId": 0,
    "TenKillsOrAssists": 0,
    "TotalDamageDealt": 0,
    "TotalDamageDealtToChampions": 0,
    "TotalDamageTaken": 0,
    "TotalHeal": 0,
    "TotalMinionsKilled": 0,
    "TotalPlayerScore": 0,
    "TotalTimeCrowdControlDealt": 0,
    "TotalUnitsHealed": 0,
    "TripleKills": 0,
    "TrueDamageDealt": 0,
    "TrueDamageDealtToChampions": 0,
    "TrueDamageTaken": 0,
    "TurretKills": 0,
    "UnrealKills": 0,
    "Updated": "string",
    "VisionWardsBoughtInGame": 0,
    "WardsKilled": 0,
    "WardsPlaced": 0
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
curl https://example.com/xml/PlayerGameProjectionStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}`

Projected Player Game Stats by Date

<h3 id="projected-player-game-stats-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Example: <code>2019-01-20</code>|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>100001500</code>.|

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
    "CombatPlayerScore": 0,
    "DateTime": "string",
    "Day": "string",
    "Deaths": 0,
    "DoubleKills": 0,
    "FantasyPoints": 0,
    "GameId": 0,
    "Games": 0,
    "GoldEarned": 0,
    "GoldSpent": 0,
    "InhibitorKills": 0,
    "IsClosed": true,
    "KillingSpree": 0,
    "Kills": 0,
    "LargestCriticalStrike": 0,
    "LargestKillingSpree": 0,
    "LargestMultiKill": 0,
    "LongestTimeSpentLiving": 0,
    "MagicDamageDealt": 0,
    "MagicDamageDealtToChampions": 0,
    "MagicDamageTaken": 0,
    "MatchName": "string",
    "Matches": 0,
    "Name": "string",
    "NeutralMinionsKIlled": 0,
    "NeutralMinionsKIlledTeamJungle": 0,
    "NeutralMinionsKilledEnemyJungle": 0,
    "ObjectivePlayerScore": 0,
    "Opponent": "string",
    "OpponentId": 0,
    "PentaKills": 0,
    "PhysicalDamageDealt": 0,
    "PhysicalDamageDealtToChampions": 0,
    "PhysicalDamageTaken": 0,
    "PlayerId": 0,
    "Position": "string",
    "QuadraKills": 0,
    "SightWardsBoughtInGame": 0,
    "Team": "string",
    "TeamId": 0,
    "TenKillsOrAssists": 0,
    "TotalDamageDealt": 0,
    "TotalDamageDealtToChampions": 0,
    "TotalDamageTaken": 0,
    "TotalHeal": 0,
    "TotalMinionsKilled": 0,
    "TotalPlayerScore": 0,
    "TotalTimeCrowdControlDealt": 0,
    "TotalUnitsHealed": 0,
    "TripleKills": 0,
    "TrueDamageDealt": 0,
    "TrueDamageDealtToChampions": 0,
    "TrueDamageTaken": 0,
    "TurretKills": 0,
    "UnrealKills": 0,
    "Updated": "string",
    "VisionWardsBoughtInGame": 0,
    "WardsKilled": 0,
    "WardsPlaced": 0
  }
]
```

<h3 id="projected-player-game-stats-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="projected-player-game-stats-by-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerGameProjection](#schemaplayergameprojection)]|false|none|none|

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
        "BestOf": "string",
        "DateTime": "string",
        "Day": "string",
        "DrawMoneyLine": 0,
        "GameId": 0,
        "Group": "string",
        "IsClosed": true,
        "PointSpread": 0,
        "RoundId": 0,
        "Season": 0,
        "SeasonType": 0,
        "Status": "string",
        "TeamAId": 0,
        "TeamAKey": "string",
        "TeamAMoneyLine": 0,
        "TeamAName": "string",
        "TeamAPointSpreadPayout": 0,
        "TeamAScore": 0,
        "TeamBId": 0,
        "TeamBKey": "string",
        "TeamBMoneyLine": 0,
        "TeamBName": "string",
        "TeamBPointSpreadPayout": 0,
        "TeamBScore": 0,
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
  ],
  "VideoGameId": 0
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
|VideoGameId|integer \| null|false|none|none|

<h2 id="tocS_DfsSlateGame">DfsSlateGame</h2>
<!-- backwards compatibility -->
<a id="schemadfsslategame"></a>
<a id="schema_DfsSlateGame"></a>
<a id="tocSdfsslategame"></a>
<a id="tocsdfsslategame"></a>

```json
{
  "Game": {
    "BestOf": "string",
    "DateTime": "string",
    "Day": "string",
    "DrawMoneyLine": 0,
    "GameId": 0,
    "Group": "string",
    "IsClosed": true,
    "PointSpread": 0,
    "RoundId": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string",
    "TeamAId": 0,
    "TeamAKey": "string",
    "TeamAMoneyLine": 0,
    "TeamAName": "string",
    "TeamAPointSpreadPayout": 0,
    "TeamAScore": 0,
    "TeamBId": 0,
    "TeamBKey": "string",
    "TeamBMoneyLine": 0,
    "TeamBName": "string",
    "TeamBPointSpreadPayout": 0,
    "TeamBScore": 0,
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
  "BestOf": "string",
  "DateTime": "string",
  "Day": "string",
  "DrawMoneyLine": 0,
  "GameId": 0,
  "Group": "string",
  "IsClosed": true,
  "PointSpread": 0,
  "RoundId": 0,
  "Season": 0,
  "SeasonType": 0,
  "Status": "string",
  "TeamAId": 0,
  "TeamAKey": "string",
  "TeamAMoneyLine": 0,
  "TeamAName": "string",
  "TeamAPointSpreadPayout": 0,
  "TeamAScore": 0,
  "TeamBId": 0,
  "TeamBKey": "string",
  "TeamBMoneyLine": 0,
  "TeamBName": "string",
  "TeamBPointSpreadPayout": 0,
  "TeamBScore": 0,
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
|BestOf|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DrawMoneyLine|integer \| null|false|none|none|
|GameId|integer|false|none|none|
|Group|string \| null|false|none|none|
|IsClosed|boolean \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|RoundId|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Status|string \| null|false|none|none|
|TeamAId|integer \| null|false|none|none|
|TeamAKey|string \| null|false|none|none|
|TeamAMoneyLine|integer \| null|false|none|none|
|TeamAName|string \| null|false|none|none|
|TeamAPointSpreadPayout|integer \| null|false|none|none|
|TeamAScore|integer \| null|false|none|none|
|TeamBId|integer \| null|false|none|none|
|TeamBKey|string \| null|false|none|none|
|TeamBMoneyLine|integer \| null|false|none|none|
|TeamBName|string \| null|false|none|none|
|TeamBPointSpreadPayout|integer \| null|false|none|none|
|TeamBScore|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UpdatedUtc|string \| null|false|none|none|
|VenueId|integer \| null|false|none|none|
|VenueType|string \| null|false|none|none|
|Week|integer \| null|false|none|none|
|Winner|string \| null|false|none|none|

<h2 id="tocS_PlayerGameProjection">PlayerGameProjection</h2>
<!-- backwards compatibility -->
<a id="schemaplayergameprojection"></a>
<a id="schema_PlayerGameProjection"></a>
<a id="tocSplayergameprojection"></a>
<a id="tocsplayergameprojection"></a>

```json
{
  "Assists": 0,
  "CombatPlayerScore": 0,
  "DateTime": "string",
  "Day": "string",
  "Deaths": 0,
  "DoubleKills": 0,
  "FantasyPoints": 0,
  "GameId": 0,
  "Games": 0,
  "GoldEarned": 0,
  "GoldSpent": 0,
  "InhibitorKills": 0,
  "IsClosed": true,
  "KillingSpree": 0,
  "Kills": 0,
  "LargestCriticalStrike": 0,
  "LargestKillingSpree": 0,
  "LargestMultiKill": 0,
  "LongestTimeSpentLiving": 0,
  "MagicDamageDealt": 0,
  "MagicDamageDealtToChampions": 0,
  "MagicDamageTaken": 0,
  "MatchName": "string",
  "Matches": 0,
  "Name": "string",
  "NeutralMinionsKIlled": 0,
  "NeutralMinionsKIlledTeamJungle": 0,
  "NeutralMinionsKilledEnemyJungle": 0,
  "ObjectivePlayerScore": 0,
  "Opponent": "string",
  "OpponentId": 0,
  "PentaKills": 0,
  "PhysicalDamageDealt": 0,
  "PhysicalDamageDealtToChampions": 0,
  "PhysicalDamageTaken": 0,
  "PlayerId": 0,
  "Position": "string",
  "QuadraKills": 0,
  "SightWardsBoughtInGame": 0,
  "Team": "string",
  "TeamId": 0,
  "TenKillsOrAssists": 0,
  "TotalDamageDealt": 0,
  "TotalDamageDealtToChampions": 0,
  "TotalDamageTaken": 0,
  "TotalHeal": 0,
  "TotalMinionsKilled": 0,
  "TotalPlayerScore": 0,
  "TotalTimeCrowdControlDealt": 0,
  "TotalUnitsHealed": 0,
  "TripleKills": 0,
  "TrueDamageDealt": 0,
  "TrueDamageDealtToChampions": 0,
  "TrueDamageTaken": 0,
  "TurretKills": 0,
  "UnrealKills": 0,
  "Updated": "string",
  "VisionWardsBoughtInGame": 0,
  "WardsKilled": 0,
  "WardsPlaced": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|CombatPlayerScore|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|Deaths|number \| null|false|none|none|
|DoubleKills|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|GameId|integer|false|none|none|
|Games|integer|false|none|none|
|GoldEarned|number \| null|false|none|none|
|GoldSpent|number \| null|false|none|none|
|InhibitorKills|number \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|KillingSpree|number \| null|false|none|none|
|Kills|number \| null|false|none|none|
|LargestCriticalStrike|number \| null|false|none|none|
|LargestKillingSpree|number \| null|false|none|none|
|LargestMultiKill|number \| null|false|none|none|
|LongestTimeSpentLiving|number \| null|false|none|none|
|MagicDamageDealt|number \| null|false|none|none|
|MagicDamageDealtToChampions|number \| null|false|none|none|
|MagicDamageTaken|number \| null|false|none|none|
|MatchName|string \| null|false|none|none|
|Matches|integer|false|none|none|
|Name|string \| null|false|none|none|
|NeutralMinionsKIlled|number \| null|false|none|none|
|NeutralMinionsKIlledTeamJungle|number \| null|false|none|none|
|NeutralMinionsKilledEnemyJungle|number \| null|false|none|none|
|ObjectivePlayerScore|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentId|integer|false|none|none|
|PentaKills|number \| null|false|none|none|
|PhysicalDamageDealt|number \| null|false|none|none|
|PhysicalDamageDealtToChampions|number \| null|false|none|none|
|PhysicalDamageTaken|number \| null|false|none|none|
|PlayerId|integer|false|none|none|
|Position|string \| null|false|none|none|
|QuadraKills|number \| null|false|none|none|
|SightWardsBoughtInGame|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamId|integer \| null|false|none|none|
|TenKillsOrAssists|number \| null|false|none|none|
|TotalDamageDealt|number \| null|false|none|none|
|TotalDamageDealtToChampions|number \| null|false|none|none|
|TotalDamageTaken|number \| null|false|none|none|
|TotalHeal|number \| null|false|none|none|
|TotalMinionsKilled|number \| null|false|none|none|
|TotalPlayerScore|number \| null|false|none|none|
|TotalTimeCrowdControlDealt|number \| null|false|none|none|
|TotalUnitsHealed|number \| null|false|none|none|
|TripleKills|number \| null|false|none|none|
|TrueDamageDealt|number \| null|false|none|none|
|TrueDamageDealtToChampions|number \| null|false|none|none|
|TrueDamageTaken|number \| null|false|none|none|
|TurretKills|number \| null|false|none|none|
|UnrealKills|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|VisionWardsBoughtInGame|number \| null|false|none|none|
|WardsKilled|number \| null|false|none|none|
|WardsPlaced|number \| null|false|none|none|
