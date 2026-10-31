<h1 id="cvat-rest-api">CVAT REST API v2.81.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

REST API for Computer Vision Annotation Tool (CVAT)

<a href="https://www.google.com/policies/terms/">Terms of service</a>
Email: <a href="mailto:support@cvat.ai">CVAT.ai team</a> 
Web: <a href="https://github.com/cvat-ai/cvat">CVAT.ai team</a> 
License: <a href="https://en.wikipedia.org/wiki/MIT_License">MIT License</a>

<a href="https://docs.cvat.ai/docs/">CVAT documentation</a>

# Authentication

- HTTP Authentication, scheme: bearer To authenticate using an API Access token, you need to include
the 'Authentication' header with the 'Bearer ' prefix

An API Access token has to be issued in the user profile section of the UI or
via the /auth/access_tokens API before this authentication method can be used.

- HTTP Authentication, scheme: basic

* API Key (csrfAuth)
    - Parameter Name: **csrftoken**, in: cookie. A CSRF protection token. Can be received in the 'csrftoken' cookie in the
server response on the /api/auth/login endpoint. The 'Origin' header
must also be specified in the request.

* API Key (csrfHeaderAuth)
    - Parameter Name: **X-CSRFToken**, in: header. A CSRF protection token. Can be received in the 'csrftoken' cookie in the
server response on the /api/auth/login endpoint. The 'Origin' header
must also be specified in the request.

* API Key (sessionAuth)
    - Parameter Name: **sessionid**, in: cookie.

* API Key (tokenAuth)
    - Parameter Name: **Authorization**, in: header. Deprecated.

You can obtain an API key (the token) from the server response on
the /api/auth/login/ endpoint.

<h1 id="cvat-rest-api-assets">assets</h1>

## Create an asset

<a id="opIdassets_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/assets \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -F 'guide_id=0' \
  -F 'file=@/path/to/file'
```

`POST /api/assets`

> Body parameter

```yaml
guide_id: 0
file: string
```

<h3 id="create-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AssetWriteRequest](#schemaassetwriterequest)|true|none|
|» guide_id|body|integer|true|none|
|» file|body|string(binary)|true|none|

> Example responses

> 201 Response

```json
{
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "filename": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0
}
```

<h3 id="create-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[AssetRead](#schemaassetread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get an asset

<a id="opIdassets_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H "Authorization: ${API_KEY}"
```

`GET /api/assets/{uuid}`

<h3 id="get-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string(uuid)|true|A UUID string identifying this asset.|

<h3 id="get-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset file|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete an asset

<a id="opIdassets_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/assets/{uuid}`

<h3 id="delete-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string(uuid)|true|A UUID string identifying this asset.|

<h3 id="delete-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The asset has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-auth">auth</h1>

## List tokens

<a id="opIdauth_list_access_tokens"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/access_tokens \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/auth/access_tokens`

<h3 id="list-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['created_date', 'expiry_date', 'id', 'last_used_date', 'name', 'read_only', 'updated_date'].|
|name|query|string|false|A simple equality filter for the name field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|read_only|query|boolean|false|A simple equality filter for the read_only field|
|search|query|string|false|A search term. Available search_fields: ['name']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['created_date', 'expiry_date', 'id', 'last_used_date', 'name', 'read_only', 'updated_date']|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "name": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "expiry_date": "1970-01-01T00:00:00Z",
      "last_used_date": "1970-01-01T00:00:00Z",
      "read_only": true,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "value": "string"
    }
  ]
}
```

<h3 id="list-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedAccessTokenReadList](#schemapaginatedaccesstokenreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a token

<a id="opIdauth_create_access_tokens"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/access_tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "expiry_date": "1970-01-01T00:00:00Z",
    "read_only": true
  }'
```

`POST /api/auth/access_tokens`

> Body parameter

```json
{
  "name": "string",
  "expiry_date": "1970-01-01T00:00:00Z",
  "read_only": true
}
```

<h3 id="create-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccessTokenWriteRequest](#schemaaccesstokenwriterequest)|true|none|
|» name|body|string|true|A free-form name for the token. Doesn't have to be unique|
|» expiry_date|body|string(date-time) \| null|false|Once the token expires, clients cannot use it anymore.<br>If not set, the token will not expire.<br>|
|» read_only|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "last_used_date": "1970-01-01T00:00:00Z",
  "read_only": true,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "value": "string"
}
```

<h3 id="create-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[AccessTokenRead](#schemaaccesstokenread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get token details

<a id="opIdauth_retrieve_access_tokens"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/access_tokens/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/auth/access_tokens/{id}`

<h3 id="get-token-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this API Access Token.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "last_used_date": "1970-01-01T00:00:00Z",
  "read_only": true,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "value": "string"
}
```

<h3 id="get-token-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccessTokenRead](#schemaaccesstokenread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Revoke token

<a id="opIdauth_destroy_access_tokens"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/access_tokens/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/auth/access_tokens/{id}`

<h3 id="revoke-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this API Access Token.|

<h3 id="revoke-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The token was successfully revoked|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a token

<a id="opIdauth_partial_update_access_tokens"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/access_tokens/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "expiry_date": "1970-01-01T00:00:00Z",
    "read_only": true
  }'
```

`PATCH /api/auth/access_tokens/{id}`

> Body parameter

```json
{
  "name": "string",
  "expiry_date": "1970-01-01T00:00:00Z",
  "read_only": true
}
```

<h3 id="update-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this API Access Token.|
|body|body|[PatchedAccessTokenWriteRequest](#schemapatchedaccesstokenwriterequest)|false|none|
|» name|body|string|false|A free-form name for the token. Doesn't have to be unique|
|» expiry_date|body|string(date-time) \| null|false|Once the token expires, clients cannot use it anymore.<br>If not set, the token will not expire.<br>|
|» read_only|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "last_used_date": "1970-01-01T00:00:00Z",
  "read_only": true,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "value": "string"
}
```

<h3 id="update-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccessTokenRead](#schemaaccesstokenread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get current token details

<a id="opIdauth_retrieve_access_tokens_self"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/access_tokens/self \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/auth/access_tokens/self`

Get details of the token used for the current request.
This endpoint is only allowed if the request is performed using an access token.


> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "last_used_date": "1970-01-01T00:00:00Z",
  "read_only": true,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "value": "string"
}
```

<h3 id="get-current-token-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AccessTokenRead](#schemaaccesstokenread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessTokenAuth
</aside>

## auth_create_login

<a id="opIdauth_create_login"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "string",
    "email": "user@example.com",
    "password": "string"
  }'
```

`POST /api/auth/login`

Check the credentials and return the REST Token
if the credentials are valid and authenticated.
If email verification is enabled and the user has the unverified email,
an email with a confirmation link will be sent.
Calls Django Auth login method to register User ID
in Django session framework.

Accept the following POST parameters: username, email, password
Return the REST Framework Token Object's key.

> Body parameter

```json
{
  "username": "string",
  "email": "user@example.com",
  "password": "string"
}
```

<h3 id="authcreatelogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginSerializerExRequest](#schemaloginserializerexrequest)|true|none|
|» username|body|string|false|none|
|» email|body|string(email)|false|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "key": "string"
}
```

<h3 id="authcreatelogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Token](#schematoken)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## auth_create_logout

<a id="opIdauth_create_logout"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/logout \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/auth/logout`

Calls Django logout method and delete the Token object
assigned to the current User object.

Accepts/Returns nothing.

> Example responses

> 200 Response

```json
{
  "detail": "string"
}
```

<h3 id="authcreatelogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RestAuthDetail](#schemarestauthdetail)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## auth_create_password_change

<a id="opIdauth_create_password_change"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/password/change \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "old_password": "string",
    "new_password1": "stringst",
    "new_password2": "stringst"
  }'
```

`POST /api/auth/password/change`

Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2
Returns the success/fail message.

> Body parameter

```json
{
  "old_password": "string",
  "new_password1": "stringst",
  "new_password2": "stringst"
}
```

<h3 id="authcreatepasswordchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordChangeRequest](#schemapasswordchangerequest)|true|none|
|» old_password|body|string|true|none|
|» new_password1|body|string|true|none|
|» new_password2|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "detail": "string"
}
```

<h3 id="authcreatepasswordchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RestAuthDetail](#schemarestauthdetail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## auth_create_password_reset

<a id="opIdauth_create_password_reset"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/password/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "user@example.com"
  }'
```

`POST /api/auth/password/reset`

Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email
Returns the success/fail message.

> Body parameter

```json
{
  "email": "user@example.com"
}
```

<h3 id="authcreatepasswordreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordResetSerializerExRequest](#schemapasswordresetserializerexrequest)|true|none|
|» email|body|string(email)|true|none|

> Example responses

> 200 Response

```json
{
  "detail": "string"
}
```

<h3 id="authcreatepasswordreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RestAuthDetail](#schemarestauthdetail)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## auth_create_password_reset_confirm

<a id="opIdauth_create_password_reset_confirm"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/password/reset/confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "new_password1": "stringst",
    "new_password2": "stringst",
    "uid": "string",
    "token": "string"
  }'
```

`POST /api/auth/password/reset/confirm`

Password reset e-mail link is confirmed, therefore
this resets the user's password.

Accepts the following POST parameters: token, uid,
    new_password1, new_password2
Returns the success/fail message.

> Body parameter

```json
{
  "new_password1": "stringst",
  "new_password2": "stringst",
  "uid": "string",
  "token": "string"
}
```

<h3 id="authcreatepasswordresetconfirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordResetConfirmRequest](#schemapasswordresetconfirmrequest)|true|none|
|» new_password1|body|string|true|none|
|» new_password2|body|string|true|none|
|» uid|body|string|true|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "detail": "string"
}
```

<h3 id="authcreatepasswordresetconfirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RestAuthDetail](#schemarestauthdetail)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## auth_create_register

<a id="opIdauth_create_register"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "string",
    "email": "user@example.com",
    "password1": "stringst",
    "password2": "stringst",
    "first_name": "string",
    "last_name": "string"
  }'
```

`POST /api/auth/register`

Registers a new user.

Accepts the following POST parameters: username, email, password1, password2.

> Body parameter

```json
{
  "username": "string",
  "email": "user@example.com",
  "password1": "stringst",
  "password2": "stringst",
  "first_name": "string",
  "last_name": "string"
}
```

<h3 id="authcreateregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterSerializerExRequest](#schemaregisterserializerexrequest)|true|none|
|» username|body|string|true|none|
|» email|body|string(email)|false|none|
|» password1|body|string|true|none|
|» password2|body|string|true|none|
|» first_name|body|string|false|none|
|» last_name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "username": "string",
  "email": "user@example.com",
  "first_name": "string",
  "last_name": "string",
  "email_verification_required": true,
  "key": "string"
}
```

<h3 id="authcreateregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[RegisterSerializerEx](#schemaregisterserializerex)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## auth_retrieve_rules

<a id="opIdauth_retrieve_rules"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/rules
```

`GET /api/auth/rules`

<h3 id="authretrieverules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="cvat-rest-api-cloudstorages">cloudstorages</h1>

## List cloud storages

<a id="opIdcloudstorages_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cloudstorages`

<h3 id="list-cloud-storages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|credentials_type|query|string|false|A simple equality filter for the credentials_type field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['credentials_type', 'description', 'id', 'name', 'owner', 'provider_type', 'resource'].|
|name|query|string|false|A simple equality filter for the name field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|provider_type|query|string|false|A simple equality filter for the provider_type field|
|resource|query|string|false|A simple equality filter for the resource field|
|search|query|string|false|A search term. Available search_fields: ['description', 'name', 'owner', 'resource']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['credentials_type', 'description', 'id', 'name', 'owner', 'provider_type', 'resource']|

#### Enumerated Values

|Parameter|Value|
|---|---|
|credentials_type|KEY_SECRET_KEY_PAIR|
|credentials_type|ACCOUNT_NAME_TOKEN_PAIR|
|credentials_type|KEY_FILE_PATH|
|credentials_type|ANONYMOUS_ACCESS|
|credentials_type|CONNECTION_STRING|
|provider_type|AWS_S3_BUCKET|
|provider_type|AZURE_CONTAINER|
|provider_type|GOOGLE_CLOUD_STORAGE|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "manifests": [],
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "provider_type": "AWS_S3_BUCKET",
      "resource": "string",
      "display_name": "string",
      "credentials_type": "KEY_SECRET_KEY_PAIR",
      "specific_attributes": "string",
      "description": "string",
      "organization": 0
    }
  ]
}
```

<h3 id="list-cloud-storages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedCloudStorageReadList](#schemapaginatedcloudstoragereadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a cloud storage

<a id="opIdcloudstorages_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "provider_type": "AWS_S3_BUCKET",
    "resource": "somebucket",
    "display_name": "Bucket",
    "credentials_type": "KEY_SECRET_KEY_PAIR",
    "key": "XXX",
    "secret_key": "XXX",
    "specific_attributes": "region=eu-central-1",
    "description": "Some description",
    "manifests": [
      "manifest.jsonl"
    ]
  }'
```

`POST /api/cloudstorages`

> Body parameter

```json
{
  "provider_type": "AWS_S3_BUCKET",
  "resource": "somebucket",
  "display_name": "Bucket",
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "key": "XXX",
  "secret_key": "XXX",
  "specific_attributes": "region=eu-central-1",
  "description": "Some description",
  "manifests": [
    "manifest.jsonl"
  ]
}
```

<h3 id="create-a-cloud-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[CloudStorageWriteRequest](#schemacloudstoragewriterequest)|true|none|
|» provider_type|body|[ProviderTypeEnum](#schemaprovidertypeenum)|true|* `AWS_S3_BUCKET` - Amazon S3<br>* `AZURE_CONTAINER` - Azure Blob Storage<br>* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage|
|» resource|body|string|true|none|
|» display_name|body|string|true|none|
|» owner|body|[BasicUserRequest](#schemabasicuserrequest)|false|none|
|» credentials_type|body|[CredentialsTypeEnum](#schemacredentialstypeenum)|true|* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR<br>* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR<br>* `KEY_FILE_PATH` - KEY_FILE_PATH<br>* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS<br>* `CONNECTION_STRING` - CONNECTION_STRING|
|» session_token|body|string|false|none|
|» account_name|body|string|false|none|
|» key|body|string|false|none|
|» secret_key|body|string|false|none|
|» connection_string|body|string|false|none|
|» key_file|body|string(binary)|false|none|
|» specific_attributes|body|string|false|none|
|» description|body|string|false|none|
|» manifests|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider_type|AWS_S3_BUCKET|
|» provider_type|AZURE_CONTAINER|
|» provider_type|GOOGLE_CLOUD_STORAGE|
|» credentials_type|KEY_SECRET_KEY_PAIR|
|» credentials_type|ACCOUNT_NAME_TOKEN_PAIR|
|» credentials_type|KEY_FILE_PATH|
|» credentials_type|ANONYMOUS_ACCESS|
|» credentials_type|CONNECTION_STRING|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "manifests": [],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "provider_type": "AWS_S3_BUCKET",
  "resource": "string",
  "display_name": "string",
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "specific_attributes": "string",
  "description": "string",
  "organization": 0
}
```

<h3 id="create-a-cloud-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CloudStorageRead](#schemacloudstorageread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get cloud storage details

<a id="opIdcloudstorages_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cloudstorages/{id}`

<h3 id="get-cloud-storage-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "manifests": [],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "provider_type": "AWS_S3_BUCKET",
  "resource": "string",
  "display_name": "string",
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "specific_attributes": "string",
  "description": "string",
  "organization": 0
}
```

<h3 id="get-cloud-storage-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CloudStorageRead](#schemacloudstorageread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a cloud storage

<a id="opIdcloudstorages_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/cloudstorages/{id}`

<h3 id="delete-a-cloud-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|

<h3 id="delete-a-cloud-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The cloud storage has been removed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a cloud storage

<a id="opIdcloudstorages_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "provider_type": "AWS_S3_BUCKET",
    "resource": "somebucket",
    "display_name": "Bucket",
    "credentials_type": "KEY_SECRET_KEY_PAIR",
    "key": "XXX",
    "secret_key": "XXX",
    "specific_attributes": "region=eu-central-1",
    "description": "Some description",
    "manifests": [
      "manifest.jsonl"
    ]
  }'
```

`PATCH /api/cloudstorages/{id}`

> Body parameter

```json
{
  "provider_type": "AWS_S3_BUCKET",
  "resource": "somebucket",
  "display_name": "Bucket",
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "key": "XXX",
  "secret_key": "XXX",
  "specific_attributes": "region=eu-central-1",
  "description": "Some description",
  "manifests": [
    "manifest.jsonl"
  ]
}
```

<h3 id="update-a-cloud-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|
|body|body|[PatchedCloudStorageWriteRequest](#schemapatchedcloudstoragewriterequest)|false|none|
|» provider_type|body|[ProviderTypeEnum](#schemaprovidertypeenum)|false|* `AWS_S3_BUCKET` - Amazon S3<br>* `AZURE_CONTAINER` - Azure Blob Storage<br>* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage|
|» resource|body|string|false|none|
|» display_name|body|string|false|none|
|» owner|body|[BasicUserRequest](#schemabasicuserrequest)|false|none|
|» credentials_type|body|[CredentialsTypeEnum](#schemacredentialstypeenum)|false|* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR<br>* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR<br>* `KEY_FILE_PATH` - KEY_FILE_PATH<br>* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS<br>* `CONNECTION_STRING` - CONNECTION_STRING|
|» session_token|body|string|false|none|
|» account_name|body|string|false|none|
|» key|body|string|false|none|
|» secret_key|body|string|false|none|
|» connection_string|body|string|false|none|
|» key_file|body|string(binary)|false|none|
|» specific_attributes|body|string|false|none|
|» description|body|string|false|none|
|» manifests|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider_type|AWS_S3_BUCKET|
|» provider_type|AZURE_CONTAINER|
|» provider_type|GOOGLE_CLOUD_STORAGE|
|» credentials_type|KEY_SECRET_KEY_PAIR|
|» credentials_type|ACCOUNT_NAME_TOKEN_PAIR|
|» credentials_type|KEY_FILE_PATH|
|» credentials_type|ANONYMOUS_ACCESS|
|» credentials_type|CONNECTION_STRING|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "manifests": [],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "provider_type": "AWS_S3_BUCKET",
  "resource": "string",
  "display_name": "string",
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "specific_attributes": "string",
  "description": "string",
  "organization": 0
}
```

<h3 id="update-a-cloud-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CloudStorageRead](#schemacloudstorageread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get allowed actions for a cloud storage

<a id="opIdcloudstorages_retrieve_actions"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0/actions \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cloudstorages/{id}/actions`

Method return allowed actions for cloud storage. It's required for reading/writing

<h3 id="get-allowed-actions-for-a-cloud-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-allowed-actions-for-a-cloud-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cloud Storage actions (GET \| PUT \| DELETE)|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get cloud storage content

<a id="opIdcloudstorages_retrieve_content_v2"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0/content-v2 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cloudstorages/{id}/content-v2`

<h3 id="get-cloud-storage-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|
|manifest_path|query|string|false|Path to the manifest file in a cloud storage|
|next_token|query|string|false|Used to continue listing files in the bucket|
|page_size|query|integer|false|none|
|prefix|query|string|false|Prefix to filter data|

> Example responses

> 200 Response

```json
{
  "next": "string",
  "content": [
    {
      "name": "string",
      "type": "REG",
      "mime_type": "string"
    }
  ]
}
```

<h3 id="get-cloud-storage-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A manifest content|[CloudStorageContent](#schemacloudstoragecontent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get a preview image for a cloud storage

<a id="opIdcloudstorages_retrieve_preview"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0/preview \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cloudstorages/{id}/preview`

<h3 id="get-a-preview-image-for-a-cloud-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|

<h3 id="get-a-preview-image-for-a-cloud-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cloud Storage preview|None|
|400|Bad Request|Failed to get cloud storage preview|None|
|404|Not Found|Cloud Storage preview not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get the status of a cloud storage

<a id="opIdcloudstorages_retrieve_status"></a>

> Code samples

```bash
curl http://localhost:8080/api/cloudstorages/0/status \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/cloudstorages/{id}/status`

<h3 id="get-the-status-of-a-cloud-storage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this cloud storage.|

> Example responses

> 200 Response

```json
"AVAILABLE"
```

<h3 id="get-the-status-of-a-cloud-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cloud Storage Status|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-comments">comments</h1>

## List comments

<a id="opIdcomments_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/comments \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/comments`

<h3 id="list-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['frame_id', 'id', 'issue_id', 'job_id', 'owner'].|
|frame_id|query|integer|false|A simple equality filter for the frame_id field|
|issue_id|query|integer|false|A simple equality filter for the issue_id field|
|job_id|query|integer|false|A simple equality filter for the job_id field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|search|query|string|false|A search term. Available search_fields: ['owner']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['frame_id', 'id', 'issue_id', 'job_id', 'owner']|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "issue": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "message": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedCommentReadList](#schemapaginatedcommentreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a comment

<a id="opIdcomments_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "issue": 0,
    "message": "string"
  }'
```

`POST /api/comments`

> Body parameter

```json
{
  "issue": 0,
  "message": "string"
}
```

<h3 id="create-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[CommentWriteRequest](#schemacommentwriterequest)|true|none|
|» issue|body|integer|true|none|
|» message|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "issue": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "message": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CommentRead](#schemacommentread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get comment details

<a id="opIdcomments_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/comments/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/comments/{id}`

<h3 id="get-comment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this comment.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "issue": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "message": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-comment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CommentRead](#schemacommentread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a comment

<a id="opIdcomments_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/comments/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/comments/{id}`

<h3 id="delete-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this comment.|

<h3 id="delete-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The comment has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a comment

<a id="opIdcomments_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/comments/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "message": "string"
  }'
```

`PATCH /api/comments/{id}`

> Body parameter

```json
{
  "message": "string"
}
```

<h3 id="update-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this comment.|
|body|body|[PatchedCommentWriteRequest](#schemapatchedcommentwriterequest)|false|none|
|» message|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "issue": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "message": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CommentRead](#schemacommentread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-consensus">consensus</h1>

## Create a consensus merge

<a id="opIdconsensus_create_merge"></a>

> Code samples

```bash
curl http://localhost:8080/api/consensus/merges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "task_id": 0,
    "job_id": 0
  }'
```

`POST /api/consensus/merges`

> Body parameter

```json
{
  "task_id": 0,
  "job_id": 0
}
```

<h3 id="create-a-consensus-merge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConsensusMergeCreateRequest](#schemaconsensusmergecreaterequest)|false|none|
|» task_id|body|integer|false|none|
|» job_id|body|integer|false|none|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="create-a-consensus-merge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A consensus merge request has been enqueued, the request id is returned.<br>The request status can be checked by using common requests API: GET /api/requests/<rq_id><br>|[RqId](#schemarqid)|
|400|Bad Request|Invalid or failed request, check the response data for details|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## List consensus settings instances

<a id="opIdconsensus_list_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/consensus/settings \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/consensus/settings`

<h3 id="list-consensus-settings-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['id', 'task_id'].|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['id']|
|task_id|query|integer|false|A simple equality filter for the task_id field|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "task_id": 0,
      "iou_threshold": 0
    }
  ]
}
```

<h3 id="list-consensus-settings-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedConsensusSettingsList](#schemapaginatedconsensussettingslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get consensus settings instance details

<a id="opIdconsensus_retrieve_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/consensus/settings/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/consensus/settings/{id}`

<h3 id="get-consensus-settings-instance-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|An id of a consensus settings instance|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "iou_threshold": 0
}
```

<h3 id="get-consensus-settings-instance-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsensusSettings](#schemaconsensussettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a consensus settings instance

<a id="opIdconsensus_partial_update_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/consensus/settings/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "iou_threshold": 0
  }'
```

`PATCH /api/consensus/settings/{id}`

> Body parameter

```json
{
  "iou_threshold": 0
}
```

<h3 id="update-a-consensus-settings-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|An id of a consensus settings instance|
|body|body|[PatchedConsensusSettingsRequest](#schemapatchedconsensussettingsrequest)|false|none|
|» iou_threshold|body|number(double)|false|Pairwise annotation matching IoU threshold|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "iou_threshold": 0
}
```

<h3 id="update-a-consensus-settings-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ConsensusSettings](#schemaconsensussettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-events">events</h1>

## Get an event log

<a id="opIdevents_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/events \
  -H "Authorization: ${API_KEY}"
```

`GET /api/events`

<aside class="warning">
This operation is deprecated
</aside>

The log is returned in the CSV format.

<h3 id="get-an-event-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|Used to start downloading process after annotation file had been created|
|filename|query|string|false|Desired output file name|
|from|query|string(date-time)|false|UTC start date for events filtration. Default is the minimal time.|
|job_id|query|integer|false|Filter events by job ID|
|org_id|query|integer|false|Filter events by organization ID|
|project_id|query|integer|false|Filter events by project ID|
|query_id|query|string|false|ID of query request that need to check or download|
|task_id|query|integer|false|Filter events by task ID|
|to|query|string(date-time)|false|UTC end date for events filtration. Default is the current time.|
|user_id|query|integer|false|Filter events by user ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|download|

<h3 id="get-an-event-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Download of file started|None|
|201|Created|CSV log file is ready for downloading|None|
|202|Accepted|Creating a CSV log file has been started|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Log client events

<a id="opIdevents_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "events": [],
    "previous_event": {
      "scope": "string",
      "obj_name": "string",
      "obj_id": 0,
      "obj_val": "string",
      "source": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "count": 0,
      "duration": 0,
      "project_id": 0,
      "task_id": 0,
      "job_id": 0,
      "user_id": 0,
      "user_name": "string",
      "user_email": "string",
      "org_id": 0,
      "org_slug": "string",
      "payload": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/events`

Sends logs to the Clickhouse if it is connected

> Body parameter

```json
{
  "events": [],
  "previous_event": {
    "scope": "string",
    "obj_name": "string",
    "obj_id": 0,
    "obj_val": "string",
    "source": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "count": 0,
    "duration": 0,
    "project_id": 0,
    "task_id": 0,
    "job_id": 0,
    "user_id": 0,
    "user_name": "string",
    "user_email": "string",
    "org_id": 0,
    "org_slug": "string",
    "payload": "string"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="log-client-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[ClientEventsRequest](#schemaclienteventsrequest)|true|none|
|» events|body|[[EventRequest](#schemaeventrequest)]|false|none|
|» previous_event|body|object \| null|false|none|
|» » scope|body|string|true|none|
|» » obj_name|body|string \| null|false|none|
|» » obj_id|body|integer \| null|false|none|
|» » obj_val|body|string \| null|false|none|
|» » source|body|string \| null|false|none|
|» » timestamp|body|string(date-time)|true|none|
|» » count|body|integer \| null|false|none|
|» » duration|body|integer|false|none|
|» » project_id|body|integer \| null|false|none|
|» » task_id|body|integer \| null|false|none|
|» » job_id|body|integer \| null|false|none|
|» » user_id|body|integer \| null|false|none|
|» » user_name|body|string \| null|false|none|
|» » user_email|body|string \| null|false|none|
|» » org_id|body|integer \| null|false|none|
|» » org_slug|body|string \| null|false|none|
|» » payload|body|string \| null|false|none|
|» timestamp|body|string(date-time)|true|none|

> Example responses

> 201 Response

```json
{
  "events": [],
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="log-client-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ClientEvents](#schemaclientevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Initiate a process to export events

<a id="opIdevents_create_export"></a>

> Code samples

```bash
curl http://localhost:8080/api/events/export \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/events/export`

<h3 id="initiate-a-process-to-export-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Desired output file name|
|from|query|string(date-time)|false|UTC start date for events filtration. Default is the minimal time.|
|job_id|query|integer|false|Filter events by job ID|
|location|query|string|false|Where need to save events file|
|org_id|query|integer|false|Filter events by organization ID|
|project_id|query|integer|false|Filter events by project ID|
|task_id|query|integer|false|Filter events by task ID|
|to|query|string(date-time)|false|UTC end date for events filtration. Default is the current time.|
|user_id|query|integer|false|Filter events by user ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="initiate-a-process-to-export-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-growth">growth</h1>

## List growth data

<a id="opIdgrowth_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/growth \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/growth`

<h3 id="list-growth-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['id', 'user_id'].|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['id']|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "github_prompt_shown": true,
      "github_prompt_support_clicked": true,
      "github_prompt_enabled": true,
      "promotion_notifications_allowed": true
    }
  ]
}
```

<h3 id="list-growth-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedUserGrowthDataList](#schemapaginatedusergrowthdatalist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get growth data

<a id="opIdgrowth_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/growth/string \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/growth/{id}`

<h3 id="get-growth-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "github_prompt_shown": true,
  "github_prompt_support_clicked": true,
  "github_prompt_enabled": true,
  "promotion_notifications_allowed": true
}
```

<h3 id="get-growth-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserGrowthData](#schemausergrowthdata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update growth data

<a id="opIdgrowth_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/growth/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "github_prompt_shown": true,
    "github_prompt_support_clicked": true,
    "promotion_notifications_allowed": true
  }'
```

`PATCH /api/growth/{id}`

> Body parameter

```json
{
  "github_prompt_shown": true,
  "github_prompt_support_clicked": true,
  "promotion_notifications_allowed": true
}
```

<h3 id="update-growth-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[PatchedUserGrowthDataRequest](#schemapatchedusergrowthdatarequest)|false|none|
|» github_prompt_shown|body|boolean|false|none|
|» github_prompt_support_clicked|body|boolean|false|none|
|» promotion_notifications_allowed|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "github_prompt_shown": true,
  "github_prompt_support_clicked": true,
  "github_prompt_enabled": true,
  "promotion_notifications_allowed": true
}
```

<h3 id="update-growth-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UserGrowthData](#schemausergrowthdata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-guides">guides</h1>

## Create an annotation guide

<a id="opIdguides_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/guides \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "task_id": 0,
    "project_id": 0,
    "markdown": "string"
  }'
```

`POST /api/guides`

The new guide will be bound either to a project or a task, depending on parameters.

> Body parameter

```json
{
  "task_id": 0,
  "project_id": 0,
  "markdown": "string"
}
```

<h3 id="create-an-annotation-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnnotationGuideWriteRequest](#schemaannotationguidewriterequest)|false|none|
|» task_id|body|integer \| null|false|none|
|» project_id|body|integer \| null|false|none|
|» markdown|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "markdown": "string"
}
```

<h3 id="create-an-annotation-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[AnnotationGuideRead](#schemaannotationguideread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get annotation guide details

<a id="opIdguides_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/guides/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/guides/{id}`

<h3 id="get-annotation-guide-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this annotation guide.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "markdown": "string"
}
```

<h3 id="get-annotation-guide-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationGuideRead](#schemaannotationguideread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete an annotation guide

<a id="opIdguides_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/guides/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/guides/{id}`

This also deletes all assets attached to the guide.

<h3 id="delete-an-annotation-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this annotation guide.|

<h3 id="delete-an-annotation-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The annotation guide has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update an annotation guide

<a id="opIdguides_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/guides/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "task_id": 0,
    "project_id": 0,
    "markdown": "string"
  }'
```

`PATCH /api/guides/{id}`

> Body parameter

```json
{
  "task_id": 0,
  "project_id": 0,
  "markdown": "string"
}
```

<h3 id="update-an-annotation-guide-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this annotation guide.|
|body|body|[PatchedAnnotationGuideWriteRequest](#schemapatchedannotationguidewriterequest)|false|none|
|» task_id|body|integer \| null|false|none|
|» project_id|body|integer \| null|false|none|
|» markdown|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "markdown": "string"
}
```

<h3 id="update-an-annotation-guide-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationGuideRead](#schemaannotationguideread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-invitations">invitations</h1>

## List invitations

<a id="opIdinvitations_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/invitations`

<h3 id="list-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|accepted|query|boolean|false|A simple equality filter for the accepted field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['accepted', 'id', 'owner', 'user_id'].|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|search|query|string|false|A search term. Available search_fields: ['owner']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['accepted', 'created_date', 'owner', 'user_id']|
|user_id|query|integer|false|A simple equality filter for the user_id field|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "key": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "role": "worker",
      "user": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "organization": 0,
      "expired": true,
      "accepted": true,
      "organization_info": {
        "id": 0,
        "slug": "string"
      }
    }
  ]
}
```

<h3 id="list-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedInvitationReadList](#schemapaginatedinvitationreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create an invitation

<a id="opIdinvitations_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "role": "worker",
    "email": "user@example.com"
  }'
```

`POST /api/invitations`

> Body parameter

```json
{
  "role": "worker",
  "email": "user@example.com"
}
```

<h3 id="create-an-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[InvitationWriteRequest](#schemainvitationwriterequest)|true|none|
|» role|body|[RoleEnum](#schemaroleenum)|true|* `worker` - Worker<br>* `supervisor` - Supervisor<br>* `maintainer` - Maintainer<br>* `owner` - Owner|
|» email|body|string(email)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|worker|
|» role|supervisor|
|» role|maintainer|
|» role|owner|

> Example responses

> 201 Response

```json
{
  "key": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "role": "worker",
  "user": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "organization": 0,
  "expired": true,
  "accepted": true,
  "organization_info": {
    "id": 0,
    "slug": "string"
  }
}
```

<h3 id="create-an-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[InvitationRead](#schemainvitationread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get invitation details

<a id="opIdinvitations_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations/string \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/invitations/{key}`

<h3 id="get-invitation-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|A unique value identifying this invitation.|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "role": "worker",
  "user": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "organization": 0,
  "expired": true,
  "accepted": true,
  "organization_info": {
    "id": 0,
    "slug": "string"
  }
}
```

<h3 id="get-invitation-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[InvitationRead](#schemainvitationread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete an invitation

<a id="opIdinvitations_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/invitations/{key}`

<h3 id="delete-an-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|A unique value identifying this invitation.|

<h3 id="delete-an-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The invitation has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Accept an invitation

<a id="opIdinvitations_accept"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations/string/accept \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/invitations/{key}/accept`

<h3 id="accept-an-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|A unique value identifying this invitation.|

> Example responses

> 200 Response

```json
{
  "organization_slug": "string"
}
```

<h3 id="accept-an-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The invitation is accepted|[AcceptInvitationRead](#schemaacceptinvitationread)|
|400|Bad Request|The invitation is expired or already accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Decline an invitation

<a id="opIdinvitations_decline"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations/string/decline \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/invitations/{key}/decline`

<h3 id="decline-an-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|A unique value identifying this invitation.|

<h3 id="decline-an-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The invitation has been declined|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Resend an invitation

<a id="opIdinvitations_resend"></a>

> Code samples

```bash
curl http://localhost:8080/api/invitations/string/resend \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/invitations/{key}/resend`

<h3 id="resend-an-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|A unique value identifying this invitation.|

<h3 id="resend-an-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Invitation has been sent|None|
|400|Bad Request|The invitation is already accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-issues">issues</h1>

## List issues

<a id="opIdissues_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/issues \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/issues`

<h3 id="list-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|assignee|query|string|false|A simple equality filter for the assignee field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['assignee', 'frame_id', 'id', 'job_id', 'owner', 'resolved', 'task_id'].|
|frame_id|query|integer|false|A simple equality filter for the frame_id field|
|job_id|query|integer|false|A simple equality filter for the job_id field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|resolved|query|boolean|false|A simple equality filter for the resolved field|
|search|query|string|false|A search term. Available search_fields: ['assignee', 'owner']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['assignee', 'frame_id', 'id', 'job_id', 'owner', 'resolved', 'task_id']|
|task_id|query|integer|false|A simple equality filter for the task_id field|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "frame": 0,
      "position": [
        0
      ],
      "job": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "resolved": true,
      "comments": {
        "count": 0,
        "url": "http://example.com"
      }
    }
  ]
}
```

<h3 id="list-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedIssueReadList](#schemapaginatedissuereadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create an issue

<a id="opIdissues_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/issues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "frame": 0,
    "position": [
      0
    ],
    "job": 0,
    "assignee": 0,
    "message": "string",
    "resolved": true
  }'
```

`POST /api/issues`

> Body parameter

```json
{
  "frame": 0,
  "position": [
    0
  ],
  "job": 0,
  "assignee": 0,
  "message": "string",
  "resolved": true
}
```

<h3 id="create-an-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[IssueWriteRequest](#schemaissuewriterequest)|true|none|
|» frame|body|integer|true|none|
|» position|body|[number(double)]|true|none|
|» job|body|integer|true|none|
|» assignee|body|integer \| null|false|none|
|» message|body|string|true|none|
|» resolved|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "frame": 0,
  "position": [
    0
  ],
  "job": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "resolved": true,
  "comments": {
    "count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="create-an-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[IssueRead](#schemaissueread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get issue details

<a id="opIdissues_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/issues/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/issues/{id}`

<h3 id="get-issue-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this issue.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "frame": 0,
  "position": [
    0
  ],
  "job": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "resolved": true,
  "comments": {
    "count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="get-issue-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IssueRead](#schemaissueread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete an issue

<a id="opIdissues_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/issues/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/issues/{id}`

<h3 id="delete-an-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this issue.|

<h3 id="delete-an-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The issue has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update an issue

<a id="opIdissues_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/issues/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "position": [
      0
    ],
    "assignee": 0,
    "resolved": true
  }'
```

`PATCH /api/issues/{id}`

> Body parameter

```json
{
  "position": [
    0
  ],
  "assignee": 0,
  "resolved": true
}
```

<h3 id="update-an-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this issue.|
|body|body|[PatchedIssueWriteRequest](#schemapatchedissuewriterequest)|false|none|
|» position|body|[number(double)]|false|none|
|» assignee|body|integer \| null|false|none|
|» resolved|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "frame": 0,
  "position": [
    0
  ],
  "job": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "resolved": true,
  "comments": {
    "count": 0,
    "url": "http://example.com"
  }
}
```

<h3 id="update-an-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[IssueRead](#schemaissueread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-jobs">jobs</h1>

## List jobs

<a id="opIdjobs_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs`

<h3 id="list-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|assignee|query|string|false|A simple equality filter for the assignee field|
|dimension|query|string|false|A simple equality filter for the dimension field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['assignee', 'dimension', 'id', 'media_type', 'mode', 'parent_job_id', 'project_id', 'project_name', 'stage', 'state', 'task_id', 'task_name', 'type', 'updated_date'].|
|media_type|query|string|false|A simple equality filter for the media_type field|
|mode|query|string|false|A simple equality filter for the mode field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|parent_job_id|query|integer|false|A simple equality filter for the parent_job_id field|
|project_id|query|integer|false|A simple equality filter for the project_id field|
|project_name|query|string|false|A simple equality filter for the project_name field|
|search|query|string|false|A search term. Available search_fields: ['assignee', 'project_name', 'task_name']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['assignee', 'dimension', 'id', 'media_type', 'mode', 'parent_job_id', 'project_id', 'project_name', 'stage', 'state', 'task_id', 'task_name', 'type', 'updated_date']|
|stage|query|string|false|A simple equality filter for the stage field|
|state|query|string|false|A simple equality filter for the state field|
|task_id|query|integer|false|A simple equality filter for the task_id field|
|task_name|query|string|false|A simple equality filter for the task_name field|
|type|query|string|false|A simple equality filter for the type field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dimension|1d|
|dimension|2d|
|dimension|3d|
|media_type|image|
|media_type|point_cloud|
|media_type|audio|
|mode|annotation|
|mode|interpolation|
|stage|annotation|
|stage|validation|
|stage|acceptance|
|state|new|
|state|in progress|
|state|completed|
|state|rejected|
|type|annotation|
|type|ground_truth|
|type|replica|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "task_id": 0,
      "task_name": "string",
      "project_id": 0,
      "project_name": "string",
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "guide_id": 0,
      "dimension": "string",
      "mode": "string",
      "media_type": "string",
      "bug_tracker": "string",
      "status": {},
      "stage": {},
      "state": {},
      "frame_count": 0,
      "start_frame": -2147483648,
      "stop_frame": -2147483648,
      "data_chunk_size": 0,
      "data_compressed_chunk_type": {},
      "data_original_chunk_type": {},
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "issues": {
        "url": "http://example.com",
        "count": 0
      },
      "labels": {
        "url": "http://example.com"
      },
      "type": {},
      "organization": 0,
      "target_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "source_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "assignee_updated_date": "1970-01-01T00:00:00Z",
      "parent_job_id": 0,
      "replicas_count": 0
    }
  ]
}
```

<h3 id="list-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedJobReadList](#schemapaginatedjobreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a job

<a id="opIdjobs_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "type": "ground_truth",
    "task_id": 42,
    "frame_selection_method": "random_uniform",
    "frame_count": 10,
    "random_seed": 1
  }'
```

`POST /api/jobs`

> Body parameter

```json
{
  "type": "ground_truth",
  "task_id": 42,
  "frame_selection_method": "random_uniform",
  "frame_count": 10,
  "random_seed": 1
}
```

<h3 id="create-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobWriteRequest](#schemajobwriterequest)|true|none|
|» *oneOf*|body|[GroundTruthJobCreateRequest](#schemagroundtruthjobcreaterequest)|false|none|
|» *oneOf*|body|[ReplicaJobCreateRequest](#schemareplicajobcreaterequest)|false|none|

> Example responses

> 201 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "task_id": 0,
  "task_name": "string",
  "project_id": 0,
  "project_name": "string",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "bug_tracker": "string",
  "status": {},
  "stage": {},
  "state": {},
  "frame_count": 0,
  "start_frame": -2147483648,
  "stop_frame": -2147483648,
  "data_chunk_size": 0,
  "data_compressed_chunk_type": {},
  "data_original_chunk_type": {},
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "issues": {
    "url": "http://example.com",
    "count": 0
  },
  "labels": {
    "url": "http://example.com"
  },
  "type": {},
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "parent_job_id": 0,
  "replicas_count": 0
}
```

<h3 id="create-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[JobRead](#schemajobread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get job details

<a id="opIdjobs_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs/{id}`

<h3 id="get-job-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "task_id": 0,
  "task_name": "string",
  "project_id": 0,
  "project_name": "string",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "bug_tracker": "string",
  "status": {},
  "stage": {},
  "state": {},
  "frame_count": 0,
  "start_frame": -2147483648,
  "stop_frame": -2147483648,
  "data_chunk_size": 0,
  "data_compressed_chunk_type": {},
  "data_original_chunk_type": {},
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "issues": {
    "url": "http://example.com",
    "count": 0
  },
  "labels": {
    "url": "http://example.com"
  },
  "type": {},
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "parent_job_id": 0,
  "replicas_count": 0
}
```

<h3 id="get-job-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JobRead](#schemajobread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a job

<a id="opIdjobs_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/jobs/{id}`

Related annotations will be deleted as well.

Please note, that not every job can be removed. Currently,
it is only available for Ground Truth and replica jobs.


<h3 id="delete-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|

<h3 id="delete-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The job has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a job

<a id="opIdjobs_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "assignee": 0,
    "stage": "annotation",
    "state": "new"
  }'
```

`PATCH /api/jobs/{id}`

> Body parameter

```json
{
  "assignee": 0,
  "stage": "annotation",
  "state": "new"
}
```

<h3 id="update-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|
|body|body|[PatchedJobWriteRequest](#schemapatchedjobwriterequest)|false|none|
|» assignee|body|integer \| null|false|none|
|» stage|body|[JobStage](#schemajobstage)|false|* `annotation` - ANNOTATION<br>* `validation` - VALIDATION<br>* `acceptance` - ACCEPTANCE|
|» state|body|[OperationStatus](#schemaoperationstatus)|false|* `new` - NEW<br>* `in progress` - IN_PROGRESS<br>* `completed` - COMPLETED<br>* `rejected` - REJECTED|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» stage|annotation|
|» stage|validation|
|» stage|acceptance|
|» state|new|
|» state|in progress|
|» state|completed|
|» state|rejected|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "task_id": 0,
  "task_name": "string",
  "project_id": 0,
  "project_name": "string",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "bug_tracker": "string",
  "status": {},
  "stage": {},
  "state": {},
  "frame_count": 0,
  "start_frame": -2147483648,
  "stop_frame": -2147483648,
  "data_chunk_size": 0,
  "data_compressed_chunk_type": {},
  "data_original_chunk_type": {},
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "issues": {
    "url": "http://example.com",
    "count": 0
  },
  "labels": {
    "url": "http://example.com"
  },
  "type": {},
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "parent_job_id": 0,
  "replicas_count": 0
}
```

<h3 id="update-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JobRead](#schemajobread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get job annotations

<a id="opIdjobs_retrieve_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/annotations/ \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs/{id}/annotations/`

Deprecation warning:

Utilizing this endpoint to export job dataset in a specific format
is no longer possible.

Consider using new API:
- `POST /api/jobs/<job_id>/dataset/export?save_images=True` to initiate export process
- `GET /api/requests/<rq_id>` to check process status,
    where `rq_id` is request id returned on initializing request
- `GET result_url` to download a prepared file,
    where `result_url` can be found in the response on checking status request


<h3 id="get-job-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|**Deprecated.** This parameter is no longer supported|
|cloud_storage_id|query|integer|false|**Deprecated.** This parameter is no longer supported|
|filename|query|string|false|**Deprecated.** This parameter is no longer supported|
|format|query|string|false|**Deprecated.** This parameter is no longer supported|
|id|path|integer|true|A unique integer value identifying this job.|
|location|query|string|false|**Deprecated.** This parameter is no longer supported|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 200 Response

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="get-job-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LabeledData](#schemalabeleddata)|
|410|Gone|API endpoint no longer handles dataset exporting process|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Replace job annotations

<a id="opIdjobs_update_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/annotations/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "version": 0,
    "tags": [],
    "shapes": [],
    "tracks": [],
    "intervals": []
  }'
```

`PUT /api/jobs/{id}/annotations/`

> Body parameter

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="replace-job-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|
|body|body|[LabeledDataRequest](#schemalabeleddatarequest)|false|none|
|» version|body|integer|false|none|
|» tags|body|[[LabeledImageRequest](#schemalabeledimagerequest)]|false|none|
|» shapes|body|[[LabeledShapeRequest](#schemalabeledshaperequest)]|false|none|
|» tracks|body|[[LabeledTrackRequest](#schemalabeledtrackrequest)]|false|none|
|» intervals|body|[[LabeledIntervalRequest](#schemalabeledintervalrequest)]|false|none|

<h3 id="replace-job-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Annotations have been replaced|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Import annotations into a job

<a id="opIdjobs_create_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/annotations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "annotation_file": "string"
  }'
```

`POST /api/jobs/{id}/annotations/`


The request POST /api/jobs/id/annotations initiates a background process to import annotations into a job.
Please, use the GET /api/requests/<rq_id> endpoint for checking status of the process.
The `rq_id` parameter can be found in the response on initiating request.


> Body parameter

```json
{
  "annotation_file": "string"
}
```

<h3 id="import-annotations-into-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Annotation file name|
|format|query|string|false|Input format name<br>You can get the list of supported formats at:<br>/server/annotation/formats|
|id|path|integer|true|A unique integer value identifying this job.|
|import_mode|query|string|false|How to import annotations|
|location|query|string|false|where to import the annotation from|
|use_default_location|query|boolean|false|**Deprecated.** Use the location that was configured in the task to import annotation|
|body|body|[AnnotationFileRequest](#schemaannotationfilerequest)|false|none|
|» annotation_file|body|string(binary)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|import_mode|append|
|import_mode|replace|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="import-annotations-into-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Uploading has finished|None|
|202|Accepted|Uploading has been started|[RqId](#schemarqid)|
|405|Method Not Allowed|Format is not available|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete job annotations

<a id="opIdjobs_destroy_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/annotations/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/jobs/{id}/annotations/`

<h3 id="delete-job-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|

<h3 id="delete-job-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The annotation has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update job annotations

<a id="opIdjobs_partial_update_annotations"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/jobs/0/annotations/?action=create' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "version": 0,
    "tags": [],
    "shapes": [],
    "tracks": [],
    "intervals": []
  }'
```

`PATCH /api/jobs/{id}/annotations/`

> Body parameter

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="update-job-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|none|
|id|path|integer|true|A unique integer value identifying this job.|
|body|body|[PatchedLabeledDataRequest](#schemapatchedlabeleddatarequest)|false|none|
|» version|body|integer|false|none|
|» tags|body|[[LabeledImageRequest](#schemalabeledimagerequest)]|false|none|
|» shapes|body|[[LabeledShapeRequest](#schemalabeledshaperequest)]|false|none|
|» tracks|body|[[LabeledTrackRequest](#schemalabeledtrackrequest)]|false|none|
|» intervals|body|[[LabeledIntervalRequest](#schemalabeledintervalrequest)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|create|
|action|delete|
|action|update|

<h3 id="update-job-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Annotations successfully uploaded|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get data of a job

<a id="opIdjobs_retrieve_data"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/jobs/0/data?type=chunk' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs/{id}/data`

<h3 id="get-data-of-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|
|index|query|integer|false|A unique number value identifying chunk, starts from 0 for each job|
|number|query|integer|false|A unique number value identifying chunk or frame. The numbers are the same as for the task. Deprecated for chunks in favor of 'index'|
|quality|query|string|false|Specifies the quality level of the requested data|
|type|query|string|true|Specifies the type of the requested data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|quality|compressed|
|quality|original|
|type|chunk|
|type|context_image|
|type|frame|

> Example responses

> 200 Response

```json
"string"
```

> 206 Response

```json
"string"
```

<h3 id="get-data-of-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data of a specific type|Inline|
|206|Partial Content|Partial chunk data|Inline|
|416|Range Not Satisfiable|Requested range is not satisfiable|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Checksum|string||Data checksum, applicable for chunks only|
|200|X-Chunk-Size|integer||Decoded chunk size in bytes, applicable for chunks only|
|200|X-Updated-Date|string|date-time|Data update date, applicable for chunks only|
|206|X-Checksum|string||Data checksum, applicable for chunks only|
|206|X-Chunk-Size|integer||Decoded chunk size in bytes, applicable for chunks only|
|206|X-Updated-Date|string|date-time|Data update date, applicable for chunks only|
|416|X-Chunk-Size|integer||Decoded chunk size in bytes, applicable for chunks only|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get metainformation for media files in a job

<a id="opIdjobs_retrieve_data_meta"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/data/meta \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs/{id}/data/meta`

<h3 id="get-metainformation-for-media-files-in-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|

> Example responses

> 200 Response

```json
{
  "chapters": [
    {
      "id": 0,
      "start": 0,
      "stop": 0,
      "metadata": {
        "title": "string"
      }
    }
  ],
  "chunks_updated_date": "1970-01-01T00:00:00Z",
  "chunk_size": 0,
  "size": 0,
  "image_quality": 0,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "frames": [
    {
      "width": 0,
      "height": 0,
      "name": "string",
      "related_files": 0,
      "has_related_context": true
    }
  ],
  "deleted_frames": [
    0
  ],
  "included_frames": [
    0
  ],
  "storage": {},
  "cloud_storage_id": 0
}
```

<h3 id="get-metainformation-for-media-files-in-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DataMetaRead](#schemadatametaread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update metainformation for media files in a job

<a id="opIdjobs_partial_update_data_meta"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/data/meta \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "deleted_frames": [
      0
    ]
  }'
```

`PATCH /api/jobs/{id}/data/meta`

> Body parameter

```json
{
  "deleted_frames": [
    0
  ]
}
```

<h3 id="update-metainformation-for-media-files-in-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|
|body|body|[PatchedJobDataMetaWriteRequest](#schemapatchedjobdatametawriterequest)|false|none|
|» deleted_frames|body|[integer]|false|none|

> Example responses

> 200 Response

```json
{
  "chapters": [
    {
      "id": 0,
      "start": 0,
      "stop": 0,
      "metadata": {
        "title": "string"
      }
    }
  ],
  "chunks_updated_date": "1970-01-01T00:00:00Z",
  "chunk_size": 0,
  "size": 0,
  "image_quality": 0,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "frames": [
    {
      "width": 0,
      "height": 0,
      "name": "string",
      "related_files": 0,
      "has_related_context": true
    }
  ],
  "deleted_frames": [
    0
  ],
  "included_frames": [
    0
  ],
  "storage": {},
  "cloud_storage_id": 0
}
```

<h3 id="update-metainformation-for-media-files-in-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DataMetaRead](#schemadatametaread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Initialize process to export resource as a dataset in a specific format

<a id="opIdjobs_create_dataset_export"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/jobs/0/dataset/export?format=string' \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/jobs/{id}/dataset/export`

The request `POST /api/<projects|tasks|jobs>/id/dataset/export` will initialize
a background process to export a dataset. To check status of the process
please, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.


<h3 id="initialize-process-to-export-resource-as-a-dataset-in-a-specific-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Desired output file name|
|format|query|string|true|Desired output format name<br>You can get the list of supported formats at:<br>/server/annotation/formats|
|id|path|integer|true|A unique integer value identifying this job.|
|location|query|string|false|Where need to save downloaded dataset|
|save_images|query|boolean|false|Include images or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

> 409 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="initialize-process-to-export-resource-as-a-dataset-in-a-specific-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Exporting has been started|[RqId](#schemarqid)|
|405|Method Not Allowed|Format is not available|None|
|409|Conflict|Exporting is already in progress|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get a preview image for a job

<a id="opIdjobs_retrieve_preview"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/preview \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs/{id}/preview`

<h3 id="get-a-preview-image-for-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|RFC 7240 preference token. Send `handling=empty` to receive a 204 No Content response when no media-derived preview exists. Without the preference, the server returns a default placeholder image with status 200.|
|id|path|integer|true|A unique integer value identifying this job.|

<h3 id="get-a-preview-image-for-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job image preview|None|
|204|No Content|No media-derived preview is available. The client should render a placeholder image. Only returned when the request opts in via `Prefer: handling=empty`.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Allows getting current validation configuration

<a id="opIdjobs_retrieve_validation_layout"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/validation_layout \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/jobs/{id}/validation_layout`

<h3 id="allows-getting-current-validation-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|

> Example responses

> 200 Response

```json
{
  "honeypot_count": 0,
  "honeypot_frames": [
    0
  ],
  "honeypot_real_frames": [
    0
  ]
}
```

<h3 id="allows-getting-current-validation-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JobValidationLayoutRead](#schemajobvalidationlayoutread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Allows updating current validation configuration

<a id="opIdjobs_partial_update_validation_layout"></a>

> Code samples

```bash
curl http://localhost:8080/api/jobs/0/validation_layout \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "frame_selection_method": "random_uniform"
  }'
```

`PATCH /api/jobs/{id}/validation_layout`


WARNING: this operation is not protected from race conditions.
It's up to the user to ensure no parallel calls to this operation happen.
It affects image access, including exports with images, backups, chunk downloading etc.


> Body parameter

```json
{
  "frame_selection_method": "random_uniform"
}
```

<h3 id="allows-updating-current-validation-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this job.|
|body|body|[PatchedJobValidationLayoutWriteRequest](#schemapatchedjobvalidationlayoutwriterequest)|false|none|
|» frame_selection_method|body|object|false|The method to use for frame selection of new real frames for honeypots in the job<br><br><br>* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|» honeypot_real_frames|body|[integer]|false|The list of frame ids. Applicable only to the "manual" frame selection method<br>|

> Example responses

> 200 Response

```json
{
  "honeypot_count": 0,
  "honeypot_frames": [
    0
  ],
  "honeypot_real_frames": [
    0
  ]
}
```

<h3 id="allows-updating-current-validation-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[JobValidationLayoutRead](#schemajobvalidationlayoutread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-labels">labels</h1>

## List labels

<a id="opIdlabels_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/labels \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/labels`

<h3 id="list-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|color|query|string|false|A simple equality filter for the color field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['color', 'id', 'name', 'parent', 'parent_id', 'type'].|
|job_id|query|integer|false|A simple equality filter for job id|
|name|query|string|false|A simple equality filter for the name field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|parent|query|string|false|A simple equality filter for the parent field|
|parent_id|query|integer|false|A simple equality filter for the parent_id field|
|project_id|query|integer|false|A simple equality filter for project id|
|search|query|string|false|A search term. Available search_fields: ['name', 'parent']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['color', 'id', 'name', 'parent', 'parent_id', 'type']|
|task_id|query|integer|false|A simple equality filter for task id|
|type|query|string|false|A simple equality filter for the type field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|any|
|type|cuboid|
|type|ellipse|
|type|mask|
|type|points|
|type|polygon|
|type|polyline|
|type|rectangle|
|type|skeleton|
|type|interval|
|type|tag|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "svg": "string",
      "sublabels": [
        {
          "id": 0,
          "name": "string",
          "color": "string",
          "attributes": [],
          "type": {},
          "has_parent": true
        }
      ],
      "project_id": 0,
      "task_id": 0,
      "parent_id": 0,
      "has_parent": true
    }
  ]
}
```

<h3 id="list-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedLabelList](#schemapaginatedlabellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get label details

<a id="opIdlabels_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/labels/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/labels/{id}`

<h3 id="get-label-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this label.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "type": {},
  "svg": "string",
  "sublabels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "has_parent": true
    }
  ],
  "project_id": 0,
  "task_id": 0,
  "parent_id": 0,
  "has_parent": true
}
```

<h3 id="get-label-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Label](#schemalabel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a label

<a id="opIdlabels_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/labels/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/labels/{id}`

To delete a sublabel, please use the PATCH method of the parent label.

<h3 id="delete-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this label.|

<h3 id="delete-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The label has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a label

<a id="opIdlabels_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/labels/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": 0,
    "name": "string",
    "color": "string",
    "attributes": [],
    "deleted": true,
    "type": {},
    "svg": "string",
    "sublabels": [
      {
        "id": 0,
        "name": "string",
        "color": "string",
        "attributes": [],
        "type": {},
        "has_parent": true
      }
    ]
  }'
```

`PATCH /api/labels/{id}`

To modify a sublabel, please use the PATCH method of the parent label.

> Body parameter

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "deleted": true,
  "type": {},
  "svg": "string",
  "sublabels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "has_parent": true
    }
  ]
}
```

<h3 id="update-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this label.|
|body|body|[PatchedLabelRequest](#schemapatchedlabelrequest)|false|none|
|» id|body|integer|false|none|
|» name|body|string|false|none|
|» color|body|string|false|The hex value for the RGB color. Will be generated automatically, unless specified explicitly.|
|» attributes|body|[[AttributeRequest](#schemaattributerequest)]|false|The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.|
|» deleted|body|boolean|false|Delete the label. Only applicable in the PATCH methods of a project or a task.|
|» type|body|object|false|Associated annotation type for this label<br><br>* `any` - ANY<br>* `cuboid` - CUBOID<br>* `ellipse` - ELLIPSE<br>* `mask` - MASK<br>* `points` - POINTS<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `rectangle` - RECTANGLE<br>* `skeleton` - SKELETON<br>* `interval` - INTERVAL<br>* `tag` - TAG|
|» svg|body|string|false|none|
|» sublabels|body|[[SublabelRequest](#schemasublabelrequest)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "type": {},
  "svg": "string",
  "sublabels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "has_parent": true
    }
  ],
  "project_id": 0,
  "task_id": 0,
  "parent_id": 0,
  "has_parent": true
}
```

<h3 id="update-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Label](#schemalabel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-lambda">lambda</h1>

## Method returns a list of functions

<a id="opIdlambda_list_functions"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/functions \
  -H "Authorization: ${API_KEY}"
```

`GET /api/lambda/functions`

<h3 id="method-returns-a-list-of-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Method returns the information about the function

<a id="opIdlambda_retrieve_functions"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/functions/string \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/lambda/functions/{func_id}`

<h3 id="method-returns-the-information-about-the-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|func_id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="method-returns-the-information-about-the-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Information about the function|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## lambda_create_functions

<a id="opIdlambda_create_functions"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/functions/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job": 0,
    "task": 0
  }'
```

`POST /api/lambda/functions/{func_id}`

Allows to execute a function for immediate computation.

Intended for short-lived executions, useful for interactive calls.

When executed for interactive annotation, the job id must be specified
in the 'job' input field. The task id is not required in this case,
but if it is specified, it must match the job task id.


> Body parameter

```json
{
  "job": 0,
  "task": 0
}
```

<h3 id="lambdacreatefunctions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|func_id|path|string|true|none|
|body|body|[OnlineFunctionCallRequest](#schemaonlinefunctioncallrequest)|false|none|
|» job|body|integer|false|none|
|» task|body|integer|false|none|

<h3 id="lambdacreatefunctions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns function invocation results|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Method returns a list of requests

<a id="opIdlambda_list_requests"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/requests \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/lambda/requests`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "function": {
      "id": "string",
      "task": 0,
      "job": 0,
      "threshold": 0
    },
    "status": "string",
    "progress": 0,
    "enqueued": "1970-01-01T00:00:00Z",
    "started": "1970-01-01T00:00:00Z",
    "ended": "1970-01-01T00:00:00Z",
    "exc_info": "string"
  }
]
```

<h3 id="method-returns-a-list-of-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="method-returns-a-list-of-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FunctionCall](#schemafunctioncall)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Method calls the function

<a id="opIdlambda_create_requests"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "function": "string",
    "task": 0,
    "job": 0,
    "max_distance": 0,
    "threshold": 0,
    "cleanup": false,
    "convMaskToPoly": true,
    "conv_mask_to_poly": true,
    "mapping": {
      "property1": {
        "name": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "sublabels": {
          "property1": {
            "name": "string",
            "attributes": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "name": "string",
            "attributes": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "property2": {
        "name": "string",
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "sublabels": {
          "property1": {
            "name": "string",
            "attributes": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "name": "string",
            "attributes": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      }
    },
    "roi": [
      0,
      0,
      0,
      0
    ]
  }'
```

`POST /api/lambda/requests`

> Body parameter

```json
{
  "function": "string",
  "task": 0,
  "job": 0,
  "max_distance": 0,
  "threshold": 0,
  "cleanup": false,
  "convMaskToPoly": true,
  "conv_mask_to_poly": true,
  "mapping": {
    "property1": {
      "name": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "sublabels": {
        "property1": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "property2": {
      "name": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "sublabels": {
        "property1": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "roi": [
    0,
    0,
    0,
    0
  ]
}
```

<h3 id="method-calls-the-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[FunctionCallRequest](#schemafunctioncallrequest)|true|none|
|» function|body|string|true|The name of the function to execute|
|» task|body|integer|true|The id of the task to be annotated|
|» job|body|integer|false|The id of the job to be annotated|
|» max_distance|body|integer|false|none|
|» threshold|body|number(double)|false|none|
|» cleanup|body|boolean|false|Whether existing annotations should be removed|
|» convMaskToPoly|body|boolean|false|Deprecated; use conv_mask_to_poly instead|
|» conv_mask_to_poly|body|boolean|false|Convert mask shapes to polygons|
|» mapping|body|object|false|Label mapping from the model to the task labels|
|» » **additionalProperties**|body|[LabelMappingEntryRequest](#schemalabelmappingentryrequest)|false|none|
|» roi|body|[integer]|false|Region of interest as [xtl, ytl, xbr, ybr]|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "function": {
    "id": "string",
    "task": 0,
    "job": 0,
    "threshold": 0
  },
  "status": "string",
  "progress": 0,
  "enqueued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "exc_info": "string"
}
```

<h3 id="method-calls-the-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FunctionCall](#schemafunctioncall)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Method returns the status of the request

<a id="opIdlambda_retrieve_requests"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/requests/string \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/lambda/requests/{id}`

<h3 id="method-returns-the-status-of-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Request id|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "function": {
    "id": "string",
    "task": 0,
    "job": 0,
    "threshold": 0
  },
  "status": "string",
  "progress": 0,
  "enqueued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "exc_info": "string"
}
```

<h3 id="method-returns-the-status-of-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[FunctionCall](#schemafunctioncall)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Method cancels the request

<a id="opIdlambda_delete_requests"></a>

> Code samples

```bash
curl http://localhost:8080/api/lambda/requests/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/lambda/requests/{id}`

<h3 id="method-cancels-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Request id|

<h3 id="method-cancels-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-memberships">memberships</h1>

## List memberships

<a id="opIdmemberships_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/memberships \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/memberships`

<h3 id="list-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['id', 'role', 'user'].|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|role|query|string|false|A simple equality filter for the role field|
|search|query|string|false|A search term. Available search_fields: ['user']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['id', 'role', 'user']|
|user|query|string|false|A simple equality filter for the user field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|worker|
|role|supervisor|
|role|maintainer|
|role|owner|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "user": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "organization": 0,
      "is_active": true,
      "joined_date": "1970-01-01T00:00:00Z",
      "role": {},
      "invitation": "string"
    }
  ]
}
```

<h3 id="list-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMembershipReadList](#schemapaginatedmembershipreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get membership details

<a id="opIdmemberships_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/memberships/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/memberships/{id}`

<h3 id="get-membership-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this membership.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "user": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "organization": 0,
  "is_active": true,
  "joined_date": "1970-01-01T00:00:00Z",
  "role": {},
  "invitation": "string"
}
```

<h3 id="get-membership-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipRead](#schemamembershipread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a membership

<a id="opIdmemberships_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/memberships/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/memberships/{id}`

<h3 id="delete-a-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this membership.|

<h3 id="delete-a-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The membership has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a membership

<a id="opIdmemberships_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/memberships/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "role": "worker"
  }'
```

`PATCH /api/memberships/{id}`

> Body parameter

```json
{
  "role": "worker"
}
```

<h3 id="update-a-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this membership.|
|body|body|[PatchedMembershipWriteRequest](#schemapatchedmembershipwriterequest)|false|none|
|» role|body|[RoleEnum](#schemaroleenum)|false|* `worker` - Worker<br>* `supervisor` - Supervisor<br>* `maintainer` - Maintainer<br>* `owner` - Owner|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|worker|
|» role|supervisor|
|» role|maintainer|
|» role|owner|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "user": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "organization": 0,
  "is_active": true,
  "joined_date": "1970-01-01T00:00:00Z",
  "role": {},
  "invitation": "string"
}
```

<h3 id="update-a-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipRead](#schemamembershipread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-organizations">organizations</h1>

## List organizations

<a id="opIdorganizations_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/organizations \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/organizations`

<h3 id="list-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['id', 'name', 'owner', 'slug'].|
|name|query|string|false|A simple equality filter for the name field|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|search|query|string|false|A search term. Available search_fields: ['name', 'owner', 'slug']|
|slug|query|string|false|A simple equality filter for the slug field|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['id', 'name', 'owner', 'slug']|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "slug": "string",
      "name": "string",
      "description": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "contact": null,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      }
    }
  ]
}
```

<h3 id="list-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedOrganizationReadList](#schemapaginatedorganizationreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create an organization

<a id="opIdorganizations_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/organizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "slug": "string",
    "name": "string",
    "description": "string",
    "contact": null
  }'
```

`POST /api/organizations`

> Body parameter

```json
{
  "slug": "string",
  "name": "string",
  "description": "string",
  "contact": null
}
```

<h3 id="create-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrganizationWriteRequest](#schemaorganizationwriterequest)|true|none|
|» slug|body|string|true|none|
|» name|body|string|false|none|
|» description|body|string|false|none|
|» contact|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "slug": "string",
  "name": "string",
  "description": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "contact": null,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

<h3 id="create-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[OrganizationRead](#schemaorganizationread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get organization details

<a id="opIdorganizations_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/organizations/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/organizations/{id}`

<h3 id="get-organization-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this organization.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "slug": "string",
  "name": "string",
  "description": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "contact": null,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

<h3 id="get-organization-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OrganizationRead](#schemaorganizationread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete an organization

<a id="opIdorganizations_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/organizations/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/organizations/{id}`

<h3 id="delete-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this organization.|

<h3 id="delete-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The organization has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update an organization

<a id="opIdorganizations_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/organizations/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "slug": "string",
    "name": "string",
    "description": "string",
    "contact": null
  }'
```

`PATCH /api/organizations/{id}`

> Body parameter

```json
{
  "slug": "string",
  "name": "string",
  "description": "string",
  "contact": null
}
```

<h3 id="update-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this organization.|
|body|body|[PatchedOrganizationWriteRequest](#schemapatchedorganizationwriterequest)|false|none|
|» slug|body|string|false|none|
|» name|body|string|false|none|
|» description|body|string|false|none|
|» contact|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "slug": "string",
  "name": "string",
  "description": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "contact": null,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

<h3 id="update-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OrganizationRead](#schemaorganizationread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-projects">projects</h1>

## List projects

<a id="opIdprojects_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/projects`

<h3 id="list-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|assignee|query|string|false|A simple equality filter for the assignee field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['assignee', 'id', 'name', 'owner', 'status', 'updated_date'].|
|name|query|string|false|A simple equality filter for the name field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|search|query|string|false|A search term. Available search_fields: ['assignee', 'name', 'owner']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['assignee', 'id', 'name', 'owner', 'status', 'updated_date']|
|status|query|string|false|A simple equality filter for the status field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|annotation|
|status|validation|
|status|completed|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "name": "string",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "guide_id": 0,
      "bug_tracker": "string",
      "task_subsets": [
        "string"
      ],
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "status": {},
      "dimension": "string",
      "organization": 0,
      "organization_id": 0,
      "target_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "source_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "tasks": {
        "count": 0,
        "url": "http://example.com"
      },
      "labels": {
        "url": "http://example.com"
      },
      "assignee_updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedProjectReadList](#schemapaginatedprojectreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a project

<a id="opIdprojects_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "labels": [],
    "owner_id": 0,
    "assignee_id": 0,
    "bug_tracker": "string",
    "target_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    },
    "source_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    }
  }'
```

`POST /api/projects`

> Body parameter

```json
{
  "name": "string",
  "labels": [],
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  }
}
```

<h3 id="create-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[ProjectWriteRequest](#schemaprojectwriterequest)|true|none|
|» name|body|string|true|none|
|» labels|body|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|none|
|» owner_id|body|integer \| null|false|none|
|» assignee_id|body|integer \| null|false|none|
|» bug_tracker|body|string|false|none|
|» target_storage|body|object|false|none|
|» » location|body|[LocationEnum](#schemalocationenum)|false|* `cloud_storage` - CLOUD_STORAGE<br>* `local` - LOCAL|
|» » cloud_storage_id|body|integer \| null|false|none|
|» source_storage|body|object|false|none|
|» » location|body|[LocationEnum](#schemalocationenum)|false|* `cloud_storage` - CLOUD_STORAGE<br>* `local` - LOCAL|
|» » cloud_storage_id|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » location|cloud_storage|
|» » location|local|
|» » location|cloud_storage|
|» » location|local|

> Example responses

> 201 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "bug_tracker": "string",
  "task_subsets": [
    "string"
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "status": {},
  "dimension": "string",
  "organization": 0,
  "organization_id": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "tasks": {
    "count": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[ProjectRead](#schemaprojectread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get project details

<a id="opIdprojects_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/projects/{id}`

<h3 id="get-project-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this project.|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "bug_tracker": "string",
  "task_subsets": [
    "string"
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "status": {},
  "dimension": "string",
  "organization": 0,
  "organization_id": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "tasks": {
    "count": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-project-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectRead](#schemaprojectread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a project

<a id="opIdprojects_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/projects/{id}`

<h3 id="delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this project.|

<h3 id="delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The project has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a project

<a id="opIdprojects_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "labels": [],
    "owner_id": 0,
    "assignee_id": 0,
    "bug_tracker": "string",
    "target_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    },
    "source_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    },
    "organization_id": 0
  }'
```

`PATCH /api/projects/{id}`

> Body parameter

```json
{
  "name": "string",
  "labels": [],
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "organization_id": 0
}
```

<h3 id="update-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this project.|
|body|body|[PatchedProjectWriteRequest](#schemapatchedprojectwriterequest)|false|none|
|» name|body|string|false|none|
|» labels|body|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|none|
|» owner_id|body|integer \| null|false|none|
|» assignee_id|body|integer \| null|false|none|
|» bug_tracker|body|string|false|none|
|» target_storage|body|object|false|none|
|» » location|body|[LocationEnum](#schemalocationenum)|false|* `cloud_storage` - CLOUD_STORAGE<br>* `local` - LOCAL|
|» » cloud_storage_id|body|integer \| null|false|none|
|» source_storage|body|object|false|none|
|» » location|body|[LocationEnum](#schemalocationenum)|false|* `cloud_storage` - CLOUD_STORAGE<br>* `local` - LOCAL|
|» » cloud_storage_id|body|integer \| null|false|none|
|» organization_id|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » location|cloud_storage|
|» » location|local|
|» » location|cloud_storage|
|» » location|local|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "bug_tracker": "string",
  "task_subsets": [
    "string"
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "status": {},
  "dimension": "string",
  "organization": 0,
  "organization_id": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "tasks": {
    "count": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ProjectRead](#schemaprojectread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Initiate process to backup resource

<a id="opIdprojects_create_backup_export"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/0/backup/export \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/projects/{id}/backup/export`

The request `POST /api/<projects|tasks>/id/backup/export` will initialize
a background process to backup a resource. To check status of the process
please, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.


<h3 id="initiate-process-to-backup-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Backup file name|
|id|path|integer|true|A unique integer value identifying this project.|
|lightweight|query|boolean|false|Makes a lightweight backup (without media files) for tasks whose media is located in cloud storage|
|location|query|string|false|Where need to save downloaded backup|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

> 409 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="initiate-process-to-backup-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Creating a backup file has been started|[RqId](#schemarqid)|
|400|Bad Request|Wrong query parameters were passed|None|
|409|Conflict|The backup process has already been initiated and is not yet finished|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Import a dataset into a project

<a id="opIdprojects_create_dataset"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/0/dataset/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dataset_file": "string"
  }'
```

`POST /api/projects/{id}/dataset/`


The request POST /api/projects/id/dataset initiates a background process to import dataset into a project.
Please, use the GET /api/requests/<rq_id> endpoint for checking status of the process.
The `rq_id` parameter can be found in the response on initiating request.


> Body parameter

```json
{
  "dataset_file": "string"
}
```

<h3 id="import-a-dataset-into-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Dataset file name|
|format|query|string|false|Desired dataset format name<br>You can get the list of supported formats at:<br>/server/annotation/formats|
|id|path|integer|true|A unique integer value identifying this project.|
|location|query|string|false|Where to import the dataset from|
|body|body|[DatasetFileRequest](#schemadatasetfilerequest)|false|none|
|» dataset_file|body|string(binary)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="import-a-dataset-into-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Importing has been started|[RqId](#schemarqid)|
|400|Bad Request|Failed to import dataset|None|
|405|Method Not Allowed|Format is not available|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Initialize process to export resource as a dataset in a specific format

<a id="opIdprojects_create_dataset_export"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/projects/0/dataset/export?format=string' \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/projects/{id}/dataset/export`

The request `POST /api/<projects|tasks|jobs>/id/dataset/export` will initialize
a background process to export a dataset. To check status of the process
please, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.


<h3 id="initialize-process-to-export-resource-as-a-dataset-in-a-specific-format-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Desired output file name|
|format|query|string|true|Desired output format name<br>You can get the list of supported formats at:<br>/server/annotation/formats|
|id|path|integer|true|A unique integer value identifying this project.|
|location|query|string|false|Where need to save downloaded dataset|
|save_images|query|boolean|false|Include images or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

> 409 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="initialize-process-to-export-resource-as-a-dataset-in-a-specific-format-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Exporting has been started|[RqId](#schemarqid)|
|405|Method Not Allowed|Format is not available|None|
|409|Conflict|Exporting is already in progress|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get a preview image for a project

<a id="opIdprojects_retrieve_preview"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/0/preview \
  -H "Authorization: ${API_KEY}"
```

`GET /api/projects/{id}/preview`

<h3 id="get-a-preview-image-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|RFC 7240 preference token. Send `handling=empty` to receive a 204 No Content response when no media-derived preview exists. Without the preference, the server returns a default placeholder image with status 200.|
|id|path|integer|true|A unique integer value identifying this project.|

<h3 id="get-a-preview-image-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project image preview|None|
|204|No Content|No media-derived preview is available. The client should render a placeholder image. Only returned when the request opts in via `Prefer: handling=empty`.|None|
|404|Not Found|Project image preview not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Recreate a project from a backup

<a id="opIdprojects_create_backup"></a>

> Code samples

```bash
curl http://localhost:8080/api/projects/backup/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "project_file": "string"
  }'
```

`POST /api/projects/backup/`


The backup import process is as follows:

The first request POST /api/projects/backup schedules a background job on the server
in which the process of creating a project from the uploaded backup is carried out.

To check the status of the import process, use GET /api/requests/rq_id,
where rq_id is the request ID obtained from the response to the previous request.

Once the import completes successfully, the response will contain the ID
of the newly created project in the result_id field.


> Body parameter

```json
{
  "project_file": "string"
}
```

<h3 id="recreate-a-project-from-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Backup file name|
|location|query|string|false|Where to import the backup file from|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[ProjectFileRequest](#schemaprojectfilerequest)|false|none|
|» project_file|body|string(binary)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="recreate-a-project-from-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Import of the backup file has started|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-quality">quality</h1>

## List annotation conflicts in a quality report

<a id="opIdquality_list_conflicts"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/conflicts \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/conflicts`

<h3 id="list-annotation-conflicts-in-a-quality-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['frame', 'id', 'job_id', 'project_id', 'severity', 'task_id', 'type'].|
|frame|query|integer|false|A simple equality filter for the frame field|
|job_id|query|integer|false|A simple equality filter for the job_id field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|project_id|query|integer|false|A simple equality filter for the project_id field|
|report_id|query|integer|false|A simple equality filter for report id|
|severity|query|string|false|A simple equality filter for the severity field|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['frame', 'id', 'job_id', 'project_id', 'severity', 'task_id', 'type']|
|task_id|query|integer|false|A simple equality filter for the task_id field|
|type|query|string|false|A simple equality filter for the type field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|severity|error|
|type|missing_annotation|
|type|extra_annotation|
|type|mismatching_label|
|type|mismatching_direction|
|type|mismatching_attributes|
|type|mismatching_groups|
|type|covered_annotation|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "frame": 0,
      "type": {},
      "annotation_ids": [
        {
          "obj_id": 0,
          "job_id": 0,
          "type": {},
          "shape_type": "rectangle"
        }
      ],
      "report_id": 0,
      "severity": {},
      "attribute_names": [
        "string"
      ]
    }
  ]
}
```

<h3 id="list-annotation-conflicts-in-a-quality-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedAnnotationConflictList](#schemapaginatedannotationconflictlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Method returns a paginated list of quality reports.

<a id="opIdquality_list_reports"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/reports \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/reports`

The "target" parameter is required when the "task_id" or "project_id"
filter is used.

The "parent_id" filter requires the "target" parameter. Valid parent
report target to requested target combinations are: task to job,
project to task, and project to job.

Please note that a report can be reused in several parent reports,
but the "parent_id" field in responses will include only the first parent report id.
Filtering project report children with target "job" still returns all the relevant
nested job reports, even though their response "parent_id" values refer to task reports.


<h3 id="method-returns-a-paginated-list-of-quality-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['created_date', 'gt_last_updated', 'id', 'job_id', 'project_id', 'target_last_updated', 'task_id'].|
|include_legacy|query|boolean|false|Include reports stored in the legacy data format|
|job_id|query|integer|false|A simple equality filter for the job_id field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|parent_id|query|integer|false|A parent report id filter. Requires a compatible target filter|
|project_id|query|integer|false|A simple equality filter for project id|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['created_date', 'gt_last_updated', 'id', 'job_id', 'project_id', 'target_last_updated', 'task_id']|
|target|query|string|false|A simple equality filter for target|
|task_id|query|integer|false|A simple equality filter for task id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|target|job|
|target|project|
|target|task|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "job_id": 0,
      "task_id": 0,
      "project_id": 0,
      "parent_id": 0,
      "target": "job",
      "summary": {
        "total_frames": 0,
        "validation_frames": 0,
        "validation_frame_share": 0,
        "conflict_count": 0,
        "error_count": 0,
        "conflicts_by_type": {
          "property1": 0,
          "property2": 0
        },
        "tasks": {
          "total": 0,
          "custom": 0,
          "not_configured": 0,
          "excluded": 0,
          "included": 0,
          "completed": 0
        },
        "jobs": {
          "total": 0,
          "excluded": 0,
          "not_checkable": 0,
          "included": 0,
          "completed": 0
        },
        "requirements": {
          "total": 0,
          "enabled": 0,
          "completed": 0,
          "not_computed": 0,
          "items": [
            {
              "requirement_id": 0,
              "name": "string",
              "metric": "accuracy",
              "score": 0,
              "score_components": {
                "valid_count": 0,
                "missing_count": 0,
                "extra_count": 0
              },
              "calculation": {
                "status": "computed",
                "reason": "no_annotations"
              },
              "threshold": 0
            }
          ]
        }
      },
      "created_date": "1970-01-01T00:00:00Z",
      "target_last_updated": "1970-01-01T00:00:00Z",
      "gt_last_updated": "1970-01-01T00:00:00Z",
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      }
    }
  ]
}
```

<h3 id="method-returns-a-paginated-list-of-quality-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedQualityReportList](#schemapaginatedqualityreportlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a quality report

<a id="opIdquality_create_report"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "task_id": 0,
    "project_id": 0
  }'
```

`POST /api/quality/reports`

Deprecation warning: Utilizing this endpoint to check the computation status is no longer possible.
Consider using common requests API: GET /api/requests/<rq_id>


> Body parameter

```json
{
  "task_id": 0,
  "project_id": 0
}
```

<h3 id="create-a-quality-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rq_id|query|string|false|**Deprecated.** The report creation request id. Can be specified to check the report<br>creation status.<br>|
|body|body|[QualityReportCreateRequest](#schemaqualityreportcreaterequest)|false|none|
|» task_id|body|integer|false|none|
|» project_id|body|integer|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "job_id": 0,
  "task_id": 0,
  "project_id": 0,
  "parent_id": 0,
  "target": "job",
  "summary": {
    "total_frames": 0,
    "validation_frames": 0,
    "validation_frame_share": 0,
    "conflict_count": 0,
    "error_count": 0,
    "conflicts_by_type": {
      "property1": 0,
      "property2": 0
    },
    "tasks": {
      "total": 0,
      "custom": 0,
      "not_configured": 0,
      "excluded": 0,
      "included": 0,
      "completed": 0
    },
    "jobs": {
      "total": 0,
      "excluded": 0,
      "not_checkable": 0,
      "included": 0,
      "completed": 0
    },
    "requirements": {
      "total": 0,
      "enabled": 0,
      "completed": 0,
      "not_computed": 0,
      "items": [
        {
          "requirement_id": 0,
          "name": "string",
          "metric": "accuracy",
          "score": 0,
          "score_components": {
            "valid_count": 0,
            "missing_count": 0,
            "extra_count": 0
          },
          "calculation": {
            "status": "computed",
            "reason": "no_annotations"
          },
          "threshold": 0
        }
      ]
    }
  },
  "created_date": "1970-01-01T00:00:00Z",
  "target_last_updated": "1970-01-01T00:00:00Z",
  "gt_last_updated": "1970-01-01T00:00:00Z",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="create-a-quality-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[QualityReport](#schemaqualityreport)|
|202|Accepted|A quality report request has been enqueued, the request id is returned.<br>The request status can be checked at this endpoint by passing the rq_id<br>as the query parameter. If the request id is specified, this response<br>means the quality report request is queued or is being processed.<br>|[RqId](#schemarqid)|
|400|Bad Request|Invalid or failed request, check the response data for details|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get quality report details

<a id="opIdquality_retrieve_report"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/reports/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/reports/{id}`

<h3 id="get-quality-report-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this quality report.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "job_id": 0,
  "task_id": 0,
  "project_id": 0,
  "parent_id": 0,
  "target": "job",
  "summary": {
    "total_frames": 0,
    "validation_frames": 0,
    "validation_frame_share": 0,
    "conflict_count": 0,
    "error_count": 0,
    "conflicts_by_type": {
      "property1": 0,
      "property2": 0
    },
    "tasks": {
      "total": 0,
      "custom": 0,
      "not_configured": 0,
      "excluded": 0,
      "included": 0,
      "completed": 0
    },
    "jobs": {
      "total": 0,
      "excluded": 0,
      "not_checkable": 0,
      "included": 0,
      "completed": 0
    },
    "requirements": {
      "total": 0,
      "enabled": 0,
      "completed": 0,
      "not_computed": 0,
      "items": [
        {
          "requirement_id": 0,
          "name": "string",
          "metric": "accuracy",
          "score": 0,
          "score_components": {
            "valid_count": 0,
            "missing_count": 0,
            "extra_count": 0
          },
          "calculation": {
            "status": "computed",
            "reason": "no_annotations"
          },
          "threshold": 0
        }
      ]
    }
  },
  "created_date": "1970-01-01T00:00:00Z",
  "target_last_updated": "1970-01-01T00:00:00Z",
  "gt_last_updated": "1970-01-01T00:00:00Z",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

<h3 id="get-quality-report-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualityReport](#schemaqualityreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Download quality report confusion matrices

<a id="opIdquality_retrieve_report_confusion"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/reports/0/confusion \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/reports/{id}/confusion`

<h3 id="download-quality-report-confusion-matrices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this quality report.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="download-quality-report-confusion-matrices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ZIP archive with per-requirement confusion matrices|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get a quality report requirement confusion matrix

<a id="opIdquality_retrieve_report_requirement_confusion"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/quality/reports/0/confusion/matrix?requirement=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/reports/{id}/confusion/matrix`

<h3 id="get-a-quality-report-requirement-confusion-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|
|id|path|integer|true|A unique integer value identifying this quality report.|
|requirement|query|integer|true|Quality requirement id in the report|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|csv|
|format|json|

> Example responses

> 200 Response

```json
{
  "labels": [
    "string"
  ],
  "rows": [
    [
      0
    ]
  ],
  "axes": {
    "cols": "string",
    "rows": "string"
  },
  "precision": [
    0
  ],
  "recall": [
    0
  ],
  "accuracy": [
    0
  ],
  "jaccard_index": [
    0
  ],
  "dice": [
    0
  ],
  "target_metric_summary": {
    "metric": "accuracy",
    "aggregation": "micro",
    "values": {
      "micro": 0,
      "mean": 0,
      "label": 0
    },
    "worst_labels": [
      "string"
    ]
  }
}
```

<h3 id="get-a-quality-report-requirement-confusion-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON confusion matrix for the requested quality requirement|[QualityReportConfusionMatrix](#schemaqualityreportconfusionmatrix)|
|404|Not Found|Requirement confusion matrix was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get quality report contents

<a id="opIdquality_retrieve_report_data"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/reports/0/data \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/reports/{id}/data`

<h3 id="get-quality-report-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|
|id|path|integer|true|A unique integer value identifying this quality report.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-quality-report-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## List quality settings instances

<a id="opIdquality_list_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/settings`

Please note that child task settings are included by default
if the "project_id" filter is used.
If you want to restrict results only to a specific parent type, use the "parent_type" parameter.


<h3 id="list-quality-settings-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['created_date', 'id', 'inherit', 'project_id', 'task_id', 'updated_date'].|
|inherit|query|boolean|false|A simple equality filter for the inherit field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|parent_type|query|string|false|A simple equality filter for parent instance type|
|project_id|query|integer|false|A simple equality filter for project id|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['created_date', 'id', 'inherit', 'project_id', 'task_id', 'updated_date']|
|task_id|query|integer|false|A simple equality filter for the task_id field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|parent_type|project|
|parent_type|task|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "task_id": 0,
      "project_id": 0,
      "job_filter": "string",
      "inherit": true,
      "max_validations_per_job": 0,
      "requirements": [
        {
          "id": 0,
          "settings_id": 0,
          "task_id": 0,
          "project_id": 0,
          "name": "string",
          "is_base": true,
          "sort_order": -2147483648,
          "filter": "string",
          "enabled": true,
          "annotation_type": "tag",
          "metric": "accuracy",
          "required_score": 0,
          "parent_requirement": 0,
          "iou_threshold": 0,
          "point_size": 0,
          "point_size_base": "image_size",
          "line_thickness": 0,
          "match_orientation": true,
          "line_orientation_threshold": 0,
          "match_groups": true,
          "group_match_threshold": 0,
          "check_covered_annotations": true,
          "object_visibility_threshold": 0,
          "panoptic_comparison": true,
          "attribute_comparison": {
            "default": {
              "enabled": true,
              "comparator": "exact",
              "threshold": 0
            },
            "rules": [
              {
                "spec_id": 0,
                "enabled": true,
                "comparator": "exact",
                "threshold": 0
              }
            ]
          },
          "created_date": "1970-01-01T00:00:00Z",
          "updated_date": "1970-01-01T00:00:00Z"
        }
      ],
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-quality-settings-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedQualitySettingsList](#schemapaginatedqualitysettingslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get quality settings instance details

<a id="opIdquality_retrieve_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/settings/{id}`

<h3 id="get-quality-settings-instance-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|An id of a quality settings instance|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "id": 0,
      "settings_id": 0,
      "task_id": 0,
      "project_id": 0,
      "name": "string",
      "is_base": true,
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-quality-settings-instance-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualitySettings](#schemaqualitysettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Replace a quality settings instance

<a id="opIdquality_update_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job_filter": "string",
    "inherit": true,
    "max_validations_per_job": 0,
    "requirements": [
      {
        "settings_id": 0,
        "name": "string",
        "sort_order": -2147483648,
        "filter": "string",
        "enabled": true,
        "annotation_type": "tag",
        "metric": "accuracy",
        "required_score": 0,
        "parent_requirement": 0,
        "iou_threshold": 0,
        "point_size": 0,
        "point_size_base": "image_size",
        "line_thickness": 0,
        "match_orientation": true,
        "line_orientation_threshold": 0,
        "match_groups": true,
        "group_match_threshold": 0,
        "check_covered_annotations": true,
        "object_visibility_threshold": 0,
        "panoptic_comparison": true,
        "attribute_comparison": {
          "default": {
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          },
          "rules": [
            {
              "spec_id": 0,
              "enabled": true,
              "comparator": "exact",
              "threshold": 0
            }
          ]
        }
      }
    ]
  }'
```

`PUT /api/quality/settings/{id}`

> Body parameter

```json
{
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "settings_id": 0,
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      }
    }
  ]
}
```

<h3 id="replace-a-quality-settings-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|An id of a quality settings instance|
|body|body|[QualitySettingsRequest](#schemaqualitysettingsrequest)|false|none|
|» job_filter|body|string|false|A JSON-based logic expression used to filter jobs for quality validation.<br>The filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']<br>|
|» inherit|body|boolean|false|Allow using project settings when computing task quality.<br>Only applicable to task quality settings inside projects<br>|
|» max_validations_per_job|body|integer|false|The maximum number of job validation attempts for the job assignee.<br>The job can be automatically accepted if the job quality is above the required<br>threshold, defined by the target threshold parameter.<br>|
|» requirements|body|[[QualityRequirementListItemRequest](#schemaqualityrequirementlistitemrequest)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "id": 0,
      "settings_id": 0,
      "task_id": 0,
      "project_id": 0,
      "name": "string",
      "is_base": true,
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="replace-a-quality-settings-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualitySettings](#schemaqualitysettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a quality settings instance

<a id="opIdquality_partial_update_settings"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "job_filter": "string",
    "inherit": true,
    "max_validations_per_job": 0,
    "requirements": [
      {
        "settings_id": 0,
        "name": "string",
        "sort_order": -2147483648,
        "filter": "string",
        "enabled": true,
        "annotation_type": "tag",
        "metric": "accuracy",
        "required_score": 0,
        "parent_requirement": 0,
        "iou_threshold": 0,
        "point_size": 0,
        "point_size_base": "image_size",
        "line_thickness": 0,
        "match_orientation": true,
        "line_orientation_threshold": 0,
        "match_groups": true,
        "group_match_threshold": 0,
        "check_covered_annotations": true,
        "object_visibility_threshold": 0,
        "panoptic_comparison": true,
        "attribute_comparison": {
          "default": {
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          },
          "rules": [
            {
              "spec_id": 0,
              "enabled": true,
              "comparator": "exact",
              "threshold": 0
            }
          ]
        }
      }
    ]
  }'
```

`PATCH /api/quality/settings/{id}`

> Body parameter

```json
{
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "settings_id": 0,
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      }
    }
  ]
}
```

<h3 id="update-a-quality-settings-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|An id of a quality settings instance|
|body|body|[PatchedQualitySettingsRequest](#schemapatchedqualitysettingsrequest)|false|none|
|» job_filter|body|string|false|A JSON-based logic expression used to filter jobs for quality validation.<br>The filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']<br>|
|» inherit|body|boolean|false|Allow using project settings when computing task quality.<br>Only applicable to task quality settings inside projects<br>|
|» max_validations_per_job|body|integer|false|The maximum number of job validation attempts for the job assignee.<br>The job can be automatically accepted if the job quality is above the required<br>threshold, defined by the target threshold parameter.<br>|
|» requirements|body|[[QualityRequirementListItemRequest](#schemaqualityrequirementlistitemrequest)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "id": 0,
      "settings_id": 0,
      "task_id": 0,
      "project_id": 0,
      "name": "string",
      "is_base": true,
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-quality-settings-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualitySettings](#schemaqualitysettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## List quality requirements

<a id="opIdquality_list_settings_requirements"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/settings/requirements`

<h3 id="list-quality-requirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|annotation_type|query|string|false|A simple equality filter for the annotation_type field|
|enabled|query|boolean|false|A simple equality filter for the enabled field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['annotation_type', 'created_date', 'enabled', 'id', 'project_id', 'settings_id', 'task_id', 'updated_date'].|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|project_id|query|integer|false|Project id filter|
|settings_id|query|integer|false|Settings id filter|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['annotation_type', 'created_date', 'enabled', 'id', 'name', 'project_id', 'settings_id', 'sort_order', 'task_id', 'updated_date']|
|task_id|query|integer|false|Task id filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|annotation_type|tag|
|annotation_type|rectangle|
|annotation_type|skeleton|
|annotation_type|skeleton_keypoint|
|annotation_type|points|
|annotation_type|polyline|
|annotation_type|mask|
|annotation_type|polygon|
|annotation_type|ellipse|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "settings_id": 0,
      "task_id": 0,
      "project_id": 0,
      "name": "string",
      "is_base": true,
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-quality-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedQualityRequirementListItemList](#schemapaginatedqualityrequirementlistitemlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a quality requirement

<a id="opIdquality_create_settings_requirements"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "settings_id": 0,
    "name": "string",
    "sort_order": -2147483648,
    "filter": "string",
    "enabled": true,
    "annotation_type": "tag",
    "metric": "accuracy",
    "required_score": 0,
    "parent_requirement": 0,
    "iou_threshold": 0,
    "point_size": 0,
    "point_size_base": "image_size",
    "line_thickness": 0,
    "match_orientation": true,
    "line_orientation_threshold": 0,
    "match_groups": true,
    "group_match_threshold": 0,
    "check_covered_annotations": true,
    "object_visibility_threshold": 0,
    "panoptic_comparison": true,
    "attribute_comparison": {
      "default": {
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      },
      "rules": [
        {
          "spec_id": 0,
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        }
      ]
    }
  }'
```

`POST /api/quality/settings/requirements`

> Body parameter

```json
{
  "settings_id": 0,
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  }
}
```

<h3 id="create-a-quality-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QualityRequirementRequest](#schemaqualityrequirementrequest)|false|none|
|» settings_id|body|integer|false|none|
|» name|body|string|false|none|
|» sort_order|body|integer|false|none|
|» filter|body|string|false|none|
|» enabled|body|boolean|false|none|
|» annotation_type|body|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|
|» » *oneOf*|body|[AnnotationTypeEnum](#schemaannotationtypeenum)|false|* `tag` - Tag<br>* `rectangle` - Rectangle<br>* `skeleton` - Skeleton<br>* `skeleton_keypoint` - Skeleton Keypoint<br>* `points` - Points<br>* `polyline` - Polyline<br>* `mask` - Mask<br>* `polygon` - Polygon<br>* `ellipse` - Ellipse|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» metric|body|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|» » *oneOf*|body|[QualityTargetMetric](#schemaqualitytargetmetric)|false|* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» required_score|body|number(double) \| null|false|Defines the minimal quality requirements in terms of the selected target metric.|
|» parent_requirement|body|integer \| null|false|The parent requirement. Child requirements inherit comparison settings from it.|
|» iou_threshold|body|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|» » *oneOf*|body|number|false|none|
|» » *oneOf*|body|[SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest)|false|An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.<br><br>The `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.<br>Existing numeric thresholds are returned as numbers.<br><br>A constant policy uses one threshold for all shapes:<br><br>```json<br>{"type": "iou", "mode": "constant", "value": 0.7}<br>```<br><br>A linear policy chooses a threshold from the GT shape area in px²:<br><br>```json<br>{<br>  "type": "iou",<br>  "mode": "linear",<br>  "input": "gt.shape_area",<br>  "extrapolation": "clamp",<br>  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]<br>}<br>```<br><br>Linear policies require 2-200 points with unique positive areas sorted in ascending order<br>and thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.<br>Policies without `type` are accepted as IoU for compatibility; responses include it.<br>Other threshold types are not supported.<br><br>Setting a child's threshold to `null` restores inheritance of the whole threshold.<br>Root requirements cannot inherit their threshold.|
|» point_size|body|number(double) \| null|false|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|» point_size_base|body|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|» » *oneOf*|body|[QualityPointSizeBase](#schemaqualitypointsizebase)|false|* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» line_thickness|body|number(double) \| null|false|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|» match_orientation|body|boolean \| null|false|Enables or disables polyline orientation comparison|
|» line_orientation_threshold|body|number(double) \| null|false|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|» match_groups|body|boolean \| null|false|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|» group_match_threshold|body|number(double) \| null|false|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|» check_covered_annotations|body|boolean \| null|false|Check for partially-covered annotations, useful in segmentation tasks<br>|
|» object_visibility_threshold|body|number(double) \| null|false|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|» panoptic_comparison|body|boolean \| null|false|Use only the visible part of the masks and polygons in comparisons<br>|
|» attribute_comparison|body|object \| null|false|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|
|» » default|body|object \| null|false|none|
|» » » enabled|body|boolean \| null|false|none|
|» » » comparator|body|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|
|» » » » *oneOf*|body|[ComparatorEnum](#schemacomparatorenum)|false|* `exact` - exact<br>* `levenshtein` - levenshtein|
|» » » » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» » » threshold|body|number(double) \| null|false|none|
|» » rules|body|[[AttributeComparisonRuleRequest](#schemaattributecomparisonrulerequest)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|tag|
|» » *oneOf*|rectangle|
|» » *oneOf*|skeleton|
|» » *oneOf*|skeleton_keypoint|
|» » *oneOf*|points|
|» » *oneOf*|polyline|
|» » *oneOf*|mask|
|» » *oneOf*|polygon|
|» » *oneOf*|ellipse|
|» » *oneOf*|""|
|» » *oneOf*|null|
|» » *oneOf*|accuracy|
|» » *oneOf*|precision|
|» » *oneOf*|recall|
|» » *oneOf*|jaccard_index|
|» » *oneOf*|dice|
|» » *oneOf*|mean_accuracy|
|» » *oneOf*|mean_precision|
|» » *oneOf*|mean_recall|
|» » *oneOf*|mean_jaccard_index|
|» » *oneOf*|mean_dice|
|» » *oneOf*|label_accuracy|
|» » *oneOf*|label_precision|
|» » *oneOf*|label_recall|
|» » *oneOf*|label_jaccard_index|
|» » *oneOf*|label_dice|
|» » *oneOf*|null|
|» » *oneOf*|image_size|
|» » *oneOf*|group_bbox_size|
|» » *oneOf*|""|
|» » *oneOf*|null|
|» » » » *oneOf*|exact|
|» » » » *oneOf*|levenshtein|
|» » » » *oneOf*|null|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "settings_id": 0,
  "task_id": 0,
  "project_id": 0,
  "name": "string",
  "is_base": true,
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "effective": {},
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-quality-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[QualityRequirement](#schemaqualityrequirement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get quality requirement details

<a id="opIdquality_retrieve_settings_requirements"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/quality/settings/requirements/{id}`

<h3 id="get-quality-requirement-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this quality requirement.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "settings_id": 0,
  "task_id": 0,
  "project_id": 0,
  "name": "string",
  "is_base": true,
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "effective": {},
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-quality-requirement-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualityRequirement](#schemaqualityrequirement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Replace a quality requirement

<a id="opIdquality_update_settings_requirements"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "settings_id": 0,
    "name": "string",
    "sort_order": -2147483648,
    "filter": "string",
    "enabled": true,
    "annotation_type": "tag",
    "metric": "accuracy",
    "required_score": 0,
    "parent_requirement": 0,
    "iou_threshold": 0,
    "point_size": 0,
    "point_size_base": "image_size",
    "line_thickness": 0,
    "match_orientation": true,
    "line_orientation_threshold": 0,
    "match_groups": true,
    "group_match_threshold": 0,
    "check_covered_annotations": true,
    "object_visibility_threshold": 0,
    "panoptic_comparison": true,
    "attribute_comparison": {
      "default": {
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      },
      "rules": [
        {
          "spec_id": 0,
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        }
      ]
    }
  }'
```

`PUT /api/quality/settings/requirements/{id}`

> Body parameter

```json
{
  "settings_id": 0,
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  }
}
```

<h3 id="replace-a-quality-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this quality requirement.|
|body|body|[QualityRequirementRequest](#schemaqualityrequirementrequest)|false|none|
|» settings_id|body|integer|false|none|
|» name|body|string|false|none|
|» sort_order|body|integer|false|none|
|» filter|body|string|false|none|
|» enabled|body|boolean|false|none|
|» annotation_type|body|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|
|» » *oneOf*|body|[AnnotationTypeEnum](#schemaannotationtypeenum)|false|* `tag` - Tag<br>* `rectangle` - Rectangle<br>* `skeleton` - Skeleton<br>* `skeleton_keypoint` - Skeleton Keypoint<br>* `points` - Points<br>* `polyline` - Polyline<br>* `mask` - Mask<br>* `polygon` - Polygon<br>* `ellipse` - Ellipse|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» metric|body|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|» » *oneOf*|body|[QualityTargetMetric](#schemaqualitytargetmetric)|false|* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» required_score|body|number(double) \| null|false|Defines the minimal quality requirements in terms of the selected target metric.|
|» parent_requirement|body|integer \| null|false|The parent requirement. Child requirements inherit comparison settings from it.|
|» iou_threshold|body|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|» » *oneOf*|body|number|false|none|
|» » *oneOf*|body|[SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest)|false|An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.<br><br>The `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.<br>Existing numeric thresholds are returned as numbers.<br><br>A constant policy uses one threshold for all shapes:<br><br>```json<br>{"type": "iou", "mode": "constant", "value": 0.7}<br>```<br><br>A linear policy chooses a threshold from the GT shape area in px²:<br><br>```json<br>{<br>  "type": "iou",<br>  "mode": "linear",<br>  "input": "gt.shape_area",<br>  "extrapolation": "clamp",<br>  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]<br>}<br>```<br><br>Linear policies require 2-200 points with unique positive areas sorted in ascending order<br>and thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.<br>Policies without `type` are accepted as IoU for compatibility; responses include it.<br>Other threshold types are not supported.<br><br>Setting a child's threshold to `null` restores inheritance of the whole threshold.<br>Root requirements cannot inherit their threshold.|
|» point_size|body|number(double) \| null|false|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|» point_size_base|body|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|» » *oneOf*|body|[QualityPointSizeBase](#schemaqualitypointsizebase)|false|* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» line_thickness|body|number(double) \| null|false|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|» match_orientation|body|boolean \| null|false|Enables or disables polyline orientation comparison|
|» line_orientation_threshold|body|number(double) \| null|false|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|» match_groups|body|boolean \| null|false|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|» group_match_threshold|body|number(double) \| null|false|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|» check_covered_annotations|body|boolean \| null|false|Check for partially-covered annotations, useful in segmentation tasks<br>|
|» object_visibility_threshold|body|number(double) \| null|false|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|» panoptic_comparison|body|boolean \| null|false|Use only the visible part of the masks and polygons in comparisons<br>|
|» attribute_comparison|body|object \| null|false|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|
|» » default|body|object \| null|false|none|
|» » » enabled|body|boolean \| null|false|none|
|» » » comparator|body|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|
|» » » » *oneOf*|body|[ComparatorEnum](#schemacomparatorenum)|false|* `exact` - exact<br>* `levenshtein` - levenshtein|
|» » » » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» » » threshold|body|number(double) \| null|false|none|
|» » rules|body|[[AttributeComparisonRuleRequest](#schemaattributecomparisonrulerequest)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|tag|
|» » *oneOf*|rectangle|
|» » *oneOf*|skeleton|
|» » *oneOf*|skeleton_keypoint|
|» » *oneOf*|points|
|» » *oneOf*|polyline|
|» » *oneOf*|mask|
|» » *oneOf*|polygon|
|» » *oneOf*|ellipse|
|» » *oneOf*|""|
|» » *oneOf*|null|
|» » *oneOf*|accuracy|
|» » *oneOf*|precision|
|» » *oneOf*|recall|
|» » *oneOf*|jaccard_index|
|» » *oneOf*|dice|
|» » *oneOf*|mean_accuracy|
|» » *oneOf*|mean_precision|
|» » *oneOf*|mean_recall|
|» » *oneOf*|mean_jaccard_index|
|» » *oneOf*|mean_dice|
|» » *oneOf*|label_accuracy|
|» » *oneOf*|label_precision|
|» » *oneOf*|label_recall|
|» » *oneOf*|label_jaccard_index|
|» » *oneOf*|label_dice|
|» » *oneOf*|null|
|» » *oneOf*|image_size|
|» » *oneOf*|group_bbox_size|
|» » *oneOf*|""|
|» » *oneOf*|null|
|» » » » *oneOf*|exact|
|» » » » *oneOf*|levenshtein|
|» » » » *oneOf*|null|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "settings_id": 0,
  "task_id": 0,
  "project_id": 0,
  "name": "string",
  "is_base": true,
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "effective": {},
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="replace-a-quality-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualityRequirement](#schemaqualityrequirement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a quality requirement

<a id="opIdquality_destroy_settings_requirements"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/quality/settings/requirements/{id}`

<h3 id="delete-a-quality-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this quality requirement.|

<h3 id="delete-a-quality-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Requirement deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a quality requirement

<a id="opIdquality_partial_update_settings_requirements"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "settings_id": 0,
    "name": "string",
    "sort_order": -2147483648,
    "filter": "string",
    "enabled": true,
    "annotation_type": "tag",
    "metric": "accuracy",
    "required_score": 0,
    "parent_requirement": 0,
    "iou_threshold": 0,
    "point_size": 0,
    "point_size_base": "image_size",
    "line_thickness": 0,
    "match_orientation": true,
    "line_orientation_threshold": 0,
    "match_groups": true,
    "group_match_threshold": 0,
    "check_covered_annotations": true,
    "object_visibility_threshold": 0,
    "panoptic_comparison": true,
    "attribute_comparison": {
      "default": {
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      },
      "rules": [
        {
          "spec_id": 0,
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        }
      ]
    }
  }'
```

`PATCH /api/quality/settings/requirements/{id}`

> Body parameter

```json
{
  "settings_id": 0,
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  }
}
```

<h3 id="update-a-quality-requirement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this quality requirement.|
|body|body|[PatchedQualityRequirementRequest](#schemapatchedqualityrequirementrequest)|false|none|
|» settings_id|body|integer|false|none|
|» name|body|string|false|none|
|» sort_order|body|integer|false|none|
|» filter|body|string|false|none|
|» enabled|body|boolean|false|none|
|» annotation_type|body|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|
|» » *oneOf*|body|[AnnotationTypeEnum](#schemaannotationtypeenum)|false|* `tag` - Tag<br>* `rectangle` - Rectangle<br>* `skeleton` - Skeleton<br>* `skeleton_keypoint` - Skeleton Keypoint<br>* `points` - Points<br>* `polyline` - Polyline<br>* `mask` - Mask<br>* `polygon` - Polygon<br>* `ellipse` - Ellipse|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» metric|body|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|» » *oneOf*|body|[QualityTargetMetric](#schemaqualitytargetmetric)|false|* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» required_score|body|number(double) \| null|false|Defines the minimal quality requirements in terms of the selected target metric.|
|» parent_requirement|body|integer \| null|false|The parent requirement. Child requirements inherit comparison settings from it.|
|» iou_threshold|body|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|» » *oneOf*|body|number|false|none|
|» » *oneOf*|body|[SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest)|false|An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.<br><br>The `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.<br>Existing numeric thresholds are returned as numbers.<br><br>A constant policy uses one threshold for all shapes:<br><br>```json<br>{"type": "iou", "mode": "constant", "value": 0.7}<br>```<br><br>A linear policy chooses a threshold from the GT shape area in px²:<br><br>```json<br>{<br>  "type": "iou",<br>  "mode": "linear",<br>  "input": "gt.shape_area",<br>  "extrapolation": "clamp",<br>  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]<br>}<br>```<br><br>Linear policies require 2-200 points with unique positive areas sorted in ascending order<br>and thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.<br>Policies without `type` are accepted as IoU for compatibility; responses include it.<br>Other threshold types are not supported.<br><br>Setting a child's threshold to `null` restores inheritance of the whole threshold.<br>Root requirements cannot inherit their threshold.|
|» point_size|body|number(double) \| null|false|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|» point_size_base|body|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|» » *oneOf*|body|[QualityPointSizeBase](#schemaqualitypointsizebase)|false|* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» line_thickness|body|number(double) \| null|false|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|» match_orientation|body|boolean \| null|false|Enables or disables polyline orientation comparison|
|» line_orientation_threshold|body|number(double) \| null|false|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|» match_groups|body|boolean \| null|false|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|» group_match_threshold|body|number(double) \| null|false|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|» check_covered_annotations|body|boolean \| null|false|Check for partially-covered annotations, useful in segmentation tasks<br>|
|» object_visibility_threshold|body|number(double) \| null|false|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|» panoptic_comparison|body|boolean \| null|false|Use only the visible part of the masks and polygons in comparisons<br>|
|» attribute_comparison|body|object \| null|false|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|
|» » default|body|object \| null|false|none|
|» » » enabled|body|boolean \| null|false|none|
|» » » comparator|body|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|
|» » » » *oneOf*|body|[ComparatorEnum](#schemacomparatorenum)|false|* `exact` - exact<br>* `levenshtein` - levenshtein|
|» » » » *oneOf*|body|[NullEnum](#schemanullenum)|false|none|
|» » » threshold|body|number(double) \| null|false|none|
|» » rules|body|[[AttributeComparisonRuleRequest](#schemaattributecomparisonrulerequest)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|tag|
|» » *oneOf*|rectangle|
|» » *oneOf*|skeleton|
|» » *oneOf*|skeleton_keypoint|
|» » *oneOf*|points|
|» » *oneOf*|polyline|
|» » *oneOf*|mask|
|» » *oneOf*|polygon|
|» » *oneOf*|ellipse|
|» » *oneOf*|""|
|» » *oneOf*|null|
|» » *oneOf*|accuracy|
|» » *oneOf*|precision|
|» » *oneOf*|recall|
|» » *oneOf*|jaccard_index|
|» » *oneOf*|dice|
|» » *oneOf*|mean_accuracy|
|» » *oneOf*|mean_precision|
|» » *oneOf*|mean_recall|
|» » *oneOf*|mean_jaccard_index|
|» » *oneOf*|mean_dice|
|» » *oneOf*|label_accuracy|
|» » *oneOf*|label_precision|
|» » *oneOf*|label_recall|
|» » *oneOf*|label_jaccard_index|
|» » *oneOf*|label_dice|
|» » *oneOf*|null|
|» » *oneOf*|image_size|
|» » *oneOf*|group_bbox_size|
|» » *oneOf*|""|
|» » *oneOf*|null|
|» » » » *oneOf*|exact|
|» » » » *oneOf*|levenshtein|
|» » » » *oneOf*|null|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "settings_id": 0,
  "task_id": 0,
  "project_id": 0,
  "name": "string",
  "is_base": true,
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "effective": {},
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-quality-requirement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[QualityRequirement](#schemaqualityrequirement)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a hierarchy of quality requirements

<a id="opIdquality_create_settings_requirements_bulk"></a>

> Code samples

```bash
curl http://localhost:8080/api/quality/settings/requirements/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "settings_id": 0,
    "requirements": [
      {
        "name": "string",
        "sort_order": -2147483648,
        "filter": "string",
        "enabled": true,
        "annotation_type": "tag",
        "metric": "accuracy",
        "required_score": 0,
        "parent_requirement": 0,
        "iou_threshold": 0,
        "point_size": 0,
        "point_size_base": "image_size",
        "line_thickness": 0,
        "match_orientation": true,
        "line_orientation_threshold": 0,
        "match_groups": true,
        "group_match_threshold": 0,
        "check_covered_annotations": true,
        "object_visibility_threshold": 0,
        "panoptic_comparison": true,
        "attribute_comparison": {
          "default": {
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          },
          "rules": [
            {
              "spec_id": 0,
              "enabled": true,
              "comparator": "exact",
              "threshold": 0
            }
          ]
        },
        "children": [
          {}
        ]
      }
    ]
  }'
```

`POST /api/quality/settings/requirements/bulk`

> Body parameter

```json
{
  "settings_id": 0,
  "requirements": [
    {
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "children": [
        {}
      ]
    }
  ]
}
```

<h3 id="create-a-hierarchy-of-quality-requirements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QualityRequirementBulkCreateRequest](#schemaqualityrequirementbulkcreaterequest)|true|none|
|» settings_id|body|integer|true|none|
|» requirements|body|[[QualityRequirementBulkCreateNodeRequest](#schemaqualityrequirementbulkcreatenoderequest)]|true|none|

> Example responses

> 201 Response

```json
[
  {
    "id": 0,
    "settings_id": 0,
    "task_id": 0,
    "project_id": 0,
    "name": "string",
    "is_base": true,
    "sort_order": -2147483648,
    "filter": "string",
    "enabled": true,
    "annotation_type": "tag",
    "metric": "accuracy",
    "required_score": 0,
    "parent_requirement": 0,
    "effective": {},
    "iou_threshold": 0,
    "point_size": 0,
    "point_size_base": "image_size",
    "line_thickness": 0,
    "match_orientation": true,
    "line_orientation_threshold": 0,
    "match_groups": true,
    "group_match_threshold": 0,
    "check_covered_annotations": true,
    "object_visibility_threshold": 0,
    "panoptic_comparison": true,
    "attribute_comparison": {
      "default": {
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      },
      "rules": [
        {
          "spec_id": 0,
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        }
      ]
    },
    "created_date": "1970-01-01T00:00:00Z",
    "updated_date": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="create-a-hierarchy-of-quality-requirements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||Inline|

<h3 id="create-a-hierarchy-of-quality-requirements-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QualityRequirement](#schemaqualityrequirement)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-requests">requests</h1>

## List requests

<a id="opIdrequests_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/requests \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/requests`

<h3 id="list-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|A simple equality filter for the action field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['action', 'format', 'job_id', 'org', 'org_id', 'project_id', 'status', 'subresource', 'target', 'task_id'].|
|format|query|string|false|A simple equality filter for the format field|
|job_id|query|integer|false|A simple equality filter for the job_id field|
|org|query|string|false|A simple equality filter for the org field|
|org_id|query|integer|false|A simple equality filter for the org_id field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|project_id|query|integer|false|A simple equality filter for the project_id field|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['action', 'created_date', 'status']|
|status|query|string|false|A simple equality filter for the status field|
|subresource|query|string|false|A simple equality filter for the subresource field|
|target|query|string|false|A simple equality filter for the target field|
|task_id|query|integer|false|A simple equality filter for the task_id field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|queued|
|status|started|
|status|failed|
|status|finished|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "status": "queued",
      "message": "string",
      "id": "string",
      "operation": {
        "type": "string",
        "target": "string",
        "project_id": 0,
        "task_id": 0,
        "job_id": 0,
        "org_id": 0,
        "format": "string",
        "function_id": "string",
        "lightweight": true
      },
      "progress": 0,
      "created_date": "1970-01-01T00:00:00Z",
      "started_date": "1970-01-01T00:00:00Z",
      "finished_date": "1970-01-01T00:00:00Z",
      "expiry_date": "1970-01-01T00:00:00Z",
      "owner": {
        "id": 0,
        "username": "string"
      },
      "result_url": "http://example.com",
      "result_id": 0
    }
  ]
}
```

<h3 id="list-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedRequestList](#schemapaginatedrequestlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get request details

<a id="opIdrequests_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/requests/string \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/requests/{id}`

<h3 id="get-request-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "queued",
  "message": "string",
  "id": "string",
  "operation": {
    "type": "string",
    "target": "string",
    "project_id": 0,
    "task_id": 0,
    "job_id": 0,
    "org_id": 0,
    "format": "string",
    "function_id": "string",
    "lightweight": true
  },
  "progress": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "started_date": "1970-01-01T00:00:00Z",
  "finished_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "owner": {
    "id": 0,
    "username": "string"
  },
  "result_url": "http://example.com",
  "result_id": 0
}
```

<h3 id="get-request-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Request](#schemarequest)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Cancel request

<a id="opIdrequests_create_cancel"></a>

> Code samples

```bash
curl http://localhost:8080/api/requests/string/cancel \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/requests/{id}/cancel`

<h3 id="cancel-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="cancel-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has been cancelled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-schema">schema</h1>

## schema_retrieve

<a id="opIdschema_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/schema/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/schema/`

OpenApi3 schema for this API. Format can be selected via content negotiation.

- YAML: application/vnd.oai.openapi
- JSON: application/vnd.oai.openapi+json

<h3 id="schemaretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lang|query|string|false|none|
|scheme|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|af|
|lang|ar|
|lang|ar-dz|
|lang|ast|
|lang|az|
|lang|be|
|lang|bg|
|lang|bn|
|lang|br|
|lang|bs|
|lang|ca|
|lang|ckb|
|lang|cs|
|lang|cy|
|lang|da|
|lang|de|
|lang|dsb|
|lang|el|
|lang|en|
|lang|en-au|
|lang|en-gb|
|lang|eo|
|lang|es|
|lang|es-ar|
|lang|es-co|
|lang|es-mx|
|lang|es-ni|
|lang|es-ve|
|lang|et|
|lang|eu|
|lang|fa|
|lang|fi|
|lang|fr|
|lang|fy|
|lang|ga|
|lang|gd|
|lang|gl|
|lang|he|
|lang|hi|
|lang|hr|
|lang|hsb|
|lang|hu|
|lang|hy|
|lang|ia|
|lang|id|
|lang|ig|
|lang|io|
|lang|is|
|lang|it|
|lang|ja|
|lang|ka|
|lang|kab|
|lang|kk|
|lang|km|
|lang|kn|
|lang|ko|
|lang|ky|
|lang|lb|
|lang|lt|
|lang|lv|
|lang|mk|
|lang|ml|
|lang|mn|
|lang|mr|
|lang|ms|
|lang|my|
|lang|nb|
|lang|ne|
|lang|nl|
|lang|nn|
|lang|os|
|lang|pa|
|lang|pl|
|lang|pt|
|lang|pt-br|
|lang|ro|
|lang|ru|
|lang|sk|
|lang|sl|
|lang|sq|
|lang|sr|
|lang|sr-latn|
|lang|sv|
|lang|sw|
|lang|ta|
|lang|te|
|lang|tg|
|lang|th|
|lang|tk|
|lang|tr|
|lang|tt|
|lang|udm|
|lang|ug|
|lang|uk|
|lang|ur|
|lang|uz|
|lang|vi|
|lang|zh-hans|
|lang|zh-hant|
|scheme|json|
|scheme|yaml|

> Example responses

> 200 Response

```json
{}
```

<h3 id="schemaretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-server">server</h1>

## Get basic CVAT information

<a id="opIdserver_retrieve_about"></a>

> Code samples

```bash
curl http://localhost:8080/api/server/about \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/server/about`

> Example responses

> 200 Response

```json
{
  "name": "string",
  "description": "string",
  "version": "string",
  "logo_url": "string",
  "subtitle": "string"
}
```

<h3 id="get-basic-cvat-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[About](#schemaabout)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get supported annotation formats

<a id="opIdserver_retrieve_annotation_formats"></a>

> Code samples

```bash
curl http://localhost:8080/api/server/annotation/formats \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/server/annotation/formats`

> Example responses

> 200 Response

```json
{
  "importers": [
    {
      "name": "string",
      "ext": "string",
      "version": "string",
      "enabled": true,
      "dimension": "st"
    }
  ],
  "exporters": [
    {
      "name": "string",
      "ext": "string",
      "version": "string",
      "enabled": true,
      "dimension": "st"
    }
  ]
}
```

<h3 id="get-supported-annotation-formats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DatasetFormats](#schemadatasetformats)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get enabled plugins

<a id="opIdserver_retrieve_plugins"></a>

> Code samples

```bash
curl http://localhost:8080/api/server/plugins \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/server/plugins`

> Example responses

> 200 Response

```json
{
  "ANALYTICS": true,
  "MODELS": true
}
```

<h3 id="get-enabled-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Plugins](#schemaplugins)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## List files/directories in the mounted share

<a id="opIdserver_list_share"></a>

> Code samples

```bash
curl http://localhost:8080/api/server/share \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/server/share`

<h3 id="list-filesdirectories-in-the-mounted-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|directory|query|string|false|Directory to browse|
|search|query|string|false|Search for specific files|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "type": "REG",
    "mime_type": "string"
  }
]
```

<h3 id="list-filesdirectories-in-the-mounted-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-filesdirectories-in-the-mounted-share-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileInfo](#schemafileinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-tasks">tasks</h1>

## List tasks

<a id="opIdtasks_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks`

<h3 id="list-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|assignee|query|string|false|A simple equality filter for the assignee field|
|dimension|query|string|false|A simple equality filter for the dimension field|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['assignee', 'created_date', 'dimension', 'id', 'media_type', 'mode', 'name', 'owner', 'project_id', 'project_name', 'status', 'subset', 'tracker_link', 'updated_date', 'validation_mode'].<br><br>There are few examples for complex filtering tasks:<br><br>    - Get all tasks from 1,2,3 projects - { "and" : [{ "in" : [{ "var" : "project_id" }, [1, 2, 3]]}]}<br><br>    - Get all completed tasks from 1 project - { "and": [{ "==": [{ "var" : "status" }, "completed"]}, { "==" : [{ "var" : "project_id"}, 1]}]}<br><br>|
|media_type|query|string|false|A simple equality filter for the media_type field|
|mode|query|string|false|A simple equality filter for the mode field|
|name|query|string|false|A simple equality filter for the name field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|project_id|query|integer|false|A simple equality filter for the project_id field|
|project_name|query|string|false|A simple equality filter for the project_name field|
|search|query|string|false|A search term. Available search_fields: ['assignee', 'name', 'owner', 'project_name', 'subset', 'tracker_link']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['assignee', 'created_date', 'dimension', 'id', 'media_type', 'mode', 'name', 'owner', 'project_id', 'project_name', 'status', 'subset', 'tracker_link', 'updated_date', 'validation_mode']|
|status|query|string|false|A simple equality filter for the status field|
|subset|query|string|false|A simple equality filter for the subset field|
|tracker_link|query|string|false|A simple equality filter for the tracker_link field|
|validation_mode|query|string|false|A simple equality filter for the validation_mode field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dimension|1d|
|dimension|2d|
|dimension|3d|
|media_type|image|
|media_type|point_cloud|
|media_type|audio|
|mode|annotation|
|mode|interpolation|
|status|annotation|
|status|validation|
|status|completed|
|validation_mode|gt|
|validation_mode|gt_pool|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "name": "string",
      "project_id": 0,
      "project_name": "string",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "bug_tracker": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "overlap": 0,
      "segment_size": 0,
      "initial_replicas": 0,
      "status": {},
      "data_chunk_size": 0,
      "data_original_chunk_type": {},
      "data_compressed_chunk_type": {},
      "data_cloud_storage_id": 0,
      "guide_id": 0,
      "size": 0,
      "image_quality": 0,
      "data": 0,
      "dimension": "string",
      "mode": "string",
      "media_type": "string",
      "subset": "string",
      "organization_id": 0,
      "organization": 0,
      "target_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "source_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "jobs": {
        "count": 0,
        "completed": 0,
        "validation": 0,
        "url": "http://example.com"
      },
      "labels": {
        "url": "http://example.com"
      },
      "assignee_updated_date": "1970-01-01T00:00:00Z",
      "validation_mode": "string"
    }
  ]
}
```

<h3 id="list-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedTaskReadList](#schemapaginatedtaskreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a task

<a id="opIdtasks_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "project_id": 0,
    "owner_id": 0,
    "assignee_id": 0,
    "bug_tracker": "string",
    "overlap": 0,
    "segment_size": 0,
    "labels": [
      {
        "id": 0,
        "name": "string",
        "color": "string",
        "attributes": [],
        "deleted": true,
        "type": {},
        "svg": "string",
        "sublabels": [
          {
            "id": 0,
            "name": "string",
            "color": "string",
            "attributes": [],
            "type": {},
            "has_parent": true
          }
        ]
      }
    ],
    "subset": "string",
    "target_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    },
    "source_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    },
    "initial_replicas": 0,
    "consensus_replicas": 0
  }'
```

`POST /api/tasks`

The new task will not have any attached images or videos.
To attach them, use the /api/tasks/<id>/data endpoint.


> Body parameter

```json
{
  "name": "string",
  "project_id": 0,
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "overlap": 0,
  "segment_size": 0,
  "labels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "deleted": true,
      "type": {},
      "svg": "string",
      "sublabels": [
        {
          "id": 0,
          "name": "string",
          "color": "string",
          "attributes": [],
          "type": {},
          "has_parent": true
        }
      ]
    }
  ],
  "subset": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "initial_replicas": 0,
  "consensus_replicas": 0
}
```

<h3 id="create-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[TaskWriteRequest](#schemataskwriterequest)|true|none|
|» name|body|string|true|none|
|» project_id|body|integer \| null|false|none|
|» owner_id|body|integer \| null|false|none|
|» assignee_id|body|integer \| null|false|none|
|» bug_tracker|body|string|false|none|
|» overlap|body|integer \| null|false|none|
|» segment_size|body|integer|false|none|
|» labels|body|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|none|
|» subset|body|string|false|none|
|» target_storage|body|[StorageRequest](#schemastoragerequest)|false|none|
|» source_storage|body|[StorageRequest](#schemastoragerequest)|false|none|
|» initial_replicas|body|integer|false|The number of replica jobs for each annotation job. Configured at task creation|
|» consensus_replicas|body|integer|false|**Deprecated.** Deprecated. The number of replica jobs for each annotation job.<br>Use 'initial_replicas' instead<br>|

> Example responses

> 201 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "project_id": 0,
  "project_name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "bug_tracker": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "overlap": 0,
  "segment_size": 0,
  "initial_replicas": 0,
  "status": {},
  "data_chunk_size": 0,
  "data_original_chunk_type": {},
  "data_compressed_chunk_type": {},
  "data_cloud_storage_id": 0,
  "guide_id": 0,
  "size": 0,
  "image_quality": 0,
  "data": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "subset": "string",
  "organization_id": 0,
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "jobs": {
    "count": 0,
    "completed": 0,
    "validation": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "validation_mode": "string"
}
```

<h3 id="create-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[TaskRead](#schemataskread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get task details

<a id="opIdtasks_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}`

<h3 id="get-task-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "project_id": 0,
  "project_name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "bug_tracker": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "overlap": 0,
  "segment_size": 0,
  "initial_replicas": 0,
  "status": {},
  "data_chunk_size": 0,
  "data_original_chunk_type": {},
  "data_compressed_chunk_type": {},
  "data_cloud_storage_id": 0,
  "guide_id": 0,
  "size": 0,
  "image_quality": 0,
  "data": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "subset": "string",
  "organization_id": 0,
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "jobs": {
    "count": 0,
    "completed": 0,
    "validation": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "validation_mode": "string"
}
```

<h3 id="get-task-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TaskRead](#schemataskread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a task

<a id="opIdtasks_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/tasks/{id}`

All attached jobs, annotations and data will be deleted as well.

<h3 id="delete-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

<h3 id="delete-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The task has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a task

<a id="opIdtasks_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "owner_id": 0,
    "assignee_id": 0,
    "bug_tracker": "string",
    "subset": "string",
    "target_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    },
    "source_storage": {
      "location": "cloud_storage",
      "cloud_storage_id": 0
    }
  }'
```

`PATCH /api/tasks/{id}`

> Body parameter

```json
{
  "name": "string",
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "subset": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  }
}
```

<h3 id="update-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|
|body|body|[PatchedTaskWriteRequest](#schemapatchedtaskwriterequest)|false|none|
|» name|body|string|false|none|
|» project_id|body|integer \| null|false|none|
|» owner_id|body|integer \| null|false|none|
|» assignee_id|body|integer \| null|false|none|
|» bug_tracker|body|string|false|none|
|» labels|body|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|none|
|» subset|body|string|false|none|
|» target_storage|body|[StorageRequest](#schemastoragerequest)|false|none|
|» source_storage|body|[StorageRequest](#schemastoragerequest)|false|none|
|» organization_id|body|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "project_id": 0,
  "project_name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "bug_tracker": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "overlap": 0,
  "segment_size": 0,
  "initial_replicas": 0,
  "status": {},
  "data_chunk_size": 0,
  "data_original_chunk_type": {},
  "data_compressed_chunk_type": {},
  "data_cloud_storage_id": 0,
  "guide_id": 0,
  "size": 0,
  "image_quality": 0,
  "data": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "subset": "string",
  "organization_id": 0,
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "jobs": {
    "count": 0,
    "completed": 0,
    "validation": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "validation_mode": "string"
}
```

<h3 id="update-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TaskRead](#schemataskread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get task annotations

<a id="opIdtasks_retrieve_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/annotations/ \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}/annotations/`

<h3 id="get-task-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

> Example responses

> 200 Response

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="get-task-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LabeledData](#schemalabeleddata)|
|400|Bad Request|Exporting without data is not allowed|None|
|410|Gone|API endpoint no longer handles exporting process|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Replace task annotations

<a id="opIdtasks_update_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/annotations/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "version": 0,
    "tags": [],
    "shapes": [],
    "tracks": [],
    "intervals": []
  }'
```

`PUT /api/tasks/{id}/annotations/`

> Body parameter

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="replace-task-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|
|body|body|[LabeledDataRequest](#schemalabeleddatarequest)|false|none|
|» version|body|integer|false|none|
|» tags|body|[[LabeledImageRequest](#schemalabeledimagerequest)]|false|none|
|» shapes|body|[[LabeledShapeRequest](#schemalabeledshaperequest)]|false|none|
|» tracks|body|[[LabeledTrackRequest](#schemalabeledtrackrequest)]|false|none|
|» intervals|body|[[LabeledIntervalRequest](#schemalabeledintervalrequest)]|false|none|

<h3 id="replace-task-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Annotations have been replaced|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Import annotations into a task

<a id="opIdtasks_create_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/annotations/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "annotation_file": "string"
  }'
```

`POST /api/tasks/{id}/annotations/`


The request POST /api/tasks/id/annotations initiates a background process to import annotations into a task.
Please, use the GET /api/requests/<rq_id> endpoint for checking status of the process.
The `rq_id` parameter can be found in the response on initiating request.


> Body parameter

```json
{
  "annotation_file": "string"
}
```

<h3 id="import-annotations-into-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Annotation file name|
|format|query|string|false|Input format name<br>You can get the list of supported formats at:<br>/server/annotation/formats|
|id|path|integer|true|A unique integer value identifying this task.|
|import_mode|query|string|false|How to import annotations|
|location|query|string|false|where to import the annotation from|
|use_default_location|query|boolean|false|**Deprecated.** Use the location that was configured in task to import annotations|
|body|body|[AnnotationFileRequest](#schemaannotationfilerequest)|false|none|
|» annotation_file|body|string(binary)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|import_mode|append|
|import_mode|replace|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="import-annotations-into-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Uploading has finished|None|
|202|Accepted|Uploading has been started|[RqId](#schemarqid)|
|405|Method Not Allowed|Format is not available|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete task annotations

<a id="opIdtasks_destroy_annotations"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/annotations/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/tasks/{id}/annotations/`

<h3 id="delete-task-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

<h3 id="delete-task-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The annotation has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update task annotations

<a id="opIdtasks_partial_update_annotations"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/tasks/0/annotations/?action=create' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "version": 0,
    "tags": [],
    "shapes": [],
    "tracks": [],
    "intervals": []
  }'
```

`PATCH /api/tasks/{id}/annotations/`

> Body parameter

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="update-task-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|none|
|id|path|integer|true|A unique integer value identifying this task.|
|body|body|[PatchedLabeledDataRequest](#schemapatchedlabeleddatarequest)|false|none|
|» version|body|integer|false|none|
|» tags|body|[[LabeledImageRequest](#schemalabeledimagerequest)]|false|none|
|» shapes|body|[[LabeledShapeRequest](#schemalabeledshaperequest)]|false|none|
|» tracks|body|[[LabeledTrackRequest](#schemalabeledtrackrequest)]|false|none|
|» intervals|body|[[LabeledIntervalRequest](#schemalabeledintervalrequest)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|create|
|action|delete|
|action|update|

> Example responses

> 200 Response

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

<h3 id="update-task-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LabeledData](#schemalabeleddata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Initiate process to backup resource

<a id="opIdtasks_create_backup_export"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/backup/export \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/tasks/{id}/backup/export`

The request `POST /api/<projects|tasks>/id/backup/export` will initialize
a background process to backup a resource. To check status of the process
please, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.


<h3 id="initiate-process-to-backup-resource-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Backup file name|
|id|path|integer|true|A unique integer value identifying this task.|
|lightweight|query|boolean|false|Makes a lightweight backup (without media files) for tasks whose media is located in cloud storage|
|location|query|string|false|Where need to save downloaded backup|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

> 409 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="initiate-process-to-backup-resource-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Creating a backup file has been started|[RqId](#schemarqid)|
|400|Bad Request|Wrong query parameters were passed|None|
|409|Conflict|The backup process has already been initiated and is not yet finished|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get data of a task

<a id="opIdtasks_retrieve_data"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/tasks/0/data/?type=chunk' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}/data/`

<h3 id="get-data-of-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|
|number|query|integer|false|A unique number value identifying chunk or frame|
|quality|query|string|false|Specifies the quality level of the requested data|
|type|query|string|true|Specifies the type of the requested data|

#### Enumerated Values

|Parameter|Value|
|---|---|
|quality|compressed|
|quality|original|
|type|chunk|
|type|context_image|
|type|frame|

<h3 id="get-data-of-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Data of a specific type|None|
|206|Partial Content|Partial chunk data|None|
|416|Range Not Satisfiable|Requested range is not satisfiable|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Checksum|string||Data checksum, applicable for chunks only|
|200|X-Chunk-Size|integer||Decoded chunk size in bytes, applicable for chunks only|
|200|X-Updated-Date|string|date-time|Data update date, applicable for chunks only|
|206|X-Checksum|string||Data checksum, applicable for chunks only|
|206|X-Chunk-Size|integer||Decoded chunk size in bytes, applicable for chunks only|
|206|X-Updated-Date|string|date-time|Data update date, applicable for chunks only|
|416|X-Chunk-Size|integer||Decoded chunk size in bytes, applicable for chunks only|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Attach data to a task

<a id="opIdtasks_create_data"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/data/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "chunk_size": 0,
    "image_quality": 1,
    "start_frame": 0,
    "stop_frame": 0,
    "frame_filter": "string",
    "client_files": [],
    "server_files": [],
    "remote_files": [],
    "use_zip_chunks": false,
    "server_files_exclude": [],
    "cloud_storage_id": 0,
    "use_cache": false,
    "copy_data": false,
    "storage_method": "cache",
    "sorting_method": "lexicographical",
    "filename_pattern": "string",
    "job_file_mapping": [
      [
        "string"
      ]
    ],
    "upload_file_order": [
      "string"
    ],
    "validation_params": {
      "mode": "gt",
      "frame_selection_method": "random_uniform",
      "random_seed": 0,
      "frames": [
        "string"
      ],
      "frame_count": 1,
      "frame_share": 0,
      "frames_per_job_count": 1,
      "frames_per_job_share": 0
    }
  }'
```

`POST /api/tasks/{id}/data/`

Allows to upload data (images, video, etc.) to a task.
Supports the TUS open file uploading protocol (https://tus.io/).

Supports the following protocols:

1. A single Data request

and

2.1. An Upload-Start request
2.2.a. Regular TUS protocol requests (Upload-Length + Chunks)
2.2.b. Upload-Multiple requests
2.3. An Upload-Finish request

Requests:
- Data - POST, no extra headers or 'Upload-Start' + 'Upload-Finish' headers.
  Contains data in the body.
- Upload-Start - POST, has an 'Upload-Start' header. No body is expected.
- Upload-Length - POST, has an 'Upload-Length' header (see the TUS specification)
- Chunk - HEAD/PATCH (see the TUS specification). Sent to /data/<file id> endpoints.
- Upload-Finish - POST, has an 'Upload-Finish' header. Can contain data in the body.
- Upload-Multiple - POST, has an 'Upload-Multiple' header. Contains data in the body.

The 'Upload-Finish' request allows to specify the uploaded files should be ordered.
This may be needed if the files can be sent unordered. To state that the input files
are sent ordered, pass an empty list of files in the 'upload_file_order' field.
If the files are sent unordered, the ordered file list is expected
in the 'upload_file_order' field. It must be a list of string file paths,
relative to the dataset root.

Example:
files = [
    "cats/cat_1.jpg",
    "dogs/dog2.jpg",
    "image_3.png",
    ...
]

Independently of the file declaration field used
('client_files', 'server_files', etc.), when the 'predefined'
sorting method is selected, the uploaded files will be ordered according
to the '.jsonl' manifest file, if it is found in the list of files.
For archives (e.g. '.zip'), a manifest file ('*.jsonl') is required when using
the 'predefined' file ordering. Such file must be provided next to the archive
in the list of files. Read more about manifest files here:
https://docs.cvat.ai/docs/manual/advanced/dataset_manifest/

After all data is sent, the operation status can be retrieved via
the `GET /api/requests/<rq_id>`, where **rq_id** is request ID returned for this request.

Once data is attached to a task, it cannot be detached or replaced.


> Body parameter

```json
{
  "chunk_size": 0,
  "image_quality": 1,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "client_files": [],
  "server_files": [],
  "remote_files": [],
  "use_zip_chunks": false,
  "server_files_exclude": [],
  "cloud_storage_id": 0,
  "use_cache": false,
  "copy_data": false,
  "storage_method": "cache",
  "sorting_method": "lexicographical",
  "filename_pattern": "string",
  "job_file_mapping": [
    [
      "string"
    ]
  ],
  "upload_file_order": [
    "string"
  ],
  "validation_params": {
    "mode": "gt",
    "frame_selection_method": "random_uniform",
    "random_seed": 0,
    "frames": [
      "string"
    ],
    "frame_count": 1,
    "frame_share": 0,
    "frames_per_job_count": 1,
    "frames_per_job_share": 0
  }
}
```

<h3 id="attach-data-to-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Upload-Finish|header|boolean|false|Finishes data upload. Can be combined with Upload-Start header to create task data with one request|
|Upload-Multiple|header|boolean|false|Indicates that data with this request are single or multiple files that should be attached to a task|
|Upload-Start|header|boolean|false|Initializes data upload. Optionally, can include upload metadata in the request body.|
|id|path|integer|true|A unique integer value identifying this task.|
|body|body|[DataRequest](#schemadatarequest)|false|none|
|» chunk_size|body|integer \| null|false|Maximum number of frames per chunk|
|» image_quality|body|integer|false|Image quality to use during annotation, required for image and video-based tasks|
|» start_frame|body|integer|false|First frame index|
|» stop_frame|body|integer|false|Last frame index|
|» frame_filter|body|string|false|Frame filter. The only supported syntax is: 'step=N'|
|» client_files|body|[string(binary)]|false|<br>Uploaded files.<br>Must contain all files from job_file_mapping if job_file_mapping is not empty.<br>|
|» server_files|body|[string]|false|<br>Paths to files from a file share mounted on the server, or from a cloud storage.<br>Must contain all files from job_file_mapping if job_file_mapping is not empty.<br>|
|» remote_files|body|[string]|false|<br>Direct download URLs for files.<br>Must contain all files from job_file_mapping if job_file_mapping is not empty.<br>|
|» use_zip_chunks|body|boolean|false|When true, video chunks will be represented as zip archives with decoded video frames.<br>When false, video chunks are represented as video segments<br>|
|» server_files_exclude|body|[string]|false|Paths to files and directories from a file share mounted on the server, or from a cloud storage<br>that should be excluded from the directories specified in server_files.<br>This option cannot be used together with filename_pattern.<br>The server_files_exclude parameter cannot be used to exclude a part of dataset from an archive.<br><br>Examples:<br><br>Exclude all files from subfolder 'sub/sub_1/sub_2'and single file 'sub/image.jpg' from specified folder:<br>server_files = ['sub/'], server_files_exclude = ['sub/sub_1/sub_2/', 'sub/image.jpg']<br><br>Exclude all cloud storage files with prefix 'sub' from the content of manifest file:<br>server_files = ['manifest.jsonl'], server_files_exclude = ['sub/']<br>|
|» cloud_storage_id|body|integer \| null|false|If not null, the files referenced by server_files will be retrieved<br>from the cloud storage with the specified ID.<br>The cloud storages applicable depend on the context.<br>In the user sandbox, only the user sandbox cloud storages can be used.<br>In an organization, only the organization cloud storages can be used.<br>|
|» use_cache|body|boolean|false|Enable or disable task data chunk caching for the task.<br>Read more: https://docs.cvat.ai/docs/manual/advanced/data_on_fly/<br>|
|» copy_data|body|boolean|false|Copy data from the server file share to CVAT during the task creation.<br>This will create a copy of the data, making the server independent from<br>the file share availability<br>|
|» storage_method|body|[StorageMethod](#schemastoragemethod)|false|* `cache` - CACHE<br>* `file_system` - FILE_SYSTEM|
|» sorting_method|body|[SortingMethod](#schemasortingmethod)|false|* `lexicographical` - LEXICOGRAPHICAL<br>* `natural` - NATURAL<br>* `predefined` - PREDEFINED<br>* `random` - RANDOM|
|» filename_pattern|body|string \| null|false|A filename filter for cloud storage files<br>listed in the manifest. Supports fnmatch wildcards.<br>Read more: https://docs.python.org/3/library/fnmatch.html<br>|
|» job_file_mapping|body|[[string]]|false|<br>Represents a file-to-job mapping.<br>Useful to specify a custom job configuration during task creation.<br>This option is not compatible with most other job split-related options.<br>Files in the jobs must not overlap or repeat.<br>Job file mapping files must be a subset of the input files.<br>If directories are specified in server_files, all files obtained by recursive search<br>in the specified directories will be used as input files.<br>In case of missing items in the input files, an error will be raised.<br><br>Example:<br>[<br><br>    ["file1.jpg", "file2.jpg"], # job #1 files<br>    ["file3.png"], # job #2 files<br>    ["file4.jpg", "file5.png", "file6.bmp"], # job #3 files<br>]<br>|
|» upload_file_order|body|[string]|false|Allows to specify file order for client_file uploads.<br>Only valid with the "predefined" sorting method selected.<br><br>To state that the input files are sent in the correct order,<br>pass an empty list.<br><br>If you want to send files in an arbitrary order<br>and reorder them afterwards on the server,<br>pass the list of file names in the required order.<br>|
|» validation_params|body|object \| null|false|none|
|» » mode|body|[ValidationMode](#schemavalidationmode)|true|* `gt` - GT<br>* `gt_pool` - GT_POOL|
|» » frame_selection_method|body|[FrameSelectionMethod](#schemaframeselectionmethod)|false|* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|» » random_seed|body|integer|false|The seed value for the random number generator.<br>The same value will produce the same frame sets.<br>Applicable only to random frame selection methods.<br>By default, a random value is used.<br>|
|» » frames|body|[string]|false|The list of file names to be included in the validation set.<br>Applicable only to the "manual" frame selection method.<br>Can only be used for images.<br>|
|» » frame_count|body|integer|false|The number of frames to be included in the validation set.<br>Applicable only to the "random_uniform" frame selection method<br>|
|» » frame_share|body|number(double)|false|The share of frames to be included in the validation set.<br>Applicable only to the "random_uniform" frame selection method<br>|
|» » frames_per_job_count|body|integer|false|The number of frames to be included in the validation set from each annotation job.<br>Applicable only to the "random_per_job" frame selection method<br>|
|» » frames_per_job_share|body|number(double)|false|The share of frames to be included in the validation set from each annotation job.<br>Applicable only to the "random_per_job" frame selection method<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» storage_method|cache|
|» storage_method|file_system|
|» sorting_method|lexicographical|
|» sorting_method|natural|
|» sorting_method|predefined|
|» sorting_method|random|
|» » mode|gt|
|» » mode|gt_pool|
|» » frame_selection_method|random_uniform|
|» » frame_selection_method|random_per_job|
|» » frame_selection_method|manual|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="attach-data-to-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request to attach a data to a task has been accepted|[DataResponse](#schemadataresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get metainformation for media files in a task

<a id="opIdtasks_retrieve_data_meta"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/data/meta \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}/data/meta`

<h3 id="get-metainformation-for-media-files-in-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

> Example responses

> 200 Response

```json
{
  "chapters": [
    {
      "id": 0,
      "start": 0,
      "stop": 0,
      "metadata": {
        "title": "string"
      }
    }
  ],
  "chunks_updated_date": "1970-01-01T00:00:00Z",
  "chunk_size": 0,
  "size": 0,
  "image_quality": 0,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "frames": [
    {
      "width": 0,
      "height": 0,
      "name": "string",
      "related_files": 0,
      "has_related_context": true
    }
  ],
  "deleted_frames": [
    0
  ],
  "included_frames": [
    0
  ],
  "storage": {},
  "cloud_storage_id": 0
}
```

<h3 id="get-metainformation-for-media-files-in-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DataMetaRead](#schemadatametaread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update metainformation for media files in a task

<a id="opIdtasks_partial_update_data_meta"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/data/meta \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "deleted_frames": [
      0
    ],
    "cloud_storage_id": 0
  }'
```

`PATCH /api/tasks/{id}/data/meta`

> Body parameter

```json
{
  "deleted_frames": [
    0
  ],
  "cloud_storage_id": 0
}
```

<h3 id="update-metainformation-for-media-files-in-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|
|body|body|[PatchedDataMetaWriteRequest](#schemapatcheddatametawriterequest)|false|none|
|» deleted_frames|body|[integer]|false|none|
|» cloud_storage_id|body|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "chapters": [
    {
      "id": 0,
      "start": 0,
      "stop": 0,
      "metadata": {
        "title": "string"
      }
    }
  ],
  "chunks_updated_date": "1970-01-01T00:00:00Z",
  "chunk_size": 0,
  "size": 0,
  "image_quality": 0,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "frames": [
    {
      "width": 0,
      "height": 0,
      "name": "string",
      "related_files": 0,
      "has_related_context": true
    }
  ],
  "deleted_frames": [
    0
  ],
  "included_frames": [
    0
  ],
  "storage": {},
  "cloud_storage_id": 0
}
```

<h3 id="update-metainformation-for-media-files-in-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DataMetaRead](#schemadatametaread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Initialize process to export resource as a dataset in a specific format

<a id="opIdtasks_create_dataset_export"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/tasks/0/dataset/export?format=string' \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/tasks/{id}/dataset/export`

The request `POST /api/<projects|tasks|jobs>/id/dataset/export` will initialize
a background process to export a dataset. To check status of the process
please, use `GET /api/requests/<rq_id>` where **rq_id** is request ID returned in the response for this endpoint.


<h3 id="initialize-process-to-export-resource-as-a-dataset-in-a-specific-format-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Desired output file name|
|format|query|string|true|Desired output format name<br>You can get the list of supported formats at:<br>/server/annotation/formats|
|id|path|integer|true|A unique integer value identifying this task.|
|location|query|string|false|Where need to save downloaded dataset|
|save_images|query|boolean|false|Include images or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

> 409 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="initialize-process-to-export-resource-as-a-dataset-in-a-specific-format-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Exporting has been started|[RqId](#schemarqid)|
|405|Method Not Allowed|Format is not available|None|
|409|Conflict|Exporting is already in progress|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get a preview image for a task

<a id="opIdtasks_retrieve_preview"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/preview \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}/preview`

<h3 id="get-a-preview-image-for-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|RFC 7240 preference token. Send `handling=empty` to receive a 204 No Content response when no media-derived preview exists. Without the preference, the server returns a default placeholder image with status 200.|
|id|path|integer|true|A unique integer value identifying this task.|

<h3 id="get-a-preview-image-for-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task image preview|None|
|204|No Content|No media-derived preview is available. The client should render a placeholder image. Only returned when the request opts in via `Prefer: handling=empty`.|None|
|404|Not Found|Task image preview not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get the creation status of a task

<a id="opIdtasks_retrieve_status"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/status \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}/status`

<aside class="warning">
This operation is deprecated
</aside>

This method is deprecated and will be removed in one of the next releases. To check status of task creation, use new common API for managing background operations: GET /api/requests/?action=create&task_id=<task_id>

<h3 id="get-the-creation-status-of-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

> Example responses

> 200 Response

```json
{
  "state": "Queued",
  "message": "",
  "progress": 0
}
```

<h3 id="get-the-creation-status-of-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RqStatus](#schemarqstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Allows getting current validation configuration

<a id="opIdtasks_retrieve_validation_layout"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/validation_layout \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/tasks/{id}/validation_layout`

<h3 id="allows-getting-current-validation-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|

> Example responses

> 200 Response

```json
{
  "mode": "gt",
  "frames_per_job_count": 0,
  "validation_frames": [
    0
  ],
  "disabled_frames": [
    0
  ],
  "honeypot_count": 0,
  "honeypot_frames": [
    0
  ],
  "honeypot_real_frames": [
    0
  ]
}
```

<h3 id="allows-getting-current-validation-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TaskValidationLayoutRead](#schemataskvalidationlayoutread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Allows updating current validation configuration

<a id="opIdtasks_partial_update_validation_layout"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/0/validation_layout \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "frame_selection_method": "random_uniform"
  }'
```

`PATCH /api/tasks/{id}/validation_layout`


WARNING: this operation is not protected from race conditions.
It's up to the user to ensure no parallel calls to this operation happen.
It affects image access, including exports with images, backups, chunk downloading etc.


> Body parameter

```json
{
  "frame_selection_method": "random_uniform"
}
```

<h3 id="allows-updating-current-validation-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this task.|
|body|body|[PatchedTaskValidationLayoutWriteRequest](#schemapatchedtaskvalidationlayoutwriterequest)|false|none|
|» disabled_frames|body|[integer]|false|The list of frame ids to be excluded from validation<br>|
|» frame_selection_method|body|object|false|The method to use for frame selection of new real frames for honeypots in the task<br><br><br>* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|» honeypot_real_frames|body|[integer]|false|The list of frame ids. Applicable only to the "manual" frame selection method<br>|

> Example responses

> 200 Response

```json
{
  "mode": "gt",
  "frames_per_job_count": 0,
  "validation_frames": [
    0
  ],
  "disabled_frames": [
    0
  ],
  "honeypot_count": 0,
  "honeypot_frames": [
    0
  ],
  "honeypot_real_frames": [
    0
  ]
}
```

<h3 id="allows-updating-current-validation-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[TaskValidationLayoutRead](#schemataskvalidationlayoutread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Recreate a task from a backup

<a id="opIdtasks_create_backup"></a>

> Code samples

```bash
curl http://localhost:8080/api/tasks/backup/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "task_file": "string"
  }'
```

`POST /api/tasks/backup/`


The backup import process is as follows:

The first request POST /api/tasks/backup creates a background job on the server
in which the process of a task creating from an uploaded backup is carried out.

To check the status of the import process, use GET /api/requests/rq_id,
where rq_id is the request ID obtained from the response to the previous request.

Once the import completes successfully, the response will contain the ID
of the newly created task in the result_id field.


> Body parameter

```json
{
  "task_file": "string"
}
```

<h3 id="recreate-a-task-from-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|cloud_storage_id|query|integer|false|Storage id|
|filename|query|string|false|Backup file name|
|location|query|string|false|Where to import the backup file from|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[TaskFileRequest](#schemataskfilerequest)|false|none|
|» task_file|body|string(binary)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|location|cloud_storage|
|location|local|

> Example responses

> 202 Response

```json
{
  "rq_id": "string"
}
```

<h3 id="recreate-a-task-from-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Import of the backup file has started|[RqId](#schemarqid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-users">users</h1>

## List users

<a id="opIdusers_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/users \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/users`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['first_name', 'id', 'is_active', 'last_name', 'username'].|
|first_name|query|string|false|A simple equality filter for the first_name field|
|is_active|query|boolean|false|A simple equality filter for the is_active field|
|last_name|query|string|false|A simple equality filter for the last_name field|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|search|query|string|false|A search term. Available search_fields: ['first_name', 'last_name', 'username']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['first_name', 'id', 'is_active', 'last_name', 'username']|
|username|query|string|false|A simple equality filter for the username field|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "username": "string",
      "first_name": "string",
      "last_name": "string",
      "email": "user@example.com",
      "groups": [
        "string"
      ],
      "is_staff": true,
      "is_superuser": true,
      "is_active": true,
      "last_login": "1970-01-01T00:00:00Z",
      "date_joined": "1970-01-01T00:00:00Z",
      "has_analytics_access": true,
      "cvat_usage_reason": "work_project",
      "primary_role": "string",
      "planned_activities": [
        "set_up_projects"
      ],
      "data_types": [
        "string"
      ],
      "discovery_source": "string",
      "email_verified": true,
      "created_via": "registration"
    }
  ]
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedMetaUserList](#schemapaginatedmetauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get user details

<a id="opIdusers_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/users/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/users/{id}`

<h3 id="get-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|id|path|integer|true|A unique integer value identifying this user.|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "last_login": "1970-01-01T00:00:00Z",
  "date_joined": "1970-01-01T00:00:00Z",
  "has_analytics_access": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string",
  "email_verified": true,
  "created_via": "registration"
}
```

<h3 id="get-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MetaUser](#schemametauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a user

<a id="opIdusers_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/users/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/users/{id}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this user.|

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The user has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a user

<a id="opIdusers_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/users/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "username": "string",
    "first_name": "string",
    "last_name": "string",
    "email": "user@example.com",
    "groups": [
      "string"
    ],
    "is_staff": true,
    "is_superuser": true,
    "is_active": true,
    "cvat_usage_reason": "work_project",
    "primary_role": "string",
    "planned_activities": [
      "set_up_projects"
    ],
    "data_types": [
      "string"
    ],
    "discovery_source": "string"
  }'
```

`PATCH /api/users/{id}`

> Body parameter

```json
{
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this user.|
|body|body|[PatchedUserRequest](#schemapatcheduserrequest)|false|none|
|» username|body|string|false|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|» first_name|body|string|false|none|
|» last_name|body|string|false|none|
|» email|body|string(email)|false|none|
|» groups|body|[string]|false|none|
|» is_staff|body|boolean|false|Designates whether the user can log into this admin site.|
|» is_superuser|body|boolean|false|Designates that this user has all permissions without explicitly assigning them.|
|» is_active|body|boolean|false|Designates whether this user should be treated as active. Unselect this instead of deleting accounts.|
|» cvat_usage_reason|body|[CvatUsageReasonEnum](#schemacvatusagereasonenum) \| [BlankEnum](#schemablankenum)|false|The main reason the user uses CVAT.<br><br>* `work_project` - work_project<br>* `academic_research` - academic_research<br>* `teaching_or_coursework` - teaching_or_coursework<br>* `personal_project` - personal_project|
|» » *oneOf*|body|[CvatUsageReasonEnum](#schemacvatusagereasonenum)|false|* `work_project` - work_project<br>* `academic_research` - academic_research<br>* `teaching_or_coursework` - teaching_or_coursework<br>* `personal_project` - personal_project|
|» » *oneOf*|body|[BlankEnum](#schemablankenum)|false|none|
|» primary_role|body|string|false|A predefined role code or custom role text.|
|» planned_activities|body|[[PlannedActivitiesEnum](#schemaplannedactivitiesenum)]|false|Predefined activity codes selected by the user.|
|» data_types|body|[string]|false|Predefined data type codes and optionally one custom value.|
|» discovery_source|body|string|false|A predefined discovery source code or custom text.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|work_project|
|» » *oneOf*|academic_research|
|» » *oneOf*|teaching_or_coursework|
|» » *oneOf*|personal_project|
|» » *oneOf*|""|
|» planned_activities|set_up_projects|
|» planned_activities|annotate_data|
|» planned_activities|review_quality|
|» planned_activities|manage_annotators|
|» planned_activities|connect_models|
|» planned_activities|evaluate_for_organization|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "last_login": "1970-01-01T00:00:00Z",
  "date_joined": "1970-01-01T00:00:00Z",
  "has_analytics_access": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string",
  "email_verified": true,
  "created_via": "registration"
}
```

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MetaUser](#schemametauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get details of the current user

<a id="opIdusers_retrieve_self"></a>

> Code samples

```bash
curl http://localhost:8080/api/users/self \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/users/self`

Method returns an instance of a user who is currently authenticated

> Example responses

> 200 Response

```json
{
  "url": "http://example.com",
  "id": 0,
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "last_login": "1970-01-01T00:00:00Z",
  "date_joined": "1970-01-01T00:00:00Z",
  "has_analytics_access": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string",
  "email_verified": true,
  "created_via": "registration"
}
```

<h3 id="get-details-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MetaUser](#schemametauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

<h1 id="cvat-rest-api-webhooks">webhooks</h1>

## List webhooks

<a id="opIdwebhooks_list"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/webhooks`

<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|filter|query|string|false|<br>JSON Logic filter. This filter can be used to perform complex filtering by grouping rules.<br><br>For example, using such a filter you can get all resources created by you:<br><br>    - {"and":[{"==":[{"var":"owner"},"<user>"]}]}<br><br>Details about the syntax used can be found at the link: https://jsonlogic.com/<br><br> Available filter_fields: ['description', 'id', 'owner', 'project_id', 'target_url', 'type', 'updated_date'].|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|owner|query|string|false|A simple equality filter for the owner field|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|
|project_id|query|integer|false|A simple equality filter for the project_id field|
|search|query|string|false|A search term. Available search_fields: ['description', 'owner', 'target_url']|
|sort|query|string|false|Which field to use when ordering the results. Available ordering_fields: ['description', 'id', 'owner', 'project_id', 'target_url', 'type', 'updated_date']|
|target_url|query|string|false|A simple equality filter for the target_url field|
|type|query|string|false|A simple equality filter for the type field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|organization|
|type|project|
|type|server|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "url": "http://example.com",
      "target_url": "http://example.com",
      "description": "string",
      "type": "organization",
      "content_type": "application/json",
      "is_active": true,
      "enable_ssl": true,
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "project_id": 0,
      "organization": 0,
      "events": [
        "completed:request[calculate:quality]"
      ],
      "last_status": 0,
      "last_delivery_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedWebhookReadList](#schemapaginatedwebhookreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Create a webhook

<a id="opIdwebhooks_create"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "target_url": "http://example.com",
    "description": "string",
    "type": "organization",
    "content_type": "application/json",
    "secret": "string",
    "is_active": true,
    "enable_ssl": true,
    "project_id": 0,
    "events": [
      "completed:request[calculate:quality]"
    ]
  }'
```

`POST /api/webhooks`

> Body parameter

```json
{
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "secret": "string",
  "is_active": true,
  "enable_ssl": true,
  "project_id": 0,
  "events": [
    "completed:request[calculate:quality]"
  ]
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Organization|header|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org|query|string|false|Organization unique slug.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A non-empty value selects that organization.<br>|
|org_id|query|integer|false|Organization unique id.<br>If omitted, results from all organizations available to the user are returned<br>(unfiltered). An empty value ("") selects the personal sandbox workspace only.<br>A positive integer selects that organization.<br>|
|body|body|[WebhookWriteRequest](#schemawebhookwriterequest)|true|none|
|» target_url|body|string(uri)|true|none|
|» description|body|string|false|none|
|» type|body|[WebhookType](#schemawebhooktype)|true|* `organization` - ORGANIZATION<br>* `project` - PROJECT<br>* `server` - SERVER|
|» content_type|body|[WebhookContentType](#schemawebhookcontenttype)|false|* `application/json` - JSON|
|» secret|body|string|false|none|
|» is_active|body|boolean|false|none|
|» enable_ssl|body|boolean|false|none|
|» project_id|body|integer \| null|false|none|
|» events|body|[[EventsEnum](#schemaeventsenum)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|organization|
|» type|project|
|» type|server|
|» content_type|application/json|
|» events|completed:request[calculate:quality]|
|» events|completed:request[create:task]|
|» events|completed:request[export:annotations]|
|» events|completed:request[export:backup]|
|» events|completed:request[export:dataset]|
|» events|completed:request[merge:job]|
|» events|completed:request[merge:task]|
|» events|create:comment|
|» events|create:invitation|
|» events|create:issue|
|» events|create:job|
|» events|create:membership|
|» events|create:organization|
|» events|create:project|
|» events|create:task|
|» events|create:user|
|» events|delete:comment|
|» events|delete:invitation|
|» events|delete:issue|
|» events|delete:job|
|» events|delete:membership|
|» events|delete:organization|
|» events|delete:project|
|» events|delete:task|
|» events|delete:user|
|» events|update:comment|
|» events|update:issue|
|» events|update:job|
|» events|update:membership|
|» events|update:organization|
|» events|update:project|
|» events|update:task|
|» events|update:user|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "url": "http://example.com",
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "is_active": true,
  "enable_ssl": true,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "project_id": 0,
  "organization": 0,
  "events": [
    "completed:request[calculate:quality]"
  ],
  "last_status": 0,
  "last_delivery_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[WebhookRead](#schemawebhookread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get webhook details

<a id="opIdwebhooks_retrieve"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0 \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/webhooks/{id}`

<h3 id="get-webhook-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this webhook.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "http://example.com",
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "is_active": true,
  "enable_ssl": true,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "project_id": 0,
  "organization": 0,
  "events": [
    "completed:request[calculate:quality]"
  ],
  "last_status": 0,
  "last_delivery_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-webhook-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[WebhookRead](#schemawebhookread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Replace a webhook

<a id="opIdwebhooks_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "target_url": "http://example.com",
    "description": "string",
    "type": "organization",
    "content_type": "application/json",
    "secret": "string",
    "is_active": true,
    "enable_ssl": true,
    "project_id": 0,
    "events": [
      "completed:request[calculate:quality]"
    ]
  }'
```

`PUT /api/webhooks/{id}`

> Body parameter

```json
{
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "secret": "string",
  "is_active": true,
  "enable_ssl": true,
  "project_id": 0,
  "events": [
    "completed:request[calculate:quality]"
  ]
}
```

<h3 id="replace-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this webhook.|
|body|body|[WebhookWriteRequest](#schemawebhookwriterequest)|true|none|
|» target_url|body|string(uri)|true|none|
|» description|body|string|false|none|
|» type|body|[WebhookType](#schemawebhooktype)|true|* `organization` - ORGANIZATION<br>* `project` - PROJECT<br>* `server` - SERVER|
|» content_type|body|[WebhookContentType](#schemawebhookcontenttype)|false|* `application/json` - JSON|
|» secret|body|string|false|none|
|» is_active|body|boolean|false|none|
|» enable_ssl|body|boolean|false|none|
|» project_id|body|integer \| null|false|none|
|» events|body|[[EventsEnum](#schemaeventsenum)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|organization|
|» type|project|
|» type|server|
|» content_type|application/json|
|» events|completed:request[calculate:quality]|
|» events|completed:request[create:task]|
|» events|completed:request[export:annotations]|
|» events|completed:request[export:backup]|
|» events|completed:request[export:dataset]|
|» events|completed:request[merge:job]|
|» events|completed:request[merge:task]|
|» events|create:comment|
|» events|create:invitation|
|» events|create:issue|
|» events|create:job|
|» events|create:membership|
|» events|create:organization|
|» events|create:project|
|» events|create:task|
|» events|create:user|
|» events|delete:comment|
|» events|delete:invitation|
|» events|delete:issue|
|» events|delete:job|
|» events|delete:membership|
|» events|delete:organization|
|» events|delete:project|
|» events|delete:task|
|» events|delete:user|
|» events|update:comment|
|» events|update:issue|
|» events|update:job|
|» events|update:membership|
|» events|update:organization|
|» events|update:project|
|» events|update:task|
|» events|update:user|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "http://example.com",
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "is_active": true,
  "enable_ssl": true,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "project_id": 0,
  "organization": 0,
  "events": [
    "completed:request[calculate:quality]"
  ],
  "last_status": 0,
  "last_delivery_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="replace-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[WebhookRead](#schemawebhookread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Delete a webhook

<a id="opIdwebhooks_destroy"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/webhooks/{id}`

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this webhook.|

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The webhook has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Update a webhook

<a id="opIdwebhooks_partial_update"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "target_url": "http://example.com",
    "description": "string",
    "content_type": "application/json",
    "secret": "string",
    "is_active": true,
    "enable_ssl": true,
    "events": [
      "completed:request[calculate:quality]"
    ]
  }'
```

`PATCH /api/webhooks/{id}`

> Body parameter

```json
{
  "target_url": "http://example.com",
  "description": "string",
  "content_type": "application/json",
  "secret": "string",
  "is_active": true,
  "enable_ssl": true,
  "events": [
    "completed:request[calculate:quality]"
  ]
}
```

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this webhook.|
|body|body|[PatchedWebhookWriteRequest](#schemapatchedwebhookwriterequest)|false|none|
|» target_url|body|string(uri)|false|none|
|» description|body|string|false|none|
|» content_type|body|[WebhookContentType](#schemawebhookcontenttype)|false|* `application/json` - JSON|
|» secret|body|string|false|none|
|» is_active|body|boolean|false|none|
|» enable_ssl|body|boolean|false|none|
|» events|body|[[EventsEnum](#schemaeventsenum)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» content_type|application/json|
|» events|completed:request[calculate:quality]|
|» events|completed:request[create:task]|
|» events|completed:request[export:annotations]|
|» events|completed:request[export:backup]|
|» events|completed:request[export:dataset]|
|» events|completed:request[merge:job]|
|» events|completed:request[merge:task]|
|» events|create:comment|
|» events|create:invitation|
|» events|create:issue|
|» events|create:job|
|» events|create:membership|
|» events|create:organization|
|» events|create:project|
|» events|create:task|
|» events|create:user|
|» events|delete:comment|
|» events|delete:invitation|
|» events|delete:issue|
|» events|delete:job|
|» events|delete:membership|
|» events|delete:organization|
|» events|delete:project|
|» events|delete:task|
|» events|delete:user|
|» events|update:comment|
|» events|update:issue|
|» events|update:job|
|» events|update:membership|
|» events|update:organization|
|» events|update:project|
|» events|update:task|
|» events|update:user|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "url": "http://example.com",
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "is_active": true,
  "enable_ssl": true,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "project_id": 0,
  "organization": 0,
  "events": [
    "completed:request[calculate:quality]"
  ],
  "last_status": 0,
  "last_delivery_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[WebhookRead](#schemawebhookread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## List deliveries for a webhook

<a id="opIdwebhooks_list_deliveries"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0/deliveries \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/webhooks/{id}/deliveries`

<h3 id="list-deliveries-for-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this webhook.|
|page|query|integer|false|A page number within the paginated result set.|
|page_size|query|integer|false|Number of results to return per page.|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "webhook_id": 0,
      "event": "string",
      "status_code": 0,
      "redelivery": true,
      "attempt": 0,
      "request_duration": 0,
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "changed_fields": "string",
      "request": null,
      "response": null
    }
  ]
}
```

<h3 id="list-deliveries-for-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedWebhookDeliveryReadList](#schemapaginatedwebhookdeliveryreadlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Get details of a webhook delivery

<a id="opIdwebhooks_retrieve_deliveries"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0/deliveries/string \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/webhooks/{id}/deliveries/{delivery_id}`

<h3 id="get-details-of-a-webhook-delivery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delivery_id|path|string|true|none|
|id|path|integer|true|A unique integer value identifying this webhook.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "webhook_id": 0,
  "event": "string",
  "status_code": 0,
  "redelivery": true,
  "attempt": 0,
  "request_duration": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "changed_fields": "string",
  "request": null,
  "response": null
}
```

<h3 id="get-details-of-a-webhook-delivery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[WebhookDeliveryRead](#schemawebhookdeliveryread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Redeliver a webhook delivery

<a id="opIdwebhooks_create_deliveries_redelivery"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0/deliveries/string/redelivery \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /api/webhooks/{id}/deliveries/{delivery_id}/redelivery`

<h3 id="redeliver-a-webhook-delivery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|delivery_id|path|string|true|none|
|id|path|integer|true|A unique integer value identifying this webhook.|

<h3 id="redeliver-a-webhook-delivery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## Send a ping webhook

<a id="opIdwebhooks_create_ping"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/0/ping \
  -X POST \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/webhooks/{id}/ping`

<h3 id="send-a-ping-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A unique integer value identifying this webhook.|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "webhook_id": 0,
  "event": "string",
  "status_code": 0,
  "redelivery": true,
  "attempt": 0,
  "request_duration": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "changed_fields": "string",
  "request": null,
  "response": null
}
```

<h3 id="send-a-ping-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[WebhookDeliveryRead](#schemawebhookdeliveryread)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

## List available webhook events

<a id="opIdwebhooks_retrieve_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/webhooks/events \
  -H 'Accept: application/vnd.cvat+json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/webhooks/events`

<h3 id="list-available-webhook-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Type of webhook|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|organization|
|type|project|
|type|server|

> Example responses

> 200 Response

```json
{
  "webhook_type": "organization",
  "events": [
    {
      "key": "string",
      "group": {
        "display_name": "string"
      }
    }
  ]
}
```

<h3 id="list-available-webhook-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Events](#schemaevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
tokenAuth, accessTokenAuth, sessionAuth & csrfAuth & csrfHeaderAuth, basicAuth
</aside>

# Schemas

<h2 id="tocS_About">About</h2>
<!-- backwards compatibility -->
<a id="schemaabout"></a>
<a id="schema_About"></a>
<a id="tocSabout"></a>
<a id="tocsabout"></a>

```json
{
  "name": "string",
  "description": "string",
  "version": "string",
  "logo_url": "string",
  "subtitle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|version|string|true|none|none|
|logo_url|string|true|none|none|
|subtitle|string|true|none|none|

<h2 id="tocS_AcceptInvitationRead">AcceptInvitationRead</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationread"></a>
<a id="schema_AcceptInvitationRead"></a>
<a id="tocSacceptinvitationread"></a>
<a id="tocsacceptinvitationread"></a>

```json
{
  "organization_slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization_slug|string|true|none|none|

<h2 id="tocS_AccessTokenRead">AccessTokenRead</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenread"></a>
<a id="schema_AccessTokenRead"></a>
<a id="tocSaccesstokenread"></a>
<a id="tocsaccesstokenread"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "last_used_date": "1970-01-01T00:00:00Z",
  "read_only": true,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|name|string|false|read-only|A free-form name for the token.|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|expiry_date|string(date-time) \| null|false|read-only|Once the token expires, clients cannot use it anymore.|
|last_used_date|string(date-time) \| null|false|read-only|The last use date of the token. This field is NOT updated after each<br>user request. The minimum expected resolution should be 1 day.<br>|
|read_only|boolean|false|read-only|none|
|owner|[BasicUser](#schemabasicuser)|false|none|none|
|value|string|false|none|The raw value of the token. Must be saved by the user, returned only once|

<h2 id="tocS_AccessTokenWriteRequest">AccessTokenWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenwriterequest"></a>
<a id="schema_AccessTokenWriteRequest"></a>
<a id="tocSaccesstokenwriterequest"></a>
<a id="tocsaccesstokenwriterequest"></a>

```json
{
  "name": "string",
  "expiry_date": "1970-01-01T00:00:00Z",
  "read_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A free-form name for the token. Doesn't have to be unique|
|expiry_date|string(date-time) \| null|false|none|Once the token expires, clients cannot use it anymore.<br>If not set, the token will not expire.<br>|
|read_only|boolean|false|none|none|

<h2 id="tocS_AggregationEnum">AggregationEnum</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationenum"></a>
<a id="schema_AggregationEnum"></a>
<a id="tocSaggregationenum"></a>
<a id="tocsaggregationenum"></a>

```json
"micro"
```

* `micro` - micro
* `mean` - mean
* `label` - label

<h2 id="tocS_AllWebhookType">AllWebhookType</h2>
<!-- backwards compatibility -->
<a id="schemaallwebhooktype"></a>
<a id="schema_AllWebhookType"></a>
<a id="tocSallwebhooktype"></a>
<a id="tocsallwebhooktype"></a>

```json
"organization"
```

* `organization` - ORGANIZATION
* `project` - PROJECT
* `server` - SERVER
* `all` - ALL

<h2 id="tocS_AnnotationConflict">AnnotationConflict</h2>
<!-- backwards compatibility -->
<a id="schemaannotationconflict"></a>
<a id="schema_AnnotationConflict"></a>
<a id="tocSannotationconflict"></a>
<a id="tocsannotationconflict"></a>

```json
{
  "id": 0,
  "frame": 0,
  "type": {},
  "annotation_ids": [
    {
      "obj_id": 0,
      "job_id": 0,
      "type": {},
      "shape_type": "rectangle"
    }
  ],
  "report_id": 0,
  "severity": {},
  "attribute_names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|frame|integer|false|read-only|none|
|type|object|false|read-only|none|
|annotation_ids|[[AnnotationId](#schemaannotationid)]|true|none|none|
|report_id|integer|false|read-only|none|
|severity|object|false|read-only|none|
|attribute_names|[string]|false|read-only|none|

<h2 id="tocS_AnnotationConflictAnnotationType">AnnotationConflictAnnotationType</h2>
<!-- backwards compatibility -->
<a id="schemaannotationconflictannotationtype"></a>
<a id="schema_AnnotationConflictAnnotationType"></a>
<a id="tocSannotationconflictannotationtype"></a>
<a id="tocsannotationconflictannotationtype"></a>

```json
"tag"
```

* `tag` - TAG
* `shape` - SHAPE
* `track` - TRACK

<h2 id="tocS_AnnotationConflictSeverity">AnnotationConflictSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaannotationconflictseverity"></a>
<a id="schema_AnnotationConflictSeverity"></a>
<a id="tocSannotationconflictseverity"></a>
<a id="tocsannotationconflictseverity"></a>

```json
"error"
```

* `error` - ERROR

<h2 id="tocS_AnnotationConflictType">AnnotationConflictType</h2>
<!-- backwards compatibility -->
<a id="schemaannotationconflicttype"></a>
<a id="schema_AnnotationConflictType"></a>
<a id="tocSannotationconflicttype"></a>
<a id="tocsannotationconflicttype"></a>

```json
"missing_annotation"
```

* `missing_annotation` - MISSING_ANNOTATION
* `extra_annotation` - EXTRA_ANNOTATION
* `mismatching_label` - MISMATCHING_LABEL
* `mismatching_direction` - MISMATCHING_DIRECTION
* `mismatching_attributes` - MISMATCHING_ATTRIBUTES
* `mismatching_groups` - MISMATCHING_GROUPS
* `covered_annotation` - COVERED_ANNOTATION

<h2 id="tocS_AnnotationFileRequest">AnnotationFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotationfilerequest"></a>
<a id="schema_AnnotationFileRequest"></a>
<a id="tocSannotationfilerequest"></a>
<a id="tocsannotationfilerequest"></a>

```json
{
  "annotation_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation_file|string(binary)|true|none|none|

<h2 id="tocS_AnnotationGuideRead">AnnotationGuideRead</h2>
<!-- backwards compatibility -->
<a id="schemaannotationguideread"></a>
<a id="schema_AnnotationGuideRead"></a>
<a id="tocSannotationguideread"></a>
<a id="tocsannotationguideread"></a>

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "markdown": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|task_id|integer \| null|false|read-only|none|
|project_id|integer \| null|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|markdown|string|false|read-only|none|

<h2 id="tocS_AnnotationGuideWriteRequest">AnnotationGuideWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotationguidewriterequest"></a>
<a id="schema_AnnotationGuideWriteRequest"></a>
<a id="tocSannotationguidewriterequest"></a>
<a id="tocsannotationguidewriterequest"></a>

```json
{
  "task_id": 0,
  "project_id": 0,
  "markdown": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|integer \| null|false|none|none|
|project_id|integer \| null|false|none|none|
|markdown|string|false|none|none|

<h2 id="tocS_AnnotationId">AnnotationId</h2>
<!-- backwards compatibility -->
<a id="schemaannotationid"></a>
<a id="schema_AnnotationId"></a>
<a id="tocSannotationid"></a>
<a id="tocsannotationid"></a>

```json
{
  "obj_id": 0,
  "job_id": 0,
  "type": {},
  "shape_type": "rectangle"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|obj_id|integer|false|read-only|none|
|job_id|integer|false|read-only|none|
|type|object|false|read-only|none|
|shape_type|[ShapeType](#schemashapetype) \| [NullEnum](#schemanullenum) \| null|false|read-only|none|

<h2 id="tocS_AnnotationTypeEnum">AnnotationTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaannotationtypeenum"></a>
<a id="schema_AnnotationTypeEnum"></a>
<a id="tocSannotationtypeenum"></a>
<a id="tocsannotationtypeenum"></a>

```json
"tag"
```

* `tag` - Tag
* `rectangle` - Rectangle
* `skeleton` - Skeleton
* `skeleton_keypoint` - Skeleton Keypoint
* `points` - Points
* `polyline` - Polyline
* `mask` - Mask
* `polygon` - Polygon
* `ellipse` - Ellipse

<h2 id="tocS_AssetRead">AssetRead</h2>
<!-- backwards compatibility -->
<a id="schemaassetread"></a>
<a id="schema_AssetRead"></a>
<a id="tocSassetread"></a>
<a id="tocsassetread"></a>

```json
{
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "filename": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|string(uuid)|false|read-only|none|
|filename|string|true|none|none|
|created_date|string(date-time)|false|read-only|none|
|owner|[BasicUser](#schemabasicuser)|false|none|none|
|guide_id|integer|false|read-only|none|

<h2 id="tocS_AssetWriteRequest">AssetWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassetwriterequest"></a>
<a id="schema_AssetWriteRequest"></a>
<a id="tocSassetwriterequest"></a>
<a id="tocsassetwriterequest"></a>

```json
{
  "guide_id": 0,
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guide_id|integer|true|none|none|
|file|string(binary)|true|write-only|none|

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "id": 0,
  "name": "string",
  "mutable": true,
  "input_type": "checkbox",
  "default_value": "string",
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|true|none|none|
|mutable|boolean|true|none|none|
|input_type|[InputTypeEnum](#schemainputtypeenum)|true|none|* `checkbox` - CHECKBOX<br>* `radio` - RADIO<br>* `number` - NUMBER<br>* `text` - TEXT<br>* `select` - SELECT|
|default_value|string|false|none|none|
|values|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|input_type|checkbox|
|input_type|radio|
|input_type|number|
|input_type|text|
|input_type|select|

<h2 id="tocS_AttributeComparison">AttributeComparison</h2>
<!-- backwards compatibility -->
<a id="schemaattributecomparison"></a>
<a id="schema_AttributeComparison"></a>
<a id="tocSattributecomparison"></a>
<a id="tocsattributecomparison"></a>

```json
{
  "default": {
    "enabled": true,
    "comparator": "exact",
    "threshold": 0
  },
  "rules": [
    {
      "spec_id": 0,
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|object \| null|false|none|none|
|rules|[[AttributeComparisonRule](#schemaattributecomparisonrule)]|false|none|none|

<h2 id="tocS_AttributeComparisonDefaultRule">AttributeComparisonDefaultRule</h2>
<!-- backwards compatibility -->
<a id="schemaattributecomparisondefaultrule"></a>
<a id="schema_AttributeComparisonDefaultRule"></a>
<a id="tocSattributecomparisondefaultrule"></a>
<a id="tocsattributecomparisondefaultrule"></a>

```json
{
  "enabled": true,
  "comparator": "exact",
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean \| null|false|none|none|
|comparator|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|threshold|number(double) \| null|false|none|none|

<h2 id="tocS_AttributeComparisonDefaultRuleRequest">AttributeComparisonDefaultRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattributecomparisondefaultrulerequest"></a>
<a id="schema_AttributeComparisonDefaultRuleRequest"></a>
<a id="tocSattributecomparisondefaultrulerequest"></a>
<a id="tocsattributecomparisondefaultrulerequest"></a>

```json
{
  "enabled": true,
  "comparator": "exact",
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean \| null|false|none|none|
|comparator|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|threshold|number(double) \| null|false|none|none|

<h2 id="tocS_AttributeComparisonRequest">AttributeComparisonRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattributecomparisonrequest"></a>
<a id="schema_AttributeComparisonRequest"></a>
<a id="tocSattributecomparisonrequest"></a>
<a id="tocsattributecomparisonrequest"></a>

```json
{
  "default": {
    "enabled": true,
    "comparator": "exact",
    "threshold": 0
  },
  "rules": [
    {
      "spec_id": 0,
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|object \| null|false|none|none|
|rules|[[AttributeComparisonRuleRequest](#schemaattributecomparisonrulerequest)]|false|none|none|

<h2 id="tocS_AttributeComparisonRule">AttributeComparisonRule</h2>
<!-- backwards compatibility -->
<a id="schemaattributecomparisonrule"></a>
<a id="schema_AttributeComparisonRule"></a>
<a id="tocSattributecomparisonrule"></a>
<a id="tocsattributecomparisonrule"></a>

```json
{
  "spec_id": 0,
  "enabled": true,
  "comparator": "exact",
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer|true|none|AttributeSpec id to override.|
|enabled|boolean|true|none|none|
|comparator|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|threshold|number(double) \| null|false|none|none|

<h2 id="tocS_AttributeComparisonRuleRequest">AttributeComparisonRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattributecomparisonrulerequest"></a>
<a id="schema_AttributeComparisonRuleRequest"></a>
<a id="tocSattributecomparisonrulerequest"></a>
<a id="tocsattributecomparisonrulerequest"></a>

```json
{
  "spec_id": 0,
  "enabled": true,
  "comparator": "exact",
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer|true|none|AttributeSpec id to override.|
|enabled|boolean|true|none|none|
|comparator|[ComparatorEnum](#schemacomparatorenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|threshold|number(double) \| null|false|none|none|

<h2 id="tocS_AttributeRequest">AttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattributerequest"></a>
<a id="schema_AttributeRequest"></a>
<a id="tocSattributerequest"></a>
<a id="tocsattributerequest"></a>

```json
{
  "id": 0,
  "name": "string",
  "mutable": true,
  "input_type": "checkbox",
  "default_value": "string",
  "values": [
    "string"
  ],
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|true|none|none|
|mutable|boolean|true|none|none|
|input_type|[InputTypeEnum](#schemainputtypeenum)|true|none|* `checkbox` - CHECKBOX<br>* `radio` - RADIO<br>* `number` - NUMBER<br>* `text` - TEXT<br>* `select` - SELECT|
|default_value|string|false|none|none|
|values|[string]|true|none|none|
|deleted|boolean|false|write-only|Delete the attribute and all related annotation values.|

#### Enumerated Values

|Property|Value|
|---|---|
|input_type|checkbox|
|input_type|radio|
|input_type|number|
|input_type|text|
|input_type|select|

<h2 id="tocS_AttributeVal">AttributeVal</h2>
<!-- backwards compatibility -->
<a id="schemaattributeval"></a>
<a id="schema_AttributeVal"></a>
<a id="tocSattributeval"></a>
<a id="tocsattributeval"></a>

```json
{
  "spec_id": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_AttributeValRequest">AttributeValRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalrequest"></a>
<a id="schema_AttributeValRequest"></a>
<a id="tocSattributevalrequest"></a>
<a id="tocsattributevalrequest"></a>

```json
{
  "spec_id": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spec_id|integer|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_BasicOrganization">BasicOrganization</h2>
<!-- backwards compatibility -->
<a id="schemabasicorganization"></a>
<a id="schema_BasicOrganization"></a>
<a id="tocSbasicorganization"></a>
<a id="tocsbasicorganization"></a>

```json
{
  "id": 0,
  "slug": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|slug|string|false|read-only|none|

<h2 id="tocS_BasicUser">BasicUser</h2>
<!-- backwards compatibility -->
<a id="schemabasicuser"></a>
<a id="schema_BasicUser"></a>
<a id="tocSbasicuser"></a>
<a id="tocsbasicuser"></a>

```json
{
  "url": "http://example.com",
  "id": 0,
  "username": "string",
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|first_name|string|false|none|none|
|last_name|string|false|none|none|

<h2 id="tocS_BasicUserRequest">BasicUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemabasicuserrequest"></a>
<a id="schema_BasicUserRequest"></a>
<a id="tocSbasicuserrequest"></a>
<a id="tocsbasicuserrequest"></a>

```json
{
  "username": "string",
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|first_name|string|false|none|none|
|last_name|string|false|none|none|

<h2 id="tocS_BlankEnum">BlankEnum</h2>
<!-- backwards compatibility -->
<a id="schemablankenum"></a>
<a id="schema_BlankEnum"></a>
<a id="tocSblankenum"></a>
<a id="tocsblankenum"></a>

```json
""
```

<h2 id="tocS_Chapter">Chapter</h2>
<!-- backwards compatibility -->
<a id="schemachapter"></a>
<a id="schema_Chapter"></a>
<a id="tocSchapter"></a>
<a id="tocschapter"></a>

```json
{
  "id": 0,
  "start": 0,
  "stop": 0,
  "metadata": {
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|start|integer|true|none|none|
|stop|integer|true|none|none|
|metadata|[ChapterMetadata](#schemachaptermetadata)|true|none|none|

<h2 id="tocS_ChapterMetadata">ChapterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemachaptermetadata"></a>
<a id="schema_ChapterMetadata"></a>
<a id="tocSchaptermetadata"></a>
<a id="tocschaptermetadata"></a>

```json
{
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|

<h2 id="tocS_ChunkType">ChunkType</h2>
<!-- backwards compatibility -->
<a id="schemachunktype"></a>
<a id="schema_ChunkType"></a>
<a id="tocSchunktype"></a>
<a id="tocschunktype"></a>

```json
"video"
```

* `video` - VIDEO
* `imageset` - IMAGESET
* `audio_mp3` - AUDIO_MP3

<h2 id="tocS_ClientEvents">ClientEvents</h2>
<!-- backwards compatibility -->
<a id="schemaclientevents"></a>
<a id="schema_ClientEvents"></a>
<a id="tocSclientevents"></a>
<a id="tocsclientevents"></a>

```json
{
  "events": [],
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[Event](#schemaevent)]|false|none|none|
|timestamp|string(date-time)|true|none|none|

<h2 id="tocS_ClientEventsRequest">ClientEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclienteventsrequest"></a>
<a id="schema_ClientEventsRequest"></a>
<a id="tocSclienteventsrequest"></a>
<a id="tocsclienteventsrequest"></a>

```json
{
  "events": [],
  "previous_event": {
    "scope": "string",
    "obj_name": "string",
    "obj_id": 0,
    "obj_val": "string",
    "source": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "count": 0,
    "duration": 0,
    "project_id": 0,
    "task_id": 0,
    "job_id": 0,
    "user_id": 0,
    "user_name": "string",
    "user_email": "string",
    "org_id": 0,
    "org_slug": "string",
    "payload": "string"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[EventRequest](#schemaeventrequest)]|false|none|none|
|previous_event|object \| null|false|write-only|none|
|timestamp|string(date-time)|true|none|none|

<h2 id="tocS_CloudStorageContent">CloudStorageContent</h2>
<!-- backwards compatibility -->
<a id="schemacloudstoragecontent"></a>
<a id="schema_CloudStorageContent"></a>
<a id="tocScloudstoragecontent"></a>
<a id="tocscloudstoragecontent"></a>

```json
{
  "next": "string",
  "content": [
    {
      "name": "string",
      "type": "REG",
      "mime_type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string \| null|false|none|This token is used to continue listing files in the bucket.|
|content|[[FileInfo](#schemafileinfo)]|true|none|none|

<h2 id="tocS_CloudStorageRead">CloudStorageRead</h2>
<!-- backwards compatibility -->
<a id="schemacloudstorageread"></a>
<a id="schema_CloudStorageRead"></a>
<a id="tocScloudstorageread"></a>
<a id="tocscloudstorageread"></a>

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "manifests": [],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "provider_type": "AWS_S3_BUCKET",
  "resource": "string",
  "display_name": "string",
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "specific_attributes": "string",
  "description": "string",
  "organization": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|owner|object \| null|false|none|none|
|manifests|[string]|false|none|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|provider_type|[ProviderTypeEnum](#schemaprovidertypeenum)|true|none|* `AWS_S3_BUCKET` - Amazon S3<br>* `AZURE_CONTAINER` - Azure Blob Storage<br>* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage|
|resource|string|true|none|none|
|display_name|string|true|none|none|
|credentials_type|[CredentialsTypeEnum](#schemacredentialstypeenum)|true|none|* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR<br>* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR<br>* `KEY_FILE_PATH` - KEY_FILE_PATH<br>* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS<br>* `CONNECTION_STRING` - CONNECTION_STRING|
|specific_attributes|string|false|none|none|
|description|string|false|none|none|
|organization|integer \| null|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_type|AWS_S3_BUCKET|
|provider_type|AZURE_CONTAINER|
|provider_type|GOOGLE_CLOUD_STORAGE|
|credentials_type|KEY_SECRET_KEY_PAIR|
|credentials_type|ACCOUNT_NAME_TOKEN_PAIR|
|credentials_type|KEY_FILE_PATH|
|credentials_type|ANONYMOUS_ACCESS|
|credentials_type|CONNECTION_STRING|

<h2 id="tocS_CloudStorageWriteRequest">CloudStorageWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloudstoragewriterequest"></a>
<a id="schema_CloudStorageWriteRequest"></a>
<a id="tocScloudstoragewriterequest"></a>
<a id="tocscloudstoragewriterequest"></a>

```json
{
  "provider_type": "AWS_S3_BUCKET",
  "resource": "string",
  "display_name": "string",
  "owner": {
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "session_token": "string",
  "account_name": "string",
  "key": "string",
  "secret_key": "string",
  "connection_string": "string",
  "key_file": "string",
  "specific_attributes": "string",
  "description": "string",
  "manifests": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider_type|[ProviderTypeEnum](#schemaprovidertypeenum)|true|none|* `AWS_S3_BUCKET` - Amazon S3<br>* `AZURE_CONTAINER` - Azure Blob Storage<br>* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage|
|resource|string|true|none|none|
|display_name|string|true|none|none|
|owner|[BasicUserRequest](#schemabasicuserrequest)|false|none|none|
|credentials_type|[CredentialsTypeEnum](#schemacredentialstypeenum)|true|none|* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR<br>* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR<br>* `KEY_FILE_PATH` - KEY_FILE_PATH<br>* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS<br>* `CONNECTION_STRING` - CONNECTION_STRING|
|session_token|string|false|none|none|
|account_name|string|false|none|none|
|key|string|false|none|none|
|secret_key|string|false|none|none|
|connection_string|string|false|none|none|
|key_file|string(binary)|false|none|none|
|specific_attributes|string|false|none|none|
|description|string|false|none|none|
|manifests|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_type|AWS_S3_BUCKET|
|provider_type|AZURE_CONTAINER|
|provider_type|GOOGLE_CLOUD_STORAGE|
|credentials_type|KEY_SECRET_KEY_PAIR|
|credentials_type|ACCOUNT_NAME_TOKEN_PAIR|
|credentials_type|KEY_FILE_PATH|
|credentials_type|ANONYMOUS_ACCESS|
|credentials_type|CONNECTION_STRING|

<h2 id="tocS_CommentRead">CommentRead</h2>
<!-- backwards compatibility -->
<a id="schemacommentread"></a>
<a id="schema_CommentRead"></a>
<a id="tocScommentread"></a>
<a id="tocscommentread"></a>

```json
{
  "id": 0,
  "issue": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "message": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|issue|integer|false|read-only|none|
|owner|object \| null|false|none|none|
|message|string|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|

<h2 id="tocS_CommentWriteRequest">CommentWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommentwriterequest"></a>
<a id="schema_CommentWriteRequest"></a>
<a id="tocScommentwriterequest"></a>
<a id="tocscommentwriterequest"></a>

```json
{
  "issue": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issue|integer|true|none|none|
|message|string|false|none|none|

<h2 id="tocS_CommentsSummary">CommentsSummary</h2>
<!-- backwards compatibility -->
<a id="schemacommentssummary"></a>
<a id="schema_CommentsSummary"></a>
<a id="tocScommentssummary"></a>
<a id="tocscommentssummary"></a>

```json
{
  "count": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_ComparatorEnum">ComparatorEnum</h2>
<!-- backwards compatibility -->
<a id="schemacomparatorenum"></a>
<a id="schema_ComparatorEnum"></a>
<a id="tocScomparatorenum"></a>
<a id="tocscomparatorenum"></a>

```json
"exact"
```

* `exact` - exact
* `levenshtein` - levenshtein

<h2 id="tocS_ConsensusMergeCreateRequest">ConsensusMergeCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconsensusmergecreaterequest"></a>
<a id="schema_ConsensusMergeCreateRequest"></a>
<a id="tocSconsensusmergecreaterequest"></a>
<a id="tocsconsensusmergecreaterequest"></a>

```json
{
  "task_id": 0,
  "job_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|integer|false|write-only|none|
|job_id|integer|false|write-only|none|

<h2 id="tocS_ConsensusSettings">ConsensusSettings</h2>
<!-- backwards compatibility -->
<a id="schemaconsensussettings"></a>
<a id="schema_ConsensusSettings"></a>
<a id="tocSconsensussettings"></a>
<a id="tocsconsensussettings"></a>

```json
{
  "id": 0,
  "task_id": 0,
  "iou_threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|task_id|integer|false|read-only|none|
|iou_threshold|number(double)|false|none|Pairwise annotation matching IoU threshold|

<h2 id="tocS_CreatedViaEnum">CreatedViaEnum</h2>
<!-- backwards compatibility -->
<a id="schemacreatedviaenum"></a>
<a id="schema_CreatedViaEnum"></a>
<a id="tocScreatedviaenum"></a>
<a id="tocscreatedviaenum"></a>

```json
"registration"
```

* `registration` - Registration
* `social` - Social
* `sso` - SSO
* `ldap` - LDAP
* `invitation` - Invitation

<h2 id="tocS_CredentialsTypeEnum">CredentialsTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemacredentialstypeenum"></a>
<a id="schema_CredentialsTypeEnum"></a>
<a id="tocScredentialstypeenum"></a>
<a id="tocscredentialstypeenum"></a>

```json
"KEY_SECRET_KEY_PAIR"
```

* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR
* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR
* `KEY_FILE_PATH` - KEY_FILE_PATH
* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS
* `CONNECTION_STRING` - CONNECTION_STRING

<h2 id="tocS_CvatUsageReasonEnum">CvatUsageReasonEnum</h2>
<!-- backwards compatibility -->
<a id="schemacvatusagereasonenum"></a>
<a id="schema_CvatUsageReasonEnum"></a>
<a id="tocScvatusagereasonenum"></a>
<a id="tocscvatusagereasonenum"></a>

```json
"work_project"
```

* `work_project` - work_project
* `academic_research` - academic_research
* `teaching_or_coursework` - teaching_or_coursework
* `personal_project` - personal_project

<h2 id="tocS_DataMetaRead">DataMetaRead</h2>
<!-- backwards compatibility -->
<a id="schemadatametaread"></a>
<a id="schema_DataMetaRead"></a>
<a id="tocSdatametaread"></a>
<a id="tocsdatametaread"></a>

```json
{
  "chapters": [
    {
      "id": 0,
      "start": 0,
      "stop": 0,
      "metadata": {
        "title": "string"
      }
    }
  ],
  "chunks_updated_date": "1970-01-01T00:00:00Z",
  "chunk_size": 0,
  "size": 0,
  "image_quality": 0,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "frames": [
    {
      "width": 0,
      "height": 0,
      "name": "string",
      "related_files": 0,
      "has_related_context": true
    }
  ],
  "deleted_frames": [
    0
  ],
  "included_frames": [
    0
  ],
  "storage": {},
  "cloud_storage_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapters|[[Chapter](#schemachapter)]|false|none|none|
|chunks_updated_date|string(date-time)|true|none|none|
|chunk_size|integer \| null|false|read-only|none|
|size|integer|false|read-only|The number of frames included. Deleted frames do not affect this value.<br>|
|image_quality|integer|false|none|none|
|start_frame|integer|false|read-only|none|
|stop_frame|integer|false|read-only|none|
|frame_filter|string|false|read-only|none|
|frames|[[FrameMeta](#schemaframemeta)]|true|none|none|
|deleted_frames|[integer]|true|none|none|
|included_frames|[integer]|false|none|A list of valid frame ids. The None value means all frames are included.<br>|
|storage|object|false|read-only|none|
|cloud_storage_id|integer \| null|false|read-only|none|

<h2 id="tocS_DataRequest">DataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadatarequest"></a>
<a id="schema_DataRequest"></a>
<a id="tocSdatarequest"></a>
<a id="tocsdatarequest"></a>

```json
{
  "chunk_size": 0,
  "image_quality": 1,
  "start_frame": 0,
  "stop_frame": 0,
  "frame_filter": "string",
  "client_files": [],
  "server_files": [],
  "remote_files": [],
  "use_zip_chunks": false,
  "server_files_exclude": [],
  "cloud_storage_id": 0,
  "use_cache": false,
  "copy_data": false,
  "storage_method": "cache",
  "sorting_method": "lexicographical",
  "filename_pattern": "string",
  "job_file_mapping": [
    [
      "string"
    ]
  ],
  "upload_file_order": [
    "string"
  ],
  "validation_params": {
    "mode": "gt",
    "frame_selection_method": "random_uniform",
    "random_seed": 0,
    "frames": [
      "string"
    ],
    "frame_count": 1,
    "frame_share": 0,
    "frames_per_job_count": 1,
    "frames_per_job_share": 0
  }
}
```

Read more about parameters here:
https://docs.cvat.ai/docs/manual/basics/create-annotation-task/#advanced-configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chunk_size|integer \| null|false|none|Maximum number of frames per chunk|
|image_quality|integer|false|none|Image quality to use during annotation, required for image and video-based tasks|
|start_frame|integer|false|none|First frame index|
|stop_frame|integer|false|none|Last frame index|
|frame_filter|string|false|none|Frame filter. The only supported syntax is: 'step=N'|
|client_files|[string(binary)]|false|none|<br>Uploaded files.<br>Must contain all files from job_file_mapping if job_file_mapping is not empty.<br>|
|server_files|[string]|false|none|<br>Paths to files from a file share mounted on the server, or from a cloud storage.<br>Must contain all files from job_file_mapping if job_file_mapping is not empty.<br>|
|remote_files|[string]|false|none|<br>Direct download URLs for files.<br>Must contain all files from job_file_mapping if job_file_mapping is not empty.<br>|
|use_zip_chunks|boolean|false|none|When true, video chunks will be represented as zip archives with decoded video frames.<br>When false, video chunks are represented as video segments<br>|
|server_files_exclude|[string]|false|none|Paths to files and directories from a file share mounted on the server, or from a cloud storage<br>that should be excluded from the directories specified in server_files.<br>This option cannot be used together with filename_pattern.<br>The server_files_exclude parameter cannot be used to exclude a part of dataset from an archive.<br><br>Examples:<br><br>Exclude all files from subfolder 'sub/sub_1/sub_2'and single file 'sub/image.jpg' from specified folder:<br>server_files = ['sub/'], server_files_exclude = ['sub/sub_1/sub_2/', 'sub/image.jpg']<br><br>Exclude all cloud storage files with prefix 'sub' from the content of manifest file:<br>server_files = ['manifest.jsonl'], server_files_exclude = ['sub/']<br>|
|cloud_storage_id|integer \| null|false|write-only|If not null, the files referenced by server_files will be retrieved<br>from the cloud storage with the specified ID.<br>The cloud storages applicable depend on the context.<br>In the user sandbox, only the user sandbox cloud storages can be used.<br>In an organization, only the organization cloud storages can be used.<br>|
|use_cache|boolean|false|none|Enable or disable task data chunk caching for the task.<br>Read more: https://docs.cvat.ai/docs/manual/advanced/data_on_fly/<br>|
|copy_data|boolean|false|none|Copy data from the server file share to CVAT during the task creation.<br>This will create a copy of the data, making the server independent from<br>the file share availability<br>|
|storage_method|[StorageMethod](#schemastoragemethod)|false|none|* `cache` - CACHE<br>* `file_system` - FILE_SYSTEM|
|sorting_method|[SortingMethod](#schemasortingmethod)|false|none|* `lexicographical` - LEXICOGRAPHICAL<br>* `natural` - NATURAL<br>* `predefined` - PREDEFINED<br>* `random` - RANDOM|
|filename_pattern|string \| null|false|none|A filename filter for cloud storage files<br>listed in the manifest. Supports fnmatch wildcards.<br>Read more: https://docs.python.org/3/library/fnmatch.html<br>|
|job_file_mapping|[[string]]|false|write-only|<br>Represents a file-to-job mapping.<br>Useful to specify a custom job configuration during task creation.<br>This option is not compatible with most other job split-related options.<br>Files in the jobs must not overlap or repeat.<br>Job file mapping files must be a subset of the input files.<br>If directories are specified in server_files, all files obtained by recursive search<br>in the specified directories will be used as input files.<br>In case of missing items in the input files, an error will be raised.<br><br>Example:<br>[<br><br>    ["file1.jpg", "file2.jpg"], # job #1 files<br>    ["file3.png"], # job #2 files<br>    ["file4.jpg", "file5.png", "file6.bmp"], # job #3 files<br>]<br>|
|upload_file_order|[string]|false|write-only|Allows to specify file order for client_file uploads.<br>Only valid with the "predefined" sorting method selected.<br><br>To state that the input files are sent in the correct order,<br>pass an empty list.<br><br>If you want to send files in an arbitrary order<br>and reorder them afterwards on the server,<br>pass the list of file names in the required order.<br>|
|validation_params|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|storage_method|cache|
|storage_method|file_system|
|sorting_method|lexicographical|
|sorting_method|natural|
|sorting_method|predefined|
|sorting_method|random|

<h2 id="tocS_DataResponse">DataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadataresponse"></a>
<a id="schema_DataResponse"></a>
<a id="tocSdataresponse"></a>
<a id="tocsdataresponse"></a>

```json
{
  "rq_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[RqId](#schemarqid)|false|none|none|
|*oneOf*|string(binary)|false|none|none|

<h2 id="tocS_DatasetFileRequest">DatasetFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadatasetfilerequest"></a>
<a id="schema_DatasetFileRequest"></a>
<a id="tocSdatasetfilerequest"></a>
<a id="tocsdatasetfilerequest"></a>

```json
{
  "dataset_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_file|string(binary)|true|none|none|

<h2 id="tocS_DatasetFormat">DatasetFormat</h2>
<!-- backwards compatibility -->
<a id="schemadatasetformat"></a>
<a id="schema_DatasetFormat"></a>
<a id="tocSdatasetformat"></a>
<a id="tocsdatasetformat"></a>

```json
{
  "name": "string",
  "ext": "string",
  "version": "string",
  "enabled": true,
  "dimension": "st"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|ext|string|true|none|none|
|version|string|true|none|none|
|enabled|boolean|true|none|none|
|dimension|string|true|none|none|

<h2 id="tocS_DatasetFormats">DatasetFormats</h2>
<!-- backwards compatibility -->
<a id="schemadatasetformats"></a>
<a id="schema_DatasetFormats"></a>
<a id="tocSdatasetformats"></a>
<a id="tocsdatasetformats"></a>

```json
{
  "importers": [
    {
      "name": "string",
      "ext": "string",
      "version": "string",
      "enabled": true,
      "dimension": "st"
    }
  ],
  "exporters": [
    {
      "name": "string",
      "ext": "string",
      "version": "string",
      "enabled": true,
      "dimension": "st"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importers|[[DatasetFormat](#schemadatasetformat)]|true|none|none|
|exporters|[[DatasetFormat](#schemadatasetformat)]|true|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "scope": "string",
  "obj_name": "string",
  "obj_id": 0,
  "obj_val": "string",
  "source": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "count": 0,
  "duration": 0,
  "project_id": 0,
  "task_id": 0,
  "job_id": 0,
  "user_id": 0,
  "user_name": "string",
  "user_email": "string",
  "org_id": 0,
  "org_slug": "string",
  "payload": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|true|none|none|
|obj_name|string \| null|false|none|none|
|obj_id|integer \| null|false|none|none|
|obj_val|string \| null|false|none|none|
|source|string \| null|false|none|none|
|timestamp|string(date-time)|true|none|none|
|count|integer \| null|false|none|none|
|duration|integer|false|none|none|
|project_id|integer \| null|false|none|none|
|task_id|integer \| null|false|none|none|
|job_id|integer \| null|false|none|none|
|user_id|integer \| null|false|none|none|
|user_name|string \| null|false|none|none|
|user_email|string \| null|false|none|none|
|org_id|integer \| null|false|none|none|
|org_slug|string \| null|false|none|none|
|payload|string \| null|false|none|none|

<h2 id="tocS_EventGroup">EventGroup</h2>
<!-- backwards compatibility -->
<a id="schemaeventgroup"></a>
<a id="schema_EventGroup"></a>
<a id="tocSeventgroup"></a>
<a id="tocseventgroup"></a>

```json
{
  "display_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|read-only|none|

<h2 id="tocS_EventRequest">EventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventrequest"></a>
<a id="schema_EventRequest"></a>
<a id="tocSeventrequest"></a>
<a id="tocseventrequest"></a>

```json
{
  "scope": "string",
  "obj_name": "string",
  "obj_id": 0,
  "obj_val": "string",
  "source": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "count": 0,
  "duration": 0,
  "project_id": 0,
  "task_id": 0,
  "job_id": 0,
  "user_id": 0,
  "user_name": "string",
  "user_email": "string",
  "org_id": 0,
  "org_slug": "string",
  "payload": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|true|none|none|
|obj_name|string \| null|false|none|none|
|obj_id|integer \| null|false|none|none|
|obj_val|string \| null|false|none|none|
|source|string \| null|false|none|none|
|timestamp|string(date-time)|true|none|none|
|count|integer \| null|false|none|none|
|duration|integer|false|none|none|
|project_id|integer \| null|false|none|none|
|task_id|integer \| null|false|none|none|
|job_id|integer \| null|false|none|none|
|user_id|integer \| null|false|none|none|
|user_name|string \| null|false|none|none|
|user_email|string \| null|false|none|none|
|org_id|integer \| null|false|none|none|
|org_slug|string \| null|false|none|none|
|payload|string \| null|false|none|none|

<h2 id="tocS_Events">Events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_Events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
{
  "webhook_type": "organization",
  "events": [
    {
      "key": "string",
      "group": {
        "display_name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_type|[AllWebhookType](#schemaallwebhooktype)|true|none|* `organization` - ORGANIZATION<br>* `project` - PROJECT<br>* `server` - SERVER<br>* `all` - ALL|
|events|[[WebhooksEvent](#schemawebhooksevent)]|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|webhook_type|organization|
|webhook_type|project|
|webhook_type|server|
|webhook_type|all|

<h2 id="tocS_EventsEnum">EventsEnum</h2>
<!-- backwards compatibility -->
<a id="schemaeventsenum"></a>
<a id="schema_EventsEnum"></a>
<a id="tocSeventsenum"></a>
<a id="tocseventsenum"></a>

```json
"completed:request[calculate:quality]"
```

* `completed:request[calculate:quality]` - COMPLETED:REQUEST[CALCULATE:QUALITY]
* `completed:request[create:task]` - COMPLETED:REQUEST[CREATE:TASK]
* `completed:request[export:annotations]` - COMPLETED:REQUEST[EXPORT:ANNOTATIONS]
* `completed:request[export:backup]` - COMPLETED:REQUEST[EXPORT:BACKUP]
* `completed:request[export:dataset]` - COMPLETED:REQUEST[EXPORT:DATASET]
* `completed:request[merge:job]` - COMPLETED:REQUEST[MERGE:JOB]
* `completed:request[merge:task]` - COMPLETED:REQUEST[MERGE:TASK]
* `create:comment` - CREATE:COMMENT
* `create:invitation` - CREATE:INVITATION
* `create:issue` - CREATE:ISSUE
* `create:job` - CREATE:JOB
* `create:membership` - CREATE:MEMBERSHIP
* `create:organization` - CREATE:ORGANIZATION
* `create:project` - CREATE:PROJECT
* `create:task` - CREATE:TASK
* `create:user` - CREATE:USER
* `delete:comment` - DELETE:COMMENT
* `delete:invitation` - DELETE:INVITATION
* `delete:issue` - DELETE:ISSUE
* `delete:job` - DELETE:JOB
* `delete:membership` - DELETE:MEMBERSHIP
* `delete:organization` - DELETE:ORGANIZATION
* `delete:project` - DELETE:PROJECT
* `delete:task` - DELETE:TASK
* `delete:user` - DELETE:USER
* `update:comment` - UPDATE:COMMENT
* `update:issue` - UPDATE:ISSUE
* `update:job` - UPDATE:JOB
* `update:membership` - UPDATE:MEMBERSHIP
* `update:organization` - UPDATE:ORGANIZATION
* `update:project` - UPDATE:PROJECT
* `update:task` - UPDATE:TASK
* `update:user` - UPDATE:USER

<h2 id="tocS_ExtrapolationEnum">ExtrapolationEnum</h2>
<!-- backwards compatibility -->
<a id="schemaextrapolationenum"></a>
<a id="schema_ExtrapolationEnum"></a>
<a id="tocSextrapolationenum"></a>
<a id="tocsextrapolationenum"></a>

```json
"clamp"
```

* `clamp` - clamp

<h2 id="tocS_FileInfo">FileInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileinfo"></a>
<a id="schema_FileInfo"></a>
<a id="tocSfileinfo"></a>
<a id="tocsfileinfo"></a>

```json
{
  "name": "string",
  "type": "REG",
  "mime_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[FileInfoTypeEnum](#schemafileinfotypeenum)|true|none|* `REG` - REG<br>* `DIR` - DIR|
|mime_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|REG|
|type|DIR|

<h2 id="tocS_FileInfoTypeEnum">FileInfoTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemafileinfotypeenum"></a>
<a id="schema_FileInfoTypeEnum"></a>
<a id="tocSfileinfotypeenum"></a>
<a id="tocsfileinfotypeenum"></a>

```json
"REG"
```

* `REG` - REG
* `DIR` - DIR

<h2 id="tocS_FrameMeta">FrameMeta</h2>
<!-- backwards compatibility -->
<a id="schemaframemeta"></a>
<a id="schema_FrameMeta"></a>
<a id="tocSframemeta"></a>
<a id="tocsframemeta"></a>

```json
{
  "width": 0,
  "height": 0,
  "name": "string",
  "related_files": 0,
  "has_related_context": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|integer|false|none|none|
|height|integer|false|none|none|
|name|string|true|none|none|
|related_files|integer|true|none|none|
|has_related_context|boolean|false|read-only|none|

<h2 id="tocS_FrameSelectionMethod">FrameSelectionMethod</h2>
<!-- backwards compatibility -->
<a id="schemaframeselectionmethod"></a>
<a id="schema_FrameSelectionMethod"></a>
<a id="tocSframeselectionmethod"></a>
<a id="tocsframeselectionmethod"></a>

```json
"random_uniform"
```

* `random_uniform` - RANDOM_UNIFORM
* `random_per_job` - RANDOM_PER_JOB
* `manual` - MANUAL

<h2 id="tocS_FunctionCall">FunctionCall</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncall"></a>
<a id="schema_FunctionCall"></a>
<a id="tocSfunctioncall"></a>
<a id="tocsfunctioncall"></a>

```json
{
  "id": "string",
  "function": {
    "id": "string",
    "task": 0,
    "job": 0,
    "threshold": 0
  },
  "status": "string",
  "progress": 0,
  "enqueued": "1970-01-01T00:00:00Z",
  "started": "1970-01-01T00:00:00Z",
  "ended": "1970-01-01T00:00:00Z",
  "exc_info": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Request id|
|function|[FunctionCallParams](#schemafunctioncallparams)|true|none|none|
|status|string \| null|true|none|none|
|progress|integer \| null|false|none|none|
|enqueued|string(date-time) \| null|true|none|none|
|started|string(date-time) \| null|true|none|none|
|ended|string(date-time) \| null|true|none|none|
|exc_info|string \| null|false|none|none|

<h2 id="tocS_FunctionCallParams">FunctionCallParams</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncallparams"></a>
<a id="schema_FunctionCallParams"></a>
<a id="tocSfunctioncallparams"></a>
<a id="tocsfunctioncallparams"></a>

```json
{
  "id": "string",
  "task": 0,
  "job": 0,
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|true|none|The name of the function|
|task|integer \| null|true|none|The id of the task|
|job|integer|false|none|The id of the job|
|threshold|number(double) \| null|true|none|none|

<h2 id="tocS_FunctionCallRequest">FunctionCallRequest</h2>
<!-- backwards compatibility -->
<a id="schemafunctioncallrequest"></a>
<a id="schema_FunctionCallRequest"></a>
<a id="tocSfunctioncallrequest"></a>
<a id="tocsfunctioncallrequest"></a>

```json
{
  "function": "string",
  "task": 0,
  "job": 0,
  "max_distance": 0,
  "threshold": 0,
  "cleanup": false,
  "convMaskToPoly": true,
  "conv_mask_to_poly": true,
  "mapping": {
    "property1": {
      "name": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "sublabels": {
        "property1": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "property2": {
      "name": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "sublabels": {
        "property1": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "name": "string",
          "attributes": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    }
  },
  "roi": [
    0,
    0,
    0,
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|string|true|none|The name of the function to execute|
|task|integer|true|none|The id of the task to be annotated|
|job|integer|false|none|The id of the job to be annotated|
|max_distance|integer|false|none|none|
|threshold|number(double)|false|none|none|
|cleanup|boolean|false|none|Whether existing annotations should be removed|
|convMaskToPoly|boolean|false|write-only|Deprecated; use conv_mask_to_poly instead|
|conv_mask_to_poly|boolean|false|none|Convert mask shapes to polygons|
|mapping|object|false|none|Label mapping from the model to the task labels|
|roi|[integer]|false|none|Region of interest as [xtl, ytl, xbr, ybr]|

<h2 id="tocS_GroundTruthJobCreateRequest">GroundTruthJobCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroundtruthjobcreaterequest"></a>
<a id="schema_GroundTruthJobCreateRequest"></a>
<a id="tocSgroundtruthjobcreaterequest"></a>
<a id="tocsgroundtruthjobcreaterequest"></a>

```json
{
  "assignee": 0,
  "type": "ground_truth",
  "task_id": 0,
  "frame_selection_method": "random_uniform",
  "frames": [
    0
  ],
  "frame_count": 1,
  "frame_share": 0,
  "frames_per_job_count": 1,
  "frames_per_job_share": 0,
  "random_seed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|integer \| null|false|none|none|
|type|[GroundTruthJobCreateTypeEnum](#schemagroundtruthjobcreatetypeenum)|true|none|* `ground_truth` - GROUND_TRUTH|
|task_id|integer|true|none|none|
|frame_selection_method|[FrameSelectionMethod](#schemaframeselectionmethod)|false|none|* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|frames|[integer]|false|none|The list of frame ids. Applicable only to the "manual" frame selection method<br>|
|frame_count|integer|false|none|The number of frames included in the GT job.<br>Applicable only to the "random_uniform" frame selection method<br>|
|frame_share|number(double)|false|none|The share of frames included in the GT job.<br>Applicable only to the "random_uniform" frame selection method<br>|
|frames_per_job_count|integer|false|none|The number of frames included in the GT job from each annotation job.<br>Applicable only to the "random_per_job" frame selection method<br>|
|frames_per_job_share|number(double)|false|none|The share of frames included in the GT job from each annotation job.<br>Applicable only to the "random_per_job" frame selection method<br>|
|random_seed|integer|false|none|The seed value for the random number generator.<br>The same value will produce the same frame sets.<br>Applicable only to random frame selection methods.<br>By default, a random value is used.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ground_truth|
|frame_selection_method|random_uniform|
|frame_selection_method|random_per_job|
|frame_selection_method|manual|

<h2 id="tocS_GroundTruthJobCreateTypeEnum">GroundTruthJobCreateTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemagroundtruthjobcreatetypeenum"></a>
<a id="schema_GroundTruthJobCreateTypeEnum"></a>
<a id="tocSgroundtruthjobcreatetypeenum"></a>
<a id="tocsgroundtruthjobcreatetypeenum"></a>

```json
"ground_truth"
```

* `ground_truth` - GROUND_TRUTH

<h2 id="tocS_InputEnum">InputEnum</h2>
<!-- backwards compatibility -->
<a id="schemainputenum"></a>
<a id="schema_InputEnum"></a>
<a id="tocSinputenum"></a>
<a id="tocsinputenum"></a>

```json
"gt.shape_area"
```

* `gt.shape_area` - gt.shape_area

<h2 id="tocS_InputTypeEnum">InputTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemainputtypeenum"></a>
<a id="schema_InputTypeEnum"></a>
<a id="tocSinputtypeenum"></a>
<a id="tocsinputtypeenum"></a>

```json
"checkbox"
```

* `checkbox` - CHECKBOX
* `radio` - RADIO
* `number` - NUMBER
* `text` - TEXT
* `select` - SELECT

<h2 id="tocS_InvitationRead">InvitationRead</h2>
<!-- backwards compatibility -->
<a id="schemainvitationread"></a>
<a id="schema_InvitationRead"></a>
<a id="tocSinvitationread"></a>
<a id="tocsinvitationread"></a>

```json
{
  "key": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "role": "worker",
  "user": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "organization": 0,
  "expired": true,
  "accepted": true,
  "organization_info": {
    "id": 0,
    "slug": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|owner|object \| null|true|none|none|
|role|[RoleEnum](#schemaroleenum)|true|none|* `worker` - Worker<br>* `supervisor` - Supervisor<br>* `maintainer` - Maintainer<br>* `owner` - Owner|
|user|[BasicUser](#schemabasicuser)|true|none|none|
|organization|integer|true|none|none|
|expired|boolean \| null|false|read-only|none|
|accepted|boolean|false|read-only|none|
|organization_info|[BasicOrganization](#schemabasicorganization)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|worker|
|role|supervisor|
|role|maintainer|
|role|owner|

<h2 id="tocS_InvitationWriteRequest">InvitationWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvitationwriterequest"></a>
<a id="schema_InvitationWriteRequest"></a>
<a id="tocSinvitationwriterequest"></a>
<a id="tocsinvitationwriterequest"></a>

```json
{
  "role": "worker",
  "email": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[RoleEnum](#schemaroleenum)|true|none|* `worker` - Worker<br>* `supervisor` - Supervisor<br>* `maintainer` - Maintainer<br>* `owner` - Owner|
|email|string(email)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|worker|
|role|supervisor|
|role|maintainer|
|role|owner|

<h2 id="tocS_IssueRead">IssueRead</h2>
<!-- backwards compatibility -->
<a id="schemaissueread"></a>
<a id="schema_IssueRead"></a>
<a id="tocSissueread"></a>
<a id="tocsissueread"></a>

```json
{
  "id": 0,
  "frame": 0,
  "position": [
    0
  ],
  "job": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "resolved": true,
  "comments": {
    "count": 0,
    "url": "http://example.com"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|frame|integer|false|read-only|none|
|position|[number(double)]|true|none|none|
|job|integer|false|read-only|none|
|owner|object \| null|false|none|none|
|assignee|object \| null|false|none|none|
|created_date|string(date-time) \| null|false|read-only|none|
|updated_date|string(date-time) \| null|false|read-only|none|
|resolved|boolean|false|read-only|none|
|comments|[CommentsSummary](#schemacommentssummary)|true|none|none|

<h2 id="tocS_IssueWriteRequest">IssueWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaissuewriterequest"></a>
<a id="schema_IssueWriteRequest"></a>
<a id="tocSissuewriterequest"></a>
<a id="tocsissuewriterequest"></a>

```json
{
  "frame": 0,
  "position": [
    0
  ],
  "job": 0,
  "assignee": 0,
  "message": "string",
  "resolved": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frame|integer|true|none|none|
|position|[number(double)]|true|none|none|
|job|integer|true|none|none|
|assignee|integer \| null|false|none|none|
|message|string|true|none|none|
|resolved|boolean|false|none|none|

<h2 id="tocS_IssuesSummary">IssuesSummary</h2>
<!-- backwards compatibility -->
<a id="schemaissuessummary"></a>
<a id="schema_IssuesSummary"></a>
<a id="tocSissuessummary"></a>
<a id="tocsissuessummary"></a>

```json
{
  "url": "http://example.com",
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|
|count|integer|false|read-only|none|

<h2 id="tocS_JobRead">JobRead</h2>
<!-- backwards compatibility -->
<a id="schemajobread"></a>
<a id="schema_JobRead"></a>
<a id="tocSjobread"></a>
<a id="tocsjobread"></a>

```json
{
  "url": "http://example.com",
  "id": 0,
  "task_id": 0,
  "task_name": "string",
  "project_id": 0,
  "project_name": "string",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "bug_tracker": "string",
  "status": {},
  "stage": {},
  "state": {},
  "frame_count": 0,
  "start_frame": -2147483648,
  "stop_frame": -2147483648,
  "data_chunk_size": 0,
  "data_compressed_chunk_type": {},
  "data_original_chunk_type": {},
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "issues": {
    "url": "http://example.com",
    "count": 0
  },
  "labels": {
    "url": "http://example.com"
  },
  "type": {},
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "parent_job_id": 0,
  "replicas_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|task_id|integer|false|read-only|none|
|task_name|string \| null|false|read-only|none|
|project_id|integer \| null|false|read-only|none|
|project_name|string \| null|false|read-only|none|
|assignee|object \| null|false|read-only|none|
|guide_id|integer \| null|false|read-only|none|
|dimension|string|false|read-only|none|
|mode|string|false|read-only|none|
|media_type|string|false|read-only|none|
|bug_tracker|string \| null|false|read-only|none|
|status|object|false|read-only|none|
|stage|object|false|read-only|none|
|state|object|false|read-only|none|
|frame_count|integer|false|read-only|none|
|start_frame|integer|false|read-only|none|
|stop_frame|integer|false|read-only|none|
|data_chunk_size|integer \| null|false|read-only|none|
|data_compressed_chunk_type|object|false|read-only|none|
|data_original_chunk_type|object|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|issues|[IssuesSummary](#schemaissuessummary)|true|none|none|
|labels|[LabelsSummary](#schemalabelssummary)|true|none|none|
|type|object|false|read-only|none|
|organization|integer \| null|false|read-only|none|
|target_storage|object \| null|false|none|none|
|source_storage|object \| null|false|none|none|
|assignee_updated_date|string(date-time) \| null|false|read-only|none|
|parent_job_id|integer \| null|false|read-only|none|
|replicas_count|integer|false|read-only|none|

<h2 id="tocS_JobStage">JobStage</h2>
<!-- backwards compatibility -->
<a id="schemajobstage"></a>
<a id="schema_JobStage"></a>
<a id="tocSjobstage"></a>
<a id="tocsjobstage"></a>

```json
"annotation"
```

* `annotation` - ANNOTATION
* `validation` - VALIDATION
* `acceptance` - ACCEPTANCE

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"annotation"
```

* `annotation` - ANNOTATION
* `validation` - VALIDATION
* `completed` - COMPLETED

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"annotation"
```

* `annotation` - ANNOTATION
* `ground_truth` - GROUND_TRUTH
* `replica` - REPLICA

<h2 id="tocS_JobValidationLayoutRead">JobValidationLayoutRead</h2>
<!-- backwards compatibility -->
<a id="schemajobvalidationlayoutread"></a>
<a id="schema_JobValidationLayoutRead"></a>
<a id="tocSjobvalidationlayoutread"></a>
<a id="tocsjobvalidationlayoutread"></a>

```json
{
  "honeypot_count": 0,
  "honeypot_frames": [
    0
  ],
  "honeypot_real_frames": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|honeypot_count|integer|false|none|none|
|honeypot_frames|[integer]|false|none|The list of frame ids for honeypots in the job<br>|
|honeypot_real_frames|[integer]|false|none|The list of real (validation) frame ids for honeypots in the job<br>|

<h2 id="tocS_JobWriteRequest">JobWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemajobwriterequest"></a>
<a id="schema_JobWriteRequest"></a>
<a id="tocSjobwriterequest"></a>
<a id="tocsjobwriterequest"></a>

```json
{
  "assignee": 0,
  "type": "ground_truth",
  "task_id": 0,
  "frame_selection_method": "random_uniform",
  "frames": [
    0
  ],
  "frame_count": 1,
  "frame_share": 0,
  "frames_per_job_count": 1,
  "frames_per_job_share": 0,
  "random_seed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[GroundTruthJobCreateRequest](#schemagroundtruthjobcreaterequest)|false|none|none|
|*oneOf*|[ReplicaJobCreateRequest](#schemareplicajobcreaterequest)|false|none|none|

<h2 id="tocS_JobsSummary">JobsSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobssummary"></a>
<a id="schema_JobsSummary"></a>
<a id="tocSjobssummary"></a>
<a id="tocsjobssummary"></a>

```json
{
  "count": 0,
  "completed": 0,
  "validation": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|completed|integer \| null|true|none|none|
|validation|integer \| null|true|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "type": {},
  "svg": "string",
  "sublabels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "has_parent": true
    }
  ],
  "project_id": 0,
  "task_id": 0,
  "parent_id": 0,
  "has_parent": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|true|none|none|
|color|string|false|none|The hex value for the RGB color. Will be generated automatically, unless specified explicitly.|
|attributes|[[Attribute](#schemaattribute)]|false|none|The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.|
|type|object|false|none|Associated annotation type for this label<br><br>* `any` - ANY<br>* `cuboid` - CUBOID<br>* `ellipse` - ELLIPSE<br>* `mask` - MASK<br>* `points` - POINTS<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `rectangle` - RECTANGLE<br>* `skeleton` - SKELETON<br>* `interval` - INTERVAL<br>* `tag` - TAG|
|svg|string|false|none|none|
|sublabels|[[Sublabel](#schemasublabel)]|false|none|none|
|project_id|integer \| null|false|read-only|none|
|task_id|integer \| null|false|read-only|none|
|parent_id|integer \| null|false|read-only|none|
|has_parent|boolean|false|read-only|none|

<h2 id="tocS_LabelMappingEntryRequest">LabelMappingEntryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabelmappingentryrequest"></a>
<a id="schema_LabelMappingEntryRequest"></a>
<a id="tocSlabelmappingentryrequest"></a>
<a id="tocslabelmappingentryrequest"></a>

```json
{
  "name": "string",
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "sublabels": {
    "property1": {
      "name": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "name": "string",
      "attributes": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|attributes|object|false|none|none|
|sublabels|object|false|none|Label mapping for from the model to the task sublabels within a parent label|

<h2 id="tocS_LabelType">LabelType</h2>
<!-- backwards compatibility -->
<a id="schemalabeltype"></a>
<a id="schema_LabelType"></a>
<a id="tocSlabeltype"></a>
<a id="tocslabeltype"></a>

```json
"any"
```

* `any` - ANY
* `cuboid` - CUBOID
* `ellipse` - ELLIPSE
* `mask` - MASK
* `points` - POINTS
* `polygon` - POLYGON
* `polyline` - POLYLINE
* `rectangle` - RECTANGLE
* `skeleton` - SKELETON
* `interval` - INTERVAL
* `tag` - TAG

<h2 id="tocS_LabeledData">LabeledData</h2>
<!-- backwards compatibility -->
<a id="schemalabeleddata"></a>
<a id="schema_LabeledData"></a>
<a id="tocSlabeleddata"></a>
<a id="tocslabeleddata"></a>

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|false|none|none|
|tags|[[LabeledImage](#schemalabeledimage)]|false|none|none|
|shapes|[[LabeledShape](#schemalabeledshape)]|false|none|none|
|tracks|[[LabeledTrack](#schemalabeledtrack)]|false|none|none|
|intervals|[[LabeledInterval](#schemalabeledinterval)]|false|none|none|

<h2 id="tocS_LabeledDataRequest">LabeledDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabeleddatarequest"></a>
<a id="schema_LabeledDataRequest"></a>
<a id="tocSlabeleddatarequest"></a>
<a id="tocslabeleddatarequest"></a>

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|false|none|none|
|tags|[[LabeledImageRequest](#schemalabeledimagerequest)]|false|none|none|
|shapes|[[LabeledShapeRequest](#schemalabeledshaperequest)]|false|none|none|
|tracks|[[LabeledTrackRequest](#schemalabeledtrackrequest)]|false|none|none|
|intervals|[[LabeledIntervalRequest](#schemalabeledintervalrequest)]|false|none|none|

<h2 id="tocS_LabeledImage">LabeledImage</h2>
<!-- backwards compatibility -->
<a id="schemalabeledimage"></a>
<a id="schema_LabeledImage"></a>
<a id="tocSlabeledimage"></a>
<a id="tocslabeledimage"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|

<h2 id="tocS_LabeledImageRequest">LabeledImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabeledimagerequest"></a>
<a id="schema_LabeledImageRequest"></a>
<a id="tocSlabeledimagerequest"></a>
<a id="tocslabeledimagerequest"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|

<h2 id="tocS_LabeledInterval">LabeledInterval</h2>
<!-- backwards compatibility -->
<a id="schemalabeledinterval"></a>
<a id="schema_LabeledInterval"></a>
<a id="tocSlabeledinterval"></a>
<a id="tocslabeledinterval"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "attributes": [],
  "score": 1,
  "start": 0,
  "stop": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|
|score|number(double)|false|none|none|
|start|integer|true|none|Must be within the task frame bounds.|
|stop|integer \| null|true|none|Exclusive interval end. May be one greater than the task stop frame.|

<h2 id="tocS_LabeledIntervalRequest">LabeledIntervalRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabeledintervalrequest"></a>
<a id="schema_LabeledIntervalRequest"></a>
<a id="tocSlabeledintervalrequest"></a>
<a id="tocslabeledintervalrequest"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "attributes": [],
  "score": 1,
  "start": 0,
  "stop": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|
|score|number(double)|false|none|none|
|start|integer|true|none|Must be within the task frame bounds.|
|stop|integer \| null|true|none|Exclusive interval end. May be one greater than the task stop frame.|

<h2 id="tocS_LabeledShape">LabeledShape</h2>
<!-- backwards compatibility -->
<a id="schemalabeledshape"></a>
<a id="schema_LabeledShape"></a>
<a id="tocSlabeledshape"></a>
<a id="tocslabeledshape"></a>

```json
{
  "type": "rectangle",
  "occluded": false,
  "outside": false,
  "z_order": 0,
  "rotation": 0,
  "points": [
    0
  ],
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "score": 1,
  "elements": [
    {
      "type": "rectangle",
      "occluded": false,
      "outside": false,
      "z_order": 0,
      "rotation": 0,
      "points": [
        0
      ],
      "id": 0,
      "label_id": 0,
      "group": 0,
      "source": "manual",
      "frame": 0,
      "attributes": [],
      "score": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ShapeType](#schemashapetype)|true|none|* `rectangle` - RECTANGLE<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `points` - POINTS<br>* `ellipse` - ELLIPSE<br>* `cuboid` - CUBOID<br>* `mask` - MASK<br>* `skeleton` - SKELETON|
|occluded|boolean|false|none|none|
|outside|boolean|false|none|none|
|z_order|integer|false|none|none|
|rotation|number(double)|false|none|none|
|points|[number(double)]|false|none|none|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|
|score|number(double)|false|none|none|
|elements|[[SubLabeledShape](#schemasublabeledshape)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rectangle|
|type|polygon|
|type|polyline|
|type|points|
|type|ellipse|
|type|cuboid|
|type|mask|
|type|skeleton|

<h2 id="tocS_LabeledShapeRequest">LabeledShapeRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabeledshaperequest"></a>
<a id="schema_LabeledShapeRequest"></a>
<a id="tocSlabeledshaperequest"></a>
<a id="tocslabeledshaperequest"></a>

```json
{
  "type": "rectangle",
  "occluded": false,
  "outside": false,
  "z_order": 0,
  "rotation": 0,
  "points": [
    0
  ],
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "score": 1,
  "elements": [
    {
      "type": "rectangle",
      "occluded": false,
      "outside": false,
      "z_order": 0,
      "rotation": 0,
      "points": [
        0
      ],
      "id": 0,
      "label_id": 0,
      "group": 0,
      "source": "manual",
      "frame": 0,
      "attributes": [],
      "score": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ShapeType](#schemashapetype)|true|none|* `rectangle` - RECTANGLE<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `points` - POINTS<br>* `ellipse` - ELLIPSE<br>* `cuboid` - CUBOID<br>* `mask` - MASK<br>* `skeleton` - SKELETON|
|occluded|boolean|false|none|none|
|outside|boolean|false|none|none|
|z_order|integer|false|none|none|
|rotation|number(double)|false|none|none|
|points|[number(double)]|false|none|none|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|
|score|number(double)|false|none|none|
|elements|[[SubLabeledShapeRequest](#schemasublabeledshaperequest)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rectangle|
|type|polygon|
|type|polyline|
|type|points|
|type|ellipse|
|type|cuboid|
|type|mask|
|type|skeleton|

<h2 id="tocS_LabeledTrack">LabeledTrack</h2>
<!-- backwards compatibility -->
<a id="schemalabeledtrack"></a>
<a id="schema_LabeledTrack"></a>
<a id="tocSlabeledtrack"></a>
<a id="tocslabeledtrack"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "shapes": [
    {
      "type": "rectangle",
      "occluded": false,
      "outside": false,
      "z_order": 0,
      "rotation": 0,
      "points": [
        0
      ],
      "attributes": [],
      "id": 0,
      "frame": 0
    }
  ],
  "elements": [
    {
      "id": 0,
      "label_id": 0,
      "group": 0,
      "source": "manual",
      "frame": 0,
      "attributes": [],
      "shapes": [
        {
          "type": "rectangle",
          "occluded": false,
          "outside": false,
          "z_order": 0,
          "rotation": 0,
          "points": [
            0
          ],
          "attributes": [],
          "id": 0,
          "frame": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|
|shapes|[[TrackedShape](#schematrackedshape)]|true|none|none|
|elements|[[SubLabeledTrack](#schemasublabeledtrack)]|false|none|none|

<h2 id="tocS_LabeledTrackRequest">LabeledTrackRequest</h2>
<!-- backwards compatibility -->
<a id="schemalabeledtrackrequest"></a>
<a id="schema_LabeledTrackRequest"></a>
<a id="tocSlabeledtrackrequest"></a>
<a id="tocslabeledtrackrequest"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "shapes": [
    {
      "type": "rectangle",
      "occluded": false,
      "outside": false,
      "z_order": 0,
      "rotation": 0,
      "points": [
        0
      ],
      "attributes": [],
      "id": 0,
      "frame": 0
    }
  ],
  "elements": [
    {
      "id": 0,
      "label_id": 0,
      "group": 0,
      "source": "manual",
      "frame": 0,
      "attributes": [],
      "shapes": [
        {
          "type": "rectangle",
          "occluded": false,
          "outside": false,
          "z_order": 0,
          "rotation": 0,
          "points": [
            0
          ],
          "attributes": [],
          "id": 0,
          "frame": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|
|shapes|[[TrackedShapeRequest](#schematrackedshaperequest)]|true|none|none|
|elements|[[SubLabeledTrackRequest](#schemasublabeledtrackrequest)]|false|none|none|

<h2 id="tocS_LabelsSummary">LabelsSummary</h2>
<!-- backwards compatibility -->
<a id="schemalabelssummary"></a>
<a id="schema_LabelsSummary"></a>
<a id="tocSlabelssummary"></a>
<a id="tocslabelssummary"></a>

```json
{
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_LocationEnum">LocationEnum</h2>
<!-- backwards compatibility -->
<a id="schemalocationenum"></a>
<a id="schema_LocationEnum"></a>
<a id="tocSlocationenum"></a>
<a id="tocslocationenum"></a>

```json
"cloud_storage"
```

* `cloud_storage` - CLOUD_STORAGE
* `local` - LOCAL

<h2 id="tocS_LoginSerializerExRequest">LoginSerializerExRequest</h2>
<!-- backwards compatibility -->
<a id="schemaloginserializerexrequest"></a>
<a id="schema_LoginSerializerExRequest"></a>
<a id="tocSloginserializerexrequest"></a>
<a id="tocsloginserializerexrequest"></a>

```json
{
  "username": "string",
  "email": "user@example.com",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|email|string(email)|false|none|none|
|password|string|true|none|none|

<h2 id="tocS_MembershipRead">MembershipRead</h2>
<!-- backwards compatibility -->
<a id="schemamembershipread"></a>
<a id="schema_MembershipRead"></a>
<a id="tocSmembershipread"></a>
<a id="tocsmembershipread"></a>

```json
{
  "id": 0,
  "user": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "organization": 0,
  "is_active": true,
  "joined_date": "1970-01-01T00:00:00Z",
  "role": {},
  "invitation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|user|[BasicUser](#schemabasicuser)|true|none|none|
|organization|integer|false|read-only|none|
|is_active|boolean|false|read-only|none|
|joined_date|string(date-time) \| null|false|read-only|none|
|role|object|false|read-only|none|
|invitation|string \| null|false|read-only|none|

<h2 id="tocS_MetaUser">MetaUser</h2>
<!-- backwards compatibility -->
<a id="schemametauser"></a>
<a id="schema_MetaUser"></a>
<a id="tocSmetauser"></a>
<a id="tocsmetauser"></a>

```json
{
  "url": "http://example.com",
  "id": 0,
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "last_login": "1970-01-01T00:00:00Z",
  "date_joined": "1970-01-01T00:00:00Z",
  "has_analytics_access": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string",
  "email_verified": true,
  "created_via": "registration"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[User](#schemauser)|false|none|none|
|*anyOf*|[BasicUser](#schemabasicuser)|false|none|none|

<h2 id="tocS_NullEnum">NullEnum</h2>
<!-- backwards compatibility -->
<a id="schemanullenum"></a>
<a id="schema_NullEnum"></a>
<a id="tocSnullenum"></a>
<a id="tocsnullenum"></a>

```json
null
```

<h2 id="tocS_OnlineFunctionCallRequest">OnlineFunctionCallRequest</h2>
<!-- backwards compatibility -->
<a id="schemaonlinefunctioncallrequest"></a>
<a id="schema_OnlineFunctionCallRequest"></a>
<a id="tocSonlinefunctioncallrequest"></a>
<a id="tocsonlinefunctioncallrequest"></a>

```json
{
  "job": 0,
  "task": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|integer|false|none|none|
|task|integer|false|none|none|

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"new"
```

* `new` - NEW
* `in progress` - IN_PROGRESS
* `completed` - COMPLETED
* `rejected` - REJECTED

<h2 id="tocS_OrganizationRead">OrganizationRead</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationread"></a>
<a id="schema_OrganizationRead"></a>
<a id="tocSorganizationread"></a>
<a id="tocsorganizationread"></a>

```json
{
  "id": 0,
  "slug": "string",
  "name": "string",
  "description": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "contact": null,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|slug|string|false|read-only|none|
|name|string|false|read-only|none|
|description|string|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|contact|object|false|read-only|none|
|owner|object \| null|true|none|none|

<h2 id="tocS_OrganizationWriteRequest">OrganizationWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationwriterequest"></a>
<a id="schema_OrganizationWriteRequest"></a>
<a id="tocSorganizationwriterequest"></a>
<a id="tocsorganizationwriterequest"></a>

```json
{
  "slug": "string",
  "name": "string",
  "description": "string",
  "contact": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|true|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|contact|object|false|none|none|

<h2 id="tocS_PaginatedAccessTokenReadList">PaginatedAccessTokenReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedaccesstokenreadlist"></a>
<a id="schema_PaginatedAccessTokenReadList"></a>
<a id="tocSpaginatedaccesstokenreadlist"></a>
<a id="tocspaginatedaccesstokenreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "name": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "expiry_date": "1970-01-01T00:00:00Z",
      "last_used_date": "1970-01-01T00:00:00Z",
      "read_only": true,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[AccessTokenRead](#schemaaccesstokenread)]|true|none|none|

<h2 id="tocS_PaginatedAnnotationConflictList">PaginatedAnnotationConflictList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedannotationconflictlist"></a>
<a id="schema_PaginatedAnnotationConflictList"></a>
<a id="tocSpaginatedannotationconflictlist"></a>
<a id="tocspaginatedannotationconflictlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "frame": 0,
      "type": {},
      "annotation_ids": [
        {
          "obj_id": 0,
          "job_id": 0,
          "type": {},
          "shape_type": "rectangle"
        }
      ],
      "report_id": 0,
      "severity": {},
      "attribute_names": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[AnnotationConflict](#schemaannotationconflict)]|true|none|none|

<h2 id="tocS_PaginatedCloudStorageReadList">PaginatedCloudStorageReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcloudstoragereadlist"></a>
<a id="schema_PaginatedCloudStorageReadList"></a>
<a id="tocSpaginatedcloudstoragereadlist"></a>
<a id="tocspaginatedcloudstoragereadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "manifests": [],
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "provider_type": "AWS_S3_BUCKET",
      "resource": "string",
      "display_name": "string",
      "credentials_type": "KEY_SECRET_KEY_PAIR",
      "specific_attributes": "string",
      "description": "string",
      "organization": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CloudStorageRead](#schemacloudstorageread)]|true|none|none|

<h2 id="tocS_PaginatedCommentReadList">PaginatedCommentReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcommentreadlist"></a>
<a id="schema_PaginatedCommentReadList"></a>
<a id="tocSpaginatedcommentreadlist"></a>
<a id="tocspaginatedcommentreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "issue": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "message": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CommentRead](#schemacommentread)]|true|none|none|

<h2 id="tocS_PaginatedConsensusSettingsList">PaginatedConsensusSettingsList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedconsensussettingslist"></a>
<a id="schema_PaginatedConsensusSettingsList"></a>
<a id="tocSpaginatedconsensussettingslist"></a>
<a id="tocspaginatedconsensussettingslist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "task_id": 0,
      "iou_threshold": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ConsensusSettings](#schemaconsensussettings)]|true|none|none|

<h2 id="tocS_PaginatedInvitationReadList">PaginatedInvitationReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedinvitationreadlist"></a>
<a id="schema_PaginatedInvitationReadList"></a>
<a id="tocSpaginatedinvitationreadlist"></a>
<a id="tocspaginatedinvitationreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "key": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "role": "worker",
      "user": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "organization": 0,
      "expired": true,
      "accepted": true,
      "organization_info": {
        "id": 0,
        "slug": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[InvitationRead](#schemainvitationread)]|true|none|none|

<h2 id="tocS_PaginatedIssueReadList">PaginatedIssueReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedissuereadlist"></a>
<a id="schema_PaginatedIssueReadList"></a>
<a id="tocSpaginatedissuereadlist"></a>
<a id="tocspaginatedissuereadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "frame": 0,
      "position": [
        0
      ],
      "job": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "resolved": true,
      "comments": {
        "count": 0,
        "url": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[IssueRead](#schemaissueread)]|true|none|none|

<h2 id="tocS_PaginatedJobReadList">PaginatedJobReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedjobreadlist"></a>
<a id="schema_PaginatedJobReadList"></a>
<a id="tocSpaginatedjobreadlist"></a>
<a id="tocspaginatedjobreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "task_id": 0,
      "task_name": "string",
      "project_id": 0,
      "project_name": "string",
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "guide_id": 0,
      "dimension": "string",
      "mode": "string",
      "media_type": "string",
      "bug_tracker": "string",
      "status": {},
      "stage": {},
      "state": {},
      "frame_count": 0,
      "start_frame": -2147483648,
      "stop_frame": -2147483648,
      "data_chunk_size": 0,
      "data_compressed_chunk_type": {},
      "data_original_chunk_type": {},
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "issues": {
        "url": "http://example.com",
        "count": 0
      },
      "labels": {
        "url": "http://example.com"
      },
      "type": {},
      "organization": 0,
      "target_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "source_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "assignee_updated_date": "1970-01-01T00:00:00Z",
      "parent_job_id": 0,
      "replicas_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[JobRead](#schemajobread)]|true|none|none|

<h2 id="tocS_PaginatedLabelList">PaginatedLabelList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedlabellist"></a>
<a id="schema_PaginatedLabelList"></a>
<a id="tocSpaginatedlabellist"></a>
<a id="tocspaginatedlabellist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "svg": "string",
      "sublabels": [
        {
          "id": 0,
          "name": "string",
          "color": "string",
          "attributes": [],
          "type": {},
          "has_parent": true
        }
      ],
      "project_id": 0,
      "task_id": 0,
      "parent_id": 0,
      "has_parent": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Label](#schemalabel)]|true|none|none|

<h2 id="tocS_PaginatedMembershipReadList">PaginatedMembershipReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmembershipreadlist"></a>
<a id="schema_PaginatedMembershipReadList"></a>
<a id="tocSpaginatedmembershipreadlist"></a>
<a id="tocspaginatedmembershipreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "user": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "organization": 0,
      "is_active": true,
      "joined_date": "1970-01-01T00:00:00Z",
      "role": {},
      "invitation": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MembershipRead](#schemamembershipread)]|true|none|none|

<h2 id="tocS_PaginatedMetaUserList">PaginatedMetaUserList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmetauserlist"></a>
<a id="schema_PaginatedMetaUserList"></a>
<a id="tocSpaginatedmetauserlist"></a>
<a id="tocspaginatedmetauserlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "username": "string",
      "first_name": "string",
      "last_name": "string",
      "email": "user@example.com",
      "groups": [
        "string"
      ],
      "is_staff": true,
      "is_superuser": true,
      "is_active": true,
      "last_login": "1970-01-01T00:00:00Z",
      "date_joined": "1970-01-01T00:00:00Z",
      "has_analytics_access": true,
      "cvat_usage_reason": "work_project",
      "primary_role": "string",
      "planned_activities": [
        "set_up_projects"
      ],
      "data_types": [
        "string"
      ],
      "discovery_source": "string",
      "email_verified": true,
      "created_via": "registration"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[MetaUser](#schemametauser)]|true|none|none|

<h2 id="tocS_PaginatedOrganizationReadList">PaginatedOrganizationReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedorganizationreadlist"></a>
<a id="schema_PaginatedOrganizationReadList"></a>
<a id="tocSpaginatedorganizationreadlist"></a>
<a id="tocspaginatedorganizationreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "slug": "string",
      "name": "string",
      "description": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "contact": null,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[OrganizationRead](#schemaorganizationread)]|true|none|none|

<h2 id="tocS_PaginatedProjectReadList">PaginatedProjectReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedprojectreadlist"></a>
<a id="schema_PaginatedProjectReadList"></a>
<a id="tocSpaginatedprojectreadlist"></a>
<a id="tocspaginatedprojectreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "name": "string",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "guide_id": 0,
      "bug_tracker": "string",
      "task_subsets": [
        "string"
      ],
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "status": {},
      "dimension": "string",
      "organization": 0,
      "organization_id": 0,
      "target_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "source_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "tasks": {
        "count": 0,
        "url": "http://example.com"
      },
      "labels": {
        "url": "http://example.com"
      },
      "assignee_updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[ProjectRead](#schemaprojectread)]|true|none|none|

<h2 id="tocS_PaginatedQualityReportList">PaginatedQualityReportList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedqualityreportlist"></a>
<a id="schema_PaginatedQualityReportList"></a>
<a id="tocSpaginatedqualityreportlist"></a>
<a id="tocspaginatedqualityreportlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "job_id": 0,
      "task_id": 0,
      "project_id": 0,
      "parent_id": 0,
      "target": "job",
      "summary": {
        "total_frames": 0,
        "validation_frames": 0,
        "validation_frame_share": 0,
        "conflict_count": 0,
        "error_count": 0,
        "conflicts_by_type": {
          "property1": 0,
          "property2": 0
        },
        "tasks": {
          "total": 0,
          "custom": 0,
          "not_configured": 0,
          "excluded": 0,
          "included": 0,
          "completed": 0
        },
        "jobs": {
          "total": 0,
          "excluded": 0,
          "not_checkable": 0,
          "included": 0,
          "completed": 0
        },
        "requirements": {
          "total": 0,
          "enabled": 0,
          "completed": 0,
          "not_computed": 0,
          "items": [
            {
              "requirement_id": 0,
              "name": "string",
              "metric": "accuracy",
              "score": 0,
              "score_components": {
                "valid_count": 0,
                "missing_count": 0,
                "extra_count": 0
              },
              "calculation": {
                "status": "computed",
                "reason": "no_annotations"
              },
              "threshold": 0
            }
          ]
        }
      },
      "created_date": "1970-01-01T00:00:00Z",
      "target_last_updated": "1970-01-01T00:00:00Z",
      "gt_last_updated": "1970-01-01T00:00:00Z",
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[QualityReport](#schemaqualityreport)]|true|none|none|

<h2 id="tocS_PaginatedQualityRequirementListItemList">PaginatedQualityRequirementListItemList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedqualityrequirementlistitemlist"></a>
<a id="schema_PaginatedQualityRequirementListItemList"></a>
<a id="tocSpaginatedqualityrequirementlistitemlist"></a>
<a id="tocspaginatedqualityrequirementlistitemlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "settings_id": 0,
      "task_id": 0,
      "project_id": 0,
      "name": "string",
      "is_base": true,
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[QualityRequirementListItem](#schemaqualityrequirementlistitem)]|true|none|none|

<h2 id="tocS_PaginatedQualitySettingsList">PaginatedQualitySettingsList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedqualitysettingslist"></a>
<a id="schema_PaginatedQualitySettingsList"></a>
<a id="tocSpaginatedqualitysettingslist"></a>
<a id="tocspaginatedqualitysettingslist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "task_id": 0,
      "project_id": 0,
      "job_filter": "string",
      "inherit": true,
      "max_validations_per_job": 0,
      "requirements": [
        {
          "id": 0,
          "settings_id": 0,
          "task_id": 0,
          "project_id": 0,
          "name": "string",
          "is_base": true,
          "sort_order": -2147483648,
          "filter": "string",
          "enabled": true,
          "annotation_type": "tag",
          "metric": "accuracy",
          "required_score": 0,
          "parent_requirement": 0,
          "iou_threshold": 0,
          "point_size": 0,
          "point_size_base": "image_size",
          "line_thickness": 0,
          "match_orientation": true,
          "line_orientation_threshold": 0,
          "match_groups": true,
          "group_match_threshold": 0,
          "check_covered_annotations": true,
          "object_visibility_threshold": 0,
          "panoptic_comparison": true,
          "attribute_comparison": {
            "default": {
              "enabled": true,
              "comparator": "exact",
              "threshold": 0
            },
            "rules": [
              {
                "spec_id": 0,
                "enabled": true,
                "comparator": "exact",
                "threshold": 0
              }
            ]
          },
          "created_date": "1970-01-01T00:00:00Z",
          "updated_date": "1970-01-01T00:00:00Z"
        }
      ],
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[QualitySettings](#schemaqualitysettings)]|true|none|none|

<h2 id="tocS_PaginatedRequestList">PaginatedRequestList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedrequestlist"></a>
<a id="schema_PaginatedRequestList"></a>
<a id="tocSpaginatedrequestlist"></a>
<a id="tocspaginatedrequestlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "status": "queued",
      "message": "string",
      "id": "string",
      "operation": {
        "type": "string",
        "target": "string",
        "project_id": 0,
        "task_id": 0,
        "job_id": 0,
        "org_id": 0,
        "format": "string",
        "function_id": "string",
        "lightweight": true
      },
      "progress": 0,
      "created_date": "1970-01-01T00:00:00Z",
      "started_date": "1970-01-01T00:00:00Z",
      "finished_date": "1970-01-01T00:00:00Z",
      "expiry_date": "1970-01-01T00:00:00Z",
      "owner": {
        "id": 0,
        "username": "string"
      },
      "result_url": "http://example.com",
      "result_id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[Request](#schemarequest)]|true|none|none|

<h2 id="tocS_PaginatedTaskReadList">PaginatedTaskReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedtaskreadlist"></a>
<a id="schema_PaginatedTaskReadList"></a>
<a id="tocSpaginatedtaskreadlist"></a>
<a id="tocspaginatedtaskreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "url": "http://example.com",
      "id": 0,
      "name": "string",
      "project_id": 0,
      "project_name": "string",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "assignee": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "bug_tracker": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "overlap": 0,
      "segment_size": 0,
      "initial_replicas": 0,
      "status": {},
      "data_chunk_size": 0,
      "data_original_chunk_type": {},
      "data_compressed_chunk_type": {},
      "data_cloud_storage_id": 0,
      "guide_id": 0,
      "size": 0,
      "image_quality": 0,
      "data": 0,
      "dimension": "string",
      "mode": "string",
      "media_type": "string",
      "subset": "string",
      "organization_id": 0,
      "organization": 0,
      "target_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "source_storage": {
        "id": 0,
        "location": "cloud_storage",
        "cloud_storage_id": 0
      },
      "jobs": {
        "count": 0,
        "completed": 0,
        "validation": 0,
        "url": "http://example.com"
      },
      "labels": {
        "url": "http://example.com"
      },
      "assignee_updated_date": "1970-01-01T00:00:00Z",
      "validation_mode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[TaskRead](#schemataskread)]|true|none|none|

<h2 id="tocS_PaginatedUserGrowthDataList">PaginatedUserGrowthDataList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedusergrowthdatalist"></a>
<a id="schema_PaginatedUserGrowthDataList"></a>
<a id="tocSpaginatedusergrowthdatalist"></a>
<a id="tocspaginatedusergrowthdatalist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "github_prompt_shown": true,
      "github_prompt_support_clicked": true,
      "github_prompt_enabled": true,
      "promotion_notifications_allowed": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[UserGrowthData](#schemausergrowthdata)]|true|none|none|

<h2 id="tocS_PaginatedWebhookDeliveryReadList">PaginatedWebhookDeliveryReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwebhookdeliveryreadlist"></a>
<a id="schema_PaginatedWebhookDeliveryReadList"></a>
<a id="tocSpaginatedwebhookdeliveryreadlist"></a>
<a id="tocspaginatedwebhookdeliveryreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "webhook_id": 0,
      "event": "string",
      "status_code": 0,
      "redelivery": true,
      "attempt": 0,
      "request_duration": 0,
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "changed_fields": "string",
      "request": null,
      "response": null
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[WebhookDeliveryRead](#schemawebhookdeliveryread)]|true|none|none|

<h2 id="tocS_PaginatedWebhookReadList">PaginatedWebhookReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedwebhookreadlist"></a>
<a id="schema_PaginatedWebhookReadList"></a>
<a id="tocSpaginatedwebhookreadlist"></a>
<a id="tocspaginatedwebhookreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": 0,
      "url": "http://example.com",
      "target_url": "http://example.com",
      "description": "string",
      "type": "organization",
      "content_type": "application/json",
      "is_active": true,
      "enable_ssl": true,
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z",
      "owner": {
        "url": "http://example.com",
        "id": 0,
        "username": "string",
        "first_name": "string",
        "last_name": "string"
      },
      "project_id": 0,
      "organization": 0,
      "events": [
        "completed:request[calculate:quality]"
      ],
      "last_status": 0,
      "last_delivery_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[WebhookRead](#schemawebhookread)]|true|none|none|

<h2 id="tocS_PasswordChangeRequest">PasswordChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemapasswordchangerequest"></a>
<a id="schema_PasswordChangeRequest"></a>
<a id="tocSpasswordchangerequest"></a>
<a id="tocspasswordchangerequest"></a>

```json
{
  "old_password": "string",
  "new_password1": "stringst",
  "new_password2": "stringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|old_password|string|true|write-only|none|
|new_password1|string|true|write-only|none|
|new_password2|string|true|write-only|none|

<h2 id="tocS_PasswordResetConfirmRequest">PasswordResetConfirmRequest</h2>
<!-- backwards compatibility -->
<a id="schemapasswordresetconfirmrequest"></a>
<a id="schema_PasswordResetConfirmRequest"></a>
<a id="tocSpasswordresetconfirmrequest"></a>
<a id="tocspasswordresetconfirmrequest"></a>

```json
{
  "new_password1": "stringst",
  "new_password2": "stringst",
  "uid": "string",
  "token": "string"
}
```

Serializer for confirming a password reset attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_password1|string|true|write-only|none|
|new_password2|string|true|write-only|none|
|uid|string|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_PasswordResetSerializerExRequest">PasswordResetSerializerExRequest</h2>
<!-- backwards compatibility -->
<a id="schemapasswordresetserializerexrequest"></a>
<a id="schema_PasswordResetSerializerExRequest"></a>
<a id="tocSpasswordresetserializerexrequest"></a>
<a id="tocspasswordresetserializerexrequest"></a>

```json
{
  "email": "user@example.com"
}
```

Serializer for requesting a password reset e-mail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|

<h2 id="tocS_PatchedAccessTokenWriteRequest">PatchedAccessTokenWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedaccesstokenwriterequest"></a>
<a id="schema_PatchedAccessTokenWriteRequest"></a>
<a id="tocSpatchedaccesstokenwriterequest"></a>
<a id="tocspatchedaccesstokenwriterequest"></a>

```json
{
  "name": "string",
  "expiry_date": "1970-01-01T00:00:00Z",
  "read_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A free-form name for the token. Doesn't have to be unique|
|expiry_date|string(date-time) \| null|false|none|Once the token expires, clients cannot use it anymore.<br>If not set, the token will not expire.<br>|
|read_only|boolean|false|none|none|

<h2 id="tocS_PatchedAnnotationGuideWriteRequest">PatchedAnnotationGuideWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedannotationguidewriterequest"></a>
<a id="schema_PatchedAnnotationGuideWriteRequest"></a>
<a id="tocSpatchedannotationguidewriterequest"></a>
<a id="tocspatchedannotationguidewriterequest"></a>

```json
{
  "task_id": 0,
  "project_id": 0,
  "markdown": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|integer \| null|false|none|none|
|project_id|integer \| null|false|none|none|
|markdown|string|false|none|none|

<h2 id="tocS_PatchedCloudStorageWriteRequest">PatchedCloudStorageWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedcloudstoragewriterequest"></a>
<a id="schema_PatchedCloudStorageWriteRequest"></a>
<a id="tocSpatchedcloudstoragewriterequest"></a>
<a id="tocspatchedcloudstoragewriterequest"></a>

```json
{
  "provider_type": "AWS_S3_BUCKET",
  "resource": "string",
  "display_name": "string",
  "owner": {
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "credentials_type": "KEY_SECRET_KEY_PAIR",
  "session_token": "string",
  "account_name": "string",
  "key": "string",
  "secret_key": "string",
  "connection_string": "string",
  "key_file": "string",
  "specific_attributes": "string",
  "description": "string",
  "manifests": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider_type|[ProviderTypeEnum](#schemaprovidertypeenum)|false|none|* `AWS_S3_BUCKET` - Amazon S3<br>* `AZURE_CONTAINER` - Azure Blob Storage<br>* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage|
|resource|string|false|none|none|
|display_name|string|false|none|none|
|owner|[BasicUserRequest](#schemabasicuserrequest)|false|none|none|
|credentials_type|[CredentialsTypeEnum](#schemacredentialstypeenum)|false|none|* `KEY_SECRET_KEY_PAIR` - KEY_SECRET_KEY_PAIR<br>* `ACCOUNT_NAME_TOKEN_PAIR` - ACCOUNT_NAME_TOKEN_PAIR<br>* `KEY_FILE_PATH` - KEY_FILE_PATH<br>* `ANONYMOUS_ACCESS` - ANONYMOUS_ACCESS<br>* `CONNECTION_STRING` - CONNECTION_STRING|
|session_token|string|false|none|none|
|account_name|string|false|none|none|
|key|string|false|none|none|
|secret_key|string|false|none|none|
|connection_string|string|false|none|none|
|key_file|string(binary)|false|none|none|
|specific_attributes|string|false|none|none|
|description|string|false|none|none|
|manifests|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_type|AWS_S3_BUCKET|
|provider_type|AZURE_CONTAINER|
|provider_type|GOOGLE_CLOUD_STORAGE|
|credentials_type|KEY_SECRET_KEY_PAIR|
|credentials_type|ACCOUNT_NAME_TOKEN_PAIR|
|credentials_type|KEY_FILE_PATH|
|credentials_type|ANONYMOUS_ACCESS|
|credentials_type|CONNECTION_STRING|

<h2 id="tocS_PatchedCommentWriteRequest">PatchedCommentWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedcommentwriterequest"></a>
<a id="schema_PatchedCommentWriteRequest"></a>
<a id="tocSpatchedcommentwriterequest"></a>
<a id="tocspatchedcommentwriterequest"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_PatchedConsensusSettingsRequest">PatchedConsensusSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedconsensussettingsrequest"></a>
<a id="schema_PatchedConsensusSettingsRequest"></a>
<a id="tocSpatchedconsensussettingsrequest"></a>
<a id="tocspatchedconsensussettingsrequest"></a>

```json
{
  "iou_threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iou_threshold|number(double)|false|none|Pairwise annotation matching IoU threshold|

<h2 id="tocS_PatchedDataMetaWriteRequest">PatchedDataMetaWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatcheddatametawriterequest"></a>
<a id="schema_PatchedDataMetaWriteRequest"></a>
<a id="tocSpatcheddatametawriterequest"></a>
<a id="tocspatcheddatametawriterequest"></a>

```json
{
  "deleted_frames": [
    0
  ],
  "cloud_storage_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted_frames|[integer]|false|none|none|
|cloud_storage_id|integer \| null|false|none|none|

<h2 id="tocS_PatchedIssueWriteRequest">PatchedIssueWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedissuewriterequest"></a>
<a id="schema_PatchedIssueWriteRequest"></a>
<a id="tocSpatchedissuewriterequest"></a>
<a id="tocspatchedissuewriterequest"></a>

```json
{
  "position": [
    0
  ],
  "assignee": 0,
  "resolved": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[number(double)]|false|none|none|
|assignee|integer \| null|false|none|none|
|resolved|boolean|false|none|none|

<h2 id="tocS_PatchedJobDataMetaWriteRequest">PatchedJobDataMetaWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedjobdatametawriterequest"></a>
<a id="schema_PatchedJobDataMetaWriteRequest"></a>
<a id="tocSpatchedjobdatametawriterequest"></a>
<a id="tocspatchedjobdatametawriterequest"></a>

```json
{
  "deleted_frames": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted_frames|[integer]|false|none|none|

<h2 id="tocS_PatchedJobValidationLayoutWriteRequest">PatchedJobValidationLayoutWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedjobvalidationlayoutwriterequest"></a>
<a id="schema_PatchedJobValidationLayoutWriteRequest"></a>
<a id="tocSpatchedjobvalidationlayoutwriterequest"></a>
<a id="tocspatchedjobvalidationlayoutwriterequest"></a>

```json
{
  "frame_selection_method": {},
  "honeypot_real_frames": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frame_selection_method|object|false|none|The method to use for frame selection of new real frames for honeypots in the job<br><br><br>* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|honeypot_real_frames|[integer]|false|none|The list of frame ids. Applicable only to the "manual" frame selection method<br>|

<h2 id="tocS_PatchedJobWriteRequest">PatchedJobWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedjobwriterequest"></a>
<a id="schema_PatchedJobWriteRequest"></a>
<a id="tocSpatchedjobwriterequest"></a>
<a id="tocspatchedjobwriterequest"></a>

```json
{
  "assignee": 0,
  "stage": "annotation",
  "state": "new"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|integer \| null|false|none|none|
|stage|[JobStage](#schemajobstage)|false|none|* `annotation` - ANNOTATION<br>* `validation` - VALIDATION<br>* `acceptance` - ACCEPTANCE|
|state|[OperationStatus](#schemaoperationstatus)|false|none|* `new` - NEW<br>* `in progress` - IN_PROGRESS<br>* `completed` - COMPLETED<br>* `rejected` - REJECTED|

#### Enumerated Values

|Property|Value|
|---|---|
|stage|annotation|
|stage|validation|
|stage|acceptance|
|state|new|
|state|in progress|
|state|completed|
|state|rejected|

<h2 id="tocS_PatchedLabelRequest">PatchedLabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedlabelrequest"></a>
<a id="schema_PatchedLabelRequest"></a>
<a id="tocSpatchedlabelrequest"></a>
<a id="tocspatchedlabelrequest"></a>

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "deleted": true,
  "type": {},
  "svg": "string",
  "sublabels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "type": {},
      "has_parent": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|color|string|false|none|The hex value for the RGB color. Will be generated automatically, unless specified explicitly.|
|attributes|[[AttributeRequest](#schemaattributerequest)]|false|none|The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.|
|deleted|boolean|false|write-only|Delete the label. Only applicable in the PATCH methods of a project or a task.|
|type|object|false|none|Associated annotation type for this label<br><br>* `any` - ANY<br>* `cuboid` - CUBOID<br>* `ellipse` - ELLIPSE<br>* `mask` - MASK<br>* `points` - POINTS<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `rectangle` - RECTANGLE<br>* `skeleton` - SKELETON<br>* `interval` - INTERVAL<br>* `tag` - TAG|
|svg|string|false|none|none|
|sublabels|[[SublabelRequest](#schemasublabelrequest)]|false|none|none|

<h2 id="tocS_PatchedLabeledDataRequest">PatchedLabeledDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedlabeleddatarequest"></a>
<a id="schema_PatchedLabeledDataRequest"></a>
<a id="tocSpatchedlabeleddatarequest"></a>
<a id="tocspatchedlabeleddatarequest"></a>

```json
{
  "version": 0,
  "tags": [],
  "shapes": [],
  "tracks": [],
  "intervals": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|false|none|none|
|tags|[[LabeledImageRequest](#schemalabeledimagerequest)]|false|none|none|
|shapes|[[LabeledShapeRequest](#schemalabeledshaperequest)]|false|none|none|
|tracks|[[LabeledTrackRequest](#schemalabeledtrackrequest)]|false|none|none|
|intervals|[[LabeledIntervalRequest](#schemalabeledintervalrequest)]|false|none|none|

<h2 id="tocS_PatchedMembershipWriteRequest">PatchedMembershipWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedmembershipwriterequest"></a>
<a id="schema_PatchedMembershipWriteRequest"></a>
<a id="tocSpatchedmembershipwriterequest"></a>
<a id="tocspatchedmembershipwriterequest"></a>

```json
{
  "role": "worker"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[RoleEnum](#schemaroleenum)|false|none|* `worker` - Worker<br>* `supervisor` - Supervisor<br>* `maintainer` - Maintainer<br>* `owner` - Owner|

#### Enumerated Values

|Property|Value|
|---|---|
|role|worker|
|role|supervisor|
|role|maintainer|
|role|owner|

<h2 id="tocS_PatchedOrganizationWriteRequest">PatchedOrganizationWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedorganizationwriterequest"></a>
<a id="schema_PatchedOrganizationWriteRequest"></a>
<a id="tocSpatchedorganizationwriterequest"></a>
<a id="tocspatchedorganizationwriterequest"></a>

```json
{
  "slug": "string",
  "name": "string",
  "description": "string",
  "contact": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slug|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|contact|object|false|none|none|

<h2 id="tocS_PatchedProjectWriteRequest">PatchedProjectWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedprojectwriterequest"></a>
<a id="schema_PatchedProjectWriteRequest"></a>
<a id="tocSpatchedprojectwriterequest"></a>
<a id="tocspatchedprojectwriterequest"></a>

```json
{
  "name": "string",
  "labels": [],
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "organization_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|labels|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|write-only|none|
|owner_id|integer \| null|false|write-only|none|
|assignee_id|integer \| null|false|write-only|none|
|bug_tracker|string|false|none|none|
|target_storage|object|false|write-only|none|
|source_storage|object|false|write-only|none|
|organization_id|integer \| null|false|write-only|none|

<h2 id="tocS_PatchedQualityRequirementRequest">PatchedQualityRequirementRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedqualityrequirementrequest"></a>
<a id="schema_PatchedQualityRequirementRequest"></a>
<a id="tocSpatchedqualityrequirementrequest"></a>
<a id="tocspatchedqualityrequirementrequest"></a>

```json
{
  "settings_id": 0,
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings_id|integer|false|none|none|
|name|string|false|none|none|
|sort_order|integer|false|none|none|
|filter|string|false|none|none|
|enabled|boolean|false|none|none|
|annotation_type|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|none|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|required_score|number(double) \| null|false|none|Defines the minimal quality requirements in terms of the selected target metric.|
|parent_requirement|integer \| null|false|none|The parent requirement. Child requirements inherit comparison settings from it.|
|iou_threshold|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|none|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|point_size|number(double) \| null|false|none|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|point_size_base|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|line_thickness|number(double) \| null|false|none|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|match_orientation|boolean \| null|false|none|Enables or disables polyline orientation comparison|
|line_orientation_threshold|number(double) \| null|false|none|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|match_groups|boolean \| null|false|none|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|group_match_threshold|number(double) \| null|false|none|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|check_covered_annotations|boolean \| null|false|none|Check for partially-covered annotations, useful in segmentation tasks<br>|
|object_visibility_threshold|number(double) \| null|false|none|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|panoptic_comparison|boolean \| null|false|none|Use only the visible part of the masks and polygons in comparisons<br>|
|attribute_comparison|object \| null|false|none|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|

<h2 id="tocS_PatchedQualitySettingsRequest">PatchedQualitySettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedqualitysettingsrequest"></a>
<a id="schema_PatchedQualitySettingsRequest"></a>
<a id="tocSpatchedqualitysettingsrequest"></a>
<a id="tocspatchedqualitysettingsrequest"></a>

```json
{
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "settings_id": 0,
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_filter|string|false|none|A JSON-based logic expression used to filter jobs for quality validation.<br>The filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']<br>|
|inherit|boolean|false|none|Allow using project settings when computing task quality.<br>Only applicable to task quality settings inside projects<br>|
|max_validations_per_job|integer|false|none|The maximum number of job validation attempts for the job assignee.<br>The job can be automatically accepted if the job quality is above the required<br>threshold, defined by the target threshold parameter.<br>|
|requirements|[[QualityRequirementListItemRequest](#schemaqualityrequirementlistitemrequest)]|false|none|none|

<h2 id="tocS_PatchedTaskValidationLayoutWriteRequest">PatchedTaskValidationLayoutWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedtaskvalidationlayoutwriterequest"></a>
<a id="schema_PatchedTaskValidationLayoutWriteRequest"></a>
<a id="tocSpatchedtaskvalidationlayoutwriterequest"></a>
<a id="tocspatchedtaskvalidationlayoutwriterequest"></a>

```json
{
  "disabled_frames": [
    0
  ],
  "frame_selection_method": {},
  "honeypot_real_frames": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled_frames|[integer]|false|none|The list of frame ids to be excluded from validation<br>|
|frame_selection_method|object|false|none|The method to use for frame selection of new real frames for honeypots in the task<br><br><br>* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|honeypot_real_frames|[integer]|false|none|The list of frame ids. Applicable only to the "manual" frame selection method<br>|

<h2 id="tocS_PatchedTaskWriteRequest">PatchedTaskWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedtaskwriterequest"></a>
<a id="schema_PatchedTaskWriteRequest"></a>
<a id="tocSpatchedtaskwriterequest"></a>
<a id="tocspatchedtaskwriterequest"></a>

```json
{
  "name": "string",
  "project_id": 0,
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "labels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "deleted": true,
      "type": {},
      "svg": "string",
      "sublabels": [
        {
          "id": 0,
          "name": "string",
          "color": "string",
          "attributes": [],
          "type": {},
          "has_parent": true
        }
      ]
    }
  ],
  "subset": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "organization_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|project_id|integer \| null|false|none|none|
|owner_id|integer \| null|false|write-only|none|
|assignee_id|integer \| null|false|write-only|none|
|bug_tracker|string|false|none|none|
|labels|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|none|none|
|subset|string|false|none|none|
|target_storage|[StorageRequest](#schemastoragerequest)|false|none|none|
|source_storage|[StorageRequest](#schemastoragerequest)|false|none|none|
|organization_id|integer \| null|false|write-only|none|

<h2 id="tocS_PatchedUserGrowthDataRequest">PatchedUserGrowthDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedusergrowthdatarequest"></a>
<a id="schema_PatchedUserGrowthDataRequest"></a>
<a id="tocSpatchedusergrowthdatarequest"></a>
<a id="tocspatchedusergrowthdatarequest"></a>

```json
{
  "github_prompt_shown": true,
  "github_prompt_support_clicked": true,
  "promotion_notifications_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|github_prompt_shown|boolean|false|none|none|
|github_prompt_support_clicked|boolean|false|none|none|
|promotion_notifications_allowed|boolean|false|none|none|

<h2 id="tocS_PatchedUserRequest">PatchedUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatcheduserrequest"></a>
<a id="schema_PatchedUserRequest"></a>
<a id="tocSpatcheduserrequest"></a>
<a id="tocspatcheduserrequest"></a>

```json
{
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|email|string(email)|false|none|none|
|groups|[string]|false|none|none|
|is_staff|boolean|false|none|Designates whether the user can log into this admin site.|
|is_superuser|boolean|false|none|Designates that this user has all permissions without explicitly assigning them.|
|is_active|boolean|false|none|Designates whether this user should be treated as active. Unselect this instead of deleting accounts.|
|cvat_usage_reason|[CvatUsageReasonEnum](#schemacvatusagereasonenum) \| [BlankEnum](#schemablankenum)|false|none|The main reason the user uses CVAT.<br><br>* `work_project` - work_project<br>* `academic_research` - academic_research<br>* `teaching_or_coursework` - teaching_or_coursework<br>* `personal_project` - personal_project|
|primary_role|string|false|none|A predefined role code or custom role text.|
|planned_activities|[[PlannedActivitiesEnum](#schemaplannedactivitiesenum)]|false|none|Predefined activity codes selected by the user.|
|data_types|[string]|false|none|Predefined data type codes and optionally one custom value.|
|discovery_source|string|false|none|A predefined discovery source code or custom text.|

#### Enumerated Values

|Property|Value|
|---|---|
|planned_activities|set_up_projects|
|planned_activities|annotate_data|
|planned_activities|review_quality|
|planned_activities|manage_annotators|
|planned_activities|connect_models|
|planned_activities|evaluate_for_organization|

<h2 id="tocS_PatchedWebhookWriteRequest">PatchedWebhookWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchedwebhookwriterequest"></a>
<a id="schema_PatchedWebhookWriteRequest"></a>
<a id="tocSpatchedwebhookwriterequest"></a>
<a id="tocspatchedwebhookwriterequest"></a>

```json
{
  "target_url": "http://example.com",
  "description": "string",
  "content_type": "application/json",
  "secret": "string",
  "is_active": true,
  "enable_ssl": true,
  "events": [
    "completed:request[calculate:quality]"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_url|string(uri)|false|none|none|
|description|string|false|none|none|
|content_type|[WebhookContentType](#schemawebhookcontenttype)|false|none|* `application/json` - JSON|
|secret|string|false|none|none|
|is_active|boolean|false|none|none|
|enable_ssl|boolean|false|none|none|
|events|[[EventsEnum](#schemaeventsenum)]|false|write-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|content_type|application/json|
|events|completed:request[calculate:quality]|
|events|completed:request[create:task]|
|events|completed:request[export:annotations]|
|events|completed:request[export:backup]|
|events|completed:request[export:dataset]|
|events|completed:request[merge:job]|
|events|completed:request[merge:task]|
|events|create:comment|
|events|create:invitation|
|events|create:issue|
|events|create:job|
|events|create:membership|
|events|create:organization|
|events|create:project|
|events|create:task|
|events|create:user|
|events|delete:comment|
|events|delete:invitation|
|events|delete:issue|
|events|delete:job|
|events|delete:membership|
|events|delete:organization|
|events|delete:project|
|events|delete:task|
|events|delete:user|
|events|update:comment|
|events|update:issue|
|events|update:job|
|events|update:membership|
|events|update:organization|
|events|update:project|
|events|update:task|
|events|update:user|

<h2 id="tocS_PlannedActivitiesEnum">PlannedActivitiesEnum</h2>
<!-- backwards compatibility -->
<a id="schemaplannedactivitiesenum"></a>
<a id="schema_PlannedActivitiesEnum"></a>
<a id="tocSplannedactivitiesenum"></a>
<a id="tocsplannedactivitiesenum"></a>

```json
"set_up_projects"
```

* `set_up_projects` - set_up_projects
* `annotate_data` - annotate_data
* `review_quality` - review_quality
* `manage_annotators` - manage_annotators
* `connect_models` - connect_models
* `evaluate_for_organization` - evaluate_for_organization

<h2 id="tocS_Plugins">Plugins</h2>
<!-- backwards compatibility -->
<a id="schemaplugins"></a>
<a id="schema_Plugins"></a>
<a id="tocSplugins"></a>
<a id="tocsplugins"></a>

```json
{
  "ANALYTICS": true,
  "MODELS": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ANALYTICS|boolean|true|none|none|
|MODELS|boolean|true|none|none|

<h2 id="tocS_ProjectFileRequest">ProjectFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprojectfilerequest"></a>
<a id="schema_ProjectFileRequest"></a>
<a id="tocSprojectfilerequest"></a>
<a id="tocsprojectfilerequest"></a>

```json
{
  "project_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_file|string(binary)|true|none|none|

<h2 id="tocS_ProjectRead">ProjectRead</h2>
<!-- backwards compatibility -->
<a id="schemaprojectread"></a>
<a id="schema_ProjectRead"></a>
<a id="tocSprojectread"></a>
<a id="tocsprojectread"></a>

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "guide_id": 0,
  "bug_tracker": "string",
  "task_subsets": [
    "string"
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "status": {},
  "dimension": "string",
  "organization": 0,
  "organization_id": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "tasks": {
    "count": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|owner|object \| null|false|read-only|none|
|assignee|object \| null|false|read-only|none|
|guide_id|integer \| null|false|none|none|
|bug_tracker|string|false|read-only|none|
|task_subsets|[string]|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|status|object|false|read-only|none|
|dimension|string \| null|false|read-only|none|
|organization|integer \| null|false|read-only|**Deprecated.**|
|organization_id|integer \| null|false|read-only|none|
|target_storage|object \| null|false|read-only|none|
|source_storage|object \| null|false|read-only|none|
|tasks|[TasksSummary](#schemataskssummary)|true|none|none|
|labels|[LabelsSummary](#schemalabelssummary)|true|none|none|
|assignee_updated_date|string(date-time) \| null|false|read-only|none|

<h2 id="tocS_ProjectWriteRequest">ProjectWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprojectwriterequest"></a>
<a id="schema_ProjectWriteRequest"></a>
<a id="tocSprojectwriterequest"></a>
<a id="tocsprojectwriterequest"></a>

```json
{
  "name": "string",
  "labels": [],
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|labels|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|write-only|none|
|owner_id|integer \| null|false|write-only|none|
|assignee_id|integer \| null|false|write-only|none|
|bug_tracker|string|false|none|none|
|target_storage|object|false|write-only|none|
|source_storage|object|false|write-only|none|

<h2 id="tocS_ProviderTypeEnum">ProviderTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertypeenum"></a>
<a id="schema_ProviderTypeEnum"></a>
<a id="tocSprovidertypeenum"></a>
<a id="tocsprovidertypeenum"></a>

```json
"AWS_S3_BUCKET"
```

* `AWS_S3_BUCKET` - Amazon S3
* `AZURE_CONTAINER` - Azure Blob Storage
* `GOOGLE_CLOUD_STORAGE` - Google Cloud Storage

<h2 id="tocS_QualityPointSizeBase">QualityPointSizeBase</h2>
<!-- backwards compatibility -->
<a id="schemaqualitypointsizebase"></a>
<a id="schema_QualityPointSizeBase"></a>
<a id="tocSqualitypointsizebase"></a>
<a id="tocsqualitypointsizebase"></a>

```json
"image_size"
```

* `image_size` - IMAGE_SIZE
* `group_bbox_size` - GROUP_BBOX_SIZE

<h2 id="tocS_QualityReport">QualityReport</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreport"></a>
<a id="schema_QualityReport"></a>
<a id="tocSqualityreport"></a>
<a id="tocsqualityreport"></a>

```json
{
  "id": 0,
  "job_id": 0,
  "task_id": 0,
  "project_id": 0,
  "parent_id": 0,
  "target": "job",
  "summary": {
    "total_frames": 0,
    "validation_frames": 0,
    "validation_frame_share": 0,
    "conflict_count": 0,
    "error_count": 0,
    "conflicts_by_type": {
      "property1": 0,
      "property2": 0
    },
    "tasks": {
      "total": 0,
      "custom": 0,
      "not_configured": 0,
      "excluded": 0,
      "included": 0,
      "completed": 0
    },
    "jobs": {
      "total": 0,
      "excluded": 0,
      "not_checkable": 0,
      "included": 0,
      "completed": 0
    },
    "requirements": {
      "total": 0,
      "enabled": 0,
      "completed": 0,
      "not_computed": 0,
      "items": [
        {
          "requirement_id": 0,
          "name": "string",
          "metric": "accuracy",
          "score": 0,
          "score_components": {
            "valid_count": 0,
            "missing_count": 0,
            "extra_count": 0
          },
          "calculation": {
            "status": "computed",
            "reason": "no_annotations"
          },
          "threshold": 0
        }
      ]
    }
  },
  "created_date": "1970-01-01T00:00:00Z",
  "target_last_updated": "1970-01-01T00:00:00Z",
  "gt_last_updated": "1970-01-01T00:00:00Z",
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|job_id|integer \| null|false|read-only|none|
|task_id|integer \| null|false|read-only|none|
|project_id|integer \| null|false|read-only|none|
|parent_id|integer \| null|false|read-only|none|
|target|[QualityReportTarget](#schemaqualityreporttarget)|true|none|* `job` - JOB<br>* `task` - TASK<br>* `project` - PROJECT|
|summary|[QualityReportSummary](#schemaqualityreportsummary)|true|none|none|
|created_date|string(date-time)|false|read-only|none|
|target_last_updated|string(date-time)|false|read-only|none|
|gt_last_updated|string(date-time) \| null|false|read-only|none|
|assignee|object \| null|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|target|job|
|target|task|
|target|project|

<h2 id="tocS_QualityReportConfusionMatrix">QualityReportConfusionMatrix</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportconfusionmatrix"></a>
<a id="schema_QualityReportConfusionMatrix"></a>
<a id="tocSqualityreportconfusionmatrix"></a>
<a id="tocsqualityreportconfusionmatrix"></a>

```json
{
  "labels": [
    "string"
  ],
  "rows": [
    [
      0
    ]
  ],
  "axes": {
    "cols": "string",
    "rows": "string"
  },
  "precision": [
    0
  ],
  "recall": [
    0
  ],
  "accuracy": [
    0
  ],
  "jaccard_index": [
    0
  ],
  "dice": [
    0
  ],
  "target_metric_summary": {
    "metric": "accuracy",
    "aggregation": "micro",
    "values": {
      "micro": 0,
      "mean": 0,
      "label": 0
    },
    "worst_labels": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|true|none|none|
|rows|[[integer]]|true|none|none|
|axes|[QualityReportConfusionMatrixAxes](#schemaqualityreportconfusionmatrixaxes)|true|none|none|
|precision|[number(double)]|true|none|none|
|recall|[number(double)]|true|none|none|
|accuracy|[number(double)]|true|none|none|
|jaccard_index|[number(double)]|true|none|none|
|dice|[number(double)]|true|none|none|
|target_metric_summary|[QualityReportTargetMetricSummary](#schemaqualityreporttargetmetricsummary)|true|none|none|

<h2 id="tocS_QualityReportConfusionMatrixAxes">QualityReportConfusionMatrixAxes</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportconfusionmatrixaxes"></a>
<a id="schema_QualityReportConfusionMatrixAxes"></a>
<a id="tocSqualityreportconfusionmatrixaxes"></a>
<a id="tocsqualityreportconfusionmatrixaxes"></a>

```json
{
  "cols": "string",
  "rows": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|string|true|none|none|
|rows|string|true|none|none|

<h2 id="tocS_QualityReportCreateRequest">QualityReportCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportcreaterequest"></a>
<a id="schema_QualityReportCreateRequest"></a>
<a id="tocSqualityreportcreaterequest"></a>
<a id="tocsqualityreportcreaterequest"></a>

```json
{
  "task_id": 0,
  "project_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|integer|false|write-only|none|
|project_id|integer|false|write-only|none|

<h2 id="tocS_QualityReportJobsSummary">QualityReportJobsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportjobssummary"></a>
<a id="schema_QualityReportJobsSummary"></a>
<a id="tocSqualityreportjobssummary"></a>
<a id="tocsqualityreportjobssummary"></a>

```json
{
  "total": 0,
  "excluded": 0,
  "not_checkable": 0,
  "included": 0,
  "completed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|Non-GT jobs in included tasks|
|excluded|integer|true|none|Jobs excluded by filters|
|not_checkable|integer|true|none|Included jobs without validation frames|
|included|integer|true|none|Included job count = total - excluded|
|completed|integer|true|none|Jobs with all enabled requirements met|

<h2 id="tocS_QualityReportRequirementCalculation">QualityReportRequirementCalculation</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportrequirementcalculation"></a>
<a id="schema_QualityReportRequirementCalculation"></a>
<a id="tocSqualityreportrequirementcalculation"></a>
<a id="tocsqualityreportrequirementcalculation"></a>

```json
{
  "status": "computed",
  "reason": "no_annotations"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[QualityReportRequirementCalculationStatusEnum](#schemaqualityreportrequirementcalculationstatusenum)|true|none|* `computed` - computed<br>* `not_computed` - not_computed|
|reason|[ReasonEnum](#schemareasonenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|computed|
|status|not_computed|

<h2 id="tocS_QualityReportRequirementCalculationStatusEnum">QualityReportRequirementCalculationStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportrequirementcalculationstatusenum"></a>
<a id="schema_QualityReportRequirementCalculationStatusEnum"></a>
<a id="tocSqualityreportrequirementcalculationstatusenum"></a>
<a id="tocsqualityreportrequirementcalculationstatusenum"></a>

```json
"computed"
```

* `computed` - computed
* `not_computed` - not_computed

<h2 id="tocS_QualityReportRequirementSummaryItem">QualityReportRequirementSummaryItem</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportrequirementsummaryitem"></a>
<a id="schema_QualityReportRequirementSummaryItem"></a>
<a id="tocSqualityreportrequirementsummaryitem"></a>
<a id="tocsqualityreportrequirementsummaryitem"></a>

```json
{
  "requirement_id": 0,
  "name": "string",
  "metric": "accuracy",
  "score": 0,
  "score_components": {
    "valid_count": 0,
    "missing_count": 0,
    "extra_count": 0
  },
  "calculation": {
    "status": "computed",
    "reason": "no_annotations"
  },
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requirement_id|integer \| null|true|none|none|
|name|string|true|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric)|true|none|* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|score|number(double) \| null|true|none|none|
|score_components|[QualityReportScoreComponents](#schemaqualityreportscorecomponents)|true|none|none|
|calculation|[QualityReportRequirementCalculation](#schemaqualityreportrequirementcalculation)|true|none|none|
|threshold|number(double)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|accuracy|
|metric|precision|
|metric|recall|
|metric|jaccard_index|
|metric|dice|
|metric|mean_accuracy|
|metric|mean_precision|
|metric|mean_recall|
|metric|mean_jaccard_index|
|metric|mean_dice|
|metric|label_accuracy|
|metric|label_precision|
|metric|label_recall|
|metric|label_jaccard_index|
|metric|label_dice|

<h2 id="tocS_QualityReportRequirementsSummary">QualityReportRequirementsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportrequirementssummary"></a>
<a id="schema_QualityReportRequirementsSummary"></a>
<a id="tocSqualityreportrequirementssummary"></a>
<a id="tocsqualityreportrequirementssummary"></a>

```json
{
  "total": 0,
  "enabled": 0,
  "completed": 0,
  "not_computed": 0,
  "items": [
    {
      "requirement_id": 0,
      "name": "string",
      "metric": "accuracy",
      "score": 0,
      "score_components": {
        "valid_count": 0,
        "missing_count": 0,
        "extra_count": 0
      },
      "calculation": {
        "status": "computed",
        "reason": "no_annotations"
      },
      "threshold": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|none|
|enabled|integer|true|none|none|
|completed|integer|true|none|none|
|not_computed|integer|true|none|none|
|items|[[QualityReportRequirementSummaryItem](#schemaqualityreportrequirementsummaryitem)]|true|none|none|

<h2 id="tocS_QualityReportScoreComponents">QualityReportScoreComponents</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportscorecomponents"></a>
<a id="schema_QualityReportScoreComponents"></a>
<a id="tocSqualityreportscorecomponents"></a>
<a id="tocsqualityreportscorecomponents"></a>

```json
{
  "valid_count": 0,
  "missing_count": 0,
  "extra_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid_count|integer|true|none|none|
|missing_count|integer|true|none|none|
|extra_count|integer|true|none|none|

<h2 id="tocS_QualityReportSummary">QualityReportSummary</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreportsummary"></a>
<a id="schema_QualityReportSummary"></a>
<a id="tocSqualityreportsummary"></a>
<a id="tocsqualityreportsummary"></a>

```json
{
  "total_frames": 0,
  "validation_frames": 0,
  "validation_frame_share": 0,
  "conflict_count": 0,
  "error_count": 0,
  "conflicts_by_type": {
    "property1": 0,
    "property2": 0
  },
  "tasks": {
    "total": 0,
    "custom": 0,
    "not_configured": 0,
    "excluded": 0,
    "included": 0,
    "completed": 0
  },
  "jobs": {
    "total": 0,
    "excluded": 0,
    "not_checkable": 0,
    "included": 0,
    "completed": 0
  },
  "requirements": {
    "total": 0,
    "enabled": 0,
    "completed": 0,
    "not_computed": 0,
    "items": [
      {
        "requirement_id": 0,
        "name": "string",
        "metric": "accuracy",
        "score": 0,
        "score_components": {
          "valid_count": 0,
          "missing_count": 0,
          "extra_count": 0
        },
        "calculation": {
          "status": "computed",
          "reason": "no_annotations"
        },
        "threshold": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_frames|integer|true|none|none|
|validation_frames|integer|true|none|none|
|validation_frame_share|number(double)|true|none|none|
|conflict_count|integer|true|none|none|
|error_count|integer|true|none|none|
|conflicts_by_type|object|true|none|none|
|tasks|object|false|none|Included only in project reports|
|jobs|object|false|none|Included only in task and project reports|
|requirements|[QualityReportRequirementsSummary](#schemaqualityreportrequirementssummary)|false|none|none|

<h2 id="tocS_QualityReportTarget">QualityReportTarget</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreporttarget"></a>
<a id="schema_QualityReportTarget"></a>
<a id="tocSqualityreporttarget"></a>
<a id="tocsqualityreporttarget"></a>

```json
"job"
```

* `job` - JOB
* `task` - TASK
* `project` - PROJECT

<h2 id="tocS_QualityReportTargetMetricSummary">QualityReportTargetMetricSummary</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreporttargetmetricsummary"></a>
<a id="schema_QualityReportTargetMetricSummary"></a>
<a id="tocSqualityreporttargetmetricsummary"></a>
<a id="tocsqualityreporttargetmetricsummary"></a>

```json
{
  "metric": "accuracy",
  "aggregation": "micro",
  "values": {
    "micro": 0,
    "mean": 0,
    "label": 0
  },
  "worst_labels": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|[QualityReportTargetMetricSummaryMetricEnum](#schemaqualityreporttargetmetricsummarymetricenum)|true|none|* `accuracy` - accuracy<br>* `precision` - precision<br>* `recall` - recall<br>* `jaccard_index` - jaccard_index<br>* `dice` - dice|
|aggregation|[AggregationEnum](#schemaaggregationenum)|true|none|* `micro` - micro<br>* `mean` - mean<br>* `label` - label|
|values|[QualityReportTargetMetricValues](#schemaqualityreporttargetmetricvalues)|true|none|none|
|worst_labels|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|metric|accuracy|
|metric|precision|
|metric|recall|
|metric|jaccard_index|
|metric|dice|
|aggregation|micro|
|aggregation|mean|
|aggregation|label|

<h2 id="tocS_QualityReportTargetMetricSummaryMetricEnum">QualityReportTargetMetricSummaryMetricEnum</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreporttargetmetricsummarymetricenum"></a>
<a id="schema_QualityReportTargetMetricSummaryMetricEnum"></a>
<a id="tocSqualityreporttargetmetricsummarymetricenum"></a>
<a id="tocsqualityreporttargetmetricsummarymetricenum"></a>

```json
"accuracy"
```

* `accuracy` - accuracy
* `precision` - precision
* `recall` - recall
* `jaccard_index` - jaccard_index
* `dice` - dice

<h2 id="tocS_QualityReportTargetMetricValues">QualityReportTargetMetricValues</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreporttargetmetricvalues"></a>
<a id="schema_QualityReportTargetMetricValues"></a>
<a id="tocSqualityreporttargetmetricvalues"></a>
<a id="tocsqualityreporttargetmetricvalues"></a>

```json
{
  "micro": 0,
  "mean": 0,
  "label": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|micro|number(double) \| null|true|none|none|
|mean|number(double) \| null|true|none|none|
|label|number(double) \| null|true|none|none|

<h2 id="tocS_QualityReportTasksSummary">QualityReportTasksSummary</h2>
<!-- backwards compatibility -->
<a id="schemaqualityreporttaskssummary"></a>
<a id="schema_QualityReportTasksSummary"></a>
<a id="tocSqualityreporttaskssummary"></a>
<a id="tocsqualityreporttaskssummary"></a>

```json
{
  "total": 0,
  "custom": 0,
  "not_configured": 0,
  "excluded": 0,
  "included": 0,
  "completed": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|true|none|Total task count|
|custom|integer|true|none|Tasks with individual settings|
|not_configured|integer|true|none|Tasks with validation not configured|
|excluded|integer|true|none|Tasks excluded by filters|
|included|integer|true|none|Included task count = total - custom - non_configured - excluded|
|completed|integer|true|none|Tasks with all enabled requirements met|

<h2 id="tocS_QualityRequirement">QualityRequirement</h2>
<!-- backwards compatibility -->
<a id="schemaqualityrequirement"></a>
<a id="schema_QualityRequirement"></a>
<a id="tocSqualityrequirement"></a>
<a id="tocsqualityrequirement"></a>

```json
{
  "id": 0,
  "settings_id": 0,
  "task_id": 0,
  "project_id": 0,
  "name": "string",
  "is_base": true,
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "effective": {},
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|settings_id|integer|false|none|none|
|task_id|integer \| null|false|read-only|none|
|project_id|integer \| null|false|read-only|none|
|name|string|false|none|none|
|is_base|boolean|false|read-only|none|
|sort_order|integer|false|none|none|
|filter|string|false|none|none|
|enabled|boolean|false|none|none|
|annotation_type|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|none|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|required_score|number(double) \| null|false|none|Defines the minimal quality requirements in terms of the selected target metric.|
|parent_requirement|integer \| null|false|none|The parent requirement. Child requirements inherit comparison settings from it.|
|effective|object|false|read-only|none|
|iou_threshold|number \| [SimilarityThresholdPolicy](#schemasimilaritythresholdpolicy) \| null|false|none|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|point_size|number(double) \| null|false|none|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|point_size_base|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|line_thickness|number(double) \| null|false|none|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|match_orientation|boolean \| null|false|none|Enables or disables polyline orientation comparison|
|line_orientation_threshold|number(double) \| null|false|none|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|match_groups|boolean \| null|false|none|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|group_match_threshold|number(double) \| null|false|none|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|check_covered_annotations|boolean \| null|false|none|Check for partially-covered annotations, useful in segmentation tasks<br>|
|object_visibility_threshold|number(double) \| null|false|none|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|panoptic_comparison|boolean \| null|false|none|Use only the visible part of the masks and polygons in comparisons<br>|
|attribute_comparison|object \| null|false|none|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|

<h2 id="tocS_QualityRequirementBulkCreateNodeRequest">QualityRequirementBulkCreateNodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualityrequirementbulkcreatenoderequest"></a>
<a id="schema_QualityRequirementBulkCreateNodeRequest"></a>
<a id="tocSqualityrequirementbulkcreatenoderequest"></a>
<a id="tocsqualityrequirementbulkcreatenoderequest"></a>

```json
{
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "children": [
    {
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "children": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|sort_order|integer|false|none|none|
|filter|string|false|none|none|
|enabled|boolean|false|none|none|
|annotation_type|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|none|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|required_score|number(double) \| null|false|none|Defines the minimal quality requirements in terms of the selected target metric.|
|parent_requirement|integer \| null|false|none|Required for root requirements and forbidden for nested requirements. Must identify an existing requirement from the selected quality settings.|
|iou_threshold|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|none|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|point_size|number(double) \| null|false|none|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|point_size_base|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|line_thickness|number(double) \| null|false|none|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|match_orientation|boolean \| null|false|none|Enables or disables polyline orientation comparison|
|line_orientation_threshold|number(double) \| null|false|none|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|match_groups|boolean \| null|false|none|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|group_match_threshold|number(double) \| null|false|none|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|check_covered_annotations|boolean \| null|false|none|Check for partially-covered annotations, useful in segmentation tasks<br>|
|object_visibility_threshold|number(double) \| null|false|none|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|panoptic_comparison|boolean \| null|false|none|Use only the visible part of the masks and polygons in comparisons<br>|
|attribute_comparison|object \| null|false|none|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|
|children|[[QualityRequirementBulkCreateNodeRequest](#schemaqualityrequirementbulkcreatenoderequest)]|false|none|Nested requirements to create. Their parent is determined by their position in the hierarchy.|

<h2 id="tocS_QualityRequirementBulkCreateRequest">QualityRequirementBulkCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualityrequirementbulkcreaterequest"></a>
<a id="schema_QualityRequirementBulkCreateRequest"></a>
<a id="tocSqualityrequirementbulkcreaterequest"></a>
<a id="tocsqualityrequirementbulkcreaterequest"></a>

```json
{
  "settings_id": 0,
  "requirements": [
    {
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "children": [
        {}
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings_id|integer|true|none|none|
|requirements|[[QualityRequirementBulkCreateNodeRequest](#schemaqualityrequirementbulkcreatenoderequest)]|true|none|none|

<h2 id="tocS_QualityRequirementListItem">QualityRequirementListItem</h2>
<!-- backwards compatibility -->
<a id="schemaqualityrequirementlistitem"></a>
<a id="schema_QualityRequirementListItem"></a>
<a id="tocSqualityrequirementlistitem"></a>
<a id="tocsqualityrequirementlistitem"></a>

```json
{
  "id": 0,
  "settings_id": 0,
  "task_id": 0,
  "project_id": 0,
  "name": "string",
  "is_base": true,
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  },
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|settings_id|integer|false|none|none|
|task_id|integer \| null|false|read-only|none|
|project_id|integer \| null|false|read-only|none|
|name|string|false|none|none|
|is_base|boolean|false|read-only|none|
|sort_order|integer|false|none|none|
|filter|string|false|none|none|
|enabled|boolean|false|none|none|
|annotation_type|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|none|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|required_score|number(double) \| null|false|none|Defines the minimal quality requirements in terms of the selected target metric.|
|parent_requirement|integer \| null|false|none|The parent requirement. Child requirements inherit comparison settings from it.|
|iou_threshold|number \| [SimilarityThresholdPolicy](#schemasimilaritythresholdpolicy) \| null|false|none|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|point_size|number(double) \| null|false|none|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|point_size_base|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|line_thickness|number(double) \| null|false|none|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|match_orientation|boolean \| null|false|none|Enables or disables polyline orientation comparison|
|line_orientation_threshold|number(double) \| null|false|none|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|match_groups|boolean \| null|false|none|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|group_match_threshold|number(double) \| null|false|none|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|check_covered_annotations|boolean \| null|false|none|Check for partially-covered annotations, useful in segmentation tasks<br>|
|object_visibility_threshold|number(double) \| null|false|none|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|panoptic_comparison|boolean \| null|false|none|Use only the visible part of the masks and polygons in comparisons<br>|
|attribute_comparison|object \| null|false|none|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|

<h2 id="tocS_QualityRequirementListItemRequest">QualityRequirementListItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualityrequirementlistitemrequest"></a>
<a id="schema_QualityRequirementListItemRequest"></a>
<a id="tocSqualityrequirementlistitemrequest"></a>
<a id="tocsqualityrequirementlistitemrequest"></a>

```json
{
  "settings_id": 0,
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings_id|integer|false|none|none|
|name|string|false|none|none|
|sort_order|integer|false|none|none|
|filter|string|false|none|none|
|enabled|boolean|false|none|none|
|annotation_type|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|none|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|required_score|number(double) \| null|false|none|Defines the minimal quality requirements in terms of the selected target metric.|
|parent_requirement|integer \| null|false|none|The parent requirement. Child requirements inherit comparison settings from it.|
|iou_threshold|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|none|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|point_size|number(double) \| null|false|none|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|point_size_base|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|line_thickness|number(double) \| null|false|none|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|match_orientation|boolean \| null|false|none|Enables or disables polyline orientation comparison|
|line_orientation_threshold|number(double) \| null|false|none|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|match_groups|boolean \| null|false|none|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|group_match_threshold|number(double) \| null|false|none|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|check_covered_annotations|boolean \| null|false|none|Check for partially-covered annotations, useful in segmentation tasks<br>|
|object_visibility_threshold|number(double) \| null|false|none|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|panoptic_comparison|boolean \| null|false|none|Use only the visible part of the masks and polygons in comparisons<br>|
|attribute_comparison|object \| null|false|none|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|

<h2 id="tocS_QualityRequirementRequest">QualityRequirementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualityrequirementrequest"></a>
<a id="schema_QualityRequirementRequest"></a>
<a id="tocSqualityrequirementrequest"></a>
<a id="tocsqualityrequirementrequest"></a>

```json
{
  "settings_id": 0,
  "name": "string",
  "sort_order": -2147483648,
  "filter": "string",
  "enabled": true,
  "annotation_type": "tag",
  "metric": "accuracy",
  "required_score": 0,
  "parent_requirement": 0,
  "iou_threshold": 0,
  "point_size": 0,
  "point_size_base": "image_size",
  "line_thickness": 0,
  "match_orientation": true,
  "line_orientation_threshold": 0,
  "match_groups": true,
  "group_match_threshold": 0,
  "check_covered_annotations": true,
  "object_visibility_threshold": 0,
  "panoptic_comparison": true,
  "attribute_comparison": {
    "default": {
      "enabled": true,
      "comparator": "exact",
      "threshold": 0
    },
    "rules": [
      {
        "spec_id": 0,
        "enabled": true,
        "comparator": "exact",
        "threshold": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings_id|integer|false|none|none|
|name|string|false|none|none|
|sort_order|integer|false|none|none|
|filter|string|false|none|none|
|enabled|boolean|false|none|none|
|annotation_type|[AnnotationTypeEnum](#schemaannotationtypeenum) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|none|
|metric|[QualityTargetMetric](#schemaqualitytargetmetric) \| [NullEnum](#schemanullenum) \| null|false|none|The primary metric used for quality estimation<br><br>* `accuracy` - ACCURACY<br>* `precision` - PRECISION<br>* `recall` - RECALL<br>* `jaccard_index` - JACCARD_INDEX<br>* `dice` - DICE<br>* `mean_accuracy` - MEAN_ACCURACY<br>* `mean_precision` - MEAN_PRECISION<br>* `mean_recall` - MEAN_RECALL<br>* `mean_jaccard_index` - MEAN_JACCARD_INDEX<br>* `mean_dice` - MEAN_DICE<br>* `label_accuracy` - LABEL_ACCURACY<br>* `label_precision` - LABEL_PRECISION<br>* `label_recall` - LABEL_RECALL<br>* `label_jaccard_index` - LABEL_JACCARD_INDEX<br>* `label_dice` - LABEL_DICE|
|required_score|number(double) \| null|false|none|Defines the minimal quality requirements in terms of the selected target metric.|
|parent_requirement|integer \| null|false|none|The parent requirement. Child requirements inherit comparison settings from it.|
|iou_threshold|number \| [SimilarityThresholdPolicyRequest](#schemasimilaritythresholdpolicyrequest) \| null|false|none|A constant threshold or an IoU policy by GT shape area (rectangle, polygon, mask, ellipse). Null inherits the whole threshold from the parent.|
|point_size|number(double) \| null|false|none|The point "size" (the OKS sigma), as a fraction of the object size, defined by<br>the point size base. Corresponds to the standard deviation of the keypoint position.<br>Larger values give larger areas around the GT points, where the checked points<br>are accepted.<br>Read more about the point matching in the documentation.|
|point_size_base|[QualityPointSizeBase](#schemaqualitypointsizebase) \| [BlankEnum](#schemablankenum) \| [NullEnum](#schemanullenum) \| null|false|none|When comparing point annotations (including both separate points and point groups),<br>the point size parameter defines matching area for each GT point based to the<br>object size. The point size base parameter allows to configure how to determine<br>the object size.<br>If image_size, the image size is used. Useful if each point<br>annotation represents a separate object or boxes grouped with points do not<br>represent object boundaries.<br>If group_bbox_size, the object size is based on<br>the point group bbox size. Useful if each point group represents an object<br>or there is a bbox grouped with points, representing the object size.<br><br><br>* `image_size` - IMAGE_SIZE<br>* `group_bbox_size` - GROUP_BBOX_SIZE|
|line_thickness|number(double) \| null|false|none|Thickness of polylines, relatively to the (image area) ^ 0.5.<br>The distance to the boundary around the GT line,<br>inside of which the checked line points should be<br>|
|match_orientation|boolean \| null|false|none|Enables or disables polyline orientation comparison|
|line_orientation_threshold|number(double) \| null|false|none|The minimal gain in the GT IoU between the given and reversed line directions<br>to consider the line inverted.<br>Only used when the 'match_orientation' parameter is true<br>|
|match_groups|boolean \| null|false|none|Enables or disables annotation group checks. Only annotations of the same shape type can form matching groups.|
|group_match_threshold|number(double) \| null|false|none|Minimal IoU for groups to be considered matching.<br>Only used when the 'match_groups' parameter is true<br>|
|check_covered_annotations|boolean \| null|false|none|Check for partially-covered annotations, useful in segmentation tasks<br>|
|object_visibility_threshold|number(double) \| null|false|none|Minimal visible area percent of the spatial annotations (polygons, masks)<br>for reporting covered annotations.<br>Only used when the 'object_visibility_threshold' parameter is true<br>|
|panoptic_comparison|boolean \| null|false|none|Use only the visible part of the masks and polygons in comparisons<br>|
|attribute_comparison|object \| null|false|none|Incremental attribute comparison settings. The default rule applies to attributes without an override; rules override behavior for individual AttributeSpec ids.|

<h2 id="tocS_QualitySettings">QualitySettings</h2>
<!-- backwards compatibility -->
<a id="schemaqualitysettings"></a>
<a id="schema_QualitySettings"></a>
<a id="tocSqualitysettings"></a>
<a id="tocsqualitysettings"></a>

```json
{
  "id": 0,
  "task_id": 0,
  "project_id": 0,
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "id": 0,
      "settings_id": 0,
      "task_id": 0,
      "project_id": 0,
      "name": "string",
      "is_base": true,
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      },
      "created_date": "1970-01-01T00:00:00Z",
      "updated_date": "1970-01-01T00:00:00Z"
    }
  ],
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|task_id|integer \| null|false|none|none|
|project_id|integer \| null|false|none|none|
|job_filter|string|false|none|A JSON-based logic expression used to filter jobs for quality validation.<br>The filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']<br>|
|inherit|boolean|false|none|Allow using project settings when computing task quality.<br>Only applicable to task quality settings inside projects<br>|
|max_validations_per_job|integer|false|none|The maximum number of job validation attempts for the job assignee.<br>The job can be automatically accepted if the job quality is above the required<br>threshold, defined by the target threshold parameter.<br>|
|requirements|[[QualityRequirementListItem](#schemaqualityrequirementlistitem)]|false|none|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|

<h2 id="tocS_QualitySettingsRequest">QualitySettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqualitysettingsrequest"></a>
<a id="schema_QualitySettingsRequest"></a>
<a id="tocSqualitysettingsrequest"></a>
<a id="tocsqualitysettingsrequest"></a>

```json
{
  "job_filter": "string",
  "inherit": true,
  "max_validations_per_job": 0,
  "requirements": [
    {
      "settings_id": 0,
      "name": "string",
      "sort_order": -2147483648,
      "filter": "string",
      "enabled": true,
      "annotation_type": "tag",
      "metric": "accuracy",
      "required_score": 0,
      "parent_requirement": 0,
      "iou_threshold": 0,
      "point_size": 0,
      "point_size_base": "image_size",
      "line_thickness": 0,
      "match_orientation": true,
      "line_orientation_threshold": 0,
      "match_groups": true,
      "group_match_threshold": 0,
      "check_covered_annotations": true,
      "object_visibility_threshold": 0,
      "panoptic_comparison": true,
      "attribute_comparison": {
        "default": {
          "enabled": true,
          "comparator": "exact",
          "threshold": 0
        },
        "rules": [
          {
            "spec_id": 0,
            "enabled": true,
            "comparator": "exact",
            "threshold": 0
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_filter|string|false|none|A JSON-based logic expression used to filter jobs for quality validation.<br>The filter supports various terms to specify conditions on job: ['assignee', 'id', 'stage', 'state', 'task_id', 'task_name', 'type']<br>|
|inherit|boolean|false|none|Allow using project settings when computing task quality.<br>Only applicable to task quality settings inside projects<br>|
|max_validations_per_job|integer|false|none|The maximum number of job validation attempts for the job assignee.<br>The job can be automatically accepted if the job quality is above the required<br>threshold, defined by the target threshold parameter.<br>|
|requirements|[[QualityRequirementListItemRequest](#schemaqualityrequirementlistitemrequest)]|false|none|none|

<h2 id="tocS_QualityTargetMetric">QualityTargetMetric</h2>
<!-- backwards compatibility -->
<a id="schemaqualitytargetmetric"></a>
<a id="schema_QualityTargetMetric"></a>
<a id="tocSqualitytargetmetric"></a>
<a id="tocsqualitytargetmetric"></a>

```json
"accuracy"
```

* `accuracy` - ACCURACY
* `precision` - PRECISION
* `recall` - RECALL
* `jaccard_index` - JACCARD_INDEX
* `dice` - DICE
* `mean_accuracy` - MEAN_ACCURACY
* `mean_precision` - MEAN_PRECISION
* `mean_recall` - MEAN_RECALL
* `mean_jaccard_index` - MEAN_JACCARD_INDEX
* `mean_dice` - MEAN_DICE
* `label_accuracy` - LABEL_ACCURACY
* `label_precision` - LABEL_PRECISION
* `label_recall` - LABEL_RECALL
* `label_jaccard_index` - LABEL_JACCARD_INDEX
* `label_dice` - LABEL_DICE

<h2 id="tocS_ReasonEnum">ReasonEnum</h2>
<!-- backwards compatibility -->
<a id="schemareasonenum"></a>
<a id="schema_ReasonEnum"></a>
<a id="tocSreasonenum"></a>
<a id="tocsreasonenum"></a>

```json
"no_annotations"
```

* `no_annotations` - no_annotations
* `filter_no_matches` - filter_no_matches
* `required_attributes_missing` - required_attributes_missing

<h2 id="tocS_RegisterSerializerEx">RegisterSerializerEx</h2>
<!-- backwards compatibility -->
<a id="schemaregisterserializerex"></a>
<a id="schema_RegisterSerializerEx"></a>
<a id="tocSregisterserializerex"></a>
<a id="tocsregisterserializerex"></a>

```json
{
  "username": "string",
  "email": "user@example.com",
  "first_name": "string",
  "last_name": "string",
  "email_verification_required": true,
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|email|string(email)|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|email_verification_required|boolean|false|read-only|none|
|key|string \| null|false|read-only|none|

<h2 id="tocS_RegisterSerializerExRequest">RegisterSerializerExRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterserializerexrequest"></a>
<a id="schema_RegisterSerializerExRequest"></a>
<a id="tocSregisterserializerexrequest"></a>
<a id="tocsregisterserializerexrequest"></a>

```json
{
  "username": "string",
  "email": "user@example.com",
  "password1": "stringst",
  "password2": "stringst",
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|email|string(email)|false|none|none|
|password1|string|true|write-only|none|
|password2|string|true|write-only|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|

<h2 id="tocS_ReplicaJobCreateRequest">ReplicaJobCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplicajobcreaterequest"></a>
<a id="schema_ReplicaJobCreateRequest"></a>
<a id="tocSreplicajobcreaterequest"></a>
<a id="tocsreplicajobcreaterequest"></a>

```json
{
  "assignee": 0,
  "type": "replica",
  "task_id": 0,
  "parent_job_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|integer \| null|false|none|none|
|type|[ReplicaJobCreateTypeEnum](#schemareplicajobcreatetypeenum)|true|none|* `replica` - REPLICA|
|task_id|integer|true|none|none|
|parent_job_id|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|replica|

<h2 id="tocS_ReplicaJobCreateTypeEnum">ReplicaJobCreateTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemareplicajobcreatetypeenum"></a>
<a id="schema_ReplicaJobCreateTypeEnum"></a>
<a id="tocSreplicajobcreatetypeenum"></a>
<a id="tocsreplicajobcreatetypeenum"></a>

```json
"replica"
```

* `replica` - REPLICA

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "status": "queued",
  "message": "string",
  "id": "string",
  "operation": {
    "type": "string",
    "target": "string",
    "project_id": 0,
    "task_id": 0,
    "job_id": 0,
    "org_id": 0,
    "format": "string",
    "function_id": "string",
    "lightweight": true
  },
  "progress": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "started_date": "1970-01-01T00:00:00Z",
  "finished_date": "1970-01-01T00:00:00Z",
  "expiry_date": "1970-01-01T00:00:00Z",
  "owner": {
    "id": 0,
    "username": "string"
  },
  "result_url": "http://example.com",
  "result_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[RequestStatus](#schemarequeststatus)|true|none|* `queued` - Queued<br>* `started` - Started<br>* `failed` - Failed<br>* `finished` - Finished|
|message|string|false|read-only|none|
|id|string|true|none|none|
|operation|[RequestDataOperation](#schemarequestdataoperation)|true|none|none|
|progress|number(double) \| null|false|read-only|none|
|created_date|string(date-time)|true|none|none|
|started_date|string(date-time) \| null|false|none|none|
|finished_date|string(date-time) \| null|false|none|none|
|expiry_date|string(date-time) \| null|false|read-only|none|
|owner|object|false|read-only|none|
|result_url|string(uri) \| null|false|none|none|
|result_id|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|started|
|status|failed|
|status|finished|

<h2 id="tocS_RequestDataOperation">RequestDataOperation</h2>
<!-- backwards compatibility -->
<a id="schemarequestdataoperation"></a>
<a id="schema_RequestDataOperation"></a>
<a id="tocSrequestdataoperation"></a>
<a id="tocsrequestdataoperation"></a>

```json
{
  "type": "string",
  "target": "string",
  "project_id": 0,
  "task_id": 0,
  "job_id": 0,
  "org_id": 0,
  "format": "string",
  "function_id": "string",
  "lightweight": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|target|string|true|none|none|
|project_id|integer \| null|false|none|none|
|task_id|integer \| null|false|none|none|
|job_id|integer \| null|false|none|none|
|org_id|integer \| null|false|none|none|
|format|string \| null|false|none|none|
|function_id|string \| null|false|none|none|
|lightweight|boolean \| null|false|none|none|

<h2 id="tocS_RequestStatus">RequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemarequeststatus"></a>
<a id="schema_RequestStatus"></a>
<a id="tocSrequeststatus"></a>
<a id="tocsrequeststatus"></a>

```json
"queued"
```

* `queued` - Queued
* `started` - Started
* `failed` - Failed
* `finished` - Finished

<h2 id="tocS_RestAuthDetail">RestAuthDetail</h2>
<!-- backwards compatibility -->
<a id="schemarestauthdetail"></a>
<a id="schema_RestAuthDetail"></a>
<a id="tocSrestauthdetail"></a>
<a id="tocsrestauthdetail"></a>

```json
{
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|read-only|none|

<h2 id="tocS_RoleEnum">RoleEnum</h2>
<!-- backwards compatibility -->
<a id="schemaroleenum"></a>
<a id="schema_RoleEnum"></a>
<a id="tocSroleenum"></a>
<a id="tocsroleenum"></a>

```json
"worker"
```

* `worker` - Worker
* `supervisor` - Supervisor
* `maintainer` - Maintainer
* `owner` - Owner

<h2 id="tocS_RqId">RqId</h2>
<!-- backwards compatibility -->
<a id="schemarqid"></a>
<a id="schema_RqId"></a>
<a id="tocSrqid"></a>
<a id="tocsrqid"></a>

```json
{
  "rq_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rq_id|string|true|none|Request id|

<h2 id="tocS_RqStatus">RqStatus</h2>
<!-- backwards compatibility -->
<a id="schemarqstatus"></a>
<a id="schema_RqStatus"></a>
<a id="tocSrqstatus"></a>
<a id="tocsrqstatus"></a>

```json
{
  "state": "Queued",
  "message": "",
  "progress": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[RqStatusStateEnum](#schemarqstatusstateenum)|true|none|* `Queued` - Queued<br>* `Started` - Started<br>* `Finished` - Finished<br>* `Failed` - Failed|
|message|string|false|none|none|
|progress|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|Queued|
|state|Started|
|state|Finished|
|state|Failed|

<h2 id="tocS_RqStatusStateEnum">RqStatusStateEnum</h2>
<!-- backwards compatibility -->
<a id="schemarqstatusstateenum"></a>
<a id="schema_RqStatusStateEnum"></a>
<a id="tocSrqstatusstateenum"></a>
<a id="tocsrqstatusstateenum"></a>

```json
"Queued"
```

* `Queued` - Queued
* `Started` - Started
* `Finished` - Finished
* `Failed` - Failed

<h2 id="tocS_ShapeType">ShapeType</h2>
<!-- backwards compatibility -->
<a id="schemashapetype"></a>
<a id="schema_ShapeType"></a>
<a id="tocSshapetype"></a>
<a id="tocsshapetype"></a>

```json
"rectangle"
```

* `rectangle` - RECTANGLE
* `polygon` - POLYGON
* `polyline` - POLYLINE
* `points` - POINTS
* `ellipse` - ELLIPSE
* `cuboid` - CUBOID
* `mask` - MASK
* `skeleton` - SKELETON

<h2 id="tocS_SimilarityThresholdPolicy">SimilarityThresholdPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasimilaritythresholdpolicy"></a>
<a id="schema_SimilarityThresholdPolicy"></a>
<a id="tocSsimilaritythresholdpolicy"></a>
<a id="tocssimilaritythresholdpolicy"></a>

```json
{
  "type": {},
  "mode": "constant",
  "value": 0,
  "input": "gt.shape_area",
  "extrapolation": "clamp",
  "points": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.

The `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.
Existing numeric thresholds are returned as numbers.

A constant policy uses one threshold for all shapes:

```json
{"type": "iou", "mode": "constant", "value": 0.7}
```

A linear policy chooses a threshold from the GT shape area in px²:

```json
{
  "type": "iou",
  "mode": "linear",
  "input": "gt.shape_area",
  "extrapolation": "clamp",
  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]
}
```

Linear policies require 2-200 points with unique positive areas sorted in ascending order
and thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.
Policies without `type` are accepted as IoU for compatibility; responses include it.
Other threshold types are not supported.

Setting a child's threshold to `null` restores inheritance of the whole threshold.
Root requirements cannot inherit their threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|Threshold type. Omitted type is accepted as IoU for compatibility; responses always include it.<br><br>* `iou` - iou|
|mode|[SimilarityThresholdPolicyModeEnum](#schemasimilaritythresholdpolicymodeenum)|true|none|* `constant` - constant<br>* `linear` - linear|
|value|number(double)|false|none|none|
|input|[InputEnum](#schemainputenum)|false|none|* `gt.shape_area` - gt.shape_area|
|extrapolation|[ExtrapolationEnum](#schemaextrapolationenum)|false|none|* `clamp` - clamp|
|points|[[ThresholdPolicyPoint](#schemathresholdpolicypoint)]|false|none|Required in linear mode: 2-200 points sorted by unique positive GT area.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|constant|
|mode|linear|
|input|gt.shape_area|
|extrapolation|clamp|

<h2 id="tocS_SimilarityThresholdPolicyModeEnum">SimilarityThresholdPolicyModeEnum</h2>
<!-- backwards compatibility -->
<a id="schemasimilaritythresholdpolicymodeenum"></a>
<a id="schema_SimilarityThresholdPolicyModeEnum"></a>
<a id="tocSsimilaritythresholdpolicymodeenum"></a>
<a id="tocssimilaritythresholdpolicymodeenum"></a>

```json
"constant"
```

* `constant` - constant
* `linear` - linear

<h2 id="tocS_SimilarityThresholdPolicyRequest">SimilarityThresholdPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasimilaritythresholdpolicyrequest"></a>
<a id="schema_SimilarityThresholdPolicyRequest"></a>
<a id="tocSsimilaritythresholdpolicyrequest"></a>
<a id="tocssimilaritythresholdpolicyrequest"></a>

```json
{
  "type": {},
  "mode": "constant",
  "value": 0,
  "input": "gt.shape_area",
  "extrapolation": "clamp",
  "points": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

An IoU threshold policy for rectangle, polygon, mask, and ellipse requirements.

The `iou_threshold` field also accepts a finite number between 0 and 1, such as `0.7`.
Existing numeric thresholds are returned as numbers.

A constant policy uses one threshold for all shapes:

```json
{"type": "iou", "mode": "constant", "value": 0.7}
```

A linear policy chooses a threshold from the GT shape area in px²:

```json
{
  "type": "iou",
  "mode": "linear",
  "input": "gt.shape_area",
  "extrapolation": "clamp",
  "points": [{"x": 100, "y": 0.4}, {"x": 1000, "y": 0.9}]
}
```

Linear policies require 2-200 points with unique positive areas sorted in ascending order
and thresholds between 0 and 1. Outside the curve, the nearest endpoint applies.
Policies without `type` are accepted as IoU for compatibility; responses include it.
Other threshold types are not supported.

Setting a child's threshold to `null` restores inheritance of the whole threshold.
Root requirements cannot inherit their threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|Threshold type. Omitted type is accepted as IoU for compatibility; responses always include it.<br><br>* `iou` - iou|
|mode|[SimilarityThresholdPolicyModeEnum](#schemasimilaritythresholdpolicymodeenum)|true|none|* `constant` - constant<br>* `linear` - linear|
|value|number(double)|false|none|none|
|input|[InputEnum](#schemainputenum)|false|none|* `gt.shape_area` - gt.shape_area|
|extrapolation|[ExtrapolationEnum](#schemaextrapolationenum)|false|none|* `clamp` - clamp|
|points|[[ThresholdPolicyPointRequest](#schemathresholdpolicypointrequest)]|false|none|Required in linear mode: 2-200 points sorted by unique positive GT area.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|constant|
|mode|linear|
|input|gt.shape_area|
|extrapolation|clamp|

<h2 id="tocS_SimilarityThresholdPolicyTypeEnum">SimilarityThresholdPolicyTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemasimilaritythresholdpolicytypeenum"></a>
<a id="schema_SimilarityThresholdPolicyTypeEnum"></a>
<a id="tocSsimilaritythresholdpolicytypeenum"></a>
<a id="tocssimilaritythresholdpolicytypeenum"></a>

```json
"iou"
```

* `iou` - iou

<h2 id="tocS_SortingMethod">SortingMethod</h2>
<!-- backwards compatibility -->
<a id="schemasortingmethod"></a>
<a id="schema_SortingMethod"></a>
<a id="tocSsortingmethod"></a>
<a id="tocssortingmethod"></a>

```json
"lexicographical"
```

* `lexicographical` - LEXICOGRAPHICAL
* `natural` - NATURAL
* `predefined` - PREDEFINED
* `random` - RANDOM

<h2 id="tocS_Storage">Storage</h2>
<!-- backwards compatibility -->
<a id="schemastorage"></a>
<a id="schema_Storage"></a>
<a id="tocSstorage"></a>
<a id="tocsstorage"></a>

```json
{
  "id": 0,
  "location": "cloud_storage",
  "cloud_storage_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|location|[LocationEnum](#schemalocationenum)|false|none|* `cloud_storage` - CLOUD_STORAGE<br>* `local` - LOCAL|
|cloud_storage_id|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location|cloud_storage|
|location|local|

<h2 id="tocS_StorageMethod">StorageMethod</h2>
<!-- backwards compatibility -->
<a id="schemastoragemethod"></a>
<a id="schema_StorageMethod"></a>
<a id="tocSstoragemethod"></a>
<a id="tocsstoragemethod"></a>

```json
"cache"
```

* `cache` - CACHE
* `file_system` - FILE_SYSTEM

<h2 id="tocS_StorageRequest">StorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemastoragerequest"></a>
<a id="schema_StorageRequest"></a>
<a id="tocSstoragerequest"></a>
<a id="tocsstoragerequest"></a>

```json
{
  "location": "cloud_storage",
  "cloud_storage_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[LocationEnum](#schemalocationenum)|false|none|* `cloud_storage` - CLOUD_STORAGE<br>* `local` - LOCAL|
|cloud_storage_id|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|location|cloud_storage|
|location|local|

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
"cloud_storage"
```

* `cloud_storage` - CLOUD_STORAGE
* `local` - LOCAL
* `share` - SHARE

<h2 id="tocS_SubLabeledShape">SubLabeledShape</h2>
<!-- backwards compatibility -->
<a id="schemasublabeledshape"></a>
<a id="schema_SubLabeledShape"></a>
<a id="tocSsublabeledshape"></a>
<a id="tocssublabeledshape"></a>

```json
{
  "type": "rectangle",
  "occluded": false,
  "outside": false,
  "z_order": 0,
  "rotation": 0,
  "points": [
    0
  ],
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "score": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ShapeType](#schemashapetype)|true|none|* `rectangle` - RECTANGLE<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `points` - POINTS<br>* `ellipse` - ELLIPSE<br>* `cuboid` - CUBOID<br>* `mask` - MASK<br>* `skeleton` - SKELETON|
|occluded|boolean|false|none|none|
|outside|boolean|false|none|none|
|z_order|integer|false|none|none|
|rotation|number(double)|false|none|none|
|points|[number(double)]|false|none|none|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|
|score|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rectangle|
|type|polygon|
|type|polyline|
|type|points|
|type|ellipse|
|type|cuboid|
|type|mask|
|type|skeleton|

<h2 id="tocS_SubLabeledShapeRequest">SubLabeledShapeRequest</h2>
<!-- backwards compatibility -->
<a id="schemasublabeledshaperequest"></a>
<a id="schema_SubLabeledShapeRequest"></a>
<a id="tocSsublabeledshaperequest"></a>
<a id="tocssublabeledshaperequest"></a>

```json
{
  "type": "rectangle",
  "occluded": false,
  "outside": false,
  "z_order": 0,
  "rotation": 0,
  "points": [
    0
  ],
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "score": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ShapeType](#schemashapetype)|true|none|* `rectangle` - RECTANGLE<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `points` - POINTS<br>* `ellipse` - ELLIPSE<br>* `cuboid` - CUBOID<br>* `mask` - MASK<br>* `skeleton` - SKELETON|
|occluded|boolean|false|none|none|
|outside|boolean|false|none|none|
|z_order|integer|false|none|none|
|rotation|number(double)|false|none|none|
|points|[number(double)]|false|none|none|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|
|score|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rectangle|
|type|polygon|
|type|polyline|
|type|points|
|type|ellipse|
|type|cuboid|
|type|mask|
|type|skeleton|

<h2 id="tocS_SubLabeledTrack">SubLabeledTrack</h2>
<!-- backwards compatibility -->
<a id="schemasublabeledtrack"></a>
<a id="schema_SubLabeledTrack"></a>
<a id="tocSsublabeledtrack"></a>
<a id="tocssublabeledtrack"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "shapes": [
    {
      "type": "rectangle",
      "occluded": false,
      "outside": false,
      "z_order": 0,
      "rotation": 0,
      "points": [
        0
      ],
      "attributes": [],
      "id": 0,
      "frame": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|
|shapes|[[TrackedShape](#schematrackedshape)]|true|none|none|

<h2 id="tocS_SubLabeledTrackRequest">SubLabeledTrackRequest</h2>
<!-- backwards compatibility -->
<a id="schemasublabeledtrackrequest"></a>
<a id="schema_SubLabeledTrackRequest"></a>
<a id="tocSsublabeledtrackrequest"></a>
<a id="tocssublabeledtrackrequest"></a>

```json
{
  "id": 0,
  "label_id": 0,
  "group": 0,
  "source": "manual",
  "frame": 0,
  "attributes": [],
  "shapes": [
    {
      "type": "rectangle",
      "occluded": false,
      "outside": false,
      "z_order": 0,
      "rotation": 0,
      "points": [
        0
      ],
      "attributes": [],
      "id": 0,
      "frame": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|label_id|integer|true|none|none|
|group|integer \| null|false|none|none|
|source|string|false|none|none|
|frame|integer|true|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|
|shapes|[[TrackedShapeRequest](#schematrackedshaperequest)]|true|none|none|

<h2 id="tocS_Sublabel">Sublabel</h2>
<!-- backwards compatibility -->
<a id="schemasublabel"></a>
<a id="schema_Sublabel"></a>
<a id="tocSsublabel"></a>
<a id="tocssublabel"></a>

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "type": {},
  "has_parent": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|true|none|none|
|color|string|false|none|The hex value for the RGB color. Will be generated automatically, unless specified explicitly.|
|attributes|[[Attribute](#schemaattribute)]|false|none|The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.|
|type|object|false|none|Associated annotation type for this label<br><br>* `any` - ANY<br>* `cuboid` - CUBOID<br>* `ellipse` - ELLIPSE<br>* `mask` - MASK<br>* `points` - POINTS<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `rectangle` - RECTANGLE<br>* `skeleton` - SKELETON<br>* `interval` - INTERVAL<br>* `tag` - TAG|
|has_parent|boolean|false|none|none|

<h2 id="tocS_SublabelMappingEntryRequest">SublabelMappingEntryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasublabelmappingentryrequest"></a>
<a id="schema_SublabelMappingEntryRequest"></a>
<a id="tocSsublabelmappingentryrequest"></a>
<a id="tocssublabelmappingentryrequest"></a>

```json
{
  "name": "string",
  "attributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_SublabelRequest">SublabelRequest</h2>
<!-- backwards compatibility -->
<a id="schemasublabelrequest"></a>
<a id="schema_SublabelRequest"></a>
<a id="tocSsublabelrequest"></a>
<a id="tocssublabelrequest"></a>

```json
{
  "id": 0,
  "name": "string",
  "color": "string",
  "attributes": [],
  "type": {},
  "has_parent": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|true|none|none|
|color|string|false|none|The hex value for the RGB color. Will be generated automatically, unless specified explicitly.|
|attributes|[[AttributeRequest](#schemaattributerequest)]|false|none|The list of attributes. To remove an attribute, pass the full attribute body with deleted=true. Related annotation attribute values will be deleted.|
|type|object|false|none|Associated annotation type for this label<br><br>* `any` - ANY<br>* `cuboid` - CUBOID<br>* `ellipse` - ELLIPSE<br>* `mask` - MASK<br>* `points` - POINTS<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `rectangle` - RECTANGLE<br>* `skeleton` - SKELETON<br>* `interval` - INTERVAL<br>* `tag` - TAG|
|has_parent|boolean|false|none|none|

<h2 id="tocS_TaskFileRequest">TaskFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemataskfilerequest"></a>
<a id="schema_TaskFileRequest"></a>
<a id="tocStaskfilerequest"></a>
<a id="tocstaskfilerequest"></a>

```json
{
  "task_file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_file|string(binary)|true|none|none|

<h2 id="tocS_TaskRead">TaskRead</h2>
<!-- backwards compatibility -->
<a id="schemataskread"></a>
<a id="schema_TaskRead"></a>
<a id="tocStaskread"></a>
<a id="tocstaskread"></a>

```json
{
  "url": "http://example.com",
  "id": 0,
  "name": "string",
  "project_id": 0,
  "project_name": "string",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "assignee": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "bug_tracker": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "overlap": 0,
  "segment_size": 0,
  "initial_replicas": 0,
  "status": {},
  "data_chunk_size": 0,
  "data_original_chunk_type": {},
  "data_compressed_chunk_type": {},
  "data_cloud_storage_id": 0,
  "guide_id": 0,
  "size": 0,
  "image_quality": 0,
  "data": 0,
  "dimension": "string",
  "mode": "string",
  "media_type": "string",
  "subset": "string",
  "organization_id": 0,
  "organization": 0,
  "target_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "id": 0,
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "jobs": {
    "count": 0,
    "completed": 0,
    "validation": 0,
    "url": "http://example.com"
  },
  "labels": {
    "url": "http://example.com"
  },
  "assignee_updated_date": "1970-01-01T00:00:00Z",
  "validation_mode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|name|string|false|read-only|none|
|project_id|integer \| null|false|none|none|
|project_name|string \| null|false|read-only|none|
|owner|object \| null|false|none|none|
|assignee|object \| null|false|none|none|
|bug_tracker|string|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|overlap|integer \| null|false|read-only|none|
|segment_size|integer|false|read-only|none|
|initial_replicas|integer|false|read-only|none|
|status|object|false|read-only|none|
|data_chunk_size|integer \| null|false|read-only|none|
|data_original_chunk_type|object|false|read-only|none|
|data_compressed_chunk_type|object|false|read-only|none|
|data_cloud_storage_id|integer \| null|false|read-only|none|
|guide_id|integer \| null|false|none|none|
|size|integer|false|read-only|none|
|image_quality|integer|false|read-only|none|
|data|integer \| null|false|read-only|none|
|dimension|string|false|read-only|none|
|mode|string|false|read-only|none|
|media_type|string|false|read-only|none|
|subset|string|false|read-only|none|
|organization_id|integer \| null|false|read-only|none|
|organization|integer \| null|false|read-only|**Deprecated.**|
|target_storage|object \| null|false|none|none|
|source_storage|object \| null|false|none|none|
|jobs|[JobsSummary](#schemajobssummary)|true|none|none|
|labels|[LabelsSummary](#schemalabelssummary)|true|none|none|
|assignee_updated_date|string(date-time) \| null|false|read-only|none|
|validation_mode|string \| null|false|none|Describes how the task validation is performed. Configured at task creation|

<h2 id="tocS_TaskValidationLayoutRead">TaskValidationLayoutRead</h2>
<!-- backwards compatibility -->
<a id="schemataskvalidationlayoutread"></a>
<a id="schema_TaskValidationLayoutRead"></a>
<a id="tocStaskvalidationlayoutread"></a>
<a id="tocstaskvalidationlayoutread"></a>

```json
{
  "mode": "gt",
  "frames_per_job_count": 0,
  "validation_frames": [
    0
  ],
  "disabled_frames": [
    0
  ],
  "honeypot_count": 0,
  "honeypot_frames": [
    0
  ],
  "honeypot_real_frames": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|[ValidationMode](#schemavalidationmode) \| [NullEnum](#schemanullenum) \| null|false|read-only|none|
|frames_per_job_count|integer \| null|false|read-only|none|
|validation_frames|[integer]|false|none|The list of frame ids to be used for validation<br>|
|disabled_frames|[integer]|false|none|The list of frame ids excluded from validation<br>|
|honeypot_count|integer|false|none|none|
|honeypot_frames|[integer]|false|none|The list of frame ids for all honeypots in the task<br>|
|honeypot_real_frames|[integer]|false|none|The list of real (validation) frame ids for all honeypots in the task<br>|

<h2 id="tocS_TaskWriteRequest">TaskWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemataskwriterequest"></a>
<a id="schema_TaskWriteRequest"></a>
<a id="tocStaskwriterequest"></a>
<a id="tocstaskwriterequest"></a>

```json
{
  "name": "string",
  "project_id": 0,
  "owner_id": 0,
  "assignee_id": 0,
  "bug_tracker": "string",
  "overlap": 0,
  "segment_size": 0,
  "labels": [
    {
      "id": 0,
      "name": "string",
      "color": "string",
      "attributes": [],
      "deleted": true,
      "type": {},
      "svg": "string",
      "sublabels": [
        {
          "id": 0,
          "name": "string",
          "color": "string",
          "attributes": [],
          "type": {},
          "has_parent": true
        }
      ]
    }
  ],
  "subset": "string",
  "target_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "source_storage": {
    "location": "cloud_storage",
    "cloud_storage_id": 0
  },
  "initial_replicas": 0,
  "consensus_replicas": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|project_id|integer \| null|false|none|none|
|owner_id|integer \| null|false|write-only|none|
|assignee_id|integer \| null|false|write-only|none|
|bug_tracker|string|false|none|none|
|overlap|integer \| null|false|none|none|
|segment_size|integer|false|none|none|
|labels|[[PatchedLabelRequest](#schemapatchedlabelrequest)]|false|none|none|
|subset|string|false|none|none|
|target_storage|[StorageRequest](#schemastoragerequest)|false|none|none|
|source_storage|[StorageRequest](#schemastoragerequest)|false|none|none|
|initial_replicas|integer|false|none|The number of replica jobs for each annotation job. Configured at task creation|
|consensus_replicas|integer|false|write-only|**Deprecated.** Deprecated. The number of replica jobs for each annotation job.<br>Use 'initial_replicas' instead<br>|

<h2 id="tocS_TasksSummary">TasksSummary</h2>
<!-- backwards compatibility -->
<a id="schemataskssummary"></a>
<a id="schema_TasksSummary"></a>
<a id="tocStaskssummary"></a>
<a id="tocstaskssummary"></a>

```json
{
  "count": 0,
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|url|string(uri)|false|read-only|none|

<h2 id="tocS_ThresholdPolicyPoint">ThresholdPolicyPoint</h2>
<!-- backwards compatibility -->
<a id="schemathresholdpolicypoint"></a>
<a id="schema_ThresholdPolicyPoint"></a>
<a id="tocSthresholdpolicypoint"></a>
<a id="tocsthresholdpolicypoint"></a>

```json
{
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(double)|true|none|Finite GT shape area in px², strictly greater than zero.|
|y|number(double)|true|none|none|

<h2 id="tocS_ThresholdPolicyPointRequest">ThresholdPolicyPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemathresholdpolicypointrequest"></a>
<a id="schema_ThresholdPolicyPointRequest"></a>
<a id="tocSthresholdpolicypointrequest"></a>
<a id="tocsthresholdpolicypointrequest"></a>

```json
{
  "x": 0,
  "y": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(double)|true|none|Finite GT shape area in px², strictly greater than zero.|
|y|number(double)|true|none|none|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "key": "string"
}
```

Serializer for Token model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|

<h2 id="tocS_TrackedShape">TrackedShape</h2>
<!-- backwards compatibility -->
<a id="schematrackedshape"></a>
<a id="schema_TrackedShape"></a>
<a id="tocStrackedshape"></a>
<a id="tocstrackedshape"></a>

```json
{
  "type": "rectangle",
  "occluded": false,
  "outside": false,
  "z_order": 0,
  "rotation": 0,
  "points": [
    0
  ],
  "attributes": [],
  "id": 0,
  "frame": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ShapeType](#schemashapetype)|true|none|* `rectangle` - RECTANGLE<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `points` - POINTS<br>* `ellipse` - ELLIPSE<br>* `cuboid` - CUBOID<br>* `mask` - MASK<br>* `skeleton` - SKELETON|
|occluded|boolean|false|none|none|
|outside|boolean|false|none|none|
|z_order|integer|false|none|none|
|rotation|number(double)|false|none|none|
|points|[number(double)]|false|none|none|
|attributes|[[AttributeVal](#schemaattributeval)]|false|none|none|
|id|integer \| null|false|none|none|
|frame|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rectangle|
|type|polygon|
|type|polyline|
|type|points|
|type|ellipse|
|type|cuboid|
|type|mask|
|type|skeleton|

<h2 id="tocS_TrackedShapeRequest">TrackedShapeRequest</h2>
<!-- backwards compatibility -->
<a id="schematrackedshaperequest"></a>
<a id="schema_TrackedShapeRequest"></a>
<a id="tocStrackedshaperequest"></a>
<a id="tocstrackedshaperequest"></a>

```json
{
  "type": "rectangle",
  "occluded": false,
  "outside": false,
  "z_order": 0,
  "rotation": 0,
  "points": [
    0
  ],
  "attributes": [],
  "id": 0,
  "frame": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ShapeType](#schemashapetype)|true|none|* `rectangle` - RECTANGLE<br>* `polygon` - POLYGON<br>* `polyline` - POLYLINE<br>* `points` - POINTS<br>* `ellipse` - ELLIPSE<br>* `cuboid` - CUBOID<br>* `mask` - MASK<br>* `skeleton` - SKELETON|
|occluded|boolean|false|none|none|
|outside|boolean|false|none|none|
|z_order|integer|false|none|none|
|rotation|number(double)|false|none|none|
|points|[number(double)]|false|none|none|
|attributes|[[AttributeValRequest](#schemaattributevalrequest)]|false|none|none|
|id|integer \| null|false|none|none|
|frame|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rectangle|
|type|polygon|
|type|polyline|
|type|points|
|type|ellipse|
|type|cuboid|
|type|mask|
|type|skeleton|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "url": "http://example.com",
  "id": 0,
  "username": "string",
  "first_name": "string",
  "last_name": "string",
  "email": "user@example.com",
  "groups": [
    "string"
  ],
  "is_staff": true,
  "is_superuser": true,
  "is_active": true,
  "last_login": "1970-01-01T00:00:00Z",
  "date_joined": "1970-01-01T00:00:00Z",
  "has_analytics_access": true,
  "cvat_usage_reason": "work_project",
  "primary_role": "string",
  "planned_activities": [
    "set_up_projects"
  ],
  "data_types": [
    "string"
  ],
  "discovery_source": "string",
  "email_verified": true,
  "created_via": "registration"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|read-only|none|
|id|integer|false|read-only|none|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|email|string(email)|false|none|none|
|groups|[string]|true|none|none|
|is_staff|boolean|false|none|Designates whether the user can log into this admin site.|
|is_superuser|boolean|false|none|Designates that this user has all permissions without explicitly assigning them.|
|is_active|boolean|false|none|Designates whether this user should be treated as active. Unselect this instead of deleting accounts.|
|last_login|string(date-time) \| null|false|read-only|none|
|date_joined|string(date-time)|false|read-only|none|
|has_analytics_access|boolean \| null|false|read-only|none|
|cvat_usage_reason|[CvatUsageReasonEnum](#schemacvatusagereasonenum) \| [BlankEnum](#schemablankenum)|false|none|The main reason the user uses CVAT.<br><br>* `work_project` - work_project<br>* `academic_research` - academic_research<br>* `teaching_or_coursework` - teaching_or_coursework<br>* `personal_project` - personal_project|
|primary_role|string|false|none|A predefined role code or custom role text.|
|planned_activities|[[PlannedActivitiesEnum](#schemaplannedactivitiesenum)]|false|none|Predefined activity codes selected by the user.|
|data_types|[string]|false|none|Predefined data type codes and optionally one custom value.|
|discovery_source|string|false|none|A predefined discovery source code or custom text.|
|email_verified|boolean \| null|false|read-only|none|
|created_via|[CreatedViaEnum](#schemacreatedviaenum) \| [NullEnum](#schemanullenum) \| null|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|planned_activities|set_up_projects|
|planned_activities|annotate_data|
|planned_activities|review_quality|
|planned_activities|manage_annotators|
|planned_activities|connect_models|
|planned_activities|evaluate_for_organization|

<h2 id="tocS_UserGrowthData">UserGrowthData</h2>
<!-- backwards compatibility -->
<a id="schemausergrowthdata"></a>
<a id="schema_UserGrowthData"></a>
<a id="tocSusergrowthdata"></a>
<a id="tocsusergrowthdata"></a>

```json
{
  "id": 0,
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "github_prompt_shown": true,
  "github_prompt_support_clicked": true,
  "github_prompt_enabled": true,
  "promotion_notifications_allowed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|owner|object|false|read-only|none|
|github_prompt_shown|boolean|false|none|none|
|github_prompt_support_clicked|boolean|false|none|none|
|github_prompt_enabled|boolean|false|read-only|none|
|promotion_notifications_allowed|boolean|false|none|none|

<h2 id="tocS_UserIdentifiers">UserIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemauseridentifiers"></a>
<a id="schema_UserIdentifiers"></a>
<a id="tocSuseridentifiers"></a>
<a id="tocsuseridentifiers"></a>

```json
{
  "id": 0,
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|username|string|true|none|Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.|

<h2 id="tocS_ValidationMode">ValidationMode</h2>
<!-- backwards compatibility -->
<a id="schemavalidationmode"></a>
<a id="schema_ValidationMode"></a>
<a id="tocSvalidationmode"></a>
<a id="tocsvalidationmode"></a>

```json
"gt"
```

* `gt` - GT
* `gt_pool` - GT_POOL

<h2 id="tocS_ValidationParamsRequest">ValidationParamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidationparamsrequest"></a>
<a id="schema_ValidationParamsRequest"></a>
<a id="tocSvalidationparamsrequest"></a>
<a id="tocsvalidationparamsrequest"></a>

```json
{
  "mode": "gt",
  "frame_selection_method": "random_uniform",
  "random_seed": 0,
  "frames": [
    "string"
  ],
  "frame_count": 1,
  "frame_share": 0,
  "frames_per_job_count": 1,
  "frames_per_job_share": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|[ValidationMode](#schemavalidationmode)|true|none|* `gt` - GT<br>* `gt_pool` - GT_POOL|
|frame_selection_method|[FrameSelectionMethod](#schemaframeselectionmethod)|false|none|* `random_uniform` - RANDOM_UNIFORM<br>* `random_per_job` - RANDOM_PER_JOB<br>* `manual` - MANUAL|
|random_seed|integer|false|none|The seed value for the random number generator.<br>The same value will produce the same frame sets.<br>Applicable only to random frame selection methods.<br>By default, a random value is used.<br>|
|frames|[string]|false|write-only|The list of file names to be included in the validation set.<br>Applicable only to the "manual" frame selection method.<br>Can only be used for images.<br>|
|frame_count|integer|false|none|The number of frames to be included in the validation set.<br>Applicable only to the "random_uniform" frame selection method<br>|
|frame_share|number(double)|false|none|The share of frames to be included in the validation set.<br>Applicable only to the "random_uniform" frame selection method<br>|
|frames_per_job_count|integer|false|none|The number of frames to be included in the validation set from each annotation job.<br>Applicable only to the "random_per_job" frame selection method<br>|
|frames_per_job_share|number(double)|false|none|The share of frames to be included in the validation set from each annotation job.<br>Applicable only to the "random_per_job" frame selection method<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|gt|
|mode|gt_pool|
|frame_selection_method|random_uniform|
|frame_selection_method|random_per_job|
|frame_selection_method|manual|

<h2 id="tocS_WebhookContentType">WebhookContentType</h2>
<!-- backwards compatibility -->
<a id="schemawebhookcontenttype"></a>
<a id="schema_WebhookContentType"></a>
<a id="tocSwebhookcontenttype"></a>
<a id="tocswebhookcontenttype"></a>

```json
"application/json"
```

* `application/json` - JSON

<h2 id="tocS_WebhookDeliveryRead">WebhookDeliveryRead</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliveryread"></a>
<a id="schema_WebhookDeliveryRead"></a>
<a id="tocSwebhookdeliveryread"></a>
<a id="tocswebhookdeliveryread"></a>

```json
{
  "id": 0,
  "webhook_id": 0,
  "event": "string",
  "status_code": 0,
  "redelivery": true,
  "attempt": 0,
  "request_duration": 0,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "changed_fields": "string",
  "request": null,
  "response": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|webhook_id|integer|false|read-only|none|
|event|string|false|read-only|none|
|status_code|integer \| null|false|read-only|none|
|redelivery|boolean|false|read-only|none|
|attempt|integer \| null|false|read-only|none|
|request_duration|integer \| null|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|changed_fields|string|false|read-only|**Deprecated.**|
|request|object|false|read-only|none|
|response|object|false|read-only|none|

<h2 id="tocS_WebhookRead">WebhookRead</h2>
<!-- backwards compatibility -->
<a id="schemawebhookread"></a>
<a id="schema_WebhookRead"></a>
<a id="tocSwebhookread"></a>
<a id="tocswebhookread"></a>

```json
{
  "id": 0,
  "url": "http://example.com",
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "is_active": true,
  "enable_ssl": true,
  "created_date": "1970-01-01T00:00:00Z",
  "updated_date": "1970-01-01T00:00:00Z",
  "owner": {
    "url": "http://example.com",
    "id": 0,
    "username": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "project_id": 0,
  "organization": 0,
  "events": [
    "completed:request[calculate:quality]"
  ],
  "last_status": 0,
  "last_delivery_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|read-only|none|
|url|string(uri)|false|read-only|none|
|target_url|string(uri)|false|read-only|none|
|description|string|false|read-only|none|
|type|[WebhookType](#schemawebhooktype)|true|none|* `organization` - ORGANIZATION<br>* `project` - PROJECT<br>* `server` - SERVER|
|content_type|[WebhookContentType](#schemawebhookcontenttype)|true|none|* `application/json` - JSON|
|is_active|boolean|false|read-only|none|
|enable_ssl|boolean|false|read-only|none|
|created_date|string(date-time)|false|read-only|none|
|updated_date|string(date-time)|false|read-only|none|
|owner|object \| null|false|read-only|none|
|project_id|integer \| null|false|none|none|
|organization|integer \| null|false|read-only|none|
|events|[[EventsEnum](#schemaeventsenum)]|false|read-only|none|
|last_status|integer|false|read-only|none|
|last_delivery_date|string(date-time)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|organization|
|type|project|
|type|server|
|content_type|application/json|
|events|completed:request[calculate:quality]|
|events|completed:request[create:task]|
|events|completed:request[export:annotations]|
|events|completed:request[export:backup]|
|events|completed:request[export:dataset]|
|events|completed:request[merge:job]|
|events|completed:request[merge:task]|
|events|create:comment|
|events|create:invitation|
|events|create:issue|
|events|create:job|
|events|create:membership|
|events|create:organization|
|events|create:project|
|events|create:task|
|events|create:user|
|events|delete:comment|
|events|delete:invitation|
|events|delete:issue|
|events|delete:job|
|events|delete:membership|
|events|delete:organization|
|events|delete:project|
|events|delete:task|
|events|delete:user|
|events|update:comment|
|events|update:issue|
|events|update:job|
|events|update:membership|
|events|update:organization|
|events|update:project|
|events|update:task|
|events|update:user|

<h2 id="tocS_WebhookType">WebhookType</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktype"></a>
<a id="schema_WebhookType"></a>
<a id="tocSwebhooktype"></a>
<a id="tocswebhooktype"></a>

```json
"organization"
```

* `organization` - ORGANIZATION
* `project` - PROJECT
* `server` - SERVER

<h2 id="tocS_WebhookWriteRequest">WebhookWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemawebhookwriterequest"></a>
<a id="schema_WebhookWriteRequest"></a>
<a id="tocSwebhookwriterequest"></a>
<a id="tocswebhookwriterequest"></a>

```json
{
  "target_url": "http://example.com",
  "description": "string",
  "type": "organization",
  "content_type": "application/json",
  "secret": "string",
  "is_active": true,
  "enable_ssl": true,
  "project_id": 0,
  "events": [
    "completed:request[calculate:quality]"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_url|string(uri)|true|none|none|
|description|string|false|none|none|
|type|[WebhookType](#schemawebhooktype)|true|none|* `organization` - ORGANIZATION<br>* `project` - PROJECT<br>* `server` - SERVER|
|content_type|[WebhookContentType](#schemawebhookcontenttype)|false|none|* `application/json` - JSON|
|secret|string|false|none|none|
|is_active|boolean|false|none|none|
|enable_ssl|boolean|false|none|none|
|project_id|integer \| null|false|write-only|none|
|events|[[EventsEnum](#schemaeventsenum)]|true|write-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|organization|
|type|project|
|type|server|
|content_type|application/json|
|events|completed:request[calculate:quality]|
|events|completed:request[create:task]|
|events|completed:request[export:annotations]|
|events|completed:request[export:backup]|
|events|completed:request[export:dataset]|
|events|completed:request[merge:job]|
|events|completed:request[merge:task]|
|events|create:comment|
|events|create:invitation|
|events|create:issue|
|events|create:job|
|events|create:membership|
|events|create:organization|
|events|create:project|
|events|create:task|
|events|create:user|
|events|delete:comment|
|events|delete:invitation|
|events|delete:issue|
|events|delete:job|
|events|delete:membership|
|events|delete:organization|
|events|delete:project|
|events|delete:task|
|events|delete:user|
|events|update:comment|
|events|update:issue|
|events|update:job|
|events|update:membership|
|events|update:organization|
|events|update:project|
|events|update:task|
|events|update:user|

<h2 id="tocS_WebhooksEvent">WebhooksEvent</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksevent"></a>
<a id="schema_WebhooksEvent"></a>
<a id="tocSwebhooksevent"></a>
<a id="tocswebhooksevent"></a>

```json
{
  "key": "string",
  "group": {
    "display_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|read-only|none|
|group|object|false|read-only|none|
