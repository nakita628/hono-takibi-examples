<h1 id="homer-next-gen-api">Homer Next-Gen API v4.0.2-draft</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Draft Next-Gen REST API specification for the new homer-core.

Base URLs:

* <a href="/api/v4">/api/v4</a>

# Authentication

- HTTP Authentication, scheme: bearer

* API Key (authTokenHeader)
    - Parameter Name: **Auth-Token**, in: header.

<h1 id="homer-next-gen-api-auth">Auth</h1>

## Create session (login)

<a id="opIdauthSessionCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "admin",
    "password": "your-password"
  }'
```

`POST /auth/sessions`

> Body parameter

```json
{
  "username": "admin",
  "password": "your-password"
}
```

<h3 id="create-session-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginRequest](#schemaloginrequest)|true|none|
|» username|body|string|true|none|
|» password|body|string|true|User password (not the default bootstrap password unless configured explicitly)|

> Example responses

> 201 Response

```json
{
  "data": {
    "token": "string",
    "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
    "user": {
      "admin": true
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-session-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session created|[LoginResponse](#schemaloginresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Close session (logout)

<a id="opIdauthSessionDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth/sessions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /auth/sessions/{sessionId}`

<h3 id="close-session-logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="close-session-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Session closed|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List authentication providers

<a id="opIdauthProvidersList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth/providers \
  -H 'Accept: application/json'
```

`GET /auth/providers`

> Example responses

> 200 Response

```json
{
  "data": {
    "internal": {
      "enable": true,
      "name": "string",
      "position": 0,
      "type": "string"
    },
    "oauth2": [
      {
        "enable": true,
        "name": "string",
        "position": 0,
        "provider_image": "string",
        "provider_name": "string",
        "type": "string",
        "url": "string",
        "auto_redirect": true
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-authentication-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Providers list|[AuthProvidersResponse](#schemaauthprovidersresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth2 redirect

<a id="opIdauthOauth2Redirect"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth/oauth2/string/redirect \
  -H 'Accept: application/json'
```

`GET /auth/oauth2/{provider}/redirect`

<h3 id="oauth2-redirect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="oauth2-redirect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect to provider|None|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth2 callback

<a id="opIdauthOauth2Callback"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth/oauth2/string/callback \
  -H 'Accept: application/json'
```

`GET /auth/oauth2/{provider}/callback`

<h3 id="oauth2-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="oauth2-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect after callback|None|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Exchange one-time token for JWT

<a id="opIdauthOauth2TokenExchange"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth/oauth2/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "token"
  }'
```

`POST /auth/oauth2/token`

> Body parameter

```json
{
  "token": "token"
}
```

<h3 id="exchange-one-time-token-for-jwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuth2TokenExchange](#schemaoauth2tokenexchange)|true|none|
|» token|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "token": "string",
    "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
    "user": {
      "admin": true
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="exchange-one-time-token-for-jwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token issued|[LoginResponse](#schemaloginresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="homer-next-gen-api-users">Users</h1>

## List users

<a id="opIdusersList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|search|query|string|false|none|
|filter[username]|query|string|false|none|
|filter[email]|query|string|false|none|
|filter[user_group]|query|string|false|none|
|filter[enabled]|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "guid": "e71771a2-1ea0-498f-8d27-391713e10664",
        "username": "string",
        "name": "string",
        "partid": 0,
        "email": "string",
        "enabled": true,
        "firstname": "string",
        "lastname": "string",
        "department": "string",
        "user_group": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users|[UserListResponse](#schemauserlistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create user (admin)

<a id="opIdusersCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "username": "string",
    "partid": 10,
    "email": "string",
    "password": "string",
    "name": "string",
    "enabled": true,
    "firstname": "string",
    "lastname": "string",
    "department": "string",
    "user_group": "string"
  }'
```

`POST /users`

> Body parameter

```json
{
  "username": "string",
  "partid": 10,
  "email": "string",
  "password": "string",
  "name": "string",
  "enabled": true,
  "firstname": "string",
  "lastname": "string",
  "department": "string",
  "user_group": "string"
}
```

<h3 id="create-user-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserCreate](#schemausercreate)|true|none|
|» username|body|string|true|none|
|» partid|body|integer|true|none|
|» email|body|string|true|none|
|» password|body|string|false|none|
|» name|body|string|false|Display name (stored as users.full_name)|
|» enabled|body|boolean|false|none|
|» firstname|body|string|true|none|
|» lastname|body|string|true|none|
|» department|body|string|true|none|
|» user_group|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-user-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get user

<a id="opIdusersGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}`

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "guid": "e71771a2-1ea0-498f-8d27-391713e10664",
    "username": "string",
    "name": "string",
    "partid": 0,
    "email": "string",
    "enabled": true,
    "firstname": "string",
    "lastname": "string",
    "department": "string",
    "user_group": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[UserResponse](#schemauserresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete user (admin)

<a id="opIdusersDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{userId}`

<h3 id="delete-user-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-user-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update user

<a id="opIdusersUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partid": 0,
    "email": "string",
    "password": "string",
    "name": "string",
    "enabled": true,
    "firstname": "string",
    "lastname": "string",
    "department": "string",
    "user_group": "string"
  }'
```

`PATCH /users/{userId}`

> Body parameter

```json
{
  "partid": 0,
  "email": "string",
  "password": "string",
  "name": "string",
  "enabled": true,
  "firstname": "string",
  "lastname": "string",
  "department": "string",
  "user_group": "string"
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|
|body|body|[UserPatch](#schemauserpatch)|true|none|
|» partid|body|integer|false|none|
|» email|body|string|false|none|
|» password|body|string|false|none|
|» name|body|string|false|Display name (users.full_name)|
|» enabled|body|boolean|false|none|
|» firstname|body|string|false|none|
|» lastname|body|string|false|none|
|» department|body|string|false|none|
|» user_group|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Current user profile

<a id="opIdusersMe"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me`

> Example responses

> 200 Response

```json
{
  "data": {
    "guid": "string",
    "username": "string",
    "display_name": "string",
    "avatar": "string",
    "group": "string",
    "admin": true,
    "external_auth": true,
    "external_profile": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="current-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Profile|[UserProfileResponse](#schemauserprofileresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-transactions">Transactions</h1>

## Transaction search (simple filters)

<a id="opIdtransactionsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions`

<h3 id="transaction-search-simple-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer(int64)|false|none|
|to|query|integer(int64)|false|none|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|filter[transaction_id]|query|string|false|none|
|filter[src_ip]|query|string|false|none|
|filter[dst_ip]|query|string|false|none|
|filter[protocol]|query|integer|false|none|
|filter[method]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 123,
        "sid": "abc-123",
        "src_ip": "127.0.0.1",
        "dst_ip": "127.0.0.1",
        "method": "INVITE",
        "storage_lake": "homer_lake_hot",
        "storage_volume": "hot"
      }
    ],
    "keys": [
      "id",
      "sid",
      "src_ip",
      "dst_ip",
      "method",
      "storage_lake",
      "storage_volume"
    ]
  },
  "meta": {
    "pagination": {
      "limit": 50,
      "total": 1
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="transaction-search-simple-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions list|[CallListResponse](#schemacalllistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Advanced transaction search

<a id="opIdtransactionsSearch"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/transactions/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": {
      "proto_type": 0,
      "event_type": "call",
      "method": "string",
      "call_id": "string",
      "ruri_user": "string",
      "from_user": "string",
      "to_user": "string",
      "user_agent": "string",
      "src_ip": "string",
      "dst_ip": "string",
      "src_port": 0,
      "dst_port": 0,
      "capture_id": 0,
      "node": "string"
    },
    "param": {
      "transaction": {},
      "limit": 200,
      "search": {},
      "orlogic": true,
      "whitelist": [
        "string"
      ],
      "location": {
        "node": [
          "string"
        ]
      },
      "timezone": {
        "value": 0,
        "name": "string"
      }
    },
    "timestamp": {
      "from": 0,
      "to": 0
    }
  }'
```

`POST /transactions/search`

> Body parameter

```json
{
  "filter": {
    "proto_type": 0,
    "event_type": "call",
    "method": "string",
    "call_id": "string",
    "ruri_user": "string",
    "from_user": "string",
    "to_user": "string",
    "user_agent": "string",
    "src_ip": "string",
    "dst_ip": "string",
    "src_port": 0,
    "dst_port": 0,
    "capture_id": 0,
    "node": "string"
  },
  "param": {
    "transaction": {},
    "limit": 200,
    "search": {},
    "orlogic": true,
    "whitelist": [
      "string"
    ],
    "location": {
      "node": [
        "string"
      ]
    },
    "timezone": {
      "value": 0,
      "name": "string"
    }
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="advanced-transaction-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|none|
|» filter|body|object|false|none|
|» » proto_type|body|integer|false|Protocol type (e.g. 1 for SIP)|
|» » event_type|body|string|false|Transaction/event type|
|» » method|body|string|false|none|
|» » call_id|body|string|false|none|
|» » ruri_user|body|string|false|none|
|» » from_user|body|string|false|none|
|» » to_user|body|string|false|none|
|» » user_agent|body|string|false|none|
|» » src_ip|body|string|false|none|
|» » dst_ip|body|string|false|none|
|» » src_port|body|integer|false|none|
|» » dst_port|body|integer|false|none|
|» » capture_id|body|integer|false|none|
|» » node|body|string|false|none|
|» param|body|object|false|none|
|» » transaction|body|object|false|none|
|» » limit|body|integer|false|none|
|» » search|body|object|false|none|
|» » orlogic|body|boolean|false|none|
|» » whitelist|body|[string]|false|none|
|» » location|body|object|false|none|
|» » » node|body|[string]|false|none|
|» » timezone|body|object|false|none|
|» » » value|body|integer|false|none|
|» » » name|body|string|false|none|
|» timestamp|body|object|false|none|
|» » from|body|integer(int64)|false|Unix epoch milliseconds (UTC).|
|» » to|body|integer(int64)|false|Unix epoch milliseconds (UTC).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » event_type|call|
|» » event_type|registration|
|» » event_type|rtp|
|» » event_type|rtcp|
|» » event_type|log|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "sid": "string",
        "dst_host": "string",
        "src_host": "string",
        "dst_id": "string",
        "src_id": "string",
        "src_ip": "string",
        "dst_ip": "string",
        "src_port": 0,
        "dst_port": 0,
        "alias_src": "string",
        "alias_dst": "string",
        "method": "string",
        "method_text": "string",
        "create_date": 0,
        "protocol": 0,
        "msg_color": "string",
        "table": "string",
        "ruri_user": "string",
        "destination": 0,
        "micro_ts": 0,
        "storage_lake": "string",
        "storage_volume": "string"
      }
    ],
    "keys": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="advanced-transaction-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions list|[CallListResponse](#schemacalllistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Transaction messages

<a id="opIdtransactionMessagesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/transactions/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "session_id": "string",
    "session_ids": [
      "string"
    ],
    "proto_type": 0,
    "event_type": "string",
    "timestamp": {
      "from": 0,
      "to": 0
    },
    "whitelist": [
      "10.0.0.1",
      "192.168.0.1"
    ],
    "correlate": false
  }'
```

`POST /transactions/messages`

> Body parameter

```json
{
  "session_id": "string",
  "session_ids": [
    "string"
  ],
  "proto_type": 0,
  "event_type": "string",
  "timestamp": {
    "from": 0,
    "to": 0
  },
  "whitelist": [
    "10.0.0.1",
    "192.168.0.1"
  ],
  "correlate": false
}
```

<h3 id="transaction-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionSessionRequest](#schematransactionsessionrequest)|true|none|
|» session_id|body|string|false|Session identifier to lookup messages/logs/QoS.|
|» session_ids|body|[string]|false|Multiple Call-IDs (OR filter; B2B leg matching where applicable).|
|» proto_type|body|integer|false|HEP protocol type (default 1).|
|» event_type|body|string|false|Event type (call, registration, default).|
|» timestamp|body|object|false|Optional millisecond UTC window (from/to).|
|» » from|body|integer(int64)|false|none|
|» » to|body|integer(int64)|false|none|
|» whitelist|body|[string]|false|IPs to exclude from PCAP/text export only (legacy Homer 7 field name; not an allow-list). A row is omitted when src_ip or dst_ip equals any listed address. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.<br>|
|» correlate|body|boolean|false|PCAP/text export only. When true, also export the call legs that the call flow correlates with the requested session id(s) (B2BUA / X-CID, via the enabled correlation script for the proto_type/event_type), instead of only the requested ids. Skipped for event_type "all"; falls back to the requested ids if correlation is unavailable or fails. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "sid": "string",
        "protocol_header": {
          "dst_ip": "string",
          "src_ip": "string",
          "dst_port": 0,
          "src_port": 0,
          "protocol": 0,
          "capture_id": 0,
          "capture_pass": "string",
          "payload_type": 0,
          "time_seconds": 0,
          "time_useconds": 0,
          "protocol_family": 0
        },
        "data_header": {
          "call_id": "string",
          "method": "string",
          "to_tag": "string",
          "to_user": "string",
          "from_tag": "string",
          "pid_user": "string",
          "auth_user": "string",
          "from_user": "string",
          "ruri_user": "string",
          "user_agent": "string",
          "ruri_domain": "string"
        },
        "raw": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="transaction-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages|[MessageListResponse](#schemamessagelistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Message by ID

<a id="opIdmessagesGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /messages/{messageId}`

<h3 id="message-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "sid": "string",
    "protocol_header": {
      "dst_ip": "string",
      "src_ip": "string",
      "dst_port": 0,
      "src_port": 0,
      "protocol": 0,
      "capture_id": 0,
      "capture_pass": "string",
      "payload_type": 0,
      "time_seconds": 0,
      "time_useconds": 0,
      "protocol_family": 0
    },
    "data_header": {
      "call_id": "string",
      "method": "string",
      "to_tag": "string",
      "to_user": "string",
      "from_tag": "string",
      "pid_user": "string",
      "auth_user": "string",
      "from_user": "string",
      "ruri_user": "string",
      "user_agent": "string",
      "ruri_domain": "string"
    },
    "raw": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="message-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message|[MessageResponse](#schemamessageresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Decoded message

<a id="opIdmessagesGetDecoded"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/messages/string/decoded \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /messages/{messageId}/decoded`

<h3 id="decoded-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "data": [
      {}
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="decoded-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Decoded message|[MessageDecodedResponse](#schemamessagedecodedresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Transaction QoS

<a id="opIdtransactionQosGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/transactions/qos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "session_id": "string",
    "session_ids": [
      "string"
    ],
    "proto_type": 0,
    "event_type": "string",
    "timestamp": {
      "from": 0,
      "to": 0
    },
    "whitelist": [
      "10.0.0.1",
      "192.168.0.1"
    ],
    "correlate": false
  }'
```

`POST /transactions/qos`

> Body parameter

```json
{
  "session_id": "string",
  "session_ids": [
    "string"
  ],
  "proto_type": 0,
  "event_type": "string",
  "timestamp": {
    "from": 0,
    "to": 0
  },
  "whitelist": [
    "10.0.0.1",
    "192.168.0.1"
  ],
  "correlate": false
}
```

<h3 id="transaction-qos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionSessionRequest](#schematransactionsessionrequest)|true|none|
|» session_id|body|string|false|Session identifier to lookup messages/logs/QoS.|
|» session_ids|body|[string]|false|Multiple Call-IDs (OR filter; B2B leg matching where applicable).|
|» proto_type|body|integer|false|HEP protocol type (default 1).|
|» event_type|body|string|false|Event type (call, registration, default).|
|» timestamp|body|object|false|Optional millisecond UTC window (from/to).|
|» » from|body|integer(int64)|false|none|
|» » to|body|integer(int64)|false|none|
|» whitelist|body|[string]|false|IPs to exclude from PCAP/text export only (legacy Homer 7 field name; not an allow-list). A row is omitted when src_ip or dst_ip equals any listed address. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.<br>|
|» correlate|body|boolean|false|PCAP/text export only. When true, also export the call legs that the call flow correlates with the requested session id(s) (B2BUA / X-CID, via the enabled correlation script for the proto_type/event_type), instead of only the requested ids. Skipped for event_type "all"; falls back to the requested ids if correlation is unavailable or fails. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.<br>|

> Example responses

> 200 Response

```json
{
  "data": {
    "rtcp": {
      "data": [
        {
          "id": 0,
          "sid": "string",
          "dst_ip": "string",
          "src_ip": "string",
          "dst_port": 0,
          "src_port": 0,
          "payload_type": 0,
          "micro_ts": 0
        }
      ]
    },
    "rtp": {
      "data": [
        {
          "id": 0,
          "sid": "string",
          "dst_ip": "string",
          "src_ip": "string",
          "dst_port": 0,
          "src_port": 0,
          "payload_type": 0,
          "micro_ts": 0
        }
      ]
    },
    "vqrtcp": {
      "data": [
        {}
      ]
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="transaction-qos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|QoS|[QosResponse](#schemaqosresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-exports">Exports</h1>

## Create export (PCAP/TEXT)

<a id="opIdexportsCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "pcap",
    "query": {}
  }'
```

`POST /exports`

> Body parameter

```json
{
  "type": "pcap",
  "query": {}
}
```

<h3 id="create-export-pcaptext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportRequest](#schemaexportrequest)|true|none|
|» type|body|string|true|none|
|» query|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|pcap|
|» type|text|

> Example responses

> 201 Response

```json
{
  "data": {
    "export_id": "string",
    "status": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-export-pcaptext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Export created|[ExportResponse](#schemaexportresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Export status

<a id="opIdexportsGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/exports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /exports/{exportId}`

<h3 id="export-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exportId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "export_id": "string",
    "status": "string",
    "download_url": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="export-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status|[ExportStatusResponse](#schemaexportstatusresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download export file

<a id="opIdexportsDownload"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/exports/string/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /exports/{exportId}/download`

<h3 id="download-export-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exportId|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="download-export-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Export file (binary)|Inline|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-imports">Imports</h1>

## Import PCAP

<a id="opIdimportsPcapCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/imports/pcap \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file' \
  -F 'override_to_current_time=true' \
  -F 'force_sip_table=registration' \
  -F 'force_table=string'
```

`POST /imports/pcap`

> Body parameter

```yaml
file: string
override_to_current_time: "true"
force_sip_table: registration
force_table: string
```

<h3 id="import-pcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|none|
|» override_to_current_time|body|string|false|When "true" / "1" / "on", packet timestamps are remapped so the first SIP frame is "now" and later frames keep the same deltas as in the capture.<br>|
|» force_sip_table|body|string|false|Optional. When set, every decoded SIP message is written to this logical DuckLake table instead of auto-routing by method. Values: call, registration, default; aliases: reg, register, hep_proto_1_call, 1_call, etc. Same as multipart field force_table.<br>|
|» force_table|body|string|false|Alias of force_sip_table (same semantics).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» override_to_current_time|true|
|» override_to_current_time|false|
|» override_to_current_time|1|
|» override_to_current_time|0|
|» override_to_current_time|on|
|» override_to_current_time|off|

> Example responses

> 201 Response

```json
{
  "data": {
    "inserted": 0,
    "rejected": 0
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="import-pcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Import completed|[ImportResponse](#schemaimportresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-dashboards">Dashboards</h1>

## List dashboards

<a id="opIddashboardsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/dashboards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboards`

<h3 id="list-dashboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "cssclass": "string",
        "href": "string",
        "id": "string",
        "owner": "string",
        "name": "string",
        "param": "string",
        "shared": true,
        "type": 0,
        "weight": 0
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-dashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboards|[DashboardListResponse](#schemadashboardlistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create dashboard

<a id="opIddashboardsCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/dashboards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cssclass": "string",
    "href": "string",
    "id": "string",
    "owner": "string",
    "name": "string",
    "param": "string",
    "shared": true,
    "type": 0,
    "weight": 0
  }'
```

`POST /dashboards`

> Body parameter

```json
{
  "cssclass": "string",
  "href": "string",
  "id": "string",
  "owner": "string",
  "name": "string",
  "param": "string",
  "shared": true,
  "type": 0,
  "weight": 0
}
```

<h3 id="create-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DashboardElement](#schemadashboardelement)|true|none|
|» cssclass|body|string|false|none|
|» href|body|string|false|none|
|» id|body|string|false|none|
|» owner|body|string|false|none|
|» name|body|string|false|none|
|» param|body|string|false|none|
|» shared|body|boolean|false|none|
|» type|body|integer|false|none|
|» weight|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get dashboard

<a id="opIddashboardsGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/dashboards/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dashboards/{dashboardId}`

<h3 id="get-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "cssclass": "string",
    "href": "string",
    "id": "string",
    "owner": "string",
    "name": "string",
    "param": "string",
    "shared": true,
    "type": 0,
    "weight": 0
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="get-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard|[DashboardResponse](#schemadashboardresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update dashboard

<a id="opIddashboardsUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/dashboards/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cssclass": "string",
    "href": "string",
    "id": "string",
    "owner": "string",
    "name": "string",
    "param": "string",
    "shared": true,
    "type": 0,
    "weight": 0
  }'
```

`PUT /dashboards/{dashboardId}`

> Body parameter

```json
{
  "cssclass": "string",
  "href": "string",
  "id": "string",
  "owner": "string",
  "name": "string",
  "param": "string",
  "shared": true,
  "type": 0,
  "weight": 0
}
```

<h3 id="update-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|
|body|body|[DashboardElement](#schemadashboardelement)|true|none|
|» cssclass|body|string|false|none|
|» href|body|string|false|none|
|» id|body|string|false|none|
|» owner|body|string|false|none|
|» name|body|string|false|none|
|» param|body|string|false|none|
|» shared|body|boolean|false|none|
|» type|body|integer|false|none|
|» weight|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete dashboard

<a id="opIddashboardsDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/dashboards/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dashboards/{dashboardId}`

<h3 id="delete-dashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reset user dashboards

<a id="opIddashboardsReset"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/me/dashboards/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /me/dashboards/reset`

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "sid": "string",
    "protocol_header": {
      "dst_ip": "string",
      "src_ip": "string",
      "dst_port": 0,
      "src_port": 0,
      "protocol": 0,
      "capture_id": 0,
      "capture_pass": "string",
      "payload_type": 0,
      "time_seconds": 0,
      "time_useconds": 0,
      "protocol_family": 0
    },
    "data_header": {
      "call_id": "string",
      "method": "string",
      "to_tag": "string",
      "to_user": "string",
      "from_tag": "string",
      "pid_user": "string",
      "auth_user": "string",
      "from_user": "string",
      "ruri_user": "string",
      "user_agent": "string",
      "ruri_domain": "string"
    },
    "raw": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="reset-user-dashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reset|[MessageResponse](#schemamessageresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-mappings">Mappings</h1>

## List mappings

<a id="opIdmappingsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/mappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /mappings`

<h3 id="list-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|filter[profile]|query|string|false|none|
|filter[hepid]|query|integer|false|none|
|filter[hep_alias]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "guid": "string",
        "profile": "string",
        "hepid": 0,
        "hep_alias": "string",
        "partid": 0,
        "version": 0,
        "retention": 0,
        "partition_step": 0,
        "create_index": {},
        "create_table": "string",
        "correlation_mapping": {},
        "fields_mapping": {},
        "fields_settings": {},
        "schema_mapping": {},
        "schema_settings": {}
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mappings|[MappingListResponse](#schemamappinglistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create mapping (admin)

<a id="opIdmappingsCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/mappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "partid": 0,
    "version": 0,
    "retention": 0,
    "partition_step": 0,
    "create_index": {},
    "create_table": "string",
    "correlation_mapping": {},
    "fields_mapping": {},
    "fields_settings": {},
    "schema_mapping": {},
    "schema_settings": {}
  }'
```

`POST /mappings`

> Body parameter

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "partid": 0,
  "version": 0,
  "retention": 0,
  "partition_step": 0,
  "create_index": {},
  "create_table": "string",
  "correlation_mapping": {},
  "fields_mapping": {},
  "fields_settings": {},
  "schema_mapping": {},
  "schema_settings": {}
}
```

<h3 id="create-mapping-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MappingSchema](#schemamappingschema)|true|none|
|» guid|body|string|false|none|
|» profile|body|string|false|none|
|» hepid|body|integer|false|none|
|» hep_alias|body|string|false|none|
|» partid|body|integer|false|none|
|» version|body|integer|false|none|
|» retention|body|integer|false|none|
|» partition_step|body|integer|false|none|
|» create_index|body|object|false|none|
|» create_table|body|string|false|none|
|» correlation_mapping|body|object|false|none|
|» fields_mapping|body|object|false|none|
|» fields_settings|body|object|false|none|
|» schema_mapping|body|object|false|none|
|» schema_settings|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-mapping-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Mapping by ID

<a id="opIdmappingsGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/mappings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /mappings/{mappingId}`

<h3 id="mapping-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mappingId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "partid": 0,
    "version": 0,
    "retention": 0,
    "partition_step": 0,
    "create_index": {},
    "create_table": "string",
    "correlation_mapping": {},
    "fields_mapping": {},
    "fields_settings": {},
    "schema_mapping": {},
    "schema_settings": {}
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="mapping-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mapping|[MappingResponse](#schemamappingresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update mapping (admin)

<a id="opIdmappingsUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/mappings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "partid": 0,
    "version": 0,
    "retention": 0,
    "partition_step": 0,
    "create_index": {},
    "create_table": "string",
    "correlation_mapping": {},
    "fields_mapping": {},
    "fields_settings": {},
    "schema_mapping": {},
    "schema_settings": {}
  }'
```

`PUT /mappings/{mappingId}`

> Body parameter

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "partid": 0,
  "version": 0,
  "retention": 0,
  "partition_step": 0,
  "create_index": {},
  "create_table": "string",
  "correlation_mapping": {},
  "fields_mapping": {},
  "fields_settings": {},
  "schema_mapping": {},
  "schema_settings": {}
}
```

<h3 id="update-mapping-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mappingId|path|string|true|none|
|body|body|[MappingSchema](#schemamappingschema)|true|none|
|» guid|body|string|false|none|
|» profile|body|string|false|none|
|» hepid|body|integer|false|none|
|» hep_alias|body|string|false|none|
|» partid|body|integer|false|none|
|» version|body|integer|false|none|
|» retention|body|integer|false|none|
|» partition_step|body|integer|false|none|
|» create_index|body|object|false|none|
|» create_table|body|string|false|none|
|» correlation_mapping|body|object|false|none|
|» fields_mapping|body|object|false|none|
|» fields_settings|body|object|false|none|
|» schema_mapping|body|object|false|none|
|» schema_settings|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-mapping-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete mapping (admin)

<a id="opIdmappingsDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/mappings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /mappings/{mappingId}`

<h3 id="delete-mapping-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mappingId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-mapping-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Mapping fields by profile

<a id="opIdmappingsFieldsList"></a>

> Code samples

```bash
curl 'http://localhost:9080/api/v4/mappings/fields?hepid=0&profile=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /mappings/fields`

<h3 id="mapping-fields-by-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hepid|query|integer|true|none|
|profile|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "category": "string",
        "name": "string",
        "value": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="mapping-fields-by-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fields|[MappingFieldsResponse](#schemamappingfieldsresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-hepsub">Hepsub</h1>

## List HEP subscriptions

<a id="opIdhepsubsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/hepsubs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hepsubs`

<h3 id="list-hep-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|filter[profile]|query|string|false|none|
|filter[hepid]|query|integer|false|none|
|filter[hep_alias]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "guid": "string",
        "profile": "string",
        "hepid": 0,
        "hep_alias": "string",
        "version": 0,
        "mapping": {}
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-hep-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HEP subscriptions|[HepsubListResponse](#schemahepsublistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create HEP subscription (admin)

<a id="opIdhepsubsCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/hepsubs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "version": 0,
    "mapping": {}
  }'
```

`POST /hepsubs`

> Body parameter

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "version": 0,
  "mapping": {}
}
```

<h3 id="create-hep-subscription-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HepsubSchema](#schemahepsubschema)|true|none|
|» guid|body|string|false|none|
|» profile|body|string|false|none|
|» hepid|body|integer|false|none|
|» hep_alias|body|string|false|none|
|» version|body|integer|false|none|
|» mapping|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-hep-subscription-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## HEP subscription by ID

<a id="opIdhepsubsGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/hepsubs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hepsubs/{hepsubId}`

<h3 id="hep-subscription-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hepsubId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "version": 0,
    "mapping": {}
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="hep-subscription-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HEP subscription|[HepsubResponse](#schemahepsubresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update HEP subscription (admin)

<a id="opIdhepsubsUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/hepsubs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "version": 0,
    "mapping": {}
  }'
```

`PUT /hepsubs/{hepsubId}`

> Body parameter

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "version": 0,
  "mapping": {}
}
```

<h3 id="update-hep-subscription-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hepsubId|path|string|true|none|
|body|body|[HepsubSchema](#schemahepsubschema)|true|none|
|» guid|body|string|false|none|
|» profile|body|string|false|none|
|» hepid|body|integer|false|none|
|» hep_alias|body|string|false|none|
|» version|body|integer|false|none|
|» mapping|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-hep-subscription-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete HEP subscription (admin)

<a id="opIdhepsubsDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/hepsubs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /hepsubs/{hepsubId}`

<h3 id="delete-hep-subscription-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hepsubId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-hep-subscription-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-aliases">Aliases</h1>

## List aliases

<a id="opIdaliasesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /aliases`

<h3 id="list-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|filter[alias]|query|string|false|none|
|filter[ip]|query|string|false|none|
|filter[capture_id]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "alias": "string",
        "ip": "string",
        "port": 0,
        "mask": 0,
        "capture_id": "string",
        "status": true,
        "custom_image": "string",
        "tag1": "string",
        "tag2": "string",
        "tag3": "string",
        "tag4": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Aliases|[AliasListResponse](#schemaaliaslistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create alias (admin)

<a id="opIdaliasesCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "guid": "string",
    "alias": "string",
    "ip": "string",
    "port": 0,
    "mask": 0,
    "capture_id": "string",
    "status": true,
    "custom_image": "string",
    "tag1": "string",
    "tag2": "string",
    "tag3": "string",
    "tag4": "string"
  }'
```

`POST /aliases`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "alias": "string",
  "ip": "string",
  "port": 0,
  "mask": 0,
  "capture_id": "string",
  "status": true,
  "custom_image": "string",
  "tag1": "string",
  "tag2": "string",
  "tag3": "string",
  "tag4": "string"
}
```

<h3 id="create-alias-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AliasStruct](#schemaaliasstruct)|true|none|
|» id|body|integer|false|none|
|» guid|body|string|false|none|
|» alias|body|string|false|none|
|» ip|body|string|false|none|
|» port|body|integer|false|none|
|» mask|body|integer|false|none|
|» capture_id|body|string|false|none|
|» status|body|boolean|false|none|
|» custom_image|body|string|false|Optional image URL shown with this alias in the UI / enriched rows|
|» tag1|body|string|false|Free-form tag (e.g. device type)|
|» tag2|body|string|false|Free-form tag (e.g. OS)|
|» tag3|body|string|false|none|
|» tag4|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-alias-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update alias (admin)

<a id="opIdaliasesUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/aliases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "guid": "string",
    "alias": "string",
    "ip": "string",
    "port": 0,
    "mask": 0,
    "capture_id": "string",
    "status": true,
    "custom_image": "string",
    "tag1": "string",
    "tag2": "string",
    "tag3": "string",
    "tag4": "string"
  }'
```

`PUT /aliases/{aliasId}`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "alias": "string",
  "ip": "string",
  "port": 0,
  "mask": 0,
  "capture_id": "string",
  "status": true,
  "custom_image": "string",
  "tag1": "string",
  "tag2": "string",
  "tag3": "string",
  "tag4": "string"
}
```

<h3 id="update-alias-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasId|path|string|true|none|
|body|body|[AliasStruct](#schemaaliasstruct)|true|none|
|» id|body|integer|false|none|
|» guid|body|string|false|none|
|» alias|body|string|false|none|
|» ip|body|string|false|none|
|» port|body|integer|false|none|
|» mask|body|integer|false|none|
|» capture_id|body|string|false|none|
|» status|body|boolean|false|none|
|» custom_image|body|string|false|Optional image URL shown with this alias in the UI / enriched rows|
|» tag1|body|string|false|Free-form tag (e.g. device type)|
|» tag2|body|string|false|Free-form tag (e.g. OS)|
|» tag3|body|string|false|none|
|» tag4|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-alias-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete alias (admin)

<a id="opIdaliasesDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/aliases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /aliases/{aliasId}`

<h3 id="delete-alias-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-alias-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List IP aliases

<a id="opIdipaliasesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/ipaliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ipaliases`

<h3 id="list-ip-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|filter[alias]|query|string|false|none|
|filter[ip]|query|string|false|none|
|filter[capture_id]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "alias": "string",
        "ip": "string",
        "port": 0,
        "mask": 0,
        "capture_id": "string",
        "status": true,
        "custom_image": "string",
        "tag1": "string",
        "tag2": "string",
        "tag3": "string",
        "tag4": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-ip-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of IP aliases|[AliasListResponse](#schemaaliaslistresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create IP alias (admin)

<a id="opIdipaliasesCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/ipaliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "guid": "string",
    "alias": "string",
    "ip": "string",
    "port": 0,
    "mask": 0,
    "capture_id": "string",
    "status": true,
    "custom_image": "string",
    "tag1": "string",
    "tag2": "string",
    "tag3": "string",
    "tag4": "string"
  }'
```

`POST /ipaliases`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "alias": "string",
  "ip": "string",
  "port": 0,
  "mask": 0,
  "capture_id": "string",
  "status": true,
  "custom_image": "string",
  "tag1": "string",
  "tag2": "string",
  "tag3": "string",
  "tag4": "string"
}
```

<h3 id="create-ip-alias-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AliasStruct](#schemaaliasstruct)|true|none|
|» id|body|integer|false|none|
|» guid|body|string|false|none|
|» alias|body|string|false|none|
|» ip|body|string|false|none|
|» port|body|integer|false|none|
|» mask|body|integer|false|none|
|» capture_id|body|string|false|none|
|» status|body|boolean|false|none|
|» custom_image|body|string|false|Optional image URL shown with this alias in the UI / enriched rows|
|» tag1|body|string|false|Free-form tag (e.g. device type)|
|» tag2|body|string|false|Free-form tag (e.g. OS)|
|» tag3|body|string|false|none|
|» tag4|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-ip-alias-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update IP alias (admin)

<a id="opIdipaliasesUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/ipaliases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "guid": "string",
    "alias": "string",
    "ip": "string",
    "port": 0,
    "mask": 0,
    "capture_id": "string",
    "status": true,
    "custom_image": "string",
    "tag1": "string",
    "tag2": "string",
    "tag3": "string",
    "tag4": "string"
  }'
```

`PUT /ipaliases/{aliasId}`

> Body parameter

```json
{
  "id": 0,
  "guid": "string",
  "alias": "string",
  "ip": "string",
  "port": 0,
  "mask": 0,
  "capture_id": "string",
  "status": true,
  "custom_image": "string",
  "tag1": "string",
  "tag2": "string",
  "tag3": "string",
  "tag4": "string"
}
```

<h3 id="update-ip-alias-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasId|path|string|true|none|
|body|body|[AliasStruct](#schemaaliasstruct)|true|none|
|» id|body|integer|false|none|
|» guid|body|string|false|none|
|» alias|body|string|false|none|
|» ip|body|string|false|none|
|» port|body|integer|false|none|
|» mask|body|integer|false|none|
|» capture_id|body|string|false|none|
|» status|body|boolean|false|none|
|» custom_image|body|string|false|Optional image URL shown with this alias in the UI / enriched rows|
|» tag1|body|string|false|Free-form tag (e.g. device type)|
|» tag2|body|string|false|Free-form tag (e.g. OS)|
|» tag3|body|string|false|none|
|» tag4|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-ip-alias-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete IP alias (admin)

<a id="opIdipaliasesDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/ipaliases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /ipaliases/{aliasId}`

<h3 id="delete-ip-alias-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-ip-alias-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-tokens">Tokens</h1>

## List auth tokens (admin)

<a id="opIdauthTokensList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth-tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /auth-tokens`

<h3 id="list-auth-tokens-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|filter[name]|query|string|false|none|
|filter[active]|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "guid": "string",
        "creator_guid": "string",
        "name": "string",
        "user_object": {
          "username": "string",
          "firstname": "string",
          "lastname": "string",
          "email": "string",
          "user_group": "string",
          "id": 0,
          "partid": 0
        },
        "ip_address": "string",
        "create_date": "string",
        "lastusage_date": "string",
        "expire_date": "string",
        "usage_calls": 0,
        "limit_calls": 0,
        "active": true
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-auth-tokens-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tokens|[AuthTokenListResponse](#schemaauthtokenlistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create auth token (admin)

<a id="opIdauthTokensCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth-tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "expire_date": "1970-01-01T00:00:00Z",
    "limit_calls": 0,
    "active": true
  }'
```

`POST /auth-tokens`

> Body parameter

```json
{
  "name": "string",
  "expire_date": "1970-01-01T00:00:00Z",
  "limit_calls": 0,
  "active": true
}
```

<h3 id="create-auth-token-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthTokenCreate](#schemaauthtokencreate)|true|none|
|» name|body|string|false|none|
|» expire_date|body|string(date-time)|false|none|
|» limit_calls|body|integer|false|none|
|» active|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "token": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-auth-token-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AuthTokenCreateResponse](#schemaauthtokencreateresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get auth token (admin)

<a id="opIdauthTokensGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth-tokens/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /auth-tokens/{tokenId}`

<h3 id="get-auth-token-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "guid": "string",
    "creator_guid": "string",
    "name": "string",
    "user_object": {
      "username": "string",
      "firstname": "string",
      "lastname": "string",
      "email": "string",
      "user_group": "string",
      "id": 0,
      "partid": 0
    },
    "ip_address": "string",
    "create_date": "string",
    "lastusage_date": "string",
    "expire_date": "string",
    "usage_calls": 0,
    "limit_calls": 0,
    "active": true
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="get-auth-token-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token|[AuthTokenResponse](#schemaauthtokenresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update auth token (admin)

<a id="opIdauthTokensUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth-tokens/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "expire_date": "1970-01-01T00:00:00Z",
    "limit_calls": 0,
    "active": true
  }'
```

`PUT /auth-tokens/{tokenId}`

> Body parameter

```json
{
  "name": "string",
  "expire_date": "1970-01-01T00:00:00Z",
  "limit_calls": 0,
  "active": true
}
```

<h3 id="update-auth-token-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|none|
|body|body|[AuthTokenUpdate](#schemaauthtokenupdate)|true|none|
|» name|body|string|false|none|
|» expire_date|body|string(date-time)|false|none|
|» limit_calls|body|integer|false|none|
|» active|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-auth-token-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete auth token (admin)

<a id="opIdauthTokensDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/auth-tokens/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /auth-tokens/{tokenId}`

<h3 id="delete-auth-token-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-auth-token-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-agents">Agents</h1>

## Agent subscriptions

<a id="opIdagentSubscriptionsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agents/subscriptions`

<h3 id="agent-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|filter[type]|query|string|false|none|
|filter[node]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "uuid": "string",
        "gid": 0,
        "host": "string",
        "port": 0,
        "protocol": "string",
        "path": "string",
        "node": "string",
        "type": "string",
        "ttl": 0,
        "create_date": "string",
        "expire_date": "string",
        "active": 0
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="agent-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscriptions|[AgentSubListResponse](#schemaagentsublistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create agent subscription (Auth-Token)

<a id="opIdagentSubscriptionsCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Auth-Token: ${API_KEY}" \
  -d '{
    "uuid": "string",
    "gid": 0,
    "host": "string",
    "port": 0,
    "protocol": "string",
    "path": "string",
    "node": "string",
    "type": "string",
    "ttl": 0,
    "create_date": "string",
    "expire_date": "string",
    "active": 0
  }'
```

`POST /agents/subscriptions`

> Body parameter

```json
{
  "uuid": "string",
  "gid": 0,
  "host": "string",
  "port": 0,
  "protocol": "string",
  "path": "string",
  "node": "string",
  "type": "string",
  "ttl": 0,
  "create_date": "string",
  "expire_date": "string",
  "active": 0
}
```

<h3 id="create-agent-subscription-auth-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AgentSub](#schemaagentsub)|true|none|
|» uuid|body|string|false|none|
|» gid|body|integer|false|none|
|» host|body|string|false|none|
|» port|body|integer|false|none|
|» protocol|body|string|false|none|
|» path|body|string|false|none|
|» node|body|string|false|none|
|» type|body|string|false|none|
|» ttl|body|integer|false|none|
|» create_date|body|string|false|none|
|» expire_date|body|string|false|none|
|» active|body|integer|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-agent-subscription-auth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
authTokenHeader
</aside>

## Agent subscription by ID

<a id="opIdagentSubscriptionsGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agents/subscriptions/{subscriptionId}`

<h3 id="agent-subscription-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "uuid": "string",
    "gid": 0,
    "host": "string",
    "port": 0,
    "protocol": "string",
    "path": "string",
    "node": "string",
    "type": "string",
    "ttl": 0,
    "create_date": "string",
    "expire_date": "string",
    "active": 0
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="agent-subscription-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription|[AgentSubResponse](#schemaagentsubresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update agent subscription

<a id="opIdagentSubscriptionsUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/subscriptions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "uuid": "string",
    "gid": 0,
    "host": "string",
    "port": 0,
    "protocol": "string",
    "path": "string",
    "node": "string",
    "type": "string",
    "ttl": 0,
    "create_date": "string",
    "expire_date": "string",
    "active": 0
  }'
```

`PUT /agents/subscriptions/{subscriptionId}`

> Body parameter

```json
{
  "uuid": "string",
  "gid": 0,
  "host": "string",
  "port": 0,
  "protocol": "string",
  "path": "string",
  "node": "string",
  "type": "string",
  "ttl": 0,
  "create_date": "string",
  "expire_date": "string",
  "active": 0
}
```

<h3 id="update-agent-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|body|body|[AgentSub](#schemaagentsub)|true|none|
|» uuid|body|string|false|none|
|» gid|body|integer|false|none|
|» host|body|string|false|none|
|» port|body|integer|false|none|
|» protocol|body|string|false|none|
|» path|body|string|false|none|
|» node|body|string|false|none|
|» type|body|string|false|none|
|» ttl|body|integer|false|none|
|» create_date|body|string|false|none|
|» expire_date|body|string|false|none|
|» active|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-agent-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete agent subscription

<a id="opIdagentSubscriptionsDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /agents/subscriptions/{subscriptionId}`

<h3 id="delete-agent-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-agent-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Agent types

<a id="opIdagentTypesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agents/types`

<h3 id="agent-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|
|search|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="agent-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Types|[AgentTypeListResponse](#schemaagenttypelistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Agent subscriptions by type

<a id="opIdagentTypesSubscriptionsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/types/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agents/types/{type}`

<h3 id="agent-subscriptions-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "uuid": "string",
        "gid": 0,
        "host": "string",
        "port": 0,
        "protocol": "string",
        "path": "string",
        "node": "string",
        "type": "string",
        "ttl": 0,
        "create_date": "string",
        "expire_date": "string",
        "active": 0
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="agent-subscriptions-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscriptions|[AgentSubListResponse](#schemaagentsublistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search subscriptions

<a id="opIdagentSubscriptionsSearch"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/agents/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "type": "string"
  }'
```

`POST /agents/search`

> Body parameter

```json
{
  "guid": "string",
  "type": "string"
}
```

<h3 id="search-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AgentSearchRequest](#schemaagentsearchrequest)|true|none|
|» guid|body|string|false|none|
|» type|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "uuid": "string",
        "gid": 0,
        "host": "string",
        "port": 0,
        "protocol": "string",
        "path": "string",
        "node": "string",
        "type": "string",
        "ttl": 0,
        "create_date": "string",
        "expire_date": "string",
        "active": 0
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="search-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result|[AgentSubListResponse](#schemaagentsublistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-settings">Settings</h1>

## All user settings

<a id="opIduserSettingsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/me/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me/settings`

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "category": "string",
        "data": {
          "cssclass": "string",
          "href": "string",
          "id": "string",
          "owner": "string",
          "name": "string",
          "param": "string",
          "shared": true,
          "type": 0,
          "weight": 0
        },
        "guid": "string",
        "id": 0,
        "param": "string",
        "partid": 0,
        "user_name": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="all-user-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings|[UserSettingListResponse](#schemausersettinglistresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create/update settings by category

<a id="opIduserSettingsUpsert"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/me/settings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "category": "string",
    "param": "string",
    "data": {}
  }'
```

`PUT /me/settings/{category}`

> Body parameter

```json
{
  "category": "string",
  "param": "string",
  "data": {}
}
```

<h3 id="createupdate-settings-by-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|none|
|body|body|[UserSettingUpsert](#schemausersettingupsert)|true|none|
|» category|body|string|false|none|
|» param|body|string|true|none|
|» data|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="createupdate-settings-by-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete settings by category

<a id="opIduserSettingsDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/me/settings/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /me/settings/{category}`

<h3 id="delete-settings-by-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-settings-by-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List global settings

<a id="opIdadvancedList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/advanced \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /advanced`

<h3 id="list-global-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|filter[category]|query|string|false|none|
|filter[param]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "partid": 0,
        "category": "string",
        "param": "string",
        "data": {}
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-global-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of global settings|[GlobalSettingListResponse](#schemaglobalsettinglistresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create global setting (admin)

<a id="opIdadvancedCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/advanced \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "partid": 0,
    "category": "string",
    "param": "string",
    "data": {}
  }'
```

`POST /advanced`

> Body parameter

```json
{
  "guid": "string",
  "partid": 0,
  "category": "string",
  "param": "string",
  "data": {}
}
```

<h3 id="create-global-setting-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalSettingUpsert](#schemaglobalsettingupsert)|true|none|
|» guid|body|string|false|none|
|» partid|body|integer|false|none|
|» category|body|string|true|none|
|» param|body|string|false|none|
|» data|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-global-setting-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get global setting by GUID

<a id="opIdadvancedGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/advanced/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /advanced/{guid}`

<h3 id="get-global-setting-by-guid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "guid": "string",
    "partid": 0,
    "category": "string",
    "param": "string",
    "data": {}
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="get-global-setting-by-guid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Global setting|[GlobalSettingResponse](#schemaglobalsettingresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update global setting (admin)

<a id="opIdadvancedUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/advanced/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "partid": 0,
    "category": "string",
    "param": "string",
    "data": {}
  }'
```

`PUT /advanced/{guid}`

> Body parameter

```json
{
  "guid": "string",
  "partid": 0,
  "category": "string",
  "param": "string",
  "data": {}
}
```

<h3 id="update-global-setting-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|none|
|body|body|[GlobalSettingUpsert](#schemaglobalsettingupsert)|true|none|
|» guid|body|string|false|none|
|» partid|body|integer|false|none|
|» category|body|string|true|none|
|» param|body|string|false|none|
|» data|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-global-setting-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete global setting (admin)

<a id="opIdadvancedDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/advanced/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /advanced/{guid}`

<h3 id="delete-global-setting-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-global-setting-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List HEP scripts

<a id="opIdscriptsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/scripts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts`

<h3 id="list-hep-scripts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|filter[profile]|query|string|false|none|
|filter[type]|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "profile": "string",
        "hep_alias": "string",
        "type": "string",
        "hepid": 0,
        "status": true,
        "script": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="list-hep-scripts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of HEP scripts|[HepScriptListResponse](#schemahepscriptlistresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create HEP script (admin)

<a id="opIdscriptsCreate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/scripts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "profile": "string",
    "hep_alias": "string",
    "type": "string",
    "hepid": 0,
    "status": true,
    "script": "string"
  }'
```

`POST /scripts`

> Body parameter

```json
{
  "guid": "string",
  "profile": "string",
  "hep_alias": "string",
  "type": "string",
  "hepid": 0,
  "status": true,
  "script": "string"
}
```

<h3 id="create-hep-script-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HepScriptUpsert](#schemahepscriptupsert)|true|none|
|» guid|body|string|false|none|
|» profile|body|string|false|none|
|» hep_alias|body|string|false|none|
|» type|body|string|false|none|
|» hepid|body|integer|false|none|
|» status|body|boolean|false|none|
|» script|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="create-hep-script-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get HEP script by ID

<a id="opIdscriptsGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/scripts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scripts/{scriptId}`

<h3 id="get-hep-script-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": 0,
    "guid": "string",
    "profile": "string",
    "hep_alias": "string",
    "type": "string",
    "hepid": 0,
    "status": true,
    "script": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="get-hep-script-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HEP script|[HepScriptResponse](#schemahepscriptresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update HEP script (admin)

<a id="opIdscriptsUpdate"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/scripts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "guid": "string",
    "profile": "string",
    "hep_alias": "string",
    "type": "string",
    "hepid": 0,
    "status": true,
    "script": "string"
  }'
```

`PUT /scripts/{scriptId}`

> Body parameter

```json
{
  "guid": "string",
  "profile": "string",
  "hep_alias": "string",
  "type": "string",
  "hepid": 0,
  "status": true,
  "script": "string"
}
```

<h3 id="update-hep-script-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|none|
|body|body|[HepScriptUpsert](#schemahepscriptupsert)|true|none|
|» guid|body|string|false|none|
|» profile|body|string|false|none|
|» hep_alias|body|string|false|none|
|» type|body|string|false|none|
|» hepid|body|integer|false|none|
|» status|body|boolean|false|none|
|» script|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="update-hep-script-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[IdResponse](#schemaidresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete HEP script (admin)

<a id="opIdscriptsDelete"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/scripts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scripts/{scriptId}`

<h3 id="delete-hep-script-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scriptId|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 403 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="delete-hep-script-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-statistics">Statistics</h1>

## Statistics query

<a id="opIdstatisticsQuery"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/statistics/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "param": {
      "limit": 0,
      "precision": 0,
      "query": [
        {
          "main": "string",
          "database": "string",
          "retention": "string",
          "rawquery": "string",
          "type": [
            "string"
          ],
          "tag": [
            "string"
          ]
        }
      ],
      "bfrom": 0,
      "total": true
    },
    "timestamp": {
      "from": 0,
      "to": 0
    }
  }'
```

`POST /statistics/query`

Executes a read-only SQL query for Grafana-style statistics panels.
Each `rawquery` in the request body is validated before execution (same
rules as `POST /api/v4/query`): allowed statement types include SELECT,
WITH, SHOW, DESCRIBE, EXPLAIN, PRAGMA; semicolons and DML/DDL are rejected.


> Body parameter

```json
{
  "param": {
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "main": "string",
        "database": "string",
        "retention": "string",
        "rawquery": "string",
        "type": [
          "string"
        ],
        "tag": [
          "string"
        ]
      }
    ],
    "bfrom": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="statistics-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StatisticQuery](#schemastatisticquery)|true|none|
|» param|body|object|false|none|
|» » limit|body|integer|false|none|
|» » precision|body|integer|false|none|
|» » query|body|[object]|false|none|
|» » » main|body|string|false|none|
|» » » database|body|string|false|none|
|» » » retention|body|string|false|none|
|» » » rawquery|body|string|false|none|
|» » » type|body|[string]|false|none|
|» » » tag|body|[string]|false|none|
|» » bfrom|body|integer|false|none|
|» » total|body|boolean|false|none|
|» timestamp|body|object|false|none|
|» » from|body|integer(int64)|false|Unix epoch milliseconds (UTC).|
|» » to|body|integer(int64)|false|Unix epoch milliseconds (UTC).|

> Example responses

> 200 Response

```json
{
  "data": {},
  "total": 0,
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="statistics-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response|[StatisticResponse](#schemastatisticresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Statistics databases

<a id="opIdstatisticsDatabasesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/statistics/databases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statistics/databases`

<h3 id="statistics-databases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {},
  "status": "string",
  "total": 0,
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="statistics-databases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Databases|[StatisticDbResponse](#schemastatisticdbresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Measurements by DB

<a id="opIdstatisticsMeasurementsList"></a>

> Code samples

```bash
curl 'http://localhost:9080/api/v4/statistics/measurements?db=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statistics/measurements`

<h3 id="measurements-by-db-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|query|string|true|none|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="measurements-by-db-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Measurements|[StatisticMeasurementsResponse](#schemastatisticmeasurementsresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Metrics by DB

<a id="opIdstatisticsMetricsList"></a>

> Code samples

```bash
curl 'http://localhost:9080/api/v4/statistics/metrics?db=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statistics/metrics`

<h3 id="metrics-by-db-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|query|string|true|none|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="metrics-by-db-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics|[StatisticMetricsResponse](#schemastatisticmetricsresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Tags by DB

<a id="opIdstatisticsTagsList"></a>

> Code samples

```bash
curl 'http://localhost:9080/api/v4/statistics/tags?db=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statistics/tags`

<h3 id="tags-by-db-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|db|query|string|true|none|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="tags-by-db-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags|[StatisticTagsResponse](#schemastatistictagsresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-logs">Logs</h1>

## Loki labels

<a id="opIdlokiLabelsList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/logs/loki/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs/loki/labels`

<h3 id="loki-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="loki-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Labels|[LokiLabelsResponse](#schemalokilabelsresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Loki values

<a id="opIdlokiValuesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/logs/loki/values \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /logs/loki/values`

<h3 id="loki-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="loki-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Values|[LokiValuesResponse](#schemalokivaluesresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Loki query

<a id="opIdlokiQuery"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/logs/loki/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "param": {
      "limit": 0,
      "search": "string",
      "server": "string",
      "timezone": {}
    },
    "timestamp": {
      "from": 0,
      "to": 0
    }
  }'
```

`POST /logs/loki/query`

> Body parameter

```json
{
  "param": {
    "limit": 0,
    "search": "string",
    "server": "string",
    "timezone": {}
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="loki-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LokiQuery](#schemalokiquery)|true|none|
|» param|body|object|false|none|
|» » limit|body|integer|false|none|
|» » search|body|string|false|none|
|» » server|body|string|false|none|
|» » timezone|body|object|false|none|
|» timestamp|body|object|false|none|
|» » from|body|integer(int64)|false|Unix epoch milliseconds (UTC).|
|» » to|body|integer(int64)|false|Unix epoch milliseconds (UTC).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "custom_1": "string",
      "custom_2": "string",
      "id": 0,
      "micro_ts": 0
    }
  ],
  "total": 0,
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="loki-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Response|[LokiQueryResponse](#schemalokiqueryresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-integrations">Integrations</h1>

## Grafana status

<a id="opIdgrafanaStatusGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/integrations/grafana/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/grafana/status`

> Example responses

> 200 Response

```json
{
  "data": {},
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="grafana-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status|[GrafanaStatusResponse](#schemagrafanastatusresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Grafana folders

<a id="opIdgrafanaFoldersList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/integrations/grafana/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/grafana/folders`

<h3 id="grafana-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page[limit]|query|integer|false|none|
|page[cursor]|query|string|false|none|
|sort|query|string|false|Sort, format: field or -field|

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {}
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="grafana-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folders|[GrafanaFoldersResponse](#schemagrafanafoldersresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Grafana dashboard by UID

<a id="opIdgrafanaDashboardGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/integrations/grafana/dashboards/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/grafana/dashboards/{uid}`

<h3 id="grafana-dashboard-by-uid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {},
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="grafana-dashboard-by-uid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dashboard|[GrafanaDashboardResponse](#schemagrafanadashboardresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-system">System</h1>

## Get OpenAPI specification

<a id="opIdopenapiSpec"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/openapi.json \
  -H 'Accept: application/json'
```

`GET /openapi.json`

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-openapi-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI 3.0 specification in JSON format|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## DB nodes

<a id="opIddbNodesList"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/db/nodes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /db/nodes`

> Example responses

> 200 Response

```json
{
  "data": {
    "items": [
      {
        "arhive": true,
        "db_archive": "string",
        "db_name": "string",
        "host": "string",
        "name": "string",
        "node": "string",
        "online": true,
        "primary": true,
        "table_prefix": "string",
        "value": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="db-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Nodes|[NodeListResponse](#schemanodelistresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Modules status

<a id="opIdmodulesStatusGet"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/modules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /modules`

> Example responses

> 200 Response

```json
{
  "data": {
    "loki": {
      "enable": true,
      "template": "string",
      "external_url": "string"
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

> 400 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="modules-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status|[ModulesStatusResponse](#schemamodulesstatusresponse)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="homer-next-gen-api-stream">Stream</h1>

## WebSocket HEP stream

<a id="opIdhepStreamConnect"></a>

> Code samples

```bash
curl http://localhost:9080/api/v4/stream/hep \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stream/hep`

> Example responses

> 401 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

> 500 Response

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

<h3 id="websocket-hep-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|101|Switching Protocols|Switching Protocols|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "type": "https://api.homer/errors/invalid_argument",
    "title": "Invalid argument",
    "status": 400,
    "detail": "Field `from` must be <= `to`",
    "errors": [
      {
        "field": "string",
        "message": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "type": "https://api.homer/errors/invalid_argument",
  "title": "Invalid argument",
  "status": 400,
  "detail": "Field `from` must be <= `to`",
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|title|string|true|none|none|
|status|integer|true|none|none|
|detail|string|false|none|none|
|errors|[[FieldError](#schemafielderror)]|false|none|none|

<h2 id="tocS_FieldError">FieldError</h2>
<!-- backwards compatibility -->
<a id="schemafielderror"></a>
<a id="schema_FieldError"></a>
<a id="tocSfielderror"></a>
<a id="tocsfielderror"></a>

```json
{
  "field": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "request_id": "string",
  "trace_id": "string",
  "pagination": {
    "limit": 0,
    "next_cursor": "string",
    "prev_cursor": "string",
    "total": 0,
    "has_more": true
  },
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|none|
|trace_id|string|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "limit": 0,
  "next_cursor": "string",
  "prev_cursor": "string",
  "total": 0,
  "has_more": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer|false|none|none|
|next_cursor|string|false|none|none|
|prev_cursor|string|false|none|none|
|total|integer|false|none|none|
|has_more|boolean|false|none|none|

<h2 id="tocS_IdResponse">IdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaidresponse"></a>
<a id="schema_IdResponse"></a>
<a id="tocSidresponse"></a>
<a id="tocsidresponse"></a>

```json
{
  "data": "string",
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_LoginRequest">LoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaloginrequest"></a>
<a id="schema_LoginRequest"></a>
<a id="tocSloginrequest"></a>
<a id="tocsloginrequest"></a>

```json
{
  "username": "admin",
  "password": "your-password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|User password (not the default bootstrap password unless configured explicitly)|

<h2 id="tocS_LoginResponse">LoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloginresponse"></a>
<a id="schema_LoginResponse"></a>
<a id="tocSloginresponse"></a>
<a id="tocsloginresponse"></a>

```json
{
  "data": {
    "token": "string",
    "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
    "user": {
      "admin": true
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_OAuth2TokenExchange">OAuth2TokenExchange</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2tokenexchange"></a>
<a id="schema_OAuth2TokenExchange"></a>
<a id="tocSoauth2tokenexchange"></a>
<a id="tocsoauth2tokenexchange"></a>

```json
{
  "token": "token"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_AuthProvidersResponse">AuthProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthprovidersresponse"></a>
<a id="schema_AuthProvidersResponse"></a>
<a id="tocSauthprovidersresponse"></a>
<a id="tocsauthprovidersresponse"></a>

```json
{
  "data": {
    "internal": {
      "enable": true,
      "name": "string",
      "position": 0,
      "type": "string"
    },
    "oauth2": [
      {
        "enable": true,
        "name": "string",
        "position": 0,
        "provider_image": "string",
        "provider_name": "string",
        "type": "string",
        "url": "string",
        "auto_redirect": true
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_UserCreate">UserCreate</h2>
<!-- backwards compatibility -->
<a id="schemausercreate"></a>
<a id="schema_UserCreate"></a>
<a id="tocSusercreate"></a>
<a id="tocsusercreate"></a>

```json
{
  "username": "string",
  "partid": 10,
  "email": "string",
  "password": "string",
  "name": "string",
  "enabled": true,
  "firstname": "string",
  "lastname": "string",
  "department": "string",
  "user_group": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|partid|integer|true|none|none|
|email|string|true|none|none|
|password|string|false|none|none|
|name|string|false|none|Display name (stored as users.full_name)|
|enabled|boolean|false|none|none|
|firstname|string|true|none|none|
|lastname|string|true|none|none|
|department|string|true|none|none|
|user_group|string|true|none|none|

<h2 id="tocS_UserPatch">UserPatch</h2>
<!-- backwards compatibility -->
<a id="schemauserpatch"></a>
<a id="schema_UserPatch"></a>
<a id="tocSuserpatch"></a>
<a id="tocsuserpatch"></a>

```json
{
  "partid": 0,
  "email": "string",
  "password": "string",
  "name": "string",
  "enabled": true,
  "firstname": "string",
  "lastname": "string",
  "department": "string",
  "user_group": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partid|integer|false|none|none|
|email|string|false|none|none|
|password|string|false|none|none|
|name|string|false|none|Display name (users.full_name)|
|enabled|boolean|false|none|none|
|firstname|string|false|none|none|
|lastname|string|false|none|none|
|department|string|false|none|none|
|user_group|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "guid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "username": "string",
  "name": "string",
  "partid": 0,
  "email": "string",
  "enabled": true,
  "firstname": "string",
  "lastname": "string",
  "department": "string",
  "user_group": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|username|string|false|none|none|
|name|string|false|none|Display name|
|partid|integer|false|none|none|
|email|string|false|none|none|
|enabled|boolean|false|none|none|
|firstname|string|false|none|none|
|lastname|string|false|none|none|
|department|string|false|none|none|
|user_group|string|false|none|none|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "data": {
    "guid": "e71771a2-1ea0-498f-8d27-391713e10664",
    "username": "string",
    "name": "string",
    "partid": 0,
    "email": "string",
    "enabled": true,
    "firstname": "string",
    "lastname": "string",
    "department": "string",
    "user_group": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_UserListResponse">UserListResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserlistresponse"></a>
<a id="schema_UserListResponse"></a>
<a id="tocSuserlistresponse"></a>
<a id="tocsuserlistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "guid": "e71771a2-1ea0-498f-8d27-391713e10664",
        "username": "string",
        "name": "string",
        "partid": 0,
        "email": "string",
        "enabled": true,
        "firstname": "string",
        "lastname": "string",
        "department": "string",
        "user_group": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "guid": "string",
  "username": "string",
  "display_name": "string",
  "avatar": "string",
  "group": "string",
  "admin": true,
  "external_auth": true,
  "external_profile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|username|string|false|none|none|
|display_name|string|false|none|none|
|avatar|string|false|none|none|
|group|string|false|none|none|
|admin|boolean|false|none|none|
|external_auth|boolean|false|none|none|
|external_profile|string|false|none|none|

<h2 id="tocS_UserProfileResponse">UserProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserprofileresponse"></a>
<a id="schema_UserProfileResponse"></a>
<a id="tocSuserprofileresponse"></a>
<a id="tocsuserprofileresponse"></a>

```json
{
  "data": {
    "guid": "string",
    "username": "string",
    "display_name": "string",
    "avatar": "string",
    "group": "string",
    "admin": true,
    "external_auth": true,
    "external_profile": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UserProfile](#schemauserprofile)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_UserSetting">UserSetting</h2>
<!-- backwards compatibility -->
<a id="schemausersetting"></a>
<a id="schema_UserSetting"></a>
<a id="tocSusersetting"></a>
<a id="tocsusersetting"></a>

```json
{
  "category": "string",
  "data": {
    "cssclass": "string",
    "href": "string",
    "id": "string",
    "owner": "string",
    "name": "string",
    "param": "string",
    "shared": true,
    "type": 0,
    "weight": 0
  },
  "guid": "string",
  "id": 0,
  "param": "string",
  "partid": 0,
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|data|[DashboardElement](#schemadashboardelement)|false|none|none|
|guid|string|false|none|none|
|id|integer|false|none|none|
|param|string|false|none|none|
|partid|integer|false|none|none|
|user_name|string|false|none|none|

<h2 id="tocS_UserSettingUpsert">UserSettingUpsert</h2>
<!-- backwards compatibility -->
<a id="schemausersettingupsert"></a>
<a id="schema_UserSettingUpsert"></a>
<a id="tocSusersettingupsert"></a>
<a id="tocsusersettingupsert"></a>

```json
{
  "category": "string",
  "param": "string",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|param|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_UserSettingListResponse">UserSettingListResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersettinglistresponse"></a>
<a id="schema_UserSettingListResponse"></a>
<a id="tocSusersettinglistresponse"></a>
<a id="tocsusersettinglistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "category": "string",
        "data": {
          "cssclass": "string",
          "href": "string",
          "id": "string",
          "owner": "string",
          "name": "string",
          "param": "string",
          "shared": true,
          "type": 0,
          "weight": 0
        },
        "guid": "string",
        "id": 0,
        "param": "string",
        "partid": 0,
        "user_name": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_SearchObject">SearchObject</h2>
<!-- backwards compatibility -->
<a id="schemasearchobject"></a>
<a id="schema_SearchObject"></a>
<a id="tocSsearchobject"></a>
<a id="tocssearchobject"></a>

```json
{
  "filter": {
    "proto_type": 0,
    "event_type": "call",
    "method": "string",
    "call_id": "string",
    "ruri_user": "string",
    "from_user": "string",
    "to_user": "string",
    "user_agent": "string",
    "src_ip": "string",
    "dst_ip": "string",
    "src_port": 0,
    "dst_port": 0,
    "capture_id": 0,
    "node": "string"
  },
  "param": {
    "transaction": {},
    "limit": 200,
    "search": {},
    "orlogic": true,
    "whitelist": [
      "string"
    ],
    "location": {
      "node": [
        "string"
      ]
    },
    "timezone": {
      "value": 0,
      "name": "string"
    }
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|param|object|false|none|none|
|timestamp|object|false|none|none|

<h2 id="tocS_CallSearchRequest">CallSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacallsearchrequest"></a>
<a id="schema_CallSearchRequest"></a>
<a id="tocScallsearchrequest"></a>
<a id="tocscallsearchrequest"></a>

```json
{
  "filter": {
    "proto_type": 0,
    "event_type": "call",
    "method": "string",
    "call_id": "string",
    "ruri_user": "string",
    "from_user": "string",
    "to_user": "string",
    "user_agent": "string",
    "src_ip": "string",
    "dst_ip": "string",
    "src_port": 0,
    "dst_port": 0,
    "capture_id": 0,
    "node": "string"
  },
  "param": {
    "transaction": {},
    "limit": 200,
    "search": {},
    "orlogic": true,
    "whitelist": [
      "string"
    ],
    "location": {
      "node": [
        "string"
      ]
    },
    "timezone": {
      "value": 0,
      "name": "string"
    }
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|none|
|param|object|false|none|none|
|timestamp|object|false|none|none|

<h2 id="tocS_TransactionSessionRequest">TransactionSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schematransactionsessionrequest"></a>
<a id="schema_TransactionSessionRequest"></a>
<a id="tocStransactionsessionrequest"></a>
<a id="tocstransactionsessionrequest"></a>

```json
{
  "session_id": "string",
  "session_ids": [
    "string"
  ],
  "proto_type": 0,
  "event_type": "string",
  "timestamp": {
    "from": 0,
    "to": 0
  },
  "whitelist": [
    "10.0.0.1",
    "192.168.0.1"
  ],
  "correlate": false
}
```

Use session_id for one Call-ID, or session_ids (non-empty, max 50) for an OR filter across sessions. When session_ids is set it takes precedence over session_id. Supported on messages, qos, logs, callinfo, events, sub, hepsub, and export endpoints; responses include session_id on rows for grouping. For SIP call (proto_type=1, event_type=call), POST /transactions/callinfo returns one summary object per Call-ID (ringing_seconds, call_duration_seconds, codecs, UAC/UAS, setup delays, status, from_party, ruri_party, methods_distribution for the legacy methods chart, etc.).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session_id|string|false|none|Session identifier to lookup messages/logs/QoS.|
|session_ids|[string]|false|none|Multiple Call-IDs (OR filter; B2B leg matching where applicable).|
|proto_type|integer|false|none|HEP protocol type (default 1).|
|event_type|string|false|none|Event type (call, registration, default).|
|timestamp|object|false|none|Optional millisecond UTC window (from/to).|
|whitelist|[string]|false|none|IPs to exclude from PCAP/text export only (legacy Homer 7 field name; not an allow-list). A row is omitted when src_ip or dst_ip equals any listed address. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.<br>|
|correlate|boolean|false|none|PCAP/text export only. When true, also export the call legs that the call flow correlates with the requested session id(s) (B2BUA / X-CID, via the enabled correlation script for the proto_type/event_type), instead of only the requested ids. Skipped for event_type "all"; falls back to the requested ids if correlation is unavailable or fails. Applied on POST /transactions/export/pcap, /transactions/export/text, and share export links.<br>|

<h2 id="tocS_ProtocolHeader">ProtocolHeader</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolheader"></a>
<a id="schema_ProtocolHeader"></a>
<a id="tocSprotocolheader"></a>
<a id="tocsprotocolheader"></a>

```json
{
  "dst_ip": "string",
  "src_ip": "string",
  "dst_port": 0,
  "src_port": 0,
  "protocol": 0,
  "capture_id": 0,
  "capture_pass": "string",
  "payload_type": 0,
  "time_seconds": 0,
  "time_useconds": 0,
  "protocol_family": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dst_ip|string|false|none|none|
|src_ip|string|false|none|none|
|dst_port|integer|false|none|none|
|src_port|integer|false|none|none|
|protocol|integer|false|none|none|
|capture_id|integer|false|none|none|
|capture_pass|string|false|none|none|
|payload_type|integer|false|none|none|
|time_seconds|integer|false|none|none|
|time_useconds|integer|false|none|none|
|protocol_family|integer|false|none|none|

<h2 id="tocS_DataHeader">DataHeader</h2>
<!-- backwards compatibility -->
<a id="schemadataheader"></a>
<a id="schema_DataHeader"></a>
<a id="tocSdataheader"></a>
<a id="tocsdataheader"></a>

```json
{
  "call_id": "string",
  "method": "string",
  "to_tag": "string",
  "to_user": "string",
  "from_tag": "string",
  "pid_user": "string",
  "auth_user": "string",
  "from_user": "string",
  "ruri_user": "string",
  "user_agent": "string",
  "ruri_domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|call_id|string|false|none|none|
|method|string|false|none|none|
|to_tag|string|false|none|none|
|to_user|string|false|none|none|
|from_tag|string|false|none|none|
|pid_user|string|false|none|none|
|auth_user|string|false|none|none|
|from_user|string|false|none|none|
|ruri_user|string|false|none|none|
|user_agent|string|false|none|none|
|ruri_domain|string|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "id": 0,
  "sid": "string",
  "protocol_header": {
    "dst_ip": "string",
    "src_ip": "string",
    "dst_port": 0,
    "src_port": 0,
    "protocol": 0,
    "capture_id": 0,
    "capture_pass": "string",
    "payload_type": 0,
    "time_seconds": 0,
    "time_useconds": 0,
    "protocol_family": 0
  },
  "data_header": {
    "call_id": "string",
    "method": "string",
    "to_tag": "string",
    "to_user": "string",
    "from_tag": "string",
    "pid_user": "string",
    "auth_user": "string",
    "from_user": "string",
    "ruri_user": "string",
    "user_agent": "string",
    "ruri_domain": "string"
  },
  "raw": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|sid|string|false|none|none|
|protocol_header|[ProtocolHeader](#schemaprotocolheader)|false|none|none|
|data_header|[DataHeader](#schemadataheader)|false|none|none|
|raw|string|false|none|none|

<h2 id="tocS_CallElement">CallElement</h2>
<!-- backwards compatibility -->
<a id="schemacallelement"></a>
<a id="schema_CallElement"></a>
<a id="tocScallelement"></a>
<a id="tocscallelement"></a>

```json
{
  "id": 0,
  "sid": "string",
  "dst_host": "string",
  "src_host": "string",
  "dst_id": "string",
  "src_id": "string",
  "src_ip": "string",
  "dst_ip": "string",
  "src_port": 0,
  "dst_port": 0,
  "alias_src": "string",
  "alias_dst": "string",
  "method": "string",
  "method_text": "string",
  "create_date": 0,
  "protocol": 0,
  "msg_color": "string",
  "table": "string",
  "ruri_user": "string",
  "destination": 0,
  "micro_ts": 0,
  "storage_lake": "string",
  "storage_volume": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|sid|string|false|none|none|
|dst_host|string|false|none|none|
|src_host|string|false|none|none|
|dst_id|string|false|none|none|
|src_id|string|false|none|none|
|src_ip|string|false|none|none|
|dst_ip|string|false|none|none|
|src_port|number|false|none|none|
|dst_port|number|false|none|none|
|alias_src|string|false|none|none|
|alias_dst|string|false|none|none|
|method|string|false|none|none|
|method_text|string|false|none|none|
|create_date|integer(int64)|false|none|none|
|protocol|number|false|none|none|
|msg_color|string|false|none|none|
|table|string|false|none|none|
|ruri_user|string|false|none|none|
|destination|integer|false|none|none|
|micro_ts|integer(int64)|false|none|none|
|storage_lake|string|false|none|none|
|storage_volume|string|false|none|none|

<h2 id="tocS_CallListResponse">CallListResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalllistresponse"></a>
<a id="schema_CallListResponse"></a>
<a id="tocScalllistresponse"></a>
<a id="tocscalllistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "sid": "string",
        "dst_host": "string",
        "src_host": "string",
        "dst_id": "string",
        "src_id": "string",
        "src_ip": "string",
        "dst_ip": "string",
        "src_port": 0,
        "dst_port": 0,
        "alias_src": "string",
        "alias_dst": "string",
        "method": "string",
        "method_text": "string",
        "create_date": 0,
        "protocol": 0,
        "msg_color": "string",
        "table": "string",
        "ruri_user": "string",
        "destination": 0,
        "micro_ts": 0,
        "storage_lake": "string",
        "storage_volume": "string"
      }
    ],
    "keys": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_MessageResponse">MessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponse"></a>
<a id="schema_MessageResponse"></a>
<a id="tocSmessageresponse"></a>
<a id="tocsmessageresponse"></a>

```json
{
  "data": {
    "id": 0,
    "sid": "string",
    "protocol_header": {
      "dst_ip": "string",
      "src_ip": "string",
      "dst_port": 0,
      "src_port": 0,
      "protocol": 0,
      "capture_id": 0,
      "capture_pass": "string",
      "payload_type": 0,
      "time_seconds": 0,
      "time_useconds": 0,
      "protocol_family": 0
    },
    "data_header": {
      "call_id": "string",
      "method": "string",
      "to_tag": "string",
      "to_user": "string",
      "from_tag": "string",
      "pid_user": "string",
      "auth_user": "string",
      "from_user": "string",
      "ruri_user": "string",
      "user_agent": "string",
      "ruri_domain": "string"
    },
    "raw": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Message](#schemamessage)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_MessageListResponse">MessageListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagelistresponse"></a>
<a id="schema_MessageListResponse"></a>
<a id="tocSmessagelistresponse"></a>
<a id="tocsmessagelistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "sid": "string",
        "protocol_header": {
          "dst_ip": "string",
          "src_ip": "string",
          "dst_port": 0,
          "src_port": 0,
          "protocol": 0,
          "capture_id": 0,
          "capture_pass": "string",
          "payload_type": 0,
          "time_seconds": 0,
          "time_useconds": 0,
          "protocol_family": 0
        },
        "data_header": {
          "call_id": "string",
          "method": "string",
          "to_tag": "string",
          "to_user": "string",
          "from_tag": "string",
          "pid_user": "string",
          "auth_user": "string",
          "from_user": "string",
          "ruri_user": "string",
          "user_agent": "string",
          "ruri_domain": "string"
        },
        "raw": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_MessageDecoded">MessageDecoded</h2>
<!-- backwards compatibility -->
<a id="schemamessagedecoded"></a>
<a id="schema_MessageDecoded"></a>
<a id="tocSmessagedecoded"></a>
<a id="tocsmessagedecoded"></a>

```json
{
  "data": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_MessageDecodedResponse">MessageDecodedResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagedecodedresponse"></a>
<a id="schema_MessageDecodedResponse"></a>
<a id="tocSmessagedecodedresponse"></a>
<a id="tocsmessagedecodedresponse"></a>

```json
{
  "data": {
    "data": [
      {}
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MessageDecoded](#schemamessagedecoded)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_SearchTransactionRtp">SearchTransactionRtp</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtp"></a>
<a id="schema_SearchTransactionRtp"></a>
<a id="tocSsearchtransactionrtp"></a>
<a id="tocssearchtransactionrtp"></a>

```json
{
  "id": 0,
  "sid": "string",
  "dst_ip": "string",
  "src_ip": "string",
  "dst_port": 0,
  "src_port": 0,
  "payload_type": 0,
  "micro_ts": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|sid|string|false|none|none|
|dst_ip|string|false|none|none|
|src_ip|string|false|none|none|
|dst_port|number|false|none|none|
|src_port|number|false|none|none|
|payload_type|integer|false|none|none|
|micro_ts|integer(int64)|false|none|none|

<h2 id="tocS_SearchTransactionRtcp">SearchTransactionRtcp</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtcp"></a>
<a id="schema_SearchTransactionRtcp"></a>
<a id="tocSsearchtransactionrtcp"></a>
<a id="tocssearchtransactionrtcp"></a>

```json
{
  "id": 0,
  "sid": "string",
  "dst_ip": "string",
  "src_ip": "string",
  "dst_port": 0,
  "src_port": 0,
  "payload_type": 0,
  "micro_ts": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|sid|string|false|none|none|
|dst_ip|string|false|none|none|
|src_ip|string|false|none|none|
|dst_port|number|false|none|none|
|src_port|number|false|none|none|
|payload_type|integer|false|none|none|
|micro_ts|integer(int64)|false|none|none|

<h2 id="tocS_SearchTransactionRtpList">SearchTransactionRtpList</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtplist"></a>
<a id="schema_SearchTransactionRtpList"></a>
<a id="tocSsearchtransactionrtplist"></a>
<a id="tocssearchtransactionrtplist"></a>

```json
{
  "data": [
    {
      "id": 0,
      "sid": "string",
      "dst_ip": "string",
      "src_ip": "string",
      "dst_port": 0,
      "src_port": 0,
      "payload_type": 0,
      "micro_ts": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchTransactionRtp](#schemasearchtransactionrtp)]|false|none|none|

<h2 id="tocS_SearchTransactionRtcpList">SearchTransactionRtcpList</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtcplist"></a>
<a id="schema_SearchTransactionRtcpList"></a>
<a id="tocSsearchtransactionrtcplist"></a>
<a id="tocssearchtransactionrtcplist"></a>

```json
{
  "data": [
    {
      "id": 0,
      "sid": "string",
      "dst_ip": "string",
      "src_ip": "string",
      "dst_port": 0,
      "src_port": 0,
      "payload_type": 0,
      "micro_ts": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchTransactionRtcp](#schemasearchtransactionrtcp)]|false|none|none|

<h2 id="tocS_SearchTransactionQos">SearchTransactionQos</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionqos"></a>
<a id="schema_SearchTransactionQos"></a>
<a id="tocSsearchtransactionqos"></a>
<a id="tocssearchtransactionqos"></a>

```json
{
  "rtcp": {
    "data": [
      {
        "id": 0,
        "sid": "string",
        "dst_ip": "string",
        "src_ip": "string",
        "dst_port": 0,
        "src_port": 0,
        "payload_type": 0,
        "micro_ts": 0
      }
    ]
  },
  "rtp": {
    "data": [
      {
        "id": 0,
        "sid": "string",
        "dst_ip": "string",
        "src_ip": "string",
        "dst_port": 0,
        "src_port": 0,
        "payload_type": 0,
        "micro_ts": 0
      }
    ]
  },
  "vqrtcp": {
    "data": [
      {}
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rtcp|[SearchTransactionRtcpList](#schemasearchtransactionrtcplist)|false|none|none|
|rtp|[SearchTransactionRtpList](#schemasearchtransactionrtplist)|false|none|none|
|vqrtcp|object|false|none|none|

<h2 id="tocS_SearchTransactionLog">SearchTransactionLog</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionlog"></a>
<a id="schema_SearchTransactionLog"></a>
<a id="tocSsearchtransactionlog"></a>
<a id="tocssearchtransactionlog"></a>

```json
{
  "capture_id": "string",
  "capture_pass": "string",
  "correlation_id": "string",
  "create_date": "string",
  "dbnode": "string",
  "dst_ip": "string",
  "src_ip": "string",
  "dst_port": 0,
  "src_port": 0,
  "id": 0,
  "payload_type": 0,
  "profile": "string",
  "proto": "string",
  "protocol": 0,
  "protocol_family": 0,
  "raw": "string",
  "sid": "string",
  "time_seconds": 0,
  "time_useconds": 0,
  "node": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capture_id|string|false|none|none|
|capture_pass|string|false|none|none|
|correlation_id|string|false|none|none|
|create_date|string|false|none|none|
|dbnode|string|false|none|none|
|dst_ip|string|false|none|none|
|src_ip|string|false|none|none|
|dst_port|number|false|none|none|
|src_port|number|false|none|none|
|id|number|false|none|none|
|payload_type|integer|false|none|none|
|profile|string|false|none|none|
|proto|string|false|none|none|
|protocol|integer|false|none|none|
|protocol_family|integer|false|none|none|
|raw|string|false|none|none|
|sid|string|false|none|none|
|time_seconds|integer|false|none|none|
|time_useconds|integer|false|none|none|
|node|[string]|false|none|none|

<h2 id="tocS_QosResponse">QosResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqosresponse"></a>
<a id="schema_QosResponse"></a>
<a id="tocSqosresponse"></a>
<a id="tocsqosresponse"></a>

```json
{
  "data": {
    "rtcp": {
      "data": [
        {
          "id": 0,
          "sid": "string",
          "dst_ip": "string",
          "src_ip": "string",
          "dst_port": 0,
          "src_port": 0,
          "payload_type": 0,
          "micro_ts": 0
        }
      ]
    },
    "rtp": {
      "data": [
        {
          "id": 0,
          "sid": "string",
          "dst_ip": "string",
          "src_ip": "string",
          "dst_port": 0,
          "src_port": 0,
          "payload_type": 0,
          "micro_ts": 0
        }
      ]
    },
    "vqrtcp": {
      "data": [
        {}
      ]
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SearchTransactionQos](#schemasearchtransactionqos)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_LogListResponse">LogListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloglistresponse"></a>
<a id="schema_LogListResponse"></a>
<a id="tocSloglistresponse"></a>
<a id="tocsloglistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "capture_id": "string",
        "capture_pass": "string",
        "correlation_id": "string",
        "create_date": "string",
        "dbnode": "string",
        "dst_ip": "string",
        "src_ip": "string",
        "dst_port": 0,
        "src_port": 0,
        "id": 0,
        "payload_type": 0,
        "profile": "string",
        "proto": "string",
        "protocol": 0,
        "protocol_family": 0,
        "raw": "string",
        "sid": "string",
        "time_seconds": 0,
        "time_useconds": 0,
        "node": [
          "string"
        ]
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_ExportRequest">ExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportrequest"></a>
<a id="schema_ExportRequest"></a>
<a id="tocSexportrequest"></a>
<a id="tocsexportrequest"></a>

```json
{
  "type": "pcap",
  "query": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|query|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pcap|
|type|text|

<h2 id="tocS_ExportResponse">ExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportresponse"></a>
<a id="schema_ExportResponse"></a>
<a id="tocSexportresponse"></a>
<a id="tocsexportresponse"></a>

```json
{
  "data": {
    "export_id": "string",
    "status": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_ExportStatusResponse">ExportStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatusresponse"></a>
<a id="schema_ExportStatusResponse"></a>
<a id="tocSexportstatusresponse"></a>
<a id="tocsexportstatusresponse"></a>

```json
{
  "data": {
    "export_id": "string",
    "status": "string",
    "download_url": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_ImportResponse">ImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportresponse"></a>
<a id="schema_ImportResponse"></a>
<a id="tocSimportresponse"></a>
<a id="tocsimportresponse"></a>

```json
{
  "data": {
    "inserted": 0,
    "rejected": 0
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_DashboardElement">DashboardElement</h2>
<!-- backwards compatibility -->
<a id="schemadashboardelement"></a>
<a id="schema_DashboardElement"></a>
<a id="tocSdashboardelement"></a>
<a id="tocsdashboardelement"></a>

```json
{
  "cssclass": "string",
  "href": "string",
  "id": "string",
  "owner": "string",
  "name": "string",
  "param": "string",
  "shared": true,
  "type": 0,
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cssclass|string|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|owner|string|false|none|none|
|name|string|false|none|none|
|param|string|false|none|none|
|shared|boolean|false|none|none|
|type|integer|false|none|none|
|weight|number|false|none|none|

<h2 id="tocS_DashboardUpsert">DashboardUpsert</h2>
<!-- backwards compatibility -->
<a id="schemadashboardupsert"></a>
<a id="schema_DashboardUpsert"></a>
<a id="tocSdashboardupsert"></a>
<a id="tocsdashboardupsert"></a>

```json
{
  "cssclass": "string",
  "href": "string",
  "id": "string",
  "owner": "string",
  "name": "string",
  "param": "string",
  "shared": true,
  "type": 0,
  "weight": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cssclass|string|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|owner|string|false|none|none|
|name|string|false|none|none|
|param|string|false|none|none|
|shared|boolean|false|none|none|
|type|integer|false|none|none|
|weight|number|false|none|none|

<h2 id="tocS_DashboardResponse">DashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemadashboardresponse"></a>
<a id="schema_DashboardResponse"></a>
<a id="tocSdashboardresponse"></a>
<a id="tocsdashboardresponse"></a>

```json
{
  "data": {
    "cssclass": "string",
    "href": "string",
    "id": "string",
    "owner": "string",
    "name": "string",
    "param": "string",
    "shared": true,
    "type": 0,
    "weight": 0
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DashboardElement](#schemadashboardelement)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_DashboardListResponse">DashboardListResponse</h2>
<!-- backwards compatibility -->
<a id="schemadashboardlistresponse"></a>
<a id="schema_DashboardListResponse"></a>
<a id="tocSdashboardlistresponse"></a>
<a id="tocsdashboardlistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "cssclass": "string",
        "href": "string",
        "id": "string",
        "owner": "string",
        "name": "string",
        "param": "string",
        "shared": true,
        "type": 0,
        "weight": 0
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_MappingSchema">MappingSchema</h2>
<!-- backwards compatibility -->
<a id="schemamappingschema"></a>
<a id="schema_MappingSchema"></a>
<a id="tocSmappingschema"></a>
<a id="tocsmappingschema"></a>

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "partid": 0,
  "version": 0,
  "retention": 0,
  "partition_step": 0,
  "create_index": {},
  "create_table": "string",
  "correlation_mapping": {},
  "fields_mapping": {},
  "fields_settings": {},
  "schema_mapping": {},
  "schema_settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|profile|string|false|none|none|
|hepid|integer|false|none|none|
|hep_alias|string|false|none|none|
|partid|integer|false|none|none|
|version|integer|false|none|none|
|retention|integer|false|none|none|
|partition_step|integer|false|none|none|
|create_index|object|false|none|none|
|create_table|string|false|none|none|
|correlation_mapping|object|false|none|none|
|fields_mapping|object|false|none|none|
|fields_settings|object|false|none|none|
|schema_mapping|object|false|none|none|
|schema_settings|object|false|none|none|

<h2 id="tocS_MappingUpsert">MappingUpsert</h2>
<!-- backwards compatibility -->
<a id="schemamappingupsert"></a>
<a id="schema_MappingUpsert"></a>
<a id="tocSmappingupsert"></a>
<a id="tocsmappingupsert"></a>

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "partid": 0,
  "version": 0,
  "retention": 0,
  "partition_step": 0,
  "create_index": {},
  "create_table": "string",
  "correlation_mapping": {},
  "fields_mapping": {},
  "fields_settings": {},
  "schema_mapping": {},
  "schema_settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|profile|string|false|none|none|
|hepid|integer|false|none|none|
|hep_alias|string|false|none|none|
|partid|integer|false|none|none|
|version|integer|false|none|none|
|retention|integer|false|none|none|
|partition_step|integer|false|none|none|
|create_index|object|false|none|none|
|create_table|string|false|none|none|
|correlation_mapping|object|false|none|none|
|fields_mapping|object|false|none|none|
|fields_settings|object|false|none|none|
|schema_mapping|object|false|none|none|
|schema_settings|object|false|none|none|

<h2 id="tocS_MappingResponse">MappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemamappingresponse"></a>
<a id="schema_MappingResponse"></a>
<a id="tocSmappingresponse"></a>
<a id="tocsmappingresponse"></a>

```json
{
  "data": {
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "partid": 0,
    "version": 0,
    "retention": 0,
    "partition_step": 0,
    "create_index": {},
    "create_table": "string",
    "correlation_mapping": {},
    "fields_mapping": {},
    "fields_settings": {},
    "schema_mapping": {},
    "schema_settings": {}
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MappingSchema](#schemamappingschema)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_MappingListResponse">MappingListResponse</h2>
<!-- backwards compatibility -->
<a id="schemamappinglistresponse"></a>
<a id="schema_MappingListResponse"></a>
<a id="tocSmappinglistresponse"></a>
<a id="tocsmappinglistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "guid": "string",
        "profile": "string",
        "hepid": 0,
        "hep_alias": "string",
        "partid": 0,
        "version": 0,
        "retention": 0,
        "partition_step": 0,
        "create_index": {},
        "create_table": "string",
        "correlation_mapping": {},
        "fields_mapping": {},
        "fields_settings": {},
        "schema_mapping": {},
        "schema_settings": {}
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_SmartSearchField">SmartSearchField</h2>
<!-- backwards compatibility -->
<a id="schemasmartsearchfield"></a>
<a id="schema_SmartSearchField"></a>
<a id="tocSsmartsearchfield"></a>
<a id="tocssmartsearchfield"></a>

```json
{
  "category": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_MappingFieldsResponse">MappingFieldsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamappingfieldsresponse"></a>
<a id="schema_MappingFieldsResponse"></a>
<a id="tocSmappingfieldsresponse"></a>
<a id="tocsmappingfieldsresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "category": "string",
        "name": "string",
        "value": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_HepsubSchema">HepsubSchema</h2>
<!-- backwards compatibility -->
<a id="schemahepsubschema"></a>
<a id="schema_HepsubSchema"></a>
<a id="tocShepsubschema"></a>
<a id="tocshepsubschema"></a>

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "version": 0,
  "mapping": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|profile|string|false|none|none|
|hepid|integer|false|none|none|
|hep_alias|string|false|none|none|
|version|integer|false|none|none|
|mapping|object|false|none|none|

<h2 id="tocS_HepsubUpsert">HepsubUpsert</h2>
<!-- backwards compatibility -->
<a id="schemahepsubupsert"></a>
<a id="schema_HepsubUpsert"></a>
<a id="tocShepsubupsert"></a>
<a id="tocshepsubupsert"></a>

```json
{
  "guid": "string",
  "profile": "string",
  "hepid": 0,
  "hep_alias": "string",
  "version": 0,
  "mapping": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|profile|string|false|none|none|
|hepid|integer|false|none|none|
|hep_alias|string|false|none|none|
|version|integer|false|none|none|
|mapping|object|false|none|none|

<h2 id="tocS_HepsubResponse">HepsubResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepsubresponse"></a>
<a id="schema_HepsubResponse"></a>
<a id="tocShepsubresponse"></a>
<a id="tocshepsubresponse"></a>

```json
{
  "data": {
    "guid": "string",
    "profile": "string",
    "hepid": 0,
    "hep_alias": "string",
    "version": 0,
    "mapping": {}
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[HepsubSchema](#schemahepsubschema)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_HepsubListResponse">HepsubListResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepsublistresponse"></a>
<a id="schema_HepsubListResponse"></a>
<a id="tocShepsublistresponse"></a>
<a id="tocshepsublistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "guid": "string",
        "profile": "string",
        "hepid": 0,
        "hep_alias": "string",
        "version": 0,
        "mapping": {}
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AliasStruct">AliasStruct</h2>
<!-- backwards compatibility -->
<a id="schemaaliasstruct"></a>
<a id="schema_AliasStruct"></a>
<a id="tocSaliasstruct"></a>
<a id="tocsaliasstruct"></a>

```json
{
  "id": 0,
  "guid": "string",
  "alias": "string",
  "ip": "string",
  "port": 0,
  "mask": 0,
  "capture_id": "string",
  "status": true,
  "custom_image": "string",
  "tag1": "string",
  "tag2": "string",
  "tag3": "string",
  "tag4": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|guid|string|false|none|none|
|alias|string|false|none|none|
|ip|string|false|none|none|
|port|integer|false|none|none|
|mask|integer|false|none|none|
|capture_id|string|false|none|none|
|status|boolean|false|none|none|
|custom_image|string|false|none|Optional image URL shown with this alias in the UI / enriched rows|
|tag1|string|false|none|Free-form tag (e.g. device type)|
|tag2|string|false|none|Free-form tag (e.g. OS)|
|tag3|string|false|none|none|
|tag4|string|false|none|none|

<h2 id="tocS_AliasUpsert">AliasUpsert</h2>
<!-- backwards compatibility -->
<a id="schemaaliasupsert"></a>
<a id="schema_AliasUpsert"></a>
<a id="tocSaliasupsert"></a>
<a id="tocsaliasupsert"></a>

```json
{
  "id": 0,
  "guid": "string",
  "alias": "string",
  "ip": "string",
  "port": 0,
  "mask": 0,
  "capture_id": "string",
  "status": true,
  "custom_image": "string",
  "tag1": "string",
  "tag2": "string",
  "tag3": "string",
  "tag4": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|guid|string|false|none|none|
|alias|string|false|none|none|
|ip|string|false|none|none|
|port|integer|false|none|none|
|mask|integer|false|none|none|
|capture_id|string|false|none|none|
|status|boolean|false|none|none|
|custom_image|string|false|none|Optional image URL shown with this alias in the UI / enriched rows|
|tag1|string|false|none|Free-form tag (e.g. device type)|
|tag2|string|false|none|Free-form tag (e.g. OS)|
|tag3|string|false|none|none|
|tag4|string|false|none|none|

<h2 id="tocS_AliasListResponse">AliasListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslistresponse"></a>
<a id="schema_AliasListResponse"></a>
<a id="tocSaliaslistresponse"></a>
<a id="tocsaliaslistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "alias": "string",
        "ip": "string",
        "port": 0,
        "mask": 0,
        "capture_id": "string",
        "status": true,
        "custom_image": "string",
        "tag1": "string",
        "tag2": "string",
        "tag3": "string",
        "tag4": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AuthTokenItem">AuthTokenItem</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenitem"></a>
<a id="schema_AuthTokenItem"></a>
<a id="tocSauthtokenitem"></a>
<a id="tocsauthtokenitem"></a>

```json
{
  "guid": "string",
  "creator_guid": "string",
  "name": "string",
  "user_object": {
    "username": "string",
    "firstname": "string",
    "lastname": "string",
    "email": "string",
    "user_group": "string",
    "id": 0,
    "partid": 0
  },
  "ip_address": "string",
  "create_date": "string",
  "lastusage_date": "string",
  "expire_date": "string",
  "usage_calls": 0,
  "limit_calls": 0,
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|creator_guid|string|false|none|none|
|name|string|false|none|none|
|user_object|object|false|none|none|
|ip_address|string|false|none|none|
|create_date|string|false|none|none|
|lastusage_date|string|false|none|none|
|expire_date|string|false|none|none|
|usage_calls|integer|false|none|none|
|limit_calls|integer|false|none|none|
|active|boolean|false|none|none|

<h2 id="tocS_AuthTokenCreate">AuthTokenCreate</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokencreate"></a>
<a id="schema_AuthTokenCreate"></a>
<a id="tocSauthtokencreate"></a>
<a id="tocsauthtokencreate"></a>

```json
{
  "name": "string",
  "expire_date": "1970-01-01T00:00:00Z",
  "limit_calls": 0,
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|expire_date|string(date-time)|false|none|none|
|limit_calls|integer|false|none|none|
|active|boolean|false|none|none|

<h2 id="tocS_AuthTokenUpdate">AuthTokenUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenupdate"></a>
<a id="schema_AuthTokenUpdate"></a>
<a id="tocSauthtokenupdate"></a>
<a id="tocsauthtokenupdate"></a>

```json
{
  "name": "string",
  "expire_date": "1970-01-01T00:00:00Z",
  "limit_calls": 0,
  "active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|expire_date|string(date-time)|false|none|none|
|limit_calls|integer|false|none|none|
|active|boolean|false|none|none|

<h2 id="tocS_AuthTokenCreateResponse">AuthTokenCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokencreateresponse"></a>
<a id="schema_AuthTokenCreateResponse"></a>
<a id="tocSauthtokencreateresponse"></a>
<a id="tocsauthtokencreateresponse"></a>

```json
{
  "data": {
    "token": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AuthTokenResponse">AuthTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenresponse"></a>
<a id="schema_AuthTokenResponse"></a>
<a id="tocSauthtokenresponse"></a>
<a id="tocsauthtokenresponse"></a>

```json
{
  "data": {
    "guid": "string",
    "creator_guid": "string",
    "name": "string",
    "user_object": {
      "username": "string",
      "firstname": "string",
      "lastname": "string",
      "email": "string",
      "user_group": "string",
      "id": 0,
      "partid": 0
    },
    "ip_address": "string",
    "create_date": "string",
    "lastusage_date": "string",
    "expire_date": "string",
    "usage_calls": 0,
    "limit_calls": 0,
    "active": true
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AuthTokenItem](#schemaauthtokenitem)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AuthTokenListResponse">AuthTokenListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenlistresponse"></a>
<a id="schema_AuthTokenListResponse"></a>
<a id="tocSauthtokenlistresponse"></a>
<a id="tocsauthtokenlistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "guid": "string",
        "creator_guid": "string",
        "name": "string",
        "user_object": {
          "username": "string",
          "firstname": "string",
          "lastname": "string",
          "email": "string",
          "user_group": "string",
          "id": 0,
          "partid": 0
        },
        "ip_address": "string",
        "create_date": "string",
        "lastusage_date": "string",
        "expire_date": "string",
        "usage_calls": 0,
        "limit_calls": 0,
        "active": true
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AgentSub">AgentSub</h2>
<!-- backwards compatibility -->
<a id="schemaagentsub"></a>
<a id="schema_AgentSub"></a>
<a id="tocSagentsub"></a>
<a id="tocsagentsub"></a>

```json
{
  "uuid": "string",
  "gid": 0,
  "host": "string",
  "port": 0,
  "protocol": "string",
  "path": "string",
  "node": "string",
  "type": "string",
  "ttl": 0,
  "create_date": "string",
  "expire_date": "string",
  "active": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|
|gid|integer|false|none|none|
|host|string|false|none|none|
|port|integer|false|none|none|
|protocol|string|false|none|none|
|path|string|false|none|none|
|node|string|false|none|none|
|type|string|false|none|none|
|ttl|integer|false|none|none|
|create_date|string|false|none|none|
|expire_date|string|false|none|none|
|active|integer|false|none|none|

<h2 id="tocS_AgentSubUpsert">AgentSubUpsert</h2>
<!-- backwards compatibility -->
<a id="schemaagentsubupsert"></a>
<a id="schema_AgentSubUpsert"></a>
<a id="tocSagentsubupsert"></a>
<a id="tocsagentsubupsert"></a>

```json
{
  "uuid": "string",
  "gid": 0,
  "host": "string",
  "port": 0,
  "protocol": "string",
  "path": "string",
  "node": "string",
  "type": "string",
  "ttl": 0,
  "create_date": "string",
  "expire_date": "string",
  "active": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string|false|none|none|
|gid|integer|false|none|none|
|host|string|false|none|none|
|port|integer|false|none|none|
|protocol|string|false|none|none|
|path|string|false|none|none|
|node|string|false|none|none|
|type|string|false|none|none|
|ttl|integer|false|none|none|
|create_date|string|false|none|none|
|expire_date|string|false|none|none|
|active|integer|false|none|none|

<h2 id="tocS_AgentSubResponse">AgentSubResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentsubresponse"></a>
<a id="schema_AgentSubResponse"></a>
<a id="tocSagentsubresponse"></a>
<a id="tocsagentsubresponse"></a>

```json
{
  "data": {
    "uuid": "string",
    "gid": 0,
    "host": "string",
    "port": 0,
    "protocol": "string",
    "path": "string",
    "node": "string",
    "type": "string",
    "ttl": 0,
    "create_date": "string",
    "expire_date": "string",
    "active": 0
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AgentSub](#schemaagentsub)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AgentSubListResponse">AgentSubListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentsublistresponse"></a>
<a id="schema_AgentSubListResponse"></a>
<a id="tocSagentsublistresponse"></a>
<a id="tocsagentsublistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "uuid": "string",
        "gid": 0,
        "host": "string",
        "port": 0,
        "protocol": "string",
        "path": "string",
        "node": "string",
        "type": "string",
        "ttl": 0,
        "create_date": "string",
        "expire_date": "string",
        "active": 0
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AgentTypeListResponse">AgentTypeListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagenttypelistresponse"></a>
<a id="schema_AgentTypeListResponse"></a>
<a id="tocSagenttypelistresponse"></a>
<a id="tocsagenttypelistresponse"></a>

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_AgentSearchRequest">AgentSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaagentsearchrequest"></a>
<a id="schema_AgentSearchRequest"></a>
<a id="tocSagentsearchrequest"></a>
<a id="tocsagentsearchrequest"></a>

```json
{
  "guid": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "arhive": true,
  "db_archive": "string",
  "db_name": "string",
  "host": "string",
  "name": "string",
  "node": "string",
  "online": true,
  "primary": true,
  "table_prefix": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arhive|boolean|false|none|none|
|db_archive|string|false|none|none|
|db_name|string|false|none|none|
|host|string|false|none|none|
|name|string|false|none|none|
|node|string|false|none|none|
|online|boolean|false|none|none|
|primary|boolean|false|none|none|
|table_prefix|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_NodeListResponse">NodeListResponse</h2>
<!-- backwards compatibility -->
<a id="schemanodelistresponse"></a>
<a id="schema_NodeListResponse"></a>
<a id="tocSnodelistresponse"></a>
<a id="tocsnodelistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "arhive": true,
        "db_archive": "string",
        "db_name": "string",
        "host": "string",
        "name": "string",
        "node": "string",
        "online": true,
        "primary": true,
        "table_prefix": "string",
        "value": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_ModulesStatusResponse">ModulesStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemamodulesstatusresponse"></a>
<a id="schema_ModulesStatusResponse"></a>
<a id="tocSmodulesstatusresponse"></a>
<a id="tocsmodulesstatusresponse"></a>

```json
{
  "data": {
    "loki": {
      "enable": true,
      "template": "string",
      "external_url": "string"
    }
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_StatisticQuery">StatisticQuery</h2>
<!-- backwards compatibility -->
<a id="schemastatisticquery"></a>
<a id="schema_StatisticQuery"></a>
<a id="tocSstatisticquery"></a>
<a id="tocsstatisticquery"></a>

```json
{
  "param": {
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "main": "string",
        "database": "string",
        "retention": "string",
        "rawquery": "string",
        "type": [
          "string"
        ],
        "tag": [
          "string"
        ]
      }
    ],
    "bfrom": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|false|none|none|
|timestamp|object|false|none|none|

<h2 id="tocS_StatisticResponse">StatisticResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatisticresponse"></a>
<a id="schema_StatisticResponse"></a>
<a id="tocSstatisticresponse"></a>
<a id="tocsstatisticresponse"></a>

```json
{
  "data": {},
  "total": 0,
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|total|integer|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_StatisticDbResponse">StatisticDbResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatisticdbresponse"></a>
<a id="schema_StatisticDbResponse"></a>
<a id="tocSstatisticdbresponse"></a>
<a id="tocsstatisticdbresponse"></a>

```json
{
  "data": {},
  "status": "string",
  "total": 0,
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|status|string|false|none|none|
|total|integer|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_StatisticMeasurementsResponse">StatisticMeasurementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatisticmeasurementsresponse"></a>
<a id="schema_StatisticMeasurementsResponse"></a>
<a id="tocSstatisticmeasurementsresponse"></a>
<a id="tocsstatisticmeasurementsresponse"></a>

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_StatisticMetricsResponse">StatisticMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatisticmetricsresponse"></a>
<a id="schema_StatisticMetricsResponse"></a>
<a id="tocSstatisticmetricsresponse"></a>
<a id="tocsstatisticmetricsresponse"></a>

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_StatisticTagsResponse">StatisticTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatistictagsresponse"></a>
<a id="schema_StatisticTagsResponse"></a>
<a id="tocSstatistictagsresponse"></a>
<a id="tocsstatistictagsresponse"></a>

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_LokiLabelsResponse">LokiLabelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalokilabelsresponse"></a>
<a id="schema_LokiLabelsResponse"></a>
<a id="tocSlokilabelsresponse"></a>
<a id="tocslokilabelsresponse"></a>

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_LokiValuesResponse">LokiValuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalokivaluesresponse"></a>
<a id="schema_LokiValuesResponse"></a>
<a id="tocSlokivaluesresponse"></a>
<a id="tocslokivaluesresponse"></a>

```json
{
  "data": {
    "items": [
      "string"
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_LokiQuery">LokiQuery</h2>
<!-- backwards compatibility -->
<a id="schemalokiquery"></a>
<a id="schema_LokiQuery"></a>
<a id="tocSlokiquery"></a>
<a id="tocslokiquery"></a>

```json
{
  "param": {
    "limit": 0,
    "search": "string",
    "server": "string",
    "timezone": {}
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|false|none|none|
|timestamp|object|false|none|none|

<h2 id="tocS_LokiQueryResponse">LokiQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalokiqueryresponse"></a>
<a id="schema_LokiQueryResponse"></a>
<a id="tocSlokiqueryresponse"></a>
<a id="tocslokiqueryresponse"></a>

```json
{
  "data": [
    {
      "custom_1": "string",
      "custom_2": "string",
      "id": 0,
      "micro_ts": 0
    }
  ],
  "total": 0,
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|total|integer|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_GrafanaStatusResponse">GrafanaStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrafanastatusresponse"></a>
<a id="schema_GrafanaStatusResponse"></a>
<a id="tocSgrafanastatusresponse"></a>
<a id="tocsgrafanastatusresponse"></a>

```json
{
  "data": {},
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_GrafanaFoldersResponse">GrafanaFoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrafanafoldersresponse"></a>
<a id="schema_GrafanaFoldersResponse"></a>
<a id="tocSgrafanafoldersresponse"></a>
<a id="tocsgrafanafoldersresponse"></a>

```json
{
  "data": {
    "items": [
      {}
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_GrafanaDashboardResponse">GrafanaDashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemagrafanadashboardresponse"></a>
<a id="schema_GrafanaDashboardResponse"></a>
<a id="tocSgrafanadashboardresponse"></a>
<a id="tocsgrafanadashboardresponse"></a>

```json
{
  "data": {},
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_GlobalSettingUpsert">GlobalSettingUpsert</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingupsert"></a>
<a id="schema_GlobalSettingUpsert"></a>
<a id="tocSglobalsettingupsert"></a>
<a id="tocsglobalsettingupsert"></a>

```json
{
  "guid": "string",
  "partid": 0,
  "category": "string",
  "param": "string",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|partid|integer|false|none|none|
|category|string|true|none|none|
|param|string|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_GlobalSetting">GlobalSetting</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsetting"></a>
<a id="schema_GlobalSetting"></a>
<a id="tocSglobalsetting"></a>
<a id="tocsglobalsetting"></a>

```json
{
  "id": 0,
  "guid": "string",
  "partid": 0,
  "category": "string",
  "param": "string",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|guid|string|false|none|none|
|partid|integer|false|none|none|
|category|string|false|none|none|
|param|string|false|none|none|
|data|object|false|none|none|

<h2 id="tocS_GlobalSettingListResponse">GlobalSettingListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettinglistresponse"></a>
<a id="schema_GlobalSettingListResponse"></a>
<a id="tocSglobalsettinglistresponse"></a>
<a id="tocsglobalsettinglistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "partid": 0,
        "category": "string",
        "param": "string",
        "data": {}
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_GlobalSettingResponse">GlobalSettingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingresponse"></a>
<a id="schema_GlobalSettingResponse"></a>
<a id="tocSglobalsettingresponse"></a>
<a id="tocsglobalsettingresponse"></a>

```json
{
  "data": {
    "id": 0,
    "guid": "string",
    "partid": 0,
    "category": "string",
    "param": "string",
    "data": {}
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GlobalSetting](#schemaglobalsetting)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_HepScriptUpsert">HepScriptUpsert</h2>
<!-- backwards compatibility -->
<a id="schemahepscriptupsert"></a>
<a id="schema_HepScriptUpsert"></a>
<a id="tocShepscriptupsert"></a>
<a id="tocshepscriptupsert"></a>

```json
{
  "guid": "string",
  "profile": "string",
  "hep_alias": "string",
  "type": "string",
  "hepid": 0,
  "status": true,
  "script": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|none|
|profile|string|false|none|none|
|hep_alias|string|false|none|none|
|type|string|false|none|none|
|hepid|integer|false|none|none|
|status|boolean|false|none|none|
|script|string|false|none|none|

<h2 id="tocS_HepScript">HepScript</h2>
<!-- backwards compatibility -->
<a id="schemahepscript"></a>
<a id="schema_HepScript"></a>
<a id="tocShepscript"></a>
<a id="tocshepscript"></a>

```json
{
  "id": 0,
  "guid": "string",
  "profile": "string",
  "hep_alias": "string",
  "type": "string",
  "hepid": 0,
  "status": true,
  "script": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|guid|string|false|none|none|
|profile|string|false|none|none|
|hep_alias|string|false|none|none|
|type|string|false|none|none|
|hepid|integer|false|none|none|
|status|boolean|false|none|none|
|script|string|false|none|none|

<h2 id="tocS_HepScriptListResponse">HepScriptListResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepscriptlistresponse"></a>
<a id="schema_HepScriptListResponse"></a>
<a id="tocShepscriptlistresponse"></a>
<a id="tocshepscriptlistresponse"></a>

```json
{
  "data": {
    "items": [
      {
        "id": 0,
        "guid": "string",
        "profile": "string",
        "hep_alias": "string",
        "type": "string",
        "hepid": 0,
        "status": true,
        "script": "string"
      }
    ]
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|

<h2 id="tocS_HepScriptResponse">HepScriptResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepscriptresponse"></a>
<a id="schema_HepScriptResponse"></a>
<a id="tocShepscriptresponse"></a>
<a id="tocshepscriptresponse"></a>

```json
{
  "data": {
    "id": 0,
    "guid": "string",
    "profile": "string",
    "hep_alias": "string",
    "type": "string",
    "hepid": 0,
    "status": true,
    "script": "string"
  },
  "meta": {
    "request_id": "string",
    "trace_id": "string",
    "pagination": {
      "limit": 0,
      "next_cursor": "string",
      "prev_cursor": "string",
      "total": 0,
      "has_more": true
    },
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[HepScript](#schemahepscript)|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
