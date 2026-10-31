<h1 id="apivideo">api.video v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

Base URLs:

* <a href="https://ws.api.video">https://ws.api.video</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="apivideo-account">Account</h1>

## Show account

<a id="opIdGET_account"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated. Authenticate and get a token, then you can use the bearer token here to retrieve details about your account.

> Example responses

> 200 Response

```json
{
  "environment": "production",
  "features": [
    "app.dynamic_metadata",
    "app.event_log",
    "player.white_label",
    "stats.player_events",
    "transcode.mp4_support"
  ],
  "quota": {
    "quotaRemaining": 54,
    "quotaTotal": 60,
    "quotaUsed": 6
  }
}
```

> 404 Response

```json
{
  "name": "",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="show-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[account](#schemaaccount)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-analytics">Analytics</h1>

## List live stream player sessions

<a id="opIdGET_analytics-live-streams-liveStreamId"></a>

> Code samples

```bash
curl https://example.com/analytics/live-streams/vi4k0jvEUuaTdRAEjQ4Jfrgz \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analytics/live-streams/{liveStreamId}`

<h3 id="list-live-stream-player-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveStreamId|path|string|true|The unique identifier for the live stream you want to retrieve analytics for.|
|period|query|string(period)|false|Period must have one of the following formats: <br>- For a day : "2018-01-01",<br>- For a week: "2018-W01", <br>- For a month: "2018-01"<br>- For a year: "2018"<br>For a range period: <br>-  Date range: "2018-01-01/2018-01-15"<br>|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "client": {
        "name": "Firefox",
        "type": "browser",
        "version": "61.0"
      },
      "device": {
        "model": "unknown",
        "type": "desktop",
        "vendor": "unknown"
      },
      "location": {
        "city": "Paris",
        "country": "France"
      },
      "os": {
        "name": "unknown",
        "shortname": "unknown",
        "version": "unknown"
      },
      "referrer": {
        "medium": "unknown",
        "searchTerm": "unknown",
        "source": "unknown",
        "url": "unknown"
      },
      "session": {
        "endedAt": "2018-09-11T14:47:22.186+00",
        "loadedAt": "2018-09-11T13:04:37.89+00",
        "sessionId": "ps4zRWVOv2If2vzKJLMr3jQo"
      }
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 1,
    "itemsTotal": 1,
    "links": [
      {
        "rel": "self",
        "uri": "/analytics/sessions/ps4zRWVOv2If2vzKJLMr3jQo?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/analytics/sessions/ps4zRWVOv2If2vzKJLMr3jQo?currentPage=1&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/analytics/sessions/ps4zRWVOv2If2vzKJLMr3jQo?currentPage=1&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

> 404 Response

```json
{
  "name": "liveStreamId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="list-live-stream-player-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[raw-statistics-list-live-stream-analytics-response](#schemaraw-statistics-list-live-stream-analytics-response)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List player session events

<a id="opIdGET_analytics-sessions-sessionId-events"></a>

> Code samples

```bash
curl https://example.com/analytics/sessions/psEmFwGQUAXR2lFHj5nDOpy/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analytics/sessions/{sessionId}/events`

Useful to track and measure video's engagement.

<h3 id="list-player-session-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|A unique identifier you can use to reference and track a session with.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "at": 0,
      "emittedAt": "2020-09-15T09:47:42+00:00",
      "type": "ready"
    },
    {
      "at": 0,
      "emittedAt": "2020-09-15T21:35:57+00:00",
      "type": "play"
    },
    {
      "at": 7,
      "emittedAt": "2020-09-15T21:36:05+00:00",
      "type": "pause"
    },
    {
      "at": 21,
      "emittedAt": "2020-09-15T21:36:19+00:00",
      "type": "resume"
    },
    {
      "emittedAt": "2020-09-15T21:36:19+00:00",
      "from": 7,
      "to": 21,
      "type": "seek.forward"
    },
    {
      "at": 30,
      "emittedAt": "2020-09-15T21:36:28+00:00",
      "type": "end"
    },
    {
      "at": 0,
      "emittedAt": "2020-09-15T21:36:29+00:00",
      "type": "play"
    },
    {
      "emittedAt": "2020-09-15T21:36:29+00:00",
      "from": 30,
      "to": 0,
      "type": "seek.backward"
    },
    {
      "at": 21,
      "emittedAt": "2020-09-15T21:36:29+00:00",
      "type": "pause"
    },
    {
      "at": 21,
      "emittedAt": "2020-09-15T21:36:30+00:00",
      "type": "resume"
    },
    {
      "emittedAt": "2020-09-15T21:36:30+00:00",
      "from": 0,
      "to": 21,
      "type": "seek.forward"
    },
    {
      "at": 20,
      "emittedAt": "2020-09-15T21:36:33+00:00",
      "type": "pause"
    },
    {
      "at": 20,
      "emittedAt": "2020-09-15T21:36:33+00:00",
      "type": "resume"
    },
    {
      "emittedAt": "2020-09-15T21:36:33+00:00",
      "from": 24,
      "to": 20,
      "type": "seek.backward"
    },
    {
      "at": 17,
      "emittedAt": "2020-09-15T21:36:39+00:00",
      "type": "pause"
    },
    {
      "at": 17,
      "emittedAt": "2020-09-15T21:36:39+00:00",
      "type": "resume"
    },
    {
      "emittedAt": "2020-09-15T21:36:39+00:00",
      "from": 17,
      "to": 17,
      "type": "seek.forward"
    },
    {
      "at": 19,
      "emittedAt": "2020-09-15T21:36:41+00:00",
      "type": "pause"
    },
    {
      "at": 0,
      "emittedAt": "2020-09-17T09:20:47+00:00",
      "type": "ready"
    },
    {
      "at": 0,
      "emittedAt": "2020-09-17T09:41:01+00:00",
      "type": "ready"
    },
    {
      "at": 0,
      "emittedAt": "2020-09-17T09:41:08+00:00",
      "type": "ready"
    },
    {
      "at": 0,
      "emittedAt": "2020-09-17T09:41:10+00:00",
      "type": "play"
    },
    {
      "at": 1,
      "emittedAt": "2020-09-17T09:41:12+00:00",
      "type": "pause"
    },
    {
      "at": 1,
      "emittedAt": "2020-09-17T09:41:13+00:00",
      "type": "resume"
    },
    {
      "at": 3,
      "emittedAt": "2020-09-17T09:41:15+00:00",
      "type": "pause"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 25,
    "itemsTotal": 30,
    "links": [
      {
        "rel": "self",
        "uri": "/analytics/sessions/ps5ltuhfsTOeh6bP03Tq5OWc/events?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/analytics/sessions/ps5ltuhfsTOeh6bP03Tq5OWc/events?currentPage=1&pageSize=25"
      },
      {
        "rel": "next",
        "uri": "/analytics/sessions/ps5ltuhfsTOeh6bP03Tq5OWc/events?currentPage=2&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/analytics/sessions/ps5ltuhfsTOeh6bP03Tq5OWc/events?currentPage=2&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 2
  }
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="list-player-session-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[raw-statistics-list-player-session-events-response](#schemaraw-statistics-list-player-session-events-response)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List video player sessions

<a id="opIdGET_analytics-videos-videoId"></a>

> Code samples

```bash
curl https://example.com/analytics/videos/vi4k0jvEUuaTdRAEjQ4Prklg \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /analytics/videos/{videoId}`

Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).

<h3 id="list-video-player-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to retrieve session information for.|
|period|query|string(period)|false|Period must have one of the following formats: <br>- For a day : 2018-01-01,<br>- For a week: 2018-W01, <br>- For a month: 2018-01<br>- For a year: 2018<br>For a range period: <br>-  Date range: 2018-01-01/2018-01-15<br>|
|metadata|query|[string]|false|Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "client": {
        "name": "Firefox",
        "type": "browser",
        "version": "67.0"
      },
      "device": {
        "model": "unknown",
        "type": "desktop",
        "vendor": "Dell"
      },
      "location": {
        "city": "Paris",
        "country": "France"
      },
      "os": {
        "name": "Microsoft Windows",
        "shortname": "W10",
        "version": "Windows10"
      },
      "referrer": {
        "medium": "organic",
        "searchTerm": "video encoding hosting and delivery",
        "source": "https://google.com",
        "url": "https://api.video"
      },
      "session": {
        "endedAt": "2019-06-24T11:49:19.243+00",
        "loadedAt": "2019-06-24T11:45:01.109+00",
        "sessionId": "psEmFwGQUAXR2lFHj5nDOpy"
      }
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 1,
    "itemsTotal": 1,
    "links": [
      {
        "rel": "self",
        "uri": "/analytics/sessions/psEmFwGQUAXR2lFHj5nDOpy?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/analytics/sessions/psEmFwGQUAXR2lFHj5nDOpy?currentPage=1&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/analytics/sessions/psEmFwGQUAXR2lFHj5nDOpy?currentPage=1&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="list-video-player-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[raw-statistics-list-sessions-response](#schemaraw-statistics-list-sessions-response)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-authentication">Authentication</h1>

## Authenticate

<a id="opIdPOST_auth-api-key"></a>

> Code samples

```bash
curl https://example.com/auth/api-key \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apiKey": "9VxMaPgsaFg7EBqmuspSzF7"
  }'
```

`POST /auth/api-key`

To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.
All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)

> Body parameter

```json
{
  "apiKey": "9VxMaPgsaFg7EBqmuspSzF7"
}
```

<h3 id="authenticate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[authenticate-payload](#schemaauthenticate-payload)|false|none|
|» apiKey|body|string|true|Your account API key. You can use your sandbox API key, or you can use your production API key.|

> Example responses

> 200 Response

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUyZWM4NWUyMjFkODZjOWI0NDQ5NzBhMjQwMzUyOWQ4MDQyNGQ3ZmJjYjFlYWM2MjVlM2VkMjI2YWRlNTcxMDY2NDUyZDc0NjdhN2E4NjI0In0.eyJhdWQiOiJsaWJjYXN0IiwianRpIjoiNTJlYzg1ZTIyMWQ4NmM5YjQ0NDk3MGEyNDAzNTI5ZDgwNDI0ZDdmYmNiMWVhYzYyNWUzZWQyMjZhZGU1NzEwNjY0NTJkNzQ2N2E3YTg2MjQiLCJpYXQiOjE1MjUyNzYxNDcsIm5iZiI6MTUyNTI3NjE0NywiZXhwIjoxNTI1Mjc5NzQ3LCJzdWIiOiJ1c01vbml0b3IiLCJzY29wZXMiOlsibW9uaXRvci5saWJjYXN0LmNvbSJdLCJjb250ZXh0Ijp7InVzZXIiOiJ1c01vbml0b3IiLCJwcm9qZWN0IjoicHJNb25pdG9yIiwibWVtYmVyIjoibWVNb25pdG9yIn19.rUvishDNyJLNlI4W5VmguNecm5KD2uZgPkKJQbaqw-cJbSrVxkSbiKYtk_E3cz3WT7-IS2yFTsYN3uIo5Rbit8_HftweyEp2bdBRI8yjR6oZZ1sNJJXswISN1i2kk4r-aaxu7Xxf_LtsjOMUj_YZsvcc2nqBXPKjHbJCJryx3DDJaIcymOqao7nhQaCCQyrQooAXNTYs4E9fWN1dC_x2O-zok5TuG-xhEW-umwxfSUMWNgSTkz38ACceQ0PCJSgB3jqjDH4MwC7B3ppEPZuK5E6JhKeyRlalswRyYq3UQPnVeMTam7YQHsuTgbehF6WySW8i44o7V_MCe9hjPdp-WA",
  "expires_in": 3600,
  "refresh_token": "def50200a28d88fb9aaa921be78eeb5604b071101a334899a7d5fc7492cf8ea752962ddc8961fe5c126101d4ecacd980396eb2fd494995b812dffcb98256c4277f790d1f658fc2d2e34f350740544e5232d69d68d34c648271d706c5e7049adac0b1832d0fdf71809715cc7e97fa63f65966deadb501a55ff469b0fd23a637cb6acbe9d9b8594a17f09efc2efeed82984764a0065d5e29c950c7b081a61ba2aaa192be3085c400ee37eac50fa9320ce2cfe8916c8165418d23e9f91b6a5c8515e1d74ee193a5a1ca01954fbff27361c20184240be2359e0afbed0bf1c762cf872450b5e8b5d4704f4fd9583e4470adc98409dd42965709712806bd9019378a72eea0b4912ce684ffd833db5806ab84174f905db2a75380071d004615c944bb8f8c4045cce7234c2be9a2330522cf7f067b8e58f57cffb6edb4b7ef91313e12bcde47e5e76ceee7fa52990132288f345d33ed917ae4fd54b7284f8964d898e97e1ee3bc4157f75d7fee63976e4be66ac1ec32ef74afa533f0eb593523f226cbec57d196ac8962",
  "token_type": "Bearer"
}
```

> 400 Response

```json
{
  "name": "",
  "status": 400,
  "title": "The user credentials were incorrect.",
  "type": "https://docs.api.video/docs/authenticationinvalid_credentials"
}
```

<h3 id="authenticate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[access-token](#schemaaccess-token)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="success">
This operation does not require authentication
</aside>

## Refresh token

<a id="opIdPOST_auth-refresh"></a>

> Code samples

```bash
curl https://example.com/auth/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "refreshToken": "def502005346d9cc2bd79a7793ab5bdabfefcaabfbb8c253f14733f1262077e1a3f38c4751d6d20f590c3784e531a82adc11f05fc1949aa46d5575aaa99cb84b9334ba66ac773576b5d7a418937ae337de62811d086dd42ad1164b12f87d67be6ffea18f2d50be9b95697b21c4d3c4372849bdb2287259cb80541570e913691a08b2fa33c85885930de15cebea627fc09f0255562ab3d39d87d4ff8fc02b00e252afcd480421dec7de9d1411176bcf669c527762e22294b453bc9ea06e9fa8ba5b873feb2ee14ce0a6a6ddd4b78c580631e210e9b9387265dc2bec9478a66a09dcdce1c40d2f856689e9d81742c9628a0b87b359e0b218ea1f07427eef89f999e47af89792f598e05847bd008fddc32ee63f4a601ffb4cd2ad08977f1c854ec358238322c918f05aa5a41f8a171dee497218408abc8283473f6112aeed7310815416a0fa36c63667e0ed014fa40b8992891bf58bae400d901c01450101c88f4978938ad138adc19cfe5698d60fd82cb27c586f6a8f70f4393c7c9e579df8739d46d249fb76d7"
  }'
```

`POST /auth/refresh`

Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token. 


> Body parameter

```json
{
  "refreshToken": "def502005346d9cc2bd79a7793ab5bdabfefcaabfbb8c253f14733f1262077e1a3f38c4751d6d20f590c3784e531a82adc11f05fc1949aa46d5575aaa99cb84b9334ba66ac773576b5d7a418937ae337de62811d086dd42ad1164b12f87d67be6ffea18f2d50be9b95697b21c4d3c4372849bdb2287259cb80541570e913691a08b2fa33c85885930de15cebea627fc09f0255562ab3d39d87d4ff8fc02b00e252afcd480421dec7de9d1411176bcf669c527762e22294b453bc9ea06e9fa8ba5b873feb2ee14ce0a6a6ddd4b78c580631e210e9b9387265dc2bec9478a66a09dcdce1c40d2f856689e9d81742c9628a0b87b359e0b218ea1f07427eef89f999e47af89792f598e05847bd008fddc32ee63f4a601ffb4cd2ad08977f1c854ec358238322c918f05aa5a41f8a171dee497218408abc8283473f6112aeed7310815416a0fa36c63667e0ed014fa40b8992891bf58bae400d901c01450101c88f4978938ad138adc19cfe5698d60fd82cb27c586f6a8f70f4393c7c9e579df8739d46d249fb76d7"
}
```

<h3 id="refresh-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[refresh-token-payload](#schemarefresh-token-payload)|false|none|
|» refreshToken|body|string|true|The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it's the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token.<br>|

> Example responses

> 200 Response

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUyZWM4NWUyMjFkODZjOWI0NDQ5NzBhMjQwMzUyOWQ4MDQyNGQ3ZmJjYjFlYWM2MjVlM2VkMjI2YWRlNTcxMDY2NDUyZDc0NjdhN2E4NjI0In0.eyJhdWQiOiJsaWJjYXN0IiwianRpIjoiNTJlYzg1ZTIyMWQ4NmM5YjQ0NDk3MGEyNDAzNTI5ZDgwNDI0ZDdmYmNiMWVhYzYyNWUzZWQyMjZhZGU1NzEwNjY0NTJkNzQ2N2E3YTg2MjQiLCJpYXQiOjE1MjUyNzYxNDcsIm5iZiI6MTUyNTI3NjE0NywiZXhwIjoxNTI1Mjc5NzQ3LCJzdWIiOiJ1c01vbml0b3IiLCJzY29wZXMiOlsibW9uaXRvci5saWJjYXN0LmNvbSJdLCJjb250ZXh0Ijp7InVzZXIiOiJ1c01vbml0b3IiLCJwcm9qZWN0IjoicHJNb25pdG9yIiwibWVtYmVyIjoibWVNb25pdG9yIn19.rUvishDNyJLNlI4W5VmguNecm5KD2uZgPkKJQbaqw-cJbSrVxkSbiKYtk_E3cz3WT7-IS2yFTsYN3uIo5Rbit8_HftweyEp2bdBRI8yjR6oZZ1sNJJXswISN1i2kk4r-aaxu7Xxf_LtsjOMUj_YZsvcc2nqBXPKjHbJCJryx3DDJaIcymOqao7nhQaCCQyrQooAXNTYs4E9fWN1dC_x2O-zok5TuG-xhEW-umwxfSUMWNgSTkz38ACceQ0PCJSgB3jqjDH4MwC7B3ppEPZuK5E6JhKeyRlalswRyYq3UQPnVeMTam7YQHsuTgbehF6WySW8i44o7V_MCe9hjPdp-WA",
  "expires_in": 3600,
  "refresh_token": "def50200a28d88fb9aaa921be78eeb5604b071101a334899a7d5fc7492cf8ea752962ddc8961fe5c126101d4ecacd980396eb2fd494995b812dffcb98256c4277f790d1f658fc2d2e34f350740544e5232d69d68d34c648271d706c5e7049adac0b1832d0fdf71809715cc7e97fa63f65966deadb501a55ff469b0fd23a637cb6acbe9d9b8594a17f09efc2efeed82984764a0065d5e29c950c7b081a61ba2aaa192be3085c400ee37eac50fa9320ce2cfe8916c8165418d23e9f91b6a5c8515e1d74ee193a5a1ca01954fbff27361c20184240be2359e0afbed0bf1c762cf872450b5e8b5d4704f4fd9583e4470adc98409dd42965709712806bd9019378a72eea0b4912ce684ffd833db5806ab84174f905db2a75380071d004615c944bb8f8c4045cce7234c2be9a2330522cf7f067b8e58f57cffb6edb4b7ef91313e12bcde47e5e76ceee7fa52990132288f345d33ed917ae4fd54b7284f8964d898e97e1ee3bc4157f75d7fee63976e4be66ac1ec32ef74afa533f0eb593523f226cbec57d196ac8962",
  "token_type": "Bearer"
}
```

> 400 Response

```json
{
  "name": "",
  "status": 400,
  "title": "The user credentials were incorrect.",
  "type": "https://docs.api.video/docs/authenticationinvalid_credentials"
}
```

<h3 id="refresh-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[access-token](#schemaaccess-token)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="apivideo-live">Live</h1>

## List all live streams

<a id="opIdGET_live-streams"></a>

> Code samples

```bash
curl https://example.com/live-streams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /live-streams`

With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.

<h3 id="list-all-live-streams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|streamKey|query|string|false|The unique stream key that allows you to stream videos.|
|name|query|string|false|You can filter live streams by their name or a part of their name.|
|sortBy|query|string|false|Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format.|
|sortOrder|query|string|false|Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "assets": {
        "hls": "https://live.api.video/li400mYKSgQ6xs7taUeSaEKr.m3u8",
        "iframe": "<iframe src=\"https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
        "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
        "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
      },
      "broadcasting": false,
      "createdAt": "2020-01-31T10:17:47+00:00",
      "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
      "name": "Live Stream From the browser",
      "public": true,
      "record": true,
      "streamKey": "30087931-229e-42cf-b5f9-e91bcc1f7332",
      "updatedAt": "2020-03-09T13:19:43+00:00"
    },
    {
      "assets": {
        "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
        "iframe": "<iframe src=\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
        "player": "https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5",
        "thumbnail": "https://cdn.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5/thumbnail.jpg"
      },
      "broadcasting": false,
      "createdAt": "2020-07-29T10:45:35+00:00",
      "liveStreamId": "li4pqNqGUkhKfWcBGpZVLRY5",
      "name": "Live From New York",
      "public": true,
      "record": true,
      "streamKey": "cc1b4df0-d1c5-4064-a8f9-9f0368385135",
      "updatedAt": "2020-07-29T10:45:35+00:00"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 19,
    "itemsTotal": 19,
    "links": [
      {
        "rel": "self",
        "uri": "/live-streams?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/live-streams?currentPage=1&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/live-streams?currentPage=1&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

<h3 id="list-all-live-streams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[live-stream-list-response](#schemalive-stream-list-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create live stream

<a id="opIdPOST_live-streams"></a>

> Code samples

```bash
curl https://example.com/live-streams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Test live",
    "playerId": "pl4f4ferf5erfr5zed4fsdd",
    "record": true
  }'
```

`POST /live-streams`

A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey}
Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).

> Body parameter

```json
{
  "name": "Test live",
  "playerId": "pl4f4ferf5erfr5zed4fsdd",
  "record": true
}
```

<h3 id="create-live-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[live-stream-create-payload](#schemalive-stream-create-payload)|false|none|
|» name|body|string|true|Add a name for your live stream here.|
|» playerId|body|string|false|The unique identifier for the player.|
|» public|body|boolean|false|BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.|
|» record|body|boolean|false|Whether you are recording or not. True for record, false for not record.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
    "iframe": "<iframe src=\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "player": "https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5",
    "thumbnail": "https://cdn.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5/thumbnail.jpg"
  },
  "broadcasting": false,
  "createdAt": "2020-07-29T10:45:35+00:00",
  "liveStreamId": "li4pqNqGUkhKfWcBGpZVLRY5",
  "name": "Live From New York",
  "public": true,
  "record": true,
  "streamKey": "cc1b4df0-d1c5-4064-a8f9-9f0368385135",
  "updatedAt": "2020-07-29T10:45:35+00:00"
}
```

> 400 Response

```json
{
  "name": "string",
  "problems": [
    {}
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-live-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[live-stream](#schemalive-stream)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show live stream

<a id="opIdGET_live-streams-liveStreamId"></a>

> Code samples

```bash
curl https://example.com/live-streams/li400mYKSgQ6xs7taUeSaEKr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /live-streams/{liveStreamId}`

Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).

<h3 id="show-live-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveStreamId|path|string|true|The unique ID for the live stream you want to watch.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://live.api.video/li400mYKSgQ6xs7taUeSaEKr.m3u8",
    "iframe": "<iframe src=\"https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
    "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
  },
  "broadcasting": false,
  "createdAt": "2020-01-31T10:17:47+00:00",
  "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
  "name": "Live Stream From the browser",
  "public": true,
  "record": true,
  "streamKey": "30087931-229e-42cf-b5f9-e91bcc1f7332",
  "updatedAt": "2020-03-09T13:19:43+00:00"
}
```

<h3 id="show-live-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[live-stream](#schemalive-stream)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a live stream

<a id="opIdDELETE_live-streams-liveStreamId"></a>

> Code samples

```bash
curl https://example.com/live-streams/li400mYKSgQ6xs7taUeSaEKr \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /live-streams/{liveStreamId}`

<h3 id="delete-a-live-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveStreamId|path|string|true|The unique ID for the live stream that you want to remove.|

<h3 id="delete-a-live-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a live stream

<a id="opIdPATCH_live-streams-liveStreamId"></a>

> Code samples

```bash
curl https://example.com/live-streams/li400mYKSgQ6xs7taUeSaEKr \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Live Stream Video",
    "playerId": "pl45KFKdlddgk654dspkze",
    "public": true,
    "record": true
  }'
```

`PATCH /live-streams/{liveStreamId}`

Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.

> Body parameter

```json
{
  "name": "My Live Stream Video",
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": true,
  "record": true
}
```

<h3 id="update-a-live-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveStreamId|path|string|true|The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.|
|body|body|[live-stream-update-payload](#schemalive-stream-update-payload)|false|none|
|» name|body|string|false|The name you want to use for your live stream.|
|» playerId|body|string|false|The unique ID for the player associated with a live stream that you want to update.|
|» public|body|boolean|false|BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.|
|» record|body|boolean|false|Use this to indicate whether you want the recording on or off. On is true, off is false.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://live.api.video/li400mYKSgQ6xs7taUeSaEKr.m3u8",
    "iframe": "<iframe src=\"https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
    "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
  },
  "broadcasting": false,
  "createdAt": "2020-01-31T10:17:47+00:00",
  "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
  "name": "Live Stream From the browser",
  "public": true,
  "record": true,
  "streamKey": "30087931-229e-42cf-b5f9-e91bcc1f7332",
  "updatedAt": "2020-03-09T13:19:43+00:00"
}
```

> 400 Response

```json
{
  "name": "string",
  "problems": [
    {}
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-live-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[live-stream](#schemalive-stream)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload a thumbnail

<a id="opIdPOST_live-streams-liveStreamId-thumbnail"></a>

> Code samples

```bash
curl https://example.com/live-streams/vi4k0jvEUuaTdRAEjQ4Jfrgz/thumbnail \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /live-streams/{liveStreamId}/thumbnail`

Upload an image to use as a backdrop for your livestream. Tutorials that [update live stream thumbnails](https://api.video/blog/endpoints/live-upload-a-thumbnail).

> Body parameter

```yaml
file: string
```

<h3 id="upload-a-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveStreamId|path|string|true|The unique ID for the live stream you want to upload.|
|body|body|[live-stream-thumbnail-upload-payload](#schemalive-stream-thumbnail-upload-payload)|false|none|
|» file|body|string(binary)|true|The image to be added as a thumbnail.|

> Example responses

> 201 Response

```json
{
  "assets": {
    "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
    "iframe": "<iframe src=\\\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\\\" width=\\\"100%\\\" height=\\\"100%\\\" frameborder=\\\"0\\\" scrolling=\\\"no\\\" allowfullscreen=\\\"\\\"></iframe>",
    "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
    "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
  },
  "broadcasting": true,
  "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
  "name": "My Live Stream",
  "playerId": "pl45d5vFFGrfdsdsd156dGhh",
  "public": true,
  "record": true,
  "streamKey": "cc1b4df0-d1c5-4064-a8f9-9f0368385135"
}
```

> 400 Response

```json
{
  "name": "file",
  "status": 400,
  "title": "Only [jpeg, jpg, JPG, JPEG] extensions are supported.",
  "type": "https://docs.api.video/docs/fileextension"
}
```

> 404 Response

```json
{
  "name": "liveStreamId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="upload-a-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[live-stream](#schemalive-stream)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a thumbnail

<a id="opIdDELETE_live-streams-liveStreamId-thumbnail"></a>

> Code samples

```bash
curl https://example.com/live-streams/li400mYKSgQ6xs7taUeSaEKr/thumbnail \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /live-streams/{liveStreamId}/thumbnail`

Send the unique identifier for a live stream to delete it from the system.

<h3 id="delete-a-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liveStreamId|path|string|true|The unique identifier for the live stream you want to delete. |

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
    "iframe": "<iframe src=\\\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\\\" width=\\\"100%\\\" height=\\\"100%\\\" frameborder=\\\"0\\\" scrolling=\\\"no\\\" allowfullscreen=\\\"\\\"></iframe>",
    "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
    "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
  },
  "broadcasting": true,
  "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
  "name": "My Live Stream",
  "playerId": "pl45d5vFFGrfdsdsd156dGhh",
  "public": true,
  "record": true,
  "streamKey": "cc1b4df0-d1c5-4064-a8f9-9f0368385135"
}
```

> 404 Response

```json
{
  "name": "liveStreamId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="delete-a-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[live-stream](#schemalive-stream)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-players">Players</h1>

## List all players

<a id="opIdGET_players"></a>

> Code samples

```bash
curl https://example.com/players \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /players`

Retrieve a list of all the players you created, as well as details about each one.
Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).

<h3 id="list-all-players-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sortBy|query|string|false|createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.|
|sortOrder|query|string|false|Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|createdAt|
|sortBy|updatedAt|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "backgroundBottom": "rgba(94, 95, 89, 1)",
      "backgroundText": "rgba(255, 255, 255, .95)",
      "backgroundTop": "rgba(72, 4, 45, 1)",
      "createdAt": "2020-01-13T10:09:17+00:00",
      "enableApi": false,
      "enableControls": false,
      "forceAutoplay": false,
      "forceLoop": false,
      "hideTitle": false,
      "link": "rgba(255, 0, 0, .95)",
      "linkActive": "rgba(255, 0, 0, .75)",
      "linkHover": "rgba(255, 255, 255, .75)",
      "playerId": "pl4fgtjy4tjyKDK545DRdfg",
      "shapeAspect": "flat",
      "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
      "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
      "shapeMargin": 10,
      "shapeRadius": 3,
      "text": "rgba(255, 255, 255, .95)",
      "trackBackground": "rgba(0, 0, 0, 0)",
      "trackPlayed": "rgba(255, 255, 255, .95)",
      "trackUnplayed": "rgba(255, 255, 255, .1)",
      "updatedAt": "2020-01-13T10:09:17+00:00"
    },
    {
      "backgroundBottom": "rgba(94, 95, 89, 1)",
      "backgroundText": "rgba(255, 255, 255, .95)",
      "backgroundTop": "rgba(72, 4, 45, 1)",
      "createdAt": "2020-01-13T10:09:17+00:00",
      "enableApi": true,
      "enableControls": true,
      "forceAutoplay": true,
      "forceLoop": false,
      "hideTitle": false,
      "link": "rgba(255, 0, 0, .95)",
      "linkActive": "rgba(255, 0, 0, .75)",
      "linkHover": "rgba(255, 255, 255, .75)",
      "playerId": "pl54fgtjy4tjyKDK45DRdfg",
      "shapeAspect": "flat",
      "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
      "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
      "shapeMargin": 10,
      "shapeRadius": 3,
      "text": "rgba(255, 255, 255, .95)",
      "trackBackground": "rgba(0, 0, 0, 0)",
      "trackPlayed": "rgba(255, 255, 255, .95)",
      "trackUnplayed": "rgba(255, 255, 255, .1)",
      "updatedAt": "2020-01-13T10:09:17+00:00"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 4,
    "itemsTotal": 4,
    "links": [
      {
        "rel": "self",
        "uri": "https://ws.api.video/players?currentPage=1"
      },
      {
        "rel": "first",
        "uri": "https://ws.api.video/players?currentPage=1"
      },
      {
        "rel": "last",
        "uri": "https://ws.api.video/players?currentPage=1"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

> 400 Response

```json
{
  "name": "page",
  "problems": [
    {
      "name": "page",
      "range": {
        "min": 1
      },
      "title": "This parameter is out of the allowed range of values."
    },
    {
      "name": "pageSize",
      "range": {
        "max": 100,
        "min": 10
      },
      "title": "This parameter is out of the allowed range of values."
    }
  ],
  "range": {
    "min": 1
  },
  "status": 400,
  "title": "This parameter is out of the allowed range of values."
}
```

<h3 id="list-all-players-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[players-list-response](#schemaplayers-list-response)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a player

<a id="opIdPOST_players"></a>

> Code samples

```bash
curl https://example.com/players \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assets": {
      "link": "https://api.video",
      "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
    },
    "backgroundBottom": "rgba(94, 95, 89, 1)",
    "backgroundText": "rgba(255, 255, 255, .95)",
    "backgroundTop": "rgba(72, 4, 45, 1)",
    "enableApi": true,
    "enableControls": true,
    "forceAutoplay": false,
    "forceLoop": false,
    "hideTitle": false,
    "language": "en",
    "link": "rgba(255, 0, 0, .95)",
    "linkActive": "rgba(255, 0, 0, .75)",
    "linkHover": "rgba(255, 255, 255, .75)",
    "shapeAspect": "flat",
    "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
    "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
    "shapeMargin": 10,
    "shapeRadius": 3,
    "text": "rgba(255, 255, 255, .95)",
    "trackBackground": "rgba(0, 0, 0, 0)",
    "trackPlayed": "rgba(255, 255, 255, .95)",
    "trackUnplayed": "rgba(255, 255, 255, .1)"
  }'
```

`POST /players`

Create a player for your video, and customise it.

> Body parameter

```json
{
  "assets": {
    "link": "https://api.video",
    "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeMargin": 10,
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)"
}
```

<h3 id="create-a-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[playerCreationPayload](#schemaplayercreationpayload)|true|none|
|» backgroundBottom|body|string|false|RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)|
|» backgroundText|body|string|false|RGBA color for title text. Default: rgba(255, 255, 255, 1)|
|» backgroundTop|body|string|false|RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)|
|» enableApi|body|boolean|false|enable/disable player SDK access. Default: true|
|» enableControls|body|boolean|false|enable/disable player controls. Default: true|
|» forceAutoplay|body|boolean|false|enable/disable player autoplay. Default: false|
|» forceLoop|body|boolean|false|enable/disable looping. Default: false|
|» hideTitle|body|boolean|false|enable/disable title. Default: false|
|» link|body|string|false|RGBA color for all controls. Default: rgba(255, 255, 255, 1)|
|» linkHover|body|string|false|RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)|
|» text|body|string|false|RGBA color for timer text. Default: rgba(255, 255, 255, 1)|
|» trackBackground|body|string|false|RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)|
|» trackPlayed|body|string|false|RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)|
|» trackUnplayed|body|string|false|RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)|

> Example responses

> 201 Response

```json
{
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "createdAt": "2020-01-13T10:09:17+00:00",
  "enableApi": false,
  "enableControls": false,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "playerId": "pl45d5vFFGrfdsdsd156dGhh",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)",
  "updatedAt": "2020-01-13T10:09:17+00:00"
}
```

<h3 id="create-a-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[player](#schemaplayer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show a player

<a id="opIdGET_players-playerId"></a>

> Code samples

```bash
curl https://example.com/players/pl45d5vFFGrfdsdsd156dGhh \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /players/{playerId}`

Use a player ID to retrieve details about the player and display it for viewers.

<h3 id="show-a-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|The unique identifier for the player you want to retrieve. |

> Example responses

> 200 Response

```json
{
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "createdAt": "2020-01-13T10:09:17+00:00",
  "enableApi": false,
  "enableControls": false,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "playerId": "pl45d5vFFGrfdsdsd156dGhh",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)",
  "updatedAt": "2020-01-13T11:12:14+00:00"
}
```

> 404 Response

```json
{
  "name": "playerId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="show-a-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[player](#schemaplayer)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a player

<a id="opIdDELETE_players-playerId"></a>

> Code samples

```bash
curl https://example.com/players/pl45d5vFFGrfdsdsd156dGhh \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /players/{playerId}`

Delete a player if you no longer need it. You can delete any player that you have the player ID for.

<h3 id="delete-a-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|The unique identifier for the player you want to delete.|

> Example responses

> 404 Response

```json
{
  "name": "playerId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="delete-a-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a player

<a id="opIdPATCH_players-playerId"></a>

> Code samples

```bash
curl https://example.com/players/pl45d5vFFGrfdsdsd156dGhh \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assets": {
      "link": "https://api.video",
      "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
    },
    "backgroundBottom": "rgba(94, 95, 89, 1)",
    "backgroundText": "rgba(255, 255, 255, .95)",
    "backgroundTop": "rgba(72, 4, 45, 1)",
    "enableApi": true,
    "enableControls": true,
    "forceAutoplay": false,
    "forceLoop": false,
    "hideTitle": false,
    "language": "en",
    "link": "rgba(255, 0, 0, .95)",
    "linkActive": "rgba(255, 0, 0, .75)",
    "linkHover": "rgba(255, 255, 255, .75)",
    "shapeAspect": "flat",
    "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
    "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
    "shapeMargin": 10,
    "shapeRadius": 3,
    "text": "rgba(255, 255, 255, .95)",
    "trackBackground": "rgba(0, 0, 0, 0)",
    "trackPlayed": "rgba(255, 255, 255, .95)",
    "trackUnplayed": "rgba(255, 255, 255, .1)"
  }'
```

`PATCH /players/{playerId}`

Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.

> Body parameter

```json
{
  "assets": {
    "link": "https://api.video",
    "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeMargin": 10,
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)"
}
```

<h3 id="update-a-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|The unique identifier for the player.|
|body|body|[playerUpdatePayload](#schemaplayerupdatepayload)|true|none|
|» backgroundBottom|body|string|false|RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)|
|» backgroundText|body|string|false|RGBA color for title text. Default: rgba(255, 255, 255, 1)|
|» backgroundTop|body|string|false|RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)|
|» enableApi|body|boolean|false|enable/disable player SDK access. Default: true|
|» enableControls|body|boolean|false|enable/disable player controls. Default: true|
|» forceAutoplay|body|boolean|false|enable/disable player autoplay. Default: false|
|» forceLoop|body|boolean|false|enable/disable looping. Default: false|
|» hideTitle|body|boolean|false|enable/disable title. Default: false|
|» link|body|string|false|RGBA color for all controls. Default: rgba(255, 255, 255, 1)|
|» linkHover|body|string|false|RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)|
|» text|body|string|false|RGBA color for timer text. Default: rgba(255, 255, 255, 1)|
|» trackBackground|body|string|false|RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)|
|» trackPlayed|body|string|false|RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)|
|» trackUnplayed|body|string|false|RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)|

> Example responses

> 200 Response

```json
{
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "createdAt": "2020-01-13T10:09:17+00:00",
  "enableApi": false,
  "enableControls": false,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "playerId": "pl45d5vFFGrfdsdsd156dGhh",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)",
  "updatedAt": "2020-01-13T11:12:14+00:00"
}
```

> 404 Response

```json
{
  "name": "playerId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="update-a-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[player](#schemaplayer)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload a logo

<a id="opIdPOST_players-playerId-logo"></a>

> Code samples

```bash
curl https://example.com/players/pl14Db6oMJRH6SRVoOwORacK/logo \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file' \
  -F 'link=path/to/my/logo/mylogo.jpg'
```

`POST /players/{playerId}/logo`

The uploaded image maximum size should be 200x100 and its weight should be 200KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.

> Body parameter

```yaml
file: mylogo.jpg
link: path/to/my/logo/mylogo.jpg
```

<h3 id="upload-a-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|The unique identifier for the player.|
|body|body|[players-upload-logo-payload](#schemaplayers-upload-logo-payload)|false|none|
|» file|body|string(binary)|true|The name of the file you want to use for your logo.|
|» link|body|string(string)|true|The path to the file you want to upload and use as a logo.|

> Example responses

> 201 Response

```json
{
  "assets": {
    "link": "path/to/my/logo/mylogo.jpg",
    "logo": "mylogo.jpg"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "string",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "string",
  "shapeBackgroundBottom": "string",
  "shapeBackgroundTop": "string",
  "shapeMargin": 0,
  "shapeRadius": 0,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)",
  "createdAt": "2020-01-31T10:17:47+00:00",
  "playerId": "pl45KFKdlddgk654dspkze",
  "updatedAt": "2020-01-31T10:18:47+00:00"
}
```

> 400 Response

```json
{
  "name": "file",
  "status": 400,
  "title": "Only ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'] extensions are supported.",
  "type": "https://docs.api.video/docs/fileextension"
}
```

> 404 Response

```json
{
  "name": "playerId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="upload-a-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[player](#schemaplayer)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete logo

<a id="opIdDELETE_players-playerId-logo"></a>

> Code samples

```bash
curl https://example.com/players/pl14Db6oMJRH6SRVoOwORacK/logo \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /players/{playerId}/logo`

<h3 id="delete-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playerId|path|string|true|The unique identifier for the player.|

> Example responses

> 204 Response

```json
{}
```

> 404 Response

```json
{
  "name": "playerId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="delete-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|Inline|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-videos---delegated-upload">Videos - Delegated upload</h1>

## Upload with an upload token

<a id="opIdPOST_upload"></a>

> Code samples

```bash
curl 'https://example.com/upload?token=to1tcmSFHeYY5KzyhOqVKMKb' \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=@/path/to/file' \
  -F 'videoId=string'
```

`POST /upload`

When given a token, anyone can upload a file to the URI `https://ws.api.video/upload?token=<tokenId>`.

Example with cURL:

```curl
$ curl  --request POST --url 'https://ws.api.video/upload?token=toXXX'
 --header 'content-type: multipart/form-data'
 -F file=@video.mp4
```

Or in an HTML form, with a little JavaScript to convert the form into JSON:
```html
<!--form for user interaction-->
<form name="videoUploadForm" >
  <label for=video>Video:</label>
  <input type=file name=source/><br/>
  <input value="Submit" type="submit">
</form>
<div></div>
<!--JS takes the form data 
    uses FormData to turn the response into JSON.
    then uses POST to upload the video file.
    Update the token parameter in the url to your upload token.
    -->
<script>
   var form = document.forms.namedItem("videoUploadForm");	
   form.addEventListener('submit', function(ev) {
	 ev.preventDefault();
     var oOutput = document.querySelector("div"),
         oData = new FormData(form);
     var oReq = new XMLHttpRequest();
	 
     oReq.open("POST", "https://ws.api.video/upload?token=toXXX", true);
     oReq.send(oData);
	 oReq.onload = function(oEvent) {
       if (oReq.status ==201) {
         oOutput.innerHTML = "Your video is uploaded!<br/>"  + oReq.response;
       } else {
         oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
       }
     };
   }, false);	
</script>
```


### Dealing with large files

We have created a <a href='https://api.video/blog/tutorials/uploading-large-files-with-javascript'>tutorial</a> to walk through the steps required.

> Body parameter

```yaml
file: path/to/video/video.mp4
videoId: string
```

<h3 id="upload-with-an-upload-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The unique identifier for the token you want to use to upload a video.|
|Content-Range|header|string|false|Content-Range represents the range of bytes that will be returned as a result of the request. Byte ranges are inclusive, meaning that bytes 0-999 represents the first 1000 bytes in a file or object.|
|body|body|[token-upload-payload](#schematoken-upload-payload)|false|none|
|» file|body|string(binary)|true|The path to the video you want to upload.|
|» videoId|body|string|false|The video id returned by the first call to this endpoint in a large video upload scenario.|

> Example responses

> 201 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "publishedAt": "4665-07-14T23:36:18.598Z",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 400 Response

```json
{
  "name": "string",
  "problems": [
    {}
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="upload-with-an-upload-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[video](#schemavideo)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="success">
This operation does not require authentication
</aside>

## List all active upload tokens.

<a id="opIdGET_upload-tokens"></a>

> Code samples

```bash
curl https://example.com/upload-tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /upload-tokens`

A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens.
Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).

<h3 id="list-all-active-upload-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sortBy|query|string|false|Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.|
|sortOrder|query|string|false|Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|createdAt|
|sortBy|ttl|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "2020-12-02T10:26:46+00:00",
      "expiresAt": "2020-12-02T11:26:46+00:00",
      "token": "to37YfoPDRR2pcDKa6LsUE0M",
      "ttl": 3600
    },
    {
      "createdAt": "2020-12-02T10:26:28+00:00",
      "expiresAt": null,
      "token": "to1W3ZS9PdUBZWzzTEZr1B79",
      "ttl": 0
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 2,
    "itemsTotal": 2,
    "links": [
      {
        "rel": "self",
        "uri": "/upload-tokens?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/upload-tokens?currentPage=1&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/upload-tokens?currentPage=1&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

<h3 id="list-all-active-upload-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[token-list-response](#schematoken-list-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Generate an upload token

<a id="opIdPOST_upload-tokens"></a>

> Code samples

```bash
curl https://example.com/upload-tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ttl": 3600
  }'
```

`POST /upload-tokens`

Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).

> Body parameter

```json
{
  "ttl": 3600
}
```

<h3 id="generate-an-upload-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[token-create-payload](#schematoken-create-payload)|false|none|
|» ttl|body|integer|false|Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2020-12-02T10:13:19+00:00",
  "expiresAt": "2020-12-02T11:13:19+00:00",
  "token": "to1tcmSFHeYY5KzyhOqVKMKb",
  "ttl": 3600
}
```

> 400 Response

```json
{
  "name": "string",
  "problems": [
    {}
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="generate-an-upload-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[upload-token](#schemaupload-token)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show upload token

<a id="opIdGET_upload-tokens-uploadToken"></a>

> Code samples

```bash
curl https://example.com/upload-tokens/to1tcmSFHeYY5KzyhOqVKMKb \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /upload-tokens/{uploadToken}`

You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.

<h3 id="show-upload-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uploadToken|path|string|true|The unique identifier for the token you want information about.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2020-12-02T10:13:19+00:00",
  "expiresAt": null,
  "token": "to1tcmSFHeYY5KzyhOqVKMKb",
  "ttl": 0
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="show-upload-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[upload-token](#schemaupload-token)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete an upload token

<a id="opIdDELETE_upload-tokens-uploadToken"></a>

> Code samples

```bash
curl https://example.com/upload-tokens/to1tcmSFHeYY5KzyhOqVKMKb \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /upload-tokens/{uploadToken}`

Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.

<h3 id="delete-an-upload-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uploadToken|path|string|true|The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.|

> Example responses

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-an-upload-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-videos">Videos</h1>

## List all videos

<a id="opIdLIST-videos"></a>

> Code samples

```bash
curl https://example.com/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos`

Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.  We have [several tutorials](https://api.video/blog/endpoints/video-list) that demonstrate this endpoint.

<h3 id="list-all-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.|
|tags|query|[string]|false|A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.|
|metadata|query|[string]|false|Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.|
|description|query|string|false|If you described a video with a term or sentence, you can add it here to return videos containing this string.|
|liveStreamId|query|string|false|If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here.|
|sortBy|query|string|false|Allowed: publishedAt, title. You can search by the time videos were published at, or by title.|
|sortOrder|query|string|false|Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "assets": {
        "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
        "iframe": "<iframe src=\"//embed.api.video/c188ed58-3403-46a2-b91b-44603d10b2c9?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
        "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
        "player": "https://embed.api.video/c188ed58-3403-46a2-b91b-44603d10b2c9?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
        "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
      },
      "description": "An amazing video explaining the string theory",
      "metadata": [
        {
          "key": "Author",
          "value": "John Doe"
        },
        {
          "key": "Format",
          "value": "Tutorial"
        }
      ],
      "mp4Support": true,
      "panoramic": false,
      "playerId": "pl45KFKdlddgk654dspkze",
      "public": false,
      "publishedAt": "2019-12-16T08:25:51+00:00",
      "source": {
        "uri": "/videos/c188ed58-3403-46a2-b91b-44603d10b2c9/source"
      },
      "tags": [
        "maths",
        "string theory",
        "video"
      ],
      "title": "Maths video",
      "updateddAt": "2019-12-16T08:48:49+00:00",
      "videoId": "vi4k0jvEUuaTdRAEjQ4Prklg"
    },
    {
      "assets": {
        "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
        "iframe": "<iframe src=\"//embed.api.video/1b9d6ae8-8f57-4b6d-8552-d636926b4f5f?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
        "player": "https://embed.api.video/1b9d6ae8-8f57-4b6d-8552-d636926b4f5f?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
        "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
      },
      "description": "A description for your video.",
      "metadata": [
        {
          "key": "Author",
          "value": "John Doe"
        },
        {
          "key": "Science Fiction",
          "value": "Cyberpunk"
        },
        {
          "key": "Technology",
          "value": "Computers"
        }
      ],
      "mp4Support": true,
      "panoramic": false,
      "public": false,
      "publishedAt": "2019-12-16T08:25:51+00:00",
      "source": {
        "uri": "/videos/1b9d6ae8-8f57-4b6d-8552-d636926b4f5f/source"
      },
      "tags": [
        "books",
        "short stories"
      ],
      "title": "Video Title",
      "updateddAt": "2019-12-16T08:48:49+00:00",
      "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
    },
    {
      "assets": {
        "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
        "iframe": "<iframe src=\"//embed.api.video/73129412-e320-4b93-99f6-59a85e3cedcd?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
        "player": "https://embed.api.video/73129412-e320-4b93-99f6-59a85e3cedcd?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
        "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
      },
      "description": "A brief description of the video.",
      "metadata": [
        {
          "key": "Length",
          "value": "Short"
        }
      ],
      "mp4Support": true,
      "panoramic": false,
      "playerId": "pl45KFKdlddgk654dspkze",
      "public": false,
      "publishedAt": "2019-12-16T08:25:51+00:00",
      "source": {
        "uri": "/videos/73129412-e320-4b93-99f6-59a85e3cedcd/source"
      },
      "tags": [
        "General",
        "Videos"
      ],
      "title": "My Video Title",
      "updateddAt": "2019-12-16T08:48:49+00:00",
      "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 11,
    "itemsTotal": 11,
    "links": [
      {
        "rel": "self",
        "uri": "https://ws.api.video/videos?currentPage=1"
      },
      {
        "rel": "first",
        "uri": "https://ws.api.video/videos?currentPage=1"
      },
      {
        "rel": "last",
        "uri": "https://ws.api.video/videos?currentPage=1"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

> 400 Response

```json
{
  "name": "page",
  "problems": [
    {
      "name": "page",
      "range": {
        "min": 1
      },
      "title": "This parameter is out of the allowed range of values."
    },
    {
      "name": "pageSize",
      "range": {
        "max": 100,
        "min": 10
      },
      "title": "This parameter is out of the allowed range of values."
    }
  ],
  "range": {
    "min": 1
  },
  "status": 400,
  "title": "This parameter is out of the allowed range of values."
}
```

<h3 id="list-all-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[videos-list-response](#schemavideos-list-response)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a video

<a id="opIdPOST-video"></a>

> Code samples

```bash
curl https://example.com/videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "An amazing video explaining string theory.",
    "metadata": [
      {
        "key": "Author",
        "value": "John Doe"
      },
      {
        "key": "Format",
        "value": "Tutorial"
      }
    ],
    "mp4Support": true,
    "panoramic": false,
    "playerId": "pl45KFKdlddgk654dspkze",
    "public": false,
    "tags": [
      "maths",
      "string theory",
      "video"
    ],
    "title": "Maths video"
  }'
```

`POST /videos`

To create a video, you create its container&parameters first, before adding the video file (exception - when using an existing HTTP source).
* Videos are public by default. [Learn about Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
* Up to 6 responsive video streams will be created (from 240p to 4k)
* Mp4 encoded versions are created at the highest quality (max 1080p) by default.
* Panoramic videos are for videos recorded in 360 degrees.  You can toggle this after your 360 video upload.
* Searchable parameters: title, description, tags and metadata

 ```shell
$ curl https://ws.api.video/videos \ -H 'Authorization: Bearer {access_token} \ -d '{"title":"My video", 
     "description":"so many details",
     "mp4Support":true
}'
```  

## add an URL to upload on creation
You can also create a video directly from a video hosted on a third-party server by giving its URI in `source` parameter:
```shell
$ curl https://ws.api.video/videos \
-H 'Authorization: Bearer {access_token} \
-d '{"source":"http://uri/to/video.mp4", "title":"My video"}'
```

In this case, the service will respond `202 Accepted` and ingest the video asynchronously.
## Track users with Dynamic Metadata
Metadata values can be a key:value where the values are predefined, but Dynamic metadata allows you to enter *any* value for a defined key.  To defined a dynamic metadata pair use:
``` "metadata":[{"dynamicKey": "__dynamicKey__"}] ```

The double underscore on both sides of the value allows any variable to be added for a given video session. Added the the url you might have:
``` <iframe type="text/html" src="https://embed.api.video/vod/vi6QvU9dhYCzW3BpPvPsZUa8?metadata[classUserName]=Doug" width="960" height="320" frameborder="0" scrollling="no"></iframe> ```


This video session will be tagged as watched by Doug - allowing for in-depth analysis on how each viewer interacts with the videos.
### We have tutorials on:
* [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial)
* [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos)


* [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices)
* [Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
* [Using Dynamic Metadata](https://api.video/blog/tutorials/dynamic-metadata)

* Full list of [tutorials](https://api.video/blog/endpoints/video-create) that demonstrate this endpoint.


> Body parameter

```json
{
  "description": "An amazing video explaining string theory.",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video"
}
```

<h3 id="create-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[video-create-payload](#schemavideo-create-payload)|false|video to create|
|» description|body|string|false|A brief description of your video.|
|» metadata|body|[[metadata](#schemametadata)]|false|A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata).|
|» mp4Support|body|boolean|false|Enables mp4 version in addition to streamed version.|
|» panoramic|body|boolean|false|Indicates if your video is a 360/immersive video.|
|» playerId|body|string|false|The unique identification number for your video player.|
|» public|body|boolean|false|Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).|
|» publishedAt|body|string(date-time)|false|The API uses ISO-8601 format for time, and includes 3 places for milliseconds.|
|» source|body|string|false|If you add a video already on the web, this is where you enter the url for the video.|
|» tags|body|[string]|false|A list of tags you want to use to describe your video.|
|» title|body|string|true|The title of your new video.|

> Example responses

> 201 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl4k0jvEUuaTdRAEjQ4Jfrgz",
  "public": false,
  "publishedAt": "4665-07-14T23:36:18.598Z",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 202 Response

```json
{
  "actions": [
    "video_delete",
    "video_download",
    "video_update"
  ],
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "publishedAt": "4665-07-14T23:36:18.598Z",
  "scheduledAt": "4251-03-03T12:52:03.085Z",
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 400 Response

```json
{
  "name": "title",
  "problems": [
    {
      "name": "title",
      "title": "This attribute is required.",
      "type": "https://docs.api.video/docs/attributerequired"
    },
    {
      "name": "scheduledAt",
      "title": "This attribute must be a ISO8601 date.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    },
    {
      "name": "tags",
      "title": "This attribute must be an array.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    },
    {
      "name": "metadata",
      "title": "This attribute must be an array.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    }
  ],
  "status": 400,
  "title": "This attribute is required.",
  "type": "https://docs.api.video/docs/attributerequired"
}
```

<h3 id="create-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[video](#schemavideo)|
|202|Accepted|Accepted|[video](#schemavideo)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show a video

<a id="opIdGET-video"></a>

> Code samples

```bash
curl https://example.com/videos/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos/{videoId}`

This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL. Tutorials using [video GET](https://api.video/blog/endpoints/video-get).

<h3 id="show-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want details about.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "publishedAt": "2019-12-16T08:25:51+00:00",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "updateddAt": "2019-12-16T08:48:49+00:00",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="show-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[video](#schemavideo)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a video

<a id="opIdDELETE-video"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /videos/{videoId}`

If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. Tutorials using [video deletion](https://api.video/blog/endpoints/video-delete).

<h3 id="delete-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The video ID for the video you want to delete.|

> Example responses

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="delete-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a video

<a id="opIdPATCH-video"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "An amazing video explaining the string theory",
    "metadata": [
      {
        "key": "Author",
        "value": "John Doe"
      },
      {
        "key": "Format",
        "value": "Tutorial"
      }
    ],
    "mp4Support": true,
    "panoramic": false,
    "playerId": "pl45KFKdlddgk654dspkze",
    "public": false,
    "tags": [
      "maths",
      "string theory",
      "video"
    ],
    "title": "String theory"
  }'
```

`PATCH /videos/{videoId}`

Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it. Tutorials using [video update](https://api.video/blog/endpoints/video-update).

> Body parameter

```json
{
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "String theory"
}
```

<h3 id="update-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The video ID for the video you want to delete.|
|body|body|[video-update-payload](#schemavideo-update-payload)|false|none|
|» description|body|string|false|A brief description of the video.|
|» metadata|body|[[metadata](#schemametadata)]|false|A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.|
|» mp4Support|body|boolean|false|Whether the player supports the mp4 format.|
|» panoramic|body|boolean|false|Whether the video is a 360 degree or immersive video.|
|» playerId|body|string|false|The unique ID for the player you want to associate with your video.|
|» public|body|boolean|false|Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).|
|» tags|body|[string]|false|A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.|
|» title|body|string|false|The title you want to use for your video.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "publishedAt": "2019-12-16T08:25:51+00:00",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "updatedAt": "2019-12-16T08:48:49+00:00",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 400 Response

```json
{
  "name": "scheduledAt",
  "problems": [
    {
      "name": "scheduledAt",
      "title": "This attribute must be a ISO-8601 date.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    },
    {
      "name": "tags",
      "title": "This attribute must be an array.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    },
    {
      "name": "metadata",
      "title": "This attribute must be an array.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    }
  ],
  "status": 400,
  "title": "This attribute must be a ISO-8601 date.",
  "type": "https://docs.api.video/docs/attributeinvalid"
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="update-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[video](#schemavideo)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload a video

<a id="opIdPOST_videos-videoId-source"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /videos/{videoId}/source`

To upload a video to the videoId you created. Replace {videoId} with the id you'd like to use, {access_token} with your token, and /path/to/video.mp4 with the path to the video you'd like to upload. You can only upload your video to the videoId once.
```bash
curl https://ws.api.video/videos/{videoId}/source \
  -H 'Authorization: Bearer {access_token}' \
  -F file=@/path/to/video.mp4

  ```
Tutorials using [video upload](https://api.video/blog/endpoints/video-upload).

> Body parameter

```yaml
file: "@/path/to/video.mp4"
```

<h3 id="upload-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|Enter the videoId you want to use to upload your video.|
|Content-Range|header|string|false|Content-Range represents the range of bytes that will be returned as a result of the request. Byte ranges are inclusive, meaning that bytes 0-999 represents the first 1000 bytes in a file or object.|
|body|body|[video-upload-payload](#schemavideo-upload-payload)|false|none|
|» file|body|string(binary)|true|The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the "/videos" endpoint and add the "source" parameter when you create a new video.|

> Example responses

> 201 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining the string theory.",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "publishedAt": "4665-07-14T23:36:18.598Z",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 400 Response

```json
{
  "name": "file",
  "problems": [
    {
      "name": "file",
      "title": "The source of the video is already uploaded.",
      "type": "https://docs.api.video/docs/filealreadyuploaded"
    },
    {
      "name": "video",
      "title": "The video xxxx has already been uploaded.",
      "type": "https://docs.api.video/docs/filealreadyuploaded"
    },
    {
      "name": "file",
      "title": "There is no uploaded file in the request.",
      "type": "https://docs.api.video/docs/filemissing"
    },
    {
      "name": "file",
      "title": "There is more than one uploaded file in the request.",
      "type": "https://docs.api.video/docs/multiplefilesuploaded"
    }
  ],
  "status": 400,
  "title": "The source of the video is already uploaded.",
  "type": "https://docs.api.video/docs/filealreadyuploaded"
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="upload-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[video](#schemavideo)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show video status

<a id="opIdGET-video-status"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos/{videoId}/status`

This API provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities. Tutorials using [video status](https://api.video/blog/endpoints/video-status).

<h3 id="show-video-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want the status for.|

> Example responses

> 200 Response

```json
{
  "encoding": {
    "metadata": {
      "aspectRatio": "16/9",
      "audioCodec": "aac",
      "bitrate": 411.218,
      "duration": 4176,
      "framerate": 24,
      "height": 240,
      "samplerate": 48000,
      "videoCodec": "h264",
      "width": 424
    },
    "playable": true,
    "qualities": [
      {
        "quality": "360p",
        "status": "encoded"
      },
      {
        "quality": "480p",
        "status": "encoded"
      },
      {
        "quality": "720p",
        "status": "encoded"
      },
      {
        "quality": "1080p",
        "status": "encoding"
      },
      {
        "quality": "2160p",
        "status": "waiting"
      }
    ]
  },
  "ingest": {
    "filesize": 273579401,
    "receivedBytes": [
      {
        "from": 0,
        "to": 134217727,
        "total": 273579401
      },
      {
        "from": 134217728,
        "to": 268435455,
        "total": 273579401
      },
      {
        "from": 268435456,
        "to": 273579400,
        "total": 273579401
      }
    ],
    "status": "uploaded"
  }
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="show-video-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[videostatus](#schemavideostatus)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload a thumbnail

<a id="opIdPOST_videos-videoId-thumbnail"></a>

> Code samples

```bash
curl https://example.com/videos/string/thumbnail \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /videos/{videoId}/thumbnail`

The thumbnail is the poster that appears in the player window before video playback begins.
This endpoint allows you to upload an image for the thumbnail.
To select a still frame from the video using a time stamp, use [Pick a Thumbnail](https://docs.api.video/reference#patch_videos-videoid-thumbnail) to pick a time in the video. 
Note: There may be a short delay before the new thumbnail is delivered to our CDN.
Tutorials using [Thumbnail upload](https://api.video/blog/endpoints/videos-upload-a-thumbnail).

> Body parameter

```yaml
file: string
```

<h3 id="upload-a-thumbnail-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|Unique identifier of the chosen video |
|body|body|[video-thumbnail-upload-payload](#schemavideo-thumbnail-upload-payload)|false|none|
|» file|body|string(binary)|true|The image to be added as a thumbnail.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "publishedAt": "2020-07-14T23:36:18.598Z",
  "scheduledAt": "2020-03-03T12:52:03.085Z",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 400 Response

```json
{
  "name": "file",
  "status": 400,
  "title": "Only [jpeg, jpg, JPG, JPEG] extensions are supported.",
  "type": "https://docs.api.video/docs/fileextension"
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="upload-a-thumbnail-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[video](#schemavideo)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Pick a thumbnail

<a id="opIdPATCH_videos-videoId-thumbnail"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/thumbnail \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "timecode": "00:00:00.000"
  }'
```

`PATCH /videos/{videoId}/thumbnail`

Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update.
Tutorials using [Thumbnail picking](https://api.video/blog/endpoints/video-pick-a-thumbnail).

> Body parameter

```json
{
  "timecode": "00:00:00.000"
}
```

<h3 id="pick-a-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.|
|body|body|[video-thumbnail-pick-payload](#schemavideo-thumbnail-pick-payload)|false|none|
|» timecode|body|string|true|Frame in video to be used as a placeholder before the video plays. <br>Example: '"00:01:00.000" for 1 minute into the video.'<br>Valid Patterns: <br>"hh:mm:ss.ms"<br>"hh:mm:ss:frameNumber"<br>"124" (integer value is reported as seconds) <br>If selection is out of range, "00:00:00.00" will be chosen.|

> Example responses

> 200 Response

```json
{
  "assets": {
    "hls": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/hls/manifest.m3u8",
    "iframe": "<iframe src=\"//embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
    "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
    "player": "https://embed.api.video/vi4k0jvEUuaTdRAEjQ4Jfrgz?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
    "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
  },
  "description": "An amazing video explaining string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "publishedAt": "4665-07-14T23:36:18.598Z",
  "source": {
    "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/source"
  },
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

> 404 Response

```json
{
  "name": "videoId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="pick-a-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[video](#schemavideo)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-captions">Captions</h1>

## List video captions

<a id="opIdGET_videos-videoId-captions"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Prklg/captions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos/{videoId}/captions`

Retrieve a list of available captions for the videoId you provide.

<h3 id="list-video-captions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to retrieve a list of captions for.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "default": false,
      "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/en.vtt",
      "srclang": "en",
      "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions/en"
    },
    {
      "default": false,
      "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/fr.vtt",
      "srclang": "fr",
      "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions/fr"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 2,
    "itemsTotal": 2,
    "links": [
      {
        "rel": "self",
        "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions?currentPage=1&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions?currentPage=1&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-video-captions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[captions-list-response](#schemacaptions-list-response)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show a caption

<a id="opIdGET_videos-videoId-captions-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Prklg/captions/en \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos/{videoId}/captions/{language}`

Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found.
Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).

<h3 id="show-a-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want captions for.|
|language|path|string|true|A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation|

> Example responses

> 200 Response

```json
{
  "default": false,
  "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/en.vtt",
  "srclang": "en",
  "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions/en"
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="show-a-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[subtitle](#schemasubtitle)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload a caption

<a id="opIdPOST_videos-videoId-captions-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Prklg/captions/en \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /videos/{videoId}/captions/{language}`

Upload a VTT file to add captions to your video.
 Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.

> Body parameter

```yaml
file: "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/en.vtt"
```

<h3 id="upload-a-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to add a caption to.|
|language|path|string|true|A valid BCP 47 language representation.|
|body|body|[captions-upload-payload](#schemacaptions-upload-payload)|false|none|
|» file|body|string(binary)|true|The video text track (VTT) you want to upload.|

> Example responses

> 200 Response

```json
{
  "default": false,
  "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/en.vtt",
  "srclang": "en",
  "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions/en"
}
```

> 400 Response

```json
{
  "name": "string",
  "problems": [
    {}
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="upload-a-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[subtitle](#schemasubtitle)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a caption

<a id="opIdDELETE_videos-videoId-captions-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Prklgc/captions/en \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /videos/{videoId}/captions/{language}`

Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.

<h3 id="delete-a-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to delete a caption from.|
|language|path|string|true|A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.|

> Example responses

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update caption

<a id="opIdPATCH_videos-videoId-captions-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Prklg/captions/en \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "default": true
  }'
```

`PATCH /videos/{videoId}/captions/{language}`

To have the captions on automatically, use this PATCH to set default: true.

> Body parameter

```json
{
  "default": true
}
```

<h3 id="update-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to have automatic captions for. |
|language|path|string|true|A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.|
|body|body|[captions-update-payload](#schemacaptions-update-payload)|false|none|
|» default|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "default": true,
  "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/en.vtt",
  "srclang": "en",
  "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/captions/en"
}
```

> 400 Response

```json
{
  "name": "string (required)",
  "problems": [
    null
  ],
  "status": "integer (required)",
  "title": "string (required)",
  "type": "string (required)"
}
```

> 404 Response

```json
{
  "name": "irure mollit aute",
  "status": 85925135,
  "title": "sunt do fugiat tempor",
  "type": "Lorem sit culpa non"
}
```

<h3 id="update-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[subtitle](#schemasubtitle)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-chapters">Chapters</h1>

## List video chapters

<a id="opIdGET_videos-videoId-chapters"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos/{videoId}/chapters`

Retrieve a list of all chapters for a specified video.

<h3 id="list-video-chapters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to retrieve a list of chapters for.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "language": "fr",
      "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/chapters/fr.vtt",
      "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters/fr"
    },
    {
      "language": "en",
      "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/chapters/en.vtt",
      "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters/en"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 2,
    "itemsTotal": 2,
    "links": [
      {
        "rel": "self",
        "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters?currentPage=1&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters?currentPage=1&pageSize=25"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="list-video-chapters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[chapters-list-response](#schemachapters-list-response)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show a chapter

<a id="opIdGET_videos-videoId-chapters-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters/en \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /videos/{videoId}/chapters/{language}`

Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).

<h3 id="show-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to show a chapter for.|
|language|path|string|true|A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.|

> Example responses

> 200 Response

```json
{
  "language": "fr",
  "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/chapters/fr.vtt",
  "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters/fr"
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="show-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[chapter](#schemachapter)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Upload a chapter

<a id="opIdPOST_videos-videoId-chapters-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters/en \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /videos/{videoId}/chapters/{language}`

Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.

> Body parameter

```yaml
file: string
```

<h3 id="upload-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to upload a chapter for.|
|language|path|string|true|A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.|
|body|body|[chapters-update-payload](#schemachapters-update-payload)|false|none|
|» file|body|string(binary)|true|The VTT file describing the chapters you want to upload.|

> Example responses

> 200 Response

```json
{
  "language": "fr",
  "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/chapters/fr.vtt",
  "uri": "/videos/vi3N6cDinStg3oBbN79GklWS/chapters/fr"
}
```

> 400 Response

```json
{
  "name": "string",
  "problems": [
    {}
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="upload-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[chapter](#schemachapter)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a chapter

<a id="opIdDELETE_videos-videoId-chapters-language"></a>

> Code samples

```bash
curl https://example.com/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters/en \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /videos/{videoId}/chapters/{language}`

<h3 id="delete-a-chapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|string|true|The unique identifier for the video you want to delete a chapter from. |
|language|path|string|true|A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.|

> Example responses

> 404 Response

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-a-chapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="apivideo-webhooks">Webhooks</h1>

## List all webhooks

<a id="opIdLIST-webhooks"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks`

Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.

<h3 id="list-all-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|events|query|string|false|The webhook event that you wish to filter on.|
|currentPage|query|integer|false|Choose the number of search results to return per page. Minimum value: 1|
|pageSize|query|integer|false|Results per page. Allowed values 1-100, default is 25.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "2021-01-08T14:12:18.000+00:00",
      "events": [
        "video.encoding.quality.completed"
      ],
      "url": "http://clientnotificationserver.com/notif?myquery=query",
      "webhookId": "webhook_XXXXXXXXXXXXXXX"
    },
    {
      "createdAt": "2021-01-12T12:12:12.000+00:00",
      "events": [
        "video.encoding.quality.completed"
      ],
      "url": "http://clientnotificationserver.com/notif?myquery=query2",
      "webhookId": "webhook_XXXXXXXXXYYYYYY"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "currentPageItems": 11,
    "itemsTotal": 11,
    "links": [
      {
        "rel": "self",
        "uri": "https://ws.api.video/webhooks?currentPage=1"
      },
      {
        "rel": "first",
        "uri": "https://ws.api.video/webhooks?currentPage=1"
      },
      {
        "rel": "last",
        "uri": "https://ws.api.video/webhooks?currentPage=1"
      }
    ],
    "pageSize": 25,
    "pagesTotal": 1
  }
}
```

<h3 id="list-all-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[webhooks-list-response](#schemawebhooks-list-response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create Webhook

<a id="opIdPOST-webhooks"></a>

> Code samples

```bash
curl https://example.com/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "events": [
      "video.encoding.quality.completed"
    ],
    "url": "http://clientnotificationserver.com/notif?myquery=query"
  }'
```

`POST /webhooks`

Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events: 
* ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.
* ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
* ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.
* ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.

> Body parameter

```json
{
  "events": [
    "video.encoding.quality.completed"
  ],
  "url": "http://clientnotificationserver.com/notif?myquery=query"
}
```

<h3 id="create-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[webhooks-create-payload](#schemawebhooks-create-payload)|false|none|
|» events|body|[string]|true|A list of the webhooks that you are subscribing to. There are Currently four webhook options:<br>* ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.<br>* ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.<br>* ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.<br>* ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.|
|» url|body|string|true|The the url to which HTTP notifications are sent. It could be any http or https URL.|

> Example responses

> 201 Response

```json
{
  "createdAt": "2021-01-08T14:12:18.000+00:00",
  "events": [
    "video.encoding.quality.completed"
  ],
  "url": "http://clientnotificationserver.com/notif?myquery=query",
  "webhookId": "webhook_XXXXXXXXXXXXXXX"
}
```

> 400 Response

```json
{
  "events": "This attribute is required.",
  "name": "events",
  "problems": [
    {
      "name": "events",
      "title": "This attribute is required.",
      "type": "https://docs.api.video/docs/attributerequired"
    },
    {
      "name": "url",
      "title": "This attribute is required.",
      "type": "https://docs.api.video/docs/attributerequired"
    },
    {
      "name": "events",
      "title": "This attribute must be an array.",
      "type": "https://docs.api.video/docs/attributeinvalid"
    }
  ],
  "status": 400,
  "type": "https://docs.api.video/docs/attributerequired"
}
```

<h3 id="create-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[webhook](#schemawebhook)|
|400|Bad Request|Bad Request|[bad-request](#schemabad-request)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Show Webhook details

<a id="opIdGET-Webhook"></a>

> Code samples

```bash
curl https://example.com/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{webhookId}`

This call provides the same JSON information provided on Webjhook creation.

<h3 id="show-webhook-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|The unique webhook you wish to retreive details on.|

> Example responses

> 200 Response

```json
{
  "createdAt": "2021-01-08T14:12:18.000+00:00",
  "events": [
    "video.encoding.quality.completed"
  ],
  "url": "http://clientnotificationserver.com/notif?myquery=query",
  "webhookId": "webhook_XXXXXXXXXXXXXXX"
}
```

<h3 id="show-webhook-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a Webhook

<a id="opIdDELETE-webhook"></a>

> Code samples

```bash
curl https://example.com/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{webhookId}`

This endpoint will delete the indicated webhook.

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string|true|The webhook you wish to delete.|

> Example responses

> 404 Response

```json
{
  "name": "webhookId",
  "status": 404,
  "title": "The requested resource was not found.",
  "type": "https://docs.api.video/docs/resourcenot_found"
}
```

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|404|Not Found|Not Found|[not-found](#schemanot-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_access-token">access-token</h2>
<!-- backwards compatibility -->
<a id="schemaaccess-token"></a>
<a id="schema_access-token"></a>
<a id="tocSaccess-token"></a>
<a id="tocsaccess-token"></a>

```json
{
  "access_token": "est",
  "expires_in": 3600,
  "refresh_token": "cillum",
  "token_type": "qui nulla l"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|The access token containing security credentials allowing you to acccess the API. The token lasts for one hour.|
|expires_in|integer|false|none|Lists the time in seconds when your access token expires. It lasts for one hour.|
|refresh_token|string|false|none|A token you can use to get the next access token when your current access token expires.|
|token_type|string|false|none|The type of token you have.|

<h2 id="tocS_account">account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "environment": "string",
  "features": "[\"app.dynamic_metadata, app.event_log\"]",
  "quota": {
    "quotaRemaining": 0,
    "quotaTotal": 0,
    "quotaUsed": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|false|none|Deprecated. Whether you are using your production or sandbox API key will impact what environment is displayed here, as well as stats and features information. If you use your sandbox key, the environment is "sandbox." If you use your production key, the environment is "production."|
|features|[string]|false|none|Deprecated. What features are enabled for your account. Choices include: app.dynamic_metadata - the ability to dynamically tag videos to better segment and understand your audiences, app.event_log - the ability to create and retrieve a log detailing how your videos were interacted with, player.white_label - the ability to customise your player, stats.player_events - the ability to see statistics about how your player is being used, transcode.mp4_support - the ability to reformat content into mp4 using the H264 codec.|
|quota|object|false|none|Deprecated|

<h2 id="tocS_authenticate-payload">authenticate-payload</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticate-payload"></a>
<a id="schema_authenticate-payload"></a>
<a id="tocSauthenticate-payload"></a>
<a id="tocsauthenticate-payload"></a>

```json
{
  "apiKey": "9VxMaPgsaFg7EBqmuspSzF7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|true|none|Your account API key. You can use your sandbox API key, or you can use your production API key.|

<h2 id="tocS_bad-request">bad-request</h2>
<!-- backwards compatibility -->
<a id="schemabad-request"></a>
<a id="schema_bad-request"></a>
<a id="tocSbad-request"></a>
<a id="tocsbad-request"></a>

```json
{
  "name": "string",
  "problems": [
    {
      "name": "string",
      "problems": [
        {}
      ],
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|problems|[[bad-request](#schemabad-request)]|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_bytes_range">bytes_range</h2>
<!-- backwards compatibility -->
<a id="schemabytes_range"></a>
<a id="schema_bytes_range"></a>
<a id="tocSbytes_range"></a>
<a id="tocsbytes_range"></a>

```json
{
  "from": 0,
  "to": 9999,
  "total": 10000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|integer|false|none|The starting point for the range of bytes for a chunk of a video.|
|to|integer|false|none|The ending point for the range of bytes for a chunk of a video.|
|total|integer|false|none|The total number of bytes in the provided range.|

<h2 id="tocS_captions-list-response">captions-list-response</h2>
<!-- backwards compatibility -->
<a id="schemacaptions-list-response"></a>
<a id="schema_captions-list-response"></a>
<a id="tocScaptions-list-response"></a>
<a id="tocscaptions-list-response"></a>

```json
{
  "data": [
    {
      "default": false,
      "src": "string",
      "srclang": "string",
      "uri": "string"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[subtitle](#schemasubtitle)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|

<h2 id="tocS_captions-update-payload">captions-update-payload</h2>
<!-- backwards compatibility -->
<a id="schemacaptions-update-payload"></a>
<a id="schema_captions-update-payload"></a>
<a id="tocScaptions-update-payload"></a>
<a id="tocscaptions-update-payload"></a>

```json
{
  "default": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|none|

<h2 id="tocS_captions-upload-payload">captions-upload-payload</h2>
<!-- backwards compatibility -->
<a id="schemacaptions-upload-payload"></a>
<a id="schema_captions-upload-payload"></a>
<a id="tocScaptions-upload-payload"></a>
<a id="tocscaptions-upload-payload"></a>

```json
{
  "file": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/captions/en.vtt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The video text track (VTT) you want to upload.|

<h2 id="tocS_chapter">chapter</h2>
<!-- backwards compatibility -->
<a id="schemachapter"></a>
<a id="schema_chapter"></a>
<a id="tocSchapter"></a>
<a id="tocschapter"></a>

```json
{
  "language": "string",
  "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/chapters/fr.vtt",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|none|
|src|string|false|none|The link to your VTT file, which contains your chapters information for the video.|
|uri|string|false|none|none|

<h2 id="tocS_chapters-list-response">chapters-list-response</h2>
<!-- backwards compatibility -->
<a id="schemachapters-list-response"></a>
<a id="schema_chapters-list-response"></a>
<a id="tocSchapters-list-response"></a>
<a id="tocschapters-list-response"></a>

```json
{
  "data": [
    {
      "language": "string",
      "src": "https://cdn.api.video/vod/vi3N6cDinStg3oBbN79GklWS/chapters/fr.vtt",
      "uri": "string"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[chapter](#schemachapter)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|

<h2 id="tocS_chapters-update-payload">chapters-update-payload</h2>
<!-- backwards compatibility -->
<a id="schemachapters-update-payload"></a>
<a id="schema_chapters-update-payload"></a>
<a id="tocSchapters-update-payload"></a>
<a id="tocschapters-update-payload"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The VTT file describing the chapters you want to upload.|

<h2 id="tocS_link">link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "rel": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_live-stream">live-stream</h2>
<!-- backwards compatibility -->
<a id="schemalive-stream"></a>
<a id="schema_live-stream"></a>
<a id="tocSlive-stream"></a>
<a id="tocslive-stream"></a>

```json
{
  "assets": {
    "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
    "iframe": "<iframe src=\\\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\\\" width=\\\"100%\\\" height=\\\"100%\\\" frameborder=\\\"0\\\" scrolling=\\\"no\\\" allowfullscreen=\\\"\\\"></iframe>",
    "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
    "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
  },
  "broadcasting": true,
  "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
  "name": "My Live Stream",
  "playerId": "pl45d5vFFGrfdsdsd156dGhh",
  "public": true,
  "record": true,
  "streamKey": "cc1b4df0-d1c5-4064-a8f9-9f0368385135"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[live_stream_assets](#schemalive_stream_assets)|false|none|none|
|broadcasting|boolean|false|none|Whether or not you are broadcasting the live video you recorded for others to see. True means you are broadcasting to viewers, false means you are not.|
|liveStreamId|string|false|none|The unique identifier for the live stream. Live stream IDs begin with "li."|
|name|string|false|none|The name of your live stream.|
|playerId|string|false|none|The unique identifier for the player.|
|public|boolean|false|none|BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.|
|record|boolean|false|none|Whether you are recording or not.|
|streamKey|string|false|none|The unique, private stream key that you use to begin streaming.|

<h2 id="tocS_live-stream-create-payload">live-stream-create-payload</h2>
<!-- backwards compatibility -->
<a id="schemalive-stream-create-payload"></a>
<a id="schema_live-stream-create-payload"></a>
<a id="tocSlive-stream-create-payload"></a>
<a id="tocslive-stream-create-payload"></a>

```json
{
  "name": "Test live",
  "playerId": "pl4f4ferf5erfr5zed4fsdd",
  "record": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Add a name for your live stream here.|
|playerId|string|false|none|The unique identifier for the player.|
|public|boolean|false|none|BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.|
|record|boolean|false|none|Whether you are recording or not. True for record, false for not record.|

<h2 id="tocS_live-stream-list-response">live-stream-list-response</h2>
<!-- backwards compatibility -->
<a id="schemalive-stream-list-response"></a>
<a id="schema_live-stream-list-response"></a>
<a id="tocSlive-stream-list-response"></a>
<a id="tocslive-stream-list-response"></a>

```json
{
  "data": [
    {
      "assets": {
        "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
        "iframe": "<iframe src=\\\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\\\" width=\\\"100%\\\" height=\\\"100%\\\" frameborder=\\\"0\\\" scrolling=\\\"no\\\" allowfullscreen=\\\"\\\"></iframe>",
        "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
        "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
      },
      "broadcasting": true,
      "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr",
      "name": "My Live Stream",
      "playerId": "pl45d5vFFGrfdsdsd156dGhh",
      "public": true,
      "record": true,
      "streamKey": "cc1b4df0-d1c5-4064-a8f9-9f0368385135"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[live-stream](#schemalive-stream)]|true|none|none|
|pagination|[pagination](#schemapagination)|true|none|none|

<h2 id="tocS_live-stream-session">live-stream-session</h2>
<!-- backwards compatibility -->
<a id="schemalive-stream-session"></a>
<a id="schema_live-stream-session"></a>
<a id="tocSlive-stream-session"></a>
<a id="tocslive-stream-session"></a>

```json
{
  "client": {
    "name": "Firefox",
    "type": "browser",
    "version": "67.0"
  },
  "device": {
    "model": "unknown",
    "type": "desktop",
    "vendor": "Dell"
  },
  "location": {
    "city": "Paris",
    "country": "France"
  },
  "os": {
    "name": "Microsoft Windows",
    "shortname": "W10",
    "version": "Windows 10"
  },
  "referrer": {
    "medium": "organic",
    "searchTerm": "video stream",
    "source": "https://google.com",
    "url": "https://api.video"
  },
  "session": {
    "endedAt": "2019-06-24T12:45:01.109+00",
    "loadedAt": "2019-06-24T11:45:01.109+00",
    "sessionId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[live_stream_session_client](#schemalive_stream_session_client)|false|none|What kind of browser the viewer is using for the live stream session.|
|device|[live_stream_session_device](#schemalive_stream_session_device)|false|none|What type of device the user is on when in the live stream session.|
|location|[live_stream_session_location](#schemalive_stream_session_location)|false|none|The location of the viewer of the live stream.|
|os|[video_session_os](#schemavideo_session_os)|false|none|The operating system the viewer is on.|
|referrer|[live_stream_session_referrer](#schemalive_stream_session_referrer)|false|none|none|
|session|[live_stream_session_session](#schemalive_stream_session_session)|false|none|none|

<h2 id="tocS_live-stream-thumbnail-upload-payload">live-stream-thumbnail-upload-payload</h2>
<!-- backwards compatibility -->
<a id="schemalive-stream-thumbnail-upload-payload"></a>
<a id="schema_live-stream-thumbnail-upload-payload"></a>
<a id="tocSlive-stream-thumbnail-upload-payload"></a>
<a id="tocslive-stream-thumbnail-upload-payload"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The image to be added as a thumbnail.|

<h2 id="tocS_live-stream-update-payload">live-stream-update-payload</h2>
<!-- backwards compatibility -->
<a id="schemalive-stream-update-payload"></a>
<a id="schema_live-stream-update-payload"></a>
<a id="tocSlive-stream-update-payload"></a>
<a id="tocslive-stream-update-payload"></a>

```json
{
  "name": "My Live Stream Video",
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": true,
  "record": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name you want to use for your live stream.|
|playerId|string|false|none|The unique ID for the player associated with a live stream that you want to update.|
|public|boolean|false|none|BETA FEATURE Please limit all public = false ("private") livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.|
|record|boolean|false|none|Use this to indicate whether you want the recording on or off. On is true, off is false.|

<h2 id="tocS_live_stream_assets">live_stream_assets</h2>
<!-- backwards compatibility -->
<a id="schemalive_stream_assets"></a>
<a id="schema_live_stream_assets"></a>
<a id="tocSlive_stream_assets"></a>
<a id="tocslive_stream_assets"></a>

```json
{
  "hls": "https://live.api.video/li4pqNqGUkhKfWcBGpZVLRY5.m3u8",
  "iframe": "<iframe src=\\\"https://embed.api.video/live/li4pqNqGUkhKfWcBGpZVLRY5\\\" width=\\\"100%\\\" height=\\\"100%\\\" frameborder=\\\"0\\\" scrolling=\\\"no\\\" allowfullscreen=\\\"\\\"></iframe>",
  "player": "https://embed.api.video/live/li400mYKSgQ6xs7taUeSaEKr",
  "thumbnail": "https://cdn.api.video/live/li400mYKSgQ6xs7taUeSaEKr/thumbnail.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hls|string(uri)|false|none|The http live streaming (HLS) link for your live video stream.|
|iframe|string|false|none|The embed code for the iframe containing your live video stream.|
|player|string(uri)|false|none|A link to the video player that is playing your live stream.|
|thumbnail|string(uri)|false|none|A link to the thumbnail for your video.|

<h2 id="tocS_live_stream_session_client">live_stream_session_client</h2>
<!-- backwards compatibility -->
<a id="schemalive_stream_session_client"></a>
<a id="schema_live_stream_session_client"></a>
<a id="tocSlive_stream_session_client"></a>
<a id="tocslive_stream_session_client"></a>

```json
{
  "name": "Firefox",
  "type": "browser",
  "version": "67.0"
}
```

What kind of browser the viewer is using for the live stream session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the browser used to view the live stream session.|
|type|string|false|none|The type of client used to view the live stream session.|
|version|string|false|none|The version of the browser used to view the live stream session.|

<h2 id="tocS_live_stream_session_device">live_stream_session_device</h2>
<!-- backwards compatibility -->
<a id="schemalive_stream_session_device"></a>
<a id="schema_live_stream_session_device"></a>
<a id="tocSlive_stream_session_device"></a>
<a id="tocslive_stream_session_device"></a>

```json
{
  "model": "unknown",
  "type": "desktop",
  "vendor": "Dell"
}
```

What type of device the user is on when in the live stream session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The specific model of the device, if known.|
|type|string|false|none|What the type is like desktop, laptop, mobile.|
|vendor|string|false|none|If known, what the brand of the device is, like Apple, Dell, etc.|

<h2 id="tocS_live_stream_session_location">live_stream_session_location</h2>
<!-- backwards compatibility -->
<a id="schemalive_stream_session_location"></a>
<a id="schema_live_stream_session_location"></a>
<a id="tocSlive_stream_session_location"></a>
<a id="tocslive_stream_session_location"></a>

```json
{
  "city": "Paris",
  "country": "France"
}
```

The location of the viewer of the live stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the viewer of the live stream.|
|country|string|false|none|The country of the viewer of the live stream.|

<h2 id="tocS_live_stream_session_referrer">live_stream_session_referrer</h2>
<!-- backwards compatibility -->
<a id="schemalive_stream_session_referrer"></a>
<a id="schema_live_stream_session_referrer"></a>
<a id="tocSlive_stream_session_referrer"></a>
<a id="tocslive_stream_session_referrer"></a>

```json
{
  "medium": "organic",
  "searchTerm": "video stream",
  "source": "https://google.com",
  "url": "https://api.video"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medium|string|false|none|The type of search that brought the viewer to the live stream. Organic would be they found it on their own, paid would be they found it via an advertisement.|
|searchTerm|string|false|none|What term they searched for that led them to the live stream.|
|source|string|false|none|Where the viewer came from to see the live stream (usually where they searched from).|
|url|string|false|none|The website the viewer of the live stream was referred to in order to view the live stream.|

<h2 id="tocS_live_stream_session_session">live_stream_session_session</h2>
<!-- backwards compatibility -->
<a id="schemalive_stream_session_session"></a>
<a id="schema_live_stream_session_session"></a>
<a id="tocSlive_stream_session_session"></a>
<a id="tocslive_stream_session_session"></a>

```json
{
  "endedAt": "2019-06-24T12:45:01.109+00",
  "loadedAt": "2019-06-24T11:45:01.109+00",
  "sessionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endedAt|string(date-time)|false|none|When the session ended, with the date and time presented in ISO-8601 format.|
|loadedAt|string(date-time)|false|none|When the session started, with the date and time presented in ISO-8601 format.|
|sessionId|string|false|none|A unique identifier for your session. You can use this to track what happens during a specific session.|

<h2 id="tocS_metadata">metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "key": "Color",
  "value": "Green"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The constant that defines the data set.|
|value|string|false|none|A variable which belongs to the data set.|

<h2 id="tocS_not-found">not-found</h2>
<!-- backwards compatibility -->
<a id="schemanot-found"></a>
<a id="schema_not-found"></a>
<a id="tocSnot-found"></a>
<a id="tocsnot-found"></a>

```json
{
  "name": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|status|integer|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_pagination">pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "currentPage": 3,
  "currentPageItems": 20,
  "itemsTotal": 123,
  "links": {
    "first": {
      "rel": "first",
      "uri": "/videos/search?currentPage=1&pageSize=20"
    },
    "last": {
      "rel": "last",
      "uri": "/videos/search?currentPage=6&pageSize=20"
    },
    "next": {
      "rel": "next",
      "uri": "/videos/search?currentPage=4&pageSize=20"
    },
    "previous": {
      "rel": "previous",
      "uri": "/videos/search?currentPage=2&pageSize=20"
    }
  },
  "pageSize": 20,
  "pagesTotal": 7
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentPage|integer|false|read-only|The current page index.|
|currentPageItems|integer|false|read-only|The number of items on the current page.|
|itemsTotal|integer|false|read-only|Total number of items that exist.|
|links|[[pagination_link](#schemapagination_link)]|true|none|none|
|pageSize|integer|false|read-only|Maximum number of item per page.|
|pagesTotal|integer|false|read-only|Number of items listed in the current page.|

<h2 id="tocS_pagination_link">pagination_link</h2>
<!-- backwards compatibility -->
<a id="schemapagination_link"></a>
<a id="schema_pagination_link"></a>
<a id="tocSpagination_link"></a>
<a id="tocspagination_link"></a>

```json
{
  "rel": "string",
  "uri": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|false|none|none|
|uri|string(uri)|false|none|none|

<h2 id="tocS_player">player</h2>
<!-- backwards compatibility -->
<a id="schemaplayer"></a>
<a id="schema_player"></a>
<a id="tocSplayer"></a>
<a id="tocsplayer"></a>

```json
{
  "assets": {
    "link": "path/to/my/logo/mylogo.jpg",
    "logo": "mylogo.jpg"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "string",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "string",
  "shapeBackgroundBottom": "string",
  "shapeBackgroundTop": "string",
  "shapeMargin": 0,
  "shapeRadius": 0,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)",
  "createdAt": "2020-01-31T10:17:47+00:00",
  "playerId": "pl45KFKdlddgk654dspkze",
  "updatedAt": "2020-01-31T10:18:47+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundBottom|string|false|none|RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)|
|backgroundText|string|false|none|RGBA color for title text. Default: rgba(255, 255, 255, 1)|
|backgroundTop|string|false|none|RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)|
|enableApi|boolean|false|none|enable/disable player SDK access. Default: true|
|enableControls|boolean|false|none|enable/disable player controls. Default: true|
|forceAutoplay|boolean|false|none|enable/disable player autoplay. Default: false|
|forceLoop|boolean|false|none|enable/disable looping. Default: false|
|hideTitle|boolean|false|none|enable/disable title. Default: false|
|link|string|false|none|RGBA color for all controls. Default: rgba(255, 255, 255, 1)|
|linkHover|string|false|none|RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)|
|text|string|false|none|RGBA color for timer text. Default: rgba(255, 255, 255, 1)|
|trackBackground|string|false|none|RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)|
|trackPlayed|string|false|none|RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)|
|trackUnplayed|string|false|none|RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)|
|assets|object|false|none|none|
|createdAt|string(date-time)|false|none|When the player was created, presented in ISO-8601 format.|
|linkActive|string|false|none|Deprecated|
|playerId|string|false|none|none|
|shapeAspect|string|false|none|Deprecated|
|shapeBackgroundBottom|string|false|none|Deprecated|
|shapeBackgroundTop|string|false|none|Deprecated|
|shapeMargin|integer|false|none|Deprecated|
|shapeRadius|integer|false|none|Deprecated|
|updatedAt|string(date-time)|false|none|When the player was last updated, presented in ISO-8601 format.|

<h2 id="tocS_player-session-event">player-session-event</h2>
<!-- backwards compatibility -->
<a id="schemaplayer-session-event"></a>
<a id="schema_player-session-event"></a>
<a id="tocSplayer-session-event"></a>
<a id="tocsplayer-session-event"></a>

```json
{
  "at": 0,
  "emittedAt": "2019-06-24T11:45:01.109+00",
  "from": 0,
  "to": 0,
  "type": "play"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at|integer|false|none|none|
|emittedAt|string(date-time)|false|none|When an event occurred, presented in ISO-8601 format.|
|from|integer|false|none|none|
|to|integer|false|none|none|
|type|string|false|none|Possible values are: ready, play, pause, resume, seek.backward, seek.forward, end|

<h2 id="tocS_playerCreationPayload">playerCreationPayload</h2>
<!-- backwards compatibility -->
<a id="schemaplayercreationpayload"></a>
<a id="schema_playerCreationPayload"></a>
<a id="tocSplayercreationpayload"></a>
<a id="tocsplayercreationpayload"></a>

```json
{
  "assets": {
    "link": "https://api.video",
    "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeMargin": 10,
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundBottom|string|false|none|RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)|
|backgroundText|string|false|none|RGBA color for title text. Default: rgba(255, 255, 255, 1)|
|backgroundTop|string|false|none|RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)|
|enableApi|boolean|false|none|enable/disable player SDK access. Default: true|
|enableControls|boolean|false|none|enable/disable player controls. Default: true|
|forceAutoplay|boolean|false|none|enable/disable player autoplay. Default: false|
|forceLoop|boolean|false|none|enable/disable looping. Default: false|
|hideTitle|boolean|false|none|enable/disable title. Default: false|
|link|string|false|none|RGBA color for all controls. Default: rgba(255, 255, 255, 1)|
|linkHover|string|false|none|RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)|
|text|string|false|none|RGBA color for timer text. Default: rgba(255, 255, 255, 1)|
|trackBackground|string|false|none|RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)|
|trackPlayed|string|false|none|RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)|
|trackUnplayed|string|false|none|RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)|

<h2 id="tocS_playerUpdatePayload">playerUpdatePayload</h2>
<!-- backwards compatibility -->
<a id="schemaplayerupdatepayload"></a>
<a id="schema_playerUpdatePayload"></a>
<a id="tocSplayerupdatepayload"></a>
<a id="tocsplayerupdatepayload"></a>

```json
{
  "assets": {
    "link": "https://api.video",
    "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeMargin": 10,
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundBottom|string|false|none|RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)|
|backgroundText|string|false|none|RGBA color for title text. Default: rgba(255, 255, 255, 1)|
|backgroundTop|string|false|none|RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)|
|enableApi|boolean|false|none|enable/disable player SDK access. Default: true|
|enableControls|boolean|false|none|enable/disable player controls. Default: true|
|forceAutoplay|boolean|false|none|enable/disable player autoplay. Default: false|
|forceLoop|boolean|false|none|enable/disable looping. Default: false|
|hideTitle|boolean|false|none|enable/disable title. Default: false|
|link|string|false|none|RGBA color for all controls. Default: rgba(255, 255, 255, 1)|
|linkHover|string|false|none|RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)|
|text|string|false|none|RGBA color for timer text. Default: rgba(255, 255, 255, 1)|
|trackBackground|string|false|none|RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)|
|trackPlayed|string|false|none|RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)|
|trackUnplayed|string|false|none|RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)|

<h2 id="tocS_playerinput">playerinput</h2>
<!-- backwards compatibility -->
<a id="schemaplayerinput"></a>
<a id="schema_playerinput"></a>
<a id="tocSplayerinput"></a>
<a id="tocsplayerinput"></a>

```json
{
  "assets": {
    "link": "https://api.video",
    "logo": "https://cdn.api.video/player/pl14Db6oMJRH6SRVoOwORacK/logo.png"
  },
  "backgroundBottom": "rgba(94, 95, 89, 1)",
  "backgroundText": "rgba(255, 255, 255, .95)",
  "backgroundTop": "rgba(72, 4, 45, 1)",
  "enableApi": true,
  "enableControls": true,
  "forceAutoplay": false,
  "forceLoop": false,
  "hideTitle": false,
  "language": "en",
  "link": "rgba(255, 0, 0, .95)",
  "linkActive": "rgba(255, 0, 0, .75)",
  "linkHover": "rgba(255, 255, 255, .75)",
  "shapeAspect": "flat",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeMargin": 10,
  "shapeRadius": 3,
  "text": "rgba(255, 255, 255, .95)",
  "trackBackground": "rgba(0, 0, 0, 0)",
  "trackPlayed": "rgba(255, 255, 255, .95)",
  "trackUnplayed": "rgba(255, 255, 255, .1)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundBottom|string|false|none|RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)|
|backgroundText|string|false|none|RGBA color for title text. Default: rgba(255, 255, 255, 1)|
|backgroundTop|string|false|none|RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)|
|enableApi|boolean|false|none|enable/disable player SDK access. Default: true|
|enableControls|boolean|false|none|enable/disable player controls. Default: true|
|forceAutoplay|boolean|false|none|enable/disable player autoplay. Default: false|
|forceLoop|boolean|false|none|enable/disable looping. Default: false|
|hideTitle|boolean|false|none|enable/disable title. Default: false|
|link|string|false|none|RGBA color for all controls. Default: rgba(255, 255, 255, 1)|
|linkHover|string|false|none|RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)|
|text|string|false|none|RGBA color for timer text. Default: rgba(255, 255, 255, 1)|
|trackBackground|string|false|none|RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)|
|trackPlayed|string|false|none|RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)|
|trackUnplayed|string|false|none|RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)|

<h2 id="tocS_players-list-response">players-list-response</h2>
<!-- backwards compatibility -->
<a id="schemaplayers-list-response"></a>
<a id="schema_players-list-response"></a>
<a id="tocSplayers-list-response"></a>
<a id="tocsplayers-list-response"></a>

```json
{
  "data": [
    {
      "assets": {
        "link": "path/to/my/logo/mylogo.jpg",
        "logo": "mylogo.jpg"
      },
      "backgroundBottom": "rgba(94, 95, 89, 1)",
      "backgroundText": "rgba(255, 255, 255, .95)",
      "backgroundTop": "rgba(72, 4, 45, 1)",
      "enableApi": true,
      "enableControls": true,
      "forceAutoplay": false,
      "forceLoop": false,
      "hideTitle": false,
      "language": "en",
      "link": "rgba(255, 0, 0, .95)",
      "linkActive": "string",
      "linkHover": "rgba(255, 255, 255, .75)",
      "shapeAspect": "string",
      "shapeBackgroundBottom": "string",
      "shapeBackgroundTop": "string",
      "shapeMargin": 0,
      "shapeRadius": 0,
      "text": "rgba(255, 255, 255, .95)",
      "trackBackground": "rgba(0, 0, 0, 0)",
      "trackPlayed": "rgba(255, 255, 255, .95)",
      "trackUnplayed": "rgba(255, 255, 255, .1)",
      "createdAt": "2020-01-31T10:17:47+00:00",
      "playerId": "pl45KFKdlddgk654dspkze",
      "updatedAt": "2020-01-31T10:18:47+00:00"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[player](#schemaplayer)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|

<h2 id="tocS_players-upload-logo-payload">players-upload-logo-payload</h2>
<!-- backwards compatibility -->
<a id="schemaplayers-upload-logo-payload"></a>
<a id="schema_players-upload-logo-payload"></a>
<a id="tocSplayers-upload-logo-payload"></a>
<a id="tocsplayers-upload-logo-payload"></a>

```json
{
  "file": "mylogo.jpg",
  "link": "path/to/my/logo/mylogo.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The name of the file you want to use for your logo.|
|link|string(string)|true|none|The path to the file you want to upload and use as a logo.|

<h2 id="tocS_quality">quality</h2>
<!-- backwards compatibility -->
<a id="schemaquality"></a>
<a id="schema_quality"></a>
<a id="tocSquality"></a>
<a id="tocsquality"></a>

```json
{
  "quality": "720p",
  "status": "waiting"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quality|string|false|none|The quality of the video you have, in pixels. Choices include 360p, 480p, 720p, 1080p, and 2160p.|
|status|string|false|none|The status of your video. Statuses include waiting - the video is waiting to be encoded. encoding - the video is in the process of being encoded. encoded - the video was successfully encoded. failed - the video failed to be encoded.|

#### Enumerated Values

|Property|Value|
|---|---|
|quality|240p|
|quality|360p|
|quality|480p|
|quality|720p|
|quality|1080p|
|quality|2160p|
|status|waiting|
|status|encoding|
|status|encoded|
|status|failed|

<h2 id="tocS_raw-statistics-list-live-stream-analytics-response">raw-statistics-list-live-stream-analytics-response</h2>
<!-- backwards compatibility -->
<a id="schemaraw-statistics-list-live-stream-analytics-response"></a>
<a id="schema_raw-statistics-list-live-stream-analytics-response"></a>
<a id="tocSraw-statistics-list-live-stream-analytics-response"></a>
<a id="tocsraw-statistics-list-live-stream-analytics-response"></a>

```json
{
  "data": [
    {
      "client": {
        "name": "Firefox",
        "type": "browser",
        "version": "67.0"
      },
      "device": {
        "model": "unknown",
        "type": "desktop",
        "vendor": "Dell"
      },
      "location": {
        "city": "Paris",
        "country": "France"
      },
      "os": {
        "name": "Microsoft Windows",
        "shortname": "W10",
        "version": "Windows 10"
      },
      "referrer": {
        "medium": "organic",
        "searchTerm": "video stream",
        "source": "https://google.com",
        "url": "https://api.video"
      },
      "session": {
        "endedAt": "2019-06-24T12:45:01.109+00",
        "loadedAt": "2019-06-24T11:45:01.109+00",
        "sessionId": "string"
      }
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[live-stream-session](#schemalive-stream-session)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|

<h2 id="tocS_raw-statistics-list-player-session-events-response">raw-statistics-list-player-session-events-response</h2>
<!-- backwards compatibility -->
<a id="schemaraw-statistics-list-player-session-events-response"></a>
<a id="schema_raw-statistics-list-player-session-events-response"></a>
<a id="tocSraw-statistics-list-player-session-events-response"></a>
<a id="tocsraw-statistics-list-player-session-events-response"></a>

```json
{
  "data": [
    {
      "at": 0,
      "emittedAt": "2019-06-24T11:45:01.109+00",
      "from": 0,
      "to": 0,
      "type": "play"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[player-session-event](#schemaplayer-session-event)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|

<h2 id="tocS_raw-statistics-list-sessions-response">raw-statistics-list-sessions-response</h2>
<!-- backwards compatibility -->
<a id="schemaraw-statistics-list-sessions-response"></a>
<a id="schema_raw-statistics-list-sessions-response"></a>
<a id="tocSraw-statistics-list-sessions-response"></a>
<a id="tocsraw-statistics-list-sessions-response"></a>

```json
{
  "data": [
    {
      "client": {
        "name": "Firefox",
        "type": "browser",
        "version": "67.0"
      },
      "device": {
        "model": "unknown",
        "type": "desktop",
        "vendor": "Dell"
      },
      "location": {
        "city": "Paris",
        "country": "France"
      },
      "os": {
        "name": "Microsoft Windows",
        "shortname": "W10",
        "version": "Windows10"
      },
      "referrer": {
        "medium": "organic",
        "searchTerm": "video encoding hosting and delivery",
        "source": "https://google.com",
        "url": "https://api.video"
      },
      "session": {
        "endedAt": "2019-06-24T11:49:19.243+00",
        "loadedAt": "2019-06-24T11:45:01.109+00",
        "sessionId": "psEmFwGQUAXR2lFHj5nDOpy"
      }
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[video-session](#schemavideo-session)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|

<h2 id="tocS_refresh-token-payload">refresh-token-payload</h2>
<!-- backwards compatibility -->
<a id="schemarefresh-token-payload"></a>
<a id="schema_refresh-token-payload"></a>
<a id="tocSrefresh-token-payload"></a>
<a id="tocsrefresh-token-payload"></a>

```json
{
  "refreshToken": "def502005346d9cc2bd79a7793ab5bdabfefcaabfbb8c253f14733f1262077e1a3f38c4751d6d20f590c3784e531a82adc11f05fc1949aa46d5575aaa99cb84b9334ba66ac773576b5d7a418937ae337de62811d086dd42ad1164b12f87d67be6ffea18f2d50be9b95697b21c4d3c4372849bdb2287259cb80541570e913691a08b2fa33c85885930de15cebea627fc09f0255562ab3d39d87d4ff8fc02b00e252afcd480421dec7de9d1411176bcf669c527762e22294b453bc9ea06e9fa8ba5b873feb2ee14ce0a6a6ddd4b78c580631e210e9b9387265dc2bec9478a66a09dcdce1c40d2f856689e9d81742c9628a0b87b359e0b218ea1f07427eef89f999e47af89792f598e05847bd008fddc32ee63f4a601ffb4cd2ad08977f1c854ec358238322c918f05aa5a41f8a171dee497218408abc8283473f6112aeed7310815416a0fa36c63667e0ed014fa40b8992891bf58bae400d901c01450101c88f4978938ad138adc19cfe5698d60fd82cb27c586f6a8f70f4393c7c9e579df8739d46d249fb76d7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refreshToken|string|true|none|The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it's the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token.<br>|

<h2 id="tocS_subtitle">subtitle</h2>
<!-- backwards compatibility -->
<a id="schemasubtitle"></a>
<a id="schema_subtitle"></a>
<a id="tocSsubtitle"></a>
<a id="tocssubtitle"></a>

```json
{
  "default": false,
  "src": "string",
  "srclang": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|Whether you will have subtitles or not. True for yes you will have subtitles, false for no you will not have subtitles.|
|src|string|false|none|none|
|srclang|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_token-create-payload">token-create-payload</h2>
<!-- backwards compatibility -->
<a id="schematoken-create-payload"></a>
<a id="schema_token-create-payload"></a>
<a id="tocStoken-create-payload"></a>
<a id="tocstoken-create-payload"></a>

```json
{
  "ttl": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|integer|false|none|Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.|

<h2 id="tocS_token-list-response">token-list-response</h2>
<!-- backwards compatibility -->
<a id="schematoken-list-response"></a>
<a id="schema_token-list-response"></a>
<a id="tocStoken-list-response"></a>
<a id="tocstoken-list-response"></a>

```json
{
  "data": [
    {
      "createdAt": "2019-12-16T08:25:51+00:00",
      "expiresAt": "2019-12-16T09:25:51+00:00",
      "token": "to1tcmSFHeYY5KzyhOqVKMKb",
      "ttl": 0
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[upload-token](#schemaupload-token)]|true|none|none|
|pagination|[pagination](#schemapagination)|true|none|none|

<h2 id="tocS_token-upload-payload">token-upload-payload</h2>
<!-- backwards compatibility -->
<a id="schematoken-upload-payload"></a>
<a id="schema_token-upload-payload"></a>
<a id="tocStoken-upload-payload"></a>
<a id="tocstoken-upload-payload"></a>

```json
{
  "file": "path/to/video/video.mp4",
  "videoId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The path to the video you want to upload.|
|videoId|string|false|none|The video id returned by the first call to this endpoint in a large video upload scenario.|

<h2 id="tocS_upload-token">upload-token</h2>
<!-- backwards compatibility -->
<a id="schemaupload-token"></a>
<a id="schema_upload-token"></a>
<a id="tocSupload-token"></a>
<a id="tocsupload-token"></a>

```json
{
  "createdAt": "2019-12-16T08:25:51+00:00",
  "expiresAt": "2019-12-16T09:25:51+00:00",
  "token": "to1tcmSFHeYY5KzyhOqVKMKb",
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|When the token was created, displayed in ISO-8601 format.|
|expiresAt|string(date-time)|false|none|When the token expires, displayed in ISO-8601 format.|
|token|string|false|none|The unique identifier for the token you will use to authenticate an upload.|
|ttl|integer|false|none|Time-to-live - how long the upload token is valid for.|

<h2 id="tocS_video">video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "actions": [
    "video_delete",
    "video_download",
    "video_update"
  ],
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "publishedAt": "4665-07-14T23:36:18.598Z",
  "scheduledAt": "4251-03-03T12:52:03.085Z",
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video",
  "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[videoAssets](#schemavideoassets)|false|none|Collection of details about the video object that you can use to work with the video object.|
|description|string|false|none|A description for the video content.<br>|
|metadata|[[metadata](#schemametadata)]|false|none|Metadata you can use to categorise and filter videos. Metadata is a list of dictionaries, where each dictionary represents a key value pair for categorising a video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.<br>|
|mp4Support|boolean|false|none|This lets you know whether mp4 is supported. If enabled, an mp4 URL will be provided in the response for the video.<br>|
|panoramic|boolean|false|none|Defines if video is panoramic.<br>|
|playerId|string|false|none|The id of the player that will be applied on the video.<br>|
|public|boolean|false|none|Defines if the content is publicly reachable or if a unique token is needed for each play session. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).<br>|
|publishedAt|string|false|none|The date and time the API created the video. Date and time are provided using ISO-8601 UTC format.|
|source|[videoSource](#schemavideosource)|false|none|Source information about the video.|
|tags|[object]|false|none|One array of tags (each tag is a string) in order to categorize a video. Tags may include spaces. <br>|
|title|string|false|none|The title of the video content.<br>|
|updatedAt|string(date-time)|false|none|The date and time the video was updated. Date and time are provided using ISO-8601 UTC format.|
|videoId|string|false|none|The unique identifier of the video object.|

<h2 id="tocS_video-create-payload">video-create-payload</h2>
<!-- backwards compatibility -->
<a id="schemavideo-create-payload"></a>
<a id="schema_video-create-payload"></a>
<a id="tocSvideo-create-payload"></a>
<a id="tocsvideo-create-payload"></a>

```json
{
  "description": "An amazing video explaining string theory.",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "Maths video"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A brief description of your video.|
|metadata|[[metadata](#schemametadata)]|false|none|A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata).|
|mp4Support|boolean|false|none|Enables mp4 version in addition to streamed version.|
|panoramic|boolean|false|none|Indicates if your video is a 360/immersive video.|
|playerId|string|false|none|The unique identification number for your video player.|
|public|boolean|false|none|Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).|
|publishedAt|string(date-time)|false|none|The API uses ISO-8601 format for time, and includes 3 places for milliseconds.|
|source|string|false|none|If you add a video already on the web, this is where you enter the url for the video.|
|tags|[string]|false|none|A list of tags you want to use to describe your video.|
|title|string|true|none|The title of your new video.|

<h2 id="tocS_video-session">video-session</h2>
<!-- backwards compatibility -->
<a id="schemavideo-session"></a>
<a id="schema_video-session"></a>
<a id="tocSvideo-session"></a>
<a id="tocsvideo-session"></a>

```json
{
  "client": {
    "name": "Firefox",
    "type": "browser",
    "version": "67.0"
  },
  "device": {
    "model": "unknown",
    "type": "desktop",
    "vendor": "Dell"
  },
  "location": {
    "city": "Paris",
    "country": "France"
  },
  "os": {
    "name": "Microsoft Windows",
    "shortname": "W10",
    "version": "Windows10"
  },
  "referrer": {
    "medium": "organic",
    "searchTerm": "video encoding hosting and delivery",
    "source": "https://google.com",
    "url": "https://api.video"
  },
  "session": {
    "endedAt": "2019-06-24T11:49:19.243+00",
    "loadedAt": "2019-06-24T11:45:01.109+00",
    "sessionId": "psEmFwGQUAXR2lFHj5nDOpy"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[video_session_client](#schemavideo_session_client)|false|none|What kind of browser the viewer is using for the video session.|
|device|[video_session_device](#schemavideo_session_device)|false|none|What type of device the user is on when in the video session.|
|location|[video_session_location](#schemavideo_session_location)|false|none|The location of the viewer.|
|os|[video_session_os](#schemavideo_session_os)|false|none|The operating system the viewer is on.|
|referrer|[video_session_referrer](#schemavideo_session_referrer)|false|none|none|
|session|[video_session_session](#schemavideo_session_session)|false|none|none|

<h2 id="tocS_video-thumbnail-pick-payload">video-thumbnail-pick-payload</h2>
<!-- backwards compatibility -->
<a id="schemavideo-thumbnail-pick-payload"></a>
<a id="schema_video-thumbnail-pick-payload"></a>
<a id="tocSvideo-thumbnail-pick-payload"></a>
<a id="tocsvideo-thumbnail-pick-payload"></a>

```json
{
  "timecode": "00:00:00.000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timecode|string|true|none|Frame in video to be used as a placeholder before the video plays. <br>Example: '"00:01:00.000" for 1 minute into the video.'<br>Valid Patterns: <br>"hh:mm:ss.ms"<br>"hh:mm:ss:frameNumber"<br>"124" (integer value is reported as seconds) <br>If selection is out of range, "00:00:00.00" will be chosen.|

<h2 id="tocS_video-thumbnail-upload-payload">video-thumbnail-upload-payload</h2>
<!-- backwards compatibility -->
<a id="schemavideo-thumbnail-upload-payload"></a>
<a id="schema_video-thumbnail-upload-payload"></a>
<a id="tocSvideo-thumbnail-upload-payload"></a>
<a id="tocsvideo-thumbnail-upload-payload"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The image to be added as a thumbnail.|

<h2 id="tocS_video-update-payload">video-update-payload</h2>
<!-- backwards compatibility -->
<a id="schemavideo-update-payload"></a>
<a id="schema_video-update-payload"></a>
<a id="tocSvideo-update-payload"></a>
<a id="tocsvideo-update-payload"></a>

```json
{
  "description": "An amazing video explaining the string theory",
  "metadata": [
    {
      "key": "Author",
      "value": "John Doe"
    },
    {
      "key": "Format",
      "value": "Tutorial"
    }
  ],
  "mp4Support": true,
  "panoramic": false,
  "playerId": "pl45KFKdlddgk654dspkze",
  "public": false,
  "tags": [
    "maths",
    "string theory",
    "video"
  ],
  "title": "String theory"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A brief description of the video.|
|metadata|[[metadata](#schemametadata)]|false|none|A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.|
|mp4Support|boolean|false|none|Whether the player supports the mp4 format.|
|panoramic|boolean|false|none|Whether the video is a 360 degree or immersive video.|
|playerId|string|false|none|The unique ID for the player you want to associate with your video.|
|public|boolean|false|none|Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).|
|tags|[string]|false|none|A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.|
|title|string|false|none|The title you want to use for your video.|

<h2 id="tocS_video-upload-payload">video-upload-payload</h2>
<!-- backwards compatibility -->
<a id="schemavideo-upload-payload"></a>
<a id="schema_video-upload-payload"></a>
<a id="tocSvideo-upload-payload"></a>
<a id="tocsvideo-upload-payload"></a>

```json
{
  "file": "@/path/to/video.mp4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the "/videos" endpoint and add the "source" parameter when you create a new video.|

<h2 id="tocS_videoAssets">videoAssets</h2>
<!-- backwards compatibility -->
<a id="schemavideoassets"></a>
<a id="schema_videoAssets"></a>
<a id="tocSvideoassets"></a>
<a id="tocsvideoassets"></a>

```json
{
  "hls": "http://example.com",
  "iframe": "<iframe src=\"//embed.api.video/c188ed58-3403-46a2-b91b-44603d10b2c9?token=831a9bd9-9f50-464c-a369-8e9d914371ae\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"\"></iframe>",
  "mp4": "https://cdn.api.video/vod/vi4k0jvEUuaTdRAEjQ4Jfrgz/token/8fd70443-d9f0-45d2-b01c-12c8cfc707c9/mp4/720/source.mp4",
  "player": "https://embed.api.video/1b9d6ae8-8f57-4b6d-8552-d636926b4f5f?token=831a9bd9-9f50-464c-a369-8e9d914371ae",
  "thumbnail": "https://cdn.api.video/stream/831a9bd9-9f50-464c-a369-8e9d914371ae/thumbnail.jpg"
}
```

Collection of details about the video object that you can use to work with the video object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hls|string(uri)|false|none|This is the manifest URL. For HTTP Live Streaming (HLS), when a HLS video stream is initiated, the first file to download is the manifest. This file has the extension M3U8, and provides the video player with information about the various bitrates available for streaming.|
|iframe|string|false|none|Code to use video from a third party website|
|mp4|string(uri)|false|none|Available only if mp4Support is enabled. Raw mp4 url.|
|player|string(uri)|false|none|Raw url of the player.|
|thumbnail|string(uri)|false|none|Poster of the video.|

<h2 id="tocS_videoSource">videoSource</h2>
<!-- backwards compatibility -->
<a id="schemavideosource"></a>
<a id="schema_videoSource"></a>
<a id="tocSvideosource"></a>
<a id="tocsvideosource"></a>

```json
{
  "liveStream": {
    "links": [
      {
        "rel": "string",
        "uri": "string"
      }
    ],
    "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr"
  },
  "type": "string",
  "uri": "/videos/vi4k0jvEUuaTdRAEjQ4Prklg/source"
}
```

Source information about the video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liveStream|[video_source_live_stream](#schemavideo_source_live_stream)|false|none|This appears if the video is from a Live Record.|
|type|string|false|none|none|
|uri|string|false|none|The URL where the video is stored.|

<h2 id="tocS_video_session_client">video_session_client</h2>
<!-- backwards compatibility -->
<a id="schemavideo_session_client"></a>
<a id="schema_video_session_client"></a>
<a id="tocSvideo_session_client"></a>
<a id="tocsvideo_session_client"></a>

```json
{
  "name": "Firefox",
  "type": "browser",
  "version": "67.0"
}
```

What kind of browser the viewer is using for the video session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the browser used to view the video session.|
|type|string|false|none|The type of client used to view the video session.|
|version|string|false|none|The version of the browser used to view the video session.|

<h2 id="tocS_video_session_device">video_session_device</h2>
<!-- backwards compatibility -->
<a id="schemavideo_session_device"></a>
<a id="schema_video_session_device"></a>
<a id="tocSvideo_session_device"></a>
<a id="tocsvideo_session_device"></a>

```json
{
  "model": "unknown",
  "type": "desktop",
  "vendor": "Dell"
}
```

What type of device the user is on when in the video session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The specific model of the device, if known.|
|type|string|false|none|What the type is like desktop, laptop, mobile.|
|vendor|string|false|none|If known, what the brand of the device is, like Apple, Dell, etc.|

<h2 id="tocS_video_session_location">video_session_location</h2>
<!-- backwards compatibility -->
<a id="schemavideo_session_location"></a>
<a id="schema_video_session_location"></a>
<a id="tocSvideo_session_location"></a>
<a id="tocsvideo_session_location"></a>

```json
{
  "city": "Paris",
  "country": "France"
}
```

The location of the viewer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the viewer.|
|country|string|false|none|The country of the viewer.|

<h2 id="tocS_video_session_os">video_session_os</h2>
<!-- backwards compatibility -->
<a id="schemavideo_session_os"></a>
<a id="schema_video_session_os"></a>
<a id="tocSvideo_session_os"></a>
<a id="tocsvideo_session_os"></a>

```json
{
  "name": "Microsoft Windows",
  "shortname": "W10",
  "version": "Windows 10"
}
```

The operating system the viewer is on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the operating system.|
|shortname|string|false|none|The nickname for the operating system, often representing the version.|
|version|string|false|none|The version of the operating system.|

<h2 id="tocS_video_session_referrer">video_session_referrer</h2>
<!-- backwards compatibility -->
<a id="schemavideo_session_referrer"></a>
<a id="schema_video_session_referrer"></a>
<a id="tocSvideo_session_referrer"></a>
<a id="tocsvideo_session_referrer"></a>

```json
{
  "medium": "organic",
  "searchTerm": "string",
  "source": "https://google.com",
  "url": "https://api.video"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medium|string|false|none|How they arrived at the site, for example organic or paid. Organic meaning they found it themselves and paid meaning they followed a link from an advertisement.|
|searchTerm|string|false|none|The search term they typed to arrive at the video session.|
|source|string|false|none|The source the referrer came from to the video session. For example if they searched through google to find the stream.|
|url|string|false|none|The link the viewer used to reach the video session.|

<h2 id="tocS_video_session_session">video_session_session</h2>
<!-- backwards compatibility -->
<a id="schemavideo_session_session"></a>
<a id="schema_video_session_session"></a>
<a id="tocSvideo_session_session"></a>
<a id="tocsvideo_session_session"></a>

```json
{
  "endedAt": "2019-06-24T12:45:01.109+00",
  "loadedAt": "2019-06-24T11:45:01.109+00",
  "sessionId": "psEmFwGQUAXR2lFHj5nDOpy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endedAt|string(date-time)|false|none|When the video session ended, presented in ISO-8601 format.|
|loadedAt|string(date-time)|false|none|When the video session started, presented in ISO-8601 format.|
|sessionId|string|false|none|The unique identifier for the session that you can use to track what happens during it.|

<h2 id="tocS_video_source_live_stream">video_source_live_stream</h2>
<!-- backwards compatibility -->
<a id="schemavideo_source_live_stream"></a>
<a id="schema_video_source_live_stream"></a>
<a id="tocSvideo_source_live_stream"></a>
<a id="tocsvideo_source_live_stream"></a>

```json
{
  "links": [
    {
      "rel": "string",
      "uri": "string"
    }
  ],
  "liveStreamId": "li400mYKSgQ6xs7taUeSaEKr"
}
```

This appears if the video is from a Live Record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[video_source_live_stream_link](#schemavideo_source_live_stream_link)]|false|none|none|
|liveStreamId|string|false|none|The unique identifier for the live stream.|

<h2 id="tocS_video_source_live_stream_link">video_source_live_stream_link</h2>
<!-- backwards compatibility -->
<a id="schemavideo_source_live_stream_link"></a>
<a id="schema_video_source_live_stream_link"></a>
<a id="tocSvideo_source_live_stream_link"></a>
<a id="tocsvideo_source_live_stream_link"></a>

```json
{
  "rel": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rel|string|false|none|none|
|uri|string|false|none|none|

<h2 id="tocS_videos-list-response">videos-list-response</h2>
<!-- backwards compatibility -->
<a id="schemavideos-list-response"></a>
<a id="schema_videos-list-response"></a>
<a id="tocSvideos-list-response"></a>
<a id="tocsvideos-list-response"></a>

```json
{
  "data": [
    {
      "actions": [
        "video_delete",
        "video_download",
        "video_update"
      ],
      "description": "An amazing video explaining the string theory",
      "metadata": [
        {
          "key": "Author",
          "value": "John Doe"
        },
        {
          "key": "Format",
          "value": "Tutorial"
        }
      ],
      "publishedAt": "4665-07-14T23:36:18.598Z",
      "scheduledAt": "4251-03-03T12:52:03.085Z",
      "tags": [
        "maths",
        "string theory",
        "video"
      ],
      "title": "Maths video",
      "videoId": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[video](#schemavideo)]|true|none|none|
|pagination|[pagination](#schemapagination)|true|none|none|

<h2 id="tocS_videostatus">videostatus</h2>
<!-- backwards compatibility -->
<a id="schemavideostatus"></a>
<a id="schema_videostatus"></a>
<a id="tocSvideostatus"></a>
<a id="tocsvideostatus"></a>

```json
{
  "encoding": {
    "metadata": {
      "aspectRatio": "16/9",
      "audioCodec": "aac",
      "bitrate": 411.218,
      "duration": 4176,
      "framerate": 24,
      "height": 240,
      "samplerate": 48000,
      "videoCodec": "h264",
      "width": 424
    },
    "playable": true,
    "qualities": [
      {
        "quality": "240p",
        "status": "encoded"
      },
      {
        "quality": "360p",
        "status": "encoded"
      },
      {
        "quality": "480p",
        "status": "encoded"
      },
      {
        "quality": "720p",
        "status": "encoded"
      },
      {
        "quality": "1080p",
        "status": "encoding"
      },
      {
        "quality": "2160p",
        "status": "waiting"
      }
    ]
  },
  "ingest": {
    "filesize": 273579401,
    "receivedBytes": [
      {
        "from": 0,
        "to": 134217727,
        "total": 273579401
      },
      {
        "from": 134217728,
        "to": 268435455,
        "total": 273579401
      },
      {
        "from": 268435456,
        "to": 273579400,
        "total": 273579401
      }
    ],
    "status": "uploaded"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|[videostatus_encoding](#schemavideostatus_encoding)|false|none|none|
|ingest|[videostatus_ingest](#schemavideostatus_ingest)|false|none|Details about the capturing, transferring, and storing of your video for use immediately or in the future.|

<h2 id="tocS_videostatus_encoding">videostatus_encoding</h2>
<!-- backwards compatibility -->
<a id="schemavideostatus_encoding"></a>
<a id="schema_videostatus_encoding"></a>
<a id="tocSvideostatus_encoding"></a>
<a id="tocsvideostatus_encoding"></a>

```json
{
  "metadata": {
    "aspectRatio": "string",
    "audioCodec": "string",
    "bitrate": 0,
    "duration": 0,
    "framerate": 60,
    "height": 0,
    "samplerate": 48000,
    "videoCodec": "string",
    "width": 0
  },
  "playable": true,
  "qualities": [
    {
      "quality": "720p",
      "status": "waiting"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[videostatus_encoding_metadata](#schemavideostatus_encoding_metadata)|false|none|none|
|playable|boolean|false|none|Whether the video is playable or not.|
|qualities|[[quality](#schemaquality)]|false|none|Available qualities the video can be viewed in.|

<h2 id="tocS_videostatus_encoding_metadata">videostatus_encoding_metadata</h2>
<!-- backwards compatibility -->
<a id="schemavideostatus_encoding_metadata"></a>
<a id="schema_videostatus_encoding_metadata"></a>
<a id="tocSvideostatus_encoding_metadata"></a>
<a id="tocsvideostatus_encoding_metadata"></a>

```json
{
  "aspectRatio": "string",
  "audioCodec": "string",
  "bitrate": 0,
  "duration": 0,
  "framerate": 60,
  "height": 0,
  "samplerate": 48000,
  "videoCodec": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspectRatio|string|false|none|none|
|audioCodec|string|false|none|The method used to compress and decompress digital audio for your video.|
|bitrate|number|false|none|The number of bits processed per second.|
|duration|integer|false|none|The length of the video.|
|framerate|integer|false|none|The frequency with which consecutive images or frames appear on a display. Shown in this API as frames per second (fps).|
|height|integer|false|none|The height of the video in pixels.|
|samplerate|integer|false|none|How many samples per second a digital audio system uses to record an audio signal. The higher the rate, the higher the frequencies that can be recorded. They are presented in this API using hertz.|
|videoCodec|string|false|none|The method used to compress and decompress digital video. API Video supports all codecs in the libavcodec library. |
|width|integer|false|none|The width of the video in pixels.|

<h2 id="tocS_videostatus_ingest">videostatus_ingest</h2>
<!-- backwards compatibility -->
<a id="schemavideostatus_ingest"></a>
<a id="schema_videostatus_ingest"></a>
<a id="tocSvideostatus_ingest"></a>
<a id="tocsvideostatus_ingest"></a>

```json
{
  "filesize": 200000,
  "receivedBytes": [
    {
      "from": 0,
      "to": 9999,
      "total": 10000
    }
  ],
  "status": "uploaded"
}
```

Details about the capturing, transferring, and storing of your video for use immediately or in the future.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filesize|integer|false|none|The size of your file in bytes.|
|receivedBytes|[[bytes_range](#schemabytes_range)]|false|none|The total number of bytes received, listed for each chunk of the upload.|
|status|string|false|none|There are three possible ingest statuses. missing - you are missing information required to ingest the video. uploading - the video is in the process of being uploaded. uploaded - the video is ready for use.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|missing|
|status|uploading|
|status|uploaded|

<h2 id="tocS_webhook">webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "createdAt": "2019-06-24T11:45:01.109+00",
  "events": "[\"video.encoding.quality.completed\"]",
  "url": "http://clientnotificationserver.com/notif?myquery=query",
  "webhookId": "webhook_XXXXXXXXXXXXXXX"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|When an webhook was created, presented in ISO-8601 format.|
|events|[string]|false|none|A list of events that will trigger the webhook.|
|url|string|false|none|URL of the webhook|
|webhookId|string|false|none|Unique identifier of the webhook|

<h2 id="tocS_webhooks-create-payload">webhooks-create-payload</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks-create-payload"></a>
<a id="schema_webhooks-create-payload"></a>
<a id="tocSwebhooks-create-payload"></a>
<a id="tocswebhooks-create-payload"></a>

```json
{
  "events": [
    "video.encoding.quality.completed"
  ],
  "url": "http://clientnotificationserver.com/notif?myquery=query"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[string]|true|none|A list of the webhooks that you are subscribing to. There are Currently four webhook options:<br>* ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.<br>* ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.<br>* ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.<br>* ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.|
|url|string|true|none|The the url to which HTTP notifications are sent. It could be any http or https URL.|

<h2 id="tocS_webhooks-list-response">webhooks-list-response</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks-list-response"></a>
<a id="schema_webhooks-list-response"></a>
<a id="tocSwebhooks-list-response"></a>
<a id="tocswebhooks-list-response"></a>

```json
{
  "data": [
    {
      "createdAt": "2019-06-24T11:45:01.109+00",
      "events": "[\"video.encoding.quality.completed\"]",
      "url": "http://clientnotificationserver.com/notif?myquery=query",
      "webhookId": "webhook_XXXXXXXXXXXXXXX"
    }
  ],
  "pagination": {
    "currentPage": 3,
    "currentPageItems": 20,
    "itemsTotal": 123,
    "links": {
      "first": {
        "rel": "first",
        "uri": "/videos/search?currentPage=1&pageSize=20"
      },
      "last": {
        "rel": "last",
        "uri": "/videos/search?currentPage=6&pageSize=20"
      },
      "next": {
        "rel": "next",
        "uri": "/videos/search?currentPage=4&pageSize=20"
      },
      "previous": {
        "rel": "previous",
        "uri": "/videos/search?currentPage=2&pageSize=20"
      }
    },
    "pageSize": 20,
    "pagesTotal": 7
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[webhook](#schemawebhook)]|false|none|none|
|pagination|[pagination](#schemapagination)|false|none|none|
