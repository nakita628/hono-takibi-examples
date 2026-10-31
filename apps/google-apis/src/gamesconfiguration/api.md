<h1 id="google-play-game-services-publishing-api">Google Play Game Services Publishing API v1configuration</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Play Game Services Publishing API allows developers to configure their games in Game Services.

Base URLs:

* <a href="https://gamesconfiguration.googleapis.com/">https://gamesconfiguration.googleapis.com/</a>

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
|https://www.googleapis.com/auth/androidpublisher|View and manage your Google Play Developer account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/androidpublisher|View and manage your Google Play Developer account|

<h1 id="google-play-game-services-publishing-api-achievementconfigurations">achievementConfigurations</h1>

## gamesConfiguration.achievementConfigurations.get

<a id="opIdgamesConfiguration.achievementConfigurations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/achievements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1configuration/achievements/{achievementId}`

Retrieves the metadata of the achievement configuration with the given ID.

<h3 id="gamesconfigurationachievementconfigurationsget-parameters">Parameters</h3>

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
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "draft": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "id": "string",
  "initialState": "INITIAL_STATE_UNSPECIFIED",
  "kind": "string",
  "published": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "stepsToUnlock": 0,
  "token": "string"
}
```

<h3 id="gamesconfigurationachievementconfigurationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementConfiguration](#schemaachievementconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.achievementConfigurations.update

<a id="opIdgamesConfiguration.achievementConfigurations.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/achievements/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
    "draft": {
      "description": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "pointValue": 0,
      "sortRank": 0
    },
    "id": "string",
    "initialState": "INITIAL_STATE_UNSPECIFIED",
    "kind": "string",
    "published": {
      "description": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "pointValue": 0,
      "sortRank": 0
    },
    "stepsToUnlock": 0,
    "token": "string"
  }'
```

`PUT /games/v1configuration/achievements/{achievementId}`

Update the metadata of the achievement configuration with the given ID.

> Body parameter

```json
{
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "draft": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "id": "string",
  "initialState": "INITIAL_STATE_UNSPECIFIED",
  "kind": "string",
  "published": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "stepsToUnlock": 0,
  "token": "string"
}
```

<h3 id="gamesconfigurationachievementconfigurationsupdate-parameters">Parameters</h3>

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
|body|body|[AchievementConfiguration](#schemaachievementconfiguration)|false|none|
|» achievementType|body|string|false|The type of the achievement.|
|» draft|body|[AchievementConfigurationDetail](#schemaachievementconfigurationdetail)|false|The draft data of the achievement.|
|» id|body|string|false|The ID of the achievement.|
|» initialState|body|string|false|The initial state of the achievement.|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.|
|» published|body|[AchievementConfigurationDetail](#schemaachievementconfigurationdetail)|false|The read-only published data of the achievement.|
|» stepsToUnlock|body|integer(int32)|false|Steps to unlock. Only applicable to incremental achievements.|
|» token|body|string|false|The token for this resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» achievementType|ACHIEVEMENT_TYPE_UNSPECIFIED|
|» achievementType|STANDARD|
|» achievementType|INCREMENTAL|
|» initialState|INITIAL_STATE_UNSPECIFIED|
|» initialState|HIDDEN|
|» initialState|REVEALED|

> Example responses

> 200 Response

```json
{
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "draft": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "id": "string",
  "initialState": "INITIAL_STATE_UNSPECIFIED",
  "kind": "string",
  "published": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "stepsToUnlock": 0,
  "token": "string"
}
```

<h3 id="gamesconfigurationachievementconfigurationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementConfiguration](#schemaachievementconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.achievementConfigurations.delete

<a id="opIdgamesConfiguration.achievementConfigurations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/achievements/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /games/v1configuration/achievements/{achievementId}`

Delete the achievement configuration with the given ID.

<h3 id="gamesconfigurationachievementconfigurationsdelete-parameters">Parameters</h3>

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

<h3 id="gamesconfigurationachievementconfigurationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.achievementConfigurations.list

<a id="opIdgamesConfiguration.achievementConfigurations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/applications/string/achievements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1configuration/applications/{applicationId}/achievements`

Returns a list of the achievement configurations in this application.

<h3 id="gamesconfigurationachievementconfigurationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
|maxResults|query|integer|false|The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.|
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
      "draft": {
        "description": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "pointValue": 0,
        "sortRank": 0
      },
      "id": "string",
      "initialState": "INITIAL_STATE_UNSPECIFIED",
      "kind": "string",
      "published": {
        "description": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "pointValue": 0,
        "sortRank": 0
      },
      "stepsToUnlock": 0,
      "token": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesconfigurationachievementconfigurationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementConfigurationListResponse](#schemaachievementconfigurationlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.achievementConfigurations.insert

<a id="opIdgamesConfiguration.achievementConfigurations.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/applications/string/achievements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
    "draft": {
      "description": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "pointValue": 0,
      "sortRank": 0
    },
    "id": "string",
    "initialState": "INITIAL_STATE_UNSPECIFIED",
    "kind": "string",
    "published": {
      "description": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "pointValue": 0,
      "sortRank": 0
    },
    "stepsToUnlock": 0,
    "token": "string"
  }'
```

`POST /games/v1configuration/applications/{applicationId}/achievements`

Insert a new achievement configuration in this application.

> Body parameter

```json
{
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "draft": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "id": "string",
  "initialState": "INITIAL_STATE_UNSPECIFIED",
  "kind": "string",
  "published": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "stepsToUnlock": 0,
  "token": "string"
}
```

<h3 id="gamesconfigurationachievementconfigurationsinsert-parameters">Parameters</h3>

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
|body|body|[AchievementConfiguration](#schemaachievementconfiguration)|false|none|
|» achievementType|body|string|false|The type of the achievement.|
|» draft|body|[AchievementConfigurationDetail](#schemaachievementconfigurationdetail)|false|The draft data of the achievement.|
|» id|body|string|false|The ID of the achievement.|
|» initialState|body|string|false|The initial state of the achievement.|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.|
|» published|body|[AchievementConfigurationDetail](#schemaachievementconfigurationdetail)|false|The read-only published data of the achievement.|
|» stepsToUnlock|body|integer(int32)|false|Steps to unlock. Only applicable to incremental achievements.|
|» token|body|string|false|The token for this resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» achievementType|ACHIEVEMENT_TYPE_UNSPECIFIED|
|» achievementType|STANDARD|
|» achievementType|INCREMENTAL|
|» initialState|INITIAL_STATE_UNSPECIFIED|
|» initialState|HIDDEN|
|» initialState|REVEALED|

> Example responses

> 200 Response

```json
{
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "draft": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "id": "string",
  "initialState": "INITIAL_STATE_UNSPECIFIED",
  "kind": "string",
  "published": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "stepsToUnlock": 0,
  "token": "string"
}
```

<h3 id="gamesconfigurationachievementconfigurationsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AchievementConfiguration](#schemaachievementconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

<h1 id="google-play-game-services-publishing-api-leaderboardconfigurations">leaderboardConfigurations</h1>

## gamesConfiguration.leaderboardConfigurations.list

<a id="opIdgamesConfiguration.leaderboardConfigurations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/applications/string/leaderboards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1configuration/applications/{applicationId}/leaderboards`

Returns a list of the leaderboard configurations in this application.

<h3 id="gamesconfigurationleaderboardconfigurationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The application ID from the Google Play developer console.|
|maxResults|query|integer|false|The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.|
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
      "draft": {
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "scoreFormat": {
          "currencyCode": "string",
          "numDecimalPlaces": 0,
          "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
          "suffix": {
            "few": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "many": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "one": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "other": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "two": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "zero": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            }
          }
        },
        "sortRank": 0
      },
      "id": "string",
      "kind": "string",
      "published": {
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "scoreFormat": {
          "currencyCode": "string",
          "numDecimalPlaces": 0,
          "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
          "suffix": {
            "few": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "many": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "one": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "other": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "two": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "zero": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            }
          }
        },
        "sortRank": 0
      },
      "scoreMax": "string",
      "scoreMin": "string",
      "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
      "token": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

<h3 id="gamesconfigurationleaderboardconfigurationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardConfigurationListResponse](#schemaleaderboardconfigurationlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.leaderboardConfigurations.insert

<a id="opIdgamesConfiguration.leaderboardConfigurations.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/applications/string/leaderboards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "draft": {
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "scoreFormat": {
        "currencyCode": "string",
        "numDecimalPlaces": 0,
        "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
        "suffix": {
          "few": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "many": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "one": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "other": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "two": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "zero": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          }
        }
      },
      "sortRank": 0
    },
    "id": "string",
    "kind": "string",
    "published": {
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "scoreFormat": {
        "currencyCode": "string",
        "numDecimalPlaces": 0,
        "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
        "suffix": {
          "few": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "many": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "one": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "other": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "two": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "zero": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          }
        }
      },
      "sortRank": 0
    },
    "scoreMax": "string",
    "scoreMin": "string",
    "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
    "token": "string"
  }'
```

`POST /games/v1configuration/applications/{applicationId}/leaderboards`

Insert a new leaderboard configuration in this application.

> Body parameter

```json
{
  "draft": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "id": "string",
  "kind": "string",
  "published": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "scoreMax": "string",
  "scoreMin": "string",
  "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
  "token": "string"
}
```

<h3 id="gamesconfigurationleaderboardconfigurationsinsert-parameters">Parameters</h3>

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
|body|body|[LeaderboardConfiguration](#schemaleaderboardconfiguration)|false|none|
|» draft|body|[LeaderboardConfigurationDetail](#schemaleaderboardconfigurationdetail)|false|The draft data of the leaderboard.|
|» id|body|string|false|The ID of the leaderboard.|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.|
|» published|body|[LeaderboardConfigurationDetail](#schemaleaderboardconfigurationdetail)|false|The read-only published data of the leaderboard.|
|» scoreMax|body|string(int64)|false|Maximum score that can be posted to this leaderboard.|
|» scoreMin|body|string(int64)|false|Minimum score that can be posted to this leaderboard.|
|» scoreOrder|body|string|false|none|
|» token|body|string|false|The token for this resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» scoreOrder|SCORE_ORDER_UNSPECIFIED|
|» scoreOrder|LARGER_IS_BETTER|
|» scoreOrder|SMALLER_IS_BETTER|

> Example responses

> 200 Response

```json
{
  "draft": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "id": "string",
  "kind": "string",
  "published": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "scoreMax": "string",
  "scoreMin": "string",
  "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
  "token": "string"
}
```

<h3 id="gamesconfigurationleaderboardconfigurationsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardConfiguration](#schemaleaderboardconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.leaderboardConfigurations.get

<a id="opIdgamesConfiguration.leaderboardConfigurations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/leaderboards/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /games/v1configuration/leaderboards/{leaderboardId}`

Retrieves the metadata of the leaderboard configuration with the given ID.

<h3 id="gamesconfigurationleaderboardconfigurationsget-parameters">Parameters</h3>

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
  "draft": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "id": "string",
  "kind": "string",
  "published": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "scoreMax": "string",
  "scoreMin": "string",
  "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
  "token": "string"
}
```

<h3 id="gamesconfigurationleaderboardconfigurationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardConfiguration](#schemaleaderboardconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.leaderboardConfigurations.update

<a id="opIdgamesConfiguration.leaderboardConfigurations.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/leaderboards/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "draft": {
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "scoreFormat": {
        "currencyCode": "string",
        "numDecimalPlaces": 0,
        "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
        "suffix": {
          "few": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "many": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "one": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "other": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "two": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "zero": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          }
        }
      },
      "sortRank": 0
    },
    "id": "string",
    "kind": "string",
    "published": {
      "iconUrl": "string",
      "kind": "string",
      "name": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "scoreFormat": {
        "currencyCode": "string",
        "numDecimalPlaces": 0,
        "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
        "suffix": {
          "few": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "many": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "one": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "other": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "two": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          },
          "zero": {
            "kind": "string",
            "translations": [
              {
                "kind": "string",
                "locale": "string",
                "value": "string"
              }
            ]
          }
        }
      },
      "sortRank": 0
    },
    "scoreMax": "string",
    "scoreMin": "string",
    "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
    "token": "string"
  }'
```

`PUT /games/v1configuration/leaderboards/{leaderboardId}`

Update the metadata of the leaderboard configuration with the given ID.

> Body parameter

```json
{
  "draft": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "id": "string",
  "kind": "string",
  "published": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "scoreMax": "string",
  "scoreMin": "string",
  "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
  "token": "string"
}
```

<h3 id="gamesconfigurationleaderboardconfigurationsupdate-parameters">Parameters</h3>

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
|body|body|[LeaderboardConfiguration](#schemaleaderboardconfiguration)|false|none|
|» draft|body|[LeaderboardConfigurationDetail](#schemaleaderboardconfigurationdetail)|false|The draft data of the leaderboard.|
|» id|body|string|false|The ID of the leaderboard.|
|» kind|body|string|false|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.|
|» published|body|[LeaderboardConfigurationDetail](#schemaleaderboardconfigurationdetail)|false|The read-only published data of the leaderboard.|
|» scoreMax|body|string(int64)|false|Maximum score that can be posted to this leaderboard.|
|» scoreMin|body|string(int64)|false|Minimum score that can be posted to this leaderboard.|
|» scoreOrder|body|string|false|none|
|» token|body|string|false|The token for this resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» scoreOrder|SCORE_ORDER_UNSPECIFIED|
|» scoreOrder|LARGER_IS_BETTER|
|» scoreOrder|SMALLER_IS_BETTER|

> Example responses

> 200 Response

```json
{
  "draft": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "id": "string",
  "kind": "string",
  "published": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "scoreMax": "string",
  "scoreMin": "string",
  "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
  "token": "string"
}
```

<h3 id="gamesconfigurationleaderboardconfigurationsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaderboardConfiguration](#schemaleaderboardconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

## gamesConfiguration.leaderboardConfigurations.delete

<a id="opIdgamesConfiguration.leaderboardConfigurations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/games/v1configuration/leaderboards/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /games/v1configuration/leaderboards/{leaderboardId}`

Delete the leaderboard configuration with the given ID.

<h3 id="gamesconfigurationleaderboardconfigurationsdelete-parameters">Parameters</h3>

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

<h3 id="gamesconfigurationleaderboardconfigurationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/androidpublisher ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/androidpublisher )
</aside>

# Schemas

<h2 id="tocS_AchievementConfiguration">AchievementConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaachievementconfiguration"></a>
<a id="schema_AchievementConfiguration"></a>
<a id="tocSachievementconfiguration"></a>
<a id="tocsachievementconfiguration"></a>

```json
{
  "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
  "draft": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "id": "string",
  "initialState": "INITIAL_STATE_UNSPECIFIED",
  "kind": "string",
  "published": {
    "description": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "pointValue": 0,
    "sortRank": 0
  },
  "stepsToUnlock": 0,
  "token": "string"
}
```

An achievement configuration resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achievementType|string|false|none|The type of the achievement.|
|draft|[AchievementConfigurationDetail](#schemaachievementconfigurationdetail)|false|none|The draft data of the achievement.|
|id|string|false|none|The ID of the achievement.|
|initialState|string|false|none|The initial state of the achievement.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.|
|published|[AchievementConfigurationDetail](#schemaachievementconfigurationdetail)|false|none|The read-only published data of the achievement.|
|stepsToUnlock|integer(int32)|false|none|Steps to unlock. Only applicable to incremental achievements.|
|token|string|false|none|The token for this resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|achievementType|ACHIEVEMENT_TYPE_UNSPECIFIED|
|achievementType|STANDARD|
|achievementType|INCREMENTAL|
|initialState|INITIAL_STATE_UNSPECIFIED|
|initialState|HIDDEN|
|initialState|REVEALED|

<h2 id="tocS_AchievementConfigurationDetail">AchievementConfigurationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaachievementconfigurationdetail"></a>
<a id="schema_AchievementConfigurationDetail"></a>
<a id="tocSachievementconfigurationdetail"></a>
<a id="tocsachievementconfigurationdetail"></a>

```json
{
  "description": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "iconUrl": "string",
  "kind": "string",
  "name": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "pointValue": 0,
  "sortRank": 0
}
```

An achievement configuration detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|Localized strings for the achievement description.|
|iconUrl|string|false|none|The icon url of this achievement. Writes to this field are ignored.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`.|
|name|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|Localized strings for the achievement name.|
|pointValue|integer(int32)|false|none|Point value for the achievement.|
|sortRank|integer(int32)|false|none|The sort rank of this achievement. Writes to this field are ignored.|

<h2 id="tocS_AchievementConfigurationListResponse">AchievementConfigurationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaachievementconfigurationlistresponse"></a>
<a id="schema_AchievementConfigurationListResponse"></a>
<a id="tocSachievementconfigurationlistresponse"></a>
<a id="tocsachievementconfigurationlistresponse"></a>

```json
{
  "items": [
    {
      "achievementType": "ACHIEVEMENT_TYPE_UNSPECIFIED",
      "draft": {
        "description": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "pointValue": 0,
        "sortRank": 0
      },
      "id": "string",
      "initialState": "INITIAL_STATE_UNSPECIFIED",
      "kind": "string",
      "published": {
        "description": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "pointValue": 0,
        "sortRank": 0
      },
      "stepsToUnlock": 0,
      "token": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A ListConfigurations response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AchievementConfiguration](#schemaachievementconfiguration)]|false|none|The achievement configurations.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|

<h2 id="tocS_GamesNumberAffixConfiguration">GamesNumberAffixConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagamesnumberaffixconfiguration"></a>
<a id="schema_GamesNumberAffixConfiguration"></a>
<a id="tocSgamesnumberaffixconfiguration"></a>
<a id="tocsgamesnumberaffixconfiguration"></a>

```json
{
  "few": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "many": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "one": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "other": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "two": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "zero": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  }
}
```

A number affix resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|few|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|When the language requires special treatment of "small" numbers (as with 2, 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12, 13, or 14 in Polish).|
|many|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|When the language requires special treatment of "large" numbers (as with numbers ending 11-99 in Maltese).|
|one|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|When the language requires special treatment of numbers like one (as with the number 1 in English and most other languages; in Russian, any number ending in 1 but not ending in 11 is in this class).|
|other|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|When the language does not require special treatment of the given quantity (as with all numbers in Chinese, or 42 in English).|
|two|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|When the language requires special treatment of numbers like two (as with 2 in Welsh, or 102 in Slovenian).|
|zero|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|When the language requires special treatment of the number 0 (as in Arabic).|

<h2 id="tocS_GamesNumberFormatConfiguration">GamesNumberFormatConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagamesnumberformatconfiguration"></a>
<a id="schema_GamesNumberFormatConfiguration"></a>
<a id="tocSgamesnumberformatconfiguration"></a>
<a id="tocsgamesnumberformatconfiguration"></a>

```json
{
  "currencyCode": "string",
  "numDecimalPlaces": 0,
  "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
  "suffix": {
    "few": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "many": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "one": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "other": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "two": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "zero": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    }
  }
}
```

A number format resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The curreny code string. Only used for CURRENCY format type.|
|numDecimalPlaces|integer(int32)|false|none|The number of decimal places for number. Only used for NUMERIC format type.|
|numberFormatType|string|false|none|The formatting for the number.|
|suffix|[GamesNumberAffixConfiguration](#schemagamesnumberaffixconfiguration)|false|none|An optional suffix for the NUMERIC format type. These strings follow the same plural rules as all Android string resources.|

#### Enumerated Values

|Property|Value|
|---|---|
|numberFormatType|NUMBER_FORMAT_TYPE_UNSPECIFIED|
|numberFormatType|NUMERIC|
|numberFormatType|TIME_DURATION|
|numberFormatType|CURRENCY|

<h2 id="tocS_LeaderboardConfiguration">LeaderboardConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardconfiguration"></a>
<a id="schema_LeaderboardConfiguration"></a>
<a id="tocSleaderboardconfiguration"></a>
<a id="tocsleaderboardconfiguration"></a>

```json
{
  "draft": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "id": "string",
  "kind": "string",
  "published": {
    "iconUrl": "string",
    "kind": "string",
    "name": {
      "kind": "string",
      "translations": [
        {
          "kind": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    },
    "scoreFormat": {
      "currencyCode": "string",
      "numDecimalPlaces": 0,
      "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
      "suffix": {
        "few": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "many": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "one": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "other": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "two": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "zero": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      }
    },
    "sortRank": 0
  },
  "scoreMax": "string",
  "scoreMin": "string",
  "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
  "token": "string"
}
```

An leaderboard configuration resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|draft|[LeaderboardConfigurationDetail](#schemaleaderboardconfigurationdetail)|false|none|The draft data of the leaderboard.|
|id|string|false|none|The ID of the leaderboard.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.|
|published|[LeaderboardConfigurationDetail](#schemaleaderboardconfigurationdetail)|false|none|The read-only published data of the leaderboard.|
|scoreMax|string(int64)|false|none|Maximum score that can be posted to this leaderboard.|
|scoreMin|string(int64)|false|none|Minimum score that can be posted to this leaderboard.|
|scoreOrder|string|false|none|none|
|token|string|false|none|The token for this resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|scoreOrder|SCORE_ORDER_UNSPECIFIED|
|scoreOrder|LARGER_IS_BETTER|
|scoreOrder|SMALLER_IS_BETTER|

<h2 id="tocS_LeaderboardConfigurationDetail">LeaderboardConfigurationDetail</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardconfigurationdetail"></a>
<a id="schema_LeaderboardConfigurationDetail"></a>
<a id="tocSleaderboardconfigurationdetail"></a>
<a id="tocsleaderboardconfigurationdetail"></a>

```json
{
  "iconUrl": "string",
  "kind": "string",
  "name": {
    "kind": "string",
    "translations": [
      {
        "kind": "string",
        "locale": "string",
        "value": "string"
      }
    ]
  },
  "scoreFormat": {
    "currencyCode": "string",
    "numDecimalPlaces": 0,
    "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
    "suffix": {
      "few": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "many": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "one": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "other": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "two": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      },
      "zero": {
        "kind": "string",
        "translations": [
          {
            "kind": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      }
    }
  },
  "sortRank": 0
}
```

A leaderboard configuration detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconUrl|string|false|none|The icon url of this leaderboard. Writes to this field are ignored.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`.|
|name|[LocalizedStringBundle](#schemalocalizedstringbundle)|false|none|Localized strings for the leaderboard name.|
|scoreFormat|[GamesNumberFormatConfiguration](#schemagamesnumberformatconfiguration)|false|none|The score formatting for the leaderboard.|
|sortRank|integer(int32)|false|none|The sort rank of this leaderboard. Writes to this field are ignored.|

<h2 id="tocS_LeaderboardConfigurationListResponse">LeaderboardConfigurationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaleaderboardconfigurationlistresponse"></a>
<a id="schema_LeaderboardConfigurationListResponse"></a>
<a id="tocSleaderboardconfigurationlistresponse"></a>
<a id="tocsleaderboardconfigurationlistresponse"></a>

```json
{
  "items": [
    {
      "draft": {
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "scoreFormat": {
          "currencyCode": "string",
          "numDecimalPlaces": 0,
          "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
          "suffix": {
            "few": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "many": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "one": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "other": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "two": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "zero": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            }
          }
        },
        "sortRank": 0
      },
      "id": "string",
      "kind": "string",
      "published": {
        "iconUrl": "string",
        "kind": "string",
        "name": {
          "kind": "string",
          "translations": [
            {
              "kind": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        },
        "scoreFormat": {
          "currencyCode": "string",
          "numDecimalPlaces": 0,
          "numberFormatType": "NUMBER_FORMAT_TYPE_UNSPECIFIED",
          "suffix": {
            "few": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "many": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "one": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "other": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "two": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            },
            "zero": {
              "kind": "string",
              "translations": [
                {
                  "kind": "string",
                  "locale": "string",
                  "value": "string"
                }
              ]
            }
          }
        },
        "sortRank": 0
      },
      "scoreMax": "string",
      "scoreMin": "string",
      "scoreOrder": "SCORE_ORDER_UNSPECIFIED",
      "token": "string"
    }
  ],
  "kind": "string",
  "nextPageToken": "string"
}
```

A ListConfigurations response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[LeaderboardConfiguration](#schemaleaderboardconfiguration)]|false|none|The leaderboard configurations.|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`.|
|nextPageToken|string|false|none|The pagination token for the next page of results.|

<h2 id="tocS_LocalizedString">LocalizedString</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedstring"></a>
<a id="schema_LocalizedString"></a>
<a id="tocSlocalizedstring"></a>
<a id="tocslocalizedstring"></a>

```json
{
  "kind": "string",
  "locale": "string",
  "value": "string"
}
```

A localized string resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`.|
|locale|string|false|none|The locale string.|
|value|string|false|none|The string value.|

<h2 id="tocS_LocalizedStringBundle">LocalizedStringBundle</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedstringbundle"></a>
<a id="schema_LocalizedStringBundle"></a>
<a id="tocSlocalizedstringbundle"></a>
<a id="tocslocalizedstringbundle"></a>

```json
{
  "kind": "string",
  "translations": [
    {
      "kind": "string",
      "locale": "string",
      "value": "string"
    }
  ]
}
```

A localized string bundle resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`.|
|translations|[[LocalizedString](#schemalocalizedstring)]|false|none|The locale strings.|
