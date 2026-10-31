<h1 id="nfl-v3-scores">NFL v3 Scores v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NFL schedules, scores, odds, weather, and news API.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nfl/scores">http://azure-api.sportsdata.io/v3/nfl/scores</a>

* <a href="https://azure-api.sportsdata.io/v3/nfl/scores">https://azure-api.sportsdata.io/v3/nfl/scores</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nfl-v3-scores-default">Default</h1>

## Teams (All)

<a id="opIdTeamsAll"></a>

> Code samples

```bash
curl https://example.com/XML/AllTeams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/AllTeams`

Gets all teams, including pro bowl teams.

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
    "AverageDraftPosition": 0,
    "AverageDraftPosition2QB": 0,
    "AverageDraftPositionDynasty": 0,
    "AverageDraftPositionPPR": 0,
    "ByeWeek": 0,
    "City": "string",
    "Conference": "string",
    "DefensiveCoordinator": "string",
    "DefensiveScheme": "string",
    "Division": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
    "FullName": "string",
    "GlobalTeamID": 0,
    "HeadCoach": "string",
    "Key": "string",
    "Name": "string",
    "OffensiveCoordinator": "string",
    "OffensiveScheme": "string",
    "PlayerID": 0,
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "SpecialTeamsCoach": "string",
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
    "TeamID": 0,
    "TertiaryColor": "string",
    "UpcomingDraftKingsSalary": 0,
    "UpcomingFanDuelSalary": 0,
    "UpcomingOpponent": "string",
    "UpcomingOpponentPositionRank": 0,
    "UpcomingOpponentRank": 0,
    "UpcomingSalary": 0,
    "UpcomingYahooSalary": 0,
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string",
    "YahooName": "string",
    "YahooPlayerID": 0
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

## Bye Weeks

<a id="opIdByeWeeks"></a>

> Code samples

```bash
curl https://example.com/XML/Byes/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Byes/{season}`

Get bye weeks for the teams during a specified NFL season. 

<h3 id="bye-weeks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |

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
    "Season": 0,
    "Team": "string",
    "Week": 0
  }
]
```

<h3 id="bye-weeks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="bye-weeks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Bye](#schemabye)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Season Current

<a id="opIdSeasonCurrent"></a>

> Code samples

```bash
curl https://example.com/XML/CurrentSeason \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CurrentSeason`

Year of the current NFL season. This value changes at the start of the new NFL league year. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

<h3 id="season-current-parameters">Parameters</h3>

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
0
```

<h3 id="season-current-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Week Current

<a id="opIdWeekCurrent"></a>

> Code samples

```bash
curl https://example.com/XML/CurrentWeek \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CurrentWeek`

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

<h3 id="week-current-parameters">Parameters</h3>

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
0
```

<h3 id="week-current-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

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

Depth charts for all NFL teams split by offensive, defensive, and special teams position groupings.

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
    "Defense": [
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
    "Offense": [
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
    "SpecialTeams": [
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

## Game Stats by Season (Deprecated, use Team Game Stats instead)

<a id="opIdGameStatsBySeasonDeprecatedUseTeamGameStatsInstead"></a>

> Code samples

```bash
curl https://example.com/XML/GameStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/GameStats/{season}`

<h3 id="game-stats-by-season-deprecated-use-team-game-stats-instead-parameters">Parameters</h3>

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
    "AwayAssistedTackles": 0,
    "AwayBlockedKickReturnTouchdowns": 0,
    "AwayBlockedKickReturnYards": 0,
    "AwayBlockedKicks": 0,
    "AwayCompletionPercentage": 0,
    "AwayExtraPointKickingAttempts": 0,
    "AwayExtraPointKickingConversions": 0,
    "AwayExtraPointPassingAttempts": 0,
    "AwayExtraPointPassingConversions": 0,
    "AwayExtraPointRushingAttempts": 0,
    "AwayExtraPointRushingConversions": 0,
    "AwayExtraPointsHadBlocked": 0,
    "AwayFieldGoalAttempts": 0,
    "AwayFieldGoalReturnTouchdowns": 0,
    "AwayFieldGoalReturnYards": 0,
    "AwayFieldGoalsHadBlocked": 0,
    "AwayFieldGoalsMade": 0,
    "AwayFirstDowns": 0,
    "AwayFirstDownsByPassing": 0,
    "AwayFirstDownsByPenalty": 0,
    "AwayFirstDownsByRushing": 0,
    "AwayFourthDownAttempts": 0,
    "AwayFourthDownConversions": 0,
    "AwayFourthDownPercentage": 0,
    "AwayFumbleReturnTouchdowns": 0,
    "AwayFumbleReturnYards": 0,
    "AwayFumbles": 0,
    "AwayFumblesForced": 0,
    "AwayFumblesLost": 0,
    "AwayFumblesRecovered": 0,
    "AwayGiveaways": 0,
    "AwayGoalToGoAttempts": 0,
    "AwayGoalToGoConversions": 0,
    "AwayInterceptionReturnTouchdowns": 0,
    "AwayInterceptionReturnYards": 0,
    "AwayInterceptionReturns": 0,
    "AwayKickReturnLong": 0,
    "AwayKickReturnTouchdowns": 0,
    "AwayKickReturnYards": 0,
    "AwayKickReturns": 0,
    "AwayKickoffTouchbacks": 0,
    "AwayKickoffs": 0,
    "AwayKickoffsInEndZone": 0,
    "AwayOffensivePlays": 0,
    "AwayOffensiveYards": 0,
    "AwayOffensiveYardsPerPlay": 0,
    "AwayPasserRating": 0,
    "AwayPassesDefended": 0,
    "AwayPassingAttempts": 0,
    "AwayPassingCompletions": 0,
    "AwayPassingInterceptions": 0,
    "AwayPassingTouchdowns": 0,
    "AwayPassingYards": 0,
    "AwayPassingYardsPerAttempt": 0,
    "AwayPassingYardsPerCompletion": 0,
    "AwayPenalties": 0,
    "AwayPenaltyYards": 0,
    "AwayPuntAverage": 0,
    "AwayPuntNetAverage": 0,
    "AwayPuntNetYards": 0,
    "AwayPuntReturnLong": 0,
    "AwayPuntReturnTouchdowns": 0,
    "AwayPuntReturnYards": 0,
    "AwayPuntReturns": 0,
    "AwayPuntYards": 0,
    "AwayPunts": 0,
    "AwayPuntsHadBlocked": 0,
    "AwayQuarterbackHits": 0,
    "AwayRedZoneAttempts": 0,
    "AwayRedZoneConversions": 0,
    "AwayReturnYards": 0,
    "AwayRushingAttempts": 0,
    "AwayRushingTouchdowns": 0,
    "AwayRushingYards": 0,
    "AwayRushingYardsPerAttempt": 0,
    "AwaySackYards": 0,
    "AwaySacks": 0,
    "AwaySafeties": 0,
    "AwayScore": 0,
    "AwayScoreOvertime": 0,
    "AwayScoreQuarter1": 0,
    "AwayScoreQuarter2": 0,
    "AwayScoreQuarter3": 0,
    "AwayScoreQuarter4": 0,
    "AwaySoloTackles": 0,
    "AwayTacklesForLoss": 0,
    "AwayTakeaways": 0,
    "AwayTeam": "string",
    "AwayThirdDownAttempts": 0,
    "AwayThirdDownConversions": 0,
    "AwayThirdDownPercentage": 0,
    "AwayTimeOfPossession": "string",
    "AwayTimesSacked": 0,
    "AwayTimesSackedYards": 0,
    "AwayTouchdowns": 0,
    "AwayTurnoverDifferential": 0,
    "AwayTwoPointConversionReturns": 0,
    "Date": "string",
    "GameID": 0,
    "GameKey": "string",
    "HomeAssistedTackles": 0,
    "HomeBlockedKickReturnTouchdowns": 0,
    "HomeBlockedKickReturnYards": 0,
    "HomeBlockedKicks": 0,
    "HomeCompletionPercentage": 0,
    "HomeExtraPointKickingAttempts": 0,
    "HomeExtraPointKickingConversions": 0,
    "HomeExtraPointPassingAttempts": 0,
    "HomeExtraPointPassingConversions": 0,
    "HomeExtraPointRushingAttempts": 0,
    "HomeExtraPointRushingConversions": 0,
    "HomeExtraPointsHadBlocked": 0,
    "HomeFieldGoalAttempts": 0,
    "HomeFieldGoalReturnTouchdowns": 0,
    "HomeFieldGoalReturnYards": 0,
    "HomeFieldGoalsHadBlocked": 0,
    "HomeFieldGoalsMade": 0,
    "HomeFirstDowns": 0,
    "HomeFirstDownsByPassing": 0,
    "HomeFirstDownsByPenalty": 0,
    "HomeFirstDownsByRushing": 0,
    "HomeFourthDownAttempts": 0,
    "HomeFourthDownConversions": 0,
    "HomeFourthDownPercentage": 0,
    "HomeFumbleReturnTouchdowns": 0,
    "HomeFumbleReturnYards": 0,
    "HomeFumbles": 0,
    "HomeFumblesForced": 0,
    "HomeFumblesLost": 0,
    "HomeFumblesRecovered": 0,
    "HomeGiveaways": 0,
    "HomeGoalToGoAttempts": 0,
    "HomeGoalToGoConversions": 0,
    "HomeInterceptionReturnTouchdowns": 0,
    "HomeInterceptionReturnYards": 0,
    "HomeInterceptionReturns": 0,
    "HomeKickReturnLong": 0,
    "HomeKickReturnTouchdowns": 0,
    "HomeKickReturnYards": 0,
    "HomeKickReturns": 0,
    "HomeKickoffTouchbacks": 0,
    "HomeKickoffs": 0,
    "HomeKickoffsInEndZone": 0,
    "HomeOffensivePlays": 0,
    "HomeOffensiveYards": 0,
    "HomeOffensiveYardsPerPlay": 0,
    "HomePasserRating": 0,
    "HomePassesDefended": 0,
    "HomePassingAttempts": 0,
    "HomePassingCompletions": 0,
    "HomePassingInterceptions": 0,
    "HomePassingTouchdowns": 0,
    "HomePassingYards": 0,
    "HomePassingYardsPerAttempt": 0,
    "HomePassingYardsPerCompletion": 0,
    "HomePenalties": 0,
    "HomePenaltyYards": 0,
    "HomePuntAverage": 0,
    "HomePuntNetAverage": 0,
    "HomePuntNetYards": 0,
    "HomePuntReturnLong": 0,
    "HomePuntReturnTouchdowns": 0,
    "HomePuntReturnYards": 0,
    "HomePuntReturns": 0,
    "HomePuntYards": 0,
    "HomePunts": 0,
    "HomePuntsHadBlocked": 0,
    "HomeQuarterbackHits": 0,
    "HomeRedZoneAttempts": 0,
    "HomeRedZoneConversions": 0,
    "HomeReturnYards": 0,
    "HomeRushingAttempts": 0,
    "HomeRushingTouchdowns": 0,
    "HomeRushingYards": 0,
    "HomeRushingYardsPerAttempt": 0,
    "HomeSackYards": 0,
    "HomeSacks": 0,
    "HomeSafeties": 0,
    "HomeScore": 0,
    "HomeScoreOvertime": 0,
    "HomeScoreQuarter1": 0,
    "HomeScoreQuarter2": 0,
    "HomeScoreQuarter3": 0,
    "HomeScoreQuarter4": 0,
    "HomeSoloTackles": 0,
    "HomeTacklesForLoss": 0,
    "HomeTakeaways": 0,
    "HomeTeam": "string",
    "HomeThirdDownAttempts": 0,
    "HomeThirdDownConversions": 0,
    "HomeThirdDownPercentage": 0,
    "HomeTimeOfPossession": "string",
    "HomeTimesSacked": 0,
    "HomeTimesSackedYards": 0,
    "HomeTouchdowns": 0,
    "HomeTurnoverDifferential": 0,
    "HomeTwoPointConversionReturns": 0,
    "Humidity": 0,
    "IsGameOver": true,
    "OverUnder": 0,
    "PlayingSurface": "string",
    "PointSpread": 0,
    "ScoreID": 0,
    "Season": 0,
    "SeasonType": 0,
    "Stadium": "string",
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
    "Temperature": 0,
    "TotalScore": 0,
    "Week": 0,
    "WindSpeed": 0
  }
]
```

<h3 id="game-stats-by-season-deprecated-use-team-game-stats-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="game-stats-by-season-deprecated-use-team-game-stats-instead-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Game Stats by Week (Deprecated, use Team Game Stats instead)

<a id="opIdGameStatsByWeekDeprecatedUseTeamGameStatsInstead"></a>

> Code samples

```bash
curl https://example.com/XML/GameStatsByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/GameStatsByWeek/{season}/{week}`

<h3 id="game-stats-by-week-deprecated-use-team-game-stats-instead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
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
    "AwayAssistedTackles": 0,
    "AwayBlockedKickReturnTouchdowns": 0,
    "AwayBlockedKickReturnYards": 0,
    "AwayBlockedKicks": 0,
    "AwayCompletionPercentage": 0,
    "AwayExtraPointKickingAttempts": 0,
    "AwayExtraPointKickingConversions": 0,
    "AwayExtraPointPassingAttempts": 0,
    "AwayExtraPointPassingConversions": 0,
    "AwayExtraPointRushingAttempts": 0,
    "AwayExtraPointRushingConversions": 0,
    "AwayExtraPointsHadBlocked": 0,
    "AwayFieldGoalAttempts": 0,
    "AwayFieldGoalReturnTouchdowns": 0,
    "AwayFieldGoalReturnYards": 0,
    "AwayFieldGoalsHadBlocked": 0,
    "AwayFieldGoalsMade": 0,
    "AwayFirstDowns": 0,
    "AwayFirstDownsByPassing": 0,
    "AwayFirstDownsByPenalty": 0,
    "AwayFirstDownsByRushing": 0,
    "AwayFourthDownAttempts": 0,
    "AwayFourthDownConversions": 0,
    "AwayFourthDownPercentage": 0,
    "AwayFumbleReturnTouchdowns": 0,
    "AwayFumbleReturnYards": 0,
    "AwayFumbles": 0,
    "AwayFumblesForced": 0,
    "AwayFumblesLost": 0,
    "AwayFumblesRecovered": 0,
    "AwayGiveaways": 0,
    "AwayGoalToGoAttempts": 0,
    "AwayGoalToGoConversions": 0,
    "AwayInterceptionReturnTouchdowns": 0,
    "AwayInterceptionReturnYards": 0,
    "AwayInterceptionReturns": 0,
    "AwayKickReturnLong": 0,
    "AwayKickReturnTouchdowns": 0,
    "AwayKickReturnYards": 0,
    "AwayKickReturns": 0,
    "AwayKickoffTouchbacks": 0,
    "AwayKickoffs": 0,
    "AwayKickoffsInEndZone": 0,
    "AwayOffensivePlays": 0,
    "AwayOffensiveYards": 0,
    "AwayOffensiveYardsPerPlay": 0,
    "AwayPasserRating": 0,
    "AwayPassesDefended": 0,
    "AwayPassingAttempts": 0,
    "AwayPassingCompletions": 0,
    "AwayPassingInterceptions": 0,
    "AwayPassingTouchdowns": 0,
    "AwayPassingYards": 0,
    "AwayPassingYardsPerAttempt": 0,
    "AwayPassingYardsPerCompletion": 0,
    "AwayPenalties": 0,
    "AwayPenaltyYards": 0,
    "AwayPuntAverage": 0,
    "AwayPuntNetAverage": 0,
    "AwayPuntNetYards": 0,
    "AwayPuntReturnLong": 0,
    "AwayPuntReturnTouchdowns": 0,
    "AwayPuntReturnYards": 0,
    "AwayPuntReturns": 0,
    "AwayPuntYards": 0,
    "AwayPunts": 0,
    "AwayPuntsHadBlocked": 0,
    "AwayQuarterbackHits": 0,
    "AwayRedZoneAttempts": 0,
    "AwayRedZoneConversions": 0,
    "AwayReturnYards": 0,
    "AwayRushingAttempts": 0,
    "AwayRushingTouchdowns": 0,
    "AwayRushingYards": 0,
    "AwayRushingYardsPerAttempt": 0,
    "AwaySackYards": 0,
    "AwaySacks": 0,
    "AwaySafeties": 0,
    "AwayScore": 0,
    "AwayScoreOvertime": 0,
    "AwayScoreQuarter1": 0,
    "AwayScoreQuarter2": 0,
    "AwayScoreQuarter3": 0,
    "AwayScoreQuarter4": 0,
    "AwaySoloTackles": 0,
    "AwayTacklesForLoss": 0,
    "AwayTakeaways": 0,
    "AwayTeam": "string",
    "AwayThirdDownAttempts": 0,
    "AwayThirdDownConversions": 0,
    "AwayThirdDownPercentage": 0,
    "AwayTimeOfPossession": "string",
    "AwayTimesSacked": 0,
    "AwayTimesSackedYards": 0,
    "AwayTouchdowns": 0,
    "AwayTurnoverDifferential": 0,
    "AwayTwoPointConversionReturns": 0,
    "Date": "string",
    "GameID": 0,
    "GameKey": "string",
    "HomeAssistedTackles": 0,
    "HomeBlockedKickReturnTouchdowns": 0,
    "HomeBlockedKickReturnYards": 0,
    "HomeBlockedKicks": 0,
    "HomeCompletionPercentage": 0,
    "HomeExtraPointKickingAttempts": 0,
    "HomeExtraPointKickingConversions": 0,
    "HomeExtraPointPassingAttempts": 0,
    "HomeExtraPointPassingConversions": 0,
    "HomeExtraPointRushingAttempts": 0,
    "HomeExtraPointRushingConversions": 0,
    "HomeExtraPointsHadBlocked": 0,
    "HomeFieldGoalAttempts": 0,
    "HomeFieldGoalReturnTouchdowns": 0,
    "HomeFieldGoalReturnYards": 0,
    "HomeFieldGoalsHadBlocked": 0,
    "HomeFieldGoalsMade": 0,
    "HomeFirstDowns": 0,
    "HomeFirstDownsByPassing": 0,
    "HomeFirstDownsByPenalty": 0,
    "HomeFirstDownsByRushing": 0,
    "HomeFourthDownAttempts": 0,
    "HomeFourthDownConversions": 0,
    "HomeFourthDownPercentage": 0,
    "HomeFumbleReturnTouchdowns": 0,
    "HomeFumbleReturnYards": 0,
    "HomeFumbles": 0,
    "HomeFumblesForced": 0,
    "HomeFumblesLost": 0,
    "HomeFumblesRecovered": 0,
    "HomeGiveaways": 0,
    "HomeGoalToGoAttempts": 0,
    "HomeGoalToGoConversions": 0,
    "HomeInterceptionReturnTouchdowns": 0,
    "HomeInterceptionReturnYards": 0,
    "HomeInterceptionReturns": 0,
    "HomeKickReturnLong": 0,
    "HomeKickReturnTouchdowns": 0,
    "HomeKickReturnYards": 0,
    "HomeKickReturns": 0,
    "HomeKickoffTouchbacks": 0,
    "HomeKickoffs": 0,
    "HomeKickoffsInEndZone": 0,
    "HomeOffensivePlays": 0,
    "HomeOffensiveYards": 0,
    "HomeOffensiveYardsPerPlay": 0,
    "HomePasserRating": 0,
    "HomePassesDefended": 0,
    "HomePassingAttempts": 0,
    "HomePassingCompletions": 0,
    "HomePassingInterceptions": 0,
    "HomePassingTouchdowns": 0,
    "HomePassingYards": 0,
    "HomePassingYardsPerAttempt": 0,
    "HomePassingYardsPerCompletion": 0,
    "HomePenalties": 0,
    "HomePenaltyYards": 0,
    "HomePuntAverage": 0,
    "HomePuntNetAverage": 0,
    "HomePuntNetYards": 0,
    "HomePuntReturnLong": 0,
    "HomePuntReturnTouchdowns": 0,
    "HomePuntReturnYards": 0,
    "HomePuntReturns": 0,
    "HomePuntYards": 0,
    "HomePunts": 0,
    "HomePuntsHadBlocked": 0,
    "HomeQuarterbackHits": 0,
    "HomeRedZoneAttempts": 0,
    "HomeRedZoneConversions": 0,
    "HomeReturnYards": 0,
    "HomeRushingAttempts": 0,
    "HomeRushingTouchdowns": 0,
    "HomeRushingYards": 0,
    "HomeRushingYardsPerAttempt": 0,
    "HomeSackYards": 0,
    "HomeSacks": 0,
    "HomeSafeties": 0,
    "HomeScore": 0,
    "HomeScoreOvertime": 0,
    "HomeScoreQuarter1": 0,
    "HomeScoreQuarter2": 0,
    "HomeScoreQuarter3": 0,
    "HomeScoreQuarter4": 0,
    "HomeSoloTackles": 0,
    "HomeTacklesForLoss": 0,
    "HomeTakeaways": 0,
    "HomeTeam": "string",
    "HomeThirdDownAttempts": 0,
    "HomeThirdDownConversions": 0,
    "HomeThirdDownPercentage": 0,
    "HomeTimeOfPossession": "string",
    "HomeTimesSacked": 0,
    "HomeTimesSackedYards": 0,
    "HomeTouchdowns": 0,
    "HomeTurnoverDifferential": 0,
    "HomeTwoPointConversionReturns": 0,
    "Humidity": 0,
    "IsGameOver": true,
    "OverUnder": 0,
    "PlayingSurface": "string",
    "PointSpread": 0,
    "ScoreID": 0,
    "Season": 0,
    "SeasonType": 0,
    "Stadium": "string",
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
    "Temperature": 0,
    "TotalScore": 0,
    "Week": 0,
    "WindSpeed": 0
  }
]
```

<h3 id="game-stats-by-week-deprecated-use-team-game-stats-instead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="game-stats-by-week-deprecated-use-team-game-stats-instead-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Season Last Completed

<a id="opIdSeasonLastCompleted"></a>

> Code samples

```bash
curl https://example.com/XML/LastCompletedSeason \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/LastCompletedSeason`

Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

<h3 id="season-last-completed-parameters">Parameters</h3>

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
0
```

<h3 id="season-last-completed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Week Last Completed

<a id="opIdWeekLastCompleted"></a>

> Code samples

```bash
curl https://example.com/XML/LastCompletedWeek \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/LastCompletedWeek`

Number of the last completed week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

<h3 id="week-last-completed-parameters">Parameters</h3>

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
0
```

<h3 id="week-last-completed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

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
|format|path|string|true|<br>          Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.<br>        |
|playerid|path|string|true|Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.|

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

## News by Team

<a id="opIdNewsByTeam"></a>

> Code samples

```bash
curl https://example.com/XML/NewsByTeam/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/NewsByTeam/{team}`

<h3 id="news-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
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

<h3 id="news-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="news-by-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[News](#schemanews)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## X Ping

<a id="opIdXPing"></a>

> Code samples

```bash
curl https://example.com/XML/Ping/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Ping/{seconds}`

Ping NFL API

<h3 id="x-ping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|seconds|path|string|true|Number of seconds to sleep before responding|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

```json
null
```

<h3 id="x-ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

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
|playerid|path|string|true|Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|

> Example responses

> 200 Response

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
  "LatestNews": [
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
  ],
  "Name": "string",
  "Number": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "PlayerSeason": {
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
  },
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

<h3 id="player-details-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PlayerDetail](#schemaplayerdetail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Player Details by Available

<a id="opIdPlayerDetailsByAvailable"></a>

> Code samples

```bash
curl https://example.com/XML/Players \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Players`

<h3 id="player-details-by-available-parameters">Parameters</h3>

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

<h3 id="player-details-by-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-available-responseschema">Response Schema</h3>

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
    "LatestNews": [
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
    ],
    "Name": "string",
    "Number": 0,
    "PhotoUrl": "string",
    "PlayerID": 0,
    "PlayerSeason": {
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
    },
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

<h3 id="player-details-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayerDetail](#schemaplayerdetail)]|false|none|none|

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

Returns full list of NFL Referees

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

## Player Details by Rookie Draft Year

<a id="opIdPlayerDetailsByRookieDraftYear"></a>

> Code samples

```bash
curl https://example.com/XML/Rookies/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Rookies/{season}`

<h3 id="player-details-by-rookie-draft-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc.|

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

<h3 id="player-details-by-rookie-draft-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="player-details-by-rookie-draft-year-responseschema">Response Schema</h3>

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
curl https://example.com/XML/Schedules/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Schedules/{season}`

Game schedule for a specified season.

<h3 id="schedule-parameters">Parameters</h3>

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
|*anonymous*|[[Schedule](#schemaschedule)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Scores by Season

<a id="opIdScoresBySeason"></a>

> Code samples

```bash
curl https://example.com/XML/Scores/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Scores/{season}`

Game scores for a specified season.

<h3 id="scores-by-season-parameters">Parameters</h3>

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
]
```

<h3 id="scores-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="scores-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Score](#schemascore)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Scores by Date

<a id="opIdScoresByDate"></a>

> Code samples

```bash
curl https://example.com/XML/ScoresByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/ScoresByDate/{date}`

Get game scores for a specified week of a season.

<h3 id="scores-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the games.<br>Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>.|

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
]
```

<h3 id="scores-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="scores-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Score](#schemascore)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Scores by Week

<a id="opIdScoresByWeek"></a>

> Code samples

```bash
curl https://example.com/XML/ScoresByWeek/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/ScoresByWeek/{season}/{week}`

Get game scores for a specified week of a season.

<h3 id="scores-by-week-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
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
]
```

<h3 id="scores-by-week-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="scores-by-week-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Score](#schemascore)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Scores by Week Simulation

<a id="opIdScoresByWeekSimulation"></a>

> Code samples

```bash
curl https://example.com/XML/SimulatedScores/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/SimulatedScores/{numberofplays}`

Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.

<h3 id="scores-by-week-simulation-parameters">Parameters</h3>

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
]
```

<h3 id="scores-by-week-simulation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="scores-by-week-simulation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Score](#schemascore)]|false|none|none|

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

This method returns all stadiums.

<h3 id="stadiums-parameters">Parameters</h3>

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
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |

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
    "Conference": "string",
    "ConferenceLosses": 0,
    "ConferenceRank": 0,
    "ConferenceTies": 0,
    "ConferenceWins": 0,
    "Division": "string",
    "DivisionLosses": 0,
    "DivisionRank": 0,
    "DivisionTies": 0,
    "DivisionWins": 0,
    "GlobalTeamID": 0,
    "Losses": 0,
    "Name": "string",
    "NetPoints": 0,
    "Percentage": 0,
    "PointsAgainst": 0,
    "PointsFor": 0,
    "Season": 0,
    "SeasonType": 0,
    "Team": "string",
    "TeamID": 0,
    "Ties": 0,
    "Touchdowns": 0,
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

## Team Game Stats

<a id="opIdTeamGameStats"></a>

> Code samples

```bash
curl https://example.com/XML/TeamGameStats/string/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamGameStats/{season}/{week}`

<h3 id="team-game-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |
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
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "CompletionPercentage": 0,
    "Date": "string",
    "DateTime": "string",
    "Day": "string",
    "DayOfWeek": "string",
    "ExtraPointKickingAttempts": 0,
    "ExtraPointKickingConversions": 0,
    "ExtraPointPassingAttempts": 0,
    "ExtraPointPassingConversions": 0,
    "ExtraPointPercentage": 0,
    "ExtraPointRushingAttempts": 0,
    "ExtraPointRushingConversions": 0,
    "ExtraPointsHadBlocked": 0,
    "FieldGoalAttempts": 0,
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsMade": 0,
    "FirstDowns": 0,
    "FirstDownsByPassing": 0,
    "FirstDownsByPenalty": 0,
    "FirstDownsByRushing": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FourthDownPercentage": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesRecovered": 0,
    "GameKey": "string",
    "Giveaways": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "GoalToGoAttempts": 0,
    "GoalToGoConversions": 0,
    "GoalToGoPercentage": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "InterceptionReturns": 0,
    "IsGameOver": true,
    "KickReturnAverage": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYardDifferential": 0,
    "KickReturnYards": 0,
    "KickReturns": 0,
    "KickoffTouchbacks": 0,
    "Kickoffs": 0,
    "KickoffsInEndZone": 0,
    "OffensivePlays": 0,
    "OffensiveYards": 0,
    "OffensiveYardsPerPlay": 0,
    "Opponent": "string",
    "OpponentAssistedTackles": 0,
    "OpponentBlockedKickReturnTouchdowns": 0,
    "OpponentBlockedKickReturnYards": 0,
    "OpponentBlockedKicks": 0,
    "OpponentCompletionPercentage": 0,
    "OpponentExtraPointKickingAttempts": 0,
    "OpponentExtraPointKickingConversions": 0,
    "OpponentExtraPointPassingAttempts": 0,
    "OpponentExtraPointPassingConversions": 0,
    "OpponentExtraPointPercentage": 0,
    "OpponentExtraPointRushingAttempts": 0,
    "OpponentExtraPointRushingConversions": 0,
    "OpponentExtraPointsHadBlocked": 0,
    "OpponentFieldGoalAttempts": 0,
    "OpponentFieldGoalPercentage": 0,
    "OpponentFieldGoalReturnTouchdowns": 0,
    "OpponentFieldGoalReturnYards": 0,
    "OpponentFieldGoalsHadBlocked": 0,
    "OpponentFieldGoalsMade": 0,
    "OpponentFirstDowns": 0,
    "OpponentFirstDownsByPassing": 0,
    "OpponentFirstDownsByPenalty": 0,
    "OpponentFirstDownsByRushing": 0,
    "OpponentFourthDownAttempts": 0,
    "OpponentFourthDownConversions": 0,
    "OpponentFourthDownPercentage": 0,
    "OpponentFumbleReturnTouchdowns": 0,
    "OpponentFumbleReturnYards": 0,
    "OpponentFumbles": 0,
    "OpponentFumblesForced": 0,
    "OpponentFumblesLost": 0,
    "OpponentFumblesRecovered": 0,
    "OpponentGiveaways": 0,
    "OpponentGoalToGoAttempts": 0,
    "OpponentGoalToGoConversions": 0,
    "OpponentGoalToGoPercentage": 0,
    "OpponentID": 0,
    "OpponentInterceptionReturnTouchdowns": 0,
    "OpponentInterceptionReturnYards": 0,
    "OpponentInterceptionReturns": 0,
    "OpponentKickReturnAverage": 0,
    "OpponentKickReturnLong": 0,
    "OpponentKickReturnTouchdowns": 0,
    "OpponentKickReturnYards": 0,
    "OpponentKickReturns": 0,
    "OpponentKickoffTouchbacks": 0,
    "OpponentKickoffs": 0,
    "OpponentKickoffsInEndZone": 0,
    "OpponentOffensivePlays": 0,
    "OpponentOffensiveYards": 0,
    "OpponentOffensiveYardsPerPlay": 0,
    "OpponentPasserRating": 0,
    "OpponentPassesDefended": 0,
    "OpponentPassingAttempts": 0,
    "OpponentPassingCompletions": 0,
    "OpponentPassingDropbacks": 0,
    "OpponentPassingInterceptionPercentage": 0,
    "OpponentPassingInterceptions": 0,
    "OpponentPassingTouchdowns": 0,
    "OpponentPassingYards": 0,
    "OpponentPassingYardsPerAttempt": 0,
    "OpponentPassingYardsPerCompletion": 0,
    "OpponentPenalties": 0,
    "OpponentPenaltyYards": 0,
    "OpponentPuntAverage": 0,
    "OpponentPuntNetAverage": 0,
    "OpponentPuntNetYards": 0,
    "OpponentPuntReturnAverage": 0,
    "OpponentPuntReturnLong": 0,
    "OpponentPuntReturnTouchdowns": 0,
    "OpponentPuntReturnYards": 0,
    "OpponentPuntReturns": 0,
    "OpponentPuntYards": 0,
    "OpponentPunts": 0,
    "OpponentPuntsHadBlocked": 0,
    "OpponentQuarterbackHits": 0,
    "OpponentQuarterbackHitsDifferential": 0,
    "OpponentQuarterbackHitsPercentage": 0,
    "OpponentQuarterbackSacksDifferential": 0,
    "OpponentRedZoneAttempts": 0,
    "OpponentRedZoneConversions": 0,
    "OpponentRedZonePercentage": 0,
    "OpponentReturnYards": 0,
    "OpponentRushingAttempts": 0,
    "OpponentRushingTouchdowns": 0,
    "OpponentRushingYards": 0,
    "OpponentRushingYardsPerAttempt": 0,
    "OpponentSackYards": 0,
    "OpponentSacks": 0,
    "OpponentSafeties": 0,
    "OpponentScore": 0,
    "OpponentScoreOvertime": 0,
    "OpponentScoreQuarter1": 0,
    "OpponentScoreQuarter2": 0,
    "OpponentScoreQuarter3": 0,
    "OpponentScoreQuarter4": 0,
    "OpponentSoloTackles": 0,
    "OpponentTacklesForLoss": 0,
    "OpponentTacklesForLossDifferential": 0,
    "OpponentTacklesForLossPercentage": 0,
    "OpponentTakeaways": 0,
    "OpponentThirdDownAttempts": 0,
    "OpponentThirdDownConversions": 0,
    "OpponentThirdDownPercentage": 0,
    "OpponentTimeOfPossession": "string",
    "OpponentTimeOfPossessionMinutes": 0,
    "OpponentTimeOfPossessionSeconds": 0,
    "OpponentTimesSacked": 0,
    "OpponentTimesSackedPercentage": 0,
    "OpponentTimesSackedYards": 0,
    "OpponentTouchdowns": 0,
    "OpponentTurnoverDifferential": 0,
    "OpponentTwoPointConversionReturns": 0,
    "OverUnder": 0,
    "PasserRating": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletions": 0,
    "PassingDropbacks": 0,
    "PassingInterceptionPercentage": 0,
    "PassingInterceptions": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Penalties": 0,
    "PenaltyYardDifferential": 0,
    "PenaltyYards": 0,
    "PlayingSurface": "string",
    "PointDifferential": 0,
    "PointSpread": 0,
    "PuntAverage": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnAverage": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYardDifferential": 0,
    "PuntReturnYards": 0,
    "PuntReturns": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "QuarterbackHitsDifferential": 0,
    "QuarterbackHitsPercentage": 0,
    "QuarterbackSacksDifferential": 0,
    "RedZoneAttempts": 0,
    "RedZoneConversions": 0,
    "RedZonePercentage": 0,
    "ReturnYards": 0,
    "RushingAttempts": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "Score": 0,
    "ScoreID": 0,
    "ScoreOvertime": 0,
    "ScoreQuarter1": 0,
    "ScoreQuarter2": 0,
    "ScoreQuarter3": 0,
    "ScoreQuarter4": 0,
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "Stadium": "string",
    "TacklesForLoss": 0,
    "TacklesForLossDifferential": 0,
    "TacklesForLossPercentage": 0,
    "Takeaways": 0,
    "Team": "string",
    "TeamGameID": 0,
    "TeamID": 0,
    "TeamName": "string",
    "Temperature": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "ThirdDownPercentage": 0,
    "TimeOfPossession": "string",
    "TimeOfPossessionMinutes": 0,
    "TimeOfPossessionSeconds": 0,
    "TimesSacked": 0,
    "TimesSackedPercentage": 0,
    "TimesSackedYards": 0,
    "TotalScore": 0,
    "Touchdowns": 0,
    "TurnoverDifferential": 0,
    "TwoPointConversionReturns": 0,
    "Week": 0,
    "WindSpeed": 0
  }
]
```

<h3 id="team-game-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="team-game-stats-responseschema">Response Schema</h3>

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
|season|path|string|true|Season to get games from. Example <code>2019POST</code>, <code>2020</code>        |
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
    "AssistedTackles": 0,
    "BlockedKickReturnTouchdowns": 0,
    "BlockedKickReturnYards": 0,
    "BlockedKicks": 0,
    "CompletionPercentage": 0,
    "Date": "string",
    "DateTime": "string",
    "Day": "string",
    "DayOfWeek": "string",
    "ExtraPointKickingAttempts": 0,
    "ExtraPointKickingConversions": 0,
    "ExtraPointPassingAttempts": 0,
    "ExtraPointPassingConversions": 0,
    "ExtraPointPercentage": 0,
    "ExtraPointRushingAttempts": 0,
    "ExtraPointRushingConversions": 0,
    "ExtraPointsHadBlocked": 0,
    "FieldGoalAttempts": 0,
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsMade": 0,
    "FirstDowns": 0,
    "FirstDownsByPassing": 0,
    "FirstDownsByPenalty": 0,
    "FirstDownsByRushing": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FourthDownPercentage": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesRecovered": 0,
    "GameKey": "string",
    "Giveaways": 0,
    "GlobalGameID": 0,
    "GlobalOpponentID": 0,
    "GlobalTeamID": 0,
    "GoalToGoAttempts": 0,
    "GoalToGoConversions": 0,
    "GoalToGoPercentage": 0,
    "HomeOrAway": "string",
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "InterceptionReturns": 0,
    "IsGameOver": true,
    "KickReturnAverage": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYardDifferential": 0,
    "KickReturnYards": 0,
    "KickReturns": 0,
    "KickoffTouchbacks": 0,
    "Kickoffs": 0,
    "KickoffsInEndZone": 0,
    "OffensivePlays": 0,
    "OffensiveYards": 0,
    "OffensiveYardsPerPlay": 0,
    "Opponent": "string",
    "OpponentAssistedTackles": 0,
    "OpponentBlockedKickReturnTouchdowns": 0,
    "OpponentBlockedKickReturnYards": 0,
    "OpponentBlockedKicks": 0,
    "OpponentCompletionPercentage": 0,
    "OpponentExtraPointKickingAttempts": 0,
    "OpponentExtraPointKickingConversions": 0,
    "OpponentExtraPointPassingAttempts": 0,
    "OpponentExtraPointPassingConversions": 0,
    "OpponentExtraPointPercentage": 0,
    "OpponentExtraPointRushingAttempts": 0,
    "OpponentExtraPointRushingConversions": 0,
    "OpponentExtraPointsHadBlocked": 0,
    "OpponentFieldGoalAttempts": 0,
    "OpponentFieldGoalPercentage": 0,
    "OpponentFieldGoalReturnTouchdowns": 0,
    "OpponentFieldGoalReturnYards": 0,
    "OpponentFieldGoalsHadBlocked": 0,
    "OpponentFieldGoalsMade": 0,
    "OpponentFirstDowns": 0,
    "OpponentFirstDownsByPassing": 0,
    "OpponentFirstDownsByPenalty": 0,
    "OpponentFirstDownsByRushing": 0,
    "OpponentFourthDownAttempts": 0,
    "OpponentFourthDownConversions": 0,
    "OpponentFourthDownPercentage": 0,
    "OpponentFumbleReturnTouchdowns": 0,
    "OpponentFumbleReturnYards": 0,
    "OpponentFumbles": 0,
    "OpponentFumblesForced": 0,
    "OpponentFumblesLost": 0,
    "OpponentFumblesRecovered": 0,
    "OpponentGiveaways": 0,
    "OpponentGoalToGoAttempts": 0,
    "OpponentGoalToGoConversions": 0,
    "OpponentGoalToGoPercentage": 0,
    "OpponentID": 0,
    "OpponentInterceptionReturnTouchdowns": 0,
    "OpponentInterceptionReturnYards": 0,
    "OpponentInterceptionReturns": 0,
    "OpponentKickReturnAverage": 0,
    "OpponentKickReturnLong": 0,
    "OpponentKickReturnTouchdowns": 0,
    "OpponentKickReturnYards": 0,
    "OpponentKickReturns": 0,
    "OpponentKickoffTouchbacks": 0,
    "OpponentKickoffs": 0,
    "OpponentKickoffsInEndZone": 0,
    "OpponentOffensivePlays": 0,
    "OpponentOffensiveYards": 0,
    "OpponentOffensiveYardsPerPlay": 0,
    "OpponentPasserRating": 0,
    "OpponentPassesDefended": 0,
    "OpponentPassingAttempts": 0,
    "OpponentPassingCompletions": 0,
    "OpponentPassingDropbacks": 0,
    "OpponentPassingInterceptionPercentage": 0,
    "OpponentPassingInterceptions": 0,
    "OpponentPassingTouchdowns": 0,
    "OpponentPassingYards": 0,
    "OpponentPassingYardsPerAttempt": 0,
    "OpponentPassingYardsPerCompletion": 0,
    "OpponentPenalties": 0,
    "OpponentPenaltyYards": 0,
    "OpponentPuntAverage": 0,
    "OpponentPuntNetAverage": 0,
    "OpponentPuntNetYards": 0,
    "OpponentPuntReturnAverage": 0,
    "OpponentPuntReturnLong": 0,
    "OpponentPuntReturnTouchdowns": 0,
    "OpponentPuntReturnYards": 0,
    "OpponentPuntReturns": 0,
    "OpponentPuntYards": 0,
    "OpponentPunts": 0,
    "OpponentPuntsHadBlocked": 0,
    "OpponentQuarterbackHits": 0,
    "OpponentQuarterbackHitsDifferential": 0,
    "OpponentQuarterbackHitsPercentage": 0,
    "OpponentQuarterbackSacksDifferential": 0,
    "OpponentRedZoneAttempts": 0,
    "OpponentRedZoneConversions": 0,
    "OpponentRedZonePercentage": 0,
    "OpponentReturnYards": 0,
    "OpponentRushingAttempts": 0,
    "OpponentRushingTouchdowns": 0,
    "OpponentRushingYards": 0,
    "OpponentRushingYardsPerAttempt": 0,
    "OpponentSackYards": 0,
    "OpponentSacks": 0,
    "OpponentSafeties": 0,
    "OpponentScore": 0,
    "OpponentScoreOvertime": 0,
    "OpponentScoreQuarter1": 0,
    "OpponentScoreQuarter2": 0,
    "OpponentScoreQuarter3": 0,
    "OpponentScoreQuarter4": 0,
    "OpponentSoloTackles": 0,
    "OpponentTacklesForLoss": 0,
    "OpponentTacklesForLossDifferential": 0,
    "OpponentTacklesForLossPercentage": 0,
    "OpponentTakeaways": 0,
    "OpponentThirdDownAttempts": 0,
    "OpponentThirdDownConversions": 0,
    "OpponentThirdDownPercentage": 0,
    "OpponentTimeOfPossession": "string",
    "OpponentTimeOfPossessionMinutes": 0,
    "OpponentTimeOfPossessionSeconds": 0,
    "OpponentTimesSacked": 0,
    "OpponentTimesSackedPercentage": 0,
    "OpponentTimesSackedYards": 0,
    "OpponentTouchdowns": 0,
    "OpponentTurnoverDifferential": 0,
    "OpponentTwoPointConversionReturns": 0,
    "OverUnder": 0,
    "PasserRating": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletions": 0,
    "PassingDropbacks": 0,
    "PassingInterceptionPercentage": 0,
    "PassingInterceptions": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Penalties": 0,
    "PenaltyYardDifferential": 0,
    "PenaltyYards": 0,
    "PlayingSurface": "string",
    "PointDifferential": 0,
    "PointSpread": 0,
    "PuntAverage": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnAverage": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYardDifferential": 0,
    "PuntReturnYards": 0,
    "PuntReturns": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "QuarterbackHitsDifferential": 0,
    "QuarterbackHitsPercentage": 0,
    "QuarterbackSacksDifferential": 0,
    "RedZoneAttempts": 0,
    "RedZoneConversions": 0,
    "RedZonePercentage": 0,
    "ReturnYards": 0,
    "RushingAttempts": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "Score": 0,
    "ScoreID": 0,
    "ScoreOvertime": 0,
    "ScoreQuarter1": 0,
    "ScoreQuarter2": 0,
    "ScoreQuarter3": 0,
    "ScoreQuarter4": 0,
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "Stadium": "string",
    "TacklesForLoss": 0,
    "TacklesForLossDifferential": 0,
    "TacklesForLossPercentage": 0,
    "Takeaways": 0,
    "Team": "string",
    "TeamGameID": 0,
    "TeamID": 0,
    "TeamName": "string",
    "Temperature": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "ThirdDownPercentage": 0,
    "TimeOfPossession": "string",
    "TimeOfPossessionMinutes": 0,
    "TimeOfPossessionSeconds": 0,
    "TimesSacked": 0,
    "TimesSackedPercentage": 0,
    "TimesSackedYards": 0,
    "TotalScore": 0,
    "Touchdowns": 0,
    "TurnoverDifferential": 0,
    "TwoPointConversionReturns": 0,
    "Week": 0,
    "WindSpeed": 0
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
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |

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
    "CompletionPercentage": 0,
    "ExtraPointKickingAttempts": 0,
    "ExtraPointKickingConversions": 0,
    "ExtraPointPassingAttempts": 0,
    "ExtraPointPassingConversions": 0,
    "ExtraPointPercentage": 0,
    "ExtraPointRushingAttempts": 0,
    "ExtraPointRushingConversions": 0,
    "ExtraPointsHadBlocked": 0,
    "FieldGoalAttempts": 0,
    "FieldGoalPercentage": 0,
    "FieldGoalReturnTouchdowns": 0,
    "FieldGoalReturnYards": 0,
    "FieldGoalsHadBlocked": 0,
    "FieldGoalsMade": 0,
    "FirstDowns": 0,
    "FirstDownsByPassing": 0,
    "FirstDownsByPenalty": 0,
    "FirstDownsByRushing": 0,
    "FourthDownAttempts": 0,
    "FourthDownConversions": 0,
    "FourthDownPercentage": 0,
    "FumbleReturnTouchdowns": 0,
    "FumbleReturnYards": 0,
    "Fumbles": 0,
    "FumblesForced": 0,
    "FumblesLost": 0,
    "FumblesRecovered": 0,
    "Games": 0,
    "Giveaways": 0,
    "GlobalTeamID": 0,
    "GoalToGoAttempts": 0,
    "GoalToGoConversions": 0,
    "GoalToGoPercentage": 0,
    "Humidity": 0,
    "InterceptionReturnTouchdowns": 0,
    "InterceptionReturnYards": 0,
    "InterceptionReturns": 0,
    "KickReturnAverage": 0,
    "KickReturnLong": 0,
    "KickReturnTouchdowns": 0,
    "KickReturnYardDifferential": 0,
    "KickReturnYards": 0,
    "KickReturns": 0,
    "KickoffTouchbacks": 0,
    "Kickoffs": 0,
    "KickoffsInEndZone": 0,
    "OffensivePlays": 0,
    "OffensiveYards": 0,
    "OffensiveYardsPerPlay": 0,
    "OpponentAssistedTackles": 0,
    "OpponentBlockedKickReturnTouchdowns": 0,
    "OpponentBlockedKickReturnYards": 0,
    "OpponentBlockedKicks": 0,
    "OpponentCompletionPercentage": 0,
    "OpponentExtraPointKickingAttempts": 0,
    "OpponentExtraPointKickingConversions": 0,
    "OpponentExtraPointPassingAttempts": 0,
    "OpponentExtraPointPassingConversions": 0,
    "OpponentExtraPointPercentage": 0,
    "OpponentExtraPointRushingAttempts": 0,
    "OpponentExtraPointRushingConversions": 0,
    "OpponentExtraPointsHadBlocked": 0,
    "OpponentFieldGoalAttempts": 0,
    "OpponentFieldGoalPercentage": 0,
    "OpponentFieldGoalReturnTouchdowns": 0,
    "OpponentFieldGoalReturnYards": 0,
    "OpponentFieldGoalsHadBlocked": 0,
    "OpponentFieldGoalsMade": 0,
    "OpponentFirstDowns": 0,
    "OpponentFirstDownsByPassing": 0,
    "OpponentFirstDownsByPenalty": 0,
    "OpponentFirstDownsByRushing": 0,
    "OpponentFourthDownAttempts": 0,
    "OpponentFourthDownConversions": 0,
    "OpponentFourthDownPercentage": 0,
    "OpponentFumbleReturnTouchdowns": 0,
    "OpponentFumbleReturnYards": 0,
    "OpponentFumbles": 0,
    "OpponentFumblesForced": 0,
    "OpponentFumblesLost": 0,
    "OpponentFumblesRecovered": 0,
    "OpponentGiveaways": 0,
    "OpponentGoalToGoAttempts": 0,
    "OpponentGoalToGoConversions": 0,
    "OpponentGoalToGoPercentage": 0,
    "OpponentInterceptionReturnTouchdowns": 0,
    "OpponentInterceptionReturnYards": 0,
    "OpponentInterceptionReturns": 0,
    "OpponentKickReturnAverage": 0,
    "OpponentKickReturnLong": 0,
    "OpponentKickReturnTouchdowns": 0,
    "OpponentKickReturnYards": 0,
    "OpponentKickReturns": 0,
    "OpponentKickoffTouchbacks": 0,
    "OpponentKickoffs": 0,
    "OpponentKickoffsInEndZone": 0,
    "OpponentOffensivePlays": 0,
    "OpponentOffensiveYards": 0,
    "OpponentOffensiveYardsPerPlay": 0,
    "OpponentPasserRating": 0,
    "OpponentPassesDefended": 0,
    "OpponentPassingAttempts": 0,
    "OpponentPassingCompletions": 0,
    "OpponentPassingDropbacks": 0,
    "OpponentPassingInterceptionPercentage": 0,
    "OpponentPassingInterceptions": 0,
    "OpponentPassingTouchdowns": 0,
    "OpponentPassingYards": 0,
    "OpponentPassingYardsPerAttempt": 0,
    "OpponentPassingYardsPerCompletion": 0,
    "OpponentPenalties": 0,
    "OpponentPenaltyYards": 0,
    "OpponentPuntAverage": 0,
    "OpponentPuntNetAverage": 0,
    "OpponentPuntNetYards": 0,
    "OpponentPuntReturnAverage": 0,
    "OpponentPuntReturnLong": 0,
    "OpponentPuntReturnTouchdowns": 0,
    "OpponentPuntReturnYards": 0,
    "OpponentPuntReturns": 0,
    "OpponentPuntYards": 0,
    "OpponentPunts": 0,
    "OpponentPuntsHadBlocked": 0,
    "OpponentQuarterbackHits": 0,
    "OpponentQuarterbackHitsDifferential": 0,
    "OpponentQuarterbackHitsPercentage": 0,
    "OpponentQuarterbackSacksDifferential": 0,
    "OpponentRedZoneAttempts": 0,
    "OpponentRedZoneConversions": 0,
    "OpponentRedZonePercentage": 0,
    "OpponentReturnYards": 0,
    "OpponentRushingAttempts": 0,
    "OpponentRushingTouchdowns": 0,
    "OpponentRushingYards": 0,
    "OpponentRushingYardsPerAttempt": 0,
    "OpponentSackYards": 0,
    "OpponentSacks": 0,
    "OpponentSafeties": 0,
    "OpponentScore": 0,
    "OpponentScoreOvertime": 0,
    "OpponentScoreQuarter1": 0,
    "OpponentScoreQuarter2": 0,
    "OpponentScoreQuarter3": 0,
    "OpponentScoreQuarter4": 0,
    "OpponentSoloTackles": 0,
    "OpponentTacklesForLoss": 0,
    "OpponentTacklesForLossDifferential": 0,
    "OpponentTacklesForLossPercentage": 0,
    "OpponentTakeaways": 0,
    "OpponentThirdDownAttempts": 0,
    "OpponentThirdDownConversions": 0,
    "OpponentThirdDownPercentage": 0,
    "OpponentTimeOfPossession": "string",
    "OpponentTimesSacked": 0,
    "OpponentTimesSackedPercentage": 0,
    "OpponentTimesSackedYards": 0,
    "OpponentTouchdowns": 0,
    "OpponentTurnoverDifferential": 0,
    "OpponentTwoPointConversionReturns": 0,
    "OverUnder": 0,
    "PasserRating": 0,
    "PassesDefended": 0,
    "PassingAttempts": 0,
    "PassingCompletions": 0,
    "PassingDropbacks": 0,
    "PassingInterceptionPercentage": 0,
    "PassingInterceptions": 0,
    "PassingTouchdowns": 0,
    "PassingYards": 0,
    "PassingYardsPerAttempt": 0,
    "PassingYardsPerCompletion": 0,
    "Penalties": 0,
    "PenaltyYardDifferential": 0,
    "PenaltyYards": 0,
    "PointDifferential": 0,
    "PointSpread": 0,
    "PuntAverage": 0,
    "PuntNetAverage": 0,
    "PuntNetYards": 0,
    "PuntReturnAverage": 0,
    "PuntReturnLong": 0,
    "PuntReturnTouchdowns": 0,
    "PuntReturnYardDifferential": 0,
    "PuntReturnYards": 0,
    "PuntReturns": 0,
    "PuntYards": 0,
    "Punts": 0,
    "PuntsHadBlocked": 0,
    "QuarterbackHits": 0,
    "QuarterbackHitsDifferential": 0,
    "QuarterbackHitsPercentage": 0,
    "QuarterbackSacksDifferential": 0,
    "RedZoneAttempts": 0,
    "RedZoneConversions": 0,
    "RedZonePercentage": 0,
    "ReturnYards": 0,
    "RushingAttempts": 0,
    "RushingTouchdowns": 0,
    "RushingYards": 0,
    "RushingYardsPerAttempt": 0,
    "SackYards": 0,
    "Sacks": 0,
    "Safeties": 0,
    "Score": 0,
    "ScoreOvertime": 0,
    "ScoreQuarter1": 0,
    "ScoreQuarter2": 0,
    "ScoreQuarter3": 0,
    "ScoreQuarter4": 0,
    "Season": 0,
    "SeasonType": 0,
    "SoloTackles": 0,
    "TacklesForLoss": 0,
    "TacklesForLossDifferential": 0,
    "TacklesForLossPercentage": 0,
    "Takeaways": 0,
    "Team": "string",
    "TeamID": 0,
    "TeamName": "string",
    "TeamSeasonID": 0,
    "TeamStatID": 0,
    "Temperature": 0,
    "ThirdDownAttempts": 0,
    "ThirdDownConversions": 0,
    "ThirdDownPercentage": 0,
    "TimeOfPossession": "string",
    "TimesSacked": 0,
    "TimesSackedPercentage": 0,
    "TimesSackedYards": 0,
    "TotalScore": 0,
    "Touchdowns": 0,
    "TurnoverDifferential": 0,
    "TwoPointConversionReturns": 0,
    "WindSpeed": 0
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
curl https://example.com/XML/Teams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Teams`

Gets all active teams.

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
    "AverageDraftPosition": 0,
    "AverageDraftPosition2QB": 0,
    "AverageDraftPositionDynasty": 0,
    "AverageDraftPositionPPR": 0,
    "ByeWeek": 0,
    "City": "string",
    "Conference": "string",
    "DefensiveCoordinator": "string",
    "DefensiveScheme": "string",
    "Division": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
    "FullName": "string",
    "GlobalTeamID": 0,
    "HeadCoach": "string",
    "Key": "string",
    "Name": "string",
    "OffensiveCoordinator": "string",
    "OffensiveScheme": "string",
    "PlayerID": 0,
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "SpecialTeamsCoach": "string",
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
    "TeamID": 0,
    "TertiaryColor": "string",
    "UpcomingDraftKingsSalary": 0,
    "UpcomingFanDuelSalary": 0,
    "UpcomingOpponent": "string",
    "UpcomingOpponentPositionRank": 0,
    "UpcomingOpponentRank": 0,
    "UpcomingSalary": 0,
    "UpcomingYahooSalary": 0,
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string",
    "YahooName": "string",
    "YahooPlayerID": 0
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

## Teams by Season

<a id="opIdTeamsBySeason"></a>

> Code samples

```bash
curl https://example.com/XML/Teams/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Teams/{season}`

List of teams playing in a specified season.

<h3 id="teams-by-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|season|path|string|true|<br>          Year of the season and the season type. If no season type is provided, then the default is regular season.<br>          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.<br>        |

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
    "AverageDraftPosition": 0,
    "AverageDraftPosition2QB": 0,
    "AverageDraftPositionDynasty": 0,
    "AverageDraftPositionPPR": 0,
    "ByeWeek": 0,
    "City": "string",
    "Conference": "string",
    "DefensiveCoordinator": "string",
    "DefensiveScheme": "string",
    "Division": "string",
    "DraftKingsName": "string",
    "DraftKingsPlayerID": 0,
    "FanDuelName": "string",
    "FanDuelPlayerID": 0,
    "FantasyDraftName": "string",
    "FantasyDraftPlayerID": 0,
    "FullName": "string",
    "GlobalTeamID": 0,
    "HeadCoach": "string",
    "Key": "string",
    "Name": "string",
    "OffensiveCoordinator": "string",
    "OffensiveScheme": "string",
    "PlayerID": 0,
    "PrimaryColor": "string",
    "QuaternaryColor": "string",
    "SecondaryColor": "string",
    "SpecialTeamsCoach": "string",
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
    "TeamID": 0,
    "TertiaryColor": "string",
    "UpcomingDraftKingsSalary": 0,
    "UpcomingFanDuelSalary": 0,
    "UpcomingOpponent": "string",
    "UpcomingOpponentPositionRank": 0,
    "UpcomingOpponentRank": 0,
    "UpcomingSalary": 0,
    "UpcomingYahooSalary": 0,
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string",
    "YahooName": "string",
    "YahooPlayerID": 0
  }
]
```

<h3 id="teams-by-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="teams-by-season-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Timeframes

<a id="opIdTimeframes"></a>

> Code samples

```bash
curl https://example.com/XML/Timeframes/current \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Timeframes/{type}`

Get detailed information about past, present, and future timeframes.

<h3 id="timeframes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|type|path|string|true|The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|XML|
|format|JSON|
|type|current|
|type|upcoming|
|type|completed|
|type|recent|
|type|all|

> Example responses

> 200 Response

```json
[
  {
    "ApiSeason": "string",
    "ApiWeek": "string",
    "EndDate": "string",
    "FirstGameEnd": "string",
    "FirstGameStart": "string",
    "HasEnded": true,
    "HasFirstGameEnded": true,
    "HasFirstGameStarted": true,
    "HasGames": true,
    "HasLastGameEnded": true,
    "HasStarted": true,
    "LastGameEnd": "string",
    "Name": "string",
    "Season": 0,
    "SeasonType": 0,
    "ShortName": "string",
    "StartDate": "string",
    "Week": 0
  }
]
```

<h3 id="timeframes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="timeframes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Timeframe](#schematimeframe)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Season Upcoming

<a id="opIdSeasonUpcoming"></a>

> Code samples

```bash
curl https://example.com/XML/UpcomingSeason \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/UpcomingSeason`

Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

<h3 id="season-upcoming-parameters">Parameters</h3>

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
0
```

<h3 id="season-upcoming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## Week Upcoming

<a id="opIdWeekUpcoming"></a>

> Code samples

```bash
curl https://example.com/XML/UpcomingWeek \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/UpcomingWeek`

Number of the upcoming week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

<h3 id="week-upcoming-parameters">Parameters</h3>

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
0
```

<h3 id="week-upcoming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_Bye">Bye</h2>
<!-- backwards compatibility -->
<a id="schemabye"></a>
<a id="schema_Bye"></a>
<a id="tocSbye"></a>
<a id="tocsbye"></a>

```json
{
  "Season": 0,
  "Team": "string",
  "Week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Season|integer|false|none|none|
|Team|string \| null|false|none|none|
|Week|integer|false|none|none|

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
  "AwayAssistedTackles": 0,
  "AwayBlockedKickReturnTouchdowns": 0,
  "AwayBlockedKickReturnYards": 0,
  "AwayBlockedKicks": 0,
  "AwayCompletionPercentage": 0,
  "AwayExtraPointKickingAttempts": 0,
  "AwayExtraPointKickingConversions": 0,
  "AwayExtraPointPassingAttempts": 0,
  "AwayExtraPointPassingConversions": 0,
  "AwayExtraPointRushingAttempts": 0,
  "AwayExtraPointRushingConversions": 0,
  "AwayExtraPointsHadBlocked": 0,
  "AwayFieldGoalAttempts": 0,
  "AwayFieldGoalReturnTouchdowns": 0,
  "AwayFieldGoalReturnYards": 0,
  "AwayFieldGoalsHadBlocked": 0,
  "AwayFieldGoalsMade": 0,
  "AwayFirstDowns": 0,
  "AwayFirstDownsByPassing": 0,
  "AwayFirstDownsByPenalty": 0,
  "AwayFirstDownsByRushing": 0,
  "AwayFourthDownAttempts": 0,
  "AwayFourthDownConversions": 0,
  "AwayFourthDownPercentage": 0,
  "AwayFumbleReturnTouchdowns": 0,
  "AwayFumbleReturnYards": 0,
  "AwayFumbles": 0,
  "AwayFumblesForced": 0,
  "AwayFumblesLost": 0,
  "AwayFumblesRecovered": 0,
  "AwayGiveaways": 0,
  "AwayGoalToGoAttempts": 0,
  "AwayGoalToGoConversions": 0,
  "AwayInterceptionReturnTouchdowns": 0,
  "AwayInterceptionReturnYards": 0,
  "AwayInterceptionReturns": 0,
  "AwayKickReturnLong": 0,
  "AwayKickReturnTouchdowns": 0,
  "AwayKickReturnYards": 0,
  "AwayKickReturns": 0,
  "AwayKickoffTouchbacks": 0,
  "AwayKickoffs": 0,
  "AwayKickoffsInEndZone": 0,
  "AwayOffensivePlays": 0,
  "AwayOffensiveYards": 0,
  "AwayOffensiveYardsPerPlay": 0,
  "AwayPasserRating": 0,
  "AwayPassesDefended": 0,
  "AwayPassingAttempts": 0,
  "AwayPassingCompletions": 0,
  "AwayPassingInterceptions": 0,
  "AwayPassingTouchdowns": 0,
  "AwayPassingYards": 0,
  "AwayPassingYardsPerAttempt": 0,
  "AwayPassingYardsPerCompletion": 0,
  "AwayPenalties": 0,
  "AwayPenaltyYards": 0,
  "AwayPuntAverage": 0,
  "AwayPuntNetAverage": 0,
  "AwayPuntNetYards": 0,
  "AwayPuntReturnLong": 0,
  "AwayPuntReturnTouchdowns": 0,
  "AwayPuntReturnYards": 0,
  "AwayPuntReturns": 0,
  "AwayPuntYards": 0,
  "AwayPunts": 0,
  "AwayPuntsHadBlocked": 0,
  "AwayQuarterbackHits": 0,
  "AwayRedZoneAttempts": 0,
  "AwayRedZoneConversions": 0,
  "AwayReturnYards": 0,
  "AwayRushingAttempts": 0,
  "AwayRushingTouchdowns": 0,
  "AwayRushingYards": 0,
  "AwayRushingYardsPerAttempt": 0,
  "AwaySackYards": 0,
  "AwaySacks": 0,
  "AwaySafeties": 0,
  "AwayScore": 0,
  "AwayScoreOvertime": 0,
  "AwayScoreQuarter1": 0,
  "AwayScoreQuarter2": 0,
  "AwayScoreQuarter3": 0,
  "AwayScoreQuarter4": 0,
  "AwaySoloTackles": 0,
  "AwayTacklesForLoss": 0,
  "AwayTakeaways": 0,
  "AwayTeam": "string",
  "AwayThirdDownAttempts": 0,
  "AwayThirdDownConversions": 0,
  "AwayThirdDownPercentage": 0,
  "AwayTimeOfPossession": "string",
  "AwayTimesSacked": 0,
  "AwayTimesSackedYards": 0,
  "AwayTouchdowns": 0,
  "AwayTurnoverDifferential": 0,
  "AwayTwoPointConversionReturns": 0,
  "Date": "string",
  "GameID": 0,
  "GameKey": "string",
  "HomeAssistedTackles": 0,
  "HomeBlockedKickReturnTouchdowns": 0,
  "HomeBlockedKickReturnYards": 0,
  "HomeBlockedKicks": 0,
  "HomeCompletionPercentage": 0,
  "HomeExtraPointKickingAttempts": 0,
  "HomeExtraPointKickingConversions": 0,
  "HomeExtraPointPassingAttempts": 0,
  "HomeExtraPointPassingConversions": 0,
  "HomeExtraPointRushingAttempts": 0,
  "HomeExtraPointRushingConversions": 0,
  "HomeExtraPointsHadBlocked": 0,
  "HomeFieldGoalAttempts": 0,
  "HomeFieldGoalReturnTouchdowns": 0,
  "HomeFieldGoalReturnYards": 0,
  "HomeFieldGoalsHadBlocked": 0,
  "HomeFieldGoalsMade": 0,
  "HomeFirstDowns": 0,
  "HomeFirstDownsByPassing": 0,
  "HomeFirstDownsByPenalty": 0,
  "HomeFirstDownsByRushing": 0,
  "HomeFourthDownAttempts": 0,
  "HomeFourthDownConversions": 0,
  "HomeFourthDownPercentage": 0,
  "HomeFumbleReturnTouchdowns": 0,
  "HomeFumbleReturnYards": 0,
  "HomeFumbles": 0,
  "HomeFumblesForced": 0,
  "HomeFumblesLost": 0,
  "HomeFumblesRecovered": 0,
  "HomeGiveaways": 0,
  "HomeGoalToGoAttempts": 0,
  "HomeGoalToGoConversions": 0,
  "HomeInterceptionReturnTouchdowns": 0,
  "HomeInterceptionReturnYards": 0,
  "HomeInterceptionReturns": 0,
  "HomeKickReturnLong": 0,
  "HomeKickReturnTouchdowns": 0,
  "HomeKickReturnYards": 0,
  "HomeKickReturns": 0,
  "HomeKickoffTouchbacks": 0,
  "HomeKickoffs": 0,
  "HomeKickoffsInEndZone": 0,
  "HomeOffensivePlays": 0,
  "HomeOffensiveYards": 0,
  "HomeOffensiveYardsPerPlay": 0,
  "HomePasserRating": 0,
  "HomePassesDefended": 0,
  "HomePassingAttempts": 0,
  "HomePassingCompletions": 0,
  "HomePassingInterceptions": 0,
  "HomePassingTouchdowns": 0,
  "HomePassingYards": 0,
  "HomePassingYardsPerAttempt": 0,
  "HomePassingYardsPerCompletion": 0,
  "HomePenalties": 0,
  "HomePenaltyYards": 0,
  "HomePuntAverage": 0,
  "HomePuntNetAverage": 0,
  "HomePuntNetYards": 0,
  "HomePuntReturnLong": 0,
  "HomePuntReturnTouchdowns": 0,
  "HomePuntReturnYards": 0,
  "HomePuntReturns": 0,
  "HomePuntYards": 0,
  "HomePunts": 0,
  "HomePuntsHadBlocked": 0,
  "HomeQuarterbackHits": 0,
  "HomeRedZoneAttempts": 0,
  "HomeRedZoneConversions": 0,
  "HomeReturnYards": 0,
  "HomeRushingAttempts": 0,
  "HomeRushingTouchdowns": 0,
  "HomeRushingYards": 0,
  "HomeRushingYardsPerAttempt": 0,
  "HomeSackYards": 0,
  "HomeSacks": 0,
  "HomeSafeties": 0,
  "HomeScore": 0,
  "HomeScoreOvertime": 0,
  "HomeScoreQuarter1": 0,
  "HomeScoreQuarter2": 0,
  "HomeScoreQuarter3": 0,
  "HomeScoreQuarter4": 0,
  "HomeSoloTackles": 0,
  "HomeTacklesForLoss": 0,
  "HomeTakeaways": 0,
  "HomeTeam": "string",
  "HomeThirdDownAttempts": 0,
  "HomeThirdDownConversions": 0,
  "HomeThirdDownPercentage": 0,
  "HomeTimeOfPossession": "string",
  "HomeTimesSacked": 0,
  "HomeTimesSackedYards": 0,
  "HomeTouchdowns": 0,
  "HomeTurnoverDifferential": 0,
  "HomeTwoPointConversionReturns": 0,
  "Humidity": 0,
  "IsGameOver": true,
  "OverUnder": 0,
  "PlayingSurface": "string",
  "PointSpread": 0,
  "ScoreID": 0,
  "Season": 0,
  "SeasonType": 0,
  "Stadium": "string",
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
  "Temperature": 0,
  "TotalScore": 0,
  "Week": 0,
  "WindSpeed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwayAssistedTackles|integer \| null|false|none|none|
|AwayBlockedKickReturnTouchdowns|integer \| null|false|none|none|
|AwayBlockedKickReturnYards|integer \| null|false|none|none|
|AwayBlockedKicks|integer \| null|false|none|none|
|AwayCompletionPercentage|number \| null|false|none|none|
|AwayExtraPointKickingAttempts|integer \| null|false|none|none|
|AwayExtraPointKickingConversions|integer \| null|false|none|none|
|AwayExtraPointPassingAttempts|integer \| null|false|none|none|
|AwayExtraPointPassingConversions|integer \| null|false|none|none|
|AwayExtraPointRushingAttempts|integer \| null|false|none|none|
|AwayExtraPointRushingConversions|integer \| null|false|none|none|
|AwayExtraPointsHadBlocked|integer \| null|false|none|none|
|AwayFieldGoalAttempts|integer \| null|false|none|none|
|AwayFieldGoalReturnTouchdowns|integer \| null|false|none|none|
|AwayFieldGoalReturnYards|integer \| null|false|none|none|
|AwayFieldGoalsHadBlocked|integer \| null|false|none|none|
|AwayFieldGoalsMade|integer \| null|false|none|none|
|AwayFirstDowns|integer \| null|false|none|none|
|AwayFirstDownsByPassing|integer \| null|false|none|none|
|AwayFirstDownsByPenalty|integer \| null|false|none|none|
|AwayFirstDownsByRushing|integer \| null|false|none|none|
|AwayFourthDownAttempts|integer \| null|false|none|none|
|AwayFourthDownConversions|integer \| null|false|none|none|
|AwayFourthDownPercentage|number \| null|false|none|none|
|AwayFumbleReturnTouchdowns|integer \| null|false|none|none|
|AwayFumbleReturnYards|integer \| null|false|none|none|
|AwayFumbles|integer \| null|false|none|none|
|AwayFumblesForced|integer \| null|false|none|none|
|AwayFumblesLost|integer \| null|false|none|none|
|AwayFumblesRecovered|integer \| null|false|none|none|
|AwayGiveaways|integer \| null|false|none|none|
|AwayGoalToGoAttempts|integer \| null|false|none|none|
|AwayGoalToGoConversions|integer \| null|false|none|none|
|AwayInterceptionReturnTouchdowns|integer \| null|false|none|none|
|AwayInterceptionReturnYards|integer \| null|false|none|none|
|AwayInterceptionReturns|integer \| null|false|none|none|
|AwayKickReturnLong|integer \| null|false|none|none|
|AwayKickReturnTouchdowns|integer \| null|false|none|none|
|AwayKickReturnYards|integer \| null|false|none|none|
|AwayKickReturns|integer \| null|false|none|none|
|AwayKickoffTouchbacks|integer \| null|false|none|none|
|AwayKickoffs|integer \| null|false|none|none|
|AwayKickoffsInEndZone|integer \| null|false|none|none|
|AwayOffensivePlays|integer \| null|false|none|none|
|AwayOffensiveYards|integer \| null|false|none|none|
|AwayOffensiveYardsPerPlay|number \| null|false|none|none|
|AwayPasserRating|number \| null|false|none|none|
|AwayPassesDefended|integer \| null|false|none|none|
|AwayPassingAttempts|integer \| null|false|none|none|
|AwayPassingCompletions|integer \| null|false|none|none|
|AwayPassingInterceptions|integer \| null|false|none|none|
|AwayPassingTouchdowns|integer \| null|false|none|none|
|AwayPassingYards|integer \| null|false|none|none|
|AwayPassingYardsPerAttempt|number \| null|false|none|none|
|AwayPassingYardsPerCompletion|number \| null|false|none|none|
|AwayPenalties|integer \| null|false|none|none|
|AwayPenaltyYards|integer \| null|false|none|none|
|AwayPuntAverage|number \| null|false|none|none|
|AwayPuntNetAverage|number \| null|false|none|none|
|AwayPuntNetYards|integer \| null|false|none|none|
|AwayPuntReturnLong|integer \| null|false|none|none|
|AwayPuntReturnTouchdowns|integer \| null|false|none|none|
|AwayPuntReturnYards|integer \| null|false|none|none|
|AwayPuntReturns|integer \| null|false|none|none|
|AwayPuntYards|integer \| null|false|none|none|
|AwayPunts|integer \| null|false|none|none|
|AwayPuntsHadBlocked|integer \| null|false|none|none|
|AwayQuarterbackHits|integer \| null|false|none|none|
|AwayRedZoneAttempts|integer \| null|false|none|none|
|AwayRedZoneConversions|integer \| null|false|none|none|
|AwayReturnYards|integer \| null|false|none|none|
|AwayRushingAttempts|integer \| null|false|none|none|
|AwayRushingTouchdowns|integer \| null|false|none|none|
|AwayRushingYards|integer \| null|false|none|none|
|AwayRushingYardsPerAttempt|number \| null|false|none|none|
|AwaySackYards|integer \| null|false|none|none|
|AwaySacks|integer \| null|false|none|none|
|AwaySafeties|integer \| null|false|none|none|
|AwayScore|integer|false|none|none|
|AwayScoreOvertime|integer \| null|false|none|none|
|AwayScoreQuarter1|integer \| null|false|none|none|
|AwayScoreQuarter2|integer \| null|false|none|none|
|AwayScoreQuarter3|integer \| null|false|none|none|
|AwayScoreQuarter4|integer \| null|false|none|none|
|AwaySoloTackles|integer \| null|false|none|none|
|AwayTacklesForLoss|integer \| null|false|none|none|
|AwayTakeaways|integer \| null|false|none|none|
|AwayTeam|string \| null|false|none|none|
|AwayThirdDownAttempts|integer \| null|false|none|none|
|AwayThirdDownConversions|integer \| null|false|none|none|
|AwayThirdDownPercentage|number \| null|false|none|none|
|AwayTimeOfPossession|string \| null|false|none|none|
|AwayTimesSacked|integer \| null|false|none|none|
|AwayTimesSackedYards|integer \| null|false|none|none|
|AwayTouchdowns|integer \| null|false|none|none|
|AwayTurnoverDifferential|integer \| null|false|none|none|
|AwayTwoPointConversionReturns|integer \| null|false|none|none|
|Date|string \| null|false|none|none|
|GameID|integer|false|none|none|
|GameKey|string \| null|false|none|none|
|HomeAssistedTackles|integer \| null|false|none|none|
|HomeBlockedKickReturnTouchdowns|integer \| null|false|none|none|
|HomeBlockedKickReturnYards|integer \| null|false|none|none|
|HomeBlockedKicks|integer \| null|false|none|none|
|HomeCompletionPercentage|number \| null|false|none|none|
|HomeExtraPointKickingAttempts|integer \| null|false|none|none|
|HomeExtraPointKickingConversions|integer \| null|false|none|none|
|HomeExtraPointPassingAttempts|integer \| null|false|none|none|
|HomeExtraPointPassingConversions|integer \| null|false|none|none|
|HomeExtraPointRushingAttempts|integer \| null|false|none|none|
|HomeExtraPointRushingConversions|integer \| null|false|none|none|
|HomeExtraPointsHadBlocked|integer \| null|false|none|none|
|HomeFieldGoalAttempts|integer \| null|false|none|none|
|HomeFieldGoalReturnTouchdowns|integer \| null|false|none|none|
|HomeFieldGoalReturnYards|integer \| null|false|none|none|
|HomeFieldGoalsHadBlocked|integer \| null|false|none|none|
|HomeFieldGoalsMade|integer \| null|false|none|none|
|HomeFirstDowns|integer \| null|false|none|none|
|HomeFirstDownsByPassing|integer \| null|false|none|none|
|HomeFirstDownsByPenalty|integer \| null|false|none|none|
|HomeFirstDownsByRushing|integer \| null|false|none|none|
|HomeFourthDownAttempts|integer \| null|false|none|none|
|HomeFourthDownConversions|integer \| null|false|none|none|
|HomeFourthDownPercentage|number \| null|false|none|none|
|HomeFumbleReturnTouchdowns|integer \| null|false|none|none|
|HomeFumbleReturnYards|integer \| null|false|none|none|
|HomeFumbles|integer \| null|false|none|none|
|HomeFumblesForced|integer \| null|false|none|none|
|HomeFumblesLost|integer \| null|false|none|none|
|HomeFumblesRecovered|integer \| null|false|none|none|
|HomeGiveaways|integer \| null|false|none|none|
|HomeGoalToGoAttempts|integer \| null|false|none|none|
|HomeGoalToGoConversions|integer \| null|false|none|none|
|HomeInterceptionReturnTouchdowns|integer \| null|false|none|none|
|HomeInterceptionReturnYards|integer \| null|false|none|none|
|HomeInterceptionReturns|integer \| null|false|none|none|
|HomeKickReturnLong|integer \| null|false|none|none|
|HomeKickReturnTouchdowns|integer \| null|false|none|none|
|HomeKickReturnYards|integer \| null|false|none|none|
|HomeKickReturns|integer \| null|false|none|none|
|HomeKickoffTouchbacks|integer \| null|false|none|none|
|HomeKickoffs|integer \| null|false|none|none|
|HomeKickoffsInEndZone|integer \| null|false|none|none|
|HomeOffensivePlays|integer \| null|false|none|none|
|HomeOffensiveYards|integer \| null|false|none|none|
|HomeOffensiveYardsPerPlay|number \| null|false|none|none|
|HomePasserRating|number \| null|false|none|none|
|HomePassesDefended|integer \| null|false|none|none|
|HomePassingAttempts|integer \| null|false|none|none|
|HomePassingCompletions|integer \| null|false|none|none|
|HomePassingInterceptions|integer \| null|false|none|none|
|HomePassingTouchdowns|integer \| null|false|none|none|
|HomePassingYards|integer \| null|false|none|none|
|HomePassingYardsPerAttempt|number \| null|false|none|none|
|HomePassingYardsPerCompletion|number \| null|false|none|none|
|HomePenalties|integer \| null|false|none|none|
|HomePenaltyYards|integer \| null|false|none|none|
|HomePuntAverage|number \| null|false|none|none|
|HomePuntNetAverage|number \| null|false|none|none|
|HomePuntNetYards|integer \| null|false|none|none|
|HomePuntReturnLong|integer \| null|false|none|none|
|HomePuntReturnTouchdowns|integer \| null|false|none|none|
|HomePuntReturnYards|integer \| null|false|none|none|
|HomePuntReturns|integer \| null|false|none|none|
|HomePuntYards|integer \| null|false|none|none|
|HomePunts|integer \| null|false|none|none|
|HomePuntsHadBlocked|integer \| null|false|none|none|
|HomeQuarterbackHits|integer \| null|false|none|none|
|HomeRedZoneAttempts|integer \| null|false|none|none|
|HomeRedZoneConversions|integer \| null|false|none|none|
|HomeReturnYards|integer \| null|false|none|none|
|HomeRushingAttempts|integer \| null|false|none|none|
|HomeRushingTouchdowns|integer \| null|false|none|none|
|HomeRushingYards|integer \| null|false|none|none|
|HomeRushingYardsPerAttempt|number \| null|false|none|none|
|HomeSackYards|integer \| null|false|none|none|
|HomeSacks|integer \| null|false|none|none|
|HomeSafeties|integer \| null|false|none|none|
|HomeScore|integer|false|none|none|
|HomeScoreOvertime|integer \| null|false|none|none|
|HomeScoreQuarter1|integer \| null|false|none|none|
|HomeScoreQuarter2|integer \| null|false|none|none|
|HomeScoreQuarter3|integer \| null|false|none|none|
|HomeScoreQuarter4|integer \| null|false|none|none|
|HomeSoloTackles|integer \| null|false|none|none|
|HomeTacklesForLoss|integer \| null|false|none|none|
|HomeTakeaways|integer \| null|false|none|none|
|HomeTeam|string \| null|false|none|none|
|HomeThirdDownAttempts|integer \| null|false|none|none|
|HomeThirdDownConversions|integer \| null|false|none|none|
|HomeThirdDownPercentage|number \| null|false|none|none|
|HomeTimeOfPossession|string \| null|false|none|none|
|HomeTimesSacked|integer \| null|false|none|none|
|HomeTimesSackedYards|integer \| null|false|none|none|
|HomeTouchdowns|integer \| null|false|none|none|
|HomeTurnoverDifferential|integer \| null|false|none|none|
|HomeTwoPointConversionReturns|integer \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|IsGameOver|boolean \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PlayingSurface|string \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|ScoreID|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Stadium|string \| null|false|none|none|
|StadiumDetails|[Stadium](#schemastadium)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|Temperature|integer \| null|false|none|none|
|TotalScore|integer \| null|false|none|none|
|Week|integer|false|none|none|
|WindSpeed|integer \| null|false|none|none|

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

<h2 id="tocS_PlayerDetail">PlayerDetail</h2>
<!-- backwards compatibility -->
<a id="schemaplayerdetail"></a>
<a id="schema_PlayerDetail"></a>
<a id="tocSplayerdetail"></a>
<a id="tocsplayerdetail"></a>

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
  "LatestNews": [
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
  ],
  "Name": "string",
  "Number": 0,
  "PhotoUrl": "string",
  "PlayerID": 0,
  "PlayerSeason": {
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
  },
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
|LatestNews|[[News](#schemanews)]|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|PlayerSeason|[PlayerSeason](#schemaplayerseason)|false|none|none|
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

<h2 id="tocS_PlayerSeason">PlayerSeason</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseason"></a>
<a id="schema_PlayerSeason"></a>
<a id="tocSplayerseason"></a>
<a id="tocsplayerseason"></a>

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
|Experience|integer|false|none|none|
|Name|string \| null|false|none|none|
|Number|integer|false|none|none|
|Position|string \| null|false|none|none|
|RefereeID|integer|false|none|none|

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

<h2 id="tocS_Standing">Standing</h2>
<!-- backwards compatibility -->
<a id="schemastanding"></a>
<a id="schema_Standing"></a>
<a id="tocSstanding"></a>
<a id="tocsstanding"></a>

```json
{
  "Conference": "string",
  "ConferenceLosses": 0,
  "ConferenceRank": 0,
  "ConferenceTies": 0,
  "ConferenceWins": 0,
  "Division": "string",
  "DivisionLosses": 0,
  "DivisionRank": 0,
  "DivisionTies": 0,
  "DivisionWins": 0,
  "GlobalTeamID": 0,
  "Losses": 0,
  "Name": "string",
  "NetPoints": 0,
  "Percentage": 0,
  "PointsAgainst": 0,
  "PointsFor": 0,
  "Season": 0,
  "SeasonType": 0,
  "Team": "string",
  "TeamID": 0,
  "Ties": 0,
  "Touchdowns": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Conference|string \| null|false|none|none|
|ConferenceLosses|integer|false|none|none|
|ConferenceRank|integer|false|none|none|
|ConferenceTies|integer|false|none|none|
|ConferenceWins|integer|false|none|none|
|Division|string \| null|false|none|none|
|DivisionLosses|integer|false|none|none|
|DivisionRank|integer|false|none|none|
|DivisionTies|integer|false|none|none|
|DivisionWins|integer|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|Losses|integer|false|none|none|
|Name|string \| null|false|none|none|
|NetPoints|integer|false|none|none|
|Percentage|number|false|none|none|
|PointsAgainst|integer|false|none|none|
|PointsFor|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer|false|none|none|
|Ties|integer|false|none|none|
|Touchdowns|integer \| null|false|none|none|
|Wins|integer|false|none|none|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "AverageDraftPosition": 0,
  "AverageDraftPosition2QB": 0,
  "AverageDraftPositionDynasty": 0,
  "AverageDraftPositionPPR": 0,
  "ByeWeek": 0,
  "City": "string",
  "Conference": "string",
  "DefensiveCoordinator": "string",
  "DefensiveScheme": "string",
  "Division": "string",
  "DraftKingsName": "string",
  "DraftKingsPlayerID": 0,
  "FanDuelName": "string",
  "FanDuelPlayerID": 0,
  "FantasyDraftName": "string",
  "FantasyDraftPlayerID": 0,
  "FullName": "string",
  "GlobalTeamID": 0,
  "HeadCoach": "string",
  "Key": "string",
  "Name": "string",
  "OffensiveCoordinator": "string",
  "OffensiveScheme": "string",
  "PlayerID": 0,
  "PrimaryColor": "string",
  "QuaternaryColor": "string",
  "SecondaryColor": "string",
  "SpecialTeamsCoach": "string",
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
  "TeamID": 0,
  "TertiaryColor": "string",
  "UpcomingDraftKingsSalary": 0,
  "UpcomingFanDuelSalary": 0,
  "UpcomingOpponent": "string",
  "UpcomingOpponentPositionRank": 0,
  "UpcomingOpponentRank": 0,
  "UpcomingSalary": 0,
  "UpcomingYahooSalary": 0,
  "WikipediaLogoUrl": "string",
  "WikipediaWordMarkUrl": "string",
  "YahooName": "string",
  "YahooPlayerID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AverageDraftPosition|number \| null|false|none|none|
|AverageDraftPosition2QB|number \| null|false|none|none|
|AverageDraftPositionDynasty|number \| null|false|none|none|
|AverageDraftPositionPPR|number \| null|false|none|none|
|ByeWeek|integer \| null|false|none|none|
|City|string \| null|false|none|none|
|Conference|string \| null|false|none|none|
|DefensiveCoordinator|string \| null|false|none|none|
|DefensiveScheme|string \| null|false|none|none|
|Division|string \| null|false|none|none|
|DraftKingsName|string \| null|false|none|none|
|DraftKingsPlayerID|integer \| null|false|none|none|
|FanDuelName|string \| null|false|none|none|
|FanDuelPlayerID|integer \| null|false|none|none|
|FantasyDraftName|string \| null|false|none|none|
|FantasyDraftPlayerID|integer \| null|false|none|none|
|FullName|string \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|HeadCoach|string \| null|false|none|none|
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|OffensiveCoordinator|string \| null|false|none|none|
|OffensiveScheme|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|PrimaryColor|string \| null|false|none|none|
|QuaternaryColor|string \| null|false|none|none|
|SecondaryColor|string \| null|false|none|none|
|SpecialTeamsCoach|string \| null|false|none|none|
|StadiumDetails|[Stadium](#schemastadium)|false|none|none|
|StadiumID|integer \| null|false|none|none|
|TeamID|integer|false|none|none|
|TertiaryColor|string \| null|false|none|none|
|UpcomingDraftKingsSalary|integer \| null|false|none|none|
|UpcomingFanDuelSalary|integer \| null|false|none|none|
|UpcomingOpponent|string \| null|false|none|none|
|UpcomingOpponentPositionRank|integer \| null|false|none|none|
|UpcomingOpponentRank|integer \| null|false|none|none|
|UpcomingSalary|integer \| null|false|none|none|
|UpcomingYahooSalary|integer \| null|false|none|none|
|WikipediaLogoUrl|string \| null|false|none|none|
|WikipediaWordMarkUrl|string \| null|false|none|none|
|YahooName|string \| null|false|none|none|
|YahooPlayerID|integer \| null|false|none|none|

<h2 id="tocS_TeamDepthChart">TeamDepthChart</h2>
<!-- backwards compatibility -->
<a id="schemateamdepthchart"></a>
<a id="schema_TeamDepthChart"></a>
<a id="tocSteamdepthchart"></a>
<a id="tocsteamdepthchart"></a>

```json
{
  "Defense": [
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
  "Offense": [
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
  "SpecialTeams": [
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
|Defense|[[DepthChart](#schemadepthchart)]|false|none|none|
|Offense|[[DepthChart](#schemadepthchart)]|false|none|none|
|SpecialTeams|[[DepthChart](#schemadepthchart)]|false|none|none|
|TeamID|integer|false|none|none|

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "CompletionPercentage": 0,
  "Date": "string",
  "DateTime": "string",
  "Day": "string",
  "DayOfWeek": "string",
  "ExtraPointKickingAttempts": 0,
  "ExtraPointKickingConversions": 0,
  "ExtraPointPassingAttempts": 0,
  "ExtraPointPassingConversions": 0,
  "ExtraPointPercentage": 0,
  "ExtraPointRushingAttempts": 0,
  "ExtraPointRushingConversions": 0,
  "ExtraPointsHadBlocked": 0,
  "FieldGoalAttempts": 0,
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsMade": 0,
  "FirstDowns": 0,
  "FirstDownsByPassing": 0,
  "FirstDownsByPenalty": 0,
  "FirstDownsByRushing": 0,
  "FourthDownAttempts": 0,
  "FourthDownConversions": 0,
  "FourthDownPercentage": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesRecovered": 0,
  "GameKey": "string",
  "Giveaways": 0,
  "GlobalGameID": 0,
  "GlobalOpponentID": 0,
  "GlobalTeamID": 0,
  "GoalToGoAttempts": 0,
  "GoalToGoConversions": 0,
  "GoalToGoPercentage": 0,
  "HomeOrAway": "string",
  "Humidity": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "InterceptionReturns": 0,
  "IsGameOver": true,
  "KickReturnAverage": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYardDifferential": 0,
  "KickReturnYards": 0,
  "KickReturns": 0,
  "KickoffTouchbacks": 0,
  "Kickoffs": 0,
  "KickoffsInEndZone": 0,
  "OffensivePlays": 0,
  "OffensiveYards": 0,
  "OffensiveYardsPerPlay": 0,
  "Opponent": "string",
  "OpponentAssistedTackles": 0,
  "OpponentBlockedKickReturnTouchdowns": 0,
  "OpponentBlockedKickReturnYards": 0,
  "OpponentBlockedKicks": 0,
  "OpponentCompletionPercentage": 0,
  "OpponentExtraPointKickingAttempts": 0,
  "OpponentExtraPointKickingConversions": 0,
  "OpponentExtraPointPassingAttempts": 0,
  "OpponentExtraPointPassingConversions": 0,
  "OpponentExtraPointPercentage": 0,
  "OpponentExtraPointRushingAttempts": 0,
  "OpponentExtraPointRushingConversions": 0,
  "OpponentExtraPointsHadBlocked": 0,
  "OpponentFieldGoalAttempts": 0,
  "OpponentFieldGoalPercentage": 0,
  "OpponentFieldGoalReturnTouchdowns": 0,
  "OpponentFieldGoalReturnYards": 0,
  "OpponentFieldGoalsHadBlocked": 0,
  "OpponentFieldGoalsMade": 0,
  "OpponentFirstDowns": 0,
  "OpponentFirstDownsByPassing": 0,
  "OpponentFirstDownsByPenalty": 0,
  "OpponentFirstDownsByRushing": 0,
  "OpponentFourthDownAttempts": 0,
  "OpponentFourthDownConversions": 0,
  "OpponentFourthDownPercentage": 0,
  "OpponentFumbleReturnTouchdowns": 0,
  "OpponentFumbleReturnYards": 0,
  "OpponentFumbles": 0,
  "OpponentFumblesForced": 0,
  "OpponentFumblesLost": 0,
  "OpponentFumblesRecovered": 0,
  "OpponentGiveaways": 0,
  "OpponentGoalToGoAttempts": 0,
  "OpponentGoalToGoConversions": 0,
  "OpponentGoalToGoPercentage": 0,
  "OpponentID": 0,
  "OpponentInterceptionReturnTouchdowns": 0,
  "OpponentInterceptionReturnYards": 0,
  "OpponentInterceptionReturns": 0,
  "OpponentKickReturnAverage": 0,
  "OpponentKickReturnLong": 0,
  "OpponentKickReturnTouchdowns": 0,
  "OpponentKickReturnYards": 0,
  "OpponentKickReturns": 0,
  "OpponentKickoffTouchbacks": 0,
  "OpponentKickoffs": 0,
  "OpponentKickoffsInEndZone": 0,
  "OpponentOffensivePlays": 0,
  "OpponentOffensiveYards": 0,
  "OpponentOffensiveYardsPerPlay": 0,
  "OpponentPasserRating": 0,
  "OpponentPassesDefended": 0,
  "OpponentPassingAttempts": 0,
  "OpponentPassingCompletions": 0,
  "OpponentPassingDropbacks": 0,
  "OpponentPassingInterceptionPercentage": 0,
  "OpponentPassingInterceptions": 0,
  "OpponentPassingTouchdowns": 0,
  "OpponentPassingYards": 0,
  "OpponentPassingYardsPerAttempt": 0,
  "OpponentPassingYardsPerCompletion": 0,
  "OpponentPenalties": 0,
  "OpponentPenaltyYards": 0,
  "OpponentPuntAverage": 0,
  "OpponentPuntNetAverage": 0,
  "OpponentPuntNetYards": 0,
  "OpponentPuntReturnAverage": 0,
  "OpponentPuntReturnLong": 0,
  "OpponentPuntReturnTouchdowns": 0,
  "OpponentPuntReturnYards": 0,
  "OpponentPuntReturns": 0,
  "OpponentPuntYards": 0,
  "OpponentPunts": 0,
  "OpponentPuntsHadBlocked": 0,
  "OpponentQuarterbackHits": 0,
  "OpponentQuarterbackHitsDifferential": 0,
  "OpponentQuarterbackHitsPercentage": 0,
  "OpponentQuarterbackSacksDifferential": 0,
  "OpponentRedZoneAttempts": 0,
  "OpponentRedZoneConversions": 0,
  "OpponentRedZonePercentage": 0,
  "OpponentReturnYards": 0,
  "OpponentRushingAttempts": 0,
  "OpponentRushingTouchdowns": 0,
  "OpponentRushingYards": 0,
  "OpponentRushingYardsPerAttempt": 0,
  "OpponentSackYards": 0,
  "OpponentSacks": 0,
  "OpponentSafeties": 0,
  "OpponentScore": 0,
  "OpponentScoreOvertime": 0,
  "OpponentScoreQuarter1": 0,
  "OpponentScoreQuarter2": 0,
  "OpponentScoreQuarter3": 0,
  "OpponentScoreQuarter4": 0,
  "OpponentSoloTackles": 0,
  "OpponentTacklesForLoss": 0,
  "OpponentTacklesForLossDifferential": 0,
  "OpponentTacklesForLossPercentage": 0,
  "OpponentTakeaways": 0,
  "OpponentThirdDownAttempts": 0,
  "OpponentThirdDownConversions": 0,
  "OpponentThirdDownPercentage": 0,
  "OpponentTimeOfPossession": "string",
  "OpponentTimeOfPossessionMinutes": 0,
  "OpponentTimeOfPossessionSeconds": 0,
  "OpponentTimesSacked": 0,
  "OpponentTimesSackedPercentage": 0,
  "OpponentTimesSackedYards": 0,
  "OpponentTouchdowns": 0,
  "OpponentTurnoverDifferential": 0,
  "OpponentTwoPointConversionReturns": 0,
  "OverUnder": 0,
  "PasserRating": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletions": 0,
  "PassingDropbacks": 0,
  "PassingInterceptionPercentage": 0,
  "PassingInterceptions": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Penalties": 0,
  "PenaltyYardDifferential": 0,
  "PenaltyYards": 0,
  "PlayingSurface": "string",
  "PointDifferential": 0,
  "PointSpread": 0,
  "PuntAverage": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnAverage": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYardDifferential": 0,
  "PuntReturnYards": 0,
  "PuntReturns": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "QuarterbackHitsDifferential": 0,
  "QuarterbackHitsPercentage": 0,
  "QuarterbackSacksDifferential": 0,
  "RedZoneAttempts": 0,
  "RedZoneConversions": 0,
  "RedZonePercentage": 0,
  "ReturnYards": 0,
  "RushingAttempts": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "Score": 0,
  "ScoreID": 0,
  "ScoreOvertime": 0,
  "ScoreQuarter1": 0,
  "ScoreQuarter2": 0,
  "ScoreQuarter3": 0,
  "ScoreQuarter4": 0,
  "Season": 0,
  "SeasonType": 0,
  "SoloTackles": 0,
  "Stadium": "string",
  "TacklesForLoss": 0,
  "TacklesForLossDifferential": 0,
  "TacklesForLossPercentage": 0,
  "Takeaways": 0,
  "Team": "string",
  "TeamGameID": 0,
  "TeamID": 0,
  "TeamName": "string",
  "Temperature": 0,
  "ThirdDownAttempts": 0,
  "ThirdDownConversions": 0,
  "ThirdDownPercentage": 0,
  "TimeOfPossession": "string",
  "TimeOfPossessionMinutes": 0,
  "TimeOfPossessionSeconds": 0,
  "TimesSacked": 0,
  "TimesSackedPercentage": 0,
  "TimesSackedYards": 0,
  "TotalScore": 0,
  "Touchdowns": 0,
  "TurnoverDifferential": 0,
  "TwoPointConversionReturns": 0,
  "Week": 0,
  "WindSpeed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|integer \| null|false|none|none|
|BlockedKickReturnTouchdowns|integer \| null|false|none|none|
|BlockedKickReturnYards|integer \| null|false|none|none|
|BlockedKicks|integer \| null|false|none|none|
|CompletionPercentage|number|false|none|none|
|Date|string \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DayOfWeek|string \| null|false|none|none|
|ExtraPointKickingAttempts|integer \| null|false|none|none|
|ExtraPointKickingConversions|integer \| null|false|none|none|
|ExtraPointPassingAttempts|integer \| null|false|none|none|
|ExtraPointPassingConversions|integer \| null|false|none|none|
|ExtraPointPercentage|number \| null|false|none|none|
|ExtraPointRushingAttempts|integer \| null|false|none|none|
|ExtraPointRushingConversions|integer \| null|false|none|none|
|ExtraPointsHadBlocked|integer \| null|false|none|none|
|FieldGoalAttempts|integer \| null|false|none|none|
|FieldGoalPercentage|number \| null|false|none|none|
|FieldGoalReturnTouchdowns|integer \| null|false|none|none|
|FieldGoalReturnYards|integer \| null|false|none|none|
|FieldGoalsHadBlocked|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FirstDowns|integer \| null|false|none|none|
|FirstDownsByPassing|integer \| null|false|none|none|
|FirstDownsByPenalty|integer \| null|false|none|none|
|FirstDownsByRushing|integer \| null|false|none|none|
|FourthDownAttempts|integer \| null|false|none|none|
|FourthDownConversions|integer \| null|false|none|none|
|FourthDownPercentage|number \| null|false|none|none|
|FumbleReturnTouchdowns|integer \| null|false|none|none|
|FumbleReturnYards|integer \| null|false|none|none|
|Fumbles|integer \| null|false|none|none|
|FumblesForced|integer \| null|false|none|none|
|FumblesLost|integer \| null|false|none|none|
|FumblesRecovered|integer \| null|false|none|none|
|GameKey|string \| null|false|none|none|
|Giveaways|integer|false|none|none|
|GlobalGameID|integer \| null|false|none|none|
|GlobalOpponentID|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|GoalToGoAttempts|integer \| null|false|none|none|
|GoalToGoConversions|integer \| null|false|none|none|
|GoalToGoPercentage|number \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|InterceptionReturnTouchdowns|integer \| null|false|none|none|
|InterceptionReturnYards|integer \| null|false|none|none|
|InterceptionReturns|integer \| null|false|none|none|
|IsGameOver|boolean \| null|false|none|none|
|KickReturnAverage|number \| null|false|none|none|
|KickReturnLong|integer \| null|false|none|none|
|KickReturnTouchdowns|integer \| null|false|none|none|
|KickReturnYardDifferential|integer \| null|false|none|none|
|KickReturnYards|integer \| null|false|none|none|
|KickReturns|integer \| null|false|none|none|
|KickoffTouchbacks|integer \| null|false|none|none|
|Kickoffs|integer \| null|false|none|none|
|KickoffsInEndZone|integer \| null|false|none|none|
|OffensivePlays|integer|false|none|none|
|OffensiveYards|integer|false|none|none|
|OffensiveYardsPerPlay|number|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentAssistedTackles|integer \| null|false|none|none|
|OpponentBlockedKickReturnTouchdowns|integer \| null|false|none|none|
|OpponentBlockedKickReturnYards|integer \| null|false|none|none|
|OpponentBlockedKicks|integer \| null|false|none|none|
|OpponentCompletionPercentage|number|false|none|none|
|OpponentExtraPointKickingAttempts|integer \| null|false|none|none|
|OpponentExtraPointKickingConversions|integer \| null|false|none|none|
|OpponentExtraPointPassingAttempts|integer \| null|false|none|none|
|OpponentExtraPointPassingConversions|integer \| null|false|none|none|
|OpponentExtraPointPercentage|number \| null|false|none|none|
|OpponentExtraPointRushingAttempts|integer \| null|false|none|none|
|OpponentExtraPointRushingConversions|integer \| null|false|none|none|
|OpponentExtraPointsHadBlocked|integer \| null|false|none|none|
|OpponentFieldGoalAttempts|integer \| null|false|none|none|
|OpponentFieldGoalPercentage|number \| null|false|none|none|
|OpponentFieldGoalReturnTouchdowns|integer \| null|false|none|none|
|OpponentFieldGoalReturnYards|integer \| null|false|none|none|
|OpponentFieldGoalsHadBlocked|integer \| null|false|none|none|
|OpponentFieldGoalsMade|integer \| null|false|none|none|
|OpponentFirstDowns|integer \| null|false|none|none|
|OpponentFirstDownsByPassing|integer \| null|false|none|none|
|OpponentFirstDownsByPenalty|integer \| null|false|none|none|
|OpponentFirstDownsByRushing|integer \| null|false|none|none|
|OpponentFourthDownAttempts|integer \| null|false|none|none|
|OpponentFourthDownConversions|integer \| null|false|none|none|
|OpponentFourthDownPercentage|number \| null|false|none|none|
|OpponentFumbleReturnTouchdowns|integer \| null|false|none|none|
|OpponentFumbleReturnYards|integer \| null|false|none|none|
|OpponentFumbles|integer \| null|false|none|none|
|OpponentFumblesForced|integer \| null|false|none|none|
|OpponentFumblesLost|integer \| null|false|none|none|
|OpponentFumblesRecovered|integer \| null|false|none|none|
|OpponentGiveaways|integer|false|none|none|
|OpponentGoalToGoAttempts|integer \| null|false|none|none|
|OpponentGoalToGoConversions|integer \| null|false|none|none|
|OpponentGoalToGoPercentage|number \| null|false|none|none|
|OpponentID|integer \| null|false|none|none|
|OpponentInterceptionReturnTouchdowns|integer \| null|false|none|none|
|OpponentInterceptionReturnYards|integer \| null|false|none|none|
|OpponentInterceptionReturns|integer \| null|false|none|none|
|OpponentKickReturnAverage|number \| null|false|none|none|
|OpponentKickReturnLong|integer \| null|false|none|none|
|OpponentKickReturnTouchdowns|integer \| null|false|none|none|
|OpponentKickReturnYards|integer \| null|false|none|none|
|OpponentKickReturns|integer \| null|false|none|none|
|OpponentKickoffTouchbacks|integer \| null|false|none|none|
|OpponentKickoffs|integer \| null|false|none|none|
|OpponentKickoffsInEndZone|integer \| null|false|none|none|
|OpponentOffensivePlays|integer|false|none|none|
|OpponentOffensiveYards|integer|false|none|none|
|OpponentOffensiveYardsPerPlay|number|false|none|none|
|OpponentPasserRating|number \| null|false|none|none|
|OpponentPassesDefended|integer \| null|false|none|none|
|OpponentPassingAttempts|integer \| null|false|none|none|
|OpponentPassingCompletions|integer \| null|false|none|none|
|OpponentPassingDropbacks|integer \| null|false|none|none|
|OpponentPassingInterceptionPercentage|number \| null|false|none|none|
|OpponentPassingInterceptions|integer \| null|false|none|none|
|OpponentPassingTouchdowns|integer \| null|false|none|none|
|OpponentPassingYards|integer \| null|false|none|none|
|OpponentPassingYardsPerAttempt|number|false|none|none|
|OpponentPassingYardsPerCompletion|number|false|none|none|
|OpponentPenalties|integer \| null|false|none|none|
|OpponentPenaltyYards|integer \| null|false|none|none|
|OpponentPuntAverage|number|false|none|none|
|OpponentPuntNetAverage|number \| null|false|none|none|
|OpponentPuntNetYards|integer \| null|false|none|none|
|OpponentPuntReturnAverage|number \| null|false|none|none|
|OpponentPuntReturnLong|integer \| null|false|none|none|
|OpponentPuntReturnTouchdowns|integer \| null|false|none|none|
|OpponentPuntReturnYards|integer \| null|false|none|none|
|OpponentPuntReturns|integer \| null|false|none|none|
|OpponentPuntYards|integer \| null|false|none|none|
|OpponentPunts|integer \| null|false|none|none|
|OpponentPuntsHadBlocked|integer \| null|false|none|none|
|OpponentQuarterbackHits|integer \| null|false|none|none|
|OpponentQuarterbackHitsDifferential|integer \| null|false|none|none|
|OpponentQuarterbackHitsPercentage|number \| null|false|none|none|
|OpponentQuarterbackSacksDifferential|integer \| null|false|none|none|
|OpponentRedZoneAttempts|integer \| null|false|none|none|
|OpponentRedZoneConversions|integer \| null|false|none|none|
|OpponentRedZonePercentage|number \| null|false|none|none|
|OpponentReturnYards|integer \| null|false|none|none|
|OpponentRushingAttempts|integer \| null|false|none|none|
|OpponentRushingTouchdowns|integer \| null|false|none|none|
|OpponentRushingYards|integer \| null|false|none|none|
|OpponentRushingYardsPerAttempt|number|false|none|none|
|OpponentSackYards|integer \| null|false|none|none|
|OpponentSacks|integer \| null|false|none|none|
|OpponentSafeties|integer \| null|false|none|none|
|OpponentScore|integer|false|none|none|
|OpponentScoreOvertime|integer|false|none|none|
|OpponentScoreQuarter1|integer \| null|false|none|none|
|OpponentScoreQuarter2|integer \| null|false|none|none|
|OpponentScoreQuarter3|integer \| null|false|none|none|
|OpponentScoreQuarter4|integer \| null|false|none|none|
|OpponentSoloTackles|integer \| null|false|none|none|
|OpponentTacklesForLoss|integer \| null|false|none|none|
|OpponentTacklesForLossDifferential|integer \| null|false|none|none|
|OpponentTacklesForLossPercentage|number \| null|false|none|none|
|OpponentTakeaways|integer|false|none|none|
|OpponentThirdDownAttempts|integer \| null|false|none|none|
|OpponentThirdDownConversions|integer \| null|false|none|none|
|OpponentThirdDownPercentage|number \| null|false|none|none|
|OpponentTimeOfPossession|string \| null|false|none|none|
|OpponentTimeOfPossessionMinutes|integer \| null|false|none|none|
|OpponentTimeOfPossessionSeconds|integer \| null|false|none|none|
|OpponentTimesSacked|integer \| null|false|none|none|
|OpponentTimesSackedPercentage|number|false|none|none|
|OpponentTimesSackedYards|integer \| null|false|none|none|
|OpponentTouchdowns|integer \| null|false|none|none|
|OpponentTurnoverDifferential|integer|false|none|none|
|OpponentTwoPointConversionReturns|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PasserRating|number \| null|false|none|none|
|PassesDefended|integer \| null|false|none|none|
|PassingAttempts|integer \| null|false|none|none|
|PassingCompletions|integer \| null|false|none|none|
|PassingDropbacks|integer \| null|false|none|none|
|PassingInterceptionPercentage|number \| null|false|none|none|
|PassingInterceptions|integer \| null|false|none|none|
|PassingTouchdowns|integer \| null|false|none|none|
|PassingYards|integer \| null|false|none|none|
|PassingYardsPerAttempt|number|false|none|none|
|PassingYardsPerCompletion|number|false|none|none|
|Penalties|integer \| null|false|none|none|
|PenaltyYardDifferential|integer \| null|false|none|none|
|PenaltyYards|integer \| null|false|none|none|
|PlayingSurface|string \| null|false|none|none|
|PointDifferential|integer \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|PuntAverage|number|false|none|none|
|PuntNetAverage|number \| null|false|none|none|
|PuntNetYards|integer \| null|false|none|none|
|PuntReturnAverage|number \| null|false|none|none|
|PuntReturnLong|integer \| null|false|none|none|
|PuntReturnTouchdowns|integer \| null|false|none|none|
|PuntReturnYardDifferential|integer \| null|false|none|none|
|PuntReturnYards|integer \| null|false|none|none|
|PuntReturns|integer \| null|false|none|none|
|PuntYards|integer \| null|false|none|none|
|Punts|integer \| null|false|none|none|
|PuntsHadBlocked|integer \| null|false|none|none|
|QuarterbackHits|integer \| null|false|none|none|
|QuarterbackHitsDifferential|integer \| null|false|none|none|
|QuarterbackHitsPercentage|number \| null|false|none|none|
|QuarterbackSacksDifferential|integer|false|none|none|
|RedZoneAttempts|integer \| null|false|none|none|
|RedZoneConversions|integer \| null|false|none|none|
|RedZonePercentage|number \| null|false|none|none|
|ReturnYards|integer \| null|false|none|none|
|RushingAttempts|integer \| null|false|none|none|
|RushingTouchdowns|integer \| null|false|none|none|
|RushingYards|integer \| null|false|none|none|
|RushingYardsPerAttempt|number|false|none|none|
|SackYards|integer \| null|false|none|none|
|Sacks|integer \| null|false|none|none|
|Safeties|integer \| null|false|none|none|
|Score|integer|false|none|none|
|ScoreID|integer|false|none|none|
|ScoreOvertime|integer|false|none|none|
|ScoreQuarter1|integer \| null|false|none|none|
|ScoreQuarter2|integer \| null|false|none|none|
|ScoreQuarter3|integer \| null|false|none|none|
|ScoreQuarter4|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SoloTackles|integer \| null|false|none|none|
|Stadium|string \| null|false|none|none|
|TacklesForLoss|integer \| null|false|none|none|
|TacklesForLossDifferential|integer \| null|false|none|none|
|TacklesForLossPercentage|number \| null|false|none|none|
|Takeaways|integer|false|none|none|
|Team|string \| null|false|none|none|
|TeamGameID|integer|false|none|none|
|TeamID|integer \| null|false|none|none|
|TeamName|string \| null|false|none|none|
|Temperature|integer \| null|false|none|none|
|ThirdDownAttempts|integer \| null|false|none|none|
|ThirdDownConversions|integer \| null|false|none|none|
|ThirdDownPercentage|number \| null|false|none|none|
|TimeOfPossession|string \| null|false|none|none|
|TimeOfPossessionMinutes|integer \| null|false|none|none|
|TimeOfPossessionSeconds|integer \| null|false|none|none|
|TimesSacked|integer \| null|false|none|none|
|TimesSackedPercentage|number|false|none|none|
|TimesSackedYards|integer \| null|false|none|none|
|TotalScore|integer|false|none|none|
|Touchdowns|integer \| null|false|none|none|
|TurnoverDifferential|integer|false|none|none|
|TwoPointConversionReturns|integer \| null|false|none|none|
|Week|integer \| null|false|none|none|
|WindSpeed|integer \| null|false|none|none|

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "AssistedTackles": 0,
  "BlockedKickReturnTouchdowns": 0,
  "BlockedKickReturnYards": 0,
  "BlockedKicks": 0,
  "CompletionPercentage": 0,
  "ExtraPointKickingAttempts": 0,
  "ExtraPointKickingConversions": 0,
  "ExtraPointPassingAttempts": 0,
  "ExtraPointPassingConversions": 0,
  "ExtraPointPercentage": 0,
  "ExtraPointRushingAttempts": 0,
  "ExtraPointRushingConversions": 0,
  "ExtraPointsHadBlocked": 0,
  "FieldGoalAttempts": 0,
  "FieldGoalPercentage": 0,
  "FieldGoalReturnTouchdowns": 0,
  "FieldGoalReturnYards": 0,
  "FieldGoalsHadBlocked": 0,
  "FieldGoalsMade": 0,
  "FirstDowns": 0,
  "FirstDownsByPassing": 0,
  "FirstDownsByPenalty": 0,
  "FirstDownsByRushing": 0,
  "FourthDownAttempts": 0,
  "FourthDownConversions": 0,
  "FourthDownPercentage": 0,
  "FumbleReturnTouchdowns": 0,
  "FumbleReturnYards": 0,
  "Fumbles": 0,
  "FumblesForced": 0,
  "FumblesLost": 0,
  "FumblesRecovered": 0,
  "Games": 0,
  "Giveaways": 0,
  "GlobalTeamID": 0,
  "GoalToGoAttempts": 0,
  "GoalToGoConversions": 0,
  "GoalToGoPercentage": 0,
  "Humidity": 0,
  "InterceptionReturnTouchdowns": 0,
  "InterceptionReturnYards": 0,
  "InterceptionReturns": 0,
  "KickReturnAverage": 0,
  "KickReturnLong": 0,
  "KickReturnTouchdowns": 0,
  "KickReturnYardDifferential": 0,
  "KickReturnYards": 0,
  "KickReturns": 0,
  "KickoffTouchbacks": 0,
  "Kickoffs": 0,
  "KickoffsInEndZone": 0,
  "OffensivePlays": 0,
  "OffensiveYards": 0,
  "OffensiveYardsPerPlay": 0,
  "OpponentAssistedTackles": 0,
  "OpponentBlockedKickReturnTouchdowns": 0,
  "OpponentBlockedKickReturnYards": 0,
  "OpponentBlockedKicks": 0,
  "OpponentCompletionPercentage": 0,
  "OpponentExtraPointKickingAttempts": 0,
  "OpponentExtraPointKickingConversions": 0,
  "OpponentExtraPointPassingAttempts": 0,
  "OpponentExtraPointPassingConversions": 0,
  "OpponentExtraPointPercentage": 0,
  "OpponentExtraPointRushingAttempts": 0,
  "OpponentExtraPointRushingConversions": 0,
  "OpponentExtraPointsHadBlocked": 0,
  "OpponentFieldGoalAttempts": 0,
  "OpponentFieldGoalPercentage": 0,
  "OpponentFieldGoalReturnTouchdowns": 0,
  "OpponentFieldGoalReturnYards": 0,
  "OpponentFieldGoalsHadBlocked": 0,
  "OpponentFieldGoalsMade": 0,
  "OpponentFirstDowns": 0,
  "OpponentFirstDownsByPassing": 0,
  "OpponentFirstDownsByPenalty": 0,
  "OpponentFirstDownsByRushing": 0,
  "OpponentFourthDownAttempts": 0,
  "OpponentFourthDownConversions": 0,
  "OpponentFourthDownPercentage": 0,
  "OpponentFumbleReturnTouchdowns": 0,
  "OpponentFumbleReturnYards": 0,
  "OpponentFumbles": 0,
  "OpponentFumblesForced": 0,
  "OpponentFumblesLost": 0,
  "OpponentFumblesRecovered": 0,
  "OpponentGiveaways": 0,
  "OpponentGoalToGoAttempts": 0,
  "OpponentGoalToGoConversions": 0,
  "OpponentGoalToGoPercentage": 0,
  "OpponentInterceptionReturnTouchdowns": 0,
  "OpponentInterceptionReturnYards": 0,
  "OpponentInterceptionReturns": 0,
  "OpponentKickReturnAverage": 0,
  "OpponentKickReturnLong": 0,
  "OpponentKickReturnTouchdowns": 0,
  "OpponentKickReturnYards": 0,
  "OpponentKickReturns": 0,
  "OpponentKickoffTouchbacks": 0,
  "OpponentKickoffs": 0,
  "OpponentKickoffsInEndZone": 0,
  "OpponentOffensivePlays": 0,
  "OpponentOffensiveYards": 0,
  "OpponentOffensiveYardsPerPlay": 0,
  "OpponentPasserRating": 0,
  "OpponentPassesDefended": 0,
  "OpponentPassingAttempts": 0,
  "OpponentPassingCompletions": 0,
  "OpponentPassingDropbacks": 0,
  "OpponentPassingInterceptionPercentage": 0,
  "OpponentPassingInterceptions": 0,
  "OpponentPassingTouchdowns": 0,
  "OpponentPassingYards": 0,
  "OpponentPassingYardsPerAttempt": 0,
  "OpponentPassingYardsPerCompletion": 0,
  "OpponentPenalties": 0,
  "OpponentPenaltyYards": 0,
  "OpponentPuntAverage": 0,
  "OpponentPuntNetAverage": 0,
  "OpponentPuntNetYards": 0,
  "OpponentPuntReturnAverage": 0,
  "OpponentPuntReturnLong": 0,
  "OpponentPuntReturnTouchdowns": 0,
  "OpponentPuntReturnYards": 0,
  "OpponentPuntReturns": 0,
  "OpponentPuntYards": 0,
  "OpponentPunts": 0,
  "OpponentPuntsHadBlocked": 0,
  "OpponentQuarterbackHits": 0,
  "OpponentQuarterbackHitsDifferential": 0,
  "OpponentQuarterbackHitsPercentage": 0,
  "OpponentQuarterbackSacksDifferential": 0,
  "OpponentRedZoneAttempts": 0,
  "OpponentRedZoneConversions": 0,
  "OpponentRedZonePercentage": 0,
  "OpponentReturnYards": 0,
  "OpponentRushingAttempts": 0,
  "OpponentRushingTouchdowns": 0,
  "OpponentRushingYards": 0,
  "OpponentRushingYardsPerAttempt": 0,
  "OpponentSackYards": 0,
  "OpponentSacks": 0,
  "OpponentSafeties": 0,
  "OpponentScore": 0,
  "OpponentScoreOvertime": 0,
  "OpponentScoreQuarter1": 0,
  "OpponentScoreQuarter2": 0,
  "OpponentScoreQuarter3": 0,
  "OpponentScoreQuarter4": 0,
  "OpponentSoloTackles": 0,
  "OpponentTacklesForLoss": 0,
  "OpponentTacklesForLossDifferential": 0,
  "OpponentTacklesForLossPercentage": 0,
  "OpponentTakeaways": 0,
  "OpponentThirdDownAttempts": 0,
  "OpponentThirdDownConversions": 0,
  "OpponentThirdDownPercentage": 0,
  "OpponentTimeOfPossession": "string",
  "OpponentTimesSacked": 0,
  "OpponentTimesSackedPercentage": 0,
  "OpponentTimesSackedYards": 0,
  "OpponentTouchdowns": 0,
  "OpponentTurnoverDifferential": 0,
  "OpponentTwoPointConversionReturns": 0,
  "OverUnder": 0,
  "PasserRating": 0,
  "PassesDefended": 0,
  "PassingAttempts": 0,
  "PassingCompletions": 0,
  "PassingDropbacks": 0,
  "PassingInterceptionPercentage": 0,
  "PassingInterceptions": 0,
  "PassingTouchdowns": 0,
  "PassingYards": 0,
  "PassingYardsPerAttempt": 0,
  "PassingYardsPerCompletion": 0,
  "Penalties": 0,
  "PenaltyYardDifferential": 0,
  "PenaltyYards": 0,
  "PointDifferential": 0,
  "PointSpread": 0,
  "PuntAverage": 0,
  "PuntNetAverage": 0,
  "PuntNetYards": 0,
  "PuntReturnAverage": 0,
  "PuntReturnLong": 0,
  "PuntReturnTouchdowns": 0,
  "PuntReturnYardDifferential": 0,
  "PuntReturnYards": 0,
  "PuntReturns": 0,
  "PuntYards": 0,
  "Punts": 0,
  "PuntsHadBlocked": 0,
  "QuarterbackHits": 0,
  "QuarterbackHitsDifferential": 0,
  "QuarterbackHitsPercentage": 0,
  "QuarterbackSacksDifferential": 0,
  "RedZoneAttempts": 0,
  "RedZoneConversions": 0,
  "RedZonePercentage": 0,
  "ReturnYards": 0,
  "RushingAttempts": 0,
  "RushingTouchdowns": 0,
  "RushingYards": 0,
  "RushingYardsPerAttempt": 0,
  "SackYards": 0,
  "Sacks": 0,
  "Safeties": 0,
  "Score": 0,
  "ScoreOvertime": 0,
  "ScoreQuarter1": 0,
  "ScoreQuarter2": 0,
  "ScoreQuarter3": 0,
  "ScoreQuarter4": 0,
  "Season": 0,
  "SeasonType": 0,
  "SoloTackles": 0,
  "TacklesForLoss": 0,
  "TacklesForLossDifferential": 0,
  "TacklesForLossPercentage": 0,
  "Takeaways": 0,
  "Team": "string",
  "TeamID": 0,
  "TeamName": "string",
  "TeamSeasonID": 0,
  "TeamStatID": 0,
  "Temperature": 0,
  "ThirdDownAttempts": 0,
  "ThirdDownConversions": 0,
  "ThirdDownPercentage": 0,
  "TimeOfPossession": "string",
  "TimesSacked": 0,
  "TimesSackedPercentage": 0,
  "TimesSackedYards": 0,
  "TotalScore": 0,
  "Touchdowns": 0,
  "TurnoverDifferential": 0,
  "TwoPointConversionReturns": 0,
  "WindSpeed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssistedTackles|integer \| null|false|none|none|
|BlockedKickReturnTouchdowns|integer \| null|false|none|none|
|BlockedKickReturnYards|integer \| null|false|none|none|
|BlockedKicks|integer \| null|false|none|none|
|CompletionPercentage|number|false|none|none|
|ExtraPointKickingAttempts|integer \| null|false|none|none|
|ExtraPointKickingConversions|integer \| null|false|none|none|
|ExtraPointPassingAttempts|integer \| null|false|none|none|
|ExtraPointPassingConversions|integer \| null|false|none|none|
|ExtraPointPercentage|number \| null|false|none|none|
|ExtraPointRushingAttempts|integer \| null|false|none|none|
|ExtraPointRushingConversions|integer \| null|false|none|none|
|ExtraPointsHadBlocked|integer \| null|false|none|none|
|FieldGoalAttempts|integer \| null|false|none|none|
|FieldGoalPercentage|number \| null|false|none|none|
|FieldGoalReturnTouchdowns|integer \| null|false|none|none|
|FieldGoalReturnYards|integer \| null|false|none|none|
|FieldGoalsHadBlocked|integer \| null|false|none|none|
|FieldGoalsMade|integer \| null|false|none|none|
|FirstDowns|integer \| null|false|none|none|
|FirstDownsByPassing|integer \| null|false|none|none|
|FirstDownsByPenalty|integer \| null|false|none|none|
|FirstDownsByRushing|integer \| null|false|none|none|
|FourthDownAttempts|integer \| null|false|none|none|
|FourthDownConversions|integer \| null|false|none|none|
|FourthDownPercentage|number \| null|false|none|none|
|FumbleReturnTouchdowns|integer \| null|false|none|none|
|FumbleReturnYards|integer \| null|false|none|none|
|Fumbles|integer \| null|false|none|none|
|FumblesForced|integer \| null|false|none|none|
|FumblesLost|integer \| null|false|none|none|
|FumblesRecovered|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|Giveaways|integer|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|GoalToGoAttempts|integer \| null|false|none|none|
|GoalToGoConversions|integer \| null|false|none|none|
|GoalToGoPercentage|number \| null|false|none|none|
|Humidity|integer \| null|false|none|none|
|InterceptionReturnTouchdowns|integer \| null|false|none|none|
|InterceptionReturnYards|integer \| null|false|none|none|
|InterceptionReturns|integer \| null|false|none|none|
|KickReturnAverage|number \| null|false|none|none|
|KickReturnLong|integer \| null|false|none|none|
|KickReturnTouchdowns|integer \| null|false|none|none|
|KickReturnYardDifferential|integer \| null|false|none|none|
|KickReturnYards|integer \| null|false|none|none|
|KickReturns|integer \| null|false|none|none|
|KickoffTouchbacks|integer \| null|false|none|none|
|Kickoffs|integer \| null|false|none|none|
|KickoffsInEndZone|integer \| null|false|none|none|
|OffensivePlays|integer|false|none|none|
|OffensiveYards|integer|false|none|none|
|OffensiveYardsPerPlay|number|false|none|none|
|OpponentAssistedTackles|integer \| null|false|none|none|
|OpponentBlockedKickReturnTouchdowns|integer \| null|false|none|none|
|OpponentBlockedKickReturnYards|integer \| null|false|none|none|
|OpponentBlockedKicks|integer \| null|false|none|none|
|OpponentCompletionPercentage|number|false|none|none|
|OpponentExtraPointKickingAttempts|integer \| null|false|none|none|
|OpponentExtraPointKickingConversions|integer \| null|false|none|none|
|OpponentExtraPointPassingAttempts|integer \| null|false|none|none|
|OpponentExtraPointPassingConversions|integer \| null|false|none|none|
|OpponentExtraPointPercentage|number \| null|false|none|none|
|OpponentExtraPointRushingAttempts|integer \| null|false|none|none|
|OpponentExtraPointRushingConversions|integer \| null|false|none|none|
|OpponentExtraPointsHadBlocked|integer \| null|false|none|none|
|OpponentFieldGoalAttempts|integer \| null|false|none|none|
|OpponentFieldGoalPercentage|number \| null|false|none|none|
|OpponentFieldGoalReturnTouchdowns|integer \| null|false|none|none|
|OpponentFieldGoalReturnYards|integer \| null|false|none|none|
|OpponentFieldGoalsHadBlocked|integer \| null|false|none|none|
|OpponentFieldGoalsMade|integer \| null|false|none|none|
|OpponentFirstDowns|integer \| null|false|none|none|
|OpponentFirstDownsByPassing|integer \| null|false|none|none|
|OpponentFirstDownsByPenalty|integer \| null|false|none|none|
|OpponentFirstDownsByRushing|integer \| null|false|none|none|
|OpponentFourthDownAttempts|integer \| null|false|none|none|
|OpponentFourthDownConversions|integer \| null|false|none|none|
|OpponentFourthDownPercentage|number \| null|false|none|none|
|OpponentFumbleReturnTouchdowns|integer \| null|false|none|none|
|OpponentFumbleReturnYards|integer \| null|false|none|none|
|OpponentFumbles|integer \| null|false|none|none|
|OpponentFumblesForced|integer \| null|false|none|none|
|OpponentFumblesLost|integer \| null|false|none|none|
|OpponentFumblesRecovered|integer \| null|false|none|none|
|OpponentGiveaways|integer|false|none|none|
|OpponentGoalToGoAttempts|integer \| null|false|none|none|
|OpponentGoalToGoConversions|integer \| null|false|none|none|
|OpponentGoalToGoPercentage|number \| null|false|none|none|
|OpponentInterceptionReturnTouchdowns|integer \| null|false|none|none|
|OpponentInterceptionReturnYards|integer \| null|false|none|none|
|OpponentInterceptionReturns|integer \| null|false|none|none|
|OpponentKickReturnAverage|number \| null|false|none|none|
|OpponentKickReturnLong|integer \| null|false|none|none|
|OpponentKickReturnTouchdowns|integer \| null|false|none|none|
|OpponentKickReturnYards|integer \| null|false|none|none|
|OpponentKickReturns|integer \| null|false|none|none|
|OpponentKickoffTouchbacks|integer \| null|false|none|none|
|OpponentKickoffs|integer \| null|false|none|none|
|OpponentKickoffsInEndZone|integer \| null|false|none|none|
|OpponentOffensivePlays|integer|false|none|none|
|OpponentOffensiveYards|integer|false|none|none|
|OpponentOffensiveYardsPerPlay|number|false|none|none|
|OpponentPasserRating|number \| null|false|none|none|
|OpponentPassesDefended|integer \| null|false|none|none|
|OpponentPassingAttempts|integer \| null|false|none|none|
|OpponentPassingCompletions|integer \| null|false|none|none|
|OpponentPassingDropbacks|integer \| null|false|none|none|
|OpponentPassingInterceptionPercentage|number \| null|false|none|none|
|OpponentPassingInterceptions|integer \| null|false|none|none|
|OpponentPassingTouchdowns|integer \| null|false|none|none|
|OpponentPassingYards|integer \| null|false|none|none|
|OpponentPassingYardsPerAttempt|number|false|none|none|
|OpponentPassingYardsPerCompletion|number|false|none|none|
|OpponentPenalties|integer \| null|false|none|none|
|OpponentPenaltyYards|integer \| null|false|none|none|
|OpponentPuntAverage|number|false|none|none|
|OpponentPuntNetAverage|number \| null|false|none|none|
|OpponentPuntNetYards|integer \| null|false|none|none|
|OpponentPuntReturnAverage|number \| null|false|none|none|
|OpponentPuntReturnLong|integer \| null|false|none|none|
|OpponentPuntReturnTouchdowns|integer \| null|false|none|none|
|OpponentPuntReturnYards|integer \| null|false|none|none|
|OpponentPuntReturns|integer \| null|false|none|none|
|OpponentPuntYards|integer \| null|false|none|none|
|OpponentPunts|integer \| null|false|none|none|
|OpponentPuntsHadBlocked|integer \| null|false|none|none|
|OpponentQuarterbackHits|integer \| null|false|none|none|
|OpponentQuarterbackHitsDifferential|integer \| null|false|none|none|
|OpponentQuarterbackHitsPercentage|number \| null|false|none|none|
|OpponentQuarterbackSacksDifferential|integer \| null|false|none|none|
|OpponentRedZoneAttempts|integer \| null|false|none|none|
|OpponentRedZoneConversions|integer \| null|false|none|none|
|OpponentRedZonePercentage|number \| null|false|none|none|
|OpponentReturnYards|integer \| null|false|none|none|
|OpponentRushingAttempts|integer \| null|false|none|none|
|OpponentRushingTouchdowns|integer \| null|false|none|none|
|OpponentRushingYards|integer \| null|false|none|none|
|OpponentRushingYardsPerAttempt|number|false|none|none|
|OpponentSackYards|integer \| null|false|none|none|
|OpponentSacks|integer \| null|false|none|none|
|OpponentSafeties|integer \| null|false|none|none|
|OpponentScore|integer|false|none|none|
|OpponentScoreOvertime|integer|false|none|none|
|OpponentScoreQuarter1|integer \| null|false|none|none|
|OpponentScoreQuarter2|integer \| null|false|none|none|
|OpponentScoreQuarter3|integer \| null|false|none|none|
|OpponentScoreQuarter4|integer \| null|false|none|none|
|OpponentSoloTackles|integer \| null|false|none|none|
|OpponentTacklesForLoss|integer \| null|false|none|none|
|OpponentTacklesForLossDifferential|integer \| null|false|none|none|
|OpponentTacklesForLossPercentage|number \| null|false|none|none|
|OpponentTakeaways|integer|false|none|none|
|OpponentThirdDownAttempts|integer \| null|false|none|none|
|OpponentThirdDownConversions|integer \| null|false|none|none|
|OpponentThirdDownPercentage|number \| null|false|none|none|
|OpponentTimeOfPossession|string \| null|false|none|none|
|OpponentTimesSacked|integer \| null|false|none|none|
|OpponentTimesSackedPercentage|number|false|none|none|
|OpponentTimesSackedYards|integer \| null|false|none|none|
|OpponentTouchdowns|integer \| null|false|none|none|
|OpponentTurnoverDifferential|integer|false|none|none|
|OpponentTwoPointConversionReturns|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|PasserRating|number \| null|false|none|none|
|PassesDefended|integer \| null|false|none|none|
|PassingAttempts|integer \| null|false|none|none|
|PassingCompletions|integer \| null|false|none|none|
|PassingDropbacks|integer \| null|false|none|none|
|PassingInterceptionPercentage|number \| null|false|none|none|
|PassingInterceptions|integer \| null|false|none|none|
|PassingTouchdowns|integer \| null|false|none|none|
|PassingYards|integer \| null|false|none|none|
|PassingYardsPerAttempt|number|false|none|none|
|PassingYardsPerCompletion|number|false|none|none|
|Penalties|integer \| null|false|none|none|
|PenaltyYardDifferential|integer \| null|false|none|none|
|PenaltyYards|integer \| null|false|none|none|
|PointDifferential|integer \| null|false|none|none|
|PointSpread|number \| null|false|none|none|
|PuntAverage|number|false|none|none|
|PuntNetAverage|number \| null|false|none|none|
|PuntNetYards|integer \| null|false|none|none|
|PuntReturnAverage|number \| null|false|none|none|
|PuntReturnLong|integer \| null|false|none|none|
|PuntReturnTouchdowns|integer \| null|false|none|none|
|PuntReturnYardDifferential|integer \| null|false|none|none|
|PuntReturnYards|integer \| null|false|none|none|
|PuntReturns|integer \| null|false|none|none|
|PuntYards|integer \| null|false|none|none|
|Punts|integer \| null|false|none|none|
|PuntsHadBlocked|integer \| null|false|none|none|
|QuarterbackHits|integer \| null|false|none|none|
|QuarterbackHitsDifferential|integer \| null|false|none|none|
|QuarterbackHitsPercentage|number \| null|false|none|none|
|QuarterbackSacksDifferential|integer|false|none|none|
|RedZoneAttempts|integer \| null|false|none|none|
|RedZoneConversions|integer \| null|false|none|none|
|RedZonePercentage|number \| null|false|none|none|
|ReturnYards|integer \| null|false|none|none|
|RushingAttempts|integer \| null|false|none|none|
|RushingTouchdowns|integer \| null|false|none|none|
|RushingYards|integer \| null|false|none|none|
|RushingYardsPerAttempt|number|false|none|none|
|SackYards|integer \| null|false|none|none|
|Sacks|integer \| null|false|none|none|
|Safeties|integer \| null|false|none|none|
|Score|integer|false|none|none|
|ScoreOvertime|integer|false|none|none|
|ScoreQuarter1|integer \| null|false|none|none|
|ScoreQuarter2|integer \| null|false|none|none|
|ScoreQuarter3|integer \| null|false|none|none|
|ScoreQuarter4|integer \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|SoloTackles|integer \| null|false|none|none|
|TacklesForLoss|integer \| null|false|none|none|
|TacklesForLossDifferential|integer \| null|false|none|none|
|TacklesForLossPercentage|number \| null|false|none|none|
|Takeaways|integer|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
|TeamName|string \| null|false|none|none|
|TeamSeasonID|integer|false|none|none|
|TeamStatID|integer|false|none|none|
|Temperature|integer \| null|false|none|none|
|ThirdDownAttempts|integer \| null|false|none|none|
|ThirdDownConversions|integer \| null|false|none|none|
|ThirdDownPercentage|number \| null|false|none|none|
|TimeOfPossession|string \| null|false|none|none|
|TimesSacked|integer \| null|false|none|none|
|TimesSackedPercentage|number|false|none|none|
|TimesSackedYards|integer \| null|false|none|none|
|TotalScore|integer|false|none|none|
|Touchdowns|integer \| null|false|none|none|
|TurnoverDifferential|integer|false|none|none|
|TwoPointConversionReturns|integer \| null|false|none|none|
|WindSpeed|integer \| null|false|none|none|

<h2 id="tocS_Timeframe">Timeframe</h2>
<!-- backwards compatibility -->
<a id="schematimeframe"></a>
<a id="schema_Timeframe"></a>
<a id="tocStimeframe"></a>
<a id="tocstimeframe"></a>

```json
{
  "ApiSeason": "string",
  "ApiWeek": "string",
  "EndDate": "string",
  "FirstGameEnd": "string",
  "FirstGameStart": "string",
  "HasEnded": true,
  "HasFirstGameEnded": true,
  "HasFirstGameStarted": true,
  "HasGames": true,
  "HasLastGameEnded": true,
  "HasStarted": true,
  "LastGameEnd": "string",
  "Name": "string",
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "StartDate": "string",
  "Week": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiSeason|string \| null|false|none|none|
|ApiWeek|string \| null|false|none|none|
|EndDate|string \| null|false|none|none|
|FirstGameEnd|string \| null|false|none|none|
|FirstGameStart|string \| null|false|none|none|
|HasEnded|boolean|false|none|none|
|HasFirstGameEnded|boolean|false|none|none|
|HasFirstGameStarted|boolean|false|none|none|
|HasGames|boolean|false|none|none|
|HasLastGameEnded|boolean|false|none|none|
|HasStarted|boolean|false|none|none|
|LastGameEnd|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|ShortName|string \| null|false|none|none|
|StartDate|string \| null|false|none|none|
|Week|integer \| null|false|none|none|
