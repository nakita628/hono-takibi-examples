<h1 id="google-api">Google+ API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Builds on top of the Google+ platform.

Base URLs:

* <a href="https://www.googleapis.com/plus/v1">https://www.googleapis.com/plus/v1</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/+/api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/plus.login|View your basic profile info, including your age range and language|
|https://www.googleapis.com/auth/plus.me|Associate you with your personal info on Google|
|https://www.googleapis.com/auth/userinfo.email|View your email address|
|https://www.googleapis.com/auth/userinfo.profile|See your personal info, including any personal info you've made publicly available|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/plus.login|View your basic profile info, including your age range and language|
|https://www.googleapis.com/auth/plus.me|Associate you with your personal info on Google|
|https://www.googleapis.com/auth/userinfo.email|View your email address|
|https://www.googleapis.com/auth/userinfo.profile|See your personal info, including any personal info you've made publicly available|

<h1 id="google-api-activities">activities</h1>

## plus.activities.search

<a id="opIdplus.activities.search"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/activities?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /activities`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="plusactivitiessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Full-text search query string.|
|language|query|string|false|Specify the preferred language to search with. See search language codes for available values.|
|maxResults|query|integer|false|The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.|
|orderBy|query|string|false|Specifies how to order search results.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|best|
|orderBy|recent|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "id": "string",
  "items": [
    {
      "access": {
        "description": "string",
        "items": [
          {
            "displayName": "string",
            "id": "string",
            "type": "string"
          }
        ],
        "kind": "plus#acl"
      },
      "actor": {
        "clientSpecificActorInfo": {
          "youtubeActorInfo": {
            "channelId": "string"
          }
        },
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "url": "string",
        "verification": {
          "adHocVerified": "string"
        }
      },
      "address": "string",
      "annotation": "string",
      "crosspostSource": "string",
      "etag": "string",
      "geocode": "string",
      "id": "string",
      "kind": "plus#activity",
      "location": {
        "address": {
          "formatted": "string"
        },
        "displayName": "string",
        "id": "string",
        "kind": "plus#place",
        "position": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "object": {
        "actor": {
          "clientSpecificActorInfo": {
            "youtubeActorInfo": {
              "channelId": "string"
            }
          },
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string",
          "verification": {
            "adHocVerified": "string"
          }
        },
        "attachments": [
          {
            "content": "string",
            "displayName": "string",
            "embed": {
              "type": "string",
              "url": "string"
            },
            "fullImage": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "id": "string",
            "image": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "objectType": "string",
            "thumbnails": [
              {
                "description": "string",
                "image": {
                  "height": 0,
                  "type": "string",
                  "url": "string",
                  "width": 0
                },
                "url": "string"
              }
            ],
            "url": "string"
          }
        ],
        "content": "string",
        "id": "string",
        "objectType": "string",
        "originalContent": "string",
        "plusoners": {
          "selfLink": "string",
          "totalItems": 0
        },
        "replies": {
          "selfLink": "string",
          "totalItems": 0
        },
        "resharers": {
          "selfLink": "string",
          "totalItems": 0
        },
        "url": "string"
      },
      "placeId": "string",
      "placeName": "string",
      "provider": {
        "title": "string"
      },
      "published": "1970-01-01T00:00:00Z",
      "radius": "string",
      "title": "string",
      "updated": "1970-01-01T00:00:00Z",
      "url": "string",
      "verb": "string"
    }
  ],
  "kind": "plus#activityFeed",
  "nextLink": "string",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="plusactivitiessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ActivityFeed](#schemaactivityfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

## plus.activities.get

<a id="opIdplus.activities.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/activities/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /activities/{activityId}`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="plusactivitiesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|The ID of the activity to get.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "access": {
    "description": "string",
    "items": [
      {
        "displayName": "string",
        "id": "string",
        "type": "string"
      }
    ],
    "kind": "plus#acl"
  },
  "actor": {
    "clientSpecificActorInfo": {
      "youtubeActorInfo": {
        "channelId": "string"
      }
    },
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "name": {
      "familyName": "string",
      "givenName": "string"
    },
    "url": "string",
    "verification": {
      "adHocVerified": "string"
    }
  },
  "address": "string",
  "annotation": "string",
  "crosspostSource": "string",
  "etag": "string",
  "geocode": "string",
  "id": "string",
  "kind": "plus#activity",
  "location": {
    "address": {
      "formatted": "string"
    },
    "displayName": "string",
    "id": "string",
    "kind": "plus#place",
    "position": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "object": {
    "actor": {
      "clientSpecificActorInfo": {
        "youtubeActorInfo": {
          "channelId": "string"
        }
      },
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string",
      "verification": {
        "adHocVerified": "string"
      }
    },
    "attachments": [
      {
        "content": "string",
        "displayName": "string",
        "embed": {
          "type": "string",
          "url": "string"
        },
        "fullImage": {
          "height": 0,
          "type": "string",
          "url": "string",
          "width": 0
        },
        "id": "string",
        "image": {
          "height": 0,
          "type": "string",
          "url": "string",
          "width": 0
        },
        "objectType": "string",
        "thumbnails": [
          {
            "description": "string",
            "image": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "url": "string"
          }
        ],
        "url": "string"
      }
    ],
    "content": "string",
    "id": "string",
    "objectType": "string",
    "originalContent": "string",
    "plusoners": {
      "selfLink": "string",
      "totalItems": 0
    },
    "replies": {
      "selfLink": "string",
      "totalItems": 0
    },
    "resharers": {
      "selfLink": "string",
      "totalItems": 0
    },
    "url": "string"
  },
  "placeId": "string",
  "placeName": "string",
  "provider": {
    "title": "string"
  },
  "published": "1970-01-01T00:00:00Z",
  "radius": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "url": "string",
  "verb": "string"
}
```

<h3 id="plusactivitiesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Activity](#schemaactivity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

## plus.activities.list

<a id="opIdplus.activities.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/people/string/activities/public \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /people/{userId}/activities/{collection}`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="plusactivitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.|
|collection|path|string|true|The collection of activities to list.|
|maxResults|query|integer|false|The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|public|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "id": "string",
  "items": [
    {
      "access": {
        "description": "string",
        "items": [
          {
            "displayName": "string",
            "id": "string",
            "type": "string"
          }
        ],
        "kind": "plus#acl"
      },
      "actor": {
        "clientSpecificActorInfo": {
          "youtubeActorInfo": {
            "channelId": "string"
          }
        },
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "url": "string",
        "verification": {
          "adHocVerified": "string"
        }
      },
      "address": "string",
      "annotation": "string",
      "crosspostSource": "string",
      "etag": "string",
      "geocode": "string",
      "id": "string",
      "kind": "plus#activity",
      "location": {
        "address": {
          "formatted": "string"
        },
        "displayName": "string",
        "id": "string",
        "kind": "plus#place",
        "position": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "object": {
        "actor": {
          "clientSpecificActorInfo": {
            "youtubeActorInfo": {
              "channelId": "string"
            }
          },
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string",
          "verification": {
            "adHocVerified": "string"
          }
        },
        "attachments": [
          {
            "content": "string",
            "displayName": "string",
            "embed": {
              "type": "string",
              "url": "string"
            },
            "fullImage": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "id": "string",
            "image": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "objectType": "string",
            "thumbnails": [
              {
                "description": "string",
                "image": {
                  "height": 0,
                  "type": "string",
                  "url": "string",
                  "width": 0
                },
                "url": "string"
              }
            ],
            "url": "string"
          }
        ],
        "content": "string",
        "id": "string",
        "objectType": "string",
        "originalContent": "string",
        "plusoners": {
          "selfLink": "string",
          "totalItems": 0
        },
        "replies": {
          "selfLink": "string",
          "totalItems": 0
        },
        "resharers": {
          "selfLink": "string",
          "totalItems": 0
        },
        "url": "string"
      },
      "placeId": "string",
      "placeName": "string",
      "provider": {
        "title": "string"
      },
      "published": "1970-01-01T00:00:00Z",
      "radius": "string",
      "title": "string",
      "updated": "1970-01-01T00:00:00Z",
      "url": "string",
      "verb": "string"
    }
  ],
  "kind": "plus#activityFeed",
  "nextLink": "string",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="plusactivitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ActivityFeed](#schemaactivityfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

<h1 id="google-api-comments">comments</h1>

## plus.comments.list

<a id="opIdplus.comments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/activities/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /activities/{activityId}/comments`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="pluscommentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|The ID of the activity to get comments for.|
|maxResults|query|integer|false|The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.|
|sortOrder|query|string|false|The order in which to sort the list of comments.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|ascending|
|sortOrder|descending|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "id": "string",
  "items": [
    {
      "actor": {
        "clientSpecificActorInfo": {
          "youtubeActorInfo": {
            "channelId": "string"
          }
        },
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string",
        "verification": {
          "adHocVerified": "string"
        }
      },
      "etag": "string",
      "id": "string",
      "inReplyTo": [
        {
          "id": "string",
          "url": "string"
        }
      ],
      "kind": "plus#comment",
      "object": {
        "content": "string",
        "objectType": "comment",
        "originalContent": "string"
      },
      "plusoners": {
        "totalItems": 0
      },
      "published": "1970-01-01T00:00:00Z",
      "selfLink": "string",
      "updated": "1970-01-01T00:00:00Z",
      "verb": "post"
    }
  ],
  "kind": "plus#commentFeed",
  "nextLink": "string",
  "nextPageToken": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

<h3 id="pluscommentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommentFeed](#schemacommentfeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

## plus.comments.get

<a id="opIdplus.comments.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/comments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /comments/{commentId}`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="pluscommentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commentId|path|string|true|The ID of the comment to get.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "actor": {
    "clientSpecificActorInfo": {
      "youtubeActorInfo": {
        "channelId": "string"
      }
    },
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string",
    "verification": {
      "adHocVerified": "string"
    }
  },
  "etag": "string",
  "id": "string",
  "inReplyTo": [
    {
      "id": "string",
      "url": "string"
    }
  ],
  "kind": "plus#comment",
  "object": {
    "content": "string",
    "objectType": "comment",
    "originalContent": "string"
  },
  "plusoners": {
    "totalItems": 0
  },
  "published": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "verb": "post"
}
```

<h3 id="pluscommentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

<h1 id="google-api-people">people</h1>

## plus.people.listByActivity

<a id="opIdplus.people.listByActivity"></a>

> Code samples

```bash
curl https://www.googleapis.com/activities/string/people/plusoners \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /activities/{activityId}/people/{collection}`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="pluspeoplelistbyactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|The ID of the activity to get the list of people for.|
|collection|path|string|true|The collection of people to list.|
|maxResults|query|integer|false|The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|plusoners|
|collection|resharers|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "aboutMe": "string",
      "ageRange": {
        "max": 0,
        "min": 0
      },
      "birthday": "string",
      "braggingRights": "string",
      "circledByCount": 0,
      "cover": {
        "coverInfo": {
          "leftImageOffset": 0,
          "topImageOffset": 0
        },
        "coverPhoto": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "layout": "string"
      },
      "currentLocation": "string",
      "displayName": "string",
      "domain": "string",
      "emails": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "etag": "string",
      "gender": "string",
      "id": "string",
      "image": {
        "isDefault": true,
        "url": "string"
      },
      "isPlusUser": true,
      "kind": "plus#person",
      "language": "string",
      "name": {
        "familyName": "string",
        "formatted": "string",
        "givenName": "string",
        "honorificPrefix": "string",
        "honorificSuffix": "string",
        "middleName": "string"
      },
      "nickname": "string",
      "objectType": "string",
      "occupation": "string",
      "organizations": [
        {
          "department": "string",
          "description": "string",
          "endDate": "string",
          "location": "string",
          "name": "string",
          "primary": true,
          "startDate": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "placesLived": [
        {
          "primary": true,
          "value": "string"
        }
      ],
      "plusOneCount": 0,
      "relationshipStatus": "string",
      "skills": "string",
      "tagline": "string",
      "url": "string",
      "urls": [
        {
          "label": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "verified": true
    }
  ],
  "kind": "plus#peopleFeed",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "totalItems": 0
}
```

<h3 id="pluspeoplelistbyactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PeopleFeed](#schemapeoplefeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

## plus.people.search

<a id="opIdplus.people.search"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/people?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /people`

Shut down. See https://developers.google.com/+/api-shutdown for more details.

<h3 id="pluspeoplesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Specify a query string for full text search of public text in all profiles.|
|language|query|string|false|Specify the preferred language to search with. See search language codes for available values.|
|maxResults|query|integer|false|The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "aboutMe": "string",
      "ageRange": {
        "max": 0,
        "min": 0
      },
      "birthday": "string",
      "braggingRights": "string",
      "circledByCount": 0,
      "cover": {
        "coverInfo": {
          "leftImageOffset": 0,
          "topImageOffset": 0
        },
        "coverPhoto": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "layout": "string"
      },
      "currentLocation": "string",
      "displayName": "string",
      "domain": "string",
      "emails": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "etag": "string",
      "gender": "string",
      "id": "string",
      "image": {
        "isDefault": true,
        "url": "string"
      },
      "isPlusUser": true,
      "kind": "plus#person",
      "language": "string",
      "name": {
        "familyName": "string",
        "formatted": "string",
        "givenName": "string",
        "honorificPrefix": "string",
        "honorificSuffix": "string",
        "middleName": "string"
      },
      "nickname": "string",
      "objectType": "string",
      "occupation": "string",
      "organizations": [
        {
          "department": "string",
          "description": "string",
          "endDate": "string",
          "location": "string",
          "name": "string",
          "primary": true,
          "startDate": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "placesLived": [
        {
          "primary": true,
          "value": "string"
        }
      ],
      "plusOneCount": 0,
      "relationshipStatus": "string",
      "skills": "string",
      "tagline": "string",
      "url": "string",
      "urls": [
        {
          "label": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "verified": true
    }
  ],
  "kind": "plus#peopleFeed",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "totalItems": 0
}
```

<h3 id="pluspeoplesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PeopleFeed](#schemapeoplefeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

## plus.people.get

<a id="opIdplus.people.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/people/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /people/{userId}`

Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.

<h3 id="pluspeopleget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "aboutMe": "string",
  "ageRange": {
    "max": 0,
    "min": 0
  },
  "birthday": "string",
  "braggingRights": "string",
  "circledByCount": 0,
  "cover": {
    "coverInfo": {
      "leftImageOffset": 0,
      "topImageOffset": 0
    },
    "coverPhoto": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "layout": "string"
  },
  "currentLocation": "string",
  "displayName": "string",
  "domain": "string",
  "emails": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "etag": "string",
  "gender": "string",
  "id": "string",
  "image": {
    "isDefault": true,
    "url": "string"
  },
  "isPlusUser": true,
  "kind": "plus#person",
  "language": "string",
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "honorificPrefix": "string",
    "honorificSuffix": "string",
    "middleName": "string"
  },
  "nickname": "string",
  "objectType": "string",
  "occupation": "string",
  "organizations": [
    {
      "department": "string",
      "description": "string",
      "endDate": "string",
      "location": "string",
      "name": "string",
      "primary": true,
      "startDate": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "placesLived": [
    {
      "primary": true,
      "value": "string"
    }
  ],
  "plusOneCount": 0,
  "relationshipStatus": "string",
  "skills": "string",
  "tagline": "string",
  "url": "string",
  "urls": [
    {
      "label": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "verified": true
}
```

<h3 id="pluspeopleget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Person](#schemaperson)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.profile ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.profile )
</aside>

## plus.people.list

<a id="opIdplus.people.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/people/string/people/connected \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /people/{userId}/people/{collection}`

List all of the people in the specified collection.

<h3 id="pluspeoplelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Get the collection of people for the person identified. Use "me" to indicate the authenticated user.|
|collection|path|string|true|The collection of people to list.|
|maxResults|query|integer|false|The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.|
|orderBy|query|string|false|The order to return people in.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|collection|connected|
|collection|visible|
|orderBy|alphabetical|
|orderBy|best|
|alt|json|

> Example responses

> 200 Response

```json
{
  "etag": "string",
  "items": [
    {
      "aboutMe": "string",
      "ageRange": {
        "max": 0,
        "min": 0
      },
      "birthday": "string",
      "braggingRights": "string",
      "circledByCount": 0,
      "cover": {
        "coverInfo": {
          "leftImageOffset": 0,
          "topImageOffset": 0
        },
        "coverPhoto": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "layout": "string"
      },
      "currentLocation": "string",
      "displayName": "string",
      "domain": "string",
      "emails": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "etag": "string",
      "gender": "string",
      "id": "string",
      "image": {
        "isDefault": true,
        "url": "string"
      },
      "isPlusUser": true,
      "kind": "plus#person",
      "language": "string",
      "name": {
        "familyName": "string",
        "formatted": "string",
        "givenName": "string",
        "honorificPrefix": "string",
        "honorificSuffix": "string",
        "middleName": "string"
      },
      "nickname": "string",
      "objectType": "string",
      "occupation": "string",
      "organizations": [
        {
          "department": "string",
          "description": "string",
          "endDate": "string",
          "location": "string",
          "name": "string",
          "primary": true,
          "startDate": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "placesLived": [
        {
          "primary": true,
          "value": "string"
        }
      ],
      "plusOneCount": 0,
      "relationshipStatus": "string",
      "skills": "string",
      "tagline": "string",
      "url": "string",
      "urls": [
        {
          "label": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "verified": true
    }
  ],
  "kind": "plus#peopleFeed",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "totalItems": 0
}
```

<h3 id="pluspeoplelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PeopleFeed](#schemapeoplefeed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.login ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.login ), Oauth2 ( Scopes: https://www.googleapis.com/auth/plus.me ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/plus.me )
</aside>

# Schemas

<h2 id="tocS_Acl">Acl</h2>
<!-- backwards compatibility -->
<a id="schemaacl"></a>
<a id="schema_Acl"></a>
<a id="tocSacl"></a>
<a id="tocsacl"></a>

```json
{
  "description": "string",
  "items": [
    {
      "displayName": "string",
      "id": "string",
      "type": "string"
    }
  ],
  "kind": "plus#acl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the access granted, suitable for display.|
|items|[[PlusAclentryResource](#schemaplusaclentryresource)]|false|none|The list of access entries.|
|kind|string|false|none|Identifies this resource as a collection of access controls. Value: "plus#acl".|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "access": {
    "description": "string",
    "items": [
      {
        "displayName": "string",
        "id": "string",
        "type": "string"
      }
    ],
    "kind": "plus#acl"
  },
  "actor": {
    "clientSpecificActorInfo": {
      "youtubeActorInfo": {
        "channelId": "string"
      }
    },
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "name": {
      "familyName": "string",
      "givenName": "string"
    },
    "url": "string",
    "verification": {
      "adHocVerified": "string"
    }
  },
  "address": "string",
  "annotation": "string",
  "crosspostSource": "string",
  "etag": "string",
  "geocode": "string",
  "id": "string",
  "kind": "plus#activity",
  "location": {
    "address": {
      "formatted": "string"
    },
    "displayName": "string",
    "id": "string",
    "kind": "plus#place",
    "position": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "object": {
    "actor": {
      "clientSpecificActorInfo": {
        "youtubeActorInfo": {
          "channelId": "string"
        }
      },
      "displayName": "string",
      "id": "string",
      "image": {
        "url": "string"
      },
      "url": "string",
      "verification": {
        "adHocVerified": "string"
      }
    },
    "attachments": [
      {
        "content": "string",
        "displayName": "string",
        "embed": {
          "type": "string",
          "url": "string"
        },
        "fullImage": {
          "height": 0,
          "type": "string",
          "url": "string",
          "width": 0
        },
        "id": "string",
        "image": {
          "height": 0,
          "type": "string",
          "url": "string",
          "width": 0
        },
        "objectType": "string",
        "thumbnails": [
          {
            "description": "string",
            "image": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "url": "string"
          }
        ],
        "url": "string"
      }
    ],
    "content": "string",
    "id": "string",
    "objectType": "string",
    "originalContent": "string",
    "plusoners": {
      "selfLink": "string",
      "totalItems": 0
    },
    "replies": {
      "selfLink": "string",
      "totalItems": 0
    },
    "resharers": {
      "selfLink": "string",
      "totalItems": 0
    },
    "url": "string"
  },
  "placeId": "string",
  "placeName": "string",
  "provider": {
    "title": "string"
  },
  "published": "1970-01-01T00:00:00Z",
  "radius": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z",
  "url": "string",
  "verb": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[Acl](#schemaacl)|false|none|Identifies who has access to see this activity.|
|actor|object|false|none|The person who performed this activity.|
|address|string|false|none|Street address where this activity occurred.|
|annotation|string|false|none|Additional content added by the person who shared this activity, applicable only when resharing an activity.|
|crosspostSource|string|false|none|If this activity is a crosspost from another system, this property specifies the ID of the original activity.|
|etag|string|false|none|ETag of this response for caching purposes.|
|geocode|string|false|none|Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.|
|id|string|false|none|The ID of this activity.|
|kind|string|false|none|Identifies this resource as an activity. Value: "plus#activity".|
|location|[Place](#schemaplace)|false|none|The location where this activity occurred.|
|object|object|false|none|The object of this activity.|
|placeId|string|false|none|ID of the place where this activity occurred.|
|placeName|string|false|none|Name of the place where this activity occurred.|
|provider|object|false|none|The service provider that initially published this activity.|
|published|string(date-time)|false|none|The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.|
|radius|string|false|none|Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.|
|title|string|false|none|Title of this activity.|
|updated|string(date-time)|false|none|The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.|
|url|string|false|none|The link to this activity.|
|verb|string|false|none|This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  <br>- "post" - Publish content to the stream. <br>- "share" - Reshare an activity.|

<h2 id="tocS_ActivityFeed">ActivityFeed</h2>
<!-- backwards compatibility -->
<a id="schemaactivityfeed"></a>
<a id="schema_ActivityFeed"></a>
<a id="tocSactivityfeed"></a>
<a id="tocsactivityfeed"></a>

```json
{
  "etag": "string",
  "id": "string",
  "items": [
    {
      "access": {
        "description": "string",
        "items": [
          {
            "displayName": "string",
            "id": "string",
            "type": "string"
          }
        ],
        "kind": "plus#acl"
      },
      "actor": {
        "clientSpecificActorInfo": {
          "youtubeActorInfo": {
            "channelId": "string"
          }
        },
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "name": {
          "familyName": "string",
          "givenName": "string"
        },
        "url": "string",
        "verification": {
          "adHocVerified": "string"
        }
      },
      "address": "string",
      "annotation": "string",
      "crosspostSource": "string",
      "etag": "string",
      "geocode": "string",
      "id": "string",
      "kind": "plus#activity",
      "location": {
        "address": {
          "formatted": "string"
        },
        "displayName": "string",
        "id": "string",
        "kind": "plus#place",
        "position": {
          "latitude": 0,
          "longitude": 0
        }
      },
      "object": {
        "actor": {
          "clientSpecificActorInfo": {
            "youtubeActorInfo": {
              "channelId": "string"
            }
          },
          "displayName": "string",
          "id": "string",
          "image": {
            "url": "string"
          },
          "url": "string",
          "verification": {
            "adHocVerified": "string"
          }
        },
        "attachments": [
          {
            "content": "string",
            "displayName": "string",
            "embed": {
              "type": "string",
              "url": "string"
            },
            "fullImage": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "id": "string",
            "image": {
              "height": 0,
              "type": "string",
              "url": "string",
              "width": 0
            },
            "objectType": "string",
            "thumbnails": [
              {
                "description": "string",
                "image": {
                  "height": 0,
                  "type": "string",
                  "url": "string",
                  "width": 0
                },
                "url": "string"
              }
            ],
            "url": "string"
          }
        ],
        "content": "string",
        "id": "string",
        "objectType": "string",
        "originalContent": "string",
        "plusoners": {
          "selfLink": "string",
          "totalItems": 0
        },
        "replies": {
          "selfLink": "string",
          "totalItems": 0
        },
        "resharers": {
          "selfLink": "string",
          "totalItems": 0
        },
        "url": "string"
      },
      "placeId": "string",
      "placeName": "string",
      "provider": {
        "title": "string"
      },
      "published": "1970-01-01T00:00:00Z",
      "radius": "string",
      "title": "string",
      "updated": "1970-01-01T00:00:00Z",
      "url": "string",
      "verb": "string"
    }
  ],
  "kind": "plus#activityFeed",
  "nextLink": "string",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|id|string|false|none|The ID of this collection of activities. Deprecated.|
|items|[[Activity](#schemaactivity)]|false|none|The activities in this page of results.|
|kind|string|false|none|Identifies this resource as a collection of activities. Value: "plus#activityFeed".|
|nextLink|string|false|none|Link to the next page of activities.|
|nextPageToken|string|false|none|The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|
|selfLink|string|false|none|Link to this activity resource.|
|title|string|false|none|The title of this collection of activities, which is a truncated portion of the content.|
|updated|string(date-time)|false|none|The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "actor": {
    "clientSpecificActorInfo": {
      "youtubeActorInfo": {
        "channelId": "string"
      }
    },
    "displayName": "string",
    "id": "string",
    "image": {
      "url": "string"
    },
    "url": "string",
    "verification": {
      "adHocVerified": "string"
    }
  },
  "etag": "string",
  "id": "string",
  "inReplyTo": [
    {
      "id": "string",
      "url": "string"
    }
  ],
  "kind": "plus#comment",
  "object": {
    "content": "string",
    "objectType": "comment",
    "originalContent": "string"
  },
  "plusoners": {
    "totalItems": 0
  },
  "published": "1970-01-01T00:00:00Z",
  "selfLink": "string",
  "updated": "1970-01-01T00:00:00Z",
  "verb": "post"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actor|object|false|none|The person who posted this comment.|
|etag|string|false|none|ETag of this response for caching purposes.|
|id|string|false|none|The ID of this comment.|
|inReplyTo|[object]|false|none|The activity this comment replied to.|
|kind|string|false|none|Identifies this resource as a comment. Value: "plus#comment".|
|object|object|false|none|The object of this comment.|
|plusoners|object|false|none|People who +1'd this comment.|
|published|string(date-time)|false|none|The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.|
|selfLink|string|false|none|Link to this comment resource.|
|updated|string(date-time)|false|none|The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.|
|verb|string|false|none|This comment's verb, indicating what action was performed. Possible values are:  <br>- "post" - Publish content to the stream.|

<h2 id="tocS_CommentFeed">CommentFeed</h2>
<!-- backwards compatibility -->
<a id="schemacommentfeed"></a>
<a id="schema_CommentFeed"></a>
<a id="tocScommentfeed"></a>
<a id="tocscommentfeed"></a>

```json
{
  "etag": "string",
  "id": "string",
  "items": [
    {
      "actor": {
        "clientSpecificActorInfo": {
          "youtubeActorInfo": {
            "channelId": "string"
          }
        },
        "displayName": "string",
        "id": "string",
        "image": {
          "url": "string"
        },
        "url": "string",
        "verification": {
          "adHocVerified": "string"
        }
      },
      "etag": "string",
      "id": "string",
      "inReplyTo": [
        {
          "id": "string",
          "url": "string"
        }
      ],
      "kind": "plus#comment",
      "object": {
        "content": "string",
        "objectType": "comment",
        "originalContent": "string"
      },
      "plusoners": {
        "totalItems": 0
      },
      "published": "1970-01-01T00:00:00Z",
      "selfLink": "string",
      "updated": "1970-01-01T00:00:00Z",
      "verb": "post"
    }
  ],
  "kind": "plus#commentFeed",
  "nextLink": "string",
  "nextPageToken": "string",
  "title": "string",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|id|string|false|none|The ID of this collection of comments.|
|items|[[Comment](#schemacomment)]|false|none|The comments in this page of results.|
|kind|string|false|none|Identifies this resource as a collection of comments. Value: "plus#commentFeed".|
|nextLink|string|false|none|Link to the next page of activities.|
|nextPageToken|string|false|none|The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|
|title|string|false|none|The title of this collection of comments.|
|updated|string(date-time)|false|none|The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.|

<h2 id="tocS_PeopleFeed">PeopleFeed</h2>
<!-- backwards compatibility -->
<a id="schemapeoplefeed"></a>
<a id="schema_PeopleFeed"></a>
<a id="tocSpeoplefeed"></a>
<a id="tocspeoplefeed"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "aboutMe": "string",
      "ageRange": {
        "max": 0,
        "min": 0
      },
      "birthday": "string",
      "braggingRights": "string",
      "circledByCount": 0,
      "cover": {
        "coverInfo": {
          "leftImageOffset": 0,
          "topImageOffset": 0
        },
        "coverPhoto": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "layout": "string"
      },
      "currentLocation": "string",
      "displayName": "string",
      "domain": "string",
      "emails": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "etag": "string",
      "gender": "string",
      "id": "string",
      "image": {
        "isDefault": true,
        "url": "string"
      },
      "isPlusUser": true,
      "kind": "plus#person",
      "language": "string",
      "name": {
        "familyName": "string",
        "formatted": "string",
        "givenName": "string",
        "honorificPrefix": "string",
        "honorificSuffix": "string",
        "middleName": "string"
      },
      "nickname": "string",
      "objectType": "string",
      "occupation": "string",
      "organizations": [
        {
          "department": "string",
          "description": "string",
          "endDate": "string",
          "location": "string",
          "name": "string",
          "primary": true,
          "startDate": "string",
          "title": "string",
          "type": "string"
        }
      ],
      "placesLived": [
        {
          "primary": true,
          "value": "string"
        }
      ],
      "plusOneCount": 0,
      "relationshipStatus": "string",
      "skills": "string",
      "tagline": "string",
      "url": "string",
      "urls": [
        {
          "label": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "verified": true
    }
  ],
  "kind": "plus#peopleFeed",
  "nextPageToken": "string",
  "selfLink": "string",
  "title": "string",
  "totalItems": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of this response for caching purposes.|
|items|[[Person](#schemaperson)]|false|none|The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.|
|kind|string|false|none|Identifies this resource as a collection of people. Value: "plus#peopleFeed".|
|nextPageToken|string|false|none|The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|
|selfLink|string|false|none|Link to this resource.|
|title|string|false|none|The title of this collection of people.|
|totalItems|integer(int32)|false|none|The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.|

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "aboutMe": "string",
  "ageRange": {
    "max": 0,
    "min": 0
  },
  "birthday": "string",
  "braggingRights": "string",
  "circledByCount": 0,
  "cover": {
    "coverInfo": {
      "leftImageOffset": 0,
      "topImageOffset": 0
    },
    "coverPhoto": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "layout": "string"
  },
  "currentLocation": "string",
  "displayName": "string",
  "domain": "string",
  "emails": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "etag": "string",
  "gender": "string",
  "id": "string",
  "image": {
    "isDefault": true,
    "url": "string"
  },
  "isPlusUser": true,
  "kind": "plus#person",
  "language": "string",
  "name": {
    "familyName": "string",
    "formatted": "string",
    "givenName": "string",
    "honorificPrefix": "string",
    "honorificSuffix": "string",
    "middleName": "string"
  },
  "nickname": "string",
  "objectType": "string",
  "occupation": "string",
  "organizations": [
    {
      "department": "string",
      "description": "string",
      "endDate": "string",
      "location": "string",
      "name": "string",
      "primary": true,
      "startDate": "string",
      "title": "string",
      "type": "string"
    }
  ],
  "placesLived": [
    {
      "primary": true,
      "value": "string"
    }
  ],
  "plusOneCount": 0,
  "relationshipStatus": "string",
  "skills": "string",
  "tagline": "string",
  "url": "string",
  "urls": [
    {
      "label": "string",
      "type": "string",
      "value": "string"
    }
  ],
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aboutMe|string|false|none|A short biography for this person.|
|ageRange|object|false|none|The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.|
|birthday|string|false|none|The person's date of birth, represented as YYYY-MM-DD.|
|braggingRights|string|false|none|The "bragging rights" line of this person.|
|circledByCount|integer(int32)|false|none|For followers who are visible, the number of people who have added this person or page to a circle.|
|cover|object|false|none|The cover photo content.|
|currentLocation|string|false|none|(this field is not currently used)|
|displayName|string|false|none|The name of this person, which is suitable for display.|
|domain|string|false|none|The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.|
|emails|[object]|false|none|A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.|
|etag|string|false|none|ETag of this response for caching purposes.|
|gender|string|false|none|The person's gender. Possible values include, but are not limited to, the following values:  <br>- "male" - Male gender. <br>- "female" - Female gender. <br>- "other" - Other.|
|id|string|false|none|The ID of this person.|
|image|object|false|none|The representation of the person's profile photo.|
|isPlusUser|boolean|false|none|Whether this user has signed up for Google+.|
|kind|string|false|none|Identifies this resource as a person. Value: "plus#person".|
|language|string|false|none|The user's preferred language for rendering.|
|name|object|false|none|An object representation of the individual components of a person's name.|
|nickname|string|false|none|The nickname of this person.|
|objectType|string|false|none|Type of person within Google+. Possible values include, but are not limited to, the following values:  <br>- "person" - represents an actual person. <br>- "page" - represents a page.|
|occupation|string|false|none|The occupation of this person.|
|organizations|[object]|false|none|A list of current or past organizations with which this person is associated.|
|placesLived|[object]|false|none|A list of places where this person has lived.|
|plusOneCount|integer(int32)|false|none|If a Google+ Page, the number of people who have +1'd this page.|
|relationshipStatus|string|false|none|The person's relationship status. Possible values include, but are not limited to, the following values:  <br>- "single" - Person is single. <br>- "in_a_relationship" - Person is in a relationship. <br>- "engaged" - Person is engaged. <br>- "married" - Person is married. <br>- "its_complicated" - The relationship is complicated. <br>- "open_relationship" - Person is in an open relationship. <br>- "widowed" - Person is widowed. <br>- "in_domestic_partnership" - Person is in a domestic partnership. <br>- "in_civil_union" - Person is in a civil union.|
|skills|string|false|none|The person's skills.|
|tagline|string|false|none|The brief description (tagline) of this person.|
|url|string|false|none|The URL of this person's profile.|
|urls|[object]|false|none|A list of URLs for this person.|
|verified|boolean|false|none|Whether the person or Google+ Page has been verified.|

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "address": {
    "formatted": "string"
  },
  "displayName": "string",
  "id": "string",
  "kind": "plus#place",
  "position": {
    "latitude": 0,
    "longitude": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|object|false|none|The physical address of the place.|
|displayName|string|false|none|The display name of the place.|
|id|string|false|none|The id of the place.|
|kind|string|false|none|Identifies this resource as a place. Value: "plus#place".|
|position|object|false|none|The position of the place.|

<h2 id="tocS_PlusAclentryResource">PlusAclentryResource</h2>
<!-- backwards compatibility -->
<a id="schemaplusaclentryresource"></a>
<a id="schema_PlusAclentryResource"></a>
<a id="tocSplusaclentryresource"></a>
<a id="tocsplusaclentryresource"></a>

```json
{
  "displayName": "string",
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|A descriptive name for this entry. Suitable for display.|
|id|string|false|none|The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.|
|type|string|false|none|The type of entry describing to whom access is granted. Possible values are:  <br>- "person" - Access to an individual. <br>- "circle" - Access to members of a circle. <br>- "myCircles" - Access to members of all the person's circles. <br>- "extendedCircles" - Access to members of all the person's circles, plus all of the people in their circles. <br>- "domain" - Access to members of the person's Google Apps domain. <br>- "public" - Access to anyone on the web.|
