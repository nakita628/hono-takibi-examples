<h1 id="authentication">Authentication v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="authentication-authentication">Authentication</h1>

## Login with Username and Password

<a id="opIdpost-api-v1-login"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user": "test@rocket.test",
    "password": "vanvica32"
  }'
```

`POST /api/v1/login`

-  Although none of the body parameters are required, it's mandatory to include  either the `user` AND `password`  or only the `resume` parameter.

- To authenticate a request, you need to pass the `userId` and `authToken` values from this JSON response object as headers in the request. The `authToken` is passed as `X-Auth-Token` header, while the `userId` as `X-User-Id` header.

-  If LDAP authentication is enabled, you must maintain the login in the same way as you normally do. Similarly, if 2FA is enabled for an LDAP user, everything stays the same.
  
### Changelog
| Version      | Description | 
 | ---------------- | ------------|
 |1.0.0            | Added `avatarUrl` property to response       |
 |0.64.0            | Added `me` property.      |
 |0.60.0            | Added      |

> Body parameter

```json
{
  "user": "test@rocket.test",
  "password": "vanvica32"
}
```

<h3 id="login-with-username-and-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» user|body|string|false|Your user name or email.|
|» password|body|string|false|Your pasword.|
|» resume|body|string|false|Your previously issued `authToken`.|
|» code|body|string|false|The 2FA code. It is required if your account has two-factor authentication enabled .|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "authToken": "9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq",
    "userId": "aobEdbYhXfu5hkeqG",
    "me": {
      "_id": "aYjNnig8BEAWeQzMh",
      "name": "Rocket Cat",
      "emails": [
        {
          "address": "rocket.cat@rocket.chat",
          "verified": false
        }
      ],
      "status": "offline",
      "statusConnection": "offline",
      "username": "rocket.cat",
      "utcOffset": -3,
      "active": true,
      "roles": [
        "admin"
      ],
      "settings": {
        "preferences": {}
      },
      "avatarUrl": "http://localhost:3000/avatar/test"
    }
  }
}
```

<h3 id="login-with-username-and-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="login-with-username-and-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|data|object|false|none|none|
|» authToken|string|false|none|none|
|» userId|string|false|none|none|
|» me|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » emails|[object]|false|none|none|
|» » » address|string|false|none|none|
|» » » verified|boolean|false|none|none|
|» » status|string|false|none|none|
|» » statusConnection|string|false|none|none|
|» » username|string|false|none|none|
|» » utcOffset|integer|false|none|none|
|» » active|boolean|false|none|none|
|» » roles|[string]|false|none|none|
|» » settings|object|false|none|none|
|» » » preferences|object|false|none|none|
|» » avatarUrl|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdpost-api-v1-logout"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/logout \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string' \
  -H 'X-User-Id: string'
```

`POST /api/v1/logout`

Invalidate your REST API authentication token.

<h3 id="logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authorization token of the user|
|X-User-Id|header|string|true|The user id of the user|

> Example responses

> 200 Response

```json
{
  "status": "success",
  "data": {
    "message": "You've been logged out!"
  }
}
```

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="logout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|data|object|false|none|none|
|» message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Redeem Login Code

<a id="opIdpost-api-v1-loginCode.redeem"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/loginCode.redeem \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "code": "4f1d2c3b4a5968778695a4b3c2d1e0f1123456789abcdef00fedcba987654321"
  }'
```

`POST /api/v1/loginCode.redeem`

Redeems a one-time OAuth login code and returns the `loginToken` and `userId`. Use these values as the `X-Auth-Token` and `X-User-Id` headers in authenticated requests.

This endpoint does not require authentication. Each code is single-use, expires after 60 seconds, and is limited to 10 redemption requests per minute per caller.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.7.0   | Added       |

> Body parameter

```json
{
  "code": "4f1d2c3b4a5968778695a4b3c2d1e0f1123456789abcdef00fedcba987654321"
}
```

<h3 id="redeem-login-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» code|body|string|true|The one-time login code issued by the server-side OAuth flow.|

> Example responses

> 200 Response

```json
{
  "loginToken": "9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq",
  "userId": "aobEdbYhXfu5hkeqG",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must NOT have fewer than 64 characters [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="redeem-login-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="redeem-login-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loginToken|string|true|none|none|
|userId|string|true|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Profile Information

<a id="opIdget-api-v1-me"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/me \
  -H 'Accept: application/json' \
  -H 'X-User-Id: string' \
  -H 'X-Auth-Token: string'
```

`GET /api/v1/me`

Quick information about the authenticated user.
### Changelog
 | Version      | Description | 
 | ---------------- | ------------|
 |1.0.0            | Added `avatarUrl` property to response       |
 |0.68.0            | Added `customFields` property.      |
 |0.48.0            | Added      |

<h3 id="get-profile-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID of the user.|
|X-Auth-Token|header|string|true|The authorization token of the user.|

> Example responses

> 200 Response

```json
{
  "_id": "aobEdbYhXfu5hkeqG",
  "name": "Example User",
  "emails": [
    {
      "address": "example@example.com",
      "verified": true
    }
  ],
  "status": "offline",
  "statusConnection": "offline",
  "username": "example",
  "utcOffset": 0,
  "active": true,
  "roles": [
    "user",
    "admin"
  ],
  "settings": {
    "preferences": {
      "enableAutoAway": false,
      "idleTimeoutLimit": 300,
      "desktopNotificationDuration": 0,
      "audioNotifications": "mentions",
      "desktopNotifications": "mentions",
      "mobileNotifications": "mentions",
      "unreadAlert": true,
      "useEmojis": true,
      "convertAsciiEmoji": true,
      "autoImageLoad": true,
      "saveMobileBandwidth": true,
      "collapseMediaByDefault": false,
      "hideUsernames": false,
      "hideRoles": false,
      "hideFlexTab": false,
      "hideAvatars": false,
      "roomsListExhibitionMode": "category",
      "sidebarViewMode": "medium",
      "sidebarHideAvatar": false,
      "sidebarShowUnread": false,
      "sidebarShowFavorites": true,
      "sendOnEnter": "normal",
      "messageViewMode": 0,
      "emailNotificationMode": "all",
      "roomCounterSidebar": false,
      "newRoomNotification": "door",
      "newMessageNotification": "chime",
      "muteFocusedConversations": true,
      "notificationsSoundVolume": 100
    }
  },
  "customFields": {
    "twitter": "@userstwi"
  },
  "avatarUrl": "http://localhost:3000/avatar/test",
  "success": true
}
```

<h3 id="get-profile-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK <br><br>The `customFields` parameter won't be returned if it doesn't exist on the workspace.|Inline|

<h3 id="get-profile-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|name|string|false|none|none|
|emails|[object]|false|none|none|
|» address|string|false|none|none|
|» verified|boolean|false|none|none|
|status|string|false|none|none|
|statusConnection|string|false|none|none|
|username|string|false|none|none|
|utcOffset|integer|false|none|none|
|active|boolean|false|none|none|
|roles|[string]|false|none|none|
|settings|object|false|none|none|
|» preferences|object|false|none|none|
|» » enableAutoAway|boolean|false|none|none|
|» » idleTimeoutLimit|integer|false|none|none|
|» » desktopNotificationDuration|integer|false|none|none|
|» » audioNotifications|string|false|none|none|
|» » desktopNotifications|string|false|none|none|
|» » mobileNotifications|string|false|none|none|
|» » unreadAlert|boolean|false|none|none|
|» » useEmojis|boolean|false|none|none|
|» » convertAsciiEmoji|boolean|false|none|none|
|» » autoImageLoad|boolean|false|none|none|
|» » saveMobileBandwidth|boolean|false|none|none|
|» » collapseMediaByDefault|boolean|false|none|none|
|» » hideUsernames|boolean|false|none|none|
|» » hideRoles|boolean|false|none|none|
|» » hideFlexTab|boolean|false|none|none|
|» » hideAvatars|boolean|false|none|none|
|» » roomsListExhibitionMode|string|false|none|none|
|» » sidebarViewMode|string|false|none|none|
|» » sidebarHideAvatar|boolean|false|none|none|
|» » sidebarShowUnread|boolean|false|none|none|
|» » sidebarShowFavorites|boolean|false|none|none|
|» » sendOnEnter|string|false|none|none|
|» » messageViewMode|integer|false|none|none|
|» » emailNotificationMode|string|false|none|none|
|» » roomCounterSidebar|boolean|false|none|none|
|» » newRoomNotification|string|false|none|none|
|» » newMessageNotification|string|false|none|none|
|» » muteFocusedConversations|boolean|false|none|none|
|» » notificationsSoundVolume|integer|false|none|none|
|customFields|object|false|none|none|
|» twitter|string|false|none|none|
|avatarUrl|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="authentication-two-factor-authentication">Two-Factor Authentication</h1>

## Enable 2FA via Email

<a id="opIdpost-api-v1-users.2fa.enableEmail"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.2fa.enableEmail \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/users.2fa.enableEmail`

Enable email two-factor authentication for your account. This endpoint only works if the user has at least one verified email. 

<h3 id="enable-2fa-via-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="enable-2fa-via-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="enable-2fa-via-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Send 2FA Email Code

<a id="opIdpost-api-v1-users.2fa.sendEmailCode"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.2fa.sendEmailCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "emailOrUsername": "test@email.com"
  }'
```

`POST /api/v1/users.2fa.sendEmailCode`

> Body parameter

```json
{
  "emailOrUsername": "test@email.com"
}
```

<h3 id="send-2fa-email-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|false|The `authToken` of the authenticated user.|
|X-User-Id|header|string|false|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» emailOrUsername|body|string|true|Enter the email or username.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "emailOrUsername is required [error-parameter-required]",
  "errorType": "error-parameter-required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="send-2fa-email-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-2fa-email-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Disable 2FA via Email

<a id="opIdpost-api-v1-users.2fa.disableEmail"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.2fa.disableEmail \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-2fa-Code: string' \
  -H 'X-2fa-method: string'
```

`POST /api/v1/users.2fa.disableEmail`

Disable two-factor authentication via email. The 2FA code is required.

<h3 id="disable-2fa-via-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-2fa-Code|header|string|true|The 2FA code. |
|X-2fa-method|header|string|true|The 2FA method. It can be `email`, `totp`, or `password`.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "TOTP Required [totp-required]",
  "errorType": "totp-required",
  "details": {
    "method": "password",
    "codeGenerated": false,
    "availableMethods": []
  }
}
```

<h3 id="disable-2fa-via-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|TOTP Required <br><br>The 2FA code is passed as the `X-2fa-Code` query parameter.<br><br>It's important to note the **required TOTP method** returned from the response.<br><br>- If it's `password`, add the hashed password of the user as the `X-2fa-Code` header parameter. <br>- If it's `email`, add the 2FA code sent via email as the `X-2fa-Code` header parameter.<br>- If it's `totp`, add the code from your authenticator app as the `X-2fa-Code` header parameter.|Inline|

<h3 id="disable-2fa-via-email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» codeGenerated|boolean|false|none|none|
|» availableMethods|[object]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Enable TOTP 2FA

<a id="opIdpost-api-v1-users.enableTotp"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.enableTotp \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-2fa-Code: string' \
  -H 'X-2fa-method: string'
```

`POST /api/v1/users.enableTotp`

Starts the TOTP enrollment for your own account and returns the shared `secret` and the `url` to render as a QR code in an authenticator app. Call `users.validateTotp` with a code from the app to finish the enrollment.

This endpoint requires two-factor verification, so the account owner confirms their identity with an existing second factor before a new authenticator is registered. Requests are limited to five per minute.

This endpoint replaces the `2fa:enable` real-time method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.8.0   | Added       |

<h3 id="enable-totp-2fa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-2fa-Code|header|string|true|The 2FA code. |
|X-2fa-method|header|string|true|The 2FA method. It can be `email`, `totp`, or `password`.|

> Example responses

> 200 Response

```json
{
  "secret": "KZ3EAT7RJVHUYQ2C",
  "url": "otpauth://totp/Rocket.Chat:dana.reyes?secret=KZ3EAT7RJVHUYQ2C&issuer=Rocket.Chat",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "TOTP Required [totp-required]",
  "errorType": "totp-required",
  "details": {
    "method": "password",
    "codeGenerated": false,
    "availableMethods": []
  }
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="enable-totp-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="enable-totp-2fa-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|true|none|none|
|url|string|true|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» codeGenerated|boolean|false|none|none|
|» availableMethods|[object]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Validate TOTP Code

<a id="opIdpost-api-v1-users.validateTotp"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.validateTotp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-2fa-Code: string' \
  -H 'X-2fa-method: string' \
  -d '{
    "code": "482913"
  }'
```

`POST /api/v1/users.validateTotp`

Finishes the TOTP enrollment started with `users.enableTotp` by validating a code from the authenticator app, and returns the backup `codes` for the account. The other login tokens of the account are rotated, except personal access tokens.

This endpoint requires two-factor verification. Requests are limited to five per minute.

This endpoint replaces the `2fa:validateTempToken` real-time method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.8.0   | Added       |

> Body parameter

```json
{
  "code": "482913"
}
```

<h3 id="validate-totp-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-2fa-Code|header|string|true|The 2FA code. |
|X-2fa-method|header|string|true|The 2FA method. It can be `email`, `totp`, or `password`.|
|body|body|object|true|none|
|» code|body|string|true|The code shown by the authenticator app for the account.|

> Example responses

> 200 Response

```json
{
  "codes": [
    "3f7a1c9d",
    "90b2e4a6"
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[invalid-totp]",
  "errorType": "invalid-totp"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="validate-totp-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="validate-totp-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codes|[string]|true|none|The backup codes of the account.|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Disable TOTP 2FA

<a id="opIdpost-api-v1-users.disableTotp"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.disableTotp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "code": "482913"
  }'
```

`POST /api/v1/users.disableTotp`

Disables the authenticator app (TOTP) two-factor authentication of your own account. The code from the authenticator app is required in the body. Requests are limited to five per minute.

This endpoint replaces the `2fa:disable` real-time method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.8.0   | Added       |

> Body parameter

```json
{
  "code": "482913"
}
```

<h3 id="disable-totp-2fa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|true|none|
|» code|body|string|true|The code shown by the authenticator app for the account.|

> Example responses

> 200 Response

```json
{
  "disabled": true,
  "success": true
}
```

> 400 Response

```json
{
  "success": true,
  "error": "string",
  "errorType": "string"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="disable-totp-2fa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="disable-totp-2fa-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|true|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Regenerate TOTP Backup Codes

<a id="opIdpost-api-v1-users.regenerateTotpCodes"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.regenerateTotpCodes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "code": "482913"
  }'
```

`POST /api/v1/users.regenerateTotpCodes`

Generates a new set of backup codes for the authenticator app (TOTP) two-factor authentication of your own account and returns them. The previous backup codes stop working. The code from the authenticator app is required in the body. Requests are limited to five per minute.

This endpoint replaces the `2fa:regenerateCodes` real-time method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.8.0   | Added       |

> Body parameter

```json
{
  "code": "482913"
}
```

<h3 id="regenerate-totp-backup-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|true|none|
|» code|body|string|true|The code shown by the authenticator app for the account.|

> Example responses

> 200 Response

```json
{
  "codes": [
    "5c1d8b02",
    "e74a2f61"
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[invalid-totp]",
  "errorType": "invalid-totp"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="regenerate-totp-backup-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="regenerate-totp-backup-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codes|[string]|true|none|The new backup codes of the account.|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Remaining TOTP Codes

<a id="opIdget-api-v1-users.totpCodesRemaining"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.totpCodesRemaining \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.totpCodesRemaining`

Returns how many backup codes are left for the authenticator app (TOTP) two-factor authentication of your own account. Requests are limited to five per minute.

This endpoint replaces the `2fa:checkCodesRemaining` real-time method, which was removed in 9.0.0.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.8.0   | Added       |

<h3 id="get-remaining-totp-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "remaining": 8,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "[invalid-totp]",
  "errorType": "invalid-totp"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-remaining-totp-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|TOTP two-factor authentication is not enabled for the user.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-remaining-totp-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remaining|number|true|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Send Two-Factor Challenge Email Code

<a id="opIdpost-api-v1-twoFactorChallenges.sendEmailCode"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/twoFactorChallenges.sendEmailCode \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "challengeId": "8f4c2d1e9a7b6c5d3e2f1a0b"
  }'
```

`POST /api/v1/twoFactorChallenges.sendEmailCode`

Sends a new email code for an OAuth two-factor authentication challenge.

This endpoint does not require authentication. The challenge must exist, must not be expired, and must use the `email` method. Requests are limited to 5 per minute per caller.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.7.0   | Added       |

> Body parameter

```json
{
  "challengeId": "8f4c2d1e9a7b6c5d3e2f1a0b"
}
```

<h3 id="send-two-factor-challenge-email-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» challengeId|body|string|true|The ID of the pending two-factor challenge returned by the login flow.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "challengeId is required",
  "errorType": "error-parameter-required"
}
```

<h3 id="send-two-factor-challenge-email-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-two-factor-challenge-email-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Two-Factor Challenge

<a id="opIdpost-api-v1-twoFactorChallenges.verifyChallenge"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/twoFactorChallenges.verifyChallenge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "challengeId": "8f4c2d1e9a7b6c5d3e2f1a0b",
    "code": "482913"
  }'
```

`POST /api/v1/twoFactorChallenges.verifyChallenge`

Verifies the email or TOTP code for an OAuth two-factor authentication challenge and returns the `loginToken` and `userId`.

This endpoint does not require authentication. Requests are limited to 5 per minute per caller. The challenge is removed when the maximum number of failed attempts is reached.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.7.0   | Added       |

> Body parameter

```json
{
  "challengeId": "8f4c2d1e9a7b6c5d3e2f1a0b",
  "code": "482913"
}
```

<h3 id="verify-two-factor-challenge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» challengeId|body|string|true|The ID of the pending two-factor challenge returned by the login flow.|
|» code|body|string|true|The two-factor code provided by the user for the challenge.|

> Example responses

> 200 Response

```json
{
  "loginToken": "exampleLoginTokenString123",
  "userId": "aobEdbYhXfu5hkeqG",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "challengeId and code are required",
  "errorType": "error-parameter-required"
}
```

<h3 id="verify-two-factor-challenge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="verify-two-factor-challenge-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loginToken|string|true|none|none|
|userId|string|true|none|none|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
