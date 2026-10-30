<h1 id="supabase-auth-rest-api">Supabase Auth REST API vlatest</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the REST API for [Supabase Auth](https://supabase.com/auth). Visit https://supabase.com/docs/guides/auth for complete documentation.

**Notes:**
- HTTP 5XX errors are not listed for each endpoint.
  These should be handled globally. Not all HTTP 5XX errors are generated from Auth, and they may serve non-JSON content. Make sure you inspect the `Content-Type` header before parsing as JSON.
- Error responses are somewhat inconsistent.
  Avoid using the `msg` and HTTP status code to identify errors. HTTP 400 and 422 are used interchangeably in many APIs.
- If the server has CAPTCHA protection enabled, the verification token should be included in the request body.
- Rate limit errors are consistently raised with the HTTP 429 code.
- Enums are used only in request bodies / parameters and not in responses to ensure wide compatibility with code generators that fail to include an unknown enum case.

**OAuth Support:**
- This service supports two OAuth modes:
  - **OAuth Client**: Endpoints tagged `oauth-client` are used when this service connects to external OAuth providers (like Google, GitHub)
  - **OAuth Server**: Endpoints tagged `oauth-server` are used when this service acts as an OAuth provider for other applications

**Backward compatibility:**
- Endpoints marked as _Experimental_ may change without notice.
- Endpoints marked as _Deprecated_ will be supported for at least 3 months since being marked as deprecated.
- HTTP status codes like 400, 404, 422 may change for the same underlying error condition.

Base URLs:

* <a href="https://abcdefghijklmnopqrst.supabase.co/auth/v1">https://abcdefghijklmnopqrst.supabase.co/auth/v1</a>

<a href="https://supabase.com/terms">Terms of service</a>
Web: <a href="https://github.com/supabase/supabase/discussions">Ask a question about this API</a> 
License: <a href="https://github.com/supabase/auth/blob/master/LICENSE">MIT License</a>

<a href="https://supabase.com/docs/guides/auth/overview">Learn more about Supabase Auth</a>

# Authentication

- HTTP Authentication, scheme: bearer An access token in the form of a JWT issued by this server.

- HTTP Authentication, scheme: bearer A special admin JWT.

* API Key (APIKeyAuth)
    - Parameter Name: **apikey**, in: header. When deployed on Supabase, this server requires an `apikey` header containing a valid Supabase-issued API key to call any endpoint.

<h1 id="supabase-auth-rest-api-auth">auth</h1>

APIs for authentication and authorization.

## Issues access and refresh tokens based on grant type.

> Code samples

```bash
curl 'http://localhost:9999/token?grant_type=password' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "password": "password1"
  }'
```

`POST /token`

> Body parameter

```json
{
  "email": "user@example.com",
  "password": "password1"
}
```

<h3 id="issues-access-and-refresh-tokens-based-on-grant-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grant_type|query|string|true|- What grant type should be used to issue an access and refresh token. Note: `id_token` is only offered in experimental mode. <br>- CAPTCHA protection does not apply on the `refresh_token` grant flow.<br>- Using `password` is akin to a user signing in. <br>- `pkce` is used for exchanging the authorization code for a pair of access and refresh tokens.<br>|
|body|body|object|false|none|
|» refresh_token|body|string|false|none|
|» password|body|string|false|none|
|» email|body|string(email)|false|none|
|» phone|body|string(phone)|false|none|
|» id_token|body|string|false|none|
|» access_token|body|string|false|Provide only when `grant_type` is `id_token` and the provided ID token requires the presence of an access token to be accepted (usually by having an `at_hash` claim).|
|» nonce|body|string|false|none|
|» provider|body|string|false|none|
|» client_id|body|string|false|none|
|» issuer|body|string|false|If `provider` is `azure` then you can specify any Azure OIDC issuer string here, which will be used for verification.|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|
|» auth_code|body|string(uuid)|false|none|
|» code_verifier|body|string|false|none|
|» message|body|string|false|Signed message for Web3 authentication following the Sign in with Solana (SIWS) or Sign in with Ethereum (SIWE) standard. Must include: `Issued At`, `URI`, `Version`.<br>|
|» signature|body|string|false|The signature of the message for Web3 authentication. <br>For Solana: Base64 or Base64-URL encoded. <br>For Ethereum: hexadecimal string with 0x prefix.<br>|
|» chain|body|string|false|What blockchain is the Web3 message and signature for.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|grant_type|password|
|grant_type|refresh_token|
|grant_type|id_token|
|grant_type|pkce|
|grant_type|web3|
|» provider|google|
|» provider|apple|
|» provider|azure|
|» provider|facebook|
|» provider|keycloak|
|» chain|solana|
|» chain|ethereum|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "expires_at": 0,
  "weak_password": {
    "reasons": [
      "length"
    ],
    "message": "string"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="issues-access-and-refresh-tokens-based-on-grant-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An access and refresh token have been successfully issued.<br>|[AccessTokenResponseSchema](#schemaaccesstokenresponseschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|
|500|Internal Server Error|HTTP Internal Server Error.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="issues-access-and-refresh-tokens-based-on-grant-type-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Logs out a user.

> Code samples

```bash
curl http://localhost:9999/logout \
  -X POST \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /logout`

<h3 id="logs-out-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|(Optional.) Determines how the user should be logged out. When `global` is used, the user is logged out from all active sessions. When `local` is used, the user is logged out from the current session. When `others` is used, the user is logged out from all other sessions except the current one. Clients should remove stored access and refresh tokens except when `others` is used.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|global|
|scope|local|
|scope|others|

> Example responses

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="logs-out-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful logout.|None|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Authenticate by verifying the possession of a one-time token. Usually for use as clickable links.

> Code samples

```bash
curl 'http://localhost:9999/verify?token=string&type=signup' \
  -H "apikey: ${API_KEY}"
```

`GET /verify`

<h3 id="authenticate-by-verifying-the-possession-of-a-one-time-token-usually-for-use-as-clickable-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|type|query|string|true|none|
|redirect_to|query|string(uri)|false|(Optional) URL to redirect back into the app on after verification completes successfully. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|signup|
|type|invite|
|type|recovery|
|type|magiclink|
|type|email_change|

<h3 id="authenticate-by-verifying-the-possession-of-a-one-time-token-usually-for-use-as-clickable-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|HTTP See Other redirect response where `Location` is a specially formatted URL that includes an `access_token`, `refresh_token`, `expires_in` as URL query encoded values in the URL fragment (anything after `#`). These values are encoded in the fragment as this value is only visible to the browser handling the redirect and is not sent to the server.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Authenticate by verifying the possession of a one-time token.

> Code samples

```bash
curl http://localhost:9999/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "type": "signup",
    "token": "string",
    "token_hash": "string",
    "email": "user@example.com",
    "phone": "string",
    "redirect_to": "http://example.com"
  }'
```

`POST /verify`

> Body parameter

```json
{
  "type": "signup",
  "token": "string",
  "token_hash": "string",
  "email": "user@example.com",
  "phone": "string",
  "redirect_to": "http://example.com"
}
```

<h3 id="authenticate-by-verifying-the-possession-of-a-one-time-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» type|body|string|false|none|
|» token|body|string|false|none|
|» token_hash|body|string|false|The hashed value of token. Applicable only if used with `type` and nothing else.<br>|
|» email|body|string(email)|false|Applicable only if `type` is with regards to an email address.<br>|
|» phone|body|string(phone)|false|Applicable only if `type` is with regards to an phone number.<br>|
|» redirect_to|body|string(uri)|false|(Optional) URL to redirect back into the app on after verification completes successfully. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|signup|
|» type|recovery|
|» type|invite|
|» type|magiclink|
|» type|email_change|
|» type|sms|
|» type|phone_change|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "expires_at": 0,
  "weak_password": {
    "reasons": [
      "length"
    ],
    "message": "string"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="authenticate-by-verifying-the-possession-of-a-one-time-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An access and refresh token.|[AccessTokenResponseSchema](#schemaaccesstokenresponseschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="authenticate-by-verifying-the-possession-of-a-one-time-token-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Signs a user up.

> Code samples

```bash
curl http://localhost:9999/signup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "password": "password1"
  }'
```

`POST /signup`

Creates a new user.


> Body parameter

```json
{
  "email": "user@example.com",
  "password": "password1"
}
```

<h3 id="signs-a-user-up-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|false|none|
|» phone|body|string(phone)|false|none|
|» channel|body|string|false|none|
|» password|body|string|false|none|
|» data|body|object|false|none|
|» code_challenge|body|string|false|none|
|» code_challenge_method|body|string|false|none|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|sms|
|» channel|whatsapp|
|» code_challenge_method|plain|
|» code_challenge_method|s256|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "expires_at": 0,
  "weak_password": {
    "reasons": [
      "length"
    ],
    "message": "string"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="signs-a-user-up-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A user already exists and is not confirmed (in which case a user object is returned). A user did not exist and is signed up. If email or phone confirmation is enabled, returns a user object. If confirmation is disabled, returns an access token and refresh token response.<br>|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="signs-a-user-up-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AccessTokenResponseSchema](#schemaaccesstokenresponseschema)|false|none|none|
|*oneOf*|[UserSchema](#schemauserschema)|false|none|Object describing the user related to the issued access and refresh tokens.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Request password recovery.

> Code samples

```bash
curl http://localhost:9999/recover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "code_challenge": "string",
    "code_challenge_method": "plain",
    "gotrue_meta_security": {
      "captcha_token": "string"
    }
  }'
```

`POST /recover`

Users that have forgotten their password can have it reset with this API.


> Body parameter

```json
{
  "email": "user@example.com",
  "code_challenge": "string",
  "code_challenge_method": "plain",
  "gotrue_meta_security": {
    "captcha_token": "string"
  }
}
```

<h3 id="request-password-recovery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|true|none|
|» code_challenge|body|string|false|none|
|» code_challenge_method|body|string|false|none|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» code_challenge_method|plain|
|» code_challenge_method|s256|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="request-password-recovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A recovery email has been sent to the address. An empty JSON object is returned. To obfuscate whether such an email address already exists in the system this response is sent regardless whether the address exists or not.|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Returned when unable to validate the email address.|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="request-password-recovery-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Resends a one-time password (OTP) through email or SMS.

> Code samples

```bash
curl http://localhost:9999/resend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "phone": "string",
    "type": "signup",
    "gotrue_meta_security": {
      "captcha_token": "string"
    }
  }'
```

`POST /resend`

Allows a user to resend an existing signup, sms, email_change or phone_change OTP.


> Body parameter

```json
{
  "email": "user@example.com",
  "phone": "string",
  "type": "signup",
  "gotrue_meta_security": {
    "captcha_token": "string"
  }
}
```

<h3 id="resends-a-one-time-password-otp-through-email-or-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|false|Applicable only if `type` is with regards to an email address.<br>|
|» phone|body|string(phone)|false|Applicable only if `type` is with regards to an phone number.<br>|
|» type|body|string|false|none|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|signup|
|» type|email_change|
|» type|sms|
|» type|phone_change|

> Example responses

> 200 Response

```json
{
  "message_id": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="resends-a-one-time-password-otp-through-email-or-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A One-Time Password was sent to the email or phone. To obfuscate whether such an address or number already exists in the system this response is sent in both cases.|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Returned when unable to validate the email address or phone number.|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="resends-a-one-time-password-otp-through-email-or-sms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|string|false|none|Unique ID of the message as reported by the SMS sending provider. Useful for tracking deliverability problems.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Authenticate a user by sending them a magic link.

> Code samples

```bash
curl http://localhost:9999/magiclink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "data": {},
    "gotrue_meta_security": {
      "captcha_token": "string"
    }
  }'
```

`POST /magiclink`

A magic link is a special type of URL that includes a One-Time Password. When a user visits this link in a browser they are immediately authenticated.


> Body parameter

```json
{
  "email": "user@example.com",
  "data": {},
  "gotrue_meta_security": {
    "captcha_token": "string"
  }
}
```

<h3 id="authenticate-a-user-by-sending-them-a-magic-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|true|none|
|» data|body|object|false|none|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="authenticate-a-user-by-sending-them-a-magic-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A recovery email has been sent to the address. An empty JSON object is returned. To obfuscate whether such an email address already exists in the system this response is sent regardless whether the address exists or not.|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Returned when unable to validate the email address.|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="authenticate-a-user-by-sending-them-a-magic-link-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Authenticate a user by sending them a One-Time Password over email or SMS.

> Code samples

```bash
curl http://localhost:9999/otp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "user@example.com",
    "phone": "string",
    "channel": "sms",
    "create_user": true,
    "data": {},
    "code_challenge_method": "s256",
    "code_challenge": "string",
    "gotrue_meta_security": {
      "captcha_token": "string"
    }
  }'
```

`POST /otp`

> Body parameter

```json
{
  "email": "user@example.com",
  "phone": "string",
  "channel": "sms",
  "create_user": true,
  "data": {},
  "code_challenge_method": "s256",
  "code_challenge": "string",
  "gotrue_meta_security": {
    "captcha_token": "string"
  }
}
```

<h3 id="authenticate-a-user-by-sending-them-a-one-time-password-over-email-or-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|false|none|
|» phone|body|string(phone)|false|none|
|» channel|body|string|false|none|
|» create_user|body|boolean|false|none|
|» data|body|object|false|none|
|» code_challenge_method|body|string|false|none|
|» code_challenge|body|string|false|none|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|sms|
|» channel|whatsapp|
|» code_challenge_method|s256|
|» code_challenge_method|plain|

> Example responses

> 200 Response

```json
{
  "message_id": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="authenticate-a-user-by-sending-them-a-one-time-password-over-email-or-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A One-Time Password was sent to the email or phone. To obfuscate whether such an address or number already exists in the system this response is sent in both cases.|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Returned when unable to validate the email or phone number.|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="authenticate-a-user-by-sending-them-a-one-time-password-over-email-or-sms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|string|false|none|Unique ID of the message as reported by the SMS sending provider. Useful for tracking deliverability problems.|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

<h1 id="supabase-auth-rest-api-user">user</h1>

APIs used by a user to manage their account.

## Fetch the latest user account information.

> Code samples

```bash
curl http://localhost:9999/user \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user`

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

<h3 id="fetch-the-latest-user-account-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's account information.|[UserSchema](#schemauserschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Update certain properties of the current user account.

> Code samples

```bash
curl http://localhost:9999/user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "user@example.com",
    "phone": "string",
    "password": "string",
    "nonce": "string",
    "data": {},
    "app_metadata": {},
    "channel": "sms"
  }'
```

`PUT /user`

> Body parameter

```json
{
  "email": "user@example.com",
  "phone": "string",
  "password": "string",
  "nonce": "string",
  "data": {},
  "app_metadata": {},
  "channel": "sms"
}
```

<h3 id="update-certain-properties-of-the-current-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string(email)|false|none|
|» phone|body|string(phone)|false|none|
|» password|body|string|false|none|
|» nonce|body|string|false|none|
|» data|body|object|false|none|
|» app_metadata|body|object|false|none|
|» channel|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|sms|
|» channel|whatsapp|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="update-certain-properties-of-the-current-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's updated account information.|[UserSchema](#schemauserschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="update-certain-properties-of-the-current-user-account-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Links an OAuth identity to an existing user. Redirects to an external OAuth provider.

> Code samples

```bash
curl 'http://localhost:9999/user/identities/authorize?provider=google&scopes=string' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user/identities/authorize`

<h3 id="links-an-oauth-identity-to-an-existing-user-redirects-to-an-external-oauth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|true|Name of the OAuth provider.|
|scopes|query|string|true|Space separated list of OAuth scopes to pass on to `provider`.|
|redirect_to|query|string(uri)|false|(Optional) URL to redirect back into the app on after OAuth sign-in completes successfully or not. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.<br>|
|code_challenge_method|query|string|false|(Optional) Method used to encrypt the verifier. Can be `plain` (no transformation) or `s256` (where SHA-256 is used). It is always recommended that `s256` is used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code_challenge_method|plain|
|code_challenge_method|s256|

<h3 id="links-an-oauth-identity-to-an-existing-user-redirects-to-an-external-oauth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|HTTP Redirect to the OAuth identity provider's authorization URL.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|URL to which the user agent should redirect (or open in a browser for mobile apps).<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Unlinks an identity from the current user.

> Code samples

```bash
curl http://localhost:9999/user/identities/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /user/identities/{identityId}`

<h3 id="unlinks-an-identity-from-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identityId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "error_code": "no_authorization"
}
```

> 403 Response

```json
{
  "error_code": "bad_jwt"
}
```

> 404 Response

```json
{
  "error_code": "manual_linking_disabled"
}
```

> 422 Response

```json
{
  "error_code": "single_identity_not_deletable"
}
```

<h3 id="unlinks-an-identity-from-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's account data.|Inline|
|401|Unauthorized|The user is not authenticated.|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|Forbidden error|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|Not found error|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Unprocessable entity|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## List OAuth grants

> Code samples

```bash
curl http://localhost:9999/user/oauth/grants \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user/oauth/grants`

Retrieves a list of all OAuth grants that the authenticated user has authorized. Only available when OAuth server is enabled.


> Example responses

> 200 Response

```json
[
  {
    "client": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "uri": "http://example.com",
      "logo_uri": "http://example.com"
    },
    "scopes": [
      "string"
    ],
    "granted_at": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="list-oauth-grants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of user's OAuth grants|Inline|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="list-oauth-grants-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» client|object|false|none|OAuth client details|
|» » id|string(uuid)|false|none|Unique client identifier|
|» » name|string|false|none|Human-readable name of the client application|
|» » uri|string(uri)|false|none|URL of the client application's homepage|
|» » logo_uri|string(uri)|false|none|URL of the client application's logo|
|» scopes|[string]|false|none|List of scopes granted to this client|
|» granted_at|string(date-time)|false|none|Timestamp when grant was authorized|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Revoke OAuth grant

> Code samples

```bash
curl 'http://localhost:9999/user/oauth/grants?client_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /user/oauth/grants`

Revokes the user's OAuth grant for a specific client. This will: - Mark the consent as revoked - Delete all active sessions associated with this OAuth client - Invalidate all refresh tokens for those sessions
Only available when OAuth server is enabled.


<h3 id="revoke-oauth-grant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string(uuid)|true|The OAuth client identifier|

> Example responses

> 400 Response

```json
{
  "error_code": "validation_failed",
  "msg": "client_id query parameter is required"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error_code": "oauth_consent_not_found",
  "msg": "No active grant found for this client"
}
```

<h3 id="revoke-oauth-grant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Grant successfully revoked|None|
|400|Bad Request|Missing or invalid client_id parameter|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|No active grant found for this client|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Reauthenticates the possession of an email or phone number for the purpose of password change.

> Code samples

```bash
curl http://localhost:9999/reauthenticate \
  -X POST \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /reauthenticate`

For a password to be changed on a user account, the user's email or phone number needs to be confirmed before they are allowed to set a new password. This requirement is configurable. This API sends a confirmation email or SMS message. A nonce in this message can be provided in `PUT /user` to change the password on the account.


> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="reauthenticates-the-possession-of-an-email-or-phone-number-for-the-purpose-of-password-change-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A One-Time Password was sent to the user's email or phone.|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="reauthenticates-the-possession-of-an-email-or-phone-number-for-the-purpose-of-password-change-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Begin enrolling a new factor for MFA.

> Code samples

```bash
curl http://localhost:9999/factors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "factor_type": "totp",
    "friendly_name": "string",
    "issuer": "http://example.com",
    "phone": "string"
  }'
```

`POST /factors`

Starts enrollment of a `totp`, `phone` or `webauthn` factor. Recovery codes are not enrolled through this endpoint; use `POST /factors/recovery-codes` instead.


> Body parameter

```json
{
  "factor_type": "totp",
  "friendly_name": "string",
  "issuer": "http://example.com",
  "phone": "string"
}
```

<h3 id="begin-enrolling-a-new-factor-for-mfa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» factor_type|body|string|true|none|
|» friendly_name|body|string|false|none|
|» issuer|body|string(uri)|false|none|
|» phone|body|string(phone)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» factor_type|totp|
|» factor_type|phone|
|» factor_type|webauthn|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "type": "totp",
  "totp": {
    "qr_code": "string",
    "secret": "string",
    "uri": "string"
  },
  "phone": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="begin-enrolling-a-new-factor-for-mfa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A new factor was created in the unverified state. Call `POST /factors/{factorId}/verify' to verify it.<br>|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="begin-enrolling-a-new-factor-for-mfa-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|type|string|false|none|none|
|totp|object|false|none|none|
|» qr_code|string|false|none|none|
|» secret|string|false|none|none|
|» uri|string|false|none|none|
|phone|string(phone)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|totp|
|type|phone|
|type|webauthn|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Create a new challenge for a MFA factor.

> Code samples

```bash
curl http://localhost:9999/factors/2b306a77-21dc-4110-ba71-537cb56b9e98/challenge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel": "sms"
  }'
```

`POST /factors/{factorId}/challenge`

> Body parameter

```json
{
  "channel": "sms"
}
```

<h3 id="create-a-new-challenge-for-a-mfa-factor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|factorId|path|string(uuid)|true|none|
|body|body|object|false|none|
|» channel|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|sms|
|» channel|whatsapp|

> Example responses

> 200 Response

```json
{
  "id": "14c1560e-2749-4522-bb62-d1458451830a",
  "type": "totp",
  "expires_at": 1674840917
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="create-a-new-challenge-for-a-mfa-factor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A new challenge was generated for the factor. Use `POST /factors/{factorId}/verify` to verify the challenge.<br>|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="create-a-new-challenge-for-a-mfa-factor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TOTPPhoneChallengeResponse](#schematotpphonechallengeresponse)|false|none|none|
|*oneOf*|[WebAuthnChallengeResponse](#schemawebauthnchallengeresponse)|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Verify a challenge on a factor.

> Code samples

```bash
curl http://localhost:9999/factors/2b306a77-21dc-4110-ba71-537cb56b9e98/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "challenge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "code": "string",
    "webauthn": {
      "type": "create",
      "credential_response": {}
    }
  }'
```

`POST /factors/{factorId}/verify`

> Body parameter

```json
{
  "challenge_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "code": "string",
  "webauthn": {
    "type": "create",
    "credential_response": {}
  }
}
```

<h3 id="verify-a-challenge-on-a-factor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|factorId|path|string(uuid)|true|none|
|body|body|object|false|none|
|» challenge_id|body|string(uuid)|true|none|
|» code|body|string|false|none|
|» webauthn|body|object|false|none|
|» » type|body|string|true|Type of WebAuthn operation|
|» » credential_response|body|object|true|WebAuthn credential response from the client|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|create|
|» » type|request|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "expires_at": 0,
  "weak_password": {
    "reasons": [
      "length"
    ],
    "message": "string"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="verify-a-challenge-on-a-factor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This challenge has been verified. Client libraries should replace their stored access and refresh tokens with the ones provided in this response. These new credentials have an increased Authenticator Assurance Level (AAL).<br>|[AccessTokenResponseSchema](#schemaaccesstokenresponseschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="verify-a-challenge-on-a-factor-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Remove a MFA factor from a user.

> Code samples

```bash
curl http://localhost:9999/factors/2b306a77-21dc-4110-ba71-537cb56b9e98 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /factors/{factorId}`

<h3 id="remove-a-mfa-factor-from-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|factorId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "2b306a77-21dc-4110-ba71-537cb56b9e98"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error_code": "validation_failed"
}
```

<h3 id="remove-a-mfa-factor-from-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|This MFA factor is removed (unenrolled) and cannot be used for increasing the AAL level of user's sessions. Client libraries should use the `POST /token?grant_type=refresh_token` endpoint to get a new access and refresh token with a decreased AAL.<br>|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Unprocessable entity. Returned when the factor is a recovery-code factor (use `DELETE /factors/recovery-codes` instead), when unenrolling the user's last verified second factor would leave recovery codes as the only second factor, or when the session does not have the required AAL.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="remove-a-mfa-factor-from-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Get the status of the user's MFA recovery codes.

> Code samples

```bash
curl http://localhost:9999/factors/recovery-codes \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /factors/recovery-codes`

Returns the recovery-code factor ID together with the total number of codes and how many are still unused. Code values are never returned after generation. Works regardless of whether recovery-code enrollment or verification is enabled on the server.


> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "total": 10,
  "remaining": 9
}
```

> 403 Response

```json
{
  "error_code": "no_authorization"
}
```

> 404 Response

```json
{
  "error_code": "mfa_factor_not_found"
}
```

<h3 id="get-the-status-of-the-users-mfa-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user's recovery-code status.|[MFARecoveryCodesStatusSchema](#schemamfarecoverycodesstatusschema)|
|403|Forbidden|Forbidden error. Anonymous users cannot use recovery codes.|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|The user has not enrolled recovery codes.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Generate the user's one-time set of MFA recovery codes.

> Code samples

```bash
curl http://localhost:9999/factors/recovery-codes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "friendly_name": "string"
  }'
```

`POST /factors/recovery-codes`

Creates a verified `recovery_code` factor together with a set of single-use codes. The plaintext codes are returned exactly once, in canonical form. Requires an AAL2 session and at least one other verified factor, because recovery codes can never be the user's only second factor. Use `POST /factors/recovery-codes/regenerate` to rotate an existing set.


> Body parameter

```json
{
  "friendly_name": "string"
}
```

<h3 id="generate-the-users-one-time-set-of-mfa-recovery-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» friendly_name|body|string|false|Name shown in the user's factor list. Subject to the same per-user uniqueness rule as any other factor. Defaults to `Recovery codes` when omitted or blank.<br>|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "friendly_name": "Recovery codes",
  "total": 10,
  "codes": [
    "k4m9x7qp2ab8ht3z"
  ]
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error_code": "insufficient_aal"
}
```

> 422 Response

```json
{
  "error_code": "mfa_recovery_codes_enroll_not_enabled"
}
```

<h3 id="generate-the-users-one-time-set-of-mfa-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recovery codes were generated. Show the `codes` to the user now; they cannot be retrieved again.<br>|[MFARecoveryCodesSchema](#schemamfarecoverycodesschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|Forbidden error. Requires an AAL2 session; anonymous users cannot use recovery codes.|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Unprocessable entity. Recovery-code enrollment is disabled on the server, the user has no other verified factor, recovery codes are already enrolled (use `POST /factors/recovery-codes/regenerate`), the friendly name is already used by another factor, or the user has reached the maximum number of enrolled or verified factors.<br>|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Revoke the user's MFA recovery codes.

> Code samples

```bash
curl http://localhost:9999/factors/recovery-codes \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /factors/recovery-codes`

Removes the recovery-code factor and all of its codes. Sessions that reached AAL2 with a recovery code are downgraded to AAL1. Requires an AAL2 session. Works regardless of whether recovery-code enrollment or verification is enabled on the server.


> Example responses

> 200 Response

```json
{
  "id": "2b306a77-21dc-4110-ba71-537cb56b9e98"
}
```

> 403 Response

```json
{
  "error_code": "insufficient_aal"
}
```

> 404 Response

```json
{
  "error_code": "mfa_factor_not_found"
}
```

<h3 id="revoke-the-users-mfa-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The recovery-code factor was removed.|Inline|
|403|Forbidden|Forbidden error. Requires an AAL2 session; anonymous users cannot use recovery codes.|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|The user has not enrolled recovery codes.|[ErrorSchema](#schemaerrorschema)|

<h3 id="revoke-the-users-mfa-recovery-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Verify a recovery code and upgrade the session to AAL2.

> Code samples

```bash
curl http://localhost:9999/factors/recovery-codes/verify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "K4M9-X7QP-2AB8-HT3Z"
  }'
```

`POST /factors/recovery-codes/verify`

Redeems one single-use recovery code from an AAL1 session. The submitted code is normalized before comparison: whitespace and `-` separators are removed and letters are lowercased, so `K4M9-X7QP-2AB8-HT3Z` and `k4m9x7qp2ab8ht3z` are equivalent. A matched code is consumed and cannot be used again.


> Body parameter

```json
{
  "code": "K4M9-X7QP-2AB8-HT3Z"
}
```

<h3 id="verify-a-recovery-code-and-upgrade-the-session-to-aal2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» code|body|string|true|The recovery code to redeem. Separators, whitespace and letter case are ignored.|

> Example responses

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "expires_at": 0,
  "weak_password": {
    "reasons": [
      "length"
    ],
    "message": "string"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }
}
```

> 400 Response

```json
{
  "error_code": "validation_failed"
}
```

> 403 Response

```json
{
  "error_code": "mfa_verification_rejected"
}
```

> 422 Response

```json
{
  "error_code": "mfa_verification_failed"
}
```

> 429 Response

```json
{
  "error_code": "over_request_rate_limit"
}
```

<h3 id="verify-a-recovery-code-and-upgrade-the-session-to-aal2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The recovery code was accepted and consumed. These new credentials have an increased Authenticator Assurance Level (AAL) and an `amr` claim that includes `mfa/recovery_code`.<br>|[AccessTokenResponseSchema](#schemaaccesstokenresponseschema)|
|400|Bad Request|Bad request. The body could not be parsed or `code` is missing or empty.|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|Forbidden error. The MFA verification attempt hook rejected the attempt or the user is anonymous.|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Unprocessable entity. `mfa_verification_failed` is returned for a wrong code, an already-used code and when no recovery codes are enrolled. `mfa_recovery_codes_verify_not_enabled` is returned when recovery-code verification is disabled on the server.<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|Too many requests. Either the IP-based rate limit was breached (`over_request_rate_limit`), or the per-user lockout is active after too many consecutive failed attempts (`mfa_recovery_codes_locked`). Regenerating the codes from an AAL2 session clears the lock.<br>|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Replace the user's MFA recovery codes with a new set.

> Code samples

```bash
curl http://localhost:9999/factors/recovery-codes/regenerate \
  -X POST \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /factors/recovery-codes/regenerate`

Atomically invalidates all existing codes, issues a fresh set and clears any active verification lockout. The new plaintext codes are returned exactly once. Requires an AAL2 session.


> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "friendly_name": "Recovery codes",
  "total": 10,
  "codes": [
    "k4m9x7qp2ab8ht3z"
  ]
}
```

> 403 Response

```json
{
  "error_code": "insufficient_aal"
}
```

> 404 Response

```json
{
  "error_code": "mfa_factor_not_found"
}
```

> 422 Response

```json
{
  "error_code": "mfa_recovery_codes_enroll_not_enabled"
}
```

<h3 id="replace-the-users-mfa-recovery-codes-with-a-new-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recovery codes were regenerated. Show the `codes` to the user now; they cannot be retrieved again and the previous codes no longer work.<br>|[MFARecoveryCodesSchema](#schemamfarecoverycodesschema)|
|403|Forbidden|Forbidden error. Requires an AAL2 session; anonymous users cannot use recovery codes.|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|The user has not enrolled recovery codes.|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Unprocessable entity. Recovery-code enrollment is disabled on the server.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

<h1 id="supabase-auth-rest-api-oauth-client">oauth-client</h1>

APIs for OAuth flows where this service acts as an OAuth client (connecting to external providers).

## Redirects to an external OAuth provider. Usually for use as clickable links.

> Code samples

```bash
curl 'http://localhost:9999/authorize?provider=google&scopes=string' \
  -H "apikey: ${API_KEY}"
```

`GET /authorize`

<h3 id="redirects-to-an-external-oauth-provider-usually-for-use-as-clickable-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|query|string|true|Name of the OAuth provider.|
|scopes|query|string|true|Space separated list of OAuth scopes to pass on to `provider`.|
|invite_token|query|string|false|(Optional) A token representing a previous invitation of the user. A successful sign-in with OAuth will mark the invitation as completed.|
|redirect_to|query|string(uri)|false|(Optional) URL to redirect back into the app on after OAuth sign-in completes successfully or not. If not specified will use the "Site URL" configuration option. If not allowed per the allow list it will use the "Site URL" configuration option.<br>|
|code_challenge_method|query|string|false|(Optional) Method used to encrypt the verifier. Can be `plain` (no transformation) or `s256` (where SHA-256 is used). It is always recommended that `s256` is used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code_challenge_method|plain|
|code_challenge_method|s256|

<h3 id="redirects-to-an-external-oauth-provider-usually-for-use-as-clickable-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|HTTP Redirect to the OAuth identity provider's authorization URL.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|URL to which the user agent should redirect (or open in a browser for mobile apps).<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Redirects OAuth flow errors to the frontend app.

> Code samples

```bash
curl http://localhost:9999/callback \
  -H "apikey: ${API_KEY}"
```

`GET /callback`

When an OAuth sign-in flow fails for any reason, the error message needs to be delivered to the frontend app requesting the flow. This callback delivers the errors as `error` and `error_description` query params. Usually this request is not called directly.


<h3 id="redirects-oauth-flow-errors-to-the-frontend-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|HTTP Redirect to a URL containing the `error` and `error_description` query parameters which should be shown to the user requesting the OAuth sign-in flow.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|URL containing the `error` and `error_description` query parameters.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Redirects OAuth flow errors to the frontend app.

> Code samples

```bash
curl http://localhost:9999/callback \
  -X POST
```

`POST /callback`

When an OAuth sign-in flow fails for any reason, the error message needs to be delivered to the frontend app requesting the flow. This callback delivers the errors as `error` and `error_description` query params. Usually this request is not called directly.


<h3 id="redirects-oauth-flow-errors-to-the-frontend-app-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|HTTP Redirect to a URL containing the `error` and `error_description` query parameters which should be shown to the user requesting the OAuth sign-in flow.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|URL containing the `error` and `error_description` query parameters.<br>|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="supabase-auth-rest-api-oauth-server">oauth-server</h1>

APIs for OAuth 2.1 flows where this service acts as an OAuth provider/server for other applications. Requires `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard. (Experimental.)

## Register a new OAuth client dynamically (public endpoint).

> Code samples

```bash
curl http://localhost:9999/oauth/clients/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_name": "string",
    "client_uri": "http://example.com",
    "logo_uri": "http://example.com",
    "redirect_uris": [
      "http://example.com"
    ],
    "client_type": "public",
    "token_endpoint_auth_method": "none",
    "grant_types": [
      "authorization_code"
    ],
    "response_types": [
      "code"
    ],
    "scope": "string"
  }'
```

`POST /oauth/clients/register`

Allows applications to register as OAuth clients with this server dynamically. This follows the OAuth 2.0 Dynamic Client Registration Protocol. Only available when OAuth server is enabled and dynamic registration is allowed (set `GOTRUE_OAUTH_SERVER_ENABLED=true` and `GOTRUE_OAUTH_SERVER_ALLOW_DYNAMIC_REGISTRATION=true` for self-hosted or enable both settings in Supabase Dashboard).


> Body parameter

```json
{
  "client_name": "string",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string"
}
```

<h3 id="register-a-new-oauth-client-dynamically-public-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_name|body|string|true|Human-readable name of the client application|
|» client_uri|body|string(uri)|false|URL of the client application's homepage|
|» logo_uri|body|string(uri)|false|URL of the client application's logo|
|» redirect_uris|body|[string(uri)]|true|Array of redirect URIs used by the client (maximum 10)|
|» client_type|body|string|false|Type of the client. Optional. If not provided, will be inferred from token_endpoint_auth_method or defaults to 'confidential'. Public clients are used for applications that cannot securely store credentials (e.g., SPAs, mobile apps). Confidential clients can securely store credentials (e.g., server-side applications).<br>|
|» token_endpoint_auth_method|body|string|false|Authentication method for the token endpoint. Optional. 'none' is for public clients, 'client_secret_basic' and 'client_secret_post' are for confidential clients. If provided, must be consistent with client_type. If not provided, will be inferred from client_type.<br>|
|» grant_types|body|[string]|false|OAuth grant types the client will use (defaults to both if not specified)|
|» response_types|body|[string]|false|OAuth response types the client will use|
|» scope|body|string|false|Space-separated list of scope values|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» client_type|public|
|» client_type|confidential|
|» token_endpoint_auth_method|none|
|» token_endpoint_auth_method|client_secret_basic|
|» token_endpoint_auth_method|client_secret_post|
|» grant_types|authorization_code|
|» grant_types|refresh_token|
|» response_types|code|

> Example responses

> 201 Response

```json
{
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "registration_type": "dynamic",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="register-a-new-oauth-client-dynamically-public-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OAuth client registered successfully|[OAuthClientSchema](#schemaoauthclientschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="register-a-new-oauth-client-dynamically-public-endpoint-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth 2.1 Token endpoint

> Code samples

```bash
curl http://localhost:9999/oauth/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'grant_type=authorization_code&code=string&redirect_uri=http%3A%2F%2Fexample.com&code_verifier=string&refresh_token=string&client_id=string&client_secret=string'
```

`POST /oauth/token`

Issues access tokens in exchange for authorization codes or refresh tokens. Supports authorization_code and refresh_token grant types. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).


> Body parameter

```yaml
grant_type: authorization_code
code: string
redirect_uri: "http://example.com"
code_verifier: string
refresh_token: string
client_id: string
client_secret: string
```

<h3 id="oauth-21-token-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» grant_type|body|string|true|The grant type being used|
|» code|body|string|false|Authorization code (required for authorization_code grant)|
|» redirect_uri|body|string(uri)|false|Redirect URI (required for authorization_code grant)|
|» code_verifier|body|string|false|PKCE code verifier (required for authorization_code grant)|
|» refresh_token|body|string|false|Refresh token (required for refresh_token grant)|
|» client_id|body|string|false|OAuth client identifier|
|» client_secret|body|string|false|OAuth client secret (for confidential clients)|

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
  "token_type": "Bearer",
  "expires_in": 0,
  "refresh_token": "string",
  "scope": "string"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="oauth-21-token-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Access token issued successfully|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="oauth-21-token-endpoint-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|The access token|
|token_type|string|false|none|Type of token issued|
|expires_in|integer|false|none|Lifetime in seconds of the access token|
|refresh_token|string|false|none|Refresh token (if applicable)|
|scope|string|false|none|Authorized scopes|

<aside class="success">
This operation does not require authentication
</aside>

## OAuth 2.1 Authorization endpoint

> Code samples

```bash
curl 'http://localhost:9999/oauth/authorize?response_type=code&client_id=string&redirect_uri=http%3A%2F%2Fexample.com&code_challenge=string&code_challenge_method=S256' \
  -H 'Accept: application/json'
```

`GET /oauth/authorize`

Initiates the OAuth authorization code flow. Redirects users to login and authorize the requesting application. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).


<h3 id="oauth-21-authorization-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|response_type|query|string|true|none|
|client_id|query|string|true|The client identifier|
|redirect_uri|query|string(uri)|true|Client's redirect URI|
|scope|query|string|false|Requested access scope|
|state|query|string|false|State parameter for CSRF protection|
|code_challenge|query|string|true|PKCE code challenge|
|code_challenge_method|query|string|true|PKCE code challenge method|

#### Enumerated Values

|Parameter|Value|
|---|---|
|response_type|code|
|code_challenge_method|S256|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="oauth-21-authorization-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect to login or authorization page|None|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get OAuth authorization details

> Code samples

```bash
curl http://localhost:9999/oauth/authorizations/string \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth/authorizations/{authorization_id}`

Retrieves details about a pending OAuth authorization request. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).


<h3 id="get-oauth-authorization-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "authorization_id": "string",
  "redirect_uri": "http://example.com",
  "client": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "uri": "http://example.com",
    "logo_uri": "http://example.com"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  },
  "scope": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="get-oauth-authorization-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authorization details|Inline|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|Authorization not found|[ErrorSchema](#schemaerrorschema)|

<h3 id="get-oauth-authorization-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorization_id|string|false|none|none|
|redirect_uri|string(uri)|false|none|none|
|client|object|false|none|none|
|» id|string(uuid)|false|none|none|
|» name|string|false|none|none|
|» uri|string(uri)|false|none|none|
|» logo_uri|string(uri)|false|none|none|
|user|object|false|none|none|
|» id|string(uuid)|false|none|none|
|» email|string(email)|false|none|none|
|scope|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

## Approve or deny OAuth authorization

> Code samples

```bash
curl http://localhost:9999/oauth/authorizations/string/consent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "approve"
  }'
```

`POST /oauth/authorizations/{authorization_id}/consent`

User approves or denies authorization to the OAuth client. Only available when OAuth server is enabled (set `GOTRUE_OAUTH_SERVER_ENABLED=true` for self-hosted or enable in Supabase Dashboard).


> Body parameter

```json
{
  "action": "approve"
}
```

<h3 id="approve-or-deny-oauth-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authorization_id|path|string|true|none|
|body|body|object|false|none|
|» action|body|string|true|Whether to approve or deny the authorization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|approve|
|» action|deny|

> Example responses

> 200 Response

```json
{
  "redirect_url": "http://example.com"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="approve-or-deny-oauth-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authorization consent processed|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="approve-or-deny-oauth-authorization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirect_url|string(uri)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & UserAuth
</aside>

<h1 id="supabase-auth-rest-api-sso">sso</h1>

APIs for authenticating using SSO providers (SAML). (Experimental.)

## Initiate a Single-Sign On flow.

> Code samples

```bash
curl http://localhost:9999/sso \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "domain": "example.com",
    "provider_id": "40451fc2-4997-429c-bf7f-cc6f33c788e6",
    "redirect_to": "http://example.com",
    "skip_http_redirect": true,
    "code_challenge": "string",
    "code_challenge_method": "plain",
    "gotrue_meta_security": {
      "captcha_token": "string"
    }
  }'
```

`POST /sso`

> Body parameter

```json
{
  "domain": "example.com",
  "provider_id": "40451fc2-4997-429c-bf7f-cc6f33c788e6",
  "redirect_to": "http://example.com",
  "skip_http_redirect": true,
  "code_challenge": "string",
  "code_challenge_method": "plain",
  "gotrue_meta_security": {
    "captcha_token": "string"
  }
}
```

<h3 id="initiate-a-single-sign-on-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» domain|body|string(hostname)|false|Email address domain used to identify the SSO provider.|
|» provider_id|body|string(uuid)|false|none|
|» redirect_to|body|string(uri)|false|none|
|» skip_http_redirect|body|boolean|false|Set to `true` if the response to this request should not be a HTTP 303 redirect -- useful for browser-based applications.|
|» code_challenge|body|string|false|none|
|» code_challenge_method|body|string|false|none|
|» gotrue_meta_security|body|[GoTrueSecurity](#schemagotruesecurity)|false|Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» code_challenge_method|plain|
|» code_challenge_method|s256|

> Example responses

> 200 Response

```json
{
  "url": "http://example.com"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="initiate-a-single-sign-on-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned only when `skip_http_redirect` is `true` and the SSO provider could be identified from the `provider_id` or `domain`. Client libraries should use the returned URL to redirect or open a browser.<br>|Inline|
|303|See Other|Returned only when `skip_http_redirect` is `false` or not present and the SSO provider could be identified from the `provider_id` or `domain`. Client libraries should follow the redirect. 303 is used instead of 302 because the request should be executed with a `GET` verb.<br>|None|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|Returned when the SSO provider could not be identified.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="initiate-a-single-sign-on-flow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(uri)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|303|Location|string|uri|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

<h1 id="supabase-auth-rest-api-saml">saml</h1>

SAML 2.0 Endpoints. (Experimental.)

## Returns the SAML 2.0 Metadata XML.

> Code samples

```bash
curl http://localhost:9999/saml/metadata \
  -H "apikey: ${API_KEY}"
```

`GET /saml/metadata`

The metadata XML can be downloaded or used for the SAML 2.0 Metadata URL discovery mechanism. This URL is the SAML 2.0 EntityID of the Service Provider implemented by this server.


<h3 id="returns-the-saml-20-metadata-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|download|query|boolean|false|If set to `true` will add a `Content-Disposition` header to the response which will trigger a download dialog on the browser.<br>|

<h3 id="returns-the-saml-20-metadata-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A valid SAML 2.0 Metadata XML document. Should be cached according to the `Cache-Control` header and/or caching data specified in the document itself.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Disposition|string||Present if `download=true`, which triggers the browser to show a donwload dialog.<br>|
|200|Cache-Control|string||Should be parsed and obeyed to avoid putting strain on the server.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## SAML 2.0 Assertion Consumer Service (ACS) endpoint.

> Code samples

```bash
curl http://localhost:9999/saml/acs \
  -X POST \
  -H 'Accept: application/json'
```

`POST /saml/acs`

Implements the SAML 2.0 Assertion Consumer Service (ACS) endpoint supporting the POST and Artifact bindings.


<h3 id="saml-20-assertion-consumer-service-acs-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|RelayState|query|string(uri) \| string(uuid)|false|none|
|SAMLArt|query|string|false|See the SAML 2.0 ACS specification. Cannot be used without a UUID `RelayState` parameter.<br>|
|SAMLResponse|query|string|false|See the SAML 2.0 ACS specification. Must be present unless `SAMLArt` is specified. If `RelayState` is not a UUID, the SAML Response is unpacked and the identity provider is identified from the response.<br>|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 429 Response

```json
{
  "code": 429,
  "msg": "Too many requests. Please try again in a few seconds."
}
```

<h3 id="saml-20-assertion-consumer-service-acs-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|HTTP See Other redirect response where `Location` is a specially formatted URL that includes an `access_token`, `refresh_token`, `expires_in` as URL query encoded values in the URL fragment (anything after `#`). These values are encoded in the fragment as this value is only visible to the browser handling the redirect and is not sent to the server.<br>|None|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|429|Too Many Requests|HTTP Too Many Requests response, when a rate limiter has been breached.<br>|Inline|

<h3 id="saml-20-assertion-consumer-service-acs-endpoint-responseschema">Response Schema</h3>

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|msg|string|false|none|A basic message describing the rate limit breach. Do not use as an error code identifier.|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string|uri|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="supabase-auth-rest-api-admin">admin</h1>

Administration APIs requiring elevated access.

## Invite a user by email.

> Code samples

```bash
curl http://localhost:9999/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -d '{
    "email": "string",
    "data": {}
  }'
```

`POST /invite`

Sends an invitation email which contains a link that allows the user to sign-in.


> Body parameter

```json
{
  "email": "string",
  "data": {}
}
```

<h3 id="invite-a-user-by-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|none|
|» data|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="invite-a-user-by-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An invitation has been sent to the user.|[UserSchema](#schemauserschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|User already exists and has confirmed their address.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Generate a link to send in an email message.

> Code samples

```bash
curl http://localhost:9999/admin/generate_link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "magiclink",
    "email": "user@example.com",
    "new_email": "user@example.com",
    "password": "string",
    "data": {},
    "redirect_to": "http://example.com"
  }'
```

`POST /admin/generate_link`

> Body parameter

```json
{
  "type": "magiclink",
  "email": "user@example.com",
  "new_email": "user@example.com",
  "password": "string",
  "data": {},
  "redirect_to": "http://example.com"
}
```

<h3 id="generate-a-link-to-send-in-an-email-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» type|body|string|true|none|
|» email|body|string(email)|true|none|
|» new_email|body|string(email)|false|none|
|» password|body|string|false|none|
|» data|body|object|false|none|
|» redirect_to|body|string(uri)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|magiclink|
|» type|signup|
|» type|recovery|
|» type|email_change_current|
|» type|email_change_new|

> Example responses

> 200 Response

```json
{
  "action_link": "http://example.com",
  "email_otp": "string",
  "hashed_token": "string",
  "verification_type": "string",
  "redirect_to": "http://example.com"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 422 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="generate-a-link-to-send-in-an-email-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User profile and generated link information.|Inline|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user.|[ErrorSchema](#schemaerrorschema)|
|422|Unprocessable Entity|Has multiple meanings:<br>  - User already exists<br>  - Provided password does not meet minimum criteria<br>  - Secure email change not enabled<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="generate-a-link-to-send-in-an-email-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action_link|string(uri)|false|none|none|
|email_otp|string|false|none|none|
|hashed_token|string|false|none|none|
|verification_type|string|false|none|none|
|redirect_to|string(uri)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Fetch audit log events.

> Code samples

```bash
curl http://localhost:9999/admin/audit \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/audit`

<h3 id="fetch-audit-log-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payload": {
      "actor_id": "string",
      "actor_via_sso": true,
      "actor_username": "string",
      "actor_name": "string",
      "traits": {},
      "action": "string",
      "log_type": "string"
    },
    "created_at": "1970-01-01T00:00:00Z",
    "ip_address": "string"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="fetch-audit-log-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of audit logs.|Inline|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="fetch-audit-log-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string(uuid)|false|none|none|
|» payload|object|false|none|none|
|» » actor_id|string|false|none|none|
|» » actor_via_sso|boolean|false|none|Whether the actor used a SSO protocol (like SAML 2.0 or OIDC) to authenticate.|
|» » actor_username|string|false|none|none|
|» » actor_name|string|false|none|none|
|» » traits|object|false|none|none|
|» » action|string|false|none|Usually one of these values:<br>- login<br>- logout<br>- invite_accepted<br>- user_signedup<br>- user_invited<br>- user_deleted<br>- user_modified<br>- user_recovery_requested<br>- user_reauthenticate_requested<br>- user_confirmation_requested<br>- user_repeated_signup<br>- user_updated_password<br>- token_revoked<br>- token_refreshed<br>- factor_in_progress<br>- factor_unenrolled<br>- challenge_created<br>- verification_attempted<br>- factor_deleted<br>- factor_updated<br>- identity_linked<br>- identity_unlinked<br>- passkey_created<br>- passkey_updated<br>- passkey_deleted<br>- recovery_codes_generated<br>- recovery_codes_verified<br>- recovery_codes_regenerated<br>- recovery_codes_deleted|
|» » log_type|string|false|none|Usually one of these values:<br>- account<br>- team<br>- token<br>- user<br>- factor|
|» created_at|string(date-time)|false|none|none|
|» ip_address|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Fetch a listing of users.

> Code samples

```bash
curl http://localhost:9999/admin/users \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/users`

<h3 id="fetch-a-listing-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "aud": "string",
  "users": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "aud": "string",
      "role": "string",
      "email": "string",
      "email_confirmed_at": "1970-01-01T00:00:00Z",
      "phone": "string",
      "phone_confirmed_at": "1970-01-01T00:00:00Z",
      "confirmation_sent_at": "1970-01-01T00:00:00Z",
      "confirmed_at": "1970-01-01T00:00:00Z",
      "recovery_sent_at": "1970-01-01T00:00:00Z",
      "new_email": "user@example.com",
      "email_change_sent_at": "1970-01-01T00:00:00Z",
      "new_phone": "string",
      "phone_change_sent_at": "1970-01-01T00:00:00Z",
      "reauthentication_sent_at": "1970-01-01T00:00:00Z",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "app_metadata": {},
      "user_metadata": {},
      "factors": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "status": "string",
          "friendly_name": "string",
          "factor_type": "string",
          "webauthn_credential": "string",
          "phone": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "last_challenged_at": "1970-01-01T00:00:00Z"
        }
      ],
      "identities": [
        {
          "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "identity_data": {},
          "provider": "string",
          "last_sign_in_at": "1970-01-01T00:00:00Z",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "email": "user@example.com"
        }
      ],
      "banned_until": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z",
      "is_anonymous": true
    }
  ]
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="fetch-a-listing-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A page of users.|Inline|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="fetch-a-listing-of-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aud|string|false|none|**Deprecated.**|
|users|[[UserSchema](#schemauserschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Fetch user account data for a user.

> Code samples

```bash
curl http://localhost:9999/admin/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/users/{userId}`

<h3 id="fetch-user-account-data-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="fetch-user-account-data-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's account data.|[UserSchema](#schemauserschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Update user's account data.

> Code samples

```bash
curl http://localhost:9999/admin/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }'
```

`PUT /admin/users/{userId}`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

<h3 id="update-users-account-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|
|body|body|[UserSchema](#schemauserschema)|false|none|
|» id|body|string(uuid)|false|none|
|» aud|body|string|false|**Deprecated.**|
|» role|body|string|false|none|
|» email|body|string|false|User's primary contact email. In most cases you can uniquely identify a user by their email address, but not in all cases.|
|» email_confirmed_at|body|string(date-time)|false|none|
|» phone|body|string(phone)|false|User's primary contact phone number. In most cases you can uniquely identify a user by their phone number, but not in all cases.|
|» phone_confirmed_at|body|string(date-time)|false|none|
|» confirmation_sent_at|body|string(date-time)|false|none|
|» confirmed_at|body|string(date-time)|false|none|
|» recovery_sent_at|body|string(date-time)|false|none|
|» new_email|body|string(email)|false|none|
|» email_change_sent_at|body|string(date-time)|false|none|
|» new_phone|body|string(phone)|false|none|
|» phone_change_sent_at|body|string(date-time)|false|none|
|» reauthentication_sent_at|body|string(date-time)|false|none|
|» last_sign_in_at|body|string(date-time)|false|none|
|» app_metadata|body|object|false|none|
|» user_metadata|body|object|false|none|
|» factors|body|[[MFAFactorSchema](#schemamfafactorschema)]|false|none|
|» identities|body|[[IdentitySchema](#schemaidentityschema)]|false|none|
|» banned_until|body|string(date-time)|false|none|
|» created_at|body|string(date-time)|false|none|
|» updated_at|body|string(date-time)|false|none|
|» deleted_at|body|string(date-time)|false|none|
|» is_anonymous|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="update-users-account-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's account data was updated.|[UserSchema](#schemauserschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Delete a user.

> Code samples

```bash
curl http://localhost:9999/admin/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/users/{userId}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's account data.|[UserSchema](#schemauserschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## List all of the MFA factors for a user.

> Code samples

```bash
curl http://localhost:9999/admin/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/factors \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/users/{userId}/factors`

<h3 id="list-all-of-the-mfa-factors-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "string",
    "friendly_name": "string",
    "factor_type": "string",
    "webauthn_credential": "string",
    "phone": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "last_challenged_at": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="list-all-of-the-mfa-factors-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's MFA factors.|Inline|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user.|[ErrorSchema](#schemaerrorschema)|

<h3 id="list-all-of-the-mfa-factors-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MFAFactorSchema](#schemamfafactorschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Update a user's MFA factor.

> Code samples

```bash
curl http://localhost:9999/admin/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/factors/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PUT /admin/users/{userId}/factors/{factorId}`

> Body parameter

```json
{}
```

<h3 id="update-a-users-mfa-factor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|
|factorId|path|string(uuid)|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "friendly_name": "string",
  "factor_type": "string",
  "webauthn_credential": "string",
  "phone": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "last_challenged_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="update-a-users-mfa-factor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's MFA factor.|[MFAFactorSchema](#schemamfafactorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user and/or factor.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Remove a user's MFA factor.

> Code samples

```bash
curl http://localhost:9999/admin/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/factors/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/users/{userId}/factors/{factorId}`

<h3 id="remove-a-users-mfa-factor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|none|
|factorId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "friendly_name": "string",
  "factor_type": "string",
  "webauthn_credential": "string",
  "phone": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "last_challenged_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="remove-a-users-mfa-factor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User's MFA factor.|[MFAFactorSchema](#schemamfafactorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|There is no such user and/or factor.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Fetch a list of all registered SSO providers.

> Code samples

```bash
curl http://localhost:9999/admin/sso/providers \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/sso/providers`

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sso_domains": [
        {
          "domain": "example.com"
        }
      ],
      "saml": {
        "entity_id": "string",
        "metadata_xml": "string",
        "metadata_url": "string",
        "attribute_mapping": {
          "keys": {}
        }
      }
    }
  ]
}
```

<h3 id="fetch-a-list-of-all-registered-sso-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all providers.|Inline|

<h3 id="fetch-a-list-of-all-registered-sso-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SSOProviderSchema](#schemassoproviderschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Register a new SSO provider.

> Code samples

```bash
curl http://localhost:9999/admin/sso/providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "saml",
    "metadata_url": "http://example.com",
    "metadata_xml": "string",
    "domains": [
      "example.com"
    ],
    "attribute_mapping": {
      "keys": {}
    }
  }'
```

`POST /admin/sso/providers`

> Body parameter

```json
{
  "type": "saml",
  "metadata_url": "http://example.com",
  "metadata_xml": "string",
  "domains": [
    "example.com"
  ],
  "attribute_mapping": {
    "keys": {}
  }
}
```

<h3 id="register-a-new-sso-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» type|body|string|true|none|
|» metadata_url|body|string(uri)|false|none|
|» metadata_xml|body|string|false|none|
|» domains|body|[string(hostname)]|false|none|
|» attribute_mapping|body|[SAMLAttributeMappingSchema](#schemasamlattributemappingschema)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|saml|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sso_domains": [
    {
      "domain": "example.com"
    }
  ],
  "saml": {
    "entity_id": "string",
    "metadata_xml": "string",
    "metadata_url": "string",
    "attribute_mapping": {
      "keys": {}
    }
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="register-a-new-sso-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSO provider was created.|[SSOProviderSchema](#schemassoproviderschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Fetch SSO provider details.

> Code samples

```bash
curl http://localhost:9999/admin/sso/providers/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/sso/providers/{ssoProviderId}`

<h3 id="fetch-sso-provider-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ssoProviderId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sso_domains": [
    {
      "domain": "example.com"
    }
  ],
  "saml": {
    "entity_id": "string",
    "metadata_xml": "string",
    "metadata_url": "string",
    "attribute_mapping": {
      "keys": {}
    }
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="fetch-sso-provider-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSO provider exists with these details.|[SSOProviderSchema](#schemassoproviderschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|A provider with this UUID does not exist.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Update details about a SSO provider.

> Code samples

```bash
curl http://localhost:9999/admin/sso/providers/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "metadata_url": "http://example.com",
    "metadata_xml": "string",
    "domains": [
      "string"
    ],
    "attribute_mapping": {
      "keys": {}
    }
  }'
```

`PUT /admin/sso/providers/{ssoProviderId}`

You can only update only one of `metadata_url` or `metadata_xml` at once. The SAML Metadata represented by these updates must advertize the same Identity Provider EntityID. Do not include the `domains` or `attribute_mapping` property to keep the existing database values.


> Body parameter

```json
{
  "metadata_url": "http://example.com",
  "metadata_xml": "string",
  "domains": [
    "string"
  ],
  "attribute_mapping": {
    "keys": {}
  }
}
```

<h3 id="update-details-about-a-sso-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ssoProviderId|path|string(uuid)|true|none|
|body|body|object|false|none|
|» metadata_url|body|string(uri)|false|none|
|» metadata_xml|body|string|false|none|
|» domains|body|[string]|false|none|
|» attribute_mapping|body|[SAMLAttributeMappingSchema](#schemasamlattributemappingschema)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sso_domains": [
    {
      "domain": "example.com"
    }
  ],
  "saml": {
    "entity_id": "string",
    "metadata_xml": "string",
    "metadata_url": "string",
    "attribute_mapping": {
      "keys": {}
    }
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="update-details-about-a-sso-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSO provider details were updated.|[SSOProviderSchema](#schemassoproviderschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|A provider with this UUID does not exist.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Remove an SSO provider.

> Code samples

```bash
curl http://localhost:9999/admin/sso/providers/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/sso/providers/{ssoProviderId}`

<h3 id="remove-an-sso-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ssoProviderId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sso_domains": [
    {
      "domain": "example.com"
    }
  ],
  "saml": {
    "entity_id": "string",
    "metadata_xml": "string",
    "metadata_url": "string",
    "attribute_mapping": {
      "keys": {}
    }
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="remove-an-sso-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSO provider was removed.|[SSOProviderSchema](#schemassoproviderschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|A provider with this UUID does not exist.|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## List OAuth clients (admin)

> Code samples

```bash
curl http://localhost:9999/admin/oauth/clients \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/oauth/clients`

Retrieves a list of all registered OAuth clients. Only available when OAuth server is enabled.


<h3 id="list-oauth-clients-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "client_id": "string",
      "client_name": "string",
      "client_secret": "string",
      "client_type": "public",
      "token_endpoint_auth_method": "none",
      "registration_type": "dynamic",
      "client_uri": "http://example.com",
      "logo_uri": "http://example.com",
      "redirect_uris": [
        "http://example.com"
      ],
      "grant_types": [
        "authorization_code"
      ],
      "response_types": [
        "code"
      ],
      "scope": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="list-oauth-clients-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of OAuth clients|Inline|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="list-oauth-clients-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[[OAuthClientSchema](#schemaoauthclientschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Register OAuth client (admin)

> Code samples

```bash
curl http://localhost:9999/admin/oauth/clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_name": "string",
    "client_uri": "http://example.com",
    "logo_uri": "http://example.com",
    "redirect_uris": [
      "http://example.com"
    ],
    "client_type": "public",
    "token_endpoint_auth_method": "none",
    "grant_types": [
      "authorization_code"
    ],
    "response_types": [
      "code"
    ],
    "scope": "string"
  }'
```

`POST /admin/oauth/clients`

Manually register a new OAuth client (admin endpoint). Only available when OAuth server is enabled.


> Body parameter

```json
{
  "client_name": "string",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string"
}
```

<h3 id="register-oauth-client-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_name|body|string|true|Human-readable name of the client application|
|» client_uri|body|string(uri)|false|URL of the client application's homepage|
|» logo_uri|body|string(uri)|false|URL of the client application's logo|
|» redirect_uris|body|[string(uri)]|true|Array of redirect URIs used by the client (maximum 10)|
|» client_type|body|string|false|Type of the client. Optional. If not provided, will be inferred from token_endpoint_auth_method or defaults to 'confidential'. Public clients are used for applications that cannot securely store credentials (e.g., SPAs, mobile apps). Confidential clients can securely store credentials (e.g., server-side applications).<br>|
|» token_endpoint_auth_method|body|string|false|Authentication method for the token endpoint. Optional. 'none' is for public clients, 'client_secret_basic' and 'client_secret_post' are for confidential clients. If provided, must be consistent with client_type. If not provided, will be inferred from client_type.<br>|
|» grant_types|body|[string]|false|OAuth grant types the client will use (defaults to both if not specified)|
|» response_types|body|[string]|false|OAuth response types the client can use|
|» scope|body|string|false|Space-separated list of scope values|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» client_type|public|
|» client_type|confidential|
|» token_endpoint_auth_method|none|
|» token_endpoint_auth_method|client_secret_basic|
|» token_endpoint_auth_method|client_secret_post|
|» grant_types|authorization_code|
|» grant_types|refresh_token|
|» response_types|code|

> Example responses

> 201 Response

```json
{
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "registration_type": "dynamic",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="register-oauth-client-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OAuth client created|[OAuthClientSchema](#schemaoauthclientschema)|
|400|Bad Request|HTTP Bad Request response. Can occur if the passed in JSON cannot be unmarshalled properly or when CAPTCHA verification was not successful. In certain cases can also occur when features are disabled on the server (e.g. sign ups). It may also mean that the operation failed due to some constraint not being met (such a user already exists for example).<br>|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Get OAuth client details (admin)

> Code samples

```bash
curl http://localhost:9999/admin/oauth/clients/string \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/oauth/clients/{client_id}`

Retrieves details of a specific OAuth client. Only available when OAuth server is enabled.


<h3 id="get-oauth-client-details-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "registration_type": "dynamic",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="get-oauth-client-details-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth client details|[OAuthClientSchema](#schemaoauthclientschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|OAuth client not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Update OAuth client (admin)

> Code samples

```bash
curl http://localhost:9999/admin/oauth/clients/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_name": "string",
    "client_uri": "http://example.com",
    "logo_uri": "http://example.com",
    "redirect_uris": [
      "http://example.com"
    ],
    "grant_types": [
      "authorization_code"
    ],
    "token_endpoint_auth_method": "none"
  }'
```

`PUT /admin/oauth/clients/{client_id}`

Updates an existing OAuth client registration. Only the provided fields will be updated. Only available when OAuth server is enabled.


> Body parameter

```json
{
  "client_name": "string",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "token_endpoint_auth_method": "none"
}
```

<h3 id="update-oauth-client-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|none|
|body|body|object|false|none|
|» client_name|body|string|false|Human-readable name of the client application|
|» client_uri|body|string(uri)|false|URL of the client application's homepage|
|» logo_uri|body|string(uri)|false|URL of the client application's logo|
|» redirect_uris|body|[string(uri)]|false|Array of redirect URIs used by the client|
|» grant_types|body|[string]|false|OAuth grant types the client is authorized to use|
|» token_endpoint_auth_method|body|string|false|Authentication method for the token endpoint. Must be compatible with the client's current client_type. Confidential clients can use 'client_secret_basic' or 'client_secret_post'. Public clients can only use 'none'.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_types|authorization_code|
|» grant_types|refresh_token|
|» token_endpoint_auth_method|none|
|» token_endpoint_auth_method|client_secret_basic|
|» token_endpoint_auth_method|client_secret_post|

> Example responses

> 200 Response

```json
{
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "registration_type": "dynamic",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="update-oauth-client-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth client updated successfully|[OAuthClientSchema](#schemaoauthclientschema)|
|400|Bad Request|Bad request - validation failed or no fields provided for update|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|OAuth client not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Delete OAuth client (admin)

> Code samples

```bash
curl http://localhost:9999/admin/oauth/clients/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/oauth/clients/{client_id}`

Removes an OAuth client registration. Only available when OAuth server is enabled.


<h3 id="delete-oauth-client-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="delete-oauth-client-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OAuth client deleted|None|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|OAuth client not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Regenerate OAuth client secret (admin)

> Code samples

```bash
curl http://localhost:9999/admin/oauth/clients/string/regenerate_secret \
  -X POST \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/oauth/clients/{client_id}/regenerate_secret`

Regenerates the client secret for a confidential OAuth client. Only available when OAuth server is enabled. This endpoint can only be used for confidential clients, not public clients.


<h3 id="regenerate-oauth-client-secret-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "registration_type": "dynamic",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="regenerate-oauth-client-secret-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth client secret regenerated successfully|[OAuthClientSchema](#schemaoauthclientschema)|
|400|Bad Request|Bad request - cannot regenerate secret for public client|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|OAuth client not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## List all custom OIDC/OAuth providers

> Code samples

```bash
curl http://localhost:9999/admin/custom-providers \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/custom-providers`

Retrieves a list of all custom OAuth 2.0 and OIDC provider configurations. Optionally filter by provider type. Only available when custom OIDC/OAuth providers are enabled (set `GOTRUE_CUSTOM_OAUTH_ENABLED=true` for self-hosted or enable in Supabase Dashboard).


<h3 id="list-all-custom-oidcoauth-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Filter by provider type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|oauth2|
|type|oidc|

> Example responses

> 200 Response

```json
{
  "providers": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "provider_type": "oauth2",
      "identifier": "custom:mycompany",
      "name": "My Company SSO",
      "client_id": "string",
      "acceptable_client_ids": [
        "string"
      ],
      "scopes": [
        "openid",
        "email",
        "profile"
      ],
      "pkce_enabled": true,
      "attribute_mapping": {
        "email": "user_email",
        "name": "full_name"
      },
      "custom_claims_allowlist": [
        "groups",
        "org_id"
      ],
      "authorization_params": {
        "prompt": "consent"
      },
      "enabled": true,
      "email_optional": false,
      "issuer": "https://accounts.google.com",
      "discovery_url": "http://example.com",
      "skip_nonce_check": false,
      "authorization_url": "http://example.com",
      "token_url": "http://example.com",
      "userinfo_url": "http://example.com",
      "jwks_uri": "http://example.com",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "error_code": "validation_failed",
  "msg": "type must be either 'oauth2' or 'oidc'"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="list-all-custom-oidcoauth-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of custom OIDC/OAuth providers|Inline|
|400|Bad Request|Invalid type parameter|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<h3 id="list-all-custom-oidcoauth-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[CustomOAuthProviderSchema](#schemacustomoauthproviderschema)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Create a new custom OIDC/OAuth provider

> Code samples

```bash
curl http://localhost:9999/admin/custom-providers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider_type": "oidc",
    "identifier": "mycompany",
    "name": "My Company SSO",
    "client_id": "your-client-id",
    "client_secret": "your-client-secret",
    "issuer": "https://accounts.mycompany.com",
    "scopes": [
      "email",
      "profile"
    ]
  }'
```

`POST /admin/custom-providers`

Creates a new custom OAuth 2.0 or OIDC provider configuration. Required fields differ based on provider_type. Only available when custom OIDC/OAuth providers are enabled. For OIDC providers, the server fetches and validates the OpenID Connect discovery document from the issuer's well-known endpoint (or the provided discovery_url) at creation time. This ensures the issuer is reachable and correctly configured before the provider is stored.


> Body parameter

```json
{
  "provider_type": "oidc",
  "identifier": "mycompany",
  "name": "My Company SSO",
  "client_id": "your-client-id",
  "client_secret": "your-client-secret",
  "issuer": "https://accounts.mycompany.com",
  "scopes": [
    "email",
    "profile"
  ]
}
```

<h3 id="create-a-new-custom-oidcoauth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» provider_type|body|string|true|Type of OAuth provider|
|» identifier|body|string|true|Unique identifier (will be prefixed with 'custom:' automatically). Cannot use reserved provider names.|
|» name|body|string|true|Human-readable display name|
|» client_id|body|string|true|OAuth client ID from the provider|
|» client_secret|body|string|true|OAuth client secret (will be encrypted at rest)|
|» acceptable_client_ids|body|[string]|false|Additional acceptable client IDs for token validation|
|» scopes|body|[string]|false|OAuth scopes to request (OIDC providers will automatically include 'openid')|
|» pkce_enabled|body|boolean|false|Enable PKCE (Proof Key for Code Exchange)|
|» attribute_mapping|body|object|false|Map provider claims to user attributes (cannot map to protected system fields)|
|» custom_claims_allowlist|body|[string]|false|Raw IdP claim keys to copy verbatim into the user's custom_claims (e.g. groups, org_id). For OIDC providers these are read from the ID token claims (falling back to the userinfo response when no ID token is returned); for OAuth2 providers they are read from the userinfo response. Empty preserves no non-standard claims.|
|» authorization_params|body|object|false|Additional authorization request parameters as string key-value pairs (cannot override reserved OAuth parameters)|
|» » **additionalProperties**|body|string|false|none|
|» enabled|body|boolean|false|Whether the provider is enabled|
|» email_optional|body|boolean|false|Whether email is optional for users from this provider|
|» issuer|body|string(uri)|false|OIDC issuer URL (required for provider_type: oidc)|
|» discovery_url|body|string(uri)|false|OIDC discovery URL (optional for OIDC, defaults to {issuer}/.well-known/openid-configuration)|
|» skip_nonce_check|body|boolean|false|Skip nonce validation for OIDC (not recommended for production)|
|» authorization_url|body|string(uri)|false|OAuth 2.0 authorization endpoint (required for provider_type: oauth2)|
|» token_url|body|string(uri)|false|OAuth 2.0 token endpoint (required for provider_type: oauth2)|
|» userinfo_url|body|string(uri)|false|OAuth 2.0 userinfo endpoint (required for provider_type: oauth2)|
|» jwks_uri|body|string(uri)|false|JWKS URI for token validation (optional for OAuth2)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider_type|oauth2|
|» provider_type|oidc|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider_type": "oauth2",
  "identifier": "custom:mycompany",
  "name": "My Company SSO",
  "client_id": "string",
  "acceptable_client_ids": [
    "string"
  ],
  "scopes": [
    "openid",
    "email",
    "profile"
  ],
  "pkce_enabled": true,
  "attribute_mapping": {
    "email": "user_email",
    "name": "full_name"
  },
  "custom_claims_allowlist": [
    "groups",
    "org_id"
  ],
  "authorization_params": {
    "prompt": "consent"
  },
  "enabled": true,
  "email_optional": false,
  "issuer": "https://accounts.google.com",
  "discovery_url": "http://example.com",
  "skip_nonce_check": false,
  "authorization_url": "http://example.com",
  "token_url": "http://example.com",
  "userinfo_url": "http://example.com",
  "jwks_uri": "http://example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error_code": "validation_failed",
  "msg": "issuer is required for OIDC providers"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="create-a-new-custom-oidcoauth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Custom OIDC/OAuth provider created successfully|[CustomOAuthProviderSchema](#schemacustomoauthproviderschema)|
|400|Bad Request|Bad request - validation failed, provider exists, or quota exceeded|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Get custom OIDC/OAuth provider details

> Code samples

```bash
curl http://localhost:9999/admin/custom-providers/custom%3Amycompany \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/custom-providers/{identifier}`

Retrieves details of a specific custom OIDC/OAuth provider. Only available when custom OIDC/OAuth providers are enabled.


<h3 id="get-custom-oidcoauth-provider-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|Provider identifier (must start with 'custom:' prefix)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider_type": "oauth2",
  "identifier": "custom:mycompany",
  "name": "My Company SSO",
  "client_id": "string",
  "acceptable_client_ids": [
    "string"
  ],
  "scopes": [
    "openid",
    "email",
    "profile"
  ],
  "pkce_enabled": true,
  "attribute_mapping": {
    "email": "user_email",
    "name": "full_name"
  },
  "custom_claims_allowlist": [
    "groups",
    "org_id"
  ],
  "authorization_params": {
    "prompt": "consent"
  },
  "enabled": true,
  "email_optional": false,
  "issuer": "https://accounts.google.com",
  "discovery_url": "http://example.com",
  "skip_nonce_check": false,
  "authorization_url": "http://example.com",
  "token_url": "http://example.com",
  "userinfo_url": "http://example.com",
  "jwks_uri": "http://example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error_code": "validation_failed",
  "msg": "identifier must start with 'custom:' prefix"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error_code": "custom_provider_not_found",
  "msg": "Custom OAuth provider not found"
}
```

<h3 id="get-custom-oidcoauth-provider-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom OIDC/OAuth provider details|[CustomOAuthProviderSchema](#schemacustomoauthproviderschema)|
|400|Bad Request|Invalid identifier format|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|Provider not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Update custom OIDC/OAuth provider

> Code samples

```bash
curl http://localhost:9999/admin/custom-providers/custom%3Amycompany \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Updated Company Name"
  }'
```

`PUT /admin/custom-providers/{identifier}`

Updates an existing custom OIDC/OAuth provider. All fields are optional. Only provided fields will be updated. Only available when custom OIDC/OAuth providers are enabled. When `issuer` or `discovery_url` is changed on an OIDC provider, the server re-fetches and validates the discovery document before persisting.


> Body parameter

```json
{
  "name": "Updated Company Name"
}
```

<h3 id="update-custom-oidcoauth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|Provider identifier (must start with 'custom:' prefix)|
|body|body|object|true|none|
|» name|body|string|false|Human-readable display name|
|» client_id|body|string|false|OAuth client ID|
|» client_secret|body|string|false|OAuth client secret (only provide if changing, will be encrypted)|
|» acceptable_client_ids|body|[string]|false|Additional acceptable client IDs|
|» scopes|body|[string]|false|OAuth scopes to request|
|» pkce_enabled|body|boolean|false|Enable PKCE|
|» attribute_mapping|body|object|false|Map provider claims to user attributes|
|» custom_claims_allowlist|body|[string]|false|Raw IdP claim keys to copy verbatim into the user's custom_claims (e.g. groups, org_id). For OIDC providers these are read from the ID token claims (falling back to the userinfo response when no ID token is returned); for OAuth2 providers they are read from the userinfo response. Empty preserves no non-standard claims.|
|» authorization_params|body|object|false|Additional authorization request parameters as string key-value pairs|
|» » **additionalProperties**|body|string|false|none|
|» enabled|body|boolean|false|Whether the provider is enabled|
|» email_optional|body|boolean|false|Whether email is optional|
|» issuer|body|string(uri)|false|OIDC issuer URL (for OIDC providers)|
|» discovery_url|body|string(uri)|false|OIDC discovery URL (for OIDC providers)|
|» skip_nonce_check|body|boolean|false|Skip nonce validation for OIDC|
|» authorization_url|body|string(uri)|false|OAuth 2.0 authorization endpoint (for OAuth2 providers)|
|» token_url|body|string(uri)|false|OAuth 2.0 token endpoint (for OAuth2 providers)|
|» userinfo_url|body|string(uri)|false|OAuth 2.0 userinfo endpoint (for OAuth2 providers)|
|» jwks_uri|body|string(uri)|false|JWKS URI for token validation (for OAuth2 providers)|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider_type": "oauth2",
  "identifier": "custom:mycompany",
  "name": "My Company SSO",
  "client_id": "string",
  "acceptable_client_ids": [
    "string"
  ],
  "scopes": [
    "openid",
    "email",
    "profile"
  ],
  "pkce_enabled": true,
  "attribute_mapping": {
    "email": "user_email",
    "name": "full_name"
  },
  "custom_claims_allowlist": [
    "groups",
    "org_id"
  ],
  "authorization_params": {
    "prompt": "consent"
  },
  "enabled": true,
  "email_optional": false,
  "issuer": "https://accounts.google.com",
  "discovery_url": "http://example.com",
  "skip_nonce_check": false,
  "authorization_url": "http://example.com",
  "token_url": "http://example.com",
  "userinfo_url": "http://example.com",
  "jwks_uri": "http://example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error_code": "validation_failed",
  "msg": "identifier must start with 'custom:' prefix"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

<h3 id="update-custom-oidcoauth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom OIDC/OAuth provider updated successfully|[CustomOAuthProviderSchema](#schemacustomoauthproviderschema)|
|400|Bad Request|Invalid identifier, validation failed, or OIDC discovery validation failed|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|Provider not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

## Delete custom OIDC/OAuth provider

> Code samples

```bash
curl http://localhost:9999/admin/custom-providers/custom%3Amycompany \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/custom-providers/{identifier}`

Permanently removes a custom OIDC/OAuth provider configuration. Only available when custom OIDC/OAuth providers are enabled.


<h3 id="delete-custom-oidcoauth-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identifier|path|string|true|Provider identifier (must start with 'custom:' prefix)|

> Example responses

> 400 Response

```json
{
  "error_code": "validation_failed",
  "msg": "identifier must start with 'custom:' prefix"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 403 Response

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

> 404 Response

```json
{
  "error_code": "custom_provider_not_found",
  "msg": "Custom OAuth provider not found"
}
```

<h3 id="delete-custom-oidcoauth-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Custom OIDC/OAuth provider deleted successfully (no content)|None|
|400|Bad Request|Invalid identifier format|[ErrorSchema](#schemaerrorschema)|
|401|Unauthorized|HTTP Unauthorized response.<br>|[ErrorSchema](#schemaerrorschema)|
|403|Forbidden|HTTP Forbidden response.<br>|[ErrorSchema](#schemaerrorschema)|
|404|Not Found|Provider not found|[ErrorSchema](#schemaerrorschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth & AdminAuth
</aside>

<h1 id="supabase-auth-rest-api-general">general</h1>

General APIs.

## Service healthcheck.

> Code samples

```bash
curl http://localhost:9999/health \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /health`

Ping this endpoint to receive information about the health of the service.

> Example responses

> 200 Response

```json
{
  "version": "v2.40.1",
  "name": "GoTrue",
  "description": "GoTrue is a user registration and authentication API"
}
```

<h3 id="service-healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service is healthy.<br>|Inline|
|500|Internal Server Error|Service is not healthy. Retriable with exponential backoff.<br>|None|
|502|Bad Gateway|Service is not healthy: infrastructure issue. Usually not retriable.<br>|None|
|503|Service Unavailable|Service is not healthy: infrastrucutre issue. Retriable with exponential backoff.<br>|None|
|504|Gateway Timeout|Service is not healthy: request timed out. Retriable with exponential backoff.<br>|None|

<h3 id="service-healthcheck-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

## Retrieve some of the public settings of the server.

> Code samples

```bash
curl http://localhost:9999/settings \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /settings`

Use this endpoint to configure parts of any authentication UIs depending on the configured settings.


> Example responses

> 200 Response

```json
{
  "disable_signup": false,
  "mailer_autoconfirm": false,
  "phone_autoconfirm": false,
  "sms_provider": "twilio",
  "saml_enabled": true,
  "external": {
    "github": true,
    "apple": true,
    "email": true,
    "phone": true
  }
}
```

<h3 id="retrieve-some-of-the-public-settings-of-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Currently applicable settings of the server.<br>|Inline|

<h3 id="retrieve-some-of-the-public-settings-of-the-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable_signup|boolean|false|none|Whether new accounts can be created. (Valid for all providers.)|
|mailer_autoconfirm|boolean|false|none|Whether new email addresses need to be confirmed before sign-in is possible.|
|phone_autoconfirm|boolean|false|none|Whether new phone numbers need to be confirmed before sign-in is possible.|
|sms_provider|string|false|none|Which SMS provider is being used to send messages to phone numbers.|
|saml_enabled|boolean|false|none|Whether SAML is enabled on this API server. Defaults to false.|
|external|object|false|none|Which external identity providers are enabled.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKeyAuth
</aside>

# Schemas

<h2 id="tocS_GoTrueSecurity">GoTrueSecurity</h2>
<!-- backwards compatibility -->
<a id="schemagotruesecurity"></a>
<a id="schema_GoTrueSecurity"></a>
<a id="tocSgotruesecurity"></a>
<a id="tocsgotruesecurity"></a>

```json
{
  "captcha_token": "string"
}
```

Use this property to pass a CAPTCHA token only if you have enabled CAPTCHA protection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captcha_token|string|false|none|none|

<h2 id="tocS_ErrorSchema">ErrorSchema</h2>
<!-- backwards compatibility -->
<a id="schemaerrorschema"></a>
<a id="schema_ErrorSchema"></a>
<a id="tocSerrorschema"></a>
<a id="tocserrorschema"></a>

```json
{
  "error": "string",
  "error_description": "string",
  "code": 400,
  "msg": "string",
  "error_code": "string",
  "weak_password": {
    "reasons": [
      "length"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Certain responses will contain this property with the provided values.<br><br>Usually one of these:<br>  - invalid_request<br>  - unauthorized_client<br>  - access_denied<br>  - server_error<br>  - temporarily_unavailable<br>  - unsupported_otp_type|
|error_description|string|false|none|Certain responses that have an `error` property may have this property which describes the error.<br>|
|code|integer|false|none|The HTTP status code. Usually missing if `error` is present.<br>|
|msg|string|false|none|A basic message describing the problem with the request. Usually missing if `error` is present.<br>|
|error_code|string|false|none|A short code used to describe the class of error encountered.<br>|
|weak_password|object|false|none|Only returned on the `/signup` endpoint if the password used is too weak. Inspect the `reasons` and `msg` property to identify the causes.<br>|

<h2 id="tocS_UserSchema">UserSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserschema"></a>
<a id="schema_UserSchema"></a>
<a id="tocSuserschema"></a>
<a id="tocsuserschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "aud": "string",
  "role": "string",
  "email": "string",
  "email_confirmed_at": "1970-01-01T00:00:00Z",
  "phone": "string",
  "phone_confirmed_at": "1970-01-01T00:00:00Z",
  "confirmation_sent_at": "1970-01-01T00:00:00Z",
  "confirmed_at": "1970-01-01T00:00:00Z",
  "recovery_sent_at": "1970-01-01T00:00:00Z",
  "new_email": "user@example.com",
  "email_change_sent_at": "1970-01-01T00:00:00Z",
  "new_phone": "string",
  "phone_change_sent_at": "1970-01-01T00:00:00Z",
  "reauthentication_sent_at": "1970-01-01T00:00:00Z",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "app_metadata": {},
  "user_metadata": {},
  "factors": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "string",
      "friendly_name": "string",
      "factor_type": "string",
      "webauthn_credential": "string",
      "phone": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "last_challenged_at": "1970-01-01T00:00:00Z"
    }
  ],
  "identities": [
    {
      "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "identity_data": {},
      "provider": "string",
      "last_sign_in_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "user@example.com"
    }
  ],
  "banned_until": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z",
  "is_anonymous": true
}
```

Object describing the user related to the issued access and refresh tokens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|aud|string|false|none|**Deprecated.**|
|role|string|false|none|none|
|email|string|false|none|User's primary contact email. In most cases you can uniquely identify a user by their email address, but not in all cases.|
|email_confirmed_at|string(date-time)|false|none|none|
|phone|string(phone)|false|none|User's primary contact phone number. In most cases you can uniquely identify a user by their phone number, but not in all cases.|
|phone_confirmed_at|string(date-time)|false|none|none|
|confirmation_sent_at|string(date-time)|false|none|none|
|confirmed_at|string(date-time)|false|none|none|
|recovery_sent_at|string(date-time)|false|none|none|
|new_email|string(email)|false|none|none|
|email_change_sent_at|string(date-time)|false|none|none|
|new_phone|string(phone)|false|none|none|
|phone_change_sent_at|string(date-time)|false|none|none|
|reauthentication_sent_at|string(date-time)|false|none|none|
|last_sign_in_at|string(date-time)|false|none|none|
|app_metadata|object|false|none|none|
|user_metadata|object|false|none|none|
|factors|[[MFAFactorSchema](#schemamfafactorschema)]|false|none|none|
|identities|[[IdentitySchema](#schemaidentityschema)]|false|none|none|
|banned_until|string(date-time)|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|deleted_at|string(date-time)|false|none|none|
|is_anonymous|boolean|false|none|none|

<h2 id="tocS_SAMLAttributeMappingSchema">SAMLAttributeMappingSchema</h2>
<!-- backwards compatibility -->
<a id="schemasamlattributemappingschema"></a>
<a id="schema_SAMLAttributeMappingSchema"></a>
<a id="tocSsamlattributemappingschema"></a>
<a id="tocssamlattributemappingschema"></a>

```json
{
  "keys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|object|false|none|none|

<h2 id="tocS_SSOProviderSchema">SSOProviderSchema</h2>
<!-- backwards compatibility -->
<a id="schemassoproviderschema"></a>
<a id="schema_SSOProviderSchema"></a>
<a id="tocSssoproviderschema"></a>
<a id="tocsssoproviderschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sso_domains": [
    {
      "domain": "example.com"
    }
  ],
  "saml": {
    "entity_id": "string",
    "metadata_xml": "string",
    "metadata_url": "string",
    "attribute_mapping": {
      "keys": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|sso_domains|[object]|false|none|none|
|saml|object|false|none|none|

<h2 id="tocS_AccessTokenResponseSchema">AccessTokenResponseSchema</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenresponseschema"></a>
<a id="schema_AccessTokenResponseSchema"></a>
<a id="tocSaccesstokenresponseschema"></a>
<a id="tocsaccesstokenresponseschema"></a>

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "token_type": "string",
  "expires_in": 0,
  "expires_at": 0,
  "weak_password": {
    "reasons": [
      "length"
    ],
    "message": "string"
  },
  "user": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "aud": "string",
    "role": "string",
    "email": "string",
    "email_confirmed_at": "1970-01-01T00:00:00Z",
    "phone": "string",
    "phone_confirmed_at": "1970-01-01T00:00:00Z",
    "confirmation_sent_at": "1970-01-01T00:00:00Z",
    "confirmed_at": "1970-01-01T00:00:00Z",
    "recovery_sent_at": "1970-01-01T00:00:00Z",
    "new_email": "user@example.com",
    "email_change_sent_at": "1970-01-01T00:00:00Z",
    "new_phone": "string",
    "phone_change_sent_at": "1970-01-01T00:00:00Z",
    "reauthentication_sent_at": "1970-01-01T00:00:00Z",
    "last_sign_in_at": "1970-01-01T00:00:00Z",
    "app_metadata": {},
    "user_metadata": {},
    "factors": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "status": "string",
        "friendly_name": "string",
        "factor_type": "string",
        "webauthn_credential": "string",
        "phone": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "last_challenged_at": "1970-01-01T00:00:00Z"
      }
    ],
    "identities": [
      {
        "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "identity_data": {},
        "provider": "string",
        "last_sign_in_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "email": "user@example.com"
      }
    ],
    "banned_until": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "deleted_at": "1970-01-01T00:00:00Z",
    "is_anonymous": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|A valid JWT that will expire in `expires_in` seconds.|
|refresh_token|string|false|none|An opaque string that can be used once to obtain a new access and refresh token.|
|token_type|string|false|none|What type of token this is. Only `bearer` returned, may change in the future.|
|expires_in|integer|false|none|Number of seconds after which the `access_token` should be renewed by using the refresh token with the `refresh_token` grant type.|
|expires_at|integer|false|none|UNIX timestamp after which the `access_token` should be renewed by using the refresh token with the `refresh_token` grant type.|
|weak_password|object|false|none|Only returned on the `/token?grant_type=password` endpoint. When present, it indicates that the password used is weak. Inspect the `reasons` and/or `message` properties to identify why.|
|user|[UserSchema](#schemauserschema)|false|none|Object describing the user related to the issued access and refresh tokens.|

<h2 id="tocS_MFAFactorSchema">MFAFactorSchema</h2>
<!-- backwards compatibility -->
<a id="schemamfafactorschema"></a>
<a id="schema_MFAFactorSchema"></a>
<a id="tocSmfafactorschema"></a>
<a id="tocsmfafactorschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "string",
  "friendly_name": "string",
  "factor_type": "string",
  "webauthn_credential": "string",
  "phone": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "last_challenged_at": "1970-01-01T00:00:00Z"
}
```

Represents a MFA factor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|status|string|false|none|Usually one of:<br>- verified<br>- unverified|
|friendly_name|string|false|none|none|
|factor_type|string|false|none|Usually one of:<br>- totp<br>- phone<br>- webauthn<br>- recovery_code|
|webauthn_credential|string|false|none|none|
|phone|string(phone) \| null|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|last_challenged_at|string(date-time) \| null|false|none|none|

<h2 id="tocS_MFARecoveryCodesStatusSchema">MFARecoveryCodesStatusSchema</h2>
<!-- backwards compatibility -->
<a id="schemamfarecoverycodesstatusschema"></a>
<a id="schema_MFARecoveryCodesStatusSchema"></a>
<a id="tocSmfarecoverycodesstatusschema"></a>
<a id="tocsmfarecoverycodesstatusschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "total": 10,
  "remaining": 9
}
```

Enrollment status of the user's MFA recovery codes. Never contains code values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the user's `recovery_code` factor.|
|type|string|false|none|Always `recovery_code`.|
|total|integer|false|none|Number of codes in the current set.|
|remaining|integer|false|none|Number of codes in the current set that have not been used yet.|

<h2 id="tocS_MFARecoveryCodesSchema">MFARecoveryCodesSchema</h2>
<!-- backwards compatibility -->
<a id="schemamfarecoverycodesschema"></a>
<a id="schema_MFARecoveryCodesSchema"></a>
<a id="tocSmfarecoverycodesschema"></a>
<a id="tocsmfarecoverycodesschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "string",
  "friendly_name": "Recovery codes",
  "total": 10,
  "codes": [
    "k4m9x7qp2ab8ht3z"
  ]
}
```

A freshly generated set of MFA recovery codes. Returned only by `POST /factors/recovery-codes` and `POST /factors/recovery-codes/regenerate`; the codes cannot be retrieved afterwards.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|ID of the user's `recovery_code` factor.|
|type|string|false|none|Always `recovery_code`.|
|friendly_name|string|false|none|none|
|total|integer|false|none|Number of codes in the set.|
|codes|[string]|false|none|The plaintext single-use codes in canonical form (16 characters by default). Show them to the user once.<br>|

<h2 id="tocS_IdentitySchema">IdentitySchema</h2>
<!-- backwards compatibility -->
<a id="schemaidentityschema"></a>
<a id="schema_IdentitySchema"></a>
<a id="tocSidentityschema"></a>
<a id="tocsidentityschema"></a>

```json
{
  "identity_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "identity_data": {},
  "provider": "string",
  "last_sign_in_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "email": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity_id|string(uuid)|false|none|none|
|id|string(uuid)|false|none|none|
|user_id|string(uuid)|false|none|none|
|identity_data|object|false|none|none|
|provider|string|false|none|none|
|last_sign_in_at|string(date-time)|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|
|email|string(email)|false|none|none|

<h2 id="tocS_TOTPPhoneChallengeResponse">TOTPPhoneChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schematotpphonechallengeresponse"></a>
<a id="schema_TOTPPhoneChallengeResponse"></a>
<a id="tocStotpphonechallengeresponse"></a>
<a id="tocstotpphonechallengeresponse"></a>

```json
{
  "id": "14c1560e-2749-4522-bb62-d1458451830a",
  "type": "totp",
  "expires_at": 1674840917
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|ID of the challenge.|
|type|string|true|none|Type of the challenge.|
|expires_at|integer|true|none|UNIX seconds of the timestamp past which the challenge should not be verified.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|totp|
|type|phone|

<h2 id="tocS_WebAuthnChallengeResponse">WebAuthnChallengeResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebauthnchallengeresponse"></a>
<a id="schema_WebAuthnChallengeResponse"></a>
<a id="tocSwebauthnchallengeresponse"></a>
<a id="tocswebauthnchallengeresponse"></a>

```json
{
  "id": "14c1560e-2749-4522-bb62-d1458451830a",
  "type": "webauthn",
  "expires_at": 1674840917,
  "webauthn": {
    "type": "create",
    "credential_options": {
      "publicKey": {
        "rp": {
          "id": "string",
          "name": "string"
        },
        "user": {
          "id": "string",
          "name": "string",
          "displayName": "string"
        },
        "challenge": "string",
        "pubKeyCredParams": [
          {
            "type": "public-key",
            "alg": 0
          }
        ],
        "timeout": 0,
        "excludeCredentials": [
          {
            "type": "public-key",
            "id": "string",
            "transports": [
              "usb"
            ]
          }
        ],
        "authenticatorSelection": {
          "authenticatorAttachment": "platform",
          "requireResidentKey": true,
          "residentKey": "required",
          "userVerification": "required"
        },
        "attestation": "none",
        "attestationFormats": [
          "string"
        ],
        "hints": [
          "security-key"
        ],
        "extensions": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|ID of the challenge.|
|type|string|true|none|Type of the challenge.|
|expires_at|integer|false|none|UNIX seconds of the timestamp past which the challenge should not be verified.|
|webauthn|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|webauthn|

<h2 id="tocS_CredentialRequestOptions">CredentialRequestOptions</h2>
<!-- backwards compatibility -->
<a id="schemacredentialrequestoptions"></a>
<a id="schema_CredentialRequestOptions"></a>
<a id="tocScredentialrequestoptions"></a>
<a id="tocscredentialrequestoptions"></a>

```json
{
  "challenge": "string",
  "timeout": 0,
  "rpId": "string",
  "allowCredentials": [
    {
      "type": "public-key",
      "id": "string",
      "transports": [
        "usb"
      ]
    }
  ],
  "userVerification": "required",
  "hints": [
    "security-key"
  ],
  "extensions": {}
}
```

PublicKeyCredentialRequestOptions for WebAuthn authentication

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|challenge|string(base64url)|true|none|A challenge to be signed by the authenticator|
|timeout|integer|false|none|Time (in milliseconds) that the caller is willing to wait for the call to complete|
|rpId|string|false|none|Relying Party ID|
|allowCredentials|[[PublicKeyCredentialDescriptor](#schemapublickeycredentialdescriptor)]|false|none|List of acceptable credentials for authentication|
|userVerification|string|false|none|User verification requirement|
|hints|[string]|false|none|Hints for the browser about what types of authenticators to show|
|extensions|object|false|none|WebAuthn extensions to enable|

#### Enumerated Values

|Property|Value|
|---|---|
|userVerification|required|
|userVerification|preferred|
|userVerification|discouraged|
|hints|security-key|
|hints|client-device|
|hints|hybrid|

<h2 id="tocS_CredentialCreationOptions">CredentialCreationOptions</h2>
<!-- backwards compatibility -->
<a id="schemacredentialcreationoptions"></a>
<a id="schema_CredentialCreationOptions"></a>
<a id="tocScredentialcreationoptions"></a>
<a id="tocscredentialcreationoptions"></a>

```json
{
  "rp": {
    "id": "string",
    "name": "string"
  },
  "user": {
    "id": "string",
    "name": "string",
    "displayName": "string"
  },
  "challenge": "string",
  "pubKeyCredParams": [
    {
      "type": "public-key",
      "alg": 0
    }
  ],
  "timeout": 0,
  "excludeCredentials": [
    {
      "type": "public-key",
      "id": "string",
      "transports": [
        "usb"
      ]
    }
  ],
  "authenticatorSelection": {
    "authenticatorAttachment": "platform",
    "requireResidentKey": true,
    "residentKey": "required",
    "userVerification": "required"
  },
  "attestation": "none",
  "attestationFormats": [
    "string"
  ],
  "hints": [
    "security-key"
  ],
  "extensions": {}
}
```

PublicKeyCredentialCreationOptions for WebAuthn registration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rp|object|true|none|none|
|user|object|true|none|none|
|challenge|string(base64url)|true|none|A challenge to be signed by the authenticator|
|pubKeyCredParams|[object]|true|none|List of supported public key algorithms|
|timeout|integer|false|none|Time (in milliseconds) that the caller is willing to wait for the call to complete|
|excludeCredentials|[[PublicKeyCredentialDescriptor](#schemapublickeycredentialdescriptor)]|false|none|List of credentials to exclude (prevent re-registration)|
|authenticatorSelection|object|false|none|none|
|attestation|string|false|none|Attestation conveyance preference|
|attestationFormats|[string]|false|none|Preferred attestation statement formats|
|hints|[string]|false|none|Hints for the browser about what types of authenticators to show|
|extensions|object|false|none|WebAuthn extensions to enable|

#### Enumerated Values

|Property|Value|
|---|---|
|attestation|none|
|attestation|indirect|
|attestation|direct|
|attestation|enterprise|
|hints|security-key|
|hints|client-device|
|hints|hybrid|

<h2 id="tocS_PublicKeyCredentialDescriptor">PublicKeyCredentialDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemapublickeycredentialdescriptor"></a>
<a id="schema_PublicKeyCredentialDescriptor"></a>
<a id="tocSpublickeycredentialdescriptor"></a>
<a id="tocspublickeycredentialdescriptor"></a>

```json
{
  "type": "public-key",
  "id": "string",
  "transports": [
    "usb"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Credential type|
|id|string(base64url)|true|none|Credential ID|
|transports|[string]|false|none|Supported transports for this credential|

#### Enumerated Values

|Property|Value|
|---|---|
|type|public-key|
|transports|usb|
|transports|nfc|
|transports|ble|
|transports|internal|
|transports|hybrid|

<h2 id="tocS_OAuthClientSchema">OAuthClientSchema</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclientschema"></a>
<a id="schema_OAuthClientSchema"></a>
<a id="tocSoauthclientschema"></a>
<a id="tocsoauthclientschema"></a>

```json
{
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_type": "public",
  "token_endpoint_auth_method": "none",
  "registration_type": "dynamic",
  "client_uri": "http://example.com",
  "logo_uri": "http://example.com",
  "redirect_uris": [
    "http://example.com"
  ],
  "grant_types": [
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "scope": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Represents an OAuth 2.1 client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Unique client identifier|
|client_name|string|false|none|Human-readable name of the client application|
|client_secret|string|false|none|Client secret for confidential clients (only returned on registration/regeneration)|
|client_type|string|false|none|Type of the client|
|token_endpoint_auth_method|string|false|none|Authentication method for the token endpoint|
|registration_type|string|false|none|Registration type of the client|
|client_uri|string(uri)|false|none|URL of the client application's homepage|
|logo_uri|string(uri)|false|none|URL of the client application's logo|
|redirect_uris|[string(uri)]|false|none|Array of redirect URIs used by the client|
|grant_types|[string]|false|none|OAuth grant types the client is authorized to use|
|response_types|[string]|false|none|OAuth response types the client can use|
|scope|string|false|none|Space-separated list of scope values|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|client_type|public|
|client_type|confidential|
|token_endpoint_auth_method|none|
|token_endpoint_auth_method|client_secret_basic|
|token_endpoint_auth_method|client_secret_post|
|registration_type|dynamic|
|registration_type|manual|
|grant_types|authorization_code|
|grant_types|refresh_token|
|response_types|code|

<h2 id="tocS_CustomOAuthProviderSchema">CustomOAuthProviderSchema</h2>
<!-- backwards compatibility -->
<a id="schemacustomoauthproviderschema"></a>
<a id="schema_CustomOAuthProviderSchema"></a>
<a id="tocScustomoauthproviderschema"></a>
<a id="tocscustomoauthproviderschema"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "provider_type": "oauth2",
  "identifier": "custom:mycompany",
  "name": "My Company SSO",
  "client_id": "string",
  "acceptable_client_ids": [
    "string"
  ],
  "scopes": [
    "openid",
    "email",
    "profile"
  ],
  "pkce_enabled": true,
  "attribute_mapping": {
    "email": "user_email",
    "name": "full_name"
  },
  "custom_claims_allowlist": [
    "groups",
    "org_id"
  ],
  "authorization_params": {
    "prompt": "consent"
  },
  "enabled": true,
  "email_optional": false,
  "issuer": "https://accounts.google.com",
  "discovery_url": "http://example.com",
  "skip_nonce_check": false,
  "authorization_url": "http://example.com",
  "token_url": "http://example.com",
  "userinfo_url": "http://example.com",
  "jwks_uri": "http://example.com",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Represents a custom OAuth 2.0 or OIDC provider configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique provider identifier|
|provider_type|string|true|none|Type of OAuth provider|
|identifier|string|true|none|Unique identifier for the provider (must start with 'custom:' prefix)|
|name|string|true|none|Human-readable name of the provider|
|client_id|string|true|none|OAuth client ID|
|acceptable_client_ids|[string]|false|none|Additional acceptable client IDs for token validation|
|scopes|[string]|false|none|OAuth scopes to request (OIDC providers will automatically include 'openid')|
|pkce_enabled|boolean|false|none|Whether PKCE (Proof Key for Code Exchange) is enabled|
|attribute_mapping|object|false|none|Maps provider claims to user attributes|
|custom_claims_allowlist|[string]|false|none|Raw IdP claim keys copied verbatim into the user's custom_claims (e.g. groups, org_id). For OIDC providers these are read from the ID token claims (falling back to the userinfo response when no ID token is returned); for OAuth2 providers they are read from the userinfo response. Empty preserves no non-standard claims.|
|authorization_params|object|false|none|Additional parameters to include in authorization requests as string key-value pairs (cannot override reserved OAuth parameters)|
|enabled|boolean|false|none|Whether the provider is enabled|
|email_optional|boolean|false|none|Whether email is optional for users from this provider|
|issuer|string(uri)|false|none|OIDC issuer URL (required for OIDC providers)|
|discovery_url|string(uri)|false|none|OIDC discovery URL (optional, defaults to {issuer}/.well-known/openid-configuration)|
|skip_nonce_check|boolean|false|none|Skip nonce validation for OIDC (not recommended for production)|
|authorization_url|string(uri)|false|none|OAuth 2.0 authorization endpoint (required for OAuth2 providers)|
|token_url|string(uri)|false|none|OAuth 2.0 token endpoint (required for OAuth2 providers)|
|userinfo_url|string(uri)|false|none|OAuth 2.0 userinfo endpoint (required for OAuth2 providers)|
|jwks_uri|string(uri)|false|none|JWKS URI for token validation (optional for OAuth2 providers)|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider_type|oauth2|
|provider_type|oidc|
