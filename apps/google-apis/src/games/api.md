<h1 id="google-play-game-services">Google Play Game Services v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Play games service allows developers to enhance games with social leaderboards, achievements, game state, sign-in with Google, and more.

Base URLs:

* <a href="https://games.googleapis.com/">https://games.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/games/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive.appdata|See, create, and delete its own configuration data in your Google Drive|
|https://www.googleapis.com/auth/games|Create, edit, and delete your Google Play Games activity|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive.appdata|See, create, and delete its own configuration data in your Google Drive|
|https://www.googleapis.com/auth/games|Create, edit, and delete your Google Play Games activity|

<h1 id="google-play-game-services-achievementdefinitions">achievementDefinitions</h1>

## games.achievementDefinitions.list

<a id="opIdgames.achievementDefinitions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/achievements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/achievements`

Lists all the achievement definitions for your application.

<h3 id="gamesachievementdefinitionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
      "description": "string",
      "experiencePoints": "string",
      "formattedTotalSteps": "string",
      "id": "string",
      "initialState": "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED",
      "isRevealedIconUrlDefault": true,
      "isUnlockedIconUrlDefault": true,
      "kind": "string",
      "name": "string",
      "revealedIconUrl": "string",
      "totalSteps": 0,
      "unlockedIconUrl": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesachievementdefinitionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementDefinitionsListResponse](#schemaachievementdefinitionslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-achievements">achievements</h1>

## games.achievements.updateMultiple

<a id="opIdgames.achievements.updateMultiple"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/achievements/updateMultiple \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "string",
    "updates": [
      {
        "achievementId": "string",
        "incrementPayload": {
          "kind": "string",
          "requestId": "string",
          "steps": 0
        },
        "kind": "string",
        "setStepsAtLeastPayload": {
          "kind": "string",
          "steps": 0
        },
        "updateType": "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
      }
    ]
  }'
```

`POST /games/v1/achievements/updateMultiple`

Updates multiple achievements for the currently authenticated player.

> Body parameter

```json
{
  "kind": "string",
  "updates": [
    {
      "achievementId": "string",
      "incrementPayload": {
        "kind": "string",
        "requestId": "string",
        "steps": 0
      },
      "kind": "string",
      "setStepsAtLeastPayload": {
        "kind": "string",
        "steps": 0
      },
      "updateType": "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="gamesachievementsupdatemultiple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[AchievementUpdateMultipleRequest](#schemaachievementupdatemultiplerequest)|false|none|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`.|
|» updates|body|[[AchievementUpdateRequest](#schemaachievementupdaterequest)]|false|The individual achievement update requests.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "string",
  "updatedAchievements": [
    {
      "achievementId": "string",
      "currentState": "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED",
      "currentSteps": 0,
      "kind": "string",
      "newlyUnlocked": true,
      "updateOccurred": true
    }
  ]
}
```

<h3 id="gamesachievementsupdatemultiple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementUpdateMultipleResponse](#schemaachievementupdatemultipleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.achievements.increment

<a id="opIdgames.achievements.increment"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/games/v1/achievements/string/increment?stepsToIncrement=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/achievements/{achievementId}/increment`

Increments the steps of the achievement with the given ID for the currently authenticated player.

<h3 id="gamesachievementsincrement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|achievementId|path|string|true|The ID of the achievement used by this method.|
|stepsToIncrement|query|integer|true|The number of steps to increment.|
|requestId|query|string|false|A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "currentSteps": 0,
  "kind": "string",
  "newlyUnlocked": true
}
```

<h3 id="gamesachievementsincrement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementIncrementResponse](#schemaachievementincrementresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.achievements.reveal

<a id="opIdgames.achievements.reveal"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/achievements/string/reveal \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/achievements/{achievementId}/reveal`

Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.

<h3 id="gamesachievementsreveal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|achievementId|path|string|true|The ID of the achievement used by this method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "currentState": "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED",
  "kind": "string"
}
```

<h3 id="gamesachievementsreveal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementRevealResponse](#schemaachievementrevealresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.achievements.setStepsAtLeast

<a id="opIdgames.achievements.setStepsAtLeast"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/games/v1/achievements/string/setStepsAtLeast?steps=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/achievements/{achievementId}/setStepsAtLeast`

Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.

<h3 id="gamesachievementssetstepsatleast-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|achievementId|path|string|true|The ID of the achievement used by this method.|
|steps|query|integer|true|The minimum value to set the steps to.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "currentSteps": 0,
  "kind": "string",
  "newlyUnlocked": true
}
```

<h3 id="gamesachievementssetstepsatleast-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementSetStepsAtLeastResponse](#schemaachievementsetstepsatleastresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.achievements.unlock

<a id="opIdgames.achievements.unlock"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/achievements/string/unlock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/achievements/{achievementId}/unlock`

Unlocks this achievement for the currently authenticated player.

<h3 id="gamesachievementsunlock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|achievementId|path|string|true|The ID of the achievement used by this method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "string",
  "newlyUnlocked": true
}
```

<h3 id="gamesachievementsunlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementUnlockResponse](#schemaachievementunlockresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.achievements.list

<a id="opIdgames.achievements.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/string/achievements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/{playerId}/achievements`

Lists the progress for all your application's achievements for the currently authenticated player.

<h3 id="gamesachievementslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|state|query|string|false|Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|ALL|
|state|HIDDEN|
|state|REVEALED|
|state|UNLOCKED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "achievementState": "STATE_UNSPECIFIED",
      "currentSteps": 0,
      "experiencePoints": "string",
      "formattedCurrentStepsString": "string",
      "id": "string",
      "kind": "string",
      "lastUpdatedTimestamp": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesachievementslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerAchievementListResponse](#schemaplayerachievementlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-applications">applications</h1>

## games.applications.getEndPoint

<a id="opIdgames.applications.getEndPoint"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/applications/getEndPoint \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/applications/getEndPoint`

Returns a URL for the requested end point type.

<h3 id="gamesapplicationsgetendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|query|string|false|The application ID from the Google Play developer console.|
|endPointType|query|string|false|Type of endpoint being requested.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|endPointType|END_POINT_TYPE_UNSPECIFIED|
|endPointType|PROFILE_CREATION|
|endPointType|PROFILE_SETTINGS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "url": "string"
}
```

<h3 id="gamesapplicationsgetendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EndPoint](#schemaendpoint)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.applications.played

<a id="opIdgames.applications.played"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/applications/played \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/applications/played`

Indicate that the currently authenticated user is playing your application.

<h3 id="gamesapplicationsplayed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gamesapplicationsplayed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.applications.get

<a id="opIdgames.applications.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/applications/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/applications/{applicationId}`

Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.

<h3 id="gamesapplicationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|platformType|query|string|false|Restrict application details returned to the specific platform.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|ANDROID|
|platformType|IOS|
|platformType|WEB_APP|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "achievement_count": 0,
  "assets": [
    {
      "height": 0,
      "kind": "string",
      "name": "string",
      "url": "string",
      "width": 0
    }
  ],
  "author": "string",
  "category": {
    "kind": "string",
    "primary": "string",
    "secondary": "string"
  },
  "description": "string",
  "enabledFeatures": [
    "APPLICATION_FEATURE_UNSPECIFIED"
  ],
  "id": "string",
  "instances": [
    {
      "acquisitionUri": "string",
      "androidInstance": {
        "enablePiracyCheck": true,
        "kind": "string",
        "packageName": "string",
        "preferred": true
      },
      "iosInstance": {
        "bundleIdentifier": "string",
        "itunesAppId": "string",
        "kind": "string",
        "preferredForIpad": true,
        "preferredForIphone": true,
        "supportIpad": true,
        "supportIphone": true
      },
      "kind": "string",
      "name": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "realtimePlay": true,
      "turnBasedPlay": true,
      "webInstance": {
        "kind": "string",
        "launchUrl": "string",
        "preferred": true
      }
    }
  ],
  "kind": "string",
  "lastUpdatedTimestamp": "string",
  "leaderboard_count": 0,
  "name": "string",
  "themeColor": "string"
}
```

<h3 id="gamesapplicationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Application](#schemaapplication)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.applications.verify

<a id="opIdgames.applications.verify"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/applications/string/verify \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/applications/{applicationId}/verify`

Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

<h3 id="gamesapplicationsverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "alternate_player_id": "string",
  "kind": "string",
  "player_id": "string"
}
```

<h3 id="gamesapplicationsverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ApplicationVerifyResponse](#schemaapplicationverifyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-events">events</h1>

## games.events.listDefinitions

<a id="opIdgames.events.listDefinitions"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/eventDefinitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/eventDefinitions`

Returns a list of the event definitions in this application.

<h3 id="gameseventslistdefinitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "childEvents": [
        {
          "childId": "string",
          "kind": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "imageUrl": "string",
      "isDefaultImageUrl": true,
      "kind": "string",
      "visibility": "EVENT_VISIBILITY_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gameseventslistdefinitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EventDefinitionListResponse](#schemaeventdefinitionlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.events.listByPlayer

<a id="opIdgames.events.listByPlayer"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/events`

Returns a list showing the current progress on events in this application for the currently authenticated user.

<h3 id="gameseventslistbyplayer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "definitionId": "string",
      "formattedNumEvents": "string",
      "kind": "string",
      "numEvents": "string",
      "playerId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gameseventslistbyplayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerEventListResponse](#schemaplayereventlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.events.record

<a id="opIdgames.events.record"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentTimeMillis": "string",
    "kind": "string",
    "requestId": "string",
    "timePeriods": [
      {
        "kind": "string",
        "timePeriod": {
          "kind": "string",
          "periodEndMillis": "string",
          "periodStartMillis": "string"
        },
        "updates": [
          {
            "definitionId": "string",
            "kind": "string",
            "updateCount": "string"
          }
        ]
      }
    ]
  }'
```

`POST /games/v1/events`

Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

> Body parameter

```json
{
  "currentTimeMillis": "string",
  "kind": "string",
  "requestId": "string",
  "timePeriods": [
    {
      "kind": "string",
      "timePeriod": {
        "kind": "string",
        "periodEndMillis": "string",
        "periodStartMillis": "string"
      },
      "updates": [
        {
          "definitionId": "string",
          "kind": "string",
          "updateCount": "string"
        }
      ]
    }
  ]
}
```

<h3 id="gameseventsrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[EventRecordRequest](#schemaeventrecordrequest)|false|none|
|» currentTimeMillis|body|string(int64)|false|The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`.|
|» requestId|body|string(int64)|false|The request ID used to identify this attempt to record events.|
|» timePeriods|body|[[EventPeriodUpdate](#schemaeventperiodupdate)]|false|A list of the time period updates being made in this request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "batchFailures": [
    {
      "failureCause": "EVENT_FAILURE_CAUSE_UNSPECIFIED",
      "kind": "string",
      "range": {
        "kind": "string",
        "periodEndMillis": "string",
        "periodStartMillis": "string"
      }
    }
  ],
  "eventFailures": [
    {
      "eventId": "string",
      "failureCause": "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED",
      "kind": "string"
    }
  ],
  "kind": "string",
  "playerEvents": [
    {
      "definitionId": "string",
      "formattedNumEvents": "string",
      "kind": "string",
      "numEvents": "string",
      "playerId": "string"
    }
  ]
}
```

<h3 id="gameseventsrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EventUpdateResponse](#schemaeventupdateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-leaderboards">leaderboards</h1>

## games.leaderboards.list

<a id="opIdgames.leaderboards.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/leaderboards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/leaderboards`

Lists all the leaderboard metadata for your application.

<h3 id="gamesleaderboardslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "iconUrl": "string",
      "id": "string",
      "isIconUrlDefault": true,
      "kind": "string",
      "name": "string",
      "order": "SCORE_ORDER_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesleaderboardslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardListResponse](#schemaleaderboardlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.leaderboards.get

<a id="opIdgames.leaderboards.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/leaderboards/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/leaderboards/{leaderboardId}`

Retrieves the metadata of the leaderboard with the given ID.

<h3 id="gamesleaderboardsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leaderboardId|path|string|true|The ID of the leaderboard.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "iconUrl": "string",
  "id": "string",
  "isIconUrlDefault": true,
  "kind": "string",
  "name": "string",
  "order": "SCORE_ORDER_UNSPECIFIED"
}
```

<h3 id="gamesleaderboardsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Leaderboard](#schemaleaderboard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-metagame">metagame</h1>

## games.metagame.getMetagameConfig

<a id="opIdgames.metagame.getMetagameConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/metagameConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/metagameConfig`

Return the metagame configuration data for the calling application.

<h3 id="gamesmetagamegetmetagameconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "currentVersion": 0,
  "kind": "string",
  "playerLevels": [
    {
      "kind": "string",
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    }
  ]
}
```

<h3 id="gamesmetagamegetmetagameconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MetagameConfig](#schemametagameconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.metagame.listCategoriesByPlayer

<a id="opIdgames.metagame.listCategoriesByPlayer"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/string/categories/COLLECTION_UNSPECIFIED \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/{playerId}/categories/{collection}`

List play data aggregated per category for the player corresponding to `playerId`.

<h3 id="gamesmetagamelistcategoriesbyplayer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
|collection|path|string|true|The collection of categories for which data will be returned.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|COLLECTION_UNSPECIFIED|
|collection|ALL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "category": "string",
      "experiencePoints": "string",
      "kind": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesmetagamelistcategoriesbyplayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CategoryListResponse](#schemacategorylistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-players">players</h1>

## games.players.getMultipleApplicationPlayerIds

<a id="opIdgames.players.getMultipleApplicationPlayerIds"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/me/multipleApplicationPlayerIds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/me/multipleApplicationPlayerIds`

Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.

<h3 id="gamesplayersgetmultipleapplicationplayerids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationIds|query|[string]|false|Required. The application IDs from the Google Play developer console for the games to return scoped ids for.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "playerIds": [
    {
      "applicationId": "string",
      "playerId": "string"
    }
  ]
}
```

<h3 id="gamesplayersgetmultipleapplicationplayerids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetMultipleApplicationPlayerIdsResponse](#schemagetmultipleapplicationplayeridsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.players.list

<a id="opIdgames.players.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/me/players/CONNECTED \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/me/players/{collection}`

Get the collection of players for the currently authenticated user.

<h3 id="gamesplayerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection of players being retrieved|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|CONNECTED|
|collection|VISIBLE|
|collection|FRIENDS_ALL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "avatarImageUrl": "string",
      "bannerUrlLandscape": "string",
      "bannerUrlPortrait": "string",
      "displayName": "string",
      "experienceInfo": {
        "currentExperiencePoints": "string",
        "currentLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        },
        "kind": "string",
        "lastLevelUpTimestampMillis": "string",
        "nextLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        }
      },
      "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
      "gamePlayerId": "string",
      "kind": "string",
      "name": {
        "familyName": "string",
        "givenName": "string"
      },
      "originalPlayerId": "string",
      "playerId": "string",
      "profileSettings": {
        "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
        "kind": "string",
        "profileVisible": true
      },
      "title": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesplayerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerListResponse](#schemaplayerlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.players.getScopedPlayerIds

<a id="opIdgames.players.getScopedPlayerIds"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/me/scopedIds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/me/scopedIds`

Retrieves scoped player identifiers for currently authenticated user.

<h3 id="gamesplayersgetscopedplayerids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "developerPlayerKey": "string",
  "gamePlayerId": "string"
}
```

<h3 id="gamesplayersgetscopedplayerids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScopedPlayerIds](#schemascopedplayerids)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.players.get

<a id="opIdgames.players.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/{playerId}`

Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.

<h3 id="gamesplayersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|playerIdConsistencyToken|query|string|false|Consistency token of the player id. The call returns a 'not found' result when the token is present and invalid. Empty value is ignored. See also GlobalPlayerIdConsistencyTokenProto|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "avatarImageUrl": "string",
  "bannerUrlLandscape": "string",
  "bannerUrlPortrait": "string",
  "displayName": "string",
  "experienceInfo": {
    "currentExperiencePoints": "string",
    "currentLevel": {
      "kind": "string",
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    },
    "kind": "string",
    "lastLevelUpTimestampMillis": "string",
    "nextLevel": {
      "kind": "string",
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    }
  },
  "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
  "gamePlayerId": "string",
  "kind": "string",
  "name": {
    "familyName": "string",
    "givenName": "string"
  },
  "originalPlayerId": "string",
  "playerId": "string",
  "profileSettings": {
    "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
    "kind": "string",
    "profileVisible": true
  },
  "title": "string"
}
```

<h3 id="gamesplayersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Player](#schemaplayer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-revisions">revisions</h1>

## games.revisions.check

<a id="opIdgames.revisions.check"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/games/v1/revisions/check?clientRevision=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/revisions/check`

Checks whether the games client is out of date.

<h3 id="gamesrevisionscheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clientRevision|query|string|true|The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "apiVersion": "string",
  "kind": "string",
  "revisionStatus": "REVISION_STATUS_UNSPECIFIED"
}
```

<h3 id="gamesrevisionscheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RevisionCheckResponse](#schemarevisioncheckresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-scores">scores</h1>

## games.scores.submitMultiple

<a id="opIdgames.scores.submitMultiple"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/leaderboards/scores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "string",
    "scores": [
      {
        "kind": "string",
        "leaderboardId": "string",
        "score": "string",
        "scoreTag": "string",
        "signature": "string"
      }
    ]
  }'
```

`POST /games/v1/leaderboards/scores`

Submits multiple scores to leaderboards.

> Body parameter

```json
{
  "kind": "string",
  "scores": [
    {
      "kind": "string",
      "leaderboardId": "string",
      "score": "string",
      "scoreTag": "string",
      "signature": "string"
    }
  ]
}
```

<h3 id="gamesscoressubmitmultiple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PlayerScoreSubmissionList](#schemaplayerscoresubmissionlist)|false|none|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`.|
|» scores|body|[[ScoreSubmission](#schemascoresubmission)]|false|The score submissions.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "kind": "string",
  "submittedScores": [
    {
      "beatenScoreTimeSpans": [
        "SCORE_TIME_SPAN_UNSPECIFIED"
      ],
      "formattedScore": "string",
      "kind": "string",
      "leaderboardId": "string",
      "scoreTag": "string",
      "unbeatenScores": [
        {
          "formattedScore": "string",
          "kind": "string",
          "score": "string",
          "scoreTag": "string",
          "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED"
        }
      ]
    }
  ]
}
```

<h3 id="gamesscoressubmitmultiple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerScoreListResponse](#schemaplayerscorelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.scores.submit

<a id="opIdgames.scores.submit"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/games/v1/leaderboards/string/scores?score=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1/leaderboards/{leaderboardId}/scores`

Submits a score to the specified leaderboard.

<h3 id="gamesscoressubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leaderboardId|path|string|true|The ID of the leaderboard.|
|score|query|string|true|The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|scoreTag|query|string|false|Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "beatenScoreTimeSpans": [
    "SCORE_TIME_SPAN_UNSPECIFIED"
  ],
  "formattedScore": "string",
  "kind": "string",
  "leaderboardId": "string",
  "scoreTag": "string",
  "unbeatenScores": [
    {
      "formattedScore": "string",
      "kind": "string",
      "score": "string",
      "scoreTag": "string",
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED"
    }
  ]
}
```

<h3 id="gamesscoressubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerScoreResponse](#schemaplayerscoreresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.scores.list

<a id="opIdgames.scores.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/games/v1/leaderboards/string/scores/SCORE_COLLECTION_UNSPECIFIED?timeSpan=SCORE_TIME_SPAN_UNSPECIFIED' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/leaderboards/{leaderboardId}/scores/{collection}`

Lists the scores in a leaderboard, starting from the top.

<h3 id="gamesscoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leaderboardId|path|string|true|The ID of the leaderboard.|
|collection|path|string|true|The collection of scores you're requesting.|
|timeSpan|query|string|true|The time span for the scores and ranks you're requesting.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|SCORE_COLLECTION_UNSPECIFIED|
|collection|PUBLIC|
|collection|SOCIAL|
|collection|FRIENDS|
|timeSpan|SCORE_TIME_SPAN_UNSPECIFIED|
|timeSpan|ALL_TIME|
|timeSpan|WEEKLY|
|timeSpan|DAILY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "formattedScore": "string",
      "formattedScoreRank": "string",
      "kind": "string",
      "player": {
        "avatarImageUrl": "string",
        "bannerUrlLandscape": "string",
        "bannerUrlPortrait": "string",
        "displayName": "string",
        "experienceInfo": {
          "currentExperiencePoints": "string",
          "currentLevel": {
            "kind": "string",
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          },
          "kind": "string",
          "lastLevelUpTimestampMillis": "string",
          "nextLevel": {
            "kind": "string",
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          }
        },
        "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
        "gamePlayerId": "string",
        "kind": "string",
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "originalPlayerId": "string",
        "playerId": "string",
        "profileSettings": {
          "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
          "kind": "string",
          "profileVisible": true
        },
        "title": "string"
      },
      "scoreRank": "string",
      "scoreTag": "string",
      "scoreValue": "string",
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
      "writeTimestampMillis": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "numScores": "string",
  "playerScore": {
    "formattedScore": "string",
    "formattedScoreRank": "string",
    "kind": "string",
    "player": {
      "avatarImageUrl": "string",
      "bannerUrlLandscape": "string",
      "bannerUrlPortrait": "string",
      "displayName": "string",
      "experienceInfo": {
        "currentExperiencePoints": "string",
        "currentLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        },
        "kind": "string",
        "lastLevelUpTimestampMillis": "string",
        "nextLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        }
      },
      "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
      "gamePlayerId": "string",
      "kind": "string",
      "name": {
        "familyName": "string",
        "givenName": "string"
      },
      "originalPlayerId": "string",
      "playerId": "string",
      "profileSettings": {
        "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
        "kind": "string",
        "profileVisible": true
      },
      "title": "string"
    },
    "scoreRank": "string",
    "scoreTag": "string",
    "scoreValue": "string",
    "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
    "writeTimestampMillis": "string"
  },
  "prevPageToken": "string"
}
```

<h3 id="gamesscoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardScores](#schemaleaderboardscores)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.scores.listWindow

<a id="opIdgames.scores.listWindow"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/games/v1/leaderboards/string/window/SCORE_COLLECTION_UNSPECIFIED?timeSpan=SCORE_TIME_SPAN_UNSPECIFIED' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/leaderboards/{leaderboardId}/window/{collection}`

Lists the scores in a leaderboard around (and including) a player's score.

<h3 id="gamesscoreslistwindow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leaderboardId|path|string|true|The ID of the leaderboard.|
|collection|path|string|true|The collection of scores you're requesting.|
|timeSpan|query|string|true|The time span for the scores and ranks you're requesting.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|resultsAbove|query|integer|false|The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.|
|returnTopIfAbsent|query|boolean|false|True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|SCORE_COLLECTION_UNSPECIFIED|
|collection|PUBLIC|
|collection|SOCIAL|
|collection|FRIENDS|
|timeSpan|SCORE_TIME_SPAN_UNSPECIFIED|
|timeSpan|ALL_TIME|
|timeSpan|WEEKLY|
|timeSpan|DAILY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "formattedScore": "string",
      "formattedScoreRank": "string",
      "kind": "string",
      "player": {
        "avatarImageUrl": "string",
        "bannerUrlLandscape": "string",
        "bannerUrlPortrait": "string",
        "displayName": "string",
        "experienceInfo": {
          "currentExperiencePoints": "string",
          "currentLevel": {
            "kind": "string",
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          },
          "kind": "string",
          "lastLevelUpTimestampMillis": "string",
          "nextLevel": {
            "kind": "string",
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          }
        },
        "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
        "gamePlayerId": "string",
        "kind": "string",
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "originalPlayerId": "string",
        "playerId": "string",
        "profileSettings": {
          "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
          "kind": "string",
          "profileVisible": true
        },
        "title": "string"
      },
      "scoreRank": "string",
      "scoreTag": "string",
      "scoreValue": "string",
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
      "writeTimestampMillis": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "numScores": "string",
  "playerScore": {
    "formattedScore": "string",
    "formattedScoreRank": "string",
    "kind": "string",
    "player": {
      "avatarImageUrl": "string",
      "bannerUrlLandscape": "string",
      "bannerUrlPortrait": "string",
      "displayName": "string",
      "experienceInfo": {
        "currentExperiencePoints": "string",
        "currentLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        },
        "kind": "string",
        "lastLevelUpTimestampMillis": "string",
        "nextLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        }
      },
      "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
      "gamePlayerId": "string",
      "kind": "string",
      "name": {
        "familyName": "string",
        "givenName": "string"
      },
      "originalPlayerId": "string",
      "playerId": "string",
      "profileSettings": {
        "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
        "kind": "string",
        "profileVisible": true
      },
      "title": "string"
    },
    "scoreRank": "string",
    "scoreTag": "string",
    "scoreValue": "string",
    "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
    "writeTimestampMillis": "string"
  },
  "prevPageToken": "string"
}
```

<h3 id="gamesscoreslistwindow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardScores](#schemaleaderboardscores)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.scores.get

<a id="opIdgames.scores.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/string/leaderboards/string/scores/SCORE_TIME_SPAN_UNSPECIFIED \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}`

Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.

<h3 id="gamesscoresget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
|leaderboardId|path|string|true|The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.|
|timeSpan|path|string|true|The time span for the scores and ranks you're requesting.|
|includeRankType|query|string|false|The types of ranks to return. If the parameter is omitted, no ranks will be returned.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeSpan|SCORE_TIME_SPAN_UNSPECIFIED|
|timeSpan|ALL|
|timeSpan|ALL_TIME|
|timeSpan|WEEKLY|
|timeSpan|DAILY|
|includeRankType|INCLUDE_RANK_TYPE_UNSPECIFIED|
|includeRankType|ALL|
|includeRankType|PUBLIC|
|includeRankType|SOCIAL|
|includeRankType|FRIENDS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "friendsRank": {
        "formattedNumScores": "string",
        "formattedRank": "string",
        "kind": "string",
        "numScores": "string",
        "rank": "string"
      },
      "kind": "string",
      "leaderboard_id": "string",
      "publicRank": {
        "formattedNumScores": "string",
        "formattedRank": "string",
        "kind": "string",
        "numScores": "string",
        "rank": "string"
      },
      "scoreString": "string",
      "scoreTag": "string",
      "scoreValue": "string",
      "socialRank": {
        "formattedNumScores": "string",
        "formattedRank": "string",
        "kind": "string",
        "numScores": "string",
        "rank": "string"
      },
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
      "writeTimestamp": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "player": {
    "avatarImageUrl": "string",
    "bannerUrlLandscape": "string",
    "bannerUrlPortrait": "string",
    "displayName": "string",
    "experienceInfo": {
      "currentExperiencePoints": "string",
      "currentLevel": {
        "kind": "string",
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      },
      "kind": "string",
      "lastLevelUpTimestampMillis": "string",
      "nextLevel": {
        "kind": "string",
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      }
    },
    "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
    "gamePlayerId": "string",
    "kind": "string",
    "name": {
      "familyName": "string",
      "givenName": "string"
    },
    "originalPlayerId": "string",
    "playerId": "string",
    "profileSettings": {
      "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
      "kind": "string",
      "profileVisible": true
    },
    "title": "string"
  }
}
```

<h3 id="gamesscoresget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerLeaderboardScoreListResponse](#schemaplayerleaderboardscorelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-snapshots">snapshots</h1>

## games.snapshots.list

<a id="opIdgames.snapshots.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/players/string/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/players/{playerId}/snapshots`

Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

<h3 id="gamessnapshotslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|maxResults|query|integer|false|The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`.|
|pageToken|query|string|false|The token returned by the previous request.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "coverImage": {
        "height": 0,
        "kind": "string",
        "mime_type": "string",
        "url": "string",
        "width": 0
      },
      "description": "string",
      "driveId": "string",
      "durationMillis": "string",
      "id": "string",
      "kind": "string",
      "lastModifiedMillis": "string",
      "progressValue": "string",
      "title": "string",
      "type": "SNAPSHOT_TYPE_UNSPECIFIED",
      "uniqueName": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamessnapshotslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SnapshotListResponse](#schemasnapshotlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## games.snapshots.get

<a id="opIdgames.snapshots.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/snapshots/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/snapshots/{snapshotId}`

Retrieves the metadata for a given snapshot ID.

<h3 id="gamessnapshotsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|snapshotId|path|string|true|The ID of the snapshot.|
|language|query|string|false|The preferred language to use for strings returned by this method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "coverImage": {
    "height": 0,
    "kind": "string",
    "mime_type": "string",
    "url": "string",
    "width": 0
  },
  "description": "string",
  "driveId": "string",
  "durationMillis": "string",
  "id": "string",
  "kind": "string",
  "lastModifiedMillis": "string",
  "progressValue": "string",
  "title": "string",
  "type": "SNAPSHOT_TYPE_UNSPECIFIED",
  "uniqueName": "string"
}
```

<h3 id="gamessnapshotsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Snapshot](#schemasnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.appdata ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.appdata ), Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-services-stats">stats</h1>

## games.stats.get

<a id="opIdgames.stats.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1/stats`

Returns engagement and spend statistics in this application for the currently authenticated user.

<h3 id="gamesstatsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "avg_session_length_minutes": 0,
  "churn_probability": 0,
  "days_since_last_played": 0,
  "high_spender_probability": 0,
  "kind": "string",
  "num_purchases": 0,
  "num_sessions": 0,
  "num_sessions_percentile": 0,
  "spend_percentile": 0,
  "spend_probability": 0,
  "total_spend_next_28_days": 0
}
```

<h3 id="gamesstatsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StatsResponse](#schemastatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

# Schemas

<h2 id="tocS_AchievementDefinition">AchievementDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaachievementdefinition"></a>
<a id="schema_AchievementDefinition"></a>
<a id="tocSachievementdefinition"></a>
<a id="tocsachievementdefinition"></a>

```json
{
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "description": "string",
  "experiencePoints": "string",
  "formattedTotalSteps": "string",
  "id": "string",
  "initialState": "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED",
  "isRevealedIconUrlDefault": true,
  "isUnlockedIconUrlDefault": true,
  "kind": "string",
  "name": "string",
  "revealedIconUrl": "string",
  "totalSteps": 0,
  "unlockedIconUrl": "string"
}
```

An achievement definition object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievementType|string|false|none|The type of the achievement.|
|description|string|false|none|The description of the achievement.|
|experiencePoints|string(int64)|false|none|Experience points which will be earned when unlocking this achievement.|
|formattedTotalSteps|string|false|none|The total steps for an incremental achievement as a string.|
|id|string|false|none|The ID of the achievement.|
|initialState|string|false|none|The initial state of the achievement.|
|isRevealedIconUrlDefault|boolean|false|none|Indicates whether the revealed icon image being returned is a default image, or is provided by the game.|
|isUnlockedIconUrlDefault|boolean|false|none|Indicates whether the unlocked icon image being returned is a default image, or is game-provided.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinition`.|
|name|string|false|none|The name of the achievement.|
|revealedIconUrl|string|false|none|The image URL for the revealed achievement icon.|
|totalSteps|integer(int32)|false|none|The total steps for an incremental achievement.|
|unlockedIconUrl|string|false|none|The image URL for the unlocked achievement icon.|

#### Enumerated Values

|Property|Value|
|---|---|
|achievementType|ACHIEVEMENT_TYPE_UNSPECIFIED|
|achievementType|STANDARD|
|achievementType|INCREMENTAL|
|initialState|INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED|
|initialState|HIDDEN|
|initialState|REVEALED|
|initialState|UNLOCKED|

<h2 id="tocS_AchievementDefinitionsListResponse">AchievementDefinitionsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementdefinitionslistresponse"></a>
<a id="schema_AchievementDefinitionsListResponse"></a>
<a id="tocSachievementdefinitionslistresponse"></a>
<a id="tocsachievementdefinitionslistresponse"></a>

```json
{
  "items": [
    {
      "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
      "description": "string",
      "experiencePoints": "string",
      "formattedTotalSteps": "string",
      "id": "string",
      "initialState": "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED",
      "isRevealedIconUrlDefault": true,
      "isUnlockedIconUrlDefault": true,
      "kind": "string",
      "name": "string",
      "revealedIconUrl": "string",
      "totalSteps": 0,
      "unlockedIconUrl": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A list of achievement definition objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AchievementDefinition](#schemaachievementdefinition)]|false|none|The achievement definitions.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinitionsListResponse`.|
|nextPageToken|string|false|none|Token corresponding to the next page of results.|

<h2 id="tocS_AchievementIncrementResponse">AchievementIncrementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementincrementresponse"></a>
<a id="schema_AchievementIncrementResponse"></a>
<a id="tocSachievementincrementresponse"></a>
<a id="tocsachievementincrementresponse"></a>

```json
{
  "currentSteps": 0,
  "kind": "string",
  "newlyUnlocked": true
}
```

An achievement increment response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentSteps|integer(int32)|false|none|The current steps recorded for this incremental achievement.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementIncrementResponse`.|
|newlyUnlocked|boolean|false|none|Whether the current steps for the achievement has reached the number of steps required to unlock.|

<h2 id="tocS_AchievementRevealResponse">AchievementRevealResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementrevealresponse"></a>
<a id="schema_AchievementRevealResponse"></a>
<a id="tocSachievementrevealresponse"></a>
<a id="tocsachievementrevealresponse"></a>

```json
{
  "currentState": "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED",
  "kind": "string"
}
```

An achievement reveal response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentState|string|false|none|The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementRevealResponse`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentState|REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED|
|currentState|REVEALED|
|currentState|UNLOCKED|

<h2 id="tocS_AchievementSetStepsAtLeastResponse">AchievementSetStepsAtLeastResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementsetstepsatleastresponse"></a>
<a id="schema_AchievementSetStepsAtLeastResponse"></a>
<a id="tocSachievementsetstepsatleastresponse"></a>
<a id="tocsachievementsetstepsatleastresponse"></a>

```json
{
  "currentSteps": 0,
  "kind": "string",
  "newlyUnlocked": true
}
```

An achievement set steps at least response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentSteps|integer(int32)|false|none|The current steps recorded for this incremental achievement.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementSetStepsAtLeastResponse`.|
|newlyUnlocked|boolean|false|none|Whether the current steps for the achievement has reached the number of steps required to unlock.|

<h2 id="tocS_AchievementUnlockResponse">AchievementUnlockResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementunlockresponse"></a>
<a id="schema_AchievementUnlockResponse"></a>
<a id="tocSachievementunlockresponse"></a>
<a id="tocsachievementunlockresponse"></a>

```json
{
  "kind": "string",
  "newlyUnlocked": true
}
```

An achievement unlock response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUnlockResponse`.|
|newlyUnlocked|boolean|false|none|Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).|

<h2 id="tocS_AchievementUpdateMultipleRequest">AchievementUpdateMultipleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaachievementupdatemultiplerequest"></a>
<a id="schema_AchievementUpdateMultipleRequest"></a>
<a id="tocSachievementupdatemultiplerequest"></a>
<a id="tocsachievementupdatemultiplerequest"></a>

```json
{
  "kind": "string",
  "updates": [
    {
      "achievementId": "string",
      "incrementPayload": {
        "kind": "string",
        "requestId": "string",
        "steps": 0
      },
      "kind": "string",
      "setStepsAtLeastPayload": {
        "kind": "string",
        "steps": 0
      },
      "updateType": "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
    }
  ]
}
```

A list of achievement update requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`.|
|updates|[[AchievementUpdateRequest](#schemaachievementupdaterequest)]|false|none|The individual achievement update requests.|

<h2 id="tocS_AchievementUpdateMultipleResponse">AchievementUpdateMultipleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementupdatemultipleresponse"></a>
<a id="schema_AchievementUpdateMultipleResponse"></a>
<a id="tocSachievementupdatemultipleresponse"></a>
<a id="tocsachievementupdatemultipleresponse"></a>

```json
{
  "kind": "string",
  "updatedAchievements": [
    {
      "achievementId": "string",
      "currentState": "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED",
      "currentSteps": 0,
      "kind": "string",
      "newlyUnlocked": true,
      "updateOccurred": true
    }
  ]
}
```

Response message for UpdateMultipleAchievements rpc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleResponse`.|
|updatedAchievements|[[AchievementUpdateResponse](#schemaachievementupdateresponse)]|false|none|The updated state of the achievements.|

<h2 id="tocS_AchievementUpdateRequest">AchievementUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaachievementupdaterequest"></a>
<a id="schema_AchievementUpdateRequest"></a>
<a id="tocSachievementupdaterequest"></a>
<a id="tocsachievementupdaterequest"></a>

```json
{
  "achievementId": "string",
  "incrementPayload": {
    "kind": "string",
    "requestId": "string",
    "steps": 0
  },
  "kind": "string",
  "setStepsAtLeastPayload": {
    "kind": "string",
    "steps": 0
  },
  "updateType": "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
}
```

A request to update an achievement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievementId|string|false|none|The achievement this update is being applied to.|
|incrementPayload|[GamesAchievementIncrement](#schemagamesachievementincrement)|false|none|The payload if an update of type `INCREMENT` was requested for the achievement.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateRequest`.|
|setStepsAtLeastPayload|[GamesAchievementSetStepsAtLeast](#schemagamesachievementsetstepsatleast)|false|none|The payload if an update of type `SET_STEPS_AT_LEAST` was requested for the achievement.|
|updateType|string|false|none|The type of update being applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|updateType|ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED|
|updateType|REVEAL|
|updateType|UNLOCK|
|updateType|INCREMENT|
|updateType|SET_STEPS_AT_LEAST|

<h2 id="tocS_AchievementUpdateResponse">AchievementUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementupdateresponse"></a>
<a id="schema_AchievementUpdateResponse"></a>
<a id="tocSachievementupdateresponse"></a>
<a id="tocsachievementupdateresponse"></a>

```json
{
  "achievementId": "string",
  "currentState": "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED",
  "currentSteps": 0,
  "kind": "string",
  "newlyUnlocked": true,
  "updateOccurred": true
}
```

An updated achievement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievementId|string|false|none|The achievement this update is was applied to.|
|currentState|string|false|none|The current state of the achievement.|
|currentSteps|integer(int32)|false|none|The current steps recorded for this achievement if it is incremental.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateResponse`.|
|newlyUnlocked|boolean|false|none|Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).|
|updateOccurred|boolean|false|none|Whether the requested updates actually affected the achievement.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentState|UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED|
|currentState|HIDDEN|
|currentState|REVEALED|
|currentState|UNLOCKED|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "achievement_count": 0,
  "assets": [
    {
      "height": 0,
      "kind": "string",
      "name": "string",
      "url": "string",
      "width": 0
    }
  ],
  "author": "string",
  "category": {
    "kind": "string",
    "primary": "string",
    "secondary": "string"
  },
  "description": "string",
  "enabledFeatures": [
    "APPLICATION_FEATURE_UNSPECIFIED"
  ],
  "id": "string",
  "instances": [
    {
      "acquisitionUri": "string",
      "androidInstance": {
        "enablePiracyCheck": true,
        "kind": "string",
        "packageName": "string",
        "preferred": true
      },
      "iosInstance": {
        "bundleIdentifier": "string",
        "itunesAppId": "string",
        "kind": "string",
        "preferredForIpad": true,
        "preferredForIphone": true,
        "supportIpad": true,
        "supportIphone": true
      },
      "kind": "string",
      "name": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "realtimePlay": true,
      "turnBasedPlay": true,
      "webInstance": {
        "kind": "string",
        "launchUrl": "string",
        "preferred": true
      }
    }
  ],
  "kind": "string",
  "lastUpdatedTimestamp": "string",
  "leaderboard_count": 0,
  "name": "string",
  "themeColor": "string"
}
```

The Application resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievement_count|integer(int32)|false|none|The number of achievements visible to the currently authenticated player.|
|assets|[[ImageAsset](#schemaimageasset)]|false|none|The assets of the application.|
|author|string|false|none|The author of the application.|
|category|[ApplicationCategory](#schemaapplicationcategory)|false|none|The category of the application.|
|description|string|false|none|The description of the application.|
|enabledFeatures|[string]|false|none|A list of features that have been enabled for the application.|
|id|string|false|none|The ID of the application.|
|instances|[[Instance](#schemainstance)]|false|none|The instances of the application.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#application`.|
|lastUpdatedTimestamp|string(int64)|false|none|The last updated timestamp of the application.|
|leaderboard_count|integer(int32)|false|none|The number of leaderboards visible to the currently authenticated player.|
|name|string|false|none|The name of the application.|
|themeColor|string|false|none|A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0").|

#### Enumerated Values

|Property|Value|
|---|---|
|enabledFeatures|APPLICATION_FEATURE_UNSPECIFIED|
|enabledFeatures|SNAPSHOTS|

<h2 id="tocS_ApplicationCategory">ApplicationCategory</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationcategory"></a>
<a id="schema_ApplicationCategory"></a>
<a id="tocSapplicationcategory"></a>
<a id="tocsapplicationcategory"></a>

```json
{
  "kind": "string",
  "primary": "string",
  "secondary": "string"
}
```

An application category object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationCategory`.|
|primary|string|false|none|The primary category.|
|secondary|string|false|none|The secondary category.|

<h2 id="tocS_ApplicationPlayerId">ApplicationPlayerId</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationplayerid"></a>
<a id="schema_ApplicationPlayerId"></a>
<a id="tocSapplicationplayerid"></a>
<a id="tocsapplicationplayerid"></a>

```json
{
  "applicationId": "string",
  "playerId": "string"
}
```

Primary scoped player identifier for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|string|false|none|The application that this player identifier is for.|
|playerId|string|false|none|The player identifier for the application.|

<h2 id="tocS_ApplicationVerifyResponse">ApplicationVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationverifyresponse"></a>
<a id="schema_ApplicationVerifyResponse"></a>
<a id="tocSapplicationverifyresponse"></a>
<a id="tocsapplicationverifyresponse"></a>

```json
{
  "alternate_player_id": "string",
  "kind": "string",
  "player_id": "string"
}
```

A third party application verification response resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_player_id|string|false|none|An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationVerifyResponse`.|
|player_id|string|false|none|The ID of the player that was issued the auth token used in this request.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "category": "string",
  "experiencePoints": "string",
  "kind": "string"
}
```

Data related to individual game categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The category name.|
|experiencePoints|string(int64)|false|none|Experience points earned in this category.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#category`.|

<h2 id="tocS_CategoryListResponse">CategoryListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacategorylistresponse"></a>
<a id="schema_CategoryListResponse"></a>
<a id="tocScategorylistresponse"></a>
<a id="tocscategorylistresponse"></a>

```json
{
  "items": [
    {
      "category": "string",
      "experiencePoints": "string",
      "kind": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A third party list metagame categories response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Category](#schemacategory)]|false|none|The list of categories with usage data.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#categoryListResponse`.|
|nextPageToken|string|false|none|Token corresponding to the next page of results.|

<h2 id="tocS_EndPoint">EndPoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_EndPoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "url": "string"
}
```

Container for a URL end point of the requested type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|A URL suitable for loading in a web browser for the requested endpoint.|

<h2 id="tocS_EventBatchRecordFailure">EventBatchRecordFailure</h2>
<!-- backwards compatibility -->
<a id="schemaeventbatchrecordfailure"></a>
<a id="schema_EventBatchRecordFailure"></a>
<a id="tocSeventbatchrecordfailure"></a>
<a id="tocseventbatchrecordfailure"></a>

```json
{
  "failureCause": "EVENT_FAILURE_CAUSE_UNSPECIFIED",
  "kind": "string",
  "range": {
    "kind": "string",
    "periodEndMillis": "string",
    "periodStartMillis": "string"
  }
}
```

A batch update failure resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureCause|string|false|none|The cause for the update failure.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventBatchRecordFailure`.|
|range|[EventPeriodRange](#schemaeventperiodrange)|false|none|The time range which was rejected; empty for a request-wide failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureCause|EVENT_FAILURE_CAUSE_UNSPECIFIED|
|failureCause|TOO_LARGE|
|failureCause|TIME_PERIOD_EXPIRED|
|failureCause|TIME_PERIOD_SHORT|
|failureCause|TIME_PERIOD_LONG|
|failureCause|ALREADY_UPDATED|
|failureCause|RECORD_RATE_HIGH|

<h2 id="tocS_EventChild">EventChild</h2>
<!-- backwards compatibility -->
<a id="schemaeventchild"></a>
<a id="schema_EventChild"></a>
<a id="tocSeventchild"></a>
<a id="tocseventchild"></a>

```json
{
  "childId": "string",
  "kind": "string"
}
```

An event child relationship resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childId|string|false|none|The ID of the child event.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventChild`.|

<h2 id="tocS_EventDefinition">EventDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaeventdefinition"></a>
<a id="schema_EventDefinition"></a>
<a id="tocSeventdefinition"></a>
<a id="tocseventdefinition"></a>

```json
{
  "childEvents": [
    {
      "childId": "string",
      "kind": "string"
    }
  ],
  "description": "string",
  "displayName": "string",
  "id": "string",
  "imageUrl": "string",
  "isDefaultImageUrl": true,
  "kind": "string",
  "visibility": "EVENT_VISIBILITY_UNSPECIFIED"
}
```

An event definition resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childEvents|[[EventChild](#schemaeventchild)]|false|none|A list of events that are a child of this event.|
|description|string|false|none|Description of what this event represents.|
|displayName|string|false|none|The name to display for the event.|
|id|string|false|none|The ID of the event.|
|imageUrl|string|false|none|The base URL for the image that represents the event.|
|isDefaultImageUrl|boolean|false|none|Indicates whether the icon image being returned is a default image, or is game-provided.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinition`.|
|visibility|string|false|none|The visibility of event being tracked in this definition.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|EVENT_VISIBILITY_UNSPECIFIED|
|visibility|REVEALED|
|visibility|HIDDEN|

<h2 id="tocS_EventDefinitionListResponse">EventDefinitionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventdefinitionlistresponse"></a>
<a id="schema_EventDefinitionListResponse"></a>
<a id="tocSeventdefinitionlistresponse"></a>
<a id="tocseventdefinitionlistresponse"></a>

```json
{
  "items": [
    {
      "childEvents": [
        {
          "childId": "string",
          "kind": "string"
        }
      ],
      "description": "string",
      "displayName": "string",
      "id": "string",
      "imageUrl": "string",
      "isDefaultImageUrl": true,
      "kind": "string",
      "visibility": "EVENT_VISIBILITY_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A ListDefinitions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[EventDefinition](#schemaeventdefinition)]|false|none|The event definitions.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinitionListResponse`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|

<h2 id="tocS_EventPeriodRange">EventPeriodRange</h2>
<!-- backwards compatibility -->
<a id="schemaeventperiodrange"></a>
<a id="schema_EventPeriodRange"></a>
<a id="tocSeventperiodrange"></a>
<a id="tocseventperiodrange"></a>

```json
{
  "kind": "string",
  "periodEndMillis": "string",
  "periodStartMillis": "string"
}
```

An event period time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodRange`.|
|periodEndMillis|string(int64)|false|none|The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).|
|periodStartMillis|string(int64)|false|none|The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).|

<h2 id="tocS_EventPeriodUpdate">EventPeriodUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaeventperiodupdate"></a>
<a id="schema_EventPeriodUpdate"></a>
<a id="tocSeventperiodupdate"></a>
<a id="tocseventperiodupdate"></a>

```json
{
  "kind": "string",
  "timePeriod": {
    "kind": "string",
    "periodEndMillis": "string",
    "periodStartMillis": "string"
  },
  "updates": [
    {
      "definitionId": "string",
      "kind": "string",
      "updateCount": "string"
    }
  ]
}
```

An event period update resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodUpdate`.|
|timePeriod|[EventPeriodRange](#schemaeventperiodrange)|false|none|The time period being covered by this update.|
|updates|[[EventUpdateRequest](#schemaeventupdaterequest)]|false|none|The updates being made for this time period.|

<h2 id="tocS_EventRecordFailure">EventRecordFailure</h2>
<!-- backwards compatibility -->
<a id="schemaeventrecordfailure"></a>
<a id="schema_EventRecordFailure"></a>
<a id="tocSeventrecordfailure"></a>
<a id="tocseventrecordfailure"></a>

```json
{
  "eventId": "string",
  "failureCause": "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED",
  "kind": "string"
}
```

An event update failure resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|string|false|none|The ID of the event that was not updated.|
|failureCause|string|false|none|The cause for the update failure.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordFailure`.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureCause|EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED|
|failureCause|NOT_FOUND|
|failureCause|INVALID_UPDATE_VALUE|

<h2 id="tocS_EventRecordRequest">EventRecordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventrecordrequest"></a>
<a id="schema_EventRecordRequest"></a>
<a id="tocSeventrecordrequest"></a>
<a id="tocseventrecordrequest"></a>

```json
{
  "currentTimeMillis": "string",
  "kind": "string",
  "requestId": "string",
  "timePeriods": [
    {
      "kind": "string",
      "timePeriod": {
        "kind": "string",
        "periodEndMillis": "string",
        "periodStartMillis": "string"
      },
      "updates": [
        {
          "definitionId": "string",
          "kind": "string",
          "updateCount": "string"
        }
      ]
    }
  ]
}
```

An event period update resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentTimeMillis|string(int64)|false|none|The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`.|
|requestId|string(int64)|false|none|The request ID used to identify this attempt to record events.|
|timePeriods|[[EventPeriodUpdate](#schemaeventperiodupdate)]|false|none|A list of the time period updates being made in this request.|

<h2 id="tocS_EventUpdateRequest">EventUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventupdaterequest"></a>
<a id="schema_EventUpdateRequest"></a>
<a id="tocSeventupdaterequest"></a>
<a id="tocseventupdaterequest"></a>

```json
{
  "definitionId": "string",
  "kind": "string",
  "updateCount": "string"
}
```

An event period update resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definitionId|string|false|none|The ID of the event being modified in this update.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`.|
|updateCount|string(int64)|false|none|The number of times this event occurred in this time period.|

<h2 id="tocS_EventUpdateResponse">EventUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventupdateresponse"></a>
<a id="schema_EventUpdateResponse"></a>
<a id="tocSeventupdateresponse"></a>
<a id="tocseventupdateresponse"></a>

```json
{
  "batchFailures": [
    {
      "failureCause": "EVENT_FAILURE_CAUSE_UNSPECIFIED",
      "kind": "string",
      "range": {
        "kind": "string",
        "periodEndMillis": "string",
        "periodStartMillis": "string"
      }
    }
  ],
  "eventFailures": [
    {
      "eventId": "string",
      "failureCause": "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED",
      "kind": "string"
    }
  ],
  "kind": "string",
  "playerEvents": [
    {
      "definitionId": "string",
      "formattedNumEvents": "string",
      "kind": "string",
      "numEvents": "string",
      "playerId": "string"
    }
  ]
}
```

An event period update resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchFailures|[[EventBatchRecordFailure](#schemaeventbatchrecordfailure)]|false|none|Any batch-wide failures which occurred applying updates.|
|eventFailures|[[EventRecordFailure](#schemaeventrecordfailure)]|false|none|Any failures updating a particular event.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`.|
|playerEvents|[[PlayerEvent](#schemaplayerevent)]|false|none|The current status of any updated events|

<h2 id="tocS_GamesAchievementIncrement">GamesAchievementIncrement</h2>
<!-- backwards compatibility -->
<a id="schemagamesachievementincrement"></a>
<a id="schema_GamesAchievementIncrement"></a>
<a id="tocSgamesachievementincrement"></a>
<a id="tocsgamesachievementincrement"></a>

```json
{
  "kind": "string",
  "requestId": "string",
  "steps": 0
}
```

The payload to request to increment an achievement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementIncrement`.|
|requestId|string(int64)|false|none|The requestId associated with an increment to an achievement.|
|steps|integer(int32)|false|none|The number of steps to be incremented.|

<h2 id="tocS_GamesAchievementSetStepsAtLeast">GamesAchievementSetStepsAtLeast</h2>
<!-- backwards compatibility -->
<a id="schemagamesachievementsetstepsatleast"></a>
<a id="schema_GamesAchievementSetStepsAtLeast"></a>
<a id="tocSgamesachievementsetstepsatleast"></a>
<a id="tocsgamesachievementsetstepsatleast"></a>

```json
{
  "kind": "string",
  "steps": 0
}
```

The payload to request to increment an achievement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`.|
|steps|integer(int32)|false|none|The minimum number of steps for the achievement to be set to.|

<h2 id="tocS_GetMultipleApplicationPlayerIdsResponse">GetMultipleApplicationPlayerIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmultipleapplicationplayeridsresponse"></a>
<a id="schema_GetMultipleApplicationPlayerIdsResponse"></a>
<a id="tocSgetmultipleapplicationplayeridsresponse"></a>
<a id="tocsgetmultipleapplicationplayeridsresponse"></a>

```json
{
  "playerIds": [
    {
      "applicationId": "string",
      "playerId": "string"
    }
  ]
}
```

Response message for GetMultipleApplicationPlayerIds rpc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playerIds|[[ApplicationPlayerId](#schemaapplicationplayerid)]|false|read-only|Output only. The requested applications along with the scoped ids for tha player, if that player has an id for the application. If not, the application is not included in the response.|

<h2 id="tocS_ImageAsset">ImageAsset</h2>
<!-- backwards compatibility -->
<a id="schemaimageasset"></a>
<a id="schema_ImageAsset"></a>
<a id="tocSimageasset"></a>
<a id="tocsimageasset"></a>

```json
{
  "height": 0,
  "kind": "string",
  "name": "string",
  "url": "string",
  "width": 0
}
```

An image asset object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|The height of the asset.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#imageAsset`.|
|name|string|false|none|The name of the asset.|
|url|string|false|none|The URL of the asset.|
|width|integer(int32)|false|none|The width of the asset.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "acquisitionUri": "string",
  "androidInstance": {
    "enablePiracyCheck": true,
    "kind": "string",
    "packageName": "string",
    "preferred": true
  },
  "iosInstance": {
    "bundleIdentifier": "string",
    "itunesAppId": "string",
    "kind": "string",
    "preferredForIpad": true,
    "preferredForIphone": true,
    "supportIpad": true,
    "supportIphone": true
  },
  "kind": "string",
  "name": "string",
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "realtimePlay": true,
  "turnBasedPlay": true,
  "webInstance": {
    "kind": "string",
    "launchUrl": "string",
    "preferred": true
  }
}
```

The Instance resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquisitionUri|string|false|none|URI which shows where a user can acquire this instance.|
|androidInstance|[InstanceAndroidDetails](#schemainstanceandroiddetails)|false|none|Platform dependent details for Android.|
|iosInstance|[InstanceIosDetails](#schemainstanceiosdetails)|false|none|Platform dependent details for iOS.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#instance`.|
|name|string|false|none|Localized display name.|
|platformType|string|false|none|The platform type.|
|realtimePlay|boolean|false|none|Flag to show if this game instance supports realtime play.|
|turnBasedPlay|boolean|false|none|Flag to show if this game instance supports turn based play.|
|webInstance|[InstanceWebDetails](#schemainstancewebdetails)|false|none|Platform dependent details for Web.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|ANDROID|
|platformType|IOS|
|platformType|WEB_APP|

<h2 id="tocS_InstanceAndroidDetails">InstanceAndroidDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstanceandroiddetails"></a>
<a id="schema_InstanceAndroidDetails"></a>
<a id="tocSinstanceandroiddetails"></a>
<a id="tocsinstanceandroiddetails"></a>

```json
{
  "enablePiracyCheck": true,
  "kind": "string",
  "packageName": "string",
  "preferred": true
}
```

The Android instance details resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enablePiracyCheck|boolean|false|none|Flag indicating whether the anti-piracy check is enabled.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceAndroidDetails`.|
|packageName|string|false|none|Android package name which maps to Google Play URL.|
|preferred|boolean|false|none|Indicates that this instance is the default for new installations.|

<h2 id="tocS_InstanceIosDetails">InstanceIosDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstanceiosdetails"></a>
<a id="schema_InstanceIosDetails"></a>
<a id="tocSinstanceiosdetails"></a>
<a id="tocsinstanceiosdetails"></a>

```json
{
  "bundleIdentifier": "string",
  "itunesAppId": "string",
  "kind": "string",
  "preferredForIpad": true,
  "preferredForIphone": true,
  "supportIpad": true,
  "supportIphone": true
}
```

The iOS details resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundleIdentifier|string|false|none|Bundle identifier.|
|itunesAppId|string|false|none|iTunes App ID.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceIosDetails`.|
|preferredForIpad|boolean|false|none|Indicates that this instance is the default for new installations on iPad devices.|
|preferredForIphone|boolean|false|none|Indicates that this instance is the default for new installations on iPhone devices.|
|supportIpad|boolean|false|none|Flag to indicate if this instance supports iPad.|
|supportIphone|boolean|false|none|Flag to indicate if this instance supports iPhone.|

<h2 id="tocS_InstanceWebDetails">InstanceWebDetails</h2>
<!-- backwards compatibility -->
<a id="schemainstancewebdetails"></a>
<a id="schema_InstanceWebDetails"></a>
<a id="tocSinstancewebdetails"></a>
<a id="tocsinstancewebdetails"></a>

```json
{
  "kind": "string",
  "launchUrl": "string",
  "preferred": true
}
```

The Web details resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceWebDetails`.|
|launchUrl|string|false|none|Launch URL for the game.|
|preferred|boolean|false|none|Indicates that this instance is the default for new installations.|

<h2 id="tocS_Leaderboard">Leaderboard</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboard"></a>
<a id="schema_Leaderboard"></a>
<a id="tocSleaderboard"></a>
<a id="tocsleaderboard"></a>

```json
{
  "iconUrl": "string",
  "id": "string",
  "isIconUrlDefault": true,
  "kind": "string",
  "name": "string",
  "order": "SCORE_ORDER_UNSPECIFIED"
}
```

The Leaderboard resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconUrl|string|false|none|The icon for the leaderboard.|
|id|string|false|none|The leaderboard ID.|
|isIconUrlDefault|boolean|false|none|Indicates whether the icon image being returned is a default image, or is game-provided.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboard`.|
|name|string|false|none|The name of the leaderboard.|
|order|string|false|none|How scores are ordered.|

#### Enumerated Values

|Property|Value|
|---|---|
|order|SCORE_ORDER_UNSPECIFIED|
|order|LARGER_IS_BETTER|
|order|SMALLER_IS_BETTER|

<h2 id="tocS_LeaderboardEntry">LeaderboardEntry</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardentry"></a>
<a id="schema_LeaderboardEntry"></a>
<a id="tocSleaderboardentry"></a>
<a id="tocsleaderboardentry"></a>

```json
{
  "formattedScore": "string",
  "formattedScoreRank": "string",
  "kind": "string",
  "player": {
    "avatarImageUrl": "string",
    "bannerUrlLandscape": "string",
    "bannerUrlPortrait": "string",
    "displayName": "string",
    "experienceInfo": {
      "currentExperiencePoints": "string",
      "currentLevel": {
        "kind": "string",
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      },
      "kind": "string",
      "lastLevelUpTimestampMillis": "string",
      "nextLevel": {
        "kind": "string",
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      }
    },
    "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
    "gamePlayerId": "string",
    "kind": "string",
    "name": {
      "familyName": "string",
      "givenName": "string"
    },
    "originalPlayerId": "string",
    "playerId": "string",
    "profileSettings": {
      "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
      "kind": "string",
      "profileVisible": true
    },
    "title": "string"
  },
  "scoreRank": "string",
  "scoreTag": "string",
  "scoreValue": "string",
  "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
  "writeTimestampMillis": "string"
}
```

The Leaderboard Entry resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formattedScore|string|false|none|The localized string for the numerical value of this score.|
|formattedScoreRank|string|false|none|The localized string for the rank of this score for this leaderboard.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardEntry`.|
|player|[Player](#schemaplayer)|false|none|The player who holds this score.|
|scoreRank|string(int64)|false|none|The rank of this score for this leaderboard.|
|scoreTag|string|false|none|Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.|
|scoreValue|string(int64)|false|none|The numerical value of this score.|
|timeSpan|string|false|none|The time span of this high score.|
|writeTimestampMillis|string(int64)|false|none|The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeSpan|SCORE_TIME_SPAN_UNSPECIFIED|
|timeSpan|ALL_TIME|
|timeSpan|WEEKLY|
|timeSpan|DAILY|

<h2 id="tocS_LeaderboardListResponse">LeaderboardListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardlistresponse"></a>
<a id="schema_LeaderboardListResponse"></a>
<a id="tocSleaderboardlistresponse"></a>
<a id="tocsleaderboardlistresponse"></a>

```json
{
  "items": [
    {
      "iconUrl": "string",
      "id": "string",
      "isIconUrlDefault": true,
      "kind": "string",
      "name": "string",
      "order": "SCORE_ORDER_UNSPECIFIED"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A list of leaderboard objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Leaderboard](#schemaleaderboard)]|false|none|The leaderboards.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardListResponse`.|
|nextPageToken|string|false|none|Token corresponding to the next page of results.|

<h2 id="tocS_LeaderboardScoreRank">LeaderboardScoreRank</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardscorerank"></a>
<a id="schema_LeaderboardScoreRank"></a>
<a id="tocSleaderboardscorerank"></a>
<a id="tocsleaderboardscorerank"></a>

```json
{
  "formattedNumScores": "string",
  "formattedRank": "string",
  "kind": "string",
  "numScores": "string",
  "rank": "string"
}
```

A score rank in a leaderboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formattedNumScores|string|false|none|The number of scores in the leaderboard as a string.|
|formattedRank|string|false|none|The rank in the leaderboard as a string.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScoreRank`.|
|numScores|string(int64)|false|none|The number of scores in the leaderboard.|
|rank|string(int64)|false|none|The rank in the leaderboard.|

<h2 id="tocS_LeaderboardScores">LeaderboardScores</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardscores"></a>
<a id="schema_LeaderboardScores"></a>
<a id="tocSleaderboardscores"></a>
<a id="tocsleaderboardscores"></a>

```json
{
  "items": [
    {
      "formattedScore": "string",
      "formattedScoreRank": "string",
      "kind": "string",
      "player": {
        "avatarImageUrl": "string",
        "bannerUrlLandscape": "string",
        "bannerUrlPortrait": "string",
        "displayName": "string",
        "experienceInfo": {
          "currentExperiencePoints": "string",
          "currentLevel": {
            "kind": "string",
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          },
          "kind": "string",
          "lastLevelUpTimestampMillis": "string",
          "nextLevel": {
            "kind": "string",
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          }
        },
        "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
        "gamePlayerId": "string",
        "kind": "string",
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "originalPlayerId": "string",
        "playerId": "string",
        "profileSettings": {
          "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
          "kind": "string",
          "profileVisible": true
        },
        "title": "string"
      },
      "scoreRank": "string",
      "scoreTag": "string",
      "scoreValue": "string",
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
      "writeTimestampMillis": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "numScores": "string",
  "playerScore": {
    "formattedScore": "string",
    "formattedScoreRank": "string",
    "kind": "string",
    "player": {
      "avatarImageUrl": "string",
      "bannerUrlLandscape": "string",
      "bannerUrlPortrait": "string",
      "displayName": "string",
      "experienceInfo": {
        "currentExperiencePoints": "string",
        "currentLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        },
        "kind": "string",
        "lastLevelUpTimestampMillis": "string",
        "nextLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        }
      },
      "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
      "gamePlayerId": "string",
      "kind": "string",
      "name": {
        "familyName": "string",
        "givenName": "string"
      },
      "originalPlayerId": "string",
      "playerId": "string",
      "profileSettings": {
        "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
        "kind": "string",
        "profileVisible": true
      },
      "title": "string"
    },
    "scoreRank": "string",
    "scoreTag": "string",
    "scoreValue": "string",
    "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
    "writeTimestampMillis": "string"
  },
  "prevPageToken": "string"
}
```

A ListScores response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[LeaderboardEntry](#schemaleaderboardentry)]|false|none|The scores in the leaderboard.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScores`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|
|numScores|string(int64)|false|none|The total number of scores in the leaderboard.|
|playerScore|[LeaderboardEntry](#schemaleaderboardentry)|false|none|The score of the requesting player on the leaderboard. The player's score may appear both here and in the list of scores above. If you are viewing a public leaderboard and the player is not sharing their gameplay information publicly, the `scoreRank`and `formattedScoreRank` values will not be present.|
|prevPageToken|string|false|none|The pagination token for the previous page of results.|

<h2 id="tocS_MetagameConfig">MetagameConfig</h2>
<!-- backwards compatibility -->
<a id="schemametagameconfig"></a>
<a id="schema_MetagameConfig"></a>
<a id="tocSmetagameconfig"></a>
<a id="tocsmetagameconfig"></a>

```json
{
  "currentVersion": 0,
  "kind": "string",
  "playerLevels": [
    {
      "kind": "string",
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    }
  ]
}
```

The metagame config resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentVersion|integer(int32)|false|none|Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#metagameConfig`.|
|playerLevels|[[PlayerLevel](#schemaplayerlevel)]|false|none|The list of player levels.|

<h2 id="tocS_Player">Player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_Player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "avatarImageUrl": "string",
  "bannerUrlLandscape": "string",
  "bannerUrlPortrait": "string",
  "displayName": "string",
  "experienceInfo": {
    "currentExperiencePoints": "string",
    "currentLevel": {
      "kind": "string",
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    },
    "kind": "string",
    "lastLevelUpTimestampMillis": "string",
    "nextLevel": {
      "kind": "string",
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    }
  },
  "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
  "gamePlayerId": "string",
  "kind": "string",
  "name": {
    "familyName": "string",
    "givenName": "string"
  },
  "originalPlayerId": "string",
  "playerId": "string",
  "profileSettings": {
    "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
    "kind": "string",
    "profileVisible": true
  },
  "title": "string"
}
```

A Player resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarImageUrl|string|false|none|The base URL for the image that represents the player.|
|bannerUrlLandscape|string|false|none|The url to the landscape mode player banner image.|
|bannerUrlPortrait|string|false|none|The url to the portrait mode player banner image.|
|displayName|string|false|none|The name to display for the player.|
|experienceInfo|[PlayerExperienceInfo](#schemaplayerexperienceinfo)|false|none|An object to represent Play Game experience information for the player.|
|friendStatus|string|false|none|The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game.|
|gamePlayerId|string|false|none|Per-application unique player identifier.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#player`|
|name|object|false|none|A representation of the individual components of the name.|
|originalPlayerId|string|false|none|The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.|
|playerId|string|false|none|The ID of the player.|
|profileSettings|[ProfileSettings](#schemaprofilesettings)|false|none|The player's profile settings. Controls whether or not the player's profile is visible to other players.|
|title|string|false|none|The player's title rewarded for their game activities.|

#### Enumerated Values

|Property|Value|
|---|---|
|friendStatus|FRIEND_STATUS_UNSPECIFIED|
|friendStatus|NO_RELATIONSHIP|
|friendStatus|FRIEND|

<h2 id="tocS_PlayerAchievement">PlayerAchievement</h2>
<!-- backwards compatibility -->
<a id="schemaplayerachievement"></a>
<a id="schema_PlayerAchievement"></a>
<a id="tocSplayerachievement"></a>
<a id="tocsplayerachievement"></a>

```json
{
  "achievementState": "STATE_UNSPECIFIED",
  "currentSteps": 0,
  "experiencePoints": "string",
  "formattedCurrentStepsString": "string",
  "id": "string",
  "kind": "string",
  "lastUpdatedTimestamp": "string"
}
```

An achievement object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievementState|string|false|none|The state of the achievement.|
|currentSteps|integer(int32)|false|none|The current steps for an incremental achievement.|
|experiencePoints|string(int64)|false|none|Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.|
|formattedCurrentStepsString|string|false|none|The current steps for an incremental achievement as a string.|
|id|string|false|none|The ID of the achievement.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievement`.|
|lastUpdatedTimestamp|string(int64)|false|none|The timestamp of the last modification to this achievement's state.|

#### Enumerated Values

|Property|Value|
|---|---|
|achievementState|STATE_UNSPECIFIED|
|achievementState|HIDDEN|
|achievementState|REVEALED|
|achievementState|UNLOCKED|

<h2 id="tocS_PlayerAchievementListResponse">PlayerAchievementListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerachievementlistresponse"></a>
<a id="schema_PlayerAchievementListResponse"></a>
<a id="tocSplayerachievementlistresponse"></a>
<a id="tocsplayerachievementlistresponse"></a>

```json
{
  "items": [
    {
      "achievementState": "STATE_UNSPECIFIED",
      "currentSteps": 0,
      "experiencePoints": "string",
      "formattedCurrentStepsString": "string",
      "id": "string",
      "kind": "string",
      "lastUpdatedTimestamp": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A list of achievement objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PlayerAchievement](#schemaplayerachievement)]|false|none|The achievements.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievementListResponse`.|
|nextPageToken|string|false|none|Token corresponding to the next page of results.|

<h2 id="tocS_PlayerEvent">PlayerEvent</h2>
<!-- backwards compatibility -->
<a id="schemaplayerevent"></a>
<a id="schema_PlayerEvent"></a>
<a id="tocSplayerevent"></a>
<a id="tocsplayerevent"></a>

```json
{
  "definitionId": "string",
  "formattedNumEvents": "string",
  "kind": "string",
  "numEvents": "string",
  "playerId": "string"
}
```

An event status resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definitionId|string|false|none|The ID of the event definition.|
|formattedNumEvents|string|false|none|The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEvent`.|
|numEvents|string(int64)|false|none|The current number of times this event has occurred.|
|playerId|string|false|none|The ID of the player.|

<h2 id="tocS_PlayerEventListResponse">PlayerEventListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayereventlistresponse"></a>
<a id="schema_PlayerEventListResponse"></a>
<a id="tocSplayereventlistresponse"></a>
<a id="tocsplayereventlistresponse"></a>

```json
{
  "items": [
    {
      "definitionId": "string",
      "formattedNumEvents": "string",
      "kind": "string",
      "numEvents": "string",
      "playerId": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A ListByPlayer response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PlayerEvent](#schemaplayerevent)]|false|none|The player events.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEventListResponse`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|

<h2 id="tocS_PlayerExperienceInfo">PlayerExperienceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaplayerexperienceinfo"></a>
<a id="schema_PlayerExperienceInfo"></a>
<a id="tocSplayerexperienceinfo"></a>
<a id="tocsplayerexperienceinfo"></a>

```json
{
  "currentExperiencePoints": "string",
  "currentLevel": {
    "kind": "string",
    "level": 0,
    "maxExperiencePoints": "string",
    "minExperiencePoints": "string"
  },
  "kind": "string",
  "lastLevelUpTimestampMillis": "string",
  "nextLevel": {
    "kind": "string",
    "level": 0,
    "maxExperiencePoints": "string",
    "minExperiencePoints": "string"
  }
}
```

1P/3P metadata about the player's experience.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentExperiencePoints|string(int64)|false|none|The current number of experience points for the player.|
|currentLevel|[PlayerLevel](#schemaplayerlevel)|false|none|The current level of the player.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerExperienceInfo`.|
|lastLevelUpTimestampMillis|string(int64)|false|none|The timestamp when the player was leveled up, in millis since Unix epoch UTC.|
|nextLevel|[PlayerLevel](#schemaplayerlevel)|false|none|The next level of the player. If the current level is the maximum level, this should be same as the current level.|

<h2 id="tocS_PlayerLeaderboardScore">PlayerLeaderboardScore</h2>
<!-- backwards compatibility -->
<a id="schemaplayerleaderboardscore"></a>
<a id="schema_PlayerLeaderboardScore"></a>
<a id="tocSplayerleaderboardscore"></a>
<a id="tocsplayerleaderboardscore"></a>

```json
{
  "friendsRank": {
    "formattedNumScores": "string",
    "formattedRank": "string",
    "kind": "string",
    "numScores": "string",
    "rank": "string"
  },
  "kind": "string",
  "leaderboard_id": "string",
  "publicRank": {
    "formattedNumScores": "string",
    "formattedRank": "string",
    "kind": "string",
    "numScores": "string",
    "rank": "string"
  },
  "scoreString": "string",
  "scoreTag": "string",
  "scoreValue": "string",
  "socialRank": {
    "formattedNumScores": "string",
    "formattedRank": "string",
    "kind": "string",
    "numScores": "string",
    "rank": "string"
  },
  "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
  "writeTimestamp": "string"
}
```

A player leaderboard score object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|friendsRank|[LeaderboardScoreRank](#schemaleaderboardscorerank)|false|none|The rank of the score in the friends collection for this leaderboard.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScore`.|
|leaderboard_id|string|false|none|The ID of the leaderboard this score is in.|
|publicRank|[LeaderboardScoreRank](#schemaleaderboardscorerank)|false|none|The public rank of the score in this leaderboard. This object will not be present if the user is not sharing their scores publicly.|
|scoreString|string|false|none|The formatted value of this score.|
|scoreTag|string|false|none|Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.|
|scoreValue|string(int64)|false|none|The numerical value of this score.|
|socialRank|[LeaderboardScoreRank](#schemaleaderboardscorerank)|false|none|The social rank of the score in this leaderboard.|
|timeSpan|string|false|none|The time span of this score.|
|writeTimestamp|string(int64)|false|none|The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeSpan|SCORE_TIME_SPAN_UNSPECIFIED|
|timeSpan|ALL_TIME|
|timeSpan|WEEKLY|
|timeSpan|DAILY|

<h2 id="tocS_PlayerLeaderboardScoreListResponse">PlayerLeaderboardScoreListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerleaderboardscorelistresponse"></a>
<a id="schema_PlayerLeaderboardScoreListResponse"></a>
<a id="tocSplayerleaderboardscorelistresponse"></a>
<a id="tocsplayerleaderboardscorelistresponse"></a>

```json
{
  "items": [
    {
      "friendsRank": {
        "formattedNumScores": "string",
        "formattedRank": "string",
        "kind": "string",
        "numScores": "string",
        "rank": "string"
      },
      "kind": "string",
      "leaderboard_id": "string",
      "publicRank": {
        "formattedNumScores": "string",
        "formattedRank": "string",
        "kind": "string",
        "numScores": "string",
        "rank": "string"
      },
      "scoreString": "string",
      "scoreTag": "string",
      "scoreValue": "string",
      "socialRank": {
        "formattedNumScores": "string",
        "formattedRank": "string",
        "kind": "string",
        "numScores": "string",
        "rank": "string"
      },
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED",
      "writeTimestamp": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string",
  "player": {
    "avatarImageUrl": "string",
    "bannerUrlLandscape": "string",
    "bannerUrlPortrait": "string",
    "displayName": "string",
    "experienceInfo": {
      "currentExperiencePoints": "string",
      "currentLevel": {
        "kind": "string",
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      },
      "kind": "string",
      "lastLevelUpTimestampMillis": "string",
      "nextLevel": {
        "kind": "string",
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      }
    },
    "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
    "gamePlayerId": "string",
    "kind": "string",
    "name": {
      "familyName": "string",
      "givenName": "string"
    },
    "originalPlayerId": "string",
    "playerId": "string",
    "profileSettings": {
      "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
      "kind": "string",
      "profileVisible": true
    },
    "title": "string"
  }
}
```

A list of player leaderboard scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PlayerLeaderboardScore](#schemaplayerleaderboardscore)]|false|none|The leaderboard scores.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScoreListResponse`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|
|player|[Player](#schemaplayer)|false|none|The Player resources for the owner of this score.|

<h2 id="tocS_PlayerLevel">PlayerLevel</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlevel"></a>
<a id="schema_PlayerLevel"></a>
<a id="tocSplayerlevel"></a>
<a id="tocsplayerlevel"></a>

```json
{
  "kind": "string",
  "level": 0,
  "maxExperiencePoints": "string",
  "minExperiencePoints": "string"
}
```

1P/3P metadata about a user's level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLevel`.|
|level|integer(int32)|false|none|The level for the user.|
|maxExperiencePoints|string(int64)|false|none|The maximum experience points for this level.|
|minExperiencePoints|string(int64)|false|none|The minimum experience points for this level.|

<h2 id="tocS_PlayerListResponse">PlayerListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerlistresponse"></a>
<a id="schema_PlayerListResponse"></a>
<a id="tocSplayerlistresponse"></a>
<a id="tocsplayerlistresponse"></a>

```json
{
  "items": [
    {
      "avatarImageUrl": "string",
      "bannerUrlLandscape": "string",
      "bannerUrlPortrait": "string",
      "displayName": "string",
      "experienceInfo": {
        "currentExperiencePoints": "string",
        "currentLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        },
        "kind": "string",
        "lastLevelUpTimestampMillis": "string",
        "nextLevel": {
          "kind": "string",
          "level": 0,
          "maxExperiencePoints": "string",
          "minExperiencePoints": "string"
        }
      },
      "friendStatus": "FRIEND_STATUS_UNSPECIFIED",
      "gamePlayerId": "string",
      "kind": "string",
      "name": {
        "familyName": "string",
        "givenName": "string"
      },
      "originalPlayerId": "string",
      "playerId": "string",
      "profileSettings": {
        "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
        "kind": "string",
        "profileVisible": true
      },
      "title": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A third party player list response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Player](#schemaplayer)]|false|none|The players.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerListResponse`.|
|nextPageToken|string|false|none|Token corresponding to the next page of results.|

<h2 id="tocS_PlayerScore">PlayerScore</h2>
<!-- backwards compatibility -->
<a id="schemaplayerscore"></a>
<a id="schema_PlayerScore"></a>
<a id="tocSplayerscore"></a>
<a id="tocsplayerscore"></a>

```json
{
  "formattedScore": "string",
  "kind": "string",
  "score": "string",
  "scoreTag": "string",
  "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED"
}
```

A player score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formattedScore|string|false|none|The formatted score for this player score.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScore`.|
|score|string(int64)|false|none|The numerical value for this player score.|
|scoreTag|string|false|none|Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.|
|timeSpan|string|false|none|The time span for this player score.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeSpan|SCORE_TIME_SPAN_UNSPECIFIED|
|timeSpan|ALL_TIME|
|timeSpan|WEEKLY|
|timeSpan|DAILY|

<h2 id="tocS_PlayerScoreListResponse">PlayerScoreListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerscorelistresponse"></a>
<a id="schema_PlayerScoreListResponse"></a>
<a id="tocSplayerscorelistresponse"></a>
<a id="tocsplayerscorelistresponse"></a>

```json
{
  "kind": "string",
  "submittedScores": [
    {
      "beatenScoreTimeSpans": [
        "SCORE_TIME_SPAN_UNSPECIFIED"
      ],
      "formattedScore": "string",
      "kind": "string",
      "leaderboardId": "string",
      "scoreTag": "string",
      "unbeatenScores": [
        {
          "formattedScore": "string",
          "kind": "string",
          "score": "string",
          "scoreTag": "string",
          "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED"
        }
      ]
    }
  ]
}
```

A list of score submission statuses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreListResponse`.|
|submittedScores|[[PlayerScoreResponse](#schemaplayerscoreresponse)]|false|none|The score submissions statuses.|

<h2 id="tocS_PlayerScoreResponse">PlayerScoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerscoreresponse"></a>
<a id="schema_PlayerScoreResponse"></a>
<a id="tocSplayerscoreresponse"></a>
<a id="tocsplayerscoreresponse"></a>

```json
{
  "beatenScoreTimeSpans": [
    "SCORE_TIME_SPAN_UNSPECIFIED"
  ],
  "formattedScore": "string",
  "kind": "string",
  "leaderboardId": "string",
  "scoreTag": "string",
  "unbeatenScores": [
    {
      "formattedScore": "string",
      "kind": "string",
      "score": "string",
      "scoreTag": "string",
      "timeSpan": "SCORE_TIME_SPAN_UNSPECIFIED"
    }
  ]
}
```

A list of leaderboard entry resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beatenScoreTimeSpans|[string]|false|none|The time spans where the submitted score is better than the existing score for that time span.|
|formattedScore|string|false|none|The formatted value of the submitted score.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreResponse`.|
|leaderboardId|string|false|none|The leaderboard ID that this score was submitted to.|
|scoreTag|string|false|none|Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.|
|unbeatenScores|[[PlayerScore](#schemaplayerscore)]|false|none|The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's `DAILY` score, but not better than the player's scores for the `WEEKLY` or `ALL_TIME` time spans.|

#### Enumerated Values

|Property|Value|
|---|---|
|beatenScoreTimeSpans|SCORE_TIME_SPAN_UNSPECIFIED|
|beatenScoreTimeSpans|ALL_TIME|
|beatenScoreTimeSpans|WEEKLY|
|beatenScoreTimeSpans|DAILY|

<h2 id="tocS_PlayerScoreSubmissionList">PlayerScoreSubmissionList</h2>
<!-- backwards compatibility -->
<a id="schemaplayerscoresubmissionlist"></a>
<a id="schema_PlayerScoreSubmissionList"></a>
<a id="tocSplayerscoresubmissionlist"></a>
<a id="tocsplayerscoresubmissionlist"></a>

```json
{
  "kind": "string",
  "scores": [
    {
      "kind": "string",
      "leaderboardId": "string",
      "score": "string",
      "scoreTag": "string",
      "signature": "string"
    }
  ]
}
```

A list of score submission requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`.|
|scores|[[ScoreSubmission](#schemascoresubmission)]|false|none|The score submissions.|

<h2 id="tocS_ProfileSettings">ProfileSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprofilesettings"></a>
<a id="schema_ProfileSettings"></a>
<a id="tocSprofilesettings"></a>
<a id="tocsprofilesettings"></a>

```json
{
  "friendsListVisibility": "FRIENDS_LIST_VISIBILITY_UNSPECIFIED",
  "kind": "string",
  "profileVisible": true
}
```

Profile settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|friendsListVisibility|string|false|none|none|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#profileSettings`.|
|profileVisible|boolean|false|none|Whether the player's profile is visible to the currently signed in player.|

#### Enumerated Values

|Property|Value|
|---|---|
|friendsListVisibility|FRIENDS_LIST_VISIBILITY_UNSPECIFIED|
|friendsListVisibility|VISIBLE|
|friendsListVisibility|REQUEST_REQUIRED|
|friendsListVisibility|UNAVAILABLE|

<h2 id="tocS_RevisionCheckResponse">RevisionCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevisioncheckresponse"></a>
<a id="schema_RevisionCheckResponse"></a>
<a id="tocSrevisioncheckresponse"></a>
<a id="tocsrevisioncheckresponse"></a>

```json
{
  "apiVersion": "string",
  "kind": "string",
  "revisionStatus": "REVISION_STATUS_UNSPECIFIED"
}
```

A third party checking a revision response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|The version of the API this client revision should use when calling API methods.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`.|
|revisionStatus|string|false|none|The result of the revision check.|

#### Enumerated Values

|Property|Value|
|---|---|
|revisionStatus|REVISION_STATUS_UNSPECIFIED|
|revisionStatus|OK|
|revisionStatus|DEPRECATED|
|revisionStatus|INVALID|

<h2 id="tocS_ScopedPlayerIds">ScopedPlayerIds</h2>
<!-- backwards compatibility -->
<a id="schemascopedplayerids"></a>
<a id="schema_ScopedPlayerIds"></a>
<a id="tocSscopedplayerids"></a>
<a id="tocsscopedplayerids"></a>

```json
{
  "developerPlayerKey": "string",
  "gamePlayerId": "string"
}
```

Scoped player identifiers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerPlayerKey|string|false|none|Identifier of the player across all games of the given developer. Every player has the same developer_player_key in all games of one developer. Developer player key changes for the game if the game is transferred to another developer. Note that game_player_id will stay unchanged.|
|gamePlayerId|string|false|none|Game-scoped player identifier. This is the same id that is returned in GetPlayer game_player_id field.|

<h2 id="tocS_ScoreSubmission">ScoreSubmission</h2>
<!-- backwards compatibility -->
<a id="schemascoresubmission"></a>
<a id="schema_ScoreSubmission"></a>
<a id="tocSscoresubmission"></a>
<a id="tocsscoresubmission"></a>

```json
{
  "kind": "string",
  "leaderboardId": "string",
  "score": "string",
  "scoreTag": "string",
  "signature": "string"
}
```

A request to submit a score to leaderboards.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#scoreSubmission`.|
|leaderboardId|string|false|none|The leaderboard this score is being submitted to.|
|score|string(int64)|false|none|The new score being submitted.|
|scoreTag|string|false|none|Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.|
|signature|string|false|none|Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.|

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "coverImage": {
    "height": 0,
    "kind": "string",
    "mime_type": "string",
    "url": "string",
    "width": 0
  },
  "description": "string",
  "driveId": "string",
  "durationMillis": "string",
  "id": "string",
  "kind": "string",
  "lastModifiedMillis": "string",
  "progressValue": "string",
  "title": "string",
  "type": "SNAPSHOT_TYPE_UNSPECIFIED",
  "uniqueName": "string"
}
```

An snapshot object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coverImage|[SnapshotImage](#schemasnapshotimage)|false|none|The cover image of this snapshot. May be absent if there is no image.|
|description|string|false|none|The description of this snapshot.|
|driveId|string|false|none|The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.|
|durationMillis|string(int64)|false|none|The duration associated with this snapshot, in millis.|
|id|string|false|none|The ID of the snapshot.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshot`.|
|lastModifiedMillis|string(int64)|false|none|The timestamp (in millis since Unix epoch) of the last modification to this snapshot.|
|progressValue|string(int64)|false|none|The progress value (64-bit integer set by developer) associated with this snapshot.|
|title|string|false|none|The title of this snapshot.|
|type|string|false|none|The type of this snapshot.|
|uniqueName|string|false|none|The unique name provided when the snapshot was created.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SNAPSHOT_TYPE_UNSPECIFIED|
|type|SAVE_GAME|

<h2 id="tocS_SnapshotImage">SnapshotImage</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotimage"></a>
<a id="schema_SnapshotImage"></a>
<a id="tocSsnapshotimage"></a>
<a id="tocssnapshotimage"></a>

```json
{
  "height": 0,
  "kind": "string",
  "mime_type": "string",
  "url": "string",
  "width": 0
}
```

An image of a snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|The height of the image.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotImage`.|
|mime_type|string|false|none|The MIME type of the image.|
|url|string|false|none|The URL of the image. This URL may be invalidated at any time and should not be cached.|
|width|integer(int32)|false|none|The width of the image.|

<h2 id="tocS_SnapshotListResponse">SnapshotListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotlistresponse"></a>
<a id="schema_SnapshotListResponse"></a>
<a id="tocSsnapshotlistresponse"></a>
<a id="tocssnapshotlistresponse"></a>

```json
{
  "items": [
    {
      "coverImage": {
        "height": 0,
        "kind": "string",
        "mime_type": "string",
        "url": "string",
        "width": 0
      },
      "description": "string",
      "driveId": "string",
      "durationMillis": "string",
      "id": "string",
      "kind": "string",
      "lastModifiedMillis": "string",
      "progressValue": "string",
      "title": "string",
      "type": "SNAPSHOT_TYPE_UNSPECIFIED",
      "uniqueName": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A third party list snapshots response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Snapshot](#schemasnapshot)]|false|none|The snapshots.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotListResponse`.|
|nextPageToken|string|false|none|Token corresponding to the next page of results. If there are no more results, the token is omitted.|

<h2 id="tocS_StatsResponse">StatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatsresponse"></a>
<a id="schema_StatsResponse"></a>
<a id="tocSstatsresponse"></a>
<a id="tocsstatsresponse"></a>

```json
{
  "avg_session_length_minutes": 0,
  "churn_probability": 0,
  "days_since_last_played": 0,
  "high_spender_probability": 0,
  "kind": "string",
  "num_purchases": 0,
  "num_sessions": 0,
  "num_sessions_percentile": 0,
  "spend_percentile": 0,
  "spend_probability": 0,
  "total_spend_next_28_days": 0
}
```

A third party stats resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_session_length_minutes|number(float)|false|none|Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information.|
|churn_probability|number(float)|false|none|The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information.|
|days_since_last_played|integer(int32)|false|none|Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.|
|high_spender_probability|number(float)|false|none|The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `games#statsResponse`.|
|num_purchases|integer(int32)|false|none|Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.|
|num_sessions|integer(int32)|false|none|The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.|
|num_sessions_percentile|number(float)|false|none|The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.|
|spend_percentile|number(float)|false|none|The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.|
|spend_probability|number(float)|false|none|The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.|
|total_spend_next_28_days|number(float)|false|none|The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information.|
