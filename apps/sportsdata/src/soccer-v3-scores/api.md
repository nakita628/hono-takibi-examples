<h1 id="soccer-v3-scores">Soccer v3 Scores v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/soccer/scores">http://azure-api.sportsdata.io/v3/soccer/scores</a>

* <a href="https://azure-api.sportsdata.io/v3/soccer/scores">https://azure-api.sportsdata.io/v3/soccer/scores</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="soccer-v3-scores-default">Default</h1>

## Memberships (Active)

<a id="opIdMembershipsActive"></a>

> Code samples

```bash
curl https://example.com/xml/ActiveMemberships \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/ActiveMemberships`

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
    "Jersey": 0,
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
    "Competitions": [
      {
        "AreaId": 0,
        "AreaName": "string",
        "CompetitionId": 0,
        "Format": "string",
        "Gender": "string",
        "Key": "string",
        "Name": "string",
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
                "Games": [
                  {
                    "Attendance": 0,
                    "AwayTeamCountryCode": "string",
                    "AwayTeamFormation": "string",
                    "AwayTeamId": 0,
                    "AwayTeamKey": "string",
                    "AwayTeamMoneyLine": 0,
                    "AwayTeamName": "string",
                    "AwayTeamPointSpreadPayout": 0,
                    "AwayTeamScore": 0,
                    "AwayTeamScoreExtraTime": 0,
                    "AwayTeamScorePenalty": 0,
                    "AwayTeamScorePeriod1": 0,
                    "AwayTeamScorePeriod2": 0,
                    "Clock": 0,
                    "ClockDisplay": "string",
                    "ClockExtra": 0,
                    "DateTime": "string",
                    "Day": "string",
                    "DrawMoneyLine": 0,
                    "GameId": 0,
                    "GlobalAwayTeamId": 0,
                    "GlobalGameId": 0,
                    "GlobalHomeTeamId": 0,
                    "Group": "string",
                    "HomeTeamCountryCode": "string",
                    "HomeTeamFormation": "string",
                    "HomeTeamId": 0,
                    "HomeTeamKey": "string",
                    "HomeTeamMoneyLine": 0,
                    "HomeTeamName": "string",
                    "HomeTeamPointSpreadPayout": 0,
                    "HomeTeamScore": 0,
                    "HomeTeamScoreExtraTime": 0,
                    "HomeTeamScorePenalty": 0,
                    "HomeTeamScorePeriod1": 0,
                    "HomeTeamScorePeriod2": 0,
                    "IsClosed": true,
                    "OverPayout": 0,
                    "OverUnder": 0,
                    "Period": "string",
                    "PlayoffAggregateScore": {
                      "Created": "string",
                      "TeamA_AggregateScore": 0,
                      "TeamA_Id": 0,
                      "TeamB_AggregateScore": 0,
                      "TeamB_Id": 0,
                      "Updated": "string",
                      "WinningTeamId": 0
                    },
                    "PointSpread": 0,
                    "RoundId": 0,
                    "Season": 0,
                    "SeasonType": 0,
                    "Status": "string",
                    "UnderPayout": 0,
                    "Updated": "string",
                    "UpdatedUtc": "string",
                    "VenueId": 0,
                    "VenueType": "string",
                    "Week": 0,
                    "Winner": "string"
                  }
                ],
                "Name": "string",
                "PlayerSeasons": [
                  {
                    "Assists": 0,
                    "BlockedShots": 0,
                    "CornersWon": 0,
                    "Crosses": 0,
                    "DefenderCleanSheets": 0,
                    "FantasyPoints": 0,
                    "FantasyPointsDraftKings": 0,
                    "FantasyPointsFanDuel": 0,
                    "FantasyPointsMondogoal": 0,
                    "FantasyPointsYahoo": 0,
                    "Fouled": 0,
                    "Fouls": 0,
                    "Games": 0,
                    "GlobalTeamId": 0,
                    "GoalkeeperCleanSheets": 0,
                    "GoalkeeperGoalsAgainst": 0,
                    "GoalkeeperSaves": 0,
                    "GoalkeeperSingleGoalAgainst": 0,
                    "GoalkeeperWins": 0,
                    "Goals": 0,
                    "Interceptions": 0,
                    "LastManTackle": 0,
                    "Minutes": 0,
                    "Name": "string",
                    "Offsides": 0,
                    "OpponentScore": 0,
                    "OwnGoals": 0,
                    "Passes": 0,
                    "PassesCompleted": 0,
                    "PenaltiesConceded": 0,
                    "PenaltiesWon": 0,
                    "PenaltyKickGoals": 0,
                    "PenaltyKickMisses": 0,
                    "PenaltyKickSaves": 0,
                    "PlayerId": 0,
                    "Position": "string",
                    "PositionCategory": "string",
                    "RedCards": 0,
                    "RoundId": 0,
                    "Score": 0,
                    "Season": 0,
                    "SeasonType": 0,
                    "ShortName": "string",
                    "Shots": 0,
                    "ShotsOnGoal": 0,
                    "Started": 0,
                    "StatId": 0,
                    "Tackles": 0,
                    "TacklesWon": 0,
                    "Team": "string",
                    "TeamId": 0,
                    "Touches": 0,
                    "Updated": "string",
                    "UpdatedUtc": "string",
                    "YellowCards": 0,
                    "YellowRedCards": 0
                  }
                ],
                "RoundId": 0,
                "Season": 0,
                "SeasonId": 0,
                "SeasonType": 0,
                "Standings": [
                  {
                    "Draws": 0,
                    "Games": 0,
                    "GlobalTeamID": 0,
                    "GoalsAgainst": 0,
                    "GoalsDifferential": 0,
                    "GoalsScored": 0,
                    "Group": "string",
                    "Losses": 0,
                    "Name": "string",
                    "Order": 0,
                    "Points": 0,
                    "RoundId": 0,
                    "Scope": "string",
                    "ShortName": "string",
                    "StandingId": 0,
                    "TeamId": 0,
                    "Wins": 0
                  }
                ],
                "StartDate": "string",
                "TeamSeasons": [
                  {
                    "Assists": 0,
                    "BlockedShots": 0,
                    "CornersWon": 0,
                    "Crosses": 0,
                    "DefenderCleanSheets": 0,
                    "FantasyPoints": 0,
                    "FantasyPointsDraftKings": 0,
                    "FantasyPointsFanDuel": 0,
                    "FantasyPointsMondogoal": 0,
                    "FantasyPointsYahoo": 0,
                    "Fouled": 0,
                    "Fouls": 0,
                    "Games": 0,
                    "GlobalTeamId": 0,
                    "GoalkeeperCleanSheets": 0,
                    "GoalkeeperGoalsAgainst": 0,
                    "GoalkeeperSaves": 0,
                    "GoalkeeperSingleGoalAgainst": 0,
                    "GoalkeeperWins": 0,
                    "Goals": 0,
                    "Interceptions": 0,
                    "LastManTackle": 0,
                    "Minutes": 0,
                    "Name": "string",
                    "Offsides": 0,
                    "OpponentScore": 0,
                    "OwnGoals": 0,
                    "Passes": 0,
                    "PassesCompleted": 0,
                    "PenaltiesConceded": 0,
                    "PenaltiesWon": 0,
                    "PenaltyKickGoals": 0,
                    "PenaltyKickMisses": 0,
                    "PenaltyKickSaves": 0,
                    "Possession": 0,
                    "RedCards": 0,
                    "RoundId": 0,
                    "Score": 0,
                    "Season": 0,
                    "SeasonType": 0,
                    "Shots": 0,
                    "ShotsOnGoal": 0,
                    "StatId": 0,
                    "Tackles": 0,
                    "TacklesWon": 0,
                    "Team": "string",
                    "TeamId": 0,
                    "Touches": 0,
                    "Updated": "string",
                    "UpdatedUtc": "string",
                    "YellowCards": 0,
                    "YellowRedCards": 0
                  }
                ],
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
    ],
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

## Canceled Memberships

<a id="opIdCanceledMemberships"></a>

> Code samples

```bash
curl https://example.com/xml/CanceledMemberships \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CanceledMemberships`

<h3 id="canceled-memberships-parameters">Parameters</h3>

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
{
  "CanceledMembershipId": 0,
  "Created": "string",
  "MembershipId": 0,
  "PlayerID": 0,
  "TeamId": 0
}
```

<h3 id="canceled-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CanceledMembership](#schemacanceledmembership)|

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

`GET /{format}/CompetitionDetails/{competition}`

<h3 id="competition-fixtures-league-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competition|path|string|true|An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.|

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
        "Games": [
          {
            "Attendance": 0,
            "AwayTeamCountryCode": "string",
            "AwayTeamFormation": "string",
            "AwayTeamId": 0,
            "AwayTeamKey": "string",
            "AwayTeamMoneyLine": 0,
            "AwayTeamName": "string",
            "AwayTeamPointSpreadPayout": 0,
            "AwayTeamScore": 0,
            "AwayTeamScoreExtraTime": 0,
            "AwayTeamScorePenalty": 0,
            "AwayTeamScorePeriod1": 0,
            "AwayTeamScorePeriod2": 0,
            "Clock": 0,
            "ClockDisplay": "string",
            "ClockExtra": 0,
            "DateTime": "string",
            "Day": "string",
            "DrawMoneyLine": 0,
            "GameId": 0,
            "GlobalAwayTeamId": 0,
            "GlobalGameId": 0,
            "GlobalHomeTeamId": 0,
            "Group": "string",
            "HomeTeamCountryCode": "string",
            "HomeTeamFormation": "string",
            "HomeTeamId": 0,
            "HomeTeamKey": "string",
            "HomeTeamMoneyLine": 0,
            "HomeTeamName": "string",
            "HomeTeamPointSpreadPayout": 0,
            "HomeTeamScore": 0,
            "HomeTeamScoreExtraTime": 0,
            "HomeTeamScorePenalty": 0,
            "HomeTeamScorePeriod1": 0,
            "HomeTeamScorePeriod2": 0,
            "IsClosed": true,
            "OverPayout": 0,
            "OverUnder": 0,
            "Period": "string",
            "PlayoffAggregateScore": {
              "Created": "string",
              "TeamA_AggregateScore": 0,
              "TeamA_Id": 0,
              "TeamB_AggregateScore": 0,
              "TeamB_Id": 0,
              "Updated": "string",
              "WinningTeamId": 0
            },
            "PointSpread": 0,
            "RoundId": 0,
            "Season": 0,
            "SeasonType": 0,
            "Status": "string",
            "UnderPayout": 0,
            "Updated": "string",
            "UpdatedUtc": "string",
            "VenueId": 0,
            "VenueType": "string",
            "Week": 0,
            "Winner": "string"
          }
        ],
        "Name": "string",
        "PlayerSeasons": [
          {
            "Assists": 0,
            "BlockedShots": 0,
            "CornersWon": 0,
            "Crosses": 0,
            "DefenderCleanSheets": 0,
            "FantasyPoints": 0,
            "FantasyPointsDraftKings": 0,
            "FantasyPointsFanDuel": 0,
            "FantasyPointsMondogoal": 0,
            "FantasyPointsYahoo": 0,
            "Fouled": 0,
            "Fouls": 0,
            "Games": 0,
            "GlobalTeamId": 0,
            "GoalkeeperCleanSheets": 0,
            "GoalkeeperGoalsAgainst": 0,
            "GoalkeeperSaves": 0,
            "GoalkeeperSingleGoalAgainst": 0,
            "GoalkeeperWins": 0,
            "Goals": 0,
            "Interceptions": 0,
            "LastManTackle": 0,
            "Minutes": 0,
            "Name": "string",
            "Offsides": 0,
            "OpponentScore": 0,
            "OwnGoals": 0,
            "Passes": 0,
            "PassesCompleted": 0,
            "PenaltiesConceded": 0,
            "PenaltiesWon": 0,
            "PenaltyKickGoals": 0,
            "PenaltyKickMisses": 0,
            "PenaltyKickSaves": 0,
            "PlayerId": 0,
            "Position": "string",
            "PositionCategory": "string",
            "RedCards": 0,
            "RoundId": 0,
            "Score": 0,
            "Season": 0,
            "SeasonType": 0,
            "ShortName": "string",
            "Shots": 0,
            "ShotsOnGoal": 0,
            "Started": 0,
            "StatId": 0,
            "Tackles": 0,
            "TacklesWon": 0,
            "Team": "string",
            "TeamId": 0,
            "Touches": 0,
            "Updated": "string",
            "UpdatedUtc": "string",
            "YellowCards": 0,
            "YellowRedCards": 0
          }
        ],
        "RoundId": 0,
        "Season": 0,
        "SeasonId": 0,
        "SeasonType": 0,
        "Standings": [
          {
            "Draws": 0,
            "Games": 0,
            "GlobalTeamID": 0,
            "GoalsAgainst": 0,
            "GoalsDifferential": 0,
            "GoalsScored": 0,
            "Group": "string",
            "Losses": 0,
            "Name": "string",
            "Order": 0,
            "Points": 0,
            "RoundId": 0,
            "Scope": "string",
            "ShortName": "string",
            "StandingId": 0,
            "TeamId": 0,
            "Wins": 0
          }
        ],
        "StartDate": "string",
        "TeamSeasons": [
          {
            "Assists": 0,
            "BlockedShots": 0,
            "CornersWon": 0,
            "Crosses": 0,
            "DefenderCleanSheets": 0,
            "FantasyPoints": 0,
            "FantasyPointsDraftKings": 0,
            "FantasyPointsFanDuel": 0,
            "FantasyPointsMondogoal": 0,
            "FantasyPointsYahoo": 0,
            "Fouled": 0,
            "Fouls": 0,
            "Games": 0,
            "GlobalTeamId": 0,
            "GoalkeeperCleanSheets": 0,
            "GoalkeeperGoalsAgainst": 0,
            "GoalkeeperSaves": 0,
            "GoalkeeperSingleGoalAgainst": 0,
            "GoalkeeperWins": 0,
            "Goals": 0,
            "Interceptions": 0,
            "LastManTackle": 0,
            "Minutes": 0,
            "Name": "string",
            "Offsides": 0,
            "OpponentScore": 0,
            "OwnGoals": 0,
            "Passes": 0,
            "PassesCompleted": 0,
            "PenaltiesConceded": 0,
            "PenaltiesWon": 0,
            "PenaltyKickGoals": 0,
            "PenaltyKickMisses": 0,
            "PenaltyKickSaves": 0,
            "Possession": 0,
            "RedCards": 0,
            "RoundId": 0,
            "Score": 0,
            "Season": 0,
            "SeasonType": 0,
            "Shots": 0,
            "ShotsOnGoal": 0,
            "StatId": 0,
            "Tackles": 0,
            "TacklesWon": 0,
            "Team": "string",
            "TeamId": 0,
            "Touches": 0,
            "Updated": "string",
            "UpdatedUtc": "string",
            "YellowCards": 0,
            "YellowRedCards": 0
          }
        ],
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
      "Attendance": 0,
      "AwayTeamCountryCode": "string",
      "AwayTeamFormation": "string",
      "AwayTeamId": 0,
      "AwayTeamKey": "string",
      "AwayTeamMoneyLine": 0,
      "AwayTeamName": "string",
      "AwayTeamPointSpreadPayout": 0,
      "AwayTeamScore": 0,
      "AwayTeamScoreExtraTime": 0,
      "AwayTeamScorePenalty": 0,
      "AwayTeamScorePeriod1": 0,
      "AwayTeamScorePeriod2": 0,
      "Clock": 0,
      "ClockDisplay": "string",
      "ClockExtra": 0,
      "DateTime": "string",
      "Day": "string",
      "DrawMoneyLine": 0,
      "GameId": 0,
      "GlobalAwayTeamId": 0,
      "GlobalGameId": 0,
      "GlobalHomeTeamId": 0,
      "Group": "string",
      "HomeTeamCountryCode": "string",
      "HomeTeamFormation": "string",
      "HomeTeamId": 0,
      "HomeTeamKey": "string",
      "HomeTeamMoneyLine": 0,
      "HomeTeamName": "string",
      "HomeTeamPointSpreadPayout": 0,
      "HomeTeamScore": 0,
      "HomeTeamScoreExtraTime": 0,
      "HomeTeamScorePenalty": 0,
      "HomeTeamScorePeriod1": 0,
      "HomeTeamScorePeriod2": 0,
      "IsClosed": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "PlayoffAggregateScore": {
        "Created": "string",
        "TeamA_AggregateScore": 0,
        "TeamA_Id": 0,
        "TeamB_AggregateScore": 0,
        "TeamB_Id": 0,
        "Updated": "string",
        "WinningTeamId": 0
      },
      "PointSpread": 0,
      "RoundId": 0,
      "Season": 0,
      "SeasonType": 0,
      "Status": "string",
      "UnderPayout": 0,
      "Updated": "string",
      "UpdatedUtc": "string",
      "VenueId": 0,
      "VenueType": "string",
      "Week": 0,
      "Winner": "string"
    }
  ],
  "Gender": "string",
  "Key": "string",
  "Name": "string",
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
          "Games": [
            {
              "Attendance": 0,
              "AwayTeamCountryCode": "string",
              "AwayTeamFormation": "string",
              "AwayTeamId": 0,
              "AwayTeamKey": "string",
              "AwayTeamMoneyLine": 0,
              "AwayTeamName": "string",
              "AwayTeamPointSpreadPayout": 0,
              "AwayTeamScore": 0,
              "AwayTeamScoreExtraTime": 0,
              "AwayTeamScorePenalty": 0,
              "AwayTeamScorePeriod1": 0,
              "AwayTeamScorePeriod2": 0,
              "Clock": 0,
              "ClockDisplay": "string",
              "ClockExtra": 0,
              "DateTime": "string",
              "Day": "string",
              "DrawMoneyLine": 0,
              "GameId": 0,
              "GlobalAwayTeamId": 0,
              "GlobalGameId": 0,
              "GlobalHomeTeamId": 0,
              "Group": "string",
              "HomeTeamCountryCode": "string",
              "HomeTeamFormation": "string",
              "HomeTeamId": 0,
              "HomeTeamKey": "string",
              "HomeTeamMoneyLine": 0,
              "HomeTeamName": "string",
              "HomeTeamPointSpreadPayout": 0,
              "HomeTeamScore": 0,
              "HomeTeamScoreExtraTime": 0,
              "HomeTeamScorePenalty": 0,
              "HomeTeamScorePeriod1": 0,
              "HomeTeamScorePeriod2": 0,
              "IsClosed": true,
              "OverPayout": 0,
              "OverUnder": 0,
              "Period": "string",
              "PlayoffAggregateScore": {
                "Created": "string",
                "TeamA_AggregateScore": 0,
                "TeamA_Id": 0,
                "TeamB_AggregateScore": 0,
                "TeamB_Id": 0,
                "Updated": "string",
                "WinningTeamId": 0
              },
              "PointSpread": 0,
              "RoundId": 0,
              "Season": 0,
              "SeasonType": 0,
              "Status": "string",
              "UnderPayout": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "VenueId": 0,
              "VenueType": "string",
              "Week": 0,
              "Winner": "string"
            }
          ],
          "Name": "string",
          "PlayerSeasons": [
            {
              "Assists": 0,
              "BlockedShots": 0,
              "CornersWon": 0,
              "Crosses": 0,
              "DefenderCleanSheets": 0,
              "FantasyPoints": 0,
              "FantasyPointsDraftKings": 0,
              "FantasyPointsFanDuel": 0,
              "FantasyPointsMondogoal": 0,
              "FantasyPointsYahoo": 0,
              "Fouled": 0,
              "Fouls": 0,
              "Games": 0,
              "GlobalTeamId": 0,
              "GoalkeeperCleanSheets": 0,
              "GoalkeeperGoalsAgainst": 0,
              "GoalkeeperSaves": 0,
              "GoalkeeperSingleGoalAgainst": 0,
              "GoalkeeperWins": 0,
              "Goals": 0,
              "Interceptions": 0,
              "LastManTackle": 0,
              "Minutes": 0,
              "Name": "string",
              "Offsides": 0,
              "OpponentScore": 0,
              "OwnGoals": 0,
              "Passes": 0,
              "PassesCompleted": 0,
              "PenaltiesConceded": 0,
              "PenaltiesWon": 0,
              "PenaltyKickGoals": 0,
              "PenaltyKickMisses": 0,
              "PenaltyKickSaves": 0,
              "PlayerId": 0,
              "Position": "string",
              "PositionCategory": "string",
              "RedCards": 0,
              "RoundId": 0,
              "Score": 0,
              "Season": 0,
              "SeasonType": 0,
              "ShortName": "string",
              "Shots": 0,
              "ShotsOnGoal": 0,
              "Started": 0,
              "StatId": 0,
              "Tackles": 0,
              "TacklesWon": 0,
              "Team": "string",
              "TeamId": 0,
              "Touches": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "YellowCards": 0,
              "YellowRedCards": 0
            }
          ],
          "RoundId": 0,
          "Season": 0,
          "SeasonId": 0,
          "SeasonType": 0,
          "Standings": [
            {
              "Draws": 0,
              "Games": 0,
              "GlobalTeamID": 0,
              "GoalsAgainst": 0,
              "GoalsDifferential": 0,
              "GoalsScored": 0,
              "Group": "string",
              "Losses": 0,
              "Name": "string",
              "Order": 0,
              "Points": 0,
              "RoundId": 0,
              "Scope": "string",
              "ShortName": "string",
              "StandingId": 0,
              "TeamId": 0,
              "Wins": 0
            }
          ],
          "StartDate": "string",
          "TeamSeasons": [
            {
              "Assists": 0,
              "BlockedShots": 0,
              "CornersWon": 0,
              "Crosses": 0,
              "DefenderCleanSheets": 0,
              "FantasyPoints": 0,
              "FantasyPointsDraftKings": 0,
              "FantasyPointsFanDuel": 0,
              "FantasyPointsMondogoal": 0,
              "FantasyPointsYahoo": 0,
              "Fouled": 0,
              "Fouls": 0,
              "Games": 0,
              "GlobalTeamId": 0,
              "GoalkeeperCleanSheets": 0,
              "GoalkeeperGoalsAgainst": 0,
              "GoalkeeperSaves": 0,
              "GoalkeeperSingleGoalAgainst": 0,
              "GoalkeeperWins": 0,
              "Goals": 0,
              "Interceptions": 0,
              "LastManTackle": 0,
              "Minutes": 0,
              "Name": "string",
              "Offsides": 0,
              "OpponentScore": 0,
              "OwnGoals": 0,
              "Passes": 0,
              "PassesCompleted": 0,
              "PenaltiesConceded": 0,
              "PenaltiesWon": 0,
              "PenaltyKickGoals": 0,
              "PenaltyKickMisses": 0,
              "PenaltyKickSaves": 0,
              "Possession": 0,
              "RedCards": 0,
              "RoundId": 0,
              "Score": 0,
              "Season": 0,
              "SeasonType": 0,
              "Shots": 0,
              "ShotsOnGoal": 0,
              "StatId": 0,
              "Tackles": 0,
              "TacklesWon": 0,
              "Team": "string",
              "TeamId": 0,
              "Touches": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "YellowCards": 0,
              "YellowRedCards": 0
            }
          ],
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
      "Address": "string",
      "AreaId": 0,
      "AreaName": "string",
      "City": "string",
      "ClubColor1": "string",
      "ClubColor2": "string",
      "ClubColor3": "string",
      "Email": "string",
      "Fax": "string",
      "Founded": 0,
      "FullName": "string",
      "Gender": "string",
      "GlobalTeamId": 0,
      "Key": "string",
      "Name": "string",
      "Nickname1": "string",
      "Nickname2": "string",
      "Nickname3": "string",
      "Phone": "string",
      "Players": [
        {
          "BirthCity": "string",
          "BirthCountry": "string",
          "BirthDate": "string",
          "CommonName": "string",
          "DraftKingsPosition": "string",
          "FirstName": "string",
          "Foot": "string",
          "Gender": "string",
          "Height": 0,
          "InjuryBodyPart": "string",
          "InjuryNotes": "string",
          "InjuryStartDate": "string",
          "InjuryStatus": "string",
          "Jersey": 0,
          "LastName": "string",
          "Nationality": "string",
          "PhotoUrl": "string",
          "PlayerId": 0,
          "Position": "string",
          "PositionCategory": "string",
          "RotoWirePlayerID": 0,
          "ShortName": "string",
          "Updated": "string",
          "UsaTodayHeadshotNoBackgroundUpdated": "string",
          "UsaTodayHeadshotNoBackgroundUrl": "string",
          "UsaTodayHeadshotUpdated": "string",
          "UsaTodayHeadshotUrl": "string",
          "UsaTodayPlayerID": 0,
          "Weight": 0
        }
      ],
      "TeamId": 0,
      "Type": "string",
      "VenueId": 0,
      "VenueName": "string",
      "Website": "string",
      "WikipediaLogoUrl": "string",
      "WikipediaWordMarkUrl": "string",
      "Zip": "string"
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

## Competition Hierarchy (League Hierarchy)

<a id="opIdCompetitionHierarchyLeagueHierarchy"></a>

> Code samples

```bash
curl https://example.com/xml/CompetitionHierarchy \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/CompetitionHierarchy`

<h3 id="competition-hierarchy-league-hierarchy-parameters">Parameters</h3>

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
    "Competitions": [
      {
        "AreaId": 0,
        "AreaName": "string",
        "CompetitionId": 0,
        "Format": "string",
        "Gender": "string",
        "Key": "string",
        "Name": "string",
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
                "Games": [
                  {
                    "Attendance": 0,
                    "AwayTeamCountryCode": "string",
                    "AwayTeamFormation": "string",
                    "AwayTeamId": 0,
                    "AwayTeamKey": "string",
                    "AwayTeamMoneyLine": 0,
                    "AwayTeamName": "string",
                    "AwayTeamPointSpreadPayout": 0,
                    "AwayTeamScore": 0,
                    "AwayTeamScoreExtraTime": 0,
                    "AwayTeamScorePenalty": 0,
                    "AwayTeamScorePeriod1": 0,
                    "AwayTeamScorePeriod2": 0,
                    "Clock": 0,
                    "ClockDisplay": "string",
                    "ClockExtra": 0,
                    "DateTime": "string",
                    "Day": "string",
                    "DrawMoneyLine": 0,
                    "GameId": 0,
                    "GlobalAwayTeamId": 0,
                    "GlobalGameId": 0,
                    "GlobalHomeTeamId": 0,
                    "Group": "string",
                    "HomeTeamCountryCode": "string",
                    "HomeTeamFormation": "string",
                    "HomeTeamId": 0,
                    "HomeTeamKey": "string",
                    "HomeTeamMoneyLine": 0,
                    "HomeTeamName": "string",
                    "HomeTeamPointSpreadPayout": 0,
                    "HomeTeamScore": 0,
                    "HomeTeamScoreExtraTime": 0,
                    "HomeTeamScorePenalty": 0,
                    "HomeTeamScorePeriod1": 0,
                    "HomeTeamScorePeriod2": 0,
                    "IsClosed": true,
                    "OverPayout": 0,
                    "OverUnder": 0,
                    "Period": "string",
                    "PlayoffAggregateScore": {
                      "Created": "string",
                      "TeamA_AggregateScore": 0,
                      "TeamA_Id": 0,
                      "TeamB_AggregateScore": 0,
                      "TeamB_Id": 0,
                      "Updated": "string",
                      "WinningTeamId": 0
                    },
                    "PointSpread": 0,
                    "RoundId": 0,
                    "Season": 0,
                    "SeasonType": 0,
                    "Status": "string",
                    "UnderPayout": 0,
                    "Updated": "string",
                    "UpdatedUtc": "string",
                    "VenueId": 0,
                    "VenueType": "string",
                    "Week": 0,
                    "Winner": "string"
                  }
                ],
                "Name": "string",
                "PlayerSeasons": [
                  {
                    "Assists": 0,
                    "BlockedShots": 0,
                    "CornersWon": 0,
                    "Crosses": 0,
                    "DefenderCleanSheets": 0,
                    "FantasyPoints": 0,
                    "FantasyPointsDraftKings": 0,
                    "FantasyPointsFanDuel": 0,
                    "FantasyPointsMondogoal": 0,
                    "FantasyPointsYahoo": 0,
                    "Fouled": 0,
                    "Fouls": 0,
                    "Games": 0,
                    "GlobalTeamId": 0,
                    "GoalkeeperCleanSheets": 0,
                    "GoalkeeperGoalsAgainst": 0,
                    "GoalkeeperSaves": 0,
                    "GoalkeeperSingleGoalAgainst": 0,
                    "GoalkeeperWins": 0,
                    "Goals": 0,
                    "Interceptions": 0,
                    "LastManTackle": 0,
                    "Minutes": 0,
                    "Name": "string",
                    "Offsides": 0,
                    "OpponentScore": 0,
                    "OwnGoals": 0,
                    "Passes": 0,
                    "PassesCompleted": 0,
                    "PenaltiesConceded": 0,
                    "PenaltiesWon": 0,
                    "PenaltyKickGoals": 0,
                    "PenaltyKickMisses": 0,
                    "PenaltyKickSaves": 0,
                    "PlayerId": 0,
                    "Position": "string",
                    "PositionCategory": "string",
                    "RedCards": 0,
                    "RoundId": 0,
                    "Score": 0,
                    "Season": 0,
                    "SeasonType": 0,
                    "ShortName": "string",
                    "Shots": 0,
                    "ShotsOnGoal": 0,
                    "Started": 0,
                    "StatId": 0,
                    "Tackles": 0,
                    "TacklesWon": 0,
                    "Team": "string",
                    "TeamId": 0,
                    "Touches": 0,
                    "Updated": "string",
                    "UpdatedUtc": "string",
                    "YellowCards": 0,
                    "YellowRedCards": 0
                  }
                ],
                "RoundId": 0,
                "Season": 0,
                "SeasonId": 0,
                "SeasonType": 0,
                "Standings": [
                  {
                    "Draws": 0,
                    "Games": 0,
                    "GlobalTeamID": 0,
                    "GoalsAgainst": 0,
                    "GoalsDifferential": 0,
                    "GoalsScored": 0,
                    "Group": "string",
                    "Losses": 0,
                    "Name": "string",
                    "Order": 0,
                    "Points": 0,
                    "RoundId": 0,
                    "Scope": "string",
                    "ShortName": "string",
                    "StandingId": 0,
                    "TeamId": 0,
                    "Wins": 0
                  }
                ],
                "StartDate": "string",
                "TeamSeasons": [
                  {
                    "Assists": 0,
                    "BlockedShots": 0,
                    "CornersWon": 0,
                    "Crosses": 0,
                    "DefenderCleanSheets": 0,
                    "FantasyPoints": 0,
                    "FantasyPointsDraftKings": 0,
                    "FantasyPointsFanDuel": 0,
                    "FantasyPointsMondogoal": 0,
                    "FantasyPointsYahoo": 0,
                    "Fouled": 0,
                    "Fouls": 0,
                    "Games": 0,
                    "GlobalTeamId": 0,
                    "GoalkeeperCleanSheets": 0,
                    "GoalkeeperGoalsAgainst": 0,
                    "GoalkeeperSaves": 0,
                    "GoalkeeperSingleGoalAgainst": 0,
                    "GoalkeeperWins": 0,
                    "Goals": 0,
                    "Interceptions": 0,
                    "LastManTackle": 0,
                    "Minutes": 0,
                    "Name": "string",
                    "Offsides": 0,
                    "OpponentScore": 0,
                    "OwnGoals": 0,
                    "Passes": 0,
                    "PassesCompleted": 0,
                    "PenaltiesConceded": 0,
                    "PenaltiesWon": 0,
                    "PenaltyKickGoals": 0,
                    "PenaltyKickMisses": 0,
                    "PenaltyKickSaves": 0,
                    "Possession": 0,
                    "RedCards": 0,
                    "RoundId": 0,
                    "Score": 0,
                    "Season": 0,
                    "SeasonType": 0,
                    "Shots": 0,
                    "ShotsOnGoal": 0,
                    "StatId": 0,
                    "Tackles": 0,
                    "TacklesWon": 0,
                    "Team": "string",
                    "TeamId": 0,
                    "Touches": 0,
                    "Updated": "string",
                    "UpdatedUtc": "string",
                    "YellowCards": 0,
                    "YellowRedCards": 0
                  }
                ],
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
    ],
    "CountryCode": "string",
    "Name": "string"
  }
]
```

<h3 id="competition-hierarchy-league-hierarchy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="competition-hierarchy-league-hierarchy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Area](#schemaarea)]|false|none|none|

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
    "Key": "string",
    "Name": "string",
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
            "Games": [
              {
                "Attendance": 0,
                "AwayTeamCountryCode": "string",
                "AwayTeamFormation": "string",
                "AwayTeamId": 0,
                "AwayTeamKey": "string",
                "AwayTeamMoneyLine": 0,
                "AwayTeamName": "string",
                "AwayTeamPointSpreadPayout": 0,
                "AwayTeamScore": 0,
                "AwayTeamScoreExtraTime": 0,
                "AwayTeamScorePenalty": 0,
                "AwayTeamScorePeriod1": 0,
                "AwayTeamScorePeriod2": 0,
                "Clock": 0,
                "ClockDisplay": "string",
                "ClockExtra": 0,
                "DateTime": "string",
                "Day": "string",
                "DrawMoneyLine": 0,
                "GameId": 0,
                "GlobalAwayTeamId": 0,
                "GlobalGameId": 0,
                "GlobalHomeTeamId": 0,
                "Group": "string",
                "HomeTeamCountryCode": "string",
                "HomeTeamFormation": "string",
                "HomeTeamId": 0,
                "HomeTeamKey": "string",
                "HomeTeamMoneyLine": 0,
                "HomeTeamName": "string",
                "HomeTeamPointSpreadPayout": 0,
                "HomeTeamScore": 0,
                "HomeTeamScoreExtraTime": 0,
                "HomeTeamScorePenalty": 0,
                "HomeTeamScorePeriod1": 0,
                "HomeTeamScorePeriod2": 0,
                "IsClosed": true,
                "OverPayout": 0,
                "OverUnder": 0,
                "Period": "string",
                "PlayoffAggregateScore": {
                  "Created": "string",
                  "TeamA_AggregateScore": 0,
                  "TeamA_Id": 0,
                  "TeamB_AggregateScore": 0,
                  "TeamB_Id": 0,
                  "Updated": "string",
                  "WinningTeamId": 0
                },
                "PointSpread": 0,
                "RoundId": 0,
                "Season": 0,
                "SeasonType": 0,
                "Status": "string",
                "UnderPayout": 0,
                "Updated": "string",
                "UpdatedUtc": "string",
                "VenueId": 0,
                "VenueType": "string",
                "Week": 0,
                "Winner": "string"
              }
            ],
            "Name": "string",
            "PlayerSeasons": [
              {
                "Assists": 0,
                "BlockedShots": 0,
                "CornersWon": 0,
                "Crosses": 0,
                "DefenderCleanSheets": 0,
                "FantasyPoints": 0,
                "FantasyPointsDraftKings": 0,
                "FantasyPointsFanDuel": 0,
                "FantasyPointsMondogoal": 0,
                "FantasyPointsYahoo": 0,
                "Fouled": 0,
                "Fouls": 0,
                "Games": 0,
                "GlobalTeamId": 0,
                "GoalkeeperCleanSheets": 0,
                "GoalkeeperGoalsAgainst": 0,
                "GoalkeeperSaves": 0,
                "GoalkeeperSingleGoalAgainst": 0,
                "GoalkeeperWins": 0,
                "Goals": 0,
                "Interceptions": 0,
                "LastManTackle": 0,
                "Minutes": 0,
                "Name": "string",
                "Offsides": 0,
                "OpponentScore": 0,
                "OwnGoals": 0,
                "Passes": 0,
                "PassesCompleted": 0,
                "PenaltiesConceded": 0,
                "PenaltiesWon": 0,
                "PenaltyKickGoals": 0,
                "PenaltyKickMisses": 0,
                "PenaltyKickSaves": 0,
                "PlayerId": 0,
                "Position": "string",
                "PositionCategory": "string",
                "RedCards": 0,
                "RoundId": 0,
                "Score": 0,
                "Season": 0,
                "SeasonType": 0,
                "ShortName": "string",
                "Shots": 0,
                "ShotsOnGoal": 0,
                "Started": 0,
                "StatId": 0,
                "Tackles": 0,
                "TacklesWon": 0,
                "Team": "string",
                "TeamId": 0,
                "Touches": 0,
                "Updated": "string",
                "UpdatedUtc": "string",
                "YellowCards": 0,
                "YellowRedCards": 0
              }
            ],
            "RoundId": 0,
            "Season": 0,
            "SeasonId": 0,
            "SeasonType": 0,
            "Standings": [
              {
                "Draws": 0,
                "Games": 0,
                "GlobalTeamID": 0,
                "GoalsAgainst": 0,
                "GoalsDifferential": 0,
                "GoalsScored": 0,
                "Group": "string",
                "Losses": 0,
                "Name": "string",
                "Order": 0,
                "Points": 0,
                "RoundId": 0,
                "Scope": "string",
                "ShortName": "string",
                "StandingId": 0,
                "TeamId": 0,
                "Wins": 0
              }
            ],
            "StartDate": "string",
            "TeamSeasons": [
              {
                "Assists": 0,
                "BlockedShots": 0,
                "CornersWon": 0,
                "Crosses": 0,
                "DefenderCleanSheets": 0,
                "FantasyPoints": 0,
                "FantasyPointsDraftKings": 0,
                "FantasyPointsFanDuel": 0,
                "FantasyPointsMondogoal": 0,
                "FantasyPointsYahoo": 0,
                "Fouled": 0,
                "Fouls": 0,
                "Games": 0,
                "GlobalTeamId": 0,
                "GoalkeeperCleanSheets": 0,
                "GoalkeeperGoalsAgainst": 0,
                "GoalkeeperSaves": 0,
                "GoalkeeperSingleGoalAgainst": 0,
                "GoalkeeperWins": 0,
                "Goals": 0,
                "Interceptions": 0,
                "LastManTackle": 0,
                "Minutes": 0,
                "Name": "string",
                "Offsides": 0,
                "OpponentScore": 0,
                "OwnGoals": 0,
                "Passes": 0,
                "PassesCompleted": 0,
                "PenaltiesConceded": 0,
                "PenaltiesWon": 0,
                "PenaltyKickGoals": 0,
                "PenaltyKickMisses": 0,
                "PenaltyKickSaves": 0,
                "Possession": 0,
                "RedCards": 0,
                "RoundId": 0,
                "Score": 0,
                "Season": 0,
                "SeasonType": 0,
                "Shots": 0,
                "ShotsOnGoal": 0,
                "StatId": 0,
                "Tackles": 0,
                "TacklesWon": 0,
                "Team": "string",
                "TeamId": 0,
                "Touches": 0,
                "Updated": "string",
                "UpdatedUtc": "string",
                "YellowCards": 0,
                "YellowRedCards": 0
              }
            ],
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

<h3 id="games-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.|

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
    "Attendance": 0,
    "AwayTeamCountryCode": "string",
    "AwayTeamFormation": "string",
    "AwayTeamId": 0,
    "AwayTeamKey": "string",
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamPointSpreadPayout": 0,
    "AwayTeamScore": 0,
    "AwayTeamScoreExtraTime": 0,
    "AwayTeamScorePenalty": 0,
    "AwayTeamScorePeriod1": 0,
    "AwayTeamScorePeriod2": 0,
    "Clock": 0,
    "ClockDisplay": "string",
    "ClockExtra": 0,
    "DateTime": "string",
    "Day": "string",
    "DrawMoneyLine": 0,
    "GameId": 0,
    "GlobalAwayTeamId": 0,
    "GlobalGameId": 0,
    "GlobalHomeTeamId": 0,
    "Group": "string",
    "HomeTeamCountryCode": "string",
    "HomeTeamFormation": "string",
    "HomeTeamId": 0,
    "HomeTeamKey": "string",
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamPointSpreadPayout": 0,
    "HomeTeamScore": 0,
    "HomeTeamScoreExtraTime": 0,
    "HomeTeamScorePenalty": 0,
    "HomeTeamScorePeriod1": 0,
    "HomeTeamScorePeriod2": 0,
    "IsClosed": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "PlayoffAggregateScore": {
      "Created": "string",
      "TeamA_AggregateScore": 0,
      "TeamA_Id": 0,
      "TeamB_AggregateScore": 0,
      "TeamB_Id": 0,
      "Updated": "string",
      "WinningTeamId": 0
    },
    "PointSpread": 0,
    "RoundId": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string",
    "UnderPayout": 0,
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
    "Jersey": 0,
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

## Memberships by Competition (Historical)

<a id="opIdMembershipsByCompetitionHistorical"></a>

> Code samples

```bash
curl https://example.com/xml/HistoricalMembershipsByCompetition/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/HistoricalMembershipsByCompetition/{competition}`

<h3 id="memberships-by-competition-historical-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competition|path|string|true|An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.|

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
    "Jersey": 0,
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

<h3 id="memberships-by-competition-historical-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-by-competition-historical-responseschema">Response Schema</h3>

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

<h3 id="memberships-by-team-historical-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|teamid|path|string|true|Unique FantasyData Team ID. <br>Example:<code>516</code>.|

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
    "Jersey": 0,
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

## Memberships by Competition (Active)

<a id="opIdMembershipsByCompetitionActive"></a>

> Code samples

```bash
curl https://example.com/xml/MembershipsByCompetition/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/MembershipsByCompetition/{competition}`

<h3 id="memberships-by-competition-active-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|competition|path|string|true|An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.|

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
    "Jersey": 0,
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

<h3 id="memberships-by-competition-active-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-by-competition-active-responseschema">Response Schema</h3>

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

<h3 id="memberships-by-team-active-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|teamid|path|string|true|Unique FantasyData Team ID. <br>Example:<code>516</code>.|

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
    "Jersey": 0,
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

<h3 id="player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>90026231</code>.|

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
  "DraftKingsPosition": "string",
  "FirstName": "string",
  "Foot": "string",
  "Gender": "string",
  "Height": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "Nationality": "string",
  "PhotoUrl": "string",
  "PlayerId": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RotoWirePlayerID": 0,
  "ShortName": "string",
  "Updated": "string",
  "UsaTodayHeadshotNoBackgroundUpdated": "string",
  "UsaTodayHeadshotNoBackgroundUrl": "string",
  "UsaTodayHeadshotUpdated": "string",
  "UsaTodayHeadshotUrl": "string",
  "UsaTodayPlayerID": 0,
  "Weight": 0
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
    "DraftKingsPosition": "string",
    "FirstName": "string",
    "Foot": "string",
    "Gender": "string",
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "Nationality": "string",
    "PhotoUrl": "string",
    "PlayerId": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RotoWirePlayerID": 0,
    "ShortName": "string",
    "Updated": "string",
    "UsaTodayHeadshotNoBackgroundUpdated": "string",
    "UsaTodayHeadshotNoBackgroundUrl": "string",
    "UsaTodayHeadshotUpdated": "string",
    "UsaTodayHeadshotUrl": "string",
    "UsaTodayPlayerID": 0,
    "Weight": 0
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

<h3 id="players-by-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|teamid|path|string|true|Unique FantasyData Team ID. <br>Example:<code>516</code>.|

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
    "DraftKingsPosition": "string",
    "FirstName": "string",
    "Foot": "string",
    "Gender": "string",
    "Height": 0,
    "InjuryBodyPart": "string",
    "InjuryNotes": "string",
    "InjuryStartDate": "string",
    "InjuryStatus": "string",
    "Jersey": 0,
    "LastName": "string",
    "Nationality": "string",
    "PhotoUrl": "string",
    "PlayerId": 0,
    "Position": "string",
    "PositionCategory": "string",
    "RotoWirePlayerID": 0,
    "ShortName": "string",
    "Updated": "string",
    "UsaTodayHeadshotNoBackgroundUpdated": "string",
    "UsaTodayHeadshotNoBackgroundUrl": "string",
    "UsaTodayHeadshotUpdated": "string",
    "UsaTodayHeadshotUrl": "string",
    "UsaTodayPlayerID": 0,
    "Weight": 0
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

## Memberships (Recently Changed)

<a id="opIdMembershipsRecentlyChanged"></a>

> Code samples

```bash
curl https://example.com/xml/RecentlyChangedMemberships/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/RecentlyChangedMemberships/{days}`

<h3 id="memberships-recently-changed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|days|path|string|true|The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code>|

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
    "Jersey": 0,
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

<h3 id="memberships-recently-changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="memberships-recently-changed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Membership](#schemamembership)]|false|none|none|

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

<h3 id="schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|roundid|path|string|true|Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc|

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
    "Attendance": 0,
    "AwayTeamCountryCode": "string",
    "AwayTeamFormation": "string",
    "AwayTeamId": 0,
    "AwayTeamKey": "string",
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamPointSpreadPayout": 0,
    "AwayTeamScore": 0,
    "AwayTeamScoreExtraTime": 0,
    "AwayTeamScorePenalty": 0,
    "AwayTeamScorePeriod1": 0,
    "AwayTeamScorePeriod2": 0,
    "Clock": 0,
    "ClockDisplay": "string",
    "ClockExtra": 0,
    "DateTime": "string",
    "Day": "string",
    "DrawMoneyLine": 0,
    "GameId": 0,
    "GlobalAwayTeamId": 0,
    "GlobalGameId": 0,
    "GlobalHomeTeamId": 0,
    "Group": "string",
    "HomeTeamCountryCode": "string",
    "HomeTeamFormation": "string",
    "HomeTeamId": 0,
    "HomeTeamKey": "string",
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamPointSpreadPayout": 0,
    "HomeTeamScore": 0,
    "HomeTeamScoreExtraTime": 0,
    "HomeTeamScorePenalty": 0,
    "HomeTeamScorePeriod1": 0,
    "HomeTeamScorePeriod2": 0,
    "IsClosed": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "PlayoffAggregateScore": {
      "Created": "string",
      "TeamA_AggregateScore": 0,
      "TeamA_Id": 0,
      "TeamB_AggregateScore": 0,
      "TeamB_Id": 0,
      "Updated": "string",
      "WinningTeamId": 0
    },
    "PointSpread": 0,
    "RoundId": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string",
    "UnderPayout": 0,
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

<h3 id="season-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|seasonid|path|string|true|Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc|

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
      "Address": "string",
      "AreaId": 0,
      "AreaName": "string",
      "City": "string",
      "ClubColor1": "string",
      "ClubColor2": "string",
      "ClubColor3": "string",
      "Email": "string",
      "Fax": "string",
      "Founded": 0,
      "FullName": "string",
      "Gender": "string",
      "GlobalTeamId": 0,
      "Key": "string",
      "Name": "string",
      "Nickname1": "string",
      "Nickname2": "string",
      "Nickname3": "string",
      "Phone": "string",
      "TeamId": 0,
      "Type": "string",
      "VenueId": 0,
      "VenueName": "string",
      "Website": "string",
      "WikipediaLogoUrl": "string",
      "WikipediaWordMarkUrl": "string",
      "Zip": "string"
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

<h3 id="standings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|roundid|path|string|true|Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc|

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
    "Draws": 0,
    "Games": 0,
    "GlobalTeamID": 0,
    "GoalsAgainst": 0,
    "GoalsDifferential": 0,
    "GoalsScored": 0,
    "Group": "string",
    "Losses": 0,
    "Name": "string",
    "Order": 0,
    "Points": 0,
    "RoundId": 0,
    "Scope": "string",
    "ShortName": "string",
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

## Team Game Stats by Date

<a id="opIdTeamGameStatsByDate"></a>

> Code samples

```bash
curl https://example.com/xml/TeamGameStatsByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamGameStatsByDate/{date}`

<h3 id="team-game-stats-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the game(s).<br><br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.|

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
    "BlockedShots": 0,
    "CornersWon": 0,
    "Crosses": 0,
    "DateTime": "string",
    "Day": "string",
    "DefenderCleanSheets": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsMondogoal": 0,
    "FantasyPointsYahoo": 0,
    "Fouled": 0,
    "Fouls": 0,
    "GameId": 0,
    "Games": 0,
    "GlobalGameId": 0,
    "GlobalOpponentId": 0,
    "GlobalTeamId": 0,
    "GoalkeeperCleanSheets": 0,
    "GoalkeeperGoalsAgainst": 0,
    "GoalkeeperSaves": 0,
    "GoalkeeperSingleGoalAgainst": 0,
    "GoalkeeperWins": 0,
    "Goals": 0,
    "HomeOrAway": "string",
    "Interceptions": 0,
    "IsGameOver": true,
    "LastManTackle": 0,
    "Minutes": 0,
    "Name": "string",
    "Offsides": 0,
    "Opponent": "string",
    "OpponentId": 0,
    "OpponentScore": 0,
    "OwnGoals": 0,
    "Passes": 0,
    "PassesCompleted": 0,
    "PenaltiesConceded": 0,
    "PenaltiesWon": 0,
    "PenaltyKickGoals": 0,
    "PenaltyKickMisses": 0,
    "PenaltyKickSaves": 0,
    "Possession": 0,
    "RedCards": 0,
    "RoundId": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "Shots": 0,
    "ShotsOnGoal": 0,
    "StatId": 0,
    "Tackles": 0,
    "TacklesWon": 0,
    "Team": "string",
    "TeamId": 0,
    "Touches": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "YellowCards": 0,
    "YellowRedCards": 0
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

## Team Season Stats

<a id="opIdTeamSeasonStats"></a>

> Code samples

```bash
curl https://example.com/xml/TeamSeasonStats/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/TeamSeasonStats/{roundid}`

<h3 id="team-season-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|roundid|path|string|true|Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc|

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
    "BlockedShots": 0,
    "CornersWon": 0,
    "Crosses": 0,
    "DefenderCleanSheets": 0,
    "FantasyPoints": 0,
    "FantasyPointsDraftKings": 0,
    "FantasyPointsFanDuel": 0,
    "FantasyPointsMondogoal": 0,
    "FantasyPointsYahoo": 0,
    "Fouled": 0,
    "Fouls": 0,
    "Games": 0,
    "GlobalTeamId": 0,
    "GoalkeeperCleanSheets": 0,
    "GoalkeeperGoalsAgainst": 0,
    "GoalkeeperSaves": 0,
    "GoalkeeperSingleGoalAgainst": 0,
    "GoalkeeperWins": 0,
    "Goals": 0,
    "Interceptions": 0,
    "LastManTackle": 0,
    "Minutes": 0,
    "Name": "string",
    "Offsides": 0,
    "OpponentScore": 0,
    "OwnGoals": 0,
    "Passes": 0,
    "PassesCompleted": 0,
    "PenaltiesConceded": 0,
    "PenaltiesWon": 0,
    "PenaltyKickGoals": 0,
    "PenaltyKickMisses": 0,
    "PenaltyKickSaves": 0,
    "Possession": 0,
    "RedCards": 0,
    "RoundId": 0,
    "Score": 0,
    "Season": 0,
    "SeasonType": 0,
    "Shots": 0,
    "ShotsOnGoal": 0,
    "StatId": 0,
    "Tackles": 0,
    "TacklesWon": 0,
    "Team": "string",
    "TeamId": 0,
    "Touches": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "YellowCards": 0,
    "YellowRedCards": 0
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

## Teams

<a id="opIdTeams"></a>

> Code samples

```bash
curl https://example.com/xml/Teams \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/Teams`

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
    "Address": "string",
    "AreaId": 0,
    "AreaName": "string",
    "City": "string",
    "ClubColor1": "string",
    "ClubColor2": "string",
    "ClubColor3": "string",
    "Email": "string",
    "Fax": "string",
    "Founded": 0,
    "FullName": "string",
    "Gender": "string",
    "GlobalTeamId": 0,
    "Key": "string",
    "Name": "string",
    "Nickname1": "string",
    "Nickname2": "string",
    "Nickname3": "string",
    "Phone": "string",
    "TeamId": 0,
    "Type": "string",
    "VenueId": 0,
    "VenueName": "string",
    "Website": "string",
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string",
    "Zip": "string"
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

## Upcoming Schedule By Player

<a id="opIdUpcomingScheduleByPlayer"></a>

> Code samples

```bash
curl https://example.com/xml/UpcomingScheduleByPlayer/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/UpcomingScheduleByPlayer/{playerid}`

<h3 id="upcoming-schedule-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>90026231</code>.|

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
    "Attendance": 0,
    "AwayTeamCountryCode": "string",
    "AwayTeamFormation": "string",
    "AwayTeamId": 0,
    "AwayTeamKey": "string",
    "AwayTeamMoneyLine": 0,
    "AwayTeamName": "string",
    "AwayTeamPointSpreadPayout": 0,
    "AwayTeamScore": 0,
    "AwayTeamScoreExtraTime": 0,
    "AwayTeamScorePenalty": 0,
    "AwayTeamScorePeriod1": 0,
    "AwayTeamScorePeriod2": 0,
    "Clock": 0,
    "ClockDisplay": "string",
    "ClockExtra": 0,
    "DateTime": "string",
    "Day": "string",
    "DrawMoneyLine": 0,
    "GameId": 0,
    "GlobalAwayTeamId": 0,
    "GlobalGameId": 0,
    "GlobalHomeTeamId": 0,
    "Group": "string",
    "HomeTeamCountryCode": "string",
    "HomeTeamFormation": "string",
    "HomeTeamId": 0,
    "HomeTeamKey": "string",
    "HomeTeamMoneyLine": 0,
    "HomeTeamName": "string",
    "HomeTeamPointSpreadPayout": 0,
    "HomeTeamScore": 0,
    "HomeTeamScoreExtraTime": 0,
    "HomeTeamScorePenalty": 0,
    "HomeTeamScorePeriod1": 0,
    "HomeTeamScorePeriod2": 0,
    "IsClosed": true,
    "OverPayout": 0,
    "OverUnder": 0,
    "Period": "string",
    "PlayoffAggregateScore": {
      "Created": "string",
      "TeamA_AggregateScore": 0,
      "TeamA_Id": 0,
      "TeamB_AggregateScore": 0,
      "TeamB_Id": 0,
      "Updated": "string",
      "WinningTeamId": 0
    },
    "PointSpread": 0,
    "RoundId": 0,
    "Season": 0,
    "SeasonType": 0,
    "Status": "string",
    "UnderPayout": 0,
    "Updated": "string",
    "UpdatedUtc": "string",
    "VenueId": 0,
    "VenueType": "string",
    "Week": 0,
    "Winner": "string"
  }
]
```

<h3 id="upcoming-schedule-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="upcoming-schedule-by-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Game](#schemagame)]|false|none|none|

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
    "Surface": "string",
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
  "Competitions": [
    {
      "AreaId": 0,
      "AreaName": "string",
      "CompetitionId": 0,
      "Format": "string",
      "Gender": "string",
      "Key": "string",
      "Name": "string",
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
              "Games": [
                {
                  "Attendance": 0,
                  "AwayTeamCountryCode": "string",
                  "AwayTeamFormation": "string",
                  "AwayTeamId": 0,
                  "AwayTeamKey": "string",
                  "AwayTeamMoneyLine": 0,
                  "AwayTeamName": "string",
                  "AwayTeamPointSpreadPayout": 0,
                  "AwayTeamScore": 0,
                  "AwayTeamScoreExtraTime": 0,
                  "AwayTeamScorePenalty": 0,
                  "AwayTeamScorePeriod1": 0,
                  "AwayTeamScorePeriod2": 0,
                  "Clock": 0,
                  "ClockDisplay": "string",
                  "ClockExtra": 0,
                  "DateTime": "string",
                  "Day": "string",
                  "DrawMoneyLine": 0,
                  "GameId": 0,
                  "GlobalAwayTeamId": 0,
                  "GlobalGameId": 0,
                  "GlobalHomeTeamId": 0,
                  "Group": "string",
                  "HomeTeamCountryCode": "string",
                  "HomeTeamFormation": "string",
                  "HomeTeamId": 0,
                  "HomeTeamKey": "string",
                  "HomeTeamMoneyLine": 0,
                  "HomeTeamName": "string",
                  "HomeTeamPointSpreadPayout": 0,
                  "HomeTeamScore": 0,
                  "HomeTeamScoreExtraTime": 0,
                  "HomeTeamScorePenalty": 0,
                  "HomeTeamScorePeriod1": 0,
                  "HomeTeamScorePeriod2": 0,
                  "IsClosed": true,
                  "OverPayout": 0,
                  "OverUnder": 0,
                  "Period": "string",
                  "PlayoffAggregateScore": {
                    "Created": "string",
                    "TeamA_AggregateScore": 0,
                    "TeamA_Id": 0,
                    "TeamB_AggregateScore": 0,
                    "TeamB_Id": 0,
                    "Updated": "string",
                    "WinningTeamId": 0
                  },
                  "PointSpread": 0,
                  "RoundId": 0,
                  "Season": 0,
                  "SeasonType": 0,
                  "Status": "string",
                  "UnderPayout": 0,
                  "Updated": "string",
                  "UpdatedUtc": "string",
                  "VenueId": 0,
                  "VenueType": "string",
                  "Week": 0,
                  "Winner": "string"
                }
              ],
              "Name": "string",
              "PlayerSeasons": [
                {
                  "Assists": 0,
                  "BlockedShots": 0,
                  "CornersWon": 0,
                  "Crosses": 0,
                  "DefenderCleanSheets": 0,
                  "FantasyPoints": 0,
                  "FantasyPointsDraftKings": 0,
                  "FantasyPointsFanDuel": 0,
                  "FantasyPointsMondogoal": 0,
                  "FantasyPointsYahoo": 0,
                  "Fouled": 0,
                  "Fouls": 0,
                  "Games": 0,
                  "GlobalTeamId": 0,
                  "GoalkeeperCleanSheets": 0,
                  "GoalkeeperGoalsAgainst": 0,
                  "GoalkeeperSaves": 0,
                  "GoalkeeperSingleGoalAgainst": 0,
                  "GoalkeeperWins": 0,
                  "Goals": 0,
                  "Interceptions": 0,
                  "LastManTackle": 0,
                  "Minutes": 0,
                  "Name": "string",
                  "Offsides": 0,
                  "OpponentScore": 0,
                  "OwnGoals": 0,
                  "Passes": 0,
                  "PassesCompleted": 0,
                  "PenaltiesConceded": 0,
                  "PenaltiesWon": 0,
                  "PenaltyKickGoals": 0,
                  "PenaltyKickMisses": 0,
                  "PenaltyKickSaves": 0,
                  "PlayerId": 0,
                  "Position": "string",
                  "PositionCategory": "string",
                  "RedCards": 0,
                  "RoundId": 0,
                  "Score": 0,
                  "Season": 0,
                  "SeasonType": 0,
                  "ShortName": "string",
                  "Shots": 0,
                  "ShotsOnGoal": 0,
                  "Started": 0,
                  "StatId": 0,
                  "Tackles": 0,
                  "TacklesWon": 0,
                  "Team": "string",
                  "TeamId": 0,
                  "Touches": 0,
                  "Updated": "string",
                  "UpdatedUtc": "string",
                  "YellowCards": 0,
                  "YellowRedCards": 0
                }
              ],
              "RoundId": 0,
              "Season": 0,
              "SeasonId": 0,
              "SeasonType": 0,
              "Standings": [
                {
                  "Draws": 0,
                  "Games": 0,
                  "GlobalTeamID": 0,
                  "GoalsAgainst": 0,
                  "GoalsDifferential": 0,
                  "GoalsScored": 0,
                  "Group": "string",
                  "Losses": 0,
                  "Name": "string",
                  "Order": 0,
                  "Points": 0,
                  "RoundId": 0,
                  "Scope": "string",
                  "ShortName": "string",
                  "StandingId": 0,
                  "TeamId": 0,
                  "Wins": 0
                }
              ],
              "StartDate": "string",
              "TeamSeasons": [
                {
                  "Assists": 0,
                  "BlockedShots": 0,
                  "CornersWon": 0,
                  "Crosses": 0,
                  "DefenderCleanSheets": 0,
                  "FantasyPoints": 0,
                  "FantasyPointsDraftKings": 0,
                  "FantasyPointsFanDuel": 0,
                  "FantasyPointsMondogoal": 0,
                  "FantasyPointsYahoo": 0,
                  "Fouled": 0,
                  "Fouls": 0,
                  "Games": 0,
                  "GlobalTeamId": 0,
                  "GoalkeeperCleanSheets": 0,
                  "GoalkeeperGoalsAgainst": 0,
                  "GoalkeeperSaves": 0,
                  "GoalkeeperSingleGoalAgainst": 0,
                  "GoalkeeperWins": 0,
                  "Goals": 0,
                  "Interceptions": 0,
                  "LastManTackle": 0,
                  "Minutes": 0,
                  "Name": "string",
                  "Offsides": 0,
                  "OpponentScore": 0,
                  "OwnGoals": 0,
                  "Passes": 0,
                  "PassesCompleted": 0,
                  "PenaltiesConceded": 0,
                  "PenaltiesWon": 0,
                  "PenaltyKickGoals": 0,
                  "PenaltyKickMisses": 0,
                  "PenaltyKickSaves": 0,
                  "Possession": 0,
                  "RedCards": 0,
                  "RoundId": 0,
                  "Score": 0,
                  "Season": 0,
                  "SeasonType": 0,
                  "Shots": 0,
                  "ShotsOnGoal": 0,
                  "StatId": 0,
                  "Tackles": 0,
                  "TacklesWon": 0,
                  "Team": "string",
                  "TeamId": 0,
                  "Touches": 0,
                  "Updated": "string",
                  "UpdatedUtc": "string",
                  "YellowCards": 0,
                  "YellowRedCards": 0
                }
              ],
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
  ],
  "CountryCode": "string",
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreaId|integer|false|none|none|
|Competitions|[[Competition](#schemacompetition)]|false|none|none|
|CountryCode|string \| null|false|none|none|
|Name|string \| null|false|none|none|

<h2 id="tocS_CanceledMembership">CanceledMembership</h2>
<!-- backwards compatibility -->
<a id="schemacanceledmembership"></a>
<a id="schema_CanceledMembership"></a>
<a id="tocScanceledmembership"></a>
<a id="tocscanceledmembership"></a>

```json
{
  "CanceledMembershipId": 0,
  "Created": "string",
  "MembershipId": 0,
  "PlayerID": 0,
  "TeamId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CanceledMembershipId|integer|false|none|none|
|Created|string \| null|false|none|none|
|MembershipId|integer|false|none|none|
|PlayerID|integer|false|none|none|
|TeamId|integer|false|none|none|

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
  "Key": "string",
  "Name": "string",
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
          "Games": [
            {
              "Attendance": 0,
              "AwayTeamCountryCode": "string",
              "AwayTeamFormation": "string",
              "AwayTeamId": 0,
              "AwayTeamKey": "string",
              "AwayTeamMoneyLine": 0,
              "AwayTeamName": "string",
              "AwayTeamPointSpreadPayout": 0,
              "AwayTeamScore": 0,
              "AwayTeamScoreExtraTime": 0,
              "AwayTeamScorePenalty": 0,
              "AwayTeamScorePeriod1": 0,
              "AwayTeamScorePeriod2": 0,
              "Clock": 0,
              "ClockDisplay": "string",
              "ClockExtra": 0,
              "DateTime": "string",
              "Day": "string",
              "DrawMoneyLine": 0,
              "GameId": 0,
              "GlobalAwayTeamId": 0,
              "GlobalGameId": 0,
              "GlobalHomeTeamId": 0,
              "Group": "string",
              "HomeTeamCountryCode": "string",
              "HomeTeamFormation": "string",
              "HomeTeamId": 0,
              "HomeTeamKey": "string",
              "HomeTeamMoneyLine": 0,
              "HomeTeamName": "string",
              "HomeTeamPointSpreadPayout": 0,
              "HomeTeamScore": 0,
              "HomeTeamScoreExtraTime": 0,
              "HomeTeamScorePenalty": 0,
              "HomeTeamScorePeriod1": 0,
              "HomeTeamScorePeriod2": 0,
              "IsClosed": true,
              "OverPayout": 0,
              "OverUnder": 0,
              "Period": "string",
              "PlayoffAggregateScore": {
                "Created": "string",
                "TeamA_AggregateScore": 0,
                "TeamA_Id": 0,
                "TeamB_AggregateScore": 0,
                "TeamB_Id": 0,
                "Updated": "string",
                "WinningTeamId": 0
              },
              "PointSpread": 0,
              "RoundId": 0,
              "Season": 0,
              "SeasonType": 0,
              "Status": "string",
              "UnderPayout": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "VenueId": 0,
              "VenueType": "string",
              "Week": 0,
              "Winner": "string"
            }
          ],
          "Name": "string",
          "PlayerSeasons": [
            {
              "Assists": 0,
              "BlockedShots": 0,
              "CornersWon": 0,
              "Crosses": 0,
              "DefenderCleanSheets": 0,
              "FantasyPoints": 0,
              "FantasyPointsDraftKings": 0,
              "FantasyPointsFanDuel": 0,
              "FantasyPointsMondogoal": 0,
              "FantasyPointsYahoo": 0,
              "Fouled": 0,
              "Fouls": 0,
              "Games": 0,
              "GlobalTeamId": 0,
              "GoalkeeperCleanSheets": 0,
              "GoalkeeperGoalsAgainst": 0,
              "GoalkeeperSaves": 0,
              "GoalkeeperSingleGoalAgainst": 0,
              "GoalkeeperWins": 0,
              "Goals": 0,
              "Interceptions": 0,
              "LastManTackle": 0,
              "Minutes": 0,
              "Name": "string",
              "Offsides": 0,
              "OpponentScore": 0,
              "OwnGoals": 0,
              "Passes": 0,
              "PassesCompleted": 0,
              "PenaltiesConceded": 0,
              "PenaltiesWon": 0,
              "PenaltyKickGoals": 0,
              "PenaltyKickMisses": 0,
              "PenaltyKickSaves": 0,
              "PlayerId": 0,
              "Position": "string",
              "PositionCategory": "string",
              "RedCards": 0,
              "RoundId": 0,
              "Score": 0,
              "Season": 0,
              "SeasonType": 0,
              "ShortName": "string",
              "Shots": 0,
              "ShotsOnGoal": 0,
              "Started": 0,
              "StatId": 0,
              "Tackles": 0,
              "TacklesWon": 0,
              "Team": "string",
              "TeamId": 0,
              "Touches": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "YellowCards": 0,
              "YellowRedCards": 0
            }
          ],
          "RoundId": 0,
          "Season": 0,
          "SeasonId": 0,
          "SeasonType": 0,
          "Standings": [
            {
              "Draws": 0,
              "Games": 0,
              "GlobalTeamID": 0,
              "GoalsAgainst": 0,
              "GoalsDifferential": 0,
              "GoalsScored": 0,
              "Group": "string",
              "Losses": 0,
              "Name": "string",
              "Order": 0,
              "Points": 0,
              "RoundId": 0,
              "Scope": "string",
              "ShortName": "string",
              "StandingId": 0,
              "TeamId": 0,
              "Wins": 0
            }
          ],
          "StartDate": "string",
          "TeamSeasons": [
            {
              "Assists": 0,
              "BlockedShots": 0,
              "CornersWon": 0,
              "Crosses": 0,
              "DefenderCleanSheets": 0,
              "FantasyPoints": 0,
              "FantasyPointsDraftKings": 0,
              "FantasyPointsFanDuel": 0,
              "FantasyPointsMondogoal": 0,
              "FantasyPointsYahoo": 0,
              "Fouled": 0,
              "Fouls": 0,
              "Games": 0,
              "GlobalTeamId": 0,
              "GoalkeeperCleanSheets": 0,
              "GoalkeeperGoalsAgainst": 0,
              "GoalkeeperSaves": 0,
              "GoalkeeperSingleGoalAgainst": 0,
              "GoalkeeperWins": 0,
              "Goals": 0,
              "Interceptions": 0,
              "LastManTackle": 0,
              "Minutes": 0,
              "Name": "string",
              "Offsides": 0,
              "OpponentScore": 0,
              "OwnGoals": 0,
              "Passes": 0,
              "PassesCompleted": 0,
              "PenaltiesConceded": 0,
              "PenaltiesWon": 0,
              "PenaltyKickGoals": 0,
              "PenaltyKickMisses": 0,
              "PenaltyKickSaves": 0,
              "Possession": 0,
              "RedCards": 0,
              "RoundId": 0,
              "Score": 0,
              "Season": 0,
              "SeasonType": 0,
              "Shots": 0,
              "ShotsOnGoal": 0,
              "StatId": 0,
              "Tackles": 0,
              "TacklesWon": 0,
              "Team": "string",
              "TeamId": 0,
              "Touches": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "YellowCards": 0,
              "YellowRedCards": 0
            }
          ],
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
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
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
        "Games": [
          {
            "Attendance": 0,
            "AwayTeamCountryCode": "string",
            "AwayTeamFormation": "string",
            "AwayTeamId": 0,
            "AwayTeamKey": "string",
            "AwayTeamMoneyLine": 0,
            "AwayTeamName": "string",
            "AwayTeamPointSpreadPayout": 0,
            "AwayTeamScore": 0,
            "AwayTeamScoreExtraTime": 0,
            "AwayTeamScorePenalty": 0,
            "AwayTeamScorePeriod1": 0,
            "AwayTeamScorePeriod2": 0,
            "Clock": 0,
            "ClockDisplay": "string",
            "ClockExtra": 0,
            "DateTime": "string",
            "Day": "string",
            "DrawMoneyLine": 0,
            "GameId": 0,
            "GlobalAwayTeamId": 0,
            "GlobalGameId": 0,
            "GlobalHomeTeamId": 0,
            "Group": "string",
            "HomeTeamCountryCode": "string",
            "HomeTeamFormation": "string",
            "HomeTeamId": 0,
            "HomeTeamKey": "string",
            "HomeTeamMoneyLine": 0,
            "HomeTeamName": "string",
            "HomeTeamPointSpreadPayout": 0,
            "HomeTeamScore": 0,
            "HomeTeamScoreExtraTime": 0,
            "HomeTeamScorePenalty": 0,
            "HomeTeamScorePeriod1": 0,
            "HomeTeamScorePeriod2": 0,
            "IsClosed": true,
            "OverPayout": 0,
            "OverUnder": 0,
            "Period": "string",
            "PlayoffAggregateScore": {
              "Created": "string",
              "TeamA_AggregateScore": 0,
              "TeamA_Id": 0,
              "TeamB_AggregateScore": 0,
              "TeamB_Id": 0,
              "Updated": "string",
              "WinningTeamId": 0
            },
            "PointSpread": 0,
            "RoundId": 0,
            "Season": 0,
            "SeasonType": 0,
            "Status": "string",
            "UnderPayout": 0,
            "Updated": "string",
            "UpdatedUtc": "string",
            "VenueId": 0,
            "VenueType": "string",
            "Week": 0,
            "Winner": "string"
          }
        ],
        "Name": "string",
        "PlayerSeasons": [
          {
            "Assists": 0,
            "BlockedShots": 0,
            "CornersWon": 0,
            "Crosses": 0,
            "DefenderCleanSheets": 0,
            "FantasyPoints": 0,
            "FantasyPointsDraftKings": 0,
            "FantasyPointsFanDuel": 0,
            "FantasyPointsMondogoal": 0,
            "FantasyPointsYahoo": 0,
            "Fouled": 0,
            "Fouls": 0,
            "Games": 0,
            "GlobalTeamId": 0,
            "GoalkeeperCleanSheets": 0,
            "GoalkeeperGoalsAgainst": 0,
            "GoalkeeperSaves": 0,
            "GoalkeeperSingleGoalAgainst": 0,
            "GoalkeeperWins": 0,
            "Goals": 0,
            "Interceptions": 0,
            "LastManTackle": 0,
            "Minutes": 0,
            "Name": "string",
            "Offsides": 0,
            "OpponentScore": 0,
            "OwnGoals": 0,
            "Passes": 0,
            "PassesCompleted": 0,
            "PenaltiesConceded": 0,
            "PenaltiesWon": 0,
            "PenaltyKickGoals": 0,
            "PenaltyKickMisses": 0,
            "PenaltyKickSaves": 0,
            "PlayerId": 0,
            "Position": "string",
            "PositionCategory": "string",
            "RedCards": 0,
            "RoundId": 0,
            "Score": 0,
            "Season": 0,
            "SeasonType": 0,
            "ShortName": "string",
            "Shots": 0,
            "ShotsOnGoal": 0,
            "Started": 0,
            "StatId": 0,
            "Tackles": 0,
            "TacklesWon": 0,
            "Team": "string",
            "TeamId": 0,
            "Touches": 0,
            "Updated": "string",
            "UpdatedUtc": "string",
            "YellowCards": 0,
            "YellowRedCards": 0
          }
        ],
        "RoundId": 0,
        "Season": 0,
        "SeasonId": 0,
        "SeasonType": 0,
        "Standings": [
          {
            "Draws": 0,
            "Games": 0,
            "GlobalTeamID": 0,
            "GoalsAgainst": 0,
            "GoalsDifferential": 0,
            "GoalsScored": 0,
            "Group": "string",
            "Losses": 0,
            "Name": "string",
            "Order": 0,
            "Points": 0,
            "RoundId": 0,
            "Scope": "string",
            "ShortName": "string",
            "StandingId": 0,
            "TeamId": 0,
            "Wins": 0
          }
        ],
        "StartDate": "string",
        "TeamSeasons": [
          {
            "Assists": 0,
            "BlockedShots": 0,
            "CornersWon": 0,
            "Crosses": 0,
            "DefenderCleanSheets": 0,
            "FantasyPoints": 0,
            "FantasyPointsDraftKings": 0,
            "FantasyPointsFanDuel": 0,
            "FantasyPointsMondogoal": 0,
            "FantasyPointsYahoo": 0,
            "Fouled": 0,
            "Fouls": 0,
            "Games": 0,
            "GlobalTeamId": 0,
            "GoalkeeperCleanSheets": 0,
            "GoalkeeperGoalsAgainst": 0,
            "GoalkeeperSaves": 0,
            "GoalkeeperSingleGoalAgainst": 0,
            "GoalkeeperWins": 0,
            "Goals": 0,
            "Interceptions": 0,
            "LastManTackle": 0,
            "Minutes": 0,
            "Name": "string",
            "Offsides": 0,
            "OpponentScore": 0,
            "OwnGoals": 0,
            "Passes": 0,
            "PassesCompleted": 0,
            "PenaltiesConceded": 0,
            "PenaltiesWon": 0,
            "PenaltyKickGoals": 0,
            "PenaltyKickMisses": 0,
            "PenaltyKickSaves": 0,
            "Possession": 0,
            "RedCards": 0,
            "RoundId": 0,
            "Score": 0,
            "Season": 0,
            "SeasonType": 0,
            "Shots": 0,
            "ShotsOnGoal": 0,
            "StatId": 0,
            "Tackles": 0,
            "TacklesWon": 0,
            "Team": "string",
            "TeamId": 0,
            "Touches": 0,
            "Updated": "string",
            "UpdatedUtc": "string",
            "YellowCards": 0,
            "YellowRedCards": 0
          }
        ],
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
      "Attendance": 0,
      "AwayTeamCountryCode": "string",
      "AwayTeamFormation": "string",
      "AwayTeamId": 0,
      "AwayTeamKey": "string",
      "AwayTeamMoneyLine": 0,
      "AwayTeamName": "string",
      "AwayTeamPointSpreadPayout": 0,
      "AwayTeamScore": 0,
      "AwayTeamScoreExtraTime": 0,
      "AwayTeamScorePenalty": 0,
      "AwayTeamScorePeriod1": 0,
      "AwayTeamScorePeriod2": 0,
      "Clock": 0,
      "ClockDisplay": "string",
      "ClockExtra": 0,
      "DateTime": "string",
      "Day": "string",
      "DrawMoneyLine": 0,
      "GameId": 0,
      "GlobalAwayTeamId": 0,
      "GlobalGameId": 0,
      "GlobalHomeTeamId": 0,
      "Group": "string",
      "HomeTeamCountryCode": "string",
      "HomeTeamFormation": "string",
      "HomeTeamId": 0,
      "HomeTeamKey": "string",
      "HomeTeamMoneyLine": 0,
      "HomeTeamName": "string",
      "HomeTeamPointSpreadPayout": 0,
      "HomeTeamScore": 0,
      "HomeTeamScoreExtraTime": 0,
      "HomeTeamScorePenalty": 0,
      "HomeTeamScorePeriod1": 0,
      "HomeTeamScorePeriod2": 0,
      "IsClosed": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "PlayoffAggregateScore": {
        "Created": "string",
        "TeamA_AggregateScore": 0,
        "TeamA_Id": 0,
        "TeamB_AggregateScore": 0,
        "TeamB_Id": 0,
        "Updated": "string",
        "WinningTeamId": 0
      },
      "PointSpread": 0,
      "RoundId": 0,
      "Season": 0,
      "SeasonType": 0,
      "Status": "string",
      "UnderPayout": 0,
      "Updated": "string",
      "UpdatedUtc": "string",
      "VenueId": 0,
      "VenueType": "string",
      "Week": 0,
      "Winner": "string"
    }
  ],
  "Gender": "string",
  "Key": "string",
  "Name": "string",
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
          "Games": [
            {
              "Attendance": 0,
              "AwayTeamCountryCode": "string",
              "AwayTeamFormation": "string",
              "AwayTeamId": 0,
              "AwayTeamKey": "string",
              "AwayTeamMoneyLine": 0,
              "AwayTeamName": "string",
              "AwayTeamPointSpreadPayout": 0,
              "AwayTeamScore": 0,
              "AwayTeamScoreExtraTime": 0,
              "AwayTeamScorePenalty": 0,
              "AwayTeamScorePeriod1": 0,
              "AwayTeamScorePeriod2": 0,
              "Clock": 0,
              "ClockDisplay": "string",
              "ClockExtra": 0,
              "DateTime": "string",
              "Day": "string",
              "DrawMoneyLine": 0,
              "GameId": 0,
              "GlobalAwayTeamId": 0,
              "GlobalGameId": 0,
              "GlobalHomeTeamId": 0,
              "Group": "string",
              "HomeTeamCountryCode": "string",
              "HomeTeamFormation": "string",
              "HomeTeamId": 0,
              "HomeTeamKey": "string",
              "HomeTeamMoneyLine": 0,
              "HomeTeamName": "string",
              "HomeTeamPointSpreadPayout": 0,
              "HomeTeamScore": 0,
              "HomeTeamScoreExtraTime": 0,
              "HomeTeamScorePenalty": 0,
              "HomeTeamScorePeriod1": 0,
              "HomeTeamScorePeriod2": 0,
              "IsClosed": true,
              "OverPayout": 0,
              "OverUnder": 0,
              "Period": "string",
              "PlayoffAggregateScore": {
                "Created": "string",
                "TeamA_AggregateScore": 0,
                "TeamA_Id": 0,
                "TeamB_AggregateScore": 0,
                "TeamB_Id": 0,
                "Updated": "string",
                "WinningTeamId": 0
              },
              "PointSpread": 0,
              "RoundId": 0,
              "Season": 0,
              "SeasonType": 0,
              "Status": "string",
              "UnderPayout": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "VenueId": 0,
              "VenueType": "string",
              "Week": 0,
              "Winner": "string"
            }
          ],
          "Name": "string",
          "PlayerSeasons": [
            {
              "Assists": 0,
              "BlockedShots": 0,
              "CornersWon": 0,
              "Crosses": 0,
              "DefenderCleanSheets": 0,
              "FantasyPoints": 0,
              "FantasyPointsDraftKings": 0,
              "FantasyPointsFanDuel": 0,
              "FantasyPointsMondogoal": 0,
              "FantasyPointsYahoo": 0,
              "Fouled": 0,
              "Fouls": 0,
              "Games": 0,
              "GlobalTeamId": 0,
              "GoalkeeperCleanSheets": 0,
              "GoalkeeperGoalsAgainst": 0,
              "GoalkeeperSaves": 0,
              "GoalkeeperSingleGoalAgainst": 0,
              "GoalkeeperWins": 0,
              "Goals": 0,
              "Interceptions": 0,
              "LastManTackle": 0,
              "Minutes": 0,
              "Name": "string",
              "Offsides": 0,
              "OpponentScore": 0,
              "OwnGoals": 0,
              "Passes": 0,
              "PassesCompleted": 0,
              "PenaltiesConceded": 0,
              "PenaltiesWon": 0,
              "PenaltyKickGoals": 0,
              "PenaltyKickMisses": 0,
              "PenaltyKickSaves": 0,
              "PlayerId": 0,
              "Position": "string",
              "PositionCategory": "string",
              "RedCards": 0,
              "RoundId": 0,
              "Score": 0,
              "Season": 0,
              "SeasonType": 0,
              "ShortName": "string",
              "Shots": 0,
              "ShotsOnGoal": 0,
              "Started": 0,
              "StatId": 0,
              "Tackles": 0,
              "TacklesWon": 0,
              "Team": "string",
              "TeamId": 0,
              "Touches": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "YellowCards": 0,
              "YellowRedCards": 0
            }
          ],
          "RoundId": 0,
          "Season": 0,
          "SeasonId": 0,
          "SeasonType": 0,
          "Standings": [
            {
              "Draws": 0,
              "Games": 0,
              "GlobalTeamID": 0,
              "GoalsAgainst": 0,
              "GoalsDifferential": 0,
              "GoalsScored": 0,
              "Group": "string",
              "Losses": 0,
              "Name": "string",
              "Order": 0,
              "Points": 0,
              "RoundId": 0,
              "Scope": "string",
              "ShortName": "string",
              "StandingId": 0,
              "TeamId": 0,
              "Wins": 0
            }
          ],
          "StartDate": "string",
          "TeamSeasons": [
            {
              "Assists": 0,
              "BlockedShots": 0,
              "CornersWon": 0,
              "Crosses": 0,
              "DefenderCleanSheets": 0,
              "FantasyPoints": 0,
              "FantasyPointsDraftKings": 0,
              "FantasyPointsFanDuel": 0,
              "FantasyPointsMondogoal": 0,
              "FantasyPointsYahoo": 0,
              "Fouled": 0,
              "Fouls": 0,
              "Games": 0,
              "GlobalTeamId": 0,
              "GoalkeeperCleanSheets": 0,
              "GoalkeeperGoalsAgainst": 0,
              "GoalkeeperSaves": 0,
              "GoalkeeperSingleGoalAgainst": 0,
              "GoalkeeperWins": 0,
              "Goals": 0,
              "Interceptions": 0,
              "LastManTackle": 0,
              "Minutes": 0,
              "Name": "string",
              "Offsides": 0,
              "OpponentScore": 0,
              "OwnGoals": 0,
              "Passes": 0,
              "PassesCompleted": 0,
              "PenaltiesConceded": 0,
              "PenaltiesWon": 0,
              "PenaltyKickGoals": 0,
              "PenaltyKickMisses": 0,
              "PenaltyKickSaves": 0,
              "Possession": 0,
              "RedCards": 0,
              "RoundId": 0,
              "Score": 0,
              "Season": 0,
              "SeasonType": 0,
              "Shots": 0,
              "ShotsOnGoal": 0,
              "StatId": 0,
              "Tackles": 0,
              "TacklesWon": 0,
              "Team": "string",
              "TeamId": 0,
              "Touches": 0,
              "Updated": "string",
              "UpdatedUtc": "string",
              "YellowCards": 0,
              "YellowRedCards": 0
            }
          ],
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
      "Address": "string",
      "AreaId": 0,
      "AreaName": "string",
      "City": "string",
      "ClubColor1": "string",
      "ClubColor2": "string",
      "ClubColor3": "string",
      "Email": "string",
      "Fax": "string",
      "Founded": 0,
      "FullName": "string",
      "Gender": "string",
      "GlobalTeamId": 0,
      "Key": "string",
      "Name": "string",
      "Nickname1": "string",
      "Nickname2": "string",
      "Nickname3": "string",
      "Phone": "string",
      "Players": [
        {
          "BirthCity": "string",
          "BirthCountry": "string",
          "BirthDate": "string",
          "CommonName": "string",
          "DraftKingsPosition": "string",
          "FirstName": "string",
          "Foot": "string",
          "Gender": "string",
          "Height": 0,
          "InjuryBodyPart": "string",
          "InjuryNotes": "string",
          "InjuryStartDate": "string",
          "InjuryStatus": "string",
          "Jersey": 0,
          "LastName": "string",
          "Nationality": "string",
          "PhotoUrl": "string",
          "PlayerId": 0,
          "Position": "string",
          "PositionCategory": "string",
          "RotoWirePlayerID": 0,
          "ShortName": "string",
          "Updated": "string",
          "UsaTodayHeadshotNoBackgroundUpdated": "string",
          "UsaTodayHeadshotNoBackgroundUrl": "string",
          "UsaTodayHeadshotUpdated": "string",
          "UsaTodayHeadshotUrl": "string",
          "UsaTodayPlayerID": 0,
          "Weight": 0
        }
      ],
      "TeamId": 0,
      "Type": "string",
      "VenueId": 0,
      "VenueName": "string",
      "Website": "string",
      "WikipediaLogoUrl": "string",
      "WikipediaWordMarkUrl": "string",
      "Zip": "string"
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
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
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
  "Attendance": 0,
  "AwayTeamCountryCode": "string",
  "AwayTeamFormation": "string",
  "AwayTeamId": 0,
  "AwayTeamKey": "string",
  "AwayTeamMoneyLine": 0,
  "AwayTeamName": "string",
  "AwayTeamPointSpreadPayout": 0,
  "AwayTeamScore": 0,
  "AwayTeamScoreExtraTime": 0,
  "AwayTeamScorePenalty": 0,
  "AwayTeamScorePeriod1": 0,
  "AwayTeamScorePeriod2": 0,
  "Clock": 0,
  "ClockDisplay": "string",
  "ClockExtra": 0,
  "DateTime": "string",
  "Day": "string",
  "DrawMoneyLine": 0,
  "GameId": 0,
  "GlobalAwayTeamId": 0,
  "GlobalGameId": 0,
  "GlobalHomeTeamId": 0,
  "Group": "string",
  "HomeTeamCountryCode": "string",
  "HomeTeamFormation": "string",
  "HomeTeamId": 0,
  "HomeTeamKey": "string",
  "HomeTeamMoneyLine": 0,
  "HomeTeamName": "string",
  "HomeTeamPointSpreadPayout": 0,
  "HomeTeamScore": 0,
  "HomeTeamScoreExtraTime": 0,
  "HomeTeamScorePenalty": 0,
  "HomeTeamScorePeriod1": 0,
  "HomeTeamScorePeriod2": 0,
  "IsClosed": true,
  "OverPayout": 0,
  "OverUnder": 0,
  "Period": "string",
  "PlayoffAggregateScore": {
    "Created": "string",
    "TeamA_AggregateScore": 0,
    "TeamA_Id": 0,
    "TeamB_AggregateScore": 0,
    "TeamB_Id": 0,
    "Updated": "string",
    "WinningTeamId": 0
  },
  "PointSpread": 0,
  "RoundId": 0,
  "Season": 0,
  "SeasonType": 0,
  "Status": "string",
  "UnderPayout": 0,
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
|Attendance|integer \| null|false|none|none|
|AwayTeamCountryCode|string \| null|false|none|none|
|AwayTeamFormation|string \| null|false|none|none|
|AwayTeamId|integer \| null|false|none|none|
|AwayTeamKey|string \| null|false|none|none|
|AwayTeamMoneyLine|integer \| null|false|none|none|
|AwayTeamName|string \| null|false|none|none|
|AwayTeamPointSpreadPayout|integer \| null|false|none|none|
|AwayTeamScore|integer \| null|false|none|none|
|AwayTeamScoreExtraTime|integer \| null|false|none|none|
|AwayTeamScorePenalty|integer \| null|false|none|none|
|AwayTeamScorePeriod1|integer \| null|false|none|none|
|AwayTeamScorePeriod2|integer \| null|false|none|none|
|Clock|integer \| null|false|none|none|
|ClockDisplay|string \| null|false|none|none|
|ClockExtra|integer \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DrawMoneyLine|integer \| null|false|none|none|
|GameId|integer|false|none|none|
|GlobalAwayTeamId|integer \| null|false|none|none|
|GlobalGameId|integer|false|none|none|
|GlobalHomeTeamId|integer \| null|false|none|none|
|Group|string \| null|false|none|none|
|HomeTeamCountryCode|string \| null|false|none|none|
|HomeTeamFormation|string \| null|false|none|none|
|HomeTeamId|integer \| null|false|none|none|
|HomeTeamKey|string \| null|false|none|none|
|HomeTeamMoneyLine|integer \| null|false|none|none|
|HomeTeamName|string \| null|false|none|none|
|HomeTeamPointSpreadPayout|integer \| null|false|none|none|
|HomeTeamScore|integer \| null|false|none|none|
|HomeTeamScoreExtraTime|integer \| null|false|none|none|
|HomeTeamScorePenalty|integer \| null|false|none|none|
|HomeTeamScorePeriod1|integer \| null|false|none|none|
|HomeTeamScorePeriod2|integer \| null|false|none|none|
|IsClosed|boolean \| null|false|none|none|
|OverPayout|integer \| null|false|none|none|
|OverUnder|number \| null|false|none|none|
|Period|string \| null|false|none|none|
|PlayoffAggregateScore|[PlayoffAggregateScore](#schemaplayoffaggregatescore)|false|none|none|
|PointSpread|number \| null|false|none|none|
|RoundId|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Status|string \| null|false|none|none|
|UnderPayout|integer \| null|false|none|none|
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
  "Jersey": 0,
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
|Jersey|integer \| null|false|none|none|
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
  "DraftKingsPosition": "string",
  "FirstName": "string",
  "Foot": "string",
  "Gender": "string",
  "Height": 0,
  "InjuryBodyPart": "string",
  "InjuryNotes": "string",
  "InjuryStartDate": "string",
  "InjuryStatus": "string",
  "Jersey": 0,
  "LastName": "string",
  "Nationality": "string",
  "PhotoUrl": "string",
  "PlayerId": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RotoWirePlayerID": 0,
  "ShortName": "string",
  "Updated": "string",
  "UsaTodayHeadshotNoBackgroundUpdated": "string",
  "UsaTodayHeadshotNoBackgroundUrl": "string",
  "UsaTodayHeadshotUpdated": "string",
  "UsaTodayHeadshotUrl": "string",
  "UsaTodayPlayerID": 0,
  "Weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BirthCity|string \| null|false|none|none|
|BirthCountry|string \| null|false|none|none|
|BirthDate|string \| null|false|none|none|
|CommonName|string \| null|false|none|none|
|DraftKingsPosition|string \| null|false|none|none|
|FirstName|string \| null|false|none|none|
|Foot|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|Height|integer \| null|false|none|none|
|InjuryBodyPart|string \| null|false|none|none|
|InjuryNotes|string \| null|false|none|none|
|InjuryStartDate|string \| null|false|none|none|
|InjuryStatus|string \| null|false|none|none|
|Jersey|integer \| null|false|none|none|
|LastName|string \| null|false|none|none|
|Nationality|string \| null|false|none|none|
|PhotoUrl|string \| null|false|none|none|
|PlayerId|integer|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|RotoWirePlayerID|integer \| null|false|none|none|
|ShortName|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUpdated|string \| null|false|none|none|
|UsaTodayHeadshotNoBackgroundUrl|string \| null|false|none|none|
|UsaTodayHeadshotUpdated|string \| null|false|none|none|
|UsaTodayHeadshotUrl|string \| null|false|none|none|
|UsaTodayPlayerID|integer \| null|false|none|none|
|Weight|integer \| null|false|none|none|

<h2 id="tocS_PlayerSeason">PlayerSeason</h2>
<!-- backwards compatibility -->
<a id="schemaplayerseason"></a>
<a id="schema_PlayerSeason"></a>
<a id="tocSplayerseason"></a>
<a id="tocsplayerseason"></a>

```json
{
  "Assists": 0,
  "BlockedShots": 0,
  "CornersWon": 0,
  "Crosses": 0,
  "DefenderCleanSheets": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsMondogoal": 0,
  "FantasyPointsYahoo": 0,
  "Fouled": 0,
  "Fouls": 0,
  "Games": 0,
  "GlobalTeamId": 0,
  "GoalkeeperCleanSheets": 0,
  "GoalkeeperGoalsAgainst": 0,
  "GoalkeeperSaves": 0,
  "GoalkeeperSingleGoalAgainst": 0,
  "GoalkeeperWins": 0,
  "Goals": 0,
  "Interceptions": 0,
  "LastManTackle": 0,
  "Minutes": 0,
  "Name": "string",
  "Offsides": 0,
  "OpponentScore": 0,
  "OwnGoals": 0,
  "Passes": 0,
  "PassesCompleted": 0,
  "PenaltiesConceded": 0,
  "PenaltiesWon": 0,
  "PenaltyKickGoals": 0,
  "PenaltyKickMisses": 0,
  "PenaltyKickSaves": 0,
  "PlayerId": 0,
  "Position": "string",
  "PositionCategory": "string",
  "RedCards": 0,
  "RoundId": 0,
  "Score": 0,
  "Season": 0,
  "SeasonType": 0,
  "ShortName": "string",
  "Shots": 0,
  "ShotsOnGoal": 0,
  "Started": 0,
  "StatId": 0,
  "Tackles": 0,
  "TacklesWon": 0,
  "Team": "string",
  "TeamId": 0,
  "Touches": 0,
  "Updated": "string",
  "UpdatedUtc": "string",
  "YellowCards": 0,
  "YellowRedCards": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|CornersWon|number \| null|false|none|none|
|Crosses|number \| null|false|none|none|
|DefenderCleanSheets|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsMondogoal|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|Fouled|number \| null|false|none|none|
|Fouls|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamId|integer \| null|false|none|none|
|GoalkeeperCleanSheets|number \| null|false|none|none|
|GoalkeeperGoalsAgainst|number \| null|false|none|none|
|GoalkeeperSaves|number \| null|false|none|none|
|GoalkeeperSingleGoalAgainst|number \| null|false|none|none|
|GoalkeeperWins|number \| null|false|none|none|
|Goals|number \| null|false|none|none|
|Interceptions|number \| null|false|none|none|
|LastManTackle|number \| null|false|none|none|
|Minutes|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|Offsides|number \| null|false|none|none|
|OpponentScore|number \| null|false|none|none|
|OwnGoals|number \| null|false|none|none|
|Passes|number \| null|false|none|none|
|PassesCompleted|number \| null|false|none|none|
|PenaltiesConceded|number \| null|false|none|none|
|PenaltiesWon|number \| null|false|none|none|
|PenaltyKickGoals|number \| null|false|none|none|
|PenaltyKickMisses|number \| null|false|none|none|
|PenaltyKickSaves|number \| null|false|none|none|
|PlayerId|integer \| null|false|none|none|
|Position|string \| null|false|none|none|
|PositionCategory|string \| null|false|none|none|
|RedCards|number \| null|false|none|none|
|RoundId|integer \| null|false|none|none|
|Score|number \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|ShortName|string \| null|false|none|none|
|Shots|number \| null|false|none|none|
|ShotsOnGoal|number \| null|false|none|none|
|Started|integer \| null|false|none|none|
|StatId|integer|false|none|none|
|Tackles|number \| null|false|none|none|
|TacklesWon|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamId|integer \| null|false|none|none|
|Touches|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UpdatedUtc|string \| null|false|none|none|
|YellowCards|number \| null|false|none|none|
|YellowRedCards|number \| null|false|none|none|

<h2 id="tocS_PlayoffAggregateScore">PlayoffAggregateScore</h2>
<!-- backwards compatibility -->
<a id="schemaplayoffaggregatescore"></a>
<a id="schema_PlayoffAggregateScore"></a>
<a id="tocSplayoffaggregatescore"></a>
<a id="tocsplayoffaggregatescore"></a>

```json
{
  "Created": "string",
  "TeamA_AggregateScore": 0,
  "TeamA_Id": 0,
  "TeamB_AggregateScore": 0,
  "TeamB_Id": 0,
  "Updated": "string",
  "WinningTeamId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Created|string \| null|false|none|none|
|TeamA_AggregateScore|integer|false|none|none|
|TeamA_Id|integer|false|none|none|
|TeamB_AggregateScore|integer|false|none|none|
|TeamB_Id|integer|false|none|none|
|Updated|string \| null|false|none|none|
|WinningTeamId|integer|false|none|none|

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
  "Games": [
    {
      "Attendance": 0,
      "AwayTeamCountryCode": "string",
      "AwayTeamFormation": "string",
      "AwayTeamId": 0,
      "AwayTeamKey": "string",
      "AwayTeamMoneyLine": 0,
      "AwayTeamName": "string",
      "AwayTeamPointSpreadPayout": 0,
      "AwayTeamScore": 0,
      "AwayTeamScoreExtraTime": 0,
      "AwayTeamScorePenalty": 0,
      "AwayTeamScorePeriod1": 0,
      "AwayTeamScorePeriod2": 0,
      "Clock": 0,
      "ClockDisplay": "string",
      "ClockExtra": 0,
      "DateTime": "string",
      "Day": "string",
      "DrawMoneyLine": 0,
      "GameId": 0,
      "GlobalAwayTeamId": 0,
      "GlobalGameId": 0,
      "GlobalHomeTeamId": 0,
      "Group": "string",
      "HomeTeamCountryCode": "string",
      "HomeTeamFormation": "string",
      "HomeTeamId": 0,
      "HomeTeamKey": "string",
      "HomeTeamMoneyLine": 0,
      "HomeTeamName": "string",
      "HomeTeamPointSpreadPayout": 0,
      "HomeTeamScore": 0,
      "HomeTeamScoreExtraTime": 0,
      "HomeTeamScorePenalty": 0,
      "HomeTeamScorePeriod1": 0,
      "HomeTeamScorePeriod2": 0,
      "IsClosed": true,
      "OverPayout": 0,
      "OverUnder": 0,
      "Period": "string",
      "PlayoffAggregateScore": {
        "Created": "string",
        "TeamA_AggregateScore": 0,
        "TeamA_Id": 0,
        "TeamB_AggregateScore": 0,
        "TeamB_Id": 0,
        "Updated": "string",
        "WinningTeamId": 0
      },
      "PointSpread": 0,
      "RoundId": 0,
      "Season": 0,
      "SeasonType": 0,
      "Status": "string",
      "UnderPayout": 0,
      "Updated": "string",
      "UpdatedUtc": "string",
      "VenueId": 0,
      "VenueType": "string",
      "Week": 0,
      "Winner": "string"
    }
  ],
  "Name": "string",
  "PlayerSeasons": [
    {
      "Assists": 0,
      "BlockedShots": 0,
      "CornersWon": 0,
      "Crosses": 0,
      "DefenderCleanSheets": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsMondogoal": 0,
      "FantasyPointsYahoo": 0,
      "Fouled": 0,
      "Fouls": 0,
      "Games": 0,
      "GlobalTeamId": 0,
      "GoalkeeperCleanSheets": 0,
      "GoalkeeperGoalsAgainst": 0,
      "GoalkeeperSaves": 0,
      "GoalkeeperSingleGoalAgainst": 0,
      "GoalkeeperWins": 0,
      "Goals": 0,
      "Interceptions": 0,
      "LastManTackle": 0,
      "Minutes": 0,
      "Name": "string",
      "Offsides": 0,
      "OpponentScore": 0,
      "OwnGoals": 0,
      "Passes": 0,
      "PassesCompleted": 0,
      "PenaltiesConceded": 0,
      "PenaltiesWon": 0,
      "PenaltyKickGoals": 0,
      "PenaltyKickMisses": 0,
      "PenaltyKickSaves": 0,
      "PlayerId": 0,
      "Position": "string",
      "PositionCategory": "string",
      "RedCards": 0,
      "RoundId": 0,
      "Score": 0,
      "Season": 0,
      "SeasonType": 0,
      "ShortName": "string",
      "Shots": 0,
      "ShotsOnGoal": 0,
      "Started": 0,
      "StatId": 0,
      "Tackles": 0,
      "TacklesWon": 0,
      "Team": "string",
      "TeamId": 0,
      "Touches": 0,
      "Updated": "string",
      "UpdatedUtc": "string",
      "YellowCards": 0,
      "YellowRedCards": 0
    }
  ],
  "RoundId": 0,
  "Season": 0,
  "SeasonId": 0,
  "SeasonType": 0,
  "Standings": [
    {
      "Draws": 0,
      "Games": 0,
      "GlobalTeamID": 0,
      "GoalsAgainst": 0,
      "GoalsDifferential": 0,
      "GoalsScored": 0,
      "Group": "string",
      "Losses": 0,
      "Name": "string",
      "Order": 0,
      "Points": 0,
      "RoundId": 0,
      "Scope": "string",
      "ShortName": "string",
      "StandingId": 0,
      "TeamId": 0,
      "Wins": 0
    }
  ],
  "StartDate": "string",
  "TeamSeasons": [
    {
      "Assists": 0,
      "BlockedShots": 0,
      "CornersWon": 0,
      "Crosses": 0,
      "DefenderCleanSheets": 0,
      "FantasyPoints": 0,
      "FantasyPointsDraftKings": 0,
      "FantasyPointsFanDuel": 0,
      "FantasyPointsMondogoal": 0,
      "FantasyPointsYahoo": 0,
      "Fouled": 0,
      "Fouls": 0,
      "Games": 0,
      "GlobalTeamId": 0,
      "GoalkeeperCleanSheets": 0,
      "GoalkeeperGoalsAgainst": 0,
      "GoalkeeperSaves": 0,
      "GoalkeeperSingleGoalAgainst": 0,
      "GoalkeeperWins": 0,
      "Goals": 0,
      "Interceptions": 0,
      "LastManTackle": 0,
      "Minutes": 0,
      "Name": "string",
      "Offsides": 0,
      "OpponentScore": 0,
      "OwnGoals": 0,
      "Passes": 0,
      "PassesCompleted": 0,
      "PenaltiesConceded": 0,
      "PenaltiesWon": 0,
      "PenaltyKickGoals": 0,
      "PenaltyKickMisses": 0,
      "PenaltyKickSaves": 0,
      "Possession": 0,
      "RedCards": 0,
      "RoundId": 0,
      "Score": 0,
      "Season": 0,
      "SeasonType": 0,
      "Shots": 0,
      "ShotsOnGoal": 0,
      "StatId": 0,
      "Tackles": 0,
      "TacklesWon": 0,
      "Team": "string",
      "TeamId": 0,
      "Touches": 0,
      "Updated": "string",
      "UpdatedUtc": "string",
      "YellowCards": 0,
      "YellowRedCards": 0
    }
  ],
  "Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentRound|boolean|false|none|none|
|CurrentWeek|integer \| null|false|none|none|
|EndDate|string \| null|false|none|none|
|Games|[[Game](#schemagame)]|false|none|none|
|Name|string \| null|false|none|none|
|PlayerSeasons|[[PlayerSeason](#schemaplayerseason)]|false|none|none|
|RoundId|integer|false|none|none|
|Season|integer|false|none|none|
|SeasonId|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Standings|[[Standing](#schemastanding)]|false|none|none|
|StartDate|string \| null|false|none|none|
|TeamSeasons|[[TeamSeason](#schemateamseason)]|false|none|none|
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
      "Games": [
        {
          "Attendance": 0,
          "AwayTeamCountryCode": "string",
          "AwayTeamFormation": "string",
          "AwayTeamId": 0,
          "AwayTeamKey": "string",
          "AwayTeamMoneyLine": 0,
          "AwayTeamName": "string",
          "AwayTeamPointSpreadPayout": 0,
          "AwayTeamScore": 0,
          "AwayTeamScoreExtraTime": 0,
          "AwayTeamScorePenalty": 0,
          "AwayTeamScorePeriod1": 0,
          "AwayTeamScorePeriod2": 0,
          "Clock": 0,
          "ClockDisplay": "string",
          "ClockExtra": 0,
          "DateTime": "string",
          "Day": "string",
          "DrawMoneyLine": 0,
          "GameId": 0,
          "GlobalAwayTeamId": 0,
          "GlobalGameId": 0,
          "GlobalHomeTeamId": 0,
          "Group": "string",
          "HomeTeamCountryCode": "string",
          "HomeTeamFormation": "string",
          "HomeTeamId": 0,
          "HomeTeamKey": "string",
          "HomeTeamMoneyLine": 0,
          "HomeTeamName": "string",
          "HomeTeamPointSpreadPayout": 0,
          "HomeTeamScore": 0,
          "HomeTeamScoreExtraTime": 0,
          "HomeTeamScorePenalty": 0,
          "HomeTeamScorePeriod1": 0,
          "HomeTeamScorePeriod2": 0,
          "IsClosed": true,
          "OverPayout": 0,
          "OverUnder": 0,
          "Period": "string",
          "PlayoffAggregateScore": {
            "Created": "string",
            "TeamA_AggregateScore": 0,
            "TeamA_Id": 0,
            "TeamB_AggregateScore": 0,
            "TeamB_Id": 0,
            "Updated": "string",
            "WinningTeamId": 0
          },
          "PointSpread": 0,
          "RoundId": 0,
          "Season": 0,
          "SeasonType": 0,
          "Status": "string",
          "UnderPayout": 0,
          "Updated": "string",
          "UpdatedUtc": "string",
          "VenueId": 0,
          "VenueType": "string",
          "Week": 0,
          "Winner": "string"
        }
      ],
      "Name": "string",
      "PlayerSeasons": [
        {
          "Assists": 0,
          "BlockedShots": 0,
          "CornersWon": 0,
          "Crosses": 0,
          "DefenderCleanSheets": 0,
          "FantasyPoints": 0,
          "FantasyPointsDraftKings": 0,
          "FantasyPointsFanDuel": 0,
          "FantasyPointsMondogoal": 0,
          "FantasyPointsYahoo": 0,
          "Fouled": 0,
          "Fouls": 0,
          "Games": 0,
          "GlobalTeamId": 0,
          "GoalkeeperCleanSheets": 0,
          "GoalkeeperGoalsAgainst": 0,
          "GoalkeeperSaves": 0,
          "GoalkeeperSingleGoalAgainst": 0,
          "GoalkeeperWins": 0,
          "Goals": 0,
          "Interceptions": 0,
          "LastManTackle": 0,
          "Minutes": 0,
          "Name": "string",
          "Offsides": 0,
          "OpponentScore": 0,
          "OwnGoals": 0,
          "Passes": 0,
          "PassesCompleted": 0,
          "PenaltiesConceded": 0,
          "PenaltiesWon": 0,
          "PenaltyKickGoals": 0,
          "PenaltyKickMisses": 0,
          "PenaltyKickSaves": 0,
          "PlayerId": 0,
          "Position": "string",
          "PositionCategory": "string",
          "RedCards": 0,
          "RoundId": 0,
          "Score": 0,
          "Season": 0,
          "SeasonType": 0,
          "ShortName": "string",
          "Shots": 0,
          "ShotsOnGoal": 0,
          "Started": 0,
          "StatId": 0,
          "Tackles": 0,
          "TacklesWon": 0,
          "Team": "string",
          "TeamId": 0,
          "Touches": 0,
          "Updated": "string",
          "UpdatedUtc": "string",
          "YellowCards": 0,
          "YellowRedCards": 0
        }
      ],
      "RoundId": 0,
      "Season": 0,
      "SeasonId": 0,
      "SeasonType": 0,
      "Standings": [
        {
          "Draws": 0,
          "Games": 0,
          "GlobalTeamID": 0,
          "GoalsAgainst": 0,
          "GoalsDifferential": 0,
          "GoalsScored": 0,
          "Group": "string",
          "Losses": 0,
          "Name": "string",
          "Order": 0,
          "Points": 0,
          "RoundId": 0,
          "Scope": "string",
          "ShortName": "string",
          "StandingId": 0,
          "TeamId": 0,
          "Wins": 0
        }
      ],
      "StartDate": "string",
      "TeamSeasons": [
        {
          "Assists": 0,
          "BlockedShots": 0,
          "CornersWon": 0,
          "Crosses": 0,
          "DefenderCleanSheets": 0,
          "FantasyPoints": 0,
          "FantasyPointsDraftKings": 0,
          "FantasyPointsFanDuel": 0,
          "FantasyPointsMondogoal": 0,
          "FantasyPointsYahoo": 0,
          "Fouled": 0,
          "Fouls": 0,
          "Games": 0,
          "GlobalTeamId": 0,
          "GoalkeeperCleanSheets": 0,
          "GoalkeeperGoalsAgainst": 0,
          "GoalkeeperSaves": 0,
          "GoalkeeperSingleGoalAgainst": 0,
          "GoalkeeperWins": 0,
          "Goals": 0,
          "Interceptions": 0,
          "LastManTackle": 0,
          "Minutes": 0,
          "Name": "string",
          "Offsides": 0,
          "OpponentScore": 0,
          "OwnGoals": 0,
          "Passes": 0,
          "PassesCompleted": 0,
          "PenaltiesConceded": 0,
          "PenaltiesWon": 0,
          "PenaltyKickGoals": 0,
          "PenaltyKickMisses": 0,
          "PenaltyKickSaves": 0,
          "Possession": 0,
          "RedCards": 0,
          "RoundId": 0,
          "Score": 0,
          "Season": 0,
          "SeasonType": 0,
          "Shots": 0,
          "ShotsOnGoal": 0,
          "StatId": 0,
          "Tackles": 0,
          "TacklesWon": 0,
          "Team": "string",
          "TeamId": 0,
          "Touches": 0,
          "Updated": "string",
          "UpdatedUtc": "string",
          "YellowCards": 0,
          "YellowRedCards": 0
        }
      ],
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
    "Address": "string",
    "AreaId": 0,
    "AreaName": "string",
    "City": "string",
    "ClubColor1": "string",
    "ClubColor2": "string",
    "ClubColor3": "string",
    "Email": "string",
    "Fax": "string",
    "Founded": 0,
    "FullName": "string",
    "Gender": "string",
    "GlobalTeamId": 0,
    "Key": "string",
    "Name": "string",
    "Nickname1": "string",
    "Nickname2": "string",
    "Nickname3": "string",
    "Phone": "string",
    "TeamId": 0,
    "Type": "string",
    "VenueId": 0,
    "VenueName": "string",
    "Website": "string",
    "WikipediaLogoUrl": "string",
    "WikipediaWordMarkUrl": "string",
    "Zip": "string"
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
  "Draws": 0,
  "Games": 0,
  "GlobalTeamID": 0,
  "GoalsAgainst": 0,
  "GoalsDifferential": 0,
  "GoalsScored": 0,
  "Group": "string",
  "Losses": 0,
  "Name": "string",
  "Order": 0,
  "Points": 0,
  "RoundId": 0,
  "Scope": "string",
  "ShortName": "string",
  "StandingId": 0,
  "TeamId": 0,
  "Wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Draws|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamID|integer \| null|false|none|none|
|GoalsAgainst|integer \| null|false|none|none|
|GoalsDifferential|integer \| null|false|none|none|
|GoalsScored|integer \| null|false|none|none|
|Group|string \| null|false|none|none|
|Losses|integer \| null|false|none|none|
|Name|string \| null|false|none|none|
|Order|integer \| null|false|none|none|
|Points|integer \| null|false|none|none|
|RoundId|integer|false|none|none|
|Scope|string \| null|false|none|none|
|ShortName|string \| null|false|none|none|
|StandingId|integer|false|none|none|
|TeamId|integer|false|none|none|
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
  "Address": "string",
  "AreaId": 0,
  "AreaName": "string",
  "City": "string",
  "ClubColor1": "string",
  "ClubColor2": "string",
  "ClubColor3": "string",
  "Email": "string",
  "Fax": "string",
  "Founded": 0,
  "FullName": "string",
  "Gender": "string",
  "GlobalTeamId": 0,
  "Key": "string",
  "Name": "string",
  "Nickname1": "string",
  "Nickname2": "string",
  "Nickname3": "string",
  "Phone": "string",
  "TeamId": 0,
  "Type": "string",
  "VenueId": 0,
  "VenueName": "string",
  "Website": "string",
  "WikipediaLogoUrl": "string",
  "WikipediaWordMarkUrl": "string",
  "Zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|Address|string \| null|false|none|none|
|AreaId|integer \| null|false|none|none|
|AreaName|string \| null|false|none|none|
|City|string \| null|false|none|none|
|ClubColor1|string \| null|false|none|none|
|ClubColor2|string \| null|false|none|none|
|ClubColor3|string \| null|false|none|none|
|Email|string \| null|false|none|none|
|Fax|string \| null|false|none|none|
|Founded|integer \| null|false|none|none|
|FullName|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|GlobalTeamId|integer|false|none|none|
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Nickname1|string \| null|false|none|none|
|Nickname2|string \| null|false|none|none|
|Nickname3|string \| null|false|none|none|
|Phone|string \| null|false|none|none|
|TeamId|integer|false|none|none|
|Type|string \| null|false|none|none|
|VenueId|integer \| null|false|none|none|
|VenueName|string \| null|false|none|none|
|Website|string \| null|false|none|none|
|WikipediaLogoUrl|string \| null|false|none|none|
|WikipediaWordMarkUrl|string \| null|false|none|none|
|Zip|string \| null|false|none|none|

<h2 id="tocS_TeamDetail">TeamDetail</h2>
<!-- backwards compatibility -->
<a id="schemateamdetail"></a>
<a id="schema_TeamDetail"></a>
<a id="tocSteamdetail"></a>
<a id="tocsteamdetail"></a>

```json
{
  "Active": true,
  "Address": "string",
  "AreaId": 0,
  "AreaName": "string",
  "City": "string",
  "ClubColor1": "string",
  "ClubColor2": "string",
  "ClubColor3": "string",
  "Email": "string",
  "Fax": "string",
  "Founded": 0,
  "FullName": "string",
  "Gender": "string",
  "GlobalTeamId": 0,
  "Key": "string",
  "Name": "string",
  "Nickname1": "string",
  "Nickname2": "string",
  "Nickname3": "string",
  "Phone": "string",
  "Players": [
    {
      "BirthCity": "string",
      "BirthCountry": "string",
      "BirthDate": "string",
      "CommonName": "string",
      "DraftKingsPosition": "string",
      "FirstName": "string",
      "Foot": "string",
      "Gender": "string",
      "Height": 0,
      "InjuryBodyPart": "string",
      "InjuryNotes": "string",
      "InjuryStartDate": "string",
      "InjuryStatus": "string",
      "Jersey": 0,
      "LastName": "string",
      "Nationality": "string",
      "PhotoUrl": "string",
      "PlayerId": 0,
      "Position": "string",
      "PositionCategory": "string",
      "RotoWirePlayerID": 0,
      "ShortName": "string",
      "Updated": "string",
      "UsaTodayHeadshotNoBackgroundUpdated": "string",
      "UsaTodayHeadshotNoBackgroundUrl": "string",
      "UsaTodayHeadshotUpdated": "string",
      "UsaTodayHeadshotUrl": "string",
      "UsaTodayPlayerID": 0,
      "Weight": 0
    }
  ],
  "TeamId": 0,
  "Type": "string",
  "VenueId": 0,
  "VenueName": "string",
  "Website": "string",
  "WikipediaLogoUrl": "string",
  "WikipediaWordMarkUrl": "string",
  "Zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|boolean|false|none|none|
|Address|string \| null|false|none|none|
|AreaId|integer \| null|false|none|none|
|AreaName|string \| null|false|none|none|
|City|string \| null|false|none|none|
|ClubColor1|string \| null|false|none|none|
|ClubColor2|string \| null|false|none|none|
|ClubColor3|string \| null|false|none|none|
|Email|string \| null|false|none|none|
|Fax|string \| null|false|none|none|
|Founded|integer \| null|false|none|none|
|FullName|string \| null|false|none|none|
|Gender|string \| null|false|none|none|
|GlobalTeamId|integer|false|none|none|
|Key|string \| null|false|none|none|
|Name|string \| null|false|none|none|
|Nickname1|string \| null|false|none|none|
|Nickname2|string \| null|false|none|none|
|Nickname3|string \| null|false|none|none|
|Phone|string \| null|false|none|none|
|Players|[[Player](#schemaplayer)]|false|none|none|
|TeamId|integer|false|none|none|
|Type|string \| null|false|none|none|
|VenueId|integer \| null|false|none|none|
|VenueName|string \| null|false|none|none|
|Website|string \| null|false|none|none|
|WikipediaLogoUrl|string \| null|false|none|none|
|WikipediaWordMarkUrl|string \| null|false|none|none|
|Zip|string \| null|false|none|none|

<h2 id="tocS_TeamGame">TeamGame</h2>
<!-- backwards compatibility -->
<a id="schemateamgame"></a>
<a id="schema_TeamGame"></a>
<a id="tocSteamgame"></a>
<a id="tocsteamgame"></a>

```json
{
  "Assists": 0,
  "BlockedShots": 0,
  "CornersWon": 0,
  "Crosses": 0,
  "DateTime": "string",
  "Day": "string",
  "DefenderCleanSheets": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsMondogoal": 0,
  "FantasyPointsYahoo": 0,
  "Fouled": 0,
  "Fouls": 0,
  "GameId": 0,
  "Games": 0,
  "GlobalGameId": 0,
  "GlobalOpponentId": 0,
  "GlobalTeamId": 0,
  "GoalkeeperCleanSheets": 0,
  "GoalkeeperGoalsAgainst": 0,
  "GoalkeeperSaves": 0,
  "GoalkeeperSingleGoalAgainst": 0,
  "GoalkeeperWins": 0,
  "Goals": 0,
  "HomeOrAway": "string",
  "Interceptions": 0,
  "IsGameOver": true,
  "LastManTackle": 0,
  "Minutes": 0,
  "Name": "string",
  "Offsides": 0,
  "Opponent": "string",
  "OpponentId": 0,
  "OpponentScore": 0,
  "OwnGoals": 0,
  "Passes": 0,
  "PassesCompleted": 0,
  "PenaltiesConceded": 0,
  "PenaltiesWon": 0,
  "PenaltyKickGoals": 0,
  "PenaltyKickMisses": 0,
  "PenaltyKickSaves": 0,
  "Possession": 0,
  "RedCards": 0,
  "RoundId": 0,
  "Score": 0,
  "Season": 0,
  "SeasonType": 0,
  "Shots": 0,
  "ShotsOnGoal": 0,
  "StatId": 0,
  "Tackles": 0,
  "TacklesWon": 0,
  "Team": "string",
  "TeamId": 0,
  "Touches": 0,
  "Updated": "string",
  "UpdatedUtc": "string",
  "YellowCards": 0,
  "YellowRedCards": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|CornersWon|number \| null|false|none|none|
|Crosses|number \| null|false|none|none|
|DateTime|string \| null|false|none|none|
|Day|string \| null|false|none|none|
|DefenderCleanSheets|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsMondogoal|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|Fouled|number \| null|false|none|none|
|Fouls|number \| null|false|none|none|
|GameId|integer \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalGameId|integer \| null|false|none|none|
|GlobalOpponentId|integer \| null|false|none|none|
|GlobalTeamId|integer \| null|false|none|none|
|GoalkeeperCleanSheets|number \| null|false|none|none|
|GoalkeeperGoalsAgainst|number \| null|false|none|none|
|GoalkeeperSaves|number \| null|false|none|none|
|GoalkeeperSingleGoalAgainst|number \| null|false|none|none|
|GoalkeeperWins|number \| null|false|none|none|
|Goals|number \| null|false|none|none|
|HomeOrAway|string \| null|false|none|none|
|Interceptions|number \| null|false|none|none|
|IsGameOver|boolean|false|none|none|
|LastManTackle|number \| null|false|none|none|
|Minutes|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|Offsides|number \| null|false|none|none|
|Opponent|string \| null|false|none|none|
|OpponentId|integer \| null|false|none|none|
|OpponentScore|number \| null|false|none|none|
|OwnGoals|number \| null|false|none|none|
|Passes|number \| null|false|none|none|
|PassesCompleted|number \| null|false|none|none|
|PenaltiesConceded|number \| null|false|none|none|
|PenaltiesWon|number \| null|false|none|none|
|PenaltyKickGoals|number \| null|false|none|none|
|PenaltyKickMisses|number \| null|false|none|none|
|PenaltyKickSaves|number \| null|false|none|none|
|Possession|number \| null|false|none|none|
|RedCards|number \| null|false|none|none|
|RoundId|integer \| null|false|none|none|
|Score|number \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Shots|number \| null|false|none|none|
|ShotsOnGoal|number \| null|false|none|none|
|StatId|integer|false|none|none|
|Tackles|number \| null|false|none|none|
|TacklesWon|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamId|integer \| null|false|none|none|
|Touches|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UpdatedUtc|string \| null|false|none|none|
|YellowCards|number \| null|false|none|none|
|YellowRedCards|number \| null|false|none|none|

<h2 id="tocS_TeamSeason">TeamSeason</h2>
<!-- backwards compatibility -->
<a id="schemateamseason"></a>
<a id="schema_TeamSeason"></a>
<a id="tocSteamseason"></a>
<a id="tocsteamseason"></a>

```json
{
  "Assists": 0,
  "BlockedShots": 0,
  "CornersWon": 0,
  "Crosses": 0,
  "DefenderCleanSheets": 0,
  "FantasyPoints": 0,
  "FantasyPointsDraftKings": 0,
  "FantasyPointsFanDuel": 0,
  "FantasyPointsMondogoal": 0,
  "FantasyPointsYahoo": 0,
  "Fouled": 0,
  "Fouls": 0,
  "Games": 0,
  "GlobalTeamId": 0,
  "GoalkeeperCleanSheets": 0,
  "GoalkeeperGoalsAgainst": 0,
  "GoalkeeperSaves": 0,
  "GoalkeeperSingleGoalAgainst": 0,
  "GoalkeeperWins": 0,
  "Goals": 0,
  "Interceptions": 0,
  "LastManTackle": 0,
  "Minutes": 0,
  "Name": "string",
  "Offsides": 0,
  "OpponentScore": 0,
  "OwnGoals": 0,
  "Passes": 0,
  "PassesCompleted": 0,
  "PenaltiesConceded": 0,
  "PenaltiesWon": 0,
  "PenaltyKickGoals": 0,
  "PenaltyKickMisses": 0,
  "PenaltyKickSaves": 0,
  "Possession": 0,
  "RedCards": 0,
  "RoundId": 0,
  "Score": 0,
  "Season": 0,
  "SeasonType": 0,
  "Shots": 0,
  "ShotsOnGoal": 0,
  "StatId": 0,
  "Tackles": 0,
  "TacklesWon": 0,
  "Team": "string",
  "TeamId": 0,
  "Touches": 0,
  "Updated": "string",
  "UpdatedUtc": "string",
  "YellowCards": 0,
  "YellowRedCards": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|number \| null|false|none|none|
|BlockedShots|number \| null|false|none|none|
|CornersWon|number \| null|false|none|none|
|Crosses|number \| null|false|none|none|
|DefenderCleanSheets|number \| null|false|none|none|
|FantasyPoints|number \| null|false|none|none|
|FantasyPointsDraftKings|number \| null|false|none|none|
|FantasyPointsFanDuel|number \| null|false|none|none|
|FantasyPointsMondogoal|number \| null|false|none|none|
|FantasyPointsYahoo|number \| null|false|none|none|
|Fouled|number \| null|false|none|none|
|Fouls|number \| null|false|none|none|
|Games|integer \| null|false|none|none|
|GlobalTeamId|integer \| null|false|none|none|
|GoalkeeperCleanSheets|number \| null|false|none|none|
|GoalkeeperGoalsAgainst|number \| null|false|none|none|
|GoalkeeperSaves|number \| null|false|none|none|
|GoalkeeperSingleGoalAgainst|number \| null|false|none|none|
|GoalkeeperWins|number \| null|false|none|none|
|Goals|number \| null|false|none|none|
|Interceptions|number \| null|false|none|none|
|LastManTackle|number \| null|false|none|none|
|Minutes|number \| null|false|none|none|
|Name|string \| null|false|none|none|
|Offsides|number \| null|false|none|none|
|OpponentScore|number \| null|false|none|none|
|OwnGoals|number \| null|false|none|none|
|Passes|number \| null|false|none|none|
|PassesCompleted|number \| null|false|none|none|
|PenaltiesConceded|number \| null|false|none|none|
|PenaltiesWon|number \| null|false|none|none|
|PenaltyKickGoals|number \| null|false|none|none|
|PenaltyKickMisses|number \| null|false|none|none|
|PenaltyKickSaves|number \| null|false|none|none|
|Possession|number \| null|false|none|none|
|RedCards|number \| null|false|none|none|
|RoundId|integer \| null|false|none|none|
|Score|number \| null|false|none|none|
|Season|integer|false|none|none|
|SeasonType|integer|false|none|none|
|Shots|number \| null|false|none|none|
|ShotsOnGoal|number \| null|false|none|none|
|StatId|integer|false|none|none|
|Tackles|number \| null|false|none|none|
|TacklesWon|number \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamId|integer \| null|false|none|none|
|Touches|number \| null|false|none|none|
|Updated|string \| null|false|none|none|
|UpdatedUtc|string \| null|false|none|none|
|YellowCards|number \| null|false|none|none|
|YellowRedCards|number \| null|false|none|none|

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
  "Surface": "string",
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
|Surface|string \| null|false|none|none|
|VenueId|integer|false|none|none|
|Zip|string \| null|false|none|none|
