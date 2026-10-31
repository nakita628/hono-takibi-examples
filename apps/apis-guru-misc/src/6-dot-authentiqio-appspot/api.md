<h1 id="authentiq-api">Authentiq API v6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Strong authentication, without the passwords.

Base URLs:

* <a href="https://6-dot-authentiqio.appspot.com">https://6-dot-authentiqio.appspot.com</a>

<a href="http://authentiq.com/terms/">Terms of service</a>
Email: <a href="mailto:hello@authentiq.com">Authentiq team</a> 
Web: <a href="http://authentiq.io/support">Authentiq team</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="authentiq-api-key">key</h1>

## key_register

<a id="opIdkey_register"></a>

> Code samples

```bash
curl https://example.com/key \
  -X POST \
  -H 'Content-Type: application/jwt' \
  -H 'Accept: application/json' \
  -d '{"devtoken":"string","sub":"string"}'
```

`POST /key`

Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


> Body parameter

```json
{
  "devtoken": "string",
  "sub": "string"
}
```

<h3 id="keyregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AuthentiqID](#schemaauthentiqid)|true|Authentiq ID to register|
|» devtoken|body|string|false|device token for push messages|
|» sub|body|string|true|UUID and public signing key|

> Example responses

> 201 Response

```json
{
  "secret": "string",
  "status": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="keyregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully registered|Inline|
|409|Conflict|Key already registered `duplicate-key`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="keyregister-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|false|none|revoke key|
|status|string|false|none|registered|

<aside class="success">
This operation does not require authentication
</aside>

## key_revoke_nosecret

<a id="opIdkey_revoke_nosecret"></a>

> Code samples

```bash
curl 'https://example.com/key?email=string&phone=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /key`

Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.


<h3 id="keyrevokenosecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|primary email associated to Key (ID)|
|phone|query|string|true|primary phone number, international representation|
|code|query|string|false|verification code sent by email|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="keyrevokenosecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|Inline|
|401|Unauthorized|Authentication error `auth-error`|[Error](#schemaerror)|
|404|Not Found|Unknown key `unknown-key`|[Error](#schemaerror)|
|409|Conflict|Confirm with code sent `confirm-first`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="keyrevokenosecret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|pending or done|

<aside class="success">
This operation does not require authentication
</aside>

## key_retrieve

<a id="opIdkey_retrieve"></a>

> Code samples

```bash
curl https://example.com/key/string \
  -H 'Accept: application/json'
```

`GET /key/{PK}`

Get public details of an Authentiq ID.


<h3 id="keyretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PK|path|string|true|Public Signing Key - Authentiq ID (43 chars)|

> Example responses

> 200 Response

```json
{
  "since": "1970-01-01T00:00:00Z",
  "status": "string",
  "sub": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 410 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="keyretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|404|Not Found|Unknown key `unknown-key`|[Error](#schemaerror)|
|410|Gone|Key is revoked (gone). `revoked-key`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="keyretrieve-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|since|string(date-time)|false|none|none|
|status|string|false|none|none|
|sub|string|false|none|base64safe encoded public signing key|

<aside class="success">
This operation does not require authentication
</aside>

## key_bind

<a id="opIdkey_bind"></a>

> Code samples

```bash
curl https://example.com/key/string \
  -X PUT \
  -H 'Content-Type: application/jwt' \
  -H 'Accept: application/json' \
  -d '{"devtoken":"string","sub":"string"}'
```

`PUT /key/{PK}`

Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


> Body parameter

```json
{
  "devtoken": "string",
  "sub": "string"
}
```

<h3 id="keybind-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PK|path|string|true|Public Signing Key - Authentiq ID (43 chars)|
|body|body|[AuthentiqID](#schemaauthentiqid)|true|Authentiq ID to register|
|» devtoken|body|string|false|device token for push messages|
|» sub|body|string|true|UUID and public signing key|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 409 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="keybind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated|Inline|
|404|Not Found|Unknown key `unknown-key`|[Error](#schemaerror)|
|409|Conflict|Already bound to another key `duplicate-hash`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="keybind-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|confirmed|

<aside class="success">
This operation does not require authentication
</aside>

## key_update

<a id="opIdkey_update"></a>

> Code samples

```bash
curl https://example.com/key/string \
  -X POST \
  -H 'Content-Type: application/jwt' \
  -H 'Accept: application/json' \
  -d '{"devtoken":"string","sub":"string"}'
```

`POST /key/{PK}`

update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


> Body parameter

```json
{
  "devtoken": "string",
  "sub": "string"
}
```

<h3 id="keyupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PK|path|string|true|Public Signing Key - Authentiq ID (43 chars)|
|body|body|[AuthentiqID](#schemaauthentiqid)|true|Authentiq ID to register|
|» devtoken|body|string|false|device token for push messages|
|» sub|body|string|true|UUID and public signing key|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="keyupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated|Inline|
|404|Not Found|Unknown key `unknown-key`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="keyupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|confirmed|

<aside class="success">
This operation does not require authentication
</aside>

## key_revoke

<a id="opIdkey_revoke"></a>

> Code samples

```bash
curl 'https://example.com/key/string?secret=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /key/{PK}`

Revoke an Identity (Key) with a revocation secret

<h3 id="keyrevoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PK|path|string|true|Public Signing Key - Authentiq ID (43 chars)|
|secret|query|string|true|revokation secret|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="keyrevoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|Key not found / wrong code `auth-error`|[Error](#schemaerror)|
|404|Not Found|Unknown key `unknown-key`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="keyrevoke-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|done|

<aside class="success">
This operation does not require authentication
</aside>

## head/key/{PK}

> Code samples

```bash
curl https://example.com/key/string \
  -X HEAD
```

`HEAD /key/{PK}`

HEAD info on Authentiq ID


<h3 id="headkeypk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PK|path|string|true|Public Signing Key - Authentiq ID (43 chars)|

<h3 id="headkeypk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key exists|None|
|404|Not Found|Unknown key `unknown-key`|[Error](#schemaerror)|
|410|Gone|Key is revoked `revoked-key`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="authentiq-api-login">login</h1>

## push_login_request

<a id="opIdpush_login_request"></a>

> Code samples

```bash
curl 'https://example.com/login?callback=string' \
  -X POST \
  -H 'Content-Type: application/jwt' \
  -H 'Accept: application/json' \
  -d '{"aud":"string","exp":0,"iat":0,"iss":"string","nbf":0,"sub":"string"}'
```

`POST /login`

push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


> Body parameter

```json
{
  "aud": "string",
  "exp": 0,
  "iat": 0,
  "iss": "string",
  "nbf": 0,
  "sub": "string"
}
```

<h3 id="pushloginrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string|true|URI App will connect to|
|body|body|[PushToken](#schemapushtoken)|true|Push Token.|
|» aud|body|string|true|audience (URI)|
|» exp|body|integer|false|none|
|» iat|body|integer|false|none|
|» iss|body|string|true|issuer (URI)|
|» nbf|body|integer|false|none|
|» sub|body|string|true|UUID and public signing key|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="pushloginrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|Unauthorized for this callback audience `aud-error` or JWT should be self-signed `auth-error`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="pushloginrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|sent|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="authentiq-api-scope">scope</h1>

## sign_request

<a id="opIdsign_request"></a>

> Code samples

```bash
curl https://example.com/scope \
  -X POST \
  -H 'Content-Type: application/jwt' \
  -H 'Accept: application/json' \
  -d '{"email":"string","phone":"string","scope":"string","sub":"string","type":"string"}'
```

`POST /scope`

scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


> Body parameter

```json
{
  "email": "string",
  "phone": "string",
  "scope": "string",
  "sub": "string",
  "type": "string"
}
```

<h3 id="signrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|test|query|integer|false|test only mode, using test issuer|
|body|body|[Claims](#schemaclaims)|true|Claims of scope|
|» email|body|string|false|none|
|» phone|body|string|false|none|
|» scope|body|string|true|claim scope|
|» sub|body|string|true|UUID|
|» type|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "job": "string",
  "status": "string"
}
```

> 429 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="signrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response|Inline|
|429|Too Many Requests|Too Many Requests on same address / number `rate-limit`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="signrequest-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|string|false|none|20-character ID|
|status|string|false|none|waiting|

<aside class="success">
This operation does not require authentication
</aside>

## sign_retrieve

<a id="opIdsign_retrieve"></a>

> Code samples

```bash
curl https://example.com/scope/string \
  -H 'Accept: application/json'
```

`GET /scope/{job}`

get the status / current content of a verification job

<h3 id="signretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job|path|string|true|Job ID (20 chars)|

> Example responses

> 200 Response

```json
{
  "exp": 0,
  "field": "string",
  "sub": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="signretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response (JWT)|Inline|
|204|No Content|Confirmed, waiting for signing|None|
|404|Not Found|Job not found `unknown-job`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="signretrieve-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exp|integer|false|none|none|
|field|string|false|none|none|
|sub|string|false|none|base64safe encoded public signing key|

<aside class="success">
This operation does not require authentication
</aside>

## sign_update

<a id="opIdsign_update"></a>

> Code samples

```bash
curl https://example.com/scope/string \
  -X PUT
```

`PUT /scope/{job}`

authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


<h3 id="signupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job|path|string|true|Job ID (20 chars)|

<h3 id="signupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated|Inline|
|404|Not Found|Job not found `unknown-job`|[Error](#schemaerror)|
|409|Conflict|Job not confirmed yet `confirm-first`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="signupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwt|string|false|none|result is JWT or JSON??|
|status|string|false|none|ready|

<aside class="success">
This operation does not require authentication
</aside>

## sign_confirm

<a id="opIdsign_confirm"></a>

> Code samples

```bash
curl https://example.com/scope/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /scope/{job}`

this is a scope confirmation

<h3 id="signconfirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job|path|string|true|Job ID (20 chars)|

> Example responses

> 202 Response

```json
{
  "status": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

> 405 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="signconfirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully confirmed|Inline|
|401|Unauthorized|Confirmation error `auth-error`|[Error](#schemaerror)|
|404|Not Found|Job not found `unknown-job`|[Error](#schemaerror)|
|405|Method Not Allowed|JWT POSTed to scope `not-supported`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="signconfirm-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|confirmed|

<aside class="success">
This operation does not require authentication
</aside>

## sign_delete

<a id="opIdsign_delete"></a>

> Code samples

```bash
curl https://example.com/scope/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /scope/{job}`

delete a verification job

<h3 id="signdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job|path|string|true|Job ID (20 chars)|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="signdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|Inline|
|404|Not Found|Job not found `unknown-job`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<h3 id="signdelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|done|

<aside class="success">
This operation does not require authentication
</aside>

## sign_retrieve_head

<a id="opIdsign_retrieve_head"></a>

> Code samples

```bash
curl https://example.com/scope/string \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /scope/{job}`

HEAD to get the status of a verification job

<h3 id="signretrievehead-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job|path|string|true|Job ID (20 chars)|

> Example responses

> 404 Response

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="signretrievehead-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Confirmed and signed|None|
|204|No Content|Confirmed, waiting for signing|None|
|404|Not Found|Job not found `unknown-job`|[Error](#schemaerror)|
|default|Default|Error response|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AuthentiqID">AuthentiqID</h2>
<!-- backwards compatibility -->
<a id="schemaauthentiqid"></a>
<a id="schema_AuthentiqID"></a>
<a id="tocSauthentiqid"></a>
<a id="tocsauthentiqid"></a>

```json
{
  "devtoken": "string",
  "sub": "string"
}
```

Authentiq ID in JWT format, self-signed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devtoken|string|false|none|device token for push messages|
|sub|string|true|none|UUID and public signing key|

<h2 id="tocS_Claims">Claims</h2>
<!-- backwards compatibility -->
<a id="schemaclaims"></a>
<a id="schema_Claims"></a>
<a id="tocSclaims"></a>
<a id="tocsclaims"></a>

```json
{
  "email": "string",
  "phone": "string",
  "scope": "string",
  "sub": "string",
  "type": "string"
}
```

Claim in JWT format, self- or issuer-signed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|phone|string|false|none|none|
|scope|string|true|none|claim scope|
|sub|string|true|none|UUID|
|type|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "detail": "string",
  "error": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|error|integer|true|none|none|
|title|string|false|none|none|
|type|string|false|none|unique uri for this error|

<h2 id="tocS_PushToken">PushToken</h2>
<!-- backwards compatibility -->
<a id="schemapushtoken"></a>
<a id="schema_PushToken"></a>
<a id="tocSpushtoken"></a>
<a id="tocspushtoken"></a>

```json
{
  "aud": "string",
  "exp": 0,
  "iat": 0,
  "iss": "string",
  "nbf": 0,
  "sub": "string"
}
```

PushToken in JWT format, self-signed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aud|string|true|none|audience (URI)|
|exp|integer|false|none|none|
|iat|integer|false|none|none|
|iss|string|true|none|issuer (URI)|
|nbf|integer|false|none|none|
|sub|string|true|none|UUID and public signing key|
