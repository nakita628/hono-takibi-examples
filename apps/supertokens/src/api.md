<h1 id="core-driver-interface">Core Driver Interface v5.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API exposed by the SuperTokens Core. To be consumed by your backend only.

`appid-<appId>` and `<tenantId>` in all the APIs are optional. Their default values are `appid-public` and `public` respectively.

Those that do not have `<tenantId>` in the path will enforce that the API is called from `public` tenant only.

Email: <a href="mailto:team@supertokens.io">team@supertokens.io</a> 

<h1 id="core-driver-interface-emailpassword-recipe">EmailPassword Recipe</h1>

## emailPasswordSignin

<a id="opIdemailPasswordSignin"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "johndoe@gmail.com",
    "password": "password123"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signin`

Signin a user with email ID and password


> Body parameter

```json
{
  "email": "johndoe@gmail.com",
  "password": "password123"
}
```

<h3 id="emailpasswordsignin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» email|body|[email](#schemaemail)|false|none|
|» password|body|[password](#schemapassword)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  },
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="emailpasswordsignin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|signin response|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordsignin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|recipeUserId|[userId](#schemauserid)|false|none|none|
|*oneOf*|[wrongCredentialsResponse](#schemawrongcredentialsresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## emailPasswordSignup

<a id="opIdemailPasswordSignup"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "johndoe@gmail.com",
    "password": "password123"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signup`

Signup a user with email ID and password


> Body parameter

```json
{
  "email": "johndoe@gmail.com",
  "password": "password123"
}
```

<h3 id="emailpasswordsignup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» email|body|[email](#schemaemail)|false|none|
|» password|body|[password](#schemapassword)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  },
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="emailpasswordsignup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|signup response|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordsignup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|recipeUserId|[userId](#schemauserid)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|EMAIL_ALREADY_EXISTS_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## emailPasswordGetUser

<a id="opIdemailPasswordGetUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/user`

<aside class="warning">
This operation is deprecated
</aside>

Get a user's information

API is tenant specific if querying by email.
If querying by userId, tenantId will be ignored.


<h3 id="emailpasswordgetuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|email|query|[email](#schemaemail)|false|use either email or userId, not both|
|userId|query|[userId](#schemauserid)|false|use either email or userId, not both|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  }
}
```

<h3 id="emailpasswordgetuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get user's information|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordgetuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|
|status|UNKNOWN_EMAIL_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## emailPasswordPutUser

<a id="opIdemailPasswordPutUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "email": "johndoe@gmail.com",
    "password": "password123"
  }'
```

`PUT /appid-<appId>/<tenantId>/recipe/user`

Update a user's information


> Body parameter

```json
{
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com",
  "password": "password123"
}
```

<h3 id="emailpasswordputuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» recipeUserId|body|[userId](#schemauserid)|false|none|
|» email|body|[email](#schemaemail)|false|none|
|» password|body|[password](#schemapassword)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="emailpasswordputuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|update user's information|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordputuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|reason|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|
|status|EMAIL_ALREADY_EXISTS_ERROR|
|status|EMAIL_CHANGE_NOT_ALLOWED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## emailPasswordGetPasswordResetToken

<a id="opIdemailPasswordGetPasswordResetToken"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/password/reset/token' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "email": "johndoe@gmail.com"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/password/reset/token`

Generate a new reset password token for this user


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

<h3 id="emailpasswordgetpasswordresettoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» email|body|[email](#schemaemail)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "token": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="emailpasswordgetpasswordresettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generate a new reset password token for this user|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordgetpasswordresettoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|token|[token](#schematoken)|false|none|none|
|*oneOf*|[unknownUserIdResponse](#schemaunknownuseridresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## emailPasswordGetPasswordReset

<a id="opIdemailPasswordGetPasswordReset"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/password/reset' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "method": "token",
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "newPassword": "newpassword123"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/password/reset`

<aside class="warning">
This operation is deprecated
</aside>

Reset a password using password reset token


> Body parameter

```json
{
  "method": "token",
  "token": "ZTRiOTBjNz...jI5MTZlODkxw",
  "newPassword": "newpassword123"
}
```

<h3 id="emailpasswordgetpasswordreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» method|body|string|false|none|
|» token|body|[token](#schematoken)|false|none|
|» newPassword|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|token|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="emailpasswordgetpasswordreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reset a password using password reset token|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordgetpasswordreset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|userId|[userId](#schemauserid)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|RESET_PASSWORD_INVALID_TOKEN_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## userImport

<a id="opIduserImport"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/passwordhash/import' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "johndoe@gmail.com",
    "passwordHash": "passwordHash",
    "hashingAlgorithm": "argon2"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/passwordhash/import`

Import a user with email ID and password hash


> Body parameter

```json
{
  "email": "johndoe@gmail.com",
  "passwordHash": "passwordHash",
  "hashingAlgorithm": "argon2"
}
```

<h3 id="userimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» email|body|[email](#schemaemail)|false|none|
|» passwordHash|body|string|false|none|
|» hashingAlgorithm|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» hashingAlgorithm|argon2|
|» hashingAlgorithm|bcrypt|
|» hashingAlgorithm|firebase_scrypt|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  },
  "didUserAlreadyExist": true
}
```

<h3 id="userimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|import user response|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="userimport-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|didUserAlreadyExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## emailPasswordResetPasswordConsumeToken

<a id="opIdemailPasswordResetPasswordConsumeToken"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/password/reset/token/consume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "ZTRiOTBjNz...jI5MTZlODkxw"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/password/reset/token/consume`

Consume a password reset token


> Body parameter

```json
{
  "token": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="emailpasswordresetpasswordconsumetoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» token|body|[token](#schematoken)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

<h3 id="emailpasswordresetpasswordconsumetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Consume a password reset token|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailpasswordresetpasswordconsumetoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|userId|[userId](#schemauserid)|false|none|none|
|email|[email](#schemaemail)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|RESET_PASSWORD_INVALID_TOKEN_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-thirdparty-recipe">ThirdParty Recipe</h1>

## thirdPartySigninup

<a id="opIdthirdPartySigninup"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "thirdPartyId": "google",
    "thirdPartyUserId": 106347997792363870000,
    "email": {
      "id": "johndoe@gmail.com",
      "isVerified": true
    }
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signinup`

Signin/up a user


> Body parameter

```json
{
  "thirdPartyId": "google",
  "thirdPartyUserId": 106347997792363870000,
  "email": {
    "id": "johndoe@gmail.com",
    "isVerified": true
  }
}
```

<h3 id="thirdpartysigninup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» thirdPartyId|body|[thirdPartyId](#schemathirdpartyid)|false|none|
|» thirdPartyUserId|body|[thirdPartyUserId](#schemathirdpartyuserid)|false|none|
|» email|body|[thirdPartyEmail](#schemathirdpartyemail)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNewUser": true,
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  },
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="thirdpartysigninup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Signin/up a user|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="thirdpartysigninup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|createdNewUser|boolean|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|recipeUserId|[userId](#schemauserid)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|reason|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|EMAIL_CHANGE_NOT_ALLOWED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## thirdPartyGetUser

<a id="opIdthirdPartyGetUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user⠀' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/user⠀`

<aside class="warning">
This operation is deprecated
</aside>

Get a user's information.

API is tenant specific if querying by email.
If querying by userId, tenantId will be ignored.

Note that there is an invisible character at the end of the path, this was to avoid a conflict with the OpenAPI spec.


<h3 id="thirdpartygetuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|false|none|
|thirdPartyId|query|[thirdPartyId](#schemathirdpartyid)|false|Either use userId or thirdPartyId and thirdPartyUserId|
|thirdPartyUserId|query|[thirdPartyUserId](#schemathirdpartyuserid)|false|Either use userId or thirdPartyId and thirdPartyUserId|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  }
}
```

<h3 id="thirdpartygetuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get a user's information.|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="thirdpartygetuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|
|status|UNKNOWN_THIRD_PARTY_USER_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## thirdPartyGetUsersByEmail

<a id="opIdthirdPartyGetUsersByEmail"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/users/by-email?email=john.doe%40example.com' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/users/by-email`

<aside class="warning">
This operation is deprecated
</aside>

Get all users accounts associated with given email


<h3 id="thirdpartygetusersbyemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|email|query|string|true|User's email|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "users": [
    {
      "id": "fa7a0841-b533-4478-95533-0fde890c3483",
      "isPrimaryUser": true,
      "tenantIds": [
        "customer1"
      ],
      "timeJoined": 1623918032231,
      "emails": [
        "johndoe@gmail.com"
      ],
      "phoneNumbers": [
        "+14155552671"
      ],
      "thirdParty": [
        {
          "id": "google",
          "userId": 106347997792363870000
        }
      ],
      "loginMethods": [
        {
          "tenantIds": [
            "customer1"
          ],
          "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
          "verified": true,
          "timeJoined": 1623918032231,
          "recipeId": "emailpassword",
          "email": "johndoe@gmail.com",
          "phoneNumber": "+14155552671",
          "thirdParty": {
            "id": "google",
            "userId": 106347997792363870000
          }
        }
      ]
    }
  ]
}
```

<h3 id="thirdpartygetusersbyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all users associated with given email|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="thirdpartygetusersbyemail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|users|[[authRecipeUser](#schemaauthrecipeuser)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-passwordless-recipe">Passwordless Recipe</h1>

## passwordlessCheckCode

<a id="opIdpasswordlessCheckCode"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup/code/check' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
    "linkCode": "b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signinup/code/check`

Tries to check if the passed userInputCode+deviceId combo or the linkCode is valid


> Body parameter

```json
{
  "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
  "linkCode": "b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8"
}
```

<h3 id="passwordlesscheckcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» preAuthSessionId|body|[preAuthSessionId](#schemapreauthsessionid)|true|A random identifier that can be used to identify the login attempt/device.|
|» linkCode|body|[linkCode](#schemalinkcode)|true|URL-safe string that can be used to authenticate the user, without the deviceId|
|» *oneOf*|body|object|false|none|
|» preAuthSessionId|body|[preAuthSessionId](#schemapreauthsessionid)|true|A random identifier that can be used to identify the login attempt/device.|
|» deviceId|body|[deviceId](#schemadeviceid)|true|A random identifier that should be stored on the device that started the sign in process.|
|» userInputCode|body|[userInputCode](#schemauserinputcode)|true|This can be used to authenticate the user when paired with the deviceId|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "consumedDevice": {
    "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
    "failedCodeInputAttemptCount": 2,
    "email": "johndoe@gmail.com",
    "phoneNumber": "+14155552671"
  }
}
```

<h3 id="passwordlesscheckcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlesscheckcode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|consumedDevice|object|false|none|none|
|» preAuthSessionId|[preAuthSessionId](#schemapreauthsessionid)|true|none|A random identifier that can be used to identify the login attempt/device.|
|» failedCodeInputAttemptCount|number|true|none|none|
|» email|[email](#schemaemail)|false|none|none|
|» phoneNumber|[phoneNumber](#schemaphonenumber)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|failedCodeInputAttemptCount|number|false|none|none|
|maximumCodeInputAttempts|number|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|INCORRECT_USER_INPUT_CODE_ERROR|
|status|EXPIRED_USER_INPUT_CODE_ERROR|
|status|RESTART_FLOW_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessTryUseCode

<a id="opIdpasswordlessTryUseCode"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup/code/consume' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
    "linkCode": "b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signinup/code/consume`

Tries to consume the passed userInputCode+deviceId combo or the linkCode to sign the user in


> Body parameter

```json
{
  "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
  "linkCode": "b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8"
}
```

<h3 id="passwordlesstryusecode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» preAuthSessionId|body|[preAuthSessionId](#schemapreauthsessionid)|true|A random identifier that can be used to identify the login attempt/device.|
|» linkCode|body|[linkCode](#schemalinkcode)|true|URL-safe string that can be used to authenticate the user, without the deviceId|
|» *oneOf*|body|object|false|none|
|» preAuthSessionId|body|[preAuthSessionId](#schemapreauthsessionid)|true|A random identifier that can be used to identify the login attempt/device.|
|» deviceId|body|[deviceId](#schemadeviceid)|true|A random identifier that should be stored on the device that started the sign in process.|
|» userInputCode|body|[userInputCode](#schemauserinputcode)|true|This can be used to authenticate the user when paired with the deviceId|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNewUser": true,
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  },
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "consumedDevice": {
    "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
    "failedCodeInputAttemptCount": 2,
    "email": "johndoe@gmail.com",
    "phoneNumber": "+14155552671"
  }
}
```

<h3 id="passwordlesstryusecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlesstryusecode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|createdNewUser|boolean|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|recipeUserId|[userId](#schemauserid)|false|none|none|
|consumedDevice|object|false|none|none|
|» preAuthSessionId|[preAuthSessionId](#schemapreauthsessionid)|true|none|A random identifier that can be used to identify the login attempt/device.|
|» failedCodeInputAttemptCount|number|true|none|none|
|» email|[email](#schemaemail)|false|none|none|
|» phoneNumber|[phoneNumber](#schemaphonenumber)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|failedCodeInputAttemptCount|number|false|none|none|
|maximumCodeInputAttempts|number|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|INCORRECT_USER_INPUT_CODE_ERROR|
|status|EXPIRED_USER_INPUT_CODE_ERROR|
|status|RESTART_FLOW_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessStartSignIn

<a id="opIdpasswordlessStartSignIn"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup/code' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "test@example.com"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signinup/code`

Starts a sign in process by requesting a linkCode and a deviceId + userInputCode combination the user can use to sign in.
Passing the optional deviceId signifies a resend code flow.


> Body parameter

```json
{
  "email": "test@example.com"
}
```

<h3 id="passwordlessstartsignin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» email|body|[email](#schemaemail)|true|none|
|» userInputCode|body|[userInputCode](#schemauserinputcode)|false|This can be used to authenticate the user when paired with the deviceId|
|» *oneOf*|body|object|false|none|
|» phoneNumber|body|[phoneNumber](#schemaphonenumber)|true|none|
|» userInputCode|body|[userInputCode](#schemauserinputcode)|false|This can be used to authenticate the user when paired with the deviceId|
|» *oneOf*|body|object|false|none|
|» deviceId|body|[deviceId](#schemadeviceid)|true|A random identifier that should be stored on the device that started the sign in process.|
|» userInputCode|body|[userInputCode](#schemauserinputcode)|false|This can be used to authenticate the user when paired with the deviceId|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
  "codeId": "QZ0Mx9zG9cfqNXmPI0I/67r9bpKghUBDQZeMMbayi+I=",
  "deviceId": "TU/52WOcktSv99zqaAZuWJG9BSoS0aRLfCbep8rFEwk=",
  "userInputCode": 456123,
  "linkCode": "b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8",
  "timeCreated": 1637262633029,
  "codeLifetime": 900000
}
```

<h3 id="passwordlessstartsignin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Starts the passwordless login process|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlessstartsignin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|preAuthSessionId|[preAuthSessionId](#schemapreauthsessionid)|false|none|A random identifier that can be used to identify the login attempt/device.|
|codeId|[codeId](#schemacodeid)|false|none|Uniquely identifies a code|
|deviceId|[deviceId](#schemadeviceid)|false|none|A random identifier that should be stored on the device that started the sign in process.|
|userInputCode|[userInputCode](#schemauserinputcode)|false|none|This can be used to authenticate the user when paired with the deviceId|
|linkCode|[linkCode](#schemalinkcode)|false|none|URL-safe string that can be used to authenticate the user, without the deviceId|
|timeCreated|[timeCreated](#schematimecreated)|false|none|none|
|codeLifetime|[codeLifetime](#schemacodelifetime)|false|none|The maximum lifetime of the code in milliseconds|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|RESTART_FLOW_ERROR|
|status|USER_INPUT_CODE_ALREADY_USED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessRevokeCode

<a id="opIdpasswordlessRevokeCode"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup/code/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "codeId": "QZ0Mx9zG9cfqNXmPI0I/67r9bpKghUBDQZeMMbayi+I="
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signinup/code/remove`

Revokes a code by id


> Body parameter

```json
{
  "codeId": "QZ0Mx9zG9cfqNXmPI0I/67r9bpKghUBDQZeMMbayi+I="
}
```

<h3 id="passwordlessrevokecode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» codeId|body|[codeId](#schemacodeid)|true|Uniquely identifies a code|
|» *oneOf*|body|object|false|none|
|» preAuthSessionId|body|[preAuthSessionId](#schemapreauthsessionid)|true|A random identifier that can be used to identify the login attempt/device.|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="passwordlessrevokecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlessrevokecode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessListCodes

<a id="opIdpasswordlessListCodes"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup/codes' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/signinup/codes`

Lists all active passwordless codes of the user


<h3 id="passwordlesslistcodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|email|query|string|false|Use this parameter to get information about all devices associated with an email (without the other query params)|
|phoneNumber|query|[phoneNumber](#schemaphonenumber)|false|Use this parameter to get information about all devices associated with a phoneNumber (without the other query params)|
|deviceId|query|[deviceId](#schemadeviceid)|false|Use this parameter to get information about a single device (without the other query params)|
|preAuthSessionId|query|[preAuthSessionId](#schemapreauthsessionid)|false|Use this parameter to get information about a single device (without the other query params)|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "devices": [
    {
      "preAuthSessionId": "kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=",
      "failedCodeInputAttemptCount": 2,
      "email": "johndoe@gmail.com",
      "phoneNumber": "+14155552671",
      "codes": [
        {
          "codeId": "QZ0Mx9zG9cfqNXmPI0I/67r9bpKghUBDQZeMMbayi+I=",
          "timeCreated": 1637262633029,
          "codeLifetime": 900000
        }
      ]
    }
  ]
}
```

<h3 id="passwordlesslistcodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all active passwordless codes of the user|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlesslistcodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|devices|[object]|false|none|none|
|» preAuthSessionId|[preAuthSessionId](#schemapreauthsessionid)|false|none|A random identifier that can be used to identify the login attempt/device.|
|» failedCodeInputAttemptCount|number|false|none|none|
|» email|[email](#schemaemail)|false|none|none|
|» phoneNumber|[phoneNumber](#schemaphonenumber)|false|none|none|
|» codes|[object]|false|none|none|
|» » codeId|[codeId](#schemacodeid)|false|none|Uniquely identifies a code|
|» » timeCreated|[timeCreated](#schematimecreated)|false|none|none|
|» » codeLifetime|[codeLifetime](#schemacodelifetime)|false|none|The maximum lifetime of the code in milliseconds|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessRevokeAllCodesOfUser

<a id="opIdpasswordlessRevokeAllCodesOfUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/signinup/codes/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "johndoe@gmail.com"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/signinup/codes/remove`

Revokes all codes issued for the user


> Body parameter

```json
{
  "email": "johndoe@gmail.com"
}
```

<h3 id="passwordlessrevokeallcodesofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» email|body|[email](#schemaemail)|true|none|
|» *oneOf*|body|object|false|none|
|» phoneNumber|body|[phoneNumber](#schemaphonenumber)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="passwordlessrevokeallcodesofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlessrevokeallcodesofuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessGetUser

<a id="opIdpasswordlessGetUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user⠀⠀' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/user⠀⠀`

<aside class="warning">
This operation is deprecated
</aside>

Get a user's information.

API is tenant specific if querying by email or phone number.
If querying by userId, tenantId will be ignored.

Note that there is an invisible character at the end of the path, this was to avoid a conflict with the OpenAPI spec.


<h3 id="passwordlessgetuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|false|none|
|email|query|[email](#schemaemail)|false|Use exactly one of phoneNumber, email or userId|
|phoneNumber|query|[phoneNumber](#schemaphonenumber)|false|Use exactly one of phoneNumber, email or userId|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  }
}
```

<h3 id="passwordlessgetuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get a user's information.|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlessgetuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|
|status|UNKNOWN_EMAIL_ERROR|
|status|UNKNOWN_PHONE_NUMBER_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## passwordlessPutUser

<a id="opIdpasswordlessPutUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user⠀⠀' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "email": {},
    "phoneNumber": {}
  }'
```

`PUT /appid-<appId>/<tenantId>/recipe/user⠀⠀`

Update a user's information.
If the email or phoneNumber is set to null the previous value will be deleted. If they are not set (i.e., undefined/missing from the request), they are left as-is.


> Body parameter

```json
{
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": {},
  "phoneNumber": {}
}
```

<h3 id="passwordlessputuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» recipeUserId|body|[userId](#schemauserid)|false|none|
|» email|body|object|false|none|
|» phoneNumber|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="passwordlessputuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|update user's information|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="passwordlessputuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|reason|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|
|status|EMAIL_ALREADY_EXISTS_ERROR|
|status|PHONE_NUMBER_ALREADY_EXISTS_ERROR|
|status|EMAIL_CHANGE_NOT_ALLOWED_ERROR|
|status|PHONE_NUMBER_CHANGE_NOT_ALLOWED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-emailverification-recipe">EmailVerification Recipe</h1>

## emailVerificationVerifyToken

<a id="opIdemailVerificationVerifyToken"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/email/verify/token' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "email": "johndoe@gmail.com"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/email/verify/token`

Generate a new email verification token for this user


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

<h3 id="emailverificationverifytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|[emailVerificationVerifyTokenRequest](#schemaemailverificationverifytokenrequest)|false|none|
|» userId|body|[userId](#schemauserid)|false|none|
|» email|body|[email](#schemaemail)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "token": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="emailverificationverifytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generate a new email verification token for this user|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailverificationverifytoken-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|token|[token](#schematoken)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|EMAIL_ALREADY_VERIFIED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## emailVerificationVerifyTokenRemove

<a id="opIdemailVerificationVerifyTokenRemove"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/email/verify/token/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "email": "johndoe@gmail.com"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/email/verify/token/remove`

Remove all unused email verification tokens for this user


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

<h3 id="emailverificationverifytokenremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|[emailVerificationVerifyTokenRequest](#schemaemailverificationverifytokenrequest)|false|none|
|» userId|body|[userId](#schemauserid)|false|none|
|» email|body|[email](#schemaemail)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="emailverificationverifytokenremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK response|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailverificationverifytokenremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## emailVerificationVerify

<a id="opIdemailVerificationVerify"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/email/verify' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "method": "token",
    "token": "ZTRiOTBjNz...jI5MTZlODkxw"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/email/verify`

Verify an email


> Body parameter

```json
{
  "method": "token",
  "token": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="emailverificationverify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» method|body|string|false|none|
|» token|body|[token](#schematoken)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|token|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

<h3 id="emailverificationverify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Verify an email|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailverificationverify-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|userId|[userId](#schemauserid)|false|none|none|
|email|[email](#schemaemail)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|EMAIL_VERIFICATION_INVALID_TOKEN_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## emailVerificationVerifyGet

<a id="opIdemailVerificationVerifyGet"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/user/email/verify' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/user/email/verify`

Check if an email is verified


<h3 id="emailverificationverifyget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|false|none|
|email|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "isVerified": true
}
```

<h3 id="emailverificationverifyget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Verify an email|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailverificationverifyget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|isVerified|[isVerified](#schemaisverified)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## emailVerificationVerifyRemove

<a id="opIdemailVerificationVerifyRemove"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/user/email/verify/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "email": "johndoe@gmail.com"
  }'
```

`POST /appid-<appId>/recipe/user/email/verify/remove`

Unverify an email


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

<h3 id="emailverificationverifyremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|[emailVerificationVerifyTokenRequest](#schemaemailverificationverifytokenrequest)|false|none|
|» userId|body|[userId](#schemauserid)|false|none|
|» email|body|[email](#schemaemail)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="emailverificationverifyremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK response|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="emailverificationverifyremove-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-user-metadata-recipe">User Metadata Recipe</h1>

## userMetadataRead

<a id="opIduserMetadataRead"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/user/metadata?userId=fa7a0841-b533-4478-9253-0fde890c576' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/user/metadata`

Gets the stored metadata object of the user


<h3 id="usermetadataread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "metadata": {
    "preferences": {
      "theme": "dark"
    },
    "notifications": {
      "email": true
    },
    "todos": [
      "example"
    ]
  }
}
```

<h3 id="usermetadataread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="usermetadataread-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|metadata|[userMetadata](#schemausermetadata)|false|none|should be a JSON object (not a JSON literal nor an array)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## userMetadataUpdate

<a id="opIduserMetadataUpdate"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/user/metadata' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "metadataUpdate": {
      "notifications": {
        "sms": true
      },
      "todos": null
    }
  }'
```

`PUT /appid-<appId>/recipe/user/metadata`

Updates the metadata object stored about the user by doing a shallow merge of the stored and the update JSONs
and removing properties set to null on the root level of the update object. The merged object is then reserialized and stored.

e.g.:
  - stored: `{ "preferences": { "theme":"dark" }, "notifications": { "email": true }, "todos": ["example"] }`

  - update: `{ "notifications": { "sms": true }, "todos": null }`

  - result: `{ "preferences": { "theme":"dark" }, "notifications": { "sms": true } }`


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "metadataUpdate": {
    "notifications": {
      "sms": true
    },
    "todos": null
  }
}
```

<h3 id="usermetadataupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|false|none|
|» metadataUpdate|body|[userMetadataUpdate](#schemausermetadataupdate)|false|should be a JSON object (not a JSON literal nor an array)|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "metadata": {
    "preferences": {
      "theme": "dark"
    },
    "notifications": {
      "email": true
    },
    "todos": [
      "example"
    ]
  }
}
```

<h3 id="usermetadataupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="usermetadataupdate-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|metadata|[userMetadata](#schemausermetadata)|false|none|should be a JSON object (not a JSON literal nor an array)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## userMetadataDelete

<a id="opIduserMetadataDelete"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/user/metadata/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483"
  }'
```

`POST /appid-<appId>/recipe/user/metadata/remove`

Removes the entire metadata JSON stored about the user.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="usermetadatadelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="usermetadatadelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="usermetadatadelete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-user-roles-recipe">User Roles Recipe</h1>

## addUserRole

<a id="opIdaddUserRole"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/role' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "role": "admin"
  }'
```

`PUT /appid-<appId>/<tenantId>/recipe/user/role`

Creates a User Role mapping


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "role": "admin"
}
```

<h3 id="adduserrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» role|body|[role](#schemarole)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didUserAlreadyHaveRole": true
}
```

<h3 id="adduserrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="adduserrole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didUserAlreadyHaveRole|boolean|false|none|none|
|*oneOf*|[unknownRoleResponse](#schemaunknownroleresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## removeUserRole

<a id="opIdremoveUserRole"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/role/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "role": "admin"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/user/role/remove`

Removes a User Role mapping


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "role": "admin"
}
```

<h3 id="removeuserrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» role|body|[role](#schemarole)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didUserHaveRole": true
}
```

<h3 id="removeuserrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="removeuserrole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didUserHaveRole|boolean|false|none|none|
|*oneOf*|[unknownRoleResponse](#schemaunknownroleresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getUserRoles

<a id="opIdgetUserRoles"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/user/roles?userId=fa7a0841-b533-4478-9253-0fde890c576' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/user/roles`

Retrive the roles associated with the user.


<h3 id="getuserroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "roles": [
    "admin"
  ]
}
```

<h3 id="getuserroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getuserroles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|roles|[[role](#schemarole)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getRoleUsers

<a id="opIdgetRoleUsers"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/role/users?role=admin' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/role/users`

Retrive the users associated with the role.


<h3 id="getroleusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|role|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "users": [
    "fa7a0841-b533-4478-95533-0fde890c3483"
  ]
}
```

<h3 id="getroleusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getroleusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|users|[[userId](#schemauserid)]|false|none|none|
|*oneOf*|[unknownRoleResponse](#schemaunknownroleresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## putRole

<a id="opIdputRole"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/role' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "role": "admin",
    "permissions": [
      "permission"
    ]
  }'
```

`PUT /appid-<appId>/recipe/role`

Creates a role with permissions, can also be used to add permissions to a role


> Body parameter

```json
{
  "role": "admin",
  "permissions": [
    "permission"
  ]
}
```

<h3 id="putrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» role|body|[role](#schemarole)|true|none|
|» permissions|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNewRole": true
}
```

<h3 id="putrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="putrole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|createdNewRole|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getRolePermissions

<a id="opIdgetRolePermissions"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/role/permissions?role=admin' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/role/permissions`

Retrive the permissions associated with a role


<h3 id="getrolepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|role|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "permissions": [
    "permission"
  ]
}
```

<h3 id="getrolepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getrolepermissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|permissions|[string]|false|none|none|
|*oneOf*|[unknownRoleResponse](#schemaunknownroleresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## removeRolePermissions

<a id="opIdremoveRolePermissions"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/role/permissions/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "role": "admin",
    "permissions": [
      "permission"
    ]
  }'
```

`POST /appid-<appId>/recipe/role/permissions/remove`

Removes permissions mapped to a role, if no permissions are passed all permissions mapped to the role are removed


> Body parameter

```json
{
  "role": "admin",
  "permissions": [
    "permission"
  ]
}
```

<h3 id="removerolepermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» role|body|[role](#schemarole)|true|none|
|» permissions|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="removerolepermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="removerolepermissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|[unknownRoleResponse](#schemaunknownroleresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getPermissionRoles

<a id="opIdgetPermissionRoles"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/permission/roles?permission=permission' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/permission/roles`

Retrive the roles associated with the permission


<h3 id="getpermissionroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|permission|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "roles": [
    "admin"
  ]
}
```

<h3 id="getpermissionroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getpermissionroles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|roles|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## removeRole

<a id="opIdremoveRole"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/role/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "role": "admin"
  }'
```

`POST /appid-<appId>/recipe/role/remove`

Deletes a role


> Body parameter

```json
{
  "role": "admin"
}
```

<h3 id="removerole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» role|body|[role](#schemarole)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didRoleExist": true
}
```

<h3 id="removerole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="removerole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|didRoleExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getRoles

<a id="opIdgetRoles"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/roles' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/roles`

Retrive all created roles


<h3 id="getroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "roles": [
    "admin"
  ]
}
```

<h3 id="getroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getroles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|roles|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-useridmapping-recipe">UserIdMapping Recipe</h1>

## userIdMappingGetMapping

<a id="opIduserIdMappingGetMapping"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/userid/map?userId=string' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/userid/map`

Retrieve a UserIdMapping


<h3 id="useridmappinggetmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|true|none|
|userIdType|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|userIdType|SUPERTOKENS|
|userIdType|EXTERNAL|
|userIdType|ANY|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "superTokensUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "externalUserId": "externalId",
  "externalUserIdInfo": "Info about external userId"
}
```

<h3 id="useridmappinggetmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrives a userId mapping|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="useridmappinggetmapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|true|none|none|
|superTokensUserId|[userId](#schemauserid)|true|none|none|
|externalUserId|string|true|none|none|
|externalUserIdInfo|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_MAPPING_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## userIdMappingCreateMapping

<a id="opIduserIdMappingCreateMapping"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/userid/map' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "superTokensUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "externalUserId": "externalId",
    "externalUserIdInfo": "Info about external userId",
    "force": true
  }'
```

`POST /appid-<appId>/recipe/userid/map`

Create a mapping between a SuperTokens userId and an external userId.


> Body parameter

```json
{
  "superTokensUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "externalUserId": "externalId",
  "externalUserIdInfo": "Info about external userId",
  "force": true
}
```

<h3 id="useridmappingcreatemapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» superTokensUserId|body|[userId](#schemauserid)|true|none|
|» externalUserId|body|string|true|none|
|» externalUserIdInfo|body|string|false|none|
|» force|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="useridmappingcreatemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="useridmappingcreatemapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|doesSuperTokensUserIdExist|boolean|false|none|none|
|doesExternalUserIdExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_SUPERTOKENS_USER_ID_ERROR|
|status|USER_ID_MAPPING_ALREADY_EXISTS_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## userIdMappingRemoveMapping

<a id="opIduserIdMappingRemoveMapping"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/userid/map/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userIdType": "SUPERTOKENS",
    "force": true
  }'
```

`POST /appid-<appId>/recipe/userid/map/remove`

Delete a mapping between a SuperTokens userId and an external userId.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "userIdType": "SUPERTOKENS",
  "force": true
}
```

<h3 id="useridmappingremovemapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» userIdType|body|string|false|none|
|» force|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» userIdType|SUPERTOKENS|
|» userIdType|EXTERNAL|
|» userIdType|ANY|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didMappingExist": true
}
```

<h3 id="useridmappingremovemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="useridmappingremovemapping-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|didMappingExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## userIdMappingUpateExternalUserIdInfo

<a id="opIduserIdMappingUpateExternalUserIdInfo"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/userid/external-user-id-info' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userIdType": "SUPERTOKENS",
    "externalUserIdInfo": "new external userId info"
  }'
```

`PUT /appid-<appId>/recipe/userid/external-user-id-info`

Update or delete externalUserIdInfo


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "userIdType": "SUPERTOKENS",
  "externalUserIdInfo": "new external userId info"
}
```

<h3 id="useridmappingupateexternaluseridinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» userIdType|body|string|false|none|
|» externalUserIdInfo|body|string \| null|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» userIdType|SUPERTOKENS|
|» userIdType|EXTERNAL|
|» userIdType|ANY|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="useridmappingupateexternaluseridinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="useridmappingupateexternaluseridinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_MAPPING_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-session-recipe">Session Recipe</h1>

## createNewSession

<a id="opIdcreateNewSession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/session' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userDataInJWT": {
      "test": 123
    },
    "userDataInDatabase": {
      "test": 123
    },
    "enableAntiCsrf": false,
    "useDynamicSigningKey": false
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/session`

Create a new Session


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "userDataInJWT": {
    "test": 123
  },
  "userDataInDatabase": {
    "test": 123
  },
  "enableAntiCsrf": false,
  "useDynamicSigningKey": false
}
```

<h3 id="createnewsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|false|none|
|» userDataInJWT|body|[userDataInJWT](#schemauserdatainjwt)|false|should be a JSON object (not a JSON literal nor an array)|
|» userDataInDatabase|body|[userDataInDatabase](#schemauserdataindatabase)|false|should be a JSON object (not a JSON literal nor an array)|
|» enableAntiCsrf|body|[enableAntiCsrf](#schemaenableanticsrf)|false|none|
|» useDynamicSigningKey|body|boolean|false|Decides if the token should be signed with a dynamic or static key, defaults to true|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "session": {
    "handle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userDataInJWT": {
      "test": 123
    },
    "tenantId": "customer1",
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
  },
  "accessToken": {
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "expiry": 1637262633029,
    "createdTime": 1637262633029
  },
  "refreshToken": {
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "expiry": 1637262633029,
    "createdTime": 1637262633029
  },
  "antiCsrfToken": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="createnewsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create a new Session|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createnewsession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|session|[session](#schemasession)|false|none|none|
|accessToken|[cookieInfo](#schemacookieinfo)|false|none|none|
|refreshToken|[cookieInfo](#schemacookieinfo)|false|none|none|
|antiCsrfToken|[token](#schematoken)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getSessionInfo

<a id="opIdgetSessionInfo"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/session' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/session`

Get user and session information for a given session handle


<h3 id="getsessioninfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|sessionHandle|query|[handle](#schemahandle)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "userDataInDatabase": {
    "test": 123
  },
  "userDataInJWT": {
    "test": 123
  },
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "expiry": 1637262633029,
  "timeCreated": 1637262633029,
  "sessionHandle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
  "tenantId": "customer1"
}
```

<h3 id="getsessioninfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get user and session information for a given session handle|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getsessioninfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|userDataInDatabase|[userDataInDatabase](#schemauserdataindatabase)|false|none|should be a JSON object (not a JSON literal nor an array)|
|userDataInJWT|[userDataInJWT](#schemauserdatainjwt)|false|none|should be a JSON object (not a JSON literal nor an array)|
|userId|[userId](#schemauserid)|false|none|none|
|expiry|[expiry](#schemaexpiry)|false|none|none|
|timeCreated|[timeCreated](#schematimecreated)|false|none|none|
|sessionHandle|[handle](#schemahandle)|false|none|none|
|tenantId|[tenantId](#schematenantid)|false|none|none|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSession

<a id="opIddeleteSession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/session/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sessionHandles": [
      "68en6gd6-865b-4af6-ba00-96e5c153257d"
    ]
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/session/remove`

Delete a sesion

If revoking session by `userId`, the sessions are cleared across all tenants by default.

Note: If `revokeAcrossAllTenants` is set to `true`, this API can only be called from `public` tenant.


> Body parameter

```json
{
  "sessionHandles": [
    "68en6gd6-865b-4af6-ba00-96e5c153257d"
  ]
}
```

<h3 id="deletesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» sessionHandles|body|[sessionHandles](#schemasessionhandles)|false|none|
|» *oneOf*|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» revokeAcrossAllTenants|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "sessionHandlesRevoked": [
    "68en6gd6-865b-4af6-ba00-96e5c153257d"
  ]
}
```

<h3 id="deletesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete a session|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deletesession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|sessionHandlesRevoked|[sessionHandles](#schemasessionhandles)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## verifySession

<a id="opIdverifySession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/session/verify' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accessToken": "ZTRiOTBjNz...jI5MTZlODkxw",
    "enableAntiCsrf": false,
    "doAntiCsrfCheck": false,
    "checkDatabase": false,
    "antiCsrfToken": "ZTRiOTBjNz...jI5MTZlODkxw"
  }'
```

`POST /appid-<appId>/recipe/session/verify`

Verify a Session


> Body parameter

```json
{
  "accessToken": "ZTRiOTBjNz...jI5MTZlODkxw",
  "enableAntiCsrf": false,
  "doAntiCsrfCheck": false,
  "checkDatabase": false,
  "antiCsrfToken": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="verifysession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» accessToken|body|[token](#schematoken)|false|none|
|» enableAntiCsrf|body|[enableAntiCsrf](#schemaenableanticsrf)|false|none|
|» doAntiCsrfCheck|body|boolean|false|none|
|» checkDatabase|body|boolean|false|Decides if we always check if the session exists in the DB or just do token validation, defaults to false.|
|» antiCsrfToken|body|[token](#schematoken)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "session": {
    "handle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userDataInJWT": {
      "test": 123
    },
    "tenantId": "customer1",
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
  },
  "accessToken": {
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "expiry": 1637262633029,
    "createdTime": 1637262633029
  }
}
```

<h3 id="verifysession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Verify a session|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="verifysession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|session|[session](#schemasession)|false|none|none|
|accessToken|[cookieInfo](#schemacookieinfo)|false|none|none|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|
|*oneOf*|object|false|none|none|
|status|[tryRefreshTokenResponse](#schematryrefreshtokenresponse)|false|none|none|
|message|[message](#schemamessage)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|TRY_REFRESH_TOKEN|

<aside class="success">
This operation does not require authentication
</aside>

## refreshSession

<a id="opIdrefreshSession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/session/refresh' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "refreshToken": "ZTRiOTBjNz...jI5MTZlODkxw",
    "enableAntiCsrf": false,
    "antiCsrfToken": "ZTRiOTBjNz...jI5MTZlODkxw",
    "useDynamicSigningKey": true
  }'
```

`POST /appid-<appId>/recipe/session/refresh`

Refresh a Session


> Body parameter

```json
{
  "refreshToken": "ZTRiOTBjNz...jI5MTZlODkxw",
  "enableAntiCsrf": false,
  "antiCsrfToken": "ZTRiOTBjNz...jI5MTZlODkxw",
  "useDynamicSigningKey": true
}
```

<h3 id="refreshsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» refreshToken|body|[token](#schematoken)|true|none|
|» enableAntiCsrf|body|[enableAntiCsrf](#schemaenableanticsrf)|true|none|
|» antiCsrfToken|body|[token](#schematoken)|false|none|
|» useDynamicSigningKey|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "session": {
    "handle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userDataInJWT": {
      "test": 123
    },
    "tenantId": "customer1",
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
  },
  "accessToken": {
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "expiry": 1637262633029,
    "createdTime": 1637262633029
  },
  "refreshToken": {
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "expiry": 1637262633029,
    "createdTime": 1637262633029
  },
  "antiCsrfToken": "ZTRiOTBjNz...jI5MTZlODkxw"
}
```

<h3 id="refreshsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Refresh a session|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="refreshsession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|session|[session](#schemasession)|false|none|none|
|accessToken|[cookieInfo](#schemacookieinfo)|false|none|none|
|refreshToken|[cookieInfo](#schemacookieinfo)|false|none|none|
|antiCsrfToken|[token](#schematoken)|false|none|none|
|*oneOf*|object|false|none|none|
|status|[tokenTheftResponse](#schematokentheftresponse)|false|none|none|
|session|object|false|none|none|
|» handle|[handle](#schemahandle)|false|none|none|
|» userId|[userId](#schemauserid)|false|none|none|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|TOKEN_THEFT_DETECTED|

<aside class="success">
This operation does not require authentication
</aside>

## getUserSessionHandles

<a id="opIdgetUserSessionHandles"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/session/user' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/session/user`

Get session handles for a user

By default, the session handles are fetched across all tenants. Set `fetchAcrossAllTenants` to `false` to get sessionHandles for the user for a particular tenant.

Note: If `fetchAcrossAllTenants` is set to `true`, this API can only be called from `public` tenant.


<h3 id="getusersessionhandles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|false|none|
|fetchAcrossAllTenants|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fetchAcrossAllTenants|true|
|fetchAcrossAllTenants|false|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "sessionHandles": [
    "68en6gd6-865b-4af6-ba00-96e5c153257d"
  ]
}
```

<h3 id="getusersessionhandles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get user Session Handles|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getusersessionhandles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|sessionHandles|[sessionHandles](#schemasessionhandles)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## regenerateSession

<a id="opIdregenerateSession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/session/regenerate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accessToken": "ZTRiOTBjNz...jI5MTZlODkxw",
    "userDataInJWT": {
      "test": 123
    }
  }'
```

`POST /appid-<appId>/recipe/session/regenerate`

Regenerate a session


> Body parameter

```json
{
  "accessToken": "ZTRiOTBjNz...jI5MTZlODkxw",
  "userDataInJWT": {
    "test": 123
  }
}
```

<h3 id="regeneratesession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» accessToken|body|[token](#schematoken)|false|none|
|» userDataInJWT|body|[userDataInJWT](#schemauserdatainjwt)|false|should be a JSON object (not a JSON literal nor an array)|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "session": {
    "handle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "userDataInJWT": {
      "test": 123
    },
    "tenantId": "customer1",
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
  },
  "accessToken": {
    "token": "ZTRiOTBjNz...jI5MTZlODkxw",
    "expiry": 1637262633029,
    "createdTime": 1637262633029
  }
}
```

<h3 id="regeneratesession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Regenerate user session|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="regeneratesession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|session|[session](#schemasession)|false|none|none|
|accessToken|[cookieInfo](#schemacookieinfo)|false|none|none|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getSessionData

<a id="opIdgetSessionData"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/session/data' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/session/data`

<aside class="warning">
This operation is deprecated
</aside>

Get session data


<h3 id="getsessiondata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|sessionHandle|query|[handle](#schemahandle)|false|Users session handle|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "userDataInDatabase": {
    "test": 123
  }
}
```

<h3 id="getsessiondata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Session Data|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getsessiondata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|userDataInDatabase|[userDataInDatabase](#schemauserdataindatabase)|false|none|should be a JSON object (not a JSON literal nor an array)|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## putSessionData

<a id="opIdputSessionData"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/session/data' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sessionHandle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
    "userDataInDatabase": {
      "test": 123
    }
  }'
```

`PUT /appid-<appId>/recipe/session/data`

Change session data


> Body parameter

```json
{
  "sessionHandle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
  "userDataInDatabase": {
    "test": 123
  }
}
```

<h3 id="putsessiondata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» sessionHandle|body|[handle](#schemahandle)|false|none|
|» userDataInDatabase|body|[userDataInDatabase](#schemauserdataindatabase)|false|should be a JSON object (not a JSON literal nor an array)|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="putsessiondata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change Session Data|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="putsessiondata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[statusOKResponse](#schemastatusokresponse)|false|none|none|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getJWTData

<a id="opIdgetJWTData"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/jwt/data' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/jwt/data`

<aside class="warning">
This operation is deprecated
</aside>

Get JWT data for a session


<h3 id="getjwtdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|sessionHandle|query|[handle](#schemahandle)|false|Users session handle|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "userDataInJWT": {
    "test": 123
  }
}
```

<h3 id="getjwtdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get JWT Data|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getjwtdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|userDataInJWT|[userDataInJWT](#schemauserdatainjwt)|false|none|should be a JSON object (not a JSON literal nor an array)|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## putJWTData

<a id="opIdputJWTData"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/jwt/data' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sessionHandle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
    "userDataInJWT": {
      "test": 123
    }
  }'
```

`PUT /appid-<appId>/<tenantId>/recipe/jwt/data`

Change JWT data for a session


> Body parameter

```json
{
  "sessionHandle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
  "userDataInJWT": {
    "test": 123
  }
}
```

<h3 id="putjwtdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» sessionHandle|body|[handle](#schemahandle)|false|none|
|» userDataInJWT|body|[userDataInJWT](#schemauserdatainjwt)|false|should be a JSON object (not a JSON literal nor an array)|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="putjwtdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Change JWT Data for a session|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="putjwtdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[statusOKResponse](#schemastatusokresponse)|false|none|none|
|*oneOf*|[unauthorisedMessageResponse](#schemaunauthorisedmessageresponse)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-multitenancy-recipe">Multitenancy Recipe</h1>

## createOrUpdateConnectionURIDomainPUT

<a id="opIdcreateOrUpdateConnectionURIDomainPUT"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/connectionuridomain \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionUriDomain": "core-1234.supertokens.io:3567",
    "emailPasswordEnabled": true,
    "thirdPartyEnabled": true,
    "passwordlessEnabled": true,
    "firstFactors": [
      "emailpassword"
    ],
    "requiredSecondaryFactors": [
      "otp-phone"
    ],
    "coreConfig": {}
  }'
```

`PUT /recipe/multitenancy/connectionuridomain`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still accepts those `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs for backward compatibility.

Create or update a connection uri domain.

SuperTokens subscription license key is required, if not using the base connection uri domain.

This request must originate from public app and public tenant on the base
connection uri domain.

If creating a new connection uri domain, only the login methods set to true will be enabled and rest will be disabled by default.

`firstFactors` and `requiredSecondaryFactors` can be set to null to remove all entries in the core, or a non empty string array to be updated in the core. Setting of empty array is disallowed.

Note: the create/update will fail if a login method is not enabled and a relavant factor is added to either `firstFactors` or `requiredSecondaryFactors`. For example, `emailPasswordEnabled` cannot be set to `false` if `emailpassword` is present in the `firstFactors` array.

If updating an existing connection uri domain,
1. core will keep the existing state of login methods and only update the ones that are specified in the request body.
2. Core config will be merged into existing config. To delete a key in the config, use a null value

Note: The core config must contain a unique connection to the storage layer, because sharing of database between 2 different connection uri domains is not allowed.

Note: Updation of core config is not allowed for the default connectionUriDomain. In order to update config for the default connectionUriDomain, you must edit the config.yaml or the docker env directly.


> Body parameter

```json
{
  "connectionUriDomain": "core-1234.supertokens.io:3567",
  "emailPasswordEnabled": true,
  "thirdPartyEnabled": true,
  "passwordlessEnabled": true,
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="createorupdateconnectionuridomainput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» connectionUriDomain|body|string|true|none|
|» emailPasswordEnabled|body|boolean|false|none|
|» thirdPartyEnabled|body|boolean|false|none|
|» passwordlessEnabled|body|boolean|false|none|
|» firstFactors|body|[firstFactors](#schemafirstfactors)|false|none|
|» requiredSecondaryFactors|body|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|
|» coreConfig|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdateconnectionuridomainput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update connection uri domain result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdateconnectionuridomainput-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOrUpdateConnectionURIDomainV2PUT

<a id="opIdcreateOrUpdateConnectionURIDomainV2PUT"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/connectionuridomain/v2 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionUriDomain": "core-1234.supertokens.io:3567",
    "firstFactors": [
      "emailpassword"
    ],
    "requiredSecondaryFactors": [
      "otp-phone"
    ],
    "coreConfig": {}
  }'
```

`PUT /recipe/multitenancy/connectionuridomain/v2`

Create or update a connection uri domain.

SuperTokens subscription license key is required, if not using the base connection uri domain.

This request must originate from public app and public tenant on the base
connection uri domain.

The `firstFactors` can be set to following values:

- `null`: When set to `null`, all the login methods will be available for the connection URI domain (public app, public tenant).
- `[]` (empty array): No login methods will be enabled for the connection URI domain (public app, public tenant).
- `['factor1', 'factor2', ...]` (non-empty array): The list of login methods to enable for the connection URI domain (public app, public tenant). For eg. if this is set to `['emailpassword', 'thirdparty']`, the users of the tenant will be able to login using emailpassword and third party providers.

List of built-in first factors are as follows:

- Email password auth: `emailpassword`
- Social login / enterprise SSO auth: `thirdparty`
- Passwordless:
  - With email OTP: `otp-email`
  - With SMS OTP: `otp-phone`
  - With email magic link: `link-email`
  - With SMS magic link: `link-phone`

If first factors are not specified while creating a new connection uri domain, all the login methods will be enabled by default.

The `requiredSecondaryFactors` can be set to following values:
- `null`: When set to `null`, no secondary factors will be required for the users of the connection URI domain (public app, public tenant).
- `['factor1', 'factor2', ...]` (non-empty array): The list of factors that the users of the connection URI domain (public app, public tenant) must complete post the first factor login. For eg. if this is set to `['otp-phone', 'totp']`, the users of the tenant will be required to complete either phone OTP or TOTP post the first factor login.

List of built-in secondary factors are as follows:

- Email password auth: `emailpassword`
- Social login / enterprise SSO auth: `thirdparty`
- Passwordless:
  - With email OTP: `otp-email`
  - With SMS OTP: `otp-phone`
  - With email magic link: `link-email`
  - With SMS magic link: `link-phone`
- Time based OTP: `totp`

If updating an existing connection uri domain,
1. core will keep the existing state of login methods and only update the ones that are specified in the request body.
2. Core config will be merged into existing config. To delete a key in the config, use a null value

Note: The core config must contain a unique connection to the storage layer, because sharing of database between 2 different connection uri domains is not allowed.

Note: Updation of core config is not allowed for the default connectionUriDomain. In order to update config for the default connectionUriDomain, you must edit the config.yaml or the docker env directly.


> Body parameter

```json
{
  "connectionUriDomain": "core-1234.supertokens.io:3567",
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="createorupdateconnectionuridomainv2put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» connectionUriDomain|body|string|true|none|
|» firstFactors|body|[firstFactors](#schemafirstfactors)|false|none|
|» requiredSecondaryFactors|body|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|
|» coreConfig|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdateconnectionuridomainv2put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update connection uri domain result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdateconnectionuridomainv2put-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## deleteConnectionUriDomainPOST

<a id="opIddeleteConnectionUriDomainPOST"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/connectionuridomain/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "connectionUriDomain": "core-1234.supertokens.io:3567"
  }'
```

`POST /recipe/multitenancy/connectionuridomain/remove`

Delete a connection uri domain.

Deletion of base connection uri domain is not allowed.

The request must originate from base connection uri domain and public app and tenant.

Note: There should be no apps or tenants (other than the public app and public tenant) belonging to the connection uri domain to be able to delete it.


> Body parameter

```json
{
  "connectionUriDomain": "core-1234.supertokens.io:3567"
}
```

<h3 id="deleteconnectionuridomainpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» connectionUriDomain|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="deleteconnectionuridomainpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Remove connection uri domain result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deleteconnectionuridomainpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|didExist|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## connectionUriDomainListGET

<a id="opIdconnectionUriDomainListGET"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/connectionuridomain/list \
  -H 'Accept: application/json'
```

`GET /recipe/multitenancy/connectionuridomain/list`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371

Get a list of all connection uri domains.

Request must originate from base connection uri domain and public app and tenant.


<h3 id="connectionuridomainlistget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "connectionUriDomains": [
    {
      "connectionUriDomain": "core-1234.supertokens.io:3567",
      "apps": [
        {
          "appId": "app1",
          "tenants": [
            {
              "tenantId": "customer1",
              "emailPassword": {
                "enabled": true
              },
              "thirdParty": {
                "enabled": true,
                "providers": [
                  {
                    "thirdPartyId": "string",
                    "name": "string",
                    "clients": [
                      {
                        "clientType": "string",
                        "clientId": "string",
                        "clientSecret": "string",
                        "scope": [
                          "string"
                        ],
                        "forcePKCE": true,
                        "additionalConfig": {}
                      }
                    ],
                    "authorizationEndpoint": "string",
                    "authorizationEndpointQueryParams": {},
                    "tokenEndpoint": "string",
                    "tokenEndpointBodyParams": {},
                    "userInfoEndpoint": "string",
                    "userInfoEndpointQueryParams": {},
                    "userInfoEndpointHeaders": {},
                    "jwksURI": "string",
                    "oidcDiscoveryEndpoint": "string",
                    "requireEmail": true,
                    "userInfoMap": {
                      "fromIdTokenPayload": {
                        "userId": "string",
                        "email": "string",
                        "emailVerified": "string"
                      },
                      "fromUserInfoAPI": {
                        "userId": "string",
                        "email": "string",
                        "emailVerified": "string"
                      }
                    }
                  }
                ]
              },
              "passwordless": {
                "enabled": true
              },
              "firstFactors": [
                "emailpassword"
              ],
              "requiredSecondaryFactors": [
                "otp-phone"
              ],
              "coreConfig": {}
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="connectionuridomainlistget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of connection uri domains|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="connectionuridomainlistget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|connectionUriDomains|[object]|true|none|none|
|» connectionUriDomain|string|false|none|none|
|» apps|[object]|false|none|none|
|» » appId|string|false|none|none|
|» » tenants|[[tenantConfig](#schematenantconfig)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## connectionUriDomainListV2GET

<a id="opIdconnectionUriDomainListV2GET"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/connectionuridomain/list/v2 \
  -H 'Accept: application/json'
```

`GET /recipe/multitenancy/connectionuridomain/list/v2`

Get a list of all connection uri domains.

The value of `firstFactors` can be as follows:
- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK
- `[]` (empty array): No first factors would be enabled for the tenant
- non-empty array: The first factors that are enabled for the tenant

Request must originate from base connection uri domain and public app and tenant.


<h3 id="connectionuridomainlistv2get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "connectionUriDomains": [
    {
      "connectionUriDomain": "core-1234.supertokens.io:3567",
      "apps": [
        {
          "appId": "app1",
          "tenants": [
            {
              "tenantId": "customer1",
              "thirdParty": {
                "providers": [
                  {
                    "thirdPartyId": "string",
                    "name": "string",
                    "clients": [
                      {
                        "clientType": "string",
                        "clientId": "string",
                        "clientSecret": "string",
                        "scope": [
                          "string"
                        ],
                        "forcePKCE": true,
                        "additionalConfig": {}
                      }
                    ],
                    "authorizationEndpoint": "string",
                    "authorizationEndpointQueryParams": {},
                    "tokenEndpoint": "string",
                    "tokenEndpointBodyParams": {},
                    "userInfoEndpoint": "string",
                    "userInfoEndpointQueryParams": {},
                    "userInfoEndpointHeaders": {},
                    "jwksURI": "string",
                    "oidcDiscoveryEndpoint": "string",
                    "requireEmail": true,
                    "userInfoMap": {
                      "fromIdTokenPayload": {
                        "userId": "string",
                        "email": "string",
                        "emailVerified": "string"
                      },
                      "fromUserInfoAPI": {
                        "userId": "string",
                        "email": "string",
                        "emailVerified": "string"
                      }
                    }
                  }
                ]
              },
              "firstFactors": [
                "emailpassword"
              ],
              "requiredSecondaryFactors": [
                "otp-phone"
              ],
              "coreConfig": {}
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="connectionuridomainlistv2get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of connection uri domains|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="connectionuridomainlistv2get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|connectionUriDomains|[object]|true|none|none|
|» connectionUriDomain|string|false|none|none|
|» apps|[object]|false|none|none|
|» » appId|string|false|none|none|
|» » tenants|[[tenantConfigV2](#schematenantconfigv2)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOrUpdateAppPUT

<a id="opIdcreateOrUpdateAppPUT"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/app \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "appId": "app1",
    "emailPasswordEnabled": true,
    "thirdPartyEnabled": true,
    "passwordlessEnabled": true,
    "firstFactors": [
      "emailpassword"
    ],
    "requiredSecondaryFactors": [
      "otp-phone"
    ],
    "coreConfig": {}
  }'
```

`PUT /recipe/multitenancy/app`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still accepts those `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs for backward compatibility.

Create or update an app.

SuperTokens subscription license key is required.

If creating a new app, only the login methods set to true will be enabled and rest will be disabled by default.

`firstFactors` and `requiredSecondaryFactors` can be set to null to remove all entries in the core, or a non empty string array to be updated in the core. Setting of empty array is disallowed.

Note: the create/update will fail if a login method is not enabled and a relavant factor is added to either `firstFactors` or `requiredSecondaryFactors`. For example, `emailPasswordEnabled` cannot be set to `false` if `emailpassword` is present in the `firstFactors` array.

If updating an existing app,
1. core will keep the existing state of login methods and only update the ones that are specified in the request body.
2. Core config will be merged into existing config. To delete a key in the config, use a null value

Note: the newly created app will use the same connection uri domain from which
this request originates and the request must originate from public app and public tenant.

Note: Updation of core config is not allowed for the default connectionUriDomain, public app. In order to update config for the default connectionUriDomain and public app, you must edit the config.yaml or the docker env directly.


> Body parameter

```json
{
  "appId": "app1",
  "emailPasswordEnabled": true,
  "thirdPartyEnabled": true,
  "passwordlessEnabled": true,
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="createorupdateappput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» appId|body|string|true|none|
|» emailPasswordEnabled|body|boolean|false|none|
|» thirdPartyEnabled|body|boolean|false|none|
|» passwordlessEnabled|body|boolean|false|none|
|» firstFactors|body|[firstFactors](#schemafirstfactors)|false|none|
|» requiredSecondaryFactors|body|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|
|» coreConfig|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdateappput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update app result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdateappput-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOrUpdateAppV2PUT

<a id="opIdcreateOrUpdateAppV2PUT"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/app/v2 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "appId": "app1",
    "firstFactors": [
      "emailpassword"
    ],
    "requiredSecondaryFactors": [
      "otp-phone"
    ],
    "coreConfig": {}
  }'
```

`PUT /recipe/multitenancy/app/v2`

Create or update an app.

SuperTokens subscription license key is required.

The `firstFactors` can be set to following values:

- `null`: When set to `null`, all the login methods will be available for the app (public tenant).
- `[]` (empty array): No login methods will be enabled for the app (public tenant).
- `['factor1', 'factor2', ...]` (non-empty array): The list of login methods to enable for the app (public tenant). For eg. if this is set to `['emailpassword', 'thirdparty']`, the users of the tenant will be able to login using emailpassword and third party providers.

List of built-in first factors are as follows:

- Email password auth: `emailpassword`
- Social login / enterprise SSO auth: `thirdparty`
- Passwordless:
  - With email OTP: `otp-email`
  - With SMS OTP: `otp-phone`
  - With email magic link: `link-email`
  - With SMS magic link: `link-phone`

If first factors are not specified while creating a new app, all the login methods will be enabled by default.

The `requiredSecondaryFactors` can be set to following values:
- `null`: When set to `null`, no secondary factors will be required for the users of the app (public tenant).
- `['factor1', 'factor2', ...]` (non-empty array): The list of factors that the users of the app (public tenant) must complete post the first factor login. For eg. if this is set to `['otp-phone', 'totp']`, the users of the tenant will be required to complete either phone OTP or TOTP post the first factor login.

List of built-in secondary factors are as follows:

- Email password auth: `emailpassword`
- Social login / enterprise SSO auth: `thirdparty`
- Passwordless:
  - With email OTP: `otp-email`
  - With SMS OTP: `otp-phone`
  - With email magic link: `link-email`
  - With SMS magic link: `link-phone`
- Time based OTP: `totp`

If updating an existing app,
1. core will keep the existing state of login methods and only update the ones that are specified in the request body.
2. Core config will be merged into existing config. To delete a key in the config, use a null value

Note: the newly created app will use the same connection uri domain from which
this request originates and the request must originate from public app and public tenant.

Note: Updation of core config is not allowed for the default connectionUriDomain, public app. In order to update config for the default connectionUriDomain and public app, you must edit the config.yaml or the docker env directly.


> Body parameter

```json
{
  "appId": "app1",
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="createorupdateappv2put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» appId|body|string|true|none|
|» firstFactors|body|[firstFactors](#schemafirstfactors)|false|none|
|» requiredSecondaryFactors|body|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|
|» coreConfig|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdateappv2put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update app result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdateappv2put-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAppPOST

<a id="opIddeleteAppPOST"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/app/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "appId": "app1"
  }'
```

`POST /recipe/multitenancy/app/remove`

Delete an app.

Request must originate from public app and tenant.

Note: No tenants (other than the public tenant) must belong to the app to be able to delete it.


> Body parameter

```json
{
  "appId": "app1"
}
```

<h3 id="deleteapppost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» appId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="deleteapppost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Remove app result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deleteapppost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|didExist|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## appListGET

<a id="opIdappListGET"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/app/list \
  -H 'Accept: application/json'
```

`GET /recipe/multitenancy/app/list`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371

Get a list of all apps in a connection uri domain.

Request must originate from public app and tenant.


<h3 id="applistget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "apps": [
    {
      "appId": "app1",
      "tenants": [
        {
          "tenantId": "customer1",
          "emailPassword": {
            "enabled": true
          },
          "thirdParty": {
            "enabled": true,
            "providers": [
              {
                "thirdPartyId": "string",
                "name": "string",
                "clients": [
                  {
                    "clientType": "string",
                    "clientId": "string",
                    "clientSecret": "string",
                    "scope": [
                      "string"
                    ],
                    "forcePKCE": true,
                    "additionalConfig": {}
                  }
                ],
                "authorizationEndpoint": "string",
                "authorizationEndpointQueryParams": {},
                "tokenEndpoint": "string",
                "tokenEndpointBodyParams": {},
                "userInfoEndpoint": "string",
                "userInfoEndpointQueryParams": {},
                "userInfoEndpointHeaders": {},
                "jwksURI": "string",
                "oidcDiscoveryEndpoint": "string",
                "requireEmail": true,
                "userInfoMap": {
                  "fromIdTokenPayload": {
                    "userId": "string",
                    "email": "string",
                    "emailVerified": "string"
                  },
                  "fromUserInfoAPI": {
                    "userId": "string",
                    "email": "string",
                    "emailVerified": "string"
                  }
                }
              }
            ]
          },
          "passwordless": {
            "enabled": true
          },
          "firstFactors": [
            "emailpassword"
          ],
          "requiredSecondaryFactors": [
            "otp-phone"
          ],
          "coreConfig": {}
        }
      ]
    }
  ]
}
```

<h3 id="applistget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of apps|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="applistget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|apps|[object]|true|none|none|
|» appId|string|false|none|none|
|» tenants|[[tenantConfig](#schematenantconfig)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## appListV2GET

<a id="opIdappListV2GET"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/multitenancy/app/list/v2 \
  -H 'Accept: application/json'
```

`GET /recipe/multitenancy/app/list/v2`

Get a list of all apps in a connection uri domain.

The value of `firstFactors` can be as follows:
- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK
- `[]` (empty array): No first factors would be enabled for the tenant
- non-empty array: The first factors that are enabled for the tenant

Request must originate from public app and tenant.


<h3 id="applistv2get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "apps": [
    {
      "appId": "app1",
      "tenants": [
        {
          "tenantId": "customer1",
          "thirdParty": {
            "providers": [
              {
                "thirdPartyId": "string",
                "name": "string",
                "clients": [
                  {
                    "clientType": "string",
                    "clientId": "string",
                    "clientSecret": "string",
                    "scope": [
                      "string"
                    ],
                    "forcePKCE": true,
                    "additionalConfig": {}
                  }
                ],
                "authorizationEndpoint": "string",
                "authorizationEndpointQueryParams": {},
                "tokenEndpoint": "string",
                "tokenEndpointBodyParams": {},
                "userInfoEndpoint": "string",
                "userInfoEndpointQueryParams": {},
                "userInfoEndpointHeaders": {},
                "jwksURI": "string",
                "oidcDiscoveryEndpoint": "string",
                "requireEmail": true,
                "userInfoMap": {
                  "fromIdTokenPayload": {
                    "userId": "string",
                    "email": "string",
                    "emailVerified": "string"
                  },
                  "fromUserInfoAPI": {
                    "userId": "string",
                    "email": "string",
                    "emailVerified": "string"
                  }
                }
              }
            ]
          },
          "firstFactors": [
            "emailpassword"
          ],
          "requiredSecondaryFactors": [
            "otp-phone"
          ],
          "coreConfig": {}
        }
      ]
    }
  ]
}
```

<h3 id="applistv2get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of apps|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="applistv2get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|apps|[object]|true|none|none|
|» appId|string|false|none|none|
|» tenants|[[tenantConfigV2](#schematenantconfigv2)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOrUpdateTenantPUT

<a id="opIdcreateOrUpdateTenantPUT"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/multitenancy/tenant' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tenantId": "customer1",
    "emailPasswordEnabled": true,
    "thirdPartyEnabled": true,
    "passwordlessEnabled": true,
    "firstFactors": [
      "emailpassword"
    ],
    "requiredSecondaryFactors": [
      "otp-phone"
    ],
    "coreConfig": {}
  }'
```

`PUT /appid-<appId>/recipe/multitenancy/tenant`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still accepts those `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs for backward compatibility.

Creates or updates a tenant.

SuperTokens subscription license key is required.

If creating a new tenant, only the login methods set to true will be enabled and rest will be disabled by default.

`firstFactors` and `requiredSecondaryFactors` can be set to null to remove all entries in the core, or a non empty string array to be updated in the core. Setting of empty array is disallowed.

Note: the create/update will fail if a login method is not enabled and a relavant factor is added to either `firstFactors` or `requiredSecondaryFactors`. For example, `emailPasswordEnabled` cannot be set to `false` if `emailpassword` is present in the `firstFactors` array.

If updating an existing tenant,
1. core will keep the existing state of login methods and only update the ones that are specified in the request body.
2. Core config will be merged into existing config. To delete a key in the config, use a null value

The request must originate from public tenant, and the new tenant will use connectionUriDomain and app from which the request originates.

Note: Updation of core config is not allowed for the default connectionUriDomain, public app and tenant. In order to update config for the default connectionUriDomain, public app and tenant, you must edit the config.yaml or the docker env directly.


> Body parameter

```json
{
  "tenantId": "customer1",
  "emailPasswordEnabled": true,
  "thirdPartyEnabled": true,
  "passwordlessEnabled": true,
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="createorupdatetenantput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» tenantId|body|[tenantId](#schematenantid)|true|none|
|» emailPasswordEnabled|body|boolean|false|none|
|» thirdPartyEnabled|body|boolean|false|none|
|» passwordlessEnabled|body|boolean|false|none|
|» firstFactors|body|[firstFactors](#schemafirstfactors)|false|none|
|» requiredSecondaryFactors|body|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|
|» coreConfig|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdatetenantput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update tenant result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdatetenantput-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOrUpdateTenantV2PUT

<a id="opIdcreateOrUpdateTenantV2PUT"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/multitenancy/tenant/v2' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tenantId": "customer1",
    "firstFactors": [
      "emailpassword"
    ],
    "requiredSecondaryFactors": [
      "otp-phone"
    ],
    "coreConfig": {}
  }'
```

`PUT /appid-<appId>/recipe/multitenancy/tenant/v2`

Creates or updates a tenant.

SuperTokens subscription license key is required.

The `firstFactors` can be set to following values:

- `null`: When set to `null`, all the login methods will be available for the tenant.
- `[]` (empty array): No login methods will be enabled for the tenant.
- `['factor1', 'factor2', ...]` (non-empty array): The list of login methods to enable for the tenant. For eg. if this is set to `['emailpassword', 'thirdparty']`, the users of the tenant will be able to login using emailpassword and third party providers.

List of built-in first factors are as follows:

- Email password auth: `emailpassword`
- Social login / enterprise SSO auth: `thirdparty`
- Passwordless:
  - With email OTP: `otp-email`
  - With SMS OTP: `otp-phone`
  - With email magic link: `link-email`
  - With SMS magic link: `link-phone`

If first factors are not specified while creating a new tenant, all the login methods will be disabled by default.

The `requiredSecondaryFactors` can be set to following values:
- `null`: When set to `null`, no secondary factors will be required for the users of the tenant.
- `['factor1', 'factor2', ...]` (non-empty array): The list of factors that the users of the tenant must complete post the first factor login. For eg. if this is set to `['otp-phone', 'totp']`, the users of the tenant will be required to complete either phone OTP or TOTP post the first factor login.

List of built-in secondary factors are as follows:

- Email password auth: `emailpassword`
- Social login / enterprise SSO auth: `thirdparty`
- Passwordless:
  - With email OTP: `otp-email`
  - With SMS OTP: `otp-phone`
  - With email magic link: `link-email`
  - With SMS magic link: `link-phone`
- Time based OTP: `totp`

If updating an existing tenant,
1. core will keep the existing state of login methods and only update the ones that are specified in the request body.
2. Core config will be merged into existing config. To delete a key in the config, use a null value

The request must originate from public tenant, and the new tenant will use connectionUriDomain and app from which the request originates.

Note: Updation of core config is not allowed for the default connectionUriDomain, public app and tenant. In order to update config for the default connectionUriDomain, public app and tenant, you must edit the config.yaml or the docker env directly.


> Body parameter

```json
{
  "tenantId": "customer1",
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="createorupdatetenantv2put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» tenantId|body|[tenantId](#schematenantid)|true|none|
|» firstFactors|body|[firstFactors](#schemafirstfactors)|false|none|
|» requiredSecondaryFactors|body|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|
|» coreConfig|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdatetenantv2put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update tenant result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdatetenantv2put-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## tenantConfigGet

<a id="opIdtenantConfigGet"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/multitenancy/tenant' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/multitenancy/tenant`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371

Get a tenant config of the tenant specified by the url prefix.

SuperTokens subscription license key is required if querying any tenant other than the base tenant.

Returns recipes with their enabled flag and recipe specific configs saved in core


<h3 id="tenantconfigget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tenantId": "customer1",
  "emailPassword": {
    "enabled": true
  },
  "thirdParty": {
    "enabled": true,
    "providers": [
      {
        "thirdPartyId": "string",
        "name": "string",
        "clients": [
          {
            "clientType": "string",
            "clientId": "string",
            "clientSecret": "string",
            "scope": [
              "string"
            ],
            "forcePKCE": true,
            "additionalConfig": {}
          }
        ],
        "authorizationEndpoint": "string",
        "authorizationEndpointQueryParams": {},
        "tokenEndpoint": "string",
        "tokenEndpointBodyParams": {},
        "userInfoEndpoint": "string",
        "userInfoEndpointQueryParams": {},
        "userInfoEndpointHeaders": {},
        "jwksURI": "string",
        "oidcDiscoveryEndpoint": "string",
        "requireEmail": true,
        "userInfoMap": {
          "fromIdTokenPayload": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          },
          "fromUserInfoAPI": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          }
        }
      }
    ]
  },
  "passwordless": {
    "enabled": true
  },
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="tenantconfigget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenant config result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="tenantconfigget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|tenantId|[tenantId](#schematenantid)|true|none|none|
|emailPassword|object|true|none|none|
|» enabled|boolean|true|none|none|
|thirdParty|object|true|none|none|
|» enabled|boolean|true|none|none|
|» providers|[[thirdPartyProviderConfig](#schemathirdpartyproviderconfig)]|false|none|none|
|passwordless|object|true|none|none|
|» enabled|boolean|true|none|none|
|firstFactors|[firstFactors](#schemafirstfactors)|false|none|none|
|requiredSecondaryFactors|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|none|
|coreConfig|object|true|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|TENANT_NOT_FOUND_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## tenantConfigV2Get

<a id="opIdtenantConfigV2Get"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/v2' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/multitenancy/tenant/v2`

Get a tenant config of the tenant specified by the url prefix.

The value of `firstFactors` can be as follows:
- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK
- `[]` (empty array): No first factors would be enabled for the tenant
- non-empty array: The first factors that are enabled for the tenant

SuperTokens subscription license key is required if querying any tenant other than the base tenant.

Returns recipes with their enabled flag and recipe specific configs saved in core


<h3 id="tenantconfigv2get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tenantId": "customer1",
  "thirdParty": {
    "providers": [
      {
        "thirdPartyId": "string",
        "name": "string",
        "clients": [
          {
            "clientType": "string",
            "clientId": "string",
            "clientSecret": "string",
            "scope": [
              "string"
            ],
            "forcePKCE": true,
            "additionalConfig": {}
          }
        ],
        "authorizationEndpoint": "string",
        "authorizationEndpointQueryParams": {},
        "tokenEndpoint": "string",
        "tokenEndpointBodyParams": {},
        "userInfoEndpoint": "string",
        "userInfoEndpointQueryParams": {},
        "userInfoEndpointHeaders": {},
        "jwksURI": "string",
        "oidcDiscoveryEndpoint": "string",
        "requireEmail": true,
        "userInfoMap": {
          "fromIdTokenPayload": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          },
          "fromUserInfoAPI": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          }
        }
      }
    ]
  },
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

<h3 id="tenantconfigv2get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenant config result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="tenantconfigv2get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|tenantId|[tenantId](#schematenantid)|true|none|none|
|thirdParty|object|true|none|none|
|» providers|[[thirdPartyProviderConfig](#schemathirdpartyproviderconfig)]|false|none|none|
|firstFactors|[firstFactors](#schemafirstfactors)|false|none|none|
|requiredSecondaryFactors|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|none|
|coreConfig|object|true|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|TENANT_NOT_FOUND_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## deleteTenantPOST

<a id="opIddeleteTenantPOST"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/multitenancy/tenant/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tenantId": "customer1"
  }'
```

`POST /appid-<appId>/recipe/multitenancy/tenant/remove`

Delete a tenant.

Request must originate from public tenant.


> Body parameter

```json
{
  "tenantId": "customer1"
}
```

<h3 id="deletetenantpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» tenantId|body|[tenantId](#schematenantid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="deletetenantpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Remove tenant result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deletetenantpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|didExist|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## tenantListGET

<a id="opIdtenantListGET"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/multitenancy/tenant/list' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/multitenancy/tenant/list`

<aside class="warning">
This operation is deprecated
</aside>

This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.

Note: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371

Get a list of all tenants in an app.

Request must originate from public tenant.


<h3 id="tenantlistget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tenants": [
    {
      "tenantId": "customer1",
      "emailPassword": {
        "enabled": true
      },
      "thirdParty": {
        "enabled": true,
        "providers": [
          {
            "thirdPartyId": "string",
            "name": "string",
            "clients": [
              {
                "clientType": "string",
                "clientId": "string",
                "clientSecret": "string",
                "scope": [
                  "string"
                ],
                "forcePKCE": true,
                "additionalConfig": {}
              }
            ],
            "authorizationEndpoint": "string",
            "authorizationEndpointQueryParams": {},
            "tokenEndpoint": "string",
            "tokenEndpointBodyParams": {},
            "userInfoEndpoint": "string",
            "userInfoEndpointQueryParams": {},
            "userInfoEndpointHeaders": {},
            "jwksURI": "string",
            "oidcDiscoveryEndpoint": "string",
            "requireEmail": true,
            "userInfoMap": {
              "fromIdTokenPayload": {
                "userId": "string",
                "email": "string",
                "emailVerified": "string"
              },
              "fromUserInfoAPI": {
                "userId": "string",
                "email": "string",
                "emailVerified": "string"
              }
            }
          }
        ]
      },
      "passwordless": {
        "enabled": true
      },
      "firstFactors": [
        "emailpassword"
      ],
      "requiredSecondaryFactors": [
        "otp-phone"
      ],
      "coreConfig": {}
    }
  ]
}
```

<h3 id="tenantlistget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tenants|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="tenantlistget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|tenants|[[tenantConfig](#schematenantconfig)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## tenantListV2GET

<a id="opIdtenantListV2GET"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/multitenancy/tenant/list/v2' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/multitenancy/tenant/list/v2`

Get a list of all tenants in an app.

The value of `firstFactors` can be as follows:
- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK
- `[]` (empty array): No first factors would be enabled for the tenant
- non-empty array: The first factors that are enabled for the tenant

Request must originate from public tenant.


<h3 id="tenantlistv2get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tenants": [
    {
      "tenantId": "customer1",
      "thirdParty": {
        "providers": [
          {
            "thirdPartyId": "string",
            "name": "string",
            "clients": [
              {
                "clientType": "string",
                "clientId": "string",
                "clientSecret": "string",
                "scope": [
                  "string"
                ],
                "forcePKCE": true,
                "additionalConfig": {}
              }
            ],
            "authorizationEndpoint": "string",
            "authorizationEndpointQueryParams": {},
            "tokenEndpoint": "string",
            "tokenEndpointBodyParams": {},
            "userInfoEndpoint": "string",
            "userInfoEndpointQueryParams": {},
            "userInfoEndpointHeaders": {},
            "jwksURI": "string",
            "oidcDiscoveryEndpoint": "string",
            "requireEmail": true,
            "userInfoMap": {
              "fromIdTokenPayload": {
                "userId": "string",
                "email": "string",
                "emailVerified": "string"
              },
              "fromUserInfoAPI": {
                "userId": "string",
                "email": "string",
                "emailVerified": "string"
              }
            }
          }
        ]
      },
      "firstFactors": [
        "emailpassword"
      ],
      "requiredSecondaryFactors": [
        "otp-phone"
      ],
      "coreConfig": {}
    }
  ]
}
```

<h3 id="tenantlistv2get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tenants|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="tenantlistv2get-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|tenants|[[tenantConfigV2](#schematenantconfigv2)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOrUpdateTenantConfigPUT

<a id="opIdcreateOrUpdateTenantConfigPUT"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": {
      "thirdPartyId": "string",
      "name": "string",
      "clients": [
        {
          "clientType": "string",
          "clientId": "string",
          "clientSecret": "string",
          "scope": [
            "string"
          ],
          "forcePKCE": true,
          "additionalConfig": {}
        }
      ],
      "authorizationEndpoint": "string",
      "authorizationEndpointQueryParams": {},
      "tokenEndpoint": "string",
      "tokenEndpointBodyParams": {},
      "userInfoEndpoint": "string",
      "userInfoEndpointQueryParams": {},
      "userInfoEndpointHeaders": {},
      "jwksURI": "string",
      "oidcDiscoveryEndpoint": "string",
      "requireEmail": true,
      "userInfoMap": {
        "fromIdTokenPayload": {
          "userId": "string",
          "email": "string",
          "emailVerified": "string"
        },
        "fromUserInfoAPI": {
          "userId": "string",
          "email": "string",
          "emailVerified": "string"
        }
      }
    },
    "skipValidation": false
  }'
```

`PUT /appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty`

Creates or updates ThirdParty Provider Config for a tenant.

If `skipValidation` is set to true, the config will be saved without any validation.

If the config already exists for the given `tenantId` and `thirdPartyId`, the config in the core will be completely replaced with the config provided in the request body.

**Validations done by the core:**

`thirdPartyId` and `name` are required

Common to all providers:
  - `clients` list:
    - can be undefined or empty
    - if contains 1 element, clientType can be empty or undefined
    - if contains more than 1 element, clientType must be defined and unique
  - for each element in `clients`:
    - `clientId` must not be empty

Built-in provider's specific validation is invoked if the `thirdPartyId` starts with the provider's id

Apple (id: apple):
  - `clients`
    - if it contains elements, each of them are validated as follows:
      - `clientSecret` must be empty or undefined
      - `additionalConfig` should contain the following keys:
        - `keyId` must be a non empty string
        - `teamId` must be a non empty string
        - `privateKey` must be a non empty string

Google Workspaces (id: google-workspaces):
  - `clients`
    - if it contains elements, each of them are validated as follows:
      - `additionalConfig` may contain the key `hd`
        - `hd` is optional
        - if specified, it must be either `"*"`, or a valid domain

Boxy SAML (id: boxy-saml):
  - `clients`
    - `additionalConfig` in the each element must contain `boxyURL` and must be non-empty string


> Body parameter

```json
{
  "config": {
    "thirdPartyId": "string",
    "name": "string",
    "clients": [
      {
        "clientType": "string",
        "clientId": "string",
        "clientSecret": "string",
        "scope": [
          "string"
        ],
        "forcePKCE": true,
        "additionalConfig": {}
      }
    ],
    "authorizationEndpoint": "string",
    "authorizationEndpointQueryParams": {},
    "tokenEndpoint": "string",
    "tokenEndpointBodyParams": {},
    "userInfoEndpoint": "string",
    "userInfoEndpointQueryParams": {},
    "userInfoEndpointHeaders": {},
    "jwksURI": "string",
    "oidcDiscoveryEndpoint": "string",
    "requireEmail": true,
    "userInfoMap": {
      "fromIdTokenPayload": {
        "userId": "string",
        "email": "string",
        "emailVerified": "string"
      },
      "fromUserInfoAPI": {
        "userId": "string",
        "email": "string",
        "emailVerified": "string"
      }
    }
  },
  "skipValidation": false
}
```

<h3 id="createorupdatetenantconfigput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» config|body|[thirdPartyProviderConfig](#schemathirdpartyproviderconfig)|true|none|
|» skipValidation|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "createdNew": true
}
```

<h3 id="createorupdatetenantconfigput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create or Update result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createorupdatetenantconfigput-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|true|none|none|
|createdNew|boolean|true|none|none|
|*oneOf*|object|false|none|none|
|status|string|true|none|none|
|reason|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|CONFIG_VALIDATION_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## deleteTenantConfigPOST

<a id="opIddeleteTenantConfigPOST"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "thirdPartyId": "google"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty/remove`

Delete ThirdParty Provider config for a tenant.


> Body parameter

```json
{
  "thirdPartyId": "google"
}
```

<h3 id="deletetenantconfigpost-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» thirdPartyId|body|[thirdPartyId](#schemathirdpartyid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didConfigExist": true
}
```

<h3 id="deletetenantconfigpost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Remove thirdParty config result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deletetenantconfigpost-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didConfigExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## addUserToTenant

<a id="opIdaddUserToTenant"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user`

Add user's association with the tenant.

User will be added to the tenant based on the url prefix of the request.

Note: To associate a user to a tenant, the tenant must be in the same database
and user must already exist in the app


> Body parameter

```json
{
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="addusertotenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» recipeUserId|body|[userId](#schemauserid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "wasAlreadyAssociated": true
}
```

<h3 id="addusertotenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Association result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="addusertotenant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|true|none|none|
|wasAlreadyAssociated|boolean|true|none|none|
|*oneOf*|object|false|none|none|
|status|string|true|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|reason|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|
|status|EMAIL_ALREADY_EXISTS_ERROR|
|status|PHONE_NUMBER_ALREADY_EXISTS_ERROR|
|status|THIRD_PARTY_USER_ALREADY_EXISTS_ERROR|
|status|ASSOCIATION_NOT_ALLOWED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## removeUserFromTenant

<a id="opIdremoveUserFromTenant"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user/remove`

Remove user's association with the tenant

User will be removed from the tenant based on the url prefix of the request.


> Body parameter

```json
{
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

<h3 id="removeuserfromtenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» recipeUserId|body|[userId](#schemauserid)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "wasAssociated": true
}
```

<h3 id="removeuserfromtenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Disassociation result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="removeuserfromtenant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|wasAssociated|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-core">Core</h1>

## get/appid-&lt;appId&gt;/.well-known/jwks.json

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/.well-known/jwks.json' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/.well-known/jwks.json`

Retrieve JWKs for JWT verification, containing both static and dynamic keys.


> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "RS256",
      "kty": "RSA",
      "use": "sig",
      "kid": "string",
      "x5c": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getappid-appidwell-knownjwksjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve JWKs for JWT verification, containing both static and dynamic keys.|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getappid-appidwell-knownjwksjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[jwk](#schemajwk)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getApiVersion

<a id="opIdgetApiVersion"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/apiversion' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/apiversion`

Get a list of compatible CDI versions


<h3 id="getapiversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|websiteDomain|query|string|false|none|
|apiDomain|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "versions": [
    [
      "2.13"
    ]
  ]
}
```

<h3 id="getapiversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get api version|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getapiversion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getConfig

<a id="opIdgetConfig"></a>

> Code samples

```bash
curl http://localhost:3567/config \
  -H 'Accept: application/json'
```

`GET /config`

Get path to the loaded config file


<h3 id="getconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|pid|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "path": "/usr/lib/supertokens/config.yaml"
}
```

<h3 id="getconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get api version|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getconfig-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|path|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|NOT_ALLOWED|

<aside class="success">
This operation does not require authentication
</aside>

## getHelloOnRootPath

<a id="opIdgetHelloOnRootPath"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/`

Return a simple hello message


> Example responses

> 200 Response

```json
"Hello"
```

<h3 id="gethelloonrootpath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return a simple hello message|[helloResponse](#schemahelloresponse)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<aside class="success">
This operation does not require authentication
</aside>

## getHello

<a id="opIdgetHello"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/hello' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/hello`

Return a simple hello message


> Example responses

> 200 Response

```json
"Hello"
```

<h3 id="gethello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return a simple hello message|[helloResponse](#schemahelloresponse)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<aside class="success">
This operation does not require authentication
</aside>

## putHello

<a id="opIdputHello"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/hello' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /appid-<appId>/<tenantId>/hello`

Return a simple hello message


> Example responses

> 200 Response

```json
"Hello"
```

<h3 id="puthello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return a simple hello message|[helloResponse](#schemahelloresponse)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<aside class="success">
This operation does not require authentication
</aside>

## postHello

<a id="opIdpostHello"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/hello' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /appid-<appId>/<tenantId>/hello`

Return a simple hello message


> Example responses

> 200 Response

```json
"Hello"
```

<h3 id="posthello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return a simple hello message|[helloResponse](#schemahelloresponse)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteHello

<a id="opIddeleteHello"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/hello' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /appid-<appId>/<tenantId>/hello`

Return a simple hello message


> Example responses

> 200 Response

```json
"Hello"
```

<h3 id="deletehello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|return a simple hello message|[helloResponse](#schemahelloresponse)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<aside class="success">
This operation does not require authentication
</aside>

## getTelemetry

<a id="opIdgetTelemetry"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/telemetry' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/telemetry`

Returns the telemetryID if it exists


<h3 id="gettelemetry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "exists": true,
  "telemetryId": "99c87c72-1807-22d-9b39-7a88f95re56c"
}
```

<h3 id="gettelemetry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the telemetryID if it exists|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="gettelemetry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|exists|boolean|false|none|none|
|telemetryId|string|false|none|none|
|*oneOf*|object|false|none|none|
|exists|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|exists|true|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersCount

<a id="opIdgetUsersCount"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/users/count' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/users/count`

Get number of users.

API is tenant specific if `includeAllTenants` is false.
Else, `tenantId` is ignored.


<h3 id="getuserscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|includeRecipeIds|query|string|false|The param should take an array of comma seperated strings|
|includeAllTenants|query|boolean|false|if set to true, will count users across all tenants in the app|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "count": 1000000
}
```

<h3 id="getuserscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get number of users|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getuserscount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|count|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getActiveUsersCount

<a id="opIdgetActiveUsersCount"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/users/count/active?since=1679875200000' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/users/count/active`

Get number of active users.


<h3 id="getactiveuserscount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|since|query|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "count": 100000
}
```

<h3 id="getactiveuserscount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get number of active users|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getactiveuserscount-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|count|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getUsers

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/users' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/users`

User Pagination


<h3 id="getusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|includeRecipeIds|query|string|false|The param should take an array of comma seperated strings|
|paginationToken|query|string|false|none|
|limit|query|number|false|none|
|timeJoinedOrder|query|string|false|none|
|email|query|string|false|none|
|phone|query|number|false|none|
|recipe|query|string|false|none|
|provider|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|timeJoinedOrder|ASC|
|timeJoinedOrder|DESC|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "users": [
    {
      "user": {
        "id": "fa7a0841-b533-4478-95533-0fde890c3483",
        "isPrimaryUser": true,
        "tenantIds": [
          "customer1"
        ],
        "timeJoined": 1623918032231,
        "emails": [
          "johndoe@gmail.com"
        ],
        "phoneNumbers": [
          "+14155552671"
        ],
        "thirdParty": [
          {
            "id": "google",
            "userId": 106347997792363870000
          }
        ],
        "loginMethods": [
          {
            "tenantIds": [
              "customer1"
            ],
            "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
            "verified": true,
            "timeJoined": 1623918032231,
            "recipeId": "emailpassword",
            "email": "johndoe@gmail.com",
            "phoneNumber": "+14155552671",
            "thirdParty": {
              "id": "google",
              "userId": 106347997792363870000
            }
          }
        ]
      }
    }
  ],
  "nextPaginationToken": "ZmE3YTA4ND...OzE2MjM5MTgwMzIyMzE="
}
```

<h3 id="getusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Pagination|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|users|[object]|false|none|none|
|» user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|nextPaginationToken|[paginationToken](#schemapaginationtoken)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUser

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/user/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "removeAllLinkedAccounts": true
  }'
```

`POST /appid-<appId>/user/remove`

Delete user


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "removeAllLinkedAccounts": true
}
```

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» removeAllLinkedAccounts|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns OK if the operation succeeded (even if the user didn't exist before the call)|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deleteuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getSearchTags

<a id="opIdgetSearchTags"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/user/search/tags' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/user/search/tags`

Retrieve available tags for search


<h3 id="getsearchtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "tags": [
    [
      "email",
      "phone",
      "provider"
    ]
  ]
}
```

<h3 id="getsearchtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns available tags for search|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getsearchtags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|tags|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getFeatureFlag

<a id="opIdgetFeatureFlag"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/ee/featureflag' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/ee/featureflag`

Get a list of the enabled enterprise features


<h3 id="getfeatureflag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "features": [
    "feature_1",
    "feature_2"
  ],
  "usageStats": {}
}
```

<h3 id="getfeatureflag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getfeatureflag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|features|[string]|false|none|none|
|usageStats|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getLicense

<a id="opIdgetLicense"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/ee/license' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/ee/license`

Retrieve license key


<h3 id="getlicense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "licenseKey": "eyJhbGciOiJIUzI1NiIsIn..."
}
```

<h3 id="getlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getlicense-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|licenseKey|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|NO_LICENSE_KEY_FOUND_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## setLicense

<a id="opIdsetLicense"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/ee/license' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "licenseKey": "eyJhbGciOiJIUzI1NiIsIn..."
  }'
```

`PUT /appid-<appId>/ee/license`

Set or sync license key


> Body parameter

```json
{
  "licenseKey": "eyJhbGciOiJIUzI1NiIsIn..."
}
```

<h3 id="setlicense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» licenseKey|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="setlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="setlicense-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|MISSING_EE_FOLDER_ERROR|
|status|INVALID_LICENSE_KEY_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## deleteLicense

<a id="opIddeleteLicense"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/ee/license' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /appid-<appId>/ee/license`

Delete license key


<h3 id="deletelicense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="deletelicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deletelicense-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getUserId

<a id="opIdgetUserId"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/user/id' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/user/id`

Get user id from email or phone number


<h3 id="getuserid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  }
}
```

<h3 id="getuserid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getuserid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_USER_ID_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersByAccountInfo

<a id="opIdgetUsersByAccountInfo"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/users/by-accountinfo?doUnionOfAccountInfo=true' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/users/by-accountinfo`

Get users by email, phoneNumber or thirdParty info


<h3 id="getusersbyaccountinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|email|query|string|false|none|
|phoneNumber|query|string|false|none|
|thirdPartyId|query|string|false|none|
|thirdPartyUserId|query|string|false|none|
|doUnionOfAccountInfo|query|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "users": [
    {
      "id": "fa7a0841-b533-4478-95533-0fde890c3483",
      "isPrimaryUser": true,
      "tenantIds": [
        "customer1"
      ],
      "timeJoined": 1623918032231,
      "emails": [
        "johndoe@gmail.com"
      ],
      "phoneNumbers": [
        "+14155552671"
      ],
      "thirdParty": [
        {
          "id": "google",
          "userId": 106347997792363870000
        }
      ],
      "loginMethods": [
        {
          "tenantIds": [
            "customer1"
          ],
          "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
          "verified": true,
          "timeJoined": 1623918032231,
          "recipeId": "emailpassword",
          "email": "johndoe@gmail.com",
          "phoneNumber": "+14155552671",
          "thirdParty": {
            "id": "google",
            "userId": 106347997792363870000
          }
        }
      ]
    }
  ]
}
```

<h3 id="getusersbyaccountinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getusersbyaccountinfo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|users|[[authRecipeUser](#schemaauthrecipeuser)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getRequestsStats

<a id="opIdgetRequestsStats"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/requests/stats' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/requests/stats`

Get requests stats for last 24 hours

`averageRequestsPerSecond` and `peakRequestsPerSecond` would countain `1440` values corresponding to `now - 1440 minutes` until `now - 1 minute`.

A value of `-1` would mean that there is no data for that minute.


<h3 id="getrequestsstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "atMinute": 16382348,
  "averageRequestsPerSecond": [
    10.5
  ],
  "peakRequestsPerSecond": [
    20
  ]
}
```

<h3 id="getrequestsstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The operation was successful|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getrequestsstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|atMinute|number|false|none|none|
|averageRequestsPerSecond|[number]|false|none|none|
|peakRequestsPerSecond|[number]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-dashboard-recipe">Dashboard Recipe</h1>

## updateDashboardUser

<a id="opIdupdateDashboardUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/user' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "test@example.com",
    "newPassword": "password@123",
    "newEmail": "test2@example.com"
  }'
```

`PUT /appid-<appId>/recipe/dashboard/user`

Update a user's email or password


> Body parameter

```json
{
  "email": "test@example.com",
  "newPassword": "password@123",
  "newEmail": "test2@example.com"
}
```

<h3 id="updatedashboarduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» email|body|string|false|none|
|» newPassword|body|string|false|none|
|» newEmail|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» userId|body|string|false|none|
|» newPassword|body|string|false|none|
|» newEmail|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "userId": "r23r-f235th54-g3413gf-r32dr2",
    "email": "test@example.com",
    "timeCreated": 391238234792
  }
}
```

<h3 id="updatedashboarduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="updatedashboarduser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|user|object|false|none|none|
|» userId|string|false|none|none|
|» email|string|false|none|none|
|» timeCreated|number|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|message|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|EMAIL_ALREADY_EXISTS_ERROR|
|status|PASSWORD_WEAK_ERROR|
|status|INVALID_EMAIL_ERROR|
|status|UNKNOWN_USER_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## createDashboardUser

<a id="opIdcreateDashboardUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/user' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "test@example.com",
    "password": "password@123"
  }'
```

`POST /appid-<appId>/recipe/dashboard/user`

Create a dashboard user


> Body parameter

```json
{
  "email": "test@example.com",
  "password": "password@123"
}
```

<h3 id="createdashboarduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» email|body|string|false|none|
|» password|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "user": {
    "userId": "example-userid",
    "email": "test@example.com",
    "timeCreated": 1231321231
  }
}
```

> 402 Response

```json
{
  "status": "USER_LIMIT_REACHED_ERROR",
  "message": "You have reached the free limit for creating users, please purchase the dashboard feature to create new users"
}
```

<h3 id="createdashboarduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|Indicates ayment required|Inline|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createdashboarduser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|user|object|false|none|none|
|» userId|string|false|none|none|
|» email|string|false|none|none|
|» timeCreated|number|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|message|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|EMAIL_ALREADY_EXISTS_ERROR|
|status|PASSWORD_WEAK_ERROR|
|status|INVALID_EMAIL_ERROR|

Status Code **402**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|message|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|USER_LIMIT_REACHED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## deleteDashboardUser

<a id="opIddeleteDashboardUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/user' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /appid-<appId>/recipe/dashboard/user`

Delete a dashboard user with their userId or email


<h3 id="deletedashboarduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|email|query|string|false|none|
|userId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didUserExist": true
}
```

<h3 id="deletedashboarduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="deletedashboarduser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|
|didUserExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getAllDashboardUsers

<a id="opIdgetAllDashboardUsers"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/users' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/dashboard/users`

Get a list of call the dashboard users


<h3 id="getalldashboardusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "users": [
    {
      "email": "test@example.com",
      "userId": "uf2323-f223r233-f23-f23-f2f32",
      "timeCreated": 16382348324,
      "isSuspended": false
    }
  ]
}
```

<h3 id="getalldashboardusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get a list of dashboard users|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getalldashboardusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|users|[object]|false|none|none|
|» email|string|false|none|none|
|» userId|string|false|none|none|
|» timeCreated|number|false|none|none|
|» isSuspended|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## verifyDashboardUserSession

<a id="opIdverifyDashboardUserSession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/session/verify' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sessionId": "rf32f-f32342f-32f-323r2f3-23"
  }'
```

`POST /appid-<appId>/recipe/dashboard/session/verify`

Verify a Dashboard user's sessionId


> Body parameter

```json
{
  "sessionId": "rf32f-f32342f-32f-323r2f3-23"
}
```

<h3 id="verifydashboardusersession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» sessionId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "email": "string"
}
```

<h3 id="verifydashboardusersession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="verifydashboardusersession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|email|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|message|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|USER_SUSPENDED_ERROR|
|status|INVAlID_SESSION_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## RevokeDashboardUsersSession

<a id="opIdRevokeDashboardUsersSession"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/session' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /appid-<appId>/recipe/dashboard/session`

Revoke a Dashboard user's session


<h3 id="revokedashboarduserssession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|sessionId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="revokedashboarduserssession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="revokedashboarduserssession-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## signInDashboardUser

<a id="opIdsignInDashboardUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/signin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "test@example.com",
    "password": "password@123"
  }'
```

`POST /appid-<appId>/recipe/dashboard/signin`

Signin a Dashboard user


> Body parameter

```json
{
  "email": "test@example.com",
  "password": "password@123"
}
```

<h3 id="signindashboarduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» email|body|string|false|none|
|» password|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "sessionId": null
}
```

<h3 id="signindashboarduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="signindashboarduser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|sessionId|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|message|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|USER_SUSPENDED_ERROR|
|status|INVAlID_CREDENTIALS_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## getAllSessionsForDashboardUser

<a id="opIdgetAllSessionsForDashboardUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/dashboard/user/sessions' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/dashboard/user/sessions`

Get a list of the sessions for the dashboard user


<h3 id="getallsessionsfordashboarduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "sessions": [
    {
      "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
      "sessionId": "fni29f-f23f23-f2fq32qt-h35evf",
      "timeCreated": 16382348324,
      "expiry": 16382348324
    }
  ]
}
```

<h3 id="getallsessionsfordashboarduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get a list of sessions for dashboard user|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getallsessionsfordashboarduser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessions|[object]|false|none|none|
|» userId|[userId](#schemauserid)|false|none|none|
|» sessionId|string|false|none|none|
|» timeCreated|number|false|none|none|
|» expiry|number|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## tenantCoreConfigForDashboardGET

<a id="opIdtenantCoreConfigForDashboardGET"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/dashboard/tenant/core-config' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/<tenantId>/recipe/dashboard/tenant/core-config`

Get the core config of the tenant specified by the url prefix, along with the metadata of each of the fields.


<h3 id="tenantcoreconfigfordashboardget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "config": [
    {
      "key": "password_reset_token_lifetime",
      "valueType": "number",
      "value": 3600000,
      "description": "Time in milliseconds for how long a password reset token / link is valid for. [Default: 3600000 (1 hour)]",
      "isDifferentAcrossTenants": true,
      "possibleValues": [
        "string"
      ],
      "isNullable": false,
      "defaultValue": 3600000,
      "isPluginProperty": false,
      "isPluginPropertyEditable": false
    }
  ]
}
```

<h3 id="tenantcoreconfigfordashboardget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tenant core config result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="tenantcoreconfigfordashboardget-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[statusOK](#schemastatusok)|true|none|none|
|config|[object]|true|none|none|
|» key|string|false|none|none|
|» valueType|string \| null|false|none|none|
|» value|string \| number \| boolean \| null|false|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» description|string|false|none|none|
|» isDifferentAcrossTenants|boolean|false|none|none|
|» possibleValues|[string]|false|none|none|
|» isNullable|boolean|false|none|none|
|» defaultValue|string \| number \| boolean \| null|false|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|number|false|none|none|
|» » *oneOf*|boolean|false|none|none|
|» isPluginProperty|boolean|false|none|none|
|» isPluginPropertyEditable|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|» valueType|string|
|» valueType|number|
|» valueType|boolean|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-totp-recipe">Totp Recipe</h1>

## updateTotpDeviceName

<a id="opIdupdateTotpDeviceName"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/totp/device' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "existingDeviceName": "My Authy App",
    "newDeviceName": "A better name for my TOTP device"
  }'
```

`PUT /appid-<appId>/recipe/totp/device`

Update the name of a TOTP device for a user.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "existingDeviceName": "My Authy App",
  "newDeviceName": "A better name for my TOTP device"
}
```

<h3 id="updatetotpdevicename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» existingDeviceName|body|string|true|none|
|» newDeviceName|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="updatetotpdevicename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="updatetotpdevicename-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_DEVICE_ERROR|
|status|DEVICE_ALREADY_EXISTS_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## createTotpDevice

<a id="opIdcreateTotpDevice"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/totp/device' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "deviceName": "My Authy App",
    "skew": 0,
    "period": 30
  }'
```

`POST /appid-<appId>/recipe/totp/device`

Add a TOTP device for a user and enable TOTP if not already enabled.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "deviceName": "My Authy App",
  "skew": 0,
  "period": 30
}
```

<h3 id="createtotpdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» deviceName|body|string|false|none|
|» skew|body|number|true|none|
|» period|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "secret": "JBSWY3DPEHPK3PXP",
  "deviceName": "d1"
}
```

<h3 id="createtotpdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status and secret properties|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createtotpdevice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|secret|string|false|none|none|
|deviceName|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|DEVICE_ALREADY_EXISTS_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## getTotpDevices

<a id="opIdgetTotpDevices"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/totp/device/list?userId=string' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/totp/device/list`

Retrieve a list of TOTP devices for a user.


<h3 id="gettotpdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|userId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "devices": [
    {
      "name": "string",
      "period": 0,
      "skew": 0,
      "verified": true
    }
  ]
}
```

<h3 id="gettotpdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrives all TOTP devices|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="gettotpdevices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|true|none|none|
|devices|[object]|false|none|none|
|» name|string|false|none|none|
|» period|number|false|none|none|
|» skew|number|false|none|none|
|» verified|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## importTotpDevice

<a id="opIdimportTotpDevice"></a>

> Code samples

```bash
curl http://localhost:3567/recipe/totp/device/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "deviceName": "My Authy App",
    "skew": 0,
    "period": 30,
    "secretKey": "BSWY3DPEMOWNFUWJLDIWNDNDPONBIUFG"
  }'
```

`POST /recipe/totp/device/import`

Add a TOTP device for a user and enable TOTP if not already enabled.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "deviceName": "My Authy App",
  "skew": 0,
  "period": 30,
  "secretKey": "BSWY3DPEMOWNFUWJLDIWNDNDPONBIUFG"
}
```

<h3 id="importtotpdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» deviceName|body|string|false|none|
|» skew|body|number|true|none|
|» period|body|number|true|none|
|» secretKey|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "deviceName": "d1"
}
```

<h3 id="importtotpdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status and secret properties|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="importtotpdevice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|deviceName|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|DEVICE_ALREADY_EXISTS_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## removeTotpDevice

<a id="opIdremoveTotpDevice"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/totp/device/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "deviceName": "My Authy App"
  }'
```

`POST /appid-<appId>/recipe/totp/device/remove`

Remove a TOTP device for a user. If all devices are removed, TOTP is disabled for the user.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "deviceName": "My Authy App"
}
```

<h3 id="removetotpdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» deviceName|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didDeviceExist": true
}
```

<h3 id="removetotpdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="removetotpdevice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didDeviceExist|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## verifyTotpCode

<a id="opIdverifyTotpCode"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/totp/verify' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "totp": "123456",
    "allowUnverifiedDevices": false
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/totp/verify`

Check if a TOTP code is valid against any of the TOTP devices for a user.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "totp": "123456",
  "allowUnverifiedDevices": false
}
```

<h3 id="verifytotpcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» totp|body|string|true|none|
|» allowUnverifiedDevices|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="verifytotpcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="verifytotpcode-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|currentNumberOfFailedAttempts|number|false|none|none|
|maxNumberOfFailedAttempts|number|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|retryAfterMs|number|false|none|none|
|currentNumberOfFailedAttempts|number|false|none|none|
|maxNumberOfFailedAttempts|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|INVALID_TOTP_ERROR|
|status|UNKNOWN_USER_ID_ERROR|
|status|LIMIT_REACHED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## verifyTotpDevice

<a id="opIdverifyTotpDevice"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/<tenantId>/recipe/totp/device/verify' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
    "deviceName": "My Authy App",
    "totp": "123456"
  }'
```

`POST /appid-<appId>/<tenantId>/recipe/totp/device/verify`

Mark a TOTP device as verified if the given TOTP code is valid for that device.


> Body parameter

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "deviceName": "My Authy App",
  "totp": "123456"
}
```

<h3 id="verifytotpdevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» userId|body|[userId](#schemauserid)|true|none|
|» deviceName|body|string|true|none|
|» totp|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "wasAlreadyVerified": false
}
```

<h3 id="verifytotpdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status property|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="verifytotpdevice-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|wasAlreadyVerified|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|currentNumberOfFailedAttempts|number|false|none|none|
|maxNumberOfFailedAttempts|number|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|retryAfterMs|number|false|none|none|
|currentNumberOfFailedAttempts|number|false|none|none|
|maxNumberOfFailedAttempts|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN_DEVICE_ERROR|
|status|INVALID_TOTP_ERROR|
|status|LIMIT_REACHED_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-account-linking-recipe">Account Linking Recipe</h1>

## canCreatePrimaryUser

<a id="opIdcanCreatePrimaryUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/accountlinking/user/primary/check?recipeUserId=fa7a0841-b533-4478-9253-0fde890c576' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/accountlinking/user/primary/check`

Check if primary user can be created for given user id


<h3 id="cancreateprimaryuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|recipeUserId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "wasAlreadyAPrimaryUser": true
}
```

<h3 id="cancreateprimaryuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status and canCreatePrimaryUser properties|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="cancreateprimaryuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|wasAlreadyAPrimaryUser|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR|
|status|RECIPE_USER_ID_ALREADY_LINKED_WITH_PRIMARY_USER_ID_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## canLinkAccounts

<a id="opIdcanLinkAccounts"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/accountlinking/user/link/check?primaryUserId=fa7a0841-b533-4478-9253-0fde890c576&recipeUserId=fa7a0841-b533-4478-9253-0fde890c576' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/accountlinking/user/link/check`

Check if accounts can be linked for given primary and recipe user id


<h3 id="canlinkaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|primaryUserId|query|string|true|none|
|recipeUserId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "accountsAlreadyLinked": true
}
```

<h3 id="canlinkaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status prop|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="canlinkaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|accountsAlreadyLinked|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR|
|status|RECIPE_USER_ID_ALREADY_LINKED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR|
|status|INPUT_USER_IS_NOT_A_PRIMARY_USER|

<aside class="success">
This operation does not require authentication
</aside>

## createPrimaryUser

<a id="opIdcreatePrimaryUser"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/accountlinking/user/primary' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipeUserId": "fa7a0841-b533-4478-9253-0fde890c576"
  }'
```

`POST /appid-<appId>/recipe/accountlinking/user/primary`

Create a primary user for given user id


> Body parameter

```json
{
  "recipeUserId": "fa7a0841-b533-4478-9253-0fde890c576"
}
```

<h3 id="createprimaryuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» recipeUserId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "wasAlreadyAPrimaryUser": true,
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  }
}
```

<h3 id="createprimaryuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status and primaryUserId properties|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createprimaryuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|wasAlreadyAPrimaryUser|boolean|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR|
|status|RECIPE_USER_ID_ALREADY_LINKED_WITH_PRIMARY_USER_ID_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## linkAccounts

<a id="opIdlinkAccounts"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/accountlinking/user/link' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "primaryUserId": "fa7a0841-b533-4478-9253-0fde890c576",
    "recipeUserId": "fa7a0841-b533-4478-9253-0fde890c576"
  }'
```

`POST /appid-<appId>/recipe/accountlinking/user/link`

Link accounts for given primary and recipe user id


> Body parameter

```json
{
  "primaryUserId": "fa7a0841-b533-4478-9253-0fde890c576",
  "recipeUserId": "fa7a0841-b533-4478-9253-0fde890c576"
}
```

<h3 id="linkaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» primaryUserId|body|string|true|none|
|» recipeUserId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "accountsAlreadyLinked": true,
  "user": {
    "id": "fa7a0841-b533-4478-95533-0fde890c3483",
    "isPrimaryUser": true,
    "tenantIds": [
      "customer1"
    ],
    "timeJoined": 1623918032231,
    "emails": [
      "johndoe@gmail.com"
    ],
    "phoneNumbers": [
      "+14155552671"
    ],
    "thirdParty": [
      {
        "id": "google",
        "userId": 106347997792363870000
      }
    ],
    "loginMethods": [
      {
        "tenantIds": [
          "customer1"
        ],
        "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
        "verified": true,
        "timeJoined": 1623918032231,
        "recipeId": "emailpassword",
        "email": "johndoe@gmail.com",
        "phoneNumber": "+14155552671",
        "thirdParty": {
          "id": "google",
          "userId": 106347997792363870000
        }
      }
    ]
  }
}
```

<h3 id="linkaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status and accountsAlreadyLinked properties|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="linkaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|accountsAlreadyLinked|boolean|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|description|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|primaryUserId|string|false|none|none|
|user|[authRecipeUser](#schemaauthrecipeuser)|false|none|none|
|description|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR|
|status|RECIPE_USER_ID_ALREADY_LINKED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR|
|status|INPUT_USER_IS_NOT_A_PRIMARY_USER|

<aside class="success">
This operation does not require authentication
</aside>

## unlinkAccounts

<a id="opIdunlinkAccounts"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/accountlinking/user/unlink' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipeUserId": "fa7a0841-b533-4478-9253-0fde890c576"
  }'
```

`POST /appid-<appId>/recipe/accountlinking/user/unlink`

Unlink accounts for given recipe user id


> Body parameter

```json
{
  "recipeUserId": "fa7a0841-b533-4478-9253-0fde890c576"
}
```

<h3 id="unlinkaccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» recipeUserId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "wasRecipeUserDeleted": true,
  "wasLinked": true
}
```

<h3 id="unlinkaccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indicates success with the status and accountsUnlinked properties|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="unlinkaccounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|wasRecipeUserDeleted|boolean|false|none|none|
|wasLinked|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-jwt-recipe">JWT Recipe</h1>

## createSignedJWT

<a id="opIdcreateSignedJWT"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/jwt' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "payload": {
      "custom-claim": ""
    },
    "algorithm": "RS256",
    "jwksDomain": "https://api.test.com/",
    "validity": 86400,
    "useStaticSigningKey": true
  }'
```

`POST /appid-<appId>/recipe/jwt`

Create a signed JWT


> Body parameter

```json
{
  "payload": {
    "custom-claim": ""
  },
  "algorithm": "RS256",
  "jwksDomain": "https://api.test.com/",
  "validity": 86400,
  "useStaticSigningKey": true
}
```

<h3 id="createsignedjwt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» payload|body|[createJWTPayload](#schemacreatejwtpayload)|false|The payload of the JWT, should be a JSON object.|
|» algorithm|body|[createJWTAlgorithm](#schemacreatejwtalgorithm)|false|The algorithm to use when creating the JWT.|
|» jwksDomain|body|[jwksDomain](#schemajwksdomain)|false|This is used as the value for the issuer claim in the JWT payload.|
|» validity|body|[jwtValidity](#schemajwtvalidity)|false|Duration in seconds, used to calculate JWT expiry|
|» useStaticSigningKey|body|boolean|false|Decides if the token should be signed with a dynamic or static key, defaults to true|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|RS256|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

<h3 id="createsignedjwt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Create a signed JWT|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createsignedjwt-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|jwt|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNSUPPORTED_ALGORITHM_ERROR|

<aside class="success">
This operation does not require authentication
</aside>

## get/appid-&lt;appId&gt;/recipe/jwt/jwks

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/jwt/jwks' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/jwt/jwks`

<aside class="warning">
This operation is deprecated
</aside>

Retrieve JWKs for JWT verification, containing both static and dynamic keys.


<h3 id="getappid-appidrecipejwtjwks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "keys": [
    {
      "alg": "RS256",
      "kty": "RSA",
      "use": "sig",
      "kid": "string",
      "x5c": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getappid-appidrecipejwtjwks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve JWKs for JWT verification, containing both static and dynamic keys.|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getappid-appidrecipejwtjwks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|keys|[[jwk](#schemajwk)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="core-driver-interface-oauth2provider-recipe">OAuth2Provider Recipe</h1>

## getOAuth2Client

<a id="opIdgetOAuth2Client"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/clients?clientId=abcd' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/oauth/clients`

Get OAuth2 Client


<h3 id="getoauth2client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|clientId|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

<h3 id="getoauth2client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Client Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getoauth2client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|clientId|string|false|none|none|
|clientName|string|false|none|none|
|clientSecret|string|false|none|none|
|redirectUris|[string]|false|none|none|
|grantTypes|[string]|false|none|none|
|responseTypes|[string]|false|none|none|
|scope|string|false|none|none|
|audience|[string]|false|none|none|
|policyUri|string|false|none|none|
|allowedCorsOrigins|[string]|false|none|none|
|tosUri|string|false|none|none|
|clientUri|string|false|none|none|
|logoUri|string|false|none|none|
|tokenEndpointAuthMethod|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|postLogoutRedirectUris|[string]|false|none|none|
|metadata|object|false|none|none|
|authorizationCodeGrantAccessTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantIdTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantRefreshTokenLifespan|string \| null|false|none|none|
|clientCredentialsGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantAccessTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantRefreshTokenLifespan|string \| null|false|none|none|
|enableRefreshTokenRotation|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## updateOAuth2Client

<a id="opIdupdateOAuth2Client"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/clients' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
    "clientName": "Hello",
    "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
    "redirectUris": [
      "http://localhost:3000/auth/callback/ory"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "responseTypes": [
      "code",
      "id_token"
    ],
    "scope": "offline_access openid email",
    "audience": [],
    "policyUri": "",
    "allowedCorsOrigins": [],
    "tosUri": "",
    "clientUri": "",
    "logoUri": "",
    "tokenEndpointAuthMethod": "client_secret_post",
    "createdAt": "2025-02-24T08:14:40Z",
    "updatedAt": "2025-02-24T08:14:40.362463Z",
    "postLogoutRedirectUris": [
      "http://localhost:3000"
    ],
    "metadata": {},
    "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
    "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
    "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
    "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
    "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
    "enableRefreshTokenRotation": false
  }'
```

`PUT /appid-<appId>/recipe/oauth/clients`

Update OAuth2 Client


> Body parameter

```json
{
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

<h3 id="updateoauth2client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|[oauthClient](#schemaoauthclient)|false|none|
|» clientId|body|string|false|none|
|» clientName|body|string|false|none|
|» clientSecret|body|string|false|none|
|» redirectUris|body|[string]|false|none|
|» grantTypes|body|[string]|false|none|
|» responseTypes|body|[string]|false|none|
|» scope|body|string|false|none|
|» audience|body|[string]|false|none|
|» policyUri|body|string|false|none|
|» allowedCorsOrigins|body|[string]|false|none|
|» tosUri|body|string|false|none|
|» clientUri|body|string|false|none|
|» logoUri|body|string|false|none|
|» tokenEndpointAuthMethod|body|string|false|none|
|» createdAt|body|string(date-time)|false|none|
|» updatedAt|body|string(date-time)|false|none|
|» postLogoutRedirectUris|body|[string]|false|none|
|» metadata|body|object|false|none|
|» authorizationCodeGrantAccessTokenLifespan|body|string \| null|false|none|
|» authorizationCodeGrantIdTokenLifespan|body|string \| null|false|none|
|» authorizationCodeGrantRefreshTokenLifespan|body|string \| null|false|none|
|» clientCredentialsGrantAccessTokenLifespan|body|string \| null|false|none|
|» implicitGrantAccessTokenLifespan|body|string \| null|false|none|
|» implicitGrantIdTokenLifespan|body|string \| null|false|none|
|» refreshTokenGrantIdTokenLifespan|body|string \| null|false|none|
|» refreshTokenGrantAccessTokenLifespan|body|string \| null|false|none|
|» refreshTokenGrantRefreshTokenLifespan|body|string \| null|false|none|
|» enableRefreshTokenRotation|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

<h3 id="updateoauth2client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Client Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="updateoauth2client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|clientId|string|false|none|none|
|clientName|string|false|none|none|
|clientSecret|string|false|none|none|
|redirectUris|[string]|false|none|none|
|grantTypes|[string]|false|none|none|
|responseTypes|[string]|false|none|none|
|scope|string|false|none|none|
|audience|[string]|false|none|none|
|policyUri|string|false|none|none|
|allowedCorsOrigins|[string]|false|none|none|
|tosUri|string|false|none|none|
|clientUri|string|false|none|none|
|logoUri|string|false|none|none|
|tokenEndpointAuthMethod|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|postLogoutRedirectUris|[string]|false|none|none|
|metadata|object|false|none|none|
|authorizationCodeGrantAccessTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantIdTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantRefreshTokenLifespan|string \| null|false|none|none|
|clientCredentialsGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantAccessTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantRefreshTokenLifespan|string \| null|false|none|none|
|enableRefreshTokenRotation|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## createOAuth2Client

<a id="opIdcreateOAuth2Client"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/clients' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
    "clientName": "Hello",
    "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
    "redirectUris": [
      "http://localhost:3000/auth/callback/ory"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "responseTypes": [
      "code",
      "id_token"
    ],
    "scope": "offline_access openid email",
    "audience": [],
    "policyUri": "",
    "allowedCorsOrigins": [],
    "tosUri": "",
    "clientUri": "",
    "logoUri": "",
    "tokenEndpointAuthMethod": "client_secret_post",
    "createdAt": "2025-02-24T08:14:40Z",
    "updatedAt": "2025-02-24T08:14:40.362463Z",
    "postLogoutRedirectUris": [
      "http://localhost:3000"
    ],
    "metadata": {},
    "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
    "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
    "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
    "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
    "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
    "enableRefreshTokenRotation": false
  }'
```

`POST /appid-<appId>/recipe/oauth/clients`

Create OAuth2 Client


> Body parameter

```json
{
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

<h3 id="createoauth2client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|[oauthClient](#schemaoauthclient)|false|none|
|» clientId|body|string|false|none|
|» clientName|body|string|false|none|
|» clientSecret|body|string|false|none|
|» redirectUris|body|[string]|false|none|
|» grantTypes|body|[string]|false|none|
|» responseTypes|body|[string]|false|none|
|» scope|body|string|false|none|
|» audience|body|[string]|false|none|
|» policyUri|body|string|false|none|
|» allowedCorsOrigins|body|[string]|false|none|
|» tosUri|body|string|false|none|
|» clientUri|body|string|false|none|
|» logoUri|body|string|false|none|
|» tokenEndpointAuthMethod|body|string|false|none|
|» createdAt|body|string(date-time)|false|none|
|» updatedAt|body|string(date-time)|false|none|
|» postLogoutRedirectUris|body|[string]|false|none|
|» metadata|body|object|false|none|
|» authorizationCodeGrantAccessTokenLifespan|body|string \| null|false|none|
|» authorizationCodeGrantIdTokenLifespan|body|string \| null|false|none|
|» authorizationCodeGrantRefreshTokenLifespan|body|string \| null|false|none|
|» clientCredentialsGrantAccessTokenLifespan|body|string \| null|false|none|
|» implicitGrantAccessTokenLifespan|body|string \| null|false|none|
|» implicitGrantIdTokenLifespan|body|string \| null|false|none|
|» refreshTokenGrantIdTokenLifespan|body|string \| null|false|none|
|» refreshTokenGrantAccessTokenLifespan|body|string \| null|false|none|
|» refreshTokenGrantRefreshTokenLifespan|body|string \| null|false|none|
|» enableRefreshTokenRotation|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

<h3 id="createoauth2client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Client Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="createoauth2client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|clientId|string|false|none|none|
|clientName|string|false|none|none|
|clientSecret|string|false|none|none|
|redirectUris|[string]|false|none|none|
|grantTypes|[string]|false|none|none|
|responseTypes|[string]|false|none|none|
|scope|string|false|none|none|
|audience|[string]|false|none|none|
|policyUri|string|false|none|none|
|allowedCorsOrigins|[string]|false|none|none|
|tosUri|string|false|none|none|
|clientUri|string|false|none|none|
|logoUri|string|false|none|none|
|tokenEndpointAuthMethod|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|postLogoutRedirectUris|[string]|false|none|none|
|metadata|object|false|none|none|
|authorizationCodeGrantAccessTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantIdTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantRefreshTokenLifespan|string \| null|false|none|none|
|clientCredentialsGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantAccessTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantRefreshTokenLifespan|string \| null|false|none|none|
|enableRefreshTokenRotation|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## listOAuth2Clients

<a id="opIdlistOAuth2Clients"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/clients/list' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/oauth/clients/list`

List OAuth2 Clients


<h3 id="listoauth2clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|pageSize|query|integer|false|none|
|pageToken|query|string|false|none|
|clientName|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "clients": [
    {
      "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
      "clientName": "Hello",
      "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
      "redirectUris": [
        "http://localhost:3000/auth/callback/ory"
      ],
      "grantTypes": [
        "authorization_code",
        "refresh_token"
      ],
      "responseTypes": [
        "code",
        "id_token"
      ],
      "scope": "offline_access openid email",
      "audience": [],
      "policyUri": "",
      "allowedCorsOrigins": [],
      "tosUri": "",
      "clientUri": "",
      "logoUri": "",
      "tokenEndpointAuthMethod": "client_secret_post",
      "createdAt": "2025-02-24T08:14:40Z",
      "updatedAt": "2025-02-24T08:14:40.362463Z",
      "postLogoutRedirectUris": [
        "http://localhost:3000"
      ],
      "metadata": {},
      "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
      "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
      "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
      "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
      "implicitGrantAccessTokenLifespan": "1h0m0s",
      "implicitGrantIdTokenLifespan": "1h0m0s",
      "refreshTokenGrantIdTokenLifespan": "1h0m0s",
      "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
      "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
      "enableRefreshTokenRotation": false
    }
  ],
  "nextPaginationToken": "string"
}
```

<h3 id="listoauth2clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Client Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="listoauth2clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|clients|[[oauthClient](#schemaoauthclient)]|false|none|none|
|nextPaginationToken|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## removeOAuth2Client

<a id="opIdremoveOAuth2Client"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/clients/remove' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb"
  }'
```

`POST /appid-<appId>/recipe/oauth/clients/remove`

Remove OAuth2 Client


> Body parameter

```json
{
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb"
}
```

<h3 id="removeoauth2client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» clientId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="removeoauth2client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Client Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="removeoauth2client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didExist|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getOAuth2ConsentRequest

<a id="opIdgetOAuth2ConsentRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/consent?consentChallenge=1234567890' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/oauth/auth/requests/consent`

Get OAuth2 Consent Request


<h3 id="getoauth2consentrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|consentChallenge|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "client": {
    "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
    "clientName": "Hello",
    "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
    "redirectUris": [
      "http://localhost:3000/auth/callback/ory"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "responseTypes": [
      "code",
      "id_token"
    ],
    "scope": "offline_access openid email",
    "audience": [],
    "policyUri": "",
    "allowedCorsOrigins": [],
    "tosUri": "",
    "clientUri": "",
    "logoUri": "",
    "tokenEndpointAuthMethod": "client_secret_post",
    "createdAt": "2025-02-24T08:14:40Z",
    "updatedAt": "2025-02-24T08:14:40.362463Z",
    "postLogoutRedirectUris": [
      "http://localhost:3000"
    ],
    "metadata": {},
    "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
    "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
    "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
    "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
    "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
    "enableRefreshTokenRotation": false
  },
  "requestedScope": [
    "string"
  ],
  "requestedAudience": [
    "string"
  ],
  "requestedClaims": {
    "idToken": {
      "property1": "string",
      "property2": "string"
    }
  },
  "loginHint": "string",
  "uiLocales": [
    "string"
  ],
  "acrValues": [
    "string"
  ],
  "subject": "string",
  "requestUrl": "string",
  "skip": true,
  "clientId": "string",
  "redirectUri": "string",
  "forceSubjectIdentifier": "string",
  "requestedAccessTokenAudience": [
    "string"
  ],
  "context": {},
  "sessionId": "string",
  "loginSessionId": "string",
  "loginChallenge": "string",
  "loginRequestedAt": "string",
  "consentRequestedAt": "string",
  "consentChallenge": "string",
  "consentSkip": true,
  "consentRemember": true,
  "consentRememberFor": 0,
  "consentError": {
    "name": "string",
    "description": "string"
  },
  "consentErrorDebug": "string",
  "consentErrorDescription": "string",
  "consentErrorHint": "string",
  "consentErrorCode": "string",
  "consentStatusCode": 0,
  "sessionIdToken": {
    "property1": "string",
    "property2": "string"
  },
  "sessionAccessToken": {
    "property1": "string",
    "property2": "string"
  },
  "sessionToken": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="getoauth2consentrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Consent Request Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getoauth2consentrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|client|[oauthClient](#schemaoauthclient)|false|none|none|
|requestedScope|[string]|false|none|none|
|requestedAudience|[string]|false|none|none|
|requestedClaims|object|false|none|none|
|» idToken|object|false|none|none|
|» » property1|string|false|none|none|
|» » property2|string|false|none|none|
|loginHint|string|false|none|none|
|uiLocales|[string]|false|none|none|
|acrValues|[string]|false|none|none|
|subject|string|false|none|none|
|requestUrl|string|false|none|none|
|skip|boolean|false|none|none|
|clientId|string|false|none|none|
|redirectUri|string|false|none|none|
|forceSubjectIdentifier|string|false|none|none|
|requestedAccessTokenAudience|[string]|false|none|none|
|context|object|false|none|none|
|sessionId|string|false|none|none|
|loginSessionId|string|false|none|none|
|loginChallenge|string|false|none|none|
|loginRequestedAt|string|false|none|none|
|consentRequestedAt|string|false|none|none|
|consentChallenge|string|false|none|none|
|consentSkip|boolean|false|none|none|
|consentRemember|boolean|false|none|none|
|consentRememberFor|integer|false|none|none|
|consentError|object|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|consentErrorDebug|string|false|none|none|
|consentErrorDescription|string|false|none|none|
|consentErrorHint|string|false|none|none|
|consentErrorCode|string|false|none|none|
|consentStatusCode|integer|false|none|none|
|sessionIdToken|object|false|none|none|
|» property1|string|false|none|none|
|» property2|string|false|none|none|
|sessionAccessToken|object|false|none|none|
|» property1|string|false|none|none|
|» property2|string|false|none|none|
|sessionToken|object|false|none|none|
|» property1|string|false|none|none|
|» property2|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## acceptOAuth2ConsentRequest

<a id="opIdacceptOAuth2ConsentRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/consent/accept?consentChallenge=1234567890' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": {},
    "grantAccessTokenAudience": [
      "string"
    ],
    "grantScope": [
      "string"
    ],
    "handledAt": "2019-08-24T14:15:22Z",
    "remember": true,
    "rememberFor": 0,
    "session": {
      "accessToken": {},
      "idToken": {}
    }
  }'
```

`PUT /appid-<appId>/recipe/oauth/auth/requests/consent/accept`

Accept OAuth2 Consent Request


> Body parameter

```json
{
  "context": {},
  "grantAccessTokenAudience": [
    "string"
  ],
  "grantScope": [
    "string"
  ],
  "handledAt": "2019-08-24T14:15:22Z",
  "remember": true,
  "rememberFor": 0,
  "session": {
    "accessToken": {},
    "idToken": {}
  }
}
```

<h3 id="acceptoauth2consentrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|consentChallenge|query|string|true|none|
|body|body|object|false|none|
|» context|body|object|false|none|
|» grantAccessTokenAudience|body|[string]|false|none|
|» grantScope|body|[string]|false|none|
|» handledAt|body|string(date-time)|false|none|
|» remember|body|boolean|false|none|
|» rememberFor|body|integer|false|none|
|» session|body|object|false|none|
|» » accessToken|body|object|false|none|
|» » idToken|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "redirectTo": "{apiDomain}/oauth/consent?..."
}
```

<h3 id="acceptoauth2consentrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Consent Request Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="acceptoauth2consentrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|redirectTo|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## rejectOAuth2ConsentRequest

<a id="opIdrejectOAuth2ConsentRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/consent/reject?consentChallenge=1234567890' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": "string",
    "errorDebug": "string",
    "errorDescription": "string",
    "errorHint": "string",
    "statusCode": 400
  }'
```

`PUT /appid-<appId>/recipe/oauth/auth/requests/consent/reject`

Reject OAuth2 Consent Request


> Body parameter

```json
{
  "error": "string",
  "errorDebug": "string",
  "errorDescription": "string",
  "errorHint": "string",
  "statusCode": 400
}
```

<h3 id="rejectoauth2consentrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|consentChallenge|query|string|true|none|
|body|body|object|false|none|
|» error|body|string|false|none|
|» errorDebug|body|string|false|none|
|» errorDescription|body|string|false|none|
|» errorHint|body|string|false|none|
|» statusCode|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "redirectTo": "{apiDomain}/oauth/consent?..."
}
```

<h3 id="rejectoauth2consentrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Consent Request Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="rejectoauth2consentrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|redirectTo|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getOAuth2LoginRequest

<a id="opIdgetOAuth2LoginRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/login?loginChallenge=1234567890' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/oauth/auth/requests/login`

Get OAuth2 Login Request


<h3 id="getoauth2loginrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|loginChallenge|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "challenge": "string",
  "client": {
    "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
    "clientName": "Hello",
    "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
    "redirectUris": [
      "http://localhost:3000/auth/callback/ory"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "responseTypes": [
      "code",
      "id_token"
    ],
    "scope": "offline_access openid email",
    "audience": [],
    "policyUri": "",
    "allowedCorsOrigins": [],
    "tosUri": "",
    "clientUri": "",
    "logoUri": "",
    "tokenEndpointAuthMethod": "client_secret_post",
    "createdAt": "2025-02-24T08:14:40Z",
    "updatedAt": "2025-02-24T08:14:40.362463Z",
    "postLogoutRedirectUris": [
      "http://localhost:3000"
    ],
    "metadata": {},
    "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
    "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
    "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
    "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantAccessTokenLifespan": "1h0m0s",
    "implicitGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantIdTokenLifespan": "1h0m0s",
    "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
    "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
    "enableRefreshTokenRotation": false
  },
  "oidcContext": {
    "acrValues": [
      "string"
    ],
    "display": "string",
    "idTokenHintClaims": {},
    "loginHint": "string",
    "uiLocales": [
      "string"
    ],
    "requestUrl": "string",
    "requestedAccessTokenAudience": [
      "string"
    ],
    "requestedScope": [
      "string"
    ],
    "sessionId": "string",
    "skip": true,
    "subject": "string"
  }
}
```

<h3 id="getoauth2loginrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Login Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getoauth2loginrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|challenge|string|false|none|none|
|client|[oauthClient](#schemaoauthclient)|false|none|none|
|oidcContext|object|false|none|none|
|» acrValues|[string]|false|none|none|
|» display|string|false|none|none|
|» idTokenHintClaims|object|false|none|none|
|» loginHint|string|false|none|none|
|» uiLocales|[string]|false|none|none|
|» requestUrl|string|false|none|none|
|» requestedAccessTokenAudience|[string]|false|none|none|
|» requestedScope|[string]|false|none|none|
|» sessionId|string|false|none|none|
|» skip|boolean|false|none|none|
|» subject|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## acceptOAuth2LoginRequest

<a id="opIdacceptOAuth2LoginRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/login/accept?loginChallenge=1234567890' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acr": "string",
    "amr": [
      "string"
    ],
    "context": "string",
    "extendSessionLifespan": true,
    "forceSubjectIdentifier": "string",
    "identityProviderSessionId": "string",
    "remember": true,
    "rememberFor": 0,
    "subject": "string"
  }'
```

`PUT /appid-<appId>/recipe/oauth/auth/requests/login/accept`

Accept OAuth2 Login Request


> Body parameter

```json
{
  "acr": "string",
  "amr": [
    "string"
  ],
  "context": "string",
  "extendSessionLifespan": true,
  "forceSubjectIdentifier": "string",
  "identityProviderSessionId": "string",
  "remember": true,
  "rememberFor": 0,
  "subject": "string"
}
```

<h3 id="acceptoauth2loginrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|loginChallenge|query|string|true|none|
|body|body|object|false|none|
|» acr|body|string|false|none|
|» amr|body|[string]|false|none|
|» context|body|string \| null|false|none|
|» extendSessionLifespan|body|boolean|false|none|
|» forceSubjectIdentifier|body|string|false|none|
|» identityProviderSessionId|body|string|false|none|
|» remember|body|boolean|false|none|
|» rememberFor|body|integer|false|none|
|» subject|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "redirectTo": "{apiDomain}/oauth/login?..."
}
```

<h3 id="acceptoauth2loginrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Login Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="acceptoauth2loginrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|redirectTo|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## rejectOAuth2LoginRequest

<a id="opIdrejectOAuth2LoginRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/login/reject?loginChallenge=1234567890' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": "string",
    "errorDebug": "string",
    "errorDescription": "string",
    "errorHint": "string",
    "statusCode": 0
  }'
```

`PUT /appid-<appId>/recipe/oauth/auth/requests/login/reject`

Reject OAuth2 Login Request


> Body parameter

```json
{
  "error": "string",
  "errorDebug": "string",
  "errorDescription": "string",
  "errorHint": "string",
  "statusCode": 0
}
```

<h3 id="rejectoauth2loginrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|loginChallenge|query|string|true|none|
|body|body|object|false|none|
|» error|body|string|false|none|
|» errorDebug|body|string|false|none|
|» errorDescription|body|string|false|none|
|» errorHint|body|string|false|none|
|» statusCode|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "redirectTo": "{apiDomain}/oauth/login?..."
}
```

<h3 id="rejectoauth2loginrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Login Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="rejectoauth2loginrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|redirectTo|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## acceptOAuth2LogoutRequest

<a id="opIdacceptOAuth2LogoutRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/logout/accept' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "challenge": "string"
  }'
```

`PUT /appid-<appId>/recipe/oauth/auth/requests/logout/accept`

Accept OAuth2 Logout Request


> Body parameter

```json
{
  "challenge": "string"
}
```

<h3 id="acceptoauth2logoutrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» challenge|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "redirectTo": "{apiDomain}/oauth/logout?..."
}
```

<h3 id="acceptoauth2logoutrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Logout Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="acceptoauth2logoutrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|redirectTo|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## rejectOAuth2LogoutRequest

<a id="opIdrejectOAuth2LogoutRequest"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth/requests/logout/reject' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "challenge": "string"
  }'
```

`PUT /appid-<appId>/recipe/oauth/auth/requests/logout/reject`

Reject OAuth2 Logout Request


> Body parameter

```json
{
  "challenge": "string"
}
```

<h3 id="rejectoauth2logoutrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» challenge|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK"
}
```

<h3 id="rejectoauth2logoutrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Logout Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="rejectoauth2logoutrequest-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## revokeOAuth2Session

<a id="opIdrevokeOAuth2Session"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/session/revoke' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "sessionHandle": "string"
  }'
```

`POST /appid-<appId>/recipe/oauth/session/revoke`

Revoke OAuth2 Session


> Body parameter

```json
{
  "sessionHandle": "string"
}
```

<h3 id="revokeoauth2session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» sessionHandle|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="revokeoauth2session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Session Revocation Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="revokeoauth2session-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didExist|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## revokeOAuth2Token

<a id="opIdrevokeOAuth2Token"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/token/revoke' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /appid-<appId>/recipe/oauth/token/revoke`

Revoke OAuth2 Token


> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="revokeoauth2token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» token|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="revokeoauth2token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Token Revocation Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="revokeoauth2token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didExist|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## revokeOAuth2Tokens

<a id="opIdrevokeOAuth2Tokens"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/tokens/revoke' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a"
  }'
```

`POST /appid-<appId>/recipe/oauth/tokens/revoke`

Revoke OAuth2 Token


> Body parameter

```json
{
  "client_id": "stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a"
}
```

<h3 id="revokeoauth2tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» client_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "didExist": true
}
```

<h3 id="revokeoauth2tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Token Revocation Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="revokeoauth2tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|didExist|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getOAuth2Auth

<a id="opIdgetOAuth2Auth"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/auth' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/oauth/auth`

Get OAuth2 Auth


<h3 id="getoauth2auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

<h3 id="getoauth2auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Auth Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getoauth2auth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|clientId|string|false|none|none|
|clientName|string|false|none|none|
|clientSecret|string|false|none|none|
|redirectUris|[string]|false|none|none|
|grantTypes|[string]|false|none|none|
|responseTypes|[string]|false|none|none|
|scope|string|false|none|none|
|audience|[string]|false|none|none|
|policyUri|string|false|none|none|
|allowedCorsOrigins|[string]|false|none|none|
|tosUri|string|false|none|none|
|clientUri|string|false|none|none|
|logoUri|string|false|none|none|
|tokenEndpointAuthMethod|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|postLogoutRedirectUris|[string]|false|none|none|
|metadata|object|false|none|none|
|authorizationCodeGrantAccessTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantIdTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantRefreshTokenLifespan|string \| null|false|none|none|
|clientCredentialsGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantAccessTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantRefreshTokenLifespan|string \| null|false|none|none|
|enableRefreshTokenRotation|boolean|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getOAuth2Token

<a id="opIdgetOAuth2Token"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/token' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "iss": "https://api.auth.com",
    "inputBody": {},
    "useStaticSigningKey": false,
    "authorizationHeader": "Bearer 1234567890"
  }'
```

`POST /appid-<appId>/recipe/oauth/token`

Get OAuth2 Token


> Body parameter

```json
{
  "iss": "https://api.auth.com",
  "inputBody": {},
  "useStaticSigningKey": false,
  "authorizationHeader": "Bearer 1234567890"
}
```

<h3 id="getoauth2token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» iss|body|string|false|none|
|» inputBody|body|object|false|none|
|» useStaticSigningKey|body|boolean|false|none|
|» authorizationHeader|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "access_token": "eyJraWQiOiJzLTBjZmVmMDdkLWQ2NDktNGIwOC04MTVjLWJkYjZlYTczNWQyZCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJpYXQiOjE3NDAzODU5MzcsImV4cCI6MTc0MDM4OTUzOCwiY2xpZW50X2lkIjoic3RjbF82NWUwODc1Mi0yYzU5LTQ5NjQtOTM0Yy02OTIwZDJmMDZlNjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aCIsImp0aSI6Ijc1NTc2MmFmLTUwYTUtNDc1ZS04YWRkLTg3MDA1ZmU3YWJlNiIsIm5iZiI6MTc0MDM4NTkzNywic2NwIjpbIm9wZW5pZCIsIm9mZmxpbmVfYWNjZXNzIl0sInN1YiI6InNvbWV1c2VyaWQiLCJzdHQiOjEsImdpZCI6ImRjOGQ0OGUzLTcwOTgtNDhhNi1hYjU0LTgxMWMyODQ4N2I4MiIsInRJZCI6InB1YmxpYyIsInJzdWIiOiJzb21ldXNlcmlkIiwic2Vzc2lvbkhhbmRsZSI6InNlc3Npb24taGFuZGxlIn0.DgVgtD2gXgzHrDsC2lIUBa-wsYm8KO4Pg8L1Ov3aSBVgjwtjiCO40ldjBZ9qKdQBq5Qqk0ElAZNj6Bzc40ESfQumLH3_N2XtOj568s71JPuEOIg5hs9XAdK4vYfXMhVQRWn9iPUKHKrpRVf73IIH0mpkN8i6_MhcDoMMOuG5XPlXajG9VOyoY_5saHA61-uTafZLdAgKqnmYGvS8KmNEcEbBWLGwFB4QQKiDAUvatIi5n3juFBUxyt9t6DrqT1D04shesRppa0XhCZbCFBv1dixSrprdtqKhlPOrMgvOGNZ3cBLbYBOG9zoJRD5YlVMGw-j_pE7IbvpDWKL7tTJS1Q",
  "expires_in": 3599,
  "id_token": "eyJraWQiOiJzLTBjZmVmMDdkLWQ2NDktNGIwOC04MTVjLWJkYjZlYTczNWQyZCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJpYXQiOjE3NDAzODU5MzgsImV4cCI6MTc0MDM4OTUzOCwiYXRfaGFzaCI6IkNxOGNCSk01Nm5FcG9aaWREcnZvLVEiLCJhdWQiOiJzdGNsXzY1ZTA4NzUyLTJjNTktNDk2NC05MzRjLTY5MjBkMmYwNmU2MiIsImF1dGhfdGltZSI6MTc0MDM4NTkzNywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgiLCJqdGkiOiIxZDA5OGUxZi04ZGIxLTQyNzUtYmMzYS0zYTA4NjdjOWE2NTAiLCJyYXQiOjE3NDAzODU3MzEsInNpZCI6InNlc3Npb24taGFuZGxlIiwic3ViIjoic29tZXVzZXJpZCIsInN0dCI6MiwiZ2lkIjoiYzk1OTVjYjItMWFjOS00MDI0LWFjNjMtNDJlZDEyODliY2RmIn0.PGsemf1qpLF-cE_616NHvKsRmanFiyba0yqF2j5fy87AWD5McI405A4eqi-wAlKsDxC-MPpuW8bx-08YUhs3x6ku4aFaDyA-M-Xhc65fJJ4SCPVaUL7qlUwl7wJwNs2rMRW3Ayyj4MDSlW5uqm39_K_bBqod2Qj1yqck-N0g78qh86uEcyX6Al3d5KSln1B21nwDsEgegk3xzE8lFMCQUTpZEYb5-1v2D0Bu_PblBfOCjA6mBtT1IIQkmSE27FvkTUS1H50EUyhFP4JH30kP3bUnQ9pOqGMTe405N2ruKtPyWsXHLPlQ4hcJCLO5GT5ZgtUjfz6Y3mCM9l69uDYDHg",
  "refresh_token": "st_rt_d7LI9mGYHF2TAaVEFJi7fqOWo8ZQ8zEGpuxhHQs0R18.UZ0nbTuuYuDD8G54PCD8AKHdsh9cezu8BTxVlTy7pYw",
  "scope": "openid offline_access",
  "token_type": "bearer"
}
```

<h3 id="getoauth2token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Token Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getoauth2token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|true|none|none|
|access_token|string|true|none|none|
|expires_in|integer|false|none|none|
|id_token|string|false|none|none|
|refresh_token|string|false|none|none|
|scope|string|false|none|none|
|token_type|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## getOAuth2SessionsLogout

<a id="opIdgetOAuth2SessionsLogout"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/sessions/logout' \
  -H 'Accept: application/json'
```

`GET /appid-<appId>/recipe/oauth/sessions/logout`

Get OAuth2 Sessions Logout


<h3 id="getoauth2sessionslogout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|clientId|query|string|false|none|
|idTokenHint|query|string|false|none|
|postLogoutRedirectUri|query|string|false|none|
|state|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "redirectTo": "{apiDomain}/oauth/logout?..."
}
```

<h3 id="getoauth2sessionslogout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Sessions Logout Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="getoauth2sessionslogout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|redirectTo|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

## introspectOAuth2Token

<a id="opIdintrospectOAuth2Token"></a>

> Code samples

```bash
curl 'http://localhost:3567/appid-<appId>/recipe/oauth/introspect' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /appid-<appId>/recipe/oauth/introspect`

Introspect OAuth2 Token


> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="introspectoauth2token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|header|string|false|none|
|Authorization|header|string|false|none|
|cdi-version|header|string|false|X.Y of the X.Y.Z CDI version.|
|body|body|object|false|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "OK",
  "active": true,
  "iat": 1740992368,
  "exp": 1740995969,
  "client_id": "stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a",
  "iss": "http://localhost:3001/auth",
  "jti": "1c229efe-c55b-44c1-98cf-9fa3a366502e",
  "nbf": 1740992368,
  "scp": [
    "openid",
    "offline_access"
  ],
  "sub": "137d053d-0d69-4dea-8a19-06ddbdfa4f96",
  "stt": 1,
  "sessionHandle": "87bcc2d8-f159-4e10-a097-0898179a2d7d",
  "rsub": "137d053d-0d69-4dea-8a19-06ddbdfa4f96",
  "tId": "public",
  "gid": "575b7130-d982-4945-be49-3ecde2a49eaa",
  "token_type": "Bearer",
  "token_use": "access_token"
}
```

<h3 id="introspectoauth2token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth2 Token Introspection Result|Inline|
|400|Bad Request|error code 400|[invalidJSON](#schemainvalidjson)|
|401|Unauthorized|error code 401|[requestUnauthorised](#schemarequestunauthorised)|
|402|Payment Required|error code 402|[licenseError](#schemalicenseerror)|
|404|Not Found|error code 404|[notFound](#schemanotfound)|
|500|Internal Server Error|error code 500|[internalError](#schemainternalerror)|

<h3 id="introspectoauth2token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|status|[statusOK](#schemastatusok)|false|none|none|
|active|boolean|false|none|none|
|iat|integer|false|none|none|
|exp|integer|false|none|none|
|client_id|string|false|none|none|
|iss|string|false|none|none|
|jti|string|false|none|none|
|nbf|integer|false|none|none|
|scp|[string]|false|none|none|
|sub|string|false|none|none|
|stt|integer|false|none|none|
|sessionHandle|string|false|none|none|
|rsub|string|false|none|none|
|tId|string|false|none|none|
|gid|string|false|none|none|
|token_type|string|false|none|none|
|token_use|string|false|none|none|
|*oneOf*|[oauthError](#schemaoautherror)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_authRecipeUser">authRecipeUser</h2>
<!-- backwards compatibility -->
<a id="schemaauthrecipeuser"></a>
<a id="schema_authRecipeUser"></a>
<a id="tocSauthrecipeuser"></a>
<a id="tocsauthrecipeuser"></a>

```json
{
  "id": "fa7a0841-b533-4478-95533-0fde890c3483",
  "isPrimaryUser": true,
  "tenantIds": [
    "customer1"
  ],
  "timeJoined": 1623918032231,
  "emails": [
    "johndoe@gmail.com"
  ],
  "phoneNumbers": [
    "+14155552671"
  ],
  "thirdParty": [
    {
      "id": "google",
      "userId": 106347997792363870000
    }
  ],
  "loginMethods": [
    {
      "tenantIds": [
        "customer1"
      ],
      "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483",
      "verified": true,
      "timeJoined": 1623918032231,
      "recipeId": "emailpassword",
      "email": "johndoe@gmail.com",
      "phoneNumber": "+14155552671",
      "thirdParty": {
        "id": "google",
        "userId": 106347997792363870000
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[userId](#schemauserid)|false|none|none|
|isPrimaryUser|boolean|false|none|none|
|tenantIds|[[tenantId](#schematenantid)]|false|none|none|
|timeJoined|[timeJoined](#schematimejoined)|false|none|none|
|emails|[[email](#schemaemail)]|false|none|none|
|phoneNumbers|[[phoneNumber](#schemaphonenumber)]|false|none|none|
|thirdParty|[object]|false|none|none|
|loginMethods|[object]|false|none|none|

<h2 id="tocS_recipeId">recipeId</h2>
<!-- backwards compatibility -->
<a id="schemarecipeid"></a>
<a id="schema_recipeId"></a>
<a id="tocSrecipeid"></a>
<a id="tocsrecipeid"></a>

```json
"emailpassword"
```

<h2 id="tocS_token">token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"ZTRiOTBjNz...jI5MTZlODkxw"
```

<h2 id="tocS_emailVerificationVerifyTokenRequest">emailVerificationVerifyTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaemailverificationverifytokenrequest"></a>
<a id="schema_emailVerificationVerifyTokenRequest"></a>
<a id="tocSemailverificationverifytokenrequest"></a>
<a id="tocsemailverificationverifytokenrequest"></a>

```json
{
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "email": "johndoe@gmail.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|[userId](#schemauserid)|false|none|none|
|email|[email](#schemaemail)|false|none|none|

<h2 id="tocS_thirdPartyId">thirdPartyId</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyid"></a>
<a id="schema_thirdPartyId"></a>
<a id="tocSthirdpartyid"></a>
<a id="tocsthirdpartyid"></a>

```json
"google"
```

<h2 id="tocS_thirdPartyUserId">thirdPartyUserId</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyuserid"></a>
<a id="schema_thirdPartyUserId"></a>
<a id="tocSthirdpartyuserid"></a>
<a id="tocsthirdpartyuserid"></a>

```json
106347997792363870000
```

<h2 id="tocS_thirdPartyEmail">thirdPartyEmail</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyemail"></a>
<a id="schema_thirdPartyEmail"></a>
<a id="tocSthirdpartyemail"></a>
<a id="tocsthirdpartyemail"></a>

```json
{
  "id": "johndoe@gmail.com",
  "isVerified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[email](#schemaemail)|false|none|none|
|isVerified|[isVerified](#schemaisverified)|false|none|none|

<h2 id="tocS_isVerified">isVerified</h2>
<!-- backwards compatibility -->
<a id="schemaisverified"></a>
<a id="schema_isVerified"></a>
<a id="tocSisverified"></a>
<a id="tocsisverified"></a>

```json
true
```

<h2 id="tocS_email">email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"johndoe@gmail.com"
```

<h2 id="tocS_password">password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password123"
```

<h2 id="tocS_userId">userId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_userId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"fa7a0841-b533-4478-95533-0fde890c3483"
```

<h2 id="tocS_role">role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"admin"
```

<h2 id="tocS_timeJoined">timeJoined</h2>
<!-- backwards compatibility -->
<a id="schematimejoined"></a>
<a id="schema_timeJoined"></a>
<a id="tocStimejoined"></a>
<a id="tocstimejoined"></a>

```json
1623918032231
```

<h2 id="tocS_paginationToken">paginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_paginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"ZmE3YTA4ND...OzE2MjM5MTgwMzIyMzE="
```

<h2 id="tocS_phoneNumber">phoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_phoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
"+14155552671"
```

<h2 id="tocS_codeId">codeId</h2>
<!-- backwards compatibility -->
<a id="schemacodeid"></a>
<a id="schema_codeId"></a>
<a id="tocScodeid"></a>
<a id="tocscodeid"></a>

```json
"QZ0Mx9zG9cfqNXmPI0I/67r9bpKghUBDQZeMMbayi+I="
```

Uniquely identifies a code

<h2 id="tocS_deviceId">deviceId</h2>
<!-- backwards compatibility -->
<a id="schemadeviceid"></a>
<a id="schema_deviceId"></a>
<a id="tocSdeviceid"></a>
<a id="tocsdeviceid"></a>

```json
"TU/52WOcktSv99zqaAZuWJG9BSoS0aRLfCbep8rFEwk="
```

A random identifier that should be stored on the device that started the sign in process.

<h2 id="tocS_preAuthSessionId">preAuthSessionId</h2>
<!-- backwards compatibility -->
<a id="schemapreauthsessionid"></a>
<a id="schema_preAuthSessionId"></a>
<a id="tocSpreauthsessionid"></a>
<a id="tocspreauthsessionid"></a>

```json
"kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs="
```

A random identifier that can be used to identify the login attempt/device.

<h2 id="tocS_userInputCode">userInputCode</h2>
<!-- backwards compatibility -->
<a id="schemauserinputcode"></a>
<a id="schema_userInputCode"></a>
<a id="tocSuserinputcode"></a>
<a id="tocsuserinputcode"></a>

```json
456123
```

This can be used to authenticate the user when paired with the deviceId

<h2 id="tocS_linkCode">linkCode</h2>
<!-- backwards compatibility -->
<a id="schemalinkcode"></a>
<a id="schema_linkCode"></a>
<a id="tocSlinkcode"></a>
<a id="tocslinkcode"></a>

```json
"b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8"
```

URL-safe string that can be used to authenticate the user, without the deviceId

<h2 id="tocS_codeLifetime">codeLifetime</h2>
<!-- backwards compatibility -->
<a id="schemacodelifetime"></a>
<a id="schema_codeLifetime"></a>
<a id="tocScodelifetime"></a>
<a id="tocscodelifetime"></a>

```json
900000
```

The maximum lifetime of the code in milliseconds

<h2 id="tocS_statusOK">statusOK</h2>
<!-- backwards compatibility -->
<a id="schemastatusok"></a>
<a id="schema_statusOK"></a>
<a id="tocSstatusok"></a>
<a id="tocsstatusok"></a>

```json
"OK"
```

<h2 id="tocS_oauthClient">oauthClient</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclient"></a>
<a id="schema_oauthClient"></a>
<a id="tocSoauthclient"></a>
<a id="tocsoauthclient"></a>

```json
{
  "clientId": "stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb",
  "clientName": "Hello",
  "clientSecret": "T98n1YIMWqr4wOM.~bV4HOPFmO",
  "redirectUris": [
    "http://localhost:3000/auth/callback/ory"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "responseTypes": [
    "code",
    "id_token"
  ],
  "scope": "offline_access openid email",
  "audience": [],
  "policyUri": "",
  "allowedCorsOrigins": [],
  "tosUri": "",
  "clientUri": "",
  "logoUri": "",
  "tokenEndpointAuthMethod": "client_secret_post",
  "createdAt": "2025-02-24T08:14:40Z",
  "updatedAt": "2025-02-24T08:14:40.362463Z",
  "postLogoutRedirectUris": [
    "http://localhost:3000"
  ],
  "metadata": {},
  "authorizationCodeGrantAccessTokenLifespan": "1h0m0s",
  "authorizationCodeGrantIdTokenLifespan": "1h0m0s",
  "authorizationCodeGrantRefreshTokenLifespan": "1h0m0s",
  "clientCredentialsGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantAccessTokenLifespan": "1h0m0s",
  "implicitGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantIdTokenLifespan": "1h0m0s",
  "refreshTokenGrantAccessTokenLifespan": "1h0m0s",
  "refreshTokenGrantRefreshTokenLifespan": "1h0m0s",
  "enableRefreshTokenRotation": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|clientName|string|false|none|none|
|clientSecret|string|false|none|none|
|redirectUris|[string]|false|none|none|
|grantTypes|[string]|false|none|none|
|responseTypes|[string]|false|none|none|
|scope|string|false|none|none|
|audience|[string]|false|none|none|
|policyUri|string|false|none|none|
|allowedCorsOrigins|[string]|false|none|none|
|tosUri|string|false|none|none|
|clientUri|string|false|none|none|
|logoUri|string|false|none|none|
|tokenEndpointAuthMethod|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|postLogoutRedirectUris|[string]|false|none|none|
|metadata|object|false|none|none|
|authorizationCodeGrantAccessTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantIdTokenLifespan|string \| null|false|none|none|
|authorizationCodeGrantRefreshTokenLifespan|string \| null|false|none|none|
|clientCredentialsGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantAccessTokenLifespan|string \| null|false|none|none|
|implicitGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantIdTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantAccessTokenLifespan|string \| null|false|none|none|
|refreshTokenGrantRefreshTokenLifespan|string \| null|false|none|none|
|enableRefreshTokenRotation|boolean|false|none|none|

<h2 id="tocS_userMetadata">userMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausermetadata"></a>
<a id="schema_userMetadata"></a>
<a id="tocSusermetadata"></a>
<a id="tocsusermetadata"></a>

```json
{
  "preferences": {
    "theme": "dark"
  },
  "notifications": {
    "email": true
  },
  "todos": [
    "example"
  ]
}
```

should be a JSON object (not a JSON literal nor an array)

<h2 id="tocS_userMetadataUpdate">userMetadataUpdate</h2>
<!-- backwards compatibility -->
<a id="schemausermetadataupdate"></a>
<a id="schema_userMetadataUpdate"></a>
<a id="tocSusermetadataupdate"></a>
<a id="tocsusermetadataupdate"></a>

```json
{
  "notifications": {
    "sms": true
  },
  "todos": null
}
```

should be a JSON object (not a JSON literal nor an array)

<h2 id="tocS_userDataInJWT">userDataInJWT</h2>
<!-- backwards compatibility -->
<a id="schemauserdatainjwt"></a>
<a id="schema_userDataInJWT"></a>
<a id="tocSuserdatainjwt"></a>
<a id="tocsuserdatainjwt"></a>

```json
{
  "test": 123
}
```

should be a JSON object (not a JSON literal nor an array)

<h2 id="tocS_userDataInDatabase">userDataInDatabase</h2>
<!-- backwards compatibility -->
<a id="schemauserdataindatabase"></a>
<a id="schema_userDataInDatabase"></a>
<a id="tocSuserdataindatabase"></a>
<a id="tocsuserdataindatabase"></a>

```json
{
  "test": 123
}
```

should be a JSON object (not a JSON literal nor an array)

<h2 id="tocS_enableAntiCsrf">enableAntiCsrf</h2>
<!-- backwards compatibility -->
<a id="schemaenableanticsrf"></a>
<a id="schema_enableAntiCsrf"></a>
<a id="tocSenableanticsrf"></a>
<a id="tocsenableanticsrf"></a>

```json
false
```

<h2 id="tocS_handle">handle</h2>
<!-- backwards compatibility -->
<a id="schemahandle"></a>
<a id="schema_handle"></a>
<a id="tocShandle"></a>
<a id="tocshandle"></a>

```json
"68en6gd6-865b-4af6-ba00-96e5c153257d"
```

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"Error Message"
```

<h2 id="tocS_session">session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "handle": "68en6gd6-865b-4af6-ba00-96e5c153257d",
  "userId": "fa7a0841-b533-4478-95533-0fde890c3483",
  "userDataInJWT": {
    "test": 123
  },
  "tenantId": "customer1",
  "recipeUserId": "fa7a0841-b533-4478-95533-0fde890c3483"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handle|[handle](#schemahandle)|false|none|none|
|userId|[userId](#schemauserid)|false|none|none|
|userDataInJWT|[userDataInJWT](#schemauserdatainjwt)|false|none|should be a JSON object (not a JSON literal nor an array)|
|tenantId|[tenantId](#schematenantid)|false|none|none|
|recipeUserId|[userId](#schemauserid)|false|none|none|

<h2 id="tocS_cookieInfo">cookieInfo</h2>
<!-- backwards compatibility -->
<a id="schemacookieinfo"></a>
<a id="schema_cookieInfo"></a>
<a id="tocScookieinfo"></a>
<a id="tocscookieinfo"></a>

```json
{
  "token": "ZTRiOTBjNz...jI5MTZlODkxw",
  "expiry": 1637262633029,
  "createdTime": 1637262633029
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[token](#schematoken)|false|none|none|
|expiry|[expiry](#schemaexpiry)|false|none|none|
|createdTime|[timeCreated](#schematimecreated)|false|none|none|

<h2 id="tocS_expiry">expiry</h2>
<!-- backwards compatibility -->
<a id="schemaexpiry"></a>
<a id="schema_expiry"></a>
<a id="tocSexpiry"></a>
<a id="tocsexpiry"></a>

```json
1637262633029
```

<h2 id="tocS_timeCreated">timeCreated</h2>
<!-- backwards compatibility -->
<a id="schematimecreated"></a>
<a id="schema_timeCreated"></a>
<a id="tocStimecreated"></a>
<a id="tocstimecreated"></a>

```json
1637262633029
```

<h2 id="tocS_sessionHandles">sessionHandles</h2>
<!-- backwards compatibility -->
<a id="schemasessionhandles"></a>
<a id="schema_sessionHandles"></a>
<a id="tocSsessionhandles"></a>
<a id="tocssessionhandles"></a>

```json
[
  "68en6gd6-865b-4af6-ba00-96e5c153257d"
]
```

<h2 id="tocS_createJWTPayload">createJWTPayload</h2>
<!-- backwards compatibility -->
<a id="schemacreatejwtpayload"></a>
<a id="schema_createJWTPayload"></a>
<a id="tocScreatejwtpayload"></a>
<a id="tocscreatejwtpayload"></a>

```json
{
  "custom-claim": ""
}
```

The payload of the JWT, should be a JSON object.

<h2 id="tocS_createJWTAlgorithm">createJWTAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemacreatejwtalgorithm"></a>
<a id="schema_createJWTAlgorithm"></a>
<a id="tocScreatejwtalgorithm"></a>
<a id="tocscreatejwtalgorithm"></a>

```json
"RS256"
```

The algorithm to use when creating the JWT.

<h2 id="tocS_jwksDomain">jwksDomain</h2>
<!-- backwards compatibility -->
<a id="schemajwksdomain"></a>
<a id="schema_jwksDomain"></a>
<a id="tocSjwksdomain"></a>
<a id="tocsjwksdomain"></a>

```json
"https://api.test.com/"
```

This is used as the value for the issuer claim in the JWT payload.

<h2 id="tocS_jwtValidity">jwtValidity</h2>
<!-- backwards compatibility -->
<a id="schemajwtvalidity"></a>
<a id="schema_jwtValidity"></a>
<a id="tocSjwtvalidity"></a>
<a id="tocsjwtvalidity"></a>

```json
86400
```

Duration in seconds, used to calculate JWT expiry

<h2 id="tocS_jwk">jwk</h2>
<!-- backwards compatibility -->
<a id="schemajwk"></a>
<a id="schema_jwk"></a>
<a id="tocSjwk"></a>
<a id="tocsjwk"></a>

```json
{
  "alg": "RS256",
  "kty": "RSA",
  "use": "sig",
  "kid": "string",
  "x5c": [
    "string"
  ]
}
```

A JWK that can be used to verify a JWT

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|[createJWTAlgorithm](#schemacreatejwtalgorithm)|false|none|The algorithm to use when creating the JWT.|
|kty|string|false|none|none|
|use|string|false|none|none|
|kid|string|false|none|Unique identifier for the JWK|
|x5c|[string]|false|none|X.509 Certificate Chain|

#### Enumerated Values

|Property|Value|
|---|---|
|alg|RS256|

<h2 id="tocS_unauthorisedMessageResponse">unauthorisedMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorisedmessageresponse"></a>
<a id="schema_unauthorisedMessageResponse"></a>
<a id="tocSunauthorisedmessageresponse"></a>
<a id="tocsunauthorisedmessageresponse"></a>

```json
{
  "status": "UNAUTHORISED",
  "message": "Error Message"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[unauthorisedResponse](#schemaunauthorisedresponse)|false|none|none|
|message|[message](#schemamessage)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNAUTHORISED|

<h2 id="tocS_helloResponse">helloResponse</h2>
<!-- backwards compatibility -->
<a id="schemahelloresponse"></a>
<a id="schema_helloResponse"></a>
<a id="tocShelloresponse"></a>
<a id="tocshelloresponse"></a>

```json
"Hello"
```

<h2 id="tocS_statusOKResponse">statusOKResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatusokresponse"></a>
<a id="schema_statusOKResponse"></a>
<a id="tocSstatusokresponse"></a>
<a id="tocsstatusokresponse"></a>

```json
{
  "status": "OK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|

<h2 id="tocS_wrongCredentialsResponse">wrongCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemawrongcredentialsresponse"></a>
<a id="schema_wrongCredentialsResponse"></a>
<a id="tocSwrongcredentialsresponse"></a>
<a id="tocswrongcredentialsresponse"></a>

```json
{
  "status": "WRONG_CREDENTIALS_ERROR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|WRONG_CREDENTIALS_ERROR|

<h2 id="tocS_unknownUserIdResponse">unknownUserIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunknownuseridresponse"></a>
<a id="schema_unknownUserIdResponse"></a>
<a id="tocSunknownuseridresponse"></a>
<a id="tocsunknownuseridresponse"></a>

```json
{
  "status": "UNKNOWN_USER_ID_ERROR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN_USER_ID_ERROR|

<h2 id="tocS_unknownRoleResponse">unknownRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunknownroleresponse"></a>
<a id="schema_unknownRoleResponse"></a>
<a id="tocSunknownroleresponse"></a>
<a id="tocsunknownroleresponse"></a>

```json
{
  "status": "UNKNOWN_ROLE_ERROR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UNKNOWN_ROLE_ERROR|

<h2 id="tocS_tokenTheftResponse">tokenTheftResponse</h2>
<!-- backwards compatibility -->
<a id="schematokentheftresponse"></a>
<a id="schema_tokenTheftResponse"></a>
<a id="tocStokentheftresponse"></a>
<a id="tocstokentheftresponse"></a>

```json
"TOKEN_THEFT_DETECTED"
```

<h2 id="tocS_unauthorisedResponse">unauthorisedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorisedresponse"></a>
<a id="schema_unauthorisedResponse"></a>
<a id="tocSunauthorisedresponse"></a>
<a id="tocsunauthorisedresponse"></a>

```json
"UNAUTHORISED"
```

<h2 id="tocS_tryRefreshTokenResponse">tryRefreshTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schematryrefreshtokenresponse"></a>
<a id="schema_tryRefreshTokenResponse"></a>
<a id="tocStryrefreshtokenresponse"></a>
<a id="tocstryrefreshtokenresponse"></a>

```json
"TRY_REFRESH_TOKEN"
```

<h2 id="tocS_internalError">internalError</h2>
<!-- backwards compatibility -->
<a id="schemainternalerror"></a>
<a id="schema_internalError"></a>
<a id="tocSinternalerror"></a>
<a id="tocsinternalerror"></a>

```json
"Internal Error"
```

<h2 id="tocS_notFound">notFound</h2>
<!-- backwards compatibility -->
<a id="schemanotfound"></a>
<a id="schema_notFound"></a>
<a id="tocSnotfound"></a>
<a id="tocsnotfound"></a>

```json
"Not Found"
```

<h2 id="tocS_methodNotSupported">methodNotSupported</h2>
<!-- backwards compatibility -->
<a id="schemamethodnotsupported"></a>
<a id="schema_methodNotSupported"></a>
<a id="tocSmethodnotsupported"></a>
<a id="tocsmethodnotsupported"></a>

```json
"Method not supported"
```

<h2 id="tocS_invalidJSON">invalidJSON</h2>
<!-- backwards compatibility -->
<a id="schemainvalidjson"></a>
<a id="schema_invalidJSON"></a>
<a id="tocSinvalidjson"></a>
<a id="tocsinvalidjson"></a>

```json
"string"
```

<h2 id="tocS_requestUnauthorised">requestUnauthorised</h2>
<!-- backwards compatibility -->
<a id="schemarequestunauthorised"></a>
<a id="schema_requestUnauthorised"></a>
<a id="tocSrequestunauthorised"></a>
<a id="tocsrequestunauthorised"></a>

```json
"Invalid API key"
```

<h2 id="tocS_licenseError">licenseError</h2>
<!-- backwards compatibility -->
<a id="schemalicenseerror"></a>
<a id="schema_licenseError"></a>
<a id="tocSlicenseerror"></a>
<a id="tocslicenseerror"></a>

```json
"License Error"
```

<h2 id="tocS_tenantId">tenantId</h2>
<!-- backwards compatibility -->
<a id="schematenantid"></a>
<a id="schema_tenantId"></a>
<a id="tocStenantid"></a>
<a id="tocstenantid"></a>

```json
"customer1"
```

<h2 id="tocS_thirdPartyProviderConfig">thirdPartyProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartyproviderconfig"></a>
<a id="schema_thirdPartyProviderConfig"></a>
<a id="tocSthirdpartyproviderconfig"></a>
<a id="tocsthirdpartyproviderconfig"></a>

```json
{
  "thirdPartyId": "string",
  "name": "string",
  "clients": [
    {
      "clientType": "string",
      "clientId": "string",
      "clientSecret": "string",
      "scope": [
        "string"
      ],
      "forcePKCE": true,
      "additionalConfig": {}
    }
  ],
  "authorizationEndpoint": "string",
  "authorizationEndpointQueryParams": {},
  "tokenEndpoint": "string",
  "tokenEndpointBodyParams": {},
  "userInfoEndpoint": "string",
  "userInfoEndpointQueryParams": {},
  "userInfoEndpointHeaders": {},
  "jwksURI": "string",
  "oidcDiscoveryEndpoint": "string",
  "requireEmail": true,
  "userInfoMap": {
    "fromIdTokenPayload": {
      "userId": "string",
      "email": "string",
      "emailVerified": "string"
    },
    "fromUserInfoAPI": {
      "userId": "string",
      "email": "string",
      "emailVerified": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thirdPartyId|string|true|none|none|
|name|string|false|none|none|
|clients|[object]|false|none|none|
|authorizationEndpoint|string|false|none|none|
|authorizationEndpointQueryParams|object|false|none|none|
|tokenEndpoint|string|false|none|none|
|tokenEndpointBodyParams|object|false|none|none|
|userInfoEndpoint|string|false|none|none|
|userInfoEndpointQueryParams|object|false|none|none|
|userInfoEndpointHeaders|object|false|none|none|
|jwksURI|string|false|none|none|
|oidcDiscoveryEndpoint|string|false|none|none|
|requireEmail|boolean|false|none|none|
|userInfoMap|object|false|none|none|

<h2 id="tocS_firstFactors">firstFactors</h2>
<!-- backwards compatibility -->
<a id="schemafirstfactors"></a>
<a id="schema_firstFactors"></a>
<a id="tocSfirstfactors"></a>
<a id="tocsfirstfactors"></a>

```json
[
  "emailpassword"
]
```

<h2 id="tocS_requiredSecondaryFactors">requiredSecondaryFactors</h2>
<!-- backwards compatibility -->
<a id="schemarequiredsecondaryfactors"></a>
<a id="schema_requiredSecondaryFactors"></a>
<a id="tocSrequiredsecondaryfactors"></a>
<a id="tocsrequiredsecondaryfactors"></a>

```json
[
  "otp-phone"
]
```

<h2 id="tocS_tenantInput">tenantInput</h2>
<!-- backwards compatibility -->
<a id="schematenantinput"></a>
<a id="schema_tenantInput"></a>
<a id="tocStenantinput"></a>
<a id="tocstenantinput"></a>

```json
{
  "emailPasswordEnabled": true,
  "thirdPartyEnabled": true,
  "passwordlessEnabled": true,
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailPasswordEnabled|boolean|false|none|none|
|thirdPartyEnabled|boolean|false|none|none|
|passwordlessEnabled|boolean|false|none|none|
|firstFactors|[firstFactors](#schemafirstfactors)|false|none|none|
|requiredSecondaryFactors|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|none|
|coreConfig|object|false|none|none|

<h2 id="tocS_tenantInputV2">tenantInputV2</h2>
<!-- backwards compatibility -->
<a id="schematenantinputv2"></a>
<a id="schema_tenantInputV2"></a>
<a id="tocStenantinputv2"></a>
<a id="tocstenantinputv2"></a>

```json
{
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstFactors|[firstFactors](#schemafirstfactors)|false|none|none|
|requiredSecondaryFactors|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|none|
|coreConfig|object|false|none|none|

<h2 id="tocS_tenantConfig">tenantConfig</h2>
<!-- backwards compatibility -->
<a id="schematenantconfig"></a>
<a id="schema_tenantConfig"></a>
<a id="tocStenantconfig"></a>
<a id="tocstenantconfig"></a>

```json
{
  "tenantId": "customer1",
  "emailPassword": {
    "enabled": true
  },
  "thirdParty": {
    "enabled": true,
    "providers": [
      {
        "thirdPartyId": "string",
        "name": "string",
        "clients": [
          {
            "clientType": "string",
            "clientId": "string",
            "clientSecret": "string",
            "scope": [
              "string"
            ],
            "forcePKCE": true,
            "additionalConfig": {}
          }
        ],
        "authorizationEndpoint": "string",
        "authorizationEndpointQueryParams": {},
        "tokenEndpoint": "string",
        "tokenEndpointBodyParams": {},
        "userInfoEndpoint": "string",
        "userInfoEndpointQueryParams": {},
        "userInfoEndpointHeaders": {},
        "jwksURI": "string",
        "oidcDiscoveryEndpoint": "string",
        "requireEmail": true,
        "userInfoMap": {
          "fromIdTokenPayload": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          },
          "fromUserInfoAPI": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          }
        }
      }
    ]
  },
  "passwordless": {
    "enabled": true
  },
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenantId|[tenantId](#schematenantid)|true|none|none|
|emailPassword|object|true|none|none|
|thirdParty|object|true|none|none|
|passwordless|object|true|none|none|
|firstFactors|[firstFactors](#schemafirstfactors)|false|none|none|
|requiredSecondaryFactors|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|none|
|coreConfig|object|true|none|none|

<h2 id="tocS_tenantConfigV2">tenantConfigV2</h2>
<!-- backwards compatibility -->
<a id="schematenantconfigv2"></a>
<a id="schema_tenantConfigV2"></a>
<a id="tocStenantconfigv2"></a>
<a id="tocstenantconfigv2"></a>

```json
{
  "tenantId": "customer1",
  "thirdParty": {
    "providers": [
      {
        "thirdPartyId": "string",
        "name": "string",
        "clients": [
          {
            "clientType": "string",
            "clientId": "string",
            "clientSecret": "string",
            "scope": [
              "string"
            ],
            "forcePKCE": true,
            "additionalConfig": {}
          }
        ],
        "authorizationEndpoint": "string",
        "authorizationEndpointQueryParams": {},
        "tokenEndpoint": "string",
        "tokenEndpointBodyParams": {},
        "userInfoEndpoint": "string",
        "userInfoEndpointQueryParams": {},
        "userInfoEndpointHeaders": {},
        "jwksURI": "string",
        "oidcDiscoveryEndpoint": "string",
        "requireEmail": true,
        "userInfoMap": {
          "fromIdTokenPayload": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          },
          "fromUserInfoAPI": {
            "userId": "string",
            "email": "string",
            "emailVerified": "string"
          }
        }
      }
    ]
  },
  "firstFactors": [
    "emailpassword"
  ],
  "requiredSecondaryFactors": [
    "otp-phone"
  ],
  "coreConfig": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenantId|[tenantId](#schematenantid)|true|none|none|
|thirdParty|object|true|none|none|
|firstFactors|[firstFactors](#schemafirstfactors)|false|none|none|
|requiredSecondaryFactors|[requiredSecondaryFactors](#schemarequiredsecondaryfactors)|false|none|none|
|coreConfig|object|true|none|none|

<h2 id="tocS_oauthError">oauthError</h2>
<!-- backwards compatibility -->
<a id="schemaoautherror"></a>
<a id="schema_oauthError"></a>
<a id="tocSoautherror"></a>
<a id="tocsoautherror"></a>

```json
{
  "status": "OAUTH_ERROR",
  "error": "string",
  "errorDescription": "string",
  "statusCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|error|string|true|none|none|
|errorDescription|string|true|none|none|
|statusCode|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OAUTH_ERROR|
