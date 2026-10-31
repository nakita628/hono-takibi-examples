<h1 id="nba-v3-scores">NBA v3 Scores v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nba/scores">http://azure-api.sportsdata.io/v3/nba/scores</a>

* <a href="https://azure-api.sportsdata.io/v3/nba/scores">https://azure-api.sportsdata.io/v3/nba/scores</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nba-v3-scores-default">Default</h1>

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
    "Conference": "string",
    "Division": "string",
    "GlobalTeamID": 0,
    "Key": "string",
    "LeagueID": 0,
    "Name": "string",
    "NbaDotComTeamID": 0,
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
  "Description": "string",
  "EndYear": 0,
  "PostSeasonStartDate": "string",
  "RegularSeasonStartDate": "string",
  "Season": 0,
  "SeasonType": "string",
  "StartYear": 0
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

## Depth Charts

<a id="opIdDepthCharts"></a>

> Code samples

```bash
curl https://example.com/XML/DepthCharts \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DepthCharts`

Returns the full list of NBA Referees.

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

## Player Details by Free Agent

<a id="opIdPlayerDetailsByFreeAgent"></a>

> Code samples

```bash
curl https://example.com/XML/FreeAgents \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/FreeAgents`

<h3 id="player-details-by-free-agent-parameters">Parameters</h3>

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
    "BirthCountry": "string",
    "BirthDate": "string",
    "BirthState": "string",
    "College": "string",
    "DepthChartOrder": 0,
    "DepthChartPosition": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "Experience": 0,
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
    "NbaDotComPlayerID": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
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

<h3 id="player-details-by-free-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-free-agent-responseschema">Response Schema</h3>

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
    "AlternateID": 0,
    "Attendance": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamScore": 0,
    "Channel": "string",
    "CrewChiefID": 0,
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
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
    "Quarter": "string",
    "Quarters": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "QuarterID": 0
      }
    ],
    "RefereeID": 0,
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
    "UmpireID": 0,
    "UnderPayout": 0,
    "Updated": "string"
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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.|

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
    "AlternateID": 0,
    "Attendance": 0,
    "AwayRotationNumber": 0,
    "AwayTeam": "string",
    "AwayTeamID": 0,
    "AwayTeamMoneyLine": 0,
    "AwayTeamScore": 0,
    "Channel": "string",
    "CrewChiefID": 0,
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
    "PointSpread": 0,
    "PointSpreadAwayTeamMoneyLine": 0,
    "PointSpreadHomeTeamMoneyLine": 0,
    "Quarter": "string",
    "Quarters": [
      {
        "AwayScore": 0,
        "GameID": 0,
        "HomeScore": 0,
        "Name": "string",
        "Number": 0,
        "QuarterID": 0
      }
    ],
    "RefereeID": 0,
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
    "UmpireID": 0,
    "UnderPayout": 0,
    "Updated": "string"
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
|date|path|string|true|The date of the news.<br><br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.|

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
|playerid|path|string|true|Unique FantasyData Player ID. Example:<code>20000571</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "BirthCity": "string",
  "BirthCountry": "string",
  "BirthDate": "string",
  "BirthState": "string",
  "College": "string",
  "DepthChartOrder": 0,
  "DepthChartPosition": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "Experience": 0,
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
  "NbaDotComPlayerID": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
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
    "BirthCity": "string",
    "BirthCountry": "string",
    "BirthDate": "string",
    "BirthState": "string",
    "College": "string",
    "DepthChartOrder": 0,
    "DepthChartPosition": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "Experience": 0,
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
    "NbaDotComPlayerID": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
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

This endpoint provides active player details by team.

<h3 id="players-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|team|path|string|true|The abbreviation of the requested team.<br>Examples: <code>PHI</code>, <code>BKN</code>.|

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
    "BirthCountry": "string",
    "BirthDate": "string",
    "BirthState": "string",
    "College": "string",
    "DepthChartOrder": 0,
    "DepthChartPosition": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "Experience": 0,
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
    "NbaDotComPlayerID": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "Position": "string",
    "PositionCategory": "string",
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

## Referees

<a id="opIdReferees"></a>

> Code samples

```bash
curl https://example.com/XML/Referees \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Referees`

Returns the full list of NBA Referees.

<h3 id="referees-parameters">Parameters</h3>

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
    "College": "string",
    "Experience": 0,
    "Name": "string",
    "Number": 0,
    "Position": "string",
    "RefereeID": 0
  }
]
```

<h3 id="referees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="referees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Referee](#schemareferee)]|false|none|none|

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
    "Address": "string",
    "Capacity": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "StadiumID": 0,
    "State": "string",
    "Zip": "string"
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
|season|path|string|true|Year of the season.<br><br>Examples: <code>2015</code>, <code>2016</code>.|

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
    "Conference": "string",
    "ConferenceLosses": 0,
    "ConferenceRank": 0,
    "ConferenceWins": 0,
    "Division": "string",
    "DivisionLosses": 0,
    "DivisionRank": 0,
    "DivisionWins": 0,
    "GamesBack": 0,
    "GlobalTeamID": 0,
    "HomeLosses": 0,
    "HomeWins": 0,
    "Key": "string",
    "LastTenLosses": 0,
    "LastTenWins": 0,
    "Losses": 0,
    "Name": "string",
    "Percentage": 0,
    "PointsPerGameAgainst": 0,
    "PointsPerGameFor": 0,
    "Season": 0,
    "SeasonType": 0,
    "Streak": 0,
    "StreakDescription": "string",
    "TeamID": 0,
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
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.|

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
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DoubleDoubles": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "IsClosed": true,
    "IsGameOver": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlusMinus": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
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
curl https://example.com/XML/TeamGameStatsBySeason/string/string/string \
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
|teamid|path|string|true|Unique ID of team.  Example <code> 8 </code>|
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
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DateTime": "string",
    "Day": "string",
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DoubleDoubles": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "GameID": 0,
    "Games": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "HomeOrAway": "string",
    "IsClosed": true,
    "IsGameOver": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "Opponent": "string",
    "OpponentID": 0,
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlusMinus": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
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
|season|path|string|true|Year of the season.<br><br>Examples: <code>2015</code>, <code>2016</code>.|

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
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DoubleDoubles": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "IsClosed": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "OpponentPosition": "string",
    "OpponentStat": {
      "Assists": 0,
      "AssistsPercentage": 0,
      "BlockedShots": 0,
      "BlocksPercentage": 0,
      "DefensiveRebounds": 0,
      "DefensiveReboundsPercentage": 0,
      "DoubleDoubles": 0,
      "EffectiveFieldGoalsPercentage": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsFantasyDraft": 0,
      "FantasyPointsYahoo": 0,
      "FieldGoalsAttempted": 0,
      "FieldGoalsMade": 0,
      "FieldGoalsPercentage": 0,
      "FreeThrowsAttempted": 0,
      "FreeThrowsMade": 0,
      "FreeThrowsPercentage": 0,
      "Games": 0,
      "GlobalTeamID": 0,
      "IsClosed": true,
      "LineupConfirmed": true,
      "LineupStatus": "string",
      "Losses": 0,
      "Minutes": 0,
      "Name": "string",
      "OffensiveRebounds": 0,
      "OffensiveReboundsPercentage": 0,
      "OpponentPosition": "string",
      "PersonalFouls": 0,
      "PlayerEfficiencyRating": 0,
      "PlusMinus": 0,
      "Points": 0,
      "Possessions": 0,
      "Rebounds": 0,
      "Season": 0,
      "SeasonType": 0,
      "Seconds": 0,
      "StatID": 0,
      "Steals": 0,
      "StealsPercentage": 0,
      "Team": "string",
      "TeamID": 0,
      "ThreePointersAttempted": 0,
      "ThreePointersMade": 0,
      "ThreePointersPercentage": 0,
      "TotalReboundsPercentage": 0,
      "TripleDoubles": 0,
      "TrueShootingAttempts": 0,
      "TrueShootingPercentage": 0,
      "TurnOversPercentage": 0,
      "Turnovers": 0,
      "TwoPointersAttempted": 0,
      "TwoPointersMade": 0,
      "TwoPointersPercentage": 0,
      "Updated": "string",
      "UsageRatePercentage": 0,
      "Wins": 0
    },
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlusMinus": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
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
    "Conference": "string",
    "Division": "string",
    "GlobalTeamID": 0,
    "Key": "string",
    "LeagueID": 0,
    "Name": "string",
    "NbaDotComTeamID": 0,
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

<h2 id="tocS_Game">Game</h2>
<!-- backwards compatibility -->
<a id="schemagame"></a>
<a id="schema_Game"></a>
<a id="tocSgame"></a>
<a id="tocsgame"></a>

```json
{
  "AlternateID": 0,
  "Attendance": 0,
  "AwayRotationNumber": 0,
  "AwayTeam": "string",
  "AwayTeamID": 0,
  "AwayTeamMoneyLine": 0,
  "AwayTeamScore": 0,
  "Channel": "string",
  "CrewChiefID": 0,
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
  "PointSpread": 0,
  "PointSpreadAwayTeamMoneyLine": 0,
  "PointSpreadHomeTeamMoneyLine": 0,
  "Quarter": "string",
  "Quarters": [
    {
      "AwayScore": 0,
      "GameID": 0,
      "HomeScore": 0,
      "Name": "string",
      "Number": 0,
      "QuarterID": 0
    }
  ],
  "RefereeID": 0,
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
  "UmpireID": 0,
  "UnderPayout": 0,
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AlternateID|integer \| null|false|none|none|
|Attendance|integer \| null|false|none|none|
|AwayRotationNumber|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayTeamID|integer|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|Channel|string \| null|false|none|none|
|CrewChiefID|integer \| null|false|none|none|
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
|IsClosed|boolean|false|none|none|
|LastPlay|string \| null|false|none|none|
|NeutralVenue|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|PointSpreadAwayTeamMoneyLine|integer \| null|false|none|none|
|PointSpreadHomeTeamMoneyLine|integer \| null|false|none|none|
|Quarter|string \| null|false|none|none|
|Quarters|[[Quarter](#schemaquarter)]|false|none|none|
|RefereeID|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SeriesInfo|[Series](#schemaseries)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Status|string \| null|false|none|none|
|TimeRemainingMinutes|integer \| null|false|none|none|
|TimeRemainingSeconds|integer \| null|false|none|none|
|UmpireID|integer \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
|Updated|string \| null|false|none|none|

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

<h2 id="tocS_OpponentSeason">OpponentSeason</h2>
<!-- backwards compatibility -->
<a id="schemaopponentseason"></a>
<a id="schema_OpponentSeason"></a>
<a id="tocSopponentseason"></a>
<a id="tocsopponentseason"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DoubleDoubles": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "IsClosed": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
  "Losses": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "OpponentPosition": "string",
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlusMinus": 0,
  "Points": 0,
  "Possessions": 0,
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DefensiveRebounds|number \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DoubleDoubles|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|number \| null|false|none|none|
|FreeThrowsMade|number \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|LineupConfirmed|boolean \| null|false|none|none|
|LineupStatus|string \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|number \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|OpponentPosition|string \| null|false|none|none|
|PersonalFouls|number \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlusMinus|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|Possessions|number \| null|false|none|none|
|Rebounds|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Seconds|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|number \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|number \| null|false|none|none|
|ThreePointersMade|number \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TripleDoubles|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|number \| null|false|none|none|
|TwoPointersAttempted|number \| null|false|none|none|
|TwoPointersMade|number \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|Wins|integer \| null|false|none|none|

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
  "BirthState": "string",
  "College": "string",
  "DepthChartOrder": 0,
  "DepthChartPosition": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "Experience": 0,
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
  "NbaDotComPlayerID": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "Position": "string",
  "PositionCategory": "string",
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
|BirthCountry|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|College|string \| null|false|none|none|
|DepthChartOrder|integer \| null|false|none|none|
|DepthChartPosition|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|Experience|integer \| null|false|none|none|
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
|NbaDotComPlayerID|integer \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
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
|UsaTodayHeadshotNoBackgroundUpdated|string \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUrl|string \| null|false|none|none|
|UsaTodayHeadshotUpdated|string \| null|false|none|none|
|UsaTodayHeadshotUrl|string \| null|false|none|none|
|UsaTodayPlayerID|integer \| null|false|none|none|
|Weight|integer \| null|false|none|none|
|XmlTeamPlayerID|integer \| null|false|none|none|
|YahooName|string \| null|false|none|none|
|YahooPlayerID|integer \| null|false|none|none|

<h2 id="tocS_Quarter">Quarter</h2>
<!-- backwards compatibility -->
<a id="schemaquarter"></a>
<a id="schema_Quarter"></a>
<a id="tocSquarter"></a>
<a id="tocsquarter"></a>

```json
{
  "AwayScore": 0,
  "GameID": 0,
  "HomeScore": 0,
  "Name": "string",
  "Number": 0,
  "QuarterID": 0
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
|QuarterID|integer|false|none|none|

<h2 id="tocS_Referee">Referee</h2>
<!-- backwards compatibility -->
<a id="schemareferee"></a>
<a id="schema_Referee"></a>
<a id="tocSreferee"></a>
<a id="tocsreferee"></a>

```json
{
  "College": "string",
  "Experience": 0,
  "Name": "string",
  "Number": 0,
  "Position": "string",
  "RefereeID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|College|string \| null|false|none|none|
|Experience|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|RefereeID|integer|false|none|none|

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
{
  "ApiSeason": "string",
  "Description": "string",
  "EndYear": 0,
  "PostSeasonStartDate": "string",
  "RegularSeasonStartDate": "string",
  "Season": 0,
  "SeasonType": "string",
  "StartYear": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiSeason|string \| null|false|none|none|
|Description|string \| null|false|none|none|
|EndYear|integer|false|none|none|
|PostSeasonStartDate|string \| null|false|none|none|
|RegularSeasonStartDate|string \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|string \| null|false|none|none|
|StartYear|integer|false|none|none|

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
  "Address": "string",
  "Capacity": 0,
  "City": "string",
  "Country": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "Name": "string",
  "StadiumID": 0,
  "State": "string",
  "Zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|Address|string \| null|false|none|none|
|Capacity|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|StadiumID|integer|false|none|none|
|State|string \| null|false|none|none|
|Zip|string \| null|false|none|none|

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
  "Conference": "string",
  "ConferenceLosses": 0,
  "ConferenceRank": 0,
  "ConferenceWins": 0,
  "Division": "string",
  "DivisionLosses": 0,
  "DivisionRank": 0,
  "DivisionWins": 0,
  "GamesBack": 0,
  "GlobalTeamID": 0,
  "HomeLosses": 0,
  "HomeWins": 0,
  "Key": "string",
  "LastTenLosses": 0,
  "LastTenWins": 0,
  "Losses": 0,
  "Name": "string",
  "Percentage": 0,
  "PointsPerGameAgainst": 0,
  "PointsPerGameFor": 0,
  "Season": 0,
  "SeasonType": 0,
  "Streak": 0,
  "StreakDescription": "string",
  "TeamID": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayLosses|integer \| null|false|none|none|
|AwayWins|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Conference|string \| null|false|none|none|
|ConferenceLosses|integer \| null|false|none|none|
|ConferenceRank|integer \| null|false|none|none|
|ConferenceWins|integer \| null|false|none|none|
|Division|string \| null|false|none|none|
|DivisionLosses|integer \| null|false|none|none|
|DivisionRank|integer \| null|false|none|none|
|DivisionWins|integer \| null|false|none|none|
|GamesBack|number \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeLosses|integer \| null|false|none|none|
|HomeWins|integer \| null|false|none|none|
|Key|string \| null|false|none|none|
|LastTenLosses|integer \| null|false|none|none|
|LastTenWins|integer \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Percentage|number \| null|false|none|none|
|PointsPerGameAgainst|number \| null|false|none|none|
|PointsPerGameFor|number \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Streak|integer \| null|false|none|none|
|StreakDescription|string \| null|false|none|none|
|TeamID|integer|false|none|none|
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
  "Conference": "string",
  "Division": "string",
  "GlobalTeamID": 0,
  "Key": "string",
  "LeagueID": 0,
  "Name": "string",
  "NbaDotComTeamID": 0,
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
|Conference|string \| null|false|none|none|
|Division|string \| null|false|none|none|
|GlobalTeamID|integer|false|none|none|
|Key|string \| null|false|none|none|
|LeagueID|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|NbaDotComTeamID|integer \| null|false|none|none|
|PrimaryColor|string \| null|false|none|none|
|QuaternaryColor|string \| null|false|none|none|
|SecondaryColor|string \| null|false|none|none|
|StadiumID|integer \| null|false|none|none|
|TeamID|integer|false|none|none|
|TertiaryColor|string \| null|false|none|none|
|WikipediaLogoUrl|string \| null|false|none|none|
|WikipediaWordMarkUrl|string \| null|false|none|none|

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

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DateTime": "string",
  "Day": "string",
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DoubleDoubles": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "GameID": 0,
  "Games": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "HomeOrAway": "string",
  "IsClosed": true,
  "IsGameOver": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
  "Losses": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "Opponent": "string",
  "OpponentID": 0,
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlusMinus": 0,
  "Points": 0,
  "Possessions": 0,
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefensiveRebounds|number \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DoubleDoubles|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|number \| null|false|none|none|
|FreeThrowsMade|number \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|GameID|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|IsGameOver|boolean|false|none|none|
|LineupConfirmed|boolean \| null|false|none|none|
|LineupStatus|string \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|number \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|PersonalFouls|number \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlusMinus|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|Possessions|number \| null|false|none|none|
|Rebounds|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Seconds|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|number \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|number \| null|false|none|none|
|ThreePointersMade|number \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TripleDoubles|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|number \| null|false|none|none|
|TwoPointersAttempted|number \| null|false|none|none|
|TwoPointersMade|number \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|Wins|integer \| null|false|none|none|

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "Assists": 0,
  "AssistsPercentage": 0,
  "BlockedShots": 0,
  "BlocksPercentage": 0,
  "DefensiveRebounds": 0,
  "DefensiveReboundsPercentage": 0,
  "DoubleDoubles": 0,
  "EffectiveFieldGoalsPercentage": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FieldGoalsAttempted": 0,
  "FieldGoalsMade": 0,
  "FieldGoalsPercentage": 0,
  "FreeThrowsAttempted": 0,
  "FreeThrowsMade": 0,
  "FreeThrowsPercentage": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "IsClosed": true,
  "LineupConfirmed": true,
  "LineupStatus": "string",
  "Losses": 0,
  "Minutes": 0,
  "Name": "string",
  "OffensiveRebounds": 0,
  "OffensiveReboundsPercentage": 0,
  "OpponentPosition": "string",
  "OpponentStat": {
    "Assists": 0,
    "AssistsPercentage": 0,
    "BlockedShots": 0,
    "BlocksPercentage": 0,
    "DefensiveRebounds": 0,
    "DefensiveReboundsPercentage": 0,
    "DoubleDoubles": 0,
    "EffectiveFieldGoalsPercentage": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FieldGoalsAttempted": 0,
    "FieldGoalsMade": 0,
    "FieldGoalsPercentage": 0,
    "FreeThrowsAttempted": 0,
    "FreeThrowsMade": 0,
    "FreeThrowsPercentage": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "IsClosed": true,
    "LineupConfirmed": true,
    "LineupStatus": "string",
    "Losses": 0,
    "Minutes": 0,
    "Name": "string",
    "OffensiveRebounds": 0,
    "OffensiveReboundsPercentage": 0,
    "OpponentPosition": "string",
    "PersonalFouls": 0,
    "PlayerEfficiencyRating": 0,
    "PlusMinus": 0,
    "Points": 0,
    "Possessions": 0,
    "Rebounds": 0,
    "Season": 0,
    "SeasonType": 0,
    "Seconds": 0,
    "StatID": 0,
    "Steals": 0,
    "StealsPercentage": 0,
    "Team": "string",
    "TeamID": 0,
    "ThreePointersAttempted": 0,
    "ThreePointersMade": 0,
    "ThreePointersPercentage": 0,
    "TotalReboundsPercentage": 0,
    "TripleDoubles": 0,
    "TrueShootingAttempts": 0,
    "TrueShootingPercentage": 0,
    "TurnOversPercentage": 0,
    "Turnovers": 0,
    "TwoPointersAttempted": 0,
    "TwoPointersMade": 0,
    "TwoPointersPercentage": 0,
    "Updated": "string",
    "UsageRatePercentage": 0,
    "Wins": 0
  },
  "PersonalFouls": 0,
  "PlayerEfficiencyRating": 0,
  "PlusMinus": 0,
  "Points": 0,
  "Possessions": 0,
  "Rebounds": 0,
  "Season": 0,
  "SeasonType": 0,
  "Seconds": 0,
  "StatID": 0,
  "Steals": 0,
  "StealsPercentage": 0,
  "Team": "string",
  "TeamID": 0,
  "ThreePointersAttempted": 0,
  "ThreePointersMade": 0,
  "ThreePointersPercentage": 0,
  "TotalReboundsPercentage": 0,
  "TripleDoubles": 0,
  "TrueShootingAttempts": 0,
  "TrueShootingPercentage": 0,
  "TurnOversPercentage": 0,
  "Turnovers": 0,
  "TwoPointersAttempted": 0,
  "TwoPointersMade": 0,
  "TwoPointersPercentage": 0,
  "Updated": "string",
  "UsageRatePercentage": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|AssistsPercentage|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|BlocksPercentage|number \| null|false|none|none|
|DefensiveRebounds|number \| null|false|none|none|
|DefensiveReboundsPercentage|number \| null|false|none|none|
|DoubleDoubles|number \| null|false|none|none|
|EffectiveFieldGoalsPercentage|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FieldGoalsAttempted|number \| null|false|none|none|
|FieldGoalsMade|number \| null|false|none|none|
|FieldGoalsPercentage|number \| null|false|none|none|
|FreeThrowsAttempted|number \| null|false|none|none|
|FreeThrowsMade|number \| null|false|none|none|
|FreeThrowsPercentage|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|IsClosed|boolean|false|none|none|
|LineupConfirmed|boolean \| null|false|none|none|
|LineupStatus|string \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Minutes|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveRebounds|number \| null|false|none|none|
|OffensiveReboundsPercentage|number \| null|false|none|none|
|OpponentPosition|string \| null|false|none|none|
|OpponentStat|[OpponentSeason](#schemaopponentseason)|false|none|none|
|PersonalFouls|number \| null|false|none|none|
|PlayerEfficiencyRating|number \| null|false|none|none|
|PlusMinus|number \| null|false|none|none|
|Points|number \| null|false|none|none|
|Possessions|number \| null|false|none|none|
|Rebounds|number \| null|false|none|none|
|Season|integer \| null|false|none|none|
|SeasonType|integer \| null|false|none|none|
|Seconds|integer \| null|false|none|none|
|StatID|integer|false|none|none|
|Steals|number \| null|false|none|none|
|StealsPercentage|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|ThreePointersAttempted|number \| null|false|none|none|
|ThreePointersMade|number \| null|false|none|none|
|ThreePointersPercentage|number \| null|false|none|none|
|TotalReboundsPercentage|number \| null|false|none|none|
|TripleDoubles|number \| null|false|none|none|
|TrueShootingAttempts|number \| null|false|none|none|
|TrueShootingPercentage|number \| null|false|none|none|
|TurnOversPercentage|number \| null|false|none|none|
|Turnovers|number \| null|false|none|none|
|TwoPointersAttempted|number \| null|false|none|none|
|TwoPointersMade|number \| null|false|none|none|
|TwoPointersPercentage|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsageRatePercentage|number \| null|false|none|none|
|Wins|integer \| null|false|none|none|
