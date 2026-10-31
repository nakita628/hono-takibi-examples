<h1 id="google-play-game-management">Google Play Game Management v1management</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Play Game Management API allows developers to manage resources from the Google Play Game service.

Base URLs:

* <a href="https://gamesmanagement.googleapis.com/">https://gamesmanagement.googleapis.com/</a>

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
|https://www.googleapis.com/auth/games|Create, edit, and delete your Google Play Games activity|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/games|Create, edit, and delete your Google Play Games activity|

<h1 id="google-play-game-management-achievements">achievements</h1>

## gamesManagement.achievements.resetAll

<a id="opIdgamesManagement.achievements.resetAll"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/achievements/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/achievements/reset`

Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.

<h3 id="gamesmanagementachievementsresetall-parameters">Parameters</h3>

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
  "kind": "string",
  "results": [
    {
      "currentState": "string",
      "definitionId": "string",
      "kind": "string",
      "updateOccurred": true
    }
  ]
}
```

<h3 id="gamesmanagementachievementsresetall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementResetAllResponse](#schemaachievementresetallresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.achievements.resetAllForAllPlayers

<a id="opIdgamesManagement.achievements.resetAllForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/achievements/resetAllForAllPlayers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/achievements/resetAllForAllPlayers`

Resets all draft achievements for all players. This method is only available to user accounts for your developer console.

<h3 id="gamesmanagementachievementsresetallforallplayers-parameters">Parameters</h3>

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

<h3 id="gamesmanagementachievementsresetallforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.achievements.resetMultipleForAllPlayers

<a id="opIdgamesManagement.achievements.resetMultipleForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/achievements/resetMultipleForAllPlayers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "achievement_ids": [
      "string"
    ],
    "kind": "string"
  }'
```

`POST /games/v1management/achievements/resetMultipleForAllPlayers`

Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

> Body parameter

```json
{
  "achievement_ids": [
    "string"
  ],
  "kind": "string"
}
```

<h3 id="gamesmanagementachievementsresetmultipleforallplayers-parameters">Parameters</h3>

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
|body|body|[AchievementResetMultipleForAllRequest](#schemaachievementresetmultipleforallrequest)|false|none|
|» achievement_ids|body|[string]|false|The IDs of achievements to reset.|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gamesmanagementachievementsresetmultipleforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.achievements.reset

<a id="opIdgamesManagement.achievements.reset"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/achievements/string/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/achievements/{achievementId}/reset`

Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

<h3 id="gamesmanagementachievementsreset-parameters">Parameters</h3>

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
  "currentState": "string",
  "definitionId": "string",
  "kind": "string",
  "updateOccurred": true
}
```

<h3 id="gamesmanagementachievementsreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementResetResponse](#schemaachievementresetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.achievements.resetForAllPlayers

<a id="opIdgamesManagement.achievements.resetForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/achievements/string/resetForAllPlayers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/achievements/{achievementId}/resetForAllPlayers`

Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.

<h3 id="gamesmanagementachievementsresetforallplayers-parameters">Parameters</h3>

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

<h3 id="gamesmanagementachievementsresetforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-management-applications">applications</h1>

## gamesManagement.applications.listHidden

<a id="opIdgamesManagement.applications.listHidden"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/applications/string/players/hidden \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1management/applications/{applicationId}/players/hidden`

Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

<h3 id="gamesmanagementapplicationslisthidden-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
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
      "hiddenTimeMillis": "string",
      "kind": "string",
      "player": {
        "avatarImageUrl": "string",
        "bannerUrlLandscape": "string",
        "bannerUrlPortrait": "string",
        "displayName": "string",
        "experienceInfo": {
          "currentExperiencePoints": "string",
          "currentLevel": {
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          },
          "lastLevelUpTimestampMillis": "string",
          "nextLevel": {
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          }
        },
        "kind": "string",
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "originalPlayerId": "string",
        "playerId": "string",
        "profileSettings": {
          "kind": "string",
          "profileVisible": true
        },
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesmanagementapplicationslisthidden-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HiddenPlayerList](#schemahiddenplayerlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-management-events">events</h1>

## gamesManagement.events.resetAll

<a id="opIdgamesManagement.events.resetAll"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/events/reset \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/events/reset`

Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

<h3 id="gamesmanagementeventsresetall-parameters">Parameters</h3>

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

<h3 id="gamesmanagementeventsresetall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.events.resetAllForAllPlayers

<a id="opIdgamesManagement.events.resetAllForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/events/resetAllForAllPlayers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/events/resetAllForAllPlayers`

Resets all draft events for all players. This method is only available to user accounts for your developer console.

<h3 id="gamesmanagementeventsresetallforallplayers-parameters">Parameters</h3>

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

<h3 id="gamesmanagementeventsresetallforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.events.resetMultipleForAllPlayers

<a id="opIdgamesManagement.events.resetMultipleForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/events/resetMultipleForAllPlayers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event_ids": [
      "string"
    ],
    "kind": "string"
  }'
```

`POST /games/v1management/events/resetMultipleForAllPlayers`

Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

> Body parameter

```json
{
  "event_ids": [
    "string"
  ],
  "kind": "string"
}
```

<h3 id="gamesmanagementeventsresetmultipleforallplayers-parameters">Parameters</h3>

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
|body|body|[EventsResetMultipleForAllRequest](#schemaeventsresetmultipleforallrequest)|false|none|
|» event_ids|body|[string]|false|The IDs of events to reset.|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gamesmanagementeventsresetmultipleforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.events.reset

<a id="opIdgamesManagement.events.reset"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/events/string/reset \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/events/{eventId}/reset`

Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

<h3 id="gamesmanagementeventsreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|The ID of the event.|
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

<h3 id="gamesmanagementeventsreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.events.resetForAllPlayers

<a id="opIdgamesManagement.events.resetForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/events/string/resetForAllPlayers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/events/{eventId}/resetForAllPlayers`

Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.

<h3 id="gamesmanagementeventsresetforallplayers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|The ID of the event.|
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

<h3 id="gamesmanagementeventsresetforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-management-players">players</h1>

## gamesManagement.players.hide

<a id="opIdgamesManagement.players.hide"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/applications/string/players/hidden/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/applications/{applicationId}/players/hidden/{playerId}`

Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

<h3 id="gamesmanagementplayershide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
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

<h3 id="gamesmanagementplayershide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.players.unhide

<a id="opIdgamesManagement.players.unhide"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/applications/string/players/hidden/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /games/v1management/applications/{applicationId}/players/hidden/{playerId}`

Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

<h3 id="gamesmanagementplayersunhide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
|playerId|path|string|true|A player ID. A value of `me` may be used in place of the authenticated player's ID.|
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

<h3 id="gamesmanagementplayersunhide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

<h1 id="google-play-game-management-scores">scores</h1>

## gamesManagement.scores.reset

<a id="opIdgamesManagement.scores.reset"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/leaderboards/string/scores/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/leaderboards/{leaderboardId}/scores/reset`

Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

<h3 id="gamesmanagementscoresreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leaderboardId|path|string|true|The ID of the leaderboard.|
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
  "definitionId": "string",
  "kind": "string",
  "resetScoreTimeSpans": [
    "string"
  ]
}
```

<h3 id="gamesmanagementscoresreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerScoreResetResponse](#schemaplayerscoreresetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.scores.resetForAllPlayers

<a id="opIdgamesManagement.scores.resetForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/leaderboards/string/scores/resetForAllPlayers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers`

Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.

<h3 id="gamesmanagementscoresresetforallplayers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|leaderboardId|path|string|true|The ID of the leaderboard.|
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

<h3 id="gamesmanagementscoresresetforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.scores.resetAll

<a id="opIdgamesManagement.scores.resetAll"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/scores/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/scores/reset`

Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.

<h3 id="gamesmanagementscoresresetall-parameters">Parameters</h3>

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
  "kind": "string",
  "results": [
    {
      "definitionId": "string",
      "kind": "string",
      "resetScoreTimeSpans": [
        "string"
      ]
    }
  ]
}
```

<h3 id="gamesmanagementscoresresetall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlayerScoreResetAllResponse](#schemaplayerscoreresetallresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.scores.resetAllForAllPlayers

<a id="opIdgamesManagement.scores.resetAllForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/scores/resetAllForAllPlayers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /games/v1management/scores/resetAllForAllPlayers`

Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.

<h3 id="gamesmanagementscoresresetallforallplayers-parameters">Parameters</h3>

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

<h3 id="gamesmanagementscoresresetallforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

## gamesManagement.scores.resetMultipleForAllPlayers

<a id="opIdgamesManagement.scores.resetMultipleForAllPlayers"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1management/scores/resetMultipleForAllPlayers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "string",
    "leaderboard_ids": [
      "string"
    ]
  }'
```

`POST /games/v1management/scores/resetMultipleForAllPlayers`

Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

> Body parameter

```json
{
  "kind": "string",
  "leaderboard_ids": [
    "string"
  ]
}
```

<h3 id="gamesmanagementscoresresetmultipleforallplayers-parameters">Parameters</h3>

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
|body|body|[ScoresResetMultipleForAllRequest](#schemascoresresetmultipleforallrequest)|false|none|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`.|
|» leaderboard_ids|body|[string]|false|The IDs of leaderboards to reset.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="gamesmanagementscoresresetmultipleforallplayers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/games ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/games )
</aside>

# Schemas

<h2 id="tocS_AchievementResetAllResponse">AchievementResetAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementresetallresponse"></a>
<a id="schema_AchievementResetAllResponse"></a>
<a id="tocSachievementresetallresponse"></a>
<a id="tocsachievementresetallresponse"></a>

```json
{
  "kind": "string",
  "results": [
    {
      "currentState": "string",
      "definitionId": "string",
      "kind": "string",
      "updateOccurred": true
    }
  ]
}
```

Achievement reset all response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`.|
|results|[[AchievementResetResponse](#schemaachievementresetresponse)]|false|none|The achievement reset results.|

<h2 id="tocS_AchievementResetMultipleForAllRequest">AchievementResetMultipleForAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemaachievementresetmultipleforallrequest"></a>
<a id="schema_AchievementResetMultipleForAllRequest"></a>
<a id="tocSachievementresetmultipleforallrequest"></a>
<a id="tocsachievementresetmultipleforallrequest"></a>

```json
{
  "achievement_ids": [
    "string"
  ],
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievement_ids|[string]|false|none|The IDs of achievements to reset.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`.|

<h2 id="tocS_AchievementResetResponse">AchievementResetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementresetresponse"></a>
<a id="schema_AchievementResetResponse"></a>
<a id="tocSachievementresetresponse"></a>
<a id="tocsachievementresetresponse"></a>

```json
{
  "currentState": "string",
  "definitionId": "string",
  "kind": "string",
  "updateOccurred": true
}
```

An achievement reset response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentState|string|false|none|The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked. |
|definitionId|string|false|none|The ID of an achievement for which player state has been updated.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`.|
|updateOccurred|boolean|false|none|Flag to indicate if the requested update actually occurred.|

<h2 id="tocS_EventsResetMultipleForAllRequest">EventsResetMultipleForAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventsresetmultipleforallrequest"></a>
<a id="schema_EventsResetMultipleForAllRequest"></a>
<a id="tocSeventsresetmultipleforallrequest"></a>
<a id="tocseventsresetmultipleforallrequest"></a>

```json
{
  "event_ids": [
    "string"
  ],
  "kind": "string"
}
```

Multiple events reset all request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_ids|[string]|false|none|The IDs of events to reset.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`.|

<h2 id="tocS_GamesPlayerExperienceInfoResource">GamesPlayerExperienceInfoResource</h2>
<!-- backwards compatibility -->
<a id="schemagamesplayerexperienceinforesource"></a>
<a id="schema_GamesPlayerExperienceInfoResource"></a>
<a id="tocSgamesplayerexperienceinforesource"></a>
<a id="tocsgamesplayerexperienceinforesource"></a>

```json
{
  "currentExperiencePoints": "string",
  "currentLevel": {
    "level": 0,
    "maxExperiencePoints": "string",
    "minExperiencePoints": "string"
  },
  "lastLevelUpTimestampMillis": "string",
  "nextLevel": {
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
|currentLevel|[GamesPlayerLevelResource](#schemagamesplayerlevelresource)|false|none|The current level of the player.|
|lastLevelUpTimestampMillis|string(int64)|false|none|The timestamp when the player was leveled up, in millis since Unix epoch UTC.|
|nextLevel|[GamesPlayerLevelResource](#schemagamesplayerlevelresource)|false|none|The next level of the player. If the current level is the maximum level, this should be same as the current level.|

<h2 id="tocS_GamesPlayerLevelResource">GamesPlayerLevelResource</h2>
<!-- backwards compatibility -->
<a id="schemagamesplayerlevelresource"></a>
<a id="schema_GamesPlayerLevelResource"></a>
<a id="tocSgamesplayerlevelresource"></a>
<a id="tocsgamesplayerlevelresource"></a>

```json
{
  "level": 0,
  "maxExperiencePoints": "string",
  "minExperiencePoints": "string"
}
```

1P/3P metadata about a user's level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|integer(int32)|false|none|The level for the user.|
|maxExperiencePoints|string(int64)|false|none|The maximum experience points for this level.|
|minExperiencePoints|string(int64)|false|none|The minimum experience points for this level.|

<h2 id="tocS_HiddenPlayer">HiddenPlayer</h2>
<!-- backwards compatibility -->
<a id="schemahiddenplayer"></a>
<a id="schema_HiddenPlayer"></a>
<a id="tocShiddenplayer"></a>
<a id="tocshiddenplayer"></a>

```json
{
  "hiddenTimeMillis": "string",
  "kind": "string",
  "player": {
    "avatarImageUrl": "string",
    "bannerUrlLandscape": "string",
    "bannerUrlPortrait": "string",
    "displayName": "string",
    "experienceInfo": {
      "currentExperiencePoints": "string",
      "currentLevel": {
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      },
      "lastLevelUpTimestampMillis": "string",
      "nextLevel": {
        "level": 0,
        "maxExperiencePoints": "string",
        "minExperiencePoints": "string"
      }
    },
    "kind": "string",
    "name": {
      "familyName": "string",
      "givenName": "string"
    },
    "originalPlayerId": "string",
    "playerId": "string",
    "profileSettings": {
      "kind": "string",
      "profileVisible": true
    },
    "title": "string"
  }
}
```

The HiddenPlayer resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hiddenTimeMillis|string(int64)|false|read-only|Output only. The time this player was hidden.|
|kind|string|false|read-only|Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`.|
|player|[Player](#schemaplayer)|false|none|Output only. The player information.|

<h2 id="tocS_HiddenPlayerList">HiddenPlayerList</h2>
<!-- backwards compatibility -->
<a id="schemahiddenplayerlist"></a>
<a id="schema_HiddenPlayerList"></a>
<a id="tocShiddenplayerlist"></a>
<a id="tocshiddenplayerlist"></a>

```json
{
  "items": [
    {
      "hiddenTimeMillis": "string",
      "kind": "string",
      "player": {
        "avatarImageUrl": "string",
        "bannerUrlLandscape": "string",
        "bannerUrlPortrait": "string",
        "displayName": "string",
        "experienceInfo": {
          "currentExperiencePoints": "string",
          "currentLevel": {
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          },
          "lastLevelUpTimestampMillis": "string",
          "nextLevel": {
            "level": 0,
            "maxExperiencePoints": "string",
            "minExperiencePoints": "string"
          }
        },
        "kind": "string",
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "originalPlayerId": "string",
        "playerId": "string",
        "profileSettings": {
          "kind": "string",
          "profileVisible": true
        },
        "title": "string"
      }
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A list of hidden players.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[HiddenPlayer](#schemahiddenplayer)]|false|none|The players.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|

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
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    },
    "lastLevelUpTimestampMillis": "string",
    "nextLevel": {
      "level": 0,
      "maxExperiencePoints": "string",
      "minExperiencePoints": "string"
    }
  },
  "kind": "string",
  "name": {
    "familyName": "string",
    "givenName": "string"
  },
  "originalPlayerId": "string",
  "playerId": "string",
  "profileSettings": {
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
|experienceInfo|[GamesPlayerExperienceInfoResource](#schemagamesplayerexperienceinforesource)|false|none|An object to represent Play Game experience information for the player.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#player`.|
|name|object|false|none|An object representation of the individual components of the player's name. For some players, these fields may not be present.|
|originalPlayerId|string|false|none|The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.|
|playerId|string|false|none|The ID of the player.|
|profileSettings|[ProfileSettings](#schemaprofilesettings)|false|none|The player's profile settings. Controls whether or not the player's profile is visible to other players.|
|title|string|false|none|The player's title rewarded for their game activities.|

<h2 id="tocS_PlayerScoreResetAllResponse">PlayerScoreResetAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerscoreresetallresponse"></a>
<a id="schema_PlayerScoreResetAllResponse"></a>
<a id="tocSplayerscoreresetallresponse"></a>
<a id="tocsplayerscoreresetallresponse"></a>

```json
{
  "kind": "string",
  "results": [
    {
      "definitionId": "string",
      "kind": "string",
      "resetScoreTimeSpans": [
        "string"
      ]
    }
  ]
}
```

A list of leaderboard reset resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`.|
|results|[[PlayerScoreResetResponse](#schemaplayerscoreresetresponse)]|false|none|The leaderboard reset results.|

<h2 id="tocS_PlayerScoreResetResponse">PlayerScoreResetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplayerscoreresetresponse"></a>
<a id="schema_PlayerScoreResetResponse"></a>
<a id="tocSplayerscoreresetresponse"></a>
<a id="tocsplayerscoreresetresponse"></a>

```json
{
  "definitionId": "string",
  "kind": "string",
  "resetScoreTimeSpans": [
    "string"
  ]
}
```

A list of reset leaderboard entry resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|definitionId|string|false|none|The ID of an leaderboard for which player state has been updated.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`.|
|resetScoreTimeSpans|[string]|false|none|The time spans of the updated score. Possible values are: - "`ALL_TIME`" - The score is an all-time score. - "`WEEKLY`" - The score is a weekly score. - "`DAILY`" - The score is a daily score. |

<h2 id="tocS_ProfileSettings">ProfileSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprofilesettings"></a>
<a id="schema_ProfileSettings"></a>
<a id="tocSprofilesettings"></a>
<a id="tocsprofilesettings"></a>

```json
{
  "kind": "string",
  "profileVisible": true
}
```

Profile settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#profileSettings`.|
|profileVisible|boolean|false|none|none|

<h2 id="tocS_ScoresResetMultipleForAllRequest">ScoresResetMultipleForAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemascoresresetmultipleforallrequest"></a>
<a id="schema_ScoresResetMultipleForAllRequest"></a>
<a id="tocSscoresresetmultipleforallrequest"></a>
<a id="tocsscoresresetmultipleforallrequest"></a>

```json
{
  "kind": "string",
  "leaderboard_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`.|
|leaderboard_ids|[string]|false|none|The IDs of leaderboards to reset.|
