<h1 id="api-for-the-covid-19-tracking-qr-code-signin-server">API for the COVID-19 Tracking QR Code Signin Server. v1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API for the COVID-19 Contact Tracing QRCode Signin Server

Base URLs:

* <a href="http://c19qrserver.local">http://c19qrserver.local</a>

* <a href="https://virtserver.swaggerhub.com/aijaz/QRCodeSigninServer/1.1">https://virtserver.swaggerhub.com/aijaz/QRCodeSigninServer/1.1</a> - SwaggerHub API Auto Mocking

# Authentication

* API Key (TokenHeader)
    - Parameter Name: **token**, in: header. Token to authorize requests.

<h1 id="api-for-the-covid-19-tracking-qr-code-signin-server-authentication">Authentication</h1>

Authentication-related endpoints

## Log in to get an API token

> Code samples

```bash
curl https://example.com/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "aijaz@example.org",
    "password": "hunter2",
    "source": "iOS"
  }'
```

`POST /login`

Submit your email and password to get an API token

> Body parameter

```json
{
  "email": "aijaz@example.org",
  "password": "hunter2",
  "source": "iOS"
}
```

<h3 id="log-in-to-get-an-api-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|The login payload|
|» email|body|string|false|none|
|» password|body|string|false|none|
|» source|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|iOS|
|» source|android|
|» source|web|

> Example responses

> 200 Response

```json
{
  "admin": false,
  "login_id": 1,
  "name": "Firstname Lastname",
  "read_only": false,
  "token": "dc19b0b2-c0e3-821b-821a-d49e8c428479"
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="log-in-to-get-an-api-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[loginResponse](#schemaloginresponse)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="success">
This operation does not require authentication
</aside>

## Log out

> Code samples

```bash
curl https://example.com/logout \
  -X POST \
  -H "token: ${API_KEY}"
```

`POST /logout`

Log out by deleting your token off the server.

<h3 id="log-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

<h1 id="api-for-the-covid-19-tracking-qr-code-signin-server-attendees-signins">Attendees signins</h1>

Endpoints related to attendees signing in on the premises

## post/signin

> Code samples

```bash
curl https://example.com/signin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}" \
  -d '{
    "dt": 1593409124.23,
    "email": "jqp@example.com",
    "id": 125,
    "name": "John Q. Public",
    "phone": "(111)222-3333"
  }'
```

`POST /signin`

Create a new signin record

> Body parameter

```json
{
  "dt": 1593409124.23,
  "email": "jqp@example.com",
  "id": 125,
  "name": "John Q. Public",
  "phone": "(111)222-3333"
}
```

<h3 id="postsignin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[signin](#schemasignin)|false|none|
|» dt|body|number|false|The original scan time in number of seconds since 1/1/1970 (GMT)|
|» email|body|string|false|The person's email|
|» id|body|integer|false|The record id|
|» name|body|string|true|The person's name|
|» phone|body|string|true|The person's phone number|

> Example responses

> 200 Response

```json
{
  "result": 1
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

> 503 Response

```json
{
  "message": "Key Failures"
}
```

<h3 id="postsignin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[signinResponse](#schemasigninresponse)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|
|503|Service Unavailable|Key Failure|[keyFailure](#schemakeyfailure)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Retrieve the information associated with a signin record

> Code samples

```bash
curl https://example.com/signin/1 \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}"
```

`GET /signin/{signinId}`

Retrieve the information associated with a signin record


<h3 id="retrieve-the-information-associated-with-a-signin-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signinId|path|integer|true|The ID of the signin record to be retrieved.|

> Example responses

> 200 Response

```json
{
  "dt": 1593409124.23,
  "email": "jqp@example.com",
  "id": 125,
  "name": "John Q. Public",
  "phone": "(111)222-3333"
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="retrieve-the-information-associated-with-a-signin-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[signin](#schemasignin)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Update a signin record

> Code samples

```bash
curl https://example.com/signin/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}" \
  -d '{
    "dt": 1593409124.23,
    "email": "jqp@example.com",
    "id": 125,
    "name": "John Q. Public",
    "phone": "(111)222-3333"
  }'
```

`PUT /signin/{signinId}`

Update a signin record


> Body parameter

```json
{
  "dt": 1593409124.23,
  "email": "jqp@example.com",
  "id": 125,
  "name": "John Q. Public",
  "phone": "(111)222-3333"
}
```

<h3 id="update-a-signin-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signinId|path|integer|true|The ID of the signin record to be retrieved.|
|body|body|[signin](#schemasignin)|false|none|
|» dt|body|number|false|The original scan time in number of seconds since 1/1/1970 (GMT)|
|» email|body|string|false|The person's email|
|» id|body|integer|false|The record id|
|» name|body|string|true|The person's name|
|» phone|body|string|true|The person's phone number|

> Example responses

> 200 Response

```json
{
  "admin": true,
  "email": "user@example.com",
  "id": 1,
  "name": "John Doe",
  "read_only": false
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="update-a-signin-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[userRecord](#schemauserrecord)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Delete a signin record

> Code samples

```bash
curl https://example.com/signin/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}"
```

`DELETE /signin/{signinId}`

Delete a signin record      


<h3 id="delete-a-signin-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signinId|path|integer|true|The ID of the signin record to be deleted.|

> Example responses

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="delete-a-signin-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Get signin info

> Code samples

```bash
curl https://example.com/signins \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}"
```

`GET /signins`

Returns a list of signin objects sorted by signin ID descending.

<h3 id="get-signin-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|less_than|query|integer|false|Return signins with IDs less than this value.|
|return_count|query|integer|false|Return this many objects|

> Example responses

> 200 Response

```json
[
  {
    "dt": 1593409124.23,
    "email": "jqp@example.com",
    "id": 125,
    "name": "John Q. Public",
    "phone": "(111)222-3333"
  }
]
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

> 503 Response

```json
{
  "message": "Key Failures"
}
```

<h3 id="get-signin-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|
|503|Service Unavailable|Key Failure|[keyFailure](#schemakeyfailure)|

<h3 id="get-signin-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[signin](#schemasignin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

<h1 id="api-for-the-covid-19-tracking-qr-code-signin-server-passwords">Passwords</h1>

Endpoints related to changing and resetting passwords

## Used for changing your password

> Code samples

```bash
curl https://example.com/changePassword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}" \
  -d '{
    "old_password": "hunter3",
    "password": "hunter4"
  }'
```

`POST /changePassword`

Pass in your old password and your new password

> Body parameter

```json
{
  "old_password": "hunter3",
  "password": "hunter4"
}
```

<h3 id="used-for-changing-your-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Change Password Payload|
|» old_password|body|string|false|The old (current) password|
|» password|body|string|false|The new password|

> Example responses

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="used-for-changing-your-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Used for requesting a password reset code

> Code samples

```bash
curl https://example.com/requestPasswordReset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}" \
  -d '{
    "email": "user@example.com"
  }'
```

`POST /requestPasswordReset`

The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.


> Body parameter

```json
{
  "email": "user@example.com"
}
```

<h3 id="used-for-requesting-a-password-reset-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Request Password Reset Payload|
|» email|body|string|false|The user whose password you want to reset|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "guid": "d5e53b3a-ffc1-4436-b085-04aaed5ec861"
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="used-for-requesting-a-password-reset-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[requestPasswordResetResponse](#schemarequestpasswordresetresponse)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Used for resetting your password when you forgot it

> Code samples

```bash
curl https://example.com/verifyPasswordChange \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}" \
  -d '{
    "guid": "d5e53b3a-ffc1-4436-b085-04aaed5ec861",
    "password": "hunter3"
  }'
```

`POST /verifyPasswordChange`

Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.


> Body parameter

```json
{
  "guid": "d5e53b3a-ffc1-4436-b085-04aaed5ec861",
  "password": "hunter3"
}
```

<h3 id="used-for-resetting-your-password-when-you-forgot-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Password Reset Payload|
|» guid|body|string|false|The password reset code|
|» password|body|string|false|The new password|

> Example responses

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="used-for-resetting-your-password-when-you-forgot-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

<h1 id="api-for-the-covid-19-tracking-qr-code-signin-server-team-members">Team Members</h1>

Endpoints related to team member user accounts

## Create a user

> Code samples

```bash
curl https://example.com/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}" \
  -d '{
    "admin": true,
    "email": "user@example.com",
    "name": "Jane Doe",
    "read_only": false
  }'
```

`POST /user`

Use this endpoint to create a team member (user) record

> Body parameter

```json
{
  "admin": true,
  "email": "user@example.com",
  "name": "Jane Doe",
  "read_only": false
}
```

<h3 id="create-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Create User Payload|
|» admin|body|boolean|false|If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.<br>|
|» email|body|string|false|The email address of the user record you want to create|
|» name|body|string|false|The name of the user record you want to create|
|» read_only|body|boolean|false|Not used in this version of the API. For future use.|

> Example responses

> 200 Response

```json
{
  "email": "user@example.com",
  "guid": "d5e53b3a-ffc1-4436-b085-04aaed5ec861"
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="create-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[createUserResponse](#schemacreateuserresponse)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Retrieve the information associated with a team member's user record

> Code samples

```bash
curl https://example.com/user/1 \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}"
```

`GET /user/{userId}`

Retrieve the information associated with a user's account


<h3 id="retrieve-the-information-associated-with-a-team-members-user-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer|true|The ID of the user record to be retrieved.|

> Example responses

> 200 Response

```json
{
  "admin": true,
  "email": "user@example.com",
  "id": 1,
  "name": "John Doe",
  "read_only": false
}
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="retrieve-the-information-associated-with-a-team-members-user-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[userRecord](#schemauserrecord)|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Delete a team member's user record

> Code samples

```bash
curl https://example.com/user/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}"
```

`DELETE /user/{userId}`

To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. 


<h3 id="delete-a-team-members-user-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer|true|The ID of the user record to be deleted.|

> Example responses

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="delete-a-team-members-user-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

## Retrieve the information associated with all team members' user records

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "token: ${API_KEY}"
```

`GET /users`

Retrieve the information associated with all team members' user records


> Example responses

> 200 Response

```json
[
  {
    "admin": true,
    "email": "user@example.com",
    "id": 1,
    "name": "John Doe",
    "read_only": false
  }
]
```

> 401 Response

```json
{
  "message": "Login Failed"
}
```

<h3 id="retrieve-the-information-associated-with-all-team-members-user-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[invalidToken](#schemainvalidtoken)|

<h3 id="retrieve-the-information-associated-with-all-team-members-user-records-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[userRecord](#schemauserrecord)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenHeader
</aside>

# Schemas

<h2 id="tocS_createUserResponse">createUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponse"></a>
<a id="schema_createUserResponse"></a>
<a id="tocScreateuserresponse"></a>
<a id="tocscreateuserresponse"></a>

```json
{
  "email": "user@example.com",
  "guid": "d5e53b3a-ffc1-4436-b085-04aaed5ec861"
}
```

The object that's returned when a user record is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The user's email address|
|guid|string|false|none|The user's password reset code|

<h2 id="tocS_invalidToken">invalidToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtoken"></a>
<a id="schema_invalidToken"></a>
<a id="tocSinvalidtoken"></a>
<a id="tocsinvalidtoken"></a>

```json
{
  "message": "Login Failed"
}
```

Invalid token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_keyFailure">keyFailure</h2>
<!-- backwards compatibility -->
<a id="schemakeyfailure"></a>
<a id="schema_keyFailure"></a>
<a id="tocSkeyfailure"></a>
<a id="tocskeyfailure"></a>

```json
{
  "message": "Key Failures"
}
```

Key Failure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_loginResponse">loginResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloginresponse"></a>
<a id="schema_loginResponse"></a>
<a id="tocSloginresponse"></a>
<a id="tocsloginresponse"></a>

```json
{
  "admin": false,
  "login_id": 1,
  "name": "Firstname Lastname",
  "read_only": false,
  "token": "dc19b0b2-c0e3-821b-821a-d49e8c428479"
}
```

Payload of successful login

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|false|none|True if this user is an admin. False otherwise|
|login_id|integer|false|none|The login id for this user|
|name|string|false|none|This user's name|
|read_only|boolean|false|none|True if this user has permissions to write to the database. False otherwise|
|token|string|false|none|The API key that will be used to authenticate the user.|

<h2 id="tocS_requestPasswordResetResponse">requestPasswordResetResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequestpasswordresetresponse"></a>
<a id="schema_requestPasswordResetResponse"></a>
<a id="tocSrequestpasswordresetresponse"></a>
<a id="tocsrequestpasswordresetresponse"></a>

```json
{
  "email": "user@example.com",
  "guid": "d5e53b3a-ffc1-4436-b085-04aaed5ec861"
}
```

This object contains the password reset code for the user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The user's email address|
|guid|string|false|none|The password reset code|

<h2 id="tocS_signin">signin</h2>
<!-- backwards compatibility -->
<a id="schemasignin"></a>
<a id="schema_signin"></a>
<a id="tocSsignin"></a>
<a id="tocssignin"></a>

```json
{
  "dt": 1593409124.23,
  "email": "jqp@example.com",
  "id": 125,
  "name": "John Q. Public",
  "phone": "(111)222-3333"
}
```

Payload of signin object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dt|number|false|none|The original scan time in number of seconds since 1/1/1970 (GMT)|
|email|string|false|none|The person's email|
|id|integer|false|none|The record id|
|name|string|true|none|The person's name|
|phone|string|true|none|The person's phone number|

<h2 id="tocS_signinResponse">signinResponse</h2>
<!-- backwards compatibility -->
<a id="schemasigninresponse"></a>
<a id="schema_signinResponse"></a>
<a id="tocSsigninresponse"></a>
<a id="tocssigninresponse"></a>

```json
{
  "result": 1
}
```

Response when you successfully create a signin record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|integer|false|none|none|

<h2 id="tocS_userRecord">userRecord</h2>
<!-- backwards compatibility -->
<a id="schemauserrecord"></a>
<a id="schema_userRecord"></a>
<a id="tocSuserrecord"></a>
<a id="tocsuserrecord"></a>

```json
{
  "admin": true,
  "email": "user@example.com",
  "id": 1,
  "name": "John Doe",
  "read_only": false
}
```

A team member user record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|false|none|If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.<br>|
|email|string|false|none|The user's email address|
|id|integer|false|none|The id of the user's record|
|name|string|false|none|The user's name|
|read_only|boolean|false|none|Not used in this version of the API. For future use.|
