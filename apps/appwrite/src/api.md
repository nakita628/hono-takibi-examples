<h1 id="appwrite">Appwrite v1.7.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

Base URLs:

* <a href="https://cloud.appwrite.io/v1">https://cloud.appwrite.io/v1</a>

* <a href="https://&lt;REGION&gt;.cloud.appwrite.io/v1">https://&lt;REGION&gt;.cloud.appwrite.io/v1</a>

<a href="https://appwrite.io/policy/terms">Terms of service</a>
Email: <a href="mailto:team@appwrite.io">Appwrite Team</a> 
Web: <a href="https://appwrite.io/support">Appwrite Team</a> 
License: <a href="https://raw.githubusercontent.com/appwrite/appwrite/master/LICENSE">BSD-3-Clause</a>

<a href="https://appwrite.io/docs">Full API docs, specs and tutorials</a>

# Authentication

* API Key (Project)
    - Parameter Name: **X-Appwrite-Project**, in: header. Your project ID

* API Key (Key)
    - Parameter Name: **X-Appwrite-Key**, in: header. Your secret API key

* API Key (JWT)
    - Parameter Name: **X-Appwrite-JWT**, in: header. Your secret JSON Web Token

* API Key (Locale)
    - Parameter Name: **X-Appwrite-Locale**, in: header.

* API Key (Session)
    - Parameter Name: **X-Appwrite-Session**, in: header. The user session to authenticate with

* API Key (ForwardedUserAgent)
    - Parameter Name: **X-Forwarded-User-Agent**, in: header. The user agent string of the client that made the request

<h1 id="appwrite-account">account</h1>

The Account service allows you to authenticate and manage a user account.

## Get account

<a id="opIdaccountGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account`

Get the currently logged in user.

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create account

<a id="opIdaccountCreate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  }'
```

`POST /account`

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

<h3 id="create-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|New user password. Must be between 8 and 256 chars.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Update email

<a id="opIdaccountUpdateEmail"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/email \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "email": "string",
    "password": "string"
  }'
```

`PATCH /account/email`

Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.


> Body parameter

```json
{
  "email": "string",
  "password": "string"
}
```

<h3 id="update-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|User email.|
|» password|body|string|true|User password. Must be at least 8 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## List identities

<a id="opIdaccountListIdentities"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/identities \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/identities`

Get the list of identities for the currently logged in user.

<h3 id="list-identities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "identities": ""
}
```

<h3 id="list-identities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Identities List|[identityList](#schemaidentitylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Delete identity

<a id="opIdaccountDeleteIdentity"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/identities/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /account/identities/{identityId}`

Delete an identity by its unique ID.

<h3 id="delete-identity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identityId|path|string|true|Identity ID.|

<h3 id="delete-identity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create JWT

<a id="opIdaccountCreateJWT"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/jwts \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}"
```

`POST /account/jwts`

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

> Example responses

> 201 Response

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

<h3 id="create-jwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|JWT|[jwt](#schemajwt)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## List logs

<a id="opIdaccountListLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/logs`

Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.

<h3 id="list-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "logs": ""
}
```

<h3 id="list-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs List|[logList](#schemaloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update MFA

<a id="opIdaccountUpdateMFA"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "mfa": true
  }'
```

`PATCH /account/mfa`

Enable or disable MFA on an account.

> Body parameter

```json
{
  "mfa": true
}
```

<h3 id="update-mfa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» mfa|body|boolean|true|Enable or disable MFA.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-mfa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update authenticator (confirmation)

<a id="opIdaccountUpdateMfaAuthenticator"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/authenticators/totp \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "otp": "string"
  }'
```

`PUT /account/mfa/authenticators/{type}`

Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator) method.

> Body parameter

```json
{
  "otp": "string"
}
```

<h3 id="update-authenticator-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type of authenticator.|
|body|body|object|false|none|
|» otp|body|string|true|Valid verification token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|totp|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-authenticator-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create authenticator

<a id="opIdaccountCreateMfaAuthenticator"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/authenticators/totp \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`POST /account/mfa/authenticators/{type}`

Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator) method.

<h3 id="create-authenticator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type of authenticator. Must be `totp`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|totp|

> Example responses

> 200 Response

```json
{
  "secret": true,
  "uri": true
}
```

<h3 id="create-authenticator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFAType|[mfaType](#schemamfatype)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Delete authenticator

<a id="opIdaccountDeleteMfaAuthenticator"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/authenticators/totp \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /account/mfa/authenticators/{type}`

Delete an authenticator for a user by ID.

<h3 id="delete-authenticator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type of authenticator.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|totp|

<h3 id="delete-authenticator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update MFA challenge (confirmation)

<a id="opIdaccountUpdateMfaChallenge"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/challenge \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "challengeId": "string",
    "otp": "string"
  }'
```

`PUT /account/mfa/challenge`

Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

> Body parameter

```json
{
  "challengeId": "string",
  "otp": "string"
}
```

<h3 id="update-mfa-challenge-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» challengeId|body|string|true|ID of the challenge.|
|» otp|body|string|true|Valid verification token.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-mfa-challenge-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create MFA challenge

<a id="opIdaccountCreateMfaChallenge"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/challenge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "factor": "email"
  }'
```

`POST /account/mfa/challenge`

Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.

> Body parameter

```json
{
  "factor": "email"
}
```

<h3 id="create-mfa-challenge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» factor|body|string|true|Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» factor|email|
|» factor|phone|
|» factor|totp|
|» factor|recoverycode|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "expire": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-mfa-challenge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|MFA Challenge|[mfaChallenge](#schemamfachallenge)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## List factors

<a id="opIdaccountListMfaFactors"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/factors \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/mfa/factors`

List the factors available on the account to be used as a MFA challange.

> Example responses

> 200 Response

```json
{
  "totp": true,
  "phone": true,
  "email": true,
  "recoveryCode": true
}
```

<h3 id="list-factors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFAFactors|[mfaFactors](#schemamfafactors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## List MFA recovery codes

<a id="opIdaccountGetMfaRecoveryCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/recovery-codes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/mfa/recovery-codes`

Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.

> Example responses

> 200 Response

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

<h3 id="list-mfa-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFA Recovery Codes|[mfaRecoveryCodes](#schemamfarecoverycodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create MFA recovery codes

<a id="opIdaccountCreateMfaRecoveryCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/recovery-codes \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`POST /account/mfa/recovery-codes`

Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

> Example responses

> 201 Response

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

<h3 id="create-mfa-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|MFA Recovery Codes|[mfaRecoveryCodes](#schemamfarecoverycodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update MFA recovery codes (regenerate)

<a id="opIdaccountUpdateMfaRecoveryCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/mfa/recovery-codes \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`PATCH /account/mfa/recovery-codes`

Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.

> Example responses

> 200 Response

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

<h3 id="update-mfa-recovery-codes-regenerate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFA Recovery Codes|[mfaRecoveryCodes](#schemamfarecoverycodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update name

<a id="opIdaccountUpdateName"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/name \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /account/name`

Update currently logged in user account name.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|User name. Max length: 128 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update password

<a id="opIdaccountUpdatePassword"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "password": "string",
    "oldPassword": "string"
  }'
```

`PATCH /account/password`

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

> Body parameter

```json
{
  "password": "string",
  "oldPassword": "string"
}
```

<h3 id="update-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» password|body|string|true|New user password. Must be at least 8 chars.|
|» oldPassword|body|string|false|Current user password. Must be at least 8 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update phone

<a id="opIdaccountUpdatePhone"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/phone \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "phone": "string",
    "password": "string"
  }'
```

`PATCH /account/phone`

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.

> Body parameter

```json
{
  "phone": "string",
  "password": "string"
}
```

<h3 id="update-phone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» phone|body|string|true|Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» password|body|string|true|User password. Must be at least 8 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-phone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Get account preferences

<a id="opIdaccountGetPrefs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/prefs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/prefs`

Get the preferences as a key-value object for the currently logged in user.

> Example responses

> 200 Response

```json
{
  "language": "en",
  "timezone": "UTC",
  "darkTheme": true
}
```

<h3 id="get-account-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences|[preferences](#schemapreferences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update preferences

<a id="opIdaccountUpdatePrefs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/prefs \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "prefs": {}
  }'
```

`PATCH /account/prefs`

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

> Body parameter

```json
{
  "prefs": {}
}
```

<h3 id="update-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» prefs|body|object|true|Prefs key-value JSON object.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update password recovery (confirmation)

<a id="opIdaccountUpdateRecovery"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/recovery \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string",
    "password": "string"
  }'
```

`PUT /account/recovery`

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

> Body parameter

```json
{
  "userId": "string",
  "secret": "string",
  "password": "string"
}
```

<h3 id="update-password-recovery-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID.|
|» secret|body|string|true|Valid reset token.|
|» password|body|string|true|New user password. Must be between 8 and 256 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="update-password-recovery-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create password recovery

<a id="opIdaccountCreateRecovery"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/recovery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "email": "string",
    "url": "string"
  }'
```

`POST /account/recovery`

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

> Body parameter

```json
{
  "email": "string",
  "url": "string"
}
```

<h3 id="create-password-recovery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|User email.|
|» url|body|string|true|URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-password-recovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## List sessions

<a id="opIdaccountListSessions"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/sessions`

Get the list of active sessions across different devices for the currently logged in user.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "sessions": ""
}
```

<h3 id="list-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sessions List|[sessionList](#schemasessionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Delete sessions

<a id="opIdaccountDeleteSessions"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /account/sessions`

Delete all sessions from the user account and remove any sessions cookies from the end client.

<h3 id="delete-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create anonymous session

<a id="opIdaccountCreateAnonymousSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/anonymous \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}"
```

`POST /account/sessions/anonymous`

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-anonymous-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Create email password session

<a id="opIdaccountCreateEmailPasswordSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/email \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "email": "string",
    "password": "string"
  }'
```

`POST /account/sessions/email`

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

> Body parameter

```json
{
  "email": "string",
  "password": "string"
}
```

<h3 id="create-email-password-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|User email.|
|» password|body|string|true|User password. Must be at least 8 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-email-password-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Update magic URL session

<a id="opIdaccountUpdateMagicURLSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/magic-url \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string"
  }'
```

`PUT /account/sessions/magic-url`

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

> Body parameter

```json
{
  "userId": "string",
  "secret": "string"
}
```

<h3 id="update-magic-url-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» secret|body|string|true|Valid verification token.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-magic-url-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Update phone session

<a id="opIdaccountUpdatePhoneSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/phone \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string"
  }'
```

`PUT /account/sessions/phone`

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

> Body parameter

```json
{
  "userId": "string",
  "secret": "string"
}
```

<h3 id="update-phone-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» secret|body|string|true|Valid verification token.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-phone-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Create session

<a id="opIdaccountCreateSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string"
  }'
```

`POST /account/sessions/token`

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

> Body parameter

```json
{
  "userId": "string",
  "secret": "string"
}
```

<h3 id="create-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» secret|body|string|true|Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Get session

<a id="opIdaccountGetSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /account/sessions/{sessionId}`

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

<h3 id="get-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|Session ID. Use the string 'current' to get the current device session.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Delete session

<a id="opIdaccountDeleteSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /account/sessions/{sessionId}`

Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.

<h3 id="delete-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|Session ID. Use the string 'current' to delete the current device session.|

<h3 id="delete-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update session

<a id="opIdaccountUpdateSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/sessions/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`PATCH /account/sessions/{sessionId}`

Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.

<h3 id="update-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sessionId|path|string|true|Session ID. Use the string 'current' to update the current device session.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update status

<a id="opIdaccountUpdateStatus"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/status \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`PATCH /account/status`

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create email token (OTP)

<a id="opIdaccountCreateEmailToken"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/tokens/email \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "phrase": true
  }'
```

`POST /account/tokens/email`

Sends the user an email with a secret key for creating a session. If the email address has never been used, a **new account is created** using the provided `userId`. Otherwise, if the email address is already attached to an account, the **user ID is ignored**. Then, the user will receive an email with the one-time password. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "phrase": true
}
```

<h3 id="create-email-token-otp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.|
|» email|body|string|true|User email.|
|» phrase|body|boolean|false|Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-email-token-otp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Create magic URL token

<a id="opIdaccountCreateMagicURLToken"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/tokens/magic-url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "url": "string",
    "phrase": true
  }'
```

`POST /account/tokens/magic-url`

Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "url": "string",
  "phrase": true
}
```

<h3 id="create-magic-url-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored.|
|» email|body|string|true|User email.|
|» url|body|string|false|URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.|
|» phrase|body|boolean|false|Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-magic-url-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Create OAuth2 token

<a id="opIdaccountCreateOAuth2Token"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/tokens/oauth2/amazon \
  -H "X-Appwrite-Project: ${API_KEY}"
```

`GET /account/tokens/oauth2/{provider}`

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed. 

If authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

<h3 id="create-oauth2-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, figma, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.|
|success|query|string(url)|false|URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.|
|failure|query|string(url)|false|URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.|
|scopes|query|[string]|false|A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|amazon|
|provider|apple|
|provider|auth0|
|provider|authentik|
|provider|autodesk|
|provider|bitbucket|
|provider|bitly|
|provider|box|
|provider|dailymotion|
|provider|discord|
|provider|disqus|
|provider|dropbox|
|provider|etsy|
|provider|facebook|
|provider|figma|
|provider|github|
|provider|gitlab|
|provider|google|
|provider|linkedin|
|provider|microsoft|
|provider|notion|
|provider|oidc|
|provider|okta|
|provider|paypal|
|provider|paypalSandbox|
|provider|podio|
|provider|salesforce|
|provider|slack|
|provider|spotify|
|provider|stripe|
|provider|tradeshift|
|provider|tradeshiftBox|
|provider|twitch|
|provider|wordpress|
|provider|yahoo|
|provider|yammer|
|provider|yandex|
|provider|zoho|
|provider|zoom|
|provider|mock|

<h3 id="create-oauth2-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|301|Moved Permanently|File|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Create phone token

<a id="opIdaccountCreatePhoneToken"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/tokens/phone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -d '{
    "userId": "string",
    "phone": "string"
  }'
```

`POST /account/tokens/phone`

Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

> Body parameter

```json
{
  "userId": "string",
  "phone": "string"
}
```

<h3 id="create-phone-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the phone number has never been used, a new account is created using the provided userId. Otherwise, if the phone number is already attached to an account, the user ID is ignored.|
|» phone|body|string|true|Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-phone-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project
</aside>

## Update email verification (confirmation)

<a id="opIdaccountUpdateVerification"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/verification \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string"
  }'
```

`PUT /account/verification`

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

> Body parameter

```json
{
  "userId": "string",
  "secret": "string"
}
```

<h3 id="update-email-verification-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID.|
|» secret|body|string|true|Valid verification token.|

> Example responses

> 200 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="update-email-verification-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create email verification

<a id="opIdaccountCreateVerification"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/verification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "url": "string"
  }'
```

`POST /account/verification`

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


> Body parameter

```json
{
  "url": "string"
}
```

<h3 id="create-email-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» url|body|string|true|URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-email-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update phone verification (confirmation)

<a id="opIdaccountUpdatePhoneVerification"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/verification/phone \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string"
  }'
```

`PUT /account/verification/phone`

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

> Body parameter

```json
{
  "userId": "string",
  "secret": "string"
}
```

<h3 id="update-phone-verification-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID.|
|» secret|body|string|true|Valid verification token.|

> Example responses

> 200 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="update-phone-verification-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Create phone verification

<a id="opIdaccountCreatePhoneVerification"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/account/verification/phone \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`POST /account/verification/phone`

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-phone-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

<h1 id="appwrite-avatars">avatars</h1>

The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.

## Get browser icon

<a id="opIdavatarsGetBrowser"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/avatars/browsers/aa \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/browsers/{code}`

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

<h3 id="get-browser-icon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|Browser Code.|
|width|query|integer(int32)|false|Image width. Pass an integer between 0 to 2000. Defaults to 100.|
|height|query|integer(int32)|false|Image height. Pass an integer between 0 to 2000. Defaults to 100.|
|quality|query|integer(int32)|false|Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code|aa|
|code|an|
|code|ch|
|code|ci|
|code|cm|
|code|cr|
|code|ff|
|code|sf|
|code|mf|
|code|ps|
|code|oi|
|code|om|
|code|op|
|code|on|

<h3 id="get-browser-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get credit card icon

<a id="opIdavatarsGetCreditCard"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/avatars/credit-cards/amex \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/credit-cards/{code}`

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


<h3 id="get-credit-card-icon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|Credit Card Code. Possible values: amex, argencard, cabal, cencosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, unionpay, visa, mir, maestro, rupay.|
|width|query|integer(int32)|false|Image width. Pass an integer between 0 to 2000. Defaults to 100.|
|height|query|integer(int32)|false|Image height. Pass an integer between 0 to 2000. Defaults to 100.|
|quality|query|integer(int32)|false|Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code|amex|
|code|argencard|
|code|cabal|
|code|cencosud|
|code|diners|
|code|discover|
|code|elo|
|code|hipercard|
|code|jcb|
|code|mastercard|
|code|naranja|
|code|targeta-shopping|
|code|unionpay|
|code|visa|
|code|mir|
|code|maestro|
|code|rupay|

<h3 id="get-credit-card-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get favicon

<a id="opIdavatarsGetFavicon"></a>

> Code samples

```bash
curl 'https://cloud.appwrite.io/v1/avatars/favicon?url=http%3A%2F%2Fexample.com' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/favicon`

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.

This endpoint does not follow HTTP redirects.

<h3 id="get-favicon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string(url)|true|Website URL which you want to fetch the favicon from.|

<h3 id="get-favicon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get country flag

<a id="opIdavatarsGetFlag"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/avatars/flags/af \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/flags/{code}`

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


<h3 id="get-country-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|Country Code. ISO Alpha-2 country code format.|
|width|query|integer(int32)|false|Image width. Pass an integer between 0 to 2000. Defaults to 100.|
|height|query|integer(int32)|false|Image height. Pass an integer between 0 to 2000. Defaults to 100.|
|quality|query|integer(int32)|false|Image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|code|af|
|code|ao|
|code|al|
|code|ad|
|code|ae|
|code|ar|
|code|am|
|code|ag|
|code|au|
|code|at|
|code|az|
|code|bi|
|code|be|
|code|bj|
|code|bf|
|code|bd|
|code|bg|
|code|bh|
|code|bs|
|code|ba|
|code|by|
|code|bz|
|code|bo|
|code|br|
|code|bb|
|code|bn|
|code|bt|
|code|bw|
|code|cf|
|code|ca|
|code|ch|
|code|cl|
|code|cn|
|code|ci|
|code|cm|
|code|cd|
|code|cg|
|code|co|
|code|km|
|code|cv|
|code|cr|
|code|cu|
|code|cy|
|code|cz|
|code|de|
|code|dj|
|code|dm|
|code|dk|
|code|do|
|code|dz|
|code|ec|
|code|eg|
|code|er|
|code|es|
|code|ee|
|code|et|
|code|fi|
|code|fj|
|code|fr|
|code|fm|
|code|ga|
|code|gb|
|code|ge|
|code|gh|
|code|gn|
|code|gm|
|code|gw|
|code|gq|
|code|gr|
|code|gd|
|code|gt|
|code|gy|
|code|hn|
|code|hr|
|code|ht|
|code|hu|
|code|id|
|code|in|
|code|ie|
|code|ir|
|code|iq|
|code|is|
|code|il|
|code|it|
|code|jm|
|code|jo|
|code|jp|
|code|kz|
|code|ke|
|code|kg|
|code|kh|
|code|ki|
|code|kn|
|code|kr|
|code|kw|
|code|la|
|code|lb|
|code|lr|
|code|ly|
|code|lc|
|code|li|
|code|lk|
|code|ls|
|code|lt|
|code|lu|
|code|lv|
|code|ma|
|code|mc|
|code|md|
|code|mg|
|code|mv|
|code|mx|
|code|mh|
|code|mk|
|code|ml|
|code|mt|
|code|mm|
|code|me|
|code|mn|
|code|mz|
|code|mr|
|code|mu|
|code|mw|
|code|my|
|code|na|
|code|ne|
|code|ng|
|code|ni|
|code|nl|
|code|no|
|code|np|
|code|nr|
|code|nz|
|code|om|
|code|pk|
|code|pa|
|code|pe|
|code|ph|
|code|pw|
|code|pg|
|code|pl|
|code|pf|
|code|kp|
|code|pt|
|code|py|
|code|qa|
|code|ro|
|code|ru|
|code|rw|
|code|sa|
|code|sd|
|code|sn|
|code|sg|
|code|sb|
|code|sl|
|code|sv|
|code|sm|
|code|so|
|code|rs|
|code|ss|
|code|st|
|code|sr|
|code|sk|
|code|si|
|code|se|
|code|sz|
|code|sc|
|code|sy|
|code|td|
|code|tg|
|code|th|
|code|tj|
|code|tm|
|code|tl|
|code|to|
|code|tt|
|code|tn|
|code|tr|
|code|tv|
|code|tz|
|code|ug|
|code|ua|
|code|uy|
|code|us|
|code|uz|
|code|va|
|code|vc|
|code|ve|
|code|vn|
|code|vu|
|code|ws|
|code|ye|
|code|za|
|code|zm|
|code|zw|

<h3 id="get-country-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get image from URL

<a id="opIdavatarsGetImage"></a>

> Code samples

```bash
curl 'https://cloud.appwrite.io/v1/avatars/image?url=http%3A%2F%2Fexample.com' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/image`

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.

This endpoint does not follow HTTP redirects.

<h3 id="get-image-from-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string(url)|true|Image URL which you want to crop.|
|width|query|integer(int32)|false|Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.|
|height|query|integer(int32)|false|Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.|

<h3 id="get-image-from-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get user initials

<a id="opIdavatarsGetInitials"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/avatars/initials \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/initials`

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


<h3 id="get-user-initials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Full Name. When empty, current user name or email will be used. Max length: 128 chars.|
|width|query|integer(int32)|false|Image width. Pass an integer between 0 to 2000. Defaults to 100.|
|height|query|integer(int32)|false|Image height. Pass an integer between 0 to 2000. Defaults to 100.|
|background|query|string|false|Changes background color. By default a random color will be picked and stay will persistent to the given name.|

<h3 id="get-user-initials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get QR code

<a id="opIdavatarsGetQR"></a>

> Code samples

```bash
curl 'https://cloud.appwrite.io/v1/avatars/qr?text=string' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /avatars/qr`

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.


<h3 id="get-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|Plain text to be converted to QR code image.|
|size|query|integer(int32)|false|QR code size. Pass an integer between 1 to 1000. Defaults to 400.|
|margin|query|integer(int32)|false|Margin from edge. Pass an integer between 0 to 10. Defaults to 1.|
|download|query|boolean|false|Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.|

<h3 id="get-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

<h1 id="appwrite-databases">databases</h1>

The Databases service allows you to create structured collections of documents, query and filter lists of documents

## List databases

<a id="opIddatabasesList"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases`

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

<h3 id="list-databases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "databases": ""
}
```

<h3 id="list-databases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Databases List|[databaseList](#schemadatabaselist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create database

<a id="opIddatabasesCreate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "databaseId": "string",
    "name": "string",
    "enabled": true
  }'
```

`POST /databases`

Create a new Database.


> Body parameter

```json
{
  "databaseId": "string",
  "name": "string",
  "enabled": true
}
```

<h3 id="create-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» databaseId|body|string|true|Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Database name. Max length: 128 chars.|
|» enabled|body|boolean|false|Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "name": "My Database",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "enabled": false
}
```

<h3 id="create-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Database|[database](#schemadatabase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get database

<a id="opIddatabasesGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}`

Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.

<h3 id="get-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "name": "My Database",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "enabled": false
}
```

<h3 id="get-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database|[database](#schemadatabase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update database

<a id="opIddatabasesUpdate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true
  }'
```

`PUT /databases/{databaseId}`

Update a database by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true
}
```

<h3 id="update-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|body|body|object|false|none|
|» name|body|string|true|Database name. Max length: 128 chars.|
|» enabled|body|boolean|false|Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "name": "My Database",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "enabled": false
}
```

<h3 id="update-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database|[database](#schemadatabase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete database

<a id="opIddatabasesDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /databases/{databaseId}`

Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.

<h3 id="delete-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|

<h3 id="delete-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List collections

<a id="opIddatabasesListCollections"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}/collections`

Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.

<h3 id="list-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "collections": ""
}
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collections List|[collectionList](#schemacollectionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create collection

<a id="opIddatabasesCreateCollection"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "collectionId": "string",
    "name": "string",
    "permissions": [
      "string"
    ],
    "documentSecurity": true,
    "enabled": true
  }'
```

`POST /databases/{databaseId}/collections`

Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

> Body parameter

```json
{
  "collectionId": "string",
  "name": "string",
  "permissions": [
    "string"
  ],
  "documentSecurity": true,
  "enabled": true
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|body|body|object|false|none|
|» collectionId|body|string|true|Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Collection name. Max length: 128 chars.|
|» permissions|body|[string]|false|An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» documentSecurity|body|boolean|false|Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» enabled|body|boolean|false|Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "databaseId": "5e5ea5c16897e",
  "name": "My Collection",
  "enabled": false,
  "documentSecurity": true,
  "attributes": {},
  "indexes": {}
}
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Collection|[collection](#schemacollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get collection

<a id="opIddatabasesGetCollection"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}`

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

<h3 id="get-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "databaseId": "5e5ea5c16897e",
  "name": "My Collection",
  "enabled": false,
  "documentSecurity": true,
  "attributes": {},
  "indexes": {}
}
```

<h3 id="get-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection|[collection](#schemacollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update collection

<a id="opIddatabasesUpdateCollection"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "permissions": [
      "string"
    ],
    "documentSecurity": true,
    "enabled": true
  }'
```

`PUT /databases/{databaseId}/collections/{collectionId}`

Update a collection by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "permissions": [
    "string"
  ],
  "documentSecurity": true,
  "enabled": true
}
```

<h3 id="update-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|body|body|object|false|none|
|» name|body|string|true|Collection name. Max length: 128 chars.|
|» permissions|body|[string]|false|An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» documentSecurity|body|boolean|false|Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» enabled|body|boolean|false|Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "databaseId": "5e5ea5c16897e",
  "name": "My Collection",
  "enabled": false,
  "documentSecurity": true,
  "attributes": {},
  "indexes": {}
}
```

<h3 id="update-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection|[collection](#schemacollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete collection

<a id="opIddatabasesDeleteCollection"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /databases/{databaseId}/collections/{collectionId}`

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List attributes

<a id="opIddatabasesListAttributes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}/attributes`

List attributes in the collection.

<h3 id="list-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "attributes": ""
}
```

<h3 id="list-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Attributes List|[attributeList](#schemaattributelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create boolean attribute

<a id="opIddatabasesCreateBooleanAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/boolean \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "default": true,
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/boolean`

Create a boolean attribute.


> Body parameter

```json
{
  "key": "string",
  "required": true,
  "default": true,
  "array": true
}
```

<h3 id="create-boolean-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|boolean|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "isEnabled",
  "type": "boolean",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "default": false
}
```

<h3 id="create-boolean-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeBoolean|[attributeBoolean](#schemaattributeboolean)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update boolean attribute

<a id="opIddatabasesUpdateBooleanAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/boolean/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "default": true,
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}`

Update a boolean attribute. Changing the `default` value will not update already existing documents.

> Body parameter

```json
{
  "required": true,
  "default": true,
  "newKey": "string"
}
```

<h3 id="update-boolean-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» default|body|boolean|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "isEnabled",
  "type": "boolean",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "default": false
}
```

<h3 id="update-boolean-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeBoolean|[attributeBoolean](#schemaattributeboolean)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create datetime attribute

<a id="opIddatabasesCreateDatetimeAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/datetime \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "default": "string",
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/datetime`

Create a date time attribute according to the ISO 8601 standard.

> Body parameter

```json
{
  "key": "string",
  "required": true,
  "default": "string",
  "array": true
}
```

<h3 id="create-datetime-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|false|Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "birthDay",
  "type": "datetime",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "datetime",
  "default": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-datetime-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeDatetime|[attributeDatetime](#schemaattributedatetime)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update dateTime attribute

<a id="opIddatabasesUpdateDatetimeAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/datetime/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "default": "string",
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}`

Update a date time attribute. Changing the `default` value will not update already existing documents.

> Body parameter

```json
{
  "required": true,
  "default": "string",
  "newKey": "string"
}
```

<h3 id="update-datetime-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "birthDay",
  "type": "datetime",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "datetime",
  "default": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-datetime-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeDatetime|[attributeDatetime](#schemaattributedatetime)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create email attribute

<a id="opIddatabasesCreateEmailAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/email \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "default": "string",
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/email`

Create an email attribute.


> Body parameter

```json
{
  "key": "string",
  "required": true,
  "default": "string",
  "array": true
}
```

<h3 id="create-email-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "userEmail",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "email",
  "default": "default@example.com"
}
```

<h3 id="create-email-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeEmail|[attributeEmail](#schemaattributeemail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update email attribute

<a id="opIddatabasesUpdateEmailAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/email/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "default": "string",
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/email/{key}`

Update an email attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "required": true,
  "default": "string",
  "newKey": "string"
}
```

<h3 id="update-email-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "userEmail",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "email",
  "default": "default@example.com"
}
```

<h3 id="update-email-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeEmail|[attributeEmail](#schemaattributeemail)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create enum attribute

<a id="opIddatabasesCreateEnumAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/enum \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "elements": [
      "string"
    ],
    "required": true,
    "default": "string",
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/enum`

Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. 


> Body parameter

```json
{
  "key": "string",
  "elements": [
    "string"
  ],
  "required": true,
  "default": "string",
  "array": true
}
```

<h3 id="create-enum-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» elements|body|[string]|true|Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "status",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "elements": "element",
  "format": "enum",
  "default": "element"
}
```

<h3 id="create-enum-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeEnum|[attributeEnum](#schemaattributeenum)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update enum attribute

<a id="opIddatabasesUpdateEnumAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/enum/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "elements": [
      "string"
    ],
    "required": true,
    "default": "string",
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}`

Update an enum attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "elements": [
    "string"
  ],
  "required": true,
  "default": "string",
  "newKey": "string"
}
```

<h3 id="update-enum-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» elements|body|[string]|true|Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "status",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "elements": "element",
  "format": "enum",
  "default": "element"
}
```

<h3 id="update-enum-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeEnum|[attributeEnum](#schemaattributeenum)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create float attribute

<a id="opIddatabasesCreateFloatAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/float \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "min": 0,
    "max": 0,
    "default": 0,
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/float`

Create a float attribute. Optionally, minimum and maximum values can be provided.


> Body parameter

```json
{
  "key": "string",
  "required": true,
  "min": 0,
  "max": 0,
  "default": 0,
  "array": true
}
```

<h3 id="create-float-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» min|body|number|false|Minimum value to enforce on new documents|
|» max|body|number|false|Maximum value to enforce on new documents|
|» default|body|number|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "percentageCompleted",
  "type": "double",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "min": 1.5,
  "max": 10.5,
  "default": 2.5
}
```

<h3 id="create-float-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeFloat|[attributeFloat](#schemaattributefloat)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update float attribute

<a id="opIddatabasesUpdateFloatAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/float/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "min": 0,
    "max": 0,
    "default": 0,
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/float/{key}`

Update a float attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "required": true,
  "min": 0,
  "max": 0,
  "default": 0,
  "newKey": "string"
}
```

<h3 id="update-float-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» min|body|number|false|Minimum value to enforce on new documents|
|» max|body|number|false|Maximum value to enforce on new documents|
|» default|body|number|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "percentageCompleted",
  "type": "double",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "min": 1.5,
  "max": 10.5,
  "default": 2.5
}
```

<h3 id="update-float-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeFloat|[attributeFloat](#schemaattributefloat)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create integer attribute

<a id="opIddatabasesCreateIntegerAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/integer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "min": 0,
    "max": 0,
    "default": 0,
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/integer`

Create an integer attribute. Optionally, minimum and maximum values can be provided.


> Body parameter

```json
{
  "key": "string",
  "required": true,
  "min": 0,
  "max": 0,
  "default": 0,
  "array": true
}
```

<h3 id="create-integer-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» min|body|integer|false|Minimum value to enforce on new documents|
|» max|body|integer|false|Maximum value to enforce on new documents|
|» default|body|integer|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "count",
  "type": "integer",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "min": 1,
  "max": 10,
  "default": 10
}
```

<h3 id="create-integer-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeInteger|[attributeInteger](#schemaattributeinteger)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update integer attribute

<a id="opIddatabasesUpdateIntegerAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/integer/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "min": 0,
    "max": 0,
    "default": 0,
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}`

Update an integer attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "required": true,
  "min": 0,
  "max": 0,
  "default": 0,
  "newKey": "string"
}
```

<h3 id="update-integer-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» min|body|integer|false|Minimum value to enforce on new documents|
|» max|body|integer|false|Maximum value to enforce on new documents|
|» default|body|integer|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "count",
  "type": "integer",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "min": 1,
  "max": 10,
  "default": 10
}
```

<h3 id="update-integer-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeInteger|[attributeInteger](#schemaattributeinteger)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create IP address attribute

<a id="opIddatabasesCreateIpAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/ip \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "default": "string",
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/ip`

Create IP address attribute.


> Body parameter

```json
{
  "key": "string",
  "required": true,
  "default": "string",
  "array": true
}
```

<h3 id="create-ip-address-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "ipAddress",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "ip",
  "default": "192.0.2.0"
}
```

<h3 id="create-ip-address-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeIP|[attributeIp](#schemaattributeip)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update IP address attribute

<a id="opIddatabasesUpdateIpAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/ip/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "default": "string",
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}`

Update an ip attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "required": true,
  "default": "string",
  "newKey": "string"
}
```

<h3 id="update-ip-address-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "ipAddress",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "ip",
  "default": "192.0.2.0"
}
```

<h3 id="update-ip-address-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeIP|[attributeIp](#schemaattributeip)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create relationship attribute

<a id="opIddatabasesCreateRelationshipAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/relationship \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "relatedCollectionId": "string",
    "type": "oneToOne",
    "twoWay": true,
    "key": "string",
    "twoWayKey": "string",
    "onDelete": "cascade"
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/relationship`

Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).


> Body parameter

```json
{
  "relatedCollectionId": "string",
  "type": "oneToOne",
  "twoWay": true,
  "key": "string",
  "twoWayKey": "string",
  "onDelete": "cascade"
}
```

<h3 id="create-relationship-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» relatedCollectionId|body|string|true|Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|» type|body|string|true|Relation type|
|» twoWay|body|boolean|false|Is Two Way?|
|» key|body|string|false|Attribute Key.|
|» twoWayKey|body|string|false|Two Way Attribute Key.|
|» onDelete|body|string|false|Constraints option|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|oneToOne|
|» type|manyToOne|
|» type|manyToMany|
|» type|oneToMany|
|» onDelete|cascade|
|» onDelete|restrict|
|» onDelete|setNull|

> Example responses

> 202 Response

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "relatedCollection": "collection",
  "relationType": "oneToOne|oneToMany|manyToOne|manyToMany",
  "twoWay": false,
  "twoWayKey": "string",
  "onDelete": "restrict|cascade|setNull",
  "side": "parent|child"
}
```

<h3 id="create-relationship-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeRelationship|[attributeRelationship](#schemaattributerelationship)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create string attribute

<a id="opIddatabasesCreateStringAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "size": 0,
    "required": true,
    "default": "string",
    "array": true,
    "encrypt": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/string`

Create a string attribute.


> Body parameter

```json
{
  "key": "string",
  "size": 0,
  "required": true,
  "default": "string",
  "array": true,
  "encrypt": true
}
```

<h3 id="create-string-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» size|body|integer|true|Attribute size for text attributes, in number of characters.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|
|» encrypt|body|boolean|false|Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.|

> Example responses

> 202 Response

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "size": 128,
  "default": "default",
  "encrypt": false
}
```

<h3 id="create-string-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeString|[attributeString](#schemaattributestring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update string attribute

<a id="opIddatabasesUpdateStringAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "default": "string",
    "size": 0,
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/string/{key}`

Update a string attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "required": true,
  "default": "string",
  "size": 0,
  "newKey": "string"
}
```

<h3 id="update-string-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» size|body|integer|false|Maximum size of the string attribute.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "size": 128,
  "default": "default",
  "encrypt": false
}
```

<h3 id="update-string-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeString|[attributeString](#schemaattributestring)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create URL attribute

<a id="opIddatabasesCreateUrlAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/url \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "required": true,
    "default": "string",
    "array": true
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/attributes/url`

Create a URL attribute.


> Body parameter

```json
{
  "key": "string",
  "required": true,
  "default": "string",
  "array": true
}
```

<h3 id="create-url-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Attribute Key.|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|false|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» array|body|boolean|false|Is attribute an array?|

> Example responses

> 202 Response

```json
{
  "key": "githubUrl",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "url",
  "default": "http://example.com"
}
```

<h3 id="create-url-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|AttributeURL|[attributeUrl](#schemaattributeurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update URL attribute

<a id="opIddatabasesUpdateUrlAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/url/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "required": true,
    "default": "string",
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/url/{key}`

Update an url attribute. Changing the `default` value will not update already existing documents.


> Body parameter

```json
{
  "required": true,
  "default": "string",
  "newKey": "string"
}
```

<h3 id="update-url-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» required|body|boolean|true|Is attribute required?|
|» default|body|string|true|Default value for attribute when not provided. Cannot be set when attribute is required.|
|» newKey|body|string|false|New attribute key.|

> Example responses

> 200 Response

```json
{
  "key": "githubUrl",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "url",
  "default": "http://example.com"
}
```

<h3 id="update-url-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeURL|[attributeUrl](#schemaattributeurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get attribute

<a id="opIddatabasesGetAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

Get attribute by ID.

<h3 id="get-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|

> Example responses

> 200 Response

```json
{
  "key": "isEnabled",
  "type": "boolean",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "default": false
}
```

<h3 id="get-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeBoolean, or AttributeInteger, or AttributeFloat, or AttributeEmail, or AttributeEnum, or AttributeURL, or AttributeIP, or AttributeDatetime, or AttributeRelationship, or AttributeString|Inline|

<h3 id="get-attribute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[attributeBoolean](#schemaattributeboolean)|false|none|AttributeBoolean|
|*oneOf*|[attributeInteger](#schemaattributeinteger)|false|none|AttributeInteger|
|*oneOf*|[attributeFloat](#schemaattributefloat)|false|none|AttributeFloat|
|*oneOf*|[attributeEmail](#schemaattributeemail)|false|none|AttributeEmail|
|*oneOf*|[attributeEnum](#schemaattributeenum)|false|none|AttributeEnum|
|*oneOf*|[attributeUrl](#schemaattributeurl)|false|none|AttributeURL|
|*oneOf*|[attributeIp](#schemaattributeip)|false|none|AttributeIP|
|*oneOf*|[attributeDatetime](#schemaattributedatetime)|false|none|AttributeDatetime|
|*oneOf*|[attributeRelationship](#schemaattributerelationship)|false|none|AttributeRelationship|
|*oneOf*|[attributeString](#schemaattributestring)|false|none|AttributeString|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete attribute

<a id="opIddatabasesDeleteAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

Deletes an attribute.

<h3 id="delete-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|

<h3 id="delete-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update relationship attribute

<a id="opIddatabasesUpdateRelationshipAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/attributes/string/relationship \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "onDelete": "cascade",
    "newKey": "string"
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship`

Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).


> Body parameter

```json
{
  "onDelete": "cascade",
  "newKey": "string"
}
```

<h3 id="update-relationship-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Attribute Key.|
|body|body|object|false|none|
|» onDelete|body|string|false|Constraints option|
|» newKey|body|string|false|New attribute key.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» onDelete|cascade|
|» onDelete|restrict|
|» onDelete|setNull|

> Example responses

> 200 Response

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "relatedCollection": "collection",
  "relationType": "oneToOne|oneToMany|manyToOne|manyToMany",
  "twoWay": false,
  "twoWayKey": "string",
  "onDelete": "restrict|cascade|setNull",
  "side": "parent|child"
}
```

<h3 id="update-relationship-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AttributeRelationship|[attributeRelationship](#schemaattributerelationship)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List documents

<a id="opIddatabasesListDocuments"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}/documents`

Get a list of all the user's documents in a given collection. You can use the query params to filter your results.

<h3 id="list-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "documents": ""
}
```

<h3 id="list-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Documents List|[documentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Upsert documents

<a id="opIddatabasesUpsertDocuments"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "documents": [
      {}
    ]
  }'
```

`PUT /databases/{databaseId}/collections/{collectionId}/documents`

Create or update Documents. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.


> Body parameter

```json
{
  "documents": [
    {}
  ]
}
```

<h3 id="upsert-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|body|body|object|false|none|
|» documents|body|[object]|true|Array of document data as JSON objects. May contain partial documents.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "documents": ""
}
```

<h3 id="upsert-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Documents List|[documentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create document

<a id="opIddatabasesCreateDocument"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "documentId": "string",
    "data": {},
    "permissions": [
      "string"
    ],
    "documents": [
      {}
    ]
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/documents`

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

> Body parameter

```json
{
  "documentId": "string",
  "data": {},
  "permissions": [
    "string"
  ],
  "documents": [
    {}
  ]
}
```

<h3 id="create-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.|
|body|body|object|false|none|
|» documentId|body|string|false|Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» data|body|object|false|Document data as JSON object.|
|» permissions|body|[string]|false|An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» documents|body|[object]|false|Array of documents data as JSON objects.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

<h3 id="create-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Document|[document](#schemadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Delete documents

<a id="opIddatabasesDeleteDocuments"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "queries": [
      "string"
    ]
  }'
```

`DELETE /databases/{databaseId}/collections/{collectionId}/documents`

Bulk delete documents using queries, if no queries are passed then all documents are deleted.

> Body parameter

```json
{
  "queries": [
    "string"
  ]
}
```

<h3 id="delete-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» queries|body|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "documents": ""
}
```

<h3 id="delete-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Documents List|[documentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update documents

<a id="opIddatabasesUpdateDocuments"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "data": {},
    "queries": [
      "string"
    ]
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/documents`

Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.

> Body parameter

```json
{
  "data": {},
  "queries": [
    "string"
  ]
}
```

<h3 id="update-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|body|body|object|false|none|
|» data|body|object|false|Document data as JSON object. Include only attribute and value pairs to be updated.|
|» queries|body|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "documents": ""
}
```

<h3 id="update-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Documents List|[documentList](#schemadocumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get document

<a id="opIddatabasesGetDocument"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

<h3 id="get-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|documentId|path|string|true|Document ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

<h3 id="get-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Upsert document

<a id="opIddatabasesUpsertDocument"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "data": {},
    "permissions": [
      "string"
    ]
  }'
```

`PUT /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

Create or update a Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

> Body parameter

```json
{
  "data": {},
  "permissions": [
    "string"
  ]
}
```

<h3 id="upsert-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|documentId|path|string|true|Document ID.|
|body|body|object|false|none|
|» data|body|object|true|Document data as JSON object. Include all required attributes of the document to be created or updated.|
|» permissions|body|[string]|false|An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

<h3 id="upsert-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Delete document

<a id="opIddatabasesDeleteDocument"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

Delete a document by its unique ID.

<h3 id="delete-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|documentId|path|string|true|Document ID.|

<h3 id="delete-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Update document

<a id="opIddatabasesUpdateDocument"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "data": {},
    "permissions": [
      "string"
    ]
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

> Body parameter

```json
{
  "data": {},
  "permissions": [
    "string"
  ]
}
```

<h3 id="update-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|documentId|path|string|true|Document ID.|
|body|body|object|false|none|
|» data|body|object|false|Document data as JSON object. Include only attribute and value pairs to be updated.|
|» permissions|body|[string]|false|An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

<h3 id="update-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Decrement document attribute

<a id="opIddatabasesDecrementDocumentAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents/string/string/decrement \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "value": 0,
    "min": 0
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement`

Decrement a specific attribute of a document by a given value.

> Body parameter

```json
{
  "value": 0,
  "min": 0
}
```

<h3 id="decrement-document-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|documentId|path|string|true|Document ID.|
|attribute|path|string|true|Attribute key.|
|body|body|object|false|none|
|» value|body|number|false|Value to decrement the attribute by. The value must be a number.|
|» min|body|number|false|Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

<h3 id="decrement-document-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key & Session & JWT
</aside>

## Increment document attribute

<a id="opIddatabasesIncrementDocumentAttribute"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/documents/string/string/increment \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "value": 0,
    "max": 0
  }'
```

`PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment`

Increment a specific attribute of a document by a given value.

> Body parameter

```json
{
  "value": 0,
  "max": 0
}
```

<h3 id="increment-document-attribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID.|
|documentId|path|string|true|Document ID.|
|attribute|path|string|true|Attribute key.|
|body|body|object|false|none|
|» value|body|number|false|Value to increment the attribute by. The value must be a number.|
|» max|body|number|false|Maximum value for the attribute. If the current value is greater than this value, an error will be thrown.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

<h3 id="increment-document-attribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key & Session & JWT
</aside>

## List indexes

<a id="opIddatabasesListIndexes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/indexes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}/indexes`

List indexes in the collection.

<h3 id="list-indexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "indexes": ""
}
```

<h3 id="list-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indexes List|[indexList](#schemaindexlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create index

<a id="opIddatabasesCreateIndex"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "type": "key",
    "attributes": [
      "string"
    ],
    "orders": [
      "string"
    ],
    "lengths": [
      0
    ]
  }'
```

`POST /databases/{databaseId}/collections/{collectionId}/indexes`

Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
Attributes can be `key`, `fulltext`, and `unique`.

> Body parameter

```json
{
  "key": "string",
  "type": "key",
  "attributes": [
    "string"
  ],
  "orders": [
    "string"
  ],
  "lengths": [
    0
  ]
}
```

<h3 id="create-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|body|body|object|false|none|
|» key|body|string|true|Index Key.|
|» type|body|string|true|Index type.|
|» attributes|body|[string]|true|Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.|
|» orders|body|[string]|false|Array of index orders. Maximum of 100 orders are allowed.|
|» lengths|body|[integer]|false|Length of index. Maximum of 100|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|key|
|» type|fulltext|
|» type|unique|

> Example responses

> 202 Response

```json
{
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": [],
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Index|[index](#schemaindex)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get index

<a id="opIddatabasesGetIndex"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/indexes/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

Get index by ID.

<h3 id="get-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Index Key.|

> Example responses

> 200 Response

```json
{
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": [],
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Index|[index](#schemaindex)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete index

<a id="opIddatabasesDeleteIndex"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/databases/string/collections/string/indexes/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

Delete an index.

<h3 id="delete-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|databaseId|path|string|true|Database ID.|
|collectionId|path|string|true|Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).|
|key|path|string|true|Index Key.|

<h3 id="delete-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

<h1 id="appwrite-locale">locale</h1>

The Locale service allows you to customize your app based on your users' location.

## Get user locale

<a id="opIdlocaleGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale`

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

> Example responses

> 200 Response

```json
{
  "ip": "127.0.0.1",
  "countryCode": "US",
  "country": "United States",
  "continentCode": "NA",
  "continent": "North America",
  "eu": false,
  "currency": "USD"
}
```

<h3 id="get-user-locale-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locale|[locale](#schemalocale)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List locale codes

<a id="opIdlocaleListCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/codes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/codes`

List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

> Example responses

> 200 Response

```json
{
  "total": 5,
  "localeCodes": ""
}
```

<h3 id="list-locale-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Locale codes list|[localeCodeList](#schemalocalecodelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List continents

<a id="opIdlocaleListContinents"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/continents \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/continents`

List of all continents. You can use the locale header to get the data in a supported language.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "continents": ""
}
```

<h3 id="list-continents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Continents List|[continentList](#schemacontinentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List countries

<a id="opIdlocaleListCountries"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/countries \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/countries`

List of all countries. You can use the locale header to get the data in a supported language.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "countries": ""
}
```

<h3 id="list-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Countries List|[countryList](#schemacountrylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List EU countries

<a id="opIdlocaleListCountriesEU"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/countries/eu \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/countries/eu`

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "countries": ""
}
```

<h3 id="list-eu-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Countries List|[countryList](#schemacountrylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List countries phone codes

<a id="opIdlocaleListCountriesPhones"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/countries/phones \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/countries/phones`

List of all countries phone codes. You can use the locale header to get the data in a supported language.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "phones": ""
}
```

<h3 id="list-countries-phone-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Phones List|[phoneList](#schemaphonelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List currencies

<a id="opIdlocaleListCurrencies"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/currencies \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/currencies`

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "currencies": ""
}
```

<h3 id="list-currencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Currencies List|[currencyList](#schemacurrencylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List languages

<a id="opIdlocaleListLanguages"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/locale/languages \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /locale/languages`

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "languages": ""
}
```

<h3 id="list-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Languages List|[languageList](#schemalanguagelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

<h1 id="appwrite-health">health</h1>

The Health service allows you to both validate and monitor your Appwrite server's health.

## Get HTTP

<a id="opIdhealthGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health`

Check the Appwrite HTTP server is up and responsive.

> Example responses

> 200 Response

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

<h3 id="get-http-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status|[healthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get antivirus

<a id="opIdhealthGetAntivirus"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/anti-virus \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/anti-virus`

Check the Appwrite Antivirus server is up and connection is successful.

> Example responses

> 200 Response

```json
{
  "version": "1.0.0",
  "status": "online"
}
```

<h3 id="get-antivirus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Antivirus|[healthAntivirus](#schemahealthantivirus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get cache

<a id="opIdhealthGetCache"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/cache \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/cache`

Check the Appwrite in-memory cache servers are up and connection is successful.

> Example responses

> 200 Response

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

<h3 id="get-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status|[healthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get the SSL certificate for a domain

<a id="opIdhealthGetCertificate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/certificate \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/certificate`

Get the SSL certificate for a domain

<h3 id="get-the-ssl-certificate-for-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string|false|string|

> Example responses

> 200 Response

```json
{
  "name": "/CN=www.google.com",
  "subjectSN": "",
  "issuerOrganisation": "",
  "validFrom": "1704200998",
  "validTo": "1711458597",
  "signatureTypeSN": "RSA-SHA256"
}
```

<h3 id="get-the-ssl-certificate-for-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Certificate|[healthCertificate](#schemahealthcertificate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get DB

<a id="opIdhealthGetDB"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/db \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/db`

Check the Appwrite database servers are up and connection is successful.

> Example responses

> 200 Response

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

<h3 id="get-db-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status|[healthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get pubsub

<a id="opIdhealthGetPubSub"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/pubsub \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/pubsub`

Check the Appwrite pub-sub servers are up and connection is successful.

> Example responses

> 200 Response

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

<h3 id="get-pubsub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status|[healthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get builds queue

<a id="opIdhealthGetQueueBuilds"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/builds \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/builds`

Get the number of builds that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-builds-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-builds-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get certificates queue

<a id="opIdhealthGetQueueCertificates"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/certificates \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/certificates`

Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.

<h3 id="get-certificates-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-certificates-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get databases queue

<a id="opIdhealthGetQueueDatabases"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/databases \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/databases`

Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-databases-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Queue name for which to check the queue size|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-databases-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get deletes queue

<a id="opIdhealthGetQueueDeletes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/deletes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/deletes`

Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-deletes-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-deletes-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get number of failed queue jobs

<a id="opIdhealthGetFailedJobs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/failed/v1-database \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/failed/{name}`

Returns the amount of failed jobs in a given queue.


<h3 id="get-number-of-failed-queue-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the queue|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|name|v1-database|
|name|v1-deletes|
|name|v1-audits|
|name|v1-mails|
|name|v1-functions|
|name|v1-stats-resources|
|name|v1-stats-usage|
|name|v1-webhooks|
|name|v1-certificates|
|name|v1-builds|
|name|v1-messaging|
|name|v1-migrations|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-number-of-failed-queue-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get functions queue

<a id="opIdhealthGetQueueFunctions"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/functions \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/functions`

Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-functions-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-functions-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get logs queue

<a id="opIdhealthGetQueueLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/logs`

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-logs-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-logs-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get mails queue

<a id="opIdhealthGetQueueMails"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/mails \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/mails`

Get the number of mails that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-mails-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-mails-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get messaging queue

<a id="opIdhealthGetQueueMessaging"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/messaging \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/messaging`

Get the number of messages that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-messaging-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-messaging-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get migrations queue

<a id="opIdhealthGetQueueMigrations"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/migrations \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/migrations`

Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-migrations-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-migrations-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get stats resources queue

<a id="opIdhealthGetQueueStatsResources"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/stats-resources \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/stats-resources`

Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.

<h3 id="get-stats-resources-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-stats-resources-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get stats usage queue

<a id="opIdhealthGetQueueUsage"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/stats-usage \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/stats-usage`

Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-stats-usage-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-stats-usage-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get webhooks queue

<a id="opIdhealthGetQueueWebhooks"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/queue/webhooks \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/queue/webhooks`

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

<h3 id="get-webhooks-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threshold|query|integer(int32)|false|Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.|

> Example responses

> 200 Response

```json
{
  "size": 8
}
```

<h3 id="get-webhooks-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Queue|[healthQueue](#schemahealthqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get storage

<a id="opIdhealthGetStorage"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/storage \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/storage`

Check the Appwrite storage device is up and connection is successful.

> Example responses

> 200 Response

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

<h3 id="get-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status|[healthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get local storage

<a id="opIdhealthGetStorageLocal"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/storage/local \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/storage/local`

Check the Appwrite local storage device is up and connection is successful.

> Example responses

> 200 Response

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

<h3 id="get-local-storage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Status|[healthStatus](#schemahealthstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get time

<a id="opIdhealthGetTime"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/health/time \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /health/time`

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

> Example responses

> 200 Response

```json
{
  "remoteTime": 1639490751,
  "localTime": 1639490844,
  "diff": 93
}
```

<h3 id="get-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Health Time|[healthTime](#schemahealthtime)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

<h1 id="appwrite-storage">storage</h1>

The Storage service allows you to manage your project files.

## List buckets

<a id="opIdstorageListBuckets"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /storage/buckets`

Get a list of all the storage buckets. You can use the query params to filter your results.

<h3 id="list-buckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "buckets": ""
}
```

<h3 id="list-buckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Buckets List|[bucketList](#schemabucketlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create bucket

<a id="opIdstorageCreateBucket"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "bucketId": "string",
    "name": "string",
    "permissions": [
      "string"
    ],
    "fileSecurity": true,
    "enabled": true,
    "maximumFileSize": 0,
    "allowedFileExtensions": [
      "string"
    ],
    "compression": "none",
    "encryption": true,
    "antivirus": true
  }'
```

`POST /storage/buckets`

Create a new storage bucket.

> Body parameter

```json
{
  "bucketId": "string",
  "name": "string",
  "permissions": [
    "string"
  ],
  "fileSecurity": true,
  "enabled": true,
  "maximumFileSize": 0,
  "allowedFileExtensions": [
    "string"
  ],
  "compression": "none",
  "encryption": true,
  "antivirus": true
}
```

<h3 id="create-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» bucketId|body|string|true|Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Bucket name|
|» permissions|body|[string]|false|An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» fileSecurity|body|boolean|false|Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» enabled|body|boolean|false|Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.|
|» maximumFileSize|body|integer|false|Maximum file size allowed in bytes. Maximum allowed value is 30MB.|
|» allowedFileExtensions|body|[string]|false|Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.|
|» compression|body|string|false|Compression algorithm choosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled|
|» encryption|body|boolean|false|Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled|
|» antivirus|body|boolean|false|Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» compression|none|
|» compression|gzip|
|» compression|zstd|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "fileSecurity": true,
  "name": "Documents",
  "enabled": false,
  "maximumFileSize": 100,
  "allowedFileExtensions": [
    "jpg",
    "png"
  ],
  "compression": "gzip",
  "encryption": false,
  "antivirus": false
}
```

<h3 id="create-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Bucket|[bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get bucket

<a id="opIdstorageGetBucket"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /storage/buckets/{bucketId}`

Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.

<h3 id="get-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Bucket unique ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "fileSecurity": true,
  "name": "Documents",
  "enabled": false,
  "maximumFileSize": 100,
  "allowedFileExtensions": [
    "jpg",
    "png"
  ],
  "compression": "gzip",
  "encryption": false,
  "antivirus": false
}
```

<h3 id="get-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bucket|[bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update bucket

<a id="opIdstorageUpdateBucket"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "permissions": [
      "string"
    ],
    "fileSecurity": true,
    "enabled": true,
    "maximumFileSize": 0,
    "allowedFileExtensions": [
      "string"
    ],
    "compression": "none",
    "encryption": true,
    "antivirus": true
  }'
```

`PUT /storage/buckets/{bucketId}`

Update a storage bucket by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "permissions": [
    "string"
  ],
  "fileSecurity": true,
  "enabled": true,
  "maximumFileSize": 0,
  "allowedFileExtensions": [
    "string"
  ],
  "compression": "none",
  "encryption": true,
  "antivirus": true
}
```

<h3 id="update-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Bucket unique ID.|
|body|body|object|false|none|
|» name|body|string|true|Bucket name|
|» permissions|body|[string]|false|An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» fileSecurity|body|boolean|false|Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|» enabled|body|boolean|false|Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.|
|» maximumFileSize|body|integer|false|Maximum file size allowed in bytes. Maximum allowed value is 30MB.|
|» allowedFileExtensions|body|[string]|false|Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.|
|» compression|body|string|false|Compression algorithm choosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled|
|» encryption|body|boolean|false|Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled|
|» antivirus|body|boolean|false|Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» compression|none|
|» compression|gzip|
|» compression|zstd|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "fileSecurity": true,
  "name": "Documents",
  "enabled": false,
  "maximumFileSize": 100,
  "allowedFileExtensions": [
    "jpg",
    "png"
  ],
  "compression": "gzip",
  "encryption": false,
  "antivirus": false
}
```

<h3 id="update-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bucket|[bucket](#schemabucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete bucket

<a id="opIdstorageDeleteBucket"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /storage/buckets/{bucketId}`

Delete a storage bucket by its unique ID.

<h3 id="delete-bucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Bucket unique ID.|

<h3 id="delete-bucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List files

<a id="opIdstorageListFiles"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /storage/buckets/{bucketId}/files`

Get a list of all the user files. You can use the query params to filter your results.

<h3 id="list-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "files": ""
}
```

<h3 id="list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Files List|[fileList](#schemafilelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Create file

<a id="opIdstorageCreateFile"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -F 'fileId=string' \
  -F 'file=string' \
  -F 'permissions=["string"]'
```

`POST /storage/buckets/{bucketId}/files`

Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.

Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.

When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.

If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.


> Body parameter

```yaml
fileId: string
file: string
permissions:
  - string
```

<h3 id="create-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|body|body|object|false|none|
|» fileId|body|string|true|File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» file|body|string|true|Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file).|
|» permissions|body|[string]|false|An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "bucketId": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "name": "Pink.png",
  "signature": "5d529fd02b544198ae075bd57c1762bb",
  "mimeType": "image/png",
  "sizeOriginal": 17890,
  "chunksTotal": 17890,
  "chunksUploaded": 17890
}
```

<h3 id="create-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|File|[file](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get file

<a id="opIdstorageGetFile"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /storage/buckets/{bucketId}/files/{fileId}`

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

<h3 id="get-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "bucketId": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "name": "Pink.png",
  "signature": "5d529fd02b544198ae075bd57c1762bb",
  "mimeType": "image/png",
  "sizeOriginal": 17890,
  "chunksTotal": 17890,
  "chunksUploaded": 17890
}
```

<h3 id="get-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|[file](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Update file

<a id="opIdstorageUpdateFile"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "name": "string",
    "permissions": [
      "string"
    ]
  }'
```

`PUT /storage/buckets/{bucketId}/files/{fileId}`

Update a file by its unique ID. Only users with write permissions have access to update this resource.

> Body parameter

```json
{
  "name": "string",
  "permissions": [
    "string"
  ]
}
```

<h3 id="update-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File unique ID.|
|body|body|object|false|none|
|» name|body|string|false|Name of the file|
|» permissions|body|[string]|false|An array of permission string. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "bucketId": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "name": "Pink.png",
  "signature": "5d529fd02b544198ae075bd57c1762bb",
  "mimeType": "image/png",
  "sizeOriginal": 17890,
  "chunksTotal": 17890,
  "chunksUploaded": 17890
}
```

<h3 id="update-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|[file](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Delete file

<a id="opIdstorageDeleteFile"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /storage/buckets/{bucketId}/files/{fileId}`

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

<h3 id="delete-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File ID.|

<h3 id="delete-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get file for download

<a id="opIdstorageGetFileDownload"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files/string/download \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /storage/buckets/{bucketId}/files/{fileId}/download`

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

<h3 id="get-file-for-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File ID.|
|token|query|string|false|File token for accessing this file.|

<h3 id="get-file-for-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get file preview

<a id="opIdstorageGetFilePreview"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files/string/preview \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /storage/buckets/{bucketId}/files/{fileId}/preview`

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.

<h3 id="get-file-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File ID|
|width|query|integer(int32)|false|Resize preview image width, Pass an integer between 0 to 4000.|
|height|query|integer(int32)|false|Resize preview image height, Pass an integer between 0 to 4000.|
|gravity|query|string|false|Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right|
|quality|query|integer(int32)|false|Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality.|
|borderWidth|query|integer(int32)|false|Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.|
|borderColor|query|string|false|Preview image border color. Use a valid HEX color, no # is needed for prefix.|
|borderRadius|query|integer(int32)|false|Preview image border radius in pixels. Pass an integer between 0 to 4000.|
|opacity|query|number(float)|false|Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.|
|rotation|query|integer(int32)|false|Preview image rotation in degrees. Pass an integer between -360 and 360.|
|background|query|string|false|Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.|
|output|query|string|false|Output format type (jpeg, jpg, png, gif and webp).|
|token|query|string|false|File token for accessing this file.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|gravity|center|
|gravity|top-left|
|gravity|top|
|gravity|top-right|
|gravity|left|
|gravity|right|
|gravity|bottom-left|
|gravity|bottom|
|gravity|bottom-right|
|output|jpg|
|output|jpeg|
|output|png|
|output|webp|
|output|heic|
|output|avif|
|output|gif|

<h3 id="get-file-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get file for view

<a id="opIdstorageGetFileView"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/storage/buckets/string/files/string/view \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /storage/buckets/{bucketId}/files/{fileId}/view`

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

<h3 id="get-file-for-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File ID.|
|token|query|string|false|File token for accessing this file.|

<h3 id="get-file-for-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

<h1 id="appwrite-teams">teams</h1>

The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources

## List teams

<a id="opIdteamsList"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /teams`

Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.

<h3 id="list-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "teams": ""
}
```

<h3 id="list-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Teams List|[teamList](#schemateamlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Create team

<a id="opIdteamsCreate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "teamId": "string",
    "name": "string",
    "roles": [
      "string"
    ]
  }'
```

`POST /teams`

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.

> Body parameter

```json
{
  "teamId": "string",
  "name": "string",
  "roles": [
    "string"
  ]
}
```

<h3 id="create-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» teamId|body|string|true|Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Team name. Max length: 128 chars.|
|» roles|body|[string]|false|Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  }
}
```

<h3 id="create-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Team|[team](#schemateam)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get team

<a id="opIdteamsGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /teams/{teamId}`

Get a team by its ID. All team members have read access for this resource.

<h3 id="get-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  }
}
```

<h3 id="get-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Team|[team](#schemateam)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Update name

<a id="opIdteamsUpdateName"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PUT /teams/{teamId}`

Update the team's name by its unique ID.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-name-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|body|body|object|false|none|
|» name|body|string|true|New team name. Max length: 128 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  }
}
```

<h3 id="update-name-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Team|[team](#schemateam)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Delete team

<a id="opIdteamsDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /teams/{teamId}`

Delete a team using its ID. Only team members with the owner role can delete the team.

<h3 id="delete-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|

<h3 id="delete-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## List team memberships

<a id="opIdteamsListMemberships"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/memberships \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /teams/{teamId}/memberships`

Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint. Hide sensitive attributes from the response by toggling membership privacy in the Console.

<h3 id="list-team-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "memberships": ""
}
```

<h3 id="list-team-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Memberships List|[membershipList](#schemamembershiplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Create team membership

<a id="opIdteamsCreateMembership"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/memberships \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "email": "string",
    "userId": "string",
    "phone": "string",
    "roles": [
      "string"
    ],
    "url": "string",
    "name": "string"
  }'
```

`POST /teams/{teamId}/memberships`

Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.


> Body parameter

```json
{
  "email": "string",
  "userId": "string",
  "phone": "string",
  "roles": [
    "string"
  ],
  "url": "string",
  "name": "string"
}
```

<h3 id="create-team-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|body|body|object|false|none|
|» email|body|string|false|Email of the new team member.|
|» userId|body|string|false|ID of the user to be added to a team.|
|» phone|body|string|false|Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» roles|body|[string]|true|Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.|
|» url|body|string|false|URL to redirect the user back to your app from the invitation email. This parameter is not required when an API key is supplied. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.|
|» name|body|string|false|Name of the new team member. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

<h3 id="create-team-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Membership|[membership](#schemamembership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get team membership

<a id="opIdteamsGetMembership"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/memberships/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /teams/{teamId}/memberships/{membershipId}`

Get a team member by the membership unique id. All team members have read access for this resource. Hide sensitive attributes from the response by toggling membership privacy in the Console.

<h3 id="get-team-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|membershipId|path|string|true|Membership ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

<h3 id="get-team-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership|[membership](#schemamembership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Delete team membership

<a id="opIdteamsDeleteMembership"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/memberships/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`DELETE /teams/{teamId}/memberships/{membershipId}`

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

<h3 id="delete-team-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|membershipId|path|string|true|Membership ID.|

<h3 id="delete-team-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Update membership

<a id="opIdteamsUpdateMembership"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/memberships/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "roles": [
      "string"
    ]
  }'
```

`PATCH /teams/{teamId}/memberships/{membershipId}`

Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).


> Body parameter

```json
{
  "roles": [
    "string"
  ]
}
```

<h3 id="update-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|membershipId|path|string|true|Membership ID.|
|body|body|object|false|none|
|» roles|body|[string]|true|An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

<h3 id="update-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership|[membership](#schemamembership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Update team membership status

<a id="opIdteamsUpdateMembershipStatus"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/memberships/string/status \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "userId": "string",
    "secret": "string"
  }'
```

`PATCH /teams/{teamId}/memberships/{membershipId}/status`

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.


> Body parameter

```json
{
  "userId": "string",
  "secret": "string"
}
```

<h3 id="update-team-membership-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|membershipId|path|string|true|Membership ID.|
|body|body|object|false|none|
|» userId|body|string|true|User ID.|
|» secret|body|string|true|Secret key.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

<h3 id="update-team-membership-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership|[membership](#schemamembership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Get team preferences

<a id="opIdteamsGetPrefs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/prefs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /teams/{teamId}/prefs`

Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).

<h3 id="get-team-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|

> Example responses

> 200 Response

```json
{
  "language": "en",
  "timezone": "UTC",
  "darkTheme": true
}
```

<h3 id="get-team-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences|[preferences](#schemapreferences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

## Update preferences

<a id="opIdteamsUpdatePrefs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/teams/string/prefs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "prefs": {}
  }'
```

`PUT /teams/{teamId}/prefs`

Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.

> Body parameter

```json
{
  "prefs": {}
}
```

<h3 id="update-preferences-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamId|path|string|true|Team ID.|
|body|body|object|false|none|
|» prefs|body|object|true|Prefs key-value JSON object.|

> Example responses

> 200 Response

```json
{
  "language": "en",
  "timezone": "UTC",
  "darkTheme": true
}
```

<h3 id="update-preferences-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences|[preferences](#schemapreferences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & JWT
</aside>

<h1 id="appwrite-users">users</h1>

The Users service allows you to manage your project users.

## List users

<a id="opIdusersList"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users`

Get a list of all the project's users. You can use the query params to filter your results.

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "users": ""
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users List|[userList](#schemauserlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user

<a id="opIdusersCreate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "phone": "string",
    "password": "string",
    "name": "string"
  }'
```

`POST /users`

Create a new user.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "phone": "string",
  "password": "string",
  "name": "string"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|false|User email.|
|» phone|body|string|false|Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» password|body|string|false|Plain text user password. Must be at least 8 chars.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with Argon2 password

<a id="opIdusersCreateArgon2User"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/argon2 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  }'
```

`POST /users/argon2`

Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

<h3 id="create-user-with-argon2-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using Argon2.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-argon2-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with bcrypt password

<a id="opIdusersCreateBcryptUser"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/bcrypt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  }'
```

`POST /users/bcrypt`

Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

<h3 id="create-user-with-bcrypt-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using Bcrypt.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-bcrypt-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List identities

<a id="opIdusersListIdentities"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/identities \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/identities`

Get identities for all users.

<h3 id="list-identities-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "identities": ""
}
```

<h3 id="list-identities-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Identities List|[identityList](#schemaidentitylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete identity

<a id="opIdusersDeleteIdentity"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/identities/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /users/identities/{identityId}`

Delete an identity by its unique ID.

<h3 id="delete-identity-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|identityId|path|string|true|Identity ID.|

<h3 id="delete-identity-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with MD5 password

<a id="opIdusersCreateMD5User"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/md5 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  }'
```

`POST /users/md5`

Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

<h3 id="create-user-with-md5-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using MD5.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-md5-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with PHPass password

<a id="opIdusersCreatePHPassUser"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/phpass \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  }'
```

`POST /users/phpass`

Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

<h3 id="create-user-with-phpass-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using PHPass.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-phpass-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with Scrypt password

<a id="opIdusersCreateScryptUser"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/scrypt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "passwordSalt": "string",
    "passwordCpu": 0,
    "passwordMemory": 0,
    "passwordParallel": 0,
    "passwordLength": 0,
    "name": "string"
  }'
```

`POST /users/scrypt`

Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "passwordSalt": "string",
  "passwordCpu": 0,
  "passwordMemory": 0,
  "passwordParallel": 0,
  "passwordLength": 0,
  "name": "string"
}
```

<h3 id="create-user-with-scrypt-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using Scrypt.|
|» passwordSalt|body|string|true|Optional salt used to hash password.|
|» passwordCpu|body|integer|true|Optional CPU cost used to hash password.|
|» passwordMemory|body|integer|true|Optional memory cost used to hash password.|
|» passwordParallel|body|integer|true|Optional parallelization cost used to hash password.|
|» passwordLength|body|integer|true|Optional hash length used to hash password.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-scrypt-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with Scrypt modified password

<a id="opIdusersCreateScryptModifiedUser"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/scrypt-modified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "passwordSalt": "string",
    "passwordSaltSeparator": "string",
    "passwordSignerKey": "string",
    "name": "string"
  }'
```

`POST /users/scrypt-modified`

Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "passwordSalt": "string",
  "passwordSaltSeparator": "string",
  "passwordSignerKey": "string",
  "name": "string"
}
```

<h3 id="create-user-with-scrypt-modified-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using Scrypt Modified.|
|» passwordSalt|body|string|true|Salt used to hash password.|
|» passwordSaltSeparator|body|string|true|Salt separator used to hash password.|
|» passwordSignerKey|body|string|true|Signer key used to hash password.|
|» name|body|string|false|User name. Max length: 128 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-scrypt-modified-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user with SHA password

<a id="opIdusersCreateSHAUser"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/sha \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "userId": "string",
    "email": "string",
    "password": "string",
    "passwordVersion": "sha1",
    "name": "string"
  }'
```

`POST /users/sha`

Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

> Body parameter

```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "passwordVersion": "sha1",
  "name": "string"
}
```

<h3 id="create-user-with-sha-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» userId|body|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» email|body|string|true|User email.|
|» password|body|string|true|User password hashed using SHA.|
|» passwordVersion|body|string|false|Optional SHA version used to hash password. Allowed values are: 'sha1', 'sha224', 'sha256', 'sha384', 'sha512/224', 'sha512/256', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512'|
|» name|body|string|false|User name. Max length: 128 chars.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» passwordVersion|sha1|
|» passwordVersion|sha224|
|» passwordVersion|sha256|
|» passwordVersion|sha384|
|» passwordVersion|sha512/224|
|» passwordVersion|sha512/256|
|» passwordVersion|sha512|
|» passwordVersion|sha3-224|
|» passwordVersion|sha3-256|
|» passwordVersion|sha3-384|
|» passwordVersion|sha3-512|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-user-with-sha-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get user

<a id="opIdusersGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}`

Get a user by its unique ID.

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete user

<a id="opIdusersDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /users/{userId}`

Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update email

<a id="opIdusersUpdateEmail"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/email \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "email": "string"
  }'
```

`PATCH /users/{userId}/email`

Update the user email by its unique ID.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="update-email-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» email|body|string|true|User email.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-email-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user JWT

<a id="opIdusersCreateJWT"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/jwts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "sessionId": "string",
    "duration": 0
  }'
```

`POST /users/{userId}/jwts`

Use this endpoint to create a JSON Web Token for user by its unique ID. You can use the resulting JWT to authenticate on behalf of the user. The JWT secret will become invalid if the session it uses gets deleted.

> Body parameter

```json
{
  "sessionId": "string",
  "duration": 0
}
```

<h3 id="create-user-jwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» sessionId|body|string|false|Session ID. Use the string 'recent' to use the most recent session. Defaults to the most recent session.|
|» duration|body|integer|false|Time in seconds before JWT expires. Default duration is 900 seconds, and maximum is 3600 seconds.|

> Example responses

> 201 Response

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

<h3 id="create-user-jwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|JWT|[jwt](#schemajwt)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update user labels

<a id="opIdusersUpdateLabels"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/labels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "labels": [
      "string"
    ]
  }'
```

`PUT /users/{userId}/labels`

Update the user labels by its unique ID. 

Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.

> Body parameter

```json
{
  "labels": [
    "string"
  ]
}
```

<h3 id="update-user-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» labels|body|[string]|true|Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-user-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List user logs

<a id="opIdusersListLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/logs`

Get the user activity logs list by its unique ID.

<h3 id="list-user-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "logs": ""
}
```

<h3 id="list-user-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs List|[logList](#schemaloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List user memberships

<a id="opIdusersListMemberships"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/memberships \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/memberships`

Get the user membership list by its unique ID.

<h3 id="list-user-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "memberships": ""
}
```

<h3 id="list-user-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Memberships List|[membershipList](#schemamembershiplist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update MFA

<a id="opIdusersUpdateMfa"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/mfa \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "mfa": true
  }'
```

`PATCH /users/{userId}/mfa`

Enable or disable MFA on a user account.

> Body parameter

```json
{
  "mfa": true
}
```

<h3 id="update-mfa-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» mfa|body|boolean|true|Enable or disable MFA.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-mfa-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete authenticator

<a id="opIdusersDeleteMfaAuthenticator"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/mfa/authenticators/totp \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /users/{userId}/mfa/authenticators/{type}`

Delete an authenticator app.

<h3 id="delete-authenticator-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|type|path|string|true|Type of authenticator.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|totp|

<h3 id="delete-authenticator-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List factors

<a id="opIdusersListMfaFactors"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/mfa/factors \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/mfa/factors`

List the factors available on the account to be used as a MFA challange.

<h3 id="list-factors-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 200 Response

```json
{
  "totp": true,
  "phone": true,
  "email": true,
  "recoveryCode": true
}
```

<h3 id="list-factors-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFAFactors|[mfaFactors](#schemamfafactors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get MFA recovery codes

<a id="opIdusersGetMfaRecoveryCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/mfa/recovery-codes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/mfa/recovery-codes`

Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.

<h3 id="get-mfa-recovery-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 200 Response

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

<h3 id="get-mfa-recovery-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFA Recovery Codes|[mfaRecoveryCodes](#schemamfarecoverycodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update MFA recovery codes (regenerate)

<a id="opIdusersUpdateMfaRecoveryCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/mfa/recovery-codes \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`PUT /users/{userId}/mfa/recovery-codes`

Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.

<h3 id="update-mfa-recovery-codes-regenerate-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 200 Response

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

<h3 id="update-mfa-recovery-codes-regenerate-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MFA Recovery Codes|[mfaRecoveryCodes](#schemamfarecoverycodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create MFA recovery codes

<a id="opIdusersCreateMfaRecoveryCodes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/mfa/recovery-codes \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`PATCH /users/{userId}/mfa/recovery-codes`

Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.

<h3 id="create-mfa-recovery-codes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 201 Response

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

<h3 id="create-mfa-recovery-codes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|MFA Recovery Codes|[mfaRecoveryCodes](#schemamfarecoverycodes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update name

<a id="opIdusersUpdateName"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/name \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /users/{userId}/name`

Update the user name by its unique ID.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-name-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» name|body|string|true|User name. Max length: 128 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-name-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update password

<a id="opIdusersUpdatePassword"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "password": "string"
  }'
```

`PATCH /users/{userId}/password`

Update the user password by its unique ID.

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="update-password-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» password|body|string|true|New user password. Must be at least 8 chars.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-password-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update phone

<a id="opIdusersUpdatePhone"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/phone \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "number": "string"
  }'
```

`PATCH /users/{userId}/phone`

Update the user phone by its unique ID.

> Body parameter

```json
{
  "number": "string"
}
```

<h3 id="update-phone-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» number|body|string|true|User phone number.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-phone-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get user preferences

<a id="opIdusersGetPrefs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/prefs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/prefs`

Get the user preferences by its unique ID.

<h3 id="get-user-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 200 Response

```json
{
  "language": "en",
  "timezone": "UTC",
  "darkTheme": true
}
```

<h3 id="get-user-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences|[preferences](#schemapreferences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update user preferences

<a id="opIdusersUpdatePrefs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/prefs \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "prefs": {}
  }'
```

`PATCH /users/{userId}/prefs`

Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

> Body parameter

```json
{
  "prefs": {}
}
```

<h3 id="update-user-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» prefs|body|object|true|Prefs key-value JSON object.|

> Example responses

> 200 Response

```json
{
  "language": "en",
  "timezone": "UTC",
  "darkTheme": true
}
```

<h3 id="update-user-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences|[preferences](#schemapreferences)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List user sessions

<a id="opIdusersListSessions"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/sessions \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/sessions`

Get the user sessions list by its unique ID.

<h3 id="list-user-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "sessions": ""
}
```

<h3 id="list-user-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sessions List|[sessionList](#schemasessionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create session

<a id="opIdusersCreateSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/sessions \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`POST /users/{userId}/sessions`

Creates a session for a user. Returns an immediately usable session object.

If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.

<h3 id="create-session-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-session-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Session|[session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete user sessions

<a id="opIdusersDeleteSessions"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/sessions \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /users/{userId}/sessions`

Delete all user's sessions by using the user's unique ID.

<h3 id="delete-user-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|

<h3 id="delete-user-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete user session

<a id="opIdusersDeleteSession"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/sessions/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /users/{userId}/sessions/{sessionId}`

Delete a user sessions by its unique ID.

<h3 id="delete-user-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|sessionId|path|string|true|Session ID.|

<h3 id="delete-user-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update user status

<a id="opIdusersUpdateStatus"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/status \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "status": true
  }'
```

`PATCH /users/{userId}/status`

Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.

> Body parameter

```json
{
  "status": true
}
```

<h3 id="update-user-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» status|body|boolean|true|User Status. To activate the user pass `true` and to block the user pass `false`.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-user-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List user targets

<a id="opIdusersListTargets"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/targets \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/targets`

List the messaging targets that are associated with a user.

<h3 id="list-user-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "targets": ""
}
```

<h3 id="list-user-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target list|[targetList](#schematargetlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create user target

<a id="opIdusersCreateTarget"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "targetId": "string",
    "providerType": "email",
    "identifier": "string",
    "providerId": "string",
    "name": "string"
  }'
```

`POST /users/{userId}/targets`

Create a messaging target.

> Body parameter

```json
{
  "targetId": "string",
  "providerType": "email",
  "identifier": "string",
  "providerId": "string",
  "name": "string"
}
```

<h3 id="create-user-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» targetId|body|string|true|Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» providerType|body|string|true|The target provider type. Can be one of the following: `email`, `sms` or `push`.|
|» identifier|body|string|true|The target identifier (token, email, phone etc.)|
|» providerId|body|string|false|Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.|
|» name|body|string|false|Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» providerType|email|
|» providerType|sms|
|» providerType|push|

> Example responses

> 201 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Apple iPhone 12",
  "userId": "259125845563242502",
  "providerId": "259125845563242502",
  "providerType": "email",
  "identifier": "token",
  "expired": false
}
```

<h3 id="create-user-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Target|[target](#schematarget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get user target

<a id="opIdusersGetTarget"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/targets/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /users/{userId}/targets/{targetId}`

Get a user's push notification target by ID.

<h3 id="get-user-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|targetId|path|string|true|Target ID.|

> Example responses

> 200 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Apple iPhone 12",
  "userId": "259125845563242502",
  "providerId": "259125845563242502",
  "providerType": "email",
  "identifier": "token",
  "expired": false
}
```

<h3 id="get-user-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target|[target](#schematarget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete user target

<a id="opIdusersDeleteTarget"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/targets/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /users/{userId}/targets/{targetId}`

Delete a messaging target.

<h3 id="delete-user-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|targetId|path|string|true|Target ID.|

<h3 id="delete-user-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update user target

<a id="opIdusersUpdateTarget"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/targets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "identifier": "string",
    "providerId": "string",
    "name": "string"
  }'
```

`PATCH /users/{userId}/targets/{targetId}`

Update a messaging target.

> Body parameter

```json
{
  "identifier": "string",
  "providerId": "string",
  "name": "string"
}
```

<h3 id="update-user-target-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|targetId|path|string|true|Target ID.|
|body|body|object|false|none|
|» identifier|body|string|false|The target identifier (token, email, phone etc.)|
|» providerId|body|string|false|Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.|
|» name|body|string|false|Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.|

> Example responses

> 200 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Apple iPhone 12",
  "userId": "259125845563242502",
  "providerId": "259125845563242502",
  "providerType": "email",
  "identifier": "token",
  "expired": false
}
```

<h3 id="update-user-target-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target|[target](#schematarget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create token

<a id="opIdusersCreateToken"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "length": 0,
    "expire": 0
  }'
```

`POST /users/{userId}/tokens`

Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the [PUT /account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process.


> Body parameter

```json
{
  "length": 0,
  "expire": 0
}
```

<h3 id="create-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» length|body|integer|false|Token length in characters. The default length is 6 characters|
|» expire|body|integer|false|Token expiration period in seconds. The default expiration is 15 minutes.|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

<h3 id="create-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Token|[token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update email verification

<a id="opIdusersUpdateEmailVerification"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/verification \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "emailVerification": true
  }'
```

`PATCH /users/{userId}/verification`

Update the user email verification status by its unique ID.

> Body parameter

```json
{
  "emailVerification": true
}
```

<h3 id="update-email-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» emailVerification|body|boolean|true|User email verification status.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-email-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update phone verification

<a id="opIdusersUpdatePhoneVerification"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/users/string/verification/phone \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "phoneVerification": true
  }'
```

`PATCH /users/{userId}/verification/phone`

Update the user phone verification status by its unique ID.

> Body parameter

```json
{
  "phoneVerification": true
}
```

<h3 id="update-phone-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User ID.|
|body|body|object|false|none|
|» phoneVerification|body|boolean|true|User phone verification status.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-phone-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User|[user](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

<h1 id="appwrite-sites">sites</h1>

The Sites Service allows you view, create and manage your web applications.

## List sites

<a id="opIdsitesList"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites`

Get a list of all the project's sites. You can use the query params to filter your results.

<h3 id="list-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|string|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "sites": ""
}
```

<h3 id="list-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sites List|[siteList](#schemasitelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create site

<a id="opIdsitesCreate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "siteId": "string",
    "name": "string",
    "framework": "analog",
    "enabled": true,
    "logging": true,
    "timeout": 0,
    "installCommand": "string",
    "buildCommand": "string",
    "outputDirectory": "string",
    "buildRuntime": "node-14.5",
    "adapter": "static",
    "installationId": "string",
    "fallbackFile": "string",
    "providerRepositoryId": "string",
    "providerBranch": "string",
    "providerSilentMode": true,
    "providerRootDirectory": "string",
    "specification": "string"
  }'
```

`POST /sites`

Create a new site.

> Body parameter

```json
{
  "siteId": "string",
  "name": "string",
  "framework": "analog",
  "enabled": true,
  "logging": true,
  "timeout": 0,
  "installCommand": "string",
  "buildCommand": "string",
  "outputDirectory": "string",
  "buildRuntime": "node-14.5",
  "adapter": "static",
  "installationId": "string",
  "fallbackFile": "string",
  "providerRepositoryId": "string",
  "providerBranch": "string",
  "providerSilentMode": true,
  "providerRootDirectory": "string",
  "specification": "string"
}
```

<h3 id="create-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» siteId|body|string|true|Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Site name. Max length: 128 chars.|
|» framework|body|string|true|Sites framework.|
|» enabled|body|boolean|false|Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.|
|» logging|body|boolean|false|When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.|
|» timeout|body|integer|false|Maximum request time in seconds.|
|» installCommand|body|string|false|Install Command.|
|» buildCommand|body|string|false|Build Command.|
|» outputDirectory|body|string|false|Output Directory for site.|
|» buildRuntime|body|string|true|Runtime to use during build step.|
|» adapter|body|string|false|Framework adapter defining rendering strategy. Allowed values are: static, ssr|
|» installationId|body|string|false|Appwrite Installation ID for VCS (Version Control System) deployment.|
|» fallbackFile|body|string|false|Fallback file for single page application sites.|
|» providerRepositoryId|body|string|false|Repository ID of the repo linked to the site.|
|» providerBranch|body|string|false|Production branch for the repo linked to the site.|
|» providerSilentMode|body|boolean|false|Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.|
|» providerRootDirectory|body|string|false|Path to site code in the linked repo.|
|» specification|body|string|false|Framework specification for the site and builds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» framework|analog|
|» framework|angular|
|» framework|nextjs|
|» framework|react|
|» framework|nuxt|
|» framework|vue|
|» framework|sveltekit|
|» framework|astro|
|» framework|remix|
|» framework|lynx|
|» framework|flutter|
|» framework|react-native|
|» framework|vite|
|» framework|other|
|» buildRuntime|node-14.5|
|» buildRuntime|node-16.0|
|» buildRuntime|node-18.0|
|» buildRuntime|node-19.0|
|» buildRuntime|node-20.0|
|» buildRuntime|node-21.0|
|» buildRuntime|node-22|
|» buildRuntime|php-8.0|
|» buildRuntime|php-8.1|
|» buildRuntime|php-8.2|
|» buildRuntime|php-8.3|
|» buildRuntime|ruby-3.0|
|» buildRuntime|ruby-3.1|
|» buildRuntime|ruby-3.2|
|» buildRuntime|ruby-3.3|
|» buildRuntime|python-3.8|
|» buildRuntime|python-3.9|
|» buildRuntime|python-3.10|
|» buildRuntime|python-3.11|
|» buildRuntime|python-3.12|
|» buildRuntime|python-ml-3.11|
|» buildRuntime|python-ml-3.12|
|» buildRuntime|deno-1.21|
|» buildRuntime|deno-1.24|
|» buildRuntime|deno-1.35|
|» buildRuntime|deno-1.40|
|» buildRuntime|deno-1.46|
|» buildRuntime|deno-2.0|
|» buildRuntime|dart-2.15|
|» buildRuntime|dart-2.16|
|» buildRuntime|dart-2.17|
|» buildRuntime|dart-2.18|
|» buildRuntime|dart-2.19|
|» buildRuntime|dart-3.0|
|» buildRuntime|dart-3.1|
|» buildRuntime|dart-3.3|
|» buildRuntime|dart-3.5|
|» buildRuntime|dart-3.8|
|» buildRuntime|dotnet-6.0|
|» buildRuntime|dotnet-7.0|
|» buildRuntime|dotnet-8.0|
|» buildRuntime|java-8.0|
|» buildRuntime|java-11.0|
|» buildRuntime|java-17.0|
|» buildRuntime|java-18.0|
|» buildRuntime|java-21.0|
|» buildRuntime|java-22|
|» buildRuntime|swift-5.5|
|» buildRuntime|swift-5.8|
|» buildRuntime|swift-5.9|
|» buildRuntime|swift-5.10|
|» buildRuntime|kotlin-1.6|
|» buildRuntime|kotlin-1.8|
|» buildRuntime|kotlin-1.9|
|» buildRuntime|kotlin-2.0|
|» buildRuntime|cpp-17|
|» buildRuntime|cpp-20|
|» buildRuntime|bun-1.0|
|» buildRuntime|bun-1.1|
|» buildRuntime|go-1.23|
|» buildRuntime|static-1|
|» buildRuntime|flutter-3.24|
|» buildRuntime|flutter-3.27|
|» buildRuntime|flutter-3.29|
|» buildRuntime|flutter-3.32|
|» adapter|static|
|» adapter|ssr|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

<h3 id="create-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Site|[site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List frameworks

<a id="opIdsitesListFrameworks"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/frameworks \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/frameworks`

Get a list of all frameworks that are currently available on the server instance.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "frameworks": ""
}
```

<h3 id="list-frameworks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Frameworks List|[frameworkList](#schemaframeworklist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List specifications

<a id="opIdsitesListSpecifications"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/specifications \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/specifications`

List allowed site specifications for this instance.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "specifications": ""
}
```

<h3 id="list-specifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Specifications List|[specificationList](#schemaspecificationlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get site

<a id="opIdsitesGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}`

Get a site by its unique ID.

<h3 id="get-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

<h3 id="get-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site|[site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update site

<a id="opIdsitesUpdate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "framework": "analog",
    "enabled": true,
    "logging": true,
    "timeout": 0,
    "installCommand": "string",
    "buildCommand": "string",
    "outputDirectory": "string",
    "buildRuntime": "node-14.5",
    "adapter": "static",
    "fallbackFile": "string",
    "installationId": "string",
    "providerRepositoryId": "string",
    "providerBranch": "string",
    "providerSilentMode": true,
    "providerRootDirectory": "string",
    "specification": "string"
  }'
```

`PUT /sites/{siteId}`

Update site by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "framework": "analog",
  "enabled": true,
  "logging": true,
  "timeout": 0,
  "installCommand": "string",
  "buildCommand": "string",
  "outputDirectory": "string",
  "buildRuntime": "node-14.5",
  "adapter": "static",
  "fallbackFile": "string",
  "installationId": "string",
  "providerRepositoryId": "string",
  "providerBranch": "string",
  "providerSilentMode": true,
  "providerRootDirectory": "string",
  "specification": "string"
}
```

<h3 id="update-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|body|body|object|false|none|
|» name|body|string|true|Site name. Max length: 128 chars.|
|» framework|body|string|true|Sites framework.|
|» enabled|body|boolean|false|Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.|
|» logging|body|boolean|false|When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.|
|» timeout|body|integer|false|Maximum request time in seconds.|
|» installCommand|body|string|false|Install Command.|
|» buildCommand|body|string|false|Build Command.|
|» outputDirectory|body|string|false|Output Directory for site.|
|» buildRuntime|body|string|false|Runtime to use during build step.|
|» adapter|body|string|false|Framework adapter defining rendering strategy. Allowed values are: static, ssr|
|» fallbackFile|body|string|false|Fallback file for single page application sites.|
|» installationId|body|string|false|Appwrite Installation ID for VCS (Version Control System) deployment.|
|» providerRepositoryId|body|string|false|Repository ID of the repo linked to the site.|
|» providerBranch|body|string|false|Production branch for the repo linked to the site.|
|» providerSilentMode|body|boolean|false|Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.|
|» providerRootDirectory|body|string|false|Path to site code in the linked repo.|
|» specification|body|string|false|Framework specification for the site and builds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» framework|analog|
|» framework|angular|
|» framework|nextjs|
|» framework|react|
|» framework|nuxt|
|» framework|vue|
|» framework|sveltekit|
|» framework|astro|
|» framework|remix|
|» framework|lynx|
|» framework|flutter|
|» framework|react-native|
|» framework|vite|
|» framework|other|
|» buildRuntime|node-14.5|
|» buildRuntime|node-16.0|
|» buildRuntime|node-18.0|
|» buildRuntime|node-19.0|
|» buildRuntime|node-20.0|
|» buildRuntime|node-21.0|
|» buildRuntime|node-22|
|» buildRuntime|php-8.0|
|» buildRuntime|php-8.1|
|» buildRuntime|php-8.2|
|» buildRuntime|php-8.3|
|» buildRuntime|ruby-3.0|
|» buildRuntime|ruby-3.1|
|» buildRuntime|ruby-3.2|
|» buildRuntime|ruby-3.3|
|» buildRuntime|python-3.8|
|» buildRuntime|python-3.9|
|» buildRuntime|python-3.10|
|» buildRuntime|python-3.11|
|» buildRuntime|python-3.12|
|» buildRuntime|python-ml-3.11|
|» buildRuntime|python-ml-3.12|
|» buildRuntime|deno-1.21|
|» buildRuntime|deno-1.24|
|» buildRuntime|deno-1.35|
|» buildRuntime|deno-1.40|
|» buildRuntime|deno-1.46|
|» buildRuntime|deno-2.0|
|» buildRuntime|dart-2.15|
|» buildRuntime|dart-2.16|
|» buildRuntime|dart-2.17|
|» buildRuntime|dart-2.18|
|» buildRuntime|dart-2.19|
|» buildRuntime|dart-3.0|
|» buildRuntime|dart-3.1|
|» buildRuntime|dart-3.3|
|» buildRuntime|dart-3.5|
|» buildRuntime|dart-3.8|
|» buildRuntime|dotnet-6.0|
|» buildRuntime|dotnet-7.0|
|» buildRuntime|dotnet-8.0|
|» buildRuntime|java-8.0|
|» buildRuntime|java-11.0|
|» buildRuntime|java-17.0|
|» buildRuntime|java-18.0|
|» buildRuntime|java-21.0|
|» buildRuntime|java-22|
|» buildRuntime|swift-5.5|
|» buildRuntime|swift-5.8|
|» buildRuntime|swift-5.9|
|» buildRuntime|swift-5.10|
|» buildRuntime|kotlin-1.6|
|» buildRuntime|kotlin-1.8|
|» buildRuntime|kotlin-1.9|
|» buildRuntime|kotlin-2.0|
|» buildRuntime|cpp-17|
|» buildRuntime|cpp-20|
|» buildRuntime|bun-1.0|
|» buildRuntime|bun-1.1|
|» buildRuntime|go-1.23|
|» buildRuntime|static-1|
|» buildRuntime|flutter-3.24|
|» buildRuntime|flutter-3.27|
|» buildRuntime|flutter-3.29|
|» buildRuntime|flutter-3.32|
|» adapter|static|
|» adapter|ssr|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

<h3 id="update-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site|[site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete site

<a id="opIdsitesDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /sites/{siteId}`

Delete a site by its unique ID.

<h3 id="delete-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|

<h3 id="delete-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update site's deployment

<a id="opIdsitesUpdateSiteDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployment \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "deploymentId": "string"
  }'
```

`PATCH /sites/{siteId}/deployment`

Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.

> Body parameter

```json
{
  "deploymentId": "string"
}
```

<h3 id="update-sites-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|body|body|object|false|none|
|» deploymentId|body|string|true|Deployment ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

<h3 id="update-sites-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site|[site](#schemasite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List deployments

<a id="opIdsitesListDeployments"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}/deployments`

Get a list of all the site's code deployments. You can use the query params to filter your results.

<h3 id="list-deployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "deployments": ""
}
```

<h3 id="list-deployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deployments List|[deploymentList](#schemadeploymentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create deployment

<a id="opIdsitesCreateDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -F 'installCommand=string' \
  -F 'buildCommand=string' \
  -F 'outputDirectory=string' \
  -F 'code=string' \
  -F 'activate=true'
```

`POST /sites/{siteId}/deployments`

Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the function's deployment to use your new deployment ID.

> Body parameter

```yaml
installCommand: string
buildCommand: string
outputDirectory: string
code: string
activate: true
```

<h3 id="create-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|body|body|object|false|none|
|» installCommand|body|string|false|Install Commands.|
|» buildCommand|body|string|false|Build Commands.|
|» outputDirectory|body|string|false|Output Directory.|
|» code|body|string|true|Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.|
|» activate|body|boolean|true|Automatically activate the deployment when it is finished building.|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create duplicate deployment

<a id="opIdsitesCreateDuplicateDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/duplicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "deploymentId": "string"
  }'
```

`POST /sites/{siteId}/deployments/duplicate`

Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.

> Body parameter

```json
{
  "deploymentId": "string"
}
```

<h3 id="create-duplicate-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|body|body|object|false|none|
|» deploymentId|body|string|true|Deployment ID.|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-duplicate-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create template deployment

<a id="opIdsitesCreateTemplateDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "repository": "string",
    "owner": "string",
    "rootDirectory": "string",
    "version": "string",
    "activate": true
  }'
```

`POST /sites/{siteId}/deployments/template`

Create a deployment based on a template.

Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/sites#listTemplates) to find the template details.

> Body parameter

```json
{
  "repository": "string",
  "owner": "string",
  "rootDirectory": "string",
  "version": "string",
  "activate": true
}
```

<h3 id="create-template-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|body|body|object|false|none|
|» repository|body|string|true|Repository name of the template.|
|» owner|body|string|true|The name of the owner of the template.|
|» rootDirectory|body|string|true|Path to site code in the template repo.|
|» version|body|string|true|Version (tag) for the repo linked to the site template.|
|» activate|body|boolean|false|Automatically activate the deployment when it is finished building.|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-template-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create VCS deployment

<a id="opIdsitesCreateVcsDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/vcs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "type": "branch",
    "reference": "string",
    "activate": true
  }'
```

`POST /sites/{siteId}/deployments/vcs`

Create a deployment when a site is connected to VCS.

This endpoint lets you create deployment from a branch, commit, or a tag.

> Body parameter

```json
{
  "type": "branch",
  "reference": "string",
  "activate": true
}
```

<h3 id="create-vcs-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|body|body|object|false|none|
|» type|body|string|true|Type of reference passed. Allowed values are: branch, commit|
|» reference|body|string|true|VCS reference to create deployment from. Depending on type this can be: branch name, commit hash|
|» activate|body|boolean|false|Automatically activate the deployment when it is finished building.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|branch|
|» type|commit|
|» type|tag|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-vcs-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get deployment

<a id="opIdsitesGetDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}/deployments/{deploymentId}`

Get a site deployment by its unique ID.

<h3 id="get-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|deploymentId|path|string|true|Deployment ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="get-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete deployment

<a id="opIdsitesDeleteDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /sites/{siteId}/deployments/{deploymentId}`

Delete a site deployment by its unique ID.

<h3 id="delete-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|deploymentId|path|string|true|Deployment ID.|

<h3 id="delete-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get deployment download

<a id="opIdsitesGetDeploymentDownload"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/string/download \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /sites/{siteId}/deployments/{deploymentId}/download`

Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

<h3 id="get-deployment-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|deploymentId|path|string|true|Deployment ID.|
|type|query|string|false|Deployment file to download. Can be: "source", "output".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|source|
|type|output|

<h3 id="get-deployment-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key & JWT
</aside>

## Update deployment status

<a id="opIdsitesUpdateDeploymentStatus"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/deployments/string/status \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`PATCH /sites/{siteId}/deployments/{deploymentId}/status`

Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.

<h3 id="update-deployment-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|deploymentId|path|string|true|Deployment ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="update-deployment-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List logs

<a id="opIdsitesListLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}/logs`

Get a list of all site logs. You can use the query params to filter your results.

<h3 id="list-logs-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|queries|query|string|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "executions": ""
}
```

<h3 id="list-logs-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Executions List|[executionList](#schemaexecutionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get log

<a id="opIdsitesGetLog"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/logs/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}/logs/{logId}`

Get a site request log by its unique ID.

<h3 id="get-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|logId|path|string|true|Log ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "any"
  ],
  "functionId": "5e5ea6g16897e",
  "deploymentId": "5e5ea5c16897e",
  "trigger": "http",
  "status": "processing",
  "requestMethod": "GET",
  "requestPath": "/articles?id=5",
  "requestHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "responseStatusCode": 200,
  "responseBody": "",
  "responseHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "logs": "",
  "errors": "",
  "duration": 0.4,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Execution|[execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete log

<a id="opIdsitesDeleteLog"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/logs/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /sites/{siteId}/logs/{logId}`

Delete a site log by its unique ID.

<h3 id="delete-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site ID.|
|logId|path|string|true|Log ID.|

<h3 id="delete-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List variables

<a id="opIdsitesListVariables"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/variables \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}/variables`

Get a list of all variables of a specific site.

<h3 id="list-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site unique ID.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "variables": ""
}
```

<h3 id="list-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variables List|[variableList](#schemavariablelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create variable

<a id="opIdsitesCreateVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "value": "string",
    "secret": true
  }'
```

`POST /sites/{siteId}/variables`

Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.

> Body parameter

```json
{
  "key": "string",
  "value": "string",
  "secret": true
}
```

<h3 id="create-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site unique ID.|
|body|body|object|false|none|
|» key|body|string|true|Variable key. Max length: 255 chars.|
|» value|body|string|true|Variable value. Max length: 8192 chars.|
|» secret|body|boolean|false|Secret variables can be updated or deleted, but only sites can read them during build and runtime.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

<h3 id="create-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Variable|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get variable

<a id="opIdsitesGetVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/variables/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /sites/{siteId}/variables/{variableId}`

Get a variable by its unique ID.

<h3 id="get-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site unique ID.|
|variableId|path|string|true|Variable unique ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

<h3 id="get-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update variable

<a id="opIdsitesUpdateVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/variables/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "value": "string",
    "secret": true
  }'
```

`PUT /sites/{siteId}/variables/{variableId}`

Update variable by its unique ID.

> Body parameter

```json
{
  "key": "string",
  "value": "string",
  "secret": true
}
```

<h3 id="update-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site unique ID.|
|variableId|path|string|true|Variable unique ID.|
|body|body|object|false|none|
|» key|body|string|true|Variable key. Max length: 255 chars.|
|» value|body|string|false|Variable value. Max length: 8192 chars.|
|» secret|body|boolean|false|Secret variables can be updated or deleted, but only sites can read them during build and runtime.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

<h3 id="update-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete variable

<a id="opIdsitesDeleteVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/sites/string/variables/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /sites/{siteId}/variables/{variableId}`

Delete a variable by its unique ID.

<h3 id="delete-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|path|string|true|Site unique ID.|
|variableId|path|string|true|Variable unique ID.|

<h3 id="delete-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

<h1 id="appwrite-functions">functions</h1>

The Functions Service allows you view, create and manage your Cloud Functions.

## List functions

<a id="opIdfunctionsList"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions`

Get a list of all the project's functions. You can use the query params to filter your results.

<h3 id="list-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "functions": ""
}
```

<h3 id="list-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Functions List|[functionList](#schemafunctionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create function

<a id="opIdfunctionsCreate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "functionId": "string",
    "name": "string",
    "runtime": "node-14.5",
    "execute": [
      "string"
    ],
    "events": [
      "string"
    ],
    "schedule": "string",
    "timeout": 0,
    "enabled": true,
    "logging": true,
    "entrypoint": "string",
    "commands": "string",
    "scopes": [
      "string"
    ],
    "installationId": "string",
    "providerRepositoryId": "string",
    "providerBranch": "string",
    "providerSilentMode": true,
    "providerRootDirectory": "string",
    "specification": "string"
  }'
```

`POST /functions`

Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.

> Body parameter

```json
{
  "functionId": "string",
  "name": "string",
  "runtime": "node-14.5",
  "execute": [
    "string"
  ],
  "events": [
    "string"
  ],
  "schedule": "string",
  "timeout": 0,
  "enabled": true,
  "logging": true,
  "entrypoint": "string",
  "commands": "string",
  "scopes": [
    "string"
  ],
  "installationId": "string",
  "providerRepositoryId": "string",
  "providerBranch": "string",
  "providerSilentMode": true,
  "providerRootDirectory": "string",
  "specification": "string"
}
```

<h3 id="create-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» functionId|body|string|true|Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Function name. Max length: 128 chars.|
|» runtime|body|string|true|Execution runtime.|
|» execute|body|[string]|false|An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.|
|» events|body|[string]|false|Events list. Maximum of 100 events are allowed.|
|» schedule|body|string|false|Schedule CRON syntax.|
|» timeout|body|integer|false|Function maximum execution time in seconds.|
|» enabled|body|boolean|false|Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.|
|» logging|body|boolean|false|When disabled, executions will exclude logs and errors, and will be slightly faster.|
|» entrypoint|body|string|false|Entrypoint File. This path is relative to the "providerRootDirectory".|
|» commands|body|string|false|Build Commands.|
|» scopes|body|[string]|false|List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.|
|» installationId|body|string|false|Appwrite Installation ID for VCS (Version Control System) deployment.|
|» providerRepositoryId|body|string|false|Repository ID of the repo linked to the function.|
|» providerBranch|body|string|false|Production branch for the repo linked to the function.|
|» providerSilentMode|body|boolean|false|Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.|
|» providerRootDirectory|body|string|false|Path to function code in the linked repo.|
|» specification|body|string|false|Runtime specification for the function and builds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» runtime|node-14.5|
|» runtime|node-16.0|
|» runtime|node-18.0|
|» runtime|node-19.0|
|» runtime|node-20.0|
|» runtime|node-21.0|
|» runtime|node-22|
|» runtime|php-8.0|
|» runtime|php-8.1|
|» runtime|php-8.2|
|» runtime|php-8.3|
|» runtime|ruby-3.0|
|» runtime|ruby-3.1|
|» runtime|ruby-3.2|
|» runtime|ruby-3.3|
|» runtime|python-3.8|
|» runtime|python-3.9|
|» runtime|python-3.10|
|» runtime|python-3.11|
|» runtime|python-3.12|
|» runtime|python-ml-3.11|
|» runtime|python-ml-3.12|
|» runtime|deno-1.21|
|» runtime|deno-1.24|
|» runtime|deno-1.35|
|» runtime|deno-1.40|
|» runtime|deno-1.46|
|» runtime|deno-2.0|
|» runtime|dart-2.15|
|» runtime|dart-2.16|
|» runtime|dart-2.17|
|» runtime|dart-2.18|
|» runtime|dart-2.19|
|» runtime|dart-3.0|
|» runtime|dart-3.1|
|» runtime|dart-3.3|
|» runtime|dart-3.5|
|» runtime|dart-3.8|
|» runtime|dotnet-6.0|
|» runtime|dotnet-7.0|
|» runtime|dotnet-8.0|
|» runtime|java-8.0|
|» runtime|java-11.0|
|» runtime|java-17.0|
|» runtime|java-18.0|
|» runtime|java-21.0|
|» runtime|java-22|
|» runtime|swift-5.5|
|» runtime|swift-5.8|
|» runtime|swift-5.9|
|» runtime|swift-5.10|
|» runtime|kotlin-1.6|
|» runtime|kotlin-1.8|
|» runtime|kotlin-1.9|
|» runtime|kotlin-2.0|
|» runtime|cpp-17|
|» runtime|cpp-20|
|» runtime|bun-1.0|
|» runtime|bun-1.1|
|» runtime|go-1.23|
|» runtime|static-1|
|» runtime|flutter-3.24|
|» runtime|flutter-3.27|
|» runtime|flutter-3.29|
|» runtime|flutter-3.32|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

<h3 id="create-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Function|[function](#schemafunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List runtimes

<a id="opIdfunctionsListRuntimes"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/runtimes \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/runtimes`

Get a list of all runtimes that are currently active on your instance.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "runtimes": ""
}
```

<h3 id="list-runtimes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Runtimes List|[runtimeList](#schemaruntimelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List specifications

<a id="opIdfunctionsListSpecifications"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/specifications \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/specifications`

List allowed function specifications for this instance.

> Example responses

> 200 Response

```json
{
  "total": 5,
  "specifications": ""
}
```

<h3 id="list-specifications-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Specifications List|[specificationList](#schemaspecificationlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get function

<a id="opIdfunctionsGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/{functionId}`

Get a function by its unique ID.

<h3 id="get-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

<h3 id="get-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function|[function](#schemafunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update function

<a id="opIdfunctionsUpdate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "runtime": "node-14.5",
    "execute": [
      "string"
    ],
    "events": [
      "string"
    ],
    "schedule": "string",
    "timeout": 0,
    "enabled": true,
    "logging": true,
    "entrypoint": "string",
    "commands": "string",
    "scopes": [
      "string"
    ],
    "installationId": "string",
    "providerRepositoryId": "string",
    "providerBranch": "string",
    "providerSilentMode": true,
    "providerRootDirectory": "string",
    "specification": "string"
  }'
```

`PUT /functions/{functionId}`

Update function by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "runtime": "node-14.5",
  "execute": [
    "string"
  ],
  "events": [
    "string"
  ],
  "schedule": "string",
  "timeout": 0,
  "enabled": true,
  "logging": true,
  "entrypoint": "string",
  "commands": "string",
  "scopes": [
    "string"
  ],
  "installationId": "string",
  "providerRepositoryId": "string",
  "providerBranch": "string",
  "providerSilentMode": true,
  "providerRootDirectory": "string",
  "specification": "string"
}
```

<h3 id="update-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» name|body|string|true|Function name. Max length: 128 chars.|
|» runtime|body|string|false|Execution runtime.|
|» execute|body|[string]|false|An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.|
|» events|body|[string]|false|Events list. Maximum of 100 events are allowed.|
|» schedule|body|string|false|Schedule CRON syntax.|
|» timeout|body|integer|false|Maximum execution time in seconds.|
|» enabled|body|boolean|false|Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.|
|» logging|body|boolean|false|When disabled, executions will exclude logs and errors, and will be slightly faster.|
|» entrypoint|body|string|false|Entrypoint File. This path is relative to the "providerRootDirectory".|
|» commands|body|string|false|Build Commands.|
|» scopes|body|[string]|false|List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.|
|» installationId|body|string|false|Appwrite Installation ID for VCS (Version Controle System) deployment.|
|» providerRepositoryId|body|string|false|Repository ID of the repo linked to the function|
|» providerBranch|body|string|false|Production branch for the repo linked to the function|
|» providerSilentMode|body|boolean|false|Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.|
|» providerRootDirectory|body|string|false|Path to function code in the linked repo.|
|» specification|body|string|false|Runtime specification for the function and builds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» runtime|node-14.5|
|» runtime|node-16.0|
|» runtime|node-18.0|
|» runtime|node-19.0|
|» runtime|node-20.0|
|» runtime|node-21.0|
|» runtime|node-22|
|» runtime|php-8.0|
|» runtime|php-8.1|
|» runtime|php-8.2|
|» runtime|php-8.3|
|» runtime|ruby-3.0|
|» runtime|ruby-3.1|
|» runtime|ruby-3.2|
|» runtime|ruby-3.3|
|» runtime|python-3.8|
|» runtime|python-3.9|
|» runtime|python-3.10|
|» runtime|python-3.11|
|» runtime|python-3.12|
|» runtime|python-ml-3.11|
|» runtime|python-ml-3.12|
|» runtime|deno-1.21|
|» runtime|deno-1.24|
|» runtime|deno-1.35|
|» runtime|deno-1.40|
|» runtime|deno-1.46|
|» runtime|deno-2.0|
|» runtime|dart-2.15|
|» runtime|dart-2.16|
|» runtime|dart-2.17|
|» runtime|dart-2.18|
|» runtime|dart-2.19|
|» runtime|dart-3.0|
|» runtime|dart-3.1|
|» runtime|dart-3.3|
|» runtime|dart-3.5|
|» runtime|dart-3.8|
|» runtime|dotnet-6.0|
|» runtime|dotnet-7.0|
|» runtime|dotnet-8.0|
|» runtime|java-8.0|
|» runtime|java-11.0|
|» runtime|java-17.0|
|» runtime|java-18.0|
|» runtime|java-21.0|
|» runtime|java-22|
|» runtime|swift-5.5|
|» runtime|swift-5.8|
|» runtime|swift-5.9|
|» runtime|swift-5.10|
|» runtime|kotlin-1.6|
|» runtime|kotlin-1.8|
|» runtime|kotlin-1.9|
|» runtime|kotlin-2.0|
|» runtime|cpp-17|
|» runtime|cpp-20|
|» runtime|bun-1.0|
|» runtime|bun-1.1|
|» runtime|go-1.23|
|» runtime|static-1|
|» runtime|flutter-3.24|
|» runtime|flutter-3.27|
|» runtime|flutter-3.29|
|» runtime|flutter-3.32|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

<h3 id="update-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function|[function](#schemafunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete function

<a id="opIdfunctionsDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /functions/{functionId}`

Delete a function by its unique ID.

<h3 id="delete-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|

<h3 id="delete-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update function's deployment

<a id="opIdfunctionsUpdateFunctionDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployment \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "deploymentId": "string"
  }'
```

`PATCH /functions/{functionId}/deployment`

Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.

> Body parameter

```json
{
  "deploymentId": "string"
}
```

<h3 id="update-functions-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» deploymentId|body|string|true|Deployment ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

<h3 id="update-functions-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Function|[function](#schemafunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List deployments

<a id="opIdfunctionsListDeployments"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/{functionId}/deployments`

Get a list of all the function's code deployments. You can use the query params to filter your results.

<h3 id="list-deployments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "deployments": ""
}
```

<h3 id="list-deployments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deployments List|[deploymentList](#schemadeploymentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create deployment

<a id="opIdfunctionsCreateDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -F 'entrypoint=string' \
  -F 'commands=string' \
  -F 'code=string' \
  -F 'activate=true'
```

`POST /functions/{functionId}/deployments`

Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).

Use the "command" param to set the entrypoint used to execute your code.

> Body parameter

```yaml
entrypoint: string
commands: string
code: string
activate: true
```

<h3 id="create-deployment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» entrypoint|body|string|false|Entrypoint File.|
|» commands|body|string|false|Build Commands.|
|» code|body|string|true|Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.|
|» activate|body|boolean|true|Automatically activate the deployment when it is finished building.|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-deployment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create duplicate deployment

<a id="opIdfunctionsCreateDuplicateDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/duplicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "deploymentId": "string",
    "buildId": "string"
  }'
```

`POST /functions/{functionId}/deployments/duplicate`

Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.

> Body parameter

```json
{
  "deploymentId": "string",
  "buildId": "string"
}
```

<h3 id="create-duplicate-deployment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» deploymentId|body|string|true|Deployment ID.|
|» buildId|body|string|false|Build unique ID.|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-duplicate-deployment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create template deployment

<a id="opIdfunctionsCreateTemplateDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/template \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "repository": "string",
    "owner": "string",
    "rootDirectory": "string",
    "version": "string",
    "activate": true
  }'
```

`POST /functions/{functionId}/deployments/template`

Create a deployment based on a template.

Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/functions#listTemplates) to find the template details.

> Body parameter

```json
{
  "repository": "string",
  "owner": "string",
  "rootDirectory": "string",
  "version": "string",
  "activate": true
}
```

<h3 id="create-template-deployment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» repository|body|string|true|Repository name of the template.|
|» owner|body|string|true|The name of the owner of the template.|
|» rootDirectory|body|string|true|Path to function code in the template repo.|
|» version|body|string|true|Version (tag) for the repo linked to the function template.|
|» activate|body|boolean|false|Automatically activate the deployment when it is finished building.|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-template-deployment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create VCS deployment

<a id="opIdfunctionsCreateVcsDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/vcs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "type": "branch",
    "reference": "string",
    "activate": true
  }'
```

`POST /functions/{functionId}/deployments/vcs`

Create a deployment when a function is connected to VCS.

This endpoint lets you create deployment from a branch, commit, or a tag.

> Body parameter

```json
{
  "type": "branch",
  "reference": "string",
  "activate": true
}
```

<h3 id="create-vcs-deployment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» type|body|string|true|Type of reference passed. Allowed values are: branch, commit|
|» reference|body|string|true|VCS reference to create deployment from. Depending on type this can be: branch name, commit hash|
|» activate|body|boolean|false|Automatically activate the deployment when it is finished building.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|branch|
|» type|commit|

> Example responses

> 202 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="create-vcs-deployment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get deployment

<a id="opIdfunctionsGetDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/{functionId}/deployments/{deploymentId}`

Get a function deployment by its unique ID.

<h3 id="get-deployment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|deploymentId|path|string|true|Deployment ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="get-deployment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete deployment

<a id="opIdfunctionsDeleteDeployment"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /functions/{functionId}/deployments/{deploymentId}`

Delete a code deployment by its unique ID.

<h3 id="delete-deployment-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|deploymentId|path|string|true|Deployment ID.|

<h3 id="delete-deployment-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get deployment download

<a id="opIdfunctionsGetDeploymentDownload"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/string/download \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /functions/{functionId}/deployments/{deploymentId}/download`

Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

<h3 id="get-deployment-download-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|deploymentId|path|string|true|Deployment ID.|
|type|query|string|false|Deployment file to download. Can be: "source", "output".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|source|
|type|output|

<h3 id="get-deployment-download-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key & JWT
</aside>

## Update deployment status

<a id="opIdfunctionsUpdateDeploymentStatus"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/deployments/string/status \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`PATCH /functions/{functionId}/deployments/{deploymentId}/status`

Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.

<h3 id="update-deployment-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|deploymentId|path|string|true|Deployment ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

<h3 id="update-deployment-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deployment|[deployment](#schemadeployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List executions

<a id="opIdfunctionsListExecutions"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/executions \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /functions/{functionId}/executions`

Get a list of all the current user function execution logs. You can use the query params to filter your results.

<h3 id="list-executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "executions": ""
}
```

<h3 id="list-executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Executions List|[executionList](#schemaexecutionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Create execution

<a id="opIdfunctionsCreateExecution"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/executions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -d '{
    "body": "string",
    "async": true,
    "path": "string",
    "method": "GET",
    "headers": "string",
    "scheduledAt": "string"
  }'
```

`POST /functions/{functionId}/executions`

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

> Body parameter

```json
{
  "body": "string",
  "async": true,
  "path": "string",
  "method": "GET",
  "headers": "string",
  "scheduledAt": "string"
}
```

<h3 id="create-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|body|body|object|false|none|
|» body|body|string|false|HTTP body of execution. Default value is empty string.|
|» async|body|boolean|false|Execute code in the background. Default value is false.|
|» path|body|string|false|HTTP path of execution. Path can include query params. Default value is /|
|» method|body|string|false|HTTP method of execution. Default value is GET.|
|» headers|body|string|false|HTTP headers of execution. Defaults to empty.|
|» scheduledAt|body|string|false|Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|GET|
|» method|POST|
|» method|PUT|
|» method|PATCH|
|» method|DELETE|
|» method|OPTIONS|

<h3 id="create-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Execution|[execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Get execution

<a id="opIdfunctionsGetExecution"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/executions/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`GET /functions/{functionId}/executions/{executionId}`

Get a function execution log by its unique ID.

<h3 id="get-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|executionId|path|string|true|Execution ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "any"
  ],
  "functionId": "5e5ea6g16897e",
  "deploymentId": "5e5ea5c16897e",
  "trigger": "http",
  "status": "processing",
  "requestMethod": "GET",
  "requestPath": "/articles?id=5",
  "requestHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "responseStatusCode": 200,
  "responseBody": "",
  "responseHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "logs": "",
  "errors": "",
  "duration": 0.4,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Execution|[execution](#schemaexecution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Session & Key & JWT
</aside>

## Delete execution

<a id="opIdfunctionsDeleteExecution"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/executions/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /functions/{functionId}/executions/{executionId}`

Delete a function execution by its unique ID.

<h3 id="delete-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function ID.|
|executionId|path|string|true|Execution ID.|

<h3 id="delete-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List variables

<a id="opIdfunctionsListVariables"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/variables \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/{functionId}/variables`

Get a list of all variables of a specific function.

<h3 id="list-variables-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function unique ID.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "variables": ""
}
```

<h3 id="list-variables-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variables List|[variableList](#schemavariablelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create variable

<a id="opIdfunctionsCreateVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "value": "string",
    "secret": true
  }'
```

`POST /functions/{functionId}/variables`

Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.

> Body parameter

```json
{
  "key": "string",
  "value": "string",
  "secret": true
}
```

<h3 id="create-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function unique ID.|
|body|body|object|false|none|
|» key|body|string|true|Variable key. Max length: 255 chars.|
|» value|body|string|true|Variable value. Max length: 8192 chars.|
|» secret|body|boolean|false|Secret variables can be updated or deleted, but only functions can read them during build and runtime.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

<h3 id="create-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Variable|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get variable

<a id="opIdfunctionsGetVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/variables/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /functions/{functionId}/variables/{variableId}`

Get a variable by its unique ID.

<h3 id="get-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function unique ID.|
|variableId|path|string|true|Variable unique ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

<h3 id="get-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update variable

<a id="opIdfunctionsUpdateVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/variables/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "key": "string",
    "value": "string",
    "secret": true
  }'
```

`PUT /functions/{functionId}/variables/{variableId}`

Update variable by its unique ID.

> Body parameter

```json
{
  "key": "string",
  "value": "string",
  "secret": true
}
```

<h3 id="update-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function unique ID.|
|variableId|path|string|true|Variable unique ID.|
|body|body|object|false|none|
|» key|body|string|true|Variable key. Max length: 255 chars.|
|» value|body|string|false|Variable value. Max length: 8192 chars.|
|» secret|body|boolean|false|Secret variables can be updated or deleted, but only functions can read them during build and runtime.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

<h3 id="update-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Variable|[variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete variable

<a id="opIdfunctionsDeleteVariable"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/functions/string/variables/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /functions/{functionId}/variables/{variableId}`

Delete a variable by its unique ID.

<h3 id="delete-variable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|functionId|path|string|true|Function unique ID.|
|variableId|path|string|true|Variable unique ID.|

<h3 id="delete-variable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

<h1 id="appwrite-graphql">graphql</h1>

The GraphQL API allows you to query and mutate your Appwrite server using GraphQL.

## GraphQL endpoint

<a id="opIdgraphqlQuery"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/graphql \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`POST /graphql`

Execute a GraphQL mutation.

> Example responses

> 200 Response

```json
[]
```

<h3 id="graphql-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Any|[any](#schemaany)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key & Session & JWT
</aside>

## GraphQL endpoint

<a id="opIdgraphqlMutation"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/graphql/mutation \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}"
```

`POST /graphql/mutation`

Execute a GraphQL mutation.

> Example responses

> 200 Response

```json
[]
```

<h3 id="graphql-endpoint-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Any|[any](#schemaany)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key & Session & JWT
</aside>

<h1 id="appwrite-messaging">messaging</h1>

The Messaging service allows you to send messages to any provider type (SMTP, push notification, SMS, etc.).

## List messages

<a id="opIdmessagingListMessages"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/messages`

Get a list of all messages from the current Appwrite project.

<h3 id="list-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "messages": ""
}
```

<h3 id="list-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message list|[messageList](#schemamessagelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create email

<a id="opIdmessagingCreateEmail"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/email \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "messageId": "string",
    "subject": "string",
    "content": "string",
    "topics": [
      "string"
    ],
    "users": [
      "string"
    ],
    "targets": [
      "string"
    ],
    "cc": [
      "string"
    ],
    "bcc": [
      "string"
    ],
    "attachments": [
      "string"
    ],
    "draft": true,
    "html": true,
    "scheduledAt": "string"
  }'
```

`POST /messaging/messages/email`

Create a new email message.

> Body parameter

```json
{
  "messageId": "string",
  "subject": "string",
  "content": "string",
  "topics": [
    "string"
  ],
  "users": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "bcc": [
    "string"
  ],
  "attachments": [
    "string"
  ],
  "draft": true,
  "html": true,
  "scheduledAt": "string"
}
```

<h3 id="create-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» messageId|body|string|true|Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» subject|body|string|true|Email Subject.|
|» content|body|string|true|Email Content.|
|» topics|body|[string]|false|List of Topic IDs.|
|» users|body|[string]|false|List of User IDs.|
|» targets|body|[string]|false|List of Targets IDs.|
|» cc|body|[string]|false|Array of target IDs to be added as CC.|
|» bcc|body|[string]|false|Array of target IDs to be added as BCC.|
|» attachments|body|[string]|false|Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.|
|» draft|body|boolean|false|Is message a draft|
|» html|body|boolean|false|Is content of type HTML|
|» scheduledAt|body|string|false|Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="create-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update email

<a id="opIdmessagingUpdateEmail"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/email/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "topics": [
      "string"
    ],
    "users": [
      "string"
    ],
    "targets": [
      "string"
    ],
    "subject": "string",
    "content": "string",
    "draft": true,
    "html": true,
    "cc": [
      "string"
    ],
    "bcc": [
      "string"
    ],
    "scheduledAt": "string",
    "attachments": [
      "string"
    ]
  }'
```

`PATCH /messaging/messages/email/{messageId}`

Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.


> Body parameter

```json
{
  "topics": [
    "string"
  ],
  "users": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "subject": "string",
  "content": "string",
  "draft": true,
  "html": true,
  "cc": [
    "string"
  ],
  "bcc": [
    "string"
  ],
  "scheduledAt": "string",
  "attachments": [
    "string"
  ]
}
```

<h3 id="update-email-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|
|body|body|object|false|none|
|» topics|body|[string]|false|List of Topic IDs.|
|» users|body|[string]|false|List of User IDs.|
|» targets|body|[string]|false|List of Targets IDs.|
|» subject|body|string|false|Email Subject.|
|» content|body|string|false|Email Content.|
|» draft|body|boolean|false|Is message a draft|
|» html|body|boolean|false|Is content of type HTML|
|» cc|body|[string]|false|Array of target IDs to be added as CC.|
|» bcc|body|[string]|false|Array of target IDs to be added as BCC.|
|» scheduledAt|body|string|false|Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.|
|» attachments|body|[string]|false|Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="update-email-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create push notification

<a id="opIdmessagingCreatePush"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "messageId": "string",
    "title": "string",
    "body": "string",
    "topics": [
      "string"
    ],
    "users": [
      "string"
    ],
    "targets": [
      "string"
    ],
    "data": {},
    "action": "string",
    "image": "string",
    "icon": "string",
    "sound": "string",
    "color": "string",
    "tag": "string",
    "badge": 0,
    "draft": true,
    "scheduledAt": "string",
    "contentAvailable": true,
    "critical": true,
    "priority": "normal"
  }'
```

`POST /messaging/messages/push`

Create a new push notification.

> Body parameter

```json
{
  "messageId": "string",
  "title": "string",
  "body": "string",
  "topics": [
    "string"
  ],
  "users": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "data": {},
  "action": "string",
  "image": "string",
  "icon": "string",
  "sound": "string",
  "color": "string",
  "tag": "string",
  "badge": 0,
  "draft": true,
  "scheduledAt": "string",
  "contentAvailable": true,
  "critical": true,
  "priority": "normal"
}
```

<h3 id="create-push-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» messageId|body|string|true|Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» title|body|string|false|Title for push notification.|
|» body|body|string|false|Body for push notification.|
|» topics|body|[string]|false|List of Topic IDs.|
|» users|body|[string]|false|List of User IDs.|
|» targets|body|[string]|false|List of Targets IDs.|
|» data|body|object|false|Additional key-value pair data for push notification.|
|» action|body|string|false|Action for push notification.|
|» image|body|string|false|Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.|
|» icon|body|string|false|Icon for push notification. Available only for Android and Web Platform.|
|» sound|body|string|false|Sound for push notification. Available only for Android and iOS Platform.|
|» color|body|string|false|Color for push notification. Available only for Android Platform.|
|» tag|body|string|false|Tag for push notification. Available only for Android Platform.|
|» badge|body|integer|false|Badge for push notification. Available only for iOS Platform.|
|» draft|body|boolean|false|Is message a draft|
|» scheduledAt|body|string|false|Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.|
|» contentAvailable|body|boolean|false|If set to true, the notification will be delivered in the background. Available only for iOS Platform.|
|» critical|body|boolean|false|If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.|
|» priority|body|string|false|Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» priority|normal|
|» priority|high|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="create-push-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update push notification

<a id="opIdmessagingUpdatePush"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/push/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "topics": [
      "string"
    ],
    "users": [
      "string"
    ],
    "targets": [
      "string"
    ],
    "title": "string",
    "body": "string",
    "data": {},
    "action": "string",
    "image": "string",
    "icon": "string",
    "sound": "string",
    "color": "string",
    "tag": "string",
    "badge": 0,
    "draft": true,
    "scheduledAt": "string",
    "contentAvailable": true,
    "critical": true,
    "priority": "normal"
  }'
```

`PATCH /messaging/messages/push/{messageId}`

Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.


> Body parameter

```json
{
  "topics": [
    "string"
  ],
  "users": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "title": "string",
  "body": "string",
  "data": {},
  "action": "string",
  "image": "string",
  "icon": "string",
  "sound": "string",
  "color": "string",
  "tag": "string",
  "badge": 0,
  "draft": true,
  "scheduledAt": "string",
  "contentAvailable": true,
  "critical": true,
  "priority": "normal"
}
```

<h3 id="update-push-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|
|body|body|object|false|none|
|» topics|body|[string]|false|List of Topic IDs.|
|» users|body|[string]|false|List of User IDs.|
|» targets|body|[string]|false|List of Targets IDs.|
|» title|body|string|false|Title for push notification.|
|» body|body|string|false|Body for push notification.|
|» data|body|object|false|Additional Data for push notification.|
|» action|body|string|false|Action for push notification.|
|» image|body|string|false|Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.|
|» icon|body|string|false|Icon for push notification. Available only for Android and Web platforms.|
|» sound|body|string|false|Sound for push notification. Available only for Android and iOS platforms.|
|» color|body|string|false|Color for push notification. Available only for Android platforms.|
|» tag|body|string|false|Tag for push notification. Available only for Android platforms.|
|» badge|body|integer|false|Badge for push notification. Available only for iOS platforms.|
|» draft|body|boolean|false|Is message a draft|
|» scheduledAt|body|string|false|Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.|
|» contentAvailable|body|boolean|false|If set to true, the notification will be delivered in the background. Available only for iOS Platform.|
|» critical|body|boolean|false|If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.|
|» priority|body|string|false|Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» priority|normal|
|» priority|high|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="update-push-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create SMS

<a id="opIdmessagingCreateSms"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "messageId": "string",
    "content": "string",
    "topics": [
      "string"
    ],
    "users": [
      "string"
    ],
    "targets": [
      "string"
    ],
    "draft": true,
    "scheduledAt": "string"
  }'
```

`POST /messaging/messages/sms`

Create a new SMS message.

> Body parameter

```json
{
  "messageId": "string",
  "content": "string",
  "topics": [
    "string"
  ],
  "users": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "draft": true,
  "scheduledAt": "string"
}
```

<h3 id="create-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» messageId|body|string|true|Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» content|body|string|true|SMS Content.|
|» topics|body|[string]|false|List of Topic IDs.|
|» users|body|[string]|false|List of User IDs.|
|» targets|body|[string]|false|List of Targets IDs.|
|» draft|body|boolean|false|Is message a draft|
|» scheduledAt|body|string|false|Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="create-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update SMS

<a id="opIdmessagingUpdateSms"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/sms/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "topics": [
      "string"
    ],
    "users": [
      "string"
    ],
    "targets": [
      "string"
    ],
    "content": "string",
    "draft": true,
    "scheduledAt": "string"
  }'
```

`PATCH /messaging/messages/sms/{messageId}`

Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.


> Body parameter

```json
{
  "topics": [
    "string"
  ],
  "users": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "content": "string",
  "draft": true,
  "scheduledAt": "string"
}
```

<h3 id="update-sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|
|body|body|object|false|none|
|» topics|body|[string]|false|List of Topic IDs.|
|» users|body|[string]|false|List of User IDs.|
|» targets|body|[string]|false|List of Targets IDs.|
|» content|body|string|false|Email Content.|
|» draft|body|boolean|false|Is message a draft|
|» scheduledAt|body|string|false|Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="update-sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get message

<a id="opIdmessagingGetMessage"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/messages/{messageId}`

Get a message by its unique ID.


<h3 id="get-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

<h3 id="get-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message|[message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete message

<a id="opIdmessagingDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /messaging/messages/{messageId}`

Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.

<h3 id="delete-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|

<h3 id="delete-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List message logs

<a id="opIdmessagingListMessageLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/string/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/messages/{messageId}/logs`

Get the message activity logs listed by its unique ID.

<h3 id="list-message-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "logs": ""
}
```

<h3 id="list-message-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs List|[logList](#schemaloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List message targets

<a id="opIdmessagingListTargets"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/messages/string/targets \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/messages/{messageId}/targets`

Get a list of the targets associated with a message.

<h3 id="list-message-targets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|Message ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "targets": ""
}
```

<h3 id="list-message-targets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Target list|[targetList](#schematargetlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List providers

<a id="opIdmessagingListProviders"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/providers`

Get a list of all providers from the current Appwrite project.

<h3 id="list-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "providers": ""
}
```

<h3 id="list-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider list|[providerList](#schemaproviderlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create APNS provider

<a id="opIdmessagingCreateApnsProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/apns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "authKey": "string",
    "authKeyId": "string",
    "teamId": "string",
    "bundleId": "string",
    "sandbox": true,
    "enabled": true
  }'
```

`POST /messaging/providers/apns`

Create a new Apple Push Notification service provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "authKey": "string",
  "authKeyId": "string",
  "teamId": "string",
  "bundleId": "string",
  "sandbox": true,
  "enabled": true
}
```

<h3 id="create-apns-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» authKey|body|string|false|APNS authentication key.|
|» authKeyId|body|string|false|APNS authentication key ID.|
|» teamId|body|string|false|APNS team ID.|
|» bundleId|body|string|false|APNS bundle ID.|
|» sandbox|body|boolean|false|Use APNS sandbox environment.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-apns-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update APNS provider

<a id="opIdmessagingUpdateApnsProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/apns/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "authKey": "string",
    "authKeyId": "string",
    "teamId": "string",
    "bundleId": "string",
    "sandbox": true
  }'
```

`PATCH /messaging/providers/apns/{providerId}`

Update a Apple Push Notification service provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "authKey": "string",
  "authKeyId": "string",
  "teamId": "string",
  "bundleId": "string",
  "sandbox": true
}
```

<h3 id="update-apns-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» authKey|body|string|false|APNS authentication key.|
|» authKeyId|body|string|false|APNS authentication key ID.|
|» teamId|body|string|false|APNS team ID.|
|» bundleId|body|string|false|APNS bundle ID.|
|» sandbox|body|boolean|false|Use APNS sandbox environment.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-apns-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create FCM provider

<a id="opIdmessagingCreateFcmProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/fcm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "serviceAccountJSON": {},
    "enabled": true
  }'
```

`POST /messaging/providers/fcm`

Create a new Firebase Cloud Messaging provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "serviceAccountJSON": {},
  "enabled": true
}
```

<h3 id="create-fcm-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» serviceAccountJSON|body|object|false|FCM service account JSON.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-fcm-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update FCM provider

<a id="opIdmessagingUpdateFcmProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/fcm/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "serviceAccountJSON": {}
  }'
```

`PATCH /messaging/providers/fcm/{providerId}`

Update a Firebase Cloud Messaging provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "serviceAccountJSON": {}
}
```

<h3 id="update-fcm-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» serviceAccountJSON|body|object|false|FCM service account JSON.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-fcm-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Mailgun provider

<a id="opIdmessagingCreateMailgunProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/mailgun \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "apiKey": "string",
    "domain": "string",
    "isEuRegion": true,
    "fromName": "string",
    "fromEmail": "string",
    "replyToName": "string",
    "replyToEmail": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/mailgun`

Create a new Mailgun provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "apiKey": "string",
  "domain": "string",
  "isEuRegion": true,
  "fromName": "string",
  "fromEmail": "string",
  "replyToName": "string",
  "replyToEmail": "string",
  "enabled": true
}
```

<h3 id="create-mailgun-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» apiKey|body|string|false|Mailgun API Key.|
|» domain|body|string|false|Mailgun Domain.|
|» isEuRegion|body|boolean|false|Set as EU region.|
|» fromName|body|string|false|Sender Name.|
|» fromEmail|body|string|false|Sender email address.|
|» replyToName|body|string|false|Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.|
|» replyToEmail|body|string|false|Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-mailgun-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Mailgun provider

<a id="opIdmessagingUpdateMailgunProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/mailgun/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "apiKey": "string",
    "domain": "string",
    "isEuRegion": true,
    "enabled": true,
    "fromName": "string",
    "fromEmail": "string",
    "replyToName": "string",
    "replyToEmail": "string"
  }'
```

`PATCH /messaging/providers/mailgun/{providerId}`

Update a Mailgun provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "apiKey": "string",
  "domain": "string",
  "isEuRegion": true,
  "enabled": true,
  "fromName": "string",
  "fromEmail": "string",
  "replyToName": "string",
  "replyToEmail": "string"
}
```

<h3 id="update-mailgun-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» apiKey|body|string|false|Mailgun API Key.|
|» domain|body|string|false|Mailgun Domain.|
|» isEuRegion|body|boolean|false|Set as EU region.|
|» enabled|body|boolean|false|Set as enabled.|
|» fromName|body|string|false|Sender Name.|
|» fromEmail|body|string|false|Sender email address.|
|» replyToName|body|string|false|Name set in the reply to field for the mail. Default value is sender name.|
|» replyToEmail|body|string|false|Email set in the reply to field for the mail. Default value is sender email.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-mailgun-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Msg91 provider

<a id="opIdmessagingCreateMsg91Provider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/msg91 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "templateId": "string",
    "senderId": "string",
    "authKey": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/msg91`

Create a new MSG91 provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "templateId": "string",
  "senderId": "string",
  "authKey": "string",
  "enabled": true
}
```

<h3 id="create-msg91-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» templateId|body|string|false|Msg91 template ID|
|» senderId|body|string|false|Msg91 sender ID.|
|» authKey|body|string|false|Msg91 auth key.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-msg91-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Msg91 provider

<a id="opIdmessagingUpdateMsg91Provider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/msg91/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "templateId": "string",
    "senderId": "string",
    "authKey": "string"
  }'
```

`PATCH /messaging/providers/msg91/{providerId}`

Update a MSG91 provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "templateId": "string",
  "senderId": "string",
  "authKey": "string"
}
```

<h3 id="update-msg91-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» templateId|body|string|false|Msg91 template ID.|
|» senderId|body|string|false|Msg91 sender ID.|
|» authKey|body|string|false|Msg91 auth key.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-msg91-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Sendgrid provider

<a id="opIdmessagingCreateSendgridProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/sendgrid \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "apiKey": "string",
    "fromName": "string",
    "fromEmail": "string",
    "replyToName": "string",
    "replyToEmail": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/sendgrid`

Create a new Sendgrid provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "apiKey": "string",
  "fromName": "string",
  "fromEmail": "string",
  "replyToName": "string",
  "replyToEmail": "string",
  "enabled": true
}
```

<h3 id="create-sendgrid-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» apiKey|body|string|false|Sendgrid API key.|
|» fromName|body|string|false|Sender Name.|
|» fromEmail|body|string|false|Sender email address.|
|» replyToName|body|string|false|Name set in the reply to field for the mail. Default value is sender name.|
|» replyToEmail|body|string|false|Email set in the reply to field for the mail. Default value is sender email.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-sendgrid-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Sendgrid provider

<a id="opIdmessagingUpdateSendgridProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/sendgrid/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "apiKey": "string",
    "fromName": "string",
    "fromEmail": "string",
    "replyToName": "string",
    "replyToEmail": "string"
  }'
```

`PATCH /messaging/providers/sendgrid/{providerId}`

Update a Sendgrid provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "apiKey": "string",
  "fromName": "string",
  "fromEmail": "string",
  "replyToName": "string",
  "replyToEmail": "string"
}
```

<h3 id="update-sendgrid-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» apiKey|body|string|false|Sendgrid API key.|
|» fromName|body|string|false|Sender Name.|
|» fromEmail|body|string|false|Sender email address.|
|» replyToName|body|string|false|Name set in the Reply To field for the mail. Default value is Sender Name.|
|» replyToEmail|body|string|false|Email set in the Reply To field for the mail. Default value is Sender Email.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-sendgrid-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create SMTP provider

<a id="opIdmessagingCreateSmtpProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/smtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "host": "string",
    "port": 0,
    "username": "string",
    "password": "string",
    "encryption": "none",
    "autoTLS": true,
    "mailer": "string",
    "fromName": "string",
    "fromEmail": "string",
    "replyToName": "string",
    "replyToEmail": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/smtp`

Create a new SMTP provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "host": "string",
  "port": 0,
  "username": "string",
  "password": "string",
  "encryption": "none",
  "autoTLS": true,
  "mailer": "string",
  "fromName": "string",
  "fromEmail": "string",
  "replyToName": "string",
  "replyToEmail": "string",
  "enabled": true
}
```

<h3 id="create-smtp-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» host|body|string|true|SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.|
|» port|body|integer|false|The default SMTP server port.|
|» username|body|string|false|Authentication username.|
|» password|body|string|false|Authentication password.|
|» encryption|body|string|false|Encryption type. Can be omitted, 'ssl', or 'tls'|
|» autoTLS|body|boolean|false|Enable SMTP AutoTLS feature.|
|» mailer|body|string|false|The value to use for the X-Mailer header.|
|» fromName|body|string|false|Sender Name.|
|» fromEmail|body|string|false|Sender email address.|
|» replyToName|body|string|false|Name set in the reply to field for the mail. Default value is sender name.|
|» replyToEmail|body|string|false|Email set in the reply to field for the mail. Default value is sender email.|
|» enabled|body|boolean|false|Set as enabled.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encryption|none|
|» encryption|ssl|
|» encryption|tls|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-smtp-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update SMTP provider

<a id="opIdmessagingUpdateSmtpProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/smtp/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "host": "string",
    "port": 0,
    "username": "string",
    "password": "string",
    "encryption": "none",
    "autoTLS": true,
    "mailer": "string",
    "fromName": "string",
    "fromEmail": "string",
    "replyToName": "string",
    "replyToEmail": "string",
    "enabled": true
  }'
```

`PATCH /messaging/providers/smtp/{providerId}`

Update a SMTP provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "host": "string",
  "port": 0,
  "username": "string",
  "password": "string",
  "encryption": "none",
  "autoTLS": true,
  "mailer": "string",
  "fromName": "string",
  "fromEmail": "string",
  "replyToName": "string",
  "replyToEmail": "string",
  "enabled": true
}
```

<h3 id="update-smtp-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» host|body|string|false|SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.|
|» port|body|integer|false|SMTP port.|
|» username|body|string|false|Authentication username.|
|» password|body|string|false|Authentication password.|
|» encryption|body|string|false|Encryption type. Can be 'ssl' or 'tls'|
|» autoTLS|body|boolean|false|Enable SMTP AutoTLS feature.|
|» mailer|body|string|false|The value to use for the X-Mailer header.|
|» fromName|body|string|false|Sender Name.|
|» fromEmail|body|string|false|Sender email address.|
|» replyToName|body|string|false|Name set in the Reply To field for the mail. Default value is Sender Name.|
|» replyToEmail|body|string|false|Email set in the Reply To field for the mail. Default value is Sender Email.|
|» enabled|body|boolean|false|Set as enabled.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» encryption|none|
|» encryption|ssl|
|» encryption|tls|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-smtp-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Telesign provider

<a id="opIdmessagingCreateTelesignProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/telesign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "from": "string",
    "customerId": "string",
    "apiKey": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/telesign`

Create a new Telesign provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "from": "string",
  "customerId": "string",
  "apiKey": "string",
  "enabled": true
}
```

<h3 id="create-telesign-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» from|body|string|false|Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» customerId|body|string|false|Telesign customer ID.|
|» apiKey|body|string|false|Telesign API key.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-telesign-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Telesign provider

<a id="opIdmessagingUpdateTelesignProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/telesign/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "customerId": "string",
    "apiKey": "string",
    "from": "string"
  }'
```

`PATCH /messaging/providers/telesign/{providerId}`

Update a Telesign provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "customerId": "string",
  "apiKey": "string",
  "from": "string"
}
```

<h3 id="update-telesign-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» customerId|body|string|false|Telesign customer ID.|
|» apiKey|body|string|false|Telesign API key.|
|» from|body|string|false|Sender number.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-telesign-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Textmagic provider

<a id="opIdmessagingCreateTextmagicProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/textmagic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "from": "string",
    "username": "string",
    "apiKey": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/textmagic`

Create a new Textmagic provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "from": "string",
  "username": "string",
  "apiKey": "string",
  "enabled": true
}
```

<h3 id="create-textmagic-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» from|body|string|false|Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» username|body|string|false|Textmagic username.|
|» apiKey|body|string|false|Textmagic apiKey.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-textmagic-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Textmagic provider

<a id="opIdmessagingUpdateTextmagicProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/textmagic/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "username": "string",
    "apiKey": "string",
    "from": "string"
  }'
```

`PATCH /messaging/providers/textmagic/{providerId}`

Update a Textmagic provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "username": "string",
  "apiKey": "string",
  "from": "string"
}
```

<h3 id="update-textmagic-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» username|body|string|false|Textmagic username.|
|» apiKey|body|string|false|Textmagic apiKey.|
|» from|body|string|false|Sender number.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-textmagic-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Twilio provider

<a id="opIdmessagingCreateTwilioProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/twilio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "from": "string",
    "accountSid": "string",
    "authToken": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/twilio`

Create a new Twilio provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "from": "string",
  "accountSid": "string",
  "authToken": "string",
  "enabled": true
}
```

<h3 id="create-twilio-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» from|body|string|false|Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» accountSid|body|string|false|Twilio account secret ID.|
|» authToken|body|string|false|Twilio authentication token.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-twilio-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Twilio provider

<a id="opIdmessagingUpdateTwilioProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/twilio/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "accountSid": "string",
    "authToken": "string",
    "from": "string"
  }'
```

`PATCH /messaging/providers/twilio/{providerId}`

Update a Twilio provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "accountSid": "string",
  "authToken": "string",
  "from": "string"
}
```

<h3 id="update-twilio-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» accountSid|body|string|false|Twilio account secret ID.|
|» authToken|body|string|false|Twilio authentication token.|
|» from|body|string|false|Sender number.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-twilio-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create Vonage provider

<a id="opIdmessagingCreateVonageProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/vonage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "providerId": "string",
    "name": "string",
    "from": "string",
    "apiKey": "string",
    "apiSecret": "string",
    "enabled": true
  }'
```

`POST /messaging/providers/vonage`

Create a new Vonage provider.

> Body parameter

```json
{
  "providerId": "string",
  "name": "string",
  "from": "string",
  "apiKey": "string",
  "apiSecret": "string",
  "enabled": true
}
```

<h3 id="create-vonage-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerId|body|string|true|Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.|
|» name|body|string|true|Provider name.|
|» from|body|string|false|Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.|
|» apiKey|body|string|false|Vonage API key.|
|» apiSecret|body|string|false|Vonage API secret.|
|» enabled|body|boolean|false|Set as enabled.|

> Example responses

> 201 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="create-vonage-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update Vonage provider

<a id="opIdmessagingUpdateVonageProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/vonage/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "enabled": true,
    "apiKey": "string",
    "apiSecret": "string",
    "from": "string"
  }'
```

`PATCH /messaging/providers/vonage/{providerId}`

Update a Vonage provider by its unique ID.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "apiKey": "string",
  "apiSecret": "string",
  "from": "string"
}
```

<h3 id="update-vonage-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|body|body|object|false|none|
|» name|body|string|false|Provider name.|
|» enabled|body|boolean|false|Set as enabled.|
|» apiKey|body|string|false|Vonage API key.|
|» apiSecret|body|string|false|Vonage API secret.|
|» from|body|string|false|Sender number.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="update-vonage-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get provider

<a id="opIdmessagingGetProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/providers/{providerId}`

Get a provider by its unique ID.


<h3 id="get-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|

> Example responses

> 200 Response

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

<h3 id="get-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Provider|[provider](#schemaprovider)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete provider

<a id="opIdmessagingDeleteProvider"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /messaging/providers/{providerId}`

Delete a provider by its unique ID.

<h3 id="delete-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|

<h3 id="delete-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List provider logs

<a id="opIdmessagingListProviderLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/providers/string/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/providers/{providerId}/logs`

Get the provider activity logs listed by its unique ID.

<h3 id="list-provider-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Provider ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "logs": ""
}
```

<h3 id="list-provider-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs List|[logList](#schemaloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List subscriber logs

<a id="opIdmessagingListSubscriberLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/subscribers/string/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/subscribers/{subscriberId}/logs`

Get the subscriber activity logs listed by its unique ID.

<h3 id="list-subscriber-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriberId|path|string|true|Subscriber ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "logs": ""
}
```

<h3 id="list-subscriber-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs List|[logList](#schemaloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List topics

<a id="opIdmessagingListTopics"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/topics`

Get a list of all topics from the current Appwrite project.

<h3 id="list-topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "topics": ""
}
```

<h3 id="list-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Topic list|[topicList](#schematopiclist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create topic

<a id="opIdmessagingCreateTopic"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "topicId": "string",
    "name": "string",
    "subscribe": [
      "string"
    ]
  }'
```

`POST /messaging/topics`

Create a new topic.

> Body parameter

```json
{
  "topicId": "string",
  "name": "string",
  "subscribe": [
    "string"
  ]
}
```

<h3 id="create-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» topicId|body|string|true|Topic ID. Choose a custom Topic ID or a new Topic ID.|
|» name|body|string|true|Topic Name.|
|» subscribe|body|[string]|false|An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.|

> Example responses

> 201 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "events",
  "emailTotal": 100,
  "smsTotal": 100,
  "pushTotal": 100,
  "subscribe": "users"
}
```

<h3 id="create-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Topic|[topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get topic

<a id="opIdmessagingGetTopic"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/topics/{topicId}`

Get a topic by its unique ID.


<h3 id="get-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID.|

> Example responses

> 200 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "events",
  "emailTotal": 100,
  "smsTotal": 100,
  "pushTotal": 100,
  "subscribe": "users"
}
```

<h3 id="get-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Topic|[topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete topic

<a id="opIdmessagingDeleteTopic"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /messaging/topics/{topicId}`

Delete a topic by its unique ID.

<h3 id="delete-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID.|

<h3 id="delete-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update topic

<a id="opIdmessagingUpdateTopic"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "subscribe": [
      "string"
    ]
  }'
```

`PATCH /messaging/topics/{topicId}`

Update a topic by its unique ID.


> Body parameter

```json
{
  "name": "string",
  "subscribe": [
    "string"
  ]
}
```

<h3 id="update-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID.|
|body|body|object|false|none|
|» name|body|string|false|Topic Name.|
|» subscribe|body|[string]|false|An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.|

> Example responses

> 200 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "events",
  "emailTotal": 100,
  "smsTotal": 100,
  "pushTotal": 100,
  "subscribe": "users"
}
```

<h3 id="update-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Topic|[topic](#schematopic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List topic logs

<a id="opIdmessagingListTopicLogs"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string/logs \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/topics/{topicId}/logs`

Get the topic activity logs listed by its unique ID.

<h3 id="list-topic-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "logs": ""
}
```

<h3 id="list-topic-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs List|[logList](#schemaloglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## List subscribers

<a id="opIdmessagingListSubscribers"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string/subscribers \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/topics/{topicId}/subscribers`

Get a list of all subscribers from the current Appwrite project.

<h3 id="list-subscribers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID. The topic ID subscribed to.|
|queries|query|[string]|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled|
|search|query|string|false|Search term to filter your list results. Max length: 256 chars.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "subscribers": ""
}
```

<h3 id="list-subscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscriber list|[subscriberList](#schemasubscriberlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create subscriber

<a id="opIdmessagingCreateSubscriber"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string/subscribers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "subscriberId": "string",
    "targetId": "string"
  }'
```

`POST /messaging/topics/{topicId}/subscribers`

Create a new subscriber.

> Body parameter

```json
{
  "subscriberId": "string",
  "targetId": "string"
}
```

<h3 id="create-subscriber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID. The topic ID to subscribe to.|
|body|body|object|false|none|
|» subscriberId|body|string|true|Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.|
|» targetId|body|string|true|Target ID. The target ID to link to the specified Topic ID.|

> Example responses

> 201 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "targetId": "259125845563242502",
  "target": {
    "$id": "259125845563242502",
    "$createdAt": "2020-10-15T06:38:00.000+00:00",
    "$updatedAt": "2020-10-15T06:38:00.000+00:00",
    "providerType": "email",
    "providerId": "259125845563242502",
    "name": "ageon-app-email",
    "identifier": "random-mail@email.org",
    "userId": "5e5ea5c16897e"
  },
  "userId": "5e5ea5c16897e",
  "userName": "Aegon Targaryen",
  "topicId": "259125845563242502",
  "providerType": "email"
}
```

<h3 id="create-subscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Subscriber|[subscriber](#schemasubscriber)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & JWT & Session & Key
</aside>

## Get subscriber

<a id="opIdmessagingGetSubscriber"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string/subscribers/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /messaging/topics/{topicId}/subscribers/{subscriberId}`

Get a subscriber by its unique ID.


<h3 id="get-subscriber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID. The topic ID subscribed to.|
|subscriberId|path|string|true|Subscriber ID.|

> Example responses

> 200 Response

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "targetId": "259125845563242502",
  "target": {
    "$id": "259125845563242502",
    "$createdAt": "2020-10-15T06:38:00.000+00:00",
    "$updatedAt": "2020-10-15T06:38:00.000+00:00",
    "providerType": "email",
    "providerId": "259125845563242502",
    "name": "ageon-app-email",
    "identifier": "random-mail@email.org",
    "userId": "5e5ea5c16897e"
  },
  "userId": "5e5ea5c16897e",
  "userName": "Aegon Targaryen",
  "topicId": "259125845563242502",
  "providerType": "email"
}
```

<h3 id="get-subscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscriber|[subscriber](#schemasubscriber)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete subscriber

<a id="opIdmessagingDeleteSubscriber"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/messaging/topics/string/subscribers/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-JWT: ${API_KEY}" \
  -H "X-Appwrite-Session: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /messaging/topics/{topicId}/subscribers/{subscriberId}`

Delete a subscriber by its unique ID.

<h3 id="delete-subscriber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|Topic ID. The topic ID subscribed to.|
|subscriberId|path|string|true|Subscriber ID.|

<h3 id="delete-subscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & JWT & Session & Key
</aside>

<h1 id="appwrite-tokens">tokens</h1>

## List tokens

<a id="opIdtokensList"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/tokens/buckets/string/files/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /tokens/buckets/{bucketId}/files/{fileId}`

List all the tokens created for a specific file or bucket. You can use the query params to filter your results.

<h3 id="list-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File unique ID.|
|queries|query|string|false|Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "tokens": ""
}
```

<h3 id="list-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resource Tokens List|[resourceTokenList](#schemaresourcetokenlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Create file token

<a id="opIdtokensCreateFileToken"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/tokens/buckets/string/files/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "expire": "string"
  }'
```

`POST /tokens/buckets/{bucketId}/files/{fileId}`

Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.

> Body parameter

```json
{
  "expire": "string"
}
```

<h3 id="create-file-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bucketId|path|string|true|Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).|
|fileId|path|string|true|File unique ID.|
|body|body|object|false|none|
|» expire|body|string|false|Token expiry date|

> Example responses

> 201 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceId": "5e5ea5c168bb8:5e5ea5c168bb8",
  "resourceType": "files",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="create-file-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|ResourceToken|[resourceToken](#schemaresourcetoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Get token

<a id="opIdtokensGet"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/tokens/string \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`GET /tokens/{tokenId}`

Get a token by its unique ID.

<h3 id="get-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|Token ID.|

> Example responses

> 200 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceId": "5e5ea5c168bb8:5e5ea5c168bb8",
  "resourceType": "files",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="get-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ResourceToken|[resourceToken](#schemaresourcetoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Delete token

<a id="opIdtokensDelete"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/tokens/string \
  -X DELETE \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}"
```

`DELETE /tokens/{tokenId}`

Delete a token by its unique ID.

<h3 id="delete-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|Token ID.|

<h3 id="delete-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

## Update token

<a id="opIdtokensUpdate"></a>

> Code samples

```bash
curl https://cloud.appwrite.io/v1/tokens/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Appwrite-Project: ${API_KEY}" \
  -H "X-Appwrite-Key: ${API_KEY}" \
  -d '{
    "expire": "string"
  }'
```

`PATCH /tokens/{tokenId}`

Update a token by its unique ID. Use this endpoint to update a token's expiry date.

> Body parameter

```json
{
  "expire": "string"
}
```

<h3 id="update-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenId|path|string|true|Token unique ID.|
|body|body|object|false|none|
|» expire|body|string|false|File token expiry date|

> Example responses

> 200 Response

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceId": "5e5ea5c168bb8:5e5ea5c168bb8",
  "resourceType": "files",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

<h3 id="update-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ResourceToken|[resourceToken](#schemaresourcetoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Project & Key
</aside>

# Schemas

<h2 id="tocS_any">any</h2>
<!-- backwards compatibility -->
<a id="schemaany"></a>
<a id="schema_any"></a>
<a id="tocSany"></a>
<a id="tocsany"></a>

```json
[]
```

Any

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Not found",
  "code": "404",
  "type": "not_found",
  "version": "1.0"
}
```

Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Error message.|
|code|string|true|none|Error code.|
|type|string|true|none|Error type. You can learn more about all the error types at https://appwrite.io/docs/error-codes#errorTypes|
|version|string|true|none|Server version number.|

<h2 id="tocS_documentList">documentList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlist"></a>
<a id="schema_documentList"></a>
<a id="tocSdocumentlist"></a>
<a id="tocsdocumentlist"></a>

```json
{
  "total": 5,
  "documents": ""
}
```

Documents List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of documents documents that matched your query.|
|documents|[[document](#schemadocument)]|true|none|List of documents.|

<h2 id="tocS_collectionList">collectionList</h2>
<!-- backwards compatibility -->
<a id="schemacollectionlist"></a>
<a id="schema_collectionList"></a>
<a id="tocScollectionlist"></a>
<a id="tocscollectionlist"></a>

```json
{
  "total": 5,
  "collections": ""
}
```

Collections List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of collections documents that matched your query.|
|collections|[[collection](#schemacollection)]|true|none|List of collections.|

<h2 id="tocS_databaseList">databaseList</h2>
<!-- backwards compatibility -->
<a id="schemadatabaselist"></a>
<a id="schema_databaseList"></a>
<a id="tocSdatabaselist"></a>
<a id="tocsdatabaselist"></a>

```json
{
  "total": 5,
  "databases": ""
}
```

Databases List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of databases documents that matched your query.|
|databases|[[database](#schemadatabase)]|true|none|List of databases.|

<h2 id="tocS_indexList">indexList</h2>
<!-- backwards compatibility -->
<a id="schemaindexlist"></a>
<a id="schema_indexList"></a>
<a id="tocSindexlist"></a>
<a id="tocsindexlist"></a>

```json
{
  "total": 5,
  "indexes": ""
}
```

Indexes List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of indexes documents that matched your query.|
|indexes|[[index](#schemaindex)]|true|none|List of indexes.|

<h2 id="tocS_userList">userList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_userList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
{
  "total": 5,
  "users": ""
}
```

Users List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of users documents that matched your query.|
|users|[[user](#schemauser)]|true|none|List of users.|

<h2 id="tocS_sessionList">sessionList</h2>
<!-- backwards compatibility -->
<a id="schemasessionlist"></a>
<a id="schema_sessionList"></a>
<a id="tocSsessionlist"></a>
<a id="tocssessionlist"></a>

```json
{
  "total": 5,
  "sessions": ""
}
```

Sessions List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of sessions documents that matched your query.|
|sessions|[[session](#schemasession)]|true|none|List of sessions.|

<h2 id="tocS_identityList">identityList</h2>
<!-- backwards compatibility -->
<a id="schemaidentitylist"></a>
<a id="schema_identityList"></a>
<a id="tocSidentitylist"></a>
<a id="tocsidentitylist"></a>

```json
{
  "total": 5,
  "identities": ""
}
```

Identities List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of identities documents that matched your query.|
|identities|[[identity](#schemaidentity)]|true|none|List of identities.|

<h2 id="tocS_logList">logList</h2>
<!-- backwards compatibility -->
<a id="schemaloglist"></a>
<a id="schema_logList"></a>
<a id="tocSloglist"></a>
<a id="tocsloglist"></a>

```json
{
  "total": 5,
  "logs": ""
}
```

Logs List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of logs documents that matched your query.|
|logs|[[log](#schemalog)]|true|none|List of logs.|

<h2 id="tocS_fileList">fileList</h2>
<!-- backwards compatibility -->
<a id="schemafilelist"></a>
<a id="schema_fileList"></a>
<a id="tocSfilelist"></a>
<a id="tocsfilelist"></a>

```json
{
  "total": 5,
  "files": ""
}
```

Files List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of files documents that matched your query.|
|files|[[file](#schemafile)]|true|none|List of files.|

<h2 id="tocS_bucketList">bucketList</h2>
<!-- backwards compatibility -->
<a id="schemabucketlist"></a>
<a id="schema_bucketList"></a>
<a id="tocSbucketlist"></a>
<a id="tocsbucketlist"></a>

```json
{
  "total": 5,
  "buckets": ""
}
```

Buckets List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of buckets documents that matched your query.|
|buckets|[[bucket](#schemabucket)]|true|none|List of buckets.|

<h2 id="tocS_resourceTokenList">resourceTokenList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetokenlist"></a>
<a id="schema_resourceTokenList"></a>
<a id="tocSresourcetokenlist"></a>
<a id="tocsresourcetokenlist"></a>

```json
{
  "total": 5,
  "tokens": ""
}
```

Resource Tokens List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of tokens documents that matched your query.|
|tokens|[[resourceToken](#schemaresourcetoken)]|true|none|List of tokens.|

<h2 id="tocS_teamList">teamList</h2>
<!-- backwards compatibility -->
<a id="schemateamlist"></a>
<a id="schema_teamList"></a>
<a id="tocSteamlist"></a>
<a id="tocsteamlist"></a>

```json
{
  "total": 5,
  "teams": ""
}
```

Teams List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of teams documents that matched your query.|
|teams|[[team](#schemateam)]|true|none|List of teams.|

<h2 id="tocS_membershipList">membershipList</h2>
<!-- backwards compatibility -->
<a id="schemamembershiplist"></a>
<a id="schema_membershipList"></a>
<a id="tocSmembershiplist"></a>
<a id="tocsmembershiplist"></a>

```json
{
  "total": 5,
  "memberships": ""
}
```

Memberships List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of memberships documents that matched your query.|
|memberships|[[membership](#schemamembership)]|true|none|List of memberships.|

<h2 id="tocS_siteList">siteList</h2>
<!-- backwards compatibility -->
<a id="schemasitelist"></a>
<a id="schema_siteList"></a>
<a id="tocSsitelist"></a>
<a id="tocssitelist"></a>

```json
{
  "total": 5,
  "sites": ""
}
```

Sites List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of sites documents that matched your query.|
|sites|[[site](#schemasite)]|true|none|List of sites.|

<h2 id="tocS_functionList">functionList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionlist"></a>
<a id="schema_functionList"></a>
<a id="tocSfunctionlist"></a>
<a id="tocsfunctionlist"></a>

```json
{
  "total": 5,
  "functions": ""
}
```

Functions List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of functions documents that matched your query.|
|functions|[[function](#schemafunction)]|true|none|List of functions.|

<h2 id="tocS_frameworkList">frameworkList</h2>
<!-- backwards compatibility -->
<a id="schemaframeworklist"></a>
<a id="schema_frameworkList"></a>
<a id="tocSframeworklist"></a>
<a id="tocsframeworklist"></a>

```json
{
  "total": 5,
  "frameworks": ""
}
```

Frameworks List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of frameworks documents that matched your query.|
|frameworks|[[framework](#schemaframework)]|true|none|List of frameworks.|

<h2 id="tocS_runtimeList">runtimeList</h2>
<!-- backwards compatibility -->
<a id="schemaruntimelist"></a>
<a id="schema_runtimeList"></a>
<a id="tocSruntimelist"></a>
<a id="tocsruntimelist"></a>

```json
{
  "total": 5,
  "runtimes": ""
}
```

Runtimes List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of runtimes documents that matched your query.|
|runtimes|[[runtime](#schemaruntime)]|true|none|List of runtimes.|

<h2 id="tocS_deploymentList">deploymentList</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentlist"></a>
<a id="schema_deploymentList"></a>
<a id="tocSdeploymentlist"></a>
<a id="tocsdeploymentlist"></a>

```json
{
  "total": 5,
  "deployments": ""
}
```

Deployments List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of deployments documents that matched your query.|
|deployments|[[deployment](#schemadeployment)]|true|none|List of deployments.|

<h2 id="tocS_executionList">executionList</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionlist"></a>
<a id="schema_executionList"></a>
<a id="tocSexecutionlist"></a>
<a id="tocsexecutionlist"></a>

```json
{
  "total": 5,
  "executions": ""
}
```

Executions List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of executions documents that matched your query.|
|executions|[[execution](#schemaexecution)]|true|none|List of executions.|

<h2 id="tocS_countryList">countryList</h2>
<!-- backwards compatibility -->
<a id="schemacountrylist"></a>
<a id="schema_countryList"></a>
<a id="tocScountrylist"></a>
<a id="tocscountrylist"></a>

```json
{
  "total": 5,
  "countries": ""
}
```

Countries List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of countries documents that matched your query.|
|countries|[[country](#schemacountry)]|true|none|List of countries.|

<h2 id="tocS_continentList">continentList</h2>
<!-- backwards compatibility -->
<a id="schemacontinentlist"></a>
<a id="schema_continentList"></a>
<a id="tocScontinentlist"></a>
<a id="tocscontinentlist"></a>

```json
{
  "total": 5,
  "continents": ""
}
```

Continents List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of continents documents that matched your query.|
|continents|[[continent](#schemacontinent)]|true|none|List of continents.|

<h2 id="tocS_languageList">languageList</h2>
<!-- backwards compatibility -->
<a id="schemalanguagelist"></a>
<a id="schema_languageList"></a>
<a id="tocSlanguagelist"></a>
<a id="tocslanguagelist"></a>

```json
{
  "total": 5,
  "languages": ""
}
```

Languages List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of languages documents that matched your query.|
|languages|[[language](#schemalanguage)]|true|none|List of languages.|

<h2 id="tocS_currencyList">currencyList</h2>
<!-- backwards compatibility -->
<a id="schemacurrencylist"></a>
<a id="schema_currencyList"></a>
<a id="tocScurrencylist"></a>
<a id="tocscurrencylist"></a>

```json
{
  "total": 5,
  "currencies": ""
}
```

Currencies List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of currencies documents that matched your query.|
|currencies|[[currency](#schemacurrency)]|true|none|List of currencies.|

<h2 id="tocS_phoneList">phoneList</h2>
<!-- backwards compatibility -->
<a id="schemaphonelist"></a>
<a id="schema_phoneList"></a>
<a id="tocSphonelist"></a>
<a id="tocsphonelist"></a>

```json
{
  "total": 5,
  "phones": ""
}
```

Phones List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of phones documents that matched your query.|
|phones|[[phone](#schemaphone)]|true|none|List of phones.|

<h2 id="tocS_variableList">variableList</h2>
<!-- backwards compatibility -->
<a id="schemavariablelist"></a>
<a id="schema_variableList"></a>
<a id="tocSvariablelist"></a>
<a id="tocsvariablelist"></a>

```json
{
  "total": 5,
  "variables": ""
}
```

Variables List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of variables documents that matched your query.|
|variables|[[variable](#schemavariable)]|true|none|List of variables.|

<h2 id="tocS_localeCodeList">localeCodeList</h2>
<!-- backwards compatibility -->
<a id="schemalocalecodelist"></a>
<a id="schema_localeCodeList"></a>
<a id="tocSlocalecodelist"></a>
<a id="tocslocalecodelist"></a>

```json
{
  "total": 5,
  "localeCodes": ""
}
```

Locale codes list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of localeCodes documents that matched your query.|
|localeCodes|[[localeCode](#schemalocalecode)]|true|none|List of localeCodes.|

<h2 id="tocS_providerList">providerList</h2>
<!-- backwards compatibility -->
<a id="schemaproviderlist"></a>
<a id="schema_providerList"></a>
<a id="tocSproviderlist"></a>
<a id="tocsproviderlist"></a>

```json
{
  "total": 5,
  "providers": ""
}
```

Provider list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of providers documents that matched your query.|
|providers|[[provider](#schemaprovider)]|true|none|List of providers.|

<h2 id="tocS_messageList">messageList</h2>
<!-- backwards compatibility -->
<a id="schemamessagelist"></a>
<a id="schema_messageList"></a>
<a id="tocSmessagelist"></a>
<a id="tocsmessagelist"></a>

```json
{
  "total": 5,
  "messages": ""
}
```

Message list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of messages documents that matched your query.|
|messages|[[message](#schemamessage)]|true|none|List of messages.|

<h2 id="tocS_topicList">topicList</h2>
<!-- backwards compatibility -->
<a id="schematopiclist"></a>
<a id="schema_topicList"></a>
<a id="tocStopiclist"></a>
<a id="tocstopiclist"></a>

```json
{
  "total": 5,
  "topics": ""
}
```

Topic list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of topics documents that matched your query.|
|topics|[[topic](#schematopic)]|true|none|List of topics.|

<h2 id="tocS_subscriberList">subscriberList</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberlist"></a>
<a id="schema_subscriberList"></a>
<a id="tocSsubscriberlist"></a>
<a id="tocssubscriberlist"></a>

```json
{
  "total": 5,
  "subscribers": ""
}
```

Subscriber list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of subscribers documents that matched your query.|
|subscribers|[[subscriber](#schemasubscriber)]|true|none|List of subscribers.|

<h2 id="tocS_targetList">targetList</h2>
<!-- backwards compatibility -->
<a id="schematargetlist"></a>
<a id="schema_targetList"></a>
<a id="tocStargetlist"></a>
<a id="tocstargetlist"></a>

```json
{
  "total": 5,
  "targets": ""
}
```

Target list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of targets documents that matched your query.|
|targets|[[target](#schematarget)]|true|none|List of targets.|

<h2 id="tocS_specificationList">specificationList</h2>
<!-- backwards compatibility -->
<a id="schemaspecificationlist"></a>
<a id="schema_specificationList"></a>
<a id="tocSspecificationlist"></a>
<a id="tocsspecificationlist"></a>

```json
{
  "total": 5,
  "specifications": ""
}
```

Specifications List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of specifications documents that matched your query.|
|specifications|[[specification](#schemaspecification)]|true|none|List of specifications.|

<h2 id="tocS_database">database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "name": "My Database",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "enabled": false
}
```

Database

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Database ID.|
|name|string|true|none|Database name.|
|$createdAt|string|true|none|Database creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Database update date in ISO 8601 format.|
|enabled|boolean|true|none|If database is enabled. Can be 'enabled' or 'disabled'. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys.|

<h2 id="tocS_collection">collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "databaseId": "5e5ea5c16897e",
  "name": "My Collection",
  "enabled": false,
  "documentSecurity": true,
  "attributes": {},
  "indexes": {}
}
```

Collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Collection ID.|
|$createdAt|string|true|none|Collection creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Collection update date in ISO 8601 format.|
|$permissions|[string]|true|none|Collection permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|databaseId|string|true|none|Database ID.|
|name|string|true|none|Collection name.|
|enabled|boolean|true|none|Collection enabled. Can be 'enabled' or 'disabled'. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys.|
|documentSecurity|boolean|true|none|Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|attributes|[[attributeBoolean](#schemaattributeboolean) \| [attributeInteger](#schemaattributeinteger) \| [attributeFloat](#schemaattributefloat) \| [attributeEmail](#schemaattributeemail) \| [attributeEnum](#schemaattributeenum) \| [attributeUrl](#schemaattributeurl) \| [attributeIp](#schemaattributeip) \| [attributeDatetime](#schemaattributedatetime) \| [attributeRelationship](#schemaattributerelationship) \| [attributeString](#schemaattributestring)]|true|none|Collection attributes.|
|indexes|[[index](#schemaindex)]|true|none|Collection indexes.|

<h2 id="tocS_attributeList">attributeList</h2>
<!-- backwards compatibility -->
<a id="schemaattributelist"></a>
<a id="schema_attributeList"></a>
<a id="tocSattributelist"></a>
<a id="tocsattributelist"></a>

```json
{
  "total": 5,
  "attributes": ""
}
```

Attributes List

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int32)|true|none|Total number of attributes in the given collection.|
|attributes|[[attributeBoolean](#schemaattributeboolean) \| [attributeInteger](#schemaattributeinteger) \| [attributeFloat](#schemaattributefloat) \| [attributeEmail](#schemaattributeemail) \| [attributeEnum](#schemaattributeenum) \| [attributeUrl](#schemaattributeurl) \| [attributeIp](#schemaattributeip) \| [attributeDatetime](#schemaattributedatetime) \| [attributeRelationship](#schemaattributerelationship) \| [attributeString](#schemaattributestring)]|true|none|List of attributes.|

<h2 id="tocS_attributeString">attributeString</h2>
<!-- backwards compatibility -->
<a id="schemaattributestring"></a>
<a id="schema_attributeString"></a>
<a id="tocSattributestring"></a>
<a id="tocsattributestring"></a>

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "size": 128,
  "default": "default",
  "encrypt": false
}
```

AttributeString

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|size|integer(int32)|true|none|Attribute size.|
|default|string \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|
|encrypt|boolean \| null|false|none|Defines whether this attribute is encrypted or not.|

<h2 id="tocS_attributeInteger">attributeInteger</h2>
<!-- backwards compatibility -->
<a id="schemaattributeinteger"></a>
<a id="schema_attributeInteger"></a>
<a id="tocSattributeinteger"></a>
<a id="tocsattributeinteger"></a>

```json
{
  "key": "count",
  "type": "integer",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "min": 1,
  "max": 10,
  "default": 10
}
```

AttributeInteger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|min|integer(int32) \| null|false|none|Minimum value to enforce for new documents.|
|max|integer(int32) \| null|false|none|Maximum value to enforce for new documents.|
|default|integer(int32) \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeFloat">attributeFloat</h2>
<!-- backwards compatibility -->
<a id="schemaattributefloat"></a>
<a id="schema_attributeFloat"></a>
<a id="tocSattributefloat"></a>
<a id="tocsattributefloat"></a>

```json
{
  "key": "percentageCompleted",
  "type": "double",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "min": 1.5,
  "max": 10.5,
  "default": 2.5
}
```

AttributeFloat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|min|number(double) \| null|false|none|Minimum value to enforce for new documents.|
|max|number(double) \| null|false|none|Maximum value to enforce for new documents.|
|default|number(double) \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeBoolean">attributeBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaattributeboolean"></a>
<a id="schema_attributeBoolean"></a>
<a id="tocSattributeboolean"></a>
<a id="tocsattributeboolean"></a>

```json
{
  "key": "isEnabled",
  "type": "boolean",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "default": false
}
```

AttributeBoolean

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|default|boolean \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeEmail">attributeEmail</h2>
<!-- backwards compatibility -->
<a id="schemaattributeemail"></a>
<a id="schema_attributeEmail"></a>
<a id="tocSattributeemail"></a>
<a id="tocsattributeemail"></a>

```json
{
  "key": "userEmail",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "email",
  "default": "default@example.com"
}
```

AttributeEmail

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|format|string|true|none|String format.|
|default|string \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeEnum">attributeEnum</h2>
<!-- backwards compatibility -->
<a id="schemaattributeenum"></a>
<a id="schema_attributeEnum"></a>
<a id="tocSattributeenum"></a>
<a id="tocsattributeenum"></a>

```json
{
  "key": "status",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "elements": "element",
  "format": "enum",
  "default": "element"
}
```

AttributeEnum

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|elements|[string]|true|none|Array of elements in enumerated type.|
|format|string|true|none|String format.|
|default|string \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeIp">attributeIp</h2>
<!-- backwards compatibility -->
<a id="schemaattributeip"></a>
<a id="schema_attributeIp"></a>
<a id="tocSattributeip"></a>
<a id="tocsattributeip"></a>

```json
{
  "key": "ipAddress",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "ip",
  "default": "192.0.2.0"
}
```

AttributeIP

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|format|string|true|none|String format.|
|default|string \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeUrl">attributeUrl</h2>
<!-- backwards compatibility -->
<a id="schemaattributeurl"></a>
<a id="schema_attributeUrl"></a>
<a id="tocSattributeurl"></a>
<a id="tocsattributeurl"></a>

```json
{
  "key": "githubUrl",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "url",
  "default": "http://example.com"
}
```

AttributeURL

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|format|string|true|none|String format.|
|default|string \| null|false|none|Default value for attribute when not provided. Cannot be set when attribute is required.|

<h2 id="tocS_attributeDatetime">attributeDatetime</h2>
<!-- backwards compatibility -->
<a id="schemaattributedatetime"></a>
<a id="schema_attributeDatetime"></a>
<a id="tocSattributedatetime"></a>
<a id="tocsattributedatetime"></a>

```json
{
  "key": "birthDay",
  "type": "datetime",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "datetime",
  "default": "2020-10-15T06:38:00.000+00:00"
}
```

AttributeDatetime

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|format|string|true|none|ISO 8601 format.|
|default|string \| null|false|none|Default value for attribute when not provided. Only null is optional|

<h2 id="tocS_attributeRelationship">attributeRelationship</h2>
<!-- backwards compatibility -->
<a id="schemaattributerelationship"></a>
<a id="schema_attributeRelationship"></a>
<a id="tocSattributerelationship"></a>
<a id="tocsattributerelationship"></a>

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "relatedCollection": "collection",
  "relationType": "oneToOne|oneToMany|manyToOne|manyToMany",
  "twoWay": false,
  "twoWayKey": "string",
  "onDelete": "restrict|cascade|setNull",
  "side": "parent|child"
}
```

AttributeRelationship

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Attribute Key.|
|type|string|true|none|Attribute type.|
|status|string|true|none|Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an attribute.|
|required|boolean|true|none|Is attribute required?|
|array|boolean \| null|false|none|Is attribute an array?|
|$createdAt|string|true|none|Attribute creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Attribute update date in ISO 8601 format.|
|relatedCollection|string|true|none|The ID of the related collection.|
|relationType|string|true|none|The type of the relationship.|
|twoWay|boolean|true|none|Is the relationship two-way?|
|twoWayKey|string|true|none|The key of the two-way relationship.|
|onDelete|string|true|none|How deleting the parent document will propagate to child documents.|
|side|string|true|none|Whether this is the parent or child side of the relationship|

<h2 id="tocS_index">index</h2>
<!-- backwards compatibility -->
<a id="schemaindex"></a>
<a id="schema_index"></a>
<a id="tocSindex"></a>
<a id="tocsindex"></a>

```json
{
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": [],
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

Index

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Index Key.|
|type|string|true|none|Index type.|
|status|string|true|none|Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`|
|error|string|true|none|Error message. Displays error generated on failure of creating or deleting an index.|
|attributes|[string]|true|none|Index attributes.|
|lengths|[integer(int32)]|true|none|Index attributes length.|
|orders|[string]|false|none|Index orders.|
|$createdAt|string|true|none|Index creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Index update date in ISO 8601 format.|

<h2 id="tocS_document">document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

Document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Document ID.|
|$sequence|integer(int32)|true|read-only|Document automatically incrementing ID.|
|$collectionId|string|true|read-only|Collection ID.|
|$databaseId|string|true|read-only|Database ID.|
|$createdAt|string|true|none|Document creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Document update date in ISO 8601 format.|
|$permissions|[string]|true|none|Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|

<h2 id="tocS_log">log</h2>
<!-- backwards compatibility -->
<a id="schemalog"></a>
<a id="schema_log"></a>
<a id="tocSlog"></a>
<a id="tocslog"></a>

```json
{
  "event": "account.sessions.create",
  "userId": "610fc2f985ee0",
  "userEmail": "john@appwrite.io",
  "userName": "John Doe",
  "mode": "admin",
  "ip": "127.0.0.1",
  "time": "2020-10-15T06:38:00.000+00:00",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States"
}
```

Log

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|true|none|Event name.|
|userId|string|true|none|User ID.|
|userEmail|string|true|none|User Email.|
|userName|string|true|none|User Name.|
|mode|string|true|none|API mode when event triggered.|
|ip|string|true|none|IP session in use when the session was created.|
|time|string|true|none|Log creation date in ISO 8601 format.|
|osCode|string|true|none|Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).|
|osName|string|true|none|Operating system name.|
|osVersion|string|true|none|Operating system version.|
|clientType|string|true|none|Client type.|
|clientCode|string|true|none|Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).|
|clientName|string|true|none|Client name.|
|clientVersion|string|true|none|Client version.|
|clientEngine|string|true|none|Client engine name.|
|clientEngineVersion|string|true|none|Client engine name.|
|deviceName|string|true|none|Device name.|
|deviceBrand|string|true|none|Device brand name.|
|deviceModel|string|true|none|Device model name.|
|countryCode|string|true|none|Country two-character ISO 3166-1 alpha code.|
|countryName|string|true|none|Country name.|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|User ID.|
|$createdAt|string|true|none|User creation date in ISO 8601 format.|
|$updatedAt|string|true|none|User update date in ISO 8601 format.|
|name|string|true|none|User name.|
|password|string \| null|false|none|Hashed user password.|
|hash|string \| null|false|none|Password hashing algorithm.|
|hashOptions|object \| null|false|none|Password hashing algorithm configuration.|
|registration|string|true|none|User registration date in ISO 8601 format.|
|status|boolean|true|none|User status. Pass `true` for enabled and `false` for disabled.|
|labels|[string]|true|none|Labels for the user.|
|passwordUpdate|string|true|none|Password update time in ISO 8601 format.|
|email|string|true|none|User email address.|
|phone|string|true|none|User phone number in E.164 format.|
|emailVerification|boolean|true|none|Email verification status.|
|phoneVerification|boolean|true|none|Phone verification status.|
|mfa|boolean|true|none|Multi factor authentication status.|
|prefs|object|true|none|User preferences as a key-value object|
|targets|[[target](#schematarget)]|true|none|A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider.|
|accessedAt|string|true|none|Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.|

<h2 id="tocS_algoMd5">algoMd5</h2>
<!-- backwards compatibility -->
<a id="schemaalgomd5"></a>
<a id="schema_algoMd5"></a>
<a id="tocSalgomd5"></a>
<a id="tocsalgomd5"></a>

```json
{
  "type": "md5"
}
```

AlgoMD5

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|

<h2 id="tocS_algoSha">algoSha</h2>
<!-- backwards compatibility -->
<a id="schemaalgosha"></a>
<a id="schema_algoSha"></a>
<a id="tocSalgosha"></a>
<a id="tocsalgosha"></a>

```json
{
  "type": "sha"
}
```

AlgoSHA

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|

<h2 id="tocS_algoPhpass">algoPhpass</h2>
<!-- backwards compatibility -->
<a id="schemaalgophpass"></a>
<a id="schema_algoPhpass"></a>
<a id="tocSalgophpass"></a>
<a id="tocsalgophpass"></a>

```json
{
  "type": "phpass"
}
```

AlgoPHPass

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|

<h2 id="tocS_algoBcrypt">algoBcrypt</h2>
<!-- backwards compatibility -->
<a id="schemaalgobcrypt"></a>
<a id="schema_algoBcrypt"></a>
<a id="tocSalgobcrypt"></a>
<a id="tocsalgobcrypt"></a>

```json
{
  "type": "bcrypt"
}
```

AlgoBcrypt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|

<h2 id="tocS_algoScrypt">algoScrypt</h2>
<!-- backwards compatibility -->
<a id="schemaalgoscrypt"></a>
<a id="schema_algoScrypt"></a>
<a id="tocSalgoscrypt"></a>
<a id="tocsalgoscrypt"></a>

```json
{
  "type": "scrypt",
  "costCpu": 8,
  "costMemory": 14,
  "costParallel": 1,
  "length": 64
}
```

AlgoScrypt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|
|costCpu|integer(int32)|true|none|CPU complexity of computed hash.|
|costMemory|integer(int32)|true|none|Memory complexity of computed hash.|
|costParallel|integer(int32)|true|none|Parallelization of computed hash.|
|length|integer(int32)|true|none|Length used to compute hash.|

<h2 id="tocS_algoScryptModified">algoScryptModified</h2>
<!-- backwards compatibility -->
<a id="schemaalgoscryptmodified"></a>
<a id="schema_algoScryptModified"></a>
<a id="tocSalgoscryptmodified"></a>
<a id="tocsalgoscryptmodified"></a>

```json
{
  "type": "scryptMod",
  "salt": "UxLMreBr6tYyjQ==",
  "saltSeparator": "Bw==",
  "signerKey": "XyEKE9RcTDeLEsL/RjwPDBv/RqDl8fb3gpYEOQaPihbxf1ZAtSOHCjuAAa7Q3oHpCYhXSN9tizHgVOwn6krflQ=="
}
```

AlgoScryptModified

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|
|salt|string|true|none|Salt used to compute hash.|
|saltSeparator|string|true|none|Separator used to compute hash.|
|signerKey|string|true|none|Key used to compute hash.|

<h2 id="tocS_algoArgon2">algoArgon2</h2>
<!-- backwards compatibility -->
<a id="schemaalgoargon2"></a>
<a id="schema_algoArgon2"></a>
<a id="tocSalgoargon2"></a>
<a id="tocsalgoargon2"></a>

```json
{
  "type": "argon2",
  "memoryCost": 65536,
  "timeCost": 4,
  "threads": 3
}
```

AlgoArgon2

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Algo type.|
|memoryCost|integer(int32)|true|none|Memory used to compute hash.|
|timeCost|integer(int32)|true|none|Amount of time consumed to compute hash|
|threads|integer(int32)|true|none|Number of threads used to compute hash.|

<h2 id="tocS_preferences">preferences</h2>
<!-- backwards compatibility -->
<a id="schemapreferences"></a>
<a id="schema_preferences"></a>
<a id="tocSpreferences"></a>
<a id="tocspreferences"></a>

```json
{
  "language": "en",
  "timezone": "UTC",
  "darkTheme": true
}
```

Preferences

<h2 id="tocS_session">session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

Session

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Session ID.|
|$createdAt|string|true|none|Session creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Session update date in ISO 8601 format.|
|userId|string|true|none|User ID.|
|expire|string|true|none|Session expiration date in ISO 8601 format.|
|provider|string|true|none|Session Provider.|
|providerUid|string|true|none|Session Provider User ID.|
|providerAccessToken|string|true|none|Session Provider Access Token.|
|providerAccessTokenExpiry|string|true|none|The date of when the access token expires in ISO 8601 format.|
|providerRefreshToken|string|true|none|Session Provider Refresh Token.|
|ip|string|true|none|IP in use when the session was created.|
|osCode|string|true|none|Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).|
|osName|string|true|none|Operating system name.|
|osVersion|string|true|none|Operating system version.|
|clientType|string|true|none|Client type.|
|clientCode|string|true|none|Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).|
|clientName|string|true|none|Client name.|
|clientVersion|string|true|none|Client version.|
|clientEngine|string|true|none|Client engine name.|
|clientEngineVersion|string|true|none|Client engine name.|
|deviceName|string|true|none|Device name.|
|deviceBrand|string|true|none|Device brand name.|
|deviceModel|string|true|none|Device model name.|
|countryCode|string|true|none|Country two-character ISO 3166-1 alpha code.|
|countryName|string|true|none|Country name.|
|current|boolean|true|none|Returns true if this the current user session.|
|factors|[string]|true|none|Returns a list of active session factors.|
|secret|string|true|none|Secret used to authenticate the user. Only included if the request was made with an API key|
|mfaUpdatedAt|string|true|none|Most recent date in ISO 8601 format when the session successfully passed MFA challenge.|

<h2 id="tocS_identity">identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "provider": "email",
  "providerUid": "5e5bb8c16897e",
  "providerEmail": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3"
}
```

Identity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Identity ID.|
|$createdAt|string|true|none|Identity creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Identity update date in ISO 8601 format.|
|userId|string|true|none|User ID.|
|provider|string|true|none|Identity Provider.|
|providerUid|string|true|none|ID of the User in the Identity Provider.|
|providerEmail|string|true|none|Email of the User in the Identity Provider.|
|providerAccessToken|string|true|none|Identity Provider Access Token.|
|providerAccessTokenExpiry|string|true|none|The date of when the access token expires in ISO 8601 format.|
|providerRefreshToken|string|true|none|Identity Provider Refresh Token.|

<h2 id="tocS_token">token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "secret": "",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "phrase": "Golden Fox"
}
```

Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Token ID.|
|$createdAt|string|true|none|Token creation date in ISO 8601 format.|
|userId|string|true|none|User ID.|
|secret|string|true|none|Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.|
|expire|string|true|none|Token expiration date in ISO 8601 format.|
|phrase|string|true|none|Security phrase of a token. Empty if security phrase was not requested when creating a token. It includes randomly generated phrase which is also sent in the external resource such as email.|

<h2 id="tocS_jwt">jwt</h2>
<!-- backwards compatibility -->
<a id="schemajwt"></a>
<a id="schema_jwt"></a>
<a id="tocSjwt"></a>
<a id="tocsjwt"></a>

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

JWT

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwt|string|true|none|JWT encoded string.|

<h2 id="tocS_locale">locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
{
  "ip": "127.0.0.1",
  "countryCode": "US",
  "country": "United States",
  "continentCode": "NA",
  "continent": "North America",
  "eu": false,
  "currency": "USD"
}
```

Locale

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip|string|true|none|User IP address.|
|countryCode|string|true|none|Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format|
|country|string|true|none|Country name. This field support localization.|
|continentCode|string|true|none|Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America.|
|continent|string|true|none|Continent name. This field support localization.|
|eu|boolean|true|none|True if country is part of the European Union.|
|currency|string|true|none|Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format|

<h2 id="tocS_localeCode">localeCode</h2>
<!-- backwards compatibility -->
<a id="schemalocalecode"></a>
<a id="schema_localeCode"></a>
<a id="tocSlocalecode"></a>
<a id="tocslocalecode"></a>

```json
{
  "code": "en-us",
  "name": "US"
}
```

LocaleCode

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)|
|name|string|true|none|Locale name|

<h2 id="tocS_file">file</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_file"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "bucketId": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "name": "Pink.png",
  "signature": "5d529fd02b544198ae075bd57c1762bb",
  "mimeType": "image/png",
  "sizeOriginal": 17890,
  "chunksTotal": 17890,
  "chunksUploaded": 17890
}
```

File

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|File ID.|
|bucketId|string|true|none|Bucket ID.|
|$createdAt|string|true|none|File creation date in ISO 8601 format.|
|$updatedAt|string|true|none|File update date in ISO 8601 format.|
|$permissions|[string]|true|none|File permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|name|string|true|none|File name.|
|signature|string|true|none|File MD5 signature.|
|mimeType|string|true|none|File mime type.|
|sizeOriginal|integer(int32)|true|none|File original size in bytes.|
|chunksTotal|integer(int32)|true|none|Total number of chunks available|
|chunksUploaded|integer(int32)|true|none|Total number of chunks uploaded|

<h2 id="tocS_bucket">bucket</h2>
<!-- backwards compatibility -->
<a id="schemabucket"></a>
<a id="schema_bucket"></a>
<a id="tocSbucket"></a>
<a id="tocsbucket"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "fileSecurity": true,
  "name": "Documents",
  "enabled": false,
  "maximumFileSize": 100,
  "allowedFileExtensions": [
    "jpg",
    "png"
  ],
  "compression": "gzip",
  "encryption": false,
  "antivirus": false
}
```

Bucket

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Bucket ID.|
|$createdAt|string|true|none|Bucket creation time in ISO 8601 format.|
|$updatedAt|string|true|none|Bucket update date in ISO 8601 format.|
|$permissions|[string]|true|none|Bucket permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|fileSecurity|boolean|true|none|Whether file-level security is enabled. [Learn more about permissions](https://appwrite.io/docs/permissions).|
|name|string|true|none|Bucket name.|
|enabled|boolean|true|none|Bucket enabled.|
|maximumFileSize|integer(int32)|true|none|Maximum file size supported.|
|allowedFileExtensions|[string]|true|none|Allowed file extensions.|
|compression|string|true|none|Compression algorithm choosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd).|
|encryption|boolean|true|none|Bucket is encrypted.|
|antivirus|boolean|true|none|Virus scanning is enabled.|

<h2 id="tocS_resourceToken">resourceToken</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetoken"></a>
<a id="schema_resourceToken"></a>
<a id="tocSresourcetoken"></a>
<a id="tocsresourcetoken"></a>

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceId": "5e5ea5c168bb8:5e5ea5c168bb8",
  "resourceType": "files",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

ResourceToken

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Token ID.|
|$createdAt|string|true|none|Token creation date in ISO 8601 format.|
|resourceId|string|true|none|Resource ID.|
|resourceType|string|true|none|Resource type.|
|expire|string|true|none|Token expiration date in ISO 8601 format.|
|secret|string|true|none|JWT encoded string.|
|accessedAt|string|true|none|Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours.|

<h2 id="tocS_team">team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  }
}
```

Team

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Team ID.|
|$createdAt|string|true|none|Team creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Team update date in ISO 8601 format.|
|name|string|true|none|Team name.|
|total|integer(int32)|true|none|Total number of team members.|
|prefs|object|true|none|Team preferences as a key-value object|

<h2 id="tocS_membership">membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

Membership

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Membership ID.|
|$createdAt|string|true|none|Membership creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Membership update date in ISO 8601 format.|
|userId|string|true|none|User ID.|
|userName|string|true|none|User name. Hide this attribute by toggling membership privacy in the Console.|
|userEmail|string|true|none|User email address. Hide this attribute by toggling membership privacy in the Console.|
|teamId|string|true|none|Team ID.|
|teamName|string|true|none|Team name.|
|invited|string|true|none|Date, the user has been invited to join the team in ISO 8601 format.|
|joined|string|true|none|Date, the user has accepted the invitation to join the team in ISO 8601 format.|
|confirm|boolean|true|none|User confirmation status, true if the user has joined the team or false otherwise.|
|mfa|boolean|true|none|Multi factor authentication status, true if the user has MFA enabled or false otherwise. Hide this attribute by toggling membership privacy in the Console.|
|roles|[string]|true|none|User list of roles|

<h2 id="tocS_site">site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

Site

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Site ID.|
|$createdAt|string|true|none|Site creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Site update date in ISO 8601 format.|
|name|string|true|none|Site name.|
|enabled|boolean|true|none|Site enabled.|
|live|boolean|true|none|Is the site deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the site to update it with the latest configuration.|
|logging|boolean|true|none|When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.|
|framework|string|true|none|Site framework.|
|deploymentId|string|true|none|Site's active deployment ID.|
|deploymentCreatedAt|string|true|none|Active deployment creation date in ISO 8601 format.|
|deploymentScreenshotLight|string|true|none|Screenshot of active deployment with light theme preference file ID.|
|deploymentScreenshotDark|string|true|none|Screenshot of active deployment with dark theme preference file ID.|
|latestDeploymentId|string|true|none|Site's latest deployment ID.|
|latestDeploymentCreatedAt|string|true|none|Latest deployment creation date in ISO 8601 format.|
|latestDeploymentStatus|string|true|none|Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".|
|vars|[[variable](#schemavariable)]|true|none|Site variables.|
|timeout|integer(int32)|true|none|Site request timeout in seconds.|
|installCommand|string|true|none|The install command used to install the site dependencies.|
|buildCommand|string|true|none|The build command used to build the site.|
|outputDirectory|string|true|none|The directory where the site build output is located.|
|installationId|string|true|none|Site VCS (Version Control System) installation id.|
|providerRepositoryId|string|true|none|VCS (Version Control System) Repository ID|
|providerBranch|string|true|none|VCS (Version Control System) branch name|
|providerRootDirectory|string|true|none|Path to site in VCS (Version Control System) repository|
|providerSilentMode|boolean|true|none|Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests|
|specification|string|true|none|Machine specification for builds and executions.|
|buildRuntime|string|true|none|Site build runtime.|
|adapter|string|true|none|Site framework adapter.|
|fallbackFile|string|true|none|Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.|

<h2 id="tocS_function">function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

Function

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Function ID.|
|$createdAt|string|true|none|Function creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Function update date in ISO 8601 format.|
|execute|[string]|true|none|Execution permissions.|
|name|string|true|none|Function name.|
|enabled|boolean|true|none|Function enabled.|
|live|boolean|true|none|Is the function deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.|
|logging|boolean|true|none|When disabled, executions will exclude logs and errors, and will be slightly faster.|
|runtime|string|true|none|Function execution and build runtime.|
|deploymentId|string|true|none|Function's active deployment ID.|
|deploymentCreatedAt|string|true|none|Active deployment creation date in ISO 8601 format.|
|latestDeploymentId|string|true|none|Function's latest deployment ID.|
|latestDeploymentCreatedAt|string|true|none|Latest deployment creation date in ISO 8601 format.|
|latestDeploymentStatus|string|true|none|Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed".|
|scopes|[string]|true|none|Allowed permission scopes.|
|vars|[[variable](#schemavariable)]|true|none|Function variables.|
|events|[string]|true|none|Function trigger events.|
|schedule|string|true|none|Function execution schedule in CRON format.|
|timeout|integer(int32)|true|none|Function execution timeout in seconds.|
|entrypoint|string|true|none|The entrypoint file used to execute the deployment.|
|commands|string|true|none|The build command used to build the deployment.|
|version|string|true|none|Version of Open Runtimes used for the function.|
|installationId|string|true|none|Function VCS (Version Control System) installation id.|
|providerRepositoryId|string|true|none|VCS (Version Control System) Repository ID|
|providerBranch|string|true|none|VCS (Version Control System) branch name|
|providerRootDirectory|string|true|none|Path to function in VCS (Version Control System) repository|
|providerSilentMode|boolean|true|none|Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests|
|specification|string|true|none|Machine specification for builds and executions.|

<h2 id="tocS_runtime">runtime</h2>
<!-- backwards compatibility -->
<a id="schemaruntime"></a>
<a id="schema_runtime"></a>
<a id="tocSruntime"></a>
<a id="tocsruntime"></a>

```json
{
  "$id": "python-3.8",
  "key": "python",
  "name": "Python",
  "version": "3.8",
  "base": "python:3.8-alpine",
  "image": "appwrite\\/runtime-for-python:3.8",
  "logo": "python.png",
  "supports": "amd64"
}
```

Runtime

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Runtime ID.|
|key|string|true|none|Parent runtime key.|
|name|string|true|none|Runtime Name.|
|version|string|true|none|Runtime version.|
|base|string|true|none|Base Docker image used to build the runtime.|
|image|string|true|none|Image name of Docker Hub.|
|logo|string|true|none|Name of the logo image.|
|supports|[string]|true|none|List of supported architectures.|

<h2 id="tocS_framework">framework</h2>
<!-- backwards compatibility -->
<a id="schemaframework"></a>
<a id="schema_framework"></a>
<a id="tocSframework"></a>
<a id="tocsframework"></a>

```json
{
  "key": "sveltekit",
  "name": "SvelteKit",
  "buildRuntime": "node-22",
  "runtimes": [
    "static-1",
    "node-22"
  ],
  "adapters": [
    {
      "key": "static",
      "buildRuntime": "node-22",
      "buildCommand": "npm run build",
      "installCommand": "npm install",
      "outputDirectory": "./dist"
    }
  ]
}
```

Framework

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Framework key.|
|name|string|true|none|Framework Name.|
|buildRuntime|string|true|none|Default runtime version.|
|runtimes|[string]|true|none|List of supported runtime versions.|
|adapters|[[frameworkAdapter](#schemaframeworkadapter)]|true|none|List of supported adapters.|

<h2 id="tocS_frameworkAdapter">frameworkAdapter</h2>
<!-- backwards compatibility -->
<a id="schemaframeworkadapter"></a>
<a id="schema_frameworkAdapter"></a>
<a id="tocSframeworkadapter"></a>
<a id="tocsframeworkadapter"></a>

```json
{
  "key": "static",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "./dist",
  "fallbackFile": "index.html"
}
```

Framework Adapter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Adapter key.|
|installCommand|string|true|none|Default command to download dependencies.|
|buildCommand|string|true|none|Default command to build site into output directory.|
|outputDirectory|string|true|none|Default output directory of build.|
|fallbackFile|string|true|none|Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed.|

<h2 id="tocS_deployment">deployment</h2>
<!-- backwards compatibility -->
<a id="schemadeployment"></a>
<a id="schema_deployment"></a>
<a id="tocSdeployment"></a>
<a id="tocsdeployment"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerBranch": "0.7.x",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

Deployment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Deployment ID.|
|$createdAt|string|true|none|Deployment creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Deployment update date in ISO 8601 format.|
|type|string|true|none|Type of deployment.|
|resourceId|string|true|none|Resource ID.|
|resourceType|string|true|none|Resource type.|
|entrypoint|string|true|none|The entrypoint file to use to execute the deployment code.|
|sourceSize|integer(int32)|true|none|The code size in bytes.|
|buildSize|integer(int32)|true|none|The build output size in bytes.|
|totalSize|integer(int32)|true|none|The total size in bytes (source and build output).|
|buildId|string|true|none|The current build ID.|
|activate|boolean|true|none|Whether the deployment should be automatically activated.|
|screenshotLight|string|true|none|Screenshot with light theme preference file ID.|
|screenshotDark|string|true|none|Screenshot with dark theme preference file ID.|
|status|string|true|none|The deployment status. Possible values are "waiting", "processing", "building", "ready", and "failed".|
|buildLogs|string|true|none|The build logs.|
|buildDuration|integer(int32)|true|none|The current build time in seconds.|
|providerRepositoryName|string|true|none|The name of the vcs provider repository|
|providerRepositoryOwner|string|true|none|The name of the vcs provider repository owner|
|providerRepositoryUrl|string|true|none|The url of the vcs provider repository|
|providerBranch|string|true|none|The branch of the vcs repository|
|providerCommitHash|string|true|none|The commit hash of the vcs commit|
|providerCommitAuthorUrl|string|true|none|The url of vcs commit author|
|providerCommitAuthor|string|true|none|The name of vcs commit author|
|providerCommitMessage|string|true|none|The commit message|
|providerCommitUrl|string|true|none|The url of the vcs commit|
|providerBranchUrl|string|true|none|The branch of the vcs repository|

<h2 id="tocS_execution">execution</h2>
<!-- backwards compatibility -->
<a id="schemaexecution"></a>
<a id="schema_execution"></a>
<a id="tocSexecution"></a>
<a id="tocsexecution"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "any"
  ],
  "functionId": "5e5ea6g16897e",
  "deploymentId": "5e5ea5c16897e",
  "trigger": "http",
  "status": "processing",
  "requestMethod": "GET",
  "requestPath": "/articles?id=5",
  "requestHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "responseStatusCode": 200,
  "responseBody": "",
  "responseHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "logs": "",
  "errors": "",
  "duration": 0.4,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```

Execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Execution ID.|
|$createdAt|string|true|none|Execution creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Execution upate date in ISO 8601 format.|
|$permissions|[string]|true|none|Execution roles.|
|functionId|string|true|none|Function ID.|
|deploymentId|string|true|none|Function's deployment ID used to create the execution.|
|trigger|string|true|none|The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.|
|status|string|true|none|The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.|
|requestMethod|string|true|none|HTTP request method type.|
|requestPath|string|true|none|HTTP request path and query.|
|requestHeaders|[[headers](#schemaheaders)]|true|none|HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.|
|responseStatusCode|integer(int32)|true|none|HTTP response status code.|
|responseBody|string|true|none|HTTP response body. This will return empty unless execution is created as synchronous.|
|responseHeaders|[[headers](#schemaheaders)]|true|none|HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous.|
|logs|string|true|none|Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.|
|errors|string|true|none|Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.|
|duration|number(double)|true|none|Resource(function/site) execution duration in seconds.|
|scheduledAt|string \| null|false|none|The scheduled time for execution. If left empty, execution will be queued immediately.|

<h2 id="tocS_variable">variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

Variable

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Variable ID.|
|$createdAt|string|true|none|Variable creation date in ISO 8601 format.|
|$updatedAt|string|true|none|Variable creation date in ISO 8601 format.|
|key|string|true|none|Variable key.|
|value|string|true|none|Variable value.|
|secret|boolean|true|none|Variable secret flag. Secret variables can only be updated or deleted, but never read.|
|resourceType|string|true|none|Service to which the variable belongs. Possible values are "project", "function"|
|resourceId|string|true|none|ID of resource to which the variable belongs. If resourceType is "project", it is empty. If resourceType is "function", it is ID of the function.|

<h2 id="tocS_country">country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "name": "United States",
  "code": "US"
}
```

Country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Country name.|
|code|string|true|none|Country two-character ISO 3166-1 alpha code.|

<h2 id="tocS_continent">continent</h2>
<!-- backwards compatibility -->
<a id="schemacontinent"></a>
<a id="schema_continent"></a>
<a id="tocScontinent"></a>
<a id="tocscontinent"></a>

```json
{
  "name": "Europe",
  "code": "EU"
}
```

Continent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Continent name.|
|code|string|true|none|Continent two letter code.|

<h2 id="tocS_language">language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "name": "Italian",
  "code": "it",
  "nativeName": "Italiano"
}
```

Language

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Language name.|
|code|string|true|none|Language two-character ISO 639-1 codes.|
|nativeName|string|true|none|Language native name.|

<h2 id="tocS_currency">currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "symbol": "$",
  "name": "US dollar",
  "symbolNative": "$",
  "decimalDigits": 2,
  "rounding": 0,
  "code": "USD",
  "namePlural": "US dollars"
}
```

Currency

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|symbol|string|true|none|Currency symbol.|
|name|string|true|none|Currency name.|
|symbolNative|string|true|none|Currency native symbol.|
|decimalDigits|integer(int32)|true|none|Number of decimal digits.|
|rounding|number(double)|true|none|Currency digit rounding.|
|code|string|true|none|Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.|
|namePlural|string|true|none|Currency plural name|

<h2 id="tocS_phone">phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "code": "+1",
  "countryCode": "US",
  "countryName": "United States"
}
```

Phone

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Phone code.|
|countryCode|string|true|none|Country two-character ISO 3166-1 alpha code.|
|countryName|string|true|none|Country name.|

<h2 id="tocS_healthAntivirus">healthAntivirus</h2>
<!-- backwards compatibility -->
<a id="schemahealthantivirus"></a>
<a id="schema_healthAntivirus"></a>
<a id="tocShealthantivirus"></a>
<a id="tocshealthantivirus"></a>

```json
{
  "version": "1.0.0",
  "status": "online"
}
```

Health Antivirus

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Antivirus version.|
|status|string|true|none|Antivirus status. Possible values can are: `disabled`, `offline`, `online`|

<h2 id="tocS_healthQueue">healthQueue</h2>
<!-- backwards compatibility -->
<a id="schemahealthqueue"></a>
<a id="schema_healthQueue"></a>
<a id="tocShealthqueue"></a>
<a id="tocshealthqueue"></a>

```json
{
  "size": 8
}
```

Health Queue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int32)|true|none|Amount of actions in the queue.|

<h2 id="tocS_healthStatus">healthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_healthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

Health Status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the service.|
|ping|integer(int32)|true|none|Duration in milliseconds how long the health check took.|
|status|string|true|none|Service status. Possible values can are: `pass`, `fail`|

<h2 id="tocS_healthCertificate">healthCertificate</h2>
<!-- backwards compatibility -->
<a id="schemahealthcertificate"></a>
<a id="schema_healthCertificate"></a>
<a id="tocShealthcertificate"></a>
<a id="tocshealthcertificate"></a>

```json
{
  "name": "/CN=www.google.com",
  "subjectSN": "",
  "issuerOrganisation": "",
  "validFrom": "1704200998",
  "validTo": "1711458597",
  "signatureTypeSN": "RSA-SHA256"
}
```

Health Certificate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Certificate name|
|subjectSN|string|true|none|Subject SN|
|issuerOrganisation|string|true|none|Issuer organisation|
|validFrom|string|true|none|Valid from|
|validTo|string|true|none|Valid to|
|signatureTypeSN|string|true|none|Signature type SN|

<h2 id="tocS_healthTime">healthTime</h2>
<!-- backwards compatibility -->
<a id="schemahealthtime"></a>
<a id="schema_healthTime"></a>
<a id="tocShealthtime"></a>
<a id="tocshealthtime"></a>

```json
{
  "remoteTime": 1639490751,
  "localTime": 1639490844,
  "diff": 93
}
```

Health Time

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteTime|integer(int32)|true|none|Current unix timestamp on trustful remote server.|
|localTime|integer(int32)|true|none|Current unix timestamp of local server where Appwrite runs.|
|diff|integer(int32)|true|none|Difference of unix remote and local timestamps in milliseconds.|

<h2 id="tocS_headers">headers</h2>
<!-- backwards compatibility -->
<a id="schemaheaders"></a>
<a id="schema_headers"></a>
<a id="tocSheaders"></a>
<a id="tocsheaders"></a>

```json
{
  "name": "Content-Type",
  "value": "application/json"
}
```

Headers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Header name.|
|value|string|true|none|Header value.|

<h2 id="tocS_specification">specification</h2>
<!-- backwards compatibility -->
<a id="schemaspecification"></a>
<a id="schema_specification"></a>
<a id="tocSspecification"></a>
<a id="tocsspecification"></a>

```json
{
  "memory": 512,
  "cpus": 1,
  "enabled": true,
  "slug": "s-1vcpu-512mb"
}
```

Specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|integer(int32)|true|none|Memory size in MB.|
|cpus|number(double)|true|none|Number of CPUs.|
|enabled|boolean|true|none|Is size enabled.|
|slug|string|true|none|Size slug.|

<h2 id="tocS_mfaChallenge">mfaChallenge</h2>
<!-- backwards compatibility -->
<a id="schemamfachallenge"></a>
<a id="schema_mfaChallenge"></a>
<a id="tocSmfachallenge"></a>
<a id="tocsmfachallenge"></a>

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c168bb8",
  "expire": "2020-10-15T06:38:00.000+00:00"
}
```

MFA Challenge

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Token ID.|
|$createdAt|string|true|none|Token creation date in ISO 8601 format.|
|userId|string|true|none|User ID.|
|expire|string|true|none|Token expiration date in ISO 8601 format.|

<h2 id="tocS_mfaRecoveryCodes">mfaRecoveryCodes</h2>
<!-- backwards compatibility -->
<a id="schemamfarecoverycodes"></a>
<a id="schema_mfaRecoveryCodes"></a>
<a id="tocSmfarecoverycodes"></a>
<a id="tocsmfarecoverycodes"></a>

```json
{
  "recoveryCodes": [
    "a3kf0-s0cl2",
    "s0co1-as98s"
  ]
}
```

MFA Recovery Codes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recoveryCodes|[string]|true|none|Recovery codes.|

<h2 id="tocS_mfaType">mfaType</h2>
<!-- backwards compatibility -->
<a id="schemamfatype"></a>
<a id="schema_mfaType"></a>
<a id="tocSmfatype"></a>
<a id="tocsmfatype"></a>

```json
{
  "secret": true,
  "uri": true
}
```

MFAType

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|true|none|Secret token used for TOTP factor.|
|uri|string|true|none|URI for authenticator apps.|

<h2 id="tocS_mfaFactors">mfaFactors</h2>
<!-- backwards compatibility -->
<a id="schemamfafactors"></a>
<a id="schema_mfaFactors"></a>
<a id="tocSmfafactors"></a>
<a id="tocsmfafactors"></a>

```json
{
  "totp": true,
  "phone": true,
  "email": true,
  "recoveryCode": true
}
```

MFAFactors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totp|boolean|true|none|Can TOTP be used for MFA challenge for this account.|
|phone|boolean|true|none|Can phone (SMS) be used for MFA challenge for this account.|
|email|boolean|true|none|Can email be used for MFA challenge for this account.|
|recoveryCode|boolean|true|none|Can recovery code be used for MFA challenge for this account.|

<h2 id="tocS_provider">provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

Provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Provider ID.|
|$createdAt|string|true|none|Provider creation time in ISO 8601 format.|
|$updatedAt|string|true|none|Provider update date in ISO 8601 format.|
|name|string|true|none|The name for the provider instance.|
|provider|string|true|none|The name of the provider service.|
|enabled|boolean|true|none|Is provider enabled?|
|type|string|true|none|Type of provider.|
|credentials|object|true|none|Provider credentials.|
|options|object \| null|false|none|Provider options.|

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "Message status can be one of the following: draft, processing, scheduled, sent, or failed."
}
```

Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Message ID.|
|$createdAt|string|true|none|Message creation time in ISO 8601 format.|
|$updatedAt|string|true|none|Message update date in ISO 8601 format.|
|providerType|string|true|none|Message provider type.|
|topics|[string]|true|none|Topic IDs set as recipients.|
|users|[string]|true|none|User IDs set as recipients.|
|targets|[string]|true|none|Target IDs set as recipients.|
|scheduledAt|string \| null|false|none|The scheduled time for message.|
|deliveredAt|string \| null|false|none|The time when the message was delivered.|
|deliveryErrors|[string]|false|none|Delivery errors if any.|
|deliveredTotal|integer(int32)|true|none|Number of recipients the message was delivered to.|
|data|object|true|none|Data of the message.|
|status|string|true|none|Status of delivery.|

<h2 id="tocS_topic">topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "events",
  "emailTotal": 100,
  "smsTotal": 100,
  "pushTotal": 100,
  "subscribe": "users"
}
```

Topic

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Topic ID.|
|$createdAt|string|true|none|Topic creation time in ISO 8601 format.|
|$updatedAt|string|true|none|Topic update date in ISO 8601 format.|
|name|string|true|none|The name of the topic.|
|emailTotal|integer(int32)|true|none|Total count of email subscribers subscribed to the topic.|
|smsTotal|integer(int32)|true|none|Total count of SMS subscribers subscribed to the topic.|
|pushTotal|integer(int32)|true|none|Total count of push subscribers subscribed to the topic.|
|subscribe|[string]|true|none|Subscribe permissions.|

<h2 id="tocS_subscriber">subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "targetId": "259125845563242502",
  "target": {
    "$id": "259125845563242502",
    "$createdAt": "2020-10-15T06:38:00.000+00:00",
    "$updatedAt": "2020-10-15T06:38:00.000+00:00",
    "providerType": "email",
    "providerId": "259125845563242502",
    "name": "ageon-app-email",
    "identifier": "random-mail@email.org",
    "userId": "5e5ea5c16897e"
  },
  "userId": "5e5ea5c16897e",
  "userName": "Aegon Targaryen",
  "topicId": "259125845563242502",
  "providerType": "email"
}
```

Subscriber

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Subscriber ID.|
|$createdAt|string|true|none|Subscriber creation time in ISO 8601 format.|
|$updatedAt|string|true|none|Subscriber update date in ISO 8601 format.|
|targetId|string|true|none|Target ID.|
|target|object|true|none|Target.|
|userId|string|true|none|Topic ID.|
|userName|string|true|none|User Name.|
|topicId|string|true|none|Topic ID.|
|providerType|string|true|none|The target provider type. Can be one of the following: `email`, `sms` or `push`.|

<h2 id="tocS_target">target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Apple iPhone 12",
  "userId": "259125845563242502",
  "providerId": "259125845563242502",
  "providerType": "email",
  "identifier": "token",
  "expired": false
}
```

Target

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$id|string|true|none|Target ID.|
|$createdAt|string|true|none|Target creation time in ISO 8601 format.|
|$updatedAt|string|true|none|Target update date in ISO 8601 format.|
|name|string|true|none|Target Name.|
|userId|string|true|none|User ID.|
|providerId|string \| null|false|none|Provider ID.|
|providerType|string|true|none|The target provider type. Can be one of the following: `email`, `sms` or `push`.|
|identifier|string|true|none|The target identifier.|
|expired|boolean|true|none|Is the target expired.|
