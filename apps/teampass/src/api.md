<h1 id="teampass-rest-api">TeamPass REST API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Collaborative password manager REST API. Authenticate via POST /authorize (login + password + apikey) or POST /authorizeToken (OAuth2 Personal Access Token), then pass the returned JWT as 'Authorization: Bearer <jwt>'. Errors use the RFC 9457 application/problem+json envelope; the legacy 'error' member is kept for backward compatibility.

Base URLs:

* <a href="https://raw.githubusercontent.com/api/v1">https://raw.githubusercontent.com/api/v1</a> - Versioned base path (preferred)

* <a href="https://raw.githubusercontent.com/api">https://raw.githubusercontent.com/api</a> - Legacy unversioned base path (treated as v1)

License: GPL-3.0-only

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="teampass-rest-api-default">Default</h1>

## Get a JWT from login + password + API key

<a id="opIdauthorize"></a>

> Code samples

```bash
curl http://localhost/api/v1/authorize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "login": "string",
    "password": "string",
    "apikey": "string"
  }'
```

`POST /authorize`

> Body parameter

```json
{
  "login": "string",
  "password": "string",
  "apikey": "string"
}
```

<h3 id="get-a-jwt-from-login-password-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» login|body|string|true|none|
|» password|body|string|true|none|
|» apikey|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "teampass_version": "3.2.1.2",
  "teampass_version_major": "3.2.1",
  "teampass_version_minor": "2"
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-a-jwt-from-login-password-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authentication succeeded|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Request rejected because api_require_https is enabled and the request was sent over plain HTTP|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

<h3 id="get-a-jwt-from-login-password-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|
|teampass_version|string|true|none|Complete TeamPass server release version returned in the response body, outside the JWT.|
|teampass_version_major|string|true|none|Base TeamPass server version (major.minor.patch) returned in the response body.|
|teampass_version_minor|string|true|none|Final TeamPass release revision component returned in the response body.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a JWT from a Personal Access Token (OAuth2/SSO users)

<a id="opIdauthorizeToken"></a>

> Code samples

```bash
curl http://localhost/api/v1/authorizeToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "login": "string",
    "token": "string"
  }'
```

`POST /authorizeToken`

> Body parameter

```json
{
  "login": "string",
  "token": "string"
}
```

<h3 id="get-a-jwt-from-a-personal-access-token-oauth2sso-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» login|body|string|true|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "teampass_version": "3.2.1.2",
  "teampass_version_major": "3.2.1",
  "teampass_version_minor": "2"
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-a-jwt-from-a-personal-access-token-oauth2sso-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authentication succeeded|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Request rejected because api_require_https is enabled and the request was sent over plain HTTP|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

<h3 id="get-a-jwt-from-a-personal-access-token-oauth2sso-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|
|teampass_version|string|true|none|Complete TeamPass server release version returned in the response body, outside the JWT.|
|teampass_version_major|string|true|none|Base TeamPass server version (major.minor.patch) returned in the response body.|
|teampass_version_minor|string|true|none|Final TeamPass release revision component returned in the response body.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke the current API session

<a id="opIdauthLogout"></a>

> Code samples

```bash
curl http://localhost/api/v1/auth/logout \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /auth/logout`

Flags the api_sessions row matching the token's jti as revoked — the JWT is then rejected on every endpoint until it expires. Legacy tokens without a session row invalidate the user's single legacy API session instead.

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="revoke-the-current-api-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session revoked|Inline|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="revoke-the-current-api-session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get item(s) by id, label or description

<a id="opIditemGet"></a>

> Code samples

```bash
curl http://localhost/api/v1/item/get \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item/get`

Exactly one of 'id', 'label' or 'description' is required. 'label' and 'description' lookups are searches: they accept 'like', 'limit' and 'offset' and return X-Total-Count. renewal_period contains the stored individual renewal setting, not the effective folder/item deadline.

<h3 id="get-items-by-id-label-or-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|false|none|
|label|query|string|false|none|
|description|query|string|false|none|
|like|query|integer|false|1 = LIKE %value% search ('%' and '_' are escaped)|
|limit|query|integer|false|Maximum number of results (capped at 500)|
|offset|query|integer|false|Number of results to skip (pagination)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|like|0|
|like|1|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "revision": 0,
    "revision_changed_at": 0,
    "label": "string",
    "description": "string",
    "pwd": "string",
    "url": "string",
    "login": "string",
    "email": "string",
    "viewed_no": 0,
    "fa_icon": "string",
    "inactif": 0,
    "perso": 0,
    "id_tree": 0,
    "folder_label": "string",
    "path": "string",
    "totp": "string",
    "totp_algorithm": "sha1",
    "totp_digits": 6,
    "totp_period": 1,
    "favicon_url": "string",
    "tags": "string",
    "anyone_can_modify": 0,
    "fields": [
      {
        "id": 0,
        "title": "string",
        "type": "string",
        "masked": 0,
        "value": "string"
      }
    ],
    "renewal_period": 0
  }
]
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-items-by-id-label-or-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Matching items (empty array when none)|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="get-items-by-id-label-or-description-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Item](#schemaitem)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Total-Count|integer||Total number of matching entries before pagination|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get items contained in a list of folders

<a id="opIditemInFolders"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/item/inFolders?folders=1%2C2%2C3' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item/inFolders`

<h3 id="get-items-contained-in-a-list-of-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folders|query|string|true|Comma-separated or JSON array of folder ids|
|limit|query|integer|false|Maximum number of results (capped at 500)|
|offset|query|integer|false|Number of results to skip (pagination)|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "revision": 0,
    "revision_changed_at": 0,
    "label": "string",
    "description": "string",
    "pwd": "string",
    "url": "string",
    "login": "string",
    "email": "string",
    "viewed_no": 0,
    "fa_icon": "string",
    "inactif": 0,
    "perso": 0,
    "id_tree": 0,
    "folder_label": "string",
    "path": "string",
    "totp": "string",
    "totp_algorithm": "sha1",
    "totp_digits": 6,
    "totp_period": 1,
    "favicon_url": "string",
    "tags": "string",
    "anyone_can_modify": 0,
    "fields": [
      {
        "id": 0,
        "title": "string",
        "type": "string",
        "masked": 0,
        "value": "string"
      }
    ],
    "renewal_period": 0
  }
]
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-items-contained-in-a-list-of-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items in the requested folders (empty array when none)|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="get-items-contained-in-a-list-of-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Item](#schemaitem)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Total-Count|integer||Total number of matching entries before pagination|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Find items whose URL matches

<a id="opIditemFindByUrl"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/item/findByUrl?url=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item/findByUrl`

<h3 id="find-items-whose-url-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "revision": 0,
    "revision_changed_at": 0,
    "label": "string",
    "login": "string",
    "url": "string",
    "folder_id": 0,
    "has_otp": 0,
    "favicon_url": "string"
  }
]
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="find-items-whose-url-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Matching items (empty array when none)|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="find-items-whose-url-matches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ItemSummary](#schemaitemsummary)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the current TOTP code of an item

<a id="opIditemGetOtp"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/item/getOtp?id=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item/getOtp`

<h3 id="get-the-current-totp-code-of-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "otp_code": "string",
  "expires_in": 0,
  "item_id": 0,
  "algorithm": "sha1",
  "digits": 6,
  "period": 1
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-the-current-totp-code-of-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current TOTP code|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="get-the-current-totp-code-of-an-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otp_code|string|false|none|none|
|expires_in|integer|false|none|none|
|item_id|integer|false|none|none|
|algorithm|string|false|none|none|
|digits|integer|false|none|none|
|period|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|sha1|
|algorithm|sha256|
|algorithm|sha512|
|digits|6|
|digits|8|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Changes to apply to a client cache since a revision

<a id="opIditemChanges"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/item/changes?since=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item/changes`

Delta feed for offline clients. Returns the items that changed after the given revision, and the ones the client must drop. Cursor based: store the returned cursor and pass it as `since` on the next call, repeating while `has_more` is true. A `full_sync_required` of true means the cursor cannot be served — read the vault through item/inFolders and adopt the returned cursor. Start there on a first synchronization, with `since=0`.

<h3 id="changes-to-apply-to-a-client-cache-since-a-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|since|query|integer|true|Cursor returned by the previous call, exclusive. 0 on a first synchronization.|
|limit|query|integer|false|Maximum journal entries scanned in one call.|

> Example responses

> 200 Response

```json
{
  "cursor": 0,
  "has_more": true,
  "full_sync_required": true,
  "changed": [
    {
      "id": 0,
      "revision": 0,
      "revision_changed_at": 0,
      "label": "string",
      "description": "string",
      "pwd": "string",
      "url": "string",
      "login": "string",
      "email": "string",
      "viewed_no": 0,
      "fa_icon": "string",
      "inactif": 0,
      "perso": 0,
      "id_tree": 0,
      "folder_label": "string",
      "path": "string",
      "totp": "string",
      "totp_algorithm": "sha1",
      "totp_digits": 6,
      "totp_period": 1,
      "favicon_url": "string",
      "tags": "string",
      "anyone_can_modify": 0,
      "fields": [
        {
          "id": 0,
          "title": "string",
          "type": "string",
          "masked": 0,
          "value": "string"
        }
      ],
      "renewal_period": 0
    }
  ],
  "removed": [
    {
      "id": 0,
      "revision": 0,
      "revision_changed_at": 0,
      "reason": "deleted"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="changes-to-apply-to-a-client-cache-since-a-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Changes since the given revision|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="changes-to-apply-to-a-client-cache-since-a-revision-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|integer|false|none|Cursor to store and send as `since` on the next call.|
|has_more|boolean|false|none|More changes are waiting: call again with the returned cursor.|
|full_sync_required|boolean|false|none|The cursor cannot be served. Rebuild the cache and adopt the returned cursor.|
|changed|[[Item](#schemaitem)]|false|none|none|
|removed|[object]|false|none|none|
|» id|integer|false|none|none|
|» revision|integer|false|none|none|
|» revision_changed_at|integer|false|none|Unix UTC timestamp in seconds of the winning journal revision.|
|» reason|string|false|none|deleted: soft deleted. purged: permanently removed. out_of_scope: still exists but no longer readable by the caller.|

#### Enumerated Values

|Property|Value|
|---|---|
|» reason|deleted|
|» reason|purged|
|» reason|out_of_scope|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get the distinct item tags the caller can read

<a id="opIditemAllTags"></a>

> Code samples

```bash
curl http://localhost/api/v1/item/allTags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item/allTags`

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-the-distinct-item-tags-the-caller-can-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tag list|Inline|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="get-the-distinct-item-tags-the-caller-can-read-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new item

<a id="opIditemCreate"></a>

> Code samples

```bash
curl http://localhost/api/v1/item/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "string",
    "folder_id": 0,
    "password": "string",
    "description": "string",
    "login": "string",
    "email": "string",
    "url": "string",
    "tags": "string",
    "anyone_can_modify": 0,
    "icon": "string",
    "totp": "string",
    "totp_algorithm": "sha1",
    "totp_digits": 6,
    "totp_period": 30,
    "fields": [
      {
        "id": 0,
        "value": "string"
      }
    ],
    "renewal_period": 0
  }'
```

`POST /item/create`

All required fields must be present, even if empty. renewal_period is optional and defaults to 0. Idempotency-Key is optional; within the configured offline synchronization window (90 days by default, 0 for no limit) the same user, key and canonical creation intent return the original 201 response without repeating side effects.

> Body parameter

```json
{
  "label": "string",
  "folder_id": 0,
  "password": "string",
  "description": "string",
  "login": "string",
  "email": "string",
  "url": "string",
  "tags": "string",
  "anyone_can_modify": 0,
  "icon": "string",
  "totp": "string",
  "totp_algorithm": "sha1",
  "totp_digits": 6,
  "totp_period": 30,
  "fields": [
    {
      "id": 0,
      "value": "string"
    }
  ],
  "renewal_period": 0
}
```

<h3 id="create-a-new-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Opaque 1-128 character visible-ASCII key, scoped to the authenticated user and API operation. Raw keys are never persisted.|
|body|body|[ItemCreateBody](#schemaitemcreatebody)|true|none|
|» label|body|string|true|none|
|» folder_id|body|integer|true|none|
|» password|body|string|true|none|
|» description|body|string|false|none|
|» login|body|string|true|none|
|» email|body|string|true|none|
|» url|body|string|true|none|
|» tags|body|string|true|none|
|» anyone_can_modify|body|integer|true|none|
|» icon|body|string|false|none|
|» totp|body|string|false|Base32 secret or otpauth://totp provisioning URI|
|» totp_algorithm|body|string|false|none|
|» totp_digits|body|integer|false|none|
|» totp_period|body|integer|false|none|
|» fields|body|[object]|false|none|
|» » id|body|integer|false|none|
|» » value|body|string|false|none|
|» renewal_period|body|integer|false|Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Ordinary renewal is inactive for all LAPR-linked items while the LAPR module is enabled.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» totp_algorithm|sha1|
|» totp_algorithm|sha256|
|» totp_algorithm|sha512|
|» totp_digits|6|
|» totp_digits|8|

> Example responses

> 201 Response

```json
{
  "error": true,
  "message": "string",
  "newId": 0,
  "revision": 0,
  "revision_changed_at": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="create-a-new-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Item created|[CreatedResult](#schemacreatedresult)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Path-absolute reference of the created resource (item/get?id=N)|
|201|Idempotency-Replayed|string||Present with value true when the stored response was replayed without executing the mutation.|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing item

<a id="opIditemUpdate"></a>

> Code samples

```bash
curl http://localhost/api/v1/item/update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "revision": 0,
    "label": "string",
    "password": "string",
    "description": "string",
    "login": "string",
    "email": "string",
    "url": "string",
    "tags": "string",
    "anyone_can_modify": 0,
    "icon": "string",
    "folder_id": 0,
    "totp": "string",
    "totp_algorithm": "sha1",
    "totp_digits": 6,
    "totp_period": 1,
    "fields": [
      {
        "id": 0,
        "value": "string"
      }
    ],
    "renewal_period": 0
  }'
```

`PUT /item/update`

Requires 'id' plus at least one updatable field (label, password, description, login, email, url, tags, anyone_can_modify, icon, folder_id, totp, fields, renewal_period). Moving an item out of a personal folder into a shared one redistributes its encryption keys synchronously, so it must be requested on its own: combining it with any other updatable field returns 422. It returns 422 as well when a source encryption key cannot be recovered (the item stays personal), and 409 when the item was modified concurrently. Moving a shared item into the caller's personal folder deletes the other users' encryption keys in the same step; it returns 422 when the caller does not hold every key of the item yet. A move requires the delete right on the item's current folder and the edit right on the target folder, like the web interface: it returns 403 on a current folder granted as ND or NDNE, or a target folder granted as NE, NDNE or R. Omitting renewal_period preserves it; 0 disables the individual policy without resetting password age. A change to renewal_period returns 409 for an item linked to LAPR while the module is enabled (managed account or endpoint connection credential); an unchanged value is accepted.

> Body parameter

```json
{
  "id": 0,
  "revision": 0,
  "label": "string",
  "password": "string",
  "description": "string",
  "login": "string",
  "email": "string",
  "url": "string",
  "tags": "string",
  "anyone_can_modify": 0,
  "icon": "string",
  "folder_id": 0,
  "totp": "string",
  "totp_algorithm": "sha1",
  "totp_digits": 6,
  "totp_period": 1,
  "fields": [
    {
      "id": 0,
      "value": "string"
    }
  ],
  "renewal_period": 0
}
```

<h3 id="update-an-existing-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ItemUpdateBody](#schemaitemupdatebody)|true|none|
|» id|body|integer|true|none|
|» revision|body|integer|false|Optional precondition, not an updatable field: the revision the edit was based on. The update is refused with 409 when the server has moved on since. Omitting it keeps the previous last-writer-wins behaviour.|
|» label|body|string|false|none|
|» password|body|string|false|none|
|» description|body|string|false|none|
|» login|body|string|false|none|
|» email|body|string|false|none|
|» url|body|string|false|none|
|» tags|body|string|false|none|
|» anyone_can_modify|body|integer|false|none|
|» icon|body|string|false|none|
|» folder_id|body|integer|false|none|
|» totp|body|string|false|Base32 secret, otpauth://totp provisioning URI, or an empty string to remove TOTP|
|» totp_algorithm|body|string|false|none|
|» totp_digits|body|integer|false|none|
|» totp_period|body|integer|false|none|
|» fields|body|[object]|false|none|
|» » id|body|integer|false|none|
|» » value|body|string|false|none|
|» renewal_period|body|integer|false|Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Omission preserves the stored value. Changing the period does not reset password age. While LAPR is enabled, changing this value for a managed account or an endpoint connection credential returns HTTP 409; omitting it or resending the current value is allowed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» totp_algorithm|sha1|
|» totp_algorithm|sha256|
|» totp_algorithm|sha512|
|» totp_digits|6|
|» totp_digits|8|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "item_id": 0,
  "revision": 0,
  "revision_changed_at": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="update-an-existing-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item updated|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="update-an-existing-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|item_id|integer|false|none|none|
|revision|integer|false|none|Revision of the item after the update|
|revision_changed_at|integer \| null|false|none|Unix UTC timestamp in seconds paired with the returned revision; null when the date is unknown.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Soft-delete an item

<a id="opIditemDelete"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/item/delete?id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /item/delete`

The optional revision is an optimistic-concurrency precondition. Idempotency-Key makes a successful deletion replayable for the configured offline synchronization window (90 days by default, 0 for no limit) without allocating another revision or repeating side effects.

<h3 id="soft-delete-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Opaque 1-128 character visible-ASCII key, scoped to the authenticated user and API operation. Raw keys are never persisted.|
|id|query|integer|true|none|
|revision|query|integer|false|Current item revision expected by the caller. A mismatch returns 409 before any mutation; an empty value is treated as omitted.|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "item_id": 0,
  "revision": 0,
  "revision_changed_at": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="soft-delete-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item deleted|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="soft-delete-an-item-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|item_id|integer|false|none|none|
|revision|integer|false|none|Deletion revision exposed by item/changes|
|revision_changed_at|integer \| null|false|none|Unix UTC timestamp paired with the deletion revision|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Replayed|string||Present with value true when the stored response was replayed without executing the mutation.|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List the folder tree accessible to the user

<a id="opIdfolderListFolders"></a>

> Code samples

```bash
curl http://localhost/api/v1/folder/listFolders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /folder/listFolders`

Returns a hierarchical tree. Pagination ('offset'/'limit') applies to the root-level entries; X-Total-Count is the total number of root entries.

<h3 id="list-the-folder-tree-accessible-to-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results (capped at 500)|
|offset|query|integer|false|Number of results to skip (pagination)|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "title": "string",
    "isVisible": true,
    "complexity": 0,
    "childrens": [
      {}
    ]
  }
]
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="list-the-folder-tree-accessible-to-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folder tree (empty array when the user has no accessible folder)|Inline|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="list-the-folder-tree-accessible-to-the-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FolderNode](#schemafoldernode)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Total-Count|integer||Total number of matching entries before pagination|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List accessible folders with item and folder-management capabilities

<a id="opIdfolderWritableFolders"></a>

> Code samples

```bash
curl http://localhost/api/v1/folder/writableFolders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /folder/writableFolders`

Historical name — returns ALL accessible folders. access_type, is_readonly, can_create, can_edit and can_delete describe operations on items contained in the folder. The can_*_folder fields describe folder-management UI capabilities and never replace the authoritative checks performed by POST /folder/create, PUT /folder/update and DELETE /folder/delete. Rows are ordered by 'position' (MPTT pre-order), so parent_id + level + position rebuild the exact folder hierarchy, sibling order included.

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "label": "string",
    "level": 0,
    "parent_id": 0,
    "first_position": 0,
    "position": 0,
    "complexity": 0,
    "is_readonly": 0,
    "access_type": "R",
    "can_create": 0,
    "can_edit": 0,
    "can_delete": 0,
    "is_personal": 0,
    "is_personal_root": 0,
    "deletion_protected": 0,
    "contains_deletion_protected": 0,
    "can_create_subfolder": 0,
    "can_rename_folder": 0,
    "can_move_folder": 0,
    "can_delete_folder": 0
  }
]
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="list-accessible-folders-with-item-and-folder-management-capabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flat folder list|Inline|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="list-accessible-folders-with-item-and-folder-management-capabilities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WritableFolder](#schemawritablefolder)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new folder

<a id="opIdfolderCreate"></a>

> Code samples

```bash
curl http://localhost/api/v1/folder/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "parent_id": 0,
    "complexity": 0,
    "private": true,
    "duration": 0,
    "create_auth_without": 0,
    "edit_auth_without": 0,
    "icon": "string",
    "icon_selected": "string",
    "access_rights": "W"
  }'
```

`POST /folder/create`

> Body parameter

```json
{
  "title": "string",
  "parent_id": 0,
  "complexity": 0,
  "private": true,
  "duration": 0,
  "create_auth_without": 0,
  "edit_auth_without": 0,
  "icon": "string",
  "icon_selected": "string",
  "access_rights": "W"
}
```

<h3 id="create-a-new-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FolderCreateBody](#schemafoldercreatebody)|true|none|
|» title|body|string|true|none|
|» parent_id|body|integer|false|Parent folder id (0 = root, requires user_can_create_root_folder). Optional when 'private' is true — defaults to the caller's personal root.|
|» complexity|body|integer|false|Password complexity level. Required for a shared target; optional (default 0) when the resolved target is personal (e.g. 'private' is true).|
|» private|body|boolean|false|Optional. When true, creates a personal (private) folder under the caller's personal root without needing its id (requires personal folders to be enabled for the user). The personal_folder flag is never accepted directly from the client — it is derived server-side from the resolved parent.|
|» duration|body|integer|false|none|
|» create_auth_without|body|integer|false|Allow item creation below the folder's minimum password strength (0/1). Omitted: inherit the parent's value, or 0 at root. Explicit 0 disables the exception. Does not relax the subfolder complexity floor.|
|» edit_auth_without|body|integer|false|Allow item editing below the folder's minimum password strength (0/1). Omitted: inherit the parent's value, or 0 at root. Explicit 0 disables the exception. Inheritance is a one-time copy, independent of role permission inheritance.|
|» icon|body|string|false|none|
|» icon_selected|body|string|false|none|
|» access_rights|body|string|false|Access level granted to the caller's roles on the new folder. Defaults to W when omitted.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» access_rights|R|
|» access_rights|W|
|» access_rights|NE|
|» access_rights|ND|
|» access_rights|NDNE|

> Example responses

> 201 Response

```json
{
  "error": true,
  "message": "string",
  "newId": 0,
  "revision": 0,
  "revision_changed_at": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="create-a-new-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Folder created (no Location header: the API has no folder get-by-id endpoint yet; the body carries newId)|[CreatedResult](#schemacreatedresult)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an existing folder (partial update)

<a id="opIdfolderUpdate"></a>

> Code samples

```bash
curl http://localhost/api/v1/folder/update \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "title": "string",
    "parent_id": 0,
    "complexity": 0,
    "duration": 0,
    "create_auth_without": 0,
    "edit_auth_without": 0,
    "deletion_protected": 0,
    "icon": "string",
    "icon_selected": "string"
  }'
```

`PUT /folder/update`

PUT only. Every field except 'id' is optional; unspecified fields keep their current value. 'access_rights' is not updatable here (roles-management concern). Only administrators may change deletion_protected. Personal root folders cannot be renamed or moved, and cross-domain (personal ↔ shared) moves are rejected.

> Body parameter

```json
{
  "id": 0,
  "title": "string",
  "parent_id": 0,
  "complexity": 0,
  "duration": 0,
  "create_auth_without": 0,
  "edit_auth_without": 0,
  "deletion_protected": 0,
  "icon": "string",
  "icon_selected": "string"
}
```

<h3 id="update-an-existing-folder-partial-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FolderUpdateBody](#schemafolderupdatebody)|true|none|
|» id|body|integer|true|Folder id to update (required).|
|» title|body|string|false|none|
|» parent_id|body|integer|false|New parent id (move). Cross-domain personal ↔ shared moves are rejected (422).|
|» complexity|body|integer|false|Password complexity level. Must be one of the TeamPass levels; any other value is rejected with 422.|
|» duration|body|integer|false|none|
|» create_auth_without|body|integer|false|Allow item creation below the folder's minimum password strength (0/1). Omitted: preserve the current value, including when moving the folder.|
|» edit_auth_without|body|integer|false|Allow item editing below the folder's minimum password strength (0/1). Omitted: preserve the current value, including when moving the folder.|
|» deletion_protected|body|integer|false|Administrative protection against accidental deletion (0/1). Only an administrator may change it. A protected folder also prevents deletion of an ancestor subtree containing it.|
|» icon|body|string|false|none|
|» icon_selected|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» complexity|0|
|» complexity|20|
|» complexity|38|
|» complexity|48|
|» complexity|60|
|» deletion_protected|0|
|» deletion_protected|1|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "id": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="update-an-existing-folder-partial-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folder updated|[FolderUpdateResult](#schemafolderupdateresult)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Soft-delete a folder and its descendants

<a id="opIdfolderDelete"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/folder/delete?id=0' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /folder/delete`

DELETE only. The folder and all its descendants go to the recycle bin (restorable from Utilities → Recycled bin); contained items are soft-deleted. Personal root folders and folder id 0 cannot be deleted. The operation returns 409 when the subtree contains a deletion-protected folder or, while LAPR is enabled, an active item linked to a managed account or endpoint credential.

<h3 id="soft-delete-a-folder-and-its-descendants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|Folder id to delete (may also be sent in the JSON body)|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "deleted_folders": [
    0
  ],
  "deleted_items_count": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="soft-delete-a-folder-and-its-descendants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folder deleted|[FolderDeleteResult](#schemafolderdeleteresult)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List users (admin only)

<a id="opIduserList"></a>

> Code samples

```bash
curl http://localhost/api/v1/user/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user/list`

<h3 id="list-users-admin-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of results (capped at 500)|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "login": "string",
    "name": "string",
    "lastname": "string",
    "email": "string",
    "admin": 0,
    "gestionnaire": 0,
    "disabled": 0,
    "last_connection_time": 0,
    "is_ready_for_usage": 0,
    "personal_folder": 0,
    "auth_type": "string"
  }
]
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="list-users-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User list (sensitive columns are never returned)|Inline|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="list-users-admin-only-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get browser extension connection settings

<a id="opIdmiscRefreshExtensionSettings"></a>

> Code samples

```bash
curl http://localhost/api/v1/misc/refreshExtensionSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /misc/refreshExtensionSettings`

> Example responses

> 200 Response

```json
{
  "extension_fqdn": "string",
  "extension_key": "string",
  "extension_url": "string",
  "teampass_version": "3.2.1.2",
  "teampass_version_major": "3.2.1",
  "teampass_version_minor": "2"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-browser-extension-connection-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Browser extension connection settings|Inline|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="get-browser-extension-connection-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension_fqdn|string|true|none|none|
|extension_key|string|true|none|none|
|extension_url|string|true|none|none|
|teampass_version|string|true|none|Complete TeamPass server release version, refreshed independently of authentication.|
|teampass_version_major|string|true|none|Base TeamPass server version (major.minor.patch).|
|teampass_version_minor|string|true|none|Final TeamPass release revision component.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get browser extension connection settings (POST variant)

<a id="opIdmiscRefreshExtensionSettingsPost"></a>

> Code samples

```bash
curl http://localhost/api/v1/misc/refreshExtensionSettings \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /misc/refreshExtensionSettings`

> Example responses

> 200 Response

```json
{
  "extension_fqdn": "string",
  "extension_key": "string",
  "extension_url": "string",
  "teampass_version": "3.2.1.2",
  "teampass_version_major": "3.2.1",
  "teampass_version_minor": "2"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="get-browser-extension-connection-settings-post-variant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Browser extension connection settings|Inline|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|

<h3 id="get-browser-extension-connection-settings-post-variant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension_fqdn|string|true|none|none|
|extension_key|string|true|none|none|
|extension_url|string|true|none|none|
|teampass_version|string|true|none|Complete TeamPass server release version, refreshed independently of authentication.|
|teampass_version_major|string|true|none|Base TeamPass server version (major.minor.patch).|
|teampass_version_minor|string|true|none|Final TeamPass release revision component.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a passkey on an item

<a id="opIdwebauthnCreate"></a>

> Code samples

```bash
curl http://localhost/api/v1/webauthn/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "item_id": 1,
    "rp_id": "string",
    "rp_name": "string",
    "user_handle": "string",
    "user_name": "string",
    "user_display_name": "string",
    "pub_key_cred_params": [
      0
    ],
    "client_data_json": "string",
    "user_verified": false,
    "excluded_credential_ids": [
      "string"
    ]
  }'
```

`POST /webauthn/create`

TeamPass acts as the authenticator: it generates an ES256 key pair, stores the private key encrypted like an item password and returns what the extension needs to build the PublicKeyCredential. Needs the update right and edit access to the item's folder. Returns 503 while passkey support is disabled.

> Body parameter

```json
{
  "item_id": 1,
  "rp_id": "string",
  "rp_name": "string",
  "user_handle": "string",
  "user_name": "string",
  "user_display_name": "string",
  "pub_key_cred_params": [
    0
  ],
  "client_data_json": "string",
  "user_verified": false,
  "excluded_credential_ids": [
    "string"
  ]
}
```

<h3 id="create-a-passkey-on-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebauthnCreateBody](#schemawebauthncreatebody)|true|none|
|» item_id|body|integer|true|Existing item the passkey is attached to. It inherits the item's folder rights, restriction and recycle bin.|
|» rp_id|body|string|true|Relying party id requested by the site (a domain, e.g. github.com). Must be the host of the client data origin or one of its parent domains.|
|» rp_name|body|string|false|none|
|» user_handle|body|string|true|Relying party user id (1 to 64 bytes), base64url.|
|» user_name|body|string|false|none|
|» user_display_name|body|string|false|none|
|» pub_key_cred_params|body|[integer \| object]|false|Algorithms accepted by the relying party, as COSE identifiers or PublicKeyCredentialParameters objects. ES256 (-7) must be among them; an empty list means the WebAuthn default.|
|» » *oneOf*|body|integer|false|none|
|» » *oneOf*|body|object|false|none|
|» » type|body|string|false|none|
|» » alg|body|integer|false|none|
|» client_data_json|body|string|true|Client data JSON built by the extension (type webauthn.create), base64url. Its origin must be the tab's real origin, taken from the browser, never from the page.|
|» user_verified|body|boolean|false|Whether the extension verified the user (sets the UV flag).|
|» excluded_credential_ids|body|[string]|false|excludeCredentials of the relying party. A match answers 409.|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "item_id": 0,
  "rp_id": "string",
  "credential_id": "string",
  "user_handle": "string",
  "attestation_object": "string",
  "authenticator_data": "string",
  "public_key": "string",
  "public_key_algorithm": -7,
  "transports": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="create-a-passkey-on-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Passkey created|[WebauthnCreatedCredential](#schemawebauthncreatedcredential)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List usable passkeys

<a id="opIdwebauthnList"></a>

> Code samples

```bash
curl http://localhost/api/v1/webauthn/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webauthn/list`

Passkeys on items the caller can read, whose keys have reached the caller. At least one filter is mandatory.

<h3 id="list-usable-passkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rp_id|query|string|false|none|
|item_id|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "credential_id": "string",
    "rp_id": "string",
    "rp_name": "string",
    "user_handle": "string",
    "user_name": "string",
    "user_display_name": "string",
    "item_id": 0,
    "item_label": "string",
    "folder_id": 0,
    "created_at": 0,
    "last_used_at": 0
  }
]
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="list-usable-passkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Passkeys, possibly empty|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

<h3 id="list-usable-passkeys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WebauthnCredential](#schemawebauthncredential)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Sign an assertion with a passkey

<a id="opIdwebauthnAssert"></a>

> Code samples

```bash
curl http://localhost/api/v1/webauthn/assert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "credential_id": "string",
    "rp_id": "string",
    "client_data_json": "string",
    "user_verified": false
  }'
```

`POST /webauthn/assert`

The private key is decrypted and used on the server only. Each call increments the signature counter and is written to the item history. 422 when the caller's keys cannot decrypt the passkey yet (retry once the background task has distributed them).

> Body parameter

```json
{
  "credential_id": "string",
  "rp_id": "string",
  "client_data_json": "string",
  "user_verified": false
}
```

<h3 id="sign-an-assertion-with-a-passkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebauthnAssertBody](#schemawebauthnassertbody)|true|none|
|» credential_id|body|string|true|Credential id|
|» rp_id|body|string|true|Relying party id requested by the site. Must equal the passkey's.|
|» client_data_json|body|string|true|Client data JSON built by the extension (type webauthn.get), base64url. Signed as is.|
|» user_verified|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "credential_id": "string",
  "authenticator_data": "string",
  "signature": "string",
  "user_handle": "string"
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 422 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="sign-an-assertion-with-a-passkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Assertion|[WebauthnAssertion](#schemawebauthnassertion)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|422|Unprocessable Entity|Validation failed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a passkey

<a id="opIdwebauthnDelete"></a>

> Code samples

```bash
curl 'http://localhost/api/v1/webauthn/delete?id=1' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webauthn/delete`

Deletes the passkey and its encryption keys. Needs the update right and edit access to the item's folder. The account on the site keeps the public key: remove it there too.

<h3 id="delete-a-passkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "id": 0,
  "item_id": 0
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 404 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="delete-a-passkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Passkey deleted|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|404|Not Found|Resource not found|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

<h3 id="delete-a-passkey-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|id|integer|false|none|none|
|item_id|integer|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## This OpenAPI 3.1 contract

<a id="opIdgetOpenApiSpec"></a>

> Code samples

```bash
curl http://localhost/api/v1/openapi.json \
  -H 'Accept: application/json'
```

`GET /openapi.json`

> Example responses

> 200 Response

```json
{}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="this-openapi-31-contract-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The OpenAPI document|Inline|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="teampass-rest-api-external-devices">External devices</h1>

## Detect experimental external device pairing

<a id="opIddevicePairingCapabilities"></a>

> Code samples

```bash
curl http://localhost/api/v1/devicePairing/capabilities \
  -H 'Accept: application/json'
```

`GET /devicePairing/capabilities`

Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.

> Example responses

> 200 Response

```json
{
  "type": "teampass.device-pairing",
  "version": 1,
  "experimental": true,
  "algorithm": "RSA-OAEP-256",
  "key_bits": 3072,
  "credential_status": true,
  "credential_lifetime_days": 1,
  "ttl": 180,
  "poll_interval": 2
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="detect-experimental-external-device-pairing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.|[DevicePairingCapabilities](#schemadevicepairingcapabilities)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="success">
This operation does not require authentication
</aside>

## Reserve an immutable external device claim

<a id="opIddevicePairingClaim"></a>

> Code samples

```bash
curl http://localhost/api/v1/devicePairing/claim \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "pairing_id": "string",
    "pairing_secret": "string",
    "challenge": "string",
    "public_key": "string",
    "device_label": "string"
  }'
```

`POST /devicePairing/claim`

Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.

> Body parameter

```json
{
  "pairing_id": "string",
  "pairing_secret": "string",
  "challenge": "string",
  "public_key": "string",
  "device_label": "string"
}
```

<h3 id="reserve-an-immutable-external-device-claim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DevicePairingClaim](#schemadevicepairingclaim)|true|none|
|» pairing_id|body|string|true|none|
|» pairing_secret|body|string|true|none|
|» challenge|body|string|true|none|
|» public_key|body|string|true|Ephemeral RSA-3072 public PEM, exponent 65537; private keys are refused.|
|» device_label|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "pairing_id": "string",
  "state": "awaiting_scan",
  "expires_at": 0,
  "server_time": 0,
  "poll_interval": 2,
  "claim_id": "string",
  "comparison_code": "string",
  "key_fingerprint": "string",
  "handoff": {
    "version": 1,
    "algorithm": "RSA-OAEP-256",
    "key_fingerprint": "string",
    "ciphertext": "string",
    "server_url": "http://example.com",
    "username": "string",
    "delivery_until": 0,
    "credential_id": 0,
    "credential_expires_at": 0
  }
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="reserve-an-immutable-external-device-claim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.|[DevicePairingState](#schemadevicepairingstate)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="success">
This operation does not require authentication
</aside>

## Poll a claim using its verifier

<a id="opIddevicePairingStatus"></a>

> Code samples

```bash
curl http://localhost/api/v1/devicePairing/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "pairing_id": "string",
    "claim_id": "string",
    "verifier": "string"
  }'
```

`POST /devicePairing/status`

Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.

> Body parameter

```json
{
  "pairing_id": "string",
  "claim_id": "string",
  "verifier": "string"
}
```

<h3 id="poll-a-claim-using-its-verifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DevicePairingProof](#schemadevicepairingproof)|true|none|
|» pairing_id|body|string|true|none|
|» claim_id|body|string|true|none|
|» verifier|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "pairing_id": "string",
  "state": "awaiting_scan",
  "expires_at": 0,
  "server_time": 0,
  "poll_interval": 2,
  "claim_id": "string",
  "comparison_code": "string",
  "key_fingerprint": "string",
  "handoff": {
    "version": 1,
    "algorithm": "RSA-OAEP-256",
    "key_fingerprint": "string",
    "ciphertext": "string",
    "server_url": "http://example.com",
    "username": "string",
    "delivery_until": 0,
    "credential_id": 0,
    "credential_expires_at": 0
  }
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="poll-a-claim-using-its-verifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.|[DevicePairingState](#schemadevicepairingstate)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="success">
This operation does not require authentication
</aside>

## Receive the approved protected credential

<a id="opIddevicePairingConsume"></a>

> Code samples

```bash
curl http://localhost/api/v1/devicePairing/consume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "pairing_id": "string",
    "claim_id": "string",
    "verifier": "string"
  }'
```

`POST /devicePairing/consume`

Experimental, disabled by default. Requires API enablement, strict HTTPS and network ACLs. No web session authorizes a device endpoint. Secrets are body-only. Responses are no-store. See docs/api/device-pairing.md.

> Body parameter

```json
{
  "pairing_id": "string",
  "claim_id": "string",
  "verifier": "string"
}
```

<h3 id="receive-the-approved-protected-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DevicePairingProof](#schemadevicepairingproof)|true|none|
|» pairing_id|body|string|true|none|
|» claim_id|body|string|true|none|
|» verifier|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "pairing_id": "string",
  "state": "awaiting_scan",
  "expires_at": 0,
  "server_time": 0,
  "poll_interval": 2,
  "claim_id": "string",
  "comparison_code": "string",
  "key_fingerprint": "string",
  "handoff": {
    "version": 1,
    "algorithm": "RSA-OAEP-256",
    "key_fingerprint": "string",
    "ciphertext": "string",
    "server_url": "http://example.com",
    "username": "string",
    "delivery_until": 0,
    "credential_id": 0,
    "credential_expires_at": 0
  }
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 405 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 409 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="receive-the-approved-protected-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current state. Terminal states return no credential. Only an approved, proven claim receives a protected handoff.|[DevicePairingState](#schemadevicepairingstate)|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|405|Method Not Allowed|HTTP method not supported for this endpoint (Allow header lists supported methods)|[Problem](#schemaproblem)|
|409|Conflict|The resource changed while the request was being processed|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="teampass-rest-api-device-pairing">Device pairing</h1>

## Prove whether a device credential remains authorized

<a id="opIddevicePairingCredentialStatus"></a>

> Code samples

```bash
curl http://localhost/api/v1/devicePairing/credentialStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /devicePairing/credentialStatus`

Experimental. Requires the exact PAT in a JSON body, trusted HTTPS and network ACL compliance. Available even when API or pairing is disabled. Known revoked credentials retain a hash-only proof record; unknown proofs receive a uniform 401. A generic 401 is never a local-vault wipe instruction.

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="prove-whether-a-device-credential-remains-authorized-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "credential_id": 0,
  "state": "active",
  "reason": null,
  "expires_at": 0,
  "server_time": 0,
  "server_url": "http://example.com"
}
```

> 400 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 401 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 403 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 429 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 500 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

> 503 Response

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

<h3 id="prove-whether-a-device-credential-remains-authorized-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Possession-proven credential state; no PAT or private key is returned.|Inline|
|400|Bad Request|Missing or invalid parameters|[Problem](#schemaproblem)|
|401|Unauthorized|Missing, invalid or expired credentials/token|[Problem](#schemaproblem)|
|403|Forbidden|Permission denied|[Problem](#schemaproblem)|
|429|Too Many Requests|Rate limit exceeded (api_rate_limit_per_minute, per user and per IP)|[Problem](#schemaproblem)|
|500|Internal Server Error|Internal server error|[Problem](#schemaproblem)|
|503|Service Unavailable|API disabled in TeamPass settings|[Problem](#schemaproblem)|

<h3 id="prove-whether-a-device-credential-remains-authorized-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential_id|integer|true|none|none|
|state|string|true|none|none|
|reason|string \| null|true|none|none|
|expires_at|integer \| null|true|none|none|
|server_time|integer|true|none|none|
|server_url|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|pending|
|state|suspended|
|state|invalidated|
|reason|null|
|reason|revoked|
|reason|expired|
|reason|access_removed|
|reason|keys_changed|
|reason|not_confirmed|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "type": "about:blank",
  "title": "string",
  "status": 0,
  "detail": "string",
  "error": "string"
}
```

RFC 9457 problem details; the legacy 'error' member duplicates 'detail' for backward compatibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|title|string|false|none|none|
|status|integer|false|none|none|
|detail|string|false|none|none|
|error|string|false|none|none|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": 0,
  "revision": 0,
  "revision_changed_at": 0,
  "label": "string",
  "description": "string",
  "pwd": "string",
  "url": "string",
  "login": "string",
  "email": "string",
  "viewed_no": 0,
  "fa_icon": "string",
  "inactif": 0,
  "perso": 0,
  "id_tree": 0,
  "folder_label": "string",
  "path": "string",
  "totp": "string",
  "totp_algorithm": "sha1",
  "totp_digits": 6,
  "totp_period": 1,
  "favicon_url": "string",
  "tags": "string",
  "anyone_can_modify": 0,
  "fields": [
    {
      "id": 0,
      "title": "string",
      "type": "string",
      "masked": 0,
      "value": "string"
    }
  ],
  "renewal_period": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|revision|integer|false|none|Monotonic revision of the item, bumped on every content change. Compare it against a cached copy to detect staleness; the larger value is the newer one.|
|revision_changed_at|integer \| null|false|none|Unix UTC timestamp in seconds paired with revision. It changes on functional content revisions, never on reads or ciphertext-only rewrites; null means the date is unknown.|
|label|string|false|none|none|
|description|string|false|none|none|
|pwd|string|false|none|Decrypted password|
|url|string|false|none|none|
|login|string|false|none|none|
|email|string|false|none|none|
|viewed_no|integer|false|none|none|
|fa_icon|string \| null|false|none|none|
|inactif|integer|false|none|none|
|perso|integer|false|none|none|
|id_tree|integer|false|none|none|
|folder_label|string \| null|false|none|none|
|path|string|false|none|none|
|totp|string \| null|false|none|none|
|totp_algorithm|string|false|none|none|
|totp_digits|integer|false|none|none|
|totp_period|integer|false|none|none|
|favicon_url|string \| null|false|none|none|
|tags|string \| null|false|none|none|
|anyone_can_modify|integer \| string|false|none|none|
|fields|[[CustomField](#schemacustomfield)]|false|none|none|
|renewal_period|integer|false|none|Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Ordinary renewal is inactive for all LAPR-linked items while the LAPR module is enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|totp_algorithm|sha1|
|totp_algorithm|sha256|
|totp_algorithm|sha512|
|totp_digits|6|
|totp_digits|8|

<h2 id="tocS_ItemSummary">ItemSummary</h2>
<!-- backwards compatibility -->
<a id="schemaitemsummary"></a>
<a id="schema_ItemSummary"></a>
<a id="tocSitemsummary"></a>
<a id="tocsitemsummary"></a>

```json
{
  "id": 0,
  "revision": 0,
  "revision_changed_at": 0,
  "label": "string",
  "login": "string",
  "url": "string",
  "folder_id": 0,
  "has_otp": 0,
  "favicon_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|revision|integer|false|none|Monotonic revision of the item, bumped on every content change. Compare it against a cached copy to detect staleness; the larger value is the newer one.|
|revision_changed_at|integer \| null|false|none|Unix UTC timestamp in seconds paired with revision; null when the date is unknown.|
|label|string|false|none|none|
|login|string|false|none|none|
|url|string|false|none|none|
|folder_id|integer|false|none|none|
|has_otp|integer|false|none|none|
|favicon_url|string|false|none|none|

<h2 id="tocS_CustomField">CustomField</h2>
<!-- backwards compatibility -->
<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "id": 0,
  "title": "string",
  "type": "string",
  "masked": 0,
  "value": "string"
}
```

A custom field value attached to an item. Fields restricted via 'Restrict Visibility to' (categories.role_visibility) are omitted entirely for users holding none of the required roles; their value is never decrypted nor returned. No admin bypass.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|masked|integer|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_ItemCreateBody">ItemCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemaitemcreatebody"></a>
<a id="schema_ItemCreateBody"></a>
<a id="tocSitemcreatebody"></a>
<a id="tocsitemcreatebody"></a>

```json
{
  "label": "string",
  "folder_id": 0,
  "password": "string",
  "description": "string",
  "login": "string",
  "email": "string",
  "url": "string",
  "tags": "string",
  "anyone_can_modify": 0,
  "icon": "string",
  "totp": "string",
  "totp_algorithm": "sha1",
  "totp_digits": 6,
  "totp_period": 30,
  "fields": [
    {
      "id": 0,
      "value": "string"
    }
  ],
  "renewal_period": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|folder_id|integer|true|none|none|
|password|string|true|none|none|
|description|string|false|none|none|
|login|string|true|none|none|
|email|string|true|none|none|
|url|string|true|none|none|
|tags|string|true|none|none|
|anyone_can_modify|integer|true|none|none|
|icon|string|false|none|none|
|totp|string|false|none|Base32 secret or otpauth://totp provisioning URI|
|totp_algorithm|string|false|none|none|
|totp_digits|integer|false|none|none|
|totp_period|integer|false|none|none|
|fields|[object]|false|none|none|
|renewal_period|integer|false|none|Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Ordinary renewal is inactive for all LAPR-linked items while the LAPR module is enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|totp_algorithm|sha1|
|totp_algorithm|sha256|
|totp_algorithm|sha512|
|totp_digits|6|
|totp_digits|8|

<h2 id="tocS_ItemUpdateBody">ItemUpdateBody</h2>
<!-- backwards compatibility -->
<a id="schemaitemupdatebody"></a>
<a id="schema_ItemUpdateBody"></a>
<a id="tocSitemupdatebody"></a>
<a id="tocsitemupdatebody"></a>

```json
{
  "id": 0,
  "revision": 0,
  "label": "string",
  "password": "string",
  "description": "string",
  "login": "string",
  "email": "string",
  "url": "string",
  "tags": "string",
  "anyone_can_modify": 0,
  "icon": "string",
  "folder_id": 0,
  "totp": "string",
  "totp_algorithm": "sha1",
  "totp_digits": 6,
  "totp_period": 1,
  "fields": [
    {
      "id": 0,
      "value": "string"
    }
  ],
  "renewal_period": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|revision|integer|false|none|Optional precondition, not an updatable field: the revision the edit was based on. The update is refused with 409 when the server has moved on since. Omitting it keeps the previous last-writer-wins behaviour.|
|label|string|false|none|none|
|password|string|false|none|none|
|description|string|false|none|none|
|login|string|false|none|none|
|email|string|false|none|none|
|url|string|false|none|none|
|tags|string|false|none|none|
|anyone_can_modify|integer|false|none|none|
|icon|string|false|none|none|
|folder_id|integer|false|none|none|
|totp|string|false|none|Base32 secret, otpauth://totp provisioning URI, or an empty string to remove TOTP|
|totp_algorithm|string|false|none|none|
|totp_digits|integer|false|none|none|
|totp_period|integer|false|none|none|
|fields|[object]|false|none|none|
|renewal_period|integer|false|none|Stored individual password renewal period in days; 0 disables only the individual policy. Available for personal and shared items, independently of folder expiration. The shortest active item/folder period applies. This value is not the calculated effective period. Expiration is advisory and does not block authorized reading. Omission preserves the stored value. Changing the period does not reset password age. While LAPR is enabled, changing this value for a managed account or an endpoint connection credential returns HTTP 409; omitting it or resending the current value is allowed.|

#### Enumerated Values

|Property|Value|
|---|---|
|totp_algorithm|sha1|
|totp_algorithm|sha256|
|totp_algorithm|sha512|
|totp_digits|6|
|totp_digits|8|

<h2 id="tocS_FolderCreateBody">FolderCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemafoldercreatebody"></a>
<a id="schema_FolderCreateBody"></a>
<a id="tocSfoldercreatebody"></a>
<a id="tocsfoldercreatebody"></a>

```json
{
  "title": "string",
  "parent_id": 0,
  "complexity": 0,
  "private": true,
  "duration": 0,
  "create_auth_without": 0,
  "edit_auth_without": 0,
  "icon": "string",
  "icon_selected": "string",
  "access_rights": "W"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|parent_id|integer|false|none|Parent folder id (0 = root, requires user_can_create_root_folder). Optional when 'private' is true — defaults to the caller's personal root.|
|complexity|integer|false|none|Password complexity level. Required for a shared target; optional (default 0) when the resolved target is personal (e.g. 'private' is true).|
|private|boolean|false|none|Optional. When true, creates a personal (private) folder under the caller's personal root without needing its id (requires personal folders to be enabled for the user). The personal_folder flag is never accepted directly from the client — it is derived server-side from the resolved parent.|
|duration|integer|false|none|none|
|create_auth_without|integer|false|none|Allow item creation below the folder's minimum password strength (0/1). Omitted: inherit the parent's value, or 0 at root. Explicit 0 disables the exception. Does not relax the subfolder complexity floor.|
|edit_auth_without|integer|false|none|Allow item editing below the folder's minimum password strength (0/1). Omitted: inherit the parent's value, or 0 at root. Explicit 0 disables the exception. Inheritance is a one-time copy, independent of role permission inheritance.|
|icon|string|false|none|none|
|icon_selected|string|false|none|none|
|access_rights|string|false|none|Access level granted to the caller's roles on the new folder. Defaults to W when omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|access_rights|R|
|access_rights|W|
|access_rights|NE|
|access_rights|ND|
|access_rights|NDNE|

<h2 id="tocS_FolderUpdateBody">FolderUpdateBody</h2>
<!-- backwards compatibility -->
<a id="schemafolderupdatebody"></a>
<a id="schema_FolderUpdateBody"></a>
<a id="tocSfolderupdatebody"></a>
<a id="tocsfolderupdatebody"></a>

```json
{
  "id": 0,
  "title": "string",
  "parent_id": 0,
  "complexity": 0,
  "duration": 0,
  "create_auth_without": 0,
  "edit_auth_without": 0,
  "deletion_protected": 0,
  "icon": "string",
  "icon_selected": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Folder id to update (required).|
|title|string|false|none|none|
|parent_id|integer|false|none|New parent id (move). Cross-domain personal ↔ shared moves are rejected (422).|
|complexity|integer|false|none|Password complexity level. Must be one of the TeamPass levels; any other value is rejected with 422.|
|duration|integer|false|none|none|
|create_auth_without|integer|false|none|Allow item creation below the folder's minimum password strength (0/1). Omitted: preserve the current value, including when moving the folder.|
|edit_auth_without|integer|false|none|Allow item editing below the folder's minimum password strength (0/1). Omitted: preserve the current value, including when moving the folder.|
|deletion_protected|integer|false|none|Administrative protection against accidental deletion (0/1). Only an administrator may change it. A protected folder also prevents deletion of an ancestor subtree containing it.|
|icon|string|false|none|none|
|icon_selected|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|complexity|0|
|complexity|20|
|complexity|38|
|complexity|48|
|complexity|60|
|deletion_protected|0|
|deletion_protected|1|

<h2 id="tocS_CreatedResult">CreatedResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedresult"></a>
<a id="schema_CreatedResult"></a>
<a id="tocScreatedresult"></a>
<a id="tocscreatedresult"></a>

```json
{
  "error": true,
  "message": "string",
  "newId": 0,
  "revision": 0,
  "revision_changed_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|newId|integer|false|none|none|
|revision|integer|false|none|Revision allocated to the new item|
|revision_changed_at|integer \| null|false|none|Unix UTC timestamp in seconds paired with the allocated revision; null when the date is unknown.|

<h2 id="tocS_FolderUpdateResult">FolderUpdateResult</h2>
<!-- backwards compatibility -->
<a id="schemafolderupdateresult"></a>
<a id="schema_FolderUpdateResult"></a>
<a id="tocSfolderupdateresult"></a>
<a id="tocsfolderupdateresult"></a>

```json
{
  "error": true,
  "message": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|id|integer|false|none|none|

<h2 id="tocS_FolderDeleteResult">FolderDeleteResult</h2>
<!-- backwards compatibility -->
<a id="schemafolderdeleteresult"></a>
<a id="schema_FolderDeleteResult"></a>
<a id="tocSfolderdeleteresult"></a>
<a id="tocsfolderdeleteresult"></a>

```json
{
  "error": true,
  "message": "string",
  "deleted_folders": [
    0
  ],
  "deleted_items_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|deleted_folders|[integer]|false|none|Ids of the folder and every descendant that was soft-deleted.|
|deleted_items_count|integer|false|none|none|

<h2 id="tocS_FolderNode">FolderNode</h2>
<!-- backwards compatibility -->
<a id="schemafoldernode"></a>
<a id="schema_FolderNode"></a>
<a id="tocSfoldernode"></a>
<a id="tocsfoldernode"></a>

```json
{
  "id": 0,
  "title": "string",
  "isVisible": true,
  "complexity": 0,
  "childrens": [
    {
      "id": 0,
      "title": "string",
      "isVisible": true,
      "complexity": 0,
      "childrens": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|title|string|false|none|none|
|isVisible|boolean|false|none|none|
|complexity|integer|false|none|Minimum password strength required for items in this folder. 0 when no rule is set.|
|childrens|[[FolderNode](#schemafoldernode)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|complexity|0|
|complexity|20|
|complexity|38|
|complexity|48|
|complexity|60|

<h2 id="tocS_WritableFolder">WritableFolder</h2>
<!-- backwards compatibility -->
<a id="schemawritablefolder"></a>
<a id="schema_WritableFolder"></a>
<a id="tocSwritablefolder"></a>
<a id="tocswritablefolder"></a>

```json
{
  "id": 0,
  "label": "string",
  "level": 0,
  "parent_id": 0,
  "first_position": 0,
  "position": 0,
  "complexity": 0,
  "is_readonly": 0,
  "access_type": "R",
  "can_create": 0,
  "can_edit": 0,
  "can_delete": 0,
  "is_personal": 0,
  "is_personal_root": 0,
  "deletion_protected": 0,
  "contains_deletion_protected": 0,
  "can_create_subfolder": 0,
  "can_rename_folder": 0,
  "can_move_folder": 0,
  "can_delete_folder": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|label|string|true|none|none|
|level|integer|true|none|none|
|parent_id|integer|true|none|none|
|first_position|integer|true|none|none|
|position|integer|true|none|MPTT left bound. The list is already sorted on it; use it to restore tree order after a client-side re-sort.|
|complexity|integer|true|none|Minimum password strength required for items in this folder. 0 when no rule is set.|
|is_readonly|integer|true|none|1 when the resolved item access type is R. ND/NE/NDNE are NOT read-only — check can_edit and can_delete.|
|access_type|string|true|none|Effective access level for items contained in this folder, least-permissive-wins across all the user's roles (R > NDNE > NE = ND > W).|
|can_create|integer|true|none|Item right: 1 when the user may create an item in this folder (false only for R). This does not authorize creating a subfolder.|
|can_edit|integer|true|none|Item right: 1 when the user may edit existing items in this folder (false for NE, NDNE and R). This does not authorize renaming or moving the folder.|
|can_delete|integer|true|none|Item right: 1 when the user may delete items in this folder (false for ND, NDNE and R). This does not authorize deleting the folder.|
|is_personal|integer|true|none|1 when the folder is part of a personal folder tree; 0 for the shared domain. This endpoint only ever lists the caller's own personal folders, so in practice 1 means 'mine'.|
|is_personal_root|integer|true|none|1 for the protected root of the personal folder domain. A personal root cannot be renamed, moved or deleted.|
|deletion_protected|integer|true|none|1 when this folder itself is protected against accidental deletion.|
|contains_deletion_protected|integer|true|none|1 when this folder or any descendant is protected, so deleting this subtree is blocked.|
|can_create_subfolder|integer|true|none|Folder-management hint: 1 when POST /folder/create may use this folder as its parent according to the current access, read-only state, API create permission and global folder-management rules. The create route performs the final validation.|
|can_rename_folder|integer|true|none|Folder-management hint: 1 when the source folder is eligible for rename according to the current access, read-only state, API update permission, global folder-management rules and personal-root protection. PUT /folder/update performs the final validation.|
|can_move_folder|integer|true|none|Folder-management hint for the source only: 1 when the source folder is eligible to move. PUT /folder/update separately validates the chosen destination, including access, read-only state, cycles, personal/shared domain boundaries and root permission.|
|can_delete_folder|integer|true|none|Folder-management hint: 1 when the source folder is eligible for deletion according to the current access, read-only state, API delete permission, global folder-management rules, personal-root protection and administrative deletion protection in its subtree. DELETE /folder/delete performs the final validation, including LAPR relationships at mutation time.|

#### Enumerated Values

|Property|Value|
|---|---|
|complexity|0|
|complexity|20|
|complexity|38|
|complexity|48|
|complexity|60|
|is_readonly|0|
|is_readonly|1|
|access_type|R|
|access_type|W|
|access_type|NE|
|access_type|ND|
|access_type|NDNE|
|can_create|0|
|can_create|1|
|can_edit|0|
|can_edit|1|
|can_delete|0|
|can_delete|1|
|is_personal|0|
|is_personal|1|
|is_personal_root|0|
|is_personal_root|1|
|deletion_protected|0|
|deletion_protected|1|
|contains_deletion_protected|0|
|contains_deletion_protected|1|
|can_create_subfolder|0|
|can_create_subfolder|1|
|can_rename_folder|0|
|can_rename_folder|1|
|can_move_folder|0|
|can_move_folder|1|
|can_delete_folder|0|
|can_delete_folder|1|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "login": "string",
  "name": "string",
  "lastname": "string",
  "email": "string",
  "admin": 0,
  "gestionnaire": 0,
  "disabled": 0,
  "last_connection_time": 0,
  "is_ready_for_usage": 0,
  "personal_folder": 0,
  "auth_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|login|string|false|none|none|
|name|string \| null|false|none|none|
|lastname|string \| null|false|none|none|
|email|string \| null|false|none|none|
|admin|integer|false|none|none|
|gestionnaire|integer|false|none|none|
|disabled|integer|false|none|none|
|last_connection_time|integer \| string \| null|false|none|none|
|is_ready_for_usage|integer|false|none|none|
|personal_folder|integer|false|none|none|
|auth_type|string|false|none|none|

<h2 id="tocS_WebauthnCreateBody">WebauthnCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemawebauthncreatebody"></a>
<a id="schema_WebauthnCreateBody"></a>
<a id="tocSwebauthncreatebody"></a>
<a id="tocswebauthncreatebody"></a>

```json
{
  "item_id": 1,
  "rp_id": "string",
  "rp_name": "string",
  "user_handle": "string",
  "user_name": "string",
  "user_display_name": "string",
  "pub_key_cred_params": [
    0
  ],
  "client_data_json": "string",
  "user_verified": false,
  "excluded_credential_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_id|integer|true|none|Existing item the passkey is attached to. It inherits the item's folder rights, restriction and recycle bin.|
|rp_id|string|true|none|Relying party id requested by the site (a domain, e.g. github.com). Must be the host of the client data origin or one of its parent domains.|
|rp_name|string|false|none|none|
|user_handle|string|true|none|Relying party user id (1 to 64 bytes), base64url.|
|user_name|string|false|none|none|
|user_display_name|string|false|none|none|
|pub_key_cred_params|[integer \| object]|false|none|Algorithms accepted by the relying party, as COSE identifiers or PublicKeyCredentialParameters objects. ES256 (-7) must be among them; an empty list means the WebAuthn default.|
|client_data_json|string|true|none|Client data JSON built by the extension (type webauthn.create), base64url. Its origin must be the tab's real origin, taken from the browser, never from the page.|
|user_verified|boolean|false|none|Whether the extension verified the user (sets the UV flag).|
|excluded_credential_ids|[string]|false|none|excludeCredentials of the relying party. A match answers 409.|

<h2 id="tocS_WebauthnCreatedCredential">WebauthnCreatedCredential</h2>
<!-- backwards compatibility -->
<a id="schemawebauthncreatedcredential"></a>
<a id="schema_WebauthnCreatedCredential"></a>
<a id="tocSwebauthncreatedcredential"></a>
<a id="tocswebauthncreatedcredential"></a>

```json
{
  "id": 0,
  "item_id": 0,
  "rp_id": "string",
  "credential_id": "string",
  "user_handle": "string",
  "attestation_object": "string",
  "authenticator_data": "string",
  "public_key": "string",
  "public_key_algorithm": -7,
  "transports": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|TeamPass identifier of the passkey|
|item_id|integer|true|none|none|
|rp_id|string|true|none|none|
|credential_id|string|true|none|Server-generated credential id, also the rawId of the PublicKeyCredential.|
|user_handle|string|true|none|Relying party user id|
|attestation_object|string|true|none|CBOR attestation object, format none.|
|authenticator_data|string|true|none|Authenticator data, for AuthenticatorAttestationResponse.getAuthenticatorData().|
|public_key|string|true|none|DER SubjectPublicKeyInfo, for AuthenticatorAttestationResponse.getPublicKey().|
|public_key_algorithm|integer|true|none|none|
|transports|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|public_key_algorithm|-7|

<h2 id="tocS_WebauthnCredential">WebauthnCredential</h2>
<!-- backwards compatibility -->
<a id="schemawebauthncredential"></a>
<a id="schema_WebauthnCredential"></a>
<a id="tocSwebauthncredential"></a>
<a id="tocswebauthncredential"></a>

```json
{
  "id": 0,
  "credential_id": "string",
  "rp_id": "string",
  "rp_name": "string",
  "user_handle": "string",
  "user_name": "string",
  "user_display_name": "string",
  "item_id": 0,
  "item_label": "string",
  "folder_id": 0,
  "created_at": 0,
  "last_used_at": 0
}
```

Passkey metadata. Key material is never returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|credential_id|string|false|none|Credential id|
|rp_id|string|false|none|none|
|rp_name|string \| null|false|none|none|
|user_handle|string|false|none|Relying party user id|
|user_name|string \| null|false|none|none|
|user_display_name|string \| null|false|none|none|
|item_id|integer|false|none|none|
|item_label|string|false|none|none|
|folder_id|integer|false|none|none|
|created_at|integer|false|none|Unix UTC timestamp|
|last_used_at|integer \| null|false|none|Unix UTC timestamp|

<h2 id="tocS_WebauthnAssertBody">WebauthnAssertBody</h2>
<!-- backwards compatibility -->
<a id="schemawebauthnassertbody"></a>
<a id="schema_WebauthnAssertBody"></a>
<a id="tocSwebauthnassertbody"></a>
<a id="tocswebauthnassertbody"></a>

```json
{
  "credential_id": "string",
  "rp_id": "string",
  "client_data_json": "string",
  "user_verified": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential_id|string|true|none|Credential id|
|rp_id|string|true|none|Relying party id requested by the site. Must equal the passkey's.|
|client_data_json|string|true|none|Client data JSON built by the extension (type webauthn.get), base64url. Signed as is.|
|user_verified|boolean|false|none|none|

<h2 id="tocS_WebauthnAssertion">WebauthnAssertion</h2>
<!-- backwards compatibility -->
<a id="schemawebauthnassertion"></a>
<a id="schema_WebauthnAssertion"></a>
<a id="tocSwebauthnassertion"></a>
<a id="tocswebauthnassertion"></a>

```json
{
  "credential_id": "string",
  "authenticator_data": "string",
  "signature": "string",
  "user_handle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential_id|string|true|none|Credential id|
|authenticator_data|string|true|none|Authenticator data|
|signature|string|true|none|DER ECDSA signature of authenticatorData ‖ SHA-256(clientDataJSON)|
|user_handle|string|true|none|Relying party user id|

<h2 id="tocS_DevicePairingClaim">DevicePairingClaim</h2>
<!-- backwards compatibility -->
<a id="schemadevicepairingclaim"></a>
<a id="schema_DevicePairingClaim"></a>
<a id="tocSdevicepairingclaim"></a>
<a id="tocsdevicepairingclaim"></a>

```json
{
  "pairing_id": "string",
  "pairing_secret": "string",
  "challenge": "string",
  "public_key": "string",
  "device_label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairing_id|string|true|none|none|
|pairing_secret|string|true|none|none|
|challenge|string|true|none|none|
|public_key|string|true|none|Ephemeral RSA-3072 public PEM, exponent 65537; private keys are refused.|
|device_label|string|true|none|none|

<h2 id="tocS_DevicePairingProof">DevicePairingProof</h2>
<!-- backwards compatibility -->
<a id="schemadevicepairingproof"></a>
<a id="schema_DevicePairingProof"></a>
<a id="tocSdevicepairingproof"></a>
<a id="tocsdevicepairingproof"></a>

```json
{
  "pairing_id": "string",
  "claim_id": "string",
  "verifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairing_id|string|true|none|none|
|claim_id|string|true|none|none|
|verifier|string|true|none|none|

<h2 id="tocS_DevicePairingState">DevicePairingState</h2>
<!-- backwards compatibility -->
<a id="schemadevicepairingstate"></a>
<a id="schema_DevicePairingState"></a>
<a id="tocSdevicepairingstate"></a>
<a id="tocsdevicepairingstate"></a>

```json
{
  "pairing_id": "string",
  "state": "awaiting_scan",
  "expires_at": 0,
  "server_time": 0,
  "poll_interval": 2,
  "claim_id": "string",
  "comparison_code": "string",
  "key_fingerprint": "string",
  "handoff": {
    "version": 1,
    "algorithm": "RSA-OAEP-256",
    "key_fingerprint": "string",
    "ciphertext": "string",
    "server_url": "http://example.com",
    "username": "string",
    "delivery_until": 0,
    "credential_id": 0,
    "credential_expires_at": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pairing_id|string|true|none|none|
|state|string|true|none|none|
|expires_at|integer|true|none|none|
|server_time|integer|true|none|none|
|poll_interval|integer|true|none|none|
|claim_id|string|false|none|none|
|comparison_code|string|false|none|none|
|key_fingerprint|string|false|none|none|
|handoff|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|awaiting_scan|
|state|awaiting_approval|
|state|approved|
|state|delivered|
|state|completed|
|state|rejected|
|state|cancelled|
|state|expired|

<h2 id="tocS_DevicePairingCapabilities">DevicePairingCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemadevicepairingcapabilities"></a>
<a id="schema_DevicePairingCapabilities"></a>
<a id="tocSdevicepairingcapabilities"></a>
<a id="tocsdevicepairingcapabilities"></a>

```json
{
  "type": "teampass.device-pairing",
  "version": 1,
  "experimental": true,
  "algorithm": "RSA-OAEP-256",
  "key_bits": 3072,
  "credential_status": true,
  "credential_lifetime_days": 1,
  "ttl": 180,
  "poll_interval": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|version|integer|true|none|none|
|experimental|boolean|true|none|none|
|algorithm|string|true|none|none|
|key_bits|integer|true|none|none|
|credential_status|boolean|false|none|none|
|credential_lifetime_days|integer|false|none|none|
|ttl|integer|true|none|none|
|poll_interval|integer|true|none|none|
