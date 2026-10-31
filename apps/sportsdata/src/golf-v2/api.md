<h1 id="golf-v2">Golf v2 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/golf/v2">http://azure-api.sportsdata.io/golf/v2</a>

* <a href="https://azure-api.sportsdata.io/golf/v2">https://azure-api.sportsdata.io/golf/v2</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="golf-v2-default">Default</h1>

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
  "Description": "string",
  "EndDate": "string",
  "SeasonID": 0,
  "StartDate": "string"
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

## DFS Slates

<a id="opIdDfsSlates"></a>

> Code samples

```bash
curl https://example.com/XML/DfsSlatesByTournament/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/DfsSlatesByTournament/{tournamentid}`

<h3 id="dfs-slates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|tournamentid|path|string|true|The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.|

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
        "PlayerID": 0,
        "PlayerTournamentProjectionID": 0,
        "RemovedByOperator": true,
        "SlateID": 0,
        "SlatePlayerID": 0,
        "SlateTournamentID": 0
      }
    ],
    "DfsSlateTournaments": [
      {
        "OperatorTournamentID": 0,
        "RemovedByOperator": true,
        "SlateID": 0,
        "SlateTournamentID": 0,
        "Tournament": {
          "Canceled": true,
          "City": "string",
          "Country": "string",
          "Covered": true,
          "EndDate": "string",
          "Format": "string",
          "IsInProgress": true,
          "IsOver": true,
          "Location": "string",
          "Name": "string",
          "Par": 0,
          "Purse": 0,
          "Rounds": [
            {
              "Day": "string",
              "Number": 0,
              "RoundID": 0,
              "TournamentID": 0
            }
          ],
          "SportRadarTournamentID": "string",
          "StartDate": "string",
          "StartDateTime": "string",
          "State": "string",
          "TimeZone": "string",
          "TournamentID": 0,
          "Venue": "string",
          "Yards": 0,
          "ZipCode": "string"
        },
        "TournamentID": 0
      }
    ],
    "IsMultiDaySlate": true,
    "NumberOfTournaments": 0,
    "Operator": "string",
    "OperatorDay": "string",
    "OperatorGameType": "string",
    "OperatorName": "string",
    "OperatorSlateID": 0,
    "OperatorStartTime": "string",
    "RemovedByOperator": true,
    "SlateID": 0,
    "SlateRosterSlots": [
      "string"
    ]
  }
]
```

<h3 id="dfs-slates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="dfs-slates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DfsSlate](#schemadfsslate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Injuries

<a id="opIdInjuries"></a>

> Code samples

```bash
curl https://example.com/XML/Injuries \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Injuries`

<h3 id="injuries-parameters">Parameters</h3>

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
    "BodyPart": "string",
    "ExpectedReturn": "string",
    "InjuryID": 0,
    "Name": "string",
    "PlayerID": 0,
    "StartDate": "string",
    "Status": "string"
  }
]
```

<h3 id="injuries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="injuries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Injury](#schemainjury)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Injuries (Historical)

<a id="opIdInjuriesHistorical"></a>

> Code samples

```bash
curl https://example.com/XML/InjuriesByHistorical \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/InjuriesByHistorical`

<h3 id="injuries-historical-parameters">Parameters</h3>

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
    "BodyPart": "string",
    "ExpectedReturn": "string",
    "InjuryID": 0,
    "Name": "string",
    "PlayerID": 0,
    "StartDate": "string",
    "Status": "string"
  }
]
```

<h3 id="injuries-historical-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="injuries-historical-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Injury](#schemainjury)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Leaderboard

<a id="opIdLeaderboard"></a>

> Code samples

```bash
curl https://example.com/XML/Leaderboard/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Leaderboard/{tournamentid}`

<h3 id="leaderboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|tournamentid|path|string|true|The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Players": [
    {
      "Birdies": 0,
      "BogeyFreeRounds": 0,
      "Bogeys": 0,
      "BounceBackCount": 0,
      "ConsecutiveBirdieOrBetterCount": 0,
      "Country": "string",
      "DoubleBogeys": 0,
      "DoubleEagles": 0,
      "DraftKingsSalary": 0,
      "Eagles": 0,
      "Earnings": 0,
      "FanDuelSalary": 0,
      "FantasyDraftSalary": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsFantasyDraft": 0,
      "FantasyPointsYahoo": 0,
      "FedExPoints": 0,
      "HoleInOnes": 0,
      "IsAlternate": true,
      "IsWithdrawn": true,
      "MadeCut": 0,
      "MadeCutDidNotFinish": true,
      "Name": "string",
      "OddsToWin": 0,
      "OddsToWinDescription": "string",
      "Pars": 0,
      "PlayerID": 0,
      "PlayerTournamentID": 0,
      "Rank": 0,
      "Rounds": [
        {
          "BackNineStart": true,
          "Birdies": 0,
          "BogeyFree": true,
          "Bogeys": 0,
          "BounceBackCount": 0,
          "ConsecutiveBirdieOrBetterCount": 0,
          "Day": "string",
          "DoubleBogeys": 0,
          "DoubleEagles": 0,
          "Eagles": 0,
          "HoleInOnes": 0,
          "Holes": [
            {
              "Birdie": true,
              "Bogey": true,
              "DoubleBogey": true,
              "DoubleEagle": true,
              "Eagle": true,
              "HoleInOne": true,
              "IsPar": true,
              "Number": 0,
              "Par": 0,
              "PlayerRoundID": 0,
              "Score": 0,
              "ToPar": 0,
              "WorseThanDoubleBogey": true
            }
          ],
          "IncludesFiveOrMoreBirdiesOrBetter": true,
          "IncludesStreakOfFiveBirdiesOrBetter": true,
          "IncludesStreakOfFourBirdiesOrBetter": true,
          "IncludesStreakOfSixBirdiesOrBetter": true,
          "IncludesStreakOfThreeBirdiesOrBetter": true,
          "LongestBirdieOrBetterStreak": 0,
          "Number": 0,
          "Par": 0,
          "Pars": 0,
          "PlayerRoundID": 0,
          "PlayerTournamentID": 0,
          "Score": 0,
          "TeeTime": "string",
          "TripleBogeys": 0,
          "WorseThanDoubleBogey": 0,
          "WorseThanTripleBogey": 0
        }
      ],
      "RoundsUnderSeventy": 0,
      "RoundsWithFiveOrMoreBirdiesOrBetter": 0,
      "StreaksOfFiveBirdiesOrBetter": 0,
      "StreaksOfFourBirdiesOrBetter": 0,
      "StreaksOfSixBirdiesOrBetter": 0,
      "StreaksOfThreeBirdiesOrBetter": 0,
      "TeeTime": "string",
      "TotalScore": 0,
      "TotalStrokes": 0,
      "TotalThrough": 0,
      "TournamentID": 0,
      "TournamentStatus": "string",
      "TripleBogeys": 0,
      "Win": 0,
      "WorseThanDoubleBogey": 0,
      "WorseThanTripleBogey": 0
    }
  ],
  "Tournament": {
    "Canceled": true,
    "City": "string",
    "Country": "string",
    "Covered": true,
    "EndDate": "string",
    "Format": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Location": "string",
    "Name": "string",
    "Par": 0,
    "Purse": 0,
    "Rounds": [
      {
        "Day": "string",
        "Number": 0,
        "RoundID": 0,
        "TournamentID": 0
      }
    ],
    "SportRadarTournamentID": "string",
    "StartDate": "string",
    "StartDateTime": "string",
    "State": "string",
    "TimeZone": "string",
    "TournamentID": 0,
    "Venue": "string",
    "Yards": 0,
    "ZipCode": "string"
  }
}
```

<h3 id="leaderboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Leaderboard](#schemaleaderboard)|

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
    "Source": "string",
    "TermsOfUse": "string",
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
    "Author": "string",
    "Categories": "string",
    "Content": "string",
    "NewsID": 0,
    "OriginalSource": "string",
    "OriginalSourceUrl": "string",
    "PlayerID": 0,
    "Source": "string",
    "TermsOfUse": "string",
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
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>40000019</code>.|

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
    "Source": "string",
    "TermsOfUse": "string",
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

## Player

<a id="opIdPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/Player/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Player/{playerid}`

<h3 id="player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>40000019</code>.|

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
  "BirthDate": "string",
  "BirthState": "string",
  "College": "string",
  "Country": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "FanDuelName": "string",
  "FanDuelPlayerID": 0,
  "FantasyAlarmPlayerID": 0,
  "FantasyDraftName": "string",
  "FantasyDraftPlayerID": 0,
  "FirstName": "string",
  "LastName": "string",
  "PgaDebut": 0,
  "PgaTourPlayerID": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "SportRadarPlayerID": "string",
  "Swings": "string",
  "Weight": 0,
  "YahooPlayerID": 0
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

## Player Season Stats (w/ World Golf Rankings)

<a id="opIdPlayerSeasonStatsWWorldGolfRankings"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerSeasonStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerSeasonStats/{season}`

<h3 id="player-season-stats-w-world-golf-rankings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season.<br><br>Examples: <code>2016</code>, <code>2017</code>.|

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
    "AveragePoints": 0,
    "Events": 0,
    "Name": "string",
    "PlayerID": 0,
    "PlayerSeasonID": 0,
    "PointsGained": 0,
    "PointsLost": 0,
    "Season": 0,
    "TotalPoints": 0,
    "WorldGolfRank": 0,
    "WorldGolfRankLastWeek": 0
  }
]
```

<h3 id="player-season-stats-w-world-golf-rankings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-season-stats-w-world-golf-rankings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerSeason](#schemaplayerseason)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Tournament Projected Stats (w/ DraftKings Salaries)

<a id="opIdPlayerTournamentProjectedStatsWDraftkingsSalaries"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerTournamentProjectionStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerTournamentProjectionStats/{tournamentid}`

<h3 id="player-tournament-projected-stats-w-draftkings-salaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|tournamentid|path|string|true|The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.|

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
    "Birdies": 0,
    "BogeyFreeRounds": 0,
    "Bogeys": 0,
    "BounceBackCount": 0,
    "ConsecutiveBirdieOrBetterCount": 0,
    "Country": "string",
    "DoubleBogeys": 0,
    "DoubleEagles": 0,
    "DraftKingsSalary": 0,
    "Eagles": 0,
    "Earnings": 0,
    "FanDuelSalary": 0,
    "FantasyDraftSalary": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsFantasyDraft": 0,
    "FantasyPointsYahoo": 0,
    "FedExPoints": 0,
    "HoleInOnes": 0,
    "IsAlternate": true,
    "IsWithdrawn": true,
    "MadeCut": 0,
    "MadeCutDidNotFinish": true,
    "Name": "string",
    "OddsToWin": 0,
    "OddsToWinDescription": "string",
    "Pars": 0,
    "PlayerID": 0,
    "PlayerTournamentID": 0,
    "Rank": 0,
    "Rounds": [
      {
        "BackNineStart": true,
        "Birdies": 0,
        "BogeyFree": true,
        "Bogeys": 0,
        "BounceBackCount": 0,
        "ConsecutiveBirdieOrBetterCount": 0,
        "Day": "string",
        "DoubleBogeys": 0,
        "DoubleEagles": 0,
        "Eagles": 0,
        "HoleInOnes": 0,
        "Holes": [
          {
            "Birdie": true,
            "Bogey": true,
            "DoubleBogey": true,
            "DoubleEagle": true,
            "Eagle": true,
            "HoleInOne": true,
            "IsPar": true,
            "Number": 0,
            "Par": 0,
            "PlayerRoundID": 0,
            "Score": 0,
            "ToPar": 0,
            "WorseThanDoubleBogey": true
          }
        ],
        "IncludesFiveOrMoreBirdiesOrBetter": true,
        "IncludesStreakOfFiveBirdiesOrBetter": true,
        "IncludesStreakOfFourBirdiesOrBetter": true,
        "IncludesStreakOfSixBirdiesOrBetter": true,
        "IncludesStreakOfThreeBirdiesOrBetter": true,
        "LongestBirdieOrBetterStreak": 0,
        "Number": 0,
        "Par": 0,
        "Pars": 0,
        "PlayerRoundID": 0,
        "PlayerTournamentID": 0,
        "Score": 0,
        "TeeTime": "string",
        "TripleBogeys": 0,
        "WorseThanDoubleBogey": 0,
        "WorseThanTripleBogey": 0
      }
    ],
    "RoundsUnderSeventy": 0,
    "RoundsWithFiveOrMoreBirdiesOrBetter": 0,
    "StreaksOfFiveBirdiesOrBetter": 0,
    "StreaksOfFourBirdiesOrBetter": 0,
    "StreaksOfSixBirdiesOrBetter": 0,
    "StreaksOfThreeBirdiesOrBetter": 0,
    "TeeTime": "string",
    "TotalScore": 0,
    "TotalStrokes": 0,
    "TotalThrough": 0,
    "TournamentID": 0,
    "TournamentStatus": "string",
    "TripleBogeys": 0,
    "Win": 0,
    "WorseThanDoubleBogey": 0,
    "WorseThanTripleBogey": 0
  }
]
```

<h3 id="player-tournament-projected-stats-w-draftkings-salaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-tournament-projected-stats-w-draftkings-salaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerTournamentProjection](#schemaplayertournamentprojection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Tournament Stats By Player

<a id="opIdPlayerTournamentStatsByPlayer"></a>

> Code samples

```bash
curl https://example.com/XML/PlayerTournamentStatsByPlayer/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/PlayerTournamentStatsByPlayer/{tournamentid}/{playerid}`

<h3 id="player-tournament-stats-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|tournamentid|path|string|true|The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>40000019</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
{
  "Birdies": 0,
  "BogeyFreeRounds": 0,
  "Bogeys": 0,
  "BounceBackCount": 0,
  "ConsecutiveBirdieOrBetterCount": 0,
  "Country": "string",
  "DoubleBogeys": 0,
  "DoubleEagles": 0,
  "DraftKingsSalary": 0,
  "Eagles": 0,
  "Earnings": 0,
  "FanDuelSalary": 0,
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FedExPoints": 0,
  "HoleInOnes": 0,
  "IsAlternate": true,
  "IsWithdrawn": true,
  "MadeCut": 0,
  "MadeCutDidNotFinish": true,
  "Name": "string",
  "OddsToWin": 0,
  "OddsToWinDescription": "string",
  "Pars": 0,
  "PlayerID": 0,
  "PlayerTournamentID": 0,
  "Rank": 0,
  "Rounds": [
    {
      "BackNineStart": true,
      "Birdies": 0,
      "BogeyFree": true,
      "Bogeys": 0,
      "BounceBackCount": 0,
      "ConsecutiveBirdieOrBetterCount": 0,
      "Day": "string",
      "DoubleBogeys": 0,
      "DoubleEagles": 0,
      "Eagles": 0,
      "HoleInOnes": 0,
      "Holes": [
        {
          "Birdie": true,
          "Bogey": true,
          "DoubleBogey": true,
          "DoubleEagle": true,
          "Eagle": true,
          "HoleInOne": true,
          "IsPar": true,
          "Number": 0,
          "Par": 0,
          "PlayerRoundID": 0,
          "Score": 0,
          "ToPar": 0,
          "WorseThanDoubleBogey": true
        }
      ],
      "IncludesFiveOrMoreBirdiesOrBetter": true,
      "IncludesStreakOfFiveBirdiesOrBetter": true,
      "IncludesStreakOfFourBirdiesOrBetter": true,
      "IncludesStreakOfSixBirdiesOrBetter": true,
      "IncludesStreakOfThreeBirdiesOrBetter": true,
      "LongestBirdieOrBetterStreak": 0,
      "Number": 0,
      "Par": 0,
      "Pars": 0,
      "PlayerRoundID": 0,
      "PlayerTournamentID": 0,
      "Score": 0,
      "TeeTime": "string",
      "TripleBogeys": 0,
      "WorseThanDoubleBogey": 0,
      "WorseThanTripleBogey": 0
    }
  ],
  "RoundsUnderSeventy": 0,
  "RoundsWithFiveOrMoreBirdiesOrBetter": 0,
  "StreaksOfFiveBirdiesOrBetter": 0,
  "StreaksOfFourBirdiesOrBetter": 0,
  "StreaksOfSixBirdiesOrBetter": 0,
  "StreaksOfThreeBirdiesOrBetter": 0,
  "TeeTime": "string",
  "TotalScore": 0,
  "TotalStrokes": 0,
  "TotalThrough": 0,
  "TournamentID": 0,
  "TournamentStatus": "string",
  "TripleBogeys": 0,
  "Win": 0,
  "WorseThanDoubleBogey": 0,
  "WorseThanTripleBogey": 0
}
```

<h3 id="player-tournament-stats-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerTournament](#schemaplayertournament)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Players

<a id="opIdPlayers"></a>

> Code samples

```bash
curl https://example.com/XML/Players \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players`

<h3 id="players-parameters">Parameters</h3>

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
    "BirthDate": "string",
    "BirthState": "string",
    "College": "string",
    "Country": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyAlarmPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
    "FirstName": "string",
    "LastName": "string",
    "PgaDebut": 0,
    "PgaTourPlayerID": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "RotoWirePlayerID": 0,
    "RotoworldPlayerID": 0,
    "SportRadarPlayerID": "string",
    "Swings": "string",
    "Weight": 0,
    "YahooPlayerID": 0
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

## Schedule

<a id="opIdSchedule"></a>

> Code samples

```bash
curl https://example.com/XML/Tournaments \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Tournaments`

<h3 id="schedule-parameters">Parameters</h3>

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
    "Canceled": true,
    "City": "string",
    "Country": "string",
    "Covered": true,
    "EndDate": "string",
    "Format": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Location": "string",
    "Name": "string",
    "Par": 0,
    "Purse": 0,
    "Rounds": [
      {
        "Day": "string",
        "Number": 0,
        "RoundID": 0,
        "TournamentID": 0
      }
    ],
    "SportRadarTournamentID": "string",
    "StartDate": "string",
    "StartDateTime": "string",
    "State": "string",
    "TimeZone": "string",
    "TournamentID": 0,
    "Venue": "string",
    "Yards": 0,
    "ZipCode": "string"
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
|*anonymous*|[[Tournament](#schematournament)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Schedule by Season

<a id="opIdScheduleBySeason"></a>

> Code samples

```bash
curl https://example.com/XML/Tournaments/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Tournaments/{season}`

<h3 id="schedule-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season.<br><br>Examples: <code>2016</code>, <code>2017</code>.|

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
    "Canceled": true,
    "City": "string",
    "Country": "string",
    "Covered": true,
    "EndDate": "string",
    "Format": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Location": "string",
    "Name": "string",
    "Par": 0,
    "Purse": 0,
    "Rounds": [
      {
        "Day": "string",
        "Number": 0,
        "RoundID": 0,
        "TournamentID": 0
      }
    ],
    "SportRadarTournamentID": "string",
    "StartDate": "string",
    "StartDateTime": "string",
    "State": "string",
    "TimeZone": "string",
    "TournamentID": 0,
    "Venue": "string",
    "Yards": 0,
    "ZipCode": "string"
  }
]
```

<h3 id="schedule-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="schedule-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tournament](#schematournament)]|false|none|none|

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
      "PlayerID": 0,
      "PlayerTournamentProjectionID": 0,
      "RemovedByOperator": true,
      "SlateID": 0,
      "SlatePlayerID": 0,
      "SlateTournamentID": 0
    }
  ],
  "DfsSlateTournaments": [
    {
      "OperatorTournamentID": 0,
      "RemovedByOperator": true,
      "SlateID": 0,
      "SlateTournamentID": 0,
      "Tournament": {
        "Canceled": true,
        "City": "string",
        "Country": "string",
        "Covered": true,
        "EndDate": "string",
        "Format": "string",
        "IsInProgress": true,
        "IsOver": true,
        "Location": "string",
        "Name": "string",
        "Par": 0,
        "Purse": 0,
        "Rounds": [
          {
            "Day": "string",
            "Number": 0,
            "RoundID": 0,
            "TournamentID": 0
          }
        ],
        "SportRadarTournamentID": "string",
        "StartDate": "string",
        "StartDateTime": "string",
        "State": "string",
        "TimeZone": "string",
        "TournamentID": 0,
        "Venue": "string",
        "Yards": 0,
        "ZipCode": "string"
      },
      "TournamentID": 0
    }
  ],
  "IsMultiDaySlate": true,
  "NumberOfTournaments": 0,
  "Operator": "string",
  "OperatorDay": "string",
  "OperatorGameType": "string",
  "OperatorName": "string",
  "OperatorSlateID": 0,
  "OperatorStartTime": "string",
  "RemovedByOperator": true,
  "SlateID": 0,
  "SlateRosterSlots": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DfsSlatePlayers|[[DfsSlatePlayer](#schemadfsslateplayer)]|false|none|none|
|DfsSlateTournaments|[[DfsSlateTournament](#schemadfsslatetournament)]|false|none|none|
|IsMultiDaySlate|boolean \| null|false|none|none|
|NumberOfTournaments|integer \| null|false|none|none|
|Operator|string \| null|false|none|none|
|OperatorDay|string \| null|false|none|none|
|OperatorGameType|string \| null|false|none|none|
|OperatorName|string \| null|false|none|none|
|OperatorSlateID|integer \| null|false|none|none|
|OperatorStartTime|string \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|SlateID|integer|false|none|none|
|SlateRosterSlots|[string \| null]|false|none|none|

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
  "PlayerID": 0,
  "PlayerTournamentProjectionID": 0,
  "RemovedByOperator": true,
  "SlateID": 0,
  "SlatePlayerID": 0,
  "SlateTournamentID": 0
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
|PlayerID|integer \| null|false|none|none|
|PlayerTournamentProjectionID|integer \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|SlateID|integer|false|none|none|
|SlatePlayerID|integer|false|none|none|
|SlateTournamentID|integer \| null|false|none|none|

<h2 id="tocS_DfsSlateTournament">DfsSlateTournament</h2>
<!-- backwards compatibility -->
<a id="schemadfsslatetournament"></a>
<a id="schema_DfsSlateTournament"></a>
<a id="tocSdfsslatetournament"></a>
<a id="tocsdfsslatetournament"></a>

```json
{
  "OperatorTournamentID": 0,
  "RemovedByOperator": true,
  "SlateID": 0,
  "SlateTournamentID": 0,
  "Tournament": {
    "Canceled": true,
    "City": "string",
    "Country": "string",
    "Covered": true,
    "EndDate": "string",
    "Format": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Location": "string",
    "Name": "string",
    "Par": 0,
    "Purse": 0,
    "Rounds": [
      {
        "Day": "string",
        "Number": 0,
        "RoundID": 0,
        "TournamentID": 0
      }
    ],
    "SportRadarTournamentID": "string",
    "StartDate": "string",
    "StartDateTime": "string",
    "State": "string",
    "TimeZone": "string",
    "TournamentID": 0,
    "Venue": "string",
    "Yards": 0,
    "ZipCode": "string"
  },
  "TournamentID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperatorTournamentID|integer \| null|false|none|none|
|RemovedByOperator|boolean \| null|false|none|none|
|SlateID|integer|false|none|none|
|SlateTournamentID|integer|false|none|none|
|Tournament|[Tournament](#schematournament)|false|none|none|
|TournamentID|integer \| null|false|none|none|

<h2 id="tocS_Injury">Injury</h2>
<!-- backwards compatibility -->
<a id="schemainjury"></a>
<a id="schema_Injury"></a>
<a id="tocSinjury"></a>
<a id="tocsinjury"></a>

```json
{
  "Active": true,
  "BodyPart": "string",
  "ExpectedReturn": "string",
  "InjuryID": 0,
  "Name": "string",
  "PlayerID": 0,
  "StartDate": "string",
  "Status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|BodyPart|string \| null|false|none|none|
|ExpectedReturn|string \| null|false|none|none|
|InjuryID|integer|false|none|none|
|Name|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|StartDate|string \| null|false|none|none|
|Status|string \| null|false|none|none|

<h2 id="tocS_Leaderboard">Leaderboard</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboard"></a>
<a id="schema_Leaderboard"></a>
<a id="tocSleaderboard"></a>
<a id="tocsleaderboard"></a>

```json
{
  "Players": [
    {
      "Birdies": 0,
      "BogeyFreeRounds": 0,
      "Bogeys": 0,
      "BounceBackCount": 0,
      "ConsecutiveBirdieOrBetterCount": 0,
      "Country": "string",
      "DoubleBogeys": 0,
      "DoubleEagles": 0,
      "DraftKingsSalary": 0,
      "Eagles": 0,
      "Earnings": 0,
      "FanDuelSalary": 0,
      "FantasyDraftSalary": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsFantasyDraft": 0,
      "FantasyPointsYahoo": 0,
      "FedExPoints": 0,
      "HoleInOnes": 0,
      "IsAlternate": true,
      "IsWithdrawn": true,
      "MadeCut": 0,
      "MadeCutDidNotFinish": true,
      "Name": "string",
      "OddsToWin": 0,
      "OddsToWinDescription": "string",
      "Pars": 0,
      "PlayerID": 0,
      "PlayerTournamentID": 0,
      "Rank": 0,
      "Rounds": [
        {
          "BackNineStart": true,
          "Birdies": 0,
          "BogeyFree": true,
          "Bogeys": 0,
          "BounceBackCount": 0,
          "ConsecutiveBirdieOrBetterCount": 0,
          "Day": "string",
          "DoubleBogeys": 0,
          "DoubleEagles": 0,
          "Eagles": 0,
          "HoleInOnes": 0,
          "Holes": [
            {
              "Birdie": true,
              "Bogey": true,
              "DoubleBogey": true,
              "DoubleEagle": true,
              "Eagle": true,
              "HoleInOne": true,
              "IsPar": true,
              "Number": 0,
              "Par": 0,
              "PlayerRoundID": 0,
              "Score": 0,
              "ToPar": 0,
              "WorseThanDoubleBogey": true
            }
          ],
          "IncludesFiveOrMoreBirdiesOrBetter": true,
          "IncludesStreakOfFiveBirdiesOrBetter": true,
          "IncludesStreakOfFourBirdiesOrBetter": true,
          "IncludesStreakOfSixBirdiesOrBetter": true,
          "IncludesStreakOfThreeBirdiesOrBetter": true,
          "LongestBirdieOrBetterStreak": 0,
          "Number": 0,
          "Par": 0,
          "Pars": 0,
          "PlayerRoundID": 0,
          "PlayerTournamentID": 0,
          "Score": 0,
          "TeeTime": "string",
          "TripleBogeys": 0,
          "WorseThanDoubleBogey": 0,
          "WorseThanTripleBogey": 0
        }
      ],
      "RoundsUnderSeventy": 0,
      "RoundsWithFiveOrMoreBirdiesOrBetter": 0,
      "StreaksOfFiveBirdiesOrBetter": 0,
      "StreaksOfFourBirdiesOrBetter": 0,
      "StreaksOfSixBirdiesOrBetter": 0,
      "StreaksOfThreeBirdiesOrBetter": 0,
      "TeeTime": "string",
      "TotalScore": 0,
      "TotalStrokes": 0,
      "TotalThrough": 0,
      "TournamentID": 0,
      "TournamentStatus": "string",
      "TripleBogeys": 0,
      "Win": 0,
      "WorseThanDoubleBogey": 0,
      "WorseThanTripleBogey": 0
    }
  ],
  "Tournament": {
    "Canceled": true,
    "City": "string",
    "Country": "string",
    "Covered": true,
    "EndDate": "string",
    "Format": "string",
    "IsInProgress": true,
    "IsOver": true,
    "Location": "string",
    "Name": "string",
    "Par": 0,
    "Purse": 0,
    "Rounds": [
      {
        "Day": "string",
        "Number": 0,
        "RoundID": 0,
        "TournamentID": 0
      }
    ],
    "SportRadarTournamentID": "string",
    "StartDate": "string",
    "StartDateTime": "string",
    "State": "string",
    "TimeZone": "string",
    "TournamentID": 0,
    "Venue": "string",
    "Yards": 0,
    "ZipCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Players|[[PlayerTournament](#schemaplayertournament)]|false|none|none|
|Tournament|[Tournament](#schematournament)|false|none|none|

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
  "Source": "string",
  "TermsOfUse": "string",
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
|Source|string \| null|false|none|none|
|TermsOfUse|string \| null|false|none|none|
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
  "BirthCity": "string",
  "BirthDate": "string",
  "BirthState": "string",
  "College": "string",
  "Country": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "FanDuelName": "string",
  "FanDuelPlayerID": 0,
  "FantasyAlarmPlayerID": 0,
  "FantasyDraftName": "string",
  "FantasyDraftPlayerID": 0,
  "FirstName": "string",
  "LastName": "string",
  "PgaDebut": 0,
  "PgaTourPlayerID": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "RotoWirePlayerID": 0,
  "RotoworldPlayerID": 0,
  "SportRadarPlayerID": "string",
  "Swings": "string",
  "Weight": 0,
  "YahooPlayerID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|BirthState|string \| null|false|none|none|
|College|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|FanDuelName|string \| null|false|none|none|
|FanDuelPlayerID|integer \| null|false|none|none|
|FantasyAlarmPlayerID|integer \| null|false|none|none|
|FantasyDraftName|string \| null|false|none|none|
|FantasyDraftPlayerID|integer \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|LastName|string \| null|false|none|none|
|PgaDebut|integer \| null|false|none|none|
|PgaTourPlayerID|integer \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|RotoworldPlayerID|integer \| null|false|none|none|
|SportRadarPlayerID|string \| null|false|none|none|
|Swings|string \| null|false|none|none|
|Weight|integer \| null|false|none|none|
|YahooPlayerID|integer \| null|false|none|none|

<h2 id="tocS_PlayerHole">PlayerHole</h2>
<!-- backwards compatibility -->
<a id="schemaplayerhole"></a>
<a id="schema_PlayerHole"></a>
<a id="tocSplayerhole"></a>
<a id="tocsplayerhole"></a>

```json
{
  "Birdie": true,
  "Bogey": true,
  "DoubleBogey": true,
  "DoubleEagle": true,
  "Eagle": true,
  "HoleInOne": true,
  "IsPar": true,
  "Number": 0,
  "Par": 0,
  "PlayerRoundID": 0,
  "Score": 0,
  "ToPar": 0,
  "WorseThanDoubleBogey": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Birdie|boolean|false|none|none|
|Bogey|boolean|false|none|none|
|DoubleBogey|boolean|false|none|none|
|DoubleEagle|boolean|false|none|none|
|Eagle|boolean|false|none|none|
|HoleInOne|boolean|false|none|none|
|IsPar|boolean|false|none|none|
|Number|integer \| null|false|none|none|
|Par|integer \| null|false|none|none|
|PlayerRoundID|integer|false|none|none|
|Score|integer \| null|false|none|none|
|ToPar|integer \| null|false|none|none|
|WorseThanDoubleBogey|boolean|false|none|none|

<h2 id="tocS_PlayerRound">PlayerRound</h2>
<!-- backwards compatibility -->
<a id="schemaplayerround"></a>
<a id="schema_PlayerRound"></a>
<a id="tocSplayerround"></a>
<a id="tocsplayerround"></a>

```json
{
  "BackNineStart": true,
  "Birdies": 0,
  "BogeyFree": true,
  "Bogeys": 0,
  "BounceBackCount": 0,
  "ConsecutiveBirdieOrBetterCount": 0,
  "Day": "string",
  "DoubleBogeys": 0,
  "DoubleEagles": 0,
  "Eagles": 0,
  "HoleInOnes": 0,
  "Holes": [
    {
      "Birdie": true,
      "Bogey": true,
      "DoubleBogey": true,
      "DoubleEagle": true,
      "Eagle": true,
      "HoleInOne": true,
      "IsPar": true,
      "Number": 0,
      "Par": 0,
      "PlayerRoundID": 0,
      "Score": 0,
      "ToPar": 0,
      "WorseThanDoubleBogey": true
    }
  ],
  "IncludesFiveOrMoreBirdiesOrBetter": true,
  "IncludesStreakOfFiveBirdiesOrBetter": true,
  "IncludesStreakOfFourBirdiesOrBetter": true,
  "IncludesStreakOfSixBirdiesOrBetter": true,
  "IncludesStreakOfThreeBirdiesOrBetter": true,
  "LongestBirdieOrBetterStreak": 0,
  "Number": 0,
  "Par": 0,
  "Pars": 0,
  "PlayerRoundID": 0,
  "PlayerTournamentID": 0,
  "Score": 0,
  "TeeTime": "string",
  "TripleBogeys": 0,
  "WorseThanDoubleBogey": 0,
  "WorseThanTripleBogey": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BackNineStart|boolean \| null|false|none|none|
|Birdies|integer \| null|false|none|none|
|BogeyFree|boolean|false|none|none|
|Bogeys|integer \| null|false|none|none|
|BounceBackCount|number \| null|false|none|none|
|ConsecutiveBirdieOrBetterCount|number \| null|false|none|none|
|Day|string \| null|false|none|none|
|DoubleBogeys|integer \| null|false|none|none|
|DoubleEagles|integer \| null|false|none|none|
|Eagles|integer \| null|false|none|none|
|HoleInOnes|integer \| null|false|none|none|
|Holes|[[PlayerHole](#schemaplayerhole)]|false|none|none|
|IncludesFiveOrMoreBirdiesOrBetter|boolean|false|none|none|
|IncludesStreakOfFiveBirdiesOrBetter|boolean|false|none|none|
|IncludesStreakOfFourBirdiesOrBetter|boolean|false|none|none|
|IncludesStreakOfSixBirdiesOrBetter|boolean|false|none|none|
|IncludesStreakOfThreeBirdiesOrBetter|boolean|false|none|none|
|LongestBirdieOrBetterStreak|number \| null|false|none|none|
|Number|integer \| null|false|none|none|
|Par|integer \| null|false|none|none|
|Pars|integer \| null|false|none|none|
|PlayerRoundID|integer|false|none|none|
|PlayerTournamentID|integer|false|none|none|
|Score|integer \| null|false|none|none|
|TeeTime|string \| null|false|none|none|
|TripleBogeys|integer \| null|false|none|none|
|WorseThanDoubleBogey|integer \| null|false|none|none|
|WorseThanTripleBogey|integer \| null|false|none|none|

<h2 id="tocS_PlayerSeason">PlayerSeason</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseason"></a>
<a id="schema_PlayerSeason"></a>
<a id="tocSplayerseason"></a>
<a id="tocsplayerseason"></a>

```json
{
  "AveragePoints": 0,
  "Events": 0,
  "Name": "string",
  "PlayerID": 0,
  "PlayerSeasonID": 0,
  "PointsGained": 0,
  "PointsLost": 0,
  "Season": 0,
  "TotalPoints": 0,
  "WorldGolfRank": 0,
  "WorldGolfRankLastWeek": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AveragePoints|number \| null|false|none|none|
|Events|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|PlayerSeasonID|integer|false|none|none|
|PointsGained|number \| null|false|none|none|
|PointsLost|number \| null|false|none|none|
|Season|integer|false|none|none|
|TotalPoints|number \| null|false|none|none|
|WorldGolfRank|integer \| null|false|none|none|
|WorldGolfRankLastWeek|integer \| null|false|none|none|

<h2 id="tocS_PlayerTournament">PlayerTournament</h2>
<!-- backwards compatibility -->
<a id="schemaplayertournament"></a>
<a id="schema_PlayerTournament"></a>
<a id="tocSplayertournament"></a>
<a id="tocsplayertournament"></a>

```json
{
  "Birdies": 0,
  "BogeyFreeRounds": 0,
  "Bogeys": 0,
  "BounceBackCount": 0,
  "ConsecutiveBirdieOrBetterCount": 0,
  "Country": "string",
  "DoubleBogeys": 0,
  "DoubleEagles": 0,
  "DraftKingsSalary": 0,
  "Eagles": 0,
  "Earnings": 0,
  "FanDuelSalary": 0,
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FedExPoints": 0,
  "HoleInOnes": 0,
  "IsAlternate": true,
  "IsWithdrawn": true,
  "MadeCut": 0,
  "MadeCutDidNotFinish": true,
  "Name": "string",
  "OddsToWin": 0,
  "OddsToWinDescription": "string",
  "Pars": 0,
  "PlayerID": 0,
  "PlayerTournamentID": 0,
  "Rank": 0,
  "Rounds": [
    {
      "BackNineStart": true,
      "Birdies": 0,
      "BogeyFree": true,
      "Bogeys": 0,
      "BounceBackCount": 0,
      "ConsecutiveBirdieOrBetterCount": 0,
      "Day": "string",
      "DoubleBogeys": 0,
      "DoubleEagles": 0,
      "Eagles": 0,
      "HoleInOnes": 0,
      "Holes": [
        {
          "Birdie": true,
          "Bogey": true,
          "DoubleBogey": true,
          "DoubleEagle": true,
          "Eagle": true,
          "HoleInOne": true,
          "IsPar": true,
          "Number": 0,
          "Par": 0,
          "PlayerRoundID": 0,
          "Score": 0,
          "ToPar": 0,
          "WorseThanDoubleBogey": true
        }
      ],
      "IncludesFiveOrMoreBirdiesOrBetter": true,
      "IncludesStreakOfFiveBirdiesOrBetter": true,
      "IncludesStreakOfFourBirdiesOrBetter": true,
      "IncludesStreakOfSixBirdiesOrBetter": true,
      "IncludesStreakOfThreeBirdiesOrBetter": true,
      "LongestBirdieOrBetterStreak": 0,
      "Number": 0,
      "Par": 0,
      "Pars": 0,
      "PlayerRoundID": 0,
      "PlayerTournamentID": 0,
      "Score": 0,
      "TeeTime": "string",
      "TripleBogeys": 0,
      "WorseThanDoubleBogey": 0,
      "WorseThanTripleBogey": 0
    }
  ],
  "RoundsUnderSeventy": 0,
  "RoundsWithFiveOrMoreBirdiesOrBetter": 0,
  "StreaksOfFiveBirdiesOrBetter": 0,
  "StreaksOfFourBirdiesOrBetter": 0,
  "StreaksOfSixBirdiesOrBetter": 0,
  "StreaksOfThreeBirdiesOrBetter": 0,
  "TeeTime": "string",
  "TotalScore": 0,
  "TotalStrokes": 0,
  "TotalThrough": 0,
  "TournamentID": 0,
  "TournamentStatus": "string",
  "TripleBogeys": 0,
  "Win": 0,
  "WorseThanDoubleBogey": 0,
  "WorseThanTripleBogey": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Birdies|number \| null|false|none|none|
|BogeyFreeRounds|number \| null|false|none|none|
|Bogeys|number \| null|false|none|none|
|BounceBackCount|number \| null|false|none|none|
|ConsecutiveBirdieOrBetterCount|number \| null|false|none|none|
|Country|string \| null|false|none|none|
|DoubleBogeys|number \| null|false|none|none|
|DoubleEagles|number \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|Eagles|number \| null|false|none|none|
|Earnings|number \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDraftSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FedExPoints|integer \| null|false|none|none|
|HoleInOnes|number \| null|false|none|none|
|IsAlternate|boolean \| null|false|none|none|
|IsWithdrawn|boolean|false|none|none|
|MadeCut|number \| null|false|none|none|
|MadeCutDidNotFinish|boolean \| null|false|none|none|
|Name|string \| null|false|none|none|
|OddsToWin|number \| null|false|none|none|
|OddsToWinDescription|string \| null|false|none|none|
|Pars|number \| null|false|none|none|
|PlayerID|integer|false|none|none|
|PlayerTournamentID|integer|false|none|none|
|Rank|integer \| null|false|none|none|
|Rounds|[[PlayerRound](#schemaplayerround)]|false|none|none|
|RoundsUnderSeventy|number \| null|false|none|none|
|RoundsWithFiveOrMoreBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfFiveBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfFourBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfSixBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfThreeBirdiesOrBetter|number \| null|false|none|none|
|TeeTime|string \| null|false|none|none|
|TotalScore|number \| null|false|none|none|
|TotalStrokes|number \| null|false|none|none|
|TotalThrough|integer \| null|false|none|none|
|TournamentID|integer|false|none|none|
|TournamentStatus|string \| null|false|none|none|
|TripleBogeys|number \| null|false|none|none|
|Win|number \| null|false|none|none|
|WorseThanDoubleBogey|number \| null|false|none|none|
|WorseThanTripleBogey|number \| null|false|none|none|

<h2 id="tocS_PlayerTournamentProjection">PlayerTournamentProjection</h2>
<!-- backwards compatibility -->
<a id="schemaplayertournamentprojection"></a>
<a id="schema_PlayerTournamentProjection"></a>
<a id="tocSplayertournamentprojection"></a>
<a id="tocsplayertournamentprojection"></a>

```json
{
  "Birdies": 0,
  "BogeyFreeRounds": 0,
  "Bogeys": 0,
  "BounceBackCount": 0,
  "ConsecutiveBirdieOrBetterCount": 0,
  "Country": "string",
  "DoubleBogeys": 0,
  "DoubleEagles": 0,
  "DraftKingsSalary": 0,
  "Eagles": 0,
  "Earnings": 0,
  "FanDuelSalary": 0,
  "FantasyDraftSalary": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsFantasyDraft": 0,
  "FantasyPointsYahoo": 0,
  "FedExPoints": 0,
  "HoleInOnes": 0,
  "IsAlternate": true,
  "IsWithdrawn": true,
  "MadeCut": 0,
  "MadeCutDidNotFinish": true,
  "Name": "string",
  "OddsToWin": 0,
  "OddsToWinDescription": "string",
  "Pars": 0,
  "PlayerID": 0,
  "PlayerTournamentID": 0,
  "Rank": 0,
  "Rounds": [
    {
      "BackNineStart": true,
      "Birdies": 0,
      "BogeyFree": true,
      "Bogeys": 0,
      "BounceBackCount": 0,
      "ConsecutiveBirdieOrBetterCount": 0,
      "Day": "string",
      "DoubleBogeys": 0,
      "DoubleEagles": 0,
      "Eagles": 0,
      "HoleInOnes": 0,
      "Holes": [
        {
          "Birdie": true,
          "Bogey": true,
          "DoubleBogey": true,
          "DoubleEagle": true,
          "Eagle": true,
          "HoleInOne": true,
          "IsPar": true,
          "Number": 0,
          "Par": 0,
          "PlayerRoundID": 0,
          "Score": 0,
          "ToPar": 0,
          "WorseThanDoubleBogey": true
        }
      ],
      "IncludesFiveOrMoreBirdiesOrBetter": true,
      "IncludesStreakOfFiveBirdiesOrBetter": true,
      "IncludesStreakOfFourBirdiesOrBetter": true,
      "IncludesStreakOfSixBirdiesOrBetter": true,
      "IncludesStreakOfThreeBirdiesOrBetter": true,
      "LongestBirdieOrBetterStreak": 0,
      "Number": 0,
      "Par": 0,
      "Pars": 0,
      "PlayerRoundID": 0,
      "PlayerTournamentID": 0,
      "Score": 0,
      "TeeTime": "string",
      "TripleBogeys": 0,
      "WorseThanDoubleBogey": 0,
      "WorseThanTripleBogey": 0
    }
  ],
  "RoundsUnderSeventy": 0,
  "RoundsWithFiveOrMoreBirdiesOrBetter": 0,
  "StreaksOfFiveBirdiesOrBetter": 0,
  "StreaksOfFourBirdiesOrBetter": 0,
  "StreaksOfSixBirdiesOrBetter": 0,
  "StreaksOfThreeBirdiesOrBetter": 0,
  "TeeTime": "string",
  "TotalScore": 0,
  "TotalStrokes": 0,
  "TotalThrough": 0,
  "TournamentID": 0,
  "TournamentStatus": "string",
  "TripleBogeys": 0,
  "Win": 0,
  "WorseThanDoubleBogey": 0,
  "WorseThanTripleBogey": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Birdies|number \| null|false|none|none|
|BogeyFreeRounds|number \| null|false|none|none|
|Bogeys|number \| null|false|none|none|
|BounceBackCount|number \| null|false|none|none|
|ConsecutiveBirdieOrBetterCount|number \| null|false|none|none|
|Country|string \| null|false|none|none|
|DoubleBogeys|number \| null|false|none|none|
|DoubleEagles|number \| null|false|none|none|
|DraftKingsSalary|integer \| null|false|none|none|
|Eagles|number \| null|false|none|none|
|Earnings|number \| null|false|none|none|
|FanDuelSalary|integer \| null|false|none|none|
|FantasyDraftSalary|integer \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsFantasyDraft|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|FedExPoints|integer \| null|false|none|none|
|HoleInOnes|number \| null|false|none|none|
|IsAlternate|boolean \| null|false|none|none|
|IsWithdrawn|boolean|false|none|none|
|MadeCut|number \| null|false|none|none|
|MadeCutDidNotFinish|boolean \| null|false|none|none|
|Name|string \| null|false|none|none|
|OddsToWin|number \| null|false|none|none|
|OddsToWinDescription|string \| null|false|none|none|
|Pars|number \| null|false|none|none|
|PlayerID|integer|false|none|none|
|PlayerTournamentID|integer|false|none|none|
|Rank|integer \| null|false|none|none|
|Rounds|[[PlayerRound](#schemaplayerround)]|false|none|none|
|RoundsUnderSeventy|number \| null|false|none|none|
|RoundsWithFiveOrMoreBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfFiveBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfFourBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfSixBirdiesOrBetter|number \| null|false|none|none|
|StreaksOfThreeBirdiesOrBetter|number \| null|false|none|none|
|TeeTime|string \| null|false|none|none|
|TotalScore|number \| null|false|none|none|
|TotalStrokes|number \| null|false|none|none|
|TotalThrough|integer \| null|false|none|none|
|TournamentID|integer|false|none|none|
|TournamentStatus|string \| null|false|none|none|
|TripleBogeys|number \| null|false|none|none|
|Win|number \| null|false|none|none|
|WorseThanDoubleBogey|number \| null|false|none|none|
|WorseThanTripleBogey|number \| null|false|none|none|

<h2 id="tocS_Round">Round</h2>
<!-- backwards compatibility -->
<a id="schemaround"></a>
<a id="schema_Round"></a>
<a id="tocSround"></a>
<a id="tocsround"></a>

```json
{
  "Day": "string",
  "Number": 0,
  "RoundID": 0,
  "TournamentID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Day|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|RoundID|integer|false|none|none|
|TournamentID|integer|false|none|none|

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
{
  "Description": "string",
  "EndDate": "string",
  "SeasonID": 0,
  "StartDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string \| null|false|none|none|
|EndDate|string \| null|false|none|none|
|SeasonID|integer|false|none|none|
|StartDate|string \| null|false|none|none|

<h2 id="tocS_Tournament">Tournament</h2>
<!-- backwards compatibility -->
<a id="schematournament"></a>
<a id="schema_Tournament"></a>
<a id="tocStournament"></a>
<a id="tocstournament"></a>

```json
{
  "Canceled": true,
  "City": "string",
  "Country": "string",
  "Covered": true,
  "EndDate": "string",
  "Format": "string",
  "IsInProgress": true,
  "IsOver": true,
  "Location": "string",
  "Name": "string",
  "Par": 0,
  "Purse": 0,
  "Rounds": [
    {
      "Day": "string",
      "Number": 0,
      "RoundID": 0,
      "TournamentID": 0
    }
  ],
  "SportRadarTournamentID": "string",
  "StartDate": "string",
  "StartDateTime": "string",
  "State": "string",
  "TimeZone": "string",
  "TournamentID": 0,
  "Venue": "string",
  "Yards": 0,
  "ZipCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Canceled|boolean \| null|false|none|none|
|City|string \| null|false|none|none|
|Country|string \| null|false|none|none|
|Covered|boolean \| null|false|none|none|
|EndDate|string \| null|false|none|none|
|Format|string \| null|false|none|none|
|IsInProgress|boolean|false|none|none|
|IsOver|boolean|false|none|none|
|Location|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Par|integer \| null|false|none|none|
|Purse|number \| null|false|none|none|
|Rounds|[[Round](#schemaround)]|false|none|none|
|SportRadarTournamentID|string \| null|false|none|none|
|StartDate|string \| null|false|none|none|
|StartDateTime|string \| null|false|none|none|
|State|string \| null|false|none|none|
|TimeZone|string \| null|false|none|none|
|TournamentID|integer|false|none|none|
|Venue|string \| null|false|none|none|
|Yards|integer \| null|false|none|none|
|ZipCode|string \| null|false|none|none|
