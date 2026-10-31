<h1 id="tvmaze-user-api">TVmaze user API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Access to the user API is only possible for users with a [premium](http://www.tvmaze.com/premium) account. A user can only access their own user data.

Authentication uses HTTP Basic. Use the TVmaze username as authentication username, and the TVmaze API key as authentication password. Your API key can be found on your [dashboard](http://www.tvmaze.com/dashboard). To try out these API calls from this page, click the "Authorize" button on top and input your credentials.

Base URLs:

* <a href="https://api.tvmaze.com/v1">https://api.tvmaze.com/v1</a>

* <a href="http://api.tvmaze.com/v1">http://api.tvmaze.com/v1</a>

Web: <a href="http://www.tvmaze.com">http://www.tvmaze.com</a> 

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="tvmaze-user-api-auth">auth</h1>

## Poll whether an authentication request was confirmed

> Code samples

```bash
curl https://example.com/auth/poll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "token": "string"
  }'
```

`POST /auth/poll`

Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.

When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.

For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.


> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="poll-whether-an-authentication-request-was-confirmed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "apikey": "string",
  "username": "string"
}
```

<h3 id="poll-whether-an-authentication-request-was-confirmed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user confirmed the authentication request|Inline|
|403|Forbidden|The authentication request was not confirmed yet|None|
|404|Not Found|The authentication request was not found|None|
|429|Too Many Requests|You are polling too quickly, please back off|None|

<h3 id="poll-whether-an-authentication-request-was-confirmed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apikey|string|false|none|The user's API key|
|username|string|false|none|The user's username|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Start an authentication request

> Code samples

```bash
curl https://example.com/auth/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "email": "string",
    "email_confirmation": true
  }'
```

`POST /auth/start`

If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.

To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.

Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.


> Body parameter

```json
{
  "email": "string",
  "email_confirmation": true
}
```

<h3 id="start-an-authentication-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|false|The user's email address|
|» email_confirmation|body|boolean|false|Whether to email the user a confirmation link|

> Example responses

> 200 Response

```json
{
  "confirm_url": "string",
  "token": "string"
}
```

<h3 id="start-an-authentication-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The authentication request was succesfully started|Inline|
|401|Unauthorized|The email address was found, but not confirmed|None|
|404|Not Found|The email address was not found|None|
|429|Too Many Requests|You are starting authentication requests too quickly, please back off|None|

<h3 id="start-an-authentication-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirm_url|string|false|none|URL where the user can confirm the authentication request|
|token|string|false|none|Authentication token to use in the `poll` endpoint|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Validate your authentication credentials

> Code samples

```bash
curl https://example.com/auth/validate \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /auth/validate`

If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.

> Example responses

> 200 Response

```json
{
  "premium": 0
}
```

<h3 id="validate-your-authentication-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The supplied credentials are valid|Inline|
|401|Unauthorized|The supplied credentials are not valid|None|

<h3 id="validate-your-authentication-credentials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|premium|integer|false|none|The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-scrobbling">scrobbling</h1>

## Mark episodes as acquired or watched based on their IDs

> Code samples

```bash
curl https://example.com/scrobble/episodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "episode_id": 0,
      "marked_at": 0,
      "type": null
    }
  ]'
```

`POST /scrobble/episodes`

This endpoint can be used by all users, even without premium

> Body parameter

```json
[
  {
    "episode_id": 0,
    "marked_at": 0,
    "type": null
  }
]
```

<h3 id="mark-episodes-as-acquired-or-watched-based-on-their-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|false|none|
|» episode_id|body|integer|false|The TVmaze episode ID|
|» marked_at|body|integer|false|Epoch timestamp for when the user watched the episode, or 0 for unknown.|
|» type|body|[MarkType](#schemamarktype)|false|0 for watched, 1 for acquired, 2 for skipped|

> Example responses

> 200 Response

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

> 207 Response

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

> 422 Response

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

<h3 id="mark-episodes-as-acquired-or-watched-based-on-their-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All episodes were succesfully marked|[BulkResponse](#schemabulkresponse)|
|207|Multi-Status|Some episodes were succesfully marked, but there are errors|[BulkResponse](#schemabulkresponse)|
|422|Unprocessable Entity|None of the episodes were succesfully marked|[BulkResponse](#schemabulkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Mark an episode as acquired or watched based on its ID

> Code samples

```bash
curl https://example.com/scrobble/episodes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "_embedded": {
      "episode": {}
    },
    "marked_at": 0,
    "type": null
  }'
```

`PUT /scrobble/episodes/{episode_id}`

This endpoint can be used by all users, even without premium

> Body parameter

```json
{
  "_embedded": {
    "episode": {}
  },
  "marked_at": 0,
  "type": null
}
```

<h3 id="mark-an-episode-as-acquired-or-watched-based-on-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|
|body|body|[MarkedEpisode](#schemamarkedepisode)|false|none|
|» _embedded|body|object|false|none|
|» » episode|body|[Episode](#schemaepisode)|false|none|
|» marked_at|body|integer|false|Epoch timestamp for when the user watched the episode, or 0 for unknown.|
|» type|body|[MarkType](#schemamarktype)|false|0 for watched, 1 for acquired, 2 for skipped|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "episode": {}
  },
  "episode_id": 0,
  "marked_at": 0,
  "type": null
}
```

<h3 id="mark-an-episode-as-acquired-or-watched-based-on-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|this episode is now marked|[MarkedEpisode](#schemamarkedepisode)|
|404|Not Found|this episode does not exist|None|
|422|Unprocessable Entity|invalid input data|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Mark episodes within a show as acquired or watched based on their attributes

> Code samples

```bash
curl https://example.com/scrobble/shows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "airdate": "1970-01-01",
      "episode": 0,
      "marked_at": 0,
      "season": 0,
      "type": null
    }
  ]'
```

`POST /scrobble/shows`

To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.

This endpoint can be used by all users, even without premium.


> Body parameter

```json
[
  {
    "airdate": "1970-01-01",
    "episode": 0,
    "marked_at": 0,
    "season": 0,
    "type": null
  }
]
```

<h3 id="mark-episodes-within-a-show-as-acquired-or-watched-based-on-their-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tvmaze_id|query|integer|false|The show's TVmaze ID|
|thetvdb_id|query|integer|false|The show's TheTVDB ID|
|imdb_id|query|integer|false|The show's IMDB ID|
|body|body|[object]|false|none|
|» airdate|body|string(date)|false|The episode airdate|
|» episode|body|integer|false|The episode number|
|» marked_at|body|integer|false|Epoch timestamp for when the user watched the episode, or 0 for unknown.|
|» season|body|integer|false|The season number|
|» type|body|[MarkType](#schemamarktype)|false|0 for watched, 1 for acquired, 2 for skipped|

> Example responses

> 200 Response

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

> 207 Response

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

> 422 Response

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

<h3 id="mark-episodes-within-a-show-as-acquired-or-watched-based-on-their-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All episodes were succesfully marked|[BulkResponse](#schemabulkresponse)|
|207|Multi-Status|Some episodes were succesfully marked, but there are errors|[BulkResponse](#schemabulkresponse)|
|422|Unprocessable Entity|None of the episodes were succesfully marked|[BulkResponse](#schemabulkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## List watched and acquired episodes for a show

> Code samples

```bash
curl https://example.com/scrobble/shows/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /scrobble/shows/{show_id}`

This endpoint can be used by all users, even without premium

<h3 id="list-watched-and-acquired-episodes-for-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|ID of the target show|
|embed|query|string|false|Embed full episode info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|episode|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "episode": {}
    },
    "episode_id": 0,
    "marked_at": 0,
    "type": null
  }
]
```

<h3 id="list-watched-and-acquired-episodes-for-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of marked episodes|Inline|

<h3 id="list-watched-and-acquired-episodes-for-a-show-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MarkedEpisode](#schemamarkedepisode)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-marked-episodes">marked episodes</h1>

## List the marked episodes

> Code samples

```bash
curl https://example.com/user/episodes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/episodes`

<h3 id="list-the-marked-episodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|query|integer|false|Only return episodes from this specific show|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "episode": {}
    },
    "episode_id": 0,
    "marked_at": 0,
    "type": null
  }
]
```

<h3 id="list-the-marked-episodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of marked episodes|Inline|

<h3 id="list-the-marked-episodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MarkedEpisode](#schemamarkedepisode)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if an episode is marked

> Code samples

```bash
curl https://example.com/user/episodes/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/episodes/{episode_id}`

<h3 id="check-if-an-episode-is-marked-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "episode": {}
  },
  "episode_id": 0,
  "marked_at": 0,
  "type": null
}
```

<h3 id="check-if-an-episode-is-marked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The marked episode|[MarkedEpisode](#schemamarkedepisode)|
|404|Not Found|This episode is not marked|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Mark an episode

> Code samples

```bash
curl https://example.com/user/episodes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "_embedded": {
      "episode": {}
    },
    "marked_at": 0,
    "type": null
  }'
```

`PUT /user/episodes/{episode_id}`

Set `marked_at` to `NULL` or leave it out to use the current time.

> Body parameter

```json
{
  "_embedded": {
    "episode": {}
  },
  "marked_at": 0,
  "type": null
}
```

<h3 id="mark-an-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|
|body|body|[MarkedEpisode](#schemamarkedepisode)|false|none|
|» _embedded|body|object|false|none|
|» » episode|body|[Episode](#schemaepisode)|false|none|
|» marked_at|body|integer|false|Epoch timestamp for when the user watched the episode, or 0 for unknown.|
|» type|body|[MarkType](#schemamarktype)|false|0 for watched, 1 for acquired, 2 for skipped|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "episode": {}
  },
  "episode_id": 0,
  "marked_at": 0,
  "type": null
}
```

<h3 id="mark-an-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|this episode is now marked|[MarkedEpisode](#schemamarkedepisode)|
|404|Not Found|this episode does not exist|None|
|422|Unprocessable Entity|invalid input data|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Unmark an episode

> Code samples

```bash
curl https://example.com/user/episodes/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/episodes/{episode_id}`

<h3 id="unmark-an-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|

<h3 id="unmark-an-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the episode is now unmarked|None|
|404|Not Found|this episode was not marked|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-followed-networks">followed networks</h1>

## List the followed networks

> Code samples

```bash
curl https://example.com/user/follows/networks \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/networks`

<h3 id="list-the-followed-networks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|Embed full network info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|network|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "network": {}
    },
    "network_id": 0
  }
]
```

<h3 id="list-the-followed-networks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of followed networks|Inline|

<h3 id="list-the-followed-networks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkFollow](#schemanetworkfollow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if a network is followed

> Code samples

```bash
curl https://example.com/user/follows/networks/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/networks/{network_id}`

<h3 id="check-if-a-network-is-followed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "network": {}
  },
  "network_id": 0
}
```

<h3 id="check-if-a-network-is-followed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The followed network|[NetworkFollow](#schemanetworkfollow)|
|404|Not Found|this network is not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Follow a network

> Code samples

```bash
curl https://example.com/user/follows/networks/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /user/follows/networks/{network_id}`

<h3 id="follow-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "network": {}
  },
  "network_id": 0
}
```

<h3 id="follow-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|this network is now followed|[NetworkFollow](#schemanetworkfollow)|
|404|Not Found|this network does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Unfollow a network

> Code samples

```bash
curl https://example.com/user/follows/networks/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/follows/networks/{network_id}`

<h3 id="unfollow-a-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|network_id|path|integer|true|none|

<h3 id="unfollow-a-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the network is now unfollowed|None|
|404|Not Found|this network was not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-followed-people">followed people</h1>

## List the followed people

> Code samples

```bash
curl https://example.com/user/follows/people \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/people`

<h3 id="list-the-followed-people-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|Embed full person info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|person|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "person": {}
    },
    "person_id": 0
  }
]
```

<h3 id="list-the-followed-people-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of followed people|Inline|

<h3 id="list-the-followed-people-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PersonFollow](#schemapersonfollow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if a person is followed

> Code samples

```bash
curl https://example.com/user/follows/people/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/people/{person_id}`

<h3 id="check-if-a-person-is-followed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "person": {}
  },
  "person_id": 0
}
```

<h3 id="check-if-a-person-is-followed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The followed person|[PersonFollow](#schemapersonfollow)|
|404|Not Found|this person is not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Follow a person

> Code samples

```bash
curl https://example.com/user/follows/people/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /user/follows/people/{person_id}`

<h3 id="follow-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "person": {}
  },
  "person_id": 0
}
```

<h3 id="follow-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|this person is now followed|[PersonFollow](#schemapersonfollow)|
|404|Not Found|this person does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Unfollow a person

> Code samples

```bash
curl https://example.com/user/follows/people/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/follows/people/{person_id}`

<h3 id="unfollow-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|person_id|path|integer|true|none|

<h3 id="unfollow-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the person is now unfollowed|None|
|404|Not Found|this person was not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-followed-shows">followed shows</h1>

## List the followed shows

> Code samples

```bash
curl https://example.com/user/follows/shows \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/shows`

<h3 id="list-the-followed-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|Embed full show info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|show|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "show": {}
    },
    "show_id": 0
  }
]
```

<h3 id="list-the-followed-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of followed shows|Inline|

<h3 id="list-the-followed-shows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ShowFollow](#schemashowfollow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if a show is followed

> Code samples

```bash
curl https://example.com/user/follows/shows/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/shows/{show_id}`

<h3 id="check-if-a-show-is-followed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "show": {}
  },
  "show_id": 0
}
```

<h3 id="check-if-a-show-is-followed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The followed show|[ShowFollow](#schemashowfollow)|
|404|Not Found|This show is not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Follow a show

> Code samples

```bash
curl https://example.com/user/follows/shows/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /user/follows/shows/{show_id}`

<h3 id="follow-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "show": {}
  },
  "show_id": 0
}
```

<h3 id="follow-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This show is now followed|[ShowFollow](#schemashowfollow)|
|404|Not Found|This show does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Unfollow a show

> Code samples

```bash
curl https://example.com/user/follows/shows/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/follows/shows/{show_id}`

<h3 id="unfollow-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|none|

<h3 id="unfollow-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The show is now unfollowed|None|
|404|Not Found|This show was not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-followed-webchannels">followed webchannels</h1>

## List the followed webchannels

> Code samples

```bash
curl https://example.com/user/follows/webchannels \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/webchannels`

<h3 id="list-the-followed-webchannels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|Embed full webchannel info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|webchannel|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "webchannel": {}
    },
    "webchannel_id": 0
  }
]
```

<h3 id="list-the-followed-webchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of followed webchannels|Inline|

<h3 id="list-the-followed-webchannels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WebchannelFollow](#schemawebchannelfollow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if a webchannel is followed

> Code samples

```bash
curl https://example.com/user/follows/webchannels/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/follows/webchannels/{webchannel_id}`

<h3 id="check-if-a-webchannel-is-followed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webchannel_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "webchannel": {}
  },
  "webchannel_id": 0
}
```

<h3 id="check-if-a-webchannel-is-followed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The followed webchannel|[WebchannelFollow](#schemawebchannelfollow)|
|404|Not Found|this webchannel is not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Follow a webchannel

> Code samples

```bash
curl https://example.com/user/follows/webchannels/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /user/follows/webchannels/{webchannel_id}`

<h3 id="follow-a-webchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webchannel_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "webchannel": {}
  },
  "webchannel_id": 0
}
```

<h3 id="follow-a-webchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|this webchannel is now followed|[WebchannelFollow](#schemawebchannelfollow)|
|404|Not Found|this webchannel does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Unfollow a webchannel

> Code samples

```bash
curl https://example.com/user/follows/webchannels/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/follows/webchannels/{webchannel_id}`

<h3 id="unfollow-a-webchannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webchannel_id|path|integer|true|none|

<h3 id="unfollow-a-webchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the webchannel is now unfollowed|None|
|404|Not Found|this webchannel was not followed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-tagged-shows">tagged shows</h1>

## List all tags

> Code samples

```bash
curl https://example.com/user/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/tags`

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="list-all-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of tags|Inline|

<h3 id="list-all-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Create a new tag

> Code samples

```bash
curl https://example.com/user/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string"
  }'
```

`POST /user/tags`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-a-new-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Tag](#schematag)|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

<h3 id="create-a-new-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly created tag|[Tag](#schematag)|
|422|Unprocessable Entity|invalid input data|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Delete a specific tag

> Code samples

```bash
curl https://example.com/user/tags/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/tags/{tag_id}`

<h3 id="delete-a-specific-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_id|path|integer|true|none|

<h3 id="delete-a-specific-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tag was deleted|None|
|404|Not Found|The tag does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Update a specific tag

> Code samples

```bash
curl https://example.com/user/tags/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /user/tags/{tag_id}`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-a-specific-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_id|path|integer|true|none|
|body|body|[Tag](#schematag)|false|none|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

<h3 id="update-a-specific-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tag was updated|[Tag](#schematag)|
|404|Not Found|The tag does not exist|None|
|422|Unprocessable Entity|The tag could not be updated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## List all shows under this tag

> Code samples

```bash
curl https://example.com/user/tags/0/shows \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/tags/{tag_id}/shows`

<h3 id="list-all-shows-under-this-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_id|path|integer|true|none|
|embed|query|string|false|Embed full show info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|show|

> Example responses

> 200 Response

```json
[
  {
    "_embedded": {
      "show": {}
    },
    "show_id": 0
  }
]
```

<h3 id="list-all-shows-under-this-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of tagged shows|Inline|
|404|Not Found|The tag does not exist|None|

<h3 id="list-all-shows-under-this-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagInstance](#schemataginstance)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Tag a show

> Code samples

```bash
curl https://example.com/user/tags/0/shows/0 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /user/tags/{tag_id}/shows/{show_id}`

<h3 id="tag-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_id|path|integer|true|none|
|show_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "show": {}
  },
  "show_id": 0
}
```

<h3 id="tag-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The show was tagged|[TagInstance](#schemataginstance)|
|404|Not Found|The show or tag does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Untag a show

> Code samples

```bash
curl https://example.com/user/tags/0/shows/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/tags/{tag_id}/shows/{show_id}`

<h3 id="untag-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag_id|path|integer|true|none|
|show_id|path|integer|true|none|

<h3 id="untag-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The show was untagged|None|
|404|Not Found|The show was not tagged|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-voted-episodes">voted episodes</h1>

## List the episodes voted for

> Code samples

```bash
curl https://example.com/user/votes/episodes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/votes/episodes`

> Example responses

> 200 Response

```json
[
  {
    "episode_id": 0,
    "vote": 1,
    "voted_at": 0
  }
]
```

<h3 id="list-the-episodes-voted-for-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of episode votes|Inline|

<h3 id="list-the-episodes-voted-for-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EpisodeVote](#schemaepisodevote)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if an episode is voted for

> Code samples

```bash
curl https://example.com/user/votes/episodes/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/votes/episodes/{episode_id}`

<h3 id="check-if-an-episode-is-voted-for-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "episode_id": 0,
  "vote": 1,
  "voted_at": 0
}
```

<h3 id="check-if-an-episode-is-voted-for-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The episode vote|[EpisodeVote](#schemaepisodevote)|
|404|Not Found|This episode is not voted for|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Vote for an episode

> Code samples

```bash
curl https://example.com/user/votes/episodes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "vote": 1
  }'
```

`PUT /user/votes/episodes/{episode_id}`

> Body parameter

```json
{
  "vote": 1
}
```

<h3 id="vote-for-an-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|
|body|body|[EpisodeVote](#schemaepisodevote)|false|none|
|» vote|body|integer|false|The vote number|

> Example responses

> 200 Response

```json
{
  "episode_id": 0,
  "vote": 1,
  "voted_at": 0
}
```

<h3 id="vote-for-an-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This episode is now voted for|[EpisodeVote](#schemaepisodevote)|
|404|Not Found|This episode does not exist|None|
|422|Unprocessable Entity|Invalid vote|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Remove an episode vote

> Code samples

```bash
curl https://example.com/user/votes/episodes/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/votes/episodes/{episode_id}`

<h3 id="remove-an-episode-vote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|episode_id|path|integer|true|none|

<h3 id="remove-an-episode-vote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The episode vote is now removed|None|
|404|Not Found|This episode was not voted for|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

<h1 id="tvmaze-user-api-voted-shows">voted shows</h1>

## List the shows voted for

> Code samples

```bash
curl https://example.com/user/votes/shows \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/votes/shows`

<h3 id="list-the-shows-voted-for-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|Embed full show info|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|show|

> Example responses

> 200 Response

```json
[
  {
    "show_id": 0,
    "vote": 1,
    "voted_at": 0
  }
]
```

<h3 id="list-the-shows-voted-for-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of show votes|Inline|

<h3 id="list-the-shows-voted-for-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ShowVote](#schemashowvote)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Check if a show is voted for

> Code samples

```bash
curl https://example.com/user/votes/shows/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /user/votes/shows/{show_id}`

<h3 id="check-if-a-show-is-voted-for-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "show_id": 0,
  "vote": 1,
  "voted_at": 0
}
```

<h3 id="check-if-a-show-is-voted-for-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The show vote|[ShowVote](#schemashowvote)|
|404|Not Found|This show is not voted for|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Vote for a show

> Code samples

```bash
curl https://example.com/user/votes/shows/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "vote": 1
  }'
```

`PUT /user/votes/shows/{show_id}`

Set `voted_at` to `NULL` or leave it out to use the current time.

> Body parameter

```json
{
  "vote": 1
}
```

<h3 id="vote-for-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|none|
|body|body|[ShowVote](#schemashowvote)|false|none|
|» vote|body|integer|false|The vote number|

> Example responses

> 200 Response

```json
{
  "show_id": 0,
  "vote": 1,
  "voted_at": 0
}
```

<h3 id="vote-for-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This show is now voted for|[ShowVote](#schemashowvote)|
|404|Not Found|This show does not exist|None|
|422|Unprocessable Entity|Invalid vote|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

## Remove a show vote

> Code samples

```bash
curl https://example.com/user/votes/shows/0 \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /user/votes/shows/{show_id}`

<h3 id="remove-a-show-vote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show_id|path|integer|true|none|

<h3 id="remove-a-show-vote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The show vote is now removed|None|
|404|Not Found|This show was not voted for|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
usertoken
</aside>

# Schemas

<h2 id="tocS_BulkResponse">BulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkresponse"></a>
<a id="schema_BulkResponse"></a>
<a id="tocSbulkresponse"></a>
<a id="tocsbulkresponse"></a>

```json
[
  {
    "code": 0,
    "errors": {},
    "input": {},
    "message": "string",
    "result": {}
  }
]
```

A list of responses to your bulk input, ordered the same as your input

<h2 id="tocS_Episode">Episode</h2>
<!-- backwards compatibility -->
<a id="schemaepisode"></a>
<a id="schema_Episode"></a>
<a id="tocSepisode"></a>
<a id="tocsepisode"></a>

```json
{}
```

<h2 id="tocS_EpisodeVote">EpisodeVote</h2>
<!-- backwards compatibility -->
<a id="schemaepisodevote"></a>
<a id="schema_EpisodeVote"></a>
<a id="tocSepisodevote"></a>
<a id="tocsepisodevote"></a>

```json
{
  "episode_id": 0,
  "vote": 1,
  "voted_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episode_id|integer|false|read-only|none|
|vote|integer|false|none|The vote number|
|voted_at|integer|false|read-only|Epoch timestamp for when the user voted for the episode|

<h2 id="tocS_MarkType">MarkType</h2>
<!-- backwards compatibility -->
<a id="schemamarktype"></a>
<a id="schema_MarkType"></a>
<a id="tocSmarktype"></a>
<a id="tocsmarktype"></a>

```json
null
```

0 for watched, 1 for acquired, 2 for skipped

<h2 id="tocS_MarkedEpisode">MarkedEpisode</h2>
<!-- backwards compatibility -->
<a id="schemamarkedepisode"></a>
<a id="schema_MarkedEpisode"></a>
<a id="tocSmarkedepisode"></a>
<a id="tocsmarkedepisode"></a>

```json
{
  "_embedded": {
    "episode": {}
  },
  "episode_id": 0,
  "marked_at": 0,
  "type": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|episode_id|integer|false|read-only|none|
|marked_at|integer|false|none|Epoch timestamp for when the user watched the episode, or 0 for unknown.|
|type|[MarkType](#schemamarktype)|false|none|0 for watched, 1 for acquired, 2 for skipped|

<h2 id="tocS_Network">Network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_Network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{}
```

<h2 id="tocS_NetworkFollow">NetworkFollow</h2>
<!-- backwards compatibility -->
<a id="schemanetworkfollow"></a>
<a id="schema_NetworkFollow"></a>
<a id="tocSnetworkfollow"></a>
<a id="tocsnetworkfollow"></a>

```json
{
  "_embedded": {
    "network": {}
  },
  "network_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|network_id|integer|false|none|none|

<h2 id="tocS_Person">Person</h2>
<!-- backwards compatibility -->
<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{}
```

<h2 id="tocS_PersonFollow">PersonFollow</h2>
<!-- backwards compatibility -->
<a id="schemapersonfollow"></a>
<a id="schema_PersonFollow"></a>
<a id="tocSpersonfollow"></a>
<a id="tocspersonfollow"></a>

```json
{
  "_embedded": {
    "person": {}
  },
  "person_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|person_id|integer|false|none|none|

<h2 id="tocS_Show">Show</h2>
<!-- backwards compatibility -->
<a id="schemashow"></a>
<a id="schema_Show"></a>
<a id="tocSshow"></a>
<a id="tocsshow"></a>

```json
{}
```

<h2 id="tocS_ShowFollow">ShowFollow</h2>
<!-- backwards compatibility -->
<a id="schemashowfollow"></a>
<a id="schema_ShowFollow"></a>
<a id="tocSshowfollow"></a>
<a id="tocsshowfollow"></a>

```json
{
  "_embedded": {
    "show": {}
  },
  "show_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|show_id|integer|false|none|none|

<h2 id="tocS_ShowVote">ShowVote</h2>
<!-- backwards compatibility -->
<a id="schemashowvote"></a>
<a id="schema_ShowVote"></a>
<a id="tocSshowvote"></a>
<a id="tocsshowvote"></a>

```json
{
  "show_id": 0,
  "vote": 1,
  "voted_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|show_id|integer|false|read-only|none|
|vote|integer|false|none|The vote number|
|voted_at|integer|false|read-only|Epoch timestamp for when the user voted for the episode|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|false|none|none|

<h2 id="tocS_TagInstance">TagInstance</h2>
<!-- backwards compatibility -->
<a id="schemataginstance"></a>
<a id="schema_TagInstance"></a>
<a id="tocStaginstance"></a>
<a id="tocstaginstance"></a>

```json
{
  "_embedded": {
    "show": {}
  },
  "show_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|show_id|integer|false|none|none|

<h2 id="tocS_Webchannel">Webchannel</h2>
<!-- backwards compatibility -->
<a id="schemawebchannel"></a>
<a id="schema_Webchannel"></a>
<a id="tocSwebchannel"></a>
<a id="tocswebchannel"></a>

```json
{}
```

<h2 id="tocS_WebchannelFollow">WebchannelFollow</h2>
<!-- backwards compatibility -->
<a id="schemawebchannelfollow"></a>
<a id="schema_WebchannelFollow"></a>
<a id="tocSwebchannelfollow"></a>
<a id="tocswebchannelfollow"></a>

```json
{
  "_embedded": {
    "webchannel": {}
  },
  "webchannel_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|none|
|webchannel_id|integer|false|none|none|
