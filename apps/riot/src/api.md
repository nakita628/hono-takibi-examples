<h1 id="riot-api">Riot API vf11a6ec7a4e117eac0a1997e9bda89bd6a5d52bf</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


OpenAPI/Swagger version of the [Riot API](https://developer.riotgames.com/). Automatically generated daily.
## OpenAPI Spec File
The following versions of the Riot API spec file are available:
- `openapi-3.0.0.json` ([view file](../openapi-3.0.0.json), [ui select](?url=../openapi-3.0.0.json))
- `openapi-3.0.0.min.json` ([view file](../openapi-3.0.0.min.json), [ui select](?url=../openapi-3.0.0.min.json))
- `openapi-3.0.0.yml` ([view file](../openapi-3.0.0.yml), [ui select](?url=../openapi-3.0.0.yml))
- `openapi-3.0.0.min.yml` ([view file](../openapi-3.0.0.min.yml), [ui select](?url=../openapi-3.0.0.min.yml))
- `swaggerspec-2.0.json` ([view file](../swaggerspec-2.0.json), [ui select](?url=../swaggerspec-2.0.json))
- `swaggerspec-2.0.min.json` ([view file](../swaggerspec-2.0.min.json), [ui select](?url=../swaggerspec-2.0.min.json))
- `swaggerspec-2.0.yml` ([view file](../swaggerspec-2.0.yml), [ui select](?url=../swaggerspec-2.0.yml))
- `swaggerspec-2.0.min.yml` ([view file](../swaggerspec-2.0.min.yml), [ui select](?url=../swaggerspec-2.0.min.yml))
## Other Files
- Missing DTOs: [`missing.json`](../missing.json)
- Routes Table: [`routesTable.json`](../routesTable.json)
- [Enum Files](../enums/)
## Source Code
Source code on [GitHub](https://github.com/MingweiSamuel/riotapi-schema). Pull requests welcome!
## Automatically Generated
Rebuilt on [Travis CI](https://travis-ci.com/MingweiSamuel/riotapi-schema/builds) daily.
***

Base URLs:

* <a href="https://americas.api.riotgames.com">https://americas.api.riotgames.com</a>

<a href="https://developer.riotgames.com/terms">Terms of service</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query. API key in query param.

* API Key (X-Riot-Token)
    - Parameter Name: **X-Riot-Token**, in: header. API key in header.

- oAuth2 authentication. Riot Sign-On (RSO).

    - Flow: authorizationCode
    - Authorization URL = [https://auth.riotgames.com/authorize](https://auth.riotgames.com/authorize)
    - Token URL = [https://auth.riotgames.com/token](https://auth.riotgames.com/token)

|Scope|Scope Description|
|---|---|
|openid|Required, scope for authentication.|
|cpid|Returns the game region for League of Legends.|
|offline_access|Allows Refresh Tokens to be used to retrieve new access_tokens that have access to the /userinfo endpoint.|

<h1 id="riot-api-account-v1">account-v1</h1>

## Get account by puuid

<a id="opIdaccount-v1.getByPuuid"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/riot/account/v1/accounts/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /riot/account/v1/accounts/by-puuid/{puuid}`

Get account by puuid

<a href="https://developer.riotgames.com/api-methods/#account-v1/GET_getByPuuid">Official API Reference</a>

<h3 id="get-account-by-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string"
}
```

<h3 id="get-account-by-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account-v1.AccountDto](#schemaaccount-v1.accountdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get account by riot id

<a id="opIdaccount-v1.getByRiotId"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/riot/account/v1/accounts/by-riot-id/string/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}`

Get account by riot id

<a href="https://developer.riotgames.com/api-methods/#account-v1/GET_getByRiotId">Official API Reference</a>

<h3 id="get-account-by-riot-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagLine|path|string|true|When querying for a player by their riot id, the gameName and tagLine query params are required.|
|gameName|path|string|true|When querying for a player by their riot id, the gameName and tagLine query params are required.|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string"
}
```

<h3 id="get-account-by-riot-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account-v1.AccountDto](#schemaaccount-v1.accountdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get account by access token

<a id="opIdaccount-v1.getByAccessToken"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/riot/account/v1/accounts/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /riot/account/v1/accounts/me`

Get account by access token

<a href="https://developer.riotgames.com/api-methods/#account-v1/GET_getByAccessToken">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string"
}
```

<h3 id="get-account-by-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account-v1.AccountDto](#schemaaccount-v1.accountdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

## Get active shard for a player

<a id="opIdaccount-v1.getActiveShard"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/riot/account/v1/active-shards/by-game/val/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}`

Get active shard for a player

<a href="https://developer.riotgames.com/api-methods/#account-v1/GET_getActiveShard">Official API Reference</a>

<h3 id="get-active-shard-for-a-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|game|path|string|true|none|
|puuid|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|game|val|
|game|lor|
|game|2xko|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "game": "string",
  "activeShard": "string"
}
```

<h3 id="get-active-shard-for-a-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account-v1.ActiveShardDto](#schemaaccount-v1.activesharddto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get active region (lol and tft)

<a id="opIdaccount-v1.getActiveRegion"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/riot/account/v1/region/by-game/lol/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /riot/account/v1/region/by-game/{game}/by-puuid/{puuid}`

Get active region (lol and tft)

<a href="https://developer.riotgames.com/api-methods/#account-v1/GET_getActiveRegion">Official API Reference</a>

<h3 id="get-active-region-lol-and-tft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|
|game|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|game|lol|
|game|tft|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "game": "string",
  "region": "string"
}
```

<h3 id="get-active-region-lol-and-tft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account-v1.AccountRegionDTO](#schemaaccount-v1.accountregiondto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-champion-mastery-v4">champion-mastery-v4</h1>

## Get all champion mastery entries sorted by number of champion points descending.

<a id="opIdchampion-mastery-v4.getAllChampionMasteriesByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}`

Get all champion mastery entries sorted by number of champion points descending.

<a href="https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getAllChampionMasteriesByPUUID">Official API Reference</a>

<h3 id="get-all-champion-mastery-entries-sorted-by-number-of-champion-points-descending-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "championPointsUntilNextLevel": 0,
    "chestGranted": true,
    "championId": 0,
    "lastPlayTime": 0,
    "championLevel": 0,
    "championPoints": 0,
    "championPointsSinceLastLevel": 0,
    "markRequiredForNextLevel": 0,
    "championSeasonMilestone": 0,
    "nextSeasonMilestone": {
      "requireGradeCounts": {
        "property1": 0,
        "property2": 0
      },
      "rewardMarks": 0,
      "bonus": true,
      "rewardConfig": {
        "rewardValue": "string",
        "rewardType": "string",
        "maximumReward": 0
      },
      "totalGamesRequires": 0
    },
    "tokensEarned": 0,
    "milestoneGrades": [
      "string"
    ]
  }
]
```

<h3 id="get-all-champion-mastery-entries-sorted-by-number-of-champion-points-descending-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-all-champion-mastery-entries-sorted-by-number-of-champion-points-descending-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[champion-mastery-v4.ChampionMasteryDto](#schemachampion-mastery-v4.championmasterydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get a champion mastery by puuid and champion ID.

<a id="opIdchampion-mastery-v4.getChampionMasteryByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/string/by-champion/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}/by-champion/{championId}`

Get a champion mastery by puuid and champion ID.

<a href="https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getChampionMasteryByPUUID">Official API Reference</a>

<h3 id="get-a-champion-mastery-by-puuid-and-champion-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|none|
|championId|path|integer(int32)|true|Champion ID to retrieve Champion Mastery.|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "championPointsUntilNextLevel": 0,
  "chestGranted": true,
  "championId": 0,
  "lastPlayTime": 0,
  "championLevel": 0,
  "championPoints": 0,
  "championPointsSinceLastLevel": 0,
  "markRequiredForNextLevel": 0,
  "championSeasonMilestone": 0,
  "nextSeasonMilestone": {
    "requireGradeCounts": {
      "property1": 0,
      "property2": 0
    },
    "rewardMarks": 0,
    "bonus": true,
    "rewardConfig": {
      "rewardValue": "string",
      "rewardType": "string",
      "maximumReward": 0
    },
    "totalGamesRequires": 0
  },
  "tokensEarned": 0,
  "milestoneGrades": [
    "string"
  ]
}
```

<h3 id="get-a-champion-mastery-by-puuid-and-champion-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[champion-mastery-v4.ChampionMasteryDto](#schemachampion-mastery-v4.championmasterydto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get specified number of top champion mastery entries sorted by number of champion points descending.

<a id="opIdchampion-mastery-v4.getTopChampionMasteriesByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/string/top?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}/top`

Get specified number of top champion mastery entries sorted by number of champion points descending.

<a href="https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getTopChampionMasteriesByPUUID">Official API Reference</a>

<h3 id="get-specified-number-of-top-champion-mastery-entries-sorted-by-number-of-champion-points-descending-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|none|
|count|query|integer(int32)|false|Number of entries to retrieve, defaults to 3.|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "championPointsUntilNextLevel": 0,
    "chestGranted": true,
    "championId": 0,
    "lastPlayTime": 0,
    "championLevel": 0,
    "championPoints": 0,
    "championPointsSinceLastLevel": 0,
    "markRequiredForNextLevel": 0,
    "championSeasonMilestone": 0,
    "nextSeasonMilestone": {
      "requireGradeCounts": {
        "property1": 0,
        "property2": 0
      },
      "rewardMarks": 0,
      "bonus": true,
      "rewardConfig": {
        "rewardValue": "string",
        "rewardType": "string",
        "maximumReward": 0
      },
      "totalGamesRequires": 0
    },
    "tokensEarned": 0,
    "milestoneGrades": [
      "string"
    ]
  }
]
```

<h3 id="get-specified-number-of-top-champion-mastery-entries-sorted-by-number-of-champion-points-descending-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-specified-number-of-top-champion-mastery-entries-sorted-by-number-of-champion-points-descending-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[champion-mastery-v4.ChampionMasteryDto](#schemachampion-mastery-v4.championmasterydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get a player's total champion mastery score, which is the sum of individual champion mastery levels.

<a id="opIdchampion-mastery-v4.getChampionMasteryScoreByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/champion-mastery/v4/scores/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/champion-mastery/v4/scores/by-puuid/{encryptedPUUID}`

Get a player's total champion mastery score, which is the sum of individual champion mastery levels.

<a href="https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getChampionMasteryScoreByPUUID">Official API Reference</a>

<h3 id="get-a-players-total-champion-mastery-score-which-is-the-sum-of-individual-champion-mastery-levels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|none|

> Example responses

> 200 Response

```json
0
```

<h3 id="get-a-players-total-champion-mastery-score-which-is-the-sum-of-individual-champion-mastery-levels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-champion-v3">champion-v3</h1>

## Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)

<a id="opIdchampion-v3.getChampionInfo"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/platform/v3/champion-rotations`

Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)

<a href="https://developer.riotgames.com/api-methods/#champion-v3/GET_getChampionInfo">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "newplayer": [
    0
  ],
  "sr": [
    0
  ]
}
```

<h3 id="returns-champion-rotations-including-free-to-play-and-low-level-free-to-play-rotations-rest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[champion-v3.ChampionInfo](#schemachampion-v3.championinfo)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-clash-v1">clash-v1</h1>

## Get players by puuid

<a id="opIdclash-v1.getPlayersByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/clash/v1/players/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/clash/v1/players/by-puuid/{puuid}`

Get players by puuid
## Implementation Notes
This endpoint returns a list of active Clash players for a given PUUID. If a summoner registers for multiple tournaments at the same time (e.g., Saturday and Sunday) then both registrations would appear in this list.

<a href="https://developer.riotgames.com/api-methods/#clash-v1/GET_getPlayersByPUUID">Official API Reference</a>

<h3 id="get-players-by-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "teamId": "string",
    "position": "UNSELECTED",
    "role": "CAPTAIN"
  }
]
```

<h3 id="get-players-by-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-players-by-puuid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[clash-v1.PlayerDto](#schemaclash-v1.playerdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get team by ID.

<a id="opIdclash-v1.getTeamById"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/clash/v1/teams/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/clash/v1/teams/{teamId}`

Get team by ID.

<a href="https://developer.riotgames.com/api-methods/#clash-v1/GET_getTeamById">Official API Reference</a>

<h3 id="get-team-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "tournamentId": 0,
  "name": "string",
  "iconId": 0,
  "tier": 0,
  "captain": "string",
  "abbreviation": "string",
  "players": [
    {
      "puuid": "string",
      "teamId": "string",
      "position": "UNSELECTED",
      "role": "CAPTAIN"
    }
  ]
}
```

<h3 id="get-team-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[clash-v1.TeamDto](#schemaclash-v1.teamdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get all active or upcoming tournaments.

<a id="opIdclash-v1.getTournaments"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/clash/v1/tournaments?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/clash/v1/tournaments`

Get all active or upcoming tournaments.

<a href="https://developer.riotgames.com/api-methods/#clash-v1/GET_getTournaments">Official API Reference</a>

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "themeId": 0,
    "nameKey": "string",
    "nameKeySecondary": "string",
    "schedule": [
      {
        "id": 0,
        "registrationTime": 0,
        "startTime": 0,
        "cancelled": true
      }
    ]
  }
]
```

<h3 id="get-all-active-or-upcoming-tournaments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-all-active-or-upcoming-tournaments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[clash-v1.TournamentDto](#schemaclash-v1.tournamentdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get tournament by team ID.

<a id="opIdclash-v1.getTournamentByTeam"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/clash/v1/tournaments/by-team/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/clash/v1/tournaments/by-team/{teamId}`

Get tournament by team ID.

<a href="https://developer.riotgames.com/api-methods/#clash-v1/GET_getTournamentByTeam">Official API Reference</a>

<h3 id="get-tournament-by-team-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "themeId": 0,
  "nameKey": "string",
  "nameKeySecondary": "string",
  "schedule": [
    {
      "id": 0,
      "registrationTime": 0,
      "startTime": 0,
      "cancelled": true
    }
  ]
}
```

<h3 id="get-tournament-by-team-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[clash-v1.TournamentDto](#schemaclash-v1.tournamentdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get tournament by ID.

<a id="opIdclash-v1.getTournamentById"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/clash/v1/tournaments/0?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/clash/v1/tournaments/{tournamentId}`

Get tournament by ID.

<a href="https://developer.riotgames.com/api-methods/#clash-v1/GET_getTournamentById">Official API Reference</a>

<h3 id="get-tournament-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentId|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "themeId": 0,
  "nameKey": "string",
  "nameKeySecondary": "string",
  "schedule": [
    {
      "id": 0,
      "registrationTime": 0,
      "startTime": 0,
      "cancelled": true
    }
  ]
}
```

<h3 id="get-tournament-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[clash-v1.TournamentDto](#schemaclash-v1.tournamentdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-league-exp-v4">league-exp-v4</h1>

## Get all the league entries.

<a id="opIdleague-exp-v4.getLeagueEntries"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/league-exp/v4/entries/{queue}/{tier}/{division}`

Get all the league entries.

<a href="https://developer.riotgames.com/api-methods/#league-exp-v4/GET_getLeagueEntries">Official API Reference</a>

<h3 id="get-all-the-league-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|Note that the queue value must be a valid ranked queue.|
|tier|path|string|true|none|
|division|path|string|true|none|
|page|query|integer(int32)|false|Defaults to 1. Starts with page 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_SOLO_5x5|
|queue|RANKED_TFT|
|queue|RANKED_FLEX_SR|
|queue|RANKED_FLEX_TT|
|tier|CHALLENGER|
|tier|GRANDMASTER|
|tier|MASTER|
|tier|DIAMOND|
|tier|EMERALD|
|tier|PLATINUM|
|tier|GOLD|
|tier|SILVER|
|tier|BRONZE|
|tier|IRON|
|division|I|
|division|II|
|division|III|
|division|IV|

> Example responses

> 200 Response

```json
[
  {
    "leagueId": "string",
    "summonerId": "string",
    "puuid": "string",
    "queueType": "string",
    "tier": "string",
    "rank": "string",
    "leaguePoints": 0,
    "wins": 0,
    "losses": 0,
    "hotStreak": true,
    "veteran": true,
    "freshBlood": true,
    "inactive": true,
    "miniSeries": {
      "losses": 0,
      "progress": "string",
      "target": 0,
      "wins": 0
    }
  }
]
```

<h3 id="get-all-the-league-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-all-the-league-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[league-exp-v4.LeagueEntryDTO](#schemaleague-exp-v4.leagueentrydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-league-v4">league-v4</h1>

## Get the challenger league for given queue.

<a id="opIdleague-v4.getChallengerLeague"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/league/v4/challengerleagues/by-queue/{queue}`

Get the challenger league for given queue.

<a href="https://developer.riotgames.com/api-methods/#league-v4/GET_getChallengerLeague">Official API Reference</a>

<h3 id="get-the-challenger-league-for-given-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_SOLO_5x5|
|queue|RANKED_FLEX_SR|
|queue|RANKED_FLEX_TT|

> Example responses

> 200 Response

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string",
      "summonerId": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

<h3 id="get-the-challenger-league-for-given-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[league-v4.LeagueListDTO](#schemaleague-v4.leaguelistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get league entries in all queues for a given puuid

<a id="opIdleague-v4.getLeagueEntriesByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/league/v4/entries/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/league/v4/entries/by-puuid/{encryptedPUUID}`

Get league entries in all queues for a given puuid

<a href="https://developer.riotgames.com/api-methods/#league-v4/GET_getLeagueEntriesByPUUID">Official API Reference</a>

<h3 id="get-league-entries-in-all-queues-for-a-given-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "leagueId": "string",
    "puuid": "string",
    "queueType": "string",
    "tier": "string",
    "rank": "string",
    "leaguePoints": 0,
    "wins": 0,
    "losses": 0,
    "hotStreak": true,
    "veteran": true,
    "freshBlood": true,
    "inactive": true,
    "miniSeries": {
      "losses": 0,
      "progress": "string",
      "target": 0,
      "wins": 0
    },
    "summonerId": "string"
  }
]
```

<h3 id="get-league-entries-in-all-queues-for-a-given-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-league-entries-in-all-queues-for-a-given-puuid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[league-v4.LeagueEntryDTO](#schemaleague-v4.leagueentrydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get all the league entries.

<a id="opIdleague-v4.getLeagueEntries"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/I?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/league/v4/entries/{queue}/{tier}/{division}`

Get all the league entries.

<a href="https://developer.riotgames.com/api-methods/#league-v4/GET_getLeagueEntries">Official API Reference</a>

<h3 id="get-all-the-league-entries-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|division|path|string|true|none|
|tier|path|string|true|none|
|queue|path|string|true|Note that the queue value must be a valid ranked queue.|
|page|query|integer(int32)|false|Defaults to 1. Starts with page 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|division|I|
|division|II|
|division|III|
|division|IV|
|tier|DIAMOND|
|tier|EMERALD|
|tier|PLATINUM|
|tier|GOLD|
|tier|SILVER|
|tier|BRONZE|
|tier|IRON|
|queue|RANKED_SOLO_5x5|
|queue|RANKED_FLEX_SR|
|queue|RANKED_FLEX_TT|

> Example responses

> 200 Response

```json
[
  {
    "leagueId": "string",
    "puuid": "string",
    "queueType": "string",
    "tier": "string",
    "rank": "string",
    "leaguePoints": 0,
    "wins": 0,
    "losses": 0,
    "hotStreak": true,
    "veteran": true,
    "freshBlood": true,
    "inactive": true,
    "miniSeries": {
      "losses": 0,
      "progress": "string",
      "target": 0,
      "wins": 0
    },
    "summonerId": "string"
  }
]
```

<h3 id="get-all-the-league-entries-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-all-the-league-entries-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[league-v4.LeagueEntryDTO](#schemaleague-v4.leagueentrydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get the grandmaster league of a specific queue.

<a id="opIdleague-v4.getGrandmasterLeague"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/league/v4/grandmasterleagues/by-queue/{queue}`

Get the grandmaster league of a specific queue.

<a href="https://developer.riotgames.com/api-methods/#league-v4/GET_getGrandmasterLeague">Official API Reference</a>

<h3 id="get-the-grandmaster-league-of-a-specific-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_SOLO_5x5|
|queue|RANKED_FLEX_SR|
|queue|RANKED_FLEX_TT|

> Example responses

> 200 Response

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string",
      "summonerId": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

<h3 id="get-the-grandmaster-league-of-a-specific-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[league-v4.LeagueListDTO](#schemaleague-v4.leaguelistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get the master league for given queue.

<a id="opIdleague-v4.getMasterLeague"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/league/v4/masterleagues/by-queue/{queue}`

Get the master league for given queue.

<a href="https://developer.riotgames.com/api-methods/#league-v4/GET_getMasterLeague">Official API Reference</a>

<h3 id="get-the-master-league-for-given-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_SOLO_5x5|
|queue|RANKED_FLEX_SR|
|queue|RANKED_FLEX_TT|

> Example responses

> 200 Response

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string",
      "summonerId": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

<h3 id="get-the-master-league-for-given-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[league-v4.LeagueListDTO](#schemaleague-v4.leaguelistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-lol-challenges-v1">lol-challenges-v1</h1>

## List of all basic challenge configuration information (includes all translations for names and descriptions)

<a id="opIdlol-challenges-v1.getAllChallengeConfigs"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/challenges/v1/challenges/config?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/challenges/v1/challenges/config`

List of all basic challenge configuration information (includes all translations for names and descriptions)

<a href="https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getAllChallengeConfigs">Official API Reference</a>

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "localizedNames": {
      "property1": {
        "property1": "string",
        "property2": "string"
      },
      "property2": {
        "property1": "string",
        "property2": "string"
      }
    },
    "state": "DISABLED",
    "tracking": "LIFETIME",
    "startTimestamp": 0,
    "endTimestamp": 0,
    "leaderboard": true,
    "thresholds": {
      "property1": 0,
      "property2": 0
    }
  }
]
```

<h3 id="list-of-all-basic-challenge-configuration-information-includes-all-translations-for-names-and-descriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="list-of-all-basic-challenge-configuration-information-includes-all-translations-for-names-and-descriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[lol-challenges-v1.ChallengeConfigInfoDto](#schemalol-challenges-v1.challengeconfiginfodto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Map of level to percentile of players who have achieved it - keys: ChallengeId -&gt; Season -&gt; Level -&gt; percentile of players who achieved it

<a id="opIdlol-challenges-v1.getAllChallengePercentiles"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/challenges/v1/challenges/percentiles?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/challenges/v1/challenges/percentiles`

Map of level to percentile of players who have achieved it - keys: ChallengeId -> Season -> Level -> percentile of players who achieved it

<a href="https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getAllChallengePercentiles">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "property1": {
    "property1": 0,
    "property2": 0
  },
  "property2": {
    "property1": 0,
    "property2": 0
  }
}
```

<h3 id="map-of-level-to-percentile-of-players-who-have-achieved-it---keys-challengeid---season---level---percentile-of-players-who-achieved-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="map-of-level-to-percentile-of-players-who-have-achieved-it---keys-challengeid---season---level---percentile-of-players-who-achieved-it-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|
|» **additionalProperties**|number(double)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get challenge configuration (REST)

<a id="opIdlol-challenges-v1.getChallengeConfigs"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/challenges/v1/challenges/0/config?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/challenges/v1/challenges/{challengeId}/config`

Get challenge configuration (REST)

<a href="https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getChallengeConfigs">Official API Reference</a>

<h3 id="get-challenge-configuration-rest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|challengeId|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "localizedNames": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "DISABLED",
  "tracking": "LIFETIME",
  "startTimestamp": 0,
  "endTimestamp": 0,
  "leaderboard": true,
  "thresholds": {
    "property1": 0,
    "property2": 0
  }
}
```

<h3 id="get-challenge-configuration-rest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[lol-challenges-v1.ChallengeConfigInfoDto](#schemalol-challenges-v1.challengeconfiginfodto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Return top players for each level. Level must be MASTER, GRANDMASTER or CHALLENGER.

<a id="opIdlol-challenges-v1.getChallengeLeaderboards"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/challenges/v1/challenges/0/leaderboards/by-level/NONE?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/challenges/v1/challenges/{challengeId}/leaderboards/by-level/{level}`

Return top players for each level. Level must be MASTER, GRANDMASTER or CHALLENGER.

<a href="https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getChallengeLeaderboards">Official API Reference</a>

<h3 id="return-top-players-for-each-level-level-must-be-master-grandmaster-or-challenger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|level|path|string|true|none|
|challengeId|path|integer(int64)|true|none|
|limit|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|level|NONE|
|level|IRON|
|level|BRONZE|
|level|SILVER|
|level|GOLD|
|level|PLATINUM|
|level|DIAMOND|
|level|MASTER|
|level|GRANDMASTER|
|level|CHALLENGER|
|level|HIGHEST_NOT_LEADERBOARD_ONLY|
|level|HIGHEST|
|level|LOWEST|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "value": 0,
    "position": 0
  }
]
```

<h3 id="return-top-players-for-each-level-level-must-be-master-grandmaster-or-challenger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="return-top-players-for-each-level-level-must-be-master-grandmaster-or-challenger-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[lol-challenges-v1.ApexPlayerInfoDto](#schemalol-challenges-v1.apexplayerinfodto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Map of level to percentile of players who have achieved it

<a id="opIdlol-challenges-v1.getChallengePercentiles"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/challenges/v1/challenges/0/percentiles?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/challenges/v1/challenges/{challengeId}/percentiles`

Map of level to percentile of players who have achieved it

<a href="https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getChallengePercentiles">Official API Reference</a>

<h3 id="map-of-level-to-percentile-of-players-who-have-achieved-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|challengeId|path|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="map-of-level-to-percentile-of-players-who-have-achieved-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="map-of-level-to-percentile-of-players-who-have-achieved-it-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|number(double)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Returns player information with list of all progressed challenges (REST)

<a id="opIdlol-challenges-v1.getPlayerData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/challenges/v1/player-data/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/challenges/v1/player-data/{puuid}`

Returns player information with list of all progressed challenges (REST)

<a href="https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getPlayerData">Official API Reference</a>

<h3 id="returns-player-information-with-list-of-all-progressed-challenges-rest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "challenges": [
    {
      "percentile": 0,
      "playersInLevel": 0,
      "achievedTime": 0,
      "value": 0,
      "challengeId": 0,
      "level": "NONE",
      "position": 0
    }
  ],
  "preferences": {
    "bannerAccent": "string",
    "title": "string",
    "challengeIds": [
      0
    ],
    "crestBorder": "string",
    "prestigeCrestBorderLevel": 0
  },
  "totalPoints": {
    "level": "string",
    "current": 0,
    "max": 0,
    "percentile": 0,
    "position": 0
  },
  "categoryPoints": {
    "property1": {
      "level": "string",
      "current": 0,
      "max": 0,
      "percentile": 0,
      "position": 0
    },
    "property2": {
      "level": "string",
      "current": 0,
      "max": 0,
      "percentile": 0,
      "position": 0
    }
  }
}
```

<h3 id="returns-player-information-with-list-of-all-progressed-challenges-rest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[lol-challenges-v1.PlayerInfoDto](#schemalol-challenges-v1.playerinfodto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-lol-rso-match-v1">lol-rso-match-v1</h1>

## Get a list of match ids by player access token - Includes custom matches

<a id="opIdlol-rso-match-v1.getMatchIds"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lol/rso-match/v1/matches/ids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lol/rso-match/v1/matches/ids`

Get a list of match ids by player access token - Includes custom matches

<a href="https://developer.riotgames.com/api-methods/#lol-rso-match-v1/GET_getMatchIds">Official API Reference</a>

<h3 id="get-a-list-of-match-ids-by-player-access-token---includes-custom-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer(int32)|false|Defaults to 20. Valid values: 0 to 100. Number of match ids to return.|
|start|query|integer(int32)|false|Defaults to 0. Start index.|
|type|query|string|false|Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.|
|queue|query|integer(int32)|false|Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.|
|endTime|query|integer(int64)|false|Epoch timestamp in seconds.|
|startTime|query|integer(int64)|false|Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ranked|
|type|normal|
|type|tourney|
|type|tutorial|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-a-list-of-match-ids-by-player-access-token---includes-custom-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-a-list-of-match-ids-by-player-access-token---includes-custom-matches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

## Get a match by match id

<a id="opIdlol-rso-match-v1.getMatch"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lol/rso-match/v1/matches/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lol/rso-match/v1/matches/{matchId}`

Get a match by match id

<a href="https://developer.riotgames.com/api-methods/#lol-rso-match-v1/GET_getMatch">Official API Reference</a>

<h3 id="get-a-match-by-match-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "dataVersion": "string",
    "matchId": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "gameCreation": 0,
    "gameDuration": 0,
    "gameEndTimestamp": 0,
    "gameId": 0,
    "gameMode": "string",
    "gameName": "string",
    "gameStartTimestamp": 0,
    "gameType": "string",
    "gameVersion": "string",
    "mapId": 0,
    "participants": [
      {
        "allInPings": 0,
        "assistMePings": 0,
        "assists": 0,
        "baronKills": 0,
        "bountyLevel": 0,
        "champExperience": 0,
        "champLevel": 0,
        "championId": 0,
        "championName": "string",
        "commandPings": 0,
        "championTransform": 0,
        "consumablesPurchased": 0,
        "challenges": {
          "12AssistStreakCount": 0,
          "baronBuffGoldAdvantageOverThreshold": 0,
          "controlWardTimeCoverageInRiverOrEnemyHalf": 0,
          "earliestBaron": 0,
          "earliestDragonTakedown": 0,
          "earliestElderDragon": 0,
          "earlyLaningPhaseGoldExpAdvantage": 0,
          "fasterSupportQuestCompletion": 0,
          "fastestLegendary": 0,
          "hadAfkTeammate": 0,
          "highestChampionDamage": 0,
          "highestCrowdControlScore": 0,
          "highestWardKills": 0,
          "junglerKillsEarlyJungle": 0,
          "killsOnLanersEarlyJungleAsJungler": 0,
          "laningPhaseGoldExpAdvantage": 0,
          "legendaryCount": 0,
          "maxCsAdvantageOnLaneOpponent": 0,
          "maxLevelLeadLaneOpponent": 0,
          "mostWardsDestroyedOneSweeper": 0,
          "mythicItemUsed": 0,
          "playedChampSelectPosition": 0,
          "soloTurretsLategame": 0,
          "takedownsFirst25Minutes": 0,
          "teleportTakedowns": 0,
          "thirdInhibitorDestroyedTime": 0,
          "threeWardsOneSweeperCount": 0,
          "visionScoreAdvantageLaneOpponent": 0,
          "InfernalScalePickup": 0,
          "fistBumpParticipation": 0,
          "voidMonsterKill": 0,
          "abilityUses": 0,
          "acesBefore15Minutes": 0,
          "alliedJungleMonsterKills": 0,
          "baronTakedowns": 0,
          "blastConeOppositeOpponentCount": 0,
          "bountyGold": 0,
          "buffsStolen": 0,
          "completeSupportQuestInTime": 0,
          "controlWardsPlaced": 0,
          "damagePerMinute": 0,
          "damageTakenOnTeamPercentage": 0,
          "dancedWithRiftHerald": 0,
          "deathsByEnemyChamps": 0,
          "dodgeSkillShotsSmallWindow": 0,
          "doubleAces": 0,
          "dragonTakedowns": 0,
          "legendaryItemUsed": [
            0
          ],
          "effectiveHealAndShielding": 0,
          "elderDragonKillsWithOpposingSoul": 0,
          "elderDragonMultikills": 0,
          "enemyChampionImmobilizations": 0,
          "enemyJungleMonsterKills": 0,
          "epicMonsterKillsNearEnemyJungler": 0,
          "epicMonsterKillsWithin30SecondsOfSpawn": 0,
          "epicMonsterSteals": 0,
          "epicMonsterStolenWithoutSmite": 0,
          "firstTurretKilled": 0,
          "firstTurretKilledTime": 0,
          "flawlessAces": 0,
          "fullTeamTakedown": 0,
          "gameLength": 0,
          "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
          "goldPerMinute": 0,
          "hadOpenNexus": 0,
          "immobilizeAndKillWithAlly": 0,
          "initialBuffCount": 0,
          "initialCrabCount": 0,
          "jungleCsBefore10Minutes": 0,
          "junglerTakedownsNearDamagedEpicMonster": 0,
          "kda": 0,
          "killAfterHiddenWithAlly": 0,
          "killedChampTookFullTeamDamageSurvived": 0,
          "killingSprees": 0,
          "killParticipation": 0,
          "killsNearEnemyTurret": 0,
          "killsOnOtherLanesEarlyJungleAsLaner": 0,
          "killsOnRecentlyHealedByAramPack": 0,
          "killsUnderOwnTurret": 0,
          "killsWithHelpFromEpicMonster": 0,
          "knockEnemyIntoTeamAndKill": 0,
          "kTurretsDestroyedBeforePlatesFall": 0,
          "landSkillShotsEarlyGame": 0,
          "laneMinionsFirst10Minutes": 0,
          "lostAnInhibitor": 0,
          "maxKillDeficit": 0,
          "mejaisFullStackInTime": 0,
          "moreEnemyJungleThanOpponent": 0,
          "multiKillOneSpell": 0,
          "multikills": 0,
          "multikillsAfterAggressiveFlash": 0,
          "multiTurretRiftHeraldCount": 0,
          "outerTurretExecutesBefore10Minutes": 0,
          "outnumberedKills": 0,
          "outnumberedNexusKill": 0,
          "perfectDragonSoulsTaken": 0,
          "perfectGame": 0,
          "pickKillWithAlly": 0,
          "poroExplosions": 0,
          "quickCleanse": 0,
          "quickFirstTurret": 0,
          "quickSoloKills": 0,
          "riftHeraldTakedowns": 0,
          "saveAllyFromDeath": 0,
          "scuttleCrabKills": 0,
          "shortestTimeToAceFromFirstTakedown": 0,
          "skillshotsDodged": 0,
          "skillshotsHit": 0,
          "snowballsHit": 0,
          "soloBaronKills": 0,
          "SWARM_DefeatAatrox": 0,
          "SWARM_DefeatBriar": 0,
          "SWARM_DefeatMiniBosses": 0,
          "SWARM_EvolveWeapon": 0,
          "SWARM_Have3Passives": 0,
          "SWARM_KillEnemy": 0,
          "SWARM_PickupGold": 0,
          "SWARM_ReachLevel50": 0,
          "SWARM_Survive15Min": 0,
          "SWARM_WinWith5EvolvedWeapons": 0,
          "soloKills": 0,
          "stealthWardsPlaced": 0,
          "survivedSingleDigitHpCount": 0,
          "survivedThreeImmobilizesInFight": 0,
          "takedownOnFirstTurret": 0,
          "takedowns": 0,
          "takedownsAfterGainingLevelAdvantage": 0,
          "takedownsBeforeJungleMinionSpawn": 0,
          "takedownsFirstXMinutes": 0,
          "takedownsInAlcove": 0,
          "takedownsInEnemyFountain": 0,
          "teamBaronKills": 0,
          "teamDamagePercentage": 0,
          "teamElderDragonKills": 0,
          "teamRiftHeraldKills": 0,
          "tookLargeDamageSurvived": 0,
          "turretPlatesTaken": 0,
          "turretsTakenWithRiftHerald": 0,
          "turretTakedowns": 0,
          "twentyMinionsIn3SecondsCount": 0,
          "twoWardsOneSweeperCount": 0,
          "unseenRecalls": 0,
          "visionScorePerMinute": 0,
          "wardsGuarded": 0,
          "wardTakedowns": 0,
          "wardTakedownsBefore20M": 0,
          "HealFromMapSources": 0
        },
        "damageDealtToBuildings": 0,
        "damageDealtToObjectives": 0,
        "damageDealtToTurrets": 0,
        "damageSelfMitigated": 0,
        "deaths": 0,
        "detectorWardsPlaced": 0,
        "doubleKills": 0,
        "dragonKills": 0,
        "eligibleForProgression": true,
        "enemyMissingPings": 0,
        "enemyVisionPings": 0,
        "firstBloodAssist": true,
        "firstBloodKill": true,
        "firstTowerAssist": true,
        "firstTowerKill": true,
        "gameEndedInEarlySurrender": true,
        "gameEndedInSurrender": true,
        "holdPings": 0,
        "getBackPings": 0,
        "goldEarned": 0,
        "goldSpent": 0,
        "individualPosition": "string",
        "inhibitorKills": 0,
        "inhibitorTakedowns": 0,
        "inhibitorsLost": 0,
        "item0": 0,
        "item1": 0,
        "item2": 0,
        "item3": 0,
        "item4": 0,
        "item5": 0,
        "item6": 0,
        "itemsPurchased": 0,
        "killingSprees": 0,
        "kills": 0,
        "lane": "string",
        "largestCriticalStrike": 0,
        "largestKillingSpree": 0,
        "largestMultiKill": 0,
        "longestTimeSpentLiving": 0,
        "magicDamageDealt": 0,
        "magicDamageDealtToChampions": 0,
        "magicDamageTaken": 0,
        "missions": {
          "playerScore0": 0,
          "playerScore1": 0,
          "playerScore2": 0,
          "playerScore3": 0,
          "playerScore4": 0,
          "playerScore5": 0,
          "playerScore6": 0,
          "playerScore7": 0,
          "playerScore8": 0,
          "playerScore9": 0,
          "playerScore10": 0,
          "playerScore11": 0
        },
        "neutralMinionsKilled": 0,
        "needVisionPings": 0,
        "nexusKills": 0,
        "nexusTakedowns": 0,
        "nexusLost": 0,
        "objectivesStolen": 0,
        "objectivesStolenAssists": 0,
        "onMyWayPings": 0,
        "participantId": 0,
        "playerScore0": 0,
        "playerScore1": 0,
        "playerScore2": 0,
        "playerScore3": 0,
        "playerScore4": 0,
        "playerScore5": 0,
        "playerScore6": 0,
        "playerScore7": 0,
        "playerScore8": 0,
        "playerScore9": 0,
        "playerScore10": 0,
        "playerScore11": 0,
        "pentaKills": 0,
        "perks": {
          "statPerks": {
            "defense": 0,
            "flex": 0,
            "offense": 0
          },
          "styles": [
            {
              "description": "string",
              "selections": [
                {
                  "perk": 0,
                  "var1": 0,
                  "var2": 0,
                  "var3": 0
                }
              ],
              "style": 0
            }
          ]
        },
        "physicalDamageDealt": 0,
        "physicalDamageDealtToChampions": 0,
        "physicalDamageTaken": 0,
        "placement": 0,
        "playerAugment1": 0,
        "playerAugment2": 0,
        "playerAugment3": 0,
        "playerAugment4": 0,
        "playerSubteamId": 0,
        "pushPings": 0,
        "profileIcon": 0,
        "puuid": "string",
        "quadraKills": 0,
        "riotIdGameName": "string",
        "riotIdTagline": "string",
        "role": "string",
        "sightWardsBoughtInGame": 0,
        "spell1Casts": 0,
        "spell2Casts": 0,
        "spell3Casts": 0,
        "spell4Casts": 0,
        "subteamPlacement": 0,
        "summoner1Casts": 0,
        "summoner1Id": 0,
        "summoner2Casts": 0,
        "summoner2Id": 0,
        "summonerId": "string",
        "summonerLevel": 0,
        "summonerName": "string",
        "teamEarlySurrendered": true,
        "teamId": 0,
        "teamPosition": "string",
        "timeCCingOthers": 0,
        "timePlayed": 0,
        "totalAllyJungleMinionsKilled": 0,
        "totalDamageDealt": 0,
        "totalDamageDealtToChampions": 0,
        "totalDamageShieldedOnTeammates": 0,
        "totalDamageTaken": 0,
        "totalEnemyJungleMinionsKilled": 0,
        "totalHeal": 0,
        "totalHealsOnTeammates": 0,
        "totalMinionsKilled": 0,
        "totalTimeCCDealt": 0,
        "totalTimeSpentDead": 0,
        "totalUnitsHealed": 0,
        "tripleKills": 0,
        "trueDamageDealt": 0,
        "trueDamageDealtToChampions": 0,
        "trueDamageTaken": 0,
        "turretKills": 0,
        "turretTakedowns": 0,
        "turretsLost": 0,
        "unrealKills": 0,
        "visionScore": 0,
        "visionClearedPings": 0,
        "visionWardsBoughtInGame": 0,
        "wardsKilled": 0,
        "wardsPlaced": 0,
        "win": true,
        "baitPings": 0,
        "dangerPings": 0,
        "basicPings": 0,
        "playerAugment5": 0,
        "playerAugment6": 0,
        "riotIdName": "string",
        "retreatPings": 0,
        "championSkinId": 0,
        "damageDealtToEpicMonsters": 0,
        "roleBoundItem": 0,
        "PlayerBehavior": {
          "PlayerBehavior_IsHeroInCombat": 0
        },
        "causedGameEndFromIGNBSurrender": true,
        "gameEndedInIGNBSurrender": true,
        "positionAssignedByMatchmaking": "string",
        "selectedRolePreferences": "string",
        "teamIGNBSurrendered": true,
        "wasPremadeWithIGNBGameEndCauser": true,
        "wasPremadeWithSevereTransgressor": true,
        "wasSevereTransgressor": true
      }
    ],
    "platformId": "string",
    "queueId": 0,
    "teams": [
      {
        "bans": [
          {
            "championId": 0,
            "pickTurn": 0
          }
        ],
        "objectives": {
          "baron": {
            "first": true,
            "kills": 0
          },
          "champion": {
            "first": true,
            "kills": 0
          },
          "dragon": {
            "first": true,
            "kills": 0
          },
          "horde": {
            "first": true,
            "kills": 0
          },
          "inhibitor": {
            "first": true,
            "kills": 0
          },
          "riftHerald": {
            "first": true,
            "kills": 0
          },
          "tower": {
            "first": true,
            "kills": 0
          },
          "atakhan": {
            "first": true,
            "kills": 0
          }
        },
        "teamId": 0,
        "win": true,
        "feats": {
          "EPIC_MONSTER_KILL": {
            "featState": 0
          },
          "FIRST_BLOOD": {
            "featState": 0
          },
          "FIRST_TURRET": {
            "featState": 0
          }
        }
      }
    ],
    "tournamentCode": "string",
    "gameModeMutators": [
      "string"
    ]
  }
}
```

<h3 id="get-a-match-by-match-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[match-v5.MatchDto](#schemamatch-v5.matchdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

## Get a match timeline by match id

<a id="opIdlol-rso-match-v1.getTimeline"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lol/rso-match/v1/matches/string/timeline \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lol/rso-match/v1/matches/{matchId}/timeline`

Get a match timeline by match id

<a href="https://developer.riotgames.com/api-methods/#lol-rso-match-v1/GET_getTimeline">Official API Reference</a>

<h3 id="get-a-match-timeline-by-match-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "dataVersion": "string",
    "matchId": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "frameInterval": 0,
    "gameId": 0,
    "participants": [
      {
        "participantId": 0,
        "puuid": "string"
      }
    ],
    "frames": [
      {
        "events": [
          {
            "timestamp": 0,
            "realTimestamp": 0,
            "type": "string",
            "itemId": 0,
            "participantId": 0,
            "levelUpType": "string",
            "skillSlot": 0,
            "creatorId": 0,
            "wardType": "string",
            "level": 0,
            "assistingParticipantIds": [
              0
            ],
            "bounty": 0,
            "killStreakLength": 0,
            "killerId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "victimDamageDealt": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimDamageReceived": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimId": 0,
            "killType": "string",
            "laneType": "string",
            "teamId": 0,
            "multiKillLength": 0,
            "killerTeamId": 0,
            "monsterType": "string",
            "monsterSubType": "string",
            "buildingType": "string",
            "towerType": "string",
            "afterId": 0,
            "beforeId": 0,
            "goldGain": 0,
            "gameId": 0,
            "winningTeam": 0,
            "transformType": "string",
            "name": "string",
            "shutdownBounty": 0,
            "actualStartTime": 0,
            "featType": 0,
            "featValue": 0,
            "victimTeamfightDamageDealt": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimTeamfightDamageReceived": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ]
          }
        ],
        "participantFrames": {
          "property1": {
            "championStats": {
              "abilityHaste": 0,
              "abilityPower": 0,
              "armor": 0,
              "armorPen": 0,
              "armorPenPercent": 0,
              "attackDamage": 0,
              "attackSpeed": 0,
              "bonusArmorPenPercent": 0,
              "bonusMagicPenPercent": 0,
              "ccReduction": 0,
              "cooldownReduction": 0,
              "health": 0,
              "healthMax": 0,
              "healthRegen": 0,
              "lifesteal": 0,
              "magicPen": 0,
              "magicPenPercent": 0,
              "magicResist": 0,
              "movementSpeed": 0,
              "omnivamp": 0,
              "physicalVamp": 0,
              "power": 0,
              "powerMax": 0,
              "powerRegen": 0,
              "spellVamp": 0
            },
            "currentGold": 0,
            "damageStats": {
              "magicDamageDone": 0,
              "magicDamageDoneToChampions": 0,
              "magicDamageTaken": 0,
              "physicalDamageDone": 0,
              "physicalDamageDoneToChampions": 0,
              "physicalDamageTaken": 0,
              "totalDamageDone": 0,
              "totalDamageDoneToChampions": 0,
              "totalDamageTaken": 0,
              "trueDamageDone": 0,
              "trueDamageDoneToChampions": 0,
              "trueDamageTaken": 0
            },
            "goldPerSecond": 0,
            "jungleMinionsKilled": 0,
            "level": 0,
            "minionsKilled": 0,
            "participantId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "timeEnemySpentControlled": 0,
            "totalGold": 0,
            "xp": 0
          },
          "property2": {
            "championStats": {
              "abilityHaste": 0,
              "abilityPower": 0,
              "armor": 0,
              "armorPen": 0,
              "armorPenPercent": 0,
              "attackDamage": 0,
              "attackSpeed": 0,
              "bonusArmorPenPercent": 0,
              "bonusMagicPenPercent": 0,
              "ccReduction": 0,
              "cooldownReduction": 0,
              "health": 0,
              "healthMax": 0,
              "healthRegen": 0,
              "lifesteal": 0,
              "magicPen": 0,
              "magicPenPercent": 0,
              "magicResist": 0,
              "movementSpeed": 0,
              "omnivamp": 0,
              "physicalVamp": 0,
              "power": 0,
              "powerMax": 0,
              "powerRegen": 0,
              "spellVamp": 0
            },
            "currentGold": 0,
            "damageStats": {
              "magicDamageDone": 0,
              "magicDamageDoneToChampions": 0,
              "magicDamageTaken": 0,
              "physicalDamageDone": 0,
              "physicalDamageDoneToChampions": 0,
              "physicalDamageTaken": 0,
              "totalDamageDone": 0,
              "totalDamageDoneToChampions": 0,
              "totalDamageTaken": 0,
              "trueDamageDone": 0,
              "trueDamageDoneToChampions": 0,
              "trueDamageTaken": 0
            },
            "goldPerSecond": 0,
            "jungleMinionsKilled": 0,
            "level": 0,
            "minionsKilled": 0,
            "participantId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "timeEnemySpentControlled": 0,
            "totalGold": 0,
            "xp": 0
          }
        },
        "timestamp": 0
      }
    ]
  }
}
```

<h3 id="get-a-match-timeline-by-match-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[match-v5.TimelineDto](#schemamatch-v5.timelinedto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

<h1 id="riot-api-lol-status-v4">lol-status-v4</h1>

## Get League of Legends status for the given platform.

<a id="opIdlol-status-v4.getPlatformData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/status/v4/platform-data?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/status/v4/platform-data`

Get League of Legends status for the given platform.

<a href="https://developer.riotgames.com/api-methods/#lol-status-v4/GET_getPlatformData">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

<h3 id="get-league-of-legends-status-for-the-given-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[lol-status-v4.PlatformDataDto](#schemalol-status-v4.platformdatadto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-lor-deck-v1">lor-deck-v1</h1>

## Get a list of the calling user's decks.

<a id="opIdlor-deck-v1.getDecks"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lor/deck/v1/decks/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lor/deck/v1/decks/me`

Get a list of the calling user's decks.

<a href="https://developer.riotgames.com/api-methods/#lor-deck-v1/GET_getDecks">Official API Reference</a>

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "code": "string"
  }
]
```

<h3 id="get-a-list-of-the-calling-users-decks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-a-list-of-the-calling-users-decks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[lor-deck-v1.DeckDto](#schemalor-deck-v1.deckdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

## Create a new deck for the calling user.

<a id="opIdlor-deck-v1.createDeck"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lor/deck/v1/decks/me \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "code": "string"
  }'
```

`POST /lor/deck/v1/decks/me`

Create a new deck for the calling user.

<a href="https://developer.riotgames.com/api-methods/#lor-deck-v1/POST_createDeck">Official API Reference</a>

> Body parameter

```json
{
  "name": "string",
  "code": "string"
}
```

<h3 id="create-a-new-deck-for-the-calling-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[lor-deck-v1.NewDeckDto](#schemalor-deck-v1.newdeckdto)|true|none|
|» name|body|string|true|none|
|» code|body|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-a-new-deck-for-the-calling-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

<h1 id="riot-api-lor-inventory-v1">lor-inventory-v1</h1>

## Return a list of cards owned by the calling user.

<a id="opIdlor-inventory-v1.getCards"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lor/inventory/v1/cards/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lor/inventory/v1/cards/me`

Return a list of cards owned by the calling user.

<a href="https://developer.riotgames.com/api-methods/#lor-inventory-v1/GET_getCards">Official API Reference</a>

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "count": "string"
  }
]
```

<h3 id="return-a-list-of-cards-owned-by-the-calling-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="return-a-list-of-cards-owned-by-the-calling-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[lor-inventory-v1.CardDto](#schemalor-inventory-v1.carddto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

<h1 id="riot-api-lor-match-v1">lor-match-v1</h1>

## Get a list of match ids by PUUID

<a id="opIdlor-match-v1.getMatchIdsByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lor/match/v1/matches/by-puuid/string/ids?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lor/match/v1/matches/by-puuid/{puuid}/ids`

Get a list of match ids by PUUID

<a href="https://developer.riotgames.com/api-methods/#lor-match-v1/GET_getMatchIdsByPUUID">Official API Reference</a>

<h3 id="get-a-list-of-match-ids-by-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-a-list-of-match-ids-by-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-a-list-of-match-ids-by-puuid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get match by id

<a id="opIdlor-match-v1.getMatch"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lor/match/v1/matches/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lor/match/v1/matches/{matchId}`

Get match by id

<a href="https://developer.riotgames.com/api-methods/#lor-match-v1/GET_getMatch">Official API Reference</a>

<h3 id="get-match-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "data_version": "string",
    "match_id": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "game_mode": "Constructed",
    "game_type": "Ranked",
    "game_start_time_utc": "string",
    "game_version": "string",
    "game_format": "standard",
    "players": [
      {
        "puuid": "string",
        "deck_id": "string",
        "deck_code": "string",
        "factions": [
          "string"
        ],
        "game_outcome": "string",
        "order_of_play": 0
      }
    ],
    "total_turn_count": 0
  }
}
```

<h3 id="get-match-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[lor-match-v1.MatchDto](#schemalor-match-v1.matchdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-lor-ranked-v1">lor-ranked-v1</h1>

## Get the players in Master tier.

<a id="opIdlor-ranked-v1.getLeaderboards"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lor/ranked/v1/leaderboards`

Get the players in Master tier.

<a href="https://developer.riotgames.com/api-methods/#lor-ranked-v1/GET_getLeaderboards">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "players": [
    {
      "name": "string",
      "rank": 0,
      "lp": 0
    }
  ]
}
```

<h3 id="get-the-players-in-master-tier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[lor-ranked-v1.LeaderboardDto](#schemalor-ranked-v1.leaderboarddto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-lor-status-v1">lor-status-v1</h1>

## Get Legends of Runeterra status for the given platform.

<a id="opIdlor-status-v1.getPlatformData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lor/status/v1/platform-data?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lor/status/v1/platform-data`

Get Legends of Runeterra status for the given platform.

<a href="https://developer.riotgames.com/api-methods/#lor-status-v1/GET_getPlatformData">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

<h3 id="get-legends-of-runeterra-status-for-the-given-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[lor-status-v1.PlatformDataDto](#schemalor-status-v1.platformdatadto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-match-v5">match-v5</h1>

## Get a list of match ids by puuid

<a id="opIdmatch-v5.getMatchIdsByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/match/v5/matches/by-puuid/string/ids?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/match/v5/matches/by-puuid/{puuid}/ids`

Get a list of match ids by puuid

<a href="https://developer.riotgames.com/api-methods/#match-v5/GET_getMatchIdsByPUUID">Official API Reference</a>

<h3 id="get-a-list-of-match-ids-by-puuid-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|
|startTime|query|integer(int64)|false|Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.|
|endTime|query|integer(int64)|false|Epoch timestamp in seconds.|
|queue|query|integer(int32)|false|Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.|
|type|query|string|false|Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.|
|start|query|integer(int32)|false|Defaults to 0. Start index.|
|count|query|integer(int32)|false|Defaults to 20. Valid values: 0 to 100. Number of match ids to return.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ranked|
|type|normal|
|type|tourney|
|type|tutorial|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-a-list-of-match-ids-by-puuid-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-a-list-of-match-ids-by-puuid-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get player replays by access token

<a id="opIdmatch-v5.getReplayByAccessToken"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lol/match/v5/matches/replays \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lol/match/v5/matches/replays`

Get player replays by access token

<a href="https://developer.riotgames.com/api-methods/#match-v5/GET_getReplayByAccessToken">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "total": 0,
  "matchFileURLs": [
    "string"
  ]
}
```

<h3 id="get-player-replays-by-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[match-v5.ReplayDTO](#schemamatch-v5.replaydto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

## Get a match by match id

<a id="opIdmatch-v5.getMatch"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/match/v5/matches/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/match/v5/matches/{matchId}`

Get a match by match id

<a href="https://developer.riotgames.com/api-methods/#match-v5/GET_getMatch">Official API Reference</a>

<h3 id="get-a-match-by-match-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "dataVersion": "string",
    "matchId": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "gameCreation": 0,
    "gameDuration": 0,
    "gameEndTimestamp": 0,
    "gameId": 0,
    "gameMode": "string",
    "gameName": "string",
    "gameStartTimestamp": 0,
    "gameType": "string",
    "gameVersion": "string",
    "mapId": 0,
    "participants": [
      {
        "allInPings": 0,
        "assistMePings": 0,
        "assists": 0,
        "baronKills": 0,
        "bountyLevel": 0,
        "champExperience": 0,
        "champLevel": 0,
        "championId": 0,
        "championName": "string",
        "commandPings": 0,
        "championTransform": 0,
        "consumablesPurchased": 0,
        "challenges": {
          "12AssistStreakCount": 0,
          "baronBuffGoldAdvantageOverThreshold": 0,
          "controlWardTimeCoverageInRiverOrEnemyHalf": 0,
          "earliestBaron": 0,
          "earliestDragonTakedown": 0,
          "earliestElderDragon": 0,
          "earlyLaningPhaseGoldExpAdvantage": 0,
          "fasterSupportQuestCompletion": 0,
          "fastestLegendary": 0,
          "hadAfkTeammate": 0,
          "highestChampionDamage": 0,
          "highestCrowdControlScore": 0,
          "highestWardKills": 0,
          "junglerKillsEarlyJungle": 0,
          "killsOnLanersEarlyJungleAsJungler": 0,
          "laningPhaseGoldExpAdvantage": 0,
          "legendaryCount": 0,
          "maxCsAdvantageOnLaneOpponent": 0,
          "maxLevelLeadLaneOpponent": 0,
          "mostWardsDestroyedOneSweeper": 0,
          "mythicItemUsed": 0,
          "playedChampSelectPosition": 0,
          "soloTurretsLategame": 0,
          "takedownsFirst25Minutes": 0,
          "teleportTakedowns": 0,
          "thirdInhibitorDestroyedTime": 0,
          "threeWardsOneSweeperCount": 0,
          "visionScoreAdvantageLaneOpponent": 0,
          "InfernalScalePickup": 0,
          "fistBumpParticipation": 0,
          "voidMonsterKill": 0,
          "abilityUses": 0,
          "acesBefore15Minutes": 0,
          "alliedJungleMonsterKills": 0,
          "baronTakedowns": 0,
          "blastConeOppositeOpponentCount": 0,
          "bountyGold": 0,
          "buffsStolen": 0,
          "completeSupportQuestInTime": 0,
          "controlWardsPlaced": 0,
          "damagePerMinute": 0,
          "damageTakenOnTeamPercentage": 0,
          "dancedWithRiftHerald": 0,
          "deathsByEnemyChamps": 0,
          "dodgeSkillShotsSmallWindow": 0,
          "doubleAces": 0,
          "dragonTakedowns": 0,
          "legendaryItemUsed": [
            0
          ],
          "effectiveHealAndShielding": 0,
          "elderDragonKillsWithOpposingSoul": 0,
          "elderDragonMultikills": 0,
          "enemyChampionImmobilizations": 0,
          "enemyJungleMonsterKills": 0,
          "epicMonsterKillsNearEnemyJungler": 0,
          "epicMonsterKillsWithin30SecondsOfSpawn": 0,
          "epicMonsterSteals": 0,
          "epicMonsterStolenWithoutSmite": 0,
          "firstTurretKilled": 0,
          "firstTurretKilledTime": 0,
          "flawlessAces": 0,
          "fullTeamTakedown": 0,
          "gameLength": 0,
          "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
          "goldPerMinute": 0,
          "hadOpenNexus": 0,
          "immobilizeAndKillWithAlly": 0,
          "initialBuffCount": 0,
          "initialCrabCount": 0,
          "jungleCsBefore10Minutes": 0,
          "junglerTakedownsNearDamagedEpicMonster": 0,
          "kda": 0,
          "killAfterHiddenWithAlly": 0,
          "killedChampTookFullTeamDamageSurvived": 0,
          "killingSprees": 0,
          "killParticipation": 0,
          "killsNearEnemyTurret": 0,
          "killsOnOtherLanesEarlyJungleAsLaner": 0,
          "killsOnRecentlyHealedByAramPack": 0,
          "killsUnderOwnTurret": 0,
          "killsWithHelpFromEpicMonster": 0,
          "knockEnemyIntoTeamAndKill": 0,
          "kTurretsDestroyedBeforePlatesFall": 0,
          "landSkillShotsEarlyGame": 0,
          "laneMinionsFirst10Minutes": 0,
          "lostAnInhibitor": 0,
          "maxKillDeficit": 0,
          "mejaisFullStackInTime": 0,
          "moreEnemyJungleThanOpponent": 0,
          "multiKillOneSpell": 0,
          "multikills": 0,
          "multikillsAfterAggressiveFlash": 0,
          "multiTurretRiftHeraldCount": 0,
          "outerTurretExecutesBefore10Minutes": 0,
          "outnumberedKills": 0,
          "outnumberedNexusKill": 0,
          "perfectDragonSoulsTaken": 0,
          "perfectGame": 0,
          "pickKillWithAlly": 0,
          "poroExplosions": 0,
          "quickCleanse": 0,
          "quickFirstTurret": 0,
          "quickSoloKills": 0,
          "riftHeraldTakedowns": 0,
          "saveAllyFromDeath": 0,
          "scuttleCrabKills": 0,
          "shortestTimeToAceFromFirstTakedown": 0,
          "skillshotsDodged": 0,
          "skillshotsHit": 0,
          "snowballsHit": 0,
          "soloBaronKills": 0,
          "SWARM_DefeatAatrox": 0,
          "SWARM_DefeatBriar": 0,
          "SWARM_DefeatMiniBosses": 0,
          "SWARM_EvolveWeapon": 0,
          "SWARM_Have3Passives": 0,
          "SWARM_KillEnemy": 0,
          "SWARM_PickupGold": 0,
          "SWARM_ReachLevel50": 0,
          "SWARM_Survive15Min": 0,
          "SWARM_WinWith5EvolvedWeapons": 0,
          "soloKills": 0,
          "stealthWardsPlaced": 0,
          "survivedSingleDigitHpCount": 0,
          "survivedThreeImmobilizesInFight": 0,
          "takedownOnFirstTurret": 0,
          "takedowns": 0,
          "takedownsAfterGainingLevelAdvantage": 0,
          "takedownsBeforeJungleMinionSpawn": 0,
          "takedownsFirstXMinutes": 0,
          "takedownsInAlcove": 0,
          "takedownsInEnemyFountain": 0,
          "teamBaronKills": 0,
          "teamDamagePercentage": 0,
          "teamElderDragonKills": 0,
          "teamRiftHeraldKills": 0,
          "tookLargeDamageSurvived": 0,
          "turretPlatesTaken": 0,
          "turretsTakenWithRiftHerald": 0,
          "turretTakedowns": 0,
          "twentyMinionsIn3SecondsCount": 0,
          "twoWardsOneSweeperCount": 0,
          "unseenRecalls": 0,
          "visionScorePerMinute": 0,
          "wardsGuarded": 0,
          "wardTakedowns": 0,
          "wardTakedownsBefore20M": 0,
          "HealFromMapSources": 0
        },
        "damageDealtToBuildings": 0,
        "damageDealtToObjectives": 0,
        "damageDealtToTurrets": 0,
        "damageSelfMitigated": 0,
        "deaths": 0,
        "detectorWardsPlaced": 0,
        "doubleKills": 0,
        "dragonKills": 0,
        "eligibleForProgression": true,
        "enemyMissingPings": 0,
        "enemyVisionPings": 0,
        "firstBloodAssist": true,
        "firstBloodKill": true,
        "firstTowerAssist": true,
        "firstTowerKill": true,
        "gameEndedInEarlySurrender": true,
        "gameEndedInSurrender": true,
        "holdPings": 0,
        "getBackPings": 0,
        "goldEarned": 0,
        "goldSpent": 0,
        "individualPosition": "string",
        "inhibitorKills": 0,
        "inhibitorTakedowns": 0,
        "inhibitorsLost": 0,
        "item0": 0,
        "item1": 0,
        "item2": 0,
        "item3": 0,
        "item4": 0,
        "item5": 0,
        "item6": 0,
        "itemsPurchased": 0,
        "killingSprees": 0,
        "kills": 0,
        "lane": "string",
        "largestCriticalStrike": 0,
        "largestKillingSpree": 0,
        "largestMultiKill": 0,
        "longestTimeSpentLiving": 0,
        "magicDamageDealt": 0,
        "magicDamageDealtToChampions": 0,
        "magicDamageTaken": 0,
        "missions": {
          "playerScore0": 0,
          "playerScore1": 0,
          "playerScore2": 0,
          "playerScore3": 0,
          "playerScore4": 0,
          "playerScore5": 0,
          "playerScore6": 0,
          "playerScore7": 0,
          "playerScore8": 0,
          "playerScore9": 0,
          "playerScore10": 0,
          "playerScore11": 0
        },
        "neutralMinionsKilled": 0,
        "needVisionPings": 0,
        "nexusKills": 0,
        "nexusTakedowns": 0,
        "nexusLost": 0,
        "objectivesStolen": 0,
        "objectivesStolenAssists": 0,
        "onMyWayPings": 0,
        "participantId": 0,
        "playerScore0": 0,
        "playerScore1": 0,
        "playerScore2": 0,
        "playerScore3": 0,
        "playerScore4": 0,
        "playerScore5": 0,
        "playerScore6": 0,
        "playerScore7": 0,
        "playerScore8": 0,
        "playerScore9": 0,
        "playerScore10": 0,
        "playerScore11": 0,
        "pentaKills": 0,
        "perks": {
          "statPerks": {
            "defense": 0,
            "flex": 0,
            "offense": 0
          },
          "styles": [
            {
              "description": "string",
              "selections": [
                {
                  "perk": 0,
                  "var1": 0,
                  "var2": 0,
                  "var3": 0
                }
              ],
              "style": 0
            }
          ]
        },
        "physicalDamageDealt": 0,
        "physicalDamageDealtToChampions": 0,
        "physicalDamageTaken": 0,
        "placement": 0,
        "playerAugment1": 0,
        "playerAugment2": 0,
        "playerAugment3": 0,
        "playerAugment4": 0,
        "playerSubteamId": 0,
        "pushPings": 0,
        "profileIcon": 0,
        "puuid": "string",
        "quadraKills": 0,
        "riotIdGameName": "string",
        "riotIdTagline": "string",
        "role": "string",
        "sightWardsBoughtInGame": 0,
        "spell1Casts": 0,
        "spell2Casts": 0,
        "spell3Casts": 0,
        "spell4Casts": 0,
        "subteamPlacement": 0,
        "summoner1Casts": 0,
        "summoner1Id": 0,
        "summoner2Casts": 0,
        "summoner2Id": 0,
        "summonerId": "string",
        "summonerLevel": 0,
        "summonerName": "string",
        "teamEarlySurrendered": true,
        "teamId": 0,
        "teamPosition": "string",
        "timeCCingOthers": 0,
        "timePlayed": 0,
        "totalAllyJungleMinionsKilled": 0,
        "totalDamageDealt": 0,
        "totalDamageDealtToChampions": 0,
        "totalDamageShieldedOnTeammates": 0,
        "totalDamageTaken": 0,
        "totalEnemyJungleMinionsKilled": 0,
        "totalHeal": 0,
        "totalHealsOnTeammates": 0,
        "totalMinionsKilled": 0,
        "totalTimeCCDealt": 0,
        "totalTimeSpentDead": 0,
        "totalUnitsHealed": 0,
        "tripleKills": 0,
        "trueDamageDealt": 0,
        "trueDamageDealtToChampions": 0,
        "trueDamageTaken": 0,
        "turretKills": 0,
        "turretTakedowns": 0,
        "turretsLost": 0,
        "unrealKills": 0,
        "visionScore": 0,
        "visionClearedPings": 0,
        "visionWardsBoughtInGame": 0,
        "wardsKilled": 0,
        "wardsPlaced": 0,
        "win": true,
        "baitPings": 0,
        "dangerPings": 0,
        "basicPings": 0,
        "playerAugment5": 0,
        "playerAugment6": 0,
        "riotIdName": "string",
        "retreatPings": 0,
        "championSkinId": 0,
        "damageDealtToEpicMonsters": 0,
        "roleBoundItem": 0,
        "PlayerBehavior": {
          "PlayerBehavior_IsHeroInCombat": 0
        },
        "causedGameEndFromIGNBSurrender": true,
        "gameEndedInIGNBSurrender": true,
        "positionAssignedByMatchmaking": "string",
        "selectedRolePreferences": "string",
        "teamIGNBSurrendered": true,
        "wasPremadeWithIGNBGameEndCauser": true,
        "wasPremadeWithSevereTransgressor": true,
        "wasSevereTransgressor": true
      }
    ],
    "platformId": "string",
    "queueId": 0,
    "teams": [
      {
        "bans": [
          {
            "championId": 0,
            "pickTurn": 0
          }
        ],
        "objectives": {
          "baron": {
            "first": true,
            "kills": 0
          },
          "champion": {
            "first": true,
            "kills": 0
          },
          "dragon": {
            "first": true,
            "kills": 0
          },
          "horde": {
            "first": true,
            "kills": 0
          },
          "inhibitor": {
            "first": true,
            "kills": 0
          },
          "riftHerald": {
            "first": true,
            "kills": 0
          },
          "tower": {
            "first": true,
            "kills": 0
          },
          "atakhan": {
            "first": true,
            "kills": 0
          }
        },
        "teamId": 0,
        "win": true,
        "feats": {
          "EPIC_MONSTER_KILL": {
            "featState": 0
          },
          "FIRST_BLOOD": {
            "featState": 0
          },
          "FIRST_TURRET": {
            "featState": 0
          }
        }
      }
    ],
    "tournamentCode": "string",
    "gameModeMutators": [
      "string"
    ]
  }
}
```

<h3 id="get-a-match-by-match-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[match-v5.MatchDto](#schemamatch-v5.matchdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get a match timeline by match id

<a id="opIdmatch-v5.getTimeline"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/match/v5/matches/string/timeline?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/match/v5/matches/{matchId}/timeline`

Get a match timeline by match id

<a href="https://developer.riotgames.com/api-methods/#match-v5/GET_getTimeline">Official API Reference</a>

<h3 id="get-a-match-timeline-by-match-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "dataVersion": "string",
    "matchId": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "frameInterval": 0,
    "gameId": 0,
    "participants": [
      {
        "participantId": 0,
        "puuid": "string"
      }
    ],
    "frames": [
      {
        "events": [
          {
            "timestamp": 0,
            "realTimestamp": 0,
            "type": "string",
            "itemId": 0,
            "participantId": 0,
            "levelUpType": "string",
            "skillSlot": 0,
            "creatorId": 0,
            "wardType": "string",
            "level": 0,
            "assistingParticipantIds": [
              0
            ],
            "bounty": 0,
            "killStreakLength": 0,
            "killerId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "victimDamageDealt": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimDamageReceived": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimId": 0,
            "killType": "string",
            "laneType": "string",
            "teamId": 0,
            "multiKillLength": 0,
            "killerTeamId": 0,
            "monsterType": "string",
            "monsterSubType": "string",
            "buildingType": "string",
            "towerType": "string",
            "afterId": 0,
            "beforeId": 0,
            "goldGain": 0,
            "gameId": 0,
            "winningTeam": 0,
            "transformType": "string",
            "name": "string",
            "shutdownBounty": 0,
            "actualStartTime": 0,
            "featType": 0,
            "featValue": 0,
            "victimTeamfightDamageDealt": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimTeamfightDamageReceived": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ]
          }
        ],
        "participantFrames": {
          "property1": {
            "championStats": {
              "abilityHaste": 0,
              "abilityPower": 0,
              "armor": 0,
              "armorPen": 0,
              "armorPenPercent": 0,
              "attackDamage": 0,
              "attackSpeed": 0,
              "bonusArmorPenPercent": 0,
              "bonusMagicPenPercent": 0,
              "ccReduction": 0,
              "cooldownReduction": 0,
              "health": 0,
              "healthMax": 0,
              "healthRegen": 0,
              "lifesteal": 0,
              "magicPen": 0,
              "magicPenPercent": 0,
              "magicResist": 0,
              "movementSpeed": 0,
              "omnivamp": 0,
              "physicalVamp": 0,
              "power": 0,
              "powerMax": 0,
              "powerRegen": 0,
              "spellVamp": 0
            },
            "currentGold": 0,
            "damageStats": {
              "magicDamageDone": 0,
              "magicDamageDoneToChampions": 0,
              "magicDamageTaken": 0,
              "physicalDamageDone": 0,
              "physicalDamageDoneToChampions": 0,
              "physicalDamageTaken": 0,
              "totalDamageDone": 0,
              "totalDamageDoneToChampions": 0,
              "totalDamageTaken": 0,
              "trueDamageDone": 0,
              "trueDamageDoneToChampions": 0,
              "trueDamageTaken": 0
            },
            "goldPerSecond": 0,
            "jungleMinionsKilled": 0,
            "level": 0,
            "minionsKilled": 0,
            "participantId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "timeEnemySpentControlled": 0,
            "totalGold": 0,
            "xp": 0
          },
          "property2": {
            "championStats": {
              "abilityHaste": 0,
              "abilityPower": 0,
              "armor": 0,
              "armorPen": 0,
              "armorPenPercent": 0,
              "attackDamage": 0,
              "attackSpeed": 0,
              "bonusArmorPenPercent": 0,
              "bonusMagicPenPercent": 0,
              "ccReduction": 0,
              "cooldownReduction": 0,
              "health": 0,
              "healthMax": 0,
              "healthRegen": 0,
              "lifesteal": 0,
              "magicPen": 0,
              "magicPenPercent": 0,
              "magicResist": 0,
              "movementSpeed": 0,
              "omnivamp": 0,
              "physicalVamp": 0,
              "power": 0,
              "powerMax": 0,
              "powerRegen": 0,
              "spellVamp": 0
            },
            "currentGold": 0,
            "damageStats": {
              "magicDamageDone": 0,
              "magicDamageDoneToChampions": 0,
              "magicDamageTaken": 0,
              "physicalDamageDone": 0,
              "physicalDamageDoneToChampions": 0,
              "physicalDamageTaken": 0,
              "totalDamageDone": 0,
              "totalDamageDoneToChampions": 0,
              "totalDamageTaken": 0,
              "trueDamageDone": 0,
              "trueDamageDoneToChampions": 0,
              "trueDamageTaken": 0
            },
            "goldPerSecond": 0,
            "jungleMinionsKilled": 0,
            "level": 0,
            "minionsKilled": 0,
            "participantId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "timeEnemySpentControlled": 0,
            "totalGold": 0,
            "xp": 0
          }
        },
        "timestamp": 0
      }
    ]
  }
}
```

<h3 id="get-a-match-timeline-by-match-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[match-v5.TimelineDto](#schemamatch-v5.timelinedto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-riftbound-content-v1">riftbound-content-v1</h1>

## Get riftbound content

<a id="opIdriftbound-content-v1.getContent"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/riftbound/content/v1/contents?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /riftbound/content/v1/contents`

Get riftbound content

<a href="https://developer.riotgames.com/api-methods/#riftbound-content-v1/GET_getContent">Official API Reference</a>

<h3 id="get-riftbound-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|Defaults to en. Optional. Specifies the language and regional settings for the response. Use a locale code. During beta only en available.|

> Example responses

> 200 Response

```json
{
  "game": "string",
  "version": "string",
  "lastUpdated": "string",
  "sets": [
    {
      "id": "string",
      "name": "string",
      "cards": [
        {
          "id": "string",
          "collectorNumber": 0,
          "set": "string",
          "name": "string",
          "description": "string",
          "type": "string",
          "rarity": "string",
          "faction": "string",
          "stats": {
            "energy": 0,
            "might": 0,
            "cost": 0,
            "power": 0
          },
          "art": {
            "thumbnailURL": "string",
            "fullURL": "string",
            "artist": "string"
          },
          "flavorText": "string",
          "tags": [
            "string"
          ],
          "subtitle": "string",
          "effect": "string"
        }
      ]
    }
  ]
}
```

<h3 id="get-riftbound-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[riftbound-content-v1.RiftboundContentDTO](#schemariftbound-content-v1.riftboundcontentdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-spectator-tft-v5">spectator-tft-v5</h1>

## Get current game information for the given puuid.

<a id="opIdspectator-tft-v5.getCurrentGameInfoByPuuid"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/spectator/tft/v5/active-games/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/spectator/tft/v5/active-games/by-puuid/{encryptedPUUID}`

Get current game information for the given puuid.

<a href="https://developer.riotgames.com/api-methods/#spectator-tft-v5/GET_getCurrentGameInfoByPuuid">Official API Reference</a>

<h3 id="get-current-game-information-for-the-given-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|The puuid of the summoner.|

> Example responses

> 200 Response

```json
{
  "gameId": 0,
  "gameType": "string",
  "gameStartTime": 0,
  "mapId": 0,
  "gameLength": 0,
  "platformId": "string",
  "gameMode": "string",
  "bannedChampions": [
    {
      "pickTurn": 0,
      "championId": 0,
      "teamId": 0
    }
  ],
  "gameQueueConfigId": 0,
  "observers": {
    "encryptionKey": "string"
  },
  "participants": [
    {
      "championId": 0,
      "perks": {
        "perkIds": [
          0
        ],
        "perkStyle": 0,
        "perkSubStyle": 0
      },
      "profileIconId": 0,
      "teamId": 0,
      "puuid": "string",
      "spell1Id": 0,
      "spell2Id": 0,
      "gameCustomizationObjects": [
        {
          "category": "string",
          "content": "string"
        }
      ],
      "riotId": "string"
    }
  ]
}
```

<h3 id="get-current-game-information-for-the-given-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[spectator-tft-v5.CurrentGameInfo](#schemaspectator-tft-v5.currentgameinfo)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-spectator-v5">spectator-v5</h1>

## Get current game information for the given puuid.

<a id="opIdspectator-v5.getCurrentGameInfoByPuuid"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/spectator/v5/active-games/by-summoner/{encryptedPUUID}`

Get current game information for the given puuid.

<a href="https://developer.riotgames.com/api-methods/#spectator-v5/GET_getCurrentGameInfoByPuuid">Official API Reference</a>

<h3 id="get-current-game-information-for-the-given-puuid-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|The puuid of the summoner.|

> Example responses

> 200 Response

```json
{
  "gameId": 0,
  "gameType": "string",
  "gameStartTime": 0,
  "mapId": 0,
  "gameLength": 0,
  "platformId": "string",
  "gameMode": "string",
  "bannedChampions": [
    {
      "pickTurn": 0,
      "championId": 0,
      "teamId": 0
    }
  ],
  "gameQueueConfigId": 0,
  "observers": {
    "encryptionKey": "string"
  },
  "participants": [
    {
      "championId": 0,
      "perks": {
        "perkIds": [
          0
        ],
        "perkStyle": 0,
        "perkSubStyle": 0
      },
      "profileIconId": 0,
      "bot": true,
      "teamId": 0,
      "puuid": "string",
      "spell1Id": 0,
      "spell2Id": 0,
      "gameCustomizationObjects": [
        {
          "category": "string",
          "content": "string"
        }
      ],
      "riotId": "string"
    }
  ]
}
```

<h3 id="get-current-game-information-for-the-given-puuid-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[spectator-v5.CurrentGameInfo](#schemaspectator-v5.currentgameinfo)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-summoner-v4">summoner-v4</h1>

## Get a summoner by PUUID.

<a id="opIdsummoner-v4.getByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}`

Get a summoner by PUUID.

<a href="https://developer.riotgames.com/api-methods/#summoner-v4/GET_getByPUUID">Official API Reference</a>

<h3 id="get-a-summoner-by-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|Summoner ID|

> Example responses

> 200 Response

```json
{
  "profileIconId": 0,
  "revisionDate": 0,
  "puuid": "string",
  "summonerLevel": 0,
  "id": "string"
}
```

<h3 id="get-a-summoner-by-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[summoner-v4.SummonerDTO](#schemasummoner-v4.summonerdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get a summoner by access token.

<a id="opIdsummoner-v4.getByAccessToken"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/lol/summoner/v4/summoners/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lol/summoner/v4/summoners/me`

Get a summoner by access token.

<a href="https://developer.riotgames.com/api-methods/#summoner-v4/GET_getByAccessToken">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "profileIconId": 0,
  "revisionDate": 0,
  "puuid": "string",
  "summonerLevel": 0,
  "id": "string"
}
```

<h3 id="get-a-summoner-by-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[summoner-v4.SummonerDTO](#schemasummoner-v4.summonerdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

<h1 id="riot-api-tft-league-v1">tft-league-v1</h1>

## Get league entries in all queues for a given puuid

<a id="opIdtft-league-v1.getLeagueEntriesByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/league/v1/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/league/v1/by-puuid/{puuid}`

Get league entries in all queues for a given puuid

<a href="https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getLeagueEntriesByPUUID">Official API Reference</a>

<h3 id="get-league-entries-in-all-queues-for-a-given-puuid-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "leagueId": "string",
    "queueType": "string",
    "ratedTier": "ORANGE",
    "ratedRating": 0,
    "tier": "string",
    "rank": "string",
    "leaguePoints": 0,
    "wins": 0,
    "losses": 0,
    "hotStreak": true,
    "veteran": true,
    "freshBlood": true,
    "inactive": true,
    "miniSeries": {
      "losses": 0,
      "progress": "string",
      "target": 0,
      "wins": 0
    }
  }
]
```

<h3 id="get-league-entries-in-all-queues-for-a-given-puuid-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-league-entries-in-all-queues-for-a-given-puuid-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[tft-league-v1.LeagueEntryDTO](#schematft-league-v1.leagueentrydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get the challenger league.

<a id="opIdtft-league-v1.getChallengerLeague"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/league/v1/challenger?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/league/v1/challenger`

Get the challenger league.

<a href="https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getChallengerLeague">Official API Reference</a>

<h3 id="get-the-challenger-league-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|query|string|false|Defaults to RANKED_TFT.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_TFT|
|queue|RANKED_TFT_DOUBLE_UP|

> Example responses

> 200 Response

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

<h3 id="get-the-challenger-league-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-league-v1.LeagueListDTO](#schematft-league-v1.leaguelistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get all the league entries.

<a id="opIdtft-league-v1.getLeagueEntries"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/league/v1/entries/DIAMOND/I?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/league/v1/entries/{tier}/{division}`

Get all the league entries.

<a href="https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getLeagueEntries">Official API Reference</a>

<h3 id="get-all-the-league-entries-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tier|path|string|true|none|
|division|path|string|true|none|
|queue|query|string|false|Defaults to RANKED_TFT.|
|page|query|integer(int32)|false|Defaults to 1. Starts with page 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tier|DIAMOND|
|tier|EMERALD|
|tier|PLATINUM|
|tier|GOLD|
|tier|SILVER|
|tier|BRONZE|
|tier|IRON|
|division|I|
|division|II|
|division|III|
|division|IV|
|queue|RANKED_TFT|
|queue|RANKED_TFT_DOUBLE_UP|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "leagueId": "string",
    "queueType": "string",
    "ratedTier": "ORANGE",
    "ratedRating": 0,
    "tier": "string",
    "rank": "string",
    "leaguePoints": 0,
    "wins": 0,
    "losses": 0,
    "hotStreak": true,
    "veteran": true,
    "freshBlood": true,
    "inactive": true,
    "miniSeries": {
      "losses": 0,
      "progress": "string",
      "target": 0,
      "wins": 0
    }
  }
]
```

<h3 id="get-all-the-league-entries-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-all-the-league-entries-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[tft-league-v1.LeagueEntryDTO](#schematft-league-v1.leagueentrydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get the grandmaster league.

<a id="opIdtft-league-v1.getGrandmasterLeague"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/league/v1/grandmaster?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/league/v1/grandmaster`

Get the grandmaster league.

<a href="https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getGrandmasterLeague">Official API Reference</a>

<h3 id="get-the-grandmaster-league-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|query|string|false|Defaults to RANKED_TFT.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_TFT|
|queue|RANKED_TFT_DOUBLE_UP|

> Example responses

> 200 Response

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

<h3 id="get-the-grandmaster-league-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-league-v1.LeagueListDTO](#schematft-league-v1.leaguelistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get the master league.

<a id="opIdtft-league-v1.getMasterLeague"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/league/v1/master?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/league/v1/master`

Get the master league.

<a href="https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getMasterLeague">Official API Reference</a>

<h3 id="get-the-master-league-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|query|string|false|Defaults to RANKED_TFT.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_TFT|
|queue|RANKED_TFT_DOUBLE_UP|

> Example responses

> 200 Response

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

<h3 id="get-the-master-league-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-league-v1.LeagueListDTO](#schematft-league-v1.leaguelistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get the top rated ladder for given queue

<a id="opIdtft-league-v1.getTopRatedLadder"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/league/v1/rated-ladders/RANKED_TFT_TURBO/top?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/league/v1/rated-ladders/{queue}/top`

Get the top rated ladder for given queue

<a href="https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getTopRatedLadder">Official API Reference</a>

<h3 id="get-the-top-rated-ladder-for-given-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|RANKED_TFT_TURBO|

> Example responses

> 200 Response

```json
[
  {
    "puuid": "string",
    "ratedTier": "ORANGE",
    "ratedRating": 0,
    "wins": 0,
    "previousUpdateLadderPosition": 0
  }
]
```

<h3 id="get-the-top-rated-ladder-for-given-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-the-top-rated-ladder-for-given-queue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[tft-league-v1.TopRatedLadderEntryDto](#schematft-league-v1.topratedladderentrydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-tft-match-v1">tft-match-v1</h1>

## Get a list of match ids by PUUID

<a id="opIdtft-match-v1.getMatchIdsByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/match/v1/matches/by-puuid/string/ids?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/match/v1/matches/by-puuid/{puuid}/ids`

Get a list of match ids by PUUID

<a href="https://developer.riotgames.com/api-methods/#tft-match-v1/GET_getMatchIdsByPUUID">Official API Reference</a>

<h3 id="get-a-list-of-match-ids-by-puuid-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|
|start|query|integer(int32)|false|Defaults to 0. Start index.|
|endTime|query|integer(int64)|false|Epoch timestamp in seconds.|
|startTime|query|integer(int64)|false|Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.|
|count|query|integer(int32)|false|Defaults to 20. Number of match ids to return.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-a-list-of-match-ids-by-puuid-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-a-list-of-match-ids-by-puuid-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get a match by match id

<a id="opIdtft-match-v1.getMatch"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/match/v1/matches/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/match/v1/matches/{matchId}`

Get a match by match id

<a href="https://developer.riotgames.com/api-methods/#tft-match-v1/GET_getMatch">Official API Reference</a>

<h3 id="get-a-match-by-match-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "data_version": "string",
    "match_id": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "gameCreation": 0,
    "gameId": 0,
    "game_datetime": 0,
    "game_length": 0,
    "game_version": "string",
    "game_variation": "string",
    "mapId": 0,
    "participants": [
      {
        "companion": {
          "content_ID": "string",
          "item_ID": 0,
          "skin_ID": 0,
          "species": "string"
        },
        "gold_left": 0,
        "last_round": 0,
        "level": 0,
        "placement": 0,
        "players_eliminated": 0,
        "puuid": "string",
        "riotIdGameName": "string",
        "riotIdTagline": "string",
        "time_eliminated": 0,
        "total_damage_to_players": 0,
        "traits": [
          {
            "name": "string",
            "num_units": 0,
            "style": 0,
            "tier_current": 0,
            "tier_total": 0
          }
        ],
        "units": [
          {
            "items": [
              0
            ],
            "character_id": "string",
            "itemNames": [
              "string"
            ],
            "chosen": "string",
            "name": "string",
            "rarity": 0,
            "tier": 0
          }
        ],
        "win": true,
        "augments": [
          "string"
        ],
        "partner_group_id": 0,
        "missions": {
          "Assists": 0,
          "DamageDealt": 0,
          "DamageDealtToObjectives": 0,
          "DamageDealtToTurrets": 0,
          "DamageTaken": 0,
          "DoubleKills": 0,
          "GoldEarned": 0,
          "GoldSpent": 0,
          "InhibitorsDestroyed": 0,
          "Kills": 0,
          "LargestKillingSpree": 0,
          "LargestMultiKill": 0,
          "MagicDamageDealt": 0,
          "MagicDamageDealtToChampions": 0,
          "NeutralMinionsKilledTeamJungle": 0,
          "PhysicalDamageDealt": 0,
          "PhysicalDamageTaken": 0,
          "PlayerScore0": 0,
          "PlayerScore1": 0,
          "PlayerScore2": 0,
          "PlayerScore3": 0,
          "PlayerScore4": 0,
          "PlayerScore5": 0,
          "PlayerScore6": 0,
          "PlayerScore9": 0,
          "PlayerScore10": 0,
          "PlayerScore11": 0,
          "QuadraKills": 0,
          "Spell1Casts": 0,
          "Spell2Casts": 0,
          "Spell3Casts": 0,
          "Spell4Casts": 0,
          "SummonerSpell1Casts": 0,
          "TimeCCOthers": 0,
          "TotalMinionsKilled": 0,
          "TrueDamageDealtToChampions": 0,
          "UnrealKills": 0,
          "VisionScore": 0,
          "WardsKilled": 0,
          "Deaths": 0,
          "KillingSprees": 0,
          "MagicDamageTaken": 0,
          "PentaKills": 0,
          "PhysicalDamageDealtToChampions": 0,
          "TotalDamageDealtToChampions": 0,
          "TripleKills": 0,
          "TrueDamageDealt": 0,
          "TrueDamageTaken": 0
        },
        "skill_tree": {
          "property1": 0,
          "property2": 0
        },
        "pve_score": 0,
        "pve_wonrun": true
      }
    ],
    "queue_id": 0,
    "queueId": 0,
    "tft_game_type": "string",
    "tft_set_core_name": "string",
    "tft_set_number": 0
  }
}
```

<h3 id="get-a-match-by-match-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-match-v1.MatchDto](#schematft-match-v1.matchdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-tft-status-v1">tft-status-v1</h1>

## Get Teamfight Tactics status for the given platform.

<a id="opIdtft-status-v1.getPlatformData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/status/v1/platform-data?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/status/v1/platform-data`

Get Teamfight Tactics status for the given platform.

<a href="https://developer.riotgames.com/api-methods/#tft-status-v1/GET_getPlatformData">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

<h3 id="get-teamfight-tactics-status-for-the-given-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-status-v1.PlatformDataDto](#schematft-status-v1.platformdatadto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-tft-summoner-v1">tft-summoner-v1</h1>

## Get a summoner by PUUID.

<a id="opIdtft-summoner-v1.getByPUUID"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tft/summoner/v1/summoners/by-puuid/{encryptedPUUID}`

Get a summoner by PUUID.

<a href="https://developer.riotgames.com/api-methods/#tft-summoner-v1/GET_getByPUUID">Official API Reference</a>

<h3 id="get-a-summoner-by-puuid-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encryptedPUUID|path|string|true|Summoner ID|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "profileIconId": 0,
  "revisionDate": 0,
  "summonerLevel": 0,
  "id": "string"
}
```

<h3 id="get-a-summoner-by-puuid-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-summoner-v1.SummonerDTO](#schematft-summoner-v1.summonerdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get a summoner by access token.

<a id="opIdtft-summoner-v1.getByAccessToken"></a>

> Code samples

```bash
curl https://jp1.api.riotgames.com/tft/summoner/v1/summoners/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tft/summoner/v1/summoners/me`

Get a summoner by access token.

<a href="https://developer.riotgames.com/api-methods/#tft-summoner-v1/GET_getByAccessToken">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "profileIconId": 0,
  "revisionDate": 0,
  "summonerLevel": 0,
  "id": "string"
}
```

<h3 id="get-a-summoner-by-access-token-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tft-summoner-v1.SummonerDTO](#schematft-summoner-v1.summonerdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
rso ( Scopes: openid )
</aside>

<h1 id="riot-api-tournament-stub-v5">tournament-stub-v5</h1>

## Create a tournament code for the given tournament - Stub method

<a id="opIdtournament-stub-v5.createTournamentCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament-stub/v5/codes?tournamentId=0&api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowedParticipants": [
      "string"
    ],
    "metadata": "string",
    "teamSize": 1,
    "pickType": "BLIND_PICK",
    "mapType": "SUMMONERS_RIFT",
    "spectatorType": "NONE",
    "enoughPlayers": true
  }'
```

`POST /lol/tournament-stub/v5/codes`

Create a tournament code for the given tournament - Stub method

<a href="https://developer.riotgames.com/api-methods/#tournament-stub-v5/POST_createTournamentCode">Official API Reference</a>

> Body parameter

```json
{
  "allowedParticipants": [
    "string"
  ],
  "metadata": "string",
  "teamSize": 1,
  "pickType": "BLIND_PICK",
  "mapType": "SUMMONERS_RIFT",
  "spectatorType": "NONE",
  "enoughPlayers": true
}
```

<h3 id="create-a-tournament-code-for-the-given-tournament---stub-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer(int32)|false|The number of codes to create (max 1000)|
|tournamentId|query|integer(int64)|true|The tournament ID|
|body|body|[tournament-stub-v5.TournamentCodeParametersV5](#schematournament-stub-v5.tournamentcodeparametersv5)|true|Metadata for the generated code|
|» allowedParticipants|body|[string]|false|Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.|
|» metadata|body|string|false|Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.|
|» teamSize|body|integer(int32)|true|The team size of the game. Valid values are 1-5.|
|» pickType|body|string|true|The pick type of the game.<br>             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)|
|» mapType|body|string|true|The map type of the game.<br>             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS,  LEAGUE_CLASSIC)|
|» spectatorType|body|string|true|The spectator type of the game.<br>             (Legal values:  NONE,  LOBBYONLY,  ALL)|
|» enoughPlayers|body|boolean|true|Checks if allowed participants are enough to make full teams.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» pickType|BLIND_PICK|
|» pickType|DRAFT_MODE|
|» pickType|ALL_RANDOM|
|» pickType|TOURNAMENT_DRAFT|
|» mapType|SUMMONERS_RIFT|
|» mapType|HOWLING_ABYSS|
|» mapType|LEAGUE_CLASSIC|
|» spectatorType|NONE|
|» spectatorType|LOBBYONLY|
|» spectatorType|ALL|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="create-a-tournament-code-for-the-given-tournament---stub-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="create-a-tournament-code-for-the-given-tournament---stub-method-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Returns the tournament code DTO associated with a tournament code string - Stub Method

<a id="opIdtournament-stub-v5.getTournamentCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament-stub/v5/codes/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/tournament-stub/v5/codes/{tournamentCode}`

Returns the tournament code DTO associated with a tournament code string - Stub Method

<a href="https://developer.riotgames.com/api-methods/#tournament-stub-v5/GET_getTournamentCode">Official API Reference</a>

<h3 id="returns-the-tournament-code-dto-associated-with-a-tournament-code-string---stub-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentCode|path|string|true|The tournament code string.|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "lobbyName": "string",
  "metaData": "string",
  "password": "string",
  "teamSize": 0,
  "providerId": 0,
  "pickType": "string",
  "tournamentId": 0,
  "id": 0,
  "region": "BR",
  "map": "string",
  "participants": [
    "string"
  ]
}
```

<h3 id="returns-the-tournament-code-dto-associated-with-a-tournament-code-string---stub-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tournament-stub-v5.TournamentCodeV5DTO](#schematournament-stub-v5.tournamentcodev5dto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Gets a list of lobby events by tournament code - Stub method

<a id="opIdtournament-stub-v5.getLobbyEventsByCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament-stub/v5/lobby-events/by-code/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/tournament-stub/v5/lobby-events/by-code/{tournamentCode}`

Gets a list of lobby events by tournament code - Stub method

<a href="https://developer.riotgames.com/api-methods/#tournament-stub-v5/GET_getLobbyEventsByCode">Official API Reference</a>

<h3 id="gets-a-list-of-lobby-events-by-tournament-code---stub-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentCode|path|string|true|The short code to look up lobby events for|

> Example responses

> 200 Response

```json
{
  "eventList": [
    {
      "timestamp": "string",
      "eventType": "string",
      "puuid": "string"
    }
  ]
}
```

<h3 id="gets-a-list-of-lobby-events-by-tournament-code---stub-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tournament-stub-v5.LobbyEventV5DTOWrapper](#schematournament-stub-v5.lobbyeventv5dtowrapper)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Creates a tournament provider and returns its ID - Stub method

<a id="opIdtournament-stub-v5.registerProviderData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament-stub/v5/providers?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "region": "BR",
    "url": "string"
  }'
```

`POST /lol/tournament-stub/v5/providers`

Creates a tournament provider and returns its ID - Stub method
## Implementation Notes
Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.

<a href="https://developer.riotgames.com/api-methods/#tournament-stub-v5/POST_registerProviderData">Official API Reference</a>

> Body parameter

```json
{
  "region": "BR",
  "url": "string"
}
```

<h3 id="creates-a-tournament-provider-and-returns-its-id---stub-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tournament-stub-v5.ProviderRegistrationParametersV5](#schematournament-stub-v5.providerregistrationparametersv5)|true|The provider definition.|
|» region|body|string|true|The region in which the provider will be running tournaments.<br>             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR)|
|» url|body|string|true|The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|BR|
|» region|EUNE|
|» region|EUW|
|» region|JP|
|» region|LAN|
|» region|LAS|
|» region|NA|
|» region|OCE|
|» region|PBE|
|» region|RU|
|» region|TR|
|» region|KR|

> Example responses

> 200 Response

```json
0
```

<h3 id="creates-a-tournament-provider-and-returns-its-id---stub-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Creates a tournament and returns its ID - Stub method

<a id="opIdtournament-stub-v5.registerTournament"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament-stub/v5/tournaments?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "providerId": 0,
    "name": "string"
  }'
```

`POST /lol/tournament-stub/v5/tournaments`

Creates a tournament and returns its ID - Stub method

<a href="https://developer.riotgames.com/api-methods/#tournament-stub-v5/POST_registerTournament">Official API Reference</a>

> Body parameter

```json
{
  "providerId": 0,
  "name": "string"
}
```

<h3 id="creates-a-tournament-and-returns-its-id---stub-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tournament-stub-v5.TournamentRegistrationParametersV5](#schematournament-stub-v5.tournamentregistrationparametersv5)|true|The tournament definition.|
|» providerId|body|integer(int32)|true|The provider ID to specify the regional registered provider data to associate this tournament.|
|» name|body|string|false|The optional name of the tournament.|

> Example responses

> 200 Response

```json
0
```

<h3 id="creates-a-tournament-and-returns-its-id---stub-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-tournament-v5">tournament-v5</h1>

## Create a tournament code for the given tournament.

<a id="opIdtournament-v5.createTournamentCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/codes?tournamentId=0&api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "allowedParticipants": [
      "string"
    ],
    "metadata": "string",
    "teamSize": 1,
    "pickType": "BLIND_PICK",
    "mapType": "SUMMONERS_RIFT",
    "spectatorType": "NONE",
    "enoughPlayers": true
  }'
```

`POST /lol/tournament/v5/codes`

Create a tournament code for the given tournament.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/POST_createTournamentCode">Official API Reference</a>

> Body parameter

```json
{
  "allowedParticipants": [
    "string"
  ],
  "metadata": "string",
  "teamSize": 1,
  "pickType": "BLIND_PICK",
  "mapType": "SUMMONERS_RIFT",
  "spectatorType": "NONE",
  "enoughPlayers": true
}
```

<h3 id="create-a-tournament-code-for-the-given-tournament-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentId|query|integer(int64)|true|The tournament ID|
|count|query|integer(int32)|false|The number of codes to create (max 1000)|
|body|body|[tournament-v5.TournamentCodeParametersV5](#schematournament-v5.tournamentcodeparametersv5)|true|Metadata for the generated code|
|» allowedParticipants|body|[string]|false|Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.|
|» metadata|body|string|false|Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.|
|» teamSize|body|integer(int32)|true|The team size of the game. Valid values are 1-5.|
|» pickType|body|string|true|The pick type of the game.<br>             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)|
|» mapType|body|string|true|The map type of the game.<br>             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS,  LEAGUE_CLASSIC)|
|» spectatorType|body|string|true|The spectator type of the game.<br>             (Legal values:  NONE,  LOBBYONLY,  ALL)|
|» enoughPlayers|body|boolean|true|Checks if allowed participants are enough to make full teams.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» pickType|BLIND_PICK|
|» pickType|DRAFT_MODE|
|» pickType|ALL_RANDOM|
|» pickType|TOURNAMENT_DRAFT|
|» mapType|SUMMONERS_RIFT|
|» mapType|HOWLING_ABYSS|
|» mapType|LEAGUE_CLASSIC|
|» spectatorType|NONE|
|» spectatorType|LOBBYONLY|
|» spectatorType|ALL|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="create-a-tournament-code-for-the-given-tournament-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="create-a-tournament-code-for-the-given-tournament-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Returns the tournament code DTO associated with a tournament code string.

<a id="opIdtournament-v5.getTournamentCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/codes/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/tournament/v5/codes/{tournamentCode}`

Returns the tournament code DTO associated with a tournament code string.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/GET_getTournamentCode">Official API Reference</a>

<h3 id="returns-the-tournament-code-dto-associated-with-a-tournament-code-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentCode|path|string|true|The tournament code string.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "providerId": 0,
  "tournamentId": 0,
  "code": "string",
  "region": "BR",
  "map": "string",
  "teamSize": 0,
  "spectators": "string",
  "pickType": "string",
  "lobbyName": "string",
  "password": "string",
  "metaData": "string",
  "participants": [
    "string"
  ]
}
```

<h3 id="returns-the-tournament-code-dto-associated-with-a-tournament-code-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tournament-v5.TournamentCodeV5DTO](#schematournament-v5.tournamentcodev5dto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Update the pick type, map, spectator type, or allowed puuids for a code.

<a id="opIdtournament-v5.updateCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/codes/string?api_key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "allowedParticipants": [
      "string"
    ],
    "pickType": "BLIND_PICK",
    "mapType": "SUMMONERS_RIFT",
    "spectatorType": "NONE"
  }'
```

`PUT /lol/tournament/v5/codes/{tournamentCode}`

Update the pick type, map, spectator type, or allowed puuids for a code.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/PUT_updateCode">Official API Reference</a>

> Body parameter

```json
{
  "allowedParticipants": [
    "string"
  ],
  "pickType": "BLIND_PICK",
  "mapType": "SUMMONERS_RIFT",
  "spectatorType": "NONE"
}
```

<h3 id="update-the-pick-type-map-spectator-type-or-allowed-puuids-for-a-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentCode|path|string|true|The tournament code to update|
|body|body|[tournament-v5.TournamentCodeUpdateParametersV5](#schematournament-v5.tournamentcodeupdateparametersv5)|false|The fields to update|
|» allowedParticipants|body|[string]|false|Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.|
|» pickType|body|string|true|The pick type<br>             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)|
|» mapType|body|string|true|The map type<br>             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS)|
|» spectatorType|body|string|true|The spectator type<br>             (Legal values:  NONE,  LOBBYONLY,  ALL)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» pickType|BLIND_PICK|
|» pickType|DRAFT_MODE|
|» pickType|ALL_RANDOM|
|» pickType|TOURNAMENT_DRAFT|
|» mapType|SUMMONERS_RIFT|
|» mapType|HOWLING_ABYSS|
|» spectatorType|NONE|
|» spectatorType|LOBBYONLY|
|» spectatorType|ALL|

<h3 id="update-the-pick-type-map-spectator-type-or-allowed-puuids-for-a-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get games details

<a id="opIdtournament-v5.getGames"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/games/by-code/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/tournament/v5/games/by-code/{tournamentCode}`

Get games details
## Implementation Notes
Additional endpoint to get tournament games. From this endpoint, you are able to get participants PUUID (the callback doesn't contain this info).

You can also use it to check if the game was recorded and validate callbacks. If the endpoint returns the game, it means a callback was attempted.

This will only work for tournament codes created after November 10, 2023.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/GET_getGames">Official API Reference</a>

<h3 id="get-games-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentCode|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "startTime": 0,
    "winningTeam": [
      {
        "puuid": "string"
      }
    ],
    "losingTeam": [
      {
        "puuid": "string"
      }
    ],
    "shortCode": "string",
    "metaData": "string",
    "gameId": 0,
    "gameName": "string",
    "gameType": "string",
    "gameMap": 0,
    "gameMode": "string",
    "region": "string"
  }
]
```

<h3 id="get-games-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<h3 id="get-games-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[tournament-v5.TournamentGamesV5](#schematournament-v5.tournamentgamesv5)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Gets a list of lobby events by tournament code.

<a id="opIdtournament-v5.getLobbyEventsByCode"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/lobby-events/by-code/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lol/tournament/v5/lobby-events/by-code/{tournamentCode}`

Gets a list of lobby events by tournament code.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/GET_getLobbyEventsByCode">Official API Reference</a>

<h3 id="gets-a-list-of-lobby-events-by-tournament-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tournamentCode|path|string|true|The short code to look up lobby events for|

> Example responses

> 200 Response

```json
{
  "eventList": [
    {
      "timestamp": "string",
      "eventType": "string",
      "puuid": "string"
    }
  ]
}
```

<h3 id="gets-a-list-of-lobby-events-by-tournament-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[tournament-v5.LobbyEventV5DTOWrapper](#schematournament-v5.lobbyeventv5dtowrapper)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Creates a tournament provider and returns its ID.

<a id="opIdtournament-v5.registerProviderData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/providers?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "region": "BR",
    "url": "string"
  }'
```

`POST /lol/tournament/v5/providers`

Creates a tournament provider and returns its ID.
## Implementation Notes
Providers will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/POST_registerProviderData">Official API Reference</a>

> Body parameter

```json
{
  "region": "BR",
  "url": "string"
}
```

<h3 id="creates-a-tournament-provider-and-returns-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tournament-v5.ProviderRegistrationParametersV5](#schematournament-v5.providerregistrationparametersv5)|true|The provider definition.|
|» region|body|string|true|The region in which the provider will be running tournaments.<br>             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR,  PH,  SG,  TH,  TW,  VN)|
|» url|body|string|true|The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» region|BR|
|» region|EUNE|
|» region|EUW|
|» region|JP|
|» region|LAN|
|» region|LAS|
|» region|NA|
|» region|OCE|
|» region|PBE|
|» region|RU|
|» region|TR|
|» region|KR|
|» region|PH|
|» region|SG|
|» region|TH|
|» region|TW|
|» region|VN|

> Example responses

> 200 Response

```json
0
```

<h3 id="creates-a-tournament-provider-and-returns-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Creates a tournament and returns its ID.

<a id="opIdtournament-v5.registerTournament"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/lol/tournament/v5/tournaments?api_key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "providerId": 0,
    "name": "string"
  }'
```

`POST /lol/tournament/v5/tournaments`

Creates a tournament and returns its ID.

<a href="https://developer.riotgames.com/api-methods/#tournament-v5/POST_registerTournament">Official API Reference</a>

> Body parameter

```json
{
  "providerId": 0,
  "name": "string"
}
```

<h3 id="creates-a-tournament-and-returns-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[tournament-v5.TournamentRegistrationParametersV5](#schematournament-v5.tournamentregistrationparametersv5)|true|The tournament definition.|
|» providerId|body|integer(int32)|true|The provider ID to specify the regional registered provider data to associate this tournament.|
|» name|body|string|false|The optional name of the tournament.|

> Example responses

> 200 Response

```json
0
```

<h3 id="creates-a-tournament-and-returns-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-val-console-match-v1">val-console-match-v1</h1>

## Get match by id

<a id="opIdval-console-match-v1.getMatch"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/match/console/v1/matches/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/match/console/v1/matches/{matchId}`

Get match by id

<a href="https://developer.riotgames.com/api-methods/#val-console-match-v1/GET_getMatch">Official API Reference</a>

<h3 id="get-match-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "matchInfo": {
    "matchId": "string",
    "mapId": "string",
    "gameLengthMillis": 0,
    "gameStartMillis": 0,
    "provisioningFlowId": "string",
    "isCompleted": true,
    "customGameName": "string",
    "queueId": "string",
    "gameMode": "string",
    "isRanked": true,
    "seasonId": "string"
  },
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "teamId": "string",
      "partyId": "string",
      "characterId": "string",
      "stats": {
        "score": 0,
        "roundsPlayed": 0,
        "kills": 0,
        "deaths": 0,
        "assists": 0,
        "playtimeMillis": 0,
        "abilityCasts": {
          "grenadeCasts": 0,
          "ability1Casts": 0,
          "ability2Casts": 0,
          "ultimateCasts": 0
        }
      },
      "competitiveTier": 0,
      "playerCard": "string",
      "playerTitle": "string"
    }
  ],
  "coaches": [
    {
      "puuid": "string",
      "teamId": "string"
    }
  ],
  "teams": [
    {
      "teamId": "string",
      "won": true,
      "roundsPlayed": 0,
      "roundsWon": 0,
      "numPoints": 0
    }
  ],
  "roundResults": [
    {
      "roundNum": 0,
      "roundResult": "string",
      "roundCeremony": "string",
      "winningTeam": "string",
      "bombPlanter": "string",
      "bombDefuser": "string",
      "plantRoundTime": 0,
      "plantPlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "plantLocation": {
        "x": 0,
        "y": 0
      },
      "plantSite": "string",
      "defuseRoundTime": 0,
      "defusePlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "defuseLocation": {
        "x": 0,
        "y": 0
      },
      "playerStats": [
        {
          "puuid": "string",
          "kills": [
            {
              "timeSinceGameStartMillis": 0,
              "timeSinceRoundStartMillis": 0,
              "killer": "string",
              "victim": "string",
              "victimLocation": {
                "x": 0,
                "y": 0
              },
              "assistants": [
                "string"
              ],
              "playerLocations": [
                {
                  "puuid": "string",
                  "viewRadians": 0,
                  "location": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "finishingDamage": {
                "damageType": "string",
                "damageItem": "string",
                "isSecondaryFireMode": true
              }
            }
          ],
          "damage": [
            {
              "receiver": "string",
              "damage": 0,
              "legshots": 0,
              "bodyshots": 0,
              "headshots": 0
            }
          ],
          "score": 0,
          "economy": {
            "loadoutValue": 0,
            "weapon": "string",
            "armor": "string",
            "remaining": 0,
            "spent": 0
          },
          "ability": {
            "grenadeEffects": "string",
            "ability1Effects": "string",
            "ability2Effects": "string",
            "ultimateEffects": "string"
          }
        }
      ],
      "roundResultCode": "string"
    }
  ]
}
```

<h3 id="get-match-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-console-match-v1.MatchDto](#schemaval-console-match-v1.matchdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get matchlist for games played by puuid and platform type

<a id="opIdval-console-match-v1.getMatchlist"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/match/console/v1/matchlists/by-puuid/string?platformType=playstation&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/match/console/v1/matchlists/by-puuid/{puuid}`

Get matchlist for games played by puuid and platform type

<a href="https://developer.riotgames.com/api-methods/#val-console-match-v1/GET_getMatchlist">Official API Reference</a>

<h3 id="get-matchlist-for-games-played-by-puuid-and-platform-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|
|platformType|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platformType|playstation|
|platformType|xbox|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "history": [
    {
      "matchId": "string",
      "gameStartTimeMillis": 0,
      "queueId": "string"
    }
  ]
}
```

<h3 id="get-matchlist-for-games-played-by-puuid-and-platform-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-console-match-v1.MatchlistDto](#schemaval-console-match-v1.matchlistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get recent matches

<a id="opIdval-console-match-v1.getRecent"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/match/console/v1/recent-matches/by-queue/console_unrated?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/match/console/v1/recent-matches/by-queue/{queue}`

Get recent matches
## Implementation Notes
Returns a list of match ids that have completed in the last 10 minutes for live regions and 12 hours for the esports routing value. NA/LATAM/BR share a match history deployment. As such, recent matches will return a combined list of matches from those three regions. Requests are load balanced so you may see some inconsistencies as matches are added/removed from the list.

<a href="https://developer.riotgames.com/api-methods/#val-console-match-v1/GET_getRecent">Official API Reference</a>

<h3 id="get-recent-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|console_unrated|
|queue|console_swiftplay|
|queue|console_hurm|
|queue|console_deathmatch|
|queue|console_competitive|
|queue|console_skirmish2v2|
|queue|console_skirmishascension1v1|
|queue|console_skirmishascension2v2|
|queue|console_abilitydraftarena|

> Example responses

> 200 Response

```json
{
  "currentTime": 0,
  "matchIds": [
    "string"
  ]
}
```

<h3 id="get-recent-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-console-match-v1.RecentMatchesDto](#schemaval-console-match-v1.recentmatchesdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-val-console-ranked-v1">val-console-ranked-v1</h1>

## Get leaderboard for the competitive queue

<a id="opIdval-console-ranked-v1.getLeaderboard"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/console/ranked/v1/leaderboards/by-act/string?platformType=playstation&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/console/ranked/v1/leaderboards/by-act/{actId}`

Get leaderboard for the competitive queue

<a href="https://developer.riotgames.com/api-methods/#val-console-ranked-v1/GET_getLeaderboard">Official API Reference</a>

<h3 id="get-leaderboard-for-the-competitive-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actId|path|string|true|Act ids can be found using the val-content API.|
|platformType|query|string|true|none|
|startIndex|query|integer(int32)|false|Defaults to 0.|
|size|query|integer(int32)|false|Defaults to 200. Valid values: 1 to 200.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platformType|playstation|
|platformType|xbox|

> Example responses

> 200 Response

```json
{
  "actId": "string",
  "totalPlayers": 0,
  "query": "string",
  "shard": "string",
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "leaderboardRank": 0,
      "rankedRating": 0,
      "numberOfWins": 0
    }
  ],
  "tierDetails": [
    {}
  ]
}
```

<h3 id="get-leaderboard-for-the-competitive-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-console-ranked-v1.LeaderboardDto](#schemaval-console-ranked-v1.leaderboarddto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-val-content-v1">val-content-v1</h1>

## Get content optionally filtered by locale

<a id="opIdval-content-v1.getContent"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/content/v1/contents?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/content/v1/contents`

Get content optionally filtered by locale

<a href="https://developer.riotgames.com/api-methods/#val-content-v1/GET_getContent">Official API Reference</a>

<h3 id="get-content-optionally-filtered-by-locale-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "version": "string",
  "characters": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "maps": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "chromas": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "skins": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "skinLevels": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "equips": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "gameModes": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "sprays": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "sprayLevels": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "charms": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "charmLevels": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "playerCards": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "playerTitles": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "acts": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "isActive": true,
      "parentId": "string",
      "type": "string"
    }
  ],
  "ceremonies": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "totems": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ]
}
```

<h3 id="get-content-optionally-filtered-by-locale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-content-v1.ContentDto](#schemaval-content-v1.contentdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-val-match-v1">val-match-v1</h1>

## Get match by id

<a id="opIdval-match-v1.getMatch"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/match/v1/matches/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/match/v1/matches/{matchId}`

Get match by id

<a href="https://developer.riotgames.com/api-methods/#val-match-v1/GET_getMatch">Official API Reference</a>

<h3 id="get-match-by-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|matchId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "matchInfo": {
    "matchId": "string",
    "mapId": "string",
    "gameVersion": "string",
    "gameLengthMillis": 0,
    "region": "string",
    "gameStartMillis": 0,
    "provisioningFlowId": "string",
    "isCompleted": true,
    "customGameName": "string",
    "queueId": "string",
    "gameMode": "string",
    "isRanked": true,
    "seasonId": "string",
    "premierMatchInfo": {}
  },
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "teamId": "string",
      "partyId": "string",
      "characterId": "string",
      "stats": {
        "score": 0,
        "roundsPlayed": 0,
        "kills": 0,
        "deaths": 0,
        "assists": 0,
        "playtimeMillis": 0,
        "abilityCasts": {
          "grenadeCasts": 0,
          "ability1Casts": 0,
          "ability2Casts": 0,
          "ultimateCasts": 0
        }
      },
      "competitiveTier": 0,
      "isObserver": true,
      "playerCard": "string",
      "playerTitle": "string",
      "accountLevel": 0
    }
  ],
  "coaches": [
    {
      "puuid": "string",
      "teamId": "string"
    }
  ],
  "teams": [
    {
      "teamId": "string",
      "won": true,
      "roundsPlayed": 0,
      "roundsWon": 0,
      "numPoints": 0
    }
  ],
  "roundResults": [
    {
      "roundNum": 0,
      "roundResult": "string",
      "roundCeremony": "string",
      "winningTeam": "string",
      "winningTeamRole": "string",
      "bombPlanter": "string",
      "bombDefuser": "string",
      "plantRoundTime": 0,
      "plantPlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "plantLocation": {
        "x": 0,
        "y": 0
      },
      "plantSite": "string",
      "defuseRoundTime": 0,
      "defusePlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "defuseLocation": {
        "x": 0,
        "y": 0
      },
      "playerStats": [
        {
          "puuid": "string",
          "kills": [
            {
              "timeSinceGameStartMillis": 0,
              "timeSinceRoundStartMillis": 0,
              "killer": "string",
              "victim": "string",
              "victimLocation": {
                "x": 0,
                "y": 0
              },
              "assistants": [
                "string"
              ],
              "playerLocations": [
                {
                  "puuid": "string",
                  "viewRadians": 0,
                  "location": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "finishingDamage": {
                "damageType": "string",
                "damageItem": "string",
                "isSecondaryFireMode": true
              }
            }
          ],
          "damage": [
            {
              "receiver": "string",
              "damage": 0,
              "legshots": 0,
              "bodyshots": 0,
              "headshots": 0
            }
          ],
          "score": 0,
          "economy": {
            "loadoutValue": 0,
            "weapon": "string",
            "armor": "string",
            "remaining": 0,
            "spent": 0
          },
          "ability": {
            "grenadeEffects": "string",
            "ability1Effects": "string",
            "ability2Effects": "string",
            "ultimateEffects": "string"
          }
        }
      ],
      "roundResultCode": "string"
    }
  ]
}
```

<h3 id="get-match-by-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-match-v1.MatchDto](#schemaval-match-v1.matchdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get matchlist for games played by puuid

<a id="opIdval-match-v1.getMatchlist"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/match/v1/matchlists/by-puuid/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/match/v1/matchlists/by-puuid/{puuid}`

Get matchlist for games played by puuid

<a href="https://developer.riotgames.com/api-methods/#val-match-v1/GET_getMatchlist">Official API Reference</a>

<h3 id="get-matchlist-for-games-played-by-puuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|puuid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "puuid": "string",
  "history": [
    {
      "matchId": "string",
      "gameStartTimeMillis": 0,
      "queueId": "string"
    }
  ]
}
```

<h3 id="get-matchlist-for-games-played-by-puuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-match-v1.MatchlistDto](#schemaval-match-v1.matchlistdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

## Get recent matches

<a id="opIdval-match-v1.getRecent"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/match/v1/recent-matches/by-queue/competitive?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/match/v1/recent-matches/by-queue/{queue}`

Get recent matches
## Implementation Notes
Returns a list of match ids that have completed in the last 10 minutes for live regions and 12 hours for the esports routing value. NA/LATAM/BR share a match history deployment. As such, recent matches will return a combined list of matches from those three regions. Requests are load balanced so you may see some inconsistencies as matches are added/removed from the list.

<a href="https://developer.riotgames.com/api-methods/#val-match-v1/GET_getRecent">Official API Reference</a>

<h3 id="get-recent-matches-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queue|competitive|
|queue|unrated|
|queue|spikerush|
|queue|tournamentmode|
|queue|deathmatch|
|queue|onefa|
|queue|ggteam|
|queue|hurm|
|queue|swiftplay|
|queue|skirmish2v2|
|queue|skirmishascension1v1|
|queue|skirmishascension2v2|
|queue|test|
|queue|abilitydraftarena|

> Example responses

> 200 Response

```json
{
  "currentTime": 0,
  "matchIds": [
    "string"
  ]
}
```

<h3 id="get-recent-matches-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-match-v1.RecentMatchesDto](#schemaval-match-v1.recentmatchesdto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-val-ranked-v1">val-ranked-v1</h1>

## Get leaderboard for the competitive queue

<a id="opIdval-ranked-v1.getLeaderboard"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/ranked/v1/leaderboards/by-act/string?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/ranked/v1/leaderboards/by-act/{actId}`

Get leaderboard for the competitive queue

<a href="https://developer.riotgames.com/api-methods/#val-ranked-v1/GET_getLeaderboard">Official API Reference</a>

<h3 id="get-leaderboard-for-the-competitive-queue-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actId|path|string|true|Act ids can be found using the val-content API.|
|size|query|integer(int32)|false|Defaults to 200. Valid values: 1 to 200.|
|startIndex|query|integer(int32)|false|Defaults to 0.|

> Example responses

> 200 Response

```json
{
  "shard": "string",
  "actId": "string",
  "totalPlayers": 0,
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "leaderboardRank": 0,
      "rankedRating": 0,
      "numberOfWins": 0,
      "competitiveTier": 0,
      "prefix": "string",
      "premierRosterType": "string"
    }
  ],
  "immortalStartingPage": 0,
  "immortalStartingIndex": 0,
  "topTierRRThreshold": 0,
  "tierDetails": {
    "property1": {
      "rankedRatingThreshold": 0,
      "startingPage": 0,
      "startingIndex": 0
    },
    "property2": {
      "rankedRatingThreshold": 0,
      "startingPage": 0,
      "startingIndex": 0
    }
  },
  "startIndex": 0,
  "query": "string"
}
```

<h3 id="get-leaderboard-for-the-competitive-queue-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-ranked-v1.LeaderboardDto](#schemaval-ranked-v1.leaderboarddto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

<h1 id="riot-api-val-status-v1">val-status-v1</h1>

## Get VALORANT status for the given platform.

<a id="opIdval-status-v1.getPlatformData"></a>

> Code samples

```bash
curl "https://jp1.api.riotgames.com/val/status/v1/platform-data?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /val/status/v1/platform-data`

Get VALORANT status for the given platform.

<a href="https://developer.riotgames.com/api-methods/#val-status-v1/GET_getPlatformData">Official API Reference</a>

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

<h3 id="get-valorant-status-for-the-given-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[val-status-v1.PlatformDataDto](#schemaval-status-v1.platformdatadto)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Data not found|None|
|405|Method Not Allowed|Method not allowed|None|
|415|Unsupported Media Type|Unsupported media type|None|
|429|Too Many Requests|Rate limit exceeded|None|
|500|Internal Server Error|Internal server error|None|
|502|Bad Gateway|Bad gateway|None|
|503|Service Unavailable|Service unavailable|None|
|504|Gateway Timeout|Gateway timeout|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, X-Riot-Token
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "status": {
    "status_code": 0,
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|

<h2 id="tocS_account-v1.AccountDto">account-v1.AccountDto</h2>
<!-- backwards compatibility -->
<a id="schemaaccount-v1.accountdto"></a>
<a id="schema_account-v1.AccountDto"></a>
<a id="tocSaccount-v1.accountdto"></a>
<a id="tocsaccount-v1.accountdto"></a>

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|Encrypted PUUID. Exact length of 78 characters.|
|gameName|string|false|none|This field may be excluded from the response if the account doesn't have a gameName.|
|tagLine|string|false|none|This field may be excluded from the response if the account doesn't have a tagLine.|

<h2 id="tocS_account-v1.AccountRegionDTO">account-v1.AccountRegionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaaccount-v1.accountregiondto"></a>
<a id="schema_account-v1.AccountRegionDTO"></a>
<a id="tocSaccount-v1.accountregiondto"></a>
<a id="tocsaccount-v1.accountregiondto"></a>

```json
{
  "puuid": "string",
  "game": "string",
  "region": "string"
}
```

Account region

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)|
|game|string|true|none|Game to lookup active region|
|region|string|true|none|Player active region|

<h2 id="tocS_account-v1.ActiveShardDto">account-v1.ActiveShardDto</h2>
<!-- backwards compatibility -->
<a id="schemaaccount-v1.activesharddto"></a>
<a id="schema_account-v1.ActiveShardDto"></a>
<a id="tocSaccount-v1.activesharddto"></a>
<a id="tocsaccount-v1.activesharddto"></a>

```json
{
  "puuid": "string",
  "game": "string",
  "activeShard": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|game|string|true|none|none|
|activeShard|string|true|none|none|

<h2 id="tocS_champion-mastery-v4.ChampionMasteryDto">champion-mastery-v4.ChampionMasteryDto</h2>
<!-- backwards compatibility -->
<a id="schemachampion-mastery-v4.championmasterydto"></a>
<a id="schema_champion-mastery-v4.ChampionMasteryDto"></a>
<a id="tocSchampion-mastery-v4.championmasterydto"></a>
<a id="tocschampion-mastery-v4.championmasterydto"></a>

```json
{
  "puuid": "string",
  "championPointsUntilNextLevel": 0,
  "chestGranted": true,
  "championId": 0,
  "lastPlayTime": 0,
  "championLevel": 0,
  "championPoints": 0,
  "championPointsSinceLastLevel": 0,
  "markRequiredForNextLevel": 0,
  "championSeasonMilestone": 0,
  "nextSeasonMilestone": {
    "requireGradeCounts": {
      "property1": 0,
      "property2": 0
    },
    "rewardMarks": 0,
    "bonus": true,
    "rewardConfig": {
      "rewardValue": "string",
      "rewardType": "string",
      "maximumReward": 0
    },
    "totalGamesRequires": 0
  },
  "tokensEarned": 0,
  "milestoneGrades": [
    "string"
  ]
}
```

This object contains single Champion Mastery information for player and champion combination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)|
|championPointsUntilNextLevel|integer(int64)|true|none|Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.|
|chestGranted|boolean|false|none|Is chest granted for this champion or not in current season.|
|championId|integer(int64)|true|none|Champion ID for this entry.|
|lastPlayTime|integer(int64)|true|none|Last time this champion was played by this player - in Unix milliseconds time format.|
|championLevel|integer(int32)|true|none|Champion level for specified player and champion combination.|
|championPoints|integer(int32)|true|none|Total number of champion points for this player and champion combination - they are used to determine championLevel.|
|championPointsSinceLastLevel|integer(int64)|true|none|Number of points earned since current level has been achieved.|
|markRequiredForNextLevel|integer(int32)|true|none|none|
|championSeasonMilestone|integer(int32)|true|none|none|
|nextSeasonMilestone|[champion-mastery-v4.NextSeasonMilestonesDto](#schemachampion-mastery-v4.nextseasonmilestonesdto)|true|none|This object contains required next season milestone information.|
|tokensEarned|integer(int32)|true|none|The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0.|
|milestoneGrades|[string]|false|none|none|

<h2 id="tocS_champion-mastery-v4.NextSeasonMilestonesDto">champion-mastery-v4.NextSeasonMilestonesDto</h2>
<!-- backwards compatibility -->
<a id="schemachampion-mastery-v4.nextseasonmilestonesdto"></a>
<a id="schema_champion-mastery-v4.NextSeasonMilestonesDto"></a>
<a id="tocSchampion-mastery-v4.nextseasonmilestonesdto"></a>
<a id="tocschampion-mastery-v4.nextseasonmilestonesdto"></a>

```json
{
  "requireGradeCounts": {
    "property1": 0,
    "property2": 0
  },
  "rewardMarks": 0,
  "bonus": true,
  "rewardConfig": {
    "rewardValue": "string",
    "rewardType": "string",
    "maximumReward": 0
  },
  "totalGamesRequires": 0
}
```

This object contains required next season milestone information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requireGradeCounts|object|true|none|none|
|rewardMarks|integer(int32)|true|none|Reward marks.|
|bonus|boolean|true|none|Bonus.|
|rewardConfig|[champion-mastery-v4.RewardConfigDto](#schemachampion-mastery-v4.rewardconfigdto)|false|none|Reward configuration.|
|totalGamesRequires|integer(int32)|true|none|none|

<h2 id="tocS_champion-mastery-v4.RewardConfigDto">champion-mastery-v4.RewardConfigDto</h2>
<!-- backwards compatibility -->
<a id="schemachampion-mastery-v4.rewardconfigdto"></a>
<a id="schema_champion-mastery-v4.RewardConfigDto"></a>
<a id="tocSchampion-mastery-v4.rewardconfigdto"></a>
<a id="tocschampion-mastery-v4.rewardconfigdto"></a>

```json
{
  "rewardValue": "string",
  "rewardType": "string",
  "maximumReward": 0
}
```

This object contains required reward config information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rewardValue|string|true|none|Reward value|
|rewardType|string|true|none|Reward type|
|maximumReward|integer(int32)|true|none|Maximun reward|

<h2 id="tocS_champion-v3.ChampionInfo">champion-v3.ChampionInfo</h2>
<!-- backwards compatibility -->
<a id="schemachampion-v3.championinfo"></a>
<a id="schema_champion-v3.ChampionInfo"></a>
<a id="tocSchampion-v3.championinfo"></a>
<a id="tocschampion-v3.championinfo"></a>

```json
{
  "newplayer": [
    0
  ],
  "sr": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newplayer|[integer(int32)]|true|none|none|
|sr|[integer(int32)]|true|none|none|

<h2 id="tocS_champion-v3.array">champion-v3.array</h2>
<!-- backwards compatibility -->
<a id="schemachampion-v3.array"></a>
<a id="schema_champion-v3.array"></a>
<a id="tocSchampion-v3.array"></a>
<a id="tocschampion-v3.array"></a>

```json
{}
```

UNKNOWN TYPE.

<h2 id="tocS_clash-v1.PlayerDto">clash-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemaclash-v1.playerdto"></a>
<a id="schema_clash-v1.PlayerDto"></a>
<a id="tocSclash-v1.playerdto"></a>
<a id="tocsclash-v1.playerdto"></a>

```json
{
  "puuid": "string",
  "teamId": "string",
  "position": "UNSELECTED",
  "role": "CAPTAIN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|teamId|string|false|none|none|
|position|string|true|none|(Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY)|
|role|string|true|none|(Legal values:  CAPTAIN,  MEMBER)|

#### Enumerated Values

|Property|Value|
|---|---|
|position|UNSELECTED|
|position|FILL|
|position|TOP|
|position|JUNGLE|
|position|MIDDLE|
|position|BOTTOM|
|position|UTILITY|
|role|CAPTAIN|
|role|MEMBER|

<h2 id="tocS_clash-v1.TeamDto">clash-v1.TeamDto</h2>
<!-- backwards compatibility -->
<a id="schemaclash-v1.teamdto"></a>
<a id="schema_clash-v1.TeamDto"></a>
<a id="tocSclash-v1.teamdto"></a>
<a id="tocsclash-v1.teamdto"></a>

```json
{
  "id": "string",
  "tournamentId": 0,
  "name": "string",
  "iconId": 0,
  "tier": 0,
  "captain": "string",
  "abbreviation": "string",
  "players": [
    {
      "puuid": "string",
      "teamId": "string",
      "position": "UNSELECTED",
      "role": "CAPTAIN"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|tournamentId|integer(int32)|true|none|none|
|name|string|true|none|none|
|iconId|integer(int32)|true|none|none|
|tier|integer(int32)|true|none|none|
|captain|string|true|none|Summoner ID of the team captain.|
|abbreviation|string|true|none|none|
|players|[[clash-v1.PlayerDto](#schemaclash-v1.playerdto)]|true|none|Team members.|

<h2 id="tocS_clash-v1.TournamentDto">clash-v1.TournamentDto</h2>
<!-- backwards compatibility -->
<a id="schemaclash-v1.tournamentdto"></a>
<a id="schema_clash-v1.TournamentDto"></a>
<a id="tocSclash-v1.tournamentdto"></a>
<a id="tocsclash-v1.tournamentdto"></a>

```json
{
  "id": 0,
  "themeId": 0,
  "nameKey": "string",
  "nameKeySecondary": "string",
  "schedule": [
    {
      "id": 0,
      "registrationTime": 0,
      "startTime": 0,
      "cancelled": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|themeId|integer(int32)|true|none|none|
|nameKey|string|true|none|none|
|nameKeySecondary|string|true|none|none|
|schedule|[[clash-v1.TournamentPhaseDto](#schemaclash-v1.tournamentphasedto)]|true|none|Tournament phase.|

<h2 id="tocS_clash-v1.TournamentPhaseDto">clash-v1.TournamentPhaseDto</h2>
<!-- backwards compatibility -->
<a id="schemaclash-v1.tournamentphasedto"></a>
<a id="schema_clash-v1.TournamentPhaseDto"></a>
<a id="tocSclash-v1.tournamentphasedto"></a>
<a id="tocsclash-v1.tournamentphasedto"></a>

```json
{
  "id": 0,
  "registrationTime": 0,
  "startTime": 0,
  "cancelled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|registrationTime|integer(int64)|true|none|none|
|startTime|integer(int64)|true|none|none|
|cancelled|boolean|true|none|none|

<h2 id="tocS_league-exp-v4.LeagueEntryDTO">league-exp-v4.LeagueEntryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleague-exp-v4.leagueentrydto"></a>
<a id="schema_league-exp-v4.LeagueEntryDTO"></a>
<a id="tocSleague-exp-v4.leagueentrydto"></a>
<a id="tocsleague-exp-v4.leagueentrydto"></a>

```json
{
  "leagueId": "string",
  "summonerId": "string",
  "puuid": "string",
  "queueType": "string",
  "tier": "string",
  "rank": "string",
  "leaguePoints": 0,
  "wins": 0,
  "losses": 0,
  "hotStreak": true,
  "veteran": true,
  "freshBlood": true,
  "inactive": true,
  "miniSeries": {
    "losses": 0,
    "progress": "string",
    "target": 0,
    "wins": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leagueId|string|false|none|none|
|summonerId|string|false|none|Player's summonerId (Encrypted)|
|puuid|string|true|none|Player's encrypted puuid.|
|queueType|string|true|none|none|
|tier|string|true|none|none|
|rank|string|true|none|The player's division within a tier.|
|leaguePoints|integer(int32)|true|none|none|
|wins|integer(int32)|true|none|Winning team on Summoners Rift. First placement in Teamfight Tactics.|
|losses|integer(int32)|true|none|Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.|
|hotStreak|boolean|true|none|none|
|veteran|boolean|true|none|none|
|freshBlood|boolean|true|none|none|
|inactive|boolean|true|none|none|
|miniSeries|[league-exp-v4.MiniSeriesDTO](#schemaleague-exp-v4.miniseriesdto)|false|none|none|

<h2 id="tocS_league-exp-v4.MiniSeriesDTO">league-exp-v4.MiniSeriesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleague-exp-v4.miniseriesdto"></a>
<a id="schema_league-exp-v4.MiniSeriesDTO"></a>
<a id="tocSleague-exp-v4.miniseriesdto"></a>
<a id="tocsleague-exp-v4.miniseriesdto"></a>

```json
{
  "losses": 0,
  "progress": "string",
  "target": 0,
  "wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|losses|integer(int32)|true|none|none|
|progress|string|true|none|none|
|target|integer(int32)|true|none|none|
|wins|integer(int32)|true|none|none|

<h2 id="tocS_league-v4.LeagueListDTO">league-v4.LeagueListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleague-v4.leaguelistdto"></a>
<a id="schema_league-v4.LeagueListDTO"></a>
<a id="tocSleague-v4.leaguelistdto"></a>
<a id="tocsleague-v4.leaguelistdto"></a>

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string",
      "summonerId": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leagueId|string|false|none|none|
|entries|[[league-v4.LeagueItemDTO](#schemaleague-v4.leagueitemdto)]|true|none|none|
|tier|string|true|none|none|
|name|string|false|none|none|
|queue|string|false|none|none|

<h2 id="tocS_league-v4.LeagueItemDTO">league-v4.LeagueItemDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleague-v4.leagueitemdto"></a>
<a id="schema_league-v4.LeagueItemDTO"></a>
<a id="tocSleague-v4.leagueitemdto"></a>
<a id="tocsleague-v4.leagueitemdto"></a>

```json
{
  "freshBlood": true,
  "wins": 0,
  "miniSeries": {
    "losses": 0,
    "progress": "string",
    "target": 0,
    "wins": 0
  },
  "inactive": true,
  "veteran": true,
  "hotStreak": true,
  "rank": "string",
  "leaguePoints": 0,
  "losses": 0,
  "puuid": "string",
  "summonerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freshBlood|boolean|true|none|none|
|wins|integer(int32)|true|none|Winning team on Summoners Rift.|
|miniSeries|[league-v4.MiniSeriesDTO](#schemaleague-v4.miniseriesdto)|false|none|none|
|inactive|boolean|true|none|none|
|veteran|boolean|true|none|none|
|hotStreak|boolean|true|none|none|
|rank|string|true|none|none|
|leaguePoints|integer(int32)|true|none|none|
|losses|integer(int32)|true|none|Losing team on Summoners Rift.|
|puuid|string|true|none|Player's encrypted puuid.|
|summonerId|string|false|none|Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.|

<h2 id="tocS_league-v4.MiniSeriesDTO">league-v4.MiniSeriesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleague-v4.miniseriesdto"></a>
<a id="schema_league-v4.MiniSeriesDTO"></a>
<a id="tocSleague-v4.miniseriesdto"></a>
<a id="tocsleague-v4.miniseriesdto"></a>

```json
{
  "losses": 0,
  "progress": "string",
  "target": 0,
  "wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|losses|integer(int32)|true|none|none|
|progress|string|true|none|none|
|target|integer(int32)|true|none|none|
|wins|integer(int32)|true|none|none|

<h2 id="tocS_league-v4.LeagueEntryDTO">league-v4.LeagueEntryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleague-v4.leagueentrydto"></a>
<a id="schema_league-v4.LeagueEntryDTO"></a>
<a id="tocSleague-v4.leagueentrydto"></a>
<a id="tocsleague-v4.leagueentrydto"></a>

```json
{
  "leagueId": "string",
  "puuid": "string",
  "queueType": "string",
  "tier": "string",
  "rank": "string",
  "leaguePoints": 0,
  "wins": 0,
  "losses": 0,
  "hotStreak": true,
  "veteran": true,
  "freshBlood": true,
  "inactive": true,
  "miniSeries": {
    "losses": 0,
    "progress": "string",
    "target": 0,
    "wins": 0
  },
  "summonerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leagueId|string|false|none|none|
|puuid|string|true|none|Player's encrypted puuid.|
|queueType|string|true|none|none|
|tier|string|false|none|none|
|rank|string|false|none|The player's division within a tier.|
|leaguePoints|integer(int32)|true|none|none|
|wins|integer(int32)|true|none|Winning team on Summoners Rift.|
|losses|integer(int32)|true|none|Losing team on Summoners Rift.|
|hotStreak|boolean|true|none|none|
|veteran|boolean|true|none|none|
|freshBlood|boolean|true|none|none|
|inactive|boolean|true|none|none|
|miniSeries|[league-v4.MiniSeriesDTO](#schemaleague-v4.miniseriesdto)|false|none|none|
|summonerId|string|false|none|Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.|

<h2 id="tocS_lol-challenges-v1.ChallengeConfigInfoDto">lol-challenges-v1.ChallengeConfigInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.challengeconfiginfodto"></a>
<a id="schema_lol-challenges-v1.ChallengeConfigInfoDto"></a>
<a id="tocSlol-challenges-v1.challengeconfiginfodto"></a>
<a id="tocslol-challenges-v1.challengeconfiginfodto"></a>

```json
{
  "id": 0,
  "localizedNames": {
    "property1": {
      "property1": "string",
      "property2": "string"
    },
    "property2": {
      "property1": "string",
      "property2": "string"
    }
  },
  "state": "DISABLED",
  "tracking": "LIFETIME",
  "startTimestamp": 0,
  "endTimestamp": 0,
  "leaderboard": true,
  "thresholds": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|localizedNames|object|true|none|none|
|state|string|true|none|DISABLED - not visible and not calculated, HIDDEN - not visible, but calculated, ENABLED - visible and calculated, ARCHIVED - visible, but not calculated|
|tracking|string|false|none|LIFETIME - stats are incremented without reset, SEASON - stats are accumulated by season and reset at the beginning of new season|
|startTimestamp|integer(int64)|false|none|none|
|endTimestamp|integer(int64)|false|none|none|
|leaderboard|boolean|true|none|none|
|thresholds|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|DISABLED|
|state|HIDDEN|
|state|ENABLED|
|state|ARCHIVED|
|tracking|LIFETIME|
|tracking|SEASON|

<h2 id="tocS_lol-challenges-v1.State">lol-challenges-v1.State</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.state"></a>
<a id="schema_lol-challenges-v1.State"></a>
<a id="tocSlol-challenges-v1.state"></a>
<a id="tocslol-challenges-v1.state"></a>

```json
{}
```

DISABLED - not visible and not calculated,
HIDDEN - not visible, but calculated,
ENABLED - visible and calculated,
ARCHIVED - visible, but not calculated

<h2 id="tocS_lol-challenges-v1.Tracking">lol-challenges-v1.Tracking</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.tracking"></a>
<a id="schema_lol-challenges-v1.Tracking"></a>
<a id="tocSlol-challenges-v1.tracking"></a>
<a id="tocslol-challenges-v1.tracking"></a>

```json
{}
```

LIFETIME - stats are incremented without reset,
SEASON - stats are accumulated by season and reset at the beginning of new season

<h2 id="tocS_lol-challenges-v1.ApexPlayerInfoDto">lol-challenges-v1.ApexPlayerInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.apexplayerinfodto"></a>
<a id="schema_lol-challenges-v1.ApexPlayerInfoDto"></a>
<a id="tocSlol-challenges-v1.apexplayerinfodto"></a>
<a id="tocslol-challenges-v1.apexplayerinfodto"></a>

```json
{
  "puuid": "string",
  "value": 0,
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|value|number(double)|true|none|none|
|position|integer(int32)|true|none|none|

<h2 id="tocS_lol-challenges-v1.Level">lol-challenges-v1.Level</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.level"></a>
<a id="schema_lol-challenges-v1.Level"></a>
<a id="tocSlol-challenges-v1.level"></a>
<a id="tocslol-challenges-v1.level"></a>

```json
{}
```

0 NONE,
1 IRON,
2 BRONZE,
3 SILVER,
4 GOLD,
5 PLATINUM,
6 DIAMOND,
7 MASTER,
8 GRANDMASTER,
9 CHALLENGER

<h2 id="tocS_lol-challenges-v1.PlayerInfoDto">lol-challenges-v1.PlayerInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.playerinfodto"></a>
<a id="schema_lol-challenges-v1.PlayerInfoDto"></a>
<a id="tocSlol-challenges-v1.playerinfodto"></a>
<a id="tocslol-challenges-v1.playerinfodto"></a>

```json
{
  "challenges": [
    {
      "percentile": 0,
      "playersInLevel": 0,
      "achievedTime": 0,
      "value": 0,
      "challengeId": 0,
      "level": "NONE",
      "position": 0
    }
  ],
  "preferences": {
    "bannerAccent": "string",
    "title": "string",
    "challengeIds": [
      0
    ],
    "crestBorder": "string",
    "prestigeCrestBorderLevel": 0
  },
  "totalPoints": {
    "level": "string",
    "current": 0,
    "max": 0,
    "percentile": 0,
    "position": 0
  },
  "categoryPoints": {
    "property1": {
      "level": "string",
      "current": 0,
      "max": 0,
      "percentile": 0,
      "position": 0
    },
    "property2": {
      "level": "string",
      "current": 0,
      "max": 0,
      "percentile": 0,
      "position": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenges|[[lol-challenges-v1.ChallengeInfoDto](#schemalol-challenges-v1.challengeinfodto)]|true|none|none|
|preferences|[lol-challenges-v1.PlayerClientPreferencesDto](#schemalol-challenges-v1.playerclientpreferencesdto)|true|none|none|
|totalPoints|[lol-challenges-v1.ChallengePointDto](#schemalol-challenges-v1.challengepointdto)|true|none|none|
|categoryPoints|object|true|none|none|

<h2 id="tocS_lol-challenges-v1.ChallengeInfoDto">lol-challenges-v1.ChallengeInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.challengeinfodto"></a>
<a id="schema_lol-challenges-v1.ChallengeInfoDto"></a>
<a id="tocSlol-challenges-v1.challengeinfodto"></a>
<a id="tocslol-challenges-v1.challengeinfodto"></a>

```json
{
  "percentile": 0,
  "playersInLevel": 0,
  "achievedTime": 0,
  "value": 0,
  "challengeId": 0,
  "level": "NONE",
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentile|number(double)|true|none|none|
|playersInLevel|integer(int32)|false|none|none|
|achievedTime|integer(int64)|false|none|none|
|value|number(double)|true|none|none|
|challengeId|integer(int64)|true|none|none|
|level|string|true|none|(Legal values:  NONE,  IRON,  BRONZE,  SILVER,  GOLD,  PLATINUM,  DIAMOND,  MASTER,  GRANDMASTER,  CHALLENGER,  HIGHEST_NOT_LEADERBOARD_ONLY,  HIGHEST,  LOWEST)|
|position|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|NONE|
|level|IRON|
|level|BRONZE|
|level|SILVER|
|level|GOLD|
|level|PLATINUM|
|level|DIAMOND|
|level|MASTER|
|level|GRANDMASTER|
|level|CHALLENGER|
|level|HIGHEST_NOT_LEADERBOARD_ONLY|
|level|HIGHEST|
|level|LOWEST|

<h2 id="tocS_lol-challenges-v1.PlayerClientPreferencesDto">lol-challenges-v1.PlayerClientPreferencesDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.playerclientpreferencesdto"></a>
<a id="schema_lol-challenges-v1.PlayerClientPreferencesDto"></a>
<a id="tocSlol-challenges-v1.playerclientpreferencesdto"></a>
<a id="tocslol-challenges-v1.playerclientpreferencesdto"></a>

```json
{
  "bannerAccent": "string",
  "title": "string",
  "challengeIds": [
    0
  ],
  "crestBorder": "string",
  "prestigeCrestBorderLevel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bannerAccent|string|false|none|none|
|title|string|false|none|none|
|challengeIds|[integer(int64)]|false|none|none|
|crestBorder|string|false|none|none|
|prestigeCrestBorderLevel|integer(int32)|false|none|none|

<h2 id="tocS_lol-challenges-v1.ChallengePointDto">lol-challenges-v1.ChallengePointDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-challenges-v1.challengepointdto"></a>
<a id="schema_lol-challenges-v1.ChallengePointDto"></a>
<a id="tocSlol-challenges-v1.challengepointdto"></a>
<a id="tocslol-challenges-v1.challengepointdto"></a>

```json
{
  "level": "string",
  "current": 0,
  "max": 0,
  "percentile": 0,
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string|true|none|none|
|current|integer(int64)|true|none|none|
|max|integer(int64)|true|none|none|
|percentile|number(double)|false|none|none|
|position|integer(int64)|false|none|none|

<h2 id="tocS_lol-rso-match-v1.MatchDto">lol-rso-match-v1.MatchDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-rso-match-v1.matchdto"></a>
<a id="schema_lol-rso-match-v1.MatchDto"></a>
<a id="tocSlol-rso-match-v1.matchdto"></a>
<a id="tocslol-rso-match-v1.matchdto"></a>

```json
{}
```

UNKNOWN TYPE.

<h2 id="tocS_lol-rso-match-v1.TimelineDto">lol-rso-match-v1.TimelineDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-rso-match-v1.timelinedto"></a>
<a id="schema_lol-rso-match-v1.TimelineDto"></a>
<a id="tocSlol-rso-match-v1.timelinedto"></a>
<a id="tocslol-rso-match-v1.timelinedto"></a>

```json
{}
```

UNKNOWN TYPE.

<h2 id="tocS_lol-status-v4.PlatformDataDto">lol-status-v4.PlatformDataDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-status-v4.platformdatadto"></a>
<a id="schema_lol-status-v4.PlatformDataDto"></a>
<a id="tocSlol-status-v4.platformdatadto"></a>
<a id="tocslol-status-v4.platformdatadto"></a>

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|locales|[string]|true|none|none|
|maintenances|[[lol-status-v4.StatusDto](#schemalol-status-v4.statusdto)]|true|none|none|
|incidents|[[lol-status-v4.StatusDto](#schemalol-status-v4.statusdto)]|true|none|none|

<h2 id="tocS_lol-status-v4.StatusDto">lol-status-v4.StatusDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-status-v4.statusdto"></a>
<a id="schema_lol-status-v4.StatusDto"></a>
<a id="tocSlol-status-v4.statusdto"></a>
<a id="tocslol-status-v4.statusdto"></a>

```json
{
  "id": 0,
  "maintenance_status": "scheduled",
  "incident_severity": "info",
  "titles": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "updates": [
    {
      "id": 0,
      "author": "string",
      "publish": true,
      "publish_locations": [
        "riotclient"
      ],
      "translations": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "archive_at": "string",
  "updated_at": "string",
  "platforms": [
    "windows"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|maintenance_status|string|false|none|(Legal values:  scheduled,  in_progress,  complete)|
|incident_severity|string|false|none|(Legal values:  info,  warning,  critical)|
|titles|[[lol-status-v4.ContentDto](#schemalol-status-v4.contentdto)]|true|none|none|
|updates|[[lol-status-v4.UpdateDto](#schemalol-status-v4.updatedto)]|true|none|none|
|created_at|string|true|none|none|
|archive_at|string|false|none|none|
|updated_at|string|false|none|none|
|platforms|[string]|true|none|(Legal values: windows, macos, android, ios, ps4, xbone, switch)|

#### Enumerated Values

|Property|Value|
|---|---|
|maintenance_status|scheduled|
|maintenance_status|in_progress|
|maintenance_status|complete|
|incident_severity|info|
|incident_severity|warning|
|incident_severity|critical|
|platforms|windows|
|platforms|macos|
|platforms|android|
|platforms|ios|
|platforms|ps4|
|platforms|xbone|
|platforms|switch|

<h2 id="tocS_lol-status-v4.ContentDto">lol-status-v4.ContentDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-status-v4.contentdto"></a>
<a id="schema_lol-status-v4.ContentDto"></a>
<a id="tocSlol-status-v4.contentdto"></a>
<a id="tocslol-status-v4.contentdto"></a>

```json
{
  "locale": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_lol-status-v4.UpdateDto">lol-status-v4.UpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemalol-status-v4.updatedto"></a>
<a id="schema_lol-status-v4.UpdateDto"></a>
<a id="tocSlol-status-v4.updatedto"></a>
<a id="tocslol-status-v4.updatedto"></a>

```json
{
  "id": 0,
  "author": "string",
  "publish": true,
  "publish_locations": [
    "riotclient"
  ],
  "translations": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|author|string|true|none|none|
|publish|boolean|true|none|none|
|publish_locations|[string]|true|none|(Legal values: riotclient, riotstatus, game)|
|translations|[[lol-status-v4.ContentDto](#schemalol-status-v4.contentdto)]|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|publish_locations|riotclient|
|publish_locations|riotstatus|
|publish_locations|game|

<h2 id="tocS_lor-deck-v1.DeckDto">lor-deck-v1.DeckDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-deck-v1.deckdto"></a>
<a id="schema_lor-deck-v1.DeckDto"></a>
<a id="tocSlor-deck-v1.deckdto"></a>
<a id="tocslor-deck-v1.deckdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|code|string|true|none|none|

<h2 id="tocS_lor-deck-v1.NewDeckDto">lor-deck-v1.NewDeckDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-deck-v1.newdeckdto"></a>
<a id="schema_lor-deck-v1.NewDeckDto"></a>
<a id="tocSlor-deck-v1.newdeckdto"></a>
<a id="tocslor-deck-v1.newdeckdto"></a>

```json
{
  "name": "string",
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|code|string|true|none|none|

<h2 id="tocS_lor-inventory-v1.CardDto">lor-inventory-v1.CardDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-inventory-v1.carddto"></a>
<a id="schema_lor-inventory-v1.CardDto"></a>
<a id="tocSlor-inventory-v1.carddto"></a>
<a id="tocslor-inventory-v1.carddto"></a>

```json
{
  "code": "string",
  "count": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|count|string|true|none|none|

<h2 id="tocS_lor-match-v1.MatchDto">lor-match-v1.MatchDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-match-v1.matchdto"></a>
<a id="schema_lor-match-v1.MatchDto"></a>
<a id="tocSlor-match-v1.matchdto"></a>
<a id="tocslor-match-v1.matchdto"></a>

```json
{
  "metadata": {
    "data_version": "string",
    "match_id": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "game_mode": "Constructed",
    "game_type": "Ranked",
    "game_start_time_utc": "string",
    "game_version": "string",
    "game_format": "standard",
    "players": [
      {
        "puuid": "string",
        "deck_id": "string",
        "deck_code": "string",
        "factions": [
          "string"
        ],
        "game_outcome": "string",
        "order_of_play": 0
      }
    ],
    "total_turn_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[lor-match-v1.MetadataDto](#schemalor-match-v1.metadatadto)|true|none|Match metadata.|
|info|[lor-match-v1.InfoDto](#schemalor-match-v1.infodto)|true|none|Match info.|

<h2 id="tocS_lor-match-v1.MetadataDto">lor-match-v1.MetadataDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-match-v1.metadatadto"></a>
<a id="schema_lor-match-v1.MetadataDto"></a>
<a id="tocSlor-match-v1.metadatadto"></a>
<a id="tocslor-match-v1.metadatadto"></a>

```json
{
  "data_version": "string",
  "match_id": "string",
  "participants": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_version|string|true|none|Match data version.|
|match_id|string|true|none|Match id.|
|participants|[string]|true|none|A list of participant PUUIDs.|

<h2 id="tocS_lor-match-v1.InfoDto">lor-match-v1.InfoDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-match-v1.infodto"></a>
<a id="schema_lor-match-v1.InfoDto"></a>
<a id="tocSlor-match-v1.infodto"></a>
<a id="tocslor-match-v1.infodto"></a>

```json
{
  "game_mode": "Constructed",
  "game_type": "Ranked",
  "game_start_time_utc": "string",
  "game_version": "string",
  "game_format": "standard",
  "players": [
    {
      "puuid": "string",
      "deck_id": "string",
      "deck_code": "string",
      "factions": [
        "string"
      ],
      "game_outcome": "string",
      "order_of_play": 0
    }
  ],
  "total_turn_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game_mode|string|true|none|(Legal values:  Constructed,  Expeditions,  Tutorial)|
|game_type|string|true|none|(Legal values:  Ranked,  Normal,  AI,  Tutorial,  VanillaTrial,  Singleton,  StandardGauntlet)|
|game_start_time_utc|string|true|none|none|
|game_version|string|true|none|none|
|game_format|string|true|none|(Legal values:  standard,  eternal)|
|players|[[lor-match-v1.PlayerDto](#schemalor-match-v1.playerdto)]|true|none|none|
|total_turn_count|integer(int32)|true|none|Total turns taken by both players.|

#### Enumerated Values

|Property|Value|
|---|---|
|game_mode|Constructed|
|game_mode|Expeditions|
|game_mode|Tutorial|
|game_type|Ranked|
|game_type|Normal|
|game_type|AI|
|game_type|Tutorial|
|game_type|VanillaTrial|
|game_type|Singleton|
|game_type|StandardGauntlet|
|game_format|standard|
|game_format|eternal|

<h2 id="tocS_lor-match-v1.PlayerDto">lor-match-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-match-v1.playerdto"></a>
<a id="schema_lor-match-v1.PlayerDto"></a>
<a id="tocSlor-match-v1.playerdto"></a>
<a id="tocslor-match-v1.playerdto"></a>

```json
{
  "puuid": "string",
  "deck_id": "string",
  "deck_code": "string",
  "factions": [
    "string"
  ],
  "game_outcome": "string",
  "order_of_play": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|deck_id|string|true|none|none|
|deck_code|string|true|none|Code for the deck played. Refer to LOR documentation for details on deck codes.|
|factions|[string]|true|none|none|
|game_outcome|string|true|none|none|
|order_of_play|integer(int32)|true|none|The order in which the players took turns.|

<h2 id="tocS_lor-ranked-v1.LeaderboardDto">lor-ranked-v1.LeaderboardDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-ranked-v1.leaderboarddto"></a>
<a id="schema_lor-ranked-v1.LeaderboardDto"></a>
<a id="tocSlor-ranked-v1.leaderboarddto"></a>
<a id="tocslor-ranked-v1.leaderboarddto"></a>

```json
{
  "players": [
    {
      "name": "string",
      "rank": 0,
      "lp": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|players|[[lor-ranked-v1.PlayerDto](#schemalor-ranked-v1.playerdto)]|true|none|A list of players in Master tier.|

<h2 id="tocS_lor-ranked-v1.PlayerDto">lor-ranked-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-ranked-v1.playerdto"></a>
<a id="schema_lor-ranked-v1.PlayerDto"></a>
<a id="tocSlor-ranked-v1.playerdto"></a>
<a id="tocslor-ranked-v1.playerdto"></a>

```json
{
  "name": "string",
  "rank": 0,
  "lp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|rank|integer(int32)|true|none|none|
|lp|integer(int32)|true|none|League points.|

<h2 id="tocS_lor-status-v1.PlatformDataDto">lor-status-v1.PlatformDataDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-status-v1.platformdatadto"></a>
<a id="schema_lor-status-v1.PlatformDataDto"></a>
<a id="tocSlor-status-v1.platformdatadto"></a>
<a id="tocslor-status-v1.platformdatadto"></a>

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|locales|[string]|true|none|none|
|maintenances|[[lor-status-v1.StatusDto](#schemalor-status-v1.statusdto)]|true|none|none|
|incidents|[[lor-status-v1.StatusDto](#schemalor-status-v1.statusdto)]|true|none|none|

<h2 id="tocS_lor-status-v1.StatusDto">lor-status-v1.StatusDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-status-v1.statusdto"></a>
<a id="schema_lor-status-v1.StatusDto"></a>
<a id="tocSlor-status-v1.statusdto"></a>
<a id="tocslor-status-v1.statusdto"></a>

```json
{
  "id": 0,
  "maintenance_status": "scheduled",
  "incident_severity": "info",
  "titles": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "updates": [
    {
      "id": 0,
      "author": "string",
      "publish": true,
      "publish_locations": [
        "riotclient"
      ],
      "translations": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "archive_at": "string",
  "updated_at": "string",
  "platforms": [
    "windows"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|maintenance_status|string|true|none|(Legal values:  scheduled,  in_progress,  complete)|
|incident_severity|string|true|none|(Legal values:  info,  warning,  critical)|
|titles|[[lor-status-v1.ContentDto](#schemalor-status-v1.contentdto)]|true|none|none|
|updates|[[lor-status-v1.UpdateDto](#schemalor-status-v1.updatedto)]|true|none|none|
|created_at|string|true|none|none|
|archive_at|string|true|none|none|
|updated_at|string|true|none|none|
|platforms|[string]|true|none|(Legal values: windows, macos, android, ios, ps4, xbone, switch)|

#### Enumerated Values

|Property|Value|
|---|---|
|maintenance_status|scheduled|
|maintenance_status|in_progress|
|maintenance_status|complete|
|incident_severity|info|
|incident_severity|warning|
|incident_severity|critical|
|platforms|windows|
|platforms|macos|
|platforms|android|
|platforms|ios|
|platforms|ps4|
|platforms|xbone|
|platforms|switch|

<h2 id="tocS_lor-status-v1.ContentDto">lor-status-v1.ContentDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-status-v1.contentdto"></a>
<a id="schema_lor-status-v1.ContentDto"></a>
<a id="tocSlor-status-v1.contentdto"></a>
<a id="tocslor-status-v1.contentdto"></a>

```json
{
  "locale": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_lor-status-v1.UpdateDto">lor-status-v1.UpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemalor-status-v1.updatedto"></a>
<a id="schema_lor-status-v1.UpdateDto"></a>
<a id="tocSlor-status-v1.updatedto"></a>
<a id="tocslor-status-v1.updatedto"></a>

```json
{
  "id": 0,
  "author": "string",
  "publish": true,
  "publish_locations": [
    "riotclient"
  ],
  "translations": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|author|string|true|none|none|
|publish|boolean|true|none|none|
|publish_locations|[string]|true|none|(Legal values: riotclient, riotstatus, game)|
|translations|[[lor-status-v1.ContentDto](#schemalor-status-v1.contentdto)]|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|publish_locations|riotclient|
|publish_locations|riotstatus|
|publish_locations|game|

<h2 id="tocS_match-v5.ReplayDTO">match-v5.ReplayDTO</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.replaydto"></a>
<a id="schema_match-v5.ReplayDTO"></a>
<a id="tocSmatch-v5.replaydto"></a>
<a id="tocsmatch-v5.replaydto"></a>

```json
{
  "total": 0,
  "matchFileURLs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total of replay files|
|matchFileURLs|[string]|true|none|none|

<h2 id="tocS_match-v5.MatchDto">match-v5.MatchDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.matchdto"></a>
<a id="schema_match-v5.MatchDto"></a>
<a id="tocSmatch-v5.matchdto"></a>
<a id="tocsmatch-v5.matchdto"></a>

```json
{
  "metadata": {
    "dataVersion": "string",
    "matchId": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "gameCreation": 0,
    "gameDuration": 0,
    "gameEndTimestamp": 0,
    "gameId": 0,
    "gameMode": "string",
    "gameName": "string",
    "gameStartTimestamp": 0,
    "gameType": "string",
    "gameVersion": "string",
    "mapId": 0,
    "participants": [
      {
        "allInPings": 0,
        "assistMePings": 0,
        "assists": 0,
        "baronKills": 0,
        "bountyLevel": 0,
        "champExperience": 0,
        "champLevel": 0,
        "championId": 0,
        "championName": "string",
        "commandPings": 0,
        "championTransform": 0,
        "consumablesPurchased": 0,
        "challenges": {
          "12AssistStreakCount": 0,
          "baronBuffGoldAdvantageOverThreshold": 0,
          "controlWardTimeCoverageInRiverOrEnemyHalf": 0,
          "earliestBaron": 0,
          "earliestDragonTakedown": 0,
          "earliestElderDragon": 0,
          "earlyLaningPhaseGoldExpAdvantage": 0,
          "fasterSupportQuestCompletion": 0,
          "fastestLegendary": 0,
          "hadAfkTeammate": 0,
          "highestChampionDamage": 0,
          "highestCrowdControlScore": 0,
          "highestWardKills": 0,
          "junglerKillsEarlyJungle": 0,
          "killsOnLanersEarlyJungleAsJungler": 0,
          "laningPhaseGoldExpAdvantage": 0,
          "legendaryCount": 0,
          "maxCsAdvantageOnLaneOpponent": 0,
          "maxLevelLeadLaneOpponent": 0,
          "mostWardsDestroyedOneSweeper": 0,
          "mythicItemUsed": 0,
          "playedChampSelectPosition": 0,
          "soloTurretsLategame": 0,
          "takedownsFirst25Minutes": 0,
          "teleportTakedowns": 0,
          "thirdInhibitorDestroyedTime": 0,
          "threeWardsOneSweeperCount": 0,
          "visionScoreAdvantageLaneOpponent": 0,
          "InfernalScalePickup": 0,
          "fistBumpParticipation": 0,
          "voidMonsterKill": 0,
          "abilityUses": 0,
          "acesBefore15Minutes": 0,
          "alliedJungleMonsterKills": 0,
          "baronTakedowns": 0,
          "blastConeOppositeOpponentCount": 0,
          "bountyGold": 0,
          "buffsStolen": 0,
          "completeSupportQuestInTime": 0,
          "controlWardsPlaced": 0,
          "damagePerMinute": 0,
          "damageTakenOnTeamPercentage": 0,
          "dancedWithRiftHerald": 0,
          "deathsByEnemyChamps": 0,
          "dodgeSkillShotsSmallWindow": 0,
          "doubleAces": 0,
          "dragonTakedowns": 0,
          "legendaryItemUsed": [
            0
          ],
          "effectiveHealAndShielding": 0,
          "elderDragonKillsWithOpposingSoul": 0,
          "elderDragonMultikills": 0,
          "enemyChampionImmobilizations": 0,
          "enemyJungleMonsterKills": 0,
          "epicMonsterKillsNearEnemyJungler": 0,
          "epicMonsterKillsWithin30SecondsOfSpawn": 0,
          "epicMonsterSteals": 0,
          "epicMonsterStolenWithoutSmite": 0,
          "firstTurretKilled": 0,
          "firstTurretKilledTime": 0,
          "flawlessAces": 0,
          "fullTeamTakedown": 0,
          "gameLength": 0,
          "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
          "goldPerMinute": 0,
          "hadOpenNexus": 0,
          "immobilizeAndKillWithAlly": 0,
          "initialBuffCount": 0,
          "initialCrabCount": 0,
          "jungleCsBefore10Minutes": 0,
          "junglerTakedownsNearDamagedEpicMonster": 0,
          "kda": 0,
          "killAfterHiddenWithAlly": 0,
          "killedChampTookFullTeamDamageSurvived": 0,
          "killingSprees": 0,
          "killParticipation": 0,
          "killsNearEnemyTurret": 0,
          "killsOnOtherLanesEarlyJungleAsLaner": 0,
          "killsOnRecentlyHealedByAramPack": 0,
          "killsUnderOwnTurret": 0,
          "killsWithHelpFromEpicMonster": 0,
          "knockEnemyIntoTeamAndKill": 0,
          "kTurretsDestroyedBeforePlatesFall": 0,
          "landSkillShotsEarlyGame": 0,
          "laneMinionsFirst10Minutes": 0,
          "lostAnInhibitor": 0,
          "maxKillDeficit": 0,
          "mejaisFullStackInTime": 0,
          "moreEnemyJungleThanOpponent": 0,
          "multiKillOneSpell": 0,
          "multikills": 0,
          "multikillsAfterAggressiveFlash": 0,
          "multiTurretRiftHeraldCount": 0,
          "outerTurretExecutesBefore10Minutes": 0,
          "outnumberedKills": 0,
          "outnumberedNexusKill": 0,
          "perfectDragonSoulsTaken": 0,
          "perfectGame": 0,
          "pickKillWithAlly": 0,
          "poroExplosions": 0,
          "quickCleanse": 0,
          "quickFirstTurret": 0,
          "quickSoloKills": 0,
          "riftHeraldTakedowns": 0,
          "saveAllyFromDeath": 0,
          "scuttleCrabKills": 0,
          "shortestTimeToAceFromFirstTakedown": 0,
          "skillshotsDodged": 0,
          "skillshotsHit": 0,
          "snowballsHit": 0,
          "soloBaronKills": 0,
          "SWARM_DefeatAatrox": 0,
          "SWARM_DefeatBriar": 0,
          "SWARM_DefeatMiniBosses": 0,
          "SWARM_EvolveWeapon": 0,
          "SWARM_Have3Passives": 0,
          "SWARM_KillEnemy": 0,
          "SWARM_PickupGold": 0,
          "SWARM_ReachLevel50": 0,
          "SWARM_Survive15Min": 0,
          "SWARM_WinWith5EvolvedWeapons": 0,
          "soloKills": 0,
          "stealthWardsPlaced": 0,
          "survivedSingleDigitHpCount": 0,
          "survivedThreeImmobilizesInFight": 0,
          "takedownOnFirstTurret": 0,
          "takedowns": 0,
          "takedownsAfterGainingLevelAdvantage": 0,
          "takedownsBeforeJungleMinionSpawn": 0,
          "takedownsFirstXMinutes": 0,
          "takedownsInAlcove": 0,
          "takedownsInEnemyFountain": 0,
          "teamBaronKills": 0,
          "teamDamagePercentage": 0,
          "teamElderDragonKills": 0,
          "teamRiftHeraldKills": 0,
          "tookLargeDamageSurvived": 0,
          "turretPlatesTaken": 0,
          "turretsTakenWithRiftHerald": 0,
          "turretTakedowns": 0,
          "twentyMinionsIn3SecondsCount": 0,
          "twoWardsOneSweeperCount": 0,
          "unseenRecalls": 0,
          "visionScorePerMinute": 0,
          "wardsGuarded": 0,
          "wardTakedowns": 0,
          "wardTakedownsBefore20M": 0,
          "HealFromMapSources": 0
        },
        "damageDealtToBuildings": 0,
        "damageDealtToObjectives": 0,
        "damageDealtToTurrets": 0,
        "damageSelfMitigated": 0,
        "deaths": 0,
        "detectorWardsPlaced": 0,
        "doubleKills": 0,
        "dragonKills": 0,
        "eligibleForProgression": true,
        "enemyMissingPings": 0,
        "enemyVisionPings": 0,
        "firstBloodAssist": true,
        "firstBloodKill": true,
        "firstTowerAssist": true,
        "firstTowerKill": true,
        "gameEndedInEarlySurrender": true,
        "gameEndedInSurrender": true,
        "holdPings": 0,
        "getBackPings": 0,
        "goldEarned": 0,
        "goldSpent": 0,
        "individualPosition": "string",
        "inhibitorKills": 0,
        "inhibitorTakedowns": 0,
        "inhibitorsLost": 0,
        "item0": 0,
        "item1": 0,
        "item2": 0,
        "item3": 0,
        "item4": 0,
        "item5": 0,
        "item6": 0,
        "itemsPurchased": 0,
        "killingSprees": 0,
        "kills": 0,
        "lane": "string",
        "largestCriticalStrike": 0,
        "largestKillingSpree": 0,
        "largestMultiKill": 0,
        "longestTimeSpentLiving": 0,
        "magicDamageDealt": 0,
        "magicDamageDealtToChampions": 0,
        "magicDamageTaken": 0,
        "missions": {
          "playerScore0": 0,
          "playerScore1": 0,
          "playerScore2": 0,
          "playerScore3": 0,
          "playerScore4": 0,
          "playerScore5": 0,
          "playerScore6": 0,
          "playerScore7": 0,
          "playerScore8": 0,
          "playerScore9": 0,
          "playerScore10": 0,
          "playerScore11": 0
        },
        "neutralMinionsKilled": 0,
        "needVisionPings": 0,
        "nexusKills": 0,
        "nexusTakedowns": 0,
        "nexusLost": 0,
        "objectivesStolen": 0,
        "objectivesStolenAssists": 0,
        "onMyWayPings": 0,
        "participantId": 0,
        "playerScore0": 0,
        "playerScore1": 0,
        "playerScore2": 0,
        "playerScore3": 0,
        "playerScore4": 0,
        "playerScore5": 0,
        "playerScore6": 0,
        "playerScore7": 0,
        "playerScore8": 0,
        "playerScore9": 0,
        "playerScore10": 0,
        "playerScore11": 0,
        "pentaKills": 0,
        "perks": {
          "statPerks": {
            "defense": 0,
            "flex": 0,
            "offense": 0
          },
          "styles": [
            {
              "description": "string",
              "selections": [
                {
                  "perk": 0,
                  "var1": 0,
                  "var2": 0,
                  "var3": 0
                }
              ],
              "style": 0
            }
          ]
        },
        "physicalDamageDealt": 0,
        "physicalDamageDealtToChampions": 0,
        "physicalDamageTaken": 0,
        "placement": 0,
        "playerAugment1": 0,
        "playerAugment2": 0,
        "playerAugment3": 0,
        "playerAugment4": 0,
        "playerSubteamId": 0,
        "pushPings": 0,
        "profileIcon": 0,
        "puuid": "string",
        "quadraKills": 0,
        "riotIdGameName": "string",
        "riotIdTagline": "string",
        "role": "string",
        "sightWardsBoughtInGame": 0,
        "spell1Casts": 0,
        "spell2Casts": 0,
        "spell3Casts": 0,
        "spell4Casts": 0,
        "subteamPlacement": 0,
        "summoner1Casts": 0,
        "summoner1Id": 0,
        "summoner2Casts": 0,
        "summoner2Id": 0,
        "summonerId": "string",
        "summonerLevel": 0,
        "summonerName": "string",
        "teamEarlySurrendered": true,
        "teamId": 0,
        "teamPosition": "string",
        "timeCCingOthers": 0,
        "timePlayed": 0,
        "totalAllyJungleMinionsKilled": 0,
        "totalDamageDealt": 0,
        "totalDamageDealtToChampions": 0,
        "totalDamageShieldedOnTeammates": 0,
        "totalDamageTaken": 0,
        "totalEnemyJungleMinionsKilled": 0,
        "totalHeal": 0,
        "totalHealsOnTeammates": 0,
        "totalMinionsKilled": 0,
        "totalTimeCCDealt": 0,
        "totalTimeSpentDead": 0,
        "totalUnitsHealed": 0,
        "tripleKills": 0,
        "trueDamageDealt": 0,
        "trueDamageDealtToChampions": 0,
        "trueDamageTaken": 0,
        "turretKills": 0,
        "turretTakedowns": 0,
        "turretsLost": 0,
        "unrealKills": 0,
        "visionScore": 0,
        "visionClearedPings": 0,
        "visionWardsBoughtInGame": 0,
        "wardsKilled": 0,
        "wardsPlaced": 0,
        "win": true,
        "baitPings": 0,
        "dangerPings": 0,
        "basicPings": 0,
        "playerAugment5": 0,
        "playerAugment6": 0,
        "riotIdName": "string",
        "retreatPings": 0,
        "championSkinId": 0,
        "damageDealtToEpicMonsters": 0,
        "roleBoundItem": 0,
        "PlayerBehavior": {
          "PlayerBehavior_IsHeroInCombat": 0
        },
        "causedGameEndFromIGNBSurrender": true,
        "gameEndedInIGNBSurrender": true,
        "positionAssignedByMatchmaking": "string",
        "selectedRolePreferences": "string",
        "teamIGNBSurrendered": true,
        "wasPremadeWithIGNBGameEndCauser": true,
        "wasPremadeWithSevereTransgressor": true,
        "wasSevereTransgressor": true
      }
    ],
    "platformId": "string",
    "queueId": 0,
    "teams": [
      {
        "bans": [
          {
            "championId": 0,
            "pickTurn": 0
          }
        ],
        "objectives": {
          "baron": {
            "first": true,
            "kills": 0
          },
          "champion": {
            "first": true,
            "kills": 0
          },
          "dragon": {
            "first": true,
            "kills": 0
          },
          "horde": {
            "first": true,
            "kills": 0
          },
          "inhibitor": {
            "first": true,
            "kills": 0
          },
          "riftHerald": {
            "first": true,
            "kills": 0
          },
          "tower": {
            "first": true,
            "kills": 0
          },
          "atakhan": {
            "first": true,
            "kills": 0
          }
        },
        "teamId": 0,
        "win": true,
        "feats": {
          "EPIC_MONSTER_KILL": {
            "featState": 0
          },
          "FIRST_BLOOD": {
            "featState": 0
          },
          "FIRST_TURRET": {
            "featState": 0
          }
        }
      }
    ],
    "tournamentCode": "string",
    "gameModeMutators": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[match-v5.MetadataDto](#schemamatch-v5.metadatadto)|true|none|Match metadata.|
|info|[match-v5.InfoDto](#schemamatch-v5.infodto)|true|none|Match info.|

<h2 id="tocS_match-v5.MetadataDto">match-v5.MetadataDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.metadatadto"></a>
<a id="schema_match-v5.MetadataDto"></a>
<a id="tocSmatch-v5.metadatadto"></a>
<a id="tocsmatch-v5.metadatadto"></a>

```json
{
  "dataVersion": "string",
  "matchId": "string",
  "participants": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataVersion|string|true|none|Match data version.|
|matchId|string|true|none|Match id.|
|participants|[string]|true|none|A list of participant PUUIDs.|

<h2 id="tocS_match-v5.InfoDto">match-v5.InfoDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.infodto"></a>
<a id="schema_match-v5.InfoDto"></a>
<a id="tocSmatch-v5.infodto"></a>
<a id="tocsmatch-v5.infodto"></a>

```json
{
  "endOfGameResult": "string",
  "gameCreation": 0,
  "gameDuration": 0,
  "gameEndTimestamp": 0,
  "gameId": 0,
  "gameMode": "string",
  "gameName": "string",
  "gameStartTimestamp": 0,
  "gameType": "string",
  "gameVersion": "string",
  "mapId": 0,
  "participants": [
    {
      "allInPings": 0,
      "assistMePings": 0,
      "assists": 0,
      "baronKills": 0,
      "bountyLevel": 0,
      "champExperience": 0,
      "champLevel": 0,
      "championId": 0,
      "championName": "string",
      "commandPings": 0,
      "championTransform": 0,
      "consumablesPurchased": 0,
      "challenges": {
        "12AssistStreakCount": 0,
        "baronBuffGoldAdvantageOverThreshold": 0,
        "controlWardTimeCoverageInRiverOrEnemyHalf": 0,
        "earliestBaron": 0,
        "earliestDragonTakedown": 0,
        "earliestElderDragon": 0,
        "earlyLaningPhaseGoldExpAdvantage": 0,
        "fasterSupportQuestCompletion": 0,
        "fastestLegendary": 0,
        "hadAfkTeammate": 0,
        "highestChampionDamage": 0,
        "highestCrowdControlScore": 0,
        "highestWardKills": 0,
        "junglerKillsEarlyJungle": 0,
        "killsOnLanersEarlyJungleAsJungler": 0,
        "laningPhaseGoldExpAdvantage": 0,
        "legendaryCount": 0,
        "maxCsAdvantageOnLaneOpponent": 0,
        "maxLevelLeadLaneOpponent": 0,
        "mostWardsDestroyedOneSweeper": 0,
        "mythicItemUsed": 0,
        "playedChampSelectPosition": 0,
        "soloTurretsLategame": 0,
        "takedownsFirst25Minutes": 0,
        "teleportTakedowns": 0,
        "thirdInhibitorDestroyedTime": 0,
        "threeWardsOneSweeperCount": 0,
        "visionScoreAdvantageLaneOpponent": 0,
        "InfernalScalePickup": 0,
        "fistBumpParticipation": 0,
        "voidMonsterKill": 0,
        "abilityUses": 0,
        "acesBefore15Minutes": 0,
        "alliedJungleMonsterKills": 0,
        "baronTakedowns": 0,
        "blastConeOppositeOpponentCount": 0,
        "bountyGold": 0,
        "buffsStolen": 0,
        "completeSupportQuestInTime": 0,
        "controlWardsPlaced": 0,
        "damagePerMinute": 0,
        "damageTakenOnTeamPercentage": 0,
        "dancedWithRiftHerald": 0,
        "deathsByEnemyChamps": 0,
        "dodgeSkillShotsSmallWindow": 0,
        "doubleAces": 0,
        "dragonTakedowns": 0,
        "legendaryItemUsed": [
          0
        ],
        "effectiveHealAndShielding": 0,
        "elderDragonKillsWithOpposingSoul": 0,
        "elderDragonMultikills": 0,
        "enemyChampionImmobilizations": 0,
        "enemyJungleMonsterKills": 0,
        "epicMonsterKillsNearEnemyJungler": 0,
        "epicMonsterKillsWithin30SecondsOfSpawn": 0,
        "epicMonsterSteals": 0,
        "epicMonsterStolenWithoutSmite": 0,
        "firstTurretKilled": 0,
        "firstTurretKilledTime": 0,
        "flawlessAces": 0,
        "fullTeamTakedown": 0,
        "gameLength": 0,
        "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
        "goldPerMinute": 0,
        "hadOpenNexus": 0,
        "immobilizeAndKillWithAlly": 0,
        "initialBuffCount": 0,
        "initialCrabCount": 0,
        "jungleCsBefore10Minutes": 0,
        "junglerTakedownsNearDamagedEpicMonster": 0,
        "kda": 0,
        "killAfterHiddenWithAlly": 0,
        "killedChampTookFullTeamDamageSurvived": 0,
        "killingSprees": 0,
        "killParticipation": 0,
        "killsNearEnemyTurret": 0,
        "killsOnOtherLanesEarlyJungleAsLaner": 0,
        "killsOnRecentlyHealedByAramPack": 0,
        "killsUnderOwnTurret": 0,
        "killsWithHelpFromEpicMonster": 0,
        "knockEnemyIntoTeamAndKill": 0,
        "kTurretsDestroyedBeforePlatesFall": 0,
        "landSkillShotsEarlyGame": 0,
        "laneMinionsFirst10Minutes": 0,
        "lostAnInhibitor": 0,
        "maxKillDeficit": 0,
        "mejaisFullStackInTime": 0,
        "moreEnemyJungleThanOpponent": 0,
        "multiKillOneSpell": 0,
        "multikills": 0,
        "multikillsAfterAggressiveFlash": 0,
        "multiTurretRiftHeraldCount": 0,
        "outerTurretExecutesBefore10Minutes": 0,
        "outnumberedKills": 0,
        "outnumberedNexusKill": 0,
        "perfectDragonSoulsTaken": 0,
        "perfectGame": 0,
        "pickKillWithAlly": 0,
        "poroExplosions": 0,
        "quickCleanse": 0,
        "quickFirstTurret": 0,
        "quickSoloKills": 0,
        "riftHeraldTakedowns": 0,
        "saveAllyFromDeath": 0,
        "scuttleCrabKills": 0,
        "shortestTimeToAceFromFirstTakedown": 0,
        "skillshotsDodged": 0,
        "skillshotsHit": 0,
        "snowballsHit": 0,
        "soloBaronKills": 0,
        "SWARM_DefeatAatrox": 0,
        "SWARM_DefeatBriar": 0,
        "SWARM_DefeatMiniBosses": 0,
        "SWARM_EvolveWeapon": 0,
        "SWARM_Have3Passives": 0,
        "SWARM_KillEnemy": 0,
        "SWARM_PickupGold": 0,
        "SWARM_ReachLevel50": 0,
        "SWARM_Survive15Min": 0,
        "SWARM_WinWith5EvolvedWeapons": 0,
        "soloKills": 0,
        "stealthWardsPlaced": 0,
        "survivedSingleDigitHpCount": 0,
        "survivedThreeImmobilizesInFight": 0,
        "takedownOnFirstTurret": 0,
        "takedowns": 0,
        "takedownsAfterGainingLevelAdvantage": 0,
        "takedownsBeforeJungleMinionSpawn": 0,
        "takedownsFirstXMinutes": 0,
        "takedownsInAlcove": 0,
        "takedownsInEnemyFountain": 0,
        "teamBaronKills": 0,
        "teamDamagePercentage": 0,
        "teamElderDragonKills": 0,
        "teamRiftHeraldKills": 0,
        "tookLargeDamageSurvived": 0,
        "turretPlatesTaken": 0,
        "turretsTakenWithRiftHerald": 0,
        "turretTakedowns": 0,
        "twentyMinionsIn3SecondsCount": 0,
        "twoWardsOneSweeperCount": 0,
        "unseenRecalls": 0,
        "visionScorePerMinute": 0,
        "wardsGuarded": 0,
        "wardTakedowns": 0,
        "wardTakedownsBefore20M": 0,
        "HealFromMapSources": 0
      },
      "damageDealtToBuildings": 0,
      "damageDealtToObjectives": 0,
      "damageDealtToTurrets": 0,
      "damageSelfMitigated": 0,
      "deaths": 0,
      "detectorWardsPlaced": 0,
      "doubleKills": 0,
      "dragonKills": 0,
      "eligibleForProgression": true,
      "enemyMissingPings": 0,
      "enemyVisionPings": 0,
      "firstBloodAssist": true,
      "firstBloodKill": true,
      "firstTowerAssist": true,
      "firstTowerKill": true,
      "gameEndedInEarlySurrender": true,
      "gameEndedInSurrender": true,
      "holdPings": 0,
      "getBackPings": 0,
      "goldEarned": 0,
      "goldSpent": 0,
      "individualPosition": "string",
      "inhibitorKills": 0,
      "inhibitorTakedowns": 0,
      "inhibitorsLost": 0,
      "item0": 0,
      "item1": 0,
      "item2": 0,
      "item3": 0,
      "item4": 0,
      "item5": 0,
      "item6": 0,
      "itemsPurchased": 0,
      "killingSprees": 0,
      "kills": 0,
      "lane": "string",
      "largestCriticalStrike": 0,
      "largestKillingSpree": 0,
      "largestMultiKill": 0,
      "longestTimeSpentLiving": 0,
      "magicDamageDealt": 0,
      "magicDamageDealtToChampions": 0,
      "magicDamageTaken": 0,
      "missions": {
        "playerScore0": 0,
        "playerScore1": 0,
        "playerScore2": 0,
        "playerScore3": 0,
        "playerScore4": 0,
        "playerScore5": 0,
        "playerScore6": 0,
        "playerScore7": 0,
        "playerScore8": 0,
        "playerScore9": 0,
        "playerScore10": 0,
        "playerScore11": 0
      },
      "neutralMinionsKilled": 0,
      "needVisionPings": 0,
      "nexusKills": 0,
      "nexusTakedowns": 0,
      "nexusLost": 0,
      "objectivesStolen": 0,
      "objectivesStolenAssists": 0,
      "onMyWayPings": 0,
      "participantId": 0,
      "playerScore0": 0,
      "playerScore1": 0,
      "playerScore2": 0,
      "playerScore3": 0,
      "playerScore4": 0,
      "playerScore5": 0,
      "playerScore6": 0,
      "playerScore7": 0,
      "playerScore8": 0,
      "playerScore9": 0,
      "playerScore10": 0,
      "playerScore11": 0,
      "pentaKills": 0,
      "perks": {
        "statPerks": {
          "defense": 0,
          "flex": 0,
          "offense": 0
        },
        "styles": [
          {
            "description": "string",
            "selections": [
              {
                "perk": 0,
                "var1": 0,
                "var2": 0,
                "var3": 0
              }
            ],
            "style": 0
          }
        ]
      },
      "physicalDamageDealt": 0,
      "physicalDamageDealtToChampions": 0,
      "physicalDamageTaken": 0,
      "placement": 0,
      "playerAugment1": 0,
      "playerAugment2": 0,
      "playerAugment3": 0,
      "playerAugment4": 0,
      "playerSubteamId": 0,
      "pushPings": 0,
      "profileIcon": 0,
      "puuid": "string",
      "quadraKills": 0,
      "riotIdGameName": "string",
      "riotIdTagline": "string",
      "role": "string",
      "sightWardsBoughtInGame": 0,
      "spell1Casts": 0,
      "spell2Casts": 0,
      "spell3Casts": 0,
      "spell4Casts": 0,
      "subteamPlacement": 0,
      "summoner1Casts": 0,
      "summoner1Id": 0,
      "summoner2Casts": 0,
      "summoner2Id": 0,
      "summonerId": "string",
      "summonerLevel": 0,
      "summonerName": "string",
      "teamEarlySurrendered": true,
      "teamId": 0,
      "teamPosition": "string",
      "timeCCingOthers": 0,
      "timePlayed": 0,
      "totalAllyJungleMinionsKilled": 0,
      "totalDamageDealt": 0,
      "totalDamageDealtToChampions": 0,
      "totalDamageShieldedOnTeammates": 0,
      "totalDamageTaken": 0,
      "totalEnemyJungleMinionsKilled": 0,
      "totalHeal": 0,
      "totalHealsOnTeammates": 0,
      "totalMinionsKilled": 0,
      "totalTimeCCDealt": 0,
      "totalTimeSpentDead": 0,
      "totalUnitsHealed": 0,
      "tripleKills": 0,
      "trueDamageDealt": 0,
      "trueDamageDealtToChampions": 0,
      "trueDamageTaken": 0,
      "turretKills": 0,
      "turretTakedowns": 0,
      "turretsLost": 0,
      "unrealKills": 0,
      "visionScore": 0,
      "visionClearedPings": 0,
      "visionWardsBoughtInGame": 0,
      "wardsKilled": 0,
      "wardsPlaced": 0,
      "win": true,
      "baitPings": 0,
      "dangerPings": 0,
      "basicPings": 0,
      "playerAugment5": 0,
      "playerAugment6": 0,
      "riotIdName": "string",
      "retreatPings": 0,
      "championSkinId": 0,
      "damageDealtToEpicMonsters": 0,
      "roleBoundItem": 0,
      "PlayerBehavior": {
        "PlayerBehavior_IsHeroInCombat": 0
      },
      "causedGameEndFromIGNBSurrender": true,
      "gameEndedInIGNBSurrender": true,
      "positionAssignedByMatchmaking": "string",
      "selectedRolePreferences": "string",
      "teamIGNBSurrendered": true,
      "wasPremadeWithIGNBGameEndCauser": true,
      "wasPremadeWithSevereTransgressor": true,
      "wasSevereTransgressor": true
    }
  ],
  "platformId": "string",
  "queueId": 0,
  "teams": [
    {
      "bans": [
        {
          "championId": 0,
          "pickTurn": 0
        }
      ],
      "objectives": {
        "baron": {
          "first": true,
          "kills": 0
        },
        "champion": {
          "first": true,
          "kills": 0
        },
        "dragon": {
          "first": true,
          "kills": 0
        },
        "horde": {
          "first": true,
          "kills": 0
        },
        "inhibitor": {
          "first": true,
          "kills": 0
        },
        "riftHerald": {
          "first": true,
          "kills": 0
        },
        "tower": {
          "first": true,
          "kills": 0
        },
        "atakhan": {
          "first": true,
          "kills": 0
        }
      },
      "teamId": 0,
      "win": true,
      "feats": {
        "EPIC_MONSTER_KILL": {
          "featState": 0
        },
        "FIRST_BLOOD": {
          "featState": 0
        },
        "FIRST_TURRET": {
          "featState": 0
        }
      }
    }
  ],
  "tournamentCode": "string",
  "gameModeMutators": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endOfGameResult|string|false|none|Refer to indicate if the game ended in termination.|
|gameCreation|integer(int64)|true|none|Unix timestamp for when the game is created on the game server (i.e., the loading screen).|
|gameDuration|integer(int64)|true|none|Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp. Post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this field consistent with that of match-v4. The best way to handling the change in this field is to treat the value as milliseconds if the gameEndTimestamp field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response.|
|gameEndTimestamp|integer(int64)|false|none|Unix timestamp for when match ends on the game server. This timestamp can occasionally be significantly longer than when the match "ends". The most reliable way of determining the timestamp for the end of the match would be to add the max time played of any participant to the gameStartTimestamp. This field was added to match-v5 in patch 11.20 on Oct 5th, 2021.|
|gameId|integer(int64)|true|none|none|
|gameMode|string|true|none|Refer to the Game Constants documentation.|
|gameName|string|true|none|none|
|gameStartTimestamp|integer(int64)|true|none|Unix timestamp for when match starts on the game server.|
|gameType|string|true|none|none|
|gameVersion|string|true|none|The first two parts can be used to determine the patch a game was played on.|
|mapId|integer(int32)|true|none|Refer to the Game Constants documentation.|
|participants|[[match-v5.ParticipantDto](#schemamatch-v5.participantdto)]|true|none|none|
|platformId|string|true|none|Platform where the match was played.|
|queueId|integer(int32)|true|none|Refer to the Game Constants documentation.|
|teams|[[match-v5.TeamDto](#schemamatch-v5.teamdto)]|true|none|none|
|tournamentCode|string|false|none|Tournament code used to generate the match. This field was added to match-v5 in patch 11.13 on June 23rd, 2021.|
|gameModeMutators|[string]|false|none|none|

<h2 id="tocS_match-v5.ParticipantDto">match-v5.ParticipantDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.participantdto"></a>
<a id="schema_match-v5.ParticipantDto"></a>
<a id="tocSmatch-v5.participantdto"></a>
<a id="tocsmatch-v5.participantdto"></a>

```json
{
  "allInPings": 0,
  "assistMePings": 0,
  "assists": 0,
  "baronKills": 0,
  "bountyLevel": 0,
  "champExperience": 0,
  "champLevel": 0,
  "championId": 0,
  "championName": "string",
  "commandPings": 0,
  "championTransform": 0,
  "consumablesPurchased": 0,
  "challenges": {
    "12AssistStreakCount": 0,
    "baronBuffGoldAdvantageOverThreshold": 0,
    "controlWardTimeCoverageInRiverOrEnemyHalf": 0,
    "earliestBaron": 0,
    "earliestDragonTakedown": 0,
    "earliestElderDragon": 0,
    "earlyLaningPhaseGoldExpAdvantage": 0,
    "fasterSupportQuestCompletion": 0,
    "fastestLegendary": 0,
    "hadAfkTeammate": 0,
    "highestChampionDamage": 0,
    "highestCrowdControlScore": 0,
    "highestWardKills": 0,
    "junglerKillsEarlyJungle": 0,
    "killsOnLanersEarlyJungleAsJungler": 0,
    "laningPhaseGoldExpAdvantage": 0,
    "legendaryCount": 0,
    "maxCsAdvantageOnLaneOpponent": 0,
    "maxLevelLeadLaneOpponent": 0,
    "mostWardsDestroyedOneSweeper": 0,
    "mythicItemUsed": 0,
    "playedChampSelectPosition": 0,
    "soloTurretsLategame": 0,
    "takedownsFirst25Minutes": 0,
    "teleportTakedowns": 0,
    "thirdInhibitorDestroyedTime": 0,
    "threeWardsOneSweeperCount": 0,
    "visionScoreAdvantageLaneOpponent": 0,
    "InfernalScalePickup": 0,
    "fistBumpParticipation": 0,
    "voidMonsterKill": 0,
    "abilityUses": 0,
    "acesBefore15Minutes": 0,
    "alliedJungleMonsterKills": 0,
    "baronTakedowns": 0,
    "blastConeOppositeOpponentCount": 0,
    "bountyGold": 0,
    "buffsStolen": 0,
    "completeSupportQuestInTime": 0,
    "controlWardsPlaced": 0,
    "damagePerMinute": 0,
    "damageTakenOnTeamPercentage": 0,
    "dancedWithRiftHerald": 0,
    "deathsByEnemyChamps": 0,
    "dodgeSkillShotsSmallWindow": 0,
    "doubleAces": 0,
    "dragonTakedowns": 0,
    "legendaryItemUsed": [
      0
    ],
    "effectiveHealAndShielding": 0,
    "elderDragonKillsWithOpposingSoul": 0,
    "elderDragonMultikills": 0,
    "enemyChampionImmobilizations": 0,
    "enemyJungleMonsterKills": 0,
    "epicMonsterKillsNearEnemyJungler": 0,
    "epicMonsterKillsWithin30SecondsOfSpawn": 0,
    "epicMonsterSteals": 0,
    "epicMonsterStolenWithoutSmite": 0,
    "firstTurretKilled": 0,
    "firstTurretKilledTime": 0,
    "flawlessAces": 0,
    "fullTeamTakedown": 0,
    "gameLength": 0,
    "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
    "goldPerMinute": 0,
    "hadOpenNexus": 0,
    "immobilizeAndKillWithAlly": 0,
    "initialBuffCount": 0,
    "initialCrabCount": 0,
    "jungleCsBefore10Minutes": 0,
    "junglerTakedownsNearDamagedEpicMonster": 0,
    "kda": 0,
    "killAfterHiddenWithAlly": 0,
    "killedChampTookFullTeamDamageSurvived": 0,
    "killingSprees": 0,
    "killParticipation": 0,
    "killsNearEnemyTurret": 0,
    "killsOnOtherLanesEarlyJungleAsLaner": 0,
    "killsOnRecentlyHealedByAramPack": 0,
    "killsUnderOwnTurret": 0,
    "killsWithHelpFromEpicMonster": 0,
    "knockEnemyIntoTeamAndKill": 0,
    "kTurretsDestroyedBeforePlatesFall": 0,
    "landSkillShotsEarlyGame": 0,
    "laneMinionsFirst10Minutes": 0,
    "lostAnInhibitor": 0,
    "maxKillDeficit": 0,
    "mejaisFullStackInTime": 0,
    "moreEnemyJungleThanOpponent": 0,
    "multiKillOneSpell": 0,
    "multikills": 0,
    "multikillsAfterAggressiveFlash": 0,
    "multiTurretRiftHeraldCount": 0,
    "outerTurretExecutesBefore10Minutes": 0,
    "outnumberedKills": 0,
    "outnumberedNexusKill": 0,
    "perfectDragonSoulsTaken": 0,
    "perfectGame": 0,
    "pickKillWithAlly": 0,
    "poroExplosions": 0,
    "quickCleanse": 0,
    "quickFirstTurret": 0,
    "quickSoloKills": 0,
    "riftHeraldTakedowns": 0,
    "saveAllyFromDeath": 0,
    "scuttleCrabKills": 0,
    "shortestTimeToAceFromFirstTakedown": 0,
    "skillshotsDodged": 0,
    "skillshotsHit": 0,
    "snowballsHit": 0,
    "soloBaronKills": 0,
    "SWARM_DefeatAatrox": 0,
    "SWARM_DefeatBriar": 0,
    "SWARM_DefeatMiniBosses": 0,
    "SWARM_EvolveWeapon": 0,
    "SWARM_Have3Passives": 0,
    "SWARM_KillEnemy": 0,
    "SWARM_PickupGold": 0,
    "SWARM_ReachLevel50": 0,
    "SWARM_Survive15Min": 0,
    "SWARM_WinWith5EvolvedWeapons": 0,
    "soloKills": 0,
    "stealthWardsPlaced": 0,
    "survivedSingleDigitHpCount": 0,
    "survivedThreeImmobilizesInFight": 0,
    "takedownOnFirstTurret": 0,
    "takedowns": 0,
    "takedownsAfterGainingLevelAdvantage": 0,
    "takedownsBeforeJungleMinionSpawn": 0,
    "takedownsFirstXMinutes": 0,
    "takedownsInAlcove": 0,
    "takedownsInEnemyFountain": 0,
    "teamBaronKills": 0,
    "teamDamagePercentage": 0,
    "teamElderDragonKills": 0,
    "teamRiftHeraldKills": 0,
    "tookLargeDamageSurvived": 0,
    "turretPlatesTaken": 0,
    "turretsTakenWithRiftHerald": 0,
    "turretTakedowns": 0,
    "twentyMinionsIn3SecondsCount": 0,
    "twoWardsOneSweeperCount": 0,
    "unseenRecalls": 0,
    "visionScorePerMinute": 0,
    "wardsGuarded": 0,
    "wardTakedowns": 0,
    "wardTakedownsBefore20M": 0,
    "HealFromMapSources": 0
  },
  "damageDealtToBuildings": 0,
  "damageDealtToObjectives": 0,
  "damageDealtToTurrets": 0,
  "damageSelfMitigated": 0,
  "deaths": 0,
  "detectorWardsPlaced": 0,
  "doubleKills": 0,
  "dragonKills": 0,
  "eligibleForProgression": true,
  "enemyMissingPings": 0,
  "enemyVisionPings": 0,
  "firstBloodAssist": true,
  "firstBloodKill": true,
  "firstTowerAssist": true,
  "firstTowerKill": true,
  "gameEndedInEarlySurrender": true,
  "gameEndedInSurrender": true,
  "holdPings": 0,
  "getBackPings": 0,
  "goldEarned": 0,
  "goldSpent": 0,
  "individualPosition": "string",
  "inhibitorKills": 0,
  "inhibitorTakedowns": 0,
  "inhibitorsLost": 0,
  "item0": 0,
  "item1": 0,
  "item2": 0,
  "item3": 0,
  "item4": 0,
  "item5": 0,
  "item6": 0,
  "itemsPurchased": 0,
  "killingSprees": 0,
  "kills": 0,
  "lane": "string",
  "largestCriticalStrike": 0,
  "largestKillingSpree": 0,
  "largestMultiKill": 0,
  "longestTimeSpentLiving": 0,
  "magicDamageDealt": 0,
  "magicDamageDealtToChampions": 0,
  "magicDamageTaken": 0,
  "missions": {
    "playerScore0": 0,
    "playerScore1": 0,
    "playerScore2": 0,
    "playerScore3": 0,
    "playerScore4": 0,
    "playerScore5": 0,
    "playerScore6": 0,
    "playerScore7": 0,
    "playerScore8": 0,
    "playerScore9": 0,
    "playerScore10": 0,
    "playerScore11": 0
  },
  "neutralMinionsKilled": 0,
  "needVisionPings": 0,
  "nexusKills": 0,
  "nexusTakedowns": 0,
  "nexusLost": 0,
  "objectivesStolen": 0,
  "objectivesStolenAssists": 0,
  "onMyWayPings": 0,
  "participantId": 0,
  "playerScore0": 0,
  "playerScore1": 0,
  "playerScore2": 0,
  "playerScore3": 0,
  "playerScore4": 0,
  "playerScore5": 0,
  "playerScore6": 0,
  "playerScore7": 0,
  "playerScore8": 0,
  "playerScore9": 0,
  "playerScore10": 0,
  "playerScore11": 0,
  "pentaKills": 0,
  "perks": {
    "statPerks": {
      "defense": 0,
      "flex": 0,
      "offense": 0
    },
    "styles": [
      {
        "description": "string",
        "selections": [
          {
            "perk": 0,
            "var1": 0,
            "var2": 0,
            "var3": 0
          }
        ],
        "style": 0
      }
    ]
  },
  "physicalDamageDealt": 0,
  "physicalDamageDealtToChampions": 0,
  "physicalDamageTaken": 0,
  "placement": 0,
  "playerAugment1": 0,
  "playerAugment2": 0,
  "playerAugment3": 0,
  "playerAugment4": 0,
  "playerSubteamId": 0,
  "pushPings": 0,
  "profileIcon": 0,
  "puuid": "string",
  "quadraKills": 0,
  "riotIdGameName": "string",
  "riotIdTagline": "string",
  "role": "string",
  "sightWardsBoughtInGame": 0,
  "spell1Casts": 0,
  "spell2Casts": 0,
  "spell3Casts": 0,
  "spell4Casts": 0,
  "subteamPlacement": 0,
  "summoner1Casts": 0,
  "summoner1Id": 0,
  "summoner2Casts": 0,
  "summoner2Id": 0,
  "summonerId": "string",
  "summonerLevel": 0,
  "summonerName": "string",
  "teamEarlySurrendered": true,
  "teamId": 0,
  "teamPosition": "string",
  "timeCCingOthers": 0,
  "timePlayed": 0,
  "totalAllyJungleMinionsKilled": 0,
  "totalDamageDealt": 0,
  "totalDamageDealtToChampions": 0,
  "totalDamageShieldedOnTeammates": 0,
  "totalDamageTaken": 0,
  "totalEnemyJungleMinionsKilled": 0,
  "totalHeal": 0,
  "totalHealsOnTeammates": 0,
  "totalMinionsKilled": 0,
  "totalTimeCCDealt": 0,
  "totalTimeSpentDead": 0,
  "totalUnitsHealed": 0,
  "tripleKills": 0,
  "trueDamageDealt": 0,
  "trueDamageDealtToChampions": 0,
  "trueDamageTaken": 0,
  "turretKills": 0,
  "turretTakedowns": 0,
  "turretsLost": 0,
  "unrealKills": 0,
  "visionScore": 0,
  "visionClearedPings": 0,
  "visionWardsBoughtInGame": 0,
  "wardsKilled": 0,
  "wardsPlaced": 0,
  "win": true,
  "baitPings": 0,
  "dangerPings": 0,
  "basicPings": 0,
  "playerAugment5": 0,
  "playerAugment6": 0,
  "riotIdName": "string",
  "retreatPings": 0,
  "championSkinId": 0,
  "damageDealtToEpicMonsters": 0,
  "roleBoundItem": 0,
  "PlayerBehavior": {
    "PlayerBehavior_IsHeroInCombat": 0
  },
  "causedGameEndFromIGNBSurrender": true,
  "gameEndedInIGNBSurrender": true,
  "positionAssignedByMatchmaking": "string",
  "selectedRolePreferences": "string",
  "teamIGNBSurrendered": true,
  "wasPremadeWithIGNBGameEndCauser": true,
  "wasPremadeWithSevereTransgressor": true,
  "wasSevereTransgressor": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allInPings|integer(int32)|false|none|Yellow crossed swords|
|assistMePings|integer(int32)|false|none|Green flag|
|assists|integer(int32)|true|none|none|
|baronKills|integer(int32)|true|none|none|
|bountyLevel|integer(int32)|false|none|none|
|champExperience|integer(int32)|true|none|none|
|champLevel|integer(int32)|true|none|none|
|championId|integer(int32)|true|none|Prior to patch 11.4, on Feb 18th, 2021, this field returned invalid championIds. We recommend determining the champion based on the championName field for matches played prior to patch 11.4.|
|championName|string|true|none|none|
|commandPings|integer(int32)|false|none|Blue generic ping (ALT+click)|
|championTransform|integer(int32)|true|none|This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)|
|consumablesPurchased|integer(int32)|true|none|none|
|challenges|[match-v5.ChallengesDto](#schemamatch-v5.challengesdto)|false|none|Challenges DTO|
|damageDealtToBuildings|integer(int32)|false|none|none|
|damageDealtToObjectives|integer(int32)|true|none|none|
|damageDealtToTurrets|integer(int32)|true|none|none|
|damageSelfMitigated|integer(int32)|true|none|none|
|deaths|integer(int32)|true|none|none|
|detectorWardsPlaced|integer(int32)|true|none|none|
|doubleKills|integer(int32)|true|none|none|
|dragonKills|integer(int32)|true|none|none|
|eligibleForProgression|boolean|false|none|none|
|enemyMissingPings|integer(int32)|false|none|Yellow questionmark|
|enemyVisionPings|integer(int32)|false|none|Red eyeball|
|firstBloodAssist|boolean|true|none|none|
|firstBloodKill|boolean|true|none|none|
|firstTowerAssist|boolean|true|none|none|
|firstTowerKill|boolean|true|none|none|
|gameEndedInEarlySurrender|boolean|true|none|This is an offshoot of the OneStone challenge. The code checks if a spell with the same instance ID does the final point of damage to at least 2 Champions. It doesn't matter if they're enemies, but you cannot hurt your friends.|
|gameEndedInSurrender|boolean|true|none|none|
|holdPings|integer(int32)|false|none|none|
|getBackPings|integer(int32)|false|none|Yellow circle with horizontal line|
|goldEarned|integer(int32)|true|none|none|
|goldSpent|integer(int32)|true|none|none|
|individualPosition|string|true|none|Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.|
|inhibitorKills|integer(int32)|true|none|none|
|inhibitorTakedowns|integer(int32)|false|none|none|
|inhibitorsLost|integer(int32)|false|none|none|
|item0|integer(int32)|true|none|none|
|item1|integer(int32)|true|none|none|
|item2|integer(int32)|true|none|none|
|item3|integer(int32)|true|none|none|
|item4|integer(int32)|true|none|none|
|item5|integer(int32)|true|none|none|
|item6|integer(int32)|true|none|none|
|itemsPurchased|integer(int32)|true|none|none|
|killingSprees|integer(int32)|true|none|none|
|kills|integer(int32)|true|none|none|
|lane|string|true|none|none|
|largestCriticalStrike|integer(int32)|true|none|none|
|largestKillingSpree|integer(int32)|true|none|none|
|largestMultiKill|integer(int32)|true|none|none|
|longestTimeSpentLiving|integer(int32)|true|none|none|
|magicDamageDealt|integer(int32)|true|none|none|
|magicDamageDealtToChampions|integer(int32)|true|none|none|
|magicDamageTaken|integer(int32)|true|none|none|
|missions|[match-v5.MissionsDto](#schemamatch-v5.missionsdto)|false|none|Missions DTO|
|neutralMinionsKilled|integer(int32)|true|none|neutralMinionsKilled = mNeutralMinionsKilled, which is incremented on kills of kPet and kJungleMonster|
|needVisionPings|integer(int32)|false|none|Green ward|
|nexusKills|integer(int32)|true|none|none|
|nexusTakedowns|integer(int32)|false|none|none|
|nexusLost|integer(int32)|false|none|none|
|objectivesStolen|integer(int32)|true|none|none|
|objectivesStolenAssists|integer(int32)|true|none|none|
|onMyWayPings|integer(int32)|false|none|Blue arrow pointing at ground|
|participantId|integer(int32)|true|none|none|
|playerScore0|number(float)|false|none|none|
|playerScore1|number(float)|false|none|none|
|playerScore2|number(float)|false|none|none|
|playerScore3|number(float)|false|none|none|
|playerScore4|number(float)|false|none|none|
|playerScore5|number(float)|false|none|none|
|playerScore6|number(float)|false|none|none|
|playerScore7|number(float)|false|none|none|
|playerScore8|number(float)|false|none|none|
|playerScore9|number(float)|false|none|none|
|playerScore10|number(float)|false|none|none|
|playerScore11|number(float)|false|none|none|
|pentaKills|integer(int32)|true|none|none|
|perks|[match-v5.PerksDto](#schemamatch-v5.perksdto)|true|none|none|
|physicalDamageDealt|integer(int32)|true|none|none|
|physicalDamageDealtToChampions|integer(int32)|true|none|none|
|physicalDamageTaken|integer(int32)|true|none|none|
|placement|integer(int32)|false|none|none|
|playerAugment1|integer(int32)|false|none|none|
|playerAugment2|integer(int32)|false|none|none|
|playerAugment3|integer(int32)|false|none|none|
|playerAugment4|integer(int32)|false|none|none|
|playerSubteamId|integer(int32)|false|none|none|
|pushPings|integer(int32)|false|none|Green minion|
|profileIcon|integer(int32)|true|none|none|
|puuid|string|true|none|none|
|quadraKills|integer(int32)|true|none|none|
|riotIdGameName|string|false|none|none|
|riotIdTagline|string|false|none|none|
|role|string|true|none|none|
|sightWardsBoughtInGame|integer(int32)|true|none|none|
|spell1Casts|integer(int32)|true|none|none|
|spell2Casts|integer(int32)|true|none|none|
|spell3Casts|integer(int32)|true|none|none|
|spell4Casts|integer(int32)|true|none|none|
|subteamPlacement|integer(int32)|false|none|none|
|summoner1Casts|integer(int32)|true|none|none|
|summoner1Id|integer(int32)|true|none|none|
|summoner2Casts|integer(int32)|true|none|none|
|summoner2Id|integer(int32)|true|none|none|
|summonerId|string|true|none|none|
|summonerLevel|integer(int32)|true|none|none|
|summonerName|string|true|none|none|
|teamEarlySurrendered|boolean|true|none|none|
|teamId|integer(int32)|true|none|none|
|teamPosition|string|true|none|Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.|
|timeCCingOthers|integer(int32)|true|none|none|
|timePlayed|integer(int32)|true|none|none|
|totalAllyJungleMinionsKilled|integer(int32)|false|none|none|
|totalDamageDealt|integer(int32)|true|none|none|
|totalDamageDealtToChampions|integer(int32)|true|none|none|
|totalDamageShieldedOnTeammates|integer(int32)|true|none|none|
|totalDamageTaken|integer(int32)|true|none|none|
|totalEnemyJungleMinionsKilled|integer(int32)|false|none|none|
|totalHeal|integer(int32)|true|none|Whenever positive health is applied (which translates to all heals in the game but not things like regeneration), totalHeal is incremented by the amount of health received. This includes healing enemies, jungle monsters, yourself, etc|
|totalHealsOnTeammates|integer(int32)|true|none|Whenever positive health is applied (which translates to all heals in the game but not things like regeneration), totalHealsOnTeammates is incremented by the amount of health received.  This is post modified, so if you heal someone missing 5 health for 100 you will get +5 totalHealsOnTeammates|
|totalMinionsKilled|integer(int32)|true|none|totalMillionsKilled = mMinionsKilled, which is only incremented on kills of kTeamMinion, kMeleeLaneMinion, kSuperLaneMinion, kRangedLaneMinion and kSiegeLaneMinion|
|totalTimeCCDealt|integer(int32)|true|none|none|
|totalTimeSpentDead|integer(int32)|true|none|none|
|totalUnitsHealed|integer(int32)|true|none|none|
|tripleKills|integer(int32)|true|none|none|
|trueDamageDealt|integer(int32)|true|none|none|
|trueDamageDealtToChampions|integer(int32)|true|none|none|
|trueDamageTaken|integer(int32)|true|none|none|
|turretKills|integer(int32)|true|none|none|
|turretTakedowns|integer(int32)|false|none|none|
|turretsLost|integer(int32)|false|none|none|
|unrealKills|integer(int32)|true|none|none|
|visionScore|integer(int32)|true|none|none|
|visionClearedPings|integer(int32)|false|none|none|
|visionWardsBoughtInGame|integer(int32)|true|none|none|
|wardsKilled|integer(int32)|true|none|none|
|wardsPlaced|integer(int32)|true|none|none|
|win|boolean|true|none|none|
|baitPings|integer(int32)|false|none|none|
|dangerPings|integer(int32)|false|none|https://github.com/RiotGames/developer-relations/issues/870|
|basicPings|integer(int32)|false|none|https://github.com/RiotGames/developer-relations/issues/814|
|playerAugment5|integer(int32)|false|none|none|
|playerAugment6|integer(int32)|false|none|none|
|riotIdName|string|false|none|Deprecated, use `riotIdGameName`. This field name was briefly used instead of `riotIdGameName`, prior to patch 14.5.|
|retreatPings|integer(int32)|false|none|https://github.com/RiotGames/developer-relations/issues/814|
|championSkinId|integer(int32)|false|none|none|
|damageDealtToEpicMonsters|integer(int32)|false|none|none|
|roleBoundItem|integer(int32)|false|none|none|
|PlayerBehavior|[match-v5.ParticipantPlayerBehaviorDto](#schemamatch-v5.participantplayerbehaviordto)|false|none|https://github.com/RiotGames/developer-relations/issues/754#issuecomment-3940157820|
|causedGameEndFromIGNBSurrender|boolean|false|none|none|
|gameEndedInIGNBSurrender|boolean|false|none|none|
|positionAssignedByMatchmaking|string|false|none|none|
|selectedRolePreferences|string|false|none|none|
|teamIGNBSurrendered|boolean|false|none|none|
|wasPremadeWithIGNBGameEndCauser|boolean|false|none|none|
|wasPremadeWithSevereTransgressor|boolean|false|none|none|
|wasSevereTransgressor|boolean|false|none|none|

<h2 id="tocS_match-v5.ChallengesDto">match-v5.ChallengesDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.challengesdto"></a>
<a id="schema_match-v5.ChallengesDto"></a>
<a id="tocSmatch-v5.challengesdto"></a>
<a id="tocsmatch-v5.challengesdto"></a>

```json
{
  "12AssistStreakCount": 0,
  "baronBuffGoldAdvantageOverThreshold": 0,
  "controlWardTimeCoverageInRiverOrEnemyHalf": 0,
  "earliestBaron": 0,
  "earliestDragonTakedown": 0,
  "earliestElderDragon": 0,
  "earlyLaningPhaseGoldExpAdvantage": 0,
  "fasterSupportQuestCompletion": 0,
  "fastestLegendary": 0,
  "hadAfkTeammate": 0,
  "highestChampionDamage": 0,
  "highestCrowdControlScore": 0,
  "highestWardKills": 0,
  "junglerKillsEarlyJungle": 0,
  "killsOnLanersEarlyJungleAsJungler": 0,
  "laningPhaseGoldExpAdvantage": 0,
  "legendaryCount": 0,
  "maxCsAdvantageOnLaneOpponent": 0,
  "maxLevelLeadLaneOpponent": 0,
  "mostWardsDestroyedOneSweeper": 0,
  "mythicItemUsed": 0,
  "playedChampSelectPosition": 0,
  "soloTurretsLategame": 0,
  "takedownsFirst25Minutes": 0,
  "teleportTakedowns": 0,
  "thirdInhibitorDestroyedTime": 0,
  "threeWardsOneSweeperCount": 0,
  "visionScoreAdvantageLaneOpponent": 0,
  "InfernalScalePickup": 0,
  "fistBumpParticipation": 0,
  "voidMonsterKill": 0,
  "abilityUses": 0,
  "acesBefore15Minutes": 0,
  "alliedJungleMonsterKills": 0,
  "baronTakedowns": 0,
  "blastConeOppositeOpponentCount": 0,
  "bountyGold": 0,
  "buffsStolen": 0,
  "completeSupportQuestInTime": 0,
  "controlWardsPlaced": 0,
  "damagePerMinute": 0,
  "damageTakenOnTeamPercentage": 0,
  "dancedWithRiftHerald": 0,
  "deathsByEnemyChamps": 0,
  "dodgeSkillShotsSmallWindow": 0,
  "doubleAces": 0,
  "dragonTakedowns": 0,
  "legendaryItemUsed": [
    0
  ],
  "effectiveHealAndShielding": 0,
  "elderDragonKillsWithOpposingSoul": 0,
  "elderDragonMultikills": 0,
  "enemyChampionImmobilizations": 0,
  "enemyJungleMonsterKills": 0,
  "epicMonsterKillsNearEnemyJungler": 0,
  "epicMonsterKillsWithin30SecondsOfSpawn": 0,
  "epicMonsterSteals": 0,
  "epicMonsterStolenWithoutSmite": 0,
  "firstTurretKilled": 0,
  "firstTurretKilledTime": 0,
  "flawlessAces": 0,
  "fullTeamTakedown": 0,
  "gameLength": 0,
  "getTakedownsInAllLanesEarlyJungleAsLaner": 0,
  "goldPerMinute": 0,
  "hadOpenNexus": 0,
  "immobilizeAndKillWithAlly": 0,
  "initialBuffCount": 0,
  "initialCrabCount": 0,
  "jungleCsBefore10Minutes": 0,
  "junglerTakedownsNearDamagedEpicMonster": 0,
  "kda": 0,
  "killAfterHiddenWithAlly": 0,
  "killedChampTookFullTeamDamageSurvived": 0,
  "killingSprees": 0,
  "killParticipation": 0,
  "killsNearEnemyTurret": 0,
  "killsOnOtherLanesEarlyJungleAsLaner": 0,
  "killsOnRecentlyHealedByAramPack": 0,
  "killsUnderOwnTurret": 0,
  "killsWithHelpFromEpicMonster": 0,
  "knockEnemyIntoTeamAndKill": 0,
  "kTurretsDestroyedBeforePlatesFall": 0,
  "landSkillShotsEarlyGame": 0,
  "laneMinionsFirst10Minutes": 0,
  "lostAnInhibitor": 0,
  "maxKillDeficit": 0,
  "mejaisFullStackInTime": 0,
  "moreEnemyJungleThanOpponent": 0,
  "multiKillOneSpell": 0,
  "multikills": 0,
  "multikillsAfterAggressiveFlash": 0,
  "multiTurretRiftHeraldCount": 0,
  "outerTurretExecutesBefore10Minutes": 0,
  "outnumberedKills": 0,
  "outnumberedNexusKill": 0,
  "perfectDragonSoulsTaken": 0,
  "perfectGame": 0,
  "pickKillWithAlly": 0,
  "poroExplosions": 0,
  "quickCleanse": 0,
  "quickFirstTurret": 0,
  "quickSoloKills": 0,
  "riftHeraldTakedowns": 0,
  "saveAllyFromDeath": 0,
  "scuttleCrabKills": 0,
  "shortestTimeToAceFromFirstTakedown": 0,
  "skillshotsDodged": 0,
  "skillshotsHit": 0,
  "snowballsHit": 0,
  "soloBaronKills": 0,
  "SWARM_DefeatAatrox": 0,
  "SWARM_DefeatBriar": 0,
  "SWARM_DefeatMiniBosses": 0,
  "SWARM_EvolveWeapon": 0,
  "SWARM_Have3Passives": 0,
  "SWARM_KillEnemy": 0,
  "SWARM_PickupGold": 0,
  "SWARM_ReachLevel50": 0,
  "SWARM_Survive15Min": 0,
  "SWARM_WinWith5EvolvedWeapons": 0,
  "soloKills": 0,
  "stealthWardsPlaced": 0,
  "survivedSingleDigitHpCount": 0,
  "survivedThreeImmobilizesInFight": 0,
  "takedownOnFirstTurret": 0,
  "takedowns": 0,
  "takedownsAfterGainingLevelAdvantage": 0,
  "takedownsBeforeJungleMinionSpawn": 0,
  "takedownsFirstXMinutes": 0,
  "takedownsInAlcove": 0,
  "takedownsInEnemyFountain": 0,
  "teamBaronKills": 0,
  "teamDamagePercentage": 0,
  "teamElderDragonKills": 0,
  "teamRiftHeraldKills": 0,
  "tookLargeDamageSurvived": 0,
  "turretPlatesTaken": 0,
  "turretsTakenWithRiftHerald": 0,
  "turretTakedowns": 0,
  "twentyMinionsIn3SecondsCount": 0,
  "twoWardsOneSweeperCount": 0,
  "unseenRecalls": 0,
  "visionScorePerMinute": 0,
  "wardsGuarded": 0,
  "wardTakedowns": 0,
  "wardTakedownsBefore20M": 0,
  "HealFromMapSources": 0
}
```

Challenges DTO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|12AssistStreakCount|integer(int32)|false|none|none|
|baronBuffGoldAdvantageOverThreshold|integer(int32)|false|none|none|
|controlWardTimeCoverageInRiverOrEnemyHalf|number(float)|false|none|none|
|earliestBaron|number(double)|false|none|none|
|earliestDragonTakedown|number(double)|false|none|none|
|earliestElderDragon|number(double)|false|none|none|
|earlyLaningPhaseGoldExpAdvantage|number(double)|false|none|none|
|fasterSupportQuestCompletion|integer(int32)|false|none|none|
|fastestLegendary|number(double)|false|none|none|
|hadAfkTeammate|integer(int32)|false|none|none|
|highestChampionDamage|integer(int32)|false|none|none|
|highestCrowdControlScore|integer(int32)|false|none|none|
|highestWardKills|integer(int32)|false|none|none|
|junglerKillsEarlyJungle|integer(int32)|false|none|none|
|killsOnLanersEarlyJungleAsJungler|integer(int32)|false|none|none|
|laningPhaseGoldExpAdvantage|integer(int32)|false|none|none|
|legendaryCount|integer(int32)|false|none|none|
|maxCsAdvantageOnLaneOpponent|number(float)|false|none|none|
|maxLevelLeadLaneOpponent|integer(int32)|false|none|none|
|mostWardsDestroyedOneSweeper|integer(int32)|false|none|none|
|mythicItemUsed|integer(int32)|false|none|none|
|playedChampSelectPosition|integer(int32)|false|none|none|
|soloTurretsLategame|integer(int32)|false|none|none|
|takedownsFirst25Minutes|integer(int32)|false|none|none|
|teleportTakedowns|integer(int32)|false|none|none|
|thirdInhibitorDestroyedTime|number(double)|false|none|none|
|threeWardsOneSweeperCount|integer(int32)|false|none|none|
|visionScoreAdvantageLaneOpponent|number(float)|false|none|none|
|InfernalScalePickup|integer(int32)|false|none|none|
|fistBumpParticipation|integer(int32)|false|none|none|
|voidMonsterKill|integer(int32)|false|none|none|
|abilityUses|integer(int32)|false|none|none|
|acesBefore15Minutes|integer(int32)|false|none|none|
|alliedJungleMonsterKills|number(float)|false|none|none|
|baronTakedowns|integer(int32)|false|none|none|
|blastConeOppositeOpponentCount|integer(int32)|false|none|none|
|bountyGold|number(double)|false|none|none|
|buffsStolen|integer(int32)|false|none|none|
|completeSupportQuestInTime|integer(int32)|false|none|none|
|controlWardsPlaced|integer(int32)|false|none|none|
|damagePerMinute|number(float)|false|none|none|
|damageTakenOnTeamPercentage|number(float)|false|none|none|
|dancedWithRiftHerald|integer(int32)|false|none|none|
|deathsByEnemyChamps|integer(int32)|false|none|none|
|dodgeSkillShotsSmallWindow|integer(int32)|false|none|none|
|doubleAces|integer(int32)|false|none|none|
|dragonTakedowns|integer(int32)|false|none|none|
|legendaryItemUsed|[integer(int32)]|false|none|none|
|effectiveHealAndShielding|number(float)|false|none|none|
|elderDragonKillsWithOpposingSoul|integer(int32)|false|none|none|
|elderDragonMultikills|integer(int32)|false|none|none|
|enemyChampionImmobilizations|integer(int32)|false|none|none|
|enemyJungleMonsterKills|number(float)|false|none|none|
|epicMonsterKillsNearEnemyJungler|integer(int32)|false|none|none|
|epicMonsterKillsWithin30SecondsOfSpawn|integer(int32)|false|none|none|
|epicMonsterSteals|integer(int32)|false|none|none|
|epicMonsterStolenWithoutSmite|integer(int32)|false|none|none|
|firstTurretKilled|number(double)|false|none|none|
|firstTurretKilledTime|number(float)|false|none|none|
|flawlessAces|integer(int32)|false|none|none|
|fullTeamTakedown|integer(int32)|false|none|none|
|gameLength|number(float)|false|none|none|
|getTakedownsInAllLanesEarlyJungleAsLaner|integer(int32)|false|none|none|
|goldPerMinute|number(float)|false|none|none|
|hadOpenNexus|integer(int32)|false|none|none|
|immobilizeAndKillWithAlly|integer(int32)|false|none|none|
|initialBuffCount|integer(int32)|false|none|none|
|initialCrabCount|integer(int32)|false|none|none|
|jungleCsBefore10Minutes|number(float)|false|none|none|
|junglerTakedownsNearDamagedEpicMonster|integer(int32)|false|none|none|
|kda|number(float)|false|none|none|
|killAfterHiddenWithAlly|integer(int32)|false|none|none|
|killedChampTookFullTeamDamageSurvived|integer(int32)|false|none|none|
|killingSprees|integer(int32)|false|none|none|
|killParticipation|number(float)|false|none|none|
|killsNearEnemyTurret|integer(int32)|false|none|none|
|killsOnOtherLanesEarlyJungleAsLaner|integer(int32)|false|none|none|
|killsOnRecentlyHealedByAramPack|integer(int32)|false|none|none|
|killsUnderOwnTurret|integer(int32)|false|none|none|
|killsWithHelpFromEpicMonster|integer(int32)|false|none|none|
|knockEnemyIntoTeamAndKill|integer(int32)|false|none|none|
|kTurretsDestroyedBeforePlatesFall|integer(int32)|false|none|none|
|landSkillShotsEarlyGame|integer(int32)|false|none|none|
|laneMinionsFirst10Minutes|integer(int32)|false|none|none|
|lostAnInhibitor|integer(int32)|false|none|none|
|maxKillDeficit|integer(int32)|false|none|none|
|mejaisFullStackInTime|integer(int32)|false|none|none|
|moreEnemyJungleThanOpponent|number(float)|false|none|none|
|multiKillOneSpell|integer(int32)|false|none|This is an offshoot of the OneStone challenge. The code checks if a spell with the same instance ID does the final point of damage to at least 2 Champions. It doesn't matter if they're enemies, but you cannot hurt your friends.|
|multikills|integer(int32)|false|none|none|
|multikillsAfterAggressiveFlash|integer(int32)|false|none|none|
|multiTurretRiftHeraldCount|integer(int32)|false|none|none|
|outerTurretExecutesBefore10Minutes|integer(int32)|false|none|none|
|outnumberedKills|integer(int32)|false|none|none|
|outnumberedNexusKill|integer(int32)|false|none|none|
|perfectDragonSoulsTaken|integer(int32)|false|none|none|
|perfectGame|integer(int32)|false|none|none|
|pickKillWithAlly|integer(int32)|false|none|none|
|poroExplosions|integer(int32)|false|none|none|
|quickCleanse|integer(int32)|false|none|none|
|quickFirstTurret|integer(int32)|false|none|none|
|quickSoloKills|integer(int32)|false|none|none|
|riftHeraldTakedowns|integer(int32)|false|none|none|
|saveAllyFromDeath|integer(int32)|false|none|none|
|scuttleCrabKills|integer(int32)|false|none|none|
|shortestTimeToAceFromFirstTakedown|number(float)|false|none|none|
|skillshotsDodged|integer(int32)|false|none|none|
|skillshotsHit|integer(int32)|false|none|none|
|snowballsHit|integer(int32)|false|none|none|
|soloBaronKills|integer(int32)|false|none|none|
|SWARM_DefeatAatrox|integer(int32)|false|none|none|
|SWARM_DefeatBriar|integer(int32)|false|none|none|
|SWARM_DefeatMiniBosses|integer(int32)|false|none|none|
|SWARM_EvolveWeapon|integer(int32)|false|none|none|
|SWARM_Have3Passives|integer(int32)|false|none|none|
|SWARM_KillEnemy|integer(int32)|false|none|none|
|SWARM_PickupGold|number(float)|false|none|none|
|SWARM_ReachLevel50|integer(int32)|false|none|none|
|SWARM_Survive15Min|integer(int32)|false|none|none|
|SWARM_WinWith5EvolvedWeapons|integer(int32)|false|none|none|
|soloKills|integer(int32)|false|none|none|
|stealthWardsPlaced|integer(int32)|false|none|none|
|survivedSingleDigitHpCount|integer(int32)|false|none|none|
|survivedThreeImmobilizesInFight|integer(int32)|false|none|none|
|takedownOnFirstTurret|integer(int32)|false|none|none|
|takedowns|integer(int32)|false|none|none|
|takedownsAfterGainingLevelAdvantage|integer(int32)|false|none|none|
|takedownsBeforeJungleMinionSpawn|integer(int32)|false|none|none|
|takedownsFirstXMinutes|integer(int32)|false|none|none|
|takedownsInAlcove|integer(int32)|false|none|none|
|takedownsInEnemyFountain|integer(int32)|false|none|none|
|teamBaronKills|integer(int32)|false|none|none|
|teamDamagePercentage|number(float)|false|none|none|
|teamElderDragonKills|integer(int32)|false|none|none|
|teamRiftHeraldKills|integer(int32)|false|none|none|
|tookLargeDamageSurvived|integer(int32)|false|none|none|
|turretPlatesTaken|integer(int32)|false|none|none|
|turretsTakenWithRiftHerald|integer(int32)|false|none|Any player who damages a tower that is destroyed within 30 seconds of a Rift Herald charge will receive credit. A player who does not damage the tower will not receive credit.|
|turretTakedowns|integer(int32)|false|none|none|
|twentyMinionsIn3SecondsCount|integer(int32)|false|none|none|
|twoWardsOneSweeperCount|integer(int32)|false|none|none|
|unseenRecalls|integer(int32)|false|none|none|
|visionScorePerMinute|number(float)|false|none|none|
|wardsGuarded|integer(int32)|false|none|none|
|wardTakedowns|integer(int32)|false|none|none|
|wardTakedownsBefore20M|integer(int32)|false|none|none|
|HealFromMapSources|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fasterSupportQuestCompletion|0|
|fasterSupportQuestCompletion|1|
|hadAfkTeammate|0|
|hadAfkTeammate|1|
|highestCrowdControlScore|0|
|highestCrowdControlScore|1|
|highestWardKills|0|
|highestWardKills|1|
|laningPhaseGoldExpAdvantage|0|
|laningPhaseGoldExpAdvantage|1|
|playedChampSelectPosition|0|
|playedChampSelectPosition|1|

<h2 id="tocS_match-v5.MissionsDto">match-v5.MissionsDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.missionsdto"></a>
<a id="schema_match-v5.MissionsDto"></a>
<a id="tocSmatch-v5.missionsdto"></a>
<a id="tocsmatch-v5.missionsdto"></a>

```json
{
  "playerScore0": 0,
  "playerScore1": 0,
  "playerScore2": 0,
  "playerScore3": 0,
  "playerScore4": 0,
  "playerScore5": 0,
  "playerScore6": 0,
  "playerScore7": 0,
  "playerScore8": 0,
  "playerScore9": 0,
  "playerScore10": 0,
  "playerScore11": 0
}
```

Missions DTO

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playerScore0|number(float)|false|none|none|
|playerScore1|number(float)|false|none|none|
|playerScore2|number(float)|false|none|none|
|playerScore3|number(float)|false|none|none|
|playerScore4|number(float)|false|none|none|
|playerScore5|number(float)|false|none|none|
|playerScore6|number(float)|false|none|none|
|playerScore7|number(float)|false|none|none|
|playerScore8|number(float)|false|none|none|
|playerScore9|number(float)|false|none|none|
|playerScore10|number(float)|false|none|none|
|playerScore11|number(float)|false|none|none|

<h2 id="tocS_match-v5.PerksDto">match-v5.PerksDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.perksdto"></a>
<a id="schema_match-v5.PerksDto"></a>
<a id="tocSmatch-v5.perksdto"></a>
<a id="tocsmatch-v5.perksdto"></a>

```json
{
  "statPerks": {
    "defense": 0,
    "flex": 0,
    "offense": 0
  },
  "styles": [
    {
      "description": "string",
      "selections": [
        {
          "perk": 0,
          "var1": 0,
          "var2": 0,
          "var3": 0
        }
      ],
      "style": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statPerks|[match-v5.PerkStatsDto](#schemamatch-v5.perkstatsdto)|true|none|none|
|styles|[[match-v5.PerkStyleDto](#schemamatch-v5.perkstyledto)]|true|none|none|

<h2 id="tocS_match-v5.PerkStatsDto">match-v5.PerkStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.perkstatsdto"></a>
<a id="schema_match-v5.PerkStatsDto"></a>
<a id="tocSmatch-v5.perkstatsdto"></a>
<a id="tocsmatch-v5.perkstatsdto"></a>

```json
{
  "defense": 0,
  "flex": 0,
  "offense": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defense|integer(int32)|true|none|none|
|flex|integer(int32)|true|none|none|
|offense|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.PerkStyleDto">match-v5.PerkStyleDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.perkstyledto"></a>
<a id="schema_match-v5.PerkStyleDto"></a>
<a id="tocSmatch-v5.perkstyledto"></a>
<a id="tocsmatch-v5.perkstyledto"></a>

```json
{
  "description": "string",
  "selections": [
    {
      "perk": 0,
      "var1": 0,
      "var2": 0,
      "var3": 0
    }
  ],
  "style": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|selections|[[match-v5.PerkStyleSelectionDto](#schemamatch-v5.perkstyleselectiondto)]|true|none|none|
|style|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.PerkStyleSelectionDto">match-v5.PerkStyleSelectionDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.perkstyleselectiondto"></a>
<a id="schema_match-v5.PerkStyleSelectionDto"></a>
<a id="tocSmatch-v5.perkstyleselectiondto"></a>
<a id="tocsmatch-v5.perkstyleselectiondto"></a>

```json
{
  "perk": 0,
  "var1": 0,
  "var2": 0,
  "var3": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perk|integer(int32)|true|none|none|
|var1|integer(int32)|true|none|none|
|var2|integer(int32)|true|none|none|
|var3|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.TeamDto">match-v5.TeamDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.teamdto"></a>
<a id="schema_match-v5.TeamDto"></a>
<a id="tocSmatch-v5.teamdto"></a>
<a id="tocsmatch-v5.teamdto"></a>

```json
{
  "bans": [
    {
      "championId": 0,
      "pickTurn": 0
    }
  ],
  "objectives": {
    "baron": {
      "first": true,
      "kills": 0
    },
    "champion": {
      "first": true,
      "kills": 0
    },
    "dragon": {
      "first": true,
      "kills": 0
    },
    "horde": {
      "first": true,
      "kills": 0
    },
    "inhibitor": {
      "first": true,
      "kills": 0
    },
    "riftHerald": {
      "first": true,
      "kills": 0
    },
    "tower": {
      "first": true,
      "kills": 0
    },
    "atakhan": {
      "first": true,
      "kills": 0
    }
  },
  "teamId": 0,
  "win": true,
  "feats": {
    "EPIC_MONSTER_KILL": {
      "featState": 0
    },
    "FIRST_BLOOD": {
      "featState": 0
    },
    "FIRST_TURRET": {
      "featState": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bans|[[match-v5.BanDto](#schemamatch-v5.bandto)]|true|none|none|
|objectives|[match-v5.ObjectivesDto](#schemamatch-v5.objectivesdto)|true|none|none|
|teamId|integer(int32)|true|none|none|
|win|boolean|true|none|none|
|feats|[match-v5.FeatsDto](#schemamatch-v5.featsdto)|false|none|none|

<h2 id="tocS_match-v5.BanDto">match-v5.BanDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.bandto"></a>
<a id="schema_match-v5.BanDto"></a>
<a id="tocSmatch-v5.bandto"></a>
<a id="tocsmatch-v5.bandto"></a>

```json
{
  "championId": 0,
  "pickTurn": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|championId|integer(int32)|true|none|none|
|pickTurn|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.ObjectivesDto">match-v5.ObjectivesDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.objectivesdto"></a>
<a id="schema_match-v5.ObjectivesDto"></a>
<a id="tocSmatch-v5.objectivesdto"></a>
<a id="tocsmatch-v5.objectivesdto"></a>

```json
{
  "baron": {
    "first": true,
    "kills": 0
  },
  "champion": {
    "first": true,
    "kills": 0
  },
  "dragon": {
    "first": true,
    "kills": 0
  },
  "horde": {
    "first": true,
    "kills": 0
  },
  "inhibitor": {
    "first": true,
    "kills": 0
  },
  "riftHerald": {
    "first": true,
    "kills": 0
  },
  "tower": {
    "first": true,
    "kills": 0
  },
  "atakhan": {
    "first": true,
    "kills": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baron|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|true|none|none|
|champion|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|true|none|none|
|dragon|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|true|none|none|
|horde|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|false|none|none|
|inhibitor|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|true|none|none|
|riftHerald|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|true|none|none|
|tower|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|true|none|none|
|atakhan|[match-v5.ObjectiveDto](#schemamatch-v5.objectivedto)|false|none|none|

<h2 id="tocS_match-v5.ObjectiveDto">match-v5.ObjectiveDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.objectivedto"></a>
<a id="schema_match-v5.ObjectiveDto"></a>
<a id="tocSmatch-v5.objectivedto"></a>
<a id="tocsmatch-v5.objectivedto"></a>

```json
{
  "first": true,
  "kills": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|boolean|true|none|none|
|kills|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.TimelineDto">match-v5.TimelineDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.timelinedto"></a>
<a id="schema_match-v5.TimelineDto"></a>
<a id="tocSmatch-v5.timelinedto"></a>
<a id="tocsmatch-v5.timelinedto"></a>

```json
{
  "metadata": {
    "dataVersion": "string",
    "matchId": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "frameInterval": 0,
    "gameId": 0,
    "participants": [
      {
        "participantId": 0,
        "puuid": "string"
      }
    ],
    "frames": [
      {
        "events": [
          {
            "timestamp": 0,
            "realTimestamp": 0,
            "type": "string",
            "itemId": 0,
            "participantId": 0,
            "levelUpType": "string",
            "skillSlot": 0,
            "creatorId": 0,
            "wardType": "string",
            "level": 0,
            "assistingParticipantIds": [
              0
            ],
            "bounty": 0,
            "killStreakLength": 0,
            "killerId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "victimDamageDealt": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimDamageReceived": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimId": 0,
            "killType": "string",
            "laneType": "string",
            "teamId": 0,
            "multiKillLength": 0,
            "killerTeamId": 0,
            "monsterType": "string",
            "monsterSubType": "string",
            "buildingType": "string",
            "towerType": "string",
            "afterId": 0,
            "beforeId": 0,
            "goldGain": 0,
            "gameId": 0,
            "winningTeam": 0,
            "transformType": "string",
            "name": "string",
            "shutdownBounty": 0,
            "actualStartTime": 0,
            "featType": 0,
            "featValue": 0,
            "victimTeamfightDamageDealt": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ],
            "victimTeamfightDamageReceived": [
              {
                "basic": true,
                "magicDamage": 0,
                "name": "string",
                "participantId": 0,
                "physicalDamage": 0,
                "spellName": "string",
                "spellSlot": 0,
                "trueDamage": 0,
                "type": "string"
              }
            ]
          }
        ],
        "participantFrames": {
          "property1": {
            "championStats": {
              "abilityHaste": 0,
              "abilityPower": 0,
              "armor": 0,
              "armorPen": 0,
              "armorPenPercent": 0,
              "attackDamage": 0,
              "attackSpeed": 0,
              "bonusArmorPenPercent": 0,
              "bonusMagicPenPercent": 0,
              "ccReduction": 0,
              "cooldownReduction": 0,
              "health": 0,
              "healthMax": 0,
              "healthRegen": 0,
              "lifesteal": 0,
              "magicPen": 0,
              "magicPenPercent": 0,
              "magicResist": 0,
              "movementSpeed": 0,
              "omnivamp": 0,
              "physicalVamp": 0,
              "power": 0,
              "powerMax": 0,
              "powerRegen": 0,
              "spellVamp": 0
            },
            "currentGold": 0,
            "damageStats": {
              "magicDamageDone": 0,
              "magicDamageDoneToChampions": 0,
              "magicDamageTaken": 0,
              "physicalDamageDone": 0,
              "physicalDamageDoneToChampions": 0,
              "physicalDamageTaken": 0,
              "totalDamageDone": 0,
              "totalDamageDoneToChampions": 0,
              "totalDamageTaken": 0,
              "trueDamageDone": 0,
              "trueDamageDoneToChampions": 0,
              "trueDamageTaken": 0
            },
            "goldPerSecond": 0,
            "jungleMinionsKilled": 0,
            "level": 0,
            "minionsKilled": 0,
            "participantId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "timeEnemySpentControlled": 0,
            "totalGold": 0,
            "xp": 0
          },
          "property2": {
            "championStats": {
              "abilityHaste": 0,
              "abilityPower": 0,
              "armor": 0,
              "armorPen": 0,
              "armorPenPercent": 0,
              "attackDamage": 0,
              "attackSpeed": 0,
              "bonusArmorPenPercent": 0,
              "bonusMagicPenPercent": 0,
              "ccReduction": 0,
              "cooldownReduction": 0,
              "health": 0,
              "healthMax": 0,
              "healthRegen": 0,
              "lifesteal": 0,
              "magicPen": 0,
              "magicPenPercent": 0,
              "magicResist": 0,
              "movementSpeed": 0,
              "omnivamp": 0,
              "physicalVamp": 0,
              "power": 0,
              "powerMax": 0,
              "powerRegen": 0,
              "spellVamp": 0
            },
            "currentGold": 0,
            "damageStats": {
              "magicDamageDone": 0,
              "magicDamageDoneToChampions": 0,
              "magicDamageTaken": 0,
              "physicalDamageDone": 0,
              "physicalDamageDoneToChampions": 0,
              "physicalDamageTaken": 0,
              "totalDamageDone": 0,
              "totalDamageDoneToChampions": 0,
              "totalDamageTaken": 0,
              "trueDamageDone": 0,
              "trueDamageDoneToChampions": 0,
              "trueDamageTaken": 0
            },
            "goldPerSecond": 0,
            "jungleMinionsKilled": 0,
            "level": 0,
            "minionsKilled": 0,
            "participantId": 0,
            "position": {
              "x": 0,
              "y": 0
            },
            "timeEnemySpentControlled": 0,
            "totalGold": 0,
            "xp": 0
          }
        },
        "timestamp": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[match-v5.MetadataTimeLineDto](#schemamatch-v5.metadatatimelinedto)|true|none|Match metadata.|
|info|[match-v5.InfoTimeLineDto](#schemamatch-v5.infotimelinedto)|true|none|Match info.|

<h2 id="tocS_match-v5.MetadataTimeLineDto">match-v5.MetadataTimeLineDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.metadatatimelinedto"></a>
<a id="schema_match-v5.MetadataTimeLineDto"></a>
<a id="tocSmatch-v5.metadatatimelinedto"></a>
<a id="tocsmatch-v5.metadatatimelinedto"></a>

```json
{
  "dataVersion": "string",
  "matchId": "string",
  "participants": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataVersion|string|true|none|Match data version.|
|matchId|string|true|none|Match id.|
|participants|[string]|true|none|A list of participant PUUIDs.|

<h2 id="tocS_match-v5.InfoTimeLineDto">match-v5.InfoTimeLineDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.infotimelinedto"></a>
<a id="schema_match-v5.InfoTimeLineDto"></a>
<a id="tocSmatch-v5.infotimelinedto"></a>
<a id="tocsmatch-v5.infotimelinedto"></a>

```json
{
  "endOfGameResult": "string",
  "frameInterval": 0,
  "gameId": 0,
  "participants": [
    {
      "participantId": 0,
      "puuid": "string"
    }
  ],
  "frames": [
    {
      "events": [
        {
          "timestamp": 0,
          "realTimestamp": 0,
          "type": "string",
          "itemId": 0,
          "participantId": 0,
          "levelUpType": "string",
          "skillSlot": 0,
          "creatorId": 0,
          "wardType": "string",
          "level": 0,
          "assistingParticipantIds": [
            0
          ],
          "bounty": 0,
          "killStreakLength": 0,
          "killerId": 0,
          "position": {
            "x": 0,
            "y": 0
          },
          "victimDamageDealt": [
            {
              "basic": true,
              "magicDamage": 0,
              "name": "string",
              "participantId": 0,
              "physicalDamage": 0,
              "spellName": "string",
              "spellSlot": 0,
              "trueDamage": 0,
              "type": "string"
            }
          ],
          "victimDamageReceived": [
            {
              "basic": true,
              "magicDamage": 0,
              "name": "string",
              "participantId": 0,
              "physicalDamage": 0,
              "spellName": "string",
              "spellSlot": 0,
              "trueDamage": 0,
              "type": "string"
            }
          ],
          "victimId": 0,
          "killType": "string",
          "laneType": "string",
          "teamId": 0,
          "multiKillLength": 0,
          "killerTeamId": 0,
          "monsterType": "string",
          "monsterSubType": "string",
          "buildingType": "string",
          "towerType": "string",
          "afterId": 0,
          "beforeId": 0,
          "goldGain": 0,
          "gameId": 0,
          "winningTeam": 0,
          "transformType": "string",
          "name": "string",
          "shutdownBounty": 0,
          "actualStartTime": 0,
          "featType": 0,
          "featValue": 0,
          "victimTeamfightDamageDealt": [
            {
              "basic": true,
              "magicDamage": 0,
              "name": "string",
              "participantId": 0,
              "physicalDamage": 0,
              "spellName": "string",
              "spellSlot": 0,
              "trueDamage": 0,
              "type": "string"
            }
          ],
          "victimTeamfightDamageReceived": [
            {
              "basic": true,
              "magicDamage": 0,
              "name": "string",
              "participantId": 0,
              "physicalDamage": 0,
              "spellName": "string",
              "spellSlot": 0,
              "trueDamage": 0,
              "type": "string"
            }
          ]
        }
      ],
      "participantFrames": {
        "property1": {
          "championStats": {
            "abilityHaste": 0,
            "abilityPower": 0,
            "armor": 0,
            "armorPen": 0,
            "armorPenPercent": 0,
            "attackDamage": 0,
            "attackSpeed": 0,
            "bonusArmorPenPercent": 0,
            "bonusMagicPenPercent": 0,
            "ccReduction": 0,
            "cooldownReduction": 0,
            "health": 0,
            "healthMax": 0,
            "healthRegen": 0,
            "lifesteal": 0,
            "magicPen": 0,
            "magicPenPercent": 0,
            "magicResist": 0,
            "movementSpeed": 0,
            "omnivamp": 0,
            "physicalVamp": 0,
            "power": 0,
            "powerMax": 0,
            "powerRegen": 0,
            "spellVamp": 0
          },
          "currentGold": 0,
          "damageStats": {
            "magicDamageDone": 0,
            "magicDamageDoneToChampions": 0,
            "magicDamageTaken": 0,
            "physicalDamageDone": 0,
            "physicalDamageDoneToChampions": 0,
            "physicalDamageTaken": 0,
            "totalDamageDone": 0,
            "totalDamageDoneToChampions": 0,
            "totalDamageTaken": 0,
            "trueDamageDone": 0,
            "trueDamageDoneToChampions": 0,
            "trueDamageTaken": 0
          },
          "goldPerSecond": 0,
          "jungleMinionsKilled": 0,
          "level": 0,
          "minionsKilled": 0,
          "participantId": 0,
          "position": {
            "x": 0,
            "y": 0
          },
          "timeEnemySpentControlled": 0,
          "totalGold": 0,
          "xp": 0
        },
        "property2": {
          "championStats": {
            "abilityHaste": 0,
            "abilityPower": 0,
            "armor": 0,
            "armorPen": 0,
            "armorPenPercent": 0,
            "attackDamage": 0,
            "attackSpeed": 0,
            "bonusArmorPenPercent": 0,
            "bonusMagicPenPercent": 0,
            "ccReduction": 0,
            "cooldownReduction": 0,
            "health": 0,
            "healthMax": 0,
            "healthRegen": 0,
            "lifesteal": 0,
            "magicPen": 0,
            "magicPenPercent": 0,
            "magicResist": 0,
            "movementSpeed": 0,
            "omnivamp": 0,
            "physicalVamp": 0,
            "power": 0,
            "powerMax": 0,
            "powerRegen": 0,
            "spellVamp": 0
          },
          "currentGold": 0,
          "damageStats": {
            "magicDamageDone": 0,
            "magicDamageDoneToChampions": 0,
            "magicDamageTaken": 0,
            "physicalDamageDone": 0,
            "physicalDamageDoneToChampions": 0,
            "physicalDamageTaken": 0,
            "totalDamageDone": 0,
            "totalDamageDoneToChampions": 0,
            "totalDamageTaken": 0,
            "trueDamageDone": 0,
            "trueDamageDoneToChampions": 0,
            "trueDamageTaken": 0
          },
          "goldPerSecond": 0,
          "jungleMinionsKilled": 0,
          "level": 0,
          "minionsKilled": 0,
          "participantId": 0,
          "position": {
            "x": 0,
            "y": 0
          },
          "timeEnemySpentControlled": 0,
          "totalGold": 0,
          "xp": 0
        }
      },
      "timestamp": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endOfGameResult|string|false|none|Refer to indicate if the game ended in termination.|
|frameInterval|integer(int64)|true|none|none|
|gameId|integer(int64)|false|none|none|
|participants|[[match-v5.ParticipantTimeLineDto](#schemamatch-v5.participanttimelinedto)]|false|none|none|
|frames|[[match-v5.FramesTimeLineDto](#schemamatch-v5.framestimelinedto)]|true|none|none|

<h2 id="tocS_match-v5.ParticipantTimeLineDto">match-v5.ParticipantTimeLineDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.participanttimelinedto"></a>
<a id="schema_match-v5.ParticipantTimeLineDto"></a>
<a id="tocSmatch-v5.participanttimelinedto"></a>
<a id="tocsmatch-v5.participanttimelinedto"></a>

```json
{
  "participantId": 0,
  "puuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|participantId|integer(int32)|true|none|none|
|puuid|string|true|none|none|

<h2 id="tocS_match-v5.FramesTimeLineDto">match-v5.FramesTimeLineDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.framestimelinedto"></a>
<a id="schema_match-v5.FramesTimeLineDto"></a>
<a id="tocSmatch-v5.framestimelinedto"></a>
<a id="tocsmatch-v5.framestimelinedto"></a>

```json
{
  "events": [
    {
      "timestamp": 0,
      "realTimestamp": 0,
      "type": "string",
      "itemId": 0,
      "participantId": 0,
      "levelUpType": "string",
      "skillSlot": 0,
      "creatorId": 0,
      "wardType": "string",
      "level": 0,
      "assistingParticipantIds": [
        0
      ],
      "bounty": 0,
      "killStreakLength": 0,
      "killerId": 0,
      "position": {
        "x": 0,
        "y": 0
      },
      "victimDamageDealt": [
        {
          "basic": true,
          "magicDamage": 0,
          "name": "string",
          "participantId": 0,
          "physicalDamage": 0,
          "spellName": "string",
          "spellSlot": 0,
          "trueDamage": 0,
          "type": "string"
        }
      ],
      "victimDamageReceived": [
        {
          "basic": true,
          "magicDamage": 0,
          "name": "string",
          "participantId": 0,
          "physicalDamage": 0,
          "spellName": "string",
          "spellSlot": 0,
          "trueDamage": 0,
          "type": "string"
        }
      ],
      "victimId": 0,
      "killType": "string",
      "laneType": "string",
      "teamId": 0,
      "multiKillLength": 0,
      "killerTeamId": 0,
      "monsterType": "string",
      "monsterSubType": "string",
      "buildingType": "string",
      "towerType": "string",
      "afterId": 0,
      "beforeId": 0,
      "goldGain": 0,
      "gameId": 0,
      "winningTeam": 0,
      "transformType": "string",
      "name": "string",
      "shutdownBounty": 0,
      "actualStartTime": 0,
      "featType": 0,
      "featValue": 0,
      "victimTeamfightDamageDealt": [
        {
          "basic": true,
          "magicDamage": 0,
          "name": "string",
          "participantId": 0,
          "physicalDamage": 0,
          "spellName": "string",
          "spellSlot": 0,
          "trueDamage": 0,
          "type": "string"
        }
      ],
      "victimTeamfightDamageReceived": [
        {
          "basic": true,
          "magicDamage": 0,
          "name": "string",
          "participantId": 0,
          "physicalDamage": 0,
          "spellName": "string",
          "spellSlot": 0,
          "trueDamage": 0,
          "type": "string"
        }
      ]
    }
  ],
  "participantFrames": {
    "property1": {
      "championStats": {
        "abilityHaste": 0,
        "abilityPower": 0,
        "armor": 0,
        "armorPen": 0,
        "armorPenPercent": 0,
        "attackDamage": 0,
        "attackSpeed": 0,
        "bonusArmorPenPercent": 0,
        "bonusMagicPenPercent": 0,
        "ccReduction": 0,
        "cooldownReduction": 0,
        "health": 0,
        "healthMax": 0,
        "healthRegen": 0,
        "lifesteal": 0,
        "magicPen": 0,
        "magicPenPercent": 0,
        "magicResist": 0,
        "movementSpeed": 0,
        "omnivamp": 0,
        "physicalVamp": 0,
        "power": 0,
        "powerMax": 0,
        "powerRegen": 0,
        "spellVamp": 0
      },
      "currentGold": 0,
      "damageStats": {
        "magicDamageDone": 0,
        "magicDamageDoneToChampions": 0,
        "magicDamageTaken": 0,
        "physicalDamageDone": 0,
        "physicalDamageDoneToChampions": 0,
        "physicalDamageTaken": 0,
        "totalDamageDone": 0,
        "totalDamageDoneToChampions": 0,
        "totalDamageTaken": 0,
        "trueDamageDone": 0,
        "trueDamageDoneToChampions": 0,
        "trueDamageTaken": 0
      },
      "goldPerSecond": 0,
      "jungleMinionsKilled": 0,
      "level": 0,
      "minionsKilled": 0,
      "participantId": 0,
      "position": {
        "x": 0,
        "y": 0
      },
      "timeEnemySpentControlled": 0,
      "totalGold": 0,
      "xp": 0
    },
    "property2": {
      "championStats": {
        "abilityHaste": 0,
        "abilityPower": 0,
        "armor": 0,
        "armorPen": 0,
        "armorPenPercent": 0,
        "attackDamage": 0,
        "attackSpeed": 0,
        "bonusArmorPenPercent": 0,
        "bonusMagicPenPercent": 0,
        "ccReduction": 0,
        "cooldownReduction": 0,
        "health": 0,
        "healthMax": 0,
        "healthRegen": 0,
        "lifesteal": 0,
        "magicPen": 0,
        "magicPenPercent": 0,
        "magicResist": 0,
        "movementSpeed": 0,
        "omnivamp": 0,
        "physicalVamp": 0,
        "power": 0,
        "powerMax": 0,
        "powerRegen": 0,
        "spellVamp": 0
      },
      "currentGold": 0,
      "damageStats": {
        "magicDamageDone": 0,
        "magicDamageDoneToChampions": 0,
        "magicDamageTaken": 0,
        "physicalDamageDone": 0,
        "physicalDamageDoneToChampions": 0,
        "physicalDamageTaken": 0,
        "totalDamageDone": 0,
        "totalDamageDoneToChampions": 0,
        "totalDamageTaken": 0,
        "trueDamageDone": 0,
        "trueDamageDoneToChampions": 0,
        "trueDamageTaken": 0
      },
      "goldPerSecond": 0,
      "jungleMinionsKilled": 0,
      "level": 0,
      "minionsKilled": 0,
      "participantId": 0,
      "position": {
        "x": 0,
        "y": 0
      },
      "timeEnemySpentControlled": 0,
      "totalGold": 0,
      "xp": 0
    }
  },
  "timestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[match-v5.EventsTimeLineDto](#schemamatch-v5.eventstimelinedto)]|true|none|none|
|participantFrames|object|false|none|none|
|timestamp|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.EventsTimeLineDto">match-v5.EventsTimeLineDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.eventstimelinedto"></a>
<a id="schema_match-v5.EventsTimeLineDto"></a>
<a id="tocSmatch-v5.eventstimelinedto"></a>
<a id="tocsmatch-v5.eventstimelinedto"></a>

```json
{
  "timestamp": 0,
  "realTimestamp": 0,
  "type": "string",
  "itemId": 0,
  "participantId": 0,
  "levelUpType": "string",
  "skillSlot": 0,
  "creatorId": 0,
  "wardType": "string",
  "level": 0,
  "assistingParticipantIds": [
    0
  ],
  "bounty": 0,
  "killStreakLength": 0,
  "killerId": 0,
  "position": {
    "x": 0,
    "y": 0
  },
  "victimDamageDealt": [
    {
      "basic": true,
      "magicDamage": 0,
      "name": "string",
      "participantId": 0,
      "physicalDamage": 0,
      "spellName": "string",
      "spellSlot": 0,
      "trueDamage": 0,
      "type": "string"
    }
  ],
  "victimDamageReceived": [
    {
      "basic": true,
      "magicDamage": 0,
      "name": "string",
      "participantId": 0,
      "physicalDamage": 0,
      "spellName": "string",
      "spellSlot": 0,
      "trueDamage": 0,
      "type": "string"
    }
  ],
  "victimId": 0,
  "killType": "string",
  "laneType": "string",
  "teamId": 0,
  "multiKillLength": 0,
  "killerTeamId": 0,
  "monsterType": "string",
  "monsterSubType": "string",
  "buildingType": "string",
  "towerType": "string",
  "afterId": 0,
  "beforeId": 0,
  "goldGain": 0,
  "gameId": 0,
  "winningTeam": 0,
  "transformType": "string",
  "name": "string",
  "shutdownBounty": 0,
  "actualStartTime": 0,
  "featType": 0,
  "featValue": 0,
  "victimTeamfightDamageDealt": [
    {
      "basic": true,
      "magicDamage": 0,
      "name": "string",
      "participantId": 0,
      "physicalDamage": 0,
      "spellName": "string",
      "spellSlot": 0,
      "trueDamage": 0,
      "type": "string"
    }
  ],
  "victimTeamfightDamageReceived": [
    {
      "basic": true,
      "magicDamage": 0,
      "name": "string",
      "participantId": 0,
      "physicalDamage": 0,
      "spellName": "string",
      "spellSlot": 0,
      "trueDamage": 0,
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|integer(int64)|true|none|none|
|realTimestamp|integer(int64)|false|none|none|
|type|string|true|none|none|
|itemId|integer(int32)|false|none|none|
|participantId|integer(int32)|false|none|none|
|levelUpType|string|false|none|none|
|skillSlot|integer(int32)|false|none|none|
|creatorId|integer(int32)|false|none|none|
|wardType|string|false|none|none|
|level|integer(int32)|false|none|none|
|assistingParticipantIds|[integer(int32)]|false|none|none|
|bounty|integer(int32)|false|none|none|
|killStreakLength|integer(int32)|false|none|none|
|killerId|integer(int32)|false|none|none|
|position|[match-v5.PositionDto](#schemamatch-v5.positiondto)|false|none|none|
|victimDamageDealt|[[match-v5.MatchTimelineVictimDamage](#schemamatch-v5.matchtimelinevictimdamage)]|false|none|none|
|victimDamageReceived|[[match-v5.MatchTimelineVictimDamage](#schemamatch-v5.matchtimelinevictimdamage)]|false|none|none|
|victimId|integer(int32)|false|none|none|
|killType|string|false|none|none|
|laneType|string|false|none|none|
|teamId|integer(int32)|false|none|none|
|multiKillLength|integer(int32)|false|none|none|
|killerTeamId|integer(int32)|false|none|none|
|monsterType|string|false|none|none|
|monsterSubType|string|false|none|none|
|buildingType|string|false|none|none|
|towerType|string|false|none|none|
|afterId|integer(int32)|false|none|none|
|beforeId|integer(int32)|false|none|none|
|goldGain|integer(int32)|false|none|none|
|gameId|integer(int64)|false|none|none|
|winningTeam|integer(int32)|false|none|none|
|transformType|string|false|none|none|
|name|string|false|none|none|
|shutdownBounty|integer(int32)|false|none|none|
|actualStartTime|integer(int64)|false|none|none|
|featType|integer(int32)|false|none|none|
|featValue|integer(int32)|false|none|none|
|victimTeamfightDamageDealt|[[match-v5.MatchTimelineVictimDamage](#schemamatch-v5.matchtimelinevictimdamage)]|false|none|none|
|victimTeamfightDamageReceived|[[match-v5.MatchTimelineVictimDamage](#schemamatch-v5.matchtimelinevictimdamage)]|false|none|none|

<h2 id="tocS_match-v5.ParticipantFramesDto">match-v5.ParticipantFramesDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.participantframesdto"></a>
<a id="schema_match-v5.ParticipantFramesDto"></a>
<a id="tocSmatch-v5.participantframesdto"></a>
<a id="tocsmatch-v5.participantframesdto"></a>

```json
{
  "1-9": {
    "championStats": {
      "abilityHaste": 0,
      "abilityPower": 0,
      "armor": 0,
      "armorPen": 0,
      "armorPenPercent": 0,
      "attackDamage": 0,
      "attackSpeed": 0,
      "bonusArmorPenPercent": 0,
      "bonusMagicPenPercent": 0,
      "ccReduction": 0,
      "cooldownReduction": 0,
      "health": 0,
      "healthMax": 0,
      "healthRegen": 0,
      "lifesteal": 0,
      "magicPen": 0,
      "magicPenPercent": 0,
      "magicResist": 0,
      "movementSpeed": 0,
      "omnivamp": 0,
      "physicalVamp": 0,
      "power": 0,
      "powerMax": 0,
      "powerRegen": 0,
      "spellVamp": 0
    },
    "currentGold": 0,
    "damageStats": {
      "magicDamageDone": 0,
      "magicDamageDoneToChampions": 0,
      "magicDamageTaken": 0,
      "physicalDamageDone": 0,
      "physicalDamageDoneToChampions": 0,
      "physicalDamageTaken": 0,
      "totalDamageDone": 0,
      "totalDamageDoneToChampions": 0,
      "totalDamageTaken": 0,
      "trueDamageDone": 0,
      "trueDamageDoneToChampions": 0,
      "trueDamageTaken": 0
    },
    "goldPerSecond": 0,
    "jungleMinionsKilled": 0,
    "level": 0,
    "minionsKilled": 0,
    "participantId": 0,
    "position": {
      "x": 0,
      "y": 0
    },
    "timeEnemySpentControlled": 0,
    "totalGold": 0,
    "xp": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|1-9|[match-v5.ParticipantFrameDto](#schemamatch-v5.participantframedto)|true|none|Key value mapping for each participant|

<h2 id="tocS_match-v5.ParticipantFrameDto">match-v5.ParticipantFrameDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.participantframedto"></a>
<a id="schema_match-v5.ParticipantFrameDto"></a>
<a id="tocSmatch-v5.participantframedto"></a>
<a id="tocsmatch-v5.participantframedto"></a>

```json
{
  "championStats": {
    "abilityHaste": 0,
    "abilityPower": 0,
    "armor": 0,
    "armorPen": 0,
    "armorPenPercent": 0,
    "attackDamage": 0,
    "attackSpeed": 0,
    "bonusArmorPenPercent": 0,
    "bonusMagicPenPercent": 0,
    "ccReduction": 0,
    "cooldownReduction": 0,
    "health": 0,
    "healthMax": 0,
    "healthRegen": 0,
    "lifesteal": 0,
    "magicPen": 0,
    "magicPenPercent": 0,
    "magicResist": 0,
    "movementSpeed": 0,
    "omnivamp": 0,
    "physicalVamp": 0,
    "power": 0,
    "powerMax": 0,
    "powerRegen": 0,
    "spellVamp": 0
  },
  "currentGold": 0,
  "damageStats": {
    "magicDamageDone": 0,
    "magicDamageDoneToChampions": 0,
    "magicDamageTaken": 0,
    "physicalDamageDone": 0,
    "physicalDamageDoneToChampions": 0,
    "physicalDamageTaken": 0,
    "totalDamageDone": 0,
    "totalDamageDoneToChampions": 0,
    "totalDamageTaken": 0,
    "trueDamageDone": 0,
    "trueDamageDoneToChampions": 0,
    "trueDamageTaken": 0
  },
  "goldPerSecond": 0,
  "jungleMinionsKilled": 0,
  "level": 0,
  "minionsKilled": 0,
  "participantId": 0,
  "position": {
    "x": 0,
    "y": 0
  },
  "timeEnemySpentControlled": 0,
  "totalGold": 0,
  "xp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|championStats|[match-v5.ChampionStatsDto](#schemamatch-v5.championstatsdto)|true|none|none|
|currentGold|integer(int32)|true|none|none|
|damageStats|[match-v5.DamageStatsDto](#schemamatch-v5.damagestatsdto)|true|none|none|
|goldPerSecond|integer(int32)|true|none|none|
|jungleMinionsKilled|integer(int32)|true|none|none|
|level|integer(int32)|true|none|none|
|minionsKilled|integer(int32)|true|none|none|
|participantId|integer(int32)|true|none|none|
|position|[match-v5.PositionDto](#schemamatch-v5.positiondto)|true|none|none|
|timeEnemySpentControlled|integer(int32)|true|none|none|
|totalGold|integer(int32)|true|none|none|
|xp|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.ChampionStatsDto">match-v5.ChampionStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.championstatsdto"></a>
<a id="schema_match-v5.ChampionStatsDto"></a>
<a id="tocSmatch-v5.championstatsdto"></a>
<a id="tocsmatch-v5.championstatsdto"></a>

```json
{
  "abilityHaste": 0,
  "abilityPower": 0,
  "armor": 0,
  "armorPen": 0,
  "armorPenPercent": 0,
  "attackDamage": 0,
  "attackSpeed": 0,
  "bonusArmorPenPercent": 0,
  "bonusMagicPenPercent": 0,
  "ccReduction": 0,
  "cooldownReduction": 0,
  "health": 0,
  "healthMax": 0,
  "healthRegen": 0,
  "lifesteal": 0,
  "magicPen": 0,
  "magicPenPercent": 0,
  "magicResist": 0,
  "movementSpeed": 0,
  "omnivamp": 0,
  "physicalVamp": 0,
  "power": 0,
  "powerMax": 0,
  "powerRegen": 0,
  "spellVamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abilityHaste|integer(int32)|false|none|none|
|abilityPower|integer(int32)|true|none|none|
|armor|integer(int32)|true|none|none|
|armorPen|integer(int32)|true|none|none|
|armorPenPercent|integer(int32)|true|none|none|
|attackDamage|integer(int32)|true|none|none|
|attackSpeed|integer(int32)|true|none|none|
|bonusArmorPenPercent|integer(int32)|true|none|none|
|bonusMagicPenPercent|integer(int32)|true|none|none|
|ccReduction|integer(int32)|true|none|none|
|cooldownReduction|integer(int32)|true|none|none|
|health|integer(int32)|true|none|none|
|healthMax|integer(int32)|true|none|none|
|healthRegen|integer(int32)|true|none|none|
|lifesteal|integer(int32)|true|none|none|
|magicPen|integer(int32)|true|none|none|
|magicPenPercent|integer(int32)|true|none|none|
|magicResist|integer(int32)|true|none|none|
|movementSpeed|integer(int32)|true|none|none|
|omnivamp|integer(int32)|false|none|none|
|physicalVamp|integer(int32)|false|none|none|
|power|integer(int32)|true|none|none|
|powerMax|integer(int32)|true|none|none|
|powerRegen|integer(int32)|true|none|none|
|spellVamp|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.DamageStatsDto">match-v5.DamageStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.damagestatsdto"></a>
<a id="schema_match-v5.DamageStatsDto"></a>
<a id="tocSmatch-v5.damagestatsdto"></a>
<a id="tocsmatch-v5.damagestatsdto"></a>

```json
{
  "magicDamageDone": 0,
  "magicDamageDoneToChampions": 0,
  "magicDamageTaken": 0,
  "physicalDamageDone": 0,
  "physicalDamageDoneToChampions": 0,
  "physicalDamageTaken": 0,
  "totalDamageDone": 0,
  "totalDamageDoneToChampions": 0,
  "totalDamageTaken": 0,
  "trueDamageDone": 0,
  "trueDamageDoneToChampions": 0,
  "trueDamageTaken": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magicDamageDone|integer(int32)|true|none|none|
|magicDamageDoneToChampions|integer(int32)|true|none|none|
|magicDamageTaken|integer(int32)|true|none|none|
|physicalDamageDone|integer(int32)|true|none|none|
|physicalDamageDoneToChampions|integer(int32)|true|none|none|
|physicalDamageTaken|integer(int32)|true|none|none|
|totalDamageDone|integer(int32)|true|none|none|
|totalDamageDoneToChampions|integer(int32)|true|none|none|
|totalDamageTaken|integer(int32)|true|none|none|
|trueDamageDone|integer(int32)|true|none|none|
|trueDamageDoneToChampions|integer(int32)|true|none|none|
|trueDamageTaken|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.PositionDto">match-v5.PositionDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.positiondto"></a>
<a id="schema_match-v5.PositionDto"></a>
<a id="tocSmatch-v5.positiondto"></a>
<a id="tocsmatch-v5.positiondto"></a>

```json
{
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|true|none|none|
|y|integer(int32)|true|none|none|

<h2 id="tocS_match-v5.ParticipantPlayerBehaviorDto">match-v5.ParticipantPlayerBehaviorDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.participantplayerbehaviordto"></a>
<a id="schema_match-v5.ParticipantPlayerBehaviorDto"></a>
<a id="tocSmatch-v5.participantplayerbehaviordto"></a>
<a id="tocsmatch-v5.participantplayerbehaviordto"></a>

```json
{
  "PlayerBehavior_IsHeroInCombat": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlayerBehavior_IsHeroInCombat|integer(int32)|false|none|none|

<h2 id="tocS_match-v5.FeatsDto">match-v5.FeatsDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.featsdto"></a>
<a id="schema_match-v5.FeatsDto"></a>
<a id="tocSmatch-v5.featsdto"></a>
<a id="tocsmatch-v5.featsdto"></a>

```json
{
  "EPIC_MONSTER_KILL": {
    "featState": 0
  },
  "FIRST_BLOOD": {
    "featState": 0
  },
  "FIRST_TURRET": {
    "featState": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EPIC_MONSTER_KILL|[match-v5.FeatDto](#schemamatch-v5.featdto)|false|none|none|
|FIRST_BLOOD|[match-v5.FeatDto](#schemamatch-v5.featdto)|false|none|none|
|FIRST_TURRET|[match-v5.FeatDto](#schemamatch-v5.featdto)|false|none|none|

<h2 id="tocS_match-v5.MatchTimelineVictimDamage">match-v5.MatchTimelineVictimDamage</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.matchtimelinevictimdamage"></a>
<a id="schema_match-v5.MatchTimelineVictimDamage"></a>
<a id="tocSmatch-v5.matchtimelinevictimdamage"></a>
<a id="tocsmatch-v5.matchtimelinevictimdamage"></a>

```json
{
  "basic": true,
  "magicDamage": 0,
  "name": "string",
  "participantId": 0,
  "physicalDamage": 0,
  "spellName": "string",
  "spellSlot": 0,
  "trueDamage": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basic|boolean|true|none|none|
|magicDamage|integer(int32)|true|none|none|
|name|string|true|none|none|
|participantId|integer(int32)|true|none|none|
|physicalDamage|integer(int32)|true|none|none|
|spellName|string|true|none|none|
|spellSlot|integer(int32)|true|none|none|
|trueDamage|integer(int32)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_match-v5.FeatDto">match-v5.FeatDto</h2>
<!-- backwards compatibility -->
<a id="schemamatch-v5.featdto"></a>
<a id="schema_match-v5.FeatDto"></a>
<a id="tocSmatch-v5.featdto"></a>
<a id="tocsmatch-v5.featdto"></a>

```json
{
  "featState": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featState|integer(int32)|false|none|none|

<h2 id="tocS_riftbound-content-v1.RiftboundContentDTO">riftbound-content-v1.RiftboundContentDTO</h2>
<!-- backwards compatibility -->
<a id="schemariftbound-content-v1.riftboundcontentdto"></a>
<a id="schema_riftbound-content-v1.RiftboundContentDTO"></a>
<a id="tocSriftbound-content-v1.riftboundcontentdto"></a>
<a id="tocsriftbound-content-v1.riftboundcontentdto"></a>

```json
{
  "game": "string",
  "version": "string",
  "lastUpdated": "string",
  "sets": [
    {
      "id": "string",
      "name": "string",
      "cards": [
        {
          "id": "string",
          "collectorNumber": 0,
          "set": "string",
          "name": "string",
          "description": "string",
          "type": "string",
          "rarity": "string",
          "faction": "string",
          "stats": {
            "energy": 0,
            "might": 0,
            "cost": 0,
            "power": 0
          },
          "art": {
            "thumbnailURL": "string",
            "fullURL": "string",
            "artist": "string"
          },
          "flavorText": "string",
          "tags": [
            "string"
          ],
          "subtitle": "string",
          "effect": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|game|string|true|none|Game Name|
|version|string|true|none|Content version|
|lastUpdated|string|true|none|ISO Timestamp of content last update|
|sets|[[riftbound-content-v1.SetDTO](#schemariftbound-content-v1.setdto)]|true|none|none|

<h2 id="tocS_riftbound-content-v1.SetDTO">riftbound-content-v1.SetDTO</h2>
<!-- backwards compatibility -->
<a id="schemariftbound-content-v1.setdto"></a>
<a id="schema_riftbound-content-v1.SetDTO"></a>
<a id="tocSriftbound-content-v1.setdto"></a>
<a id="tocsriftbound-content-v1.setdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "cards": [
    {
      "id": "string",
      "collectorNumber": 0,
      "set": "string",
      "name": "string",
      "description": "string",
      "type": "string",
      "rarity": "string",
      "faction": "string",
      "stats": {
        "energy": 0,
        "might": 0,
        "cost": 0,
        "power": 0
      },
      "art": {
        "thumbnailURL": "string",
        "fullURL": "string",
        "artist": "string"
      },
      "flavorText": "string",
      "tags": [
        "string"
      ],
      "subtitle": "string",
      "effect": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Set ID|
|name|string|true|none|Set Name|
|cards|[[riftbound-content-v1.CardDTO](#schemariftbound-content-v1.carddto)]|true|none|none|

<h2 id="tocS_riftbound-content-v1.CardDTO">riftbound-content-v1.CardDTO</h2>
<!-- backwards compatibility -->
<a id="schemariftbound-content-v1.carddto"></a>
<a id="schema_riftbound-content-v1.CardDTO"></a>
<a id="tocSriftbound-content-v1.carddto"></a>
<a id="tocsriftbound-content-v1.carddto"></a>

```json
{
  "id": "string",
  "collectorNumber": 0,
  "set": "string",
  "name": "string",
  "description": "string",
  "type": "string",
  "rarity": "string",
  "faction": "string",
  "stats": {
    "energy": 0,
    "might": 0,
    "cost": 0,
    "power": 0
  },
  "art": {
    "thumbnailURL": "string",
    "fullURL": "string",
    "artist": "string"
  },
  "flavorText": "string",
  "tags": [
    "string"
  ],
  "subtitle": "string",
  "effect": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Card ID|
|collectorNumber|integer(int64)|true|none|none|
|set|string|true|none|none|
|name|string|true|none|Card Name|
|description|string|true|none|none|
|type|string|true|none|Card Type|
|rarity|string|true|none|none|
|faction|string|true|none|none|
|stats|[riftbound-content-v1.CardStatsDTO](#schemariftbound-content-v1.cardstatsdto)|true|none|none|
|art|[riftbound-content-v1.CardArtDTO](#schemariftbound-content-v1.cardartdto)|true|none|none|
|flavorText|string|true|none|none|
|tags|[string]|true|none|none|
|subtitle|string|true|none|none|
|effect|string|true|none|Optional field|

<h2 id="tocS_riftbound-content-v1.CardStatsDTO">riftbound-content-v1.CardStatsDTO</h2>
<!-- backwards compatibility -->
<a id="schemariftbound-content-v1.cardstatsdto"></a>
<a id="schema_riftbound-content-v1.CardStatsDTO"></a>
<a id="tocSriftbound-content-v1.cardstatsdto"></a>
<a id="tocsriftbound-content-v1.cardstatsdto"></a>

```json
{
  "energy": 0,
  "might": 0,
  "cost": 0,
  "power": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|energy|integer(int64)|true|none|none|
|might|integer(int64)|true|none|none|
|cost|integer(int64)|true|none|none|
|power|integer(int64)|true|none|none|

<h2 id="tocS_riftbound-content-v1.CardArtDTO">riftbound-content-v1.CardArtDTO</h2>
<!-- backwards compatibility -->
<a id="schemariftbound-content-v1.cardartdto"></a>
<a id="schema_riftbound-content-v1.CardArtDTO"></a>
<a id="tocSriftbound-content-v1.cardartdto"></a>
<a id="tocsriftbound-content-v1.cardartdto"></a>

```json
{
  "thumbnailURL": "string",
  "fullURL": "string",
  "artist": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnailURL|string|true|none|none|
|fullURL|string|true|none|none|
|artist|string|true|none|none|

<h2 id="tocS_spectator-tft-v5.CurrentGameInfo">spectator-tft-v5.CurrentGameInfo</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-tft-v5.currentgameinfo"></a>
<a id="schema_spectator-tft-v5.CurrentGameInfo"></a>
<a id="tocSspectator-tft-v5.currentgameinfo"></a>
<a id="tocsspectator-tft-v5.currentgameinfo"></a>

```json
{
  "gameId": 0,
  "gameType": "string",
  "gameStartTime": 0,
  "mapId": 0,
  "gameLength": 0,
  "platformId": "string",
  "gameMode": "string",
  "bannedChampions": [
    {
      "pickTurn": 0,
      "championId": 0,
      "teamId": 0
    }
  ],
  "gameQueueConfigId": 0,
  "observers": {
    "encryptionKey": "string"
  },
  "participants": [
    {
      "championId": 0,
      "perks": {
        "perkIds": [
          0
        ],
        "perkStyle": 0,
        "perkSubStyle": 0
      },
      "profileIconId": 0,
      "teamId": 0,
      "puuid": "string",
      "spell1Id": 0,
      "spell2Id": 0,
      "gameCustomizationObjects": [
        {
          "category": "string",
          "content": "string"
        }
      ],
      "riotId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gameId|integer(int64)|true|none|The ID of the game|
|gameType|string|true|none|The game type|
|gameStartTime|integer(int64)|true|none|The game start time represented in epoch milliseconds|
|mapId|integer(int64)|true|none|The ID of the map|
|gameLength|integer(int64)|true|none|The amount of time in seconds that has passed since the game started|
|platformId|string|true|none|The ID of the platform on which the game is being played|
|gameMode|string|true|none|The game mode|
|bannedChampions|[[spectator-tft-v5.BannedChampion](#schemaspectator-tft-v5.bannedchampion)]|true|none|Banned champion information|
|gameQueueConfigId|integer(int64)|false|none|The queue type (queue types are documented on the Game Constants page)|
|observers|[spectator-tft-v5.Observer](#schemaspectator-tft-v5.observer)|true|none|The observer information|
|participants|[[spectator-tft-v5.CurrentGameParticipant](#schemaspectator-tft-v5.currentgameparticipant)]|true|none|The participant information|

<h2 id="tocS_spectator-tft-v5.BannedChampion">spectator-tft-v5.BannedChampion</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-tft-v5.bannedchampion"></a>
<a id="schema_spectator-tft-v5.BannedChampion"></a>
<a id="tocSspectator-tft-v5.bannedchampion"></a>
<a id="tocsspectator-tft-v5.bannedchampion"></a>

```json
{
  "pickTurn": 0,
  "championId": 0,
  "teamId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pickTurn|integer(int32)|true|none|The turn during which the champion was banned|
|championId|integer(int64)|true|none|The ID of the banned champion|
|teamId|integer(int64)|true|none|The ID of the team that banned the champion|

<h2 id="tocS_spectator-tft-v5.Observer">spectator-tft-v5.Observer</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-tft-v5.observer"></a>
<a id="schema_spectator-tft-v5.Observer"></a>
<a id="tocSspectator-tft-v5.observer"></a>
<a id="tocsspectator-tft-v5.observer"></a>

```json
{
  "encryptionKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionKey|string|true|none|Key used to decrypt the spectator grid game data for playback|

<h2 id="tocS_spectator-tft-v5.CurrentGameParticipant">spectator-tft-v5.CurrentGameParticipant</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-tft-v5.currentgameparticipant"></a>
<a id="schema_spectator-tft-v5.CurrentGameParticipant"></a>
<a id="tocSspectator-tft-v5.currentgameparticipant"></a>
<a id="tocsspectator-tft-v5.currentgameparticipant"></a>

```json
{
  "championId": 0,
  "perks": {
    "perkIds": [
      0
    ],
    "perkStyle": 0,
    "perkSubStyle": 0
  },
  "profileIconId": 0,
  "teamId": 0,
  "puuid": "string",
  "spell1Id": 0,
  "spell2Id": 0,
  "gameCustomizationObjects": [
    {
      "category": "string",
      "content": "string"
    }
  ],
  "riotId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|championId|integer(int64)|true|none|The ID of the champion played by this participant|
|perks|[spectator-tft-v5.Perks](#schemaspectator-tft-v5.perks)|false|none|Perks/Runes Reforged Information|
|profileIconId|integer(int64)|true|none|The ID of the profile icon used by this participant|
|teamId|integer(int64)|true|none|The team ID of this participant, indicating the participant's team|
|puuid|string|false|none|The encrypted puuid of this participant. null when the player is anonym.|
|spell1Id|integer(int64)|true|none|The ID of the first summoner spell used by this participant|
|spell2Id|integer(int64)|true|none|The ID of the second summoner spell used by this participant|
|gameCustomizationObjects|[[spectator-tft-v5.GameCustomizationObject](#schemaspectator-tft-v5.gamecustomizationobject)]|true|none|List of Game Customizations|
|riotId|string|false|none|none|

<h2 id="tocS_spectator-tft-v5.Perks">spectator-tft-v5.Perks</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-tft-v5.perks"></a>
<a id="schema_spectator-tft-v5.Perks"></a>
<a id="tocSspectator-tft-v5.perks"></a>
<a id="tocsspectator-tft-v5.perks"></a>

```json
{
  "perkIds": [
    0
  ],
  "perkStyle": 0,
  "perkSubStyle": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perkIds|[integer(int64)]|true|none|IDs of the perks/runes assigned.|
|perkStyle|integer(int64)|true|none|Primary runes path|
|perkSubStyle|integer(int64)|true|none|Secondary runes path|

<h2 id="tocS_spectator-tft-v5.GameCustomizationObject">spectator-tft-v5.GameCustomizationObject</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-tft-v5.gamecustomizationobject"></a>
<a id="schema_spectator-tft-v5.GameCustomizationObject"></a>
<a id="tocSspectator-tft-v5.gamecustomizationobject"></a>
<a id="tocsspectator-tft-v5.gamecustomizationobject"></a>

```json
{
  "category": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|Category identifier for Game Customization|
|content|string|true|none|Game Customization content|

<h2 id="tocS_spectator-v5.CurrentGameInfo">spectator-v5.CurrentGameInfo</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-v5.currentgameinfo"></a>
<a id="schema_spectator-v5.CurrentGameInfo"></a>
<a id="tocSspectator-v5.currentgameinfo"></a>
<a id="tocsspectator-v5.currentgameinfo"></a>

```json
{
  "gameId": 0,
  "gameType": "string",
  "gameStartTime": 0,
  "mapId": 0,
  "gameLength": 0,
  "platformId": "string",
  "gameMode": "string",
  "bannedChampions": [
    {
      "pickTurn": 0,
      "championId": 0,
      "teamId": 0
    }
  ],
  "gameQueueConfigId": 0,
  "observers": {
    "encryptionKey": "string"
  },
  "participants": [
    {
      "championId": 0,
      "perks": {
        "perkIds": [
          0
        ],
        "perkStyle": 0,
        "perkSubStyle": 0
      },
      "profileIconId": 0,
      "bot": true,
      "teamId": 0,
      "puuid": "string",
      "spell1Id": 0,
      "spell2Id": 0,
      "gameCustomizationObjects": [
        {
          "category": "string",
          "content": "string"
        }
      ],
      "riotId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gameId|integer(int64)|true|none|The ID of the game|
|gameType|string|true|none|The game type|
|gameStartTime|integer(int64)|true|none|The game start time represented in epoch milliseconds|
|mapId|integer(int64)|true|none|The ID of the map|
|gameLength|integer(int64)|true|none|The amount of time in seconds that has passed since the game started|
|platformId|string|true|none|The ID of the platform on which the game is being played|
|gameMode|string|true|none|The game mode|
|bannedChampions|[[spectator-v5.BannedChampion](#schemaspectator-v5.bannedchampion)]|true|none|Banned champion information|
|gameQueueConfigId|integer(int64)|false|none|The queue type (queue types are documented on the Game Constants page)|
|observers|[spectator-v5.Observer](#schemaspectator-v5.observer)|true|none|The observer information|
|participants|[[spectator-v5.CurrentGameParticipant](#schemaspectator-v5.currentgameparticipant)]|true|none|The participant information|

<h2 id="tocS_spectator-v5.BannedChampion">spectator-v5.BannedChampion</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-v5.bannedchampion"></a>
<a id="schema_spectator-v5.BannedChampion"></a>
<a id="tocSspectator-v5.bannedchampion"></a>
<a id="tocsspectator-v5.bannedchampion"></a>

```json
{
  "pickTurn": 0,
  "championId": 0,
  "teamId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pickTurn|integer(int32)|true|none|The turn during which the champion was banned|
|championId|integer(int64)|true|none|The ID of the banned champion|
|teamId|integer(int64)|true|none|The ID of the team that banned the champion|

<h2 id="tocS_spectator-v5.Observer">spectator-v5.Observer</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-v5.observer"></a>
<a id="schema_spectator-v5.Observer"></a>
<a id="tocSspectator-v5.observer"></a>
<a id="tocsspectator-v5.observer"></a>

```json
{
  "encryptionKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionKey|string|true|none|Key used to decrypt the spectator grid game data for playback|

<h2 id="tocS_spectator-v5.CurrentGameParticipant">spectator-v5.CurrentGameParticipant</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-v5.currentgameparticipant"></a>
<a id="schema_spectator-v5.CurrentGameParticipant"></a>
<a id="tocSspectator-v5.currentgameparticipant"></a>
<a id="tocsspectator-v5.currentgameparticipant"></a>

```json
{
  "championId": 0,
  "perks": {
    "perkIds": [
      0
    ],
    "perkStyle": 0,
    "perkSubStyle": 0
  },
  "profileIconId": 0,
  "bot": true,
  "teamId": 0,
  "puuid": "string",
  "spell1Id": 0,
  "spell2Id": 0,
  "gameCustomizationObjects": [
    {
      "category": "string",
      "content": "string"
    }
  ],
  "riotId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|championId|integer(int64)|true|none|The ID of the champion played by this participant|
|perks|[spectator-v5.Perks](#schemaspectator-v5.perks)|false|none|Perks/Runes Reforged Information|
|profileIconId|integer(int64)|true|none|The ID of the profile icon used by this participant|
|bot|boolean|true|none|Flag indicating whether or not this participant is a bot|
|teamId|integer(int64)|true|none|The team ID of this participant, indicating the participant's team|
|puuid|string|false|none|The encrypted puuid of this participant. null when the player is anonym.|
|spell1Id|integer(int64)|true|none|The ID of the first summoner spell used by this participant|
|spell2Id|integer(int64)|true|none|The ID of the second summoner spell used by this participant|
|gameCustomizationObjects|[[spectator-v5.GameCustomizationObject](#schemaspectator-v5.gamecustomizationobject)]|true|none|List of Game Customizations|
|riotId|string|false|none|none|

<h2 id="tocS_spectator-v5.Perks">spectator-v5.Perks</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-v5.perks"></a>
<a id="schema_spectator-v5.Perks"></a>
<a id="tocSspectator-v5.perks"></a>
<a id="tocsspectator-v5.perks"></a>

```json
{
  "perkIds": [
    0
  ],
  "perkStyle": 0,
  "perkSubStyle": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|perkIds|[integer(int64)]|true|none|IDs of the perks/runes assigned.|
|perkStyle|integer(int64)|true|none|Primary runes path|
|perkSubStyle|integer(int64)|true|none|Secondary runes path|

<h2 id="tocS_spectator-v5.GameCustomizationObject">spectator-v5.GameCustomizationObject</h2>
<!-- backwards compatibility -->
<a id="schemaspectator-v5.gamecustomizationobject"></a>
<a id="schema_spectator-v5.GameCustomizationObject"></a>
<a id="tocSspectator-v5.gamecustomizationobject"></a>
<a id="tocsspectator-v5.gamecustomizationobject"></a>

```json
{
  "category": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|Category identifier for Game Customization|
|content|string|true|none|Game Customization content|

<h2 id="tocS_summoner-v4.SummonerDTO">summoner-v4.SummonerDTO</h2>
<!-- backwards compatibility -->
<a id="schemasummoner-v4.summonerdto"></a>
<a id="schema_summoner-v4.SummonerDTO"></a>
<a id="tocSsummoner-v4.summonerdto"></a>
<a id="tocssummoner-v4.summonerdto"></a>

```json
{
  "profileIconId": 0,
  "revisionDate": 0,
  "puuid": "string",
  "summonerLevel": 0,
  "id": "string"
}
```

represents a summoner

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileIconId|integer(int32)|true|none|ID of the summoner icon associated with the summoner.|
|revisionDate|integer(int64)|true|none|Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change.|
|puuid|string|true|none|Encrypted PUUID. Exact length of 78 characters.|
|summonerLevel|integer(int64)|true|none|Summoner level associated with the summoner.|
|id|string|false|none|Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.|

<h2 id="tocS_tft-league-v1.LeagueEntryDTO">tft-league-v1.LeagueEntryDTO</h2>
<!-- backwards compatibility -->
<a id="schematft-league-v1.leagueentrydto"></a>
<a id="schema_tft-league-v1.LeagueEntryDTO"></a>
<a id="tocStft-league-v1.leagueentrydto"></a>
<a id="tocstft-league-v1.leagueentrydto"></a>

```json
{
  "puuid": "string",
  "leagueId": "string",
  "queueType": "string",
  "ratedTier": "ORANGE",
  "ratedRating": 0,
  "tier": "string",
  "rank": "string",
  "leaguePoints": 0,
  "wins": 0,
  "losses": 0,
  "hotStreak": true,
  "veteran": true,
  "freshBlood": true,
  "inactive": true,
  "miniSeries": {
    "losses": 0,
    "progress": "string",
    "target": 0,
    "wins": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|false|none|Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)|
|leagueId|string|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|queueType|string|true|none|none|
|ratedTier|string|false|none|Only included for the RANKED_TFT_TURBO queueType.<br>             (Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)|
|ratedRating|integer(int32)|false|none|Only included for the RANKED_TFT_TURBO queueType.|
|tier|string|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|rank|string|false|none|The player's division within a tier. Not included for the RANKED_TFT_TURBO queueType.|
|leaguePoints|integer(int32)|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|wins|integer(int32)|true|none|First placement.|
|losses|integer(int32)|true|none|Second through eighth placement.|
|hotStreak|boolean|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|veteran|boolean|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|freshBlood|boolean|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|inactive|boolean|false|none|Not included for the RANKED_TFT_TURBO queueType.|
|miniSeries|[tft-league-v1.MiniSeriesDTO](#schematft-league-v1.miniseriesdto)|false|none|Not included for the RANKED_TFT_TURBO queueType.|

#### Enumerated Values

|Property|Value|
|---|---|
|ratedTier|ORANGE|
|ratedTier|PURPLE|
|ratedTier|BLUE|
|ratedTier|GREEN|
|ratedTier|GRAY|

<h2 id="tocS_tft-league-v1.MiniSeriesDTO">tft-league-v1.MiniSeriesDTO</h2>
<!-- backwards compatibility -->
<a id="schematft-league-v1.miniseriesdto"></a>
<a id="schema_tft-league-v1.MiniSeriesDTO"></a>
<a id="tocStft-league-v1.miniseriesdto"></a>
<a id="tocstft-league-v1.miniseriesdto"></a>

```json
{
  "losses": 0,
  "progress": "string",
  "target": 0,
  "wins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|losses|integer(int32)|true|none|none|
|progress|string|true|none|none|
|target|integer(int32)|true|none|none|
|wins|integer(int32)|true|none|none|

<h2 id="tocS_tft-league-v1.LeagueListDTO">tft-league-v1.LeagueListDTO</h2>
<!-- backwards compatibility -->
<a id="schematft-league-v1.leaguelistdto"></a>
<a id="schema_tft-league-v1.LeagueListDTO"></a>
<a id="tocStft-league-v1.leaguelistdto"></a>
<a id="tocstft-league-v1.leaguelistdto"></a>

```json
{
  "leagueId": "string",
  "entries": [
    {
      "freshBlood": true,
      "wins": 0,
      "miniSeries": {
        "losses": 0,
        "progress": "string",
        "target": 0,
        "wins": 0
      },
      "inactive": true,
      "veteran": true,
      "hotStreak": true,
      "rank": "string",
      "leaguePoints": 0,
      "losses": 0,
      "puuid": "string"
    }
  ],
  "tier": "string",
  "name": "string",
  "queue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leagueId|string|false|none|none|
|entries|[[tft-league-v1.LeagueItemDTO](#schematft-league-v1.leagueitemdto)]|true|none|none|
|tier|string|true|none|none|
|name|string|false|none|none|
|queue|string|false|none|none|

<h2 id="tocS_tft-league-v1.LeagueItemDTO">tft-league-v1.LeagueItemDTO</h2>
<!-- backwards compatibility -->
<a id="schematft-league-v1.leagueitemdto"></a>
<a id="schema_tft-league-v1.LeagueItemDTO"></a>
<a id="tocStft-league-v1.leagueitemdto"></a>
<a id="tocstft-league-v1.leagueitemdto"></a>

```json
{
  "freshBlood": true,
  "wins": 0,
  "miniSeries": {
    "losses": 0,
    "progress": "string",
    "target": 0,
    "wins": 0
  },
  "inactive": true,
  "veteran": true,
  "hotStreak": true,
  "rank": "string",
  "leaguePoints": 0,
  "losses": 0,
  "puuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freshBlood|boolean|true|none|none|
|wins|integer(int32)|true|none|First placement.|
|miniSeries|[tft-league-v1.MiniSeriesDTO](#schematft-league-v1.miniseriesdto)|false|none|none|
|inactive|boolean|true|none|none|
|veteran|boolean|true|none|none|
|hotStreak|boolean|true|none|none|
|rank|string|true|none|none|
|leaguePoints|integer(int32)|true|none|none|
|losses|integer(int32)|true|none|Second through eighth placement.|
|puuid|string|true|none|Player's encrypted puuid.|

<h2 id="tocS_tft-league-v1.TopRatedLadderEntryDto">tft-league-v1.TopRatedLadderEntryDto</h2>
<!-- backwards compatibility -->
<a id="schematft-league-v1.topratedladderentrydto"></a>
<a id="schema_tft-league-v1.TopRatedLadderEntryDto"></a>
<a id="tocStft-league-v1.topratedladderentrydto"></a>
<a id="tocstft-league-v1.topratedladderentrydto"></a>

```json
{
  "puuid": "string",
  "ratedTier": "ORANGE",
  "ratedRating": 0,
  "wins": 0,
  "previousUpdateLadderPosition": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|Player's encrypted puuid.|
|ratedTier|string|true|none|(Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)|
|ratedRating|integer(int32)|true|none|none|
|wins|integer(int32)|true|none|First placement.|
|previousUpdateLadderPosition|integer(int32)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ratedTier|ORANGE|
|ratedTier|PURPLE|
|ratedTier|BLUE|
|ratedTier|GREEN|
|ratedTier|GRAY|

<h2 id="tocS_tft-match-v1.MatchDto">tft-match-v1.MatchDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.matchdto"></a>
<a id="schema_tft-match-v1.MatchDto"></a>
<a id="tocStft-match-v1.matchdto"></a>
<a id="tocstft-match-v1.matchdto"></a>

```json
{
  "metadata": {
    "data_version": "string",
    "match_id": "string",
    "participants": [
      "string"
    ]
  },
  "info": {
    "endOfGameResult": "string",
    "gameCreation": 0,
    "gameId": 0,
    "game_datetime": 0,
    "game_length": 0,
    "game_version": "string",
    "game_variation": "string",
    "mapId": 0,
    "participants": [
      {
        "companion": {
          "content_ID": "string",
          "item_ID": 0,
          "skin_ID": 0,
          "species": "string"
        },
        "gold_left": 0,
        "last_round": 0,
        "level": 0,
        "placement": 0,
        "players_eliminated": 0,
        "puuid": "string",
        "riotIdGameName": "string",
        "riotIdTagline": "string",
        "time_eliminated": 0,
        "total_damage_to_players": 0,
        "traits": [
          {
            "name": "string",
            "num_units": 0,
            "style": 0,
            "tier_current": 0,
            "tier_total": 0
          }
        ],
        "units": [
          {
            "items": [
              0
            ],
            "character_id": "string",
            "itemNames": [
              "string"
            ],
            "chosen": "string",
            "name": "string",
            "rarity": 0,
            "tier": 0
          }
        ],
        "win": true,
        "augments": [
          "string"
        ],
        "partner_group_id": 0,
        "missions": {
          "Assists": 0,
          "DamageDealt": 0,
          "DamageDealtToObjectives": 0,
          "DamageDealtToTurrets": 0,
          "DamageTaken": 0,
          "DoubleKills": 0,
          "GoldEarned": 0,
          "GoldSpent": 0,
          "InhibitorsDestroyed": 0,
          "Kills": 0,
          "LargestKillingSpree": 0,
          "LargestMultiKill": 0,
          "MagicDamageDealt": 0,
          "MagicDamageDealtToChampions": 0,
          "NeutralMinionsKilledTeamJungle": 0,
          "PhysicalDamageDealt": 0,
          "PhysicalDamageTaken": 0,
          "PlayerScore0": 0,
          "PlayerScore1": 0,
          "PlayerScore2": 0,
          "PlayerScore3": 0,
          "PlayerScore4": 0,
          "PlayerScore5": 0,
          "PlayerScore6": 0,
          "PlayerScore9": 0,
          "PlayerScore10": 0,
          "PlayerScore11": 0,
          "QuadraKills": 0,
          "Spell1Casts": 0,
          "Spell2Casts": 0,
          "Spell3Casts": 0,
          "Spell4Casts": 0,
          "SummonerSpell1Casts": 0,
          "TimeCCOthers": 0,
          "TotalMinionsKilled": 0,
          "TrueDamageDealtToChampions": 0,
          "UnrealKills": 0,
          "VisionScore": 0,
          "WardsKilled": 0,
          "Deaths": 0,
          "KillingSprees": 0,
          "MagicDamageTaken": 0,
          "PentaKills": 0,
          "PhysicalDamageDealtToChampions": 0,
          "TotalDamageDealtToChampions": 0,
          "TripleKills": 0,
          "TrueDamageDealt": 0,
          "TrueDamageTaken": 0
        },
        "skill_tree": {
          "property1": 0,
          "property2": 0
        },
        "pve_score": 0,
        "pve_wonrun": true
      }
    ],
    "queue_id": 0,
    "queueId": 0,
    "tft_game_type": "string",
    "tft_set_core_name": "string",
    "tft_set_number": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[tft-match-v1.MetadataDto](#schematft-match-v1.metadatadto)|true|none|Match metadata.|
|info|[tft-match-v1.InfoDto](#schematft-match-v1.infodto)|true|none|Match info.|

<h2 id="tocS_tft-match-v1.MetadataDto">tft-match-v1.MetadataDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.metadatadto"></a>
<a id="schema_tft-match-v1.MetadataDto"></a>
<a id="tocStft-match-v1.metadatadto"></a>
<a id="tocstft-match-v1.metadatadto"></a>

```json
{
  "data_version": "string",
  "match_id": "string",
  "participants": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_version|string|true|none|Match data version.|
|match_id|string|true|none|Match id.|
|participants|[string]|true|none|A list of participant PUUIDs.|

<h2 id="tocS_tft-match-v1.InfoDto">tft-match-v1.InfoDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.infodto"></a>
<a id="schema_tft-match-v1.InfoDto"></a>
<a id="tocStft-match-v1.infodto"></a>
<a id="tocstft-match-v1.infodto"></a>

```json
{
  "endOfGameResult": "string",
  "gameCreation": 0,
  "gameId": 0,
  "game_datetime": 0,
  "game_length": 0,
  "game_version": "string",
  "game_variation": "string",
  "mapId": 0,
  "participants": [
    {
      "companion": {
        "content_ID": "string",
        "item_ID": 0,
        "skin_ID": 0,
        "species": "string"
      },
      "gold_left": 0,
      "last_round": 0,
      "level": 0,
      "placement": 0,
      "players_eliminated": 0,
      "puuid": "string",
      "riotIdGameName": "string",
      "riotIdTagline": "string",
      "time_eliminated": 0,
      "total_damage_to_players": 0,
      "traits": [
        {
          "name": "string",
          "num_units": 0,
          "style": 0,
          "tier_current": 0,
          "tier_total": 0
        }
      ],
      "units": [
        {
          "items": [
            0
          ],
          "character_id": "string",
          "itemNames": [
            "string"
          ],
          "chosen": "string",
          "name": "string",
          "rarity": 0,
          "tier": 0
        }
      ],
      "win": true,
      "augments": [
        "string"
      ],
      "partner_group_id": 0,
      "missions": {
        "Assists": 0,
        "DamageDealt": 0,
        "DamageDealtToObjectives": 0,
        "DamageDealtToTurrets": 0,
        "DamageTaken": 0,
        "DoubleKills": 0,
        "GoldEarned": 0,
        "GoldSpent": 0,
        "InhibitorsDestroyed": 0,
        "Kills": 0,
        "LargestKillingSpree": 0,
        "LargestMultiKill": 0,
        "MagicDamageDealt": 0,
        "MagicDamageDealtToChampions": 0,
        "NeutralMinionsKilledTeamJungle": 0,
        "PhysicalDamageDealt": 0,
        "PhysicalDamageTaken": 0,
        "PlayerScore0": 0,
        "PlayerScore1": 0,
        "PlayerScore2": 0,
        "PlayerScore3": 0,
        "PlayerScore4": 0,
        "PlayerScore5": 0,
        "PlayerScore6": 0,
        "PlayerScore9": 0,
        "PlayerScore10": 0,
        "PlayerScore11": 0,
        "QuadraKills": 0,
        "Spell1Casts": 0,
        "Spell2Casts": 0,
        "Spell3Casts": 0,
        "Spell4Casts": 0,
        "SummonerSpell1Casts": 0,
        "TimeCCOthers": 0,
        "TotalMinionsKilled": 0,
        "TrueDamageDealtToChampions": 0,
        "UnrealKills": 0,
        "VisionScore": 0,
        "WardsKilled": 0,
        "Deaths": 0,
        "KillingSprees": 0,
        "MagicDamageTaken": 0,
        "PentaKills": 0,
        "PhysicalDamageDealtToChampions": 0,
        "TotalDamageDealtToChampions": 0,
        "TripleKills": 0,
        "TrueDamageDealt": 0,
        "TrueDamageTaken": 0
      },
      "skill_tree": {
        "property1": 0,
        "property2": 0
      },
      "pve_score": 0,
      "pve_wonrun": true
    }
  ],
  "queue_id": 0,
  "queueId": 0,
  "tft_game_type": "string",
  "tft_set_core_name": "string",
  "tft_set_number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endOfGameResult|string|false|none|none|
|gameCreation|integer(int64)|false|none|none|
|gameId|integer(int64)|false|none|none|
|game_datetime|integer(int64)|true|none|Unix timestamp.|
|game_length|number(float)|true|none|Game length in seconds.|
|game_version|string|true|none|Game client version.|
|game_variation|string|false|none|Deprecated. Game variation key. Game variations documented in TFT static data.|
|mapId|integer(int64)|false|none|none|
|participants|[[tft-match-v1.ParticipantDto](#schematft-match-v1.participantdto)]|true|none|none|
|queue_id|integer(int32)|true|none|Please refer to the League of Legends documentation.|
|queueId|integer(int32)|false|none|Please refer to the League of Legends documentation.|
|tft_game_type|string|false|none|none|
|tft_set_core_name|string|false|none|none|
|tft_set_number|integer(int32)|true|none|Teamfight Tactics set number.|

<h2 id="tocS_tft-match-v1.ParticipantDto">tft-match-v1.ParticipantDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.participantdto"></a>
<a id="schema_tft-match-v1.ParticipantDto"></a>
<a id="tocStft-match-v1.participantdto"></a>
<a id="tocstft-match-v1.participantdto"></a>

```json
{
  "companion": {
    "content_ID": "string",
    "item_ID": 0,
    "skin_ID": 0,
    "species": "string"
  },
  "gold_left": 0,
  "last_round": 0,
  "level": 0,
  "placement": 0,
  "players_eliminated": 0,
  "puuid": "string",
  "riotIdGameName": "string",
  "riotIdTagline": "string",
  "time_eliminated": 0,
  "total_damage_to_players": 0,
  "traits": [
    {
      "name": "string",
      "num_units": 0,
      "style": 0,
      "tier_current": 0,
      "tier_total": 0
    }
  ],
  "units": [
    {
      "items": [
        0
      ],
      "character_id": "string",
      "itemNames": [
        "string"
      ],
      "chosen": "string",
      "name": "string",
      "rarity": 0,
      "tier": 0
    }
  ],
  "win": true,
  "augments": [
    "string"
  ],
  "partner_group_id": 0,
  "missions": {
    "Assists": 0,
    "DamageDealt": 0,
    "DamageDealtToObjectives": 0,
    "DamageDealtToTurrets": 0,
    "DamageTaken": 0,
    "DoubleKills": 0,
    "GoldEarned": 0,
    "GoldSpent": 0,
    "InhibitorsDestroyed": 0,
    "Kills": 0,
    "LargestKillingSpree": 0,
    "LargestMultiKill": 0,
    "MagicDamageDealt": 0,
    "MagicDamageDealtToChampions": 0,
    "NeutralMinionsKilledTeamJungle": 0,
    "PhysicalDamageDealt": 0,
    "PhysicalDamageTaken": 0,
    "PlayerScore0": 0,
    "PlayerScore1": 0,
    "PlayerScore2": 0,
    "PlayerScore3": 0,
    "PlayerScore4": 0,
    "PlayerScore5": 0,
    "PlayerScore6": 0,
    "PlayerScore9": 0,
    "PlayerScore10": 0,
    "PlayerScore11": 0,
    "QuadraKills": 0,
    "Spell1Casts": 0,
    "Spell2Casts": 0,
    "Spell3Casts": 0,
    "Spell4Casts": 0,
    "SummonerSpell1Casts": 0,
    "TimeCCOthers": 0,
    "TotalMinionsKilled": 0,
    "TrueDamageDealtToChampions": 0,
    "UnrealKills": 0,
    "VisionScore": 0,
    "WardsKilled": 0,
    "Deaths": 0,
    "KillingSprees": 0,
    "MagicDamageTaken": 0,
    "PentaKills": 0,
    "PhysicalDamageDealtToChampions": 0,
    "TotalDamageDealtToChampions": 0,
    "TripleKills": 0,
    "TrueDamageDealt": 0,
    "TrueDamageTaken": 0
  },
  "skill_tree": {
    "property1": 0,
    "property2": 0
  },
  "pve_score": 0,
  "pve_wonrun": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companion|[tft-match-v1.CompanionDto](#schematft-match-v1.companiondto)|true|none|Participant's companion.|
|gold_left|integer(int32)|true|none|Gold left after participant was eliminated.|
|last_round|integer(int32)|true|none|The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.|
|level|integer(int32)|true|none|Participant Little Legend level. Note: This is not the number of active units.|
|placement|integer(int32)|true|none|Participant placement upon elimination.|
|players_eliminated|integer(int32)|true|none|Number of players the participant eliminated.|
|puuid|string|true|none|none|
|riotIdGameName|string|false|none|none|
|riotIdTagline|string|false|none|none|
|time_eliminated|number(float)|true|none|The number of seconds before the participant was eliminated.|
|total_damage_to_players|integer(int32)|true|none|Damage the participant dealt to other players.|
|traits|[[tft-match-v1.TraitDto](#schematft-match-v1.traitdto)]|true|none|A complete list of traits for the participant's active units.|
|units|[[tft-match-v1.UnitDto](#schematft-match-v1.unitdto)]|true|none|A list of active units for the participant.|
|win|boolean|false|none|none|
|augments|[string]|false|none|none|
|partner_group_id|integer(int32)|false|none|none|
|missions|[tft-match-v1.ParticipantMissionsDto](#schematft-match-v1.participantmissionsdto)|false|none|none|
|skill_tree|object|false|none|none|
|pve_score|integer(int32)|false|none|none|
|pve_wonrun|boolean|false|none|none|

<h2 id="tocS_tft-match-v1.CompanionDto">tft-match-v1.CompanionDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.companiondto"></a>
<a id="schema_tft-match-v1.CompanionDto"></a>
<a id="tocStft-match-v1.companiondto"></a>
<a id="tocstft-match-v1.companiondto"></a>

```json
{
  "content_ID": "string",
  "item_ID": 0,
  "skin_ID": 0,
  "species": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_ID|string|true|none|none|
|item_ID|integer(int32)|true|none|none|
|skin_ID|integer(int32)|true|none|none|
|species|string|true|none|none|

<h2 id="tocS_tft-match-v1.TraitDto">tft-match-v1.TraitDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.traitdto"></a>
<a id="schema_tft-match-v1.TraitDto"></a>
<a id="tocStft-match-v1.traitdto"></a>
<a id="tocstft-match-v1.traitdto"></a>

```json
{
  "name": "string",
  "num_units": 0,
  "style": 0,
  "tier_current": 0,
  "tier_total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Trait name.|
|num_units|integer(int32)|true|none|Number of units with this trait.|
|style|integer(int32)|false|none|Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic)|
|tier_current|integer(int32)|true|none|Current active tier for the trait.|
|tier_total|integer(int32)|false|none|Total tiers for the trait.|

<h2 id="tocS_tft-match-v1.UnitDto">tft-match-v1.UnitDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.unitdto"></a>
<a id="schema_tft-match-v1.UnitDto"></a>
<a id="tocStft-match-v1.unitdto"></a>
<a id="tocstft-match-v1.unitdto"></a>

```json
{
  "items": [
    0
  ],
  "character_id": "string",
  "itemNames": [
    "string"
  ],
  "chosen": "string",
  "name": "string",
  "rarity": 0,
  "tier": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[integer(int32)]|false|none|A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.|
|character_id|string|true|none|This field was introduced in patch 9.22 with data_version 2.|
|itemNames|[string]|false|none|none|
|chosen|string|false|none|If a unit is chosen as part of the Fates set mechanic, the chosen trait will be indicated by this field. Otherwise this field is excluded from the response.|
|name|string|true|none|Unit name. This field is often left blank.|
|rarity|integer(int32)|true|none|Unit rarity. This doesn't equate to the unit cost.|
|tier|integer(int32)|true|none|Unit tier.|

<h2 id="tocS_tft-match-v1.ParticipantMissionsDto">tft-match-v1.ParticipantMissionsDto</h2>
<!-- backwards compatibility -->
<a id="schematft-match-v1.participantmissionsdto"></a>
<a id="schema_tft-match-v1.ParticipantMissionsDto"></a>
<a id="tocStft-match-v1.participantmissionsdto"></a>
<a id="tocstft-match-v1.participantmissionsdto"></a>

```json
{
  "Assists": 0,
  "DamageDealt": 0,
  "DamageDealtToObjectives": 0,
  "DamageDealtToTurrets": 0,
  "DamageTaken": 0,
  "DoubleKills": 0,
  "GoldEarned": 0,
  "GoldSpent": 0,
  "InhibitorsDestroyed": 0,
  "Kills": 0,
  "LargestKillingSpree": 0,
  "LargestMultiKill": 0,
  "MagicDamageDealt": 0,
  "MagicDamageDealtToChampions": 0,
  "NeutralMinionsKilledTeamJungle": 0,
  "PhysicalDamageDealt": 0,
  "PhysicalDamageTaken": 0,
  "PlayerScore0": 0,
  "PlayerScore1": 0,
  "PlayerScore2": 0,
  "PlayerScore3": 0,
  "PlayerScore4": 0,
  "PlayerScore5": 0,
  "PlayerScore6": 0,
  "PlayerScore9": 0,
  "PlayerScore10": 0,
  "PlayerScore11": 0,
  "QuadraKills": 0,
  "Spell1Casts": 0,
  "Spell2Casts": 0,
  "Spell3Casts": 0,
  "Spell4Casts": 0,
  "SummonerSpell1Casts": 0,
  "TimeCCOthers": 0,
  "TotalMinionsKilled": 0,
  "TrueDamageDealtToChampions": 0,
  "UnrealKills": 0,
  "VisionScore": 0,
  "WardsKilled": 0,
  "Deaths": 0,
  "KillingSprees": 0,
  "MagicDamageTaken": 0,
  "PentaKills": 0,
  "PhysicalDamageDealtToChampions": 0,
  "TotalDamageDealtToChampions": 0,
  "TripleKills": 0,
  "TrueDamageDealt": 0,
  "TrueDamageTaken": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assists|integer(int32)|false|none|none|
|DamageDealt|integer(int32)|false|none|none|
|DamageDealtToObjectives|integer(int32)|false|none|none|
|DamageDealtToTurrets|integer(int32)|false|none|none|
|DamageTaken|integer(int32)|false|none|none|
|DoubleKills|integer(int32)|false|none|none|
|GoldEarned|integer(int32)|false|none|none|
|GoldSpent|integer(int32)|false|none|none|
|InhibitorsDestroyed|integer(int32)|false|none|none|
|Kills|integer(int32)|false|none|none|
|LargestKillingSpree|integer(int32)|false|none|none|
|LargestMultiKill|integer(int32)|false|none|none|
|MagicDamageDealt|integer(int32)|false|none|none|
|MagicDamageDealtToChampions|integer(int32)|false|none|none|
|NeutralMinionsKilledTeamJungle|integer(int32)|false|none|none|
|PhysicalDamageDealt|integer(int32)|false|none|none|
|PhysicalDamageTaken|integer(int32)|false|none|none|
|PlayerScore0|integer(int32)|false|none|none|
|PlayerScore1|integer(int32)|false|none|none|
|PlayerScore2|integer(int32)|false|none|none|
|PlayerScore3|integer(int32)|false|none|none|
|PlayerScore4|integer(int32)|false|none|none|
|PlayerScore5|integer(int32)|false|none|none|
|PlayerScore6|integer(int32)|false|none|none|
|PlayerScore9|integer(int32)|false|none|none|
|PlayerScore10|integer(int32)|false|none|none|
|PlayerScore11|integer(int32)|false|none|none|
|QuadraKills|integer(int32)|false|none|none|
|Spell1Casts|integer(int32)|false|none|none|
|Spell2Casts|integer(int32)|false|none|none|
|Spell3Casts|integer(int32)|false|none|none|
|Spell4Casts|integer(int32)|false|none|none|
|SummonerSpell1Casts|integer(int32)|false|none|none|
|TimeCCOthers|integer(int32)|false|none|none|
|TotalMinionsKilled|integer(int32)|false|none|none|
|TrueDamageDealtToChampions|integer(int32)|false|none|none|
|UnrealKills|integer(int32)|false|none|none|
|VisionScore|integer(int32)|false|none|none|
|WardsKilled|integer(int32)|false|none|none|
|Deaths|integer(int32)|false|none|none|
|KillingSprees|integer(int32)|false|none|none|
|MagicDamageTaken|integer(int32)|false|none|none|
|PentaKills|integer(int32)|false|none|none|
|PhysicalDamageDealtToChampions|integer(int32)|false|none|none|
|TotalDamageDealtToChampions|integer(int32)|false|none|none|
|TripleKills|integer(int32)|false|none|none|
|TrueDamageDealt|integer(int32)|false|none|none|
|TrueDamageTaken|integer(int32)|false|none|none|

<h2 id="tocS_tft-status-v1.PlatformDataDto">tft-status-v1.PlatformDataDto</h2>
<!-- backwards compatibility -->
<a id="schematft-status-v1.platformdatadto"></a>
<a id="schema_tft-status-v1.PlatformDataDto"></a>
<a id="tocStft-status-v1.platformdatadto"></a>
<a id="tocstft-status-v1.platformdatadto"></a>

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|locales|[string]|true|none|none|
|maintenances|[[tft-status-v1.StatusDto](#schematft-status-v1.statusdto)]|true|none|none|
|incidents|[[tft-status-v1.StatusDto](#schematft-status-v1.statusdto)]|true|none|none|

<h2 id="tocS_tft-status-v1.StatusDto">tft-status-v1.StatusDto</h2>
<!-- backwards compatibility -->
<a id="schematft-status-v1.statusdto"></a>
<a id="schema_tft-status-v1.StatusDto"></a>
<a id="tocStft-status-v1.statusdto"></a>
<a id="tocstft-status-v1.statusdto"></a>

```json
{
  "id": 0,
  "maintenance_status": "scheduled",
  "incident_severity": "info",
  "titles": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "updates": [
    {
      "id": 0,
      "author": "string",
      "publish": true,
      "publish_locations": [
        "riotclient"
      ],
      "translations": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "archive_at": "string",
  "updated_at": "string",
  "platforms": [
    "windows"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|maintenance_status|string|true|none|(Legal values:  scheduled,  in_progress,  complete)|
|incident_severity|string|true|none|(Legal values:  info,  warning,  critical)|
|titles|[[tft-status-v1.ContentDto](#schematft-status-v1.contentdto)]|true|none|none|
|updates|[[tft-status-v1.UpdateDto](#schematft-status-v1.updatedto)]|true|none|none|
|created_at|string|true|none|none|
|archive_at|string|true|none|none|
|updated_at|string|true|none|none|
|platforms|[string]|true|none|(Legal values: windows, macos, android, ios, ps4, xbone, switch)|

#### Enumerated Values

|Property|Value|
|---|---|
|maintenance_status|scheduled|
|maintenance_status|in_progress|
|maintenance_status|complete|
|incident_severity|info|
|incident_severity|warning|
|incident_severity|critical|
|platforms|windows|
|platforms|macos|
|platforms|android|
|platforms|ios|
|platforms|ps4|
|platforms|xbone|
|platforms|switch|

<h2 id="tocS_tft-status-v1.ContentDto">tft-status-v1.ContentDto</h2>
<!-- backwards compatibility -->
<a id="schematft-status-v1.contentdto"></a>
<a id="schema_tft-status-v1.ContentDto"></a>
<a id="tocStft-status-v1.contentdto"></a>
<a id="tocstft-status-v1.contentdto"></a>

```json
{
  "locale": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_tft-status-v1.UpdateDto">tft-status-v1.UpdateDto</h2>
<!-- backwards compatibility -->
<a id="schematft-status-v1.updatedto"></a>
<a id="schema_tft-status-v1.UpdateDto"></a>
<a id="tocStft-status-v1.updatedto"></a>
<a id="tocstft-status-v1.updatedto"></a>

```json
{
  "id": 0,
  "author": "string",
  "publish": true,
  "publish_locations": [
    "riotclient"
  ],
  "translations": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|author|string|true|none|none|
|publish|boolean|true|none|none|
|publish_locations|[string]|true|none|(Legal values: riotclient, riotstatus, game)|
|translations|[[tft-status-v1.ContentDto](#schematft-status-v1.contentdto)]|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|publish_locations|riotclient|
|publish_locations|riotstatus|
|publish_locations|game|

<h2 id="tocS_tft-summoner-v1.SummonerDTO">tft-summoner-v1.SummonerDTO</h2>
<!-- backwards compatibility -->
<a id="schematft-summoner-v1.summonerdto"></a>
<a id="schema_tft-summoner-v1.SummonerDTO"></a>
<a id="tocStft-summoner-v1.summonerdto"></a>
<a id="tocstft-summoner-v1.summonerdto"></a>

```json
{
  "puuid": "string",
  "profileIconId": 0,
  "revisionDate": 0,
  "summonerLevel": 0,
  "id": "string"
}
```

represents a summoner

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|Encrypted PUUID. Exact length of 78 characters.|
|profileIconId|integer(int32)|true|none|ID of the summoner icon associated with the summoner.|
|revisionDate|integer(int64)|true|none|Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change.|
|summonerLevel|integer(int64)|true|none|Summoner level associated with the summoner.|
|id|string|false|none|Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.|

<h2 id="tocS_tournament-stub-v5.TournamentCodeParametersV5">tournament-stub-v5.TournamentCodeParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-stub-v5.tournamentcodeparametersv5"></a>
<a id="schema_tournament-stub-v5.TournamentCodeParametersV5"></a>
<a id="tocStournament-stub-v5.tournamentcodeparametersv5"></a>
<a id="tocstournament-stub-v5.tournamentcodeparametersv5"></a>

```json
{
  "allowedParticipants": [
    "string"
  ],
  "metadata": "string",
  "teamSize": 1,
  "pickType": "BLIND_PICK",
  "mapType": "SUMMONERS_RIFT",
  "spectatorType": "NONE",
  "enoughPlayers": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedParticipants|[string]|false|none|Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.|
|metadata|string|false|none|Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.|
|teamSize|integer(int32)|true|none|The team size of the game. Valid values are 1-5.|
|pickType|string|true|none|The pick type of the game.<br>             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)|
|mapType|string|true|none|The map type of the game.<br>             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS,  LEAGUE_CLASSIC)|
|spectatorType|string|true|none|The spectator type of the game.<br>             (Legal values:  NONE,  LOBBYONLY,  ALL)|
|enoughPlayers|boolean|true|none|Checks if allowed participants are enough to make full teams.|

#### Enumerated Values

|Property|Value|
|---|---|
|pickType|BLIND_PICK|
|pickType|DRAFT_MODE|
|pickType|ALL_RANDOM|
|pickType|TOURNAMENT_DRAFT|
|mapType|SUMMONERS_RIFT|
|mapType|HOWLING_ABYSS|
|mapType|LEAGUE_CLASSIC|
|spectatorType|NONE|
|spectatorType|LOBBYONLY|
|spectatorType|ALL|

<h2 id="tocS_tournament-stub-v5.TournamentCodeV5DTO">tournament-stub-v5.TournamentCodeV5DTO</h2>
<!-- backwards compatibility -->
<a id="schematournament-stub-v5.tournamentcodev5dto"></a>
<a id="schema_tournament-stub-v5.TournamentCodeV5DTO"></a>
<a id="tocStournament-stub-v5.tournamentcodev5dto"></a>
<a id="tocstournament-stub-v5.tournamentcodev5dto"></a>

```json
{
  "code": "string",
  "lobbyName": "string",
  "metaData": "string",
  "password": "string",
  "teamSize": 0,
  "providerId": 0,
  "pickType": "string",
  "tournamentId": 0,
  "id": 0,
  "region": "BR",
  "map": "string",
  "participants": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The tournament code.|
|lobbyName|string|true|none|The lobby name for the tournament code game.|
|metaData|string|true|none|The metadata for tournament code.|
|password|string|true|none|The password for the tournament code game.|
|teamSize|integer(int32)|true|none|The team size for the tournament code game.|
|providerId|integer(int32)|true|none|The provider's ID.|
|pickType|string|true|none|The pick mode for tournament code game.|
|tournamentId|integer(int32)|true|none|The tournament's ID.|
|id|integer(int32)|true|none|The tournament code's ID.|
|region|string|true|none|The tournament code's region.<br>             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR)|
|map|string|true|none|The game map for the tournament code game|
|participants|[string]|true|none|The puuids of the participants (Encrypted)|

#### Enumerated Values

|Property|Value|
|---|---|
|region|BR|
|region|EUNE|
|region|EUW|
|region|JP|
|region|LAN|
|region|LAS|
|region|NA|
|region|OCE|
|region|PBE|
|region|RU|
|region|TR|
|region|KR|

<h2 id="tocS_tournament-stub-v5.LobbyEventV5DTOWrapper">tournament-stub-v5.LobbyEventV5DTOWrapper</h2>
<!-- backwards compatibility -->
<a id="schematournament-stub-v5.lobbyeventv5dtowrapper"></a>
<a id="schema_tournament-stub-v5.LobbyEventV5DTOWrapper"></a>
<a id="tocStournament-stub-v5.lobbyeventv5dtowrapper"></a>
<a id="tocstournament-stub-v5.lobbyeventv5dtowrapper"></a>

```json
{
  "eventList": [
    {
      "timestamp": "string",
      "eventType": "string",
      "puuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventList|[[tournament-stub-v5.LobbyEventV5DTO](#schematournament-stub-v5.lobbyeventv5dto)]|true|none|none|

<h2 id="tocS_tournament-stub-v5.LobbyEventV5DTO">tournament-stub-v5.LobbyEventV5DTO</h2>
<!-- backwards compatibility -->
<a id="schematournament-stub-v5.lobbyeventv5dto"></a>
<a id="schema_tournament-stub-v5.LobbyEventV5DTO"></a>
<a id="tocStournament-stub-v5.lobbyeventv5dto"></a>
<a id="tocstournament-stub-v5.lobbyeventv5dto"></a>

```json
{
  "timestamp": "string",
  "eventType": "string",
  "puuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|true|none|Timestamp from the event|
|eventType|string|true|none|The type of event that was triggered|
|puuid|string|true|none|The puuid that triggered the event (Encrypted)|

<h2 id="tocS_tournament-stub-v5.ProviderRegistrationParametersV5">tournament-stub-v5.ProviderRegistrationParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-stub-v5.providerregistrationparametersv5"></a>
<a id="schema_tournament-stub-v5.ProviderRegistrationParametersV5"></a>
<a id="tocStournament-stub-v5.providerregistrationparametersv5"></a>
<a id="tocstournament-stub-v5.providerregistrationparametersv5"></a>

```json
{
  "region": "BR",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|true|none|The region in which the provider will be running tournaments.<br>             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR)|
|url|string|true|none|The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).|

#### Enumerated Values

|Property|Value|
|---|---|
|region|BR|
|region|EUNE|
|region|EUW|
|region|JP|
|region|LAN|
|region|LAS|
|region|NA|
|region|OCE|
|region|PBE|
|region|RU|
|region|TR|
|region|KR|

<h2 id="tocS_tournament-stub-v5.TournamentRegistrationParametersV5">tournament-stub-v5.TournamentRegistrationParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-stub-v5.tournamentregistrationparametersv5"></a>
<a id="schema_tournament-stub-v5.TournamentRegistrationParametersV5"></a>
<a id="tocStournament-stub-v5.tournamentregistrationparametersv5"></a>
<a id="tocstournament-stub-v5.tournamentregistrationparametersv5"></a>

```json
{
  "providerId": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerId|integer(int32)|true|none|The provider ID to specify the regional registered provider data to associate this tournament.|
|name|string|false|none|The optional name of the tournament.|

<h2 id="tocS_tournament-v5.TournamentCodeParametersV5">tournament-v5.TournamentCodeParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.tournamentcodeparametersv5"></a>
<a id="schema_tournament-v5.TournamentCodeParametersV5"></a>
<a id="tocStournament-v5.tournamentcodeparametersv5"></a>
<a id="tocstournament-v5.tournamentcodeparametersv5"></a>

```json
{
  "allowedParticipants": [
    "string"
  ],
  "metadata": "string",
  "teamSize": 1,
  "pickType": "BLIND_PICK",
  "mapType": "SUMMONERS_RIFT",
  "spectatorType": "NONE",
  "enoughPlayers": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedParticipants|[string]|false|none|Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.|
|metadata|string|false|none|Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.|
|teamSize|integer(int32)|true|none|The team size of the game. Valid values are 1-5.|
|pickType|string|true|none|The pick type of the game.<br>             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)|
|mapType|string|true|none|The map type of the game.<br>             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS,  LEAGUE_CLASSIC)|
|spectatorType|string|true|none|The spectator type of the game.<br>             (Legal values:  NONE,  LOBBYONLY,  ALL)|
|enoughPlayers|boolean|true|none|Checks if allowed participants are enough to make full teams.|

#### Enumerated Values

|Property|Value|
|---|---|
|pickType|BLIND_PICK|
|pickType|DRAFT_MODE|
|pickType|ALL_RANDOM|
|pickType|TOURNAMENT_DRAFT|
|mapType|SUMMONERS_RIFT|
|mapType|HOWLING_ABYSS|
|mapType|LEAGUE_CLASSIC|
|spectatorType|NONE|
|spectatorType|LOBBYONLY|
|spectatorType|ALL|

<h2 id="tocS_tournament-v5.TournamentCodeV5DTO">tournament-v5.TournamentCodeV5DTO</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.tournamentcodev5dto"></a>
<a id="schema_tournament-v5.TournamentCodeV5DTO"></a>
<a id="tocStournament-v5.tournamentcodev5dto"></a>
<a id="tocstournament-v5.tournamentcodev5dto"></a>

```json
{
  "id": 0,
  "providerId": 0,
  "tournamentId": 0,
  "code": "string",
  "region": "BR",
  "map": "string",
  "teamSize": 0,
  "spectators": "string",
  "pickType": "string",
  "lobbyName": "string",
  "password": "string",
  "metaData": "string",
  "participants": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|The tournament code's ID.|
|providerId|integer(int32)|true|none|The provider's ID.|
|tournamentId|integer(int32)|true|none|The tournament's ID.|
|code|string|true|none|The tournament code.|
|region|string|true|none|The tournament code's region.<br>             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR,  PH,  SG,  TH,  TW,  VN)|
|map|string|true|none|The game map for the tournament code game|
|teamSize|integer(int32)|true|none|The team size for the tournament code game.|
|spectators|string|true|none|The spectator mode for the tournament code game.|
|pickType|string|true|none|The pick mode for tournament code game.|
|lobbyName|string|true|none|The lobby name for the tournament code game.|
|password|string|true|none|The password for the tournament code game.|
|metaData|string|true|none|The metadata for tournament code.|
|participants|[string]|true|none|The puuids of the participants (Encrypted)|

#### Enumerated Values

|Property|Value|
|---|---|
|region|BR|
|region|EUNE|
|region|EUW|
|region|JP|
|region|LAN|
|region|LAS|
|region|NA|
|region|OCE|
|region|PBE|
|region|RU|
|region|TR|
|region|KR|
|region|PH|
|region|SG|
|region|TH|
|region|TW|
|region|VN|

<h2 id="tocS_tournament-v5.TournamentCodeUpdateParametersV5">tournament-v5.TournamentCodeUpdateParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.tournamentcodeupdateparametersv5"></a>
<a id="schema_tournament-v5.TournamentCodeUpdateParametersV5"></a>
<a id="tocStournament-v5.tournamentcodeupdateparametersv5"></a>
<a id="tocstournament-v5.tournamentcodeupdateparametersv5"></a>

```json
{
  "allowedParticipants": [
    "string"
  ],
  "pickType": "BLIND_PICK",
  "mapType": "SUMMONERS_RIFT",
  "spectatorType": "NONE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedParticipants|[string]|false|none|Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.|
|pickType|string|true|none|The pick type<br>             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)|
|mapType|string|true|none|The map type<br>             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS)|
|spectatorType|string|true|none|The spectator type<br>             (Legal values:  NONE,  LOBBYONLY,  ALL)|

#### Enumerated Values

|Property|Value|
|---|---|
|pickType|BLIND_PICK|
|pickType|DRAFT_MODE|
|pickType|ALL_RANDOM|
|pickType|TOURNAMENT_DRAFT|
|mapType|SUMMONERS_RIFT|
|mapType|HOWLING_ABYSS|
|spectatorType|NONE|
|spectatorType|LOBBYONLY|
|spectatorType|ALL|

<h2 id="tocS_tournament-v5.TournamentGamesV5">tournament-v5.TournamentGamesV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.tournamentgamesv5"></a>
<a id="schema_tournament-v5.TournamentGamesV5"></a>
<a id="tocStournament-v5.tournamentgamesv5"></a>
<a id="tocstournament-v5.tournamentgamesv5"></a>

```json
{
  "startTime": 0,
  "winningTeam": [
    {
      "puuid": "string"
    }
  ],
  "losingTeam": [
    {
      "puuid": "string"
    }
  ],
  "shortCode": "string",
  "metaData": "string",
  "gameId": 0,
  "gameName": "string",
  "gameType": "string",
  "gameMap": 0,
  "gameMode": "string",
  "region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|integer(int64)|true|none|none|
|winningTeam|[[tournament-v5.TournamentTeamV5](#schematournament-v5.tournamentteamv5)]|true|none|none|
|losingTeam|[[tournament-v5.TournamentTeamV5](#schematournament-v5.tournamentteamv5)]|true|none|none|
|shortCode|string|true|none|Tournament Code|
|metaData|string|false|none|Metadata for the TournamentCode|
|gameId|integer(int64)|true|none|none|
|gameName|string|true|none|none|
|gameType|string|true|none|none|
|gameMap|integer(int32)|true|none|Game Map ID|
|gameMode|string|true|none|none|
|region|string|true|none|Region of the game|

<h2 id="tocS_tournament-v5.TournamentTeamV5">tournament-v5.TournamentTeamV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.tournamentteamv5"></a>
<a id="schema_tournament-v5.TournamentTeamV5"></a>
<a id="tocStournament-v5.tournamentteamv5"></a>
<a id="tocstournament-v5.tournamentteamv5"></a>

```json
{
  "puuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|Player Unique UUID (Encrypted)|

<h2 id="tocS_tournament-v5.LobbyEventV5DTOWrapper">tournament-v5.LobbyEventV5DTOWrapper</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.lobbyeventv5dtowrapper"></a>
<a id="schema_tournament-v5.LobbyEventV5DTOWrapper"></a>
<a id="tocStournament-v5.lobbyeventv5dtowrapper"></a>
<a id="tocstournament-v5.lobbyeventv5dtowrapper"></a>

```json
{
  "eventList": [
    {
      "timestamp": "string",
      "eventType": "string",
      "puuid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventList|[[tournament-v5.LobbyEventV5DTO](#schematournament-v5.lobbyeventv5dto)]|true|none|none|

<h2 id="tocS_tournament-v5.LobbyEventV5DTO">tournament-v5.LobbyEventV5DTO</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.lobbyeventv5dto"></a>
<a id="schema_tournament-v5.LobbyEventV5DTO"></a>
<a id="tocStournament-v5.lobbyeventv5dto"></a>
<a id="tocstournament-v5.lobbyeventv5dto"></a>

```json
{
  "timestamp": "string",
  "eventType": "string",
  "puuid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|true|none|Timestamp from the event|
|eventType|string|true|none|The type of event that was triggered|
|puuid|string|true|none|The puuid that triggered the event (Encrypted)|

<h2 id="tocS_tournament-v5.ProviderRegistrationParametersV5">tournament-v5.ProviderRegistrationParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.providerregistrationparametersv5"></a>
<a id="schema_tournament-v5.ProviderRegistrationParametersV5"></a>
<a id="tocStournament-v5.providerregistrationparametersv5"></a>
<a id="tocstournament-v5.providerregistrationparametersv5"></a>

```json
{
  "region": "BR",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|true|none|The region in which the provider will be running tournaments.<br>             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR,  PH,  SG,  TH,  TW,  VN)|
|url|string|true|none|The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).|

#### Enumerated Values

|Property|Value|
|---|---|
|region|BR|
|region|EUNE|
|region|EUW|
|region|JP|
|region|LAN|
|region|LAS|
|region|NA|
|region|OCE|
|region|PBE|
|region|RU|
|region|TR|
|region|KR|
|region|PH|
|region|SG|
|region|TH|
|region|TW|
|region|VN|

<h2 id="tocS_tournament-v5.TournamentRegistrationParametersV5">tournament-v5.TournamentRegistrationParametersV5</h2>
<!-- backwards compatibility -->
<a id="schematournament-v5.tournamentregistrationparametersv5"></a>
<a id="schema_tournament-v5.TournamentRegistrationParametersV5"></a>
<a id="tocStournament-v5.tournamentregistrationparametersv5"></a>
<a id="tocstournament-v5.tournamentregistrationparametersv5"></a>

```json
{
  "providerId": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerId|integer(int32)|true|none|The provider ID to specify the regional registered provider data to associate this tournament.|
|name|string|false|none|The optional name of the tournament.|

<h2 id="tocS_val-console-match-v1.MatchDto">val-console-match-v1.MatchDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.matchdto"></a>
<a id="schema_val-console-match-v1.MatchDto"></a>
<a id="tocSval-console-match-v1.matchdto"></a>
<a id="tocsval-console-match-v1.matchdto"></a>

```json
{
  "matchInfo": {
    "matchId": "string",
    "mapId": "string",
    "gameLengthMillis": 0,
    "gameStartMillis": 0,
    "provisioningFlowId": "string",
    "isCompleted": true,
    "customGameName": "string",
    "queueId": "string",
    "gameMode": "string",
    "isRanked": true,
    "seasonId": "string"
  },
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "teamId": "string",
      "partyId": "string",
      "characterId": "string",
      "stats": {
        "score": 0,
        "roundsPlayed": 0,
        "kills": 0,
        "deaths": 0,
        "assists": 0,
        "playtimeMillis": 0,
        "abilityCasts": {
          "grenadeCasts": 0,
          "ability1Casts": 0,
          "ability2Casts": 0,
          "ultimateCasts": 0
        }
      },
      "competitiveTier": 0,
      "playerCard": "string",
      "playerTitle": "string"
    }
  ],
  "coaches": [
    {
      "puuid": "string",
      "teamId": "string"
    }
  ],
  "teams": [
    {
      "teamId": "string",
      "won": true,
      "roundsPlayed": 0,
      "roundsWon": 0,
      "numPoints": 0
    }
  ],
  "roundResults": [
    {
      "roundNum": 0,
      "roundResult": "string",
      "roundCeremony": "string",
      "winningTeam": "string",
      "bombPlanter": "string",
      "bombDefuser": "string",
      "plantRoundTime": 0,
      "plantPlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "plantLocation": {
        "x": 0,
        "y": 0
      },
      "plantSite": "string",
      "defuseRoundTime": 0,
      "defusePlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "defuseLocation": {
        "x": 0,
        "y": 0
      },
      "playerStats": [
        {
          "puuid": "string",
          "kills": [
            {
              "timeSinceGameStartMillis": 0,
              "timeSinceRoundStartMillis": 0,
              "killer": "string",
              "victim": "string",
              "victimLocation": {
                "x": 0,
                "y": 0
              },
              "assistants": [
                "string"
              ],
              "playerLocations": [
                {
                  "puuid": "string",
                  "viewRadians": 0,
                  "location": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "finishingDamage": {
                "damageType": "string",
                "damageItem": "string",
                "isSecondaryFireMode": true
              }
            }
          ],
          "damage": [
            {
              "receiver": "string",
              "damage": 0,
              "legshots": 0,
              "bodyshots": 0,
              "headshots": 0
            }
          ],
          "score": 0,
          "economy": {
            "loadoutValue": 0,
            "weapon": "string",
            "armor": "string",
            "remaining": 0,
            "spent": 0
          },
          "ability": {
            "grenadeEffects": "string",
            "ability1Effects": "string",
            "ability2Effects": "string",
            "ultimateEffects": "string"
          }
        }
      ],
      "roundResultCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchInfo|[val-console-match-v1.MatchInfoDto](#schemaval-console-match-v1.matchinfodto)|true|none|none|
|players|[[val-console-match-v1.PlayerDto](#schemaval-console-match-v1.playerdto)]|true|none|none|
|coaches|[[val-console-match-v1.CoachDto](#schemaval-console-match-v1.coachdto)]|true|none|none|
|teams|[[val-console-match-v1.TeamDto](#schemaval-console-match-v1.teamdto)]|false|none|none|
|roundResults|[[val-console-match-v1.RoundResultDto](#schemaval-console-match-v1.roundresultdto)]|false|none|none|

<h2 id="tocS_val-console-match-v1.MatchInfoDto">val-console-match-v1.MatchInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.matchinfodto"></a>
<a id="schema_val-console-match-v1.MatchInfoDto"></a>
<a id="tocSval-console-match-v1.matchinfodto"></a>
<a id="tocsval-console-match-v1.matchinfodto"></a>

```json
{
  "matchId": "string",
  "mapId": "string",
  "gameLengthMillis": 0,
  "gameStartMillis": 0,
  "provisioningFlowId": "string",
  "isCompleted": true,
  "customGameName": "string",
  "queueId": "string",
  "gameMode": "string",
  "isRanked": true,
  "seasonId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchId|string|true|none|none|
|mapId|string|true|none|none|
|gameLengthMillis|integer(int32)|false|none|none|
|gameStartMillis|integer(int64)|true|none|none|
|provisioningFlowId|string|true|none|none|
|isCompleted|boolean|true|none|none|
|customGameName|string|true|none|none|
|queueId|string|true|none|none|
|gameMode|string|true|none|none|
|isRanked|boolean|true|none|none|
|seasonId|string|true|none|none|

<h2 id="tocS_val-console-match-v1.PlayerDto">val-console-match-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.playerdto"></a>
<a id="schema_val-console-match-v1.PlayerDto"></a>
<a id="tocSval-console-match-v1.playerdto"></a>
<a id="tocsval-console-match-v1.playerdto"></a>

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string",
  "teamId": "string",
  "partyId": "string",
  "characterId": "string",
  "stats": {
    "score": 0,
    "roundsPlayed": 0,
    "kills": 0,
    "deaths": 0,
    "assists": 0,
    "playtimeMillis": 0,
    "abilityCasts": {
      "grenadeCasts": 0,
      "ability1Casts": 0,
      "ability2Casts": 0,
      "ultimateCasts": 0
    }
  },
  "competitiveTier": 0,
  "playerCard": "string",
  "playerTitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|gameName|string|true|none|none|
|tagLine|string|true|none|none|
|teamId|string|true|none|none|
|partyId|string|true|none|none|
|characterId|string|false|none|none|
|stats|[val-console-match-v1.PlayerStatsDto](#schemaval-console-match-v1.playerstatsdto)|false|none|none|
|competitiveTier|integer(int32)|true|none|none|
|playerCard|string|true|none|none|
|playerTitle|string|true|none|none|

<h2 id="tocS_val-console-match-v1.PlayerStatsDto">val-console-match-v1.PlayerStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.playerstatsdto"></a>
<a id="schema_val-console-match-v1.PlayerStatsDto"></a>
<a id="tocSval-console-match-v1.playerstatsdto"></a>
<a id="tocsval-console-match-v1.playerstatsdto"></a>

```json
{
  "score": 0,
  "roundsPlayed": 0,
  "kills": 0,
  "deaths": 0,
  "assists": 0,
  "playtimeMillis": 0,
  "abilityCasts": {
    "grenadeCasts": 0,
    "ability1Casts": 0,
    "ability2Casts": 0,
    "ultimateCasts": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|integer(int32)|true|none|none|
|roundsPlayed|integer(int32)|true|none|none|
|kills|integer(int32)|true|none|none|
|deaths|integer(int32)|true|none|none|
|assists|integer(int32)|true|none|none|
|playtimeMillis|integer(int32)|true|none|none|
|abilityCasts|[val-console-match-v1.AbilityCastsDto](#schemaval-console-match-v1.abilitycastsdto)|false|none|none|

<h2 id="tocS_val-console-match-v1.AbilityCastsDto">val-console-match-v1.AbilityCastsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.abilitycastsdto"></a>
<a id="schema_val-console-match-v1.AbilityCastsDto"></a>
<a id="tocSval-console-match-v1.abilitycastsdto"></a>
<a id="tocsval-console-match-v1.abilitycastsdto"></a>

```json
{
  "grenadeCasts": 0,
  "ability1Casts": 0,
  "ability2Casts": 0,
  "ultimateCasts": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grenadeCasts|integer(int32)|true|none|none|
|ability1Casts|integer(int32)|true|none|none|
|ability2Casts|integer(int32)|true|none|none|
|ultimateCasts|integer(int32)|true|none|none|

<h2 id="tocS_val-console-match-v1.CoachDto">val-console-match-v1.CoachDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.coachdto"></a>
<a id="schema_val-console-match-v1.CoachDto"></a>
<a id="tocSval-console-match-v1.coachdto"></a>
<a id="tocsval-console-match-v1.coachdto"></a>

```json
{
  "puuid": "string",
  "teamId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|teamId|string|true|none|none|

<h2 id="tocS_val-console-match-v1.TeamDto">val-console-match-v1.TeamDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.teamdto"></a>
<a id="schema_val-console-match-v1.TeamDto"></a>
<a id="tocSval-console-match-v1.teamdto"></a>
<a id="tocsval-console-match-v1.teamdto"></a>

```json
{
  "teamId": "string",
  "won": true,
  "roundsPlayed": 0,
  "roundsWon": 0,
  "numPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamId|string|true|none|This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch.|
|won|boolean|true|none|none|
|roundsPlayed|integer(int32)|true|none|none|
|roundsWon|integer(int32)|true|none|none|
|numPoints|integer(int32)|true|none|Team points scored. Number of kills in deathmatch.|

<h2 id="tocS_val-console-match-v1.RoundResultDto">val-console-match-v1.RoundResultDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.roundresultdto"></a>
<a id="schema_val-console-match-v1.RoundResultDto"></a>
<a id="tocSval-console-match-v1.roundresultdto"></a>
<a id="tocsval-console-match-v1.roundresultdto"></a>

```json
{
  "roundNum": 0,
  "roundResult": "string",
  "roundCeremony": "string",
  "winningTeam": "string",
  "bombPlanter": "string",
  "bombDefuser": "string",
  "plantRoundTime": 0,
  "plantPlayerLocations": [
    {
      "puuid": "string",
      "viewRadians": 0,
      "location": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "plantLocation": {
    "x": 0,
    "y": 0
  },
  "plantSite": "string",
  "defuseRoundTime": 0,
  "defusePlayerLocations": [
    {
      "puuid": "string",
      "viewRadians": 0,
      "location": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "defuseLocation": {
    "x": 0,
    "y": 0
  },
  "playerStats": [
    {
      "puuid": "string",
      "kills": [
        {
          "timeSinceGameStartMillis": 0,
          "timeSinceRoundStartMillis": 0,
          "killer": "string",
          "victim": "string",
          "victimLocation": {
            "x": 0,
            "y": 0
          },
          "assistants": [
            "string"
          ],
          "playerLocations": [
            {
              "puuid": "string",
              "viewRadians": 0,
              "location": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "finishingDamage": {
            "damageType": "string",
            "damageItem": "string",
            "isSecondaryFireMode": true
          }
        }
      ],
      "damage": [
        {
          "receiver": "string",
          "damage": 0,
          "legshots": 0,
          "bodyshots": 0,
          "headshots": 0
        }
      ],
      "score": 0,
      "economy": {
        "loadoutValue": 0,
        "weapon": "string",
        "armor": "string",
        "remaining": 0,
        "spent": 0
      },
      "ability": {
        "grenadeEffects": "string",
        "ability1Effects": "string",
        "ability2Effects": "string",
        "ultimateEffects": "string"
      }
    }
  ],
  "roundResultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roundNum|integer(int32)|true|none|none|
|roundResult|string|true|none|none|
|roundCeremony|string|true|none|none|
|winningTeam|string|true|none|none|
|bombPlanter|string|false|none|PUUID of player|
|bombDefuser|string|false|none|PUUID of player|
|plantRoundTime|integer(int32)|true|none|none|
|plantPlayerLocations|[[val-console-match-v1.PlayerLocationsDto](#schemaval-console-match-v1.playerlocationsdto)]|false|none|none|
|plantLocation|[val-console-match-v1.LocationDto](#schemaval-console-match-v1.locationdto)|true|none|none|
|plantSite|string|true|none|none|
|defuseRoundTime|integer(int32)|true|none|none|
|defusePlayerLocations|[[val-console-match-v1.PlayerLocationsDto](#schemaval-console-match-v1.playerlocationsdto)]|false|none|none|
|defuseLocation|[val-console-match-v1.LocationDto](#schemaval-console-match-v1.locationdto)|true|none|none|
|playerStats|[[val-console-match-v1.PlayerRoundStatsDto](#schemaval-console-match-v1.playerroundstatsdto)]|true|none|none|
|roundResultCode|string|true|none|none|

<h2 id="tocS_val-console-match-v1.PlayerLocationsDto">val-console-match-v1.PlayerLocationsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.playerlocationsdto"></a>
<a id="schema_val-console-match-v1.PlayerLocationsDto"></a>
<a id="tocSval-console-match-v1.playerlocationsdto"></a>
<a id="tocsval-console-match-v1.playerlocationsdto"></a>

```json
{
  "puuid": "string",
  "viewRadians": 0,
  "location": {
    "x": 0,
    "y": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|viewRadians|number(float)|true|none|none|
|location|[val-console-match-v1.LocationDto](#schemaval-console-match-v1.locationdto)|true|none|none|

<h2 id="tocS_val-console-match-v1.LocationDto">val-console-match-v1.LocationDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.locationdto"></a>
<a id="schema_val-console-match-v1.LocationDto"></a>
<a id="tocSval-console-match-v1.locationdto"></a>
<a id="tocsval-console-match-v1.locationdto"></a>

```json
{
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|true|none|none|
|y|integer(int32)|true|none|none|

<h2 id="tocS_val-console-match-v1.PlayerRoundStatsDto">val-console-match-v1.PlayerRoundStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.playerroundstatsdto"></a>
<a id="schema_val-console-match-v1.PlayerRoundStatsDto"></a>
<a id="tocSval-console-match-v1.playerroundstatsdto"></a>
<a id="tocsval-console-match-v1.playerroundstatsdto"></a>

```json
{
  "puuid": "string",
  "kills": [
    {
      "timeSinceGameStartMillis": 0,
      "timeSinceRoundStartMillis": 0,
      "killer": "string",
      "victim": "string",
      "victimLocation": {
        "x": 0,
        "y": 0
      },
      "assistants": [
        "string"
      ],
      "playerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "finishingDamage": {
        "damageType": "string",
        "damageItem": "string",
        "isSecondaryFireMode": true
      }
    }
  ],
  "damage": [
    {
      "receiver": "string",
      "damage": 0,
      "legshots": 0,
      "bodyshots": 0,
      "headshots": 0
    }
  ],
  "score": 0,
  "economy": {
    "loadoutValue": 0,
    "weapon": "string",
    "armor": "string",
    "remaining": 0,
    "spent": 0
  },
  "ability": {
    "grenadeEffects": "string",
    "ability1Effects": "string",
    "ability2Effects": "string",
    "ultimateEffects": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|kills|[[val-console-match-v1.KillDto](#schemaval-console-match-v1.killdto)]|true|none|none|
|damage|[[val-console-match-v1.DamageDto](#schemaval-console-match-v1.damagedto)]|true|none|none|
|score|integer(int32)|true|none|none|
|economy|[val-console-match-v1.EconomyDto](#schemaval-console-match-v1.economydto)|true|none|none|
|ability|[val-console-match-v1.AbilityDto](#schemaval-console-match-v1.abilitydto)|true|none|none|

<h2 id="tocS_val-console-match-v1.KillDto">val-console-match-v1.KillDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.killdto"></a>
<a id="schema_val-console-match-v1.KillDto"></a>
<a id="tocSval-console-match-v1.killdto"></a>
<a id="tocsval-console-match-v1.killdto"></a>

```json
{
  "timeSinceGameStartMillis": 0,
  "timeSinceRoundStartMillis": 0,
  "killer": "string",
  "victim": "string",
  "victimLocation": {
    "x": 0,
    "y": 0
  },
  "assistants": [
    "string"
  ],
  "playerLocations": [
    {
      "puuid": "string",
      "viewRadians": 0,
      "location": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "finishingDamage": {
    "damageType": "string",
    "damageItem": "string",
    "isSecondaryFireMode": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeSinceGameStartMillis|integer(int32)|true|none|none|
|timeSinceRoundStartMillis|integer(int32)|true|none|none|
|killer|string|true|none|PUUID|
|victim|string|true|none|PUUID|
|victimLocation|[val-console-match-v1.LocationDto](#schemaval-console-match-v1.locationdto)|true|none|none|
|assistants|[string]|true|none|List of PUUIDs|
|playerLocations|[[val-console-match-v1.PlayerLocationsDto](#schemaval-console-match-v1.playerlocationsdto)]|true|none|none|
|finishingDamage|[val-console-match-v1.FinishingDamageDto](#schemaval-console-match-v1.finishingdamagedto)|true|none|none|

<h2 id="tocS_val-console-match-v1.FinishingDamageDto">val-console-match-v1.FinishingDamageDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.finishingdamagedto"></a>
<a id="schema_val-console-match-v1.FinishingDamageDto"></a>
<a id="tocSval-console-match-v1.finishingdamagedto"></a>
<a id="tocsval-console-match-v1.finishingdamagedto"></a>

```json
{
  "damageType": "string",
  "damageItem": "string",
  "isSecondaryFireMode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|damageType|string|true|none|none|
|damageItem|string|true|none|none|
|isSecondaryFireMode|boolean|true|none|none|

<h2 id="tocS_val-console-match-v1.DamageDto">val-console-match-v1.DamageDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.damagedto"></a>
<a id="schema_val-console-match-v1.DamageDto"></a>
<a id="tocSval-console-match-v1.damagedto"></a>
<a id="tocsval-console-match-v1.damagedto"></a>

```json
{
  "receiver": "string",
  "damage": 0,
  "legshots": 0,
  "bodyshots": 0,
  "headshots": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiver|string|true|none|PUUID|
|damage|integer(int32)|true|none|none|
|legshots|integer(int32)|true|none|none|
|bodyshots|integer(int32)|true|none|none|
|headshots|integer(int32)|true|none|none|

<h2 id="tocS_val-console-match-v1.EconomyDto">val-console-match-v1.EconomyDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.economydto"></a>
<a id="schema_val-console-match-v1.EconomyDto"></a>
<a id="tocSval-console-match-v1.economydto"></a>
<a id="tocsval-console-match-v1.economydto"></a>

```json
{
  "loadoutValue": 0,
  "weapon": "string",
  "armor": "string",
  "remaining": 0,
  "spent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadoutValue|integer(int32)|true|none|none|
|weapon|string|true|none|none|
|armor|string|true|none|none|
|remaining|integer(int32)|true|none|none|
|spent|integer(int32)|true|none|none|

<h2 id="tocS_val-console-match-v1.AbilityDto">val-console-match-v1.AbilityDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.abilitydto"></a>
<a id="schema_val-console-match-v1.AbilityDto"></a>
<a id="tocSval-console-match-v1.abilitydto"></a>
<a id="tocsval-console-match-v1.abilitydto"></a>

```json
{
  "grenadeEffects": "string",
  "ability1Effects": "string",
  "ability2Effects": "string",
  "ultimateEffects": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grenadeEffects|string|false|none|none|
|ability1Effects|string|false|none|none|
|ability2Effects|string|false|none|none|
|ultimateEffects|string|false|none|none|

<h2 id="tocS_val-console-match-v1.MatchlistDto">val-console-match-v1.MatchlistDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.matchlistdto"></a>
<a id="schema_val-console-match-v1.MatchlistDto"></a>
<a id="tocSval-console-match-v1.matchlistdto"></a>
<a id="tocsval-console-match-v1.matchlistdto"></a>

```json
{
  "puuid": "string",
  "history": [
    {
      "matchId": "string",
      "gameStartTimeMillis": 0,
      "queueId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|history|[[val-console-match-v1.MatchlistEntryDto](#schemaval-console-match-v1.matchlistentrydto)]|true|none|none|

<h2 id="tocS_val-console-match-v1.MatchlistEntryDto">val-console-match-v1.MatchlistEntryDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.matchlistentrydto"></a>
<a id="schema_val-console-match-v1.MatchlistEntryDto"></a>
<a id="tocSval-console-match-v1.matchlistentrydto"></a>
<a id="tocsval-console-match-v1.matchlistentrydto"></a>

```json
{
  "matchId": "string",
  "gameStartTimeMillis": 0,
  "queueId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchId|string|true|none|none|
|gameStartTimeMillis|integer(int64)|true|none|none|
|queueId|string|true|none|none|

<h2 id="tocS_val-console-match-v1.RecentMatchesDto">val-console-match-v1.RecentMatchesDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-match-v1.recentmatchesdto"></a>
<a id="schema_val-console-match-v1.RecentMatchesDto"></a>
<a id="tocSval-console-match-v1.recentmatchesdto"></a>
<a id="tocsval-console-match-v1.recentmatchesdto"></a>

```json
{
  "currentTime": 0,
  "matchIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentTime|integer(int64)|true|none|none|
|matchIds|[string]|true|none|A list of recent match ids.|

<h2 id="tocS_val-console-ranked-v1.LeaderboardDto">val-console-ranked-v1.LeaderboardDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-ranked-v1.leaderboarddto"></a>
<a id="schema_val-console-ranked-v1.LeaderboardDto"></a>
<a id="tocSval-console-ranked-v1.leaderboarddto"></a>
<a id="tocsval-console-ranked-v1.leaderboarddto"></a>

```json
{
  "actId": "string",
  "totalPlayers": 0,
  "query": "string",
  "shard": "string",
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "leaderboardRank": 0,
      "rankedRating": 0,
      "numberOfWins": 0
    }
  ],
  "tierDetails": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actId|string|true|none|The act id for the given leaderboard. Act ids can be found using the val-content API.|
|totalPlayers|integer(int64)|true|none|The total number of players in the leaderboard.|
|query|string|false|none|none|
|shard|string|true|none|The shard for the given leaderboard.|
|players|[[val-console-ranked-v1.PlayerDto](#schemaval-console-ranked-v1.playerdto)]|true|none|none|
|tierDetails|[[val-console-ranked-v1.TierDto](#schemaval-console-ranked-v1.tierdto)]|false|none|none|

<h2 id="tocS_val-console-ranked-v1.PlayerDto">val-console-ranked-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-ranked-v1.playerdto"></a>
<a id="schema_val-console-ranked-v1.PlayerDto"></a>
<a id="tocSval-console-ranked-v1.playerdto"></a>
<a id="tocsval-console-ranked-v1.playerdto"></a>

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string",
  "leaderboardRank": 0,
  "rankedRating": 0,
  "numberOfWins": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|false|none|This field may be omitted if the player has been anonymized.|
|gameName|string|false|none|This field may be omitted if the player has been anonymized.|
|tagLine|string|false|none|This field may be omitted if the player has been anonymized.|
|leaderboardRank|integer(int64)|true|none|none|
|rankedRating|integer(int64)|true|none|none|
|numberOfWins|integer(int64)|true|none|none|

<h2 id="tocS_val-console-ranked-v1.TierDto">val-console-ranked-v1.TierDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-console-ranked-v1.tierdto"></a>
<a id="schema_val-console-ranked-v1.TierDto"></a>
<a id="tocSval-console-ranked-v1.tierdto"></a>
<a id="tocsval-console-ranked-v1.tierdto"></a>

```json
{}
```

UNKNOWN TYPE.

<h2 id="tocS_val-content-v1.ContentDto">val-content-v1.ContentDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-content-v1.contentdto"></a>
<a id="schema_val-content-v1.ContentDto"></a>
<a id="tocSval-content-v1.contentdto"></a>
<a id="tocsval-content-v1.contentdto"></a>

```json
{
  "version": "string",
  "characters": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "maps": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "chromas": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "skins": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "skinLevels": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "equips": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "gameModes": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "sprays": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "sprayLevels": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "charms": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "charmLevels": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "playerCards": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "playerTitles": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "acts": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "isActive": true,
      "parentId": "string",
      "type": "string"
    }
  ],
  "ceremonies": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ],
  "totems": [
    {
      "name": "string",
      "localizedNames": {
        "ar-AE": "string",
        "de-DE": "string",
        "en-GB": "string",
        "en-US": "string",
        "es-ES": "string",
        "es-MX": "string",
        "fr-FR": "string",
        "id-ID": "string",
        "it-IT": "string",
        "ja-JP": "string",
        "ko-KR": "string",
        "pl-PL": "string",
        "pt-BR": "string",
        "ru-RU": "string",
        "th-TH": "string",
        "tr-TR": "string",
        "vi-VN": "string",
        "zh-CN": "string",
        "zh-TW": "string"
      },
      "id": "string",
      "assetName": "string",
      "assetPath": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|none|
|characters|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|maps|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|chromas|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|skins|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|skinLevels|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|equips|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|gameModes|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|sprays|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|sprayLevels|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|charms|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|charmLevels|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|playerCards|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|playerTitles|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|true|none|none|
|acts|[[val-content-v1.ActDto](#schemaval-content-v1.actdto)]|true|none|none|
|ceremonies|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|false|none|none|
|totems|[[val-content-v1.ContentItemDto](#schemaval-content-v1.contentitemdto)]|false|none|none|

<h2 id="tocS_val-content-v1.ContentItemDto">val-content-v1.ContentItemDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-content-v1.contentitemdto"></a>
<a id="schema_val-content-v1.ContentItemDto"></a>
<a id="tocSval-content-v1.contentitemdto"></a>
<a id="tocsval-content-v1.contentitemdto"></a>

```json
{
  "name": "string",
  "localizedNames": {
    "ar-AE": "string",
    "de-DE": "string",
    "en-GB": "string",
    "en-US": "string",
    "es-ES": "string",
    "es-MX": "string",
    "fr-FR": "string",
    "id-ID": "string",
    "it-IT": "string",
    "ja-JP": "string",
    "ko-KR": "string",
    "pl-PL": "string",
    "pt-BR": "string",
    "ru-RU": "string",
    "th-TH": "string",
    "tr-TR": "string",
    "vi-VN": "string",
    "zh-CN": "string",
    "zh-TW": "string"
  },
  "id": "string",
  "assetName": "string",
  "assetPath": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|localizedNames|[val-content-v1.LocalizedNamesDto](#schemaval-content-v1.localizednamesdto)|false|none|This field is excluded from the response when a locale is set|
|id|string|true|none|none|
|assetName|string|true|none|none|
|assetPath|string|false|none|This field is only included for maps and game modes. These values are used in the match response.|

<h2 id="tocS_val-content-v1.LocalizedNamesDto">val-content-v1.LocalizedNamesDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-content-v1.localizednamesdto"></a>
<a id="schema_val-content-v1.LocalizedNamesDto"></a>
<a id="tocSval-content-v1.localizednamesdto"></a>
<a id="tocsval-content-v1.localizednamesdto"></a>

```json
{
  "ar-AE": "string",
  "de-DE": "string",
  "en-GB": "string",
  "en-US": "string",
  "es-ES": "string",
  "es-MX": "string",
  "fr-FR": "string",
  "id-ID": "string",
  "it-IT": "string",
  "ja-JP": "string",
  "ko-KR": "string",
  "pl-PL": "string",
  "pt-BR": "string",
  "ru-RU": "string",
  "th-TH": "string",
  "tr-TR": "string",
  "vi-VN": "string",
  "zh-CN": "string",
  "zh-TW": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ar-AE|string|true|none|none|
|de-DE|string|true|none|none|
|en-GB|string|false|none|none|
|en-US|string|true|none|none|
|es-ES|string|true|none|none|
|es-MX|string|true|none|none|
|fr-FR|string|true|none|none|
|id-ID|string|true|none|none|
|it-IT|string|true|none|none|
|ja-JP|string|true|none|none|
|ko-KR|string|true|none|none|
|pl-PL|string|true|none|none|
|pt-BR|string|true|none|none|
|ru-RU|string|true|none|none|
|th-TH|string|true|none|none|
|tr-TR|string|true|none|none|
|vi-VN|string|true|none|none|
|zh-CN|string|true|none|none|
|zh-TW|string|true|none|none|

<h2 id="tocS_val-content-v1.ActDto">val-content-v1.ActDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-content-v1.actdto"></a>
<a id="schema_val-content-v1.ActDto"></a>
<a id="tocSval-content-v1.actdto"></a>
<a id="tocsval-content-v1.actdto"></a>

```json
{
  "name": "string",
  "localizedNames": {
    "ar-AE": "string",
    "de-DE": "string",
    "en-GB": "string",
    "en-US": "string",
    "es-ES": "string",
    "es-MX": "string",
    "fr-FR": "string",
    "id-ID": "string",
    "it-IT": "string",
    "ja-JP": "string",
    "ko-KR": "string",
    "pl-PL": "string",
    "pt-BR": "string",
    "ru-RU": "string",
    "th-TH": "string",
    "tr-TR": "string",
    "vi-VN": "string",
    "zh-CN": "string",
    "zh-TW": "string"
  },
  "id": "string",
  "isActive": true,
  "parentId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|localizedNames|[val-content-v1.LocalizedNamesDto](#schemaval-content-v1.localizednamesdto)|false|none|This field is excluded from the response when a locale is set|
|id|string|true|none|none|
|isActive|boolean|true|none|none|
|parentId|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_val-match-v1.MatchDto">val-match-v1.MatchDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.matchdto"></a>
<a id="schema_val-match-v1.MatchDto"></a>
<a id="tocSval-match-v1.matchdto"></a>
<a id="tocsval-match-v1.matchdto"></a>

```json
{
  "matchInfo": {
    "matchId": "string",
    "mapId": "string",
    "gameVersion": "string",
    "gameLengthMillis": 0,
    "region": "string",
    "gameStartMillis": 0,
    "provisioningFlowId": "string",
    "isCompleted": true,
    "customGameName": "string",
    "queueId": "string",
    "gameMode": "string",
    "isRanked": true,
    "seasonId": "string",
    "premierMatchInfo": {}
  },
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "teamId": "string",
      "partyId": "string",
      "characterId": "string",
      "stats": {
        "score": 0,
        "roundsPlayed": 0,
        "kills": 0,
        "deaths": 0,
        "assists": 0,
        "playtimeMillis": 0,
        "abilityCasts": {
          "grenadeCasts": 0,
          "ability1Casts": 0,
          "ability2Casts": 0,
          "ultimateCasts": 0
        }
      },
      "competitiveTier": 0,
      "isObserver": true,
      "playerCard": "string",
      "playerTitle": "string",
      "accountLevel": 0
    }
  ],
  "coaches": [
    {
      "puuid": "string",
      "teamId": "string"
    }
  ],
  "teams": [
    {
      "teamId": "string",
      "won": true,
      "roundsPlayed": 0,
      "roundsWon": 0,
      "numPoints": 0
    }
  ],
  "roundResults": [
    {
      "roundNum": 0,
      "roundResult": "string",
      "roundCeremony": "string",
      "winningTeam": "string",
      "winningTeamRole": "string",
      "bombPlanter": "string",
      "bombDefuser": "string",
      "plantRoundTime": 0,
      "plantPlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "plantLocation": {
        "x": 0,
        "y": 0
      },
      "plantSite": "string",
      "defuseRoundTime": 0,
      "defusePlayerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "defuseLocation": {
        "x": 0,
        "y": 0
      },
      "playerStats": [
        {
          "puuid": "string",
          "kills": [
            {
              "timeSinceGameStartMillis": 0,
              "timeSinceRoundStartMillis": 0,
              "killer": "string",
              "victim": "string",
              "victimLocation": {
                "x": 0,
                "y": 0
              },
              "assistants": [
                "string"
              ],
              "playerLocations": [
                {
                  "puuid": "string",
                  "viewRadians": 0,
                  "location": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "finishingDamage": {
                "damageType": "string",
                "damageItem": "string",
                "isSecondaryFireMode": true
              }
            }
          ],
          "damage": [
            {
              "receiver": "string",
              "damage": 0,
              "legshots": 0,
              "bodyshots": 0,
              "headshots": 0
            }
          ],
          "score": 0,
          "economy": {
            "loadoutValue": 0,
            "weapon": "string",
            "armor": "string",
            "remaining": 0,
            "spent": 0
          },
          "ability": {
            "grenadeEffects": "string",
            "ability1Effects": "string",
            "ability2Effects": "string",
            "ultimateEffects": "string"
          }
        }
      ],
      "roundResultCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchInfo|[val-match-v1.MatchInfoDto](#schemaval-match-v1.matchinfodto)|true|none|none|
|players|[[val-match-v1.PlayerDto](#schemaval-match-v1.playerdto)]|true|none|none|
|coaches|[[val-match-v1.CoachDto](#schemaval-match-v1.coachdto)]|true|none|none|
|teams|[[val-match-v1.TeamDto](#schemaval-match-v1.teamdto)]|false|none|none|
|roundResults|[[val-match-v1.RoundResultDto](#schemaval-match-v1.roundresultdto)]|false|none|none|

<h2 id="tocS_val-match-v1.MatchInfoDto">val-match-v1.MatchInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.matchinfodto"></a>
<a id="schema_val-match-v1.MatchInfoDto"></a>
<a id="tocSval-match-v1.matchinfodto"></a>
<a id="tocsval-match-v1.matchinfodto"></a>

```json
{
  "matchId": "string",
  "mapId": "string",
  "gameVersion": "string",
  "gameLengthMillis": 0,
  "region": "string",
  "gameStartMillis": 0,
  "provisioningFlowId": "string",
  "isCompleted": true,
  "customGameName": "string",
  "queueId": "string",
  "gameMode": "string",
  "isRanked": true,
  "seasonId": "string",
  "premierMatchInfo": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchId|string|true|none|none|
|mapId|string|true|none|none|
|gameVersion|string|true|none|none|
|gameLengthMillis|integer(int32)|false|none|none|
|region|string|true|none|none|
|gameStartMillis|integer(int64)|true|none|none|
|provisioningFlowId|string|true|none|none|
|isCompleted|boolean|true|none|none|
|customGameName|string|true|none|none|
|queueId|string|true|none|none|
|gameMode|string|true|none|none|
|isRanked|boolean|true|none|none|
|seasonId|string|true|none|none|
|premierMatchInfo|object|true|none|none|

<h2 id="tocS_val-match-v1.PlayerDto">val-match-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.playerdto"></a>
<a id="schema_val-match-v1.PlayerDto"></a>
<a id="tocSval-match-v1.playerdto"></a>
<a id="tocsval-match-v1.playerdto"></a>

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string",
  "teamId": "string",
  "partyId": "string",
  "characterId": "string",
  "stats": {
    "score": 0,
    "roundsPlayed": 0,
    "kills": 0,
    "deaths": 0,
    "assists": 0,
    "playtimeMillis": 0,
    "abilityCasts": {
      "grenadeCasts": 0,
      "ability1Casts": 0,
      "ability2Casts": 0,
      "ultimateCasts": 0
    }
  },
  "competitiveTier": 0,
  "isObserver": true,
  "playerCard": "string",
  "playerTitle": "string",
  "accountLevel": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|gameName|string|true|none|none|
|tagLine|string|true|none|none|
|teamId|string|true|none|none|
|partyId|string|true|none|none|
|characterId|string|false|none|none|
|stats|[val-match-v1.PlayerStatsDto](#schemaval-match-v1.playerstatsdto)|false|none|none|
|competitiveTier|integer(int32)|true|none|none|
|isObserver|boolean|true|none|none|
|playerCard|string|true|none|none|
|playerTitle|string|true|none|none|
|accountLevel|integer(int32)|true|none|none|

<h2 id="tocS_val-match-v1.PlayerStatsDto">val-match-v1.PlayerStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.playerstatsdto"></a>
<a id="schema_val-match-v1.PlayerStatsDto"></a>
<a id="tocSval-match-v1.playerstatsdto"></a>
<a id="tocsval-match-v1.playerstatsdto"></a>

```json
{
  "score": 0,
  "roundsPlayed": 0,
  "kills": 0,
  "deaths": 0,
  "assists": 0,
  "playtimeMillis": 0,
  "abilityCasts": {
    "grenadeCasts": 0,
    "ability1Casts": 0,
    "ability2Casts": 0,
    "ultimateCasts": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|integer(int32)|true|none|none|
|roundsPlayed|integer(int32)|true|none|none|
|kills|integer(int32)|true|none|none|
|deaths|integer(int32)|true|none|none|
|assists|integer(int32)|true|none|none|
|playtimeMillis|integer(int32)|true|none|none|
|abilityCasts|[val-match-v1.AbilityCastsDto](#schemaval-match-v1.abilitycastsdto)|false|none|none|

<h2 id="tocS_val-match-v1.AbilityCastsDto">val-match-v1.AbilityCastsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.abilitycastsdto"></a>
<a id="schema_val-match-v1.AbilityCastsDto"></a>
<a id="tocSval-match-v1.abilitycastsdto"></a>
<a id="tocsval-match-v1.abilitycastsdto"></a>

```json
{
  "grenadeCasts": 0,
  "ability1Casts": 0,
  "ability2Casts": 0,
  "ultimateCasts": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grenadeCasts|integer(int32)|true|none|none|
|ability1Casts|integer(int32)|true|none|none|
|ability2Casts|integer(int32)|true|none|none|
|ultimateCasts|integer(int32)|true|none|none|

<h2 id="tocS_val-match-v1.CoachDto">val-match-v1.CoachDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.coachdto"></a>
<a id="schema_val-match-v1.CoachDto"></a>
<a id="tocSval-match-v1.coachdto"></a>
<a id="tocsval-match-v1.coachdto"></a>

```json
{
  "puuid": "string",
  "teamId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|teamId|string|true|none|none|

<h2 id="tocS_val-match-v1.TeamDto">val-match-v1.TeamDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.teamdto"></a>
<a id="schema_val-match-v1.TeamDto"></a>
<a id="tocSval-match-v1.teamdto"></a>
<a id="tocsval-match-v1.teamdto"></a>

```json
{
  "teamId": "string",
  "won": true,
  "roundsPlayed": 0,
  "roundsWon": 0,
  "numPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamId|string|true|none|This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch.|
|won|boolean|true|none|none|
|roundsPlayed|integer(int32)|true|none|none|
|roundsWon|integer(int32)|true|none|none|
|numPoints|integer(int32)|true|none|Team points scored. Number of kills in deathmatch.|

<h2 id="tocS_val-match-v1.RoundResultDto">val-match-v1.RoundResultDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.roundresultdto"></a>
<a id="schema_val-match-v1.RoundResultDto"></a>
<a id="tocSval-match-v1.roundresultdto"></a>
<a id="tocsval-match-v1.roundresultdto"></a>

```json
{
  "roundNum": 0,
  "roundResult": "string",
  "roundCeremony": "string",
  "winningTeam": "string",
  "winningTeamRole": "string",
  "bombPlanter": "string",
  "bombDefuser": "string",
  "plantRoundTime": 0,
  "plantPlayerLocations": [
    {
      "puuid": "string",
      "viewRadians": 0,
      "location": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "plantLocation": {
    "x": 0,
    "y": 0
  },
  "plantSite": "string",
  "defuseRoundTime": 0,
  "defusePlayerLocations": [
    {
      "puuid": "string",
      "viewRadians": 0,
      "location": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "defuseLocation": {
    "x": 0,
    "y": 0
  },
  "playerStats": [
    {
      "puuid": "string",
      "kills": [
        {
          "timeSinceGameStartMillis": 0,
          "timeSinceRoundStartMillis": 0,
          "killer": "string",
          "victim": "string",
          "victimLocation": {
            "x": 0,
            "y": 0
          },
          "assistants": [
            "string"
          ],
          "playerLocations": [
            {
              "puuid": "string",
              "viewRadians": 0,
              "location": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "finishingDamage": {
            "damageType": "string",
            "damageItem": "string",
            "isSecondaryFireMode": true
          }
        }
      ],
      "damage": [
        {
          "receiver": "string",
          "damage": 0,
          "legshots": 0,
          "bodyshots": 0,
          "headshots": 0
        }
      ],
      "score": 0,
      "economy": {
        "loadoutValue": 0,
        "weapon": "string",
        "armor": "string",
        "remaining": 0,
        "spent": 0
      },
      "ability": {
        "grenadeEffects": "string",
        "ability1Effects": "string",
        "ability2Effects": "string",
        "ultimateEffects": "string"
      }
    }
  ],
  "roundResultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roundNum|integer(int32)|true|none|none|
|roundResult|string|true|none|none|
|roundCeremony|string|true|none|none|
|winningTeam|string|true|none|none|
|winningTeamRole|string|true|none|none|
|bombPlanter|string|false|none|PUUID of player|
|bombDefuser|string|false|none|PUUID of player|
|plantRoundTime|integer(int32)|true|none|none|
|plantPlayerLocations|[[val-match-v1.PlayerLocationsDto](#schemaval-match-v1.playerlocationsdto)]|false|none|none|
|plantLocation|[val-match-v1.LocationDto](#schemaval-match-v1.locationdto)|true|none|none|
|plantSite|string|true|none|none|
|defuseRoundTime|integer(int32)|true|none|none|
|defusePlayerLocations|[[val-match-v1.PlayerLocationsDto](#schemaval-match-v1.playerlocationsdto)]|false|none|none|
|defuseLocation|[val-match-v1.LocationDto](#schemaval-match-v1.locationdto)|true|none|none|
|playerStats|[[val-match-v1.PlayerRoundStatsDto](#schemaval-match-v1.playerroundstatsdto)]|true|none|none|
|roundResultCode|string|true|none|none|

<h2 id="tocS_val-match-v1.PlayerLocationsDto">val-match-v1.PlayerLocationsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.playerlocationsdto"></a>
<a id="schema_val-match-v1.PlayerLocationsDto"></a>
<a id="tocSval-match-v1.playerlocationsdto"></a>
<a id="tocsval-match-v1.playerlocationsdto"></a>

```json
{
  "puuid": "string",
  "viewRadians": 0,
  "location": {
    "x": 0,
    "y": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|viewRadians|number(float)|true|none|none|
|location|[val-match-v1.LocationDto](#schemaval-match-v1.locationdto)|true|none|none|

<h2 id="tocS_val-match-v1.LocationDto">val-match-v1.LocationDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.locationdto"></a>
<a id="schema_val-match-v1.LocationDto"></a>
<a id="tocSval-match-v1.locationdto"></a>
<a id="tocsval-match-v1.locationdto"></a>

```json
{
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|true|none|none|
|y|integer(int32)|true|none|none|

<h2 id="tocS_val-match-v1.PlayerRoundStatsDto">val-match-v1.PlayerRoundStatsDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.playerroundstatsdto"></a>
<a id="schema_val-match-v1.PlayerRoundStatsDto"></a>
<a id="tocSval-match-v1.playerroundstatsdto"></a>
<a id="tocsval-match-v1.playerroundstatsdto"></a>

```json
{
  "puuid": "string",
  "kills": [
    {
      "timeSinceGameStartMillis": 0,
      "timeSinceRoundStartMillis": 0,
      "killer": "string",
      "victim": "string",
      "victimLocation": {
        "x": 0,
        "y": 0
      },
      "assistants": [
        "string"
      ],
      "playerLocations": [
        {
          "puuid": "string",
          "viewRadians": 0,
          "location": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "finishingDamage": {
        "damageType": "string",
        "damageItem": "string",
        "isSecondaryFireMode": true
      }
    }
  ],
  "damage": [
    {
      "receiver": "string",
      "damage": 0,
      "legshots": 0,
      "bodyshots": 0,
      "headshots": 0
    }
  ],
  "score": 0,
  "economy": {
    "loadoutValue": 0,
    "weapon": "string",
    "armor": "string",
    "remaining": 0,
    "spent": 0
  },
  "ability": {
    "grenadeEffects": "string",
    "ability1Effects": "string",
    "ability2Effects": "string",
    "ultimateEffects": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|kills|[[val-match-v1.KillDto](#schemaval-match-v1.killdto)]|true|none|none|
|damage|[[val-match-v1.DamageDto](#schemaval-match-v1.damagedto)]|true|none|none|
|score|integer(int32)|true|none|none|
|economy|[val-match-v1.EconomyDto](#schemaval-match-v1.economydto)|true|none|none|
|ability|[val-match-v1.AbilityDto](#schemaval-match-v1.abilitydto)|true|none|none|

<h2 id="tocS_val-match-v1.KillDto">val-match-v1.KillDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.killdto"></a>
<a id="schema_val-match-v1.KillDto"></a>
<a id="tocSval-match-v1.killdto"></a>
<a id="tocsval-match-v1.killdto"></a>

```json
{
  "timeSinceGameStartMillis": 0,
  "timeSinceRoundStartMillis": 0,
  "killer": "string",
  "victim": "string",
  "victimLocation": {
    "x": 0,
    "y": 0
  },
  "assistants": [
    "string"
  ],
  "playerLocations": [
    {
      "puuid": "string",
      "viewRadians": 0,
      "location": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "finishingDamage": {
    "damageType": "string",
    "damageItem": "string",
    "isSecondaryFireMode": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeSinceGameStartMillis|integer(int32)|true|none|none|
|timeSinceRoundStartMillis|integer(int32)|true|none|none|
|killer|string|true|none|PUUID|
|victim|string|true|none|PUUID|
|victimLocation|[val-match-v1.LocationDto](#schemaval-match-v1.locationdto)|true|none|none|
|assistants|[string]|true|none|List of PUUIDs|
|playerLocations|[[val-match-v1.PlayerLocationsDto](#schemaval-match-v1.playerlocationsdto)]|true|none|none|
|finishingDamage|[val-match-v1.FinishingDamageDto](#schemaval-match-v1.finishingdamagedto)|true|none|none|

<h2 id="tocS_val-match-v1.FinishingDamageDto">val-match-v1.FinishingDamageDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.finishingdamagedto"></a>
<a id="schema_val-match-v1.FinishingDamageDto"></a>
<a id="tocSval-match-v1.finishingdamagedto"></a>
<a id="tocsval-match-v1.finishingdamagedto"></a>

```json
{
  "damageType": "string",
  "damageItem": "string",
  "isSecondaryFireMode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|damageType|string|true|none|none|
|damageItem|string|true|none|none|
|isSecondaryFireMode|boolean|true|none|none|

<h2 id="tocS_val-match-v1.DamageDto">val-match-v1.DamageDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.damagedto"></a>
<a id="schema_val-match-v1.DamageDto"></a>
<a id="tocSval-match-v1.damagedto"></a>
<a id="tocsval-match-v1.damagedto"></a>

```json
{
  "receiver": "string",
  "damage": 0,
  "legshots": 0,
  "bodyshots": 0,
  "headshots": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiver|string|true|none|PUUID|
|damage|integer(int32)|true|none|none|
|legshots|integer(int32)|true|none|none|
|bodyshots|integer(int32)|true|none|none|
|headshots|integer(int32)|true|none|none|

<h2 id="tocS_val-match-v1.EconomyDto">val-match-v1.EconomyDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.economydto"></a>
<a id="schema_val-match-v1.EconomyDto"></a>
<a id="tocSval-match-v1.economydto"></a>
<a id="tocsval-match-v1.economydto"></a>

```json
{
  "loadoutValue": 0,
  "weapon": "string",
  "armor": "string",
  "remaining": 0,
  "spent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loadoutValue|integer(int32)|true|none|none|
|weapon|string|true|none|none|
|armor|string|true|none|none|
|remaining|integer(int32)|true|none|none|
|spent|integer(int32)|true|none|none|

<h2 id="tocS_val-match-v1.AbilityDto">val-match-v1.AbilityDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.abilitydto"></a>
<a id="schema_val-match-v1.AbilityDto"></a>
<a id="tocSval-match-v1.abilitydto"></a>
<a id="tocsval-match-v1.abilitydto"></a>

```json
{
  "grenadeEffects": "string",
  "ability1Effects": "string",
  "ability2Effects": "string",
  "ultimateEffects": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grenadeEffects|string|false|none|none|
|ability1Effects|string|false|none|none|
|ability2Effects|string|false|none|none|
|ultimateEffects|string|false|none|none|

<h2 id="tocS_val-match-v1.MatchlistDto">val-match-v1.MatchlistDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.matchlistdto"></a>
<a id="schema_val-match-v1.MatchlistDto"></a>
<a id="tocSval-match-v1.matchlistdto"></a>
<a id="tocsval-match-v1.matchlistdto"></a>

```json
{
  "puuid": "string",
  "history": [
    {
      "matchId": "string",
      "gameStartTimeMillis": 0,
      "queueId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|true|none|none|
|history|[[val-match-v1.MatchlistEntryDto](#schemaval-match-v1.matchlistentrydto)]|true|none|none|

<h2 id="tocS_val-match-v1.MatchlistEntryDto">val-match-v1.MatchlistEntryDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.matchlistentrydto"></a>
<a id="schema_val-match-v1.MatchlistEntryDto"></a>
<a id="tocSval-match-v1.matchlistentrydto"></a>
<a id="tocsval-match-v1.matchlistentrydto"></a>

```json
{
  "matchId": "string",
  "gameStartTimeMillis": 0,
  "queueId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchId|string|true|none|none|
|gameStartTimeMillis|integer(int64)|true|none|none|
|queueId|string|true|none|none|

<h2 id="tocS_val-match-v1.RecentMatchesDto">val-match-v1.RecentMatchesDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-match-v1.recentmatchesdto"></a>
<a id="schema_val-match-v1.RecentMatchesDto"></a>
<a id="tocSval-match-v1.recentmatchesdto"></a>
<a id="tocsval-match-v1.recentmatchesdto"></a>

```json
{
  "currentTime": 0,
  "matchIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentTime|integer(int64)|true|none|none|
|matchIds|[string]|true|none|A list of recent match ids.|

<h2 id="tocS_val-ranked-v1.LeaderboardDto">val-ranked-v1.LeaderboardDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-ranked-v1.leaderboarddto"></a>
<a id="schema_val-ranked-v1.LeaderboardDto"></a>
<a id="tocSval-ranked-v1.leaderboarddto"></a>
<a id="tocsval-ranked-v1.leaderboarddto"></a>

```json
{
  "shard": "string",
  "actId": "string",
  "totalPlayers": 0,
  "players": [
    {
      "puuid": "string",
      "gameName": "string",
      "tagLine": "string",
      "leaderboardRank": 0,
      "rankedRating": 0,
      "numberOfWins": 0,
      "competitiveTier": 0,
      "prefix": "string",
      "premierRosterType": "string"
    }
  ],
  "immortalStartingPage": 0,
  "immortalStartingIndex": 0,
  "topTierRRThreshold": 0,
  "tierDetails": {
    "property1": {
      "rankedRatingThreshold": 0,
      "startingPage": 0,
      "startingIndex": 0
    },
    "property2": {
      "rankedRatingThreshold": 0,
      "startingPage": 0,
      "startingIndex": 0
    }
  },
  "startIndex": 0,
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shard|string|true|none|The shard for the given leaderboard.|
|actId|string|true|none|The act id for the given leaderboard. Act ids can be found using the val-content API.|
|totalPlayers|integer(int64)|true|none|The total number of players in the leaderboard.|
|players|[[val-ranked-v1.PlayerDto](#schemaval-ranked-v1.playerdto)]|true|none|none|
|immortalStartingPage|integer(int64)|false|none|none|
|immortalStartingIndex|integer(int64)|false|none|none|
|topTierRRThreshold|integer(int64)|false|none|none|
|tierDetails|object|false|none|none|
|startIndex|integer(int64)|false|none|none|
|query|string|false|none|none|

<h2 id="tocS_val-ranked-v1.PlayerDto">val-ranked-v1.PlayerDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-ranked-v1.playerdto"></a>
<a id="schema_val-ranked-v1.PlayerDto"></a>
<a id="tocSval-ranked-v1.playerdto"></a>
<a id="tocsval-ranked-v1.playerdto"></a>

```json
{
  "puuid": "string",
  "gameName": "string",
  "tagLine": "string",
  "leaderboardRank": 0,
  "rankedRating": 0,
  "numberOfWins": 0,
  "competitiveTier": 0,
  "prefix": "string",
  "premierRosterType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|puuid|string|false|none|This field may be omitted if the player has been anonymized.|
|gameName|string|false|none|This field may be omitted if the player has been anonymized.|
|tagLine|string|false|none|This field may be omitted if the player has been anonymized.|
|leaderboardRank|integer(int64)|true|none|none|
|rankedRating|integer(int64)|true|none|none|
|numberOfWins|integer(int64)|true|none|none|
|competitiveTier|integer(int64)|false|none|none|
|prefix|string|false|none|none|
|premierRosterType|string|true|none|none|

<h2 id="tocS_val-ranked-v1.TierDetailDto">val-ranked-v1.TierDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-ranked-v1.tierdetaildto"></a>
<a id="schema_val-ranked-v1.TierDetailDto"></a>
<a id="tocSval-ranked-v1.tierdetaildto"></a>
<a id="tocsval-ranked-v1.tierdetaildto"></a>

```json
{
  "rankedRatingThreshold": 0,
  "startingPage": 0,
  "startingIndex": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rankedRatingThreshold|integer(int64)|true|none|none|
|startingPage|integer(int64)|true|none|none|
|startingIndex|integer(int64)|true|none|none|

<h2 id="tocS_val-status-v1.PlatformDataDto">val-status-v1.PlatformDataDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-status-v1.platformdatadto"></a>
<a id="schema_val-status-v1.PlatformDataDto"></a>
<a id="tocSval-status-v1.platformdatadto"></a>
<a id="tocsval-status-v1.platformdatadto"></a>

```json
{
  "id": "string",
  "name": "string",
  "locales": [
    "string"
  ],
  "maintenances": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ],
  "incidents": [
    {
      "id": 0,
      "maintenance_status": "scheduled",
      "incident_severity": "info",
      "titles": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "updates": [
        {
          "id": 0,
          "author": "string",
          "publish": true,
          "publish_locations": [
            "riotclient"
          ],
          "translations": [
            {
              "locale": "string",
              "content": "string"
            }
          ],
          "created_at": "string",
          "updated_at": "string"
        }
      ],
      "created_at": "string",
      "archive_at": "string",
      "updated_at": "string",
      "platforms": [
        "windows"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|locales|[string]|true|none|none|
|maintenances|[[val-status-v1.StatusDto](#schemaval-status-v1.statusdto)]|true|none|none|
|incidents|[[val-status-v1.StatusDto](#schemaval-status-v1.statusdto)]|true|none|none|

<h2 id="tocS_val-status-v1.StatusDto">val-status-v1.StatusDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-status-v1.statusdto"></a>
<a id="schema_val-status-v1.StatusDto"></a>
<a id="tocSval-status-v1.statusdto"></a>
<a id="tocsval-status-v1.statusdto"></a>

```json
{
  "id": 0,
  "maintenance_status": "scheduled",
  "incident_severity": "info",
  "titles": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "updates": [
    {
      "id": 0,
      "author": "string",
      "publish": true,
      "publish_locations": [
        "riotclient"
      ],
      "translations": [
        {
          "locale": "string",
          "content": "string"
        }
      ],
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "created_at": "string",
  "archive_at": "string",
  "updated_at": "string",
  "platforms": [
    "windows"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|maintenance_status|string|true|none|(Legal values:  scheduled,  in_progress,  complete)|
|incident_severity|string|true|none|(Legal values:  info,  warning,  critical)|
|titles|[[val-status-v1.ContentDto](#schemaval-status-v1.contentdto)]|true|none|none|
|updates|[[val-status-v1.UpdateDto](#schemaval-status-v1.updatedto)]|true|none|none|
|created_at|string|true|none|none|
|archive_at|string|true|none|none|
|updated_at|string|true|none|none|
|platforms|[string]|true|none|(Legal values: windows, macos, android, ios, ps4, xbone, switch)|

#### Enumerated Values

|Property|Value|
|---|---|
|maintenance_status|scheduled|
|maintenance_status|in_progress|
|maintenance_status|complete|
|incident_severity|info|
|incident_severity|warning|
|incident_severity|critical|
|platforms|windows|
|platforms|macos|
|platforms|android|
|platforms|ios|
|platforms|ps4|
|platforms|xbone|
|platforms|switch|

<h2 id="tocS_val-status-v1.ContentDto">val-status-v1.ContentDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-status-v1.contentdto"></a>
<a id="schema_val-status-v1.ContentDto"></a>
<a id="tocSval-status-v1.contentdto"></a>
<a id="tocsval-status-v1.contentdto"></a>

```json
{
  "locale": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_val-status-v1.UpdateDto">val-status-v1.UpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaval-status-v1.updatedto"></a>
<a id="schema_val-status-v1.UpdateDto"></a>
<a id="tocSval-status-v1.updatedto"></a>
<a id="tocsval-status-v1.updatedto"></a>

```json
{
  "id": 0,
  "author": "string",
  "publish": true,
  "publish_locations": [
    "riotclient"
  ],
  "translations": [
    {
      "locale": "string",
      "content": "string"
    }
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|true|none|none|
|author|string|true|none|none|
|publish|boolean|true|none|none|
|publish_locations|[string]|true|none|(Legal values: riotclient, riotstatus, game)|
|translations|[[val-status-v1.ContentDto](#schemaval-status-v1.contentdto)]|true|none|none|
|created_at|string|true|none|none|
|updated_at|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|publish_locations|riotclient|
|publish_locations|riotstatus|
|publish_locations|game|
