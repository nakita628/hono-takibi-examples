<h1 id="youtube-data-api-v3">YouTube Data API v3 v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.

Base URLs:

* <a href="https://youtube.googleapis.com/">https://youtube.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/youtube/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/youtube|Manage your YouTube account|
|https://www.googleapis.com/auth/youtube.channel-memberships.creator|See a list of your current active channel members, their current level, and when they became a member|
|https://www.googleapis.com/auth/youtube.force-ssl|See, edit, and permanently delete your YouTube videos, ratings, comments and captions|
|https://www.googleapis.com/auth/youtube.readonly|View your YouTube account|
|https://www.googleapis.com/auth/youtube.upload|Manage your YouTube videos|
|https://www.googleapis.com/auth/youtubepartner|View and manage your assets and associated content on YouTube|
|https://www.googleapis.com/auth/youtubepartner-channel-audit|View private information of your YouTube channel relevant during the audit process with a YouTube partner|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/youtube|Manage your YouTube account|
|https://www.googleapis.com/auth/youtube.channel-memberships.creator|See a list of your current active channel members, their current level, and when they became a member|
|https://www.googleapis.com/auth/youtube.force-ssl|See, edit, and permanently delete your YouTube videos, ratings, comments and captions|
|https://www.googleapis.com/auth/youtube.readonly|View your YouTube account|
|https://www.googleapis.com/auth/youtube.upload|Manage your YouTube videos|
|https://www.googleapis.com/auth/youtubepartner|View and manage your assets and associated content on YouTube|
|https://www.googleapis.com/auth/youtubepartner-channel-audit|View private information of your YouTube channel relevant during the audit process with a YouTube partner|

<h1 id="youtube-data-api-v3-abusereports">abuseReports</h1>

## youtube.abuseReports.insert

<a id="opIdyoutube.abuseReports.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/abuseReports?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "abuseTypes": [
      {
        "id": "string"
      }
    ],
    "description": "string",
    "relatedEntities": [
      {
        "entity": {
          "id": "string",
          "typeId": "string",
          "url": "string"
        }
      }
    ],
    "subject": {
      "id": "string",
      "typeId": "string",
      "url": "string"
    }
  }'
```

`POST /youtube/v3/abuseReports`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "abuseTypes": [
    {
      "id": "string"
    }
  ],
  "description": "string",
  "relatedEntities": [
    {
      "entity": {
        "id": "string",
        "typeId": "string",
        "url": "string"
      }
    }
  ],
  "subject": {
    "id": "string",
    "typeId": "string",
    "url": "string"
  }
}
```

<h3 id="youtubeabusereportsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.|
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
|body|body|[AbuseReport](#schemaabusereport)|false|none|
|» abuseTypes|body|[[AbuseType](#schemaabusetype)]|false|none|
|» description|body|string|false|none|
|» relatedEntities|body|[[RelatedEntity](#schemarelatedentity)]|false|none|
|» subject|body|[Entity](#schemaentity)|false|none|

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
  "abuseTypes": [
    {
      "id": "string"
    }
  ],
  "description": "string",
  "relatedEntities": [
    {
      "entity": {
        "id": "string",
        "typeId": "string",
        "url": "string"
      }
    }
  ],
  "subject": {
    "id": "string",
    "typeId": "string",
    "url": "string"
  }
}
```

<h3 id="youtubeabusereportsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AbuseReport](#schemaabusereport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-activities">activities</h1>

## youtube.activities.list

<a id="opIdyoutube.activities.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/activities?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/activities`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubeactivitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.|
|channelId|query|string|false|none|
|home|query|boolean|false|none|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mine|query|boolean|false|none|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
|publishedAfter|query|string|false|none|
|publishedBefore|query|string|false|none|
|regionCode|query|string|false|none|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "bulletin": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "channelItem": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "comment": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "favorite": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "like": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "playlistItem": {
          "playlistId": "string",
          "playlistItemId": "string",
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "promotedItem": {
          "adTag": "string",
          "clickTrackingUrl": "string",
          "creativeViewUrl": "string",
          "ctaType": "ctaTypeUnspecified",
          "customCtaButtonText": "string",
          "descriptionText": "string",
          "destinationUrl": "string",
          "forecastingUrl": [
            "string"
          ],
          "impressionUrl": [
            "string"
          ],
          "videoId": "string"
        },
        "recommendation": {
          "reason": "reasonUnspecified",
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          },
          "seedResourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "social": {
          "author": "string",
          "imageUrl": "string",
          "referenceUrl": "string",
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          },
          "type": "unspecified"
        },
        "subscription": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "upload": {
          "videoId": "string"
        }
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#activity",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "groupId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string",
        "type": "typeUnspecified"
      }
    }
  ],
  "kind": "youtube#activityListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubeactivitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ActivityListResponse](#schemaactivitylistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

<h1 id="youtube-data-api-v3-captions">captions</h1>

## youtube.captions.list

<a id="opIdyoutube.captions.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/captions?part=string&videoId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/captions`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubecaptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.|
|videoId|query|string|true|Returns the captions for the specified video.|
|id|query|[string]|false|Returns the captions with the given IDs for Stubby or Apiary.|
|onBehalfOf|query|string|false|ID of the Google+ Page for the channel that the request is on behalf of.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#caption",
      "snippet": {
        "audioTrackType": "unknown",
        "failureReason": "unknownFormat",
        "isAutoSynced": true,
        "isCC": true,
        "isDraft": true,
        "isEasyReader": true,
        "isLarge": true,
        "language": "string",
        "lastUpdated": "1970-01-01T00:00:00Z",
        "name": "string",
        "status": "serving",
        "trackKind": "standard",
        "videoId": "string"
      }
    }
  ],
  "kind": "youtube#captionListResponse",
  "visitorId": "string"
}
```

<h3 id="youtubecaptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CaptionListResponse](#schemacaptionlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.captions.update

<a id="opIdyoutube.captions.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/captions?part=string' \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"etag":"string","id":"string","kind":"youtube#caption","snippet":{"audioTrackType":"unknown","failureReason":"unknownFormat","isAutoSynced":true,"isCC":true,"isDraft":true,"isEasyReader":true,"isLarge":true,"language":"string","lastUpdated":"1970-01-01T00:00:00Z","name":"string","status":"serving","trackKind":"standard","videoId":"string"}}'
```

`PUT /youtube/v3/captions`

Updates an existing resource.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#caption",
  "snippet": {
    "audioTrackType": "unknown",
    "failureReason": "unknownFormat",
    "isAutoSynced": true,
    "isCC": true,
    "isDraft": true,
    "isEasyReader": true,
    "isLarge": true,
    "language": "string",
    "lastUpdated": "1970-01-01T00:00:00Z",
    "name": "string",
    "status": "serving",
    "trackKind": "standard",
    "videoId": "string"
  }
}
```

<h3 id="youtubecaptionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.|
|onBehalfOf|query|string|false|ID of the Google+ Page for the channel that the request is on behalf of.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|sync|query|boolean|false|Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.|
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
|body|body|[Caption](#schemacaption)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the caption track.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#caption".|
|» snippet|body|[CaptionSnippet](#schemacaptionsnippet)|false|The snippet object contains basic details about the caption.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#caption",
  "snippet": {
    "audioTrackType": "unknown",
    "failureReason": "unknownFormat",
    "isAutoSynced": true,
    "isCC": true,
    "isDraft": true,
    "isEasyReader": true,
    "isLarge": true,
    "language": "string",
    "lastUpdated": "1970-01-01T00:00:00Z",
    "name": "string",
    "status": "serving",
    "trackKind": "standard",
    "videoId": "string"
  }
}
```

<h3 id="youtubecaptionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Caption](#schemacaption)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.captions.insert

<a id="opIdyoutube.captions.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/captions?part=string' \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"etag":"string","id":"string","kind":"youtube#caption","snippet":{"audioTrackType":"unknown","failureReason":"unknownFormat","isAutoSynced":true,"isCC":true,"isDraft":true,"isEasyReader":true,"isLarge":true,"language":"string","lastUpdated":"1970-01-01T00:00:00Z","name":"string","status":"serving","trackKind":"standard","videoId":"string"}}'
```

`POST /youtube/v3/captions`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#caption",
  "snippet": {
    "audioTrackType": "unknown",
    "failureReason": "unknownFormat",
    "isAutoSynced": true,
    "isCC": true,
    "isDraft": true,
    "isEasyReader": true,
    "isLarge": true,
    "language": "string",
    "lastUpdated": "1970-01-01T00:00:00Z",
    "name": "string",
    "status": "serving",
    "trackKind": "standard",
    "videoId": "string"
  }
}
```

<h3 id="youtubecaptionsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.|
|onBehalfOf|query|string|false|ID of the Google+ Page for the channel that the request is be on behalf of|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|sync|query|boolean|false|Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.|
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
|body|body|[Caption](#schemacaption)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the caption track.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#caption".|
|» snippet|body|[CaptionSnippet](#schemacaptionsnippet)|false|The snippet object contains basic details about the caption.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#caption",
  "snippet": {
    "audioTrackType": "unknown",
    "failureReason": "unknownFormat",
    "isAutoSynced": true,
    "isCC": true,
    "isDraft": true,
    "isEasyReader": true,
    "isLarge": true,
    "language": "string",
    "lastUpdated": "1970-01-01T00:00:00Z",
    "name": "string",
    "status": "serving",
    "trackKind": "standard",
    "videoId": "string"
  }
}
```

<h3 id="youtubecaptionsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Caption](#schemacaption)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.captions.delete

<a id="opIdyoutube.captions.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/captions?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/captions`

Deletes a resource.

<h3 id="youtubecaptionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|onBehalfOf|query|string|false|ID of the Google+ Page for the channel that the request is be on behalf of|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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

<h3 id="youtubecaptionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.captions.download

<a id="opIdyoutube.captions.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/youtube/v3/captions/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/captions/{id}`

Downloads a caption track.

<h3 id="youtubecaptionsdownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the caption track to download, required for One Platform.|
|onBehalfOf|query|string|false|ID of the Google+ Page for the channel that the request is be on behalf of|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|tfmt|query|string|false|Convert the captions into this format. Supported options are sbv, srt, and vtt.|
|tlang|query|string|false|tlang is the language code; machine translate the captions into this language.|
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

<h3 id="youtubecaptionsdownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-channelbanners">channelBanners</h1>

## youtube.channelBanners.insert

<a id="opIdyoutube.channelBanners.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/youtube/v3/channelBanners/insert \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"etag":"string","kind":"youtube#channelBannerResource","url":"string"}'
```

`POST /youtube/v3/channelBanners/insert`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "kind": "youtube#channelBannerResource",
  "url": "string"
}
```

<h3 id="youtubechannelbannersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|query|string|false|Unused, channel_id is currently derived from the security context of the requestor.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[ChannelBannerResource](#schemachannelbannerresource)|false|none|
|» etag|body|string|false|none|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".|
|» url|body|string|false|The URL of this banner image.|

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
  "etag": "string",
  "kind": "youtube#channelBannerResource",
  "url": "string"
}
```

<h3 id="youtubechannelbannersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChannelBannerResource](#schemachannelbannerresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.upload ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.upload )
</aside>

<h1 id="youtube-data-api-v3-channels">channels</h1>

## youtube.channels.list

<a id="opIdyoutube.channels.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/channels?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/channels`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubechannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.|
|categoryId|query|string|false|Return the channels within the specified guide category ID.|
|forUsername|query|string|false|Return the channel associated with a YouTube username.|
|hl|query|string|false|Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).|
|id|query|[string]|false|Return the channels with the specified IDs.|
|managedByMe|query|boolean|false|Return the channels managed by the authenticated user.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mine|query|boolean|false|Return the ids of channels owned by the authenticated user.|
|mySubscribers|query|boolean|false|Return the channels subscribed to the authenticated user|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "auditDetails": {
        "communityGuidelinesGoodStanding": true,
        "contentIdClaimsGoodStanding": true,
        "copyrightStrikesGoodStanding": true
      },
      "brandingSettings": {
        "channel": {
          "country": "string",
          "defaultLanguage": "string",
          "defaultTab": "string",
          "description": "string",
          "featuredChannelsTitle": "string",
          "featuredChannelsUrls": [
            "string"
          ],
          "keywords": "string",
          "moderateComments": true,
          "profileColor": "string",
          "showBrowseView": true,
          "showRelatedChannels": true,
          "title": "string",
          "trackingAnalyticsAccountId": "string",
          "unsubscribedTrailer": "string"
        },
        "hints": [
          {
            "property": "string",
            "value": "string"
          }
        ],
        "image": {
          "backgroundImageUrl": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "bannerExternalUrl": "string",
          "bannerImageUrl": "string",
          "bannerMobileExtraHdImageUrl": "string",
          "bannerMobileHdImageUrl": "string",
          "bannerMobileImageUrl": "string",
          "bannerMobileLowImageUrl": "string",
          "bannerMobileMediumHdImageUrl": "string",
          "bannerTabletExtraHdImageUrl": "string",
          "bannerTabletHdImageUrl": "string",
          "bannerTabletImageUrl": "string",
          "bannerTabletLowImageUrl": "string",
          "bannerTvHighImageUrl": "string",
          "bannerTvImageUrl": "string",
          "bannerTvLowImageUrl": "string",
          "bannerTvMediumImageUrl": "string",
          "largeBrandedBannerImageImapScript": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "largeBrandedBannerImageUrl": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "smallBrandedBannerImageImapScript": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "smallBrandedBannerImageUrl": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "trackingImageUrl": "string",
          "watchIconImageUrl": "string"
        },
        "watch": {
          "backgroundColor": "string",
          "featuredPlaylistId": "string",
          "textColor": "string"
        }
      },
      "contentDetails": {
        "relatedPlaylists": {
          "favorites": "string",
          "likes": "string",
          "uploads": "string",
          "watchHistory": "string",
          "watchLater": "string"
        }
      },
      "contentOwnerDetails": {
        "contentOwner": "string",
        "timeLinked": "1970-01-01T00:00:00Z"
      },
      "conversionPings": {
        "pings": [
          {
            "context": "subscribe",
            "conversionUrl": "string"
          }
        ]
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#channel",
      "localizations": {
        "property1": {
          "description": "string",
          "title": "string"
        },
        "property2": {
          "description": "string",
          "title": "string"
        }
      },
      "snippet": {
        "country": "string",
        "customUrl": "string",
        "defaultLanguage": "string",
        "description": "string",
        "localized": {
          "description": "string",
          "title": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "statistics": {
        "commentCount": "string",
        "hiddenSubscriberCount": true,
        "subscriberCount": "string",
        "videoCount": "string",
        "viewCount": "string"
      },
      "status": {
        "isLinked": true,
        "longUploadsStatus": "longUploadsUnspecified",
        "madeForKids": true,
        "privacyStatus": "public",
        "selfDeclaredMadeForKids": true
      },
      "topicDetails": {
        "topicCategories": [
          "string"
        ],
        "topicIds": [
          "string"
        ]
      }
    }
  ],
  "kind": "youtube#channelListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubechannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChannelListResponse](#schemachannellistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner-channel-audit ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner-channel-audit )
</aside>

## youtube.channels.update

<a id="opIdyoutube.channels.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/channels?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "auditDetails": {
      "communityGuidelinesGoodStanding": true,
      "contentIdClaimsGoodStanding": true,
      "copyrightStrikesGoodStanding": true
    },
    "brandingSettings": {
      "channel": {
        "country": "string",
        "defaultLanguage": "string",
        "defaultTab": "string",
        "description": "string",
        "featuredChannelsTitle": "string",
        "featuredChannelsUrls": [
          "string"
        ],
        "keywords": "string",
        "moderateComments": true,
        "profileColor": "string",
        "showBrowseView": true,
        "showRelatedChannels": true,
        "title": "string",
        "trackingAnalyticsAccountId": "string",
        "unsubscribedTrailer": "string"
      },
      "hints": [
        {
          "property": "string",
          "value": "string"
        }
      ],
      "image": {
        "backgroundImageUrl": {
          "defaultLanguage": {
            "value": "string"
          },
          "localized": [
            {
              "language": "string",
              "value": "string"
            }
          ]
        },
        "bannerExternalUrl": "string",
        "bannerImageUrl": "string",
        "bannerMobileExtraHdImageUrl": "string",
        "bannerMobileHdImageUrl": "string",
        "bannerMobileImageUrl": "string",
        "bannerMobileLowImageUrl": "string",
        "bannerMobileMediumHdImageUrl": "string",
        "bannerTabletExtraHdImageUrl": "string",
        "bannerTabletHdImageUrl": "string",
        "bannerTabletImageUrl": "string",
        "bannerTabletLowImageUrl": "string",
        "bannerTvHighImageUrl": "string",
        "bannerTvImageUrl": "string",
        "bannerTvLowImageUrl": "string",
        "bannerTvMediumImageUrl": "string",
        "largeBrandedBannerImageImapScript": {
          "defaultLanguage": {
            "value": "string"
          },
          "localized": [
            {
              "language": "string",
              "value": "string"
            }
          ]
        },
        "largeBrandedBannerImageUrl": {
          "defaultLanguage": {
            "value": "string"
          },
          "localized": [
            {
              "language": "string",
              "value": "string"
            }
          ]
        },
        "smallBrandedBannerImageImapScript": {
          "defaultLanguage": {
            "value": "string"
          },
          "localized": [
            {
              "language": "string",
              "value": "string"
            }
          ]
        },
        "smallBrandedBannerImageUrl": {
          "defaultLanguage": {
            "value": "string"
          },
          "localized": [
            {
              "language": "string",
              "value": "string"
            }
          ]
        },
        "trackingImageUrl": "string",
        "watchIconImageUrl": "string"
      },
      "watch": {
        "backgroundColor": "string",
        "featuredPlaylistId": "string",
        "textColor": "string"
      }
    },
    "contentDetails": {
      "relatedPlaylists": {
        "favorites": "string",
        "likes": "string",
        "uploads": "string",
        "watchHistory": "string",
        "watchLater": "string"
      }
    },
    "contentOwnerDetails": {
      "contentOwner": "string",
      "timeLinked": "1970-01-01T00:00:00Z"
    },
    "conversionPings": {
      "pings": [
        {
          "context": "subscribe",
          "conversionUrl": "string"
        }
      ]
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#channel",
    "localizations": {
      "property1": {
        "description": "string",
        "title": "string"
      },
      "property2": {
        "description": "string",
        "title": "string"
      }
    },
    "snippet": {
      "country": "string",
      "customUrl": "string",
      "defaultLanguage": "string",
      "description": "string",
      "localized": {
        "description": "string",
        "title": "string"
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "statistics": {
      "commentCount": "string",
      "hiddenSubscriberCount": true,
      "subscriberCount": "string",
      "videoCount": "string",
      "viewCount": "string"
    },
    "status": {
      "isLinked": true,
      "longUploadsStatus": "longUploadsUnspecified",
      "madeForKids": true,
      "privacyStatus": "public",
      "selfDeclaredMadeForKids": true
    },
    "topicDetails": {
      "topicCategories": [
        "string"
      ],
      "topicIds": [
        "string"
      ]
    }
  }'
```

`PUT /youtube/v3/channels`

Updates an existing resource.

> Body parameter

```json
{
  "auditDetails": {
    "communityGuidelinesGoodStanding": true,
    "contentIdClaimsGoodStanding": true,
    "copyrightStrikesGoodStanding": true
  },
  "brandingSettings": {
    "channel": {
      "country": "string",
      "defaultLanguage": "string",
      "defaultTab": "string",
      "description": "string",
      "featuredChannelsTitle": "string",
      "featuredChannelsUrls": [
        "string"
      ],
      "keywords": "string",
      "moderateComments": true,
      "profileColor": "string",
      "showBrowseView": true,
      "showRelatedChannels": true,
      "title": "string",
      "trackingAnalyticsAccountId": "string",
      "unsubscribedTrailer": "string"
    },
    "hints": [
      {
        "property": "string",
        "value": "string"
      }
    ],
    "image": {
      "backgroundImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "bannerExternalUrl": "string",
      "bannerImageUrl": "string",
      "bannerMobileExtraHdImageUrl": "string",
      "bannerMobileHdImageUrl": "string",
      "bannerMobileImageUrl": "string",
      "bannerMobileLowImageUrl": "string",
      "bannerMobileMediumHdImageUrl": "string",
      "bannerTabletExtraHdImageUrl": "string",
      "bannerTabletHdImageUrl": "string",
      "bannerTabletImageUrl": "string",
      "bannerTabletLowImageUrl": "string",
      "bannerTvHighImageUrl": "string",
      "bannerTvImageUrl": "string",
      "bannerTvLowImageUrl": "string",
      "bannerTvMediumImageUrl": "string",
      "largeBrandedBannerImageImapScript": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "largeBrandedBannerImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "smallBrandedBannerImageImapScript": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "smallBrandedBannerImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "trackingImageUrl": "string",
      "watchIconImageUrl": "string"
    },
    "watch": {
      "backgroundColor": "string",
      "featuredPlaylistId": "string",
      "textColor": "string"
    }
  },
  "contentDetails": {
    "relatedPlaylists": {
      "favorites": "string",
      "likes": "string",
      "uploads": "string",
      "watchHistory": "string",
      "watchLater": "string"
    }
  },
  "contentOwnerDetails": {
    "contentOwner": "string",
    "timeLinked": "1970-01-01T00:00:00Z"
  },
  "conversionPings": {
    "pings": [
      {
        "context": "subscribe",
        "conversionUrl": "string"
      }
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channel",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "snippet": {
    "country": "string",
    "customUrl": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "hiddenSubscriberCount": true,
    "subscriberCount": "string",
    "videoCount": "string",
    "viewCount": "string"
  },
  "status": {
    "isLinked": true,
    "longUploadsStatus": "longUploadsUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "selfDeclaredMadeForKids": true
  },
  "topicDetails": {
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

<h3 id="youtubechannelsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.|
|onBehalfOfContentOwner|query|string|false|The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.|
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
|body|body|[Channel](#schemachannel)|false|none|
|» auditDetails|body|[ChannelAuditDetails](#schemachannelauditdetails)|false|The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.|
|» brandingSettings|body|[ChannelBrandingSettings](#schemachannelbrandingsettings)|false|The brandingSettings object encapsulates information about the branding of the channel.|
|» contentDetails|body|[ChannelContentDetails](#schemachannelcontentdetails)|false|The contentDetails object encapsulates information about the channel's content.|
|» contentOwnerDetails|body|[ChannelContentOwnerDetails](#schemachannelcontentownerdetails)|false|The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.|
|» conversionPings|body|[ChannelConversionPings](#schemachannelconversionpings)|false|The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the channel.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#channel".|
|» localizations|body|object|false|Localizations for different languages|
|» » **additionalProperties**|body|[ChannelLocalization](#schemachannellocalization)|false|Channel localization setting|
|» snippet|body|[ChannelSnippet](#schemachannelsnippet)|false|The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.|
|» statistics|body|[ChannelStatistics](#schemachannelstatistics)|false|The statistics object encapsulates statistics for the channel.|
|» status|body|[ChannelStatus](#schemachannelstatus)|false|The status object encapsulates information about the privacy status of the channel.|
|» topicDetails|body|[ChannelTopicDetails](#schemachanneltopicdetails)|false|The topicDetails object encapsulates information about Freebase topics associated with the channel.|

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
  "auditDetails": {
    "communityGuidelinesGoodStanding": true,
    "contentIdClaimsGoodStanding": true,
    "copyrightStrikesGoodStanding": true
  },
  "brandingSettings": {
    "channel": {
      "country": "string",
      "defaultLanguage": "string",
      "defaultTab": "string",
      "description": "string",
      "featuredChannelsTitle": "string",
      "featuredChannelsUrls": [
        "string"
      ],
      "keywords": "string",
      "moderateComments": true,
      "profileColor": "string",
      "showBrowseView": true,
      "showRelatedChannels": true,
      "title": "string",
      "trackingAnalyticsAccountId": "string",
      "unsubscribedTrailer": "string"
    },
    "hints": [
      {
        "property": "string",
        "value": "string"
      }
    ],
    "image": {
      "backgroundImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "bannerExternalUrl": "string",
      "bannerImageUrl": "string",
      "bannerMobileExtraHdImageUrl": "string",
      "bannerMobileHdImageUrl": "string",
      "bannerMobileImageUrl": "string",
      "bannerMobileLowImageUrl": "string",
      "bannerMobileMediumHdImageUrl": "string",
      "bannerTabletExtraHdImageUrl": "string",
      "bannerTabletHdImageUrl": "string",
      "bannerTabletImageUrl": "string",
      "bannerTabletLowImageUrl": "string",
      "bannerTvHighImageUrl": "string",
      "bannerTvImageUrl": "string",
      "bannerTvLowImageUrl": "string",
      "bannerTvMediumImageUrl": "string",
      "largeBrandedBannerImageImapScript": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "largeBrandedBannerImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "smallBrandedBannerImageImapScript": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "smallBrandedBannerImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "trackingImageUrl": "string",
      "watchIconImageUrl": "string"
    },
    "watch": {
      "backgroundColor": "string",
      "featuredPlaylistId": "string",
      "textColor": "string"
    }
  },
  "contentDetails": {
    "relatedPlaylists": {
      "favorites": "string",
      "likes": "string",
      "uploads": "string",
      "watchHistory": "string",
      "watchLater": "string"
    }
  },
  "contentOwnerDetails": {
    "contentOwner": "string",
    "timeLinked": "1970-01-01T00:00:00Z"
  },
  "conversionPings": {
    "pings": [
      {
        "context": "subscribe",
        "conversionUrl": "string"
      }
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channel",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "snippet": {
    "country": "string",
    "customUrl": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "hiddenSubscriberCount": true,
    "subscriberCount": "string",
    "videoCount": "string",
    "viewCount": "string"
  },
  "status": {
    "isLinked": true,
    "longUploadsStatus": "longUploadsUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "selfDeclaredMadeForKids": true
  },
  "topicDetails": {
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

<h3 id="youtubechannelsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-channelsections">channelSections</h1>

## youtube.channelSections.list

<a id="opIdyoutube.channelSections.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/channelSections?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/channelSections`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubechannelsectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.|
|channelId|query|string|false|Return the ChannelSections owned by the specified channel ID.|
|hl|query|string|false|Return content in specified language|
|id|query|[string]|false|Return the ChannelSections with the given IDs for Stubby or Apiary.|
|mine|query|boolean|false|Return the ChannelSections owned by the authenticated user.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "channels": [
          "string"
        ],
        "playlists": [
          "string"
        ]
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#channelSection",
      "localizations": {
        "property1": {
          "title": "string"
        },
        "property2": {
          "title": "string"
        }
      },
      "snippet": {
        "channelId": "string",
        "defaultLanguage": "string",
        "localized": {
          "title": "string"
        },
        "position": 0,
        "style": "channelsectionStyleUnspecified",
        "title": "string",
        "type": "channelsectionTypeUndefined"
      },
      "targeting": {
        "countries": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "regions": [
          "string"
        ]
      }
    }
  ],
  "kind": "youtube#channelSectionListResponse",
  "visitorId": "string"
}
```

<h3 id="youtubechannelsectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChannelSectionListResponse](#schemachannelsectionlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.channelSections.update

<a id="opIdyoutube.channelSections.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/channelSections?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "channels": [
        "string"
      ],
      "playlists": [
        "string"
      ]
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#channelSection",
    "localizations": {
      "property1": {
        "title": "string"
      },
      "property2": {
        "title": "string"
      }
    },
    "snippet": {
      "channelId": "string",
      "defaultLanguage": "string",
      "localized": {
        "title": "string"
      },
      "position": 0,
      "style": "channelsectionStyleUnspecified",
      "title": "string",
      "type": "channelsectionTypeUndefined"
    },
    "targeting": {
      "countries": [
        "string"
      ],
      "languages": [
        "string"
      ],
      "regions": [
        "string"
      ]
    }
  }'
```

`PUT /youtube/v3/channelSections`

Updates an existing resource.

> Body parameter

```json
{
  "contentDetails": {
    "channels": [
      "string"
    ],
    "playlists": [
      "string"
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channelSection",
  "localizations": {
    "property1": {
      "title": "string"
    },
    "property2": {
      "title": "string"
    }
  },
  "snippet": {
    "channelId": "string",
    "defaultLanguage": "string",
    "localized": {
      "title": "string"
    },
    "position": 0,
    "style": "channelsectionStyleUnspecified",
    "title": "string",
    "type": "channelsectionTypeUndefined"
  },
  "targeting": {
    "countries": [
      "string"
    ],
    "languages": [
      "string"
    ],
    "regions": [
      "string"
    ]
  }
}
```

<h3 id="youtubechannelsectionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[ChannelSection](#schemachannelsection)|false|none|
|» contentDetails|body|[ChannelSectionContentDetails](#schemachannelsectioncontentdetails)|false|The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the channel section.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".|
|» localizations|body|object|false|Localizations for different languages|
|» » **additionalProperties**|body|[ChannelSectionLocalization](#schemachannelsectionlocalization)|false|ChannelSection localization setting|
|» snippet|body|[ChannelSectionSnippet](#schemachannelsectionsnippet)|false|The snippet object contains basic details about the channel section, such as its type, style and title.|
|» targeting|body|[ChannelSectionTargeting](#schemachannelsectiontargeting)|false|The targeting object contains basic targeting settings about the channel section.|

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
  "contentDetails": {
    "channels": [
      "string"
    ],
    "playlists": [
      "string"
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channelSection",
  "localizations": {
    "property1": {
      "title": "string"
    },
    "property2": {
      "title": "string"
    }
  },
  "snippet": {
    "channelId": "string",
    "defaultLanguage": "string",
    "localized": {
      "title": "string"
    },
    "position": 0,
    "style": "channelsectionStyleUnspecified",
    "title": "string",
    "type": "channelsectionTypeUndefined"
  },
  "targeting": {
    "countries": [
      "string"
    ],
    "languages": [
      "string"
    ],
    "regions": [
      "string"
    ]
  }
}
```

<h3 id="youtubechannelsectionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChannelSection](#schemachannelsection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.channelSections.insert

<a id="opIdyoutube.channelSections.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/channelSections?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "channels": [
        "string"
      ],
      "playlists": [
        "string"
      ]
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#channelSection",
    "localizations": {
      "property1": {
        "title": "string"
      },
      "property2": {
        "title": "string"
      }
    },
    "snippet": {
      "channelId": "string",
      "defaultLanguage": "string",
      "localized": {
        "title": "string"
      },
      "position": 0,
      "style": "channelsectionStyleUnspecified",
      "title": "string",
      "type": "channelsectionTypeUndefined"
    },
    "targeting": {
      "countries": [
        "string"
      ],
      "languages": [
        "string"
      ],
      "regions": [
        "string"
      ]
    }
  }'
```

`POST /youtube/v3/channelSections`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "contentDetails": {
    "channels": [
      "string"
    ],
    "playlists": [
      "string"
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channelSection",
  "localizations": {
    "property1": {
      "title": "string"
    },
    "property2": {
      "title": "string"
    }
  },
  "snippet": {
    "channelId": "string",
    "defaultLanguage": "string",
    "localized": {
      "title": "string"
    },
    "position": 0,
    "style": "channelsectionStyleUnspecified",
    "title": "string",
    "type": "channelsectionTypeUndefined"
  },
  "targeting": {
    "countries": [
      "string"
    ],
    "languages": [
      "string"
    ],
    "regions": [
      "string"
    ]
  }
}
```

<h3 id="youtubechannelsectionsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[ChannelSection](#schemachannelsection)|false|none|
|» contentDetails|body|[ChannelSectionContentDetails](#schemachannelsectioncontentdetails)|false|The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the channel section.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".|
|» localizations|body|object|false|Localizations for different languages|
|» » **additionalProperties**|body|[ChannelSectionLocalization](#schemachannelsectionlocalization)|false|ChannelSection localization setting|
|» snippet|body|[ChannelSectionSnippet](#schemachannelsectionsnippet)|false|The snippet object contains basic details about the channel section, such as its type, style and title.|
|» targeting|body|[ChannelSectionTargeting](#schemachannelsectiontargeting)|false|The targeting object contains basic targeting settings about the channel section.|

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
  "contentDetails": {
    "channels": [
      "string"
    ],
    "playlists": [
      "string"
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channelSection",
  "localizations": {
    "property1": {
      "title": "string"
    },
    "property2": {
      "title": "string"
    }
  },
  "snippet": {
    "channelId": "string",
    "defaultLanguage": "string",
    "localized": {
      "title": "string"
    },
    "position": 0,
    "style": "channelsectionStyleUnspecified",
    "title": "string",
    "type": "channelsectionTypeUndefined"
  },
  "targeting": {
    "countries": [
      "string"
    ],
    "languages": [
      "string"
    ],
    "regions": [
      "string"
    ]
  }
}
```

<h3 id="youtubechannelsectionsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ChannelSection](#schemachannelsection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.channelSections.delete

<a id="opIdyoutube.channelSections.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/channelSections?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/channelSections`

Deletes a resource.

<h3 id="youtubechannelsectionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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

<h3 id="youtubechannelsectionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-comments">comments</h1>

## youtube.comments.list

<a id="opIdyoutube.comments.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/comments?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/comments`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubecommentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.|
|id|query|[string]|false|Returns the comments with the given IDs for One Platform.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
|parentId|query|string|false|Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.|
|textFormat|query|string|false|The requested text format for the returned comments.|
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
|textFormat|textFormatUnspecified|
|textFormat|html|
|textFormat|plainText|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    }
  ],
  "kind": "youtube#commentListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubecommentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentListResponse](#schemacommentlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.comments.update

<a id="opIdyoutube.comments.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/comments?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "youtube#comment",
    "snippet": {
      "authorChannelId": {
        "value": "string"
      },
      "authorChannelUrl": "string",
      "authorDisplayName": "string",
      "authorProfileImageUrl": "string",
      "canRate": true,
      "channelId": "string",
      "likeCount": 0,
      "moderationStatus": "published",
      "parentId": "string",
      "publishedAt": "1970-01-01T00:00:00Z",
      "textDisplay": "string",
      "textOriginal": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "videoId": "string",
      "viewerRating": "none"
    }
  }'
```

`PUT /youtube/v3/comments`

Updates an existing resource.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#comment",
  "snippet": {
    "authorChannelId": {
      "value": "string"
    },
    "authorChannelUrl": "string",
    "authorDisplayName": "string",
    "authorProfileImageUrl": "string",
    "canRate": true,
    "channelId": "string",
    "likeCount": 0,
    "moderationStatus": "published",
    "parentId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "textDisplay": "string",
    "textOriginal": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "videoId": "string",
    "viewerRating": "none"
  }
}
```

<h3 id="youtubecommentsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.|
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
|body|body|[Comment](#schemacomment)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the comment.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#comment".|
|» snippet|body|[CommentSnippet](#schemacommentsnippet)|false|The snippet object contains basic details about the comment.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#comment",
  "snippet": {
    "authorChannelId": {
      "value": "string"
    },
    "authorChannelUrl": "string",
    "authorDisplayName": "string",
    "authorProfileImageUrl": "string",
    "canRate": true,
    "channelId": "string",
    "likeCount": 0,
    "moderationStatus": "published",
    "parentId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "textDisplay": "string",
    "textOriginal": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "videoId": "string",
    "viewerRating": "none"
  }
}
```

<h3 id="youtubecommentsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.comments.insert

<a id="opIdyoutube.comments.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/comments?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "youtube#comment",
    "snippet": {
      "authorChannelId": {
        "value": "string"
      },
      "authorChannelUrl": "string",
      "authorDisplayName": "string",
      "authorProfileImageUrl": "string",
      "canRate": true,
      "channelId": "string",
      "likeCount": 0,
      "moderationStatus": "published",
      "parentId": "string",
      "publishedAt": "1970-01-01T00:00:00Z",
      "textDisplay": "string",
      "textOriginal": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "videoId": "string",
      "viewerRating": "none"
    }
  }'
```

`POST /youtube/v3/comments`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#comment",
  "snippet": {
    "authorChannelId": {
      "value": "string"
    },
    "authorChannelUrl": "string",
    "authorDisplayName": "string",
    "authorProfileImageUrl": "string",
    "canRate": true,
    "channelId": "string",
    "likeCount": 0,
    "moderationStatus": "published",
    "parentId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "textDisplay": "string",
    "textOriginal": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "videoId": "string",
    "viewerRating": "none"
  }
}
```

<h3 id="youtubecommentsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.|
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
|body|body|[Comment](#schemacomment)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the comment.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#comment".|
|» snippet|body|[CommentSnippet](#schemacommentsnippet)|false|The snippet object contains basic details about the comment.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#comment",
  "snippet": {
    "authorChannelId": {
      "value": "string"
    },
    "authorChannelUrl": "string",
    "authorDisplayName": "string",
    "authorProfileImageUrl": "string",
    "canRate": true,
    "channelId": "string",
    "likeCount": 0,
    "moderationStatus": "published",
    "parentId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "textDisplay": "string",
    "textOriginal": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "videoId": "string",
    "viewerRating": "none"
  }
}
```

<h3 id="youtubecommentsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.comments.delete

<a id="opIdyoutube.comments.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/comments?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/comments`

Deletes a resource.

<h3 id="youtubecommentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
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

<h3 id="youtubecommentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.comments.markAsSpam

<a id="opIdyoutube.comments.markAsSpam"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/comments/markAsSpam?id=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/comments/markAsSpam`

Expresses the caller's opinion that one or more comments should be flagged as spam.

<h3 id="youtubecommentsmarkasspam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|Flags the comments with the given IDs as spam in the caller's opinion.|
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

<h3 id="youtubecommentsmarkasspam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.comments.setModerationStatus

<a id="opIdyoutube.comments.setModerationStatus"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/comments/setModerationStatus?id=string&moderationStatus=published' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/comments/setModerationStatus`

Sets the moderation status of one or more comments.

<h3 id="youtubecommentssetmoderationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|Modifies the moderation status of the comments with the given IDs|
|moderationStatus|query|string|true|Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: MODERATION_STATUS_PUBLISHED, MODERATION_STATUS_HELD_FOR_REVIEW, MODERATION_STATUS_REJECTED.|
|banAuthor|query|boolean|false|If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.|
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
|moderationStatus|published|
|moderationStatus|heldForReview|
|moderationStatus|likelySpam|
|moderationStatus|rejected|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="youtubecommentssetmoderationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-commentthreads">commentThreads</h1>

## youtube.commentThreads.list

<a id="opIdyoutube.commentThreads.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/commentThreads?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/commentThreads`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubecommentthreadslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.|
|allThreadsRelatedToChannelId|query|string|false|Returns the comment threads of all videos of the channel and the channel comments as well.|
|channelId|query|string|false|Returns the comment threads for all the channel comments (ie does not include comments left on videos).|
|id|query|[string]|false|Returns the comment threads with the given IDs for Stubby or Apiary.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|moderationStatus|query|string|false|Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.|
|order|query|string|false|none|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
|searchTerms|query|string|false|Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.|
|textFormat|query|string|false|The requested text format for the returned comments.|
|videoId|query|string|false|Returns the comment threads of the specified video.|
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
|moderationStatus|published|
|moderationStatus|heldForReview|
|moderationStatus|likelySpam|
|moderationStatus|rejected|
|order|orderUnspecified|
|order|time|
|order|relevance|
|textFormat|textFormatUnspecified|
|textFormat|html|
|textFormat|plainText|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#commentThread",
      "replies": {
        "comments": [
          {
            "etag": "string",
            "id": "string",
            "kind": "youtube#comment",
            "snippet": {
              "authorChannelId": {
                "value": "string"
              },
              "authorChannelUrl": "string",
              "authorDisplayName": "string",
              "authorProfileImageUrl": "string",
              "canRate": true,
              "channelId": "string",
              "likeCount": 0,
              "moderationStatus": "published",
              "parentId": "string",
              "publishedAt": "1970-01-01T00:00:00Z",
              "textDisplay": "string",
              "textOriginal": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "videoId": "string",
              "viewerRating": "none"
            }
          }
        ]
      },
      "snippet": {
        "canReply": true,
        "channelId": "string",
        "isPublic": true,
        "topLevelComment": {
          "etag": "string",
          "id": "string",
          "kind": "youtube#comment",
          "snippet": {
            "authorChannelId": {
              "value": "string"
            },
            "authorChannelUrl": "string",
            "authorDisplayName": "string",
            "authorProfileImageUrl": "string",
            "canRate": true,
            "channelId": "string",
            "likeCount": 0,
            "moderationStatus": "published",
            "parentId": "string",
            "publishedAt": "1970-01-01T00:00:00Z",
            "textDisplay": "string",
            "textOriginal": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "videoId": "string",
            "viewerRating": "none"
          }
        },
        "totalReplyCount": 0,
        "videoId": "string"
      }
    }
  ],
  "kind": "youtube#commentThreadListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubecommentthreadslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentThreadListResponse](#schemacommentthreadlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.commentThreads.insert

<a id="opIdyoutube.commentThreads.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/commentThreads?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "youtube#commentThread",
    "replies": {
      "comments": [
        {
          "etag": "string",
          "id": "string",
          "kind": "youtube#comment",
          "snippet": {
            "authorChannelId": {
              "value": "string"
            },
            "authorChannelUrl": "string",
            "authorDisplayName": "string",
            "authorProfileImageUrl": "string",
            "canRate": true,
            "channelId": "string",
            "likeCount": 0,
            "moderationStatus": "published",
            "parentId": "string",
            "publishedAt": "1970-01-01T00:00:00Z",
            "textDisplay": "string",
            "textOriginal": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "videoId": "string",
            "viewerRating": "none"
          }
        }
      ]
    },
    "snippet": {
      "canReply": true,
      "channelId": "string",
      "isPublic": true,
      "topLevelComment": {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      },
      "totalReplyCount": 0,
      "videoId": "string"
    }
  }'
```

`POST /youtube/v3/commentThreads`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#commentThread",
  "replies": {
    "comments": [
      {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      }
    ]
  },
  "snippet": {
    "canReply": true,
    "channelId": "string",
    "isPublic": true,
    "topLevelComment": {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    },
    "totalReplyCount": 0,
    "videoId": "string"
  }
}
```

<h3 id="youtubecommentthreadsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.|
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
|body|body|[CommentThread](#schemacommentthread)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the comment thread.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".|
|» replies|body|[CommentThreadReplies](#schemacommentthreadreplies)|false|The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.|
|» snippet|body|[CommentThreadSnippet](#schemacommentthreadsnippet)|false|The snippet object contains basic details about the comment thread and also the top level comment.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#commentThread",
  "replies": {
    "comments": [
      {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      }
    ]
  },
  "snippet": {
    "canReply": true,
    "channelId": "string",
    "isPublic": true,
    "topLevelComment": {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    },
    "totalReplyCount": 0,
    "videoId": "string"
  }
}
```

<h3 id="youtubecommentthreadsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentThread](#schemacommentthread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-i18nlanguages">i18nLanguages</h1>

## youtube.i18nLanguages.list

<a id="opIdyoutube.i18nLanguages.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/i18nLanguages?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/i18nLanguages`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubei18nlanguageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.|
|hl|query|string|false|none|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#i18nLanguage",
      "snippet": {
        "hl": "string",
        "name": "string"
      }
    }
  ],
  "kind": "youtube#i18nLanguageListResponse",
  "visitorId": "string"
}
```

<h3 id="youtubei18nlanguageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[I18nLanguageListResponse](#schemai18nlanguagelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-i18nregions">i18nRegions</h1>

## youtube.i18nRegions.list

<a id="opIdyoutube.i18nRegions.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/i18nRegions?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/i18nRegions`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubei18nregionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.|
|hl|query|string|false|none|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#i18nRegion",
      "snippet": {
        "gl": "string",
        "name": "string"
      }
    }
  ],
  "kind": "youtube#i18nRegionListResponse",
  "visitorId": "string"
}
```

<h3 id="youtubei18nregionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[I18nRegionListResponse](#schemai18nregionlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-livebroadcasts">liveBroadcasts</h1>

## youtube.liveBroadcasts.list

<a id="opIdyoutube.liveBroadcasts.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveBroadcasts?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/liveBroadcasts`

Retrieve the list of broadcasts associated with the given channel.

<h3 id="youtubelivebroadcastslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.|
|broadcastStatus|query|string|false|Return broadcasts with a certain status, e.g. active broadcasts.|
|broadcastType|query|string|false|Return only broadcasts with the selected type.|
|id|query|[string]|false|Return broadcasts with the given ids from Stubby or Apiary.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mine|query|boolean|false|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
|broadcastStatus|broadcastStatusFilterUnspecified|
|broadcastStatus|all|
|broadcastStatus|active|
|broadcastStatus|upcoming|
|broadcastStatus|completed|
|broadcastType|broadcastTypeFilterUnspecified|
|broadcastType|all|
|broadcastType|event|
|broadcastType|persistent|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "boundStreamId": "string",
        "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
        "closedCaptionsType": "closedCaptionsTypeUnspecified",
        "enableAutoStart": true,
        "enableAutoStop": true,
        "enableClosedCaptions": true,
        "enableContentEncryption": true,
        "enableDvr": true,
        "enableEmbed": true,
        "enableLowLatency": true,
        "latencyPreference": "latencyPreferenceUnspecified",
        "mesh": "string",
        "monitorStream": {
          "broadcastStreamDelayMs": 0,
          "embedHtml": "string",
          "enableMonitorStream": true
        },
        "projection": "projectionUnspecified",
        "recordFromStart": true,
        "startWithSlate": true,
        "stereoLayout": "stereoLayoutUnspecified"
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveBroadcast",
      "snippet": {
        "actualEndTime": "1970-01-01T00:00:00Z",
        "actualStartTime": "1970-01-01T00:00:00Z",
        "channelId": "string",
        "description": "string",
        "isDefaultBroadcast": true,
        "liveChatId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "scheduledEndTime": "1970-01-01T00:00:00Z",
        "scheduledStartTime": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "statistics": {
        "concurrentViewers": "string"
      },
      "status": {
        "lifeCycleStatus": "lifeCycleStatusUnspecified",
        "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
        "madeForKids": true,
        "privacyStatus": "public",
        "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
        "selfDeclaredMadeForKids": true
      }
    }
  ],
  "kind": "youtube#liveBroadcastListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubelivebroadcastslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveBroadcastListResponse](#schemalivebroadcastlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

## youtube.liveBroadcasts.update

<a id="opIdyoutube.liveBroadcasts.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveBroadcasts?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "boundStreamId": "string",
      "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
      "closedCaptionsType": "closedCaptionsTypeUnspecified",
      "enableAutoStart": true,
      "enableAutoStop": true,
      "enableClosedCaptions": true,
      "enableContentEncryption": true,
      "enableDvr": true,
      "enableEmbed": true,
      "enableLowLatency": true,
      "latencyPreference": "latencyPreferenceUnspecified",
      "mesh": "string",
      "monitorStream": {
        "broadcastStreamDelayMs": 0,
        "embedHtml": "string",
        "enableMonitorStream": true
      },
      "projection": "projectionUnspecified",
      "recordFromStart": true,
      "startWithSlate": true,
      "stereoLayout": "stereoLayoutUnspecified"
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveBroadcast",
    "snippet": {
      "actualEndTime": "1970-01-01T00:00:00Z",
      "actualStartTime": "1970-01-01T00:00:00Z",
      "channelId": "string",
      "description": "string",
      "isDefaultBroadcast": true,
      "liveChatId": "string",
      "publishedAt": "1970-01-01T00:00:00Z",
      "scheduledEndTime": "1970-01-01T00:00:00Z",
      "scheduledStartTime": "1970-01-01T00:00:00Z",
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "statistics": {
      "concurrentViewers": "string"
    },
    "status": {
      "lifeCycleStatus": "lifeCycleStatusUnspecified",
      "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
      "madeForKids": true,
      "privacyStatus": "public",
      "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
      "selfDeclaredMadeForKids": true
    }
  }'
```

`PUT /youtube/v3/liveBroadcasts`

Updates an existing broadcast for the authenticated user.

> Body parameter

```json
{
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

<h3 id="youtubelivebroadcastsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[LiveBroadcast](#schemalivebroadcast)|false|none|
|» contentDetails|body|[LiveBroadcastContentDetails](#schemalivebroadcastcontentdetails)|false|The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the broadcast.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".|
|» snippet|body|[LiveBroadcastSnippet](#schemalivebroadcastsnippet)|false|The snippet object contains basic details about the event, including its title, description, start time, and end time.|
|» statistics|body|[LiveBroadcastStatistics](#schemalivebroadcaststatistics)|false|The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.|
|» status|body|[LiveBroadcastStatus](#schemalivebroadcaststatus)|false|The status object contains information about the event's status.|

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
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

<h3 id="youtubelivebroadcastsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveBroadcast](#schemalivebroadcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveBroadcasts.insert

<a id="opIdyoutube.liveBroadcasts.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveBroadcasts?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "boundStreamId": "string",
      "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
      "closedCaptionsType": "closedCaptionsTypeUnspecified",
      "enableAutoStart": true,
      "enableAutoStop": true,
      "enableClosedCaptions": true,
      "enableContentEncryption": true,
      "enableDvr": true,
      "enableEmbed": true,
      "enableLowLatency": true,
      "latencyPreference": "latencyPreferenceUnspecified",
      "mesh": "string",
      "monitorStream": {
        "broadcastStreamDelayMs": 0,
        "embedHtml": "string",
        "enableMonitorStream": true
      },
      "projection": "projectionUnspecified",
      "recordFromStart": true,
      "startWithSlate": true,
      "stereoLayout": "stereoLayoutUnspecified"
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveBroadcast",
    "snippet": {
      "actualEndTime": "1970-01-01T00:00:00Z",
      "actualStartTime": "1970-01-01T00:00:00Z",
      "channelId": "string",
      "description": "string",
      "isDefaultBroadcast": true,
      "liveChatId": "string",
      "publishedAt": "1970-01-01T00:00:00Z",
      "scheduledEndTime": "1970-01-01T00:00:00Z",
      "scheduledStartTime": "1970-01-01T00:00:00Z",
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "statistics": {
      "concurrentViewers": "string"
    },
    "status": {
      "lifeCycleStatus": "lifeCycleStatusUnspecified",
      "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
      "madeForKids": true,
      "privacyStatus": "public",
      "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
      "selfDeclaredMadeForKids": true
    }
  }'
```

`POST /youtube/v3/liveBroadcasts`

Inserts a new stream for the authenticated user.

> Body parameter

```json
{
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

<h3 id="youtubelivebroadcastsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[LiveBroadcast](#schemalivebroadcast)|false|none|
|» contentDetails|body|[LiveBroadcastContentDetails](#schemalivebroadcastcontentdetails)|false|The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the broadcast.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".|
|» snippet|body|[LiveBroadcastSnippet](#schemalivebroadcastsnippet)|false|The snippet object contains basic details about the event, including its title, description, start time, and end time.|
|» statistics|body|[LiveBroadcastStatistics](#schemalivebroadcaststatistics)|false|The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.|
|» status|body|[LiveBroadcastStatus](#schemalivebroadcaststatus)|false|The status object contains information about the event's status.|

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
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

<h3 id="youtubelivebroadcastsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveBroadcast](#schemalivebroadcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveBroadcasts.delete

<a id="opIdyoutube.liveBroadcasts.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveBroadcasts?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/liveBroadcasts`

Delete a given broadcast.

<h3 id="youtubelivebroadcastsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Broadcast to delete.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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

<h3 id="youtubelivebroadcastsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveBroadcasts.bind

<a id="opIdyoutube.liveBroadcasts.bind"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveBroadcasts/bind?id=string&part=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/liveBroadcasts/bind`

Bind a broadcast to a stream.

<h3 id="youtubelivebroadcastsbind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|Broadcast to bind to the stream|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|streamId|query|string|false|Stream to bind, if not set unbind the current one.|
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
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

<h3 id="youtubelivebroadcastsbind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveBroadcast](#schemalivebroadcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveBroadcasts.insertCuepoint

<a id="opIdyoutube.liveBroadcasts.insertCuepoint"></a>

> Code samples

```bash
curl https://www.googleapis.com/youtube/v3/liveBroadcasts/cuepoint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cueType": "cueTypeUnspecified",
    "durationSecs": 0,
    "etag": "string",
    "id": "string",
    "insertionOffsetTimeMs": "string",
    "walltimeMs": "string"
  }'
```

`POST /youtube/v3/liveBroadcasts/cuepoint`

Insert cuepoints in a broadcast

> Body parameter

```json
{
  "cueType": "cueTypeUnspecified",
  "durationSecs": 0,
  "etag": "string",
  "id": "string",
  "insertionOffsetTimeMs": "string",
  "walltimeMs": "string"
}
```

<h3 id="youtubelivebroadcastsinsertcuepoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|Broadcast to insert ads to, or equivalently `external_video_id` for internal use.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|part|query|[string]|false|The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.|
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
|body|body|[Cuepoint](#schemacuepoint)|false|none|
|» cueType|body|string|false|none|
|» durationSecs|body|integer(uint32)|false|The duration of this cuepoint.|
|» etag|body|string|false|none|
|» id|body|string|false|The identifier for cuepoint resource.|
|» insertionOffsetTimeMs|body|string(int64)|false|The time when the cuepoint should be inserted by offset to the broadcast actual start time.|
|» walltimeMs|body|string(uint64)|false|The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» cueType|cueTypeUnspecified|
|» cueType|cueTypeAd|

> Example responses

> 200 Response

```json
{
  "cueType": "cueTypeUnspecified",
  "durationSecs": 0,
  "etag": "string",
  "id": "string",
  "insertionOffsetTimeMs": "string",
  "walltimeMs": "string"
}
```

<h3 id="youtubelivebroadcastsinsertcuepoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Cuepoint](#schemacuepoint)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.liveBroadcasts.transition

<a id="opIdyoutube.liveBroadcasts.transition"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveBroadcasts/transition?broadcastStatus=statusUnspecified&id=string&part=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/liveBroadcasts/transition`

Transition a broadcast to a given status.

<h3 id="youtubelivebroadcaststransition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|broadcastStatus|query|string|true|The status to which the broadcast is going to transition.|
|id|query|string|true|Broadcast to transition.|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|broadcastStatus|statusUnspecified|
|broadcastStatus|testing|
|broadcastStatus|live|
|broadcastStatus|complete|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

<h3 id="youtubelivebroadcaststransition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveBroadcast](#schemalivebroadcast)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-livechatbans">liveChatBans</h1>

## youtube.liveChatBans.insert

<a id="opIdyoutube.liveChatBans.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/bans?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveChatBan",
    "snippet": {
      "banDurationSeconds": "string",
      "bannedUserDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "profileImageUrl": "string"
      },
      "liveChatId": "string",
      "type": "liveChatBanTypeUnspecified"
    }
  }'
```

`POST /youtube/v3/liveChat/bans`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatBan",
  "snippet": {
    "banDurationSeconds": "string",
    "bannedUserDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    },
    "liveChatId": "string",
    "type": "liveChatBanTypeUnspecified"
  }
}
```

<h3 id="youtubelivechatbansinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.|
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
|body|body|[LiveChatBan](#schemalivechatban)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the ban.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`.|
|» snippet|body|[LiveChatBanSnippet](#schemalivechatbansnippet)|false|The `snippet` object contains basic details about the ban.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatBan",
  "snippet": {
    "banDurationSeconds": "string",
    "bannedUserDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    },
    "liveChatId": "string",
    "type": "liveChatBanTypeUnspecified"
  }
}
```

<h3 id="youtubelivechatbansinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveChatBan](#schemalivechatban)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveChatBans.delete

<a id="opIdyoutube.liveChatBans.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/bans?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/liveChat/bans`

Deletes a chat ban.

<h3 id="youtubelivechatbansdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
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

<h3 id="youtubelivechatbansdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-livechatmessages">liveChatMessages</h1>

## youtube.liveChatMessages.list

<a id="opIdyoutube.liveChatMessages.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=string&part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/liveChat/messages`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubelivechatmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveChatId|query|string|true|The id of the live chat for which comments should be returned.|
|part|query|[string]|true|The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.|
|hl|query|string|false|Specifies the localization language in which the system messages should be returned.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.|
|profileImageSize|query|integer|false|Specifies the size of the profile image that should be returned for each user.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "authorDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "isChatModerator": true,
        "isChatOwner": true,
        "isChatSponsor": true,
        "isVerified": true,
        "profileImageUrl": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveChatMessage",
      "snippet": {
        "authorChannelId": "string",
        "displayMessage": "string",
        "fanFundingEventDetails": {
          "amountDisplayString": "string",
          "amountMicros": "string",
          "currency": "string",
          "userComment": "string"
        },
        "giftMembershipReceivedDetails": {
          "associatedMembershipGiftingMessageId": "string",
          "gifterChannelId": "string",
          "memberLevelName": "string"
        },
        "hasDisplayContent": true,
        "liveChatId": "string",
        "memberMilestoneChatDetails": {
          "memberLevelName": "string",
          "memberMonth": 0,
          "userComment": "string"
        },
        "membershipGiftingDetails": {
          "giftMembershipsCount": 0,
          "giftMembershipsLevelName": "string"
        },
        "messageDeletedDetails": {
          "deletedMessageId": "string"
        },
        "messageRetractedDetails": {
          "retractedMessageId": "string"
        },
        "newSponsorDetails": {
          "isUpgrade": true,
          "memberLevelName": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "superChatDetails": {
          "amountDisplayString": "string",
          "amountMicros": "string",
          "currency": "string",
          "tier": 0,
          "userComment": "string"
        },
        "superStickerDetails": {
          "amountDisplayString": "string",
          "amountMicros": "string",
          "currency": "string",
          "superStickerMetadata": {
            "altText": "string",
            "altTextLanguage": "string",
            "stickerId": "string"
          },
          "tier": 0
        },
        "textMessageDetails": {
          "messageText": "string"
        },
        "type": "invalidType",
        "userBannedDetails": {
          "banDurationSeconds": "string",
          "banType": "permanent",
          "bannedUserDetails": {
            "channelId": "string",
            "channelUrl": "string",
            "displayName": "string",
            "profileImageUrl": "string"
          }
        }
      }
    }
  ],
  "kind": "youtube#liveChatMessageListResponse",
  "nextPageToken": "string",
  "offlineAt": "1970-01-01T00:00:00Z",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "pollingIntervalMillis": 0,
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubelivechatmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveChatMessageListResponse](#schemalivechatmessagelistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

## youtube.liveChatMessages.insert

<a id="opIdyoutube.liveChatMessages.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/messages?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "isChatModerator": true,
      "isChatOwner": true,
      "isChatSponsor": true,
      "isVerified": true,
      "profileImageUrl": "string"
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveChatMessage",
    "snippet": {
      "authorChannelId": "string",
      "displayMessage": "string",
      "fanFundingEventDetails": {
        "amountDisplayString": "string",
        "amountMicros": "string",
        "currency": "string",
        "userComment": "string"
      },
      "giftMembershipReceivedDetails": {
        "associatedMembershipGiftingMessageId": "string",
        "gifterChannelId": "string",
        "memberLevelName": "string"
      },
      "hasDisplayContent": true,
      "liveChatId": "string",
      "memberMilestoneChatDetails": {
        "memberLevelName": "string",
        "memberMonth": 0,
        "userComment": "string"
      },
      "membershipGiftingDetails": {
        "giftMembershipsCount": 0,
        "giftMembershipsLevelName": "string"
      },
      "messageDeletedDetails": {
        "deletedMessageId": "string"
      },
      "messageRetractedDetails": {
        "retractedMessageId": "string"
      },
      "newSponsorDetails": {
        "isUpgrade": true,
        "memberLevelName": "string"
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "superChatDetails": {
        "amountDisplayString": "string",
        "amountMicros": "string",
        "currency": "string",
        "tier": 0,
        "userComment": "string"
      },
      "superStickerDetails": {
        "amountDisplayString": "string",
        "amountMicros": "string",
        "currency": "string",
        "superStickerMetadata": {
          "altText": "string",
          "altTextLanguage": "string",
          "stickerId": "string"
        },
        "tier": 0
      },
      "textMessageDetails": {
        "messageText": "string"
      },
      "type": "invalidType",
      "userBannedDetails": {
        "banDurationSeconds": "string",
        "banType": "permanent",
        "bannedUserDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        }
      }
    }
  }'
```

`POST /youtube/v3/liveChat/messages`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "authorDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "isChatModerator": true,
    "isChatOwner": true,
    "isChatSponsor": true,
    "isVerified": true,
    "profileImageUrl": "string"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatMessage",
  "snippet": {
    "authorChannelId": "string",
    "displayMessage": "string",
    "fanFundingEventDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "userComment": "string"
    },
    "giftMembershipReceivedDetails": {
      "associatedMembershipGiftingMessageId": "string",
      "gifterChannelId": "string",
      "memberLevelName": "string"
    },
    "hasDisplayContent": true,
    "liveChatId": "string",
    "memberMilestoneChatDetails": {
      "memberLevelName": "string",
      "memberMonth": 0,
      "userComment": "string"
    },
    "membershipGiftingDetails": {
      "giftMembershipsCount": 0,
      "giftMembershipsLevelName": "string"
    },
    "messageDeletedDetails": {
      "deletedMessageId": "string"
    },
    "messageRetractedDetails": {
      "retractedMessageId": "string"
    },
    "newSponsorDetails": {
      "isUpgrade": true,
      "memberLevelName": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "superChatDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "tier": 0,
      "userComment": "string"
    },
    "superStickerDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "superStickerMetadata": {
        "altText": "string",
        "altTextLanguage": "string",
        "stickerId": "string"
      },
      "tier": 0
    },
    "textMessageDetails": {
      "messageText": "string"
    },
    "type": "invalidType",
    "userBannedDetails": {
      "banDurationSeconds": "string",
      "banType": "permanent",
      "bannedUserDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "profileImageUrl": "string"
      }
    }
  }
}
```

<h3 id="youtubelivechatmessagesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.|
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
|body|body|[LiveChatMessage](#schemalivechatmessage)|false|none|
|» authorDetails|body|[LiveChatMessageAuthorDetails](#schemalivechatmessageauthordetails)|false|The authorDetails object contains basic details about the user that posted this message.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the message.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".|
|» snippet|body|[LiveChatMessageSnippet](#schemalivechatmessagesnippet)|false|The snippet object contains basic details about the message.|

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
  "authorDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "isChatModerator": true,
    "isChatOwner": true,
    "isChatSponsor": true,
    "isVerified": true,
    "profileImageUrl": "string"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatMessage",
  "snippet": {
    "authorChannelId": "string",
    "displayMessage": "string",
    "fanFundingEventDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "userComment": "string"
    },
    "giftMembershipReceivedDetails": {
      "associatedMembershipGiftingMessageId": "string",
      "gifterChannelId": "string",
      "memberLevelName": "string"
    },
    "hasDisplayContent": true,
    "liveChatId": "string",
    "memberMilestoneChatDetails": {
      "memberLevelName": "string",
      "memberMonth": 0,
      "userComment": "string"
    },
    "membershipGiftingDetails": {
      "giftMembershipsCount": 0,
      "giftMembershipsLevelName": "string"
    },
    "messageDeletedDetails": {
      "deletedMessageId": "string"
    },
    "messageRetractedDetails": {
      "retractedMessageId": "string"
    },
    "newSponsorDetails": {
      "isUpgrade": true,
      "memberLevelName": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "superChatDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "tier": 0,
      "userComment": "string"
    },
    "superStickerDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "superStickerMetadata": {
        "altText": "string",
        "altTextLanguage": "string",
        "stickerId": "string"
      },
      "tier": 0
    },
    "textMessageDetails": {
      "messageText": "string"
    },
    "type": "invalidType",
    "userBannedDetails": {
      "banDurationSeconds": "string",
      "banType": "permanent",
      "bannedUserDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "profileImageUrl": "string"
      }
    }
  }
}
```

<h3 id="youtubelivechatmessagesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveChatMessage](#schemalivechatmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveChatMessages.delete

<a id="opIdyoutube.liveChatMessages.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/messages?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/liveChat/messages`

Deletes a chat message.

<h3 id="youtubelivechatmessagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
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

<h3 id="youtubelivechatmessagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-livechatmoderators">liveChatModerators</h1>

## youtube.liveChatModerators.list

<a id="opIdyoutube.liveChatModerators.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/moderators?liveChatId=string&part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/liveChat/moderators`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubelivechatmoderatorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveChatId|query|string|true|The id of the live chat for which moderators should be returned.|
|part|query|[string]|true|The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveChatModerator",
      "snippet": {
        "liveChatId": "string",
        "moderatorDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        }
      }
    }
  ],
  "kind": "youtube#liveChatModeratorListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubelivechatmoderatorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveChatModeratorListResponse](#schemalivechatmoderatorlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

## youtube.liveChatModerators.insert

<a id="opIdyoutube.liveChatModerators.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/moderators?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveChatModerator",
    "snippet": {
      "liveChatId": "string",
      "moderatorDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "profileImageUrl": "string"
      }
    }
  }'
```

`POST /youtube/v3/liveChat/moderators`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatModerator",
  "snippet": {
    "liveChatId": "string",
    "moderatorDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    }
  }
}
```

<h3 id="youtubelivechatmoderatorsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.|
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
|body|body|[LiveChatModerator](#schemalivechatmoderator)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the moderator.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".|
|» snippet|body|[LiveChatModeratorSnippet](#schemalivechatmoderatorsnippet)|false|The snippet object contains basic details about the moderator.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatModerator",
  "snippet": {
    "liveChatId": "string",
    "moderatorDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    }
  }
}
```

<h3 id="youtubelivechatmoderatorsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveChatModerator](#schemalivechatmoderator)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveChatModerators.delete

<a id="opIdyoutube.liveChatModerators.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveChat/moderators?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/liveChat/moderators`

Deletes a chat moderator.

<h3 id="youtubelivechatmoderatorsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
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

<h3 id="youtubelivechatmoderatorsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-livestreams">liveStreams</h1>

## youtube.liveStreams.list

<a id="opIdyoutube.liveStreams.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveStreams?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/liveStreams`

Retrieve the list of streams associated with the given channel. --

<h3 id="youtubelivestreamslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.|
|id|query|[string]|false|Return LiveStreams with the given ids from Stubby or Apiary.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mine|query|boolean|false|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "cdn": {
        "format": "string",
        "frameRate": "30fps",
        "ingestionInfo": {
          "backupIngestionAddress": "string",
          "ingestionAddress": "string",
          "rtmpsBackupIngestionAddress": "string",
          "rtmpsIngestionAddress": "string",
          "streamName": "string"
        },
        "ingestionType": "rtmp",
        "resolution": "240p"
      },
      "contentDetails": {
        "closedCaptionsIngestionUrl": "string",
        "isReusable": true
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveStream",
      "snippet": {
        "channelId": "string",
        "description": "string",
        "isDefaultStream": true,
        "publishedAt": "1970-01-01T00:00:00Z",
        "title": "string"
      },
      "status": {
        "healthStatus": {
          "configurationIssues": [
            {
              "description": "string",
              "reason": "string",
              "severity": "info",
              "type": "gopSizeOver"
            }
          ],
          "lastUpdateTimeSeconds": "string",
          "status": "good"
        },
        "streamStatus": "created"
      }
    }
  ],
  "kind": "youtube#liveStreamListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubelivestreamslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveStreamListResponse](#schemalivestreamlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

## youtube.liveStreams.update

<a id="opIdyoutube.liveStreams.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveStreams?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cdn": {
      "format": "string",
      "frameRate": "30fps",
      "ingestionInfo": {
        "backupIngestionAddress": "string",
        "ingestionAddress": "string",
        "rtmpsBackupIngestionAddress": "string",
        "rtmpsIngestionAddress": "string",
        "streamName": "string"
      },
      "ingestionType": "rtmp",
      "resolution": "240p"
    },
    "contentDetails": {
      "closedCaptionsIngestionUrl": "string",
      "isReusable": true
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveStream",
    "snippet": {
      "channelId": "string",
      "description": "string",
      "isDefaultStream": true,
      "publishedAt": "1970-01-01T00:00:00Z",
      "title": "string"
    },
    "status": {
      "healthStatus": {
        "configurationIssues": [
          {
            "description": "string",
            "reason": "string",
            "severity": "info",
            "type": "gopSizeOver"
          }
        ],
        "lastUpdateTimeSeconds": "string",
        "status": "good"
      },
      "streamStatus": "created"
    }
  }'
```

`PUT /youtube/v3/liveStreams`

Updates an existing stream for the authenticated user.

> Body parameter

```json
{
  "cdn": {
    "format": "string",
    "frameRate": "30fps",
    "ingestionInfo": {
      "backupIngestionAddress": "string",
      "ingestionAddress": "string",
      "rtmpsBackupIngestionAddress": "string",
      "rtmpsIngestionAddress": "string",
      "streamName": "string"
    },
    "ingestionType": "rtmp",
    "resolution": "240p"
  },
  "contentDetails": {
    "closedCaptionsIngestionUrl": "string",
    "isReusable": true
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveStream",
  "snippet": {
    "channelId": "string",
    "description": "string",
    "isDefaultStream": true,
    "publishedAt": "1970-01-01T00:00:00Z",
    "title": "string"
  },
  "status": {
    "healthStatus": {
      "configurationIssues": [
        {
          "description": "string",
          "reason": "string",
          "severity": "info",
          "type": "gopSizeOver"
        }
      ],
      "lastUpdateTimeSeconds": "string",
      "status": "good"
    },
    "streamStatus": "created"
  }
}
```

<h3 id="youtubelivestreamsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[LiveStream](#schemalivestream)|false|none|
|» cdn|body|[CdnSettings](#schemacdnsettings)|false|The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.|
|» contentDetails|body|[LiveStreamContentDetails](#schemalivestreamcontentdetails)|false|The content_details object contains information about the stream, including the closed captions ingestion URL.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the stream.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".|
|» snippet|body|[LiveStreamSnippet](#schemalivestreamsnippet)|false|The snippet object contains basic details about the stream, including its channel, title, and description.|
|» status|body|[LiveStreamStatus](#schemalivestreamstatus)|false|The status object contains information about live stream's status.|

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
  "cdn": {
    "format": "string",
    "frameRate": "30fps",
    "ingestionInfo": {
      "backupIngestionAddress": "string",
      "ingestionAddress": "string",
      "rtmpsBackupIngestionAddress": "string",
      "rtmpsIngestionAddress": "string",
      "streamName": "string"
    },
    "ingestionType": "rtmp",
    "resolution": "240p"
  },
  "contentDetails": {
    "closedCaptionsIngestionUrl": "string",
    "isReusable": true
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveStream",
  "snippet": {
    "channelId": "string",
    "description": "string",
    "isDefaultStream": true,
    "publishedAt": "1970-01-01T00:00:00Z",
    "title": "string"
  },
  "status": {
    "healthStatus": {
      "configurationIssues": [
        {
          "description": "string",
          "reason": "string",
          "severity": "info",
          "type": "gopSizeOver"
        }
      ],
      "lastUpdateTimeSeconds": "string",
      "status": "good"
    },
    "streamStatus": "created"
  }
}
```

<h3 id="youtubelivestreamsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveStream](#schemalivestream)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveStreams.insert

<a id="opIdyoutube.liveStreams.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveStreams?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cdn": {
      "format": "string",
      "frameRate": "30fps",
      "ingestionInfo": {
        "backupIngestionAddress": "string",
        "ingestionAddress": "string",
        "rtmpsBackupIngestionAddress": "string",
        "rtmpsIngestionAddress": "string",
        "streamName": "string"
      },
      "ingestionType": "rtmp",
      "resolution": "240p"
    },
    "contentDetails": {
      "closedCaptionsIngestionUrl": "string",
      "isReusable": true
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#liveStream",
    "snippet": {
      "channelId": "string",
      "description": "string",
      "isDefaultStream": true,
      "publishedAt": "1970-01-01T00:00:00Z",
      "title": "string"
    },
    "status": {
      "healthStatus": {
        "configurationIssues": [
          {
            "description": "string",
            "reason": "string",
            "severity": "info",
            "type": "gopSizeOver"
          }
        ],
        "lastUpdateTimeSeconds": "string",
        "status": "good"
      },
      "streamStatus": "created"
    }
  }'
```

`POST /youtube/v3/liveStreams`

Inserts a new stream for the authenticated user.

> Body parameter

```json
{
  "cdn": {
    "format": "string",
    "frameRate": "30fps",
    "ingestionInfo": {
      "backupIngestionAddress": "string",
      "ingestionAddress": "string",
      "rtmpsBackupIngestionAddress": "string",
      "rtmpsIngestionAddress": "string",
      "streamName": "string"
    },
    "ingestionType": "rtmp",
    "resolution": "240p"
  },
  "contentDetails": {
    "closedCaptionsIngestionUrl": "string",
    "isReusable": true
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveStream",
  "snippet": {
    "channelId": "string",
    "description": "string",
    "isDefaultStream": true,
    "publishedAt": "1970-01-01T00:00:00Z",
    "title": "string"
  },
  "status": {
    "healthStatus": {
      "configurationIssues": [
        {
          "description": "string",
          "reason": "string",
          "severity": "info",
          "type": "gopSizeOver"
        }
      ],
      "lastUpdateTimeSeconds": "string",
      "status": "good"
    },
    "streamStatus": "created"
  }
}
```

<h3 id="youtubelivestreamsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[LiveStream](#schemalivestream)|false|none|
|» cdn|body|[CdnSettings](#schemacdnsettings)|false|The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.|
|» contentDetails|body|[LiveStreamContentDetails](#schemalivestreamcontentdetails)|false|The content_details object contains information about the stream, including the closed captions ingestion URL.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube assigns to uniquely identify the stream.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".|
|» snippet|body|[LiveStreamSnippet](#schemalivestreamsnippet)|false|The snippet object contains basic details about the stream, including its channel, title, and description.|
|» status|body|[LiveStreamStatus](#schemalivestreamstatus)|false|The status object contains information about live stream's status.|

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
  "cdn": {
    "format": "string",
    "frameRate": "30fps",
    "ingestionInfo": {
      "backupIngestionAddress": "string",
      "ingestionAddress": "string",
      "rtmpsBackupIngestionAddress": "string",
      "rtmpsIngestionAddress": "string",
      "streamName": "string"
    },
    "ingestionType": "rtmp",
    "resolution": "240p"
  },
  "contentDetails": {
    "closedCaptionsIngestionUrl": "string",
    "isReusable": true
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveStream",
  "snippet": {
    "channelId": "string",
    "description": "string",
    "isDefaultStream": true,
    "publishedAt": "1970-01-01T00:00:00Z",
    "title": "string"
  },
  "status": {
    "healthStatus": {
      "configurationIssues": [
        {
          "description": "string",
          "reason": "string",
          "severity": "info",
          "type": "gopSizeOver"
        }
      ],
      "lastUpdateTimeSeconds": "string",
      "status": "good"
    },
    "streamStatus": "created"
  }
}
```

<h3 id="youtubelivestreamsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LiveStream](#schemalivestream)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

## youtube.liveStreams.delete

<a id="opIdyoutube.liveStreams.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/liveStreams?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/liveStreams`

Deletes an existing stream for the authenticated user.

<h3 id="youtubelivestreamsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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

<h3 id="youtubelivestreamsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl )
</aside>

<h1 id="youtube-data-api-v3-members">members</h1>

## youtube.members.list

<a id="opIdyoutube.members.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/members?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/members`

Retrieves a list of members that match the request criteria for a channel.

<h3 id="youtubememberslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.|
|filterByMemberChannelId|query|string|false|Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.|
|hasAccessToLevel|query|string|false|Filter members in the results set to the ones that have access to a level.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mode|query|string|false|Parameter that specifies which channel members to return.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
|mode|listMembersModeUnknown|
|mode|updates|
|mode|all_current|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "kind": "youtube#member",
      "snippet": {
        "creatorChannelId": "string",
        "memberDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        },
        "membershipsDetails": {
          "accessibleLevels": [
            "string"
          ],
          "highestAccessibleLevel": "string",
          "highestAccessibleLevelDisplayName": "string",
          "membershipsDuration": {
            "memberSince": "string",
            "memberTotalDurationMonths": 0
          },
          "membershipsDurationAtLevels": [
            {
              "level": "string",
              "memberSince": "string",
              "memberTotalDurationMonths": 0
            }
          ]
        }
      }
    }
  ],
  "kind": "youtube#memberListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubememberslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MemberListResponse](#schemamemberlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.channel-memberships.creator ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.channel-memberships.creator )
</aside>

<h1 id="youtube-data-api-v3-membershipslevels">membershipsLevels</h1>

## youtube.membershipsLevels.list

<a id="opIdyoutube.membershipsLevels.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/membershipsLevels?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/membershipsLevels`

Retrieves a list of all pricing levels offered by a creator to the fans.

<h3 id="youtubemembershipslevelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#membershipsLevel",
      "snippet": {
        "creatorChannelId": "string",
        "levelDetails": {
          "displayName": "string"
        }
      }
    }
  ],
  "kind": "youtube#membershipsLevelListResponse",
  "visitorId": "string"
}
```

<h3 id="youtubemembershipslevelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[MembershipsLevelListResponse](#schemamembershipslevellistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.channel-memberships.creator ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.channel-memberships.creator )
</aside>

<h1 id="youtube-data-api-v3-playlistitems">playlistItems</h1>

## youtube.playlistItems.list

<a id="opIdyoutube.playlistItems.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlistItems?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/playlistItems`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubeplaylistitemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.|
|id|query|[string]|false|none|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
|playlistId|query|string|false|Return the playlist items within the given playlist.|
|videoId|query|string|false|Return the playlist items associated with the given video ID.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "endAt": "string",
        "note": "string",
        "startAt": "string",
        "videoId": "string",
        "videoPublishedAt": "1970-01-01T00:00:00Z"
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#playlistItem",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "playlistId": "string",
        "position": 0,
        "publishedAt": "1970-01-01T00:00:00Z",
        "resourceId": {
          "channelId": "string",
          "kind": "string",
          "playlistId": "string",
          "videoId": "string"
        },
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string",
        "videoOwnerChannelId": "string",
        "videoOwnerChannelTitle": "string"
      },
      "status": {
        "privacyStatus": "public"
      }
    }
  ],
  "kind": "youtube#playlistItemListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubeplaylistitemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaylistItemListResponse](#schemaplaylistitemlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.playlistItems.update

<a id="opIdyoutube.playlistItems.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlistItems?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "endAt": "string",
      "note": "string",
      "startAt": "string",
      "videoId": "string",
      "videoPublishedAt": "1970-01-01T00:00:00Z"
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#playlistItem",
    "snippet": {
      "channelId": "string",
      "channelTitle": "string",
      "description": "string",
      "playlistId": "string",
      "position": 0,
      "publishedAt": "1970-01-01T00:00:00Z",
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string",
      "videoOwnerChannelId": "string",
      "videoOwnerChannelTitle": "string"
    },
    "status": {
      "privacyStatus": "public"
    }
  }'
```

`PUT /youtube/v3/playlistItems`

Updates an existing resource.

> Body parameter

```json
{
  "contentDetails": {
    "endAt": "string",
    "note": "string",
    "startAt": "string",
    "videoId": "string",
    "videoPublishedAt": "1970-01-01T00:00:00Z"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlistItem",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "playlistId": "string",
    "position": 0,
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string",
    "videoOwnerChannelId": "string",
    "videoOwnerChannelTitle": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistitemsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[PlaylistItem](#schemaplaylistitem)|false|none|
|» contentDetails|body|[PlaylistItemContentDetails](#schemaplaylistitemcontentdetails)|false|The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the playlist item.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".|
|» snippet|body|[PlaylistItemSnippet](#schemaplaylistitemsnippet)|false|The snippet object contains basic details about the playlist item, such as its title and position in the playlist.|
|» status|body|[PlaylistItemStatus](#schemaplaylistitemstatus)|false|The status object contains information about the playlist item's privacy status.|

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
  "contentDetails": {
    "endAt": "string",
    "note": "string",
    "startAt": "string",
    "videoId": "string",
    "videoPublishedAt": "1970-01-01T00:00:00Z"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlistItem",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "playlistId": "string",
    "position": 0,
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string",
    "videoOwnerChannelId": "string",
    "videoOwnerChannelTitle": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistitemsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaylistItem](#schemaplaylistitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.playlistItems.insert

<a id="opIdyoutube.playlistItems.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlistItems?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "endAt": "string",
      "note": "string",
      "startAt": "string",
      "videoId": "string",
      "videoPublishedAt": "1970-01-01T00:00:00Z"
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#playlistItem",
    "snippet": {
      "channelId": "string",
      "channelTitle": "string",
      "description": "string",
      "playlistId": "string",
      "position": 0,
      "publishedAt": "1970-01-01T00:00:00Z",
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string",
      "videoOwnerChannelId": "string",
      "videoOwnerChannelTitle": "string"
    },
    "status": {
      "privacyStatus": "public"
    }
  }'
```

`POST /youtube/v3/playlistItems`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "contentDetails": {
    "endAt": "string",
    "note": "string",
    "startAt": "string",
    "videoId": "string",
    "videoPublishedAt": "1970-01-01T00:00:00Z"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlistItem",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "playlistId": "string",
    "position": 0,
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string",
    "videoOwnerChannelId": "string",
    "videoOwnerChannelTitle": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistitemsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[PlaylistItem](#schemaplaylistitem)|false|none|
|» contentDetails|body|[PlaylistItemContentDetails](#schemaplaylistitemcontentdetails)|false|The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the playlist item.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".|
|» snippet|body|[PlaylistItemSnippet](#schemaplaylistitemsnippet)|false|The snippet object contains basic details about the playlist item, such as its title and position in the playlist.|
|» status|body|[PlaylistItemStatus](#schemaplaylistitemstatus)|false|The status object contains information about the playlist item's privacy status.|

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
  "contentDetails": {
    "endAt": "string",
    "note": "string",
    "startAt": "string",
    "videoId": "string",
    "videoPublishedAt": "1970-01-01T00:00:00Z"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlistItem",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "playlistId": "string",
    "position": 0,
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string",
    "videoOwnerChannelId": "string",
    "videoOwnerChannelTitle": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistitemsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaylistItem](#schemaplaylistitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.playlistItems.delete

<a id="opIdyoutube.playlistItems.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlistItems?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/playlistItems`

Deletes a resource.

<h3 id="youtubeplaylistitemsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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

<h3 id="youtubeplaylistitemsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-playlists">playlists</h1>

## youtube.playlists.list

<a id="opIdyoutube.playlists.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlists?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/playlists`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubeplaylistslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.|
|channelId|query|string|false|Return the playlists owned by the specified channel ID.|
|hl|query|string|false|Return content in specified language|
|id|query|[string]|false|Return the playlists with the given IDs for Stubby or Apiary.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mine|query|boolean|false|Return the playlists owned by the authenticated user.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "itemCount": 0
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#playlist",
      "localizations": {
        "property1": {
          "description": "string",
          "title": "string"
        },
        "property2": {
          "description": "string",
          "title": "string"
        }
      },
      "player": {
        "embedHtml": "string"
      },
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "defaultLanguage": "string",
        "description": "string",
        "localized": {
          "description": "string",
          "title": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "tags": [
          "string"
        ],
        "thumbnailVideoId": "string",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "status": {
        "privacyStatus": "public"
      }
    }
  ],
  "kind": "youtube#playlistListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubeplaylistslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaylistListResponse](#schemaplaylistlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.playlists.update

<a id="opIdyoutube.playlists.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlists?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "itemCount": 0
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#playlist",
    "localizations": {
      "property1": {
        "description": "string",
        "title": "string"
      },
      "property2": {
        "description": "string",
        "title": "string"
      }
    },
    "player": {
      "embedHtml": "string"
    },
    "snippet": {
      "channelId": "string",
      "channelTitle": "string",
      "defaultLanguage": "string",
      "description": "string",
      "localized": {
        "description": "string",
        "title": "string"
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "tags": [
        "string"
      ],
      "thumbnailVideoId": "string",
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "status": {
      "privacyStatus": "public"
    }
  }'
```

`PUT /youtube/v3/playlists`

Updates an existing resource.

> Body parameter

```json
{
  "contentDetails": {
    "itemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlist",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "player": {
    "embedHtml": "string"
  },
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnailVideoId": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[Playlist](#schemaplaylist)|false|none|
|» contentDetails|body|[PlaylistContentDetails](#schemaplaylistcontentdetails)|false|The contentDetails object contains information like video count.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the playlist.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".|
|» localizations|body|object|false|Localizations for different languages|
|» » **additionalProperties**|body|[PlaylistLocalization](#schemaplaylistlocalization)|false|Playlist localization setting|
|» player|body|[PlaylistPlayer](#schemaplaylistplayer)|false|The player object contains information that you would use to play the playlist in an embedded player.|
|» snippet|body|[PlaylistSnippet](#schemaplaylistsnippet)|false|The snippet object contains basic details about the playlist, such as its title and description.|
|» status|body|[PlaylistStatus](#schemaplayliststatus)|false|The status object contains status information for the playlist.|

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
  "contentDetails": {
    "itemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlist",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "player": {
    "embedHtml": "string"
  },
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnailVideoId": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Playlist](#schemaplaylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.playlists.insert

<a id="opIdyoutube.playlists.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlists?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "itemCount": 0
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#playlist",
    "localizations": {
      "property1": {
        "description": "string",
        "title": "string"
      },
      "property2": {
        "description": "string",
        "title": "string"
      }
    },
    "player": {
      "embedHtml": "string"
    },
    "snippet": {
      "channelId": "string",
      "channelTitle": "string",
      "defaultLanguage": "string",
      "description": "string",
      "localized": {
        "description": "string",
        "title": "string"
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "tags": [
        "string"
      ],
      "thumbnailVideoId": "string",
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "status": {
      "privacyStatus": "public"
    }
  }'
```

`POST /youtube/v3/playlists`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "contentDetails": {
    "itemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlist",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "player": {
    "embedHtml": "string"
  },
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnailVideoId": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
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
|body|body|[Playlist](#schemaplaylist)|false|none|
|» contentDetails|body|[PlaylistContentDetails](#schemaplaylistcontentdetails)|false|The contentDetails object contains information like video count.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the playlist.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".|
|» localizations|body|object|false|Localizations for different languages|
|» » **additionalProperties**|body|[PlaylistLocalization](#schemaplaylistlocalization)|false|Playlist localization setting|
|» player|body|[PlaylistPlayer](#schemaplaylistplayer)|false|The player object contains information that you would use to play the playlist in an embedded player.|
|» snippet|body|[PlaylistSnippet](#schemaplaylistsnippet)|false|The snippet object contains basic details about the playlist, such as its title and description.|
|» status|body|[PlaylistStatus](#schemaplayliststatus)|false|The status object contains status information for the playlist.|

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
  "contentDetails": {
    "itemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlist",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "player": {
    "embedHtml": "string"
  },
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnailVideoId": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

<h3 id="youtubeplaylistsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Playlist](#schemaplaylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.playlists.delete

<a id="opIdyoutube.playlists.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/playlists?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/playlists`

Deletes a resource.

<h3 id="youtubeplaylistsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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

<h3 id="youtubeplaylistsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-search">search</h1>

## youtube.search.list

<a id="opIdyoutube.search.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/search?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/search`

Retrieves a list of search resources

<h3 id="youtubesearchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.|
|channelId|query|string|false|Filter on resources belonging to this channelId.|
|channelType|query|string|false|Add a filter on the channel search.|
|eventType|query|string|false|Filter on the livestream status of the videos.|
|forContentOwner|query|boolean|false|Search owned by a content owner.|
|forDeveloper|query|boolean|false|Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.|
|forMine|query|boolean|false|Search for the private videos of the authenticated user.|
|location|query|string|false|Filter on location of the video|
|locationRadius|query|string|false|Filter on distance from the location (specified above).|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|order|query|string|false|Sort order of the results.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
|publishedAfter|query|string|false|Filter on resources published after this date.|
|publishedBefore|query|string|false|Filter on resources published before this date.|
|q|query|string|false|Textual search terms to match.|
|regionCode|query|string|false|Display the content as seen by viewers in this country.|
|relatedToVideoId|query|string|false|Search related to a resource.|
|relevanceLanguage|query|string|false|Return results relevant to this language.|
|safeSearch|query|string|false|Indicates whether the search results should include restricted content as well as standard content.|
|topicId|query|string|false|Restrict results to a particular topic.|
|type|query|[string]|false|Restrict results to a particular set of resource types from One Platform.|
|videoCaption|query|string|false|Filter on the presence of captions on the videos.|
|videoCategoryId|query|string|false|Filter on videos in a specific category.|
|videoDefinition|query|string|false|Filter on the definition of the videos.|
|videoDimension|query|string|false|Filter on 3d videos.|
|videoDuration|query|string|false|Filter on the duration of the videos.|
|videoEmbeddable|query|string|false|Filter on embeddable videos.|
|videoLicense|query|string|false|Filter on the license of the videos.|
|videoSyndicated|query|string|false|Filter on syndicated videos.|
|videoType|query|string|false|Filter on videos of a specific type.|
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
|channelType|channelTypeUnspecified|
|channelType|any|
|channelType|show|
|eventType|none|
|eventType|upcoming|
|eventType|live|
|eventType|completed|
|order|searchSortUnspecified|
|order|date|
|order|rating|
|order|viewCount|
|order|relevance|
|order|title|
|order|videoCount|
|safeSearch|safeSearchSettingUnspecified|
|safeSearch|none|
|safeSearch|moderate|
|safeSearch|strict|
|videoCaption|videoCaptionUnspecified|
|videoCaption|any|
|videoCaption|closedCaption|
|videoCaption|none|
|videoDefinition|any|
|videoDefinition|standard|
|videoDefinition|high|
|videoDimension|any|
|videoDimension|2d|
|videoDimension|3d|
|videoDuration|videoDurationUnspecified|
|videoDuration|any|
|videoDuration|short|
|videoDuration|medium|
|videoDuration|long|
|videoEmbeddable|videoEmbeddableUnspecified|
|videoEmbeddable|any|
|videoEmbeddable|true|
|videoLicense|any|
|videoLicense|youtube|
|videoLicense|creativeCommon|
|videoSyndicated|videoSyndicatedUnspecified|
|videoSyndicated|any|
|videoSyndicated|true|
|videoType|videoTypeUnspecified|
|videoType|any|
|videoType|movie|
|videoType|episode|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "kind": "youtube#searchResult",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "liveBroadcastContent": "none",
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      }
    }
  ],
  "kind": "youtube#searchListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "regionCode": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubesearchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchListResponse](#schemasearchlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-subscriptions">subscriptions</h1>

## youtube.subscriptions.list

<a id="opIdyoutube.subscriptions.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/subscriptions?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/subscriptions`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubesubscriptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.|
|channelId|query|string|false|Return the subscriptions of the given channel owner.|
|forChannelId|query|string|false|Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.|
|id|query|[string]|false|Return the subscriptions with the given IDs for Stubby or Apiary.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|mine|query|boolean|false|Flag for returning the subscriptions of the authenticated user.|
|myRecentSubscribers|query|boolean|false|none|
|mySubscribers|query|boolean|false|Return the subscribers of the given channel owner.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|order|query|string|false|The order of the returned subscriptions|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
|order|subscriptionOrderUnspecified|
|order|relevance|
|order|unread|
|order|alphabetical|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "activityType": "subscriptionActivityTypeUnspecified",
        "newItemCount": 0,
        "totalItemCount": 0
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#subscription",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "resourceId": {
          "channelId": "string",
          "kind": "string",
          "playlistId": "string",
          "videoId": "string"
        },
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "subscriberSnippet": {
        "channelId": "string",
        "description": "string",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      }
    }
  ],
  "kind": "youtube#subscriptionListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubesubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscriptionListResponse](#schemasubscriptionlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.subscriptions.insert

<a id="opIdyoutube.subscriptions.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/subscriptions?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentDetails": {
      "activityType": "subscriptionActivityTypeUnspecified",
      "newItemCount": 0,
      "totalItemCount": 0
    },
    "etag": "string",
    "id": "string",
    "kind": "youtube#subscription",
    "snippet": {
      "channelId": "string",
      "channelTitle": "string",
      "description": "string",
      "publishedAt": "1970-01-01T00:00:00Z",
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "subscriberSnippet": {
      "channelId": "string",
      "description": "string",
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    }
  }'
```

`POST /youtube/v3/subscriptions`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "contentDetails": {
    "activityType": "subscriptionActivityTypeUnspecified",
    "newItemCount": 0,
    "totalItemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#subscription",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "subscriberSnippet": {
    "channelId": "string",
    "description": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  }
}
```

<h3 id="youtubesubscriptionsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.|
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
|body|body|[Subscription](#schemasubscription)|false|none|
|» contentDetails|body|[SubscriptionContentDetails](#schemasubscriptioncontentdetails)|false|The contentDetails object contains basic statistics about the subscription.|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the subscription.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".|
|» snippet|body|[SubscriptionSnippet](#schemasubscriptionsnippet)|false|The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.|
|» subscriberSnippet|body|[SubscriptionSubscriberSnippet](#schemasubscriptionsubscribersnippet)|false|The subscriberSnippet object contains basic details about the subscriber.|

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
  "contentDetails": {
    "activityType": "subscriptionActivityTypeUnspecified",
    "newItemCount": 0,
    "totalItemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#subscription",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "subscriberSnippet": {
    "channelId": "string",
    "description": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  }
}
```

<h3 id="youtubesubscriptionsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.subscriptions.delete

<a id="opIdyoutube.subscriptions.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/subscriptions?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/subscriptions`

Deletes a resource.

<h3 id="youtubesubscriptionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
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

<h3 id="youtubesubscriptionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-superchatevents">superChatEvents</h1>

## youtube.superChatEvents.list

<a id="opIdyoutube.superChatEvents.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/superChatEvents?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/superChatEvents`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubesuperchateventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.|
|hl|query|string|false|Return rendered funding amounts in specified language.|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#superChatEvent",
      "snippet": {
        "amountMicros": "string",
        "channelId": "string",
        "commentText": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "currency": "string",
        "displayString": "string",
        "isSuperStickerEvent": true,
        "messageType": 0,
        "superStickerMetadata": {
          "altText": "string",
          "altTextLanguage": "string",
          "stickerId": "string"
        },
        "supporterDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        }
      }
    }
  ],
  "kind": "youtube#superChatEventListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubesuperchateventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SuperChatEventListResponse](#schemasuperchateventlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

<h1 id="youtube-data-api-v3-tests">tests</h1>

## youtube.tests.insert

<a id="opIdyoutube.tests.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/tests?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "featuredPart": true,
    "gaia": "string",
    "id": "string",
    "snippet": {}
  }'
```

`POST /youtube/v3/tests`

POST method.

> Body parameter

```json
{
  "featuredPart": true,
  "gaia": "string",
  "id": "string",
  "snippet": {}
}
```

<h3 id="youtubetestsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|none|
|externalChannelId|query|string|false|none|
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
|body|body|[TestItem](#schematestitem)|false|none|
|» featuredPart|body|boolean|false|none|
|» gaia|body|string(int64)|false|none|
|» id|body|string|false|none|
|» snippet|body|[TestItemTestItemSnippet](#schematestitemtestitemsnippet)|false|none|

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
  "featuredPart": true,
  "gaia": "string",
  "id": "string",
  "snippet": {}
}
```

<h3 id="youtubetestsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestItem](#schematestitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

<h1 id="youtube-data-api-v3-thirdpartylinks">thirdPartyLinks</h1>

## youtube.thirdPartyLinks.list

<a id="opIdyoutube.thirdPartyLinks.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/thirdPartyLinks?part=string' \
  -H 'Accept: application/json'
```

`GET /youtube/v3/thirdPartyLinks`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubethirdpartylinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.|
|externalChannelId|query|string|false|Channel ID to which changes should be applied, for delegation.|
|linkingToken|query|string|false|Get a third party link with the given linking token.|
|type|query|string|false|Get a third party link of the given type.|
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
|type|linkUnspecified|
|type|channelToStoreLink|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "kind": "youtube#thirdPartyLink",
      "linkingToken": "string",
      "snippet": {
        "channelToStoreLink": {
          "merchantId": "string",
          "storeName": "string",
          "storeUrl": "string"
        },
        "type": "linkUnspecified"
      },
      "status": {
        "linkStatus": "unknown"
      }
    }
  ],
  "kind": "youtube#thirdPartyLinkListResponse"
}
```

<h3 id="youtubethirdpartylinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ThirdPartyLinkListResponse](#schemathirdpartylinklistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## youtube.thirdPartyLinks.update

<a id="opIdyoutube.thirdPartyLinks.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/thirdPartyLinks?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "etag": "string",
    "kind": "youtube#thirdPartyLink",
    "linkingToken": "string",
    "snippet": {
      "channelToStoreLink": {
        "merchantId": "string",
        "storeName": "string",
        "storeUrl": "string"
      },
      "type": "linkUnspecified"
    },
    "status": {
      "linkStatus": "unknown"
    }
  }'
```

`PUT /youtube/v3/thirdPartyLinks`

Updates an existing resource.

> Body parameter

```json
{
  "etag": "string",
  "kind": "youtube#thirdPartyLink",
  "linkingToken": "string",
  "snippet": {
    "channelToStoreLink": {
      "merchantId": "string",
      "storeName": "string",
      "storeUrl": "string"
    },
    "type": "linkUnspecified"
  },
  "status": {
    "linkStatus": "unknown"
  }
}
```

<h3 id="youtubethirdpartylinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.|
|externalChannelId|query|string|false|Channel ID to which changes should be applied, for delegation.|
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
|body|body|[ThirdPartyLink](#schemathirdpartylink)|false|none|
|» etag|body|string|false|Etag of this resource|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".|
|» linkingToken|body|string|false|The linking_token identifies a YouTube account and channel with which the third party account is linked.|
|» snippet|body|[ThirdPartyLinkSnippet](#schemathirdpartylinksnippet)|false|The snippet object contains basic details about the third- party account link.|
|» status|body|[ThirdPartyLinkStatus](#schemathirdpartylinkstatus)|false|The status object contains information about the status of the link.|

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
  "etag": "string",
  "kind": "youtube#thirdPartyLink",
  "linkingToken": "string",
  "snippet": {
    "channelToStoreLink": {
      "merchantId": "string",
      "storeName": "string",
      "storeUrl": "string"
    },
    "type": "linkUnspecified"
  },
  "status": {
    "linkStatus": "unknown"
  }
}
```

<h3 id="youtubethirdpartylinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ThirdPartyLink](#schemathirdpartylink)|

<aside class="success">
This operation does not require authentication
</aside>

## youtube.thirdPartyLinks.insert

<a id="opIdyoutube.thirdPartyLinks.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/thirdPartyLinks?part=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "etag": "string",
    "kind": "youtube#thirdPartyLink",
    "linkingToken": "string",
    "snippet": {
      "channelToStoreLink": {
        "merchantId": "string",
        "storeName": "string",
        "storeUrl": "string"
      },
      "type": "linkUnspecified"
    },
    "status": {
      "linkStatus": "unknown"
    }
  }'
```

`POST /youtube/v3/thirdPartyLinks`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "etag": "string",
  "kind": "youtube#thirdPartyLink",
  "linkingToken": "string",
  "snippet": {
    "channelToStoreLink": {
      "merchantId": "string",
      "storeName": "string",
      "storeUrl": "string"
    },
    "type": "linkUnspecified"
  },
  "status": {
    "linkStatus": "unknown"
  }
}
```

<h3 id="youtubethirdpartylinksinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.|
|externalChannelId|query|string|false|Channel ID to which changes should be applied, for delegation.|
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
|body|body|[ThirdPartyLink](#schemathirdpartylink)|false|none|
|» etag|body|string|false|Etag of this resource|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".|
|» linkingToken|body|string|false|The linking_token identifies a YouTube account and channel with which the third party account is linked.|
|» snippet|body|[ThirdPartyLinkSnippet](#schemathirdpartylinksnippet)|false|The snippet object contains basic details about the third- party account link.|
|» status|body|[ThirdPartyLinkStatus](#schemathirdpartylinkstatus)|false|The status object contains information about the status of the link.|

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
  "etag": "string",
  "kind": "youtube#thirdPartyLink",
  "linkingToken": "string",
  "snippet": {
    "channelToStoreLink": {
      "merchantId": "string",
      "storeName": "string",
      "storeUrl": "string"
    },
    "type": "linkUnspecified"
  },
  "status": {
    "linkStatus": "unknown"
  }
}
```

<h3 id="youtubethirdpartylinksinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ThirdPartyLink](#schemathirdpartylink)|

<aside class="success">
This operation does not require authentication
</aside>

## youtube.thirdPartyLinks.delete

<a id="opIdyoutube.thirdPartyLinks.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/thirdPartyLinks?linkingToken=string&type=linkUnspecified' \
  -X DELETE
```

`DELETE /youtube/v3/thirdPartyLinks`

Deletes a resource.

<h3 id="youtubethirdpartylinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkingToken|query|string|true|Delete the partner links with the given linking token.|
|type|query|string|true|Type of the link to be deleted.|
|externalChannelId|query|string|false|Channel ID to which changes should be applied, for delegation.|
|part|query|[string]|false|Do not use. Required for compatibility.|
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
|type|linkUnspecified|
|type|channelToStoreLink|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="youtubethirdpartylinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="youtube-data-api-v3-thumbnails">thumbnails</h1>

## youtube.thumbnails.set

<a id="opIdyoutube.thumbnails.set"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/thumbnails/set?videoId=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/thumbnails/set`

As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

<h3 id="youtubethumbnailsset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|query|string|true|Returns the Thumbnail with the given video IDs for Stubby or Apiary.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    }
  ],
  "kind": "youtube#thumbnailSetResponse",
  "visitorId": "string"
}
```

<h3 id="youtubethumbnailsset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ThumbnailSetResponse](#schemathumbnailsetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.upload ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.upload ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-videoabusereportreasons">videoAbuseReportReasons</h1>

## youtube.videoAbuseReportReasons.list

<a id="opIdyoutube.videoAbuseReportReasons.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videoAbuseReportReasons?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/videoAbuseReportReasons`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubevideoabusereportreasonslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.|
|hl|query|string|false|none|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#videoAbuseReportReason",
      "snippet": {
        "label": "string",
        "secondaryReasons": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      }
    }
  ],
  "kind": "youtube#videoAbuseReportReasonListResponse",
  "visitorId": "string"
}
```

<h3 id="youtubevideoabusereportreasonslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VideoAbuseReportReasonListResponse](#schemavideoabusereportreasonlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly )
</aside>

<h1 id="youtube-data-api-v3-videocategories">videoCategories</h1>

## youtube.videoCategories.list

<a id="opIdyoutube.videoCategories.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videoCategories?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/videoCategories`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubevideocategorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.|
|hl|query|string|false|none|
|id|query|[string]|false|Returns the video categories with the given IDs for Stubby or Apiary.|
|regionCode|query|string|false|none|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#videoCategory",
      "snippet": {
        "assignable": true,
        "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
        "title": "string"
      }
    }
  ],
  "kind": "youtube#videoCategoryListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubevideocategorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VideoCategoryListResponse](#schemavideocategorylistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-videos">videos</h1>

## youtube.videos.list

<a id="opIdyoutube.videos.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videos?part=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/videos`

Retrieves a list of resources, possibly filtered.

<h3 id="youtubevideoslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.|
|chart|query|string|false|Return the videos that are in the specified chart.|
|hl|query|string|false|Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).|
|id|query|[string]|false|Return videos with the given ids.|
|locale|query|string|false|none|
|maxHeight|query|integer|false|none|
|maxResults|query|integer|false|The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.|
|maxWidth|query|integer|false|Return the player with maximum height specified in|
|myRating|query|string|false|Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|pageToken|query|string|false|The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.|
|regionCode|query|string|false|Use a chart that is specific to the specified region|
|videoCategoryId|query|string|false|Use chart that is specific to the specified video category|
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
|chart|chartUnspecified|
|chart|mostPopular|
|myRating|none|
|myRating|like|
|myRating|dislike|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "ageGating": {
        "alcoholContent": true,
        "restricted": true,
        "videoGameRating": "anyone"
      },
      "contentDetails": {
        "caption": "true",
        "contentRating": {
          "acbRating": "acbUnspecified",
          "agcomRating": "agcomUnspecified",
          "anatelRating": "anatelUnspecified",
          "bbfcRating": "bbfcUnspecified",
          "bfvcRating": "bfvcUnspecified",
          "bmukkRating": "bmukkUnspecified",
          "catvRating": "catvUnspecified",
          "catvfrRating": "catvfrUnspecified",
          "cbfcRating": "cbfcUnspecified",
          "cccRating": "cccUnspecified",
          "cceRating": "cceUnspecified",
          "chfilmRating": "chfilmUnspecified",
          "chvrsRating": "chvrsUnspecified",
          "cicfRating": "cicfUnspecified",
          "cnaRating": "cnaUnspecified",
          "cncRating": "cncUnspecified",
          "csaRating": "csaUnspecified",
          "cscfRating": "cscfUnspecified",
          "czfilmRating": "czfilmUnspecified",
          "djctqRating": "djctqUnspecified",
          "djctqRatingReasons": [
            "djctqRatingReasonUnspecified"
          ],
          "ecbmctRating": "ecbmctUnspecified",
          "eefilmRating": "eefilmUnspecified",
          "egfilmRating": "egfilmUnspecified",
          "eirinRating": "eirinUnspecified",
          "fcbmRating": "fcbmUnspecified",
          "fcoRating": "fcoUnspecified",
          "fmocRating": "fmocUnspecified",
          "fpbRating": "fpbUnspecified",
          "fpbRatingReasons": [
            "fpbRatingReasonUnspecified"
          ],
          "fskRating": "fskUnspecified",
          "grfilmRating": "grfilmUnspecified",
          "icaaRating": "icaaUnspecified",
          "ifcoRating": "ifcoUnspecified",
          "ilfilmRating": "ilfilmUnspecified",
          "incaaRating": "incaaUnspecified",
          "kfcbRating": "kfcbUnspecified",
          "kijkwijzerRating": "kijkwijzerUnspecified",
          "kmrbRating": "kmrbUnspecified",
          "lsfRating": "lsfUnspecified",
          "mccaaRating": "mccaaUnspecified",
          "mccypRating": "mccypUnspecified",
          "mcstRating": "mcstUnspecified",
          "mdaRating": "mdaUnspecified",
          "medietilsynetRating": "medietilsynetUnspecified",
          "mekuRating": "mekuUnspecified",
          "menaMpaaRating": "menaMpaaUnspecified",
          "mibacRating": "mibacUnspecified",
          "mocRating": "mocUnspecified",
          "moctwRating": "moctwUnspecified",
          "mpaaRating": "mpaaUnspecified",
          "mpaatRating": "mpaatUnspecified",
          "mtrcbRating": "mtrcbUnspecified",
          "nbcRating": "nbcUnspecified",
          "nbcplRating": "nbcplUnspecified",
          "nfrcRating": "nfrcUnspecified",
          "nfvcbRating": "nfvcbUnspecified",
          "nkclvRating": "nkclvUnspecified",
          "nmcRating": "nmcUnspecified",
          "oflcRating": "oflcUnspecified",
          "pefilmRating": "pefilmUnspecified",
          "rcnofRating": "rcnofUnspecified",
          "resorteviolenciaRating": "resorteviolenciaUnspecified",
          "rtcRating": "rtcUnspecified",
          "rteRating": "rteUnspecified",
          "russiaRating": "russiaUnspecified",
          "skfilmRating": "skfilmUnspecified",
          "smaisRating": "smaisUnspecified",
          "smsaRating": "smsaUnspecified",
          "tvpgRating": "tvpgUnspecified",
          "ytRating": "ytUnspecified"
        },
        "countryRestriction": {
          "allowed": true,
          "exception": [
            "string"
          ]
        },
        "definition": "sd",
        "dimension": "string",
        "duration": "string",
        "hasCustomThumbnail": true,
        "licensedContent": true,
        "projection": "rectangular",
        "regionRestriction": {
          "allowed": [
            "string"
          ],
          "blocked": [
            "string"
          ]
        }
      },
      "etag": "string",
      "fileDetails": {
        "audioStreams": [
          {
            "bitrateBps": "string",
            "channelCount": 0,
            "codec": "string",
            "vendor": "string"
          }
        ],
        "bitrateBps": "string",
        "container": "string",
        "creationTime": "string",
        "durationMs": "string",
        "fileName": "string",
        "fileSize": "string",
        "fileType": "video",
        "videoStreams": [
          {
            "aspectRatio": 0,
            "bitrateBps": "string",
            "codec": "string",
            "frameRateFps": 0,
            "heightPixels": 0,
            "rotation": "none",
            "vendor": "string",
            "widthPixels": 0
          }
        ]
      },
      "id": "string",
      "kind": "youtube#video",
      "liveStreamingDetails": {
        "activeLiveChatId": "string",
        "actualEndTime": "1970-01-01T00:00:00Z",
        "actualStartTime": "1970-01-01T00:00:00Z",
        "concurrentViewers": "string",
        "scheduledEndTime": "1970-01-01T00:00:00Z",
        "scheduledStartTime": "1970-01-01T00:00:00Z"
      },
      "localizations": {
        "property1": {
          "description": "string",
          "title": "string"
        },
        "property2": {
          "description": "string",
          "title": "string"
        }
      },
      "monetizationDetails": {
        "access": {
          "allowed": true,
          "exception": [
            "string"
          ]
        }
      },
      "player": {
        "embedHeight": "string",
        "embedHtml": "string",
        "embedWidth": "string"
      },
      "processingDetails": {
        "editorSuggestionsAvailability": "string",
        "fileDetailsAvailability": "string",
        "processingFailureReason": "uploadFailed",
        "processingIssuesAvailability": "string",
        "processingProgress": {
          "partsProcessed": "string",
          "partsTotal": "string",
          "timeLeftMs": "string"
        },
        "processingStatus": "processing",
        "tagSuggestionsAvailability": "string",
        "thumbnailsAvailability": "string"
      },
      "projectDetails": {},
      "recordingDetails": {
        "location": {
          "altitude": 0,
          "latitude": 0,
          "longitude": 0
        },
        "locationDescription": "string",
        "recordingDate": "1970-01-01T00:00:00Z"
      },
      "snippet": {
        "categoryId": "string",
        "channelId": "string",
        "channelTitle": "string",
        "defaultAudioLanguage": "string",
        "defaultLanguage": "string",
        "description": "string",
        "liveBroadcastContent": "none",
        "localized": {
          "description": "string",
          "title": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "tags": [
          "string"
        ],
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "statistics": {
        "commentCount": "string",
        "dislikeCount": "string",
        "favoriteCount": "string",
        "likeCount": "string",
        "viewCount": "string"
      },
      "status": {
        "embeddable": true,
        "failureReason": "conversion",
        "license": "youtube",
        "madeForKids": true,
        "privacyStatus": "public",
        "publicStatsViewable": true,
        "publishAt": "1970-01-01T00:00:00Z",
        "rejectionReason": "copyright",
        "selfDeclaredMadeForKids": true,
        "uploadStatus": "uploaded"
      },
      "suggestions": {
        "editorSuggestions": [
          "videoAutoLevels"
        ],
        "processingErrors": [
          "audioFile"
        ],
        "processingHints": [
          "nonStreamableMov"
        ],
        "processingWarnings": [
          "unknownContainer"
        ],
        "tagSuggestions": [
          {
            "categoryRestricts": [
              "string"
            ],
            "tag": "string"
          }
        ]
      },
      "topicDetails": {
        "relevantTopicIds": [
          "string"
        ],
        "topicCategories": [
          "string"
        ],
        "topicIds": [
          "string"
        ]
      }
    }
  ],
  "kind": "youtube#videoListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

<h3 id="youtubevideoslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VideoListResponse](#schemavideolistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.videos.update

<a id="opIdyoutube.videos.update"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videos?part=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ageGating": {
      "alcoholContent": true,
      "restricted": true,
      "videoGameRating": "anyone"
    },
    "contentDetails": {
      "caption": "true",
      "contentRating": {
        "acbRating": "acbUnspecified",
        "agcomRating": "agcomUnspecified",
        "anatelRating": "anatelUnspecified",
        "bbfcRating": "bbfcUnspecified",
        "bfvcRating": "bfvcUnspecified",
        "bmukkRating": "bmukkUnspecified",
        "catvRating": "catvUnspecified",
        "catvfrRating": "catvfrUnspecified",
        "cbfcRating": "cbfcUnspecified",
        "cccRating": "cccUnspecified",
        "cceRating": "cceUnspecified",
        "chfilmRating": "chfilmUnspecified",
        "chvrsRating": "chvrsUnspecified",
        "cicfRating": "cicfUnspecified",
        "cnaRating": "cnaUnspecified",
        "cncRating": "cncUnspecified",
        "csaRating": "csaUnspecified",
        "cscfRating": "cscfUnspecified",
        "czfilmRating": "czfilmUnspecified",
        "djctqRating": "djctqUnspecified",
        "djctqRatingReasons": [
          "djctqRatingReasonUnspecified"
        ],
        "ecbmctRating": "ecbmctUnspecified",
        "eefilmRating": "eefilmUnspecified",
        "egfilmRating": "egfilmUnspecified",
        "eirinRating": "eirinUnspecified",
        "fcbmRating": "fcbmUnspecified",
        "fcoRating": "fcoUnspecified",
        "fmocRating": "fmocUnspecified",
        "fpbRating": "fpbUnspecified",
        "fpbRatingReasons": [
          "fpbRatingReasonUnspecified"
        ],
        "fskRating": "fskUnspecified",
        "grfilmRating": "grfilmUnspecified",
        "icaaRating": "icaaUnspecified",
        "ifcoRating": "ifcoUnspecified",
        "ilfilmRating": "ilfilmUnspecified",
        "incaaRating": "incaaUnspecified",
        "kfcbRating": "kfcbUnspecified",
        "kijkwijzerRating": "kijkwijzerUnspecified",
        "kmrbRating": "kmrbUnspecified",
        "lsfRating": "lsfUnspecified",
        "mccaaRating": "mccaaUnspecified",
        "mccypRating": "mccypUnspecified",
        "mcstRating": "mcstUnspecified",
        "mdaRating": "mdaUnspecified",
        "medietilsynetRating": "medietilsynetUnspecified",
        "mekuRating": "mekuUnspecified",
        "menaMpaaRating": "menaMpaaUnspecified",
        "mibacRating": "mibacUnspecified",
        "mocRating": "mocUnspecified",
        "moctwRating": "moctwUnspecified",
        "mpaaRating": "mpaaUnspecified",
        "mpaatRating": "mpaatUnspecified",
        "mtrcbRating": "mtrcbUnspecified",
        "nbcRating": "nbcUnspecified",
        "nbcplRating": "nbcplUnspecified",
        "nfrcRating": "nfrcUnspecified",
        "nfvcbRating": "nfvcbUnspecified",
        "nkclvRating": "nkclvUnspecified",
        "nmcRating": "nmcUnspecified",
        "oflcRating": "oflcUnspecified",
        "pefilmRating": "pefilmUnspecified",
        "rcnofRating": "rcnofUnspecified",
        "resorteviolenciaRating": "resorteviolenciaUnspecified",
        "rtcRating": "rtcUnspecified",
        "rteRating": "rteUnspecified",
        "russiaRating": "russiaUnspecified",
        "skfilmRating": "skfilmUnspecified",
        "smaisRating": "smaisUnspecified",
        "smsaRating": "smsaUnspecified",
        "tvpgRating": "tvpgUnspecified",
        "ytRating": "ytUnspecified"
      },
      "countryRestriction": {
        "allowed": true,
        "exception": [
          "string"
        ]
      },
      "definition": "sd",
      "dimension": "string",
      "duration": "string",
      "hasCustomThumbnail": true,
      "licensedContent": true,
      "projection": "rectangular",
      "regionRestriction": {
        "allowed": [
          "string"
        ],
        "blocked": [
          "string"
        ]
      }
    },
    "etag": "string",
    "fileDetails": {
      "audioStreams": [
        {
          "bitrateBps": "string",
          "channelCount": 0,
          "codec": "string",
          "vendor": "string"
        }
      ],
      "bitrateBps": "string",
      "container": "string",
      "creationTime": "string",
      "durationMs": "string",
      "fileName": "string",
      "fileSize": "string",
      "fileType": "video",
      "videoStreams": [
        {
          "aspectRatio": 0,
          "bitrateBps": "string",
          "codec": "string",
          "frameRateFps": 0,
          "heightPixels": 0,
          "rotation": "none",
          "vendor": "string",
          "widthPixels": 0
        }
      ]
    },
    "id": "string",
    "kind": "youtube#video",
    "liveStreamingDetails": {
      "activeLiveChatId": "string",
      "actualEndTime": "1970-01-01T00:00:00Z",
      "actualStartTime": "1970-01-01T00:00:00Z",
      "concurrentViewers": "string",
      "scheduledEndTime": "1970-01-01T00:00:00Z",
      "scheduledStartTime": "1970-01-01T00:00:00Z"
    },
    "localizations": {
      "property1": {
        "description": "string",
        "title": "string"
      },
      "property2": {
        "description": "string",
        "title": "string"
      }
    },
    "monetizationDetails": {
      "access": {
        "allowed": true,
        "exception": [
          "string"
        ]
      }
    },
    "player": {
      "embedHeight": "string",
      "embedHtml": "string",
      "embedWidth": "string"
    },
    "processingDetails": {
      "editorSuggestionsAvailability": "string",
      "fileDetailsAvailability": "string",
      "processingFailureReason": "uploadFailed",
      "processingIssuesAvailability": "string",
      "processingProgress": {
        "partsProcessed": "string",
        "partsTotal": "string",
        "timeLeftMs": "string"
      },
      "processingStatus": "processing",
      "tagSuggestionsAvailability": "string",
      "thumbnailsAvailability": "string"
    },
    "projectDetails": {},
    "recordingDetails": {
      "location": {
        "altitude": 0,
        "latitude": 0,
        "longitude": 0
      },
      "locationDescription": "string",
      "recordingDate": "1970-01-01T00:00:00Z"
    },
    "snippet": {
      "categoryId": "string",
      "channelId": "string",
      "channelTitle": "string",
      "defaultAudioLanguage": "string",
      "defaultLanguage": "string",
      "description": "string",
      "liveBroadcastContent": "none",
      "localized": {
        "description": "string",
        "title": "string"
      },
      "publishedAt": "1970-01-01T00:00:00Z",
      "tags": [
        "string"
      ],
      "thumbnails": {
        "high": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "maxres": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "medium": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "standard": {
          "height": 0,
          "url": "string",
          "width": 0
        }
      },
      "title": "string"
    },
    "statistics": {
      "commentCount": "string",
      "dislikeCount": "string",
      "favoriteCount": "string",
      "likeCount": "string",
      "viewCount": "string"
    },
    "status": {
      "embeddable": true,
      "failureReason": "conversion",
      "license": "youtube",
      "madeForKids": true,
      "privacyStatus": "public",
      "publicStatsViewable": true,
      "publishAt": "1970-01-01T00:00:00Z",
      "rejectionReason": "copyright",
      "selfDeclaredMadeForKids": true,
      "uploadStatus": "uploaded"
    },
    "suggestions": {
      "editorSuggestions": [
        "videoAutoLevels"
      ],
      "processingErrors": [
        "audioFile"
      ],
      "processingHints": [
        "nonStreamableMov"
      ],
      "processingWarnings": [
        "unknownContainer"
      ],
      "tagSuggestions": [
        {
          "categoryRestricts": [
            "string"
          ],
          "tag": "string"
        }
      ]
    },
    "topicDetails": {
      "relevantTopicIds": [
        "string"
      ],
      "topicCategories": [
        "string"
      ],
      "topicIds": [
        "string"
      ]
    }
  }'
```

`PUT /youtube/v3/videos`

Updates an existing resource.

> Body parameter

```json
{
  "ageGating": {
    "alcoholContent": true,
    "restricted": true,
    "videoGameRating": "anyone"
  },
  "contentDetails": {
    "caption": "true",
    "contentRating": {
      "acbRating": "acbUnspecified",
      "agcomRating": "agcomUnspecified",
      "anatelRating": "anatelUnspecified",
      "bbfcRating": "bbfcUnspecified",
      "bfvcRating": "bfvcUnspecified",
      "bmukkRating": "bmukkUnspecified",
      "catvRating": "catvUnspecified",
      "catvfrRating": "catvfrUnspecified",
      "cbfcRating": "cbfcUnspecified",
      "cccRating": "cccUnspecified",
      "cceRating": "cceUnspecified",
      "chfilmRating": "chfilmUnspecified",
      "chvrsRating": "chvrsUnspecified",
      "cicfRating": "cicfUnspecified",
      "cnaRating": "cnaUnspecified",
      "cncRating": "cncUnspecified",
      "csaRating": "csaUnspecified",
      "cscfRating": "cscfUnspecified",
      "czfilmRating": "czfilmUnspecified",
      "djctqRating": "djctqUnspecified",
      "djctqRatingReasons": [
        "djctqRatingReasonUnspecified"
      ],
      "ecbmctRating": "ecbmctUnspecified",
      "eefilmRating": "eefilmUnspecified",
      "egfilmRating": "egfilmUnspecified",
      "eirinRating": "eirinUnspecified",
      "fcbmRating": "fcbmUnspecified",
      "fcoRating": "fcoUnspecified",
      "fmocRating": "fmocUnspecified",
      "fpbRating": "fpbUnspecified",
      "fpbRatingReasons": [
        "fpbRatingReasonUnspecified"
      ],
      "fskRating": "fskUnspecified",
      "grfilmRating": "grfilmUnspecified",
      "icaaRating": "icaaUnspecified",
      "ifcoRating": "ifcoUnspecified",
      "ilfilmRating": "ilfilmUnspecified",
      "incaaRating": "incaaUnspecified",
      "kfcbRating": "kfcbUnspecified",
      "kijkwijzerRating": "kijkwijzerUnspecified",
      "kmrbRating": "kmrbUnspecified",
      "lsfRating": "lsfUnspecified",
      "mccaaRating": "mccaaUnspecified",
      "mccypRating": "mccypUnspecified",
      "mcstRating": "mcstUnspecified",
      "mdaRating": "mdaUnspecified",
      "medietilsynetRating": "medietilsynetUnspecified",
      "mekuRating": "mekuUnspecified",
      "menaMpaaRating": "menaMpaaUnspecified",
      "mibacRating": "mibacUnspecified",
      "mocRating": "mocUnspecified",
      "moctwRating": "moctwUnspecified",
      "mpaaRating": "mpaaUnspecified",
      "mpaatRating": "mpaatUnspecified",
      "mtrcbRating": "mtrcbUnspecified",
      "nbcRating": "nbcUnspecified",
      "nbcplRating": "nbcplUnspecified",
      "nfrcRating": "nfrcUnspecified",
      "nfvcbRating": "nfvcbUnspecified",
      "nkclvRating": "nkclvUnspecified",
      "nmcRating": "nmcUnspecified",
      "oflcRating": "oflcUnspecified",
      "pefilmRating": "pefilmUnspecified",
      "rcnofRating": "rcnofUnspecified",
      "resorteviolenciaRating": "resorteviolenciaUnspecified",
      "rtcRating": "rtcUnspecified",
      "rteRating": "rteUnspecified",
      "russiaRating": "russiaUnspecified",
      "skfilmRating": "skfilmUnspecified",
      "smaisRating": "smaisUnspecified",
      "smsaRating": "smsaUnspecified",
      "tvpgRating": "tvpgUnspecified",
      "ytRating": "ytUnspecified"
    },
    "countryRestriction": {
      "allowed": true,
      "exception": [
        "string"
      ]
    },
    "definition": "sd",
    "dimension": "string",
    "duration": "string",
    "hasCustomThumbnail": true,
    "licensedContent": true,
    "projection": "rectangular",
    "regionRestriction": {
      "allowed": [
        "string"
      ],
      "blocked": [
        "string"
      ]
    }
  },
  "etag": "string",
  "fileDetails": {
    "audioStreams": [
      {
        "bitrateBps": "string",
        "channelCount": 0,
        "codec": "string",
        "vendor": "string"
      }
    ],
    "bitrateBps": "string",
    "container": "string",
    "creationTime": "string",
    "durationMs": "string",
    "fileName": "string",
    "fileSize": "string",
    "fileType": "video",
    "videoStreams": [
      {
        "aspectRatio": 0,
        "bitrateBps": "string",
        "codec": "string",
        "frameRateFps": 0,
        "heightPixels": 0,
        "rotation": "none",
        "vendor": "string",
        "widthPixels": 0
      }
    ]
  },
  "id": "string",
  "kind": "youtube#video",
  "liveStreamingDetails": {
    "activeLiveChatId": "string",
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "concurrentViewers": "string",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z"
  },
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "monetizationDetails": {
    "access": {
      "allowed": true,
      "exception": [
        "string"
      ]
    }
  },
  "player": {
    "embedHeight": "string",
    "embedHtml": "string",
    "embedWidth": "string"
  },
  "processingDetails": {
    "editorSuggestionsAvailability": "string",
    "fileDetailsAvailability": "string",
    "processingFailureReason": "uploadFailed",
    "processingIssuesAvailability": "string",
    "processingProgress": {
      "partsProcessed": "string",
      "partsTotal": "string",
      "timeLeftMs": "string"
    },
    "processingStatus": "processing",
    "tagSuggestionsAvailability": "string",
    "thumbnailsAvailability": "string"
  },
  "projectDetails": {},
  "recordingDetails": {
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "locationDescription": "string",
    "recordingDate": "1970-01-01T00:00:00Z"
  },
  "snippet": {
    "categoryId": "string",
    "channelId": "string",
    "channelTitle": "string",
    "defaultAudioLanguage": "string",
    "defaultLanguage": "string",
    "description": "string",
    "liveBroadcastContent": "none",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "dislikeCount": "string",
    "favoriteCount": "string",
    "likeCount": "string",
    "viewCount": "string"
  },
  "status": {
    "embeddable": true,
    "failureReason": "conversion",
    "license": "youtube",
    "madeForKids": true,
    "privacyStatus": "public",
    "publicStatsViewable": true,
    "publishAt": "1970-01-01T00:00:00Z",
    "rejectionReason": "copyright",
    "selfDeclaredMadeForKids": true,
    "uploadStatus": "uploaded"
  },
  "suggestions": {
    "editorSuggestions": [
      "videoAutoLevels"
    ],
    "processingErrors": [
      "audioFile"
    ],
    "processingHints": [
      "nonStreamableMov"
    ],
    "processingWarnings": [
      "unknownContainer"
    ],
    "tagSuggestions": [
      {
        "categoryRestricts": [
          "string"
        ],
        "tag": "string"
      }
    ]
  },
  "topicDetails": {
    "relevantTopicIds": [
      "string"
    ],
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

<h3 id="youtubevideosupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[Video](#schemavideo)|false|none|
|» ageGating|body|[VideoAgeGating](#schemavideoagegating)|false|Age restriction details related to a video. This data can only be retrieved by the video owner.|
|» contentDetails|body|[VideoContentDetails](#schemavideocontentdetails)|false|The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.|
|» etag|body|string|false|Etag of this resource.|
|» fileDetails|body|[VideoFileDetails](#schemavideofiledetails)|false|The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the video.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#video".|
|» liveStreamingDetails|body|[VideoLiveStreamingDetails](#schemavideolivestreamingdetails)|false|The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.|
|» localizations|body|object|false|The localizations object contains localized versions of the basic details about the video, such as its title and description.|
|» » **additionalProperties**|body|[VideoLocalization](#schemavideolocalization)|false|Localized versions of certain video properties (e.g. title).|
|» monetizationDetails|body|[VideoMonetizationDetails](#schemavideomonetizationdetails)|false|The monetizationDetails object encapsulates information about the monetization status of the video.|
|» player|body|[VideoPlayer](#schemavideoplayer)|false|The player object contains information that you would use to play the video in an embedded player.|
|» processingDetails|body|[VideoProcessingDetails](#schemavideoprocessingdetails)|false|The processingDetails object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video. The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.|
|» projectDetails|body|[VideoProjectDetails](#schemavideoprojectdetails)|false|The projectDetails object contains information about the project specific video metadata. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677|
|» recordingDetails|body|[VideoRecordingDetails](#schemavideorecordingdetails)|false|The recordingDetails object encapsulates information about the location, date and address where the video was recorded.|
|» snippet|body|[VideoSnippet](#schemavideosnippet)|false|The snippet object contains basic details about the video, such as its title, description, and category.|
|» statistics|body|[VideoStatistics](#schemavideostatistics)|false|The statistics object contains statistics about the video.|
|» status|body|[VideoStatus](#schemavideostatus)|false|The status object contains information about the video's uploading, processing, and privacy statuses.|
|» suggestions|body|[VideoSuggestions](#schemavideosuggestions)|false|The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.|
|» topicDetails|body|[VideoTopicDetails](#schemavideotopicdetails)|false|The topicDetails object encapsulates information about Freebase topics associated with the video.|

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
  "ageGating": {
    "alcoholContent": true,
    "restricted": true,
    "videoGameRating": "anyone"
  },
  "contentDetails": {
    "caption": "true",
    "contentRating": {
      "acbRating": "acbUnspecified",
      "agcomRating": "agcomUnspecified",
      "anatelRating": "anatelUnspecified",
      "bbfcRating": "bbfcUnspecified",
      "bfvcRating": "bfvcUnspecified",
      "bmukkRating": "bmukkUnspecified",
      "catvRating": "catvUnspecified",
      "catvfrRating": "catvfrUnspecified",
      "cbfcRating": "cbfcUnspecified",
      "cccRating": "cccUnspecified",
      "cceRating": "cceUnspecified",
      "chfilmRating": "chfilmUnspecified",
      "chvrsRating": "chvrsUnspecified",
      "cicfRating": "cicfUnspecified",
      "cnaRating": "cnaUnspecified",
      "cncRating": "cncUnspecified",
      "csaRating": "csaUnspecified",
      "cscfRating": "cscfUnspecified",
      "czfilmRating": "czfilmUnspecified",
      "djctqRating": "djctqUnspecified",
      "djctqRatingReasons": [
        "djctqRatingReasonUnspecified"
      ],
      "ecbmctRating": "ecbmctUnspecified",
      "eefilmRating": "eefilmUnspecified",
      "egfilmRating": "egfilmUnspecified",
      "eirinRating": "eirinUnspecified",
      "fcbmRating": "fcbmUnspecified",
      "fcoRating": "fcoUnspecified",
      "fmocRating": "fmocUnspecified",
      "fpbRating": "fpbUnspecified",
      "fpbRatingReasons": [
        "fpbRatingReasonUnspecified"
      ],
      "fskRating": "fskUnspecified",
      "grfilmRating": "grfilmUnspecified",
      "icaaRating": "icaaUnspecified",
      "ifcoRating": "ifcoUnspecified",
      "ilfilmRating": "ilfilmUnspecified",
      "incaaRating": "incaaUnspecified",
      "kfcbRating": "kfcbUnspecified",
      "kijkwijzerRating": "kijkwijzerUnspecified",
      "kmrbRating": "kmrbUnspecified",
      "lsfRating": "lsfUnspecified",
      "mccaaRating": "mccaaUnspecified",
      "mccypRating": "mccypUnspecified",
      "mcstRating": "mcstUnspecified",
      "mdaRating": "mdaUnspecified",
      "medietilsynetRating": "medietilsynetUnspecified",
      "mekuRating": "mekuUnspecified",
      "menaMpaaRating": "menaMpaaUnspecified",
      "mibacRating": "mibacUnspecified",
      "mocRating": "mocUnspecified",
      "moctwRating": "moctwUnspecified",
      "mpaaRating": "mpaaUnspecified",
      "mpaatRating": "mpaatUnspecified",
      "mtrcbRating": "mtrcbUnspecified",
      "nbcRating": "nbcUnspecified",
      "nbcplRating": "nbcplUnspecified",
      "nfrcRating": "nfrcUnspecified",
      "nfvcbRating": "nfvcbUnspecified",
      "nkclvRating": "nkclvUnspecified",
      "nmcRating": "nmcUnspecified",
      "oflcRating": "oflcUnspecified",
      "pefilmRating": "pefilmUnspecified",
      "rcnofRating": "rcnofUnspecified",
      "resorteviolenciaRating": "resorteviolenciaUnspecified",
      "rtcRating": "rtcUnspecified",
      "rteRating": "rteUnspecified",
      "russiaRating": "russiaUnspecified",
      "skfilmRating": "skfilmUnspecified",
      "smaisRating": "smaisUnspecified",
      "smsaRating": "smsaUnspecified",
      "tvpgRating": "tvpgUnspecified",
      "ytRating": "ytUnspecified"
    },
    "countryRestriction": {
      "allowed": true,
      "exception": [
        "string"
      ]
    },
    "definition": "sd",
    "dimension": "string",
    "duration": "string",
    "hasCustomThumbnail": true,
    "licensedContent": true,
    "projection": "rectangular",
    "regionRestriction": {
      "allowed": [
        "string"
      ],
      "blocked": [
        "string"
      ]
    }
  },
  "etag": "string",
  "fileDetails": {
    "audioStreams": [
      {
        "bitrateBps": "string",
        "channelCount": 0,
        "codec": "string",
        "vendor": "string"
      }
    ],
    "bitrateBps": "string",
    "container": "string",
    "creationTime": "string",
    "durationMs": "string",
    "fileName": "string",
    "fileSize": "string",
    "fileType": "video",
    "videoStreams": [
      {
        "aspectRatio": 0,
        "bitrateBps": "string",
        "codec": "string",
        "frameRateFps": 0,
        "heightPixels": 0,
        "rotation": "none",
        "vendor": "string",
        "widthPixels": 0
      }
    ]
  },
  "id": "string",
  "kind": "youtube#video",
  "liveStreamingDetails": {
    "activeLiveChatId": "string",
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "concurrentViewers": "string",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z"
  },
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "monetizationDetails": {
    "access": {
      "allowed": true,
      "exception": [
        "string"
      ]
    }
  },
  "player": {
    "embedHeight": "string",
    "embedHtml": "string",
    "embedWidth": "string"
  },
  "processingDetails": {
    "editorSuggestionsAvailability": "string",
    "fileDetailsAvailability": "string",
    "processingFailureReason": "uploadFailed",
    "processingIssuesAvailability": "string",
    "processingProgress": {
      "partsProcessed": "string",
      "partsTotal": "string",
      "timeLeftMs": "string"
    },
    "processingStatus": "processing",
    "tagSuggestionsAvailability": "string",
    "thumbnailsAvailability": "string"
  },
  "projectDetails": {},
  "recordingDetails": {
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "locationDescription": "string",
    "recordingDate": "1970-01-01T00:00:00Z"
  },
  "snippet": {
    "categoryId": "string",
    "channelId": "string",
    "channelTitle": "string",
    "defaultAudioLanguage": "string",
    "defaultLanguage": "string",
    "description": "string",
    "liveBroadcastContent": "none",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "dislikeCount": "string",
    "favoriteCount": "string",
    "likeCount": "string",
    "viewCount": "string"
  },
  "status": {
    "embeddable": true,
    "failureReason": "conversion",
    "license": "youtube",
    "madeForKids": true,
    "privacyStatus": "public",
    "publicStatsViewable": true,
    "publishAt": "1970-01-01T00:00:00Z",
    "rejectionReason": "copyright",
    "selfDeclaredMadeForKids": true,
    "uploadStatus": "uploaded"
  },
  "suggestions": {
    "editorSuggestions": [
      "videoAutoLevels"
    ],
    "processingErrors": [
      "audioFile"
    ],
    "processingHints": [
      "nonStreamableMov"
    ],
    "processingWarnings": [
      "unknownContainer"
    ],
    "tagSuggestions": [
      {
        "categoryRestricts": [
          "string"
        ],
        "tag": "string"
      }
    ]
  },
  "topicDetails": {
    "relevantTopicIds": [
      "string"
    ],
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

<h3 id="youtubevideosupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Video](#schemavideo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.videos.insert

<a id="opIdyoutube.videos.insert"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videos?part=string' \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"ageGating":{"alcoholContent":true,"restricted":true,"videoGameRating":"anyone"},"contentDetails":{"caption":"true","contentRating":{"acbRating":"acbUnspecified","agcomRating":"agcomUnspecified","anatelRating":"anatelUnspecified","bbfcRating":"bbfcUnspecified","bfvcRating":"bfvcUnspecified","bmukkRating":"bmukkUnspecified","catvRating":"catvUnspecified","catvfrRating":"catvfrUnspecified","cbfcRating":"cbfcUnspecified","cccRating":"cccUnspecified","cceRating":"cceUnspecified","chfilmRating":"chfilmUnspecified","chvrsRating":"chvrsUnspecified","cicfRating":"cicfUnspecified","cnaRating":"cnaUnspecified","cncRating":"cncUnspecified","csaRating":"csaUnspecified","cscfRating":"cscfUnspecified","czfilmRating":"czfilmUnspecified","djctqRating":"djctqUnspecified","djctqRatingReasons":["djctqRatingReasonUnspecified"],"ecbmctRating":"ecbmctUnspecified","eefilmRating":"eefilmUnspecified","egfilmRating":"egfilmUnspecified","eirinRating":"eirinUnspecified","fcbmRating":"fcbmUnspecified","fcoRating":"fcoUnspecified","fmocRating":"fmocUnspecified","fpbRating":"fpbUnspecified","fpbRatingReasons":["fpbRatingReasonUnspecified"],"fskRating":"fskUnspecified","grfilmRating":"grfilmUnspecified","icaaRating":"icaaUnspecified","ifcoRating":"ifcoUnspecified","ilfilmRating":"ilfilmUnspecified","incaaRating":"incaaUnspecified","kfcbRating":"kfcbUnspecified","kijkwijzerRating":"kijkwijzerUnspecified","kmrbRating":"kmrbUnspecified","lsfRating":"lsfUnspecified","mccaaRating":"mccaaUnspecified","mccypRating":"mccypUnspecified","mcstRating":"mcstUnspecified","mdaRating":"mdaUnspecified","medietilsynetRating":"medietilsynetUnspecified","mekuRating":"mekuUnspecified","menaMpaaRating":"menaMpaaUnspecified","mibacRating":"mibacUnspecified","mocRating":"mocUnspecified","moctwRating":"moctwUnspecified","mpaaRating":"mpaaUnspecified","mpaatRating":"mpaatUnspecified","mtrcbRating":"mtrcbUnspecified","nbcRating":"nbcUnspecified","nbcplRating":"nbcplUnspecified","nfrcRating":"nfrcUnspecified","nfvcbRating":"nfvcbUnspecified","nkclvRating":"nkclvUnspecified","nmcRating":"nmcUnspecified","oflcRating":"oflcUnspecified","pefilmRating":"pefilmUnspecified","rcnofRating":"rcnofUnspecified","resorteviolenciaRating":"resorteviolenciaUnspecified","rtcRating":"rtcUnspecified","rteRating":"rteUnspecified","russiaRating":"russiaUnspecified","skfilmRating":"skfilmUnspecified","smaisRating":"smaisUnspecified","smsaRating":"smsaUnspecified","tvpgRating":"tvpgUnspecified","ytRating":"ytUnspecified"},"countryRestriction":{"allowed":true,"exception":["string"]},"definition":"sd","dimension":"string","duration":"string","hasCustomThumbnail":true,"licensedContent":true,"projection":"rectangular","regionRestriction":{"allowed":["string"],"blocked":["string"]}},"etag":"string","fileDetails":{"audioStreams":[{"bitrateBps":"string","channelCount":0,"codec":"string","vendor":"string"}],"bitrateBps":"string","container":"string","creationTime":"string","durationMs":"string","fileName":"string","fileSize":"string","fileType":"video","videoStreams":[{"aspectRatio":0,"bitrateBps":"string","codec":"string","frameRateFps":0,"heightPixels":0,"rotation":"none","vendor":"string","widthPixels":0}]},"id":"string","kind":"youtube#video","liveStreamingDetails":{"activeLiveChatId":"string","actualEndTime":"1970-01-01T00:00:00Z","actualStartTime":"1970-01-01T00:00:00Z","concurrentViewers":"string","scheduledEndTime":"1970-01-01T00:00:00Z","scheduledStartTime":"1970-01-01T00:00:00Z"},"localizations":{"property1":{"description":"string","title":"string"},"property2":{"description":"string","title":"string"}},"monetizationDetails":{"access":{"allowed":true,"exception":["string"]}},"player":{"embedHeight":"string","embedHtml":"string","embedWidth":"string"},"processingDetails":{"editorSuggestionsAvailability":"string","fileDetailsAvailability":"string","processingFailureReason":"uploadFailed","processingIssuesAvailability":"string","processingProgress":{"partsProcessed":"string","partsTotal":"string","timeLeftMs":"string"},"processingStatus":"processing","tagSuggestionsAvailability":"string","thumbnailsAvailability":"string"},"projectDetails":{},"recordingDetails":{"location":{"altitude":0,"latitude":0,"longitude":0},"locationDescription":"string","recordingDate":"1970-01-01T00:00:00Z"},"snippet":{"categoryId":"string","channelId":"string","channelTitle":"string","defaultAudioLanguage":"string","defaultLanguage":"string","description":"string","liveBroadcastContent":"none","localized":{"description":"string","title":"string"},"publishedAt":"1970-01-01T00:00:00Z","tags":["string"],"thumbnails":{"high":{"height":0,"url":"string","width":0},"maxres":{"height":0,"url":"string","width":0},"medium":{"height":0,"url":"string","width":0},"standard":{"height":0,"url":"string","width":0}},"title":"string"},"statistics":{"commentCount":"string","dislikeCount":"string","favoriteCount":"string","likeCount":"string","viewCount":"string"},"status":{"embeddable":true,"failureReason":"conversion","license":"youtube","madeForKids":true,"privacyStatus":"public","publicStatsViewable":true,"publishAt":"1970-01-01T00:00:00Z","rejectionReason":"copyright","selfDeclaredMadeForKids":true,"uploadStatus":"uploaded"},"suggestions":{"editorSuggestions":["videoAutoLevels"],"processingErrors":["audioFile"],"processingHints":["nonStreamableMov"],"processingWarnings":["unknownContainer"],"tagSuggestions":[{"categoryRestricts":["string"],"tag":"string"}]},"topicDetails":{"relevantTopicIds":["string"],"topicCategories":["string"],"topicIds":["string"]}}'
```

`POST /youtube/v3/videos`

Inserts a new resource into this collection.

> Body parameter

```json
{
  "ageGating": {
    "alcoholContent": true,
    "restricted": true,
    "videoGameRating": "anyone"
  },
  "contentDetails": {
    "caption": "true",
    "contentRating": {
      "acbRating": "acbUnspecified",
      "agcomRating": "agcomUnspecified",
      "anatelRating": "anatelUnspecified",
      "bbfcRating": "bbfcUnspecified",
      "bfvcRating": "bfvcUnspecified",
      "bmukkRating": "bmukkUnspecified",
      "catvRating": "catvUnspecified",
      "catvfrRating": "catvfrUnspecified",
      "cbfcRating": "cbfcUnspecified",
      "cccRating": "cccUnspecified",
      "cceRating": "cceUnspecified",
      "chfilmRating": "chfilmUnspecified",
      "chvrsRating": "chvrsUnspecified",
      "cicfRating": "cicfUnspecified",
      "cnaRating": "cnaUnspecified",
      "cncRating": "cncUnspecified",
      "csaRating": "csaUnspecified",
      "cscfRating": "cscfUnspecified",
      "czfilmRating": "czfilmUnspecified",
      "djctqRating": "djctqUnspecified",
      "djctqRatingReasons": [
        "djctqRatingReasonUnspecified"
      ],
      "ecbmctRating": "ecbmctUnspecified",
      "eefilmRating": "eefilmUnspecified",
      "egfilmRating": "egfilmUnspecified",
      "eirinRating": "eirinUnspecified",
      "fcbmRating": "fcbmUnspecified",
      "fcoRating": "fcoUnspecified",
      "fmocRating": "fmocUnspecified",
      "fpbRating": "fpbUnspecified",
      "fpbRatingReasons": [
        "fpbRatingReasonUnspecified"
      ],
      "fskRating": "fskUnspecified",
      "grfilmRating": "grfilmUnspecified",
      "icaaRating": "icaaUnspecified",
      "ifcoRating": "ifcoUnspecified",
      "ilfilmRating": "ilfilmUnspecified",
      "incaaRating": "incaaUnspecified",
      "kfcbRating": "kfcbUnspecified",
      "kijkwijzerRating": "kijkwijzerUnspecified",
      "kmrbRating": "kmrbUnspecified",
      "lsfRating": "lsfUnspecified",
      "mccaaRating": "mccaaUnspecified",
      "mccypRating": "mccypUnspecified",
      "mcstRating": "mcstUnspecified",
      "mdaRating": "mdaUnspecified",
      "medietilsynetRating": "medietilsynetUnspecified",
      "mekuRating": "mekuUnspecified",
      "menaMpaaRating": "menaMpaaUnspecified",
      "mibacRating": "mibacUnspecified",
      "mocRating": "mocUnspecified",
      "moctwRating": "moctwUnspecified",
      "mpaaRating": "mpaaUnspecified",
      "mpaatRating": "mpaatUnspecified",
      "mtrcbRating": "mtrcbUnspecified",
      "nbcRating": "nbcUnspecified",
      "nbcplRating": "nbcplUnspecified",
      "nfrcRating": "nfrcUnspecified",
      "nfvcbRating": "nfvcbUnspecified",
      "nkclvRating": "nkclvUnspecified",
      "nmcRating": "nmcUnspecified",
      "oflcRating": "oflcUnspecified",
      "pefilmRating": "pefilmUnspecified",
      "rcnofRating": "rcnofUnspecified",
      "resorteviolenciaRating": "resorteviolenciaUnspecified",
      "rtcRating": "rtcUnspecified",
      "rteRating": "rteUnspecified",
      "russiaRating": "russiaUnspecified",
      "skfilmRating": "skfilmUnspecified",
      "smaisRating": "smaisUnspecified",
      "smsaRating": "smsaUnspecified",
      "tvpgRating": "tvpgUnspecified",
      "ytRating": "ytUnspecified"
    },
    "countryRestriction": {
      "allowed": true,
      "exception": [
        "string"
      ]
    },
    "definition": "sd",
    "dimension": "string",
    "duration": "string",
    "hasCustomThumbnail": true,
    "licensedContent": true,
    "projection": "rectangular",
    "regionRestriction": {
      "allowed": [
        "string"
      ],
      "blocked": [
        "string"
      ]
    }
  },
  "etag": "string",
  "fileDetails": {
    "audioStreams": [
      {
        "bitrateBps": "string",
        "channelCount": 0,
        "codec": "string",
        "vendor": "string"
      }
    ],
    "bitrateBps": "string",
    "container": "string",
    "creationTime": "string",
    "durationMs": "string",
    "fileName": "string",
    "fileSize": "string",
    "fileType": "video",
    "videoStreams": [
      {
        "aspectRatio": 0,
        "bitrateBps": "string",
        "codec": "string",
        "frameRateFps": 0,
        "heightPixels": 0,
        "rotation": "none",
        "vendor": "string",
        "widthPixels": 0
      }
    ]
  },
  "id": "string",
  "kind": "youtube#video",
  "liveStreamingDetails": {
    "activeLiveChatId": "string",
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "concurrentViewers": "string",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z"
  },
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "monetizationDetails": {
    "access": {
      "allowed": true,
      "exception": [
        "string"
      ]
    }
  },
  "player": {
    "embedHeight": "string",
    "embedHtml": "string",
    "embedWidth": "string"
  },
  "processingDetails": {
    "editorSuggestionsAvailability": "string",
    "fileDetailsAvailability": "string",
    "processingFailureReason": "uploadFailed",
    "processingIssuesAvailability": "string",
    "processingProgress": {
      "partsProcessed": "string",
      "partsTotal": "string",
      "timeLeftMs": "string"
    },
    "processingStatus": "processing",
    "tagSuggestionsAvailability": "string",
    "thumbnailsAvailability": "string"
  },
  "projectDetails": {},
  "recordingDetails": {
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "locationDescription": "string",
    "recordingDate": "1970-01-01T00:00:00Z"
  },
  "snippet": {
    "categoryId": "string",
    "channelId": "string",
    "channelTitle": "string",
    "defaultAudioLanguage": "string",
    "defaultLanguage": "string",
    "description": "string",
    "liveBroadcastContent": "none",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "dislikeCount": "string",
    "favoriteCount": "string",
    "likeCount": "string",
    "viewCount": "string"
  },
  "status": {
    "embeddable": true,
    "failureReason": "conversion",
    "license": "youtube",
    "madeForKids": true,
    "privacyStatus": "public",
    "publicStatsViewable": true,
    "publishAt": "1970-01-01T00:00:00Z",
    "rejectionReason": "copyright",
    "selfDeclaredMadeForKids": true,
    "uploadStatus": "uploaded"
  },
  "suggestions": {
    "editorSuggestions": [
      "videoAutoLevels"
    ],
    "processingErrors": [
      "audioFile"
    ],
    "processingHints": [
      "nonStreamableMov"
    ],
    "processingWarnings": [
      "unknownContainer"
    ],
    "tagSuggestions": [
      {
        "categoryRestricts": [
          "string"
        ],
        "tag": "string"
      }
    ]
  },
  "topicDetails": {
    "relevantTopicIds": [
      "string"
    ],
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

<h3 id="youtubevideosinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|true|The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.|
|autoLevels|query|boolean|false|Should auto-levels be applied to the upload.|
|notifySubscribers|query|boolean|false|Notify the channel subscribers about the new video. As default, the notification is enabled.|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
|onBehalfOfContentOwnerChannel|query|string|false|This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.|
|stabilize|query|boolean|false|Should stabilize be applied to the upload.|
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
|body|body|[Video](#schemavideo)|false|none|
|» ageGating|body|[VideoAgeGating](#schemavideoagegating)|false|Age restriction details related to a video. This data can only be retrieved by the video owner.|
|» contentDetails|body|[VideoContentDetails](#schemavideocontentdetails)|false|The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.|
|» etag|body|string|false|Etag of this resource.|
|» fileDetails|body|[VideoFileDetails](#schemavideofiledetails)|false|The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the video.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#video".|
|» liveStreamingDetails|body|[VideoLiveStreamingDetails](#schemavideolivestreamingdetails)|false|The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.|
|» localizations|body|object|false|The localizations object contains localized versions of the basic details about the video, such as its title and description.|
|» » **additionalProperties**|body|[VideoLocalization](#schemavideolocalization)|false|Localized versions of certain video properties (e.g. title).|
|» monetizationDetails|body|[VideoMonetizationDetails](#schemavideomonetizationdetails)|false|The monetizationDetails object encapsulates information about the monetization status of the video.|
|» player|body|[VideoPlayer](#schemavideoplayer)|false|The player object contains information that you would use to play the video in an embedded player.|
|» processingDetails|body|[VideoProcessingDetails](#schemavideoprocessingdetails)|false|The processingDetails object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video. The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.|
|» projectDetails|body|[VideoProjectDetails](#schemavideoprojectdetails)|false|The projectDetails object contains information about the project specific video metadata. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677|
|» recordingDetails|body|[VideoRecordingDetails](#schemavideorecordingdetails)|false|The recordingDetails object encapsulates information about the location, date and address where the video was recorded.|
|» snippet|body|[VideoSnippet](#schemavideosnippet)|false|The snippet object contains basic details about the video, such as its title, description, and category.|
|» statistics|body|[VideoStatistics](#schemavideostatistics)|false|The statistics object contains statistics about the video.|
|» status|body|[VideoStatus](#schemavideostatus)|false|The status object contains information about the video's uploading, processing, and privacy statuses.|
|» suggestions|body|[VideoSuggestions](#schemavideosuggestions)|false|The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.|
|» topicDetails|body|[VideoTopicDetails](#schemavideotopicdetails)|false|The topicDetails object encapsulates information about Freebase topics associated with the video.|

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
  "ageGating": {
    "alcoholContent": true,
    "restricted": true,
    "videoGameRating": "anyone"
  },
  "contentDetails": {
    "caption": "true",
    "contentRating": {
      "acbRating": "acbUnspecified",
      "agcomRating": "agcomUnspecified",
      "anatelRating": "anatelUnspecified",
      "bbfcRating": "bbfcUnspecified",
      "bfvcRating": "bfvcUnspecified",
      "bmukkRating": "bmukkUnspecified",
      "catvRating": "catvUnspecified",
      "catvfrRating": "catvfrUnspecified",
      "cbfcRating": "cbfcUnspecified",
      "cccRating": "cccUnspecified",
      "cceRating": "cceUnspecified",
      "chfilmRating": "chfilmUnspecified",
      "chvrsRating": "chvrsUnspecified",
      "cicfRating": "cicfUnspecified",
      "cnaRating": "cnaUnspecified",
      "cncRating": "cncUnspecified",
      "csaRating": "csaUnspecified",
      "cscfRating": "cscfUnspecified",
      "czfilmRating": "czfilmUnspecified",
      "djctqRating": "djctqUnspecified",
      "djctqRatingReasons": [
        "djctqRatingReasonUnspecified"
      ],
      "ecbmctRating": "ecbmctUnspecified",
      "eefilmRating": "eefilmUnspecified",
      "egfilmRating": "egfilmUnspecified",
      "eirinRating": "eirinUnspecified",
      "fcbmRating": "fcbmUnspecified",
      "fcoRating": "fcoUnspecified",
      "fmocRating": "fmocUnspecified",
      "fpbRating": "fpbUnspecified",
      "fpbRatingReasons": [
        "fpbRatingReasonUnspecified"
      ],
      "fskRating": "fskUnspecified",
      "grfilmRating": "grfilmUnspecified",
      "icaaRating": "icaaUnspecified",
      "ifcoRating": "ifcoUnspecified",
      "ilfilmRating": "ilfilmUnspecified",
      "incaaRating": "incaaUnspecified",
      "kfcbRating": "kfcbUnspecified",
      "kijkwijzerRating": "kijkwijzerUnspecified",
      "kmrbRating": "kmrbUnspecified",
      "lsfRating": "lsfUnspecified",
      "mccaaRating": "mccaaUnspecified",
      "mccypRating": "mccypUnspecified",
      "mcstRating": "mcstUnspecified",
      "mdaRating": "mdaUnspecified",
      "medietilsynetRating": "medietilsynetUnspecified",
      "mekuRating": "mekuUnspecified",
      "menaMpaaRating": "menaMpaaUnspecified",
      "mibacRating": "mibacUnspecified",
      "mocRating": "mocUnspecified",
      "moctwRating": "moctwUnspecified",
      "mpaaRating": "mpaaUnspecified",
      "mpaatRating": "mpaatUnspecified",
      "mtrcbRating": "mtrcbUnspecified",
      "nbcRating": "nbcUnspecified",
      "nbcplRating": "nbcplUnspecified",
      "nfrcRating": "nfrcUnspecified",
      "nfvcbRating": "nfvcbUnspecified",
      "nkclvRating": "nkclvUnspecified",
      "nmcRating": "nmcUnspecified",
      "oflcRating": "oflcUnspecified",
      "pefilmRating": "pefilmUnspecified",
      "rcnofRating": "rcnofUnspecified",
      "resorteviolenciaRating": "resorteviolenciaUnspecified",
      "rtcRating": "rtcUnspecified",
      "rteRating": "rteUnspecified",
      "russiaRating": "russiaUnspecified",
      "skfilmRating": "skfilmUnspecified",
      "smaisRating": "smaisUnspecified",
      "smsaRating": "smsaUnspecified",
      "tvpgRating": "tvpgUnspecified",
      "ytRating": "ytUnspecified"
    },
    "countryRestriction": {
      "allowed": true,
      "exception": [
        "string"
      ]
    },
    "definition": "sd",
    "dimension": "string",
    "duration": "string",
    "hasCustomThumbnail": true,
    "licensedContent": true,
    "projection": "rectangular",
    "regionRestriction": {
      "allowed": [
        "string"
      ],
      "blocked": [
        "string"
      ]
    }
  },
  "etag": "string",
  "fileDetails": {
    "audioStreams": [
      {
        "bitrateBps": "string",
        "channelCount": 0,
        "codec": "string",
        "vendor": "string"
      }
    ],
    "bitrateBps": "string",
    "container": "string",
    "creationTime": "string",
    "durationMs": "string",
    "fileName": "string",
    "fileSize": "string",
    "fileType": "video",
    "videoStreams": [
      {
        "aspectRatio": 0,
        "bitrateBps": "string",
        "codec": "string",
        "frameRateFps": 0,
        "heightPixels": 0,
        "rotation": "none",
        "vendor": "string",
        "widthPixels": 0
      }
    ]
  },
  "id": "string",
  "kind": "youtube#video",
  "liveStreamingDetails": {
    "activeLiveChatId": "string",
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "concurrentViewers": "string",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z"
  },
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "monetizationDetails": {
    "access": {
      "allowed": true,
      "exception": [
        "string"
      ]
    }
  },
  "player": {
    "embedHeight": "string",
    "embedHtml": "string",
    "embedWidth": "string"
  },
  "processingDetails": {
    "editorSuggestionsAvailability": "string",
    "fileDetailsAvailability": "string",
    "processingFailureReason": "uploadFailed",
    "processingIssuesAvailability": "string",
    "processingProgress": {
      "partsProcessed": "string",
      "partsTotal": "string",
      "timeLeftMs": "string"
    },
    "processingStatus": "processing",
    "tagSuggestionsAvailability": "string",
    "thumbnailsAvailability": "string"
  },
  "projectDetails": {},
  "recordingDetails": {
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "locationDescription": "string",
    "recordingDate": "1970-01-01T00:00:00Z"
  },
  "snippet": {
    "categoryId": "string",
    "channelId": "string",
    "channelTitle": "string",
    "defaultAudioLanguage": "string",
    "defaultLanguage": "string",
    "description": "string",
    "liveBroadcastContent": "none",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "dislikeCount": "string",
    "favoriteCount": "string",
    "likeCount": "string",
    "viewCount": "string"
  },
  "status": {
    "embeddable": true,
    "failureReason": "conversion",
    "license": "youtube",
    "madeForKids": true,
    "privacyStatus": "public",
    "publicStatsViewable": true,
    "publishAt": "1970-01-01T00:00:00Z",
    "rejectionReason": "copyright",
    "selfDeclaredMadeForKids": true,
    "uploadStatus": "uploaded"
  },
  "suggestions": {
    "editorSuggestions": [
      "videoAutoLevels"
    ],
    "processingErrors": [
      "audioFile"
    ],
    "processingHints": [
      "nonStreamableMov"
    ],
    "processingWarnings": [
      "unknownContainer"
    ],
    "tagSuggestions": [
      {
        "categoryRestricts": [
          "string"
        ],
        "tag": "string"
      }
    ]
  },
  "topicDetails": {
    "relevantTopicIds": [
      "string"
    ],
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

<h3 id="youtubevideosinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Video](#schemavideo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.upload ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.upload ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.videos.delete

<a id="opIdyoutube.videos.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videos?id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /youtube/v3/videos`

Deletes a resource.

<h3 id="youtubevideosdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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

<h3 id="youtubevideosdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.videos.getRating

<a id="opIdyoutube.videos.getRating"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videos/getRating?id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /youtube/v3/videos/getRating`

Retrieves the ratings that the authorized user gave to a list of specified videos.

<h3 id="youtubevideosgetrating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "rating": "none",
      "videoId": "string"
    }
  ],
  "kind": "youtube#videoGetRatingResponse",
  "visitorId": "string"
}
```

<h3 id="youtubevideosgetrating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[VideoGetRatingResponse](#schemavideogetratingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.videos.rate

<a id="opIdyoutube.videos.rate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/videos/rate?id=string&rating=none' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/videos/rate`

Adds a like or dislike rating to a video or removes a rating from a video.

<h3 id="youtubevideosrate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|rating|query|string|true|none|
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
|rating|none|
|rating|like|
|rating|dislike|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="youtubevideosrate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.videos.reportAbuse

<a id="opIdyoutube.videos.reportAbuse"></a>

> Code samples

```bash
curl https://www.googleapis.com/youtube/v3/videos/reportAbuse \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comments": "string",
    "language": "string",
    "reasonId": "string",
    "secondaryReasonId": "string",
    "videoId": "string"
  }'
```

`POST /youtube/v3/videos/reportAbuse`

Report abuse for a video.

> Body parameter

```json
{
  "comments": "string",
  "language": "string",
  "reasonId": "string",
  "secondaryReasonId": "string",
  "videoId": "string"
}
```

<h3 id="youtubevideosreportabuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[VideoAbuseReport](#schemavideoabusereport)|false|none|
|» comments|body|string|false|Additional comments regarding the abuse report.|
|» language|body|string|false|The language that the content was viewed in.|
|» reasonId|body|string|false|The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.|
|» secondaryReasonId|body|string|false|The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.|
|» videoId|body|string|false|The ID that YouTube uses to uniquely identify the video.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="youtubevideosreportabuse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-watermarks">watermarks</h1>

## youtube.watermarks.set

<a id="opIdyoutube.watermarks.set"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/watermarks/set?channelId=string' \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"imageBytes":"string","imageUrl":"string","position":{"cornerPosition":"topLeft","type":"corner"},"targetChannelId":"string","timing":{"durationMs":"string","offsetMs":"string","type":"offsetFromStart"}}'
```

`POST /youtube/v3/watermarks/set`

Allows upload of watermark image and setting it for a channel.

> Body parameter

```json
{
  "imageBytes": "string",
  "imageUrl": "string",
  "position": {
    "cornerPosition": "topLeft",
    "type": "corner"
  },
  "targetChannelId": "string",
  "timing": {
    "durationMs": "string",
    "offsetMs": "string",
    "type": "offsetFromStart"
  }
}
```

<h3 id="youtubewatermarksset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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
|body|body|[InvideoBranding](#schemainvideobranding)|false|none|
|» imageBytes|body|string(byte)|false|The bytes the uploaded image. Only used in api to youtube communication.|
|» imageUrl|body|string|false|The url of the uploaded image. Only used in apiary to api communication.|
|» position|body|[InvideoPosition](#schemainvideoposition)|false|The spatial position within the video where the branding watermark will be displayed.|
|» targetChannelId|body|string|false|The channel to which this branding links. If not present it defaults to the current channel.|
|» timing|body|[InvideoTiming](#schemainvideotiming)|false|The temporal position within the video where watermark will be displayed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="youtubewatermarksset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.upload ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.upload ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

## youtube.watermarks.unset

<a id="opIdyoutube.watermarks.unset"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/youtube/v3/watermarks/unset?channelId=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /youtube/v3/watermarks/unset`

Allows removal of channel watermark.

<h3 id="youtubewatermarksunset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|query|string|true|none|
|onBehalfOfContentOwner|query|string|false|*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.|
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

<h3 id="youtubewatermarksunset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtube.force-ssl ), Oauth2 ( Scopes: https://www.googleapis.com/auth/youtubepartner ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/youtubepartner )
</aside>

<h1 id="youtube-data-api-v3-youtube">youtube</h1>

## youtube.youtube.v3.updateCommentThreads

<a id="opIdyoutube.youtube.v3.updateCommentThreads"></a>

> Code samples

```bash
curl https://www.googleapis.com/youtube/v3/commentThreads \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "etag": "string",
    "id": "string",
    "kind": "youtube#commentThread",
    "replies": {
      "comments": [
        {
          "etag": "string",
          "id": "string",
          "kind": "youtube#comment",
          "snippet": {
            "authorChannelId": {
              "value": "string"
            },
            "authorChannelUrl": "string",
            "authorDisplayName": "string",
            "authorProfileImageUrl": "string",
            "canRate": true,
            "channelId": "string",
            "likeCount": 0,
            "moderationStatus": "published",
            "parentId": "string",
            "publishedAt": "1970-01-01T00:00:00Z",
            "textDisplay": "string",
            "textOriginal": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "videoId": "string",
            "viewerRating": "none"
          }
        }
      ]
    },
    "snippet": {
      "canReply": true,
      "channelId": "string",
      "isPublic": true,
      "topLevelComment": {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      },
      "totalReplyCount": 0,
      "videoId": "string"
    }
  }'
```

`PUT /youtube/v3/commentThreads`

Updates an existing resource.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#commentThread",
  "replies": {
    "comments": [
      {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      }
    ]
  },
  "snippet": {
    "canReply": true,
    "channelId": "string",
    "isPublic": true,
    "topLevelComment": {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    },
    "totalReplyCount": 0,
    "videoId": "string"
  }
}
```

<h3 id="youtubeyoutubev3updatecommentthreads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|part|query|[string]|false|The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.|
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
|body|body|[CommentThread](#schemacommentthread)|false|none|
|» etag|body|string|false|Etag of this resource.|
|» id|body|string|false|The ID that YouTube uses to uniquely identify the comment thread.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".|
|» replies|body|[CommentThreadReplies](#schemacommentthreadreplies)|false|The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.|
|» snippet|body|[CommentThreadSnippet](#schemacommentthreadsnippet)|false|The snippet object contains basic details about the comment thread and also the top level comment.|

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
  "etag": "string",
  "id": "string",
  "kind": "youtube#commentThread",
  "replies": {
    "comments": [
      {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      }
    ]
  },
  "snippet": {
    "canReply": true,
    "channelId": "string",
    "isPublic": true,
    "topLevelComment": {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    },
    "totalReplyCount": 0,
    "videoId": "string"
  }
}
```

<h3 id="youtubeyoutubev3updatecommentthreads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentThread](#schemacommentthread)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AbuseReport">AbuseReport</h2>
<!-- backwards compatibility -->
<a id="schemaabusereport"></a>
<a id="schema_AbuseReport"></a>
<a id="tocSabusereport"></a>
<a id="tocsabusereport"></a>

```json
{
  "abuseTypes": [
    {
      "id": "string"
    }
  ],
  "description": "string",
  "relatedEntities": [
    {
      "entity": {
        "id": "string",
        "typeId": "string",
        "url": "string"
      }
    }
  ],
  "subject": {
    "id": "string",
    "typeId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abuseTypes|[[AbuseType](#schemaabusetype)]|false|none|none|
|description|string|false|none|none|
|relatedEntities|[[RelatedEntity](#schemarelatedentity)]|false|none|none|
|subject|[Entity](#schemaentity)|false|none|none|

<h2 id="tocS_AbuseType">AbuseType</h2>
<!-- backwards compatibility -->
<a id="schemaabusetype"></a>
<a id="schema_AbuseType"></a>
<a id="tocSabusetype"></a>
<a id="tocsabusetype"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_AccessPolicy">AccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspolicy"></a>
<a id="schema_AccessPolicy"></a>
<a id="tocSaccesspolicy"></a>
<a id="tocsaccesspolicy"></a>

```json
{
  "allowed": true,
  "exception": [
    "string"
  ]
}
```

Rights management policy for YouTube resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|The value of allowed indicates whether the access to the policy is allowed or denied by default.|
|exception|[string]|false|none|A list of region codes that identify countries where the default policy do not apply.|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "contentDetails": {
    "bulletin": {
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "channelItem": {
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "comment": {
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "favorite": {
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "like": {
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "playlistItem": {
      "playlistId": "string",
      "playlistItemId": "string",
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "promotedItem": {
      "adTag": "string",
      "clickTrackingUrl": "string",
      "creativeViewUrl": "string",
      "ctaType": "ctaTypeUnspecified",
      "customCtaButtonText": "string",
      "descriptionText": "string",
      "destinationUrl": "string",
      "forecastingUrl": [
        "string"
      ],
      "impressionUrl": [
        "string"
      ],
      "videoId": "string"
    },
    "recommendation": {
      "reason": "reasonUnspecified",
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "seedResourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "social": {
      "author": "string",
      "imageUrl": "string",
      "referenceUrl": "string",
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "type": "unspecified"
    },
    "subscription": {
      "resourceId": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      }
    },
    "upload": {
      "videoId": "string"
    }
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#activity",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "groupId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string",
    "type": "typeUnspecified"
  }
}
```

An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDetails|[ActivityContentDetails](#schemaactivitycontentdetails)|false|none|The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object's content identifies the rated video.|
|etag|string|false|none|Etag of this resource|
|id|string|false|none|The ID that YouTube uses to uniquely identify the activity.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#activity".|
|snippet|[ActivitySnippet](#schemaactivitysnippet)|false|none|The snippet object contains basic details about the activity, including the activity's type and group ID.|

<h2 id="tocS_ActivityContentDetails">ActivityContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetails"></a>
<a id="schema_ActivityContentDetails"></a>
<a id="tocSactivitycontentdetails"></a>
<a id="tocsactivitycontentdetails"></a>

```json
{
  "bulletin": {
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "channelItem": {
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "comment": {
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "favorite": {
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "like": {
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "playlistItem": {
    "playlistId": "string",
    "playlistItemId": "string",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "promotedItem": {
    "adTag": "string",
    "clickTrackingUrl": "string",
    "creativeViewUrl": "string",
    "ctaType": "ctaTypeUnspecified",
    "customCtaButtonText": "string",
    "descriptionText": "string",
    "destinationUrl": "string",
    "forecastingUrl": [
      "string"
    ],
    "impressionUrl": [
      "string"
    ],
    "videoId": "string"
  },
  "recommendation": {
    "reason": "reasonUnspecified",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "seedResourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "social": {
    "author": "string",
    "imageUrl": "string",
    "referenceUrl": "string",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "type": "unspecified"
  },
  "subscription": {
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    }
  },
  "upload": {
    "videoId": "string"
  }
}
```

Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulletin|[ActivityContentDetailsBulletin](#schemaactivitycontentdetailsbulletin)|false|none|The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.|
|channelItem|[ActivityContentDetailsChannelItem](#schemaactivitycontentdetailschannelitem)|false|none|The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem.|
|comment|[ActivityContentDetailsComment](#schemaactivitycontentdetailscomment)|false|none|The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.|
|favorite|[ActivityContentDetailsFavorite](#schemaactivitycontentdetailsfavorite)|false|none|The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite.|
|like|[ActivityContentDetailsLike](#schemaactivitycontentdetailslike)|false|none|The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like.|
|playlistItem|[ActivityContentDetailsPlaylistItem](#schemaactivitycontentdetailsplaylistitem)|false|none|The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem.|
|promotedItem|[ActivityContentDetailsPromotedItem](#schemaactivitycontentdetailspromoteditem)|false|none|The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem.|
|recommendation|[ActivityContentDetailsRecommendation](#schemaactivitycontentdetailsrecommendation)|false|none|The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.|
|social|[ActivityContentDetailsSocial](#schemaactivitycontentdetailssocial)|false|none|The social object contains details about a social network post. This property is only present if the snippet.type is social.|
|subscription|[ActivityContentDetailsSubscription](#schemaactivitycontentdetailssubscription)|false|none|The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription.|
|upload|[ActivityContentDetailsUpload](#schemaactivitycontentdetailsupload)|false|none|The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.|

<h2 id="tocS_ActivityContentDetailsBulletin">ActivityContentDetailsBulletin</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailsbulletin"></a>
<a id="schema_ActivityContentDetailsBulletin"></a>
<a id="tocSactivitycontentdetailsbulletin"></a>
<a id="tocsactivitycontentdetailsbulletin"></a>

```json
{
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Details about a channel bulletin post.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the resource associated with a bulletin post. @mutable youtube.activities.insert|

<h2 id="tocS_ActivityContentDetailsChannelItem">ActivityContentDetailsChannelItem</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailschannelitem"></a>
<a id="schema_ActivityContentDetailsChannelItem"></a>
<a id="tocSactivitycontentdetailschannelitem"></a>
<a id="tocsactivitycontentdetailschannelitem"></a>

```json
{
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Details about a resource which was added to a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the resource that was added to the channel.|

<h2 id="tocS_ActivityContentDetailsComment">ActivityContentDetailsComment</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailscomment"></a>
<a id="schema_ActivityContentDetailsComment"></a>
<a id="tocSactivitycontentdetailscomment"></a>
<a id="tocsactivitycontentdetailscomment"></a>

```json
{
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Information about a resource that received a comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the resource associated with the comment.|

<h2 id="tocS_ActivityContentDetailsFavorite">ActivityContentDetailsFavorite</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailsfavorite"></a>
<a id="schema_ActivityContentDetailsFavorite"></a>
<a id="tocSactivitycontentdetailsfavorite"></a>
<a id="tocsactivitycontentdetailsfavorite"></a>

```json
{
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Information about a video that was marked as a favorite video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the resource that was marked as a favorite.|

<h2 id="tocS_ActivityContentDetailsLike">ActivityContentDetailsLike</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailslike"></a>
<a id="schema_ActivityContentDetailsLike"></a>
<a id="tocSactivitycontentdetailslike"></a>
<a id="tocsactivitycontentdetailslike"></a>

```json
{
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Information about a resource that received a positive (like) rating.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the rated resource.|

<h2 id="tocS_ActivityContentDetailsPlaylistItem">ActivityContentDetailsPlaylistItem</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailsplaylistitem"></a>
<a id="schema_ActivityContentDetailsPlaylistItem"></a>
<a id="tocSactivitycontentdetailsplaylistitem"></a>
<a id="tocsactivitycontentdetailsplaylistitem"></a>

```json
{
  "playlistId": "string",
  "playlistItemId": "string",
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Information about a new playlist item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playlistId|string|false|none|The value that YouTube uses to uniquely identify the playlist.|
|playlistItemId|string|false|none|ID of the item within the playlist.|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information about the resource that was added to the playlist.|

<h2 id="tocS_ActivityContentDetailsPromotedItem">ActivityContentDetailsPromotedItem</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailspromoteditem"></a>
<a id="schema_ActivityContentDetailsPromotedItem"></a>
<a id="tocSactivitycontentdetailspromoteditem"></a>
<a id="tocsactivitycontentdetailspromoteditem"></a>

```json
{
  "adTag": "string",
  "clickTrackingUrl": "string",
  "creativeViewUrl": "string",
  "ctaType": "ctaTypeUnspecified",
  "customCtaButtonText": "string",
  "descriptionText": "string",
  "destinationUrl": "string",
  "forecastingUrl": [
    "string"
  ],
  "impressionUrl": [
    "string"
  ],
  "videoId": "string"
}
```

Details about a resource which is being promoted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adTag|string|false|none|The URL the client should fetch to request a promoted item.|
|clickTrackingUrl|string|false|none|The URL the client should ping to indicate that the user clicked through on this promoted item.|
|creativeViewUrl|string|false|none|The URL the client should ping to indicate that the user was shown this promoted item.|
|ctaType|string|false|none|The type of call-to-action, a message to the user indicating action that can be taken.|
|customCtaButtonText|string|false|none|The custom call-to-action button text. If specified, it will override the default button text for the cta_type.|
|descriptionText|string|false|none|The text description to accompany the promoted item.|
|destinationUrl|string|false|none|The URL the client should direct the user to, if the user chooses to visit the advertiser's website.|
|forecastingUrl|[string]|false|none|The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.|
|impressionUrl|[string]|false|none|The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify the promoted video.|

#### Enumerated Values

|Property|Value|
|---|---|
|ctaType|ctaTypeUnspecified|
|ctaType|visitAdvertiserSite|

<h2 id="tocS_ActivityContentDetailsRecommendation">ActivityContentDetailsRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailsrecommendation"></a>
<a id="schema_ActivityContentDetailsRecommendation"></a>
<a id="tocSactivitycontentdetailsrecommendation"></a>
<a id="tocsactivitycontentdetailsrecommendation"></a>

```json
{
  "reason": "reasonUnspecified",
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  },
  "seedResourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Information that identifies the recommended resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason that the resource is recommended to the user.|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the recommended resource.|
|seedResourceId|[ResourceId](#schemaresourceid)|false|none|The seedResourceId object contains information about the resource that caused the recommendation.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|reasonUnspecified|
|reason|videoFavorited|
|reason|videoLiked|
|reason|videoWatched|

<h2 id="tocS_ActivityContentDetailsSocial">ActivityContentDetailsSocial</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailssocial"></a>
<a id="schema_ActivityContentDetailsSocial"></a>
<a id="tocSactivitycontentdetailssocial"></a>
<a id="tocsactivitycontentdetailssocial"></a>

```json
{
  "author": "string",
  "imageUrl": "string",
  "referenceUrl": "string",
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  },
  "type": "unspecified"
}
```

Details about a social network post.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|The author of the social network post.|
|imageUrl|string|false|none|An image of the post's author.|
|referenceUrl|string|false|none|The URL of the social network post.|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object encapsulates information that identifies the resource associated with a social network post.|
|type|string|false|none|The name of the social network.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|unspecified|
|type|googlePlus|
|type|facebook|
|type|twitter|

<h2 id="tocS_ActivityContentDetailsSubscription">ActivityContentDetailsSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailssubscription"></a>
<a id="schema_ActivityContentDetailsSubscription"></a>
<a id="tocSactivitycontentdetailssubscription"></a>
<a id="tocsactivitycontentdetailssubscription"></a>

```json
{
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  }
}
```

Information about a channel that a user subscribed to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The resourceId object contains information that identifies the resource that the user subscribed to.|

<h2 id="tocS_ActivityContentDetailsUpload">ActivityContentDetailsUpload</h2>
<!-- backwards compatibility -->
<a id="schemaactivitycontentdetailsupload"></a>
<a id="schema_ActivityContentDetailsUpload"></a>
<a id="tocSactivitycontentdetailsupload"></a>
<a id="tocsactivitycontentdetailsupload"></a>

```json
{
  "videoId": "string"
}
```

Information about the uploaded video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify the uploaded video.|

<h2 id="tocS_ActivityListResponse">ActivityListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivitylistresponse"></a>
<a id="schema_ActivityListResponse"></a>
<a id="tocSactivitylistresponse"></a>
<a id="tocsactivitylistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "bulletin": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "channelItem": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "comment": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "favorite": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "like": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "playlistItem": {
          "playlistId": "string",
          "playlistItemId": "string",
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "promotedItem": {
          "adTag": "string",
          "clickTrackingUrl": "string",
          "creativeViewUrl": "string",
          "ctaType": "ctaTypeUnspecified",
          "customCtaButtonText": "string",
          "descriptionText": "string",
          "destinationUrl": "string",
          "forecastingUrl": [
            "string"
          ],
          "impressionUrl": [
            "string"
          ],
          "videoId": "string"
        },
        "recommendation": {
          "reason": "reasonUnspecified",
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          },
          "seedResourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "social": {
          "author": "string",
          "imageUrl": "string",
          "referenceUrl": "string",
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          },
          "type": "unspecified"
        },
        "subscription": {
          "resourceId": {
            "channelId": "string",
            "kind": "string",
            "playlistId": "string",
            "videoId": "string"
          }
        },
        "upload": {
          "videoId": "string"
        }
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#activity",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "groupId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string",
        "type": "typeUnspecified"
      }
    }
  ],
  "kind": "youtube#activityListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Activity](#schemaactivity)]|false|none|none|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_ActivitySnippet">ActivitySnippet</h2>
<!-- backwards compatibility -->
<a id="schemaactivitysnippet"></a>
<a id="schema_ActivitySnippet"></a>
<a id="tocSactivitysnippet"></a>
<a id="tocsactivitysnippet"></a>

```json
{
  "channelId": "string",
  "channelTitle": "string",
  "description": "string",
  "groupId": "string",
  "publishedAt": "1970-01-01T00:00:00Z",
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string",
  "type": "typeUnspecified"
}
```

Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the channel associated with the activity.|
|channelTitle|string|false|none|Channel title for the channel responsible for this activity|
|description|string|false|none|The description of the resource primarily associated with the activity. @mutable youtube.activities.insert|
|groupId|string|false|none|The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.|
|publishedAt|string(date-time)|false|none|The date and time that the video was uploaded.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The title of the resource primarily associated with the activity.|
|type|string|false|none|The type of activity that the resource describes.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|typeUnspecified|
|type|upload|
|type|like|
|type|favorite|
|type|comment|
|type|subscription|
|type|playlistItem|
|type|recommendation|
|type|bulletin|
|type|social|
|type|channelItem|
|type|promotedItem|

<h2 id="tocS_Caption">Caption</h2>
<!-- backwards compatibility -->
<a id="schemacaption"></a>
<a id="schema_Caption"></a>
<a id="tocScaption"></a>
<a id="tocscaption"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#caption",
  "snippet": {
    "audioTrackType": "unknown",
    "failureReason": "unknownFormat",
    "isAutoSynced": true,
    "isCC": true,
    "isDraft": true,
    "isEasyReader": true,
    "isLarge": true,
    "language": "string",
    "lastUpdated": "1970-01-01T00:00:00Z",
    "name": "string",
    "status": "serving",
    "trackKind": "standard",
    "videoId": "string"
  }
}
```

A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the caption track.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#caption".|
|snippet|[CaptionSnippet](#schemacaptionsnippet)|false|none|The snippet object contains basic details about the caption.|

<h2 id="tocS_CaptionListResponse">CaptionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacaptionlistresponse"></a>
<a id="schema_CaptionListResponse"></a>
<a id="tocScaptionlistresponse"></a>
<a id="tocscaptionlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#caption",
      "snippet": {
        "audioTrackType": "unknown",
        "failureReason": "unknownFormat",
        "isAutoSynced": true,
        "isCC": true,
        "isDraft": true,
        "isEasyReader": true,
        "isLarge": true,
        "language": "string",
        "lastUpdated": "1970-01-01T00:00:00Z",
        "name": "string",
        "status": "serving",
        "trackKind": "standard",
        "videoId": "string"
      }
    }
  ],
  "kind": "youtube#captionListResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Caption](#schemacaption)]|false|none|A list of captions that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_CaptionSnippet">CaptionSnippet</h2>
<!-- backwards compatibility -->
<a id="schemacaptionsnippet"></a>
<a id="schema_CaptionSnippet"></a>
<a id="tocScaptionsnippet"></a>
<a id="tocscaptionsnippet"></a>

```json
{
  "audioTrackType": "unknown",
  "failureReason": "unknownFormat",
  "isAutoSynced": true,
  "isCC": true,
  "isDraft": true,
  "isEasyReader": true,
  "isLarge": true,
  "language": "string",
  "lastUpdated": "1970-01-01T00:00:00Z",
  "name": "string",
  "status": "serving",
  "trackKind": "standard",
  "videoId": "string"
}
```

Basic details about a caption track, such as its language and name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioTrackType|string|false|none|The type of audio track associated with the caption track.|
|failureReason|string|false|none|The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.|
|isAutoSynced|boolean|false|none|Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.|
|isCC|boolean|false|none|Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.|
|isDraft|boolean|false|none|Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update|
|isEasyReader|boolean|false|none|Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.|
|isLarge|boolean|false|none|Indicates whether the caption track uses large text for the vision-impaired. The default value is false.|
|language|string|false|none|The language of the caption track. The property value is a BCP-47 language tag.|
|lastUpdated|string(date-time)|false|none|The date and time when the caption track was last updated.|
|name|string|false|none|The name of the caption track. The name is intended to be visible to the user as an option during playback.|
|status|string|false|none|The caption track's status.|
|trackKind|string|false|none|The caption track's type.|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert|

#### Enumerated Values

|Property|Value|
|---|---|
|audioTrackType|unknown|
|audioTrackType|primary|
|audioTrackType|commentary|
|audioTrackType|descriptive|
|failureReason|unknownFormat|
|failureReason|unsupportedFormat|
|failureReason|processingFailed|
|status|serving|
|status|syncing|
|status|failed|
|trackKind|standard|
|trackKind|ASR|
|trackKind|forced|

<h2 id="tocS_CdnSettings">CdnSettings</h2>
<!-- backwards compatibility -->
<a id="schemacdnsettings"></a>
<a id="schema_CdnSettings"></a>
<a id="tocScdnsettings"></a>
<a id="tocscdnsettings"></a>

```json
{
  "format": "string",
  "frameRate": "30fps",
  "ingestionInfo": {
    "backupIngestionAddress": "string",
    "ingestionAddress": "string",
    "rtmpsBackupIngestionAddress": "string",
    "rtmpsIngestionAddress": "string",
    "streamName": "string"
  },
  "ingestionType": "rtmp",
  "resolution": "240p"
}
```

Brief description of the live stream cdn settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The format of the video stream that you are sending to Youtube. |
|frameRate|string|false|none|The frame rate of the inbound video data.|
|ingestionInfo|[IngestionInfo](#schemaingestioninfo)|false|none|The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.|
|ingestionType|string|false|none| The method or protocol used to transmit the video stream.|
|resolution|string|false|none|The resolution of the inbound video data.|

#### Enumerated Values

|Property|Value|
|---|---|
|frameRate|30fps|
|frameRate|60fps|
|frameRate|variable|
|ingestionType|rtmp|
|ingestionType|dash|
|ingestionType|webrtc|
|ingestionType|hls|
|resolution|240p|
|resolution|360p|
|resolution|480p|
|resolution|720p|
|resolution|1080p|
|resolution|1440p|
|resolution|2160p|
|resolution|variable|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "auditDetails": {
    "communityGuidelinesGoodStanding": true,
    "contentIdClaimsGoodStanding": true,
    "copyrightStrikesGoodStanding": true
  },
  "brandingSettings": {
    "channel": {
      "country": "string",
      "defaultLanguage": "string",
      "defaultTab": "string",
      "description": "string",
      "featuredChannelsTitle": "string",
      "featuredChannelsUrls": [
        "string"
      ],
      "keywords": "string",
      "moderateComments": true,
      "profileColor": "string",
      "showBrowseView": true,
      "showRelatedChannels": true,
      "title": "string",
      "trackingAnalyticsAccountId": "string",
      "unsubscribedTrailer": "string"
    },
    "hints": [
      {
        "property": "string",
        "value": "string"
      }
    ],
    "image": {
      "backgroundImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "bannerExternalUrl": "string",
      "bannerImageUrl": "string",
      "bannerMobileExtraHdImageUrl": "string",
      "bannerMobileHdImageUrl": "string",
      "bannerMobileImageUrl": "string",
      "bannerMobileLowImageUrl": "string",
      "bannerMobileMediumHdImageUrl": "string",
      "bannerTabletExtraHdImageUrl": "string",
      "bannerTabletHdImageUrl": "string",
      "bannerTabletImageUrl": "string",
      "bannerTabletLowImageUrl": "string",
      "bannerTvHighImageUrl": "string",
      "bannerTvImageUrl": "string",
      "bannerTvLowImageUrl": "string",
      "bannerTvMediumImageUrl": "string",
      "largeBrandedBannerImageImapScript": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "largeBrandedBannerImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "smallBrandedBannerImageImapScript": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "smallBrandedBannerImageUrl": {
        "defaultLanguage": {
          "value": "string"
        },
        "localized": [
          {
            "language": "string",
            "value": "string"
          }
        ]
      },
      "trackingImageUrl": "string",
      "watchIconImageUrl": "string"
    },
    "watch": {
      "backgroundColor": "string",
      "featuredPlaylistId": "string",
      "textColor": "string"
    }
  },
  "contentDetails": {
    "relatedPlaylists": {
      "favorites": "string",
      "likes": "string",
      "uploads": "string",
      "watchHistory": "string",
      "watchLater": "string"
    }
  },
  "contentOwnerDetails": {
    "contentOwner": "string",
    "timeLinked": "1970-01-01T00:00:00Z"
  },
  "conversionPings": {
    "pings": [
      {
        "context": "subscribe",
        "conversionUrl": "string"
      }
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channel",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "snippet": {
    "country": "string",
    "customUrl": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "hiddenSubscriberCount": true,
    "subscriberCount": "string",
    "videoCount": "string",
    "viewCount": "string"
  },
  "status": {
    "isLinked": true,
    "longUploadsStatus": "longUploadsUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "selfDeclaredMadeForKids": true
  },
  "topicDetails": {
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

A *channel* resource contains information about a YouTube channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditDetails|[ChannelAuditDetails](#schemachannelauditdetails)|false|none|The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.|
|brandingSettings|[ChannelBrandingSettings](#schemachannelbrandingsettings)|false|none|The brandingSettings object encapsulates information about the branding of the channel.|
|contentDetails|[ChannelContentDetails](#schemachannelcontentdetails)|false|none|The contentDetails object encapsulates information about the channel's content.|
|contentOwnerDetails|[ChannelContentOwnerDetails](#schemachannelcontentownerdetails)|false|none|The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.|
|conversionPings|[ChannelConversionPings](#schemachannelconversionpings)|false|none|The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the channel.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#channel".|
|localizations|object|false|none|Localizations for different languages|
|snippet|[ChannelSnippet](#schemachannelsnippet)|false|none|The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.|
|statistics|[ChannelStatistics](#schemachannelstatistics)|false|none|The statistics object encapsulates statistics for the channel.|
|status|[ChannelStatus](#schemachannelstatus)|false|none|The status object encapsulates information about the privacy status of the channel.|
|topicDetails|[ChannelTopicDetails](#schemachanneltopicdetails)|false|none|The topicDetails object encapsulates information about Freebase topics associated with the channel.|

<h2 id="tocS_ChannelAuditDetails">ChannelAuditDetails</h2>
<!-- backwards compatibility -->
<a id="schemachannelauditdetails"></a>
<a id="schema_ChannelAuditDetails"></a>
<a id="tocSchannelauditdetails"></a>
<a id="tocschannelauditdetails"></a>

```json
{
  "communityGuidelinesGoodStanding": true,
  "contentIdClaimsGoodStanding": true,
  "copyrightStrikesGoodStanding": true
}
```

The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communityGuidelinesGoodStanding|boolean|false|none|Whether or not the channel respects the community guidelines.|
|contentIdClaimsGoodStanding|boolean|false|none|Whether or not the channel has any unresolved claims.|
|copyrightStrikesGoodStanding|boolean|false|none|Whether or not the channel has any copyright strikes.|

<h2 id="tocS_ChannelBannerResource">ChannelBannerResource</h2>
<!-- backwards compatibility -->
<a id="schemachannelbannerresource"></a>
<a id="schema_ChannelBannerResource"></a>
<a id="tocSchannelbannerresource"></a>
<a id="tocschannelbannerresource"></a>

```json
{
  "etag": "string",
  "kind": "youtube#channelBannerResource",
  "url": "string"
}
```

A channel banner returned as the response to a channel_banner.insert call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|none|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".|
|url|string|false|none|The URL of this banner image.|

<h2 id="tocS_ChannelBrandingSettings">ChannelBrandingSettings</h2>
<!-- backwards compatibility -->
<a id="schemachannelbrandingsettings"></a>
<a id="schema_ChannelBrandingSettings"></a>
<a id="tocSchannelbrandingsettings"></a>
<a id="tocschannelbrandingsettings"></a>

```json
{
  "channel": {
    "country": "string",
    "defaultLanguage": "string",
    "defaultTab": "string",
    "description": "string",
    "featuredChannelsTitle": "string",
    "featuredChannelsUrls": [
      "string"
    ],
    "keywords": "string",
    "moderateComments": true,
    "profileColor": "string",
    "showBrowseView": true,
    "showRelatedChannels": true,
    "title": "string",
    "trackingAnalyticsAccountId": "string",
    "unsubscribedTrailer": "string"
  },
  "hints": [
    {
      "property": "string",
      "value": "string"
    }
  ],
  "image": {
    "backgroundImageUrl": {
      "defaultLanguage": {
        "value": "string"
      },
      "localized": [
        {
          "language": "string",
          "value": "string"
        }
      ]
    },
    "bannerExternalUrl": "string",
    "bannerImageUrl": "string",
    "bannerMobileExtraHdImageUrl": "string",
    "bannerMobileHdImageUrl": "string",
    "bannerMobileImageUrl": "string",
    "bannerMobileLowImageUrl": "string",
    "bannerMobileMediumHdImageUrl": "string",
    "bannerTabletExtraHdImageUrl": "string",
    "bannerTabletHdImageUrl": "string",
    "bannerTabletImageUrl": "string",
    "bannerTabletLowImageUrl": "string",
    "bannerTvHighImageUrl": "string",
    "bannerTvImageUrl": "string",
    "bannerTvLowImageUrl": "string",
    "bannerTvMediumImageUrl": "string",
    "largeBrandedBannerImageImapScript": {
      "defaultLanguage": {
        "value": "string"
      },
      "localized": [
        {
          "language": "string",
          "value": "string"
        }
      ]
    },
    "largeBrandedBannerImageUrl": {
      "defaultLanguage": {
        "value": "string"
      },
      "localized": [
        {
          "language": "string",
          "value": "string"
        }
      ]
    },
    "smallBrandedBannerImageImapScript": {
      "defaultLanguage": {
        "value": "string"
      },
      "localized": [
        {
          "language": "string",
          "value": "string"
        }
      ]
    },
    "smallBrandedBannerImageUrl": {
      "defaultLanguage": {
        "value": "string"
      },
      "localized": [
        {
          "language": "string",
          "value": "string"
        }
      ]
    },
    "trackingImageUrl": "string",
    "watchIconImageUrl": "string"
  },
  "watch": {
    "backgroundColor": "string",
    "featuredPlaylistId": "string",
    "textColor": "string"
  }
}
```

Branding properties of a YouTube channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[ChannelSettings](#schemachannelsettings)|false|none|Branding properties for the channel view.|
|hints|[[PropertyValue](#schemapropertyvalue)]|false|none|Additional experimental branding properties.|
|image|[ImageSettings](#schemaimagesettings)|false|none|Branding properties for branding images.|
|watch|[WatchSettings](#schemawatchsettings)|false|none|Branding properties for the watch page.|

<h2 id="tocS_ChannelContentDetails">ChannelContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemachannelcontentdetails"></a>
<a id="schema_ChannelContentDetails"></a>
<a id="tocSchannelcontentdetails"></a>
<a id="tocschannelcontentdetails"></a>

```json
{
  "relatedPlaylists": {
    "favorites": "string",
    "likes": "string",
    "uploads": "string",
    "watchHistory": "string",
    "watchLater": "string"
  }
}
```

Details about the content of a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relatedPlaylists|object|false|none|none|

<h2 id="tocS_ChannelContentOwnerDetails">ChannelContentOwnerDetails</h2>
<!-- backwards compatibility -->
<a id="schemachannelcontentownerdetails"></a>
<a id="schema_ChannelContentOwnerDetails"></a>
<a id="tocSchannelcontentownerdetails"></a>
<a id="tocschannelcontentownerdetails"></a>

```json
{
  "contentOwner": "string",
  "timeLinked": "1970-01-01T00:00:00Z"
}
```

The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentOwner|string|false|none|The ID of the content owner linked to the channel.|
|timeLinked|string(date-time)|false|none|The date and time when the channel was linked to the content owner.|

<h2 id="tocS_ChannelConversionPing">ChannelConversionPing</h2>
<!-- backwards compatibility -->
<a id="schemachannelconversionping"></a>
<a id="schema_ChannelConversionPing"></a>
<a id="tocSchannelconversionping"></a>
<a id="tocschannelconversionping"></a>

```json
{
  "context": "subscribe",
  "conversionUrl": "string"
}
```

Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|false|none|Defines the context of the ping.|
|conversionUrl|string|false|none|The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.|

#### Enumerated Values

|Property|Value|
|---|---|
|context|subscribe|
|context|unsubscribe|
|context|cview|

<h2 id="tocS_ChannelConversionPings">ChannelConversionPings</h2>
<!-- backwards compatibility -->
<a id="schemachannelconversionpings"></a>
<a id="schema_ChannelConversionPings"></a>
<a id="tocSchannelconversionpings"></a>
<a id="tocschannelconversionpings"></a>

```json
{
  "pings": [
    {
      "context": "subscribe",
      "conversionUrl": "string"
    }
  ]
}
```

The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pings|[[ChannelConversionPing](#schemachannelconversionping)]|false|none|Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.|

<h2 id="tocS_ChannelListResponse">ChannelListResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannellistresponse"></a>
<a id="schema_ChannelListResponse"></a>
<a id="tocSchannellistresponse"></a>
<a id="tocschannellistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "auditDetails": {
        "communityGuidelinesGoodStanding": true,
        "contentIdClaimsGoodStanding": true,
        "copyrightStrikesGoodStanding": true
      },
      "brandingSettings": {
        "channel": {
          "country": "string",
          "defaultLanguage": "string",
          "defaultTab": "string",
          "description": "string",
          "featuredChannelsTitle": "string",
          "featuredChannelsUrls": [
            "string"
          ],
          "keywords": "string",
          "moderateComments": true,
          "profileColor": "string",
          "showBrowseView": true,
          "showRelatedChannels": true,
          "title": "string",
          "trackingAnalyticsAccountId": "string",
          "unsubscribedTrailer": "string"
        },
        "hints": [
          {
            "property": "string",
            "value": "string"
          }
        ],
        "image": {
          "backgroundImageUrl": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "bannerExternalUrl": "string",
          "bannerImageUrl": "string",
          "bannerMobileExtraHdImageUrl": "string",
          "bannerMobileHdImageUrl": "string",
          "bannerMobileImageUrl": "string",
          "bannerMobileLowImageUrl": "string",
          "bannerMobileMediumHdImageUrl": "string",
          "bannerTabletExtraHdImageUrl": "string",
          "bannerTabletHdImageUrl": "string",
          "bannerTabletImageUrl": "string",
          "bannerTabletLowImageUrl": "string",
          "bannerTvHighImageUrl": "string",
          "bannerTvImageUrl": "string",
          "bannerTvLowImageUrl": "string",
          "bannerTvMediumImageUrl": "string",
          "largeBrandedBannerImageImapScript": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "largeBrandedBannerImageUrl": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "smallBrandedBannerImageImapScript": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "smallBrandedBannerImageUrl": {
            "defaultLanguage": {
              "value": "string"
            },
            "localized": [
              {
                "language": "string",
                "value": "string"
              }
            ]
          },
          "trackingImageUrl": "string",
          "watchIconImageUrl": "string"
        },
        "watch": {
          "backgroundColor": "string",
          "featuredPlaylistId": "string",
          "textColor": "string"
        }
      },
      "contentDetails": {
        "relatedPlaylists": {
          "favorites": "string",
          "likes": "string",
          "uploads": "string",
          "watchHistory": "string",
          "watchLater": "string"
        }
      },
      "contentOwnerDetails": {
        "contentOwner": "string",
        "timeLinked": "1970-01-01T00:00:00Z"
      },
      "conversionPings": {
        "pings": [
          {
            "context": "subscribe",
            "conversionUrl": "string"
          }
        ]
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#channel",
      "localizations": {
        "property1": {
          "description": "string",
          "title": "string"
        },
        "property2": {
          "description": "string",
          "title": "string"
        }
      },
      "snippet": {
        "country": "string",
        "customUrl": "string",
        "defaultLanguage": "string",
        "description": "string",
        "localized": {
          "description": "string",
          "title": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "statistics": {
        "commentCount": "string",
        "hiddenSubscriberCount": true,
        "subscriberCount": "string",
        "videoCount": "string",
        "viewCount": "string"
      },
      "status": {
        "isLinked": true,
        "longUploadsStatus": "longUploadsUnspecified",
        "madeForKids": true,
        "privacyStatus": "public",
        "selfDeclaredMadeForKids": true
      },
      "topicDetails": {
        "topicCategories": [
          "string"
        ],
        "topicIds": [
          "string"
        ]
      }
    }
  ],
  "kind": "youtube#channelListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Channel](#schemachannel)]|false|none|none|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_ChannelLocalization">ChannelLocalization</h2>
<!-- backwards compatibility -->
<a id="schemachannellocalization"></a>
<a id="schema_ChannelLocalization"></a>
<a id="tocSchannellocalization"></a>
<a id="tocschannellocalization"></a>

```json
{
  "description": "string",
  "title": "string"
}
```

Channel localization setting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The localized strings for channel's description.|
|title|string|false|none|The localized strings for channel's title.|

<h2 id="tocS_ChannelProfileDetails">ChannelProfileDetails</h2>
<!-- backwards compatibility -->
<a id="schemachannelprofiledetails"></a>
<a id="schema_ChannelProfileDetails"></a>
<a id="tocSchannelprofiledetails"></a>
<a id="tocschannelprofiledetails"></a>

```json
{
  "channelId": "string",
  "channelUrl": "string",
  "displayName": "string",
  "profileImageUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The YouTube channel ID.|
|channelUrl|string|false|none|The channel's URL.|
|displayName|string|false|none|The channel's display name.|
|profileImageUrl|string|false|none|The channels's avatar URL.|

<h2 id="tocS_ChannelSection">ChannelSection</h2>
<!-- backwards compatibility -->
<a id="schemachannelsection"></a>
<a id="schema_ChannelSection"></a>
<a id="tocSchannelsection"></a>
<a id="tocschannelsection"></a>

```json
{
  "contentDetails": {
    "channels": [
      "string"
    ],
    "playlists": [
      "string"
    ]
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#channelSection",
  "localizations": {
    "property1": {
      "title": "string"
    },
    "property2": {
      "title": "string"
    }
  },
  "snippet": {
    "channelId": "string",
    "defaultLanguage": "string",
    "localized": {
      "title": "string"
    },
    "position": 0,
    "style": "channelsectionStyleUnspecified",
    "title": "string",
    "type": "channelsectionTypeUndefined"
  },
  "targeting": {
    "countries": [
      "string"
    ],
    "languages": [
      "string"
    ],
    "regions": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDetails|[ChannelSectionContentDetails](#schemachannelsectioncontentdetails)|false|none|The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the channel section.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".|
|localizations|object|false|none|Localizations for different languages|
|snippet|[ChannelSectionSnippet](#schemachannelsectionsnippet)|false|none|The snippet object contains basic details about the channel section, such as its type, style and title.|
|targeting|[ChannelSectionTargeting](#schemachannelsectiontargeting)|false|none|The targeting object contains basic targeting settings about the channel section.|

<h2 id="tocS_ChannelSectionContentDetails">ChannelSectionContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemachannelsectioncontentdetails"></a>
<a id="schema_ChannelSectionContentDetails"></a>
<a id="tocSchannelsectioncontentdetails"></a>
<a id="tocschannelsectioncontentdetails"></a>

```json
{
  "channels": [
    "string"
  ],
  "playlists": [
    "string"
  ]
}
```

Details about a channelsection, including playlists and channels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|The channel ids for type multiple_channels.|
|playlists|[string]|false|none|The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.|

<h2 id="tocS_ChannelSectionListResponse">ChannelSectionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelsectionlistresponse"></a>
<a id="schema_ChannelSectionListResponse"></a>
<a id="tocSchannelsectionlistresponse"></a>
<a id="tocschannelsectionlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "channels": [
          "string"
        ],
        "playlists": [
          "string"
        ]
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#channelSection",
      "localizations": {
        "property1": {
          "title": "string"
        },
        "property2": {
          "title": "string"
        }
      },
      "snippet": {
        "channelId": "string",
        "defaultLanguage": "string",
        "localized": {
          "title": "string"
        },
        "position": 0,
        "style": "channelsectionStyleUnspecified",
        "title": "string",
        "type": "channelsectionTypeUndefined"
      },
      "targeting": {
        "countries": [
          "string"
        ],
        "languages": [
          "string"
        ],
        "regions": [
          "string"
        ]
      }
    }
  ],
  "kind": "youtube#channelSectionListResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[ChannelSection](#schemachannelsection)]|false|none|A list of ChannelSections that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_ChannelSectionLocalization">ChannelSectionLocalization</h2>
<!-- backwards compatibility -->
<a id="schemachannelsectionlocalization"></a>
<a id="schema_ChannelSectionLocalization"></a>
<a id="tocSchannelsectionlocalization"></a>
<a id="tocschannelsectionlocalization"></a>

```json
{
  "title": "string"
}
```

ChannelSection localization setting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|The localized strings for channel section's title.|

<h2 id="tocS_ChannelSectionSnippet">ChannelSectionSnippet</h2>
<!-- backwards compatibility -->
<a id="schemachannelsectionsnippet"></a>
<a id="schema_ChannelSectionSnippet"></a>
<a id="tocSchannelsectionsnippet"></a>
<a id="tocschannelsectionsnippet"></a>

```json
{
  "channelId": "string",
  "defaultLanguage": "string",
  "localized": {
    "title": "string"
  },
  "position": 0,
  "style": "channelsectionStyleUnspecified",
  "title": "string",
  "type": "channelsectionTypeUndefined"
}
```

Basic details about a channel section, including title, style and position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the channel that published the channel section.|
|defaultLanguage|string|false|none|The language of the channel section's default title and description.|
|localized|[ChannelSectionLocalization](#schemachannelsectionlocalization)|false|none|Localized title, read-only.|
|position|integer(uint32)|false|none|The position of the channel section in the channel.|
|style|string|false|none|The style of the channel section.|
|title|string|false|none|The channel section's title for multiple_playlists and multiple_channels.|
|type|string|false|none|The type of the channel section.|

#### Enumerated Values

|Property|Value|
|---|---|
|style|channelsectionStyleUnspecified|
|style|horizontalRow|
|style|verticalList|
|type|channelsectionTypeUndefined|
|type|singlePlaylist|
|type|multiplePlaylists|
|type|popularUploads|
|type|recentUploads|
|type|likes|
|type|allPlaylists|
|type|likedPlaylists|
|type|recentPosts|
|type|recentActivity|
|type|liveEvents|
|type|upcomingEvents|
|type|completedEvents|
|type|multipleChannels|
|type|postedVideos|
|type|postedPlaylists|
|type|subscriptions|

<h2 id="tocS_ChannelSectionTargeting">ChannelSectionTargeting</h2>
<!-- backwards compatibility -->
<a id="schemachannelsectiontargeting"></a>
<a id="schema_ChannelSectionTargeting"></a>
<a id="tocSchannelsectiontargeting"></a>
<a id="tocschannelsectiontargeting"></a>

```json
{
  "countries": [
    "string"
  ],
  "languages": [
    "string"
  ],
  "regions": [
    "string"
  ]
}
```

ChannelSection targeting setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[string]|false|none|The country the channel section is targeting.|
|languages|[string]|false|none|The language the channel section is targeting.|
|regions|[string]|false|none|The region the channel section is targeting.|

<h2 id="tocS_ChannelSettings">ChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemachannelsettings"></a>
<a id="schema_ChannelSettings"></a>
<a id="tocSchannelsettings"></a>
<a id="tocschannelsettings"></a>

```json
{
  "country": "string",
  "defaultLanguage": "string",
  "defaultTab": "string",
  "description": "string",
  "featuredChannelsTitle": "string",
  "featuredChannelsUrls": [
    "string"
  ],
  "keywords": "string",
  "moderateComments": true,
  "profileColor": "string",
  "showBrowseView": true,
  "showRelatedChannels": true,
  "title": "string",
  "trackingAnalyticsAccountId": "string",
  "unsubscribedTrailer": "string"
}
```

Branding properties for the channel view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The country of the channel.|
|defaultLanguage|string|false|none|none|
|defaultTab|string|false|none|Which content tab users should see when viewing the channel.|
|description|string|false|none|Specifies the channel description.|
|featuredChannelsTitle|string|false|none|Title for the featured channels tab.|
|featuredChannelsUrls|[string]|false|none|The list of featured channels.|
|keywords|string|false|none|Lists keywords associated with the channel, comma-separated.|
|moderateComments|boolean|false|none|Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.|
|profileColor|string|false|none|A prominent color that can be rendered on this channel page.|
|showBrowseView|boolean|false|none|Whether the tab to browse the videos should be displayed.|
|showRelatedChannels|boolean|false|none|Whether related channels should be proposed.|
|title|string|false|none|Specifies the channel title.|
|trackingAnalyticsAccountId|string|false|none|The ID for a Google Analytics account to track and measure traffic to the channels.|
|unsubscribedTrailer|string|false|none|The trailer of the channel, for users that are not subscribers.|

<h2 id="tocS_ChannelSnippet">ChannelSnippet</h2>
<!-- backwards compatibility -->
<a id="schemachannelsnippet"></a>
<a id="schema_ChannelSnippet"></a>
<a id="tocSchannelsnippet"></a>
<a id="tocschannelsnippet"></a>

```json
{
  "country": "string",
  "customUrl": "string",
  "defaultLanguage": "string",
  "description": "string",
  "localized": {
    "description": "string",
    "title": "string"
  },
  "publishedAt": "1970-01-01T00:00:00Z",
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic details about a channel, including title, description and thumbnails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The country of the channel.|
|customUrl|string|false|none|The custom url of the channel.|
|defaultLanguage|string|false|none|The language of the channel's default title and description.|
|description|string|false|none|The description of the channel.|
|localized|[ChannelLocalization](#schemachannellocalization)|false|none|Localized title and description, read-only.|
|publishedAt|string(date-time)|false|none|The date and time that the channel was created.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. When displaying thumbnails in your application, make sure that your code uses the image URLs exactly as they are returned in API responses. For example, your application should not use the http domain instead of the https domain in a URL returned in an API response. Beginning in July 2018, channel thumbnail URLs will only be available in the https domain, which is how the URLs appear in API responses. After that time, you might see broken images in your application if it tries to load YouTube images from the http domain. Thumbnail images might be empty for newly created channels and might take up to one day to populate.|
|title|string|false|none|The channel's title.|

<h2 id="tocS_ChannelStatistics">ChannelStatistics</h2>
<!-- backwards compatibility -->
<a id="schemachannelstatistics"></a>
<a id="schema_ChannelStatistics"></a>
<a id="tocSchannelstatistics"></a>
<a id="tocschannelstatistics"></a>

```json
{
  "commentCount": "string",
  "hiddenSubscriberCount": true,
  "subscriberCount": "string",
  "videoCount": "string",
  "viewCount": "string"
}
```

Statistics about a channel: number of subscribers, number of videos in the channel, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentCount|string(uint64)|false|none|The number of comments for the channel.|
|hiddenSubscriberCount|boolean|false|none|Whether or not the number of subscribers is shown for this user.|
|subscriberCount|string(uint64)|false|none|The number of subscribers that the channel has.|
|videoCount|string(uint64)|false|none|The number of videos uploaded to the channel.|
|viewCount|string(uint64)|false|none|The number of times the channel has been viewed.|

<h2 id="tocS_ChannelStatus">ChannelStatus</h2>
<!-- backwards compatibility -->
<a id="schemachannelstatus"></a>
<a id="schema_ChannelStatus"></a>
<a id="tocSchannelstatus"></a>
<a id="tocschannelstatus"></a>

```json
{
  "isLinked": true,
  "longUploadsStatus": "longUploadsUnspecified",
  "madeForKids": true,
  "privacyStatus": "public",
  "selfDeclaredMadeForKids": true
}
```

JSON template for the status part of a channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isLinked|boolean|false|none|If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.|
|longUploadsStatus|string|false|none|The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.|
|madeForKids|boolean|false|none|none|
|privacyStatus|string|false|none|Privacy status of the channel.|
|selfDeclaredMadeForKids|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|longUploadsStatus|longUploadsUnspecified|
|longUploadsStatus|allowed|
|longUploadsStatus|eligible|
|longUploadsStatus|disallowed|
|privacyStatus|public|
|privacyStatus|unlisted|
|privacyStatus|private|

<h2 id="tocS_ChannelToStoreLinkDetails">ChannelToStoreLinkDetails</h2>
<!-- backwards compatibility -->
<a id="schemachanneltostorelinkdetails"></a>
<a id="schema_ChannelToStoreLinkDetails"></a>
<a id="tocSchanneltostorelinkdetails"></a>
<a id="tocschanneltostorelinkdetails"></a>

```json
{
  "merchantId": "string",
  "storeName": "string",
  "storeUrl": "string"
}
```

Information specific to a store on a merchandising platform linked to a YouTube channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantId|string(uint64)|false|none|Google Merchant Center id of the store.|
|storeName|string|false|none|Name of the store.|
|storeUrl|string|false|none|Landing page of the store.|

<h2 id="tocS_ChannelTopicDetails">ChannelTopicDetails</h2>
<!-- backwards compatibility -->
<a id="schemachanneltopicdetails"></a>
<a id="schema_ChannelTopicDetails"></a>
<a id="tocSchanneltopicdetails"></a>
<a id="tocschanneltopicdetails"></a>

```json
{
  "topicCategories": [
    "string"
  ],
  "topicIds": [
    "string"
  ]
}
```

Freebase topic information related to the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topicCategories|[string]|false|none|A list of Wikipedia URLs that describe the channel's content.|
|topicIds|[string]|false|none|A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#comment",
  "snippet": {
    "authorChannelId": {
      "value": "string"
    },
    "authorChannelUrl": "string",
    "authorDisplayName": "string",
    "authorProfileImageUrl": "string",
    "canRate": true,
    "channelId": "string",
    "likeCount": 0,
    "moderationStatus": "published",
    "parentId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "textDisplay": "string",
    "textOriginal": "string",
    "updatedAt": "1970-01-01T00:00:00Z",
    "videoId": "string",
    "viewerRating": "none"
  }
}
```

A *comment* represents a single YouTube comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the comment.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#comment".|
|snippet|[CommentSnippet](#schemacommentsnippet)|false|none|The snippet object contains basic details about the comment.|

<h2 id="tocS_CommentListResponse">CommentListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommentlistresponse"></a>
<a id="schema_CommentListResponse"></a>
<a id="tocScommentlistresponse"></a>
<a id="tocscommentlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    }
  ],
  "kind": "youtube#commentListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Comment](#schemacomment)]|false|none|A list of comments that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_CommentSnippet">CommentSnippet</h2>
<!-- backwards compatibility -->
<a id="schemacommentsnippet"></a>
<a id="schema_CommentSnippet"></a>
<a id="tocScommentsnippet"></a>
<a id="tocscommentsnippet"></a>

```json
{
  "authorChannelId": {
    "value": "string"
  },
  "authorChannelUrl": "string",
  "authorDisplayName": "string",
  "authorProfileImageUrl": "string",
  "canRate": true,
  "channelId": "string",
  "likeCount": 0,
  "moderationStatus": "published",
  "parentId": "string",
  "publishedAt": "1970-01-01T00:00:00Z",
  "textDisplay": "string",
  "textOriginal": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "videoId": "string",
  "viewerRating": "none"
}
```

Basic details about a comment, such as its author and text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorChannelId|[CommentSnippetAuthorChannelId](#schemacommentsnippetauthorchannelid)|false|none|The id of the author's YouTube channel, if any.|
|authorChannelUrl|string|false|none|Link to the author's YouTube channel, if any.|
|authorDisplayName|string|false|none|The name of the user who posted the comment.|
|authorProfileImageUrl|string|false|none|The URL for the avatar of the user who posted the comment.|
|canRate|boolean|false|none|Whether the current viewer can rate this comment.|
|channelId|string|false|none|The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel.|
|likeCount|integer(uint32)|false|none|The total number of likes this comment has received.|
|moderationStatus|string|false|none|The comment's moderation status. Will not be set if the comments were requested through the id filter.|
|parentId|string|false|none|The unique id of the parent comment, only set for replies.|
|publishedAt|string(date-time)|false|none|The date and time when the comment was originally published.|
|textDisplay|string|false|none|The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.|
|textOriginal|string|false|none|The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.|
|updatedAt|string(date-time)|false|none|The date and time when the comment was last updated.|
|videoId|string|false|none|The ID of the video the comment refers to, if any.|
|viewerRating|string|false|none|The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.|

#### Enumerated Values

|Property|Value|
|---|---|
|moderationStatus|published|
|moderationStatus|heldForReview|
|moderationStatus|likelySpam|
|moderationStatus|rejected|
|viewerRating|none|
|viewerRating|like|
|viewerRating|dislike|

<h2 id="tocS_CommentSnippetAuthorChannelId">CommentSnippetAuthorChannelId</h2>
<!-- backwards compatibility -->
<a id="schemacommentsnippetauthorchannelid"></a>
<a id="schema_CommentSnippetAuthorChannelId"></a>
<a id="tocScommentsnippetauthorchannelid"></a>
<a id="tocscommentsnippetauthorchannelid"></a>

```json
{
  "value": "string"
}
```

The id of the author's YouTube channel, if any.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|

<h2 id="tocS_CommentThread">CommentThread</h2>
<!-- backwards compatibility -->
<a id="schemacommentthread"></a>
<a id="schema_CommentThread"></a>
<a id="tocScommentthread"></a>
<a id="tocscommentthread"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#commentThread",
  "replies": {
    "comments": [
      {
        "etag": "string",
        "id": "string",
        "kind": "youtube#comment",
        "snippet": {
          "authorChannelId": {
            "value": "string"
          },
          "authorChannelUrl": "string",
          "authorDisplayName": "string",
          "authorProfileImageUrl": "string",
          "canRate": true,
          "channelId": "string",
          "likeCount": 0,
          "moderationStatus": "published",
          "parentId": "string",
          "publishedAt": "1970-01-01T00:00:00Z",
          "textDisplay": "string",
          "textOriginal": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "videoId": "string",
          "viewerRating": "none"
        }
      }
    ]
  },
  "snippet": {
    "canReply": true,
    "channelId": "string",
    "isPublic": true,
    "topLevelComment": {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    },
    "totalReplyCount": 0,
    "videoId": "string"
  }
}
```

A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the comment thread.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".|
|replies|[CommentThreadReplies](#schemacommentthreadreplies)|false|none|The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.|
|snippet|[CommentThreadSnippet](#schemacommentthreadsnippet)|false|none|The snippet object contains basic details about the comment thread and also the top level comment.|

<h2 id="tocS_CommentThreadListResponse">CommentThreadListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadlistresponse"></a>
<a id="schema_CommentThreadListResponse"></a>
<a id="tocScommentthreadlistresponse"></a>
<a id="tocscommentthreadlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#commentThread",
      "replies": {
        "comments": [
          {
            "etag": "string",
            "id": "string",
            "kind": "youtube#comment",
            "snippet": {
              "authorChannelId": {
                "value": "string"
              },
              "authorChannelUrl": "string",
              "authorDisplayName": "string",
              "authorProfileImageUrl": "string",
              "canRate": true,
              "channelId": "string",
              "likeCount": 0,
              "moderationStatus": "published",
              "parentId": "string",
              "publishedAt": "1970-01-01T00:00:00Z",
              "textDisplay": "string",
              "textOriginal": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "videoId": "string",
              "viewerRating": "none"
            }
          }
        ]
      },
      "snippet": {
        "canReply": true,
        "channelId": "string",
        "isPublic": true,
        "topLevelComment": {
          "etag": "string",
          "id": "string",
          "kind": "youtube#comment",
          "snippet": {
            "authorChannelId": {
              "value": "string"
            },
            "authorChannelUrl": "string",
            "authorDisplayName": "string",
            "authorProfileImageUrl": "string",
            "canRate": true,
            "channelId": "string",
            "likeCount": 0,
            "moderationStatus": "published",
            "parentId": "string",
            "publishedAt": "1970-01-01T00:00:00Z",
            "textDisplay": "string",
            "textOriginal": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "videoId": "string",
            "viewerRating": "none"
          }
        },
        "totalReplyCount": 0,
        "videoId": "string"
      }
    }
  ],
  "kind": "youtube#commentThreadListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[CommentThread](#schemacommentthread)]|false|none|A list of comment threads that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_CommentThreadReplies">CommentThreadReplies</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadreplies"></a>
<a id="schema_CommentThreadReplies"></a>
<a id="tocScommentthreadreplies"></a>
<a id="tocscommentthreadreplies"></a>

```json
{
  "comments": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#comment",
      "snippet": {
        "authorChannelId": {
          "value": "string"
        },
        "authorChannelUrl": "string",
        "authorDisplayName": "string",
        "authorProfileImageUrl": "string",
        "canRate": true,
        "channelId": "string",
        "likeCount": 0,
        "moderationStatus": "published",
        "parentId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "textDisplay": "string",
        "textOriginal": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "videoId": "string",
        "viewerRating": "none"
      }
    }
  ]
}
```

Comments written in (direct or indirect) reply to the top level comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[[Comment](#schemacomment)]|false|none|A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.|

<h2 id="tocS_CommentThreadSnippet">CommentThreadSnippet</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadsnippet"></a>
<a id="schema_CommentThreadSnippet"></a>
<a id="tocScommentthreadsnippet"></a>
<a id="tocscommentthreadsnippet"></a>

```json
{
  "canReply": true,
  "channelId": "string",
  "isPublic": true,
  "topLevelComment": {
    "etag": "string",
    "id": "string",
    "kind": "youtube#comment",
    "snippet": {
      "authorChannelId": {
        "value": "string"
      },
      "authorChannelUrl": "string",
      "authorDisplayName": "string",
      "authorProfileImageUrl": "string",
      "canRate": true,
      "channelId": "string",
      "likeCount": 0,
      "moderationStatus": "published",
      "parentId": "string",
      "publishedAt": "1970-01-01T00:00:00Z",
      "textDisplay": "string",
      "textOriginal": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "videoId": "string",
      "viewerRating": "none"
    }
  },
  "totalReplyCount": 0,
  "videoId": "string"
}
```

Basic details about a comment thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReply|boolean|false|none|Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.|
|channelId|string|false|none|The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn't set the comments refer to the channel itself.|
|isPublic|boolean|false|none|Whether the thread (and therefore all its comments) is visible to all YouTube users.|
|topLevelComment|[Comment](#schemacomment)|false|none|The top level comment of this thread.|
|totalReplyCount|integer(uint32)|false|none|The total number of replies (not including the top level comment).|
|videoId|string|false|none|The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.|

<h2 id="tocS_ContentRating">ContentRating</h2>
<!-- backwards compatibility -->
<a id="schemacontentrating"></a>
<a id="schema_ContentRating"></a>
<a id="tocScontentrating"></a>
<a id="tocscontentrating"></a>

```json
{
  "acbRating": "acbUnspecified",
  "agcomRating": "agcomUnspecified",
  "anatelRating": "anatelUnspecified",
  "bbfcRating": "bbfcUnspecified",
  "bfvcRating": "bfvcUnspecified",
  "bmukkRating": "bmukkUnspecified",
  "catvRating": "catvUnspecified",
  "catvfrRating": "catvfrUnspecified",
  "cbfcRating": "cbfcUnspecified",
  "cccRating": "cccUnspecified",
  "cceRating": "cceUnspecified",
  "chfilmRating": "chfilmUnspecified",
  "chvrsRating": "chvrsUnspecified",
  "cicfRating": "cicfUnspecified",
  "cnaRating": "cnaUnspecified",
  "cncRating": "cncUnspecified",
  "csaRating": "csaUnspecified",
  "cscfRating": "cscfUnspecified",
  "czfilmRating": "czfilmUnspecified",
  "djctqRating": "djctqUnspecified",
  "djctqRatingReasons": [
    "djctqRatingReasonUnspecified"
  ],
  "ecbmctRating": "ecbmctUnspecified",
  "eefilmRating": "eefilmUnspecified",
  "egfilmRating": "egfilmUnspecified",
  "eirinRating": "eirinUnspecified",
  "fcbmRating": "fcbmUnspecified",
  "fcoRating": "fcoUnspecified",
  "fmocRating": "fmocUnspecified",
  "fpbRating": "fpbUnspecified",
  "fpbRatingReasons": [
    "fpbRatingReasonUnspecified"
  ],
  "fskRating": "fskUnspecified",
  "grfilmRating": "grfilmUnspecified",
  "icaaRating": "icaaUnspecified",
  "ifcoRating": "ifcoUnspecified",
  "ilfilmRating": "ilfilmUnspecified",
  "incaaRating": "incaaUnspecified",
  "kfcbRating": "kfcbUnspecified",
  "kijkwijzerRating": "kijkwijzerUnspecified",
  "kmrbRating": "kmrbUnspecified",
  "lsfRating": "lsfUnspecified",
  "mccaaRating": "mccaaUnspecified",
  "mccypRating": "mccypUnspecified",
  "mcstRating": "mcstUnspecified",
  "mdaRating": "mdaUnspecified",
  "medietilsynetRating": "medietilsynetUnspecified",
  "mekuRating": "mekuUnspecified",
  "menaMpaaRating": "menaMpaaUnspecified",
  "mibacRating": "mibacUnspecified",
  "mocRating": "mocUnspecified",
  "moctwRating": "moctwUnspecified",
  "mpaaRating": "mpaaUnspecified",
  "mpaatRating": "mpaatUnspecified",
  "mtrcbRating": "mtrcbUnspecified",
  "nbcRating": "nbcUnspecified",
  "nbcplRating": "nbcplUnspecified",
  "nfrcRating": "nfrcUnspecified",
  "nfvcbRating": "nfvcbUnspecified",
  "nkclvRating": "nkclvUnspecified",
  "nmcRating": "nmcUnspecified",
  "oflcRating": "oflcUnspecified",
  "pefilmRating": "pefilmUnspecified",
  "rcnofRating": "rcnofUnspecified",
  "resorteviolenciaRating": "resorteviolenciaUnspecified",
  "rtcRating": "rtcUnspecified",
  "rteRating": "rteUnspecified",
  "russiaRating": "russiaUnspecified",
  "skfilmRating": "skfilmUnspecified",
  "smaisRating": "smaisUnspecified",
  "smsaRating": "smsaUnspecified",
  "tvpgRating": "tvpgUnspecified",
  "ytRating": "ytUnspecified"
}
```

Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acbRating|string|false|none|The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming.|
|agcomRating|string|false|none|The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).|
|anatelRating|string|false|none|The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.|
|bbfcRating|string|false|none|The video's British Board of Film Classification (BBFC) rating.|
|bfvcRating|string|false|none|The video's rating from Thailand's Board of Film and Video Censors.|
|bmukkRating|string|false|none|The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).|
|catvRating|string|false|none|Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.|
|catvfrRating|string|false|none|The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.|
|cbfcRating|string|false|none|The video's Central Board of Film Certification (CBFC - India) rating.|
|cccRating|string|false|none|The video's Consejo de Calificación Cinematográfica (Chile) rating.|
|cceRating|string|false|none|The video's rating from Portugal's Comissão de Classificação de Espect´culos.|
|chfilmRating|string|false|none|The video's rating in Switzerland.|
|chvrsRating|string|false|none|The video's Canadian Home Video Rating System (CHVRS) rating.|
|cicfRating|string|false|none|The video's rating from the Commission de Contrôle des Films (Belgium).|
|cnaRating|string|false|none|The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).|
|cncRating|string|false|none|Rating system in France - Commission de classification cinematographique|
|csaRating|string|false|none|The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content.|
|cscfRating|string|false|none|The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).|
|czfilmRating|string|false|none|The video's rating in the Czech Republic.|
|djctqRating|string|false|none|The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.|
|djctqRatingReasons|[string]|false|none|Reasons that explain why the video received its DJCQT (Brazil) rating.|
|ecbmctRating|string|false|none|Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism|
|eefilmRating|string|false|none|The video's rating in Estonia.|
|egfilmRating|string|false|none|The video's rating in Egypt.|
|eirinRating|string|false|none|The video's Eirin (映倫) rating. Eirin is the Japanese rating system.|
|fcbmRating|string|false|none|The video's rating from Malaysia's Film Censorship Board.|
|fcoRating|string|false|none|The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.|
|fmocRating|string|false|none|This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.|
|fpbRating|string|false|none|The video's rating from South Africa's Film and Publication Board.|
|fpbRatingReasons|[string]|false|none|Reasons that explain why the video received its FPB (South Africa) rating.|
|fskRating|string|false|none|The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.|
|grfilmRating|string|false|none|The video's rating in Greece.|
|icaaRating|string|false|none|The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.|
|ifcoRating|string|false|none|The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.|
|ilfilmRating|string|false|none|The video's rating in Israel.|
|incaaRating|string|false|none|The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.|
|kfcbRating|string|false|none|The video's rating from the Kenya Film Classification Board.|
|kijkwijzerRating|string|false|none|The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands).|
|kmrbRating|string|false|none|The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.|
|lsfRating|string|false|none|The video's rating from Indonesia's Lembaga Sensor Film.|
|mccaaRating|string|false|none|The video's rating from Malta's Film Age-Classification Board.|
|mccypRating|string|false|none|The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.|
|mcstRating|string|false|none|The video's rating system for Vietnam - MCST|
|mdaRating|string|false|none|The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).|
|medietilsynetRating|string|false|none|The video's rating from Medietilsynet, the Norwegian Media Authority.|
|mekuRating|string|false|none|The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).|
|menaMpaaRating|string|false|none|The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details.|
|mibacRating|string|false|none|The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).|
|mocRating|string|false|none|The video's Ministerio de Cultura (Colombia) rating.|
|moctwRating|string|false|none|The video's rating from Taiwan's Ministry of Culture (文化部).|
|mpaaRating|string|false|none|The video's Motion Picture Association of America (MPAA) rating.|
|mpaatRating|string|false|none|The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.|
|mtrcbRating|string|false|none|The video's rating from the Movie and Television Review and Classification Board (Philippines).|
|nbcRating|string|false|none|The video's rating from the Maldives National Bureau of Classification.|
|nbcplRating|string|false|none|The video's rating in Poland.|
|nfrcRating|string|false|none|The video's rating from the Bulgarian National Film Center.|
|nfvcbRating|string|false|none|The video's rating from Nigeria's National Film and Video Censors Board.|
|nkclvRating|string|false|none|The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).|
|nmcRating|string|false|none|The National Media Council ratings system for United Arab Emirates.|
|oflcRating|string|false|none|The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.|
|pefilmRating|string|false|none|The video's rating in Peru.|
|rcnofRating|string|false|none|The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.|
|resorteviolenciaRating|string|false|none|The video's rating in Venezuela.|
|rtcRating|string|false|none|The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.|
|rteRating|string|false|none|The video's rating from Ireland's Raidió Teilifís Éireann.|
|russiaRating|string|false|none|The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.|
|skfilmRating|string|false|none|The video's rating in Slovakia.|
|smaisRating|string|false|none|The video's rating in Iceland.|
|smsaRating|string|false|none|The video's rating from Statens medieråd (Sweden's National Media Council).|
|tvpgRating|string|false|none|The video's TV Parental Guidelines (TVPG) rating.|
|ytRating|string|false|none|A rating that YouTube uses to identify age-restricted content.|

#### Enumerated Values

|Property|Value|
|---|---|
|acbRating|acbUnspecified|
|acbRating|acbE|
|acbRating|acbP|
|acbRating|acbC|
|acbRating|acbG|
|acbRating|acbPg|
|acbRating|acbM|
|acbRating|acbMa15plus|
|acbRating|acbR18plus|
|acbRating|acbUnrated|
|agcomRating|agcomUnspecified|
|agcomRating|agcomT|
|agcomRating|agcomVm14|
|agcomRating|agcomVm18|
|agcomRating|agcomUnrated|
|anatelRating|anatelUnspecified|
|anatelRating|anatelF|
|anatelRating|anatelI|
|anatelRating|anatelI7|
|anatelRating|anatelI10|
|anatelRating|anatelI12|
|anatelRating|anatelR|
|anatelRating|anatelA|
|anatelRating|anatelUnrated|
|bbfcRating|bbfcUnspecified|
|bbfcRating|bbfcU|
|bbfcRating|bbfcPg|
|bbfcRating|bbfc12a|
|bbfcRating|bbfc12|
|bbfcRating|bbfc15|
|bbfcRating|bbfc18|
|bbfcRating|bbfcR18|
|bbfcRating|bbfcUnrated|
|bfvcRating|bfvcUnspecified|
|bfvcRating|bfvcG|
|bfvcRating|bfvcE|
|bfvcRating|bfvc13|
|bfvcRating|bfvc15|
|bfvcRating|bfvc18|
|bfvcRating|bfvc20|
|bfvcRating|bfvcB|
|bfvcRating|bfvcUnrated|
|bmukkRating|bmukkUnspecified|
|bmukkRating|bmukkAa|
|bmukkRating|bmukk6|
|bmukkRating|bmukk8|
|bmukkRating|bmukk10|
|bmukkRating|bmukk12|
|bmukkRating|bmukk14|
|bmukkRating|bmukk16|
|bmukkRating|bmukkUnrated|
|catvRating|catvUnspecified|
|catvRating|catvC|
|catvRating|catvC8|
|catvRating|catvG|
|catvRating|catvPg|
|catvRating|catv14plus|
|catvRating|catv18plus|
|catvRating|catvUnrated|
|catvRating|catvE|
|catvfrRating|catvfrUnspecified|
|catvfrRating|catvfrG|
|catvfrRating|catvfr8plus|
|catvfrRating|catvfr13plus|
|catvfrRating|catvfr16plus|
|catvfrRating|catvfr18plus|
|catvfrRating|catvfrUnrated|
|catvfrRating|catvfrE|
|cbfcRating|cbfcUnspecified|
|cbfcRating|cbfcU|
|cbfcRating|cbfcUA|
|cbfcRating|cbfcUA7plus|
|cbfcRating|cbfcUA13plus|
|cbfcRating|cbfcUA16plus|
|cbfcRating|cbfcA|
|cbfcRating|cbfcS|
|cbfcRating|cbfcUnrated|
|cccRating|cccUnspecified|
|cccRating|cccTe|
|cccRating|ccc6|
|cccRating|ccc14|
|cccRating|ccc18|
|cccRating|ccc18v|
|cccRating|ccc18s|
|cccRating|cccUnrated|
|cceRating|cceUnspecified|
|cceRating|cceM4|
|cceRating|cceM6|
|cceRating|cceM12|
|cceRating|cceM16|
|cceRating|cceM18|
|cceRating|cceUnrated|
|cceRating|cceM14|
|chfilmRating|chfilmUnspecified|
|chfilmRating|chfilm0|
|chfilmRating|chfilm6|
|chfilmRating|chfilm12|
|chfilmRating|chfilm16|
|chfilmRating|chfilm18|
|chfilmRating|chfilmUnrated|
|chvrsRating|chvrsUnspecified|
|chvrsRating|chvrsG|
|chvrsRating|chvrsPg|
|chvrsRating|chvrs14a|
|chvrsRating|chvrs18a|
|chvrsRating|chvrsR|
|chvrsRating|chvrsE|
|chvrsRating|chvrsUnrated|
|cicfRating|cicfUnspecified|
|cicfRating|cicfE|
|cicfRating|cicfKtEa|
|cicfRating|cicfKntEna|
|cicfRating|cicfUnrated|
|cnaRating|cnaUnspecified|
|cnaRating|cnaAp|
|cnaRating|cna12|
|cnaRating|cna15|
|cnaRating|cna18|
|cnaRating|cna18plus|
|cnaRating|cnaUnrated|
|cncRating|cncUnspecified|
|cncRating|cncT|
|cncRating|cnc10|
|cncRating|cnc12|
|cncRating|cnc16|
|cncRating|cnc18|
|cncRating|cncE|
|cncRating|cncInterdiction|
|cncRating|cncUnrated|
|csaRating|csaUnspecified|
|csaRating|csaT|
|csaRating|csa10|
|csaRating|csa12|
|csaRating|csa16|
|csaRating|csa18|
|csaRating|csaInterdiction|
|csaRating|csaUnrated|
|cscfRating|cscfUnspecified|
|cscfRating|cscfAl|
|cscfRating|cscfA|
|cscfRating|cscf6|
|cscfRating|cscf9|
|cscfRating|cscf12|
|cscfRating|cscf16|
|cscfRating|cscf18|
|cscfRating|cscfUnrated|
|czfilmRating|czfilmUnspecified|
|czfilmRating|czfilmU|
|czfilmRating|czfilm12|
|czfilmRating|czfilm14|
|czfilmRating|czfilm18|
|czfilmRating|czfilmUnrated|
|djctqRating|djctqUnspecified|
|djctqRating|djctqL|
|djctqRating|djctq10|
|djctqRating|djctq12|
|djctqRating|djctq14|
|djctqRating|djctq16|
|djctqRating|djctq18|
|djctqRating|djctqEr|
|djctqRating|djctqL10|
|djctqRating|djctqL12|
|djctqRating|djctqL14|
|djctqRating|djctqL16|
|djctqRating|djctqL18|
|djctqRating|djctq1012|
|djctqRating|djctq1014|
|djctqRating|djctq1016|
|djctqRating|djctq1018|
|djctqRating|djctq1214|
|djctqRating|djctq1216|
|djctqRating|djctq1218|
|djctqRating|djctq1416|
|djctqRating|djctq1418|
|djctqRating|djctq1618|
|djctqRating|djctqUnrated|
|djctqRatingReasons|djctqRatingReasonUnspecified|
|djctqRatingReasons|djctqViolence|
|djctqRatingReasons|djctqExtremeViolence|
|djctqRatingReasons|djctqSexualContent|
|djctqRatingReasons|djctqNudity|
|djctqRatingReasons|djctqSex|
|djctqRatingReasons|djctqExplicitSex|
|djctqRatingReasons|djctqDrugs|
|djctqRatingReasons|djctqLegalDrugs|
|djctqRatingReasons|djctqIllegalDrugs|
|djctqRatingReasons|djctqInappropriateLanguage|
|djctqRatingReasons|djctqCriminalActs|
|djctqRatingReasons|djctqImpactingContent|
|ecbmctRating|ecbmctUnspecified|
|ecbmctRating|ecbmctG|
|ecbmctRating|ecbmct7a|
|ecbmctRating|ecbmct7plus|
|ecbmctRating|ecbmct13a|
|ecbmctRating|ecbmct13plus|
|ecbmctRating|ecbmct15a|
|ecbmctRating|ecbmct15plus|
|ecbmctRating|ecbmct18plus|
|ecbmctRating|ecbmctUnrated|
|eefilmRating|eefilmUnspecified|
|eefilmRating|eefilmPere|
|eefilmRating|eefilmL|
|eefilmRating|eefilmMs6|
|eefilmRating|eefilmK6|
|eefilmRating|eefilmMs12|
|eefilmRating|eefilmK12|
|eefilmRating|eefilmK14|
|eefilmRating|eefilmK16|
|eefilmRating|eefilmUnrated|
|egfilmRating|egfilmUnspecified|
|egfilmRating|egfilmGn|
|egfilmRating|egfilm18|
|egfilmRating|egfilmBn|
|egfilmRating|egfilmUnrated|
|eirinRating|eirinUnspecified|
|eirinRating|eirinG|
|eirinRating|eirinPg12|
|eirinRating|eirinR15plus|
|eirinRating|eirinR18plus|
|eirinRating|eirinUnrated|
|fcbmRating|fcbmUnspecified|
|fcbmRating|fcbmU|
|fcbmRating|fcbmPg13|
|fcbmRating|fcbmP13|
|fcbmRating|fcbm18|
|fcbmRating|fcbm18sx|
|fcbmRating|fcbm18pa|
|fcbmRating|fcbm18sg|
|fcbmRating|fcbm18pl|
|fcbmRating|fcbmUnrated|
|fcoRating|fcoUnspecified|
|fcoRating|fcoI|
|fcoRating|fcoIia|
|fcoRating|fcoIib|
|fcoRating|fcoIi|
|fcoRating|fcoIii|
|fcoRating|fcoUnrated|
|fmocRating|fmocUnspecified|
|fmocRating|fmocU|
|fmocRating|fmoc10|
|fmocRating|fmoc12|
|fmocRating|fmoc16|
|fmocRating|fmoc18|
|fmocRating|fmocE|
|fmocRating|fmocUnrated|
|fpbRating|fpbUnspecified|
|fpbRating|fpbA|
|fpbRating|fpbPg|
|fpbRating|fpb79Pg|
|fpbRating|fpb1012Pg|
|fpbRating|fpb13|
|fpbRating|fpb16|
|fpbRating|fpb18|
|fpbRating|fpbX18|
|fpbRating|fpbXx|
|fpbRating|fpbUnrated|
|fpbRating|fpb10|
|fpbRatingReasons|fpbRatingReasonUnspecified|
|fpbRatingReasons|fpbBlasphemy|
|fpbRatingReasons|fpbLanguage|
|fpbRatingReasons|fpbNudity|
|fpbRatingReasons|fpbPrejudice|
|fpbRatingReasons|fpbSex|
|fpbRatingReasons|fpbViolence|
|fpbRatingReasons|fpbDrugs|
|fpbRatingReasons|fpbSexualViolence|
|fpbRatingReasons|fpbHorror|
|fpbRatingReasons|fpbCriminalTechniques|
|fpbRatingReasons|fpbImitativeActsTechniques|
|fskRating|fskUnspecified|
|fskRating|fsk0|
|fskRating|fsk6|
|fskRating|fsk12|
|fskRating|fsk16|
|fskRating|fsk18|
|fskRating|fskUnrated|
|grfilmRating|grfilmUnspecified|
|grfilmRating|grfilmK|
|grfilmRating|grfilmE|
|grfilmRating|grfilmK12|
|grfilmRating|grfilmK13|
|grfilmRating|grfilmK15|
|grfilmRating|grfilmK17|
|grfilmRating|grfilmK18|
|grfilmRating|grfilmUnrated|
|icaaRating|icaaUnspecified|
|icaaRating|icaaApta|
|icaaRating|icaa7|
|icaaRating|icaa12|
|icaaRating|icaa13|
|icaaRating|icaa16|
|icaaRating|icaa18|
|icaaRating|icaaX|
|icaaRating|icaaUnrated|
|ifcoRating|ifcoUnspecified|
|ifcoRating|ifcoG|
|ifcoRating|ifcoPg|
|ifcoRating|ifco12|
|ifcoRating|ifco12a|
|ifcoRating|ifco15|
|ifcoRating|ifco15a|
|ifcoRating|ifco16|
|ifcoRating|ifco18|
|ifcoRating|ifcoUnrated|
|ilfilmRating|ilfilmUnspecified|
|ilfilmRating|ilfilmAa|
|ilfilmRating|ilfilm12|
|ilfilmRating|ilfilm14|
|ilfilmRating|ilfilm16|
|ilfilmRating|ilfilm18|
|ilfilmRating|ilfilmUnrated|
|incaaRating|incaaUnspecified|
|incaaRating|incaaAtp|
|incaaRating|incaaSam13|
|incaaRating|incaaSam16|
|incaaRating|incaaSam18|
|incaaRating|incaaC|
|incaaRating|incaaUnrated|
|kfcbRating|kfcbUnspecified|
|kfcbRating|kfcbG|
|kfcbRating|kfcbPg|
|kfcbRating|kfcb16plus|
|kfcbRating|kfcbR|
|kfcbRating|kfcbUnrated|
|kijkwijzerRating|kijkwijzerUnspecified|
|kijkwijzerRating|kijkwijzerAl|
|kijkwijzerRating|kijkwijzer6|
|kijkwijzerRating|kijkwijzer9|
|kijkwijzerRating|kijkwijzer12|
|kijkwijzerRating|kijkwijzer16|
|kijkwijzerRating|kijkwijzer18|
|kijkwijzerRating|kijkwijzerUnrated|
|kmrbRating|kmrbUnspecified|
|kmrbRating|kmrbAll|
|kmrbRating|kmrb12plus|
|kmrbRating|kmrb15plus|
|kmrbRating|kmrbTeenr|
|kmrbRating|kmrbR|
|kmrbRating|kmrbUnrated|
|lsfRating|lsfUnspecified|
|lsfRating|lsfSu|
|lsfRating|lsfA|
|lsfRating|lsfBo|
|lsfRating|lsf13|
|lsfRating|lsfR|
|lsfRating|lsf17|
|lsfRating|lsfD|
|lsfRating|lsf21|
|lsfRating|lsfUnrated|
|mccaaRating|mccaaUnspecified|
|mccaaRating|mccaaU|
|mccaaRating|mccaaPg|
|mccaaRating|mccaa12a|
|mccaaRating|mccaa12|
|mccaaRating|mccaa14|
|mccaaRating|mccaa15|
|mccaaRating|mccaa16|
|mccaaRating|mccaa18|
|mccaaRating|mccaaUnrated|
|mccypRating|mccypUnspecified|
|mccypRating|mccypA|
|mccypRating|mccyp7|
|mccypRating|mccyp11|
|mccypRating|mccyp15|
|mccypRating|mccypUnrated|
|mcstRating|mcstUnspecified|
|mcstRating|mcstP|
|mcstRating|mcst0|
|mcstRating|mcstC13|
|mcstRating|mcstC16|
|mcstRating|mcst16plus|
|mcstRating|mcstC18|
|mcstRating|mcstGPg|
|mcstRating|mcstUnrated|
|mdaRating|mdaUnspecified|
|mdaRating|mdaG|
|mdaRating|mdaPg|
|mdaRating|mdaPg13|
|mdaRating|mdaNc16|
|mdaRating|mdaM18|
|mdaRating|mdaR21|
|mdaRating|mdaUnrated|
|medietilsynetRating|medietilsynetUnspecified|
|medietilsynetRating|medietilsynetA|
|medietilsynetRating|medietilsynet6|
|medietilsynetRating|medietilsynet7|
|medietilsynetRating|medietilsynet9|
|medietilsynetRating|medietilsynet11|
|medietilsynetRating|medietilsynet12|
|medietilsynetRating|medietilsynet15|
|medietilsynetRating|medietilsynet18|
|medietilsynetRating|medietilsynetUnrated|
|mekuRating|mekuUnspecified|
|mekuRating|mekuS|
|mekuRating|meku7|
|mekuRating|meku12|
|mekuRating|meku16|
|mekuRating|meku18|
|mekuRating|mekuUnrated|
|menaMpaaRating|menaMpaaUnspecified|
|menaMpaaRating|menaMpaaG|
|menaMpaaRating|menaMpaaPg|
|menaMpaaRating|menaMpaaPg13|
|menaMpaaRating|menaMpaaR|
|menaMpaaRating|menaMpaaUnrated|
|mibacRating|mibacUnspecified|
|mibacRating|mibacT|
|mibacRating|mibacVap|
|mibacRating|mibacVm6|
|mibacRating|mibacVm12|
|mibacRating|mibacVm14|
|mibacRating|mibacVm16|
|mibacRating|mibacVm18|
|mibacRating|mibacUnrated|
|mocRating|mocUnspecified|
|mocRating|mocE|
|mocRating|mocT|
|mocRating|moc7|
|mocRating|moc12|
|mocRating|moc15|
|mocRating|moc18|
|mocRating|mocX|
|mocRating|mocBanned|
|mocRating|mocUnrated|
|moctwRating|moctwUnspecified|
|moctwRating|moctwG|
|moctwRating|moctwP|
|moctwRating|moctwPg|
|moctwRating|moctwR|
|moctwRating|moctwUnrated|
|moctwRating|moctwR12|
|moctwRating|moctwR15|
|mpaaRating|mpaaUnspecified|
|mpaaRating|mpaaG|
|mpaaRating|mpaaPg|
|mpaaRating|mpaaPg13|
|mpaaRating|mpaaR|
|mpaaRating|mpaaNc17|
|mpaaRating|mpaaX|
|mpaaRating|mpaaUnrated|
|mpaatRating|mpaatUnspecified|
|mpaatRating|mpaatGb|
|mpaatRating|mpaatRb|
|mtrcbRating|mtrcbUnspecified|
|mtrcbRating|mtrcbG|
|mtrcbRating|mtrcbPg|
|mtrcbRating|mtrcbR13|
|mtrcbRating|mtrcbR16|
|mtrcbRating|mtrcbR18|
|mtrcbRating|mtrcbX|
|mtrcbRating|mtrcbUnrated|
|nbcRating|nbcUnspecified|
|nbcRating|nbcG|
|nbcRating|nbcPg|
|nbcRating|nbc12plus|
|nbcRating|nbc15plus|
|nbcRating|nbc18plus|
|nbcRating|nbc18plusr|
|nbcRating|nbcPu|
|nbcRating|nbcUnrated|
|nbcplRating|nbcplUnspecified|
|nbcplRating|nbcplI|
|nbcplRating|nbcplIi|
|nbcplRating|nbcplIii|
|nbcplRating|nbcplIv|
|nbcplRating|nbcpl18plus|
|nbcplRating|nbcplUnrated|
|nfrcRating|nfrcUnspecified|
|nfrcRating|nfrcA|
|nfrcRating|nfrcB|
|nfrcRating|nfrcC|
|nfrcRating|nfrcD|
|nfrcRating|nfrcX|
|nfrcRating|nfrcUnrated|
|nfvcbRating|nfvcbUnspecified|
|nfvcbRating|nfvcbG|
|nfvcbRating|nfvcbPg|
|nfvcbRating|nfvcb12|
|nfvcbRating|nfvcb12a|
|nfvcbRating|nfvcb15|
|nfvcbRating|nfvcb18|
|nfvcbRating|nfvcbRe|
|nfvcbRating|nfvcbUnrated|
|nkclvRating|nkclvUnspecified|
|nkclvRating|nkclvU|
|nkclvRating|nkclv7plus|
|nkclvRating|nkclv12plus|
|nkclvRating|nkclv16plus|
|nkclvRating|nkclv18plus|
|nkclvRating|nkclvUnrated|
|nmcRating|nmcUnspecified|
|nmcRating|nmcG|
|nmcRating|nmcPg|
|nmcRating|nmcPg13|
|nmcRating|nmcPg15|
|nmcRating|nmc15plus|
|nmcRating|nmc18plus|
|nmcRating|nmc18tc|
|nmcRating|nmcUnrated|
|oflcRating|oflcUnspecified|
|oflcRating|oflcG|
|oflcRating|oflcPg|
|oflcRating|oflcM|
|oflcRating|oflcR13|
|oflcRating|oflcR15|
|oflcRating|oflcR16|
|oflcRating|oflcR18|
|oflcRating|oflcUnrated|
|oflcRating|oflcRp13|
|oflcRating|oflcRp16|
|oflcRating|oflcRp18|
|pefilmRating|pefilmUnspecified|
|pefilmRating|pefilmPt|
|pefilmRating|pefilmPg|
|pefilmRating|pefilm14|
|pefilmRating|pefilm18|
|pefilmRating|pefilmUnrated|
|rcnofRating|rcnofUnspecified|
|rcnofRating|rcnofI|
|rcnofRating|rcnofIi|
|rcnofRating|rcnofIii|
|rcnofRating|rcnofIv|
|rcnofRating|rcnofV|
|rcnofRating|rcnofVi|
|rcnofRating|rcnofUnrated|
|resorteviolenciaRating|resorteviolenciaUnspecified|
|resorteviolenciaRating|resorteviolenciaA|
|resorteviolenciaRating|resorteviolenciaB|
|resorteviolenciaRating|resorteviolenciaC|
|resorteviolenciaRating|resorteviolenciaD|
|resorteviolenciaRating|resorteviolenciaE|
|resorteviolenciaRating|resorteviolenciaUnrated|
|rtcRating|rtcUnspecified|
|rtcRating|rtcAa|
|rtcRating|rtcA|
|rtcRating|rtcB|
|rtcRating|rtcB15|
|rtcRating|rtcC|
|rtcRating|rtcD|
|rtcRating|rtcUnrated|
|rteRating|rteUnspecified|
|rteRating|rteGa|
|rteRating|rteCh|
|rteRating|rtePs|
|rteRating|rteMa|
|rteRating|rteUnrated|
|russiaRating|russiaUnspecified|
|russiaRating|russia0|
|russiaRating|russia6|
|russiaRating|russia12|
|russiaRating|russia16|
|russiaRating|russia18|
|russiaRating|russiaUnrated|
|skfilmRating|skfilmUnspecified|
|skfilmRating|skfilmG|
|skfilmRating|skfilmP2|
|skfilmRating|skfilmP5|
|skfilmRating|skfilmP8|
|skfilmRating|skfilmUnrated|
|smaisRating|smaisUnspecified|
|smaisRating|smaisL|
|smaisRating|smais7|
|smaisRating|smais12|
|smaisRating|smais14|
|smaisRating|smais16|
|smaisRating|smais18|
|smaisRating|smaisUnrated|
|smsaRating|smsaUnspecified|
|smsaRating|smsaA|
|smsaRating|smsa7|
|smsaRating|smsa11|
|smsaRating|smsa15|
|smsaRating|smsaUnrated|
|tvpgRating|tvpgUnspecified|
|tvpgRating|tvpgY|
|tvpgRating|tvpgY7|
|tvpgRating|tvpgY7Fv|
|tvpgRating|tvpgG|
|tvpgRating|tvpgPg|
|tvpgRating|pg14|
|tvpgRating|tvpgMa|
|tvpgRating|tvpgUnrated|
|ytRating|ytUnspecified|
|ytRating|ytAgeRestricted|

<h2 id="tocS_Cuepoint">Cuepoint</h2>
<!-- backwards compatibility -->
<a id="schemacuepoint"></a>
<a id="schema_Cuepoint"></a>
<a id="tocScuepoint"></a>
<a id="tocscuepoint"></a>

```json
{
  "cueType": "cueTypeUnspecified",
  "durationSecs": 0,
  "etag": "string",
  "id": "string",
  "insertionOffsetTimeMs": "string",
  "walltimeMs": "string"
}
```

Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cueType|string|false|none|none|
|durationSecs|integer(uint32)|false|none|The duration of this cuepoint.|
|etag|string|false|none|none|
|id|string|false|none|The identifier for cuepoint resource.|
|insertionOffsetTimeMs|string(int64)|false|none|The time when the cuepoint should be inserted by offset to the broadcast actual start time.|
|walltimeMs|string(uint64)|false|none|The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time.|

#### Enumerated Values

|Property|Value|
|---|---|
|cueType|cueTypeUnspecified|
|cueType|cueTypeAd|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "id": "string",
  "typeId": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|typeId|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_GeoPoint">GeoPoint</h2>
<!-- backwards compatibility -->
<a id="schemageopoint"></a>
<a id="schema_GeoPoint"></a>
<a id="tocSgeopoint"></a>
<a id="tocsgeopoint"></a>

```json
{
  "altitude": 0,
  "latitude": 0,
  "longitude": 0
}
```

Geographical coordinates of a point, in WGS84.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altitude|number(double)|false|none|Altitude above the reference ellipsoid, in meters.|
|latitude|number(double)|false|none|Latitude in degrees.|
|longitude|number(double)|false|none|Longitude in degrees.|

<h2 id="tocS_I18nLanguage">I18nLanguage</h2>
<!-- backwards compatibility -->
<a id="schemai18nlanguage"></a>
<a id="schema_I18nLanguage"></a>
<a id="tocSi18nlanguage"></a>
<a id="tocsi18nlanguage"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#i18nLanguage",
  "snippet": {
    "hl": "string",
    "name": "string"
  }
}
```

An *i18nLanguage* resource identifies a UI language currently supported by YouTube.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the i18n language.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".|
|snippet|[I18nLanguageSnippet](#schemai18nlanguagesnippet)|false|none|The snippet object contains basic details about the i18n language, such as language code and human-readable name.|

<h2 id="tocS_I18nLanguageListResponse">I18nLanguageListResponse</h2>
<!-- backwards compatibility -->
<a id="schemai18nlanguagelistresponse"></a>
<a id="schema_I18nLanguageListResponse"></a>
<a id="tocSi18nlanguagelistresponse"></a>
<a id="tocsi18nlanguagelistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#i18nLanguage",
      "snippet": {
        "hl": "string",
        "name": "string"
      }
    }
  ],
  "kind": "youtube#i18nLanguageListResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[I18nLanguage](#schemai18nlanguage)]|false|none|A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_I18nLanguageSnippet">I18nLanguageSnippet</h2>
<!-- backwards compatibility -->
<a id="schemai18nlanguagesnippet"></a>
<a id="schema_I18nLanguageSnippet"></a>
<a id="tocSi18nlanguagesnippet"></a>
<a id="tocsi18nlanguagesnippet"></a>

```json
{
  "hl": "string",
  "name": "string"
}
```

Basic details about an i18n language, such as language code and human-readable name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hl|string|false|none|A short BCP-47 code that uniquely identifies a language.|
|name|string|false|none|The human-readable name of the language in the language itself.|

<h2 id="tocS_I18nRegion">I18nRegion</h2>
<!-- backwards compatibility -->
<a id="schemai18nregion"></a>
<a id="schema_I18nRegion"></a>
<a id="tocSi18nregion"></a>
<a id="tocsi18nregion"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#i18nRegion",
  "snippet": {
    "gl": "string",
    "name": "string"
  }
}
```

A *i18nRegion* resource identifies a region where YouTube is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the i18n region.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".|
|snippet|[I18nRegionSnippet](#schemai18nregionsnippet)|false|none|The snippet object contains basic details about the i18n region, such as region code and human-readable name.|

<h2 id="tocS_I18nRegionListResponse">I18nRegionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemai18nregionlistresponse"></a>
<a id="schema_I18nRegionListResponse"></a>
<a id="tocSi18nregionlistresponse"></a>
<a id="tocsi18nregionlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#i18nRegion",
      "snippet": {
        "gl": "string",
        "name": "string"
      }
    }
  ],
  "kind": "youtube#i18nRegionListResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[I18nRegion](#schemai18nregion)]|false|none|A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_I18nRegionSnippet">I18nRegionSnippet</h2>
<!-- backwards compatibility -->
<a id="schemai18nregionsnippet"></a>
<a id="schema_I18nRegionSnippet"></a>
<a id="tocSi18nregionsnippet"></a>
<a id="tocsi18nregionsnippet"></a>

```json
{
  "gl": "string",
  "name": "string"
}
```

Basic details about an i18n region, such as region code and human-readable name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gl|string|false|none|The region code as a 2-letter ISO country code.|
|name|string|false|none|The human-readable name of the region.|

<h2 id="tocS_ImageSettings">ImageSettings</h2>
<!-- backwards compatibility -->
<a id="schemaimagesettings"></a>
<a id="schema_ImageSettings"></a>
<a id="tocSimagesettings"></a>
<a id="tocsimagesettings"></a>

```json
{
  "backgroundImageUrl": {
    "defaultLanguage": {
      "value": "string"
    },
    "localized": [
      {
        "language": "string",
        "value": "string"
      }
    ]
  },
  "bannerExternalUrl": "string",
  "bannerImageUrl": "string",
  "bannerMobileExtraHdImageUrl": "string",
  "bannerMobileHdImageUrl": "string",
  "bannerMobileImageUrl": "string",
  "bannerMobileLowImageUrl": "string",
  "bannerMobileMediumHdImageUrl": "string",
  "bannerTabletExtraHdImageUrl": "string",
  "bannerTabletHdImageUrl": "string",
  "bannerTabletImageUrl": "string",
  "bannerTabletLowImageUrl": "string",
  "bannerTvHighImageUrl": "string",
  "bannerTvImageUrl": "string",
  "bannerTvLowImageUrl": "string",
  "bannerTvMediumImageUrl": "string",
  "largeBrandedBannerImageImapScript": {
    "defaultLanguage": {
      "value": "string"
    },
    "localized": [
      {
        "language": "string",
        "value": "string"
      }
    ]
  },
  "largeBrandedBannerImageUrl": {
    "defaultLanguage": {
      "value": "string"
    },
    "localized": [
      {
        "language": "string",
        "value": "string"
      }
    ]
  },
  "smallBrandedBannerImageImapScript": {
    "defaultLanguage": {
      "value": "string"
    },
    "localized": [
      {
        "language": "string",
        "value": "string"
      }
    ]
  },
  "smallBrandedBannerImageUrl": {
    "defaultLanguage": {
      "value": "string"
    },
    "localized": [
      {
        "language": "string",
        "value": "string"
      }
    ]
  },
  "trackingImageUrl": "string",
  "watchIconImageUrl": "string"
}
```

Branding properties for images associated with the channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundImageUrl|[LocalizedProperty](#schemalocalizedproperty)|false|none|The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k.|
|bannerExternalUrl|string|false|none|This is generated when a ChannelBanner.Insert request has succeeded for the given channel.|
|bannerImageUrl|string|false|none|Banner image. Desktop size (1060x175).|
|bannerMobileExtraHdImageUrl|string|false|none|Banner image. Mobile size high resolution (1440x395).|
|bannerMobileHdImageUrl|string|false|none|Banner image. Mobile size high resolution (1280x360).|
|bannerMobileImageUrl|string|false|none|Banner image. Mobile size (640x175).|
|bannerMobileLowImageUrl|string|false|none|Banner image. Mobile size low resolution (320x88).|
|bannerMobileMediumHdImageUrl|string|false|none|Banner image. Mobile size medium/high resolution (960x263).|
|bannerTabletExtraHdImageUrl|string|false|none|Banner image. Tablet size extra high resolution (2560x424).|
|bannerTabletHdImageUrl|string|false|none|Banner image. Tablet size high resolution (2276x377).|
|bannerTabletImageUrl|string|false|none|Banner image. Tablet size (1707x283).|
|bannerTabletLowImageUrl|string|false|none|Banner image. Tablet size low resolution (1138x188).|
|bannerTvHighImageUrl|string|false|none|Banner image. TV size high resolution (1920x1080).|
|bannerTvImageUrl|string|false|none|Banner image. TV size extra high resolution (2120x1192).|
|bannerTvLowImageUrl|string|false|none|Banner image. TV size low resolution (854x480).|
|bannerTvMediumImageUrl|string|false|none|Banner image. TV size medium resolution (1280x720).|
|largeBrandedBannerImageImapScript|[LocalizedProperty](#schemalocalizedproperty)|false|none|The image map script for the large banner image.|
|largeBrandedBannerImageUrl|[LocalizedProperty](#schemalocalizedproperty)|false|none|The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.|
|smallBrandedBannerImageImapScript|[LocalizedProperty](#schemalocalizedproperty)|false|none|The image map script for the small banner image.|
|smallBrandedBannerImageUrl|[LocalizedProperty](#schemalocalizedproperty)|false|none|The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page. The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.|
|trackingImageUrl|string|false|none|The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.|
|watchIconImageUrl|string|false|none|none|

<h2 id="tocS_IngestionInfo">IngestionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaingestioninfo"></a>
<a id="schema_IngestionInfo"></a>
<a id="tocSingestioninfo"></a>
<a id="tocsingestioninfo"></a>

```json
{
  "backupIngestionAddress": "string",
  "ingestionAddress": "string",
  "rtmpsBackupIngestionAddress": "string",
  "rtmpsIngestionAddress": "string",
  "streamName": "string"
}
```

Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupIngestionAddress|string|false|none|The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.|
|ingestionAddress|string|false|none|The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME* |
|rtmpsBackupIngestionAddress|string|false|none|This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.|
|rtmpsIngestionAddress|string|false|none|This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.|
|streamName|string|false|none|The stream name that YouTube assigns to the video stream.|

<h2 id="tocS_InvideoBranding">InvideoBranding</h2>
<!-- backwards compatibility -->
<a id="schemainvideobranding"></a>
<a id="schema_InvideoBranding"></a>
<a id="tocSinvideobranding"></a>
<a id="tocsinvideobranding"></a>

```json
{
  "imageBytes": "string",
  "imageUrl": "string",
  "position": {
    "cornerPosition": "topLeft",
    "type": "corner"
  },
  "targetChannelId": "string",
  "timing": {
    "durationMs": "string",
    "offsetMs": "string",
    "type": "offsetFromStart"
  }
}
```

LINT.IfChange Describes an invideo branding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageBytes|string(byte)|false|none|The bytes the uploaded image. Only used in api to youtube communication.|
|imageUrl|string|false|none|The url of the uploaded image. Only used in apiary to api communication.|
|position|[InvideoPosition](#schemainvideoposition)|false|none|The spatial position within the video where the branding watermark will be displayed.|
|targetChannelId|string|false|none|The channel to which this branding links. If not present it defaults to the current channel.|
|timing|[InvideoTiming](#schemainvideotiming)|false|none|The temporal position within the video where watermark will be displayed.|

<h2 id="tocS_InvideoPosition">InvideoPosition</h2>
<!-- backwards compatibility -->
<a id="schemainvideoposition"></a>
<a id="schema_InvideoPosition"></a>
<a id="tocSinvideoposition"></a>
<a id="tocsinvideoposition"></a>

```json
{
  "cornerPosition": "topLeft",
  "type": "corner"
}
```

Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cornerPosition|string|false|none|Describes in which corner of the video the visual widget will appear.|
|type|string|false|none|Defines the position type.|

#### Enumerated Values

|Property|Value|
|---|---|
|cornerPosition|topLeft|
|cornerPosition|topRight|
|cornerPosition|bottomLeft|
|cornerPosition|bottomRight|
|type|corner|

<h2 id="tocS_InvideoTiming">InvideoTiming</h2>
<!-- backwards compatibility -->
<a id="schemainvideotiming"></a>
<a id="schema_InvideoTiming"></a>
<a id="tocSinvideotiming"></a>
<a id="tocsinvideotiming"></a>

```json
{
  "durationMs": "string",
  "offsetMs": "string",
  "type": "offsetFromStart"
}
```

Describes a temporal position of a visual widget inside a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationMs|string(uint64)|false|none|Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.|
|offsetMs|string(uint64)|false|none|Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.|
|type|string|false|none|Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|offsetFromStart|
|type|offsetFromEnd|

<h2 id="tocS_LanguageTag">LanguageTag</h2>
<!-- backwards compatibility -->
<a id="schemalanguagetag"></a>
<a id="schema_LanguageTag"></a>
<a id="tocSlanguagetag"></a>
<a id="tocslanguagetag"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|

<h2 id="tocS_LevelDetails">LevelDetails</h2>
<!-- backwards compatibility -->
<a id="schemaleveldetails"></a>
<a id="schema_LevelDetails"></a>
<a id="tocSleveldetails"></a>
<a id="tocsleveldetails"></a>

```json
{
  "displayName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The name that should be used when referring to this level.|

<h2 id="tocS_LiveBroadcast">LiveBroadcast</h2>
<!-- backwards compatibility -->
<a id="schemalivebroadcast"></a>
<a id="schema_LiveBroadcast"></a>
<a id="tocSlivebroadcast"></a>
<a id="tocslivebroadcast"></a>

```json
{
  "contentDetails": {
    "boundStreamId": "string",
    "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
    "closedCaptionsType": "closedCaptionsTypeUnspecified",
    "enableAutoStart": true,
    "enableAutoStop": true,
    "enableClosedCaptions": true,
    "enableContentEncryption": true,
    "enableDvr": true,
    "enableEmbed": true,
    "enableLowLatency": true,
    "latencyPreference": "latencyPreferenceUnspecified",
    "mesh": "string",
    "monitorStream": {
      "broadcastStreamDelayMs": 0,
      "embedHtml": "string",
      "enableMonitorStream": true
    },
    "projection": "projectionUnspecified",
    "recordFromStart": true,
    "startWithSlate": true,
    "stereoLayout": "stereoLayoutUnspecified"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveBroadcast",
  "snippet": {
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "channelId": "string",
    "description": "string",
    "isDefaultBroadcast": true,
    "liveChatId": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "concurrentViewers": "string"
  },
  "status": {
    "lifeCycleStatus": "lifeCycleStatusUnspecified",
    "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
    "madeForKids": true,
    "privacyStatus": "public",
    "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
    "selfDeclaredMadeForKids": true
  }
}
```

A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDetails|[LiveBroadcastContentDetails](#schemalivebroadcastcontentdetails)|false|none|The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the broadcast.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".|
|snippet|[LiveBroadcastSnippet](#schemalivebroadcastsnippet)|false|none|The snippet object contains basic details about the event, including its title, description, start time, and end time.|
|statistics|[LiveBroadcastStatistics](#schemalivebroadcaststatistics)|false|none|The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.|
|status|[LiveBroadcastStatus](#schemalivebroadcaststatus)|false|none|The status object contains information about the event's status.|

<h2 id="tocS_LiveBroadcastContentDetails">LiveBroadcastContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivebroadcastcontentdetails"></a>
<a id="schema_LiveBroadcastContentDetails"></a>
<a id="tocSlivebroadcastcontentdetails"></a>
<a id="tocslivebroadcastcontentdetails"></a>

```json
{
  "boundStreamId": "string",
  "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
  "closedCaptionsType": "closedCaptionsTypeUnspecified",
  "enableAutoStart": true,
  "enableAutoStop": true,
  "enableClosedCaptions": true,
  "enableContentEncryption": true,
  "enableDvr": true,
  "enableEmbed": true,
  "enableLowLatency": true,
  "latencyPreference": "latencyPreferenceUnspecified",
  "mesh": "string",
  "monitorStream": {
    "broadcastStreamDelayMs": 0,
    "embedHtml": "string",
    "enableMonitorStream": true
  },
  "projection": "projectionUnspecified",
  "recordFromStart": true,
  "startWithSlate": true,
  "stereoLayout": "stereoLayoutUnspecified"
}
```

Detailed settings of a broadcast.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundStreamId|string|false|none|This value uniquely identifies the live stream bound to the broadcast.|
|boundStreamLastUpdateTimeMs|string(date-time)|false|none|The date and time that the live stream referenced by boundStreamId was last updated.|
|closedCaptionsType|string|false|none|none|
|enableAutoStart|boolean|false|none|This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.|
|enableAutoStop|boolean|false|none|This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.|
|enableClosedCaptions|boolean|false|none|This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.|
|enableContentEncryption|boolean|false|none|This setting indicates whether YouTube should enable content encryption for the broadcast.|
|enableDvr|boolean|false|none|This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.|
|enableEmbed|boolean|false|none|This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.|
|enableLowLatency|boolean|false|none|Indicates whether this broadcast has low latency enabled.|
|latencyPreference|string|false|none|If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.|
|mesh|string(byte)|false|none|The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags.|
|monitorStream|[MonitorStreamInfo](#schemamonitorstreaminfo)|false|none|The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly.|
|projection|string|false|none|The projection format of this broadcast. This defaults to rectangular.|
|recordFromStart|boolean|false|none|Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.|
|startWithSlate|boolean|false|none|This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.|
|stereoLayout|string|false|none|The 3D stereo layout of this broadcast. This defaults to mono.|

#### Enumerated Values

|Property|Value|
|---|---|
|closedCaptionsType|closedCaptionsTypeUnspecified|
|closedCaptionsType|closedCaptionsDisabled|
|closedCaptionsType|closedCaptionsHttpPost|
|closedCaptionsType|closedCaptionsEmbedded|
|latencyPreference|latencyPreferenceUnspecified|
|latencyPreference|normal|
|latencyPreference|low|
|latencyPreference|ultraLow|
|projection|projectionUnspecified|
|projection|rectangular|
|projection|360|
|projection|mesh|
|stereoLayout|stereoLayoutUnspecified|
|stereoLayout|mono|
|stereoLayout|leftRight|
|stereoLayout|topBottom|

<h2 id="tocS_LiveBroadcastListResponse">LiveBroadcastListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivebroadcastlistresponse"></a>
<a id="schema_LiveBroadcastListResponse"></a>
<a id="tocSlivebroadcastlistresponse"></a>
<a id="tocslivebroadcastlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "boundStreamId": "string",
        "boundStreamLastUpdateTimeMs": "1970-01-01T00:00:00Z",
        "closedCaptionsType": "closedCaptionsTypeUnspecified",
        "enableAutoStart": true,
        "enableAutoStop": true,
        "enableClosedCaptions": true,
        "enableContentEncryption": true,
        "enableDvr": true,
        "enableEmbed": true,
        "enableLowLatency": true,
        "latencyPreference": "latencyPreferenceUnspecified",
        "mesh": "string",
        "monitorStream": {
          "broadcastStreamDelayMs": 0,
          "embedHtml": "string",
          "enableMonitorStream": true
        },
        "projection": "projectionUnspecified",
        "recordFromStart": true,
        "startWithSlate": true,
        "stereoLayout": "stereoLayoutUnspecified"
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveBroadcast",
      "snippet": {
        "actualEndTime": "1970-01-01T00:00:00Z",
        "actualStartTime": "1970-01-01T00:00:00Z",
        "channelId": "string",
        "description": "string",
        "isDefaultBroadcast": true,
        "liveChatId": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "scheduledEndTime": "1970-01-01T00:00:00Z",
        "scheduledStartTime": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "statistics": {
        "concurrentViewers": "string"
      },
      "status": {
        "lifeCycleStatus": "lifeCycleStatusUnspecified",
        "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
        "madeForKids": true,
        "privacyStatus": "public",
        "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
        "selfDeclaredMadeForKids": true
      }
    }
  ],
  "kind": "youtube#liveBroadcastListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[LiveBroadcast](#schemalivebroadcast)]|false|none|A list of broadcasts that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_LiveBroadcastSnippet">LiveBroadcastSnippet</h2>
<!-- backwards compatibility -->
<a id="schemalivebroadcastsnippet"></a>
<a id="schema_LiveBroadcastSnippet"></a>
<a id="tocSlivebroadcastsnippet"></a>
<a id="tocslivebroadcastsnippet"></a>

```json
{
  "actualEndTime": "1970-01-01T00:00:00Z",
  "actualStartTime": "1970-01-01T00:00:00Z",
  "channelId": "string",
  "description": "string",
  "isDefaultBroadcast": true,
  "liveChatId": "string",
  "publishedAt": "1970-01-01T00:00:00Z",
  "scheduledEndTime": "1970-01-01T00:00:00Z",
  "scheduledStartTime": "1970-01-01T00:00:00Z",
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic broadcast information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actualEndTime|string(date-time)|false|none|The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete.|
|actualStartTime|string(date-time)|false|none|The date and time that the broadcast actually started. This information is only available once the broadcast's state is live.|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.|
|description|string|false|none|The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.|
|isDefaultBroadcast|boolean|false|none|Indicates whether this broadcast is the default broadcast. Internal only.|
|liveChatId|string|false|none|The id of the live chat for this broadcast.|
|publishedAt|string(date-time)|false|none|The date and time that the broadcast was added to YouTube's live broadcast schedule.|
|scheduledEndTime|string(date-time)|false|none|The date and time that the broadcast is scheduled to end.|
|scheduledStartTime|string(date-time)|false|none|The date and time that the broadcast is scheduled to start.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.|

<h2 id="tocS_LiveBroadcastStatistics">LiveBroadcastStatistics</h2>
<!-- backwards compatibility -->
<a id="schemalivebroadcaststatistics"></a>
<a id="schema_LiveBroadcastStatistics"></a>
<a id="tocSlivebroadcaststatistics"></a>
<a id="tocslivebroadcaststatistics"></a>

```json
{
  "concurrentViewers": "string"
}
```

Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrentViewers|string(uint64)|false|none|The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.|

<h2 id="tocS_LiveBroadcastStatus">LiveBroadcastStatus</h2>
<!-- backwards compatibility -->
<a id="schemalivebroadcaststatus"></a>
<a id="schema_LiveBroadcastStatus"></a>
<a id="tocSlivebroadcaststatus"></a>
<a id="tocslivebroadcaststatus"></a>

```json
{
  "lifeCycleStatus": "lifeCycleStatusUnspecified",
  "liveBroadcastPriority": "liveBroadcastPriorityUnspecified",
  "madeForKids": true,
  "privacyStatus": "public",
  "recordingStatus": "liveBroadcastRecordingStatusUnspecified",
  "selfDeclaredMadeForKids": true
}
```

Live broadcast state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lifeCycleStatus|string|false|none|The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.|
|liveBroadcastPriority|string|false|none|Priority of the live broadcast event (internal state).|
|madeForKids|boolean|false|none|Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.|
|privacyStatus|string|false|none|The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.|
|recordingStatus|string|false|none|The broadcast's recording status.|
|selfDeclaredMadeForKids|boolean|false|none|This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.|

#### Enumerated Values

|Property|Value|
|---|---|
|lifeCycleStatus|lifeCycleStatusUnspecified|
|lifeCycleStatus|created|
|lifeCycleStatus|ready|
|lifeCycleStatus|testing|
|lifeCycleStatus|live|
|lifeCycleStatus|complete|
|lifeCycleStatus|revoked|
|lifeCycleStatus|testStarting|
|lifeCycleStatus|liveStarting|
|liveBroadcastPriority|liveBroadcastPriorityUnspecified|
|liveBroadcastPriority|low|
|liveBroadcastPriority|normal|
|liveBroadcastPriority|high|
|privacyStatus|public|
|privacyStatus|unlisted|
|privacyStatus|private|
|recordingStatus|liveBroadcastRecordingStatusUnspecified|
|recordingStatus|notRecording|
|recordingStatus|recording|
|recordingStatus|recorded|

<h2 id="tocS_LiveChatBan">LiveChatBan</h2>
<!-- backwards compatibility -->
<a id="schemalivechatban"></a>
<a id="schema_LiveChatBan"></a>
<a id="tocSlivechatban"></a>
<a id="tocslivechatban"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatBan",
  "snippet": {
    "banDurationSeconds": "string",
    "bannedUserDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    },
    "liveChatId": "string",
    "type": "liveChatBanTypeUnspecified"
  }
}
```

A `__liveChatBan__` resource represents a ban for a YouTube live chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the ban.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`.|
|snippet|[LiveChatBanSnippet](#schemalivechatbansnippet)|false|none|The `snippet` object contains basic details about the ban.|

<h2 id="tocS_LiveChatBanSnippet">LiveChatBanSnippet</h2>
<!-- backwards compatibility -->
<a id="schemalivechatbansnippet"></a>
<a id="schema_LiveChatBanSnippet"></a>
<a id="tocSlivechatbansnippet"></a>
<a id="tocslivechatbansnippet"></a>

```json
{
  "banDurationSeconds": "string",
  "bannedUserDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "profileImageUrl": "string"
  },
  "liveChatId": "string",
  "type": "liveChatBanTypeUnspecified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banDurationSeconds|string(uint64)|false|none|The duration of a ban, only filled if the ban has type TEMPORARY.|
|bannedUserDetails|[ChannelProfileDetails](#schemachannelprofiledetails)|false|none|none|
|liveChatId|string|false|none|The chat this ban is pertinent to.|
|type|string|false|none|The type of ban.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|liveChatBanTypeUnspecified|
|type|permanent|
|type|temporary|

<h2 id="tocS_LiveChatFanFundingEventDetails">LiveChatFanFundingEventDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatfanfundingeventdetails"></a>
<a id="schema_LiveChatFanFundingEventDetails"></a>
<a id="tocSlivechatfanfundingeventdetails"></a>
<a id="tocslivechatfanfundingeventdetails"></a>

```json
{
  "amountDisplayString": "string",
  "amountMicros": "string",
  "currency": "string",
  "userComment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountDisplayString|string|false|none|A rendered string that displays the fund amount and currency to the user.|
|amountMicros|string(uint64)|false|none|The amount of the fund.|
|currency|string|false|none|The currency in which the fund was made.|
|userComment|string|false|none|The comment added by the user to this fan funding event.|

<h2 id="tocS_LiveChatGiftMembershipReceivedDetails">LiveChatGiftMembershipReceivedDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatgiftmembershipreceiveddetails"></a>
<a id="schema_LiveChatGiftMembershipReceivedDetails"></a>
<a id="tocSlivechatgiftmembershipreceiveddetails"></a>
<a id="tocslivechatgiftmembershipreceiveddetails"></a>

```json
{
  "associatedMembershipGiftingMessageId": "string",
  "gifterChannelId": "string",
  "memberLevelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedMembershipGiftingMessageId|string|false|none|The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'.|
|gifterChannelId|string|false|none|The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message.|
|memberLevelName|string|false|none|The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.|

<h2 id="tocS_LiveChatMemberMilestoneChatDetails">LiveChatMemberMilestoneChatDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmembermilestonechatdetails"></a>
<a id="schema_LiveChatMemberMilestoneChatDetails"></a>
<a id="tocSlivechatmembermilestonechatdetails"></a>
<a id="tocslivechatmembermilestonechatdetails"></a>

```json
{
  "memberLevelName": "string",
  "memberMonth": 0,
  "userComment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberLevelName|string|false|none|The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.|
|memberMonth|integer(uint32)|false|none|The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.|
|userComment|string|false|none|The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member.|

<h2 id="tocS_LiveChatMembershipGiftingDetails">LiveChatMembershipGiftingDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmembershipgiftingdetails"></a>
<a id="schema_LiveChatMembershipGiftingDetails"></a>
<a id="tocSlivechatmembershipgiftingdetails"></a>
<a id="tocslivechatmembershipgiftingdetails"></a>

```json
{
  "giftMembershipsCount": 0,
  "giftMembershipsLevelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|giftMembershipsCount|integer(int32)|false|none|The number of gift memberships purchased by the user.|
|giftMembershipsLevelName|string|false|none|The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.|

<h2 id="tocS_LiveChatMessage">LiveChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmessage"></a>
<a id="schema_LiveChatMessage"></a>
<a id="tocSlivechatmessage"></a>
<a id="tocslivechatmessage"></a>

```json
{
  "authorDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "isChatModerator": true,
    "isChatOwner": true,
    "isChatSponsor": true,
    "isVerified": true,
    "profileImageUrl": "string"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatMessage",
  "snippet": {
    "authorChannelId": "string",
    "displayMessage": "string",
    "fanFundingEventDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "userComment": "string"
    },
    "giftMembershipReceivedDetails": {
      "associatedMembershipGiftingMessageId": "string",
      "gifterChannelId": "string",
      "memberLevelName": "string"
    },
    "hasDisplayContent": true,
    "liveChatId": "string",
    "memberMilestoneChatDetails": {
      "memberLevelName": "string",
      "memberMonth": 0,
      "userComment": "string"
    },
    "membershipGiftingDetails": {
      "giftMembershipsCount": 0,
      "giftMembershipsLevelName": "string"
    },
    "messageDeletedDetails": {
      "deletedMessageId": "string"
    },
    "messageRetractedDetails": {
      "retractedMessageId": "string"
    },
    "newSponsorDetails": {
      "isUpgrade": true,
      "memberLevelName": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "superChatDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "tier": 0,
      "userComment": "string"
    },
    "superStickerDetails": {
      "amountDisplayString": "string",
      "amountMicros": "string",
      "currency": "string",
      "superStickerMetadata": {
        "altText": "string",
        "altTextLanguage": "string",
        "stickerId": "string"
      },
      "tier": 0
    },
    "textMessageDetails": {
      "messageText": "string"
    },
    "type": "invalidType",
    "userBannedDetails": {
      "banDurationSeconds": "string",
      "banType": "permanent",
      "bannedUserDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "profileImageUrl": "string"
      }
    }
  }
}
```

A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorDetails|[LiveChatMessageAuthorDetails](#schemalivechatmessageauthordetails)|false|none|The authorDetails object contains basic details about the user that posted this message.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the message.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".|
|snippet|[LiveChatMessageSnippet](#schemalivechatmessagesnippet)|false|none|The snippet object contains basic details about the message.|

<h2 id="tocS_LiveChatMessageAuthorDetails">LiveChatMessageAuthorDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmessageauthordetails"></a>
<a id="schema_LiveChatMessageAuthorDetails"></a>
<a id="tocSlivechatmessageauthordetails"></a>
<a id="tocslivechatmessageauthordetails"></a>

```json
{
  "channelId": "string",
  "channelUrl": "string",
  "displayName": "string",
  "isChatModerator": true,
  "isChatOwner": true,
  "isChatSponsor": true,
  "isVerified": true,
  "profileImageUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The YouTube channel ID.|
|channelUrl|string|false|none|The channel's URL.|
|displayName|string|false|none|The channel's display name.|
|isChatModerator|boolean|false|none|Whether the author is a moderator of the live chat.|
|isChatOwner|boolean|false|none|Whether the author is the owner of the live chat.|
|isChatSponsor|boolean|false|none|Whether the author is a sponsor of the live chat.|
|isVerified|boolean|false|none|Whether the author's identity has been verified by YouTube.|
|profileImageUrl|string|false|none|The channels's avatar URL.|

<h2 id="tocS_LiveChatMessageDeletedDetails">LiveChatMessageDeletedDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmessagedeleteddetails"></a>
<a id="schema_LiveChatMessageDeletedDetails"></a>
<a id="tocSlivechatmessagedeleteddetails"></a>
<a id="tocslivechatmessagedeleteddetails"></a>

```json
{
  "deletedMessageId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedMessageId|string|false|none|none|

<h2 id="tocS_LiveChatMessageListResponse">LiveChatMessageListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmessagelistresponse"></a>
<a id="schema_LiveChatMessageListResponse"></a>
<a id="tocSlivechatmessagelistresponse"></a>
<a id="tocslivechatmessagelistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "authorDetails": {
        "channelId": "string",
        "channelUrl": "string",
        "displayName": "string",
        "isChatModerator": true,
        "isChatOwner": true,
        "isChatSponsor": true,
        "isVerified": true,
        "profileImageUrl": "string"
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveChatMessage",
      "snippet": {
        "authorChannelId": "string",
        "displayMessage": "string",
        "fanFundingEventDetails": {
          "amountDisplayString": "string",
          "amountMicros": "string",
          "currency": "string",
          "userComment": "string"
        },
        "giftMembershipReceivedDetails": {
          "associatedMembershipGiftingMessageId": "string",
          "gifterChannelId": "string",
          "memberLevelName": "string"
        },
        "hasDisplayContent": true,
        "liveChatId": "string",
        "memberMilestoneChatDetails": {
          "memberLevelName": "string",
          "memberMonth": 0,
          "userComment": "string"
        },
        "membershipGiftingDetails": {
          "giftMembershipsCount": 0,
          "giftMembershipsLevelName": "string"
        },
        "messageDeletedDetails": {
          "deletedMessageId": "string"
        },
        "messageRetractedDetails": {
          "retractedMessageId": "string"
        },
        "newSponsorDetails": {
          "isUpgrade": true,
          "memberLevelName": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "superChatDetails": {
          "amountDisplayString": "string",
          "amountMicros": "string",
          "currency": "string",
          "tier": 0,
          "userComment": "string"
        },
        "superStickerDetails": {
          "amountDisplayString": "string",
          "amountMicros": "string",
          "currency": "string",
          "superStickerMetadata": {
            "altText": "string",
            "altTextLanguage": "string",
            "stickerId": "string"
          },
          "tier": 0
        },
        "textMessageDetails": {
          "messageText": "string"
        },
        "type": "invalidType",
        "userBannedDetails": {
          "banDurationSeconds": "string",
          "banType": "permanent",
          "bannedUserDetails": {
            "channelId": "string",
            "channelUrl": "string",
            "displayName": "string",
            "profileImageUrl": "string"
          }
        }
      }
    }
  ],
  "kind": "youtube#liveChatMessageListResponse",
  "nextPageToken": "string",
  "offlineAt": "1970-01-01T00:00:00Z",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "pollingIntervalMillis": 0,
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[LiveChatMessage](#schemalivechatmessage)]|false|none|none|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".|
|nextPageToken|string|false|none|none|
|offlineAt|string(date-time)|false|none|The date and time when the underlying stream went offline.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|pollingIntervalMillis|integer(uint32)|false|none|The amount of time the client should wait before polling again.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_LiveChatMessageRetractedDetails">LiveChatMessageRetractedDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmessageretracteddetails"></a>
<a id="schema_LiveChatMessageRetractedDetails"></a>
<a id="tocSlivechatmessageretracteddetails"></a>
<a id="tocslivechatmessageretracteddetails"></a>

```json
{
  "retractedMessageId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retractedMessageId|string|false|none|none|

<h2 id="tocS_LiveChatMessageSnippet">LiveChatMessageSnippet</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmessagesnippet"></a>
<a id="schema_LiveChatMessageSnippet"></a>
<a id="tocSlivechatmessagesnippet"></a>
<a id="tocslivechatmessagesnippet"></a>

```json
{
  "authorChannelId": "string",
  "displayMessage": "string",
  "fanFundingEventDetails": {
    "amountDisplayString": "string",
    "amountMicros": "string",
    "currency": "string",
    "userComment": "string"
  },
  "giftMembershipReceivedDetails": {
    "associatedMembershipGiftingMessageId": "string",
    "gifterChannelId": "string",
    "memberLevelName": "string"
  },
  "hasDisplayContent": true,
  "liveChatId": "string",
  "memberMilestoneChatDetails": {
    "memberLevelName": "string",
    "memberMonth": 0,
    "userComment": "string"
  },
  "membershipGiftingDetails": {
    "giftMembershipsCount": 0,
    "giftMembershipsLevelName": "string"
  },
  "messageDeletedDetails": {
    "deletedMessageId": "string"
  },
  "messageRetractedDetails": {
    "retractedMessageId": "string"
  },
  "newSponsorDetails": {
    "isUpgrade": true,
    "memberLevelName": "string"
  },
  "publishedAt": "1970-01-01T00:00:00Z",
  "superChatDetails": {
    "amountDisplayString": "string",
    "amountMicros": "string",
    "currency": "string",
    "tier": 0,
    "userComment": "string"
  },
  "superStickerDetails": {
    "amountDisplayString": "string",
    "amountMicros": "string",
    "currency": "string",
    "superStickerMetadata": {
      "altText": "string",
      "altTextLanguage": "string",
      "stickerId": "string"
    },
    "tier": 0
  },
  "textMessageDetails": {
    "messageText": "string"
  },
  "type": "invalidType",
  "userBannedDetails": {
    "banDurationSeconds": "string",
    "banType": "permanent",
    "bannedUserDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    }
  }
}
```

Next ID: 33

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorChannelId|string|false|none|The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase|
|displayMessage|string|false|none|Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent.|
|fanFundingEventDetails|[LiveChatFanFundingEventDetails](#schemalivechatfanfundingeventdetails)|false|none|Details about the funding event, this is only set if the type is 'fanFundingEvent'.|
|giftMembershipReceivedDetails|[LiveChatGiftMembershipReceivedDetails](#schemalivechatgiftmembershipreceiveddetails)|false|none|Details about the Gift Membership Received event, this is only set if the type is 'giftMembershipReceivedEvent'.|
|hasDisplayContent|boolean|false|none|Whether the message has display content that should be displayed to users.|
|liveChatId|string|false|none|none|
|memberMilestoneChatDetails|[LiveChatMemberMilestoneChatDetails](#schemalivechatmembermilestonechatdetails)|false|none|Details about the Member Milestone Chat event, this is only set if the type is 'memberMilestoneChatEvent'.|
|membershipGiftingDetails|[LiveChatMembershipGiftingDetails](#schemalivechatmembershipgiftingdetails)|false|none|Details about the Membership Gifting event, this is only set if the type is 'membershipGiftingEvent'.|
|messageDeletedDetails|[LiveChatMessageDeletedDetails](#schemalivechatmessagedeleteddetails)|false|none|none|
|messageRetractedDetails|[LiveChatMessageRetractedDetails](#schemalivechatmessageretracteddetails)|false|none|none|
|newSponsorDetails|[LiveChatNewSponsorDetails](#schemalivechatnewsponsordetails)|false|none|Details about the New Member Announcement event, this is only set if the type is 'newSponsorEvent'. Please note that "member" is the new term for "sponsor".|
|publishedAt|string(date-time)|false|none|The date and time when the message was orignally published.|
|superChatDetails|[LiveChatSuperChatDetails](#schemalivechatsuperchatdetails)|false|none|Details about the Super Chat event, this is only set if the type is 'superChatEvent'.|
|superStickerDetails|[LiveChatSuperStickerDetails](#schemalivechatsuperstickerdetails)|false|none|Details about the Super Sticker event, this is only set if the type is 'superStickerEvent'.|
|textMessageDetails|[LiveChatTextMessageDetails](#schemalivechattextmessagedetails)|false|none|Details about the text message, this is only set if the type is 'textMessageEvent'.|
|type|string|false|none|The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.|
|userBannedDetails|[LiveChatUserBannedMessageDetails](#schemalivechatuserbannedmessagedetails)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|invalidType|
|type|textMessageEvent|
|type|tombstone|
|type|fanFundingEvent|
|type|chatEndedEvent|
|type|sponsorOnlyModeStartedEvent|
|type|sponsorOnlyModeEndedEvent|
|type|newSponsorEvent|
|type|memberMilestoneChatEvent|
|type|membershipGiftingEvent|
|type|giftMembershipReceivedEvent|
|type|messageDeletedEvent|
|type|messageRetractedEvent|
|type|userBannedEvent|
|type|superChatEvent|
|type|superStickerEvent|

<h2 id="tocS_LiveChatModerator">LiveChatModerator</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmoderator"></a>
<a id="schema_LiveChatModerator"></a>
<a id="tocSlivechatmoderator"></a>
<a id="tocslivechatmoderator"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveChatModerator",
  "snippet": {
    "liveChatId": "string",
    "moderatorDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    }
  }
}
```

A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the moderator.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".|
|snippet|[LiveChatModeratorSnippet](#schemalivechatmoderatorsnippet)|false|none|The snippet object contains basic details about the moderator.|

<h2 id="tocS_LiveChatModeratorListResponse">LiveChatModeratorListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmoderatorlistresponse"></a>
<a id="schema_LiveChatModeratorListResponse"></a>
<a id="tocSlivechatmoderatorlistresponse"></a>
<a id="tocslivechatmoderatorlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveChatModerator",
      "snippet": {
        "liveChatId": "string",
        "moderatorDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        }
      }
    }
  ],
  "kind": "youtube#liveChatModeratorListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[LiveChatModerator](#schemalivechatmoderator)]|false|none|A list of moderators that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_LiveChatModeratorSnippet">LiveChatModeratorSnippet</h2>
<!-- backwards compatibility -->
<a id="schemalivechatmoderatorsnippet"></a>
<a id="schema_LiveChatModeratorSnippet"></a>
<a id="tocSlivechatmoderatorsnippet"></a>
<a id="tocslivechatmoderatorsnippet"></a>

```json
{
  "liveChatId": "string",
  "moderatorDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "profileImageUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liveChatId|string|false|none|The ID of the live chat this moderator can act on.|
|moderatorDetails|[ChannelProfileDetails](#schemachannelprofiledetails)|false|none|Details about the moderator.|

<h2 id="tocS_LiveChatNewSponsorDetails">LiveChatNewSponsorDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatnewsponsordetails"></a>
<a id="schema_LiveChatNewSponsorDetails"></a>
<a id="tocSlivechatnewsponsordetails"></a>
<a id="tocslivechatnewsponsordetails"></a>

```json
{
  "isUpgrade": true,
  "memberLevelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isUpgrade|boolean|false|none|If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false.|
|memberLevelName|string|false|none|The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.|

<h2 id="tocS_LiveChatSuperChatDetails">LiveChatSuperChatDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatsuperchatdetails"></a>
<a id="schema_LiveChatSuperChatDetails"></a>
<a id="tocSlivechatsuperchatdetails"></a>
<a id="tocslivechatsuperchatdetails"></a>

```json
{
  "amountDisplayString": "string",
  "amountMicros": "string",
  "currency": "string",
  "tier": 0,
  "userComment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountDisplayString|string|false|none|A rendered string that displays the fund amount and currency to the user.|
|amountMicros|string(uint64)|false|none|The amount purchased by the user, in micros (1,750,000 micros = 1.75).|
|currency|string|false|none|The currency in which the purchase was made.|
|tier|integer(uint32)|false|none|The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.|
|userComment|string|false|none|The comment added by the user to this Super Chat event.|

<h2 id="tocS_LiveChatSuperStickerDetails">LiveChatSuperStickerDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatsuperstickerdetails"></a>
<a id="schema_LiveChatSuperStickerDetails"></a>
<a id="tocSlivechatsuperstickerdetails"></a>
<a id="tocslivechatsuperstickerdetails"></a>

```json
{
  "amountDisplayString": "string",
  "amountMicros": "string",
  "currency": "string",
  "superStickerMetadata": {
    "altText": "string",
    "altTextLanguage": "string",
    "stickerId": "string"
  },
  "tier": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountDisplayString|string|false|none|A rendered string that displays the fund amount and currency to the user.|
|amountMicros|string(uint64)|false|none|The amount purchased by the user, in micros (1,750,000 micros = 1.75).|
|currency|string|false|none|The currency in which the purchase was made.|
|superStickerMetadata|[SuperStickerMetadata](#schemasuperstickermetadata)|false|none|Information about the Super Sticker.|
|tier|integer(uint32)|false|none|The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.|

<h2 id="tocS_LiveChatTextMessageDetails">LiveChatTextMessageDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechattextmessagedetails"></a>
<a id="schema_LiveChatTextMessageDetails"></a>
<a id="tocSlivechattextmessagedetails"></a>
<a id="tocslivechattextmessagedetails"></a>

```json
{
  "messageText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageText|string|false|none|The user's message.|

<h2 id="tocS_LiveChatUserBannedMessageDetails">LiveChatUserBannedMessageDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivechatuserbannedmessagedetails"></a>
<a id="schema_LiveChatUserBannedMessageDetails"></a>
<a id="tocSlivechatuserbannedmessagedetails"></a>
<a id="tocslivechatuserbannedmessagedetails"></a>

```json
{
  "banDurationSeconds": "string",
  "banType": "permanent",
  "bannedUserDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "profileImageUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banDurationSeconds|string(uint64)|false|none|The duration of the ban. This property is only present if the banType is temporary.|
|banType|string|false|none|The type of ban.|
|bannedUserDetails|[ChannelProfileDetails](#schemachannelprofiledetails)|false|none|The details of the user that was banned.|

#### Enumerated Values

|Property|Value|
|---|---|
|banType|permanent|
|banType|temporary|

<h2 id="tocS_LiveStream">LiveStream</h2>
<!-- backwards compatibility -->
<a id="schemalivestream"></a>
<a id="schema_LiveStream"></a>
<a id="tocSlivestream"></a>
<a id="tocslivestream"></a>

```json
{
  "cdn": {
    "format": "string",
    "frameRate": "30fps",
    "ingestionInfo": {
      "backupIngestionAddress": "string",
      "ingestionAddress": "string",
      "rtmpsBackupIngestionAddress": "string",
      "rtmpsIngestionAddress": "string",
      "streamName": "string"
    },
    "ingestionType": "rtmp",
    "resolution": "240p"
  },
  "contentDetails": {
    "closedCaptionsIngestionUrl": "string",
    "isReusable": true
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#liveStream",
  "snippet": {
    "channelId": "string",
    "description": "string",
    "isDefaultStream": true,
    "publishedAt": "1970-01-01T00:00:00Z",
    "title": "string"
  },
  "status": {
    "healthStatus": {
      "configurationIssues": [
        {
          "description": "string",
          "reason": "string",
          "severity": "info",
          "type": "gopSizeOver"
        }
      ],
      "lastUpdateTimeSeconds": "string",
      "status": "good"
    },
    "streamStatus": "created"
  }
}
```

A live stream describes a live ingestion point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cdn|[CdnSettings](#schemacdnsettings)|false|none|The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.|
|contentDetails|[LiveStreamContentDetails](#schemalivestreamcontentdetails)|false|none|The content_details object contains information about the stream, including the closed captions ingestion URL.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the stream.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".|
|snippet|[LiveStreamSnippet](#schemalivestreamsnippet)|false|none|The snippet object contains basic details about the stream, including its channel, title, and description.|
|status|[LiveStreamStatus](#schemalivestreamstatus)|false|none|The status object contains information about live stream's status.|

<h2 id="tocS_LiveStreamConfigurationIssue">LiveStreamConfigurationIssue</h2>
<!-- backwards compatibility -->
<a id="schemalivestreamconfigurationissue"></a>
<a id="schema_LiveStreamConfigurationIssue"></a>
<a id="tocSlivestreamconfigurationissue"></a>
<a id="tocslivestreamconfigurationissue"></a>

```json
{
  "description": "string",
  "reason": "string",
  "severity": "info",
  "type": "gopSizeOver"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The long-form description of the issue and how to resolve it.|
|reason|string|false|none|The short-form reason for this issue.|
|severity|string|false|none|How severe this issue is to the stream.|
|type|string|false|none|The kind of error happening.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|info|
|severity|warning|
|severity|error|
|type|gopSizeOver|
|type|gopSizeLong|
|type|gopSizeShort|
|type|openGop|
|type|badContainer|
|type|audioBitrateHigh|
|type|audioBitrateLow|
|type|audioSampleRate|
|type|bitrateHigh|
|type|bitrateLow|
|type|audioCodec|
|type|videoCodec|
|type|noAudioStream|
|type|noVideoStream|
|type|multipleVideoStreams|
|type|multipleAudioStreams|
|type|audioTooManyChannels|
|type|interlacedVideo|
|type|frameRateHigh|
|type|resolutionMismatch|
|type|videoCodecMismatch|
|type|videoInterlaceMismatch|
|type|videoProfileMismatch|
|type|videoBitrateMismatch|
|type|framerateMismatch|
|type|gopMismatch|
|type|audioSampleRateMismatch|
|type|audioStereoMismatch|
|type|audioCodecMismatch|
|type|audioBitrateMismatch|
|type|videoResolutionSuboptimal|
|type|videoResolutionUnsupported|
|type|videoIngestionStarved|
|type|videoIngestionFasterThanRealtime|

<h2 id="tocS_LiveStreamContentDetails">LiveStreamContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemalivestreamcontentdetails"></a>
<a id="schema_LiveStreamContentDetails"></a>
<a id="tocSlivestreamcontentdetails"></a>
<a id="tocslivestreamcontentdetails"></a>

```json
{
  "closedCaptionsIngestionUrl": "string",
  "isReusable": true
}
```

Detailed settings of a stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closedCaptionsIngestionUrl|string|false|none|The ingestion URL where the closed captions of this stream are sent.|
|isReusable|boolean|false|none|Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream. |

<h2 id="tocS_LiveStreamHealthStatus">LiveStreamHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemalivestreamhealthstatus"></a>
<a id="schema_LiveStreamHealthStatus"></a>
<a id="tocSlivestreamhealthstatus"></a>
<a id="tocslivestreamhealthstatus"></a>

```json
{
  "configurationIssues": [
    {
      "description": "string",
      "reason": "string",
      "severity": "info",
      "type": "gopSizeOver"
    }
  ],
  "lastUpdateTimeSeconds": "string",
  "status": "good"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationIssues|[[LiveStreamConfigurationIssue](#schemalivestreamconfigurationissue)]|false|none|The configurations issues on this stream|
|lastUpdateTimeSeconds|string(uint64)|false|none|The last time this status was updated (in seconds)|
|status|string|false|none|The status code of this stream|

#### Enumerated Values

|Property|Value|
|---|---|
|status|good|
|status|ok|
|status|bad|
|status|noData|
|status|revoked|

<h2 id="tocS_LiveStreamListResponse">LiveStreamListResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivestreamlistresponse"></a>
<a id="schema_LiveStreamListResponse"></a>
<a id="tocSlivestreamlistresponse"></a>
<a id="tocslivestreamlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "cdn": {
        "format": "string",
        "frameRate": "30fps",
        "ingestionInfo": {
          "backupIngestionAddress": "string",
          "ingestionAddress": "string",
          "rtmpsBackupIngestionAddress": "string",
          "rtmpsIngestionAddress": "string",
          "streamName": "string"
        },
        "ingestionType": "rtmp",
        "resolution": "240p"
      },
      "contentDetails": {
        "closedCaptionsIngestionUrl": "string",
        "isReusable": true
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#liveStream",
      "snippet": {
        "channelId": "string",
        "description": "string",
        "isDefaultStream": true,
        "publishedAt": "1970-01-01T00:00:00Z",
        "title": "string"
      },
      "status": {
        "healthStatus": {
          "configurationIssues": [
            {
              "description": "string",
              "reason": "string",
              "severity": "info",
              "type": "gopSizeOver"
            }
          ],
          "lastUpdateTimeSeconds": "string",
          "status": "good"
        },
        "streamStatus": "created"
      }
    }
  ],
  "kind": "youtube#liveStreamListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[LiveStream](#schemalivestream)]|false|none|A list of live streams that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|Paging details for lists of resources, including total number of items available and number of resources returned in a single page.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_LiveStreamSnippet">LiveStreamSnippet</h2>
<!-- backwards compatibility -->
<a id="schemalivestreamsnippet"></a>
<a id="schema_LiveStreamSnippet"></a>
<a id="tocSlivestreamsnippet"></a>
<a id="tocslivestreamsnippet"></a>

```json
{
  "channelId": "string",
  "description": "string",
  "isDefaultStream": true,
  "publishedAt": "1970-01-01T00:00:00Z",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.|
|description|string|false|none|The stream's description. The value cannot be longer than 10000 characters.|
|isDefaultStream|boolean|false|none|none|
|publishedAt|string(date-time)|false|none|The date and time that the stream was created.|
|title|string|false|none|The stream's title. The value must be between 1 and 128 characters long.|

<h2 id="tocS_LiveStreamStatus">LiveStreamStatus</h2>
<!-- backwards compatibility -->
<a id="schemalivestreamstatus"></a>
<a id="schema_LiveStreamStatus"></a>
<a id="tocSlivestreamstatus"></a>
<a id="tocslivestreamstatus"></a>

```json
{
  "healthStatus": {
    "configurationIssues": [
      {
        "description": "string",
        "reason": "string",
        "severity": "info",
        "type": "gopSizeOver"
      }
    ],
    "lastUpdateTimeSeconds": "string",
    "status": "good"
  },
  "streamStatus": "created"
}
```

Brief description of the live stream status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthStatus|[LiveStreamHealthStatus](#schemalivestreamhealthstatus)|false|none|The health status of the stream.|
|streamStatus|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|streamStatus|created|
|streamStatus|ready|
|streamStatus|active|
|streamStatus|inactive|
|streamStatus|error|

<h2 id="tocS_LocalizedProperty">LocalizedProperty</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedproperty"></a>
<a id="schema_LocalizedProperty"></a>
<a id="tocSlocalizedproperty"></a>
<a id="tocslocalizedproperty"></a>

```json
{
  "defaultLanguage": {
    "value": "string"
  },
  "localized": [
    {
      "language": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLanguage|[LanguageTag](#schemalanguagetag)|false|none|The language of the default property.|
|localized|[[LocalizedString](#schemalocalizedstring)]|false|none|none|

<h2 id="tocS_LocalizedString">LocalizedString</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedstring"></a>
<a id="schema_LocalizedString"></a>
<a id="tocSlocalizedstring"></a>
<a id="tocslocalizedstring"></a>

```json
{
  "language": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "etag": "string",
  "kind": "youtube#member",
  "snippet": {
    "creatorChannelId": "string",
    "memberDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    },
    "membershipsDetails": {
      "accessibleLevels": [
        "string"
      ],
      "highestAccessibleLevel": "string",
      "highestAccessibleLevelDisplayName": "string",
      "membershipsDuration": {
        "memberSince": "string",
        "memberTotalDurationMonths": 0
      },
      "membershipsDurationAtLevels": [
        {
          "level": "string",
          "memberSince": "string",
          "memberTotalDurationMonths": 0
        }
      ]
    }
  }
}
```

A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#member".|
|snippet|[MemberSnippet](#schemamembersnippet)|false|none|The snippet object contains basic details about the member.|

<h2 id="tocS_MemberListResponse">MemberListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamemberlistresponse"></a>
<a id="schema_MemberListResponse"></a>
<a id="tocSmemberlistresponse"></a>
<a id="tocsmemberlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "kind": "youtube#member",
      "snippet": {
        "creatorChannelId": "string",
        "memberDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        },
        "membershipsDetails": {
          "accessibleLevels": [
            "string"
          ],
          "highestAccessibleLevel": "string",
          "highestAccessibleLevelDisplayName": "string",
          "membershipsDuration": {
            "memberSince": "string",
            "memberTotalDurationMonths": 0
          },
          "membershipsDurationAtLevels": [
            {
              "level": "string",
              "memberSince": "string",
              "memberTotalDurationMonths": 0
            }
          ]
        }
      }
    }
  ],
  "kind": "youtube#memberListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Member](#schemamember)]|false|none|A list of members that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|Paging details for lists of resources, including total number of items available and number of resources returned in a single page.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_MemberSnippet">MemberSnippet</h2>
<!-- backwards compatibility -->
<a id="schemamembersnippet"></a>
<a id="schema_MemberSnippet"></a>
<a id="tocSmembersnippet"></a>
<a id="tocsmembersnippet"></a>

```json
{
  "creatorChannelId": "string",
  "memberDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "profileImageUrl": "string"
  },
  "membershipsDetails": {
    "accessibleLevels": [
      "string"
    ],
    "highestAccessibleLevel": "string",
    "highestAccessibleLevelDisplayName": "string",
    "membershipsDuration": {
      "memberSince": "string",
      "memberTotalDurationMonths": 0
    },
    "membershipsDurationAtLevels": [
      {
        "level": "string",
        "memberSince": "string",
        "memberTotalDurationMonths": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creatorChannelId|string|false|none|The id of the channel that's offering memberships.|
|memberDetails|[ChannelProfileDetails](#schemachannelprofiledetails)|false|none|Details about the member.|
|membershipsDetails|[MembershipsDetails](#schemamembershipsdetails)|false|none|Details about the user's membership.|

<h2 id="tocS_MembershipsDetails">MembershipsDetails</h2>
<!-- backwards compatibility -->
<a id="schemamembershipsdetails"></a>
<a id="schema_MembershipsDetails"></a>
<a id="tocSmembershipsdetails"></a>
<a id="tocsmembershipsdetails"></a>

```json
{
  "accessibleLevels": [
    "string"
  ],
  "highestAccessibleLevel": "string",
  "highestAccessibleLevelDisplayName": "string",
  "membershipsDuration": {
    "memberSince": "string",
    "memberTotalDurationMonths": 0
  },
  "membershipsDurationAtLevels": [
    {
      "level": "string",
      "memberSince": "string",
      "memberTotalDurationMonths": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibleLevels|[string]|false|none|Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase.|
|highestAccessibleLevel|string|false|none|Id of the highest level that the user has access to at the moment.|
|highestAccessibleLevelDisplayName|string|false|none|Display name for the highest level that the user has access to at the moment.|
|membershipsDuration|[MembershipsDuration](#schemamembershipsduration)|false|none|Data about memberships duration without taking into consideration pricing levels.|
|membershipsDurationAtLevels|[[MembershipsDurationAtLevel](#schemamembershipsdurationatlevel)]|false|none|Data about memberships duration on particular pricing levels.|

<h2 id="tocS_MembershipsDuration">MembershipsDuration</h2>
<!-- backwards compatibility -->
<a id="schemamembershipsduration"></a>
<a id="schema_MembershipsDuration"></a>
<a id="tocSmembershipsduration"></a>
<a id="tocsmembershipsduration"></a>

```json
{
  "memberSince": "string",
  "memberTotalDurationMonths": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberSince|string|false|none|The date and time when the user became a continuous member across all levels.|
|memberTotalDurationMonths|integer(int32)|false|none|The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).|

<h2 id="tocS_MembershipsDurationAtLevel">MembershipsDurationAtLevel</h2>
<!-- backwards compatibility -->
<a id="schemamembershipsdurationatlevel"></a>
<a id="schema_MembershipsDurationAtLevel"></a>
<a id="tocSmembershipsdurationatlevel"></a>
<a id="tocsmembershipsdurationatlevel"></a>

```json
{
  "level": "string",
  "memberSince": "string",
  "memberTotalDurationMonths": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string|false|none|Pricing level ID.|
|memberSince|string|false|none|The date and time when the user became a continuous member for the given level.|
|memberTotalDurationMonths|integer(int32)|false|none|The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).|

<h2 id="tocS_MembershipsLevel">MembershipsLevel</h2>
<!-- backwards compatibility -->
<a id="schemamembershipslevel"></a>
<a id="schema_MembershipsLevel"></a>
<a id="tocSmembershipslevel"></a>
<a id="tocsmembershipslevel"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#membershipsLevel",
  "snippet": {
    "creatorChannelId": "string",
    "levelDetails": {
      "displayName": "string"
    }
  }
}
```

A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the memberships level.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".|
|snippet|[MembershipsLevelSnippet](#schemamembershipslevelsnippet)|false|none|The snippet object contains basic details about the level.|

<h2 id="tocS_MembershipsLevelListResponse">MembershipsLevelListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershipslevellistresponse"></a>
<a id="schema_MembershipsLevelListResponse"></a>
<a id="tocSmembershipslevellistresponse"></a>
<a id="tocsmembershipslevellistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#membershipsLevel",
      "snippet": {
        "creatorChannelId": "string",
        "levelDetails": {
          "displayName": "string"
        }
      }
    }
  ],
  "kind": "youtube#membershipsLevelListResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[MembershipsLevel](#schemamembershipslevel)]|false|none|A list of pricing levels offered by a creator to the fans.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_MembershipsLevelSnippet">MembershipsLevelSnippet</h2>
<!-- backwards compatibility -->
<a id="schemamembershipslevelsnippet"></a>
<a id="schema_MembershipsLevelSnippet"></a>
<a id="tocSmembershipslevelsnippet"></a>
<a id="tocsmembershipslevelsnippet"></a>

```json
{
  "creatorChannelId": "string",
  "levelDetails": {
    "displayName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creatorChannelId|string|false|none|The id of the channel that's offering channel memberships.|
|levelDetails|[LevelDetails](#schemaleveldetails)|false|none|Details about the pricing level.|

<h2 id="tocS_MonitorStreamInfo">MonitorStreamInfo</h2>
<!-- backwards compatibility -->
<a id="schemamonitorstreaminfo"></a>
<a id="schema_MonitorStreamInfo"></a>
<a id="tocSmonitorstreaminfo"></a>
<a id="tocsmonitorstreaminfo"></a>

```json
{
  "broadcastStreamDelayMs": 0,
  "embedHtml": "string",
  "enableMonitorStream": true
}
```

Settings and Info of the monitor stream

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|broadcastStreamDelayMs|integer(uint32)|false|none|If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.|
|embedHtml|string|false|none|HTML code that embeds a player that plays the monitor stream.|
|enableMonitorStream|boolean|false|none|This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state.|

<h2 id="tocS_PageInfo">PageInfo</h2>
<!-- backwards compatibility -->
<a id="schemapageinfo"></a>
<a id="schema_PageInfo"></a>
<a id="tocSpageinfo"></a>
<a id="tocspageinfo"></a>

```json
{
  "resultsPerPage": 0,
  "totalResults": 0
}
```

Paging details for lists of resources, including total number of items available and number of resources returned in a single page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultsPerPage|integer(int32)|false|none|The number of results included in the API response.|
|totalResults|integer(int32)|false|none|The total number of results in the result set.|

<h2 id="tocS_Playlist">Playlist</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist"></a>
<a id="schema_Playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>

```json
{
  "contentDetails": {
    "itemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlist",
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "player": {
    "embedHtml": "string"
  },
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "defaultLanguage": "string",
    "description": "string",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnailVideoId": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDetails|[PlaylistContentDetails](#schemaplaylistcontentdetails)|false|none|The contentDetails object contains information like video count.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the playlist.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".|
|localizations|object|false|none|Localizations for different languages|
|player|[PlaylistPlayer](#schemaplaylistplayer)|false|none|The player object contains information that you would use to play the playlist in an embedded player.|
|snippet|[PlaylistSnippet](#schemaplaylistsnippet)|false|none|The snippet object contains basic details about the playlist, such as its title and description.|
|status|[PlaylistStatus](#schemaplayliststatus)|false|none|The status object contains status information for the playlist.|

<h2 id="tocS_PlaylistContentDetails">PlaylistContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistcontentdetails"></a>
<a id="schema_PlaylistContentDetails"></a>
<a id="tocSplaylistcontentdetails"></a>
<a id="tocsplaylistcontentdetails"></a>

```json
{
  "itemCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemCount|integer(uint32)|false|none|The number of videos in the playlist.|

<h2 id="tocS_PlaylistItem">PlaylistItem</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistitem"></a>
<a id="schema_PlaylistItem"></a>
<a id="tocSplaylistitem"></a>
<a id="tocsplaylistitem"></a>

```json
{
  "contentDetails": {
    "endAt": "string",
    "note": "string",
    "startAt": "string",
    "videoId": "string",
    "videoPublishedAt": "1970-01-01T00:00:00Z"
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#playlistItem",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "playlistId": "string",
    "position": 0,
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string",
    "videoOwnerChannelId": "string",
    "videoOwnerChannelTitle": "string"
  },
  "status": {
    "privacyStatus": "public"
  }
}
```

A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDetails|[PlaylistItemContentDetails](#schemaplaylistitemcontentdetails)|false|none|The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the playlist item.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".|
|snippet|[PlaylistItemSnippet](#schemaplaylistitemsnippet)|false|none|The snippet object contains basic details about the playlist item, such as its title and position in the playlist.|
|status|[PlaylistItemStatus](#schemaplaylistitemstatus)|false|none|The status object contains information about the playlist item's privacy status.|

<h2 id="tocS_PlaylistItemContentDetails">PlaylistItemContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistitemcontentdetails"></a>
<a id="schema_PlaylistItemContentDetails"></a>
<a id="tocSplaylistitemcontentdetails"></a>
<a id="tocsplaylistitemcontentdetails"></a>

```json
{
  "endAt": "string",
  "note": "string",
  "startAt": "string",
  "videoId": "string",
  "videoPublishedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endAt|string|false|none|The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.|
|note|string|false|none|A user-generated note for this item.|
|startAt|string|false|none|The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.|
|videoPublishedAt|string(date-time)|false|none|The date and time that the video was published to YouTube.|

<h2 id="tocS_PlaylistItemListResponse">PlaylistItemListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistitemlistresponse"></a>
<a id="schema_PlaylistItemListResponse"></a>
<a id="tocSplaylistitemlistresponse"></a>
<a id="tocsplaylistitemlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "endAt": "string",
        "note": "string",
        "startAt": "string",
        "videoId": "string",
        "videoPublishedAt": "1970-01-01T00:00:00Z"
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#playlistItem",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "playlistId": "string",
        "position": 0,
        "publishedAt": "1970-01-01T00:00:00Z",
        "resourceId": {
          "channelId": "string",
          "kind": "string",
          "playlistId": "string",
          "videoId": "string"
        },
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string",
        "videoOwnerChannelId": "string",
        "videoOwnerChannelTitle": "string"
      },
      "status": {
        "privacyStatus": "public"
      }
    }
  ],
  "kind": "youtube#playlistItemListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|none|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[PlaylistItem](#schemaplaylistitem)]|false|none|A list of playlist items that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse". Etag of this resource.|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_PlaylistItemSnippet">PlaylistItemSnippet</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistitemsnippet"></a>
<a id="schema_PlaylistItemSnippet"></a>
<a id="tocSplaylistitemsnippet"></a>
<a id="tocsplaylistitemsnippet"></a>

```json
{
  "channelId": "string",
  "channelTitle": "string",
  "description": "string",
  "playlistId": "string",
  "position": 0,
  "publishedAt": "1970-01-01T00:00:00Z",
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  },
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string",
  "videoOwnerChannelId": "string",
  "videoOwnerChannelTitle": "string"
}
```

Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the user that added the item to the playlist.|
|channelTitle|string|false|none|Channel title for the channel that the playlist item belongs to.|
|description|string|false|none|The item's description.|
|playlistId|string|false|none|The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.|
|position|integer(uint32)|false|none|The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.|
|publishedAt|string(date-time)|false|none|The date and time that the item was added to the playlist.|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The item's title.|
|videoOwnerChannelId|string|false|none|Channel id for the channel this video belongs to.|
|videoOwnerChannelTitle|string|false|none|Channel title for the channel this video belongs to.|

<h2 id="tocS_PlaylistItemStatus">PlaylistItemStatus</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistitemstatus"></a>
<a id="schema_PlaylistItemStatus"></a>
<a id="tocSplaylistitemstatus"></a>
<a id="tocsplaylistitemstatus"></a>

```json
{
  "privacyStatus": "public"
}
```

Information about the playlist item's privacy status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacyStatus|string|false|none|This resource's privacy status.|

#### Enumerated Values

|Property|Value|
|---|---|
|privacyStatus|public|
|privacyStatus|unlisted|
|privacyStatus|private|

<h2 id="tocS_PlaylistListResponse">PlaylistListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistlistresponse"></a>
<a id="schema_PlaylistListResponse"></a>
<a id="tocSplaylistlistresponse"></a>
<a id="tocsplaylistlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "itemCount": 0
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#playlist",
      "localizations": {
        "property1": {
          "description": "string",
          "title": "string"
        },
        "property2": {
          "description": "string",
          "title": "string"
        }
      },
      "player": {
        "embedHtml": "string"
      },
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "defaultLanguage": "string",
        "description": "string",
        "localized": {
          "description": "string",
          "title": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "tags": [
          "string"
        ],
        "thumbnailVideoId": "string",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "status": {
        "privacyStatus": "public"
      }
    }
  ],
  "kind": "youtube#playlistListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Playlist](#schemaplaylist)]|false|none|A list of playlists that match the request criteria|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_PlaylistLocalization">PlaylistLocalization</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistlocalization"></a>
<a id="schema_PlaylistLocalization"></a>
<a id="tocSplaylistlocalization"></a>
<a id="tocsplaylistlocalization"></a>

```json
{
  "description": "string",
  "title": "string"
}
```

Playlist localization setting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The localized strings for playlist's description.|
|title|string|false|none|The localized strings for playlist's title.|

<h2 id="tocS_PlaylistPlayer">PlaylistPlayer</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistplayer"></a>
<a id="schema_PlaylistPlayer"></a>
<a id="tocSplaylistplayer"></a>
<a id="tocsplaylistplayer"></a>

```json
{
  "embedHtml": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedHtml|string|false|none|An <iframe> tag that embeds a player that will play the playlist.|

<h2 id="tocS_PlaylistSnippet">PlaylistSnippet</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistsnippet"></a>
<a id="schema_PlaylistSnippet"></a>
<a id="tocSplaylistsnippet"></a>
<a id="tocsplaylistsnippet"></a>

```json
{
  "channelId": "string",
  "channelTitle": "string",
  "defaultLanguage": "string",
  "description": "string",
  "localized": {
    "description": "string",
    "title": "string"
  },
  "publishedAt": "1970-01-01T00:00:00Z",
  "tags": [
    "string"
  ],
  "thumbnailVideoId": "string",
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic details about a playlist, including title, description and thumbnails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the channel that published the playlist.|
|channelTitle|string|false|none|The channel title of the channel that the video belongs to.|
|defaultLanguage|string|false|none|The language of the playlist's default title and description.|
|description|string|false|none|The playlist's description.|
|localized|[PlaylistLocalization](#schemaplaylistlocalization)|false|none|Localized title and description, read-only.|
|publishedAt|string(date-time)|false|none|The date and time that the playlist was created.|
|tags|[string]|false|none|Keyword tags associated with the playlist.|
|thumbnailVideoId|string|false|none|Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The playlist's title.|

<h2 id="tocS_PlaylistStatus">PlaylistStatus</h2>
<!-- backwards compatibility -->
<a id="schemaplayliststatus"></a>
<a id="schema_PlaylistStatus"></a>
<a id="tocSplayliststatus"></a>
<a id="tocsplayliststatus"></a>

```json
{
  "privacyStatus": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacyStatus|string|false|none|The playlist's privacy status.|

#### Enumerated Values

|Property|Value|
|---|---|
|privacyStatus|public|
|privacyStatus|unlisted|
|privacyStatus|private|

<h2 id="tocS_PropertyValue">PropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalue"></a>
<a id="schema_PropertyValue"></a>
<a id="tocSpropertyvalue"></a>
<a id="tocspropertyvalue"></a>

```json
{
  "property": "string",
  "value": "string"
}
```

A pair Property / Value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property|string|false|none|A property.|
|value|string|false|none|The property's value.|

<h2 id="tocS_RelatedEntity">RelatedEntity</h2>
<!-- backwards compatibility -->
<a id="schemarelatedentity"></a>
<a id="schema_RelatedEntity"></a>
<a id="tocSrelatedentity"></a>
<a id="tocsrelatedentity"></a>

```json
{
  "entity": {
    "id": "string",
    "typeId": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[Entity](#schemaentity)|false|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
{
  "channelId": "string",
  "kind": "string",
  "playlistId": "string",
  "videoId": "string"
}
```

A resource id is a generic reference that points to another YouTube resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.|
|kind|string|false|none|The type of the API resource.|
|playlistId|string|false|none|The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.|

<h2 id="tocS_SearchListResponse">SearchListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchlistresponse"></a>
<a id="schema_SearchListResponse"></a>
<a id="tocSsearchlistresponse"></a>
<a id="tocssearchlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": {
        "channelId": "string",
        "kind": "string",
        "playlistId": "string",
        "videoId": "string"
      },
      "kind": "youtube#searchResult",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "liveBroadcastContent": "none",
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      }
    }
  ],
  "kind": "youtube#searchListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "regionCode": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[SearchResult](#schemasearchresult)]|false|none|Pagination information for token pagination.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|regionCode|string|false|none|none|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_SearchResult">SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "etag": "string",
  "id": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  },
  "kind": "youtube#searchResult",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "liveBroadcastContent": "none",
    "publishedAt": "1970-01-01T00:00:00Z",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  }
}
```

A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|[ResourceId](#schemaresourceid)|false|none|The id object contains information that can be used to uniquely identify the resource that matches the search request.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".|
|snippet|[SearchResultSnippet](#schemasearchresultsnippet)|false|none|The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video's title and the description will be the video's description.|

<h2 id="tocS_SearchResultSnippet">SearchResultSnippet</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultsnippet"></a>
<a id="schema_SearchResultSnippet"></a>
<a id="tocSsearchresultsnippet"></a>
<a id="tocssearchresultsnippet"></a>

```json
{
  "channelId": "string",
  "channelTitle": "string",
  "description": "string",
  "liveBroadcastContent": "none",
  "publishedAt": "1970-01-01T00:00:00Z",
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.|
|channelTitle|string|false|none|The title of the channel that published the resource that the search result identifies.|
|description|string|false|none|A description of the search result.|
|liveBroadcastContent|string|false|none|It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.|
|publishedAt|string(date-time)|false|none|The creation date and time of the resource that the search result identifies.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The title of the search result.|

#### Enumerated Values

|Property|Value|
|---|---|
|liveBroadcastContent|none|
|liveBroadcastContent|upcoming|
|liveBroadcastContent|live|
|liveBroadcastContent|completed|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "contentDetails": {
    "activityType": "subscriptionActivityTypeUnspecified",
    "newItemCount": 0,
    "totalItemCount": 0
  },
  "etag": "string",
  "id": "string",
  "kind": "youtube#subscription",
  "snippet": {
    "channelId": "string",
    "channelTitle": "string",
    "description": "string",
    "publishedAt": "1970-01-01T00:00:00Z",
    "resourceId": {
      "channelId": "string",
      "kind": "string",
      "playlistId": "string",
      "videoId": "string"
    },
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "subscriberSnippet": {
    "channelId": "string",
    "description": "string",
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  }
}
```

A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDetails|[SubscriptionContentDetails](#schemasubscriptioncontentdetails)|false|none|The contentDetails object contains basic statistics about the subscription.|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the subscription.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".|
|snippet|[SubscriptionSnippet](#schemasubscriptionsnippet)|false|none|The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.|
|subscriberSnippet|[SubscriptionSubscriberSnippet](#schemasubscriptionsubscribersnippet)|false|none|The subscriberSnippet object contains basic details about the subscriber.|

<h2 id="tocS_SubscriptionContentDetails">SubscriptionContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncontentdetails"></a>
<a id="schema_SubscriptionContentDetails"></a>
<a id="tocSsubscriptioncontentdetails"></a>
<a id="tocssubscriptioncontentdetails"></a>

```json
{
  "activityType": "subscriptionActivityTypeUnspecified",
  "newItemCount": 0,
  "totalItemCount": 0
}
```

Details about the content to witch a subscription refers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityType|string|false|none|The type of activity this subscription is for (only uploads, everything).|
|newItemCount|integer(uint32)|false|none|The number of new items in the subscription since its content was last read.|
|totalItemCount|integer(uint32)|false|none|The approximate number of items that the subscription points to.|

#### Enumerated Values

|Property|Value|
|---|---|
|activityType|subscriptionActivityTypeUnspecified|
|activityType|all|
|activityType|uploads|

<h2 id="tocS_SubscriptionListResponse">SubscriptionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlistresponse"></a>
<a id="schema_SubscriptionListResponse"></a>
<a id="tocSsubscriptionlistresponse"></a>
<a id="tocssubscriptionlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "contentDetails": {
        "activityType": "subscriptionActivityTypeUnspecified",
        "newItemCount": 0,
        "totalItemCount": 0
      },
      "etag": "string",
      "id": "string",
      "kind": "youtube#subscription",
      "snippet": {
        "channelId": "string",
        "channelTitle": "string",
        "description": "string",
        "publishedAt": "1970-01-01T00:00:00Z",
        "resourceId": {
          "channelId": "string",
          "kind": "string",
          "playlistId": "string",
          "videoId": "string"
        },
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "subscriberSnippet": {
        "channelId": "string",
        "description": "string",
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      }
    }
  ],
  "kind": "youtube#subscriptionListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Subscription](#schemasubscription)]|false|none|A list of subscriptions that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|Paging details for lists of resources, including total number of items available and number of resources returned in a single page.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_SubscriptionSnippet">SubscriptionSnippet</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionsnippet"></a>
<a id="schema_SubscriptionSnippet"></a>
<a id="tocSsubscriptionsnippet"></a>
<a id="tocssubscriptionsnippet"></a>

```json
{
  "channelId": "string",
  "channelTitle": "string",
  "description": "string",
  "publishedAt": "1970-01-01T00:00:00Z",
  "resourceId": {
    "channelId": "string",
    "kind": "string",
    "playlistId": "string",
    "videoId": "string"
  },
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic details about a subscription, including title, description and thumbnails of the subscribed item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the subscriber's channel.|
|channelTitle|string|false|none|Channel title for the channel that the subscription belongs to.|
|description|string|false|none|The subscription's details.|
|publishedAt|string(date-time)|false|none|The date and time that the subscription was created.|
|resourceId|[ResourceId](#schemaresourceid)|false|none|The id object contains information about the channel that the user subscribed to.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The subscription's title.|

<h2 id="tocS_SubscriptionSubscriberSnippet">SubscriptionSubscriberSnippet</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionsubscribersnippet"></a>
<a id="schema_SubscriptionSubscriberSnippet"></a>
<a id="tocSsubscriptionsubscribersnippet"></a>
<a id="tocssubscriptionsubscribersnippet"></a>

```json
{
  "channelId": "string",
  "description": "string",
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelId|string|false|none|The channel ID of the subscriber.|
|description|string|false|none|The description of the subscriber.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|Thumbnails for this subscriber.|
|title|string|false|none|The title of the subscriber.|

<h2 id="tocS_SuperChatEvent">SuperChatEvent</h2>
<!-- backwards compatibility -->
<a id="schemasuperchatevent"></a>
<a id="schema_SuperChatEvent"></a>
<a id="tocSsuperchatevent"></a>
<a id="tocssuperchatevent"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#superChatEvent",
  "snippet": {
    "amountMicros": "string",
    "channelId": "string",
    "commentText": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "currency": "string",
    "displayString": "string",
    "isSuperStickerEvent": true,
    "messageType": 0,
    "superStickerMetadata": {
      "altText": "string",
      "altTextLanguage": "string",
      "stickerId": "string"
    },
    "supporterDetails": {
      "channelId": "string",
      "channelUrl": "string",
      "displayName": "string",
      "profileImageUrl": "string"
    }
  }
}
```

A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube assigns to uniquely identify the Super Chat event.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`.|
|snippet|[SuperChatEventSnippet](#schemasuperchateventsnippet)|false|none|The `snippet` object contains basic details about the Super Chat event.|

<h2 id="tocS_SuperChatEventListResponse">SuperChatEventListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuperchateventlistresponse"></a>
<a id="schema_SuperChatEventListResponse"></a>
<a id="tocSsuperchateventlistresponse"></a>
<a id="tocssuperchateventlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#superChatEvent",
      "snippet": {
        "amountMicros": "string",
        "channelId": "string",
        "commentText": "string",
        "createdAt": "1970-01-01T00:00:00Z",
        "currency": "string",
        "displayString": "string",
        "isSuperStickerEvent": true,
        "messageType": 0,
        "superStickerMetadata": {
          "altText": "string",
          "altTextLanguage": "string",
          "stickerId": "string"
        },
        "supporterDetails": {
          "channelId": "string",
          "channelUrl": "string",
          "displayName": "string",
          "profileImageUrl": "string"
        }
      }
    }
  ],
  "kind": "youtube#superChatEventListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[SuperChatEvent](#schemasuperchatevent)]|false|none|A list of Super Chat purchases that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|Paging details for lists of resources, including total number of items available and number of resources returned in a single page.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_SuperChatEventSnippet">SuperChatEventSnippet</h2>
<!-- backwards compatibility -->
<a id="schemasuperchateventsnippet"></a>
<a id="schema_SuperChatEventSnippet"></a>
<a id="tocSsuperchateventsnippet"></a>
<a id="tocssuperchateventsnippet"></a>

```json
{
  "amountMicros": "string",
  "channelId": "string",
  "commentText": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "currency": "string",
  "displayString": "string",
  "isSuperStickerEvent": true,
  "messageType": 0,
  "superStickerMetadata": {
    "altText": "string",
    "altTextLanguage": "string",
    "stickerId": "string"
  },
  "supporterDetails": {
    "channelId": "string",
    "channelUrl": "string",
    "displayName": "string",
    "profileImageUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountMicros|string(uint64)|false|none|The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.|
|channelId|string|false|none|Channel id where the event occurred.|
|commentText|string|false|none|The text contents of the comment left by the user.|
|createdAt|string(date-time)|false|none|The date and time when the event occurred.|
|currency|string|false|none|The currency in which the purchase was made. ISO 4217.|
|displayString|string|false|none|A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.|
|isSuperStickerEvent|boolean|false|none|True if this event is a Super Sticker event.|
|messageType|integer(uint32)|false|none|The tier for the paid message, which is based on the amount of money spent to purchase the message.|
|superStickerMetadata|[SuperStickerMetadata](#schemasuperstickermetadata)|false|none|If this event is a Super Sticker event, this field will contain metadata about the Super Sticker.|
|supporterDetails|[ChannelProfileDetails](#schemachannelprofiledetails)|false|none|Details about the supporter.|

<h2 id="tocS_SuperStickerMetadata">SuperStickerMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasuperstickermetadata"></a>
<a id="schema_SuperStickerMetadata"></a>
<a id="tocSsuperstickermetadata"></a>
<a id="tocssuperstickermetadata"></a>

```json
{
  "altText": "string",
  "altTextLanguage": "string",
  "stickerId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|altText|string|false|none|Internationalized alt text that describes the sticker image and any animation associated with it.|
|altTextLanguage|string|false|none|Specifies the localization language in which the alt text is returned.|
|stickerId|string|false|none|Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.|

<h2 id="tocS_TestItem">TestItem</h2>
<!-- backwards compatibility -->
<a id="schematestitem"></a>
<a id="schema_TestItem"></a>
<a id="tocStestitem"></a>
<a id="tocstestitem"></a>

```json
{
  "featuredPart": true,
  "gaia": "string",
  "id": "string",
  "snippet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featuredPart|boolean|false|none|none|
|gaia|string(int64)|false|none|none|
|id|string|false|none|none|
|snippet|[TestItemTestItemSnippet](#schematestitemtestitemsnippet)|false|none|none|

<h2 id="tocS_TestItemTestItemSnippet">TestItemTestItemSnippet</h2>
<!-- backwards compatibility -->
<a id="schematestitemtestitemsnippet"></a>
<a id="schema_TestItemTestItemSnippet"></a>
<a id="tocStestitemtestitemsnippet"></a>
<a id="tocstestitemtestitemsnippet"></a>

```json
{}
```

<h2 id="tocS_ThirdPartyLink">ThirdPartyLink</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartylink"></a>
<a id="schema_ThirdPartyLink"></a>
<a id="tocSthirdpartylink"></a>
<a id="tocsthirdpartylink"></a>

```json
{
  "etag": "string",
  "kind": "youtube#thirdPartyLink",
  "linkingToken": "string",
  "snippet": {
    "channelToStoreLink": {
      "merchantId": "string",
      "storeName": "string",
      "storeUrl": "string"
    },
    "type": "linkUnspecified"
  },
  "status": {
    "linkStatus": "unknown"
  }
}
```

A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".|
|linkingToken|string|false|none|The linking_token identifies a YouTube account and channel with which the third party account is linked.|
|snippet|[ThirdPartyLinkSnippet](#schemathirdpartylinksnippet)|false|none|The snippet object contains basic details about the third- party account link.|
|status|[ThirdPartyLinkStatus](#schemathirdpartylinkstatus)|false|none|The status object contains information about the status of the link.|

<h2 id="tocS_ThirdPartyLinkListResponse">ThirdPartyLinkListResponse</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartylinklistresponse"></a>
<a id="schema_ThirdPartyLinkListResponse"></a>
<a id="tocSthirdpartylinklistresponse"></a>
<a id="tocsthirdpartylinklistresponse"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "kind": "youtube#thirdPartyLink",
      "linkingToken": "string",
      "snippet": {
        "channelToStoreLink": {
          "merchantId": "string",
          "storeName": "string",
          "storeUrl": "string"
        },
        "type": "linkUnspecified"
      },
      "status": {
        "linkStatus": "unknown"
      }
    }
  ],
  "kind": "youtube#thirdPartyLinkListResponse"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|items|[[ThirdPartyLink](#schemathirdpartylink)]|false|none|none|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse".|

<h2 id="tocS_ThirdPartyLinkSnippet">ThirdPartyLinkSnippet</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartylinksnippet"></a>
<a id="schema_ThirdPartyLinkSnippet"></a>
<a id="tocSthirdpartylinksnippet"></a>
<a id="tocsthirdpartylinksnippet"></a>

```json
{
  "channelToStoreLink": {
    "merchantId": "string",
    "storeName": "string",
    "storeUrl": "string"
  },
  "type": "linkUnspecified"
}
```

Basic information about a third party account link, including its type and type-specific information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelToStoreLink|[ChannelToStoreLinkDetails](#schemachanneltostorelinkdetails)|false|none|Information specific to a link between a channel and a store on a merchandising platform.|
|type|string|false|none|Type of the link named after the entities that are being linked.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|linkUnspecified|
|type|channelToStoreLink|

<h2 id="tocS_ThirdPartyLinkStatus">ThirdPartyLinkStatus</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartylinkstatus"></a>
<a id="schema_ThirdPartyLinkStatus"></a>
<a id="tocSthirdpartylinkstatus"></a>
<a id="tocsthirdpartylinkstatus"></a>

```json
{
  "linkStatus": "unknown"
}
```

The third-party link status object contains information about the status of the link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkStatus|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|linkStatus|unknown|
|linkStatus|failed|
|linkStatus|pending|
|linkStatus|linked|

<h2 id="tocS_Thumbnail">Thumbnail</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail"></a>
<a id="schema_Thumbnail"></a>
<a id="tocSthumbnail"></a>
<a id="tocsthumbnail"></a>

```json
{
  "height": 0,
  "url": "string",
  "width": 0
}
```

A thumbnail is an image representing a YouTube resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(uint32)|false|none|(Optional) Height of the thumbnail image.|
|url|string|false|none|The thumbnail image's URL.|
|width|integer(uint32)|false|none|(Optional) Width of the thumbnail image.|

<h2 id="tocS_ThumbnailDetails">ThumbnailDetails</h2>
<!-- backwards compatibility -->
<a id="schemathumbnaildetails"></a>
<a id="schema_ThumbnailDetails"></a>
<a id="tocSthumbnaildetails"></a>
<a id="tocsthumbnaildetails"></a>

```json
{
  "high": {
    "height": 0,
    "url": "string",
    "width": 0
  },
  "maxres": {
    "height": 0,
    "url": "string",
    "width": 0
  },
  "medium": {
    "height": 0,
    "url": "string",
    "width": 0
  },
  "standard": {
    "height": 0,
    "url": "string",
    "width": 0
  }
}
```

Internal representation of thumbnails for a YouTube resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|high|[Thumbnail](#schemathumbnail)|false|none|The high quality image for this resource.|
|maxres|[Thumbnail](#schemathumbnail)|false|none|The maximum resolution quality image for this resource.|
|medium|[Thumbnail](#schemathumbnail)|false|none|The medium quality image for this resource.|
|standard|[Thumbnail](#schemathumbnail)|false|none|The standard quality image for this resource.|

<h2 id="tocS_ThumbnailSetResponse">ThumbnailSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailsetresponse"></a>
<a id="schema_ThumbnailSetResponse"></a>
<a id="tocSthumbnailsetresponse"></a>
<a id="tocsthumbnailsetresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    }
  ],
  "kind": "youtube#thumbnailSetResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[ThumbnailDetails](#schemathumbnaildetails)]|false|none|A list of thumbnails.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_TokenPagination">TokenPagination</h2>
<!-- backwards compatibility -->
<a id="schematokenpagination"></a>
<a id="schema_TokenPagination"></a>
<a id="tocStokenpagination"></a>
<a id="tocstokenpagination"></a>

```json
{}
```

Stub token pagination template to suppress results.

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "ageGating": {
    "alcoholContent": true,
    "restricted": true,
    "videoGameRating": "anyone"
  },
  "contentDetails": {
    "caption": "true",
    "contentRating": {
      "acbRating": "acbUnspecified",
      "agcomRating": "agcomUnspecified",
      "anatelRating": "anatelUnspecified",
      "bbfcRating": "bbfcUnspecified",
      "bfvcRating": "bfvcUnspecified",
      "bmukkRating": "bmukkUnspecified",
      "catvRating": "catvUnspecified",
      "catvfrRating": "catvfrUnspecified",
      "cbfcRating": "cbfcUnspecified",
      "cccRating": "cccUnspecified",
      "cceRating": "cceUnspecified",
      "chfilmRating": "chfilmUnspecified",
      "chvrsRating": "chvrsUnspecified",
      "cicfRating": "cicfUnspecified",
      "cnaRating": "cnaUnspecified",
      "cncRating": "cncUnspecified",
      "csaRating": "csaUnspecified",
      "cscfRating": "cscfUnspecified",
      "czfilmRating": "czfilmUnspecified",
      "djctqRating": "djctqUnspecified",
      "djctqRatingReasons": [
        "djctqRatingReasonUnspecified"
      ],
      "ecbmctRating": "ecbmctUnspecified",
      "eefilmRating": "eefilmUnspecified",
      "egfilmRating": "egfilmUnspecified",
      "eirinRating": "eirinUnspecified",
      "fcbmRating": "fcbmUnspecified",
      "fcoRating": "fcoUnspecified",
      "fmocRating": "fmocUnspecified",
      "fpbRating": "fpbUnspecified",
      "fpbRatingReasons": [
        "fpbRatingReasonUnspecified"
      ],
      "fskRating": "fskUnspecified",
      "grfilmRating": "grfilmUnspecified",
      "icaaRating": "icaaUnspecified",
      "ifcoRating": "ifcoUnspecified",
      "ilfilmRating": "ilfilmUnspecified",
      "incaaRating": "incaaUnspecified",
      "kfcbRating": "kfcbUnspecified",
      "kijkwijzerRating": "kijkwijzerUnspecified",
      "kmrbRating": "kmrbUnspecified",
      "lsfRating": "lsfUnspecified",
      "mccaaRating": "mccaaUnspecified",
      "mccypRating": "mccypUnspecified",
      "mcstRating": "mcstUnspecified",
      "mdaRating": "mdaUnspecified",
      "medietilsynetRating": "medietilsynetUnspecified",
      "mekuRating": "mekuUnspecified",
      "menaMpaaRating": "menaMpaaUnspecified",
      "mibacRating": "mibacUnspecified",
      "mocRating": "mocUnspecified",
      "moctwRating": "moctwUnspecified",
      "mpaaRating": "mpaaUnspecified",
      "mpaatRating": "mpaatUnspecified",
      "mtrcbRating": "mtrcbUnspecified",
      "nbcRating": "nbcUnspecified",
      "nbcplRating": "nbcplUnspecified",
      "nfrcRating": "nfrcUnspecified",
      "nfvcbRating": "nfvcbUnspecified",
      "nkclvRating": "nkclvUnspecified",
      "nmcRating": "nmcUnspecified",
      "oflcRating": "oflcUnspecified",
      "pefilmRating": "pefilmUnspecified",
      "rcnofRating": "rcnofUnspecified",
      "resorteviolenciaRating": "resorteviolenciaUnspecified",
      "rtcRating": "rtcUnspecified",
      "rteRating": "rteUnspecified",
      "russiaRating": "russiaUnspecified",
      "skfilmRating": "skfilmUnspecified",
      "smaisRating": "smaisUnspecified",
      "smsaRating": "smsaUnspecified",
      "tvpgRating": "tvpgUnspecified",
      "ytRating": "ytUnspecified"
    },
    "countryRestriction": {
      "allowed": true,
      "exception": [
        "string"
      ]
    },
    "definition": "sd",
    "dimension": "string",
    "duration": "string",
    "hasCustomThumbnail": true,
    "licensedContent": true,
    "projection": "rectangular",
    "regionRestriction": {
      "allowed": [
        "string"
      ],
      "blocked": [
        "string"
      ]
    }
  },
  "etag": "string",
  "fileDetails": {
    "audioStreams": [
      {
        "bitrateBps": "string",
        "channelCount": 0,
        "codec": "string",
        "vendor": "string"
      }
    ],
    "bitrateBps": "string",
    "container": "string",
    "creationTime": "string",
    "durationMs": "string",
    "fileName": "string",
    "fileSize": "string",
    "fileType": "video",
    "videoStreams": [
      {
        "aspectRatio": 0,
        "bitrateBps": "string",
        "codec": "string",
        "frameRateFps": 0,
        "heightPixels": 0,
        "rotation": "none",
        "vendor": "string",
        "widthPixels": 0
      }
    ]
  },
  "id": "string",
  "kind": "youtube#video",
  "liveStreamingDetails": {
    "activeLiveChatId": "string",
    "actualEndTime": "1970-01-01T00:00:00Z",
    "actualStartTime": "1970-01-01T00:00:00Z",
    "concurrentViewers": "string",
    "scheduledEndTime": "1970-01-01T00:00:00Z",
    "scheduledStartTime": "1970-01-01T00:00:00Z"
  },
  "localizations": {
    "property1": {
      "description": "string",
      "title": "string"
    },
    "property2": {
      "description": "string",
      "title": "string"
    }
  },
  "monetizationDetails": {
    "access": {
      "allowed": true,
      "exception": [
        "string"
      ]
    }
  },
  "player": {
    "embedHeight": "string",
    "embedHtml": "string",
    "embedWidth": "string"
  },
  "processingDetails": {
    "editorSuggestionsAvailability": "string",
    "fileDetailsAvailability": "string",
    "processingFailureReason": "uploadFailed",
    "processingIssuesAvailability": "string",
    "processingProgress": {
      "partsProcessed": "string",
      "partsTotal": "string",
      "timeLeftMs": "string"
    },
    "processingStatus": "processing",
    "tagSuggestionsAvailability": "string",
    "thumbnailsAvailability": "string"
  },
  "projectDetails": {},
  "recordingDetails": {
    "location": {
      "altitude": 0,
      "latitude": 0,
      "longitude": 0
    },
    "locationDescription": "string",
    "recordingDate": "1970-01-01T00:00:00Z"
  },
  "snippet": {
    "categoryId": "string",
    "channelId": "string",
    "channelTitle": "string",
    "defaultAudioLanguage": "string",
    "defaultLanguage": "string",
    "description": "string",
    "liveBroadcastContent": "none",
    "localized": {
      "description": "string",
      "title": "string"
    },
    "publishedAt": "1970-01-01T00:00:00Z",
    "tags": [
      "string"
    ],
    "thumbnails": {
      "high": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "maxres": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "medium": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "standard": {
        "height": 0,
        "url": "string",
        "width": 0
      }
    },
    "title": "string"
  },
  "statistics": {
    "commentCount": "string",
    "dislikeCount": "string",
    "favoriteCount": "string",
    "likeCount": "string",
    "viewCount": "string"
  },
  "status": {
    "embeddable": true,
    "failureReason": "conversion",
    "license": "youtube",
    "madeForKids": true,
    "privacyStatus": "public",
    "publicStatsViewable": true,
    "publishAt": "1970-01-01T00:00:00Z",
    "rejectionReason": "copyright",
    "selfDeclaredMadeForKids": true,
    "uploadStatus": "uploaded"
  },
  "suggestions": {
    "editorSuggestions": [
      "videoAutoLevels"
    ],
    "processingErrors": [
      "audioFile"
    ],
    "processingHints": [
      "nonStreamableMov"
    ],
    "processingWarnings": [
      "unknownContainer"
    ],
    "tagSuggestions": [
      {
        "categoryRestricts": [
          "string"
        ],
        "tag": "string"
      }
    ]
  },
  "topicDetails": {
    "relevantTopicIds": [
      "string"
    ],
    "topicCategories": [
      "string"
    ],
    "topicIds": [
      "string"
    ]
  }
}
```

A *video* resource represents a YouTube video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageGating|[VideoAgeGating](#schemavideoagegating)|false|none|Age restriction details related to a video. This data can only be retrieved by the video owner.|
|contentDetails|[VideoContentDetails](#schemavideocontentdetails)|false|none|The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.|
|etag|string|false|none|Etag of this resource.|
|fileDetails|[VideoFileDetails](#schemavideofiledetails)|false|none|The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the video.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#video".|
|liveStreamingDetails|[VideoLiveStreamingDetails](#schemavideolivestreamingdetails)|false|none|The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.|
|localizations|object|false|none|The localizations object contains localized versions of the basic details about the video, such as its title and description.|
|monetizationDetails|[VideoMonetizationDetails](#schemavideomonetizationdetails)|false|none|The monetizationDetails object encapsulates information about the monetization status of the video.|
|player|[VideoPlayer](#schemavideoplayer)|false|none|The player object contains information that you would use to play the video in an embedded player.|
|processingDetails|[VideoProcessingDetails](#schemavideoprocessingdetails)|false|none|The processingDetails object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video. The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.|
|projectDetails|[VideoProjectDetails](#schemavideoprojectdetails)|false|none|The projectDetails object contains information about the project specific video metadata. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677|
|recordingDetails|[VideoRecordingDetails](#schemavideorecordingdetails)|false|none|The recordingDetails object encapsulates information about the location, date and address where the video was recorded.|
|snippet|[VideoSnippet](#schemavideosnippet)|false|none|The snippet object contains basic details about the video, such as its title, description, and category.|
|statistics|[VideoStatistics](#schemavideostatistics)|false|none|The statistics object contains statistics about the video.|
|status|[VideoStatus](#schemavideostatus)|false|none|The status object contains information about the video's uploading, processing, and privacy statuses.|
|suggestions|[VideoSuggestions](#schemavideosuggestions)|false|none|The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.|
|topicDetails|[VideoTopicDetails](#schemavideotopicdetails)|false|none|The topicDetails object encapsulates information about Freebase topics associated with the video.|

<h2 id="tocS_VideoAbuseReport">VideoAbuseReport</h2>
<!-- backwards compatibility -->
<a id="schemavideoabusereport"></a>
<a id="schema_VideoAbuseReport"></a>
<a id="tocSvideoabusereport"></a>
<a id="tocsvideoabusereport"></a>

```json
{
  "comments": "string",
  "language": "string",
  "reasonId": "string",
  "secondaryReasonId": "string",
  "videoId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|string|false|none|Additional comments regarding the abuse report.|
|language|string|false|none|The language that the content was viewed in.|
|reasonId|string|false|none|The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.|
|secondaryReasonId|string|false|none|The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify the video.|

<h2 id="tocS_VideoAbuseReportReason">VideoAbuseReportReason</h2>
<!-- backwards compatibility -->
<a id="schemavideoabusereportreason"></a>
<a id="schema_VideoAbuseReportReason"></a>
<a id="tocSvideoabusereportreason"></a>
<a id="tocsvideoabusereportreason"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#videoAbuseReportReason",
  "snippet": {
    "label": "string",
    "secondaryReasons": [
      {
        "id": "string",
        "label": "string"
      }
    ]
  }
}
```

A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID of this abuse report reason.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`.|
|snippet|[VideoAbuseReportReasonSnippet](#schemavideoabusereportreasonsnippet)|false|none|The `snippet` object contains basic details about the abuse report reason.|

<h2 id="tocS_VideoAbuseReportReasonListResponse">VideoAbuseReportReasonListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideoabusereportreasonlistresponse"></a>
<a id="schema_VideoAbuseReportReasonListResponse"></a>
<a id="tocSvideoabusereportreasonlistresponse"></a>
<a id="tocsvideoabusereportreasonlistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#videoAbuseReportReason",
      "snippet": {
        "label": "string",
        "secondaryReasons": [
          {
            "id": "string",
            "label": "string"
          }
        ]
      }
    }
  ],
  "kind": "youtube#videoAbuseReportReasonListResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[VideoAbuseReportReason](#schemavideoabusereportreason)]|false|none|A list of valid abuse reasons that are used with `video.ReportAbuse`.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`.|
|visitorId|string|false|none|The `visitorId` identifies the visitor.|

<h2 id="tocS_VideoAbuseReportReasonSnippet">VideoAbuseReportReasonSnippet</h2>
<!-- backwards compatibility -->
<a id="schemavideoabusereportreasonsnippet"></a>
<a id="schema_VideoAbuseReportReasonSnippet"></a>
<a id="tocSvideoabusereportreasonsnippet"></a>
<a id="tocsvideoabusereportreasonsnippet"></a>

```json
{
  "label": "string",
  "secondaryReasons": [
    {
      "id": "string",
      "label": "string"
    }
  ]
}
```

Basic details about a video category, such as its localized title.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|The localized label belonging to this abuse report reason.|
|secondaryReasons|[[VideoAbuseReportSecondaryReason](#schemavideoabusereportsecondaryreason)]|false|none|The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)|

<h2 id="tocS_VideoAbuseReportSecondaryReason">VideoAbuseReportSecondaryReason</h2>
<!-- backwards compatibility -->
<a id="schemavideoabusereportsecondaryreason"></a>
<a id="schema_VideoAbuseReportSecondaryReason"></a>
<a id="tocSvideoabusereportsecondaryreason"></a>
<a id="tocsvideoabusereportsecondaryreason"></a>

```json
{
  "id": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of this abuse report secondary reason.|
|label|string|false|none|The localized label for this abuse report secondary reason.|

<h2 id="tocS_VideoAgeGating">VideoAgeGating</h2>
<!-- backwards compatibility -->
<a id="schemavideoagegating"></a>
<a id="schema_VideoAgeGating"></a>
<a id="tocSvideoagegating"></a>
<a id="tocsvideoagegating"></a>

```json
{
  "alcoholContent": true,
  "restricted": true,
  "videoGameRating": "anyone"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alcoholContent|boolean|false|none|Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.|
|restricted|boolean|false|none|Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.|
|videoGameRating|string|false|none|Video game rating, if any.|

#### Enumerated Values

|Property|Value|
|---|---|
|videoGameRating|anyone|
|videoGameRating|m15Plus|
|videoGameRating|m16Plus|
|videoGameRating|m17Plus|

<h2 id="tocS_VideoCategory">VideoCategory</h2>
<!-- backwards compatibility -->
<a id="schemavideocategory"></a>
<a id="schema_VideoCategory"></a>
<a id="tocSvideocategory"></a>
<a id="tocsvideocategory"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "youtube#videoCategory",
  "snippet": {
    "assignable": true,
    "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
    "title": "string"
  }
}
```

A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|id|string|false|none|The ID that YouTube uses to uniquely identify the video category.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".|
|snippet|[VideoCategorySnippet](#schemavideocategorysnippet)|false|none|The snippet object contains basic details about the video category, including its title.|

<h2 id="tocS_VideoCategoryListResponse">VideoCategoryListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideocategorylistresponse"></a>
<a id="schema_VideoCategoryListResponse"></a>
<a id="tocSvideocategorylistresponse"></a>
<a id="tocsvideocategorylistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "youtube#videoCategory",
      "snippet": {
        "assignable": true,
        "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
        "title": "string"
      }
    }
  ],
  "kind": "youtube#videoCategoryListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[VideoCategory](#schemavideocategory)]|false|none|A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_VideoCategorySnippet">VideoCategorySnippet</h2>
<!-- backwards compatibility -->
<a id="schemavideocategorysnippet"></a>
<a id="schema_VideoCategorySnippet"></a>
<a id="tocSvideocategorysnippet"></a>
<a id="tocsvideocategorysnippet"></a>

```json
{
  "assignable": true,
  "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
  "title": "string"
}
```

Basic details about a video category, such as its localized title.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignable|boolean|false|none|none|
|channelId|string|false|none|The YouTube channel that created the video category.|
|title|string|false|none|The video category's title.|

<h2 id="tocS_VideoContentDetails">VideoContentDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideocontentdetails"></a>
<a id="schema_VideoContentDetails"></a>
<a id="tocSvideocontentdetails"></a>
<a id="tocsvideocontentdetails"></a>

```json
{
  "caption": "true",
  "contentRating": {
    "acbRating": "acbUnspecified",
    "agcomRating": "agcomUnspecified",
    "anatelRating": "anatelUnspecified",
    "bbfcRating": "bbfcUnspecified",
    "bfvcRating": "bfvcUnspecified",
    "bmukkRating": "bmukkUnspecified",
    "catvRating": "catvUnspecified",
    "catvfrRating": "catvfrUnspecified",
    "cbfcRating": "cbfcUnspecified",
    "cccRating": "cccUnspecified",
    "cceRating": "cceUnspecified",
    "chfilmRating": "chfilmUnspecified",
    "chvrsRating": "chvrsUnspecified",
    "cicfRating": "cicfUnspecified",
    "cnaRating": "cnaUnspecified",
    "cncRating": "cncUnspecified",
    "csaRating": "csaUnspecified",
    "cscfRating": "cscfUnspecified",
    "czfilmRating": "czfilmUnspecified",
    "djctqRating": "djctqUnspecified",
    "djctqRatingReasons": [
      "djctqRatingReasonUnspecified"
    ],
    "ecbmctRating": "ecbmctUnspecified",
    "eefilmRating": "eefilmUnspecified",
    "egfilmRating": "egfilmUnspecified",
    "eirinRating": "eirinUnspecified",
    "fcbmRating": "fcbmUnspecified",
    "fcoRating": "fcoUnspecified",
    "fmocRating": "fmocUnspecified",
    "fpbRating": "fpbUnspecified",
    "fpbRatingReasons": [
      "fpbRatingReasonUnspecified"
    ],
    "fskRating": "fskUnspecified",
    "grfilmRating": "grfilmUnspecified",
    "icaaRating": "icaaUnspecified",
    "ifcoRating": "ifcoUnspecified",
    "ilfilmRating": "ilfilmUnspecified",
    "incaaRating": "incaaUnspecified",
    "kfcbRating": "kfcbUnspecified",
    "kijkwijzerRating": "kijkwijzerUnspecified",
    "kmrbRating": "kmrbUnspecified",
    "lsfRating": "lsfUnspecified",
    "mccaaRating": "mccaaUnspecified",
    "mccypRating": "mccypUnspecified",
    "mcstRating": "mcstUnspecified",
    "mdaRating": "mdaUnspecified",
    "medietilsynetRating": "medietilsynetUnspecified",
    "mekuRating": "mekuUnspecified",
    "menaMpaaRating": "menaMpaaUnspecified",
    "mibacRating": "mibacUnspecified",
    "mocRating": "mocUnspecified",
    "moctwRating": "moctwUnspecified",
    "mpaaRating": "mpaaUnspecified",
    "mpaatRating": "mpaatUnspecified",
    "mtrcbRating": "mtrcbUnspecified",
    "nbcRating": "nbcUnspecified",
    "nbcplRating": "nbcplUnspecified",
    "nfrcRating": "nfrcUnspecified",
    "nfvcbRating": "nfvcbUnspecified",
    "nkclvRating": "nkclvUnspecified",
    "nmcRating": "nmcUnspecified",
    "oflcRating": "oflcUnspecified",
    "pefilmRating": "pefilmUnspecified",
    "rcnofRating": "rcnofUnspecified",
    "resorteviolenciaRating": "resorteviolenciaUnspecified",
    "rtcRating": "rtcUnspecified",
    "rteRating": "rteUnspecified",
    "russiaRating": "russiaUnspecified",
    "skfilmRating": "skfilmUnspecified",
    "smaisRating": "smaisUnspecified",
    "smsaRating": "smsaUnspecified",
    "tvpgRating": "tvpgUnspecified",
    "ytRating": "ytUnspecified"
  },
  "countryRestriction": {
    "allowed": true,
    "exception": [
      "string"
    ]
  },
  "definition": "sd",
  "dimension": "string",
  "duration": "string",
  "hasCustomThumbnail": true,
  "licensedContent": true,
  "projection": "rectangular",
  "regionRestriction": {
    "allowed": [
      "string"
    ],
    "blocked": [
      "string"
    ]
  }
}
```

Details about the content of a YouTube Video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|The value of captions indicates whether the video has captions or not.|
|contentRating|[ContentRating](#schemacontentrating)|false|none|Specifies the ratings that the video received under various rating schemes.|
|countryRestriction|[AccessPolicy](#schemaaccesspolicy)|false|none|The countryRestriction object contains information about the countries where a video is (or is not) viewable.|
|definition|string|false|none|The value of definition indicates whether the video is available in high definition or only in standard definition.|
|dimension|string|false|none|The value of dimension indicates whether the video is available in 3D or in 2D.|
|duration|string|false|none|The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.|
|hasCustomThumbnail|boolean|false|none|Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.|
|licensedContent|boolean|false|none|The value of is_license_content indicates whether the video is licensed content.|
|projection|string|false|none|Specifies the projection format of the video.|
|regionRestriction|[VideoContentDetailsRegionRestriction](#schemavideocontentdetailsregionrestriction)|false|none|The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.|

#### Enumerated Values

|Property|Value|
|---|---|
|caption|true|
|caption|false|
|definition|sd|
|definition|hd|
|projection|rectangular|
|projection|360|

<h2 id="tocS_VideoContentDetailsRegionRestriction">VideoContentDetailsRegionRestriction</h2>
<!-- backwards compatibility -->
<a id="schemavideocontentdetailsregionrestriction"></a>
<a id="schema_VideoContentDetailsRegionRestriction"></a>
<a id="tocSvideocontentdetailsregionrestriction"></a>
<a id="tocsvideocontentdetailsregionrestriction"></a>

```json
{
  "allowed": [
    "string"
  ],
  "blocked": [
    "string"
  ]
}
```

DEPRECATED Region restriction of the video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|[string]|false|none|A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.|
|blocked|[string]|false|none|A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.|

<h2 id="tocS_VideoFileDetails">VideoFileDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideofiledetails"></a>
<a id="schema_VideoFileDetails"></a>
<a id="tocSvideofiledetails"></a>
<a id="tocsvideofiledetails"></a>

```json
{
  "audioStreams": [
    {
      "bitrateBps": "string",
      "channelCount": 0,
      "codec": "string",
      "vendor": "string"
    }
  ],
  "bitrateBps": "string",
  "container": "string",
  "creationTime": "string",
  "durationMs": "string",
  "fileName": "string",
  "fileSize": "string",
  "fileType": "video",
  "videoStreams": [
    {
      "aspectRatio": 0,
      "bitrateBps": "string",
      "codec": "string",
      "frameRateFps": 0,
      "heightPixels": 0,
      "rotation": "none",
      "vendor": "string",
      "widthPixels": 0
    }
  ]
}
```

Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioStreams|[[VideoFileDetailsAudioStream](#schemavideofiledetailsaudiostream)]|false|none|A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.|
|bitrateBps|string(uint64)|false|none|The uploaded video file's combined (video and audio) bitrate in bits per second.|
|container|string|false|none|The uploaded video file's container format.|
|creationTime|string|false|none|The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM |
|durationMs|string(uint64)|false|none|The length of the uploaded video in milliseconds.|
|fileName|string|false|none|The uploaded file's name. This field is present whether a video file or another type of file was uploaded.|
|fileSize|string(uint64)|false|none|The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.|
|fileType|string|false|none|The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.|
|videoStreams|[[VideoFileDetailsVideoStream](#schemavideofiledetailsvideostream)]|false|none|A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.|

#### Enumerated Values

|Property|Value|
|---|---|
|fileType|video|
|fileType|audio|
|fileType|image|
|fileType|archive|
|fileType|document|
|fileType|project|
|fileType|other|

<h2 id="tocS_VideoFileDetailsAudioStream">VideoFileDetailsAudioStream</h2>
<!-- backwards compatibility -->
<a id="schemavideofiledetailsaudiostream"></a>
<a id="schema_VideoFileDetailsAudioStream"></a>
<a id="tocSvideofiledetailsaudiostream"></a>
<a id="tocsvideofiledetailsaudiostream"></a>

```json
{
  "bitrateBps": "string",
  "channelCount": 0,
  "codec": "string",
  "vendor": "string"
}
```

Information about an audio stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bitrateBps|string(uint64)|false|none|The audio stream's bitrate, in bits per second.|
|channelCount|integer(uint32)|false|none|The number of audio channels that the stream contains.|
|codec|string|false|none|The audio codec that the stream uses.|
|vendor|string|false|none|A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.|

<h2 id="tocS_VideoFileDetailsVideoStream">VideoFileDetailsVideoStream</h2>
<!-- backwards compatibility -->
<a id="schemavideofiledetailsvideostream"></a>
<a id="schema_VideoFileDetailsVideoStream"></a>
<a id="tocSvideofiledetailsvideostream"></a>
<a id="tocsvideofiledetailsvideostream"></a>

```json
{
  "aspectRatio": 0,
  "bitrateBps": "string",
  "codec": "string",
  "frameRateFps": 0,
  "heightPixels": 0,
  "rotation": "none",
  "vendor": "string",
  "widthPixels": 0
}
```

Information about a video stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspectRatio|number(double)|false|none|The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.|
|bitrateBps|string(uint64)|false|none|The video stream's bitrate, in bits per second.|
|codec|string|false|none|The video codec that the stream uses.|
|frameRateFps|number(double)|false|none|The video stream's frame rate, in frames per second.|
|heightPixels|integer(uint32)|false|none|The encoded video content's height in pixels.|
|rotation|string|false|none|The amount that YouTube needs to rotate the original source content to properly display the video.|
|vendor|string|false|none|A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.|
|widthPixels|integer(uint32)|false|none|The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.|

#### Enumerated Values

|Property|Value|
|---|---|
|rotation|none|
|rotation|clockwise|
|rotation|upsideDown|
|rotation|counterClockwise|
|rotation|other|

<h2 id="tocS_VideoGetRatingResponse">VideoGetRatingResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideogetratingresponse"></a>
<a id="schema_VideoGetRatingResponse"></a>
<a id="tocSvideogetratingresponse"></a>
<a id="tocsvideogetratingresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "rating": "none",
      "videoId": "string"
    }
  ],
  "kind": "youtube#videoGetRatingResponse",
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[VideoRating](#schemavideorating)]|false|none|A list of ratings that match the request criteria.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_VideoListResponse">VideoListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideolistresponse"></a>
<a id="schema_VideoListResponse"></a>
<a id="tocSvideolistresponse"></a>
<a id="tocsvideolistresponse"></a>

```json
{
  "etag": "string",
  "eventId": "string",
  "items": [
    {
      "ageGating": {
        "alcoholContent": true,
        "restricted": true,
        "videoGameRating": "anyone"
      },
      "contentDetails": {
        "caption": "true",
        "contentRating": {
          "acbRating": "acbUnspecified",
          "agcomRating": "agcomUnspecified",
          "anatelRating": "anatelUnspecified",
          "bbfcRating": "bbfcUnspecified",
          "bfvcRating": "bfvcUnspecified",
          "bmukkRating": "bmukkUnspecified",
          "catvRating": "catvUnspecified",
          "catvfrRating": "catvfrUnspecified",
          "cbfcRating": "cbfcUnspecified",
          "cccRating": "cccUnspecified",
          "cceRating": "cceUnspecified",
          "chfilmRating": "chfilmUnspecified",
          "chvrsRating": "chvrsUnspecified",
          "cicfRating": "cicfUnspecified",
          "cnaRating": "cnaUnspecified",
          "cncRating": "cncUnspecified",
          "csaRating": "csaUnspecified",
          "cscfRating": "cscfUnspecified",
          "czfilmRating": "czfilmUnspecified",
          "djctqRating": "djctqUnspecified",
          "djctqRatingReasons": [
            "djctqRatingReasonUnspecified"
          ],
          "ecbmctRating": "ecbmctUnspecified",
          "eefilmRating": "eefilmUnspecified",
          "egfilmRating": "egfilmUnspecified",
          "eirinRating": "eirinUnspecified",
          "fcbmRating": "fcbmUnspecified",
          "fcoRating": "fcoUnspecified",
          "fmocRating": "fmocUnspecified",
          "fpbRating": "fpbUnspecified",
          "fpbRatingReasons": [
            "fpbRatingReasonUnspecified"
          ],
          "fskRating": "fskUnspecified",
          "grfilmRating": "grfilmUnspecified",
          "icaaRating": "icaaUnspecified",
          "ifcoRating": "ifcoUnspecified",
          "ilfilmRating": "ilfilmUnspecified",
          "incaaRating": "incaaUnspecified",
          "kfcbRating": "kfcbUnspecified",
          "kijkwijzerRating": "kijkwijzerUnspecified",
          "kmrbRating": "kmrbUnspecified",
          "lsfRating": "lsfUnspecified",
          "mccaaRating": "mccaaUnspecified",
          "mccypRating": "mccypUnspecified",
          "mcstRating": "mcstUnspecified",
          "mdaRating": "mdaUnspecified",
          "medietilsynetRating": "medietilsynetUnspecified",
          "mekuRating": "mekuUnspecified",
          "menaMpaaRating": "menaMpaaUnspecified",
          "mibacRating": "mibacUnspecified",
          "mocRating": "mocUnspecified",
          "moctwRating": "moctwUnspecified",
          "mpaaRating": "mpaaUnspecified",
          "mpaatRating": "mpaatUnspecified",
          "mtrcbRating": "mtrcbUnspecified",
          "nbcRating": "nbcUnspecified",
          "nbcplRating": "nbcplUnspecified",
          "nfrcRating": "nfrcUnspecified",
          "nfvcbRating": "nfvcbUnspecified",
          "nkclvRating": "nkclvUnspecified",
          "nmcRating": "nmcUnspecified",
          "oflcRating": "oflcUnspecified",
          "pefilmRating": "pefilmUnspecified",
          "rcnofRating": "rcnofUnspecified",
          "resorteviolenciaRating": "resorteviolenciaUnspecified",
          "rtcRating": "rtcUnspecified",
          "rteRating": "rteUnspecified",
          "russiaRating": "russiaUnspecified",
          "skfilmRating": "skfilmUnspecified",
          "smaisRating": "smaisUnspecified",
          "smsaRating": "smsaUnspecified",
          "tvpgRating": "tvpgUnspecified",
          "ytRating": "ytUnspecified"
        },
        "countryRestriction": {
          "allowed": true,
          "exception": [
            "string"
          ]
        },
        "definition": "sd",
        "dimension": "string",
        "duration": "string",
        "hasCustomThumbnail": true,
        "licensedContent": true,
        "projection": "rectangular",
        "regionRestriction": {
          "allowed": [
            "string"
          ],
          "blocked": [
            "string"
          ]
        }
      },
      "etag": "string",
      "fileDetails": {
        "audioStreams": [
          {
            "bitrateBps": "string",
            "channelCount": 0,
            "codec": "string",
            "vendor": "string"
          }
        ],
        "bitrateBps": "string",
        "container": "string",
        "creationTime": "string",
        "durationMs": "string",
        "fileName": "string",
        "fileSize": "string",
        "fileType": "video",
        "videoStreams": [
          {
            "aspectRatio": 0,
            "bitrateBps": "string",
            "codec": "string",
            "frameRateFps": 0,
            "heightPixels": 0,
            "rotation": "none",
            "vendor": "string",
            "widthPixels": 0
          }
        ]
      },
      "id": "string",
      "kind": "youtube#video",
      "liveStreamingDetails": {
        "activeLiveChatId": "string",
        "actualEndTime": "1970-01-01T00:00:00Z",
        "actualStartTime": "1970-01-01T00:00:00Z",
        "concurrentViewers": "string",
        "scheduledEndTime": "1970-01-01T00:00:00Z",
        "scheduledStartTime": "1970-01-01T00:00:00Z"
      },
      "localizations": {
        "property1": {
          "description": "string",
          "title": "string"
        },
        "property2": {
          "description": "string",
          "title": "string"
        }
      },
      "monetizationDetails": {
        "access": {
          "allowed": true,
          "exception": [
            "string"
          ]
        }
      },
      "player": {
        "embedHeight": "string",
        "embedHtml": "string",
        "embedWidth": "string"
      },
      "processingDetails": {
        "editorSuggestionsAvailability": "string",
        "fileDetailsAvailability": "string",
        "processingFailureReason": "uploadFailed",
        "processingIssuesAvailability": "string",
        "processingProgress": {
          "partsProcessed": "string",
          "partsTotal": "string",
          "timeLeftMs": "string"
        },
        "processingStatus": "processing",
        "tagSuggestionsAvailability": "string",
        "thumbnailsAvailability": "string"
      },
      "projectDetails": {},
      "recordingDetails": {
        "location": {
          "altitude": 0,
          "latitude": 0,
          "longitude": 0
        },
        "locationDescription": "string",
        "recordingDate": "1970-01-01T00:00:00Z"
      },
      "snippet": {
        "categoryId": "string",
        "channelId": "string",
        "channelTitle": "string",
        "defaultAudioLanguage": "string",
        "defaultLanguage": "string",
        "description": "string",
        "liveBroadcastContent": "none",
        "localized": {
          "description": "string",
          "title": "string"
        },
        "publishedAt": "1970-01-01T00:00:00Z",
        "tags": [
          "string"
        ],
        "thumbnails": {
          "high": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "maxres": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "medium": {
            "height": 0,
            "url": "string",
            "width": 0
          },
          "standard": {
            "height": 0,
            "url": "string",
            "width": 0
          }
        },
        "title": "string"
      },
      "statistics": {
        "commentCount": "string",
        "dislikeCount": "string",
        "favoriteCount": "string",
        "likeCount": "string",
        "viewCount": "string"
      },
      "status": {
        "embeddable": true,
        "failureReason": "conversion",
        "license": "youtube",
        "madeForKids": true,
        "privacyStatus": "public",
        "publicStatsViewable": true,
        "publishAt": "1970-01-01T00:00:00Z",
        "rejectionReason": "copyright",
        "selfDeclaredMadeForKids": true,
        "uploadStatus": "uploaded"
      },
      "suggestions": {
        "editorSuggestions": [
          "videoAutoLevels"
        ],
        "processingErrors": [
          "audioFile"
        ],
        "processingHints": [
          "nonStreamableMov"
        ],
        "processingWarnings": [
          "unknownContainer"
        ],
        "tagSuggestions": [
          {
            "categoryRestricts": [
              "string"
            ],
            "tag": "string"
          }
        ]
      },
      "topicDetails": {
        "relevantTopicIds": [
          "string"
        ],
        "topicCategories": [
          "string"
        ],
        "topicIds": [
          "string"
        ]
      }
    }
  ],
  "kind": "youtube#videoListResponse",
  "nextPageToken": "string",
  "pageInfo": {
    "resultsPerPage": 0,
    "totalResults": 0
  },
  "prevPageToken": "string",
  "tokenPagination": {},
  "visitorId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of this resource.|
|eventId|string|false|none|Serialized EventId of the request which produced this response.|
|items|[[Video](#schemavideo)]|false|none|none|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse".|
|nextPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.|
|pageInfo|[PageInfo](#schemapageinfo)|false|none|General pagination information.|
|prevPageToken|string|false|none|The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.|
|tokenPagination|[TokenPagination](#schematokenpagination)|false|none|Stub token pagination template to suppress results.|
|visitorId|string|false|none|The visitorId identifies the visitor.|

<h2 id="tocS_VideoLiveStreamingDetails">VideoLiveStreamingDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideolivestreamingdetails"></a>
<a id="schema_VideoLiveStreamingDetails"></a>
<a id="tocSvideolivestreamingdetails"></a>
<a id="tocsvideolivestreamingdetails"></a>

```json
{
  "activeLiveChatId": "string",
  "actualEndTime": "1970-01-01T00:00:00Z",
  "actualStartTime": "1970-01-01T00:00:00Z",
  "concurrentViewers": "string",
  "scheduledEndTime": "1970-01-01T00:00:00Z",
  "scheduledStartTime": "1970-01-01T00:00:00Z"
}
```

Details about the live streaming metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeLiveChatId|string|false|none|The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.|
|actualEndTime|string(date-time)|false|none|The time that the broadcast actually ended. This value will not be available until the broadcast is over.|
|actualStartTime|string(date-time)|false|none|The time that the broadcast actually started. This value will not be available until the broadcast begins.|
|concurrentViewers|string(uint64)|false|none|The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.|
|scheduledEndTime|string(date-time)|false|none|The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to contiue indefinitely.|
|scheduledStartTime|string(date-time)|false|none|The time that the broadcast is scheduled to begin.|

<h2 id="tocS_VideoLocalization">VideoLocalization</h2>
<!-- backwards compatibility -->
<a id="schemavideolocalization"></a>
<a id="schema_VideoLocalization"></a>
<a id="tocSvideolocalization"></a>
<a id="tocsvideolocalization"></a>

```json
{
  "description": "string",
  "title": "string"
}
```

Localized versions of certain video properties (e.g. title).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Localized version of the video's description.|
|title|string|false|none|Localized version of the video's title.|

<h2 id="tocS_VideoMonetizationDetails">VideoMonetizationDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideomonetizationdetails"></a>
<a id="schema_VideoMonetizationDetails"></a>
<a id="tocSvideomonetizationdetails"></a>
<a id="tocsvideomonetizationdetails"></a>

```json
{
  "access": {
    "allowed": true,
    "exception": [
      "string"
    ]
  }
}
```

Details about monetization of a YouTube Video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[AccessPolicy](#schemaaccesspolicy)|false|none|The value of access indicates whether the video can be monetized or not.|

<h2 id="tocS_VideoPlayer">VideoPlayer</h2>
<!-- backwards compatibility -->
<a id="schemavideoplayer"></a>
<a id="schema_VideoPlayer"></a>
<a id="tocSvideoplayer"></a>
<a id="tocsvideoplayer"></a>

```json
{
  "embedHeight": "string",
  "embedHtml": "string",
  "embedWidth": "string"
}
```

Player to be used for a video playback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedHeight|string(int64)|false|none|none|
|embedHtml|string|false|none|An <iframe> tag that embeds a player that will play the video.|
|embedWidth|string(int64)|false|none|The embed width|

<h2 id="tocS_VideoProcessingDetails">VideoProcessingDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideoprocessingdetails"></a>
<a id="schema_VideoProcessingDetails"></a>
<a id="tocSvideoprocessingdetails"></a>
<a id="tocsvideoprocessingdetails"></a>

```json
{
  "editorSuggestionsAvailability": "string",
  "fileDetailsAvailability": "string",
  "processingFailureReason": "uploadFailed",
  "processingIssuesAvailability": "string",
  "processingProgress": {
    "partsProcessed": "string",
    "partsTotal": "string",
    "timeLeftMs": "string"
  },
  "processingStatus": "processing",
  "tagSuggestionsAvailability": "string",
  "thumbnailsAvailability": "string"
}
```

Describes processing status and progress and availability of some other Video resource parts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editorSuggestionsAvailability|string|false|none|This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.|
|fileDetailsAvailability|string|false|none|This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request.|
|processingFailureReason|string|false|none|The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.|
|processingIssuesAvailability|string|false|none|This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.|
|processingProgress|[VideoProcessingDetailsProcessingProgress](#schemavideoprocessingdetailsprocessingprogress)|false|none|The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video's processing status is processing.|
|processingStatus|string|false|none|The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.|
|tagSuggestionsAvailability|string|false|none|This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.|
|thumbnailsAvailability|string|false|none|This value indicates whether thumbnail images have been generated for the video.|

#### Enumerated Values

|Property|Value|
|---|---|
|processingFailureReason|uploadFailed|
|processingFailureReason|transcodeFailed|
|processingFailureReason|streamingFailed|
|processingFailureReason|other|
|processingStatus|processing|
|processingStatus|succeeded|
|processingStatus|failed|
|processingStatus|terminated|

<h2 id="tocS_VideoProcessingDetailsProcessingProgress">VideoProcessingDetailsProcessingProgress</h2>
<!-- backwards compatibility -->
<a id="schemavideoprocessingdetailsprocessingprogress"></a>
<a id="schema_VideoProcessingDetailsProcessingProgress"></a>
<a id="tocSvideoprocessingdetailsprocessingprogress"></a>
<a id="tocsvideoprocessingdetailsprocessingprogress"></a>

```json
{
  "partsProcessed": "string",
  "partsTotal": "string",
  "timeLeftMs": "string"
}
```

Video processing progress and completion time estimate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partsProcessed|string(uint64)|false|none|The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.|
|partsTotal|string(uint64)|false|none|An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.|
|timeLeftMs|string(uint64)|false|none|An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.|

<h2 id="tocS_VideoProjectDetails">VideoProjectDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideoprojectdetails"></a>
<a id="schema_VideoProjectDetails"></a>
<a id="tocSvideoprojectdetails"></a>
<a id="tocsvideoprojectdetails"></a>

```json
{}
```

DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677

<h2 id="tocS_VideoRating">VideoRating</h2>
<!-- backwards compatibility -->
<a id="schemavideorating"></a>
<a id="schema_VideoRating"></a>
<a id="tocSvideorating"></a>
<a id="tocsvideorating"></a>

```json
{
  "rating": "none",
  "videoId": "string"
}
```

Basic details about rating of a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rating|string|false|none|Rating of a video.|
|videoId|string|false|none|The ID that YouTube uses to uniquely identify the video.|

#### Enumerated Values

|Property|Value|
|---|---|
|rating|none|
|rating|like|
|rating|dislike|

<h2 id="tocS_VideoRecordingDetails">VideoRecordingDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideorecordingdetails"></a>
<a id="schema_VideoRecordingDetails"></a>
<a id="tocSvideorecordingdetails"></a>
<a id="tocsvideorecordingdetails"></a>

```json
{
  "location": {
    "altitude": 0,
    "latitude": 0,
    "longitude": 0
  },
  "locationDescription": "string",
  "recordingDate": "1970-01-01T00:00:00Z"
}
```

Recording information associated with the video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[GeoPoint](#schemageopoint)|false|none|The geolocation information associated with the video.|
|locationDescription|string|false|none|The text description of the location where the video was recorded.|
|recordingDate|string(date-time)|false|none|The date and time when the video was recorded.|

<h2 id="tocS_VideoSnippet">VideoSnippet</h2>
<!-- backwards compatibility -->
<a id="schemavideosnippet"></a>
<a id="schema_VideoSnippet"></a>
<a id="tocSvideosnippet"></a>
<a id="tocsvideosnippet"></a>

```json
{
  "categoryId": "string",
  "channelId": "string",
  "channelTitle": "string",
  "defaultAudioLanguage": "string",
  "defaultLanguage": "string",
  "description": "string",
  "liveBroadcastContent": "none",
  "localized": {
    "description": "string",
    "title": "string"
  },
  "publishedAt": "1970-01-01T00:00:00Z",
  "tags": [
    "string"
  ],
  "thumbnails": {
    "high": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "maxres": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "medium": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "standard": {
      "height": 0,
      "url": "string",
      "width": 0
    }
  },
  "title": "string"
}
```

Basic details about a video, including title, description, uploader, thumbnails and category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string|false|none|The YouTube video category associated with the video.|
|channelId|string|false|none|The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.|
|channelTitle|string|false|none|Channel title for the channel that the video belongs to.|
|defaultAudioLanguage|string|false|none|The default_audio_language property specifies the language spoken in the video's default audio track.|
|defaultLanguage|string|false|none|The language of the videos's default snippet.|
|description|string|false|none|The video's description. @mutable youtube.videos.insert youtube.videos.update|
|liveBroadcastContent|string|false|none|Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.|
|localized|[VideoLocalization](#schemavideolocalization)|false|none|Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)|
|publishedAt|string(date-time)|false|none|The date and time when the video was uploaded.|
|tags|[string]|false|none|A list of keyword tags associated with the video. Tags may contain spaces.|
|thumbnails|[ThumbnailDetails](#schemathumbnaildetails)|false|none|A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.|
|title|string|false|none|The video's title. @mutable youtube.videos.insert youtube.videos.update|

#### Enumerated Values

|Property|Value|
|---|---|
|liveBroadcastContent|none|
|liveBroadcastContent|upcoming|
|liveBroadcastContent|live|
|liveBroadcastContent|completed|

<h2 id="tocS_VideoStatistics">VideoStatistics</h2>
<!-- backwards compatibility -->
<a id="schemavideostatistics"></a>
<a id="schema_VideoStatistics"></a>
<a id="tocSvideostatistics"></a>
<a id="tocsvideostatistics"></a>

```json
{
  "commentCount": "string",
  "dislikeCount": "string",
  "favoriteCount": "string",
  "likeCount": "string",
  "viewCount": "string"
}
```

Statistics about the video, such as the number of times the video was viewed or liked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commentCount|string(uint64)|false|none|The number of comments for the video.|
|dislikeCount|string(uint64)|false|none|The number of users who have indicated that they disliked the video by giving it a negative rating.|
|favoriteCount|string(uint64)|false|none|The number of users who currently have the video marked as a favorite video.|
|likeCount|string(uint64)|false|none|The number of users who have indicated that they liked the video by giving it a positive rating.|
|viewCount|string(uint64)|false|none|The number of times the video has been viewed.|

<h2 id="tocS_VideoStatus">VideoStatus</h2>
<!-- backwards compatibility -->
<a id="schemavideostatus"></a>
<a id="schema_VideoStatus"></a>
<a id="tocSvideostatus"></a>
<a id="tocsvideostatus"></a>

```json
{
  "embeddable": true,
  "failureReason": "conversion",
  "license": "youtube",
  "madeForKids": true,
  "privacyStatus": "public",
  "publicStatsViewable": true,
  "publishAt": "1970-01-01T00:00:00Z",
  "rejectionReason": "copyright",
  "selfDeclaredMadeForKids": true,
  "uploadStatus": "uploaded"
}
```

Basic details about a video category, such as its localized title. Next Id: 18

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embeddable|boolean|false|none|This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update|
|failureReason|string|false|none|This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.|
|license|string|false|none|The video's license. @mutable youtube.videos.insert youtube.videos.update|
|madeForKids|boolean|false|none|none|
|privacyStatus|string|false|none|The video's privacy status.|
|publicStatsViewable|boolean|false|none|This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update|
|publishAt|string(date-time)|false|none|The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private..|
|rejectionReason|string|false|none|This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.|
|selfDeclaredMadeForKids|boolean|false|none|none|
|uploadStatus|string|false|none|The status of the uploaded video.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureReason|conversion|
|failureReason|invalidFile|
|failureReason|emptyFile|
|failureReason|tooSmall|
|failureReason|codec|
|failureReason|uploadAborted|
|license|youtube|
|license|creativeCommon|
|privacyStatus|public|
|privacyStatus|unlisted|
|privacyStatus|private|
|rejectionReason|copyright|
|rejectionReason|inappropriate|
|rejectionReason|duplicate|
|rejectionReason|termsOfUse|
|rejectionReason|uploaderAccountSuspended|
|rejectionReason|length|
|rejectionReason|claim|
|rejectionReason|uploaderAccountClosed|
|rejectionReason|trademark|
|rejectionReason|legal|
|uploadStatus|uploaded|
|uploadStatus|processed|
|uploadStatus|failed|
|uploadStatus|rejected|
|uploadStatus|deleted|

<h2 id="tocS_VideoSuggestions">VideoSuggestions</h2>
<!-- backwards compatibility -->
<a id="schemavideosuggestions"></a>
<a id="schema_VideoSuggestions"></a>
<a id="tocSvideosuggestions"></a>
<a id="tocsvideosuggestions"></a>

```json
{
  "editorSuggestions": [
    "videoAutoLevels"
  ],
  "processingErrors": [
    "audioFile"
  ],
  "processingHints": [
    "nonStreamableMov"
  ],
  "processingWarnings": [
    "unknownContainer"
  ],
  "tagSuggestions": [
    {
      "categoryRestricts": [
        "string"
      ],
      "tag": "string"
    }
  ]
}
```

Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editorSuggestions|[string]|false|none|A list of video editing operations that might improve the video quality or playback experience of the uploaded video.|
|processingErrors|[string]|false|none|A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.|
|processingHints|[string]|false|none|A list of suggestions that may improve YouTube's ability to process the video.|
|processingWarnings|[string]|false|none|A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.|
|tagSuggestions|[[VideoSuggestionsTagSuggestion](#schemavideosuggestionstagsuggestion)]|false|none|A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.|

#### Enumerated Values

|Property|Value|
|---|---|
|editorSuggestions|videoAutoLevels|
|editorSuggestions|videoStabilize|
|editorSuggestions|videoCrop|
|editorSuggestions|audioQuietAudioSwap|
|processingErrors|audioFile|
|processingErrors|imageFile|
|processingErrors|projectFile|
|processingErrors|notAVideoFile|
|processingErrors|docFile|
|processingErrors|archiveFile|
|processingErrors|unsupportedSpatialAudioLayout|
|processingHints|nonStreamableMov|
|processingHints|sendBestQualityVideo|
|processingHints|sphericalVideo|
|processingHints|spatialAudio|
|processingHints|vrVideo|
|processingHints|hdrVideo|
|processingWarnings|unknownContainer|
|processingWarnings|unknownVideoCodec|
|processingWarnings|unknownAudioCodec|
|processingWarnings|inconsistentResolution|
|processingWarnings|hasEditlist|
|processingWarnings|problematicVideoCodec|
|processingWarnings|problematicAudioCodec|
|processingWarnings|unsupportedVrStereoMode|
|processingWarnings|unsupportedSphericalProjectionType|
|processingWarnings|unsupportedHdrPixelFormat|
|processingWarnings|unsupportedHdrColorMetadata|
|processingWarnings|problematicHdrLookupTable|

<h2 id="tocS_VideoSuggestionsTagSuggestion">VideoSuggestionsTagSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemavideosuggestionstagsuggestion"></a>
<a id="schema_VideoSuggestionsTagSuggestion"></a>
<a id="tocSvideosuggestionstagsuggestion"></a>
<a id="tocsvideosuggestionstagsuggestion"></a>

```json
{
  "categoryRestricts": [
    "string"
  ],
  "tag": "string"
}
```

A single tag suggestion with it's relevance information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryRestricts|[string]|false|none|A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.|
|tag|string|false|none|The keyword tag suggested for the video.|

<h2 id="tocS_VideoTopicDetails">VideoTopicDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideotopicdetails"></a>
<a id="schema_VideoTopicDetails"></a>
<a id="tocSvideotopicdetails"></a>
<a id="tocsvideotopicdetails"></a>

```json
{
  "relevantTopicIds": [
    "string"
  ],
  "topicCategories": [
    "string"
  ],
  "topicIds": [
    "string"
  ]
}
```

Freebase topic information related to the video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relevantTopicIds|[string]|false|none|Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.|
|topicCategories|[string]|false|none|A list of Wikipedia URLs that provide a high-level description of the video's content.|
|topicIds|[string]|false|none|A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href="http://wiki.freebase.com/wiki/Topic_API">Freebase Topic API.|

<h2 id="tocS_WatchSettings">WatchSettings</h2>
<!-- backwards compatibility -->
<a id="schemawatchsettings"></a>
<a id="schema_WatchSettings"></a>
<a id="tocSwatchsettings"></a>
<a id="tocswatchsettings"></a>

```json
{
  "backgroundColor": "string",
  "featuredPlaylistId": "string",
  "textColor": "string"
}
```

Branding properties for the watch. All deprecated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|The text color for the video watch page's branded area.|
|featuredPlaylistId|string|false|none|An ID that uniquely identifies a playlist that displays next to the video player.|
|textColor|string|false|none|The background color for the video watch page's branded area.|
