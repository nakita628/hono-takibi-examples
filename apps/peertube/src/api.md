<h1 id="peertube">PeerTube v8.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The PeerTube API is built on HTTP(S) and is RESTful. You can use your favorite
HTTP/REST library for your programming language to use PeerTube.

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
  "docs": "https://docs.joinpeertube.org/api-rest-reference.html#operation/getVideo",
  "status": 404,
  "title": "Not Found",
  "type": "about:blank"
}
```

We provide error `type` (following RFC7807) and `code` (internal PeerTube code) values for [a growing number of cases](https://github.com/Chocobozzz/PeerTube/blob/develop/packages/models/src/server/server-error-code.enum.ts),
but it is still optional. Types are used to disambiguate errors that bear the same status code
and are non-obvious:

```
HTTP 1.1 403 Forbidden
Content-Type: application/problem+json; charset=utf-8

{
  "detail": "Cannot get this video regarding follow constraints",
  "docs": "https://docs.joinpeertube.org/api-rest-reference.html#operation/getVideo",
  "status": 403,
  "title": "Forbidden",
  "type": "https://docs.joinpeertube.org/api-rest-reference.html#section/Errors/does_not_respect_follow_constraints"
}
```

Here a 403 error could otherwise mean that the video is private or blocklisted.

## Validation errors

Example:

```
HTTP 1.1 400 Bad Request
Content-Type: application/problem+json; charset=utf-8

{
  "detail": "Incorrect request parameters: id",
  "docs": "https://docs.joinpeertube.org/api-rest-reference.html#operation/getVideo",
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
`invalid-params.<field>.location` can be either 'params', 'body', 'header', 'query' or 'cookies'.
`invalid-params.<field>.value` reports the value that didn't pass validation whose `invalid-params.<field>.msg` is about.

## max_file_size_reached

The uploaded file exceeds the instance-wide file size limit.

## quota_reached

The uploaded file exceeds the user's storage quota.

## does_not_respect_follow_constraints

The requested remote resource cannot be accessed because the instance does not follow its origin.

## live_not_enabled

Live streaming is not enabled on the instance.

## live_not_allowing_replay

Saving live replays is disabled on this instance, so a live cannot be created or updated with `saveReplay` enabled.

## live_conflicting_permanent_and_save_replay

Not returned by PeerTube anymore: permanent lives can save replays.

## max_instance_lives_limit_reached

The instance has reached its maximum number of simultaneous live streams.

## max_user_lives_limit_reached

The user has reached the maximum number of simultaneous live streams.

## incorrect_files_in_torrent

The torrent does not contain exactly one usable video file.

## comment_not_associated_to_video

The comment is not associated with the requested video.

## invalid_grant

The OAuth grant or refresh token is invalid.

## invalid_client

Client authentication failed.

## invalid_token

The access token is expired, revoked, malformed, or otherwise invalid.

## unauthorized_request

The endpoint requires authentication but no access token was provided.

## invalid_request

The authentication or token request is malformed: missing `grant_type`, malformed `Authorization` header,
access token sent using more than one method, or sent in the query string.

## unsupported_grant_type

The `grant_type` is not supported. PeerTube supports `password` and `refresh_token`.

## unauthorized_client

The OAuth client is not allowed to use the requested `grant_type`.

## server_error

An unexpected error occurred while checking the access token.

## missing_two_factor

The required two-factor authentication header is missing.

## too_long_password

The password exceeds the maximum allowed length.

## invalid_two_factor

The two-factor authentication code is invalid.

## account_blocked

The account is blocked.

## email_not_verified

The account email address has not been verified.

## account_waiting_for_approval

The account is waiting for administrator approval.

## account_approval_rejected

The account approval request was rejected.

## runner_job_not_in_processing_state

The runner job is not in the processing state.

## runner_job_not_in_pending_state

The runner job is not in the pending state.

## unknown_runner_token

The runner token is unknown.

## video_requires_password

A password is required to access the video.

## incorrect_video_password

The password provided for the video is incorrect.

## video_already_being_transcoded

The video is already being transcoded.

## video_already_being_transcribed

The video is already being transcribed.

## video_already_has_captions

The video already has captions.

## max_user_video_quota_exceeded_for_user_export

The user requested an export including video files, but the total size of their videos is above the maximum allowed by the instance for such exports.
Request an export without video files instead.

## current_password_is_invalid

The current password is invalid.

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

<a href="https://docs.joinpeertube.org/api-rest-reference.html">External documentation</a>

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


## Resend verification link to registration request email

<a id="opIdresendEmailToVerifyRegistration"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/registrations/ask-send-verify-email \
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

<h3 id="resend-verification-link-to-registration-request-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|Registration email|

<h3 id="resend-verification-link-to-registration-request-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify a registration email

<a id="opIdverifyRegistrationEmail"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/registrations/42/verify-email \
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

## Register a user

<a id="opIdregisterUser"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": {},
    "password": "password",
    "email": "user@example.com",
    "displayName": "string",
    "channel": {
      "name": "framasoft_videos",
      "displayName": "string"
    },
    "signupClient": "peertube-app"
  }'
```

`POST /api/v1/users/register`

Signup has to be enabled and signup approval is not required

> Body parameter

```json
{
  "username": {},
  "password": "password",
  "email": "user@example.com",
  "displayName": "string",
  "channel": {
    "name": "framasoft_videos",
    "displayName": "string"
  },
  "signupClient": "peertube-app"
}
```

<h3 id="register-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterUser](#schemaregisteruser)|true|none|
|» username|body|object|true|immutable name of the user, used to find or mention its actor|
|» password|body|[password](#schemapassword)|true|none|
|» email|body|string(email)|true|email of the user, used for login or service communications|
|» displayName|body|string|false|editable name of the user, displayed in its representations|
|» channel|body|object|false|channel base information used to create the first channel of the user|
|» » name|body|[usernameChannel](#schemausernamechannel)|false|immutable name of the channel, used to interact with its actor|
|» » displayName|body|string|false|none|
|» signupClient|body|string|false|**PeerTube >= 9.0** Client used to sign up. If set, links of the verification and registration accepted emails<br>make the web client propose to open this client<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» signupClient|peertube-app|

> Example responses

> 200 Response

```json
{
  "state": {
    "id": 1,
    "label": "string"
  }
}
```

<h3 id="register-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|request error|None|
|403|Forbidden|user registration is not enabled, user limit is reached, registration is not allowed for the ip, requires approval or blocked by a plugin|None|
|409|Conflict|a user with this username, channel name or email already exists|None|

<h3 id="register-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|false|none|none|
|» id|[UserRegistrationState](#schemauserregistrationstate)|false|none|The registration state (Pending = `1`, Rejected = `2`, Accepted = `3`)|
|» label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» id|1|
|» id|2|
|» id|3|

<aside class="success">
This operation does not require authentication
</aside>

## Request registration

<a id="opIdrequestRegistration"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/registrations/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": {},
    "password": "password",
    "email": "user@example.com",
    "displayName": "string",
    "channel": {
      "name": "framasoft_videos",
      "displayName": "string"
    },
    "signupClient": "peertube-app",
    "registrationReason": "string"
  }'
```

`POST /api/v1/users/registrations/request`

Signup has to be enabled and require approval on the instance

> Body parameter

```json
{
  "username": {},
  "password": "password",
  "email": "user@example.com",
  "displayName": "string",
  "channel": {
    "name": "framasoft_videos",
    "displayName": "string"
  },
  "signupClient": "peertube-app",
  "registrationReason": "string"
}
```

<h3 id="request-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRegistrationRequest](#schemauserregistrationrequest)|false|none|
|» username|body|object|true|immutable name of the user, used to find or mention its actor|
|» password|body|[password](#schemapassword)|true|none|
|» email|body|string(email)|true|email of the user, used for login or service communications|
|» displayName|body|string|false|editable name of the user, displayed in its representations|
|» channel|body|object|false|channel base information used to create the first channel of the user|
|» » name|body|[usernameChannel](#schemausernamechannel)|false|immutable name of the channel, used to interact with its actor|
|» » displayName|body|string|false|none|
|» signupClient|body|string|false|**PeerTube >= 9.0** Client used to sign up. If set, links of the verification and registration accepted emails<br>make the web client propose to open this client<br>|
|» registrationReason|body|string|true|reason for the user to register on the instance|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» signupClient|peertube-app|

> Example responses

> 200 Response

```json
{
  "state": {
    "id": 1,
    "label": "string"
  }
}
```

<h3 id="request-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|request error or signup approval is not enabled on the instance|None|
|403|Forbidden|user registration is not enabled, user limit is reached, registration is not allowed for the ip or blocked by a plugin|None|
|409|Conflict|a user or registration with this username, channel name or email already exists|None|

<h3 id="request-registration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|object|false|none|none|
|» id|[UserRegistrationState](#schemauserregistrationstate)|false|none|The registration state (Pending = `1`, Rejected = `2`, Accepted = `3`)|
|» label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» id|1|
|» id|2|
|» id|3|

<aside class="success">
This operation does not require authentication
</aside>

## Accept registration

<a id="opIdacceptRegistration"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/registrations/42/accept \
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
curl https://peertube.example.com/api/v1/users/registrations/42/reject \
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

## Delete registration

<a id="opIddeleteRegistration"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/registrations/42 \
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

## List registrations

<a id="opIdlistRegistrations"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/registrations \
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
|stateOneOf|query|[[UserRegistrationState](#schemauserregistrationstate)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-createdAt|
|sort|createdAt|
|sort|state|
|sort|-state|
|stateOneOf|1|
|stateOneOf|2|
|stateOneOf|3|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 1,
        "label": "string"
      },
      "registrationReason": "string",
      "moderationResponse": "string",
      "username": "string",
      "email": "user@example.com",
      "emailVerified": true,
      "accountDisplayName": "string",
      "channelHandle": "string",
      "channelDisplayName": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "user": {
        "id": 42
      }
    }
  ]
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
|total|integer|false|none|none|
|data|[[UserRegistration](#schemauserregistration)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

<h1 id="peertube-session">Session</h1>

Sessions deal with access tokens over time. Only __one session token can currently be used at a time__.


## Login prerequisite

<a id="opIdgetOAuthClient"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/oauth-clients/local \
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

## Login

<a id="opIdgetOAuthToken"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=v1ikx5hnfop4mdpnci8nsqh93c45rldf&client_secret=AjWiOapPltI6EnsWQwlFarRtLh4u8tDt&grant_type=password&username=chocobozzz&password=password&externalAuthToken=string'
```

`POST /api/v1/users/token`

With your [client id and secret](#operation/getOAuthClient), you can retrieve an access and refresh tokens.

> Body parameter

```yaml
client_id: v1ikx5hnfop4mdpnci8nsqh93c45rldf
client_secret: AjWiOapPltI6EnsWQwlFarRtLh4u8tDt
grant_type: password
username: chocobozzz
password: password
externalAuthToken: string
```

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-peertube-otp|header|string|false|If the user enabled two factor authentication, you need to provide the OTP code in this header|
|body|body|[OAuthToken-password](#schemaoauthtoken-password) \| [OAuthToken-refresh_token](#schemaoauthtoken-refresh_token)|false|none|
|» *oneOf*|body|[OAuthToken-password](#schemaoauthtoken-password)|false|none|
|» *oneOf*|body|[OAuthToken-refresh_token](#schemaoauthtoken-refresh_token)|false|none|

> Example responses

> 200 Response

```json
{
  "token_type": "Bearer",
  "access_token": "90286a0bdf0f7315d9d3fe8dabf9e1d2be9c97d0",
  "refresh_token": "2e0d675df9fc96d2e4ec8a3ebbbf45eca9137bb7",
  "expires_in": 14399,
  "refresh_token_expires_in": 1209600
}
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Disambiguate via `code`:<br>- `invalid_client` for an unmatched `client_id`<br>- `invalid_grant` for unmatched credentials<br>|None|
|401|Unauthorized|Disambiguate via `code`:<br>- default value for a regular authentication failure<br>- `invalid_token` for an expired token<br>- `missing_two_factor` if two factor header is missing<br>|None|

<h3 id="login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token_type|string|false|none|none|
|access_token|string|false|none|valid for 1 day|
|refresh_token|string|false|none|valid for 2 weeks|
|expires_in|integer|false|none|none|
|refresh_token_expires_in|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdrevokeOAuthToken"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/revoke-token \
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

## List token sessions

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/token-sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/{id}/token-sessions`

<h3 id="list-token-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 0,
      "currentSession": true,
      "loginDevice": "string",
      "loginIP": "192.0.2.1",
      "loginDate": "1970-01-01T00:00:00Z",
      "lastActivityDevice": "string",
      "lastActivityIP": "192.0.2.1",
      "lastActivityDate": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-token-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-token-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[TokenSession](#schematokensession)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List token sessions

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/token-sessions/42/revoke \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/{id}/token-sessions/{tokenSessionId}/revoke`

<h3 id="list-token-sessions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|tokenSessionId|path|[id](#schemaid)|true|Token session Id|

<h3 id="list-token-sessions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-accounts">Accounts</h1>

Accounts encompass remote accounts discovered across the federation, and correspond to the main Actor, along with video channels a user can create, which are also Actors.
When a comment is posted, it is done with your Account's Actor.


## Get an account

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org \
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
  "id": 42,
  "url": "http://example.com",
  "name": {},
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "followingCount": 0,
  "followersCount": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userId": {},
  "displayName": "string",
  "description": "string"
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

## List videos of an account

<a id="opIdgetAccountVideos"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}/videos`

<h3 id="list-videos-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|skipCount|query|string|false|if you don't need the `total` in the response|
|sort|query|string|false|none|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|
|isLive|query|boolean|false|whether or not the video is a live|
|includeScheduledLive|query|boolean|false|whether or not include live that are scheduled for later|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|
|host|query|string|false|Find elements owned by this host|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** **Admins and moderators only** filter on videos that contain one of these automatic tags|
|stateOneOf|query|integer \| [integer]|false|**PeerTube >= 8.2** **Admins and moderators only** filter on videos that have one of these states|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|excludeAlreadyWatched|query|boolean|false|Whether or not to exclude videos that are in the user's video history|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-comments|
|sort|-trending|
|sort|-hot|
|sort|-best|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

<h3 id="list-videos-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List followers of an account

<a id="opIdgetAccountFollowers"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/followers \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "follower": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "following": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "score": 0,
      "state": "pending",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[Follow](#schemafollow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List accounts

<a id="opIdgetAccounts"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts \
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
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="list-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[Account](#schemaaccount)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List ratings of an account

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/ratings \
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
    "video": {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    },
    "rating": "like"
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

<h1 id="peertube-users">Users</h1>

Using some features of PeerTube require authentication, for which User provide different levels of permission as well as associated user information. Each user has a corresponding local Account for federation.


## List users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users`

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Plain text search that will match with user usernames or emails|
|blocked|query|boolean|false|Filter results down to (un)banned users|
|role|query|[UserRole](#schemauserrole)|false|Filter results down to users with a specific role|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort users by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|0|
|role|1|
|role|2|
|sort|-id|
|sort|-username|
|sort|-createdAt|

> Example responses

> 200 Response

```json
[
  {
    "id": 42,
    "username": "chocobozzz",
    "email": "user@example.com",
    "emailVerified": true,
    "nsfwPolicy": "display",
    "nsfwFlagsDisplayed": 0,
    "nsfwFlagsHidden": 0,
    "nsfwFlagsWarned": 0,
    "nsfwFlagsBlurred": 0,
    "aiUsagesHidden": [
      1
    ],
    "adminFlags": 1,
    "autoPlayNextVideo": true,
    "autoPlayNextVideoPlaylist": true,
    "autoPlayVideo": true,
    "p2pEnabled": true,
    "videosHistoryEnabled": true,
    "videoLanguages": [
      "string"
    ],
    "videoCategories": [
      0
    ],
    "videoLive": "true",
    "language": "string",
    "videoQuota": -1,
    "videoQuotaDaily": -1,
    "role": {
      "id": 2,
      "label": "User"
    },
    "theme": "string",
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    },
    "notificationSettings": {
      "abuseAsModerator": 0,
      "videoAutoBlacklistAsModerator": 0,
      "newUserRegistration": 0,
      "newVideoFromSubscription": 0,
      "blacklistOnMyVideo": 0,
      "myVideoPublished": 0,
      "myVideoImportFinished": 0,
      "commentMention": 0,
      "newCommentOnMyVideo": 0,
      "newFollow": 0,
      "newInstanceFollower": 0,
      "autoInstanceFollowing": 0,
      "abuseStateChange": 0,
      "abuseNewMessage": 0,
      "newPeerTubeVersion": 0,
      "newPluginVersion": 0,
      "myVideoStudioEditionFinished": 0,
      "myVideoTranscriptionGenerated": 0
    },
    "videoChannels": [
      {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "displayName": "Videos of Framasoft",
        "description": "Videos made with <3 by Framasoft",
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
        "publicEmail": "user@example.com",
        "isLocal": true,
        "banners": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "ownerAccount": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userId": {},
          "displayName": "string",
          "description": "string"
        },
        "videosCount": 0,
        "viewsPerDay": [
          {
            "date": "1970-01-01T00:00:00Z",
            "views": 0
          }
        ],
        "viewsGroupInterval": "day",
        "totalViews": 0
      }
    ],
    "blocked": true,
    "blockedReason": "string",
    "noInstanceConfigWarningModal": true,
    "noAccountSetupWarningModal": true,
    "noWelcomeModal": true,
    "createdAt": "string",
    "pluginAuth": "string",
    "lastLoginDate": "1970-01-01T00:00:00Z",
    "twoFactorEnabled": true,
    "newFeaturesInfoRead": 0
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
curl https://peertube.example.com/api/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "username": "chocobozzz",
    "password": "password",
    "email": "user@example.com",
    "videoQuota": -1,
    "videoQuotaDaily": -1,
    "channelName": "framasoft_videos",
    "role": 2,
    "adminFlags": 1
  }'
```

`POST /api/v1/users`

> Body parameter

```json
{
  "username": "chocobozzz",
  "password": "password",
  "email": "user@example.com",
  "videoQuota": -1,
  "videoQuotaDaily": -1,
  "channelName": "framasoft_videos",
  "role": 2,
  "adminFlags": 1
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddUser](#schemaadduser)|true|If the smtp server is configured, you can leave the password empty and an email will be sent<br>asking the user to set it first.<br>|
|» username|body|[username](#schemausername)|true|immutable name of the user, used to find or mention its actor|
|» password|body|[password](#schemapassword)|true|none|
|» email|body|string(email)|true|The user email|
|» videoQuota|body|integer|false|The user video quota in bytes|
|» videoQuotaDaily|body|integer|false|The user daily video quota in bytes|
|» channelName|body|[usernameChannel](#schemausernamechannel)|false|immutable name of the channel, used to interact with its actor|
|» role|body|[UserRole](#schemauserrole)|true|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|» adminFlags|body|[UserAdminFlags](#schemauseradminflags)|false|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|0|
|» role|1|
|» role|2|
|» adminFlags|0|
|» adminFlags|1|

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 42,
    "account": {
      "id": 42
    }
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

## Get a user

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42 \
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
  "id": 42,
  "username": "chocobozzz",
  "email": "user@example.com",
  "emailVerified": true,
  "nsfwPolicy": "display",
  "nsfwFlagsDisplayed": 0,
  "nsfwFlagsHidden": 0,
  "nsfwFlagsWarned": 0,
  "nsfwFlagsBlurred": 0,
  "aiUsagesHidden": [
    1
  ],
  "adminFlags": 1,
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "p2pEnabled": true,
  "videosHistoryEnabled": true,
  "videoLanguages": [
    "string"
  ],
  "videoCategories": [
    0
  ],
  "videoLive": "true",
  "language": "string",
  "videoQuota": -1,
  "videoQuotaDaily": -1,
  "role": {
    "id": 2,
    "label": "User"
  },
  "theme": "string",
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "notificationSettings": {
    "abuseAsModerator": 0,
    "videoAutoBlacklistAsModerator": 0,
    "newUserRegistration": 0,
    "newVideoFromSubscription": 0,
    "blacklistOnMyVideo": 0,
    "myVideoPublished": 0,
    "myVideoImportFinished": 0,
    "commentMention": 0,
    "newCommentOnMyVideo": 0,
    "newFollow": 0,
    "newInstanceFollower": 0,
    "autoInstanceFollowing": 0,
    "abuseStateChange": 0,
    "abuseNewMessage": 0,
    "newPeerTubeVersion": 0,
    "newPluginVersion": 0,
    "myVideoStudioEditionFinished": 0,
    "myVideoTranscriptionGenerated": 0
  },
  "videoChannels": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ],
  "blocked": true,
  "blockedReason": "string",
  "noInstanceConfigWarningModal": true,
  "noAccountSetupWarningModal": true,
  "noWelcomeModal": true,
  "createdAt": "string",
  "pluginAuth": "string",
  "lastLoginDate": "1970-01-01T00:00:00Z",
  "twoFactorEnabled": true,
  "newFeaturesInfoRead": 0
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
curl https://peertube.example.com/api/v1/users/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": {},
    "emailVerified": true,
    "videoQuota": 0,
    "videoQuotaDaily": 0,
    "pluginAuth": "peertube-plugin-auth-saml2",
    "role": 2,
    "adminFlags": 1,
    "password": "password"
  }'
```

`PUT /api/v1/users/{id}`

> Body parameter

```json
{
  "email": {},
  "emailVerified": true,
  "videoQuota": 0,
  "videoQuotaDaily": 0,
  "pluginAuth": "peertube-plugin-auth-saml2",
  "role": 2,
  "adminFlags": 1,
  "password": "password"
}
```

<h3 id="update-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|[UpdateUser](#schemaupdateuser)|true|none|
|» email|body|object|false|The updated email of the user|
|» emailVerified|body|boolean|false|Set the email as verified|
|» videoQuota|body|integer|false|The updated video quota of the user in bytes|
|» videoQuotaDaily|body|integer|false|The updated daily video quota of the user in bytes|
|» pluginAuth|body|string \| null|false|The auth plugin to use to authenticate the user|
|» role|body|[UserRole](#schemauserrole)|false|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|» adminFlags|body|[UserAdminFlags](#schemauseradminflags)|false|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|» password|body|[password](#schemapassword)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|0|
|» role|1|
|» role|2|
|» adminFlags|0|
|» adminFlags|1|

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
curl https://peertube.example.com/api/v1/users/42 \
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

## Block a user

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string"
  }'
```

`POST /api/v1/users/{id}/block`

Prevent a user from logging in and interacting with the instance

> Body parameter

```json
{
  "reason": "string"
}
```

<h3 id="block-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» reason|body|string|false|Optional reason for blocking the user|

<h3 id="block-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|invalid user id|None|
|403|Forbidden|insufficient permissions to block users|None|
|404|Not Found|user not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Unblock a user

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/unblock \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/users/{id}/unblock`

Allow a previously blocked user to login and interact with the instance

<h3 id="unblock-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|

<h3 id="unblock-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|invalid user id|None|
|403|Forbidden|insufficient permissions to unblock users|None|
|404|Not Found|user not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Resend user verification link

<a id="opIdresendEmailToVerifyUser"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/ask-send-verify-email \
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

## Verify a user

<a id="opIdverifyUser"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/verify-email \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "verificationString": "http://example.com",
    "isPendingEmail": true
  }'
```

`POST /api/v1/users/{id}/verify-email`

Following a user registration, the new user will receive an email asking to click a link
containing a secret.
This endpoint can also be used to verify a new email set in the user account.


> Body parameter

```json
{
  "verificationString": "http://example.com",
  "isPendingEmail": true
}
```

<h3 id="verify-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» verificationString|body|string(url)|true|none|
|» isPendingEmail|body|boolean|false|none|

<h3 id="verify-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid verification string|None|
|404|Not Found|user not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Ask to reset password

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/ask-reset-password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string"
  }'
```

`POST /api/v1/users/ask-reset-password`

An email containing a reset password link

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="ask-to-reset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|User email|

<h3 id="ask-to-reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset password

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/reset-password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "verificationString": "http://example.com",
    "password": "string"
  }'
```

`POST /api/v1/users/{id}/reset-password`

> Body parameter

```json
{
  "verificationString": "http://example.com",
  "password": "string"
}
```

<h3 id="reset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» verificationString|body|string(url)|true|none|
|» password|body|string|true|none|

<h3 id="reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid verification string|None|
|404|Not Found|user not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Request two factor auth

<a id="opIdrequestTwoFactor"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/two-factor/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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
|429|Too Many Requests|too many password checks for this user|None|

<h3 id="request-two-factor-auth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestTwoFactorResponse](#schemarequesttwofactorresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Confirm two factor auth

<a id="opIdconfirmTwoFactorRequest"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/two-factor/confirm-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestToken": "string",
    "otpToken": "string"
  }'
```

`POST /api/v1/users/{id}/two-factor/confirm-request`

Confirm a two factor authentication request

> Body parameter

```json
{
  "requestToken": "string",
  "otpToken": "string"
}
```

<h3 id="confirm-two-factor-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|
|body|body|object|false|none|
|» requestToken|body|string|true|Token to identify the two factor request|
|» otpToken|body|string|true|OTP token generated by the app|

<h3 id="confirm-two-factor-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid request token or OTP token|None|
|404|Not Found|user not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Disable two factor auth

<a id="opIddisableTwoFactor"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/two-factor/disable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
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
|» currentPassword|body|string|false|Password of the currently authenticated user. Users of an id and pass auth plugin must use the password they log in with|

<h3 id="disable-two-factor-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|invalid password|None|
|404|Not Found|user not found|None|
|429|Too Many Requests|too many password checks for this user|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-user-exports">User Exports</h1>

To create an archive of user data.


## Request user export

<a id="opIdrequestUserExport"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/exports/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "withVideoFiles": true
  }'
```

`POST /api/v1/users/{userId}/exports/request`

Request an archive of user data. An email is sent when the archive is ready.

> Body parameter

```json
{
  "withVideoFiles": true
}
```

<h3 id="request-user-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|
|body|body|object|false|none|
|» withVideoFiles|body|boolean|false|Whether to include video files in the archive|

> Example responses

> 200 Response

```json
{
  "export": {
    "id": 0
  }
}
```

<h3 id="request-user-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="request-user-export-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|export|object|false|none|none|
|» id|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List user exports

<a id="opIdlistUserExports"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/exports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/{userId}/exports`

**PeerTube >= 6.1**

<h3 id="list-user-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "state": {
    "id": 1,
    "label": "string"
  },
  "size": 0,
  "privateDownloadUrl": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresOn": "1970-01-01T00:00:00Z"
}
```

<h3 id="list-user-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-user-exports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|state|object|false|none|none|
|» id|[UserExportState](#schemauserexportstate)|false|none|The user export state:<br>  - `1`: Pending<br>  - `2`: Processing<br>  - `3`: Completed<br>  - `4`: Errored<br>|
|» label|string|false|none|none|
|size|integer|false|none|Size of the archive file in bytes|
|privateDownloadUrl|string|false|none|This URL already contains the JWT token, so no additional authentication credentials are required|
|createdAt|string(date-time)|false|none|none|
|expiresOn|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» id|1|
|» id|2|
|» id|3|
|» id|4|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a user export

<a id="opIddeleteUserExport"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/exports/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/{userId}/exports/{id}`

**PeerTube >= 6.1**

<h3 id="delete-a-user-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|
|id|path|[id](#schemaid)|true|Entity id|

<h3 id="delete-a-user-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-user-imports">User Imports</h1>

To import an archive of user data.


## Send chunk for the resumable user import

<a id="opIduserImportResumable"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/users/42/imports/import-resumable?upload_id=string' \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Range: bytes 0-262143/2469036' \
  -H 'Content-Length: 262144' \
  --data-binary '@/path/to/file'
```

`PUT /api/v1/users/{userId}/imports/import-resumable`

**PeerTube >= 6.1** Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to continue, pause or resume the import of the archive

<h3 id="send-chunk-for-the-resumable-user-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last hour, it is<br>not valid anymore and you need to initialize a new upload.<br>|
|Content-Range|header|string|true|Specifies the bytes in the file that the request is uploading.<br><br>For example, a value of `bytes 0-262143/1000000` shows that the request is sending the first<br>262144 bytes (256 x 1024) in a 2,469,036 byte file.<br><br>When the server config `client.videos.resumableUpload.minChunkSize` (video uploads) or<br>`import.users.resumableUpload.minChunkSize` (user archive imports) is not `0`,<br>every chunk except the last one must be at least that big. It must also be at least 1/10,000 of the file size<br>(the maximum number of object storage multipart upload parts).<br>|
|Content-Length|header|number|true|Size of the chunk that the request is sending.<br><br>Remember that larger chunks are more efficient. PeerTube's web client uses chunks varying from<br>1048576 bytes (~1MB) and increases or reduces size depending on connection health.<br>|
|body|body|string(binary)|false|none|

<h3 id="send-chunk-for-the-resumable-user-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|last chunk received: successful operation|None|
|308|Permanent Redirect|resume incomplete|None|
|400|Bad Request|chunk is smaller than `import.users.resumableUpload.minChunkSize` of the server config or 1/10,000 of the file size (and is not the last one)|None|
|503|Service Unavailable|upload is already being processed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|308|Range|string||none|
|308|Content-Length|number||none|
|503|Retry-After|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Initialize the resumable user import

<a id="opIduserImportResumableInit"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/imports/import-resumable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-Upload-Content-Length: 2469036' \
  -H 'X-Upload-Content-Type: video/mp4' \
  -d '{
    "filename": "user-export-6-2024-02-09T10_12_11.682Z"
  }'
```

`POST /api/v1/users/{userId}/imports/import-resumable`

**PeerTube >= 6.1** Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the import of the archive

> Body parameter

```json
{
  "filename": "user-export-6-2024-02-09T10_12_11.682Z"
}
```

<h3 id="initialize-the-resumable-user-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|
|X-Upload-Content-Length|header|number|true|Number of bytes that will be uploaded in subsequent requests. Set this value to the size of the file you are uploading.|
|X-Upload-Content-Type|header|string(mimetype)|true|MIME type of the file that you are uploading. Depending on your instance settings, acceptable values might vary.|
|body|body|[UserImportResumable](#schemauserimportresumable)|false|none|
|» filename|body|string(filename)|false|Archive filename including extension|

<h3 id="initialize-the-resumable-user-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|created|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|none|
|201|Content-Length|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Cancel the resumable user import

<a id="opIduserImportResumableCancel"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/users/42/imports/import-resumable?upload_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Length: 0'
```

`DELETE /api/v1/users/{userId}/imports/import-resumable`

**PeerTube >= 6.1** Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the resumable user import

<h3 id="cancel-the-resumable-user-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last hour, it is<br>not valid anymore and you need to initialize a new upload.<br>|
|Content-Length|header|number|true|none|

<h3 id="cancel-the-resumable-user-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|import cancelled|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Content-Length|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get latest user import

<a id="opIdgetLatestUserImport"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/42/imports/latest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/{userId}/imports/latest`

**PeerTube >= 6.1**

<h3 id="get-latest-user-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|[id](#schemaid)|true|User id|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "state": {
    "id": 1,
    "label": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-latest-user-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="get-latest-user-import-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|state|object|false|none|none|
|» id|[UserImportState](#schemauserimportstate)|false|none|The user import state:<br>  - `1`: Pending<br>  - `2`: Processing<br>  - `3`: Completed<br>  - `4`: Errored<br>|
|» label|string|false|none|none|
|createdAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» id|1|
|» id|2|
|» id|3|
|» id|4|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-my-user">My User</h1>

Operations related to your own User, when logged-in.


## Get my user information

<a id="opIdgetUserInfo"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me`

> Example responses

> 200 Response

```json
[
  {
    "id": 42,
    "username": "chocobozzz",
    "email": "user@example.com",
    "emailVerified": true,
    "nsfwPolicy": "display",
    "nsfwFlagsDisplayed": 0,
    "nsfwFlagsHidden": 0,
    "nsfwFlagsWarned": 0,
    "nsfwFlagsBlurred": 0,
    "aiUsagesHidden": [
      1
    ],
    "adminFlags": 1,
    "autoPlayNextVideo": true,
    "autoPlayNextVideoPlaylist": true,
    "autoPlayVideo": true,
    "p2pEnabled": true,
    "videosHistoryEnabled": true,
    "videoLanguages": [
      "string"
    ],
    "videoCategories": [
      0
    ],
    "videoLive": "true",
    "language": "string",
    "videoQuota": -1,
    "videoQuotaDaily": -1,
    "role": {
      "id": 2,
      "label": "User"
    },
    "theme": "string",
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    },
    "notificationSettings": {
      "abuseAsModerator": 0,
      "videoAutoBlacklistAsModerator": 0,
      "newUserRegistration": 0,
      "newVideoFromSubscription": 0,
      "blacklistOnMyVideo": 0,
      "myVideoPublished": 0,
      "myVideoImportFinished": 0,
      "commentMention": 0,
      "newCommentOnMyVideo": 0,
      "newFollow": 0,
      "newInstanceFollower": 0,
      "autoInstanceFollowing": 0,
      "abuseStateChange": 0,
      "abuseNewMessage": 0,
      "newPeerTubeVersion": 0,
      "newPluginVersion": 0,
      "myVideoStudioEditionFinished": 0,
      "myVideoTranscriptionGenerated": 0
    },
    "videoChannels": [
      {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "displayName": "Videos of Framasoft",
        "description": "Videos made with <3 by Framasoft",
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
        "publicEmail": "user@example.com",
        "isLocal": true,
        "banners": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "ownerAccount": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userId": {},
          "displayName": "string",
          "description": "string"
        },
        "videosCount": 0,
        "viewsPerDay": [
          {
            "date": "1970-01-01T00:00:00Z",
            "views": 0
          }
        ],
        "viewsGroupInterval": "day",
        "totalViews": 0
      }
    ],
    "blocked": true,
    "blockedReason": "string",
    "noInstanceConfigWarningModal": true,
    "noAccountSetupWarningModal": true,
    "noWelcomeModal": true,
    "createdAt": "string",
    "pluginAuth": "string",
    "lastLoginDate": "1970-01-01T00:00:00Z",
    "twoFactorEnabled": true,
    "newFeaturesInfoRead": 0
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
curl https://peertube.example.com/api/v1/users/me \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "password",
    "currentPassword": "password",
    "email": {},
    "displayName": "string",
    "nsfwPolicy": "true",
    "nsfwFlagsDisplayed": 0,
    "nsfwFlagsHidden": 0,
    "nsfwFlagsWarned": 0,
    "nsfwFlagsBlurred": 0,
    "aiUsagesHidden": [
      1
    ],
    "p2pEnabled": true,
    "autoPlayVideo": true,
    "autoPlayNextVideo": true,
    "autoPlayNextVideoPlaylist": true,
    "videosHistoryEnabled": true,
    "videoLanguages": [
      "string"
    ],
    "videoCategories": [
      0
    ],
    "videoLive": "true",
    "language": "string",
    "theme": "string",
    "noInstanceConfigWarningModal": true,
    "noAccountSetupWarningModal": true,
    "noWelcomeModal": true
  }'
```

`PUT /api/v1/users/me`

> Body parameter

```json
{
  "password": "password",
  "currentPassword": "password",
  "email": {},
  "displayName": "string",
  "nsfwPolicy": "true",
  "nsfwFlagsDisplayed": 0,
  "nsfwFlagsHidden": 0,
  "nsfwFlagsWarned": 0,
  "nsfwFlagsBlurred": 0,
  "aiUsagesHidden": [
    1
  ],
  "p2pEnabled": true,
  "autoPlayVideo": true,
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "videosHistoryEnabled": true,
  "videoLanguages": [
    "string"
  ],
  "videoCategories": [
    0
  ],
  "videoLive": "true",
  "language": "string",
  "theme": "string",
  "noInstanceConfigWarningModal": true,
  "noAccountSetupWarningModal": true,
  "noWelcomeModal": true
}
```

<h3 id="update-my-user-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateMe](#schemaupdateme)|true|none|
|» password|body|[password](#schemapassword)|false|none|
|» currentPassword|body|[password](#schemapassword)|false|none|
|» email|body|object|false|new email used for login and service communications|
|» displayName|body|string|false|new name of the user in its representations|
|» nsfwPolicy|body|string|false|new NSFW display policy|
|» nsfwFlagsDisplayed|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» nsfwFlagsHidden|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» nsfwFlagsWarned|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» nsfwFlagsBlurred|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» aiUsagesHidden|body|[[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Videos with these AI usages are hidden from video lists|
|» p2pEnabled|body|boolean|false|whether to enable P2P in the player or not|
|» autoPlayVideo|body|boolean|false|new preference regarding playing videos automatically|
|» autoPlayNextVideo|body|boolean|false|new preference regarding playing following videos automatically|
|» autoPlayNextVideoPlaylist|body|boolean|false|new preference regarding playing following playlist videos automatically|
|» videosHistoryEnabled|body|boolean|false|whether to keep track of watched history or not|
|» videoLanguages|body|[string]|false|list of languages to filter videos down to|
|» videoCategories|body|[integer]|false|list of categories to filter videos down to (`null` means all categories)|
|» videoLive|body|string|false|filter videos down to lives (`true`), VODs (`false`) or display both|
|» language|body|string|false|default language for this user|
|» theme|body|string|false|none|
|» noInstanceConfigWarningModal|body|boolean|false|none|
|» noAccountSetupWarningModal|body|boolean|false|none|
|» noWelcomeModal|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» nsfwPolicy|true|
|» nsfwPolicy|false|
|» nsfwPolicy|both|
|» nsfwFlagsDisplayed|0|
|» nsfwFlagsDisplayed|1|
|» nsfwFlagsDisplayed|2|
|» nsfwFlagsDisplayed|4|
|» nsfwFlagsHidden|0|
|» nsfwFlagsHidden|1|
|» nsfwFlagsHidden|2|
|» nsfwFlagsHidden|4|
|» nsfwFlagsWarned|0|
|» nsfwFlagsWarned|1|
|» nsfwFlagsWarned|2|
|» nsfwFlagsWarned|4|
|» nsfwFlagsBlurred|0|
|» nsfwFlagsBlurred|1|
|» nsfwFlagsBlurred|2|
|» nsfwFlagsBlurred|4|
|» aiUsagesHidden|1|
|» aiUsagesHidden|2|
|» aiUsagesHidden|3|
|» aiUsagesHidden|4|
|» videoLive|true|
|» videoLive|false|
|» videoLive|both|

<h3 id="update-my-user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Delete my account

<a id="opIddeleteMe"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me`

Delete the authenticated user's account and all associated data

<h3 id="delete-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation - account deleted|None|
|400|Bad Request|invalid request parameters|None|
|401|Unauthorized|authentication required|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Get my user used quota

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/video-quota-used \
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

## Get rate of my user for a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/videos/42/rating \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/videos/{videoIdOrUUID}/rating`

<h3 id="get-rate-of-my-user-for-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|

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

## List videos of my user

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/videos`

<h3 id="list-videos-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelNameOneOf|query|string \| [string]|false|**PeerTube >= 7.2** Filter on videos that are published by a channel with one of these names|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|skipCount|query|string|false|if you don't need the `total` in the response|
|sort|query|string|false|none|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|
|isLive|query|boolean|false|whether or not the video is a live|
|includeScheduledLive|query|boolean|false|whether or not include live that are scheduled for later|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|
|host|query|string|false|Find elements owned by this host|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** **Admins and moderators only** filter on videos that contain one of these automatic tags|
|stateOneOf|query|integer \| [integer]|false|**PeerTube >= 8.2** **Admins and moderators only** filter on videos that have one of these states|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|excludeAlreadyWatched|query|boolean|false|Whether or not to exclude videos that are in the user's video history|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|
|includeCollaborations|query|boolean|false|**PeerTube >= 8.0** Include objects from collaborated channels|

#### Enumerated Values

|Parameter|Value|
|---|---|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-comments|
|sort|-trending|
|sort|-hot|
|sort|-best|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

<h3 id="list-videos-of-my-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Mark feature info as read

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/new-feature-info/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "feature": 1
  }'
```

`POST /api/v1/users/me/new-feature-info/read`

**PeerTube >= v8.0.0

> Body parameter

```json
{
  "feature": 1
}
```

<h3 id="mark-feature-info-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» feature|body|[NewFeatureInfoType](#schemanewfeatureinfotype)|true|Represent a new feature that can be displayed to inform users. One of the following values:<br><br>  - `1` CHANNEL_COLLABORATION<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» feature|1|

<h3 id="mark-feature-info-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Update my user avatar

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/avatar/pick \
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
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
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

## Delete my avatar

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/avatar \
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

<h1 id="peertube-my-subscriptions">My Subscriptions</h1>

Operations related to your subscriptions to video channels, their new videos, and how to keep up to date with their latest publications!


## List my user subscriptions

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/subscriptions`

<h3 id="list-my-user-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-id|
|sort|-createdAt|
|sort|-channelUpdatedAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ]
}
```

<h3 id="list-my-user-subscriptions-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/users/me/subscriptions \
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
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Get if subscriptions exist for my user

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/users/me/subscriptions/exist?uris=http%3A%2F%2Fexample.com' \
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
curl https://peertube.example.com/api/v1/users/me/subscriptions/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/subscriptions/videos`

<h3 id="list-videos-of-subscriptions-of-my-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|skipCount|query|string|false|if you don't need the `total` in the response|
|sort|query|string|false|none|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|
|isLive|query|boolean|false|whether or not the video is a live|
|includeScheduledLive|query|boolean|false|whether or not include live that are scheduled for later|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|
|host|query|string|false|Find elements owned by this host|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** **Admins and moderators only** filter on videos that contain one of these automatic tags|
|stateOneOf|query|integer \| [integer]|false|**PeerTube >= 8.2** **Admins and moderators only** filter on videos that have one of these states|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|excludeAlreadyWatched|query|boolean|false|Whether or not to exclude videos that are in the user's video history|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-comments|
|sort|-trending|
|sort|-hot|
|sort|-best|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
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
curl https://peertube.example.com/api/v1/users/me/subscriptions/my_username%20%7C%20my_username%40example.com \
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
  "id": 42,
  "url": "http://example.com",
  "name": {},
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "followingCount": 0,
  "followersCount": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "displayName": "Videos of Framasoft",
  "description": "Videos made with <3 by Framasoft",
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "publicEmail": "user@example.com",
  "isLocal": true,
  "banners": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "ownerAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "videosCount": 0,
  "viewsPerDay": [
    {
      "date": "1970-01-01T00:00:00Z",
      "views": 0
    }
  ],
  "viewsGroupInterval": "day",
  "totalViews": 0
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
curl https://peertube.example.com/api/v1/users/me/subscriptions/my_username%20%7C%20my_username%40example.com \
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
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-my-history">My History</h1>

Operations related to your watch history.


## List watched videos history

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/history/videos \
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
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
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

## Delete history element

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/history/videos/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me/history/videos/{videoIdOrUUID}`

<h3 id="delete-history-element-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|

<h3 id="delete-history-element-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Clear video history

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/history/videos/remove \
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

<h1 id="peertube-my-notifications">My Notifications</h1>

Notifications following new videos, follows or reports. They allow you to keep track of the interactions and overall important information that concerns you. You MAY set per-notification type delivery preference, to receive the info either by mail, by in-browser notification or both.


## List my notifications

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/notifications`

<h3 id="list-my-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typeOneOf|query|[[NotificationType](#schemanotificationtype)]|false|only list notifications of these types|
|unread|query|boolean|false|only list unread notifications|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

#### Enumerated Values

|Parameter|Value|
|---|---|
|typeOneOf|1|
|typeOneOf|2|
|typeOneOf|3|
|typeOneOf|4|
|typeOneOf|5|
|typeOneOf|6|
|typeOneOf|7|
|typeOneOf|8|
|typeOneOf|9|
|typeOneOf|10|
|typeOneOf|11|
|typeOneOf|12|
|typeOneOf|13|
|typeOneOf|14|
|typeOneOf|15|
|typeOneOf|16|
|typeOneOf|17|
|typeOneOf|18|
|typeOneOf|19|
|typeOneOf|20|
|typeOneOf|21|
|typeOneOf|22|
|typeOneOf|23|
|typeOneOf|24|
|typeOneOf|25|
|typeOneOf|26|
|typeOneOf|27|
|typeOneOf|28|
|typeOneOf|29|
|typeOneOf|30|
|typeOneOf|31|
|typeOneOf|32|
|typeOneOf|33|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "type": 1,
      "read": true,
      "video": {
        "id": {},
        "uuid": {},
        "name": "What is PeerTube?",
        "state": {
          "id": 1,
          "label": "string"
        },
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "videoImport": {
        "id": 42,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        },
        "torrentName": "string",
        "magnetUri": "http://example.com",
        "targetUri": "http://example.com"
      },
      "comment": {
        "id": 42,
        "threadId": 0,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        },
        "account": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "heldForReview": true
      },
      "videoAbuse": {
        "id": 42,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        }
      },
      "videoBlacklist": {
        "id": 42,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        }
      },
      "account": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "actorFollow": {
        "id": 42,
        "follower": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "state": "pending",
        "following": {
          "type": "account",
          "name": "string",
          "displayName": "string",
          "host": "example.com"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
curl https://peertube.example.com/api/v1/users/me/notifications/read \
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
curl https://peertube.example.com/api/v1/users/me/notifications/read-all \
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

## Update my notification settings

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/notification-settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "abuseAsModerator": 0,
    "videoAutoBlacklistAsModerator": 0,
    "newUserRegistration": 0,
    "newVideoFromSubscription": 0,
    "blacklistOnMyVideo": 0,
    "myVideoPublished": 0,
    "myVideoImportFinished": 0,
    "commentMention": 0,
    "newCommentOnMyVideo": 0,
    "newFollow": 0,
    "newInstanceFollower": 0,
    "autoInstanceFollowing": 0,
    "abuseStateChange": 0,
    "abuseNewMessage": 0,
    "newPeerTubeVersion": 0,
    "newPluginVersion": 0,
    "myVideoStudioEditionFinished": 0,
    "myVideoTranscriptionGenerated": 0
  }'
```

`PUT /api/v1/users/me/notification-settings`

> Body parameter

```json
{
  "abuseAsModerator": 0,
  "videoAutoBlacklistAsModerator": 0,
  "newUserRegistration": 0,
  "newVideoFromSubscription": 0,
  "blacklistOnMyVideo": 0,
  "myVideoPublished": 0,
  "myVideoImportFinished": 0,
  "commentMention": 0,
  "newCommentOnMyVideo": 0,
  "newFollow": 0,
  "newInstanceFollower": 0,
  "autoInstanceFollowing": 0,
  "abuseStateChange": 0,
  "abuseNewMessage": 0,
  "newPeerTubeVersion": 0,
  "newPluginVersion": 0,
  "myVideoStudioEditionFinished": 0,
  "myVideoTranscriptionGenerated": 0
}
```

<h3 id="update-my-notification-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserNotificationSettings](#schemausernotificationsettings)|false|none|
|» abuseAsModerator|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» videoAutoBlacklistAsModerator|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newUserRegistration|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newVideoFromSubscription|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» blacklistOnMyVideo|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» myVideoPublished|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» myVideoImportFinished|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» commentMention|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newCommentOnMyVideo|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newFollow|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newInstanceFollower|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» autoInstanceFollowing|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» abuseStateChange|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» abuseNewMessage|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newPeerTubeVersion|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» newPluginVersion|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» myVideoStudioEditionFinished|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|» myVideoTranscriptionGenerated|body|[NotificationSettingValue](#schemanotificationsettingvalue)|false|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|

<h3 id="update-my-notification-settings-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/config \
  -H 'Accept: application/json'
```

`GET /api/v1/config`

> Example responses

> 200 Response

```json
{
  "instance": {
    "name": "string",
    "shortDescription": "string",
    "defaultClientRoute": "string",
    "isNSFW": true,
    "defaultNSFWPolicy": "string",
    "serverCountry": "string",
    "defaultLanguage": "string",
    "support": {
      "text": "string"
    },
    "social": {
      "externalLink": "string",
      "mastodonLink": "string",
      "blueskyLink": "string",
      "xLink": "string"
    },
    "customizations": {
      "javascript": "string",
      "css": "string"
    },
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "search": {
    "remoteUri": {
      "users": true,
      "anonymous": true
    }
  },
  "plugin": {
    "registered": [
      "string"
    ]
  },
  "theme": {
    "registered": [
      "string"
    ]
  },
  "email": {
    "enabled": true
  },
  "contactForm": {
    "enabled": true
  },
  "serverVersion": "string",
  "serverCommit": "string",
  "signup": {
    "allowed": true,
    "allowedForCurrentIP": true,
    "requiresEmailVerification": true
  },
  "transcoding": {
    "hls": {
      "enabled": true
    },
    "web_videos": {
      "enabled": true
    },
    "enabledResolutions": [
      240
    ]
  },
  "import": {
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    },
    "videoChannelSynchronization": {
      "enabled": true
    },
    "users": {
      "enabled": true,
      "resumableUpload": {
        "minChunkSize": 0
      }
    }
  },
  "export": {
    "users": {
      "enabled": true,
      "exportExpiration": 0,
      "maxUserVideoQuota": 0
    }
  },
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "blocklist": {
    "publicLog": {
      "enabled": true
    }
  },
  "avatar": {
    "file": {
      "size": {
        "max": 0
      }
    },
    "extensions": [
      "string"
    ]
  },
  "video": {
    "image": {
      "extensions": [
        "string"
      ],
      "size": {
        "max": 0
      }
    },
    "file": {
      "extensions": [
        "string"
      ]
    }
  },
  "videoCaption": {
    "file": {
      "size": {
        "max": 0
      },
      "extensions": [
        "string"
      ]
    }
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  },
  "trending": {
    "videos": {
      "intervalDays": 0
    }
  },
  "tracker": {
    "enabled": true
  },
  "followings": {
    "instance": {
      "autoFollowIndex": {
        "indexUrl": "http://example.com"
      }
    }
  },
  "federation": {
    "enabled": true
  },
  "homepage": {
    "enabled": true
  },
  "openTelemetry": {
    "metrics": {
      "enabled": true,
      "playbackStatsInterval": 0
    }
  },
  "views": {
    "videos": {
      "countViewAfter": 0,
      "watchingInterval": {
        "anonymous": 0,
        "users": 0
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
curl https://peertube.example.com/api/v1/config/about \
  -H 'Accept: application/json'
```

`GET /api/v1/config/about`

Translatable information is returned in the language of the request, using the `x-peertube-language` header
or the `Accept-Language` header. If the instance has no translation for this language, the default information is returned.


<h3 id="get-instance-about-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-peertube-language|header|string|false|Locale of the web interface (`fr-FR`, `pt-BR`...) used to translate the instance information|

> Example responses

> 200 Response

```json
{
  "instance": {
    "name": "string",
    "shortDescription": "string",
    "description": "string",
    "terms": "string",
    "codeOfConduct": "string",
    "hardwareInformation": "string",
    "creationReason": "string",
    "moderationInformation": "string",
    "administrator": "string",
    "maintenanceLifetime": "string",
    "businessModel": "string",
    "support": {
      "text": "string"
    },
    "languages": [
      "string"
    ],
    "categories": [
      0
    ],
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
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
curl https://peertube.example.com/api/v1/config/custom \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/config/custom`

> Example responses

> 200 Response

```json
{
  "instance": {
    "name": "string",
    "shortDescription": "string",
    "description": "string",
    "terms": "string",
    "codeOfConduct": "string",
    "creationReason": "string",
    "moderationInformation": "string",
    "administrator": "string",
    "maintenanceLifetime": "string",
    "businessModel": "string",
    "hardwareInformation": "string",
    "translations": [
      {
        "language": "fr-FR",
        "shortDescription": "string",
        "description": "string",
        "terms": "string",
        "codeOfConduct": "string",
        "moderationInformation": "string",
        "administrator": "string",
        "creationReason": "string",
        "maintenanceLifetime": "string",
        "businessModel": "string",
        "hardwareInformation": "string",
        "supportText": "string"
      }
    ],
    "languages": [
      "string"
    ],
    "categories": [
      0
    ],
    "isNSFW": true,
    "defaultNSFWPolicy": "string",
    "serverCountry": "string",
    "support": {
      "text": "string"
    },
    "social": {
      "externalLink": "string",
      "mastodonLink": "string",
      "blueskyLink": "string",
      "xLink": "string"
    },
    "defaultClientRoute": "string",
    "customizations": {
      "javascript": "string",
      "css": "string"
    }
  },
  "theme": {
    "default": "string"
  },
  "services": {
    "twitter": {
      "username": "string"
    }
  },
  "cache": {
    "previews": {
      "size": 0
    },
    "captions": {
      "size": 0
    }
  },
  "signup": {
    "enabled": true,
    "limit": 0,
    "requiresEmailVerification": true
  },
  "admin": {
    "email": "user@example.com"
  },
  "contactForm": {
    "enabled": true
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  },
  "transcoding": {
    "enabled": true,
    "originalFile": {
      "keep": true
    },
    "allowAdditionalExtensions": true,
    "allowAudioFiles": true,
    "threads": 0,
    "concurrency": 0,
    "profile": "default",
    "resolutions": {
      "0p": true,
      "144p": true,
      "240p": true,
      "360p": true,
      "480p": true,
      "720p": true,
      "1080p": true,
      "1440p": true,
      "2160p": true
    },
    "web_videos": {
      "enabled": true
    },
    "hls": {
      "enabled": true,
      "splitAudioAndVideo": true
    }
  },
  "import": {
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    },
    "video_channel_synchronization": {
      "enabled": true
    }
  },
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "blocklist": {
    "publicLog": {
      "enabled": true
    }
  },
  "followers": {
    "instance": {
      "enabled": true,
      "manualApproval": true
    }
  },
  "storyboard": {
    "enabled": true
  },
  "defaults": {
    "publish": {
      "downloadEnabled": true,
      "commentsPolicy": 1,
      "recommendationScope": 1,
      "privacy": 1,
      "licence": 2
    },
    "p2p": {
      "webapp": {
        "enabled": true
      },
      "embed": {
        "enabled": true
      }
    },
    "player": {
      "autoPlay": true
    }
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
curl https://peertube.example.com/api/v1/config/custom \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v1/config/custom`

<h3 id="set-instance-runtime-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|Arises when:<br>  - the emailer is disabled and the instance is open to registrations<br>  - web videos and hls are disabled with transcoding enabled - you need at least one enabled<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete instance runtime configuration

<a id="opIddelCustomConfig"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/custom \
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

## Update instance banner

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/instance-banner/pick \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'bannerfile=@/path/to/file'
```

`POST /api/v1/config/instance-banner/pick`

> Body parameter

```yaml
bannerfile: string
```

<h3 id="update-instance-banner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» bannerfile|body|string(binary)|false|The file to upload.|

<h3 id="update-instance-banner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|413|Payload Too Large|image file too large|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the banner|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete instance banner

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/instance-banner \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/config/instance-banner`

<h3 id="delete-instance-banner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Update instance avatar

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/instance-avatar/pick \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'avatarfile=@/path/to/file'
```

`POST /api/v1/config/instance-avatar/pick`

> Body parameter

```yaml
avatarfile: string
```

<h3 id="update-instance-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» avatarfile|body|string(binary)|false|The file to upload.|

<h3 id="update-instance-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|413|Payload Too Large|image file too large|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the avatar|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete instance avatar

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/instance-avatar \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/config/instance-avatar`

<h3 id="delete-instance-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Update instance logo

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/instance-logo/favicon/pick \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'logofile=@/path/to/file'
```

`POST /api/v1/config/instance-logo/{logoType}/pick`

> Body parameter

```yaml
logofile: string
```

<h3 id="update-instance-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logoType|path|string|true|none|
|body|body|object|false|none|
|» logofile|body|string(binary)|false|The file to upload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logoType|favicon|
|logoType|header-wide|
|logoType|header-square|
|logoType|opengraph|

<h3 id="update-instance-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|413|Payload Too Large|image file too large|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|413|X-File-Maximum-Size|string|Nginx size|Maximum file size for the banner|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete instance logo

> Code samples

```bash
curl https://peertube.example.com/api/v1/config/instance-logo/favicon \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/config/instance-logo/{logoType}`

<h3 id="delete-instance-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logoType|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logoType|favicon|
|logoType|header-wide|
|logoType|header-square|
|logoType|opengraph|

<h3 id="delete-instance-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-job">Job</h1>

Jobs are long-running tasks enqueued and processed by the instance itself. No additional worker registration is currently available.


## Pause job queue

> Code samples

```bash
curl https://peertube.example.com/api/v1/jobs/pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "processRoles": [
      "primary"
    ]
  }'
```

`POST /api/v1/jobs/pause`

> Body parameter

```json
{
  "processRoles": [
    "primary"
  ]
}
```

<h3 id="pause-job-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» processRoles|body|[string]|false|Roles of the PeerTube processes that must pause their job queue. Defaults to all the roles. Other processes are notified asynchronously.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» processRoles|primary|
|» processRoles|secondary|

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
curl https://peertube.example.com/api/v1/jobs/resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "processRoles": [
      "primary"
    ]
  }'
```

`POST /api/v1/jobs/resume`

> Body parameter

```json
{
  "processRoles": [
    "primary"
  ]
}
```

<h3 id="resume-job-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» processRoles|body|[string]|false|Roles of the PeerTube processes that must resume their job queue. Defaults to all the roles. Other processes are notified asynchronously.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» processRoles|primary|
|» processRoles|secondary|

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
curl 'https://peertube.example.com/api/v1/jobs/{state}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/jobs/{state}`

<h3 id="list-instance-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|path|string|true|The state of the job ('' for for no filter)|
|jobType|query|[JobType](#schemajobtype)|false|job type|
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
|jobType|activitypub-cleaner|
|jobType|activitypub-follow|
|jobType|activitypub-http-broadcast|
|jobType|activitypub-http-broadcast-parallel|
|jobType|activitypub-http-fetcher|
|jobType|activitypub-http-unicast|
|jobType|activitypub-refresher|
|jobType|actor-keys|
|jobType|after-video-channel-import|
|jobType|build-automatic-tags|
|jobType|build-object-automatic-tags|
|jobType|create-user-export|
|jobType|email|
|jobType|federate-video|
|jobType|generate-video-storyboard|
|jobType|import-user-archive|
|jobType|manage-video-torrent|
|jobType|move-to-file-system|
|jobType|move-to-object-storage|
|jobType|notify|
|jobType|transcoding-job-builder|
|jobType|video-channel-import|
|jobType|video-file-import|
|jobType|video-files-lifecycle|
|jobType|video-import|
|jobType|video-live-ending|
|jobType|video-redundancy|
|jobType|video-studio-edition|
|jobType|video-transcoding|
|jobType|video-transcription|
|jobType|videos-stats|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": "active",
      "type": "activitypub-cleaner",
      "data": {},
      "error": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "finishedOn": "1970-01-01T00:00:00Z",
      "processedOn": "1970-01-01T00:00:00Z",
      "canCancel": true
    }
  ]
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
|total|integer|false|none|none|
|data|[[Job](#schemajob)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Cancel a job

<a id="opIdcancelJob"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/jobs/activitypub-cleaner/string/cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/jobs/{jobType}/{jobId}/cancel`

Abort a running job and its underlying ffmpeg/child process. Only active jobs that support cancellation can be cancelled.

<h3 id="cancel-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobType|path|[JobType](#schemajobtype)|true|The type of the job to cancel|
|jobId|path|string|true|The id of the job to cancel|

#### Enumerated Values

|Parameter|Value|
|---|---|
|jobType|activitypub-cleaner|
|jobType|activitypub-follow|
|jobType|activitypub-http-broadcast|
|jobType|activitypub-http-broadcast-parallel|
|jobType|activitypub-http-fetcher|
|jobType|activitypub-http-unicast|
|jobType|activitypub-refresher|
|jobType|actor-keys|
|jobType|after-video-channel-import|
|jobType|build-automatic-tags|
|jobType|build-object-automatic-tags|
|jobType|create-user-export|
|jobType|email|
|jobType|federate-video|
|jobType|generate-video-storyboard|
|jobType|import-user-archive|
|jobType|manage-video-torrent|
|jobType|move-to-file-system|
|jobType|move-to-object-storage|
|jobType|notify|
|jobType|transcoding-job-builder|
|jobType|video-channel-import|
|jobType|video-file-import|
|jobType|video-files-lifecycle|
|jobType|video-import|
|jobType|video-live-ending|
|jobType|video-redundancy|
|jobType|video-studio-edition|
|jobType|video-transcoding|
|jobType|video-transcription|
|jobType|videos-stats|

<h3 id="cancel-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|job not found|None|
|409|Conflict|job cannot be cancelled (not active or not cancellable)|None|

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
curl https://peertube.example.com/api/v1/server/followers \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "follower": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "following": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "score": 0,
      "state": "pending",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[Follow](#schemafollow)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove or reject a follower to your server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/followers/user%40example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/followers/{handle}`

<h3 id="remove-or-reject-a-follower-to-your-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|handle|path|string(email)|true|The remote actor handle to remove from your followers|

<h3 id="remove-or-reject-a-follower-to-your-server-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/server/followers/user%40example.com/reject \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/server/followers/{handle}/reject`

<h3 id="reject-a-pending-follower-to-your-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|handle|path|string(email)|true|The remote actor handle to remove from your followers|

<h3 id="reject-a-pending-follower-to-your-server-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/server/followers/user%40example.com/accept \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/server/followers/{handle}/accept`

<h3 id="accept-a-pending-follower-to-your-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|handle|path|string(email)|true|The remote actor handle to remove from your followers|

<h3 id="accept-a-pending-follower-to-your-server-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/server/following \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "follower": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "following": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "score": 0,
      "state": "pending",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[Follow](#schemafollow)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Follow a list of actors (PeerTube instance, channel or account)

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/following \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hosts": [
      "example.com"
    ],
    "handles": [
      "string"
    ]
  }'
```

`POST /api/v1/server/following`

> Body parameter

```json
{
  "hosts": [
    "example.com"
  ],
  "handles": [
    "string"
  ]
}
```

<h3 id="follow-a-list-of-actors-peertube-instance-channel-or-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» hosts|body|[string(hostname)]|false|none|
|» handles|body|[string]|false|none|

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
curl https://peertube.example.com/api/v1/server/following/string \
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
curl https://peertube.example.com/api/v1/server/redundancy/example.com \
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
curl https://peertube.example.com/api/v1/plugins \
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
  "total": 1,
  "data": [
    {
      "name": "peertube-plugin-auth-ldap",
      "type": 1,
      "latestVersion": "0.0.3",
      "version": "0.0.1",
      "enabled": true,
      "uninstalled": true,
      "peertubeEngine": "2.2.0",
      "description": "string",
      "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
      "settings": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
curl https://peertube.example.com/api/v1/plugins/available \
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
  "total": 1,
  "data": [
    {
      "name": "peertube-plugin-auth-ldap",
      "type": 1,
      "latestVersion": "0.0.3",
      "version": "0.0.1",
      "enabled": true,
      "uninstalled": true,
      "peertubeEngine": "2.2.0",
      "description": "string",
      "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
      "settings": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
curl https://peertube.example.com/api/v1/plugins/install \
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

## Update a plugin

<a id="opIdupdatePlugin"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/plugins/update \
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

## Uninstall a plugin

<a id="opIduninstallPlugin"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/plugins/uninstall \
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

## Get a plugin

<a id="opIdgetPlugin"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/plugins/peertube-plugin-auth-ldap \
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
  "name": "peertube-plugin-auth-ldap",
  "type": 1,
  "latestVersion": "0.0.3",
  "version": "0.0.1",
  "enabled": true,
  "uninstalled": true,
  "peertubeEngine": "2.2.0",
  "description": "string",
  "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
  "settings": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
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

## Set a plugin's settings

> Code samples

```bash
curl https://peertube.example.com/api/v1/plugins/peertube-plugin-auth-ldap/settings \
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

## Get a plugin's public settings

> Code samples

```bash
curl https://peertube.example.com/api/v1/plugins/peertube-plugin-auth-ldap/public-settings \
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
curl https://peertube.example.com/api/v1/plugins/peertube-plugin-auth-ldap/registered-settings \
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

<h1 id="peertube-abuses">Abuses</h1>

Abuses deal with reports of local or remote videos/comments/accounts alike.


## List my abuses

<a id="opIdgetMyAbuses"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/abuses \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "reason": "The video is a spam",
      "predefinedReasons": [
        "spamOrMisleading"
      ],
      "reporterAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "state": {
        "id": 1,
        "label": "string"
      },
      "moderationComment": "Decided to ban the server since it spams us regularly",
      "video": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "name": "string",
        "nsfw": true,
        "startAt": "1970-01-01T00:00:00Z",
        "endAt": "1970-01-01T00:00:00Z",
        "deleted": true,
        "blacklisted": true,
        "thumbnailPath": "string",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "channel": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "displayName": "Videos of Framasoft",
          "description": "Videos made with <3 by Framasoft",
          "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
          "publicEmail": "user@example.com",
          "isLocal": true,
          "banners": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "ownerAccount": {
            "id": 42,
            "url": "http://example.com",
            "name": {},
            "avatars": [
              {
                "path": "string",
                "fileUrl": "string",
                "width": 0,
                "height": 0,
                "createdAt": "1970-01-01T00:00:00Z",
                "updatedAt": "1970-01-01T00:00:00Z"
              }
            ],
            "host": "example.com",
            "hostRedundancyAllowed": true,
            "followingCount": 0,
            "followersCount": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z",
            "userId": {},
            "displayName": "string",
            "description": "string"
          },
          "videosCount": 0,
          "viewsPerDay": [
            {
              "date": "1970-01-01T00:00:00Z",
              "views": 0
            }
          ],
          "viewsGroupInterval": "day",
          "totalViews": 0
        }
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[Abuse](#schemaabuse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List abuses

<a id="opIdgetAbuses"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/abuses \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "reason": "The video is a spam",
      "predefinedReasons": [
        "spamOrMisleading"
      ],
      "reporterAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "state": {
        "id": 1,
        "label": "string"
      },
      "moderationComment": "Decided to ban the server since it spams us regularly",
      "video": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "name": "string",
        "nsfw": true,
        "startAt": "1970-01-01T00:00:00Z",
        "endAt": "1970-01-01T00:00:00Z",
        "deleted": true,
        "blacklisted": true,
        "thumbnailPath": "string",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "channel": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "displayName": "Videos of Framasoft",
          "description": "Videos made with <3 by Framasoft",
          "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
          "publicEmail": "user@example.com",
          "isLocal": true,
          "banners": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "ownerAccount": {
            "id": 42,
            "url": "http://example.com",
            "name": {},
            "avatars": [
              {
                "path": "string",
                "fileUrl": "string",
                "width": 0,
                "height": 0,
                "createdAt": "1970-01-01T00:00:00Z",
                "updatedAt": "1970-01-01T00:00:00Z"
              }
            ],
            "host": "example.com",
            "hostRedundancyAllowed": true,
            "followingCount": 0,
            "followersCount": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z",
            "userId": {},
            "displayName": "string",
            "description": "string"
          },
          "videosCount": 0,
          "viewsPerDay": [
            {
              "date": "1970-01-01T00:00:00Z",
              "views": 0
            }
          ],
          "viewsGroupInterval": "day",
          "totalViews": 0
        }
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[Abuse](#schemaabuse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Report an abuse

> Code samples

```bash
curl https://peertube.example.com/api/v1/abuses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string",
    "predefinedReasons": [
      "violentOrAbusive"
    ],
    "video": {
      "id": {},
      "startAt": 0,
      "endAt": 0
    },
    "comment": {
      "id": {}
    },
    "account": {
      "id": 0
    }
  }'
```

`POST /api/v1/abuses`

You cannot report a video that you own or on which you are a collaborator (video channel editor).


> Body parameter

```json
{
  "reason": "string",
  "predefinedReasons": [
    "violentOrAbusive"
  ],
  "video": {
    "id": {},
    "startAt": 0,
    "endAt": 0
  },
  "comment": {
    "id": {}
  },
  "account": {
    "id": 0
  }
}
```

<h3 id="report-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» reason|body|string|true|Reason why the user reports this video|
|» predefinedReasons|body|[PredefinedAbuseReasons](#schemapredefinedabusereasons)|false|Reason categories that help triage reports|
|» video|body|object|false|none|
|» » id|body|object|false|Video id to report|
|» » startAt|body|integer(seconds)|false|Timestamp in the video that marks the beginning of the report|
|» » endAt|body|integer(seconds)|false|Timestamp in the video that marks the ending of the report|
|» comment|body|object|false|none|
|» » id|body|object|false|Comment id to report|
|» account|body|object|false|none|
|» » id|body|integer|false|Account id to report|

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
|403|Forbidden|cannot report a video you own or that you collaborate on|None|

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
curl https://peertube.example.com/api/v1/abuses/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "state": 1,
    "moderationComment": "string"
  }'
```

`PUT /api/v1/abuses/{abuseId}`

> Body parameter

```json
{
  "state": 1,
  "moderationComment": "string"
}
```

<h3 id="update-an-abuse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|abuseId|path|[id](#schemaid)|true|Abuse id|
|body|body|object|false|none|
|» state|body|[AbuseStateSet](#schemaabusestateset)|false|The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)|
|» moderationComment|body|string|false|Update the report comment visible only to the moderation team|

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
curl https://peertube.example.com/api/v1/abuses/42 \
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
curl https://peertube.example.com/api/v1/abuses/42/messages \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "message": "string",
      "byModerator": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      }
    }
  ]
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
|total|integer|false|none|none|
|data|[[AbuseMessage](#schemaabusemessage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Add message to an abuse

> Code samples

```bash
curl https://peertube.example.com/api/v1/abuses/42/messages \
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
curl https://peertube.example.com/api/v1/abuses/42/messages/42 \
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

<h1 id="peertube-video">Video</h1>

Operations dealing with listing, uploading, fetching or modifying videos.


## Request video token

<a id="opIdrequestVideoToken"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/token \
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
|x-peertube-video-password|header|string|false|Required on password protected video|

> Example responses

> 200 Response

```json
{
  "files": {
    "token": "string",
    "expires": "1970-01-01T00:00:00Z"
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

## List videos

<a id="opIdgetVideos"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/videos`

<h3 id="list-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|skipCount|query|string|false|if you don't need the `total` in the response|
|sort|query|string|false|none|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|
|isLive|query|boolean|false|whether or not the video is a live|
|includeScheduledLive|query|boolean|false|whether or not include live that are scheduled for later|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|
|host|query|string|false|Find elements owned by this host|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** **Admins and moderators only** filter on videos that contain one of these automatic tags|
|stateOneOf|query|integer \| [integer]|false|**PeerTube >= 8.2** **Admins and moderators only** filter on videos that have one of these states|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|excludeAlreadyWatched|query|boolean|false|Whether or not to exclude videos that are in the user's video history|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-comments|
|sort|-trending|
|sort|-hot|
|sort|-best|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

<h3 id="list-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List recommended videos

<a id="opIdgetRecommendationVideos"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/recommendations/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/recommendations/videos`

Return videos recommended next to a reference video (or general recommendations if no reference video is given).

PeerTube decides the recommendation algorithm: it currently lists videos sharing tags with the reference video
(excluding videos already watched by the authenticated user), then the latest videos.
All returned videos are restricted to the `scope`, which defaults to the `recommendationScope` of the reference video.


<h3 id="list-recommended-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|Restrict recommended videos. Defaults to the `recommendationScope` of the reference video, or to `1` (all videos) if no reference video is given<br>|
|videoId|query|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|false|Reference video. Required if `scope` is `3` or `4`|
|count|query|integer|false|Number of videos to return|
|excludeVideoIds|query|[[id](#schemaid)]|false|Videos that must not be recommended (the reference video is always excluded)|
|x-peertube-video-password|header|string|false|Required on password protected video|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|1|
|scope|2|
|scope|3|
|scope|4|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

<h3 id="list-recommended-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|
|400|Bad Request|invalid parameters or missing `videoId`|None|
|401|Unauthorized|reference video requires authentication or a password|None|
|403|Forbidden|reference video is not visible by the user or the password is invalid|None|
|404|Not Found|reference video not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List available video categories

<a id="opIdgetCategories"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/categories \
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

## List available video licences

<a id="opIdgetLicences"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/licences \
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

## List available video languages

<a id="opIdgetLanguages"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/languages \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/languages`

<h3 id="list-available-video-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|**PeerTube >= 8.2** Filter languages by scope. Use `subtitle` to exclude sign languages and other languages that don't make sense for subtitles.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|subtitle|

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

## List available video privacy policies

<a id="opIdgetVideoPrivacyPolicies"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/privacies \
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

## Get a video

<a id="opIdgetVideo"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42 \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}`

<h3 id="get-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|x-peertube-video-password|header|string|false|Required on password protected video|

> Example responses

> 200 Response

```json
{
  "id": {},
  "uuid": {},
  "shortUUID": {},
  "isLive": true,
  "liveSchedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ],
  "createdAt": "2017-10-01T10:52:46.396Z",
  "publishedAt": "2018-10-01T10:52:46.396Z",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
  "category": {
    "id": 15,
    "label": "Science & Technology"
  },
  "licence": {
    "id": 2,
    "label": "Attribution - Share Alike"
  },
  "language": {
    "id": "en",
    "label": "English"
  },
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
  "duration": 1419,
  "aspectRatio": 1.778,
  "isLocal": true,
  "name": "What is PeerTube?",
  "thumbnailPath": "string",
  "previewPath": "string",
  "thumbnails": [
    {
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "aspectRatio": "16:9"
    }
  ],
  "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
  "views": 1337,
  "likes": 42,
  "dislikes": 7,
  "comments": 0,
  "nsfw": true,
  "nsfwFlags": {},
  "nsfwSummary": "string",
  "aiUsage": {
    "id": 1,
    "label": "string"
  },
  "commercialContent": {
    "id": 1,
    "label": "string"
  },
  "recommendationScope": {
    "id": 1,
    "label": "string"
  },
  "waitTranscoding": true,
  "state": {
    "id": 1,
    "label": "string"
  },
  "scheduledUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "blacklisted": true,
  "blacklistedReason": "string",
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "channel": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "displayName": "Videos of Framasoft",
    "description": "Videos made with <3 by Framasoft",
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
    "publicEmail": "user@example.com",
    "isLocal": true,
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "ownerAccount": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    },
    "videosCount": 0,
    "viewsPerDay": [
      {
        "date": "1970-01-01T00:00:00Z",
        "views": 0
      }
    ],
    "viewsGroupInterval": "day",
    "totalViews": 0
  },
  "userHistory": {
    "currentTime": 0
  },
  "viewers": 0,
  "description": "\"**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network,\nbased on free/libre software!*\\r\\n\\r\\n**Animation Produced by:** [LILA](https://libreart.info) - [ZeMarmot Team](https://film.zemarmot.net)\\r\\n\n*Directed by* Aryeom\\r\\n*Assistant* Jehan\\r\\n**Licence**: [CC-By-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)\\r\\n\\r\\n\n**Sponsored by** [Framasoft](https://framasoft.org)\\r\\n\\r\\n**Music**: [Red Step Forward](http://play.dogmazic.net/song.php?song_id=52491) - CC-By Ken Bushima\\r\\n\\r\\n\n**Movie Clip**: [Caminades 3: Llamigos](http://www.caminandes.com/) CC-By Blender Institute\\r\\n\\r\\n**Video sources**: https://gitlab.gnome.org/Jehan/what-is-peertube/\"\n",
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "flowers",
    "gardening"
  ],
  "commentsPolicy": {
    "id": 1,
    "label": "string"
  },
  "downloadEnabled": true,
  "inputFileUpdatedAt": "1970-01-01T00:00:00Z",
  "trackerUrls": [
    "https://peertube2.cpy.re/tracker/announce",
    "wss://peertube2.cpy.re/tracker/socket"
  ],
  "files": [
    {
      "id": 42,
      "magnetUri": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentUrl": "http://example.com",
      "torrentDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "playlistUrl": "http://example.com",
      "fileDownloadUrl": "http://example.com",
      "fps": 0,
      "width": 0,
      "height": 0,
      "metadataUrl": "http://example.com",
      "hasAudio": true,
      "hasVideo": true,
      "storage": 0
    }
  ],
  "streamingPlaylists": [
    {
      "id": 42,
      "type": 1,
      "playlistUrl": "http://example.com",
      "segmentsSha256Url": "http://example.com",
      "files": [
        {
          "id": 42,
          "magnetUri": "http://example.com",
          "resolution": {
            "id": 240,
            "label": "240p"
          },
          "size": 0,
          "torrentUrl": "http://example.com",
          "torrentDownloadUrl": "http://example.com",
          "fileUrl": "http://example.com",
          "playlistUrl": "http://example.com",
          "fileDownloadUrl": "http://example.com",
          "fps": 0,
          "width": 0,
          "height": 0,
          "metadataUrl": "http://example.com",
          "hasAudio": true,
          "hasVideo": true,
          "storage": 0
        }
      ],
      "redundancies": [
        {
          "baseUrl": "http://example.com"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "type": "https://docs.joinpeertube.org/api-rest-reference.html#section/Errors/video_requires_password",
  "detail": "Please provide a password to access this password protected video",
  "status": 403,
  "code": "video_requires_password"
}
```

> 403 Response

```json
{
  "type": "https://docs.joinpeertube.org/api-rest-reference.html#section/Errors/video_requires_password",
  "detail": "Please provide a password to access this password protected video",
  "status": 403,
  "code": "video_requires_password"
}
```

<h3 id="get-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoDetails](#schemavideodetails)|
|401|Unauthorized|Requires authentication or the video requires a password|[ServerError](#schemaservererror)|
|403|Forbidden|Invalid authentication or the video requires a password|[ServerError](#schemaservererror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a video

<a id="opIdputVideo"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'channelId=0' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'previewfile=@/path/to/file' \
  -F 'category=15' \
  -F 'licence=2' \
  -F 'language=en' \
  -F 'privacy=1' \
  -F 'description=string' \
  -F 'waitTranscoding=string' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'nsfw=true' \
  -F 'nsfwSummary=' \
  -F 'nsfwFlags=0' \
  -F 'name=string' \
  -F 'tags=["string"]' \
  -F 'commentsPolicy=1' \
  -F 'recommendationScope=1' \
  -F 'aiUsage=1' \
  -F 'commercialContent=1' \
  -F 'downloadEnabled=true' \
  -F 'originallyPublishedAt=1970-01-01T00:00:00Z' \
  -F 'scheduleUpdate={"privacy":1,"updateAt":"1970-01-01T00:00:00Z"}' \
  -F 'videoPasswords=["string"]'
```

`PUT /api/v1/videos/{id}`

> Body parameter

```yaml
channelId: 0
thumbnailfile: string
previewfile: string
category: 15
licence: 2
language: en
privacy: 1
description: string
waitTranscoding: string
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
nsfw: true
nsfwSummary: null
nsfwFlags: 0
name: string
tags:
  - string
commentsPolicy: 1
recommendationScope: 1
aiUsage: 1
commercialContent: 1
downloadEnabled: true
originallyPublishedAt: "1970-01-01T00:00:00Z"
scheduleUpdate:
  privacy: 1
  updateAt: "1970-01-01T00:00:00Z"
videoPasswords:
  - string
```

<h3 id="update-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» channelId|body|integer|false|New channel of the video. The channel must be owned by the same account as the previous one. Use the "change ownership" endpoints to give a video to a channel owned by another account on the local PeerTube instance.|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» previewfile|body|string(binary)|false|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|» description|body|string|false|Video description|
|» waitTranscoding|body|string|false|Whether or not we wait transcoding before publish the video|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» nsfwSummary|body|object|false|More information about the sensitive content of the video|
|» nsfwFlags|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» name|body|string|false|Video name|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» commentsPolicy|body|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|» recommendationScope|body|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|» aiUsage|body|[VideoAIUsageSet](#schemavideoaiusageset)|false|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|» commercialContent|body|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» originallyPublishedAt|body|string(date-time) \| null|false|Date when the content was originally published|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» videoPasswords|body|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|
|» privacy|5|
|» nsfwFlags|0|
|» nsfwFlags|1|
|» nsfwFlags|2|
|» nsfwFlags|4|
|» commentsPolicy|1|
|» commentsPolicy|2|
|» commentsPolicy|3|
|» recommendationScope|1|
|» recommendationScope|2|
|» recommendationScope|3|
|» recommendationScope|4|
|» aiUsage|1|
|» aiUsage|2|
|» aiUsage|3|
|» aiUsage|4|
|» commercialContent|1|
|» commercialContent|2|
|» commercialContent|3|

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
curl https://peertube.example.com/api/v1/videos/42 \
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

## Notify user is watching a video

<a id="opIdaddView"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "currentTime": 5,
    "viewEvent": "seek",
    "sessionId": "string",
    "client": "string",
    "device": {},
    "operatingSystem": "string"
  }'
```

`POST /api/v1/videos/{id}/views`

Call this endpoint regularly (every 5-10 seconds for example) to notify the server the user is watching the video. After a while, PeerTube will increase video's viewers counter. If the user is authenticated, PeerTube will also store the current player time.

> Body parameter

```json
{
  "currentTime": 5,
  "viewEvent": "seek",
  "sessionId": "string",
  "client": "string",
  "device": {},
  "operatingSystem": "string"
}
```

<h3 id="notify-user-is-watching-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[UserViewingVideo](#schemauserviewingvideo)|true|none|
|» currentTime|body|integer(seconds)|true|timestamp within the video, in seconds|
|» viewEvent|body|string|false|Event since last viewing call:<br> * `seek` - If the user seeked the video<br>|
|» sessionId|body|string|false|Optional param to represent the current viewer session. Used by the backend to properly count one view per session per video. PeerTube admin can configure the server to not trust this `sessionId` parameter but use the request IP address instead to identify a viewer.<br>|
|» client|body|string|false|Client software used to watch the video. For example "Firefox", "PeerTube Approval Android", etc.<br>|
|» device|body|object|false|Device used to watch the video. For example "desktop", "mobile", "smarttv", etc.<br>|
|» operatingSystem|body|string|false|Operating system used to watch the video. For example "Windows", "Ubuntu", etc.<br>|

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

## Upload a video

<a id="opIduploadLegacy"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'name=What is PeerTube?' \
  -F 'channelId=3' \
  -F 'privacy=1' \
  -F 'category=15' \
  -F 'licence=2' \
  -F 'language=en' \
  -F 'description=**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\r\n\r\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**
' \
  -F 'waitTranscoding=true' \
  -F 'generateTranscription=true' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'nsfw=true' \
  -F 'nsfwSummary=' \
  -F 'nsfwFlags=0' \
  -F 'tags=["framasoft","peertube"]' \
  -F 'commentsPolicy=1' \
  -F 'recommendationScope=1' \
  -F 'aiUsage=1' \
  -F 'commercialContent=1' \
  -F 'downloadEnabled=true' \
  -F 'originallyPublishedAt=1970-01-01T00:00:00Z' \
  -F 'scheduleUpdate={"privacy":1,"updateAt":"1970-01-01T00:00:00Z"}' \
  -F 'thumbnailfile=string' \
  -F 'previewfile=string' \
  -F 'videoPasswords=["string"]' \
  -F 'videofile=string'
```

`POST /api/v1/videos/upload`

Uses a single request to upload a video.

> Body parameter

```yaml
name: "What is PeerTube?"
channelId: 3
privacy: 1
category: 15
licence: 2
language: en
description: "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n"
waitTranscoding: true
generateTranscription: true
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
nsfw: true
nsfwSummary: null
nsfwFlags: 0
tags:
  - framasoft
  - peertube
commentsPolicy: 1
recommendationScope: 1
aiUsage: 1
commercialContent: 1
downloadEnabled: true
originallyPublishedAt: "1970-01-01T00:00:00Z"
scheduleUpdate:
  privacy: 1
  updateAt: "1970-01-01T00:00:00Z"
thumbnailfile: string
previewfile: string
videoPasswords:
  - string
videofile: string
```

<h3 id="upload-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoUploadRequestLegacy](#schemavideouploadrequestlegacy)|false|none|
|» name|body|string|true|Video name|
|» channelId|body|integer|true|Channel id that will contain this video|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» description|body|string|false|Video description|
|» waitTranscoding|body|boolean|false|Whether or not we wait transcoding before publish the video|
|» generateTranscription|body|boolean|false|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» nsfwSummary|body|object|false|More information about the sensitive content of the video|
|» nsfwFlags|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» commentsPolicy|body|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|» recommendationScope|body|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|» aiUsage|body|[VideoAIUsageSet](#schemavideoaiusageset)|false|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|» commercialContent|body|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» previewfile|body|string(binary)|false|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|» videoPasswords|body|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|
|» videofile|body|string(binary)|true|Video file|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|
|» privacy|5|
|» nsfwFlags|0|
|» nsfwFlags|1|
|» nsfwFlags|2|
|» nsfwFlags|4|
|» commentsPolicy|1|
|» commentsPolicy|2|
|» commentsPolicy|3|
|» recommendationScope|1|
|» recommendationScope|2|
|» recommendationScope|3|
|» recommendationScope|4|
|» aiUsage|1|
|» aiUsage|2|
|» aiUsage|3|
|» aiUsage|4|
|» commercialContent|1|
|» commercialContent|2|
|» commercialContent|3|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {}
  }
}
```

<h3 id="upload-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoUploadResponse](#schemavideouploadresponse)|
|403|Forbidden|video didn't pass upload filter|None|
|408|Request Timeout|upload has timed out|None|
|413|Payload Too Large|If the response has no body, it means the reverse-proxy didn't let it through. Otherwise disambiguate via `code`:<br>- `quota_reached` for quota limits whether daily or global<br>|None|
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
curl 'https://peertube.example.com/api/v1/videos/upload-resumable?upload_id=string' \
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
|Content-Range|header|string|true|Specifies the bytes in the file that the request is uploading.<br><br>For example, a value of `bytes 0-262143/1000000` shows that the request is sending the first<br>262144 bytes (256 x 1024) in a 2,469,036 byte file.<br><br>When the server config `client.videos.resumableUpload.minChunkSize` (video uploads) or<br>`import.users.resumableUpload.minChunkSize` (user archive imports) is not `0`,<br>every chunk except the last one must be at least that big. It must also be at least 1/10,000 of the file size<br>(the maximum number of object storage multipart upload parts).<br>|
|Content-Length|header|number|true|Size of the chunk that the request is sending.<br><br>Remember that larger chunks are more efficient. PeerTube's web client uses chunks varying from<br>1048576 bytes (~1MB) and increases or reduces size depending on connection health.<br>|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {}
  }
}
```

<h3 id="send-chunk-for-the-resumable-upload-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|last chunk received|[VideoUploadResponse](#schemavideouploadresponse)|
|308|Permanent Redirect|resume incomplete|None|
|400|Bad Request|chunk is smaller than `client.videos.resumableUpload.minChunkSize` of the server config or 1/10,000 of the file size (and is not the last one)|None|
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
|308|Range|string||none|
|308|Content-Length|number||none|
|503|Retry-After|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Initialize the resumable upload of a video

<a id="opIduploadResumableInit"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/upload-resumable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-Upload-Content-Length: 2469036' \
  -H 'X-Upload-Content-Type: video/mp4' \
  -d '{
    "name": "What is PeerTube?",
    "channelId": 3,
    "privacy": 1,
    "category": 15,
    "licence": 2,
    "language": "en",
    "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
    "waitTranscoding": true,
    "generateTranscription": true,
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
    "nsfw": true,
    "nsfwSummary": null,
    "nsfwFlags": 0,
    "tags": [
      "framasoft",
      "peertube"
    ],
    "commentsPolicy": 1,
    "recommendationScope": 1,
    "aiUsage": 1,
    "commercialContent": 1,
    "downloadEnabled": true,
    "originallyPublishedAt": "1970-01-01T00:00:00Z",
    "scheduleUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01T00:00:00Z"
    },
    "thumbnailfile": "string",
    "previewfile": "string",
    "videoPasswords": [
      "string"
    ],
    "filename": "what_is_peertube.mp4"
  }'
```

`POST /api/v1/videos/upload-resumable`

Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the upload of a video

> Body parameter

```json
{
  "name": "What is PeerTube?",
  "channelId": 3,
  "privacy": 1,
  "category": 15,
  "licence": 2,
  "language": "en",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "waitTranscoding": true,
  "generateTranscription": true,
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "nsfw": true,
  "nsfwSummary": null,
  "nsfwFlags": 0,
  "tags": [
    "framasoft",
    "peertube"
  ],
  "commentsPolicy": 1,
  "recommendationScope": 1,
  "aiUsage": 1,
  "commercialContent": 1,
  "downloadEnabled": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "thumbnailfile": "string",
  "previewfile": "string",
  "videoPasswords": [
    "string"
  ],
  "filename": "what_is_peertube.mp4"
}
```

<h3 id="initialize-the-resumable-upload-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Upload-Content-Length|header|number|true|Number of bytes that will be uploaded in subsequent requests. Set this value to the size of the file you are uploading.|
|X-Upload-Content-Type|header|string(mimetype)|true|MIME type of the file that you are uploading. Depending on your instance settings, acceptable values might vary.|
|body|body|[VideoUploadRequestResumable](#schemavideouploadrequestresumable)|false|none|
|» name|body|string|true|Video name|
|» channelId|body|integer|true|Channel id that will contain this video|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» description|body|string|false|Video description|
|» waitTranscoding|body|boolean|false|Whether or not we wait transcoding before publish the video|
|» generateTranscription|body|boolean|false|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» nsfwSummary|body|object|false|More information about the sensitive content of the video|
|» nsfwFlags|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» commentsPolicy|body|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|» recommendationScope|body|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|» aiUsage|body|[VideoAIUsageSet](#schemavideoaiusageset)|false|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|» commercialContent|body|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» previewfile|body|string(binary)|false|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|» videoPasswords|body|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|
|» filename|body|string(filename)|true|Video filename including extension|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» previewfile|body|string(binary)|false|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|
|» privacy|5|
|» nsfwFlags|0|
|» nsfwFlags|1|
|» nsfwFlags|2|
|» nsfwFlags|4|
|» commentsPolicy|1|
|» commentsPolicy|2|
|» commentsPolicy|3|
|» recommendationScope|1|
|» recommendationScope|2|
|» recommendationScope|3|
|» recommendationScope|4|
|» aiUsage|1|
|» aiUsage|2|
|» aiUsage|3|
|» aiUsage|4|
|» commercialContent|1|
|» commercialContent|2|
|» commercialContent|3|

<h3 id="initialize-the-resumable-upload-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|file already exists, send a [`resume`](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) request instead|None|
|201|Created|created|None|
|413|Payload Too Large|Disambiguate via `code`:<br>- `max_file_size_reached` for the absolute file size limit<br>- `quota_reached` for quota limits whether daily or global<br>|None|
|415|Unsupported Media Type|video type unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|none|
|201|Content-Length|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Cancel the resumable upload of a video, deleting any data uploaded so far

<a id="opIduploadResumableCancel"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/videos/upload-resumable?upload_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Length: 0'
```

`DELETE /api/v1/videos/upload-resumable`

Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the upload of a video

<h3 id="cancel-the-resumable-upload-of-a-video-deleting-any-data-uploaded-so-far-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last hour, it is<br>not valid anymore and you need to initialize a new upload.<br>|
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

## Get video source file metadata

<a id="opIdgetVideoSource"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/source \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/source`

Get metadata and download link of original video file

<h3 id="get-video-source-file-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "inputFilename": "string",
  "fileDownloadUrl": "string",
  "resolution": {
    "id": 240,
    "label": "240p"
  },
  "size": 0,
  "fps": 0,
  "width": 0,
  "height": 0,
  "createdAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-video-source-file-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoSource](#schemavideosource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete video source file

<a id="opIddeleteVideoSourceFile"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/source/file \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/source/file`

<h3 id="delete-video-source-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-video-source-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video source not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Send chunk for the resumable replacement of a video

<a id="opIdreplaceVideoSourceResumable"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/videos/42/source/replace-resumable?upload_id=string' \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Range: bytes 0-262143/2469036' \
  -H 'Content-Length: 262144' \
  --data-binary '@/path/to/file'
```

`PUT /api/v1/videos/{id}/source/replace-resumable`

**PeerTube >= 6.0** Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to continue, pause or resume the replacement of a video

<h3 id="send-chunk-for-the-resumable-replacement-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last hour, it is<br>not valid anymore and you need to initialize a new upload.<br>|
|Content-Range|header|string|true|Specifies the bytes in the file that the request is uploading.<br><br>For example, a value of `bytes 0-262143/1000000` shows that the request is sending the first<br>262144 bytes (256 x 1024) in a 2,469,036 byte file.<br><br>When the server config `client.videos.resumableUpload.minChunkSize` (video uploads) or<br>`import.users.resumableUpload.minChunkSize` (user archive imports) is not `0`,<br>every chunk except the last one must be at least that big. It must also be at least 1/10,000 of the file size<br>(the maximum number of object storage multipart upload parts).<br>|
|Content-Length|header|number|true|Size of the chunk that the request is sending.<br><br>Remember that larger chunks are more efficient. PeerTube's web client uses chunks varying from<br>1048576 bytes (~1MB) and increases or reduces size depending on connection health.<br>|
|body|body|string(binary)|false|none|

<h3 id="send-chunk-for-the-resumable-replacement-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|last chunk received: successful operation|None|
|308|Permanent Redirect|resume incomplete|None|
|400|Bad Request|chunk is smaller than `client.videos.resumableUpload.minChunkSize` of the server config or 1/10,000 of the file size (and is not the last one)|None|
|403|Forbidden|video didn't pass file replacement filter|None|
|404|Not Found|replace upload not found|None|
|409|Conflict|chunk doesn't match range|None|
|422|Unprocessable Entity|video unreadable|None|
|429|Too Many Requests|too many concurrent requests|None|
|503|Service Unavailable|upload is already being processed|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|308|Range|string||none|
|308|Content-Length|number||none|
|503|Retry-After|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Initialize the resumable replacement of a video

<a id="opIdreplaceVideoSourceResumableInit"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/source/replace-resumable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'X-Upload-Content-Length: 2469036' \
  -H 'X-Upload-Content-Type: video/mp4' \
  -d '{
    "filename": "what_is_peertube.mp4"
  }'
```

`POST /api/v1/videos/{id}/source/replace-resumable`

**PeerTube >= 6.0** Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the replacement of a video

> Body parameter

```json
{
  "filename": "what_is_peertube.mp4"
}
```

<h3 id="initialize-the-resumable-replacement-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|X-Upload-Content-Length|header|number|true|Number of bytes that will be uploaded in subsequent requests. Set this value to the size of the file you are uploading.|
|X-Upload-Content-Type|header|string(mimetype)|true|MIME type of the file that you are uploading. Depending on your instance settings, acceptable values might vary.|
|body|body|[VideoReplaceSourceRequestResumable](#schemavideoreplacesourcerequestresumable)|false|none|
|» filename|body|string(filename)|false|Video filename including extension|

<h3 id="initialize-the-resumable-replacement-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|file already exists, send a [`resume`](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) request instead|None|
|201|Created|created|None|
|413|Payload Too Large|Disambiguate via `code`:<br>- `max_file_size_reached` for the absolute file size limit<br>- `quota_reached` for quota limits whether daily or global<br>|None|
|415|Unsupported Media Type|video type unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|none|
|201|Content-Length|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Cancel the resumable replacement of a video

<a id="opIdreplaceVideoSourceResumableCancel"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/videos/42/source/replace-resumable?upload_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Content-Length: 0'
```

`DELETE /api/v1/videos/{id}/source/replace-resumable`

**PeerTube >= 6.0** Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the replacement of a video

<h3 id="cancel-the-resumable-replacement-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|upload_id|query|string|true|Created session id to proceed with. If you didn't send chunks in the last hour, it is<br>not valid anymore and you need to initialize a new upload.<br>|
|Content-Length|header|number|true|none|

<h3 id="cancel-the-resumable-replacement-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|source file replacement cancelled|None|
|404|Not Found|source file replacement not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Content-Length|number||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List storyboards of a video

<a id="opIdlistVideoStoryboards"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/storyboards \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/storyboards`

**PeerTube >= 6.0**

<h3 id="list-storyboards-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "storyboards": [
    {
      "storyboardPath": "string",
      "fileUrl": "string",
      "totalHeight": 0,
      "totalWidth": 0,
      "spriteHeight": 0,
      "spriteWidth": 0,
      "spriteDuration": 0
    }
  ]
}
```

<h3 id="list-storyboards-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-storyboards-of-a-video-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storyboards|[[Storyboard](#schemastoryboard)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List videos of a video channel

<a id="opIdgetVideoChannelVideos"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/videos \
  -H 'Accept: application/json'
```

`GET /api/v1/video-channels/{channelHandle}/videos`

<h3 id="list-videos-of-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|skipCount|query|string|false|if you don't need the `total` in the response|
|sort|query|string|false|none|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|
|isLive|query|boolean|false|whether or not the video is a live|
|includeScheduledLive|query|boolean|false|whether or not include live that are scheduled for later|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|
|host|query|string|false|Find elements owned by this host|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** **Admins and moderators only** filter on videos that contain one of these automatic tags|
|stateOneOf|query|integer \| [integer]|false|**PeerTube >= 8.2** **Admins and moderators only** filter on videos that have one of these states|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|excludeAlreadyWatched|query|boolean|false|Whether or not to exclude videos that are in the user's video history|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

#### Enumerated Values

|Parameter|Value|
|---|---|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-comments|
|sort|-trending|
|sort|-hot|
|sort|-best|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

<h3 id="list-videos-of-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-video-imports">Video Imports</h1>

Operations dealing with listing, adding and removing video imports.

## Import a video

<a id="opIdimportVideo"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/imports \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'targetUrl=https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d' \
  -F 'name=What is PeerTube?' \
  -F 'channelId=3' \
  -F 'privacy=1' \
  -F 'category=15' \
  -F 'licence=2' \
  -F 'language=en' \
  -F 'description=**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\r\n\r\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**
' \
  -F 'waitTranscoding=true' \
  -F 'generateTranscription=true' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'nsfw=true' \
  -F 'nsfwSummary=' \
  -F 'nsfwFlags=0' \
  -F 'tags=["framasoft","peertube"]' \
  -F 'commentsPolicy=1' \
  -F 'recommendationScope=1' \
  -F 'aiUsage=1' \
  -F 'commercialContent=1' \
  -F 'downloadEnabled=true' \
  -F 'originallyPublishedAt=1970-01-01T00:00:00Z' \
  -F 'scheduleUpdate={"privacy":1,"updateAt":"1970-01-01T00:00:00Z"}' \
  -F 'thumbnailfile=string' \
  -F 'previewfile=string' \
  -F 'videoPasswords=["string"]'
```

`POST /api/v1/videos/imports`

Import a torrent or magnetURI or HTTP resource (if enabled by the instance administrator)

> Body parameter

```yaml
targetUrl: "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d"
name: "What is PeerTube?"
channelId: 3
privacy: 1
category: 15
licence: 2
language: en
description: "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n"
waitTranscoding: true
generateTranscription: true
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
nsfw: true
nsfwSummary: null
nsfwFlags: 0
tags:
  - framasoft
  - peertube
commentsPolicy: 1
recommendationScope: 1
aiUsage: 1
commercialContent: 1
downloadEnabled: true
originallyPublishedAt: "1970-01-01T00:00:00Z"
scheduleUpdate:
  privacy: 1
  updateAt: "1970-01-01T00:00:00Z"
thumbnailfile: string
previewfile: string
videoPasswords:
  - string
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
|» name|body|string|true|Video name|
|» channelId|body|integer|true|Channel id that will contain this video|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» description|body|string|false|Video description|
|» waitTranscoding|body|boolean|false|Whether or not we wait transcoding before publish the video|
|» generateTranscription|body|boolean|false|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|» support|body|string|false|A text tell the audience how to support the video creator|
|» nsfw|body|boolean|false|Whether or not this video contains sensitive content|
|» nsfwSummary|body|object|false|More information about the sensitive content of the video|
|» nsfwFlags|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» tags|body|[string]|false|Video tags (maximum 5 tags each between 2 and 30 characters)|
|» commentsPolicy|body|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|» recommendationScope|body|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|» aiUsage|body|[VideoAIUsageSet](#schemavideoaiusageset)|false|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|» commercialContent|body|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for this video|
|» originallyPublishedAt|body|string(date-time)|false|Date when the content was originally published|
|» scheduleUpdate|body|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|
|» thumbnailfile|body|string(binary)|false|Video thumbnail file|
|» previewfile|body|string(binary)|false|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|» videoPasswords|body|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|
|» privacy|5|
|» nsfwFlags|0|
|» nsfwFlags|1|
|» nsfwFlags|2|
|» nsfwFlags|4|
|» commentsPolicy|1|
|» commentsPolicy|2|
|» commentsPolicy|3|
|» recommendationScope|1|
|» recommendationScope|2|
|» recommendationScope|3|
|» recommendationScope|4|
|» aiUsage|1|
|» aiUsage|2|
|» aiUsage|3|
|» aiUsage|4|
|» commercialContent|1|
|» commercialContent|2|
|» commercialContent|3|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {}
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

## Cancel video import

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/imports/42/cancel \
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

## Retry video import

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/imports/42/retry \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/imports/{id}/retry`

**PeerTube >= 8.0** Retry a failed or cancelled (**PeerTube >= 8.3**) video import

<h3 id="retry-video-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid)|true|Entity id|

<h3 id="retry-video-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete video import

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/imports/42 \
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

<h1 id="peertube-channels-sync">Channels Sync</h1>

Operations dealing with synchronizing PeerTube user's channel with channels of other platforms

## Create a synchronization for a video channel

<a id="opIdaddVideoChannelSync"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channel-syncs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
    "videoChannelId": 42,
    "videoPrivacy": 0
  }'
```

`POST /api/v1/video-channel-syncs`

> Body parameter

```json
{
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "videoChannelId": 42,
  "videoPrivacy": 0
}
```

<h3 id="create-a-synchronization-for-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoChannelSyncCreate](#schemavideochannelsynccreate)|false|none|
|» externalChannelUrl|body|string|false|none|
|» videoChannelId|body|[id](#schemaid)|false|none|
|» videoPrivacy|body|integer|false|Privacy of imported videos (1 = PUBLIC, 2 = UNLISTED, 3 = PRIVATE, 4 = INTERNAL).<br>Password protected privacy is not supported<br>|

> Example responses

> 200 Response

```json
{
  "videoChannelSync": {
    "id": 42,
    "state": {
      "id": 2,
      "label": "PROCESSING"
    },
    "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
    "createdAt": "1970-01-01T00:00:00Z",
    "lastSyncAt": "1970-01-01T00:00:00Z",
    "channel": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    },
    "videoPrivacy": 0
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
curl https://peertube.example.com/api/v1/video-channel-syncs/42 \
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
curl https://peertube.example.com/api/v1/video-channel-syncs/42/sync \
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
curl https://peertube.example.com/api/v1/videos/42/captions \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/captions`

<h3 id="list-captions-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|x-peertube-video-password|header|string|false|Required on password protected video|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "language": {
        "id": "en",
        "label": "English"
      },
      "automaticallyGenerated": true,
      "captionPath": "string",
      "fileUrl": "string",
      "m3u8Url": "string",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[VideoCaption](#schemavideocaption)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a video caption

<a id="opIdgenerateVideoCaption"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/captions/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "forceTranscription": false
  }'
```

`POST /api/v1/videos/{id}/captions/generate`

**PeerTube >= 6.2** This feature has to be enabled by the administrator

> Body parameter

```json
{
  "forceTranscription": false
}
```

<h3 id="generate-a-video-caption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» forceTranscription|body|boolean|false|none|

<h3 id="generate-a-video-caption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Add or replace a video caption

<a id="opIdaddVideoCaption"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/captions/en \
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
curl https://peertube.example.com/api/v1/videos/42/captions/en \
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

<h1 id="peertube-video-chapters">Video Chapters</h1>

Operations dealing with managing chapters of a video.

## Get chapters of a video

<a id="opIdgetVideoChapters"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/chapters \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/chapters`

**PeerTube >= 6.0**

<h3 id="get-chapters-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|x-peertube-video-password|header|string|false|Required on password protected video|

> Example responses

> 200 Response

```json
{
  "chapters": {
    "title": "string",
    "timecode": 0
  }
}
```

<h3 id="get-chapters-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChapters](#schemavideochapters)|

<aside class="success">
This operation does not require authentication
</aside>

## Replace video chapters

<a id="opIdreplaceVideoChapters"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/chapters \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chapters": [
      {
        "title": "string",
        "timecode": 0
      }
    ]
  }'
```

`PUT /api/v1/videos/{id}/chapters`

**PeerTube >= 6.0**

> Body parameter

```json
{
  "chapters": [
    {
      "title": "string",
      "timecode": 0
    }
  ]
}
```

<h3 id="replace-video-chapters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» chapters|body|[object]|false|none|
|» » title|body|string|false|none|
|» » timecode|body|integer|false|none|

<h3 id="replace-video-chapters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-video-channels">Video Channels</h1>

Operations dealing with the creation, modification and listing of videos within a channel.

## List video channels

<a id="opIdgetVideoChannels"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ]
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
curl https://peertube.example.com/api/v1/video-channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": null,
    "description": null,
    "support": null,
    "publicEmail": "user@example.com",
    "name": {}
  }'
```

`POST /api/v1/video-channels`

> Body parameter

```json
{
  "displayName": null,
  "description": null,
  "support": null,
  "publicEmail": "user@example.com",
  "name": {}
}
```

<h3 id="create-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VideoChannelCreate](#schemavideochannelcreate)|false|none|
|» displayName|body|object|true|Channel display name|
|» description|body|object|false|Channel description|
|» support|body|object|false|How to support/fund the channel|
|» publicEmail|body|string(email) \| null|false|Public email visible in podcast RSS feeds|
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
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com \
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
  "id": 42,
  "url": "http://example.com",
  "name": {},
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "followingCount": 0,
  "followersCount": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "displayName": "Videos of Framasoft",
  "description": "Videos made with <3 by Framasoft",
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "publicEmail": "user@example.com",
  "isLocal": true,
  "banners": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "ownerAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "videosCount": 0,
  "viewsPerDay": [
    {
      "date": "1970-01-01T00:00:00Z",
      "views": 0
    }
  ],
  "viewsGroupInterval": "day",
  "totalViews": 0
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
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": null,
    "description": null,
    "support": null,
    "publicEmail": "user@example.com",
    "bulkVideosSupportUpdate": true
  }'
```

`PUT /api/v1/video-channels/{channelHandle}`

> Body parameter

```json
{
  "displayName": null,
  "description": null,
  "support": null,
  "publicEmail": "user@example.com",
  "bulkVideosSupportUpdate": true
}
```

<h3 id="update-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|[VideoChannelUpdate](#schemavideochannelupdate)|false|none|
|» displayName|body|object|false|Channel display name|
|» description|body|object|false|Channel description|
|» support|body|object|false|How to support/fund the channel|
|» publicEmail|body|string(email) \| null|false|Public email visible in podcast RSS feeds|
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
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com \
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

## List activities of a video channel

<a id="opIdlistVideoChannelActivities"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/activities \
  -H 'Accept: application/json'
```

`GET /api/v1/video-channels/{channelHandle}/activities`

**PeerTube >= 8.0**

<h3 id="list-activities-of-a-video-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 0,
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "action": {
        "id": 1,
        "label": "string"
      },
      "targetType": {
        "id": 1,
        "label": "string"
      },
      "details": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com"
      },
      "video": {
        "id": 42,
        "name": "string",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "url": "http://example.com",
        "isLive": true
      },
      "videoImport": {
        "id": 42,
        "name": "string",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "url": "http://example.com",
        "targetUrl": "http://example.com"
      },
      "playlist": {
        "id": 42,
        "name": "string",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "url": "http://example.com"
      },
      "channelSync": {
        "id": 42,
        "externalChannelUrl": "http://example.com"
      }
    }
  ]
}
```

<h3 id="list-activities-of-a-video-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ChannelActivityListResponse](#schemachannelactivitylistresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List followers of a video channel

<a id="opIdgetVideoChannelFollowers"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/followers \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "follower": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "following": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      },
      "score": 0,
      "state": "pending",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[Follow](#schemafollow)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update channel avatar

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/avatar/pick \
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
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
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

## Delete channel avatar

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/avatar \
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

## Update channel banner

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/banner/pick \
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
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
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

## Delete channel banner

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/banner \
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

## Import videos in channel

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/import-videos \
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

## List video channels of an account

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/video-channels \
  -H 'Accept: application/json'
```

`GET /api/v1/accounts/{name}/video-channels`

<h3 id="list-video-channels-of-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The username or handle of the account|
|withStats|query|boolean|false|include view statistics time series and total views (only if authenticated as the account user)|
|statsDays|query|integer|false|number of days of view statistics to include in `viewsPerDay` when `withStats` is true (only if authenticated as the account user). `0` means all time (since the channel's earliest recorded stat). `viewsPerDay` always spans the whole requested range so channels can be compared to each other. Its bucket size is reported in `viewsGroupInterval`: it is derived from the requested range, narrowed to the channel history so that a young channel on a long range is not aggregated into a single coarse bucket. `totalViews` is unaffected by this parameter and always reports lifetime views.<br>|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|
|sort|query|string|false|Sort column|
|includeCollaborations|query|boolean|false|**PeerTube >= 8.0** Include objects from collaborated channels|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statsDays|30|
|statsDays|90|
|statsDays|365|
|statsDays|0|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ]
}
```

<h3 id="list-video-channels-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelList](#schemavideochannellist)|

<aside class="success">
This operation does not require authentication
</aside>

## List the synchronizations of video channels of an account

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/video-channel-syncs \
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
|includeCollaborations|query|boolean|false|**PeerTube >= 8.0** Include objects from collaborated channels|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 2,
        "label": "PROCESSING"
      },
      "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
      "createdAt": "1970-01-01T00:00:00Z",
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "channel": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "displayName": "Videos of Framasoft",
        "description": "Videos made with <3 by Framasoft",
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
        "publicEmail": "user@example.com",
        "isLocal": true,
        "banners": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "ownerAccount": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userId": {},
          "displayName": "string",
          "description": "string"
        },
        "videosCount": 0,
        "viewsPerDay": [
          {
            "date": "1970-01-01T00:00:00Z",
            "views": 0
          }
        ],
        "viewsGroupInterval": "day",
        "totalViews": 0
      },
      "videoPrivacy": 0
    }
  ]
}
```

<h3 id="list-the-synchronizations-of-video-channels-of-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelSyncList](#schemavideochannelsynclist)|

<aside class="success">
This operation does not require authentication
</aside>

## List channel collaborators

<a id="opIdlistVideoChannelCollaborators"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/collaborators \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/video-channels/{channelHandle}/collaborators`

**PeerTube >= 8.0**

<h3 id="list-channel-collaborators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "state": {
        "id": 1,
        "label": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-channel-collaborators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-channel-collaborators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[VideoChannelCollaborator](#schemavideochannelcollaborator)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Invite a collaborator

<a id="opIdinviteVideoChannelCollaborator"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/collaborators/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountHandle": "string"
  }'
```

`POST /api/v1/video-channels/{channelHandle}/collaborators/invite`

**PeerTube >= 8.0**  Invite a local user to collaborate on the specified video channel.

> Body parameter

```json
{
  "accountHandle": "string"
}
```

<h3 id="invite-a-collaborator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|object|true|none|
|» accountHandle|body|string|false|Local user username to invite|

> Example responses

> 200 Response

```json
{
  "collaborator": {
    "id": 42,
    "account": {
      "id": 0,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "state": {
      "id": 1,
      "label": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="invite-a-collaborator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborator invited|Inline|

<h3 id="invite-a-collaborator-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collaborator|[VideoChannelCollaborator](#schemavideochannelcollaborator)|false|none|Representation of a channel collaboration|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Accept a collaboration invitation

<a id="opIdacceptVideoChannelCollaborator"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/collaborators/42/accept \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/video-channels/{channelHandle}/collaborators/{collaboratorId}/accept`

**PeerTube >= 8.0**

<h3 id="accept-a-collaboration-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|collaboratorId|path|[id](#schemaid)|true|The collaborator id|

<h3 id="accept-a-collaboration-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Collaboration accepted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Reject a collaboration invitation

<a id="opIdrejectVideoChannelCollaborator"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/collaborators/42/reject \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/video-channels/{channelHandle}/collaborators/{collaboratorId}/reject`

**PeerTube >= 8.0**

<h3 id="reject-a-collaboration-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|collaboratorId|path|[id](#schemaid)|true|The collaborator id|

<h3 id="reject-a-collaboration-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Collaboration rejected|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Remove a channel collaborator

<a id="opIdremoveVideoChannelCollaborator"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/collaborators/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-channels/{channelHandle}/collaborators/{collaboratorId}`

**PeerTube >= 8.0** Only the channel owner or the collaborator themselves can remove a collaborator from a channel

<h3 id="remove-a-channel-collaborator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|collaboratorId|path|[id](#schemaid)|true|The collaborator id|

<h3 id="remove-a-channel-collaborator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-player-settings">Player Settings</h1>

Operations dealing with video player settings for videos and channels.

## Get video player settings

<a id="opIdgetVideoPlayerSettings"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/player-settings/videos/42 \
  -H 'Accept: application/json'
```

`GET /api/v1/player-settings/videos/{id}`

Get player settings for a specific video. Returns video-specific settings merged with channel player settings.

<h3 id="get-video-player-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|raw|query|boolean|false|Return raw settings without merging channel defaults|

> Example responses

> 200 Response

```json
{
  "theme": "channel-default"
}
```

<h3 id="get-video-player-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PlayerVideoSettings](#schemaplayervideosettings)|
|404|Not Found|video not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update video player settings

<a id="opIdupdateVideoPlayerSettings"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/player-settings/videos/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "theme": "channel-default"
  }'
```

`PUT /api/v1/player-settings/videos/{id}`

Update player settings for a specific video

> Body parameter

```json
{
  "theme": "channel-default"
}
```

<h3 id="update-video-player-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[PlayerVideoSettingsUpdate](#schemaplayervideosettingsupdate)|false|none|
|» theme|body|[PlayerThemeVideoSetting](#schemaplayerthemevideosetting)|true|Player theme setting for a video:<br>  - `channel-default` Use the channel default theme<br>  - `instance-default` Use the instance default theme<br>  - `galaxy` Use the galaxy theme<br>  - `lucide` Use the lucide theme<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» theme|channel-default|
|» theme|instance-default|
|» theme|galaxy|
|» theme|lucide|

> Example responses

> 200 Response

```json
{
  "theme": "channel-default"
}
```

<h3 id="update-video-player-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PlayerVideoSettings](#schemaplayervideosettings)|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get channel player settings

<a id="opIdgetChannelPlayerSettings"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/player-settings/video-channels/my_username%20%7C%20my_username%40example.com \
  -H 'Accept: application/json'
```

`GET /api/v1/player-settings/video-channels/{channelHandle}`

Get player settings for a video channel.

<h3 id="get-channel-player-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|raw|query|boolean|false|Return raw settings without applying instance defaults|

> Example responses

> 200 Response

```json
{
  "theme": "instance-default"
}
```

<h3 id="get-channel-player-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PlayerChannelSettings](#schemaplayerchannelsettings)|
|404|Not Found|video channel not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update channel player settings

<a id="opIdupdateChannelPlayerSettings"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/player-settings/video-channels/my_username%20%7C%20my_username%40example.com \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "theme": "instance-default"
  }'
```

`PUT /api/v1/player-settings/video-channels/{channelHandle}`

Update default player settings for a video channel.

> Body parameter

```json
{
  "theme": "instance-default"
}
```

<h3 id="update-channel-player-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|[PlayerChannelSettingsUpdate](#schemaplayerchannelsettingsupdate)|false|none|
|» theme|body|[PlayerThemeChannelSetting](#schemaplayerthemechannelsetting)|true|Player theme setting for a channel:<br>  - `instance-default` Use the instance default theme<br>  - `galaxy` Use the galaxy theme<br>  - `lucide` Use the lucide theme<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» theme|instance-default|
|» theme|galaxy|
|» theme|lucide|

> Example responses

> 200 Response

```json
{
  "theme": "instance-default"
}
```

<h3 id="update-channel-player-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PlayerChannelSettings](#schemaplayerchannelsettings)|
|404|Not Found|video channel not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-comments">Video Comments</h1>

Operations dealing with comments to a video. Comments are organized in threads: adding a comment in response to the video starts a thread, adding a reply to a comment adds it to its root comment thread.


## List comments on user's videos

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/videos/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/videos/comments`

**PeerTube >= 6.2**

<h3 id="list-comments-on-users-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|
|searchAccount|query|string|false|Filter comments by searching on the account|
|searchVideo|query|string|false|Filter comments by searching on the video|
|videoId|query|integer|false|Limit results on this specific video|
|videoChannelId|query|integer|false|Limit results on this specific video channel|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** filter on comments that contain one of these automatic tags|
|isHeldForReview|query|boolean|false|only display comments that are held for review|
|includeCollaborations|query|boolean|false|**PeerTube >= 8.0** Include objects from collaborated channels|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "text": "This video is wonderful!",
      "heldForReview": true,
      "threadId": 42,
      "inReplyToCommentId": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "account": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "video": {
        "id": {},
        "uuid": {},
        "name": "What is PeerTube?",
        "state": {
          "id": 1,
          "label": "string"
        }
      },
      "automaticTags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="list-comments-on-users-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-comments-on-users-videos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[VideoCommentForOwnerOrAdmin](#schemavideocommentforowneroradmin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List threads of a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/comment-threads \
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
|x-peertube-video-password|header|string|false|Required on password protected video|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-createdAt|
|sort|-totalReplies|

> Example responses

> 200 Response

```json
{
  "total": 0,
  "totalNotDeletedComments": 0,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "text": "This video is wonderful!",
      "threadId": 42,
      "inReplyToCommentId": {},
      "videoId": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": null,
      "isDeleted": false,
      "heldForReview": true,
      "totalRepliesFromVideoAuthor": 0,
      "totalReplies": 0,
      "account": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      }
    }
  ]
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
curl https://peertube.example.com/api/v1/videos/42/comment-threads \
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
    "id": 42,
    "url": "http://example.com",
    "text": "This video is wonderful!",
    "threadId": 42,
    "inReplyToCommentId": {},
    "videoId": {},
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "isDeleted": false,
    "heldForReview": true,
    "totalRepliesFromVideoAuthor": 0,
    "totalReplies": 0,
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    }
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
curl https://peertube.example.com/api/v1/videos/42/comment-threads/0 \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/comment-threads/{threadId}`

Since PeerTube 8.3 the returned tree is truncated: only the first replies of each comment are included, and only down to `maxDepth` nesting levels. Use `GET /api/v1/videos/{id}/comments/{commentId}/replies` to fetch the replies that are missing, comparing `children` and `totalChildren` of each node of the tree.


<h3 id="get-a-thread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|threadId|path|integer|true|The thread id (root comment id)|
|maxDepth|query|integer|false|Number of nesting levels to include below the requested comment.<br>Bounded by `repliesPerLevel` and `count`, see the note on `repliesPerLevel`<br>|
|repliesPerLevel|query|integer|false|Number of direct replies to include for each comment of the tree. Does not apply to the first level of `GET /api/v1/videos/{id}/comments/{commentId}/replies`, which is paginated using `start` and `count`.<br>A tree can make the server walk through `count * (repliesPerLevel ^ maxDepth - 1) / (repliesPerLevel - 1)` comments, which grows exponentially. Combinations above 2000000 are rejected A deep tree has to be narrow and a wide tree has to be shallow.<br>|
|x-peertube-video-password|header|string|false|Required on password protected video|

> Example responses

> 200 Response

```json
{
  "comment": {
    "id": 42,
    "url": "http://example.com",
    "text": "This video is wonderful!",
    "threadId": 42,
    "inReplyToCommentId": {},
    "videoId": {},
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "isDeleted": false,
    "heldForReview": true,
    "totalRepliesFromVideoAuthor": 0,
    "totalReplies": 0,
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    }
  },
  "children": [
    {}
  ],
  "totalChildren": 0
}
```

<h3 id="get-a-thread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoCommentThreadTree](#schemavideocommentthreadtree)|

<aside class="success">
This operation does not require authentication
</aside>

## List replies of a comment

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/comments/42/replies \
  -H 'Accept: application/json'
```

`GET /api/v1/videos/{id}/comments/{commentId}/replies`

**PeerTube >= 8.3** List the direct replies of a comment, each of them nested up to `maxDepth` levels. Used to unfold the parts of a thread that `GET /api/v1/videos/{id}/comment-threads/{threadId}` truncated.


<h3 id="list-replies-of-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|commentId|path|[id](#schemaid)|true|The comment id|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort the direct replies of the comment. Deeper levels of the tree are always sorted the same way.<br>Defaults to `createdAt` so the replies are appended to the thread tree in the order it was built<br>|
|maxDepth|query|integer|false|Number of nesting levels to include below the requested comment.<br>Bounded by `repliesPerLevel` and `count`, see the note on `repliesPerLevel`<br>|
|repliesPerLevel|query|integer|false|Number of direct replies to include for each comment of the tree. Does not apply to the first level of `GET /api/v1/videos/{id}/comments/{commentId}/replies`, which is paginated using `start` and `count`.<br>A tree can make the server walk through `count * (repliesPerLevel ^ maxDepth - 1) / (repliesPerLevel - 1)` comments, which grows exponentially. Combinations above 2000000 are rejected A deep tree has to be narrow and a wide tree has to be shallow.<br>|
|x-peertube-video-password|header|string|false|Required on password protected video|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|createdAt|
|sort|-createdAt|

> Example responses

> 200 Response

```json
{
  "total": 13,
  "data": [
    {
      "comment": {
        "id": 42,
        "url": "http://example.com",
        "text": "This video is wonderful!",
        "threadId": 42,
        "inReplyToCommentId": {},
        "videoId": {},
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": null,
        "isDeleted": false,
        "heldForReview": true,
        "totalRepliesFromVideoAuthor": 0,
        "totalReplies": 0,
        "account": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userId": {},
          "displayName": "string",
          "description": "string"
        }
      },
      "children": [
        {}
      ],
      "totalChildren": 0
    }
  ]
}
```

<h3 id="list-replies-of-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-replies-of-a-comment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|Total number of direct replies of the comment|
|data|[[VideoCommentThreadTree](#schemavideocommentthreadtree)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List instance comments

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/comments`

<h3 id="list-instance-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|
|searchAccount|query|string|false|Filter comments by searching on the account|
|searchVideo|query|string|false|Filter comments by searching on the video|
|videoId|query|integer|false|Limit results on this specific video|
|videoChannelId|query|integer|false|Limit results on this specific video channel|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** filter on comments that contain one of these automatic tags|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|onLocalVideo|query|boolean|false|Display only objects of local or remote videos|
|includeMuted|query|boolean|false|**PeerTube >= 8.2** Include comments from muted accounts|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "text": "This video is wonderful!",
      "heldForReview": true,
      "threadId": 42,
      "inReplyToCommentId": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "account": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "video": {
        "id": {},
        "uuid": {},
        "name": "What is PeerTube?",
        "state": {
          "id": 1,
          "label": "string"
        }
      },
      "automaticTags": [
        "string"
      ]
    }
  ]
}
```

<h3 id="list-instance-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-instance-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[VideoCommentForOwnerOrAdmin](#schemavideocommentforowneroradmin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Reply to a thread of a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/comments/42 \
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
|x-peertube-video-password|header|string|false|Required on password protected video|
|body|body|object|false|none|
|» text|body|object(markdown)|true|none|

> Example responses

> 200 Response

```json
{
  "comment": {
    "id": 42,
    "url": "http://example.com",
    "text": "This video is wonderful!",
    "threadId": 42,
    "inReplyToCommentId": {},
    "videoId": {},
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "isDeleted": false,
    "heldForReview": true,
    "totalRepliesFromVideoAuthor": 0,
    "totalReplies": 0,
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    }
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
curl https://peertube.example.com/api/v1/videos/42/comments/42 \
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

## Approve a comment

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/comments/42/approve \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/{id}/comments/{commentId}/approve`

**PeerTube >= 6.2** Approve a comment that requires a review

<h3 id="approve-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|commentId|path|[id](#schemaid)|true|The comment id|

<h3 id="approve-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-video-blocks">Video Blocks</h1>

Operations dealing with blocking videos (removing them from view and preventing interactions).

## Update a video block

<a id="opIdupdateVideoBlock"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/blacklist \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string",
    "internalNote": "string"
  }'
```

`PUT /api/v1/videos/{id}/blacklist`

> Body parameter

```json
{
  "reason": "string",
  "internalNote": "string"
}
```

<h3 id="update-a-video-block-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[VideoBlacklistUpdate](#schemavideoblacklistupdate)|false|none|
|» reason|body|string|false|Reason for the block (displayed publicly)|
|» internalNote|body|string|false|Internal note for moderators/admins|

<h3 id="update-a-video-block-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|block not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Block a video

<a id="opIdaddVideoBlock"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/blacklist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string",
    "unfederate": true,
    "internalNote": "string"
  }'
```

`POST /api/v1/videos/{id}/blacklist`

> Body parameter

```json
{
  "reason": "string",
  "unfederate": true,
  "internalNote": "string"
}
```

<h3 id="block-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[VideoBlacklistCreate](#schemavideoblacklistcreate)|false|none|
|» reason|body|string|false|Reason for the block (public)|
|» unfederate|body|boolean|false|Whether to unfederate the video|
|» internalNote|body|string|false|Internal note for moderators/admins|

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
curl https://peertube.example.com/api/v1/videos/42/blacklist \
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

## List video blocks

<a id="opIdgetVideoBlocks"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/blacklist \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "reason": "string",
      "internalNote": "string",
      "unfederated": true,
      "type": 0,
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "isLive": true,
        "liveSchedules": [
          {
            "startAt": "1970-01-01T00:00:00Z"
          }
        ],
        "createdAt": "2017-10-01T10:52:46.396Z",
        "publishedAt": "2018-10-01T10:52:46.396Z",
        "updatedAt": "2021-05-04T08:01:01.502Z",
        "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
        "category": {
          "id": 15,
          "label": "Science & Technology"
        },
        "licence": {
          "id": 2,
          "label": "Attribution - Share Alike"
        },
        "language": {
          "id": "en",
          "label": "English"
        },
        "privacy": {
          "id": 1,
          "label": "string"
        },
        "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
        "duration": 1419,
        "aspectRatio": 1.778,
        "isLocal": true,
        "name": "What is PeerTube?",
        "thumbnailPath": "string",
        "previewPath": "string",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
        "views": 1337,
        "likes": 42,
        "dislikes": 7,
        "comments": 0,
        "nsfw": true,
        "nsfwFlags": {},
        "nsfwSummary": "string",
        "aiUsage": {
          "id": 1,
          "label": "string"
        },
        "commercialContent": {
          "id": 1,
          "label": "string"
        },
        "recommendationScope": {
          "id": 1,
          "label": "string"
        },
        "waitTranscoding": true,
        "state": {
          "id": 1,
          "label": "string"
        },
        "scheduledUpdate": {
          "privacy": 1,
          "updateAt": "1970-01-01T00:00:00Z"
        },
        "blacklisted": true,
        "blacklistedReason": "string",
        "account": {
          "id": 0,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "userHistory": {
          "currentTime": 0
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
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
|total|integer|false|none|none|
|data|[[VideoBlacklist](#schemavideoblacklist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

<h1 id="peertube-automatic-tags">Automatic Tags</h1>

Automatic tags set on objects (like comments or videos) by specific rules (external link, watched words, etc.)

## Get account auto tag policies on comments

> Code samples

```bash
curl https://peertube.example.com/api/v1/automatic-tags/policies/accounts/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/automatic-tags/policies/accounts/{accountName}/comments`

**PeerTube >= 6.2**

<h3 id="get-account-auto-tag-policies-on-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account name to get auto tag policies|

> Example responses

> 200 Response

```json
{
  "review": [
    "string"
  ]
}
```

<h3 id="get-account-auto-tag-policies-on-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CommentAutoTagPolicies](#schemacommentautotagpolicies)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update account auto tag policies on comments

> Code samples

```bash
curl https://peertube.example.com/api/v1/automatic-tags/policies/accounts/string/comments \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "review": [
      "string"
    ]
  }'
```

`PUT /api/v1/automatic-tags/policies/accounts/{accountName}/comments`

**PeerTube >= 6.2**

> Body parameter

```json
{
  "review": [
    "string"
  ]
}
```

<h3 id="update-account-auto-tag-policies-on-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account name to update auto tag policies|
|body|body|object|false|none|
|» review|body|[string]|false|Auto tags that automatically set the comment in review state|

<h3 id="update-account-auto-tag-policies-on-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get account available auto tags

> Code samples

```bash
curl https://peertube.example.com/api/v1/automatic-tags/accounts/string/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/automatic-tags/accounts/{accountName}/available`

**PeerTube >= 6.2**

<h3 id="get-account-available-auto-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account name to get auto tag policies|

> Example responses

> 200 Response

```json
{
  "available": [
    {
      "name": "string",
      "type": "core"
    }
  ]
}
```

<h3 id="get-account-available-auto-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AutomaticTagAvailable](#schemaautomatictagavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get server available auto tags

> Code samples

```bash
curl https://peertube.example.com/api/v1/automatic-tags/server/available \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/automatic-tags/server/available`

**PeerTube >= 6.2**

> Example responses

> 200 Response

```json
{
  "available": [
    {
      "name": "string",
      "type": "core"
    }
  ]
}
```

<h3 id="get-server-available-auto-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AutomaticTagAvailable](#schemaautomatictagavailable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Get server auto tag policies for videos

> Code samples

```bash
curl https://peertube.example.com/api/v1/automatic-tags/policies/server/videos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/automatic-tags/policies/server/videos`

**PeerTube >= 8.3**

> Example responses

> 200 Response

```json
{
  "autoBlock": [
    "string"
  ]
}
```

<h3 id="get-server-auto-tag-policies-for-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoAutoTagPolicies](#schemavideoautotagpolicies)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Update server auto tag policies for videos

> Code samples

```bash
curl https://peertube.example.com/api/v1/automatic-tags/policies/server/videos \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autoBlock": [
      "string"
    ]
  }'
```

`PUT /api/v1/automatic-tags/policies/server/videos`

**PeerTube >= 8.3**

> Body parameter

```json
{
  "autoBlock": [
    "string"
  ]
}
```

<h3 id="update-server-auto-tag-policies-for-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» autoBlock|body|[string]|false|Auto tags that will automatically block videos matching these tags|

<h3 id="update-server-auto-tag-policies-for-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

<h1 id="peertube-watched-words">Watched Words</h1>

Manage list of watched words to detect patterns on objects (like comments of videos)

## List account watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/watched-words/accounts/{accountName}/lists`

**PeerTube >= 6.2**

<h3 id="list-account-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account name to list watched words|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "listName": "string",
      "words": [
        "string"
      ],
      "subscriptionUrl": "http://example.com",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "createdAt": "2021-05-04T08:01:01.502Z"
    }
  ]
}
```

<h3 id="list-account-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-account-watched-words-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[WatchedWordsLists](#schemawatchedwordslists)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Add account watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "listName": "string",
    "words": [
      "string"
    ]
  }'
```

`POST /api/v1/watched-words/accounts/{accountName}/lists`

**PeerTube >= 6.2**

> Body parameter

```json
{
  "listName": "string",
  "words": [
    "string"
  ]
}
```

<h3 id="add-account-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|none|
|body|body|object|false|none|
|» listName|body|string|false|none|
|» words|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "watchedWordsList": {
    "id": 0
  }
}
```

<h3 id="add-account-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="add-account-watched-words-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|watchedWordsList|object|false|none|none|
|» id|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update account watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/lists/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "listName": "string",
    "words": [
      "string"
    ]
  }'
```

`PUT /api/v1/watched-words/accounts/{accountName}/lists/{listId}`

**PeerTube >= 6.2**

> Body parameter

```json
{
  "listName": "string",
  "words": [
    "string"
  ]
}
```

<h3 id="update-account-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|none|
|listId|path|string|true|list of watched words to update|
|body|body|object|false|none|
|» listName|body|string|false|none|
|» words|body|[string]|false|none|

<h3 id="update-account-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete account watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/lists/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/watched-words/accounts/{accountName}/lists/{listId}`

**PeerTube >= 6.2**

<h3 id="delete-account-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|none|
|listId|path|string|true|list of watched words to delete|

<h3 id="delete-account-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List server watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/watched-words/server/lists`

**PeerTube >= 6.2**

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "listName": "string",
      "words": [
        "string"
      ],
      "subscriptionUrl": "http://example.com",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "createdAt": "2021-05-04T08:01:01.502Z"
    }
  ]
}
```

<h3 id="list-server-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-server-watched-words-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[WatchedWordsLists](#schemawatchedwordslists)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Add server watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "listName": "string",
    "words": [
      "string"
    ]
  }'
```

`POST /api/v1/watched-words/server/lists`

**PeerTube >= 6.2**

> Body parameter

```json
{
  "listName": "string",
  "words": [
    "string"
  ]
}
```

<h3 id="add-server-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» listName|body|string|false|none|
|» words|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "watchedWordsList": {
    "id": 0
  }
}
```

<h3 id="add-server-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="add-server-watched-words-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|watchedWordsList|object|false|none|none|
|» id|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Update server watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/lists/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "listName": "string",
    "words": [
      "string"
    ]
  }'
```

`PUT /api/v1/watched-words/server/lists/{listId}`

**PeerTube >= 6.2**

> Body parameter

```json
{
  "listName": "string",
  "words": [
    "string"
  ]
}
```

<h3 id="update-server-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|list of watched words to update|
|body|body|object|false|none|
|» listName|body|string|false|none|
|» words|body|[string]|false|none|

<h3 id="update-server-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Delete server watched words

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/lists/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/watched-words/server/lists/{listId}`

**PeerTube >= 6.2**

<h3 id="delete-server-watched-words-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|list of watched words to delete|

<h3 id="delete-server-watched-words-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## List account watched words subscriptions

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/watched-words/accounts/{accountName}/subscriptions`

<h3 id="list-account-watched-words-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account name to list watched words subscriptions|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "name": "string",
      "url": "http://example.com",
      "importedWordsCount": 0,
      "lastSyncAt": "2021-05-04T08:01:01.502Z",
      "state": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "createdAt": "2021-05-04T08:01:01.502Z"
    }
  ]
}
```

<h3 id="list-account-watched-words-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-account-watched-words-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[WatchedWordsSubscription](#schemawatchedwordssubscription)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Add account watched words subscription

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /api/v1/watched-words/accounts/{accountName}/subscriptions`

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="add-account-watched-words-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|none|
|body|body|object|false|none|
|» url|body|string(url)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 42,
  "name": "string",
  "url": "http://example.com",
  "importedWordsCount": 0,
  "lastSyncAt": "2021-05-04T08:01:01.502Z",
  "state": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "createdAt": "2021-05-04T08:01:01.502Z"
}
```

<h3 id="add-account-watched-words-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[WatchedWordsSubscription](#schemawatchedwordssubscription)|
|400|Bad Request|cannot fetch or parse watched words URL|None|
|409|Conflict|subscription already exists or watched words list with fetched name already exists|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete account watched words subscription

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/accounts/string/subscriptions/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/watched-words/accounts/{accountName}/subscriptions/{id}`

<h3 id="delete-account-watched-words-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|none|
|id|path|integer|true|none|

<h3 id="delete-account-watched-words-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|watched words subscription does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List server watched words subscriptions

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/watched-words/server/subscriptions`

<h3 id="list-server-watched-words-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "name": "string",
      "url": "http://example.com",
      "importedWordsCount": 0,
      "lastSyncAt": "2021-05-04T08:01:01.502Z",
      "state": {
        "id": 1,
        "label": "string"
      },
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "createdAt": "2021-05-04T08:01:01.502Z"
    }
  ]
}
```

<h3 id="list-server-watched-words-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-server-watched-words-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[WatchedWordsSubscription](#schemawatchedwordssubscription)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Add server watched words subscription

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /api/v1/watched-words/server/subscriptions`

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="add-server-watched-words-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string(url)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 42,
  "name": "string",
  "url": "http://example.com",
  "importedWordsCount": 0,
  "lastSyncAt": "2021-05-04T08:01:01.502Z",
  "state": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "createdAt": "2021-05-04T08:01:01.502Z"
}
```

<h3 id="add-server-watched-words-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[WatchedWordsSubscription](#schemawatchedwordssubscription)|
|400|Bad Request|cannot fetch or parse watched words URL|None|
|409|Conflict|subscription already exists or watched words list with fetched name already exists|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

## Delete server watched words subscription

> Code samples

```bash
curl https://peertube.example.com/api/v1/watched-words/server/subscriptions/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/watched-words/server/subscriptions/{id}`

<h3 id="delete-server-watched-words-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-server-watched-words-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|watched words subscription does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin moderator )
</aside>

<h1 id="peertube-video-rates">Video Rates</h1>

Like/dislike a video.

## Like/dislike a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/rate \
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
|x-peertube-video-password|header|string|false|Required on password protected video|
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

## List playlists of a channel

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/video-playlists \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "shortUUID": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "isLocal": true,
      "videoLength": 0,
      "thumbnailPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "type": {
        "id": 1,
        "label": "string"
      },
      "ownerAccount": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannelPosition": 1
    }
  ]
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
|total|integer|false|none|none|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reorder channel playlists

<a id="opIdreorderVideoPlaylistsOfChannel"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/video-playlists/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "startPosition": 1,
    "insertAfterPosition": 0,
    "reorderLength": 1
  }'
```

`POST /api/v1/video-channels/{channelHandle}/video-playlists/reorder`

> Body parameter

```json
{
  "startPosition": 1,
  "insertAfterPosition": 0,
  "reorderLength": 1
}
```

<h3 id="reorder-channel-playlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|object|false|none|
|» startPosition|body|integer|true|Start position of the element to reorder|
|» insertAfterPosition|body|integer|true|New position for the block to reorder, to add the block before the first element|
|» reorderLength|body|integer|false|How many element from `startPosition` to reorder|

<h3 id="reorder-channel-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List available playlist privacy policies

<a id="opIdgetPlaylistPrivacyPolicies"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-playlists/privacies \
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

## List video playlists

<a id="opIdgetPlaylists"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-playlists \
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
  "total": 1,
  "data": [
    {
      "id": 42,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "shortUUID": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "isLocal": true,
      "videoLength": 0,
      "thumbnailPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "type": {
        "id": 1,
        "label": "string"
      },
      "ownerAccount": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannelPosition": 1
    }
  ]
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
|total|integer|false|none|none|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a video playlist

<a id="opIdaddPlaylist"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-playlists \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'displayName=string' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'privacy=1' \
  -F 'description=string' \
  -F 'videoChannelId={}'
```

`POST /api/v1/video-playlists`

If the video playlist is set as public, `videoChannelId` is mandatory.

> Body parameter

```yaml
displayName: string
thumbnailfile: string
privacy: 1
description: string
videoChannelId: {}
```

<h3 id="create-a-video-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» displayName|body|string|true|Video playlist display name|
|» thumbnailfile|body|string(binary)|false|Video playlist thumbnail file|
|» privacy|body|[VideoPlaylistPrivacySet](#schemavideoplaylistprivacyset)|false|Video playlist privacy policy (see [/video-playlists/privacies](#operation/getPlaylistPrivacyPolicies))|
|» description|body|string|false|Video playlist description|
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
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
    "shortUUID": {}
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
|» uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|» shortUUID|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a video playlist

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-playlists/42 \
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
  "id": 42,
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "shortUUID": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "isLocal": true,
  "videoLength": 0,
  "thumbnailPath": "string",
  "thumbnails": [
    {
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "aspectRatio": "16:9"
    }
  ],
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "type": {
    "id": 1,
    "label": "string"
  },
  "ownerAccount": {
    "id": 0,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "videoChannel": {
    "id": 42,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "videoChannelPosition": 1
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
curl https://peertube.example.com/api/v1/video-playlists/42 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'displayName=string' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'privacy=1' \
  -F 'description=string' \
  -F 'videoChannelId={}'
```

`PUT /api/v1/video-playlists/{playlistId}`

If the video playlist is set as public, the playlist must have a assigned channel.

> Body parameter

```yaml
displayName: string
thumbnailfile: string
privacy: 1
description: string
videoChannelId: {}
```

<h3 id="update-a-video-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|body|body|object|false|none|
|» displayName|body|string|false|Video playlist display name|
|» thumbnailfile|body|string(binary)|false|Video playlist thumbnail file|
|» privacy|body|[VideoPlaylistPrivacySet](#schemavideoplaylistprivacyset)|false|Video playlist privacy policy (see [/video-playlists/privacies](#operation/getPlaylistPrivacyPolicies))|
|» description|body|string|false|Video playlist description|
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
curl https://peertube.example.com/api/v1/video-playlists/42 \
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

## Reorder playlist elements

<a id="opIdreorderVideoPlaylist"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-playlists/42/videos/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "startPosition": 1,
    "insertAfterPosition": 0,
    "reorderLength": 1
  }'
```

`POST /api/v1/video-playlists/{playlistId}/videos/reorder`

> Body parameter

```json
{
  "startPosition": 1,
  "insertAfterPosition": 0,
  "reorderLength": 1
}
```

<h3 id="reorder-playlist-elements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|body|body|object|false|none|
|» startPosition|body|integer|true|Start position of the element to reorder|
|» insertAfterPosition|body|integer|true|New position for the block to reorder, to add the block before the first element|
|» reorderLength|body|integer|false|How many element from `startPosition` to reorder|

<h3 id="reorder-playlist-elements-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/video-playlists/42/videos/42 \
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
curl https://peertube.example.com/api/v1/video-playlists/42/videos/42 \
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

## Check video exists in my playlists

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/users/me/video-playlists/videos-exist?videoIds=%7B%7D' \
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
|» startTimestamp|integer(seconds) \| null|false|none|none|
|» stopTimestamp|integer(seconds) \| null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List playlists of an account

> Code samples

```bash
curl https://peertube.example.com/api/v1/accounts/chocobozzz%20%7C%20chocobozzz%40example.org/video-playlists \
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
|includeCollaborations|query|boolean|false|**PeerTube >= 8.0** Include objects from collaborated channels|
|channelNameOneOf|query|string \| [string]|false|**PeerTube >= 8.0** Filter on playlists that are published on a channel with one of these names|

#### Enumerated Values

|Parameter|Value|
|---|---|
|playlistType|1|
|playlistType|2|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "shortUUID": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "isLocal": true,
      "videoLength": 0,
      "thumbnailPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "type": {
        "id": 1,
        "label": "string"
      },
      "ownerAccount": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannelPosition": 1
    }
  ]
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
|total|integer|false|none|none|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-video-files">Video Files</h1>

Operations on video files

## Delete video HLS files

<a id="opIddelVideoHLS"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/hls \
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

## Delete video Web Video files

<a id="opIddelVideoWebVideos"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/web-videos \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/web-videos`

**PeerTube >= 6.0**

<h3 id="delete-video-web-video-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-video-web-video-files-responses">Responses</h3>

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
curl https://peertube.example.com/api/v1/videos/42/studio/edit \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/videos/{id}/studio/edit`

Create a task to edit a video  (cut, add intro/outro etc)

> Body parameter

```yaml
-
  name: cut
  options:
    start: 0
    end: 0
```

<h3 id="create-a-studio-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[VideoStudioCreateTask](#schemavideostudiocreatetask)|true|none|
|» *anyOf*|body|object|false|none|
|» name|body|string|false|none|
|» options|body|object|false|none|
|» » start|body|integer|false|none|
|» » end|body|integer|false|none|
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
|» *anyOf*|body|object|false|none|
|» name|body|string|false|none|
|» options|body|object|false|none|
|» » segments|body|[object]|true|none|
|» » » start|body|integer|true|none|
|» » » end|body|integer|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» name|cut|
|» name|add-intro|
|» name|add-outro|
|» name|add-watermark|
|» name|remove-segments|

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
curl https://peertube.example.com/api/v1/videos/42/transcoding \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transcodingType": "hls",
    "forceTranscoding": false
  }'
```

`POST /api/v1/videos/{id}/transcoding`

> Body parameter

```json
{
  "transcodingType": "hls",
  "forceTranscoding": false
}
```

<h3 id="create-a-transcoding-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» transcodingType|body|string|true|none|
|» forceTranscoding|body|boolean|false|If the video is stuck in transcoding state, do it anyway|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» transcodingType|hls|
|» transcodingType|web-video|

<h3 id="create-a-transcoding-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|video does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-video-stats">Video Stats</h1>

Video statistics

## Get overall stats of a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/stats/overall \
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
  "totalWatchTime": 0,
  "viewersPeak": 0,
  "totalViewers": 0,
  "viewersPeakDate": "1970-01-01T00:00:00Z",
  "countries": [
    {
      "isoCode": "string",
      "viewers": 0
    }
  ],
  "subdivisions": [
    {
      "name": "string",
      "viewers": 0
    }
  ]
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

## Get user agent stats of a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/stats/user-agent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/stats/user-agent`

<h3 id="get-user-agent-stats-of-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|startDate|query|string(date-time)|false|Filter stats by start date|
|endDate|query|string(date-time)|false|Filter stats by end date|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "name": "string",
      "viewers": 0
    }
  ],
  "devices": [
    {
      "name": "console",
      "viewers": 0
    }
  ],
  "operatingSystem": [
    {
      "name": "string",
      "viewers": 0
    }
  ]
}
```

<h3 id="get-user-agent-stats-of-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoStatsUserAgent](#schemavideostatsuseragent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get retention stats of a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/stats/retention \
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
      "second": 0,
      "retentionPercent": 0
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
curl https://peertube.example.com/api/v1/videos/42/stats/timeseries/viewers \
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

<h1 id="peertube-video-feeds">Video Feeds</h1>

Server syndication feeds of videos

## Comments on videos feeds

<a id="opIdgetSyndicatedComments"></a>

> Code samples

```bash
curl https://peertube.example.com/feeds/video-comments.xml \
  -H 'Accept: application/json'
```

`GET /feeds/video-comments.{format}`

<h3 id="comments-on-videos-feeds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|format expected (we focus on making `rss` the most feature-rich ; it serves [Media RSS](https://www.rssboard.org/media-rss))|
|videoId|query|string|false|limit listing comments to a specific video|
|accountId|query|string|false|limit listing comments to videos of a specific account|
|accountName|query|string|false|limit listing comments to videos of a specific account|
|videoChannelId|query|string|false|limit listing comments to videos of a specific video channel|
|videoChannelName|query|string|false|limit listing comments to videos of a specific video channel|
|isLocal|query|boolean|false|**PeerTube >= 9.0** Display only comments of local or remote accounts|
|onLocalVideo|query|boolean|false|**PeerTube >= 9.0** Display only comments of local or remote videos|

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

> 200 Response

```json
{}
```

<h3 id="comments-on-videos-feeds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Arises when:<br>  - videoId filter is mixed with a channel filter<br>|None|
|404|Not Found|video, video channel or account not found|None|
|406|Not Acceptable|accept header unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Common videos feeds

<a id="opIdgetSyndicatedVideos"></a>

> Code samples

```bash
curl https://peertube.example.com/feeds/videos.xml \
  -H 'Accept: application/json'
```

`GET /feeds/videos.{format}`

<h3 id="common-videos-feeds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|format expected (we focus on making `rss` the most feature-rich ; it serves [Media RSS](https://www.rssboard.org/media-rss))|
|accountId|query|string|false|limit listing to a specific account|
|accountName|query|string|false|limit listing to a specific account|
|videoChannelId|query|string|false|limit listing to a specific video channel|
|videoChannelName|query|string|false|limit listing to a specific video channel|
|sort|query|string|false|Sort column|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|

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
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{}
```

<h3 id="common-videos-feeds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|404|Not Found|video channel or account not found|None|
|406|Not Acceptable|accept header unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Videos of subscriptions feeds

<a id="opIdgetSyndicatedSubscriptionVideos"></a>

> Code samples

```bash
curl 'https://peertube.example.com/feeds/subscriptions.xml?accountId=string&token=string' \
  -H 'Accept: application/json'
```

`GET /feeds/subscriptions.{format}`

<h3 id="videos-of-subscriptions-feeds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|format expected (we focus on making `rss` the most feature-rich ; it serves [Media RSS](https://www.rssboard.org/media-rss))|
|accountId|query|string|true|limit listing to a specific account|
|token|query|string|true|private token allowing access|
|sort|query|string|false|Sort column|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|

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
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{}
```

<h3 id="videos-of-subscriptions-feeds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|406|Not Acceptable|accept header unsupported|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Videos podcast feed

<a id="opIdgetVideosPodcastFeed"></a>

> Code samples

```bash
curl https://peertube.example.com/feeds/podcast/videos.xml
```

`GET /feeds/podcast/videos.xml`

<h3 id="videos-podcast-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoChannelId|query|string|false|Limit listing to a specific video channel|
|playlistId|query|string|false|Limit listing to a specific video playlist|
|enclosurePreference|query|string|false|Filter enclosures by type (video-only or audio-only)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|enclosurePreference|video-only|
|enclosurePreference|audio-only|

<h3 id="videos-podcast-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|404|Not Found|video channel or playlist not found|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-video-download">Video Download</h1>

Download video files

## Download video file

> Code samples

```bash
curl 'https://peertube.example.com/download/videos/generate/42?videoFileIds=0'
```

`GET /download/videos/generate/{videoIdOrUUID}`

Generate a mp4 container that contains at most 1 video stream and at most 1 audio stream. Mainly used to merge the HLS audio only video file and the HLS video only resolution file.

<h3 id="download-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|videoFileIds|query|[integer]|true|streams of video files to mux in the output|
|videoFileToken|query|string|false|Video file token [generated](#operation/requestVideoToken) by PeerTube so you don't need to provide an OAuth token in the request header.|

<h3 id="download-video-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-logs">Logs</h1>

Operations dealing with client, server and audit logs.

## Send client log

<a id="opIdsendClientLog"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/logs/client \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "message": "string",
    "url": "string",
    "level": "error",
    "stackTrace": "string",
    "userAgent": "string",
    "meta": "string"
  }'
```

`POST /api/v1/server/logs/client`

> Body parameter

```json
{
  "message": "string",
  "url": "string",
  "level": "error",
  "stackTrace": "string",
  "userAgent": "string",
  "meta": "string"
}
```

<h3 id="send-client-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendClientLog](#schemasendclientlog)|false|none|
|» message|body|string|true|none|
|» url|body|string|true|URL of the current user page|
|» level|body|string|true|none|
|» stackTrace|body|string|false|Stack trace of the error if there is one|
|» userAgent|body|string|false|User agent of the web browser that sends the message|
|» meta|body|string|false|Additional information regarding this log|

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

## Get instance logs

<a id="opIdgetInstanceLogs"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/logs \
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

## Get instance audit logs

<a id="opIdgetInstanceAuditLogs"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/audit-logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/audit-logs`

User, administration and moderation actions recorded by all the PeerTube processes of the instance.

By default (`format=array`), returns an array of at most the 10,000 most recent entries of the requested date range, oldest first.
`startDate` is then required and pagination parameters are ignored.

With `format=list`, returns a paginated list.


<h3 id="get-instance-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|
|search|query|string|false|Search in usernames, IP addresses and audited entities|
|entityType|query|[AuditLogEntityType](#schemaauditlogentitytype)|false|none|
|entityId|query|integer|false|none|
|action|query|[AuditLogAction](#schemaauditlogaction)|false|none|
|startDate|query|string(date-time)|false|Required with the default `array` format|
|endDate|query|string(date-time)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|array|
|format|list|
|sort|-createdAt|
|sort|createdAt|
|entityType|video|
|entityType|video-import|
|entityType|video-live|
|entityType|video-source|
|entityType|video-file|
|entityType|video-caption|
|entityType|video-chapters|
|entityType|video-password|
|entityType|video-embed-privacy|
|entityType|video-transcoding|
|entityType|video-transcription|
|entityType|video-studio-edition|
|entityType|video-player-settings|
|entityType|ownership-change|
|entityType|comment|
|entityType|channel|
|entityType|channel-sync|
|entityType|channel-videos-import|
|entityType|channel-collaborator|
|entityType|channel-player-settings|
|entityType|channel-playlists-order|
|entityType|playlist|
|entityType|playlist-element|
|entityType|playlist-elements-order|
|entityType|user|
|entityType|registration|
|entityType|password-reset|
|entityType|token-session|
|entityType|failed-login|
|entityType|scoped-token|
|entityType|user-export|
|entityType|user-import|
|entityType|abuse|
|entityType|abuse-message|
|entityType|video-block|
|entityType|account-block|
|entityType|server-block|
|entityType|blocklist-subscription|
|entityType|watched-words-list|
|entityType|watched-words-subscription|
|entityType|automatic-tag-policy|
|entityType|config|
|entityType|instance-image|
|entityType|instance-homepage|
|entityType|instance-host|
|entityType|plugin|
|entityType|follow|
|entityType|server-redundancy|
|entityType|video-redundancy|
|entityType|job-queue|
|entityType|job|
|entityType|runner|
|entityType|runner-registration-token|
|entityType|debug-command|
|entityType|storage-prune|
|action|create|
|action|update|
|action|delete|

> Example responses

> 200 Response

```json
[
  {
    "id": 42,
    "action": "create",
    "entityType": "video",
    "entityId": 0,
    "user": {
      "id": 0,
      "username": "string"
    },
    "ip": "string",
    "entity": {},
    "changes": {
      "property1": {
        "old": null,
        "new": null
      },
      "property2": {
        "old": null,
        "new": null
      }
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "timestamp": "1970-01-01T00:00:00Z",
    "level": "audit",
    "message": "string"
  }
]
```

<h3 id="get-instance-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|audit log is disabled|None|

<h3 id="get-instance-audit-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[[AuditLog](#schemaauditlog)]|false|none|Default `array` format|
|*anonymous*|[[AuditLog](#schemaauditlog)]|false|none|none|
|*oneOf*|object|false|none|`list` format|
|total|integer|false|none|none|
|data|[[AuditLog](#schemaauditlog)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-search">Search</h1>

The search helps to find _videos_ or _channels_ from within the instance and beyond.
Videos from other instances federated by the instance (that is, instances
followed by the instance) can be found via keywords and other criteria of
the advanced search.

Administrators can also enable the use of a remote search system, indexing
videos and channels that may not be federated by the instance.


## Search videos

<a id="opIdsearchVideos"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/search/videos?search=string' \
  -H 'Accept: application/json'
```

`GET /api/v1/search/videos`

<h3 id="search-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete video information and interact with it.<br>|
|uuids|query|[string]|false|Find elements with specific UUIDs|
|searchTarget|query|string|false|If the administrator enabled search index support, you can override the default search target.<br><br>**Warning**: If you choose to make an index search, PeerTube will get results from a third party service. It means the instance may not yet know the objects you fetched. If you want to load video/channel information:<br>  * If the current user has the ability to make a remote URI search (this information is available in the config endpoint),<br>  then reuse the search API to make a search using the object URI so PeerTube instance fetches the remote object and fill its database.<br>  After that, you can use the classic REST API endpoints to fetch the complete object or interact with it<br>  * If the current user doesn't have the ability to make a remote URI search, then redirect the user on the origin instance or fetch<br>  the data from the origin instance API<br>|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|skipCount|query|string|false|if you don't need the `total` in the response|
|sort|query|string|false|none|
|nsfw|query|string|false|whether to include nsfw videos, if any|
|nsfwFlagsIncluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|nsfwFlagsExcluded|query|[NSFWFlag](#schemansfwflag)|false|none|
|aiUsageOneOf|query|[VideoAIUsageSet](#schemavideoaiusageset) \| [[VideoAIUsageSet](#schemavideoaiusageset)]|false|**PeerTube >= 9.0** Only list videos with one of these AI usages, declared by video creators.<br>If not provided, the preference of the authenticated user (`aiUsagesHidden`) is used<br>|
|isLive|query|boolean|false|whether or not the video is a live|
|includeScheduledLive|query|boolean|false|whether or not include live that are scheduled for later|
|categoryOneOf|query|[VideoCategorySet](#schemavideocategoryset) \| [[VideoCategorySet](#schemavideocategoryset)]|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|licenceOneOf|query|[VideoLicenceSet](#schemavideolicenceset) \| [[VideoLicenceSet](#schemavideolicenceset)]|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|languageOneOf|query|[VideoLanguageSet](#schemavideolanguageset) \| [[VideoLanguageSet](#schemavideolanguageset)]|false|language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language|
|tagsOneOf|query|string \| [string]|false|tag(s) of the video|
|tagsAllOf|query|string \| [string]|false|tag(s) of the video, where all should be present in the video|
|isLocal|query|boolean|false|**PeerTube >= 4.0** Display only local or remote objects|
|include|query|integer|false|**Only administrators and moderators can use this parameter**<br><br>Include additional videos in results (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` NOT_PUBLISHED_STATE<br>- `2` BLACKLISTED<br>- `4` BLOCKED_OWNER<br>- `8` FILES<br>- `16` CAPTIONS<br>- `32` VIDEO SOURCE<br>|
|hasHLSFiles|query|boolean|false|**PeerTube >= 4.0** Display only videos that have HLS files|
|hasWebVideoFiles|query|boolean|false|**PeerTube >= 6.0** Display only videos that have Web Video files|
|host|query|string|false|Find elements owned by this host|
|autoTagOneOf|query|string \| [string]|false|**PeerTube >= 6.2** **Admins and moderators only** filter on videos that contain one of these automatic tags|
|stateOneOf|query|integer \| [integer]|false|**PeerTube >= 8.2** **Admins and moderators only** filter on videos that have one of these states|
|privacyOneOf|query|[VideoPrivacySet](#schemavideoprivacyset)|false|**PeerTube >= 4.0** Display only videos in this specific privacy/privacies|
|excludeAlreadyWatched|query|boolean|false|Whether or not to exclude videos that are in the user's video history|
|startDate|query|string(date-time)|false|Get videos that are published after this date|
|endDate|query|string(date-time)|false|Get videos that are published before this date|
|originallyPublishedStartDate|query|string(date-time)|false|Get videos that are originally published after this date|
|originallyPublishedEndDate|query|string(date-time)|false|Get videos that are originally published before this date|
|durationMin|query|integer|false|Get videos that have this minimum duration|
|durationMax|query|integer|false|Get videos that have this maximum duration|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchTarget|local|
|searchTarget|search-index|
|skipCount|true|
|skipCount|false|
|sort|name|
|sort|-duration|
|sort|-createdAt|
|sort|-publishedAt|
|sort|-views|
|sort|-likes|
|sort|-comments|
|sort|-trending|
|sort|-hot|
|sort|-best|
|nsfw|true|
|nsfw|false|
|nsfwFlagsIncluded|0|
|nsfwFlagsIncluded|1|
|nsfwFlagsIncluded|2|
|nsfwFlagsIncluded|4|
|nsfwFlagsExcluded|0|
|nsfwFlagsExcluded|1|
|nsfwFlagsExcluded|2|
|nsfwFlagsExcluded|4|
|include|0|
|include|1|
|include|2|
|include|4|
|include|8|
|include|16|
|include|32|
|privacyOneOf|1|
|privacyOneOf|2|
|privacyOneOf|3|
|privacyOneOf|4|
|privacyOneOf|5|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

<h3 id="search-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoListResponse](#schemavideolistresponse)|
|500|Internal Server Error|search index unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search channels

<a id="opIdsearchChannels"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/search/video-channels?search=string' \
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
|host|query|string|false|Find elements owned by this host|
|handles|query|[string]|false|Find elements with these handles|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchTarget|local|
|searchTarget|search-index|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ]
}
```

<h3 id="search-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoChannelList](#schemavideochannellist)|
|500|Internal Server Error|search index unavailable|None|

<aside class="success">
This operation does not require authentication
</aside>

## Search playlists

<a id="opIdsearchPlaylists"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/search/video-playlists?search=string' \
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
|host|query|string|false|Find elements owned by this host|
|uuids|query|[string]|false|Find elements with specific UUIDs|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchTarget|local|
|searchTarget|search-index|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "shortUUID": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "displayName": "string",
      "isLocal": true,
      "videoLength": 0,
      "thumbnailPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "type": {
        "id": 1,
        "label": "string"
      },
      "ownerAccount": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "videoChannelPosition": 1
    }
  ]
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
|total|integer|false|none|none|
|data|[[VideoPlaylist](#schemavideoplaylist)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-homepage">Homepage</h1>

Get and update the custom homepage

## Get instance custom homepage

> Code samples

```bash
curl https://peertube.example.com/api/v1/custom-pages/homepage/instance \
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
curl https://peertube.example.com/api/v1/custom-pages/homepage/instance \
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
curl 'https://peertube.example.com/api/v1/server/redundancy/videos?target=my-videos' \
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
    "url": "http://example.com",
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
    "redundancies": {
      "streamingPlaylists": [
        {
          "id": 42,
          "fileUrl": "http://example.com",
          "strategy": "manual",
          "size": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "expiresOn": "1970-01-01T00:00:00Z"
        }
      ]
    }
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
curl https://peertube.example.com/api/v1/server/redundancy/videos \
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
curl https://peertube.example.com/api/v1/server/redundancy/videos/string \
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


## Get instance stats

<a id="opIdgetInstanceStats"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/stats \
  -H 'Accept: application/json'
```

`GET /api/v1/server/stats`

Get instance public statistics. This endpoint is cached.

> Example responses

> 200 Response

```json
{
  "totalUsers": 0,
  "totalDailyActiveUsers": 0,
  "totalWeeklyActiveUsers": 0,
  "totalMonthlyActiveUsers": 0,
  "totalModerators": 0,
  "totalAdmins": 0,
  "totalLocalVideos": 0,
  "totalLocalVideoViews": 0,
  "totalLocalVideoDownloads": 0,
  "totalLocalVideoComments": 0,
  "totalLocalVideoFilesSize": 0,
  "totalVideos": 0,
  "totalVideoComments": 0,
  "totalLocalVideoChannels": 0,
  "totalLocalDailyActiveVideoChannels": 0,
  "totalLocalWeeklyActiveVideoChannels": 0,
  "totalLocalMonthlyActiveVideoChannels": 0,
  "totalLocalPlaylists": 0,
  "totalInstanceFollowers": 0,
  "totalInstanceFollowing": 0,
  "videosRedundancy": [
    {
      "strategy": "string",
      "totalSize": 0,
      "totalUsed": 0,
      "totalVideoFiles": 0,
      "totalVideos": 0
    }
  ],
  "totalActivityPubMessagesProcessed": 0,
  "totalActivityPubMessagesSuccesses": 0,
  "totalActivityPubMessagesErrors": 0,
  "activityPubMessagesProcessedPerSecond": 0,
  "totalActivityPubMessagesWaiting": 0,
  "averageRegistrationRequestResponseTimeMs": 0,
  "totalRegistrationRequestsProcessed": 0,
  "totalRegistrationRequests": 0,
  "averageAbuseResponseTimeMs": 0,
  "totalAbusesProcessed": 0,
  "totalAbuses": 0
}
```

<h3 id="get-instance-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ServerStats](#schemaserverstats)|

<aside class="success">
This operation does not require authentication
</aside>

## Create playback metrics

> Code samples

```bash
curl https://peertube.example.com/api/v1/metrics/playback \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "playerMode": "p2p-media-loader",
    "resolution": 0,
    "fps": 0,
    "p2pEnabled": true,
    "p2pPeers": 0,
    "resolutionChanges": 0,
    "bufferStalled": 0,
    "errors": 0,
    "downloadedBytesP2P": 0,
    "downloadedBytesHTTP": 0,
    "uploadedBytesP2P": 0,
    "videoId": 42
  }'
```

`POST /api/v1/metrics/playback`

These metrics are exposed by OpenTelemetry metrics exporter if enabled.

> Body parameter

```json
{
  "playerMode": "p2p-media-loader",
  "resolution": 0,
  "fps": 0,
  "p2pEnabled": true,
  "p2pPeers": 0,
  "resolutionChanges": 0,
  "bufferStalled": 0,
  "errors": 0,
  "downloadedBytesP2P": 0,
  "downloadedBytesHTTP": 0,
  "uploadedBytesP2P": 0,
  "videoId": 42
}
```

<h3 id="create-playback-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PlaybackMetricCreate](#schemaplaybackmetriccreate)|false|none|
|» playerMode|body|string|true|none|
|» resolution|body|number|false|Current player video resolution|
|» fps|body|number|false|Current player video fps|
|» p2pEnabled|body|boolean|true|none|
|» p2pPeers|body|number|false|P2P peers connected (doesn't include WebSeed peers)|
|» resolutionChanges|body|number|true|How many resolution changes occurred since the last metric creation|
|» bufferStalled|body|number|false|How many times buffer has been stalled since the last metric creation|
|» errors|body|number|true|How many errors occurred since the last metric creation|
|» downloadedBytesP2P|body|number|true|How many bytes were downloaded with P2P since the last metric creation|
|» downloadedBytesHTTP|body|number|true|How many bytes were downloaded with HTTP since the last metric creation|
|» uploadedBytesP2P|body|number|true|How many bytes were uploaded with P2P since the last metric creation|
|» videoId|body|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|none|
|» » *oneOf*|body|[id](#schemaid)|false|none|
|» » *oneOf*|body|[UUIDv4](#schemauuidv4)|false|none|
|» » *oneOf*|body|[shortUUID](#schemashortuuid)|false|translation of a uuid v4 with a bigger alphabet to have a shorter uuid|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» playerMode|p2p-media-loader|
|» playerMode|web-video|

<h3 id="create-playback-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-contact">Contact</h1>

Send a message to the instance administrators.

## Contact the instance administrators

<a id="opIdcontactAdministrator"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/contact \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "fromName": "string",
    "fromEmail": "user@example.com",
    "subject": "string",
    "body": "string"
  }'
```

`POST /api/v1/server/contact`

> Body parameter

```json
{
  "fromName": "string",
  "fromEmail": "user@example.com",
  "subject": "string",
  "body": "string"
}
```

<h3 id="contact-the-instance-administrators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» fromName|body|string|true|Display name of the sender|
|» fromEmail|body|string(email)|true|Email address of the sender|
|» subject|body|string|false|Subject of the message|
|» body|body|string|true|Message body|

<h3 id="contact-the-instance-administrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|403|Forbidden|a contact form was already sent recently from this IP address|None|
|409|Conflict|contact form or SMTP is not configured on this instance|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-debug">Debug</h1>

Administrative debug endpoints.

## Get debug information

<a id="opIdgetDebug"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/debug \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/debug`

Retrieve internal debug information for administrators.

> Example responses

> 200 Response

```json
{
  "ip": "string",
  "activityPubMessagesWaiting": 0,
  "secondariesUp": 0,
  "processes": [
    {
      "id": "string",
      "role": "primary",
      "hostname": "string",
      "pid": 0,
      "version": "string",
      "startedAt": "1970-01-01T00:00:00Z",
      "lastSeenAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-debug-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="get-debug-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string|false|none|none|
|activityPubMessagesWaiting|integer|false|none|none|
|secondariesUp|integer|false|none|Number of secondary processes that recently sent a heartbeat|
|processes|[object]|false|none|Processes of the platform that recently sent a heartbeat, the primary first|
|» id|string|false|none|none|
|» role|string|false|none|none|
|» hostname|string|false|none|none|
|» pid|integer|false|none|none|
|» version|string|false|none|none|
|» startedAt|string(date-time)|false|none|When the process started to serve requests|
|» lastSeenAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» role|primary|
|» role|secondary|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Run a debug command

<a id="opIdrunDebugCommand"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/debug/run-command \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "command": "remove-dandling-resumable-uploads"
  }'
```

`POST /api/v1/server/debug/run-command`

Run an internal debug command as an administrator.

> Body parameter

```json
{
  "command": "remove-dandling-resumable-uploads"
}
```

<h3 id="run-a-debug-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» command|body|string|true|none|
|» *oneOf*|body|object|false|none|
|» command|body|string|true|none|
|» email|body|string(email)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» command|remove-dandling-resumable-uploads|
|» command|remove-expired-user-exports|
|» command|process-video-stats-buffer|
|» command|process-video-viewers|
|» command|process-update-videos-scheduler|
|» command|process-video-channel-sync-latest|
|» command|process-remove-old-stats|
|» command|process-video-files-lifecycle|
|» command|test-emails|

<h3 id="run-a-debug-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|invalid command or invalid email|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-runner-registration-token">Runner Registration Token</h1>

Manage runner registration tokens.


## Generate registration token

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/registration-tokens/generate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/runners/registration-tokens/generate`

Generate a new runner registration token

<h3 id="generate-registration-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Remove registration token

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/registration-tokens/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/runners/registration-tokens/{registrationTokenId}`

Remove a registration token. Runners that used this token for their registration are automatically removed.

<h3 id="remove-registration-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registrationTokenId|path|integer|true|none|

<h3 id="remove-registration-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List registration tokens

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/registration-tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/runners/registration-tokens`

<h3 id="list-registration-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort registration tokens by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 0,
      "registrationToken": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "registeredRunnersCount": 0
    }
  ]
}
```

<h3 id="list-registration-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-registration-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[RunnerRegistrationToken](#schemarunnerregistrationtoken)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-runner-jobs">Runner Jobs</h1>

Manage runner jobs and runner-side job execution.

## Request a new job

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "runnerToken": "string",
    "jobTypes": [
      "string"
    ]
  }'
```

`POST /api/v1/runners/jobs/request`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string",
  "jobTypes": [
    "string"
  ]
}
```

<h3 id="request-a-new-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|
|» jobTypes|body|[string]|false|Filter jobs depending on their types|

> Example responses

> 200 Response

```json
{
  "availableJobs": [
    {
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "type": "vod-web-video-transcoding",
      "payload": {
        "input": {
          "videoFileUrl": "string"
        },
        "output": {
          "resolution": 0,
          "fps": 0
        }
      }
    }
  ]
}
```

<h3 id="request-a-new-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="request-a-new-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableJobs|[object]|false|none|none|
|» uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|» type|[RunnerJobType](#schemarunnerjobtype)|false|none|none|
|» payload|[RunnerJobPayload](#schemarunnerjobpayload)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|vod-web-video-transcoding|
|» type|vod-hls-transcoding|
|» type|vod-audio-merge-transcoding|
|» type|live-rtmp-hls-transcoding|

<aside class="success">
This operation does not require authentication
</aside>

## Accept job

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "runnerToken": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/accept`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string"
}
```

<h3 id="accept-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "job": {
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
    "type": "vod-web-video-transcoding",
    "state": {
      "id": 1,
      "label": "Processing"
    },
    "payload": {
      "input": {
        "videoFileUrl": "string"
      },
      "output": {
        "resolution": 0,
        "fps": 0
      }
    },
    "failures": 0,
    "error": "string",
    "progress": 0,
    "priority": 0,
    "updatedAt": "1970-01-01T00:00:00Z",
    "createdAt": "1970-01-01T00:00:00Z",
    "startedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "parent": {
      "type": "vod-web-video-transcoding",
      "state": {
        "id": 1,
        "label": "Processing"
      },
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
    },
    "runner": {
      "id": 0,
      "name": "string",
      "description": "string"
    },
    "jobToken": "string"
  }
}
```

<h3 id="accept-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="accept-job-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|object|false|none|none|
|» uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|» type|[RunnerJobType](#schemarunnerjobtype)|false|none|none|
|» state|[RunnerJobStateConstant](#schemarunnerjobstateconstant)|false|none|none|
|» payload|[RunnerJobPayload](#schemarunnerjobpayload)|false|none|none|
|» failures|integer|false|none|Number of times a remote runner failed to process this job. After too many failures, the job in "error" state|
|» error|string \| null|false|none|Error message if the job is errored|
|» progress|integer|false|none|Percentage progress|
|» priority|integer|false|none|Job priority (less has more priority)|
|» updatedAt|string(date-time)|false|none|none|
|» createdAt|string(date-time)|false|none|none|
|» startedAt|string(date-time)|false|none|none|
|» finishedAt|string(date-time)|false|none|none|
|» parent|object \| null|false|none|If job has a parent job|
|» » type|[RunnerJobType](#schemarunnerjobtype)|false|none|none|
|» » state|[RunnerJobStateConstant](#schemarunnerjobstateconstant)|false|none|none|
|» » uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|» runner|object \| null|false|none|If job is associated to a runner|
|» » id|number|false|none|none|
|» » name|string|false|none|none|
|» » description|string|false|none|none|
|» jobToken|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|vod-web-video-transcoding|
|» type|vod-hls-transcoding|
|» type|vod-audio-merge-transcoding|
|» type|live-rtmp-hls-transcoding|
|» » type|vod-web-video-transcoding|
|» » type|vod-hls-transcoding|
|» » type|vod-audio-merge-transcoding|
|» » type|live-rtmp-hls-transcoding|

<aside class="success">
This operation does not require authentication
</aside>

## Abort job

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/abort \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string",
    "reason": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/abort`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string",
  "reason": "string"
}
```

<h3 id="abort-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|
|» reason|body|string|true|Why the runner aborts this job|

<h3 id="abort-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update job

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string",
    "progress": 0,
    "payload": {
      "type": "add-chunk",
      "masterPlaylistFile": "string",
      "resolutionPlaylistFile": "string",
      "resolutionPlaylistFilename": "string",
      "videoChunkFile": "string",
      "videoChunkFilename": "string"
    }
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/update`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string",
  "progress": 0,
  "payload": {
    "type": "add-chunk",
    "masterPlaylistFile": "string",
    "resolutionPlaylistFile": "string",
    "resolutionPlaylistFilename": "string",
    "videoChunkFile": "string",
    "videoChunkFilename": "string"
  }
}
```

<h3 id="update-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|
|» progress|body|integer|false|Update job progression percentage (optional)|
|» payload|body|object|false|none|
|» » *anyOf*|body|object|false|Provide live transcoding chunks update|
|» » type|body|string|false|none|
|» » masterPlaylistFile|body|string(binary)|false|none|
|» » resolutionPlaylistFile|body|string(binary)|false|none|
|» » resolutionPlaylistFilename|body|string|false|none|
|» » videoChunkFile|body|string(binary)|false|none|
|» » videoChunkFilename|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|add-chunk|
|» » type|remove-chunk|

<h3 id="update-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Post job error

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/error \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string",
    "message": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/error`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string",
  "message": "string"
}
```

<h3 id="post-job-error-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|
|» message|body|string|true|Why the runner failed to process this job|

<h3 id="post-job-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Post job success

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/success \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string",
    "payload": {
      "videoFile": "string"
    }
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/success`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string",
  "payload": {
    "videoFile": "string"
  }
}
```

<h3 id="post-job-success-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|
|» payload|body|object|true|none|
|» » *anyOf*|body|object|false|none|
|» » videoFile|body|string(binary)|false|none|
|» » *anyOf*|body|object|false|none|
|» » videoFile|body|string(binary)|false|none|
|» » resolutionPlaylistFile|body|string(binary)|false|none|
|» » *anyOf*|body|object|false|none|
|» » videoFile|body|string(binary)|false|none|
|» » *anyOf*|body|object|false|none|

<h3 id="post-job-success-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the max-quality audio file for a job video

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/files/videos/42/max-quality/audio \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/files/videos/{videoIdOrUUID}/max-quality/audio`

API used by PeerTube runners.

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string"
}
```

<h3 id="download-the-max-quality-audio-file-for-a-job-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|body|body|object|true|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|

<h3 id="download-the-max-quality-audio-file-for-a-job-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|the job is not associated with this video|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the max-quality video file for a job video

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/files/videos/42/max-quality \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/files/videos/{videoIdOrUUID}/max-quality`

API used by PeerTube runners.

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string"
}
```

<h3 id="download-the-max-quality-video-file-for-a-job-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|body|body|object|true|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|

<h3 id="download-the-max-quality-video-file-for-a-job-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|the job is not associated with this video|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the max-quality thumbnail for a job video

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/files/videos/42/thumbnails/max-quality \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/files/videos/{videoIdOrUUID}/thumbnails/max-quality`

API used by PeerTube runners.

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string"
}
```

<h3 id="download-the-max-quality-thumbnail-for-a-job-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|body|body|object|true|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|

<h3 id="download-the-max-quality-thumbnail-for-a-job-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|the job is not associated with this video|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download the max-quality preview for a job video

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/files/videos/42/previews/max-quality \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/files/videos/{videoIdOrUUID}/previews/max-quality`

API used by PeerTube runners.

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string"
}
```

<h3 id="download-the-max-quality-preview-for-a-job-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|body|body|object|true|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|

<h3 id="download-the-max-quality-preview-for-a-job-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|the job is not associated with this video|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a video studio task file for a job video

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/files/videos/42/studio/task-files/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string",
    "jobToken": "string"
  }'
```

`POST /api/v1/runners/jobs/{jobUUID}/files/videos/{videoIdOrUUID}/studio/task-files/{filename}`

API used by PeerTube runners.

> Body parameter

```json
{
  "runnerToken": "string",
  "jobToken": "string"
}
```

<h3 id="download-a-video-studio-task-file-for-a-job-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|filename|path|string|true|Name of the task file to download|
|body|body|object|true|none|
|» runnerToken|body|string|true|none|
|» jobToken|body|string|true|none|

<h3 id="download-a-video-studio-task-file-for-a-job-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|the file is not associated with this edition task|None|
|403|Forbidden|the job is not associated with this video|None|

<aside class="success">
This operation does not require authentication
</aside>

## Cancel a job

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d/cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/runners/jobs/{jobUUID}/cancel`

<h3 id="cancel-a-job-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|

<h3 id="cancel-a-job-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete a job

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs/9c9de5e8-0a1e-484a-b099-e80766180a6d \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/runners/jobs/{jobUUID}`

The endpoint will first cancel the job if needed, and then remove it from the database. Children jobs will also be removed

<h3 id="delete-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobUUID|path|[UUIDv4](#schemauuidv4)|true|none|

<h3 id="delete-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List jobs

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/runners/jobs`

<h3 id="list-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort runner jobs by criteria|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|
|stateOneOf|query|[[RunnerJobState](#schemarunnerjobstate)]|false|none|
|typeOneOf|query|[[RunnerJobType](#schemarunnerjobtype)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|updatedAt|
|sort|createdAt|
|sort|priority|
|sort|state|
|sort|progress|
|stateOneOf|1|
|stateOneOf|2|
|stateOneOf|3|
|stateOneOf|4|
|stateOneOf|5|
|stateOneOf|6|
|stateOneOf|7|
|stateOneOf|8|
|typeOneOf|vod-web-video-transcoding|
|typeOneOf|vod-hls-transcoding|
|typeOneOf|vod-audio-merge-transcoding|
|typeOneOf|live-rtmp-hls-transcoding|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "type": "vod-web-video-transcoding",
      "state": {
        "id": 1,
        "label": "Processing"
      },
      "payload": {
        "input": {
          "videoFileUrl": "string"
        },
        "output": {
          "resolution": 0,
          "fps": 0
        }
      },
      "failures": 0,
      "error": "string",
      "progress": 0,
      "priority": 0,
      "updatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "startedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "parent": {
        "type": "vod-web-video-transcoding",
        "state": {
          "id": 1,
          "label": "Processing"
        },
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
      },
      "runner": {
        "id": 0,
        "name": "string",
        "description": "string"
      },
      "privatePayload": {}
    }
  ]
}
```

<h3 id="list-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[RunnerJobAdmin](#schemarunnerjobadmin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-runners">Runners</h1>

Register, list and remove remote runners.

## Register a new runner

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "registrationToken": "string",
    "name": "string",
    "description": "string"
  }'
```

`POST /api/v1/runners/register`

API used by PeerTube runners

> Body parameter

```json
{
  "registrationToken": "string",
  "name": "string",
  "description": "string"
}
```

<h3 id="register-a-new-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» registrationToken|body|string|true|none|
|» name|body|string|true|none|
|» description|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "runnerToken": "string"
}
```

<h3 id="register-a-new-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="register-a-new-runner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|Runner id|
|runnerToken|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Unregister a runner

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/unregister \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "runnerToken": "string"
  }'
```

`POST /api/v1/runners/unregister`

API used by PeerTube runners

> Body parameter

```json
{
  "runnerToken": "string"
}
```

<h3 id="unregister-a-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|

<h3 id="unregister-a-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a runner

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners/0 \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "runnerToken": "string"
  }'
```

`DELETE /api/v1/runners/{runnerId}`

> Body parameter

```json
{
  "runnerToken": "string"
}
```

<h3 id="delete-a-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|runnerId|path|integer|true|none|
|body|body|object|false|none|
|» runnerToken|body|string|true|none|

<h3 id="delete-a-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List runners

> Code samples

```bash
curl https://peertube.example.com/api/v1/runners \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/runners`

<h3 id="list-runners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort runners by criteria|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "ip": "string",
      "updatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "lastContact": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-runners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-runners-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[Runner](#schemarunner)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

<h1 id="peertube-video-passwords">Video Passwords</h1>

Operations on video passwords.

## List video passwords

<a id="opIdlistVideoPasswords"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/passwords \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/passwords`

**PeerTube >= 6.0**

<h3 id="list-video-passwords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "password": "string",
      "videoId": 42
    }
  ]
}
```

<h3 id="list-video-passwords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoPasswordList](#schemavideopasswordlist)|
|400|Bad Request|video is not password protected|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Update video passwords

<a id="opIdupdateVideoPasswordList"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/passwords \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "passwords": [
      "string"
    ]
  }'
```

`PUT /api/v1/videos/{id}/passwords`

**PeerTube >= 6.0**

> Body parameter

```json
{
  "passwords": [
    "string"
  ]
}
```

<h3 id="update-video-passwords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» passwords|body|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|

<h3 id="update-video-passwords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|video is not password protected|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Add a video password

<a id="opIdaddVideoPassword"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/passwords \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "string"
  }'
```

`POST /api/v1/videos/{id}/passwords`

**PeerTube >= 8.0**

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="add-a-video-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» password|body|string|false|none|

<h3 id="add-a-video-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|video is not password protected|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Delete a video password

<a id="opIdremoveVideoPassword"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/passwords/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/{id}/passwords/{passwordId}`

**PeerTube >= 6.0**

<h3 id="delete-a-video-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|passwordId|path|[id](#schemaid)|true|The video password id|

<h3 id="delete-a-video-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|video is not password protected|None|
|403|Forbidden|cannot delete the last password of the protected video|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-client-config">Client Config</h1>

Configuration of the web client.

## Update client language

<a id="opIdupdateClientLanguage"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/client-config/update-language \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "language": "en-US"
  }'
```

`POST /api/v1/client-config/update-language`

<aside class="warning">
This operation is deprecated
</aside>

Set a cookie so that the next time the client refreshes the HTML of the web interface, PeerTube uses the selected language.

> Body parameter

```json
{
  "language": "en-US"
}
```

<h3 id="update-client-language-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» language|body|string \| null|true|Language code to set|

<h3 id="update-client-language-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update client language

<a id="opIdupdateClientInterfaceLanguage"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/client-config/update-interface-language \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "language": "en-US"
  }'
```

`POST /api/v1/client-config/update-interface-language`

Set a cookie so that the next time the client refreshes the HTML of the web interface, PeerTube uses the selected language.

> Body parameter

```json
{
  "language": "en-US"
}
```

<h3 id="update-client-language-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» language|body|string \| null|true|Language code to set, or `null` to clear the preference|

<h3 id="update-client-language-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="peertube-static-video-files">Static Video Files</h1>

## Get public Web Video file

> Code samples

```bash
curl https://peertube.example.com/static/web-videos/string
```

`GET /static/web-videos/{filename}`

**PeerTube >= 6.0**

<h3 id="get-public-web-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename|

<h3 id="get-public-web-video-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|404|Not Found|not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get private Web Video file

> Code samples

```bash
curl https://peertube.example.com/static/web-videos/private/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /static/web-videos/private/{filename}`

**PeerTube >= 6.0**

<h3 id="get-private-web-video-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Filename|
|videoFileToken|query|string|false|Video file token [generated](#operation/requestVideoToken) by PeerTube so you don't need to provide an OAuth token in the request header.|

<h3 id="get-private-web-video-file-responses">Responses</h3>

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
curl https://peertube.example.com/static/streaming-playlists/hls/string \
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

## Get private HLS video file

> Code samples

```bash
curl https://peertube.example.com/static/streaming-playlists/hls/private/string \
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

<h1 id="peertube-videos">Videos</h1>

## Get video imports of my user

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/videos/imports \
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
|includeCollaborations|query|boolean|false|**PeerTube >= 8.0** Include objects from collaborated channels|
|videoId|query|integer|false|Filter on import video ID|
|targetUrl|query|string|false|Filter on import target URL|
|videoChannelSyncId|query|number|false|Filter on imports created by a specific channel synchronization|
|search|query|string|false|Search in video names|
|stateOneOf|query|[integer]|false|Filter on import state|

#### Enumerated Values

|Parameter|Value|
|---|---|
|stateOneOf|1|
|stateOneOf|2|
|stateOneOf|3|
|stateOneOf|4|
|stateOneOf|5|
|stateOneOf|6|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "magnetUri": "http://example.com",
      "torrentfile": "string",
      "torrentName": "string",
      "state": {
        "id": 1,
        "label": "Pending"
      },
      "error": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "isLive": true,
        "liveSchedules": [
          {
            "startAt": "1970-01-01T00:00:00Z"
          }
        ],
        "createdAt": "2017-10-01T10:52:46.396Z",
        "publishedAt": "2018-10-01T10:52:46.396Z",
        "updatedAt": "2021-05-04T08:01:01.502Z",
        "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
        "category": {
          "id": 15,
          "label": "Science & Technology"
        },
        "licence": {
          "id": 2,
          "label": "Attribution - Share Alike"
        },
        "language": {
          "id": "en",
          "label": "English"
        },
        "privacy": {
          "id": 1,
          "label": "string"
        },
        "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
        "duration": 1419,
        "aspectRatio": 1.778,
        "isLocal": true,
        "name": "What is PeerTube?",
        "thumbnailPath": "string",
        "previewPath": "string",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
        "views": 1337,
        "likes": 42,
        "dislikes": 7,
        "comments": 0,
        "nsfw": true,
        "nsfwFlags": {},
        "nsfwSummary": "string",
        "aiUsage": {
          "id": 1,
          "label": "string"
        },
        "commercialContent": {
          "id": 1,
          "label": "string"
        },
        "recommendationScope": {
          "id": 1,
          "label": "string"
        },
        "waitTranscoding": true,
        "state": {
          "id": 1,
          "label": "string"
        },
        "scheduledUpdate": {
          "privacy": 1,
          "updateAt": "1970-01-01T00:00:00Z"
        },
        "blacklisted": true,
        "blacklistedReason": "string",
        "account": {
          "id": 0,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "userHistory": {
          "currentTime": 0
        }
      }
    }
  ]
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
curl https://peertube.example.com/api/v1/video-playlists/42/videos \
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
  "total": 1,
  "data": [
    {
      "id": {},
      "position": 2,
      "startTimestamp": 10,
      "stopTimestamp": 41,
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "isLive": true,
        "liveSchedules": [
          {
            "startAt": "1970-01-01T00:00:00Z"
          }
        ],
        "createdAt": "2017-10-01T10:52:46.396Z",
        "publishedAt": "2018-10-01T10:52:46.396Z",
        "updatedAt": "2021-05-04T08:01:01.502Z",
        "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
        "category": {
          "id": 15,
          "label": "Science & Technology"
        },
        "licence": {
          "id": 2,
          "label": "Attribution - Share Alike"
        },
        "language": {
          "id": "en",
          "label": "English"
        },
        "privacy": {
          "id": 1,
          "label": "string"
        },
        "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
        "duration": 1419,
        "aspectRatio": 1.778,
        "isLocal": true,
        "name": "What is PeerTube?",
        "thumbnailPath": "string",
        "previewPath": "string",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
        "views": 1337,
        "likes": 42,
        "dislikes": 7,
        "comments": 0,
        "nsfw": true,
        "nsfwFlags": {},
        "nsfwSummary": "string",
        "aiUsage": {
          "id": 1,
          "label": "string"
        },
        "commercialContent": {
          "id": 1,
          "label": "string"
        },
        "recommendationScope": {
          "id": 1,
          "label": "string"
        },
        "waitTranscoding": true,
        "state": {
          "id": 1,
          "label": "string"
        },
        "scheduledUpdate": {
          "privacy": 1,
          "updateAt": "1970-01-01T00:00:00Z"
        },
        "blacklisted": true,
        "blacklistedReason": "string",
        "account": {
          "id": 0,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "userHistory": {
          "currentTime": 0
        }
      }
    }
  ]
}
```

<h3 id="list-videos-of-a-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-videos-of-a-playlist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» id|object|false|none|Playlist element id|
|» position|integer|false|none|none|
|» startTimestamp|integer(seconds) \| null|false|none|none|
|» stopTimestamp|integer(seconds) \| null|false|none|none|
|» video|[Video](#schemavideo)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add a video in a playlist

<a id="opIdaddVideoPlaylistVideo"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-playlists/42/videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "videoId": {},
    "startTimestamp": 0,
    "stopTimestamp": 0
  }'
```

`POST /api/v1/video-playlists/{playlistId}/videos`

> Body parameter

```json
{
  "videoId": {},
  "startTimestamp": 0,
  "stopTimestamp": 0
}
```

<h3 id="add-a-video-in-a-playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|playlistId|path|[id](#schemaid)|true|Playlist id|
|body|body|object|false|none|
|» videoId|body|object|true|Video to add in the playlist|
|» » *oneOf*|body|object|false|universal identifier for the video, that can be used across instances|
|» » *oneOf*|body|object|false|object id for the video|
|» startTimestamp|body|integer(seconds)|false|Start the video at this specific timestamp|
|» stopTimestamp|body|integer(seconds)|false|Stop the video at this specific timestamp|

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

<h1 id="peertube-ownership-change">Ownership Change</h1>

## List video ownership changes

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/ownership \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/ownership`

List ownership change requests received by the authenticated user and requests sent by a channel managed by the authenticated user

<h3 id="list-video-ownership-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-createdAt|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 1,
        "label": "string"
      },
      "initiatorAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "nextOwnerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "name": "string",
        "isLive": true,
        "nsfw": true,
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-video-ownership-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|authentication required|None|

<h3 id="list-video-ownership-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[ChangeOwnership](#schemachangeownership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Accept ownership change request

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/ownership/42/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channelId": 0
  }'
```

`POST /api/v1/videos/ownership/{id}/accept`

> Body parameter

```json
{
  "channelId": 0
}
```

<h3 id="accept-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|true|none|
|» channelId|body|integer|true|Target channel id owned by the authenticated user|

<h3 id="accept-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|ownership change request already accepted/refused or invalid target channel id|None|
|403|Forbidden|cannot terminate an ownership change of another user|None|
|404|Not Found|video ownership change not found|None|
|413|Payload Too Large|quota exceeded for the target account/channel|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Refuse ownership change request

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/ownership/42/refuse \
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
|400|Bad Request|ownership change request already accepted/refused|None|
|403|Forbidden|cannot terminate an ownership change of another user|None|
|404|Not Found|video ownership change not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete ownership change request

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/ownership/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/videos/ownership/{id}`

Delete an ownership change request. Only users who can manage the video can delete the request.

<h3 id="delete-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|ownership request already accepted or refused|None|
|403|Forbidden|only users who can manage the video can delete an ownership change request|None|
|404|Not Found|video ownership change not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List ownership change requests for a video

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/ownership \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{videoIdOrUUID}/ownership`

List all ownership change requests for a specific video. The authenticated user must be able to manage the video.

<h3 id="list-ownership-change-requests-for-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|state|query|[ChangeOwnershipState](#schemachangeownershipstate)|false|Filter by ownership change state|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|1|
|state|2|
|state|3|
|sort|-createdAt|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 1,
        "label": "string"
      },
      "initiatorAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "nextOwnerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "name": "string",
        "isLive": true,
        "nsfw": true,
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-ownership-change-requests-for-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|403|Forbidden|cannot manage the video|None|
|404|Not Found|video not found|None|

<h3 id="list-ownership-change-requests-for-a-video-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[ChangeOwnership](#schemachangeownership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Request ownership change

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/give-ownership \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "username": "string"
  }'
```

`POST /api/v1/videos/{videoIdOrUUID}/give-ownership`

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="request-ownership-change-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|videoIdOrUUID|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|Video id or UUID|
|body|body|object|true|none|
|» username|body|string|true|none|

<h3 id="request-ownership-change-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|changing video ownership to a remote account is not supported yet or there is already a pending ownership request|None|
|403|Forbidden|cannot change ownership of this video|None|
|404|Not Found|video not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List channel ownership changes

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/ownership \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/video-channels/ownership`

List ownership change requests received by the authenticated user and requests sent by channels managed by the authenticated user

<h3 id="list-channel-ownership-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|-createdAt|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 1,
        "label": "string"
      },
      "initiatorAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "nextOwnerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "name": "string",
        "isLive": true,
        "nsfw": true,
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-channel-ownership-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|authentication required|None|

<h3 id="list-channel-ownership-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[ChangeOwnership](#schemachangeownership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Accept channel ownership change request

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/ownership/42/accept \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/video-channels/ownership/{id}/accept`

<h3 id="accept-channel-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="accept-channel-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|ownership change request already accepted/refused or request type mismatch|None|
|403|Forbidden|cannot terminate an ownership change of another user|None|
|404|Not Found|channel ownership change not found|None|
|409|Conflict|cannot accept transferring the last channel of the initiator account|None|
|413|Payload Too Large|quota exceeded for the target account|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Refuse channel ownership change request

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/ownership/42/refuse \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v1/video-channels/ownership/{id}/refuse`

<h3 id="refuse-channel-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="refuse-channel-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|ownership change request already accepted/refused or request type mismatch|None|
|403|Forbidden|cannot terminate an ownership change of another user|None|
|404|Not Found|channel ownership change not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete channel ownership change request

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/ownership/42 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/video-channels/ownership/{id}`

Delete a channel ownership change request. Only channel owners can delete the request.

<h3 id="delete-channel-ownership-change-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

<h3 id="delete-channel-ownership-change-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|ownership request already accepted/refused or request type mismatch|None|
|403|Forbidden|only channel owners can delete a channel ownership change request|None|
|404|Not Found|channel ownership change not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List ownership change requests for a channel

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/ownership \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/video-channels/{channelHandle}/ownership`

List all ownership change requests for a specific channel. The authenticated user must be able to manage the channel.

<h3 id="list-ownership-change-requests-for-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|state|query|[ChangeOwnershipState](#schemachangeownershipstate)|false|Filter by ownership change state|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|1|
|state|2|
|state|3|
|sort|-createdAt|
|sort|createdAt|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 1,
        "label": "string"
      },
      "initiatorAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "nextOwnerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "name": "string",
        "isLive": true,
        "nsfw": true,
        "publishedAt": "1970-01-01T00:00:00Z",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "videoChannel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-ownership-change-requests-for-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|invalid parameters|None|
|403|Forbidden|cannot manage the channel|None|
|404|Not Found|channel not found|None|

<h3 id="list-ownership-change-requests-for-a-channel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[ChangeOwnership](#schemachangeownership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Request channel ownership change

> Code samples

```bash
curl https://peertube.example.com/api/v1/video-channels/my_username%20%7C%20my_username%40example.com/give-ownership \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "username": "string"
  }'
```

`POST /api/v1/video-channels/{channelHandle}/give-ownership`

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="request-channel-ownership-change-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelHandle|path|string|true|The video channel handle|
|body|body|object|true|none|
|» username|body|string|true|none|

<h3 id="request-channel-ownership-change-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|changing channel ownership to this target is invalid or there is already a pending ownership request|None|
|403|Forbidden|cannot change ownership of this channel|None|
|404|Not Found|channel not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="peertube-live-videos">Live Videos</h1>

## Create a live

<a id="opIdaddLive"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/live \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'channelId=0' \
  -F 'saveReplay=true' \
  -F 'replaySettings={"privacy":1}' \
  -F 'permanentLive=true' \
  -F 'latencyMode={}' \
  -F 'thumbnailfile=@/path/to/file' \
  -F 'previewfile=@/path/to/file' \
  -F 'privacy=1' \
  -F 'category=15' \
  -F 'licence=2' \
  -F 'language=en' \
  -F 'description=string' \
  -F 'support=Please support our work on https://soutenir.framasoft.org/en/ <3' \
  -F 'nsfw=true' \
  -F 'nsfwSummary=' \
  -F 'nsfwFlags=0' \
  -F 'name=string' \
  -F 'tags=["string"]' \
  -F 'commentsPolicy=1' \
  -F 'recommendationScope=1' \
  -F 'aiUsage=1' \
  -F 'commercialContent=1' \
  -F 'downloadEnabled=true' \
  -F 'schedules=[{"startAt":"1970-01-01T00:00:00Z"}]'
```

`POST /api/v1/videos/live`

> Body parameter

```yaml
channelId: 0
saveReplay: true
replaySettings:
  privacy: 1
permanentLive: true
latencyMode: {}
thumbnailfile: string
previewfile: string
privacy: 1
category: 15
licence: 2
language: en
description: string
support: "Please support our work on https://soutenir.framasoft.org/en/ <3"
nsfw: true
nsfwSummary: null
nsfwFlags: 0
name: string
tags:
  - string
commentsPolicy: 1
recommendationScope: 1
aiUsage: 1
commercialContent: 1
downloadEnabled: true
schedules:
  -
    startAt: "1970-01-01T00:00:00Z"
```

<h3 id="create-a-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» channelId|body|integer|true|Channel id that will contain this live video|
|» saveReplay|body|boolean|false|none|
|» replaySettings|body|[LiveVideoReplaySettings](#schemalivevideoreplaysettings)|false|none|
|» permanentLive|body|boolean|false|User can stream multiple times in a permanent live|
|» latencyMode|body|object|false|User can select live latency mode if enabled by the instance|
|» thumbnailfile|body|string(binary)|false|Live video/replay thumbnail file|
|» previewfile|body|string(binary)|false|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|» privacy|body|[VideoPrivacySet](#schemavideoprivacyset)|false|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|» category|body|[VideoCategorySet](#schemavideocategoryset)|false|category id of the video (see [/videos/categories](#operation/getCategories))|
|» licence|body|[VideoLicenceSet](#schemavideolicenceset)|false|licence id of the video (see [/videos/licences](#operation/getLicences))|
|» language|body|[VideoLanguageSet](#schemavideolanguageset)|false|language id of the video (see [/videos/languages](#operation/getLanguages))|
|» description|body|string|false|Live video/replay description|
|» support|body|string|false|A text tell the audience how to support the creator|
|» nsfw|body|boolean|false|Whether or not this live video/replay contains sensitive content|
|» nsfwSummary|body|object|false|More information about the sensitive content of the video|
|» nsfwFlags|body|[NSFWFlag](#schemansfwflag)|false|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|» name|body|string|true|Live video/replay name|
|» tags|body|[string]|false|Live video/replay tags (maximum 5 tags each between 2 and 30 characters)|
|» commentsPolicy|body|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|» recommendationScope|body|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|» aiUsage|body|[VideoAIUsageSet](#schemavideoaiusageset)|false|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|» commercialContent|body|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|» downloadEnabled|body|boolean|false|Enable or disable downloading for the replay of this live video|
|» schedules|body|[[LiveSchedule](#schemaliveschedule)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|1|
|» privacy|2|
|» privacy|3|
|» privacy|4|
|» privacy|5|
|» nsfwFlags|0|
|» nsfwFlags|1|
|» nsfwFlags|2|
|» nsfwFlags|4|
|» commentsPolicy|1|
|» commentsPolicy|2|
|» commentsPolicy|3|
|» recommendationScope|1|
|» recommendationScope|2|
|» recommendationScope|3|
|» recommendationScope|4|
|» aiUsage|1|
|» aiUsage|2|
|» aiUsage|3|
|» aiUsage|4|
|» commercialContent|1|
|» commercialContent|2|
|» commercialContent|3|

> Example responses

> 200 Response

```json
{
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {}
  }
}
```

<h3 id="create-a-live-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VideoUploadResponse](#schemavideouploadresponse)|
|400|Bad Request|Disambiguate via `code`:<br>- default type for a validation error<br>- `live_conflicting_permanent_and_save_replay` for conflicting parameters set<br>|None|
|403|Forbidden|Disambiguate via `code`:<br>- `live_not_enabled` for a disabled live feature<br>- `live_not_allowing_replay` for a disabled replay feature<br>- `max_instance_lives_limit_reached` for the absolute concurrent live limit<br>- `max_user_lives_limit_reached` for the user concurrent live limit<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get information about a live

<a id="opIdgetLiveId"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/live/42 \
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
  "rtmpUrl": "string",
  "rtmpsUrl": "string",
  "streamKey": "string",
  "saveReplay": true,
  "replaySettings": {
    "privacy": 1
  },
  "permanentLive": true,
  "latencyMode": {},
  "schedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ]
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
curl https://peertube.example.com/api/v1/videos/live/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "saveReplay": true,
    "replaySettings": {
      "privacy": 1
    },
    "permanentLive": true,
    "latencyMode": {},
    "schedules": [
      {
        "startAt": "1970-01-01T00:00:00Z"
      }
    ]
  }'
```

`PUT /api/v1/videos/live/{id}`

> Body parameter

```json
{
  "saveReplay": true,
  "replaySettings": {
    "privacy": 1
  },
  "permanentLive": true,
  "latencyMode": {},
  "schedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="update-information-about-a-live-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|[LiveVideoUpdate](#schemalivevideoupdate)|false|none|
|» saveReplay|body|boolean|false|none|
|» replaySettings|body|[LiveVideoReplaySettings](#schemalivevideoreplaysettings)|false|none|
|» permanentLive|body|boolean|false|User can stream multiple times in a permanent live|
|» latencyMode|body|object|false|User can select live latency mode if enabled by the instance|
|» schedules|body|[[LiveSchedule](#schemaliveschedule)]|false|none|

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
curl https://peertube.example.com/api/v1/videos/live/42/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/live/{id}/sessions`

List all sessions created in a particular live

<h3 id="list-live-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|sort|query|string|false|Sort column|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 0,
      "startDate": "1970-01-01T00:00:00Z",
      "endDate": "1970-01-01T00:00:00Z",
      "error": 1,
      "replayVideo": {
        "id": 0,
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC"
      }
    }
  ]
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
|total|integer|false|none|none|
|data|[[LiveVideoSessionResponse](#schemalivevideosessionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get live session of a replay

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/live-session \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/live-session`

If the video is a replay of a live, you can find the associated live session using this endpoint

<h3 id="get-live-session-of-a-replay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|x-peertube-video-password|header|string|false|Required on password protected video|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "startDate": "1970-01-01T00:00:00Z",
  "endDate": "1970-01-01T00:00:00Z",
  "error": 1,
  "replayVideo": {
    "id": 0,
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
    "shortUUID": "2y84q2MQUMWPbiEcxNXMgC"
  }
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

<h1 id="peertube-video-embed-privacy">Video Embed Privacy</h1>

## Get video embed privacy

<a id="opIdgetVideoEmbedPrivacy"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/embed-privacy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/embed-privacy`

**PeerTube >= 8.1**

<h3 id="get-video-embed-privacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|

> Example responses

> 200 Response

```json
{
  "policy": {
    "id": 1,
    "label": "Allowlist"
  },
  "domains": [
    "example.com"
  ]
}
```

<h3 id="get-video-embed-privacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|invalid request|None|

<h3 id="get-video-embed-privacy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|object|false|none|none|
|» id|[VideoEmbedPrivacy](#schemavideoembedprivacy)|false|none|The video embed privacy level:<br>  - `1` All allowed: anyone can embed the video<br>  - `2` Allowlist: only the domains in the allowlist can embed the video<br>  - `3` Remote restrictions: the remote instance has restrictions on where the video can be embedded<br>  - `4` Nobody can embed this video<br>|
|» label|string|false|none|none|
|domains|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» id|1|
|» id|2|
|» id|3|
|» id|4|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Update video embed privacy

<a id="opIdupdateVideoEmbedPrivacy"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/videos/42/embed-privacy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": 1,
    "domains": [
      "example.com"
    ]
  }'
```

`PUT /api/v1/videos/{id}/embed-privacy`

**PeerTube >= 8.1**

> Body parameter

```json
{
  "policy": 1,
  "domains": [
    "example.com"
  ]
}
```

<h3 id="update-video-embed-privacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|body|body|object|false|none|
|» policy|body|[VideoEmbedPrivacy](#schemavideoembedprivacy)|false|The video embed privacy level:<br>  - `1` All allowed: anyone can embed the video<br>  - `2` Allowlist: only the domains in the allowlist can embed the video<br>  - `3` Remote restrictions: the remote instance has restrictions on where the video can be embedded<br>  - `4` Nobody can embed this video<br>|
|» domains|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» policy|1|
|» policy|2|
|» policy|3|
|» policy|4|

<h3 id="update-video-embed-privacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|400|Bad Request|invalid request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Check if embed is allowed

<a id="opIdisVideoEmbedOnDomainAllowed"></a>

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/videos/42/embed-privacy/allowed?domain=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/videos/{id}/embed-privacy/allowed`

**PeerTube >= 8.1** Check if video embed is allowed on a specific domain according to the video embed privacy settings

<h3 id="check-if-embed-is-allowed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|The object id, uuid or short uuid|
|domain|query|string|true|The domain to check if embed is allowed|

> Example responses

> 200 Response

```json
{
  "domainAllowed": true,
  "userBypassAllowed": true
}
```

<h3 id="check-if-embed-is-allowed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|invalid request|None|

<h3 id="check-if-embed-is-allowed-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainAllowed|boolean|false|none|none|
|userBypassAllowed|boolean \| null|false|none|Whether the user can bypass embed restrictions for this video, either because they are the owner/editor of the video or because they have a moderator or admin role|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-account-blocklist">Account Blocklist</h1>

## Get block status of accounts/hosts

> Code samples

```bash
curl https://peertube.example.com/api/v1/blocklist/status \
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
      "blockedByServerSubscription": "string",
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByServerSubscription": "string",
      "blockedByUser": true
    }
  },
  "hosts": {
    "property1": {
      "blockedByServer": true,
      "blockedByServerSubscription": "string",
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByServerSubscription": "string",
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

## List accounts blocked by my account

<a id="opIdgetMyBlockedAccounts"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/blocklist/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/blocklist/accounts`

Get the list of accounts that the authenticated user has blocked

<h3 id="list-accounts-blocked-by-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|search|query|string|false|Search query string|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "byAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "blockedAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "blocklistSubscription": {
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-accounts-blocked-by-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|authentication required|None|

<h3 id="list-accounts-blocked-by-my-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[AccountBlock](#schemaaccountblock)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Block an account by my account

<a id="opIdblockAccount"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/blocklist/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountName": "user@example.com"
  }'
```

`POST /api/v1/users/me/blocklist/accounts`

Add an account to the authenticated user's blocklist

> Body parameter

```json
{
  "accountName": "user@example.com"
}
```

<h3 id="block-an-account-by-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» accountName|body|string|true|Account name to block (format: name@host)|

<h3 id="block-an-account-by-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation - account blocked|None|
|400|Bad Request|invalid account name|None|
|401|Unauthorized|authentication required|None|
|404|Not Found|account not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Unblock an account by my account

<a id="opIdunblockAccount"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/blocklist/accounts/user%40example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me/blocklist/accounts/{accountName}`

Remove an account from the authenticated user's blocklist

<h3 id="unblock-an-account-by-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|Account name to unblock (format: name@host)|

<h3 id="unblock-an-account-by-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation - account unblocked|None|
|400|Bad Request|invalid account name|None|
|401|Unauthorized|authentication required|None|
|404|Not Found|account block not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## List servers blocked by my account

<a id="opIdgetMyBlockedServers"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/blocklist/servers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/users/me/blocklist/servers`

Get the list of servers that the authenticated user has blocked

<h3 id="list-servers-blocked-by-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|search|query|string|false|Search query string|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "byAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "blockedServer": {
        "host": "example.com"
      },
      "blocklistSubscription": {
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-servers-blocked-by-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|authentication required|None|

<h3 id="list-servers-blocked-by-my-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[ServerBlock](#schemaserverblock)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Block a server by my account

<a id="opIdblockServer"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/blocklist/servers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "host": "example.com"
  }'
```

`POST /api/v1/users/me/blocklist/servers`

Add a server to the authenticated user's blocklist

> Body parameter

```json
{
  "host": "example.com"
}
```

<h3 id="block-a-server-by-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» host|body|string|true|Server host to block|

<h3 id="block-a-server-by-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation - server blocked|None|
|400|Bad Request|invalid server host|None|
|401|Unauthorized|authentication required|None|
|404|Not Found|server not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## Unblock a server by my account

<a id="opIdunblockServer"></a>

> Code samples

```bash
curl https://peertube.example.com/api/v1/users/me/blocklist/servers/example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/users/me/blocklist/servers/{host}`

Remove a server from the authenticated user's blocklist

<h3 id="unblock-a-server-by-my-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|path|string|true|Server host to unblock|

<h3 id="unblock-a-server-by-my-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation - server unblocked|None|
|400|Bad Request|invalid server host|None|
|401|Unauthorized|authentication required|None|
|404|Not Found|server block not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

<h1 id="peertube-server-blocklist">Server Blocklist</h1>

## List blocked accounts by server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/blocklist/accounts`

<h3 id="list-blocked-accounts-by-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|subscriptionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "byAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "blockedAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "blocklistSubscription": {
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-blocked-accounts-by-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-blocked-accounts-by-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[AccountBlock](#schemaaccountblock)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Block an account by server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/accounts \
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

<h3 id="block-an-account-by-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» accountName|body|string|true|account to block, in the form `username@domain`|

<h3 id="block-an-account-by-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|409|Conflict|self-blocking forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Unblock an account by server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/accounts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/blocklist/accounts/{accountName}`

<h3 id="unblock-an-account-by-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountName|path|string|true|account to unblock, in the form `username@domain`|

<h3 id="unblock-an-account-by-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|None|
|404|Not Found|account or account block does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List blocked servers by server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/servers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/blocklist/servers`

<h3 id="list-blocked-servers-by-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|subscriptionName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "byAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "blockedServer": {
        "host": "example.com"
      },
      "blocklistSubscription": {
        "id": 42,
        "name": "string",
        "url": "http://example.com"
      },
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-blocked-servers-by-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-blocked-servers-by-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[ServerBlock](#schemaserverblock)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Block a server by server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/servers \
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

<h3 id="block-a-server-by-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» host|body|string(hostname)|true|server domain to block|

<h3 id="block-a-server-by-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|409|Conflict|self-blocking forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Unblock a server by server

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/servers/example.com \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/blocklist/servers/{host}`

<h3 id="unblock-a-server-by-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|path|string(hostname)|true|server domain to unblock|

<h3 id="unblock-a-server-by-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|server block does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List server blocklist subscriptions

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/server/blocklist/subscriptions`

<h3 id="list-server-blocklist-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|query|integer|false|Offset used to paginate results|
|count|query|integer|false|Number of items to return|
|sort|query|string|false|Sort column|
|search|query|string|false|Plain text search, applied to various parts of the model depending on endpoint|

> Example responses

> 200 Response

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "name": "string",
      "url": "http://example.com",
      "mutedAccountsCount": 0,
      "mutedServersCount": 0,
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-server-blocklist-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<h3 id="list-server-blocklist-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[BlocklistSubscription](#schemablocklistsubscription)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Add a server blocklist subscription

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "http://example.com"
  }'
```

`POST /api/v1/server/blocklist/subscriptions`

> Body parameter

```json
{
  "url": "http://example.com"
}
```

<h3 id="add-a-server-blocklist-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string(url)|true|none|

> Example responses

> 200 Response

```json
{
  "id": 42,
  "name": "string",
  "url": "http://example.com",
  "mutedAccountsCount": 0,
  "mutedServersCount": 0,
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="add-a-server-blocklist-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BlocklistSubscription](#schemablocklistsubscription)|
|409|Conflict|subscription already exists|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## Delete a server blocklist subscription

> Code samples

```bash
curl https://peertube.example.com/api/v1/server/blocklist/subscriptions/0 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v1/server/blocklist/subscriptions/{id}`

<h3 id="delete-a-server-blocklist-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="delete-a-server-blocklist-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|successful operation|None|
|404|Not Found|subscription does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: admin )
</aside>

## List publicly shared server blocklist log entries

> Code samples

```bash
curl 'https://peertube.example.com/api/v1/server/blocklist/public-log?startDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /api/v1/server/blocklist/public-log`

<h3 id="list-publicly-shared-server-blocklist-log-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string(date-time)|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "actions": [
    {
      "type": "block",
      "target": "string",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-publicly-shared-server-blocklist-log-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AutoMuteList](#schemaautomutelist)|
|403|Forbidden|public log is disabled|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_id">id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
42
```

<h2 id="tocS_UUIDv4">UUIDv4</h2>
<!-- backwards compatibility -->
<a id="schemauuidv4"></a>
<a id="schema_UUIDv4"></a>
<a id="tocSuuidv4"></a>
<a id="tocsuuidv4"></a>

```json
"9c9de5e8-0a1e-484a-b099-e80766180a6d"
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

<h2 id="tocS_password">password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

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

<h2 id="tocS_VideoPlaylistPrivacySet">VideoPlaylistPrivacySet</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylistprivacyset"></a>
<a id="schema_VideoPlaylistPrivacySet"></a>
<a id="tocSvideoplaylistprivacyset"></a>
<a id="tocsvideoplaylistprivacyset"></a>

```json
1
```

Video playlist privacy policy (see [/video-playlists/privacies](#operation/getPlaylistPrivacyPolicies))

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
|id|[VideoPlaylistPrivacySet](#schemavideoplaylistprivacyset)|false|none|Video playlist privacy policy (see [/video-playlists/privacies](#operation/getPlaylistPrivacyPolicies))|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|

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

<h2 id="tocS_VideoPrivacySet">VideoPrivacySet</h2>
<!-- backwards compatibility -->
<a id="schemavideoprivacyset"></a>
<a id="schema_VideoPrivacySet"></a>
<a id="tocSvideoprivacyset"></a>
<a id="tocsvideoprivacyset"></a>

```json
1
```

privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))

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
|id|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|
|id|4|
|id|5|

<h2 id="tocS_VideoCommentsPolicySet">VideoCommentsPolicySet</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentspolicyset"></a>
<a id="schema_VideoCommentsPolicySet"></a>
<a id="tocSvideocommentspolicyset"></a>
<a id="tocsvideocommentspolicyset"></a>

```json
1
```

Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)

<h2 id="tocS_VideoCommentsPolicyConstant">VideoCommentsPolicyConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentspolicyconstant"></a>
<a id="schema_VideoCommentsPolicyConstant"></a>
<a id="tocSvideocommentspolicyconstant"></a>
<a id="tocsvideocommentspolicyconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|none|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|

<h2 id="tocS_VideoRecommendationScopeSet">VideoRecommendationScopeSet</h2>
<!-- backwards compatibility -->
<a id="schemavideorecommendationscopeset"></a>
<a id="schema_VideoRecommendationScopeSet"></a>
<a id="tocSvideorecommendationscopeset"></a>
<a id="tocsvideorecommendationscopeset"></a>

```json
1
```

Videos that can be recommended next to a video:
  - `1` All videos
  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)
  - `3` Only videos of the account that owns the reference video
  - `4` Only videos of the channel of the reference video

This is a preference of the video owner: applications displaying recommendations may not apply it

<h2 id="tocS_VideoRecommendationScopeConstant">VideoRecommendationScopeConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideorecommendationscopeconstant"></a>
<a id="schema_VideoRecommendationScopeConstant"></a>
<a id="tocSvideorecommendationscopeconstant"></a>
<a id="tocsvideorecommendationscopeconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|none|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|
|id|4|

<h2 id="tocS_VideoAIUsageSet">VideoAIUsageSet</h2>
<!-- backwards compatibility -->
<a id="schemavideoaiusageset"></a>
<a id="schema_VideoAIUsageSet"></a>
<a id="tocSvideoaiusageset"></a>
<a id="tocsvideoaiusageset"></a>

```json
1
```

**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:
  - `1` Not specified
  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI
  - `3` Contains AI-generated content: some parts of the video have been generated by AI
  - `4` AI-generated: the whole video, or most of it, has been generated by AI

<h2 id="tocS_VideoAIUsageConstant">VideoAIUsageConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideoaiusageconstant"></a>
<a id="schema_VideoAIUsageConstant"></a>
<a id="tocSvideoaiusageconstant"></a>
<a id="tocsvideoaiusageconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoAIUsageSet](#schemavideoaiusageset)|false|none|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|
|id|4|

<h2 id="tocS_VideoCommercialContentSet">VideoCommercialContentSet</h2>
<!-- backwards compatibility -->
<a id="schemavideocommercialcontentset"></a>
<a id="schema_VideoCommercialContentSet"></a>
<a id="tocSvideocommercialcontentset"></a>
<a id="tocsvideocommercialcontentset"></a>

```json
1
```

**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:
  - `1` None
  - `2` Promotional content: the creator promotes their own products, services or business
  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion

<h2 id="tocS_VideoCommercialContentConstant">VideoCommercialContentConstant</h2>
<!-- backwards compatibility -->
<a id="schemavideocommercialcontentconstant"></a>
<a id="schema_VideoCommercialContentConstant"></a>
<a id="tocSvideocommercialcontentconstant"></a>
<a id="tocsvideocommercialcontentconstant"></a>

```json
{
  "id": 1,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|none|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|label|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|id|1|
|id|2|
|id|3|

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
      "blockedByServerSubscription": "string",
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByServerSubscription": "string",
      "blockedByUser": true
    }
  },
  "hosts": {
    "property1": {
      "blockedByServer": true,
      "blockedByServerSubscription": "string",
      "blockedByUser": true
    },
    "property2": {
      "blockedByServer": true,
      "blockedByServerSubscription": "string",
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

<h2 id="tocS_NSFWPolicy">NSFWPolicy</h2>
<!-- backwards compatibility -->
<a id="schemansfwpolicy"></a>
<a id="schema_NSFWPolicy"></a>
<a id="tocSnsfwpolicy"></a>
<a id="tocsnsfwpolicy"></a>

```json
"display"
```

<h2 id="tocS_NSFWFlag">NSFWFlag</h2>
<!-- backwards compatibility -->
<a id="schemansfwflag"></a>
<a id="schema_NSFWFlag"></a>
<a id="tocSnsfwflag"></a>
<a id="tocsnsfwflag"></a>

```json
0
```


NSFW flags (can be combined using bitwise or operator)
- `0` NONE
- `1` VIOLENT
- `2` EXPLICIT_SEX

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

<h2 id="tocS_LiveVideoReplaySettings">LiveVideoReplaySettings</h2>
<!-- backwards compatibility -->
<a id="schemalivevideoreplaysettings"></a>
<a id="schema_LiveVideoReplaySettings"></a>
<a id="tocSlivevideoreplaysettings"></a>
<a id="tocslivevideoreplaysettings"></a>

```json
{
  "privacy": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|
|privacy|5|

<h2 id="tocS_VideoChannelActivityAction">VideoChannelActivityAction</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelactivityaction"></a>
<a id="schema_VideoChannelActivityAction"></a>
<a id="tocSvideochannelactivityaction"></a>
<a id="tocsvideochannelactivityaction"></a>

```json
1
```

The activity action:
  - CREATE: 1
  - UPDATE: 2
  - DELETE: 3
  - UPDATE_CAPTIONS: 4
  - UPDATE_CHAPTERS: 5
  - UPDATE_PASSWORDS: 6
  - CREATE_STUDIO_TASKS: 7
  - UPDATE_SOURCE_FILE: 8
  - UPDATE_ELEMENTS: 9
  - REMOVE_CHANNEL_OWNERSHIP: 10
  - CREATE_CHANNEL_OWNERSHIP: 11

<h2 id="tocS_VideoChannelActivityTarget">VideoChannelActivityTarget</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelactivitytarget"></a>
<a id="schema_VideoChannelActivityTarget"></a>
<a id="tocSvideochannelactivitytarget"></a>
<a id="tocsvideochannelactivitytarget"></a>

```json
1
```

The activity target:
  - VIDEO: 1,
  - PLAYLIST: 2,
  - CHANNEL: 3,
  - CHANNEL_SYNC: 4,
  - VIDEO_IMPORT: 5

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

<h2 id="tocS_UserExportState">UserExportState</h2>
<!-- backwards compatibility -->
<a id="schemauserexportstate"></a>
<a id="schema_UserExportState"></a>
<a id="tocSuserexportstate"></a>
<a id="tocsuserexportstate"></a>

```json
1
```

The user export state:
  - `1`: Pending
  - `2`: Processing
  - `3`: Completed
  - `4`: Errored

<h2 id="tocS_UserImportState">UserImportState</h2>
<!-- backwards compatibility -->
<a id="schemauserimportstate"></a>
<a id="schema_UserImportState"></a>
<a id="tocSuserimportstate"></a>
<a id="tocsuserimportstate"></a>

```json
1
```

The user import state:
  - `1`: Pending
  - `2`: Processing
  - `3`: Completed
  - `4`: Errored

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

<h2 id="tocS_VideoScheduledUpdate">VideoScheduledUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavideoscheduledupdate"></a>
<a id="schema_VideoScheduledUpdate"></a>
<a id="tocSvideoscheduledupdate"></a>
<a id="tocsvideoscheduledupdate"></a>

```json
{
  "privacy": 1,
  "updateAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|updateAt|string(date-time)|true|none|When to update the video|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|
|privacy|5|

<h2 id="tocS_AccountSummary">AccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsummary"></a>
<a id="schema_AccountSummary"></a>
<a id="tocSaccountsummary"></a>
<a id="tocsaccountsummary"></a>

```json
{
  "id": 0,
  "name": "string",
  "displayName": "string",
  "url": "http://example.com",
  "host": "example.com",
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|displayName|string|false|none|none|
|url|string(url)|false|none|none|
|host|string(hostname)|false|none|none|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|

<h2 id="tocS_VideoSummary">VideoSummary</h2>
<!-- backwards compatibility -->
<a id="schemavideosummary"></a>
<a id="schema_VideoSummary"></a>
<a id="tocSvideosummary"></a>
<a id="tocsvideosummary"></a>

```json
{
  "id": {},
  "uuid": {},
  "shortUUID": {},
  "name": "string",
  "isLive": true,
  "nsfw": true,
  "publishedAt": "1970-01-01T00:00:00Z",
  "thumbnails": [
    {
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "aspectRatio": "16:9"
    }
  ],
  "channel": {
    "id": 42,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|object id for the video|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|
|shortUUID|object|false|none|none|
|name|string|false|none|none|
|isLive|boolean|false|none|none|
|nsfw|boolean|false|none|none|
|publishedAt|string(date-time)|false|none|none|
|thumbnails|[[Thumbnail](#schemathumbnail)]|false|none|**PeerTube >= 8.1** Array of thumbnails for the video|
|channel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|

<h2 id="tocS_VideoChannelSummary">VideoChannelSummary</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsummary"></a>
<a id="schema_VideoChannelSummary"></a>
<a id="tocSvideochannelsummary"></a>
<a id="tocsvideochannelsummary"></a>

```json
{
  "id": 42,
  "name": "string",
  "displayName": "string",
  "url": "http://example.com",
  "host": "example.com",
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|displayName|string|false|none|none|
|url|string(url)|false|none|none|
|host|string(hostname)|false|none|none|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|

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
    "id": {},
    "uuid": {},
    "shortUUID": {},
    "isLive": true,
    "liveSchedules": [
      {
        "startAt": "1970-01-01T00:00:00Z"
      }
    ],
    "createdAt": "2017-10-01T10:52:46.396Z",
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "language": {
      "id": "en",
      "label": "English"
    },
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "duration": 1419,
    "aspectRatio": 1.778,
    "isLocal": true,
    "name": "What is PeerTube?",
    "thumbnailPath": "string",
    "previewPath": "string",
    "thumbnails": [
      {
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "aspectRatio": "16:9"
      }
    ],
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "views": 1337,
    "likes": 42,
    "dislikes": 7,
    "comments": 0,
    "nsfw": true,
    "nsfwFlags": {},
    "nsfwSummary": "string",
    "aiUsage": {
      "id": 1,
      "label": "string"
    },
    "commercialContent": {
      "id": 1,
      "label": "string"
    },
    "recommendationScope": {
      "id": 1,
      "label": "string"
    },
    "waitTranscoding": true,
    "state": {
      "id": 1,
      "label": "string"
    },
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01T00:00:00Z"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "account": {
      "id": 0,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "channel": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "userHistory": {
      "currentTime": 0
    }
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

<h2 id="tocS_Thumbnail">Thumbnail</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail"></a>
<a id="schema_Thumbnail"></a>
<a id="tocSthumbnail"></a>
<a id="tocsthumbnail"></a>

```json
{
  "fileUrl": "string",
  "width": 0,
  "height": 0,
  "aspectRatio": "16:9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileUrl|string|false|none|none|
|width|integer|false|none|none|
|height|integer|false|none|none|
|aspectRatio|string|false|none|none|

<h2 id="tocS_VideoFile">VideoFile</h2>
<!-- backwards compatibility -->
<a id="schemavideofile"></a>
<a id="schema_VideoFile"></a>
<a id="tocSvideofile"></a>
<a id="tocsvideofile"></a>

```json
{
  "id": 42,
  "magnetUri": "http://example.com",
  "resolution": {
    "id": 240,
    "label": "240p"
  },
  "size": 0,
  "torrentUrl": "http://example.com",
  "torrentDownloadUrl": "http://example.com",
  "fileUrl": "http://example.com",
  "playlistUrl": "http://example.com",
  "fileDownloadUrl": "http://example.com",
  "fps": 0,
  "width": 0,
  "height": 0,
  "metadataUrl": "http://example.com",
  "hasAudio": true,
  "hasVideo": true,
  "storage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|magnetUri|string(uri)|false|none|magnet URI allowing to resolve the video via BitTorrent without a metainfo file|
|resolution|[VideoResolutionConstant](#schemavideoresolutionconstant)|false|none|resolutions and their labels for the video|
|size|integer|false|none|Video file size in bytes|
|torrentUrl|string(url)|false|none|Direct URL of the torrent file|
|torrentDownloadUrl|string(url)|false|none|URL endpoint that transfers the torrent file as an attachment (so that the browser opens a download dialog)|
|fileUrl|string(url)|false|none|Direct URL of the video|
|playlistUrl|string(url)|false|none|Playlist URL of the file if it is owned by a playlist|
|fileDownloadUrl|string(url)|false|none|URL endpoint that transfers the video file as an attachment (so that the browser opens a download dialog)|
|fps|number|false|none|Frames per second of the video file|
|width|number|false|none|**PeerTube >= 6.1** Video stream width|
|height|number|false|none|**PeerTube >= 6.1** Video stream height|
|metadataUrl|string(url)|false|none|URL dereferencing the output of ffprobe on the file|
|hasAudio|boolean|false|none|**PeerTube >= 6.2** The file container has an audio stream|
|hasVideo|boolean|false|none|**PeerTube >= 6.2** The file container has a video stream|
|storage|[FileStorage](#schemafilestorage)|false|none|The file storage type:<br>  - `0` File system<br>  - `1` Object storage<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|storage|0|
|storage|1|

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
  "playlistUrl": "http://example.com",
  "segmentsSha256Url": "http://example.com",
  "files": [
    {
      "id": 42,
      "magnetUri": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentUrl": "http://example.com",
      "torrentDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "playlistUrl": "http://example.com",
      "fileDownloadUrl": "http://example.com",
      "fps": 0,
      "width": 0,
      "height": 0,
      "metadataUrl": "http://example.com",
      "hasAudio": true,
      "hasVideo": true,
      "storage": 0
    }
  ],
  "redundancies": [
    {
      "baseUrl": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|type|integer|false|none|Playlist type:<br>- `1`: HLS<br>|
|playlistUrl|string(url)|false|none|none|
|segmentsSha256Url|string(url)|false|none|none|
|files|[[VideoFile](#schemavideofile)]|false|none|Video files associated to this playlist.<br><br>The difference with the root `files` property is that these files are fragmented, so they can be used in this streaming playlist (HLS, etc.)<br>|
|redundancies|[object]|false|none|none|

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
  "playlistUrl": "http://example.com",
  "segmentsSha256Url": "http://example.com",
  "files": [
    {
      "id": 42,
      "magnetUri": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentUrl": "http://example.com",
      "torrentDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "playlistUrl": "http://example.com",
      "fileDownloadUrl": "http://example.com",
      "fps": 0,
      "width": 0,
      "height": 0,
      "metadataUrl": "http://example.com",
      "hasAudio": true,
      "hasVideo": true,
      "storage": 0
    }
  ],
  "redundancies": [
    {
      "baseUrl": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playlistUrl|string(url)|false|none|none|
|segmentsSha256Url|string(url)|false|none|none|
|files|[[VideoFile](#schemavideofile)]|false|none|Video files associated to this playlist.<br><br>The difference with the root `files` property is that these files are fragmented, so they can be used in this streaming playlist (HLS, etc.)<br>|
|redundancies|[object]|false|none|none|

<h2 id="tocS_VideoInfo">VideoInfo</h2>
<!-- backwards compatibility -->
<a id="schemavideoinfo"></a>
<a id="schema_VideoInfo"></a>
<a id="tocSvideoinfo"></a>
<a id="tocsvideoinfo"></a>

```json
{
  "id": {},
  "uuid": {},
  "name": "What is PeerTube?",
  "state": {
    "id": 1,
    "label": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|object id for the video|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|
|name|string|false|none|title of the video|
|state|object|false|none|represents the internal state of the video processing within the PeerTube instance|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "id": {},
  "uuid": {},
  "shortUUID": {},
  "isLive": true,
  "liveSchedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ],
  "createdAt": "2017-10-01T10:52:46.396Z",
  "publishedAt": "2018-10-01T10:52:46.396Z",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
  "category": {
    "id": 15,
    "label": "Science & Technology"
  },
  "licence": {
    "id": 2,
    "label": "Attribution - Share Alike"
  },
  "language": {
    "id": "en",
    "label": "English"
  },
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
  "duration": 1419,
  "aspectRatio": 1.778,
  "isLocal": true,
  "name": "What is PeerTube?",
  "thumbnailPath": "string",
  "previewPath": "string",
  "thumbnails": [
    {
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "aspectRatio": "16:9"
    }
  ],
  "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
  "views": 1337,
  "likes": 42,
  "dislikes": 7,
  "comments": 0,
  "nsfw": true,
  "nsfwFlags": {},
  "nsfwSummary": "string",
  "aiUsage": {
    "id": 1,
    "label": "string"
  },
  "commercialContent": {
    "id": 1,
    "label": "string"
  },
  "recommendationScope": {
    "id": 1,
    "label": "string"
  },
  "waitTranscoding": true,
  "state": {
    "id": 1,
    "label": "string"
  },
  "scheduledUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "blacklisted": true,
  "blacklistedReason": "string",
  "account": {
    "id": 0,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "channel": {
    "id": 42,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "userHistory": {
    "currentTime": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|object id for the video|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|
|shortUUID|object|false|none|none|
|isLive|boolean|false|none|none|
|liveSchedules|[[LiveSchedule](#schemaliveschedule)]|false|none|none|
|createdAt|string(date-time)|false|none|time at which the video object was first drafted|
|publishedAt|string(date-time)|false|none|time at which the video was marked as ready for playback (with restrictions depending on `privacy`). Usually set after a `state` evolution.|
|updatedAt|string(date-time)|false|none|last time the video's metadata was modified|
|originallyPublishedAt|string(date-time) \| null|false|none|used to represent a date of first publication, prior to the practical publication date of `publishedAt`|
|category|object|false|none|category in which the video is classified|
|licence|object|false|none|licence under which the video is distributed|
|language|object|false|none|main language used in the video|
|privacy|object|false|none|privacy policy used to distribute the video|
|truncatedDescription|string \| null|false|none|truncated description of the video, written in Markdown.<br>|
|duration|integer(seconds)|false|none|duration of the video in seconds|
|aspectRatio|number(float) \| null|false|none|**PeerTube >= 6.1** Aspect ratio of the video stream|
|isLocal|boolean|false|none|none|
|name|string|false|none|title of the video|
|thumbnailPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnails instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|previewPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnails instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|thumbnails|[[Thumbnail](#schemathumbnail)]|false|none|**PeerTube >= 8.1** Array of thumbnails for the video|
|embedPath|string|false|none|none|
|views|integer|false|none|none|
|likes|integer|false|none|none|
|dislikes|integer|false|none|none|
|comments|integer|false|none|**PeerTube >= 7.2** Number of comments on the video|
|nsfw|boolean|false|none|none|
|nsfwFlags|object|false|none|none|
|nsfwSummary|string|false|none|**PeerTube >= 7.2** More information about the sensitive content of the video|
|aiUsage|[VideoAIUsageConstant](#schemavideoaiusageconstant)|false|none|none|
|commercialContent|[VideoCommercialContentConstant](#schemavideocommercialcontentconstant)|false|none|none|
|recommendationScope|[VideoRecommendationScopeConstant](#schemavideorecommendationscopeconstant)|false|none|none|
|waitTranscoding|boolean \| null|false|none|none|
|state|object|false|none|represents the internal state of the video processing within the PeerTube instance|
|scheduledUpdate|object \| null|false|none|none|
|blacklisted|boolean \| null|false|none|none|
|blacklistedReason|string \| null|false|none|none|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|
|channel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|userHistory|object \| null|false|none|none|

<h2 id="tocS_ServerError">ServerError</h2>
<!-- backwards compatibility -->
<a id="schemaservererror"></a>
<a id="schema_ServerError"></a>
<a id="tocSservererror"></a>
<a id="tocsservererror"></a>

```json
{
  "type": "https://docs.joinpeertube.org/api-rest-reference.html#section/Errors/video_requires_password",
  "detail": "Please provide a password to access this password protected video",
  "status": 403,
  "code": "video_requires_password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string(uri-reference)|false|none|URI identifying the error type. `about:blank` when the error has no specific type. Otherwise it links to the corresponding section of the [Errors](#section/Errors) documentation; the type name itself is also available in `code`.<br>|
|detail|string|false|none|none|
|status|integer|false|none|none|
|code|string|false|none|none|

<h2 id="tocS_VideoDetails">VideoDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideodetails"></a>
<a id="schema_VideoDetails"></a>
<a id="tocSvideodetails"></a>
<a id="tocsvideodetails"></a>

```json
{
  "id": {},
  "uuid": {},
  "shortUUID": {},
  "isLive": true,
  "liveSchedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ],
  "createdAt": "2017-10-01T10:52:46.396Z",
  "publishedAt": "2018-10-01T10:52:46.396Z",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
  "category": {
    "id": 15,
    "label": "Science & Technology"
  },
  "licence": {
    "id": 2,
    "label": "Attribution - Share Alike"
  },
  "language": {
    "id": "en",
    "label": "English"
  },
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
  "duration": 1419,
  "aspectRatio": 1.778,
  "isLocal": true,
  "name": "What is PeerTube?",
  "thumbnailPath": "string",
  "previewPath": "string",
  "thumbnails": [
    {
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "aspectRatio": "16:9"
    }
  ],
  "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
  "views": 1337,
  "likes": 42,
  "dislikes": 7,
  "comments": 0,
  "nsfw": true,
  "nsfwFlags": {},
  "nsfwSummary": "string",
  "aiUsage": {
    "id": 1,
    "label": "string"
  },
  "commercialContent": {
    "id": 1,
    "label": "string"
  },
  "recommendationScope": {
    "id": 1,
    "label": "string"
  },
  "waitTranscoding": true,
  "state": {
    "id": 1,
    "label": "string"
  },
  "scheduledUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "blacklisted": true,
  "blacklistedReason": "string",
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "channel": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "displayName": "Videos of Framasoft",
    "description": "Videos made with <3 by Framasoft",
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
    "publicEmail": "user@example.com",
    "isLocal": true,
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "ownerAccount": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    },
    "videosCount": 0,
    "viewsPerDay": [
      {
        "date": "1970-01-01T00:00:00Z",
        "views": 0
      }
    ],
    "viewsGroupInterval": "day",
    "totalViews": 0
  },
  "userHistory": {
    "currentTime": 0
  },
  "viewers": 0,
  "description": "\"**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network,\nbased on free/libre software!*\\r\\n\\r\\n**Animation Produced by:** [LILA](https://libreart.info) - [ZeMarmot Team](https://film.zemarmot.net)\\r\\n\n*Directed by* Aryeom\\r\\n*Assistant* Jehan\\r\\n**Licence**: [CC-By-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)\\r\\n\\r\\n\n**Sponsored by** [Framasoft](https://framasoft.org)\\r\\n\\r\\n**Music**: [Red Step Forward](http://play.dogmazic.net/song.php?song_id=52491) - CC-By Ken Bushima\\r\\n\\r\\n\n**Movie Clip**: [Caminades 3: Llamigos](http://www.caminandes.com/) CC-By Blender Institute\\r\\n\\r\\n**Video sources**: https://gitlab.gnome.org/Jehan/what-is-peertube/\"\n",
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "tags": [
    "flowers",
    "gardening"
  ],
  "commentsPolicy": {
    "id": 1,
    "label": "string"
  },
  "downloadEnabled": true,
  "inputFileUpdatedAt": "1970-01-01T00:00:00Z",
  "trackerUrls": [
    "https://peertube2.cpy.re/tracker/announce",
    "wss://peertube2.cpy.re/tracker/socket"
  ],
  "files": [
    {
      "id": 42,
      "magnetUri": "http://example.com",
      "resolution": {
        "id": 240,
        "label": "240p"
      },
      "size": 0,
      "torrentUrl": "http://example.com",
      "torrentDownloadUrl": "http://example.com",
      "fileUrl": "http://example.com",
      "playlistUrl": "http://example.com",
      "fileDownloadUrl": "http://example.com",
      "fps": 0,
      "width": 0,
      "height": 0,
      "metadataUrl": "http://example.com",
      "hasAudio": true,
      "hasVideo": true,
      "storage": 0
    }
  ],
  "streamingPlaylists": [
    {
      "id": 42,
      "type": 1,
      "playlistUrl": "http://example.com",
      "segmentsSha256Url": "http://example.com",
      "files": [
        {
          "id": 42,
          "magnetUri": "http://example.com",
          "resolution": {
            "id": 240,
            "label": "240p"
          },
          "size": 0,
          "torrentUrl": "http://example.com",
          "torrentDownloadUrl": "http://example.com",
          "fileUrl": "http://example.com",
          "playlistUrl": "http://example.com",
          "fileDownloadUrl": "http://example.com",
          "fps": 0,
          "width": 0,
          "height": 0,
          "metadataUrl": "http://example.com",
          "hasAudio": true,
          "hasVideo": true,
          "storage": 0
        }
      ],
      "redundancies": [
        {
          "baseUrl": "http://example.com"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|object|false|none|object id for the video|
|uuid|object|false|none|universal identifier for the video, that can be used across instances|
|shortUUID|object|false|none|none|
|isLive|boolean|false|none|none|
|liveSchedules|[[LiveSchedule](#schemaliveschedule)]|false|none|none|
|createdAt|string(date-time)|false|none|time at which the video object was first drafted|
|publishedAt|string(date-time)|false|none|time at which the video was marked as ready for playback (with restrictions depending on `privacy`). Usually set after a `state` evolution.|
|updatedAt|string(date-time)|false|none|last time the video's metadata was modified|
|originallyPublishedAt|string(date-time) \| null|false|none|used to represent a date of first publication, prior to the practical publication date of `publishedAt`|
|category|object|false|none|category in which the video is classified|
|licence|object|false|none|licence under which the video is distributed|
|language|object|false|none|main language used in the video|
|privacy|object|false|none|privacy policy used to distribute the video|
|truncatedDescription|string \| null|false|none|truncated description of the video, written in Markdown.<br>|
|duration|integer(seconds)|false|none|duration of the video in seconds|
|aspectRatio|number(float) \| null|false|none|**PeerTube >= 6.1** Aspect ratio of the video stream|
|isLocal|boolean|false|none|none|
|name|string|false|none|title of the video|
|thumbnailPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnails instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|previewPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnails instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|thumbnails|[[Thumbnail](#schemathumbnail)]|false|none|**PeerTube >= 8.1** Array of thumbnails for the video|
|embedPath|string|false|none|none|
|views|integer|false|none|none|
|likes|integer|false|none|none|
|dislikes|integer|false|none|none|
|comments|integer|false|none|**PeerTube >= 7.2** Number of comments on the video|
|nsfw|boolean|false|none|none|
|nsfwFlags|object|false|none|none|
|nsfwSummary|string|false|none|**PeerTube >= 7.2** More information about the sensitive content of the video|
|aiUsage|[VideoAIUsageConstant](#schemavideoaiusageconstant)|false|none|none|
|commercialContent|[VideoCommercialContentConstant](#schemavideocommercialcontentconstant)|false|none|none|
|recommendationScope|[VideoRecommendationScopeConstant](#schemavideorecommendationscopeconstant)|false|none|none|
|waitTranscoding|boolean \| null|false|none|none|
|state|object|false|none|represents the internal state of the video processing within the PeerTube instance|
|scheduledUpdate|object \| null|false|none|none|
|blacklisted|boolean \| null|false|none|none|
|blacklistedReason|string \| null|false|none|none|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|
|channel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|userHistory|object \| null|false|none|none|
|viewers|integer|false|none|If the video is a live, you have the amount of current viewers|
|description|string \| null|false|none|full description of the video, written in Markdown.<br>|
|support|string \| null|false|none|A text tell the audience how to support the video creator|
|channel|[VideoChannel](#schemavideochannel)|false|none|none|
|account|[Account](#schemaaccount)|false|none|none|
|tags|[string]|false|none|none|
|commentsPolicy|[VideoCommentsPolicyConstant](#schemavideocommentspolicyconstant)|false|none|none|
|downloadEnabled|boolean|false|none|none|
|inputFileUpdatedAt|string(date-time) \| null|false|none|Latest input file update. Null if the file has never been replaced since the original upload|
|trackerUrls|[string(url)]|false|none|WebTorrent (`ws://` or `wss://`) and BitTorrent (`http://` or `https://`) trackers of the video<br>|
|files|[[VideoFile](#schemavideofile)]|false|none|Web compatible video files. If Web Video is disabled on the server:<br><br>- field will be empty<br>- video files will be found in `streamingPlaylists[].files` field<br>|
|streamingPlaylists|[[VideoStreamingPlaylists](#schemavideostreamingplaylists)]|false|none|HLS playlists/manifest files. If HLS is disabled on the server:<br><br>- field will be empty<br>- video files will be found in `files` field<br>|

<h2 id="tocS_FileRedundancyInformation">FileRedundancyInformation</h2>
<!-- backwards compatibility -->
<a id="schemafileredundancyinformation"></a>
<a id="schema_FileRedundancyInformation"></a>
<a id="tocSfileredundancyinformation"></a>
<a id="tocsfileredundancyinformation"></a>

```json
{
  "id": 42,
  "fileUrl": "http://example.com",
  "strategy": "manual",
  "size": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "expiresOn": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|fileUrl|string(url)|false|none|none|
|strategy|string|false|none|none|
|size|integer|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|expiresOn|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|strategy|manual|
|strategy|most-views|
|strategy|trending|
|strategy|recently-added|

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
  "url": "http://example.com",
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "redundancies": {
    "streamingPlaylists": [
      {
        "id": 42,
        "fileUrl": "http://example.com",
        "strategy": "manual",
        "size": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "expiresOn": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|redundancies|object|false|none|none|

<h2 id="tocS_AccountBlock">AccountBlock</h2>
<!-- backwards compatibility -->
<a id="schemaaccountblock"></a>
<a id="schema_AccountBlock"></a>
<a id="tocSaccountblock"></a>
<a id="tocsaccountblock"></a>

```json
{
  "byAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "blockedAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "blocklistSubscription": {
    "id": 42,
    "name": "string",
    "url": "http://example.com"
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byAccount|[Account](#schemaaccount)|false|none|none|
|blockedAccount|[Account](#schemaaccount)|false|none|none|
|blocklistSubscription|[BlocklistSubscriptionSummary](#schemablocklistsubscriptionsummary)|false|none|none|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS_ServerBlock">ServerBlock</h2>
<!-- backwards compatibility -->
<a id="schemaserverblock"></a>
<a id="schema_ServerBlock"></a>
<a id="tocSserverblock"></a>
<a id="tocsserverblock"></a>

```json
{
  "byAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "blockedServer": {
    "host": "example.com"
  },
  "blocklistSubscription": {
    "id": 42,
    "name": "string",
    "url": "http://example.com"
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byAccount|[Account](#schemaaccount)|false|none|none|
|blockedServer|object|false|none|none|
|blocklistSubscription|[BlocklistSubscriptionSummary](#schemablocklistsubscriptionsummary)|false|none|none|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS_BlocklistSubscription">BlocklistSubscription</h2>
<!-- backwards compatibility -->
<a id="schemablocklistsubscription"></a>
<a id="schema_BlocklistSubscription"></a>
<a id="tocSblocklistsubscription"></a>
<a id="tocsblocklistsubscription"></a>

```json
{
  "id": 42,
  "name": "string",
  "url": "http://example.com",
  "mutedAccountsCount": 0,
  "mutedServersCount": 0,
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|
|mutedAccountsCount|integer|false|none|none|
|mutedServersCount|integer|false|none|none|
|lastSyncAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_BlocklistSubscriptionSummary">BlocklistSubscriptionSummary</h2>
<!-- backwards compatibility -->
<a id="schemablocklistsubscriptionsummary"></a>
<a id="schema_BlocklistSubscriptionSummary"></a>
<a id="tocSblocklistsubscriptionsummary"></a>
<a id="tocsblocklistsubscriptionsummary"></a>

```json
{
  "id": 42,
  "name": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|

<h2 id="tocS_BlocklistLog">BlocklistLog</h2>
<!-- backwards compatibility -->
<a id="schemablocklistlog"></a>
<a id="schema_BlocklistLog"></a>
<a id="tocSblocklistlog"></a>
<a id="tocsblocklistlog"></a>

```json
{
  "id": 42,
  "action": "add",
  "target": "string",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|action|string|false|none|none|
|target|string|false|none|none|
|createdAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|add|
|action|delete|

<h2 id="tocS_AutoMuteList">AutoMuteList</h2>
<!-- backwards compatibility -->
<a id="schemaautomutelist"></a>
<a id="schema_AutoMuteList"></a>
<a id="tocSautomutelist"></a>
<a id="tocsautomutelist"></a>

```json
{
  "name": "string",
  "actions": [
    {
      "type": "block",
      "target": "string",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|actions|[object]|false|none|none|

<h2 id="tocS_CommentAutoTagPolicies">CommentAutoTagPolicies</h2>
<!-- backwards compatibility -->
<a id="schemacommentautotagpolicies"></a>
<a id="schema_CommentAutoTagPolicies"></a>
<a id="tocScommentautotagpolicies"></a>
<a id="tocscommentautotagpolicies"></a>

```json
{
  "review": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|review|[string]|false|none|Auto tags that automatically set the comment in review state|

<h2 id="tocS_VideoAutoTagPolicies">VideoAutoTagPolicies</h2>
<!-- backwards compatibility -->
<a id="schemavideoautotagpolicies"></a>
<a id="schema_VideoAutoTagPolicies"></a>
<a id="tocSvideoautotagpolicies"></a>
<a id="tocsvideoautotagpolicies"></a>

```json
{
  "autoBlock": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoBlock|[string]|false|none|Auto tags that will automatically block videos matching these tags|

<h2 id="tocS_AutomaticTagAvailable">AutomaticTagAvailable</h2>
<!-- backwards compatibility -->
<a id="schemaautomatictagavailable"></a>
<a id="schema_AutomaticTagAvailable"></a>
<a id="tocSautomatictagavailable"></a>
<a id="tocsautomatictagavailable"></a>

```json
{
  "available": [
    {
      "name": "string",
      "type": "core"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|[object]|false|none|Available auto tags that can be used to filter objects or set a comment in review state|

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
|id|integer|false|none|The video import state (Pending = `1`, Success = `2`, Failed = `3`, Rejected = `4`, Cancelled = `5`, Processing = `6`)<br>|
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

<h2 id="tocS_VideoCreateImport">VideoCreateImport</h2>
<!-- backwards compatibility -->
<a id="schemavideocreateimport"></a>
<a id="schema_VideoCreateImport"></a>
<a id="tocSvideocreateimport"></a>
<a id="tocsvideocreateimport"></a>

```json
{
  "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "name": "What is PeerTube?",
  "channelId": 3,
  "privacy": 1,
  "category": 15,
  "licence": 2,
  "language": "en",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "waitTranscoding": true,
  "generateTranscription": true,
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "nsfw": true,
  "nsfwSummary": null,
  "nsfwFlags": 0,
  "tags": [
    "framasoft",
    "peertube"
  ],
  "commentsPolicy": 1,
  "recommendationScope": 1,
  "aiUsage": 1,
  "commercialContent": 1,
  "downloadEnabled": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "thumbnailfile": "string",
  "previewfile": "string",
  "videoPasswords": [
    "string"
  ]
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
|torrentfile|string(binary)|true|none|Torrent file containing only the video file|
|name|string|true|none|Video name|
|channelId|integer|true|none|Channel id that will contain this video|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|description|string|false|none|Video description|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|
|generateTranscription|boolean|false|none|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|support|string|false|none|A text tell the audience how to support the video creator|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|nsfwSummary|object|false|none|More information about the sensitive content of the video|
|nsfwFlags|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|commentsPolicy|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|none|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|recommendationScope|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|none|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|aiUsage|[VideoAIUsageSet](#schemavideoaiusageset)|false|none|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|commercialContent|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|none|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|previewfile|string(binary)|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|videoPasswords|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|
|privacy|5|
|nsfwFlags|0|
|nsfwFlags|1|
|nsfwFlags|2|
|nsfwFlags|4|
|commentsPolicy|1|
|commentsPolicy|2|
|commentsPolicy|3|
|recommendationScope|1|
|recommendationScope|2|
|recommendationScope|3|
|recommendationScope|4|
|aiUsage|1|
|aiUsage|2|
|aiUsage|3|
|aiUsage|4|
|commercialContent|1|
|commercialContent|2|
|commercialContent|3|

<h2 id="tocS_VideoImport">VideoImport</h2>
<!-- backwards compatibility -->
<a id="schemavideoimport"></a>
<a id="schema_VideoImport"></a>
<a id="tocSvideoimport"></a>
<a id="tocsvideoimport"></a>

```json
{
  "id": 42,
  "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "magnetUri": "http://example.com",
  "torrentfile": "string",
  "torrentName": "string",
  "state": {
    "id": 1,
    "label": "Pending"
  },
  "error": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {},
    "isLive": true,
    "liveSchedules": [
      {
        "startAt": "1970-01-01T00:00:00Z"
      }
    ],
    "createdAt": "2017-10-01T10:52:46.396Z",
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "language": {
      "id": "en",
      "label": "English"
    },
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "duration": 1419,
    "aspectRatio": 1.778,
    "isLocal": true,
    "name": "What is PeerTube?",
    "thumbnailPath": "string",
    "previewPath": "string",
    "thumbnails": [
      {
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "aspectRatio": "16:9"
      }
    ],
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "views": 1337,
    "likes": 42,
    "dislikes": 7,
    "comments": 0,
    "nsfw": true,
    "nsfwFlags": {},
    "nsfwSummary": "string",
    "aiUsage": {
      "id": 1,
      "label": "string"
    },
    "commercialContent": {
      "id": 1,
      "label": "string"
    },
    "recommendationScope": {
      "id": 1,
      "label": "string"
    },
    "waitTranscoding": true,
    "state": {
      "id": 1,
      "label": "string"
    },
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01T00:00:00Z"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "account": {
      "id": 0,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "channel": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "userHistory": {
      "currentTime": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|targetUrl|string(url)|false|none|remote URL where to find the import's source video|
|magnetUri|string(uri)|false|none|magnet URI allowing to resolve the import's source video|
|torrentfile|string(binary)|false|none|Torrent file containing only the video file|
|torrentName|string|false|none|none|
|state|object|false|none|none|
|error|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|video|object \| null|false|none|none|

<h2 id="tocS_VideoImportsList">VideoImportsList</h2>
<!-- backwards compatibility -->
<a id="schemavideoimportslist"></a>
<a id="schema_VideoImportsList"></a>
<a id="tocSvideoimportslist"></a>
<a id="tocsvideoimportslist"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "targetUrl": "https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d",
      "magnetUri": "http://example.com",
      "torrentfile": "string",
      "torrentName": "string",
      "state": {
        "id": 1,
        "label": "Pending"
      },
      "error": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "video": {
        "id": {},
        "uuid": {},
        "shortUUID": {},
        "isLive": true,
        "liveSchedules": [
          {
            "startAt": "1970-01-01T00:00:00Z"
          }
        ],
        "createdAt": "2017-10-01T10:52:46.396Z",
        "publishedAt": "2018-10-01T10:52:46.396Z",
        "updatedAt": "2021-05-04T08:01:01.502Z",
        "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
        "category": {
          "id": 15,
          "label": "Science & Technology"
        },
        "licence": {
          "id": 2,
          "label": "Attribution - Share Alike"
        },
        "language": {
          "id": "en",
          "label": "English"
        },
        "privacy": {
          "id": 1,
          "label": "string"
        },
        "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
        "duration": 1419,
        "aspectRatio": 1.778,
        "isLocal": true,
        "name": "What is PeerTube?",
        "thumbnailPath": "string",
        "previewPath": "string",
        "thumbnails": [
          {
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "aspectRatio": "16:9"
          }
        ],
        "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
        "views": 1337,
        "likes": 42,
        "dislikes": 7,
        "comments": 0,
        "nsfw": true,
        "nsfwFlags": {},
        "nsfwSummary": "string",
        "aiUsage": {
          "id": 1,
          "label": "string"
        },
        "commercialContent": {
          "id": 1,
          "label": "string"
        },
        "recommendationScope": {
          "id": 1,
          "label": "string"
        },
        "waitTranscoding": true,
        "state": {
          "id": 1,
          "label": "string"
        },
        "scheduledUpdate": {
          "privacy": 1,
          "updateAt": "1970-01-01T00:00:00Z"
        },
        "blacklisted": true,
        "blacklistedReason": "string",
        "account": {
          "id": 0,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "url": "http://example.com",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "userHistory": {
          "currentTime": 0
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[VideoImport](#schemavideoimport)]|false|none|none|

<h2 id="tocS_Abuse">Abuse</h2>
<!-- backwards compatibility -->
<a id="schemaabuse"></a>
<a id="schema_Abuse"></a>
<a id="tocSabuse"></a>
<a id="tocsabuse"></a>

```json
{
  "id": 42,
  "reason": "The video is a spam",
  "predefinedReasons": [
    "spamOrMisleading"
  ],
  "reporterAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "state": {
    "id": 1,
    "label": "string"
  },
  "moderationComment": "Decided to ban the server since it spams us regularly",
  "video": {
    "id": 0,
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
    "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
    "name": "string",
    "nsfw": true,
    "startAt": "1970-01-01T00:00:00Z",
    "endAt": "1970-01-01T00:00:00Z",
    "deleted": true,
    "blacklisted": true,
    "thumbnailPath": "string",
    "thumbnails": [
      {
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "aspectRatio": "16:9"
      }
    ],
    "channel": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|reason|string|false|none|none|
|predefinedReasons|[AbusePredefinedReasons](#schemaabusepredefinedreasons)|false|none|none|
|reporterAccount|[Account](#schemaaccount)|false|none|none|
|state|[AbuseStateConstant](#schemaabusestateconstant)|false|none|none|
|moderationComment|string|false|none|none|
|video|object|false|none|none|
|createdAt|string(date-time)|false|none|none|

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
  "id": 42,
  "message": "string",
  "byModerator": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "account": {
    "id": 0,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|message|string|false|none|none|
|byModerator|boolean|false|none|none|
|createdAt|string(date-time)|false|none|none|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|

<h2 id="tocS_VideoBlacklist">VideoBlacklist</h2>
<!-- backwards compatibility -->
<a id="schemavideoblacklist"></a>
<a id="schema_VideoBlacklist"></a>
<a id="tocSvideoblacklist"></a>
<a id="tocsvideoblacklist"></a>

```json
{
  "id": 42,
  "reason": "string",
  "internalNote": "string",
  "unfederated": true,
  "type": 0,
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {},
    "isLive": true,
    "liveSchedules": [
      {
        "startAt": "1970-01-01T00:00:00Z"
      }
    ],
    "createdAt": "2017-10-01T10:52:46.396Z",
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "language": {
      "id": "en",
      "label": "English"
    },
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "duration": 1419,
    "aspectRatio": 1.778,
    "isLocal": true,
    "name": "What is PeerTube?",
    "thumbnailPath": "string",
    "previewPath": "string",
    "thumbnails": [
      {
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "aspectRatio": "16:9"
      }
    ],
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "views": 1337,
    "likes": 42,
    "dislikes": 7,
    "comments": 0,
    "nsfw": true,
    "nsfwFlags": {},
    "nsfwSummary": "string",
    "aiUsage": {
      "id": 1,
      "label": "string"
    },
    "commercialContent": {
      "id": 1,
      "label": "string"
    },
    "recommendationScope": {
      "id": 1,
      "label": "string"
    },
    "waitTranscoding": true,
    "state": {
      "id": 1,
      "label": "string"
    },
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01T00:00:00Z"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "account": {
      "id": 0,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "channel": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "userHistory": {
      "currentTime": 0
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|reason|string|false|none|Reason for the block (public)|
|internalNote|string|false|none|Internal note for moderators/admins|
|unfederated|boolean|false|none|none|
|type|integer|false|none|- `1`: manual block - `2`: automatic block by instance policy - `3`: automatic block by auto-tag policy<br>|
|video|[Video](#schemavideo)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_VideoBlacklistCreate">VideoBlacklistCreate</h2>
<!-- backwards compatibility -->
<a id="schemavideoblacklistcreate"></a>
<a id="schema_VideoBlacklistCreate"></a>
<a id="tocSvideoblacklistcreate"></a>
<a id="tocsvideoblacklistcreate"></a>

```json
{
  "reason": "string",
  "unfederate": true,
  "internalNote": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Reason for the block (public)|
|unfederate|boolean|false|none|Whether to unfederate the video|
|internalNote|string|false|none|Internal note for moderators/admins|

<h2 id="tocS_VideoBlacklistUpdate">VideoBlacklistUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavideoblacklistupdate"></a>
<a id="schema_VideoBlacklistUpdate"></a>
<a id="tocSvideoblacklistupdate"></a>
<a id="tocsvideoblacklistupdate"></a>

```json
{
  "reason": "string",
  "internalNote": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|Reason for the block (displayed publicly)|
|internalNote|string|false|none|Internal note for moderators/admins|

<h2 id="tocS_ChangeOwnership">ChangeOwnership</h2>
<!-- backwards compatibility -->
<a id="schemachangeownership"></a>
<a id="schema_ChangeOwnership"></a>
<a id="tocSchangeownership"></a>
<a id="tocschangeownership"></a>

```json
{
  "id": 42,
  "state": {
    "id": 1,
    "label": "string"
  },
  "initiatorAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "nextOwnerAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {},
    "name": "string",
    "isLive": true,
    "nsfw": true,
    "publishedAt": "1970-01-01T00:00:00Z",
    "thumbnails": [
      {
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "aspectRatio": "16:9"
      }
    ],
    "channel": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    }
  },
  "videoChannel": {
    "id": 42,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "createdAt": "1970-01-01T00:00:00Z"
}
```

Representation of a ownership change

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|state|object|false|none|none|
|initiatorAccount|[Account](#schemaaccount)|false|none|none|
|nextOwnerAccount|[Account](#schemaaccount)|false|none|none|
|video|[VideoSummary](#schemavideosummary)|false|none|none|
|videoChannel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS_VideoPlaylist">VideoPlaylist</h2>
<!-- backwards compatibility -->
<a id="schemavideoplaylist"></a>
<a id="schema_VideoPlaylist"></a>
<a id="tocSvideoplaylist"></a>
<a id="tocsvideoplaylist"></a>

```json
{
  "id": 42,
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "shortUUID": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "displayName": "string",
  "isLocal": true,
  "videoLength": 0,
  "thumbnailPath": "string",
  "thumbnails": [
    {
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "aspectRatio": "16:9"
    }
  ],
  "privacy": {
    "id": 1,
    "label": "string"
  },
  "type": {
    "id": 1,
    "label": "string"
  },
  "ownerAccount": {
    "id": 0,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "videoChannel": {
    "id": 42,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "videoChannelPosition": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|shortUUID|object|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|description|string|false|none|none|
|displayName|string|false|none|none|
|isLocal|boolean|false|none|none|
|videoLength|integer|false|none|none|
|thumbnailPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnails instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|thumbnails|[[Thumbnail](#schemathumbnail)]|false|none|**PeerTube >= 8.1** Array of thumbnails for the playlist|
|privacy|[VideoPlaylistPrivacyConstant](#schemavideoplaylistprivacyconstant)|false|none|none|
|type|[VideoPlaylistTypeConstant](#schemavideoplaylisttypeconstant)|false|none|none|
|ownerAccount|[AccountSummary](#schemaaccountsummary)|false|none|none|
|videoChannel|[VideoChannelSummary](#schemavideochannelsummary)|false|none|none|
|videoChannelPosition|integer|false|none|Position of the playlist in the channel|

<h2 id="tocS_VideoComment">VideoComment</h2>
<!-- backwards compatibility -->
<a id="schemavideocomment"></a>
<a id="schema_VideoComment"></a>
<a id="tocSvideocomment"></a>
<a id="tocsvideocomment"></a>

```json
{
  "id": 42,
  "url": "http://example.com",
  "text": "This video is wonderful!",
  "threadId": 42,
  "inReplyToCommentId": {},
  "videoId": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "deletedAt": null,
  "isDeleted": false,
  "heldForReview": true,
  "totalRepliesFromVideoAuthor": 0,
  "totalReplies": 0,
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|url|string(url)|false|none|none|
|text|string(html)|false|none|Text of the comment|
|threadId|[id](#schemaid)|false|none|none|
|inReplyToCommentId|object \| null|false|none|none|
|videoId|object|false|none|object id for the video|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deletedAt|string(date-time) \| null|false|none|none|
|isDeleted|boolean|false|none|none|
|heldForReview|boolean|false|none|none|
|totalRepliesFromVideoAuthor|integer|false|none|none|
|totalReplies|integer|false|none|none|
|account|[Account](#schemaaccount)|false|none|none|

<h2 id="tocS_VideoCommentThreadTree">VideoCommentThreadTree</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentthreadtree"></a>
<a id="schema_VideoCommentThreadTree"></a>
<a id="tocSvideocommentthreadtree"></a>
<a id="tocsvideocommentthreadtree"></a>

```json
{
  "comment": {
    "id": 42,
    "url": "http://example.com",
    "text": "This video is wonderful!",
    "threadId": 42,
    "inReplyToCommentId": {},
    "videoId": {},
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "isDeleted": false,
    "heldForReview": true,
    "totalRepliesFromVideoAuthor": 0,
    "totalReplies": 0,
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    }
  },
  "children": [
    {
      "comment": {
        "id": 42,
        "url": "http://example.com",
        "text": "This video is wonderful!",
        "threadId": 42,
        "inReplyToCommentId": {},
        "videoId": {},
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "deletedAt": null,
        "isDeleted": false,
        "heldForReview": true,
        "totalRepliesFromVideoAuthor": 0,
        "totalReplies": 0,
        "account": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userId": {},
          "displayName": "string",
          "description": "string"
        }
      },
      "children": [
        {}
      ],
      "totalChildren": 0
    }
  ],
  "totalChildren": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|[VideoComment](#schemavideocomment)|false|none|none|
|children|[[VideoCommentThreadTree](#schemavideocommentthreadtree)]|false|none|Direct replies of `comment`. The server truncates the tree in depth (see the `maxDepth` parameter) and in width, so this array may contain less elements than `totalChildren`. Missing replies can be fetched using `GET /api/v1/videos/{id}/comments/{commentId}/replies`<br>|
|totalChildren|integer|false|none|Total number of direct replies of `comment` the current user can see|

<h2 id="tocS_VideoCommentForOwnerOrAdmin">VideoCommentForOwnerOrAdmin</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentforowneroradmin"></a>
<a id="schema_VideoCommentForOwnerOrAdmin"></a>
<a id="tocSvideocommentforowneroradmin"></a>
<a id="tocsvideocommentforowneroradmin"></a>

```json
{
  "id": 42,
  "url": "http://example.com",
  "text": "This video is wonderful!",
  "heldForReview": true,
  "threadId": 42,
  "inReplyToCommentId": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "video": {
    "id": {},
    "uuid": {},
    "name": "What is PeerTube?",
    "state": {
      "id": 1,
      "label": "string"
    }
  },
  "automaticTags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|url|string(url)|false|none|none|
|text|string(html)|false|none|Text of the comment|
|heldForReview|boolean|false|none|none|
|threadId|[id](#schemaid)|false|none|none|
|inReplyToCommentId|object \| null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|account|[Account](#schemaaccount)|false|none|none|
|video|[VideoInfo](#schemavideoinfo)|false|none|none|
|automaticTags|[string]|false|none|none|

<h2 id="tocS_Storyboard">Storyboard</h2>
<!-- backwards compatibility -->
<a id="schemastoryboard"></a>
<a id="schema_Storyboard"></a>
<a id="tocSstoryboard"></a>
<a id="tocsstoryboard"></a>

```json
{
  "storyboardPath": "string",
  "fileUrl": "string",
  "totalHeight": 0,
  "totalWidth": 0,
  "spriteHeight": 0,
  "spriteWidth": 0,
  "spriteDuration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storyboardPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.0, use fileUrl instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|fileUrl|string|false|none|**PeerTube >= 7.1**|
|totalHeight|integer|false|none|none|
|totalWidth|integer|false|none|none|
|spriteHeight|integer|false|none|none|
|spriteWidth|integer|false|none|none|
|spriteDuration|integer|false|none|none|

<h2 id="tocS_VideoCaption">VideoCaption</h2>
<!-- backwards compatibility -->
<a id="schemavideocaption"></a>
<a id="schema_VideoCaption"></a>
<a id="tocSvideocaption"></a>
<a id="tocsvideocaption"></a>

```json
{
  "language": {
    "id": "en",
    "label": "English"
  },
  "automaticallyGenerated": true,
  "captionPath": "string",
  "fileUrl": "string",
  "m3u8Url": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[VideoConstantString-Language](#schemavideoconstantstring-language)|false|none|none|
|automaticallyGenerated|boolean|false|none|none|
|captionPath|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.0, use fileUrl instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|fileUrl|string|false|none|**PeerTube >= 7.1**|
|m3u8Url|string|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_VideoChapters">VideoChapters</h2>
<!-- backwards compatibility -->
<a id="schemavideochapters"></a>
<a id="schema_VideoChapters"></a>
<a id="tocSvideochapters"></a>
<a id="tocsvideochapters"></a>

```json
{
  "chapters": {
    "title": "string",
    "timecode": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chapters|object|false|none|none|

<h2 id="tocS_VideoSource">VideoSource</h2>
<!-- backwards compatibility -->
<a id="schemavideosource"></a>
<a id="schema_VideoSource"></a>
<a id="tocSvideosource"></a>
<a id="tocsvideosource"></a>

```json
{
  "inputFilename": "string",
  "fileDownloadUrl": "string",
  "resolution": {
    "id": 240,
    "label": "240p"
  },
  "size": 0,
  "fps": 0,
  "width": 0,
  "height": 0,
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputFilename|string|false|none|Uploaded/imported filename|
|fileDownloadUrl|string|false|none|**PeerTube >= 6.1** If enabled by the admin, the video source file is kept on the server and can be downloaded by the owner|
|resolution|object|false|none|**PeerTube >= 6.1**|
|size|integer|false|none|**PeerTube >= 6.1** Video file size in bytes|
|fps|number|false|none|**PeerTube >= 6.1** Frames per second of the video file|
|width|integer|false|none|**PeerTube >= 6.1** Video stream width|
|height|integer|false|none|**PeerTube >= 6.1** Video stream height|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS_ActorImage">ActorImage</h2>
<!-- backwards compatibility -->
<a id="schemaactorimage"></a>
<a id="schema_ActorImage"></a>
<a id="tocSactorimage"></a>
<a id="tocsactorimage"></a>

```json
{
  "path": "string",
  "fileUrl": "string",
  "width": 0,
  "height": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string \| null|false|none|**Deprecated.** Deprecated in PeerTube v8.0, use fileUrl instead. Null if the file is stored in object storage: use the non-deprecated field instead.|
|fileUrl|string|false|none|**PeerTube >= 7.1**|
|width|integer|false|none|none|
|height|integer|false|none|**PeerTube >= 7.3**|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_ActorInfo">ActorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaactorinfo"></a>
<a id="schema_ActorInfo"></a>
<a id="tocSactorinfo"></a>
<a id="tocsactorinfo"></a>

```json
{
  "id": 42,
  "name": "string",
  "displayName": "string",
  "host": "example.com",
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|displayName|string|false|none|none|
|host|string(hostname)|false|none|none|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|

<h2 id="tocS_Actor">Actor</h2>
<!-- backwards compatibility -->
<a id="schemaactor"></a>
<a id="schema_Actor"></a>
<a id="tocSactor"></a>
<a id="tocsactor"></a>

```json
{
  "id": 42,
  "url": "http://example.com",
  "name": {},
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "followingCount": 0,
  "followersCount": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|url|string(url)|false|none|none|
|name|object|false|none|immutable name of the actor, used to find or mention it|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|
|host|string(hostname)|false|none|server on which the actor is resident|
|hostRedundancyAllowed|boolean \| null|false|none|whether this actor's host allows redundancy of its videos|
|followingCount|integer|false|none|number of actors subscribed to by this actor, as seen by this instance|
|followersCount|integer|false|none|number of followers of this actor, as seen by this instance|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "id": 42,
  "url": "http://example.com",
  "name": {},
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "followingCount": 0,
  "followersCount": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "userId": {},
  "displayName": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|url|string(url)|false|none|none|
|name|object|false|none|immutable name of the actor, used to find or mention it|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|
|host|string(hostname)|false|none|server on which the actor is resident|
|hostRedundancyAllowed|boolean \| null|false|none|whether this actor's host allows redundancy of its videos|
|followingCount|integer|false|none|number of actors subscribed to by this actor, as seen by this instance|
|followersCount|integer|false|none|number of followers of this actor, as seen by this instance|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|userId|object \| null|false|none|object id for the user tied to this account|
|displayName|string|false|none|editable name of the account, displayed in its representations|
|description|string \| null|false|none|text or bio displayed on the account's profile|

<h2 id="tocS_UserViewingVideo">UserViewingVideo</h2>
<!-- backwards compatibility -->
<a id="schemauserviewingvideo"></a>
<a id="schema_UserViewingVideo"></a>
<a id="tocSuserviewingvideo"></a>
<a id="tocsuserviewingvideo"></a>

```json
{
  "currentTime": 5,
  "viewEvent": "seek",
  "sessionId": "string",
  "client": "string",
  "device": {},
  "operatingSystem": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentTime|integer(seconds)|true|none|timestamp within the video, in seconds|
|viewEvent|string|false|none|Event since last viewing call:<br> * `seek` - If the user seeked the video<br>|
|sessionId|string|false|none|Optional param to represent the current viewer session. Used by the backend to properly count one view per session per video. PeerTube admin can configure the server to not trust this `sessionId` parameter but use the request IP address instead to identify a viewer.<br>|
|client|string|false|none|Client software used to watch the video. For example "Firefox", "PeerTube Approval Android", etc.<br>|
|device|object|false|none|Device used to watch the video. For example "desktop", "mobile", "smarttv", etc.<br>|
|operatingSystem|string|false|none|Operating system used to watch the video. For example "Windows", "Ubuntu", etc.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|viewEvent|seek|

<h2 id="tocS_VideoStatsOverall">VideoStatsOverall</h2>
<!-- backwards compatibility -->
<a id="schemavideostatsoverall"></a>
<a id="schema_VideoStatsOverall"></a>
<a id="tocSvideostatsoverall"></a>
<a id="tocsvideostatsoverall"></a>

```json
{
  "averageWatchTime": 0,
  "totalWatchTime": 0,
  "viewersPeak": 0,
  "totalViewers": 0,
  "viewersPeakDate": "1970-01-01T00:00:00Z",
  "countries": [
    {
      "isoCode": "string",
      "viewers": 0
    }
  ],
  "subdivisions": [
    {
      "name": "string",
      "viewers": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageWatchTime|number|false|none|none|
|totalWatchTime|number|false|none|none|
|viewersPeak|number|false|none|none|
|totalViewers|number|false|none|none|
|viewersPeakDate|string(date-time)|false|none|none|
|countries|[object]|false|none|none|
|subdivisions|[object]|false|none|none|

<h2 id="tocS_VideoStatsUserAgentDevice">VideoStatsUserAgentDevice</h2>
<!-- backwards compatibility -->
<a id="schemavideostatsuseragentdevice"></a>
<a id="schema_VideoStatsUserAgentDevice"></a>
<a id="tocSvideostatsuseragentdevice"></a>
<a id="tocsvideostatsuseragentdevice"></a>

```json
"console"
```

<h2 id="tocS_VideoStatsUserAgent">VideoStatsUserAgent</h2>
<!-- backwards compatibility -->
<a id="schemavideostatsuseragent"></a>
<a id="schema_VideoStatsUserAgent"></a>
<a id="tocSvideostatsuseragent"></a>
<a id="tocsvideostatsuseragent"></a>

```json
{
  "clients": [
    {
      "name": "string",
      "viewers": 0
    }
  ],
  "devices": [
    {
      "name": "console",
      "viewers": 0
    }
  ],
  "operatingSystem": [
    {
      "name": "string",
      "viewers": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|none|
|devices|[object]|false|none|none|
|operatingSystem|[object]|false|none|none|

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
      "second": 0,
      "retentionPercent": 0
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

<h2 id="tocS_ServerConfig">ServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfig"></a>
<a id="schema_ServerConfig"></a>
<a id="tocSserverconfig"></a>
<a id="tocsserverconfig"></a>

```json
{
  "instance": {
    "name": "string",
    "shortDescription": "string",
    "defaultClientRoute": "string",
    "isNSFW": true,
    "defaultNSFWPolicy": "string",
    "serverCountry": "string",
    "defaultLanguage": "string",
    "support": {
      "text": "string"
    },
    "social": {
      "externalLink": "string",
      "mastodonLink": "string",
      "blueskyLink": "string",
      "xLink": "string"
    },
    "customizations": {
      "javascript": "string",
      "css": "string"
    },
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "search": {
    "remoteUri": {
      "users": true,
      "anonymous": true
    }
  },
  "plugin": {
    "registered": [
      "string"
    ]
  },
  "theme": {
    "registered": [
      "string"
    ]
  },
  "email": {
    "enabled": true
  },
  "contactForm": {
    "enabled": true
  },
  "serverVersion": "string",
  "serverCommit": "string",
  "signup": {
    "allowed": true,
    "allowedForCurrentIP": true,
    "requiresEmailVerification": true
  },
  "transcoding": {
    "hls": {
      "enabled": true
    },
    "web_videos": {
      "enabled": true
    },
    "enabledResolutions": [
      240
    ]
  },
  "import": {
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    },
    "videoChannelSynchronization": {
      "enabled": true
    },
    "users": {
      "enabled": true,
      "resumableUpload": {
        "minChunkSize": 0
      }
    }
  },
  "export": {
    "users": {
      "enabled": true,
      "exportExpiration": 0,
      "maxUserVideoQuota": 0
    }
  },
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "blocklist": {
    "publicLog": {
      "enabled": true
    }
  },
  "avatar": {
    "file": {
      "size": {
        "max": 0
      }
    },
    "extensions": [
      "string"
    ]
  },
  "video": {
    "image": {
      "extensions": [
        "string"
      ],
      "size": {
        "max": 0
      }
    },
    "file": {
      "extensions": [
        "string"
      ]
    }
  },
  "videoCaption": {
    "file": {
      "size": {
        "max": 0
      },
      "extensions": [
        "string"
      ]
    }
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  },
  "trending": {
    "videos": {
      "intervalDays": 0
    }
  },
  "tracker": {
    "enabled": true
  },
  "followings": {
    "instance": {
      "autoFollowIndex": {
        "indexUrl": "http://example.com"
      }
    }
  },
  "federation": {
    "enabled": true
  },
  "homepage": {
    "enabled": true
  },
  "openTelemetry": {
    "metrics": {
      "enabled": true,
      "playbackStatsInterval": 0
    }
  },
  "views": {
    "videos": {
      "countViewAfter": 0,
      "watchingInterval": {
        "anonymous": 0,
        "users": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|object|false|none|none|
|search|object|false|none|none|
|plugin|object|false|none|none|
|theme|object|false|none|none|
|email|object|false|none|none|
|contactForm|object|false|none|none|
|serverVersion|string|false|none|none|
|serverCommit|string|false|none|none|
|signup|object|false|none|none|
|transcoding|object|false|none|none|
|import|object|false|none|none|
|export|object|false|none|none|
|autoBlacklist|object|false|none|none|
|blocklist|object|false|none|none|
|avatar|object|false|none|none|
|video|object|false|none|none|
|videoCaption|object|false|none|none|
|user|object|false|none|none|
|trending|object|false|none|none|
|tracker|object|false|none|none|
|followings|object|false|none|none|
|federation|object|false|none|none|
|homepage|object|false|none|none|
|openTelemetry|object|false|none|PeerTube >= 6.1|
|views|object|false|none|PeerTube >= 6.1|

<h2 id="tocS_SendClientLog">SendClientLog</h2>
<!-- backwards compatibility -->
<a id="schemasendclientlog"></a>
<a id="schema_SendClientLog"></a>
<a id="tocSsendclientlog"></a>
<a id="tocssendclientlog"></a>

```json
{
  "message": "string",
  "url": "string",
  "level": "error",
  "stackTrace": "string",
  "userAgent": "string",
  "meta": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|url|string|true|none|URL of the current user page|
|level|string|true|none|none|
|stackTrace|string|false|none|Stack trace of the error if there is one|
|userAgent|string|false|none|User agent of the web browser that sends the message|
|meta|string|false|none|Additional information regarding this log|

#### Enumerated Values

|Property|Value|
|---|---|
|level|error|
|level|warn|

<h2 id="tocS_ServerStats">ServerStats</h2>
<!-- backwards compatibility -->
<a id="schemaserverstats"></a>
<a id="schema_ServerStats"></a>
<a id="tocSserverstats"></a>
<a id="tocsserverstats"></a>

```json
{
  "totalUsers": 0,
  "totalDailyActiveUsers": 0,
  "totalWeeklyActiveUsers": 0,
  "totalMonthlyActiveUsers": 0,
  "totalModerators": 0,
  "totalAdmins": 0,
  "totalLocalVideos": 0,
  "totalLocalVideoViews": 0,
  "totalLocalVideoDownloads": 0,
  "totalLocalVideoComments": 0,
  "totalLocalVideoFilesSize": 0,
  "totalVideos": 0,
  "totalVideoComments": 0,
  "totalLocalVideoChannels": 0,
  "totalLocalDailyActiveVideoChannels": 0,
  "totalLocalWeeklyActiveVideoChannels": 0,
  "totalLocalMonthlyActiveVideoChannels": 0,
  "totalLocalPlaylists": 0,
  "totalInstanceFollowers": 0,
  "totalInstanceFollowing": 0,
  "videosRedundancy": [
    {
      "strategy": "string",
      "totalSize": 0,
      "totalUsed": 0,
      "totalVideoFiles": 0,
      "totalVideos": 0
    }
  ],
  "totalActivityPubMessagesProcessed": 0,
  "totalActivityPubMessagesSuccesses": 0,
  "totalActivityPubMessagesErrors": 0,
  "activityPubMessagesProcessedPerSecond": 0,
  "totalActivityPubMessagesWaiting": 0,
  "averageRegistrationRequestResponseTimeMs": 0,
  "totalRegistrationRequestsProcessed": 0,
  "totalRegistrationRequests": 0,
  "averageAbuseResponseTimeMs": 0,
  "totalAbusesProcessed": 0,
  "totalAbuses": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalUsers|number|false|none|none|
|totalDailyActiveUsers|number|false|none|none|
|totalWeeklyActiveUsers|number|false|none|none|
|totalMonthlyActiveUsers|number|false|none|none|
|totalModerators|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled total moderators stats|
|totalAdmins|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled total admins stats|
|totalLocalVideos|number|false|none|none|
|totalLocalVideoViews|number|false|none|Total video views made on the instance|
|totalLocalVideoDownloads|number|false|none|Total video downloads made on the instance|
|totalLocalVideoComments|number|false|none|Total comments made by local users|
|totalLocalVideoFilesSize|number|false|none|none|
|totalVideos|number|false|none|none|
|totalVideoComments|number|false|none|none|
|totalLocalVideoChannels|number|false|none|none|
|totalLocalDailyActiveVideoChannels|number|false|none|none|
|totalLocalWeeklyActiveVideoChannels|number|false|none|none|
|totalLocalMonthlyActiveVideoChannels|number|false|none|none|
|totalLocalPlaylists|number|false|none|none|
|totalInstanceFollowers|number|false|none|none|
|totalInstanceFollowing|number|false|none|none|
|videosRedundancy|[object]|false|none|none|
|totalActivityPubMessagesProcessed|number|false|none|none|
|totalActivityPubMessagesSuccesses|number|false|none|none|
|totalActivityPubMessagesErrors|number|false|none|none|
|activityPubMessagesProcessedPerSecond|number|false|none|none|
|totalActivityPubMessagesWaiting|number|false|none|none|
|averageRegistrationRequestResponseTimeMs|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled registration requests stats|
|totalRegistrationRequestsProcessed|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled registration requests stats|
|totalRegistrationRequests|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled registration requests stats|
|averageAbuseResponseTimeMs|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled abuses stats|
|totalAbusesProcessed|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled abuses stats|
|totalAbuses|number|false|none|**PeerTube >= 6.1** Value is null if the admin disabled abuses stats|

<h2 id="tocS_ServerConfigAbout">ServerConfigAbout</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfigabout"></a>
<a id="schema_ServerConfigAbout"></a>
<a id="tocSserverconfigabout"></a>
<a id="tocsserverconfigabout"></a>

```json
{
  "instance": {
    "name": "string",
    "shortDescription": "string",
    "description": "string",
    "terms": "string",
    "codeOfConduct": "string",
    "hardwareInformation": "string",
    "creationReason": "string",
    "moderationInformation": "string",
    "administrator": "string",
    "maintenanceLifetime": "string",
    "businessModel": "string",
    "support": {
      "text": "string"
    },
    "languages": [
      "string"
    ],
    "categories": [
      0
    ],
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|object|false|none|none|

<h2 id="tocS_InstanceTranslation">InstanceTranslation</h2>
<!-- backwards compatibility -->
<a id="schemainstancetranslation"></a>
<a id="schema_InstanceTranslation"></a>
<a id="tocSinstancetranslation"></a>
<a id="tocsinstancetranslation"></a>

```json
{
  "language": "fr-FR",
  "shortDescription": "string",
  "description": "string",
  "terms": "string",
  "codeOfConduct": "string",
  "moderationInformation": "string",
  "administrator": "string",
  "creationReason": "string",
  "maintenanceLifetime": "string",
  "businessModel": "string",
  "hardwareInformation": "string",
  "supportText": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|Locale of the web interface|
|shortDescription|string|false|none|none|
|description|string|false|none|none|
|terms|string|false|none|none|
|codeOfConduct|string|false|none|none|
|moderationInformation|string|false|none|none|
|administrator|string|false|none|none|
|creationReason|string|false|none|none|
|maintenanceLifetime|string|false|none|none|
|businessModel|string|false|none|none|
|hardwareInformation|string|false|none|none|
|supportText|string|false|none|none|

<h2 id="tocS_ServerConfigCustom">ServerConfigCustom</h2>
<!-- backwards compatibility -->
<a id="schemaserverconfigcustom"></a>
<a id="schema_ServerConfigCustom"></a>
<a id="tocSserverconfigcustom"></a>
<a id="tocsserverconfigcustom"></a>

```json
{
  "instance": {
    "name": "string",
    "shortDescription": "string",
    "description": "string",
    "terms": "string",
    "codeOfConduct": "string",
    "creationReason": "string",
    "moderationInformation": "string",
    "administrator": "string",
    "maintenanceLifetime": "string",
    "businessModel": "string",
    "hardwareInformation": "string",
    "translations": [
      {
        "language": "fr-FR",
        "shortDescription": "string",
        "description": "string",
        "terms": "string",
        "codeOfConduct": "string",
        "moderationInformation": "string",
        "administrator": "string",
        "creationReason": "string",
        "maintenanceLifetime": "string",
        "businessModel": "string",
        "hardwareInformation": "string",
        "supportText": "string"
      }
    ],
    "languages": [
      "string"
    ],
    "categories": [
      0
    ],
    "isNSFW": true,
    "defaultNSFWPolicy": "string",
    "serverCountry": "string",
    "support": {
      "text": "string"
    },
    "social": {
      "externalLink": "string",
      "mastodonLink": "string",
      "blueskyLink": "string",
      "xLink": "string"
    },
    "defaultClientRoute": "string",
    "customizations": {
      "javascript": "string",
      "css": "string"
    }
  },
  "theme": {
    "default": "string"
  },
  "services": {
    "twitter": {
      "username": "string"
    }
  },
  "cache": {
    "previews": {
      "size": 0
    },
    "captions": {
      "size": 0
    }
  },
  "signup": {
    "enabled": true,
    "limit": 0,
    "requiresEmailVerification": true
  },
  "admin": {
    "email": "user@example.com"
  },
  "contactForm": {
    "enabled": true
  },
  "user": {
    "videoQuota": 16810141515,
    "videoQuotaDaily": 1681014151
  },
  "transcoding": {
    "enabled": true,
    "originalFile": {
      "keep": true
    },
    "allowAdditionalExtensions": true,
    "allowAudioFiles": true,
    "threads": 0,
    "concurrency": 0,
    "profile": "default",
    "resolutions": {
      "0p": true,
      "144p": true,
      "240p": true,
      "360p": true,
      "480p": true,
      "720p": true,
      "1080p": true,
      "1440p": true,
      "2160p": true
    },
    "web_videos": {
      "enabled": true
    },
    "hls": {
      "enabled": true,
      "splitAudioAndVideo": true
    }
  },
  "import": {
    "videos": {
      "http": {
        "enabled": true
      },
      "torrent": {
        "enabled": true
      }
    },
    "video_channel_synchronization": {
      "enabled": true
    }
  },
  "autoBlacklist": {
    "videos": {
      "ofUsers": {
        "enabled": true
      }
    }
  },
  "blocklist": {
    "publicLog": {
      "enabled": true
    }
  },
  "followers": {
    "instance": {
      "enabled": true,
      "manualApproval": true
    }
  },
  "storyboard": {
    "enabled": true
  },
  "defaults": {
    "publish": {
      "downloadEnabled": true,
      "commentsPolicy": 1,
      "recommendationScope": 1,
      "privacy": 1,
      "licence": 2
    },
    "p2p": {
      "webapp": {
        "enabled": true
      },
      "embed": {
        "enabled": true
      }
    },
    "player": {
      "autoPlay": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|object|false|none|none|
|theme|object|false|none|none|
|services|object|false|none|none|
|cache|object|false|none|none|
|signup|object|false|none|none|
|admin|object|false|none|none|
|contactForm|object|false|none|none|
|user|object|false|none|Settings that apply to new users, if registration is enabled|
|transcoding|object|false|none|Settings pertaining to transcoding jobs|
|import|object|false|none|none|
|autoBlacklist|object|false|none|none|
|blocklist|object|false|none|none|
|followers|object|false|none|none|
|storyboard|object|false|none|none|
|defaults|object|false|none|none|

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

<h2 id="tocS_Follow">Follow</h2>
<!-- backwards compatibility -->
<a id="schemafollow"></a>
<a id="schema_Follow"></a>
<a id="tocSfollow"></a>
<a id="tocsfollow"></a>

```json
{
  "id": 42,
  "follower": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "following": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  },
  "score": 0,
  "state": "pending",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|follower|[Actor](#schemaactor)|false|none|none|
|following|[Actor](#schemaactor)|false|none|none|
|score|number|false|none|score reflecting the reachability of the actor, with steps of `10` and a base score of `1000`.|
|state|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|pending|
|state|accepted|

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

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"activitypub-cleaner"
```

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "id": 42,
  "state": "active",
  "type": "activitypub-cleaner",
  "data": {},
  "error": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "finishedOn": "1970-01-01T00:00:00Z",
  "processedOn": "1970-01-01T00:00:00Z",
  "canCancel": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|state|string|false|none|none|
|type|[JobType](#schemajobtype)|false|none|none|
|data|object|false|none|none|
|error|object|false|none|none|
|createdAt|string(date-time)|false|none|none|
|finishedOn|string(date-time)|false|none|none|
|processedOn|string(date-time)|false|none|none|
|canCancel|boolean|false|none|Whether this job is currently running and supports cancellation|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|completed|
|state|failed|
|state|waiting|
|state|delayed|
|type|activitypub-cleaner|
|type|activitypub-follow|
|type|activitypub-http-broadcast|
|type|activitypub-http-broadcast-parallel|
|type|activitypub-http-fetcher|
|type|activitypub-http-unicast|
|type|activitypub-refresher|
|type|actor-keys|
|type|after-video-channel-import|
|type|build-automatic-tags|
|type|build-object-automatic-tags|
|type|create-user-export|
|type|email|
|type|federate-video|
|type|generate-video-storyboard|
|type|import-user-archive|
|type|manage-video-torrent|
|type|move-to-file-system|
|type|move-to-object-storage|
|type|notify|
|type|transcoding-job-builder|
|type|video-channel-import|
|type|video-file-import|
|type|video-files-lifecycle|
|type|video-import|
|type|video-live-ending|
|type|video-redundancy|
|type|video-studio-edition|
|type|video-transcoding|
|type|video-transcription|
|type|videos-stats|

<h2 id="tocS_AddUserResponse">AddUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemaadduserresponse"></a>
<a id="schema_AddUserResponse"></a>
<a id="tocSadduserresponse"></a>
<a id="tocsadduserresponse"></a>

```json
{
  "user": {
    "id": 42,
    "account": {
      "id": 42
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|

<h2 id="tocS_VideoUploadRequestCommon">VideoUploadRequestCommon</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadrequestcommon"></a>
<a id="schema_VideoUploadRequestCommon"></a>
<a id="tocSvideouploadrequestcommon"></a>
<a id="tocsvideouploadrequestcommon"></a>

```json
{
  "name": "What is PeerTube?",
  "channelId": 3,
  "privacy": 1,
  "category": 15,
  "licence": 2,
  "language": "en",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "waitTranscoding": true,
  "generateTranscription": true,
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "nsfw": true,
  "nsfwSummary": null,
  "nsfwFlags": 0,
  "tags": [
    "framasoft",
    "peertube"
  ],
  "commentsPolicy": 1,
  "recommendationScope": 1,
  "aiUsage": 1,
  "commercialContent": 1,
  "downloadEnabled": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "thumbnailfile": "string",
  "previewfile": "string",
  "videoPasswords": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Video name|
|channelId|integer|true|none|Channel id that will contain this video|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|description|string|false|none|Video description|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|
|generateTranscription|boolean|false|none|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|support|string|false|none|A text tell the audience how to support the video creator|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|nsfwSummary|object|false|none|More information about the sensitive content of the video|
|nsfwFlags|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|commentsPolicy|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|none|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|recommendationScope|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|none|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|aiUsage|[VideoAIUsageSet](#schemavideoaiusageset)|false|none|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|commercialContent|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|none|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|previewfile|string(binary)|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|videoPasswords|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|
|privacy|5|
|nsfwFlags|0|
|nsfwFlags|1|
|nsfwFlags|2|
|nsfwFlags|4|
|commentsPolicy|1|
|commentsPolicy|2|
|commentsPolicy|3|
|recommendationScope|1|
|recommendationScope|2|
|recommendationScope|3|
|recommendationScope|4|
|aiUsage|1|
|aiUsage|2|
|aiUsage|3|
|aiUsage|4|
|commercialContent|1|
|commercialContent|2|
|commercialContent|3|

<h2 id="tocS_VideoUploadRequestLegacy">VideoUploadRequestLegacy</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadrequestlegacy"></a>
<a id="schema_VideoUploadRequestLegacy"></a>
<a id="tocSvideouploadrequestlegacy"></a>
<a id="tocsvideouploadrequestlegacy"></a>

```json
{
  "name": "What is PeerTube?",
  "channelId": 3,
  "privacy": 1,
  "category": 15,
  "licence": 2,
  "language": "en",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "waitTranscoding": true,
  "generateTranscription": true,
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "nsfw": true,
  "nsfwSummary": null,
  "nsfwFlags": 0,
  "tags": [
    "framasoft",
    "peertube"
  ],
  "commentsPolicy": 1,
  "recommendationScope": 1,
  "aiUsage": 1,
  "commercialContent": 1,
  "downloadEnabled": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "thumbnailfile": "string",
  "previewfile": "string",
  "videoPasswords": [
    "string"
  ],
  "videofile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Video name|
|channelId|integer|true|none|Channel id that will contain this video|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|description|string|false|none|Video description|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|
|generateTranscription|boolean|false|none|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|support|string|false|none|A text tell the audience how to support the video creator|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|nsfwSummary|object|false|none|More information about the sensitive content of the video|
|nsfwFlags|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|commentsPolicy|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|none|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|recommendationScope|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|none|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|aiUsage|[VideoAIUsageSet](#schemavideoaiusageset)|false|none|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|commercialContent|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|none|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|previewfile|string(binary)|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|videoPasswords|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|none|
|videofile|string(binary)|true|none|Video file|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|
|privacy|5|
|nsfwFlags|0|
|nsfwFlags|1|
|nsfwFlags|2|
|nsfwFlags|4|
|commentsPolicy|1|
|commentsPolicy|2|
|commentsPolicy|3|
|recommendationScope|1|
|recommendationScope|2|
|recommendationScope|3|
|recommendationScope|4|
|aiUsage|1|
|aiUsage|2|
|aiUsage|3|
|aiUsage|4|
|commercialContent|1|
|commercialContent|2|
|commercialContent|3|

<h2 id="tocS_VideoUploadRequestResumable">VideoUploadRequestResumable</h2>
<!-- backwards compatibility -->
<a id="schemavideouploadrequestresumable"></a>
<a id="schema_VideoUploadRequestResumable"></a>
<a id="tocSvideouploadrequestresumable"></a>
<a id="tocsvideouploadrequestresumable"></a>

```json
{
  "name": "What is PeerTube?",
  "channelId": 3,
  "privacy": 1,
  "category": 15,
  "licence": 2,
  "language": "en",
  "description": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n",
  "waitTranscoding": true,
  "generateTranscription": true,
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "nsfw": true,
  "nsfwSummary": null,
  "nsfwFlags": 0,
  "tags": [
    "framasoft",
    "peertube"
  ],
  "commentsPolicy": 1,
  "recommendationScope": 1,
  "aiUsage": 1,
  "commercialContent": 1,
  "downloadEnabled": true,
  "originallyPublishedAt": "1970-01-01T00:00:00Z",
  "scheduleUpdate": {
    "privacy": 1,
    "updateAt": "1970-01-01T00:00:00Z"
  },
  "thumbnailfile": "string",
  "previewfile": "string",
  "videoPasswords": [
    "string"
  ],
  "filename": "what_is_peertube.mp4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Video name|
|channelId|integer|true|none|Channel id that will contain this video|
|privacy|[VideoPrivacySet](#schemavideoprivacyset)|false|none|privacy id of the video (see [/videos/privacies](#operation/getVideoPrivacyPolicies))|
|category|[VideoCategorySet](#schemavideocategoryset)|false|none|category id of the video (see [/videos/categories](#operation/getCategories))|
|licence|[VideoLicenceSet](#schemavideolicenceset)|false|none|licence id of the video (see [/videos/licences](#operation/getLicences))|
|language|[VideoLanguageSet](#schemavideolanguageset)|false|none|language id of the video (see [/videos/languages](#operation/getLanguages))|
|description|string|false|none|Video description|
|waitTranscoding|boolean|false|none|Whether or not we wait transcoding before publish the video|
|generateTranscription|boolean|false|none|**PeerTube >= 6.2** If enabled by the admin, automatically generate a subtitle of the video|
|support|string|false|none|A text tell the audience how to support the video creator|
|nsfw|boolean|false|none|Whether or not this video contains sensitive content|
|nsfwSummary|object|false|none|More information about the sensitive content of the video|
|nsfwFlags|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|tags|[string]|false|none|Video tags (maximum 5 tags each between 2 and 30 characters)|
|commentsPolicy|[VideoCommentsPolicySet](#schemavideocommentspolicyset)|false|none|Comments policy of the video (Enabled = `1`, Disabled = `2`, Requires Approval = `3`)|
|recommendationScope|[VideoRecommendationScopeSet](#schemavideorecommendationscopeset)|false|none|Videos that can be recommended next to a video:<br>  - `1` All videos<br>  - `2` Only videos of the platform that owns the reference video (or of the current platform if no video is given)<br>  - `3` Only videos of the account that owns the reference video<br>  - `4` Only videos of the channel of the reference video<br><br>This is a preference of the video owner: applications displaying recommendations may not apply it<br>|
|aiUsage|[VideoAIUsageSet](#schemavideoaiusageset)|false|none|**PeerTube >= 9.0** Use of AI in the video, declared by the video creator:<br>  - `1` Not specified<br>  - `2` No AI-generated content: nothing seen or heard in the video has been generated by AI<br>  - `3` Contains AI-generated content: some parts of the video have been generated by AI<br>  - `4` AI-generated: the whole video, or most of it, has been generated by AI<br>|
|commercialContent|[VideoCommercialContentSet](#schemavideocommercialcontentset)|false|none|**PeerTube >= 9.0** Commercial content in the video, declared by the video creator:<br>  - `1` None<br>  - `2` Promotional content: the creator promotes their own products, services or business<br>  - `3` Paid partnership: a third party paid, or provided goods or services, in exchange for the promotion<br>|
|downloadEnabled|boolean|false|none|Enable or disable downloading for this video|
|originallyPublishedAt|string(date-time)|false|none|Date when the content was originally published|
|scheduleUpdate|[VideoScheduledUpdate](#schemavideoscheduledupdate)|false|none|none|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|previewfile|string(binary)|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|
|videoPasswords|[AddVideoPasswords](#schemaaddvideopasswords)|false|none|none|
|filename|string(filename)|true|none|Video filename including extension|
|thumbnailfile|string(binary)|false|none|Video thumbnail file|
|previewfile|string(binary)|false|none|**Deprecated.** Deprecated in PeerTube v8.1, use thumbnailfile instead|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|1|
|privacy|2|
|privacy|3|
|privacy|4|
|privacy|5|
|nsfwFlags|0|
|nsfwFlags|1|
|nsfwFlags|2|
|nsfwFlags|4|
|commentsPolicy|1|
|commentsPolicy|2|
|commentsPolicy|3|
|recommendationScope|1|
|recommendationScope|2|
|recommendationScope|3|
|recommendationScope|4|
|aiUsage|1|
|aiUsage|2|
|aiUsage|3|
|aiUsage|4|
|commercialContent|1|
|commercialContent|2|
|commercialContent|3|

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
    "uuid": {},
    "shortUUID": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|video|object|false|none|none|

<h2 id="tocS_VideoReplaceSourceRequestResumable">VideoReplaceSourceRequestResumable</h2>
<!-- backwards compatibility -->
<a id="schemavideoreplacesourcerequestresumable"></a>
<a id="schema_VideoReplaceSourceRequestResumable"></a>
<a id="tocSvideoreplacesourcerequestresumable"></a>
<a id="tocsvideoreplacesourcerequestresumable"></a>

```json
{
  "filename": "what_is_peertube.mp4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string(filename)|false|none|Video filename including extension|

<h2 id="tocS_UserImportResumable">UserImportResumable</h2>
<!-- backwards compatibility -->
<a id="schemauserimportresumable"></a>
<a id="schema_UserImportResumable"></a>
<a id="tocSuserimportresumable"></a>
<a id="tocsuserimportresumable"></a>

```json
{
  "filename": "user-export-6-2024-02-09T10_12_11.682Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string(filename)|false|none|Archive filename including extension|

<h2 id="tocS_CommentThreadResponse">CommentThreadResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadresponse"></a>
<a id="schema_CommentThreadResponse"></a>
<a id="tocScommentthreadresponse"></a>
<a id="tocscommentthreadresponse"></a>

```json
{
  "total": 0,
  "totalNotDeletedComments": 0,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "text": "This video is wonderful!",
      "threadId": 42,
      "inReplyToCommentId": {},
      "videoId": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "deletedAt": null,
      "isDeleted": false,
      "heldForReview": true,
      "totalRepliesFromVideoAuthor": 0,
      "totalReplies": 0,
      "account": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|Total threads (included deleted ones) on this video|
|totalNotDeletedComments|integer|false|none|Total not-deleted threads (included deleted ones) on this video|
|data|[[VideoComment](#schemavideocomment)]|false|none|none|

<h2 id="tocS_CommentThreadPostResponse">CommentThreadPostResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadpostresponse"></a>
<a id="schema_CommentThreadPostResponse"></a>
<a id="tocScommentthreadpostresponse"></a>
<a id="tocscommentthreadpostresponse"></a>

```json
{
  "comment": {
    "id": 42,
    "url": "http://example.com",
    "text": "This video is wonderful!",
    "threadId": 42,
    "inReplyToCommentId": {},
    "videoId": {},
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "deletedAt": null,
    "isDeleted": false,
    "heldForReview": true,
    "totalRepliesFromVideoAuthor": 0,
    "totalReplies": 0,
    "account": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|[VideoComment](#schemavideocomment)|false|none|none|

<h2 id="tocS_VideoTokenResponse">VideoTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideotokenresponse"></a>
<a id="schema_VideoTokenResponse"></a>
<a id="tocSvideotokenresponse"></a>
<a id="tocsvideotokenresponse"></a>

```json
{
  "files": {
    "token": "string",
    "expires": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|false|none|none|

<h2 id="tocS_VideoListResponse">VideoListResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideolistresponse"></a>
<a id="schema_VideoListResponse"></a>
<a id="tocSvideolistresponse"></a>
<a id="tocsvideolistresponse"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": {},
      "uuid": {},
      "shortUUID": {},
      "isLive": true,
      "liveSchedules": [
        {
          "startAt": "1970-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2017-10-01T10:52:46.396Z",
      "publishedAt": "2018-10-01T10:52:46.396Z",
      "updatedAt": "2021-05-04T08:01:01.502Z",
      "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
      "category": {
        "id": 15,
        "label": "Science & Technology"
      },
      "licence": {
        "id": 2,
        "label": "Attribution - Share Alike"
      },
      "language": {
        "id": "en",
        "label": "English"
      },
      "privacy": {
        "id": 1,
        "label": "string"
      },
      "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
      "duration": 1419,
      "aspectRatio": 1.778,
      "isLocal": true,
      "name": "What is PeerTube?",
      "thumbnailPath": "string",
      "previewPath": "string",
      "thumbnails": [
        {
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "aspectRatio": "16:9"
        }
      ],
      "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
      "views": 1337,
      "likes": 42,
      "dislikes": 7,
      "comments": 0,
      "nsfw": true,
      "nsfwFlags": {},
      "nsfwSummary": "string",
      "aiUsage": {
        "id": 1,
        "label": "string"
      },
      "commercialContent": {
        "id": 1,
        "label": "string"
      },
      "recommendationScope": {
        "id": 1,
        "label": "string"
      },
      "waitTranscoding": true,
      "state": {
        "id": 1,
        "label": "string"
      },
      "scheduledUpdate": {
        "privacy": 1,
        "updateAt": "1970-01-01T00:00:00Z"
      },
      "blacklisted": true,
      "blacklistedReason": "string",
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "userHistory": {
        "currentTime": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[Video](#schemavideo)]|false|none|none|

<h2 id="tocS_ChannelActivityListResponse">ChannelActivityListResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelactivitylistresponse"></a>
<a id="schema_ChannelActivityListResponse"></a>
<a id="tocSchannelactivitylistresponse"></a>
<a id="tocschannelactivitylistresponse"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": 0,
      "account": {
        "id": 0,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "action": {
        "id": 1,
        "label": "string"
      },
      "targetType": {
        "id": 1,
        "label": "string"
      },
      "details": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "channel": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "url": "http://example.com"
      },
      "video": {
        "id": 42,
        "name": "string",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "url": "http://example.com",
        "isLive": true
      },
      "videoImport": {
        "id": 42,
        "name": "string",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "url": "http://example.com",
        "targetUrl": "http://example.com"
      },
      "playlist": {
        "id": 42,
        "name": "string",
        "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
        "shortUUID": "2y84q2MQUMWPbiEcxNXMgC",
        "url": "http://example.com"
      },
      "channelSync": {
        "id": 42,
        "externalChannelUrl": "http://example.com"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_UserNotificationSettings">UserNotificationSettings</h2>
<!-- backwards compatibility -->
<a id="schemausernotificationsettings"></a>
<a id="schema_UserNotificationSettings"></a>
<a id="tocSusernotificationsettings"></a>
<a id="tocsusernotificationsettings"></a>

```json
{
  "abuseAsModerator": 0,
  "videoAutoBlacklistAsModerator": 0,
  "newUserRegistration": 0,
  "newVideoFromSubscription": 0,
  "blacklistOnMyVideo": 0,
  "myVideoPublished": 0,
  "myVideoImportFinished": 0,
  "commentMention": 0,
  "newCommentOnMyVideo": 0,
  "newFollow": 0,
  "newInstanceFollower": 0,
  "autoInstanceFollowing": 0,
  "abuseStateChange": 0,
  "abuseNewMessage": 0,
  "newPeerTubeVersion": 0,
  "newPluginVersion": 0,
  "myVideoStudioEditionFinished": 0,
  "myVideoTranscriptionGenerated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abuseAsModerator|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|videoAutoBlacklistAsModerator|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newUserRegistration|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newVideoFromSubscription|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|blacklistOnMyVideo|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|myVideoPublished|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|myVideoImportFinished|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|commentMention|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newCommentOnMyVideo|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newFollow|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newInstanceFollower|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|autoInstanceFollowing|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|abuseStateChange|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|abuseNewMessage|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newPeerTubeVersion|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|newPluginVersion|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|myVideoStudioEditionFinished|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|
|myVideoTranscriptionGenerated|[NotificationSettingValue](#schemanotificationsettingvalue)|false|none|Notification type. One of the following values, or a sum of multiple values:<br>- `0` NONE<br>- `1` WEB<br>- `2` EMAIL<br>|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 42,
  "username": "chocobozzz",
  "email": "user@example.com",
  "emailVerified": true,
  "nsfwPolicy": "display",
  "nsfwFlagsDisplayed": 0,
  "nsfwFlagsHidden": 0,
  "nsfwFlagsWarned": 0,
  "nsfwFlagsBlurred": 0,
  "aiUsagesHidden": [
    1
  ],
  "adminFlags": 1,
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "p2pEnabled": true,
  "videosHistoryEnabled": true,
  "videoLanguages": [
    "string"
  ],
  "videoCategories": [
    0
  ],
  "videoLive": "true",
  "language": "string",
  "videoQuota": -1,
  "videoQuotaDaily": -1,
  "role": {
    "id": 2,
    "label": "User"
  },
  "theme": "string",
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "notificationSettings": {
    "abuseAsModerator": 0,
    "videoAutoBlacklistAsModerator": 0,
    "newUserRegistration": 0,
    "newVideoFromSubscription": 0,
    "blacklistOnMyVideo": 0,
    "myVideoPublished": 0,
    "myVideoImportFinished": 0,
    "commentMention": 0,
    "newCommentOnMyVideo": 0,
    "newFollow": 0,
    "newInstanceFollower": 0,
    "autoInstanceFollowing": 0,
    "abuseStateChange": 0,
    "abuseNewMessage": 0,
    "newPeerTubeVersion": 0,
    "newPluginVersion": 0,
    "myVideoStudioEditionFinished": 0,
    "myVideoTranscriptionGenerated": 0
  },
  "videoChannels": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ],
  "blocked": true,
  "blockedReason": "string",
  "noInstanceConfigWarningModal": true,
  "noAccountSetupWarningModal": true,
  "noWelcomeModal": true,
  "createdAt": "string",
  "pluginAuth": "string",
  "lastLoginDate": "1970-01-01T00:00:00Z",
  "twoFactorEnabled": true,
  "newFeaturesInfoRead": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|username|[username](#schemausername)|false|none|immutable name of the user, used to find or mention its actor|
|email|string(email)|false|none|The user email|
|emailVerified|boolean|false|none|Has the user confirmed their email address?|
|nsfwPolicy|[NSFWPolicy](#schemansfwpolicy)|false|none|none|
|nsfwFlagsDisplayed|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsHidden|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsWarned|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsBlurred|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|aiUsagesHidden|[[VideoAIUsageSet](#schemavideoaiusageset)]|false|none|**PeerTube >= 9.0** Videos with these AI usages are hidden from video lists|
|adminFlags|[UserAdminFlags](#schemauseradminflags)|false|none|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|autoPlayNextVideo|boolean|false|none|Automatically start playing the upcoming video after the currently playing video|
|autoPlayNextVideoPlaylist|boolean|false|none|Automatically start playing the video on the playlist after the currently playing video|
|autoPlayVideo|boolean|false|none|Automatically start playing the video on the watch page|
|p2pEnabled|boolean|false|none|whether to enable P2P in the player or not|
|videosHistoryEnabled|boolean|false|none|whether to keep track of watched history or not|
|videoLanguages|[string]|false|none|list of languages to filter videos down to|
|videoCategories|[integer]|false|none|list of categories to filter videos down to (`null` means all categories)|
|videoLive|string|false|none|filter videos down to lives (`true`), VODs (`false`) or display both|
|language|string|false|none|default language for this user|
|videoQuota|integer|false|none|The user video quota in bytes|
|videoQuotaDaily|integer|false|none|The user daily video quota in bytes|
|role|object|false|none|none|
|theme|string|false|none|Theme enabled by this user|
|account|[Account](#schemaaccount)|false|none|none|
|notificationSettings|[UserNotificationSettings](#schemausernotificationsettings)|false|none|none|
|videoChannels|[[VideoChannel](#schemavideochannel)]|false|none|none|
|blocked|boolean|false|none|none|
|blockedReason|string|false|none|none|
|noInstanceConfigWarningModal|boolean|false|none|none|
|noAccountSetupWarningModal|boolean|false|none|none|
|noWelcomeModal|boolean|false|none|none|
|createdAt|string|false|none|none|
|pluginAuth|string|false|none|Auth plugin to use to authenticate the user|
|lastLoginDate|string(date-time)|false|none|none|
|twoFactorEnabled|boolean|false|none|Whether the user has enabled two-factor authentication or not|
|newFeaturesInfoRead|number|false|none|New features information the user has read|

#### Enumerated Values

|Property|Value|
|---|---|
|nsfwPolicy|display|
|nsfwPolicy|warn|
|nsfwPolicy|do_not_list|
|nsfwFlagsDisplayed|0|
|nsfwFlagsDisplayed|1|
|nsfwFlagsDisplayed|2|
|nsfwFlagsDisplayed|4|
|nsfwFlagsHidden|0|
|nsfwFlagsHidden|1|
|nsfwFlagsHidden|2|
|nsfwFlagsHidden|4|
|nsfwFlagsWarned|0|
|nsfwFlagsWarned|1|
|nsfwFlagsWarned|2|
|nsfwFlagsWarned|4|
|nsfwFlagsBlurred|0|
|nsfwFlagsBlurred|1|
|nsfwFlagsBlurred|2|
|nsfwFlagsBlurred|4|
|aiUsagesHidden|1|
|aiUsagesHidden|2|
|aiUsagesHidden|3|
|aiUsagesHidden|4|
|adminFlags|0|
|adminFlags|1|
|videoLive|true|
|videoLive|false|
|videoLive|both|

<h2 id="tocS_UserWithStats">UserWithStats</h2>
<!-- backwards compatibility -->
<a id="schemauserwithstats"></a>
<a id="schema_UserWithStats"></a>
<a id="tocSuserwithstats"></a>
<a id="tocsuserwithstats"></a>

```json
{
  "id": 42,
  "username": "chocobozzz",
  "email": "user@example.com",
  "emailVerified": true,
  "nsfwPolicy": "display",
  "nsfwFlagsDisplayed": 0,
  "nsfwFlagsHidden": 0,
  "nsfwFlagsWarned": 0,
  "nsfwFlagsBlurred": 0,
  "aiUsagesHidden": [
    1
  ],
  "adminFlags": 1,
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "autoPlayVideo": true,
  "p2pEnabled": true,
  "videosHistoryEnabled": true,
  "videoLanguages": [
    "string"
  ],
  "videoCategories": [
    0
  ],
  "videoLive": "true",
  "language": "string",
  "videoQuota": -1,
  "videoQuotaDaily": -1,
  "role": {
    "id": 2,
    "label": "User"
  },
  "theme": "string",
  "account": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "notificationSettings": {
    "abuseAsModerator": 0,
    "videoAutoBlacklistAsModerator": 0,
    "newUserRegistration": 0,
    "newVideoFromSubscription": 0,
    "blacklistOnMyVideo": 0,
    "myVideoPublished": 0,
    "myVideoImportFinished": 0,
    "commentMention": 0,
    "newCommentOnMyVideo": 0,
    "newFollow": 0,
    "newInstanceFollower": 0,
    "autoInstanceFollowing": 0,
    "abuseStateChange": 0,
    "abuseNewMessage": 0,
    "newPeerTubeVersion": 0,
    "newPluginVersion": 0,
    "myVideoStudioEditionFinished": 0,
    "myVideoTranscriptionGenerated": 0
  },
  "videoChannels": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ],
  "blocked": true,
  "blockedReason": "string",
  "noInstanceConfigWarningModal": true,
  "noAccountSetupWarningModal": true,
  "noWelcomeModal": true,
  "createdAt": "string",
  "pluginAuth": "string",
  "lastLoginDate": "1970-01-01T00:00:00Z",
  "twoFactorEnabled": true,
  "newFeaturesInfoRead": 0,
  "videosCount": 0,
  "abusesCount": 0,
  "abusesAcceptedCount": 0,
  "abusesCreatedCount": 0,
  "videoCommentsCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|username|[username](#schemausername)|false|none|immutable name of the user, used to find or mention its actor|
|email|string(email)|false|none|The user email|
|emailVerified|boolean|false|none|Has the user confirmed their email address?|
|nsfwPolicy|[NSFWPolicy](#schemansfwpolicy)|false|none|none|
|nsfwFlagsDisplayed|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsHidden|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsWarned|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsBlurred|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|aiUsagesHidden|[[VideoAIUsageSet](#schemavideoaiusageset)]|false|none|**PeerTube >= 9.0** Videos with these AI usages are hidden from video lists|
|adminFlags|[UserAdminFlags](#schemauseradminflags)|false|none|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|autoPlayNextVideo|boolean|false|none|Automatically start playing the upcoming video after the currently playing video|
|autoPlayNextVideoPlaylist|boolean|false|none|Automatically start playing the video on the playlist after the currently playing video|
|autoPlayVideo|boolean|false|none|Automatically start playing the video on the watch page|
|p2pEnabled|boolean|false|none|whether to enable P2P in the player or not|
|videosHistoryEnabled|boolean|false|none|whether to keep track of watched history or not|
|videoLanguages|[string]|false|none|list of languages to filter videos down to|
|videoCategories|[integer]|false|none|list of categories to filter videos down to (`null` means all categories)|
|videoLive|string|false|none|filter videos down to lives (`true`), VODs (`false`) or display both|
|language|string|false|none|default language for this user|
|videoQuota|integer|false|none|The user video quota in bytes|
|videoQuotaDaily|integer|false|none|The user daily video quota in bytes|
|role|object|false|none|none|
|theme|string|false|none|Theme enabled by this user|
|account|[Account](#schemaaccount)|false|none|none|
|notificationSettings|[UserNotificationSettings](#schemausernotificationsettings)|false|none|none|
|videoChannels|[[VideoChannel](#schemavideochannel)]|false|none|none|
|blocked|boolean|false|none|none|
|blockedReason|string|false|none|none|
|noInstanceConfigWarningModal|boolean|false|none|none|
|noAccountSetupWarningModal|boolean|false|none|none|
|noWelcomeModal|boolean|false|none|none|
|createdAt|string|false|none|none|
|pluginAuth|string|false|none|Auth plugin to use to authenticate the user|
|lastLoginDate|string(date-time)|false|none|none|
|twoFactorEnabled|boolean|false|none|Whether the user has enabled two-factor authentication or not|
|newFeaturesInfoRead|number|false|none|New features information the user has read|
|videosCount|integer|false|none|Count of videos published|
|abusesCount|integer|false|none|Count of reports/abuses of which the user is a target|
|abusesAcceptedCount|integer|false|none|Count of reports/abuses created by the user and accepted/acted upon by the moderation team|
|abusesCreatedCount|integer|false|none|Count of reports/abuses created by the user|
|videoCommentsCount|integer|false|none|Count of comments published|

#### Enumerated Values

|Property|Value|
|---|---|
|nsfwPolicy|display|
|nsfwPolicy|warn|
|nsfwPolicy|do_not_list|
|nsfwFlagsDisplayed|0|
|nsfwFlagsDisplayed|1|
|nsfwFlagsDisplayed|2|
|nsfwFlagsDisplayed|4|
|nsfwFlagsHidden|0|
|nsfwFlagsHidden|1|
|nsfwFlagsHidden|2|
|nsfwFlagsHidden|4|
|nsfwFlagsWarned|0|
|nsfwFlagsWarned|1|
|nsfwFlagsWarned|2|
|nsfwFlagsWarned|4|
|nsfwFlagsBlurred|0|
|nsfwFlagsBlurred|1|
|nsfwFlagsBlurred|2|
|nsfwFlagsBlurred|4|
|aiUsagesHidden|1|
|aiUsagesHidden|2|
|aiUsagesHidden|3|
|aiUsagesHidden|4|
|adminFlags|0|
|adminFlags|1|
|videoLive|true|
|videoLive|false|
|videoLive|both|

<h2 id="tocS_AddUser">AddUser</h2>
<!-- backwards compatibility -->
<a id="schemaadduser"></a>
<a id="schema_AddUser"></a>
<a id="tocSadduser"></a>
<a id="tocsadduser"></a>

```json
{
  "username": "chocobozzz",
  "password": "password",
  "email": "user@example.com",
  "videoQuota": -1,
  "videoQuotaDaily": -1,
  "channelName": "framasoft_videos",
  "role": 2,
  "adminFlags": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|[username](#schemausername)|true|none|immutable name of the user, used to find or mention its actor|
|password|[password](#schemapassword)|true|none|none|
|email|string(email)|true|none|The user email|
|videoQuota|integer|false|none|The user video quota in bytes|
|videoQuotaDaily|integer|false|none|The user daily video quota in bytes|
|channelName|[usernameChannel](#schemausernamechannel)|false|none|immutable name of the channel, used to interact with its actor|
|role|[UserRole](#schemauserrole)|true|none|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|adminFlags|[UserAdminFlags](#schemauseradminflags)|false|none|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|

#### Enumerated Values

|Property|Value|
|---|---|
|role|0|
|role|1|
|role|2|
|adminFlags|0|
|adminFlags|1|

<h2 id="tocS_UpdateUser">UpdateUser</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuser"></a>
<a id="schema_UpdateUser"></a>
<a id="tocSupdateuser"></a>
<a id="tocsupdateuser"></a>

```json
{
  "email": {},
  "emailVerified": true,
  "videoQuota": 0,
  "videoQuotaDaily": 0,
  "pluginAuth": "peertube-plugin-auth-saml2",
  "role": 2,
  "adminFlags": 1,
  "password": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|object|false|none|The updated email of the user|
|emailVerified|boolean|false|none|Set the email as verified|
|videoQuota|integer|false|none|The updated video quota of the user in bytes|
|videoQuotaDaily|integer|false|none|The updated daily video quota of the user in bytes|
|pluginAuth|string \| null|false|none|The auth plugin to use to authenticate the user|
|role|[UserRole](#schemauserrole)|false|none|The user role (Admin = `0`, Moderator = `1`, User = `2`)|
|adminFlags|[UserAdminFlags](#schemauseradminflags)|false|none|Admin flags for the user (None = `0`, Bypass video blocklist = `1`)|
|password|[password](#schemapassword)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|0|
|role|1|
|role|2|
|adminFlags|0|
|adminFlags|1|

<h2 id="tocS_UpdateMe">UpdateMe</h2>
<!-- backwards compatibility -->
<a id="schemaupdateme"></a>
<a id="schema_UpdateMe"></a>
<a id="tocSupdateme"></a>
<a id="tocsupdateme"></a>

```json
{
  "password": "password",
  "currentPassword": "password",
  "email": {},
  "displayName": "string",
  "nsfwPolicy": "true",
  "nsfwFlagsDisplayed": 0,
  "nsfwFlagsHidden": 0,
  "nsfwFlagsWarned": 0,
  "nsfwFlagsBlurred": 0,
  "aiUsagesHidden": [
    1
  ],
  "p2pEnabled": true,
  "autoPlayVideo": true,
  "autoPlayNextVideo": true,
  "autoPlayNextVideoPlaylist": true,
  "videosHistoryEnabled": true,
  "videoLanguages": [
    "string"
  ],
  "videoCategories": [
    0
  ],
  "videoLive": "true",
  "language": "string",
  "theme": "string",
  "noInstanceConfigWarningModal": true,
  "noAccountSetupWarningModal": true,
  "noWelcomeModal": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|[password](#schemapassword)|false|none|none|
|currentPassword|[password](#schemapassword)|false|none|none|
|email|object|false|none|new email used for login and service communications|
|displayName|string|false|none|new name of the user in its representations|
|nsfwPolicy|string|false|none|new NSFW display policy|
|nsfwFlagsDisplayed|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsHidden|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsWarned|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|nsfwFlagsBlurred|[NSFWFlag](#schemansfwflag)|false|none|<br>NSFW flags (can be combined using bitwise or operator)<br>- `0` NONE<br>- `1` VIOLENT<br>- `2` EXPLICIT_SEX<br>|
|aiUsagesHidden|[[VideoAIUsageSet](#schemavideoaiusageset)]|false|none|**PeerTube >= 9.0** Videos with these AI usages are hidden from video lists|
|p2pEnabled|boolean|false|none|whether to enable P2P in the player or not|
|autoPlayVideo|boolean|false|none|new preference regarding playing videos automatically|
|autoPlayNextVideo|boolean|false|none|new preference regarding playing following videos automatically|
|autoPlayNextVideoPlaylist|boolean|false|none|new preference regarding playing following playlist videos automatically|
|videosHistoryEnabled|boolean|false|none|whether to keep track of watched history or not|
|videoLanguages|[string]|false|none|list of languages to filter videos down to|
|videoCategories|[integer]|false|none|list of categories to filter videos down to (`null` means all categories)|
|videoLive|string|false|none|filter videos down to lives (`true`), VODs (`false`) or display both|
|language|string|false|none|default language for this user|
|theme|string|false|none|none|
|noInstanceConfigWarningModal|boolean|false|none|none|
|noAccountSetupWarningModal|boolean|false|none|none|
|noWelcomeModal|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|nsfwPolicy|true|
|nsfwPolicy|false|
|nsfwPolicy|both|
|nsfwFlagsDisplayed|0|
|nsfwFlagsDisplayed|1|
|nsfwFlagsDisplayed|2|
|nsfwFlagsDisplayed|4|
|nsfwFlagsHidden|0|
|nsfwFlagsHidden|1|
|nsfwFlagsHidden|2|
|nsfwFlagsHidden|4|
|nsfwFlagsWarned|0|
|nsfwFlagsWarned|1|
|nsfwFlagsWarned|2|
|nsfwFlagsWarned|4|
|nsfwFlagsBlurred|0|
|nsfwFlagsBlurred|1|
|nsfwFlagsBlurred|2|
|nsfwFlagsBlurred|4|
|aiUsagesHidden|1|
|aiUsagesHidden|2|
|aiUsagesHidden|3|
|aiUsagesHidden|4|
|videoLive|true|
|videoLive|false|
|videoLive|both|

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

<h2 id="tocS_VideoRating">VideoRating</h2>
<!-- backwards compatibility -->
<a id="schemavideorating"></a>
<a id="schema_VideoRating"></a>
<a id="tocSvideorating"></a>
<a id="tocsvideorating"></a>

```json
{
  "video": {
    "id": {},
    "uuid": {},
    "shortUUID": {},
    "isLive": true,
    "liveSchedules": [
      {
        "startAt": "1970-01-01T00:00:00Z"
      }
    ],
    "createdAt": "2017-10-01T10:52:46.396Z",
    "publishedAt": "2018-10-01T10:52:46.396Z",
    "updatedAt": "2021-05-04T08:01:01.502Z",
    "originallyPublishedAt": "2010-10-01T10:52:46.396Z",
    "category": {
      "id": 15,
      "label": "Science & Technology"
    },
    "licence": {
      "id": 2,
      "label": "Attribution - Share Alike"
    },
    "language": {
      "id": "en",
      "label": "English"
    },
    "privacy": {
      "id": 1,
      "label": "string"
    },
    "truncatedDescription": "**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n",
    "duration": 1419,
    "aspectRatio": 1.778,
    "isLocal": true,
    "name": "What is PeerTube?",
    "thumbnailPath": "string",
    "previewPath": "string",
    "thumbnails": [
      {
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "aspectRatio": "16:9"
      }
    ],
    "embedPath": "/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee",
    "views": 1337,
    "likes": 42,
    "dislikes": 7,
    "comments": 0,
    "nsfw": true,
    "nsfwFlags": {},
    "nsfwSummary": "string",
    "aiUsage": {
      "id": 1,
      "label": "string"
    },
    "commercialContent": {
      "id": 1,
      "label": "string"
    },
    "recommendationScope": {
      "id": 1,
      "label": "string"
    },
    "waitTranscoding": true,
    "state": {
      "id": 1,
      "label": "string"
    },
    "scheduledUpdate": {
      "privacy": 1,
      "updateAt": "1970-01-01T00:00:00Z"
    },
    "blacklisted": true,
    "blacklistedReason": "string",
    "account": {
      "id": 0,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "channel": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "url": "http://example.com",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "userHistory": {
      "currentTime": 0
    }
  },
  "rating": "like"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|video|[Video](#schemavideo)|true|none|none|
|rating|string|true|none|Rating of the video|

#### Enumerated Values

|Property|Value|
|---|---|
|rating|like|
|rating|dislike|
|rating|none|

<h2 id="tocS_RegisterUser">RegisterUser</h2>
<!-- backwards compatibility -->
<a id="schemaregisteruser"></a>
<a id="schema_RegisterUser"></a>
<a id="tocSregisteruser"></a>
<a id="tocsregisteruser"></a>

```json
{
  "username": {},
  "password": "password",
  "email": "user@example.com",
  "displayName": "string",
  "channel": {
    "name": "framasoft_videos",
    "displayName": "string"
  },
  "signupClient": "peertube-app"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|true|none|immutable name of the user, used to find or mention its actor|
|password|[password](#schemapassword)|true|none|none|
|email|string(email)|true|none|email of the user, used for login or service communications|
|displayName|string|false|none|editable name of the user, displayed in its representations|
|channel|object|false|none|channel base information used to create the first channel of the user|
|signupClient|string|false|none|**PeerTube >= 9.0** Client used to sign up. If set, links of the verification and registration accepted emails<br>make the web client propose to open this client<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|signupClient|peertube-app|

<h2 id="tocS_UserRegistrationRequest">UserRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserregistrationrequest"></a>
<a id="schema_UserRegistrationRequest"></a>
<a id="tocSuserregistrationrequest"></a>
<a id="tocsuserregistrationrequest"></a>

```json
{
  "username": {},
  "password": "password",
  "email": "user@example.com",
  "displayName": "string",
  "channel": {
    "name": "framasoft_videos",
    "displayName": "string"
  },
  "signupClient": "peertube-app",
  "registrationReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|true|none|immutable name of the user, used to find or mention its actor|
|password|[password](#schemapassword)|true|none|none|
|email|string(email)|true|none|email of the user, used for login or service communications|
|displayName|string|false|none|editable name of the user, displayed in its representations|
|channel|object|false|none|channel base information used to create the first channel of the user|
|signupClient|string|false|none|**PeerTube >= 9.0** Client used to sign up. If set, links of the verification and registration accepted emails<br>make the web client propose to open this client<br>|
|registrationReason|string|true|none|reason for the user to register on the instance|

#### Enumerated Values

|Property|Value|
|---|---|
|signupClient|peertube-app|

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

<h2 id="tocS_AuditLogAction">AuditLogAction</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogaction"></a>
<a id="schema_AuditLogAction"></a>
<a id="tocSauditlogaction"></a>
<a id="tocsauditlogaction"></a>

```json
"create"
```

<h2 id="tocS_AuditLogEntityType">AuditLogEntityType</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogentitytype"></a>
<a id="schema_AuditLogEntityType"></a>
<a id="tocSauditlogentitytype"></a>
<a id="tocsauditlogentitytype"></a>

```json
"video"
```

<h2 id="tocS_AuditLog">AuditLog</h2>
<!-- backwards compatibility -->
<a id="schemaauditlog"></a>
<a id="schema_AuditLog"></a>
<a id="tocSauditlog"></a>
<a id="tocsauditlog"></a>

```json
{
  "id": 42,
  "action": "create",
  "entityType": "video",
  "entityId": 0,
  "user": {
    "id": 0,
    "username": "string"
  },
  "ip": "string",
  "entity": {},
  "changes": {
    "property1": {
      "old": null,
      "new": null
    },
    "property2": {
      "old": null,
      "new": null
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "timestamp": "1970-01-01T00:00:00Z",
  "level": "audit",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|action|[AuditLogAction](#schemaauditlogaction)|false|none|none|
|entityType|[AuditLogEntityType](#schemaauditlogentitytype)|false|none|none|
|entityId|integer \| null|false|none|Id of the audited entity, `null` for the instance configuration|
|user|object|false|none|none|
|ip|string \| null|false|none|IP address of the request, anonymized if `log.anonymize_ip` is enabled|
|entity|object|false|none|Snapshot of the entity after the action (before the action for deletions)|
|changes|object \| null|false|none|Only for updates. Keys are dot-separated paths of the changed entity attributes|
|createdAt|string(date-time)|false|none|none|
|timestamp|string(date-time)|false|none|**Deprecated.** Same as `createdAt`. Field of the format used before audit logs were stored in the database|
|level|string|false|none|**Deprecated.** Field of the format used before audit logs were stored in the database|
|message|string|false|none|**Deprecated.** JSON string containing the `user`, `domain` (entity type), `action`, `entityId`, `ip` and `changes` of the entry, and the properties of the audited entity.<br>Field of the format used before audit logs were stored in the database<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|update|
|action|delete|
|entityType|video|
|entityType|video-import|
|entityType|video-live|
|entityType|video-source|
|entityType|video-file|
|entityType|video-caption|
|entityType|video-chapters|
|entityType|video-password|
|entityType|video-embed-privacy|
|entityType|video-transcoding|
|entityType|video-transcription|
|entityType|video-studio-edition|
|entityType|video-player-settings|
|entityType|ownership-change|
|entityType|comment|
|entityType|channel|
|entityType|channel-sync|
|entityType|channel-videos-import|
|entityType|channel-collaborator|
|entityType|channel-player-settings|
|entityType|channel-playlists-order|
|entityType|playlist|
|entityType|playlist-element|
|entityType|playlist-elements-order|
|entityType|user|
|entityType|registration|
|entityType|password-reset|
|entityType|token-session|
|entityType|failed-login|
|entityType|scoped-token|
|entityType|user-export|
|entityType|user-import|
|entityType|abuse|
|entityType|abuse-message|
|entityType|video-block|
|entityType|account-block|
|entityType|server-block|
|entityType|blocklist-subscription|
|entityType|watched-words-list|
|entityType|watched-words-subscription|
|entityType|automatic-tag-policy|
|entityType|config|
|entityType|instance-image|
|entityType|instance-homepage|
|entityType|instance-host|
|entityType|plugin|
|entityType|follow|
|entityType|server-redundancy|
|entityType|video-redundancy|
|entityType|job-queue|
|entityType|job|
|entityType|runner|
|entityType|runner-registration-token|
|entityType|debug-command|
|entityType|storage-prune|
|level|audit|

<h2 id="tocS_UserRegistrationState">UserRegistrationState</h2>
<!-- backwards compatibility -->
<a id="schemauserregistrationstate"></a>
<a id="schema_UserRegistrationState"></a>
<a id="tocSuserregistrationstate"></a>
<a id="tocsuserregistrationstate"></a>

```json
1
```

The registration state (Pending = `1`, Rejected = `2`, Accepted = `3`)

<h2 id="tocS_ChangeOwnershipState">ChangeOwnershipState</h2>
<!-- backwards compatibility -->
<a id="schemachangeownershipstate"></a>
<a id="schema_ChangeOwnershipState"></a>
<a id="tocSchangeownershipstate"></a>
<a id="tocschangeownershipstate"></a>

```json
1
```

The ownership change state (Pending = `1`, Rejected = `2`, Accepted = `3`)

<h2 id="tocS_UserRegistration">UserRegistration</h2>
<!-- backwards compatibility -->
<a id="schemauserregistration"></a>
<a id="schema_UserRegistration"></a>
<a id="tocSuserregistration"></a>
<a id="tocsuserregistration"></a>

```json
{
  "id": 42,
  "state": {
    "id": 1,
    "label": "string"
  },
  "registrationReason": "string",
  "moderationResponse": "string",
  "username": "string",
  "email": "user@example.com",
  "emailVerified": true,
  "accountDisplayName": "string",
  "channelHandle": "string",
  "channelDisplayName": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "user": {
    "id": 42
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|state|object|false|none|none|
|registrationReason|string|false|none|none|
|moderationResponse|string \| null|false|none|none|
|username|string|false|none|none|
|email|string(email)|false|none|none|
|emailVerified|boolean|false|none|none|
|accountDisplayName|string|false|none|none|
|channelHandle|string|false|none|none|
|channelDisplayName|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|user|object \| null|false|none|If the registration has been accepted, this is a partial user object created by the registration|

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
  "username": "chocobozzz",
  "password": "password",
  "externalAuthToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|grant_type|string|true|none|none|
|username|[username](#schemausername)|true|none|immutable name of the user, used to find or mention its actor|
|password|[password](#schemapassword)|false|none|none|
|externalAuthToken|string|false|none|If you want to authenticate using an external authentication token you got from an auth plugin (like `peertube-plugin-auth-openid-connect` for example) instead of a password or a refresh token, provide it here.|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|password|

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
  "grant_type": "refresh_token",
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
|grant_type|refresh_token|

<h2 id="tocS_VideoChannel">VideoChannel</h2>
<!-- backwards compatibility -->
<a id="schemavideochannel"></a>
<a id="schema_VideoChannel"></a>
<a id="tocSvideochannel"></a>
<a id="tocsvideochannel"></a>

```json
{
  "id": 42,
  "url": "http://example.com",
  "name": {},
  "avatars": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "host": "example.com",
  "hostRedundancyAllowed": true,
  "followingCount": 0,
  "followersCount": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "displayName": "Videos of Framasoft",
  "description": "Videos made with <3 by Framasoft",
  "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
  "publicEmail": "user@example.com",
  "isLocal": true,
  "banners": [
    {
      "path": "string",
      "fileUrl": "string",
      "width": 0,
      "height": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "ownerAccount": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "userId": {},
    "displayName": "string",
    "description": "string"
  },
  "videosCount": 0,
  "viewsPerDay": [
    {
      "date": "1970-01-01T00:00:00Z",
      "views": 0
    }
  ],
  "viewsGroupInterval": "day",
  "totalViews": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|url|string(url)|false|none|none|
|name|object|false|none|immutable name of the actor, used to find or mention it|
|avatars|[[ActorImage](#schemaactorimage)]|false|none|none|
|host|string(hostname)|false|none|server on which the actor is resident|
|hostRedundancyAllowed|boolean \| null|false|none|whether this actor's host allows redundancy of its videos|
|followingCount|integer|false|none|number of actors subscribed to by this actor, as seen by this instance|
|followersCount|integer|false|none|number of followers of this actor, as seen by this instance|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|displayName|string|false|none|editable name of the channel, displayed in its representations|
|description|string \| null|false|none|none|
|support|string \| null|false|none|text shown by default on all videos of this channel, to tell the audience how to support it|
|publicEmail|string(email) \| null|false|none|Public email visible in podcast RSS feeds|
|isLocal|boolean|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|banners|[[ActorImage](#schemaactorimage)]|false|none|none|
|ownerAccount|[Account](#schemaaccount)|false|none|none|
|videosCount|integer|false|none|only included when `withStats` is true|
|viewsPerDay|[object]|false|none|only included when `withStats` is true. Chronologically ordered, spans the whole `statsDays` range. Each point aggregates `viewsGroupInterval` worth of views, starting at `date`<br>|
|viewsGroupInterval|string|false|none|bucket size of `viewsPerDay`, only included when `withStats` is true|
|totalViews|integer|false|none|lifetime views of all the channel videos, only included when `withStats` is true|

#### Enumerated Values

|Property|Value|
|---|---|
|viewsGroupInterval|day|
|viewsGroupInterval|week|
|viewsGroupInterval|month|

<h2 id="tocS_VideoChannelEdit">VideoChannelEdit</h2>
<!-- backwards compatibility -->
<a id="schemavideochanneledit"></a>
<a id="schema_VideoChannelEdit"></a>
<a id="tocSvideochanneledit"></a>
<a id="tocsvideochanneledit"></a>

```json
{
  "displayName": null,
  "description": null,
  "support": null,
  "publicEmail": "user@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|object|false|none|Channel display name|
|description|object|false|none|Channel description|
|support|object|false|none|How to support/fund the channel|
|publicEmail|string(email) \| null|false|none|Public email visible in podcast RSS feeds|

<h2 id="tocS_VideoChannelCreate">VideoChannelCreate</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelcreate"></a>
<a id="schema_VideoChannelCreate"></a>
<a id="tocSvideochannelcreate"></a>
<a id="tocsvideochannelcreate"></a>

```json
{
  "displayName": null,
  "description": null,
  "support": null,
  "publicEmail": "user@example.com",
  "name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|object|true|none|Channel display name|
|description|object|false|none|Channel description|
|support|object|false|none|How to support/fund the channel|
|publicEmail|string(email) \| null|false|none|Public email visible in podcast RSS feeds|
|name|object|true|none|username of the channel to create|

<h2 id="tocS_VideoChannelUpdate">VideoChannelUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelupdate"></a>
<a id="schema_VideoChannelUpdate"></a>
<a id="tocSvideochannelupdate"></a>
<a id="tocsvideochannelupdate"></a>

```json
{
  "displayName": null,
  "description": null,
  "support": null,
  "publicEmail": "user@example.com",
  "bulkVideosSupportUpdate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|object|false|none|Channel display name|
|description|object|false|none|Channel description|
|support|object|false|none|How to support/fund the channel|
|publicEmail|string(email) \| null|false|none|Public email visible in podcast RSS feeds|
|bulkVideosSupportUpdate|boolean|false|none|Update the support field for all videos of this channel|

<h2 id="tocS_VideoChannelList">VideoChannelList</h2>
<!-- backwards compatibility -->
<a id="schemavideochannellist"></a>
<a id="schema_VideoChannelList"></a>
<a id="tocSvideochannellist"></a>
<a id="tocsvideochannellist"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "displayName": "Videos of Framasoft",
      "description": "Videos made with <3 by Framasoft",
      "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
      "publicEmail": "user@example.com",
      "isLocal": true,
      "banners": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "ownerAccount": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "userId": {},
        "displayName": "string",
        "description": "string"
      },
      "videosCount": 0,
      "viewsPerDay": [
        {
          "date": "1970-01-01T00:00:00Z",
          "views": 0
        }
      ],
      "viewsGroupInterval": "day",
      "totalViews": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|

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

<h2 id="tocS_VideoChannelSync">VideoChannelSync</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsync"></a>
<a id="schema_VideoChannelSync"></a>
<a id="tocSvideochannelsync"></a>
<a id="tocsvideochannelsync"></a>

```json
{
  "id": 42,
  "state": {
    "id": 2,
    "label": "PROCESSING"
  },
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "channel": {
    "id": 42,
    "url": "http://example.com",
    "name": {},
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "host": "example.com",
    "hostRedundancyAllowed": true,
    "followingCount": 0,
    "followersCount": 0,
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "displayName": "Videos of Framasoft",
    "description": "Videos made with <3 by Framasoft",
    "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
    "publicEmail": "user@example.com",
    "isLocal": true,
    "banners": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ],
    "ownerAccount": {
      "id": 42,
      "url": "http://example.com",
      "name": {},
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "host": "example.com",
      "hostRedundancyAllowed": true,
      "followingCount": 0,
      "followersCount": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "userId": {},
      "displayName": "string",
      "description": "string"
    },
    "videosCount": 0,
    "viewsPerDay": [
      {
        "date": "1970-01-01T00:00:00Z",
        "views": 0
      }
    ],
    "viewsGroupInterval": "day",
    "totalViews": 0
  },
  "videoPrivacy": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|state|object|false|none|none|
|externalChannelUrl|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|lastSyncAt|string(date-time) \| null|false|none|none|
|channel|[VideoChannel](#schemavideochannel)|false|none|none|
|videoPrivacy|integer \| null|false|none|Default privacy of videos imported by this synchronization|

<h2 id="tocS_VideoChannelSyncList">VideoChannelSyncList</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsynclist"></a>
<a id="schema_VideoChannelSyncList"></a>
<a id="tocSvideochannelsynclist"></a>
<a id="tocsvideochannelsynclist"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "state": {
        "id": 2,
        "label": "PROCESSING"
      },
      "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
      "createdAt": "1970-01-01T00:00:00Z",
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "channel": {
        "id": 42,
        "url": "http://example.com",
        "name": {},
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "host": "example.com",
        "hostRedundancyAllowed": true,
        "followingCount": 0,
        "followersCount": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z",
        "displayName": "Videos of Framasoft",
        "description": "Videos made with <3 by Framasoft",
        "support": "Please support our work on https://soutenir.framasoft.org/en/ <3",
        "publicEmail": "user@example.com",
        "isLocal": true,
        "banners": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ],
        "ownerAccount": {
          "id": 42,
          "url": "http://example.com",
          "name": {},
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ],
          "host": "example.com",
          "hostRedundancyAllowed": true,
          "followingCount": 0,
          "followersCount": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "userId": {},
          "displayName": "string",
          "description": "string"
        },
        "videosCount": 0,
        "viewsPerDay": [
          {
            "date": "1970-01-01T00:00:00Z",
            "views": 0
          }
        ],
        "viewsGroupInterval": "day",
        "totalViews": 0
      },
      "videoPrivacy": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|

<h2 id="tocS_VideoChannelSyncCreate">VideoChannelSyncCreate</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelsynccreate"></a>
<a id="schema_VideoChannelSyncCreate"></a>
<a id="tocSvideochannelsynccreate"></a>
<a id="tocsvideochannelsynccreate"></a>

```json
{
  "externalChannelUrl": "https://youtube.com/c/UC_myfancychannel",
  "videoChannelId": 42,
  "videoPrivacy": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalChannelUrl|string|false|none|none|
|videoChannelId|[id](#schemaid)|false|none|none|
|videoPrivacy|integer|false|none|Privacy of imported videos (1 = PUBLIC, 2 = UNLISTED, 3 = PRIVATE, 4 = INTERNAL).<br>Password protected privacy is not supported<br>|

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

<h2 id="tocS_MRSSGroupContent">MRSSGroupContent</h2>
<!-- backwards compatibility -->
<a id="schemamrssgroupcontent"></a>
<a id="schema_MRSSGroupContent"></a>
<a id="tocSmrssgroupcontent"></a>
<a id="tocsmrssgroupcontent"></a>

```json
{
  "url": "http://example.com",
  "fileSize": 0,
  "type": "string",
  "framerate": 0,
  "duration": 0,
  "height": 0,
  "lang": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(url)|false|none|none|
|fileSize|integer|false|none|none|
|type|string|false|none|none|
|framerate|integer|false|none|none|
|duration|integer|false|none|none|
|height|integer|false|none|none|
|lang|string|false|none|none|

<h2 id="tocS_VideoCommentsForXML">VideoCommentsForXML</h2>
<!-- backwards compatibility -->
<a id="schemavideocommentsforxml"></a>
<a id="schema_VideoCommentsForXML"></a>
<a id="tocSvideocommentsforxml"></a>
<a id="tocsvideocommentsforxml"></a>

```json
[
  {
    "link": "http://example.com",
    "guid": "string",
    "pubDate": "1970-01-01T00:00:00Z",
    "content:encoded": "string",
    "dc:creator": "string"
  }
]
```

<h2 id="tocS_VideosForXML">VideosForXML</h2>
<!-- backwards compatibility -->
<a id="schemavideosforxml"></a>
<a id="schema_VideosForXML"></a>
<a id="tocSvideosforxml"></a>
<a id="tocsvideosforxml"></a>

```json
[
  {
    "link": "http://example.com",
    "guid": "string",
    "pubDate": "1970-01-01T00:00:00Z",
    "description": "string",
    "content:encoded": "string",
    "dc:creator": "string",
    "media:category": 0,
    "media:community": {
      "media:statistics": {
        "views": 0
      }
    },
    "media:embed": {
      "url": "http://example.com"
    },
    "media:player": {
      "url": "http://example.com"
    },
    "media:thumbnail": {
      "url": "http://example.com",
      "height": 0,
      "width": 0
    },
    "media:title": "string",
    "media:description": "string",
    "media:rating": "nonadult",
    "enclosure": {
      "url": "http://example.com",
      "type": "application/x-bittorrent",
      "length": 0
    },
    "media:group": [
      {
        "href": "string",
        "type": "application/x-bittorrent"
      }
    ]
  }
]
```

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

<h2 id="tocS_NotificationType">NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemanotificationtype"></a>
<a id="schema_NotificationType"></a>
<a id="tocSnotificationtype"></a>
<a id="tocsnotificationtype"></a>

```json
1
```

Notification type. One of the following values:

  - `1` NEW_VIDEO_FROM_SUBSCRIPTION

  - `2` NEW_COMMENT_ON_MY_VIDEO

  - `3` NEW_ABUSE_FOR_MODERATORS

  - `4` BLACKLIST_ON_MY_VIDEO

  - `5` UNBLACKLIST_ON_MY_VIDEO

  - `6` MY_VIDEO_PUBLISHED

  - `7` MY_VIDEO_IMPORT_SUCCESS

  - `8` MY_VIDEO_IMPORT_ERROR

  - `9` NEW_USER_REGISTRATION

  - `10` NEW_FOLLOW

  - `11` COMMENT_MENTION

  - `12` VIDEO_AUTO_BLACKLIST_FOR_MODERATORS

  - `13` NEW_INSTANCE_FOLLOWER

  - `14` AUTO_INSTANCE_FOLLOWING

  - `15` ABUSE_STATE_CHANGE

  - `16` ABUSE_NEW_MESSAGE

  - `17` NEW_PLUGIN_VERSION

  - `18` NEW_PEERTUBE_VERSION

  - `19` MY_VIDEO_STUDIO_EDITION_FINISHED

  - `20` NEW_USER_REGISTRATION_REQUEST

  - `21` NEW_LIVE_FROM_SUBSCRIPTION

  - `22` MY_VIDEO_TRANSCRIPTION_GENERATED

  - `23` INVITED_TO_COLLABORATE_TO_CHANNEL

  - `24` ACCEPTED_TO_COLLABORATE_TO_CHANNEL

  - `25` REFUSED_TO_COLLABORATE_TO_CHANNEL

  - `26` VIDEO_OWNERSHIP_CHANGED_REQUEST

  - `27` VIDEO_OWNERSHIP_CHANGED_ACCEPTED

  - `28` VIDEO_OWNERSHIP_CHANGED_REJECTED

  - `29` CHANNEL_OWNERSHIP_CHANGED_REQUEST

  - `30` CHANNEL_OWNERSHIP_CHANGED_ACCEPTED

  - `31` CHANNEL_OWNERSHIP_CHANGED_REJECTED

  - `32` AUTOMATIC_BLOCKLIST_UPDATE

<h2 id="tocS_NewFeatureInfoType">NewFeatureInfoType</h2>
<!-- backwards compatibility -->
<a id="schemanewfeatureinfotype"></a>
<a id="schema_NewFeatureInfoType"></a>
<a id="tocSnewfeatureinfotype"></a>
<a id="tocsnewfeatureinfotype"></a>

```json
1
```

Represent a new feature that can be displayed to inform users. One of the following values:

  - `1` CHANNEL_COLLABORATION

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": 42,
  "type": 1,
  "read": true,
  "video": {
    "id": {},
    "uuid": {},
    "name": "What is PeerTube?",
    "state": {
      "id": 1,
      "label": "string"
    },
    "channel": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    }
  },
  "videoImport": {
    "id": 42,
    "video": {
      "id": {},
      "uuid": {},
      "name": "What is PeerTube?",
      "state": {
        "id": 1,
        "label": "string"
      }
    },
    "torrentName": "string",
    "magnetUri": "http://example.com",
    "targetUri": "http://example.com"
  },
  "comment": {
    "id": 42,
    "threadId": 0,
    "video": {
      "id": {},
      "uuid": {},
      "name": "What is PeerTube?",
      "state": {
        "id": 1,
        "label": "string"
      }
    },
    "account": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "heldForReview": true
  },
  "videoAbuse": {
    "id": 42,
    "video": {
      "id": {},
      "uuid": {},
      "name": "What is PeerTube?",
      "state": {
        "id": 1,
        "label": "string"
      }
    }
  },
  "videoBlacklist": {
    "id": 42,
    "video": {
      "id": {},
      "uuid": {},
      "name": "What is PeerTube?",
      "state": {
        "id": 1,
        "label": "string"
      }
    }
  },
  "account": {
    "id": 42,
    "name": "string",
    "displayName": "string",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "actorFollow": {
    "id": 42,
    "follower": {
      "id": 42,
      "name": "string",
      "displayName": "string",
      "host": "example.com",
      "avatars": [
        {
          "path": "string",
          "fileUrl": "string",
          "width": 0,
          "height": 0,
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z"
        }
      ]
    },
    "state": "pending",
    "following": {
      "type": "account",
      "name": "string",
      "displayName": "string",
      "host": "example.com"
    }
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|type|[NotificationType](#schemanotificationtype)|false|none|Notification type. One of the following values:<br><br>  - `1` NEW_VIDEO_FROM_SUBSCRIPTION<br><br>  - `2` NEW_COMMENT_ON_MY_VIDEO<br><br>  - `3` NEW_ABUSE_FOR_MODERATORS<br><br>  - `4` BLACKLIST_ON_MY_VIDEO<br><br>  - `5` UNBLACKLIST_ON_MY_VIDEO<br><br>  - `6` MY_VIDEO_PUBLISHED<br><br>  - `7` MY_VIDEO_IMPORT_SUCCESS<br><br>  - `8` MY_VIDEO_IMPORT_ERROR<br><br>  - `9` NEW_USER_REGISTRATION<br><br>  - `10` NEW_FOLLOW<br><br>  - `11` COMMENT_MENTION<br><br>  - `12` VIDEO_AUTO_BLACKLIST_FOR_MODERATORS<br><br>  - `13` NEW_INSTANCE_FOLLOWER<br><br>  - `14` AUTO_INSTANCE_FOLLOWING<br><br>  - `15` ABUSE_STATE_CHANGE<br><br>  - `16` ABUSE_NEW_MESSAGE<br><br>  - `17` NEW_PLUGIN_VERSION<br><br>  - `18` NEW_PEERTUBE_VERSION<br><br>  - `19` MY_VIDEO_STUDIO_EDITION_FINISHED<br><br>  - `20` NEW_USER_REGISTRATION_REQUEST<br><br>  - `21` NEW_LIVE_FROM_SUBSCRIPTION<br><br>  - `22` MY_VIDEO_TRANSCRIPTION_GENERATED<br><br>  - `23` INVITED_TO_COLLABORATE_TO_CHANNEL<br><br>  - `24` ACCEPTED_TO_COLLABORATE_TO_CHANNEL<br><br>  - `25` REFUSED_TO_COLLABORATE_TO_CHANNEL<br><br>  - `26` VIDEO_OWNERSHIP_CHANGED_REQUEST<br><br>  - `27` VIDEO_OWNERSHIP_CHANGED_ACCEPTED<br><br>  - `28` VIDEO_OWNERSHIP_CHANGED_REJECTED<br><br>  - `29` CHANNEL_OWNERSHIP_CHANGED_REQUEST<br><br>  - `30` CHANNEL_OWNERSHIP_CHANGED_ACCEPTED<br><br>  - `31` CHANNEL_OWNERSHIP_CHANGED_REJECTED<br><br>  - `32` AUTOMATIC_BLOCKLIST_UPDATE<br>|
|read|boolean|false|none|none|
|video|object \| null|false|none|none|
|videoImport|object \| null|false|none|none|
|comment|object \| null|false|none|none|
|videoAbuse|object \| null|false|none|none|
|videoBlacklist|object \| null|false|none|none|
|account|object \| null|false|none|none|
|actorFollow|object \| null|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|1|
|type|2|
|type|3|
|type|4|
|type|5|
|type|6|
|type|7|
|type|8|
|type|9|
|type|10|
|type|11|
|type|12|
|type|13|
|type|14|
|type|15|
|type|16|
|type|17|
|type|18|
|type|19|
|type|20|
|type|21|
|type|22|
|type|23|
|type|24|
|type|25|
|type|26|
|type|27|
|type|28|
|type|29|
|type|30|
|type|31|
|type|32|
|type|33|

<h2 id="tocS_NotificationListResponse">NotificationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotificationlistresponse"></a>
<a id="schema_NotificationListResponse"></a>
<a id="tocSnotificationlistresponse"></a>
<a id="tocsnotificationlistresponse"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "type": 1,
      "read": true,
      "video": {
        "id": {},
        "uuid": {},
        "name": "What is PeerTube?",
        "state": {
          "id": 1,
          "label": "string"
        },
        "channel": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        }
      },
      "videoImport": {
        "id": 42,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        },
        "torrentName": "string",
        "magnetUri": "http://example.com",
        "targetUri": "http://example.com"
      },
      "comment": {
        "id": 42,
        "threadId": 0,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        },
        "account": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "heldForReview": true
      },
      "videoAbuse": {
        "id": 42,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        }
      },
      "videoBlacklist": {
        "id": 42,
        "video": {
          "id": {},
          "uuid": {},
          "name": "What is PeerTube?",
          "state": {
            "id": 1,
            "label": "string"
          }
        }
      },
      "account": {
        "id": 42,
        "name": "string",
        "displayName": "string",
        "host": "example.com",
        "avatars": [
          {
            "path": "string",
            "fileUrl": "string",
            "width": 0,
            "height": 0,
            "createdAt": "1970-01-01T00:00:00Z",
            "updatedAt": "1970-01-01T00:00:00Z"
          }
        ]
      },
      "actorFollow": {
        "id": 42,
        "follower": {
          "id": 42,
          "name": "string",
          "displayName": "string",
          "host": "example.com",
          "avatars": [
            {
              "path": "string",
              "fileUrl": "string",
              "width": 0,
              "height": 0,
              "createdAt": "1970-01-01T00:00:00Z",
              "updatedAt": "1970-01-01T00:00:00Z"
            }
          ]
        },
        "state": "pending",
        "following": {
          "type": "account",
          "name": "string",
          "displayName": "string",
          "host": "example.com"
        }
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[Notification](#schemanotification)]|false|none|none|

<h2 id="tocS_Plugin">Plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_Plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "name": "peertube-plugin-auth-ldap",
  "type": 1,
  "latestVersion": "0.0.3",
  "version": "0.0.1",
  "enabled": true,
  "uninstalled": true,
  "peertubeEngine": "2.2.0",
  "description": "string",
  "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
  "settings": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|type|integer|false|none|- `1`: PLUGIN<br>- `2`: THEME<br>|
|latestVersion|string|false|none|none|
|version|string|false|none|none|
|enabled|boolean|false|none|none|
|uninstalled|boolean|false|none|none|
|peertubeEngine|string|false|none|none|
|description|string|false|none|none|
|homepage|string(url)|false|none|none|
|settings|object|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

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
  "total": 1,
  "data": [
    {
      "name": "peertube-plugin-auth-ldap",
      "type": 1,
      "latestVersion": "0.0.3",
      "version": "0.0.1",
      "enabled": true,
      "uninstalled": true,
      "peertubeEngine": "2.2.0",
      "description": "string",
      "homepage": "https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap",
      "settings": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[Plugin](#schemaplugin)]|false|none|none|

<h2 id="tocS_LiveVideoUpdate">LiveVideoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalivevideoupdate"></a>
<a id="schema_LiveVideoUpdate"></a>
<a id="tocSlivevideoupdate"></a>
<a id="tocslivevideoupdate"></a>

```json
{
  "saveReplay": true,
  "replaySettings": {
    "privacy": 1
  },
  "permanentLive": true,
  "latencyMode": {},
  "schedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|saveReplay|boolean|false|none|none|
|replaySettings|[LiveVideoReplaySettings](#schemalivevideoreplaysettings)|false|none|none|
|permanentLive|boolean|false|none|User can stream multiple times in a permanent live|
|latencyMode|object|false|none|User can select live latency mode if enabled by the instance|
|schedules|[[LiveSchedule](#schemaliveschedule)]|false|none|none|

<h2 id="tocS_LiveVideoResponse">LiveVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivevideoresponse"></a>
<a id="schema_LiveVideoResponse"></a>
<a id="tocSlivevideoresponse"></a>
<a id="tocslivevideoresponse"></a>

```json
{
  "rtmpUrl": "string",
  "rtmpsUrl": "string",
  "streamKey": "string",
  "saveReplay": true,
  "replaySettings": {
    "privacy": 1
  },
  "permanentLive": true,
  "latencyMode": {},
  "schedules": [
    {
      "startAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rtmpUrl|string|false|none|Included in the response if an appropriate token is provided|
|rtmpsUrl|string|false|none|Included in the response if an appropriate token is provided|
|streamKey|string|false|none|RTMP stream key to use to stream into this live video. Included in the response if an appropriate token is provided|
|saveReplay|boolean|false|none|none|
|replaySettings|[LiveVideoReplaySettings](#schemalivevideoreplaysettings)|false|none|none|
|permanentLive|boolean|false|none|User can stream multiple times in a permanent live|
|latencyMode|object|false|none|User can select live latency mode if enabled by the instance|
|schedules|[[LiveSchedule](#schemaliveschedule)]|false|none|none|

<h2 id="tocS_LiveSchedule">LiveSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaliveschedule"></a>
<a id="schema_LiveSchedule"></a>
<a id="tocSliveschedule"></a>
<a id="tocsliveschedule"></a>

```json
{
  "startAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startAt|string(date-time)|false|none|Date when the stream is scheduled to air at|

<h2 id="tocS_TokenSession">TokenSession</h2>
<!-- backwards compatibility -->
<a id="schematokensession"></a>
<a id="schema_TokenSession"></a>
<a id="tocStokensession"></a>
<a id="tocstokensession"></a>

```json
{
  "id": 0,
  "currentSession": true,
  "loginDevice": "string",
  "loginIP": "192.0.2.1",
  "loginDate": "1970-01-01T00:00:00Z",
  "lastActivityDevice": "string",
  "lastActivityIP": "192.0.2.1",
  "lastActivityDate": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|currentSession|boolean|false|none|Is this session the current one?|
|loginDevice|string|false|none|Device used to login|
|loginIP|string(ipv4)|false|none|IP address used to login|
|loginDate|string(date-time)|false|none|Date of the login|
|lastActivityDevice|string|false|none|none|
|lastActivityIP|string(ipv4)|false|none|none|
|lastActivityDate|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|

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
      "start": 0,
      "end": 0
    }
  }
]
```

<h2 id="tocS_LiveVideoSessionResponse">LiveVideoSessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemalivevideosessionresponse"></a>
<a id="schema_LiveVideoSessionResponse"></a>
<a id="tocSlivevideosessionresponse"></a>
<a id="tocslivevideosessionresponse"></a>

```json
{
  "id": 0,
  "startDate": "1970-01-01T00:00:00Z",
  "endDate": "1970-01-01T00:00:00Z",
  "error": 1,
  "replayVideo": {
    "id": 0,
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
    "shortUUID": "2y84q2MQUMWPbiEcxNXMgC"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|startDate|string(date-time)|false|none|Start date of the live session|
|endDate|string(date-time) \| null|false|none|End date of the live session|
|error|integer \| null|false|none|Error type if an error occurred during the live session:<br>  - `1`: Bad socket health (transcoding is too slow)<br>  - `2`: Max duration exceeded<br>  - `3`: Quota exceeded<br>  - `4`: Quota FFmpeg error<br>  - `5`: Video has been blacklisted during the live<br>|
|replayVideo|object|false|none|Video replay information|

#### Enumerated Values

|Property|Value|
|---|---|
|error|1|
|error|2|
|error|3|
|error|4|
|error|5|

<h2 id="tocS_PlaybackMetricCreate">PlaybackMetricCreate</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackmetriccreate"></a>
<a id="schema_PlaybackMetricCreate"></a>
<a id="tocSplaybackmetriccreate"></a>
<a id="tocsplaybackmetriccreate"></a>

```json
{
  "playerMode": "p2p-media-loader",
  "resolution": 0,
  "fps": 0,
  "p2pEnabled": true,
  "p2pPeers": 0,
  "resolutionChanges": 0,
  "bufferStalled": 0,
  "errors": 0,
  "downloadedBytesP2P": 0,
  "downloadedBytesHTTP": 0,
  "uploadedBytesP2P": 0,
  "videoId": 42
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playerMode|string|true|none|none|
|resolution|number|false|none|Current player video resolution|
|fps|number|false|none|Current player video fps|
|p2pEnabled|boolean|true|none|none|
|p2pPeers|number|false|none|P2P peers connected (doesn't include WebSeed peers)|
|resolutionChanges|number|true|none|How many resolution changes occurred since the last metric creation|
|bufferStalled|number|false|none|How many times buffer has been stalled since the last metric creation|
|errors|number|true|none|How many errors occurred since the last metric creation|
|downloadedBytesP2P|number|true|none|How many bytes were downloaded with P2P since the last metric creation|
|downloadedBytesHTTP|number|true|none|How many bytes were downloaded with HTTP since the last metric creation|
|uploadedBytesP2P|number|true|none|How many bytes were uploaded with P2P since the last metric creation|
|videoId|[id](#schemaid) \| [UUIDv4](#schemauuidv4) \| [shortUUID](#schemashortuuid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|playerMode|p2p-media-loader|
|playerMode|web-video|

<h2 id="tocS_RunnerRegistrationToken">RunnerRegistrationToken</h2>
<!-- backwards compatibility -->
<a id="schemarunnerregistrationtoken"></a>
<a id="schema_RunnerRegistrationToken"></a>
<a id="tocSrunnerregistrationtoken"></a>
<a id="tocsrunnerregistrationtoken"></a>

```json
{
  "id": 0,
  "registrationToken": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "registeredRunnersCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|registrationToken|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|registeredRunnersCount|integer|false|none|none|

<h2 id="tocS_Runner">Runner</h2>
<!-- backwards compatibility -->
<a id="schemarunner"></a>
<a id="schema_Runner"></a>
<a id="tocSrunner"></a>
<a id="tocsrunner"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "ip": "string",
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastContact": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|ip|string|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|lastContact|string(date-time)|false|none|none|

<h2 id="tocS_RunnerJobType">RunnerJobType</h2>
<!-- backwards compatibility -->
<a id="schemarunnerjobtype"></a>
<a id="schema_RunnerJobType"></a>
<a id="tocSrunnerjobtype"></a>
<a id="tocsrunnerjobtype"></a>

```json
"vod-web-video-transcoding"
```

<h2 id="tocS_RunnerJobState">RunnerJobState</h2>
<!-- backwards compatibility -->
<a id="schemarunnerjobstate"></a>
<a id="schema_RunnerJobState"></a>
<a id="tocSrunnerjobstate"></a>
<a id="tocsrunnerjobstate"></a>

```json
1
```

The runner job state:
  - `1` Pending
  - `2` Processing
  - `3` Completed
  - `4` Errored
  - `5` Waiting for a parent job
  - `6` Cancelled
  - `7` Parent had an error
  - `8` Parent has been cancelled

<h2 id="tocS_RunnerJobStateConstant">RunnerJobStateConstant</h2>
<!-- backwards compatibility -->
<a id="schemarunnerjobstateconstant"></a>
<a id="schema_RunnerJobStateConstant"></a>
<a id="tocSrunnerjobstateconstant"></a>
<a id="tocsrunnerjobstateconstant"></a>

```json
{
  "id": 1,
  "label": "Processing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[RunnerJobState](#schemarunnerjobstate)|false|none|The runner job state:<br>  - `1` Pending<br>  - `2` Processing<br>  - `3` Completed<br>  - `4` Errored<br>  - `5` Waiting for a parent job<br>  - `6` Cancelled<br>  - `7` Parent had an error<br>  - `8` Parent has been cancelled<br>|
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

<h2 id="tocS_RunnerJobPayload">RunnerJobPayload</h2>
<!-- backwards compatibility -->
<a id="schemarunnerjobpayload"></a>
<a id="schema_RunnerJobPayload"></a>
<a id="tocSrunnerjobpayload"></a>
<a id="tocsrunnerjobpayload"></a>

```json
{
  "input": {
    "videoFileUrl": "string"
  },
  "output": {
    "resolution": 0,
    "fps": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|input|object|false|none|none|
|output|object|false|none|none|
|*anyOf*|object|false|none|none|
|input|object|false|none|none|
|output|object|false|none|none|
|*anyOf*|object|false|none|none|
|input|object|false|none|none|
|output|object|false|none|none|

<h2 id="tocS_RunnerJob">RunnerJob</h2>
<!-- backwards compatibility -->
<a id="schemarunnerjob"></a>
<a id="schema_RunnerJob"></a>
<a id="tocSrunnerjob"></a>
<a id="tocsrunnerjob"></a>

```json
{
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "type": "vod-web-video-transcoding",
  "state": {
    "id": 1,
    "label": "Processing"
  },
  "payload": {
    "input": {
      "videoFileUrl": "string"
    },
    "output": {
      "resolution": 0,
      "fps": 0
    }
  },
  "failures": 0,
  "error": "string",
  "progress": 0,
  "priority": 0,
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "parent": {
    "type": "vod-web-video-transcoding",
    "state": {
      "id": 1,
      "label": "Processing"
    },
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "runner": {
    "id": 0,
    "name": "string",
    "description": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|type|[RunnerJobType](#schemarunnerjobtype)|false|none|none|
|state|[RunnerJobStateConstant](#schemarunnerjobstateconstant)|false|none|none|
|payload|[RunnerJobPayload](#schemarunnerjobpayload)|false|none|none|
|failures|integer|false|none|Number of times a remote runner failed to process this job. After too many failures, the job in "error" state|
|error|string \| null|false|none|Error message if the job is errored|
|progress|integer|false|none|Percentage progress|
|priority|integer|false|none|Job priority (less has more priority)|
|updatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|startedAt|string(date-time)|false|none|none|
|finishedAt|string(date-time)|false|none|none|
|parent|object \| null|false|none|If job has a parent job|
|runner|object \| null|false|none|If job is associated to a runner|

#### Enumerated Values

|Property|Value|
|---|---|
|type|vod-web-video-transcoding|
|type|vod-hls-transcoding|
|type|vod-audio-merge-transcoding|
|type|live-rtmp-hls-transcoding|

<h2 id="tocS_RunnerJobAdmin">RunnerJobAdmin</h2>
<!-- backwards compatibility -->
<a id="schemarunnerjobadmin"></a>
<a id="schema_RunnerJobAdmin"></a>
<a id="tocSrunnerjobadmin"></a>
<a id="tocsrunnerjobadmin"></a>

```json
{
  "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d",
  "type": "vod-web-video-transcoding",
  "state": {
    "id": 1,
    "label": "Processing"
  },
  "payload": {
    "input": {
      "videoFileUrl": "string"
    },
    "output": {
      "resolution": 0,
      "fps": 0
    }
  },
  "failures": 0,
  "error": "string",
  "progress": 0,
  "priority": 0,
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "startedAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "parent": {
    "type": "vod-web-video-transcoding",
    "state": {
      "id": 1,
      "label": "Processing"
    },
    "uuid": "9c9de5e8-0a1e-484a-b099-e80766180a6d"
  },
  "runner": {
    "id": 0,
    "name": "string",
    "description": "string"
  },
  "privatePayload": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uuid|[UUIDv4](#schemauuidv4)|false|none|none|
|type|[RunnerJobType](#schemarunnerjobtype)|false|none|none|
|state|[RunnerJobStateConstant](#schemarunnerjobstateconstant)|false|none|none|
|payload|[RunnerJobPayload](#schemarunnerjobpayload)|false|none|none|
|failures|integer|false|none|Number of times a remote runner failed to process this job. After too many failures, the job in "error" state|
|error|string \| null|false|none|Error message if the job is errored|
|progress|integer|false|none|Percentage progress|
|priority|integer|false|none|Job priority (less has more priority)|
|updatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|startedAt|string(date-time)|false|none|none|
|finishedAt|string(date-time)|false|none|none|
|parent|object \| null|false|none|If job has a parent job|
|runner|object \| null|false|none|If job is associated to a runner|
|privatePayload|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|vod-web-video-transcoding|
|type|vod-hls-transcoding|
|type|vod-audio-merge-transcoding|
|type|live-rtmp-hls-transcoding|

<h2 id="tocS_WatchedWordsLists">WatchedWordsLists</h2>
<!-- backwards compatibility -->
<a id="schemawatchedwordslists"></a>
<a id="schema_WatchedWordsLists"></a>
<a id="tocSwatchedwordslists"></a>
<a id="tocswatchedwordslists"></a>

```json
{
  "id": 42,
  "listName": "string",
  "words": [
    "string"
  ],
  "subscriptionUrl": "http://example.com",
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "createdAt": "2021-05-04T08:01:01.502Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|listName|string|false|none|none|
|words|[string]|false|none|none|
|subscriptionUrl|string(url) \| null|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS_WatchedWordsSubscription">WatchedWordsSubscription</h2>
<!-- backwards compatibility -->
<a id="schemawatchedwordssubscription"></a>
<a id="schema_WatchedWordsSubscription"></a>
<a id="tocSwatchedwordssubscription"></a>
<a id="tocswatchedwordssubscription"></a>

```json
{
  "id": 42,
  "name": "string",
  "url": "http://example.com",
  "importedWordsCount": 0,
  "lastSyncAt": "2021-05-04T08:01:01.502Z",
  "state": {
    "id": 1,
    "label": "string"
  },
  "updatedAt": "2021-05-04T08:01:01.502Z",
  "createdAt": "2021-05-04T08:01:01.502Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|name|string|false|none|none|
|url|string(url)|false|none|none|
|importedWordsCount|integer|false|none|none|
|lastSyncAt|string(date-time) \| null|false|none|none|
|state|object|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|

<h2 id="tocS_VideoPassword">VideoPassword</h2>
<!-- backwards compatibility -->
<a id="schemavideopassword"></a>
<a id="schema_VideoPassword"></a>
<a id="tocSvideopassword"></a>
<a id="tocsvideopassword"></a>

```json
{
  "id": 42,
  "password": "string",
  "videoId": 42
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|password|string|false|none|none|
|videoId|[id](#schemaid)|false|none|none|

<h2 id="tocS_VideoPasswordList">VideoPasswordList</h2>
<!-- backwards compatibility -->
<a id="schemavideopasswordlist"></a>
<a id="schema_VideoPasswordList"></a>
<a id="tocSvideopasswordlist"></a>
<a id="tocsvideopasswordlist"></a>

```json
{
  "total": 1,
  "data": [
    {
      "id": 42,
      "password": "string",
      "videoId": 42
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[[VideoPassword](#schemavideopassword)]|false|none|none|

<h2 id="tocS_AddVideoPasswords">AddVideoPasswords</h2>
<!-- backwards compatibility -->
<a id="schemaaddvideopasswords"></a>
<a id="schema_AddVideoPasswords"></a>
<a id="tocSaddvideopasswords"></a>
<a id="tocsaddvideopasswords"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VideoEmbedPrivacy">VideoEmbedPrivacy</h2>
<!-- backwards compatibility -->
<a id="schemavideoembedprivacy"></a>
<a id="schema_VideoEmbedPrivacy"></a>
<a id="tocSvideoembedprivacy"></a>
<a id="tocsvideoembedprivacy"></a>

```json
1
```

The video embed privacy level:
  - `1` All allowed: anyone can embed the video
  - `2` Allowlist: only the domains in the allowlist can embed the video
  - `3` Remote restrictions: the remote instance has restrictions on where the video can be embedded
  - `4` Nobody can embed this video

<h2 id="tocS_PlayerTheme">PlayerTheme</h2>
<!-- backwards compatibility -->
<a id="schemaplayertheme"></a>
<a id="schema_PlayerTheme"></a>
<a id="tocSplayertheme"></a>
<a id="tocsplayertheme"></a>

```json
"galaxy"
```

The player theme to use

<h2 id="tocS_PlayerThemeChannelSetting">PlayerThemeChannelSetting</h2>
<!-- backwards compatibility -->
<a id="schemaplayerthemechannelsetting"></a>
<a id="schema_PlayerThemeChannelSetting"></a>
<a id="tocSplayerthemechannelsetting"></a>
<a id="tocsplayerthemechannelsetting"></a>

```json
"instance-default"
```

Player theme setting for a channel:
  - `instance-default` Use the instance default theme
  - `galaxy` Use the galaxy theme
  - `lucide` Use the lucide theme

<h2 id="tocS_PlayerThemeVideoSetting">PlayerThemeVideoSetting</h2>
<!-- backwards compatibility -->
<a id="schemaplayerthemevideosetting"></a>
<a id="schema_PlayerThemeVideoSetting"></a>
<a id="tocSplayerthemevideosetting"></a>
<a id="tocsplayerthemevideosetting"></a>

```json
"channel-default"
```

Player theme setting for a video:
  - `channel-default` Use the channel default theme
  - `instance-default` Use the instance default theme
  - `galaxy` Use the galaxy theme
  - `lucide` Use the lucide theme

<h2 id="tocS_PlayerVideoSettings">PlayerVideoSettings</h2>
<!-- backwards compatibility -->
<a id="schemaplayervideosettings"></a>
<a id="schema_PlayerVideoSettings"></a>
<a id="tocSplayervideosettings"></a>
<a id="tocsplayervideosettings"></a>

```json
{
  "theme": "channel-default"
}
```

Player settings for a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theme|[PlayerThemeVideoSetting](#schemaplayerthemevideosetting)|false|none|Player theme setting for a video:<br>  - `channel-default` Use the channel default theme<br>  - `instance-default` Use the instance default theme<br>  - `galaxy` Use the galaxy theme<br>  - `lucide` Use the lucide theme<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|theme|channel-default|
|theme|instance-default|
|theme|galaxy|
|theme|lucide|

<h2 id="tocS_PlayerChannelSettings">PlayerChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemaplayerchannelsettings"></a>
<a id="schema_PlayerChannelSettings"></a>
<a id="tocSplayerchannelsettings"></a>
<a id="tocsplayerchannelsettings"></a>

```json
{
  "theme": "instance-default"
}
```

Player settings for a channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theme|[PlayerThemeChannelSetting](#schemaplayerthemechannelsetting)|false|none|Player theme setting for a channel:<br>  - `instance-default` Use the instance default theme<br>  - `galaxy` Use the galaxy theme<br>  - `lucide` Use the lucide theme<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|theme|instance-default|
|theme|galaxy|
|theme|lucide|

<h2 id="tocS_PlayerVideoSettingsUpdate">PlayerVideoSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaplayervideosettingsupdate"></a>
<a id="schema_PlayerVideoSettingsUpdate"></a>
<a id="tocSplayervideosettingsupdate"></a>
<a id="tocsplayervideosettingsupdate"></a>

```json
{
  "theme": "channel-default"
}
```

Player settings update for a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theme|[PlayerThemeVideoSetting](#schemaplayerthemevideosetting)|true|none|Player theme setting for a video:<br>  - `channel-default` Use the channel default theme<br>  - `instance-default` Use the instance default theme<br>  - `galaxy` Use the galaxy theme<br>  - `lucide` Use the lucide theme<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|theme|channel-default|
|theme|instance-default|
|theme|galaxy|
|theme|lucide|

<h2 id="tocS_PlayerChannelSettingsUpdate">PlayerChannelSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaplayerchannelsettingsupdate"></a>
<a id="schema_PlayerChannelSettingsUpdate"></a>
<a id="tocSplayerchannelsettingsupdate"></a>
<a id="tocsplayerchannelsettingsupdate"></a>

```json
{
  "theme": "instance-default"
}
```

Player settings update for a channel

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theme|[PlayerThemeChannelSetting](#schemaplayerthemechannelsetting)|true|none|Player theme setting for a channel:<br>  - `instance-default` Use the instance default theme<br>  - `galaxy` Use the galaxy theme<br>  - `lucide` Use the lucide theme<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|theme|instance-default|
|theme|galaxy|
|theme|lucide|

<h2 id="tocS_FileStorage">FileStorage</h2>
<!-- backwards compatibility -->
<a id="schemafilestorage"></a>
<a id="schema_FileStorage"></a>
<a id="tocSfilestorage"></a>
<a id="tocsfilestorage"></a>

```json
0
```

The file storage type:
  - `0` File system
  - `1` Object storage

<h2 id="tocS_VideoChannelCollaborator">VideoChannelCollaborator</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelcollaborator"></a>
<a id="schema_VideoChannelCollaborator"></a>
<a id="tocSvideochannelcollaborator"></a>
<a id="tocsvideochannelcollaborator"></a>

```json
{
  "id": 42,
  "account": {
    "id": 0,
    "name": "string",
    "displayName": "string",
    "url": "http://example.com",
    "host": "example.com",
    "avatars": [
      {
        "path": "string",
        "fileUrl": "string",
        "width": 0,
        "height": 0,
        "createdAt": "1970-01-01T00:00:00Z",
        "updatedAt": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "state": {
    "id": 1,
    "label": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

Representation of a channel collaboration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[id](#schemaid)|false|none|none|
|account|[AccountSummary](#schemaaccountsummary)|false|none|none|
|state|object|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|

<h2 id="tocS_VideoChannelCollaboratorState">VideoChannelCollaboratorState</h2>
<!-- backwards compatibility -->
<a id="schemavideochannelcollaboratorstate"></a>
<a id="schema_VideoChannelCollaboratorState"></a>
<a id="tocSvideochannelcollaboratorstate"></a>
<a id="tocsvideochannelcollaboratorstate"></a>

```json
1
```

The user import state:
  - `1`: Pending
  - `2`: Accepted
