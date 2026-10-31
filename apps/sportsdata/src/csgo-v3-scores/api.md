<h1 id="csgo-v3-scores">CS:GO v3 Scores v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

CS:GO v3 Scores

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/csgo/scores">http://azure-api.sportsdata.io/v3/csgo/scores</a>

* <a href="https://azure-api.sportsdata.io/v3/csgo/scores">https://azure-api.sportsdata.io/v3/csgo/scores</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="csgo-v3-scores-default">Default</h1>

## Memberships (Active)

<a id="opIdMembershipsActive"></a>

> Code samples

```bash
curl https://example.com/xml/ActiveMemberships \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/ActiveMemberships`

Memberships (Active)

<h3 id="memberships-active-parameters">Parameters</h3>

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
    "EndDate": "string",
    "MembershipId": 0,
    "PlayerId": 0,
    "PlayerName": "string",
    "StartDate": "string",
    "TeamArea": "string",
    "TeamId": 0,
    "TeamName": "string",
    "Updated": "string"
  }
]
```

<h3 id="memberships-active-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-active-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Membership](#schemamembership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Areas (Countries)

<a id="opIdAreasCountries"></a>

> Code samples

```bash
curl https://example.com/xml/Areas \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Areas`

Areas (Countries)

<h3 id="areas-countries-parameters">Parameters</h3>

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
    "AreaId": 0,
    "CountryCode": "string",
    "Name": "string"
  }
]
```

<h3 id="areas-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="areas-countries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Area](#schemaarea)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Competition Fixtures (League Details)

<a id="opIdCompetitionFixturesLeagueDetails"></a>

> Code samples

```bash
curl https://example.com/xml/CompetitionDetails/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CompetitionDetails/{competitionid}`

Competition Fixtures (League Details)

<h3 id="competition-fixtures-league-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competitionid|path|string|true|A CS:GO competition/league unique CompetitionId. Possible values include: <code>100000009</code>, etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "AreaId": 0,
  "AreaName": "string",
  "CompetitionId": 0,
  "CurrentSeason": {
    "CompetitionId": 0,
    "CompetitionName": "string",
    "CurrentSeason": true,
    "EndDate": "string",
    "Name": "string",
    "Rounds": [
      {
        "CurrentRound": true,
        "CurrentWeek": 0,
        "EndDate": "string",
        "Name": "string",
        "RoundId": 0,
        "Season": 0,
        "SeasonId": 0,
        "SeasonType": 0,
        "StartDate": "string",
        "Type": "string"
      }
    ],
    "Season": 0,
    "SeasonId": 0,
    "StartDate": "string"
  },
  "Format": "string",
  "Games": [
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
  ],
  "Gender": "string",
  "Name": "string",
  "PlayerStatsCoverage": true,
  "Seasons": [
    {
      "CompetitionId": 0,
      "CompetitionName": "string",
      "CurrentSeason": true,
      "EndDate": "string",
      "Name": "string",
      "Rounds": [
        {
          "CurrentRound": true,
          "CurrentWeek": 0,
          "EndDate": "string",
          "Name": "string",
          "RoundId": 0,
          "Season": 0,
          "SeasonId": 0,
          "SeasonType": 0,
          "StartDate": "string",
          "Type": "string"
        }
      ],
      "Season": 0,
      "SeasonId": 0,
      "StartDate": "string"
    }
  ],
  "Teams": [
    {
      "Active": true,
      "AreaId": 0,
      "AreaName": "string",
      "Email": "string",
      "Facebook": "string",
      "Founded": 0,
      "Gender": "string",
      "Instagram": "string",
      "Key": "string",
      "Name": "string",
      "Players": [
        {
          "BirthCity": "string",
          "BirthCountry": "string",
          "BirthDate": "string",
          "CommonName": "string",
          "FirstName": "string",
          "Gender": "string",
          "LastName": "string",
          "MatchName": "string",
          "Nationality": "string",
          "PlayerId": 0,
          "Position": "string",
          "Updated": "string"
        }
      ],
      "PrimaryColor": "string",
      "QuaternaryColor": "string",
      "SecondaryColor": "string",
      "ShortName": "string",
      "TeamId": 0,
      "TertiaryColor": "string",
      "Twitter": "string",
      "Type": "string",
      "Website": "string",
      "YouTube": "string"
    }
  ],
  "Type": "string"
}
```

<h3 id="competition-fixtures-league-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CompetitionDetail](#schemacompetitiondetail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Competitions (Leagues)

<a id="opIdCompetitionsLeagues"></a>

> Code samples

```bash
curl https://example.com/xml/Competitions \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Competitions`

Competitions (Leagues)

<h3 id="competitions-leagues-parameters">Parameters</h3>

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
    "AreaId": 0,
    "AreaName": "string",
    "CompetitionId": 0,
    "Format": "string",
    "Gender": "string",
    "Name": "string",
    "PlayerStatsCoverage": true,
    "Seasons": [
      {
        "CompetitionId": 0,
        "CompetitionName": "string",
        "CurrentSeason": true,
        "EndDate": "string",
        "Name": "string",
        "Rounds": [
          {
            "CurrentRound": true,
            "CurrentWeek": 0,
            "EndDate": "string",
            "Name": "string",
            "RoundId": 0,
            "Season": 0,
            "SeasonId": 0,
            "SeasonType": 0,
            "StartDate": "string",
            "Type": "string"
          }
        ],
        "Season": 0,
        "SeasonId": 0,
        "StartDate": "string"
      }
    ],
    "Type": "string"
  }
]
```

<h3 id="competitions-leagues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="competitions-leagues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Competition](#schemacompetition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Games by Date

<a id="opIdGamesByDate"></a>

> Code samples

```bash
curl https://example.com/xml/GamesByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/GamesByDate/{date}`

Games by Date

<h3 id="games-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.|

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

## Memberships (Historical)

<a id="opIdMembershipsHistorical"></a>

> Code samples

```bash
curl https://example.com/xml/HistoricalMemberships \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/HistoricalMemberships`

Memberships (Historical)

<h3 id="memberships-historical-parameters">Parameters</h3>

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
    "EndDate": "string",
    "MembershipId": 0,
    "PlayerId": 0,
    "PlayerName": "string",
    "StartDate": "string",
    "TeamArea": "string",
    "TeamId": 0,
    "TeamName": "string",
    "Updated": "string"
  }
]
```

<h3 id="memberships-historical-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-historical-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Membership](#schemamembership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Memberships by Team (Historical)

<a id="opIdMembershipsByTeamHistorical"></a>

> Code samples

```bash
curl https://example.com/xml/HistoricalMembershipsByTeam/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/HistoricalMembershipsByTeam/{teamid}`

Memberships by Team (Historical)

<h3 id="memberships-by-team-historical-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|teamid|path|string|true|Unique FantasyData Team ID. <br>Example:<code>100000001</code>.|

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
    "EndDate": "string",
    "MembershipId": 0,
    "PlayerId": 0,
    "PlayerName": "string",
    "StartDate": "string",
    "TeamArea": "string",
    "TeamId": 0,
    "TeamName": "string",
    "Updated": "string"
  }
]
```

<h3 id="memberships-by-team-historical-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-by-team-historical-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Membership](#schemamembership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Memberships by Team (Active)

<a id="opIdMembershipsByTeamActive"></a>

> Code samples

```bash
curl https://example.com/xml/MembershipsByTeam/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/MembershipsByTeam/{teamid}`

Memberships by Team (Active)

<h3 id="memberships-by-team-active-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|teamid|path|string|true|Unique FantasyData Team ID. <br>Example:<code>100000001</code>.|

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
    "EndDate": "string",
    "MembershipId": 0,
    "PlayerId": 0,
    "PlayerName": "string",
    "StartDate": "string",
    "TeamArea": "string",
    "TeamId": 0,
    "TeamName": "string",
    "Updated": "string"
  }
]
```

<h3 id="memberships-by-team-active-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-by-team-active-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Membership](#schemamembership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player

<a id="opIdPlayer"></a>

> Code samples

```bash
curl https://example.com/xml/Player/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Player/{playerid}`

Player

<h3 id="player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>100000576</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
{
  "BirthCity": "string",
  "BirthCountry": "string",
  "BirthDate": "string",
  "CommonName": "string",
  "FirstName": "string",
  "Gender": "string",
  "LastName": "string",
  "MatchName": "string",
  "Nationality": "string",
  "PlayerId": 0,
  "Position": "string",
  "Updated": "string"
}
```

<h3 id="player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Player](#schemaplayer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Players

<a id="opIdPlayers"></a>

> Code samples

```bash
curl https://example.com/xml/Players \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players`

Players

<h3 id="players-parameters">Parameters</h3>

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
    "BirthCity": "string",
    "BirthCountry": "string",
    "BirthDate": "string",
    "CommonName": "string",
    "FirstName": "string",
    "Gender": "string",
    "LastName": "string",
    "MatchName": "string",
    "Nationality": "string",
    "PlayerId": 0,
    "Position": "string",
    "Updated": "string"
  }
]
```

<h3 id="players-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="players-responseschema">Response Schema</h3>

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
curl https://example.com/xml/PlayersByTeam/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayersByTeam/{teamid}`

Players by Team

<h3 id="players-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|teamid|path|string|true|Unique FantasyData Team ID. <br>Example:<code>100000001</code>.|

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
    "BirthCity": "string",
    "BirthCountry": "string",
    "BirthDate": "string",
    "CommonName": "string",
    "FirstName": "string",
    "Gender": "string",
    "LastName": "string",
    "MatchName": "string",
    "Nationality": "string",
    "PlayerId": 0,
    "Position": "string",
    "Updated": "string"
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

## Schedule

<a id="opIdSchedule"></a>

> Code samples

```bash
curl https://example.com/xml/Schedule/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Schedule/{roundid}`

Schedule

<h3 id="schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|roundid|path|string|true|Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. <br>Examples: <code>100000138</code>, <code>1000001412</code>, etc|

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
]
```

<h3 id="schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Season Teams

<a id="opIdSeasonTeams"></a>

> Code samples

```bash
curl https://example.com/xml/SeasonTeams/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/SeasonTeams/{seasonid}`

Season Teams

<h3 id="season-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|seasonid|path|string|true|Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. <br>Examples: <code>100000023</code>, <code>100000024</code>, etc|

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
    "Gender": "string",
    "SeasonId": 0,
    "SeasonTeamId": 0,
    "Team": {
      "Active": true,
      "AreaId": 0,
      "AreaName": "string",
      "Email": "string",
      "Facebook": "string",
      "Founded": 0,
      "Gender": "string",
      "Instagram": "string",
      "Key": "string",
      "Name": "string",
      "PrimaryColor": "string",
      "QuaternaryColor": "string",
      "SecondaryColor": "string",
      "ShortName": "string",
      "TeamId": 0,
      "TertiaryColor": "string",
      "Twitter": "string",
      "Type": "string",
      "Website": "string",
      "YouTube": "string"
    },
    "TeamId": 0,
    "TeamName": "string",
    "Type": "string"
  }
]
```

<h3 id="season-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="season-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SeasonTeam](#schemaseasonteam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Standings

<a id="opIdStandings"></a>

> Code samples

```bash
curl https://example.com/xml/Standings/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Standings/{roundid}`

Schedule

<h3 id="standings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|roundid|path|string|true|Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. <br>Example: <code>100000138</code>, etc|

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
    "Games": 0,
    "Group": "string",
    "Losses": 0,
    "Name": "string",
    "Order": 0,
    "Points": 0,
    "RoundId": 0,
    "ScoreAgainst": 0,
    "ScoreDifference": 0,
    "ScoreFor": 0,
    "StandingId": 0,
    "TeamId": 0,
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

## Teams

<a id="opIdTeams"></a>

> Code samples

```bash
curl https://example.com/xml/Teams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Teams`

Teams

<h3 id="teams-parameters">Parameters</h3>

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
    "AreaId": 0,
    "AreaName": "string",
    "Email": "string",
    "Facebook": "string",
    "Founded": 0,
    "Gender": "string",
    "Instagram": "string",
    "Key": "string",
    "Name": "string",
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "ShortName": "string",
    "TeamId": 0,
    "TertiaryColor": "string",
    "Twitter": "string",
    "Type": "string",
    "Website": "string",
    "YouTube": "string"
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

## Venues

<a id="opIdVenues"></a>

> Code samples

```bash
curl https://example.com/xml/Venues \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Venues`

Venues

<h3 id="venues-parameters">Parameters</h3>

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
    "Address": "string",
    "Capacity": 0,
    "City": "string",
    "Country": "string",
    "GeoLat": 0,
    "GeoLong": 0,
    "Name": "string",
    "Nickname1": "string",
    "Nickname2": "string",
    "Open": true,
    "Opened": 0,
    "VenueId": 0,
    "Zip": "string"
  }
]
```

<h3 id="venues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="venues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Venue](#schemavenue)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_Area">Area</h2>
<!-- backwards compatibility -->
<a id="schemaarea"></a>
<a id="schema_Area"></a>
<a id="tocSarea"></a>
<a id="tocsarea"></a>

```json
{
  "AreaId": 0,
  "CountryCode": "string",
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreaId|integer|false|none|none|
|CountryCode|string \| null|false|none|none|
|Name|string \| null|false|none|none|

<h2 id="tocS_Competition">Competition</h2>
<!-- backwards compatibility -->
<a id="schemacompetition"></a>
<a id="schema_Competition"></a>
<a id="tocScompetition"></a>
<a id="tocscompetition"></a>

```json
{
  "AreaId": 0,
  "AreaName": "string",
  "CompetitionId": 0,
  "Format": "string",
  "Gender": "string",
  "Name": "string",
  "PlayerStatsCoverage": true,
  "Seasons": [
    {
      "CompetitionId": 0,
      "CompetitionName": "string",
      "CurrentSeason": true,
      "EndDate": "string",
      "Name": "string",
      "Rounds": [
        {
          "CurrentRound": true,
          "CurrentWeek": 0,
          "EndDate": "string",
          "Name": "string",
          "RoundId": 0,
          "Season": 0,
          "SeasonId": 0,
          "SeasonType": 0,
          "StartDate": "string",
          "Type": "string"
        }
      ],
      "Season": 0,
      "SeasonId": 0,
      "StartDate": "string"
    }
  ],
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreaId|integer|false|none|none|
|AreaName|string \| null|false|none|none|
|CompetitionId|integer|false|none|none|
|Format|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|PlayerStatsCoverage|boolean \| null|false|none|none|
|Seasons|[[Season](#schemaseason)]|false|none|none|
|Type|string \| null|false|none|none|

<h2 id="tocS_CompetitionDetail">CompetitionDetail</h2>
<!-- backwards compatibility -->
<a id="schemacompetitiondetail"></a>
<a id="schema_CompetitionDetail"></a>
<a id="tocScompetitiondetail"></a>
<a id="tocscompetitiondetail"></a>

```json
{
  "AreaId": 0,
  "AreaName": "string",
  "CompetitionId": 0,
  "CurrentSeason": {
    "CompetitionId": 0,
    "CompetitionName": "string",
    "CurrentSeason": true,
    "EndDate": "string",
    "Name": "string",
    "Rounds": [
      {
        "CurrentRound": true,
        "CurrentWeek": 0,
        "EndDate": "string",
        "Name": "string",
        "RoundId": 0,
        "Season": 0,
        "SeasonId": 0,
        "SeasonType": 0,
        "StartDate": "string",
        "Type": "string"
      }
    ],
    "Season": 0,
    "SeasonId": 0,
    "StartDate": "string"
  },
  "Format": "string",
  "Games": [
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
  ],
  "Gender": "string",
  "Name": "string",
  "PlayerStatsCoverage": true,
  "Seasons": [
    {
      "CompetitionId": 0,
      "CompetitionName": "string",
      "CurrentSeason": true,
      "EndDate": "string",
      "Name": "string",
      "Rounds": [
        {
          "CurrentRound": true,
          "CurrentWeek": 0,
          "EndDate": "string",
          "Name": "string",
          "RoundId": 0,
          "Season": 0,
          "SeasonId": 0,
          "SeasonType": 0,
          "StartDate": "string",
          "Type": "string"
        }
      ],
      "Season": 0,
      "SeasonId": 0,
      "StartDate": "string"
    }
  ],
  "Teams": [
    {
      "Active": true,
      "AreaId": 0,
      "AreaName": "string",
      "Email": "string",
      "Facebook": "string",
      "Founded": 0,
      "Gender": "string",
      "Instagram": "string",
      "Key": "string",
      "Name": "string",
      "Players": [
        {
          "BirthCity": "string",
          "BirthCountry": "string",
          "BirthDate": "string",
          "CommonName": "string",
          "FirstName": "string",
          "Gender": "string",
          "LastName": "string",
          "MatchName": "string",
          "Nationality": "string",
          "PlayerId": 0,
          "Position": "string",
          "Updated": "string"
        }
      ],
      "PrimaryColor": "string",
      "QuaternaryColor": "string",
      "SecondaryColor": "string",
      "ShortName": "string",
      "TeamId": 0,
      "TertiaryColor": "string",
      "Twitter": "string",
      "Type": "string",
      "Website": "string",
      "YouTube": "string"
    }
  ],
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreaId|integer|false|none|none|
|AreaName|string \| null|false|none|none|
|CompetitionId|integer|false|none|none|
|CurrentSeason|[Season](#schemaseason)|false|none|none|
|Format|string \| null|false|none|none|
|Games|[[Game](#schemagame)]|false|none|none|
|Gender|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|PlayerStatsCoverage|boolean \| null|false|none|none|
|Seasons|[[Season](#schemaseason)]|false|none|none|
|Teams|[[TeamDetail](#schemateamdetail)]|false|none|none|
|Type|string \| null|false|none|none|

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

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "Active": true,
  "EndDate": "string",
  "MembershipId": 0,
  "PlayerId": 0,
  "PlayerName": "string",
  "StartDate": "string",
  "TeamArea": "string",
  "TeamId": 0,
  "TeamName": "string",
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|EndDate|string \| null|false|none|none|
|MembershipId|integer|false|none|none|
|PlayerId|integer|false|none|none|
|PlayerName|string \| null|false|none|none|
|StartDate|string \| null|false|none|none|
|TeamArea|string \| null|false|none|none|
|TeamId|integer|false|none|none|
|TeamName|string \| null|false|none|none|
|Updated|string \| null|false|none|none|

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
  "CommonName": "string",
  "FirstName": "string",
  "Gender": "string",
  "LastName": "string",
  "MatchName": "string",
  "Nationality": "string",
  "PlayerId": 0,
  "Position": "string",
  "Updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthCountry|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|CommonName|string \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|LastName|string \| null|false|none|none|
|MatchName|string \| null|false|none|none|
|Nationality|string \| null|false|none|none|
|PlayerId|integer|false|none|none|
|Position|string \| null|false|none|none|
|Updated|string \| null|false|none|none|

<h2 id="tocS_Round">Round</h2>
<!-- backwards compatibility -->
<a id="schemaround"></a>
<a id="schema_Round"></a>
<a id="tocSround"></a>
<a id="tocsround"></a>

```json
{
  "CurrentRound": true,
  "CurrentWeek": 0,
  "EndDate": "string",
  "Name": "string",
  "RoundId": 0,
  "Season": 0,
  "SeasonId": 0,
  "SeasonType": 0,
  "StartDate": "string",
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentRound|boolean|false|none|none|
|CurrentWeek|integer \| null|false|none|none|
|EndDate|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|RoundId|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonId|integer|false|none|none|
|SeasonType|integer|false|none|none|
|StartDate|string \| null|false|none|none|
|Type|string \| null|false|none|none|

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
{
  "CompetitionId": 0,
  "CompetitionName": "string",
  "CurrentSeason": true,
  "EndDate": "string",
  "Name": "string",
  "Rounds": [
    {
      "CurrentRound": true,
      "CurrentWeek": 0,
      "EndDate": "string",
      "Name": "string",
      "RoundId": 0,
      "Season": 0,
      "SeasonId": 0,
      "SeasonType": 0,
      "StartDate": "string",
      "Type": "string"
    }
  ],
  "Season": 0,
  "SeasonId": 0,
  "StartDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompetitionId|integer|false|none|none|
|CompetitionName|string \| null|false|none|none|
|CurrentSeason|boolean|false|none|none|
|EndDate|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Rounds|[[Round](#schemaround)]|false|none|none|
|Season|integer|false|none|none|
|SeasonId|integer|false|none|none|
|StartDate|string \| null|false|none|none|

<h2 id="tocS_SeasonTeam">SeasonTeam</h2>
<!-- backwards compatibility -->
<a id="schemaseasonteam"></a>
<a id="schema_SeasonTeam"></a>
<a id="tocSseasonteam"></a>
<a id="tocsseasonteam"></a>

```json
{
  "Active": true,
  "Gender": "string",
  "SeasonId": 0,
  "SeasonTeamId": 0,
  "Team": {
    "Active": true,
    "AreaId": 0,
    "AreaName": "string",
    "Email": "string",
    "Facebook": "string",
    "Founded": 0,
    "Gender": "string",
    "Instagram": "string",
    "Key": "string",
    "Name": "string",
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "ShortName": "string",
    "TeamId": 0,
    "TertiaryColor": "string",
    "Twitter": "string",
    "Type": "string",
    "Website": "string",
    "YouTube": "string"
  },
  "TeamId": 0,
  "TeamName": "string",
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|Gender|string \| null|false|none|none|
|SeasonId|integer|false|none|none|
|SeasonTeamId|integer|false|none|none|
|Team|[Team](#schemateam)|false|none|none|
|TeamId|integer|false|none|none|
|TeamName|string \| null|false|none|none|
|Type|string \| null|false|none|none|

<h2 id="tocS_Standing">Standing</h2>
<!-- backwards compatibility -->
<a id="schemastanding"></a>
<a id="schema_Standing"></a>
<a id="tocSstanding"></a>
<a id="tocsstanding"></a>

```json
{
  "Games": 0,
  "Group": "string",
  "Losses": 0,
  "Name": "string",
  "Order": 0,
  "Points": 0,
  "RoundId": 0,
  "ScoreAgainst": 0,
  "ScoreDifference": 0,
  "ScoreFor": 0,
  "StandingId": 0,
  "TeamId": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Games|integer|false|none|none|
|Group|string \| null|false|none|none|
|Losses|integer|false|none|none|
|Name|string \| null|false|none|none|
|Order|integer \| null|false|none|none|
|Points|integer|false|none|none|
|RoundId|integer|false|none|none|
|ScoreAgainst|integer|false|none|none|
|ScoreDifference|integer|false|none|none|
|ScoreFor|integer|false|none|none|
|StandingId|integer|false|none|none|
|TeamId|integer|false|none|none|
|Wins|integer|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "Active": true,
  "AreaId": 0,
  "AreaName": "string",
  "Email": "string",
  "Facebook": "string",
  "Founded": 0,
  "Gender": "string",
  "Instagram": "string",
  "Key": "string",
  "Name": "string",
  "PrimaryColor": "string",
  "QuaternaryColor": "string",
  "SecondaryColor": "string",
  "ShortName": "string",
  "TeamId": 0,
  "TertiaryColor": "string",
  "Twitter": "string",
  "Type": "string",
  "Website": "string",
  "YouTube": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|AreaId|integer \| null|false|none|none|
|AreaName|string \| null|false|none|none|
|Email|string \| null|false|none|none|
|Facebook|string \| null|false|none|none|
|Founded|integer \| null|false|none|none|
|Gender|string \| null|false|none|none|
|Instagram|string \| null|false|none|none|
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|PrimaryColor|string \| null|false|none|none|
|QuaternaryColor|string \| null|false|none|none|
|SecondaryColor|string \| null|false|none|none|
|ShortName|string \| null|false|none|none|
|TeamId|integer|false|none|none|
|TertiaryColor|string \| null|false|none|none|
|Twitter|string \| null|false|none|none|
|Type|string \| null|false|none|none|
|Website|string \| null|false|none|none|
|YouTube|string \| null|false|none|none|

<h2 id="tocS_TeamDetail">TeamDetail</h2>
<!-- backwards compatibility -->
<a id="schemateamdetail"></a>
<a id="schema_TeamDetail"></a>
<a id="tocSteamdetail"></a>
<a id="tocsteamdetail"></a>

```json
{
  "Active": true,
  "AreaId": 0,
  "AreaName": "string",
  "Email": "string",
  "Facebook": "string",
  "Founded": 0,
  "Gender": "string",
  "Instagram": "string",
  "Key": "string",
  "Name": "string",
  "Players": [
    {
      "BirthCity": "string",
      "BirthCountry": "string",
      "BirthDate": "string",
      "CommonName": "string",
      "FirstName": "string",
      "Gender": "string",
      "LastName": "string",
      "MatchName": "string",
      "Nationality": "string",
      "PlayerId": 0,
      "Position": "string",
      "Updated": "string"
    }
  ],
  "PrimaryColor": "string",
  "QuaternaryColor": "string",
  "SecondaryColor": "string",
  "ShortName": "string",
  "TeamId": 0,
  "TertiaryColor": "string",
  "Twitter": "string",
  "Type": "string",
  "Website": "string",
  "YouTube": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|AreaId|integer \| null|false|none|none|
|AreaName|string \| null|false|none|none|
|Email|string \| null|false|none|none|
|Facebook|string \| null|false|none|none|
|Founded|integer \| null|false|none|none|
|Gender|string \| null|false|none|none|
|Instagram|string \| null|false|none|none|
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Players|[[Player](#schemaplayer)]|false|none|none|
|PrimaryColor|string \| null|false|none|none|
|QuaternaryColor|string \| null|false|none|none|
|SecondaryColor|string \| null|false|none|none|
|ShortName|string \| null|false|none|none|
|TeamId|integer|false|none|none|
|TertiaryColor|string \| null|false|none|none|
|Twitter|string \| null|false|none|none|
|Type|string \| null|false|none|none|
|Website|string \| null|false|none|none|
|YouTube|string \| null|false|none|none|

<h2 id="tocS_Venue">Venue</h2>
<!-- backwards compatibility -->
<a id="schemavenue"></a>
<a id="schema_Venue"></a>
<a id="tocSvenue"></a>
<a id="tocsvenue"></a>

```json
{
  "Address": "string",
  "Capacity": 0,
  "City": "string",
  "Country": "string",
  "GeoLat": 0,
  "GeoLong": 0,
  "Name": "string",
  "Nickname1": "string",
  "Nickname2": "string",
  "Open": true,
  "Opened": 0,
  "VenueId": 0,
  "Zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|string \| null|false|none|none|
|Capacity|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|GeoLat|number \| null|false|none|none|
|GeoLong|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|Nickname1|string \| null|false|none|none|
|Nickname2|string \| null|false|none|none|
|Open|boolean|false|none|none|
|Opened|integer \| null|false|none|none|
|VenueId|integer|false|none|none|
|Zip|string \| null|false|none|none|
