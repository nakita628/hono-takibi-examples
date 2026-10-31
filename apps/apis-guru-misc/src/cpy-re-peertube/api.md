<h1 id="peertube">PeerTube v5.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The PeerTube API is built on HTTP(S) and is RESTful. You can use your favorite
HTTP/REST library for your programming language to use PeerTube. The spec API is fully compatible with
[openapi-generator](https://github.com/OpenAPITools/openapi-generator/wiki/API-client-generator-HOWTO)
which generates a client SDK in the language of your choice - we generate some client SDKs automatically:

- [Python](https://framagit.org/framasoft/peertube/clients/python)
- [Go](https://framagit.org/framasoft/peertube/clients/go)
- [Kotlin](https://framagit.org/framasoft/peertube/clients/kotlin)

See the [REST API quick start](https://docs.joinpeertube.org/api/rest-getting-started) for a few
examples of using the PeerTube API.

# Authentication

When you sign up for an account on a PeerTube instance, you are given the possibility
to generate sessions on it, and authenticate there using an access token. Only __one
access token can currently be used at a time__.

## Roles

Accounts are given permissions based on their role. There are three roles on
PeerTube: Administrator, Moderator, and User. See the [roles guide](https://docs.joinpeertube.org/admin/managing-users#roles) for a detail of their permissions.

# Errors

The API uses standard HTTP status codes to indicate the success or failure
of the API call, completed by a [RFC7807-compliant](https://tools.ietf.org/html/rfc7807) response body.

```
HTTP 1.1 404 Not Found
Content-Type: application/problem+json; charset=utf-8

{
  "detail": "Video not found",
  "docs": "https://docs.joinpeertube.org/api/rest-reference.html#operation/getVideo",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

We provide error `type` values for [a growing number of cases](https://github.com/Chocobozzz/PeerTube/blob/develop/shared/models/server/server-error-code.enum.ts),
but it is still optional. Types are used to disambiguate errors that bear the same status code
and are non-obvious:

```
HTTP 1.1 403 Forbidden
Content-Type: application/problem+json; charset=utf-8

{
  "detail": "Cannot get this video regarding follow constraints",
  "docs": "https://docs.joinpeertube.org/api/rest-reference.html#operation/getVideo",
  "status": 403,
  "title": "Forbidden",
  "type": "https://docs.joinpeertube.org/api/rest-reference.html#section/Errors/does_not_respect_follow_constraints"
}
```

Here a 403 error could otherwise mean that the video is private or blocklisted.

### Validation errors

Each parameter is evaluated on its own against a set of rules before the route validator
proceeds with potential testing involving parameter combinations. Errors coming from validation
errors appear earlier and benefit from a more detailed error description:

```
HTTP 1.1 400 Bad Request
Content-Type: application/problem+json; charset=utf-8

{
  "detail": "Incorrect request parameters: id",
  "docs": "https://docs.joinpeertube.org/api/rest-reference.html#operation/getVideo",
  "instance": "/api/v1/videos/9c9de5e8-0a1e-484a-b099-e80766180",
  "invalid-params": {
    "id": {
      "location": "params",
      "msg": "Invalid value",
      "param": "id",
      "value": "9c9de5e8-0a1e-484a-b099-e80766180"
    }
  },
  "status": 400,
  "title": "Bad Request",
  "type": "about:blank"
}
```

Where `id` is the name of the field concerned by the error, within the route definition.
`invalid-params.<field>.location` can be either 'params', 'body', 'header', 'query' or 'cookies', and
`invalid-params.<field>.value` reports the value that didn't pass validation whose `invalid-params.<field>.msg`
is about.

### Deprecated error fields

Some fields could be included with previous versions. They are still included but their use is deprecated:
- `error`: superseded by `detail`
- `code`: superseded by `type` (which is now an URI)

# Rate limits

We are rate-limiting all endpoints of PeerTube's API. Custom values can be set by administrators:

| Endpoint (prefix: `/api/v1`) | Calls         | Time frame   |
|------------------------------|---------------|--------------|
| `/*`                         | 50            | 10 seconds   |
| `POST /users/token`          | 15            | 5 minutes    |
| `POST /users/register`       | 2<sup>*</sup> | 5 minutes    |
| `POST /users/ask-send-verify-email` | 3      | 5 minutes    |

Depending on the endpoint, <sup>*</sup>failed requests are not taken into account. A service
limit is announced by a `429 Too Many Requests` status code.

You can get details about the current state of your rate limit by reading the
following headers:

| Header                  | Description                                                |
|-------------------------|------------------------------------------------------------|
| `X-RateLimit-Limit`     | Number of max requests allowed in the current time period  |
| `X-RateLimit-Remaining` | Number of remaining requests in the current time period    |
| `X-RateLimit-Reset`     | Timestamp of end of current time period as UNIX timestamp  |
| `Retry-After`           | Seconds to delay after the first `429` is received         |

# CORS

This API features [Cross-Origin Resource Sharing (CORS)](https://fetch.spec.whatwg.org/),
allowing cross-domain communication from the browser for some routes:

| Endpoint                    |
|------------------------- ---|
| `/api/*`                    |
| `/download/*`               |
| `/lazy-static/*`            |
| `/.well-known/webfinger`    |

In addition, all routes serving ActivityPub are CORS-enabled for all origins.

Base URLs:

* <a href="https://peertube2.cpy.re">https://peertube2.cpy.re</a> - Live Test Server (live data - latest nightly version)

* <a href="https://peertube3.cpy.re">https://peertube3.cpy.re</a> - Live Test Server (live data - latest RC version)

* <a href="https://peertube.cpy.re">https://peertube.cpy.re</a> - Live Test Server (live data - stable version)

Web: <a href="https://joinpeertube.org">PeerTube Community</a> 
License: <a href="https://github.com/Chocobozzz/PeerTube/blob/master/LICENSE">AGPLv3.0</a>

<a href="https://docs.joinpeertube.org/api/rest-reference.html">External documentation</a>

# Authentication

- oAuth2 authentication. Authenticating via OAuth requires the following steps:
- Have an activated account
- [Generate] an access token for that account at `/api/v1/users/token`.
- Make requests with the *Authorization: Bearer <token\>* header
- Profit, depending on the role assigned to the account

Note that the __access token is valid for 1 day__ and is given
along with a __refresh token valid for 2 weeks__.

[Generate]: https://docs.joinpeertube.org/api/rest-getting-started

    - Flow: password
    - Token URL = [/api/v1/users/token](/api/v1/users/token)

|Scope|Scope Description|
|---|---|
|admin|Admin scope|
|moderator|Moderator scope|
|user|User scope|

<h1 id="peertube-register">Register</h1>

As a visitor, you can use this API to open an account (if registrations are open on
that PeerTube instance). As an admin, you should use the dedicated [User creation
API](#operation/addUser) instead.


## Register a user

<a id="opIdregisterUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "channel": {
      "displayName": "string",
      "name": "framasoft_videos"
    },
    "displayName": "string",
    "email": "user@example.com",
    "password": "password",
    "username": {}
  }'
```

`POST /api/v1/users/register`

Signup has to be enabled and signup approval is not required

> Body parameter

```json
{
  "channel": {
    "displayName": "string",
    "name": "framasoft_videos"
  },
  "displayName": "string",
  "email": "user@example.com",
  "password": "password",
  "username": {}
}
```

<h3 id="register-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterUser](#schemaregisteruser)|true|none|
|» channel|body|object|false|channel base information used to create the first channel of the user|
|» » displayName|body|string|false|none|
|» » name|body|[usernameChannel](#schemausernamechannel)|false|immutable name of the channel, used to interact with its actor|
|» displayName|body|string|false|editable name of the user, displayed in its representations|
|» email|body|string(email)|true|email of the user, used for login or service communications|
|» password|body|[password](#schemapassword)|true|none|
|» username|body|object|true|immutable name of the user, used to find or mention its actor|

<h3 id="register-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|request error|None|
|403|Forbidden|user registration is not enabled, user limit is reached, registration is not allowed for the ip, requires approval or blocked by a plugin|None|
|409|Conflict|a user with this username, channel name or email already exists|None|

<aside class="success">
This operation does not require authentication
</aside>

## List registrations

<a id="opIdlistRegistrations"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/registrations`

<h3 id="list-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|search|query|string|false|none|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-createdAt|
|sort|createdAt|
|sort|state|
|sort|-state|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "accountDisplayName": "string",
      "channelDisplayName": "string",
      "channelHandle": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "email": "user@example.com",
      "emailVerified": true,
      "id": 42,
      "moderationResponse": "string",
      "registrationReason": "string",
      "state": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "user": {
        "id": 42
      },
      "username": "string"
    }
  ],
  "total": 1
}
```

<h3 id="list-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-registrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserRegistration](#schemauserregistration)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Resend verification link to registration email

<a id="opIdresendEmailToVerifyRegistration"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations/ask-send-verify-email \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string"
  }'
```

`POST /api/v1/users/registrations/ask-send-verify-email`

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="resend-verification-link-to-registration-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|Registration email|

<h3 id="resend-verification-link-to-registration-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Request registration

<a id="opIdrequestRegistration"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel": {
      "displayName": "string",
      "name": "framasoft_videos"
    },
    "displayName": "string",
    "email": "user@example.com",
    "password": "password",
    "username": {},
    "registrationReason": "string"
  }'
```

`POST /api/v1/users/registrations/request`

Signup has to be enabled and require approval on the instance

> Body parameter

```json
{
  "channel": {
    "displayName": "string",
    "name": "framasoft_videos"
  },
  "displayName": "string",
  "email": "user@example.com",
  "password": "password",
  "username": {},
  "registrationReason": "string"
}
```

<h3 id="request-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRegistrationRequest](#schemauserregistrationrequest)|false|none|
|» channel|body|object|false|channel base information used to create the first channel of the user|
|» » displayName|body|string|false|none|
|» » name|body|[usernameChannel](#schemausernamechannel)|false|immutable name of the channel, used to interact with its actor|
|» displayName|body|string|false|editable name of the user, displayed in its representations|
|» email|body|string(email)|true|email of the user, used for login or service communications|
|» password|body|[password](#schemapassword)|true|none|
|» username|body|object|true|immutable name of the user, used to find or mention its actor|
|» registrationReason|body|string|true|reason for the user to register on the instance|

> Example responses

> 200 Response

```json
{
  "accountDisplayName": "string",
  "channelDisplayName": "string",
  "channelHandle": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "email": "user@example.com",
  "emailVerified": true,
  "id": 42,
  "moderationResponse": "string",
  "registrationReason": "string",
  "state": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": {
    "id": 42
  },
  "username": "string"
}
```

<h3 id="request-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[UserRegistration](#schemauserregistration)|
|400|Bad Request|request error or signup approval is not enabled on the instance|None|
|403|Forbidden|user registration is not enabled, user limit is reached, registration is not allowed for the ip or blocked by a plugin|None|
|409|Conflict|a user or registration with this username, channel name or email already exists|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete registration

<a id="opIddeleteRegistration"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/registrations/{registrationId}`

Delete the registration entry. It will not remove the user associated with this registration (if any)

<h3 id="delete-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationId|path|[id](#schemaid)|true|Registration ID|

<h3 id="delete-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Accept registration

<a id="opIdacceptRegistration"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations/42/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "moderationResponse": "string",
    "preventEmailDelivery": true
  }'
```

`POST /api/v1/users/registrations/{registrationId}/accept`

> Body parameter

```json
{
  "moderationResponse": "string",
  "preventEmailDelivery": true
}
```

<h3 id="accept-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationId|path|[id](#schemaid)|true|Registration ID|
|body|body|[UserRegistrationAcceptOrReject](#schemauserregistrationacceptorreject)|false|none|
|» moderationResponse|body|string|true|Moderation response to send to the user|
|» preventEmailDelivery|body|boolean|false|Set it to true if you don't want PeerTube to send an email to the user|

<h3 id="accept-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Reject registration

<a id="opIdrejectRegistration"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations/42/reject \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "moderationResponse": "string",
    "preventEmailDelivery": true
  }'
```

`POST /api/v1/users/registrations/{registrationId}/reject`

> Body parameter

```json
{
  "moderationResponse": "string",
  "preventEmailDelivery": true
}
```

<h3 id="reject-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationId|path|[id](#schemaid)|true|Registration ID|
|body|body|[UserRegistrationAcceptOrReject](#schemauserregistrationacceptorreject)|false|none|
|» moderationResponse|body|string|true|Moderation response to send to the user|
|» preventEmailDelivery|body|boolean|false|Set it to true if you don't want PeerTube to send an email to the user|

<h3 id="reject-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Verify a registration email

<a id="opIdverifyRegistrationEmail"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/registrations/42/verify-email \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "verificationString": "http://example.com"
  }'
```

`POST /api/v1/users/registrations/{registrationId}/verify-email`

Following a user registration request, the user will receive an email asking to click a link
containing a secret.


> Body parameter

```json
{
  "verificationString": "http://example.com"
}
```

<h3 id="verify-a-registration-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationId|path|[id](#schemaid)|true|Registration ID|
|body|body|object|false|none|
|» verificationString|body|string(url)|true|none|

<h3 id="verify-a-registration-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid verification string|None|
|404|Not Found|registration not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-session">Session</h1>

Sessions deal with access tokens over time. Only __one session token can currently be used at a time__.


## Login prerequisite

<a id="opIdgetOAuthClient"></a>

> Code samples

```bash
curl https://example.com/api/v1/oauth-clients/local \
  -H 'Accept: application/json'
```

`GET /api/v1/oauth-clients/local`

You need to retrieve a client id and secret before [logging in](#operation/getOAuthToken).

> Example responses

> 200 Response

```json
{
  "client_id": "v1ikx5hnfop4mdpnci8nsqh93c45rldf",
  "client_secret": "AjWiOapPltI6EnsWQwlFarRtLh4u8tDt"
}
```

<h3 id="login-prerequisite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[OAuthClient](#schemaoauthclient)|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdrevokeOAuthToken"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/revoke-token \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/users/revoke-token`

Revokes your access token and its associated refresh token, destroying your current session.

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Login

<a id="opIdgetOAuthToken"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=v1ikx5hnfop4mdpnci8nsqh93c45rldf&client_secret=AjWiOapPltI6EnsWQwlFarRtLh4u8tDt&grant_type=password&password=password&username=chocobozzz'
```

`POST /api/v1/users/token`

With your [client id and secret](#operation/getOAuthClient), you can retrieve an access and refresh tokens.

> Body parameter

```yaml
client_id: v1ikx5hnfop4mdpnci8nsqh93c45rldf
client_secret: AjWiOapPltI6EnsWQwlFarRtLh4u8tDt
grant_type: password
password: password
username: chocobozzz
```

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OAuthToken-password](#schemaoauthtoken-password) \| [OAuthToken-refresh_token](#schemaoauthtoken-refresh_token)|false|none|
|» *oneOf*|body|[OAuthToken-password](#schemaoauthtoken-password)|false|none|
|» *oneOf*|body|[OAuthToken-refresh_token](#schemaoauthtoken-refresh_token)|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "90286a0bdf0f7315d9d3fe8dabf9e1d2be9c97d0",
  "expires_in": 14399,
  "refresh_token": "2e0d675df9fc96d2e4ec8a3ebbbf45eca9137bb7",
  "refresh_token_expires_in": 1209600,
  "token_type": "Bearer"
}
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Disambiguate via `type`:<br>- `invalid_client` for an unmatched `client_id`<br>- `invalid_grant` for unmatched credentials<br>|None|
|401|Unauthorized|Disambiguate via `type`:<br>- default value for a regular authentication failure<br>- `invalid_token` for an expired token<br>|None|

<h3 id="login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|valid for 1 day|
|expires_in|integer|false|none|none|
|refresh_token|string|false|none|valid for 2 weeks|
|refresh_token_expires_in|integer|false|none|none|
|token_type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-accounts">Accounts</h1>

Accounts encompass remote accounts discovered across the federation, and correspond to the main Actor, along with video channels a user can create, which are also Actors.
When a comment is posted, it is done with your Account's Actor.


## List accounts

<a id="opIdgetAccounts"></a>

> Code samples

```bash
curl https://example.com/api/v1/accounts \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts`

<h3 id="list-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  }
]
```

<h3 id="list-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get an account

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}`

<h3 id="get-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "followersCount": 0,
  "followingCount": 0,
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "id": 42,
  "name": {},
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "description": "string",
  "displayName": "string",
  "userId": {}
}
```

<h3 id="get-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Account](#schemaaccount)|
|404|Not Found|account not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List followers of an account

<a id="opIdgetAccountFollowers"></a>

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{name}/followers`

<h3 id="list-followers-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort followers by criteria|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "follower": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "following": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "id": 42,
      "score": 0,
      "state": "pending",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 1
}
```

<h3 id="list-followers-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-followers-of-an-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Follow](#schemafollow)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List ratings of an account

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/ratings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/accounts/{name}/ratings`

<h3 id="list-ratings-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|rating|query|string|false|Optionally filter which ratings to retrieve|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rating|like|
|rating|dislike|

> Example responses

> 200 Response

```json
[
  {
    "rating": "like",
    "video": {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  }
]
```

<h3 id="list-ratings-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-ratings-of-an-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VideoRating](#schemavideorating)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List videos of an account

<a id="opIdgetAccountVideos"></a>

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}/videos`

<h3 id="list-videos-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|isLive|query|boolean|false|whether or not the video is a live|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|
|skipCount|query|string|false|if you don't need the `total` in the response|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-trending|
|sort|-hot|
|sort|-best|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="list-videos-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-users">Users</h1>

Using some features of PeerTube require authentication, for which User provide different levels of permission as well as associated user information. Each user has a corresponding local Account for federation.


## List users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl https://example.com/api/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Plain text search that will match with user usernames or emails|
|blocked|query|boolean|false|Filter results down to (un)banned users|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort users by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-id|
|sort|-username|
|sort|-createdAt|

> Example responses

> 200 Response

```json
[
  {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "autoPlayNextVideo": true,
    "autoPlayNextVideoPlaylist": true,
    "autoPlayVideo": true,
    "blocked": true,
    "blockedReason": "string",
    "createdAt": "string",
    "email": "user@example.com",
    "emailVerified": true,
    "id": {},
    "lastLoginDate": "1970-01-01T00:00:00Z",
    "noAccountSetupWarningModal": true,
    "noInstanceConfigWarningModal": true,
    "noWelcomeModal": true,
    "nsfwPolicy": "display",
    "p2pEnabled": true,
    "pluginAuth": "string",
    "role": {
      "id": 2,
      "label": "User"
    },
    "theme": "string",
    "username": "chocobozzz",
    "videoChannels": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "banners": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "description": "Videos made with <3 by Framasoft",
        "displayName": "Videos of Framasoft",
        "isLocal": true,
        "ownerAccount": {
          "id": 0,
          "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
        },
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
      }
    ],
    "videoQuota": -1,
    "videoQuotaDaily": -1
  }
]
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Create a user

<a id="opIdaddUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminFlags": 1,
    "channelName": "framasoft_videos",
    "email": "user@example.com",
    "password": "password",
    "role": 2,
    "username": "chocobozzz",
    "videoQuota": -1,
    "videoQuotaDaily": -1
  }'
```

`POST /api/v1/users`

> Body parameter

```json
{
  "adminFlags": 1,
  "channelName": "framasoft_videos",
  "email": "user@example.com",
  "password": "password",
  "role": 2,
  "username": "chocobozzz",
  "videoQuota": -1,
  "videoQuotaDaily": -1
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddUser](#schemaadduser)|true|If the smtp server is configured, you can leave the password empty and an email will be sent<br>asking the user to set it first.<br>|
|» adminFlags|body|[UserAdminFlags](#schemauseradminflags)|false|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|» channelName|body|[usernameChannel](#schemausernamechannel)|false|immutable name of the channel, used to interact with its actor|
|» email|body|string(email)|true|The user email|
|» password|body|[password](#schemapassword)|true|none|
|» role|body|[UserRole](#schemauserrole)|true|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|» username|body|[username](#schemausername)|true|immutable name of the user, used to find or mention its actor|
|» videoQuota|body|integer|true|The user video quota in bytes|
|» videoQuotaDaily|body|integer|true|The user daily video quota in bytes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adminFlags|0|
|» adminFlags|1|
|» role|0|
|» role|1|
|» role|2|

> Example responses

> 200 Response

```json
{
  "user": {
    "account": {
      "id": 42
    },
    "id": 42
  }
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|user created|[AddUserResponse](#schemaadduserresponse)|
|403|Forbidden|insufficient authority to create an admin or moderator|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Resend user verification link

<a id="opIdresendEmailToVerifyUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/ask-send-verify-email \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string"
  }'
```

`POST /api/v1/users/ask-send-verify-email`

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="resend-user-verification-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|User email|

<h3 id="resend-user-verification-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a user

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/{id}`

<h3 id="get-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|withStats|query|boolean|false|include statistics about the user (only available as a moderator/admin)|
|id|path|[id](#schemaid)|true|Entity id|

> Example responses

> 200 Response

```json
{
  "account": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "blocked": true,
  "blockedReason": "string",
  "createdAt": "string",
  "email": "user@example.com",
  "emailVerified": true,
  "id": {},
  "lastLoginDate": "1970-01-01T00:00:00Z",
  "noAccountSetupWarningModal": true,
  "noInstanceConfigWarningModal": true,
  "noWelcomeModal": true,
  "nsfwPolicy": "display",
  "p2pEnabled": true,
  "pluginAuth": "string",
  "role": {
    "id": 2,
    "label": "User"
  },
  "theme": "string",
  "username": "chocobozzz",
  "videoChannels": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "videoQuota": -1,
  "videoQuotaDaily": -1
}
```

<h3 id="get-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|As an admin/moderator, you can request a response augmented with statistics about the user's<br>moderation relations and videos usage, by using the `withStats` parameter.<br>|Inline|

<h3 id="get-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[User](#schemauser)|false|none|none|
|*oneOf*|[UserWithStats](#schemauserwithstats)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update a user

<a id="opIdputUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminFlags": 1,
    "email": {},
    "emailVerified": true,
    "password": "password",
    "pluginAuth": "peertube-plugin-auth-saml2",
    "role": 2,
    "videoQuota": 0,
    "videoQuotaDaily": 0
  }'
```

`PUT /api/v1/users/{id}`

> Body parameter

```json
{
  "adminFlags": 1,
  "email": {},
  "emailVerified": true,
  "password": "password",
  "pluginAuth": "peertube-plugin-auth-saml2",
  "role": 2,
  "videoQuota": 0,
  "videoQuotaDaily": 0
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|[UpdateUser](#schemaupdateuser)|true|none|
|» adminFlags|body|[UserAdminFlags](#schemauseradminflags)|false|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|» email|body|object|false|The updated email of the user|
|» emailVerified|body|boolean|false|Set the email as verified|
|» password|body|[password](#schemapassword)|false|none|
|» pluginAuth|body|string \| null|false|The auth plugin to use to authenticate the user|
|» role|body|[UserRole](#schemauserrole)|false|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|» videoQuota|body|integer|false|The updated video quota of the user in bytes|
|» videoQuotaDaily|body|integer|false|The updated daily video quota of the user in bytes|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adminFlags|0|
|» adminFlags|1|
|» role|0|
|» role|1|
|» role|2|

<h3 id="update-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a user

<a id="opIddelUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/{id}`

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Confirm two factor auth

<a id="opIdconfirmTwoFactorRequest"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42/two-factor/confirm-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "otpToken": "string",
    "requestToken": "string"
  }'
```

`POST /api/v1/users/{id}/two-factor/confirm-request`

Confirm a two factor authentication request

> Body parameter

```json
{
  "otpToken": "string",
  "requestToken": "string"
}
```

<h3 id="confirm-two-factor-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» otpToken|body|string|true|OTP token generated by the app|
|» requestToken|body|string|true|Token to identify the two factor request|

<h3 id="confirm-two-factor-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid request token or OTP token|None|
|404|Not Found|user not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Disable two factor auth

<a id="opIddisableTwoFactor"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42/two-factor/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "currentPassword": "string"
  }'
```

`POST /api/v1/users/{id}/two-factor/disable`

Disable two factor authentication of a user

> Body parameter

```json
{
  "currentPassword": "string"
}
```

<h3 id="disable-two-factor-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» currentPassword|body|string|false|Password of the currently authenticated user|

<h3 id="disable-two-factor-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid password|None|
|404|Not Found|user not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Request two factor auth

<a id="opIdrequestTwoFactor"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42/two-factor/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "currentPassword": "string"
  }'
```

`POST /api/v1/users/{id}/two-factor/request`

Request two factor authentication for a user

> Body parameter

```json
{
  "currentPassword": "string"
}
```

<h3 id="request-two-factor-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» currentPassword|body|string|false|Password of the currently authenticated user|

> Example responses

> 200 Response

```json
[
  {
    "otpRequest": {
      "requestToken": "string",
      "secret": "string",
      "uri": "string"
    }
  }
]
```

<h3 id="request-two-factor-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|invalid password|None|
|404|Not Found|user not found|None|

<h3 id="request-two-factor-auth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestTwoFactorResponse](#schemarequesttwofactorresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Verify a user

<a id="opIdverifyUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/42/verify-email \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "isPendingEmail": true,
    "verificationString": "http://example.com"
  }'
```

`POST /api/v1/users/{id}/verify-email`

Following a user registration, the new user will receive an email asking to click a link
containing a secret.
This endpoint can also be used to verify a new email set in the user account.


> Body parameter

```json
{
  "isPendingEmail": true,
  "verificationString": "http://example.com"
}
```

<h3 id="verify-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» isPendingEmail|body|boolean|false|none|
|» verificationString|body|string(url)|true|none|

<h3 id="verify-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid verification string|None|
|404|Not Found|user not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-my-user">My User</h1>

Operations related to your own User, when logged-in.


## Get my user information

<a id="opIdgetUserInfo"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me`

> Example responses

> 200 Response

```json
[
  {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "autoPlayNextVideo": true,
    "autoPlayNextVideoPlaylist": true,
    "autoPlayVideo": true,
    "blocked": true,
    "blockedReason": "string",
    "createdAt": "string",
    "email": "user@example.com",
    "emailVerified": true,
    "id": {},
    "lastLoginDate": "1970-01-01T00:00:00Z",
    "noAccountSetupWarningModal": true,
    "noInstanceConfigWarningModal": true,
    "noWelcomeModal": true,
    "nsfwPolicy": "display",
    "p2pEnabled": true,
    "pluginAuth": "string",
    "role": {
      "id": 2,
      "label": "User"
    },
    "theme": "string",
    "username": "chocobozzz",
    "videoChannels": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "banners": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "description": "Videos made with <3 by Framasoft",
        "displayName": "Videos of Framasoft",
        "isLocal": true,
        "ownerAccount": {
          "id": 0,
          "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
        },
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
      }
    ],
    "videoQuota": -1,
    "videoQuotaDaily": -1
  }
]
```

<h3 id="get-my-user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="get-my-user-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Update my user information

<a id="opIdputUserInfo"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/me \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoPlayNextVideo": true,
    "autoPlayNextVideoPlaylist": true,
    "autoPlayVideo": true,
    "currentPassword": "password",
    "displayNSFW": "true",
    "displayName": "string",
    "email": {},
    "noAccountSetupWarningModal": true,
    "noInstanceConfigWarningModal": true,
    "noWelcomeModal": true,
    "p2pEnabled": true,
    "password": "password",
    "theme": "string",
    "videoLanguages": [
      "string"
    ],
    "videosHistoryEnabled": true
  }'
```

`PUT /api/v1/users/me`

> Body parameter

```json
{
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "currentPassword": "password",
  "displayNSFW": "true",
  "displayName": "string",
  "email": {},
  "noAccountSetupWarningModal": true,
  "noInstanceConfigWarningModal": true,
  "noWelcomeModal": true,
  "p2pEnabled": true,
  "password": "password",
  "theme": "string",
  "videoLanguages": [
    "string"
  ],
  "videosHistoryEnabled": true
}
```

<h3 id="update-my-user-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateMe](#schemaupdateme)|true|none|
|» autoPlayNextVideo|body|boolean|false|new preference regarding playing following videos automatically|
|» autoPlayNextVideoPlaylist|body|boolean|false|new preference regarding playing following playlist videos automatically|
|» autoPlayVideo|body|boolean|false|new preference regarding playing videos automatically|
|» currentPassword|body|[password](#schemapassword)|false|none|
|» displayNSFW|body|string|false|new NSFW display policy|
|» displayName|body|string|false|new name of the user in its representations|
|» email|body|object|false|new email used for login and service communications|
|» noAccountSetupWarningModal|body|boolean|false|none|
|» noInstanceConfigWarningModal|body|boolean|false|none|
|» noWelcomeModal|body|boolean|false|none|
|» p2pEnabled|body|boolean|false|whether to enable P2P in the player or not|
|» password|body|[password](#schemapassword)|false|none|
|» theme|body|string|false|none|
|» videoLanguages|body|[string]|false|list of languages to filter videos down to|
|» videosHistoryEnabled|body|boolean|false|whether to keep track of watched history or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» displayNSFW|true|
|» displayNSFW|false|
|» displayNSFW|both|

<h3 id="update-my-user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Delete my avatar

> Code samples

```bash
curl https://example.com/api/v1/users/me/avatar \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me/avatar`

<h3 id="delete-my-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update my user avatar

> Code samples

```bash
curl https://example.com/api/v1/users/me/avatar/pick \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'avatarfile=@/path/to/file'
```

`POST /api/v1/users/me/avatar/pick`

> Body parameter

```yaml
avatarfile: string
```

<h3 id="update-my-user-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» avatarfile|body|string(binary)|false|The file to upload|

> Example responses

> 200 Response

```json
{
  "avatars": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ]
}
```

<h3 id="update-my-user-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|413|Payload Too Large|image file too large|None|

<h3 id="update-my-user-avatar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the avatar|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get my user used quota

> Code samples

```bash
curl https://example.com/api/v1/users/me/video-quota-used \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/video-quota-used`

> Example responses

> 200 Response

```json
{
  "videoQuotaUsed": 16810141515,
  "videoQuotaUsedDaily": 1681014151
}
```

<h3 id="get-my-user-used-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="get-my-user-used-quota-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoQuotaUsed|number|false|none|The user video quota used so far in bytes|
|videoQuotaUsedDaily|number|false|none|The user video quota used today in bytes|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Get videos of my user

> Code samples

```bash
curl https://example.com/api/v1/users/me/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/videos`

<h3 id="get-videos-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="get-videos-of-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Get rate of my user for a video

> Code samples

```bash
curl 'https://example.com/api/v1/users/me/videos/{videoId}/rating' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/videos/{videoId}/rating`

<h3 id="get-rate-of-my-user-for-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|object|true|The video id|

> Example responses

> 200 Response

```json
{
  "id": 42,
  "rating": "like"
}
```

<h3 id="get-rate-of-my-user-for-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetMeVideoRating](#schemagetmevideorating)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-my-subscriptions">My Subscriptions</h1>

Operations related to your subscriptions to video channels, their new videos, and how to keep up to date with their latest publications!


## Get my user subscriptions

> Code samples

```bash
curl https://example.com/api/v1/users/me/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/subscriptions`

<h3 id="get-my-user-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "total": 1
}
```

<h3 id="get-my-user-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelList](#schemavideochannellist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Add subscription to my user

> Code samples

```bash
curl https://example.com/api/v1/users/me/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "uri": "008a0e54-375d-49d0-8379-143202e24152@video.lqdn.fr"
  }'
```

`POST /api/v1/users/me/subscriptions`

> Body parameter

```json
{
  "uri": "008a0e54-375d-49d0-8379-143202e24152@video.lqdn.fr"
}
```

<h3 id="add-subscription-to-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» uri|body|string(uri)|true|uri of the video channels to subscribe to|

<h3 id="add-subscription-to-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Get if subscriptions exist for my user

> Code samples

```bash
curl 'https://example.com/api/v1/users/me/subscriptions/exist?uris=http%3A%2F%2Fexample.com' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/subscriptions/exist`

<h3 id="get-if-subscriptions-exist-for-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uris|query|[string(uri)]|true|list of uris to check if each is part of the user subscriptions|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-if-subscriptions-exist-for-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## List videos of subscriptions of my user

> Code samples

```bash
curl https://example.com/api/v1/users/me/subscriptions/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/subscriptions/videos`

<h3 id="list-videos-of-subscriptions-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|isLive|query|boolean|false|whether or not the video is a live|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|
|skipCount|query|string|false|if you don't need the `total` in the response|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-trending|
|sort|-hot|
|sort|-best|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="list-videos-of-subscriptions-of-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Get subscription of my user

> Code samples

```bash
curl https://example.com/api/v1/users/me/subscriptions/my_username%20%7C%20my_username%40example.com \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/subscriptions/{subscriptionHandle}`

<h3 id="get-subscription-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionHandle|path|string|true|The subscription handle|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "followersCount": 0,
  "followingCount": 0,
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "id": 42,
  "name": {},
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "banners": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ],
  "description": "Videos made with <3 by Framasoft",
  "displayName": "Videos of Framasoft",
  "isLocal": true,
  "ownerAccount": {
    "id": 0,
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
}
```

<h3 id="get-subscription-of-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannel](#schemavideochannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Delete subscription of my user

> Code samples

```bash
curl https://example.com/api/v1/users/me/subscriptions/my_username%20%7C%20my_username%40example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me/subscriptions/{subscriptionHandle}`

<h3 id="delete-subscription-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionHandle|path|string|true|The subscription handle|

<h3 id="delete-subscription-of-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-my-history">My History</h1>

Operations related to your watch history.


## List watched videos history

> Code samples

```bash
curl https://example.com/api/v1/users/me/history/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/history/videos`

<h3 id="list-watched-videos-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="list-watched-videos-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Clear video history

> Code samples

```bash
curl https://example.com/api/v1/users/me/history/videos/remove \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'beforeDate=1970-01-01T00:00:00Z'
```

`POST /api/v1/users/me/history/videos/remove`

> Body parameter

```yaml
beforeDate: "1970-01-01T00:00:00Z"
```

<h3 id="clear-video-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» beforeDate|body|string(date-time)|false|history before this date will be deleted|

<h3 id="clear-video-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete history element

> Code samples

```bash
curl 'https://example.com/api/v1/users/me/history/videos/{videoId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me/history/videos/{videoId}`

<h3 id="delete-history-element-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoId|path|object|true|none|

<h3 id="delete-history-element-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-my-notifications">My Notifications</h1>

Notifications following new videos, follows or reports. They allow you to keep track of the interactions and overall important information that concerns you. You MAY set per-notification type delivery preference, to receive the info either by mail, by in-browser notification or both.


## Update my notification settings

> Code samples

```bash
curl https://example.com/api/v1/users/me/notification-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "abuseAsModerator": 0,
    "autoInstanceFollowing": 0,
    "blacklistOnMyVideo": 0,
    "commentMention": 0,
    "myVideoImportFinished": 0,
    "myVideoPublished": 0,
    "newCommentOnMyVideo": 0,
    "newFollow": 0,
    "newInstanceFollower": 0,
    "newUserRegistration": 0,
    "newVideoFromSubscription": 0,
    "videoAutoBlacklistAsModerator": 0
  }'
```

`PUT /api/v1/users/me/notification-settings`

> Body parameter

```json
{
  "abuseAsModerator": 0,
  "autoInstanceFollowing": 0,
  "blacklistOnMyVideo": 0,
  "commentMention": 0,
  "myVideoImportFinished": 0,
  "myVideoPublished": 0,
  "newCommentOnMyVideo": 0,
  "newFollow": 0,
  "newInstanceFollower": 0,
  "newUserRegistration": 0,
  "newVideoFromSubscription": 0,
  "videoAutoBlacklistAsModerator": 0
}
```

<h3 id="update-my-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» abuseAsModerator|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» autoInstanceFollowing|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» blacklistOnMyVideo|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» commentMention|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» myVideoImportFinished|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» myVideoPublished|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newCommentOnMyVideo|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newFollow|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newInstanceFollower|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newUserRegistration|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newVideoFromSubscription|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» videoAutoBlacklistAsModerator|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|

<h3 id="update-my-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List my notifications

> Code samples

```bash
curl https://example.com/api/v1/users/me/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/notifications`

<h3 id="list-my-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unread|query|boolean|false|only list unread notifications|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string"
      },
      "actorFollow": {
        "follower": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string"
        },
        "following": {
          "displayName": "string",
          "host": "example.com",
          "name": "string",
          "type": "account"
        },
        "id": 42,
        "state": "pending"
      },
      "comment": {
        "account": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string"
        },
        "id": 42,
        "threadId": 0,
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 42,
      "read": true,
      "type": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "video": {
        "id": {},
        "name": "What is PeerTube?",
        "uuid": {},
        "channel": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string"
        }
      },
      "videoAbuse": {
        "id": 42,
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      },
      "videoBlacklist": {
        "id": 42,
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      },
      "videoImport": {
        "id": 42,
        "magnetUri": "http://example.com",
        "targetUri": "http://example.com",
        "torrentName": "string",
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      }
    }
  ],
  "total": 1
}
```

<h3 id="list-my-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[NotificationListResponse](#schemanotificationlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Mark notifications as read by their id

> Code samples

```bash
curl https://example.com/api/v1/users/me/notifications/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ids": [
      0
    ]
  }'
```

`POST /api/v1/users/me/notifications/read`

> Body parameter

```json
{
  "ids": [
    0
  ]
}
```

<h3 id="mark-notifications-as-read-by-their-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» ids|body|[integer]|true|ids of the notifications to mark as read|

<h3 id="mark-notifications-as-read-by-their-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Mark all my notification as read

> Code samples

```bash
curl https://example.com/api/v1/users/me/notifications/read-all \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/users/me/notifications/read-all`

<h3 id="mark-all-my-notification-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-config">Config</h1>

Each server exposes public information regarding supported videos and options.


## Get instance public configuration

<a id="opIdgetConfig"></a>

> Code samples

```bash
curl https://example.com/api/v1/config \
  -H 'Accept: application/json'
```

`GET /api/v1/config`

> Example responses

> 200 Response

```json
{
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "avatar": {
    "extensions": [
      "string"
    ],
    "file": {
      "size": {
        "max": 0
      }
    }
  },
  "contactForm": {
    "enabled": true
  },
  "email": {
    "enabled": true
  },
  "followings": {
    "instance": {
      "autoFollowIndex": {
        "indexUrl": "http://example.com"
      }
    }
  },
  "homepage": {
    "enabled": true
  },
  "import": {
    "videoChannelSynchronization": {
      "enabled": true
    },
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    }
  },
  "instance": {
    "customizations": {
      "css": "string",
      "javascript": "string"
    },
    "defaultClientRoute": "string",
    "defaultNSFWPolicy": "string",
    "isNSFW": true,
    "name": "string",
    "shortDescription": "string"
  },
  "plugin": {
    "registered": [
      "string"
    ]
  },
  "search": {
    "remoteUri": {
      "anonymous": true,
      "users": true
    }
  },
  "serverCommit": "string",
  "serverVersion": "string",
  "signup": {
    "allowed": true,
    "allowedForCurrentIP": true,
    "requiresEmailVerification": true
  },
  "theme": {
    "registered": [
      "string"
    ]
  },
  "tracker": {
    "enabled": true
  },
  "transcoding": {
    "enabledResolutions": [
      240
    ],
    "hls": {
      "enabled": true
    },
    "webtorrent": {
      "enabled": true
    }
  },
  "trending": {
    "videos": {
      "intervalDays": 0
    }
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  },
  "video": {
    "file": {
      "extensions": [
        "string"
      ]
    },
    "image": {
      "extensions": [
        "string"
      ],
      "size": {
        "max": 0
      }
    }
  },
  "videoCaption": {
    "file": {
      "extensions": [
        "string"
      ],
      "size": {
        "max": 0
      }
    }
  }
}
```

<h3 id="get-instance-public-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ServerConfig](#schemaserverconfig)|

<aside class="success">
This operation does not require authentication
</aside>

## Get instance &quot;About&quot; information

<a id="opIdgetAbout"></a>

> Code samples

```bash
curl https://example.com/api/v1/config/about \
  -H 'Accept: application/json'
```

`GET /api/v1/config/about`

> Example responses

> 200 Response

```json
{
  "instance": {
    "description": "string",
    "name": "string",
    "shortDescription": "string",
    "terms": "string"
  }
}
```

<h3 id="get-instance-about-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ServerConfigAbout](#schemaserverconfigabout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get instance runtime configuration

<a id="opIdgetCustomConfig"></a>

> Code samples

```bash
curl https://example.com/api/v1/config/custom \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/config/custom`

> Example responses

> 200 Response

```json
{
  "admin": {
    "email": "user@example.com"
  },
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "cache": {
    "captions": {
      "size": 0
    },
    "previews": {
      "size": 0
    }
  },
  "contactForm": {
    "enabled": true
  },
  "followers": {
    "instance": {
      "enabled": true,
      "manualApproval": true
    }
  },
  "import": {
    "video_channel_synchronization": {
      "enabled": true
    },
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    }
  },
  "instance": {
    "customizations": {
      "css": "string",
      "javascript": "string"
    },
    "defaultClientRoute": "string",
    "defaultNSFWPolicy": "string",
    "description": "string",
    "isNSFW": true,
    "name": "string",
    "shortDescription": "string",
    "terms": "string"
  },
  "services": {
    "twitter": {
      "username": "string",
      "whitelisted": true
    }
  },
  "signup": {
    "enabled": true,
    "limit": 0,
    "requiresEmailVerification": true
  },
  "theme": {
    "default": "string"
  },
  "transcoding": {
    "allowAdditionalExtensions": true,
    "allowAudioFiles": true,
    "concurrency": 0,
    "enabled": true,
    "hls": {
      "enabled": true
    },
    "profile": "default",
    "resolutions": {
      "0p": true,
      "1080p": true,
      "1440p": true,
      "144p": true,
      "2160p": true,
      "240p": true,
      "360p": true,
      "480p": true,
      "720p": true
    },
    "threads": 0,
    "webtorrent": {
      "enabled": true
    }
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  }
}
```

<h3 id="get-instance-runtime-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ServerConfigCustom](#schemaserverconfigcustom)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Set instance runtime configuration

<a id="opIdputCustomConfig"></a>

> Code samples

```bash
curl https://example.com/api/v1/config/custom \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v1/config/custom`

<h3 id="set-instance-runtime-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|Arises when:<br>  - the emailer is disabled and the instance is open to registrations<br>  - webtorrent and hls are disabled with transcoding enabled - you need at least one enabled<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete instance runtime configuration

<a id="opIddelCustomConfig"></a>

> Code samples

```bash
curl https://example.com/api/v1/config/custom \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/config/custom`

<h3 id="delete-instance-runtime-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-job">Job</h1>

Jobs are long-running tasks enqueued and processed by the instance itself. No additional worker registration is currently available.


## Pause job queue

> Code samples

```bash
curl https://example.com/api/v1/jobs/pause \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/jobs/pause`

<h3 id="pause-job-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Resume job queue

> Code samples

```bash
curl https://example.com/api/v1/jobs/resume \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/jobs/resume`

<h3 id="resume-job-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List instance jobs

<a id="opIdgetJobs"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/jobs/{state}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/jobs/{state}`

<h3 id="list-instance-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|path|string|true|The state of the job ('' for for no filter)|
|jobType|query|string|false|job type|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|""|
|state|active|
|state|completed|
|state|failed|
|state|waiting|
|state|delayed|
|jobType|activitypub-follow|
|jobType|activitypub-http-broadcast|
|jobType|activitypub-http-fetcher|
|jobType|activitypub-http-unicast|
|jobType|email|
|jobType|video-transcoding|
|jobType|video-file-import|
|jobType|video-import|
|jobType|videos-views-stats|
|jobType|activitypub-refresher|
|jobType|video-redundancy|
|jobType|video-live-ending|
|jobType|video-channel-import|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "data": {},
      "error": {},
      "finishedOn": "1970-01-01T00:00:00Z",
      "id": 42,
      "processedOn": "1970-01-01T00:00:00Z",
      "state": "active",
      "type": "activitypub-http-unicast"
    }
  ],
  "total": 1
}
```

<h3 id="list-instance-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-instance-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Job](#schemajob)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-instance-follows">Instance Follows</h1>

Managing servers which the instance interacts with is crucial to the concept of federation in PeerTube and external video indexation. The PeerTube server then deals with inter-server ActivityPub operations and propagates information across its social graph by posting activities to actors' inbox endpoints.


<a href="https://docs.joinpeertube.org/admin/following-instances#instances-follows">External documentation</a>

## List instances following the server

> Code samples

```bash
curl https://example.com/api/v1/server/followers \
  -H 'Accept: application/json'
```

`GET /api/v1/server/followers`

<h3 id="list-instances-following-the-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|false|none|
|actorType|query|string|false|none|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|pending|
|state|accepted|
|actorType|Person|
|actorType|Application|
|actorType|Group|
|actorType|Service|
|actorType|Organization|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "follower": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "following": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "id": 42,
      "score": 0,
      "state": "pending",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 1
}
```

<h3 id="list-instances-following-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-instances-following-the-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Follow](#schemafollow)]|false|none|none|
|total|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove or reject a follower to your server

> Code samples

```bash
curl https://example.com/api/v1/server/followers/user%40example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/followers/{nameWithHost}`

<h3 id="remove-or-reject-a-follower-to-your-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameWithHost|path|string(email)|true|The remote actor handle to remove from your followers|

<h3 id="remove-or-reject-a-follower-to-your-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|follower not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Accept a pending follower to your server

> Code samples

```bash
curl https://example.com/api/v1/server/followers/user%40example.com/accept \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/server/followers/{nameWithHost}/accept`

<h3 id="accept-a-pending-follower-to-your-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameWithHost|path|string(email)|true|The remote actor handle to remove from your followers|

<h3 id="accept-a-pending-follower-to-your-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|follower not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Reject a pending follower to your server

> Code samples

```bash
curl https://example.com/api/v1/server/followers/user%40example.com/reject \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/server/followers/{nameWithHost}/reject`

<h3 id="reject-a-pending-follower-to-your-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameWithHost|path|string(email)|true|The remote actor handle to remove from your followers|

<h3 id="reject-a-pending-follower-to-your-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|follower not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List instances followed by the server

> Code samples

```bash
curl https://example.com/api/v1/server/following \
  -H 'Accept: application/json'
```

`GET /api/v1/server/following`

<h3 id="list-instances-followed-by-the-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|false|none|
|actorType|query|string|false|none|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|pending|
|state|accepted|
|actorType|Person|
|actorType|Application|
|actorType|Group|
|actorType|Service|
|actorType|Organization|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "follower": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "following": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "id": 42,
      "score": 0,
      "state": "pending",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 1
}
```

<h3 id="list-instances-followed-by-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-instances-followed-by-the-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Follow](#schemafollow)]|false|none|none|
|total|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Follow a list of actors (PeerTube instance, channel or account)

> Code samples

```bash
curl https://example.com/api/v1/server/following \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "handles": [
      "string"
    ],
    "hosts": [
      "example.com"
    ]
  }'
```

`POST /api/v1/server/following`

> Body parameter

```json
{
  "handles": [
    "string"
  ],
  "hosts": [
    "example.com"
  ]
}
```

<h3 id="follow-a-list-of-actors-peertube-instance-channel-or-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» handles|body|[string]|false|none|
|» hosts|body|[string(hostname)]|false|none|

<h3 id="follow-a-list-of-actors-peertube-instance-channel-or-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|500|Internal Server Error|cannot follow a non-HTTPS server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Unfollow an actor (PeerTube instance, channel or account)

> Code samples

```bash
curl https://example.com/api/v1/server/following/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/following/{hostOrHandle}`

<h3 id="unfollow-an-actor-peertube-instance-channel-or-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hostOrHandle|path|string|true|The hostOrHandle to unfollow|

<h3 id="unfollow-an-actor-peertube-instance-channel-or-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|host or handle not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-instance-redundancy">Instance Redundancy</h1>

Redundancy is part of the inter-server solidarity that PeerTube fosters. Manage the list of instances you wish to help by seeding their videos according to the policy of video selection of your choice. Note that you have a similar functionality to mirror individual videos, see [video mirroring](#tag/Video-Mirroring).


<a href="https://docs.joinpeertube.org/admin/following-instances#instances-redundancy">External documentation</a>

## Update a server redundancy policy

> Code samples

```bash
curl https://example.com/api/v1/server/redundancy/example.com \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "redundancyAllowed": true
  }'
```

`PUT /api/v1/server/redundancy/{host}`

> Body parameter

```json
{
  "redundancyAllowed": true
}
```

<h3 id="update-a-server-redundancy-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|path|string(hostname)|true|server domain to mirror|
|body|body|object|false|none|
|» redundancyAllowed|body|boolean|true|allow mirroring of the host's local videos|

<h3 id="update-a-server-redundancy-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|server is not already known|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-plugins">Plugins</h1>

Managing plugins installed from a local path or from NPM, or search for new ones.


<a href="https://docs.joinpeertube.org/api/plugins">External documentation</a>

## List plugins

<a id="opIdgetPlugins"></a>

> Code samples

```bash
curl https://example.com/api/v1/plugins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/plugins`

<h3 id="list-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pluginType|query|integer|false|none|
|uninstalled|query|boolean|false|none|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "enabled": true,
      "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
      "latestVersion": "0.0.3",
      "name": "peertube-plugin-auth-ldap",
      "peertubeEngine": "2.2.0",
      "settings": {},
      "type": 1,
      "uninstalled": true,
      "updatedAt": "1970-01-01T00:00:00Z",
      "version": "0.0.1"
    }
  ],
  "total": 1
}
```

<h3 id="list-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PluginResponse](#schemapluginresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List available plugins

<a id="opIdgetAvailablePlugins"></a>

> Code samples

```bash
curl https://example.com/api/v1/plugins/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/plugins/available`

<h3 id="list-available-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|pluginType|query|integer|false|none|
|currentPeerTubeEngine|query|string|false|none|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "enabled": true,
      "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
      "latestVersion": "0.0.3",
      "name": "peertube-plugin-auth-ldap",
      "peertubeEngine": "2.2.0",
      "settings": {},
      "type": 1,
      "uninstalled": true,
      "updatedAt": "1970-01-01T00:00:00Z",
      "version": "0.0.1"
    }
  ],
  "total": 1
}
```

<h3 id="list-available-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PluginResponse](#schemapluginresponse)|
|503|Service Unavailable|plugin index unavailable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Install a plugin

<a id="opIdaddPlugin"></a>

> Code samples

```bash
curl https://example.com/api/v1/plugins/install \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "npmName": "peertube-plugin-auth-ldap"
  }'
```

`POST /api/v1/plugins/install`

> Body parameter

```json
{
  "npmName": "peertube-plugin-auth-ldap"
}
```

<h3 id="install-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» npmName|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» path|body|string|true|none|

<h3 id="install-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|should have either `npmName` or `path` set|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Uninstall a plugin

<a id="opIduninstallPlugin"></a>

> Code samples

```bash
curl https://example.com/api/v1/plugins/uninstall \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "npmName": "peertube-plugin-auth-ldap"
  }'
```

`POST /api/v1/plugins/uninstall`

> Body parameter

```json
{
  "npmName": "peertube-plugin-auth-ldap"
}
```

<h3 id="uninstall-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» npmName|body|string|true|name of the plugin/theme in its package.json|

<h3 id="uninstall-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|existing plugin not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Update a plugin

<a id="opIdupdatePlugin"></a>

> Code samples

```bash
curl https://example.com/api/v1/plugins/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "npmName": "peertube-plugin-auth-ldap"
  }'
```

`POST /api/v1/plugins/update`

> Body parameter

```json
{
  "npmName": "peertube-plugin-auth-ldap"
}
```

<h3 id="update-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» npmName|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» path|body|string|true|none|

<h3 id="update-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|should have either `npmName` or `path` set|None|
|404|Not Found|existing plugin not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Get a plugin

<a id="opIdgetPlugin"></a>

> Code samples

```bash
curl https://example.com/api/v1/plugins/peertube-plugin-auth-ldap \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/plugins/{npmName}`

<h3 id="get-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npmName|path|string|true|name of the plugin/theme on npmjs.com or in its package.json|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "enabled": true,
  "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
  "latestVersion": "0.0.3",
  "name": "peertube-plugin-auth-ldap",
  "peertubeEngine": "2.2.0",
  "settings": {},
  "type": 1,
  "uninstalled": true,
  "updatedAt": "1970-01-01T00:00:00Z",
  "version": "0.0.1"
}
```

<h3 id="get-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Plugin](#schemaplugin)|
|404|Not Found|plugin not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Get a plugin's public settings

> Code samples

```bash
curl https://example.com/api/v1/plugins/peertube-plugin-auth-ldap/public-settings \
  -H 'Accept: application/json'
```

`GET /api/v1/plugins/{npmName}/public-settings`

<h3 id="get-a-plugins-public-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npmName|path|string|true|name of the plugin/theme on npmjs.com or in its package.json|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-a-plugins-public-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|404|Not Found|plugin not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a plugin's registered settings

> Code samples

```bash
curl https://example.com/api/v1/plugins/peertube-plugin-auth-ldap/registered-settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/plugins/{npmName}/registered-settings`

<h3 id="get-a-plugins-registered-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npmName|path|string|true|name of the plugin/theme on npmjs.com or in its package.json|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-a-plugins-registered-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|404|Not Found|plugin not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Set a plugin's settings

> Code samples

```bash
curl https://example.com/api/v1/plugins/peertube-plugin-auth-ldap/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "settings": {}
  }'
```

`PUT /api/v1/plugins/{npmName}/settings`

> Body parameter

```json
{
  "settings": {}
}
```

<h3 id="set-a-plugins-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|npmName|path|string|true|name of the plugin/theme on npmjs.com or in its package.json|
|body|body|object|false|none|
|» settings|body|object|false|none|

<h3 id="set-a-plugins-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|plugin not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-abuses">Abuses</h1>

Abuses deal with reports of local or remote videos/comments/accounts alike.


## List abuses

<a id="opIdgetAbuses"></a>

> Code samples

```bash
curl https://example.com/api/v1/abuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/abuses`

<h3 id="list-abuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|false|only list the report with this id|
|predefinedReason|query|[PredefinedAbuseReasons](#schemapredefinedabusereasons)|false|predefined reason the listed reports should contain|
|search|query|string|false|plain search that will match with video titles, reporter names and more|
|state|query|[AbuseStateSet](#schemaabusestateset)|false|none|
|searchReporter|query|string|false|only list reports of a specific reporter|
|searchReportee|query|string|false|only list reports of a specific reportee|
|searchVideo|query|string|false|only list reports of a specific video|
|searchVideoChannel|query|string|false|only list reports of a specific video channel|
|videoIs|query|string|false|only list deleted or blocklisted videos|
|filter|query|string|false|only list account, comment or video reports|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort abuses by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|predefinedReason|violentOrAbusive|
|predefinedReason|hatefulOrAbusive|
|predefinedReason|spamOrMisleading|
|predefinedReason|privacy|
|predefinedReason|rights|
|predefinedReason|serverRules|
|predefinedReason|thumbnails|
|predefinedReason|captions|
|state|1|
|state|2|
|state|3|
|videoIs|deleted|
|videoIs|blacklisted|
|filter|video|
|filter|comment|
|filter|account|
|sort|-id|
|sort|-createdAt|
|sort|-state|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 42,
      "moderationComment": "Decided to ban the server since it spams us regularly",
      "predefinedReasons": [
        "spamOrMisleading"
      ],
      "reason": "The video is a spam",
      "reporterAccount": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "description": "string",
        "displayName": "string",
        "userId": {}
      },
      "state": {
        "id": 1,
        "label": "string"
      },
      "video": {
        "id": {},
        "name": "What is PeerTube?",
        "uuid": {}
      }
    }
  ],
  "total": 1
}
```

<h3 id="list-abuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-abuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Abuse](#schemaabuse)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Report an abuse

> Code samples

```bash
curl https://example.com/api/v1/abuses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account": {
      "id": 0
    },
    "comment": {
      "id": {}
    },
    "predefinedReasons": [
      "violentOrAbusive"
    ],
    "reason": "string",
    "video": {
      "endAt": 0,
      "id": {},
      "startAt": 0
    }
  }'
```

`POST /api/v1/abuses`

> Body parameter

```json
{
  "account": {
    "id": 0
  },
  "comment": {
    "id": {}
  },
  "predefinedReasons": [
    "violentOrAbusive"
  ],
  "reason": "string",
  "video": {
    "endAt": 0,
    "id": {},
    "startAt": 0
  }
}
```

<h3 id="report-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» account|body|object|false|none|
|» » id|body|integer|false|Account id to report|
|» comment|body|object|false|none|
|» » id|body|object|false|Comment id to report|
|» predefinedReasons|body|[PredefinedAbuseReasons](#schemapredefinedabusereasons)|false|Reason categories that help triage reports|
|» reason|body|string|true|Reason why the user reports this video|
|» video|body|object|false|none|
|» » endAt|body|integer(seconds)|false|Timestamp in the video that marks the ending of the report|
|» » id|body|object|false|Video id to report|
|» » startAt|body|integer(seconds)|false|Timestamp in the video that marks the beginning of the report|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» predefinedReasons|violentOrAbusive|
|» predefinedReasons|hatefulOrAbusive|
|» predefinedReasons|spamOrMisleading|
|» predefinedReasons|privacy|
|» predefinedReasons|rights|
|» predefinedReasons|serverRules|
|» predefinedReasons|thumbnails|
|» predefinedReasons|captions|

> Example responses

> 200 Response

```json
{
  "abuse": {
    "id": 42
  }
}
```

<h3 id="report-an-abuse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|incorrect request parameters|None|

<h3 id="report-an-abuse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abuse|object|false|none|none|
|» id|[id](#schemaid)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update an abuse

> Code samples

```bash
curl https://example.com/api/v1/abuses/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "moderationComment": "string",
    "state": 1
  }'
```

`PUT /api/v1/abuses/{abuseId}`

> Body parameter

```json
{
  "moderationComment": "string",
  "state": 1
}
```

<h3 id="update-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abuseId|path|[id](#schemaid)|true|Abuse id|
|body|body|object|false|none|
|» moderationComment|body|string|false|Update the report comment visible only to the moderation team|
|» state|body|[AbuseStateSet](#schemaabusestateset)|false|The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|1|
|» state|2|
|» state|3|

<h3 id="update-an-abuse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|abuse not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Delete an abuse

> Code samples

```bash
curl https://example.com/api/v1/abuses/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/abuses/{abuseId}`

<h3 id="delete-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abuseId|path|[id](#schemaid)|true|Abuse id|

<h3 id="delete-an-abuse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|block not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## List messages of an abuse

> Code samples

```bash
curl https://example.com/api/v1/abuses/42/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/abuses/{abuseId}/messages`

<h3 id="list-messages-of-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abuseId|path|[id](#schemaid)|true|Abuse id|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "byModerator": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 42,
      "message": "string"
    }
  ],
  "total": 1
}
```

<h3 id="list-messages-of-an-abuse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-messages-of-an-abuse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AbuseMessage](#schemaabusemessage)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Add message to an abuse

> Code samples

```bash
curl https://example.com/api/v1/abuses/42/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string"
  }'
```

`POST /api/v1/abuses/{abuseId}/messages`

> Body parameter

```json
{
  "message": "string"
}
```

<h3 id="add-message-to-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abuseId|path|[id](#schemaid)|true|Abuse id|
|body|body|object|true|none|
|» message|body|string|true|Message to send|

<h3 id="add-message-to-an-abuse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|incorrect request parameters|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete an abuse message

> Code samples

```bash
curl https://example.com/api/v1/abuses/42/messages/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/abuses/{abuseId}/messages/{abuseMessageId}`

<h3 id="delete-an-abuse-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abuseId|path|[id](#schemaid)|true|Abuse id|
|abuseMessageId|path|[id](#schemaid)|true|Abuse message id|

<h3 id="delete-an-abuse-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List my abuses

<a id="opIdgetMyAbuses"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/me/abuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/abuses`

<h3 id="list-my-abuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|false|only list the report with this id|
|state|query|[AbuseStateSet](#schemaabusestateset)|false|none|
|sort|query|string|false|Sort abuses by criteria|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|1|
|state|2|
|state|3|
|sort|-id|
|sort|-createdAt|
|sort|-state|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 42,
      "moderationComment": "Decided to ban the server since it spams us regularly",
      "predefinedReasons": [
        "spamOrMisleading"
      ],
      "reason": "The video is a spam",
      "reporterAccount": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "description": "string",
        "displayName": "string",
        "userId": {}
      },
      "state": {
        "id": 1,
        "label": "string"
      },
      "video": {
        "id": {},
        "name": "What is PeerTube?",
        "uuid": {}
      }
    }
  ],
  "total": 1
}
```

<h3 id="list-my-abuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-my-abuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Abuse](#schemaabuse)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video">Video</h1>

Operations dealing with listing, uploading, fetching or modifying videos.


## List videos of a video channel

<a id="opIdgetVideoChannelVideos"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/video-channels/{channelHandle}/videos`

<h3 id="list-videos-of-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|isLive|query|boolean|false|whether or not the video is a live|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|
|skipCount|query|string|false|if you don't need the `total` in the response|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-trending|
|sort|-hot|
|sort|-best|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="list-videos-of-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List videos

<a id="opIdgetVideos"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/videos`

<h3 id="list-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|isLive|query|boolean|false|whether or not the video is a live|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|
|skipCount|query|string|false|if you don't need the `total` in the response|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-trending|
|sort|-hot|
|sort|-best|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="list-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List available video categories

<a id="opIdgetCategories"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/categories \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/categories`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-available-video-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-available-video-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List available video languages

<a id="opIdgetLanguages"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/languages \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/languages`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-available-video-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-available-video-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List available video licences

<a id="opIdgetLicences"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/licences \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/licences`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-available-video-licences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-available-video-licences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List available video privacy policies

<a id="opIdgetPrivacyPolicies"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/privacies \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/privacies`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-available-video-privacy-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-available-video-privacy-policies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Upload a video

<a id="opIduploadLegacy"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'category=15' \
  -F 'channelId=3' \
  -F 'commentsEnabled=true' \
  -F 'description=**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\r\n\r\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**
' \
  -F 'downloadEnabled=true' \
  -F 'language=en' \
  -F 'licence=2' \
  -F 'name=What is PeerTube?' \
  -F 'nsfw=true' \
  -F 'originallyPublishedAt=1970-01-01T00:00:00Z' \
  -F 'previewfile=string' \
  -F 'privacy=1' \
  -F 'scheduleUpdate={"privacy":1,"updateAt":"1970-01-01"}' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'tags=["framasoft","peertube"]' \
  -F 'thumbnailfile=string' \
  -F 'waitTranscoding=true' \
  -F 'videofile=string'
```

`POST /api/v1/videos/upload`

Uses a single request to upload a video.

> Body parameter

```yaml
category: 15
channelId: 3
commentsEnabled: true
description: "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n"
downloadEnabled: true
language: en
licence: 2
name: "What is PeerTube?"
nsfw: true
originallyPublishedAt: "1970-01-01T00:00:00Z"
previewfile: string
privacy: 1
scheduleUpdate:
  privacy: 1
  updateAt: "1970-01-01"
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
tags:
  - framasoft
  - peertube
thumbnailfile: string
waitTranscoding: true
videofile: string
```

<h3 id="upload-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoUploadRequestLegacy](#schemavideouploadrequestlegacy)|false|none|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» channelId|body|integer|true|Channel id that will contain this video|
|» commentsEnabled|body|boolean|false|Enable or disable comments for this video|
|» description|body|string|false|Video description|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» name|body|string|true|Video name|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» previewfile|body|string(binary)|false|Video preview file|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» waitTranscoding|body|boolean|false|Whether or not we wait transcoding before publish the video|
|» videofile|body|string(binary)|true|Video file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "shortUUID": {},
    "uuid": {}
  }
}
```

<h3 id="upload-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoUploadResponse](#schemavideouploadresponse)|
|403|Forbidden|video didn't pass upload filter|None|
|408|Request Timeout|upload has timed out|None|
|413|Payload Too Large|If the response has no body, it means the reverse-proxy didn't let it through. Otherwise disambiguate via `type`:<br>- `quota_reached` for quota limits whether daily or global<br>|None|
|415|Unsupported Media Type|video type unsupported|None|
|422|Unprocessable Entity|video unreadable|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the video|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Send chunk for the resumable upload of a video

<a id="opIduploadResumable"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/videos/upload-resumable?upload_id=string' \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Range: bytes 0-262143/2469036' \
  -H 'Content-Length: 262144' \
  --data-binary '@/path/to/file'
```

`PUT /api/v1/videos/upload-resumable`

Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to continue, pause or resume the upload of a video

<h3 id="send-chunk-for-the-resumable-upload-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last hour, it is<br>not valid anymore and you need to initialize a new upload.<br>|
|Content-Range|header|string|true|Specifies the bytes in the file that the request is uploading.<br><br>For example, a value of `bytes 0-262143/1000000` shows that the request is sending the first<br>262144 bytes (256 x 1024) in a 2,469,036 byte file.<br>|
|Content-Length|header|number|true|Size of the chunk that the request is sending.<br><br>Remember that larger chunks are more efficient. PeerTube's web client uses chunks varying from<br>1048576 bytes (~1MB) and increases or reduces size depending on connection health.<br>|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "shortUUID": {},
    "uuid": {}
  }
}
```

<h3 id="send-chunk-for-the-resumable-upload-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|last chunk received|[VideoUploadResponse](#schemavideouploadresponse)|
|308|Permanent Redirect|resume incomplete|None|
|403|Forbidden|video didn't pass upload filter|None|
|404|Not Found|upload not found|None|
|409|Conflict|chunk doesn't match range|None|
|422|Unprocessable Entity|video unreadable|None|
|429|Too Many Requests|too many concurrent requests|None|
|503|Service Unavailable|upload is already being processed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Length|number||none|
|308|Content-Length|number||none|
|308|Range|string||none|
|503|Retry-After|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Initialize the resumable upload of a video

<a id="opIduploadResumableInit"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/upload-resumable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-Upload-Content-Length: 2469036' \
  -H 'X-Upload-Content-Type: video/mp4' \
  -d '{
    "category": 15,
    "channelId": 3,
    "commentsEnabled": true,
    "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
    "downloadEnabled": true,
    "language": "en",
    "licence": 2,
    "name": "What is PeerTube?",
    "nsfw": true,
    "originallyPublishedAt": "1970-01-01T00:00:00Z",
    "previewfile": "string",
    "privacy": 1,
    "scheduleUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01"
    },
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
    "tags": [
      "framasoft",
      "peertube"
    ],
    "thumbnailfile": "string",
    "waitTranscoding": true,
    "filename": "what_is_peertube.mp4"
  }'
```

`POST /api/v1/videos/upload-resumable`

Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the upload of a video

> Body parameter

```json
{
  "category": 15,
  "channelId": 3,
  "commentsEnabled": true,
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "downloadEnabled": true,
  "language": "en",
  "licence": 2,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "previewfile": "string",
  "privacy": 1,
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "framasoft",
    "peertube"
  ],
  "thumbnailfile": "string",
  "waitTranscoding": true,
  "filename": "what_is_peertube.mp4"
}
```

<h3 id="initialize-the-resumable-upload-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Upload-Content-Length|header|number|true|Number of bytes that will be uploaded in subsequent requests. Set this value to the size of the file you are uploading.|
|X-Upload-Content-Type|header|string(mimetype)|true|MIME type of the file that you are uploading. Depending on your instance settings, acceptable values might vary.|
|body|body|[VideoUploadRequestResumable](#schemavideouploadrequestresumable)|false|none|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» channelId|body|integer|true|Channel id that will contain this video|
|» commentsEnabled|body|boolean|false|Enable or disable comments for this video|
|» description|body|string|false|Video description|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» name|body|string|true|Video name|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» previewfile|body|string(binary)|false|Video preview file|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» waitTranscoding|body|boolean|false|Whether or not we wait transcoding before publish the video|
|» filename|body|string(filename)|true|Video filename including extension|
|» previewfile|body|string(binary)|false|Video preview file|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|

<h3 id="initialize-the-resumable-upload-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|file already exists, send a [`resume`](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) request instead|None|
|201|Created|created|None|
|413|Payload Too Large|Disambiguate via `type`:<br>- `max_file_size_reached` for the absolute file size limit<br>- `quota_reached` for quota limits whether daily or global<br>|None|
|415|Unsupported Media Type|video type unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Content-Length|number||none|
|201|Location|string|url|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Cancel the resumable upload of a video, deleting any data uploaded so far

<a id="opIduploadResumableCancel"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/videos/upload-resumable?upload_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Length: 0'
```

`DELETE /api/v1/videos/upload-resumable`

Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the upload of a video

<h3 id="cancel-the-resumable-upload-of-a-video-deleting-any-data-uploaded-so-far-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last 12 hours, it is<br>not valid anymore and the upload session has already been deleted with its data ;-)<br>|
|Content-Length|header|number|true|none|

<h3 id="cancel-the-resumable-upload-of-a-video-deleting-any-data-uploaded-so-far-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|upload cancelled|None|
|404|Not Found|upload not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Content-Length|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a video

<a id="opIdgetVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42 \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}`

<h3 id="get-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "account": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "blacklisted": true,
  "blacklistedReason": "string",
  "category": {
    "id": 15,
    "label": "Science & Technology"
  },
  "channel": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "banners": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "description": "Videos made with <3 by Framasoft",
    "displayName": "Videos of Framasoft",
    "isLocal": true,
    "ownerAccount": {
      "id": 0,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
    },
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
  },
  "createdAt": "2017-10-01T10:52:46.396Z",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
  "dislikes": 7,
  "duration": 1419,
  "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
  "id": {},
  "isLive": true,
  "isLocal": true,
  "language": {
    "id": "en",
    "label": "English"
  },
  "licence": {
    "id": 2,
    "label": "Attribution - Share Alike"
  },
  "likes": 42,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
  "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "publishedAt": "2018-10-01T10:52:46.396Z",
  "scheduledUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "shortUUID": {},
  "state": {
    "id": 1,
    "label": "string"
  },
  "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "userHistory": {
    "currentTime": 0
  },
  "uuid": {},
  "views": 1337,
  "waitTranscoding": true,
  "commentsEnabled": true,
  "descriptionPath": "/api/v1/videos/9c9de5e8-0a1e-484a-b099-e80766180a6d/description",
  "downloadEnabled": true,
  "files": [
    {
      "fileDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "fps": 0,
      "id": 42,
      "magnetUri": "http://example.com",
      "metadataUrl": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentDownloadUrl": "http://example.com",
      "torrentUrl": "http://example.com"
    }
  ],
  "streamingPlaylists": [
    {
      "id": 42,
      "type": 1,
      "files": [
        {
          "fileDownloadUrl": "http://example.com",
          "fileUrl": "http://example.com",
          "fps": 0,
          "id": 42,
          "magnetUri": "http://example.com",
          "metadataUrl": "http://example.com",
          "resolution": {
            "id": 240,
            "label": "240p"
          },
          "size": 0,
          "torrentDownloadUrl": "http://example.com",
          "torrentUrl": "http://example.com"
        }
      ],
      "playlistUrl": "http://example.com",
      "redundancies": [
        {
          "baseUrl": "http://example.com"
        }
      ],
      "segmentsSha256Url": "http://example.com"
    }
  ],
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "flowers",
    "gardening"
  ],
  "trackerUrls": [
    "https://peertube2.cpy.re/tracker/announce",
    "wss://peertube2.cpy.re/tracker/socket"
  ],
  "viewers": 0
}
```

<h3 id="get-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoDetails](#schemavideodetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a video

<a id="opIdputVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'category=15' \
  -F 'commentsEnabled=true' \
  -F 'description=string' \
  -F 'downloadEnabled=true' \
  -F 'language=en' \
  -F 'licence=2' \
  -F 'name=string' \
  -F 'nsfw=true' \
  -F 'originallyPublishedAt=1970-01-01T00:00:00Z' \
  -F 'previewfile=@/path/to/file' \
  -F 'privacy=1' \
  -F 'scheduleUpdate={"privacy":1,"updateAt":"1970-01-01"}' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'tags=["string"]' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'waitTranscoding=string'
```

`PUT /api/v1/videos/{id}`

> Body parameter

```yaml
category: 15
commentsEnabled: true
description: string
downloadEnabled: true
language: en
licence: 2
name: string
nsfw: true
originallyPublishedAt: "1970-01-01T00:00:00Z"
previewfile: string
privacy: 1
scheduleUpdate:
  privacy: 1
  updateAt: "1970-01-01"
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
tags:
  - string
thumbnailfile: string
waitTranscoding: string
```

<h3 id="update-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» commentsEnabled|body|boolean|false|Enable or disable comments for this video|
|» description|body|string|false|Video description|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» name|body|string|false|Video name|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» previewfile|body|string(binary)|false|Video preview file|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» waitTranscoding|body|string|false|Whether or not we wait transcoding before publish the video|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|

<h3 id="update-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a video

<a id="opIddelVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}`

<h3 id="delete-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get complete video description

<a id="opIdgetVideoDesc"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/description \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/description`

<h3 id="get-complete-video-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
"**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n"
```

<h3 id="get-complete-video-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get video source file metadata

<a id="opIdgetVideoSource"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/source \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/v1/videos/{id}/source`

<h3 id="get-video-source-file-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "filename": "string"
}
```

<h3 id="get-video-source-file-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoSource](#schemavideosource)|

<aside class="success">
This operation does not require authentication
</aside>

## Request video token

<a id="opIdrequestVideoToken"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/{id}/token`

Request special tokens that expire quickly to use them in some context (like accessing private static files)

<h3 id="request-video-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "files": {
    "expires": "1970-01-01T00:00:00Z",
    "token": "string"
  }
}
```

<h3 id="request-video-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoTokenResponse](#schemavideotokenresponse)|
|400|Bad Request|incorrect parameters|None|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Notify user is watching a video

<a id="opIdaddView"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "currentTime": 5,
    "viewEvent": "seek"
  }'
```

`POST /api/v1/videos/{id}/views`

Call this endpoint regularly (every 5-10 seconds for example) to notify the server the user is watching the video. After a while, PeerTube will increase video's viewers counter. If the user is authenticated, PeerTube will also store the current player time.

> Body parameter

```json
{
  "currentTime": 5,
  "viewEvent": "seek"
}
```

<h3 id="notify-user-is-watching-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[UserViewingVideo](#schemauserviewingvideo)|true|none|
|» currentTime|body|integer(seconds)|true|timestamp within the video, in seconds|
|» viewEvent|body|string|false|Event since last viewing call:<br> * `seek` - If the user seeked the video<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» viewEvent|seek|

<h3 id="notify-user-is-watching-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Set watching progress of a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/watching \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentTime": 5,
    "viewEvent": "seek"
  }'
```

`PUT /api/v1/videos/{id}/watching`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint has been deprecated. Use `/videos/{id}/views` instead

> Body parameter

```json
{
  "currentTime": 5,
  "viewEvent": "seek"
}
```

<h3 id="set-watching-progress-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[UserViewingVideo](#schemauserviewingvideo)|true|none|
|» currentTime|body|integer(seconds)|true|timestamp within the video, in seconds|
|» viewEvent|body|string|false|Event since last viewing call:<br> * `seek` - If the user seeked the video<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» viewEvent|seek|

<h3 id="set-watching-progress-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-imports">Video Imports</h1>

Operations dealing with listing, adding and removing video imports.

## Import a video

<a id="opIdimportVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/imports \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'targetUrl=https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d' \
  -F 'category=15' \
  -F 'channelId=3' \
  -F 'commentsEnabled=true' \
  -F 'description=**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\r\n\r\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**
' \
  -F 'downloadEnabled=true' \
  -F 'language=en' \
  -F 'licence=2' \
  -F 'name=What is PeerTube?' \
  -F 'nsfw=true' \
  -F 'originallyPublishedAt=1970-01-01T00:00:00Z' \
  -F 'previewfile=string' \
  -F 'privacy=1' \
  -F 'scheduleUpdate={"privacy":1,"updateAt":"1970-01-01"}' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'tags=["framasoft","peertube"]' \
  -F 'thumbnailfile=string' \
  -F 'waitTranscoding=true'
```

`POST /api/v1/videos/imports`

Import a torrent or magnetURI or HTTP resource (if enabled by the instance administrator)

> Body parameter

```yaml
targetUrl: "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d"
category: 15
channelId: 3
commentsEnabled: true
description: "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n"
downloadEnabled: true
language: en
licence: 2
name: "What is PeerTube?"
nsfw: true
originallyPublishedAt: "1970-01-01T00:00:00Z"
previewfile: string
privacy: 1
scheduleUpdate:
  privacy: 1
  updateAt: "1970-01-01"
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
tags:
  - framasoft
  - peertube
thumbnailfile: string
waitTranscoding: true
```

<h3 id="import-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoCreateImport](#schemavideocreateimport)|false|none|
|» *oneOf*|body|object|false|none|
|» targetUrl|body|string(url)|true|remote URL where to find the import's source video|
|» *oneOf*|body|object|false|none|
|» magnetUri|body|string(uri)|true|magnet URI allowing to resolve the import's source video|
|» *oneOf*|body|object|false|none|
|» torrentfile|body|string(binary)|true|Torrent file containing only the video file|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» channelId|body|integer|true|Channel id that will contain this video|
|» commentsEnabled|body|boolean|false|Enable or disable comments for this video|
|» description|body|string|false|Video description|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» name|body|string|true|Video name|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» previewfile|body|string(binary)|false|Video preview file|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» waitTranscoding|body|boolean|false|Whether or not we wait transcoding before publish the video|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "shortUUID": {},
    "uuid": {}
  }
}
```

<h3 id="import-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoUploadResponse](#schemavideouploadresponse)|
|400|Bad Request|`magnetUri` or `targetUrl` or a torrent file missing|None|
|403|Forbidden|video didn't pass pre-import filter|None|
|409|Conflict|HTTP or Torrent/magnetURI import not enabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete video import

> Code samples

```bash
curl https://example.com/api/v1/videos/imports/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/imports/{id}`

Delete ended video import

<h3 id="delete-video-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|

<h3 id="delete-video-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Cancel video import

> Code samples

```bash
curl https://example.com/api/v1/videos/imports/42/cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/imports/{id}/cancel`

Cancel a pending video import

<h3 id="cancel-video-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|

<h3 id="cancel-video-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-channels-sync">Channels Sync</h1>

Operations dealing with synchronizing PeerTube user's channel with channels of other platforms

## Create a synchronization for a video channel

<a id="opIdaddVideoChannelSync"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channel-syncs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
    "videoChannelId": 42
  }'
```

`POST /api/v1/video-channel-syncs`

> Body parameter

```json
{
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "videoChannelId": 42
}
```

<h3 id="create-a-synchronization-for-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoChannelSyncCreate](#schemavideochannelsynccreate)|false|none|
|» externalChannelUrl|body|string|false|none|
|» videoChannelId|body|[id](#schemaid)|false|none|

> Example responses

> 200 Response

```json
{
  "videoChannelSync": {
    "channel": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
    "id": 42,
    "lastSyncAt": "1970-01-01T00:00:00Z",
    "state": {
      "id": 2,
      "label": "PROCESSING"
    }
  }
}
```

<h3 id="create-a-synchronization-for-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="create-a-synchronization-for-a-video-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoChannelSync|[VideoChannelSync](#schemavideochannelsync)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a video channel synchronization

<a id="opIddelVideoChannelSync"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channel-syncs/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-channel-syncs/{channelSyncId}`

<h3 id="delete-a-video-channel-synchronization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelSyncId|path|[id](#schemaid)|true|Channel Sync id|

<h3 id="delete-a-video-channel-synchronization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Triggers the channel synchronization job, fetching all the videos from the remote channel

<a id="opIdtriggerVideoChannelSync"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channel-syncs/42/sync \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/video-channel-syncs/{channelSyncId}/sync`

<h3 id="triggers-the-channel-synchronization-job-fetching-all-the-videos-from-the-remote-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelSyncId|path|[id](#schemaid)|true|Channel Sync id|

<h3 id="triggers-the-channel-synchronization-job-fetching-all-the-videos-from-the-remote-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-captions">Video Captions</h1>

Operations dealing with listing, adding and removing closed captions of a video.

## List captions of a video

<a id="opIdgetVideoCaptions"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/captions \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/captions`

<h3 id="list-captions-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "captionPath": "string",
      "language": {
        "id": "en",
        "label": "English"
      }
    }
  ],
  "total": 1
}
```

<h3 id="list-captions-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-captions-of-a-video-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoCaption](#schemavideocaption)]|false|none|none|
|total|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add or replace a video caption

<a id="opIdaddVideoCaption"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/captions/en \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'captionfile=@/path/to/file'
```

`PUT /api/v1/videos/{id}/captions/{captionLanguage}`

> Body parameter

```yaml
captionfile: string
```

<h3 id="add-or-replace-a-video-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|captionLanguage|path|[VideoLanguageSet](#schemavideolanguageset)|true|The caption language|
|body|body|object|false|none|
|» captionfile|body|string(binary)|false|The file to upload.|

<h3 id="add-or-replace-a-video-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video or language not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Delete a video caption

<a id="opIddelVideoCaption"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/captions/en \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/captions/{captionLanguage}`

<h3 id="delete-a-video-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|captionLanguage|path|[VideoLanguageSet](#schemavideolanguageset)|true|The caption language|

<h3 id="delete-a-video-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video or language or caption for that language not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-video-channels">Video Channels</h1>

Operations dealing with the creation, modification and listing of videos within a channel.

## List the synchronizations of video channels of an account

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/video-channel-syncs \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}/video-channel-syncs`

<h3 id="list-the-synchronizations-of-video-channels-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "channel": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "banners": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "description": "Videos made with <3 by Framasoft",
        "displayName": "Videos of Framasoft",
        "isLocal": true,
        "ownerAccount": {
          "id": 0,
          "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
        },
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
      "id": 42,
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "state": {
        "id": 2,
        "label": "PROCESSING"
      }
    }
  ],
  "total": 1
}
```

<h3 id="list-the-synchronizations-of-video-channels-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelSyncList](#schemavideochannelsynclist)|

<aside class="success">
This operation does not require authentication
</aside>

## List video channels of an account

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/video-channels \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}/video-channels`

<h3 id="list-video-channels-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|withStats|query|boolean|false|include daily view statistics for the last 30 days and total views (only if authentified as the account user)|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "total": 1
}
```

<h3 id="list-video-channels-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelList](#schemavideochannellist)|

<aside class="success">
This operation does not require authentication
</aside>

## List video channels

<a id="opIdgetVideoChannels"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels \
  -H 'Accept: application/json'
```

`GET /api/v1/video-channels`

<h3 id="list-video-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "total": 1
}
```

<h3 id="list-video-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelList](#schemavideochannellist)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a video channel

<a id="opIdaddVideoChannel"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": null,
    "displayName": null,
    "support": null,
    "name": {}
  }'
```

`POST /api/v1/video-channels`

> Body parameter

```json
{
  "description": null,
  "displayName": null,
  "support": null,
  "name": {}
}
```

<h3 id="create-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoChannelCreate](#schemavideochannelcreate)|false|none|
|» description|body|object|false|Channel description|
|» displayName|body|object|true|Channel display name|
|» support|body|object|false|How to support/fund the channel|
|» name|body|object|true|username of the channel to create|

> Example responses

> 200 Response

```json
{
  "videoChannel": {
    "id": 42
  }
}
```

<h3 id="create-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="create-a-video-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoChannel|object|false|none|none|
|» id|[id](#schemaid)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a video channel

<a id="opIdgetVideoChannel"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com \
  -H 'Accept: application/json'
```

`GET /api/v1/video-channels/{channelHandle}`

<h3 id="get-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "followersCount": 0,
  "followingCount": 0,
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "id": 42,
  "name": {},
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "banners": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ],
  "description": "Videos made with <3 by Framasoft",
  "displayName": "Videos of Framasoft",
  "isLocal": true,
  "ownerAccount": {
    "id": 0,
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
}
```

<h3 id="get-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannel](#schemavideochannel)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a video channel

<a id="opIdputVideoChannel"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": null,
    "displayName": null,
    "support": null,
    "bulkVideosSupportUpdate": true
  }'
```

`PUT /api/v1/video-channels/{channelHandle}`

> Body parameter

```json
{
  "description": null,
  "displayName": null,
  "support": null,
  "bulkVideosSupportUpdate": true
}
```

<h3 id="update-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|[VideoChannelUpdate](#schemavideochannelupdate)|false|none|
|» description|body|object|false|Channel description|
|» displayName|body|object|false|Channel display name|
|» support|body|object|false|How to support/fund the channel|
|» bulkVideosSupportUpdate|body|boolean|false|Update the support field for all videos of this channel|

<h3 id="update-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a video channel

<a id="opIddelVideoChannel"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-channels/{channelHandle}`

<h3 id="delete-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|

<h3 id="delete-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete channel avatar

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/avatar \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-channels/{channelHandle}/avatar`

<h3 id="delete-channel-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|

<h3 id="delete-channel-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update channel avatar

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/avatar/pick \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'avatarfile=@/path/to/file'
```

`POST /api/v1/video-channels/{channelHandle}/avatar/pick`

> Body parameter

```yaml
avatarfile: string
```

<h3 id="update-channel-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|object|false|none|
|» avatarfile|body|string(binary)|false|The file to upload.|

> Example responses

> 200 Response

```json
{
  "avatars": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ]
}
```

<h3 id="update-channel-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|413|Payload Too Large|image file too large|None|

<h3 id="update-channel-avatar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the avatar|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete channel banner

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/banner \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-channels/{channelHandle}/banner`

<h3 id="delete-channel-banner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|

<h3 id="delete-channel-banner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update channel banner

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/banner/pick \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'bannerfile=@/path/to/file'
```

`POST /api/v1/video-channels/{channelHandle}/banner/pick`

> Body parameter

```yaml
bannerfile: string
```

<h3 id="update-channel-banner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|object|false|none|
|» bannerfile|body|string(binary)|false|The file to upload.|

> Example responses

> 200 Response

```json
{
  "banners": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ]
}
```

<h3 id="update-channel-banner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|413|Payload Too Large|image file too large|None|

<h3 id="update-channel-banner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banners|[[ActorImage](#schemaactorimage)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the banner|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List followers of a video channel

<a id="opIdgetVideoChannelFollowers"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/video-channels/{channelHandle}/followers`

<h3 id="list-followers-of-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort followers by criteria|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "follower": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "following": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com"
      },
      "id": 42,
      "score": 0,
      "state": "pending",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 1
}
```

<h3 id="list-followers-of-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-followers-of-a-video-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Follow](#schemafollow)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Import videos in channel

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/import-videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
    "videoChannelSyncId": 0
  }'
```

`POST /api/v1/video-channels/{channelHandle}/import-videos`

Import a remote channel/playlist videos into a channel

> Body parameter

```json
{
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "videoChannelSyncId": 0
}
```

<h3 id="import-videos-in-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|[ImportVideosInChannelCreate](#schemaimportvideosinchannelcreate)|false|none|
|» externalChannelUrl|body|string|true|none|
|» videoChannelSyncId|body|integer|false|If part of a channel sync process, specify its id to assign video imports to this channel synchronization|

<h3 id="import-videos-in-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-comments">Video Comments</h1>

Operations dealing with comments to a video. Comments are organized in threads: adding a comment in response to the video starts a thread, adding a reply to a comment adds it to its root comment thread.


## List threads of a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/comment-threads \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/comment-threads`

<h3 id="list-threads-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort comments by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-createdAt|
|sort|-totalReplies|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "description": "string",
        "displayName": "string",
        "userId": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "deletedAt": null,
      "id": 42,
      "inReplyToCommentId": {},
      "isDeleted": false,
      "text": "This video is wonderful!",
      "threadId": 42,
      "totalReplies": 0,
      "totalRepliesFromVideoAuthor": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "videoId": {}
    }
  ],
  "total": 1
}
```

<h3 id="list-threads-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CommentThreadResponse](#schemacommentthreadresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a thread

> Code samples

```bash
curl https://example.com/api/v1/videos/42/comment-threads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": {}
  }'
```

`POST /api/v1/videos/{id}/comment-threads`

> Body parameter

```json
{
  "text": {}
}
```

<h3 id="create-a-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» text|body|object(markdown)|true|none|

> Example responses

> 200 Response

```json
{
  "comment": {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "id": 42,
    "inReplyToCommentId": {},
    "isDeleted": false,
    "text": "This video is wonderful!",
    "threadId": 42,
    "totalReplies": 0,
    "totalRepliesFromVideoAuthor": 0,
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "videoId": {}
  }
}
```

<h3 id="create-a-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CommentThreadPostResponse](#schemacommentthreadpostresponse)|
|404|Not Found|video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a thread

> Code samples

```bash
curl https://example.com/api/v1/videos/42/comment-threads/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/comment-threads/{threadId}`

<h3 id="get-a-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|threadId|path|integer|true|The thread id (root comment id)|

> Example responses

> 200 Response

```json
{
  "children": [
    {}
  ],
  "comment": {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "id": 42,
    "inReplyToCommentId": {},
    "isDeleted": false,
    "text": "This video is wonderful!",
    "threadId": 42,
    "totalReplies": 0,
    "totalRepliesFromVideoAuthor": 0,
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "videoId": {}
  }
}
```

<h3 id="get-a-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoCommentThreadTree](#schemavideocommentthreadtree)|

<aside class="success">
This operation does not require authentication
</aside>

## Reply to a thread of a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/comments/42 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": {}
  }'
```

`POST /api/v1/videos/{id}/comments/{commentId}`

> Body parameter

```json
{
  "text": {}
}
```

<h3 id="reply-to-a-thread-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|commentId|path|[id](#schemaid)|true|The comment id|
|body|body|object|false|none|
|» text|body|object(markdown)|true|none|

> Example responses

> 200 Response

```json
{
  "comment": {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "id": 42,
    "inReplyToCommentId": {},
    "isDeleted": false,
    "text": "This video is wonderful!",
    "threadId": 42,
    "totalReplies": 0,
    "totalRepliesFromVideoAuthor": 0,
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "videoId": {}
  }
}
```

<h3 id="reply-to-a-thread-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CommentThreadPostResponse](#schemacommentthreadpostresponse)|
|404|Not Found|thread or video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a comment or a reply

> Code samples

```bash
curl https://example.com/api/v1/videos/42/comments/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/comments/{commentId}`

<h3 id="delete-a-comment-or-a-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|commentId|path|[id](#schemaid)|true|The comment id|

<h3 id="delete-a-comment-or-a-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|cannot remove comment of another user|None|
|404|Not Found|comment or video does not exist|None|
|409|Conflict|comment is already deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-blocks">Video Blocks</h1>

Operations dealing with blocking videos (removing them from view and preventing interactions).

## List video blocks

<a id="opIdgetVideoBlocks"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/blacklist \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/blacklist`

<h3 id="list-video-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|integer|false|list only blocks that match this type:<br>- `1`: manual block<br>- `2`: automatic block that needs review<br>|
|search|query|string|false|plain search that will match with video titles, and more|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort blocklists by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|1|
|type|2|
|sort|-id|
|sort|name|
|sort|-duration|
|sort|-views|
|sort|-likes|
|sort|-dislikes|
|sort|-uuid|
|sort|-createdAt|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "dislikes": 0,
      "duration": 0,
      "id": 42,
      "likes": 0,
      "name": "string",
      "nsfw": true,
      "updatedAt": "1970-01-01T00:00:00Z",
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "videoId": {},
      "views": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-video-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-video-blocks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoBlacklist](#schemavideoblacklist)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Block a video

<a id="opIdaddVideoBlock"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/blacklist \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/{id}/blacklist`

<h3 id="block-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="block-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Unblock a video by its id

<a id="opIddelVideoBlock"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/blacklist \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/blacklist`

<h3 id="unblock-a-video-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="unblock-a-video-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|block not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

<h1 id="peertube-video-rates">Video Rates</h1>

Like/dislike a video.

## Like/dislike a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/rate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rating": "like"
  }'
```

`PUT /api/v1/videos/{id}/rate`

> Body parameter

```json
{
  "rating": "like"
}
```

<h3 id="likedislike-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» rating|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rating|like|
|» rating|dislike|

<h3 id="likedislike-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-playlists">Video Playlists</h1>

Operations dealing with playlists of videos. Playlists are bound to users and/or channels.

## List playlists of an account

> Code samples

```bash
curl https://example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/video-playlists \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}/video-playlists`

<h3 id="list-playlists-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|
|playlistType|query|[VideoPlaylistTypeSet](#schemavideoplaylisttypeset)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|playlistType|1|
|playlistType|2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "id": 42,
      "isLocal": true,
      "ownerAccount": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "shortUUID": {},
      "thumbnailPath": "string",
      "type": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "videoChannel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "videoLength": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-playlists-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-playlists-of-an-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|
|total|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check video exists in my playlists

> Code samples

```bash
curl 'https://example.com/api/v1/users/me/video-playlists/videos-exist?videoIds=%7B%7D' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/video-playlists/videos-exist`

<h3 id="check-video-exists-in-my-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoIds|query|[object]|true|The video ids to check|

> Example responses

> 200 Response

```json
{
  "videoId": [
    {
      "playlistElementId": 0,
      "playlistId": 0,
      "startTimestamp": 0,
      "stopTimestamp": 0
    }
  ]
}
```

<h3 id="check-video-exists-in-my-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="check-video-exists-in-my-playlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoId|[object]|false|none|none|
|» playlistElementId|integer|false|none|none|
|» playlistId|integer|false|none|none|
|» startTimestamp|integer(seconds)|false|none|none|
|» stopTimestamp|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List playlists of a channel

> Code samples

```bash
curl https://example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/video-playlists \
  -H 'Accept: application/json'
```

`GET /api/v1/video-channels/{channelHandle}/video-playlists`

<h3 id="list-playlists-of-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|playlistType|query|[VideoPlaylistTypeSet](#schemavideoplaylisttypeset)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|playlistType|1|
|playlistType|2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "id": 42,
      "isLocal": true,
      "ownerAccount": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "shortUUID": {},
      "thumbnailPath": "string",
      "type": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "videoChannel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "videoLength": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-playlists-of-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-playlists-of-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|
|total|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List video playlists

<a id="opIdgetPlaylists"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists \
  -H 'Accept: application/json'
```

`GET /api/v1/video-playlists`

<h3 id="list-video-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|playlistType|query|[VideoPlaylistTypeSet](#schemavideoplaylisttypeset)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|playlistType|1|
|playlistType|2|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "id": 42,
      "isLocal": true,
      "ownerAccount": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "shortUUID": {},
      "thumbnailPath": "string",
      "type": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "videoChannel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "videoLength": 0
    }
  ],
  "total": 1
}
```

<h3 id="list-video-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-video-playlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|
|total|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a video playlist

<a id="opIdaddPlaylist"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'description=string' \
  -F 'displayName=string' \
  -F 'privacy=1' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'videoChannelId={}'
```

`POST /api/v1/video-playlists`

If the video playlist is set as public, `videoChannelId` is mandatory.

> Body parameter

```yaml
description: string
displayName: string
privacy: 1
thumbnailfile: string
videoChannelId: {}
```

<h3 id="create-a-video-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|Video playlist description|
|» displayName|body|string|true|Video playlist display name|
|» privacy|body|[VideoPlaylistPrivacySet](#schemavideoplaylistprivacyset)|false|Video playlist privacy policy (see [/video-playlists/privacies])|
|» thumbnailfile|body|string(binary)|false|Video playlist thumbnail file|
|» videoChannelId|body|object|false|Video channel in which the playlist will be published|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|

> Example responses

> 200 Response

```json
{
  "videoPlaylist": {
    "id": 42,
    "shortUUID": {},
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  }
}
```

<h3 id="create-a-video-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="create-a-video-playlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoPlaylist|object|false|none|none|
|» id|[id](#schemaid)|false|none|none|
|» shortUUID|object|false|none|none|
|» uuid|[UUIDv4](#schemauuidv4)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List available playlist privacy policies

<a id="opIdgetPlaylistPrivacyPolicies"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/privacies \
  -H 'Accept: application/json'
```

`GET /api/v1/video-playlists/privacies`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-available-playlist-privacy-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-available-playlist-privacy-policies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a video playlist

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42 \
  -H 'Accept: application/json'
```

`GET /api/v1/video-playlists/{playlistId}`

<h3 id="get-a-video-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "id": 42,
  "isLocal": true,
  "ownerAccount": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "shortUUID": {},
  "thumbnailPath": "string",
  "type": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "videoChannel": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 42,
    "name": "string",
    "url": "http://example.com"
  },
  "videoLength": 0
}
```

<h3 id="get-a-video-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoPlaylist](#schemavideoplaylist)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a video playlist

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'description=string' \
  -F 'displayName=string' \
  -F 'privacy=1' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'videoChannelId={}'
```

`PUT /api/v1/video-playlists/{playlistId}`

If the video playlist is set as public, the playlist must have a assigned channel.

> Body parameter

```yaml
description: string
displayName: string
privacy: 1
thumbnailfile: string
videoChannelId: {}
```

<h3 id="update-a-video-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|body|body|object|false|none|
|» description|body|string|false|Video playlist description|
|» displayName|body|string|false|Video playlist display name|
|» privacy|body|[VideoPlaylistPrivacySet](#schemavideoplaylistprivacyset)|false|Video playlist privacy policy (see [/video-playlists/privacies])|
|» thumbnailfile|body|string(binary)|false|Video playlist thumbnail file|
|» videoChannelId|body|object|false|Video channel in which the playlist will be published|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|

<h3 id="update-a-video-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a video playlist

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-playlists/{playlistId}`

<h3 id="delete-a-video-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|

<h3 id="delete-a-video-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Reorder a playlist

<a id="opIdreorderVideoPlaylist"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42/videos/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "insertAfterPosition": 0,
    "reorderLength": 1,
    "startPosition": 1
  }'
```

`POST /api/v1/video-playlists/{playlistId}/videos/reorder`

> Body parameter

```json
{
  "insertAfterPosition": 0,
  "reorderLength": 1,
  "startPosition": 1
}
```

<h3 id="reorder-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|body|body|object|false|none|
|» insertAfterPosition|body|integer|true|New position for the block to reorder, to add the block before the first element|
|» reorderLength|body|integer|false|How many element from `startPosition` to reorder|
|» startPosition|body|integer|true|Start position of the element to reorder|

<h3 id="reorder-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update a playlist element

<a id="opIdputVideoPlaylistVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42/videos/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "startTimestamp": 0,
    "stopTimestamp": 0
  }'
```

`PUT /api/v1/video-playlists/{playlistId}/videos/{playlistElementId}`

> Body parameter

```json
{
  "startTimestamp": 0,
  "stopTimestamp": 0
}
```

<h3 id="update-a-playlist-element-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|playlistElementId|path|[id](#schemaid)|true|Playlist element id|
|body|body|object|false|none|
|» startTimestamp|body|integer(seconds)|false|Start the video at this specific timestamp|
|» stopTimestamp|body|integer(seconds)|false|Stop the video at this specific timestamp|

<h3 id="update-a-playlist-element-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete an element from a playlist

<a id="opIddelVideoPlaylistVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42/videos/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-playlists/{playlistId}/videos/{playlistElementId}`

<h3 id="delete-an-element-from-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|playlistElementId|path|[id](#schemaid)|true|Playlist element id|

<h3 id="delete-an-element-from-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-files">Video Files</h1>

Operations on video files

## Delete video HLS files

<a id="opIddelVideoHLS"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/hls \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/hls`

<h3 id="delete-video-hls-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-video-hls-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete video WebTorrent files

<a id="opIddelVideoWebTorrent"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/webtorrent \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/webtorrent`

<h3 id="delete-video-webtorrent-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-video-webtorrent-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-video-transcoding">Video Transcoding</h1>

Video transcoding related operations

## Create a studio task

> Code samples

```bash
curl https://example.com/api/v1/videos/42/studio/edit \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/{id}/studio/edit`

Create a task to edit a video  (cut, add intro/outro etc)

> Body parameter

```yaml
-
  name: cut
  options:
    end: 0
    start: 0
```

<h3 id="create-a-studio-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[VideoStudioCreateTask](#schemavideostudiocreatetask)|true|none|
|» *anyOf*|body|object|false|none|
|» name|body|string|false|none|
|» options|body|object|false|none|
|» » end|body|integer|false|none|
|» » start|body|integer|false|none|
|» *anyOf*|body|object|false|none|
|» name|body|string|false|none|
|» options|body|object|false|none|
|» » file|body|string(binary)|false|none|
|» *anyOf*|body|object|false|none|
|» name|body|string|false|none|
|» options|body|object|false|none|
|» » file|body|string(binary)|false|none|
|» *anyOf*|body|object|false|none|
|» name|body|string|false|none|
|» options|body|object|false|none|
|» » file|body|string(binary)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» name|cut|
|» name|add-intro|
|» name|add-outro|
|» name|add-watermark|

<h3 id="create-a-studio-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|incorrect parameters|None|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create a transcoding job

<a id="opIdcreateVideoTranscoding"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/42/transcoding \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transcodingType": "hls"
  }'
```

`POST /api/v1/videos/{id}/transcoding`

> Body parameter

```json
{
  "transcodingType": "hls"
}
```

<h3 id="create-a-transcoding-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» transcodingType|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» transcodingType|hls|
|» transcodingType|webtorrent|

<h3 id="create-a-transcoding-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-video-feeds">Video Feeds</h1>

Server syndication feeds of videos

## List videos of subscriptions tied to a token

<a id="opIdgetSyndicatedSubscriptionVideos"></a>

> Code samples

```bash
curl 'https://example.com/feeds/subscriptions.xml?accountId=string&token=string' \
  -H 'Accept: application/json'
```

`GET /feeds/subscriptions.{format}`

<h3 id="list-videos-of-subscriptions-tied-to-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))|
|accountId|query|string|true|limit listing to a specific account|
|token|query|string|true|private token allowing access|
|sort|query|string|false|Sort column|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|rss|
|format|rss2|
|format|atom|
|format|atom1|
|format|json|
|format|json1|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|

> Example responses

> 204 Response

```json
{}
```

<h3 id="list-videos-of-subscriptions-tied-to-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|Inline|
|406|Not Acceptable|accept header unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## List comments on videos

<a id="opIdgetSyndicatedComments"></a>

> Code samples

```bash
curl https://example.com/feeds/video-comments.xml \
  -H 'Accept: application/json'
```

`GET /feeds/video-comments.{format}`

<h3 id="list-comments-on-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))|
|videoId|query|string|false|limit listing to a specific video|
|accountId|query|string|false|limit listing to a specific account|
|accountName|query|string|false|limit listing to a specific account|
|videoChannelId|query|string|false|limit listing to a specific video channel|
|videoChannelName|query|string|false|limit listing to a specific video channel|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|rss|
|format|rss2|
|format|atom|
|format|atom1|
|format|json|
|format|json1|

> Example responses

> 204 Response

```json
{}
```

<h3 id="list-comments-on-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|Inline|
|400|Bad Request|Arises when:<br>  - videoId filter is mixed with a channel filter<br>|None|
|404|Not Found|video, video channel or account not found|None|
|406|Not Acceptable|accept header unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## List videos

<a id="opIdgetSyndicatedVideos"></a>

> Code samples

```bash
curl https://example.com/feeds/videos.xml \
  -H 'Accept: application/json'
```

`GET /feeds/videos.{format}`

<h3 id="list-videos-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))|
|accountId|query|string|false|limit listing to a specific account|
|accountName|query|string|false|limit listing to a specific account|
|videoChannelId|query|string|false|limit listing to a specific video channel|
|videoChannelName|query|string|false|limit listing to a specific video channel|
|sort|query|string|false|Sort column|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|rss|
|format|rss2|
|format|atom|
|format|atom1|
|format|json|
|format|json1|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|

> Example responses

> 204 Response

```json
{}
```

<h3 id="list-videos-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|Inline|
|404|Not Found|video channel or account not found|None|
|406|Not Acceptable|accept header unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-search">Search</h1>

The search helps to find _videos_ or _channels_ from within the instance and beyond.
Videos from other instances federated by the instance (that is, instances
followed by the instance) can be found via keywords and other criteria of
the advanced search.

Administrators can also enable the use of a remote search system, indexing
videos and channels not could be not federated by the instance.


## Search channels

<a id="opIdsearchChannels"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/search/video-channels?search=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/search/video-channels`

<h3 id="search-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete channel information and interact with it.<br>|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|searchTarget|query|string|false|If the administrator enabled search index support, you can override the default search target.<br><br>**Warning**: If you choose to make an index search, PeerTube will get results from a third party service. It means the instance may not yet know the objects you fetched. If you want to load video/channel information:<br>  * If the current user has the ability to make a remote URI search (this information is available in the config endpoint),<br>  then reuse the search API to make a search using the object URI so PeerTube instance fetches the remote object and fill its database.<br>  After that, you can use the classic REST API endpoints to fetch the complete object or interact with it<br>  * If the current user doesn't have the ability to make a remote URI search, then redirect the user on the origin instance or fetch<br>  the data from the origin instance API<br>|
|sort|query|string|false|Sort column|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchTarget|local|
|searchTarget|search-index|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "total": 1
}
```

<h3 id="search-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelList](#schemavideochannellist)|
|500|Internal Server Error|search index unavailable|None|

<h3 id="search-channels-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|searchTarget === search-index|https://search.example.org/api/v1/search/videos|POST|third-party search index MAY be used instead of the local index, if enabled by the instance admin. see `searchTarget`|

<aside class="success">
This operation does not require authentication
</aside>

## Search playlists

<a id="opIdsearchPlaylists"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/search/video-playlists?search=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/search/video-playlists`

<h3 id="search-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete playlist information and interact with it.<br>|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|searchTarget|query|string|false|If the administrator enabled search index support, you can override the default search target.<br><br>**Warning**: If you choose to make an index search, PeerTube will get results from a third party service. It means the instance may not yet know the objects you fetched. If you want to load video/channel information:<br>  * If the current user has the ability to make a remote URI search (this information is available in the config endpoint),<br>  then reuse the search API to make a search using the object URI so PeerTube instance fetches the remote object and fill its database.<br>  After that, you can use the classic REST API endpoints to fetch the complete object or interact with it<br>  * If the current user doesn't have the ability to make a remote URI search, then redirect the user on the origin instance or fetch<br>  the data from the origin instance API<br>|
|sort|query|string|false|Sort column|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchTarget|local|
|searchTarget|search-index|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "id": 42,
      "isLocal": true,
      "ownerAccount": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "shortUUID": {},
      "thumbnailPath": "string",
      "type": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z",
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "videoChannel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "videoLength": 0
    }
  ],
  "total": 1
}
```

<h3 id="search-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|500|Internal Server Error|search index unavailable|None|

<h3 id="search-playlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|
|total|integer|false|none|none|

<h3 id="search-playlists-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|searchTarget === search-index|https://search.example.org/api/v1/search/videos|POST|third-party search index MAY be used instead of the local index, if enabled by the instance admin. see `searchTarget`|

<aside class="success">
This operation does not require authentication
</aside>

## Search videos

<a id="opIdsearchVideos"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/search/videos?search=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/search/videos`

<h3 id="search-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete video information and interact with it.<br>|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|isLive|query|boolean|false|whether or not the video is a live|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote videos|
|include|query|integer|false|**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|uuids|query|[string]|false|Find videos with specific UUIDs|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebtorrentFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have WebTorrent files|
|skipCount|query|string|false|if you don't need the `total` in the response|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|searchTarget|query|string|false|If the administrator enabled search index support, you can override the default search target.<br><br>**Warning**: If you choose to make an index search, PeerTube will get results from a third party service. It means the instance may not yet know the objects you fetched. If you want to load video/channel information:<br>  * If the current user has the ability to make a remote URI search (this information is available in the config endpoint),<br>  then reuse the search API to make a search using the object URI so PeerTube instance fetches the remote object and fill its database.<br>  After that, you can use the classic REST API endpoints to fetch the complete object or interact with it<br>  * If the current user doesn't have the ability to make a remote URI search, then redirect the user on the origin instance or fetch<br>  the data from the origin instance API<br>|
|sort|query|string|false|Sort videos by criteria (prefixing with `-` means `DESC` order):<br>|
|startDate|query|string(date-time)|false|Get videos that are published after this date|
|endDate|query|string(date-time)|false|Get videos that are published before this date|
|originallyPublishedStartDate|query|string(date-time)|false|Get videos that are originally published after this date|
|originallyPublishedEndDate|query|string(date-time)|false|Get videos that are originally published before this date|
|durationMin|query|integer|false|Get videos that have this minimum duration|
|durationMax|query|integer|false|Get videos that have this maximum duration|

#### Enumerated Values

|Parameter|Value|
|---|---|
|nsfw|true|
|nsfw|false|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|skipCount|true|
|skipCount|false|
|searchTarget|local|
|searchTarget|search-index|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="search-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|
|500|Internal Server Error|search index unavailable|None|

<h3 id="search-videos-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|searchTarget === search-index|https://search.example.org/api/v1/search/videos|POST|third-party search index MAY be used instead of the local index, if enabled by the instance admin. see `searchTarget`|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-homepage">Homepage</h1>

Get and update the custom homepage

## Get instance custom homepage

> Code samples

```bash
curl https://example.com/api/v1/custom-pages/homepage/instance \
  -H 'Accept: application/json'
```

`GET /api/v1/custom-pages/homepage/instance`

> Example responses

> 200 Response

```json
{
  "content": "string"
}
```

<h3 id="get-instance-custom-homepage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CustomHomepage](#schemacustomhomepage)|
|404|Not Found|No homepage set|None|

<aside class="success">
This operation does not require authentication
</aside>

## Set instance custom homepage

> Code samples

```bash
curl https://example.com/api/v1/custom-pages/homepage/instance \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "content": "string"
  }'
```

`PUT /api/v1/custom-pages/homepage/instance`

> Body parameter

```json
{
  "content": "string"
}
```

<h3 id="set-instance-custom-homepage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» content|body|string|false|content of the homepage, that will be injected in the client|

<h3 id="set-instance-custom-homepage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-video-mirroring">Video Mirroring</h1>

PeerTube instances can mirror videos from one another, and help distribute some videos.

For importing videos as your own, refer to [video imports](#operation/importVideo).


## List videos being mirrored

<a id="opIdgetMirroredVideos"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/server/redundancy/videos?target=my-videos' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/redundancy/videos`

<h3 id="list-videos-being-mirrored-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target|query|string|true|direction of the mirror|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort abuses by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|target|my-videos|
|target|remote-videos|
|sort|name|

> Example responses

> 200 Response

```json
[
  {
    "id": 42,
    "name": "string",
    "redundancies": {
      "files": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "expiresOn": "1970-01-01T00:00:00Z",
          "fileUrl": "http://example.com",
          "id": 42,
          "size": 0,
          "strategy": "manual",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "streamingPlaylists": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "expiresOn": "1970-01-01T00:00:00Z",
          "fileUrl": "http://example.com",
          "id": 42,
          "size": 0,
          "strategy": "manual",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "url": "http://example.com",
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  }
]
```

<h3 id="list-videos-being-mirrored-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-videos-being-mirrored-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VideoRedundancy](#schemavideoredundancy)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Mirror a video

<a id="opIdputMirroredVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/server/redundancy/videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "videoId": {}
  }'
```

`POST /api/v1/server/redundancy/videos`

> Body parameter

```json
{
  "videoId": {}
}
```

<h3 id="mirror-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» videoId|body|object|true|object id for the video|

<h3 id="mirror-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|cannot mirror a local video|None|
|404|Not Found|video does not exist|None|
|409|Conflict|video is already mirrored|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete a mirror done on a video

<a id="opIddelMirroredVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/server/redundancy/videos/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/redundancy/videos/{redundancyId}`

<h3 id="delete-a-mirror-done-on-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|redundancyId|path|string|true|id of an existing redundancy on a video|

<h3 id="delete-a-mirror-done-on-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video redundancy not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-stats">Stats</h1>

Statistics


## Create playback metrics

> Code samples

```bash
curl https://example.com/api/v1/metrics/playback \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "downloadedBytesHTTP": 0,
    "downloadedBytesP2P": 0,
    "errors": 0,
    "fps": 0,
    "playerMode": "p2p-media-loader",
    "resolution": 0,
    "resolutionChanges": 0,
    "uploadedBytesP2P": 0,
    "videoId": 42
  }'
```

`POST /api/v1/metrics/playback`

These metrics are exposed by OpenTelemetry metrics exporter if enabled.

> Body parameter

```json
{
  "downloadedBytesHTTP": 0,
  "downloadedBytesP2P": 0,
  "errors": 0,
  "fps": 0,
  "playerMode": "p2p-media-loader",
  "resolution": 0,
  "resolutionChanges": 0,
  "uploadedBytesP2P": 0,
  "videoId": 42
}
```

<h3 id="create-playback-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PlaybackMetricCreate](#schemaplaybackmetriccreate)|false|none|
|» downloadedBytesHTTP|body|number|true|How many bytes were downloaded with HTTP since the last metric creation|
|» downloadedBytesP2P|body|number|true|How many bytes were downloaded with P2P since the last metric creation|
|» errors|body|number|true|How many errors occured since the last metric creation|
|» fps|body|number|false|Current player video fps|
|» playerMode|body|string|true|none|
|» resolution|body|number|false|Current player video resolution|
|» resolutionChanges|body|number|true|How many resolution changes occured since the last metric creation|
|» uploadedBytesP2P|body|number|true|How many bytes were uploaded with P2P since the last metric creation|
|» videoId|body|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|none|
|» » *oneOf*|body|[id](#schemaid)|false|none|
|» » *oneOf*|body|[UUIDv4](#schemauuidv4)|false|none|
|» » *oneOf*|body|[shortUUID](#schemashortuuid)|false|translation of a uuid v4 with a bigger alphabet to have a shorter uuid|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» playerMode|p2p-media-loader|
|» playerMode|webtorrent|

<h3 id="create-playback-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get instance stats

<a id="opIdgetInstanceStats"></a>

> Code samples

```bash
curl https://example.com/api/v1/server/stats \
  -H 'Accept: application/json'
```

`GET /api/v1/server/stats`

Get instance public statistics. This endpoint is cached.

> Example responses

> 200 Response

```json
{
  "activityPubMessagesProcessedPerSecond": 0,
  "totalActivityPubMessagesErrors": 0,
  "totalActivityPubMessagesProcessed": 0,
  "totalActivityPubMessagesSuccesses": 0,
  "totalActivityPubMessagesWaiting": 0,
  "totalDailyActiveUsers": 0,
  "totalInstanceFollowers": 0,
  "totalInstanceFollowing": 0,
  "totalLocalDailyActiveVideoChannels": 0,
  "totalLocalMonthlyActiveVideoChannels": 0,
  "totalLocalPlaylists": 0,
  "totalLocalVideoChannels": 0,
  "totalLocalVideoComments": 0,
  "totalLocalVideoFilesSize": 0,
  "totalLocalVideoViews": 0,
  "totalLocalVideos": 0,
  "totalLocalWeeklyActiveVideoChannels": 0,
  "totalMonthlyActiveUsers": 0,
  "totalUsers": 0,
  "totalVideoComments": 0,
  "totalVideos": 0,
  "totalWeeklyActiveUsers": 0,
  "videosRedundancy": [
    {
      "strategy": "string",
      "totalSize": 0,
      "totalUsed": 0,
      "totalVideoFiles": 0,
      "totalVideos": 0
    }
  ]
}
```

<h3 id="get-instance-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ServerStats](#schemaserverstats)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-account-blocks">Account Blocks</h1>

## Get block status of accounts/hosts

> Code samples

```bash
curl https://example.com/api/v1/blocklist/status \
  -H 'Accept: application/json'
```

`GET /api/v1/blocklist/status`

<h3 id="get-block-status-of-accountshosts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accounts|query|[string]|false|Check if these accounts are blocked|
|hosts|query|[string]|false|Check if these hosts are blocked|

> Example responses

> 200 Response

```json
{
  "accounts": {
    "property1": {
      "blockedByServer": true,
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByUser": true
    }
  },
  "hosts": {
    "property1": {
      "blockedByServer": true,
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByUser": true
    }
  }
}
```

<h3 id="get-block-status-of-accountshosts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlockStatus](#schemablockstatus)|

<aside class="success">
This operation does not require authentication
</aside>

## List account blocks

> Code samples

```bash
curl https://example.com/api/v1/server/blocklist/accounts \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/blocklist/accounts`

<h3 id="list-account-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

<h3 id="list-account-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Block an account

> Code samples

```bash
curl https://example.com/api/v1/server/blocklist/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountName": "chocobozzz@example.org"
  }'
```

`POST /api/v1/server/blocklist/accounts`

> Body parameter

```json
{
  "accountName": "chocobozzz@example.org"
}
```

<h3 id="block-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» accountName|body|string|true|account to block, in the form `username@domain`|

<h3 id="block-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|409|Conflict|self-blocking forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Unblock an account by its handle

> Code samples

```bash
curl https://example.com/api/v1/server/blocklist/accounts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/blocklist/accounts/{accountName}`

<h3 id="unblock-an-account-by-its-handle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account to unblock, in the form `username@domain`|

<h3 id="unblock-an-account-by-its-handle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|None|
|404|Not Found|account or account block does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-logs">Logs</h1>

## Get instance audit logs

<a id="opIdgetInstanceAuditLogs"></a>

> Code samples

```bash
curl https://example.com/api/v1/server/audit-logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/audit-logs`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-instance-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="get-instance-audit-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Get instance logs

<a id="opIdgetInstanceLogs"></a>

> Code samples

```bash
curl https://example.com/api/v1/server/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/logs`

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-instance-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="get-instance-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Send client log

<a id="opIdsendClientLog"></a>

> Code samples

```bash
curl https://example.com/api/v1/server/logs/client \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "level": "error",
    "message": "string",
    "meta": "string",
    "stackTrace": "string",
    "url": "string",
    "userAgent": "string"
  }'
```

`POST /api/v1/server/logs/client`

> Body parameter

```json
{
  "level": "error",
  "message": "string",
  "meta": "string",
  "stackTrace": "string",
  "url": "string",
  "userAgent": "string"
}
```

<h3 id="send-client-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendClientLog](#schemasendclientlog)|false|none|
|» level|body|string|true|none|
|» message|body|string|true|none|
|» meta|body|string|false|Additional information regarding this log|
|» stackTrace|body|string|false|Stack trace of the error if there is one|
|» url|body|string|true|URL of the current user page|
|» userAgent|body|string|false|User agent of the web browser that sends the message|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» level|error|
|» level|warn|

<h3 id="send-client-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-server-blocks">Server Blocks</h1>

## List server blocks

> Code samples

```bash
curl https://example.com/api/v1/server/blocklist/servers \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/blocklist/servers`

<h3 id="list-server-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

<h3 id="list-server-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Block a server

> Code samples

```bash
curl https://example.com/api/v1/server/blocklist/servers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "host": "example.com"
  }'
```

`POST /api/v1/server/blocklist/servers`

> Body parameter

```json
{
  "host": "example.com"
}
```

<h3 id="block-a-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» host|body|string(hostname)|true|server domain to block|

<h3 id="block-a-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|409|Conflict|self-blocking forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Unblock a server by its domain

> Code samples

```bash
curl https://example.com/api/v1/server/blocklist/servers/example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/blocklist/servers/{host}`

<h3 id="unblock-a-server-by-its-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|path|string(hostname)|true|server domain to unblock|

<h3 id="unblock-a-server-by-its-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|account block does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-videos">Videos</h1>

## Get video imports of my user

> Code samples

```bash
curl https://example.com/api/v1/users/me/videos/imports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/videos/imports`

<h3 id="get-video-imports-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|targetUrl|query|string|false|Filter on import target URL|
|videoChannelSyncId|query|number|false|Filter on imports created by a specific channel synchronization|
|search|query|string|false|Search in video names|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "error": "string",
      "id": {},
      "magnetUri": "http://example.com",
      "state": {
        "id": 1,
        "label": "Pending"
      },
      "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "torrentName": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "video": {
        "account": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "blacklisted": true,
        "blacklistedReason": "string",
        "category": {
          "id": 15,
          "label": "Science & Technology"
        },
        "channel": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string",
          "url": "http://example.com"
        },
        "createdAt": "2017-10-01T10:52:46.396Z",
        "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
        "dislikes": 7,
        "duration": 1419,
        "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
        "id": {},
        "isLive": true,
        "isLocal": true,
        "language": {
          "id": "en",
          "label": "English"
        },
        "licence": {
          "id": 2,
          "label": "Attribution - Share Alike"
        },
        "likes": 42,
        "name": "What is PeerTube?",
        "nsfw": true,
        "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
        "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
        "privacy": {
          "id": 1,
          "label": "string"
        },
        "publishedAt": "2018-10-01T10:52:46.396Z",
        "scheduledUpdate": {
          "privacy": 1,
          "updateAt": "1970-01-01"
        },
        "shortUUID": {},
        "state": {
          "id": 1,
          "label": "string"
        },
        "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
        "updatedAt": "2021-05-04T08:01:01.502Z",
        "userHistory": {
          "currentTime": 0
        },
        "uuid": {},
        "views": 1337,
        "waitTranscoding": true
      }
    }
  ],
  "total": 1
}
```

<h3 id="get-video-imports-of-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoImportsList](#schemavideoimportslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## List videos of a playlist

<a id="opIdgetVideoPlaylistVideos"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/video-playlists/{playlistId}/videos`

<h3 id="list-videos-of-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

<h3 id="list-videos-of-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a video in a playlist

<a id="opIdaddVideoPlaylistVideo"></a>

> Code samples

```bash
curl https://example.com/api/v1/video-playlists/42/videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "startTimestamp": 0,
    "stopTimestamp": 0,
    "videoId": {}
  }'
```

`POST /api/v1/video-playlists/{playlistId}/videos`

> Body parameter

```json
{
  "startTimestamp": 0,
  "stopTimestamp": 0,
  "videoId": {}
}
```

<h3 id="add-a-video-in-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|body|body|object|false|none|
|» startTimestamp|body|integer(seconds)|false|Start the video at this specific timestamp|
|» stopTimestamp|body|integer(seconds)|false|Stop the video at this specific timestamp|
|» videoId|body|object|true|Video to add in the playlist|
|» » *oneOf*|body|object|false|universal identifier for the video, that can be used across instances|
|» » *oneOf*|body|object|false|object id for the video|

> Example responses

> 200 Response

```json
{
  "videoPlaylistElement": {
    "id": 2
  }
}
```

<h3 id="add-a-video-in-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="add-a-video-in-a-playlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoPlaylistElement|object|false|none|none|
|» id|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-live-videos">Live Videos</h1>

## Create a live

<a id="opIdaddLive"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/live \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'category=15' \
  -F 'channelId=0' \
  -F 'commentsEnabled=true' \
  -F 'description=string' \
  -F 'downloadEnabled=true' \
  -F 'language=en' \
  -F 'latencyMode=1' \
  -F 'licence=2' \
  -F 'name=string' \
  -F 'nsfw=true' \
  -F 'permanentLive=true' \
  -F 'previewfile=@/path/to/file' \
  -F 'privacy=1' \
  -F 'saveReplay=true' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'tags=["string"]' \
  -F 'thumbnailfile=@/path/to/file'
```

`POST /api/v1/videos/live`

> Body parameter

```yaml
category: 15
channelId: 0
commentsEnabled: true
description: string
downloadEnabled: true
language: en
latencyMode: 1
licence: 2
name: string
nsfw: true
permanentLive: true
previewfile: string
privacy: 1
saveReplay: true
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
tags:
  - string
thumbnailfile: string
```

<h3 id="create-a-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» channelId|body|integer|true|Channel id that will contain this live video|
|» commentsEnabled|body|boolean|false|Enable or disable comments for this live video/replay|
|» description|body|string|false|Live video/replay description|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for the replay of this live video|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» latencyMode|body|[LiveVideoLatencyMode](#schemalivevideolatencymode)|false|User can select live latency mode if enabled by the instance|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» name|body|string|true|Live video/replay name|
|» nsfw|body|boolean|false|Whether or not this live video/replay contains sensitive content|
|» permanentLive|body|boolean|false|User can stream multiple times in a permanent live|
|» previewfile|body|string(binary)|false|Live video/replay preview file|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|» saveReplay|body|boolean|false|none|
|» support|body|string|false|A text tell the audience how to support the creator|
|» tags|body|[string]|false|Live video/replay tags (maximum 5 tags each between 2 and 30 characters)|
|» thumbnailfile|body|string(binary)|false|Live video/replay thumbnail file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» latencyMode|1|
|» latencyMode|2|
|» latencyMode|3|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "shortUUID": {},
    "uuid": {}
  }
}
```

<h3 id="create-a-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoUploadResponse](#schemavideouploadresponse)|
|400|Bad Request|Disambiguate via `type`:<br>- default type for a validation error<br>- `live_conflicting_permanent_and_save_replay` for conflicting parameters set<br>|None|
|403|Forbidden|Disambiguate via `type`:<br>- `live_not_enabled` for a disabled live feature<br>- `live_not_allowing_replay` for a disabled replay feature<br>- `max_instance_lives_limit_reached` for the absolute concurrent live limit<br>- `max_user_lives_limit_reached` for the user concurrent live limit<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get information about a live

<a id="opIdgetLiveId"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/live/42 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/live/{id}`

<h3 id="get-information-about-a-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "latencyMode": 1,
  "permanentLive": true,
  "rtmpUrl": "string",
  "rtmpsUrl": "string",
  "saveReplay": true,
  "streamKey": "string"
}
```

<h3 id="get-information-about-a-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[LiveVideoResponse](#schemalivevideoresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update information about a live

<a id="opIdupdateLiveId"></a>

> Code samples

```bash
curl https://example.com/api/v1/videos/live/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "latencyMode": 1,
    "permanentLive": true,
    "saveReplay": true
  }'
```

`PUT /api/v1/videos/live/{id}`

> Body parameter

```json
{
  "latencyMode": 1,
  "permanentLive": true,
  "saveReplay": true
}
```

<h3 id="update-information-about-a-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[LiveVideoUpdate](#schemalivevideoupdate)|false|none|
|» latencyMode|body|[LiveVideoLatencyMode](#schemalivevideolatencymode)|false|User can select live latency mode if enabled by the instance|
|» permanentLive|body|boolean|false|User can stream multiple times in a permanent live|
|» saveReplay|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» latencyMode|1|
|» latencyMode|2|
|» latencyMode|3|

<h3 id="update-information-about-a-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|bad parameters or trying to update a live that has already started|None|
|403|Forbidden|trying to save replay of the live but saving replay is not enabled on the instance|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List live sessions

> Code samples

```bash
curl https://example.com/api/v1/videos/live/42/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/live/{id}/sessions`

List all sessions created in a particular live

<h3 id="list-live-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "endDate": "1970-01-01T00:00:00Z",
      "error": 1,
      "id": 0,
      "replayVideo": {
        "id": 0,
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "startDate": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 1
}
```

<h3 id="list-live-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-live-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LiveVideoSessionResponse](#schemalivevideosessionresponse)]|false|none|none|
|total|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get live session of a replay

> Code samples

```bash
curl https://example.com/api/v1/videos/42/live-session \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/live-session`

If the video is a replay of a live, you can find the associated live session using this endpoint

<h3 id="get-live-session-of-a-replay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "error": 1,
  "id": 0,
  "replayVideo": {
    "id": 0,
    "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "startDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-live-session-of-a-replay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[LiveVideoSessionResponse](#schemalivevideosessionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-ownership-change">Video Ownership Change</h1>

## List video ownership changes

> Code samples

```bash
curl https://example.com/api/v1/videos/ownership \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/ownership`

<h3 id="list-video-ownership-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Accept ownership change request

> Code samples

```bash
curl https://example.com/api/v1/videos/ownership/42/accept \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/ownership/{id}/accept`

<h3 id="accept-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="accept-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|cannot terminate an ownership change of another user|None|
|404|Not Found|video ownership change not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Refuse ownership change request

> Code samples

```bash
curl https://example.com/api/v1/videos/ownership/42/refuse \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/ownership/{id}/refuse`

<h3 id="refuse-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="refuse-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|cannot terminate an ownership change of another user|None|
|404|Not Found|video ownership change not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Request ownership change

> Code samples

```bash
curl https://example.com/api/v1/videos/42/give-ownership \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'username=string'
```

`POST /api/v1/videos/{id}/give-ownership`

> Body parameter

```yaml
username: string
```

<h3 id="request-ownership-change-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|true|none|
|» username|body|string|true|none|

<h3 id="request-ownership-change-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|changing video ownership to a remote account is not supported yet|None|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-stats">Video Stats</h1>

## Get overall stats of a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/stats/overall \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/stats/overall`

<h3 id="get-overall-stats-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|startDate|query|string(date-time)|false|Filter stats by start date|
|endDate|query|string(date-time)|false|Filter stats by end date|

> Example responses

> 200 Response

```json
{
  "averageWatchTime": 0,
  "countries": [
    {
      "isoCode": "string",
      "viewers": 0
    }
  ],
  "totalWatchTime": 0,
  "viewersPeak": 0,
  "viewersPeakDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-overall-stats-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoStatsOverall](#schemavideostatsoverall)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get retention stats of a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/stats/retention \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/stats/retention`

<h3 id="get-retention-stats-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "retentionPercent": 0,
      "second": 0
    }
  ]
}
```

<h3 id="get-retention-stats-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoStatsRetention](#schemavideostatsretention)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get timeserie stats of a video

> Code samples

```bash
curl https://example.com/api/v1/videos/42/stats/timeseries/viewers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/stats/timeseries/{metric}`

<h3 id="get-timeserie-stats-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|metric|path|string|true|The metric to get|
|startDate|query|string(date-time)|false|Filter stats by start date|
|endDate|query|string(date-time)|false|Filter stats by end date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metric|viewers|
|metric|aggregateWatchTime|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "date": "string",
      "value": 0
    }
  ]
}
```

<h3 id="get-timeserie-stats-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoStatsTimeserie](#schemavideostatstimeserie)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-static-video-files">Static Video Files</h1>

## Get private HLS video file

> Code samples

```bash
curl https://example.com/static/streaming-playlists/hls/private/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /static/streaming-playlists/hls/private/{filename}`

<h3 id="get-private-hls-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename|
|videoFileToken|query|string|false|Video file token [generated](#operation/requestVideoToken) by PeerTube so you don't need to provide an OAuth token in the request header.|
|reinjectVideoFileToken|query|boolean|false|Ask the server to reinject videoFileToken in URLs in m3u8 playlist|

<h3 id="get-private-hls-video-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|403|Forbidden|invalid auth|None|
|404|Not Found|not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get public HLS video file

> Code samples

```bash
curl https://example.com/static/streaming-playlists/hls/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /static/streaming-playlists/hls/{filename}`

<h3 id="get-public-hls-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename|

<h3 id="get-public-hls-video-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|403|Forbidden|invalid auth|None|
|404|Not Found|not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get private WebTorrent video file

> Code samples

```bash
curl https://example.com/static/webseed/private/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /static/webseed/private/{filename}`

<h3 id="get-private-webtorrent-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename|
|videoFileToken|query|string|false|Video file token [generated](#operation/requestVideoToken) by PeerTube so you don't need to provide an OAuth token in the request header.|

<h3 id="get-private-webtorrent-video-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|403|Forbidden|invalid auth|None|
|404|Not Found|not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get public WebTorrent video file

> Code samples

```bash
curl https://example.com/static/webseed/string
```

`GET /static/webseed/{filename}`

<h3 id="get-public-webtorrent-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename|

<h3 id="get-public-webtorrent-video-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|404|Not Found|not found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Abuse">Abuse</h2>
<!-- backwards compatibility -->
<a id="schemaabuse"></a>
<a id="schema_Abuse"></a>
<a id="tocSabuse"></a>
<a id="tocsabuse"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 42,
  "moderationComment": "Decided to ban the server since it spams us regularly",
  "predefinedReasons": [
    "spamOrMisleading"
  ],
  "reason": "The video is a spam",
  "reporterAccount": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "state": {
    "id": 1,
    "label": "string"
  },
  "video": {
    "id": {},
    "name": "What is PeerTube?",
    "uuid": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|moderationComment|string|false|none|none|
|predefinedReasons|[AbusePredefinedReasons](#schemaabusepredefinedreasons)|false|none|none|
|reason|string|false|none|none|
|reporterAccount|[Account](#schemaaccount)|false|none|none|
|state|[AbuseStateConstant](#schemaabusestateconstant)|false|none|none|
|video|[VideoInfo](#schemavideoinfo)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|predefinedReasons|violentOrAbusive|
|predefinedReasons|hatefulOrAbusive|
|predefinedReasons|spamOrMisleading|
|predefinedReasons|privacy|
|predefinedReasons|rights|
|predefinedReasons|serverRules|
|predefinedReasons|thumbnails|
|predefinedReasons|captions|

<h2 id="tocS_AbuseMessage">AbuseMessage</h2>
<!-- backwards compatibility -->
<a id="schemaabusemessage"></a>
<a id="schema_AbuseMessage"></a>
<a id="tocSabusemessage"></a>
<a id="tocsabusemessage"></a>

```json
{
  "account": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "byModerator": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 42,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|
|byModerator|boolean|false|none|none|
|createdAt|string(date-time)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_AbusePredefinedReasons">AbusePredefinedReasons</h2>
<!-- backwards compatibility -->
<a id="schemaabusepredefinedreasons"></a>
<a id="schema_AbusePredefinedReasons"></a>
<a id="tocSabusepredefinedreasons"></a>
<a id="tocsabusepredefinedreasons"></a>

```json
[
  "spamOrMisleading"
]
```

<h2 id="tocS_AbuseStateConstant">AbuseStateConstant</h2>
<!-- backwards compatibility -->
<a id="schemaabusestateconstant"></a>
<a id="schema_AbuseStateConstant"></a>
<a id="tocSabusestateconstant"></a>
<a id="tocsabusestateconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[AbuseStateSet](#schemaabusestateset)|false|none|The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|

<h2 id="tocS_AbuseStateSet">AbuseStateSet</h2>
<!-- backwards compatibility -->
<a id="schemaabusestateset"></a>
<a id="schema_AbuseStateSet"></a>
<a id="tocSabusestateset"></a>
<a id="tocsabusestateset"></a>

```json
1
```

The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "followersCount": 0,
  "followingCount": 0,
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "id": 42,
  "name": {},
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "description": "string",
  "displayName": "string",
  "userId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|followersCount|integer|false|none|number of followers of this actor, as seen by this instance|
|followingCount|integer|false|none|number of actors subscribed to by this actor, as seen by this instance|
|host|string(hostname)|false|none|server on which the actor is resident|
|hostRedundancyAllowed|boolean|false|none|whether this actor's host allows redundancy of its videos|
|id|[id](#schemaid)|false|none|none|
|name|object|false|none|immutable name of the actor, used to find or mention it|
|updatedAt|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|description|string|false|none|text or bio displayed on the account's profile|
|displayName|string|false|none|editable name of the account, displayed in its representations|
|userId|object|false|none|object id for the user tied to this account|

<h2 id="tocS_AccountSummary">AccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsummary"></a>
<a id="schema_AccountSummary"></a>
<a id="tocSaccountsummary"></a>
<a id="tocsaccountsummary"></a>

```json
{
  "avatars": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ],
  "displayName": "string",
  "host": "example.com",
  "id": 0,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|
|displayName|string|false|none|none|
|host|string(hostname)|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_Actor">Actor</h2>
<!-- backwards compatibility -->
<a id="schemaactor"></a>
<a id="schema_Actor"></a>
<a id="tocSactor"></a>
<a id="tocsactor"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "followersCount": 0,
  "followingCount": 0,
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "id": 42,
  "name": {},
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|followersCount|integer|false|none|number of followers of this actor, as seen by this instance|
|followingCount|integer|false|none|number of actors subscribed to by this actor, as seen by this instance|
|host|string(hostname)|false|none|server on which the actor is resident|
|hostRedundancyAllowed|boolean|false|none|whether this actor's host allows redundancy of its videos|
|id|[id](#schemaid)|false|none|none|
|name|object|false|none|immutable name of the actor, used to find or mention it|
|updatedAt|string(date-time)|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_ActorImage">ActorImage</h2>
<!-- backwards compatibility -->
<a id="schemaactorimage"></a>
<a id="schema_ActorImage"></a>
<a id="tocSactorimage"></a>
<a id="tocsactorimage"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "path": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|path|string|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|width|integer|false|none|none|

<h2 id="tocS_ActorInfo">ActorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaactorinfo"></a>
<a id="schema_ActorInfo"></a>
<a id="tocSactorinfo"></a>
<a id="tocsactorinfo"></a>

```json
{
  "avatars": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ],
  "displayName": "string",
  "host": "example.com",
  "id": 42,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|
|displayName|string|false|none|none|
|host|string(hostname)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_AddUser">AddUser</h2>
<!-- backwards compatibility -->
<a id="schemaadduser"></a>
<a id="schema_AddUser"></a>
<a id="tocSadduser"></a>
<a id="tocsadduser"></a>

```json
{
  "adminFlags": 1,
  "channelName": "framasoft_videos",
  "email": "user@example.com",
  "password": "password",
  "role": 2,
  "username": "chocobozzz",
  "videoQuota": -1,
  "videoQuotaDaily": -1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminFlags|[UserAdminFlags](#schemauseradminflags)|false|none|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|channelName|[usernameChannel](#schemausernamechannel)|false|none|immutable name of the channel, used to interact with its actor|
|email|string(email)|true|none|The user email|
|password|[password](#schemapassword)|true|none|none|
|role|[UserRole](#schemauserrole)|true|none|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|username|[username](#schemausername)|true|none|immutable name of the user, used to find or mention its actor|
|videoQuota|integer|true|none|The user video quota in bytes|
|videoQuotaDaily|integer|true|none|The user daily video quota in bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|adminFlags|0|
|adminFlags|1|
|role|0|
|role|1|
|role|2|

<h2 id="tocS_AddUserResponse">AddUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadduserresponse"></a>
<a id="schema_AddUserResponse"></a>
<a id="tocSadduserresponse"></a>
<a id="tocsadduserresponse"></a>

```json
{
  "user": {
    "account": {
      "id": 42
    },
    "id": 42
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|

<h2 id="tocS_BlockStatus">BlockStatus</h2>
<!-- backwards compatibility -->
<a id="schemablockstatus"></a>
<a id="schema_BlockStatus"></a>
<a id="tocSblockstatus"></a>
<a id="tocsblockstatus"></a>

```json
{
  "accounts": {
    "property1": {
      "blockedByServer": true,
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByUser": true
    }
  },
  "hosts": {
    "property1": {
      "blockedByServer": true,
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByUser": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|object|false|none|none|
|hosts|object|false|none|none|

<h2 id="tocS_CommentThreadPostResponse">CommentThreadPostResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadpostresponse"></a>
<a id="schema_CommentThreadPostResponse"></a>
<a id="tocScommentthreadpostresponse"></a>
<a id="tocscommentthreadpostresponse"></a>

```json
{
  "comment": {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "id": 42,
    "inReplyToCommentId": {},
    "isDeleted": false,
    "text": "This video is wonderful!",
    "threadId": 42,
    "totalReplies": 0,
    "totalRepliesFromVideoAuthor": 0,
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "videoId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|[VideoComment](#schemavideocomment)|false|none|none|

<h2 id="tocS_CommentThreadResponse">CommentThreadResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadresponse"></a>
<a id="schema_CommentThreadResponse"></a>
<a id="tocScommentthreadresponse"></a>
<a id="tocscommentthreadresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "description": "string",
        "displayName": "string",
        "userId": {}
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "deletedAt": null,
      "id": 42,
      "inReplyToCommentId": {},
      "isDeleted": false,
      "text": "This video is wonderful!",
      "threadId": 42,
      "totalReplies": 0,
      "totalRepliesFromVideoAuthor": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "videoId": {}
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoComment](#schemavideocomment)]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_CustomHomepage">CustomHomepage</h2>
<!-- backwards compatibility -->
<a id="schemacustomhomepage"></a>
<a id="schema_CustomHomepage"></a>
<a id="tocScustomhomepage"></a>
<a id="tocscustomhomepage"></a>

```json
{
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|

<h2 id="tocS_FileRedundancyInformation">FileRedundancyInformation</h2>
<!-- backwards compatibility -->
<a id="schemafileredundancyinformation"></a>
<a id="schema_FileRedundancyInformation"></a>
<a id="tocSfileredundancyinformation"></a>
<a id="tocsfileredundancyinformation"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresOn": "1970-01-01T00:00:00Z",
  "fileUrl": "http://example.com",
  "id": 42,
  "size": 0,
  "strategy": "manual",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|expiresOn|string(date-time)|false|none|none|
|fileUrl|string(url)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|size|integer|false|none|none|
|strategy|string|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|strategy|manual|
|strategy|most-views|
|strategy|trending|
|strategy|recently-added|

<h2 id="tocS_Follow">Follow</h2>
<!-- backwards compatibility -->
<a id="schemafollow"></a>
<a id="schema_Follow"></a>
<a id="tocSfollow"></a>
<a id="tocsfollow"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "follower": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com"
  },
  "following": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com"
  },
  "id": 42,
  "score": 0,
  "state": "pending",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|follower|[Actor](#schemaactor)|false|none|none|
|following|[Actor](#schemaactor)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|score|number|false|none|score reflecting the reachability of the actor, with steps of `10` and a base score of `1000`.|
|state|string|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|accepted|

<h2 id="tocS_GetMeVideoRating">GetMeVideoRating</h2>
<!-- backwards compatibility -->
<a id="schemagetmevideorating"></a>
<a id="schema_GetMeVideoRating"></a>
<a id="tocSgetmevideorating"></a>
<a id="tocsgetmevideorating"></a>

```json
{
  "id": 42,
  "rating": "like"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|true|none|none|
|rating|string|true|none|Rating of the video|

#### Enumerated Values

|Property|Value|
|---|---|
|rating|like|
|rating|dislike|
|rating|none|

<h2 id="tocS_ImportVideosInChannelCreate">ImportVideosInChannelCreate</h2>
<!-- backwards compatibility -->
<a id="schemaimportvideosinchannelcreate"></a>
<a id="schema_ImportVideosInChannelCreate"></a>
<a id="tocSimportvideosinchannelcreate"></a>
<a id="tocsimportvideosinchannelcreate"></a>

```json
{
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "videoChannelSyncId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalChannelUrl|string|true|none|none|
|videoChannelSyncId|integer|false|none|If part of a channel sync process, specify its id to assign video imports to this channel synchronization|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "data": {},
  "error": {},
  "finishedOn": "1970-01-01T00:00:00Z",
  "id": 42,
  "processedOn": "1970-01-01T00:00:00Z",
  "state": "active",
  "type": "activitypub-http-unicast"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|data|object|false|none|none|
|error|object|false|none|none|
|finishedOn|string(date-time)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|processedOn|string(date-time)|false|none|none|
|state|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|completed|
|state|failed|
|state|waiting|
|state|delayed|
|type|activitypub-http-unicast|
|type|activitypub-http-broadcast|
|type|activitypub-http-fetcher|
|type|activitypub-follow|
|type|video-file-import|
|type|video-transcoding|
|type|email|
|type|video-import|
|type|videos-views-stats|
|type|activitypub-refresher|
|type|video-redundancy|
|type|video-channel-import|

<h2 id="tocS_LiveVideoLatencyMode">LiveVideoLatencyMode</h2>
<!-- backwards compatibility -->
<a id="schemalivevideolatencymode"></a>
<a id="schema_LiveVideoLatencyMode"></a>
<a id="tocSlivevideolatencymode"></a>
<a id="tocslivevideolatencymode"></a>

```json
1
```

The live latency mode (Default = `1`, High latency = `2`, Small Latency = `3`)

<h2 id="tocS_LiveVideoResponse">LiveVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivevideoresponse"></a>
<a id="schema_LiveVideoResponse"></a>
<a id="tocSlivevideoresponse"></a>
<a id="tocslivevideoresponse"></a>

```json
{
  "latencyMode": 1,
  "permanentLive": true,
  "rtmpUrl": "string",
  "rtmpsUrl": "string",
  "saveReplay": true,
  "streamKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latencyMode|[LiveVideoLatencyMode](#schemalivevideolatencymode)|false|none|User can select live latency mode if enabled by the instance|
|permanentLive|boolean|false|none|User can stream multiple times in a permanent live|
|rtmpUrl|string|false|none|Included in the response if an appropriate token is provided|
|rtmpsUrl|string|false|none|Included in the response if an appropriate token is provided|
|saveReplay|boolean|false|none|none|
|streamKey|string|false|none|RTMP stream key to use to stream into this live video. Included in the response if an appropriate token is provided|

#### Enumerated Values

|Property|Value|
|---|---|
|latencyMode|1|
|latencyMode|2|
|latencyMode|3|

<h2 id="tocS_LiveVideoSessionResponse">LiveVideoSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivevideosessionresponse"></a>
<a id="schema_LiveVideoSessionResponse"></a>
<a id="tocSlivevideosessionresponse"></a>
<a id="tocslivevideosessionresponse"></a>

```json
{
  "endDate": "1970-01-01T00:00:00Z",
  "error": 1,
  "id": 0,
  "replayVideo": {
    "id": 0,
    "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "startDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|string(date-time) \| null|false|none|End date of the live session|
|error|integer \| null|false|none|Error type if an error occurred during the live session:<br>  - `1`: Bad socket health (transcoding is too slow)<br>  - `2`: Max duration exceeded<br>  - `3`: Quota exceeded<br>  - `4`: Quota FFmpeg error<br>  - `5`: Video has been blacklisted during the live<br>|
|id|integer|false|none|none|
|replayVideo|object|false|none|Video replay information|
|startDate|string(date-time)|false|none|Start date of the live session|

#### Enumerated Values

|Property|Value|
|---|---|
|error|1|
|error|2|
|error|3|
|error|4|
|error|5|

<h2 id="tocS_LiveVideoUpdate">LiveVideoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalivevideoupdate"></a>
<a id="schema_LiveVideoUpdate"></a>
<a id="tocSlivevideoupdate"></a>
<a id="tocslivevideoupdate"></a>

```json
{
  "latencyMode": 1,
  "permanentLive": true,
  "saveReplay": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latencyMode|[LiveVideoLatencyMode](#schemalivevideolatencymode)|false|none|User can select live latency mode if enabled by the instance|
|permanentLive|boolean|false|none|User can stream multiple times in a permanent live|
|saveReplay|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|latencyMode|1|
|latencyMode|2|
|latencyMode|3|

<h2 id="tocS_MRSSGroupContent">MRSSGroupContent</h2>
<!-- backwards compatibility -->
<a id="schemamrssgroupcontent"></a>
<a id="schema_MRSSGroupContent"></a>
<a id="tocSmrssgroupcontent"></a>
<a id="tocsmrssgroupcontent"></a>

```json
{
  "duration": 0,
  "fileSize": 0,
  "framerate": 0,
  "height": 0,
  "lang": "string",
  "type": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|false|none|none|
|fileSize|integer|false|none|none|
|framerate|integer|false|none|none|
|height|integer|false|none|none|
|lang|string|false|none|none|
|type|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_MRSSPeerLink">MRSSPeerLink</h2>
<!-- backwards compatibility -->
<a id="schemamrsspeerlink"></a>
<a id="schema_MRSSPeerLink"></a>
<a id="tocSmrsspeerlink"></a>
<a id="tocsmrsspeerlink"></a>

```json
{
  "href": "string",
  "type": "application/x-bittorrent"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|application/x-bittorrent|

<h2 id="tocS_NSFWPolicy">NSFWPolicy</h2>
<!-- backwards compatibility -->
<a id="schemansfwpolicy"></a>
<a id="schema_NSFWPolicy"></a>
<a id="tocSnsfwpolicy"></a>
<a id="tocsnsfwpolicy"></a>

```json
"display"
```

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "account": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 42,
    "name": "string"
  },
  "actorFollow": {
    "follower": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 42,
      "name": "string"
    },
    "following": {
      "displayName": "string",
      "host": "example.com",
      "name": "string",
      "type": "account"
    },
    "id": 42,
    "state": "pending"
  },
  "comment": {
    "account": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 42,
      "name": "string"
    },
    "id": 42,
    "threadId": 0,
    "video": {
      "id": {},
      "name": "What is PeerTube?",
      "uuid": {}
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "id": 42,
  "read": true,
  "type": 0,
  "updatedAt": "1970-01-01T00:00:00Z",
  "video": {
    "id": {},
    "name": "What is PeerTube?",
    "uuid": {},
    "channel": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 42,
      "name": "string"
    }
  },
  "videoAbuse": {
    "id": 42,
    "video": {
      "id": {},
      "name": "What is PeerTube?",
      "uuid": {}
    }
  },
  "videoBlacklist": {
    "id": 42,
    "video": {
      "id": {},
      "name": "What is PeerTube?",
      "uuid": {}
    }
  },
  "videoImport": {
    "id": 42,
    "magnetUri": "http://example.com",
    "targetUri": "http://example.com",
    "torrentName": "string",
    "video": {
      "id": {},
      "name": "What is PeerTube?",
      "uuid": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|object \| null|false|none|none|
|actorFollow|object \| null|false|none|none|
|comment|object \| null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|read|boolean|false|none|none|
|type|integer|false|none|Notification type, following the `UserNotificationType` enum:<br>- `1` NEW_VIDEO_FROM_SUBSCRIPTION<br>- `2` NEW_COMMENT_ON_MY_VIDEO<br>- `3` NEW_ABUSE_FOR_MODERATORS<br>- `4` BLACKLIST_ON_MY_VIDEO<br>- `5` UNBLACKLIST_ON_MY_VIDEO<br>- `6` MY_VIDEO_PUBLISHED<br>- `7` MY_VIDEO_IMPORT_SUCCESS<br>- `8` MY_VIDEO_IMPORT_ERROR<br>- `9` NEW_USER_REGISTRATION<br>- `10` NEW_FOLLOW<br>- `11` COMMENT_MENTION<br>- `12` VIDEO_AUTO_BLACKLIST_FOR_MODERATORS<br>- `13` NEW_INSTANCE_FOLLOWER<br>- `14` AUTO_INSTANCE_FOLLOWING<br>- `15` ABUSE_STATE_CHANGE<br>- `16` ABUSE_NEW_MESSAGE<br>- `17` NEW_PLUGIN_VERSION<br>- `18` NEW_PEERTUBE_VERSION<br>|
|updatedAt|string(date-time)|false|none|none|
|video|object \| null|false|none|none|
|videoAbuse|object \| null|false|none|none|
|videoBlacklist|object \| null|false|none|none|
|videoImport|object \| null|false|none|none|

<h2 id="tocS_NotificationListResponse">NotificationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotificationlistresponse"></a>
<a id="schema_NotificationListResponse"></a>
<a id="tocSnotificationlistresponse"></a>
<a id="tocsnotificationlistresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string"
      },
      "actorFollow": {
        "follower": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string"
        },
        "following": {
          "displayName": "string",
          "host": "example.com",
          "name": "string",
          "type": "account"
        },
        "id": 42,
        "state": "pending"
      },
      "comment": {
        "account": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string"
        },
        "id": 42,
        "threadId": 0,
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "id": 42,
      "read": true,
      "type": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "video": {
        "id": {},
        "name": "What is PeerTube?",
        "uuid": {},
        "channel": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string"
        }
      },
      "videoAbuse": {
        "id": 42,
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      },
      "videoBlacklist": {
        "id": 42,
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      },
      "videoImport": {
        "id": 42,
        "magnetUri": "http://example.com",
        "targetUri": "http://example.com",
        "torrentName": "string",
        "video": {
          "id": {},
          "name": "What is PeerTube?",
          "uuid": {}
        }
      }
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Notification](#schemanotification)]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_NotificationSettingValue">NotificationSettingValue</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsettingvalue"></a>
<a id="schema_NotificationSettingValue"></a>
<a id="tocSnotificationsettingvalue"></a>
<a id="tocsnotificationsettingvalue"></a>

```json
0
```

Notification type. One of the following values, or a sum of multiple values:
- `0` NONE
- `1` WEB
- `2` EMAIL

<h2 id="tocS_OAuthClient">OAuthClient</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclient"></a>
<a id="schema_OAuthClient"></a>
<a id="tocSoauthclient"></a>
<a id="tocsoauthclient"></a>

```json
{
  "client_id": "v1ikx5hnfop4mdpnci8nsqh93c45rldf",
  "client_secret": "AjWiOapPltI6EnsWQwlFarRtLh4u8tDt"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|

<h2 id="tocS_OAuthToken-password">OAuthToken-password</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtoken-password"></a>
<a id="schema_OAuthToken-password"></a>
<a id="tocSoauthtoken-password"></a>
<a id="tocsoauthtoken-password"></a>

```json
{
  "client_id": "v1ikx5hnfop4mdpnci8nsqh93c45rldf",
  "client_secret": "AjWiOapPltI6EnsWQwlFarRtLh4u8tDt",
  "grant_type": "password",
  "password": "password",
  "username": "chocobozzz"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|grant_type|string|true|none|none|
|password|[password](#schemapassword)|true|none|none|
|username|[username](#schemausername)|true|none|immutable name of the user, used to find or mention its actor|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|password|
|grant_type|refresh_token|

<h2 id="tocS_OAuthToken-refresh_token">OAuthToken-refresh_token</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtoken-refresh_token"></a>
<a id="schema_OAuthToken-refresh_token"></a>
<a id="tocSoauthtoken-refresh_token"></a>
<a id="tocsoauthtoken-refresh_token"></a>

```json
{
  "client_id": "v1ikx5hnfop4mdpnci8nsqh93c45rldf",
  "client_secret": "AjWiOapPltI6EnsWQwlFarRtLh4u8tDt",
  "grant_type": "password",
  "refresh_token": "2e0d675df9fc96d2e4ec8a3ebbbf45eca9137bb7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|grant_type|string|true|none|none|
|refresh_token|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|password|
|grant_type|refresh_token|

<h2 id="tocS_PlaybackMetricCreate">PlaybackMetricCreate</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackmetriccreate"></a>
<a id="schema_PlaybackMetricCreate"></a>
<a id="tocSplaybackmetriccreate"></a>
<a id="tocsplaybackmetriccreate"></a>

```json
{
  "downloadedBytesHTTP": 0,
  "downloadedBytesP2P": 0,
  "errors": 0,
  "fps": 0,
  "playerMode": "p2p-media-loader",
  "resolution": 0,
  "resolutionChanges": 0,
  "uploadedBytesP2P": 0,
  "videoId": 42
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadedBytesHTTP|number|true|none|How many bytes were downloaded with HTTP since the last metric creation|
|downloadedBytesP2P|number|true|none|How many bytes were downloaded with P2P since the last metric creation|
|errors|number|true|none|How many errors occured since the last metric creation|
|fps|number|false|none|Current player video fps|
|playerMode|string|true|none|none|
|resolution|number|false|none|Current player video resolution|
|resolutionChanges|number|true|none|How many resolution changes occured since the last metric creation|
|uploadedBytesP2P|number|true|none|How many bytes were uploaded with P2P since the last metric creation|
|videoId|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|playerMode|p2p-media-loader|
|playerMode|webtorrent|

<h2 id="tocS_PlaylistElement">PlaylistElement</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistelement"></a>
<a id="schema_PlaylistElement"></a>
<a id="tocSplaylistelement"></a>
<a id="tocsplaylistelement"></a>

```json
{
  "position": 0,
  "startTimestamp": 0,
  "stopTimestamp": 0,
  "video": {
    "account": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "channel": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 42,
      "name": "string",
      "url": "http://example.com"
    },
    "createdAt": "2017-10-01T10:52:46.396Z",
    "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "dislikes": 7,
    "duration": 1419,
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "id": {},
    "isLive": true,
    "isLocal": true,
    "language": {
      "id": "en",
      "label": "English"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "likes": 42,
    "name": "What is PeerTube?",
    "nsfw": true,
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01"
    },
    "shortUUID": {},
    "state": {
      "id": 1,
      "label": "string"
    },
    "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "userHistory": {
      "currentTime": 0
    },
    "uuid": {},
    "views": 1337,
    "waitTranscoding": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|integer|false|none|none|
|startTimestamp|integer(seconds)|false|none|none|
|stopTimestamp|integer(seconds)|false|none|none|
|video|object \| null|false|none|none|

<h2 id="tocS_Plugin">Plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_Plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "enabled": true,
  "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
  "latestVersion": "0.0.3",
  "name": "peertube-plugin-auth-ldap",
  "peertubeEngine": "2.2.0",
  "settings": {},
  "type": 1,
  "uninstalled": true,
  "updatedAt": "1970-01-01T00:00:00Z",
  "version": "0.0.1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|description|string|false|none|none|
|enabled|boolean|false|none|none|
|homepage|string(url)|false|none|none|
|latestVersion|string|false|none|none|
|name|string|false|none|none|
|peertubeEngine|string|false|none|none|
|settings|object|false|none|none|
|type|integer|false|none|- `1`: PLUGIN<br>- `2`: THEME<br>|
|uninstalled|boolean|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|version|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|

<h2 id="tocS_PluginResponse">PluginResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginresponse"></a>
<a id="schema_PluginResponse"></a>
<a id="tocSpluginresponse"></a>
<a id="tocspluginresponse"></a>

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "enabled": true,
      "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
      "latestVersion": "0.0.3",
      "name": "peertube-plugin-auth-ldap",
      "peertubeEngine": "2.2.0",
      "settings": {},
      "type": 1,
      "uninstalled": true,
      "updatedAt": "1970-01-01T00:00:00Z",
      "version": "0.0.1"
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Plugin](#schemaplugin)]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_PredefinedAbuseReasons">PredefinedAbuseReasons</h2>
<!-- backwards compatibility -->
<a id="schemapredefinedabusereasons"></a>
<a id="schema_PredefinedAbuseReasons"></a>
<a id="tocSpredefinedabusereasons"></a>
<a id="tocspredefinedabusereasons"></a>

```json
[
  "violentOrAbusive"
]
```

Reason categories that help triage reports

<h2 id="tocS_RegisterUser">RegisterUser</h2>
<!-- backwards compatibility -->
<a id="schemaregisteruser"></a>
<a id="schema_RegisterUser"></a>
<a id="tocSregisteruser"></a>
<a id="tocsregisteruser"></a>

```json
{
  "channel": {
    "displayName": "string",
    "name": "framasoft_videos"
  },
  "displayName": "string",
  "email": "user@example.com",
  "password": "password",
  "username": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|channel base information used to create the first channel of the user|
|displayName|string|false|none|editable name of the user, displayed in its representations|
|email|string(email)|true|none|email of the user, used for login or service communications|
|password|[password](#schemapassword)|true|none|none|
|username|object|true|none|immutable name of the user, used to find or mention its actor|

<h2 id="tocS_RequestTwoFactorResponse">RequestTwoFactorResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequesttwofactorresponse"></a>
<a id="schema_RequestTwoFactorResponse"></a>
<a id="tocSrequesttwofactorresponse"></a>
<a id="tocsrequesttwofactorresponse"></a>

```json
{
  "otpRequest": {
    "requestToken": "string",
    "secret": "string",
    "uri": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otpRequest|object|false|none|none|

<h2 id="tocS_SendClientLog">SendClientLog</h2>
<!-- backwards compatibility -->
<a id="schemasendclientlog"></a>
<a id="schema_SendClientLog"></a>
<a id="tocSsendclientlog"></a>
<a id="tocssendclientlog"></a>

```json
{
  "level": "error",
  "message": "string",
  "meta": "string",
  "stackTrace": "string",
  "url": "string",
  "userAgent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|level|string|true|none|none|
|message|string|true|none|none|
|meta|string|false|none|Additional information regarding this log|
|stackTrace|string|false|none|Stack trace of the error if there is one|
|url|string|true|none|URL of the current user page|
|userAgent|string|false|none|User agent of the web browser that sends the message|

#### Enumerated Values

|Property|Value|
|---|---|
|level|error|
|level|warn|

<h2 id="tocS_ServerConfig">ServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfig"></a>
<a id="schema_ServerConfig"></a>
<a id="tocSserverconfig"></a>
<a id="tocsserverconfig"></a>

```json
{
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "avatar": {
    "extensions": [
      "string"
    ],
    "file": {
      "size": {
        "max": 0
      }
    }
  },
  "contactForm": {
    "enabled": true
  },
  "email": {
    "enabled": true
  },
  "followings": {
    "instance": {
      "autoFollowIndex": {
        "indexUrl": "http://example.com"
      }
    }
  },
  "homepage": {
    "enabled": true
  },
  "import": {
    "videoChannelSynchronization": {
      "enabled": true
    },
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    }
  },
  "instance": {
    "customizations": {
      "css": "string",
      "javascript": "string"
    },
    "defaultClientRoute": "string",
    "defaultNSFWPolicy": "string",
    "isNSFW": true,
    "name": "string",
    "shortDescription": "string"
  },
  "plugin": {
    "registered": [
      "string"
    ]
  },
  "search": {
    "remoteUri": {
      "anonymous": true,
      "users": true
    }
  },
  "serverCommit": "string",
  "serverVersion": "string",
  "signup": {
    "allowed": true,
    "allowedForCurrentIP": true,
    "requiresEmailVerification": true
  },
  "theme": {
    "registered": [
      "string"
    ]
  },
  "tracker": {
    "enabled": true
  },
  "transcoding": {
    "enabledResolutions": [
      240
    ],
    "hls": {
      "enabled": true
    },
    "webtorrent": {
      "enabled": true
    }
  },
  "trending": {
    "videos": {
      "intervalDays": 0
    }
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  },
  "video": {
    "file": {
      "extensions": [
        "string"
      ]
    },
    "image": {
      "extensions": [
        "string"
      ],
      "size": {
        "max": 0
      }
    }
  },
  "videoCaption": {
    "file": {
      "extensions": [
        "string"
      ],
      "size": {
        "max": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoBlacklist|object|false|none|none|
|avatar|object|false|none|none|
|contactForm|object|false|none|none|
|email|object|false|none|none|
|followings|object|false|none|none|
|homepage|object|false|none|none|
|import|object|false|none|none|
|instance|object|false|none|none|
|plugin|object|false|none|none|
|search|object|false|none|none|
|serverCommit|string|false|none|none|
|serverVersion|string|false|none|none|
|signup|object|false|none|none|
|theme|object|false|none|none|
|tracker|object|false|none|none|
|transcoding|object|false|none|none|
|trending|object|false|none|none|
|user|object|false|none|none|
|video|object|false|none|none|
|videoCaption|object|false|none|none|

<h2 id="tocS_ServerConfigAbout">ServerConfigAbout</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfigabout"></a>
<a id="schema_ServerConfigAbout"></a>
<a id="tocSserverconfigabout"></a>
<a id="tocsserverconfigabout"></a>

```json
{
  "instance": {
    "description": "string",
    "name": "string",
    "shortDescription": "string",
    "terms": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|object|false|none|none|

<h2 id="tocS_ServerConfigCustom">ServerConfigCustom</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfigcustom"></a>
<a id="schema_ServerConfigCustom"></a>
<a id="tocSserverconfigcustom"></a>
<a id="tocsserverconfigcustom"></a>

```json
{
  "admin": {
    "email": "user@example.com"
  },
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "cache": {
    "captions": {
      "size": 0
    },
    "previews": {
      "size": 0
    }
  },
  "contactForm": {
    "enabled": true
  },
  "followers": {
    "instance": {
      "enabled": true,
      "manualApproval": true
    }
  },
  "import": {
    "video_channel_synchronization": {
      "enabled": true
    },
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    }
  },
  "instance": {
    "customizations": {
      "css": "string",
      "javascript": "string"
    },
    "defaultClientRoute": "string",
    "defaultNSFWPolicy": "string",
    "description": "string",
    "isNSFW": true,
    "name": "string",
    "shortDescription": "string",
    "terms": "string"
  },
  "services": {
    "twitter": {
      "username": "string",
      "whitelisted": true
    }
  },
  "signup": {
    "enabled": true,
    "limit": 0,
    "requiresEmailVerification": true
  },
  "theme": {
    "default": "string"
  },
  "transcoding": {
    "allowAdditionalExtensions": true,
    "allowAudioFiles": true,
    "concurrency": 0,
    "enabled": true,
    "hls": {
      "enabled": true
    },
    "profile": "default",
    "resolutions": {
      "0p": true,
      "1080p": true,
      "1440p": true,
      "144p": true,
      "2160p": true,
      "240p": true,
      "360p": true,
      "480p": true,
      "720p": true
    },
    "threads": 0,
    "webtorrent": {
      "enabled": true
    }
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|object|false|none|none|
|autoBlacklist|object|false|none|none|
|cache|object|false|none|none|
|contactForm|object|false|none|none|
|followers|object|false|none|none|
|import|object|false|none|none|
|instance|object|false|none|none|
|services|object|false|none|none|
|signup|object|false|none|none|
|theme|object|false|none|none|
|transcoding|object|false|none|Settings pertaining to transcoding jobs|
|user|object|false|none|Settings that apply to new users, if registration is enabled|

<h2 id="tocS_ServerStats">ServerStats</h2>
<!-- backwards compatibility -->
<a id="schemaserverstats"></a>
<a id="schema_ServerStats"></a>
<a id="tocSserverstats"></a>
<a id="tocsserverstats"></a>

```json
{
  "activityPubMessagesProcessedPerSecond": 0,
  "totalActivityPubMessagesErrors": 0,
  "totalActivityPubMessagesProcessed": 0,
  "totalActivityPubMessagesSuccesses": 0,
  "totalActivityPubMessagesWaiting": 0,
  "totalDailyActiveUsers": 0,
  "totalInstanceFollowers": 0,
  "totalInstanceFollowing": 0,
  "totalLocalDailyActiveVideoChannels": 0,
  "totalLocalMonthlyActiveVideoChannels": 0,
  "totalLocalPlaylists": 0,
  "totalLocalVideoChannels": 0,
  "totalLocalVideoComments": 0,
  "totalLocalVideoFilesSize": 0,
  "totalLocalVideoViews": 0,
  "totalLocalVideos": 0,
  "totalLocalWeeklyActiveVideoChannels": 0,
  "totalMonthlyActiveUsers": 0,
  "totalUsers": 0,
  "totalVideoComments": 0,
  "totalVideos": 0,
  "totalWeeklyActiveUsers": 0,
  "videosRedundancy": [
    {
      "strategy": "string",
      "totalSize": 0,
      "totalUsed": 0,
      "totalVideoFiles": 0,
      "totalVideos": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityPubMessagesProcessedPerSecond|number|false|none|none|
|totalActivityPubMessagesErrors|number|false|none|none|
|totalActivityPubMessagesProcessed|number|false|none|none|
|totalActivityPubMessagesSuccesses|number|false|none|none|
|totalActivityPubMessagesWaiting|number|false|none|none|
|totalDailyActiveUsers|number|false|none|none|
|totalInstanceFollowers|number|false|none|none|
|totalInstanceFollowing|number|false|none|none|
|totalLocalDailyActiveVideoChannels|number|false|none|none|
|totalLocalMonthlyActiveVideoChannels|number|false|none|none|
|totalLocalPlaylists|number|false|none|none|
|totalLocalVideoChannels|number|false|none|none|
|totalLocalVideoComments|number|false|none|Total comments made by local users|
|totalLocalVideoFilesSize|number|false|none|none|
|totalLocalVideoViews|number|false|none|Total video views made on the instance|
|totalLocalVideos|number|false|none|none|
|totalLocalWeeklyActiveVideoChannels|number|false|none|none|
|totalMonthlyActiveUsers|number|false|none|none|
|totalUsers|number|false|none|none|
|totalVideoComments|number|false|none|none|
|totalVideos|number|false|none|none|
|totalWeeklyActiveUsers|number|false|none|none|
|videosRedundancy|[object]|false|none|none|

<h2 id="tocS_UUIDv4">UUIDv4</h2>
<!-- backwards compatibility -->
<a id="schemauuidv4"></a>
<a id="schema_UUIDv4"></a>
<a id="tocSuuidv4"></a>
<a id="tocsuuidv4"></a>

```json
"9c9de5e8-0a1e-484a-b099-e80766180a6d"
```

<h2 id="tocS_UpdateMe">UpdateMe</h2>
<!-- backwards compatibility -->
<a id="schemaupdateme"></a>
<a id="schema_UpdateMe"></a>
<a id="tocSupdateme"></a>
<a id="tocsupdateme"></a>

```json
{
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "currentPassword": "password",
  "displayNSFW": "true",
  "displayName": "string",
  "email": {},
  "noAccountSetupWarningModal": true,
  "noInstanceConfigWarningModal": true,
  "noWelcomeModal": true,
  "p2pEnabled": true,
  "password": "password",
  "theme": "string",
  "videoLanguages": [
    "string"
  ],
  "videosHistoryEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoPlayNextVideo|boolean|false|none|new preference regarding playing following videos automatically|
|autoPlayNextVideoPlaylist|boolean|false|none|new preference regarding playing following playlist videos automatically|
|autoPlayVideo|boolean|false|none|new preference regarding playing videos automatically|
|currentPassword|[password](#schemapassword)|false|none|none|
|displayNSFW|string|false|none|new NSFW display policy|
|displayName|string|false|none|new name of the user in its representations|
|email|object|false|none|new email used for login and service communications|
|noAccountSetupWarningModal|boolean|false|none|none|
|noInstanceConfigWarningModal|boolean|false|none|none|
|noWelcomeModal|boolean|false|none|none|
|p2pEnabled|boolean|false|none|whether to enable P2P in the player or not|
|password|[password](#schemapassword)|false|none|none|
|theme|string|false|none|none|
|videoLanguages|[string]|false|none|list of languages to filter videos down to|
|videosHistoryEnabled|boolean|false|none|whether to keep track of watched history or not|

#### Enumerated Values

|Property|Value|
|---|---|
|displayNSFW|true|
|displayNSFW|false|
|displayNSFW|both|

<h2 id="tocS_UpdateUser">UpdateUser</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuser"></a>
<a id="schema_UpdateUser"></a>
<a id="tocSupdateuser"></a>
<a id="tocsupdateuser"></a>

```json
{
  "adminFlags": 1,
  "email": {},
  "emailVerified": true,
  "password": "password",
  "pluginAuth": "peertube-plugin-auth-saml2",
  "role": 2,
  "videoQuota": 0,
  "videoQuotaDaily": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminFlags|[UserAdminFlags](#schemauseradminflags)|false|none|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|email|object|false|none|The updated email of the user|
|emailVerified|boolean|false|none|Set the email as verified|
|password|[password](#schemapassword)|false|none|none|
|pluginAuth|string \| null|false|none|The auth plugin to use to authenticate the user|
|role|[UserRole](#schemauserrole)|false|none|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|videoQuota|integer|false|none|The updated video quota of the user in bytes|
|videoQuotaDaily|integer|false|none|The updated daily video quota of the user in bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|adminFlags|0|
|adminFlags|1|
|role|0|
|role|1|
|role|2|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "account": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "blocked": true,
  "blockedReason": "string",
  "createdAt": "string",
  "email": "user@example.com",
  "emailVerified": true,
  "id": {},
  "lastLoginDate": "1970-01-01T00:00:00Z",
  "noAccountSetupWarningModal": true,
  "noInstanceConfigWarningModal": true,
  "noWelcomeModal": true,
  "nsfwPolicy": "display",
  "p2pEnabled": true,
  "pluginAuth": "string",
  "role": {
    "id": 2,
    "label": "User"
  },
  "theme": "string",
  "username": "chocobozzz",
  "videoChannels": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "videoQuota": -1,
  "videoQuotaDaily": -1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|none|
|autoPlayNextVideo|boolean|false|none|Automatically start playing the upcoming video after the currently playing video|
|autoPlayNextVideoPlaylist|boolean|false|none|Automatically start playing the video on the playlist after the currently playing video|
|autoPlayVideo|boolean|false|none|Automatically start playing the video on the watch page|
|blocked|boolean|false|none|none|
|blockedReason|string|false|none|none|
|createdAt|string|false|none|none|
|email|string(email)|false|none|The user email|
|emailVerified|boolean|false|none|Has the user confirmed their email address?|
|id|object|false|read-only|none|
|lastLoginDate|string(date-time)|false|none|none|
|noAccountSetupWarningModal|boolean|false|none|none|
|noInstanceConfigWarningModal|boolean|false|none|none|
|noWelcomeModal|boolean|false|none|none|
|nsfwPolicy|[NSFWPolicy](#schemansfwpolicy)|false|none|none|
|p2pEnabled|boolean|false|none|Enable P2P in the player|
|pluginAuth|string|false|none|Auth plugin to use to authenticate the user|
|role|object|false|none|none|
|theme|string|false|none|Theme enabled by this user|
|username|[username](#schemausername)|false|none|immutable name of the user, used to find or mention its actor|
|videoChannels|[[VideoChannel](#schemavideochannel)]|false|none|none|
|videoQuota|integer|false|none|The user video quota in bytes|
|videoQuotaDaily|integer|false|none|The user daily video quota in bytes|

#### Enumerated Values

|Property|Value|
|---|---|
|nsfwPolicy|display|
|nsfwPolicy|blur|
|nsfwPolicy|do_not_list|

<h2 id="tocS_UserAdminFlags">UserAdminFlags</h2>
<!-- backwards compatibility -->
<a id="schemauseradminflags"></a>
<a id="schema_UserAdminFlags"></a>
<a id="tocSuseradminflags"></a>
<a id="tocsuseradminflags"></a>

```json
1
```

Admin flags for the user (None = `0`, Bypass video blocklist = `1`)

<h2 id="tocS_UserRegistration">UserRegistration</h2>
<!-- backwards compatibility -->
<a id="schemauserregistration"></a>
<a id="schema_UserRegistration"></a>
<a id="tocSuserregistration"></a>
<a id="tocsuserregistration"></a>

```json
{
  "accountDisplayName": "string",
  "channelDisplayName": "string",
  "channelHandle": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "email": "user@example.com",
  "emailVerified": true,
  "id": 42,
  "moderationResponse": "string",
  "registrationReason": "string",
  "state": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": {
    "id": 42
  },
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountDisplayName|string|false|none|none|
|channelDisplayName|string|false|none|none|
|channelHandle|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|email|string(email)|false|none|none|
|emailVerified|boolean|false|none|none|
|id|[id](#schemaid)|false|none|none|
|moderationResponse|string \| null|false|none|none|
|registrationReason|string|false|none|none|
|state|object|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|user|object \| null|false|none|If the registration has been accepted, this is a partial user object created by the registration|
|username|string|false|none|none|

<h2 id="tocS_UserRegistrationAcceptOrReject">UserRegistrationAcceptOrReject</h2>
<!-- backwards compatibility -->
<a id="schemauserregistrationacceptorreject"></a>
<a id="schema_UserRegistrationAcceptOrReject"></a>
<a id="tocSuserregistrationacceptorreject"></a>
<a id="tocsuserregistrationacceptorreject"></a>

```json
{
  "moderationResponse": "string",
  "preventEmailDelivery": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moderationResponse|string|true|none|Moderation response to send to the user|
|preventEmailDelivery|boolean|false|none|Set it to true if you don't want PeerTube to send an email to the user|

<h2 id="tocS_UserRegistrationRequest">UserRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserregistrationrequest"></a>
<a id="schema_UserRegistrationRequest"></a>
<a id="tocSuserregistrationrequest"></a>
<a id="tocsuserregistrationrequest"></a>

```json
{
  "channel": {
    "displayName": "string",
    "name": "framasoft_videos"
  },
  "displayName": "string",
  "email": "user@example.com",
  "password": "password",
  "username": {},
  "registrationReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|object|false|none|channel base information used to create the first channel of the user|
|displayName|string|false|none|editable name of the user, displayed in its representations|
|email|string(email)|true|none|email of the user, used for login or service communications|
|password|[password](#schemapassword)|true|none|none|
|username|object|true|none|immutable name of the user, used to find or mention its actor|
|registrationReason|string|true|none|reason for the user to register on the instance|

<h2 id="tocS_UserRole">UserRole</h2>
<!-- backwards compatibility -->
<a id="schemauserrole"></a>
<a id="schema_UserRole"></a>
<a id="tocSuserrole"></a>
<a id="tocsuserrole"></a>

```json
2
```

The user role (Admin = `0`, Moderator = `1`, User = `2`)

<h2 id="tocS_UserViewingVideo">UserViewingVideo</h2>
<!-- backwards compatibility -->
<a id="schemauserviewingvideo"></a>
<a id="schema_UserViewingVideo"></a>
<a id="tocSuserviewingvideo"></a>
<a id="tocsuserviewingvideo"></a>

```json
{
  "currentTime": 5,
  "viewEvent": "seek"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentTime|integer(seconds)|true|none|timestamp within the video, in seconds|
|viewEvent|string|false|none|Event since last viewing call:<br> * `seek` - If the user seeked the video<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|viewEvent|seek|

<h2 id="tocS_UserWithStats">UserWithStats</h2>
<!-- backwards compatibility -->
<a id="schemauserwithstats"></a>
<a id="schema_UserWithStats"></a>
<a id="tocSuserwithstats"></a>
<a id="tocsuserwithstats"></a>

```json
{
  "account": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "blocked": true,
  "blockedReason": "string",
  "createdAt": "string",
  "email": "user@example.com",
  "emailVerified": true,
  "id": {},
  "lastLoginDate": "1970-01-01T00:00:00Z",
  "noAccountSetupWarningModal": true,
  "noInstanceConfigWarningModal": true,
  "noWelcomeModal": true,
  "nsfwPolicy": "display",
  "p2pEnabled": true,
  "pluginAuth": "string",
  "role": {
    "id": 2,
    "label": "User"
  },
  "theme": "string",
  "username": "chocobozzz",
  "videoChannels": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "videoQuota": -1,
  "videoQuotaDaily": -1,
  "abusesAcceptedCount": 0,
  "abusesCount": 0,
  "abusesCreatedCount": 0,
  "videoCommentsCount": 0,
  "videosCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|none|
|autoPlayNextVideo|boolean|false|none|Automatically start playing the upcoming video after the currently playing video|
|autoPlayNextVideoPlaylist|boolean|false|none|Automatically start playing the video on the playlist after the currently playing video|
|autoPlayVideo|boolean|false|none|Automatically start playing the video on the watch page|
|blocked|boolean|false|none|none|
|blockedReason|string|false|none|none|
|createdAt|string|false|none|none|
|email|string(email)|false|none|The user email|
|emailVerified|boolean|false|none|Has the user confirmed their email address?|
|id|object|false|read-only|none|
|lastLoginDate|string(date-time)|false|none|none|
|noAccountSetupWarningModal|boolean|false|none|none|
|noInstanceConfigWarningModal|boolean|false|none|none|
|noWelcomeModal|boolean|false|none|none|
|nsfwPolicy|[NSFWPolicy](#schemansfwpolicy)|false|none|none|
|p2pEnabled|boolean|false|none|Enable P2P in the player|
|pluginAuth|string|false|none|Auth plugin to use to authenticate the user|
|role|object|false|none|none|
|theme|string|false|none|Theme enabled by this user|
|username|[username](#schemausername)|false|none|immutable name of the user, used to find or mention its actor|
|videoChannels|[[VideoChannel](#schemavideochannel)]|false|none|none|
|videoQuota|integer|false|none|The user video quota in bytes|
|videoQuotaDaily|integer|false|none|The user daily video quota in bytes|
|abusesAcceptedCount|integer|false|none|Count of reports/abuses created by the user and accepted/acted upon by the moderation team|
|abusesCount|integer|false|none|Count of reports/abuses of which the user is a target|
|abusesCreatedCount|integer|false|none|Count of reports/abuses created by the user|
|videoCommentsCount|integer|false|none|Count of comments published|
|videosCount|integer|false|none|Count of videos published|

#### Enumerated Values

|Property|Value|
|---|---|
|nsfwPolicy|display|
|nsfwPolicy|blur|
|nsfwPolicy|do_not_list|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "account": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "blacklisted": true,
  "blacklistedReason": "string",
  "category": {
    "id": 15,
    "label": "Science & Technology"
  },
  "channel": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 42,
    "name": "string",
    "url": "http://example.com"
  },
  "createdAt": "2017-10-01T10:52:46.396Z",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
  "dislikes": 7,
  "duration": 1419,
  "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
  "id": {},
  "isLive": true,
  "isLocal": true,
  "language": {
    "id": "en",
    "label": "English"
  },
  "licence": {
    "id": 2,
    "label": "Attribution - Share Alike"
  },
  "likes": 42,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
  "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "publishedAt": "2018-10-01T10:52:46.396Z",
  "scheduledUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "shortUUID": {},
  "state": {
    "id": 1,
    "label": "string"
  },
  "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "userHistory": {
    "currentTime": 0
  },
  "uuid": {},
  "views": 1337,
  "waitTranscoding": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|
|blacklisted|boolean \| null|false|none|none|
|blacklistedReason|string \| null|false|none|none|
|category|object|false|none|category in which the video is classified|
|channel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|createdAt|string(date-time)|false|none|time at which the video object was first drafted|
|description|string|false|none|truncated description of the video, written in Markdown.<br>Resolve `descriptionPath` to get the full description of maximum `10000` characters.<br>|
|dislikes|integer|false|none|none|
|duration|integer(seconds)|false|none|duration of the video in seconds|
|embedPath|string|false|none|none|
|id|object|false|none|object id for the video|
|isLive|boolean|false|none|none|
|isLocal|boolean|false|none|none|
|language|object|false|none|main language used in the video|
|licence|object|false|none|licence under which the video is distributed|
|likes|integer|false|none|none|
|name|string|false|none|title of the video|
|nsfw|boolean|false|none|none|
|originallyPublishedAt|string(date-time)|false|none|used to represent a date of first publication, prior to the practical publication date of `publishedAt`|
|previewPath|string|false|none|none|
|privacy|object|false|none|privacy policy used to distribute the video|
|publishedAt|string(date-time)|false|none|time at which the video was marked as ready for playback (with restrictions depending on `privacy`). Usually set after a `state` evolution.|
|scheduledUpdate|object \| null|false|none|none|
|shortUUID|object|false|none|none|
|state|object|false|none|represents the internal state of the video processing within the PeerTube instance|
|thumbnailPath|string|false|none|none|
|updatedAt|string(date-time)|false|none|last time the video's metadata was modified|
|userHistory|object \| null|false|none|none|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|
|views|integer|false|none|none|
|waitTranscoding|boolean \| null|false|none|none|

<h2 id="tocS_VideoBlacklist">VideoBlacklist</h2>
<!-- backwards compatibility -->
<a id="schemavideoblacklist"></a>
<a id="schema_VideoBlacklist"></a>
<a id="tocSvideoblacklist"></a>
<a id="tocsvideoblacklist"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "dislikes": 0,
  "duration": 0,
  "id": 42,
  "likes": 0,
  "name": "string",
  "nsfw": true,
  "updatedAt": "1970-01-01T00:00:00Z",
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "videoId": {},
  "views": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|description|string|false|none|none|
|dislikes|integer|false|none|none|
|duration|integer|false|none|none|
|id|[id](#schemaid)|false|none|none|
|likes|integer|false|none|none|
|name|string|false|none|none|
|nsfw|boolean|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|videoId|object|false|none|object id for the video|
|views|integer|false|none|none|

<h2 id="tocS_VideoCaption">VideoCaption</h2>
<!-- backwards compatibility -->
<a id="schemavideocaption"></a>
<a id="schema_VideoCaption"></a>
<a id="tocSvideocaption"></a>
<a id="tocsvideocaption"></a>

```json
{
  "captionPath": "string",
  "language": {
    "id": "en",
    "label": "English"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captionPath|string|false|none|none|
|language|[VideoConstantString-Language](#schemavideoconstantstring-language)|false|none|none|

<h2 id="tocS_VideoCategorySet">VideoCategorySet</h2>
<!-- backwards compatibility -->
<a id="schemavideocategoryset"></a>
<a id="schema_VideoCategorySet"></a>
<a id="tocSvideocategoryset"></a>
<a id="tocsvideocategoryset"></a>

```json
15
```

category id of the video (see [/videos/categories](#operation/getCategories))

<h2 id="tocS_VideoChannel">VideoChannel</h2>
<!-- backwards compatibility -->
<a id="schemavideochannel"></a>
<a id="schema_VideoChannel"></a>
<a id="tocSvideochannel"></a>
<a id="tocsvideochannel"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "followersCount": 0,
  "followingCount": 0,
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "id": 42,
  "name": {},
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "banners": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ],
  "description": "Videos made with <3 by Framasoft",
  "displayName": "Videos of Framasoft",
  "isLocal": true,
  "ownerAccount": {
    "id": 0,
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|followersCount|integer|false|none|number of followers of this actor, as seen by this instance|
|followingCount|integer|false|none|number of actors subscribed to by this actor, as seen by this instance|
|host|string(hostname)|false|none|server on which the actor is resident|
|hostRedundancyAllowed|boolean|false|none|whether this actor's host allows redundancy of its videos|
|id|[id](#schemaid)|false|none|none|
|name|object|false|none|immutable name of the actor, used to find or mention it|
|updatedAt|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|banners|[[ActorImage](#schemaactorimage)]|false|none|none|
|description|string|false|none|none|
|displayName|string|false|none|editable name of the channel, displayed in its representations|
|isLocal|boolean|false|read-only|none|
|ownerAccount|object \| null|false|read-only|none|
|support|string|false|none|text shown by default on all videos of this channel, to tell the audience how to support it|
|updatedAt|string(date-time)|false|read-only|none|

<h2 id="tocS_VideoChannelCreate">VideoChannelCreate</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelcreate"></a>
<a id="schema_VideoChannelCreate"></a>
<a id="tocSvideochannelcreate"></a>
<a id="tocsvideochannelcreate"></a>

```json
{
  "description": null,
  "displayName": null,
  "support": null,
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|Channel description|
|displayName|object|true|none|Channel display name|
|support|object|false|none|How to support/fund the channel|
|name|object|true|none|username of the channel to create|

<h2 id="tocS_VideoChannelEdit">VideoChannelEdit</h2>
<!-- backwards compatibility -->
<a id="schemavideochanneledit"></a>
<a id="schema_VideoChannelEdit"></a>
<a id="tocSvideochanneledit"></a>
<a id="tocsvideochanneledit"></a>

```json
{
  "description": null,
  "displayName": null,
  "support": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|Channel description|
|displayName|object|false|none|Channel display name|
|support|object|false|none|How to support/fund the channel|

<h2 id="tocS_VideoChannelList">VideoChannelList</h2>
<!-- backwards compatibility -->
<a id="schemavideochannellist"></a>
<a id="schema_VideoChannelList"></a>
<a id="tocSvideochannellist"></a>
<a id="tocsvideochannellist"></a>

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "banners": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "description": "Videos made with <3 by Framasoft",
      "displayName": "Videos of Framasoft",
      "isLocal": true,
      "ownerAccount": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_VideoChannelSummary">VideoChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsummary"></a>
<a id="schema_VideoChannelSummary"></a>
<a id="tocSvideochannelsummary"></a>
<a id="tocsvideochannelsummary"></a>

```json
{
  "avatars": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "path": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "width": 0
    }
  ],
  "displayName": "string",
  "host": "example.com",
  "id": 42,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|
|displayName|string|false|none|none|
|host|string(hostname)|false|none|none|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_VideoChannelSync">VideoChannelSync</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsync"></a>
<a id="schema_VideoChannelSync"></a>
<a id="tocSvideochannelsync"></a>
<a id="tocsvideochannelsync"></a>

```json
{
  "channel": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "banners": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "description": "Videos made with <3 by Framasoft",
    "displayName": "Videos of Framasoft",
    "isLocal": true,
    "ownerAccount": {
      "id": 0,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
    },
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "id": 42,
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "state": {
    "id": 2,
    "label": "PROCESSING"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|[VideoChannel](#schemavideochannel)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|externalChannelUrl|string|false|none|none|
|id|[id](#schemaid)|false|none|none|
|lastSyncAt|string(date-time) \| null|false|none|none|
|state|object|false|none|none|

<h2 id="tocS_VideoChannelSyncCreate">VideoChannelSyncCreate</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsynccreate"></a>
<a id="schema_VideoChannelSyncCreate"></a>
<a id="tocSvideochannelsynccreate"></a>
<a id="tocsvideochannelsynccreate"></a>

```json
{
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "videoChannelId": 42
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalChannelUrl|string|false|none|none|
|videoChannelId|[id](#schemaid)|false|none|none|

<h2 id="tocS_VideoChannelSyncList">VideoChannelSyncList</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsynclist"></a>
<a id="schema_VideoChannelSyncList"></a>
<a id="tocSvideochannelsynclist"></a>
<a id="tocsvideochannelsynclist"></a>

```json
{
  "data": [
    {
      "channel": {
        "createdAt": "1970-01-01T00:00:00Z",
        "followersCount": 0,
        "followingCount": 0,
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "id": 42,
        "name": {},
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "banners": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "description": "Videos made with <3 by Framasoft",
        "displayName": "Videos of Framasoft",
        "isLocal": true,
        "ownerAccount": {
          "id": 0,
          "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
        },
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
      "id": 42,
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "state": {
        "id": 2,
        "label": "PROCESSING"
      }
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_VideoChannelUpdate">VideoChannelUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelupdate"></a>
<a id="schema_VideoChannelUpdate"></a>
<a id="tocSvideochannelupdate"></a>
<a id="tocsvideochannelupdate"></a>

```json
{
  "description": null,
  "displayName": null,
  "support": null,
  "bulkVideosSupportUpdate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|Channel description|
|displayName|object|false|none|Channel display name|
|support|object|false|none|How to support/fund the channel|
|bulkVideosSupportUpdate|boolean|false|none|Update the support field for all videos of this channel|

<h2 id="tocS_VideoComment">VideoComment</h2>
<!-- backwards compatibility -->
<a id="schemavideocomment"></a>
<a id="schema_VideoComment"></a>
<a id="tocSvideocomment"></a>
<a id="tocsvideocomment"></a>

```json
{
  "account": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "deletedAt": null,
  "id": 42,
  "inReplyToCommentId": {},
  "isDeleted": false,
  "text": "This video is wonderful!",
  "threadId": 42,
  "totalReplies": 0,
  "totalRepliesFromVideoAuthor": 0,
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "videoId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Account](#schemaaccount)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|deletedAt|string(date-time) \| null|false|none|none|
|id|[id](#schemaid)|false|none|none|
|inReplyToCommentId|object \| null|false|none|none|
|isDeleted|boolean|false|none|none|
|text|string(html)|false|none|Text of the comment|
|threadId|[id](#schemaid)|false|none|none|
|totalReplies|integer|false|none|none|
|totalRepliesFromVideoAuthor|integer|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|url|string(url)|false|none|none|
|videoId|object|false|none|object id for the video|

<h2 id="tocS_VideoCommentThreadTree">VideoCommentThreadTree</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentthreadtree"></a>
<a id="schema_VideoCommentThreadTree"></a>
<a id="tocSvideocommentthreadtree"></a>
<a id="tocsvideocommentthreadtree"></a>

```json
{
  "children": [
    {
      "children": [
        {}
      ],
      "comment": {
        "account": {
          "createdAt": "1970-01-01T00:00:00Z",
          "followersCount": 0,
          "followingCount": 0,
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "id": 42,
          "name": {},
          "updatedAt": "1970-01-01T00:00:00Z",
          "url": "http://example.com",
          "description": "string",
          "displayName": "string",
          "userId": {}
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "deletedAt": null,
        "id": 42,
        "inReplyToCommentId": {},
        "isDeleted": false,
        "text": "This video is wonderful!",
        "threadId": 42,
        "totalReplies": 0,
        "totalRepliesFromVideoAuthor": 0,
        "updatedAt": "1970-01-01T00:00:00Z",
        "url": "http://example.com",
        "videoId": {}
      }
    }
  ],
  "comment": {
    "account": {
      "createdAt": "1970-01-01T00:00:00Z",
      "followersCount": 0,
      "followingCount": 0,
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "id": 42,
      "name": {},
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "http://example.com",
      "description": "string",
      "displayName": "string",
      "userId": {}
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "id": 42,
    "inReplyToCommentId": {},
    "isDeleted": false,
    "text": "This video is wonderful!",
    "threadId": 42,
    "totalReplies": 0,
    "totalRepliesFromVideoAuthor": 0,
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "videoId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[VideoCommentThreadTree](#schemavideocommentthreadtree)]|false|none|none|
|comment|[VideoComment](#schemavideocomment)|false|none|none|

<h2 id="tocS_VideoCommentsForXML">VideoCommentsForXML</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentsforxml"></a>
<a id="schema_VideoCommentsForXML"></a>
<a id="tocSvideocommentsforxml"></a>
<a id="tocsvideocommentsforxml"></a>

```json
[
  {
    "content:encoded": "string",
    "dc:creator": "string",
    "guid": "string",
    "link": "http://example.com",
    "pubDate": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_VideoConstantNumber-Category">VideoConstantNumber-Category</h2>
<!-- backwards compatibility -->
<a id="schemavideoconstantnumber-category"></a>
<a id="schema_VideoConstantNumber-Category"></a>
<a id="tocSvideoconstantnumber-category"></a>
<a id="tocsvideoconstantnumber-category"></a>

```json
{
  "id": 15,
  "label": "Science & Technology"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|label|string|false|none|none|

<h2 id="tocS_VideoConstantNumber-Licence">VideoConstantNumber-Licence</h2>
<!-- backwards compatibility -->
<a id="schemavideoconstantnumber-licence"></a>
<a id="schema_VideoConstantNumber-Licence"></a>
<a id="tocSvideoconstantnumber-licence"></a>
<a id="tocsvideoconstantnumber-licence"></a>

```json
{
  "id": 2,
  "label": "Attribution - Share Alike"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|label|string|false|none|none|

<h2 id="tocS_VideoConstantString-Language">VideoConstantString-Language</h2>
<!-- backwards compatibility -->
<a id="schemavideoconstantstring-language"></a>
<a id="schema_VideoConstantString-Language"></a>
<a id="tocSvideoconstantstring-language"></a>
<a id="tocsvideoconstantstring-language"></a>

```json
{
  "id": "en",
  "label": "English"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|label|string|false|none|none|

<h2 id="tocS_VideoCreateImport">VideoCreateImport</h2>
<!-- backwards compatibility -->
<a id="schemavideocreateimport"></a>
<a id="schema_VideoCreateImport"></a>
<a id="tocSvideocreateimport"></a>
<a id="tocsvideocreateimport"></a>

```json
{
  "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "category": 15,
  "channelId": 3,
  "commentsEnabled": true,
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "downloadEnabled": true,
  "language": "en",
  "licence": 2,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "previewfile": "string",
  "privacy": 1,
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "framasoft",
    "peertube"
  ],
  "thumbnailfile": "string",
  "waitTranscoding": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|targetUrl|string(url)|true|none|remote URL where to find the import's source video|
|*oneOf*|object|false|none|none|
|magnetUri|string(uri)|true|none|magnet URI allowing to resolve the import's source video|
|*oneOf*|object|false|none|none|
|torrentfile|string(binary)|true|write-only|Torrent file containing only the video file|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|channelId|integer|true|none|Channel id that will contain this video|
|commentsEnabled|boolean|false|none|Enable or disable comments for this video|
|description|string|false|none|Video description|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|name|string|true|none|Video name|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|previewfile|string(binary)|false|none|Video preview file|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|support|string|false|none|A text tell the audience how to support the video creator|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|

<h2 id="tocS_VideoDetails">VideoDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideodetails"></a>
<a id="schema_VideoDetails"></a>
<a id="tocSvideodetails"></a>
<a id="tocsvideodetails"></a>

```json
{
  "account": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "displayName": "string",
    "userId": {}
  },
  "blacklisted": true,
  "blacklistedReason": "string",
  "category": {
    "id": 15,
    "label": "Science & Technology"
  },
  "channel": {
    "createdAt": "1970-01-01T00:00:00Z",
    "followersCount": 0,
    "followingCount": 0,
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "id": 42,
    "name": {},
    "updatedAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "banners": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "description": "Videos made with <3 by Framasoft",
    "displayName": "Videos of Framasoft",
    "isLocal": true,
    "ownerAccount": {
      "id": 0,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
    },
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3"
  },
  "createdAt": "2017-10-01T10:52:46.396Z",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
  "dislikes": 7,
  "duration": 1419,
  "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
  "id": {},
  "isLive": true,
  "isLocal": true,
  "language": {
    "id": "en",
    "label": "English"
  },
  "licence": {
    "id": 2,
    "label": "Attribution - Share Alike"
  },
  "likes": 42,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
  "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "publishedAt": "2018-10-01T10:52:46.396Z",
  "scheduledUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "shortUUID": {},
  "state": {
    "id": 1,
    "label": "string"
  },
  "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "userHistory": {
    "currentTime": 0
  },
  "uuid": {},
  "views": 1337,
  "waitTranscoding": true,
  "commentsEnabled": true,
  "descriptionPath": "/api/v1/videos/9c9de5e8-0a1e-484a-b099-e80766180a6d/description",
  "downloadEnabled": true,
  "files": [
    {
      "fileDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "fps": 0,
      "id": 42,
      "magnetUri": "http://example.com",
      "metadataUrl": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentDownloadUrl": "http://example.com",
      "torrentUrl": "http://example.com"
    }
  ],
  "streamingPlaylists": [
    {
      "id": 42,
      "type": 1,
      "files": [
        {
          "fileDownloadUrl": "http://example.com",
          "fileUrl": "http://example.com",
          "fps": 0,
          "id": 42,
          "magnetUri": "http://example.com",
          "metadataUrl": "http://example.com",
          "resolution": {
            "id": 240,
            "label": "240p"
          },
          "size": 0,
          "torrentDownloadUrl": "http://example.com",
          "torrentUrl": "http://example.com"
        }
      ],
      "playlistUrl": "http://example.com",
      "redundancies": [
        {
          "baseUrl": "http://example.com"
        }
      ],
      "segmentsSha256Url": "http://example.com"
    }
  ],
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "flowers",
    "gardening"
  ],
  "trackerUrls": [
    "https://peertube2.cpy.re/tracker/announce",
    "wss://peertube2.cpy.re/tracker/socket"
  ],
  "viewers": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|
|blacklisted|boolean \| null|false|none|none|
|blacklistedReason|string \| null|false|none|none|
|category|object|false|none|category in which the video is classified|
|channel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|createdAt|string(date-time)|false|none|time at which the video object was first drafted|
|description|string|false|none|truncated description of the video, written in Markdown.<br>Resolve `descriptionPath` to get the full description of maximum `10000` characters.<br>|
|dislikes|integer|false|none|none|
|duration|integer(seconds)|false|none|duration of the video in seconds|
|embedPath|string|false|none|none|
|id|object|false|none|object id for the video|
|isLive|boolean|false|none|none|
|isLocal|boolean|false|none|none|
|language|object|false|none|main language used in the video|
|licence|object|false|none|licence under which the video is distributed|
|likes|integer|false|none|none|
|name|string|false|none|title of the video|
|nsfw|boolean|false|none|none|
|originallyPublishedAt|string(date-time)|false|none|used to represent a date of first publication, prior to the practical publication date of `publishedAt`|
|previewPath|string|false|none|none|
|privacy|object|false|none|privacy policy used to distribute the video|
|publishedAt|string(date-time)|false|none|time at which the video was marked as ready for playback (with restrictions depending on `privacy`). Usually set after a `state` evolution.|
|scheduledUpdate|object \| null|false|none|none|
|shortUUID|object|false|none|none|
|state|object|false|none|represents the internal state of the video processing within the PeerTube instance|
|thumbnailPath|string|false|none|none|
|updatedAt|string(date-time)|false|none|last time the video's metadata was modified|
|userHistory|object \| null|false|none|none|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|
|views|integer|false|none|none|
|waitTranscoding|boolean \| null|false|none|none|
|account|[Account](#schemaaccount)|false|none|none|
|channel|[VideoChannel](#schemavideochannel)|false|none|none|
|commentsEnabled|boolean|false|none|none|
|descriptionPath|string|false|none|path at which to get the full description of maximum `10000` characters|
|downloadEnabled|boolean|false|none|none|
|files|[[VideoFile](#schemavideofile)]|false|none|WebTorrent/raw video files. If WebTorrent is disabled on the server:<br><br>- field will be empty<br>- video files will be found in `streamingPlaylists[].files` field<br>|
|streamingPlaylists|[[VideoStreamingPlaylists](#schemavideostreamingplaylists)]|false|none|HLS playlists/manifest files. If HLS is disabled on the server:<br><br>- field will be empty<br>- video files will be found in `files` field<br>|
|support|string|false|none|A text tell the audience how to support the video creator|
|tags|[string]|false|none|none|
|trackerUrls|[string(url)]|false|none|none|
|viewers|integer|false|none|If the video is a live, you have the amount of current viewers|

<h2 id="tocS_VideoFile">VideoFile</h2>
<!-- backwards compatibility -->
<a id="schemavideofile"></a>
<a id="schema_VideoFile"></a>
<a id="tocSvideofile"></a>
<a id="tocsvideofile"></a>

```json
{
  "fileDownloadUrl": "http://example.com",
  "fileUrl": "http://example.com",
  "fps": 0,
  "id": 42,
  "magnetUri": "http://example.com",
  "metadataUrl": "http://example.com",
  "resolution": {
    "id": 240,
    "label": "240p"
  },
  "size": 0,
  "torrentDownloadUrl": "http://example.com",
  "torrentUrl": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileDownloadUrl|string(url)|false|none|URL endpoint that transfers the video file as an attachment (so that the browser opens a download dialog)|
|fileUrl|string(url)|false|none|Direct URL of the video|
|fps|number|false|none|Frames per second of the video file|
|id|[id](#schemaid)|false|none|none|
|magnetUri|string(uri)|false|none|magnet URI allowing to resolve the video via BitTorrent without a metainfo file|
|metadataUrl|string(url)|false|none|URL dereferencing the output of ffprobe on the file|
|resolution|[VideoResolutionConstant](#schemavideoresolutionconstant)|false|none|resolutions and their labels for the video|
|size|integer|false|none|Video file size in bytes|
|torrentDownloadUrl|string(url)|false|none|URL endpoint that transfers the torrent file as an attachment (so that the browser opens a download dialog)|
|torrentUrl|string(url)|false|none|Direct URL of the torrent file|

<h2 id="tocS_VideoImport">VideoImport</h2>
<!-- backwards compatibility -->
<a id="schemavideoimport"></a>
<a id="schema_VideoImport"></a>
<a id="tocSvideoimport"></a>
<a id="tocsvideoimport"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "error": "string",
  "id": {},
  "magnetUri": "http://example.com",
  "state": {
    "id": 1,
    "label": "Pending"
  },
  "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "torrentName": "string",
  "torrentfile": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "video": {
    "account": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "channel": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 42,
      "name": "string",
      "url": "http://example.com"
    },
    "createdAt": "2017-10-01T10:52:46.396Z",
    "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "dislikes": 7,
    "duration": 1419,
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "id": {},
    "isLive": true,
    "isLocal": true,
    "language": {
      "id": "en",
      "label": "English"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "likes": 42,
    "name": "What is PeerTube?",
    "nsfw": true,
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01"
    },
    "shortUUID": {},
    "state": {
      "id": 1,
      "label": "string"
    },
    "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "userHistory": {
      "currentTime": 0
    },
    "uuid": {},
    "views": 1337,
    "waitTranscoding": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|read-only|none|
|error|string|false|read-only|none|
|id|object|false|read-only|none|
|magnetUri|string(uri)|false|none|magnet URI allowing to resolve the import's source video|
|state|object|false|read-only|none|
|targetUrl|string(url)|false|none|remote URL where to find the import's source video|
|torrentName|string|false|read-only|none|
|torrentfile|string(binary)|false|write-only|Torrent file containing only the video file|
|updatedAt|string(date-time)|false|read-only|none|
|video|object \| null|false|read-only|none|

<h2 id="tocS_VideoImportStateConstant">VideoImportStateConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideoimportstateconstant"></a>
<a id="schema_VideoImportStateConstant"></a>
<a id="tocSvideoimportstateconstant"></a>
<a id="tocsvideoimportstateconstant"></a>

```json
{
  "id": 1,
  "label": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|The video import state (Pending = `1`, Success = `2`, Failed = `3`)|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|

<h2 id="tocS_VideoImportsList">VideoImportsList</h2>
<!-- backwards compatibility -->
<a id="schemavideoimportslist"></a>
<a id="schema_VideoImportsList"></a>
<a id="tocSvideoimportslist"></a>
<a id="tocsvideoimportslist"></a>

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "error": "string",
      "id": {},
      "magnetUri": "http://example.com",
      "state": {
        "id": 1,
        "label": "Pending"
      },
      "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "torrentName": "string",
      "torrentfile": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "video": {
        "account": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 0,
          "name": "string",
          "url": "http://example.com"
        },
        "blacklisted": true,
        "blacklistedReason": "string",
        "category": {
          "id": 15,
          "label": "Science & Technology"
        },
        "channel": {
          "avatars": [
            {
              "createdAt": "1970-01-01T00:00:00Z",
              "path": "string",
              "updatedAt": "1970-01-01T00:00:00Z",
              "width": 0
            }
          ],
          "displayName": "string",
          "host": "example.com",
          "id": 42,
          "name": "string",
          "url": "http://example.com"
        },
        "createdAt": "2017-10-01T10:52:46.396Z",
        "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
        "dislikes": 7,
        "duration": 1419,
        "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
        "id": {},
        "isLive": true,
        "isLocal": true,
        "language": {
          "id": "en",
          "label": "English"
        },
        "licence": {
          "id": 2,
          "label": "Attribution - Share Alike"
        },
        "likes": 42,
        "name": "What is PeerTube?",
        "nsfw": true,
        "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
        "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
        "privacy": {
          "id": 1,
          "label": "string"
        },
        "publishedAt": "2018-10-01T10:52:46.396Z",
        "scheduledUpdate": {
          "privacy": 1,
          "updateAt": "1970-01-01"
        },
        "shortUUID": {},
        "state": {
          "id": 1,
          "label": "string"
        },
        "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
        "updatedAt": "2021-05-04T08:01:01.502Z",
        "userHistory": {
          "currentTime": 0
        },
        "uuid": {},
        "views": 1337,
        "waitTranscoding": true
      }
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[VideoImport](#schemavideoimport)]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_VideoInfo">VideoInfo</h2>
<!-- backwards compatibility -->
<a id="schemavideoinfo"></a>
<a id="schema_VideoInfo"></a>
<a id="tocSvideoinfo"></a>
<a id="tocsvideoinfo"></a>

```json
{
  "id": {},
  "name": "What is PeerTube?",
  "uuid": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|object id for the video|
|name|string|false|none|title of the video|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|

<h2 id="tocS_VideoLanguageSet">VideoLanguageSet</h2>
<!-- backwards compatibility -->
<a id="schemavideolanguageset"></a>
<a id="schema_VideoLanguageSet"></a>
<a id="tocSvideolanguageset"></a>
<a id="tocsvideolanguageset"></a>

```json
"en"
```

language id of the video (see [/videos/languages](#operation/getLanguages))

<h2 id="tocS_VideoLicenceSet">VideoLicenceSet</h2>
<!-- backwards compatibility -->
<a id="schemavideolicenceset"></a>
<a id="schema_VideoLicenceSet"></a>
<a id="tocSvideolicenceset"></a>
<a id="tocsvideolicenceset"></a>

```json
2
```

licence id of the video (see [/videos/licences](#operation/getLicences))

<h2 id="tocS_VideoListResponse">VideoListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideolistresponse"></a>
<a id="schema_VideoListResponse"></a>
<a id="tocSvideolistresponse"></a>
<a id="tocsvideolistresponse"></a>

```json
{
  "data": [
    {
      "account": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 0,
        "name": "string",
        "url": "http://example.com"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "channel": {
        "avatars": [
          {
            "createdAt": "1970-01-01T00:00:00Z",
            "path": "string",
            "updatedAt": "1970-01-01T00:00:00Z",
            "width": 0
          }
        ],
        "displayName": "string",
        "host": "example.com",
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "2017-10-01T10:52:46.396Z",
      "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "dislikes": 7,
      "duration": 1419,
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "id": {},
      "isLive": true,
      "isLocal": true,
      "language": {
        "id": "en",
        "label": "English"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "likes": 42,
      "name": "What is PeerTube?",
      "nsfw": true,
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01"
      },
      "shortUUID": {},
      "state": {
        "id": 1,
        "label": "string"
      },
      "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "userHistory": {
        "currentTime": 0
      },
      "uuid": {},
      "views": 1337,
      "waitTranscoding": true
    }
  ],
  "total": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Video](#schemavideo)]|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_VideoPlaylist">VideoPlaylist</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylist"></a>
<a id="schema_VideoPlaylist"></a>
<a id="tocSvideoplaylist"></a>
<a id="tocsvideoplaylist"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "id": 42,
  "isLocal": true,
  "ownerAccount": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 0,
    "name": "string",
    "url": "http://example.com"
  },
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "shortUUID": {},
  "thumbnailPath": "string",
  "type": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z",
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "videoChannel": {
    "avatars": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "path": "string",
        "updatedAt": "1970-01-01T00:00:00Z",
        "width": 0
      }
    ],
    "displayName": "string",
    "host": "example.com",
    "id": 42,
    "name": "string",
    "url": "http://example.com"
  },
  "videoLength": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|none|
|description|string|false|none|none|
|displayName|string|false|none|none|
|id|[id](#schemaid)|false|none|none|
|isLocal|boolean|false|none|none|
|ownerAccount|[AccountSummary](#schemaaccountsummary)|false|none|none|
|privacy|[VideoPlaylistPrivacyConstant](#schemavideoplaylistprivacyconstant)|false|none|none|
|shortUUID|object|false|none|none|
|thumbnailPath|string|false|none|none|
|type|[VideoPlaylistTypeConstant](#schemavideoplaylisttypeconstant)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|videoChannel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|videoLength|integer|false|none|none|

<h2 id="tocS_VideoPlaylistPrivacyConstant">VideoPlaylistPrivacyConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylistprivacyconstant"></a>
<a id="schema_VideoPlaylistPrivacyConstant"></a>
<a id="tocSvideoplaylistprivacyconstant"></a>
<a id="tocsvideoplaylistprivacyconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoPlaylistPrivacySet](#schemavideoplaylistprivacyset)|false|none|Video playlist privacy policy (see [/video-playlists/privacies])|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|

<h2 id="tocS_VideoPlaylistPrivacySet">VideoPlaylistPrivacySet</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylistprivacyset"></a>
<a id="schema_VideoPlaylistPrivacySet"></a>
<a id="tocSvideoplaylistprivacyset"></a>
<a id="tocsvideoplaylistprivacyset"></a>

```json
1
```

Video playlist privacy policy (see [/video-playlists/privacies])

<h2 id="tocS_VideoPlaylistTypeConstant">VideoPlaylistTypeConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylisttypeconstant"></a>
<a id="schema_VideoPlaylistTypeConstant"></a>
<a id="tocSvideoplaylisttypeconstant"></a>
<a id="tocsvideoplaylisttypeconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoPlaylistTypeSet](#schemavideoplaylisttypeset)|false|none|The video playlist type (Regular = `1`, Watch Later = `2`)|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|

<h2 id="tocS_VideoPlaylistTypeSet">VideoPlaylistTypeSet</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylisttypeset"></a>
<a id="schema_VideoPlaylistTypeSet"></a>
<a id="tocSvideoplaylisttypeset"></a>
<a id="tocsvideoplaylisttypeset"></a>

```json
1
```

The video playlist type (Regular = `1`, Watch Later = `2`)

<h2 id="tocS_VideoPrivacyConstant">VideoPrivacyConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideoprivacyconstant"></a>
<a id="schema_VideoPrivacyConstant"></a>
<a id="tocSvideoprivacyconstant"></a>
<a id="tocsvideoprivacyconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|
|id|4|

<h2 id="tocS_VideoPrivacySet">VideoPrivacySet</h2>
<!-- backwards compatibility -->
<a id="schemavideoprivacyset"></a>
<a id="schema_VideoPrivacySet"></a>
<a id="tocSvideoprivacyset"></a>
<a id="tocsvideoprivacyset"></a>

```json
1
```

privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))

<h2 id="tocS_VideoRating">VideoRating</h2>
<!-- backwards compatibility -->
<a id="schemavideorating"></a>
<a id="schema_VideoRating"></a>
<a id="tocSvideorating"></a>
<a id="tocsvideorating"></a>

```json
{
  "rating": "like",
  "video": {
    "account": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 0,
      "name": "string",
      "url": "http://example.com"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "channel": {
      "avatars": [
        {
          "createdAt": "1970-01-01T00:00:00Z",
          "path": "string",
          "updatedAt": "1970-01-01T00:00:00Z",
          "width": 0
        }
      ],
      "displayName": "string",
      "host": "example.com",
      "id": 42,
      "name": "string",
      "url": "http://example.com"
    },
    "createdAt": "2017-10-01T10:52:46.396Z",
    "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "dislikes": 7,
    "duration": 1419,
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "id": {},
    "isLive": true,
    "isLocal": true,
    "language": {
      "id": "en",
      "label": "English"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "likes": 42,
    "name": "What is PeerTube?",
    "nsfw": true,
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "previewPath": "/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01"
    },
    "shortUUID": {},
    "state": {
      "id": 1,
      "label": "string"
    },
    "thumbnailPath": "/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "userHistory": {
      "currentTime": 0
    },
    "uuid": {},
    "views": 1337,
    "waitTranscoding": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rating|string|true|none|Rating of the video|
|video|[Video](#schemavideo)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rating|like|
|rating|dislike|
|rating|none|

<h2 id="tocS_VideoRedundancy">VideoRedundancy</h2>
<!-- backwards compatibility -->
<a id="schemavideoredundancy"></a>
<a id="schema_VideoRedundancy"></a>
<a id="tocSvideoredundancy"></a>
<a id="tocsvideoredundancy"></a>

```json
{
  "id": 42,
  "name": "string",
  "redundancies": {
    "files": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "expiresOn": "1970-01-01T00:00:00Z",
        "fileUrl": "http://example.com",
        "id": 42,
        "size": 0,
        "strategy": "manual",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "streamingPlaylists": [
      {
        "createdAt": "1970-01-01T00:00:00Z",
        "expiresOn": "1970-01-01T00:00:00Z",
        "fileUrl": "http://example.com",
        "id": 42,
        "size": 0,
        "strategy": "manual",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "url": "http://example.com",
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|redundancies|object|false|none|none|
|url|string(url)|false|none|none|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|

<h2 id="tocS_VideoResolutionConstant">VideoResolutionConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideoresolutionconstant"></a>
<a id="schema_VideoResolutionConstant"></a>
<a id="tocSvideoresolutionconstant"></a>
<a id="tocsvideoresolutionconstant"></a>

```json
{
  "id": 240,
  "label": "240p"
}
```

resolutions and their labels for the video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoResolutionSet](#schemavideoresolutionset)|false|none|Video resolution (`0`, `240`, `360`, `720`, `1080`, `1440` or `2160`)<br><br>`0` is used as a special value for stillimage videos dedicated to audio, a.k.a. audio-only videos.<br>|
|label|string|false|none|none|

<h2 id="tocS_VideoResolutionSet">VideoResolutionSet</h2>
<!-- backwards compatibility -->
<a id="schemavideoresolutionset"></a>
<a id="schema_VideoResolutionSet"></a>
<a id="tocSvideoresolutionset"></a>
<a id="tocsvideoresolutionset"></a>

```json
240
```

Video resolution (`0`, `240`, `360`, `720`, `1080`, `1440` or `2160`)

`0` is used as a special value for stillimage videos dedicated to audio, a.k.a. audio-only videos.

<h2 id="tocS_VideoScheduledUpdate">VideoScheduledUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavideoscheduledupdate"></a>
<a id="schema_VideoScheduledUpdate"></a>
<a id="tocSvideoscheduledupdate"></a>
<a id="tocsvideoscheduledupdate"></a>

```json
{
  "privacy": 1,
  "updateAt": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|updateAt|string(date)|true|none|When to update the video|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|

<h2 id="tocS_VideoSource">VideoSource</h2>
<!-- backwards compatibility -->
<a id="schemavideosource"></a>
<a id="schema_VideoSource"></a>
<a id="tocSvideosource"></a>
<a id="tocsvideosource"></a>

```json
{
  "filename": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|false|none|none|

<h2 id="tocS_VideoStateConstant">VideoStateConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideostateconstant"></a>
<a id="schema_VideoStateConstant"></a>
<a id="tocSvideostateconstant"></a>
<a id="tocsvideostateconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|The video state:<br>- `1`: Published<br>- `2`: To transcode<br>- `3`: To import<br>- `4`: Waiting for live stream<br>- `5`: Live ended<br>- `6`: To move to an external storage (object storage...)<br>- `7`: Transcoding failed<br>- `8`: Moving to an external storage failed<br>- `9`: To edit using studio edition feature<br>|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|
|id|4|
|id|5|
|id|6|
|id|7|
|id|8|
|id|9|

<h2 id="tocS_VideoStatsOverall">VideoStatsOverall</h2>
<!-- backwards compatibility -->
<a id="schemavideostatsoverall"></a>
<a id="schema_VideoStatsOverall"></a>
<a id="tocSvideostatsoverall"></a>
<a id="tocsvideostatsoverall"></a>

```json
{
  "averageWatchTime": 0,
  "countries": [
    {
      "isoCode": "string",
      "viewers": 0
    }
  ],
  "totalWatchTime": 0,
  "viewersPeak": 0,
  "viewersPeakDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageWatchTime|number|false|none|none|
|countries|[object]|false|none|none|
|totalWatchTime|number|false|none|none|
|viewersPeak|number|false|none|none|
|viewersPeakDate|string(date-time)|false|none|none|

<h2 id="tocS_VideoStatsRetention">VideoStatsRetention</h2>
<!-- backwards compatibility -->
<a id="schemavideostatsretention"></a>
<a id="schema_VideoStatsRetention"></a>
<a id="tocSvideostatsretention"></a>
<a id="tocsvideostatsretention"></a>

```json
{
  "data": [
    {
      "retentionPercent": 0,
      "second": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_VideoStatsTimeserie">VideoStatsTimeserie</h2>
<!-- backwards compatibility -->
<a id="schemavideostatstimeserie"></a>
<a id="schema_VideoStatsTimeserie"></a>
<a id="tocSvideostatstimeserie"></a>
<a id="tocsvideostatstimeserie"></a>

```json
{
  "data": [
    {
      "date": "string",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_VideoStreamingPlaylists">VideoStreamingPlaylists</h2>
<!-- backwards compatibility -->
<a id="schemavideostreamingplaylists"></a>
<a id="schema_VideoStreamingPlaylists"></a>
<a id="tocSvideostreamingplaylists"></a>
<a id="tocsvideostreamingplaylists"></a>

```json
{
  "id": 42,
  "type": 1,
  "files": [
    {
      "fileDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "fps": 0,
      "id": 42,
      "magnetUri": "http://example.com",
      "metadataUrl": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentDownloadUrl": "http://example.com",
      "torrentUrl": "http://example.com"
    }
  ],
  "playlistUrl": "http://example.com",
  "redundancies": [
    {
      "baseUrl": "http://example.com"
    }
  ],
  "segmentsSha256Url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|type|integer|false|none|Playlist type:<br>- `1`: HLS<br>|
|files|[[VideoFile](#schemavideofile)]|false|none|Video files associated to this playlist.<br><br>The difference with the root `files` property is that these files are fragmented, so they can be used in this streaming playlist (HLS, etc.)<br>|
|playlistUrl|string(url)|false|none|none|
|redundancies|[object]|false|none|none|
|segmentsSha256Url|string(url)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|

<h2 id="tocS_VideoStreamingPlaylists-HLS">VideoStreamingPlaylists-HLS</h2>
<!-- backwards compatibility -->
<a id="schemavideostreamingplaylists-hls"></a>
<a id="schema_VideoStreamingPlaylists-HLS"></a>
<a id="tocSvideostreamingplaylists-hls"></a>
<a id="tocsvideostreamingplaylists-hls"></a>

```json
{
  "files": [
    {
      "fileDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "fps": 0,
      "id": 42,
      "magnetUri": "http://example.com",
      "metadataUrl": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentDownloadUrl": "http://example.com",
      "torrentUrl": "http://example.com"
    }
  ],
  "playlistUrl": "http://example.com",
  "redundancies": [
    {
      "baseUrl": "http://example.com"
    }
  ],
  "segmentsSha256Url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[VideoFile](#schemavideofile)]|false|none|Video files associated to this playlist.<br><br>The difference with the root `files` property is that these files are fragmented, so they can be used in this streaming playlist (HLS, etc.)<br>|
|playlistUrl|string(url)|false|none|none|
|redundancies|[object]|false|none|none|
|segmentsSha256Url|string(url)|false|none|none|

<h2 id="tocS_VideoStudioCreateTask">VideoStudioCreateTask</h2>
<!-- backwards compatibility -->
<a id="schemavideostudiocreatetask"></a>
<a id="schema_VideoStudioCreateTask"></a>
<a id="tocSvideostudiocreatetask"></a>
<a id="tocsvideostudiocreatetask"></a>

```json
[
  {
    "name": "cut",
    "options": {
      "end": 0,
      "start": 0
    }
  }
]
```

<h2 id="tocS_VideoTokenResponse">VideoTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideotokenresponse"></a>
<a id="schema_VideoTokenResponse"></a>
<a id="tocSvideotokenresponse"></a>
<a id="tocsvideotokenresponse"></a>

```json
{
  "files": {
    "expires": "1970-01-01T00:00:00Z",
    "token": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|false|none|none|

<h2 id="tocS_VideoUploadRequestCommon">VideoUploadRequestCommon</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadrequestcommon"></a>
<a id="schema_VideoUploadRequestCommon"></a>
<a id="tocSvideouploadrequestcommon"></a>
<a id="tocsvideouploadrequestcommon"></a>

```json
{
  "category": 15,
  "channelId": 3,
  "commentsEnabled": true,
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "downloadEnabled": true,
  "language": "en",
  "licence": 2,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "previewfile": "string",
  "privacy": 1,
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "framasoft",
    "peertube"
  ],
  "thumbnailfile": "string",
  "waitTranscoding": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|channelId|integer|true|none|Channel id that will contain this video|
|commentsEnabled|boolean|false|none|Enable or disable comments for this video|
|description|string|false|none|Video description|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|name|string|true|none|Video name|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|previewfile|string(binary)|false|none|Video preview file|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|support|string|false|none|A text tell the audience how to support the video creator|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|

<h2 id="tocS_VideoUploadRequestLegacy">VideoUploadRequestLegacy</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadrequestlegacy"></a>
<a id="schema_VideoUploadRequestLegacy"></a>
<a id="tocSvideouploadrequestlegacy"></a>
<a id="tocsvideouploadrequestlegacy"></a>

```json
{
  "category": 15,
  "channelId": 3,
  "commentsEnabled": true,
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "downloadEnabled": true,
  "language": "en",
  "licence": 2,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "previewfile": "string",
  "privacy": 1,
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "framasoft",
    "peertube"
  ],
  "thumbnailfile": "string",
  "waitTranscoding": true,
  "videofile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|channelId|integer|true|none|Channel id that will contain this video|
|commentsEnabled|boolean|false|none|Enable or disable comments for this video|
|description|string|false|none|Video description|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|name|string|true|none|Video name|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|previewfile|string(binary)|false|none|Video preview file|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|support|string|false|none|A text tell the audience how to support the video creator|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|
|videofile|string(binary)|true|none|Video file|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|

<h2 id="tocS_VideoUploadRequestResumable">VideoUploadRequestResumable</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadrequestresumable"></a>
<a id="schema_VideoUploadRequestResumable"></a>
<a id="tocSvideouploadrequestresumable"></a>
<a id="tocsvideouploadrequestresumable"></a>

```json
{
  "category": 15,
  "channelId": 3,
  "commentsEnabled": true,
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "downloadEnabled": true,
  "language": "en",
  "licence": 2,
  "name": "What is PeerTube?",
  "nsfw": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "previewfile": "string",
  "privacy": 1,
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01"
  },
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "framasoft",
    "peertube"
  ],
  "thumbnailfile": "string",
  "waitTranscoding": true,
  "filename": "what_is_peertube.mp4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|channelId|integer|true|none|Channel id that will contain this video|
|commentsEnabled|boolean|false|none|Enable or disable comments for this video|
|description|string|false|none|Video description|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|name|string|true|none|Video name|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|previewfile|string(binary)|false|none|Video preview file|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|support|string|false|none|A text tell the audience how to support the video creator|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|
|filename|string(filename)|true|none|Video filename including extension|
|previewfile|string(binary)|false|none|Video preview file|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|

<h2 id="tocS_VideoUploadResponse">VideoUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadresponse"></a>
<a id="schema_VideoUploadResponse"></a>
<a id="tocSvideouploadresponse"></a>
<a id="tocsvideouploadresponse"></a>

```json
{
  "video": {
    "id": {},
    "shortUUID": {},
    "uuid": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|video|object|false|none|none|

<h2 id="tocS_VideosForXML">VideosForXML</h2>
<!-- backwards compatibility -->
<a id="schemavideosforxml"></a>
<a id="schema_VideosForXML"></a>
<a id="tocSvideosforxml"></a>
<a id="tocsvideosforxml"></a>

```json
[
  {
    "content:encoded": "string",
    "dc:creator": "string",
    "description": "string",
    "enclosure": {
      "length": 0,
      "type": "application/x-bittorrent",
      "url": "http://example.com"
    },
    "guid": "string",
    "link": "http://example.com",
    "media:category": 0,
    "media:community": {
      "media:statistics": {
        "views": 0
      }
    },
    "media:description": "string",
    "media:embed": {
      "url": "http://example.com"
    },
    "media:group": [
      {
        "href": "string",
        "type": "application/x-bittorrent"
      }
    ],
    "media:player": {
      "url": "http://example.com"
    },
    "media:rating": "nonadult",
    "media:thumbnail": {
      "height": 0,
      "url": "http://example.com",
      "width": 0
    },
    "media:title": "string",
    "pubDate": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_id">id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
42
```

<h2 id="tocS_password">password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

<h2 id="tocS_shortUUID">shortUUID</h2>
<!-- backwards compatibility -->
<a id="schemashortuuid"></a>
<a id="schema_shortUUID"></a>
<a id="tocSshortuuid"></a>
<a id="tocsshortuuid"></a>

```json
"2y84q2MQUMWPbiEcxNXMgC"
```

translation of a uuid v4 with a bigger alphabet to have a shorter uuid

<h2 id="tocS_username">username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"chocobozzz"
```

immutable name of the user, used to find or mention its actor

<h2 id="tocS_usernameChannel">usernameChannel</h2>
<!-- backwards compatibility -->
<a id="schemausernamechannel"></a>
<a id="schema_usernameChannel"></a>
<a id="tocSusernamechannel"></a>
<a id="tocsusernamechannel"></a>

```json
"framasoft_videos"
```

immutable name of the channel, used to interact with its actor
