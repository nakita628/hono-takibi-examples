<h1 id="oauth2">oauth2 v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allows OAuth2 compatible authentication from other web applications.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="oauth2-loginredirector">login_redirector</h1>

## Authorize the user

<a id="opIdlogin_redirector-authorize"></a>

> Code samples

```bash
curl 'https://cloud.example.com/index.php/apps/oauth2/authorize?client_id=string&state=string&response_type=string'
```

`GET /index.php/apps/oauth2/authorize`

<h3 id="authorize-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|Client ID|
|state|query|string|true|State of the flow|
|response_type|query|string|true|Response type for the flow|
|redirect_uri|query|string|false|URI to redirect to after the flow (is only used for legacy ownCloud clients)|

<h3 id="authorize-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client not found|Inline|
|303|See Other|Redirect to the login URL|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string||none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="oauth2-oauthapi">oauth_api</h1>

## Get a token

<a id="opIdoauth_api-get-token"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/oauth2/api/v1/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "grant_type": "authorization_code",
    "code": "string",
    "refresh_token": "string",
    "client_id": "string",
    "client_secret": "string"
  }'
```

`POST /index.php/apps/oauth2/api/v1/token`

> Body parameter

```json
{
  "grant_type": "authorization_code",
  "code": "string",
  "refresh_token": "string",
  "client_id": "string",
  "client_secret": "string"
}
```

<h3 id="get-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» grant_type|body|string|true|Token type that should be granted|
|» code|body|string \| null|false|Code of the flow|
|» refresh_token|body|string \| null|false|Refresh token|
|» client_id|body|string \| null|false|Client ID|
|» client_secret|body|string \| null|false|Client secret|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_type|authorization_code|
|» grant_type|refresh_token|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "refresh_token": "string",
  "user_id": "string",
  "x.nc-gss.secondary_url": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token returned|Inline|
|400|Bad Request|Getting token is not possible|Inline|
|500|Internal Server Error||Inline|

<h3 id="get-a-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|token_type|string|true|none|none|
|expires_in|integer(int64)|true|none|none|
|refresh_token|string|true|none|none|
|user_id|string|true|none|none|
|x.nc-gss.secondary_url|string \| null|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>
