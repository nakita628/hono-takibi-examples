<h1 id="soundcloud-public-api-specification">SoundCloud Public API Specification v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.soundcloud.com">https://api.soundcloud.com</a>

<a href="https://developers.soundcloud.com/docs/api/terms-of-use">Terms of service</a>
Web: <a href="https://github.com/soundcloud/api">API issue tracker</a> 

# Authentication

* API Key (AuthHeader)
    - Parameter Name: **Authorization**, in: header. The string "OAuth" followed by the user’s token: OAuth ACCESS_TOKEN

* API Key (ClientId)
    - Parameter Name: **client_id**, in: query. Your product key. This is not the same as the API key used for most requests

<h1 id="soundcloud-public-api-specification-oauth">oauth</h1>

Authentication and Authorization Endpoints.

## The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.

> Code samples

```bash
curl "https://example.com/connect?client_id=some%20client&redirect_uri=https%3A%2F%2Fsoundcloud.com&response_type=code&scope=default&client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /connect`

<h3>Security Advice</h3>
* Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.
* Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.


<h3 id="the-oauth2-authorization-endpoint-your-app-redirects-a-user-to-this-endpoint-allowing-them-to-delegate-access-to-their-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|The client id belonging to your application|
|redirect_uri|query|string|true|The redirect uri you have configured for your application|
|response_type|query|string|true|It's recommended to use "code" here|
|scope|query|string|true|Scope|
|state|query|string|false|Any value included here will be appended to the redirect URI. Use this for CSRF protection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|code|
|response_type|token|
|response_type|code_and_token|

> Example responses

> 302 Response

```json
"string"
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="the-oauth2-authorization-endpoint-your-app-redirects-a-user-to-this-endpoint-allowing-them-to-delegate-access-to-their-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

> Code samples

```bash
curl "https://example.com/oauth2/token?client_id=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=1-123456-12345678-FAbcfbe9ir2wdj0&grant_type=authorization_code&redirect_uri=https%3A%2F%2Fmywebsite%2Fauth%2Fsoundcloud'
```

`POST /oauth2/token`

> Body parameter

```yaml
client_id: CLIENT_ID
client_secret: CLIENT_SECRET
code: "1-123456-12345678-FAbcfbe9ir2wdj0"
grant_type: authorization_code
redirect_uri: "https://mywebsite/auth/soundcloud"
```

<h3 id="this-endpoint-accepts-post-requests-and-is-used-to-provision-access-tokens-once-a-user-has-authorized-your-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthorizationCode](#schemaauthorizationcode) \| [RefreshToken](#schemarefreshtoken) \| [Password](#schemapassword)|false|none|
|» *oneOf*|body|[AuthorizationCode](#schemaauthorizationcode)|false|none|
|» *oneOf*|body|[RefreshToken](#schemarefreshtoken)|false|none|
|» *oneOf*|body|[Password](#schemapassword)|false|**Deprecated.**|

> Example responses

> 200 Response

```json
{
  "access_token": "some string",
  "expires_in": 21599,
  "refresh_token": "some string",
  "scope": ""
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="this-endpoint-accepts-post-requests-and-is-used-to-provision-access-tokens-once-a-user-has-authorized-your-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="this-endpoint-accepts-post-requests-and-is-used-to-provision-access-tokens-once-a-user-has-authorized-your-application-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Error](#schemaerror)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

<h1 id="soundcloud-public-api-specification-me">me</h1>

Own User Endpoints.

## Returns the authenticated user’s information.

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me`

> Example responses

> 200 Response

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars.jpg",
  "city": "City",
  "country": "Country",
  "description": null,
  "discogs_name": null,
  "first_name": "First_name",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "Full Name",
  "id": 12345,
  "kind": "user",
  "last_modified": "2020/01/03 12:08:25 +0000",
  "last_name": "Last_name",
  "locale": "en",
  "myspace_name": null,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/permalink",
  "plan": "Free",
  "playlist_count": 3,
  "primary_email_confirmed": true,
  "private_playlists_count": 0,
  "private_tracks_count": 0,
  "public_favorites_count": 20,
  "quota": {
    "unlimited_upload_quota": false,
    "upload_seconds_left": 10800,
    "upload_seconds_used": 0
  },
  "reposts_count": 0,
  "subscriptions": [
    {
      "product": {
        "id": "some-id",
        "name": "some.name"
      }
    }
  ],
  "track_count": 0,
  "upload_seconds_left": 10800,
  "uri": "https://api.soundcloud.com/users/1234",
  "username": "some.user",
  "website": null,
  "website_title": null
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-the-authenticated-users-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteUser](#schemacompleteuser)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns the authenticated user's activities.

> Code samples

```bash
curl https://example.com/me/activities \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/activities`

<h3 id="returns-the-authenticated-users-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": [
    {
      "created_at": "2020/10/12 12:02:44 +0000",
      "origin": {
        "allOf": [
          {
            "$ref": "#/components/examples/Track/value"
          }
        ]
      },
      "type": "track:repost"
    },
    {
      "created_at": "2020/10/12 12:02:44 +0000",
      "origin": {
        "allOf": [
          {
            "$ref": "#/components/examples/Playlist/value"
          }
        ]
      },
      "type": "playlist"
    }
  ],
  "future_href": "https://api.soundcloud.com/me/activities?limit=10&cursor=000001",
  "next_href": "https://api.soundcloud.com/me/activities?limit=10&cursor=00000"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-the-authenticated-users-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Activities](#schemaactivities)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Recent the authenticated user's activities.

> Code samples

```bash
curl https://example.com/me/activities/all/own \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/activities/all/own`

<h3 id="recent-the-authenticated-users-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": [
    {
      "created_at": "2020/10/12 12:02:44 +0000",
      "origin": {
        "allOf": [
          {
            "$ref": "#/components/examples/Track/value"
          }
        ]
      },
      "type": "track:repost"
    },
    {
      "created_at": "2020/10/12 12:02:44 +0000",
      "origin": {
        "allOf": [
          {
            "$ref": "#/components/examples/Playlist/value"
          }
        ]
      },
      "type": "playlist"
    }
  ],
  "future_href": "https://api.soundcloud.com/me/activities?limit=10&cursor=000001",
  "next_href": "https://api.soundcloud.com/me/activities?limit=10&cursor=00000"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="recent-the-authenticated-users-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Activities](#schemaactivities)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns the authenticated user's recent track related activities.

> Code samples

```bash
curl https://example.com/me/activities/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/activities/tracks`

<h3 id="returns-the-authenticated-users-recent-track-related-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": [
    {
      "created_at": "2020/10/12 12:02:44 +0000",
      "origin": {
        "allOf": [
          {
            "$ref": "#/components/examples/Track/value"
          }
        ]
      },
      "type": "track:repost"
    },
    {
      "created_at": "2020/10/12 12:02:44 +0000",
      "origin": {
        "allOf": [
          {
            "$ref": "#/components/examples/Playlist/value"
          }
        ]
      },
      "type": "playlist"
    }
  ],
  "future_href": "https://api.soundcloud.com/me/activities?limit=10&cursor=000001",
  "next_href": "https://api.soundcloud.com/me/activities?limit=10&cursor=00000"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-the-authenticated-users-recent-track-related-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Activities](#schemaactivities)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a list of the authenticated user's connected social accounts.

> Code samples

```bash
curl https://example.com/me/connections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/connections`

<h3 id="returns-a-list-of-the-authenticated-users-connected-social-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/Connection/value"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-the-authenticated-users-connected-social-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connections](#schemaconnections)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns the authenticated user's connected social account.

> Code samples

```bash
curl https://example.com/me/connections/123456 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/connections/{connection_id}`

<h3 id="returns-the-authenticated-users-connected-social-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|integer|true|SoundCloud connection id|

> Example responses

> 200 Response

```json
{
  "created_at": "1995/07/24 08:55:02 +0000",
  "display_name": "Full Name",
  "id": 123456,
  "kind": "connection",
  "post_favorite": true,
  "post_publish": true,
  "service": "google_plus",
  "type": "google_plus",
  "uri": "https://api.soundcloud.com/connections/123456"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-the-authenticated-users-connected-social-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Connection](#schemaconnection)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)

> Code samples

```bash
curl https://example.com/me/favorites/ids \
  -H "Authorization: ${API_KEY}"
```

`GET /me/favorites/ids`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-users-favorites-ids-use-melikestracks-instead-to-fetch-the-authenticated-users-likes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|

<h3 id="returns-users-favorites-ids-use-melikestracks-instead-to-fetch-the-authenticated-users-likes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|The user could not be found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a list of users who are following the authenticated user.

> Code samples

```bash
curl https://example.com/me/followers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/followers`

<h3 id="returns-a-list-of-users-who-are-following-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/User/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-who-are-following-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-who-are-following-the-authenticated-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Users](#schemausers)|false|none|none|
|*oneOf*|[UsersList](#schemauserslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)

> Code samples

```bash
curl https://example.com/me/followers/743372812 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/followers/{follower_id}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-a-user-who-is-following-the-authenticated-user-use-usersuserid-instead-to-fetch-the-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|follower_id|path|integer|true|SoundCloud User id to denote a Follower|

> Example responses

> 200 Response

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars.jpg",
  "city": "City",
  "country": "Country",
  "created_at": "2018/01/01 12:08:25 +0000",
  "description": null,
  "discogs_name": null,
  "first_name": "First_name",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "Full Name",
  "id": 12345,
  "kind": "user",
  "last_modified": "2020/01/03 12:08:25 +0000",
  "last_name": "Last_name",
  "myspace_name": null,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/permalink",
  "plan": "Free",
  "playlist_count": 3,
  "public_favorites_count": 20,
  "reposts_count": 0,
  "subscriptions": [
    {
      "product": {
        "id": "some-id",
        "name": "some.name"
      }
    }
  ],
  "track_count": 0,
  "upload_seconds_left": 10800,
  "uri": "https://api.soundcloud.com/users/1234",
  "username": "some.user",
  "website": null,
  "website_title": null
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-user-who-is-following-the-authenticated-user-use-usersuserid-instead-to-fetch-the-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a list of users who are followed by the authenticated user.

> Code samples

```bash
curl https://example.com/me/followings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/followings`

<h3 id="returns-a-list-of-users-who-are-followed-by-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/User/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-who-are-followed-by-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-who-are-followed-by-the-authenticated-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Users](#schemausers)|false|none|none|
|*oneOf*|[UsersList](#schemauserslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a list of recent tracks from users followed by the authenticated user.

> Code samples

```bash
curl https://example.com/me/followings/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/followings/tracks`

<h3 id="returns-a-list-of-recent-tracks-from-users-followed-by-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/Track/value"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-recent-tracks-from-users-followed-by-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TracksList](#schematrackslist)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)

> Code samples

```bash
curl https://example.com/me/followings/948745750 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/followings/{user_id}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-a-user-who-is-followed-by-the-authenticated-user-use-usersuserid-instead-to-fetch-the-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|

> Example responses

> 200 Response

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars.jpg",
  "city": "City",
  "country": "Country",
  "created_at": "2018/01/01 12:08:25 +0000",
  "description": null,
  "discogs_name": null,
  "first_name": "First_name",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "Full Name",
  "id": 12345,
  "kind": "user",
  "last_modified": "2020/01/03 12:08:25 +0000",
  "last_name": "Last_name",
  "myspace_name": null,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/permalink",
  "plan": "Free",
  "playlist_count": 3,
  "public_favorites_count": 20,
  "reposts_count": 0,
  "subscriptions": [
    {
      "product": {
        "id": "some-id",
        "name": "some.name"
      }
    }
  ],
  "track_count": 0,
  "upload_seconds_left": 10800,
  "uri": "https://api.soundcloud.com/users/1234",
  "username": "some.user",
  "website": null,
  "website_title": null
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-user-who-is-followed-by-the-authenticated-user-use-usersuserid-instead-to-fetch-the-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Follows a user.

> Code samples

```bash
curl https://example.com/me/followings/743372812 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /me/followings/{user_id}`

<h3 id="follows-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|

> Example responses

> 200 Response

```json
{
  "status": "200 - Successful"
}
```

> 201 Response

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars.jpg",
  "city": "City",
  "country": "Country",
  "created_at": "2018/01/01 12:08:25 +0000",
  "description": null,
  "discogs_name": null,
  "first_name": "First_name",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "Full Name",
  "id": 12345,
  "kind": "user",
  "last_modified": "2020/01/03 12:08:25 +0000",
  "last_name": "Last_name",
  "myspace_name": null,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/permalink",
  "plan": "Free",
  "playlist_count": 3,
  "public_favorites_count": 20,
  "reposts_count": 0,
  "subscriptions": [
    {
      "product": {
        "id": "some-id",
        "name": "some.name"
      }
    }
  ],
  "track_count": 0,
  "upload_seconds_left": 10800,
  "uri": "https://api.soundcloud.com/users/1234",
  "username": "some.user",
  "website": null,
  "website_title": null
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="follows-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|201|Created|Success|[User](#schemauser)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Deletes a user who is followed by the authenticated user.

> Code samples

```bash
curl https://example.com/me/followings/743372812 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /me/followings/{user_id}`

<h3 id="deletes-a-user-who-is-followed-by-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|

> Example responses

> 200 Response

```json
{
  "status": "Status(200) - OK"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 422 Response

```json
{
  "code": 422,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="deletes-a-user-who-is-followed-by-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a list of favorited or liked tracks of the authenticated user.

> Code samples

```bash
curl https://example.com/me/likes/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/likes/tracks`

<h3 id="returns-a-list-of-favorited-or-liked-tracks-of-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-favorited-or-liked-tracks-of-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-favorited-or-liked-tracks-of-the-authenticated-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns user’s playlists (sets).

> Code samples

```bash
curl https://example.com/me/playlists \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/playlists`

Returns playlist info, playlist tracks and tracks owner info.

<h3 id="returns-users-playlists-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/Playlist/value"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-users-playlists-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PlaylistsArray](#schemaplaylistsarray)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)

> Code samples

```bash
curl https://example.com/me/playlists/1212781357 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/playlists/{playlist_id}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-playlist-use-playlistsplaylistid-instead-to-fetch-the-playlist-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|

> Example responses

> 200 Response

```json
{
  "artwork_url": "",
  "created_at": "2020/07/16 16:09:54 +0000",
  "description": null,
  "downloadable": true,
  "duration": 11000,
  "ean": null,
  "embeddable_by": "all",
  "genre": "",
  "id": 12345,
  "kind": "playlist",
  "label": null,
  "label_id": null,
  "label_name": null,
  "last_modified": "2020/09/08 09:13:00 +0000",
  "license": "all-rights-reserved",
  "likes_count": 0,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/userPermalink/sets/permalink",
  "playlist_type": "",
  "purchase_title": null,
  "purchase_url": null,
  "release": null,
  "release_day": null,
  "release_month": null,
  "release_year": null,
  "sharing": "public",
  "streamable": true,
  "tag_list": "",
  "tags": "",
  "title": "permalink",
  "track_count": 2,
  "tracks": {
    "$ref": "#/components/examples/Track/value"
  },
  "tracks_uri": "https://api.soundcloud.com/playlists/12345/tracks",
  "type": "",
  "uri": "https://api.soundcloud.com/playlists/12345",
  "user": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "user_id": 1234
}
```

<h3 id="returns-playlist-use-playlistsplaylistid-instead-to-fetch-the-playlist-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Playlist](#schemaplaylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a list of user's tracks.

> Code samples

```bash
curl https://example.com/me/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/tracks`

<h3 id="returns-a-list-of-users-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return in the collection.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-tracks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)

> Code samples

```bash
curl https://example.com/me/tracks/308946187 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /me/tracks/{track_id}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-a-specified-track-use-trackstrackid-instead-to-fetch-the-track-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|

> Example responses

> 200 Response

```json
{
  "access": "playable",
  "artwork_url": "https://i1.sndcdn.com/artworks-large.jpg",
  "available_country_codes": null,
  "bpm": null,
  "comment_count": 4,
  "commentable": true,
  "created_at": "2019/01/15 15:40:49 +0000",
  "description": null,
  "download_count": 0,
  "download_url": "https://api.soundcloud.com/tracks/1234/download",
  "downloadable": false,
  "duration": 40000,
  "embeddable_by": "all",
  "favoritings_count": 271,
  "genre": "Rock",
  "id": 1234,
  "isrc": null,
  "key_signature": null,
  "kind": "track",
  "label_name": "some label",
  "license": "all-rights-reserved",
  "permalink_url": "https://soundcloud.com/userPermalink/trackPermalink",
  "playback_count": 8027,
  "purchase_title": null,
  "purchase_url": null,
  "release": null,
  "release_day": 22,
  "release_month": 8,
  "release_year": 2019,
  "reposts_count": 18,
  "secret_uri": null,
  "sharing": "public",
  "stream_url": "https://api.soundcloud.com/tracks/1234/stream",
  "streamable": true,
  "tag_list": "",
  "title": "Some title",
  "uri": "https://api.soundcloud.com/tracks/1234",
  "user": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "user_favorite": true,
  "user_playback_count": 1,
  "waveform_url": "https://wave.sndcdn.com/someString.png"
}
```

<h3 id="returns-a-specified-track-use-trackstrackid-instead-to-fetch-the-track-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Track](#schematrack)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

<h1 id="soundcloud-public-api-specification-search">search</h1>

Search Endpoints.

## Performs a playlist search based on a query

> Code samples

```bash
curl "https://example.com/playlists?q=hello&client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /playlists`

<h3 id="performs-a-playlist-search-based-on-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|search|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Playlist/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="performs-a-playlist-search-based-on-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="performs-a-playlist-search-based-on-a-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Playlists](#schemaplaylists)|false|none|none|
|*oneOf*|[PlaylistsArray](#schemaplaylistsarray)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Performs a track search based on a query

> Code samples

```bash
curl "https://example.com/tracks?q=hello&client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tracks`

<h3 id="performs-a-track-search-based-on-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|search|
|ids|query|string|false|A comma separated list of track ids to filter on|
|genres|query|string|false|A comma separated list of genres|
|tags|query|string|false|A comma separated list of tags|
|bpm|query|object|false|Return tracks with a specified bpm[from], bpm[to]|
|duration|query|object|false|Return tracks within a specified duration range|
|created_at|query|object|false|(yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="performs-a-track-search-based-on-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="performs-a-track-search-based-on-a-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Performs a user search based on a query

> Code samples

```bash
curl "https://example.com/users?q=hello&client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users`

<h3 id="performs-a-user-search-based-on-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|search|
|ids|query|string|false|A comma separated list of track ids to filter on|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/User/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="performs-a-user-search-based-on-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="performs-a-user-search-based-on-a-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Users](#schemausers)|false|none|none|
|*oneOf*|[UsersList](#schemauserslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

<h1 id="soundcloud-public-api-specification-playlists">playlists</h1>

Playlists Endpoints.

## Creates a playlist.

> Code samples

```bash
curl https://example.com/playlists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "playlist": {
      "description": "Playlist for test purposes",
      "sharing": "private",
      "title": "Test Auto-created Playlist",
      "tracks": [
        {
          "id": 219787221
        },
        {
          "id": 783019264
        },
        {
          "id": 870073492
        }
      ]
    }
  }'
```

`POST /playlists`

> Body parameter

```json
{
  "playlist": {
    "description": "Playlist for test purposes",
    "sharing": "private",
    "title": "Test Auto-created Playlist",
    "tracks": [
      {
        "id": 219787221
      },
      {
        "id": 783019264
      },
      {
        "id": 870073492
      }
    ]
  }
}
```

<h3 id="creates-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUpdatePlaylistRequest](#schemacreateupdateplaylistrequest)|false|Create Playlist request|
|» playlist|body|object|false|none|
|» » description|body|string|false|Description of the playlist|
|» » sharing|body|string|false|public or private|
|» » title|body|string|false|Title of the playlist|
|» » tracks|body|[object]|false|List of tracks to add to playlist|
|» » » id|body|string|true|SoundCloud track id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » sharing|public|
|» » sharing|private|

> Example responses

> 201 Response

```json
{
  "artwork_url": "string",
  "created_at": "string",
  "description": "string",
  "downloadable": true,
  "duration": 0,
  "ean": "string",
  "embeddable_by": "string",
  "genre": "string",
  "id": 0,
  "kind": "string",
  "label_id": 0,
  "label_name": "string",
  "last_modified": "string",
  "license": "string",
  "permalink": "string",
  "permalink_url": "string",
  "playlist_type": "string",
  "purchase_title": "string",
  "purchase_url": "string",
  "release": "string",
  "release_day": 0,
  "release_month": 0,
  "release_year": 0,
  "sharing": "string",
  "streamable": true,
  "tag_list": "string",
  "title": "string",
  "track_count": 0,
  "tracks": [
    {
      "artwork_url": "string",
      "bpm": 0,
      "comment_count": 0,
      "commentable": true,
      "created_at": "string",
      "description": "string",
      "download_count": 0,
      "downloadable": "string",
      "duration": 0,
      "embeddable_by": "string",
      "favoritings_count": 0,
      "genre": "string",
      "id": 0,
      "isrc": "string",
      "key_signature": "string",
      "kind": "string",
      "label_name": "string",
      "license": "string",
      "permalink_url": "string",
      "playback_count": 0,
      "purchase_title": "string",
      "purchase_url": "string",
      "release": "string",
      "release_day": 0,
      "release_month": 0,
      "release_year": 0,
      "sharing": "string",
      "stream_url": "string",
      "streamable": true,
      "tag_list": "string",
      "title": "string",
      "uri": "string",
      "user": {
        "avatar_url": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": 0,
        "kind": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "permalink": "string",
        "permalink_url": "string",
        "uri": "string",
        "username": "string"
      },
      "user_favorite": true,
      "user_playback_count": 0,
      "waveform_url": "string"
    }
  ],
  "type": "string",
  "uri": "string",
  "user": {
    "avatar_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "id": 0,
    "kind": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "permalink": "string",
    "permalink_url": "string",
    "uri": "string",
    "username": "string"
  },
  "user_id": 0
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="creates-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="creates-a-playlist-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artwork_url|string|false|none|URL to a JPEG image.|
|created_at|string|false|none|Created timestamp.|
|description|string|false|none|Playlist description.|
|downloadable|boolean|false|none|is downloadable.|
|duration|integer|false|none|Playlist duration.|
|ean|string|false|none|European Article Number.|
|embeddable_by|string|false|none|Embeddable by.|
|genre|string|false|none|Playlist genre.|
|id|integer|false|none|Playlist identifier.|
|kind|string|false|none|Type of Soundcloud object (playlist).|
|label_id|integer|false|none|Label user identifier.|
|label_name|string|false|none|Label name.|
|last_modified|string|false|none|Last modified timestamp.|
|license|string|false|none|License.|
|permalink|string|false|none|Playlist permalink.|
|permalink_url|string|false|none|Playlist permalink URL.|
|playlist_type|string|false|none|Type of playlist.|
|purchase_title|string|false|none|Purchase title.|
|purchase_url|string|false|none|Purchase URL.|
|release|string|false|none|Release.|
|release_day|integer|false|none|Day of release.|
|release_month|integer|false|none|Month of release.|
|release_year|integer|false|none|Year of release.|
|sharing|string|false|none|Type of sharing (private/public).|
|streamable|boolean|false|none|Is streamable.|
|tag_list|string|false|none|Tags.|
|title|string|false|none|Playlist title.|
|track_count|integer|false|none|Count of tracks.|
|tracks|[object]|false|none|List of tracks.|
|» artwork_url|string|false|none|URL to a JPEG image.|
|» bpm|integer|false|none|Tempo.|
|» comment_count|integer|false|none|Number of comments.|
|» commentable|boolean|false|none|Is commentable.|
|» created_at|string|false|none|Created timestamp.|
|» description|string|false|none|Track description.|
|» download_count|integer|false|none|NUmber of downloads.|
|» downloadable|string|false|none|Is downloadable.|
|» duration|integer|false|none|Track duration.|
|» embeddable_by|string|false|none|**Deprecated.** Embeddable by.|
|» favoritings_count|integer|false|none|Number of favoritings.|
|» genre|string|false|none|Genre|
|» id|integer|false|none|Track identifier.|
|» isrc|string|false|none|ISRC code.|
|» key_signature|string|false|none|Key signature.|
|» kind|string|false|none|Type of object (track).|
|» label_name|string|false|none|Label user name.|
|» license|string|false|none|License|
|» permalink_url|string|false|none|Permalink URL.|
|» playback_count|integer|false|none|Number of plays.|
|» purchase_title|string|false|none|Purchase title.|
|» purchase_url|string|false|none|Purchase URL.|
|» release|string|false|none|Release.|
|» release_day|integer|false|none|Day of release.|
|» release_month|integer|false|none|Month of release.|
|» release_year|integer|false|none|Year of release.|
|» sharing|string|false|none|Type of sharing (public/private).|
|» stream_url|string|false|none|URL to stream.|
|» streamable|boolean|false|none|Is streamable.|
|» tag_list|string|false|none|Tags.|
|» title|string|false|none|Track title.|
|» uri|string|false|none|Track URI.|
|» user|[MetaUser](#schemametauser)|false|none|User who uploaded a track|
|» user_favorite|boolean|false|none|Is user's favourite.|
|» user_playback_count|integer|false|none|Number of plays by a user.|
|» waveform_url|string|false|none|Waveform URL.|
|type|string|false|none|Playlist type.|
|uri|string|false|none|Playlist URI.|
|user|[MetaUser](#schemametauser)|false|none|SoundCloud User object.|
|user_id|integer|false|none|User identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns a playlist.

> Code samples

```bash
curl "https://example.com/playlists/1212781357?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /playlists/{playlist_id}`

<h3 id="returns-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|
|secret_token|query|string|false|A secret token to fetch private playlists/tracks|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "artwork_url": "",
  "created_at": "2020/07/16 16:09:54 +0000",
  "description": null,
  "downloadable": true,
  "duration": 11000,
  "ean": null,
  "embeddable_by": "all",
  "genre": "",
  "id": 12345,
  "kind": "playlist",
  "label": null,
  "label_id": null,
  "label_name": null,
  "last_modified": "2020/09/08 09:13:00 +0000",
  "license": "all-rights-reserved",
  "likes_count": 0,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/userPermalink/sets/permalink",
  "playlist_type": "",
  "purchase_title": null,
  "purchase_url": null,
  "release": null,
  "release_day": null,
  "release_month": null,
  "release_year": null,
  "sharing": "public",
  "streamable": true,
  "tag_list": "",
  "tags": "",
  "title": "permalink",
  "track_count": 2,
  "tracks": {
    "$ref": "#/components/examples/Track/value"
  },
  "tracks_uri": "https://api.soundcloud.com/playlists/12345/tracks",
  "type": "",
  "uri": "https://api.soundcloud.com/playlists/12345",
  "user": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "user_id": 1234
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Playlist](#schemaplaylist)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Updates a playlist.

> Code samples

```bash
curl https://example.com/playlists/10 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "playlist": {
      "description": "Playlist for test purposes",
      "sharing": "private",
      "title": "Test Auto-created Playlist",
      "tracks": [
        {
          "id": 219787221
        },
        {
          "id": 783019264
        },
        {
          "id": 870073492
        }
      ]
    }
  }'
```

`PUT /playlists/{playlist_id}`

> Body parameter

```json
{
  "playlist": {
    "description": "Playlist for test purposes",
    "sharing": "private",
    "title": "Test Auto-created Playlist",
    "tracks": [
      {
        "id": 219787221
      },
      {
        "id": 783019264
      },
      {
        "id": 870073492
      }
    ]
  }
}
```

<h3 id="updates-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|
|body|body|[CreateUpdatePlaylistRequest](#schemacreateupdateplaylistrequest)|false|Playlist payload|
|» playlist|body|object|false|none|
|» » description|body|string|false|Description of the playlist|
|» » sharing|body|string|false|public or private|
|» » title|body|string|false|Title of the playlist|
|» » tracks|body|[object]|false|List of tracks to add to playlist|
|» » » id|body|string|true|SoundCloud track id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » sharing|public|
|» » sharing|private|

> Example responses

> 200 Response

```json
{
  "artwork_url": "string",
  "created_at": "string",
  "description": "string",
  "downloadable": true,
  "duration": 0,
  "ean": "string",
  "embeddable_by": "string",
  "genre": "string",
  "id": 0,
  "kind": "string",
  "label_id": 0,
  "label_name": "string",
  "last_modified": "string",
  "license": "string",
  "permalink": "string",
  "permalink_url": "string",
  "playlist_type": "string",
  "purchase_title": "string",
  "purchase_url": "string",
  "release": "string",
  "release_day": 0,
  "release_month": 0,
  "release_year": 0,
  "sharing": "string",
  "streamable": true,
  "tag_list": "string",
  "title": "string",
  "track_count": 0,
  "tracks": [
    {
      "artwork_url": "string",
      "bpm": 0,
      "comment_count": 0,
      "commentable": true,
      "created_at": "string",
      "description": "string",
      "download_count": 0,
      "downloadable": "string",
      "duration": 0,
      "embeddable_by": "string",
      "favoritings_count": 0,
      "genre": "string",
      "id": 0,
      "isrc": "string",
      "key_signature": "string",
      "kind": "string",
      "label_name": "string",
      "license": "string",
      "permalink_url": "string",
      "playback_count": 0,
      "purchase_title": "string",
      "purchase_url": "string",
      "release": "string",
      "release_day": 0,
      "release_month": 0,
      "release_year": 0,
      "sharing": "string",
      "stream_url": "string",
      "streamable": true,
      "tag_list": "string",
      "title": "string",
      "uri": "string",
      "user": {
        "avatar_url": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": 0,
        "kind": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "permalink": "string",
        "permalink_url": "string",
        "uri": "string",
        "username": "string"
      },
      "user_favorite": true,
      "user_playback_count": 0,
      "waveform_url": "string"
    }
  ],
  "type": "string",
  "uri": "string",
  "user": {
    "avatar_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "id": 0,
    "kind": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "permalink": "string",
    "permalink_url": "string",
    "uri": "string",
    "username": "string"
  },
  "user_id": 0
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="updates-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="updates-a-playlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artwork_url|string|false|none|URL to a JPEG image.|
|created_at|string|false|none|Created timestamp.|
|description|string|false|none|Playlist description.|
|downloadable|boolean|false|none|is downloadable.|
|duration|integer|false|none|Playlist duration.|
|ean|string|false|none|European Article Number.|
|embeddable_by|string|false|none|Embeddable by.|
|genre|string|false|none|Playlist genre.|
|id|integer|false|none|Playlist identifier.|
|kind|string|false|none|Type of Soundcloud object (playlist).|
|label_id|integer|false|none|Label user identifier.|
|label_name|string|false|none|Label name.|
|last_modified|string|false|none|Last modified timestamp.|
|license|string|false|none|License.|
|permalink|string|false|none|Playlist permalink.|
|permalink_url|string|false|none|Playlist permalink URL.|
|playlist_type|string|false|none|Type of playlist.|
|purchase_title|string|false|none|Purchase title.|
|purchase_url|string|false|none|Purchase URL.|
|release|string|false|none|Release.|
|release_day|integer|false|none|Day of release.|
|release_month|integer|false|none|Month of release.|
|release_year|integer|false|none|Year of release.|
|sharing|string|false|none|Type of sharing (private/public).|
|streamable|boolean|false|none|Is streamable.|
|tag_list|string|false|none|Tags.|
|title|string|false|none|Playlist title.|
|track_count|integer|false|none|Count of tracks.|
|tracks|[object]|false|none|List of tracks.|
|» artwork_url|string|false|none|URL to a JPEG image.|
|» bpm|integer|false|none|Tempo.|
|» comment_count|integer|false|none|Number of comments.|
|» commentable|boolean|false|none|Is commentable.|
|» created_at|string|false|none|Created timestamp.|
|» description|string|false|none|Track description.|
|» download_count|integer|false|none|NUmber of downloads.|
|» downloadable|string|false|none|Is downloadable.|
|» duration|integer|false|none|Track duration.|
|» embeddable_by|string|false|none|**Deprecated.** Embeddable by.|
|» favoritings_count|integer|false|none|Number of favoritings.|
|» genre|string|false|none|Genre|
|» id|integer|false|none|Track identifier.|
|» isrc|string|false|none|ISRC code.|
|» key_signature|string|false|none|Key signature.|
|» kind|string|false|none|Type of object (track).|
|» label_name|string|false|none|Label user name.|
|» license|string|false|none|License|
|» permalink_url|string|false|none|Permalink URL.|
|» playback_count|integer|false|none|Number of plays.|
|» purchase_title|string|false|none|Purchase title.|
|» purchase_url|string|false|none|Purchase URL.|
|» release|string|false|none|Release.|
|» release_day|integer|false|none|Day of release.|
|» release_month|integer|false|none|Month of release.|
|» release_year|integer|false|none|Year of release.|
|» sharing|string|false|none|Type of sharing (public/private).|
|» stream_url|string|false|none|URL to stream.|
|» streamable|boolean|false|none|Is streamable.|
|» tag_list|string|false|none|Tags.|
|» title|string|false|none|Track title.|
|» uri|string|false|none|Track URI.|
|» user|[MetaUser](#schemametauser)|false|none|User who uploaded a track|
|» user_favorite|boolean|false|none|Is user's favourite.|
|» user_playback_count|integer|false|none|Number of plays by a user.|
|» waveform_url|string|false|none|Waveform URL.|
|type|string|false|none|Playlist type.|
|uri|string|false|none|Playlist URI.|
|user|[MetaUser](#schemametauser)|false|none|SoundCloud User object.|
|user_id|integer|false|none|User identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Deletes a playlist.

> Code samples

```bash
curl "https://example.com/playlists/10?client_id=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /playlists/{playlist_id}`

<h3 id="deletes-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|

> Example responses

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="deletes-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a collection of playlist's reposters.

> Code samples

```bash
curl "https://example.com/playlists/1212781357/reposters?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /playlists/{playlist_id}/reposters`

<h3 id="returns-a-collection-of-playlists-reposters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-collection-of-playlists-reposters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetaUsers](#schemametausers)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

## Returns tracks under a playlist.

> Code samples

```bash
curl "https://example.com/playlists/1212781357/tracks?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /playlists/{playlist_id}/tracks`

<h3 id="returns-tracks-under-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|
|secret_token|query|string|false|A secret token to fetch private playlists/tracks|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-tracks-under-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-tracks-under-a-playlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

<h1 id="soundcloud-public-api-specification-tracks">tracks</h1>

Tracks Endpoints.

## Uploads a new track.

> Code samples

```bash
curl "https://example.com/tracks?client_id=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'track[artwork_data]=@/path/to/file' \
  -F 'track[asset_data]=@/path/to/file' \
  -F 'track[commentable]=true' \
  -F 'track[description]=Public-api test sample upload' \
  -F 'track[downloadable]=false' \
  -F 'track[embeddable_by]=me' \
  -F 'track[genre]=Pop' \
  -F 'track[isrc]=' \
  -F 'track[label_name]=' \
  -F 'track[license]=no-rights-reserved' \
  -F 'track[permalink]=test-drum-sample' \
  -F 'track[purchase_url]=' \
  -F 'track[release]=' \
  -F 'track[release_date]=2021-02-18T00:00:00.000Z' \
  -F 'track[sharing]=private' \
  -F 'track[streamable]=true' \
  -F 'track[tag_list]=' \
  -F 'track[title]=Test drum sample'
```

`POST /tracks`

> Body parameter

```yaml
"track[artwork_data]": null
"track[asset_data]": "<binary string>"
"track[commentable]": true
"track[description]": Public-api test sample upload
"track[downloadable]": false
"track[embeddable_by]": me
"track[genre]": Pop
"track[isrc]": null
"track[label_name]": null
"track[license]": no-rights-reserved
"track[permalink]": test-drum-sample
"track[purchase_url]": null
"track[release]": null
"track[release_date]": "2021-02-18T00:00:00.000Z"
"track[sharing]": private
"track[streamable]": true
"track[tag_list]": null
"track[title]": Test drum sample
```

<h3 id="uploads-a-new-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TrackDataRequest](#schematrackdatarequest)|false|none|
|» track[artwork_data]|body|string(binary)|false|none|
|» track[asset_data]|body|string(binary)|false|none|
|» track[commentable]|body|boolean|false|none|
|» track[description]|body|string|false|none|
|» track[downloadable]|body|boolean|false|none|
|» track[embeddable_by]|body|string|false|who can embed this track "all", "me", or "none"|
|» track[genre]|body|string|false|none|
|» track[isrc]|body|string|false|none|
|» track[label_name]|body|string|false|none|
|» track[license]|body|string|false|Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa|
|» track[permalink]|body|string|false|none|
|» track[purchase_url]|body|string|false|none|
|» track[release]|body|string|false|none|
|» track[release_date]|body|string|false|string, formatted as yyyy-mm-dd, representing release date|
|» track[sharing]|body|string|false|none|
|» track[streamable]|body|boolean|false|none|
|» track[tag_list]|body|string|false|The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.|
|» track[title]|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» track[embeddable_by]|all|
|» track[embeddable_by]|me|
|» track[embeddable_by]|none|
|» track[license]|no-rights-reserved|
|» track[license]|all-rights-reserved|
|» track[license]|cc-by|
|» track[license]|cc-by-nc|
|» track[license]|cc-by-nd|
|» track[license]|cc-by-sa|
|» track[license]|cc-by-nc-nd|
|» track[license]|cc-by-nc-sa|
|» track[sharing]|public|
|» track[sharing]|private|

> Example responses

> 201 Response

```json
{
  "access": "playable",
  "artwork_url": "https://i1.sndcdn.com/artworks-large.jpg",
  "available_country_codes": null,
  "bpm": null,
  "comment_count": 4,
  "commentable": true,
  "created_at": "2019/01/15 15:40:49 +0000",
  "description": null,
  "download_count": 0,
  "download_url": "https://api.soundcloud.com/tracks/1234/download",
  "downloadable": false,
  "duration": 40000,
  "embeddable_by": "all",
  "favoritings_count": 271,
  "genre": "Rock",
  "id": 1234,
  "isrc": null,
  "key_signature": null,
  "kind": "track",
  "label_name": "some label",
  "license": "all-rights-reserved",
  "permalink_url": "https://soundcloud.com/userPermalink/trackPermalink",
  "playback_count": 8027,
  "purchase_title": null,
  "purchase_url": null,
  "release": null,
  "release_day": 22,
  "release_month": 8,
  "release_year": 2019,
  "reposts_count": 18,
  "secret_uri": null,
  "sharing": "public",
  "stream_url": "https://api.soundcloud.com/tracks/1234/stream",
  "streamable": true,
  "tag_list": "",
  "title": "Some title",
  "uri": "https://api.soundcloud.com/tracks/1234",
  "user": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "user_favorite": true,
  "user_playback_count": 1,
  "waveform_url": "https://wave.sndcdn.com/someString.png"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="uploads-a-new-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Track](#schematrack)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a track.

> Code samples

```bash
curl "https://example.com/tracks/308946187?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tracks/{track_id}`

<h3 id="returns-a-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|secret_token|query|string|false|A secret token to fetch private playlists/tracks|

> Example responses

> 200 Response

```json
{
  "access": "playable",
  "artwork_url": "https://i1.sndcdn.com/artworks-large.jpg",
  "available_country_codes": null,
  "bpm": null,
  "comment_count": 4,
  "commentable": true,
  "created_at": "2019/01/15 15:40:49 +0000",
  "description": null,
  "download_count": 0,
  "download_url": "https://api.soundcloud.com/tracks/1234/download",
  "downloadable": false,
  "duration": 40000,
  "embeddable_by": "all",
  "favoritings_count": 271,
  "genre": "Rock",
  "id": 1234,
  "isrc": null,
  "key_signature": null,
  "kind": "track",
  "label_name": "some label",
  "license": "all-rights-reserved",
  "permalink_url": "https://soundcloud.com/userPermalink/trackPermalink",
  "playback_count": 8027,
  "purchase_title": null,
  "purchase_url": null,
  "release": null,
  "release_day": 22,
  "release_month": 8,
  "release_year": 2019,
  "reposts_count": 18,
  "secret_uri": null,
  "sharing": "public",
  "stream_url": "https://api.soundcloud.com/tracks/1234/stream",
  "streamable": true,
  "tag_list": "",
  "title": "Some title",
  "uri": "https://api.soundcloud.com/tracks/1234",
  "user": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "user_favorite": true,
  "user_playback_count": 1,
  "waveform_url": "https://wave.sndcdn.com/someString.png"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Track](#schematrack)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

## Updates a track's information.

> Code samples

```bash
curl https://example.com/tracks/308946187 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "track": {
      "commentable": true,
      "description": "string",
      "downloadable": true,
      "embeddable_by": "all",
      "genre": "string",
      "isrc": "string",
      "label_name": "string",
      "license": "no-rights-reserved",
      "permalink": "string",
      "purchase_url": "string",
      "release": "string",
      "release_date": "string",
      "sharing": "public",
      "streamable": true,
      "tag_list": "string",
      "title": "string"
    }
  }'
```

`PUT /tracks/{track_id}`

> Body parameter

```json
{
  "track": {
    "commentable": true,
    "description": "string",
    "downloadable": true,
    "embeddable_by": "all",
    "genre": "string",
    "isrc": "string",
    "label_name": "string",
    "license": "no-rights-reserved",
    "permalink": "string",
    "purchase_url": "string",
    "release": "string",
    "release_date": "string",
    "sharing": "public",
    "streamable": true,
    "tag_list": "string",
    "title": "string"
  }
}
```

<h3 id="updates-a-tracks-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|body|body|[TrackMetadataRequest](#schematrackmetadatarequest)|false|Track payload|
|» track|body|object|false|none|
|» » commentable|body|boolean|false|none|
|» » description|body|string|false|none|
|» » downloadable|body|boolean|false|none|
|» » embeddable_by|body|string|false|who can embed this track "all", "me", or "none"|
|» » genre|body|string|false|none|
|» » isrc|body|string|false|none|
|» » label_name|body|string|false|none|
|» » license|body|string|false|Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa|
|» » permalink|body|string|false|none|
|» » purchase_url|body|string|false|none|
|» » release|body|string|false|none|
|» » release_date|body|string|false|string, formatted as yyyy-mm-dd, representing release date|
|» » sharing|body|string|false|none|
|» » streamable|body|boolean|false|none|
|» » tag_list|body|string|false|The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.|
|» » title|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » embeddable_by|all|
|» » embeddable_by|me|
|» » embeddable_by|none|
|» » license|no-rights-reserved|
|» » license|all-rights-reserved|
|» » license|cc-by|
|» » license|cc-by-nc|
|» » license|cc-by-nd|
|» » license|cc-by-sa|
|» » license|cc-by-nc-nd|
|» » license|cc-by-nc-sa|
|» » sharing|public|
|» » sharing|private|

> Example responses

> 200 Response

```json
{
  "access": "playable",
  "artwork_url": "https://i1.sndcdn.com/artworks-large.jpg",
  "available_country_codes": null,
  "bpm": null,
  "comment_count": 4,
  "commentable": true,
  "created_at": "2019/01/15 15:40:49 +0000",
  "description": null,
  "download_count": 0,
  "download_url": "https://api.soundcloud.com/tracks/1234/download",
  "downloadable": false,
  "duration": 40000,
  "embeddable_by": "all",
  "favoritings_count": 271,
  "genre": "Rock",
  "id": 1234,
  "isrc": null,
  "key_signature": null,
  "kind": "track",
  "label_name": "some label",
  "license": "all-rights-reserved",
  "permalink_url": "https://soundcloud.com/userPermalink/trackPermalink",
  "playback_count": 8027,
  "purchase_title": null,
  "purchase_url": null,
  "release": null,
  "release_day": 22,
  "release_month": 8,
  "release_year": 2019,
  "reposts_count": 18,
  "secret_uri": null,
  "sharing": "public",
  "stream_url": "https://api.soundcloud.com/tracks/1234/stream",
  "streamable": true,
  "tag_list": "",
  "title": "Some title",
  "uri": "https://api.soundcloud.com/tracks/1234",
  "user": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "user_favorite": true,
  "user_playback_count": 1,
  "waveform_url": "https://wave.sndcdn.com/someString.png"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="updates-a-tracks-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Track](#schematrack)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Deletes a track.

> Code samples

```bash
curl https://example.com/tracks/308946187 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tracks/{track_id}`

<h3 id="deletes-a-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|

> Example responses

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="deletes-a-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Returns the comments posted on the track(track_id).

> Code samples

```bash
curl "https://example.com/tracks/308946187/comments?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tracks/{track_id}/comments`

<h3 id="returns-the-comments-posted-on-the-tracktrackid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/Comment/value"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-the-comments-posted-on-the-tracktrackid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="returns-the-comments-posted-on-the-tracktrackid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Comments](#schemacomments)|false|none|none|
|*oneOf*|[CommentsList](#schemacommentslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

## Returns the newly created comment on success

> Code samples

```bash
curl "https://example.com/tracks/308946187/comments?client_id=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "comment": {
      "body": "test comment",
      "timestamp": "string"
    }
  }'
```

`POST /tracks/{track_id}/comments`

> Body parameter

```json
{
  "comment": {
    "body": "test comment",
    "timestamp": "string"
  }
}
```

<h3 id="returns-the-newly-created-comment-on-success-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|body|body|object|true|Body of a comment<br>|
|» comment|body|object|false|none|
|» » body|body|string|true|Comment's content|
|» » timestamp|body|string \| number|false|Timestamp of a comment. String or float representation is supported|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "body": "comment body",
  "created_at": "2007/09/11 15:40:24 +0000",
  "id": 1234,
  "kind": "comment",
  "timestamp": 4960,
  "track_id": 123456,
  "uri": "https://api.soundcloud.com/comments/1234",
  "user": {
    "avatar_url": "https://i1.sndcdn.com/avatars-large.jpg",
    "followers_count": 138,
    "followings_count": 172,
    "id": 12345,
    "kind": "user",
    "last_modified": "2017/04/10 14:48:03 +0000",
    "permalink": "permalink",
    "permalink_url": "https://soundcloud.com/permalink",
    "public_favorites_count": 5,
    "reposts_count": 0,
    "uri": "https://api.soundcloud.com/users/12345",
    "username": "user name"
  },
  "user_id": 12345
}
```

> 422 Response

```json
{
  "code": 422,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 429 Response

```json
{
  "code": 429,
  "link": "https://developers.soundcloud.com/docs/api/rate-limits#errors",
  "message": "Detailed message of errors, when available",
  "spam_warning_urn": "soundcloud:spam-warnings:1"
}
```

<h3 id="returns-the-newly-created-comment-on-success-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Comment](#schemacomment)|
|422|Unprocessable Entity|Unprocessable Entity|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[TooManyRequests](#schematoomanyrequests)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of users who have favorited or liked the track.

> Code samples

```bash
curl "https://example.com/tracks/308946187/favoriters?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tracks/{track_id}/favoriters`

<h3 id="returns-a-list-of-users-who-have-favorited-or-liked-the-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/User/value"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-who-have-favorited-or-liked-the-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UsersList](#schemauserslist)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

## Returns all related tracks of track on SoundCloud.

> Code samples

```bash
curl "https://example.com/tracks/308946187/related?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tracks/{track_id}/related`

<h3 id="returns-all-related-tracks-of-track-on-soundcloud-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-all-related-tracks-of-track-on-soundcloud-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="returns-all-related-tracks-of-track-on-soundcloud-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

## Returns a collection of track's reposters.

> Code samples

```bash
curl "https://example.com/tracks/308946187/reposters?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tracks/{track_id}/reposters`

<h3 id="returns-a-collection-of-tracks-reposters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/UserOf/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-collection-of-tracks-reposters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MetaUsers](#schemametausers)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

## Returns a track's streamable URLs

> Code samples

```bash
curl "https://example.com/tracks/308946187/streams?client_id=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /tracks/{track_id}/streams`

<h3 id="returns-a-tracks-streamable-urls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|
|secret_token|query|string|false|A secret token to fetch private playlists/tracks|

> Example responses

> 200 Response

```json
{
  "hls_mp3_128_url": "https://cf-media.sndcdn.com/",
  "hls_opus_64_url": "https://cf-media.sndcdn.com/",
  "http_mp3_128_url": "https://cf-media.sndcdn.com/",
  "preview_mp3_128_url": "https://cf-media.sndcdn.com/"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-tracks-streamable-urls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Streams](#schemastreams)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ClientId
</aside>

<h1 id="soundcloud-public-api-specification-users">users</h1>

SoundCloud Users Endpoints.

## Returns a user.

> Code samples

```bash
curl "https://example.com/users/948745750?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}`

<h3 id="returns-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|

> Example responses

> 200 Response

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars.jpg",
  "city": "City",
  "country": "Country",
  "description": null,
  "discogs_name": null,
  "first_name": "First_name",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "Full Name",
  "id": 12345,
  "kind": "user",
  "last_modified": "2020/01/03 12:08:25 +0000",
  "last_name": "Last_name",
  "locale": "en",
  "myspace_name": null,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/permalink",
  "plan": "Free",
  "playlist_count": 3,
  "primary_email_confirmed": true,
  "private_playlists_count": 0,
  "private_tracks_count": 0,
  "public_favorites_count": 20,
  "quota": {
    "unlimited_upload_quota": false,
    "upload_seconds_left": 10800,
    "upload_seconds_used": 0
  },
  "reposts_count": 0,
  "subscriptions": [
    {
      "product": {
        "id": "some-id",
        "name": "some.name"
      }
    }
  ],
  "track_count": 0,
  "upload_seconds_left": 10800,
  "uri": "https://api.soundcloud.com/users/1234",
  "username": "some.user",
  "website": null,
  "website_title": null
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteUser](#schemacompleteuser)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user's comments.

> Code samples

```bash
curl "https://example.com/users/948745750/comments?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/comments`

<h3 id="returns-a-list-of-users-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|limit|query|integer|false|Number of results to return in the collection.|
|offset|query|integer|false|**Deprecated.** Offset of first result. Deprecated, use `linked_partitioning` instead.|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/examples/Comment/value"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CommentsList](#schemacommentslist)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)

> Code samples

```bash
curl "https://example.com/users/948745750/favorites?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/favorites`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="returns-a-list-of-users-favorited-or-liked-tracks-use-usersuseridlikestracks-instead-to-fetch-a-users-likes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|limit|query|integer|false|Number of results to return in the collection.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-favorited-or-liked-tracks-use-usersuseridlikestracks-instead-to-fetch-a-users-likes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-favorited-or-liked-tracks-use-usersuseridlikestracks-instead-to-fetch-a-users-likes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user’s followers.

> Code samples

```bash
curl "https://example.com/users/948745750/followers?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/followers`

Returns a list of users that follows (user_id).

<h3 id="returns-a-list-of-users-followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/User/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-followers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Users](#schemausers)|false|none|none|
|*oneOf*|[UsersList](#schemauserslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user’s followings.

> Code samples

```bash
curl "https://example.com/users/948745750/followings?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/followings`

Returns list of users that (user_id) follows.

<h3 id="returns-a-list-of-users-followings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/User/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-followings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-followings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Users](#schemausers)|false|none|none|
|*oneOf*|[UsersList](#schemauserslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a user's following. (use /users/{user_id} instead, to fetch the user details)

> Code samples

```bash
curl "https://example.com/users/948745750/followings/25219981?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/followings/{following_id}`

<aside class="warning">
This operation is deprecated
</aside>

Returns (following_id) that is followed by (user_id).

<h3 id="returns-a-users-following-use-usersuserid-instead-to-fetch-the-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|following_id|path|integer|true|SoundCloud User id to denote a Following of a user|

> Example responses

> 200 Response

```json
{
  "avatar_url": "https://i1.sndcdn.com/avatars.jpg",
  "city": "City",
  "country": "Country",
  "description": null,
  "discogs_name": null,
  "first_name": "First_name",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "Full Name",
  "id": 12345,
  "kind": "user",
  "last_modified": "2020/01/03 12:08:25 +0000",
  "last_name": "Last_name",
  "locale": "en",
  "myspace_name": null,
  "permalink": "permalink",
  "permalink_url": "https://soundcloud.com/permalink",
  "plan": "Free",
  "playlist_count": 3,
  "primary_email_confirmed": true,
  "private_playlists_count": 0,
  "private_tracks_count": 0,
  "public_favorites_count": 20,
  "quota": {
    "unlimited_upload_quota": false,
    "upload_seconds_left": 10800,
    "upload_seconds_used": 0
  },
  "reposts_count": 0,
  "subscriptions": [
    {
      "product": {
        "id": "some-id",
        "name": "some.name"
      }
    }
  ],
  "track_count": 0,
  "upload_seconds_left": 10800,
  "uri": "https://api.soundcloud.com/users/1234",
  "username": "some.user",
  "website": null,
  "website_title": null
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-users-following-use-usersuserid-instead-to-fetch-the-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteUser](#schemacompleteuser)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user's liked tracks.

> Code samples

```bash
curl "https://example.com/users/948745750/likes/tracks?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/likes/tracks`

<h3 id="returns-a-list-of-users-liked-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-liked-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-liked-tracks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user's playlists.

> Code samples

```bash
curl "https://example.com/users/948745750/playlists?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/playlists`

<h3 id="returns-a-list-of-users-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Playlist/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-playlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Playlists](#schemaplaylists)|false|none|none|
|*oneOf*|[PlaylistsArray](#schemaplaylistsarray)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns a list of user's tracks.

> Code samples

```bash
curl "https://example.com/users/948745750/tracks?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/tracks`

<h3 id="returns-a-list-of-users-tracks-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|access|query|[string]|false|Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.<br>|
|limit|query|integer|false|Number of results to return in the collection.|
|linked_partitioning|query|boolean|false|Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|

> Example responses

> 200 Response

```json
{
  "collection": {
    "$ref": "#/components/examples/Track/value"
  },
  "next_href": "https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-a-list-of-users-tracks-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="returns-a-list-of-users-tracks-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tracks](#schematracks)|false|none|none|
|*oneOf*|[TracksList](#schematrackslist)|false|none|**Deprecated.**|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

## Returns list of user's links added to their profile (website, facebook, instagram).

> Code samples

```bash
curl "https://example.com/users/948745750/web-profiles?client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{user_id}/web-profiles`

<h3 id="returns-list-of-users-links-added-to-their-profile-website-facebook-instagram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer|true|SoundCloud User id|
|limit|query|integer|false|Number of results to return in the collection.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1995/10/20 12:10:39 +0000",
    "id": 1234,
    "kind": "web-profile",
    "service": "facebook",
    "title": "my facebook",
    "url": "http://facebook.com",
    "username": "username"
  }
]
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="returns-list-of-users-links-added-to-their-profile-website-facebook-instagram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WebProfiles](#schemawebprofiles)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

<h1 id="soundcloud-public-api-specification-likes">likes</h1>

Liking Tracks & Playlists.

## Likes a playlist.

> Code samples

```bash
curl https://example.com/likes/playlists/1212781357 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /likes/playlists/{playlist_id}`

<h3 id="likes-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|

> Example responses

> 200 Response

```json
{
  "status": "200 - OK"
}
```

> 201 Response

```json
{
  "status": "201 - Created"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 429 Response

```json
{
  "code": 429,
  "link": "https://developers.soundcloud.com/docs/api/rate-limits#errors",
  "message": "Detailed message of errors, when available",
  "spam_warning_urn": "soundcloud:spam-warnings:1"
}
```

<h3 id="likes-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|201|Created|Created|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[TooManyRequests](#schematoomanyrequests)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Unlikes a playlist.

> Code samples

```bash
curl https://example.com/likes/playlists/1212781357 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /likes/playlists/{playlist_id}`

<h3 id="unlikes-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|

> Example responses

> 200 Response

```json
{
  "status": "200 - OK"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="unlikes-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Likes a track.

> Code samples

```bash
curl https://example.com/likes/tracks/1015448728 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /likes/tracks/{track_id}`

<h3 id="likes-a-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|

> Example responses

> 200 Response

```json
{
  "status": "200 - OK"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 429 Response

```json
{
  "code": 429,
  "link": "https://developers.soundcloud.com/docs/api/rate-limits#errors",
  "message": "Detailed message of errors, when available",
  "spam_warning_urn": "soundcloud:spam-warnings:1"
}
```

<h3 id="likes-a-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[TooManyRequests](#schematoomanyrequests)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Unlikes a track.

> Code samples

```bash
curl https://example.com/likes/tracks/1015448728 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /likes/tracks/{track_id}`

<h3 id="unlikes-a-track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|

> Example responses

> 200 Response

```json
{
  "status": "200 - OK"
}
```

> 400 Response

```json
{
  "code": 400,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="unlikes-a-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

<h1 id="soundcloud-public-api-specification-reposts">reposts</h1>

Reposting Tracks & Playlists.

## Reposts a playlist as the authenticated user

> Code samples

```bash
curl https://example.com/reposts/playlists/1205584273 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /reposts/playlists/{playlist_id}`

<h3 id="reposts-a-playlist-as-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|

> Example responses

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="reposts-a-playlist-as-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Removes a repost on a playlist as the authenticated user

> Code samples

```bash
curl https://example.com/reposts/playlists/1205584273 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /reposts/playlists/{playlist_id}`

<h3 id="removes-a-repost-on-a-playlist-as-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlist_id|path|integer|true|SoundCloud playlist id|

> Example responses

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="removes-a-repost-on-a-playlist-as-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Reposts a track as the authenticated user

> Code samples

```bash
curl https://example.com/reposts/tracks/1015448728 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /reposts/tracks/{track_id}`

<h3 id="reposts-a-track-as-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|

> Example responses

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="reposts-a-track-as-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

## Removes a repost on a track as the authenticated user

> Code samples

```bash
curl https://example.com/reposts/tracks/1015448728 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /reposts/tracks/{track_id}`

<h3 id="removes-a-repost-on-a-track-as-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|integer|true|SoundCloud Track id|

> Example responses

> 401 Response

```json
{
  "code": 401,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

> 404 Response

```json
{
  "code": 404,
  "link": "https://developers.soundcloud.com/docs/api/explorer/open-api",
  "message": "Detailed message of errors, when available"
}
```

<h3 id="removes-a-repost-on-a-track-as-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader
</aside>

<h1 id="soundcloud-public-api-specification-miscellaneous">miscellaneous</h1>

Miscellaneous Endpoints.

## Resolves soundcloud.com URLs to Resource URLs to use with the API.

> Code samples

```bash
curl "https://example.com/resolve?url=https%3A%2F%2Fsoundcloud.com%2Fuser-434241656&client_id=${API_KEY}" \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resolve`

<h3 id="resolves-soundcloudcom-urls-to-resource-urls-to-use-with-the-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|SoundCloud URL|

> Example responses

> 302 Response

```json
{
  "location": "string",
  "status": "string"
}
```

<h3 id="resolves-soundcloudcom-urls-to-resource-urls-to-use-with-the-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Found|[Found](#schemafound)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthHeader & ClientId
</aside>

# Schemas

<h2 id="tocS_Activities">Activities</h2>
<!-- backwards compatibility -->
<a id="schemaactivities"></a>
<a id="schema_Activities"></a>
<a id="tocSactivities"></a>
<a id="tocsactivities"></a>

```json
{
  "collection": [
    {
      "created_at": "string",
      "origin": {
        "access": "playable",
        "artwork_url": "string",
        "available_country_codes": "string",
        "bpm": 0,
        "comment_count": 0,
        "commentable": true,
        "created_at": "string",
        "description": "string",
        "download_count": 0,
        "download_url": "string",
        "downloadable": "string",
        "duration": 0,
        "embeddable_by": "string",
        "favoritings_count": 0,
        "genre": "string",
        "id": 0,
        "isrc": "string",
        "key_signature": "string",
        "kind": "string",
        "label_name": "string",
        "license": "string",
        "permalink_url": "string",
        "playback_count": 0,
        "purchase_title": "string",
        "purchase_url": "string",
        "release": "string",
        "release_day": 0,
        "release_month": 0,
        "release_year": 0,
        "reposts_count": 0,
        "secret_uri": "string",
        "sharing": "string",
        "stream_url": "string",
        "streamable": true,
        "tag_list": "string",
        "title": "string",
        "uri": "string",
        "user": {
          "avatar_url": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": 0,
          "kind": "string",
          "last_modified": "1970-01-01T00:00:00Z",
          "permalink": "string",
          "permalink_url": "string",
          "uri": "string",
          "username": "string"
        },
        "user_favorite": true,
        "user_playback_count": 0,
        "waveform_url": "string"
      },
      "type": "string"
    }
  ],
  "future_href": "string",
  "next_href": "string"
}
```

User's activities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[object]|false|none|none|
|future_href|string|false|none|none|
|next_href|string|false|none|none|

<h2 id="tocS_AuthorizationCode">AuthorizationCode</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationcode"></a>
<a id="schema_AuthorizationCode"></a>
<a id="tocSauthorizationcode"></a>
<a id="tocsauthorizationcode"></a>

```json
{
  "authorization_code": "string",
  "client_id": "string",
  "client_secret": "string",
  "grant_type": "authorization_code",
  "redirect_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization_code|string|false|none|Authorization code|
|client_id|string|false|none|Client ID|
|client_secret|string|false|none|Client secret|
|grant_type|string|false|none|none|
|redirect_uri|string|false|none|Redirect URI|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|authorization_code|
|grant_type|client_credentials|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "body": "string",
  "created_at": "string",
  "id": 0,
  "kind": "string",
  "timestamp": "string",
  "track_id": 0,
  "uri": "string",
  "user": {
    "avatar_url": "string",
    "followers_count": 0,
    "followings_count": 0,
    "id": 0,
    "kind": "string",
    "last_modified": "string",
    "permalink": "string",
    "permalink_url": "string",
    "reposts_count": 0,
    "uri": "string",
    "username": "string"
  },
  "user_id": 0
}
```

User's Comment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Comment body.|
|created_at|string|false|none|Created timestamp.|
|id|integer|false|none|Identifier.|
|kind|string|false|none|Kind (comment).|
|timestamp|string|false|none|Timestamp.|
|track_id|integer|false|none|Track's identifier.|
|uri|string|false|none|Comment's URL.|
|user|object|false|none|SoundCloud User object|
|user_id|integer|false|none|User's identifier.|

<h2 id="tocS_Comments">Comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_Comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
{
  "collection": [
    {
      "body": "string",
      "created_at": "string",
      "id": 0,
      "kind": "string",
      "timestamp": "string",
      "track_id": 0,
      "uri": "string",
      "user": {
        "avatar_url": "string",
        "followers_count": 0,
        "followings_count": 0,
        "id": 0,
        "kind": "string",
        "last_modified": "string",
        "permalink": "string",
        "permalink_url": "string",
        "reposts_count": 0,
        "uri": "string",
        "username": "string"
      },
      "user_id": 0
    }
  ],
  "next_href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[[Comment](#schemacomment)]|false|none|none|
|next_href|string \| null|false|none|none|

<h2 id="tocS_CommentsList">CommentsList</h2>
<!-- backwards compatibility -->
<a id="schemacommentslist"></a>
<a id="schema_CommentsList"></a>
<a id="tocScommentslist"></a>
<a id="tocscommentslist"></a>

```json
[
  {
    "body": "string",
    "created_at": "string",
    "id": 0,
    "kind": "string",
    "timestamp": "string",
    "track_id": 0,
    "uri": "string",
    "user": {
      "avatar_url": "string",
      "followers_count": 0,
      "followings_count": 0,
      "id": 0,
      "kind": "string",
      "last_modified": "string",
      "permalink": "string",
      "permalink_url": "string",
      "reposts_count": 0,
      "uri": "string",
      "username": "string"
    },
    "user_id": 0
  }
]
```

<h2 id="tocS_CompleteUser">CompleteUser</h2>
<!-- backwards compatibility -->
<a id="schemacompleteuser"></a>
<a id="schema_CompleteUser"></a>
<a id="tocScompleteuser"></a>
<a id="tocscompleteuser"></a>

```json
{
  "avatar_url": "string",
  "city": "string",
  "country": "string",
  "description": "string",
  "discogs_name": "string",
  "first_name": "string",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "string",
  "id": 0,
  "kind": "string",
  "last_modified": "string",
  "last_name": "string",
  "locale": "string",
  "myspace_name": "string",
  "permalink": "string",
  "permalink_url": "string",
  "plan": "string",
  "playlist_count": 0,
  "primary_email_confirmed": true,
  "private_playlists_count": 0,
  "private_tracks_count": 0,
  "public_favorites_count": 0,
  "quota": {
    "unlimited_upload_quota": true,
    "upload_seconds_used": 0
  },
  "reposts_count": 0,
  "subscriptions": [
    [
      null
    ]
  ],
  "track_count": 0,
  "uri": "string",
  "username": "string",
  "website": "string",
  "website_title": "string"
}
```

SoundCloud Complete User object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string|false|none|URL to a JPEG image.|
|city|string|false|none|city.|
|country|string|false|none|country.|
|description|string|false|none|description.|
|discogs_name|string|false|none|discogs name.|
|first_name|string|false|none|first name.|
|followers_count|integer|false|none|number of followers.|
|followings_count|integer|false|none|number of followed users.|
|full_name|string|false|none|first and last name.|
|id|integer|false|none|unique identifier|
|kind|string|false|none|kind of resource.|
|last_modified|string|false|none|last modified timestamp.|
|last_name|string|false|none|last name.|
|locale|string|false|none|locale.|
|myspace_name|string|false|none|**Deprecated.** myspace name|
|permalink|string|false|none|permalink of the resource.|
|permalink_url|string|false|none|URL to the SoundCloud.com page.|
|plan|string|false|none|subscription plan of the user.|
|playlist_count|integer|false|none|number of public playlists.|
|primary_email_confirmed|boolean|false|none|boolean if email is confirmed.|
|private_playlists_count|integer|false|none|number of private playlists.|
|private_tracks_count|integer|false|none|number of private tracks.|
|public_favorites_count|integer|false|none|number of favorited public tracks|
|quota|object|false|none|user's upload quota|
|reposts_count|integer|false|none|number of reposts from user|
|subscriptions|[[object]]|false|none|a list subscriptions associated with the user|
|track_count|integer|false|none|number of public tracks.|
|uri|string|false|none|API resource URL.|
|username|string|false|none|username|
|website|string|false|none|a URL to the website.|
|website_title|string|false|none|a custom title for the website.|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "created_at": "string",
  "display_name": "string",
  "id": 0,
  "kind": "string",
  "post_favorite": true,
  "post_publish": true,
  "service": "string",
  "type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|Created timestamp.|
|display_name|string|false|none|Full Name.|
|id|integer|false|none|Unique identifier|
|kind|string|false|none|Kind of resource.|
|post_favorite|boolean|false|none|**Deprecated.**|
|post_publish|boolean|false|none|**Deprecated.**|
|service|string|false|none|Service.|
|type|string|false|none|Type.|
|uri|string|false|none|The external link URI.|

<h2 id="tocS_Connections">Connections</h2>
<!-- backwards compatibility -->
<a id="schemaconnections"></a>
<a id="schema_Connections"></a>
<a id="tocSconnections"></a>
<a id="tocsconnections"></a>

```json
[
  {
    "created_at": "string",
    "display_name": "string",
    "id": 0,
    "kind": "string",
    "post_favorite": true,
    "post_publish": true,
    "service": "string",
    "type": "string",
    "uri": "string"
  }
]
```

<h2 id="tocS_CreateUpdatePlaylistRequest">CreateUpdatePlaylistRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateupdateplaylistrequest"></a>
<a id="schema_CreateUpdatePlaylistRequest"></a>
<a id="tocScreateupdateplaylistrequest"></a>
<a id="tocscreateupdateplaylistrequest"></a>

```json
{
  "playlist": {
    "description": "string",
    "sharing": "public",
    "title": "string",
    "tracks": [
      {
        "id": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playlist|object|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "error": "string",
  "errors": [
    null
  ],
  "link": "string",
  "message": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|error|string \| null|false|none|**Deprecated.**|
|errors|[object]|false|none|**Deprecated.**|
|link|string|false|none|none|
|message|string|false|none|none|
|status|string|false|none|**Deprecated.**|

<h2 id="tocS_Found">Found</h2>
<!-- backwards compatibility -->
<a id="schemafound"></a>
<a id="schema_Found"></a>
<a id="tocSfound"></a>
<a id="tocsfound"></a>

```json
{
  "location": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Location URL of the resource.|
|status|string|false|none|Status code.|

<h2 id="tocS_MetaUser">MetaUser</h2>
<!-- backwards compatibility -->
<a id="schemametauser"></a>
<a id="schema_MetaUser"></a>
<a id="tocSmetauser"></a>
<a id="tocsmetauser"></a>

```json
{
  "avatar_url": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "id": 0,
  "kind": "string",
  "last_modified": "1970-01-01T00:00:00Z",
  "permalink": "string",
  "permalink_url": "string",
  "uri": "string",
  "username": "string"
}
```

SoundCloud User object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string|false|none|URL to a JPEG image|
|created_at|string(date-time)|false|none|profile creation datetime|
|id|integer|false|none|unique identifier|
|kind|string|false|none|kind of resource|
|last_modified|string(date-time)|false|none|last modified datetime|
|permalink|string|false|none|permalink of the resource|
|permalink_url|string|false|none|URL to the SoundCloud.com page|
|uri|string|false|none|API resource URL|
|username|string|false|none|username|

<h2 id="tocS_MetaUsers">MetaUsers</h2>
<!-- backwards compatibility -->
<a id="schemametausers"></a>
<a id="schema_MetaUsers"></a>
<a id="tocSmetausers"></a>
<a id="tocsmetausers"></a>

```json
{
  "collection": [
    {
      "avatar_url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": 0,
      "kind": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "permalink": "string",
      "permalink_url": "string",
      "uri": "string",
      "username": "string"
    }
  ],
  "next_href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[[MetaUser](#schemametauser)]|false|none|none|
|next_href|string|false|none|none|

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "grant_type": "password",
  "password": "string",
  "redirect_uri": "string",
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Client ID|
|client_secret|string|false|none|Client secret|
|grant_type|string|false|none|none|
|password|string|false|none|User password|
|redirect_uri|string|false|none|Redirect URI|
|user_name|string|false|none|User name|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|password|

<h2 id="tocS_Playlist">Playlist</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist"></a>
<a id="schema_Playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>

```json
{
  "artwork_url": "string",
  "created_at": "string",
  "description": "string",
  "downloadable": true,
  "duration": 0,
  "ean": "string",
  "embeddable_by": "string",
  "genre": "string",
  "id": 0,
  "kind": "string",
  "label": {
    "avatar_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "id": 0,
    "kind": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "permalink": "string",
    "permalink_url": "string",
    "uri": "string",
    "username": "string"
  },
  "label_id": 0,
  "label_name": "string",
  "last_modified": "string",
  "license": "string",
  "likes_count": 0,
  "permalink": "string",
  "permalink_url": "string",
  "playlist_type": "string",
  "purchase_title": "string",
  "purchase_url": "string",
  "release": "string",
  "release_day": 0,
  "release_month": 0,
  "release_year": 0,
  "sharing": "string",
  "streamable": true,
  "tag_list": "string",
  "tags": "string",
  "title": "string",
  "track_count": 0,
  "tracks": [
    {
      "access": "playable",
      "artwork_url": "string",
      "available_country_codes": "string",
      "bpm": 0,
      "comment_count": 0,
      "commentable": true,
      "created_at": "string",
      "description": "string",
      "download_count": 0,
      "download_url": "string",
      "downloadable": "string",
      "duration": 0,
      "embeddable_by": "string",
      "favoritings_count": 0,
      "genre": "string",
      "id": 0,
      "isrc": "string",
      "key_signature": "string",
      "kind": "string",
      "label_name": "string",
      "license": "string",
      "permalink_url": "string",
      "playback_count": 0,
      "purchase_title": "string",
      "purchase_url": "string",
      "release": "string",
      "release_day": 0,
      "release_month": 0,
      "release_year": 0,
      "reposts_count": 0,
      "secret_uri": "string",
      "sharing": "string",
      "stream_url": "string",
      "streamable": true,
      "tag_list": "string",
      "title": "string",
      "uri": "string",
      "user": {
        "avatar_url": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": 0,
        "kind": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "permalink": "string",
        "permalink_url": "string",
        "uri": "string",
        "username": "string"
      },
      "user_favorite": true,
      "user_playback_count": 0,
      "waveform_url": "string"
    }
  ],
  "tracks_uri": "string",
  "type": "string",
  "uri": "string",
  "user": {
    "avatar_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "id": 0,
    "kind": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "permalink": "string",
    "permalink_url": "string",
    "uri": "string",
    "username": "string"
  },
  "user_id": 0
}
```

Soundcloud Playlist Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artwork_url|string|false|none|URL to a JPEG image.|
|created_at|string|false|none|Created timestamp.|
|description|string|false|none|Playlist description.|
|downloadable|boolean|false|none|is downloadable.|
|duration|integer|false|none|Playlist duration.|
|ean|string|false|none|European Article Number.|
|embeddable_by|string|false|none|Embeddable by.|
|genre|string|false|none|Playlist genre.|
|id|integer|false|none|Playlist identifier.|
|kind|string|false|none|Type of Soundcloud object (playlist).|
|label|[MetaUser](#schemametauser)|false|none|SoundCloud User object.|
|label_id|integer|false|none|Label user identifier.|
|label_name|string|false|none|Label name.|
|last_modified|string|false|none|Last modified timestamp.|
|license|string|false|none|License.|
|likes_count|integer|false|none|Count of playlist likes.|
|permalink|string|false|none|Playlist permalink.|
|permalink_url|string|false|none|Playlist permalink URL.|
|playlist_type|string|false|none|Type of playlist.|
|purchase_title|string|false|none|Purchase title.|
|purchase_url|string|false|none|Purchase URL.|
|release|string|false|none|Release.|
|release_day|integer|false|none|Day of release.|
|release_month|integer|false|none|Month of release.|
|release_year|integer|false|none|Year of release.|
|sharing|string|false|none|Type of sharing (private/public).|
|streamable|boolean|false|none|Is streamable.|
|tag_list|string|false|none|Tags.|
|tags|string \| null|false|none|Tags.|
|title|string|false|none|Playlist title.|
|track_count|integer|false|none|Count of tracks.|
|tracks|[[Track](#schematrack)]|false|none|List of tracks.|
|tracks_uri|string \| null|false|none|tracks URI.|
|type|string|false|none|Playlist type.|
|uri|string|false|none|Playlist URI.|
|user|[MetaUser](#schemametauser)|false|none|SoundCloud User object.|
|user_id|integer|false|none|User identifier.|

<h2 id="tocS_Playlists">Playlists</h2>
<!-- backwards compatibility -->
<a id="schemaplaylists"></a>
<a id="schema_Playlists"></a>
<a id="tocSplaylists"></a>
<a id="tocsplaylists"></a>

```json
{
  "collection": [
    {
      "artwork_url": "string",
      "created_at": "string",
      "description": "string",
      "downloadable": true,
      "duration": 0,
      "ean": "string",
      "embeddable_by": "string",
      "genre": "string",
      "id": 0,
      "kind": "string",
      "label": {
        "avatar_url": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": 0,
        "kind": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "permalink": "string",
        "permalink_url": "string",
        "uri": "string",
        "username": "string"
      },
      "label_id": 0,
      "label_name": "string",
      "last_modified": "string",
      "license": "string",
      "likes_count": 0,
      "permalink": "string",
      "permalink_url": "string",
      "playlist_type": "string",
      "purchase_title": "string",
      "purchase_url": "string",
      "release": "string",
      "release_day": 0,
      "release_month": 0,
      "release_year": 0,
      "sharing": "string",
      "streamable": true,
      "tag_list": "string",
      "tags": "string",
      "title": "string",
      "track_count": 0,
      "tracks": [
        {
          "access": "playable",
          "artwork_url": "string",
          "available_country_codes": "string",
          "bpm": 0,
          "comment_count": 0,
          "commentable": true,
          "created_at": "string",
          "description": "string",
          "download_count": 0,
          "download_url": "string",
          "downloadable": "string",
          "duration": 0,
          "embeddable_by": "string",
          "favoritings_count": 0,
          "genre": "string",
          "id": 0,
          "isrc": "string",
          "key_signature": "string",
          "kind": "string",
          "label_name": "string",
          "license": "string",
          "permalink_url": "string",
          "playback_count": 0,
          "purchase_title": "string",
          "purchase_url": "string",
          "release": "string",
          "release_day": 0,
          "release_month": 0,
          "release_year": 0,
          "reposts_count": 0,
          "secret_uri": "string",
          "sharing": "string",
          "stream_url": "string",
          "streamable": true,
          "tag_list": "string",
          "title": "string",
          "uri": "string",
          "user": {
            "avatar_url": "string",
            "created_at": "1970-01-01T00:00:00Z",
            "id": 0,
            "kind": "string",
            "last_modified": "1970-01-01T00:00:00Z",
            "permalink": "string",
            "permalink_url": "string",
            "uri": "string",
            "username": "string"
          },
          "user_favorite": true,
          "user_playback_count": 0,
          "waveform_url": "string"
        }
      ],
      "tracks_uri": "string",
      "type": "string",
      "uri": "string",
      "user": {
        "avatar_url": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": 0,
        "kind": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "permalink": "string",
        "permalink_url": "string",
        "uri": "string",
        "username": "string"
      },
      "user_id": 0
    }
  ],
  "next_href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[[Playlist](#schemaplaylist)]|false|none|none|
|next_href|string|false|none|none|

<h2 id="tocS_PlaylistsArray">PlaylistsArray</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistsarray"></a>
<a id="schema_PlaylistsArray"></a>
<a id="tocSplaylistsarray"></a>
<a id="tocsplaylistsarray"></a>

```json
[
  {
    "artwork_url": "string",
    "created_at": "string",
    "description": "string",
    "downloadable": true,
    "duration": 0,
    "ean": "string",
    "embeddable_by": "string",
    "genre": "string",
    "id": 0,
    "kind": "string",
    "label": {
      "avatar_url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": 0,
      "kind": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "permalink": "string",
      "permalink_url": "string",
      "uri": "string",
      "username": "string"
    },
    "label_id": 0,
    "label_name": "string",
    "last_modified": "string",
    "license": "string",
    "likes_count": 0,
    "permalink": "string",
    "permalink_url": "string",
    "playlist_type": "string",
    "purchase_title": "string",
    "purchase_url": "string",
    "release": "string",
    "release_day": 0,
    "release_month": 0,
    "release_year": 0,
    "sharing": "string",
    "streamable": true,
    "tag_list": "string",
    "tags": "string",
    "title": "string",
    "track_count": 0,
    "tracks": [
      {
        "access": "playable",
        "artwork_url": "string",
        "available_country_codes": "string",
        "bpm": 0,
        "comment_count": 0,
        "commentable": true,
        "created_at": "string",
        "description": "string",
        "download_count": 0,
        "download_url": "string",
        "downloadable": "string",
        "duration": 0,
        "embeddable_by": "string",
        "favoritings_count": 0,
        "genre": "string",
        "id": 0,
        "isrc": "string",
        "key_signature": "string",
        "kind": "string",
        "label_name": "string",
        "license": "string",
        "permalink_url": "string",
        "playback_count": 0,
        "purchase_title": "string",
        "purchase_url": "string",
        "release": "string",
        "release_day": 0,
        "release_month": 0,
        "release_year": 0,
        "reposts_count": 0,
        "secret_uri": "string",
        "sharing": "string",
        "stream_url": "string",
        "streamable": true,
        "tag_list": "string",
        "title": "string",
        "uri": "string",
        "user": {
          "avatar_url": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "id": 0,
          "kind": "string",
          "last_modified": "1970-01-01T00:00:00Z",
          "permalink": "string",
          "permalink_url": "string",
          "uri": "string",
          "username": "string"
        },
        "user_favorite": true,
        "user_playback_count": 0,
        "waveform_url": "string"
      }
    ],
    "tracks_uri": "string",
    "type": "string",
    "uri": "string",
    "user": {
      "avatar_url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": 0,
      "kind": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "permalink": "string",
      "permalink_url": "string",
      "uri": "string",
      "username": "string"
    },
    "user_id": 0
  }
]
```

<h2 id="tocS_RefreshToken">RefreshToken</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtoken"></a>
<a id="schema_RefreshToken"></a>
<a id="tocSrefreshtoken"></a>
<a id="tocsrefreshtoken"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "grant_type": "refresh_token",
  "redirect_uri": "string",
  "refresh_token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Client ID|
|client_secret|string|false|none|Client secret|
|grant_type|string|false|none|none|
|redirect_uri|string|false|none|Redirect URI|
|refresh_token|string|false|none|Refresh token|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|refresh_token|

<h2 id="tocS_Streams">Streams</h2>
<!-- backwards compatibility -->
<a id="schemastreams"></a>
<a id="schema_Streams"></a>
<a id="tocSstreams"></a>
<a id="tocsstreams"></a>

```json
{
  "hls_mp3_128_url": "string",
  "hls_opus_64_url": "string",
  "http_mp3_128_url": "string",
  "preview_mp3_128_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hls_mp3_128_url|string|false|none|none|
|hls_opus_64_url|string|false|none|none|
|http_mp3_128_url|string|false|none|none|
|preview_mp3_128_url|string|false|none|none|

<h2 id="tocS_TooManyRequests">TooManyRequests</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequests"></a>
<a id="schema_TooManyRequests"></a>
<a id="tocStoomanyrequests"></a>
<a id="tocstoomanyrequests"></a>

```json
{
  "code": 0,
  "error": "string",
  "errors": [
    null
  ],
  "link": "string",
  "message": "string",
  "status": "string",
  "spam_warning_urn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|error|string \| null|false|none|**Deprecated.**|
|errors|[object]|false|none|**Deprecated.**|
|link|string|false|none|none|
|message|string|false|none|none|
|status|string|false|none|**Deprecated.**|
|spam_warning_urn|string|false|none|none|

<h2 id="tocS_Track">Track</h2>
<!-- backwards compatibility -->
<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>

```json
{
  "access": "playable",
  "artwork_url": "string",
  "available_country_codes": "string",
  "bpm": 0,
  "comment_count": 0,
  "commentable": true,
  "created_at": "string",
  "description": "string",
  "download_count": 0,
  "download_url": "string",
  "downloadable": "string",
  "duration": 0,
  "embeddable_by": "string",
  "favoritings_count": 0,
  "genre": "string",
  "id": 0,
  "isrc": "string",
  "key_signature": "string",
  "kind": "string",
  "label_name": "string",
  "license": "string",
  "permalink_url": "string",
  "playback_count": 0,
  "purchase_title": "string",
  "purchase_url": "string",
  "release": "string",
  "release_day": 0,
  "release_month": 0,
  "release_year": 0,
  "reposts_count": 0,
  "secret_uri": "string",
  "sharing": "string",
  "stream_url": "string",
  "streamable": true,
  "tag_list": "string",
  "title": "string",
  "uri": "string",
  "user": {
    "avatar_url": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "id": 0,
    "kind": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "permalink": "string",
    "permalink_url": "string",
    "uri": "string",
    "username": "string"
  },
  "user_favorite": true,
  "user_playback_count": 0,
  "waveform_url": "string"
}
```

Soundcloud Track object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string \| null|false|none|Level of access the user (logged in or anonymous) has to the track.<br>  * `playable` - user is allowed to listen to a full track.<br>  * `preview` - user is allowed to preview a track, meaning a snippet is available<br>  * `blocked` - user can only see the metadata of a track, no streaming is possible<br>|
|artwork_url|string|false|none|URL to a JPEG image.|
|available_country_codes|string|false|none|List of countries where track is available.|
|bpm|integer|false|none|Tempo.|
|comment_count|integer|false|none|Number of comments.|
|commentable|boolean|false|none|Is commentable.|
|created_at|string|false|none|Created timestamp.|
|description|string|false|none|Track description.|
|download_count|integer|false|none|NUmber of downloads.|
|download_url|string|false|none|URL to download a track.|
|downloadable|string|false|none|Is downloadable.|
|duration|integer|false|none|Track duration.|
|embeddable_by|string|false|none|**Deprecated.** Embeddable by.|
|favoritings_count|integer|false|none|Number of favoritings.|
|genre|string|false|none|Genre|
|id|integer|false|none|Track identifier.|
|isrc|string|false|none|ISRC code.|
|key_signature|string|false|none|Key signature.|
|kind|string|false|none|Type of object (track).|
|label_name|string|false|none|Label user name.|
|license|string|false|none|License|
|permalink_url|string|false|none|Permalink URL.|
|playback_count|integer|false|none|Number of plays.|
|purchase_title|string|false|none|Purchase title.|
|purchase_url|string|false|none|Purchase URL.|
|release|string|false|none|Release.|
|release_day|integer|false|none|Day of release.|
|release_month|integer|false|none|Month of release.|
|release_year|integer|false|none|Year of release.|
|reposts_count|integer|false|none|Number of reposts.|
|secret_uri|string|false|none|Secret URL.|
|sharing|string|false|none|Type of sharing (public/private).|
|stream_url|string|false|none|URL to stream.|
|streamable|boolean|false|none|Is streamable.|
|tag_list|string|false|none|Tags.|
|title|string|false|none|Track title.|
|uri|string|false|none|Track URI.|
|user|[MetaUser](#schemametauser)|false|none|User who uploaded a track|
|user_favorite|boolean|false|none|Is user's favourite.|
|user_playback_count|integer|false|none|Number of plays by a user.|
|waveform_url|string|false|none|Waveform URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|playable|
|access|preview|
|access|blocked|
|access|null|

<h2 id="tocS_TrackDataRequest">TrackDataRequest</h2>
<!-- backwards compatibility -->
<a id="schematrackdatarequest"></a>
<a id="schema_TrackDataRequest"></a>
<a id="tocStrackdatarequest"></a>
<a id="tocstrackdatarequest"></a>

```json
{
  "track[artwork_data]": "string",
  "track[asset_data]": "string",
  "track[commentable]": true,
  "track[description]": "string",
  "track[downloadable]": true,
  "track[embeddable_by]": "all",
  "track[genre]": "string",
  "track[isrc]": "string",
  "track[label_name]": "string",
  "track[license]": "no-rights-reserved",
  "track[permalink]": "string",
  "track[purchase_url]": "string",
  "track[release]": "string",
  "track[release_date]": "string",
  "track[sharing]": "public",
  "track[streamable]": true,
  "track[tag_list]": "string",
  "track[title]": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|track[artwork_data]|string(binary)|false|none|none|
|track[asset_data]|string(binary)|false|none|none|
|track[commentable]|boolean|false|none|none|
|track[description]|string|false|none|none|
|track[downloadable]|boolean|false|none|none|
|track[embeddable_by]|string|false|none|who can embed this track "all", "me", or "none"|
|track[genre]|string|false|none|none|
|track[isrc]|string|false|none|none|
|track[label_name]|string|false|none|none|
|track[license]|string|false|none|Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa|
|track[permalink]|string|false|none|none|
|track[purchase_url]|string|false|none|none|
|track[release]|string|false|none|none|
|track[release_date]|string|false|none|string, formatted as yyyy-mm-dd, representing release date|
|track[sharing]|string|false|none|none|
|track[streamable]|boolean|false|none|none|
|track[tag_list]|string|false|none|The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.|
|track[title]|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|track[embeddable_by]|all|
|track[embeddable_by]|me|
|track[embeddable_by]|none|
|track[license]|no-rights-reserved|
|track[license]|all-rights-reserved|
|track[license]|cc-by|
|track[license]|cc-by-nc|
|track[license]|cc-by-nd|
|track[license]|cc-by-sa|
|track[license]|cc-by-nc-nd|
|track[license]|cc-by-nc-sa|
|track[sharing]|public|
|track[sharing]|private|

<h2 id="tocS_TrackMetadataRequest">TrackMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schematrackmetadatarequest"></a>
<a id="schema_TrackMetadataRequest"></a>
<a id="tocStrackmetadatarequest"></a>
<a id="tocstrackmetadatarequest"></a>

```json
{
  "track": {
    "commentable": true,
    "description": "string",
    "downloadable": true,
    "embeddable_by": "all",
    "genre": "string",
    "isrc": "string",
    "label_name": "string",
    "license": "no-rights-reserved",
    "permalink": "string",
    "purchase_url": "string",
    "release": "string",
    "release_date": "string",
    "sharing": "public",
    "streamable": true,
    "tag_list": "string",
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|track|object|false|none|none|

<h2 id="tocS_Tracks">Tracks</h2>
<!-- backwards compatibility -->
<a id="schematracks"></a>
<a id="schema_Tracks"></a>
<a id="tocStracks"></a>
<a id="tocstracks"></a>

```json
{
  "collection": [
    {
      "access": "playable",
      "artwork_url": "string",
      "available_country_codes": "string",
      "bpm": 0,
      "comment_count": 0,
      "commentable": true,
      "created_at": "string",
      "description": "string",
      "download_count": 0,
      "download_url": "string",
      "downloadable": "string",
      "duration": 0,
      "embeddable_by": "string",
      "favoritings_count": 0,
      "genre": "string",
      "id": 0,
      "isrc": "string",
      "key_signature": "string",
      "kind": "string",
      "label_name": "string",
      "license": "string",
      "permalink_url": "string",
      "playback_count": 0,
      "purchase_title": "string",
      "purchase_url": "string",
      "release": "string",
      "release_day": 0,
      "release_month": 0,
      "release_year": 0,
      "reposts_count": 0,
      "secret_uri": "string",
      "sharing": "string",
      "stream_url": "string",
      "streamable": true,
      "tag_list": "string",
      "title": "string",
      "uri": "string",
      "user": {
        "avatar_url": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "id": 0,
        "kind": "string",
        "last_modified": "1970-01-01T00:00:00Z",
        "permalink": "string",
        "permalink_url": "string",
        "uri": "string",
        "username": "string"
      },
      "user_favorite": true,
      "user_playback_count": 0,
      "waveform_url": "string"
    }
  ],
  "next_href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[[Track](#schematrack)]|false|none|none|
|next_href|string|false|none|none|

<h2 id="tocS_TracksList">TracksList</h2>
<!-- backwards compatibility -->
<a id="schematrackslist"></a>
<a id="schema_TracksList"></a>
<a id="tocStrackslist"></a>
<a id="tocstrackslist"></a>

```json
[
  {
    "access": "playable",
    "artwork_url": "string",
    "available_country_codes": "string",
    "bpm": 0,
    "comment_count": 0,
    "commentable": true,
    "created_at": "string",
    "description": "string",
    "download_count": 0,
    "download_url": "string",
    "downloadable": "string",
    "duration": 0,
    "embeddable_by": "string",
    "favoritings_count": 0,
    "genre": "string",
    "id": 0,
    "isrc": "string",
    "key_signature": "string",
    "kind": "string",
    "label_name": "string",
    "license": "string",
    "permalink_url": "string",
    "playback_count": 0,
    "purchase_title": "string",
    "purchase_url": "string",
    "release": "string",
    "release_day": 0,
    "release_month": 0,
    "release_year": 0,
    "reposts_count": 0,
    "secret_uri": "string",
    "sharing": "string",
    "stream_url": "string",
    "streamable": true,
    "tag_list": "string",
    "title": "string",
    "uri": "string",
    "user": {
      "avatar_url": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "id": 0,
      "kind": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "permalink": "string",
      "permalink_url": "string",
      "uri": "string",
      "username": "string"
    },
    "user_favorite": true,
    "user_playback_count": 0,
    "waveform_url": "string"
  }
]
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "avatar_url": "string",
  "city": "string",
  "country": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "discogs_name": "string",
  "first_name": "string",
  "followers_count": 0,
  "followings_count": 0,
  "full_name": "string",
  "id": 0,
  "kind": "string",
  "last_modified": "1970-01-01T00:00:00Z",
  "last_name": "string",
  "myspace_name": "string",
  "permalink": "string",
  "permalink_url": "string",
  "plan": "string",
  "playlist_count": 0,
  "public_favorites_count": 0,
  "reposts_count": 0,
  "subscriptions": [
    [
      null
    ]
  ],
  "track_count": 0,
  "uri": "string",
  "username": "string",
  "website": "string",
  "website_title": "string"
}
```

SoundCloud User object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar_url|string|false|none|URL to a JPEG image|
|city|string|false|none|city|
|country|string|false|none|country|
|created_at|string(date-time)|false|none|profile creation datetime|
|description|string|false|none|description|
|discogs_name|string|false|none|discogs name|
|first_name|string|false|none|first name|
|followers_count|integer|false|none|number of followers|
|followings_count|integer|false|none|number of followed users|
|full_name|string|false|none|first and last name|
|id|integer|false|none|unique identifier|
|kind|string|false|none|kind of resource|
|last_modified|string(date-time)|false|none|last modified datetime|
|last_name|string|false|none|last name|
|myspace_name|string|false|none|**Deprecated.** myspace name|
|permalink|string|false|none|permalink of the resource|
|permalink_url|string|false|none|URL to the SoundCloud.com page|
|plan|string|false|none|subscription plan of the user|
|playlist_count|integer|false|none|number of public playlists|
|public_favorites_count|integer|false|none|number of favorited public tracks|
|reposts_count|integer|false|none|number of reposts from user|
|subscriptions|[[object]]|false|none|**Deprecated.** a list subscriptions associated with the user|
|track_count|integer|false|none|number of public tracks|
|uri|string|false|none|API resource URL|
|username|string|false|none|username|
|website|string|false|none|a URL to the website|
|website_title|string|false|none|a custom title for the website|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "collection": [
    {
      "avatar_url": "string",
      "city": "string",
      "country": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "discogs_name": "string",
      "first_name": "string",
      "followers_count": 0,
      "followings_count": 0,
      "full_name": "string",
      "id": 0,
      "kind": "string",
      "last_modified": "1970-01-01T00:00:00Z",
      "last_name": "string",
      "myspace_name": "string",
      "permalink": "string",
      "permalink_url": "string",
      "plan": "string",
      "playlist_count": 0,
      "public_favorites_count": 0,
      "reposts_count": 0,
      "subscriptions": [
        [
          null
        ]
      ],
      "track_count": 0,
      "uri": "string",
      "username": "string",
      "website": "string",
      "website_title": "string"
    }
  ],
  "next_href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[[User](#schemauser)]|false|none|none|
|next_href|string|false|none|none|

<h2 id="tocS_UsersList">UsersList</h2>
<!-- backwards compatibility -->
<a id="schemauserslist"></a>
<a id="schema_UsersList"></a>
<a id="tocSuserslist"></a>
<a id="tocsuserslist"></a>

```json
[
  {
    "avatar_url": "string",
    "city": "string",
    "country": "string",
    "description": "string",
    "discogs_name": "string",
    "first_name": "string",
    "followers_count": 0,
    "followings_count": 0,
    "full_name": "string",
    "id": 0,
    "kind": "string",
    "last_modified": "1970-01-01T00:00:00Z",
    "last_name": "string",
    "myspace_name": "string",
    "permalink": "string",
    "permalink_url": "string",
    "plan": "string",
    "playlist_count": 0,
    "public_favorites_count": 0,
    "reposts_count": 0,
    "subscriptions": [
      [
        null
      ]
    ],
    "track_count": 0,
    "uri": "string",
    "username": "string",
    "website": "string",
    "website_title": "string"
  }
]
```

<h2 id="tocS_WebProfiles">WebProfiles</h2>
<!-- backwards compatibility -->
<a id="schemawebprofiles"></a>
<a id="schema_WebProfiles"></a>
<a id="tocSwebprofiles"></a>
<a id="tocswebprofiles"></a>

```json
[
  {
    "created_at": "string",
    "id": 0,
    "kind": "string",
    "service": "string",
    "title": "string",
    "url": "string",
    "username": "string"
  }
]
```

User's links added to their profile
