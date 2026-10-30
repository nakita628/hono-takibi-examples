<h1 id="directus">Directus v10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A real-time API and App dashboard for managing SQL database content.

Email: <a href="mailto:contact@directus.io">contact@directus.io</a> 
License: <a href="https://directus.com/mscl">MSCL-1.0-GPL</a>

<a href="https://directus.com/docs">Directus Docs</a>

# Authentication

* API Key (KeyAuth)
    - Parameter Name: **access_token**, in: query.

* API Key (Auth)
    - Parameter Name: **Authorization**, in: header.

<h1 id="directus-activity">Activity</h1>

All events that happen within Directus are tracked and stored in the activities collection. This gives you full accountability over everything that happens.

## List Activity Actions

<a id="opIdgetActivities"></a>

> Code samples

```bash
curl http://localhost:8055/activity \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /activity`

Returns a list of activity actions.

<h3 id="list-activity-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 2,
      "action": "update",
      "user": "string",
      "timestamp": "2019-12-05T22:52:09Z",
      "ip": "127.0.0.1",
      "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/78.0.3904.108 Safari/537.36",
      "origin": "https://directus.com",
      "collection": "string",
      "item": "328",
      "comment": null
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-activity-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-activity-actions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Activity](#schemaactivity)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve an Activity Action

<a id="opIdgetActivity"></a>

> Code samples

```bash
curl http://localhost:8055/activity/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /activity/{id}`

Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information.

<h3 id="retrieve-an-activity-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 2,
    "action": "update",
    "user": "string",
    "timestamp": "2019-12-05T22:52:09Z",
    "ip": "127.0.0.1",
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    "origin": "https://directus.com",
    "collection": "string",
    "item": "328",
    "comment": null
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-an-activity-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-an-activity-action-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Activity](#schemaactivity)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-assets">Assets</h1>

Image typed files can be dynamically resized and transformed to fit any need.

## Get an Asset

<a id="opIdgetAsset"></a>

> Code samples

```bash
curl http://localhost:8055/assets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{id}`

Image typed files can be dynamically resized and transformed to fit any need.

<h3 id="get-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the file.|
|key|query|string|false|The key of the asset size configured in settings.|
|transforms|query|string|false|A JSON array of image transformations|
|download|query|boolean|false|Download the asset to your computer|

> Example responses

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="get-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="get-an-asset-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-authentication">Authentication</h1>

All data within the platform is private by default. The public role can be configured to expose data without authentication, or you can pass an access token to the API to access private data.

## Retrieve a Temporary Access Token

<a id="opIdlogin"></a>

> Code samples

```bash
curl http://localhost:8055/auth/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "admin@example.com",
    "password": "password",
    "mode": "json",
    "otp": "string"
  }'
```

`POST /auth/login`

Retrieve a Temporary Access Token

> Body parameter

```json
{
  "email": "admin@example.com",
  "password": "password",
  "mode": "json",
  "otp": "string"
}
```

<h3 id="retrieve-a-temporary-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|Email address of the user you're retrieving the access token for.|
|» password|body|string(password)|true|Password of the user.|
|» mode|body|string|false|Whether to retrieve the refresh token in the JSON response, or in a httpOnly cookie.|
|» otp|body|string|false|The user's one-time-password (if MFA is enabled).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|json|
|» mode|cookie|
|» mode|session|

> Example responses

> 200 Response

```json
{
  "data": {
    "access_token": "eyJhbGciOiJI...",
    "expires": 900,
    "refresh_token": "yuOJkjdPXMd..."
  }
}
```

<h3 id="retrieve-a-temporary-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful authentification|Inline|

<h3 id="retrieve-a-temporary-access-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» access_token|string|false|none|none|
|» expires|integer|false|none|none|
|» refresh_token|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Refresh Token

<a id="opIdrefresh"></a>

> Code samples

```bash
curl http://localhost:8055/auth/refresh \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "refresh_token": "eyJ0eXAiOiJKV...",
    "mode": "json"
  }'
```

`POST /auth/refresh`

Refresh a Temporary Access Token.

> Body parameter

```json
{
  "refresh_token": "eyJ0eXAiOiJKV...",
  "mode": "json"
}
```

<h3 id="refresh-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» refresh_token|body|string|false|JWT access token you want to refresh. This token can't be expired.|
|» mode|body|string|false|Whether to submit and retrieve the refresh token in the JSON response, or in a httpOnly cookie.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|json|
|» mode|cookie|
|» mode|session|

> Example responses

> 200 Response

```json
{
  "data": {
    "access_token": "eyJhbGciOiJI...",
    "expires": 900,
    "refresh_token": "Gy-caJMpmGTA..."
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="refresh-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="refresh-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» access_token|string|false|none|none|
|» expires|integer|false|none|none|
|» refresh_token|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Log Out

<a id="opIdlogout"></a>

> Code samples

```bash
curl http://localhost:8055/auth/logout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "refresh_token": "eyJ0eXAiOiJKV...",
    "mode": "json"
  }'
```

`POST /auth/logout`

Log Out

> Body parameter

```json
{
  "refresh_token": "eyJ0eXAiOiJKV...",
  "mode": "json"
}
```

<h3 id="log-out-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» refresh_token|body|string|false|The refresh token to invalidate. If you have the refresh token in a cookie through /auth/login, you don't have to submit it here.|
|» mode|body|string|false|Whether the refresh token is submitted in the JSON response, or in a httpOnly cookie.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|json|
|» mode|cookie|
|» mode|session|

<h3 id="log-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Request a Password Reset

<a id="opIdpasswordRequest"></a>

> Code samples

```bash
curl http://localhost:8055/auth/password/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "admin@example.com"
  }'
```

`POST /auth/password/request`

Request that a password reset email be sent. This does not apply to users authenticated through external providers (OAuth, SAML, LDAP, etc.).

> Body parameter

```json
{
  "email": "admin@example.com"
}
```

<h3 id="request-a-password-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|Email address of the user you're requesting a reset for.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="request-a-password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="request-a-password-reset-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Reset a Password

<a id="opIdpasswordReset"></a>

> Code samples

```bash
curl http://localhost:8055/auth/password/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "token": "eyJ0eXAiOiJKV1Qi...",
    "password": "password"
  }'
```

`POST /auth/password/reset`

The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.

> Body parameter

```json
{
  "token": "eyJ0eXAiOiJKV1Qi...",
  "password": "password"
}
```

<h3 id="reset-a-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|One-time use JWT token that is used to verify the user.|
|» password|body|string(password)|true|New password for the user.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="reset-a-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="reset-a-password-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## List OAuth Providers

<a id="opIdoauth"></a>

> Code samples

```bash
curl http://localhost:8055/auth/oauth \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /auth/oauth`

List configured OAuth providers.

> Example responses

> 200 Response

```json
{
  "public": true,
  "data": [
    "github",
    "facebook"
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-oauth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="list-oauth-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|boolean|false|none|none|
|data|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Authenticated using an OAuth provider

<a id="opIdoauthProvider"></a>

> Code samples

```bash
curl http://localhost:8055/auth/oauth/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /auth/oauth/{provider}`

Start OAuth flow using the specified provider

<h3 id="authenticated-using-an-oauth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|Key of the activated OAuth provider.|
|redirect|query|string|false|Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned.|

> Example responses

> 200 Response

```json
{
  "public": true,
  "data": {
    "token": "string"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="authenticated-using-an-oauth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="authenticated-using-an-oauth-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|boolean|false|none|none|
|data|object|false|none|none|
|» token|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-presets">Presets</h1>

Presets hold the preferences of individual users of the platform. This allows Directus to show and maintain custom item listings for users of the app.

## List Presets

<a id="opIdgetPresets"></a>

> Code samples

```bash
curl http://localhost:8055/presets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /presets`

List the presets.

<h3 id="list-presets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 155,
      "bookmark": "string",
      "user": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "role": "50419801-0f30-8644-2b3c-9bc2d980d0a0",
      "collection": "articles",
      "search": "string",
      "filters": [
        {
          "key": "7RwVrquB5dPmfbrI1rcWy",
          "field": "title",
          "operator": "contains",
          "value": "Hello"
        }
      ],
      "layout": null,
      "layout_query": {
        "cards": {
          "sort": "-published_on"
        }
      },
      "layout_options": {
        "cards": {
          "icon": "account_circle",
          "title": "{{ first_name }} {{ last_name }}",
          "subtitle": "{{ title }}",
          "size": 3
        }
      }
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-presets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="list-presets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Presets](#schemapresets)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Create a Preset

<a id="opIdcreatePreset"></a>

> Code samples

```bash
curl http://localhost:8055/presets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": "articles",
    "title": "Highly rated articles",
    "role": null,
    "search": "string",
    "filters": [
      {
        "key": "aHKLAakdVghzD",
        "field": "rating",
        "operator": "gte",
        "value": 4.5
      }
    ],
    "layout": "string",
    "layout_query": "string",
    "layout_options": "string"
  }'
```

`POST /presets`

Create a new preset.

> Body parameter

```json
{
  "collection": "articles",
  "title": "Highly rated articles",
  "role": null,
  "search": "string",
  "filters": [
    {
      "key": "aHKLAakdVghzD",
      "field": "rating",
      "operator": "gte",
      "value": 4.5
    }
  ],
  "layout": "string",
  "layout_query": "string",
  "layout_options": "string"
}
```

<h3 id="create-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|object|false|none|
|» collection|body|string|true|What collection this collection preset is used for.|
|» title|body|string|false|Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.|
|» role|body|string|false|The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.|
|» search|body|string|false|What the user searched for in search/filter in the header bar.|
|» filters|body|[object]|false|none|
|» » key|body|string|false|none|
|» » field|body|string|false|none|
|» » operator|body|string|false|none|
|» » value|body|integer|false|none|
|» layout|body|string|false|Name of the view type that is used.|
|» layout_query|body|string|false|Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.|
|» layout_options|body|string|false|Options of the views. The properties in here are controlled by the layout.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 155,
    "bookmark": "string",
    "user": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "role": "50419801-0f30-8644-2b3c-9bc2d980d0a0",
    "collection": "articles",
    "search": "string",
    "filters": [
      {
        "key": "7RwVrquB5dPmfbrI1rcWy",
        "field": "title",
        "operator": "contains",
        "value": "Hello"
      }
    ],
    "layout": null,
    "layout_query": {
      "cards": {
        "sort": "-published_on"
      }
    },
    "layout_options": {
      "cards": {
        "icon": "account_circle",
        "title": "{{ first_name }} {{ last_name }}",
        "subtitle": "{{ title }}",
        "size": 3
      }
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="create-a-preset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Presets](#schemapresets)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Presets

<a id="opIddeletePresets"></a>

> Code samples

```bash
curl http://localhost:8055/presets \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /presets`

Delete multiple existing presets.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-presets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-presets-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Presets

<a id="opIdupdatePresets"></a>

> Code samples

```bash
curl http://localhost:8055/presets \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "keys": [
      "string"
    ],
    "data": {
      "collection": "articles",
      "title": "Highly rated articles",
      "role": null,
      "search": "string",
      "filters": [
        {
          "key": "aHKLAakdVghzD",
          "field": "rating",
          "operator": "gte",
          "value": 4.5
        }
      ],
      "layout": "string",
      "layout_query": "string",
      "layout_options": "string"
    }
  }'
```

`PATCH /presets`

Update multiple presets at the same time.

> Body parameter

```json
{
  "keys": [
    "string"
  ],
  "data": {
    "collection": "articles",
    "title": "Highly rated articles",
    "role": null,
    "search": "string",
    "filters": [
      {
        "key": "aHKLAakdVghzD",
        "field": "rating",
        "operator": "gte",
        "value": 4.5
      }
    ],
    "layout": "string",
    "layout_query": "string",
    "layout_options": "string"
  }
}
```

<h3 id="update-multiple-presets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» keys|body|[string]|false|none|
|» data|body|object|false|none|
|» » collection|body|string|true|What collection this collection preset is used for.|
|» » title|body|string|false|Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.|
|» » role|body|string|false|The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.|
|» » search|body|string|false|What the user searched for in search/filter in the header bar.|
|» » filters|body|[object]|false|none|
|» » » key|body|string|false|none|
|» » » field|body|string|false|none|
|» » » operator|body|string|false|none|
|» » » value|body|integer|false|none|
|» » layout|body|string|false|Name of the view type that is used.|
|» » layout_query|body|string|false|Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.|
|» » layout_options|body|string|false|Options of the views. The properties in here are controlled by the layout.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 155,
      "bookmark": "string",
      "user": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "role": "50419801-0f30-8644-2b3c-9bc2d980d0a0",
      "collection": "articles",
      "search": "string",
      "filters": [
        {
          "key": "7RwVrquB5dPmfbrI1rcWy",
          "field": "title",
          "operator": "contains",
          "value": "Hello"
        }
      ],
      "layout": null,
      "layout_query": {
        "cards": {
          "sort": "-published_on"
        }
      },
      "layout_options": {
        "cards": {
          "icon": "account_circle",
          "title": "{{ first_name }} {{ last_name }}",
          "subtitle": "{{ title }}",
          "size": 3
        }
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-presets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-presets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Presets](#schemapresets)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Preset

<a id="opIdgetPreset"></a>

> Code samples

```bash
curl http://localhost:8055/presets/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /presets/{id}`

Retrieve a single preset by unique identifier.

<h3 id="retrieve-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|integer|true|Index|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 155,
    "bookmark": "string",
    "user": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "role": "50419801-0f30-8644-2b3c-9bc2d980d0a0",
    "collection": "articles",
    "search": "string",
    "filters": [
      {
        "key": "7RwVrquB5dPmfbrI1rcWy",
        "field": "title",
        "operator": "contains",
        "value": "Hello"
      }
    ],
    "layout": null,
    "layout_query": {
      "cards": {
        "sort": "-published_on"
      }
    },
    "layout_options": {
      "cards": {
        "icon": "account_circle",
        "title": "{{ first_name }} {{ last_name }}",
        "subtitle": "{{ title }}",
        "size": 3
      }
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="retrieve-a-preset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Presets](#schemapresets)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Delete a Preset

<a id="opIddeletePreset"></a>

> Code samples

```bash
curl http://localhost:8055/presets/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /presets/{id}`

Delete an existing preset.

<h3 id="delete-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-a-preset-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Update a Preset

<a id="opIdupdatePreset"></a>

> Code samples

```bash
curl http://localhost:8055/presets/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": "articles",
    "title": "Highly rated articles",
    "role": 0,
    "search_query": "string",
    "filters": [
      {
        "field": "rating",
        "operator": "gte",
        "value": 4.5
      }
    ],
    "view_type": "string",
    "view_query": "string",
    "view_options": "string",
    "translation": {}
  }'
```

`PATCH /presets/{id}`

Update an existing preset.

> Body parameter

```json
{
  "collection": "articles",
  "title": "Highly rated articles",
  "role": 0,
  "search_query": "string",
  "filters": [
    {
      "field": "rating",
      "operator": "gte",
      "value": 4.5
    }
  ],
  "view_type": "string",
  "view_query": "string",
  "view_options": "string",
  "translation": {}
}
```

<h3 id="update-a-preset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|integer|true|Index|
|body|body|object|false|none|
|» collection|body|string|true|What collection this collection preset is used for.|
|» title|body|string|false|Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.|
|» role|body|integer|false|The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.|
|» search_query|body|string|false|What the user searched for in search/filter in the header bar.|
|» filters|body|[object]|false|none|
|» » field|body|string|false|none|
|» » operator|body|string|false|none|
|» » value|body|integer|false|none|
|» view_type|body|string|false|Name of the view type that is used. Defaults to tabular.|
|» view_query|body|string|false|View query that's saved per view type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.|
|» view_options|body|string|false|Options of the views. The properties in here are controlled by the layout.|
|» translation|body|object|false|Key value pair of language-translation. Can be used to translate the bookmark title in multiple languages.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 155,
    "bookmark": "string",
    "user": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "role": "50419801-0f30-8644-2b3c-9bc2d980d0a0",
    "collection": "articles",
    "search": "string",
    "filters": [
      {
        "key": "7RwVrquB5dPmfbrI1rcWy",
        "field": "title",
        "operator": "contains",
        "value": "Hello"
      }
    ],
    "layout": null,
    "layout_query": {
      "cards": {
        "sort": "-published_on"
      }
    },
    "layout_options": {
      "cards": {
        "icon": "account_circle",
        "title": "{{ first_name }} {{ last_name }}",
        "subtitle": "{{ title }}",
        "size": 3
      }
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-preset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-a-preset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Presets](#schemapresets)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-collections">Collections</h1>

Collections are the individual collections of items, similar to tables in a database. Changes to collections will alter the schema of the database.

## List Collections

<a id="opIdgetCollections"></a>

> Code samples

```bash
curl http://localhost:8055/collections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /collections`

Returns a list of the collections available in the project.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "collection": "customers",
      "meta": null,
      "schema": {
        "name": "customers",
        "schema": "public",
        "comment": null
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Collections](#schemacollections)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a Collection

<a id="opIdcreateCollection"></a>

> Code samples

```bash
curl http://localhost:8055/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": "my_collection",
    "fields": [
      {}
    ],
    "schema": {
      "name": "customers",
      "schema": "public",
      "comment": null
    },
    "meta": {
      "icon": "people",
      "note": null,
      "display_template": null,
      "hidden": false,
      "singleton": false,
      "translation": null,
      "versioning": false,
      "archive_field": null,
      "archive_app_filter": null,
      "archive_value": null,
      "unarchive_value": null,
      "sort_field": null
    }
  }'
```

`POST /collections`

Create a new collection in Directus.

> Body parameter

```json
{
  "collection": "my_collection",
  "fields": [
    {}
  ],
  "schema": {
    "name": "customers",
    "schema": "public",
    "comment": null
  },
  "meta": {
    "icon": "people",
    "note": null,
    "display_template": null,
    "hidden": false,
    "singleton": false,
    "translation": null,
    "versioning": false,
    "archive_field": null,
    "archive_app_filter": null,
    "archive_value": null,
    "unarchive_value": null,
    "sort_field": null
  }
}
```

<h3 id="create-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» collection|body|string|true|Unique name of the collection.|
|» fields|body|[object]|false|The fields contained in this collection. See the fields reference for more information. Each individual field requires field, type, and interface to be provided.|
|» schema|body|object|false|Database schema for the collection. Required unless `meta` is provided; a collection with no `schema` exists only as an alias/group collection.|
|» » name|body|string|false|The collection key.|
|» » schema|body|string|false|Database schema (pg only).|
|» » comment|body|string \| null|false|Comment as saved in the database.|
|» meta|body|object|false|Metadata of the collection. Required unless `schema` is provided.|
|» » icon|body|string \| null|false|Name of a Google Material Design Icon that's assigned to this collection.|
|» » note|body|string \| null|false|A note describing the collection.|
|» » display_template|body|string \| null|false|Text representation of how items from this collection are shown across the system.|
|» » hidden|body|boolean|false|Whether or not the collection is hidden from the navigation in the admin app.|
|» » singleton|body|boolean|false|Whether or not the collection is treated as a single object.|
|» » translation|body|string \| null|false|Key value pairs of how to show this collection's name in different languages in the admin app.|
|» » versioning|body|boolean|false|Whether or not Content Versioning is enabled for this collection.|
|» » archive_field|body|string \| null|false|What field holds the archive value.|
|» » archive_app_filter|body|string \| null|false|What value to use for "archived" items.|
|» » archive_value|body|string \| null|false|What value to use to "unarchive" items.|
|» » unarchive_value|body|string \| null|false|Whether or not to show the "archived" filter.|
|» » sort_field|body|string \| null|false|The sort field in the collection.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection": "customers",
    "meta": null,
    "schema": {
      "name": "customers",
      "schema": "public",
      "comment": null
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collections](#schemacollections)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Collection

<a id="opIdgetCollection"></a>

> Code samples

```bash
curl http://localhost:8055/collections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /collections/{id}`

Retrieves the details of a single collection.

<h3 id="retrieve-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of the collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection": "customers",
    "meta": null,
    "schema": {
      "name": "customers",
      "schema": "public",
      "comment": null
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collections](#schemacollections)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Collection

<a id="opIddeleteCollection"></a>

> Code samples

```bash
curl http://localhost:8055/collections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /collections/{id}`

Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.

<h3 id="delete-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of the collection.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-collection-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Collection

<a id="opIdupdateCollection"></a>

> Code samples

```bash
curl http://localhost:8055/collections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "meta": {
      "icon": "people",
      "color": "#6644ff",
      "note": null,
      "display_template": null,
      "hidden": false,
      "singleton": false,
      "translation": null,
      "versioning": false,
      "archive_field": null,
      "archive_app_filter": null,
      "archive_value": null,
      "unarchive_value": null,
      "sort_field": null
    }
  }'
```

`PATCH /collections/{id}`

Update an existing collection.

> Body parameter

```json
{
  "meta": {
    "icon": "people",
    "color": "#6644ff",
    "note": null,
    "display_template": null,
    "hidden": false,
    "singleton": false,
    "translation": null,
    "versioning": false,
    "archive_field": null,
    "archive_app_filter": null,
    "archive_value": null,
    "unarchive_value": null,
    "sort_field": null
  }
}
```

<h3 id="update-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of the collection.|
|body|body|object|false|none|
|» meta|body|object|false|Metadata of the collection.|
|» » icon|body|string \| null|false|Name of a Google Material Design Icon that's assigned to this collection.|
|» » color|body|string \| null|false|Choose the color for the icon assigned to this collection.|
|» » note|body|string \| null|false|A note describing the collection.|
|» » display_template|body|string \| null|false|Text representation of how items from this collection are shown across the system.|
|» » hidden|body|boolean|false|Whether or not the collection is hidden from the navigation in the admin app.|
|» » singleton|body|boolean|false|Whether or not the collection is treated as a single object.|
|» » translation|body|string \| null|false|Key value pairs of how to show this collection's name in different languages in the admin app.|
|» » versioning|body|boolean|false|Whether or not Content Versioning is enabled for this collection.|
|» » archive_field|body|string \| null|false|What field holds the archive value.|
|» » archive_app_filter|body|string \| null|false|What value to use for "archived" items.|
|» » archive_value|body|string \| null|false|What value to use to "unarchive" items.|
|» » unarchive_value|body|string \| null|false|Whether or not to show the "archived" filter.|
|» » sort_field|body|string \| null|false|The sort field in the collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection": "customers",
    "meta": null,
    "schema": {
      "name": "customers",
      "schema": "public",
      "comment": null
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collections](#schemacollections)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-comments">Comments</h1>

Comments can be added to items.

## List Comments

<a id="opIdgetComments"></a>

> Code samples

```bash
curl http://localhost:8055/comments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /comments`

List the comments.

<h3 id="list-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
      "collection": "articles",
      "item": "123",
      "comment": "This is a comment",
      "date_created": "2024-01-23T12:34:56Z",
      "date_updated": "2024-01-23T12:34:56Z",
      "user_created": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
      "user_updated": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28"
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="list-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Comments](#schemacomments)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Create a Comment

<a id="opIdcreateComment"></a>

> Code samples

```bash
curl http://localhost:8055/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": "projects",
    "item": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "comment": "A new comment"
  }'
```

`POST /comments`

Create a new comment.

> Body parameter

```json
{
  "collection": "projects",
  "item": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
  "comment": "A new comment"
}
```

<h3 id="create-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|object|false|none|
|» collection|body|string|true|Which collection this collection comment is for.|
|» item|body|string|true|none|
|» comment|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "collection": "articles",
    "item": "123",
    "comment": "This is a comment",
    "date_created": "2024-01-23T12:34:56Z",
    "date_updated": "2024-01-23T12:34:56Z",
    "user_created": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "user_updated": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="create-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comments](#schemacomments)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Comments

<a id="opIddeleteComments"></a>

> Code samples

```bash
curl http://localhost:8055/comments \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /comments`

Delete multiple existing comments.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-comments-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Comments

<a id="opIdupdateComments"></a>

> Code samples

```bash
curl http://localhost:8055/comments \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "keys": [
      "string"
    ],
    "data": {
      "collection": "projects",
      "item": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
      "comment": "A new comment"
    }
  }'
```

`PATCH /comments`

Update multiple comments at the same time.

> Body parameter

```json
{
  "keys": [
    "string"
  ],
  "data": {
    "collection": "projects",
    "item": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "comment": "A new comment"
  }
}
```

<h3 id="update-multiple-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» keys|body|[string]|false|none|
|» data|body|object|false|none|
|» » collection|body|string|true|Which collection this collection comment is for.|
|» » item|body|string|false|none|
|» » comment|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
      "collection": "articles",
      "item": "123",
      "comment": "This is a comment",
      "date_created": "2024-01-23T12:34:56Z",
      "date_updated": "2024-01-23T12:34:56Z",
      "user_created": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
      "user_updated": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Comments](#schemacomments)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Comment

<a id="opIdgetComment"></a>

> Code samples

```bash
curl http://localhost:8055/comments/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /comments/{id}`

Retrieve a single comment by unique identifier.

<h3 id="retrieve-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "collection": "articles",
    "item": "123",
    "comment": "This is a comment",
    "date_created": "2024-01-23T12:34:56Z",
    "date_updated": "2024-01-23T12:34:56Z",
    "user_created": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "user_updated": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="retrieve-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comments](#schemacomments)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Delete a Comment

<a id="opIddeleteComment"></a>

> Code samples

```bash
curl http://localhost:8055/comments/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /comments/{id}`

Delete an existing comment.

<h3 id="delete-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-a-comment-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Update a Comment

<a id="opIdupdateComment"></a>

> Code samples

```bash
curl http://localhost:8055/comments/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": "projects",
    "item": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "comment": "An updated comment"
  }'
```

`PATCH /comments/{id}`

Update an existing comment.

> Body parameter

```json
{
  "collection": "projects",
  "item": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
  "comment": "An updated comment"
}
```

<h3 id="update-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|object|false|none|
|» collection|body|string|true|Which collection this comment is for.|
|» item|body|string|false|none|
|» comment|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "collection": "articles",
    "item": "123",
    "comment": "This is a comment",
    "date_created": "2024-01-23T12:34:56Z",
    "date_updated": "2024-01-23T12:34:56Z",
    "user_created": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
    "user_updated": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Comments](#schemacomments)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-extensions">Extensions</h1>

Directus can easily be extended through the addition of several types of extensions, including layouts, interfaces, and modules.

## List Extensions

<a id="opIdlistExtensions"></a>

> Code samples

```bash
curl http://localhost:8055/extensions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /extensions`

List the installed extensions and their configuration in the project.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "bundle": "directus-extension-my-bundle",
      "name": "my-bundle-operation",
      "meta": {
        "enabled": true
      },
      "schema": {
        "type": "operation",
        "local": true
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-extensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="list-extensions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Extensions](#schemaextensions)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update an Extension

<a id="opIdupdateExtensions"></a>

> Code samples

```bash
curl http://localhost:8055/extensions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "meta": {
      "enabled": true
    }
  }'
```

`PATCH /extensions/{name}`

Update an existing extension.

> Body parameter

```json
{
  "meta": {
    "enabled": true
  }
}
```

<h3 id="update-an-extension-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|object|false|none|
|» meta|body|object|false|Directus metadata for the extension. Where the configuration for the extension in the current project is stored.|
|» » enabled|body|boolean|false|Whether or not the extension is enabled.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bundle": "directus-extension-my-bundle",
    "name": "my-bundle-operation",
    "meta": {
      "enabled": true
    },
    "schema": {
      "type": "operation",
      "local": true
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-an-extension-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-an-extension-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Extensions](#schemaextensions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update an Extension

<a id="opIdupdateExtensionBundle"></a>

> Code samples

```bash
curl http://localhost:8055/extensions/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "meta": {
      "enabled": true
    }
  }'
```

`PATCH /extensions/{bundle}/{name}`

Update an existing extension.

> Body parameter

```json
{
  "meta": {
    "enabled": true
  }
}
```

<h3 id="update-an-extension-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundle|path|string|true|none|
|name|path|string|true|none|
|body|body|object|false|none|
|» meta|body|object|false|Directus metadata for the extension. Where the configuration for the extension in the current project is stored.|
|» » enabled|body|boolean|false|Whether or not the extension is enabled.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bundle": "directus-extension-my-bundle",
    "name": "my-bundle-operation",
    "meta": {
      "enabled": true
    },
    "schema": {
      "type": "operation",
      "local": true
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-an-extension-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-an-extension-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Extensions](#schemaextensions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-fields">Fields</h1>

Fields are individual pieces of content within an item. They are mapped to columns in the database.

## List All Fields

<a id="opIdgetFields"></a>

> Code samples

```bash
curl http://localhost:8055/fields \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /fields`

Returns a list of the fields available in the project.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "collection": "about_us",
      "field": "id",
      "type": "integer",
      "schema": {
        "name": "title",
        "table": "posts",
        "type": "string",
        "default_value": null,
        "max_length": null,
        "is_nullable": false,
        "is_primary_key": false,
        "has_auto_increment": false,
        "foreign_key_column": null,
        "foreign_key_table": null,
        "comment": null,
        "schema": "public",
        "foreign_key_schema": null
      },
      "meta": {
        "id": 3,
        "collection": "posts",
        "field": "title",
        "special": null,
        "system-interface": "primary-key",
        "options": null,
        "display": null,
        "display_options": null,
        "locked": true,
        "readonly": false,
        "hidden": true,
        "sort": 1,
        "width": null,
        "group": null,
        "translations": null,
        "note": ""
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-all-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-all-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Fields](#schemafields)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## List Fields in Collection

<a id="opIdgetCollectionFields"></a>

> Code samples

```bash
curl http://localhost:8055/fields/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /fields/{collection}`

Returns a list of the fields available in the given collection.

<h3 id="list-fields-in-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection the item resides in.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "collection": "about_us",
      "field": "id",
      "type": "integer",
      "schema": {
        "name": "title",
        "table": "posts",
        "type": "string",
        "default_value": null,
        "max_length": null,
        "is_nullable": false,
        "is_primary_key": false,
        "has_auto_increment": false,
        "foreign_key_column": null,
        "foreign_key_table": null,
        "comment": null,
        "schema": "public",
        "foreign_key_schema": null
      },
      "meta": {
        "id": 3,
        "collection": "posts",
        "field": "title",
        "special": null,
        "system-interface": "primary-key",
        "options": null,
        "display": null,
        "display_options": null,
        "locked": true,
        "readonly": false,
        "hidden": true,
        "sort": 1,
        "width": null,
        "group": null,
        "translations": null,
        "note": ""
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-fields-in-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-fields-in-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Fields](#schemafields)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create Field in Collection

<a id="opIdcreateField"></a>

> Code samples

```bash
curl http://localhost:8055/fields/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "field": "id",
    "type": "integer",
    "schema": {
      "name": "title",
      "table": "posts",
      "type": "string",
      "default_value": null,
      "max_length": null,
      "is_nullable": false,
      "is_primary_key": false,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null,
      "comment": null,
      "schema": "public",
      "foreign_key_schema": null
    },
    "meta": {
      "id": 3,
      "collection": "posts",
      "field": "title",
      "special": null,
      "system-interface": "primary-key",
      "options": null,
      "display": null,
      "display_options": null,
      "locked": true,
      "readonly": false,
      "hidden": true,
      "sort": 1,
      "width": null,
      "group": null,
      "translation": null,
      "note": ""
    }
  }'
```

`POST /fields/{collection}`

Create a new field in a given collection.

> Body parameter

```json
{
  "field": "id",
  "type": "integer",
  "schema": {
    "name": "title",
    "table": "posts",
    "type": "string",
    "default_value": null,
    "max_length": null,
    "is_nullable": false,
    "is_primary_key": false,
    "has_auto_increment": false,
    "foreign_key_column": null,
    "foreign_key_table": null,
    "comment": null,
    "schema": "public",
    "foreign_key_schema": null
  },
  "meta": {
    "id": 3,
    "collection": "posts",
    "field": "title",
    "special": null,
    "system-interface": "primary-key",
    "options": null,
    "display": null,
    "display_options": null,
    "locked": true,
    "readonly": false,
    "hidden": true,
    "sort": 1,
    "width": null,
    "group": null,
    "translation": null,
    "note": ""
  }
}
```

<h3 id="create-field-in-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection the item resides in.|
|body|body|object|false|none|
|» field|body|string|true|Unique name of the field. Field name is unique within the collection.|
|» type|body|string|true|Directus specific data type. Used to cast values in the API.|
|» schema|body|object|false|The schema info.|
|» » name|body|string|false|The name of the field.|
|» » table|body|string|false|The collection of the field.|
|» » type|body|string|false|The type of the field.|
|» » default_value|body|string \| null|false|The default value of the field.|
|» » max_length|body|integer \| null|false|The max length of the field.|
|» » is_nullable|body|boolean|false|If the field is nullable.|
|» » is_primary_key|body|boolean|false|If the field is primary key.|
|» » has_auto_increment|body|boolean|false|If the field has auto increment.|
|» » foreign_key_column|body|string \| null|false|Related column from the foreign key constraint.|
|» » foreign_key_table|body|string \| null|false|Related table from the foreign key constraint.|
|» » comment|body|string \| null|false|Comment as saved in the database.|
|» » schema|body|string|false|Database schema (pg only).|
|» » foreign_key_schema|body|string \| null|false|Related schema from the foreign key constraint (pg only).|
|» meta|body|object \| null|false|The meta info.|
|» » id|body|integer|false|Unique identifier for the field in the `directus_fields` collection.|
|» » collection|body|string|false|Unique name of the collection this field is in.|
|» » field|body|string|false|Unique name of the field. Field name is unique within the collection.|
|» » special|body|[string]|false|Transformation flag for field|
|» » system-interface|body|string \| null|false|What interface is used in the admin app to edit the value for this field.|
|» » options|body|object \| null|false|Options for the interface that's used. This format is based on the individual interface.|
|» » display|body|string \| null|false|What display is used in the admin app to display the value for this field.|
|» » display_options|body|object \| null|false|Options for the display that's used. This format is based on the individual display.|
|» » locked|body|boolean|false|If the field can be altered by the end user. Directus system fields have this value set to `true`.|
|» » readonly|body|boolean|false|Prevents the user from editing the value in the field.|
|» » hidden|body|boolean|false|If this field should be hidden.|
|» » sort|body|integer \| null|false|Sort order of this field on the edit page of the admin app.|
|» » width|body|string \| null|false|Width of the field on the edit form.|
|» » group|body|integer \| null|false|What field group this field is part of.|
|» » translation|body|object \| null|false|Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.|
|» » note|body|string \| null|false|A user provided note for the field. Will be rendered alongside the interface on the edit page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » width|half|
|» » width|half-left|
|» » width|half-right|
|» » width|full|
|» » width|fill|
|» » width|null|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection": "about_us",
    "field": "id",
    "type": "integer",
    "schema": {
      "name": "title",
      "table": "posts",
      "type": "string",
      "default_value": null,
      "max_length": null,
      "is_nullable": false,
      "is_primary_key": false,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null,
      "comment": null,
      "schema": "public",
      "foreign_key_schema": null
    },
    "meta": {
      "id": 3,
      "collection": "posts",
      "field": "title",
      "special": null,
      "system-interface": "primary-key",
      "options": null,
      "display": null,
      "display_options": null,
      "locked": true,
      "readonly": false,
      "hidden": true,
      "sort": 1,
      "width": null,
      "group": null,
      "translations": null,
      "note": ""
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-field-in-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-field-in-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Fields](#schemafields)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Field

<a id="opIdgetCollectionField"></a>

> Code samples

```bash
curl http://localhost:8055/fields/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /fields/{collection}/{id}`

Retrieves the details of a single field in a given collection.

<h3 id="retrieve-a-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection the item resides in.|
|id|path|string|true|Unique identifier of the field.|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection": "about_us",
    "field": "id",
    "type": "integer",
    "schema": {
      "name": "title",
      "table": "posts",
      "type": "string",
      "default_value": null,
      "max_length": null,
      "is_nullable": false,
      "is_primary_key": false,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null,
      "comment": null,
      "schema": "public",
      "foreign_key_schema": null
    },
    "meta": {
      "id": 3,
      "collection": "posts",
      "field": "title",
      "special": null,
      "system-interface": "primary-key",
      "options": null,
      "display": null,
      "display_options": null,
      "locked": true,
      "readonly": false,
      "hidden": true,
      "sort": 1,
      "width": null,
      "group": null,
      "translations": null,
      "note": ""
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Fields](#schemafields)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Field

<a id="opIddeleteField"></a>

> Code samples

```bash
curl http://localhost:8055/fields/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /fields/{collection}/{id}`

Delete an existing field.

<h3 id="delete-a-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection the item resides in.|
|id|path|string|true|Unique identifier of the field.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-field-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Field

<a id="opIdupdateField"></a>

> Code samples

```bash
curl http://localhost:8055/fields/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "field": "id",
    "type": "integer",
    "schema": {
      "name": "title",
      "table": "posts",
      "type": "string",
      "default_value": null,
      "max_length": null,
      "is_nullable": false,
      "is_primary_key": false,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null,
      "comment": null,
      "schema": "public",
      "foreign_key_schema": null
    },
    "meta": {
      "id": 3,
      "collection": "posts",
      "field": "title",
      "special": null,
      "system-interface": "primary-key",
      "options": null,
      "display": null,
      "display_options": null,
      "locked": true,
      "readonly": false,
      "hidden": true,
      "sort": 1,
      "width": null,
      "group": null,
      "translation": null,
      "note": ""
    }
  }'
```

`PATCH /fields/{collection}/{id}`

Update an existing field.

> Body parameter

```json
{
  "field": "id",
  "type": "integer",
  "schema": {
    "name": "title",
    "table": "posts",
    "type": "string",
    "default_value": null,
    "max_length": null,
    "is_nullable": false,
    "is_primary_key": false,
    "has_auto_increment": false,
    "foreign_key_column": null,
    "foreign_key_table": null,
    "comment": null,
    "schema": "public",
    "foreign_key_schema": null
  },
  "meta": {
    "id": 3,
    "collection": "posts",
    "field": "title",
    "special": null,
    "system-interface": "primary-key",
    "options": null,
    "display": null,
    "display_options": null,
    "locked": true,
    "readonly": false,
    "hidden": true,
    "sort": 1,
    "width": null,
    "group": null,
    "translation": null,
    "note": ""
  }
}
```

<h3 id="update-a-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection the item resides in.|
|id|path|string|true|Unique identifier of the field.|
|body|body|object|false|none|
|» field|body|string|false|Unique name of the field. Field name is unique within the collection.|
|» type|body|string|false|Directus specific data type. Used to cast values in the API.|
|» schema|body|object|false|The schema info.|
|» » name|body|string|false|The name of the field.|
|» » table|body|string|false|The collection of the field.|
|» » type|body|string|false|The type of the field.|
|» » default_value|body|string \| null|false|The default value of the field.|
|» » max_length|body|integer \| null|false|The max length of the field.|
|» » is_nullable|body|boolean|false|If the field is nullable.|
|» » is_primary_key|body|boolean|false|If the field is primary key.|
|» » has_auto_increment|body|boolean|false|If the field has auto increment.|
|» » foreign_key_column|body|string \| null|false|Related column from the foreign key constraint.|
|» » foreign_key_table|body|string \| null|false|Related table from the foreign key constraint.|
|» » comment|body|string \| null|false|Comment as saved in the database.|
|» » schema|body|string|false|Database schema (pg only).|
|» » foreign_key_schema|body|string \| null|false|Related schema from the foreign key constraint (pg only).|
|» meta|body|object \| null|false|The meta info.|
|» » id|body|integer|false|Unique identifier for the field in the `directus_fields` collection.|
|» » collection|body|string|false|Unique name of the collection this field is in.|
|» » field|body|string|false|Unique name of the field. Field name is unique within the collection.|
|» » special|body|[string]|false|Transformation flag for field|
|» » system-interface|body|string \| null|false|What interface is used in the admin app to edit the value for this field.|
|» » options|body|object \| null|false|Options for the interface that's used. This format is based on the individual interface.|
|» » display|body|string \| null|false|What display is used in the admin app to display the value for this field.|
|» » display_options|body|object \| null|false|Options for the display that's used. This format is based on the individual display.|
|» » locked|body|boolean|false|If the field can be altered by the end user. Directus system fields have this value set to `true`.|
|» » readonly|body|boolean|false|Prevents the user from editing the value in the field.|
|» » hidden|body|boolean|false|If this field should be hidden.|
|» » sort|body|integer \| null|false|Sort order of this field on the edit page of the admin app.|
|» » width|body|string \| null|false|Width of the field on the edit form.|
|» » group|body|integer \| null|false|What field group this field is part of.|
|» » translation|body|object \| null|false|Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.|
|» » note|body|string \| null|false|A user provided note for the field. Will be rendered alongside the interface on the edit page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » width|half|
|» » width|half-left|
|» » width|half-right|
|» » width|full|
|» » width|fill|
|» » width|null|

> Example responses

> 200 Response

```json
{
  "data": {
    "collection": "about_us",
    "field": "id",
    "type": "integer",
    "schema": {
      "name": "title",
      "table": "posts",
      "type": "string",
      "default_value": null,
      "max_length": null,
      "is_nullable": false,
      "is_primary_key": false,
      "has_auto_increment": false,
      "foreign_key_column": null,
      "foreign_key_table": null,
      "comment": null,
      "schema": "public",
      "foreign_key_schema": null
    },
    "meta": {
      "id": 3,
      "collection": "posts",
      "field": "title",
      "special": null,
      "system-interface": "primary-key",
      "options": null,
      "display": null,
      "display_options": null,
      "locked": true,
      "readonly": false,
      "hidden": true,
      "sort": 1,
      "width": null,
      "group": null,
      "translations": null,
      "note": ""
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Fields](#schemafields)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-files">Files</h1>

Files can be saved in any given location. Directus has a powerful assets endpoint that can be used to generate thumbnails for images on the fly.

## List Files

<a id="opIdgetFiles"></a>

> Code samples

```bash
curl http://localhost:8055/files \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /files`

List the files.

<h3 id="list-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
      "storage": "local",
      "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
      "filename_download": "avatar.jpg",
      "title": "User Avatar",
      "type": "image/jpeg",
      "folder": null,
      "created_on": "2019-12-03T00:10:15+00:00",
      "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "uploaded_on": "2019-12-03T00:10:15+00:00",
      "charset": "binary",
      "filesize": 137862,
      "width": 800,
      "height": 838,
      "duration": 0,
      "embed": null,
      "description": "string",
      "location": "string",
      "tags": [
        "string"
      ],
      "metadata": {}
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="list-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Files](#schemafiles)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a File

<a id="opIdcreateFile"></a>

> Code samples

```bash
curl http://localhost:8055/files \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": "string"
  }'
```

`POST /files`

Create a new file

> Body parameter

```json
{
  "data": "string"
}
```

<h3 id="create-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
    "storage": "local",
    "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
    "filename_download": "avatar.jpg",
    "title": "User Avatar",
    "type": "image/jpeg",
    "folder": null,
    "created_on": "2019-12-03T00:10:15+00:00",
    "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "uploaded_on": "2019-12-03T00:10:15+00:00",
    "charset": "binary",
    "filesize": 137862,
    "width": 800,
    "height": 838,
    "duration": 0,
    "embed": null,
    "description": "string",
    "location": "string",
    "tags": [
      "string"
    ],
    "metadata": {}
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="create-a-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Files](#schemafiles)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Files

<a id="opIddeleteFiles"></a>

> Code samples

```bash
curl http://localhost:8055/files \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /files`

Delete multiple existing files.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-files-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Files

<a id="opIdupdateFiles"></a>

> Code samples

```bash
curl http://localhost:8055/files \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "data": "string"
    },
    "keys": [
      "string"
    ]
  }'
```

`PATCH /files`

Update multiple files at the same time.

> Body parameter

```json
{
  "data": {
    "data": "string"
  },
  "keys": [
    "string"
  ]
}
```

<h3 id="update-multiple-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» data|body|object|false|none|
|» » data|body|string|false|none|
|» keys|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
      "storage": "local",
      "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
      "filename_download": "avatar.jpg",
      "title": "User Avatar",
      "type": "image/jpeg",
      "folder": null,
      "created_on": "2019-12-03T00:10:15+00:00",
      "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "uploaded_on": "2019-12-03T00:10:15+00:00",
      "charset": "binary",
      "filesize": 137862,
      "width": 800,
      "height": 838,
      "duration": 0,
      "embed": null,
      "description": "string",
      "location": "string",
      "tags": [
        "string"
      ],
      "metadata": {}
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Files](#schemafiles)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Files

<a id="opIdgetFile"></a>

> Code samples

```bash
curl http://localhost:8055/files/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /files/{id}`

Retrieve a single file by unique identifier.

<h3 id="retrieve-a-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
    "storage": "local",
    "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
    "filename_download": "avatar.jpg",
    "title": "User Avatar",
    "type": "image/jpeg",
    "folder": null,
    "created_on": "2019-12-03T00:10:15+00:00",
    "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "uploaded_on": "2019-12-03T00:10:15+00:00",
    "charset": "binary",
    "filesize": 137862,
    "width": 800,
    "height": 838,
    "duration": 0,
    "embed": null,
    "description": "string",
    "location": "string",
    "tags": [
      "string"
    ],
    "metadata": {}
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="retrieve-a-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Files](#schemafiles)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a File

<a id="opIddeleteFile"></a>

> Code samples

```bash
curl http://localhost:8055/files/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /files/{id}`

Delete an existing file.

<h3 id="delete-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-a-file-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a File

<a id="opIdupdateFile"></a>

> Code samples

```bash
curl http://localhost:8055/files/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "title": "User Avatar",
    "filename_download": "string",
    "description": "string",
    "folder": null,
    "tags": [
      "string"
    ]
  }'
```

`PATCH /files/{id}`

Update an existing file, and/or replace it's file contents.

> Body parameter

```json
{
  "title": "User Avatar",
  "filename_download": "string",
  "description": "string",
  "folder": null,
  "tags": [
    "string"
  ]
}
```

<h3 id="update-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|object|false|none|
|» title|body|string|false|Title for the file. Is extracted from the filename on upload, but can be edited by the user.|
|» filename_download|body|string|false|Preferred filename when file is downloaded.|
|» description|body|string \| null|false|Description for the file.|
|» folder|body|string \| [Folders](#schemafolders) \| null|false|Virtual folder where this file resides in.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[Folders](#schemafolders)|false|none|
|» tags|body|[string]|false|Tags for the file. Is automatically populated based on Exif data for images.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
    "storage": "local",
    "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
    "filename_download": "avatar.jpg",
    "title": "User Avatar",
    "type": "image/jpeg",
    "folder": null,
    "created_on": "2019-12-03T00:10:15+00:00",
    "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "uploaded_on": "2019-12-03T00:10:15+00:00",
    "charset": "binary",
    "filesize": 137862,
    "width": 800,
    "height": 838,
    "duration": 0,
    "embed": null,
    "description": "string",
    "location": "string",
    "tags": [
      "string"
    ],
    "metadata": {}
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-a-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Files](#schemafiles)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-flows">Flows</h1>

Flows enable custom, event-driven data processing and task automation.

## List Flows

<a id="opIdgetFlows"></a>

> Code samples

```bash
curl http://localhost:8055/flows \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /flows`

Get all flows.

<h3 id="list-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Update Articles Flow",
      "icon": "bolt",
      "color": "#112233",
      "note": "This flow is used to update articles periodically.",
      "status": "active",
      "trigger": "manual",
      "options": null,
      "accountability": "$trigger",
      "date_created": "2022-05-11T13:14:52Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "operation": "92e82998-e421-412f-a513-13701e83e4ce",
      "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-flows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Flows](#schemaflows)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a Flow

<a id="opIdcreateFlow"></a>

> Code samples

```bash
curl http://localhost:8055/flows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Update Articles Flow",
    "icon": "bolt",
    "color": "#112233",
    "note": "This flow is used to update articles periodically.",
    "status": "active",
    "trigger": "manual",
    "options": null,
    "accountability": "$trigger",
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce",
    "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
  }'
```

`POST /flows`

Create a new flow.

> Body parameter

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Update Articles Flow",
  "icon": "bolt",
  "color": "#112233",
  "note": "This flow is used to update articles periodically.",
  "status": "active",
  "trigger": "manual",
  "options": null,
  "accountability": "$trigger",
  "date_created": "2022-05-11T13:14:52Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "operation": "92e82998-e421-412f-a513-13701e83e4ce",
  "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
}
```

<h3 id="create-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|[Flows](#schemaflows)|false|none|
|» *anyOf*|body|[Flows](#schemaflows)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Update Articles Flow",
    "icon": "bolt",
    "color": "#112233",
    "note": "This flow is used to update articles periodically.",
    "status": "active",
    "trigger": "manual",
    "options": null,
    "accountability": "$trigger",
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce",
    "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Flows](#schemaflows)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Flows

<a id="opIddeleteFlows"></a>

> Code samples

```bash
curl http://localhost:8055/flows \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /flows`

Delete multiple existing flows.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-flows-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Flows

<a id="opIdupdateFlows"></a>

> Code samples

```bash
curl http://localhost:8055/flows \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Update Articles Flow",
      "icon": "bolt",
      "color": "#112233",
      "note": "This flow is used to update articles periodically.",
      "status": "active",
      "trigger": "manual",
      "options": null,
      "accountability": "$trigger",
      "date_created": "2022-05-11T13:14:52Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "operation": "92e82998-e421-412f-a513-13701e83e4ce",
      "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
    },
    "keys": [
      "string"
    ]
  }'
```

`PATCH /flows`

Update multiple flows at the same time.

> Body parameter

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Update Articles Flow",
    "icon": "bolt",
    "color": "#112233",
    "note": "This flow is used to update articles periodically.",
    "status": "active",
    "trigger": "manual",
    "options": null,
    "accountability": "$trigger",
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce",
    "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
  },
  "keys": [
    "string"
  ]
}
```

<h3 id="update-multiple-flows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» data|body|[Flows](#schemaflows)|false|none|
|» » *anyOf*|body|[Flows](#schemaflows)|false|none|
|» keys|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Update Articles Flow",
      "icon": "bolt",
      "color": "#112233",
      "note": "This flow is used to update articles periodically.",
      "status": "active",
      "trigger": "manual",
      "options": null,
      "accountability": "$trigger",
      "date_created": "2022-05-11T13:14:52Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "operation": "92e82998-e421-412f-a513-13701e83e4ce",
      "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-flows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-flows-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Flows](#schemaflows)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Flow

<a id="opIdgetFlow"></a>

> Code samples

```bash
curl http://localhost:8055/flows/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /flows/{id}`

Retrieve a single flow by unique identifier.

<h3 id="retrieve-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Update Articles Flow",
    "icon": "bolt",
    "color": "#112233",
    "note": "This flow is used to update articles periodically.",
    "status": "active",
    "trigger": "manual",
    "options": null,
    "accountability": "$trigger",
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce",
    "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Flows](#schemaflows)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Flow

<a id="opIddeleteFlow"></a>

> Code samples

```bash
curl http://localhost:8055/flows/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /flows/{id}`

Delete an existing flow

<h3 id="delete-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-flow-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Flow

<a id="opIdupdateFlow"></a>

> Code samples

```bash
curl http://localhost:8055/flows/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Update Articles Flow",
    "icon": "bolt",
    "color": "#112233",
    "note": "This flow is used to update articles periodically.",
    "status": "active",
    "trigger": "manual",
    "options": null,
    "accountability": "$trigger",
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce",
    "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
  }'
```

`PATCH /flows/{id}`

Update an existing flow

> Body parameter

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Update Articles Flow",
  "icon": "bolt",
  "color": "#112233",
  "note": "This flow is used to update articles periodically.",
  "status": "active",
  "trigger": "manual",
  "options": null,
  "accountability": "$trigger",
  "date_created": "2022-05-11T13:14:52Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "operation": "92e82998-e421-412f-a513-13701e83e4ce",
  "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
}
```

<h3 id="update-a-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|[Flows](#schemaflows)|false|none|
|» *anyOf*|body|[Flows](#schemaflows)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Update Articles Flow",
    "icon": "bolt",
    "color": "#112233",
    "note": "This flow is used to update articles periodically.",
    "status": "active",
    "trigger": "manual",
    "options": null,
    "accountability": "$trigger",
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce",
    "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Flows](#schemaflows)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-folders">Folders</h1>

Group files by virtual folders.

## List Folders

<a id="opIdgetFolders"></a>

> Code samples

```bash
curl http://localhost:8055/folders \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /folders`

List the folders.

<h3 id="list-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "0cf0e03d-4364-45df-b77b-ca61f61869d2",
      "name": "New York",
      "parent": null,
      "type": "files"
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Folders](#schemafolders)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a Folder

<a id="opIdcreateFolder"></a>

> Code samples

```bash
curl http://localhost:8055/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "Amsterdam",
    "parent": 0
  }'
```

`POST /folders`

Create a new folder.

> Body parameter

```json
{
  "name": "Amsterdam",
  "parent": 0
}
```

<h3 id="create-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|object|false|none|
|» name|body|string|true|Name of the folder.|
|» parent|body|integer|false|Unique identifier of the parent folder. This allows for nested folders.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "0cf0e03d-4364-45df-b77b-ca61f61869d2",
    "name": "New York",
    "parent": null,
    "type": "files"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Folders](#schemafolders)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Folders

<a id="opIddeleteFolders"></a>

> Code samples

```bash
curl http://localhost:8055/folders \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /folders`

Delete multiple existing folders.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-folders-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Folders

<a id="opIdupdateFolders"></a>

> Code samples

```bash
curl http://localhost:8055/folders \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "name": "Amsterdam",
      "parent": 0
    },
    "keys": [
      "string"
    ]
  }'
```

`PATCH /folders`

Update multiple folders at the same time.

> Body parameter

```json
{
  "data": {
    "name": "Amsterdam",
    "parent": 0
  },
  "keys": [
    "string"
  ]
}
```

<h3 id="update-multiple-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» data|body|object|false|none|
|» » name|body|string|true|Name of the folder.|
|» » parent|body|integer|false|Unique identifier of the parent folder. This allows for nested folders.|
|» keys|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "0cf0e03d-4364-45df-b77b-ca61f61869d2",
      "name": "New York",
      "parent": null,
      "type": "files"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Folders](#schemafolders)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Folder

<a id="opIdgetFolder"></a>

> Code samples

```bash
curl http://localhost:8055/folders/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /folders/{id}`

Retrieve a single folder by unique identifier.

<h3 id="retrieve-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "0cf0e03d-4364-45df-b77b-ca61f61869d2",
    "name": "New York",
    "parent": null,
    "type": "files"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Folders](#schemafolders)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Folder

<a id="opIddeleteFolder"></a>

> Code samples

```bash
curl http://localhost:8055/folders/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /folders/{id}`

Delete an existing folder

<h3 id="delete-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-folder-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Folder

<a id="opIdupdateFolder"></a>

> Code samples

```bash
curl http://localhost:8055/folders/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "parent": 3
  }'
```

`PATCH /folders/{id}`

Update an existing folder

> Body parameter

```json
{
  "name": "string",
  "parent": 3
}
```

<h3 id="update-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|object|false|none|
|» name|body|string|false|Name of the folder. Can't be null or empty.|
|» parent|body|integer|false|Unique identifier of the parent folder. This allows for nested folders.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "0cf0e03d-4364-45df-b77b-ca61f61869d2",
    "name": "New York",
    "parent": null,
    "type": "files"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Folders](#schemafolders)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-items">Items</h1>

Items are individual pieces of data in your database. They can be anything, from articles, to IoT status checks.

## List Items

<a id="opIdgetItems"></a>

> Code samples

```bash
curl http://localhost:8055/items/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /items/{collection}`

List the items.

<h3 id="list-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|version|query|string|false|Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.<br>|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|
|collection|path|string|true|Collection of which you want to retrieve the items from.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {}
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="list-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth
</aside>

## Create an Item

<a id="opIdcreateItem"></a>

> Code samples

```bash
curl http://localhost:8055/items/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /items/{collection}`

Create a new item.

<h3 id="create-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection of which you want to retrieve the items from.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="create-an-item-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Items

<a id="opIddeleteItems"></a>

> Code samples

```bash
curl http://localhost:8055/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /items/{collection}`

Delete multiple existing items.

<h3 id="delete-multiple-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection of which you want to retrieve the items from.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-items-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Items

<a id="opIdupdateItems"></a>

> Code samples

```bash
curl http://localhost:8055/items/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PATCH /items/{collection}`

Update multiple items at the same time.

<h3 id="update-multiple-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|collection|path|string|true|Collection of which you want to retrieve the items from.|

> Example responses

> 200 Response

```json
{
  "data": [
    {}
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve an Item

<a id="opIdgetItem"></a>

> Code samples

```bash
curl http://localhost:8055/items/string/1 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /items/{collection}/{id}`

Retrieve a single item by unique identifier.

<h3 id="retrieve-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|version|query|string|false|Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.<br>|
|versionRaw|query|boolean|false|When used with `version`, returns the raw revision data instead of the merged item data.|
|collection|path|string|true|Collection of which you want to retrieve the items from.|
|id|path|integer \| string|true|Index of the item.|

> Example responses

> 200 Response

```json
{
  "data": {}
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-an-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete an Item

<a id="opIddeleteItem"></a>

> Code samples

```bash
curl http://localhost:8055/items/string/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /items/{collection}/{id}`

Delete an existing item.

<h3 id="delete-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection of which you want to retrieve the items from.|
|id|path|integer \| string|true|Index of the item.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-an-item-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update an Item

<a id="opIdupdateItem"></a>

> Code samples

```bash
curl http://localhost:8055/items/string/1 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`PATCH /items/{collection}/{id}`

Update an existing item.

> Body parameter

```json
{}
```

<h3 id="update-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|collection|path|string|true|Collection of which you want to retrieve the items from.|
|id|path|integer \| string|true|Index of the item.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {}
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-an-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-operations">Operations</h1>

Operations are the building blocks within Data Flows.

## List Operations

<a id="opIdgetOperations"></a>

> Code samples

```bash
curl http://localhost:8055/operations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /operations`

Get all operations.

<h3 id="list-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Log to Console",
      "key": "log_console",
      "type": "log",
      "options": null,
      "position_x": 12,
      "position_y": 12,
      "date_created": "2022-05-11T13:14:52Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "operation": "92e82998-e421-412f-a513-13701e83e4ce"
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Operations](#schemaoperations)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create an Operation

<a id="opIdcreateOperation"></a>

> Code samples

```bash
curl http://localhost:8055/operations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Log to Console",
    "key": "log_console",
    "type": "log",
    "options": null,
    "position_x": 12,
    "position_y": 12,
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce"
  }'
```

`POST /operations`

Create a new operation.

> Body parameter

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Log to Console",
  "key": "log_console",
  "type": "log",
  "options": null,
  "position_x": 12,
  "position_y": 12,
  "date_created": "2022-05-11T13:14:52Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "operation": "92e82998-e421-412f-a513-13701e83e4ce"
}
```

<h3 id="create-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|[Operations](#schemaoperations)|false|none|
|» *anyOf*|body|[Operations](#schemaoperations)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Log to Console",
    "key": "log_console",
    "type": "log",
    "options": null,
    "position_x": 12,
    "position_y": 12,
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-an-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Operations](#schemaoperations)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Operations

<a id="opIddeleteOperations"></a>

> Code samples

```bash
curl http://localhost:8055/operations \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /operations`

Delete multiple existing operations.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-operations-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Operations

<a id="opIdupdateOperations"></a>

> Code samples

```bash
curl http://localhost:8055/operations \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Log to Console",
      "key": "log_console",
      "type": "log",
      "options": null,
      "position_x": 12,
      "position_y": 12,
      "date_created": "2022-05-11T13:14:52Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "operation": "92e82998-e421-412f-a513-13701e83e4ce"
    },
    "keys": [
      "string"
    ]
  }'
```

`PATCH /operations`

Update multiple operations at the same time.

> Body parameter

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Log to Console",
    "key": "log_console",
    "type": "log",
    "options": null,
    "position_x": 12,
    "position_y": 12,
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce"
  },
  "keys": [
    "string"
  ]
}
```

<h3 id="update-multiple-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» data|body|[Operations](#schemaoperations)|false|none|
|» » *anyOf*|body|[Operations](#schemaoperations)|false|none|
|» keys|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Log to Console",
      "key": "log_console",
      "type": "log",
      "options": null,
      "position_x": 12,
      "position_y": 12,
      "date_created": "2022-05-11T13:14:52Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "operation": "92e82998-e421-412f-a513-13701e83e4ce"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Operations](#schemaoperations)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve an Operation

<a id="opIdgetOperation"></a>

> Code samples

```bash
curl http://localhost:8055/operations/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /operations/{id}`

Retrieve a single operation by unique identifier.

<h3 id="retrieve-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Log to Console",
    "key": "log_console",
    "type": "log",
    "options": null,
    "position_x": 12,
    "position_y": 12,
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-an-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Operations](#schemaoperations)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete an Operation

<a id="opIddeleteOperation"></a>

> Code samples

```bash
curl http://localhost:8055/operations/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /operations/{id}`

Delete an existing operation

<h3 id="delete-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-an-operation-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update an Operation

<a id="opIdupdateOperation"></a>

> Code samples

```bash
curl http://localhost:8055/operations/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Log to Console",
    "key": "log_console",
    "type": "log",
    "options": null,
    "position_x": 12,
    "position_y": 12,
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce"
  }'
```

`PATCH /operations/{id}`

Update an existing operation

> Body parameter

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Log to Console",
  "key": "log_console",
  "type": "log",
  "options": null,
  "position_x": 12,
  "position_y": 12,
  "date_created": "2022-05-11T13:14:52Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "operation": "92e82998-e421-412f-a513-13701e83e4ce"
}
```

<h3 id="update-an-operation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|[Operations](#schemaoperations)|false|none|
|» *anyOf*|body|[Operations](#schemaoperations)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Log to Console",
    "key": "log_console",
    "type": "log",
    "options": null,
    "position_x": 12,
    "position_y": 12,
    "date_created": "2022-05-11T13:14:52Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "operation": "92e82998-e421-412f-a513-13701e83e4ce"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-an-operation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-an-operation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Operations](#schemaoperations)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-permissions">Permissions</h1>

Permissions control who has access to what and when.

## List Permissions

<a id="opIdgetPermissions"></a>

> Code samples

```bash
curl http://localhost:8055/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /permissions`

List all permissions.

<h3 id="list-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "collection": "customers",
      "action": "create",
      "permissions": {},
      "validation": {},
      "presets": {},
      "fields": [
        "string"
      ]
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Permissions](#schemapermissions)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a Permission

<a id="opIdcreatePermission"></a>

> Code samples

```bash
curl http://localhost:8055/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": "customers",
    "comment": "none",
    "create": "none",
    "delete": "none",
    "explain": "none",
    "read": "none",
    "role": 3,
    "read_field_blacklist": [
      "featured_image"
    ],
    "status": "string",
    "status_blacklist": [
      "string"
    ],
    "update": "none",
    "write_field_blacklist": [
      "string"
    ]
  }'
```

`POST /permissions`

Create a new permission.

> Body parameter

```json
{
  "collection": "customers",
  "comment": "none",
  "create": "none",
  "delete": "none",
  "explain": "none",
  "read": "none",
  "role": 3,
  "read_field_blacklist": [
    "featured_image"
  ],
  "status": "string",
  "status_blacklist": [
    "string"
  ],
  "update": "none",
  "write_field_blacklist": [
    "string"
  ]
}
```

<h3 id="create-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» collection|body|string|false|What collection this permission applies to.|
|» comment|body|string|false|If the user can post comments.|
|» create|body|string|false|If the user can create items.|
|» delete|body|string|false|If the user can update items.|
|» explain|body|string|false|If the user is required to leave a comment explaining what was changed.|
|» read|body|string|false|If the user can read items.|
|» role|body|integer|false|Unique identifier of the role this permission applies to.|
|» read_field_blacklist|body|[string]|false|Explicitly denies read access for specific fields.|
|» status|body|string|false|What status this permission applies to.|
|» status_blacklist|body|[string]|false|Explicitly denies specific statuses to be used.|
|» update|body|string|false|If the user can update items.|
|» write_field_blacklist|body|[string]|false|Explicitly denies write access for specific fields.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» comment|none|
|» comment|create|
|» comment|update|
|» comment|full|
|» create|none|
|» create|full|
|» delete|none|
|» delete|mine|
|» delete|role|
|» delete|full|
|» explain|none|
|» explain|create|
|» explain|update|
|» explain|always|
|» read|none|
|» read|mine|
|» read|role|
|» read|full|
|» update|none|
|» update|mine|
|» update|role|
|» update|full|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "collection": "customers",
    "action": "create",
    "permissions": {},
    "validation": {},
    "presets": {},
    "fields": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-permission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Permissions](#schemapermissions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Permissions

<a id="opIddeletePermissions"></a>

> Code samples

```bash
curl http://localhost:8055/permissions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /permissions`

Delete multiple existing permissions.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-permissions-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Permissions

<a id="opIdupdatePermissions"></a>

> Code samples

```bash
curl http://localhost:8055/permissions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "keys": [
      "string"
    ],
    "data": {
      "collection": "customers",
      "comment": "none",
      "create": "none",
      "delete": "none",
      "explain": "none",
      "read": "none",
      "role": 3,
      "read_field_blacklist": [
        "featured_image"
      ],
      "status": "string",
      "status_blacklist": [
        "string"
      ],
      "update": "none",
      "write_field_blacklist": [
        "string"
      ]
    }
  }'
```

`PATCH /permissions`

Update multiple permissions at the same time.

> Body parameter

```json
{
  "keys": [
    "string"
  ],
  "data": {
    "collection": "customers",
    "comment": "none",
    "create": "none",
    "delete": "none",
    "explain": "none",
    "read": "none",
    "role": 3,
    "read_field_blacklist": [
      "featured_image"
    ],
    "status": "string",
    "status_blacklist": [
      "string"
    ],
    "update": "none",
    "write_field_blacklist": [
      "string"
    ]
  }
}
```

<h3 id="update-multiple-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» keys|body|[string]|false|none|
|» data|body|object|false|none|
|» » collection|body|string|false|What collection this permission applies to.|
|» » comment|body|string|false|If the user can post comments.|
|» » create|body|string|false|If the user can create items.|
|» » delete|body|string|false|If the user can update items.|
|» » explain|body|string|false|If the user is required to leave a comment explaining what was changed.|
|» » read|body|string|false|If the user can read items.|
|» » role|body|integer|false|Unique identifier of the role this permission applies to.|
|» » read_field_blacklist|body|[string]|false|Explicitly denies read access for specific fields.|
|» » status|body|string|false|What status this permission applies to.|
|» » status_blacklist|body|[string]|false|Explicitly denies specific statuses to be used.|
|» » update|body|string|false|If the user can update items.|
|» » write_field_blacklist|body|[string]|false|Explicitly denies write access for specific fields.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » comment|none|
|» » comment|create|
|» » comment|update|
|» » comment|full|
|» » create|none|
|» » create|full|
|» » delete|none|
|» » delete|mine|
|» » delete|role|
|» » delete|full|
|» » explain|none|
|» » explain|create|
|» » explain|update|
|» » explain|always|
|» » read|none|
|» » read|mine|
|» » read|role|
|» » read|full|
|» » update|none|
|» » update|mine|
|» » update|role|
|» » update|full|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "collection": "customers",
      "action": "create",
      "permissions": {},
      "validation": {},
      "presets": {},
      "fields": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Permissions](#schemapermissions)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## List My Permissions

<a id="opIdgetMyPermissions"></a>

> Code samples

```bash
curl http://localhost:8055/permissions/me \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /permissions/me`

List the permissions that apply to the current user.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "collection": "customers",
      "action": "create",
      "permissions": {},
      "validation": {},
      "presets": {},
      "fields": [
        "string"
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-my-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-my-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Permissions](#schemapermissions)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Permission

<a id="opIdgetPermission"></a>

> Code samples

```bash
curl http://localhost:8055/permissions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /permissions/{id}`

Retrieve a single permissions object by unique identifier.

<h3 id="retrieve-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|integer|true|Index|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "collection": "customers",
    "action": "create",
    "permissions": {},
    "validation": {},
    "presets": {},
    "fields": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-permission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Permissions](#schemapermissions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Permission

<a id="opIddeletePermission"></a>

> Code samples

```bash
curl http://localhost:8055/permissions/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /permissions/{id}`

Delete an existing permission

<h3 id="delete-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-permission-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Permission

<a id="opIdupdatePermission"></a>

> Code samples

```bash
curl http://localhost:8055/permissions/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection": {},
    "comment": "none",
    "create": "none",
    "delete": "none",
    "explain": "none",
    "read": "none",
    "read_field_blacklist": {},
    "role": {},
    "status": {},
    "status_blacklist": {},
    "update": "none",
    "write_field_blacklist": {}
  }'
```

`PATCH /permissions/{id}`

Update an existing permission

> Body parameter

```json
{
  "collection": {},
  "comment": "none",
  "create": "none",
  "delete": "none",
  "explain": "none",
  "read": "none",
  "read_field_blacklist": {},
  "role": {},
  "status": {},
  "status_blacklist": {},
  "update": "none",
  "write_field_blacklist": {}
}
```

<h3 id="update-a-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|integer|true|Index|
|body|body|object|false|none|
|» collection|body|object|false|What collection this permission applies to.|
|» comment|body|string|false|If the user can post comments. `full`.|
|» create|body|string|false|If the user can create items.|
|» delete|body|string|false|If the user can update items.|
|» explain|body|string|false|If the user is required to leave a comment explaining what was changed.|
|» read|body|string|false|If the user can read items.|
|» read_field_blacklist|body|object|false|Explicitly denies read access for specific fields.|
|» role|body|object|false|Unique identifier of the role this permission applies to.|
|» status|body|object|false|What status this permission applies to.|
|» status_blacklist|body|object|false|Explicitly denies specific statuses to be used.|
|» update|body|string|false|If the user can update items.|
|» write_field_blacklist|body|object|false|Explicitly denies write access for specific fields.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» comment|none|
|» comment|create|
|» comment|update|
|» create|none|
|» create|full|
|» delete|none|
|» delete|mine|
|» delete|role|
|» delete|full|
|» explain|none|
|» explain|create|
|» explain|update|
|» explain|always|
|» read|none|
|» read|mine|
|» read|role|
|» read|full|
|» update|none|
|» update|mine|
|» update|role|
|» update|full|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "collection": "customers",
    "action": "create",
    "permissions": {},
    "validation": {},
    "presets": {},
    "fields": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-permission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Permissions](#schemapermissions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-relations">Relations</h1>

What data is linked to what other data. Allows you to assign authors to articles, products to sales, and whatever other structures you can think of.

## List Relations

<a id="opIdgetRelations"></a>

> Code samples

```bash
curl http://localhost:8055/relations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /relations`

List the relations.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "many_collection": "directus_activity",
      "many_field": "user",
      "many_primary": "id",
      "one_collection": "directus_users",
      "one_field": null,
      "one_primary": "id",
      "junction_field": null
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-relations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-relations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Relations](#schemarelations)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a Relation

<a id="opIdcreateRelation"></a>

> Code samples

```bash
curl http://localhost:8055/relations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection_many": "articles",
    "collection_one": "authors",
    "field_many": "author",
    "field_one": "books",
    "junction_field": "string"
  }'
```

`POST /relations`

Create a new relation.

> Body parameter

```json
{
  "collection_many": "articles",
  "collection_one": "authors",
  "field_many": "author",
  "field_one": "books",
  "junction_field": "string"
}
```

<h3 id="create-a-relation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» collection_many|body|string|false|Collection that has the field that holds the foreign key.|
|» collection_one|body|string|false|Collection on the _one_ side of the relationship.|
|» field_many|body|string|false|Foreign key. Field that holds the primary key of the related collection.|
|» field_one|body|string|false|Alias column that serves as the _one_ side of the relationship.|
|» junction_field|body|string|false|Field on the junction table that holds the primary key of the related collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "many_collection": "directus_activity",
    "many_field": "user",
    "many_primary": "id",
    "one_collection": "directus_users",
    "one_field": null,
    "one_primary": "id",
    "junction_field": null
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-relation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-relation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Relations](#schemarelations)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Relation

<a id="opIdgetRelation"></a>

> Code samples

```bash
curl http://localhost:8055/relations/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /relations/{id}`

Retrieve a single relation by unique identifier.

<h3 id="retrieve-a-relation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "many_collection": "directus_activity",
    "many_field": "user",
    "many_primary": "id",
    "one_collection": "directus_users",
    "one_field": null,
    "one_primary": "id",
    "junction_field": null
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-relation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-relation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Relations](#schemarelations)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Relation

<a id="opIddeleteRelation"></a>

> Code samples

```bash
curl http://localhost:8055/relations/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /relations/{id}`

Delete an existing relation.

<h3 id="delete-a-relation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-relation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-relation-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Relation

<a id="opIdupdateRelation"></a>

> Code samples

```bash
curl http://localhost:8055/relations/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "collection_many": "string",
    "collection_one": "string",
    "field_many": "string",
    "field_one": "books",
    "junction_field": "string"
  }'
```

`PATCH /relations/{id}`

Update an existing relation

> Body parameter

```json
{
  "collection_many": "string",
  "collection_one": "string",
  "field_many": "string",
  "field_one": "books",
  "junction_field": "string"
}
```

<h3 id="update-a-relation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|
|body|body|object|false|none|
|» collection_many|body|string|false|Collection that has the field that holds the foreign key.|
|» collection_one|body|string|false|Collection on the _one_ side of the relationship.|
|» field_many|body|string|false|Foreign key. Field that holds the primary key of the related collection.|
|» field_one|body|string|false|Alias column that serves as the _one_ side of the relationship.|
|» junction_field|body|string|false|Field on the junction table that holds the primary key of the related collection.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "many_collection": "directus_activity",
    "many_field": "user",
    "many_primary": "id",
    "one_collection": "directus_users",
    "one_field": null,
    "one_primary": "id",
    "junction_field": null
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-relation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-relation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Relations](#schemarelations)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-revisions">Revisions</h1>

Revisions are individual changes to items made. Directus keeps track of changes made, so you're able to revert to a previous state at will.

## List Revisions

<a id="opIdgetRevisions"></a>

> Code samples

```bash
curl http://localhost:8055/revisions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /revisions`

List the revisions.

<h3 id="list-revisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "activity": 2,
      "collection": "articles",
      "item": "168",
      "data": {
        "author": 1,
        "body": "This is my first post",
        "featured_image": 15,
        "id": "168",
        "title": "Hello, World!"
      },
      "delta": {
        "title": "Hello, World!"
      },
      "parent": null,
      "version": "draft"
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-revisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-revisions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Revisions](#schemarevisions)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Revision

<a id="opIdgetRevision"></a>

> Code samples

```bash
curl http://localhost:8055/revisions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /revisions/{id}`

Retrieve a single revision by unique identifier.

<h3 id="retrieve-a-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Index|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "activity": 2,
    "collection": "articles",
    "item": "168",
    "data": {
      "author": 1,
      "body": "This is my first post",
      "featured_image": 15,
      "id": "168",
      "title": "Hello, World!"
    },
    "delta": {
      "title": "Hello, World!"
    },
    "parent": null,
    "version": "draft"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-revision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Revisions](#schemarevisions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-roles">Roles</h1>

Roles are groups of users that share permissions.

## List Roles

<a id="opIdgetRoles"></a>

> Code samples

```bash
curl http://localhost:8055/roles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /roles`

List the roles.

<h3 id="list-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Administrator",
      "icon": "verified_user",
      "description": "Admins have access to all managed data within the system by default",
      "ip_access": [],
      "enforce_tfa": false,
      "admin_access": false,
      "app_access": true
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Roles](#schemaroles)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a Role

<a id="opIdcreateRole"></a>

> Code samples

```bash
curl http://localhost:8055/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "enforce_tfa": true,
    "external_id": "string",
    "ip_access": [
      "string"
    ],
    "module_listing": "string",
    "name": "Interns"
  }'
```

`POST /roles`

Create a new role.

> Body parameter

```json
{
  "description": "string",
  "enforce_tfa": true,
  "external_id": "string",
  "ip_access": [
    "string"
  ],
  "module_listing": "string",
  "name": "Interns"
}
```

<h3 id="create-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|object|false|none|
|» description|body|string|false|Description of the role.|
|» enforce_tfa|body|boolean|false|Whether or not this role enforces the use of 2FA.|
|» external_id|body|string|false|ID used with external services in SCIM.|
|» ip_access|body|[string]|false|Array of IP addresses that are allowed to connect to the API as a user of this role.|
|» module_listing|body|string|false|Custom override for the admin app module bar navigation.|
|» name|body|string|false|Name of the role.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Administrator",
    "icon": "verified_user",
    "description": "Admins have access to all managed data within the system by default",
    "ip_access": [],
    "enforce_tfa": false,
    "admin_access": false,
    "app_access": true
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Roles](#schemaroles)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Roles

<a id="opIddeleteRoles"></a>

> Code samples

```bash
curl http://localhost:8055/roles \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /roles`

Delete multiple existing roles.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-roles-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Roles

<a id="opIdupdateRoles"></a>

> Code samples

```bash
curl http://localhost:8055/roles \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "keys": [
      "string"
    ],
    "data": {
      "description": "string",
      "enforce_tfa": true,
      "external_id": "string",
      "ip_access": [
        "string"
      ],
      "module_listing": "string",
      "name": "Interns"
    }
  }'
```

`PATCH /roles`

Update multiple roles at the same time.

> Body parameter

```json
{
  "keys": [
    "string"
  ],
  "data": {
    "description": "string",
    "enforce_tfa": true,
    "external_id": "string",
    "ip_access": [
      "string"
    ],
    "module_listing": "string",
    "name": "Interns"
  }
}
```

<h3 id="update-multiple-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» keys|body|[string]|false|none|
|» data|body|object|false|none|
|» » description|body|string|false|Description of the role.|
|» » enforce_tfa|body|boolean|false|Whether or not this role enforces the use of 2FA.|
|» » external_id|body|string|false|ID used with external services in SCIM.|
|» » ip_access|body|[string]|false|Array of IP addresses that are allowed to connect to the API as a user of this role.|
|» » module_listing|body|string|false|Custom override for the admin app module bar navigation.|
|» » name|body|string|false|Name of the role.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "name": "Administrator",
      "icon": "verified_user",
      "description": "Admins have access to all managed data within the system by default",
      "ip_access": [],
      "enforce_tfa": false,
      "admin_access": false,
      "app_access": true
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Roles](#schemaroles)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Role

<a id="opIdgetRole"></a>

> Code samples

```bash
curl http://localhost:8055/roles/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /roles/{id}`

Retrieve a single role by unique identifier.

<h3 id="retrieve-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Administrator",
    "icon": "verified_user",
    "description": "Admins have access to all managed data within the system by default",
    "ip_access": [],
    "enforce_tfa": false,
    "admin_access": false,
    "app_access": true
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Roles](#schemaroles)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Role

<a id="opIddeleteRole"></a>

> Code samples

```bash
curl http://localhost:8055/roles/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /roles/{id}`

Delete an existing role

<h3 id="delete-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-role-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Role

<a id="opIdupdateRole"></a>

> Code samples

```bash
curl http://localhost:8055/roles/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "enforce_tfa": true,
    "external_id": "string",
    "ip_access": [
      "string"
    ],
    "module_listing": "string",
    "name": "string"
  }'
```

`PATCH /roles/{id}`

Update an existing role

> Body parameter

```json
{
  "description": "string",
  "enforce_tfa": true,
  "external_id": "string",
  "ip_access": [
    "string"
  ],
  "module_listing": "string",
  "name": "string"
}
```

<h3 id="update-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|object|false|none|
|» description|body|string|false|Description of the role.|
|» enforce_tfa|body|boolean|false|Whether or not this role enforces the use of 2FA.|
|» external_id|body|string|false|ID used with external services in SCIM.|
|» ip_access|body|[string]|false|Array of IP addresses that are allowed to connect to the API as a user of this role.|
|» module_listing|body|string|false|Custom override for the admin app module bar navigation.|
|» name|body|string|false|Name of the role.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "name": "Administrator",
    "icon": "verified_user",
    "description": "Admins have access to all managed data within the system by default",
    "ip_access": [],
    "enforce_tfa": false,
    "admin_access": false,
    "app_access": true
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Roles](#schemaroles)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-schema">Schema</h1>

Retrieve and update the schema of an instance.

## Retrieve Schema Snapshot

<a id="opIdschemaSnapshot"></a>

> Code samples

```bash
curl http://localhost:8055/schema/snapshot \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /schema/snapshot`

Retrieve the current schema. This endpoint is only available to admin users.

<h3 id="retrieve-schema-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|export|query|string|false|Saves the API response to a file.|
|includeCollections|query|[string]|false|Restrict the snapshot to these collections (produces a partial snapshot, version 2). Mutually exclusive with `excludeCollections`.|
|excludeCollections|query|[string]|false|Exclude these collections from the snapshot (produces a partial snapshot, version 2). Mutually exclusive with `includeCollections`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": {
    "version": 1,
    "directus": "string",
    "vendor": "string",
    "collections": [
      {
        "collection": "customers",
        "meta": null,
        "schema": {
          "name": "customers",
          "schema": "public",
          "comment": null
        }
      }
    ],
    "fields": [
      {
        "collection": "about_us",
        "field": "id",
        "type": "integer",
        "schema": {
          "name": "title",
          "table": "posts",
          "type": "string",
          "default_value": null,
          "max_length": null,
          "is_nullable": false,
          "is_primary_key": false,
          "has_auto_increment": false,
          "foreign_key_column": null,
          "foreign_key_table": null,
          "comment": null,
          "schema": "public",
          "foreign_key_schema": null
        },
        "meta": {
          "id": 3,
          "collection": "posts",
          "field": "title",
          "special": null,
          "system-interface": "primary-key",
          "options": null,
          "display": null,
          "display_options": null,
          "locked": true,
          "readonly": false,
          "hidden": true,
          "sort": 1,
          "width": null,
          "group": null,
          "translations": null,
          "note": ""
        }
      }
    ],
    "relations": [
      {
        "id": 1,
        "many_collection": "directus_activity",
        "many_field": "user",
        "many_primary": "id",
        "one_collection": "directus_users",
        "one_field": null,
        "one_primary": "id",
        "junction_field": null
      }
    ]
  }
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-schema-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|403|Forbidden|Error: Unauthorized request.|Inline|

<h3 id="retrieve-schema-snapshot-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Schema](#schemaschema)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Apply Schema Difference

<a id="opIdschemaApply"></a>

> Code samples

```bash
curl http://localhost:8055/schema/apply \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "hash": "string",
      "diff": {
        "collections": [
          {
            "collection": "string",
            "diff": [
              {}
            ]
          }
        ],
        "fields": [
          {
            "collection": "string",
            "field": "string",
            "diff": [
              {}
            ]
          }
        ],
        "relations": [
          {
            "collection": "string",
            "field": "string",
            "related_collection": "string",
            "diff": [
              {}
            ]
          }
        ]
      }
    }
  }'
```

`POST /schema/apply`

Update the instance's schema by passing the diff previously retrieved via `/schema/diff` endpoint in the JSON request body or a JSON/YAML file. This endpoint is only available to admin users.

> Body parameter

```json
{
  "data": {
    "hash": "string",
    "diff": {
      "collections": [
        {
          "collection": "string",
          "diff": [
            {}
          ]
        }
      ],
      "fields": [
        {
          "collection": "string",
          "field": "string",
          "diff": [
            {}
          ]
        }
      ],
      "relations": [
        {
          "collection": "string",
          "field": "string",
          "related_collection": "string",
          "diff": [
            {}
          ]
        }
      ]
    }
  }
}
```

<h3 id="apply-schema-difference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» data|body|[Diff](#schemadiff)|false|none|

> Example responses

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="apply-schema-difference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|403|Forbidden|Error: Unauthorized request.|Inline|

<h3 id="apply-schema-difference-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve Schema Difference

<a id="opIdschemaDiff"></a>

> Code samples

```bash
curl http://localhost:8055/schema/diff \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "version": 1,
      "directus": "string",
      "vendor": "string",
      "collections": [
        {
          "collection": "customers",
          "meta": null,
          "schema": {
            "name": "customers",
            "schema": "public",
            "comment": null
          }
        }
      ],
      "fields": [
        {
          "collection": "about_us",
          "field": "id",
          "type": "integer",
          "schema": {
            "name": "title",
            "table": "posts",
            "type": "string",
            "default_value": null,
            "max_length": null,
            "is_nullable": false,
            "is_primary_key": false,
            "has_auto_increment": false,
            "foreign_key_column": null,
            "foreign_key_table": null,
            "comment": null,
            "schema": "public",
            "foreign_key_schema": null
          },
          "meta": {
            "id": 3,
            "collection": "posts",
            "field": "title",
            "special": null,
            "system-interface": "primary-key",
            "options": null,
            "display": null,
            "display_options": null,
            "locked": true,
            "readonly": false,
            "hidden": true,
            "sort": 1,
            "width": null,
            "group": null,
            "translations": null,
            "note": ""
          }
        }
      ],
      "relations": [
        {
          "id": 1,
          "many_collection": "directus_activity",
          "many_field": "user",
          "many_primary": "id",
          "one_collection": "directus_users",
          "one_field": null,
          "one_primary": "id",
          "junction_field": null
        }
      ]
    }
  }'
```

`POST /schema/diff`

Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.

> Body parameter

```json
{
  "data": {
    "version": 1,
    "directus": "string",
    "vendor": "string",
    "collections": [
      {
        "collection": "customers",
        "meta": null,
        "schema": {
          "name": "customers",
          "schema": "public",
          "comment": null
        }
      }
    ],
    "fields": [
      {
        "collection": "about_us",
        "field": "id",
        "type": "integer",
        "schema": {
          "name": "title",
          "table": "posts",
          "type": "string",
          "default_value": null,
          "max_length": null,
          "is_nullable": false,
          "is_primary_key": false,
          "has_auto_increment": false,
          "foreign_key_column": null,
          "foreign_key_table": null,
          "comment": null,
          "schema": "public",
          "foreign_key_schema": null
        },
        "meta": {
          "id": 3,
          "collection": "posts",
          "field": "title",
          "special": null,
          "system-interface": "primary-key",
          "options": null,
          "display": null,
          "display_options": null,
          "locked": true,
          "readonly": false,
          "hidden": true,
          "sort": 1,
          "width": null,
          "group": null,
          "translations": null,
          "note": ""
        }
      }
    ],
    "relations": [
      {
        "id": 1,
        "many_collection": "directus_activity",
        "many_field": "user",
        "many_primary": "id",
        "one_collection": "directus_users",
        "one_field": null,
        "one_primary": "id",
        "junction_field": null
      }
    ]
  }
}
```

<h3 id="retrieve-schema-difference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Bypass version and database vendor restrictions.|
|mode|query|string|false|`mirror` (default) returns all operations. `merge` yields an additive diff, excluding deletions so existing collections, fields, and relations are never removed.|
|body|body|object|true|none|
|» data|body|[Schema](#schemaschema)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|merge|
|mode|mirror|

> Example responses

> 200 Response

```json
{
  "data": {
    "hash": "string",
    "diff": {
      "collections": [
        {
          "collection": "string",
          "diff": [
            {}
          ]
        }
      ],
      "fields": [
        {
          "collection": "string",
          "field": "string",
          "diff": [
            {}
          ]
        }
      ],
      "relations": [
        {
          "collection": "string",
          "field": "string",
          "related_collection": "string",
          "diff": [
            {}
          ]
        }
      ]
    }
  }
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-schema-difference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|204|No Content|No schema difference.|None|
|403|Forbidden|Error: Unauthorized request.|Inline|

<h3 id="retrieve-schema-difference-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Diff](#schemadiff)|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-server">Server</h1>

Access to where Directus runs. Allows you to make sure your server has everything needed to run the platform, and check what kind of latency we're dealing with.

## System Info

<a id="opIdserverInfo"></a>

> Code samples

```bash
curl http://localhost:8055/server/info \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /server/info`

Perform a system status check and return the options.

> Example responses

> 200 Response

```json
{
  "data": {}
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="system-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="system-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Ping

<a id="opIdping"></a>

> Code samples

```bash
curl http://localhost:8055/server/ping \
  -H "Authorization: ${API_KEY}"
```

`GET /server/ping`

Ping, pong. Ping.. pong.

<h3 id="ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-settings">Settings</h1>

Settings control the way the platform works and acts.

## Retrieve Settings

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl http://localhost:8055/settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /settings`

List the settings.

<h3 id="retrieve-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "project_name": "Directus",
    "project_url": null,
    "project_color": null,
    "project_logo": null,
    "public_foreground": null,
    "public_background": null,
    "public_note": null,
    "auth_login_attempts": 25,
    "auth_password_policy": "string",
    "storage_default_folder": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "default_exports_folder": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "storage_asset_transform": "all",
    "storage_asset_presets": null
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Settings](#schemasettings)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Settings

<a id="opIdupdateSetting"></a>

> Code samples

```bash
curl http://localhost:8055/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`PATCH /settings`

Update the settings

> Body parameter

```json
{}
```

<h3 id="update-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 1,
    "project_name": "Directus",
    "project_url": null,
    "project_color": null,
    "project_logo": null,
    "public_foreground": null,
    "public_background": null,
    "public_note": null,
    "auth_login_attempts": 25,
    "auth_password_policy": "string",
    "storage_default_folder": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "default_exports_folder": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "storage_asset_transform": "all",
    "storage_asset_presets": null
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Settings](#schemasettings)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-users">Users</h1>

Users are what gives you access to the data.

## List Users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl http://localhost:8055/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users`

List the users.

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "first_name": "Admin",
      "last_name": "User",
      "email": "admin@example.com",
      "password": "string",
      "location": null,
      "title": null,
      "description": null,
      "tags": null,
      "avatar": null,
      "language": "en-US",
      "theme": "auto",
      "tfa_secret": null,
      "status": "active",
      "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "token": "string",
      "last_access": "2020-05-31T14:32:37Z",
      "last_page": "/my-project/settings/collections/a"
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Users](#schemausers)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create a User

<a id="opIdcreateUser"></a>

> Code samples

```bash
curl http://localhost:8055/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  }'
```

`POST /users`

Create a new user.

> Body parameter

```json
{
  "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "first_name": "Admin",
  "last_name": "User",
  "email": "admin@example.com",
  "password": "string",
  "location": null,
  "title": null,
  "description": null,
  "tags": null,
  "avatar": null,
  "language": "en-US",
  "theme": "auto",
  "tfa_secret": null,
  "status": "active",
  "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "token": "string",
  "last_access": "2020-05-31T14:32:37Z",
  "last_page": "/my-project/settings/collections/a"
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Users](#schemausers)|false|none|
|» id|body|string|false|Unique identifier for the user.|
|» first_name|body|string|false|First name of the user.|
|» last_name|body|string|false|Last name of the user.|
|» email|body|string(email)|false|Unique email address for the user.|
|» password|body|string|false|Password of the user.|
|» location|body|string \| null|false|The user's location.|
|» title|body|string \| null|false|The user's title.|
|» description|body|string \| null|false|The user's description.|
|» tags|body|[string]|false|The user's tags.|
|» avatar|body|string \| [Files](#schemafiles) \| null|false|The user's avatar.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[Files](#schemafiles)|false|none|
|» language|body|string|false|The user's language used in Directus.|
|» theme|body|string|false|What theme the user is using.|
|» tfa_secret|body|string \| null|false|The 2FA secret string that's used to generate one time passwords.|
|» status|body|string|false|Status of the user.|
|» role|body|string \| [Roles](#schemaroles)|false|Unique identifier of the role of this user.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[Roles](#schemaroles)|false|none|
|» token|body|string \| null|false|Static token for the user.|
|» last_access|body|string(date-time) \| null|false|When this user used the API last.|
|» last_page|body|string \| null|false|Last page that the user was on.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» theme|light|
|» theme|dark|
|» theme|auto|
|» status|active|
|» status|invited|
|» status|draft|
|» status|suspended|
|» status|deleted|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Users](#schemausers)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Users

<a id="opIddeleteUsers"></a>

> Code samples

```bash
curl http://localhost:8055/users \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /users`

Delete multiple existing users.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-users-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Users

<a id="opIdupdateUsers"></a>

> Code samples

```bash
curl http://localhost:8055/users \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "first_name": "Admin",
      "last_name": "User",
      "email": "admin@example.com",
      "password": "string",
      "location": null,
      "title": null,
      "description": null,
      "tags": null,
      "avatar": null,
      "language": "en-US",
      "theme": "auto",
      "tfa_secret": null,
      "status": "active",
      "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "token": "string",
      "last_access": "2020-05-31T14:32:37Z",
      "last_page": "/my-project/settings/collections/a"
    },
    "keys": [
      "string"
    ]
  }'
```

`PATCH /users`

Update multiple users at the same time.

> Body parameter

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  },
  "keys": [
    "string"
  ]
}
```

<h3 id="update-multiple-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» data|body|[Users](#schemausers)|false|none|
|» keys|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "first_name": "Admin",
      "last_name": "User",
      "email": "admin@example.com",
      "password": "string",
      "location": null,
      "title": null,
      "description": null,
      "tags": null,
      "avatar": null,
      "language": "en-US",
      "theme": "auto",
      "tfa_secret": null,
      "status": "active",
      "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
      "token": "string",
      "last_access": "2020-05-31T14:32:37Z",
      "last_page": "/my-project/settings/collections/a"
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Users](#schemausers)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a User

<a id="opIdgetUser"></a>

> Code samples

```bash
curl http://localhost:8055/users/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/{id}`

Retrieve a single user by unique identifier.

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Users](#schemausers)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a User

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl http://localhost:8055/users/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /users/{id}`

Delete an existing user

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a User

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl http://localhost:8055/users/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  }'
```

`PATCH /users/{id}`

Update an existing user

> Body parameter

```json
{
  "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "first_name": "Admin",
  "last_name": "User",
  "email": "admin@example.com",
  "password": "string",
  "location": null,
  "title": null,
  "description": null,
  "tags": null,
  "avatar": null,
  "language": "en-US",
  "theme": "auto",
  "tfa_secret": null,
  "status": "active",
  "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "token": "string",
  "last_access": "2020-05-31T14:32:37Z",
  "last_page": "/my-project/settings/collections/a"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|[Users](#schemausers)|false|none|
|» id|body|string|false|Unique identifier for the user.|
|» first_name|body|string|false|First name of the user.|
|» last_name|body|string|false|Last name of the user.|
|» email|body|string(email)|false|Unique email address for the user.|
|» password|body|string|false|Password of the user.|
|» location|body|string \| null|false|The user's location.|
|» title|body|string \| null|false|The user's title.|
|» description|body|string \| null|false|The user's description.|
|» tags|body|[string]|false|The user's tags.|
|» avatar|body|string \| [Files](#schemafiles) \| null|false|The user's avatar.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[Files](#schemafiles)|false|none|
|» language|body|string|false|The user's language used in Directus.|
|» theme|body|string|false|What theme the user is using.|
|» tfa_secret|body|string \| null|false|The 2FA secret string that's used to generate one time passwords.|
|» status|body|string|false|Status of the user.|
|» role|body|string \| [Roles](#schemaroles)|false|Unique identifier of the role of this user.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[Roles](#schemaroles)|false|none|
|» token|body|string \| null|false|Static token for the user.|
|» last_access|body|string(date-time) \| null|false|When this user used the API last.|
|» last_page|body|string \| null|false|Last page that the user was on.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» theme|light|
|» theme|dark|
|» theme|auto|
|» status|active|
|» status|invited|
|» status|draft|
|» status|suspended|
|» status|deleted|

> Example responses

> 200 Response

```json
{
  "data": {}
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Disable 2FA for User

<a id="opIddisableUserTfa"></a>

> Code samples

```bash
curl http://localhost:8055/users/8cbb43fe-4cdf-4991-8352-c461779cec02/tfa/disable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /users/{id}/tfa/disable`

Disables two-factor authentication for a specific user. Requires admin access.

<h3 id="disable-2fa-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="disable-2fa-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|403|Forbidden|Error: Forbidden.|Inline|

<h3 id="disable-2fa-for-user-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Invite User(s)

<a id="opIdinvite"></a>

> Code samples

```bash
curl http://localhost:8055/users/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string"
  }'
```

`POST /users/invite`

Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="invite-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|false|Email address or array of email addresses of the to-be-invited user(s).|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="invite-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="invite-users-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Accept User Invite

<a id="opIdacceptInvite"></a>

> Code samples

```bash
curl http://localhost:8055/users/invite/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "token": "eyJh...KmUk",
    "password": "d1r3ctu5"
  }'
```

`POST /users/invite/accept`

Accepts and enables an invited user using a JWT invitation token.

> Body parameter

```json
{
  "token": "eyJh...KmUk",
  "password": "d1r3ctu5"
}
```

<h3 id="accept-user-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|false|Accept invite token.|
|» password|body|string(password)|false|Password of the user.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="accept-user-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="accept-user-invite-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve Current User

<a id="opIdgetMe"></a>

> Code samples

```bash
curl http://localhost:8055/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /users/me`

Retrieve the currently authenticated user.

<h3 id="retrieve-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Users](#schemausers)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Current User

<a id="opIdupdateMe"></a>

> Code samples

```bash
curl http://localhost:8055/users/me \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PATCH /users/me`

Update the currently authenticated user.

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "first_name": "Admin",
    "last_name": "User",
    "email": "admin@example.com",
    "password": "string",
    "location": null,
    "title": null,
    "description": null,
    "tags": null,
    "avatar": null,
    "language": "en-US",
    "theme": "auto",
    "tfa_secret": null,
    "status": "active",
    "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
    "token": "string",
    "last_access": "2020-05-31T14:32:37Z",
    "last_page": "/my-project/settings/collections/a"
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Users](#schemausers)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Disable 2FA

<a id="opIdmeTfaDisable"></a>

> Code samples

```bash
curl http://localhost:8055/users/me/tfa/disable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /users/me/tfa/disable`

Disables two-factor authentication for the currently authenticated user.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="disable-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="disable-2fa-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Enable 2FA

<a id="opIdmeTfaEnable"></a>

> Code samples

```bash
curl http://localhost:8055/users/me/tfa/enable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "secret": "JBSWY3DPEHPK3PXP",
    "otp": "123456"
  }'
```

`POST /users/me/tfa/enable`

Enables two-factor authentication for the currently authenticated user.

> Body parameter

```json
{
  "secret": "JBSWY3DPEHPK3PXP",
  "otp": "123456"
}
```

<h3 id="enable-2fa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» secret|body|string|true|The secret from the tfa/generate endpoint.|
|» otp|body|string|true|One-time-password from the user's authenticator app.|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="enable-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Error: Bad request.|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="enable-2fa-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Generate 2FA Secret

<a id="opIdmeTfaGenerate"></a>

> Code samples

```bash
curl http://localhost:8055/users/me/tfa/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "password": "password"
  }'
```

`POST /users/me/tfa/generate`

Generates a TOTP secret and OTPauth URI for the currently authenticated user.

> Body parameter

```json
{
  "password": "password"
}
```

<h3 id="generate-2fa-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» password|body|string(password)|false|The user's current password. Required when using the default authentication provider.|

> Example responses

> 200 Response

```json
{
  "data": {
    "secret": "JBSWY3DPEHPK3PXP",
    "otpauth_url": "otpauth://totp/Directus:admin%40example.com?secret=JBSWY3DPEHPK3PXP&issuer=Directus"
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="generate-2fa-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Error: Bad request.|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="generate-2fa-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» secret|string|false|none|Base32-encoded TOTP secret to store in the authenticator app.|
|» otpauth_url|string|false|none|OTPauth URI for QR code generation.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Last Page

<a id="opIdupdateLastUsedPageMe"></a>

> Code samples

```bash
curl http://localhost:8055/users/me/track/page \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "last_page": "string"
  }'
```

`PATCH /users/me/track/page`

Updates the last used page field of the currently authenticated user. This is used internally to be able to open the Directus admin app from the last page you used.

> Body parameter

```json
{
  "last_page": "string"
}
```

<h3 id="update-last-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» last_page|body|string|false|Path of the page you used last.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-last-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-last-page-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Register a New User

<a id="opIdregisterUser"></a>

> Code samples

```bash
curl http://localhost:8055/users/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "user@example.com",
    "password": "password",
    "first_name": "Jane",
    "last_name": "Doe",
    "verification_url": "https://example.com/verify"
  }'
```

`POST /users/register`

Register a new user with the configured self-registration settings.

> Body parameter

```json
{
  "email": "user@example.com",
  "password": "password",
  "first_name": "Jane",
  "last_name": "Doe",
  "verification_url": "https://example.com/verify"
}
```

<h3 id="register-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|true|Email address of the new user.|
|» password|body|string(password)|true|Password for the new user.|
|» first_name|body|string|false|First name of the new user.|
|» last_name|body|string|false|Last name of the new user.|
|» verification_url|body|string(uri)|false|Custom URL for the email verification link.|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="register-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|400|Bad Request|Error: Bad request.|Inline|
|403|Forbidden|Error: Forbidden.|Inline|
|429|Too Many Requests|Error: Too many requests.|Inline|

<h3 id="register-a-new-user-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Registration Email

<a id="opIdregisterUserVerifyEmail"></a>

> Code samples

```bash
curl 'http://localhost:8055/users/register/verify-email?token=string' \
  -H 'Accept: application/json'
```

`GET /users/register/verify-email`

Verifies the email address for a newly registered user via the token from the verification email.

<h3 id="verify-registration-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Email verification token.|

> Example responses

> 400 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="verify-registration-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect to another location|None|
|400|Bad Request|Error: Bad request.|Inline|
|403|Forbidden|Error: Forbidden.|Inline|

<h3 id="verify-registration-email-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|URL the client is redirected to.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="directus-utilities">Utilities</h1>

Directus comes with various utility endpoints you can use to simplify your development flow.

## Sort Items

<a id="opIdsort"></a>

> Code samples

```bash
curl http://localhost:8055/utils/sort/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "item": 0,
    "to": 0
  }'
```

`POST /utils/sort/{collection}`

Re-sort items in collection based on start and to value of item

> Body parameter

```json
{
  "item": 0,
  "to": 0
}
```

<h3 id="sort-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection identifier|
|body|body|object|false|none|
|» item|body|number|false|Primary key of item to move|
|» to|body|number|false|Primary key of item where to move the current item to|

<h3 id="sort-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Import Multiple Collections

<a id="opIdimportBatch"></a>

> Code samples

```bash
curl http://localhost:8055/utils/import \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /utils/import`

Import flat data for multiple related collections in a single request. Relations are resolved from the schema so collections are imported in dependency order and primary keys (and the foreign keys referencing them) are remapped. The payload is uploaded as a JSON file (`multipart/form-data`).

> Body parameter

```yaml
-
  collection: authors
  items:
    -
      id: "123"
      name: Lorem Ipsum
-
  collection: articles
  items:
    -
      id: "123"
      title: Hello World
      author: "123"
```

<h3 id="import-multiple-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|false|`add` (default) inserts new items and remaps conflicting primary keys, `merge` upserts items.|
|dryRun|query|boolean|false|When true, no data is persisted; the computed id mappings are still returned.|
|dangerouslyAllowDelete|query|boolean|false|Only valid with `mode=merge`. Deletes any existing records in the imported collections whose primary key is absent from the import, mirroring the payload. Destructive.|
|body|body|object|false|none|
|» file|body|string(binary)|false|A JSON file containing an array of `{ collection, items }` objects.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|add|
|mode|merge|

> Example responses

> 200 Response

```json
{
  "data": {
    "applied": true,
    "mode": "add",
    "collections": {
      "property1": {
        "existing": [
          "string"
        ],
        "new": [
          "string"
        ],
        "deleted": [
          "string"
        ],
        "mapped": {}
      },
      "property2": {
        "existing": [
          "string"
        ],
        "new": [
          "string"
        ],
        "deleted": [
          "string"
        ],
        "mapped": {}
      }
    }
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 403 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 422 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="import-multiple-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Error: Bad request.|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|403|Forbidden|Error: Forbidden.|Inline|
|422|Unprocessable Entity|Error: The import could not be planned, e.g. the requested collections form an unresolvable (non-nullable) relational cycle.|Inline|

<h3 id="import-multiple-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» applied|boolean|false|none|Whether the changes were committed. `false` for a dry run.|
|» mode|string|false|none|none|
|» collections|object|false|none|Per-collection summary of the changes made.|
|» » **additionalProperties**|object|false|none|none|
|» » » existing|[string]|false|none|Primary keys of pre-existing records that were matched and updated.|
|» » » new|[string]|false|none|Primary keys of newly created records.|
|» » » deleted|[string]|false|none|Primary keys of records that were deleted (only when `dangerouslyAllowDelete` is set).|
|» » » mapped|object|false|none|Provided primary key -> new primary key, for records whose key was remapped.|

#### Enumerated Values

|Property|Value|
|---|---|
|» mode|add|
|» mode|merge|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Import Items

<a id="opIdimport"></a>

> Code samples

```bash
curl http://localhost:8055/utils/import/string \
  -X POST \
  -H "Authorization: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /utils/import/{collection}`

Import multiple records from a JSON or CSV file into a collection.

> Body parameter

```yaml
file: string
```

<h3 id="import-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection identifier|
|background|query|boolean|false|When true, the upload is received and the import is processed asynchronously in the background. The endpoint responds once the upload has been received.|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

<h3 id="import-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request (synchronous import completed, or background upload accepted)|None|
|413|Payload Too Large|The uploaded file exceeds `IMPORT_MAX_FILE_SIZE`|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Export Items

<a id="opIdexport"></a>

> Code samples

```bash
curl http://localhost:8055/utils/export/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "format": "csv",
    "query": {
      "fields": [
        "title",
        "author.name",
        "*.*"
      ],
      "filter": {
        "title": {
          "_eq": "Hello"
        }
      },
      "search": "string",
      "sort": [
        "-date_created"
      ],
      "limit": 50,
      "offset": 100,
      "page": 2,
      "meta": "*",
      "aggregate": {
        "count": [
          "*"
        ]
      },
      "groupBy": [
        "status"
      ],
      "deep": {
        "related_articles": {
          "_limit": 3
        }
      },
      "alias": {
        "author_name": "author.name"
      },
      "export": "csv",
      "version": "site-redesign-2027",
      "versionRaw": false,
      "backlink": true
    },
    "file": {
      "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
      "storage": "local",
      "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
      "filename_download": "avatar.jpg",
      "title": "User Avatar",
      "type": "image/jpeg",
      "folder": null,
      "created_on": "2019-12-03T00:10:15+00:00",
      "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "uploaded_on": "2019-12-03T00:10:15+00:00",
      "charset": "binary",
      "filesize": 137862,
      "width": 800,
      "height": 838,
      "duration": 0,
      "embed": null,
      "description": "string",
      "location": "string",
      "tags": [
        "string"
      ],
      "metadata": {}
    }
  }'
```

`POST /utils/export/{collection}`

Export a larger data set to a file in the File Library

> Body parameter

```json
{
  "format": "csv",
  "query": {
    "fields": [
      "title",
      "author.name",
      "*.*"
    ],
    "filter": {
      "title": {
        "_eq": "Hello"
      }
    },
    "search": "string",
    "sort": [
      "-date_created"
    ],
    "limit": 50,
    "offset": 100,
    "page": 2,
    "meta": "*",
    "aggregate": {
      "count": [
        "*"
      ]
    },
    "groupBy": [
      "status"
    ],
    "deep": {
      "related_articles": {
        "_limit": 3
      }
    },
    "alias": {
      "author_name": "author.name"
    },
    "export": "csv",
    "version": "site-redesign-2027",
    "versionRaw": false,
    "backlink": true
  },
  "file": {
    "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
    "storage": "local",
    "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
    "filename_download": "avatar.jpg",
    "title": "User Avatar",
    "type": "image/jpeg",
    "folder": null,
    "created_on": "2019-12-03T00:10:15+00:00",
    "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "uploaded_on": "2019-12-03T00:10:15+00:00",
    "charset": "binary",
    "filesize": 137862,
    "width": 800,
    "height": 838,
    "duration": 0,
    "embed": null,
    "description": "string",
    "location": "string",
    "tags": [
      "string"
    ],
    "metadata": {}
  }
}
```

<h3 id="export-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Collection identifier|
|body|body|object|false|none|
|» format|body|string|true|What file format to save the export to.|
|» query|body|[Query](#schemaquery)|true|none|
|» file|body|object|false|Optional file metadata to apply to the created file.|
|» » id|body|string|false|Unique identifier for the file.|
|» » storage|body|string|false|Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).|
|» » filename_disk|body|string|false|Name of the file on disk. By default, Directus uses a random hash for the filename.|
|» » filename_download|body|string|false|How you want to the file to be named when it's being downloaded.|
|» » title|body|string|false|Title for the file. Is extracted from the filename on upload, but can be edited by the user.|
|» » type|body|string|false|MIME type of the file.|
|» » folder|body|string \| [Folders](#schemafolders) \| null|false|Virtual folder where this file resides in.|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|[Folders](#schemafolders)|false|none|
|» » created_on|body|string(date-time)|false|When the file was created.|
|» » uploaded_by|body|string \| [Users](#schemausers)|false|Who uploaded the file.|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|[Users](#schemausers)|false|none|
|» » uploaded_on|body|string(date-time)|false|When the file was last uploaded/replaced.|
|» » charset|body|string \| null|false|Character set of the file.|
|» » filesize|body|integer|false|Size of the file in bytes.|
|» » width|body|integer \| null|false|Width of the file in pixels. Only applies to images.|
|» » height|body|integer \| null|false|Height of the file in pixels. Only applies to images.|
|» » duration|body|integer \| null|false|Duration of the file in seconds. Only applies to audio and video.|
|» » embed|body|string \| null|false|Where the file was embedded from.|
|» » description|body|string \| null|false|Description for the file.|
|» » location|body|string \| null|false|Where the file was created. Is automatically populated based on Exif data for images.|
|» » tags|body|[string]|false|Tags for the file. Is automatically populated based on Exif data for images.|
|» » metadata|body|object \| null|false|IPTC, Exif, and ICC metadata extracted from file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|csv|
|» format|csv_utf8|
|» format|xml|
|» format|json|
|» format|yaml|

<h3 id="export-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Clear Cache

<a id="opIdclear-cache"></a>

> Code samples

```bash
curl http://localhost:8055/utils/cache/clear \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /utils/cache/clear`

Resets both the data and schema cache of Directus.

<h3 id="clear-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Get a Random String

<a id="opIdrandom"></a>

> Code samples

```bash
curl http://localhost:8055/utils/random/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /utils/random/string`

Returns a random string of given length.

<h3 id="get-a-random-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|integer|false|Length of the random string.|

> Example responses

> 200 Response

```json
{
  "data": "1>M3+4oh.S"
}
```

<h3 id="get-a-random-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|

<h3 id="get-a-random-string-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

<h1 id="directus-versions">Versions</h1>

Enables users to create unpublished copies of an item, modify them independently from the main version, and promote them to become the new main version when ready.

## List Content Versions

<a id="opIdgetContentVersions"></a>

> Code samples

```bash
curl http://localhost:8055/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /versions`

Get all Content Versions.

<h3 id="list-content-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|aggregate|query|object|false|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|query|[string]|false|Group the returned items by the given field(s).|
|deep|query|object|false|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.<br>|
|alias|query|object|false|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|query|string|false|Saves the API response to a file.|
|backlink|query|boolean|false|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|
|meta|query|string \| [string]|false|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "key": "draft",
      "name": "My Draft",
      "collection": "articles",
      "item": "168",
      "date_created": "2022-05-11T13:14:52Z",
      "date_updated": "2022-05-11T13:14:53Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "delta": {
        "my_field": "Updated Value"
      }
    }
  ],
  "meta": {
    "total_count": 0,
    "filter_count": 0
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="list-content-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="list-content-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Versions](#schemaversions)]|false|none|none|
|meta|[Metadata](#schemametadata)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Create Multiple Content Versions

<a id="opIdcreateContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "key": "draft",
    "name": "My Draft",
    "collection": "articles",
    "item": "168",
    "date_created": "2022-05-11T13:14:52Z",
    "date_updated": "2022-05-11T13:14:53Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "delta": {
      "my_field": "Updated Value"
    }
  }'
```

`POST /versions`

Create multiple new Content Versions.

> Body parameter

```json
{
  "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "key": "draft",
  "name": "My Draft",
  "collection": "articles",
  "item": "168",
  "date_created": "2022-05-11T13:14:52Z",
  "date_updated": "2022-05-11T13:14:53Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "delta": {
    "my_field": "Updated Value"
  }
}
```

<h3 id="create-multiple-content-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|body|body|[Versions](#schemaversions)|false|none|
|» *anyOf*|body|[Versions](#schemaversions)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "key": "draft",
    "name": "My Draft",
    "collection": "articles",
    "item": "168",
    "date_created": "2022-05-11T13:14:52Z",
    "date_updated": "2022-05-11T13:14:53Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "delta": {
      "my_field": "Updated Value"
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="create-multiple-content-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="create-multiple-content-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Versions](#schemaversions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete Multiple Content Versions

<a id="opIddeleteContentVersions"></a>

> Code samples

```bash
curl http://localhost:8055/versions \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /versions`

Delete multiple existing Content Versions.

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-multiple-content-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="delete-multiple-content-versions-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update Multiple Content Versions

<a id="opIdupdateContentVersions"></a>

> Code samples

```bash
curl http://localhost:8055/versions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": {
      "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "key": "draft",
      "name": "My Draft",
      "collection": "articles",
      "item": "168",
      "date_created": "2022-05-11T13:14:52Z",
      "date_updated": "2022-05-11T13:14:53Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "delta": {
        "my_field": "Updated Value"
      }
    },
    "keys": [
      "string"
    ]
  }'
```

`PATCH /versions`

Update multiple Content Versions at the same time.

> Body parameter

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "key": "draft",
    "name": "My Draft",
    "collection": "articles",
    "item": "168",
    "date_created": "2022-05-11T13:14:52Z",
    "date_updated": "2022-05-11T13:14:53Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "delta": {
      "my_field": "Updated Value"
    }
  },
  "keys": [
    "string"
  ]
}
```

<h3 id="update-multiple-content-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|query|object|false|Select items in the collection that match the given filter conditions.|
|search|query|string|false|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|query|[string]|false|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|query|integer|false|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|query|integer|false|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|query|integer|false|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|body|body|object|false|none|
|» data|body|[Versions](#schemaversions)|false|none|
|» » *anyOf*|body|[Versions](#schemaversions)|false|none|
|» keys|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "key": "draft",
      "name": "My Draft",
      "collection": "articles",
      "item": "168",
      "date_created": "2022-05-11T13:14:52Z",
      "date_updated": "2022-05-11T13:14:53Z",
      "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
      "delta": {
        "my_field": "Updated Value"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-multiple-content-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|

<h3 id="update-multiple-content-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Versions](#schemaversions)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Retrieve a Content Version

<a id="opIdgetContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /versions/{id}`

Retrieve a single Content Version by unique identifier.

<h3 id="retrieve-a-content-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "key": "draft",
    "name": "My Draft",
    "collection": "articles",
    "item": "168",
    "date_created": "2022-05-11T13:14:52Z",
    "date_updated": "2022-05-11T13:14:53Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "delta": {
      "my_field": "Updated Value"
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="retrieve-a-content-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="retrieve-a-content-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Versions](#schemaversions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Delete a Content Version

<a id="opIddeleteContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /versions/{id}`

Delete an existing Content Version.

<h3 id="delete-a-content-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="delete-a-content-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|None|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="delete-a-content-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Update a Content Version

<a id="opIdupdateContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions/8cbb43fe-4cdf-4991-8352-c461779cec02 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "key": "draft",
    "name": "My Draft",
    "collection": "articles",
    "item": "168",
    "date_created": "2022-05-11T13:14:52Z",
    "date_updated": "2022-05-11T13:14:53Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "delta": {
      "my_field": "Updated Value"
    }
  }'
```

`PATCH /versions/{id}`

Update an existing Content Version.

> Body parameter

```json
{
  "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "key": "draft",
  "name": "My Draft",
  "collection": "articles",
  "item": "168",
  "date_created": "2022-05-11T13:14:52Z",
  "date_updated": "2022-05-11T13:14:53Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "delta": {
    "my_field": "Updated Value"
  }
}
```

<h3 id="update-a-content-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|id|path|string|true|Unique identifier for the object.|
|body|body|[Versions](#schemaversions)|false|none|
|» *anyOf*|body|[Versions](#schemaversions)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "key": "draft",
    "name": "My Draft",
    "collection": "articles",
    "item": "168",
    "date_created": "2022-05-11T13:14:52Z",
    "date_updated": "2022-05-11T13:14:53Z",
    "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
    "delta": {
      "my_field": "Updated Value"
    }
  }
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="update-a-content-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="update-a-content-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Versions](#schemaversions)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Save to a Content Version

<a id="opIdsaveContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions/8cbb43fe-4cdf-4991-8352-c461779cec02/save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{}'
```

`POST /versions/{id}/save`

Save item changes to an existing Content Version.

> Body parameter

```json
{}
```

<h3 id="save-to-a-content-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="save-to-a-content-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="save-to-a-content-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Compare a Content Version

<a id="opIdcompareContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions/8cbb43fe-4cdf-4991-8352-c461779cec02/compare \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /versions/{id}/compare`

Compare an existing Content Version with the main version of the item.

<h3 id="compare-a-content-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|

> Example responses

> 200 Response

```json
{
  "data": {}
}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="compare-a-content-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="compare-a-content-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

## Promote a Content Version

<a id="opIdpromoteContentVersion"></a>

> Code samples

```bash
curl http://localhost:8055/versions/8cbb43fe-4cdf-4991-8352-c461779cec02/promote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mainHash": "string",
    "fields": "string"
  }'
```

`POST /versions/{id}/promote`

Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected).

> Body parameter

```json
{
  "mainHash": "string",
  "fields": "string"
}
```

<h3 id="promote-a-content-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for the object.|
|body|body|object|false|none|
|» mainHash|body|string|false|Hash of the main version of the item to be promoted.|
|» fields|body|string|false|Optional array of field names of which the values are to be promoted.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "errors": [
    {
      "message": "string",
      "extensions": {
        "code": "string"
      }
    }
  ]
}
```

<h3 id="promote-a-content-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|401|Unauthorized|Error: Unauthorized request.|Inline|
|404|Not Found|Error: Not found.|Inline|

<h3 id="promote-a-content-version-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Auth, KeyAuth
</aside>

# Schemas

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "id": 2,
  "action": "update",
  "user": "string",
  "timestamp": "2019-12-05T22:52:09Z",
  "ip": "127.0.0.1",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/78.0.3904.108 Safari/537.36",
  "origin": "https://directus.com",
  "collection": "string",
  "item": "328",
  "comment": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the object.|
|action|string|false|none|Action that was performed.|
|user|string \| [Users](#schemausers) \| null|false|none|The user who performed this action.|
|timestamp|string(date-time)|false|none|When the action happened.|
|ip|string(ipv4)|false|none|The IP address of the user at the time the action took place.|
|user_agent|string|false|none|User agent string of the browser the user used when the action took place.|
|origin|string|false|none|Origin of the request when the action took place.|
|collection|string \| [Collections](#schemacollections)|false|none|Collection identifier in which the item resides.|
|item|string|false|none|Unique identifier for the item the action applied to. This is always a string, even for integer primary keys.|
|comment|string \| null|false|none|User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|update|
|action|delete|
|action|login|

<h2 id="tocS_Collections">Collections</h2>
<!-- backwards compatibility -->
<a id="schemacollections"></a>
<a id="schema_Collections"></a>
<a id="tocScollections"></a>
<a id="tocscollections"></a>

```json
{
  "collection": "customers",
  "meta": null,
  "schema": {
    "name": "customers",
    "schema": "public",
    "comment": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|The collection key.|
|meta|object \| null|false|none|Metadata of the collection.|
|schema|object|false|none|none|

<h2 id="tocS_Comments">Comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_Comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
{
  "id": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
  "collection": "articles",
  "item": "123",
  "comment": "This is a comment",
  "date_created": "2024-01-23T12:34:56Z",
  "date_updated": "2024-01-23T12:34:56Z",
  "user_created": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28",
  "user_updated": "81dfa7e0-56d2-471f-b96a-1cf8a62bdf28"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for this single collection preset.|
|collection|string \| [Collections](#schemacollections)|false|none|The collection of the item the Comment is created for.|
|item|string|false|none|The item the Comment is created for.|
|comment|string|false|none|User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.|
|date_created|string(date-time) \| null|false|none|When the Comment was created.|
|date_updated|string(date-time) \| null|false|none|When the Comment was updated.|
|user_created|string \| [Users](#schemausers)|false|none|User that created the Comment.|
|user_updated|string \| [Users](#schemausers)|false|none|User that updated the Comment.|

<h2 id="tocS_Diff">Diff</h2>
<!-- backwards compatibility -->
<a id="schemadiff"></a>
<a id="schema_Diff"></a>
<a id="tocSdiff"></a>
<a id="tocsdiff"></a>

```json
{
  "hash": "string",
  "diff": {
    "collections": [
      {
        "collection": "string",
        "diff": [
          {}
        ]
      }
    ],
    "fields": [
      {
        "collection": "string",
        "field": "string",
        "diff": [
          {}
        ]
      }
    ],
    "relations": [
      {
        "collection": "string",
        "field": "string",
        "related_collection": "string",
        "diff": [
          {}
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|none|
|diff|object|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "extensions": {
    "code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|extensions|object|true|none|none|

<h2 id="tocS_Extensions">Extensions</h2>
<!-- backwards compatibility -->
<a id="schemaextensions"></a>
<a id="schema_Extensions"></a>
<a id="tocSextensions"></a>
<a id="tocsextensions"></a>

```json
{
  "bundle": "directus-extension-my-bundle",
  "name": "my-bundle-operation",
  "meta": {
    "enabled": true
  },
  "schema": {
    "type": "operation",
    "local": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle|string \| null|false|none|Name of the bundle the extension is in.|
|name|string|false|none|Unique name of the extension.|
|meta|object|false|none|Directus metadata for the extension. Where the configuration for the extension in the current project is stored.|
|schema|object|false|none|Information about the installed extension. Can't be changed.|

<h2 id="tocS_Fields">Fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_Fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
{
  "collection": "about_us",
  "field": "id",
  "type": "integer",
  "schema": {
    "name": "title",
    "table": "posts",
    "type": "string",
    "default_value": null,
    "max_length": null,
    "is_nullable": false,
    "is_primary_key": false,
    "has_auto_increment": false,
    "foreign_key_column": null,
    "foreign_key_table": null,
    "comment": null,
    "schema": "public",
    "foreign_key_schema": null
  },
  "meta": {
    "id": 3,
    "collection": "posts",
    "field": "title",
    "special": null,
    "system-interface": "primary-key",
    "options": null,
    "display": null,
    "display_options": null,
    "locked": true,
    "readonly": false,
    "hidden": true,
    "sort": 1,
    "width": null,
    "group": null,
    "translations": null,
    "note": ""
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|Unique name of the collection this field is in.|
|field|string|false|none|Unique name of the field. Field name is unique within the collection.|
|type|string|false|none|Directus specific data type. Used to cast values in the API.|
|schema|object|false|none|The schema info.|
|meta|object \| null|false|none|The meta info.|

<h2 id="tocS_Files">Files</h2>
<!-- backwards compatibility -->
<a id="schemafiles"></a>
<a id="schema_Files"></a>
<a id="tocSfiles"></a>
<a id="tocsfiles"></a>

```json
{
  "id": "8cbb43fe-4cdf-4991-8352-c461779cec02",
  "storage": "local",
  "filename_disk": "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg",
  "filename_download": "avatar.jpg",
  "title": "User Avatar",
  "type": "image/jpeg",
  "folder": null,
  "created_on": "2019-12-03T00:10:15+00:00",
  "uploaded_by": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "uploaded_on": "2019-12-03T00:10:15+00:00",
  "charset": "binary",
  "filesize": 137862,
  "width": 800,
  "height": 838,
  "duration": 0,
  "embed": null,
  "description": "string",
  "location": "string",
  "tags": [
    "string"
  ],
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the file.|
|storage|string|false|none|Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).|
|filename_disk|string|false|none|Name of the file on disk. By default, Directus uses a random hash for the filename.|
|filename_download|string|false|none|How you want to the file to be named when it's being downloaded.|
|title|string|false|none|Title for the file. Is extracted from the filename on upload, but can be edited by the user.|
|type|string|false|none|MIME type of the file.|
|folder|string \| [Folders](#schemafolders) \| null|false|none|Virtual folder where this file resides in.|
|created_on|string(date-time)|false|none|When the file was created.|
|uploaded_by|string \| [Users](#schemausers)|false|none|Who uploaded the file.|
|uploaded_on|string(date-time)|false|none|When the file was last uploaded/replaced.|
|charset|string \| null|false|none|Character set of the file.|
|filesize|integer|false|none|Size of the file in bytes.|
|width|integer \| null|false|none|Width of the file in pixels. Only applies to images.|
|height|integer \| null|false|none|Height of the file in pixels. Only applies to images.|
|duration|integer \| null|false|none|Duration of the file in seconds. Only applies to audio and video.|
|embed|string \| null|false|none|Where the file was embedded from.|
|description|string \| null|false|none|Description for the file.|
|location|string \| null|false|none|Where the file was created. Is automatically populated based on Exif data for images.|
|tags|[string]|false|none|Tags for the file. Is automatically populated based on Exif data for images.|
|metadata|object \| null|false|none|IPTC, Exif, and ICC metadata extracted from file|

<h2 id="tocS_Flows">Flows</h2>
<!-- backwards compatibility -->
<a id="schemaflows"></a>
<a id="schema_Flows"></a>
<a id="tocSflows"></a>
<a id="tocsflows"></a>

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Update Articles Flow",
  "icon": "bolt",
  "color": "#112233",
  "note": "This flow is used to update articles periodically.",
  "status": "active",
  "trigger": "manual",
  "options": null,
  "accountability": "$trigger",
  "date_created": "2022-05-11T13:14:52Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "operation": "92e82998-e421-412f-a513-13701e83e4ce",
  "folder": "0cf0e03d-4364-45df-b77b-ca61f61869d2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the flow.|
|name|string|false|none|The name of the flow.|
|icon|string|false|none|Icon displayed in the Admin App for the flow.|
|color|string \| null|false|none|Color of the icon displayed in the Admin App for the flow.|
|note|string|false|none|Short description displayed in the Admin App.|
|status|string|false|none|Current status of the flow.|
|trigger|string|false|none|Type of trigger for the flow. One of `hook`, `webhook`, `operation`, `schedule`, `manual`.|
|options|object \| null|false|none|Options of the selected trigger for the flow.|
|accountability|string|false|none|The permission used during the flow. One of `$public`, `$trigger`, `$full`, or UUID of a role.|
|date_created|string(date-time) \| null|false|none|Timestamp in ISO8601 when the flow was created.|
|user_created|string \| [Users](#schemausers)|false|none|The user who created the flow.|
|operation|string \| [Operations](#schemaoperations)|false|none|UUID of the operation connected to the trigger in the flow.|
|folder|string \| [Folders](#schemafolders) \| null|false|none|The UUID of the folder containing the flow.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_Folders">Folders</h2>
<!-- backwards compatibility -->
<a id="schemafolders"></a>
<a id="schema_Folders"></a>
<a id="tocSfolders"></a>
<a id="tocsfolders"></a>

```json
{
  "id": "0cf0e03d-4364-45df-b77b-ca61f61869d2",
  "name": "New York",
  "parent": null,
  "type": "files"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the folder.|
|name|string|false|none|Name of the folder.|
|parent|string \| [Folders](#schemafolders) \| null|false|none|Unique identifier of the parent folder. This allows for nested folders.|
|type|string|false|none|The type of folder. One of `files` (file library) or `flows`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|files|
|type|flows|

<h2 id="tocS_Items">Items</h2>
<!-- backwards compatibility -->
<a id="schemaitems"></a>
<a id="schema_Items"></a>
<a id="tocSitems"></a>
<a id="tocsitems"></a>

```json
{}
```

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "total_count": 0,
  "filter_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_count|integer|false|none|Returns the total item count of the collection you're querying.|
|filter_count|integer|false|none|Returns the item count of the collection you're querying, taking the current filter/search parameters into account.|

<h2 id="tocS_Operations">Operations</h2>
<!-- backwards compatibility -->
<a id="schemaoperations"></a>
<a id="schema_Operations"></a>
<a id="tocSoperations"></a>
<a id="tocsoperations"></a>

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Log to Console",
  "key": "log_console",
  "type": "log",
  "options": null,
  "position_x": 12,
  "position_y": 12,
  "date_created": "2022-05-11T13:14:52Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "resolve": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "reject": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "operation": "92e82998-e421-412f-a513-13701e83e4ce"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the operation.|
|name|string|false|none|The name of the operation.|
|key|string|false|none|Key for the operation. Must be unique within a given flow.|
|type|string|false|none|Type of operation. One of `log`, `mail`, `notification`, `create`, `read`, `request`, `sleep`, `transform`, `trigger`, `condition`, or any type of custom operation extensions.|
|options|object \| null|false|none|Options depending on the type of the operation.|
|position_x|integer|false|none|Position of the operation on the X axis within the flow workspace.|
|position_y|integer|false|none|Position of the operation on the Y axis within the flow workspace.|
|date_created|string(date-time) \| null|false|none|Timestamp in ISO8601 when the operation was created.|
|user_created|string \| [Users](#schemausers)|false|none|The user who created the operation.|
|resolve|string \| [Operations](#schemaoperations)|false|none|The operation triggered when the current operation succeeds (or `then` logic of a condition operation).|
|reject|string \| [Operations](#schemaoperations)|false|none|The operation triggered when the current operation fails (or `otherwise` logic of a condition operation).|
|operation|string \| [Flows](#schemaflows)|false|none|The flow containing this operation.|

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
{
  "id": 1,
  "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "collection": "customers",
  "action": "create",
  "permissions": {},
  "validation": {},
  "presets": {},
  "fields": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the permission.|
|role|string \| null|false|none|Unique identifier of the role this permission applies to.|
|collection|string|false|none|What collection this permission applies to.|
|action|string|false|none|What action this permission applies to.|
|permissions|object \| null|false|none|JSON structure containing the permissions checks for this permission.|
|validation|object \| null|false|none|JSON structure containing the validation checks for this permission.|
|presets|object \| null|false|none|JSON structure containing the preset value for created/updated items.|
|fields|[string]|false|none|CSV of fields that the user is allowed to interact with.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|read|
|action|update|
|action|delete|

<h2 id="tocS_Presets">Presets</h2>
<!-- backwards compatibility -->
<a id="schemapresets"></a>
<a id="schema_Presets"></a>
<a id="tocSpresets"></a>
<a id="tocspresets"></a>

```json
{
  "id": 155,
  "bookmark": "string",
  "user": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "role": "50419801-0f30-8644-2b3c-9bc2d980d0a0",
  "collection": "articles",
  "search": "string",
  "filters": [
    {
      "key": "7RwVrquB5dPmfbrI1rcWy",
      "field": "title",
      "operator": "contains",
      "value": "Hello"
    }
  ],
  "layout": null,
  "layout_query": {
    "cards": {
      "sort": "-published_on"
    }
  },
  "layout_options": {
    "cards": {
      "icon": "account_circle",
      "title": "{{ first_name }} {{ last_name }}",
      "subtitle": "{{ title }}",
      "size": 3
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for this single collection preset.|
|bookmark|string \| null|false|none|Name for the bookmark. If this is set, the preset will be considered a bookmark.|
|user|string \| [Users](#schemausers) \| null|false|none|The unique identifier of the user to whom this collection preset applies.|
|role|string \| [Roles](#schemaroles) \| null|false|none|The unique identifier of a role in the platform. If `user` is null, this will be used to apply the collection preset or bookmark for all users in the role.|
|collection|string \| [Collections](#schemacollections)|false|none|What collection this collection preset is used for.|
|search|string \| null|false|none|Search query.|
|filters|[object]|false|none|The filters that the user applied.|
|layout|string|false|none|Key of the layout that is used.|
|layout_query|object \| null|false|none|Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.|
|layout_options|object \| null|false|none|Options of the views. The properties in here are controlled by the layout.|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "fields": [
    "title",
    "author.name",
    "*.*"
  ],
  "filter": {
    "title": {
      "_eq": "Hello"
    }
  },
  "search": "string",
  "sort": [
    "-date_created"
  ],
  "limit": 50,
  "offset": 100,
  "page": 2,
  "meta": "*",
  "aggregate": {
    "count": [
      "*"
    ]
  },
  "groupBy": [
    "status"
  ],
  "deep": {
    "related_articles": {
      "_limit": 3
    }
  },
  "alias": {
    "author_name": "author.name"
  },
  "export": "csv",
  "version": "site-redesign-2027",
  "versionRaw": false,
  "backlink": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|Control what fields are returned in the response. Supports dot notation for related fields, wildcards (`*`, `*.*`), Many-to-Any (M2A) collection-scoping (`field:collection.field`), and field functions (`year(date_published)`).<br>|
|filter|object|false|none|Select items in the collection that match the given filter conditions.|
|search|string|false|none|Filter by items that contain the given search query. Matches case-insensitively against `string`/`text` fields; relational fields are not searched. If the value parses as a number or UUID, numeric and UUID fields are also matched exactly.<br>|
|sort|[string]|false|none|How to sort the returned items. Prefix a field with `-` for descending order. Supports dot notation for related fields and field functions (`year(date_created)`).<br>|
|limit|integer|false|none|Set the maximum number of items that will be returned. Defaults to 100. `-1` returns all items.<br>|
|offset|integer|false|none|How many items to skip when fetching data. Can be used for pagination. Overridden by `page` if both are provided.<br>|
|page|integer|false|none|An alternative to `offset`. Pages through results in `limit`-sized increments starting at page `1`. Overrides `offset` if both are provided.<br>|
|meta|string \| [string]|false|none|What metadata to return. `*` is shorthand for both `total_count` and `filter_count`.<br>|
|aggregate|object|false|none|Perform calculations on a set of values. Each key is an aggregate function name, and each value is the field(s) to apply it to. `count` also accepts `*` to count all items regardless of field.<br>|
|groupBy|[string]|false|none|Group the returned items by the given field(s).|
|deep|object|false|none|Set any other query parameter, except `fields` and `deep` itself, on a nested relational dataset.|
|alias|object|false|none|Rename fields on the fly, so the same field can be requested multiple times under different paths, filters, or aggregations. The alias must reference a same-collection field or field function; it cannot contain a period.<br>|
|export|string|false|none|Saves the API response to a file.|
|version|string|false|none|Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version.<br>|
|versionRaw|boolean|false|none|When used with `version`, returns the raw revision data instead of the merged item data.|
|backlink|boolean|false|none|Toggle whether reverse-relational fields are included when expanding a `*.*` wildcard. Explicitly specified field names are not affected.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|export|csv|
|export|csv_utf8|
|export|json|
|export|xml|
|export|yaml|

<h2 id="tocS_Relations">Relations</h2>
<!-- backwards compatibility -->
<a id="schemarelations"></a>
<a id="schema_Relations"></a>
<a id="tocSrelations"></a>
<a id="tocsrelations"></a>

```json
{
  "id": 1,
  "many_collection": "directus_activity",
  "many_field": "user",
  "many_primary": "id",
  "one_collection": "directus_users",
  "one_field": null,
  "one_primary": "id",
  "junction_field": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the relation.|
|many_collection|string|false|none|Collection that has the field that holds the foreign key.|
|many_field|string|false|none|Foreign key. Field that holds the primary key of the related collection.|
|many_primary|string|false|none|The primary key field of the current collection.|
|one_collection|string|false|none|Collection on the _one_ side of the relationship.|
|one_field|string \| null|false|none|Alias column that serves as the _one_ side of the relationship.|
|one_primary|string|false|none|The primary key field of the related collection.|
|junction_field|string \| null|false|none|Field on the junction table that holds the many field of the related relation.|

<h2 id="tocS_Revisions">Revisions</h2>
<!-- backwards compatibility -->
<a id="schemarevisions"></a>
<a id="schema_Revisions"></a>
<a id="tocSrevisions"></a>
<a id="tocsrevisions"></a>

```json
{
  "id": 1,
  "activity": 2,
  "collection": "articles",
  "item": "168",
  "data": {
    "author": 1,
    "body": "This is my first post",
    "featured_image": 15,
    "id": "168",
    "title": "Hello, World!"
  },
  "delta": {
    "title": "Hello, World!"
  },
  "parent": null,
  "version": "draft"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the revision.|
|activity|integer \| [Activity](#schemaactivity)|false|none|Unique identifier for the activity record.|
|collection|string \| [Collections](#schemacollections)|false|none|Collection of the updated item.|
|item|string|false|none|Primary key of updated item.|
|data|object \| null|false|none|Copy of item state at time of update.|
|delta|object|false|none|Changes between the previous and the current revision.|
|parent|integer \| null|false|none|If the current item was updated relationally, this is the id of the parent revision record|
|version|string \| [Versions](#schemaversions)|false|none|Associated version of this revision.|

<h2 id="tocS_Roles">Roles</h2>
<!-- backwards compatibility -->
<a id="schemaroles"></a>
<a id="schema_Roles"></a>
<a id="tocSroles"></a>
<a id="tocsroles"></a>

```json
{
  "id": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "name": "Administrator",
  "icon": "verified_user",
  "description": "Admins have access to all managed data within the system by default",
  "ip_access": [],
  "enforce_tfa": false,
  "admin_access": false,
  "app_access": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the role.|
|name|string|false|none|Name of the role.|
|icon|string|false|none|The role's icon.|
|description|string \| null|false|none|Description of the role.|
|ip_access|[string]|false|none|Array of IP addresses that are allowed to connect to the API as a user of this role.|
|enforce_tfa|boolean|false|none|Whether or not this role enforces the use of 2FA.|
|admin_access|boolean|false|none|Admin role. If true, skips all permission checks.|
|app_access|boolean|false|none|The users in the role are allowed to use the app.|

<h2 id="tocS_Schema">Schema</h2>
<!-- backwards compatibility -->
<a id="schemaschema"></a>
<a id="schema_Schema"></a>
<a id="tocSschema"></a>
<a id="tocsschema"></a>

```json
{
  "version": 1,
  "directus": "string",
  "vendor": "string",
  "collections": [
    {
      "collection": "customers",
      "meta": null,
      "schema": {
        "name": "customers",
        "schema": "public",
        "comment": null
      }
    }
  ],
  "fields": [
    {
      "collection": "about_us",
      "field": "id",
      "type": "integer",
      "schema": {
        "name": "title",
        "table": "posts",
        "type": "string",
        "default_value": null,
        "max_length": null,
        "is_nullable": false,
        "is_primary_key": false,
        "has_auto_increment": false,
        "foreign_key_column": null,
        "foreign_key_table": null,
        "comment": null,
        "schema": "public",
        "foreign_key_schema": null
      },
      "meta": {
        "id": 3,
        "collection": "posts",
        "field": "title",
        "special": null,
        "system-interface": "primary-key",
        "options": null,
        "display": null,
        "display_options": null,
        "locked": true,
        "readonly": false,
        "hidden": true,
        "sort": 1,
        "width": null,
        "group": null,
        "translations": null,
        "note": ""
      }
    }
  ],
  "relations": [
    {
      "id": 1,
      "many_collection": "directus_activity",
      "many_field": "user",
      "many_primary": "id",
      "one_collection": "directus_users",
      "one_field": null,
      "one_primary": "id",
      "junction_field": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|false|none|none|
|directus|string|false|none|none|
|vendor|string|false|none|none|
|collections|[[Collections](#schemacollections)]|false|none|none|
|fields|[[Fields](#schemafields)]|false|none|none|
|relations|[[Relations](#schemarelations)]|false|none|none|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "id": 1,
  "project_name": "Directus",
  "project_url": null,
  "project_color": null,
  "project_logo": null,
  "public_foreground": null,
  "public_background": null,
  "public_note": null,
  "auth_login_attempts": 25,
  "auth_password_policy": "string",
  "storage_default_folder": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "default_exports_folder": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "storage_asset_transform": "all",
  "storage_asset_presets": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Unique identifier for the setting.|
|project_name|string|false|none|The name of the project.|
|project_url|string \| null|false|none|The url of the project.|
|project_color|string \| null|false|none|The brand color of the project.|
|project_logo|string \| null|false|none|The logo of the project.|
|public_foreground|string \| null|false|none|The foreground of the project.|
|public_background|object \| null|false|none|The background of the project.|
|public_note|string \| null|false|none|Note rendered on the public pages of the app.|
|auth_login_attempts|integer|false|none|Allowed authentication login attempts before the user's status is set to blocked.|
|auth_password_policy|string \| null|false|none|Authentication password policy.|
|storage_default_folder|string(uuid)|false|none|Default folder to place files|
|default_exports_folder|string(uuid) \| null|false|none|Default folder to place exported files|
|storage_asset_transform|string \| null|false|none|What transformations are allowed in the assets endpoint.|
|storage_asset_presets|[object]|false|none|Array of allowed|

#### Enumerated Values

|Property|Value|
|---|---|
|storage_asset_transform|all|
|storage_asset_transform|none|
|storage_asset_transform|presets|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "first_name": "Admin",
  "last_name": "User",
  "email": "admin@example.com",
  "password": "string",
  "location": null,
  "title": null,
  "description": null,
  "tags": null,
  "avatar": null,
  "language": "en-US",
  "theme": "auto",
  "tfa_secret": null,
  "status": "active",
  "role": "2f24211d-d928-469a-aea3-3c8f53d4e426",
  "token": "string",
  "last_access": "2020-05-31T14:32:37Z",
  "last_page": "/my-project/settings/collections/a"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique identifier for the user.|
|first_name|string|false|none|First name of the user.|
|last_name|string|false|none|Last name of the user.|
|email|string(email)|false|none|Unique email address for the user.|
|password|string|false|none|Password of the user.|
|location|string \| null|false|none|The user's location.|
|title|string \| null|false|none|The user's title.|
|description|string \| null|false|none|The user's description.|
|tags|[string]|false|none|The user's tags.|
|avatar|string \| [Files](#schemafiles) \| null|false|none|The user's avatar.|
|language|string|false|none|The user's language used in Directus.|
|theme|string|false|none|What theme the user is using.|
|tfa_secret|string \| null|false|none|The 2FA secret string that's used to generate one time passwords.|
|status|string|false|none|Status of the user.|
|role|string \| [Roles](#schemaroles)|false|none|Unique identifier of the role of this user.|
|token|string \| null|false|none|Static token for the user.|
|last_access|string(date-time) \| null|false|none|When this user used the API last.|
|last_page|string \| null|false|none|Last page that the user was on.|

#### Enumerated Values

|Property|Value|
|---|---|
|theme|light|
|theme|dark|
|theme|auto|
|status|active|
|status|invited|
|status|draft|
|status|suspended|
|status|deleted|

<h2 id="tocS_Versions">Versions</h2>
<!-- backwards compatibility -->
<a id="schemaversions"></a>
<a id="schema_Versions"></a>
<a id="tocSversions"></a>
<a id="tocsversions"></a>

```json
{
  "id": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "key": "draft",
  "name": "My Draft",
  "collection": "articles",
  "item": "168",
  "date_created": "2022-05-11T13:14:52Z",
  "date_updated": "2022-05-11T13:14:53Z",
  "user_created": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "user_updated": "63716273-0f29-4648-8a2a-2af2948f6f78",
  "delta": {
    "my_field": "Updated Value"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Primary key of the Content Version.|
|key|string|false|none|Key of the Content Version, used as the value for the "version" query parameter.|
|name|string|false|none|Descriptive name of the Content Version.|
|collection|string \| [Collections](#schemacollections)|false|none|Name of the collection the Content Version is created on.|
|item|string|false|none|The item the Content Version is created on.|
|date_created|string(date-time) \| null|false|none|When the Content Version was created.|
|date_updated|string(date-time) \| null|false|none|When the Content Version was last updated.|
|user_created|string \| [Users](#schemausers)|false|none|User that created the Content Version.|
|user_updated|string \| [Users](#schemausers)|false|none|User that last updated the Content Version.|
|delta|object|false|none|The current changes compared to the main version of the item.|
