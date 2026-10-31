<h1 id="cfb-v3-scores">CFB v3 Scores v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

CFB schedules, scores, team stats, odds, weather, and news API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/cfb/scores">http://azure-api.sportsdata.io/v3/cfb/scores</a>

* <a href="https://azure-api.sportsdata.io/v3/cfb/scores">https://azure-api.sportsdata.io/v3/cfb/scores</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="cfb-v3-scores-default">Default</h1>

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
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

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
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
0
```

<h3 id="current-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Current Season Details

<a id="opIdCurrentSeasonDetails"></a>

> Code samples

```bash
curl https://example.com/XML/CurrentSeasonDetails \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CurrentSeasonDetails`

<h3 id="current-season-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

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
  "ApiWeek": 0,
  "Description": "string",
  "EndYear": 0,
  "Season": 0,
  "StartYear": 0
}
```

<h3 id="current-season-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Season](#schemaseason)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Current SeasonType

<a id="opIdCurrentSeasontype"></a>

> Code samples

```bash
curl https://example.com/XML/CurrentSeasonType \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CurrentSeasonType`

<h3 id="current-seasontype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="current-seasontype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Current Week

<a id="opIdCurrentWeek"></a>

> Code samples

```bash
curl https://example.com/XML/CurrentWeek \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CurrentWeek`

<h3 id="current-week-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
0
```

<h3 id="current-week-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

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
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|
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
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamScore": 0,
    "Channel": "string",
    "Created": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "Distance": 0,
    "Down": 0,
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamScore": 0,
    "IsClosed": true,
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
        "Number": 0,
        "PeriodID": 0
      }
    ],
    "PointSpread": 0,
    "Possession": "string",
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "City": "string",
      "Dome": true,
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string"
    },
    "StadiumID": 0,
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "Title": "string",
    "UnderPayout": 0,
    "Updated": "string",
    "Week": 0,
    "YardLine": 0,
    "YardLineTerritory": "string"
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
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|
|date|path|string|true|<br>          The date of the game(s).<br>          <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.<br>        |

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
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamScore": 0,
    "Channel": "string",
    "Created": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "Distance": 0,
    "Down": 0,
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamScore": 0,
    "IsClosed": true,
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
        "Number": 0,
        "PeriodID": 0
      }
    ],
    "PointSpread": 0,
    "Possession": "string",
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "City": "string",
      "Dome": true,
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string"
    },
    "StadiumID": 0,
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "Title": "string",
    "UnderPayout": 0,
    "Updated": "string",
    "Week": 0,
    "YardLine": 0,
    "YardLineTerritory": "string"
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

## Games by Week

<a id="opIdGamesByWeek"></a>

> Code samples

```bash
curl https://example.com/XML/GamesByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/GamesByWeek/{season}/{week}`

<h3 id="games-by-week-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|
|season|path|string|true|<br>          Year of the season.<br>          <br>Examples: <code>2015</code>, <code>2016</code>, etc.<br>        |
|week|path|string|true|<br>          The week of the game(s).<br>          <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.<br>        |

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
    "AwayPointSpreadPayout": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamScore": 0,
    "Channel": "string",
    "Created": "string",
    "DateTime": "string",
    "DateTimeUTC": "string",
    "Day": "string",
    "Distance": 0,
    "Down": 0,
    "GameEndDateTime": "string",
    "GameID": 0,
    "GlobalAwayTeamID": 0,
    "GlobalGameID": 0,
    "GlobalHomeTeamID": 0,
    "HomePointSpreadPayout": 0,
    "HomeRotationNumber": 0,
    "HomeTeam": "string",
    "HomeTeamID": 0,
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamScore": 0,
    "IsClosed": true,
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
        "Number": 0,
        "PeriodID": 0
      }
    ],
    "PointSpread": 0,
    "Possession": "string",
    "Season": 0,
    "SeasonType": 0,
    "Stadium": {
      "Active": true,
      "City": "string",
      "Dome": true,
      "GeoLat": 0,
      "GeoLong": 0,
      "Name": "string",
      "StadiumID": 0,
      "State": "string"
    },
    "StadiumID": 0,
    "Status": "string",
    "TimeRemainingMinutes": 0,
    "TimeRemainingSeconds": 0,
    "Title": "string",
    "UnderPayout": 0,
    "Updated": "string",
    "Week": 0,
    "YardLine": 0,
    "YardLineTerritory": "string"
  }
]
```

<h3 id="games-by-week-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="games-by-week-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

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

This endpoint provides all currently injured college football players, along with injury details.

<h3 id="injured-players-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

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
    "BirthState": "string",
    "Class": "string",
    "Created": "string",
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "Team": "string",
    "TeamID": 0,
    "Updated": "string",
    "Weight": 0
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

## Conference Hierarchy (with Teams)

<a id="opIdConferenceHierarchyWithTeams"></a>

> Code samples

```bash
curl https://example.com/XML/LeagueHierarchy \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/LeagueHierarchy`

<h3 id="conference-hierarchy-with-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

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
    "ConferenceID": 0,
    "ConferenceName": "string",
    "DivisionName": "string",
    "Name": "string",
    "Teams": [
      {
        "Active": true,
        "ApRank": 0,
        "CoachesRank": 0,
        "Conference": "string",
        "ConferenceID": 0,
        "ConferenceLosses": 0,
        "ConferenceWins": 0,
        "GlobalTeamID": 0,
        "Key": "string",
        "Losses": 0,
        "Name": "string",
        "PlayoffRank": 0,
        "RankSeason": 0,
        "RankSeasonType": 0,
        "RankWeek": 0,
        "School": "string",
        "ShortDisplayName": "string",
        "StadiumID": 0,
        "TeamID": 0,
        "TeamLogoUrl": "string",
        "Wins": 0
      }
    ]
  }
]
```

<h3 id="conference-hierarchy-with-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="conference-hierarchy-with-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Conference](#schemaconference)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Details By Player

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
|playerid|path|string|true|<br>          Unique FantasyData Player ID.<br>          Example:<code>50002016</code>.<br>        |

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
    "BirthState": "string",
    "Class": "string",
    "Created": "string",
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "Team": "string",
    "TeamID": 0,
    "Updated": "string",
    "Weight": 0
  }
]
```

<h3 id="player-details-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Player](#schemaplayer)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Details By Active

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
    "BirthCity": "string",
    "BirthState": "string",
    "Class": "string",
    "Created": "string",
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "Team": "string",
    "TeamID": 0,
    "Updated": "string",
    "Weight": 0
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

## Player Details by Team

<a id="opIdPlayerDetailsByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/Players/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players/{team}`

<h3 id="player-details-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|team|path|string|true|<br>          The abbreviation of the requested team.<br>          <br>Examples: <code>SF</code>, <code>NYY</code>.<br>        |

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
    "BirthState": "string",
    "Class": "string",
    "Created": "string",
    "FirstName": "string",
    "GlobalTeamID": 0,
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
    "Team": "string",
    "TeamID": 0,
    "Updated": "string",
    "Weight": 0
  }
]
```

<h3 id="player-details-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-team-responseschema">Response Schema</h3>

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
curl https://example.com/XML/Stadiums \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Stadiums`

<h3 id="stadiums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

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
    "Dome": true,
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "StadiumID": 0,
    "State": "string"
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

## Team Game Logs By Season

<a id="opIdTeamGameLogsBySeason"></a>

> Code samples

```bash
curl https://example.com/XML/TeamGameStatsBySeason/string/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`

Game by game log of total team statistics.

<h3 id="team-game-logs-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|
|season|path|string|true|Season to get games from. Example <code>2019POST</code>, <code>2020</code>        |
|teamid|path|string|true|Unique ID of team.  Example <code> 1 </code>|
|numberofgames|path|string|true|How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>|

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
    "Created": "string",
    "DateTime": "string",
    "Day": "string",
    "ExtraPointsAttempted": 0,
    "ExtraPointsMade": 0,
    "FantasyPoints": 0,
    "FieldGoalPercentage": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FirstDowns": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FumbleReturnTouchdowns": 0,
    "Fumbles": 0,
    "FumblesLost": 0,
    "FumblesRecovered": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "Name": "string",
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentScore": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingRating": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Penalties": 0,
    "PenaltyYards": 0,
    "PuntAverage": 0,
    "PuntLong": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntYards": 0,
    "Punts": 0,
    "QuarterbackHurries": 0,
    "ReceivingLong": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "Sacks": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "StatID": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "TimeOfPossessionMinutes": 0,
    "TimeOfPossessionSeconds": 0,
    "Updated": "string",
    "Week": 0
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

## Team Game Stats by Week

<a id="opIdTeamGameStatsByWeek"></a>

> Code samples

```bash
curl https://example.com/XML/TeamGameStatsByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamGameStatsByWeek/{season}/{week}`

<h3 id="team-game-stats-by-week-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|
|season|path|string|true|<br>          Year of the season.<br>          <br>Examples: <code>2015</code>, <code>2016</code>, etc.<br>        |
|week|path|string|true|<br>          The week of the game(s).<br>          <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.<br>        |

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
    "Created": "string",
    "DateTime": "string",
    "Day": "string",
    "ExtraPointsAttempted": 0,
    "ExtraPointsMade": 0,
    "FantasyPoints": 0,
    "FieldGoalPercentage": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FirstDowns": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FumbleReturnTouchdowns": 0,
    "Fumbles": 0,
    "FumblesLost": 0,
    "FumblesRecovered": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "IsGameOver": true,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "Name": "string",
    "Opponent": "string",
    "OpponentID": 0,
    "OpponentScore": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingRating": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Penalties": 0,
    "PenaltyYards": 0,
    "PuntAverage": 0,
    "PuntLong": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntYards": 0,
    "Punts": 0,
    "QuarterbackHurries": 0,
    "ReceivingLong": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "Receptions": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "Sacks": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "StatID": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "TimeOfPossessionMinutes": 0,
    "TimeOfPossessionSeconds": 0,
    "Updated": "string",
    "Week": 0
  }
]
```

<h3 id="team-game-stats-by-week-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-game-stats-by-week-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamGame](#schemateamgame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Team Season Stats &amp; Standings

<a id="opIdTeamSeasonStatsStandings"></a>

> Code samples

```bash
curl https://example.com/XML/TeamSeasonStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamSeasonStats/{season}`

<h3 id="team-season-stats-standings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|
|season|path|string|true|Year of the season (with optional season type).<br>Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.|

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
    "ConferenceLosses": 0,
    "ConferencePointsAgainst": 0,
    "ConferencePointsFor": 0,
    "ConferenceRank": 0,
    "ConferenceWins": 0,
    "Created": "string",
    "DivisionRank": 0,
    "ExtraPointsAttempted": 0,
    "ExtraPointsMade": 0,
    "FantasyPoints": 0,
    "FieldGoalPercentage": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsLongestMade": 0,
    "FieldGoalsMade": 0,
    "FirstDowns": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FumbleReturnTouchdowns": 0,
    "Fumbles": 0,
    "FumblesLost": 0,
    "FumblesRecovered": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "HomeLosses": 0,
    "HomeWins": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "Interceptions": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYards": 0,
    "KickReturnYardsPerAttempt": 0,
    "KickReturns": 0,
    "Losses": 0,
    "Name": "string",
    "OpponentScore": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletionPercentage": 0,
    "PassingCompletions": 0,
    "PassingInterceptions": 0,
    "PassingRating": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Penalties": 0,
    "PenaltyYards": 0,
    "PointsAgainst": 0,
    "PointsFor": 0,
    "PuntAverage": 0,
    "PuntLong": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYards": 0,
    "PuntReturnYardsPerAttempt": 0,
    "PuntReturns": 0,
    "PuntYards": 0,
    "Punts": 0,
    "QuarterbackHurries": 0,
    "ReceivingLong": 0,
    "ReceivingTouchdowns": 0,
    "ReceivingYards": 0,
    "ReceivingYardsPerReception": 0,
    "Receptions": 0,
    "RoadLosses": 0,
    "RoadWins": 0,
    "RushingAttempts": 0,
    "RushingLong": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "Sacks": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "StatID": 0,
    "Streak": 0,
    "TacklesForLoss": 0,
    "Team": "string",
    "TeamID": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "TimeOfPossessionMinutes": 0,
    "TimeOfPossessionSeconds": 0,
    "Updated": "string",
    "Wins": 0
  }
]
```

<h3 id="team-season-stats-standings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-season-stats-standings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamSeason](#schemateamseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Teams

<a id="opIdTeams"></a>

> Code samples

```bash
curl https://example.com/XML/Teams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Teams`

<h3 id="teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>xml</code> or <code>json</code>.|

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
    "ApRank": 0,
    "CoachesRank": 0,
    "Conference": "string",
    "ConferenceID": 0,
    "ConferenceLosses": 0,
    "ConferenceWins": 0,
    "GlobalTeamID": 0,
    "Key": "string",
    "Losses": 0,
    "Name": "string",
    "PlayoffRank": 0,
    "RankSeason": 0,
    "RankSeasonType": 0,
    "RankWeek": 0,
    "School": "string",
    "ShortDisplayName": "string",
    "StadiumID": 0,
    "TeamID": 0,
    "TeamLogoUrl": "string",
    "Wins": 0
  }
]
```

<h3 id="teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_Conference">Conference</h2>
<!-- backwards compatibility -->
<a id="schemaconference"></a>
<a id="schema_Conference"></a>
<a id="tocSconference"></a>
<a id="tocsconference"></a>

```json
{
  "ConferenceID": 0,
  "ConferenceName": "string",
  "DivisionName": "string",
  "Name": "string",
  "Teams": [
    {
      "Active": true,
      "ApRank": 0,
      "CoachesRank": 0,
      "Conference": "string",
      "ConferenceID": 0,
      "ConferenceLosses": 0,
      "ConferenceWins": 0,
      "GlobalTeamID": 0,
      "Key": "string",
      "Losses": 0,
      "Name": "string",
      "PlayoffRank": 0,
      "RankSeason": 0,
      "RankSeasonType": 0,
      "RankWeek": 0,
      "School": "string",
      "ShortDisplayName": "string",
      "StadiumID": 0,
      "TeamID": 0,
      "TeamLogoUrl": "string",
      "Wins": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConferenceID|integer|false|none|none|
|ConferenceName|string \| null|false|none|none|
|DivisionName|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Teams|[[Team](#schemateam)]|false|none|none|

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "Attendance": 0,
  "AwayPointSpreadPayout": 0,
  "AwayRotationNumber": 0,
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTeamName": "string",
  "AwayTeamScore": 0,
  "Channel": "string",
  "Created": "string",
  "DateTime": "string",
  "DateTimeUTC": "string",
  "Day": "string",
  "Distance": 0,
  "Down": 0,
  "GameEndDateTime": "string",
  "GameID": 0,
  "GlobalAwayTeamID": 0,
  "GlobalGameID": 0,
  "GlobalHomeTeamID": 0,
  "HomePointSpreadPayout": 0,
  "HomeRotationNumber": 0,
  "HomeTeam": "string",
  "HomeTeamID": 0,
  "HomeTeamMoneyLine": 0,
  "HomeTeamName": "string",
  "HomeTeamScore": 0,
  "IsClosed": true,
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
      "Number": 0,
      "PeriodID": 0
    }
  ],
  "PointSpread": 0,
  "Possession": "string",
  "Season": 0,
  "SeasonType": 0,
  "Stadium": {
    "Active": true,
    "City": "string",
    "Dome": true,
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "StadiumID": 0,
    "State": "string"
  },
  "StadiumID": 0,
  "Status": "string",
  "TimeRemainingMinutes": 0,
  "TimeRemainingSeconds": 0,
  "Title": "string",
  "UnderPayout": 0,
  "Updated": "string",
  "Week": 0,
  "YardLine": 0,
  "YardLineTerritory": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attendance|integer \| null|false|none|none|
|AwayPointSpreadPayout|integer \| null|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamName|string \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|Channel|string \| null|false|none|none|
|Created|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|DateTimeUTC|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|Distance|integer \| null|false|none|none|
|Down|integer \| null|false|none|none|
|GameEndDateTime|string \| null|false|none|none|
|GameID|integer|false|none|none|
|GlobalAwayTeamID|integer|false|none|none|
|GlobalGameID|integer|false|none|none|
|GlobalHomeTeamID|integer|false|none|none|
|HomePointSpreadPayout|integer \| null|false|none|none|
|HomeRotationNumber|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeTeamID|integer|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTeamName|string \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|Period|string \| null|false|none|none|
|Periods|[[Period](#schemaperiod)]|false|none|none|
|PointSpread|number \| null|false|none|none|
|Possession|string \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Stadium|[Stadium](#schemastadium)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|
|Title|string \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Week|integer \| null|false|none|none|
|YardLine|integer \| null|false|none|none|
|YardLineTerritory|string \| null|false|none|none|

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
  "Number": 0,
  "PeriodID": 0
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
|PeriodID|integer|false|none|none|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "BirthCity": "string",
  "BirthState": "string",
  "Class": "string",
  "Created": "string",
  "FirstName": "string",
  "GlobalTeamID": 0,
  "Height": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
  "Team": "string",
  "TeamID": 0,
  "Updated": "string",
  "Weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|Class|string \| null|false|none|none|
|Created|string \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Height|integer \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Weight|integer \| null|false|none|none|

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
{
  "ApiSeason": "string",
  "ApiWeek": 0,
  "Description": "string",
  "EndYear": 0,
  "Season": 0,
  "StartYear": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiSeason|string \| null|false|none|none|
|ApiWeek|integer \| null|false|none|none|
|Description|string \| null|false|none|none|
|EndYear|integer|false|none|none|
|Season|integer|false|none|none|
|StartYear|integer|false|none|none|

<h2 id="tocS_Stadium">Stadium</h2>
<!-- backwards compatibility -->
<a id="schemastadium"></a>
<a id="schema_Stadium"></a>
<a id="tocSstadium"></a>
<a id="tocsstadium"></a>

```json
{
  "Active": true,
  "City": "string",
  "Dome": true,
  "GeoLat": 0,
  "GeoLong": 0,
  "Name": "string",
  "StadiumID": 0,
  "State": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|City|string \| null|false|none|none|
|Dome|boolean|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|StadiumID|integer|false|none|none|
|State|string \| null|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "Active": true,
  "ApRank": 0,
  "CoachesRank": 0,
  "Conference": "string",
  "ConferenceID": 0,
  "ConferenceLosses": 0,
  "ConferenceWins": 0,
  "GlobalTeamID": 0,
  "Key": "string",
  "Losses": 0,
  "Name": "string",
  "PlayoffRank": 0,
  "RankSeason": 0,
  "RankSeasonType": 0,
  "RankWeek": 0,
  "School": "string",
  "ShortDisplayName": "string",
  "StadiumID": 0,
  "TeamID": 0,
  "TeamLogoUrl": "string",
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|ApRank|integer \| null|false|none|none|
|CoachesRank|integer \| null|false|none|none|
|Conference|string \| null|false|none|none|
|ConferenceID|integer \| null|false|none|none|
|ConferenceLosses|integer \| null|false|none|none|
|ConferenceWins|integer \| null|false|none|none|
|GlobalTeamID|integer|false|none|none|
|Key|string \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|PlayoffRank|integer \| null|false|none|none|
|RankSeason|integer \| null|false|none|none|
|RankSeasonType|integer \| null|false|none|none|
|RankWeek|integer \| null|false|none|none|
|School|string \| null|false|none|none|
|ShortDisplayName|string \| null|false|none|none|
|StadiumID|integer|false|none|none|
|TeamID|integer|false|none|none|
|TeamLogoUrl|string \| null|false|none|none|
|Wins|integer \| null|false|none|none|

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "AssistedTackles": 0,
  "Created": "string",
  "DateTime": "string",
  "Day": "string",
  "ExtraPointsAttempted": 0,
  "ExtraPointsMade": 0,
  "FantasyPoints": 0,
  "FieldGoalPercentage": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FirstDowns": 0,
  "FourthDownAttempts": 0,
  "FourthDownConversions": 0,
  "FumbleReturnTouchdowns": 0,
  "Fumbles": 0,
  "FumblesLost": 0,
  "FumblesRecovered": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "IsGameOver": true,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "Name": "string",
  "Opponent": "string",
  "OpponentID": 0,
  "OpponentScore": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingRating": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Penalties": 0,
  "PenaltyYards": 0,
  "PuntAverage": 0,
  "PuntLong": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntYards": 0,
  "Punts": 0,
  "QuarterbackHurries": 0,
  "ReceivingLong": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "Receptions": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "Sacks": 0,
  "Score": 0,
  "Season": 0,
  "SeasonType": 0,
  "SoloTackles": 0,
  "StatID": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "ThirdDownAttempts": 0,
  "ThirdDownConversions": 0,
  "TimeOfPossessionMinutes": 0,
  "TimeOfPossessionSeconds": 0,
  "Updated": "string",
  "Week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|number \| null|false|none|none|
|Created|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|ExtraPointsAttempted|number \| null|false|none|none|
|ExtraPointsMade|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FieldGoalPercentage|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsLongestMade|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FirstDowns|integer \| null|false|none|none|
|FourthDownAttempts|integer \| null|false|none|none|
|FourthDownConversions|integer \| null|false|none|none|
|FumbleReturnTouchdowns|number \| null|false|none|none|
|Fumbles|number \| null|false|none|none|
|FumblesLost|number \| null|false|none|none|
|FumblesRecovered|number \| null|false|none|none|
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|InterceptionReturnTouchdowns|number \| null|false|none|none|
|InterceptionReturnYards|number \| null|false|none|none|
|Interceptions|number \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|KickReturnLong|number \| null|false|none|none|
|KickReturnTouchdowns|number \| null|false|none|none|
|KickReturnYards|number \| null|false|none|none|
|KickReturnYardsPerAttempt|number \| null|false|none|none|
|KickReturns|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentScore|integer \| null|false|none|none|
|PassesDefended|number \| null|false|none|none|
|PassingAttempts|number \| null|false|none|none|
|PassingCompletionPercentage|number \| null|false|none|none|
|PassingCompletions|number \| null|false|none|none|
|PassingInterceptions|number \| null|false|none|none|
|PassingRating|number \| null|false|none|none|
|PassingTouchdowns|number \| null|false|none|none|
|PassingYards|number \| null|false|none|none|
|PassingYardsPerAttempt|number \| null|false|none|none|
|PassingYardsPerCompletion|number \| null|false|none|none|
|Penalties|integer \| null|false|none|none|
|PenaltyYards|integer \| null|false|none|none|
|PuntAverage|number \| null|false|none|none|
|PuntLong|number \| null|false|none|none|
|PuntReturnLong|number \| null|false|none|none|
|PuntReturnTouchdowns|number \| null|false|none|none|
|PuntReturnYards|number \| null|false|none|none|
|PuntReturnYardsPerAttempt|number \| null|false|none|none|
|PuntReturns|number \| null|false|none|none|
|PuntYards|number \| null|false|none|none|
|Punts|number \| null|false|none|none|
|QuarterbackHurries|number \| null|false|none|none|
|ReceivingLong|number \| null|false|none|none|
|ReceivingTouchdowns|number \| null|false|none|none|
|ReceivingYards|number \| null|false|none|none|
|ReceivingYardsPerReception|number \| null|false|none|none|
|Receptions|number \| null|false|none|none|
|RushingAttempts|number \| null|false|none|none|
|RushingLong|number \| null|false|none|none|
|RushingTouchdowns|number \| null|false|none|none|
|RushingYards|number \| null|false|none|none|
|RushingYardsPerAttempt|number \| null|false|none|none|
|Sacks|number \| null|false|none|none|
|Score|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|SoloTackles|number \| null|false|none|none|
|StatID|integer|false|none|none|
|TacklesForLoss|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThirdDownAttempts|integer \| null|false|none|none|
|ThirdDownConversions|integer \| null|false|none|none|
|TimeOfPossessionMinutes|integer \| null|false|none|none|
|TimeOfPossessionSeconds|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Week|integer \| null|false|none|none|

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "AssistedTackles": 0,
  "ConferenceLosses": 0,
  "ConferencePointsAgainst": 0,
  "ConferencePointsFor": 0,
  "ConferenceRank": 0,
  "ConferenceWins": 0,
  "Created": "string",
  "DivisionRank": 0,
  "ExtraPointsAttempted": 0,
  "ExtraPointsMade": 0,
  "FantasyPoints": 0,
  "FieldGoalPercentage": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsLongestMade": 0,
  "FieldGoalsMade": 0,
  "FirstDowns": 0,
  "FourthDownAttempts": 0,
  "FourthDownConversions": 0,
  "FumbleReturnTouchdowns": 0,
  "Fumbles": 0,
  "FumblesLost": 0,
  "FumblesRecovered": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "HomeLosses": 0,
  "HomeWins": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "Interceptions": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYards": 0,
  "KickReturnYardsPerAttempt": 0,
  "KickReturns": 0,
  "Losses": 0,
  "Name": "string",
  "OpponentScore": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletionPercentage": 0,
  "PassingCompletions": 0,
  "PassingInterceptions": 0,
  "PassingRating": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Penalties": 0,
  "PenaltyYards": 0,
  "PointsAgainst": 0,
  "PointsFor": 0,
  "PuntAverage": 0,
  "PuntLong": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYards": 0,
  "PuntReturnYardsPerAttempt": 0,
  "PuntReturns": 0,
  "PuntYards": 0,
  "Punts": 0,
  "QuarterbackHurries": 0,
  "ReceivingLong": 0,
  "ReceivingTouchdowns": 0,
  "ReceivingYards": 0,
  "ReceivingYardsPerReception": 0,
  "Receptions": 0,
  "RoadLosses": 0,
  "RoadWins": 0,
  "RushingAttempts": 0,
  "RushingLong": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "Sacks": 0,
  "Score": 0,
  "Season": 0,
  "SeasonType": 0,
  "SoloTackles": 0,
  "StatID": 0,
  "Streak": 0,
  "TacklesForLoss": 0,
  "Team": "string",
  "TeamID": 0,
  "ThirdDownAttempts": 0,
  "ThirdDownConversions": 0,
  "TimeOfPossessionMinutes": 0,
  "TimeOfPossessionSeconds": 0,
  "Updated": "string",
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|number \| null|false|none|none|
|ConferenceLosses|integer \| null|false|none|none|
|ConferencePointsAgainst|integer \| null|false|none|none|
|ConferencePointsFor|integer \| null|false|none|none|
|ConferenceRank|integer \| null|false|none|none|
|ConferenceWins|integer \| null|false|none|none|
|Created|string \| null|false|none|none|
|DivisionRank|integer \| null|false|none|none|
|ExtraPointsAttempted|number \| null|false|none|none|
|ExtraPointsMade|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FieldGoalPercentage|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsLongestMade|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FirstDowns|integer \| null|false|none|none|
|FourthDownAttempts|integer \| null|false|none|none|
|FourthDownConversions|integer \| null|false|none|none|
|FumbleReturnTouchdowns|number \| null|false|none|none|
|Fumbles|number \| null|false|none|none|
|FumblesLost|number \| null|false|none|none|
|FumblesRecovered|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeLosses|integer \| null|false|none|none|
|HomeWins|integer \| null|false|none|none|
|InterceptionReturnTouchdowns|number \| null|false|none|none|
|InterceptionReturnYards|number \| null|false|none|none|
|Interceptions|number \| null|false|none|none|
|KickReturnLong|number \| null|false|none|none|
|KickReturnTouchdowns|number \| null|false|none|none|
|KickReturnYards|number \| null|false|none|none|
|KickReturnYardsPerAttempt|number \| null|false|none|none|
|KickReturns|number \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OpponentScore|integer \| null|false|none|none|
|PassesDefended|number \| null|false|none|none|
|PassingAttempts|number \| null|false|none|none|
|PassingCompletionPercentage|number \| null|false|none|none|
|PassingCompletions|number \| null|false|none|none|
|PassingInterceptions|number \| null|false|none|none|
|PassingRating|number \| null|false|none|none|
|PassingTouchdowns|number \| null|false|none|none|
|PassingYards|number \| null|false|none|none|
|PassingYardsPerAttempt|number \| null|false|none|none|
|PassingYardsPerCompletion|number \| null|false|none|none|
|Penalties|integer \| null|false|none|none|
|PenaltyYards|integer \| null|false|none|none|
|PointsAgainst|integer \| null|false|none|none|
|PointsFor|integer \| null|false|none|none|
|PuntAverage|number \| null|false|none|none|
|PuntLong|number \| null|false|none|none|
|PuntReturnLong|number \| null|false|none|none|
|PuntReturnTouchdowns|number \| null|false|none|none|
|PuntReturnYards|number \| null|false|none|none|
|PuntReturnYardsPerAttempt|number \| null|false|none|none|
|PuntReturns|number \| null|false|none|none|
|PuntYards|number \| null|false|none|none|
|Punts|number \| null|false|none|none|
|QuarterbackHurries|number \| null|false|none|none|
|ReceivingLong|number \| null|false|none|none|
|ReceivingTouchdowns|number \| null|false|none|none|
|ReceivingYards|number \| null|false|none|none|
|ReceivingYardsPerReception|number \| null|false|none|none|
|Receptions|number \| null|false|none|none|
|RoadLosses|integer \| null|false|none|none|
|RoadWins|integer \| null|false|none|none|
|RushingAttempts|number \| null|false|none|none|
|RushingLong|number \| null|false|none|none|
|RushingTouchdowns|number \| null|false|none|none|
|RushingYards|number \| null|false|none|none|
|RushingYardsPerAttempt|number \| null|false|none|none|
|Sacks|number \| null|false|none|none|
|Score|integer \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|SoloTackles|number \| null|false|none|none|
|StatID|integer|false|none|none|
|Streak|integer \| null|false|none|none|
|TacklesForLoss|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThirdDownAttempts|integer \| null|false|none|none|
|ThirdDownConversions|integer \| null|false|none|none|
|TimeOfPossessionMinutes|integer \| null|false|none|none|
|TimeOfPossessionSeconds|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Wins|integer \| null|false|none|none|
